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
        default: 1
      },
      scale: {
        type: Number,
        default: 1
      },
      delay: {
        type: Number,
        default: 1000
      }
    },
    data () {
      return {
        fontSize: 32,
        padding: 16,
        ListTop: 0
      }
    },
    watch: {},
    computed: {
      itemHeight () {
        return this.fontSize * this.scale
      },
      listHeight () {
        return this.itemHeight * this.words.length
      },
      parentHeight () {
        return this.itemHeight * this.rows
      },
      itemStyle () {
        return `font-size: ${this.fontSize * this.scale}px; height: ${this.itemHeight}px`
      },
      listStyle () {
        return `top: ${this.ListTop}px`
      },
      listParentStyle () {
        return `height: ${this.parentHeight}px`
      }
    },
    methods: {
      animate () {
        this.updateState()
        setTimeout(() => {
          this.animate()
        }, this.delay)
      },
      updateState () {
        if (this.ListTop - this.itemHeight <= -this.listHeight) {
          this.ListTop = 0
        } else {
          this.ListTop -= this.itemHeight
        }
      }
    },
    mounted () {
      this.animate()
    }
  }
</script>

<style>
  .vue-text-slider {
    border: 3px solid red;
    width: 100%;
    position: relative;
    /*overflow: hidden;*/
  }

  .vue-text-slider ul {
    list-style: none;
    padding: 0;
    margin: 0 auto;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  .vue-text-slider ul li {
    padding: 0;
    margin: 0;
  }
</style>
