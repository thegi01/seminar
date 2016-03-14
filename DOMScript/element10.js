'use strict';
window.onload = function(){ 

	var sportsNode = document.getElementById('sports');
	sportsNode.addEventListener('click', clickSports, false);

	function clickSports(){
		var replace = document.createElement('div');
		replace.textContent = '대체한 노드';
		replace.setAttribute('class', 'replaceClass');


		var wrapNode = document.getElementById('wrap');
		var el = document.getElementById('sports');
		wrapNode.replaceChild(replace, el);

		js.log(el.id);
	}

}