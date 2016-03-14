'use strict';
window.onload = function(){ 

	var nodes = document.getElementById('sports').children;
	js.log('length : ', nodes.length);
	js.log("nodes.item(1).id : ", nodes.item(1).id);
	js.log("nodes[0].id : ", nodes[0].id);

	js.log("4번 : ", nodes.namedItem("baseball").id);
	js.log("5번 : ", nodes.namedItem("swimName").textContent);

/*...
뒤에 못 적음
...*/

	

	

}