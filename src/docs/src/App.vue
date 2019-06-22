<template>
  <div>
    <section class="hero is-medium is-info is-bold">
      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="has-text-centered">
          <h1 class="title is-1">
            Vue-Swimlane
          </h1>
          <h2 class="subtitle is-3">
            Display a list of words as an animated text swim lane.
          </h2>
          <a
            href="https://github.com/mubaidr/vue-swimlane"
            class="button is-dark"
            title="Github Repository"
            target="_blank"
          >
            <span>Github</span>
          </a>
          &nbsp;
          <a
            href="https://github.com/mubaidr/vue-swimlane/tree/master/dist"
            class="button is-dark"
            title="Download"
            target="_blank"
          >
            <span>Download</span>
          </a>
        </div>
      </div>
    </section>

    <div id="app" class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
