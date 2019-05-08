<template>
    <div class="modal-card" style="width: auto; min-width: 50vw;">
        <section class="modal-card-body">
            <div class="columns">
                <div class="column is-5">
                    <figure class="image is-square bg-cover" :style="{ 'background-image': 'url(' + image + ')' }"></figure>
                </div>
                <div class="column item-description">
                    <div class="item-head">
                        <h1 class="title">{{ $store.getters.productsByKey[productKey].name }}</h1>
                        <p>{{ $store.getters.productsByKey[productKey].description }}</p>
                    </div>
                    <div class="item-foot">
                        <input class="input" type="number" placeholder="QTY" min="0" v-model.number="qty">
                        <a class="button is-dark" @click="updateCart()">Update cart</a>
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
    props: ['productKey', 'image', 'openCart'],
})
export default class Product extends Vue {
    private qty = 1;
    public updateCart() {
        if (Object.keys(this.$store.state.cart).length === 0) {
            // @ts-ignore
            this.openCart();
        }
        this.$store.commit('updateCart', { key: this.$props.productKey, qty: this.qty });
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

.item-foot {
    display: flex;
}

.item-foot .button {
    flex-grow: 1;
}

.item-foot input {
    height: 100%;
    max-width: 100px;
    /* padding-top: 10px; */
    margin-right: 1rem;
}
</style>
