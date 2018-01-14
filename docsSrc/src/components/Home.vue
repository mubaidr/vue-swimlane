<template>
  <div>
    <vue-swimlane class="demo-swimlane" :words="content" :scale="2"></vue-swimlane>
    <br/>
    <h3>How to use</h3>
    <h4>Install</h4>
    <code>npm install vue-swimlane --save</code><br><br>
    <h4>Include in HTML</h4>
    <code>
      <link rel="stylesheet" href="vue-swimlane.css"/>
      <br/>
      <script src="vue-swimlane.js"></script>
    </code>
    <h4>Import</h4>
    <code>import Vue from 'vue'</code><br>
    <code>import Swimlane from 'vue-swimlane'</code><br>
    <code>Vue.use(Swimlane)</code><br>
    <h4>Use</h4>
    <code>
      &lt;vue-swimlane :words="wordsArray" :circular="circular" :rows="rows" :scale="scale" :transitionDuration="duration" :transitionDelay="delay" :transition="transition" :pauseOnHover="true"&gt;&lt;/vue-swimlane&gt;
    </code>
    <h3>Playground</h3>
    <p>Change options below to see the effect. </p>
    <p>
      <vue-swimlane class="playground-swimlane" :words="textArray" :circular="options.circular" :rows="options.rows" :scale="options.scale" :transitionDuration="options.transitionDuration" :transitionDelay="options.transitionDelay" :transition="options.transition" :pauseOnHover="options.pauseOnHover"></vue-swimlane>
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
              <div class="col-lg-offset-2 col-lg-10">
                <div class="checkbox">
                  <label>
                    <input type="checkbox" value="true" v-model="options.circular"> Circular?
                  </label>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="col-lg-offset-2 col-lg-10">
                <div class="checkbox">
                  <label>
                    <input type="checkbox" value="true" v-model="options.pauseOnHover"> Pause On Hover?
                  </label>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-2 control-label">Rows</label>
              <div class="col-lg-10">
                <input type="number" class="form-control" v-model.number="options.rows">
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-2 control-label">Scale</label>
              <div class="col-lg-10">
                <input type="number" class="form-control" v-model.number="options.scale">
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-2 control-label">Transition Duration</label>
              <div class="col-lg-10">
                <input type="number" class="form-control" v-model.number="options.transitionDuration">
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-2 control-label">Transition Delay</label>
              <div class="col-lg-10">
                <input type="number" class="form-control" v-model.number="options.transitionDelay">
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-2 control-label">Transition</label>
              <div class="col-lg-10">
                <input type="text" class="form-control" v-model="options.transition">
              </div>
            </div>
          </fieldset>
        </form>
      </div>
      <div class="col-md-6">
        <ul class="list-group">
          <li class="list-group-item">
            <strong>words</strong> - string[] -
            <i>required</i>: Array of tags or words to be used on display.<br/>
            <strong>Supports HTML content!</strong>
          </li>
          <li class="list-group-item">
            <strong>circular</strong> - bool (Default: false): If true, list starts from the top after completion.</li>
          <li class="list-group-item">
            <strong>pauseOnHover</strong> - bool (Default: false): If true, animation will pause on mouse hover.</li>
          <li class="list-group-item">
            <strong>rows</strong> - int (Default: 1): Number of rows always visible at a time.</li>
          <li class="list-group-item">
            <strong>scale</strong> - float (Default: 1): Font size scaling relative to 16px.</li>
          <li class="list-group-item">
            <strong>transitionDuration</strong> - float in ms (Default: 500): Animation duration for rows.</li>
          <li class="list-group-item">
            <strong>transitionDelay</strong> - float in ms (Default: 250): Delays between each animation duration.</li>
          <li class="list-group-item">
            <strong>transition</strong> - string (Default: ease-out): css transition name.</li>
        </ul>
      </div>
    </div>
    <h3>Styles?</h3>
    <p>Almost all the styling can be applied using your own class or using default class name
      <code>vue-swimlane</code> except anything that effects the height of the text or the field.
      <br/>
      <strong>To change height or font-size</strong> please use the integrated option
      <code>scale</code>
    </p>
    <h3>Found any bug or feature request?
      <a href="https://github.com/mubaidr/vue-swimlane/issues">Report Here!</a>
    </h3>
    <br/>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        content: [
          'Awesome',
          'swimlane',
          'plugin',
          'for',
          'awesome',
          '<a href="https://vuejs.org">VueJS</a>'
        ],
        options: {
          text: 'This plugin displays a list of words as a Swimlane',
          circular: true,
          pauseOnHover: false,
          rows: 3,
          scale: 1,
          transitionDuration: 1000,
          transitionDelay: 100,
          transition: 'ease-in-out'
        }
      }
    },
    computed: {
      textArray() {
        return this.options.text.split(' ').map(function(item) {
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

  .vue-swimlane a {
    color: #fff;
    text-decoration: underline;
  }

  .vue-swimlane a:hover {
    color: #eee;
    text-decoration: underline;
  }
</style>
