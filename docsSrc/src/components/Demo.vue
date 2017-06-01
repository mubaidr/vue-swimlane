<template>
  <div>
    <vue-text-slider :words="content"></vue-text-slider>
  </div>
</template>

<script>
  export default {
    name: 'demos',
    data () {
      return {
        content: ['Some', 'Text', 'Sample', 'For', 'Testing']
      }
    }
  }
</script>
