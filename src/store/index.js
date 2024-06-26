import { createStore } from 'vuex';

export default createStore({
  state: {
    count: 0,
    app:{
        name: 'Admin ACARA',
    }
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {
    increment({ commit }) {
      commit('increment');
    },
  },
  modules: {},
});
