window.onload = function(){ 

	var value = '1234512345';

	js.log(value.indexOf(3));
	js.log(value.lastIndexOf(3));

	js.log(value.indexOf(3, 1));
	js.log(value.lastIndexOf(3, 1));

	js.log(value.indexOf(3, 5));
	js.log(value.lastIndexOf(3, 5));

	js.log(value.indexOf(3, -2));
	js.log(value.lastIndexOf(3, -2));
}
