'use strict';

window.onload = function(){ 
	//DOM4

	// Custom Event에서 이벤트를 발생시켰을 때 호출될 리스너
	var node = document.getElementById('show');
	// CustomEvent()의 첫번째 파라미터에 지정한 이벤트 이름과 연동하여,
	// dispatchEvent()로 이벤트를 발생시키면 호출됩니다.
	node.addEventListener('showText', function(event){
		node.innerHTML = event.detail.message + '<br>' + 'total amount : ' + event.detail.total.amount;
	}, false);
	// 이벤트 오브젝트 생성
	var eventObj = new CustomEvent('showText', {
		bubbles : false,
		cancelable : false,
		detail : {
			message : '이벤트가 발생하여 출력됨',
			total : {
				price:100, qty:500, amount:500
			}
		}
	});
	// 이벤트를 발생시킵니다.
	node.dispatchEvent(eventObj);

}

//addEventListener