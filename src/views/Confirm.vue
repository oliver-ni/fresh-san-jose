<template>
    <div id="merchants">
        <section class="section" v-if="!this.isLoading">
            <div class="container has-text-centered">
                <h1 class="title">Your order has been confirmed!</h1>
            </div>
        </section>

        <section class="section" v-if="!this.isLoading">
            <div class="container container-small">
                <h1 class="title is-4">Thank you for supporting your local community!</h1>


                <div class="box">
                    <h1 class="title is-4 is-spaced">{{ getDate() }}</h1>
                    <h3 class="subtitle is-6">Order Number: {{ getOrderNumber() }}</h3>
                    <div class="columns is-multiline is-gapless">
                        <div class="column is-half" v-for="(qty, item) in $store.state.cart" :key="item">
                            <article class="media">
                                <figure class="media-left">
                                    <div class="image has-background-primary">
                                    </div>
                                </figure>
                                <div class="media-content">
                                    <p>{{ $store.getters.productsByKey[item].name }}</p>
                                    <p class="has-text-faded">{{ formatPrice($store.getters.productsByKey[item].price) }} x {{ qty }}</p>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div class="columns is-gapless">
                        <div class="column">
                            <p>Subtotal</p>
                            <p>Tax</p>
                            <p>Delivery</p>
                            <p class="has-text-weight-bold">Total</p>
                        </div>
                        <div class="column has-text-right">
                            <p class="has-text-faded">
                                {{ formatPrice($store.getters.totalCartPrice) }}
                            </p>
                            <p class="has-text-faded">
                                {{ formatPrice(0.07 * $store.getters.totalCartPrice) }}
                            </p>
                            <p class="has-text-faded">
                                {{ formatPrice(0.99 * Object.keys($store.state.cart).length) }}
                            </p>
                            <p class="has-text-faded has-text-weight-bold">
                                {{ formatPrice(1.07 * $store.getters.totalCartPrice + 0.99 * Object.keys($store.state.cart).length) }}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
                <b-loading :is-full-page="false" :active.sync="isLoading"></b-loading>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
});

@Component
export default class Confirm extends Vue {
    private isLoading = true;
    private created() {
        setTimeout(() => this.isLoading = false, 0.5 * 1000)
    }

    private formatPrice(price: number) {
        return formatter.format(price);
    }
    private getDate() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return (new Date()).toLocaleDateString('en-US', options);
    }
    private getOrderNumber() {
        return Math.floor(Math.random() * 100000) + 100000;
    }
}
</script>