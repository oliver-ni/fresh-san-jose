<template>
    <div id="login">
        <section class="section">
            <div class="container has-text-centered">
                <h1 class="title">Login</h1>
            </div>
        </section>
        <section class="section">
            <div class="container has-text-centered">
                <p class="has-text-centered"><a class="button" @click="loginWithGoogle()">Login with Google</a></p><br><p><a class="button" @click="loginAsDemo()">Login as demo user</a></p>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import firebase from '@/firebase';

@Component
export default class Login extends Vue {

    private next = '/dashboard';

    private created() {
        if (this.$route.query.hasOwnProperty('next')) {
            this.next = this.$route.query.next as string;
        }
    }

    private async loginWithGoogle() {
        this.$store.dispatch('loginWithGoogle').then((result) => {
            this.$router.push(this.next);
        });
    }

    private async loginAsDemo() {
        this.$store.dispatch('loginAsDemo').then((result) => {
            this.$router.push(this.next);
        });
    }

}
</script>