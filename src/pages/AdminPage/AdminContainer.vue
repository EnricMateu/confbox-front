<template>
  <div>
    <h2>Events Admin view</h2>
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
  async mounted() {
    await this.callToAction();
    this.itemsAdmin = this.$store.state.allEvents;
  },
  methods: {
    async callToAction() {
      await this.$store.dispatch('fetchAllEvents', this.allEvents);
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
