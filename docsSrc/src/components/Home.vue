<template>
  <div class="full-width">
    <h2>Demo</h2>
    <vue-swimlane :words="content"></vue-swimlane>
    <a href="https://github.com/mubaidr/vue-swimlane">View Source Code On Github</a>
    <h2>Options & playground</h2>
    <p>Change options below to see the effect. </p>
    <br/>
    <md-layout md-gutter="24">
      <md-layout>
        <md-input-container>
          <label>Text</label>
          <md-input v-model="options.text"></md-input>
        </md-input-container>
        <md-input-container>
          <label>Rows</label>
          <md-input v-model="options.rows" type="number"></md-input>
        </md-input-container>
        <md-input-container>
          <label>Scale</label>
          <md-input v-model="options.scale" type="number"></md-input>
        </md-input-container>
        <md-input-container>
          <label>Animation Duration</label>
          <md-input v-model="options.animationDuration" type="number"></md-input>
        </md-input-container>
        <md-input-container>
          <label>Delay</label>
          <md-input v-model="options.delay" type="number"></md-input>
        </md-input-container>
        <md-checkbox v-model="options.circular" class="md-primary">Circular</md-checkbox>
      </md-layout>
      <md-layout>
        <vue-swimlane :words="textArray" :circular="options.circular" :rows="options.rows" :scale="options.scale" :animationDuration="options.animationDuration" :delay="options.delay"></vue-swimlane>
      </md-layout>
    </md-layout>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        content: ['This', 'is', 'awesome', 'swimlane', 'plugin', 'for', 'awesome', 'VueJS'],
        options: {
          text: 'This, plugin, displays, a, list, of, words, as, a, Swimlane.',
          circular: true,
          rows: 3,
          scale: 2,
          animationDuration: 1000,
          delay: 500
        }
      }
    },
    computed: {
      textArray () {
        return this.options.text.split(',').map(function (item) {
          return item.trim()
        })
      }
    }
  }
</script>

<style>
  .full-width {
    width: 96%;
    margin: 2%;
  }
</style>
