/**
 * KiS Framework, Created by Tom on 14/07/2016.
 */
function SessionTimer() {


    var levelThreeOpen = false;
    var sessionCounter = 1;
    var realityMessage = null;

    var ukRegs = loginVars.getRegParams();
    var gameStartTime = new Date().getTime() - (Number(ukRegs.realitycheck_uk_elapsed)*1000);

    function realityTimeout() {

        logger("doing reality timeout check " + ukRegs.jurisdiction);

        if (limitLegal(ukRegs.realitycheck_uk_limit) && !elapsedLegal(ukRegs.realitycheck_uk_elapsed)) {
            ukRegs.realitycheck_uk_elapsed = "0"; //defaukt to 0
            gameStartTime = new Date().getTime();
        }

        if (!paramLegal(ukRegs.jurisdiction) || !limitLegal(ukRegs.realitycheck_uk_limit) || !elapsedLegal(ukRegs.realitycheck_uk_elapsed)) {
            //no need for reality check
            gameClass_.setMessageOnOff(false);
        } else {
            var timeToSession = Number(ukRegs.realitycheck_uk_limit) - Number(ukRegs.realitycheck_uk_elapsed);

            if (timeToSession <= 0) {
                realityChekPostponed=false;
                showRealityCheck();

            } else {

                setTimeout(function() {
                    realityChekPostponed=false;
                    showRealityCheck();

                }, timeToSession * 1000);

            }

        }

    }

    var realityChekPostponed=false;
    function showRealityCheck() {
        if (buttonManager_.getButton(frameworkSettings.buttons.spinButton.id).isEnable()==false ) {
            if( realityChekPostponed==false) { //toggling AP only one time while waiting for spi to end
                console.log("show reality ")
                //game spining but just in case turning AP off
                if (autoPlayManager_.getIsInAutoPlay()) {
                    autoPlayManager_.toggleAutoPlay();
                }
                framework.setAutoPlayState(0);
            }
            realityChekPostponed=true;
            setTimeout(showRealityCheck,500);
            return;
        }
        if (realityMessage!=undefined) realityMessage.destroy(); //prevent more window on top which can't be closed
        if (ReelConfig.newUI && !framework.isTouch()) {
            window.newUI.autospin().state = 'START';
        }
        gameClass_.setMessageOnOff(true);
        document.removeEventListener("click", showRealityCheck);

        var sTime = (new Date().getTime() - gameStartTime)/1000;

        var t = "" + sTime;

        var sessionTimer = t.toHHMMSS();

        var buttons = [];

        var title = "";//Translate.do("Whoooaaaaa")
        var message = "<p>"+Translate.do("The time limit you have set has expired, we recommend that you take a short break before continuing.")+"</p>";

        message+="<p>"+Translate.do("You have been playing for")+": "+sessionTimer+"</p>";

        var buttons = [
            {
                label:Translate.do("Continue Playing"),
                action:function() {
                    gameClass_.setMessageOnOff(false);
                    realityMessage.destroy();
                    keepPlayingGame();

                }
            },
            {
                label:Translate.do("Exit Game"),
                action:function() {

                    endGame();

                }
            }
        ];

        //if (paramLegal(ukRegs.realitycheck_uk_history)) {

        var but = {
            label:Translate.do("Account History"),
            action:function() {
                if (!paramLegal(ukRegs.realitycheck_uk_history)) {
                    realityMessage.destroy();
                }
                showGameHistory();

            }
        };

        buttons.splice(1, 0, but);
        //}

        realityMessage = new MessageScreen(message, "message", title, buttons, false, true);

    }

    function showGameHistory() {
        if (paramLegal(ukRegs.realitycheck_uk_history)) {

            var win = window.open(ukRegs.realitycheck_uk_history, "_blank");
            if ( gameParams.clientName != undefined && gameParams.clientName.indexOf("NYX") >=0 && Math.abs(gameParams.site) == 417){
                //do nothing, let's see if it fixes the empty page with no reality check
            }else{
                win.focus();
            }

            return ;
            showRealityCheck();

        } else {

            //open in game account history

            framework.getMenu().showHistory(_callback, true); //Show history

            //Re-show reality check on close
            function _callback() {
                realityMessage.destroy();
                showRealityCheck();
            }

        }
    }


    function endGame() {
        buttonManager_.applyHide();
        var url = gameParams.path + "/realityChoice.jsp?rPage=" + ukRegs.realitycheck_uk_exit;

        $.post(url, {
            func: "endGame"
        }, function(response) {

            f1x2.clientWrapperInit.send('game-close');

            if (f1x2.clientWrapperInit.doLobbyURLNavigate) {
                if (paramLegal(gameParams.lobbyurl)) {
                    //adam asked to change it for GAN on the 13/08/2021 on private con on slack , it was: top.location.href = gameParams.lobbyurl;
                    top.location.href = decodeURIComponent(gameParams.lobbyurl);
                } else {
                    top.location.href = "http://www.gamblingcommission.gov.uk/";
                }
            }

        }, "xml")

            .fail(function() {

                f1x2.clientWrapperInit.send('game-close');

                if (f1x2.clientWrapperInit.doLobbyURLNavigate) {
                    if (paramLegal(gameParams.lobbyurl)) {
                        top.location.href = gameParams.lobbyurl;
                    } else {
                        top.location.href = "http://www.gamblingcommission.gov.uk/";
                    }
                }

            });


        realityMessage.destroy();
    }


    function keepPlayingGame() {

        var page = gameParams.path + "/realityChoice.jsp?rPage=" + ukRegs.realitycheck_uk_proceed;

        sessionCounter++;

        $.post(page, {
            func: "keepPlayingGame"
        }, function(response) {

            ukRegs.realitycheck_uk_elapsed = 0;
            realityTimeout();

        }, "xml")

            .fail(function() {
                //failed lets keep playing game anyway and wait for next message
                ukRegs.realitycheck_uk_elapsed = 0;
                realityTimeout();

            });

    }


    function limitLegal(input) {

        if (paramLegal(input) && !isNaN(input)) {

            if (input > 0) {
                return true;
            }
        } else {
            return false;
        }
    }

    function elapsedLegal(input) {

        if (paramLegal(input) && !isNaN(input)) {

            return true;

        } else {
            return false;
        }
    }


    function paramLegal(input) {

        if (!input) {
            return false;
        }

        if (input === "none" || input === "null" || input === "" || input === null || input === undefined  || input === window.location.href) {
            return false;
        }

        return true;
    }


    String.prototype.toHHMMSS = function() {
        var sec_num = parseInt(this, 10); // don't forget the second param
        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours < 10) { hours = "0" + hours; }
        if (minutes < 10) { minutes = "0" + minutes; }
        if (seconds < 10) { seconds = "0" + seconds; }
        var time = hours + ':' + minutes + ':' + seconds;
        return time;
    };

    realityTimeout();//call

}
