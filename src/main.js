import Vue from 'vue';
// import Vuex from 'vuex';
import App from './App.vue';
import router from './Router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
