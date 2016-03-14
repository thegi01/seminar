window.onload = function(){ 

	// String 오브젝트와  Array오브젝트에 indexOf()가 있음
	// 두 번째 파라미터에 음수 값을 지정했을 떄 반환 값이 다르므로
	// 호출하기 전에 체크할 필요가 있따.

	// String 오브젝트에서 두 번째 파라미터에 음수 값을 지정하면
	// 0번 인덱스로 간주하여 처음부터 검색
	js.log('abcabc'.indexOf('c', -2));

	// Array오브젝트에서 두 번째 파라미터에 음수 값을 지정하면
	// 음수 값에 배열 length를 더해 인덱스로 사용
	js.log(['a', 'b', 'c', 'a', 'b', 'c'].indexOf('c', -2));
	
}
