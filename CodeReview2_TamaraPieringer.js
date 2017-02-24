function rolldiceOne () {
	var die1 = document.getElementById("dice1");
	var status = document.getElementById("statusOne");
	var zufall = Math.floor(Math.random() * 6) + 1;
	die1.innerHTML = zufall;
	status.innerHTML = "You rolled " +zufall+ ".";
}



function background () {
	var Color1 = Math.floor((Math.random ())*255);
	var Color2 = Math.floor((Math.random ())*255);
	var Color3 = Math.floor((Math.random ())*255);

	document.body.style.background = "rgb("+Color1+", "+Color2+", "+Color3+")";

	rgb(1, 255, 23)
}

function wanttoplayOne () {
	var text = prompt("Enter your Name");
	document.getElementById("spielStart1").innerHTML = text;
	}

function wanttoplayTwo () {
	var text = prompt("Enter your Name");
	document.getElementById("spielStart2").innerHTML = text;
	}