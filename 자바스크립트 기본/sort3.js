window.onload = function(){ 
	var value = [101, 26, 7, 1234];
	value.sort(function(one, two){
		return -(one - two);
	});
	js.log(value);
}
