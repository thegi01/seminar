'use strict';

window.onload = function(){ 

	document.getElementById('eventID').addEventListener('click', show);
	function show(event){
		js.log('type : ' + event.type);
		js.log('target : ' + event.target.id);
		js.log('currentTarget : ' + event.currentTarget.id);
		js.log('eventPhase : ' + event.eventPhase);
		js.log('bubbles : ' + event.bubbles);
		js.log('cancelable : ' + event.cancelable);
		js.log('defaultPrevented : ' + event.defaultPrevented);
		js.log('timeStamp : ' + event.timeStamp);
	}

}

//addEventListener