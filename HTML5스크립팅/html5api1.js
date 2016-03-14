'use strict';
window.onload = function(){

	var node = document.querySelector('input');
	node.focus();
	document.getElementById('range').onclick = function(e){
		// 시작과 끝이 인덱스이므로 시작은 4번째가 되고
		// 끝 인덱스의 직전까지 선택하므로 7번째가 된다.
		node.setSelectionRange(3, 7, 'forward');
		node.focus();

		console.log('setSelectionRange(3, 7, "forward")');
	}

}

