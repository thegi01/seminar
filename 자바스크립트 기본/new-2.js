window.onload = function(){ 
	var obj = new Object(true);
	js.log(obj);

	js.log(new Object(undefined));
	js.log(new Object(null));

	var nodes = document.getElementsByTagName('scriipt');
	obj = new Object(nodes[0]);
	js.log(obj);
	js.log(nodes.nodeName); //수정요
}
