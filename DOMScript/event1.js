'use strict';

window.onload = function(){ 

	var clickNode = document.getElementById('clickID');
	// DOM 이벤트 설정
	if(clickNode.addEventListener){
		clickNode.addEventListener('click', habdleClick, false);
	// IE
	} else {
		clickNode.attachEVent('onclick', habdleClick);
	}
	
	function habdleClick(e){
		var node = document.getElementById('handle');
		node.style.backgroundColor = 'yellow';
		node.textContent = '이벤트 발생';
	}

	

}

//addEventListener