'use strict';
window.onload = function(){ 

function returnValue(){
	return 'sports';
}
function returnPattern(){
	return /sp/i;
}

var result = returnValue().match(/sp/i);
js.log(result);
result = 'sports'.match(returnPattern());
js.log(result);


}





