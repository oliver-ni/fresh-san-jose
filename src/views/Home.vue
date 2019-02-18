<template>
    <div id="home">
        <section class="hero is-large is-dark header">
            <div class="hero-body has-text-centered">
                <div class="container">
                    <h1 class="title is-display-1 has-text-shadow">From the farm to your doorstep.</h1>
                    <router-link class="button" to="/shop">Shop Now</router-link>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container container-small has-text-centered">
                <h1 class="title">How it works</h1>
                <div class="columns is-8 is-variable">
                    <div class="column">
                        <div class="step">
                            <b-icon
                                icon="mouse-pointer"
                                size="is-large">
                            </b-icon>
                            <p><strong>Step 1.</strong> Select your items online. We have a wide selection of produce from various merchants.</p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="step">
                            <b-icon
                                icon="shopping-basket"
                                size="is-large">
                            </b-icon>
                            <p><strong>Step 2.</strong> After you select your items, place your order. Enter your payment and shipping details.</p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="step">
                            <b-icon
                                icon="truck"
                                size="is-large">
                            </b-icon>
                            <p><strong>Step 3.</strong> Have your items delivered right to your doorstep, or pick it up at one of our store locations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.header {
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("../assets/bg.jpg");
    background-size: cover;
    background-position: center;
}

.step {
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
}
</style>
