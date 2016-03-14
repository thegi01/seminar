'use strict';
window.onload = function(){ 

	var clickNode = document.getElementById('openID');
	clickNode.onclick = function(){
		document.open();
		document.write('<h1>open()과 write() 실행</h1>');
		document.write('<h2>writein</h2>');
		document.close();
	}
	
}

