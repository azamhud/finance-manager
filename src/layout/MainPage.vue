<template>
  <div class="main">
    <UserProfile />
    <div class="main__body">
      <NavBar />
      <router-view class="view" />
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import UserProfile from "../components/UserProfile";

export default {
  name: "MainPage",
  components: {
    NavBar,
    UserProfile
  }
};
</script>

<style lang="scss" scoped>
.main {
  min-height: 100vh;
  &__body {
    min-height: 100vh;
    margin: 0px;
    display: flex;
    .view {
      background-color: #f4f9fd;
      width: 100%;
    }
  }
}
</style>
