window.onload = function(){ 
	//http://ecma-international.org/ecma-262/5.1/#sec11.9.3
	var x, y=2;
	if(x == y) {
		if(typeof x == undefiend) return true;
		if(typeof x == null) return true;
		if(typeof x == number) {
			//If x is NaN, return false.
			//If y is NaN, return false.
			//If x is the same Number value as y, return true.
			//If x is +0 and y is −0, return true.
			//If x is −0 and y is +0, return true.
			//Return false.
		} else if(typeof x == string) {

		} else if(typeof x == boolean) {

		}
	} else {

	}
	js.log(x===y)
	
}
