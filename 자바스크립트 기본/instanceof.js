window.onload = function(){ 
	var obj = new String('baseball');

	js.log(obj == String);
	js.log(obj instanceof String);

	var Sports = function(){};
	Sports.prototype.getItem = function(){
		return 'baseball';
	}
	var sportsObj = new Sports();
	js.log(sportsObj instanceof Sports);
}
