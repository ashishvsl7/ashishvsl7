/**
 * KiS Framework, Created by Tom on 14/07/2016.
 */
function MenuTabSet(navTarget, pageView) {

    var navTarget_ = navTarget;
    var pageView_ = pageView;


    function initClass_() {

        $(pageView_).css({

        });

        $(navTarget_).on('touchstart click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            //custom code here
            soundManager_.playSound("click");
            activateTab_($(this).index());


        });


    }

    function activateTab_(tab) {

        //If "NEW_UI"
        if (ReelConfig.newUI) {

            //If user not exiting menu
            if (tab !== 6) {

        $(navTarget_).removeClass("active");
        $(navTarget_).eq(tab).addClass("active");

        fadeElement($(pageView_), 'out', function() {
            fadeElement($(pageView_).eq(tab), 'in');
        });

    }

        }

        //Old UI
        else {

            $(navTarget_).removeClass("active");
            $(navTarget_).eq(tab).addClass("active");

            fadeElement($(pageView_), 'out', function() {
                fadeElement($(pageView_).eq(tab), 'in');
            });

        }

    }


    var me = {

        activateTab: activateTab_

    }

    initClass_();

    return me;
}