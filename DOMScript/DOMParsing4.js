'use strict';

window.onload = function(){
	var clickNode = document.getElementById("clickNode");
	clickNode.addEventListener('click', exec, false);

	function exec(){
		var baseNode = document.getElementById('baseNode');

		var afterNode = document.createElement('div');
		afterNode.textContent = 'afterbegin';
		baseNode.insertBefore(afterNode, baseNode.firstChild);

		var beforeNode = document.createElement('div');
		beforeNode.textContent = 'beforeend';
		baseNode.appendChild(beforeNode);
	}


}
