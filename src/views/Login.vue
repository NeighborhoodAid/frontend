<template>
    <div class="login">
        <h1>Login</h1>
        <form id="login-form" @submit.prevent="onLogin">
            
            <div class="container">
                <label for="email"><b>E-Mail Adresse</b></label>
                <input v-model="email" type="text" placeholder="max.mustermann@gmx.de" name="email" required>

                <label for="psw"><b>Passwort</b></label>
                <input v-model="password" type="password" placeholder="Passwort" name="psw" required>

                <button type="submit">Anmelden</button>
                <label>
                    <input v-model="stayLoggedIn" type="checkbox" checked="checked" name="remember"> Angemeldet bleiben
                </label>
            </div>

            <div class="container" style="background-color:#f1f1f1">
                <span class="psw"><a href="#">Passwort vergessen</a>?</span>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import router from '../router'
export default Vue.extend({
  data: function () {
    return {
    password: ""
  }},
  methods: {
    onLogin: async function (){
      await this.$store.dispatch("userModule/login", this.password)
      router.push("/");
    }
  },
  computed:{
    email: {
      get () { return this.$store.state.userModule.email },
      set (value) { this.$store.commit('userModule/setEmail', value) }
    },
    stayLoggedIn: {
      get () { return this.$store.state.userModule.stayLoggedIn },
      set (value) { this.$store.commit('userModule/setStayLoggedIn', value) }
    }
  }
})
</script>

<style lang="scss" scoped>

    .login {
        margin: 0 25% 0 25%;
        max-width: 50%;
    }

    form {border: 3px solid #f1f1f1;}

    input[type=text], input[type=password] {
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      box-sizing: border-box;
    }

    button {
      background-color: #12cbc4;
      color: white;
      padding: 14px 20px;
      margin: 8px 0;
      border: none;
      cursor: pointer;
      width: 100%;
    }

    button:hover {
      opacity: 0.8;
    }

    .container {
      background-color: #f1f1f1;
      padding: 16px;
      border: 3px solid #f1f1f1;
    }

    span.psw {
      float: right;
      margin-bottom: 3px;
    }

    /* Change styles for span and cancel button on extra small screens */
    @media screen and (max-width: 300px) {
      span.psw {
         display: block;
         float: none;
      }
    }

    .menu-entry {
        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-bottom-color: gray;
        padding-top: 8px;
        padding-bottom: 8px;
        height: 120px;
        width: 100vw;
        .icon > img

    {
        text-align: left;
        height: 2em;
        padding-left: 4px;
        padding-right: 4px;
    }

    .value {
        text-align: left;
        display: inline;
    }

    .button > img {
        text-align: right;
        padding-left: 4px;
        padding-right: 4px;
        width: 24px;
        height: 24px;
    }
    }
</style>