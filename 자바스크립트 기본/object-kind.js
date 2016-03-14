window.onload = function(){ 
	/*
	1. getElementsByTagName 은
	- 자바스크립트 메소드가 아니라 DOM 메소드이다.
	- 한편 DOM에서 제공하는 코드가 아닌
	- 
	*/
	var nodes = document.getElementsByTagName('script');
	for(var k=0; k<nodes.length; k++){
		js.log(nodes[k].nodeName);
	}
}
