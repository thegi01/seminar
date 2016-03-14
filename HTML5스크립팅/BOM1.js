'use strict';
window.onload = function(){ 
	js.log('window.window : ', window.window);
	js.log('window.self : ', window.self);
	js.log('document : ', window.document);
	// 주로 하이퍼링크와 form 타깃을 설정할 떄 사용
	js.log('name : ', window.name);

	// window에 포함된 Document의 URL 정보를 제공한다.
	js.log('location : ', window.location);
	// window 오브젝트에 포함된 Document의 History를 제공한다. 
	// 25_load에서 다룬다. 
	js.log('history : ', window.history);

	js.log('');
	js.log('*** BarProp.visible ***');
	js.log('location.visible : ', window.location.visible);
	js.log('menubar.visible : ', window.menubar.visible);
	js.log('personalbar.visible : ', window.personalbar.visible);
	js.log('scrollbars.visible : ', window.scrollbars.visible);
	js.log('statusbar.visible : ', window.statusbar.visible);
	js.log('toolbar.visible : ', window.toolbar.visible);
	js.log('status : ', window.status);
}

