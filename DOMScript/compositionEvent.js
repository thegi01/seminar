'use strict';

window.onload = function(){
	// '한'을 입력하면 이벤트가 발생하여 값이 출력된다.
	// '한자'를 누르면 리스트가 표시되며 해당하는 것을 선택한다.
	var node = document.getElementById('inputID');
	node.focus();
	node.addEventListener('compositionstart', function(event){
		js.log('event.type : ', event.data);
	}, false);
	node.addEventListener('compositionupdate', function(event){
		js.log('event.type : ', event.data);
	}, false);
	node.addEventListener('compositionend', function(event){
		js.log('event.type : ', event.data);
	}, false);
}
