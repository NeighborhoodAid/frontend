<template>
    <div class="profile">
        <h1>Username</h1>
        <div class="menu-entry">
            <span class="icon">
                <img src="../assets/key.svg">
            </span>
            <span class="title">Username</span>
            <span class="value">Lorem ipsum</span>
            <span class="button">
                <img src="../assets/pen.svg">
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>

<style lang="scss" scoped>

.menu-entry {
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: gray;
    padding-top: 8px;
    padding-bottom: 8px;
    height: 120px;
    width: 100vw;

    .icon > img {
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