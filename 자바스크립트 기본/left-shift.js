window.onload = function(){ 
	//value = 3의 비트 모습
	// 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1
	var value = 3;

	/* 
	value << 1 이동 후 비트 모습
	(4+2)가 되므로 이동 후의 값은 6
	// 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0
	*/
	result = value < 1;
	js.log(result);

}
