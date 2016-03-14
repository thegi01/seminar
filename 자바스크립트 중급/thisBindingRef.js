window.onload = function(){ 

	/*price = 200;
	var globalPrice = this.price;
	this.qty = 123;
	console.log(this === window);
	console.log(window.qty);*/

	function get(){
		console.log('사과');
	}
	var sports = function(){
		function get(){
			console.log('애플');
		}
		this.get();
		get();
	}
	sports();
}
