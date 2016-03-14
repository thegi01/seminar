'use strict';
window.onload = function(){ 

	var el = document.getElementById('sports');

	js.log('el.nodeType : ', el.nodeType);

	js.log(el.firstChild);
	js.log(el.firstChild.firstChild);
	js.log(el.firstElementChild);

	js.log('el.lastChild.nodeType : ', el.lastChild.nodeType);
	js.log('el.lastElementChild.nodeType : ', el.lastElementChild.nodeType);
	js.log('el.lastElementChild.id : ', el.lastElementChild.id);
	js.log('el.childNoes.length-1.nodeType : ', el.childNodes[el.childNodes.length-1].nodeType);


	var el = document.getElementById('swim');

	js.log(el.previousSibling.nodeType);
	js.log(el.previousSibling.id);

	js.log(el.previousElementSibling.nodeType);
	js.log(el.previousElementSibling.id);

	

	

}