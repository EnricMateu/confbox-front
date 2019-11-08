<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <ul class="data">
      {{data.profile_name}}
      <h2 id="patata">{{data.first_name}} {{data.last_name}}</h2>
      <h2 id="patata2">{{data.street_address}}, {{data.city}}, {{data.country}}.</h2>
      <a><h2 id="patata3">{{data.linkedin_url}}</h2></a>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'User Profile',
      data: [],
    };
  },
  created() {
    this.fetchUserData();
  },
  methods: {
    async fetchUserData() {
      this.data = await fetch('http://localhost:8001/api/userprofiles/2').then(
        response => response.json(),
      );
    },
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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>