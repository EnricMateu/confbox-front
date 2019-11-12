<template>
  <div>
    <nav></nav>
    <div v-if="items.length == 0">
      <h1>Momentaneamente no disponemos de Eventos</h1>
    </div>
    <ul class="items" v-else>
      <li v-for="item in items" :key="item.id">
        <router-link :to="'/event-details/'+item.id">
          <Item :Item="item"/>
        </router-link>
      </li>
    </ul>
  </div>
</template>


<script>
import Item from './Components/Item.vue';
// import ApiService from '@/services/ApiService';

export default {
  name: 'EventsContainer',
  components: {
    Item,
  },
  data() {
    return {
      items: [],
    };
  },
  async mounted() {
    await this.callToAction();
    this.items = this.$store.state.events;
  },
  methods: {
    async callToAction() {
      await this.$store.dispatch('fetchEventsList', this.events);
    },
  },
};
</script>

<style lang="scss" scoped>
.items{
    display: flex;
    flex-wrap: wrap
}

li{
    list-style-type: none;
}
</style>
