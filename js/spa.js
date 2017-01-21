/**
 * Created by Administrator on 2017/1/20.
 */
/*jslint    browser:true,   continue:true,
 decel:true,   indent:2,   maxerr:50,
 newcap:true,  nomen:true, plusplus:true,
 regexp:true,  sloppy:true,    vars:false,
 white:true
 */

var spa = (function () {
    var initModule = function ($container) {
        $container.html(
            '<h1 style="display:inline-block;margin:25px;">'
            + 'hello world!'
            + '</h1>'
        );
    };
    return {initModule: initModule};
}());