window.onload = function(){ 
	var odd=0, 
		even=0, 
		total=0;
	for(var i=1; i<=50; i++){
		 if(i%2) odd += i;
		 else even += i;
		 total += i;
	}
	js.log('누적한 홀수 : ', odd);
	js.log('누적한 짝수 : ', even);
	js.log('전체 누적 : ', total);
}
