window.onload = function(){ 

	function get(){
		if(arguments[0] !== undefined && arguments[1] !== undefined) {
			return arguments[0] * arguments[1];
		}
		return undefined;
	}
	js.log(get(100, 77));
}
