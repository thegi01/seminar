'use strict';
window.onload = function(){ 
	
	var obj = window.navigator;
	console.log('appCodeName : ', obj.appCodeName);
	console.log('appName : ', obj.appName);
	console.log('appVersion : ', obj.appVersion);
	console.log('platform : ', obj.platform);
	console.log('product : ', obj.product);
	console.log('productSub : ', obj.productSub);

	console.log('userAgent : ', obj.userAgent);
	console.log('vendor : ', obj.vendor);
	console.log('vendorSub : ', obj.vendorSub);
	console.log('language : ', obj.language);
	console.log('cookieEnabled : ', obj.cookieEnabled);
	
}

