'use strict';
window.onload = function(){ 

	console.log('innerWidth', window.innerWidth); // 세로 스크롤바 포함 
	console.log('innerHeight', window.innerHeight); // 가로 스크롤바 초람
	console.log('scrollX', window.scrollX);
	console.log('scrollY', window.scrollY);
	console.log('pageXOffset', window.pageXOffset);
	console.log('pageYOffset', window.pageYOffset);
	// 크로스 브라우징 문제가 있으므로 scrollX, scrollY 대신에  pageXOffset, pageYOffset 

}

