'use strict';


window.onload = function(){ 
var s = 'ABCDE ABCXE';
var result = s.match(/bc|de/ig); //BC, DE, BC
js.log(result);
result = s.match(/a.cd|b.x./ig); //ABCD, BCXE
js.log(result);
}





