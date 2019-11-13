import Vue from 'vue';
import Router from 'vue-router';
import EventsContainer from './pages/Events/EventsContainer.vue';
import Profile from './pages/User/Profile.vue';
import EventDetails from './pages/Events/EventDetails.vue';
import AdminContainer from './pages/AdminPage/AdminContainer.vue';


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
  ],
});

export default router;
