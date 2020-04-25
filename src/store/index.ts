import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bubblesClicked: 0,
  },
  mutations: {
    clickBubble(state) {
      state.bubblesClicked++;
    }
  },
  actions: {},
  modules: {}
});
