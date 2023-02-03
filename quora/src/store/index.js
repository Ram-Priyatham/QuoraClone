import Vue from "vue";
import Vuex from "vuex";
import profileView from "./modules/profileView";
import homeView from "./modules/homeView";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: { profileView, homeView },
});
