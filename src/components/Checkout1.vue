<template>
    <div id="confirmItems">
        <section class="section">
            <div class="container container-small">
                <div class="items">
                    <div class="columns is-multiline is-gapless">
                        <div class="column is-half is-one-third-desktop" v-for="(qty, item) in $store.state.cart" :key="item">
                            <article class="media">
                                <figure class="media-left">
                                    <div class="image" :style="{ 'background-image': ($store.getters.productsByKey[item].image_id in $store.state.images) ? 'url(' + $store.state.images[$store.getters.productsByKey[item].image_id] + ')' : 'linear-gradient(#6BE243, #6BE243)' }">
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
                                $2.99
                            </p>
                            <p class="has-text-faded has-text-weight-bold">
                                {{ formatPrice(1.07 * $store.getters.totalCartPrice + 2.99) }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
export default class Checkout1 extends Vue {
    private formatPrice(price: number) {
        return formatter.format(price);
    }
}
</script>

<style scoped>
.image {
    background-size: cover;
}
</style>