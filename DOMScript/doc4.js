'use strict';
window.onload = function(){ 

	var nodes = document.getElementsByTagName('input');
	show(nodes);
	// document 에 없는 <table> 지정
	nodes = document.getElementsByTagName('table');
	js.log(nodes);
	js.log(nodes.length);

	// document가 아닌 Element를 지정하면 자손에 속한 엘리먼트만 반환합니다.
	var el = document.getElementById('checkNode');
	nodes = el.getElementsByTagName('input');
	show(nodes);
	function show(nodes){
		for(var k=0 ; k<nodes.length ; k++){
			js.log(nodes[k].nodeName);
		}
	}


}