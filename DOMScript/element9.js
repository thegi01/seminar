'use strict';
window.onload = function(){ 

	var sportsNode = document.getElementById('sports');
	sportsNode.addEventListener('click', removeSports, false);

	function removeSports(){
		var el = document.getElementById('sports');
		// 삭제되었으므로 null이 반환됩니다.
		var remove = el.parentNode.removeChild(el);
		js.log(document.getElementById('sports'));
		// 변수에 남아 있으므로 사용할 수 있다.
		js.log(remove.id);

	}

}