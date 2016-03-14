'use strict';
window.onload = function(){ 

	var el = document.getElementById('spanRect');
	var rectList = el.getClientRects();
	for(var k=0 ; k<rectList.length ; k++){
		var rect = rectList[k];
		js.log('width : ', rect.width);
		js.log('height : ', rect.height);
		js.log('top : ', rect.top);
		js.log('left : ', rect.left);
		js.log('right : ', rect.right);
		js.log('bottom : ', rect.bottom);
	}
	

}

