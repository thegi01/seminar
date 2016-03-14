'use strict';
window.onload = function(){ 

var result = '1ABC23'.match(/\D/);
js.log(result);

result = '1ABC23'.match(/\D/g);
js.log(result);

result = 'ABC3'.match(/^\D+$/);
js.log(result);
/* 
마지막 문자까지 숫자 외의 문자에 매치되어야 한다.
*/

result = 'ABC항!'.match(/^\D+$/);
js.log(result);



}