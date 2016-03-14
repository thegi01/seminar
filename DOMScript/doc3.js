'use strict';
window.onload = function(){ 

	// 의도적으로 id 속성 값을 같게 작성하였으며
	// <html>에 가장 가까운 엘리먼트가 반환됩니다.
	var node = document.getElementById('sports');
	console.log(node.textContent); // 축구

	// #check가 존재하지 않으므로 null을 반환합니다.
	node = document.getElementById('check');
	console.log(node); // null

}