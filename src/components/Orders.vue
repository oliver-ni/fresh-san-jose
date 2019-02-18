<template>
    <div id="orders">
        <h1 class="title is-5">Your Orders</h1>
        <div class="columns is-multiline">
            <div class="column is-half">
                <div class="box">
                    <h1 class="title is-5">February 15, 2019</h1>
                    <article class="media">
                        <figure class="media-left">
                            <div class="image has-background-primary">
                            </div>
                        </figure>
                        <div class="media-content">
                            <p>Gala Apples</p>
                            <p class="has-text-faded">$1.79</p>
                        </div>
                    </article>
                    <article class="media">
                        <figure class="media-left">
                            <div class="image has-background-primary">
                            </div>
                        </figure>
                        <div class="media-content">
                            <p>Raspberries</p>
                            <p class="has-text-faded">$3.99</p>
                        </div>
                    </article>
                    <article class="media">
                        <figure class="media-left">
                            <div class="image has-background-primary">
                            </div>
                        </figure>
                        <div class="media-content">
                            <p>Seedless Watermelon</p>
                            <p class="has-text-faded">$3.99</p>
                        </div>
                    </article>
                    <article class="media">
                        <figure class="media-left">
                            <div class="image has-background-primary">
                            </div>
                        </figure>
                        <div class="media-content">
                            <p>Whole Chicken</p>
                            <p class="has-text-faded">$9.99</p>
                        </div>
                    </article>
                    <div class="columns is-gapless">
                        <div class="column">
                            <p>Subtotal</p>
                        </div>
                        <div class="column has-text-right">
                            <p class="has-text-faded">
                                {{ formatPrice($store.getters.totalCartPrice) }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-half">
                <div class="box">
                    <h1 class="title is-5">February 2, 2019</h1>
                    <article class="media">
                        <figure class="media-left">
                            <div class="image has-background-primary">
                            </div>
                        </figure>
                        <div class="media-content">
                            <p>Gala Apples</p>
                            <p class="has-text-faded">$1.79</p>
                        </div>
                    </article>
                    <article class="media">
                        <figure class="media-left">
                            <div class="image has-background-primary">
                            </div>
                        </figure>
                        <div class="media-content">
                            <p>Raspberries</p>
                            <p class="has-text-faded">$3.99</p>
                        </div>
                    </article>
                    <article class="media">
                        <figure class="media-left">
                            <div class="image has-background-primary">
                            </div>
                        </figure>
                        <div class="media-content">
                            <p>Seedless Watermelon</p>
                            <p class="has-text-faded">$3.99</p>
                        </div>
                    </article>
                    <article class="media">
                        <figure class="media-left">
                            <div class="image has-background-primary">
                            </div>
                        </figure>
                        <div class="media-content">
                            <p>Whole Chicken</p>
                            <p class="has-text-faded">$9.99</p>
                        </div>
                    </article>
                    <div class="columns is-gapless">
                        <div class="column">
                            <p>Subtotal</p>
                        </div>
                        <div class="column has-text-right">
                            <p class="has-text-faded">
                                {{ formatPrice($store.getters.totalCartPrice) }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-half">
                <div class="box">
                    <h1 class="title is-5">January 23, 2019</h1>
                    <article class="media">
                        <figure class="media-left">
                            <div class="image has-background-primary">
                            </div>
                        </figure>
                        <div class="media-content">
                            <p>Gala Apples</p>
                            <p class="has-text-faded">$1.79</p>
                        </div>
                    </article>
                    <article class="media">
                        <figure class="media-left">
                            <div class="image has-background-primary">
                            </div>
                        </figure>
                        <div class="media-content">
                            <p>Raspberries</p>
                            <p class="has-text-faded">$3.99</p>
                        </div>
                    </article>
                    <article class="media">
                        <figure class="media-left">
                            <div class="image has-background-primary">
                            </div>
                        </figure>
                        <div class="media-content">
                            <p>Seedless Watermelon</p>
                            <p class="has-text-faded">$3.99</p>
                        </div>
                    </article>
                    <article class="media">
                        <figure class="media-left">
                            <div class="image has-background-primary">
                            </div>
                        </figure>
                        <div class="media-content">
                            <p>Whole Chicken</p>
                            <p class="has-text-faded">$9.99</p>
                        </div>
                    </article>
                    <div class="columns is-gapless">
                        <div class="column">
                            <p>Subtotal</p>
                        </div>
                        <div class="column has-text-right">
                            <p class="has-text-faded">
                                {{ formatPrice($store.getters.totalCartPrice) }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-half">
                <div class="box">
                    <h1 class="title is-5">January 17, 2019</h1>
                    <article class="media">
                        <figure class="media-left">
                            <div class="image has-background-primary">
                            </div>
                        </figure>
                        <div class="media-content">
                            <p>Gala Apples</p>
                            <p class="has-text-faded">$1.79</p>
                        </div>
                    </article>
                    <article class="media">
                        <figure class="media-left">
                            <div class="image has-background-primary">
                            </div>
                        </figure>
                        <div class="media-content">
                            <p>Raspberries</p>
                            <p class="has-text-faded">$3.99</p>
                        </div>
                    </article>
                    <article class="media">
                        <figure class="media-left">
                            <div class="image has-background-primary">
                            </div>
                        </figure>
                        <div class="media-content">
                            <p>Seedless Watermelon</p>
                            <p class="has-text-faded">$3.99</p>
                        </div>
                    </article>
                    <article class="media">
                        <figure class="media-left">
                            <div class="image has-background-primary">
                            </div>
                        </figure>
                        <div class="media-content">
                            <p>Whole Chicken</p>
                            <p class="has-text-faded">$9.99</p>
                        </div>
                    </article>
                    <div class="columns is-gapless">
                        <div class="column">
                            <p>Subtotal</p>
                        </div>
                        <div class="column has-text-right">
                            <p class="has-text-faded">
                                {{ formatPrice($store.getters.totalCartPrice) }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-half">
                <div class="box">
                    <h1 class="title is-5">January 12, 2019</h1>
                    <article class="media">
                        <figure class="media-left">
                            <div class="image has-background-primary">
                            </div>
                        </figure>
                        <div class="media-content">
                            <p>Gala Apples</p>
                            <p class="has-text-faded">$1.79</p>
                        </div>
                    </article>
                    <article class="media">
                        <figure class="media-left">
                            <div class="image has-background-primary">
                            </div>
                        </figure>
                        <div class="media-content">
                            <p>Raspberries</p>
                            <p class="has-text-faded">$3.99</p>
                        </div>
                    </article>
                    <article class="media">
                        <figure class="media-left">
                            <div class="image has-background-primary">
                            </div>
                        </figure>
                        <div class="media-content">
                            <p>Seedless Watermelon</p>
                            <p class="has-text-faded">$3.99</p>
                        </div>
                    </article>
                    <article class="media">
                        <figure class="media-left">
                            <div class="image has-background-primary">
                            </div>
                        </figure>
                        <div class="media-content">
                            <p>Whole Chicken</p>
                            <p class="has-text-faded">$9.99</p>
                        </div>
                    </article>
                    <div class="columns is-gapless">
                        <div class="column">
                            <p>Subtotal</p>
                        </div>
                        <div class="column has-text-right">
                            <p class="has-text-faded">
                                {{ formatPrice($store.getters.totalCartPrice) }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-half">
                <div class="box">
                    <h1 class="title is-5">January 5, 2019</h1>
                    <article class="media">
                        <figure class="media-left">
                            <div class="image has-background-primary">
                            </div>
                        </figure>
                        <div class="media-content">
                            <p>Gala Apples</p>
                            <p class="has-text-faded">$1.79</p>
                        </div>
                    </article>
                    <article class="media">
                        <figure class="media-left">
                            <div class="image has-background-primary">
                            </div>
                        </figure>
                        <div class="media-content">
                            <p>Raspberries</p>
                            <p class="has-text-faded">$3.99</p>
                        </div>
                    </article>
                    <article class="media">
                        <figure class="media-left">
                            <div class="image has-background-primary">
                            </div>
                        </figure>
                        <div class="media-content">
                            <p>Seedless Watermelon</p>
                            <p class="has-text-faded">$3.99</p>
                        </div>
                    </article>
                    <article class="media">
                        <figure class="media-left">
                            <div class="image has-background-primary">
                            </div>
                        </figure>
                        <div class="media-content">
                            <p>Whole Chicken</p>
                            <p class="has-text-faded">$9.99</p>
                        </div>
                    </article>
                    <div class="columns is-gapless">
                        <div class="column">
                            <p>Subtotal</p>
                        </div>
                        <div class="column has-text-right">
                            <p class="has-text-faded">
                                {{ formatPrice($store.getters.totalCartPrice) }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
export default class Overview extends Vue {
    private formatPrice(price: number) {
        return formatter.format(price);
    }
}
</script>

<style>
.box .image {
    height: 38px;
    width: 38px;
}

.box .media p {
    line-height: 120%;
}

.box .columns {
    margin-bottom: 0;
}

.box .media {
    border: none;
    margin-bottom: 1rem;
    padding: 0;
    margin-top: 0;
}
</style>
