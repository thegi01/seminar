'use strict';
window.onload = function(){ 
	var selectNode = document.getElementById('sports');
	js.log('length : ', selectNode.length);
	js.log('selectedIndex : ', selectNode.selectedIndex);
	js.log('item(1).id : ', selectNode.item(1).id);

	if(selectNode.namedItem){
		js.log('namedItem("id12") : ', selectNode.namedItem("id12").text);
	} else {
		js.log('namedItem() 을 지원하지 않음');
	}

}

