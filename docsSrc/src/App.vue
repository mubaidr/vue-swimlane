<template>
  <div id="app" class="container">
    <h1 class="md-title">
      Vuejs Swimlane Plugin:
      <span style="text-muted">Display a list of words as a text Swimlane.</span>
    </h1>
    <iframe src="https://ghbtns.com/github-btn.html?user=mubaidr&type=follow&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
    <transition appear name="slide-up" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style></style>
