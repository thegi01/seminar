'use strict';
window.onload = function(){ 

var result = "111".match(/[1+]/); // 문자 1, + 이 매치 대상
js.log(result); // [1]

result = "?12".match(/[.?1]/);  // 문자 ., ? , 1 이 매치 대상
js.log(result); // [?]


}