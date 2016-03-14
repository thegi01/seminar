'use strict';
window.onload = function(){

	var node = document.querySelector('input');
	document.getElementById('select').onclick = function(e){
		// 지정한 인덱스부터
		node.selelctionStart = 2 ;
		// 지정한 인덱스 앞까지 선택
		node.selectionEnd = 6;
		node.focus();

		console.log('selectionSTart : ', node.selectionStart);
		console.log('selectinEnd : ', node.selectionEnd);
		console.log('selectionDirection : ', node.selectionDirection);
	}

}

