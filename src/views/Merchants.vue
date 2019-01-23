<template>
    <div id="merchants">
        <section class="section">
            <div class="container has-text-centered">
                <h1 class="title">Merchants</h1>
            </div>
        </section>

        <section class="section" v-for="merchant in $store.state.merchants" :key="merchant.id">
            <div class="container container-small">
                <div class="columns">
                    <div class="column is-one-third">
                        <figure class="img">
                            <img src="../assets/joe.jpg">
                        </figure>
                    </div>
                    <div class="column">
                        <h1 class="title">{{ merchant.name }}</h1>
                        <p>{{ merchant.description }}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    created() {
        this.$store.dispatch('getShopData');
    },
})
export default class Merchants extends Vue {
}
</script>
