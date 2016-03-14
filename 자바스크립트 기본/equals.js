window.onload = function(){ 
	//값 타입이 다르면 문자 타입을 숫자 값으로 변환하여 비교
	//스펙 11.9.3항의 4번에서 8번
	js.log(1 =="1");

	//비교 알고기름에서 양쪽 타입이 같을 떄
	//undefined이면 true를 반환하므로 true가 출력
	//스펙 11.9.3항의 1번 a번
	var one;
	js.log(one == undefined);

	//비교 알고리즘에서 undefined이고 null이거나
	//null이고 undefined이면 true를 비교한다.
	//스펙 11.9.3항의 2번과 3번
	js.log(one == null);

	//오른쪽 끝에 공백이 있으므로 값이 다름
	js.log("abc" == "abc ");

	
}
