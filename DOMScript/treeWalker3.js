'use strict';

window.onload = function(){
	//debugger;
	var walkerObj = document.createTreeWalker(
		document.getElementById('sports'), 	// root
		NodeFilter.SHOW_ELEMENT,			// element만 보여준다.
		{acceptNode :function(node){
			return NodeFilter.FILTER_ACCEPT;
		}},
		false  // for IE
	);

	// createTreeWalker 의 첫 번째 파라미터인 #sports가 기준 노드
	var node = walkerObj.firstChild();
	js.log('firstChild().id : ', node.id);

	walkerObj.parentNode();
	node = walkerObj.lastChild();
	js.log('lastChild().id : ', node.id);

}
