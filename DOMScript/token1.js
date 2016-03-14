'use strict';

window.onload = function(){
	var tokens = document.getElementById("sports").classList;
	js.log('classList : ', tokens);

	js.log('length : ', tokens.length);
	js.log('item(1) : ', tokens.item(1));

	js.log('contains(one) : ', tokens.contains('one'));
	js.log('contains(five) : ', tokens.contains('five'));

}
