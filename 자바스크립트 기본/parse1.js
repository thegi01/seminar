window.onload = function(){ 

	//문자열 타입 '123'을 Number 타입으로 반환
	var result = JSON.parse("123");
	js.log(result);
	js.log(typeof result);

	js.log(JSON.parse("true"));
	js.log(typeof JSON.parse("true"));

	js.log(JSON.parse('[]'));
	js.log(Array.isArray(JSON.parse("[]")));

	// 큰따옴표 사용
	result = JSON.parse('["ABC", "가나다"]');
	for(var k=0; k<result.length ; k++){
		js.log(result[k]);
	}

	//null 타입 변환, 대문자 사용 불가
	js.log(JSON.parse('null'));
	
	// Object타입으로 변환하고 for~in 문으로 출력
	// 기본적으로 큰 따옴표를 사용
	var result = JSON.parse('{ "sports" : "soccer" }');
	for(var name in result){
		js.log('name : ' + name +  ', value : ' + result[name]);
	}
	
}
