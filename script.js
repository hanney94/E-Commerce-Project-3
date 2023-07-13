

const cartList = document.getElementById("cartlist");
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
let cartFull = document.getElementById("cartlist");
let cartEmpty = document.getElementById("cart-empty");


const handleClickOutside = (e) => {
  if (e.target !== cartbtn && !cartList.contains(e.target)) {
    cartList.style.display = "none";
    window.removeEventListener("click", handleClickOutside);
    isCartOpen = false;
  }
};

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


const updateCart = () => {
	if (isCartEmpty == false){
		cartFull.style.display="block";
		cartBadge.style.display = "none";
	} else {
		cartFull.style.display ="none";
		cartEmpty.style.display = "flex";
	}
};

showBadge ();


let count = 0;
plusBtn.addEventListener("click", () => {
	count++;
	counterRender.innerHTML= count.toString();
	cartNumRender.innerHTML = count.toString ();
	cartTotalRender.innerHTML = '$${(125 * count).toFixed(2)}';
});

minusBtn.addEventListener("click", () => {
	if (count === 0) return;
	count--;
	counterRender.innerHTML = count.toString();
	cartNumRender.innerHTML = count.toString();
	cartTotalRender.innerHTML = '$${(125 * count).toFixed(2)}';
});


