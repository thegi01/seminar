'use strict';
window.onload = function(){ 

var result = "AAAAA".match(/A{1,}/); 
js.log(result); 

result = "AAAAA".match(/A{1,}?/); 
js.log(result);

result = "AAAAA".match(/A{1,5}?/); 
js.log(result);

}