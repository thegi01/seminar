'use strict';
window.onload = function(){ 

	// range 오브젝트 생성
	var rangeObj = new Range();
	var id02Node = document.getElementById('id02');
	var id03Node = document.getElementById('id03');
	rangeObj.setStart(id02Node.firstChild, 3);
	rangeObj.setEnd(id03Node.firstChild, 2);

	js.log('startContainer : ', rangeObj.startContainer.textContent);
	js.log('endContainer : ', rangeObj.endContainer.textContent);
	js.log('startOffset : ', rangeObj.startOffset);
	js.log('endOffset : ', rangeObj.endOffset);
	js.log('collapsed : ', rangeObj.collapsed);
	js.log('commonAncestorContainer.id : ', rangeObj.commonAncestorContainer.id);
}