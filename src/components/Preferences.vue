<template>
    <div id="orders">
        <h1 class="title is-5">Shipping Locations</h1>

        <div class="columns is-multiline">
            <div class="column is-3">
                <div class="box" :class="{'is-active': selection == 0}" @click="selection = 0">
                    <h1 class="title is-4">Pick Up In Store</h1>
                    <p>1280 Johnson Ave</p>
                    <p>San Jose, CA 95129</p>
                </div>
            </div>
            <div class="column is-3">
                <div class="box" :class="{'is-active': selection == 1}" @click="selection = 1">
                    <h1 class="title is-4">Home</h1>
                    <p>1057 Harlan Dr</p>
                    <p>San Jose, CA 95129</p>
                </div>
            </div>
            <div class="column is-3">
                <div class="box" :class="{'is-active': selection == 2}" @click="selection = 2">
                    <h1 class="title is-4">Miller</h1>
                    <p>6151 Rainbow Dr</p>
                    <p>San Jose, CA 95129</p>
                </div>
            </div>
            <div class="column is-3">
                <div class="box" :class="{'is-active': selection == 3}" @click="selection = 3">
                    <h1 class="title is-4">Dilworth</h1>
                    <p>1101 Strayer Dr</p>
                    <p>San Jose, CA 95129</p>
                </div>
            </div>
        </div>

        <h1 class="title is-5">Payment Options</h1>

        <div class="columns is-multiline">
            <div class="column is-3">
                <div class="box" :class="{'is-active': selection == 0}" @click="selection = 0">
                    <h1 class="title is-4">Visa x-5728</h1>
                    <p>1280 Johnson Ave</p>
                    <p>San Jose, CA 95129</p>
                </div>
            </div>
            <div class="column is-3">
                <div class="box" :class="{'is-active': selection == 1}" @click="selection = 1">
                    <h1 class="title is-4">Visa x-3937</h1>
                    <p>1280 Johnson Ave</p>
                    <p>San Jose, CA 95129</p>
                </div>
            </div>
            <div class="column is-3">
                <div class="box" :class="{'is-active': selection == 2}" @click="selection = 2">
                    <h1 class="title is-4">Visa x-0550</h1>
                    <p>1280 Johnson Ave</p>
                    <p>San Jose, CA 95129</p>
                </div>
            </div>
            <div class="column is-3">
                <div class="box" :class="{'is-active': selection == 3}" @click="selection = 3">
                    <h1 class="title is-4">Visa x-9897</h1>
                    <p>1280 Johnson Ave</p>
                    <p>San Jose, CA 95129</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Preferences extends Vue {
}
</script>
