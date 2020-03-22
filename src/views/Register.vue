<template>
    <div class="register">
        <h1>Registrieren</h1>
        <form id="login-form" @submit.prevent="onRegister" v-if="!isSubmitted">

            <div class="container">
                <label for="email"><b>E-Mail-Adresse</b></label>
                <input type="text" placeholder="max.mustermann@gmx.de" id="email" required>

                <label for="phone"><b>Handynummer</b></label>
                <input type="text" placeholder="+49 1234 1234567" id="phone" required>

                <label for="password"><b>Passwort wählen</b></label>
                <input type="password" placeholder="correct horse battery staple" id="password" required>

                <input type="checkbox" id="acceptEulaPrivacy" required>
                <label for="acceptEulaPrivacy"> Ich akzeptiere die Nutzungsbedingungen und die Datenschutzerklärung</label>

                <button type="submit">Registrieren</button>
            </div>

            <div class="container" style="background-color:#f1f1f1">
                <span class="login"><a href="/login">Login</a></span>
            </div>

        </form>

        <div class="container" v-else>
            <p>Vielen Dank!</p>
            <p>Wir senden Ihnen eine E-Mail, mit der Sie Ihren Account aktivieren können.</p>
            <p>Anschließend können Sie sich <a href="/login">hier</a> anmelden.</p>
        </div>

    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    export default Vue.extend({
        data: function () {
            return {
                isSubmitted: false
            }},
        methods: {
            onRegister: function (){
                this.isSubmitted = true;
            }
        }
    })
</script>

<style lang="scss" scoped>
    .register {
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

    span.login {
        float: right;
        margin-bottom: 3px;
    }

    /* Change styles for span and cancel button on extra small screens */
    @media screen and (max-width: 300px) {
        span.login {
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
