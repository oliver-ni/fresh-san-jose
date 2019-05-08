<template>
    <div id="merchants">
        <section class="section retain-margin">
            <div class="container has-text-centered">
                <h1 class="title">Merchants</h1>
            </div>
        </section>

        <!-- <section class="section">
            <div class="container-fluid">
                <div class="tile is-ancestor">
                    <div class="tile is-vertical is-6 is-parent">
                        <div v-for="merchant in $store.state.firebase.merchants.slice(0, $store.state.firebase.merchants.length / 2)" :key="merchant.id" class="tile is-child">
                            <Merchant :merchant="merchant"></Merchant>
                        </div>
                    </div>
                    <div class="tile is-vertical is-6 is-parent">
                        <div v-for="merchant in $store.state.firebase.merchants.slice($store.state.firebase.merchants.length / 2)" :key="merchant.id" class="tile is-child">
                            <Merchant :merchant="merchant"></Merchant>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->

        <div v-for="merchant in $store.state.firebase.merchants" :key="merchant.id" class="container">
            <Merchant :merchant="merchant"></Merchant>
        </div>

        <!-- <div class="hero is-dark" v-for="merchant in $store.state.firebase.merchants" :key="merchant.id"
            :style="{ 'background-image': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/' + merchant.slug + '.JPG)' }">
            <div class="hero-body">
                <div class="container container-small">
                    <h1 class="title is-1">{{ merchant.name }}</h1>
                    <p class="paragraph">{{ merchant.description }}</p>
                    <p class="paragraph"><router-link :to="'/shop/merchant/' + merchant.slug">Shop {{ merchant.name }} products.</router-link></p>
                </div>
            </div>
        </div> -->

        <b-loading :active="loading" :is-full-page="false" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import Merchant from '../components/Merchant.vue';

@Component({
    components: {
        Merchant,
    },
})
export default class Merchants extends Vue {

    private loading = true;

    private created() {
        this.$store.dispatch('getShopData').then(() => {
            this.$store.dispatch('getBackgroundImages').then(() => {
                this.loading = false;
            });
        });
    }

}
</script>

<style scoped>
#merchants > div {
    padding-bottom: 20px;
}
.container {
    max-width: 90%;
}
</style>