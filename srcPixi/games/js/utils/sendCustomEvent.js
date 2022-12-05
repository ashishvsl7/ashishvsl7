(function() {

    //Send a custom event
    window.sendCustomEvent = function(_name, _params) {

        //Not on Opera Mini
        if (window.CustomEvent) {

            var evt; //Event object to send

            //IE
            if (typeof window.CustomEvent === 'object') {

                //Create event
                evt = document.createEvent('CustomEvent');
                evt.initCustomEvent(_name, true, true, _params);

            }
            //Things that aren't shit
            else {
                evt = new CustomEvent(_name, _params); //Create event
            }

            window.dispatchEvent(evt); //Dispatch event

        }

    }

}());
