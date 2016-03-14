'use strict';
window.onload = function(){ 

	window.onclick = function(e){
		if(document.elementsFromPoint){
			var nodes =  document.elementFromPoint(e.clientX, e.clientY);
			for(var k =0; k<nodes.length ; k++){
				js.log('id : ', nodes[k].id);
				js.log('nodeName : ', nodes[k].nodeName);
			}
		} else {
			js.log('브라우저 미지원');
		}
		
	}

}

