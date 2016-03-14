window.onload = function(){ 
	var sports, result;
	try{
		js.log('try');
		sports = baseball;
	} catch(e) { //e : error object, e, err
		result = 'error';
		js.log('catch');
	} finally {
		js.log('finally');
		js.log(result);
	}
}
