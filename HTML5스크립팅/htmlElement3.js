'use strict';
window.onload = function(){

	var formNode = document.forms[0];
	js.log('elements.length : ', formNode.elements.length);

	js.log('formNode[1].name : ', formNode[1].name);

	js.log('formNode["soccer"].type : ', formNode["soccer"].type);

	document.getElementById('submitID').onclick = function(event){
		formNode.submit();
		js.log('submit()');
	}
	document.getElementById('resetID').onclick = function(event){
		formNode.reset();
		js.log('reset()');
	}


}

