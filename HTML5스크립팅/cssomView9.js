'use strict';
window.onload = function(){ 

	var el = document.getElementById('sports');
	js.log('offsetParent.nodeName : ', el.offsetParent.nodeName);
	
	js.log('offsetLeft : ', el.offsetLeft);
	js.log('offsetTop : ', el.offsetTop);

	js.log('offsetWidth : ', el.offsetWidth);
	js.log('offsetHeight : ', el.offsetHeight);

	js.log('clientWidth : ', el.clientWidth);
	js.log('clientHeight : ', el.clientHeight);
}

