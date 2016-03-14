'use strict';
window.onload = function(){

	var node = document.querySelector('[type=number]');
	document.getElementById('upClick').onclick = function(e){
		node.stepUp(1);
		console.log('setUp(1) : ', node.value);
	}
	document.getElementById('downClick').onclick = function(e){
		node.stepDown(1);
		console.log('setDown(1) : ', node.value);
	}
	
}

