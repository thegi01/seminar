'use strict';
window.onload = function(){ 

	// range 오브젝트 생성
	var rangeObj = new Range();
	var sourceObj = new Range();
	var id01Node = document.getElementById('id01');


	rangeObj.selectNode(id01Node);

	// Range 오브젝트에 노드의 포함 여부 
	js.log("ie01 포함 : ", rangeObj.isPointInRange(id01Node, 1));
	// rangeObj을 사용할 수 없는 상태로 만든다.
	rangeObj.detach();

	


}