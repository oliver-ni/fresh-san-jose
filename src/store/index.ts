import Vue from 'vue';
import Vuex from 'vuex';
import { firebaseMutations } from 'vuexfire';

import moduleFirebase from './firebase';
import moduleAuth from './auth';
import { RootState } from './types';

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
    state: {
        dataIsLoaded: false,
        cart: {},
    },
    mutations: {
        ...firebaseMutations,
        updateCart(state, payload) {
            if (payload.qty > 0) {
                Vue.set(state.cart, payload.key, payload.qty);
            } else {
                Vue.delete(state.cart, payload.key);
            }
        },
    },
    modules: {
        firebase: moduleFirebase,
        auth: moduleAuth,
    },
    getters: {
        totalCartPrice(state, getters) {
            return Object.keys(state.cart).reduce((acc, key) => {
                return acc + getters.productsByKey[key].price * state.cart[key];
            }, 0);
        },
    },
});
