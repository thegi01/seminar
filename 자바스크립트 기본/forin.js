window.onload = function(){ 
	var sports = {soccer :11, basketball:5};
	for(var pty in sports){
		var value = sports[pty];
		js.log('name: ' + pty + ', value: ' + value);
	}
}
