'use strict';
window.onload = function(){ 

var result = '\u0009\u0061'.match(/\S/);
js.log(result);
/*
\u0009 : tab
\u0061 : a 
*/

result = '한'.match(/\S/);
js.log(result);



}