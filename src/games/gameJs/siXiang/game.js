function Game(gameRef) {
    var game_ = gameRef;
    var onGame_=false;
    //animations
    var fs;
    var fr;
    var fsWon;
    var ap;
    var won;
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


    //sticky wilds
    var stickyWildManager_;
    var stickyWildConf={};
    stickyWildConf.wildNum=[8,9,10,11,12,13];
    stickyWildConf.wildType="Expanding4BeastsStickyWild";
    stickyWildConf.wildDelay=0;
    stickyWildConf.animDelayAfterWild=1500;

    var stickyWildSmb_;
    var stickyWilSimbsNum_=0;
    var resetSW_=false;
    var choose_=false;


    var yinYang_;
    var yinYangReel_;
    var portal_;
    var yinYangPosition_=-1;
    var fsType_=0;
    var externalOrigin_;
    var mult_=false;

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
        displayManager_.getGroup("portal").visible=true;
        spinManager_.createReels();
        guiBottomBar_.setBetControlInitialBet(ReelConfig.bet);//todo change this, it's just to apply the default bet
        logger("nh call8")
    }

    function initGame_(){
        //sticky wild
        stickyWildManager_= new WildManager(game_,gameClass_,stickyWildConf);
        if (stickyWildSmb_==undefined) {
            stickyWildSmb_ = [];
            for (i = 0; i < 5; i++) {
                stickyWildSmb_[i] = [];
                for (a = 0; a < 4; a++) {
                    stickyWildSmb_[i][a] = {};
                }
            }
        }
        gcmCalls_("STAKE",balanceManager_.getCoinValue());
        if (communicationManager_.getResumeStatus().status.hand=="freespins") {
            if (communicationManager_.getResumeStatus().status !=null && communicationManager_.getResumeStatus().status.stake>0){
                changeBet_(communicationManager_.getResumeStatus().status.stake/100, true);
            }
            //f1x2.GcmError(-3);
            freeRoundsManager_.frChecker();
            freeSpinsManager_.parse(communicationManager_.getResumeStatus());
            stickyWildManager_.resumeWildReel();
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
        }
        onGame_=true;
        framework.showFramework();

        yinYang_=displayManager_.getGroup("portal").portal.children[0];
        yinYangReel_=displayManager_.getGroup("portal").portalReel.children[0];
    }

    function resetYinYang_(){

        if (freeSpinsManager_.getIsInFs() == false && yinYangPosition_>=0 && yinYang_.x!=Number(displayManager.groups.portal.graphAsset.portal.x)) {
            yinYangPosition_=-1;
            TweenMax.to(yinYang_,.3,{alpha:0,onComplete:moveBackYinYang_});
        }
        mult_=false;
    }

    function moveBackYinYang_(){
        TweenMax.to(yinYang_,.3,{alpha:1});
    }

    function playYinYang_(){
        soundManager_.playSound("yyLeft");
        yinYang_.animations.add("anim");
        yinYang_.animations.play("anim", 48, false, false, endYinYang_, null);
    }

    function startYinYang_(){
        soundManager_.playSound("yyReels");
        yinYangReel_.animations.add("anim");
        yinYangReel_.animations.play("anim", 48, false, false, endStartYinYang_ ,null);
    }

    function endStartYinYang_(){
        if (fsType_>=0){//unleash one of the 4 beasts in some position
            TweenMax.to(yinYangReel_,.5,{alpha:0,onComplete:startPortal_});
        }else{
            TweenMax.to(yinYangReel_,.5,{alpha:0,onComplete:playTriggeredSmb_});
        }
    }

    function startPortal_(){
        if (yinYangPosition_>=0) {
            //soundManager_.playSound("yyLanding");
            var reels = spinManager_.getReels();
            portal_ =reels[2].replaceIcon("upperIcon"+yinYangPosition_, 7);
            portal_ = game_.add.sprite(portal_.x, portal_.y, "anim7Portal");
            reels[2].getSymbol(yinYangPosition_).visible = false;

            if (spinManager_.getAnimationMap( 2,yinYangPosition_)!=null) {
                var ss = spinManager_.getAnimationMap(2, yinYangPosition_);
                spinManager_.getReelGroup(2).remove(ss);
            }

            displayManager_.getGroup("portal").add(portal_);
            portal_.anchor.set(.5, .5);
            portal_.animations.add("anim");
            portal_.scale.x = 1;
            portal_.scale.y = 1;
            portal_.animations.play("anim", 24, true, true);    //the beast will be unleashed by the wild class
            soundManager_.playSound("portalLoop");
            yinYangPosition_=-1;

        }else{
            resetYinYang_();
        }
    }

    function endYinYang_(){
        yinYangReel_.alpha=0;
        yinYangReel_.visible=true;
        TweenMax.to(yinYang_,1,{alpha:0,onComplete:endFirstYinYangAnim_});
        TweenMax.to(yinYangReel_,1,{delay:1.2,alpha:1,onComplete:startYinYang_});
    }

    function endFirstYinYangAnim_() {
        if (yinYangPosition_>=0) {
            var reels=spinManager_.getReels();
            var x= reels[2].getSymbol(0).x;
            var y=reels[2].getSymbol(yinYangPosition_).y;
            yinYangReel_.x=x;
            yinYangReel_.y=y;
            soundManager_.playSound("yyLanding");
        }else{
            resetYinYang_();
        }
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
        if(spinning_ && gotErrorInAp_==false)return;
        if(messageOn_==true){
            return;
        }
        eventManager_.clearEvt();

        resetYinYang_();
        if(won){
            //  updateBalance_("WIN");
        }
        buttonManager_.applyState("SPIN");

        if (ReelConfig.spinType=="singleIconReelSpin") {
            //spinManager_.startSpin(swipe[0]);
        }else{
            spinning_=true;
            lineManager_.stopEvents();
            bonusManager_.clearLineEval();
            stickyWildManager_.clearWild(stickyWildSmb_);
            winAmtManager_.resetWinManager();
            soundManager_.stopSound("winSound");

            if (freeSpinsManager_.getIsInFs() == true) {
                freeSpinsManager_.updateFreeSpinsTotWon();
                setTimeout(balanceManager_.bet,1000,betCheckCallBack_);
            }else{
                balanceManager_.bet(betCheckCallBack_);
            }
        }
    }

    function betCheckCallBack_(response){
        var swipe=[false];
        //handling FS message here
        if (response==true){
            if (autoPlayManager_.getIsInAutoPlay()==false || autoPlayManager_.getPreAutoPlayAutoriz()==true) {
                if (resetSW_) {       //reset expanding wilds
                    stickyWildManager_.resetWilds();
                    resetSW_=false;
                }
                waitForSubstitution_=false;
                showScatterWin_=false;
                showFsWin_=false;


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
            }else{
                buttonManager_.applyState("NH");
                spinning_=false;
                balanceManager_.unBet();
                setTimeout(showApMessage_,500);
            }
        } else {
            buttonManager_.applyState("NH");
            spinning_=false;
            framework.updateSmallMessageText(Translate.do("Insufficient funds. Please reduce stake."));

        }

    }

    function getStickyWildNumber_(reels) {
        stickyWilSimbsNum_ = 0;
        externalOrigin_=spinManager_.getSpinResp().status.origin;
        yinYangPosition_ = spinManager_.getSpinResp().status.feature;
        fsType_=spinManager_.getSpinResp().status.fsType;

        if (stickyWildManager_ != null) {
            if (externalOrigin_=="") {
                for (var i = 0; i < reels.length; i++) {
                    for (var a = 0; a < 4; a++) {
                        if (stickyWildSmb_[i][a].special == undefined) stickyWildSmb_[i][a].special = [];
                        if (stickyWildManager_.getTriggerIcon().indexOf(spinManager_.getSpinReelResp().reel[i].smb[a].smb) >= 0 || ( spinManager_.getSpinReelResp().reel[i].smb[a].prevSmb != undefined && stickyWildManager_.getTriggerIcon().indexOf(spinManager_.getSpinReelResp().reel[i].smb[a].prevSmb >= 0))) {
                            if (spinManager_.getSpinReelResp().reel[i].smb[a].special == "origin") {//attach a new one only when stage 1
                                stickyWildSmb_[i][a].special.push(spinManager_.getSpinReelResp().reel[i].smb[a].special);
                                var smbIndex = a;
                                stickyWildSmb_[i][a].simbolReference = (reels[i].getSymbol(smbIndex));
                                stickyWildSmb_[i][a].simbolReference.fake=false;
                                stickyWildSmb_[i][a].simbolReference.smbToRemove = a;
                                stickyWildSmb_[i][a].simbolReference.indexToRemove = smbIndex;
                                stickyWildSmb_[i][a].fsType = fsType_;
                                stickyWildSmb_[i][a].portal = portal_ ;
                                stickyWilSimbsNum_++;

                            } else {
                                var smbIndex = a;
                                stickyWildSmb_[i][a].simbolReference = (reels[i].getSymbol(smbIndex));
                                stickyWildSmb_[i][a].special.push("anim");
                            }
                            if (stickyWildManager_.getTriggerIcon().indexOf(spinManager_.getSpinReelResp().reel[i].smb[a].smb) >= 0 && spinManager_.getSpinReelResp().reel[i].smb[a].special == "done") {
                                spinManager_.getSpinReelResp().reel[i].smb[a].notShow = true;
                            }
                        }
                    }
                }
            }else{

                //the origin of the beast is otside of the reels
                var x= externalOrigin_.split(",")[0];
                var y =externalOrigin_.split(",")[1];
                var fakeObj={};
                if (stickyWildSmb_[0][0].special == undefined) stickyWildSmb_[0][0].special = [];
                stickyWildSmb_[0][0].special.push("origin");

                if (x>4){//out on the right
                    fakeObj.x=reels[4].getSymbol(0).x + (x-4)*  ReelConfig.reel.deltaX;
                }else if (x<0) {//out on the right
                    fakeObj.x=reels[0].getSymbol(0).x + (x)*  ReelConfig.reel.deltaX;
                }else{//inside
                    fakeObj.x=reels[x].getSymbol(0).x ;
                }

                var smbIndex = y;
                if (y>3){//out on the bottom
                    fakeObj.y=reels[0].getSymbol(3).y + (y-3)*  ReelConfig.reel.deltaY;
                }else if (y<0) {//out on the top
                    fakeObj.y=reels[0].getSymbol(0).y + (y)*  ReelConfig.reel.deltaY;
                }else{//inside
                    fakeObj.y=reels[0].getSymbol(smbIndex).y ;
                }


                fakeObj.fake=true;
                stickyWildSmb_[0][0].simbolReference = fakeObj;
                stickyWildSmb_[0][0].fsType = fsType_;
                stickyWildSmb_[0][0].portal =  null;
                stickyWilSimbsNum_++;
            }
            if (stickyWilSimbsNum_){
                stickyWildManager_.showWild(stickyWildSmb_);//this will unleash the beast
            }
        }
    }

    function spinAnimEnd_() {
        choose_=false;
        lineCompletion_=false;
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

            if ((fsWon || mult_) &&  yinYangPosition_>=0 && freeSpinsManager_.getIsInFs() == false) {
                eventManager_.addEvent(playYinYang_, 10);
                eventManager_.addEvent(fakeEvent_, (fsType_>=0 || mult_)?7000:3000);
            }

            twinReelManager_.hideTwinReels();

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
                gcmCalls_("PAID",0);
            }

            buttonManager_.applyState("AFTERSPIN");

            if (fsWon && freeSpinsManager_.getIsInFs() == true && freeSpinsManager_.getFsNumber() == 0) {
                if (fsWon==false && won){
                    eventManager_.addEvent(fsEval_, 7000);
                }else {
                    eventManager_.addEvent(fsEval_, 2000);
                }
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
        if(!freeSpinsManager_.getIsInFs())balanceManager_.balanceUpdate();
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
        setTimeout(enableButton_, 500);
        multiplierManager_.resetMultipliers();
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
            if ((ap && won)|| fs){
                //waiting for line class to trigger
                eventManager_.addEvent(waitForLineCompletion_,50);
            }else{
                eventManager_.addEvent(startAutoSpin_,500,[false]);
            }

            eventManager_.triggerEvt();
        }
    }

    function waitForLineCompletion_() {
        if (lineCompletion_ || (won==0 && fs)){
            startAutoSpin_([false]);
        }else{
            setTimeout(waitForLineCompletion_,500);
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
        resetSW_=true;
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
        //called after spin to move the symbols in the upper position before moving the reel
        for (var a = 0; a < ReelConfig.numIcons; a++) {
            var smb = (spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb != null) ? spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb : spinManager_.getSpinReelResp().reel[i].smb[a].smb;
            if (freeSpinsManager_.getIsInFs()== false  || spinManager_.getSpinReelResp().reel[i].smb[a].notShow!=true) {
                var s = spinManager_.getReels()[i].swapSmb(smb, a);
                if (spinManager_.getSpinReelResp().reel[i].smb[a].special == "mult3") { //check for mult to animate
                    s.reel = i;
                    s.smb = a;
                    s.special="mult";
                    spinManager_.addTriggerIcon(s);
                    mult_=true;
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

        if (yinYangPosition_>=0) {
            var reels = spinManager_.getReels();
            reels[2].replaceIcon("upperIcon"+yinYangPosition_, 14);
            yinYangPosition_ = -1;
            yinYang_.alpha=1;
            yinYang_.visible=true;
        }

        for (var a in triggerSymbol_){
            if (triggerSymbol_[a].special=="mult" &&  triggerSymbol_[a].played==undefined) {
                iconN = triggerSymbol_[a].smbNum;
                add = true;
                var smb = new Phaser.Sprite(game_, triggerSymbol_[a].x, triggerSymbol_[a].y, "multiplier");
                smb.anchor.set(0, 1);
                smb.scale.x = .5;
                smb.scale.y = .5;

                displayManager_.getGroup("portal").add(smb);

                TweenMax.to(smb.scale,.5,{x:.7,y:.7,ease:Bounce.easeOut,onComplete:bounce,onCompleteParams:[smb]});

                triggerSymbol_[a].played=true;
                soundManager_.playSound("yyMultiply");
            }
        }
    }

    function bounce(txt){
        TweenMax.to(txt.scale,.5,{x:.5,y:.5,ease:Bounce.easeOut,onComplete:move,onCompleteParams:[txt]});
    }

    function move(txt){
        TweenMax.to(txt,.7,{delay:1.6,alpha:0.3,y:100,onComplete:kill,onCompleteParams:[txt]});
    }

    function kill(txt){
        txt.visible=false;
        txt.destroy();
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
/*
    function setDelRepeter_(obj){
        var delayRepeater=obj.delayRepeater;
        var slowDownReel=[];
        var iconSound=[];
        var reelSound=[];
        var iconEffect=[];
        var found=0;
        var inc=0;
        var min=3;
        var nextToFind;

        for (var i = 0; i <= ReelConfig.numReels; i++) {
            slowDownReel[i]=false;
            iconSound[i]=false;
            reelSound[i]=false;
            iconEffect[i]="";

        }

        if (freeSpinsManager_.getIsInFs()==true ) {
            delayRepeater[0] = 4;
            delayRepeater[1] = 8;
            iconSound[2] = true;
            iconEffect[2]="win";
            delayRepeater[2] = 24;
            delayRepeater[3] = 12;
            delayRepeater[4] = 16;
        }
        //looking for feature symbols to slow down the reels creating some anticipation

        for (var i = 0; i < ReelConfig.numReels; i++) {
            //console.log("loop " +delayRepeater[i] + " "+slowDownReel[i] + " "+reelSound[i] +" "+iconSound[i])
        }

        obj.slowDownReel=slowDownReel;
        obj.iconSound=iconSound;
        obj.delayRepeater=delayRepeater;
        obj.reelSound=reelSound;
        obj.iconEffect=iconEffect;
        return obj;
    }
    */

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

    function fsLogoOut_(){
        displayManager_.getGroup("bg").visible=false;
        displayManager_.getGroup("mask").visible=false;
        displayManager_.getGroup("frame").visible=false;
        displayManager_.getGroup("bgFS").visible=true;
        displayManager_.getGroup("maskFS").visible=true;
        displayManager_.getGroup("frameFS").visible=true;
        yinYang_.alpha=1;
    }

    function fsHideTotPanel_(){
        displayManager_.getGroup("bg").visible=true;
        displayManager_.getGroup("mask").visible=true;
        displayManager_.getGroup("frame").visible=true;
        displayManager_.getGroup("bgFS").visible=false;
        displayManager_.getGroup("maskFS").visible=false;
        displayManager_.getGroup("frameFS").visible=false;
        resetYinYang_();
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
        getStickyWildNumber:getStickyWildNumber_,
        decreaseVolumeBG:decreaseVolumeBG_,
        increaseVolumeBG:increaseVolumeBG_,
        fsLogoOut:fsLogoOut_,
        fsHideTotPanel:fsHideTotPanel_,
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
        },
        setStickyWildSimbs:function (value) {
            stickyWildSmb_=value;
        },
        getStickyWildSimbs:function () {
            return stickyWildSmb_;
        },
        waitForSpin:function(){
            if (freeSpinsManager_.getIsInFs() == true) {
                var sw=stickyWildManager_.hasWildReel();
                var ret= (sw);
                //return ( ret );
                return true; // forcing slow speed
            }else{
                return false;
            }
        },
        isReelWilded:function(num){
            return false;
        },
        getStickyWildManager:function(){
            return stickyWildManager_;
        },
        getLastFSTime:function(){
            //return the delay to close sticky spins
            return (won || winManager_.getScatterWinAmt()[0]!=null)?lineManager_.getTotalDuration():3000;
        },
        hasStickyDelay:function(){
            if (freeSpinsManager_.getIsInFs() == true) {
                return stickyWildManager_.hasWildReel();
            }else{
                return false;
            }
        },
        getFsIcon:function(){
            return "";
        },
        lineCompletion:function (value){
            lineCompletion_=value;
        }
    }

    return me;
}