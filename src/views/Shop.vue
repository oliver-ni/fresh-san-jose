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
                                    <div class="product-image has-background-primary" @click="launchModal(id)"></div>
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

        <transition name="fade">
            <div class="cart">
                <a class="button is-rounded is-dark" v-if="!showCart" @click="toggleCart()">
                    <span class="icon is-small">
                        <i class="fas fa-shopping-basket"></i>
                    </span>
                </a>
                <div class="box" v-if="showCart">
                    <a class="close-icon"><span @click="toggleCart()" class="icon">
                        <i class="fas fa-times"></i>
                    </span></a>

                    <h1 class="title is-5">Your Basket</h1>

                    <p v-if="Object.keys($store.state.cart).length == 0" style="margin-bottom: 1rem;">Fill me up! I'm empty!</p>

                    <article class="media" v-for="(qty, item) in $store.state.cart" :key="item">
                        <figure class="media-left">
                            <div class="image has-background-primary">
                            </div>
                        </figure>
                        <div class="media-content">
                            <p>{{ $store.getters.productsByKey[item].name }}</p>
                            <p class="has-text-faded">{{ formatPrice($store.getters.productsByKey[item].price) }} x {{ qty }}</p>
                        </div>
                    </article>
                    <div class="columns" v-if="Object.keys($store.state.cart).length > 0">
                        <div class="column">
                            <p>Subtotal</p>
                        </div>
                        <div class="column has-text-right">
                            <p class="has-text-faded">
                                {{ formatPrice($store.getters.totalCartPrice) }}
                            </p>
                        </div>
                    </div>
                    <router-link to="/checkout" class="button is-fullwidth is-dark" v-if="$store.getters.isLoggedIn">Place Order Now</router-link>
                    <router-link to="/login?next=/checkout" class="button is-fullwidth is-dark" v-if="!$store.getters.isLoggedIn">Place Order Now</router-link>
                </div>
            </div>
        </transition>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Product from '@/components/Product.vue';

import { mapGetters } from 'vuex';

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
});

@Component
export default class Shop extends Vue {

    private showCart = false;

    private toggleCart() {
        this.showCart = !this.showCart;
    }

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

    private launchModal(id: string) {
        this.$modal.open({
            parent: this,
            component: Product,
            hasModalCard: true,
            props: {
                productKey: id,
            },
        });
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
    position: relative;
    cursor: pointer;
}

.product .product-image::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;
    background: black;
    opacity: 0;
    transition: opacity 0.2s;
}

.product .product-image:hover::after {
    opacity: 0.1
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

.cart {
    position: fixed;
    bottom: 30px;
    right: 30px;
}

.cart > .button {
    height: 60px;
    width: 60px;
    padding: 0;
    font-size: 20px;
}

.cart .box {
    min-width: 300px;
    max-height: 600px;
    overflow: scroll;
    position: relative;
}

.cart .box .close-icon {
    position: absolute;
    top: 10px;
    right: 10px;
}

.cart .box .image {
    height: 38px;
    width: 38px;
}

.cart .box .media p {
    line-height: 120%;
}

.cart .columns {
    margin-bottom: 0;
}

.cart .box .media {
    border: none;
    margin-bottom: 1rem;
    padding: 0;
    margin-top: 0;
}
</style>