<template>
    <div class="shippingInfo">
        <section class="section">
            <div class="container container-small">

                <h1 class="title is-5">Shipping Location</h1>

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

                <div class="box" :class="{'is-active-new': selection == 4}" @click="selection = 4">
                    <h1 class="title is-4">Add new</h1>
                    <div class="field is-grouped">
                        <div class="control is-expanded">
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
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Checkout2 extends Vue {

    private selection = 0;

}
</script>

<style scoped>

.box {
    cursor: pointer;
    transition: 0.2s background-color;
}

.box:hover {
    background-color: #F8F8F8;
}

.box.is-active {
    background-color: #363636;
    color: white;
}

.box.is-active h1 {
    color: white;
}

.box.is-active-new {
    background-color: #F8F8F8;
}

</style>