'use strict';
window.onload = function(){ 

var result = 'CD_AB_EF'.search(/AB/);
js.log(result);
result = 'CD_AB_EF'.search(/AB/g);
js.log(result);
result = 'AB_CD_CD'.search(/CD$/);
js.log(result);
result = 'AB_CD'.search(/EF/g);
js.log(result);


}