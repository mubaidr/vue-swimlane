<template>
  <div
    :style="listParentStyle"
    class="vue-swimlane"
    @mouseenter="toggleAnimation"
    @mouseleave="toggleAnimation"
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
import { setTimeout } from 'timers'
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
      listTop: 0,
      isPaused: false,
      isMovingBackwards: false,
    }
  },

  computed: {
    listCount() {
      return this.words.length
    },

    fontSize() {
      // scale from 16px font size
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
              transition-delay: ${this.transitionDelay}ms;
              transition-duration: ${this.transitionDuration}ms;
              transition-timing-function: ${this.transition};
              will-change: transform;
              transform: translateY(${this.listTop}px)`
    },

    listParentStyle() {
      return `height: ${this.listParentHeight}px;`
    },
  },

  mounted() {
    setTimeout(this.updateState, this.transitionDelay)
  },

  methods: {
    updateState() {
      // check if enough keywords or is not paused
      if (this.listCount <= this.rows) return
      if (this.isPaused) return

      // update list state
      if (this.isMovingBackwards) {
        this.listTop += this.itemHeight
      } else {
        this.listTop -= this.itemHeight
      }

      if (this.circular) {
        // cricular animation
        if (this.listTop < this.rows * this.itemHeight - this.listHeight) {
          this.listTop += this.itemHeight
          this.isMovingBackwards = !this.isMovingBackwards
        }

        if (this.listTop > this.rows * this.itemHeight) {
          this.listTop = 0
          this.isMovingBackwards = !this.isMovingBackwards
        }
      } else if (this.continous) {
        // continous animation
      }
      // one way animation
      else if (this.listTop < this.rows * this.itemHeight - this.listHeight) {
        this.listTop = 0
      }

      // set time out for next update
      this.timeOutId = window.setTimeout(() => {
        this.updateState()
      }, this.transitionDuration + this.transitionDelay)
    },

    toggleAnimation() {
      if (this.pauseOnHover) {
        this.isPaused = !this.isPaused

        if (this.isPaused) {
          clearTimeout(this.timeOutId)
        } else {
          this.updateState()
        }
      }
    },
  },
}
</script>

<style>
.vue-swimlane {
  overflow: hidden !important;
}

.vue-swimlane ul {
  list-style: none !important;
  overflow: hidden !important;
  transition-property: transform !important;
}

.vue-swimlane ul li {
  text-align: center;
  padding: 0 !important;
  margin: 0 !important;
}
</style>
