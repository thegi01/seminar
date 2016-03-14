'use strict';
window.onload = function(){ 


	js.log('locatin : ', document.location);
	js.log('domain : ', document.domain);
	js.log('referrer : ', document.referrer);

	// 크롬 미지원, 파이어폭스 지원
	document.cookie = "book=책";
	js.log('cookie : ', document.cookie);

	js.log('lastModified : ', document.lastModified);
	js.log('readyState : ', document.readyState);

}

