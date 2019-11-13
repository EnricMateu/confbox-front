import Vue from 'vue';
import Vuex from 'vuex';
import ApiService from './services/ApiService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events: [],
    allEvents: [],
    users: [],
  },
  mutations: {
    addValidatedEvents(state, events) {
      state.events = events;
    },
    addAllEvents(state, allEvents) {
      state.allEvents = allEvents;
    },
  },
  getters: {
    events: state => state.events,
  },
  actions: {
    async fetchEventsList({ commit }) {
      const events = await ApiService.events.getValidatedEvents();
      commit('addValidatedEvents', events);
    },
    async fetchAllEvents({ commit }) {
      const allEvents = await ApiService.events.getAllEvents();
      commit('addAllEvents', allEvents);
    },
  },
});
