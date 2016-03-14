'use strict';
window.onload = function(){ 
	// getPropertyValue(), getPropertyPriority()
	var styeObj = document.getElementById('csssytle').style;
	// getPropertyValue()
	for(var k=0 ; k<styeObj.length ; k++){
		var key = styeObj.item(k);
		var value = styeObj.getPropertyValue(key);
		js.log('value : ', key, ', ', value);
	}
	// getPropertyPriority()
	for(var k=0 ; k<styeObj.length ; k++){
		var key = styeObj.item(k);
		var value = styeObj.getPropertyPriority(key);
		js.log('priority : ', key, ', ', value);
	}
}

