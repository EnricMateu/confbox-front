<template>
  <div>
    <h2>Create Event</h2>
    <span>Event description</span>
    <br />
    <input type="text" v-model="description" {{description}} />
    <span>From date</span>
    <br />
    <span>To date</span>
    <br />
    <span>City</span>
    <br />
    <span>Country</span>
    <br />
    <span>Event URL</span>
    <br />
    <span>Topic</span>
  </div>
</template>

<script>
export default {
  name: 'CreateEvent',
  data() {
    return {
      Event: {
        description: '',
        date_from: '',
        date_to: '',
        city: '',
        country: '',
        event_url: '',
        topic: '',
      },
    };
  },
  created() {
    // this.fetchEventData();
  },

  methods: {
    // async fetchEventData() {
    //   this.data = await fetch('http://localhost:8081/createEvent').then(
    //     response => response.json(),
    //   );
    // },
  },
};
</script>
