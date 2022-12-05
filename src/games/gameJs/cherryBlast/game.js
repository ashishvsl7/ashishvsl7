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

    // "icon":[14,,14,,8],
    //     "anim":["place","boom","place","boom","still"],
    var iconsSubst_={
        8:{
            "subst":8,
            "type":"anim",
            "loop":false,
            "killOnComplete":true,
            "callBack":endBombAnimation_,
            "reels":[1,2,3],
            "icon":[99,8],
            "anim":["place","boom"],
        },
        9:{
            "subst":9,
            "type":"anim",
            "loop":false,
            "killOnComplete":true,
            "callBack":endBombAnimation_,
            "reels":[1,2,3],
            "icon":[99,9],
            "anim":["place","boom"],
        },
        10:{
            "subst":10,
            "type":"anim",
            "loop":false,
            "killOnComplete":true,
            "callBack":endBombAnimation_,
            "reels":[1,2,3],
            "icon":[99,10],
            "anim":["place","boom"],
        },
        11:{
            "subst":11,
            "type":"anim",
            "loop":false,
            "killOnComplete":true,
            "callBack":endBombAnimation_,
            "reels":[1,2,3],
            "icon":[99,11],
            "anim":["place","boom"],
        },
        12:{
            "subst":12,
            "type":"anim",
            "loop":false,
            "killOnComplete":true,
            "callBack":endBombAnimation_,
            "reels":[1,2,3],
            "icon":[99,12],
            "anim":["place","boom"],
        },
        13:{
            "subst":13,
            "type":"anim",
            "loop":false,
            "killOnComplete":true,
            "callBack":endBombAnimation_,
            "reels":[1,2,3],
            "icon":[99,13],
            "anim":["place","boom"],
        }
    }
    var waitForSubstitution_=false;
    var wonBonus = 0;
    var onGame_=false;
    var spinning_=false;
    var showScatterWin_=false;
    var showFsWin_=false;

    function create_() {
        //display manager levels
        displayManager_.getGroup("bg").visible=true;
        displayManager_.getGroup("mask").visible=true;
        displayManager_.getGroup("frame").visible=true;
        displayManager_.getGroup("status").visible=true;
        displayManager_.getGroup("logo").visible=true;        spinManager_.createReels();
        guiBottomBar_.setBetControlInitialBet(ReelConfig.bet);//todo change this, it's just to apply the default bet
        logger("nh call8")
        bonusManager_.addBonus("MazeBonus");
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
            buttonManager_.applyHide();
            freeRoundsManager_.frChecker();
            messageBox_.showMessage("game", "You have an unfinished Bonus", "it will be automatically started", startResumeBonus_);
        }else{
            buttonManager_.applyRestore();
            buttonManager_.applyState("NH");
            freeRoundsManager_.frChecker();
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
        buttonManager_.applyState("SPIN");

        if(won){
            updateBalance_();
        }
        
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
                waitForSubstitution_ = false;
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

            logger("NO bonus found ")

            wildManager_.endAnimHandle((winManager_.getWildNum()>0)?winManager_.getWildSimbs():null, eventManager_);

            twinReelManager_.hideTwinReels();

            if (waitForSubstitution_)eventManager_.addEvent(fakeEvent_,(compulsiveFlag_)?700:2300);
            if (won) {
                lineManager_.endAnimHandle(winManager_.getAllWinsSorted(), eventManager_);
                freeSpinsManager_.endAnimHandle(eventManager_);
                if (freeRoundsManager_.getIsInFr()==true && freeSpinsManager_.getIsInFs() == false ){//no add delay during nested FS
                    eventManager_.addEvent(fakeEvent_,(won)?lineManager_.getTotalDuration():0);
                }

            } else {
                logger("no win.------"+waitForSubstitution_)
                    if (winManager_.getScatterWinAmt()[0]!=null) {
                        if (winManager_.getScatterWinAmt()[0][10] != null) {
                        eventManager_.addEvent(updateScatterBalance, 0);
                        eventManager_.addEvent(fakeEvent_, 2000);
                    }
                    if (winManager_.getScatterWinAmt()[0][12] != null) {
                        eventManager_.addEvent(updateScatterBalance, 0);
                        eventManager_.addEvent(fakeEvent_, 2000);
                    }
                }

                freeSpinsManager_.endAnimHandle(eventManager_);
                if(!fsWon)framework.updateSmallMessageText(Translate.do("Good luck"));
            }

            buttonManager_.applyState("AFTERSPIN");

            if (fsWon && freeSpinsManager_.getIsInFs() == true && freeSpinsManager_.getFsNumber() == 0) {
                eventManager_.addEvent(fsEval_, 2000);
            } else {
                eventManager_.addEvent(fsEval_, (freeSpinsManager_.getFsAdd() == true)?2000:0);
            }
        }else{
            logger("bonus found ");
        }
        eventManager_.triggerEvt();
    }

    function startBonus_(){
        if (wonBonus==0)return;
        wonBonus=0;
        //send a bonus setup request
        communicationManager_.sendServletRequest("bonusSetup");
    }

    function updateBalance_(txt) {
        if (winManager_.getScatterWinAmt()>0) {
            winAmtManager_.showWin(Number(winAmtManager_.getLineWinAmt())+Number(winManager_.getScatterWinAmt()[0][10].amt), null,null,null,winAmtManager_.getLineWinAmt());
        }
        freeRoundsManager_.updateFreeRoundsTot();
    }

    function updateScatterBalance(){
        if(freeSpinsManager_.getIsInFs()){
            lineManager_.showBonusWin(winManager_.getScatterWinAmt()[0][12].amt / balanceManager_.getCoinValue() * lineManager_.getLinesNumber() ,winManager_.getScatterWinAmt()[0][12].amt);
            freeSpinsManager_.updateFreeSpinsTotWon();
        }else{
            if (winManager_.getScatterWinAmt()[0][10]!=null) {
                lineManager_.completeBonusValue(winManager_.getScatterWinAmt()[0][10].amt, "Scatter Win");
            }
            balanceManager_.balanceUpdate();
        }
    }

    function endScatterAnim_(){
        soundManager_.stopSound("incWin");
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
            setTimeout(enableButton_, 500);
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

        logger("enable button called.------"+fs + " " +fr +" "+ap + " "+fsWon);
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

    function endBombAnimation_(param,img){
        param.push(this);
        var blast;
        var stage=param[0].stage;
        var objP;
        var scaleFactor=1.7;
        var tOut=(compulsiveFlag_)?100:500;
        var speed=(compulsiveFlag_)?48:36;

        if (this._parent==undefined){
            objP=img;
            scaleFactor=1.25;
        }else{
            tOut=(compulsiveFlag_)?150:600;
            speed=(compulsiveFlag_)?48:24;
            objP=this._parent;
        }

        if (param[0].anim[stage]=="boom") {
            blast = game_.add.sprite(objP.x, objP.y, "cherryBlast");
            blast.animations.add("anim");
            blast.animations.play("anim", speed, false, true, endBombAnimation_, param);//todo parametric loop
            blast.scale.x = scaleFactor;
            blast.scale.y = scaleFactor;
            blast.anchor.set(.5, .5);
            blast.visible = true;
            displayManager_.getGroup("lines").add(blast);
            soundManager_.playSound("bomb");
            setTimeout(afterExplosion_, tOut, param[0].reel, param[0].realSmb, param[0].icon[stage],param[0].smb);
            stage++;
            param[0].stage=stage;
            param[1].remove(objP);
        }
    }

    function afterExplosion_(par1,par2,par3,par4){
        var trigger=false;
        var scatterAnim=false;
        var fsAnim=false;

        var s =spinManager_.getReels()[par1].replaceIcon(par2,par3,{"type":"fade"});
        s.reel=par1;
        s.smb=par2;
        if (spinManager_.getSpinReelResp().reel[par1].smb[par4].special=="trigger") {
            if (spinManager_.getSpinReelResp().reel[par1].smb[par4].smb==8){
                winManager_.addFsWinSmb(s);
                fsAnim=true;
            }else{
                spinManager_.addTriggerIcon(s);
                trigger=true;
            }
        }else if (spinManager_.getSpinReelResp().reel[par1].smb[par4].special=="anim") {
            winManager_.addScatterWinSmb(s);
            scatterAnim=true;
        }
        if (trigger){
           setTimeout(startBonus_,(compulsiveFlag_)?200:1200);
        }else if (scatterAnim){
            setTimeout(animScatterWin_,(compulsiveFlag_)?200:1200);
        }else if (fsAnim){
            setTimeout(animFsWin_,(compulsiveFlag_)?200:1200);
        }
    }

    function animFsWin_(){
        if (showFsWin_==true)return;
        showFsWin_=true;
        freeSpinsManager_.showFsIconAfterSubst(winManager_.getFsSimbs());
    }

    function animScatterWin_(){
        if (showScatterWin_==true)return;
        showScatterWin_=true;
        scatterManager_.showScatterAfterSubst(winManager_.getScatterSimbs(), winManager_.getScatterWinAmt());
    }

    function upperSmbCallBack_(i) {
        for (var a =0;a <3;a++) {
            if (spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb != null) {
                //create object
                    var s = {
                        "subst": "previous",
                        "type": "anim",
                        "loop": false,
                        "killOnComplete": true,
                        "callBack": gameClass_.endBombAnimation,
                        "reels": [1, 2, 3],
                        "icon": [spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb, spinManager_.getSpinReelResp().reel[i].smb[a].smb],
                        "anim": ["timer", "boom"],
                        "stage": 0,
                        "delay": (compulsiveFlag_)?.5: 1.3
                    }

                spinManager_.getReels()[i].swapSmb(spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb, a, s);
            }else{
                var obj=gameClass_.getSubstIcon(spinManager_.getSpinReelResp().reel[i].smb[a].smb);
                var s = {
                    "subst": obj.subst,
                    "type": obj.type,
                    "loop": false,
                    "killOnComplete": true,
                    "callBack": obj.callBack,
                    "reels":obj.reels,
                    "icon": obj.icon,
                    "anim": obj.anim,
                    "stage": 0,
                    "delay": (compulsiveFlag_)?.5: 1.3
                }

                logger("upper origin smb? "+ i + " smb "+a + " " +obj.subst+ " " + obj.reels );
                spinManager_.getReels()[i].swapSmb(obj.subst, a,s);
            }
        }
        // "icon": [spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb, 14,, spinManager_.getSpinReelResp().reel[i].smb[a].smb],
        //     "anim": ["timer", "place","boom","still"],
    }

    function playTriggeredSmb_(){
        var iconN=-1;
        var triggerSymbol_=spinManager_.getTriggerIcons();
        var add=false;

        for (var a in triggerSymbol_){
            if ( triggerSymbol_[a].played==undefined) {
                iconN = triggerSymbol_[a].smbNum;
                add = true;
                var smb = new Phaser.Sprite(game_, triggerSymbol_[a].x, triggerSymbol_[a].y, "anim" + iconN);
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
        if(add)soundManager_.playSound("smbWin_"+iconN);
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
        evaluateWinnings:evaluateWinnings_,
        fakeEvent:fakeEvent_,
        fsEval:fsEval_,
        hideFs:hideFs_,
        updateBalance:updateBalance_,
        changeBet:changeBet_,
        endBombAnimation:endBombAnimation_,
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
            //during the idle cycle the maximum disable icon will be 8. never disable wilds
            return 9;
        },
        getCompulsivePlayer:function () {
            return compulsiveFlag_;
        },
        startSounds:function(){
            if (communicationManager_.getResumeStatus().status.hand=="freespins") {
                soundManager_.playBgSound("bgFs");
            }else if (communicationManager_.getResumeStatus().status.hand=="bonus"){
                soundManager_.playBgSound("bgDashBonus");
            }else{
                soundManager_.playBgSound("bgSlot");
            }
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
