<template>
    <div class="modal-card" style="width: auto; min-width: 50vw;">
        <section class="modal-card-body">
            <div class="columns">
                <div class="column is-5">
                    <figure class="image is-square has-background-primary"></figure>
                </div>
                <div class="column item-description">
                    <div>
                        <h1 class="title">{{ $store.getters.productsByKey[productKey].name }}</h1>
                        <p>{{ $store.getters.productsByKey[productKey].description }}</p>
                    </div>
                    <a class="button is-black" @click="addToCart()" v-if="!$store.state.cart.includes(productKey)">Add to cart</a>
                    <a class="button is-black" @click="addToCart()" v-if="$store.state.cart.includes(productKey)" disabled>Already in cart</a>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    props: ['productKey'],
})
export default class Product extends Vue {
    public addToCart() {
        this.$store.commit('addToCart', this.$props.productKey);
        // @ts-ignore
        this.$parent.close();
    }
}
</script>

<style>

.columns .image {
    border-radius: 6px;
}

.modal-card-body {
    border-radius: 6px;
}

.item-description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>
