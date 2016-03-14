'use strict';
window.onload = function(){ 

var result = "123AAA".match(/123S?/); 
js.log(result); // [123]

result = "123AAA".match(/123A?/); 
js.log(result); // [123A]

result = "123AAA".match(/123A*/); 
js.log(result); // [123AAA]
/*
1. *앞의 A를 모두 매치합니다.
2. 이 점이 ?와 *의 차이입니다.
*/

result = "123SSSK".match(/123S?K/); 
js.log(result); // null
/*
1. 123S가 매치되고 다음에 ?가 있으므로
	- 문자 하나가 매치되지 않아도 매치로 처리됩니다.
2. 이어서 S가 있으며 K와 매치되지 않으므로
	- 최종으로 매치가 실패하게 됩니다.
*/

result = "123SSSK".match(/123S*K/); 
js.log(result); // [123SSSK]
/*
1. 앞 코드와 다른 것은 ? 대신에 *를 사용한 점입니다.
2. *는 하나만 매치하지 않고 모두 매치하므로 매치가 되며
	- 매치된 K까지의 모든 문자를 반화합니다.
3. 이 점이 ?와 *의 차이이니다.
4. ?보다 *가 더 욕심 많게 매치됩니다.
*/


}