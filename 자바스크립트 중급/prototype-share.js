window.onload = function(){ 

	var sports = function(){};
	sports.prototype.member = 123;
	var sportsObj = new sports();

	sports.prototype.getMember = function(){
		return this.member;
	}

	sportsObj.member  = 456;

	debugger;

	console.log(sportsObj.getMember());
	console.log('sportsObj.member', sportsObj.member);
	console.log('sportsObj.__proto__.member', sportsObj.__proto__.member);
	console.log('sportsObj.toString', sportsObj.toString);
}
