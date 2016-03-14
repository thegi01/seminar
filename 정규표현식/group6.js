'use strict';
window.onload = function(){ 

var result = 'ABCDEF'.match(/AB(C|M)(D|P)EF/);
js.log(result); // [ABCDEF,C,D]

js.log(RegExp.$1); // C
js.log(RegExp.$2); // D

js.log(RegExp.$3); // 빈 문자열
/*
정규표현식이 1번부터 9번까지 프로퍼티 만들어 놓음.
값이 없어서 빈 문자열
*/

js.log(RegExp.$0); // undefined
js.log(RegExp.$12); // undefined
}



