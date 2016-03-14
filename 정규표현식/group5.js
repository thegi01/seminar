'use strict';
window.onload = function(){ 

var result = 'ABCDEF_CD'.match(/AB(C|K)(D|X)EF_/);
js.log(result); // [ABCDEF_,C,D]
/*

*/

result = 'ABCDEF_CD'.match(/AB(C|K)(D|X)EF_\1\2/);
js.log(result); // [ABCDEF_CD,C,D]
/*
\1 : C
\2 : D
ABCDEF_CD
*/

}



