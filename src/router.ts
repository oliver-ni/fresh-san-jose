import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Shop from './views/Shop.vue';
import Merchants from './views/Merchants.vue';
import Login from './views/Login.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path: '/shop/category/:category',
            name: 'category',
            component: Shop,
        },
        {
            path: '/shop/merchant/:merchant',
            name: 'merchant',
            component: Shop,
        },
        {
            path: '/shop',
            name: 'shop',
            component: Shop,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/merchants',
            name: 'merchants',
            component: Merchants,
        },
    ],
});
