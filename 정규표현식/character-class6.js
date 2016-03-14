'use strict';
window.onload = function(){ 

function getText(param){
	return param.replace(/<\?[^>]+>/ig, '');
}
var result = getText("<div id='sports'>축구</div>");
js.log(result);
/*
< : < 문자에 매치
\/ : 슬래시 문자
? : /가 없어도 매치, 있으면 하나만 매치
[^>] : 이외 문자에 매치
+ : > 이외 문자를 연속하여 매치
> : 문자에 매치
ig : ig 플래그
*/

}