window.onload = function(){ 

	var bonus = {
		value : 123,
		get : function(){
			return this.value;
		}
	};
	console.log(bonus.get());

	//var fnObj = bonus.get.bind({value : 456});
	var fnObj = bonus.get.bind();
	console.log(typeof fnObj);
	console.log(fnObj());

	fnObj = bonus.get.bind(bonus);
	console.log(fnObj());
}
