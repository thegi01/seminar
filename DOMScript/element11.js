'use strict';
window.onload = function(){ 

	var wrapNode = document.getElementById('wrap');
	wrapNode.addEventListener('click', clickWrap, false);

	function clickWrap(){
		var el = document.getElementById('sports');
		var cloneNodes = el.cloneNode(true);
		var target = document.getElementById('clone');
		target.appendChild(cloneNodes);

		target.firstChild.id = 'cloneId';
		js.log('childElementCount : ', target.firstChild.childElementCount);
	}

}