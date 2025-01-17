import Vue from 'vue';
import App from './App.vue';
import Buefy from 'buefy';
import router from './router';
import store from './store';
import firebase from './firebase';

import VueCarousel from 'vue-carousel';
import VueLazyload from 'vue-lazyload';

Vue.use(VueCarousel);
Vue.use(VueLazyload, {
    // loading: '/placeholder.png',
    // error: '/placeholder.png',
});

Vue.use(Buefy, {
    defaultIconPack: 'fas',
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.commit('setUser', user);
    }
});
