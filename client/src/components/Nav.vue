<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
      </a>

      <a
        :class="{ 'is-active-menu':isOpen }"
        @click="isOpen = !isOpen"
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div :class="{ 'is-active-menu':isOpen }" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item" active-class="is-enabled" exact>Home</router-link>
        <router-link to="/about" class="navbar-item" active-class="is-enabled">About</router-link>
        <router-link to="Game" class="navbar-item" active-class="is-enabled">Game</router-link>
        <!--
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">More</a>

          <div class="navbar-dropdown">
            <a class="navbar-item">About</a>
            <a class="navbar-item">Jobs</a>
            <a class="navbar-item">Contact</a>
            <hr class="navbar-divider" />
            <a class="navbar-item">Report an issue</a>
          </div>
        </div>-->
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <Login :CurrentUser="CurrentUser"></Login>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Login from "./LoginComponent";
import * as Users from '../models/Users'

export default {
  props: {
    CurrentUser
  },
  data: () => ({
    isOpen: false,
    Users: Users
  }),
  components: {
    Login
  }
};
</script>

<style>
a.is-enabled {
  font-weight: bold;
  color: blueviolet;
}
</style>