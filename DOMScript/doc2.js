'use strict';
window.onload = function(){ 
	js.log('URL : ', document.URL);
	// IE : window.location.href
	js.log('documentURI : ', document.documentURI);
	// document.dafaultView.location.origin과 같음
	js.log('origin : ', document.origin);

	// strict mode : CSS1Compat, quirks mode : BackCompat
	js.log('compatMode : ', document.compatMode);
	// IE<9 : document.character
	js.log('characterSet : ', document.characterSet);
	js.log('contentType : ', document.contentType);
	// HTMLHtmlElement 반환
	js.log('documentElement.nodeName : ', document.documentElement.nodeName);

}