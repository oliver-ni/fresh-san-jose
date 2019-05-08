import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import(/* webpackChunkName: "group-1" */ './views/Home.vue');
const Merchants = () => import(/* webpackChunkName: "group-1" */ './views/Merchants.vue');
const Copyright = () => import(/* webpackChunkName: "group-1" */ './views/Copyright.vue');

const Login = () => import(/* webpackChunkName: "group-2" */ './views/Login.vue');
const Dashboard = () => import(/* webpackChunkName: "group-2" */ './views/Dashboard.vue');
const Orders = () => import(/* webpackChunkName: "group-2" */ './components/Orders.vue');

const Checkout = () => import(/* webpackChunkName: "group-3" */ './views/Checkout.vue');
const Confirm = () => import(/* webpackChunkName: "group-3" */ './views/Confirm.vue');

const Shop = () => import(/* webpackChunkName: "group-4" */ './views/Shop.vue');

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
            path: '/copyright',
            name: 'copyright',
            component: Copyright,
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
