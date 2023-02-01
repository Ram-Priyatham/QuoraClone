export default {
  state: {
    followers: [],
  },
  getters: {
    getFollowers: (state) => state.followers,
  },
  mutations: {
    setFollowers: (state, value) => {
      state.followers = value;
    },
  },
  actions: {
    getFollowersApi: ({ commit }, { id }) => {
      fetch(`/api/User/findFollowerByUserId/${id}`)
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
          commit("setFollowers", res);
        });
    },
  },
};
