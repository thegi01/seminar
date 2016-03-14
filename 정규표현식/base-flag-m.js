'use strict';


window.onload = function(){ 

var value = 'sports\nMultiline\nMultiline';
var result = value.match(/^Multi/); // ^ 첫문자부터 패턴 매칭
js.log(result);
result = value.match(/^Multi/m); 
js.log(result);
result = value.match(/^Multi/gm); 
js.log(result);
result = value.match(/Multi/); 
js.log(result);

}





