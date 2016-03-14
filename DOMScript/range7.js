'use strict';
window.onload = function(){ 

	// range 오브젝트 생성
	var rangeObj = new Range();
	var sourceObj = new Range();
	var id01Node = document.getElementById('id01');
	var id02Node = document.getElementById('id02');

	rangeObj.selectNode(id01Node);
	sourceObj.selectNode(id02Node);
	// rangeObj의 #id01이 sourceObj의 #id02보다 앞에 있으므로 -1 반환
	js.log(rangeObj.compareBoundaryPoints(Range.START_TO_START, sourceObj));
	// 1 반환
	js.log(rangeObj.compareBoundaryPoints(Range.START_TO_START, rangeObj));
	// 1 반환
	js.log(rangeObj.comparePoint(id02Node, 1));

	


}