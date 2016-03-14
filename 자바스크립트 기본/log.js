var js = {lineNumber:1};
js.log = function(text) {
	var k, node, child, lineText;

	node = document.getElementById('result');
	if(!node){
		node = document.createElement('div');
		node.id = 'result';
		document.body.appendChild(node);
	}
	child = document.createElement('div');

	lineText = js.lineNumber + '.';
	if(Array.isArray(text)) {
		lineText += '[';
		for(var k=0; k<text.length; k++) {
			lineText += text[k] === ''? '"' : text[k];
			if(k<(text.length-1)){
				lineText += ',';
			}
		}
		lineText += ']';
	} else {
		lineText += text;
	}

	if(arguments.length > 1) {
		for(var k=1; k<arguments.length; k++) {
			lineText += arguments[k];
		}
	}
	child.innerText === undefined ? child.textContent = lineText : child.innerText = lineText; //ie
	node.appendChild(child);
	js.lineNumber += 1;
	return this;
};