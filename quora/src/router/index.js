import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProfileView from "../views/ProfileView.vue";
import ProfileAnotherPerson from "../components/ProfileAnotherPerson.vue";
import AnswersPosted from "../components/AnswersPosted.vue";
import FollowersComponent from "../components/FollowersComponent.vue";
import FollowingComponent from "../components/FollowingComponent.vue";
import QuestionsAsked from "../components/QuestionsAsked.vue";
import UserRegistration from "../components/UserRegistration.vue";
import UserLogin from "../components/UserLogin.vue";
import QuestionDescription from "../views/QuestionDescription.vue";
import PostDescription from "../views/PostDescription.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/userregistration",
    name: "userregistration",
    component: UserRegistration,
  },
  {
    path: "/postdescription",
    name: "postdescription",
    component: PostDescription,
  },
  {
    path: "/questiondescription",
    name: "questiondescription",
    component: QuestionDescription,
  },
  {
    path: "/userlogin",
    name: "userlogin",
    component: UserLogin,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
    children: [
      {
        path: "questions",
        name: "questions",
        component: QuestionsAsked,
      },
      {
        path: "answers",
        name: "answers",
        component: AnswersPosted,
      },
      {
        path: "followers",
        name: "followers",
        component: FollowersComponent,
      },
      {
        path: "following",
        name: "following",
        component: FollowingComponent,
      },
    ],
  },
  {
    path: "/profileanother",
    name: "ProfileAnotherUser",
    component: ProfileAnotherPerson,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
