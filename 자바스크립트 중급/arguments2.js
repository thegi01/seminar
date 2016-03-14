window.onload = function(){ 

	function get(){
		var k, key, param, total = 0;
		for(k=0 ; k<arguments.length ; k++){
			param = arguments[k];
			if(Array.isArray(param)) {
				param.forEach(function(value){
					total += value;
				});
				js.log('total : ', total);
			} else if(typeof param === 'object') {
				for(key in param){
					js.log(key, " : ", param[key]);
				}
			} else {
				js.log(param);
			}
		}
	}
	get({soccer : 11}, [1, 2, 3], 789);
}
