<template>
    <div id="checkout">
        <section class="section">
            <div class="container has-text-centered">
                <h1 class="title">Checkout</h1>
            </div>
        </section>

        <div v-if="!$store.getters.isLoggedIn"><section class="section"><div class="container container-small"><p>You must be logged in to continue</p></div></section></div>

        <div v-if="$store.getters.isLoggedIn">

            <section class="section">
                <div class="container container-small">

                    <div class="steps">
                        <div class="step-item" v-bind:class="{ 'is-completed': currentStep > 1, 'is-active': currentStep == 1 }">
                            <div class="step-marker">
                                <i class="fas fa-shopping-basket"></i>
                            </div>
                            <div class="step-details">
                                <p class="step-title">Step 1</p>
                                <p>Confirm Your Items</p>
                            </div>
                        </div>
                        <div class="step-item" v-bind:class="{ 'is-completed': currentStep > 2, 'is-active': currentStep == 2 }">
                            <div class="step-marker">
                                <i class="fas fa-home"></i>
                            </div>
                            <div class="step-details">
                                <p class="step-title">Step 2</p>
                                <p>Shipping Information</p>
                            </div>
                        </div>
                        <div class="step-item" v-bind:class="{ 'is-completed': currentStep > 3, 'is-active': currentStep == 3 }">
                            <div class="step-marker">
                                <i class="fas fa-credit-card"></i>
                            </div>
                            <div class="step-details">
                                <p class="step-title">Step 3</p>
                                <p>Payment Information</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Checkout1 :style="{ 'display': currentStep != 1 ? 'none' : 'block' }" />
            <Checkout2 :style="{ 'display': currentStep != 2 ? 'none' : 'block' }" />
            <Checkout3 :style="{ 'display': currentStep != 3 ? 'none' : 'block' }" />

            <section class="section">
                <div class="container container-small" style="display: flex; justify-content: space-between;">
                    <div v-if="currentStep == 1"></div>
                    <a class="button" @click="currentStep--" v-if="currentStep != 1">Previous</a>
                    <a class="button" @click="currentStep++" v-if="currentStep != 3">Next</a>
                    <router-link to="/confirm" class="button is-dark" type="submit" v-if="currentStep == 3">Submit Payment</router-link>
                </div>
            </section>

        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import Checkout1 from '../components/Checkout1.vue';
import Checkout2 from '../components/Checkout2.vue';
import Checkout3 from '../components/Checkout3.vue';

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
});

@Component({
    components: {
        Checkout1,
        Checkout2,
        Checkout3,
    },
})
export default class Checkout extends Vue {

    private currentStep = 1;

    private inStore = false;
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
