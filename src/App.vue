<template>
  <div>
    <a class="b_vEvents" :href="VEventsView">Validated Events List</a>
    <AdminContainer></AdminContainer>
    <div>
      <!-- <Container></Container> -->
    </div>
  </div>
</template>

<script>
import AdminContainer from './pages/AdminPage/AdminContainer.vue';
// import Container from './pages/EventsPage/Container.vue';

export default {
  name: 'app',
  components: {
    // Container,
    AdminContainer,
  },
  methods: {
    VEventsView() {
      return 'http://localhost:8000/api/validatedEvents';
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.b_vEvents {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 24px;
  line-height: 1.5;
  color: white;
  background-color: green;
  margin-left: 110px;
}
</style>
