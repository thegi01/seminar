'use strict';
window.onload = function(){

	var node = document.querySelector('progress');

	js.log('value : ', node.value);
	js.log('max : ', node.max);
	js.log('position : ', node.position);

	var rateNode = document.getElementById('rate');
	document.querySelector('button').onclick = function(){
		node.value = Number(node.value) + 10;
		rateNode.textContent = '진행 ' + (node.value*100/node.max) + '%';
		js.log('position : ', node.position);
	}

}

