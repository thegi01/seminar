'use strict';
window.onload = function(){ 

	var el = document.getElementById('sports');
	js.log('el.nodeType : ', el.nodeType);

	var parent = el.parentNode;
	js.log(parent.id);

	var doc = document.documentElement;
	js.log(doc.parentNode.nodeName);
	js.log(doc.parentNode.parentElement);


}