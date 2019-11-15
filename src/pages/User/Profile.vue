<template>
  <div id="profile">
    <h1>{{id}}</h1>
    <h1>{{ msg }}</h1>
    <ul class="data">
      {{data.profile_name}}
      <h2 id="">{{data.first_name}} {{data.last_name}}</h2>
      <h2 id="">{{data.street_address}}, {{data.city}}, {{data.country}}.</h2>
      <a>
        <h2 id="">{{data.linkedin_url}}</h2>
      </a>
    </ul>
  </div>
</template>

<script>
import ApiService from '../../services/ApiService';

export default {
  name: 'profile',
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
      const { id } = this.$route.params.id;
      this.data = await ApiService.users.getUserData({ id });
    },
  },
};
</script>

<style lang="scss" scoped>
#profile {
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
