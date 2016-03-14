'use strict';
	
/* 
1. pc에서 실행하면 online 상태인  true가 출력된다.
2. 연결된 상태에서 통신을 끊으면 
	onoffline이벤트가 발생하게 되며 false가 출력된다.
3. 다시 통신을 연결하면 online 이벤트가 발생한다.
*/
function showStatus(){
	js.log('onLine: ', window.navigator.onLine);
}

document.addEventListener("DOMContentLoaded", function(){
	var el = document.getElementsByTagName('body')[0];
	el.onload = function(event){
		js.log('type : ', event.type); 
		showStatus();
	}
	el.ononline = function(event){
		js.log('type : ', event.type); 
		showStatus();
	}
	el.onoffline = function(event){
		js.log('type : ', event.type); 
		showStatus();
	}
})

