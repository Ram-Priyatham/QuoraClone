<!-- <template>
  <div class="main-navbar">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />
    <nav class="navbar navbar-expand-sm fixed-top bg-light">
      <div class="container my-2">
        <div class="home-logo">
          <div
            class="navbar-brand text-dark font-weight-bold"
            @click="gohome()"
          >
            <img
              id="image-logo"
              src="@/assets/logo.png"
              alt=""
              height="50px"
              width="50px"
            />
          </div>
          <div class="text-black fa-2x mx-5" @click="gohome()" id="home">
            <i class="fas fa-home"></i>
          </div>
          <div
            class="text-black fa-2x mx-5"
            @click="goOrganizations()"
            id="org"
          >
            <i class="fas fa-hands"></i>
          </div>
        </div>
        <div class="navbar-nav ml-5">
          <input
            class="form-control amber-border"
            type="text"
            size="50"
            placeholder="Search Quora"
            id="search"
          />
          <button
            type="submit"
            class="btn btn-secondary"
            style="height: 50px; margin-top: 10px"
          >
            <i @click="onSearch()" class="fa fa-search"></i>
          </button>
          <b-nav-item
            class="nav-item nav-link text-dark h6 my-auto"
            @click="goaddques()"
            ><button type="button" class="btn btn-danger">
              Add&nbsp;Question
            </button></b-nav-item
          >
          <b-nav-item
            class="nav-item nav-link h6 mx-3 my-auto"
            v-if="isLoggedIn"
            @click="gologout()"
            ><button type="button" class="btn btn-danger">
              Logout
            </button></b-nav-item
          >
          <b-nav-item
            class="nav-item nav-link text-dark h6 my-auto"
            v-else
            @click="gologin()"
            ><button type="button" class="btn btn-danger">
              Login
            </button></b-nav-item
          >
          <b-nav-item
            class="nav-item nav-link text-dark h6 my-auto text-black fa-2x"
            @click="goprofile()"
            ><i class="fas fa-user-circle"></i
          ></b-nav-item>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      searchQuery: "",
      email: "",
    };
  },
  created() {
    this.email = localStorage.getItem("email");
  },
  computed: {
    isLoggedIn() {
      return window.localStorage.getItem("email");
    },
  },
  methods: {
    gohome() {
      this.$router.push("/");
      console.log(this.$router);
    },
    goaddques() {
      this.$router.push("/ask");
      console.log(this.$router);
    },
    goprofile() {
      this.$router.push("/profile");
      console.log(this.$router);
    },
    gologin() {
      this.$router.push("/login");
      console.log(this.$router);
    },
    onSearch() {
      let val = document.getElementById("search").value;
      console.log("search", val);
      this.$store.dispatch("getSearchDetails", { val });
      this.$router.push("/searchque");
    },
    goOrganizations() {
      this.$router.push("/organizationslist");
      console.log(this.$router);
    },
    gologout() {
      this.$store.dispatch("logout", {
        email: localStorage.getItem("email"),
        appId: "3",
      });
    },
  },
};
</script>

<style scoped>
img {
  border-radius: 50%;
}
.main-navbar {
  margin-bottom: 50px;
}
.cart {
  cursor: pointer;
}
#home {
  cursor: pointer;
}
.navbar {
  height: 70px;
}
input {
  height: 50px;
  margin-top: 10px;
}
.home-logo {
  display: flex;
}
#image-logo {
  cursor: pointer;
}
#org {
  cursor: pointer;
}
</style> -->
<template>
  <nav class="navbar">
    <div class="left-section">
      <router-link class="nav-link" to="/">
        <img
          src="https://www.quora.com/favicon.ico"
          style="height: 53px"
          alt="Quora Logo"
        />
      </router-link>
      <form class="search-form">
        <input type="text" class="search-input" placeholder="Search Quora" />
        <button type="submit" class="search-button">
          <i class="fa fa-search"></i>
        </button>
      </form>
    </div>
    <div class="right-section">
      <ul class="nav-links">
        <li class="nav-link"><a href="#">Home</a></li>
        <li class="nav-link"><a href="#">Topics</a></li>
        <li class="nav-link"><a href="#">Notifications</a></li>
        <li class="nav-link"><a href="#">Messages</a></li>
      </ul>
      <div class="user-actions">
        <button class="write-question-button">Write a Question</button>
        <img
          src="../assets/user.png"
          alt="User Avatar"
          class="user-avatar"
          @click="goprofile()"
        />
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  methods: {
    goprofile() {
      this.$router.push("/profile");
      console.log(this.$router);
    },
  },
};
</script>
<style scoped>
.navbar {
  background-color: white;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.left-section {
  display: flex;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 40px;
}

.search-form {
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 24px;
  border: 1px gray solid;
  padding: 0 10px;
}

.search-input {
  border: none;
  padding: 8px 12px;
  font-size: 16px;
  width: 400px;
  outline: none;
  border-radius: 8px;
}

.search-button {
  background-color: #0084ff;
  border: none;
  color: #fff;
  padding: 8px 12px;
  border-radius: 24px;
  cursor: pointer;
  font-size: 16px;
}

.right-section {
  display: flex;
  align-items: center;
}

.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.nav-link {
  margin-right: 20px;
}

.nav-link a {
  color: #333;
  text-decoration: none;
  font-size: 16px;
}

.user-actions {
  display: flex;
  align-items: center;
}

.write-question-button {
  background-color: #0084ff;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 24px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 20px;
}

.user-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
}
</style>
