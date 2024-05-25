let buyf= false
const btn = document.getElementById('btn')
let basket = 0
const basketPrice=document.querySelector('.price')
const shopPrice = document.querySelector('.shop__price')
let price = shopPrice.innerHTML
price = parseInt(price)
console.log(document)
function buy(){
	if(buyf==false){
		btn.style.background="lightgreen"
		btn.textContent="В корзине"
		buyf = true
		basket= basket+price
		console.log(basket)
		basketPrice.innerHTML=basket
	}else{
		btn.style.background="silver"
		btn.textContent="Купить"
		buyf = false
		basket= basket-price	
		console.log(basket)
		basketPrice.innerHTML=basket
	}

}
