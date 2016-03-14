'use strict';
window.onload = function(){ 
	
	var encodeValue = window.btoa("abcde 12345");
	js.log("base64 인코딩 : ", encodeValue);

	var decodeValue = window.atob(encodeValue);
	js.log("base64 디코딩 : ", decodeValue);
}

