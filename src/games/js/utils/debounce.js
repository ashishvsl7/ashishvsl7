/**
 * Prevent firing of a given function with a given time period
 * Created by Joe Thompson on 17/06/2019
 */
function Debounce(func, debounce) {

    var _args;
    var _debounce;
    var _fire = true;
    var _func;

    function _init(func_, debounce_) {

        _func = func_; //Initialise function to debounce

        //If debounce period specified
        if (debounce) {
            _debounce = debounce_; //Set debounce
        }

        //Set default debounce period
        else {
            _debounce = 250;
        }

    }

    function debounce_() {

        //Promise for debounce
        return new Promise(function(resolve, reject) {

            //Wait for debounce period
            setTimeout(function() {

                _fire = true //Re-enable firing
                resolve()    //Resolve Promise

            }, _debounce);

        });

    }

    function fire_(args_) {

        //If debouncing
        if (_fire) {

            _fire = false; //Begin debounce period
            debounce_();   //Perform debounce
            _func(args_);  //Execute function

        }

    }

    function guaranteedFire_(arg_) {

        arg_ = arg_; //Store most recent arguments

        //Check if debouncing
        if (_fire) {

            _fire = false; //Begin debounce period

            //Perform debounce
            debounce_().then(function() {
                _func(arg_);
            });

        }

    }

    var me = {

        fire: fire_,
        guaranteedFire: guaranteedFire_

    }

    _init(func, debounce);

    return me;
    
}