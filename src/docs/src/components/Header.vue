<template>
  <div>
    <nav class="navbar is-dark is-fixed-top">
      <div class="navbar-brand">
        <div
          :class="{'is-active': isNavigationBarOpen}"
          class="navbar-burger burger"
          data-target="navbarExampleTransparentExample"
          @click="toggleNavBar">
          <span/>
          <span/>
          <span/>
        </div>
      </div>

      <div
        id="navbarExampleTransparentExample"
        :class="{'is-active': isNavigationBarOpen}"
        class="navbar-menu">
        <div class="navbar-start"/>
        <div class="navbar-end">
          <a
            href="https://github.com/mubaidr/vue-swimlane"
            class="navbar-item"
            title="Github Repository"
            target="_blank">
            <span>Github</span>
          </a>
          <a
            href="https://raw.githubusercontent.com/mubaidr/vue-swimlane/master/dist/"
            class="navbar-item"
            title="Download"
            target="_blank">
            <span>Download</span>
          </a>
        </div>
      </div>
    </nav>

  </div>
</template>

<script>
export default {
  name: 'HeaderView',
  data() {
    return {
      isNavigationBarOpen: false,
    }
  },

  methods: {
    toggleNavBar() {
      this.isNavigationBarOpen = !this.isNavigationBarOpen
    },
  },
}
</script>

<style>
.hero {
  margin-top: 75px;
}
</style>
