'use strict';
window.onload = function(){ 

var result = "AAA".match(/A{2}/); 
js.log(result); 

result = "AAA".match(/A{4}/); 
js.log(result);

result = "AAAKK".match(/A{2}K/); 
js.log(result); 


}