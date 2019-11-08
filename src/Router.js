import Vue from 'vue';
import Router from 'vue-router';
import Container from './pages/EventsPage/Container.vue';

Vue.use(Router);


const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/events',
      name: 'Container',
      component: Container,
    },
    // { path: '/about', component: About },
  ],
});

export default router;
