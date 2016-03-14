'use strict';

window.onload = function(){
	var clickNode = document.getElementById("innerNode");
	clickNode.addEventListener('click', exec, false);

	function exec(){
		var node = document.getElementById('innerNode');
		node.innerHTML = '<li id="swim">수영</li>' +
							'<li id="baseball">야구</li>' +
							'<li id="soccer">축구</li>';
		js.log('childElementCount : ', node.childElementCount);
	}


	

}
