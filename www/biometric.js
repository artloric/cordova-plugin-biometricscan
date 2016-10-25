function successMessage() {
	alert("We have achieved: ");
	console.log("Message touched the Java capstone and has returned possibly, unscathed: ");
}

window.bioscan = function(str, callback) {
	
	cordova.exec(callback,
		function(error) {
			callback(message);
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
win.onload = win.bioscan("Hear thee", successMessage());
