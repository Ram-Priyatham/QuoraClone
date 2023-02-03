import axios from "axios";

export default {
  state: {
    followers: [],
    profile: [],
    following: [],
    answers: [],
    questions: [],
    register: "",
    login: "",
  },
  getters: {
    getFollowing: (state) => state.following,
    getFollowers: (state) => state.followers,
    getProfile: (state) => state.profile,
    getAnswers: (state) => state.answers,
    getQuestions: (state) => state.questions,
    getRegister: (state) => {
      return state.register;
    },
    getLogin: (state) => {
      return state.login;
    },
  },
  mutations: {
    setFollowers: (state, value) => {
      state.followers = value;
    },
    setFollowing: (state, value) => {
      state.following = value;
    },
    setProfile: (state, value) => {
      state.profile = value;
    },
    setAnswers: (state, value) => {
      state.answers = value;
    },
    setQuestions: (state, value) => {
      state.questions = value;
    },
    setRegister: (state, value) => {
      state.register = value;
    },
    setLogin: (state, value) => {
      state.login = value;
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
    getFollowingApi: ({ commit }, { id }) => {
      fetch(`/api/User/findFollowingByUserId/${id}`)
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
          commit("setFollowing", res);
        });
    },
    getAnswersApi: ({ commit }, { id }) => {
      fetch(`/api/answer/getAllAnswerByAnswerUserId/${id}`)
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
          commit("setAnswers", res);
        });
    },
    getQuestionsApi: ({ commit }, { id }) => {
      fetch(`/api/question/getQuestionByQuestionUserId/${id}`)
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
          commit("setQuestions", res);
        });
    },
    getProfileApi: ({ commit }, { id }) => {
      // console.log("Id in API is ", id),
      fetch(`/api/User/findUserById/${id}`)
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
          commit("setProfile", res);
        });
    },
    async REGISTER({ commit }, { payload }) {
      const response = await axios.post("/api/auth/register", payload);
      console.log(response);
      commit("setRegister", response);
    },
    async LOGIN({ commit }, { payload }) {
      const response = await axios.post("/api/auth/login", payload);
      console.log(response);
      commit("setLogin", response);
    },
  },
};
