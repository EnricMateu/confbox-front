<template>
    <div>
        <h1>{{Item.title}}</h1>
    </div>
</template>

<script>
import Item from './Components/Item.vue';

export default {
  name: 'EventDetails',
  components: Item,

  created() {
    this.findItemById();
  },

  findItemById() {

  },

};
</script>

<style lang="scss" scoped>

</style>
