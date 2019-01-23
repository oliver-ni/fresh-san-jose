import Vue from 'vue';
import Vuex from 'vuex';
import { firebaseMutations, firebaseAction } from 'vuexfire';
import firebase from './firebase';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        categories: [],
        merchants: [],
        products: [],
    },
    mutations: {
        ...firebaseMutations,
    },
    actions: {
        getShopData: firebaseAction(
            ({ bindFirebaseRef, unbindFirebaseRef }) => {
                const db = firebase.db;
                bindFirebaseRef('categories', db.collection('categories'));
                bindFirebaseRef('merchants', db.collection('merchants'));
                bindFirebaseRef('products', db.collection('products'));
            },
        ),
    },
    getters: {
        productsByCategory: (state) => {
            return state.products.reduce((acc: any, val: any) => {
                if (!acc[val.category.name]) { acc[val.category.name] = []; }
                acc[val.category.name].push(val);
                return acc;
            }, {});
        },
        productsByMerchant: (state) => {
            return state.products.reduce((acc: any, val: any) => {
                if (!acc[val.merchant.name]) { acc[val.merchant.name] = []; }
                acc[val.merchant.name].push(val);
                return acc;
            }, {});
        },
    },
});
