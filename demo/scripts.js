// This script is used to animate the progress bar

var increment = 0; //set a value of zero for the progress bar

 window.setInterval( // loop adding 1
 function () {
	increment = increment + Math.round(Math.random()) * 5;
	document.getElementById("determinate").value = increment;
	document.getElementById("determinate-value").textContent = increment;
	document.getElementById("progress3").value = increment * 1.2;
	document.getElementById("progress4").value = increment * 0.85;
	
	if (increment >= 100) {
		increment = 0;
	}
 }, 500);