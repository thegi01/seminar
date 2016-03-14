'use strict';


window.onload = function(){ 
	
var result = 'SPORTS'.match(/s/ig);
js.log(result);

var regexp = new RegExp('s', 'ig');
result = regexp.exec("SPORTS"); // exec() 메소드는 flag g를 작성하더라도 모두가 아닌 하나만 매치
js.log(result);

}





