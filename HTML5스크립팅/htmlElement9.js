'use strict';
window.onload = function(){

	var node = document.getElementsByName('person').item(0);
	var nodes = node.list.children;
	console.log('length : ', nodes.length);
	for(var k=0 ; k<nodes.length ; k++){
		console.log('text : ', nodes[k].textContent);
	}

	
}

