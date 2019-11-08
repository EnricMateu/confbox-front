<template>
  <div>
    <ul class="items">
      <li v-for="item in itemsAdmin" :key="item.id">
        <Item :Item="item" />
      </li>
    </ul>
  </div>
</template>

<script>
import Item from './Components/AdminItems.vue';

export default {
  components: {
    Item,
  },
  data() {
    return {
      itemsAdmin: [],
    };
  },
  created() {
    this.fetchAdminEventsList();
  },
  methods: {
    async fetchAdminEventsList() {
      this.itemsAdmin = await fetch('http://localhost:8000/api/event').then(
        response => response.json(),
      );
    },
  },
};

console.log(Item);
</script>

<style lang="scss" scoped>
.items {
  display: flex;
  flex-wrap: wrap;
}
li {
  list-style-type: none;
}
</style>
