<template>
    <div id="shop">
        <section class="section">
            <div class="container has-text-centered">
                <h1 class="title">Shop</h1>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="columns">

                    <div class="column is-narrow">
                        <div class="columns is-multiline is-mobile has-text-centered-mobile">
                            <div class="column category-filter is-full-tablet is-half-mobile">
                                <h3 class="title is-5 category-heading">Categories</h3>
                                <ul class="category-list">
                                    <router-link tag="li" class="category" exact-active-class="is-active" to="/shop">
                                        <a>All Products</a>
                                    </router-link>
                                    <router-link tag="li" class="category" active-class="is-active" v-for="l_category in $store.state.firebase.categories" :key="l_category.id" :to="'/shop/category/' + l_category.slug">
                                        <a>{{ l_category.name }}</a>
                                    </router-link>
                                </ul>
                            </div>
                            <div class="column category-filter is-full-tablet is-half-mobile">
                                <h3 class="title is-5 category-heading">Merchants</h3>
                                <ul class="category-list">
                                    <router-link tag="li" class="category" active-class="is-active" v-for="l_merchant in $store.state.firebase.merchants" :key="l_merchant.id" :to="'/shop/merchant/' + l_merchant.slug">
                                        <a>{{ l_merchant.name }}</a>
                                    </router-link>
                                </ul>
                            </div>
                        </div>
                    </div>

                        <div class="column">
                            <div class="columns is-multiline has-text-centered">
                                <div class="column is-one-half-tablet is-one-third-desktop is-one-quarter-widescreen is-one-fifth-fullhd" v-for="id in productsToDisplay" :key="id">
                                    <div class="product">
                                        <div class="product-image has-background-primary"></div>
                                        <span class="product-name">{{ $store.getters.productsByKey[id].name }}</span>
                                        <span class="product-price">{{ formatPrice($store.getters.productsByKey[id].price) }} / {{ $store.getters.productsByKey[id].qty_label }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <b-loading :active="!$store.state.dataIsLoaded" :is-full-page="false" />
        </section>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import { mapGetters } from 'vuex';

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
});

@Component
export default class Shop extends Vue {

    private created() {
        this.$store.dispatch('getShopData');
    }

    private formatPrice(price: number) {
        return formatter.format(price);
    }

    private get productsToDisplay() {
        if ('category' in this.$route.params) {
            return this.$store.getters.productsByCategory[this.$route.params.category];
        } else if ('merchant' in this.$route.params) {
            return this.$store.getters.productsByMerchant[this.$route.params.merchant];
        } else {
            return this.$store.getters.allProducts;
        }
    }

}
</script>

<style scoped>
.product {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.product .product-price {
    margin-top: -0.1rem;
    color: #949494;
}

.product .product-image {
    width: 200px;
    height: 200px;
    background-size: cover;
    margin-bottom: 1rem;
    border-radius: 10px;
}

.category-filter {
    margin-bottom: 2rem;
}

.category-filter .title.category-heading {
    margin-bottom: 0.5rem;
}

.category-filter .category-list .category a {
    color: #949494;
}

.category-list .category a:hover,
.category-list .category.is-active a {
    color: #4a4a4a;
}
</style>