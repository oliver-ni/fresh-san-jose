import Vue from 'vue';
import Vuex from 'vuex';
import { firebaseMutations } from 'vuexfire';

import moduleFirebase from './firebase';
import { RootState } from './types';

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
    state: {
        dataIsLoaded: false,
    },
    mutations: {
        ...firebaseMutations,
    },
    modules: {
        firebase: moduleFirebase,
    },
});
