/**
 * KiS Framework, Created by Fabry on 23/02/2016.
 */
function GuiFullScreen() {
    var isFull = false;

    var screenHeight = 0;

    function initClass_() {
        TweenMax.set($("#swipe__up__to__hide"), { autoAlpha: 0 });
        screenHeight = window.screen.height;

        $.fn.scrollEnd = function(a, b) {
            $(this).scroll(function() {
                var c = $(this);
                c.data("scrollTimeout") && clearTimeout(c.data("scrollTimeout")),
                    c.data("scrollTimeout", setTimeout(a, b))
            })
        }
        if (useSwipeMessage_()) {
            $(window).scroll(

                iosSwipeCheck_()
            );
        }

        $(window).scrollEnd(function() {
            $(document).scrollTop(0);
            // your code-----
            iosSwipeCheck_();
            if (useSwipeMessage_()) {
                var divgame = document.getElementById("gameContainer");
                divgame.style.width = window.innerWidth + "px";
                divgame.style.height = window.innerHeight + "px";
            }
            //$(window).resize();
        }, 100);

        //just handle full screen
        if (framework.fullscreenEnabled()) { //only ask if device supports fulllscreen api (ios does not) and we are mobile
            askFull_();
        } else {
            //if (framework != undefined) setTimeout(framework.showFramework,1000);
        }
    }

    function askFull_() {
        if (isFull) {
            return;
        }
        //jask fror full screen

        goFull2_();
    }

    function goFull2_() {
        goFull_();
    }

    function stopFull2_() {
        stopFull_();
        if (gameClass_ != undefined && gameClass_.getOnGame()) framework.showFramework();
    }

    function goFull_() {
        if (skipFullFlag_)return;
        if(/iPad/.test(navigator.platform) || navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform) && iPadFullScrrenBlock_()==true)return;
        isFull = true;
        document.body.addEventListener('click', checkAndRequest_, false);
        document.body.addEventListener('touchend', checkAndRequest_);
        document.getElementById('autoButtonSelect').addEventListener('touchend', checkAndRequest_);
        document.getElementById('spinButtonSelect').addEventListener('touchend', checkAndRequest_);
        document.getElementById('stopButtonSelect').addEventListener('touchend', checkAndRequest_);
    }

    function none_() {
        stopFull_;
    }

    function stopFull_() {
        if(/iPad/.test(navigator.platform) || navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform) && iPadFullScrrenBlock_()==true)return;
        //now we don't allow to exit full screen
        if (isFull) return;
        isFull = false;
        screenfull.exit();
    }


    function swipeRequest_() {

        iosSwipeCheck_();

    }

    function useSwipeMessage_() {
        var ua = window.navigator.userAgent;
        if (ua.indexOf('iPhone') !== -1 && ua.indexOf('Safari') !== -1) {

            return true;
        }

        return false;
    }

    function iosSwipeCheck_() {

        if (useSwipeMessage_()) {

            var bodyHeight = document.body.offsetHeight;
            var windowHeight = window.innerHeight;

            var isLandscape = window.innerWidth > window.innerHeight;
            var showTooltip = (windowHeight < bodyHeight) && isLandscape;

            //if (!isLandscape) return;

            if (showTooltip) {
                $('body').unbind('touchmove');
                //$("#swipe__up__to__hide").css("visibility", "visible");]
                $("#swipe__up__to__hide").show();
                TweenMax.to($("#swipe__up__to__hide"), 0.3, { autoAlpha: 1 });
                TweenMax.to($("#swipe__up__to__hide"), 2, { y: -75, repeat: -1, yoyo: true, repeatDelay: 0.5 });
                //$("#content").hide();
            } else {
                //$("#swipe__up__to__hide").css("visibility", "hidden");
                TweenMax.to($("#swipe__up__to__hide"), 0.2, { autoAlpha: 0, delay: 0.2, onComplete: resetBodyHeight });
                //$("#content").show();
                $(document).scrollTop(0);

                document.body.addEventListener('touchmove', function(e) { e.preventDefault() }, { passive: true }); // fix for preventDefault not working anymore
            }

        }

    }


    function resetBodyHeight() {

        TweenMax.killTweensOf($("#swipe__up__to__hide"));
        TweenMax.set($("#swipe__up__to__hide"), { y: 0 });
        TweenMax.set($("#swipe__up__to__hide"), { display: "none" });

    }

    function checkAndRequest_() {

        if (!screenfull.isFullscreen) {
            if (screenfull.request!=undefined)screenfull.request(document.body);
        }

    }

    var me = {
        askFull: askFull_,
        stopFull: stopFull_,
        swipeRequest: swipeRequest_,
        getIsFull: function() {
            return isFull;
        }

    };
    initClass_();
    return me;
}
