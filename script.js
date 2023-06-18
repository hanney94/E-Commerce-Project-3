//* Your Cart is Empty DIV

let cartEmpty = document.querySelector(".cart-empty");

function showEmpty  (){
	cartEmpty.classList.toggle("hide");
}

//* Increase & Decrease Quantity 


   const plus = document.querySelector(".plus"),
   minus = document.querySelector(".minus"),
   num = document.querySelector(".num");

   let a = 0

   plus.addEventListener("click", ()=> {
   	a++;
   	num.innerText=a;
   	console.log(a);
   });

    minus.addEventListener("click", ()=> {
   	if (a > 0) {
   	a--;
   	num.innerText=a;
   	console.log(a);
   	}
   });
