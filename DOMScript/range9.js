'use strict';
window.onload = function(){ 

	// range 오브젝트 생성
	var rangeObj = new Range();
	var id02Node = document.getElementById('id02');

	rangeObj	.selectNode(id02Node);

	document.getElementById('insert').onclick = function(event){
		var newNode = document.createElement('strong');
		// 텍스트는 무시된다.
		newNode.textContent = '추가한 것';
		// <strong>#id02</strong> 형태가 된다.
		rangeObj.surroundContents(newNode);
		var fragmentObj = rangeObj.cloneContents();
		js.log('surround 후 : ', fragmentObj.textContent);
	}
	document.getElementById('extract').onclick = function(event){
		var extract = rangeObj.extractContents();
		js.log('surround 후 : ', extract.textContent);
	}

	


}