'use strict';


window.onload = function(){ 
var result = 'SPORTS'.match(/s/i);
js.log(result);

var regexp = new RegExp('s', 'i');
result = regexp.test("SPORTS");
js.log(result);
}





