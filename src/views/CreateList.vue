<template>
    <div class="list">
        <h1>Einkaufsliste erstellen</h1>

        <form id="myDIV" class="header" @submit.prevent="addProduct()">
            <input type="text" id="count" placeholder="3" v-model="quantity">
            <input type="text" id="name" required placeholder="Artikelname" v-model="supply">
            <button id="addBtn1" type="submit" class="addBtn">Hinzuf&uuml;gen</button>
            <!--second smaller button for mobile view-->
            <button id="addBtn2" type="submit" class="addBtn"><b>+</b></button><br />
            <div class="checkComment">
                <input type="checkbox" id="addcomment" name="addcomment" v-model="seen">
                <label for="addcomment"> Notiz hinzuf&uuml;gen</label><br>
            </div>
            <input type="text" id="comment" v-if="seen" v-model="comment" placeholder="Erweiterte Beschreibung, z.B.: Falls da, bitte glutenfreien Nudeln von Seitz.">
        </form>

        <ul id="list">
            <li v-for="(product, index) in $store.state.editShopingListModule.items" :key="index">
                <div class="product"></div>{{product.quantity}} {{product.name}}
                <span class="close" v-on:click="deleteItem(index)">&times;</span>
            </li>
        </ul>
        <div class="publish">
            <button v-on:click="$store.dispatch('editShopingListModule/saveList')">Liste ver&ouml;ffentlichen</button>
        </div>
        
    </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
    //el: '#list', // todo cannot find element list! el kan only be used during instance creation?
    data: function () {
        return {
            seen: false,
            supply: "",
            quantity: 1,
            comment: ""
        }
    },
    methods: {
        /*Add products from form to product list*/
        addProduct: function () {
            let name = this.supply;
            if (this.seen) {
                name = name + " (" + this.comment + ")";
            } 
            this.$store.commit("editShopingListModule/addItem", {
                quantity: this.quantity,
                name: name
            })
            this.supply = "";
            this.quantity = 1;
            this.comment = "";
            this.seen = false;
            return
        },
        deleteItem: function (index) {
            this.$store.commit("editShopingListModule/removeItem", index)
        }
    }
})  
</script>


<style lang="scss" scoped>

    /*Things concerning the checkbox and Comment-Field*/
    .checkComment {
        text-align: left;
        margin: 30px 0 5px 0px;
    }
    
    /*place checkbox*/
    #addcomment {
        margin: 4px 7px;
    }

    /*Place label fr checkbox */
    label {
        margin: 5px;
    }

    .publish {
        padding: 30px 40px;
        text-align: center;
        width: 100%;
    }

    button {
        background-color: #80e6e2;
        color: #555;
        font-size: 16px;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 100%;
    }

    button:hover {
      opacity: 0.8;
    }

    .list {
        padding: 0 20% 0 20%;
    }

    /*Make list fill the whole screen on a phone*/
    @media screen and (max-width: 600px) {
        .list {
            padding: 0 5% 0 5%;
        }

        button {

        }
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
    #count {
        width: 10%;
    }

    /*thing to buy*/
    #name {
        width: 65%
    }

    #comment {
        width: 100%;
        height: 2em;
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
        margin: 0px;
    }

    #addBtn1 {
        min-width: 110px;
    }

    #addBtn2 {
        min-width: 40px;
        display: none;
    }

    /*use smaller addBtn2 button in mobile view*/
    @media screen and (max-width: 870px) {
        #addBtn1 {
            display: none;
        }
        #addBtn2 {
            display: block;
            padding: 10px 5px 10px 5px;
            width: 10%;
        }
        #count {
            width: 20%;
        }
        #name {
            width: 60%;
        }
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