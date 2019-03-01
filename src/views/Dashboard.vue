<template>
    <div id="shop">
        <section class="section">
            <div class="container has-text-centered">
                <h1 class="title">Dashboard</h1>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <router-view></router-view>
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