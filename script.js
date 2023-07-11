

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

const showCart = () => {
	cartToggle = true;
	cartList.style.display = "block";
	window.addEventListener("click", handleClickOutside);
}; 

const hideCart =() => {
	cartToggle = false;
	cartList.style.display = "none";
}

const toggleCart = () => {

	if (isCartOpen) {
		hideCart();
	}
	else {
		showCart();
	}
	isCartOpen = !isCartOpen;
};

cartbtn.addEventListener("click", (e) => {
	e.stopPropagation();
	toggleCart();
	});

addToCartBtn.addEventListener("click", (e) => {
	if (count == 0){
		return;
	}
	isCartEmpty = false;
	showBadge();
	updateCart();
	e.stopPropagation();
	showCart();
});

const removeItem = () => {
	isCartEmpty = true;

	count = 0;
	counterRender.innerHTML = count.toString();
	showBadge();
	updateCart();
	hideCart();
};

const showBadge = () => {
	if (isCartEmpty == false) {
		cartBadge.style.display="block";
		cartBadge.innerHTML = count.toString();
	}
	else {
		cartBadge.style.display = "none";
	}
};







}
