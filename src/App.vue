<template>
  <div id="app">
    <div id="nav" :class="menuOpen ? 'nav responsive' : 'nav'">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link v-if="$store.getters['userModule/isLoggedIn']" to="/profile">Profile</router-link>
      <router-link v-if="$store.getters['userModule/isLoggedIn']" to="/createList">Liste erstellen</router-link>
      <router-link v-if="$store.getters['userModule/isLoggedIn']" to="/buyList">Liste kaufen</router-link>
      <router-link v-if="$store.getters['userModule/isLoggedIn']" to="/logout">Logout</router-link>
      <router-link v-else to="/login">Login</router-link>
      <a href="javascript:void(0);" class="icon" v-on:click="mobileMenu()">
          <i class="fa fa-bars"></i>
      </a>
    </div>
    <div id="placeholderBehindNavbar"></div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  mounted: function () {
    this.$store.dispatch("userModule/init");
    this.$store.dispatch("editShopingListModule/init");
  },
  data: function() {
    return {
      menuOpen: false  
    }
  },
  methods: {
     mobileMenu: function () {
          if (this.menuOpen == false) {
            this.menuOpen = true;
          } else {
            this.menuOpen = false;
          }
     }
  }
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;400&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
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

  #placeholderBehindNavbar {
      height: 30px;
  }
  .nav {
    background: #12CBC4;
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;

    a {
      text-decoration: none;
      padding: 1em;
      color: #2c3e50;
      float: left;
      display: block;
      text-align:center;
      z-index: 1;

      &.router-link-exact-active {
        color: #12CBC4;
        background: #2c3e50;
      }
    }
  }

  .nav .icon {
      display: none;
      float: right;
  }

  /*resizing navbar in smaller PC window*/
    @media screen and (max-width: 600px) {
        .nav a:not(:first-child) {
            display: none;
        }

        .nav a.icon {
            float: right;
            display: block;
        }
    }

    @media screen and (max-width: 600px) {
        .nav.responsive {
            position: relative;
            z-index: 1;
        }

            .nav.responsive .icon {
                position: absolute;
                right: 0;
                top: 0;
            }

            .nav.responsive a {
                float: none;
                display: block;
                text-align: left;
            }
    }
</style>

<style lang="scss">
  body, html {
    margin: 0;
    height: 100%;
  }
</style>