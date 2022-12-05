/**
 * KiS Framework, Created by Tom on 14/08/2016.
 */
function RadioSwitch(label, isOn, action, container, numeric, _class) {

    var action_ = action;
    var label_ = label;
    var container_ = $(container);
    var isOn_ = isOn;
    var input;
    var permOn = isOn;

    function initClass_() {

        var setting = $('<li><label class="switch"><input type="checkbox"' + (_class ? ' class="' + _class + '"' : '') + '><div class="slider round"></div></label><label class="switch__name">'+label_+'</label>'+(numeric ? '<div id="' + numeric + '" class="auto__input"></div>' : '')+'</li>');
        container_.append(setting);//add to the container

        //If "NEW_UI" or game ID > x
        if (ReelConfig.newUI && framework.isTouch()) {
            window.newUI.orientation.children(container[0]) //Add orientation styling to menu
        }

        //Set listeners for clicking inputs
        $("#autoPlayWinLimit").on('touchstart', function(e) {

            e.stopPropagation();
            e.preventDefault();

            //Show grid input
            gridInput.show(function(value) {

                $("#autoPlayWinLimit").html(value); //When the value is confirmed, set input value
                autoPlayManager_.setSingleWinThreshold(Number(value)); //Update value in autoPlayManager

                //If "NEW_UI" or game ID > x
                if (ReelConfig.newUI && framework.isTouch()) {
                    document.getElementById('autoPlayWinLimit-new').innerHTML = value //Update new UI autoplay settings input value
                }

            });

        });

        $("#autoPlayCashLimit").on('touchstart', function(e) {

            e.stopPropagation();
            e.preventDefault();

            //Show grid input
            gridInput.show(function(value) {

                $("#autoPlayCashLimit").html(value); //When the value is confirmed, set input value
                autoPlayManager_.setWinThreshold(Number(value)); //Update value in autoPlayManager

                //If "NEW_UI" or game ID > x
                if (ReelConfig.newUI && framework.isTouch()) {
                    document.getElementById('autoPlayCashLimit-new').innerHTML = value //Update new UI autoplay settings input value
                }

            });

        });

        $("#autoPlayCashDownLimit").on('touchstart', function(e) {

            e.stopPropagation();
            e.preventDefault();

            //Show grid input
            gridInput.show(function(value) {

                $("#autoPlayCashDownLimit").html(value); //When the value is confirmed, set input value
                autoPlayManager_.setLoseThreshold(Number(value)); //Update value in autoPlayManager

                //If "NEW_UI" or game ID > x
                if (ReelConfig.newUI && framework.isTouch()) {
                    document.getElementById('autoPlayCashDownLimit-new').innerHTML = value //Update new UI autoplay settings input value
                }

            });

        });

        input = $(setting).find('input:checkbox');

        var toggle = $(setting).find("div.slider.round");

        $(input).prop("checked", isOn_ );

        //If desktop
        if (!framework.isTouch()) {

            //Old checkbox handler code
            $(input).change(function() {
                doSwitch_($(this).is(':checked'));
            });

        }

        //Mobile
        else {

            //On touchend event
            $(toggle).on("touchend mouseup", function(evt) {

                //If setting checked
                if (evt.currentTarget.previousSibling.checked) {

                    doSwitch_(false)    //Untoggle checkbox

                    //Prevent default behaviour of checkbox check NB: https://stackoverflow.com/questions/10610249/prevent-checkbox-from-ticking-checking-completely
                    event.preventDefault()
                    event.stopPropagation()
                    return false

                }

                //Setting not checked
                else if (!evt.currentTarget.previousSibling.checked) {

                    doSwitch_(true) //Toggle checkbox

                    //Prevent default behaviour of checkbox check NB: https://stackoverflow.com/questions/10610249/prevent-checkbox-from-ticking-checking-completely
                    event.preventDefault()
                    event.stopPropagation()
                    return false

                }
            })

        }


        //If "NEW_UI" or game ID > x
        if (!ReelConfig.newUI && /(android)/i.test(navigator.userAgent)) {

            //radio button android fix for samsung s8 (Playtech request)
            var xDown = null;
            var yDown = null;

            function getTouches(evt) {
                return evt.touches ||             // browser API
                    evt.originalEvent.touches; // jQuery
            }

            function handleTouchStart(evt) {
                console.log("handleTouchStart", evt);
                const firstTouch = getTouches(evt)[0];
                xDown = firstTouch.clientX;
                yDown = firstTouch.clientY;
            }

            function handleTouchMove(evt) {
                if (!xDown || !yDown) {
                    return;
                }
                console.log("handleTouchMove", evt);
                var firstTouch = getTouches(evt)[0];
                var xUp = firstTouch.clientX;
                var yUp = firstTouch.clientY;
                var xDiff = xDown - xUp;
                var yDiff = yDown - yUp;
                if (Math.abs(xDiff) > Math.abs(yDiff)) {
                    if (xDiff > 0) {
                        console.log("left swipe is checked? ", evt.currentTarget.previousSibling.checked);
                        if (evt.currentTarget.previousSibling.checked) {
                            $(evt.currentTarget.previousSibling).prop("checked", false);
                        }
                    } else {
                        console.log("right swipe is checked? ", evt.currentTarget.previousSibling.checked);
                        if (!evt.currentTarget.previousSibling.checked) {
                            $(evt.currentTarget.previousSibling).prop("checked", true);
                        }
                    }
                }
                /* reset values */
                xDown = null;
                yDown = null;
            }

            var toggle = $(setting).find("div.slider.round");
            $(toggle).on("touchstart", handleTouchStart);
            $(toggle).on("touchmove", handleTouchMove);
        }

    }

    function doSwitch_(isChecked){

        //If "NEW_UI" or game ID > x
        if (ReelConfig.newUI) {

            //If setting has possibility of being permanently on (true at beginning)
            if (permOn) {

                //If setting is one which can be permanent
                if (label === Translate.do('Stop if cash decreases by')) {
                    $(input).prop("checked", permOn) //Toggle setting as normal
                }

                //Setting is not permanently on
                else {
                    $(input).prop("checked", isChecked) //Make setting untoggleable
                }


            }

            //Setting cannot be permanently on
            else {
                $(input).prop("checked", isChecked); //Toggle setting as normal
            }

        }
        //old ui
        else {
            $(input).prop("checked", isChecked);
        }
        isOn_ = isChecked;
        action_(isChecked);

    }

    var me = {

        doSwitch:doSwitch_

    }

    initClass_();

    return me;
}
