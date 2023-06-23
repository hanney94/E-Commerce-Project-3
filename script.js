"use strict"



const cartList = document.getElementById("cartfull");
const cartbtn = document.getElementById("cartbutton");


// counter

const counterRender = document.getElementById("num-disp");
const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");


const cartNumRender = document.getElementById("cartnum");
const cartTotalRender = document.getElementById("carttotal");
const addToCartBtn = document.getElementById("addcart");

let cartBadge = document.getElementById("badge");
let isCartEmpty = true;
let cartToggle = false;
let isCartOpen = false;
let cartFull = document.getElementById("cart-full");
let cartEmpty = document.getElementById("cart-empty");

