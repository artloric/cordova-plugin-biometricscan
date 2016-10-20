function successMessage(xinput) {
	alert("We have achieved: " + xinput);
	console.log("Message touched the Java capstone and has returned possibly, unscathed: " + xinput);
}

window.bioscan = function(str, callback) {
	
	cordova.exec(callback,
		function(error) {
			callback;
			console.log("I am a companion negation confirmer, hi");
		},
             //Java class with method in-contained
             "Bioservice",
             //Method of Java class to be called
             "scan",
             //Bunch of arguments to be passed to the Native side
             [str]);
}

//Don't know why we need this string to be honest, is it what Native is looking for?
//With the callback string we're just customising our success and error callbacks essentially
var win = window;
win.onload = win.bioscan("Hear thee", successMessage("A grand success"));
