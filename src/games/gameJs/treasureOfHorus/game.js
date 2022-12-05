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
    var emitter_=[];
    var messageOn_=false;
    var compulsiveSettingBakup_=displayManager.groups.centralWin.thresHolds;

    // "icon":[14,,14,,8],
    //     "anim":["place","fly","place","boom","still"],

    /*
        place the fake symbol
        place the right scarab on and play the take off animation , then fly the scarab onto the right icon with the right fly-loop
        land the scarab in place
        play the turn-symbol animation to hide the scarab and turn the symbol
    */

    var iconsSubst_={
        9:{
            "subst":9,
            "type":"anim",
            "loop":false,
            "killOnComplete":true,
            "callBack":endBombAnimation_,
            "reels":[0,1,2,3,4],
            "icon":[99,99,99,99,9],
            "anim":["place","boom","fly","land","turn"]
        },
        10:{
            "subst":10,
            "type":"anim",
            "loop":false,
            "killOnComplete":true,
            "callBack":endBombAnimation_,
            "reels":[0,1,2,3,4],
            "icon":[99,99,99,99,10],
            "anim":["place","boom","fly","land","turn"]
        },
        11:{
            "subst":11,
            "type":"anim",
            "loop":false,
            "killOnComplete":true,
            "callBack":endBombAnimation_,
            "reels":[0,1,2,3,4],
            "icon":[99,99,99,99,11],
            "anim":["place","boom","fly","land","turn"]
        },
        12:{
            "subst":12,
            "type":"anim",
            "loop":false,
            "killOnComplete":true,
            "callBack":endBombAnimation_,
            "reels":[0,1,2,3,4],
            "icon":[99,99,99,99,12],
            "anim":["place","boom","fly","land","turn"]
        }
    }
    var refuseCompulsive_=false;
    var compulsiveFlag_=false;
    var waitForSubstitution_=false;
    var wonBonus=0;
    var onGame_=false;
    var spinning_=false;
    var showScatterWin_=false;
    var fsSTage_=0;
    var stagePyr_;
    var emitter_=[];
    emitter_[1]=[];
    emitter_[2]=[];
    emitter_[3]=[];
    var emitterMask_=[];
    emitterMask_[1]=[];
    emitterMask_[2]=[];
    emitterMask_[3]=[];

    var eyeL;
    var eyeL1;
    var eyeL2;
    var eyeL3;
    var eyeL4;
    var eyeL5;

    var wild_9_=false;
    var wild_10_=false;
    var wild_12_=false;
    var wilSoundPlayed_=false;
    var turnSoundPlayed_false;

    function create_() {

        //display manager levels
        displayManager_.getGroup("bg").visible=true;
        displayManager_.getGroup("mask").visible=true;
        displayManager_.getGroup("frame").visible=true;
        displayManager_.getGroup("transition").visible=true;
        displayManager_.getGroup("status").visible=true;
        displayManager_.getGroup("logo").visible=true;
        displayManager_.getGroup("mask").children[4].children[0].animations.add("anim");

        for (var a=1;a<=3;a++){
            displayManager_.getGroup("mask_FS"+a).children[4].children[0].animations.add("anim");

            //emitters
            emitter_[a][0] = epsy_.loadSystem(displayManager.groups.bg.emitters["emitter"+a][0], 127, 200);
            emitter_[a][1] = epsy_.loadSystem(displayManager.groups.bg.emitters["emitter"+a][0], 1145, 200);
            displayManager_.getGroup("buttonFg").add(emitter_[a][0]);
            displayManager_.getGroup("buttonFg").add(emitter_[a][1]);

            emitterMask_[a][0]= game_.add.sprite(73, 166, "leftFireMask_FS"+a);
            emitterMask_[a][0].scale.x=1;
            emitterMask_[a][0].scale.y=1;
            displayManager_.getGroup("buttonFg").add(emitterMask_[a][0]);
            emitterMask_[a][0].visible=false;

            emitter_[a][0].visible=false;
            emitter_[a][1].visible=false;
            displayManager.groups.bg.emitters["emitter"+a][0].texture = game.cache.checkImageKey("particle");
            emitterMask_[a][1]= game_.add.sprite(1080, 166, "rightFireMask_FS"+a);
            emitterMask_[a][1].scale.x=1;
            emitterMask_[a][1].scale.y=1;
            displayManager_.getGroup("buttonFg").add(emitterMask_[a][1]);
            emitterMask_[a][1].visible=false;
        }

        spinManager_.createReels();
        guiBottomBar_.setBetControlInitialBet(ReelConfig.bet);//todo change this, it's just to apply the default bet
        logger("nh call8")
        scatterManager_.addScatter(8);
        changeFsStage_(true);
    }

    function eyeAnimStart_(){
        soundManager_.playSound("eyeWin");

        var pi=displayManager_.getGroup("mask_FS3").bgP3.children[0];
        TweenMax.to(pi,(compulsiveFlag_)?.5:1,{alpha:0});
        TweenMax.to(pi.scale,(compulsiveFlag_)?.5:1,{x:0,y:0});

        eyeL=displayManager_.getGroup("lightWin").topEye.children[0];
        eyeL.animations.add("anim");
        eyeL.animations.play("anim", (compulsiveFlag_)?48:24, false,false, null, null);//todo parametric loop
        eyeL.visible=true;

        eyeL1=displayManager_.getGroup("lightWin").leftEye.children[0];
        eyeL1.animations.add("anim");
        eyeL1.animations.play("anim", (compulsiveFlag_)?48:24, false,false, null, null);//todo parametric loop
        eyeL1.visible=true;

        eyeL2=displayManager_.getGroup("lightWin").rightEye.children[0];
        eyeL2.animations.add("anim");
        eyeL2.animations.play("anim", (compulsiveFlag_)?48:24, false,false, eyeAnimEnd_, null);//todo parametric loop
        eyeL2.visible=true;

        eyeL3=displayManager_.getGroup("lightWin").light1.children[0];
        eyeL3.animations.add("anim");
        eyeL3.animations.play("anim", Util.getRandomInt(24, 34), true,false, null, null);//todo parametric loop
        eyeL3.visible=true;

        eyeL4=displayManager_.getGroup("lightWin").light2.children[0];
        eyeL4.animations.add("anim");
        eyeL4.animations.play("anim", Util.getRandomInt(24, 34), true,false, null, null);//todo parametric loop
        eyeL4.visible=true;

        eyeL5=displayManager_.getGroup("lightWin").light3.children[0];
        eyeL5.animations.add("anim");
        eyeL5.animations.play("anim", Util.getRandomInt(24, 34), true,false, null, null);//todo parametric loop
        eyeL5.visible=true;
    }

    function eyeAnimEnd_(){
        soundManager_.stopSound("eyeWin");
        var pi=displayManager_.getGroup("mask_FS3").bgP3.children[0];
        TweenMax.to(pi,(compulsiveFlag_)?.5:1,{alpha:1});
        TweenMax.to(pi.scale,(compulsiveFlag_)?.5:1,{x:1,y:1});

        eyeL.animations.stop();
        eyeL.visible=false;

        eyeL1.animations.stop();
        eyeL1.visible=false;

        eyeL2.animations.stop();
        eyeL2.visible=false;

        eyeL3.animations.stop();
        eyeL3.visible=false;

        eyeL4.animations.stop();
        eyeL4.visible=false;

        eyeL5.animations.stop();
        eyeL5.visible=false;

    }

    function initGame_(){
        gcmCalls_("STAKE",balanceManager_.getCoinValue());
        if (communicationManager_.getResumeStatus().status.hand=="freespins") {
            if (communicationManager_.getResumeStatus().status !=null && communicationManager_.getResumeStatus().status.stake>0){
                changeBet_(communicationManager_.getResumeStatus().status.stake/100, true);
            }
            //f1x2.GcmError(-3);
            fsSTage_=communicationManager_.getResumeStatus().status.stage;
            freeRoundsManager_.frChecker();
            freeSpinsManager_.parse(communicationManager_.getResumeStatus());
            buttonManager_.applyHide();
            changeFsStage_(true);
            displayManager_.getGroup("logo").visible=true;
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
            //soundManager_.playBgSound("bgSlot");
        }
        onGame_=true;
        setTimeout(framework.showFramework,500);
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
        wild_9_=false;
        wild_10_=false;
        wild_12_=false;
        wilSoundPlayed_=false;
        turnSoundPlayed_false=false;
        spinning_=true;
        eventManager_.clearEvt();
        logger("----spin ---- "+ getStackTrace().join('\n'));
        
        if(won){
            updateBalance_("WIN");
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

            if (!freeSpinsManager_.getIsInFs())fsSTage_=0;

            balanceManager_.bet(betCheckCallBack_);
            //handling FS message here
        }
    }

    function betCheckCallBack_(response) {
        var swipe = [false];
        //handling FS message here
        if (response == true) {
            if (autoPlayManager_.getIsInAutoPlay() == false || autoPlayManager_.getPreAutoPlayAutoriz() == true) {
                waitForSubstitution_ = false;
                showScatterWin_ = false;

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
            if (freeRoundsManager_.getIsInFr()==true){
                fr=freeRoundsManager_.getFreeRoundsEval();
            }
            logger("NO bonus found ");

            wildManager_.endAnimHandle((winManager_.getWildNum()>0)?winManager_.getWildSimbs():null, eventManager_);

            twinReelManager_.hideTwinReels();
            if (waitForSubstitution_){
                if (fsWon)
                    eventManager_.addEvent(fakeEvent_,(compulsiveFlag_)?1000:2800);
                else {
                    //give the scarab the time to substitute and animate WILDS
                    if(won)
                        eventManager_.addEvent(fakeEvent_, (compulsiveFlag_)?1200:3200);
                    else if  (winManager_.getScatterWinAmt()[0]!=null && winManager_.getScatterWinAmt()[0][8] != null) {
                        eventManager_.addEvent(fakeEvent_, (compulsiveFlag_)?1000:2700);
                    }else{
                        eventManager_.addEvent(fakeEvent_, (compulsiveFlag_)?500:500);
                    }
                }
            }else{
                if (Util.getRandomInt(0,100)>78 && compulsiveFlag_==false) {
                    var fs = game_.add.sprite(Util.getRandomInt(200,1000), 800, "little-scarab_Fly"+Util.getRandomInt(0,3));
                    soundManager_.playSound("scarab_FlyF");
                    displayManager_.getGroup("lines").add(fs);
                    fs.animations.add("anim");
                    fs.animations.play("anim", 24, true, false);//todo parametric loop
                    TweenMax.to(fs, 1.5, {y: -100, onComplete: endFakeScarab_, onCompleteParams: [fs]});
                    eventManager_.addEvent(fakeEvent_, 000);
                }
            }
            if (won) {
                if (winManager_.getScatterWinAmt()[0]!=null) {
                    if (winManager_.getScatterWinAmt()[0][8] != null) {
                        eventManager_.addEvent(eyeAnimStart_,200);
                        eventManager_.addEvent(fakeEvent_, 500);
                        scatterManager_.endAnimHandle(winManager_.getNormalScatterSimbs(),Number(winManager_.getScatterWinAmt()[0][8].amt),eventManager_);
                    }
                }
                lineManager_.endAnimHandle(winManager_.getAllWinsSorted(), eventManager_);
                freeSpinsManager_.endAnimHandle(eventManager_);
                if (freeRoundsManager_.getIsInFr()==true && freeSpinsManager_.getIsInFs() == false ){//no add delay during nested FS
                    eventManager_.addEvent(fakeEvent_,(won)?lineManager_.getTotalDuration():0);
                }
            } else {
                logger("no win.------"+waitForSubstitution_)
                if (winManager_.getScatterWinAmt()[0]!=null) {
                    if (winManager_.getScatterWinAmt()[0][8] != null) {
                        eventManager_.addEvent(eyeAnimStart_,200);
                        eventManager_.addEvent(fakeEvent_, 00);
                        eventManager_.addEvent(updateScatterBalance, 0);
                        scatterManager_.endAnimHandle(winManager_.getNormalScatterSimbs(),Number(winManager_.getScatterWinAmt()[0][8].amt),eventManager_);

                        //eventManager_.addEvent(fakeEvent_, 1000);
                    }
                }
                freeSpinsManager_.endAnimHandle(eventManager_);
                if(!fsWon)framework.updateSmallMessageText(Translate.do("Good luck"));
            }


            buttonManager_.applyState("AFTERSPIN");

            if (fsWon && freeSpinsManager_.getIsInFs() == true && freeSpinsManager_.getFsNumber() == 0) {
                eventManager_.addEvent(fsEval_, 200);
            } else {
                eventManager_.addEvent(fsEval_, (freeSpinsManager_.getFsAdd() == true)?1000:0);
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
        logger("update balance "  + " "+getStackTrace().join('\n'));
        //framework.updateSmallMessageText(Translate.do("You won:") + " " + balanceManager_.getCurrencySmb() + " " + Util.formatNumber(winManager_.getWinAmt(), 2));
        freeRoundsManager_.addWin(winManager_.getWinAmt() * balanceManager_.getCoinValue());

        if (winManager_.getScatterWinAmt()>0) {
            winAmtManager_.showWin(Number(winAmtManager_.getLineWinAmt())+Number(winManager_.getScatterWinAmt()[0][8].amt), null,null,null,winAmtManager_.getLineWinAmt());
            freeRoundsManager_.addWin(winManager_.getScatterWinAmt());
        }
        if(!freeSpinsManager_.getIsInFs())balanceManager_.balanceUpdate();
    }

    function updateScatterBalance(){
        if(freeSpinsManager_.getIsInFs()){
            lineManager_.showBonusWin(winManager_.getScatterWinAmt()[0][8].amt / balanceManager_.getCoinValue() * lineManager_.getLinesNumber() ,winManager_.getScatterWinAmt()[0][8].amt);
            freeSpinsManager_.updateFreeSpinsTotWon();
        }else{
            if (winManager_.getScatterWinAmt()[0][8]!=null) {
                lineManager_.completeBonusValue(winManager_.getScatterWinAmt()[0][8].amt, "Scatter Win");
            }
            balanceManager_.balanceUpdate();
        }

        freeRoundsManager_.addWin(winManager_.getScatterWinAmt());

    }

    function endScatterAnim_(){
        soundManager_.stopSound("incWin");
    }

    function fsEval_(){
        spinning_=false;
        fs=freeSpinsManager_.getIsInFs();
        fsWon=freeSpinsManager_.getFsWon();
        apEval_();
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

            eventManager_.addEvent(startAutoSpin_,(fsWon == false && won )?lineManager_.getTotalDuration():500,[false]);
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
    
    function hideFs_(tout){
        displayManager_.getGroup("fsWonPanel").visible=false;
        if (freeRoundsManager_.getIsInFr()) {
            setTimeout(freeRoundsManager_.getFreeRoundsEval, 1000);
        }
        fsSTage_=0;
        setTimeout(changeFsStage_,tout+1500,false);
        setTimeout(handleBonusEndWinAnimation_,tout+4000,false);
    }

    function handleBonusEndWinAnimation_(){
        buttonManager_.applyState("NH");
        buttonManager_.applyRestore();
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
        /*
         place the fake symbol
         place the right scarab on and play the take off animation , then fly the scarab onto the right icon with the right fly-loop
         land the scarab in place
         play the turn-symbol animation to hide the scarab and turn the symbol
         */

        param.push(this._parent);
        var blast;
        var stage=param[0].stage;
        var objP;
        var tOut=500;
        var speed=(compulsiveFlag_)?48:24;

        if (img!=null){
            objP=img;
            param.push(img)
        }else{
            objP=param[3];
        }

        if (param[0].anim[stage]=="boom") {
            param[0].anim=iconsSubst_[param[0].icon[stage]].anim;
            param[0].icon=iconsSubst_[param[0].icon[stage]].icon;
            if (Util.getRandomInt(0,100)>40 && compulsiveFlag_==false){
                var fs = game_.add.sprite(objP.x-Util.getRandomInt(50,200), 800, "little-scarab_Fly"+Util.getRandomInt(0,1));
                soundManager_.playSound("scarab_FlyF1");
                displayManager_.getGroup("lines").add(fs);
                fs.animations.add("anim");
                fs.animations.play("anim", speed, true, false);//todo parametric loop
                TweenMax.to(fs,1.5,{y:-200,onComplete:endFakeScarab1_,onCompleteParams:[fs]});
                if (Util.getRandomInt(0,100)>80) {
                    var fs = game_.add.sprite(objP.x + Util.getRandomInt(50, 200), 800, "little-scarab_Fly"+Util.getRandomInt(2,3));
                    soundManager_.playSound("scarab_FlyF");
                    displayManager_.getGroup("lines").add(fs);
                    fs.animations.add("anim");
                    fs.animations.play("anim", speed, true, false);//todo parametric loop
                    TweenMax.to(fs, 1.5, {
                        y: -200,
                        onComplete: endFakeScarab_,
                        onCompleteParams: [fs]
                    });
                }
            }
            stage++;
            param[0].stage=stage;
            endBombAnimation_( param);
            soundManager_.playSound("bomb");


            //param[1].remove(objP); on CB it removes the static cherry bomb from the stage
        }else  if (param[0].anim[stage]=="fly") {
            //blast in this slot is the fly
            blast = game_.add.sprite(objP.x, 1000, "scarab_Fly");
            soundManager_.playSound("scarab_Fly"+objP.reel);
            displayManager_.getGroup("lines").remove(this);
            blast.animations.add("anim");
            blast.animations.play("anim", speed, true, false);//todo parametric loop
            blast.scale.x=1
            blast.scale.y=1
            blast.anchor.set(.5,.5);
            blast.visible = true;
            displayManager_.getGroup("lines").add(blast);
            param.reel=objP.reel;
            stage++;
            param[0].stage=stage;
            TweenMax.to(blast,(compulsiveFlag_)?0:.7,{y:objP.y,onComplete:endBombAnimation_,onCompleteParams:[param]});
            //soundManager_.playSound("bomb");

        }else  if (param[0].anim[stage]=="land") {
            soundManager_.stopSound("scarab_Fly"+param.reel);
            if (turnSoundPlayed_false==false){//play just one turning sound
                soundManager_.playSound("scarab_Land"+param.reel);
            }
            turnSoundPlayed_false=true;

            //blast in this slot is the fly
            blast = game_.add.sprite(this.target.x, this.target.y, "scarab_Land_"+param[0].icon[4]);
            var blast2 = game_.add.sprite(this.target.x, this.target.y, "scarab_Reveal_"+param[0].icon[4]);
            blast.animations.add("anim");
            blast.animations.play("anim", speed, false, false, endBombAnimation_, param);//todo parametric loop
            displayManager_.getGroup("lines").remove(this.target);
            blast.scale.x=1;
            blast.scale.y=1;
            blast.anchor.set(.5,.5);
            blast2.visible = false;
            blast.visible = true;
            displayManager_.getGroup("lines").add(blast2);
            displayManager_.getGroup("lines").add(blast);
            //soundManager_.playSound("bomb");
            param.push(blast);
            param.push(blast2);
            stage++;
            param[0].stage=stage;
        }else  if (param[0].anim[stage]=="turn") {
            blast=param[7];
            blast.animations.add("anim");
            blast.animations.play("anim", 24, false, true);//todo parametric loop
            blast.scale.x=1;
            blast.scale.y=1;
            blast.anchor.set(.5,.5);
            blast.visible = true;
            displayManager_.getGroup("lines").add(blast);
            TweenMax.to(param[8],(compulsiveFlag_)?.4:.5,{delay:.35,x :param[8].x+20,alpha:0.1 ,onComplete:endturnAnimation_});//,onCompleteParams:[param]
            TweenMax.to(param[8].scale,(compulsiveFlag_)?.2:.3,{delay:.35,x:0});//,onCompleteParams:[param]
            if (param[0].icon[stage]==11){
                fsSTage_++;
                setTimeout(afterExplosion_, (compulsiveFlag_)?500:700,[param[0].reel, param[0].realSmb, param[0].icon[stage] + "-"+fsSTage_,param[0].smb,param[7]]);
            }else{
                setTimeout(afterExplosion_, (compulsiveFlag_)?500:700,[param[0].reel, param[0].realSmb, param[0].icon[stage],param[0].smb,param[7]]);
            }
            stage++;
            param[0].stage=stage;
            param[1].remove(objP);
        }
    }

    function endFakeScarab_(par){
        soundManager_.stopSound("scarab_FlyF");
        displayManager_.getGroup("lines").remove(par);
    }

    function endFakeScarab1_(par){
        soundManager_.stopSound("scarab_FlyF1");
        displayManager_.getGroup("lines").remove(par);
    }

    function afterExplosion_(par){
        var par1=par[0];
        var par2=par[1];
        var par3=par[2];
        var par4=par[3];
        var par5=par[4];
        var trigger=false;
        var scatterAnim=false;
        var fsAnim=false;

        //if we want to use symbols with multiplier...
        if (par3==10 || par3==12){
            if (wild_12_==true && par3==12){
                par3=par3+"m";
            }else if (wild_12_ ==false && wild_10_==true && par3==10){
                par3=par3+"m";
            }
        }

        var s =spinManager_.getReels()[par1].replaceIcon(par2,par3,{"type":"fade"});
        s.reel=par1;
        s.smb=par2;
        if (spinManager_.getSpinReelResp().reel[par1].smb[par4].special=="trigger"|| par3=="11-1"|| par3=="11-2"|| par3=="11-3") {
            spinManager_.addTriggerIcon(s);
        }
        if (trigger || par3=="11-1"|| par3=="11-2"|| par3=="11-3"){
            setTimeout(animFsWin_,1200,par1);
            soundManager_.playSound("fsWon"+fsSTage_);
        }else{

            //this to play just the higher wild sound
            if (wilSoundPlayed_==false){
                if (wild_12_==true){
                    soundManager_.playSound("wild_12");
                }else if (wild_10_==true){
                    soundManager_.playSound("wild_10");
                }else if (wild_9_==true){
                    soundManager_.playSound("wild_9");
                }
            }
            wilSoundPlayed_=true;
        }
    }

    function endturnAnimation_(){
        displayManager_.getGroup("lines").remove(this.target);
    }

    function animFsWin_(par1){
        playTriggeredSmb_();
        setTimeout(hideIcons,300,par1,2);
        setTimeout(hideIcons,600,par1,1);
        setTimeout(changeFsStage_,2000,false );
    }

    function hideIcons(par1,icon) {
        spinManager_.getReels()[par1].getSymbol(icon).visible=false;
    }

    function animScatterWin_(){
    }

    function changeFsStage_(resume){
        var time=.5;
        if(fsSTage_>3)fsSTage_=0;
        if (resume==false){
            time=2;
            hideReels_();
        }
        if(compulsiveFlag_)time=1;
        TweenMax.to(displayManager_.getGroup("bg"),time,{delay:.4, y:-1*displayManager.groups["bg_FS"+fsSTage_].y,onStart:startStoneSound_,onComplete:showReels_,onStartParams:[resume],onCompleteParams:[resume]});
        TweenMax.to(displayManager_.getGroup("mask"),time,{delay:.4,y:-1*displayManager.groups["bg_FS"+fsSTage_].y});
        TweenMax.to(displayManager_.getGroup("frame"),time,{delay:.4,y:-1*displayManager.groups["bg_FS"+fsSTage_].y});
        TweenMax.to(displayManager_.getGroup("transition"),time,{delay:.4,y:-1*displayManager.groups["bg_FS"+fsSTage_].y});
    }

    function startStoneSound_(resume){
        if (resume==false)soundManager_.playSound("stone");
    }

    function hideReels_(){
        TweenMax.to(displayManager_.getGroup("reels"),.5,{alpha:0});
        TweenMax.to(displayManager_.getGroup("lines"),.1,{alpha:0});
        TweenMax.to(displayManager_.getGroup("wins"),.1,{alpha:0});
        TweenMax.to(displayManager_.getGroup("centralLineWin"),.1,{alpha:0});
        TweenMax.to(displayManager_.getGroup("centralWin"),.1,{alpha:0});
        for (var a=1;a<=3;a++){
            emitter_[a][0].visible=false;
            emitter_[a][1].visible=false;
            emitterMask_[a][0].visible=false;
            emitterMask_[a][1].visible=false;
        }
    }

    function showReels_(resume){
        turnPyramid_();
        if (resume==false){
            TweenMax.to(displayManager_.getGroup("reels"),.5,{alpha:1});
            TweenMax.to(displayManager_.getGroup("lines"),.1,{alpha:1});
            TweenMax.to(displayManager_.getGroup("wins"),.1,{alpha:1});
            TweenMax.to(displayManager_.getGroup("centralLineWin"),.1,{alpha:1});
            TweenMax.to(displayManager_.getGroup("centralWin"),.1,{alpha:1});
        }
        if (fsSTage_>0) {
            emitter_[fsSTage_][0].visible=true;
            emitter_[fsSTage_][1].visible=true;
            emitterMask_[fsSTage_][0].visible=true;
            emitterMask_[fsSTage_][1].visible=true;
        }
    }

    function turnPyramid_(){
        try {
            if (stagePyr_!=undefined)stagePyr_.animations.stop();
            if (fsSTage_ == 0) {
                displayManager_.getGroup("mask").children[4].children[0].animations.play("anim", 24, true, false);
                stagePyr_=displayManager_.getGroup("mask").children[4].children[0];
            } else {
                displayManager_.getGroup("mask_FS" + fsSTage_).children[4].children[0].animations.play("anim", 24, true, false);
                stagePyr_=displayManager_.getGroup("mask_FS" + fsSTage_).children[4].children[0]
            }
        }catch(e){
            //no need to show the error
        }
    }

    function upperSmbCallBack_(i) {
        for (var a =0;a <3;a++) {
            if (spinManager_.getSpinReelResp().reel[i].smb[a].smb==9)gameClass_.setWild9();
            if (spinManager_.getSpinReelResp().reel[i].smb[a].smb==10)gameClass_.setWild10();
            if (spinManager_.getSpinReelResp().reel[i].smb[a].smb==12)gameClass_.setWild12();
            if (spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb != null && (spinManager_.getSpinReelResp().reel[i].smb[a].smb!=11 ||(spinManager_.getSpinReelResp().reel[i].smb[a].smb==11 & a==0 ))) {
                //create object
                var s = {
                    "subst": "previous",
                    "type": "anim",
                    "loop": false,
                    "killOnComplete": true,
                    "callBack": gameClass_.endBombAnimation,
                    "reels":[0,1,2,3,4],
                    "icon": [spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb,  spinManager_.getSpinReelResp().reel[i].smb[a].smb],
                    "anim": ["timer","boom"],
                    "stage": 0,
                    "delay": 0
                }

                spinManager_.getReels()[i].swapSmb(spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb, a, s);
            }else{
                var obj=gameClass_.getSubstIcon(spinManager_.getSpinReelResp().reel[i].smb[a].smb,a,spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb);
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
                    "delay": 0
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
        for (var a in triggerSymbol_){
            if ( triggerSymbol_[a].played==undefined) {
                iconN= triggerSymbol_[a].smbNum;
                add=true;
                var smb = new Phaser.Sprite( game_,triggerSymbol_[a].x , triggerSymbol_[a].y , "anim" +iconN);
                smb.anchor.set(.5, .5);
                smb.y=smb.y+176;
                smb.animations.add("anim");
                smb.scale.x=1;
                smb.scale.y=1;
                triggerSymbol_[a].visible=false;

                spinManager_.getReelGroup(triggerSymbol_[a].reel).add(smb);
                spinManager_.setAnimationMap(triggerSymbol_[a].reel,triggerSymbol_[a].smb,smb);
                smb.animations.play("anim", 24, false, false, updateIcon_,triggerSymbol_[a]);
                triggerSymbol_[a].played=true;
            }
        }
        soundManager_.playSound("smbWin_"+iconN);
    }

    function updateIcon_(obj){
        // obj.visible=true;
    }

    function triggerCompulsive_(){
        messageBox_.showMessageYN("game", "You have been using the slam stop feature","would you like to enable Fast Play?\rThis can be adjusted in the settings menu.", enableCompulsive_,notEnableCompulsive_);    }

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
            displayManager.groups.centralWin.thresHolds= [200, 1000, 2500];
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
        eyeAnimStart:eyeAnimStart_,
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
        getSubstIcon:function (icon,a,prev) {
            if (iconsSubst_[icon]!=undefined && (icon!=11 || (icon==11 && a==0))) {
                var obj= iconsSubst_[icon];
                //replacing bomb / fs uses cherry bomb
                return obj;
            }else {
                if (icon==11) {
                    return {
                        "subst": prev,
                        "type": "icon"
                    };
                }else{
                    return {
                        "subst": icon,
                        "type": "icon"
                    };

                }
            }
        },
        setWaitForSubstitution:function(){
            waitForSubstitution_=true;
        },
        getFsLevel:function(){
            return fsSTage_;
        },
        setWild9:function () {
            wild_9_=true;
        },
        setWild10:function () {
            wild_10_=true;
        },
        setWild12:function () {
            wild_12_=true;
        },
        setMessageOnOff:function (val) {
            messageOn_=val;
        },
        getMessageOnOff:function(){
            return messageOn_;
        },
        getHlMaximumIcon:function(){
            //during the idle cycle the maximum disable icon will be 10.
            return 11;
        },
        getCompulsivePlayer:function () {
            return compulsiveFlag_;
        },
        startSounds:function(){
            if (communicationManager_.getResumeStatus().status.hand=="freespins") {
                soundManager_.playBgSound("bgFs"+fsSTage_);
            }else if (communicationManager_.getResumeStatus().status.hand=="bonus"){
                //soundManager_.playBgSound("bgKenoBonus", 1000, 1000);
            }else{
                soundManager_.playBgSound("bgSlot");
            }
        },
        frStop:function(){
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