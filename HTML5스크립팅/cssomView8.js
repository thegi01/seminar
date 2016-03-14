'use strict';
window.onload = function(){ 

	var el = document.getElementById('sports');
	show(el);
	js.log('------');
	el = document.getElementById('sportsScroll');
	show(el);
	function show(e){
		js.log('clientWidth : ', el.clientWidth);
		js.log('clientHeight : ', el.clientHeight);
		js.log('clientTop : ', el.clientTop);
		js.log('clientLeft : ', el.clientLeft);
	}

}

