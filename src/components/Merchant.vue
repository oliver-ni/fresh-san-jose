<template>
    <div class="merchant"
        v-lazy:background-image="'/' + merchant.slug + '.JPG'"
        @mouseover="show = true" @mouseout="show = false">
        <div class="hero-body">
            <h1 class="title is-1 has-text-white">{{ merchant.name }}</h1>
            <transition name="fade">
                <div v-if="show" class="merchant-description">
                    <p class="paragraph has-text-white">{{ merchant.description }}</p>

                    <div class="products m-l">
                        <div class="product" v-for="id in $store.getters.productsByMerchant[merchant.slug]" :key="id">
                            <div class="product-image"
                                v-lazy:background-image="$store.state.images[$store.getters.productsByKey[id].image_id]"
                                @click="launchModal(id)"></div>
                            <!-- <span class="product-name has-text-white">{{ $store.getters.productsByKey[id].name }}</span> -->
                        </div>
                    </div>

                    <router-link class="button m-l" :to="'/shop/merchant/' + merchant.slug">Shop Now</router-link>

                </div>
            </transition>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import smoothReflow from 'vue-smooth-reflow';

@Component({
    mixins: [smoothReflow],
    props: {
        merchant: Object,
    },
})
export default class Merchant extends Vue {

    private show = false;

    private mounted() {
        this.$smoothReflow!({
            transition: 'height 0.2s',
            transitionEvent: {
                selector: 'div',
                propertyName: 'opacity',
            },
        });
    }

}
</script>

<style scoped>
.merchant {
    background-size: cover;
    background-position: center;
    background-color: rgba(0, 0, 0, 0.55);
    background-blend-mode: multiply;
    border-radius: 10px;
    transition: background-color 0.2s;
    padding-left: 20px;
    padding-right: 20px;
}

.merchant:hover {
    background-color: rgba(0, 0, 0, 0.8);
}

.m-l {
    margin-top: 1rem;
}

.merchant .products .product + .product {
    margin-left: 1rem;
}

.merchant .products {
    display: flex;
    overflow-x: scroll;
}

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
    width: 80px;
    height: 80px;
    background-size: cover;
    margin-bottom: 0.2rem;
    border-radius: 10px;
    position: relative;
}
</style>