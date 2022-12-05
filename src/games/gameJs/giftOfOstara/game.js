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
    var eggActionsFS_=[0,1,2,3,4];
    var eggActionsMult_=[29,33];
    var eggActionsSC_=[30];
    var eggActionsWild_=[34];
    var eggActionsWildSticky_=[35];
    var accumGroup_;
    var accumText_;
    var triggerSymbol_;
    var isRespin_=false;
    var messageOn_=false;
    var refuseCompulsive_=false;
    var compulsiveFlag_=false;
    var compulsiveSettingBakup_=displayManager.groups.centralWin.thresHolds;
    var sideStatus_=0;
    var afterPopsVar_;
    var isSpinStopped_=false;
    var eggEvtManager_ = new EventManager();
    var lineCompletion_=false;

    function create_() {
     //display manager levels
        displayManager_.getGroup("bg").visible=true;
        displayManager_.getGroup("mask").visible=true;
        displayManager_.getGroup("frame").visible=true;
        displayManager_.getGroup("status").visible=true;

        displayManager_.getGroup("logo").visible=true;
        displayManager_.getGroup("freeSpinAccumulator").visible=true;
        displayManager_.getGroup("freeSpinAccumulatorMASK").visible=true;

        spinManager_.createReels();

        if(buttonManager_.getButton(frameworkSettings.buttons.autoButton.id)!=undefined)buttonManager_.getButton(frameworkSettings.buttons.autoButton.id).setText("");//todo change this, it's just to apply the default bet
        guiBottomBar_.setBetControlInitialBet(ReelConfig.bet);//todo change this, it's just to apply the default bet
    }

    function initGame_(){
        //init scatters
        scatterManager_.addScatter(12);
        scatterManager_.addScatter(13);
        scatterManager_.addScatter(14);
        scatterManager_.addScatter(15);

        accumGroup_= displayManager_.getGroup("freeSpinAccumulator");
        wildManager_.resumeWildReel();

        gcmCalls_("STAKE",balanceManager_.getCoinValue());
        if (communicationManager_.getResumeStatus().status.hand=="freespins" && communicationManager_.getResumeStatus().status.type!="respin") {
            if (communicationManager_.getResumeStatus().status !=null && communicationManager_.getResumeStatus().status.stake>0){
                changeBet_(communicationManager_.getResumeStatus().status.stake/100, true);
            }
            //f1x2.GcmError(-3);
            freeRoundsManager_.frChecker();
            freeSpinsManager_.parse(communicationManager_.getResumeStatus());
            freeSpinsManager_.resumeFs();
            buttonManager_.applyHide();
            messageBox_.showMessage("game", "You have unused Free Spins", "They will be automatically started", startResumeFs_);
        }else if (communicationManager_.getResumeStatus().status.hand=="freespins") {
            if (communicationManager_.getResumeStatus().status !=null && communicationManager_.getResumeStatus().status.stake>0){
                changeBet_(communicationManager_.getResumeStatus().status.stake/100, true);
            }
            //f1x2.GcmError(-3);
            freeRoundsManager_.frChecker();
            buttonManager_.applyHide();
            messageBox_.showMessage("game", "You have unused Re-Spin", "It will be automatically started", startResumeRespin_);
        }else{
            soundManager_.playBgSound("bgSlot");
            buttonManager_.applyRestore();
            buttonManager_.applyState("NH");
            freeRoundsManager_.frChecker();
            //soundManager_.playBgSound("bgSlot");
        }
        onGame_=true;
        framework.showFramework();
        if (framework.isTouch()) handleAlpha_();
        idleCycleManager_.startIdleCycle();
    }

    function startResumeRespin_(){
        isRespin_=true;
        fs=true;
        buttonManager_.applyRestore();
        if (freeRoundsManager_.getIsInFr()==false) {
            enableButton_();//it will start FS
        }else{
            realDoSpin_([false]);
        }
    }

    function startResumeFs_(){
        fs=true;
        buttonManager_.applyRestore();
        if (freeRoundsManager_.getIsInFr()==false) {
            enableButton_();//it will start FS
        }else{
            realDoSpin_([false]);
        }
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
        if(won){
            //updateBalance_("WIN");
        }
        spinning_=true;
        afterPopsVar_=null;
        isSpinStopped_=false;
        eggEvtManager_.clearEvt();
        eventManager_.clearEvt();
        logger("----spin ---- "+ getStackTrace().join('\n'));
        buttonManager_.applyState("SPIN");

        if (ReelConfig.spinType=="singleIconReelSpin") {
            //spinManager_.startSpin(swipe[0]);
        }else{
            if(accumText_!=undefined){
                accumText_.visible=false;
                accumGroup_.remove(accumText_);
                accumText_=null;
            }

            lineManager_.stopEvents();
            //bonusManager_.clearLineEval();
            wildManager_.clearWild(winManager_.getWildSimbs());
            winAmtManager_.resetWinManager();
            soundManager_.stopSound("winSound");


            balanceManager_.bet(betCheckCallBack_);
        }
    }

    function betCheckCallBack_(response) {
        var swipe = [false];

        //handling FS message here
        if (response == true || isRespin_==true) {
            if (autoPlayManager_.getIsInAutoPlay() == false || autoPlayManager_.getPreAutoPlayAutoriz() == true) {
                autoPlayManager_.updateApNum();
                freeSpinsManager_.updateFreeSpinsNum();
                freeRoundsManager_.updateFreeRoundsNum();
                winAmtManager_.forceToComplete();
                lineManager_.clearLineAfterValue();
                if (freeSpinsManager_.getIsInFs() == true || isRespin_) {
                    framework.updateSmallMessageText(Translate.do("Bet:") + " " + Translate.do((isRespin_) ? "free re-spins" : "free spin"));
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
        isRespin_=false;
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

        if (freeRoundsManager_.getIsInFr()==true){
            fr=freeRoundsManager_.getFreeRoundsEval();
        }
        //poppinUpEgg_( eventManager_);
        if (afterPopsVar_!=null) hatchingEgg_(eventManager_);
        handleSpecialSymbols_(eventManager_);
        wildManager_.endAnimHandle((winManager_.getWildNum()>0)?winManager_.getWildSimbs():null, eventManager_);
        scatterManager_.endAnimHandle(winManager_.getScatterSimbs(), winManager_.getScatterWinAmt(), eventManager_);
        twinReelManager_.hideTwinReels();
        freeSpinsManager_.updateFreeSpinsMult();
        if (won) {
            lineManager_.endAnimHandle(winManager_.getAllWinsSorted(), eventManager_);
            freeSpinsManager_.endAnimHandle(eventManager_);
            if (freeRoundsManager_.getIsInFr()==true && freeSpinsManager_.getIsInFs() == false ){//no add delay during nested FS
                eventManager_.addEvent(fakeEvent_,(won)?lineManager_.getTotalDuration():0);
            }

        } else {
            freeSpinsManager_.endAnimHandle(eventManager_);
            if(!fsWon)framework.updateSmallMessageText(Translate.do("Good luck"));
        }

        buttonManager_.applyState("AFTERSPIN");

        if (fsWon && freeSpinsManager_.getIsInFs() == true && freeSpinsManager_.getFsNumber() == 0) {
            eventManager_.addEvent(fsEval_, 4000);
        } else {
            eventManager_.addEvent(fsEval_, (freeSpinsManager_.getFsAdd() == true)?2000:0);
        }
        eventManager_.triggerEvt();
    }

    function updateBalance_(txt) {
        logger("update balance "  + " "+getStackTrace().join('\n'));
        //framework.updateSmallMessageText(Translate.do("You won:") + " " + balanceManager_.getCurrencySmb() + " " + Util.formatNumber(winManager_.getWinAmt(), 2));
        freeRoundsManager_.addWin(winManager_.getWinAmt() * balanceManager_.getCoinValue());
        balanceManager_.balanceUpdate();
    }

    function updateScatterBalance_(){
        if (winManager_.getLineWinAmt()<=0) {
            var amt = Util.getNumericValue(winManager_.getScatterWinAmt()[0][10].amt) / balanceManager_.getCoinValue() * lineManager_.getLinesNumber();
            var time = lineManager_.showBonusCentralWinGreetings(amt);
            lineEvalTOut_ = setTimeout(goBackAfterCentralWin_, Number(time));

            freeRoundsManager_.addWin(winManager_.getScatterWinAmt());
            freeRoundsManager_.updateFreeRoundsTot();
            balanceManager_.balanceUpdate();
        }
    }

    function goBackAfterCentralWin_(){
        lineManager_.completeBonusValue( winManager_.getScatterWinAmt()[0][10].amt, "Scatter Win");
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
        if ((won || winManager_.getScatterWinAmt()[0]!=null)){
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
        if (framework.isTouch())reEnableButtonA_();
        ap=autoPlayManager_.getAutoPlayEval();
        if (gameParams.force=="Enable"){
            setTimeout(hideForcePanel_,3000);
        }

        logger("enable button called.------")
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
                eventManager_.addEvent(showApMessage_, 500,[ap]);
                eventManager_.triggerEvt();
            }else{
                finalizeEnable_();
            }
        }else{
            eventManager_.clearEvt();
            if (ap==false && autoPlayManager_.getIsInAutoPlay()==true){
                eventManager_.addEvent(showApMessage_, 500,[ap]);
            }
            eventManager_.addEvent(startAutoSpin_,(won || winManager_.getScatterWinAmt()[0]!=null)?lineManager_.getTotalDuration():500,[false]);
            eventManager_.triggerEvt();
        }
    }

    function startAutoSpin_(par){
        if (autoPlayManager_.getIsInAutoPlay() || fs ) {
            if (autoPlayManager_.getIsFeature()==false || (autoPlayManager_.getStopOnFeature()==false && fs==true)){
                if (autoPlayManager_.getCanAp()==true) {
                    if (freeSpinsManager_.getEndPanelOn()==false) {
                        gcmCalls_("ANIMATION_END",null,true);
                        realDoSpin_(par);
                    }else{
                        setTimeout(startAutoSpin_, 1000, par);
                    }
                }else {
                    setTimeout(startAutoSpin_, 1000, par);
                }
            } else{
                buttonManager_.applyState("NH");
            }
        }else {
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
        return ["0.01", "0.02", "0.05", "0.10", "0.25", "0.50", "1.00", "2.00", "5.00", "10.00"];    //todo read from json
    }

    function fakeEvent_() {
    }

    function poppinUpEgg_(){
        var resp= spinManager_.getSpinResp();
        var extracted=resp.status.feature;
        var collected=resp.status.collected;
        if (resp.status.eggs!=null && resp.status.eggs[0]!=null)communicationManager_.getResumeStatus().status.collected[ framework.getBetValues().indexOf(Util.formatNumber(balanceManager_.getCoinValue(),2))]=resp.status.eggs;
        /*
        var eggActionsFS_=[0,1,2,3,4];
        var eggActionsMult_=[23];
        var eggActionsSC_=[24];
        var eggActionsWild_=[25,26,27,28,29,20];
        var eggActionsWildSticky_=[31];
        */
        if(eggActionsFS_.indexOf(extracted)>=0){    //check for low symbols  FS
            popEgg_(extracted,"FS",collected);
        } else if(eggActionsMult_.indexOf(extracted)>=0){ //multiplier egg
            popEgg_(extracted, "MULT/RESPIN");      //silver bunny ->  add the text to the hatching egg ------- or respin with egg and respin in the center
        } else if(eggActionsSC_.indexOf(extracted)>=0){ //scatter egg
            popEgg_(extracted,"SC");        //gold bunny  , animation and prize text anima
        } else if(eggActionsWild_.indexOf(extracted)>=0){ //wild reel egg
            popEgg_(34,"WILD");             //anim 11
        } else if(eggActionsWildSticky_.indexOf(extracted)>=0){ //sticky wild reel egg
            popEgg_(35,"WILDSTICKY");       //anim 12
        } else { //fake egg
            if (Util.getRandomInt(1,100)>75 && freeSpinsManager_.getIsInFs()==false && isRespin_==false && compulsiveFlag_==false){
                popEggFake_();
            }
        }
    }

    function popEggFake_(){
        soundManager_.playSound("eggRise");
        //kind of hatching egg, fake one
        var s = game_.add.sprite(displayManager.groups.freeSpinAccumulator.graphAsset.hatch.x-7, displayManager.groups.freeSpinAccumulator.graphAsset.hatch.y, "hatchingEgg");
        accumGroup_.add(s);
        s.anchor.set(.5,.5);
        s.visible=true;
        s.scale.x =1;
        s.scale.y =1;
        TweenMax.to(s,.6,{y:displayManager.groups.freeSpinAccumulator.graphAsset.hatch.yFinal,onComplete: afterPopsFake_,onCompleteParams: [s],ease:Bounce.easeInOut});

    }

    function popEgg_(icon,feature,collected){
        soundManager_.playSound("eggRise");
        //hatching effect that will trigger the hatchingFunction
        //attach the golden egg and tween it to exit the hole
        var s = game_.add.sprite(displayManager.groups.freeSpinAccumulator.graphAsset.hatch.x-7, displayManager.groups.freeSpinAccumulator.graphAsset.hatch.y, "hatchingEgg");
        accumGroup_.add(s);
        s.anchor.set(.5,.5);
        s.visible=true;
        s.scale.x =1;
        s.scale.y =1;
        s.icon=icon;
        s.feature=feature;
        s.collected=collected;
        afterPopsVar_=s;
        TweenMax.to(s,(compulsiveFlag_)?.2: .6,{y:displayManager.groups.freeSpinAccumulator.graphAsset.hatch.yFinal,onComplete: afterPops_,
            onCompleteParams: [s],ease:Bounce.easeInOut});
    }

    function afterPopsFake_(obj){
        soundManager_.playSound("eggFall");
        TweenMax.to(obj,(compulsiveFlag_)?.1: .3,{y:displayManager.groups.freeSpinAccumulator.graphAsset.hatch.y,onComplete: afterPopsBackFake_,
            onCompleteParams: [obj],ease:Bounce.easeInOut});
    }

    function afterPopsBackFake_(obj){
        obj.visible=false;
        obj=null;
    }

    function afterPops_(obj){
        soundManager_.playSound("eggReveal");
        obj.animations.add("anim");
        obj.animations.play("anim", (compulsiveFlag_)?24:(isSpinStopped_)?40:16, false, true);
    }

    function hatchingEgg_(evt){
        var resp= spinManager_.getSpinResp();
        var extracted=resp.status.feature;
        var collected=resp.status.collected;
        if (resp.status.eggs!=null && resp.status.eggs[0]!=null)communicationManager_.getResumeStatus().status.collected[ framework.getBetValues().indexOf(Util.formatNumber(balanceManager_.getCoinValue(),2))]=resp.status.eggs;

        if(eggActionsFS_.indexOf(extracted)>=0){    //check for low symbols  FS
            if(fsWon){
                evt.addEvent(fakeEvent_,(compulsiveFlag_)?1000: 4000);
            }else{
                evt.addEvent(fakeEvent_,(compulsiveFlag_)?800: 2200);
            }
        } else if(eggActionsMult_.indexOf(extracted)>=0){ //multiplier egg
            if (winManager_.getWinAmt()>0) {
                evt.addEvent(fakeEvent_,(compulsiveFlag_)?800: 2000);
            }else{
                evt.addEvent(fakeEvent_,(compulsiveFlag_)?1000: 5000);
                isRespin_=true;
            }
        } else if(eggActionsSC_.indexOf(extracted)>=0){ //scatter egg
            evt.addEvent(fakeEvent_,(compulsiveFlag_)?700: 2000);
        }

        var obj=afterPopsVar_;
        var smb = "";
        if (obj.feature=="MULT/RESPIN"){
            if (winManager_.getWinAmt()>0) {
                obj.feature="MULT";
            }else{
                obj.feature="RESPIN";
                isRespin_=true;
            }
        }
        var s = game_.add.sprite(obj.x + 7, obj.y, "anim" + obj.icon + ((obj.feature == "RESPIN") ? "r" : ""));
        accumGroup_.add(s);
        s.anchor.set(.5, .5);
        s.visible = true;
        s.height = 120;
        s.width = 120;
        s.icon = obj.icon;
        s.feature = obj.feature;
        s.collected = obj.collected;
        soundManager_.playSound("smbWin_" + obj.icon + ((obj.feature == "RESPIN") ? "r" : ""));
        s.animations.add("anim");
        s.animations.play("anim", (compulsiveFlag_)?48: 24, false, false, triggerFeature_, [obj, s]);
    }

    function triggerFeature_(obj){
     //   if (hasFocus_==true) {
            if (obj[0].feature == "FS") {
                freeSpinsManager_.updateFsNum(obj);
            } else if (obj[0].feature == "RESPIN") {
                triggerRespinFeature_(obj);
            } else if (obj[0].feature == "MULT") {
                triggerMultFeature_(obj);
            } else if (obj[0].feature == "SC") {
                triggerScatterFeature_(obj);
            } else if (obj[0].feature == "WILD") {
                triggerWildFeature_(obj);
            } else if (obj[0].feature == "WILDSTICKY") {
                triggerWildStickyFeature_(obj);
            }
     //   }else{
      //      setTimeout(triggerFeature_, 500, obj);
      //  }
    }

    function triggerRespinFeature_(obj){
        //fade the egg from the side
        //fade in the center - scaled x2,
        //animate it
        //play the respin text animation
        TweenMax.to(obj[1],.2,{alpha:0});

        respinAnim_();
    }

    function respinAnim_(){
        soundManager_.playSound("respinS");

        var sc = game_.add.sprite(640, 320, "icon29r");
        accumGroup_.add(sc);
        sc.anchor.set(.5,.5);
        sc.visible=true;
        sc.scale.x=1;
        sc.scale.y=1;

        var s = game_.add.sprite(640, 470, "respin");
        accumGroup_.add(s);
        s.anchor.set(.5,.5);
        s.visible=true;
        s.scale.x=1;
        s.scale.y=1;
        s.animations.add("anim");
        s.animations.play("anim", (compulsiveFlag_)?52: 24, false, false, endRespinAnim_, [s,sc]);
    }

    function endRespinAnim_(obj){
        TweenMax.to(obj[0],(compulsiveFlag_)?.2: .5,{alpha:0});
        TweenMax.to(obj[1],(compulsiveFlag_)?.2: .5,{alpha:0,onComplete:clearRespinAnim_,onCompleteParams:[obj]});
    }

    function clearRespinAnim_(obj){
        obj[0]=null;
        obj[1]=null;
        realDoSpin_([false]);
    }

    function triggerMultFeature_(obj){
        //if winnig hand show the multiplier
        soundManager_.playSound("mult");
        var amt= winManager_.getMultiplier();
        var msg1= "X" + amt;
        accumText_= new  Phaser.BitmapText(game_, obj[1].x , obj[1].y-20,"bmpFont",msg1 ,47,"center");

        accumText_.alpha=0;
        accumText_.anchor.set(.5,.5);
        accumGroup_.add(accumText_);

        accumText_.feature="MULT";
        TweenMax.to(obj[1],.2,{alpha:0});
        TweenMax.to(accumText_,.2,{alpha:1});
        TweenMax.to(accumText_.scale,.3,{x:3,y:3,ease:Bounce.easeOut,onComplete:bounce,onCompleteParams:[accumText_]});
    }

    function triggerScatterFeature_(obj){
        soundManager_.playSound("scatter");
        TweenMax.to(obj[1],.2,{alpha:0});

        var sc = game_.add.sprite(640, 320, "icon30");
        accumGroup_.add(sc);
        sc.anchor.set(.5,.5);
        sc.visible=true;
        sc.scale.x=1;
        sc.scale.y=1;

        var s = game_.add.sprite(640, 470, "scatterA");
        accumGroup_.add(s);
        s.anchor.set(.5,.5);
        s.visible=true;
        s.scale.x=1;
        s.scale.y=1;
        s.animations.add("anim");
        s.animations.play("anim", (compulsiveFlag_)?52: 24, false, false, endScatterAnim_, [s,sc]);
    }

    function endScatterAnim_(obj){
        //show the scatter text animation and prize
        //if winnig hand show the multiplier // else show the respin text and animations
        var amt= winManager_.getScatterWinAmt()[0][10].amt; //10 is the scatter number
        var msg1;
        if (balanceManager_.getShowIncredits() == false) {
            msg1= balanceManager_.getCurrencySmb()+ "" + Util.formatNumber(amt,Util.getNubersOfDecimal());
        } else {
            msg1= balanceManager_.getCurrencySmb()+ "" + Util.formatNumber(amt/ balanceManager_.getCoinValue() * lineManager_.getLinesNumber(),0);
        }

        accumText_= new  Phaser.BitmapText(game_, 640, 550,"bmpFont",msg1 ,60,"center");

        accumText_.alpha=0;
        accumText_.anchor.set(.5,.5);
        accumGroup_.add(accumText_);

        accumText_.feature="SC";
        TweenMax.to(obj[1],.2,{alpha:0});
        TweenMax.to(obj[0],.2,{alpha:0});
        TweenMax.to(accumText_,.2,{alpha:1});
        TweenMax.to(accumText_.scale,.3,{x:2,y:2,ease:Bounce.easeOut,onComplete:bounce,onCompleteParams:[accumText_]});
    }

    function triggerWildFeature_(obj){
        //show the wild reeel text and start the wild reel animation
        TweenMax.to(obj[1],.2,{delay:1,alpha:0});
    }

    function triggerWildStickyFeature_(obj){
        //show the sticky wild reeel text and start the wild reel animation and "kind of" 3FS
        TweenMax.to(obj[1],.2,{delay:1,alpha:0});
    }

    function bounce(txt){
        TweenMax.to(txt.scale,.4,{x:1.5,y:1.5,ease:Bounce.easeOut,onComplete:move,onCompleteParams:[txt]});
    }

    function move(txt){
        if (txt.feature=="SC") {
            TweenMax.to(txt, 2, {alpha: 0, y: txt.y - 200, onComplete: kill, onCompleteParams: [txt]});
            updateScatterBalance_();
        }
    }

    function kill(txt){
        txt.visible=false;
        txt.destroy();
    }
 
    function revert_(){
        return;
        //if (spinning_==true || buttonManager_.getCurrentState()!="NH")return;
        buttonA_=[];
        buttonA_.push(TweenMax.fromTo($(".button__background"), 2, {css: {opacity: .2}}, {css:{opacity:1},onComplete:handleAlpha_,delay:3}));
        buttonA_.push(TweenMax.fromTo($(".button__back"), 2, {css: {opacity: .2}}, {css:{opacity:1,delay:3}}));
    }

    function handleAlpha_(){
        $('.button__back').css("opacity",".65");
        $('.button__background').css("opacity",".65");
        return;
        buttonA_=[];
        if (ReelConfig.alphaButton!=null && ReelConfig.alphaButton==true)
        {
            buttonA_.push(TweenMax.fromTo($(".button__background"), 3, {css: {opacity: 1}}, {
                css: {opacity: .2},
                onComplete: revert_
            }));
            buttonA_.push(TweenMax.fromTo($(".button__back"), 3, {css: {opacity: 1}}, {css: {opacity: .2}}));
           // $('.button__back').css("opacity","0");
        }
    }

    function reEnableButtonA_(){
        return;
        for (var a in buttonA_){
            buttonA_[a].kill();
        }
        $('.button__background').css("opacity","1");
       // $('.button__back').css("opacity","1");
        handleAlpha_();
    }

    function handleSpecialSymbols_(evt){
        if(freeSpinsManager_.getIsInFs()==true) {
            evt.addEvent(animSpecialSymbols_, 0)
            if (communicationManager_.getResumeStatus().status.feature != undefined)evt.addEvent(fakeEvent_, 1000)
        }
    }

    function animSpecialSymbols_(){
        var sound=false;
        triggerSymbol_=spinManager_.getTriggerIcons();
        var iconN=-1;
        for (var a in triggerSymbol_){
            sound=true;
            iconN= triggerSymbol_[a].smbNum;
            add=true;
            var smb = game_.add.sprite(triggerSymbol_[a].x , triggerSymbol_[a].y , "fsSymbHL");
            smb.anchor.set(.5, .5);
            smb.animations.add("anim");
            smb.scale.x=1;
            smb.scale.y=1;
            smb.visible=true;

            spinManager_.getReelGroup(triggerSymbol_[a].reel).add(smb);
            spinManager_.setAnimationMap(triggerSymbol_[a].reel,triggerSymbol_[a].smb,smb);
            smb.animations.play("anim", (compulsiveFlag_ || freeSpinsManager_.getIsInFs())?52: 24, false, true);
        }
        if (sound) {
            soundManager_.playSound("eggAcc");
            setTimeout(playMultSound_, 1000, iconN);
        }
    }

    function playMultSound_(icon){
        soundManager_.playSound("smbWin_"+icon);
    }

    function checkSpecialSymbol_(num){
        var ret=false;
        if (freeSpinsManager_.getIsInFs()==true){
            ret=(spinManager_.getSpinResp()!=null && spinManager_.getSpinResp().freeSpin!=undefined && spinManager_.getSpinResp().freeSpin.feature!=null && spinManager_.getSpinResp().freeSpin.feature==num)?true:false;
        }
        return ret;
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
        triggerSymbol_=spinManager_.getTriggerIcons();
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

    function decreaseVolumeBG_(){
        if (freeSpinsManager_.getIsInFs()==false) {
            soundManager_.getBGSound("bgSlot").fadeOutBgSoundExternal(500, 0.6);
        }else{
            if (freeSpinsManager_.getType()!="stickySpins") {
                soundManager_.getBGSound("bgFs").fadeOutBgSoundExternal(800, 0.4);
            }else {
                soundManager_.getBGSound("bgFsS").fadeOutBgSoundExternal(800, 0.3);
            }
        }
    }

    function increaseVolumeBG_(){
        //console.log("wf1")
        if (freeSpinsManager_.getIsInFs()==false) {
            //console.log("wf2")
            soundManager_.getBGSound("bgSlot").increaseVolExternal(500);
        }else {
            if (freeSpinsManager_.getType()!="stickySpins") {
                //console.log("wf3")
                if (soundManager_.getCanPlayBg()) soundManager_.getBGSound("bgFs").increaseVolExternal(500);
            }else {
                //console.log("wf4")
                if (soundManager_.getCanPlayBg()) soundManager_.getBGSound("bgFsS").increaseVolExternal(500);
            }
        }
    }

    var me = {
        initGame: initGame_,
        create:create_,
        spinAnimEnd: spinAnimEnd_,
        evaluateWinnings:evaluateWinnings_,
        getBetConfiguration: getBetConfiguration_,
        getBetConfigurationDeg: getBetConfigurationDeg_,
        checkSpecialSymbol:checkSpecialSymbol_,
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
        upperSmbCallBack:upperSmbCallBack_,
        playTriggeredSmb:playTriggeredSmb_,
        changeCompulsiveState:changeCompulsiveState_,
        poppinUpEgg:poppinUpEgg_,
        decreaseVolumeBG:decreaseVolumeBG_,
        increaseVolumeBG:increaseVolumeBG_,
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
            if (communicationManager_.getResumeStatus().status.hand=="freespins" && communicationManager_.getResumeStatus().status.type!="respin") {
                soundManager_.playBgSound("bgFs");
            }else if (communicationManager_.getResumeStatus().status.hand=="bonus"){
                //soundManager_.playBgSound("bgKenoBonus", 1000, 1000);
            }else{
                //soundManager_.playBgSound("bgSlot");
                soundManager_.playAdditionalBgSound_("bgSlot2");
                soundManager_.playAdditionalBgSound_("bgSlot3");
            }
        },
        getIsRespin:function(){
            return isRespin_;
        },
        frStop:function(){
            buttonManager_.applyRestore();
        },
        getHlMaximumIcon:function(){
            //during the idle cycle the maximum disable icon will be 8. never disable wilds
            return 9;
        },
        getStickyWildSimbs:function () {
            return[];
        },
        isReelWilded:function(num){
            return wildManager_.isReelWilded(num);
        },
        getStickyWildManager:function(){
            return wildManager_;
        },
        getFsLevel:function(){
            if (freeSpinsManager_.getIsInFs()==false) {
                return sideStatus_;
            }else{
                return "";
            }
        },setFsStatus:function(value){
            sideStatus_=value;
        },
        hasStopped:function() {
            isSpinStopped_=true;
        },
        getLastFSTime:function(){
            //return the delay to close sticky spins
            return (won || winManager_.getScatterWinAmt()[0]!=null)?lineManager_.getTotalDuration():3000;
        },
        getFsIcon:function(){
            return "";
        },
        lineCompletion:function (value){
            //console.log("-----------------------line completion----------------------------!!!!!!")
            lineCompletion_=value;
        }
    }

    return me;
}
;