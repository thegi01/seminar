'use strict';
window.onload = function(){ 

var result = "ABCDE".match(/[ABK]/); 
js.log(result); 
var result = "ABCDE".match(/[BAK]/); 
js.log(result); 
/*
매치 대상에 A 또는 B 또는 K 가 있으면 매치로 처리합니다.
매치된 문자 하나를 매열로 반환합니다.
*/

result = "ABCDE".match(/[]/); 
js.log(result);
/*
[]에 값을 지정하지 않으면 null 을 반환
*/

result = "ABCDE".match(/[BAC]/); 
js.log(result);
/*
패턴의 처음에 작성한 B가 매치되었다고 종료하는 것이 아니라
A와 C도 매치하여 매치된 문자 중에서
매치 대상의 가장 앞에 작성한 문자를 반환합니다.
*/

result = "정규표현식".match(/[표정]/g); 
js.log(result);

}