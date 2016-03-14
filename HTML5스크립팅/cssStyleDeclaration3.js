'use strict';
window.onload = function(){ 
	// setProperty(), removeProperty()
	var styeObj = document.getElementById('csssytle').style;
	js.log('변경 전 cssText : ', styeObj.cssText);

	// setProperty()
	styeObj.setProperty('font-weight', 'bold', 'important');
	js.log('setProperty(font-weight) 후 : ', styeObj.cssText);
	// removeProperty()
	var remove = styeObj.removeProperty("fontSize");
	js.log('removeProperty(fontSize) : ', remove);
	remove = styeObj.removeProperty('font-size');
	js.log('removeProperty(font-size) : ', remove);

	// add
	document.getElementById('csssytle').style['padding-top'] = '100px';
	document.getElementById('csssytle').style.paddingLeft = '150px';


}

