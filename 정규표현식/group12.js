'use strict';
window.onload = function(){ 

var result = 'ABCDEF'.match(/AB(?!EF)/);
js.log(result);

result = 'ABCDEF'.match(/AB(?!CD)/);
js.log(result);


}


