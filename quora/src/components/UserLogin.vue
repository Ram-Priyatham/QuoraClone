<template>
  <div class="container">
    <h2 class="text-center">Login</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          class="form-control"
          id="username"
          v-model="username"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {
    ...mapGetters(["getLogin"]),
  },
  methods: {
    ...mapActions(["LOGIN"]),
    submitForm() {
      const payloadData = {
        username: this.username,
        password: this.password,
      };
      this.$store.dispatch("LOGIN", { payload: payloadData });
    },
  },
};
</script>
<style scoped>
.container {
  max-width: 500px;
  margin: 0 auto;
  padding: 30px;
  text-align: center;
}

h2 {
  margin-bottom: 30px;
}

label {
  font-weight: 600;
}

.form-control {
  margin-bottom: 15px;
}

.btn {
  width: 100%;
}
</style>
