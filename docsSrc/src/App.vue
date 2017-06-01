<template>
  <div id="app">
    <md-whiteframe md-tag="md-toolbar" md-elevation="3">
      <div class="md-toolbar-container custom">
        <md-button @click.native="$refs.leftSidenav.toggle()" class="btn-sidebar">
          <md-tooltip md-direction="top">Menu</md-tooltip>
          <md-icon>menu</md-icon>
        </md-button>
        <h1 class="md-title">VueJs Test Slider</h1>
        <span style="flex: 1;">
        </span>
        <a href="https://mubaidr.github.io">https://mubaidr.github.io</a>
      </div>
    </md-whiteframe>
    <md-sidenav class="main-sidebar md-left md-fixed" md-swipeable ref="leftSidenav" id="leftSidenav">
      <md-whiteframe md-tag="md-toolbar" md-elevation="0">
        <div class="md-toolbar-container custom"></div>
        <md-list class="sidebar-menu">
          <md-list-item @click.native="$router.push('home')">
            <md-icon class="md-accent">home</md-icon>
            <span>Home</span>
            <md-ink-ripple />
          </md-list-item>
          <md-list-item @click.native="$router.push('demo')">
            <md-icon class="md-accent">settings</md-icon>
            <span>Demo</span>
            <md-ink-ripple />
          </md-list-item>
        </md-list>
      </md-whiteframe>
    </md-sidenav>
    <md-layout md-hide-small md-flex="15"></md-layout>
    <md-layout>
      <transition appear name="slide-up" mode="out-in">
        <router-view></router-view>
      </transition>
    </md-layout>
    <md-layout md-hide-small md-flex="15"></md-layout>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  .md-toolbar-container.custom {
    padding-top: 120px;
    padding-bottom: 20px;
  }
</style>
