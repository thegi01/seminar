'use strict';

window.onload = function(){ 

	var gotoClick = document.getElementById('goto');
	// DOM 이벤트 설정
	if(gotoClick.addEventListener){
		gotoClick.addEventListener('click', showGoto);
	// IE
	} else {
		gotoClick.attachEVent('onclick', showGoto);

	}
	
	function showGoto(e){
		js.log('클릭');
		if(event.preventDefault){
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	}

}

//addEventListener