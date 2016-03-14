'use strict';
window.onload = function(){ 

	var el = document.getElementById('sports');
	js.log('scrollWidth : ', el.scrollWidth);
	js.log('scrollHeight : ', el.scrollHeight);

	var leftNode = document.getElementById('leftID');
	var topNode = document.getElementById('topID');
	var scrollNode = document.getElementById('parentSports');
	scrollNode.addEventListener('scroll', function(e){
		topNode.textContent = 'scrollTop : ' + scrollNode.scrollTop;
		leftNode.textContent = 'scrollLeft : ' + scrollNode.scrollLeft;
	}, false);

	scrollNode.scrollTop = 70;
	scrollNode.scrollLeft = 100;
}

