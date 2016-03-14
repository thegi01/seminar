'use strict';
window.onload = function(){ 

var result = 'ABCC'.match(/AB(?=C)/);
js.log(result);

result = 'ABDCC'.match(/AB(?=C)/);
js.log(result);

result = 'ABCH'.match(/AB(?=C)CH/);
js.log(result);

}


