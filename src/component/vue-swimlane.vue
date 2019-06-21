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
import debounce from 'lodash.debounce'

export default {
  name: 'VueSwimlane',

  props: {
    words: {
      type: Array,
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
      updatetimeoutId: null,
    }
  },

  computed: {},

  mounted() {},

  methods: {},
}
</script>

<style>
.vue-swimlane {
}

.vue-swimlane ul {
}

.vue-swimlane ul li {
}
</style>
