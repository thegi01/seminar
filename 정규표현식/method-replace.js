'use strict';
window.onload = function(){ 

var result = '12_34_12'.replace('12', 77);
js.log(result);
var result = '12_34_12'.replace(/12/g, 77);
js.log(result);

function returnValue(){
	return 'AA';
}
var result = '12_34_12'.replace(/12/g, returnValue());
js.log(result);





}