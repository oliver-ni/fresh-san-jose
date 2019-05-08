<template>
    <div id="blog">
        <section class="section">
            <div class="container has-text-centered">
                <h1 class="title">Blog</h1>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="columns is-vcentered">
                    <div class="column is-4">
                        <img src="@/assets/blog4.jpeg">
                    </div>
                    <div class="column">
                        <h1 class="title is-4 is-sss is-spaced">Juicy Citrus Fruits are In Season</h1>
                        <h3 class="subtitle is-6">March 3, 2019</h3>
                        <p>What are sweet, sour, tart, juicy, and bright? Citrus fruits of course! Citrus fruits are currently in season in California and you should definitely give them a try today. Cara cara are very delicious citrus fruits that are similar to oranges, but have a dark red interior flesh, and a beautiful, full-bodied, sweet, and tart citrus flavor. Oro blancos are also a spectacular larger citrus fruit with a yellow exterior, and an interior flesh with an initial sweet flavor followed by a tangy grapefruit-like flavor. You should also give the amazing mandarins a try, while they are smaller in size, they pack an astounding citrus flavor and are perfect on the go. Tangerines are also a very delicious citrus fruit that are very juicy, sweet, sour; have a slightly bumpy rind; and are also perfect on the go. You can also never go wrong with the mouthwatering navel oranges; they are very juicy and fully embody the citrus flavor. Look out for the bright and vivid colored citrus fruits on Fresh San Jose, and give them a try as they will be sure to add a pop of color into your day!</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="columns is-vcentered">
                    <div class="column is-4">
                        <img src="@/assets/blog3.jpeg">
                    </div>
                    <div class="column">
                        <h1 class="title is-4 is-sss is-spaced">Delicious Vegetables</h1>
                        <h3 class="subtitle is-6">February 18, 2019</h3>
                        <p>Hey there, have you been eating enough vegetables recently? Well, there are currently some very delicious vegetables available on Fresh San Jose that may motivate you to eat more of those beautiful and healthy vegetables. One of those delicious vegetables is bok choy. Bok choy is a small white cabbage vegetable that is very delectable, crisp, and has a nice crunch. They have a hint of sweetness and are perfect stir-fried with garlic. Baby bok choy is also another very delicious specialty vegetable. They are even more succulent and tender than bok choy and are also very delicious stir-fried with garlic. If you prefer root vegetables, then daikon is perfect for you. Daikon is a mild-flavored winter radish that has a slight sweetness to them and has a scrumptious juicy snap to them. Try them stewed in a dish or soup. Craving a salad, well then romaine lettuce will be perfect for you. The fresh romaine lettuce is a nice, leafy, crunchy vegetable that is healthy and good for any meal of the day. All of the vegetables our wonderful merchants provide on Fresh San Jose are farm fresh and locally grown, try them out today!</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="columns is-vcentered">
                    <div class="column is-4">
                        <img src="@/assets/blog2.jpeg">
                    </div>
                    <div class="column">
                        <h1 class="title is-4 is-sss is-spaced">Pomelos are in Season</h1>
                        <h3 class="subtitle is-6">February 5, 2019</h3>
                        <p>Are you feeling poMELO today? Well if so, and even if you are not, you should definitely order a few pomelos to enjoy. Pomelos, also known as the shaddock, Bali lemon, or Chinese grapefruit, are large Southeast Asian citrus fruits that have a green or yellow thick skin and juicy flesh. The flesh is sweeter than that of its relative, grapefruit, but has a similar bitter skin like a grapefruit. Pomelos are grown in warmer climates, like Florida and locally in California. To eat pomelos, make some slices into the fruit but not puncturing the flesh lengthwise and peel the skin off by hand. If you don't want to eat them by themselves, you can consider making a delicious pomelo salad or some pomelo citrus bars. Whether you choose to eat them on their own or in a delicious dish, these pomelos will definitely bring a wonderful as well as bright burst of sweet and sour citrus flavor into you day! </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="columns is-vcentered">
                    <div class="column is-4">
                        <img src="@/assets/blog1.jpeg">
                    </div>
                    <div class="column">
                        <h1 class="title is-4 is-sss is-spaced">Welcome</h1>
                        <h3 class="subtitle is-6">January 18, 2019</h3>
                        <p>The whole team at Fresh San Jose would like to extend a warm welcome to you, our most valued customers. We here at Fresh San Jose focus on delivering only the freshest and highest quality produce directly from local farms to your doorstep. Supporting the local community is at the epicenter of everything we do. With big, large, anonymous, and faceless brands dominating the stores and online services, we wanted to give local farms a platform to share their story, their values, and most importantly, their products. The local merchants work extremely hard and put so much care into crafting quality products, and we believe that they mean a lot to both our company and our local community. We want to bring simply great products from amazing local merchants to our local community, San Jose, California. Support your local community and get some fresh products by shopping on Fresh San Jose.</p>
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
export default class Blog extends Vue {}
</script>

<style scoped>
.is-sss {
    margin-bottom: 0.5rem;
}
.section + .section + .section {
    padding-top: 0;
}
img {
    border-radius: 10px;
}
</style>
