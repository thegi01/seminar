'use strict';

window.onload = function(){

	//debugger;
	var iteratorObj = document.createNodeIterator(
		document.getElementById('sports'), 	// root
		NodeFilter.SHOW_ELEMENT,			// element만 보여준다.
		function(node){
			return node.nodeName === 'LI' ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
		}, false  // for IE
	);

	// createNodeIterator()의 첫 번째 파라미터의 엘레먼트를
	// filter함수를 호출하면서 파라미터로 넘겨줍니다.
	var count = 1, node = iteratorObj.nextNode();
	while(node){
		js.log('id : ', node.id);
		// node 변수의 이전 노드를 추울하고
		// filter 함수를 호출하면서 이전 노드를 파라미터로 넘겨줍니다.
		if(count > 2){
			node = iteratorObj.previousNode();
			js.log('id : ', node.id);
			break;
		}	
		// preivousNode()를 처리하기 의도적으로 nextNode() 실행
		node = iteratorObj.nextNode();
		count += 1;
	}

}
