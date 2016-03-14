'use strict';

window.onload = function(){
	debugger;
	var walkerObj = document.createTreeWalker(
		document.getElementById('sports'), 	// root
		NodeFilter.SHOW_ELEMENT,			// element만 보여준다.
		{acceptNode :function(node){
			return NodeFilter.FILTER_ACCEPT;
		}},
		false  // for IE
	);

	var node = walkerObj.nextNode();
	js.log('nextNode().id : ', node.id);
	js.log('currentNode.id : ', walkerObj.currentNode.id);

	node = walkerObj.parentNode();
	js.log('parentNode().id : ', node.id);

}
