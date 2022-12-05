(function () {

    //Fade a DOM element in or out
    function fadeElement(_elem, _mode, _callback) {

        var elem = $(_elem);
        var mode = (_mode === 'in' || _mode === true) ? 1 : ((_mode === 'out' || _mode === false) ? 0 : -1);
        var callback = _callback || function() {};

        if (elem && mode > -1) {

            logger('Fade Element', elem, mode);

            var fromVars = {};
            var toVars = {opacity: mode};
            var func, classFunc, display, visibility;

            if (mode === 1) {

                fromVars.opacity = 0;
                func = 'onStart';
                classFunc = 'remove';
                if (ReelConfig.newUI && (elem.attr('id') === 'settingsTabPage' || elem.attr('id') === 'gameHistoryPage')) {
                    display = 'flex'
                }

                else {
                display = 'block';
                }

                visibility = 'visible';

            }
            else {

                fromVars.opacity = 1;
                func = 'onComplete';
                classFunc = 'add';
                display = 'none';
                visibility = 'hidden';

            }

            toVars[func] = function() {

                elem.css('display', display);
                elem.css('visibility', visibility);
                elem[classFunc + 'Class']('hidden');

                callback();

            }

            TweenMax.fromTo(elem, 0.4, fromVars, toVars);

        }

    }

    window.fadeElement = fadeElement; //Assign function to namespace

})();
