'use strict';
window.onload = function(){ 
	console.log('window.frames : ', window.frames);

	// iframe를 작성했으므로 1이 반환된다. 
	console.log('window.length : ', window.length);

	// pc에서 실행하면 권한 에러가 발생하므로 서버에서 실행해야한다.
	console.log('');
	console.log('----- window[0] -------');
	var zeroObj = window[0];
	console.log('window[0] : ', window[0]);
	console.log('window[0].innerWidth : ', window[0].innerWidth);
	console.log('window[0].innerHeight : ', window[0].innerHeight);

	console.log('');
	console.log('----- window[0].top -------');
	var zeroObj = window[0];
	console.log('window[0].top : ', zeroObj.top);
	console.log('window[0].top.innerWidth : ', zeroObj.innerWidth);

	console.log('');
	console.log('----- window[0].parent -------');
	console.log('window[0].parent : ', zeroObj.parent);
	console.log('window[0].parent.innerWidth : ', zeroObj.parent.innerWidth);
	console.log('window[0].parent.innerHeight : ', zeroObj.parent.innerHeight);

	console.log('');
	console.log('----- window -------');
	console.log('window.top : ', window.top);
	console.log('window.top.innerWidth : ', window.top.innerWidth);

	// 다른 window가 현재 window을 열었을 때 open한 window 반환
	// 다른 window가 열지 않은 window 이면 null 반환
	console.log('window[0].opener : ', zeroObj.opener);
	if(zeroObj.opener) {
		console.log('window[0].opener.innerWidth : ', zeroObj.opener.innerWidth);
	}
	console.log('');
	var elemnent = zeroObj.frameElement;
	console.log('window[0].frameElement.innerWidth : ', elemnent.width);

}

