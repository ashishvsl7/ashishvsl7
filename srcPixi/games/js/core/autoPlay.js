/**
 * KiS Framework, Created by Fabry on 10/03/2016..
 */
function AutoPlay(gameRef, gameClass) {
    var game_ = gameRef;
    var gameClass_ = gameClass;
    var startBalance_;
    var lastWin_;
    var lastBal;
    var autoPlayNum_ = 500;
    var currentApNum_ = 0;
    var isAutoPlay_ = false;
    var stopOnFeature = false;
    var isFeature_ = false;//to do needs triggering in feature.
    var stopOnWin = false;
    var stopOnFreeSpin = false;
    var stopOnLose = loginVars.getRegParams().jurisdiction === 'uk';
    var stopOnAnyWin = false;
    var stopOnSingleWin = false;
    //todo stop creteria
    var winTH = -100;
    var loseTH = -100;
    var singleWinTH = -100;
    var bonusTrigger = false;
    var fsWon = false;
    var iTout_=0;
    var autoplayMessage_="";
    var canAP_=true;

    logger('HERE:', loginVars.getRegParams().jurisdiction, loginVars.getRegParams().jurisdiction === 'uk', stopOnLose);
    if (stopOnLose) {

        $('#autoplayStopOnCashDown').addClass('active');
        $('#autoplayStopOnCashDownMobile').addClass('active');

        $('#autoplayStopOnCashDown').prop('checked', true);
        $('#autoplayStopOnCashDownMobile').prop('checked', true);

    }
    else {

        $('#autoplayStopOnCashDown').prop('checked', false);
        $('#autoplayStopOnCashDownMobile').prop('checked', false);

    }

    function initClass_ () {
    }

    function toggleAutoPlay_ () {
        //activate and deactivate AP function (called on AP button start/stop)
        if (isAutoPlay_) {
            if (getIsInAutoPlay_() && stopOnFeature && isFeature_) {
                framework.updateSmallMessageText(Translate.do("Autoplay stopped, you entered a feature."));
            }
            clearInterval(iTout_);
            isAutoPlay_ = false;
            currentApNum_=autoPlayNum_;
            if(buttonManager_.getButton(frameworkSettings.buttons.autoButton.id)!=undefined)buttonManager_.getButton(frameworkSettings.buttons.autoButton.id).setText(autoPlayNum_);
       } else if ( gameClass_.isSpinning()==false && gameClass_.getIsTumbling()==false) {
            autoplayMessage_="";
            currentApNum_ = 0;
            isAutoPlay_ = true;
            buttonManager_.applyState("SPIN");
            startBalance_ = Number(Util.formatNumber(balanceManager_.getTrueBalance(),2));
            lastBal = startBalance_-Number(balanceManager_.getCoinValue()) ;
            iTout_=setTimeout(gameClass_.realDoSpin,1000,[false]);
        }
        logger("toggle autoplay "+isAutoPlay_)
    }

    function updateApNum_(){
        var fs=freeSpinsManager_.getIsInFs();
        var fsWon=freeSpinsManager_.getFsWon();

        //TODO

        //If "NEW_UI"
        if (ReelConfig.newUI) {

            //If in autoplay
            if (isAutoPlay_ && fs==false && fsWon==false && (gameClass_.getIsRespin==null || gameClass_.getIsRespin()==false)) {
                window.newUI.autospin().text = autoPlayNum_ - (currentApNum_ + 1) //Update autoplay amount
            }
        }

        //Old ui
        else {
            if (isAutoPlay_ && fs==false && fsWon==false && buttonManager_.getButton(frameworkSettings.buttons.autoButton.id)!=undefined && (gameClass_.getIsRespin==null || gameClass_.getIsRespin()==false))buttonManager_.getButton(frameworkSettings.buttons.autoButton.id).setText(autoPlayNum_ - (currentApNum_ + 1));
        }

    }

    function getAutoPlayEval_ () {
        logger("get autoplay eval "+isAutoPlay_)
        //AP evaluation, just evaluate, AP will be toggled Out later from the gameClass using showAPMessage_
        //for the moment No message is shown , to do that just uncomment the code (in showAPMessage_ as well)
        if (isAutoPlay_){
            var bal =Number(Util.formatNumber(  balanceManager_.getTrueBalance(),2));
            lastWin_ = Util.formatNumber(bal- lastBal,2) ;
            lastBal = bal;

            var chk = thresHoldCheck_(bal);
            lastBal= bal-Number(Util.formatNumber( balanceManager_.getCoinValue(),2));
            if (chk == 0 ) {
                if (currentApNum_ < autoPlayNum_ - 1) {
                    if (freeSpinsManager_.getIsInFs()==false && (gameClass_.getIsRespin==null || gameClass_.getIsRespin()==false))currentApNum_++;
                    return true;
                } else {
                    framework.setAutoPlayState(0);//set the autoplay state to off
                }
            } else {
                //we don't need to say anything
                    if (chk == 1) {
                        if ((bal - startBalance_)>=0){
                            autoplayMessage_ = Translate.do("Autoplay stopped, you won:") + " " + balanceManager_.geBalanceObj().currency + "" + Util.formatNumber((bal - startBalance_), 2);
                        }else{
                            autoplayMessage_ = Translate.do("Autoplay stopped, you lost:") + " " + balanceManager_.geBalanceObj().currency + "" + Util.formatNumber(Math.abs(bal - startBalance_), 2);
                        }

                    }else if (chk == 2)
                        autoplayMessage_ = Translate.do("Autoplay stopped, you lost:") + " " + balanceManager_.geBalanceObj().currency + "" + Util.formatNumber((startBalance_ - bal), 2);
                    else if (chk == 3) {
                        autoplayMessage_ = Translate.do("Autoplay stopped, you entered a feature.");
                        framework.updateSmallMessageText(autoplayMessage_);
                    }else if (chk == 4)
                        autoplayMessage_ = Translate.do("Autoplay stopped, you won:") + " " + balanceManager_.geBalanceObj().currency + "" + Util.formatNumber(lastWin_, 2);
            }

        }
        return false;
    }

    function getPreAutoPlayAutoriz_(){
        //AP evaluation, just evaluate, AP will be toggled Out later from the gameClass using showAPMessage_
        //for the moment No message is shown , to do that just uncomment the code (in showAPMessage_ as well)
        var chk=0;
        if (isAutoPlay_){

            var bal = Number(Util.formatNumber( balanceManager_.getTrueBeforeSpinBalance(),2));
            var lastWin = bal- lastBal ;
            var diff =Number(Util.formatNumber(bal- startBalance_,2));
            console.log("check bal "+startBalance_ + " " + bal + " "+ loseTH + " " + diff)
            logger("stop on loss of " + loseTH + " diff: " + Math.abs(diff));
            if (stopOnLose && diff <0 && Math.abs(diff) > (loseTH) && loseTH>0){
                autoplayMessage_ = Translate.do("Autoplay stopped, lost limit reached.");
                chk= 2;
            }

            if (chk > 0 ) {
                toggleAutoPlay_();
                framework.setAutoPlayState(0);//set the autoplay state to off
                return false;
            }

        }
        return true;
    }

    function showAPMessage_(cb){
        //AP finished
        //for the moment No message is shown , to do that just uncomment the code

        // buttonManager_.applyHide();
        //messageBox_.showMessage("game",autoplayMessage_,"",unlock_,cb);
        framework.updateSmallMessageText(autoplayMessage_);
        //isAutoPlay_ = false;
        //framework.setAutoPlayState(0);//set the autoplay state to off
        unlock_(cb);
    }

    function unlock_(callback){
        //used to unlock the buttons after a messagebox
        isAutoPlay_ = false;
        framework.setAutoPlayState(0);//set the autoplay state to off
        buttonManager_.applyRestore();
        if(callback!=null)callback();
        //If "NEW_UI" or game ID > x
        if (ReelConfig.newUI && !framework.isTouch()) {
            window.newUI.autospin().state = 'START';
        }
    }

    function thresHoldCheck_ (bal) {

        var diff =Number(bal)- Number(startBalance_) ;

        logger("in autoplay check, cash up: " + diff);
        if(stopOnAnyWin){
            logger("stop on any win");
            if(Number(lastWin_) > 0) return 4;
        }
        if(stopOnSingleWin){
            logger("stop on win of " + singleWinTH + " lastWin: " + lastWin_);
            if (Number(lastWin_) >= Number(singleWinTH) && Number(singleWinTH)>0)return 4;
            if (Number(singleWinTH)==0)return 9;
        }
        if(stopOnWin){
            logger("stop on cash up of " + winTH + " cashUP: " + diff);
            if (diff >= Number(winTH) && Number(winTH)>0)return 9;
            if (Number(winTH)==0)return 1;
        }
        if(stopOnLose){
            logger("stop on loss of " + loseTH + " diff: " + Math.abs(diff));
            if (diff <0 && Math.abs(diff) >= (Number(loseTH)) && Number(loseTH)>0)return 2;
        }
        if(stopOnFeature){
            logger("stop on feature  ");
            if (fsWon==true ||  freeSpinsManager_.getFsWon() || isFeature_ || freeSpinsManager_.getIsInFs())return 3;
        }


        return 0;
    }

    //getters and setters
    function setWinThreshold_(amount){
        winTH = amount;
    }

    function setLoseThreshold_(amount){

        var tooltip;

        $('.autoplayStopOnCashDownAmountTooltip').removeClass('show');
        $('.autoplayStopOnCashDownTooltip').removeClass('show');
        $('.autoplayLowerThanCashDownAmountTooltip').removeClass('show');
        $("#autoPlayCashDownLimitMobile").html(amount);
        $("#autoPlayCashDownLimit").html(amount);

        //If "NEW_UI" or game ID > x
        if (ReelConfig.newUI && framework.isTouch()) {
            tooltip = window.newUI.autospin().interface.settings.cashDecreasesBy.tooltip //Store tooltip for loss limit
            tooltip.classList.add('hidden') //Hide tooltip
        }

        if (amount > balanceManager_.getCoinValue()) {
            loseTH = amount;
            if (loginVars.getRegParams().jurisdiction === 'uk') {
                if (amount <= balanceManager_.getBalance()) {
                    loseTH = amount;
                    //If "NEW_UI" or game ID > x
                    if (ReelConfig.newUI && framework.isTouch()) {
                        tooltip.classList.add('hidden') //Hide tooltip
                    }
                } else {
                    loseTH = -100;
                    $('.autoplayLowerThanCashDownAmountTooltip').addClass('show');

                    //If "NEW_UI" or game ID > x
                    if (ReelConfig.newUI && framework.isTouch()) {
                        tooltip.innerHTML = Translate.do('Must be lower than balance');
                        //If tooltip hidden
                        if (tooltip.classList.contains('hidden')) {
                            tooltip.classList.remove('hidden') //Show tooltip
                        }
                    }

                }
            }
        }
        else if (amount === '') {
            loseTH = -100;
            $('.autoplayStopOnCashDownTooltip').addClass('show');

            //If "NEW_UI" or game ID > x
            if (ReelConfig.newUI && framework.isTouch()) {
                tooltip.innerHTML = Translate.do('Must be set to a value')
                //If tooltip hidden
                if (tooltip.classList.contains('hidden')) {
                    tooltip.classList.remove('hidden') //Show tooltip
                }
            }

        }
        else {
            loseTH = -100;
            $('.autoplayStopOnCashDownAmountTooltip').addClass('show');

            //If "NEW_UI" or game ID > x
            if (ReelConfig.newUI && framework.isTouch()) {
                tooltip.innerHTML = Translate.do('Must be greater than current stake')
                //If tooltip hidden
                if (tooltip.classList.contains('hidden')) {
                    tooltip.classList.remove('hidden') //Show tooltip
                }
            }

        }

    }

    function setSingleWinThreshold_(amount){
        singleWinTH = amount;
    }

    function toggleStopOnFeature_(stopFS){
        if (gameParams.clientName!=false && gameParams.clientName!="" && gameParams.clientName.indexOf("theHub_malta_playtech")>=0) {
            stopOnFeature = false;
            $('#autoplayFeatureStop').prop('checked', false);
        }else{
                stopOnFeature = stopFS;
            }

    }

    function toggleStopOnWin_(stopWin){

        stopOnWin = stopWin;
    }

    function toggleStopOnSingleWin_(stopWin){

        stopOnSingleWin = stopWin;
    }

    function toggleStopOnLose_(stopLose){

        if (loginVars.getRegParams().jurisdiction === 'uk') {
            stopOnLose = true;
        }
        else {

            $('.autoplayStopOnCashDownTooltip').removeClass('show');
            stopOnLose = stopLose;

            if (!stopOnLose) {
                $('.autoplayStopOnCashDownAmountTooltip').removeClass('show');
            }

        }

    }

    function toggleStopOnAnyWin_(stopAny){

        stopOnAnyWin = stopAny;
    }

    function getIsInAutoPlay_ () {
        return isAutoPlay_;
    }

    function getAutoPlayNum_ () {
        return autoPlayNum_-currentApNum_;
    }

    function getCurrentApNum_ () {
        return currentApNum_;
    }

    function setAutoPlayValue_(newValue){
        autoPlayNum_ = newValue;
        try {

        }catch(e){

        }
    }

    var me = {
        setCanAp:function(value){
            canAP_=value;
        },
        getCanAp:function(){
            return canAP_;
        },
        toggleAutoPlay: toggleAutoPlay_,
        getIsInAutoPlay: getIsInAutoPlay_,
        getAutoPlayEval: getAutoPlayEval_,
        getAutoPlayNum: getAutoPlayNum_,
        getCurrentApNum: getCurrentApNum_,
        getStopOnAnyWin:function() {
            return stopOnAnyWin;
        },
        getStopOnSingleWin:function() {
            return stopOnSingleWin;
        },
        getStopOnWin:function() {
            return stopOnWin;
        },
        getStopOnLose:function() {
            return stopOnLose;
        },
        updateApNum:updateApNum_,
        setAutoPlayValue:setAutoPlayValue_,
        setWinThreshold:setWinThreshold_,
        setLoseThreshold:setLoseThreshold_,
        toggleStopOnLose:toggleStopOnLose_,
        toggleStopOnWin:toggleStopOnWin_,
        toggleStopOnAnyWin:toggleStopOnAnyWin_,
        toggleStopOnFeature:toggleStopOnFeature_,
        setSingleWinThreshold:setSingleWinThreshold_,
        toggleStopOnSingleWin:toggleStopOnSingleWin_,
        showAPMessage:showAPMessage_,
        getPreAutoPlayAutoriz:getPreAutoPlayAutoriz_,
        getIsFeature:function(){
            return isFeature_;
        },
        toggleFeature:function(val){
            isFeature_=val;
            if (getIsInAutoPlay_() && stopOnFeature && isFeature_==true){
                framework.updateSmallMessageText(Translate.do("Autoplay stopped, you entered a feature."));
                toggleAutoPlay_();
                framework.setAutoPlayState(0);
            }
        },
        getStopOnFeature:function () {
            return stopOnFeature;
        },
        validStopOnLose: function() {
            return !stopOnLose || loseTH > 0;
        },
        setStopOnLose: function() {

            if (loginVars.getRegParams().jurisdiction === 'uk') {
                stopOnLose = true;
                $('#autoplayStopOnCashDown').prop('checked', true);
                $('#autoplayStopOnCashDownMobile').prop('checked', true);

            }

        },
        mobToggleStopOnLose: function() {

            if (loginVars.getRegParams().jurisdiction === 'uk') {
                stopOnLose = true;
            }
            else {

                $('.autoplayStopOnCashDownTooltip').removeClass('show');
                stopOnLose = !stopOnLose;

                if (!stopOnLose) {
                    $('.autoplayStopOnCashDownAmountTooltip').removeClass('show');
                }

            }

        },
        resetAutoPlay:function () {
            autoPlayNum_=0;
            isAutoPlay_=false;
        }


    }
    initClass_;
    return me;
}


// this keep autoplaying after FS if option to stop has not been chacked. (unless UK jur)
//
// /**
//  * KiS Framework, Created by Fabry on 10/03/2016..
//  */
// function AutoPlay(gameRef, gameClass) {
//     var game_ = gameRef;
//     var gameClass_ = gameClass;
//     var startBalance_;
//     var lastWin_;
//     var lastBal;
//     var autoPlayNum_ = 500;
//     var currentApNum_ = 0;
//     var isAutoPlay_ = false;
//     var stopOnFeature = false;
//     var isFeature_ = false;//to do needs triggering in feature.
//     var stopOnWin = false;
//     var stopOnFreeSpin = false;
//     var stopOnLose = loginVars.getRegParams().jurisdiction === 'uk';
//     var stopOnAnyWin = false;
//     var stopOnSingleWin = false;
//     //todo stop creteria
//     var winTH = -100;
//     var loseTH = -100;
//     var singleWinTH = -100;
//     var bonusTrigger = false;
//     var fsWon = false;
//     var iTout_=0;
//     var autoplayMessage_="";
//     var canAP_=true;
//
//     logger('HERE:', loginVars.getRegParams().jurisdiction, loginVars.getRegParams().jurisdiction === 'uk', stopOnLose);
//     if (stopOnLose) {
//
//         $('#autoplayStopOnCashDown').addClass('active');
//         $('#autoplayStopOnCashDownMobile').addClass('active');
//
//         $('#autoplayStopOnCashDown').prop('checked', true);
//         $('#autoplayStopOnCashDownMobile').prop('checked', true);
//
//     }
//     else {
//
//         $('#autoplayStopOnCashDown').prop('checked', false);
//         $('#autoplayStopOnCashDownMobile').prop('checked', false);
//
//     }
//
//     function initClass_ () {
//     }
//
//     function toggleAutoPlay_ () {
//         //activate and deactivate AP function (called on AP button start/stop)
//         if (isAutoPlay_) {
//             if (getIsInAutoPlay_() && stopOnFeature && isFeature_) {
//                 framework.updateSmallMessageText(Translate.do("Autoplay stopped, you entered a feature."));
//             }
//             clearInterval(iTout_);
//             isAutoPlay_ = false;
//             currentApNum_=autoPlayNum_;
//             if(buttonManager_.getButton(frameworkSettings.buttons.autoButton.id)!=undefined)buttonManager_.getButton(frameworkSettings.buttons.autoButton.id).setText(autoPlayNum_);
//
//
//         } else {
//             autoplayMessage_="";
//             currentApNum_ = 0;
//             isAutoPlay_ = true;
//             buttonManager_.applyState("SPIN");
//             startBalance_ = balanceManager_.getTrueBalance();
//             lastBal = startBalance_-balanceManager_.getCoinValue() ;
//             iTout_=setTimeout(gameClass_.realDoSpin,1000,[false]);
//         }
//         logger("toggle autoplay "+isAutoPlay_)
//     }
//
//     function updateApNum_(){
//         var fs=freeSpinsManager_.getIsInFs();
//         var fsWon=freeSpinsManager_.getFsWon();
//
//         //TODO
//
//         //If "NEW_UI"
//         if (ReelConfig.newUI) {
//
//             //If in autoplay
//             if (isAutoPlay_ && fs==false && fsWon==false && (gameClass_.getIsRespin==null || gameClass_.getIsRespin()==false)) {
//                 window.newUI.autospin().text = autoPlayNum_ - (currentApNum_ + 1) //Update autoplay amount
//             }
//         }
//
//         //Old ui
//         else {
//             if (isAutoPlay_ && fs==false && fsWon==false && buttonManager_.getButton(frameworkSettings.buttons.autoButton.id)!=undefined && (gameClass_.getIsRespin==null || gameClass_.getIsRespin()==false))buttonManager_.getButton(frameworkSettings.buttons.autoButton.id).setText(autoPlayNum_ - (currentApNum_ + 1));
//         }
//
//     }
//
//     function getAutoPlayEval_ () {
//         logger("get autoplay eval "+isAutoPlay_)
//         //AP evaluation, just evaluate, AP will be toggled Out later from the gameClass using showAPMessage_
//         //for the moment No message is shown , to do that just uncomment the code (in showAPMessage_ as well)
//         if (isAutoPlay_){
//             var bal = balanceManager_.getTrueBalance();
//             lastWin_ = Util.formatNumber(bal- lastBal,2) ;
//             lastBal = bal;
//
//             var chk = thresHoldCheck_(bal);
//             lastBal= bal-balanceManager_.getCoinValue();
//             if (chk == 0 ) {
//                 if (currentApNum_ < autoPlayNum_ - 1) {
//                     if (freeSpinsManager_.getFsWon()==false && freeSpinsManager_.getIsInFs()==false && (gameClass_.getIsRespin==null || gameClass_.getIsRespin()==false))currentApNum_++;
//                     return true;
//                 } else {
//                     framework.setAutoPlayState(0);//set the autoplay state to off
//                 }
//             } else {
//                 //we don't need to say anything
//                 if (chk == 1) {
//                     if ((bal - startBalance_)>0){
//                         autoplayMessage_ = Translate.do("Autoplay stopped, you won:") + " " + balanceManager_.geBalanceObj().currency + "" + Util.formatNumber((bal - startBalance_), 2);
//                     }else{
//                         autoplayMessage_ = Translate.do("Autoplay stopped, you lost:") + " " + balanceManager_.geBalanceObj().currency + "" + Util.formatNumber(Math.abs(bal - startBalance_), 2);
//                     }
//
//                 }else if (chk == 2)
//                     autoplayMessage_ = Translate.do("Autoplay stopped, you lost:") + " " + balanceManager_.geBalanceObj().currency + "" + Util.formatNumber((startBalance_ - bal), 2);
//                 else if (chk == 3) {
//                     autoplayMessage_ = Translate.do("Autoplay stopped, you entered a feature.");
//                     framework.updateSmallMessageText(autoplayMessage_);
//                 }else if (chk == 4)
//                     autoplayMessage_ = Translate.do("Autoplay stopped, you won:") + " " + balanceManager_.geBalanceObj().currency + "" + Util.formatNumber(lastWin_, 2);
//             }
//
//         }
//         return false;
//     }
//
//     function getPreAutoPlayAutoriz_(){
//         //AP evaluation, just evaluate, AP will be toggled Out later from the gameClass using showAPMessage_
//         //for the moment No message is shown , to do that just uncomment the code (in showAPMessage_ as well)
//         var chk=0;
//         if (isAutoPlay_){
//
//             var bal = Number(Util.formatNumber( balanceManager_.getTrueBeforeSpinBalance(),2));
//             var lastWin = bal- lastBal ;
//             var diff =bal- startBalance_
//             console.log("check bal "+startBalance_ + " " + bal + " "+ loseTH)
//             logger("stop on loss of " + loseTH + " diff: " + Math.abs(diff));
//             if (stopOnLose && diff <0 && Math.abs(diff) > (loseTH) && loseTH>0){
//                 autoplayMessage_ = Translate.do("Autoplay stopped, lost limit reached.");
//                 chk= 2;
//             }
//
//             if (chk > 0 ) {
//                 toggleAutoPlay_();
//                 framework.setAutoPlayState(0);//set the autoplay state to off
//                 return false;
//             }
//
//         }
//         return true;
//     }
//
//     function showAPMessage_(cb){
//         //AP finished
//         //for the moment No message is shown , to do that just uncomment the code
//
//         // buttonManager_.applyHide();
//         //messageBox_.showMessage("game",autoplayMessage_,"",unlock_,cb);
//         framework.updateSmallMessageText(autoplayMessage_);
//         //isAutoPlay_ = false;
//         //framework.setAutoPlayState(0);//set the autoplay state to off
//         unlock_(cb);
//     }
//
//     function unlock_(callback){
//         //used to unlock the buttons after a messagebox
//         isAutoPlay_ = false;
//         framework.setAutoPlayState(0);//set the autoplay state to off
//         buttonManager_.applyRestore();
//         if(callback!=null)callback();
//         //If "NEW_UI" or game ID > x
//         if (ReelConfig.newUI && !framework.isTouch()) {
//             window.newUI.autospin().state = 'START';
//         }
//     }
//
//     function thresHoldCheck_ (bal) {
//
//         var diff =Number(bal)- Number(startBalance_) ;
//
//         logger("in autoplay check, cash up: " + diff);
//         if(stopOnAnyWin){
//             logger("stop on any win");
//             if(Number(lastWin_) > 0) return 4;
//         }
//         if(stopOnSingleWin){
//             logger("stop on win of " + singleWinTH + " lastWin: " + lastWin_);
//             if (Number(lastWin_) >= Number(singleWinTH) && Number(singleWinTH)>0)return 4;
//             if (Number(singleWinTH)==0)return 9;
//         }
//         if(stopOnWin){
//             logger("stop on cash up of " + winTH + " cashUP: " + diff);
//             if (diff >= Number(winTH) && Number(winTH)>0)return 9;
//             if (Number(winTH)==0)return 1;
//         }
//         if(stopOnLose){
//             logger("stop on loss of " + loseTH + " diff: " + Math.abs(diff));
//             if (diff <0 && Math.abs(diff) >= (Number(loseTH)) && Number(loseTH)>0)return 2;
//         }
//         if(stopOnFeature){
//             logger("stop on feature  ");
//             if (fsWon==true ||  freeSpinsManager_.getFsWon() || isFeature_ || freeSpinsManager_.getIsInFs())return 3;
//         }
//
//
//         return 0;
//     }
//
//     //getters and setters
//     function setWinThreshold_(amount){
//         winTH = amount;
//     }
//
//     function setLoseThreshold_(amount){
//
//         var tooltip;
//
//         $('.autoplayStopOnCashDownAmountTooltip').removeClass('show');
//         $('.autoplayStopOnCashDownTooltip').removeClass('show');
//         $('.autoplayLowerThanCashDownAmountTooltip').removeClass('show');
//         $("#autoPlayCashDownLimitMobile").html(amount);
//         $("#autoPlayCashDownLimit").html(amount);
//
//         //If "NEW_UI" or game ID > x
//         if (ReelConfig.newUI && framework.isTouch()) {
//             tooltip = window.newUI.autospin().interface.settings.cashDecreasesBy.tooltip //Store tooltip for loss limit
//             tooltip.classList.add('hidden') //Hide tooltip
//         }
//
//         if (amount > balanceManager_.getCoinValue()) {
//             loseTH = amount;
//             if (loginVars.getRegParams().jurisdiction === 'uk') {
//                 if (amount <= balanceManager_.getBalance()) {
//                     loseTH = amount;
//                     //If "NEW_UI" or game ID > x
//                     if (ReelConfig.newUI && framework.isTouch()) {
//                         tooltip.classList.add('hidden') //Hide tooltip
//                     }
//                 } else {
//                     loseTH = -100;
//                     $('.autoplayLowerThanCashDownAmountTooltip').addClass('show');
//
//                     //If "NEW_UI" or game ID > x
//                     if (ReelConfig.newUI && framework.isTouch()) {
//                         tooltip.innerHTML = Translate.do('Must be lower than balance');
//                         //If tooltip hidden
//                         if (tooltip.classList.contains('hidden')) {
//                             tooltip.classList.remove('hidden') //Show tooltip
//                         }
//                     }
//
//                 }
//             }
//         }
//         else if (amount === '') {
//             loseTH = -100;
//             $('.autoplayStopOnCashDownTooltip').addClass('show');
//
//             //If "NEW_UI" or game ID > x
//             if (ReelConfig.newUI && framework.isTouch()) {
//                 tooltip.innerHTML = Translate.do('Must be set to a value')
//                 //If tooltip hidden
//                 if (tooltip.classList.contains('hidden')) {
//                     tooltip.classList.remove('hidden') //Show tooltip
//                 }
//             }
//
//         }
//         else {
//             loseTH = -100;
//             $('.autoplayStopOnCashDownAmountTooltip').addClass('show');
//
//             //If "NEW_UI" or game ID > x
//             if (ReelConfig.newUI && framework.isTouch()) {
//                 tooltip.innerHTML = Translate.do('Must be greater than current stake')
//                 //If tooltip hidden
//                 if (tooltip.classList.contains('hidden')) {
//                     tooltip.classList.remove('hidden') //Show tooltip
//                 }
//             }
//
//         }
//
//     }
//
//     function setSingleWinThreshold_(amount){
//         singleWinTH = amount;
//     }
//
//     function toggleStopOnFeature_(stopFS){
//         if (gameParams.clientName!=false && gameParams.clientName!="" && gameParams.clientName.indexOf("theHub_malta_playtech")>=0) {
//             stopOnFeature = false;
//             $('#autoplayFeatureStop').prop('checked', false);
//         }else{
//             if (freeSpinsManager_.getFsWon()==false || (stopOnFeature==true || loginVars.getRegParams().jurisdiction === 'uk') ) {    //Paddy power complained
//                 stopOnFeature = stopFS;
//             }
//         }
//
//     }
//
//     function toggleStopOnWin_(stopWin){
//
//         stopOnWin = stopWin;
//     }
//
//     function toggleStopOnSingleWin_(stopWin){
//
//         stopOnSingleWin = stopWin;
//     }
//
//     function toggleStopOnLose_(stopLose){
//
//         if (loginVars.getRegParams().jurisdiction === 'uk') {
//             stopOnLose = true;
//         }
//         else {
//
//             $('.autoplayStopOnCashDownTooltip').removeClass('show');
//             stopOnLose = stopLose;
//
//             if (!stopOnLose) {
//                 $('.autoplayStopOnCashDownAmountTooltip').removeClass('show');
//             }
//
//         }
//
//     }
//
//     function toggleStopOnAnyWin_(stopAny){
//
//         stopOnAnyWin = stopAny;
//     }
//
//     function getIsInAutoPlay_ () {
//         return isAutoPlay_;
//     }
//
//     function getAutoPlayNum_ () {
//         return autoPlayNum_-currentApNum_;
//     }
//
//     function getCurrentApNum_ () {
//         return currentApNum_;
//     }
//
//     function setAutoPlayValue_(newValue){
//         autoPlayNum_ = newValue;
//         try {
//
//         }catch(e){
//
//         }
//     }
//
//     var me = {
//         setCanAp:function(value){
//             canAP_=value;
//         },
//         getCanAp:function(){
//             return canAP_;
//         },
//         toggleAutoPlay: toggleAutoPlay_,
//         getIsInAutoPlay: getIsInAutoPlay_,
//         getAutoPlayEval: getAutoPlayEval_,
//         getAutoPlayNum: getAutoPlayNum_,
//         getCurrentApNum: getCurrentApNum_,
//         getStopOnAnyWin:function() {
//             return stopOnAnyWin;
//         },
//         getStopOnSingleWin:function() {
//             return stopOnSingleWin;
//         },
//         getStopOnWin:function() {
//             return stopOnWin;
//         },
//         getStopOnLose:function() {
//             return stopOnLose;
//         },
//         updateApNum:updateApNum_,
//         setAutoPlayValue:setAutoPlayValue_,
//         setWinThreshold:setWinThreshold_,
//         setLoseThreshold:setLoseThreshold_,
//         toggleStopOnLose:toggleStopOnLose_,
//         toggleStopOnWin:toggleStopOnWin_,
//         toggleStopOnAnyWin:toggleStopOnAnyWin_,
//         toggleStopOnFeature:toggleStopOnFeature_,
//         setSingleWinThreshold:setSingleWinThreshold_,
//         toggleStopOnSingleWin:toggleStopOnSingleWin_,
//         showAPMessage:showAPMessage_,
//         getPreAutoPlayAutoriz:getPreAutoPlayAutoriz_,
//         getIsFeature:function(){
//             return isFeature_;
//         },
//         toggleFeature:function(val){
//             isFeature_=val;
//             if (getIsInAutoPlay_() && stopOnFeature && isFeature_==true){
//                 framework.updateSmallMessageText(Translate.do("Autoplay stopped, you entered a feature."));
//                 toggleAutoPlay_();
//                 framework.setAutoPlayState(0);
//             }
//         },
//         getStopOnFeature:function () {
//             return stopOnFeature;
//         },
//         validStopOnLose: function() {
//             return !stopOnLose || loseTH > 0;
//         },
//         setStopOnLose: function() {
//
//             if (loginVars.getRegParams().jurisdiction === 'uk') {
//                 stopOnLose = true;
//                 $('#autoplayStopOnCashDown').prop('checked', true);
//                 $('#autoplayStopOnCashDownMobile').prop('checked', true);
//
//             }
//
//         },
//         mobToggleStopOnLose: function() {
//
//             if (loginVars.getRegParams().jurisdiction === 'uk') {
//                 stopOnLose = true;
//             }
//             else {
//
//                 $('.autoplayStopOnCashDownTooltip').removeClass('show');
//                 stopOnLose = !stopOnLose;
//
//                 if (!stopOnLose) {
//                     $('.autoplayStopOnCashDownAmountTooltip').removeClass('show');
//                 }
//
//             }
//
//         },
//         resetAutoPlay:function () {
//             autoPlayNum_=0;
//             isAutoPlay_=false;
//         }
//
//
//     }
//     initClass_;
//     return me;
// }
