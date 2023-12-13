const FirstDiv = document.getElementById("firstDiv"),
	FirstButton = document.getElementById("firstButton"),
	c = console.log,
	SecondButton = document.getElementById("secondButton");

FirstButton.addEventListener("click", () => {
	FirstDiv.style.background = "white";
	FirstDiv.style.boxShadow =
		"#d8d8e6 0px 4px 16px, #d8d8e6 0px 8px 24px,#ececf2 0px 16px 56px";
	FirstButton.disabled = true;
	SecondButton.disabled = false;
	FirstButton.style.border = "solid red 3px";
	SecondButton.style.border = "none";
});

SecondButton.addEventListener("click", () => {
	FirstDiv.style.background = "grey";
	FirstDiv.style.boxShadow = "none";
	FirstButton.disabled = false;
	SecondButton.disabled = true;
	SecondButton.style.border = "solid blue 3px";
	FirstButton.style.border = "none";
});
