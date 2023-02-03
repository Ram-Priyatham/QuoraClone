<template>
  <div class="profile-page">
    <header>
      <div class="header-content">
        <img class="profile-image" :src="getProfile.img" alt="Profile Image" />
        <div class="profile-info">
          <h1 class="profile-name">{{ getProfile.userName }}</h1>
          <p class="profile-bio">{{ getProfile.bio }}</p>
          <p>User score: {{ getProfile.score }}</p>
          <p>Classification: {{ getProfile.classification }}</p>
        </div>
      </div>
      <!-- User profile{{ getProfile }} -->
    </header>
    <div style="display: contents">
      <div class="statistics">
        <router-link
          to="/profile/questions"
          style="text-decoration: none; color: inherit"
        >
          <div class="statistic">
            <p class="statistic-value">{{ questionsCount }}</p>
            <p class="statistic-label">Questions</p>
          </div>
        </router-link>
        <router-link
          to="/profile/answers"
          style="text-decoration: none; color: inherit"
        >
          <div class="statistic">
            <p class="statistic-value">{{ answersCount }}</p>
            <p class="statistic-label">Answers</p>
          </div>
        </router-link>
        <router-link
          to="/profile/followers"
          style="text-decoration: none; color: inherit"
        >
          <div class="statistic">
            <p class="statistic-value">{{ followersCount }}</p>
            <p class="statistic-label">Followers</p>
          </div>
        </router-link>
        <router-link
          to="/profile/following"
          style="text-decoration: none; color: inherit"
        >
          <div class="statistic">
            <p class="statistic-value">{{ followingCount }}</p>
            <p class="statistic-label">Following</p>
          </div>
        </router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
// import { computed } from "@vue/runtime-core";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      profileImage: "https://via.placeholder.com/150",
      name: localStorage.getItem("name"),
      bio: "A sample bio about him",
      questionsCount: 15,
      answersCount: 20,
      followersCount: 100,
      followingCount: 50,
      recentActivity: [
        "Asked a question about Vue.js",
        "Answered a question about JavaScript",
        "Followed a new user",
      ],
      userId: localStorage.getItem("email"),
    };
  },
  computed: {
    ...mapGetters(["getProfile"]),
  },
  methods: {
    ...mapActions(["getProfileApi"]),
  },
  created() {
    this.$store.dispatch("getProfileApi", {
      id: localStorage.getItem("email"),
    });
  },
};
</script>

<style>
.profile-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

header {
  width: 100%;
  background-color: #f4f4f4;
  padding: 20px;
  text-align: center;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-image {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin-right: 20px;
}

.profile-info {
  text-align: left;
}

.profile-name {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}
.profile-bio {
  font-size: 16px;
  color: #333;
}
p {
  color: black;
}
main {
  width: 100%;
  padding: 20px;
}

.statistics {
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  margin-bottom: 20px;
}

.statistic {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  cursor: pointer;
}

.statistic-value {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.statistic-label {
  font-size: 16px;
  color: #333;
}

.activity {
  width: 100%;
}

.activity-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}
f .activity-list {
  list-style: none;
  padding: 0;
}

.activity-item {
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
}
</style>
