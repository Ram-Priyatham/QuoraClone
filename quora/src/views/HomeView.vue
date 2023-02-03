<template>
  <div>
    <div v-for="(posts, index) in list" :key="index">
      <!-- <p>{{ posts.answerEntity.answerID }}</p> -->
      <div class="main">
        <div class="sub">
          <div class="userDetails">
            <p>Name:</p>
            <!-- <p>{{ posts.questionId }}</p> -->
            <p>
              Question:
              <b>{{ posts.answerEntity.questionBody }}</b>
            </p>
            <!-- <p>{{ posts.answerEntity.answerID }}</p> -->
            <p>
              Answer:
              <b>{{ posts.answerEntity.answerBody }}</b>
            </p>
            <br />
            Description
            <p />
          </div>
          <div class="question">
            <h4>Sample Question</h4>
          </div>
          <div class="answer">
            <p>Some random answer is generated here</p>
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
    };
  },

  async created() {
    await axios.get("/api/question/getPosts").then((res) => {
      this.list = res.data;
    });
    console.log(this.list);
    console.log(JSON.stringify(this.list));
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
}
</style>
