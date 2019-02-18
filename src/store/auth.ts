import { Module } from 'vuex';
import firebase from '../firebase';

import { RootState, AuthState } from './types';

const moduleFirebase: Module<AuthState, RootState> =  {
    state: {
        user: null,
        status: '',
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
    },
    actions: {
        async loginWithGoogle({ state, commit }) {
            const provider = new firebase.auth.GoogleAuthProvider();
            return firebase.auth().signInWithPopup(provider).then((result) => {
                state.user = result.user;
                state.status = 'success';
            }).catch((err) => {
                state.status = 'error';
            });
        },
        async logout({ state, commit }) {
            return firebase.auth().signOut().then((result) => {
                state.user = null;
            });
        },
    },
    getters: {
        isLoggedIn: (state) => {
            return !!state.user;
        },
    },
};

export default moduleFirebase;
