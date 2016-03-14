'use strict';
window.onload = function(){
	var node = document.querySelector('textarea');
	node.focus();
	js.log('readOnly : ', node.readOnly);
	js.log('type : ', node.type);
	js.log('defaultValue : ', node.defaultValue);
	js.log('value : ', node.value);
	js.log('textLength : ', node.textLength);

}