<template>
    <div id="login">
        <section class="section">
            <div class="container has-text-centered">
                <h1 class="title">Login</h1>
            </div>
        </section>
        <section class="section">
            <div class="container has-text-centered">
                <a class="button" @click="loginWithGoogle()">Login with Google</a>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import firebase from '@/firebase';

@Component
export default class Merchants extends Vue {

    private async loginWithGoogle() {
        this.$store.dispatch('loginWithGoogle');
    }

}
</script>