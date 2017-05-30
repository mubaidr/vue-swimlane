<template>
  <div :class="class">
    <vue-slider-item v-for="slide in slides"></vue-slider-item>
  </div>
</template>

<script>
  import vsi from './vue-slider-item'

  export default {
    name: 'vue-slider',
    props: ['class', 'slides'],
    components: {
      vsi
    }
  }
</script>

<style>

</style>
