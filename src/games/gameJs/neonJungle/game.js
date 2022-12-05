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

    // "icon":[14,,14,,8],
    //     "anim":["place","boom","place","boom","still"],
    var iconsSubst_={

    }
    var waitForSubstitution_=false;
    var wonBonus=0;
    var triggerSymbol_=[];
    var onGame_=false;
    var spinning_=false;
    var showScatterWin_=false;
    var showFsWin_=false;
    var refuseCompulsive_=false;
    var compulsiveFlag_=false;
    var compulsiveSettingBakup_=displayManager.groups.centralWin.thresHolds;

    function create_() {
        //display manager levels
        displayManager_.getGroup("bg").visible=true;
        displayManager_.getGroup("mask").visible=true;
        displayManager_.getGroup("frame").visible=true;
        displayManager_.getGroup("status").visible=true;
        displayManager_.getGroup("logo").visible=true;
        spinManager_.createReels();
        guiBottomBar_.setBetControlInitialBet(ReelConfig.bet);//todo change this, it's just to apply the default bet

        bonusManager_.addBonus("KenoBonus");
        scatterManager_.addScatter(10);
    }

    function initGame_(){
        gcmCalls_("STAKE",balanceManager_.getCoinValue());
        if (communicationManager_.getResumeStatus().status.hand=="freespins") {
            if (communicationManager_.getResumeStatus().status !=null && communicationManager_.getResumeStatus().status.stake>0){
                changeBet_(communicationManager_.getResumeStatus().status.stake/100, true);
            }
            //f1x2.GcmError(-3);
            freeRoundsManager_.frChecker();
            freeSpinsManager_.parse(communicationManager_.getResumeStatus());
            buttonManager_.applyHide();
            messageBox_.showMessage("game", "You have unused Free Spins", "They will be automatically started", startResumeFs_);
        }else if (communicationManager_.getResumeStatus().status.hand=="bonus"){
            if (communicationManager_.getResumeStatus().status !=null && communicationManager_.getResumeStatus().status.stake>0){
                changeBet_(communicationManager_.getResumeStatus().status.stake/100, true);
            }
            //f1x2.GcmError(-3);
            freeRoundsManager_.frChecker();
            buttonManager_.applyHide();
            framework.hideFramework();
            messageBox_.showMessage("game", "You have an unfinished Bonus", "it will be automatically started", startResumeBonus_);
        }else{
            buttonManager_.applyRestore();
            buttonManager_.applyState("NH");
            freeRoundsManager_.frChecker();
            idleCycleManager_.startIdleCycle();
            //soundManager_.playBgSound("bgSlot");
        }
        onGame_=true;
        framework.showFramework();
    }

    function startResumeBonus_(){
        buttonManager_.applyRestore();
        bonusManager_.setResumeFlag(true);
        communicationManager_.sendServletRequest("bonusSetup");
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
        eventManager_.clearEvt();
        logger("----spin ---- "+ getStackTrace().join('\n'));
        
        if(won){
            //updateBalance_("WIN");
        }
        buttonManager_.applyState("SPIN");

        if (ReelConfig.spinType=="singleIconReelSpin") {
            //spinManager_.startSpin(swipe[0]);
        }else{
            lineManager_.stopEvents();
            bonusManager_.clearLineEval();
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
                showScatterWin_ = false;
                showFsWin_ = false;

                autoPlayManager_.updateApNum();
                freeSpinsManager_.updateFreeSpinsNum();
                freeRoundsManager_.updateFreeRoundsNum();

                logger(" interrupted win animation ")
                winAmtManager_.forceToComplete();
                lineManager_.clearLineAfterValue();
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
                //console.log("hit spin");
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
        logger("animation end called.------"+spinManager_.getSpinResp())
        //lineManager_.initClass();
        displayManager_.getText("winValue").setText("");
        soundManager_.stopSound("reelSound");
        eventManager_.clearEvt();
        won=winManager_.evaluate(spinManager_.getReels());
        fsWon=freeSpinsManager_.getFsWon();
        triggerSymbol_=spinManager_.getTriggerIcons();
        wonBonus= (spinManager_.getSpinResp()!=null && spinManager_.getSpinResp().bonus!=null)?spinManager_.getSpinResp().bonus.wonBonus:0;
        fs=false;
        if(freeSpinsManager_.getIsInFs() || fsWon ) {
            fs = freeSpinsManager_.getFreeSpinsEval();
            idleCycleManager_.stopIdleCycle();
        }
        displayManager_.getText("winValue").setText("");
        evaluateWinnings_();
    }

    function evaluateWinnings_(){
        //start bonus if needed, displays all winnings (also called after bonus to display lines winnings), after winnings call the autoplay and freespins evaluator
        lineManager_.clearLine();
        eventManager_.clearEvt();
        if (triggerSymbol_.length>0){
            eventManager_.addEvent(playTriggeredSmb_ ,500);
            var tOut=(winManager_.getScatterWinAmt()[0]!=undefined || fsWon || wonBonus)?2000:1000;
            eventManager_.addEvent(fakeEvent_, tOut);//delay for scatter bonus and FS animations
        }

        if (wonBonus==0) {
            if (freeRoundsManager_.getIsInFr()==true){
                fr=freeRoundsManager_.getFreeRoundsEval();
            }
            logger("NO bonus found ")

            wildManager_.endAnimHandle((winManager_.getWildNum()>0)?winManager_.getWildSimbs():null, eventManager_);

            twinReelManager_.hideTwinReels();

            if (won) {
                lineManager_.endAnimHandle(winManager_.getAllWinsSorted(), eventManager_);
                if (winManager_.getScatterWinAmt()[0]!=undefined && winManager_.getScatterWinAmt()[0][10]!=undefined) {
                    goBackAfterCentralWin_();
                    freeRoundsManager_.addWin(winManager_.getScatterWinAmt());
                }
                if (freeRoundsManager_.getIsInFr()==true && freeSpinsManager_.getIsInFs() == false ){//no add delay during nested FS
                    eventManager_.addEvent(fakeEvent_,(won)?lineManager_.getTotalDuration():0);
                }

            } else {
                if (winManager_.getScatterWinAmt()[0]!=undefined && winManager_.getScatterWinAmt()[0][10]!=undefined) {
                    goBackAfterCentralWin_();
                    freeRoundsManager_.addWin(winManager_.getScatterWinAmt()[0][10].amt);
                }
                if(!fsWon)framework.updateSmallMessageText(Translate.do("Good luck"));
            }
            freeSpinsManager_.endAnimHandle(eventManager_);


            buttonManager_.applyState("AFTERSPIN");

            if (fsWon && freeSpinsManager_.getIsInFs() == true && freeSpinsManager_.getFsNumber() == 0) {
                eventManager_.addEvent(fsEval_, 2000);
            } else {
                eventManager_.addEvent(fsEval_, (freeSpinsManager_.getFsAdd() == true)?2000:0);
            }
        }else{
            eventManager_.addEvent(startBonus_, 2800);
            logger("bonus found ");
        }
        eventManager_.triggerEvt();
    }

    function startBonus_(){
        displayManager_.getText("txtChestPanel2").visible=true;
        idleCycleManager_.stopIdleCycle();
        if (wonBonus==0)return;
        wonBonus=0;
        //send a bonus setup request
        communicationManager_.sendServletRequest("bonusSetup");
    }

    function updateBalance_(txt) {
        logger("update balance "  + " "+getStackTrace().join('\n'));
        //framework.updateSmallMessageText(Translate.do("You won:") + " " + balanceManager_.getCurrencySmb() + " " + Util.formatNumber(winManager_.getWinAmt(), 2));
        freeRoundsManager_.addWin(winManager_.getWinAmt());
        freeRoundsManager_.updateFreeRoundsTot();
    }

    function goBackAfterCentralWin_(){
        if (winManager_.getScatterWinAmt()[0][10]!=undefined)lineManager_.completeBonusValue( winManager_.getScatterWinAmt()[0][10].amt, "Scatter Win");
    }

    function fsEval_(){
        spinning_=false;
        fs=freeSpinsManager_.getIsInFs();
        fsWon=freeSpinsManager_.getFsWon();
        if (fsWon  ){
            setTimeout(apEval_,Number(ReelConfig.fsSpinDelay ));
        }else{
            apEval_();
        }
    }

    function apEval_(){
        if ((won || winManager_.getScatterWinAmt()[0]!=null)){
            enableButton_();
            multiplierManager_.updateMultiplier(true);
        }else{
            enableButton_();
            multiplierManager_.resetMultipliers();
        }
    }

    function enableButton_() {
        if (freeSpinsManager_.getIsInFs() == false || freeSpinsManager_.getFsNumber() <= 0) {
             if(freeRoundsManager_.getIsInFr()==false || updateBalanceOnFr_()==true)balanceManager_.balanceUpdate(false,lineManager_.getTotalTumblingWin());
        }
        ap=autoPlayManager_.getAutoPlayEval();
        if (gameParams.force=="Enable"){
            setTimeout(hideForcePanel_,3000);
        }
        if(freeSpinsManager_.getIsInFs() || fsWon ) {
            fs = freeSpinsManager_.getFreeSpinsEval(false); //false cause in this game the balance will be updated after each fs
        }

        if (freeRoundsManager_.getIsInFr()==true && freeSpinsManager_.getIsInFs() == false ){//no add delay during nested FS
            freeRoundsManager_.getFreeRoundsEval();
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
            eventManager_.addEvent(startAutoSpin_,(won || winManager_.getScatterWinAmt()[0]!=null)?lineManager_.getTotalDuration():500,[false]);
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
        }else{
            idleCycleManager_.startIdleCycle();
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
            }else if (spinManager_.getSpinReelResp().reel[i].smb[a].special == "mult4") { //check for mult to animate
                s.reel = i;
                s.smb = a;
                s.special="mult";
                spinManager_.addTriggerIcon(s);
            }
        }
    }

    function playTriggeredSmb_(){
        var trigger=false;
        var iconN=-1;
        triggerSymbol_=spinManager_.getTriggerIcons();
        for (var a in  triggerSymbol_){
            if (triggerSymbol_[a].special!="mult" &&  triggerSymbol_[a].played==undefined) {
                iconN = triggerSymbol_[a].smbNum;
                var smb = game_.add.sprite(triggerSymbol_[a].x, triggerSymbol_[a].y, "anim" + iconN);
                smb.anchor.set(.5, .5);
                smb.animations.add("anim");
                smb.scale.x = 1;
                smb.scale.y = 1;

                triggerSymbol_[a].visible = false;

                spinManager_.getReelGroup(triggerSymbol_[a].reel).add(smb);
                spinManager_.setAnimationMap(triggerSymbol_[a].reel, triggerSymbol_[a].smb, smb);
                if (iconN==10 || iconN==12)//scatter animation should disappear after the animation
                    smb.animations.play("anim", 24, false, true, cbEndAnim, triggerSymbol_[a]);
                else
                    smb.animations.play("anim", 24, false, false);
                triggerSymbol_[a].played = true;
                trigger=true;
            }
        }
        if (!trigger) {
            soundManager_.playSound("smbWin_" + iconN);
            if (freeRoundsManager_.getIsInFr() == false)idleCycleManager_.forceIdleCycle("s1"); //forces the logo to idle cycle
        }
    }

    function cbEndAnim(smb){
        smb.visible=true;
    }

    function setReelsCallback_(){
        //called when the spin resp is being received
        randomizeLights_();
    }


    function randomizeLights_(){
        if (freeSpinsManager_.getIsInFs())return;
        var res=spinManager_.getSpinResp().status.selected;
        var s;
        var smb;
        var special;
        var sound="slights-random";

        if (res>14)if (Util.getRandomInt(1,100)>80)return;//used to cut the number of fake lights
        special= spinManager_.getSpinReelResp().reel[res%5].smb[res%3].special;

        s = spinManager_.getReels()[res % 5].getSymbol(res%3);
        if (res>14) {
            smb = game_.add.sprite(s.x, s.y, "lights-random");
        }else{
            if (special=="mult4") {
                smb = game_.add.sprite(s.x, s.y, "lights-mult");
                sound="slights-mult";
            }else if (special=="trigger") {
                smb = game_.add.sprite(s.x, s.y, "lights-reFocus");
                sound="slights-reFocus";
            }else {
                return;
                //not used anymore smb = game_.add.sprite(s.x, s.y, "lights-focus");
            }
        }
        smb.anchor.set(.5, .5);
        smb.animations.add("anim");
        smb.scale.x=1;
        smb.scale.y=1;
        displayManager_.getGroup("lights").add(smb);
        setTimeout(ligthPlay_,(res % 5)* (compulsiveFlag_)?50:250,smb,sound,res);
    }

    function ligthPlay_(smb,sound,res){
        smb.res=res;
        smb.animations.play("anim", (compulsiveFlag_)?48:24, false, false,afterRandomLight_,smb);
        soundManager_.playSound(sound);
    }

    function afterRandomLight_(smb){
        setTimeout(removeLights_, (compulsiveFlag_)?100:200,smb);
    }

    function removeLights_(smb){
        TweenMax.to(smb, (compulsiveFlag_)?.3:.7,{alpha:0,onComplete:reallyRemove_,onCompleteParams:[smb]});
        if (smb.res<14)TweenMax.to(smb.scale,(compulsiveFlag_)?.3:.7,{x:1.2,y:1.2});    //just scale when winning
    }

    function reallyRemove_(smb){
        smb.visible=false;
        smb.alpha=1;
        smb=null;
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
        evaluateWinnings:evaluateWinnings_,
        fakeEvent:fakeEvent_,
        fsEval:fsEval_,
        hideFs:hideFs_,
        updateBalance:updateBalance_,
        changeBet:changeBet_,
        setReelsCallback:setReelsCallback_,
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
        getSubstIcon:function (icon) {
            return {
                "subst": icon,
                "type": "icon"
            };
            if (iconsSubst_[icon]!=undefined && (icon!=7 || icon==7 && freeSpinsManager_.getIsInFs() )) {
                var obj= iconsSubst_[icon];
                //replacing bomb / fs uses cherry bomb
                if (obj.icon[0]== 99){
                    if(freeSpinsManager_.getIsInFs()){
                        obj.icon[0]=15;
                    }else{
                        obj.icon[0]=14;
                    }
                }
                return obj;
            }else {
                return {
                    "subst": icon,
                    "type": "icon"
                };
            }
        },
        setWaitForSubstitution:function(){
            waitForSubstitution_=true;
        },
        setMessageOnOff:function (val) {
            messageOn_=val;
        },
        getMessageOnOff:function(){
            return messageOn_;
        },
        getHlMaximumIcon:function(){
            //during the idle cycle the maximum disable icon will be 9. never disable wilds
            return 13;
        },
        getCompulsivePlayer:function () {
            return compulsiveFlag_;
        },
        startSounds:function(){
            if (communicationManager_.getResumeStatus().status.hand=="freespins") {
                soundManager_.playBgSound("bgFs");
            }else if (communicationManager_.getResumeStatus().status.hand=="bonus"){
                soundManager_.playBgSound("bgKenoBonus");
            }else{
                soundManager_.playBgSound("bgSlot");
            }
        },
        frStart:function(){
            idleCycleManager_.stopIdleCycle();
        },
        frStop:function(){
            if (freeRoundsManager_.getIsInFr() == false)idleCycleManager_.startIdleCycle();
            buttonManager_.applyRestore();
        },
        getLastFSTime:function(){
            //return the delay to close sticky spins
            return (won || winManager_.getScatterWinAmt()[0]!=null)?lineManager_.getTotalDuration():3000;
        },
        getFsIcon:function(){
            return "";
        }
    }

    return me;
}
