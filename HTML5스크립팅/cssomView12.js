'use strict';
window.onload = function(){ 

	var node = document.getElementById('showText');
	var topNode = document.getElementById('alignTop');
	topNode.addEventListener('click', function(e){
		node.scrollIntoView(true);
	}, false);

	var bottomNode = document.getElementById('alignBottom');
	bottomNode.addEventListener('click', function(e){
		node.scrollIntoView(false);
	}, false);

}

