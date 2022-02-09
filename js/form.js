const prices = [
	[ 20, 15 ],
	[ 30, 25 ],
	[ 40, 35 ],
];
const roomTaxes = [ 25, 50 ];

function updatePrice() {
	const images = [
		"greenhill2.jpg",
		"merianpalace1.jpg",
		"parkhotel1.jpg",
	];

	const hotelIndex = Number(document.querySelector("#hotel").value);
	const price = prices[hotelIndex];
	document.querySelector("#price").value = `За Възрастни: ${price[0]}лв. За Деца: ${price[1]}лв.`;
	document.querySelector("#hotel-image").src = "Images/hotelsPhotos/" + images[hotelIndex];
}

function toggleCardForm(visible) {
	const form = document.querySelector("#card");
	form.style.display = visible ? "block" : "none";
}

function validate(number, text) {
	const invalid = isNaN(number) || number <= 0;
	if (invalid)
		alert(`Моля, въведете валиден брой ${text}!`);
	return invalid;
}

function calculate(event) {
	event.preventDefault();
	const inputs = [
		document.querySelector("#firstName"),
		document.querySelector("#mobileNum"),
		document.querySelector("#email"),
		document.querySelector("#price"),
		document.querySelector("#nights"),
		document.querySelector("#children"),
		document.querySelector("#adults"),
	];

	if (inputs.some(x => !x.value))
		return alert("Моля, попълнете всички полета!");

	const hotelIndex = Number(document.querySelector("#hotel").value); 
	const roomIndex = Number(document.querySelector("#room").value); 
	const price = Number(inputs[3].value.slice(0, -3));
	const nights = Number(inputs[4].value);
	const children = Number(inputs[5].value);
	const adults = Number(inputs[6].value);

	if (validate(nights, "нощувки"))
		return;

	if (validate(children, "деца"))
		return;

	if (validate(adults, "възрастни"))
		return;

	const adultsPrice = adults * prices[hotelIndex][0];
	const childrenPrice = children * prices[hotelIndex][1];
	const roomTax = roomTaxes[roomIndex];
	const finalPrice = nights * (roomTax + adultsPrice + childrenPrice);
	document.querySelector("#result").innerText = finalPrice.toFixed(2) + "лв.";
	[ ...document.querySelectorAll(".payment-button") ].forEach(x => x.style.display = "block");
}

function payCash() {
	alert("Резервацията е успешна!");
	location.href = "index.html";
}