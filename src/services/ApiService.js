import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

class ApiService {
  url = 'http://localhost:8000';

  validatedEvents = '/api/event';

  eventApplication = '/apply';

  events = {
    getValidatedEvents: () => fetch(`${this.url}${this.validatedEvents}`).then(data => data.json()),
    applyToEvent: ({ id }) => axios.post(`${this.url}${this.validatedEvents}/${id}${this.eventApplication}`).then(data => data.json()),
  };

  userData = '/api/userprofile/';

  users = {
    getUserData: ({ id }) => fetch(`${this.url}${this.userData}${id}`).then(data => data.json()),
  };
}

export default new ApiService();
