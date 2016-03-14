'use strict';
window.onload = function(){ 

	var sportsNode = document.getElementById('sports');
	sportsNode.addEventListener('click', clickSports, false);

	function clickSports(){
		var node = document.getElementById('after');
		// 생성하여 첨부한 엘리먼트의  nodeName
		node.appendChild(document.createElement('div'));
		js.log(node.firstElementChild.nodeName);

		var el = document.getElementById('sports');
		node.appendChild(el);
		el.style.top = "30px";
		el.style.left = "10px";
		// 차일드를 추가했으므로 두 개의 차일르 엘리먼트가 존재
		js.log("childElementCount : ",  node.childElementCount);
		// 속성도 이동
		js.log(node.lastElementChild.id);
	}

}