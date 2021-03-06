'use strict';
window.onload = function(){ 

var result = 'AABKKCD'.match(/(AA|BA|B|C)*/);
js.log(result);
/*
1. 패턴의 AA는 매치되며 다음의 BA는 매치되지 않습니다.
	- BA 작성은 설명으ㅡㄹ 위해 의도적으로 작성한 것이다
2. B가 매치되면 클로저에 설정된 AA에 B를 첨부하여 매치합니다.
	- 매치가 되므로 클로저에 AAB가 설정됩니다.
3. 패턴 끝의 C를 AAB에 첨부하면 AABC가 되고 매치되지 않습니다.
	- 따라서 [AAB, B]가 반환됩니다.
*/

result = 'AABAAC'.match(/(AA|BA|B|C)*/);
js.log(result);
/*
1. 패턴의 모든 문자가 매치 대상에 있으므로 매치가 됩니다.
	- 이제 남은 것은 매치된 값을 연결하여 매치하는 것
2. AA가 매치되고 AA에 BA를 매치해도 매치가 됩니다.
	- 이 때 많이 매치된 BA가 캡처됩니다.
3. |B|에 B는 매치가 되지만 AABAB는 매치되지 않습니다.
4. 패턴 끝의 C도 매치가 되지만 AABAC는 매치되지 않습니다.
5. 지금까지 매치된 값은 AA와 BA입니다.
	- 최대로 매치한다는 특성으로 인해 다시 매치를 하게 됩니다.
	- 매치 대상 처음의 AA는 매치를 하였으므로 매치 대상에서 제외됩니다.
	- 따라서 매치 대상 4번째의 AAC부터 매치합니다.
6. AA가 있는데 매치가 되지 않은 것은
	- BA를 매치하면서 A를 사용했으므로 AC만 남아 있기 때문이다.
7. 패턴에 남아 있는 것은 BA로 매치되지 않습니다.
	- 따라서 [AABA, BA]가 반환됩니다.
*/

result = "AABACBA".match(/(AA|BA|B|C)*/);
js.log(result);

}


