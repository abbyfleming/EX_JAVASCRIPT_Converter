
var usertemp = document.getElementById("usertemp");
var button = document.getElementById("converter");

function toCelsius(usertemp) {
	var c = (usertemp - 32)/1.8;
	return (c).toFixed(1);
}

// test toCelsius
//console.log(toCelsius(100) + " celsius");

function toFahrenheit(usertemp) {
	var f = (usertemp * 1.8) + 32;
	return Math.round(f);
}

// test toFahrenheit
//console.log(toFahrenheit(100) + " fahrenheit");


//create a function called determineConverter
function determineConverter(clickEvent) {
    
	// set the variable temp to user input & parse the string into an integer
    var temp = parseInt(usertemp.value);

	//if no radio buttons are selected, alert an error
	if (document.getElementById("tempF").checked == false && 
		document.getElementById("tempC").checked == false) {
			alert("ERROR! Please choose an option.")

	// if tempC radio button is checked, run the function toCelsius
	} else if (document.getElementById("tempC").checked) {
		temp = toCelsius(temp);	
		console.log(temp);

	// if tempF radio button is checked, run the function toFahrenheit	
	} else if (document.getElementById("tempF").checked) {
		temp = toFahrenheit(temp);	
		console.log(temp);
	}

	//console.log("event", clickEvent);
}

button.addEventListener("click", determineConverter);

// var button = document.getElementById("converter");
// // button.addEventListener("click", determineConverter);

// document.getElementById("convertedtemp").innerHTML = "the button works!";

//button.addEventListener("click", determineConverter);