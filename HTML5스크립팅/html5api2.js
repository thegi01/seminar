'use strict';
window.onload = function(){

	var node = document.querySelector('input');
	node.focus();
	document.getElementById('setText').onclick = function(e){
		// 위치가 선택되어 있어도 값 대체는 파라미터 기준으로 합니다.
		// 단, 대체 후 선택 상태는 작은 값(5)과 큰 값(11)을 반영합니다.
		node.setRangeText('대체한 값', 5, 11, 'select');
	}

}

