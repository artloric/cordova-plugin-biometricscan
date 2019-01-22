/*
With these plugins, we're defining a JS interface, to call a cordova.exec function, which will travel over the webView brige,
to the native side.
There it will look for our custom class.
We overwrite one of the exec functions inherited by the extension of a cordova plugin class and pass it our own class and method actions.
*/
window.bioscan = function(str) {

	cordova.exec(function(message) {
		console.log('String back from Java class:' + message);

		const addToLog = [];
		addToLog.push(message);
	},

		function(error) {
			callback(message);
			console.log("I am a companion negation confirmer. Exec method did not complete");
		},
             //Java class with method in-contained
             "Bioservice",
             //Method of Java class to be called
             "scan",
             //Bunch of arguments to be passed to the Native side
             [str]);
}

var win = window;
win.onload = win.bioscan("Biometric");
