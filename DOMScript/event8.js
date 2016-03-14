'use strict';

window.onload = function(){ 

	var groupClick = document.getElementById('mouseID');
	groupClick.addEventListener('click', showEvent);

	function showEvent(event){
		js.log('event.altKey : ', event.altKey);
		js.log('event.shiftKey : ', event.shiftKey);
		js.log('event.screenX : ', event.screenX);
		js.log('event.screenY : ', event.screenY);
		js.log('event.clientX : ', event.clientX);
		js.log('event.clientY : ', event.clientY);

		js.log('event.x : ', event.x);
		js.log('event.y : ', event.y);

		js.log('event.pageX : ', event.pageX);
		js.log('event.pageY : ', event.pageY);
		js.log('event.offsetX : ', event.offsetX);
		js.log('event.offsetY : ', event.offsetY);
		js.log('event.button : ', event.button);
		js.log('event.relatedTarget : ', event.relatedTarget);
	}
}

//addEventListener