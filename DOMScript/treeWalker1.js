'use strict';

window.onload = function(){
	debugger;
	var walkerObj = document.createTreeWalker(
		document.getElementById('sports'), 	// root
		NodeFilter.SHOW_ELEMENT,			// element만 보여준다.
		{acceptNode :function(node){
			if(node.nodeName === 'LI') {
				return NodeFilter.FILTER_ACCEPT;
			} else {
				return NodeFilter.FILTER_REJECT;
			}
		}},
		false  // for IE
	);

	js.log('root.id : ', walkerObj.root.id);
	js.log('currentNode.id : ', walkerObj.currentNode.id);
	js.log('whatToShow : ', walkerObj.whatToShow);

	// walkerObj.filter에 acceptNode()와
	// NodeFilter.SHOW_ELEMENT와 같은
	// 처리 대상 노드 타입이 포함되어 있습니다.
	js.log('filter : ', walkerObj.filter.acceptNode);

}
