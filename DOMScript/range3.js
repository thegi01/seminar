'use strict';
window.onload = function(){ 

	// range 오브젝트 생성
	var rangeObj = new Range();
	var id01Node = document.getElementById('id01');
	var id03Node = document.getElementById('id03');

	// 파라미터의 앞 노드를 range 시작 노드로 지정
	rangeObj.setStartBefore(id01Node);
	// 파라미터의 앞 노드를 RAnge끝 노드로 지정
	rangeObj.setEndBefore(id03Node);
	showLog();


	// 파라미터의 다음 노드를 Range 시작 노드로 지정
	rangeObj.setStartAfter(id01Node);
	// 파라미터의 다음 노드를 Range 끝 노드로 지정
	rangeObj.setEndAfter(id03Node);
	showLog();

	function showLog(){
		var fragmentObj = rangeObj.cloneContents();
		js.log(fragmentObj.textContent);
	}
}