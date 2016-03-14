'use strict';
window.onload = function(){ 

var result = /((ball)|(base))/.exec("baseball");
js.log(result); // [base,base,undefined,base]
/*
1. () 수만큼 2번째 인덱스부터 undefined를 설정합니다.
	- ['', undefined, undefined, undefined] 형태가 됩니다.
2. 밖에서 안으로, 왼쪽에서 오른쪽으로 undefined를 설정합니다.
	- 2번째 인덱스가 (()|())의 undefined이고
	- 3번째가 (ball)의 undefined이며 4번째가 (base)의 undefined입니다.
3. 처음에 매치하면 base가 매치됩니다.
	- baseball에서 base가 앞에 있으므로 ball이 아닌 base에 매치됩니다.
	- ['', undefined, undefined, base] 형태가 됩니다.
	- ((ball)|base) 형태가 됩니다.
4. 다시 매치하면 base가 매치됩니다.
	- base는 전체 ()의 매치값이므로 2번째 인덱스에 설정됩니다.
	- ['', undefined, base] 형태가 됩니다.
5. 마지막으로 base로 baseball을 매치하게 되며
	- 매치가 되므로 첫 번째 인덱스에 값이 설정됩니다.
	- [base, base, undefined, base] 형태가 됩니다.
6. (ball)은 한 번도 매치되지 않으므로 undefined가 그대로 유지됩니다.
*/

/*
순서
1. /((ball)|(base))/	['', undefined, undefined, undefined]
2. /(ball|(base))/
3. /(ball|base)/	
4. /(base)/   			['', undefined, undefined, base], Array index -> 3
5. /base/				['', base, undefined, base],
7.						[base, base, undefined, base]
*/

}