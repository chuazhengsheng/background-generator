var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.createElement("button");
var buttonText = document.createTextNode("Select of random color");

randomButton.appendChild(buttonText);
document.body.appendChild(randomButton)

function setGradient(){
	body.style.background = 
	"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

function getColor(){
	var randomColor1 = getRandomColor();
	var randomColor2 = getRandomColor();
	body.style.background = "linear-gradient(to right," + randomColor1 + ", " + randomColor2 + ")";
	css.textContent = body.style.background + ";";
}

function getRandomColor(){
	var selectColor = Math.floor(Math.random()*Math.pow(256,3)).toString(16);
	while(selectColor.length < 6){
		selectColor ="0" +selectColor;
	}
	return "#"+ selectColor;

}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", getColor);