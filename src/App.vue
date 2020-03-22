<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link v-if="$store.getters['userModule/isLoggedIn']" to="/profile">Profile</router-link>
      <router-link v-if="$store.getters['userModule/isLoggedIn']" to="/createList">Liste erstellen</router-link>
      <router-link v-if="$store.getters['userModule/isLoggedIn']" to="/buyList">Liste kaufen</router-link>
      <router-link v-if="$store.getters['userModule/isLoggedIn']" to="/logout">Logout</router-link>
      <router-link v-else to="/login">Login</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  mounted: function () {
    this.$store.dispatch("userModule/init");
    this.$store.dispatch("editShopingListModule/init");
  }
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;400&display=swap');
  #app {
    font-family: 'Raleway', Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #12CBC4;
    //background: #1289A7;
    
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
  }

  #nav {
    background: #12CBC4;
    overflow: hidden;
    flex-shrink: 0;

    display: flex;

    a {
      text-decoration: none;
      padding: 1em;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #12CBC4;
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