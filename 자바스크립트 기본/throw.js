window.onload = function(){ 
	/*var sports, result;
	try{
		if(!sports) {
			throw 'sports에 값이 없습니다.';
		}
		result = sports;
	} catch(e) { 
		js.log(e);
	} */
	var sports;
	try{
		if(!sports) {
			throw new Error('sports에 값이 없습니다.');
		}
	} catch(e){ 
		js.log(e.message);
	} 
}
