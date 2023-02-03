<template>
  <div>
    <p>
      <b>{{ list[0].questionBody }}</b>
    </p>
    <div v-for="(answer, index) in list" :key="index">
      <div class="main">
        <div class="sub">
          <div class="userDetails">
            <p>{{ answer.answerID }}</p>
            <p>{{ answer.answerUserID }}</p>
            <p>{{ answer.answerGiverName }}</p>
            <!-- <p>{{ answer.questionBody }}</p> -->
            <p>{{ answer.answerBody }}</p>
            <button>Upvote</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//import { defineComponent } from '@vue/composition-api'
import axios from "axios";

export default {
  data() {
    return {
      list: undefined,
    };
  },
  async created() {
    await axios
      .get("/api/answer/findAllAnswers/" + localStorage.getItem("questionID"))
      .then((res) => {
        this.list = res.data;
      });
    console.log(this.list);
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
