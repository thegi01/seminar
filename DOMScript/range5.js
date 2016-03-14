'use strict';
window.onload = function(){ 

	// range 오브젝트 생성
	var rangeObj = new Range();
	rangeObj.setStart(document.getElementById('id01').firstChild, 0);
	rangeObj.setEnd(document.getElementById('id02').firstChild, 2);

	var fragmentObj = rangeObj.cloneContents();
	js.log('insert 전 : ', fragmentObj.textContent);
	var node = document.createElement('strong');
	node.textContent = '추가한 노드';
	js.log('노드 존재 : ', rangeObj.intersectsNode(node));

	document.getElementById('insert').onclick = function(event){
		rangeObj.insertNode(node);
		fragmentObj = rangeObj.cloneContents();
		js.log('insert 후 : ', fragmentObj.textContent);
		js.log('노드 존재 : ', rangeObj.intersectsNode(node));
	}

}