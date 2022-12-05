/**
 * KiS Framework, Created by Callan on 28/02/2017.
 */

(function() {
    //On window load
    window.addEventListener('load', function() {

        //http://stackoverflow.com/a/38573198/2030247
        var lastTouchEnd = 0;
        document.documentElement.addEventListener('touchend', function (event) {
          var now = (new Date()).getTime();
          if (now - lastTouchEnd <= 500) {
            event.preventDefault();
          }
          lastTouchEnd = now;
        }, false);

    });

}());
