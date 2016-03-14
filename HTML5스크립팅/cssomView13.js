'use strict';
window.onload = function(){ 

	var rectObj = document.getElementById('clientRect').getBoundingClientRect();
	js.log('width : ', rectObj.width);
	js.log('height : ', rectObj.height);

	js.log('top : ', rectObj.top);
	js.log('left : ', rectObj.left);

	js.log('right : ', rectObj.right);
	js.log('bottom : ', rectObj.bottom);
	


}

