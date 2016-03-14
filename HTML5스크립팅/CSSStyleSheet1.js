'use strict';
window.onload = function(){ 

	var sheetObj = document.getElementById('styleNode').sheet;

	var ruleList = sheetObj.cssRules;
	for(var k=0 ; k<ruleList.length ; k++){
		js.log("cssRules.cssText : ", ruleList[k].cssText);
	}


}

