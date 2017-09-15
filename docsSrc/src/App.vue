<template>
  <div id="app">
    <md-whiteframe md-tag="md-toolbar" md-elevation="3">
      <div class="md-toolbar-container custom">
        <h1 class="md-title">
          Vuejs Swimlane Plugin:
          <span style="opacity: 0.75">Display a list of words as a text Swimlane.</span>
        </h1>
        <span style="flex: 1;">
        </span>
        <a href="https://github.com/mubaidr" class="profile-link">mubaidr@github</a>
      </div>
    </md-whiteframe>
    <md-layout>
      <md-layout md-hide-small md-flex="15"></md-layout>
      <md-layout>
        <transition appear name="slide-up" mode="out-in">
          <router-view></router-view>
        </transition>
      </md-layout>
      <md-layout md-hide-small md-flex="15"></md-layout>
    </md-layout>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  .md-toolbar-container.custom {
    padding-top: 25px;
    padding-bottom: 75px;
  }

  .profile-link {
    color: #eee;
  }

  .profile-link:hover {
    color: #fff;
  }
</style>
