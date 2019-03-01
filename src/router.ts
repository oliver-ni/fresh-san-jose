import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Shop from './views/Shop.vue';
import Merchants from './views/Merchants.vue';
import Login from './views/Login.vue';
import Dashboard from './views/Dashboard.vue';
import Checkout from './views/Checkout.vue';
import Confirm from './views/Confirm.vue';
import Overview from './components/Overview.vue';
import Orders from './components/Orders.vue';

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
            path: '/confirm',
            name: 'confirm',
            component: Confirm,
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
        {
            path: '/checkout',
            name: 'checkout',
            component: Checkout,
        },
        {
            path: '/dashboard',
            component: Dashboard,
            children: [
                {
                    path: '',
                    name: 'overview',
                    component: Orders,
                },
                {
                    path: 'orders',
                    name: 'orders',
                    component: Orders,
                },
            ],
        },
    ],
});
