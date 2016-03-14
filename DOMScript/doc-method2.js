'use strict';
window.onload = function(){ 
	var iframeNode = document.getElementsByTagName('iframe').item(0);
	// iframe의 document 오브젝트를 구합니다.
	// contentDocument는 IE8 이하에서 지원하지 않습니다.
	var doc = iframeNode.contentDocument || iframeNode.contentWindow.document;
	// 복제 대상 엘리먼트를 생성합니다.
	doc.body.innerHTML = "<ul id=fromNode><li>복제 대상 노드</li></ul>";

	// 복제할 엘리먼트 오브젝트 생성
	var fromNode = doc.getElementById('fromNode');
	js.log("fromNode : ", fromNode.firstElementChild.textContent);

	// 엘리먼트를 복제하여 toNode의 차일드로 첨부합니다.
	var importNode = doc.importNode(fromNode, true);
	var toNode = document.getElementById("toNode");
	toNode.appendChild(importNode);
	// 복제하여 첨부했으므로 count가 1에서 2로 늘어납니다.
	js.log('childElementCount : ', toNode.childElementCount);

}