window.onload = function(){ 
	/*start;
	for(var k=0; k<5 ; k++){
		js.log("k : " + k + m + ' value : ' +value);
		m=0;
		for(; m<3 ; m++){
			if(value ===3){
				break start;
			}
			value = value + 1;
		}
	}
	js.log('end');*/

	var value = 0;
	outLbael : {
		for(var k=0; k<5 ; k++){
			js.log('in: ' + value);

			if(k===1) break outLbael;

			value = value +1;
		}
	}
	js.log('end');
}
