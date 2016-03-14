window.onload = function(){ 

	js.log(1+2);
	
	//한쪽이라도 표현식 평가 결과가 문자열이면 연결
	js.log('123' + '500');
	js.log(123 + '500');

	var value = 123 + "";
	js.log(typeof value);

	//10+20 후 연결
	js.log(10+20+'ABC');
}
