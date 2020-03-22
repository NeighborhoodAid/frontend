<template>
  <div id="app">
    <div class="nav">
      <router-link to="/"><font-awesome-icon icon="home" fixed-width /> Startseite</router-link>
      <template v-if="$store.getters['userModule/isLoggedIn']">
        <router-link to="/profile"><font-awesome-icon icon="user-edit" fixed-width /> Profil</router-link>
        <router-link to="/createList"><font-awesome-icon icon="cart-plus" fixed-width /> Liste erstellen</router-link>
        <router-link to="/buyList"><font-awesome-icon icon="check" fixed-width /> Liste erledigen</router-link>
        <router-link style="margin-left: auto;" to="/logout"><font-awesome-icon icon="user" fixed-width /> Logout</router-link>
      </template>
      <template v-else>
        <router-link style="margin-left: auto; float: right;" to="/login"><font-awesome-icon icon="user" fixed-width /> Login</router-link>
        <router-link style="float: right;" to="/register"><font-awesome-icon icon="user-plus" fixed-width /> Registrieren</router-link>
      </template>
    </div>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <div id="footer">
      &copy; NeighborhoodAid Team 2020 - Alle Rechte vorbehalten.
      <span class="badges">
        <img src="./assets/wirvsvirus_white.svg"/>
      </span>
    </div>
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
      transition: .25s;

      &:hover {
        background: #80e6e2;
      }

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

  #footer {
    background-color: #34495e;
    color: white;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    //padding: 1rem;
    text-align: left;
    padding-top: 10px;
    font-size: 16px;
    padding-left: 12px;

    .badges {
      margin: auto;
      padding-top: -10px;
      img {
        height: 32pt;
        margin-right: 3pt;
        margin-bottom: 10px;
        float: right;
      }
    }
  }
</style>
