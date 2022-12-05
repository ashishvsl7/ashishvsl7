function Game(gameRef) {
    var game_ = gameRef;
    var onGame_=false;
    //animations
    var fs;
    var fr;
    var fsWon;
    var ap;
    var won;
    var spinning_=false;
    var messageOn_=false;
    var refuseCompulsive_=false;
    var compulsiveFlag_=false;
    var compulsiveSettingBakup_=displayManager.groups.centralWin.thresHolds;
    var respin_=false;

    function create_() {
        //display manager levels
        displayManager_.getGroup("bg").visible=true;
        displayManager_.getGroup("mask").visible=true;
        displayManager_.getGroup("frame").visible=true;
        displayManager_.getGroup("status").visible=true;
        displayManager_.getGroup("logo").visible=true;
        spinManager_.createReels();
        guiBottomBar_.setBetControlInitialBet(ReelConfig.bet);//todo change this, it's just to apply the default bet
        logger("nh call8")
        idleCycleManager_.startIdleCycle();
    }

    function initGame_(){
        gcmCalls_("STAKE",balanceManager_.getCoinValue());
        if (communicationManager_.getResumeStatus().status.hand=="freespins"){
            if (communicationManager_.getResumeStatus().status !=null && communicationManager_.getResumeStatus().status.stake>0){
                changeBet_(communicationManager_.getResumeStatus().status.stake/100, true);
            }
            //f1x2.GcmError(-3);
            buttonManager_.applyHide();
            messageBox_.showMessage("game","You have an unused Free re-spin","it will be automatically started",startResumeFs_);
        }else{
            buttonManager_.applyRestore();
            buttonManager_.applyState("NH");
            //soundManager_.playBgSound("bgSlot");
        }
        onGame_=true;
        framework.showFramework();
    }

    function startResumeFs_(){
        freeSpinsManager_.resumeFs();
        buttonManager_.applyRestore();
        realDoSpin_([false]);
    }

    function toggleCredits_(){
        creditsCoinsDisplay_.toggleCreditsDisplay();
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
        respin_=false;
        eventManager_.clearEvt();
        logger("----spin ---- "+ getStackTrace().join('\n'));
        
        if(won){
           // updateBalance_("WIN");
        }
        buttonManager_.applyState("SPIN");
        if (ReelConfig.spinType=="singleIconReelSpin") {
            //spinManager_.startSpin(swipe[0]);
        }else{
            lineManager_.stopEvents();

            wildManager_.clearWild(winManager_.getWildSimbs());
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
                    logger(" not interrupted animation ")
                    displayManager_.getText("winValue").setText("");
                    lineManager_.clearLine();
                } else {
                    logger(" interrupted win animation ")
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
                        framework.updateSmallMessageText(Translate.do("Bet:") + " " + balanceManager_.geBalanceObj().currency + "" + Util.formatNumber(balanceManager_.getCoinValue(), 2) + " " + Translate.do("Coins:") + "" + lineManager_.getLinesNumber());
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

    function spinAnimEnd_() {
        logger("animation end called.------")
        displayManager_.getText("winValue").setText("");
        soundManager_.stopSound("reelSound");
        eventManager_.clearEvt();
        won=winManager_.evaluate(spinManager_.getReels());

        wildManager_.endAnimHandle((winManager_.getWildNum()>0)?winManager_.getWildSimbs():null, eventManager_);
        scatterManager_.endAnimHandle(winManager_.getScatterSimbs(),winManager_.getScatterWinAmt(),eventManager_);
        twinReelManager_.hideTwinReels();
        if (won) {
            logger("win.------")
            lineManager_.endAnimHandle( winManager_.getAllWinsSorted(),eventManager_);
            freeSpinsManager_.endAnimHandle(eventManager_);
        } else {
            logger("no win.------")
            if (winManager_.getScatterWinAmt() > 0){
                eventManager_.addEvent(updateScatterBalance, 200);
            }
            freeSpinsManager_.endAnimHandle(eventManager_);
            if (autoPlayManager_.getIsInAutoPlay())
                framework.updateSmallMessageText(Translate.do("Good luck"));
            else
                displayManager_.timedMessage(Translate.do("No win? free re-spin!"), 2000, Translate.do("Good luck"));
        }
        if (spinManager_.getFsResp()!=null && spinManager_.getFsResp().won!=null && Number(spinManager_.getFsResp().won>0))respin_=true;
        if (freeRoundsManager_.getIsInFr()==true && freeSpinsManager_.getIsInFs() == false ){//no add delay during nested FS
            eventManager_.addEvent(freeRoundsManager_.getFreeRoundsEval,lineManager_.getTotalDuration());
        }

        buttonManager_.applyState("AFTERSPIN");
        if (!fsWon && freeSpinsManager_.getIsInFs() == true && freeSpinsManager_.getFsNumber() == 0) {
            eventManager_.addEvent(fsEval_,(compulsiveFlag_)?200:2000);
        }else{
            eventManager_.addEvent(fsEval_, 0);
        }
        eventManager_.triggerEvt();
    }

    function updateBalance_(txt) {
        logger("update balance "  + " "+getStackTrace().join('\n'));
        //framework.updateSmallMessageText(Translate.do("You won:") + " " + balanceManager_.getCurrencySmb() + " " + Util.formatNumber(winManager_.getWinAmt(), 2));
        freeRoundsManager_.addWin(winManager_.getWinAmt());
        freeRoundsManager_.updateFreeRoundsTot();
        balanceManager_.balanceUpdate();
    }

    function updateScatterBalance(){
        winAmtManager_.showWin(winManager_.getScatterWinAmt(), null, null, null);
        freeRoundsManager_.addWin(winManager_.getScatterWinAmt());
        freeRoundsManager_.updateFreeRoundsTot();
        balanceManager_.balanceUpdate();
    }

    function fsEval_(){
        spinning_=false;
        fs=freeSpinsManager_.getIsInFs();
        fsWon=freeSpinsManager_.getFsWon();
        if (fsWon ){
            setTimeout(apEval_, (gameClass_.getCompulsivePlayer())?0: Number(ReelConfig.fsSpinDelay ));
        }else{
            apEval_();
        }
    }

    function apEval_(){
        if (won){
            setTimeout(enableButton_,500);
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

        if (gameParams.force=="Enable"){
            setTimeout(hideForcePanel_,3000);
        }

        if(freeSpinsManager_.getIsInFs() || fsWon ) {
            fs = freeSpinsManager_.getFreeSpinsEval(false); //false cause in this game the balance will be updated after each fs
        }

        if (freeRoundsManager_.getIsInFr()==true){
            fr=freeRoundsManager_.getFreeRoundsEval();
        }

        ap=autoPlayManager_.getAutoPlayEval();

        logger("enable button called.------"+fs + " " +fr +" "+ap);
        if (ap ==false && fs == false && fsWon==false) {
            if (ap==false && autoPlayManager_.getIsInAutoPlay()==true){
                eventManager_.clearEvt();
                eventManager_.addEvent(showApMessage_, Math.min(lineManager_.getTotalDuration()  ,5000),[ap]);
                eventManager_.triggerEvt();
            }else{
                finalizeEnable_();
            }
        }else{
            eventManager_.clearEvt();
            if (ap==false && autoPlayManager_.getIsInAutoPlay()==true){
                eventManager_.addEvent(showApMessage_, Math.min(lineManager_.getTotalDuration()  , (compulsiveFlag_)?100:800),[ap]);
            }
            eventManager_.addEvent(startAutoSpin_, Math.min(lineManager_.getTotalDuration()  ,(compulsiveFlag_)?100:800),[false]);
            eventManager_.triggerEvt();
        }
    }

    function startAutoSpin_(par){
        if (autoPlayManager_.getIsInAutoPlay() || fs ) {
            if (autoPlayManager_.getIsFeature()==false || fs==true){
                gcmCalls_("ANIMATION_END",null,true);
                realDoSpin_(par);
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
        return ["0.01", "0.02", "0.05", "0.10", "0.25", "0.50", "1.00", "2.00", "5.00", "10.00"]; //todo read from json
    }

    function fakeEvent_() {
    }

    function upperSmbCallBack_(i) {
        //called after spin to move the symbols in the upper position before moving the reel
        for (var a = 0; a < ReelConfig.numIcons; a++) {
            var smb = (spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb != null) ? spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb : spinManager_.getSpinReelResp().reel[i].smb[a].smb;
            var s = spinManager_.getReels()[i].swapSmb(smb, a);
            if (spinManager_.getSpinReelResp().reel[i].smb[a].special == "trigger") { //check for special to animate
                s.reel = i;
                s.smb = a;
                spinManager_.addTriggerIcon(s);
            }
            if (gameClass_.checkSpecialSymbol != null && gameClass_.checkSpecialSymbol(spinManager_.getSpinReelResp().reel[i].smb[a].smb) == true) {    //check for other symbols the lazy guy didn't add special for( example Fs multiplier symbols in Ostara)
                s.reel = i;
                s.smb = a;
                spinManager_.addTriggerIcon(s);
            }
        }
    }

    function playTriggeredSmb_(){
        var iconN=-1;
        var triggerSymbol_=spinManager_.getTriggerIcons();
        for (var a in triggerSymbol_){
            if ( triggerSymbol_[a].played==undefined) {
                iconN = triggerSymbol_[a].smbNum;
                add = true;
                var smb = game_.add.sprite(triggerSymbol_[a].x, triggerSymbol_[a].y, "anim" + iconN);
                smb.anchor.set(.5, .5);
                smb.animations.add("anim");
                smb.scale.x = 1;
                smb.scale.y = 1;

                triggerSymbol_[a].visible = false;

                spinManager_.getReelGroup(triggerSymbol_[a].reel).add(smb);
                spinManager_.setAnimationMap(triggerSymbol_[a].reel, triggerSymbol_[a].smb, smb);
                smb.animations.play("anim", 24, false, true, updateIcon_, triggerSymbol_[a]);
                triggerSymbol_[a].played=true;
            }
        }
        soundManager_.playSound("smbWin_"+iconN);
    }

    function updateIcon_(obj){
        obj.visible=true;
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
        getBetConfiguration: getBetConfiguration_,
        getBetConfigurationDeg: getBetConfigurationDeg_,
        doSpin: doSpin_,
        doAp:doAp_,
        betSelector:betSelector_,
        doPt:doPt_,
        doStop:doStop_,
        closePt:closePt_,
        leaveGame:leaveGame_,
        backToGame:backToGame_,
        realDoSpin:realDoSpin_,
        fakeEvent:fakeEvent_,
        fsEval:fsEval_,
        hideFs:hideFs_,
        updateBalance:updateBalance_,
        changeBet:changeBet_,
        upperSmbCallBack:upperSmbCallBack_,
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
            }else{
                soundManager_.playBgSound("bgSlot");
            }
        },
        getFsIcon:function(){
            return "";
        },
        getIsRespin:function () {
            return respin_;
        }
    }

    return me;
}