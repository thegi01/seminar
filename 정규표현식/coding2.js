'use strict';
window.onload = function(){ 

function check(p){
	return /\d+$/.test(p);
	// /d [0-9]
}

js.log(check('12345'));
js.log(check('12345A'));






}