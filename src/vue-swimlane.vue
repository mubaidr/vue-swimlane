<template>
  <div class="vue-swimlane" :style="listParentStyle">
    <ul :style="listStyle">
      <li :style="itemStyle" v-for="word in words" :key="word">{{word}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'vue-swimlane',
    props: {
      words: {
        type: [Array, Object],
        required: true
      },
      rows: {
        type: [Number, String],
        default: 3
      },
      scale: {
        type: [Number, String],
        default: 1
      },
      animationDuration: {
        type: [Number, String],
        default: 1500
      },
      delay: {
        type: [Number, String],
        default: 500
      },
      circular: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        fontSize: 32,
        padding: 16,
        listTop: 0,
        moveUp: true,
        resetOnNext: false
      }
    },
    computed: {
      itemHeight () {
        return (this.fontSize * this.scale)
      },
      listHeight () {
        return this.itemHeight * this.words.length
      },
      parentHeight () {
        return this.itemHeight * this.rows
      },
      itemStyle () {
        return `font-size: ${this.itemHeight}px;
        height: ${this.itemHeight}px`
      },
      listStyle () {
        return `-webkit-transition: transform ${this.animationDuration}ms ease;
        -moz-transition: transform  ${this.animationDuration}ms ease;
        transition: transform  ${this.animationDuration}ms ease;
        transform: translateY(${this.listTop}px);`
      },
      listParentStyle () {
        return `height: ${this.parentHeight}px; padding-top: ${this.itemHeight / 3}px`
      }
    },
    methods: {
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

        if (this.listTop - (this.itemHeight * this.rows) <= -this.listHeight) {
          this.circular ? this.moveUp = false : this.resetOnNext = true
        }
      },
      animate () {
        this.updateState()
        setTimeout(() => {
          this.animate()
        }, this.delay + this.animationDuration)
      }
    },
    mounted () {
      setTimeout(() => {
        this.animate()
      }, this.delay)
    }
  }
</script>

<style scoped>
  .vue-swimlane {
    width: 100%;
    overflow: hidden;
    padding: 0;
    margin: 0;
    box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.25)
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
