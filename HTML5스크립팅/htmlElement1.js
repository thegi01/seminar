'use strict';
window.onload = function(){

	var clickNode = document.getElementById('clickID');
	clickID.onclick = function(event){
		js.log('#clickID : ', event.target.id);
		js.log('pageX : ', event.pageX , ' pageY : ', event.pageY);
	}

	var sportsNode = document.getElementById('sports');
	document.getElementById('focusID').onclick = function(event){
		sportsNode.focus();
		js.log('focus()');
	}

	document.getElementById('blurID').onclick = function(event){
		sportsNode.blur();
		js.log('blur()');
	}


}

