'use strict';

window.onload = function(){ 

	// Custom Event에서 이벤트를 발생시켰을 때 호출될 리스너
	var node = document.getElementById('show');
	// initEvent()에서 지정한 이벤트 이름과 연동하여
	// dispatchEvent()로 이벤트를 발생시키면 호출됩니다.
	node.addEventListener('showText', function(event){
		node.textContent = event.myMemo;
	});

	document.getElementById('clickID').addEventListener('click', function(e){
		// 이벤트 오브젝트 생성
		var eventObj = document.createEvent('Event');
		// 이벤트 오브젝트 초기화
		eventObj.initEvent('showText', false, false);
		// Custom Event에 임의의 프로퍼티 이름을 지정할 수 있으며
		// 리스너에서 사용할 수 있습니다.
		eventObj.myMemo = '이벤트가 발생하여 출력됨';
		// 이벤트를 발생시킵니다.
		node.dispatchEvent(eventObj);
	}, false);

}

//addEventListener