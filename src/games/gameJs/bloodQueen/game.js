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

    var waitForSubstitution_=false;
    var wonBonus=0;
    var onGame_=false;
    var spinning_=false;
    var showScatterWin_=false;
    var showFsWin_=false;

    //wilds Reel
    var shiftingWildReelManager_;
    var shiftReelConf={};
    shiftReelConf.wildNum=[11];
    shiftReelConf.wildType="WildShiftingReel";
    shiftReelConf.wildDelay=300;
    shiftReelConf.animDelayAfterWild=3000;

    var shiftWildReelSmb_;
    var shiftWilSimbsNum_=0;

    //sticky wilds
    var stickyWildManager_;
    var stickyWildConf={};
    stickyWildConf.wildNum=[10];
    stickyWildConf.wildType="ExpandingStickyWild";
    stickyWildConf.wildDelay=300;
    stickyWildConf.animDelayAfterWild=1500;

    var stickyWildSmb_;
    var stickyWilSimbsNum_=0;

    var choose_=false;
    var fadeBg_=false;
    var iFadeT_O_=0;
    var lineCompletion_=false;

    function create_() {
        //display manager levels
        displayManager_.getGroup("bg").visible=true;
        displayManager_.getGroup("mask").visible=true;
        displayManager_.getGroup("frame").visible=true;
        displayManager_.getGroup("status").visible=true;
        displayManager_.getGroup("logo").visible=true;
        displayManager_.getGroup("fog").visible=true;
        spinManager_.createReels();
        guiBottomBar_.setBetControlInitialBet(ReelConfig.bet);//todo change this, it's just to apply the default bet
        logger("nh call8")
    }

    function initGame_(){
        //wild reel init params
        shiftingWildReelManager_= new WildManager(game_,gameClass_,shiftReelConf);
        if (shiftWildReelSmb_==undefined) {
            shiftWildReelSmb_ = [];
            for (i = 0; i < 5; i++) {
                shiftWildReelSmb_[i] = {};
                shiftWildReelSmb_[i].simbolReference = [];
                shiftWildReelSmb_[i].substOnreel = [];
                shiftWildReelSmb_[i].smbNum = [];
                shiftWildReelSmb_[i].pos = [];
                shiftWildReelSmb_[i].reel = [];
                shiftWildReelSmb_[i].onReel=false;
                if (shiftWildReelSmb_[i].anim == undefined) shiftWildReelSmb_[i].anim = [];
                if (shiftWildReelSmb_[i].shift == undefined) shiftWildReelSmb_[i].shift = 0;
            }
        }

        //sticky wild
        stickyWildManager_= new WildManager(game_,gameClass_,stickyWildConf);
        if (stickyWildSmb_==undefined) {
            stickyWildSmb_ = [];
            for (i = 0; i < 5; i++) {
                stickyWildSmb_[i] = [];
                for (a = 0; a < 3; a++) {
                    stickyWildSmb_[i][a] = {};
                }
            }
        }
        //resuming wilds
        wildManager_.resumeWildReel();

        gcmCalls_("STAKE",balanceManager_.getCoinValue());
        if (communicationManager_.getResumeStatus().status.hand=="freespins") {
            if (communicationManager_.getResumeStatus().status !=null && communicationManager_.getResumeStatus().status.stake>0){
                changeBet_(communicationManager_.getResumeStatus().status.stake/100, true);
            }
            //f1x2.GcmError(-3);
            freeRoundsManager_.frChecker();
            freeSpinsManager_.parse(communicationManager_.getResumeStatus());
            shiftingWildReelManager_.resumeWildReel();
            stickyWildManager_.resumeWildReel();
            freeSpinsManager_.resumeFs();
            buttonManager_.applyHide();
            messageBox_.showMessage("game", "\n"+ Translate.do("You have unused Free Spins"), "\n"+Translate.do("They will be automatically started"), startResumeFs_);
        }else if (communicationManager_.getResumeStatus().status.hand=="choose"){
            if (communicationManager_.getResumeStatus().status !=null && communicationManager_.getResumeStatus().status.stake>0){
                changeBet_(communicationManager_.getResumeStatus().status.stake/100, true);
            }
            //f1x2.GcmError(-3);
            freeRoundsManager_.frChecker();
            freeSpinsManager_.showFsPanel1([communicationManager_.getResumeStatus().status.numFS]);
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
            idleCycleManager_.startIdleCycle();
            idleCycleManager_.forceIdleCycle("s1"); //forces the logo to idle cycle
            idleCycleManager_.forceIdleCycle("s2"); //forces the logo to idle cycle
        }
        onGame_=true;
        framework.showFramework();

        //start the fog
        TweenMax.to(displayManager_.getGroup("fog")["bg1"].children[0],45,{x:-2024,repeat:-1, ease:Linear.easeInOut});

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
            if (Util.getRandomInt(1,100)>30){//forces the logo to idle cycle
                idleCycleManager_.forceIdleCycle("s1");
                idleCycleManager_.forceIdleCycle("s2"); //forces the logo to idle cycle
            }

        }else {
            return false;
        }
    }

    function realDoSpin_(swipe){//swipte=array
        if(!onGame_)return;
        if(messageOn_==true){

            return;
        }
        spinning_=true;
        eventManager_.clearEvt();
        //console.log("----spin ---- "+ getStackTrace().join('\n'));

        if(won){
            //  updateBalance_("WIN");
        }
        if(displayManager_.getGroup("bgIconAnim"))displayManager_.getGroup("bgIconAnim").alpha=0;
        //clear
        for (var a in displayManager_.getGroup("bgIconAnim").children){
            if (displayManager_.getGroup("bgIconAnim").children[a].tw!=undefined) displayManager_.getGroup("bgIconAnim").children[a].tw.kill();
            displayManager_.getGroup("bgIconAnim").remove(displayManager_.getGroup("bgIconAnim").children[a]);
        }
        buttonManager_.applyState("SPIN");

        if (ReelConfig.spinType=="singleIconReelSpin") {
            //spinManager_.startSpin(swipe[0]);
        }else{
            lineManager_.stopEvents();
            bonusManager_.clearLineEval();
            wildManager_.clearWild(winManager_.getWildSimbs());
            shiftingWildReelManager_.clearWild(shiftWildReelSmb_);
            stickyWildManager_.clearWild(stickyWildSmb_);

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

                logger(" interrupted win animation ");
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

    function getShiftWildNumber_(reels){
        shiftWilSimbsNum_=0;
        if (shiftingWildReelManager_ != null) {
            //wild on bottom smb for wild reel
            for (var i = 0; i < reels.length; i++) {
                var a = 0;
                if (shiftingWildReelManager_.getTriggerIcon().indexOf(spinManager_.getSpinReelResp().reel[i].smb[a].smb)>=0) {
                    if (spinManager_.getSpinReelResp().reel[i].smb[0].prevsmb!=null) {
                        shiftWildReelSmb_[i] = {};
                        shiftWildReelSmb_[i].simbolReference = [];
                        shiftWildReelSmb_[i].substOnreel = [];
                        shiftWildReelSmb_[i].smbNum = [];
                        shiftWildReelSmb_[i].pos = [];
                        shiftWildReelSmb_[i].reel = [];
                        shiftWildReelSmb_[i].anim = [];
                        shiftWildReelSmb_[i].onReel = false;
                        if (shiftWildReelSmb_[i].shift == undefined) shiftWildReelSmb_[i].shift = 0;

                        shiftWildReelSmb_[i].smbNum.push(shiftingWildReelManager_.getTriggerIcon());
                        shiftWildReelSmb_[i].simbolReference.push(reels[i].getSymbol(0));
                        shiftWildReelSmb_[i].pos.push(reels[i].getPos(0));
                        shiftWildReelSmb_[i].substOnreel.push(reels[i].getSymbol(0));
                        shiftWildReelSmb_[i].substOnreel.push(reels[i].getSymbol(1));
                        shiftWildReelSmb_[i].substOnreel.push(reels[i].getSymbol(2));
                        if (shiftWildReelSmb_[i].shift == "0") shiftWilSimbsNum_++;
                        shiftWildReelSmb_[i].shift = ((spinManager_.getSpinReelResp().reel[i].smb[0].prevsmb != null) ? "0" : "1");
                    }
                }
            }
        }
    }

    function getStickyWildNumber_(reels){
        stickyWilSimbsNum_=0;
        if (stickyWildManager_ != null) {
            for (var i = 0; i < reels.length; i++) {
                for (var a =0 ;a<3;a++) {
                    if (stickyWildManager_.getTriggerIcon().indexOf(spinManager_.getSpinReelResp().reel[i].smb[a].smb) >= 0 || ( spinManager_.getSpinReelResp().reel[i].smb[a].prevSmb!=undefined && stickyWildManager_.getTriggerIcon().indexOf(spinManager_.getSpinReelResp().reel[i].smb[a].prevSmb>=0)) ) {
                        if (spinManager_.getSpinReelResp().reel[i].smb[a].special != "done" && spinManager_.getSpinReelResp().reel[i].smb[a].special.split("-")[0]!="stage2" ) {//attach a new one only when stage 1
                            stickyWildSmb_[i][a].special=spinManager_.getSpinReelResp().reel[i].smb[a].special;
                            stickyWildSmb_[i][a].simbolReference=(reels[i].getSymbol(a));
                            stickyWildSmb_[i][a].simbolReference.smbToRemove=a;

                            stickyWilSimbsNum_++;
                        }else {
                            if (stickyWildSmb_[i]!=undefined && stickyWildSmb_[i][a]!=undefined)stickyWildSmb_[i][a].special=spinManager_.getSpinReelResp().reel[i].smb[a].special;
                        }
                        if (stickyWildManager_.getTriggerIcon().indexOf(spinManager_.getSpinReelResp().reel[i].smb[a].smb) >= 0 && spinManager_.getSpinReelResp().reel[i].smb[a].special.split("-")[0]!="stage1" ){
                            spinManager_.getSpinReelResp().reel[i].smb[a].notShow=true;
                        }
                    }
                }
            }
        }
    }

    function spinAnimEnd_() {
        choose_=false;
        playTriggeredSmb_();
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
        getShiftWildNumber_(spinManager_.getReels());
        //getStickyWildNumber_(spinManager_.getReels());
        evaluateWinnings_();
    }

    function evaluateWinnings_(){
        //start bonus if needed, displays all winnings (also called after bonus to display lines winnings), after winnings call the autoplay and freespins evaluator
        lineManager_.clearLine();
        eventManager_.clearEvt();

        if (wonBonus==0) {

            logger("NO bonus found ")

            wildManager_.endAnimHandle((winManager_.getWildNum()>0)?winManager_.getWildSimbs():null, eventManager_);
            shiftingWildReelManager_.endAnimHandle((shiftWilSimbsNum_>0)?shiftWildReelSmb_:null, eventManager_);
            stickyWildManager_.endAnimHandle((stickyWilSimbsNum_>0)?stickyWildSmb_:null, eventManager_);

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
        logger("update balance "  + " "+getStackTrace().join('\n'));
        //framework.updateSmallMessageText(Translate.do("You won:") + " " + balanceManager_.getCurrencySmb() + " " + Util.formatNumber(winManager_.getWinAmt(), 2));
        freeRoundsManager_.addWin(winManager_.getWinAmt());

        if (winManager_.getScatterWinAmt()>0) {
            winAmtManager_.showWin(Number(winAmtManager_.getLineWinAmt())+Number(winManager_.getScatterWinAmt()[0][10].amt), null,null,null,winAmtManager_.getLineWinAmt());
            freeRoundsManager_.addWin(winManager_.getScatterWinAmt());
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

        freeRoundsManager_.addWin(winManager_.getScatterWinAmt());
        freeRoundsManager_.updateFreeRoundsTot();
    }

    function endScatterAnim_(){
        soundManager_.stopSound("incWin");
    }

    function fsEval_(){
        //console.log("fsEval")
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
        //console.log("apEval")
        setTimeout(enableButton_, 200);
        multiplierManager_.resetMultipliers();
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
        //reset expanding wilds
        stickyWildManager_.resetWilds();
        idleCycleManager_.startIdleCycle();
    }

    function getBetConfigurationDeg_() {
        return [72, 36, 0, 324, 288, 252, 216, 180, 144, 108];    //todo read from json
    }

    function getBetConfiguration_() {
        return ["0.01", "0.02", "0.05", "0.10", "0.25", "0.50", "1.00", "2.00", "5.00", "10.00"]; //todo read from json
    }

    function fakeEvent_() {
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
        if (i==0){
            for (var a in displayManager_.getGroup("bgIconAnim").children){
                if (displayManager_.getGroup("bgIconAnim").children[a].tw!=undefined) displayManager_.getGroup("bgIconAnim").children[a].tw.kill();
                displayManager_.getGroup("bgIconAnim").remove(displayManager_.getGroup("bgIconAnim").children[a]);
            }
        }

        //called after spin to move the symbols in the upper position before moving the reel
        for (var a = 0; a < ReelConfig.numIcons; a++) {
            var smb = (spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb != null) ? spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb : spinManager_.getSpinReelResp().reel[i].smb[a].smb;
            if (freeSpinsManager_.getIsInFs()== false || spinManager_.getSpinReelResp().reel[i].smb[a].notShow!=true) {
                var s = spinManager_.getReels()[i].swapSmb(smb, a);

                if (spinManager_.getSpinReelResp().reel[i].smb[a].special.indexOf("anim") >= 0) { //check for special to animate
                    var smb = new Phaser.Sprite(game_, s.x, s.y, "bluFlame");
                    smb.anchor.set(.5, .5);
                    smb.animations.add("anim");
                    smb.scale.x = 1.5;
                    smb.scale.y = 1.5;
                    smb.animations.play("anim", 24, false, true);
                    displayManager_.getGroup("bgIconAnim").add(smb);
                    displayManager_.getGroup("bgIconAnim").alpha=1;
                    if (compulsiveFlag_==true)  soundManager_.playSound("reelSoundFast");

                }
                if (spinManager_.getSpinReelResp().reel[i].smb[a].special.indexOf("trigger") >= 0) { //check for special to animate
                    s.reel = i;
                    s.smb = a;
                    s.trigger = true;
                    spinManager_.addTriggerIcon(s);
                }
                if (gameClass_.checkSpecialSymbol != null && gameClass_.checkSpecialSymbol(spinManager_.getSpinReelResp().reel[i].smb[a].smb) == true) {    //check for other symbols the lazy guy didn't add special for( example Fs multiplier symbols in Ostara)
                    s.reel = i;
                    s.smb = a;
                    spinManager_.addTriggerIcon(s);
                }
            }else{
                spinManager_.getReels()[i].removeSymbol(a);
            }
        }

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

                smbB = new Phaser.Sprite(game_, triggerSymbol_[a].x, triggerSymbol_[a].y, "bluFlame" );
                smbB.anchor.set(.5, .5);
                smbB.animations.add("anim");
                smbB.scale.x = 1.4;
                smbB.scale.y = 1.4;
                smbB.animations.play("anim", 24, false, true);
                displayManager_.getGroup("bgIconAnim").alpha=1;
                displayManager_.getGroup("bgIconAnim").add(smbB);


                spinManager_.getReelGroup(triggerSymbol_[a].reel).add(smb);
                spinManager_.setAnimationMap(triggerSymbol_[a].reel, triggerSymbol_[a].smb, smb);
                smb.animations.play("anim", 24, false, true, updateIcon_, triggerSymbol_[a]);
                triggerSymbol_[a].played=true;
                soundManager_.playSound("fsWin");
            }
        }

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

    function setDelRepeter_(obj){
        var delayRepeater=obj.delayRepeater;
        var slowDownReel=[];
        var iconSound=[];
        var reelSound=[];
        var found=0;
        var inc=0;
        var min=3;
        var nextToFind;

        for (var i = 0; i <= ReelConfig.numReels; i++) {
            slowDownReel[i]=false;
            iconSound[i]=false;
            reelSound[i]=false;
        }

        //looking for feature symbols to slow down the reels creating some anticipation
        for (var i = 0; i < ReelConfig.numReels; i++) {
            var reelDone=false;
            for (var a = 0; a < 3; a++) {
                if (spinManager_.getSpinReelResp().reel[i].smb[a].smb == 12 ) {

                    found++;
                    inc=inc+3;
                    min=delayRepeater[i];
                    if (i==4 && found<3){//play sound just when is possible to trigger

                    }else if (i==4 ){
                        iconSound[i]=true;
                    }
                    if (i==3 && found<2){//play sound just when is possible to trigger

                    }else if (i==3 ){
                        iconSound[i]=true;
                    }
                    if  (i==2 && found<1){//play sound just when is possible to trigger

                    }else if (i==2 ){
                        iconSound[i]=true;
                    }
                    if  (i==1 && found<0){//play sound just when is possible to trigger

                    }else if (i==1 ){
                        iconSound[i]=true;
                    }
                    if  (i==0 && found<0){//play sound just when is possible to trigger

                    }else if (i==0 ){
                        iconSound[i]=true;
                    }
                }
                if (reelDone==false && found > 0 && i<ReelConfig.numReels) {
                    var skip=false;
                    if (i==4 && found<=2){
                        delayRepeater[i+1] =  delayRepeater[i]+2;
                        skip=true;
                    }
                    if (i==3 && found<=1){
                        delayRepeater[i+1] =  delayRepeater[i]+2;
                        skip=true;
                    }
                    if (i==2 && found<=0){
                        delayRepeater[i+1] = delayRepeater[i]+2;
                        skip=true;
                    }
                    if (skip==false) {
                        reelDone=true;
                        inc = inc + 2;
                        delayRepeater[i + 1] = Math.max(delayRepeater[i + 1], min) + inc;
                        slowDownReel[i + 1] = true;
                        reelSound[i+1] = true;
                    }

                }
            }
        }

        for (var i = 0; i < ReelConfig.numReels; i++) {
            //console.log("loop " +delayRepeater[i] + " "+slowDownReel[i] + " "+reelSound[i] +" "+iconSound[i])
        }

        obj.slowDownReel=slowDownReel;
        obj.iconSound=iconSound;
        obj.delayRepeater=delayRepeater;
        obj.reelSound=reelSound;

        return obj;
    }

    function decreaseVolumeBG_(fadeT_O_){
        fadeBg_=true;
        clearTimeout(iFadeT_O_);
        if (freeSpinsManager_.getIsInFs()==false) {
            soundManager_.getBGSound("bgSlot").fadeOutBgSoundExternal(500, 0.2);
            if (fadeT_O_!=null){
                fadeBg_=false;
                iFadeT_O_=setTimeout(soundManager_.getBGSound("bgSlot").increaseVolExternal,fadeT_O_,1500);
            }
        }else{
            soundManager_.getBGSound("bgFs").fadeOutBgSoundExternal(1000,0.1);
            if (fadeT_O_!=null){
                fadeBg_=false;
                iFadeT_O_=setTimeout(soundManager_.getBGSound("bgFs").increaseVolExternal,fadeT_O_,1500);
            }
        }
    }

    function increaseVolumeBG_(){
        if (fadeBg_) {
            fadeBg_=false;
            if (freeSpinsManager_.getIsInFs() == false) {
                soundManager_.getBGSound("bgSlot").increaseVolExternal(1500);
            } else {
                soundManager_.getBGSound("bgFs").increaseVolExternal(1500);
            }
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
        upperSmbCallBack:upperSmbCallBack_,
        playTriggeredSmb:playTriggeredSmb_,
        changeCompulsiveState:changeCompulsiveState_,
        setDelRepeter:setDelRepeter_,
        getStickyWildNumber:getStickyWildNumber_,
        decreaseVolumeBG:decreaseVolumeBG_,
        increaseVolumeBG:increaseVolumeBG_,
        doWR:function(){
            if (choose_)return;
            communicationManager_.sendServletRequest("choose","&pick=1");
            choose_=true;
        },
        doSM:function(){
            if (choose_)return;
            communicationManager_.sendServletRequest("choose","&pick=2");
            choose_=true;
        },
        startFS:function(){
            lineManager_.clearLine();
            eventManager_.clearEvt();
            freeSpinsManager_.hideFsPanel();
            setTimeout(realDoSpin_,2000,[false]);
        },
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
            return (fsWon)?12:13;
        },
        getCompulsivePlayer:function () {
            return compulsiveFlag_;
        },
        startSounds:function(){
            if (communicationManager_.getResumeStatus().status.hand=="freespins") {
                soundManager_.playBgSound("bgFs");
            }else{
                soundManager_.playBgSound("bgSlot");
            }
        },
        setWildSimbs:function (value) {
            shiftWildReelSmb_=value;
        },
        setStickyWildSimbs:function (value) {
            stickyWildSmb_=value;
        },
        getStickyWildSimbs:function () {
            return stickyWildSmb_;
        },
        waitForSpin:function(){
            if (freeSpinsManager_.getIsInFs() == true) {
                var wr=shiftingWildReelManager_.hasWildReel();
                var sw=stickyWildManager_.hasWildReel();
                var ret= (wr||sw);
                //return ( ret );
                return true; // forcing slow speed
            }else{
                return false;
            }
        },
        isReelWilded:function(num){
            return shiftingWildReelManager_.isReelWilded(num);
        },
        getStickyWildManager:function(){
            return stickyWildManager_;
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
        },
        getSymbolWilded:function(reel,smb){
            return stickyWildManager_.isSymbolWilded(reel,smb);
        },
        getEventManager:function () {
            return eventManager_;
        }
    }

    return me;
}
