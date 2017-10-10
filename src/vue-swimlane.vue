<template>
  <div class="vue-swimlane" :style="listParentStyle" @mouseenter="throttleToggleAnimation" @mouseleave="throttleToggleAnimation">
    <ul :style="listStyle">
      <li :style="itemStyle" v-for="word in words" :key="word" v-html="word"></li>
    </ul>
  </div>
</template>

<script>
  import * as debounce from 'lodash.debounce'

  export default {
    name: 'vue-swimlane',
    props: {
      words: {
        type: Array,
        required: true
      },
      rows: {
        type: Number,
        default: 1
      },
      scale: {
        type: Number,
        default: 1
      },
      transitionDuration: {
        type: Number,
        default: 500
      },
      transitionDelay: {
        type: Number,
        default: 250
      },
      transition: {
        type: String,
        default: 'ease-out'
      },
      circular: {
        type: Boolean,
        default: false
      },
      pauseOnHover: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        fontSize: 16,
        listTop: 0,
        moveUp: true,
        resetOnNext: false,
        padding: 16,
        isPaused: false,
        updatetimeoutId: null
      }
    },
    computed: {
      transitionDelayNormalized () {
        return Math.abs(this.transitionDelay || 250)
      },
      transitionDurationNormalized () {
        return Math.abs(this.transitionDuration || 250)
      },
      itemScaleNormalized () {
        return Math.abs(this.scale || 1)
      },
      itemRowsNormalized () {
        return this.rows > this.words.length ? this.words.length : Math.abs(this.rows || 1)
      },
      itemHeight () {
        return (this.fontSize * this.itemScaleNormalized) + this.padding
      },
      itemStyle () {
        return `font-size: ${this.itemHeight - this.padding / 2}px!important; line-height: ${this.itemHeight}px!important;`
      },
      listHeight () {
        return this.itemHeight * this.words.length
      },
      listStyle () {
        return `-webkit-transition: transform ${this.transitionDurationNormalized}ms ${this.transition}!important;
        -moz-transition: transform  ${this.transitionDurationNormalized}ms ${this.transition}!important;
        transition: transform  ${this.transitionDurationNormalized}ms ${this.transition}!important;
        transform: translateY(${this.listTop}px)!important;`
      },
      listParentStyle () {
        return `height: ${this.itemHeight * this.itemRowsNormalized}px!important;`
      }
    },
    methods: {
      capitalize (str) {
        return str.replace(/\b\w/g, l => l.toUpperCase())
      },
      updateState () {
        if (this.resetOnNext) {
          this.listTop = 0
          this.resetOnNext = false
          return
        }

        if (this.listTop === 0) {
          this.moveUp = true
        }

        if (this.moveUp) {
          this.listTop -= this.itemHeight
        } else {
          this.listTop += this.itemHeight
        }

        if (this.listTop - (this.itemHeight * this.itemRowsNormalized) <= -this.listHeight) {
          this.circular ? this.moveUp = false : this.resetOnNext = true
        }
      },
      animate () {
        if (!this.isPaused && this.words.length > this.itemRowsNormalized) {
          this.updatetimeoutId = setTimeout(() => {
            this.updateState()
            this.animate()
          }, this.transitionDelayNormalized + this.transitionDurationNormalized)
        }
      },
      toggleAnimation () {
        this.isPaused = !this.isPaused
        this.animate()
      },
      throttleToggleAnimation () {
        clearTimeout(this.updatetimeoutId)
        debounce(this.toggleAnimation, this.transitionDelayNormalized, { leading: true })()
      }
    },
    mounted () {
      this.animate()
    }
  }
</script>

<style scoped>
  .vue-swimlane {
    width: 100%;
    overflow: hidden;
    padding: 0;
    margin: 0;
  }

  .vue-swimlane ul {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
    transform: translateY(0);
    will-change: transform;
  }

  .vue-swimlane ul li {
    padding: 0;
    margin: 0;
  }
</style>
