import Vue from 'vue';
import * as firebase from 'firebase';
import store from './store';
import App from './App.vue';
import router from './router';
import '@/plugins';

Vue.config.productionTip = false;

const configOptions = {
  apiKey: 'AIzaSyAhf3Npak8X1SVBZCJe_WrHvOx53hpg71k',
  authDomain: 'api-testing-1e47e.firebaseapp.com',
  databaseURL: 'https://api-testing-1e47e.firebaseio.com',
  projectId: 'api-testing-1e47e',
  storageBucket: 'api-testing-1e47e.appspot.com',
  messagingSenderId: '607205339509',
  appId: '1:607205339509:web:4b3c394782661006ede33c',
};

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged((user) => {
  store.dispatch('fetchUser', user);
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
