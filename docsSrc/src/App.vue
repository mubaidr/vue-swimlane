<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <h1>Vuejs Text Swimlane Plugin</h1>
      <p>Display a list of words as a text Swimlane.</p>
      <p>
        <iframe src="https://ghbtns.com/github-btn.html?user=mubaidr&type=follow&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
        <iframe src="https://ghbtns.com/github-btn.html?user=mubaidr&repo=vue-swimlane&type=star&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
      </p>
    </div>
    <home></home>
  </div>
</template>

<script>
  import home from './components/Home'
  export default {
    name: 'app',
    components: {
      home
    }
  }
</script>

<style>
  .container {
    padding-top: 25px;
  }
</style>
