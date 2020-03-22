<template>
    <div class="list">
        <h1>Einkaufliste erledigen</h1>

        <ul id="list">
            <li v-for="(product, index) in products" :class="checkedProducts.includes(product) ? 'checked' : '' " :key="index" v-on:click="checkItem(product)">
                {{product}}
            </li>
        </ul>
        <div class="publish">
            <button type="submit">Einkauf abgeschlossen!</button>
        </div>

    </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
    data: function () { //this must come from properties
        return {
            products: [
                '40 Packungen Toilettenpapier',
                '3 Bananen',
                '42g Zimt',
                'Schokolade (vegan)',
                'Instant-Kaffee',
                'Nudeln',
                'Soya-Milch'
            ],
            checkedProducts: []
        }
    },
    methods: {
        /*Check item from list*/
        checkItem: function (product) {
            if (this.checkedProducts.includes(product)) {
                console.log("true")
                let i = 0;
                while (i < this.checkedProducts.length) {
                    if (this.checkedProducts[i] == product) {
                        break;
                    }
                    i = i + 1;
                }
                this.checkedProducts.splice(i, 1)
            } else {
                this.checkedProducts.push(product);
            } 
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
    #count {
        width: 10%
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