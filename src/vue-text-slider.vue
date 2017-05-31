<template>
  <div class="vue-text-slider" :style="listParentStyle">
    <ul :style="listStyle">
      <li :style="itemStyle" v-for="word in words">{{word}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'vue-text-slider',
    props: {
      words: {
        type: [Array, Object],
        required: true
      },
      rows: {
        type: Number,
        default: 3
      },
      scale: {
        type: Number,
        default: 1
      },
      animationDuration: {
        type: Number,
        default: 1500
      },
      delay: {
        type: Number,
        default: 500
      },
      circular: {
        type: Boolean,
        default: false // TODO update
      }
    },
    data () {
      return {
        fontSize: 32,
        padding: 16,
        listTop: 0,
        moveUp: true
      }
    },
    watch: {},
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
        return `height: ${this.parentHeight}px`
      }
    },
    methods: {
      updateState () {
        if (this.listTop === 0) {
          this.moveUp = true
        }

        if (this.listTop - (this.itemHeight * this.rows) <= -this.listHeight) {
          this.moveUp = false
        }

        if (this.moveUp) {
          this.listTop -= this.itemHeight
        } else {
          this.listTop += this.itemHeight
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
  .vue-text-slider {
    width: 100%;
    overflow: hidden;
    box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.25)
  }

  .vue-text-slider ul {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
    transform: translateY(0);
    will-change: transform;
  }

  .vue-text-slider ul li {
    padding: 0;
    margin: 0;
  }
</style>
