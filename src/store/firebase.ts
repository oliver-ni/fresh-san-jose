import { Module } from 'vuex';
import { firebaseMutations, firebaseAction } from 'vuexfire';
import firebase from '../firebase';

import { RootState, FirebaseState } from './types';
import Vue from 'vue';

const moduleFirebase: Module<FirebaseState, RootState> =  {
    state: {
        categories: [],
        merchants: [],
        products: [],
        orders: [],
    },
    actions: {
        getShopData: firebaseAction(
            ({ bindFirebaseRef, unbindFirebaseRef, rootState }) => {
                const db = firebase.firestore();
                return Promise.all([
                    bindFirebaseRef('categories', db.collection('categories')),
                    bindFirebaseRef('merchants', db.collection('merchants')),
                    bindFirebaseRef('products', db.collection('products')),
                    bindFirebaseRef('orders', db.collection('orders')),
                ]).then(() => {
                    rootState.dataIsLoaded = true;
                });
            },
        ),
        getBackgroundImages(context: any) {
            const storage = firebase.storage();
            const storageRef = storage.ref();
            const promises = [];
            for (const product of context.state.products) {
                const id = product.image_id;
                promises.push(storageRef.child('products/' + id + '.jpg').getDownloadURL().then((url) => {
                    Vue.set(context.rootState.images, id, url);
                }));
            }
            return Promise.all(promises);
        },
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
