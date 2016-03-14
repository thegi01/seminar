'use strict';
window.onload = function(){ 

var result = "ABCD".match(/[^A]/); 
js.log(result); // [B]
/* A를 제외한 첫 번째 문자 */

result = "ABCDE".match(/[^ABD]/); 
js.log(result); // [C]
/*
1. A나 B나 D를 제외하고 첫 문자
*/

result = "15257".match(/[^1-4]/g); 
js.log(result); // [5,5,7]
/* 1~4가 아닌 모든 문자를 반환 */

result = "정규표현식".match(/[^정표]/g); 
js.log(result); // [규,현,식]
/* 정 또는 표 를 제외한 모든 문자 */

}