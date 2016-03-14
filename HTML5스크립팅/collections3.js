'use strict';
window.onload = function(){ 

	var selectNode = document.getElementById('sports');
	
	var addNode = document.getElementById('addID');
	addNode.onclick = function(){
		var node = document.createElement('option');
		node.textContent = 'ADD';
		selectNode.add(node, 1);
	}

	var removeNode = document.getElementById('removeID');
	removeNode.onclick = function(){
		selectNode.remove(1);
	}

}

