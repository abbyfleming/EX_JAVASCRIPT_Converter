
var usertemp = document.getElementById("usertemp");
var button = document.getElementById("converter");
var clear = document.getElementById("clear");

function toCelsius(usertemp) {
	var c = (usertemp - 32)/1.8;
	return (c).toFixed(1);
}

function toFahrenheit(usertemp) {
	var f = (usertemp * 1.8) + 32;
	return Math.round(f);
}

//create a function called determineConverter
function determineConverter(clickEvent) {
    
	// set the variable temp to user input & parse the string into an integer
    var temp = parseInt(usertemp.value);

    //By using the HTML checked="checked", you no longer have an unselected radio button. You'll always have at least one checked.
  
/*	//if no radio buttons are selected, alert an error
	if (document.getElementById("tempF").checked == false && 
		document.getElementById("tempC").checked == false) {
			alert("ERROR! Please choose an option.")

	// if tempC radio button is checked, run the function toCelsius
	} else*/

	 if (document.getElementById("tempC").checked) {
		temp = toCelsius(temp);	
		document.getElementById("convertedtemp").innerHTML = temp;

	// if tempF radio button is checked, run the function toFahrenheit
	} else if (document.getElementById("tempF").checked) {
		temp = toFahrenheit(temp);	
		document.getElementById("convertedtemp").innerHTML = temp;
	}

	//console.log("event", clickEvent);
}

//Go! Button
button.addEventListener("click", determineConverter);

//Press Enter to Run
//The window object represents an open window in a browser.
window.addEventListener("keypress", enterKey);

function enterKey(e) {
	if(e.keyCode == 13) {
	determineConverter();
	console.log("you pressed enter");
	}
}

//Clear Button
clear.addEventListener("click", function(){
    document.getElementById("convertedtemp").innerHTML = " ";
});
