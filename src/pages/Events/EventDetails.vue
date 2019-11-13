<template>
    <div>
      <img class="image" :src="item.img"/>
        <h1>{{item.title}}</h1>
        <p>From: {{item.date_from}}</p>
        <p>To: {{item.date_to}}</p>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</p>
        <p>{{item.city}}, {{item.country}}</p>
        <a :href="item.event_url">{{item.event_url}}</a>
        <br>
        <button >Apply</button>
    </div>
</template>

<script>
import Item from './Components/Item.vue';

export default {
  name: 'EventDetails',
  components: Item,
  item: {},

  created() {
    this.findItemById();
  },

  methods: {
    findItemById() {
      this.item = this.$store.state.events.find(item => item.id === parseInt(this.$route.params.id, 10));
      console.log(this.item);
    },
  },

};
</script>

<style lang="scss" scoped>

</style>
