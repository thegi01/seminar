window.onload = function(){ 
	
	var value = [1, 2, 3, 1, 2, 3];
	
	//왼쪽에서 오른쪽으로 검색
	js.log(value.indexOf(3));

	//데이터 타입까지 체크 하므로 문자열 "3"이 없음
	js.log(value.indexOf("3"));

	// [4]부터 3을 검색하게 되므로 마지막의 3이 매치된다.
	js.log(value.indexOf(3, 4));

	// 엘리먼트가 존재하지 않으므로 -1 반환
	js.log(value.indexOf(3, 12));

	//음수이면 length 더해 인덱스 사용하며
	//(6-1) 인덱스부터 검색하게 되어 마지막 3의 인덱스 반환
	js.log(value.indexOf(3, -1));

}
