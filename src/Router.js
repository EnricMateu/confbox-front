import Vue from 'vue';
import Router from 'vue-router';
// import User from './pages/User.vue';
import Container from './pages/EventsPage/Container.vue';
import AdminContainer from './pages/AdminPage/AdminContainer.vue';
import ValidatedEvents from './pages/ValidatedEvents/ValidatedEventsContainer.vue';


Vue.use(Router);


const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/events',
      name: 'Container',
      component: Container,
    },
    {
      path: '/admin',
      name: 'AdminContainer',
      component: AdminContainer,
    },
    {
      path: '/validatedEvents',
      name: 'ValidatedEvents',
      component: ValidatedEvents,
    },
    // {
    //   path: '/user',
    //   name: 'User',
    //   component: User,
    // },
    // { path: '/about', component: About },
  ],
});

export default router;
