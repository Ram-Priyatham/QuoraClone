<template>
  <div>
    {{ getUserList }}
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

<style scoped></style>
