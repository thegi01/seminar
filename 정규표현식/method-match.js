'use strict';
window.onload = function(){ 

var result = '34_12_56'.match(/12/);
js.log(result);
js.log(result.index);
js.log(result.input);

for(var name in result){
	js.log(name, ':', result[name]);
}

var result = '34_12_56'.match(/12/g);
js.log(result);
for(var name in result){
	js.log(name, ':', result[name]);
}
}





