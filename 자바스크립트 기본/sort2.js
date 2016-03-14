window.onload = function(){ 
	var value = [101, 26, 7, 1234];
	value.sort(function(one, two){
		return one - two;
	});
	//작은 값부터 표시되었으므로 정상으로 sort가 된 것이다.
	js.log(value);
}
