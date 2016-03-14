'use strict';


window.onload = function(){ 
// 텍스트 문자열 매치
var result = 'sports'.match(/sports/);
js.log(result);
result = 'sports'.match(/sp/); // 매치 대상인 'sports'이고 s에 이어 p가 있으므로 패턴 /sp/에 매치됩니다.
js.log(result);
js.log("isArray : ", Array.isArray(result));

result = 'sports'.match(/spt/);
js.log(result);
result = 'sports'.match(/s/);
js.log(result);
}





