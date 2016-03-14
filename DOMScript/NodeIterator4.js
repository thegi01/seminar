'use strict';

window.onload = function(){

	//debugger;
	var iteratorObj = document.createNodeIterator(
		document.getElementById('sports'), 	// root
		NodeFilter.SHOW_ELEMENT,			// element만 보여준다.
		{acceptNode : function(node){
			return node.nodeName === 'LI' ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
		}}, false  // for IE
	);

	// acceptNode 함수가 호출되며 노드가 반환됩니다.
	var node = iteratorObj.nextNode();
	js.log('nextNode().id : ', node.id);

	// nextNode()에서 반환된 노드의 nextElementSibling을
	// 파라미터 값으로 넘겨주면서 acceptNode()를 호출합니다.
	// whatToShow 값이 반환됩니다.
	var whatToShow = iteratorObj.filter.acceptNode(node.nextElementSibling);
	js.log('acceptNode() : ', whatToShow);

}
