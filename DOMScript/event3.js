'use strict';

window.onload = function(){ 

	var sportsClick = document.getElementById('sports');
	var swimClick = document.getElementById('swim');
	var groupClick = document.getElementById('group');
	// DOM 이벤트 설정
	if(sportsClick.addEventListener){
		sportsClick.addEventListener('click', showSports);
		swimClick.addEventListener('click', showSwim);
		groupClick.addEventListener('click', showGroup);
	// IE
	} else {
		showSports.attachEVent('onclick', showSports);
		swimClick.attachEVent('onclick', showSwim);
		groupClick.attachEVent('onclick', showGroup);

	}
	
	function showSports(e){
		js.log('스포츠');
	}
	function showSwim(e){
		js.log('수영');
	}
	function showGroup(e){
		js.log('Group');
	}


	

}

//addEventListener