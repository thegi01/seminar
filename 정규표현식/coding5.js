'use strict';
window.onload = function(){ 

var pattern = /(^\w+)(\w{4})/;

function insert(value){
	var str = value.toString();
	if(str.length>10 && str.length<=50) {
		while(pattern.test(str)) {
			str = str.replace(pattern, '$1' + '##' + '$2');
		}
	}
	return str;
}

var result = insert('adll9elns7eldggw66gge');
js.log(result);

}