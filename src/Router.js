import Vue from 'vue';
import Router from 'vue-router';
// import User from './pages/User.vue';
import Container from './pages/EventsPage/Container.vue';
import AdminContainer from './pages/AdminPage/AdminContainer.vue';
import ValidatedEvents from './pages/ValidatedEvents/ValidatedEventsContainer.vue';
import CreateEvent from './pages/CreateEvent/CreateEvent.vue';

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
    {
      path: '/createEvent',
      name: 'createEvent',
      component: CreateEvent,
    },
  ],
});

export default router;
