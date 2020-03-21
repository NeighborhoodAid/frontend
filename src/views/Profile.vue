<template>
    <div class="profile-wrapper">
        <div class="profile">
            <img v-bind:src="userimage" class="profile-picture">
            <h1>{{username}} <img class="icon" src="../assets/pen.svg"></h1>
            <div class="profile-menu">
                <a href="" class="menu-item"><img class="icon" src="../assets/pen.svg"> Passwort ändern</a>
                <a href="" class="menu-item"><img class="icon" src="../assets/pen.svg"> Banutzername ändern</a>
                <a href="" class="menu-item"><img class="icon" src="../assets/pen.svg"> E-Mail ändern</a>
                <a href="" class="menu-item"><img class="icon" src="../assets/pen.svg"> Handynummer ändern</a>
                <a href="" class="menu-item"><img class="icon" src="../assets/pen.svg"> Konto löschen</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        data() {
            return {
                username: 'Max Mustermann',
                userimage: require('../assets/triangle.png')
            };
        }
    }
</script>

<style lang="scss" scoped>
    .profile-wrapper {
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .profile {
        // margin: 1em;

        display: flex;
        flex-direction: column;
        align-items: center;
        width: 500px;
        max-width: 100%;

        .profile-menu {
            display: flex;
            flex-direction: column;
            width: 100%;

            .menu-item {
                padding: 1em;
                margin:0 0 1em 0;
                text-decoration: none;
                background: #80E6E2;
                color: #2c3e50;
                box-shadow: 0px 2px 4px #2c3e50;
                text-align: left;
                border-radius: .25em;
            }
        }

        .profile-picture {
            border-radius: 100%;
            height: 250px;
            border: 10px solid #2c3e50;
        }

        .icon {
            height: 1em;
            color: #f00;
        }
    }
</style>