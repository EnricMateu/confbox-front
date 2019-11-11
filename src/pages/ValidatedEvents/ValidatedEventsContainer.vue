<template>
  <div>
    <h2>Validated Events List</h2>
    <ul class="items">
      <li v-for="item in itemsList" :key="item.id">
        <Item :Item="item" />
      </li>
    </ul>
  </div>
</template>

<script>
import Item from '@/pages/EventsPage/Components/Item.vue';

export default {
  components: {
    Item,
  },
  data() {
    return {
      itemsList: [],
    };
  },
  created() {
    this.fetchValidatedEvents();
  },
  methods: {
    async fetchValidatedEvents() {
      this.itemsList = await fetch('http://localhost:8000/api/validatedEvents').then(
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
