'use strict';
window.onload = function(){ 

var result = "\u0008".match(/[\b]/); 
js.log(result); // []
js.log(result.length); // 1
/*
1. 유니코드 '\u0008' 값은 백스페이스로 [\b]로 매치됩니다.
2. 백스페이스가 보이지 않으므로
	-[실행결과] 1번에 값이 표시되지 않았지만
3. [실행결과] 2번에 1이 출력된 것은 값이 있다는 의미입니다.
*/

result = /[\b]/.test("\u0008");  
js.log(result); // true
/*
1. [\b]가 유니코드 "\u0008" 이므로
	- 매치가 되어 true가 출력됩니다.
*/




}