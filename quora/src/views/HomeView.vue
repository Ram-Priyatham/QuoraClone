<template>
  <div>
    <!-- {{ list }} -->
    <div v-for="(posts, index) in list" :key="index">
      <!-- <p>{{ posts.answerEntity.answerID }}</p> -->
      <div class="main">
        <div class="sub">
          <div class="userDetails">
            <div @click="emitPost(posts)">
              <p>
                <img
                  :src="posts.answerEntity.answerGiverImage"
                  style="width: 50px; padding-top: 10px"
                />
                <b>{{ posts.answerEntity.answerGiverName }}</b>
              </p>
              <p>
                <b>{{ posts.answerEntity.questionBody }}</b>
              </p>
              <!-- <p>{{ posts.answerEntity.answerID }}</p> -->
              <p>
                {{ posts.answerEntity.answerBody }}
              </p>
              <p>{{ posts.commentsList }}</p>
            </div>
            <div>
              <i
                class="fas fa-thumbs-up"
                @click="emitUpVote(posts)"
                :style="
                  isLiked.includes(posts.answerEntity.answerID)
                    ? 'background: blue;'
                    : ''
                "
              ></i>
              <span style="visibility: hidden">R</span>
              <i
                class="fas fa-thumbs-down"
                @click="emitDownVote(posts)"
                :style="
                  isDisLiked.includes(posts.answerEntity.answerID)
                    ? 'background: blue;'
                    : ''
                "
              ></i>
              <span style="visibility: hidden">R</span>
              <span style="visibility: hidden">R</span>
              <button class="fas fa-comment" @click="emitComment"></button>
              <span style="visibility: hidden">R</span
              ><span style="visibility: hidden">R</span>
              <button class="fas fa-comment" @click="emitAllComment(posts)">
                All
              </button>
              <!-- {{ allComment[posts] }} -->
              <div v-if="allComments[posts.answerEntity.answerID]">
                <div
                  v-for="comment in allComments[posts.answerEntity.answerID]"
                  :key="comment.commentId"
                >
                  <div class="showcomments">
                    <img :src="comment.commenterImage" />
                    <h2>{{ comment.userName }}</h2>
                    <h2>{{ comment.commentBody }}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <input v-if="boolValue" v-model="inputText" type="text" />
      <button v-if="boolValue" @click="commenting(posts)">Comment</button>
    </div>
  </div>
</template>

<script>
//import { createDecipheriv } from "crypto";
import axios from "axios";
export default {
  data() {
    return {
      answerId: localStorage.getItem("answerId"),
      userId: localStorage.getItem("userid"),
      userName: localStorage.getItem("name"),
      inputText: "",
      boolValue: false,
      list: undefined,
      list1: undefined,
      list2: undefined,
      response: undefined,
      allComments: {},
      msg: "",
      isLiked: [],
      isDisLiked: [],
    };
  },

  async created() {
    await axios.get("/api/question/getPosts").then((res) => {
      this.list = res.data;
    });
    // console.log(this.list);
    // console.log(JSON.stringify(this.list));
  },

  methods: {
    //     async onUpVote(){
    //         await axios.get("http://10.20.3.153:8081/answer/upvote"+this.list)

    //     }
    async commenting(posts) {
      localStorage.setItem("answerID", posts.answerEntity.answerID);
      const payload = {
        answerId: localStorage.getItem("answerID"),
        commentBody: this.inputText,
        parentId: "null",
        userId: localStorage.getItem("email"),
        userName: "ram",
      };
      console.log(payload);
      if (this.inputText.length > 1) {
        console.log(this.inputText);
        await axios.post("/api/comment/addcomment", payload).then((res) => {
          console.log(res);
        });
      }
    },
    emitComment() {
      this.boolValue = true;
      console.log(this.inputText);
    },
    emitPost(posts) {
      localStorage.setItem("questionID", posts.questionId);
      this.$router.push("/postDescription");
    },
    changeUpvoteColor() {
      this.upvoteColor = this.upvoteColor === "#ccc" ? "#3f51b5" : "#ccc";
    },
    changeDownvoteColor() {
      this.downvoteColor = this.downvoteColor === "#ccc" ? "#3f51b5" : "#ccc";
    },
    async fetchPosts() {
      await axios.get("/api/question/getPosts").then((res) => {
        this.list = res.data;
      });
    },

    async emitUpVote(posts) {
      localStorage.setItem("answerID", posts.answerEntity.answerID);
      const isAlreadyLiked = this.isLiked.some(
        (id) => id === posts.answerEntity.answerID
      );
      if (isAlreadyLiked) {
        this.isLiked = this.isLiked.filter(
          (id) => id !== posts.answerEntity.answerID
        );
      } else {
        this.isLiked.push(posts.answerEntity.answerID);
      }
      console.log(JSON.stringify(this.isLiked));
      await axios
        .post(
          "/api/answer/upVote/" +
            localStorage.getItem("answerID") +
            "/" +
            localStorage.getItem("userId")
        )
        .then((res) => {
          this.list1 = res.data;
          this.fetchPosts();
        });
      // console.log(this.list1);
    },
    emitAllComment(posts) {
      console.log("answer ID is ", posts.answerEntity.answerID);
      axios
        .get(`api/comment/getcommentbyanswer/${posts.answerEntity.answerID}`)
        .then((response) => {
          console.log(response);
          const allCommentsClone = { ...this.allComments };
          allCommentsClone[posts.answerEntity.answerID] =
            response.data.commentList;
          this.allComments = allCommentsClone;
          // this.commentsForPosts[postId] = response.data.comments;
          // this.commentsList = response.data.comments;
          console.log(
            "commentslist",
            this.allComments[posts.answerEntity.answerID]
          );
          // if (this.commentsList.length > 0) this.isComments = true;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
      // return this.allComments;
    },
    async emitDownVote(posts) {
      localStorage.setItem("answerID", posts.answerEntity.answerID);
      const isAlreadyDisLiked = this.isDisLiked.some(
        (id) => id === posts.answerEntity.answerID
      );
      if (isAlreadyDisLiked) {
        this.isDisLiked = this.isDisLiked.filter(
          (id) => id !== posts.answerEntity.answerID
        );
      } else {
        this.isDisLiked.push(posts.answerEntity.answerID);
      }
      console.log(JSON.stringify(this.isDisLiked));
      await axios
        .post(
          "/api/answer/downVote/" +
            localStorage.getItem("answerID") +
            "/" +
            localStorage.getItem("userId")
        )
        .then((res) => {
          this.list2 = res.data;
        });
      // console.log(this.list2);
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
  width: 40%;
  align-content: center;
  margin-left: 26%;
  background-color: white;
  border-radius: 6px;
}
.sub {
  margin-left: 2%;
}
.fa-thumbs-up,
.fa-thumbs-down {
  font-size: 20px;
  cursor: pointer;
}
</style>
