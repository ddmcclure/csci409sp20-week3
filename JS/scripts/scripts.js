function FizzBuzz() {
	
	var i;
	
	for (i = 0; i<=100; i++) {
		
		var string = "";
		
		if (i % 3 == 0) {
			string += "fizz";
		}
		
		if (i % 5 == 0) {
			string += "buzz";
		}
		
		if (string == "") {
			string = i;
		}
		
		console.log(string);
		
	}
}

function showDate() {
	var today = new Date();
	document.getElementById("currentDate").innerHTML = today;
}
		