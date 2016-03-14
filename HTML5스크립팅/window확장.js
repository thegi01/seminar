'use strict';
window.onload = function(){ 

	var el = document.getElementById('sports');

	var items = window.getComputedStyle(el);
	js.log('프로퍼티 수 : ', items.length);
	// inline에 작성한 스타일 프로퍼티
	// 디폴트 값을 대체하여 엘리먼트에 제공한 값이 반환됩니다.
	js.log(items.getPropertyValue('font-size'));
	// <style>에 작성한 프로퍼티
	js.log(items.getPropertyValue('background-color'));

}

