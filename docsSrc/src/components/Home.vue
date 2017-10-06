<template>
  <div>
    <h2>Demo</h2>
    <vue-swimlane class="demo-swimlane" :words="content"></vue-swimlane>
    <br/>
    <h3>How to use</h3>
    <p class="code">
      &lt;vue-swimlane :words="textArray" :circular="options.circular" :rows="options.rows" :scale="options.scale" :animationDuration="options.animationDuration" :delay="options.delay"&gt;&lt;/vue-swimlane&gt;
    </p>
    <iframe src="https://ghbtns.com/github-btn.html?user=mubaidr&repo=vue-swimlane&type=star&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
    <br/>
    <h3>Playground</h3>
    <p>Change options below to see the effect. </p>
    <p>
      <vue-swimlane class="playground-swimlane" :words="textArray" :circular="options.circular" :rows="options.rows" :scale="options.scale" :animationDuration="options.animationDuration" :delay="options.delay"></vue-swimlane>
    </p>

    <h3>Options</h3>
    <div class="row">
      <div class="col-md-6">
        <form class="form-horizontal">
          <fieldset>
            <div class="form-group">
              <label class="col-lg-2 control-label">Text</label>
              <div class="col-lg-10">
                <input type="text" class="form-control" v-model="options.text">
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-2 control-label">Rows</label>
              <div class="col-lg-10">
                <input type="number" class="form-control" v-model="options.rows">
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-2 control-label">Scale</label>
              <div class="col-lg-10">
                <input type="number" class="form-control" v-model="options.scale">
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-2 control-label">Animation Duration</label>
              <div class="col-lg-10">
                <input type="number" class="form-control" v-model="options.animationDuration">
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-2 control-label">Delay</label>
              <div class="col-lg-10">
                <input type="number" class="form-control" v-model="options.delay">
              </div>
            </div>
            <div class="form-group">
              <div class="col-lg-offset-2 col-lg-10">
                <div class="checkbox">
                  <label>
                    <input type="checkbox" value="true" v-model="options.circular"> Circular?
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
      <div class="col-md-6">
        <ul>
          <li>words - string[]: Array of tags or words to be used on display.</li>
          <li>rows - int: Number of rows always visible at a time.</li>
          <li>scale - float: Set size for the display container.</li>
          <li>animationDuration - float in ms: Animation duration for rows.</li>
          <li>delay - float in ms: Delays between each animation duration.</li>
          <li>circular - boolean: If false, animation will start from top after completion.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        content: ['This', 'is', 'awesome', 'swimlane', 'plugin', 'for', 'awesome', 'VueJS'],
        options: {
          text: 'This plugin displays a list of words as a Swimlane.',
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
        return this.options.text.split(' ').map(function (item) {
          return item.trim()
        })
      }
    }
  }
</script>

<style>
  .code {
    background-color: #222;
    padding: 5px;
    border-radius: 4px;
  }

  .demo-swimlane {
    border-radius: 4px;
    background-color: #4582ec;
    color: #fff;
  }

  .playground-swimlane {
    border-radius: 4px;
    background-color: #c7254e;
    color: #fff;
  }
</style>
