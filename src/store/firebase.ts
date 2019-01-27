import { Module } from 'vuex';
import { firebaseMutations, firebaseAction } from 'vuexfire';
import firebase from '../firebase';

import { RootState, FirebaseState } from './types';

const moduleFirebase: Module<FirebaseState, RootState> =  {
    state: {
        categories: [],
        merchants: [],
        products: [],
    },
    actions: {
        getShopData: firebaseAction(
            ({ bindFirebaseRef, unbindFirebaseRef, rootState }) => {
                const db = firebase.db;
                return Promise.all([
                    bindFirebaseRef('categories', db.collection('categories')),
                    bindFirebaseRef('merchants', db.collection('merchants')),
                    bindFirebaseRef('products', db.collection('products')),
                ]).then(() => {
                    rootState.dataIsLoaded = true;
                });
            },
        ),
    },
    getters: {
        productsByKey(state: any) {
            return state.products.reduce((acc: any, product: any) => {
                acc[product.id] = product;
                return acc;
            }, {});
        },
        allProducts(state: any) {
            return state.products.map((val: any) => val.id);
        },
        productsByCategory(state: any) {
            return state.products.reduce((acc: any, product: any) => {
                if (!acc[product.category.slug]) { acc[product.category.slug] = []; }
                acc[product.category.slug].push(product.id);
                return acc;
            }, {});
        },
        productsByMerchant(state: any) {
            return state.products.reduce((acc: any, product: any) => {
                if (!acc[product.merchant.slug]) { acc[product.merchant.slug] = []; }
                acc[product.merchant.slug].push(product.id);
                return acc;
            }, {});
        },
    },
};

export default moduleFirebase;
