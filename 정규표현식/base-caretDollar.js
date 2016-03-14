'use strict';
window.onload = function(){ 

var result = '12_34_12'.match(/^12/); // 패턴의 12가 매치 대상의 처음에 있으므로 매치됩니다.
js.log(result);
result = '12_34_12'.match(/^34/); // 패턴의 34가 매치 대상에 있지만 중간에 있으므로 매치되지 않습니다.
js.log(result);
var value = 'first\u000aStart\u000aStart';
result = value.match(/^Start/m); // \u000a는 줄 바꿈을 나타냄. 
js.log(result);
result = value.match(/^Start/mg); 
js.log(result);

var result = '12_34_56'.match(/56$/);
js.log(result);
result = '12_34_56'.match(/34$/);
js.log(result);

}





