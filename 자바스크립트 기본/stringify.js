window.onload = function(){ 

	var result = JSON.stringify(123);
	console.log(result);
	console.log(typeof result);

	// Infinity, NaN, null은 문자열 null로 변환
	console.log(JSON.stringify([Infinity, NaN, null]));

	//문자열로 변환
	console.log(JSON.stringify([true, false]));

	// undefined 문자열 "undefined" 로 변환
	console.log(JSON.stringify(undefined));
	// 배열에 작성하면 문자열 "null"로 변환
	console.log(JSON.stringify([undefined]));
	// 프로퍼티 값으로 작성하면 프로퍼티(이름:값)을 제외 시킴
	console.log(JSON.stringify({sports : undefined}));

	// [] 기호는 문자열로 변환되며
	// [] 안의 작은따옴표가 큰따옴표로 변환된다.
	console.log(JSON.stringify(['가나다', 'ABC']));

	// 'soccer' 에서 작은따옴표가 큰따옴표로 변환되며
	// 문자열 타입의 프로퍼티 이름과 값이 큰따옴표 안에 작성된다.
	// 포르퍼티 값이 숫자, true, flase, null은 변환되지 않는다.
	console.log(JSON.stringify({sports : 'sports', player : 11}));

}
