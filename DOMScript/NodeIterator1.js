'use strict';

window.onload = function(){
	debugger;
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

	js.log('root.id : ', iteratorObj.root.id);
	js.log('whatToShow : ', iteratorObj.whatToShow);


}
