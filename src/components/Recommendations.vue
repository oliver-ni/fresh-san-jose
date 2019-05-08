<template>
    <div id="orders">
        <h1 class="title is-5">Recommendations</h1>
        <div class="columns is-multiline has-text-centered">
            <div class="column is-one-half-tablet is-one-third-desktop is-one-quarter-widescreen is-one-fifth-fullhd" v-for="product in $store.state.firebase.products.slice(0, 5)" :key="product.id">
                <div class="product">
                    <div class="product-image"
                        v-lazy:background-image="$store.state.images[product.image_id]"
                        @click="$router.push('/shop')">
                    </div>
                    <span class="product-name">{{ product.name }}</span>
                    <span class="product-price">{{ formatPrice(product.price) }} / {{ product.qty_label }}</span>
                </div>
            </div>
        </div>
        <b-loading :active="loading" :is-full-page="false" />
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
export default class Recommendations extends Vue {

    private loading = true;

    private created() {
        this.$store.dispatch('getShopData').then(() => {
            this.$store.dispatch('getBackgroundImages').then(() => {
                this.loading = false;
            });
        });
    }

    private formatPrice(price: number) {
        return formatter.format(price);
    }

}
</script>


<style scoped>
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
    width: 200px;
    height: 200px;
    background-size: cover;
    margin-bottom: 1rem;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
}

.product .product-image::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0);
    transition: background-color 0.2s, color 0.2s;
}

.product .product-image:hover::before {
    background-color: rgba(0, 0, 0, 0.3);
}
</style>