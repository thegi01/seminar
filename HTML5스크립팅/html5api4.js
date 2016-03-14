'use strict';
window.onload = function(){

	var node = document.querySelector('[name=order]');
	document.querySelector('[type=submit]').onclick = function(e){
		node.setCustomValidity('');
		if(node.checkValidity()){
			// 메시지 표시를 위해 의도적으로 form을 전송하지 않은 것임
			e.preventDefault();
			console.log('입력 값 정상');
		} else {
			//e.preventDefault();
			// 표시할 메시지 변경
			node.setCustomValidity('작성한 메세지.. 값을 입력하세요..');
			console.log('에러 메시지 : ', node.validationMessage);
		}

	}

}

