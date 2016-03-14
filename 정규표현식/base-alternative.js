'use strict';


window.onload = function(){ 

var result = '12_34_56'.match(/23|34|56/);
js.log(result);
result = '12_34_56'.match(/23|56|34/);
js.log(result);
result = '12_34_56'.match(/12|34|56/g);
js.log(result);
result = /cjbc|a|abc/.exec('abc');
js.log(result);


}





