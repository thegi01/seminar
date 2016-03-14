window.onload = function(){ 
	function isContain(value, compare, start) {
		return value.indexOf(compare, start) > -1;
	}

	var result = isContain('12345', 3, 0);
	js.log(result ? ' 있음' : '없음');
	js.log(isContain('12345', 3, 11) ? '있음' : '없음');
}
