'use strict';

window.onload = function(){ 

	var mouse = document.getElementById('inBox');
	mouse.addEventListener('mouseover', mouseOver);
	mouse.addEventListener('mouseout', mouseOut);

	function mouseOver(event){
		js.log('over, relatedTarget : ', event.relatedTarget.id);
		js.log('over, target : ', event.target.id);
		js.log('');
	}
	function mouseOut(event){
		js.log('out, relatedTarget : ', event.relatedTarget.id);
		js.log('out, target : ', event.target.id);
		js.log('');
		
	}
}

//addEventListener