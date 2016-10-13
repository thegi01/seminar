window.onload = function(){ 
	var output = [];
	output.push('<ul>');
	for(var i=1; i<=10; i++){
		output.push('<li id=id' + i + '>id' + i + '</li>');
	}
	output.push('</ul>');
	document.body.innerHTML = output.join('');

}
