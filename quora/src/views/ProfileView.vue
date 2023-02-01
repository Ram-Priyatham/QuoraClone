<!-- <template>
  <div class="main-body">
    <div class="user-details">
      <div class="user-image">
        <img
          class="image"
          src="@/assets/user.png"
          alt=""
          width="200px"
          height="200px"
        />
      </div>
      <div class="user-info">
        <h4 id="email">Email:- {{ user.email }}</h4>
        <h4 id="points">User Points:- {{ status.points }}</h4>
        <h4 id="level">Level:- {{ status.level }}</h4>
      </div>
    </div>
    <button class="button-49" role="button" @click="viewQuestions()">
      View Questions
    </button>
    <button class="button-49" role="button" @click="becomeorg()">
      Become an organization
    </button>
    <button class="button-49" role="button" @click="vieworg()">
      View an organization
    </button>
    <div class="wrap">
      <div class="searchclass">
        <input
          type="text"
          class="searchTerm"
          placeholder="Search"
          size="50px"
          id="jahnavi"
        />
        <button type="submit" class="searchButton">
          <i @click="onSearchProfile()" class="fa fa-search"></i>
        </button>
      </div>
    </div>
    <hr />
    <h2 class="followers-text">FollowersComponent:-</h2>
    <div class="container text-center d-flex align-items-strech flex-wrap">
      <FollowersComponent
        v-for="follower in followersList"
        :key="follower.id"
        :follower="follower"
      />
    </div>
    <hr />
    <div><FooterView /></div>
  </div>
</template>
<script>
import FooterView from "@/views/FooterView";
import FollowersComponent from "@/components/FollowersComponent";
import { mapGetters } from "vuex";
export default {
  name: "ProfileView",
  components: {
    // NavBar,
    FooterView,
    // Pending,
    FollowersComponent,
  },
  data() {
    return {
      status: [],
      user: {
        email: "",
      },
    };
  },
  created() {
    this.user.email = localStorage.getItem("email");
    this.$store.dispatch("getFollowersDetails", {
      mail: this.user.email,
    });
    if (this.user.email !== null) {
      this.$store.dispatch("getStatus", {
        mail: this.user.email,
      });
    }
    this.axios
      .get(`http://10.177.1.115:8082/user/stats/${this.user.email}`)
      .then((res) => {
        this.status = res.data;
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  },
  computed: {
    ...mapGetters(["pendingList"]),
    ...mapGetters(["followersList"]),
    ...mapGetters(["queMail"]),
    // ...mapGetters(['status'])
  },
  methods: {
    becomeorg() {
      this.$router.push("/org");
      console.log(this.$router);
    },
    onSearchProfile() {
      let val = document.getElementById("jahnavi").value;
      console.log("search", val);
      this.$store.dispatch("getSearchProfileDetails", { val });
      this.$router.push("/searchuser");
    },
    vieworg() {
      this.$router.push("/orgprofile");
      console.log(this.$router);
    },
    viewQuestions() {
      console.log(this.user.email);
      this.$store.dispatch("getByMail", { mail: this.user.email });
      this.$router.push("/viewque");
    },
  },
};
</script>
<style scoped>
.user-details {
  display: flex;
  justify-content: space-between;
  padding-top: 100px;
}
.user-image {
  padding-left: 350px;
}
.image {
  border-radius: 50%;
}
.user-info {
  padding-right: 350px;
}
h4 {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: bold;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 120px;
  margin-left: 50px;
  margin-right: 50px;
}
.fa {
  padding-right: 100px;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
}
.card-image {
  padding-left: 10px;
}
.card-text {
  text-align: center;
  font-family: cursive;
  color: red;
}
.followers-text {
  text-align: center;
  font-family: fantasy;
  color: blue;
  font-weight: bold;
}
.follow-details {
  display: flex;
  justify-content: space-between;
}
.scrollbar::-webkit-scrollbar {
  display: none;
}
#card-whole {
  cursor: pointer;
}
.button-49 {
  margin-top: 50px;
}
.button-49,
.button-49:after {
  width: 250px;
  height: 76px;
  line-height: 78px;
  font-size: 20px;
  font-family: "Bebas Neue", sans-serif;
  background: linear-gradient(45deg, transparent 5%, #ff013c 5%);
  border: 0;
  color: #fff;
  letter-spacing: 3px;
  box-shadow: 6px 0px 0px #00e6f6;
  outline: transparent;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-left: 500px;
}
.btn {
  display: flex;
}

.button-49:after {
  --slice-0: inset(50% 50% 50% 50%);
  --slice-1: inset(80% -6px 0 0);
  --slice-2: inset(50% -6px 30% 0);
  --slice-3: inset(10% -6px 85% 0);
  --slice-4: inset(40% -6px 43% 0);
  --slice-5: inset(80% -6px 5% 0);
  content: "Kookie Gulati";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    transparent 3%,
    #00e6f6 3%,
    #00e6f6 5%,
    #ff013c 5%
  );
  text-shadow: -3px -3px 0px #f8f005, 3px 3px 0px #00e6f6;
  clip-path: var(--slice-0);
}
.form-control {
  margin-left: 200px;
  margin-right: 200px;
  margin-top: 10px;
}

.button-49:hover:after {
  animation: 1s glitch;
  animation-timing-function: steps(2, end);
}

@keyframes glitch {
  0% {
    clip-path: var(--slice-1);
    transform: translate(-20px, -10px);
  }
  10% {
    clip-path: var(--slice-3);
    transform: translate(10px, 10px);
  }
  20% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 10px);
  }
  30% {
    clip-path: var(--slice-3);
    transform: translate(0px, 5px);
  }
  40% {
    clip-path: var(--slice-2);
    transform: translate(-5px, 0px);
  }
  50% {
    clip-path: var(--slice-3);
    transform: translate(5px, 0px);
  }
  60% {
    clip-path: var(--slice-4);
    transform: translate(5px, 10px);
  }
  70% {
    clip-path: var(--slice-2);
    transform: translate(-10px, 10px);
  }
  80% {
    clip-path: var(--slice-5);
    transform: translate(20px, -10px);
  }
  90% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 0px);
  }
  100% {
    clip-path: var(--slice-1);
    transform: translate(0);
  }
}

@media (min-width: 768px) {
  .button-49,
  .button-49:after {
    width: 400px;
    height: 86px;
    line-height: 88px;
  }
}
.pending {
  margin-top: 50px;
}
.followers-text {
  text-align: center;
  font-family: fantasy;
  color: blue;
  font-weight: bold;
}
.searchbar {
  display: flex;
}
.searchclass {
  text-align: center;
  margin-top: 20px;
}
.searchButton {
  width: 40px;
  height: 36px;
  border: 1px solid #00b4cc;
  background: #00b4cc;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
}
.searchTerm {
  border: 3px solid #00b4cc;
  border-right: none;
  padding: 5px;
  height: 20px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9dbfaf;
}
#h4 {
  font-weight: bold;
  font-family: cursive;
}
</style> -->
<template>
  <div class="profile-page">
    <header>
      <div class="header-content">
        <img class="profile-image" :src="profileImage" alt="Profile Image" />
        <div class="profile-info">
          <h1 class="profile-name">{{ name }}</h1>
          <p class="profile-bio">{{ bio }}</p>
        </div>
      </div>
    </header>
    <div style="display: contents">
      <div class="statistics">
        <router-link to="/profile/questions">
          <div class="statistic">
            <p class="statistic-value">{{ questionsCount }}</p>
            <p class="statistic-label">Questions</p>
          </div>
        </router-link>
        <router-link to="/profile/answers">
          <div class="statistic">
            <p class="statistic-value">{{ answersCount }}</p>
            <p class="statistic-label">Answers</p>
          </div>
        </router-link>
        <router-link to="/profile/followers">
          <div class="statistic">
            <p class="statistic-value">{{ followersCount }}</p>
            <p class="statistic-label">Followers</p>
          </div>
        </router-link>
        <router-link to="/profile/following">
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
      userId: localStorage.getItem("userMail"),
    };
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
  text-decoration: none;
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
