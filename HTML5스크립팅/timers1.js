'use strict';
window.onload = function(){ 
	
	var count = 0, timeID;
	document.getElementById('set').onclick = function(){
		timeID = window.setTimeout(exec, 1000);
	}
	function exec(){
		console.log(++count);
	}
	document.getElementById('clear').onclick = function(){
		window.clearTimeout(timeID);
		console.log('clearTimeout');
	}
}

