const MinusClickDiv = document.getElementById("minusClickDiv"),
	PlusClickDiv = document.getElementById("plusClickDiv"),
	DigitDiv = document.getElementById("digitDiv"),
	c = console.log,
	y = "Hello World!";
let z = 0;

MinusClickDiv.addEventListener("click", () => {
	if (DigitDiv.innerHTML == 0) {
		return;
	}
	z--;
	DigitDiv.innerHTML = z;
});

PlusClickDiv.addEventListener("click", () => {
	if (DigitDiv.innerHTML >= 0) {
		z++;
		DigitDiv.innerHTML = z;
	}
	return;
});
