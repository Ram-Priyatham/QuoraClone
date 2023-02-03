<template>
  <div style="display: flex; flex-direction: column-reverse">
    <div v-for="(question, index) in list" :key="index">
      <!-- <p>{{ question }}</p> -->
      <div class="main">
        <div class="sub">
          <div class="userDetails" style="padding: 8px; padding-top: 14px">
            <b
              ><p>{{ question.questionBody }}</p></b
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "HomeView",
  data() {
    return {
      list: undefined,
      numberOfQuestions: 0,
      answersList: [],
    };
  },
  async created() {
    localStorage.setItem("userId", "publicuser@gmail.com");
    await axios
      .get(
        "http://10.20.3.153:8087/question/getQuestionByQuestionUserId/" +
          localStorage.getItem("userId")
      )
      .then((res) => {
        this.list = res.data;
        this.numberOfQuestions = res.data.noOfQuestionAsked;
        for (let i = 0; i < this.numberOfQuestions; i++) {
          this.answersList.push([]);
        }
        this.list = this.list.questionEntityList;
        this.getAnswers();
      });
  },

  methods: {
    async getAnswers() {
      let i = 0;
      for (i = 0; i < this.numberOfQuestions; i++) {
        const currentIndex = i;
        await axios
          .get(
            "http://10.20.3.153:8087/answer/getListOfAnswersWithQuestionId/" +
              this.list[currentIndex].questionId
          )
          .then((resp) => {
            //console.log(resp);
            const answersListClone = structuredClone(this.answersList);
            console.log(currentIndex);
            answersListClone[currentIndex] = resp.data;
            this.answersList = answersListClone;
          });
      }
    },
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
  width: 40vw;
  align-content: center;
  /* margin-left: 26%; */
  background-color: white;
  border-radius: 6px;
}
.sub {
  margin-left: 2%;
}
</style>
