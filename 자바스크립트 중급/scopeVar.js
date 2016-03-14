window.onload = function(){ 

	'use strict';
	var outside = 'global';
	var getValue = function(){
		inside = 'local';
		return inside;
	}
	js.log(getValue());

	// 변수명이 같으면 에러가 안남
	var side = 'global';
	var getValue = function(){
		side = 'local';
		return side;
	}
	js.log(getValue());
	js.log(side);
}
