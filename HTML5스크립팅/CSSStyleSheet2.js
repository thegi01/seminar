'use strict';
window.onload = function(){ 

	var sheetObj = document.getElementById('styleNode').sheet;
	var ruleList = sheetObj.cssRules;
	for(var k=0 ; k<ruleList.length ; k++){
		js.log("변경 전 cssText : ", ruleList[k].cssText);
	}

	document.getElementById('insertDelete').addEventListener('click', function(){
		sheetObj.insertRule('#book {background-color:lime}', 1);
		sheetObj.deleteRule(0);
		for(var k=0 ; k<ruleList.length ; k++){
			js.log('변경 후 cssText : ', ruleList[k].cssText);
		}
	}, false)

	////////  CSSRule
	/*var cssRule = sheetObj.cssRules;
	for(var k=0 ; k<ruleList.length ; k++){
		js.log('selectorText : ', cssRule[k].selectorText);
	}

	var styleBlock = cssRule.style;
	for(var m=0 ; m<styleBlock.length ; m++){
		js.log('name : ', styleBlock[m]);
	}
*/



}

