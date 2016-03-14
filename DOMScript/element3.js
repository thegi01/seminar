'use strict';
window.onload = function(){ 

	var sports = document.getElementById('sports');
	
	// IE8 이하는 지원하지 않음
	js.log("childElementCount : ", sports.childElementCount);

	// 페어런트의 text 노드를 포함한 모든 자손 노드
	js.log("childNodes : ", sports.childNodes.length);

	// 자손 노드 중에서 엘리먼트 노드를 Collection으로 반환
	js.log("children : ", sports.children.length);
}