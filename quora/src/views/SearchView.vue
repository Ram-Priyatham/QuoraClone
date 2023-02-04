<template>
  <div style="margin-left: 10%; margin-right: 10%; margin-top: 2%">
    <div class="main" v-for="(users, index) in getUserList" :key="index">
      <div>
        <img :src="users.img" style="width: 80px" />
        <b
          ><p>{{ users.userName }}</p></b
        >
        <b
          ><p>{{ users.bio }}</p></b
        >
      </div>
      <!-- {{ getUserList }} -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getUserList"]),
  },
  data() {
    return {
      searchText: this.$route.params.searchText,
    };
  },
  created() {
    this.$store.dispatch("SEARCH_USER_LIST", { userName: this.searchText });
  },
  methods: {
    ...mapActions(["SEARCH_USER_LIST"]),
  },
};
</script>

<style scoped>
.main {
  border: 1.4px #ced5da solid;
  margin-top: 10px;
  background-color: white;
  border-radius: 6px;
}
</style>
