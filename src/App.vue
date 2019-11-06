<template>
<div>
    <h1> CVC </h1>
    <AdminContainer> </AdminContainer>
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
};

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
