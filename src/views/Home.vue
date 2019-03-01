<template>
    <div id="home">
        <section class="hero is-large is-dark header">
            <carousel :perPage="1" paginationActiveColor="#FFFFFF" paginationColor="#999999" :navigationEnabled="true">
                <slide></slide>
                <slide></slide>
                <slide></slide>
            </carousel>
            <div class="hero-body has-text-centered">
                <div class="container">
                    <h1 class="title is-1 is-display-1 has-text-shadow">From the farm to your doorstep.</h1>
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

        <section class="section has-background-light">
            <div class="container container-small has-text-centered">
                <h1 class="title">Our team and values</h1>
                <div class="columns">
                    <div class="column is-3">
                    </div>
                    <div class="column">
                        <figure class="image is-square">
                            <img src="../assets/on.jpg">
                        </figure><br>
                        <h1 class="subtitle is-4 has-text-centered">Oliver Ni</h1>
                    </div>
                    <div class="column">
                        <figure class="image is-square">
                            <img src="../assets/my.jpg">
                        </figure><br>
                        <h1 class="subtitle is-4 has-text-centered">Michael Yuan</h1>
                    </div>
                    <div class="column is-3">
                    </div>
                </div>
                <p>Here at Fresh San Jose, we really do care about and value our local community. Caring about our local community starts with truly appreciating the many hard-working and amazing merchants that spend so much effort and time into creating spectacular products. Valuing our local community also means really listening to and taking care of our you, our valued customers. To really bring the community together, we have to strive towards creating an astounding platform that everyone wants to and enjoys using. Finally, caring for our local community means doing anything and everything to bring the best and highest quality foods to our local community. We really wanted to develop an e-business that provides the local community a platform to really be able to understand and appreciate the importance of locally grown, high quality, really delectable, and deliciously fresh foods.</p>
            </div>
        </section>

        <section class="section">
            <div class="container container-small has-text-centered">
                <h1 class="title">Contact</h1>
                <div class="columns is-8 is-variable">
                    <div class="column is-3"></div>
                    <div class="column">
                        <div class="step">
                            <a href="https://facebook.com/freshsanjose/" class="has-text-normal"><b-icon
                                pack="fab"
                                icon="facebook"
                                size="is-large">
                            </b-icon></a>
                        </div>
                    </div>
                    <div class="column">
                        <div class="step">
                            <a href="https://instagram.com/freshsanjose/" class="has-text-normal"><b-icon
                                pack="fab"
                                icon="instagram"
                                size="is-large">
                            </b-icon></a>
                        </div>
                    </div>
                    <div class="column">
                        <div class="step">
                            <a href="mailto:freshsanjose@gmail.com" class="has-text-normal"><b-icon
                                pack="fas"
                                icon="envelope"
                                size="is-large">
                            </b-icon></a>
                        </div>
                    </div>
                    <div class="column is-3"></div>
                </div>
            </div>
        </section>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.769192831659!2d-122.00690188433448!3d37.30060367984864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5433bf5d9e3%3A0x7c976276883c3c10!2sLynbrook+High+School!5e0!3m2!1sen!2sus!4v1551317029048" frameborder="0" style="border: 0; width: 100%; height: 500px;" allowfullscreen></iframe>
    </div>
</template>

<style scoped>
.header {
    position: relative;
}

.image img {
    border-radius: 10px;
}

.step {
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
}

.VueCarousel {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}

</style>

<style>

.VueCarousel-wrapper, .VueCarousel-inner, .VueCarousel-slide {
    height: 100% !important;
}

.VueCarousel-slide {
    background-size: cover;
    background-position: center;
    filter: brightness(50%);
}

.VueCarousel-slide:nth-child(1) {
    background-image: url(../assets/bg1.jpg);
}

.VueCarousel-slide:nth-child(2) {
    background-image: url(../assets/bg2.jpg);
}

.VueCarousel-slide:nth-child(3) {
    background-image: url(../assets/bg3.jpg);
}

.VueCarousel-pagination {
    position: absolute;
    bottom: 10px;
}

.VueCarousel-navigation-button {
    color: white !important;
}

.VueCarousel-navigation-prev {
    left: 50px !important;
}

.VueCarousel-navigation-next {
    right: 50px !important;
}

iframe {
    margin-bottom: -8px;
}

</style>
