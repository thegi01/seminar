'use strict';
window.onload = function(){

	js.log('activeElement : ', document.activeElement);
	js.log('hasFocus() : ', document.hasFocus());

	 document.getElementById('btn').onclick = function(){
	 	document.getElementById('inputID').focus();
	 	js.log('activeElement : ', document.activeElement);
		js.log('hasFocus() : ', document.hasFocus());
	 }


}

