'use strict';
window.onload = function(){ 
	// 브라우저에서 Java 실행 가능(enabled) 여부. true : 불가 , false : 가능
	js.log('javaEnabled() : ', window.navigator.javaEnabled());
	// 플러그이니 전체
	var plugins = window.navigator.plugins;
	js.log('plugins.length : ', plugins.length);
	// 두 번째 플러그인
	var obj = plugins.item(1);
	js.log('name : ', obj.name);
	js.log('description : ', obj.description);
	js.log('filename : ', obj.filename);
	js.log('length : ', obj.length);

}

