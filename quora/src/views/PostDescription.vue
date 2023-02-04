<template>
  <div>
    <p>
      <b>{{ list[0].questionBody }}</b>
    </p>
    <div>
      <button @click="showInput = true">Answer This</button>
      <center>
        <div v-if="showInput" style="align-items: center">
          <textarea
            type="text"
            class="form-control"
            v-model="inputValue"
            style="width: 350px; height: 150px"
          />
          <button @click="submitInput">Submit</button>
        </div>
      </center>
    </div>
    <div v-for="(answer, index) in list" :key="index">
      <div class="main">
        <div class="sub">
          <div class="userDetails">
            <p>
              <img
                :src="answer.answerGiverImage"
                style="width: 50px; padding-top: 10px"
              />
              <b>{{ answer.answerGiverName }}</b>
            </p>
            <!-- <p>{{ answer.answerID }}</p> -->
            <p>{{ answer.answerBody }}</p>
            <div>
              <i class="fas fa-thumbs-up"></i>
              <span style="visibility: hidden">R</span>
              <i class="fas fa-thumbs-down"></i>
            </div>
            <!-- <p>{{ answer.questionBody }}</p> -->
            <!-- <p>{{ answer.questionId }}</p> -->
            <!-- <button>Upvote</button> -->
          </div>
        </div>
      </div>
    </div>
    <!-- {{ list }} -->
  </div>
</template>
<script>
//import { defineComponent } from '@vue/composition-api'
import axios from "axios";

export default {
  data() {
    return {
      list: undefined,
      showInput: false,
      inputValue: "",
    };
  },
  methods: {
    submitInput() {
      const requestbody = {
        answerBody: this.inputValue,
        answerUserId: localStorage.getItem("email"),
        questionId: localStorage.getItem("questionID"),
      };
      axios.post("/api/answer/addAnswer", requestbody);
      this.showInput = false;
      this.inputValue = "";
    },
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
.fa-thumbs-up,
.fa-thumbs-down {
  font-size: 20px;
  cursor: pointer;
}
.sub {
  margin-left: 2%;
}
</style>
