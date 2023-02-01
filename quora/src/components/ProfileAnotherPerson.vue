<template>
  <div class="profile-page">
    <div class="header">
      <div class="user-info">
        <img class="user-avatar" src="path/to/avatar.jpg" />
        <h2 class="username">Name</h2>
        <p class="user-bio">Bio text here</p>
      </div>
      <div class="header-actions">
        <button class="follow-button">Follow</button>
        <button class="message-button">Message</button>
      </div>
    </div>
    <div class="navigation">
      <a class="nav-item" href="#">Activity</a>
      <a class="nav-item" href="#">Answers</a>
      <a class="nav-item" href="#">Questions</a>
      <a class="nav-item" href="#">Blogs</a>
    </div>
    <div class="content">
      <!-- content here -->
    </div>
  </div>
</template>

<style>
.profile-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fafafa;
}

.user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.user-avatar {
  height: 80px;
  width: 80px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.header-actions {
  display: flex;
  justify-content: center;
}

.follow-button,
.message-button {
  background-color: #0084ff;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 24px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 20px;
}

.navigation {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  background-color: #fafafa;
}

.nav-item {
  padding: 20px;
  color: #333;
  font-size: 16px;
  text-decoration: none;
}

.content {
  width: 100%;
  padding: 20px;
  background-color: #fff;
}
</style>
