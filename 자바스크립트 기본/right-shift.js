window.onload = function(){ 
	//value = 10의 비트 모습
	// 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0
	var value = 10;

	/* 
	value >> 1 이동 후 비트 모습
	(4+1)가 되므로 이동 후의 값은 5
	// 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1
	*/
	result = value >> 1;
	js.log(result); //5

	/* value >> 2 이동 후 비트 모습
	이동 후의 값은 2
	// 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0
	*/
	result = value >> 2;
	js.log(result); //2

}
