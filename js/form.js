function updatePrice(event) {
	const prices = [
		20,
		40,
		60,
	];
	const images = [
		"greenhill2.jpg",
		"merianpalace1.jpg",
		"parkhotel1.jpg",
	];
	const index = Number(event.target.value)
	document.querySelector("#price").value = prices[index] + "лв.";
	document.querySelector("#hotel-image").src = "Images/hotelsPhotos/" + images[index];
}

function calculate(event) {
	event.preventDefault();
	const nights = Number(document.querySelector("#nights").value);
	const price = Number(document.querySelector("#price").value.slice(0, -3));
	if (isNaN(price))
		return;
	document.querySelector("#result").innerText = (nights * price).toFixed(2) + "лв.";
}