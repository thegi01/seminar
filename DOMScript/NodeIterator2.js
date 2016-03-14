'use strict';

window.onload = function(){
	
	//debugger;
	var iteratorObj = document.createNodeIterator(
		document.getElementById('sports'), 	// root
		NodeFilter.SHOW_ELEMENT,			// element만 보여준다.
		function(node){
			if(node.nodeName === 'LI') {
				return NodeFilter.FILTER_ACCEPT;
			} else {
				return NodeFilter.FILTER_REJECT;
			}
		},
		false  // for IE
	);

	// createNodeIterator()의 첫 번째 파라미터의 엘레먼트를
	// filter함수를 호출하면서 파라미터로 넘겨줍니다.
	var node = iteratorObj.nextNode();
	while(node){
		js.log('id : ', node.id);
		// node 변수의 다음 노드를 추울하고
		// filter 함수를 호출하면서 다음 노드를 파라미터로 넘겨줍니다.
		node = iteratorObj.nextNode();
	}


}
