'use strict';
window.onload = function(){ 


	js.log('dir : ', document.dir);
	js.log('head.nodeName : ', document.head.nodeName);
	js.log('title : ', document.title);
	js.log('body.nodeName : ', document.body.nodeName);
	js.log('currentScript : ', document.currentScript);

	var nodes = document.images;
	for(var k=0 ; k<nodes.length ; k++){
		js.log('nodes[k].nodeName : ', nodes[k].nodeName);
	}
	nodes = document.getElementsByName('sports');
	for(var k=0 ; k<nodes.length ; k++){
		js.log('nodes[k].type : ', nodes[k].type);
	}

}

