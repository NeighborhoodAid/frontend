<template>
  <div id="app">
    <div class="nav">
      <router-link to="/"><font-awesome-icon icon="home" /> Startseite</router-link>
      <div class="nav" v-if="$store.getters['userModule/isLoggedIn']">
        <router-link to="/profile"><font-awesome-icon icon="user-edit" /> Profile</router-link>
        <router-link to="/createList"><font-awesome-icon icon="cart-plus" /> Liste erstellen</router-link>
        <router-link to="/buyList"><font-awesome-icon icon="check" /> Liste erledigen</router-link>
        <router-link to="/logout"><font-awesome-icon icon="user" /> Logout</router-link>
      </div>
      <div class="nav" v-else>
        <router-link to="/login"><font-awesome-icon icon="user" /> Login</router-link>
        <router-link to="/register"><font-awesome-icon icon="user-plus" /> Registrieren</router-link>
      </div>
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

  .nav {
    background: #12CBC4;
    overflow: hidden;
    flex-shrink: 0;

    display: flex;

    a {
      text-decoration: none;
      padding: 1em;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #fff;
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
