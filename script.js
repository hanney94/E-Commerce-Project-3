let cartEmpty = document.querySelector(".cart-empty");
let cartShow = true;


function showEmpty  (){
	if(cartShow){
	cartEmpty.style.display= "none";
	cartShow = false;
} else  {
    cartEmpty.style.display= "block";
	cartShow = true;
}
}