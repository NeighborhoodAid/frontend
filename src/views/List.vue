<template>
    <div class="list">
        <h1>Einkaufliste erstellen</h1>

        <div id="myDIV" class="header">
            <input type="text" id="number" placeholder="3">
            <input type="text" id="supply" placeholder="Bananen">
            <span onclick="newElement()" class="addBtn">Hinzuf&uuml;gen</span>
        </div>

        <ul id="myUL">
            <li>4 &Auml;pfel</li>
            <li class="checked">2 Packungen Nudeln</li>
            <li>Toilettenpapier</li>
            <li>1 Packung Roggenbrot</li>
            <li>3 Milch</li>
            <li>&Uuml;berraschungseier</li>
        </ul>
        <div class="publish">
            <button type="submit">Liste ver&ouml;ffentlichen</button>
        </div>
        
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import router from '../router'
export default Vue.extend({
    // Create a "close" button and append it to each list item
    // Click on a close button to hide the current list item
    // Add a "checked" symbol when clicking on a list item
    // Create a new list item when clicking on the "Add" button
})
</script>

<style lang="scss" scoped>

    .publish {
      padding: 30px 40px;
      text-align: center;
    }

    button {
      background-color: #80e6e2;
      color: #555;
      font-size: 16px;
      padding: 14px 20px;
      margin: 8px 0;
      border: none;
      cursor: pointer;
      width: 30%;
      float: right;
    }

    button:hover {
      opacity: 0.8;
    }

    .list {
        padding: 0 20% 0 20%;
    }
    /* Include the padding and border in an element's total width and height */
    * {
      box-sizing: border-box;
    }

    /* Remove margins and padding from the list */
    ul {
      margin: 0;
      padding: 0;
      color: #555;
    }

    /* Style the list items */
    ul li {
      cursor: pointer;
      position: relative;
      padding: 12px 8px 12px 40px;
      list-style-type: none;
      background: #eee;
      font-size: 18px;
      transition: 0.2s;
  
      /* make the list items unselectable */
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    /* Set all odd list items to a different color (zebra-stripes) */
        ul li:nth-child(odd) {
            background: #f9f9f9;
        }

        /* Darker background-color on hover */
    ul li:hover {
        background: #ddd;
    }

    /* When clicked on, add a background color and strike out text */
    ul li.checked {
      background: #888;
      color: #fff;
      text-decoration: line-through;
    }

    /* Add a "checked" mark when clicked on */
    ul li.checked::before {
      content: '';
      position: absolute;
      border-color: #fff;
      border-style: solid;
      border-width: 0 2px 2px 0;
      top: 10px;
      left: 16px;
      transform: rotate(45deg);
      height: 15px;
      width: 7px;
    }

    /* Style the close button */
    .close {
      position: absolute;
      right: 0;
      top: 0;
      padding: 12px 16px 12px 16px;
    }

    .close:hover {
      background-color: #f44336;
      color: white;
    }

    /* Style the header */
    .header {
      background-color: #80e6e2;
      padding: 30px 40px;
      color: white;
      text-align: center;
    }

    /* Clear floats after the header */
    .header:after {
      content: "";
      display: table;
      clear: both;
    }

    /* Style the input */
    input {
      margin: 0;
      border: none;
      border-radius: 0;
      padding: 10px;
      float: left;
      font-size: 16px;
    }

    /*number of things to buy*/
    #number {
      width: 10%
    }

    /*thing to buy*/
    #supply {
      width: 65%
    }

    /* Style the "Add" button */
    .addBtn {
        padding: 10px;
        padding-top: 11px;
        width: 25%;
        background: #d9d9d9;
        color: #555;
        float: left;
        text-align: center;
        font-size: 16px;
        cursor: pointer;
        transition: 0.3s;
        border-radius: 0px;
    }

    .addBtn:hover {
      background-color: #bbb;
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