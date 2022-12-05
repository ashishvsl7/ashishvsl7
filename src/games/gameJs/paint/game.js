function Game(gameRef) {
    var game_ = gameRef;

    //animations
    var fs=false;
    var fr=false;
    var fsWon=false;
    var ap=false;
    var won=0;
    var wonBonus=0;
    var onGame_=false;
    var spinning_=false;
    var messageOn_=false;
    var refuseCompulsive_=false;
    var compulsiveFlag_=false;
    var waitForSubstitution_=false;
    var compulsiveSettingBakup_=displayManager.groups.centralWin.thresHolds;

    function create_() {
        spinManager_.createReels();
        if(buttonManager_.getButton(frameworkSettings.buttons.autoButton.id)!=undefined)buttonManager_.getButton(frameworkSettings.buttons.autoButton.id).setText("");//todo change this, it's just to apply the default bet
        guiBottomBar_.setBetControlInitialBet(ReelConfig.bet);//todo change this, it's just to apply the default bet
        
        bonusManager_.addBonus("BubblePickBonus");
    }
    
    function initGame_(){
        //init scatters        
        scatterManager_.addScatter(12);
        scatterManager_.addScatter(13);
        scatterManager_.addScatter(14);
        scatterManager_.addScatter(15);

        //display manager levels
        displayManager_.getGroup("bg").visible=true;
        displayManager_.getGroup("frame").visible=true;
        displayManager_.getGroup("status").visible=true;
        displayManager_.getGroup("logo").visible=true;
        displayManager_.getGroup("freeSpinAccumulator").visible=true;
        gcmCalls_("STAKE",balanceManager_.getCoinValue());

        if (communicationManager_.getResumeStatus().status.hand=="freespins") {
            if (communicationManager_.getResumeStatus().status !=null && communicationManager_.getResumeStatus().status.stake>0){
                changeBet_(communicationManager_.getResumeStatus().status.stake/100, true);
            }
            //f1x2.GcmError(-3);
            freeSpinsManager_.parse(communicationManager_.getResumeStatus());
            freeSpinsManager_.resumeFs();
            buttonManager_.applyHide();
            messageBox_.showMessage("game", "You have unused Free Spins", "They will be automatically started", startResumeFs_);
        }else if (communicationManager_.getResumeStatus().status.hand=="bonus"){
            if (communicationManager_.getResumeStatus().status !=null && communicationManager_.getResumeStatus().status.stake>0){
                changeBet_(communicationManager_.getResumeStatus().status.stake/100, true);
            }
            //f1x2.GcmError(-3);
            buttonManager_.applyHide();
            messageBox_.showMessage("game", "You have an unfinished Bonus", "it will be automatically started", startResumeBonus_);
        }else{
            buttonManager_.applyRestore();
            buttonManager_.applyState("NH");
            //soundManager_.playBgSound("bgSlot");
        }
        onGame_=true;
        framework.showFramework();
    }

    function startResumeBonus_(){
        buttonManager_.applyRestore();
        communicationManager_.sendServletRequest("bonusSetup");
    }

    function startResumeFs_(){
        fs=true;
        buttonManager_.applyRestore();
        enableButton_();//it will start FS
    }

    function leaveGame_(){
        onGame_=false;
        buttonManager_.applyHide();
    }

    function backToGame_(){
        onGame_=true;
        buttonManager_.applyRestore();
    }

    function doPt_(){
        //open game paytable and disable buttons
        displayManager_.getGroup("logo").visible=false;
        framework.openPayTable();
        leaveGame_();
        soundManager_.playSound("click");
    }

    function closePt_() {
        //close paytable and enable buttons
        backToGame_();
        displayManager_.getGroup("logo").visible=true;
    }

    function betSelector_() {
        soundManager_.playSound("click");
        framework.openBetOptions();
    }

    function changeBet_(val, init) {
        framework.closeApMenu();
        framework.closeBetMenu();
        framework.setBetValue(val, init);
        freeSpinsManager_.resumeFsAcc();

    }

    function doStop_() {
        soundManager_.playSound("click");
        buttonManager_.applyState("AFTERSPIN");
        spinManager_.stopSpin();
    }

    function doAp_() {
        framework.checkAutoPlay();//moved logic to autoplayBox
    }

    function doSpin_() {
        framework.closeApMenu();
        framework.closeBetMenu();
        if (buttonManager_.getButton(frameworkSettings.buttons.spinButton.id).isEnable()==true) {
            soundManager_.playSound("spinClick");
            realDoSpin_([false]);
        }else {
            return false;
        }
    }

    function realDoSpin_(swipe){//swipte=array
        if(!onGame_)return;
        if(messageOn_==true)return;
        spinning_=true;
        eventManager_.clearEvt();
        logger("----spin ---- "+ getStackTrace().join('\n'));
        buttonManager_.applyState("SPIN");

        if (ReelConfig.spinType=="singleIconReelSpin") {
            //spinManager_.startSpin(swipe[0]);
        }else{
            lineManager_.stopEvents();
            bonusManager_.clearLineEval();
            winAmtManager_.resetWinManager();
            soundManager_.stopSound("winSound");


            balanceManager_.bet(betCheckCallBack_);
        }
    }

    function betCheckCallBack_(response) {
        var swipe = [false];

        //handling FS message here
        if (response == true) {
            if (autoPlayManager_.getIsInAutoPlay() == false || autoPlayManager_.getPreAutoPlayAutoriz() == true) {
                autoPlayManager_.updateApNum();
                freeSpinsManager_.updateFreeSpinsNum();
                freeRoundsManager_.updateFreeRoundsNum();
                if (winAmtManager_.getInterruptedWinAnim() == false) {
                    displayManager_.getText("winValue").setText("");
                    lineManager_.clearLine();
                } else {
                    winAmtManager_.forceToComplete();
                    lineManager_.clearLineAfterValue();
                }
                if (freeSpinsManager_.getIsInFs() == true) {
                    framework.updateSmallMessageText(Translate.do("Bet:") + " " + Translate.do("free re-spins"));
                } else if (freeRoundsManager_.getIsInFr() == true) {
                    framework.updateSmallMessageText(Translate.do("Bet:") + " " + Translate.do("free rounds"));
                } else {
                    if (balanceManager_.getShowIncredits() == false) {
                        framework.updateSmallMessageText(Translate.do("Bet:") + " " + balanceManager_.geBalanceObj().currency + "" + Util.formatNumber(balanceManager_.getCoinValue(), Util.getNubersOfDecimal()));
                    } else {
                        framework.updateSmallMessageText(Translate.do("Bet:") + " " + balanceManager_.geBalanceObj().currency + "" + Util.formatNumber(balanceManager_.getCoinValue(), 2) + " " + Translate.do("Coins:") + lineManager_.getLinesNumber());
                    }
                }
                spinManager_.setSpinType(swipe[0], swipe[1]);
                spinManager_.sendSpinRequest();
            } else {
                buttonManager_.applyState("NH");
                spinning_=false;
                balanceManager_.unBet();
                setTimeout(showApMessage_, 500);
            }
        } else {
            buttonManager_.applyState("NH");
            spinning_=false;
            framework.updateSmallMessageText(Translate.do("Insufficient funds. Please reduce stake."));
        }
    }

    function showApMessage_(){
        autoPlayManager_.showAPMessage(finalizeEnable_);
    }

    function finalizeEnable_(){
        if(!freeSpinsManager_.getIsInFs()){
            if (refuseCompulsive_==false && compulsiveFlag_ == false && spinManager_.getCompulsivePlayer()==true ){
                triggerCompulsive_();
                refuseCompulsive_=true; //aks just the first time
            }else{
                buttonManager_.applyState("NH");
            }
        }
    }

    function spinAnimEnd_() {
        logger("animation end called.------"+spinManager_.getSpinResp())
        //lineManager_.initClass();
        displayManager_.getText("winValue").setText("");
        soundManager_.stopSound("reelSound");
        eventManager_.clearEvt();
        won=winManager_.evaluate(spinManager_.getReels());
        fsWon=freeSpinsManager_.getFsWon();

        wonBonus= (spinManager_.getSpinResp()!=null && spinManager_.getSpinResp().bonus!=null)?spinManager_.getSpinResp().bonus.wonBonus:0;
        fs=false;
        if(freeSpinsManager_.getIsInFs() || fsWon ) {
            fs = freeSpinsManager_.getFreeSpinsEval();
        }

        displayManager_.getText("winValue").setText("");
        evaluateWinnings_();
    }

    function evaluateWinnings_(){
        //start bonus if needed, displays all winnings (also called after bonus to display lines winnings), after winnings call the autoplay and freespins evaluator
        lineManager_.clearLine();
        eventManager_.clearEvt();

        if (wonBonus==0) {
            if (freeRoundsManager_.getIsInFr()==true){
                fr=freeRoundsManager_.getFreeRoundsEval();
            }
            logger("NO bonus found ");
            scatterManager_.endAnimHandle(winManager_.getScatterSimbs(), winManager_.getScatterWinAmt(), eventManager_);
            twinReelManager_.hideTwinReels();
            if (won) {
                lineManager_.endAnimHandle(winManager_.getAllWinsSorted(), eventManager_);
                freeSpinsManager_.endAnimHandle(eventManager_);
            } else {
                freeSpinsManager_.endAnimHandle(eventManager_);
                if(!fsWon)framework.updateSmallMessageText(Translate.do("Good luck"));
            }
            buttonManager_.applyState("AFTERSPIN");

            if (fsWon && freeSpinsManager_.getIsInFs() == true && freeSpinsManager_.getFsNumber() == 0) {
                eventManager_.addEvent(fsEval_, 3000);
            } else {
                eventManager_.addEvent(fsEval_, (freeSpinsManager_.getFsAdd() == true)?1500:0);
            }
        }else{
            logger("bonus found ");
            eventManager_.addEvent(startBonus_, 100);
            wonBonus=0;
        }
        eventManager_.triggerEvt();
    }
    
    function startBonus_(){
        //send a bonus setup request
        communicationManager_.sendServletRequest("bonusSetup");
    }

    function updateBalance_(txt) {
        logger("update balance "  + " "+getStackTrace().join('\n'));
        //framework.updateSmallMessageText(Translate.do("You won:") + " " + balanceManager_.getCurrencySmb() + " " + Util.formatNumber(winManager_.getWinAmt(), 2));
        freeRoundsManager_.addWin(winManager_.getWinAmt() * balanceManager_.getCoinValue());
        balanceManager_.balanceUpdate();
    }

    function updateScatterBalance(){
    }

    function fsEval_(){
        spinning_=false;
        fs=freeSpinsManager_.getIsInFs();
        fsWon=freeSpinsManager_.getFsWon();
        if (fsWon ){
            setTimeout(apEval_,Number(ReelConfig.fsSpinDelay ));
        }else{
            apEval_();
        }
    }

    function apEval_(){
        if (won){
            setTimeout(enableButton_, 500);
            multiplierManager_.updateMultiplier(true);
        }else{
            enableButton_();
            multiplierManager_.resetMultipliers();
        }
    }

    function enableButton_() {
        if (!won){
            if(freeSpinsManager_.getIsInFs()== false || freeSpinsManager_.getFsNumber()<=0 ){
                gcmCalls_("PAID", 0);
                balanceManager_.balanceUpdate();
            }
        }
        ap=autoPlayManager_.getAutoPlayEval();
        if (gameParams.force=="Enable"){
            setTimeout(hideForcePanel_,3000);
        }
        if(freeSpinsManager_.getIsInFs() || fsWon ) {
            fs = freeSpinsManager_.getFreeSpinsEval(false); //false cause in this game the balance will be updated after each fs
        }

        if (freeRoundsManager_.getIsInFr()==true){
            fr=freeRoundsManager_.getFreeRoundsEval();
        }
        logger("enable button called.------"+fs + " " +fr +" "+ap);
        if (ap ==false && fs == false && fsWon==false) {
            if (ap==false && autoPlayManager_.getIsInAutoPlay()==true){
                eventManager_.clearEvt();
                eventManager_.addEvent(showApMessage_,500,[ap]);
                eventManager_.triggerEvt();
            }else{
                finalizeEnable_();
            }
        }else{
            eventManager_.clearEvt();
            if (ap==false && autoPlayManager_.getIsInAutoPlay()==true){
                eventManager_.addEvent(showApMessage_,500,[ap]);
            }
            eventManager_.addEvent(startAutoSpin_,(won)?lineManager_.getTotalDuration():500,[false]);
            eventManager_.triggerEvt();
        }
    }

    function startAutoSpin_(par){
        if (autoPlayManager_.getIsInAutoPlay() || fs ) {
            if (autoPlayManager_.getIsFeature()==false || (autoPlayManager_.getStopOnFeature()==false && fs==true)){
                if (autoPlayManager_.getCanAp()==true) {
                    gcmCalls_("ANIMATION_END",null,true);
                    realDoSpin_(par);
                }else {
                    setTimeout(startAutoSpin_, 1000, par);
                }
            } else{
                buttonManager_.applyState("NH");
            }
        }else{
            buttonManager_.applyState("NH");
        }
    }

    function showApMessage_(){
        autoPlayManager_.showAPMessage(finalizeEnable_);
    }

    function hideForcePanel_(){
        if (gameParams.force=="Enable"){
            //$('#debug').css("opacity","0");
        }
    }

    function hideFs_(){
        if (freeRoundsManager_.getIsInFr()){
            setTimeout(freeRoundsManager_.getFreeRoundsEval,1000);
        }
    }

    function getBetConfigurationDeg_() {
        return [72, 36, 0, 324, 288, 252, 216, 180, 144, 108];    //todo read from json
    }

    function getBetConfiguration_() {
        return ["0.01", "0.02", "0.05", "0.10", "0.25", "0.50", "1.00", "2.00", "5.00", "10.00"];    //todo read from json
    }

    function fakeEvent_() {
    }

    function playTriggeredSmb_(){
        soundManager_.playSound("smbWin_11");
        var triggerSymbol_=spinManager_.getTriggerIcons();
        for (var a in triggerSymbol_){
            triggerSymbol_[a].animations.play("anim", 24, false, false, updateIcon_,[triggerSymbol_[a]]);
        }
    }

    function updateIcon_(par){
        //par[0].symbol.visible=true;
    }

    function triggerCompulsive_(){
        messageBox_.showMessageYN("game", "You have been using the slam stop feature","would you like to enable Fast Play?\rThis can be adjusted in the settings menu.", enableCompulsive_,notEnableCompulsive_);
    }

    function enableCompulsive_(){
        framework.getMenu().setCompulsivePlayer_(true);
        framework.getSettings().setCompulsivePlayer(true);
        buttonManager_.applyState("NH");
    }

    function notEnableCompulsive_(){
        refuseCompulsive_=true;
        framework.getMenu().setCompulsivePlayer_(false);
        framework.getSettings().setCompulsivePlayer(false);
        buttonManager_.applyState("NH");
    }

    function changeCompulsiveState_(state){
        if (state==false){
            compulsiveFlag_=false;
            displayManager.groups.centralWin.thresHolds= compulsiveSettingBakup_;
        }else{
            displayManager.groups.centralWin.thresHolds= [9000, 1500, 2500];
            compulsiveFlag_=true;
        }
    }

    var me = {
        initGame: initGame_,
        create:create_,
        spinAnimEnd: spinAnimEnd_,
        evaluateWinnings:evaluateWinnings_,
        getBetConfiguration: getBetConfiguration_,
        getBetConfigurationDeg: getBetConfigurationDeg_,
        doSpin: doSpin_,
        doAp:doAp_,
        betSelector:betSelector_,
        doPt:doPt_,
        closePt:closePt_,
        doStop:doStop_,
        leaveGame:leaveGame_,
        backToGame:backToGame_,
        realDoSpin:realDoSpin_,
        fakeEvent:fakeEvent_,
        fsEval:fsEval_,
        hideFs:hideFs_,
        updateBalance:updateBalance_,
        changeBet:changeBet_,
        enableButton:enableButton_,
        playTriggeredSmb:playTriggeredSmb_,
        changeCompulsiveState:changeCompulsiveState_,
        getAutoPlayStatus: function () {
            return autoPlayManager_.getIsInAutoPlay();
        },
        getLineButtons:function(){
            return null;
        },
        getLineButton:function(line){
            return null;
        },
        getOnGame:function (){
            return onGame_;
        },
        isSpinning:function(){
            return spinning_;
        },
        setMessageOnOff:function (val) {
            messageOn_=val;
        },
        getMessageOnOff:function(){
            return messageOn_;
        },
        getCompulsivePlayer:function () {
            return compulsiveFlag_;
        },
        startSounds:function(){
            if (communicationManager_.getResumeStatus().status.hand=="freespins") {
                soundManager_.playBgSound("bgFs");
            }else if (communicationManager_.getResumeStatus().status.hand=="bonus"){
                soundManager_.playBgSound("bgPick");
            }else{
                soundManager_.playBgSound("bgSlot");
            }
        },
        getFsIcon:function(){
            return "";
        }
    }

    return me;
}
;