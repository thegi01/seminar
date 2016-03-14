'use strict';
window.onload = function(){ 

	var sportsNode = document.getElementById('sports');
	var textNode = document.getElementById('textClick');
	textNode.addEventListener('click', clickText, false);

	function clickText(){
		var node = document.createTextNode('텍스트 노드 추가');
		sportsNode.appendChild(node);
		js.log('textContent : ', sportsNode.textContent);
		js.log('length : ', sportsNode.textContent.length);
	}
 	
 	var normalizeNode = document.getElementById('normalizeClick');
 	normalizeNode.addEventListener('click', function(){
 		sportsNode.normalize();
 		js.log('normalize() : ', sportsNode.textContent);
 		js.log('length : ', sportsNode.childNodes.length);
 	}, false);

}