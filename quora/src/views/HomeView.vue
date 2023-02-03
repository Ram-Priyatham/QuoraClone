<template>
  <div>
    <div v-for="(posts, index) in list" :key="index" @click="emitPost(posts)">
      <!-- <p>{{ posts.answerEntity.answerID }}</p> -->
      <div class="main">
        <div class="sub">
          <div class="userDetails">
            <p>Name: {{ posts.answerEntity.answerGiverName }}</p>
            <p>
              <b>{{ posts.answerEntity.questionBody }}</b>
            </p>
            <!-- <p>{{ posts.answerEntity.answerID }}</p> -->
            <p>
              {{ posts.answerEntity.answerBody }}
            </p>
            <div>
              <i
                class="fas fa-thumbs-up"
                :style="{ color: upvoteColor }"
                @click="changeUpvoteColor"
              ></i>
              <span style="visibility: hidden">R</span>
              <i
                class="fas fa-thumbs-down"
                :style="{ color: downvoteColor }"
                @click="changeDownvoteColor"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//import { createDecipheriv } from "crypto";
import axios from "axios";
export default {
  data() {
    return {
      list: undefined,
      upvoteColor: "#ccc",
      downvoteColor: "#ccc",
    };
  },
  methods: {
    changeUpvoteColor() {
      this.upvoteColor = this.upvoteColor === "#ccc" ? "#3f51b5" : "#ccc";
    },
    changeDownvoteColor() {
      this.downvoteColor = this.downvoteColor === "#ccc" ? "#3f51b5" : "#ccc";
    },
    emitPost(posts) {
      localStorage.setItem("questionID", posts.questionId);
      this.$router.push("/postDescription");
    },
  },
  async created() {
    await axios.get("/api/question/getPosts").then((res) => {
      this.list = res.data;
    });
    // console.log(this.list);
    // console.log(JSON.stringify(this.list));
  },
};
</script>
<style scoped>
.main {
  display: flex;
  /* justify-content: center; */
  flex-direction: row;
  text-align: left;
  border: 1.4px #ced5da solid;
  margin-top: 10px;
  width: 40%;
  align-content: center;
  margin-left: 26%;
  background-color: white;
  border-radius: 6px;
}
.sub {
  margin-left: 2%;
  margin-right: 1.5%;
}
.fa-thumbs-up,
.fa-thumbs-down {
  font-size: 20px;
  cursor: pointer;
}
</style>
