const price = document.querySelector("#price");
const people = document.querySelector("#people");
const tip = document.querySelector("#tip");
const button = document.querySelector("button");
const costInfo = document.querySelector(".cost-info");
const error = document.querySelector(".error");
const cost = document.querySelector(".cost");

const check = () => {
	if (price.value == "" || people.value == "" || tip.value == 0) {
		error.textContent = "Podaj wszystkie warości!";
		costInfo.style.display='none'
	} else {
		const newPrice = parseFloat(price.value);
		const newPeople = parseFloat(people.value);
		const newTip = parseFloat(tip.value);

		const bill = (newPrice + (newPrice * newTip)) / newPeople;
		console.log(bill);
		costInfo.style.display = "block";
		cost.textContent = bill.toFixed(2) 
		
	}
};

button.addEventListener("click", check);
