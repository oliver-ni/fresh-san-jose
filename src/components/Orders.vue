<template>
    <div id="orders">
        <h1 class="title is-5">Pending Orders</h1>

        <div class="columns is-multiline">
            <div class="column is-half" v-for="(order, index) in orders.slice(0, 2)" :key="order.id">
                <div class="box">
                    <h1 class="title is-5">{{ formatDate(order.time.seconds) }}</h1>

                    <div class="steps is-small">
                        <div class="step-item is-completed">
                            <div class="step-marker">
                                <i class="fas fa-seedling"></i>
                            </div>
                            <div class="step-details">
                                <p class="step-title">Confirmed</p>
                            </div>
                        </div>
                        <div class="step-item" :class="{'is-completed': index > 0, 'is-active': index == 0}">
                            <div class="step-marker">
                                <i class="fas fa-truck"></i>
                            </div>
                            <div class="step-details">
                                <p class="step-title">In Transport</p>
                            </div>
                        </div>
                        <div class="step-item" :class="{'is-active': index > 0}">
                            <div class="step-marker">
                                <i class="fas fa-home"></i>
                            </div>
                            <div class="step-details">
                                <p class="step-title">Delivered</p>
                            </div>
                        </div>
                    </div>

                    <article class="media" v-for="(qty, item) in order.items" :key="item.id">
                        <figure class="media-left">
                            <div class="image" :style="{ 'background-image': ($store.getters.productsByKey[item].image_id in $store.state.images) ? 'url(' + $store.state.images[$store.getters.productsByKey[item].image_id] + ')' : 'linear-gradient(#6BE243, #6BE243)' }">
                            </div>
                        </figure>
                        <div class="media-content">
                            <p>{{ $store.getters.productsByKey[item].name }}</p>
                            <p class="has-text-faded">{{ formatPrice($store.getters.productsByKey[item].price) }} x {{ qty }}</p>
                        </div>
                    </article>
                    <div class="fg-1"></div>
                    <div class="columns is-gapless">
                        <div class="column">
                            <p>Subtotal</p>
                            <p>Tax</p>
                            <p>Delivery</p>
                            <p class="has-text-weight-bold">Total Paid</p>
                            <br>
                            <p>Paid with</p>
                            <p>Ship to</p>
                        </div>
                        <div class="column has-text-right">
                            <p class="has-text-faded">
                                {{ formatPrice(getPrice(order.items)) }}
                            </p>
                            <p class="has-text-faded">
                                {{ formatPrice(0.07 * getPrice(order.items)) }}
                            </p>
                            <p class="has-text-faded">
                                Free
                            </p>
                            <p class="has-text-faded has-text-weight-bold">
                                {{ formatPrice(1.07 * getPrice(order.items)) }}
                            </p>
                            <br>
                            <p class="has-text-faded">Visa x-5728</p>
                            <p class="has-text-faded">Pick Up In Store</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <h1 class="title is-5">Past Orders</h1>

        <div class="columns is-multiline">
            <div class="column is-half" v-for="order in orders.slice(2)" :key="order.id">
                <div class="box">
                    <h1 class="title is-5">{{ formatDate(order.time.seconds) }}</h1>

                    <article class="media" v-for="(qty, item) in order.items" :key="item.id">
                        <figure class="media-left">
                            <div class="image" :style="{ 'background-image': ($store.getters.productsByKey[item].image_id in $store.state.images) ? 'url(' + $store.state.images[$store.getters.productsByKey[item].image_id] + ')' : 'linear-gradient(#6BE243, #6BE243)' }">
                            </div>
                        </figure>
                        <div class="media-content">
                            <p>{{ $store.getters.productsByKey[item].name }}</p>
                            <p class="has-text-faded">{{ formatPrice($store.getters.productsByKey[item].price) }} x {{ qty }}</p>
                        </div>
                    </article>
                    <div class="fg-1"></div>
                    <div class="columns is-gapless">
                        <div class="column">
                            <p>Subtotal</p>
                            <p>Tax</p>
                            <p>Delivery</p>
                            <p class="has-text-weight-bold">Total Paid</p>
                            <br>
                            <p>Paid with</p>
                            <p>Ship to</p>
                        </div>
                        <div class="column has-text-right">
                            <p class="has-text-faded">
                                {{ formatPrice(getPrice(order.items)) }}
                            </p>
                            <p class="has-text-faded">
                                {{ formatPrice(0.07 * getPrice(order.items)) }}
                            </p>
                            <p class="has-text-faded">
                                Free
                            </p>
                            <p class="has-text-faded has-text-weight-bold">
                                {{ formatPrice(1.07 * getPrice(order.items)) }}
                            </p>
                            <br>
                            <p class="has-text-faded">Visa x-5728</p>
                            <p class="has-text-faded">Pick Up In Store</p>
                        </div>
                    </div>
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
export default class Orders extends Vue {
    private loading = true;

    private formatPrice(price: number) {
        return formatter.format(price);
    }

    get orders() {
        return this.$store.state.firebase.orders.sort((a: any, b: any) => {
            return b.time.seconds - a.time.seconds;
        });
    }

    private async created() {
        await this.$store.dispatch('getShopData');
        this.loading = false;
        await this.$store.dispatch('getBackgroundImages');
    }

    private getPrice(products: any) {
        return Object.keys(products).reduce((acc, key) => {
            return acc + this.$store.getters.productsByKey[key].price * products[key];
        }, 0);
    }

    private formatDate(seconds: number) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return (new Date(seconds * 1000)).toLocaleDateString('en-US', options);
    }
}
</script>

<style>
.columns .column .box {
    height: 100%;
    display: flex;
    flex-direction: column;
}
.box .image {
    height: 38px;
    width: 38px;
    background-size: cover;
    border-radius: 6px;
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

.fg-1 {
    flex-grow: 1;
}
</style>
