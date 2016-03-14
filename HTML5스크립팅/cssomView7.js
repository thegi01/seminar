'use strict';
window.onload = function(){ 

	// firefox 지원
	window.onclick = function(e){
		if(document.caretPositionFromPoint){
			var obj =  document.caretPositionFromPoint(e.clientX, e.clientY);
			js.log('id : ', obj.offsetNode.id);
			js.log('id : ', obj.offsetNode.textContent);
		} else {
			js.log('2016.01.03 firefox 지원');
		}
		
	}

}

