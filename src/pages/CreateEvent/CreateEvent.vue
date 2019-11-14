<template>
  <div>
    <h2>Event form</h2>
    <span>Event description</span>
    <br />
    <textarea v-model="Event.description"></textarea>
    <br />
    <span>From date</span>
    <br />
    <input v-model="Event.date_from"/>
    <br />
    <span>To date</span>
    <br />
    <input v-model="Event.date_to"/>
    <br />
    <span>City</span>
    <br />
    <input v-model="Event.city"/>
    <br />
    <span>Country</span>
    <br />
    <input v-model="Event.country"/>
    <br />
    <span>Event URL</span>
    <br />
    <input v-model="Event.event_url"/>
    <br />
    <span>Topic</span>
    <br />
    <input v-model="Event.topic"/>
    <br />
    <button>Submit</button>
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
