'use strict';
window.onload = function(){ 

	// range 오브젝트 생성
	var rangeObj = new Range();
	var startNode = document.getElementById('id01');
	var endNode = document.getElementById('id02');

	rangeObj.setStart(startNode.firstChild, 0);
	rangeObj.setEnd(endNode.firstChild, 2);

	var clondObj = rangeObj.cloneRagne();
	var fragmentObj = clondObj.cloneContents();

	js.log('복제 후 : ', fragmentObj.textContent);


	js.log('collapse() 전 : ', rangeObj.cloneContents().textContent);
	rangeObj.collapse(false);
	js.log('collapse() 후 : ', rangeObj.cloneContents().textContent);


}