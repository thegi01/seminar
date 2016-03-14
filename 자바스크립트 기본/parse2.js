window.onload = function(){ 

	// 두 번째 파라미터에 함수를 작헝한 형태
	// 파싱 대상 문자열에서 에러가 발생할 수 있으므로
	// try~catch 문 사용은 필수라고 할 수 있다.
	try {
		var result = JSON.parse('{ "soccer" : "55", "ball" : "22" }',
			function(key, value) {
				return key === 'soccer' ? 11 : value ;
			});
	} catch(e) {console.log('JSON 파싱 에러');}

	/* 
	1. 첫 번째 파라미터의 JSON 형태의 문자열을 파싱하면 {soccer:55, ball:22} 형태가 된다.
	2. 두 번째 파라미터에 함수를 작성했으므로 파싱한 오브젝트를 하나씩 읽어가면서 함수를 실행한다.
	3. 함수에서 값을 반환하면 파싱한 값에 반영한다.
	4. 값이 변경되지 않으면 반환할 필요가 없다고 생각할 수 있으나
		- 값을 반환하지 않으면 프로퍼티(이름:값)을 삭제한다
		- 또한 undefined를 반환하면 삭제한다.
	5. 이렇게 편집한 오브젝트를 반환한다.
	*/

	for(var key in result) {
		js.log('name : ', key , ', value : ', result[key]);
	}
}
