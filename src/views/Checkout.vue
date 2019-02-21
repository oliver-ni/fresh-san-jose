<template>
    <div id="checkout">
        <section class="section">
            <div class="container has-text-centered">
                <h1 class="title">Checkout</h1>
            </div>
        </section>

        <section class="section">
            <div class="container container-small">
                <h1 class="title is-5">Your Items</h1>
                <div class="items">
                    <div class="columns is-multiline is-gapless">
                        <div class="column is-half" v-for="item in $store.state.cart" :key="item">
                            <article class="media">
                                <figure class="media-left">
                                    <div class="image has-background-primary">
                                    </div>
                                </figure>
                                <div class="media-content">
                                    <p>{{ $store.getters.productsByKey[item].name }}</p>
                                    <p class="has-text-faded">{{ formatPrice($store.getters.productsByKey[item].price) }}</p>
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
                                {{ formatPrice(0.99 * $store.state.cart.length) }}
                            </p>
                            <p class="has-text-faded has-text-weight-bold">
                                {{ formatPrice(1.07 * $store.getters.totalCartPrice + 0.99 * $store.state.cart.length) }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container container-small">
                <h1 class="title is-5">Shipping &amp; Payment</h1>
                <form>
                    <div class="field is-grouped">
                        <div class="control is-expanded">
                                        <label class="label">Shipping Address</label>
                            <input class="input" type="text" placeholder="Street Address">
                        </div>
                    </div>
                    <div class="field is-grouped">
                        <div class="control is-expanded">
                            <input class="input is-success" type="email" placeholder="City">
                        </div>
                        <div class="control is-expanded">
                            <div class="select is-fullwidth">
                                <select>
                                    <option disabled selected>State</option>
                                    <option>Alabama</option>
                                    <option>Alaska</option>
                                    <option>Arizona</option>
                                    <option>Arkansas</option>
                                    <option>California</option>
                                    <option>Colorado</option>
                                    <option>Connecticut</option>
                                    <option>Delaware</option>
                                    <option>Florida</option>
                                    <option>Georgia</option>
                                    <option>Hawaii</option>
                                    <option>Idaho</option>
                                    <option>Illinois</option>
                                    <option>Indiana</option>
                                    <option>Iowa</option>
                                    <option>Kansas</option>
                                    <option>Kentucky</option>
                                    <option>Louisiana</option>
                                    <option>Maine</option>
                                    <option>Maryland</option>
                                    <option>Massachusetts</option>
                                    <option>Michigan</option>
                                    <option>Minnesota</option>
                                    <option>Mississippi</option>
                                    <option>Missouri</option>
                                    <option>Montana</option>
                                    <option>Nebraska</option>
                                    <option>Nevada</option>
                                    <option>New Hampshire</option>
                                    <option>New Jersey</option>
                                    <option>New Mexico</option>
                                    <option>New York</option>
                                    <option>North Carolina</option>
                                    <option>North Dakota</option>
                                    <option>Ohio</option>
                                    <option>Oklahoma</option>
                                    <option>Oregon</option>
                                    <option>Pennsylvania</option>
                                    <option>Rhode Island</option>
                                    <option>South Carolina</option>
                                    <option>South Dakota</option>
                                    <option>Tennessee</option>
                                    <option>Texas</option>
                                    <option>Utah</option>
                                    <option>Vermont</option>
                                    <option>Virginia</option>
                                    <option>Washington</option>
                                    <option>West Virginia</option>
                                    <option>Wisconsin</option>
                                    <option>Wyoming</option>
                                </select>
                            </div>
                        </div>
                        <div class="control is-expanded">
                            <input class="input is-success" type="email" placeholder="Zip">
                        </div>
                    </div>
                                    <div class="field">
                                        <label class="label">Card Number</label>
                                        <p class="control">
                                            <input class="input" type="tel" placeholder="0000 0000 0000 0000" required autofocus>
                                        </p>
                                    </div>

                                    <div class="columns is-mobile">
                                        <div class="column is-6 ">
                                            <div class="field">
                                                <label class="label">Expiry Date</label>
                                                <p class="control">
                                                    <input class="input" type="tel" placeholder="MM/YY" required>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="column is-6">
                                            <div class="field">
                                                <label class="label">CVV</label>
                                                <p class="control">
                                                    <input class="input" type="tel" placeholder="987" required>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="field">
                                        <p class="control">
                                            <a class="button is-black" type="submit">Submit Payment</a>
                                        </p>
                                    </div>
                </form>
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
export default class Checkout extends Vue {
    private formatPrice(price: number) {
        return formatter.format(price);
    }
}
</script>

<style>
.items .image {
    height: 38px;
    width: 38px;
}

.items .media p {
    line-height: 120%;
}

.items .columns {
    margin-bottom: 0;
}

.items .media {
    border: none;
    margin-bottom: 1rem;
    padding: 0;
    margin-top: 0;
}
</style>
