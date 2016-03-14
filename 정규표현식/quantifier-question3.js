'use strict';
window.onload = function(){ 

var result = "ABCABC".match(/ABC*?/); 
js.log(result); 

result = "ABCABC".match(/ABZ*?/); 
js.log(result);

result = "AAAAAA".match(/A*?/); 
js.log(result);
js.log(result.index);

result = "AAAKK".match(/A*?K/); 
js.log(result); // [AAAK]
/*
1. 최소로 매치하지만 K가 매치되어야 한다.
2. 왼쪽에서 오른쪽으로 매치하므로
	- 첫 번째의 A와 K로 매치하면 매치가 되지 않습니다.
	- 다시 두 번째 A와 K로 매치하면 매치가 되지 않습니다.
	- 또 다시 세번째 A와 K로 매치하면 매치가 되며
	- 이 때 매치된 A를 모아 즉, AA와 AK를 결합하여 반환합니다.
3. 정규 표현식의 최적화 알고리즘입니다.
*/



}