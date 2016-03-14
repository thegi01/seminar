'use strict';
window.onload = function(){ 

var result = "AAAA".match(/A{2,}/); 
js.log(result); 

result = "AAAA".match(/A{5,}/); 
js.log(result);

result = "AAAABB".match(/A{2,}B/); 
js.log(result); 


}