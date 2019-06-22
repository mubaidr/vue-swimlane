<template>
  <div
    :style="listParentStyle"
    class="vue-swimlane"
    @mouseenter="throttleToggleAnimation"
    @mouseleave="throttleToggleAnimation"
  >
    <ul :style="listStyle">
      <li
        v-for="(word, index) in words"
        :key="index"
        :style="itemStyle"
        v-html="word"
      />
    </ul>
  </div>
</template>

<script>
// import debounce from 'lodash.debounce'

export default {
  name: 'VueSwimlane',

  props: {
    words: {
      type: Array,
      default: () => {
        return []
      },
      required: true,
    },
    rows: {
      type: Number,
      default: 1,
    },
    scale: {
      type: Number,
      default: 1,
    },
    transitionDuration: {
      type: Number,
      default: 1000,
    },
    transitionDelay: {
      type: Number,
      default: 500,
    },
    transition: {
      type: String,
      default: 'ease-out',
    },
    circular: {
      type: Boolean,
      default: false,
    },
    continous: {
      type: Boolean,
      default: false,
    },
    pauseOnHover: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      isPaused: false,
    }
  },

  computed: {
    listCount() {
      return this.words.length
    },

    fontSize() {
      return 16 * this.scale
    },

    itemHeight() {
      return this.fontSize * 1.5
    },

    listHeight() {
      return this.itemHeight * this.listCount
    },

    listParentHeight() {
      return this.itemHeight * this.rows
    },

    itemStyle() {
      return `font-size: ${this.fontSize}px;
              height: ${this.itemHeight}px;`
    },

    listStyle() {
      return `height: ${this.listHeight}px;
              transition-property: transform;
              transition-delay: ${this.transitionDelay}ms;
              transition-duration: ${this.transitionDuration}ms;
              transition-timing-function: ${this.transition};
              will-change: transform;`
    },

    listParentStyle() {
      return `height: ${this.listParentHeight}px;`
    },
  },

  mounted() {},

  methods: {
    throttleToggleAnimation() {},
  },
}
</script>

<style>
.vue-swimlane {
  overflow: hidden !important;
}

.vue-swimlane ul {
  overflow: hidden !important;
}

.vue-swimlane ul li {
  text-align: center;
  padding: 0 !important;
  margin: 0 !important;
}
</style>
