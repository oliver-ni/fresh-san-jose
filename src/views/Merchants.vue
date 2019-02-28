<template>
    <div id="merchants">
        <section class="section retain-margin">
            <div class="container has-text-centered">
                <h1 class="title">Merchants</h1>
            </div>
        </section>

        <div class="hero is-dark" v-for="merchant in $store.state.firebase.merchants" :key="merchant.id">
            <div class="hero-body">
                <div class="container container-small">
                    <h1 class="title is-1 is-display-1">{{ merchant.name }}</h1>
                    <p class="paragraph">{{ merchant.description }}</p>
                    <p class="paragraph"><router-link :to="'/shop/merchant/' + merchant.slug">Shop {{ merchant.name }} products.</router-link></p>
                </div>
            </div>
        </div>

        <b-loading :active="!$store.state.dataIsLoaded" :is-full-page="false" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Merchants extends Vue {

    private created() {
        this.$store.dispatch('getShopData');
    }

}
</script>

<style scoped>
.hero {
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../assets/joe.jpg);
    background-size: cover;
    background-position: center;
}
</style>