import axios from "axios";

export default {
  state: {
    userList: [],
  },
  getters: {
    getUserList: (state) => state.userList,
  },
  mutations: {
    setUserList: (state, value) => {
      state.userList = value;
    },
  },
  actions: {
    SEARCH_USER_LIST: ({ commit }, { userName }) => {
      axios.get("/api/User/searchUser/" + userName).then((res) => {
        console.log(res);
        commit("setUserList", res.data);
      });
    },
  },
};
