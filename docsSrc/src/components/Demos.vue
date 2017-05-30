<template>
  <div>
    <vue-slider :class="some"></vue-slider>
  </div>
</template>

<script>
  export default {
    name: 'demos',
    data () {
      return {
        content: {

        }
      }
    }
  }
</script>

<style>
  .some {
    border: 1px solid red;
  }
</style>
