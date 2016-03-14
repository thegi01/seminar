'use strict';

window.onload = function(){
	var clickNode = document.getElementById("clickNode");
	clickNode.addEventListener('click', exec, false);

	function exec(){
		var baseNode = document.getElementById('baseNode');
		// 직전 엘리먼트와 #baseNode 사이에 삽입
		var beforeNode = document.createElement('div');
		beforeNode.textContent = 'beforebegin';
		baseNode.parentNode.insertBefore(beforeNode, baseNode);
		// #baseNode와 직후 엘리먼트 사이에 삽입
		var afterNode = document.createElement('div');
		afterNode.textContent = 'aftereend';
		baseNode.parentNode.insertBefore(afterNode, baseNode.nextSibling);
	}

}
