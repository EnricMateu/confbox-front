import Vue from 'vue';
import Router from 'vue-router';
import EventsContainer from './pages/Events/EventsContainer.vue';
import Profile from './pages/User/Profile.vue';
import EventDetails from './pages/Events/EventDetails.vue';
// import User from './pages/User.vue';
import Container from './pages/EventsPage/Container.vue';
import AdminContainer from './pages/AdminPage/AdminContainer.vue';
import ValidatedEvents from './pages/ValidatedEvents/ValidatedEventsContainer.vue';


Vue.use(Router);


const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'eventsContainer',
      component: EventsContainer,
    },
    {
      path: '/event-details/:id',
      name: 'eventDetails',
      component: EventDetails,
    },
    {
      path: '/user-profile',
      name: 'profile',
      component: Profile,
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
  ],
});

export default router;
