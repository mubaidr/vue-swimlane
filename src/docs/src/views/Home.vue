<template>
  <div>
    <section class="hero is-medium is-info is-bold">
      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="has-text-centered">
          <h1 class="title is-1">
            Vue-Swimlane
          </h1>
          <h2 class="subtitle is-3">
            Display a list of words as an animated text swim lane.
          </h2>
          <a
            href="https://github.com/mubaidr/vue-swimlane"
            class="button is-dark"
            title="Github Repository"
            target="_blank"
          >
            <span>Github</span>
          </a>
          &nbsp;
          <a
            href="https://github.com/mubaidr/vue-swimlane/tree/master/dist"
            class="button is-dark"
            title="Download"
            target="_blank"
          >
            <span>Download</span>
          </a>
        </div>
      </div>
    </section>

    <section class="section">
      <vue-swimlane :words="content" :scale="2" :rows="3" :continous="true" />

      <hr />

      <h3 class="title is-3">How to use:</h3>
      <h4 class="subtitle is-4">Install using NPM</h4>
      <code>npm install vue-swimlane --save</code><br />
      then:
      <br />
      <code>import Vue from 'vue'</code><br />
      <code>import Swimlane from 'vue-swimlane'</code><br />
      <code>Vue.use(Swimlane)</code>

      <br />
      <br />
      <h4 class="subtitle is-4">Directly include from CDN or Github Repo</h4>
      <code
        >&lt;script
        src=&quot;https://unpkg.com/vue-swimlane/dist/vue-swimlane.min.js&quot;&gt;&lt;/script&gt;</code
      >

      <br />
      <br />
      <h4 class="subtitle is-4">Markup</h4>
      <code>
        &lt;vue-swimlane :words=&quot;[&apos;Some&apos;, &apos;keywords&apos;,
        &apos;to&apos;, &apos;display&apos;]&quot;&gt;&lt;/vue-swimlane&gt;
      </code>

      <br />
      <br />
      <hr />
      <h3 class="title is-3">Playground</h3>
      <h4 class="subtitle is-4">Change options below to see the effect.</h4>
      <p>
        <vue-swimlane
          :words="textArray"
          :rows="options.rows"
          :scale="options.scale"
          :transition-duration="options.transitionDuration"
          :transition-delay="options.transitionDelay"
          :transition="options.transition"
          :pause-on-hover="options.pauseOnHover"
          class="playground-swimlane"
        />
      </p>

      <br />
      <h3 class="title is-3">Options</h3>
      <div class="columns">
        <div class="column">
          <div class="field">
            <label class="label">Text</label>
            <div class="control">
              <input v-model="options.text" type="text" class="input" />
            </div>
          </div>

          <div class="field">
            <div class="control">
              <label class="checkbox is-primary">
                <input v-model="options.pauseOnHover" type="checkbox" />
                Pause On Hover?
              </label>
            </div>
          </div>

          <div class="field">
            <label class="label">Rows</label>
            <div class="control">
              <input
                v-model.number="options.rows"
                type="number"
                class="input"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Scale</label>
            <div class="control">
              <input
                v-model.number="options.scale"
                type="number"
                class="input"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Transition Duration</label>
            <div class="control">
              <input
                v-model.number="options.transitionDuration"
                type="number"
                class="input"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Transition Delay</label>
            <div class="control">
              <input
                v-model.number="options.transitionDelay"
                type="number"
                class="input"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Transition</label>
            <div class="control">
              <input v-model="options.transition" type="text" class="input" />
            </div>
          </div>
        </div>
        <div class="column">
          <ul class="list-group">
            <li class="list-group-item">
              <strong>words</strong> - string[] - <i>required</i>: Array of tags
              or words to be used on display.<br />
              <strong>Supports HTML content!</strong>
            </li>
            <li class="list-group-item">
              <strong>continous</strong> - bool (Default: false): If true, list
              continues forward, repeating the list.
            </li>
            <li class="list-group-item">
              <strong>circular</strong> - bool (Default: false): If true, list
              starts from the top after completion.
            </li>
            <li class="list-group-item">
              <strong>pauseOnHover</strong> - bool (Default: true): If true,
              animation will pause on mouse hover.
            </li>
            <li class="list-group-item">
              <strong>rows</strong> - int (Default: 1): Number of rows always
              visible at a time.
            </li>
            <li class="list-group-item">
              <strong>scale</strong> - float (Default: 1): Font size scaling
              relative to 16px.
            </li>
            <li class="list-group-item">
              <strong>transitionDuration</strong> - float in ms (Default: 500):
              Animation duration for rows.
            </li>
            <li class="list-group-item">
              <strong>transitionDelay</strong> - float in ms (Default: 250):
              Delays between each animation duration.
            </li>
            <li class="list-group-item">
              <strong>transition</strong> - string (Default: ease-out): css
              transition name.
            </li>
          </ul>
        </div>
      </div>

      <br />
      <hr />
      <h3 class="title is-3">Styles?</h3>
      <p>
        Almost all the styling can be applied using your own class or using
        default class name <code>vue-swimlane</code> except anything that
        effects the height of the text or the field.
        <br />
        <strong>To change height or font-size</strong> please use the integrated
        option
        <code>scale</code>
      </p>

      <br />
      <hr />
      <h3 class="title is-3">
        Found any bug or feature request?
        <a href="https://github.com/mubaidr/vue-swimlane/issues"
          >Report Here!</a
        >
      </h3>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      content: [
        'Vue Swimlane',
        'swimlane',
        'plugin',
        'for',
        'awesome',
        '<a href="https://vuejs.org">VueJS</a>',
      ],
      options: {
        text: 'Plugin to display list of words as Swimlane',
        pauseOnHover: true,
        rows: 3,
        scale: 1,
        transitionDuration: 1000,
        transitionDelay: 250,
        transition: 'ease-out',
      },
    }
  },
  computed: {
    textArray() {
      return this.options.text.split(' ').map(item => item.trim())
    },
  },
}
</script>

<style>
.playground-swimlane {
  background-color: rebeccapurple;
  color: #fff;
}
</style>
