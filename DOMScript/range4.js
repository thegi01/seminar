'use strict';
window.onload = function(){ 

	// range 오브젝트 생성
	var rangeObj = new Range();
	var ul00Node = document.getElementById('ul00');
	// <ul>은 삭제되지 않고 남는다.
	document.getElementById('deleteContents').onclick = function(event){
		deleteContents('remain');
	}
	// <ul>까지 삭제한다.
	document.getElementById('deleteAll').onclick = function(event){
		deleteContents('all');
	}

	function deleteContents(range){
		if(range == 'remain'){
			rangeObj.selectNodeContents(ul00Node);
		} else {
			rangeObj.selectNode(ul00Node);
		}

		rangeObj.deleteContents();
	}
}