<template>
    <div class="profile-wrapper">
        <div class="profile">
            <img v-bind:src="userimage" class="profile-picture">
            <h1>{{username}} ✏️</h1>
            <div class="profile-menu">
                <a href="" class="menu-item">🔑 Passwort ändern <span class="align-right">✏️</span></a>
                <a href="" class="menu-item">📧 E-Mail ändern <span class="align-right">✏️</span></a>
                <a href="" class="menu-item">📞 Handynummer ändern <span class="align-right">✏️</span></a>
                <a href="" class="menu-item">👤 Konto löschen <span class="align-right">🗑️</span></a>
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

    .align-right {
        float: right;
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
                background: #2c3e50;
                color: #80E6E2;
                text-align: left;
                // border-radius: .25em;
                transition: .25s;

                &:hover {
                    box-shadow: 1px 1px 4px #2c3e50;
                }
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