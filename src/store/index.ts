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
        cart: [],
    },
    mutations: {
        ...firebaseMutations,
        addToCart(state, id) {
            if (!state.cart.includes(id)) {
                state.cart.push(id);
            }
        },
    },
    modules: {
        firebase: moduleFirebase,
        auth: moduleAuth,
    },
    getters: {
        totalCartPrice(state, getters) {
            return state.cart.reduce((acc, item) => {
                return acc + getters.productsByKey[item].price;
            }, 0);
        },
    },
});
