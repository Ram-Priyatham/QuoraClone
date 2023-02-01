<template>
  <div>
    In Followers Component
    <div v-for="follower in getFollowers" :key="follower.userId">
      <p>{{ follower.userName }}</p>
    </div>
    {{ getFollowers }}
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
// import axios from "axios";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getFollowers"]),
  },
  methods: {
    ...mapActions(["getFollowersApi"]),
  },
  created() {
    this.$store.dispatch("getFollowersApi", {
      id: localStorage.getItem("email"),
    });
  },
};
</script>
