'use strict';

window.onload = function(){ 

	var node = document.getElementById('mouseID');
	node.addEventListener('click', showMouse);
	node.addEventListener('mousedown', showMouse);
	node.addEventListener('mouseup', showMouse);
	node.addEventListener('mouseover', showMouse);
	node.addEventListener('mouseout', showMouse);
	node.addEventListener('dblclick', showMouse);

	function showMouse(event){
		js.log('type : ' + event.type);
	}
}

//addEventListener