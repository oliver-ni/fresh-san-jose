<template>
    <div id="app">
        <Navbar></Navbar>

        <div id="content">
            <transition name="fade">
                <router-view/>
            </transition>
        </div>

        <footer class="has-text-centered" :class="{ 'has-background-light': $router.currentRoute.name != 'home' }">
            Fresh San Jose &copy; 2019
        </footer>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Navbar from '@/components/Navbar.vue';

@Component({
    components: {
        Navbar,
    },
})
export default class App extends Vue {
}
</script>

<style>
@font-face {
    font-family: 'Avenir';
    src: url('assets/fonts/AvenirLTStd-Roman.otf');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Avenir';
    src: url('assets/fonts/AvenirLTStd-Black.otf');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Avenir';
    src: url('assets/fonts/AvenirLTStd-LightOblique.otf');
    font-weight: 300;
    font-style: italic;
}

@font-face {
    font-family: 'Avenir';
    src: url('assets/fonts/AvenirLTStd-Light.otf');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Avenir';
    src: url('assets/fonts/AvenirLTStd-BookOblique.otf');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Avenir';
    src: url('assets/fonts/AvenirLTStd-Medium.otf');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Avenir';
    src: url('assets/fonts/AvenirLTStd-Oblique.otf');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Avenir';
    src: url('assets/fonts/AvenirLTStd-HeavyOblique.otf');
    font-weight: 900;
    font-style: italic;
}

@font-face {
    font-family: 'Avenir';
    src: url('assets/fonts/AvenirLTStd-Book.otf');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Avenir';
    src: url('assets/fonts/AvenirLTStd-MediumOblique.otf');
    font-weight: 500;
    font-style: italic;
}

@font-face {
    font-family: 'Avenir';
    src: url('assets/fonts/AvenirLTStd-BlackOblique.otf');
    font-weight: 900;
    font-style: italic;
}

@font-face {
    font-family: 'Avenir';
    src: url('assets/fonts/AvenirLTStd-Heavy.otf');
    font-weight: 900;
    font-style: normal;
}
</style>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

$orange: #FFA216;
$orange-invert: findColorInvert($orange);

$yellow: #F2EE18;
$yellow-invert: findColorInvert($yellow);

$green: #6BE243;
$green-invert: findColorInvert($primary);

$blue: #47B5ED;
$blue-invert: findColorInvert($blue);

$normal: #4A4A4A;
$normal-invert: findColorInvert($normal);

$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($green, $green-invert),
    "orange": ($orange, $orange-invert),
    "yellow": ($yellow, $yellow-invert),
    "blue": ($blue, $blue-invert),
    "normal": ($normal, $normal-invert),
);

$link: $green;
$link-invert: $green-invert;
$link-focus-border: $green;

$family-primary: "Avenir", sans-serif;
$family-secondary: "Frank Ruhl Libre", serif;

.title {
    font-family: $family-secondary;
}

$steps-active-color: $green;
$steps-completed-color: $green;

@import "~bulma";
@import "~buefy/src/scss/buefy";

@import "~bulma-steps/dist/css/bulma-steps.sass";

</style>

<style>

.bg-cover {
    background-size: cover;
    background-position: center;
}

.paragraph + .paragraph {
    margin-top: 0.5rem;
}

#app > #content > div > section.section:first-child:not(.retain-margin) {
    padding-bottom: 0;
}

html, body, #app {
    overflow-x: hidden;
    height: 100%;
}
#app {
    display: flex;
    flex-direction: column;
}
#content {
    flex: 1 0 auto;
}
footer {
    flex-shrink: 0;
    padding: 1.5rem;
}

*:not(#app)::-webkit-scrollbar { width: 0 !important }
*:not(#app) { overflow: -moz-scrollbars-none; }
*:not(#app) { -ms-overflow-style: none; }

@media (min-width: 1088px) {
    body.has-navbar-fixed-top {
        padding-top: 4rem;
    }
    .title.is-display-1 {
        font-size: 4rem;
    }
}

.title {
    font-family: "Frank Ruhl Libre", serif;
}

.has-text-shadow {
    text-shadow: 0 0 2rem rgba(0, 0, 0, 0.4);
}

.button {
    border: none;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
    text-transform: uppercase;
    padding: 1.8rem;
    letter-spacing: 0.1rem;
    padding-right: 1.7rem;
}

.box {
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
}

.container-small {
    max-width: 960px;
}

.fade-enter-active, .fade-leave-active {
    transition-property: opacity;
    transition-duration: .15s;
}

.fade-enter-active {
    transition-delay: .15s;
}

.fade-enter, .fade-leave-active {
    opacity: 0
}

.has-text-faded {
    color: #949494;
}

</style>