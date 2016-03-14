window.onload = function(){ 

	var obj = {};
	Object.defineProperty(obj, "book", {
		value : 123,
		enumerable : true
	});

	for(var name in obj) {
		js.log(name);
	}


}
