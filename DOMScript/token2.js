'use strict';

window.onload = function(){
	var element = document.getElementById("items");
	var tokens = element.classList;
	js.log('classList : ', tokens);
	js.log('length : ', tokens.length);

	document.getElementById('add').addEventListener('click', function(){
		tokens.add('책', '영화');
		showResult();
	}, false);
	document.getElementById('remove').addEventListener('click', function(){
		tokens.remove('music', '영화');
		showResult();
	}, false);
	document.getElementById('toggle').addEventListener('click', function(){
		tokens.toggle('노트북');
		showResult();
	}, false);

	function showResult(){
		js.log(' classList : ', tokens);
		js.log(' length : ', tokens.length);
		element.textContent  = tokens;
	}

}
