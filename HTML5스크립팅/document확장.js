'use strict';
window.onload = function(){ 

	var sheetList = document.styleSheets;
	for(var k=0 ; k<sheetList.length ; k++){
		var sheet = sheetList[k];
		js.log(sheet.ownerNode.nodeName);
	}

	js.log(document.selectedStyleSheetSet);
	js.log(document.lastStyleSet);
	js.log(document.preferredStyleSheetSet);
	js.log(document.styleSheetSets);



}

