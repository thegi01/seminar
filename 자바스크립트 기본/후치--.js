window.onload = function(){ 
	//문장을 수행한 후 감소하므로 (5+2) 연산 수행
	 var minus = 2;
	js.log(5 + minus--);

	//minus 값이 감소했으므로 1이 출력됨
	js.log(minus);

	//문장을 수행한 후 감소하므로 (2+1) 연산 수행
	var two = 2;
	var value = two++ +1;
	js.log(value);

	//문장을 수행한 후 value를 출력하므로 6이 출력됨
	value = 7;
	value--;
	js.log(value);

}
