'use strict';
window.onload = function(){

	var node = document.querySelector('[type=checkbox]');
	document.getElementById('execClick').onclick = function(e){
		if(node.indeterminate){
			node.indeterminate = false;
			node.checked = true;
		} else {
			node.indeterminate = true;
		}
		console.log('indeterminate : ', node.indeterminate);
	}
}

