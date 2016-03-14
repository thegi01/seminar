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
		baseNode.insertAdjacentHTML('beforebegin', content);
		baseNode.insertAdjacentHTML('afterend', content);

		var contentInner1 = '<p>afterbegin</p>';
		var contentInner2 = '<p>beforeend</p>';
		baseNode.insertAdjacentHTML('afterbegin', contentInner1);
		baseNode.insertAdjacentHTML('beforeend', contentInner2);
	}

}
