'use strict';
window.onload = function(){ 

var result = "AAAAA".match(/A{2,4}/); 
js.log(result); 

result = "AAA".match(/A{2,4}/); 
js.log(result);

result = "CCC".match(/A{0,2}/); 
js.log(result); // ["]
/* 
매치 대상에 A가 없지만, 
	- 최소 매치수가 0이므로 매치에 성공합니다. 
	- 단, 매치된 문자가 없으므로 빈 문자열을 반환합니다.
*/

}