'use strict';
window.onload = function(){ 

var result = "AAAC".match(/A*/); // 매치가 되지 않을 때까지 모두 매치 == A+
js.log(result);
result = "AAAC".match(/A+/);
js.log(result);
var result = "AABAAAC".match(/A*/); 
js.log(result);

var result = "12AB_12EFG".match(/12C*/g);
js.log(result);
var result = "123AB_12EFG".match(/123C*/);
js.log(result);
var result = "ABC_123".match(/123C*/);
js.log(result);



}