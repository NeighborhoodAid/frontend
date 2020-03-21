<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <span v-if="$store.getters['userModule/isLoggedIn']"><router-link to="/profile">Profile</router-link> | </span>
      <span v-if="$store.getters['userModule/isLoggedIn']"><router-link to="/list">Einkaufsliste</router-link> | </span>
      <span v-if="$store.getters['userModule/isLoggedIn']"><router-link to="/logout">Logout</router-link> </span>
      <span v-else> <router-link to="/login">Login</router-link></span>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  mounted: function () {
    this.$store.dispatch("userModule/init");
  }
})
</script>

<style lang="scss">

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #80E6E2;
    background: #1289A7;
    
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
  }

  #nav {
    background: #80E6E2;
    box-shadow: 0px 0px 4px #2c3e50;
    margin: 1em;
    border-radius: .25em;
    overflow: hidden;

    display: flex;

    a {
      text-decoration: none;
      padding: 1em;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #80E6E2;
        background: #2c3e50;
      }
    }
  }
</style>

<style lang="scss">
  body, html {
    margin: 0;
    height: 100%;
  }
</style>