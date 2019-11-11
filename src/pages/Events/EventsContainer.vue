<template>
  <div>
    <nav></nav>
    <ul class="items">
      <li v-for="item in items" :key="item.id">
          <Item :Item="item"/>
      </li>
    </ul>
  </div>
</template>


<script>
import Item from './Components/Item.vue';
import ApiService from '@/services/ApiService';

export default {
  name: 'Container',
  components: {
    Item,
  },
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.fetchEventsList();
  },
  methods: {
    async fetchEventsList() {
      this.items = await ApiService.events.getValidatedEvents();
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
