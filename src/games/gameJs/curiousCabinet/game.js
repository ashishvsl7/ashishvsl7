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

    var waitForSubstitution_=0;
    var waitDrawerToClose_=0;
    var wonBonus=0;
    var onGame_=false;
    var showScatterWin_=false;
    var showFsWin_=false;
    var choose_=false;
    var fadeBg_=false;
    var iFadeT_O_=0;
    var lineCompletion_=false;

    var respin_=0;
    var respinMc_=null;
    var multiMc_=null;
    var multiplier_=false;
    var objThrown_=[];
    var scatterBgGlow_=[];
    var silverCoins_=false;
    var resume_=false;
    var scatterAnBonus_=true;
    var scatterWinAmt_=0;
    var scatterWinAmtEnableButtonCheck_=0;
    var hasScatterWin_=false;
    var hasBonusWin_=false;
    var glowTimeout_=[];
    var glowTimeout_=[];
    var scatterAnimation_=[];
    var scatterIcon_=[];
    var funtainEventManager_=[];
/*
indeces
FS:    70,16,42,22,139,125

REspin: 83,73,32,80,102,885

Drawer big scatter: 53,81,4,39,112,493
Drawer normal:75,105,74,134,110,8
Drawer 160: 41,43,34,110,8,741

Monster scatter low: 61,53,51,133,7,323
Monster quite medium: 320,26,14,45,134,9,340
Monster 320 : 27,2,58,33,76,465
Monster very big:

Dolls and lines: : 91,50,78,110,10,710
DOlls very big: 46,63,93,137,128,974


fault sequences
dolls and monsters 7,102,2,37,94,415   149,120,38,132,33,490


monster no HL

no hl monster & doll   26,52,30,98,52,549

stick no HL   18,95,41,126,37,680

early stop sound on monster 115,10,48,30,55,533  Louis said it would add a "noSOund" special attribute to avoid early sounds

*/

    function create_() {
        //display manager levels
        displayManager_.getGroup("bg").visible=true;
        displayManager_.getGroup("mask").visible=true;
        displayManager_.getGroup("sideObjects").visible=true;
        displayManager_.getGroup("frame").visible=true;
        displayManager_.getGroup("status").visible=true;
        displayManager_.getGroup("logo").visible=true;
        spinManager_.createReels();
        guiBottomBar_.setBetControlInitialBet(ReelConfig.bet);//todo change this, it's just to apply the default bet
        logger("nh call8")
    }

    function initGame_(){
        //resuming wilds
        wildManager_.resumeWildReel();
        funtainEventManager_[0]= new EventManager();
        funtainEventManager_[1]= new EventManager();
        funtainEventManager_[2]= new EventManager();
        funtainEventManager_[3]= new EventManager();
        funtainEventManager_[4]= new EventManager();

        gcmCalls_("STAKE",balanceManager_.getCoinValue());
        if (communicationManager_.getResumeStatus().status.hand=="freespins" && communicationManager_.getResumeStatus().status.type!="respin") {
            if (communicationManager_.getResumeStatus().status !=null && communicationManager_.getResumeStatus().status.stake>0){
                changeBet_(communicationManager_.getResumeStatus().status.stake/100, true);
            }
            resume_=true;
            //f1x2.GcmError(-3);
            freeRoundsManager_.frChecker();
            freeSpinsManager_.parse(communicationManager_.getResumeStatus());
            freeSpinsManager_.resumeFs();
            buttonManager_.applyHide();
            messageBox_.showMessage("game", "\n"+ Translate.do("You have unused Free Spins"), "\n"+Translate.do("They will be automatically started"), startResumeFs_);
        }else if (communicationManager_.getResumeStatus().status.hand=="freespins") {
            if (communicationManager_.getResumeStatus().status !=null && communicationManager_.getResumeStatus().status.stake>0){
                changeBet_(communicationManager_.getResumeStatus().status.stake/100, true);
            }
            //f1x2.GcmError(-3);
            freeRoundsManager_.frChecker();
            buttonManager_.applyHide();
            messageBox_.showMessage("game", "You have unused Re-Spin", "It will be automatically started", startResumeRespin_);
        }else{
            buttonManager_.applyRestore();
            buttonManager_.applyState("NH");
            freeRoundsManager_.frChecker();
        }
        onGame_=true;
        framework.showFramework();

        //setTimeout(initFsShape_,1000);
    }

    function initFsShape_(){
        /*
        get fs
        animate icon
        turn candels off
        get darker
        change bg
        light on
        electricity
        shrink
        rollback
        cahnge bg
        candels on
        */
        if (resume_==false) {
            displayManager_.getGroup("fadeFS").bg.children[0].alpha = 0;
            displayManager_.getGroup("fadeFS").visible = true;
            TweenMax.to(displayManager_.getGroup("sideObjects")["bg2"].children[0], 1, {x: displayManager_.getGroup("sideObjects")["bg2"].children[0].x + 200});
            TweenMax.to(displayManager_.getGroup("sideObjects")["bg3"].children[0], 1, {x: displayManager_.getGroup("sideObjects")["bg3"].children[0].x - 200});
            soundManager_.playSound("tranCurtain");

            var index = 1;
            for (var i = 5; i >= 0; i--) {
                setTimeout(candleOff_, 500 + (index * 120), i);
                index++;
            }
            index = 0;
            for (var i = 6; i <= 10; i++) {
                setTimeout(candleOff_, 500 + (index * 120), i);
                index++;
            }

            TweenMax.to(displayManager_.getGroup("fadeFS").bg.children[0], 1.7, {
                alpha: 1,
                onStart:candleSound_,
                onComplete: candleAllOff_,
                ease: Power2.easeIn
            });
        }else{
            displayManager_.getGroup("sideObjects")["bg2"].children[0].x=displayManager_.getGroup("sideObjects")["bg2"].children[0].x+200;
            displayManager_.getGroup("sideObjects")["bg3"].children[0].x=displayManager_.getGroup("sideObjects")["bg3"].children[0].x-200;
            for (var i = 0; i <= 10; i++) {
                displayManager_.getGroup("sideObjects")["s" + i].children[0].visible = false;
            }


            fsOn_();
            displayManager_.getGroup("sideObjects")["bg2"].children[0].x=displayManager_.getGroup("sideObjects")["bg2"].children[0].x-200;
            displayManager_.getGroup("sideObjects")["bg3"].children[0].x=displayManager_.getGroup("sideObjects")["bg3"].children[0].x+200;
            displayManager_.getGroup("fadeFS").bg.children[0].alpha=0;
            displayManager_.getGroup("fsDrawers").visible=true;
            displayManager_.getGroup("fsDrawers").x=-2;


            var leftSide=displayManager_.getGroup("maskFS").bgL.children[0];
            var rightSide=displayManager_.getGroup("maskFS").bgR.children[0];
            var bottomSide=displayManager_.getGroup("maskFS").bgB.children[0];
            var behind=displayManager_.getGroup("frameFS").bg.children[0];

            TweenMax.to(displayManager_.getGroup("reels").scale,0,{x:.8,y:.8});
            TweenMax.to(displayManager_.getGroup("fsDrawers").scale,0,{x:.8,y:.8});
            TweenMax.to(bottomSide.scale,0,{x:.8,y:.8});
            TweenMax.to(behind.scale,0,{x:.8});
            TweenMax.to(leftSide,0,{x:leftSide.x+63});
            TweenMax.to(rightSide,0,{x:rightSide.x-63});
            TweenMax.to(displayManager_.getGroup("fsDrawers"),0,{x:124,y:22+104});
            TweenMax.to(displayManager_.getGroup("reels"),0,{x:126,y:22,onComplete:endFsTransformation_});

            displayManager_.getGroup("wild").scale.x=.8;
            displayManager_.getGroup("wild").scale.y=.8;
            displayManager_.getGroup("wild").x=126;
            displayManager_.getGroup("wild").y=22;

            displayManager_.getGroup("bgIconAnim").scale.x=.8;
            displayManager_.getGroup("bgIconAnim").scale.y=.8;
            displayManager_.getGroup("bgIconAnim").x=126;
            displayManager_.getGroup("bgIconAnim").y=22;

            displayManager_.getGroup("bgIconScatterAnim").scale.x=.8;
            displayManager_.getGroup("bgIconScatterAnim").scale.y=.8;
            displayManager_.getGroup("bgIconScatterAnim").x=126;
            displayManager_.getGroup("bgIconScatterAnim").y=22;

            displayManager_.getGroup("scatter").scale.x=.8;
            displayManager_.getGroup("scatter").scale.y=.8;
            displayManager_.getGroup("scatter").x=126;
            displayManager_.getGroup("scatter").y=22;

            displayManager_.getGroup("scatterCoins").scale.x=.8;
            displayManager_.getGroup("scatterCoins").scale.y=.8;
            displayManager_.getGroup("scatterCoins").x=126;
            displayManager_.getGroup("scatterCoins").y=22;

            displayManager_.getGroup("wins").scale.x=.8;
            displayManager_.getGroup("wins").scale.y=.8;
            displayManager_.getGroup("wins").x=126;
            displayManager_.getGroup("wins").y=22;

            displayManager_.getGroup("lines").scale.x=.8;
            displayManager_.getGroup("lines").scale.y=.8;
            displayManager_.getGroup("lines").x=126;
            displayManager_.getGroup("lines").y=22;

        }
    }

    function candleSound_(){
        soundManager_.playSound("tranCandle");
    }

    function candleOff_(i){
        displayManager_.getGroup("sideObjects")["s"+i].children[0].visible=false;

        var candelOff= new Phaser.Sprite(game_, displayManager_.getGroup("sideObjects")["s"+i].children[0].x, displayManager_.getGroup("sideObjects")["s"+i].children[0].y, "candleFireOut");
        candelOff.animations.add("anim");
        candelOff.scale.x = 2;
        candelOff.scale.y = 2;
        if (i<6) {
            candelOff.scale.x = -2;
            candelOff.x=candelOff.x+40;
        }
        displayManager_.getGroup("sideObjects").add(candelOff);
        candelOff.animations.play("anim", 12, false, true);

    }

    function candleAllOff_(){
        setTimeout(changeBgFS_,200);
    }

    function changeBgFS_(){
        fsOn_();
        displayManager_.getGroup("sideObjects")["bg2"].children[0].x=displayManager_.getGroup("sideObjects")["bg2"].children[0].x-200;
        displayManager_.getGroup("sideObjects")["bg3"].children[0].x=displayManager_.getGroup("sideObjects")["bg3"].children[0].x+200;

        TweenMax.to(displayManager_.getGroup("fadeFS").bg.children[0],.8,{alpha:0});
        setTimeout(sparkle_,1000);
        displayManager_.getGroup("fsDrawers").visible=true;
        displayManager_.getGroup("fsDrawers").x=-2;
    }

    function sparkle_(){
        soundManager_.playSound("tranCabinetShrink");
        var sp= new Phaser.Sprite(game_, 613+90, 52-10, "magic_3");
        sp.animations.add("anim");
        sp.scale.x = 1;
        sp.scale.y = 1;
        displayManager_.getGroup("maskFS").add(sp);
        sp.animations.play("anim", 24, false, true);

        var sp= new Phaser.Sprite(game_, 863+90, 136-10, "magic_2");
        sp.animations.add("anim");
        sp.scale.x = 1;
        sp.scale.y = 1;
        displayManager_.getGroup("maskFS").add(sp);
        sp.animations.play("anim", 24, false, true);


        var sp= new Phaser.Sprite(game_, 613+90, 588-10, "magic_1");
        sp.animations.add("anim");
        sp.scale.x = 1;
        sp.scale.y = 1;
        displayManager_.getGroup("maskFS").add(sp);
        sp.animations.play("anim", 24, false, true);


        var sp= new Phaser.Sprite(game_, 574, 52-10, "magic_3");
        sp.animations.add("anim");
        sp.scale.x = -1;
        sp.scale.y = 1;
        displayManager_.getGroup("maskFS").add(sp);
        sp.animations.play("anim", 24, false, true);


        var sp= new Phaser.Sprite(game_, 324, 136-10, "magic_2");
        sp.animations.add("anim");
        sp.scale.x = -1;
        sp.scale.y = 1;
        displayManager_.getGroup("maskFS").add(sp);
        sp.animations.play("anim", 24, false, true);


        var sp= new Phaser.Sprite(game_, 574, 588-10, "magic_1");
        sp.animations.add("anim");
        sp.scale.x = -1;
        sp.scale.y = 1;
        displayManager_.getGroup("maskFS").add(sp);
        sp.animations.play("anim", 24, false, true,endSparkle_);

    }

    function endSparkle_(){
        var leftSide=displayManager_.getGroup("maskFS").bgL.children[0];
        var rightSide=displayManager_.getGroup("maskFS").bgR.children[0];
        var bottomSide=displayManager_.getGroup("maskFS").bgB.children[0];
        var behind=displayManager_.getGroup("frameFS").bg.children[0];

        TweenMax.to(displayManager_.getGroup("reels").scale,1,{x:.8,y:.8});
        TweenMax.to(displayManager_.getGroup("fsDrawers").scale,1,{x:.8,y:.8});

        TweenMax.to(bottomSide.scale,1,{x:.8,y:.8});
        TweenMax.to(behind.scale,1,{x:.8});
        TweenMax.to(leftSide,1,{x:leftSide.x+63});
        TweenMax.to(rightSide,1,{x:rightSide.x-63});
        TweenMax.to(displayManager_.getGroup("fsDrawers"),1,{x:123,y:22+104});
        TweenMax.to(displayManager_.getGroup("reels"),1,{x:126,y:22,onComplete:endFsTransformation_});
        displayManager_.getGroup("wild").scale.x=.8;
        displayManager_.getGroup("wild").scale.y=.8;
        displayManager_.getGroup("wild").x=126;
        displayManager_.getGroup("wild").y=22;

        displayManager_.getGroup("bgIconAnim").scale.x=.8;
        displayManager_.getGroup("bgIconAnim").scale.y=.8;
        displayManager_.getGroup("bgIconAnim").x=126;
        displayManager_.getGroup("bgIconAnim").y=22;

        displayManager_.getGroup("bgIconScatterAnim").scale.x=.8;
        displayManager_.getGroup("bgIconScatterAnim").scale.y=.8;
        displayManager_.getGroup("bgIconScatterAnim").x=126;
        displayManager_.getGroup("bgIconScatterAnim").y=22;

        displayManager_.getGroup("scatter").scale.x=.8;
        displayManager_.getGroup("scatter").scale.y=.8;
        displayManager_.getGroup("scatter").x=126;
        displayManager_.getGroup("scatter").y=22;

        displayManager_.getGroup("scatterCoins").scale.x=.8;
        displayManager_.getGroup("scatterCoins").scale.y=.8;
        displayManager_.getGroup("scatterCoins").x=126;
        displayManager_.getGroup("scatterCoins").y=22;

        displayManager_.getGroup("wins").scale.x=.8;
        displayManager_.getGroup("wins").scale.y=.8;
        displayManager_.getGroup("wins").x=126;
        displayManager_.getGroup("wins").y=22;

        displayManager_.getGroup("lines").scale.x=.8;
        displayManager_.getGroup("lines").scale.y=.8;
        displayManager_.getGroup("lines").x=126;
        displayManager_.getGroup("lines").y=22;
        displayManager_.getGroup("sideObjects")["bg0"].children[0].alpha=0;
        //setTimeout(resetFsShape_,3000)
    }

    function resetFsShape_(){
        var leftSide=displayManager_.getGroup("maskFS").bgL.children[0];
        var rightSide=displayManager_.getGroup("maskFS").bgR.children[0];
        var bottomSide=displayManager_.getGroup("maskFS").bgB.children[0];
        var behind=displayManager_.getGroup("frameFS").bg.children[0];

        displayManager_.getGroup("reels").scale.x=1;
        displayManager_.getGroup("reels").scale.y=1;
        displayManager_.getGroup("fsDrawers").x=0;
        displayManager_.getGroup("fsDrawers").y=0;
        displayManager_.getGroup("fsDrawers").scale.x=1;
        displayManager_.getGroup("fsDrawers").scale.y=1;

        bottomSide.scale.x=1;
        bottomSide.scale.y=1;

        behind.scale.x=1;
        behind.scale.y=1;

        leftSide.x=leftSide.x-63;
        rightSide.x=rightSide.x+63;

        displayManager_.getGroup("reels").x=0;
        displayManager_.getGroup("reels").y=0;

        displayManager_.getGroup("wild").scale.x=1;
        displayManager_.getGroup("wild").scale.y=1;
        displayManager_.getGroup("wild").x=0;
        displayManager_.getGroup("wild").y=0;


        displayManager_.getGroup("scatter").scale.x=1;
        displayManager_.getGroup("scatter").scale.y=1;
        displayManager_.getGroup("scatter").x=0;
        displayManager_.getGroup("scatter").y=0;

        displayManager_.getGroup("scatterCoins").scale.x=1;
        displayManager_.getGroup("scatterCoins").scale.y=1;
        displayManager_.getGroup("scatterCoins").x=0;
        displayManager_.getGroup("scatterCoins").y=0;

        displayManager_.getGroup("wins").scale.x=1;
        displayManager_.getGroup("wins").scale.y=1;
        displayManager_.getGroup("wins").x=0;
        displayManager_.getGroup("wins").y=0;

        displayManager_.getGroup("lines").scale.x=1;
        displayManager_.getGroup("lines").scale.y=1;
        displayManager_.getGroup("lines").x=0;
        displayManager_.getGroup("lines").y=0;

        displayManager_.getGroup("bgIconAnim").scale.x=1;
        displayManager_.getGroup("bgIconAnim").scale.y=1;
        displayManager_.getGroup("bgIconAnim").x=0;
        displayManager_.getGroup("bgIconAnim").y=0;

        displayManager_.getGroup("bgIconScatterAnim").scale.x=1;
        displayManager_.getGroup("bgIconScatterAnim").scale.y=1;
        displayManager_.getGroup("bgIconScatterAnim").x=0;
        displayManager_.getGroup("bgIconScatterAnim").y=0;
        fsOff_();
        TweenMax.to(displayManager_.getGroup("fadeFS").bg.children[0],.8,{delay:1,alpha:0});
    }

    function endFsTransformation_(){
    }

    function startResumeFs_(){
        buttonManager_.applyRestore();
        realDoSpin_([false]);
    }

    function startResumeRespin_(){
        respin_=1;
        fs=true;
        buttonManager_.applyRestore();
        if (freeRoundsManager_.getIsInFr()==false) {
            enableButton_();//it will start FS
        }else{
            realDoSpin_([false]);
        }
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
        var a;
        if(!onGame_)return;
        if(messageOn_==true){
            return;
        }
        spinning_=true;
        silverCoins_=false;
        eventManager_.clearEvt();
        funtainEventManager_[0].clearEvt();
        funtainEventManager_[1].clearEvt();
        funtainEventManager_[2].clearEvt();
        funtainEventManager_[3].clearEvt();
        funtainEventManager_[4].clearEvt();
        //clear the screen
        if(displayManager_.getGroup("bgIconAnim"))displayManager_.getGroup("bgIconAnim").alpha=0;
        for (a in displayManager_.getGroup("bgIconAnim").children){
            displayManager_.getGroup("bgIconAnim").remove(displayManager_.getGroup("bgIconAnim").children[a]);
        }
        for (a in scatterBgGlow_){
            displayManager_.getGroup("bgIconScatterAnim").remove(scatterBgGlow_[a]);
        }
        for (a in glowTimeout_){
            clearTimeout(glowTimeout_[a]);
        }
        glowTimeout_=[];
        if (hasBonusWin_>0)resetScatterAnim_();

        if (multiplier_){
            setTimeout(clearMultiplier_, 500);
        }
        scatterIcon_=[];
        scatterAnimation_=[];
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
                waitForSubstitution_ = 0;
                waitDrawerToClose_=0;
                showScatterWin_ = false;
                showFsWin_ = false;

                autoPlayManager_.updateApNum();
                freeSpinsManager_.updateFreeSpinsNum();
                freeRoundsManager_.updateFreeRoundsNum();

                logger(" interrupted win animation ");
                winAmtManager_.forceToComplete();
                lineManager_.clearLineAfterValue();
                scatterWinAmtEnableButtonCheck_=0;
                scatterWinAmt_=0;
                hasBonusWin_=false;
                hasScatterWin_=false;
                if (freeSpinsManager_.getIsInFs() == true || respin_>0) {
                    framework.updateSmallMessageText(Translate.do("Bet:") + " " + Translate.do((respin_>0) ? "free re-spins" : "free spin"));
                    respin_=2;
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
    }

    function getStickyWildNumber_(reels){

    }

    function spinAnimEnd_() {
        choose_=false;
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
        spinning_=false;

        //clear previous coins
        for (a in objThrown_){
            if(objThrown_[a]!=null) {
                objThrown_[a].destroy();
                objThrown_[a] = null;
            }
        }
        objThrown_=[];

        if (respin_==2){
            for ( var a in displayManager_.getGroup("stickyWild").children){
                displayManager_.getGroup("stickyWild").remove(displayManager_.getGroup("stickyWild").children[0]);
            }
        }

        if (wonBonus==0) {

            logger("NO bonus found ")

            eventManager_.addEvent(playTriggeredSmb_,0);


            if (freeSpinsManager_.getIsInFs()==true){
                eventManager_.addEvent(playFsDrawers_,300);
                eventManager_.addEvent(fakeEvent_,2000);
            }

            var sc=0;
            var s=false;
            var b=false;
            if (winManager_.getScatterWinAmt()!=null) {

                if (findScatterWinAmt(spinManager_.getWinResp().scatter,7)>0) {
                    sc+=findScatterWinAmt(spinManager_.getWinResp().scatter,7);
                    s=true;
                }
                if (findScatterWinAmt(spinManager_.getWinResp().scatter,8)>0) {
                    sc+=findScatterWinAmt(spinManager_.getWinResp().scatter,8);
                    s=true;
                }
                if (findScatterWinAmt(spinManager_.getWinResp().scatter,11)>0) {
                    sc+=findScatterWinAmt(spinManager_.getWinResp().scatter,11);
                    b=true;
                }
            }

            if (freeSpinsManager_.getIsInFs()==true && spinManager_.getFsResp().drawers != null){
                //durnig FS drawers scatters are not on scatter TAG
                var dr=spinManager_.getFsResp().drawers;
                var amt=0;
                for( var a in dr){
                    if (dr[a].indexOf("silvercoin")>=0){
                        amt+=Number(dr[a].split("silvercoin")[1]);
                        b=true;
                    }else if (dr[a].indexOf("goldcoin")>=0){
                        amt+=Number(dr[a].split("goldcoin")[1]);
                        b=true;
                    }
                }
                sc+=amt*(balanceManager_.getCoinValue()/ lineManager_.getLinesNumber());
            }
            if (sc>0){
                if (freeSpinsManager_.getIsInFs()==true && won){
                    eventManager_.addEvent(fakeEvent_,2000);
                }
            }

            wildManager_.endAnimHandle((winManager_.getWildNum()>0)?winManager_.getWildSimbs():null, eventManager_);

            if (won) {
                if (waitForSubstitution_>0)eventManager_.addEvent(fakeEvent_,waitForSubstitution_+1000);
                lineManager_.endAnimHandle(winManager_.getAllWinsSorted(), eventManager_);
                freeSpinsManager_.endAnimHandle(eventManager_);
                if (freeRoundsManager_.getIsInFr()==true && freeSpinsManager_.getIsInFs() == false ){//no add delay during nested FS
                    eventManager_.addEvent(fakeEvent_,(won)?lineManager_.getTotalDuration():0);
                }
            } else {
                if (waitForSubstitution_>0)eventManager_.addEvent(fakeEvent_,waitForSubstitution_);
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
        if(!freeSpinsManager_.getIsInFs() && freeSpinsManager_.getFsWon()==false)balanceManager_.balanceUpdate();
        freeRoundsManager_.updateFreeRoundsTot();
    }

    function fsEval_(){
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
        if (respin_>1){
            setTimeout(clearRespin_, 1000);
        }
        if (!won && scatterWinAmtEnableButtonCheck_==0){
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
            var time=500 +waitDrawerToClose_;
            if (won)time+=Number(lineManager_.getTotalDuration());
            if (time!=undefined && time!= null && time>0){
                eventManager_.addEvent(startAutoSpin_,time,[false]);
            }else{
                eventManager_.addEvent(startAutoSpin_,3000,[false]);
            }

            eventManager_.triggerEvt();
        }
    }

    function startAutoSpin_(par){
        if (autoPlayManager_.getIsInAutoPlay() || fs) {
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
        displayManager_.getGroup("fsWonPanel").y=-1000;
        //apEval_();
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
        i=i[0];

        if (i==0){
            waitDrawerToClose_=0;
            //some consideration on the scatter winnings first
            if (spinManager_.getWinResp()!=null && spinManager_.getWinResp().scatter!=null) {

                if (findScatterWinAmt(spinManager_.getWinResp().scatter,7)>0) {
                    scatterWinAmt_+=findScatterWinAmt(spinManager_.getWinResp().scatter,7);
                    hasScatterWin_=true;
                }
                if (findScatterWinAmt(spinManager_.getWinResp().scatter,8)>0) {
                    scatterWinAmt_+=findScatterWinAmt(spinManager_.getWinResp().scatter,8);
                    hasScatterWin_=true;
                }
                if (findScatterWinAmt(spinManager_.getWinResp().scatter,11)>0) {
                    scatterWinAmt_+=findScatterWinAmt(spinManager_.getWinResp().scatter,11);
                    hasBonusWin_=true;
                }
            }

            if (freeSpinsManager_.getIsInFs()==true && spinManager_.getFsResp().drawers != null){
                //durnig FS drawers scatters are not on scatter TAG
                var dr=spinManager_.getFsResp().drawers;
                var amt=0;
                for( var a in dr){
                    if (dr[a].indexOf("silvercoin")>=0){
                        amt+=Number(dr[a].split("silvercoin")[1]);
                        hasBonusWin_=true;
                    }else if (dr[a].indexOf("goldcoin")>=0){
                        amt+=Number(dr[a].split("goldcoin")[1]);
                        hasBonusWin_=true;
                    }
                }
                scatterWinAmt_+=amt*(balanceManager_.getCoinValue()/ lineManager_.getLinesNumber());
            }

            if (scatterWinAmt_>0){
                //29,53,62,23,42,18
                var coinWin= scatterWinAmt_*(balanceManager_.getCoinValue()/ lineManager_.getLinesNumber());
                if (coinWin>1499){
                    waitDrawerToClose_+=8000;
                }else if (coinWin>999){
                    waitDrawerToClose_+=6000;
                }else if (coinWin>799){
                    waitDrawerToClose_+=4000;
                }else if (coinWin>399){
                    waitDrawerToClose_+=1000;
                }else if (coinWin>159){
                    waitDrawerToClose_+=1000;
                }else if (coinWin>79){
                    waitDrawerToClose_+=1000;
                }else{
                    waitDrawerToClose_+=500;
                }

            }
            scatterWinAmtEnableButtonCheck_=scatterWinAmt_;
        }



        //called after spin to move the symbols in the upper position before moving the reel
        for (var a = 0; a < ReelConfig.numIcons; a++) {
            var smb = (spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb != null) ? spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb : spinManager_.getSpinReelResp().reel[i].smb[a].smb;
            if (spinManager_.getSpinReelResp().reel[i].smb[a].notShow!=true) {
                var s = spinManager_.getReels()[i].swapSmb(smb, a);
                if (spinManager_.getSpinReelResp().reel[i].smb[a].special.indexOf("freespin") >= 0) { //check for special to animate
                    s.reel = i;
                    s.smb = a;
                    s.type="freespin";
                    s.trigger = true;
                    spinManager_.addTriggerIcon(s);
                    waitForSubstitution_=200;
                    waitDrawerToClose_=4000;
                }
                if (spinManager_.getSpinReelResp().reel[i].smb[a].special.indexOf("respin") >= 0) { //check for special to animate
                    s.reel = i;
                    s.smb = a;
                    s.type="respin";
                    s.trigger = true;
                    spinManager_.addTriggerIcon(s);
                    waitForSubstitution_=2000;
                    waitDrawerToClose_=4000;
                }
                if (spinManager_.getSpinReelResp().reel[i].smb[a].special.indexOf("silvercoin") >= 0) { //check for special to animate
                    s.reel = i;
                    s.smb = a;
                    s.type="scatter";
                    s.prize=spinManager_.getSpinReelResp().reel[i].smb[a].special.split("-")[1];//coins
                    s.metal="silver";
                    s.trigger = true;
                    spinManager_.addTriggerIcon(s);
                    waitForSubstitution_=1500;
                    silverCoins_=true;
                }
                if (spinManager_.getSpinReelResp().reel[i].smb[a].special.indexOf("goldcoin") >= 0) { //check for special to animate
                    s.reel = i;
                    s.smb = a;
                    s.type="scatter";
                    s.prize=spinManager_.getSpinReelResp().reel[i].smb[a].special.split("-")[1];//coins
                    s.metal="gold";
                    s.trigger = true;
                    spinManager_.addTriggerIcon(s);
                    waitForSubstitution_=1500;
                    silverCoins_=true;
                }
                if (spinManager_.getSpinReelResp().reel[i].smb[a].special.indexOf("silvermult") >= 0) { //check for special to animate
                    s.reel = i;
                    s.smb = a;
                    s.type="multiplier";
                    s.prize=spinManager_.getSpinReelResp().reel[i].smb[a].special.split("-")[1];//mult
                    s.trigger = true;
                    spinManager_.addTriggerIcon(s);
                    waitForSubstitution_=1000;
                    waitDrawerToClose_=4000;
                }
                if (spinManager_.getSpinReelResp().reel[i].smb[a].special.indexOf("goldmult") >= 0) { //check for special to animate
                    s.reel = i;
                    s.smb = a;
                    s.type="multiplier";
                    s.prize=spinManager_.getSpinReelResp().reel[i].smb[a].special.split("-")[1];//mult
                    s.trigger = true;
                    spinManager_.addTriggerIcon(s);
                    waitForSubstitution_=1000;
                    waitDrawerToClose_=4000;
                }
                if (spinManager_.getSpinReelResp().reel[i].smb[a].special.indexOf("none") >= 0 || (smb==11 && spinManager_.getSpinReelResp().reel[i].smb[a].special.indexOf("n/a")>=0)) { //check for special to animate
                    s.reel = i;
                    s.smb = a;
                    s.type="none";
                    s.trigger = true;
                    spinManager_.addTriggerIcon(s);
                    waitForSubstitution_=1500;
                    waitDrawerToClose_=4000;
                }


                if (gameClass_.checkSpecialSymbol != null && gameClass_.checkSpecialSymbol(spinManager_.getSpinReelResp().reel[i].smb[a].smb) == true) {    //check for other symbols the lazy guy didn't add special for( example Fs multiplier symbols in Ostara)
                    s.reel = i;
                    s.smb = a;
                    spinManager_.addTriggerIcon(s);
                }

                if ( smb ==7 ){
                    if (spinManager_.getSpinReelResp().reel[i].smb[a].special.split("-").indexOf("origin")>=0 && spinManager_.getSpinReelResp().reel[i].smb[a].special.split("-").indexOf("3")>=0){

                        s.reel = i;
                        s.smb = a;
                        s.type="dollx2";
                        s.trigger = true;
                        spinManager_.addTriggerIcon(s);
                        waitForSubstitution_=1000;



                        //setTimeout(delaySubst_,400,smb,i,a);
                    }else if (spinManager_.getSpinReelResp().reel[i].smb[a].special.split("-").indexOf("origin")>=0 && spinManager_.getSpinReelResp().reel[i].smb[a].special.split("-").indexOf("2")>=0 && findScatterWinAmt(spinManager_.getWinResp().scatter,7)>0){

                        s.reel = i;
                        s.smb = a;
                        s.type="dollx3";
                        s.trigger = true;
                        spinManager_.addTriggerIcon(s);
                        waitForSubstitution_=1000;




                        //setTimeout(delayAnim_,400,smb,i,a);
                    }
                }else if (smb==8){
                    if (spinManager_.getSpinReelResp().reel[i].smb[a].special.split("-").indexOf("origin")>=0 && spinManager_.getSpinReelResp().reel[i].smb[a].special.split("-").indexOf("4")>=0) {

                        s.reel = i;
                        s.smb = a;
                        s.type="monsterx1";
                        s.trigger = true;
                        spinManager_.addTriggerIcon(s);
                        waitForSubstitution_=2000;


                        //setTimeout(delaySubst_, 1400, smb, i, a);
                    }else if (spinManager_.getSpinReelResp().reel[i].smb[a].special.split("-").indexOf("origin")>=0 && findScatterWinAmt(spinManager_.getWinResp().scatter,8)>0){
                        s.reel = i;
                        s.smb = a;
                        s.type="monsterx2";
                        s.trigger = true;
                        spinManager_.addTriggerIcon(s);
                        waitForSubstitution_=1500;


                        //setTimeout(delayAnim_,400,smb,i,a);

                    }
                }
            }else{

                if (spinManager_.getSpinReelResp().reel[i].smb[a].special=="out"){
                    var s = spinManager_.getReels()[i].swapSmb(smb, a);
                    s.y=s.y-ReelConfig.reel.deltaY;
                    s.big=true;

                    if (smb==7 && findScatterWinAmt(spinManager_.getWinResp().scatter,7)>0){
                        s.reel = i;
                        s.smb = a;
                        s.type="dollx3";
                        s.trigger = true;
                        s.smbNum=71;
                        spinManager_.addTriggerIcon(s);
                        waitForSubstitution_=1000;
                    }else if (smb==8 && findScatterWinAmt(spinManager_.getWinResp().scatter,8)>0){
                        s.reel = i;
                        s.smb = a;
                        s.type="monsterx2";
                        s.smbNum=81;
                        s.trigger = true;
                        spinManager_.addTriggerIcon(s);
                        waitForSubstitution_=1000;
                    }
                }else{
                    var s = spinManager_.getReels()[i].swapSmb(smb, a);
                    s.y=-3000;
                    s.notShow=true;

                }
            }
        }

    }

    function findScatterWinAmt(obj,id){
        var ret=0;
        if (obj!=null){
            for (var a in obj){
                if (obj[a]!=null && obj[a][id]!=null && obj[a][id].amt!=null){
                    ret=Number(obj[a][id].amt);
                    break;
                }
            }
        }
        return ret;
    }

    var iconSH8_=[];
    var iconSmall8_=[];
    function delayAnim_(smb,i,a){
        var icon=[];
        icon.type="anim";
        icon.loop=false;
        icon.killOnComplete=false;
        icon.callBack=null;

        if (smb==71) {
            icon.icon = "anim7";
            var newIcon = spinManager_.getReels()[i].replaceIcon2("upperIcon"+a, 7, icon);
            newIcon.oX=newIcon.x;
            newIcon.oY=newIcon.y+ReelConfig.icon.width/2-ReelConfig.icon.width;
            newIcon.y=newIcon.y+ReelConfig.icon.width/2-ReelConfig.icon.width;
            soundManager_.playSound("smb7Animate");
        }else if (smb==81) {
            var newIcon;
            icon.icon = "anim8";
            icon.callBack = anim8GoBack_;
            icon.param="this";
            newIcon = spinManager_.getReels()[i].replaceIcon2("upperIcon"+a, 8, icon);
            newIcon.oX=newIcon.x;
            newIcon.oY=newIcon.y+(ReelConfig.icon.width/2)-ReelConfig.icon.width;
            newIcon.x=newIcon.x-18;
            newIcon.y=newIcon.y+(ReelConfig.icon.width/2)+20-ReelConfig.icon.width;
            iconSmall8_.push(newIcon);
            soundManager_.playSound("smb8Animate");
        }else if (smb==7) {
            icon.icon = "anim7";
            var newIcon = spinManager_.getReels()[i].replaceIcon2("upperIcon"+a, 7, icon);
            newIcon.oX=newIcon.x;
            newIcon.oY=newIcon.y+ReelConfig.icon.width/2;
            newIcon.y=newIcon.y+ReelConfig.icon.width/2;
            soundManager_.playSound("smb7Animate");
        }else{
            icon.icon = "anim8";
            icon.callBack = anim8GoBack_;
            icon.param="this";
            var newIcon = spinManager_.getReels()[i].replaceIcon2("upperIcon"+a, 8, icon);
            newIcon.oX=newIcon.x;
            newIcon.oY=newIcon.y+(ReelConfig.icon.width/2);
            newIcon.x=newIcon.x-18;
            newIcon.y=newIcon.y+(ReelConfig.icon.width/2)+20;
            iconSmall8_.push(newIcon);
            soundManager_.playSound("smb8Animate");
        }
        glowTimeout_.push(setTimeout(placeGlow_,1500,newIcon,"glow1x2"));
    }

    function anim8GoBack_(par){
        var s =par;

        var drAnim=[];
        for (var b = 1;b <= s.animations._outputFrames.length; b++) {
            drAnim.push(b);
        }
        drAnim.reverse();
        s.animations.add("animBack",drAnim);
        s.animations.play("animBack", (spinning_)?48: 24, false, false);

    }

    function delaySubst_(smb,i,a){
        var icon=[];
        icon.type="anim";
        icon.loop=false;
        icon.killOnComplete=false;
        icon.callBack=null;

        if (smb==7) {
            var ic = spinManager_.getReels()[i].getSymbol(a);
            ic.visible = false;
            icon.icon = "animShelf7";
            var newIcon = spinManager_.getReels()[i].replaceIcon2("upperIcon"+(a+1), 7, icon);
            newIcon.oX=newIcon.x;
            newIcon.oY=newIcon.y- ReelConfig.icon.height;
            TweenMax.to(newIcon, 1, {y: newIcon.y - ReelConfig.icon.height,onComplete:placeGlow_,onCompleteParams:[newIcon,"glow1x3"]});
            soundManager_.playSound("smb7Expand");
        }else{
            a=a+1;
            icon.icon = "animShelf8";
            icon.callBack = shelf8continue_;
            icon.param=i;
            iconSH8_[i]= spinManager_.getReels()[i].replaceIcon2("upperIcon"+a, 8, icon);
            iconSH8_[i].x=iconSH8_[i].x-ReelConfig.icon.width/2-18;
            iconSH8_[i].y=iconSH8_[i].y-ReelConfig.icon.height/2+20;
            iconSH8_[i].reel=i;
            iconSH8_[i].icon=a;
            soundManager_.playSound("smb8Expand");
        }


    }

    function placeGlow_(newIcon,anim){
        if (spinning_)return;
        var glow = game_.add.sprite(newIcon.oX , newIcon.oY,anim);
        glow.anchor.set(.5, .5);
        glow.scale.x=1;
        glow.scale.y=1;
        glow.alpha=.5;
        displayManager_.getGroup("bgIconScatterAnim").add(glow);
        displayManager_.getGroup("bgIconScatterAnim").alpha=1;
        scatterBgGlow_.push(glow);
        if (scatterWinAmt_>0)scatterPayment_([scatterWinAmt_,hasScatterWin_,hasBonusWin_]);
    }

    function scatterPayment_(param){
        var amt=param[0];
        var s= param[1];
        var b=param[2];
        var amtD=amt;

        if(balanceManager_.getShowIncredits()==true) {
            amtD=  amtD   / balanceManager_.getCoinValue()*lineManager_.getLinesNumber();
        }
        if (s==true && b==false) {
            lineManager_.completeBonusValue(amtD, "Scatter Win");
        }else  if (s==true && b==true) {
            lineManager_.completeBonusValue(amtD, "Scatter+Bonus Win");
        }else  if (s==false && b==true) {
            lineManager_.completeBonusValue(amtD, "Bonus Win");
        }

        if(balanceManager_.getShowIncredits()==true) {
            amt=  amt/ balanceManager_.getCoinValue()*lineManager_.getLinesNumber();
        }
        lineManager_.showBonusCentralWinGreetings(amt);

        if (freeSpinsManager_.getIsInFs()==true){
            freeSpinsManager_.addToFsTotWon(amt);
        }
        scatterWinAmt_=0;
        hasBonusWin_=false;
    }

    function shelf8continue_(param) {
        reel=param[0].param;
        //big scatter 29,53,62,23,42,18
        var i= iconSH8_[reel].reel;
        var a = iconSH8_[reel].icon;

        var icon=[];
        icon.type="anim";
        icon.loop=false;
        icon.killOnComplete=false;
        icon.callBack=null;
        icon.icon = "animShelf8_1";
        iconSH8_[reel]= spinManager_.getReels()[i].replaceIcon2("upperIcon"+a, 8, icon);
        iconSH8_[reel].x=iconSH8_[reel].x-ReelConfig.icon.width/2-18;
        iconSH8_[reel].y=iconSH8_[reel].y-ReelConfig.icon.height/2+20;
        iconSH8_[reel].oX=iconSH8_[reel].x+18;
        iconSH8_[reel].oY=iconSH8_[reel].y-20;
        if (scatterWinAmt_>0)scatterPayment_([scatterWinAmt_,hasScatterWin_,hasBonusWin_]);
    }

    function playFsDrawers_(){
        if (spinManager_.getFsResp()!=null && spinManager_.getFsResp().drawers!=null) {
            drawerState = spinManager_.getFsResp().drawers;

            for (var a in drawerState) {
                if (drawerState[a].indexOf("goldcoin") >= 0 || drawerState[a].indexOf("silvercoin") >= 0) {
                    var dr = displayManager_.getGroup("fsDrawers")["drawer" + a].children[0];
                    dr.type = "scatter";
                    dr.metal ="gold";
                    if (drawerState[a].indexOf("silvercoin") >= 0)dr.metal ="silver";
                    dr.prize = ( drawerState[a].indexOf("goldcoin") >= 0)? drawerState[a].split("goldcoin")[1]:drawerState[a].split("silvercoin")[1];//coins
                    dr.smbNum = (a == 1 || a == 3) ? 12 : 11;
                    dr.reel=a;
                    scatterIcon_[a]=dr;
                    //animation "a" coins by code
                    var smb = new Phaser.Sprite(game_, dr.x, dr.y+14, "anim" + dr.smbNum + "-a");
                    smb.anchor.set(.5, .5);
                    smb.animations.add("anim", [0, 1, 2, 3, 4, 5, 6, 7,8,9,10,11,12]);
                    smb.scale.x = 1;
                    smb.scale.y = 1;
                    smb.reel=a;
                    scatterAnimation_[a]=smb;
                    displayManager_.getGroup("fsDrawers").add(smb);
                    smb.animations.play("anim", 15, false, false);
                    setTimeout(scatterAnim_, 800, dr, smb)
                    soundManager_.playSound("drawer");

                } else if (drawerState[a].indexOf("goldmult") >= 0 || drawerState[a].indexOf("silvermult") >= 0) {
                    var dr = displayManager_.getGroup("fsDrawers")["drawer" + a].children[0];
                    dr.type = "multiplier";
                    dr.prize = ( drawerState[a].indexOf("goldmult") >= 0)? drawerState[a].split("goldmult")[1]:drawerState[a].split("silvermult")[1];//mult
                    dr.smbNum = (a == 1 || a == 3) ? 12 : 11;
                    dr.reel=a;
                    scatterIcon_[a]=dr;
                    scatterAnimation_[a]=smb;
                    var smb = new Phaser.Sprite(game_, dr.x, dr.y+14, "anim" + dr.smbNum + "-a");
                    smb.anchor.set(.5, .5);
                    smb.animations.add("anim", [0, 1, 2, 3, 4, 5, 6, 7]);
                    smb.scale.x = 1;
                    smb.scale.y = 1;


                    displayManager_.getGroup("fsDrawers").add(smb);
                    smb.animations.play("anim", 15, false, true, fsPlayTriggeredSmbSecondPart_, dr);

                    soundManager_.playSound("drawer");
                } else if (drawerState[a].indexOf("empty") >= 0) {

                }


            }
        }
    }

    function playTriggeredSmb_(){
        var iconN=-1;
        var triggerSymbol_=spinManager_.getTriggerIcons();
        var add=false;

        for (var a in triggerSymbol_) {
            if (triggerSymbol_[a].played == undefined) {
                if (triggerSymbol_[a].type=="scatter") {
                    //animation "a" coins by code
                    iconN = triggerSymbol_[a].smbNum;
                    add = true;
                    var smb = new Phaser.Sprite(game_, triggerSymbol_[a].x, triggerSymbol_[a].y + 14, "anim" + iconN + "-a");
                    smb.anchor.set(.5, .5);
                    smb.animations.add("anim", [0, 1, 2, 3, 3, 3, 3, 3, 3, 4, 5, 6, 7, 7, 8, 9, 10, 11, 12]);
                    smb.scale.x = 1;
                    smb.scale.y = 1;
                    smb.reel=triggerSymbol_[a].reel;
                    triggerSymbol_[a].visible = false;

                    displayManager_.getGroup("scatter").add(smb);
                    smb.animations.play("anim", 18, false, false);
                    scatterAnimation_[a]=smb;
                    scatterIcon_[a]=triggerSymbol_[a];
                    setTimeout(scatterAnim_, 800, triggerSymbol_[a], smb)
                    triggerSymbol_[a].played = true;
                    soundManager_.playSound("drawer");
                }else if (triggerSymbol_[a].type=="dollx2"){
                    delaySubst_(triggerSymbol_[a].smbNum,triggerSymbol_[a].reel,triggerSymbol_[a].smb);
                }else if (triggerSymbol_[a].type=="dollx3"){
                    delayAnim_(triggerSymbol_[a].smbNum,triggerSymbol_[a].reel,triggerSymbol_[a].smb);
                }else if (triggerSymbol_[a].type=="monsterx1"){
                    delaySubst_(triggerSymbol_[a].smbNum,triggerSymbol_[a].reel,triggerSymbol_[a].smb);
                }else if (triggerSymbol_[a].type=="monsterx2"){
                    delayAnim_(triggerSymbol_[a].smbNum,triggerSymbol_[a].reel,triggerSymbol_[a].smb);
                }else{
                    triggerSymbol_[a].played=true;
                    iconN = triggerSymbol_[a].smbNum;
                    add = true;
                    var smb = new Phaser.Sprite(game_, triggerSymbol_[a].x, triggerSymbol_[a].y+14, "anim" + iconN +"-a");
                    smb.anchor.set(.5, .5);
                    smb.animations.add("anim", [0, 1, 2, 3,3,3,3,3,3,4,4, 4, 5, 6, 7]);
                    smb.scale.x = 1;
                    smb.scale.y = 1;
                    triggerSymbol_[a].visible = false;

                    displayManager_.getGroup("scatter").add(smb);
                    smb.animations.play("anim", 18, false, true,playTriggeredSmbSecondPart_,triggerSymbol_[a]);

                    soundManager_.playSound("drawer");

                }
            }
        }
    }

    function fsPlayTriggeredSmbSecondPart_(smbTriggered){
        if (smbTriggered.type=="respin"){

        }else if (smbTriggered.type=="scatter"){

        }else if (smbTriggered.type=="multiplier") {
            multiplier_=true;
            //animation "a" coins by code
            iconN = smbTriggered.smbNum;
            var smb = new Phaser.Sprite(game_, smbTriggered.x, smbTriggered.y-38, "anim" + iconN + "-b");
            smb.anchor.set(.5, .5);
            smb.animations.add("anim");
            smb.scale.x = 1;
            smb.scale.y = 1;

            displayManager_.getGroup("fsDrawers").add(smb);
            smb.animations.play("anim", 24, false, false);
            setTimeout(multAnim_,800,smbTriggered,smb)
            soundManager_.playSound("multReveal");
        }else if (smbTriggered.type=="none") {//empty drawer

        }

        //
        // smbB = new Phaser.Sprite(game_, smbTriggered.x, smbTriggered.y, "bluFlame" );
        // smbB.anchor.set(.5, .5);
        // smbB.animations.add("anim");
        // smbB.scale.x = 1.4;
        // smbB.scale.y = 1.4;
        // smbB.animations.play("anim", 24, false, true);
        // displayManager_.getGroup("bgIconAnim").alpha=1;
        // displayManager_.getGroup("bgIconAnim").add(smbB);

    }


    function playTriggeredSmbSecondPart_(smbTriggered){
        if (smbTriggered.type=="respin"){
            respin_=1;
            //animation "b"
            iconN = smbTriggered.smbNum;
            add = true;
            var smb = new Phaser.Sprite(game_, smbTriggered.x, smbTriggered.y-38, "anim" + iconN + "-b");
            smb.anchor.set(.5, .5);
            smb.animations.add("anim");
            smb.scale.x = 1;
            smb.scale.y = 1;
            smbTriggered.visible = false;

            displayManager_.getGroup("scatter").add(smb);
            smb.animations.play("anim", 20, false, false);
            setTimeout(respinAnim_,800,[smbTriggered,smb])

            soundManager_.playSound("respinReveal");
        }else if (smbTriggered.type=="freespin"){
            //animation "b"
            iconN = smbTriggered.smbNum;
            add = true;
            var smb = new Phaser.Sprite(game_, smbTriggered.x, smbTriggered.y-38, "anim" + iconN + "-d");
            smb.anchor.set(.5, .5);
            smb.animations.add("anim");
            smb.scale.x = 1;
            smb.scale.y = 1;
            smbTriggered.visible = false;

            displayManager_.getGroup("scatter").add(smb);
            smb.animations.play("anim", 20, false, false);
            setTimeout(noneAnimFs_,1800,[smbTriggered,smb]);
            smbTriggered.played=true;
            soundManager_.playSound("fsReveal");
        }else if (smbTriggered.type=="scatter"){

        }else if (smbTriggered.type=="multiplier") {
            multiplier_=true;
            //animation "a" coins by code
            iconN = smbTriggered.smbNum;
            add = true;
            var smb = new Phaser.Sprite(game_, smbTriggered.x, smbTriggered.y-38, "anim" + iconN + "-b");
            smb.anchor.set(.5, .5);
            smb.animations.add("anim");
            smb.scale.x = 1;
            smb.scale.y = 1;
            smbTriggered.visible = false;

            displayManager_.getGroup("scatter").add(smb);
            smb.animations.play("anim", 20, false, false);
            setTimeout(multAnim_,800,smbTriggered,smb);
            smbTriggered.played=true;
            soundManager_.playSound("multReveal");
        }else if (smbTriggered.type=="none") {//empty drawer
            iconN = smbTriggered.smbNum;
            add = true;
            var smb = new Phaser.Sprite(game_, smbTriggered.x, smbTriggered.y-38, "anim" + iconN + "-c");
            smb.anchor.set(.5, .5);
            smb.animations.add("anim");
            smb.scale.x = 1;
            smb.scale.y = 1;
            smbTriggered.visible = false;

            displayManager_.getGroup("scatter").add(smb);
            smb.animations.play("anim", 20, false, false);
            setTimeout(noneAnim_,800,[smbTriggered,smb])
            smbTriggered.played=true;
            soundManager_.playSound("emptyReveal");
        }else{
            //animation "c" when nothing happens
        }

        //
        // smbB = new Phaser.Sprite(game_, smbTriggered.x, smbTriggered.y, "bluFlame" );
        // smbB.anchor.set(.5, .5);
        // smbB.animations.add("anim");
        // smbB.scale.x = 1.4;
        // smbB.scale.y = 1.4;
        // smbB.animations.play("anim", 24, false, true);
        // displayManager_.getGroup("bgIconAnim").alpha=1;
        // displayManager_.getGroup("bgIconAnim").add(smbB);

    }

    function scatterAnim_(obj,smb){
        if (spinning_ && freeSpinsManager_.getIsInFs()==false){
            obj.visible = true;
            return;
        }
        funtainEventManager_[smb.reel].clearEvt();
        var time =obj.prize*5;
        var numObj= Math.ceil(obj.prize*1);
        var interval=time/numObj;

        funtainEventManager_[smb.reel].addEvtForce(startCoinsSound_,0,[obj,smb.reel]);
        for (a = 0; a <= numObj; a++) {
            funtainEventManager_[smb.reel].addEvtForce(startNewSmallObject_,interval,[obj]);
        }

        funtainEventManager_[smb.reel].addEvtForce(resetScatterAnim_,1000,[obj,smb,smb.reel]);
        funtainEventManager_[smb.reel].triggerEvt();
    }

    function resetScatterAnim_(params){

        if (spinning_ && freeSpinsManager_.getIsInFs()==false) {
            for (var a in scatterAnimation_) {
                scatterAnimation_[a].visible = false;
                displayManager_.getGroup("scatter").remove(scatterAnimation_[a]);
                scatterIcon_[a].visible = true;
                if (scatterIcon_[a].metal=="silver") {
                    soundManager_.stopSound("silverCoins_"+scatterIcon_[a].reel);
                }else{
                    soundManager_.stopSound("goldCoins_"+scatterIcon_[a].reel);
                }
            }


        }else if (spinning_){
            for (var a in scatterAnimation_) {
                var obj = scatterIcon_[a];
                var s = scatterAnimation_[a];
                var drAnim = [];

                if (obj.metal == "silver") {
                    soundManager_.stopSound("silverCoins_" + a);
                } else {
                    soundManager_.stopSound("goldCoins_" + a);
                }
                for (var b = 1; b <= s.animations._outputFrames.length; b++) {
                    drAnim.push(b);
                }
                drAnim.reverse();
                s.animations.add("animBack", drAnim);
                s.animations.play("animBack", 48, false, true, updateIcon_, obj);

            }
            soundManager_.playSound("drawerRollBack");
            //also update balance
            if (scatterWinAmt_ > 0) scatterPayment_([scatterWinAmt_, hasScatterWin_, hasBonusWin_]);

        }else {
            var obj = params[0];
            var s = params[1];
            var drAnim = [];
            var reel=params[2];

            if (obj.metal == "silver") {
                soundManager_.stopSound("silverCoins_" + reel);
            } else {
                soundManager_.stopSound("goldCoins_" + reel);
            }
            for (var b = 1; b <= s.animations._outputFrames.length; b++) {
                drAnim.push(b);
            }
            drAnim.reverse();
            s.animations.add("animBack", drAnim);
            s.animations.play("animBack", 24, false, true, updateIcon_, obj);
            soundManager_.playSound("drawerRollBack");
            //also update balance
            if (scatterWinAmt_ > 0) scatterPayment_([scatterWinAmt_, hasScatterWin_, hasBonusWin_]);        }



    }

    function startNewSmallObject_(params){
        if (spinning_ && freeSpinsManager_.getIsInFs()==false){
            return;
        }
        var par=params[0];
        if (par.metal=="silver") {
            if (Util.getRandomInt(1, 100) > 50)
                var ob = game_.add.sprite(par.x+Util.getRandomInt(-15,15), par.y -54, "part-2");
            else
                var ob = game_.add.sprite(par.x+Util.getRandomInt(-15,15), par.y -54, "f-part-2");
        }else{
            if (Util.getRandomInt(1, 100) > 50)
                var ob = game_.add.sprite(par.x+Util.getRandomInt(-15,15), par.y -54, "part-3");
            else
                var ob = game_.add.sprite(par.x+Util.getRandomInt(-15,15), par.y -54, "f-part-3");
        }
        ob.anchor.set(.5, .5);
        ob.angle=Util.getRandomInt(1,180);
        ob.animations.add("anim");
        ob.alpha = 0.35;
        ob.xVar=Util.getRandomInt(par.x-200, par.x+200);
        ob.yVar=Util.getRandomInt(par.y-50, par.y-200);
        TweenMax.to(ob, .2 + Util.getRandomInt(20, 50) / 100, {
            alpha: .8,
            rotation:Util.getRandomInt(0, 90),
            y: ob.yVar,
            x: ob.xVar, onComplete: startFallsDown_,  onCompleteParams: [ob],ease:Sine.easeOut
        });
        ob.animations.play("anim", Util.getRandomInt(24, 34), true, false, null, null);//todo parametric loop
        ob.scale.x = Util.getRandomInt(60,50)/100;
        ob.scale.y = ob.scale.x;
        objThrown_.push(ob);
        if (freeSpinsManager_.getIsInFs()==false) {
            displayManager_.getGroup("scatterCoins").add(ob);
        }else {
            displayManager_.getGroup("fsDrawers").add(ob);
        }

    }

    function startFallsDown_(ob){
        //coins falls down in the first tween direction
        ob.xVar=Util.getRandomInt(ob.xVar-100,ob.xVar+100);
        TweenMax.to(ob, Util.getRandomInt(80,90)/100 , {
            y: ob.y+600,
            rotation: ob.angle+35,
            x: ob.xVar, onComplete: endFallsDown_,  onCompleteParams: [ob],ease:Sine.easeIn
        });

    }

    function endFallsDown_(ob){
        ob.destroy();
    }


    function startCoinsSound_(param){
        var obj=param[0];
        var reel= param[1];

        if (obj.metal=="silver") {
            soundManager_.playSound("silverCoins_"+reel,20);
        }else{
            soundManager_.playSound("goldCoins_"+reel,20);
        }
    }

    function noneAnim_(params){
        var obj=params[0];
        var s=params[1];
        var drAnim=[];
        if (spinning_) {
            s.visible=false;
            s=null;
            obj.visible = true;
            return;
        }


        if (spinning_){
            s.visible=false;
            s=null;
            obj.visible = true;
            return;
        }
        for (var b = 1;b <= s.animations._outputFrames.length; b++) {
            drAnim.push(b);
        }
        drAnim.reverse();
        s.animations.add("animBack",drAnim);
        s.animations.play("animBack", 24, false, true,updateIcon_,obj);
        soundManager_.playSound("drawerRollBack");
    }

    function noneAnimFs_(params){
        var obj=params[0];
        var s=params[1];
        var drAnim=[];

        for (var b = 1;b <= s.animations._outputFrames.length; b++) {
            drAnim.push(b);
        }
        drAnim.reverse();
        s.animations.add("animBack",drAnim);
        s.animations.play("animBack", 24, false, true,updateIcon_,obj);
        soundManager_.playSound("drawerRollBack");
    }

    function multAnim_(obj,oo){
        if (!spinning_) {
            multiMc_ = new Phaser.Sprite(game_, obj.x, obj.y - 30, "x" + obj.prize);
            multiMc_.anchor.set(.5, .5);
            multiMc_.animations.add("anim");
            multiMc_.scale.x = .5;
            multiMc_.scale.y = .5;
            multiMc_.alpha = .2;
            displayManager_.getGroup("scatter").add(multiMc_);
            multiMc_.animations.play("anim", 24, false, false);

            if (freeSpinsManager_.getIsInFs()) {
                var x = 50;
                var y = 204;
            } else {
                var x = 144;
                var y = 204;
            }

            TweenMax.to(multiMc_, 1, {
                bezier: {
                    type: "soft",
                    values: [{x: multiMc_.x, y: 100}, {x: 200, y: 150}, {x: x, y: y}]
                }, ease: Sine.easeInOut, onComplete: endMultiAnimation_, onCompleteParams: [obj, oo]
            });
            TweenMax.to(multiMc_.scale, 1, {x: 1, y: 1});
            TweenMax.to(multiMc_, .2, {alpha: 1});
        }else{
            multiMc_ = new Phaser.Sprite(game_, obj.x, obj.y - 30, "x" + obj.prize);
            multiMc_.anchor.set(.5, .5);
            multiMc_.animations.add("anim");
            multiMc_.scale.x = .5;
            multiMc_.scale.y = .5;
            multiMc_.alpha = .2;
            displayManager_.getGroup("scatter").add(multiMc_);
            multiMc_.animations.play("anim", 60, false, false);

            if (freeSpinsManager_.getIsInFs()) {
                var x = 50;
                var y = 204;
            } else {
                var x = 144;
                var y = 204;
            }

            TweenMax.to(multiMc_, .2, {x: x, y: y, onComplete: endMultiAnimation_, onCompleteParams: [obj, oo]});
            TweenMax.to(multiMc_.scale, .2, {x: 1, y: 1});
            TweenMax.to(multiMc_, .2, {alpha: 1});
        }
    }

    function endMultiAnimation_(obj,s){
        if (spinning_){
            s.visible=false;
            s=null;
            obj.visible = true;
            return;
        }

        var drAnim=[];

        for (var b = 1;b <= s.animations._outputFrames.length; b++) {
            drAnim.push(b);
        }
        drAnim.reverse();
        s.animations.add("animBack",drAnim);
        s.animations.play("animBack", (gameClass_.getCompulsivePlayer())?48:24, false, true,updateIcon_,obj);
        soundManager_.playSound("drawerRollBack");
    }

    function respinAnim_(params){
        if (!spinning_) {
            var obj = params[0];
            var oo = params[1];
            respinMc_ = new Phaser.Sprite(game_, obj.x, obj.y - 30, "respin");
            respinMc_.anchor.set(.5, .5);
            respinMc_.animations.add("anim");
            respinMc_.scale.x = .5;
            respinMc_.scale.y = .5;
            respinMc_.alpha = .0;
            displayManager_.getGroup("scatter").add(respinMc_);
            respinMc_.animations.play("anim", 24, false, false);

            TweenMax.to(respinMc_, 1, {
                bezier: {
                    type: "soft",
                    values: [{x: respinMc_.x, y: 100}, {x: 200, y: 150}, {x: 144, y: 204}]
                }, ease: Sine.easeInOut, onComplete: updateRespinIcon_, onCompleteParams: [obj, oo]
            });
            TweenMax.to(respinMc_.scale, 1, {x: 1, y: 1});
            TweenMax.to(respinMc_, .2, {alpha: 1});
        }else{
            respinMc_ = new Phaser.Sprite(game_, obj.x, obj.y - 30, "respin");
            respinMc_.anchor.set(.5, .5);
            respinMc_.animations.add("anim");
            respinMc_.scale.x = .5;
            respinMc_.scale.y = .5;
            respinMc_.alpha = .0;
            displayManager_.getGroup("scatter").add(respinMc_);
            respinMc_.animations.play("anim", 64, false, false);
            TweenMax.to(respinMc_, .2, {x: 144, y: 204, onComplete: updateRespinIcon_, onCompleteParams: [obj, oo]});
            TweenMax.to(respinMc_.scale, .2, {x: 1, y: 1});
            TweenMax.to(respinMc_, .2, {alpha: 1});

        }
    }

    function updateRespinIcon_(obj,s){
        if (!spinning_) {
            var drAnim = [];
            for (var b = 1; b <= s.animations._outputFrames.length; b++) {
                drAnim.push(b);
            }
            drAnim.reverse();
            s.animations.add("animBack", drAnim);
            s.animations.play("animBack", 24, false, true, substituteWithWild_, obj);
            soundManager_.playSound("drawerRollBack");
        }else{
            s.visible=false;
            s=null;
            substituteWithWild_(obj);
        }
    }

    function substituteWithWild_(obj){
        var a = obj.smb;
        obj.visible=true;


        for ( var a in displayManager_.getGroup("stickyWild").children){
            displayManager_.getGroup("stickyWild").remove(displayManager_.getGroup("stickyWild").children[0]);
        }

        var reels=spinManager_.getSpinReelResp();
        //looking for all the sticky wilds around the reels
        for (var i = 0; i < ReelConfig.numReels; i++) {
            for (var a = 0; a < ReelConfig.numIcons; a++) {
                if (reels.reel[i].smb[a].stick=="yes"){
                    var ic=spinManager_.getReels()[i].getSymbol(a);
                    var wild= new Phaser.Sprite(game_, ic.x, ic.y, "icon9");
                    wild.anchor.set(.5, .5);
                    wild.scale.x = 1;
                    wild.scale.y = 1;
                    displayManager_.getGroup("stickyWild").add(wild);
                }

            }
        }

        var transition= new Phaser.Sprite(game_, obj.x, obj.y, "respin-1");
        transition.anchor.set(.5, .5);
        transition.animations.add("anim");
        transition.scale.x = 1;
        transition.scale.y = 1;
        displayManager_.getGroup("stickyWild").add(transition);
        transition.animations.play("anim", (spinning_)?60:24, false, true);
    }

    function updateIcon_(obj){
        obj.visible=true;
    }

    function clearRespin_(){
        if (respinMc_!=null) {
            respinMc_.visible = false;
            displayManager_.getGroup("scatter").remove(respinMc_);
        }
        respinMc_=null;
        respin_=0;
        for ( var a in displayManager_.getGroup("stickyWild").children){
            displayManager_.getGroup("stickyWild").remove(displayManager_.getGroup("stickyWild").children[0]);
        }
    }

    function clearMultiplier_(){
        if (multiMc_!=null) {
            multiMc_.visible = false;
            displayManager_.getGroup("scatter").remove(multiMc_);
        }
        multiMc_=null;
        multiplier_=false;
        for ( var a in displayManager_.getGroup("stickyWild").children){
            displayManager_.getGroup("stickyWild").remove(displayManager_.getGroup("stickyWild").children[0]);
        }
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

    function resetEyes_(){
        //displayManager_.getGroup("sideObjects")["bg0"].children[0].alpha=0;
        if (spinManager_.getSpinResp().freeSpin!=null && spinManager_.getSpinResp().freeSpin.won=="8"){
            TweenMax.to(displayManager_.getGroup("sideObjects")["bg0"].children[0],.5,{alpha:1});
        }else{
            TweenMax.to(displayManager_.getGroup("sideObjects")["bg0"].children[0],.4,{alpha:0});
        }
    }

    function setDelRepeter_(obj){
        var delayRepeater=obj.delayRepeater;
        var slowDownReel=[];
        var iconSound=[];
        var reelSound=[];
        var iconEffect=[];
        var found=0;
        var inc=0;
        var min=3;
        var increment=8;
        var firstOccurs=10;


        for (var i = 0; i <= ReelConfig.numReels; i++) {
            slowDownReel[i]=false;
            iconSound[i]=false;
            reelSound[i]=false;
            iconEffect[i]="";
        }



        /*configurations:
             0 1 2 3 4
            scatter
           0 x - - - -
           1 0 x - - -
           2 0 0 x - -
           3 0 0 0 x -

        0:
            slowDownReel[1]=true;
            slowDownReel[2]=true;
            slowDownReel[3]=true;
            slowDownReel[4]=true;

            reelSound[1]=true;
            reelSound[2]=true;
            reelSound[3]=true;
            reelSound[4]=true;

            delayRepeater[1]=10;
            delayRepeater[2]=15;
            delayRepeater[3]=20;
            delayRepeater[4]=25;

        1:

            slowDownReel[2]=true;
            slowDownReel[3]=true;
            slowDownReel[4]=true;
            reelSound[2]=true;
            reelSound[3]=true;
            reelSound[4]=true;
            delayRepeater[2]=10;
            delayRepeater[3]=15;
            delayRepeater[4]=20;


        2:

            slowDownReel[3]=true;
            slowDownReel[4]=true;
            reelSound[3]=true;
            reelSound[4]=true;
            delayRepeater[3]=10;
            delayRepeater[4]=15;

        3:

            slowDownReel[4]=true;
            reelSound[4]=true;
            delayRepeater[4]=10;







            drawers
           0 0 x 0 - 0

        0:
            slowDownReel[3]=true;
            reelSound[3]=true;

            delayRepeater[3]=25;

         */






        //looking for feature symbols to slow down the reels creating some anticipation
        for (var i = 0; i < ReelConfig.numReels; i++) {
            var reelDone=false;
            for (var a = 0; a < 4; a++) {
                if (spinManager_.getSpinReelResp().reel[i].smb[a].smb == 11 ) {

                    found++;
                    inc=inc+2;
                    min=delayRepeater[i];
                    if (i==4 && found<3){//play sound just when is possible to trigger

                    }
                    if (i==3 && found<2){//play sound just when is possible to trigger
                        found=0;
                    }else if (i==3 ){
                        iconSound[i]=true;
                        iconEffect[i]="drawerLand_1";
                        firstOccurs=Math.min(firstOccurs,i);
                    }
                    if  (i==1 && found<0){//play sound just when is possible to trigger

                    }else if (i==1 ){
                        TweenMax.to(displayManager_.getGroup("sideObjects")["bg0"].children[0],1,{delay:1.5,alpha:1,yoyo:true,repeat:3  ,onComplete:resetEyes_});
                        iconSound[i]=true;
                        iconEffect[i]="drawerLand_0";
                        firstOccurs=Math.min(firstOccurs,i);
                    }
                }
            }
        }


        if (found>0) {
            slowDownReel[2]=true;
            reelSound[2]=true;
            delayRepeater[3]=19;
        }else{
            for (var i = 0; i <= ReelConfig.numReels; i++) {
                slowDownReel[i]=false;
            }
            firstOccurs=10;
            //looking for feature symbols to slow down the reels creating some anticipation
            for (var i = 0; i < ReelConfig.numReels; i++) {
                var reelDone=false;
                for (var a = 0; a < 4; a++) {
                    if (spinManager_.getSpinReelResp().reel[i].smb[a].smb == 7 && spinManager_.getSpinReelResp().reel[i].smb[a].special!="nosound" ) {

                        found++;
                        inc=inc+3;
                        min=delayRepeater[i];
                        if (i==4 && found<3){//play sound just when is possible to trigger

                        }else if (i==4 ){
                            iconSound[i]=true;
                            iconEffect[i]="dollLand_3";
                            firstOccurs=Math.min(firstOccurs,i);
                        }
                        if (i==3 && found<2){//play sound just when is possible to trigger
                        }else if (i==3 ){
                            iconSound[i]=true;
                            iconEffect[i]="dollLand_2";
                            firstOccurs=Math.min(firstOccurs,i);
                        }
                        if  (i==2 && found<1){//play sound just when is possible to trigger

                        }else if (i==2 ){
                            iconSound[i]=true;
                            iconEffect[i]="dollLand_1";
                            firstOccurs=Math.min(firstOccurs,i);
                        }
                        if  (i==1 && found<0){//play sound just when is possible to trigger

                        }else if (i==1 ){
                            iconSound[i]=true;
                            iconEffect[i]="dollLand_0";
                            firstOccurs=Math.min(firstOccurs,i);
                        }
                        if  (i==0 && found<0){//play sound just when is possible to trigger

                        }else if (i==0 ){
                            iconSound[i]=true;
                            iconEffect[i]="dollLand_0";
                            firstOccurs=Math.min(firstOccurs,i);
                        }
                    }
                }
            }

        }


        if (found>=3) {
            switch (firstOccurs){
                case 0:
                    slowDownReel[2]=true;
                    slowDownReel[3]=true;
                    slowDownReel[4]=true;

                    reelSound[1]=true;
                    reelSound[2]=true;
                    reelSound[3]=true;
                    reelSound[4]=true;

                    delayRepeater[2]=10;
                    delayRepeater[3]=15;
                    delayRepeater[4]=20;
                    break;
                case 1:
                    slowDownReel[2]=true;
                    slowDownReel[3]=true;
                    slowDownReel[4]=true;
                    reelSound[1]=true;
                    reelSound[2]=true;
                    reelSound[3]=true;
                    reelSound[4]=true;
                    delayRepeater[2]=10;
                    delayRepeater[3]=15;
                    delayRepeater[4]=20;
                    break;
                case 2:
                    slowDownReel[3]=true;
                    slowDownReel[4]=true;
                    reelSound[2]=true;
                    reelSound[3]=true;
                    reelSound[4]=true;
                    delayRepeater[3]=10;
                    delayRepeater[4]=15;
                    break;
                case 3:
                    slowDownReel[4]=true;
                    reelSound[3]=true;
                    reelSound[4]=true;
                    delayRepeater[4]=10;
                    break;

            }
        }else{
            for (var i = 0; i <= ReelConfig.numReels; i++) {
                slowDownReel[i]=false;
            }

            firstOccurs=10;
            found=0;
            //looking for feature symbols to slow down the reels creating some anticipation
            for (var i = 0; i < ReelConfig.numReels; i++) {
                var reelDone=false;
                for (var a = 0; a < 4; a++) {
                    if (spinManager_.getSpinReelResp().reel[i].smb[a].smb == 8 && spinManager_.getSpinReelResp().reel[i].smb[a].special!="nosound"  ) {

                        found++;
                        inc=inc+3;
                        min=delayRepeater[i];
                        if (i==4 && found<3){//play sound just when is possible to trigger

                        }else if (i==4 ){
                            iconSound[i]=true;
                            iconEffect[i]="monsterLand_3";
                            firstOccurs=Math.min(firstOccurs,i);
                        }
                        if (i==3 && found<2){//play sound just when is possible to trigger
                        }else if (i==3 ){
                            iconSound[i]=true;
                            iconEffect[i]="monsterLand_2";
                            firstOccurs=Math.min(firstOccurs,i);

                        }
                        if  (i==2 && found<1){//play sound just when is possible to trigger

                        }else if (i==2 ){
                            iconSound[i]=true;
                            iconEffect[i]="monsterLand_1";
                            firstOccurs=Math.min(firstOccurs,i);

                        }
                        if  (i==1 && found<0){//play sound just when is possible to trigger

                        }else if (i==1 ){
                            iconSound[i]=true;
                            iconEffect[i]="monsterLand_0";
                            firstOccurs=Math.min(firstOccurs,i);

                        }
                        if  (i==0 && found<0){//play sound just when is possible to trigger

                        }else if (i==0 ){
                            iconSound[i]=true;
                            iconEffect[i]="monsterLand_0";
                            firstOccurs=Math.min(firstOccurs,i);

                        }
                    }

                }
            }
            if (found>=4){
                switch (firstOccurs){
                    case 0:
                        slowDownReel[2]=true;
                        slowDownReel[3]=true;
                        slowDownReel[4]=true;

                        reelSound[1]=true;
                        reelSound[2]=true;
                        reelSound[3]=true;
                        reelSound[4]=true;

                        delayRepeater[2]=10;
                        delayRepeater[3]=15;
                        delayRepeater[4]=20;
                        break;
                    case 1:
                        slowDownReel[2]=true;
                        slowDownReel[3]=true;
                        slowDownReel[4]=true;
                        reelSound[1]=true;
                        reelSound[2]=true;
                        reelSound[3]=true;
                        reelSound[4]=true;
                        delayRepeater[2]=10;
                        delayRepeater[3]=15;
                        delayRepeater[4]=20;
                        break;
                    case 2:
                        slowDownReel[3]=true;
                        slowDownReel[4]=true;
                        reelSound[2]=true;
                        reelSound[3]=true;
                        reelSound[4]=true;
                        delayRepeater[3]=10;
                        delayRepeater[4]=15;
                        break;
                    case 3:
                        slowDownReel[4]=true;
                        reelSound[3]=true;
                        reelSound[4]=true;
                        delayRepeater[4]=10;
                        break;

                }

            }
        }

        obj.slowDownReel=slowDownReel;
        obj.iconSound=iconSound;
        obj.delayRepeater=delayRepeater;
        obj.reelSound=reelSound;
        obj.iconEffect=iconEffect;

        return obj;
    }

    function decreaseVolumeBG_(fadeT_O_){
        fadeBg_=true;
        clearTimeout(iFadeT_O_);
        if (freeSpinsManager_.getIsInFs()==false) {
            soundManager_.getBGSound("bgSlot").fadeOutBgSoundExternal(500, 0.4);
            if (fadeT_O_!=null){
                fadeBg_=false;
                iFadeT_O_=setTimeout(soundManager_.getBGSound("bgSlot").increaseVolExternal,fadeT_O_,1500);
            }
        }else{
            soundManager_.getBGSound("bgFs").fadeOutBgSoundExternal(1000,0.5);
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
        initFsShape_();
    }

    function fsOn_(){
        displayManager_.getGroup("bg").visible=false;
        displayManager_.getGroup("mask").visible=false;
        displayManager_.getGroup("frame").visible=false;
        displayManager_.getGroup("sideObjects").visible=false;
        displayManager_.getGroup("bgFS").visible=true;
        displayManager_.getGroup("maskFS").visible=true;
        displayManager_.getGroup("frameFS").visible=true;
        displayManager_.getGroup("freeSpins").visible=true;
        displayManager_.getGroup("logo").visible=false;
    }

    function fsOff_(){
        for (var i = 0; i < 11; i++) {
            displayManager_.getGroup("sideObjects")["s" + i].children[0].visible = true;
        }
        displayManager_.getGroup("fsDrawers").visible=false;
        displayManager_.getGroup("bg").visible=true;
        displayManager_.getGroup("mask").visible=true;
        displayManager_.getGroup("frame").visible=true;
        displayManager_.getGroup("sideObjects").visible=true;
        displayManager_.getGroup("bgFS").visible=false;
        displayManager_.getGroup("maskFS").visible=false;
        displayManager_.getGroup("frameFS").visible=false;
        displayManager_.getGroup("freeSpins").visible=false;
        displayManager_.getGroup("logo").visible=true;
        if (respin_>0 )clearRespin_();
        if (multiplier_)clearMultiplier_();
    }

    function fsHideTotPanel_(){
        TweenMax.to(displayManager_.getGroup("fadeFS").bg.children[0],.8,{alpha:1,onComplete:resetFsShape_});
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
            waitForSubstitution_=1000;
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
        waitForSpin:function(){
            true;
        },
        isReelWilded:function(num){
            return wildManager_.isReelWilded(num);
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
        getIsRespin:function(){
            return (respin_==1)?true:false;
        },
        isJustSilverCoins:function (){
            return silverCoins_;
        },
        completedScatterAndBonus:function (){
            return (scatterWinAmt_>0)?false:true;
        },
        frStop:function(){
            buttonManager_.applyRestore();
        }
    }

    return me;
}

