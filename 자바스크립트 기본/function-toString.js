window.onload = function(){ 
	function getTotal(qty, price){
		var amount = qty * price;
		return amount - (amount/10);
	};

	console.log(getTotal.toString());

	//개발 환경이 좋지 않은 웹개발 초창기에는 디비깅용으로 사용

}
