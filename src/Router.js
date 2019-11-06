import VueRouter from 'vue-router';
import Container from './pages/EventsPage/Container.vue';


const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/events', name: 'Container', component: Container },
    // { path: '/about', component: About },
  ],
});

export default router;
