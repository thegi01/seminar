'use strict';
window.onload = function(){ 
/*
[요구사항]
	함수의 파라미터로 값을 받습니다.
	값 전체가 영문 대소문자이면 true를, 아니면 false를 출력하세요.
	값 전체 : 매치 대상의 처음부터 마지막까지
[힌트&조건]
	test() 메소드 사용
	check("ABCDE");
	check("abcd");
	check("ABcd");
	check("123");
	check("12AB");
	check("AB12");
[추가 요구사항]
	값에 숫자를 추가해서 체크하세요.
*/

function check(p){
	return js.log(/^[A-Za-z0-9]+$/.test(p));
	//return js.log(/^[%@_A-Za-z0-9]+$/.test(p)); //@나 % 추가시
}
check("ABCDE");
check("abcd");
check("ABcd");
check("123");
check("12AB");
check("AB12");
check("AB 12");
check("@");
check("%");
check("-");



}