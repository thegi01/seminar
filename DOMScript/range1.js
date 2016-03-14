'use strict';
window.onload = function(){ 
	document.getElementById('clickID').onclick = function(event){
		var rangeObj = new Range();
		var beginNode = document.getElementById('beginID');
		var strongNode = document.getElementById('strongID');

		rangeObj.setStart(beginNode.firstChild, 2);
		rangeObj.setEnd(strongNode.firstChild, 3);

		var fragmentObj = rangeObj.cloneContents();
		js.log(fragmentObj.textContent);

	}
}