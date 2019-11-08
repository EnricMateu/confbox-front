<template>
  <div>
    <ul class="items">
      <li v-for="item in items" :key="item.id">
          <Item :Item="item"/>
      </li>
    </ul>
  </div>
</template>

<script>
import Item from './Components/Item.vue';

export default {
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
      this.items = await fetch('http://localhost:8000/api/event').then(
        response => response.json(),
      );
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
