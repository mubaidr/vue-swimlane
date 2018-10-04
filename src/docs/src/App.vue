<template>
  <div
    id="app"
    class="container">
    <Header-View/>
    <router-view/>
  </div>
</template>

<script>
import HeaderView from './components/Header.vue'

export default {
  components: {
    HeaderView,
  },
}
</script>

<style lang="sass">
</style>
