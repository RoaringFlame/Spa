/*jslint    browser:true,   continue:true,
 decel:true,   indent:2,   maxerr:50,
 newcap:true,  nomen:true, plusplus:true,
 regexp:true,  sloppy:true,    vars:false,
 white:true
 */

var spa = (function () {
    var initModule = function ($container) {
        spa.shell.initModule($container);
    };
    return {initModule: initModule};
}());