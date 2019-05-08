<template>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
                <router-link class="navbar-item has-text-weight-bold" to="/">
                    <img src="../assets/logo.png">
                    <!-- Fresh -->
                </router-link>
            
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="showNav = !showNav" :class="{ 'is-active' : showNav }">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div class="navbar-menu" :class="{ 'is-active' : showNav }">
                <div class="navbar-start">
                    <router-link class="navbar-item" active-class="is-active" to="/shop">Shop</router-link>
                    <router-link class="navbar-item" active-class="is-active" to="/merchants">Merchants</router-link>
                    <router-link class="navbar-item" active-class="is-active" to="/blog">Blog</router-link>
                    <router-link class="navbar-item" active-class="is-active" to="/copyright">Copyright</router-link>
                </div>
                <div class="navbar-end">
                    <div class="navbar-item has-dropdown is-hoverable" v-if="!$store.getters.isLoggedIn">
                        <a class="navbar-link">Account</a>
                        <div class="navbar-dropdown">
                            <router-link class="navbar-item" to="/login">Login</router-link>
                        </div>
                    </div>
                    <div class="navbar-item has-dropdown is-hoverable" v-if="$store.getters.isLoggedIn">
                        <a class="navbar-link">{{ $store.state.auth.user.displayName }}</a>
                        <div class="navbar-dropdown">
                            <router-link class="navbar-item" to="/dashboard">Dashboard</router-link>
                            <a class="navbar-item" @click="logout()">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Checkout extends Vue {
    private showNav = false;
    private logout() {
        this.$store.dispatch('logout');
        this.$router.push('/');
    }
}
</script>

<style scoped>
.navbar {
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.05);
}
.navbar-brand .navbar-item:hover {
    filter: invert(79%) sepia(43%) saturate(733%) hue-rotate(49deg) brightness(93%) contrast(91%);
}
.navbar-item,
.navbar-link {
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.3rem;
}

@media (min-width: 1088px) {
    .navbar {
        height: 4rem;
    }
}
</style>
