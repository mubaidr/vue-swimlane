<template>
  <div class="full-width">
    <h1>A Word Swimlane Plugin For VueJS</h1>
    <p>This plugin displays a list of words as a Swimlane.</p>
    <vue-swimlane :words="content"></vue-swimlane>
    <h2>Options</h2>
    <vue-swimlane :words="content"></vue-swimlane>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        content: ['This', 'is', 'awesome', 'swimlane', 'plugin', 'for', 'awesome', 'VueJS'],
        options: {

        }
      }
    }
  }
</script>

<style>
  .full-width {
    width: 100%;
  }
</style>
