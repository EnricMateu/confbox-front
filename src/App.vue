<template>
  <div>
    <div>
      <router-link to="/events">Events List</router-link>
      <br>
      <router-link to="/admin">Admin View</router-link>
      <br>
      <router-link to="/">Home</router-link>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
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
