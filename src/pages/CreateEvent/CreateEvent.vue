<template>
  <div>
    <h2>Event form</h2>
    <span>Event description</span>
    <br />
    <textarea v-model="Event.description"></textarea>
    <br />
    <span>From date</span>
    <br />
    <input v-model="Event.date_from" />
    <br />
    <span>To date</span>
    <br />
    <input v-model="Event.date_to" />
    <br />
    <span>City</span>
    <br />
    <input v-model="Event.city" />
    <br />
    <span>Country</span>
    <br />
    <input v-model="Event.country" />
    <br />
    <span>Event URL</span>
    <br />
    <input v-model="Event.event_url" />
    <br />
    <span>Topic</span>
    <br />
    <input v-model="Event.topic" />
    <br />
    <span>Organizing company</span>
    <br />
    <input v-model="Event.company" />
    <br />
    <button class="btn btn-success" @click="createEvent">Submit</button>
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
        company: '',
      }
    };
  },
  methods: {
    createEvent() {
      const { description, date_from, date_to, city, country, event_url, topic } = this;
      this.axios
        .post('http://localhost:8000/api/event', {
          description,
          date_from,
          date_to,
          city,
          country,
          event_url,
          topic
        })
        .then(
          response => {
            console.log(response);
          },
          error => {
            console.log(error);
          }
        );
    }
  }
};
</script>
