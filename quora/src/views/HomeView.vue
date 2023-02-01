<template>
  <div>
    <div class="main">
      <div class="sub">
        <div class="userDetails">
          <p>
            <b> Name </b><br />
            Description
          </p>
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
</template>

<script>
export default {};
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
