'use strict';

window.onload = function(){
	var clickNode = document.getElementById("clickNode");
	clickNode.addEventListener('click', exec, false);

	function exec(){
		var content = '<ul id=outerNode>' +
							'<li id="swim">수영</li>' +
							'<li id="baseball">야구</li>' +
							'<li id="soccer">축구</li></ul>';
		var baseNode = document.getElementById('baseNode');
		baseNode.insertAdjacentHTML('afterbegin', content);
		baseNode.insertAdjacentHTML('beforeend', content);
	}

}
