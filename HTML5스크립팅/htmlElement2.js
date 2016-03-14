'use strict';
window.onload = function(){

	var clickNode = document.getElementById('clickID');
	document.getElementById('clickID').onclick = function(event){
		var obj = new Image();
		obj.src = '';
		obj.id = 'imageID';

		var el = document.getElementById('addImage');
		el.appendChild(obj);

		// 로딩 시간이 걸리므로 이 시점에는 false 출력
		js.log('complete : ', obj.complete);

		// 1초 후에 완료를 체크하면 true 출력
		setTimeout(function(){
			js.log('1초후 체크 : ', obj.complete);
		}, 1000);

	}

}

