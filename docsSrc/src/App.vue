<template>
  <div id="app">
    <img src="./assets/logo.png">
    <md-layout md-hide-small md-flex="15"></md-layout>
    <md-layout>
      <transition appear name="slide-up" mode="out-in">
        <router-view></router-view>
      </transition>
    </md-layout>
    <md-layout md-hide-small md-flex="15"></md-layout>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  
</style>
