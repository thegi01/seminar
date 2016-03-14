window.onload = function(){ 
	var obj = new Object();
	var convert = [];
	convert[0] = obj.toString();
	convert[1] = obj.toString.call(new Number());
	convert[2] = obj.toString.call(new Array());
	convert[3] = obj.toString.call(undefined);
	convert[4] = obj.toString.call(null);
	
	for(var i=0 ; i<5 ; i++) {
		console.log(convert[i]);
		js.log((convert[i]).replace('[object ','').replace(']',''));
	}
	
}
