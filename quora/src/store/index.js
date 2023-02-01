import Vue from "vue";
import Vuex from "vuex";
import profileView from "./modules/profileView";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { profileView },
});
