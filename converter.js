
/* -----  DEFINE VARIABLES ----- */

var usertemp = document.getElementById("usertemp");
var results = document.getElementById("convertedtemp");
var button = document.getElementById("converter");
var clear = document.getElementById("clear");


/* -----  CONVERT TEMPS ----- */

function toCelsius(usertemp) {
	var c = (usertemp - 32)/1.8;
	return (c).toFixed(1);
	//toFixed(1) to display the first decimal point
}

function toFahrenheit(usertemp) {
	var f = (usertemp * 1.8) + 32;
	return Math.round(f);
	//round(f) to round the degree up/down
}


/* -----  DETERMINE THE CONVERTER ----- */
/* 	
	Set temp to the user input value.
	If celsius/farenheit is checked, then convert the user input into celsius/farenheit. 
	Use an if statement to determine the color output.
*/
	

function determineConverter(clickEvent) {
    
	var temp = parseInt(usertemp.value);

	 if (document.getElementById("tempC").checked) {
		var temp = toCelsius(temp);	

			if (temp > 32) {
				results.innerHTML = "<span class='red'>" + temp + " celsius" + "</span>"; 
			} else if (temp < 0) {
				results.innerHTML = "<span class='blue'>" + temp + " celsius" +  "</span>"; 
			} else {
				results.innerHTML = temp + "celsius";
			}


	} else {
		var temp = toFahrenheit(temp);	

			if (temp > 90) {
				results.innerHTML = "<span class='red'>" + temp + " farenheit" + "</span>"; 
			} else if (temp < 32) {
				results.innerHTML = "<span class='blue'>" + temp + " farenheit" + "</span>"; 
			} else {
				results.innerHTML = temp + "farenheit";
			}
	
	}

	//console.log("event", clickEvent);
}

	
/* -----  BUTTONS  ----- */

//Go! Button
button.addEventListener("click", determineConverter);

//The window object represents an open window in a browser.
window.addEventListener("keypress", enterKey);

function enterKey(e) {
	if(e.keyCode == 13) {
	determineConverter();
	//console.log("you pressed enter");
	}
}

//Clear Button
clear.addEventListener("click", function(){
    document.getElementById("convertedtemp").innerHTML = " ";
});
