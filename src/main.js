import Vue from 'vue';
// import VueRouter from "vue-router";
import App from './App.vue';
import router from './Router';

Vue.config.productionTip = false;

// Vue.use(VueRouter);

// const router = new VueRouter({
//   mode: "AdminView",
//   routes: [
//     {
//       path: "/",
//       component: Events
//     },
//     {
//       path: "/Va",
//       component: Contact
//     }
//   ]
// })

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
