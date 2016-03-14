'use strict';
window.onload = function(){ 

var result = 'A12A 12B 12A'.match(/12\B/g);
js.log(result);
result = 'A12 B12 12'.match(/12\B/g);
js.log(result);
result = 'A12 12 C12'.match(/\B12/g);
js.log(result);
result = 'A12B 12D E12F'.match(/\B12\B/g);
js.log(result);


}





