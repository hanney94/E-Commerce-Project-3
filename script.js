

const cartList = document.getElementById("cartlist");
const cartbtn = document.getElementById("cartbutton");
const preview = document.getElementById("pre");
const lbpreview = document.getElementById("lbpre");
const thumbnails = document.getElementsByClassName("thumbnails");
const lbthumbnails = document.getElementsByClassName("lb-thumbnails");
const closeLbBtn = document.getElementById("clb");
const lb = document.getElementById("lb");
const lbOpenBtn = document.getElementById("lb-open-btn");


// counter

const counterRender = document.getElementById("num-disp");
const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");



//cart

const cartNumRender = document.getElementById("cartnum");
const cartTotalRender = document.getElementById("carttotal");
const addToCartBtn = document.getElementById("addcart");

let cartBadge = document.getElementById("badge");
let isCartEmpty = true;
let cartToggle = false;
let isCartOpen = false;
let cartFull = document.getElementById("cart-full");
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

const hideCart = () => {
  cartToggle = false;
  cartList.style.display = "none";
};

const toggleCart = () => {
  if (isCartOpen) {
    hideCart();
  } else {
    showCart();
  }
  isCartOpen = !isCartOpen;
};

cartbtn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleCart();
});

addToCartBtn.addEventListener("click", (e) => {
  if (count == 0) {
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
  //
  count = 0;
  counterRender.innerHTML = count.toString();
  showBadge();
  updateCart();
  hideCart();
};

const showBadge = () => {
  if (isCartEmpty == false) {
    cartBadge.style.display = "block";
    cartBadge.innerHTML = count.toString();
  } else {
    cartBadge.style.display = "none";
  }
};

const updateCart = () => {
  if (isCartEmpty == false) {
    cartFull.style.display = "block";
    cartEmpty.style.display = "none";
  } else {
    cartFull.style.display = "none";
    cartEmpty.style.display = "flex";
  }
};

showBadge();


let count = 0;
plusBtn.addEventListener("click", () => {
	count++;
	counterRender.innerHTML= count.toString();
	cartNumRender.innerHTML = count.toString();

	const totalCost = (125 * count).toFixed(2);
	cartTotalRender.innerHTML = '$' + totalCost;
});

minusBtn.addEventListener("click", () => {
	if (count === 0) return;
	count--;
	counterRender.innerHTML = count.toString();
	cartNumRender.innerHTML = count.toString();
	
	const totalCost = (125 * count).toFixed(2);
	cartTotalRender.innerHTML = '$' + totalCost;
});




   var mainImg = document.getElementById('mainImg');

        document.getElementById('thumb1').onclick = function() {
                mainImg.src = './Images/image-product-1.jpg';
                
        };
        document.getElementById('thumb2').onclick = function() {
                mainImg.src = './Images/image-product-2.jpg';
            
        };
        document.getElementById('thumb3').onclick = function() {
                mainImg.src = './Images/image-product-3.jpg';
               
        };
        document.getElementById('thumb4').onclick = function() {
                mainImg.src = './Images/image-product-4.jpg';
              
        };








//slideshow

var slider_img = document.querySelector('.lb-product');
var images = ['./Images/image-product-1.jpg', './Images/image-product-2.jpg','./Images/image-product-3.jpg','./Images/image-product-4.jpg'];
var i =0;

function mobprev() {
  if(i <= 0) i = images.length;
  i--;
  return setImg()

}

function mobnext() {
  if(i >= images.length - 1) i= -1;
  i++;
  return setImg()
  
}

function setImg() {
  return slider_img.setAttribute('src', 'images/' + images[i]);
}


//lightbox

function openModal() {
  document.getElementById("myModal").style.display = "block";
}


function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndexes = 1;
showSlides(slideIndexes);


function plusSlides(n) {
  showSlides(slideIndexes += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndexes = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndexes = 1}
  if (n < 1) {slideIndexes = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  
  }
  slides[slideIndexes-1].style.display = "block";
  
}


//nav sidebar


function openDropdown() {
  document.querySelector(".dropdown").style.display = "block";
}

function closeDropdown() {
 document.querySelector(".dropdown").style.display = "none";
}








