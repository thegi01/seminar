'use strict';

window.onload = function(){

	var ulNode = document.getElementById('topNode');
	var fragmentObj = document.createDocumentFragment();
	js.log('nodeType : ', fragmentObj.nodeType);
	js.log('nodeName : ', fragmentObj.nodeName);

	for(var k=0 ; k<10; k++){
		var liNode = document.createElement('li');
		liNode.textContent = 'text' + k;
		fragmentObj.appendChild(liNode);
	}
	ulNode.appendChild(fragmentObj);
	js.log('count: ', ulNode.childElementCount);
	
}
