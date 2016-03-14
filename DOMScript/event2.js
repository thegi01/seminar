'use strict';

window.onload = function(){ 

	var addClick = document.getElementById('add');
	var removeClick = document.getElementById('remove');
	var showNode = document.getElementById('show');
	// DOM 이벤트 설정
	if(addClick.addEventListener){
		addClick.addEventListener('click', showChoice, false);
		removeClick.addEventListener('click', setRemove);
	// IE
	} else {
		addClick.attachEVent('onclick', showChoice);
		removeClick.attachEVent('onclick', setRemove);

	}
	
	function showChoice(e){
		showNode.style.backgroundColor = 'yellow';
	}
	function setRemove(e){
		showNode.style.backgroundColor = '';
		if(addClick.removeEventListener){
			addClick.removeEventListener('click', showChoice, false);
		} else {
			addClick.detachEvent('onclick', showChoice);
		}
	}

	

}

//addEventListener