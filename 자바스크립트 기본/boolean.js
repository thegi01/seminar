window.onload = function(){ 
	js.log(true);
	js.log(false);

	//숫자 값으로 계산
	js.log("2 + true", 2 + true);
	js.log("2 + false", 2 + false);

	//숫자 값 인식
	if(123) {
		js.log(123);
	}

	if(0){
		js.log('0을 true로 인식')
	} else {
		js.log('0을 false로 인식')
	}

	//undefined, null
	var result = 22;
	if(undefined) {
		result = true;
	}
	js.log("undefined : ", result);

	result = 33;
	if(null){
		result = 11;
	}
	js.log('null: ', result);
}
