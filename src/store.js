import Vue from 'vue';
import Vuex from 'vuex';
import ApiService from './services/ApiService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events: [],
  },
  mutations: {
    addEvents(state, events) {
      state.events = events;
    },
  },
  getters: {
    events: state => state.events,
  },
  actions: {
    async fetchEventsList({ commit }) {
      const events = await ApiService.events.getValidatedEvents();
      commit('addEvents', events);
    },
  },
});
