'use strict';
window.onload = function(){ 
	// MimeType 전체v
	var types = window.navigator.mimeTypes;
	js.log('mimeTypes.length : ', types.length);
	// 두 번째 플러그인
	var obj = types.item(6);
	js.log('type : ', obj.type);
	js.log('description : ', obj.description);
	js.log('suffixes : ', obj.suffixes);
	js.log('enabledPlugin.name : ', obj.enabledPlugin.name);

}

