'use strict';
window.onload = function(){ 

	window.onclick = function(e){
		var element = document.elementFromPoint(e.clientX, e.clientY);
		js.log('id : ', element.id);
		js.log('textContent : ', element.textContent);
	}

}

