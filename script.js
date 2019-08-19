const css = document.querySelector("h3");

const colorLeft = document.getElementById("color-left"); 
const colorPickerLeft = document.getElementById("color-picker-left");

const colorRight = document.getElementById("color-right");
const colorPickerRight = document.getElementById("color-picker-right");

const body = document.getElementById("gradient");

function pickColor(){
	colorPickerRight.style.backgroundColor = colorRight.value;
	colorPickerLeft.style.backgroundColor = colorLeft.value;
	body.style.background = 
	"linear-gradient(to left,"
	+ colorRight.value
	+ "," 
	+ colorLeft.value
	+ ")" ;

	css.textContent = body.style.background + ";" ;
}

colorLeft.addEventListener("input", pickColor);
colorRight.addEventListener("input", pickColor);
