'use strict';
window.onload = function(){

	// for가 아닌 htmlFor로 값을 구할 수 있습니다.
	var node = document.getElementsByTagName('label').item(0);
	js.log('htmlFor : ', node.htmlFor);

	js.log('control.id : ', node.control.id);
	js.log('control.type : ', node.control.type);
	js.log('form.id : ', node.form.id);


}

