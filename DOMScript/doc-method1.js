'use strict';
window.onload = function(){ 
	// 속성 노드를 생성하고 값을 설정합니다.
	var node = document.createAttribute('memoNode');
	node.nodeValue = "생성한 속성 노드";

	var el = document.getElementById('sports');
	// 생성한 속성 노드를 설정합니다.
	el.setAttributeNode(node);
	// 엘리먼트 속성이므로 표시되지 않지만 설정되어 있습니다.
	js.log(el.getAttribute('memoNode'));

}