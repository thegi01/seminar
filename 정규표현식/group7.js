'use strict';
window.onload = function(){ 

var pattern = /(^[+-]?\d+)(\d{3})/;

function insertComma(value){
	var str = value.toString();
	while(pattern.test(str)){
		str = str.replace(pattern, '$1' + ',' + '$2');
	}
	return str;
}
var result = insertComma(123456789);
js.log(result);
/*
첫 번째 괄호에 123456이 캡처되고
두 번째 괄호에 789가 캡처된다.

정규 표현식의 최적화 논리(뒤->앞으로 온다)
두 번째 패턴 \d{3}가 매치되어야 전체가 매치되므로
789를 우선 매치하고 나머지를 첫 번째 패턴에 매치합니다.

123456,789
123,456,789
*/

result = insertComma(-123456789);
js.log(result);

result = insertComma(-1234567);	
js.log(result);



}

/*
/(^[+-]?\d+)(\d{3})/
() : 매치된 값을 캡쳐
[+-] : + 또는 -에 매치
? : [+-]의 매치 결과가 없어도 매치, 있으면 하나만 매치
\d+ : 반드시 숫자 이상 숫자에 매치
\d{3} : 숫자 3자리에 매치, {}는 지정한 숫자 만큼 매치


(^[+-]?\d+)
[+-] : 패턴 문자가 아닌 일반 문자, +는 매치되지 않을 수 있으니 매치되지 않아도 된다.
? : 매치되지 않아도 매치로 처리합니다. 매치가 되면 하나만 해라.
+ : 123~ 전부 매치 
*/




