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

    var animateScatter_=false;

    //sticky wilds
    var popUpWildManager_;
    var popUpWildConf={};
    popUpWildConf.wildNum=[9,10];
    popUpWildConf.wildType="WaikikiPopUpWild";
    popUpWildConf.wildDelay=100;
    popUpWildConf.animDelayAfterWild=500;
    var popUpWildSmb_;
    var popUpWilSimbsNum_=0;

    //instant bonus
    var scatterBonus_=[];
    var choose_=false;
    var gotTokens_=false;
    var tokenIndex_=[9,14,19,24,29,34,35];
    var tokenPrices_=[0,50,125,250,500,1250,5000];
    var tokenI_=0;
    var tokenTXT_=null;
    var tokenAmtTXT_=null;
    var tokenLabel_=null;

    var centralSmb_;
    var hasBeenStopped_=false;
    var fadeBg_=false;
    var iFadeT_O_=0;
    var lineCompletion_=false;

    function create_() {
        //display manager levels

        displayManager_.getGroup("backgroundFS").y=500;

        guiBottomBar_.setBetControlInitialBet(ReelConfig.bet);//todo change this, it's just to apply the default bet
        logger("nh call8")
    }

    function initGame_(){
        displayManager_.getGroup("bg").visible=true;
        displayManager_.getGroup("mask").visible=true;
        displayManager_.getGroup("frame").visible=true;
        displayManager_.getGroup("status").visible=true;
        displayManager_.getGroup("logo").visible=true;
        displayManager_.getGroup("background").visible=true;

        //sticky wild
        popUpWildManager_= new WildManager(game_,gameClass_,popUpWildConf);
        if (popUpWildSmb_==undefined) {
            popUpWildSmb_ = [];
            for (i = 0; i < 5; i++) {
                popUpWildSmb_[i] = [];
                for (a = 0; a < 3; a++) {
                    popUpWildSmb_[i][a] = {};
                }
            }
        }
        gcmCalls_("STAKE",balanceManager_.getCoinValue());
        if (communicationManager_.getResumeStatus().status.hand=="freespins") {
            if (communicationManager_.getResumeStatus().status !=null && communicationManager_.getResumeStatus().status.stake>0){
                changeBet_(communicationManager_.getResumeStatus().status.stake/100, true);
            }
            //f1x2.GcmError(-3);
            tokenEnd_();
            freeRoundsManager_.frChecker();
            freeSpinsManager_.parse(communicationManager_.getResumeStatus());
            spinManager_.createReels();
            popUpWildManager_.resumeWildReel();
            buttonManager_.applyHide();
            messageBox_.showMessage("game", "\n"+ Translate.do("You have unused Free Spins"), "\n"+Translate.do("They will be automatically started"), startResumeFs_);
        }else{
            spinManager_.createReels();
            buttonManager_.applyRestore();
            buttonManager_.applyState("NH");
            freeRoundsManager_.frChecker();
            //idleCycleManager_.startIdleCycle();

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
        hasBeenStopped_=true;
        soundManager_.playSound("click");
        buttonManager_.applyState("AFTERSPIN");
        spinManager_.stopSpin();
    }

    function doAp_() {
        framework.checkAutoPlay();//moved logic to autoplayBox
    }

    function getStickyWildNumber_(reels) {
        popUpWilSimbsNum_ = 0;
        var order=[];
        order[0]=[];
        order[2]=[];
        order[1]=[];
        if (popUpWildManager_ != null) {
            for (var i = 0; i < reels.length; i++) {
                for (var a = 0; a < 3; a++) {
                    if (popUpWildSmb_[i][a].special == undefined) popUpWildSmb_[i][a].special = [];
                    if (popUpWildManager_.getTriggerIcon().indexOf(spinManager_.getSpinReelResp().reel[i].smb[a].smb) >= 0 ) {
                        var obj={};
                        obj.pos=i +"-"+a;
                        popUpWildSmb_[i][a].special.push("done");
                        popUpWildSmb_[i][a].simbolReference = (reels[i].getSymbol(a));
                        popUpWildSmb_[i][a].simbolReference.smbToRemove = a;
                        popUpWildSmb_[i][a].simbolReference.indexToRemove = a;
                        popUpWildSmb_[i][a].simbolReference.smb=spinManager_.getSpinReelResp().reel[i].smb[a].smb;
                        popUpWildSmb_[i][a].simbolReference.prevSmb=spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb;
                        if (spinManager_.getSpinReelResp().reel[i].smb[a].special!="n/a") {
                            obj.order = Number(spinManager_.getSpinReelResp().reel[i].smb[a].special.split(",")[1]);
                            var num = Number(spinManager_.getSpinReelResp().reel[i].smb[a].special.split(",")[0]);
                        }else{
                            num=0;
                        }
                        popUpWilSimbsNum_++;
                        waitForSubstitution_=true;
                        order[num].push(obj);
                    }
                }
            }
        }
        for (var a = 0; a < 3; a++) {
            order[a].sort(function (a, b) {
                return a.order - b.order;
            })

        }
        popUpWildSmb_.order = order;
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
        if(messageOn_==true){
            return;
        }
        spinning_=true;
        hasBeenStopped_=false;
        eventManager_.clearEvt();
        //console.log("----spin ---- "+ getStackTrace().join('\n'));

        if(won){
            //  updateBalance_("WIN");
        }
        buttonManager_.applyState("SPIN");

        if (ReelConfig.spinType=="singleIconReelSpin") {
            //spinManager_.startSpin(swipe[0]);
        }else{
            lineManager_.stopEvents();
            bonusManager_.clearLineEval();
            if (freeSpinsManager_.getIsInFs() ==false && tokenAmtTXT_!=undefined){
                displayManager_.getGroup("freeSpins").remove (tokenAmtTXT_);
                displayManager_.getGroup("freeSpins").remove (tokenTXT_);
                displayManager_.getGroup("token").remove (tokenLabel_);

                tokenTXT_=null;
                tokenAmtTXT_=null;
                tokenLabel_=null;
            }
            popUpWildManager_.clearWild(popUpWildSmb_);

            winAmtManager_.resetWinManager();
            soundManager_.stopSound("winSound");

            balanceManager_.bet(betCheckCallBack_);

        }
    }

    function betCheckCallBack_(response){
        var swipe=[false];
        //handling FS message here
        if (response==true){
            if (autoPlayManager_.getIsInAutoPlay()==false || autoPlayManager_.getPreAutoPlayAutoriz()==true) {
                waitForSubstitution_=false;
                showScatterWin_=false;
                showFsWin_=false;
                gotTokens_=false;

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

    function spinAnimEnd_() {
        choose_=false;
        scatterBonus_=[];
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
        evaluateWinnings_();
    }

    function evaluateWinnings_(){
        //start bonus if needed, displays all winnings (also called after bonus to display lines winnings), after winnings call the autoplay and freespins evaluator
        lineManager_.clearLine();
        eventManager_.clearEvt();

        if (wonBonus==0 ) {

            logger("NO bonus found ");

            twinReelManager_.hideTwinReels();
            //scatter
            if (winManager_.getScatterWinAmt()[0]!=null) {
                if (winManager_.getScatterWinAmt()[0][12] != null) {
                    eventManager_.addEvent(updateScatterBalance, 0);
                    eventManager_.addEvent(fakeEvent_,(won)?9000:1000);
                }
            }else if (gotTokens_==true){
                eventManager_.addEvent(playTokens_,1000);
                eventManager_.addEvent(fakeEvent_,(won)?3000:1000);
            }

            //wilds
            popUpWildManager_.endAnimHandle((popUpWilSimbsNum_>0)?popUpWildSmb_:null, eventManager_);

            if (winManager_.getScatterWinAmt()[0]!=null) {
                if (winManager_.getScatterWinAmt()[0][6] != null) {
                    eventManager_.addEvent(fakeEvent_,(won)?4000:2000);
                }
            }

            if (waitForSubstitution_ && freeSpinsManager_.getIsInFs() == true ){
                eventManager_.addEvent(fakeEvent_,(compulsiveFlag_)? (popUpWilSimbsNum_*400):popUpWilSimbsNum_*600);
            }

            //winnings
            if (won) {
                lineManager_.endAnimHandle(winManager_.getAllWinsSorted(), eventManager_);
                if (freeRoundsManager_.getIsInFr()==true && freeSpinsManager_.getIsInFs() == false ){//no add delay during nested FS
                    eventManager_.addEvent(fakeEvent_,(won)?lineManager_.getTotalDuration():0);
                }

                //need to finish winnign animation before animate FS
                if (fsWon)eventManager_.addEvent(fakeEvent_,lineManager_.getTotalDuration());

            } else {
                logger("no win.------"+waitForSubstitution_)
                if(!fsWon)framework.updateSmallMessageText(Translate.do("Good luck"));
            }



            freeSpinsManager_.endAnimHandle(eventManager_);

            buttonManager_.applyState("AFTERSPIN");

            if (fsWon && freeSpinsManager_.getIsInFs() == true && freeSpinsManager_.getFsNumber() == 0) {
                eventManager_.addEvent(fsEval_, 4000);
            } else {
                eventManager_.addEvent(fsEval_, 0);
            }
        }else{
            logger("bonus found ");
        }
        eventManager_.triggerEvt();
    }

    function playTokens_(){
        var triggerSymbol_=spinManager_.getTriggerIcons();
        var add=false;

        for (var a in triggerSymbol_){
            if ( triggerSymbol_[a].played==undefined && triggerSymbol_[a].token==true) {
                add = true;
                var smb = new Phaser.Sprite(game_, triggerSymbol_[a].x, triggerSymbol_[a].y, "animToken");
                smb.anchor.set(.5, .5);
                smb.animations.add("anim");
                smb.scale.x = 1;
                smb.scale.y = 1;
                smb.visible=true;
                displayManager_.getGroup("token").add(smb);
                smb.animations.play("anim", 32, false, true);
                setTimeout(endSmbTokenAnim_,600, triggerSymbol_[a]);
            }
        }

        if (add){
            setTimeout(startsideAnimation_,600);
        }
    }

    function startsideAnimation_() {
        var smb = new Phaser.Sprite(game_, 1190, 135, "sideFS_active" );
        smb.anchor.set(.5, .5);
        smb.animations.add("anim");
        smb.scale.x = 1;
        smb.scale.y = 1;
        smb.alpha=1;
        for (var a in displayManager_.getGroup("freeSpins").children){
            if (displayManager_.getGroup("freeSpins").children[a].key=="sideFS_idle"){
                displayManager_.getGroup("freeSpins").children[a].visible=false;
            }
        }
        displayManager_.getGroup("freeSpins").add(smb);
        smb.animations.play("anim", 20, false, false,endActive_,smb);
        soundManager_.playSound("sideActive");
    }

    function endActive_(smb){
        smb.visible=false;
        displayManager_.getGroup("freeSpins").remove(smb);
        smb=null;
        for (var a in displayManager_.getGroup("freeSpins").children){
            if (displayManager_.getGroup("freeSpins").children[a].key=="sideFS_idle"){
                displayManager_.getGroup("freeSpins").children[a].visible=true;
            }
        }
    }

    function endSmbTokenAnim_(smb_){
        var smb = new Phaser.Sprite(game_, smb_.x, smb_.y, "token");
        smb.anchor.set(.5, .5);
        smb.scale.x = 1;
        smb.scale.y = 1;
        smb.alpha=0;
        displayManager_.getGroup("token").add(smb);;
        smb_.played = true;
        var time =.35+(4-(smb_.reel))*0.1;
        soundManager_.playSound("token");
        TweenMax.to( smb,time,{x:1190,y:172,onStart:tokenStart_,onStartParams:[smb],onComplete:tokenEnd_,onCompleteParams:[smb]});

    }

    function tokenStart_(smb){
        smb.alpha=1;
    }

    function tokenEnd_(smb){
        var t=0;
        if (smb!=null) {
            smb.visible = false;
            displayManager_.getGroup("freeSpins").remove(smb);
            smb = null;
            t=spinManager_.getSpinResp().status.collected;
        }else{
            t=communicationManager_.getResumeStatus().status.collected
        }

        var amt=  tokenPrices_[findWinRange_(t)];
        if (tokenAmtTXT_ == undefined) {
            tokenAmtTXT_= new Phaser.Text(game_, 1098, 223, t, {
                font: "46px HawaiianAlohaBTN-Bold",
                align: "center",
                fill: "#bcfa38"
            });
            displayManager_.getGroup("freeSpins").add(tokenAmtTXT_);
            tokenAmtTXT_.alpha = 1;
            tokenAmtTXT_.anchor.set(.5, .5);

            tokenLabel_ = new Phaser.Sprite(game_, 1190, 135, "tokenText" );
            tokenLabel_.anchor.set(.5, .5);
            tokenLabel_.scale.x = 1;
            tokenLabel_.scale.y = 1;
            tokenLabel_.alpha=1;
            displayManager_.getGroup("token").add(tokenLabel_);
        }else{
            tokenAmtTXT_.setText(t);
        }

        if (amt>0) {
            if (balanceManager_.getShowIncredits() == false) {
                amt = amt * balanceManager_.getCoinValue()/ lineManager_.getLinesNumber();
            }
            var msg1 = balanceManager_.getCurrencySmb() + "" + Util.formatNumber(amt, Util.getNubersOfDecimal());
            if (tokenTXT_ == undefined) {
                tokenTXT_ = new Phaser.Text(game_, 1188, 260, msg1, {
                    font: "36px HawaiianAlohaBTN-Bold",
                    align: "center",
                    fill: "#bcfa38"
                });

                displayManager_.getGroup("freeSpins").add(tokenTXT_);

                tokenTXT_.alpha = 1;
                tokenTXT_.anchor.set(.5, .5);

            } else {
                tokenTXT_.setText(msg1);
            }
            if (tokenI_!=findWinRange_(t)){
                soundManager_.playSound("tokenNewLevel");
                TweenMax.to(tokenTXT_.scale,.5,{x:1.2,y:1.2,ease:Bounce.easeOut,onComplete:bounce,repeat:2,onCompleteParams:[tokenTXT_]});
                TweenMax.to(tokenAmtTXT_.scale,.5,{x:1.2,y:1.2,ease:Bounce.easeOut,onComplete:bounce,repeat:2,onCompleteParams:[tokenAmtTXT_]});
                TweenMax.to(tokenLabel_.scale,.5,{x:1.05,y:1.05,ease:Bounce.easeOut,onComplete:bounce,repeat:2,onCompleteParams:[tokenLabel_]});

            }
            tokenI_=findWinRange_(t);

        }else{
            if (tokenTXT_ != undefined) {
                tokenTXT_.setText("");
            }
        }
    }

    function bounce(txt){
        TweenMax.to(txt.scale,.5,{x:1,y:1,ease:Bounce.easeOut});
    }

    function startBonus_(){
        if (wonBonus==0)return;
        wonBonus=0;
        //send a bonus setup request
        communicationManager_.sendServletRequest("bonusSetup");
    }

    function updateBalance_(txt) {
        if(!freeSpinsManager_.getIsInFs())balanceManager_.balanceUpdate();
        freeRoundsManager_.updateFreeRoundsTot();
    }

    function subst_(a){
        spinManager_.getReels()[scatterBonus_[a].reelNum].getSymbol(1).visible=true;
        scatterBonus_[a].smb=null;
    }

    function clearScatterBonus_(){
        for (var a=0; a< scatterBonus_.length;a++){
            var revAnimFrameSeq_=[];
            for (var b = 1; b <= scatterBonus_[a].smb.animations._outputFrames.length; b++) {
                if (b % 3 == 0) revAnimFrameSeq_.push(b);
            }
            revAnimFrameSeq_.reverse();
            scatterBonus_[a].smb.animations.add("anim", revAnimFrameSeq_);
            scatterBonus_[a].smb.animations.play("anim", 48, false, true, subst_, a);//todo parametric loop
        }
        soundManager_.playSound("revert");
        animateScatter_=false;
    }

    function updateScatterBalance(){
        if (winManager_.getScatterWinAmt()[0][12]!=undefined) {
            animateScatter_=true;
            displayManager_.getGroup("wins").visible=true;
            scatterBonus_=[];
            spinManager_.getReels()[1].getSymbol(1).visible=false;
            var smb = new Phaser.Sprite(game_, spinManager_.getReels()[1].getSymbol(1).x, spinManager_.getReels()[1].getSymbol(1).y, "anim12a" );
            smb.anchor.set(.5, .5);
            smb.animations.add("anim");
            smb.scale.x = 1;
            smb.scale.y = 1;
            displayManager_.getGroup("wins").add(smb);
            spinManager_.setAnimationMap(1, 1, smb);
            smb.animations.play("anim", 24, false, false);
            var obj={};
            obj.smb=smb;
            obj.reelNum=1;
            scatterBonus_.push(obj);

            var smb = new Phaser.Sprite(game_, spinManager_.getReels()[2].getSymbol(1).x, spinManager_.getReels()[2].getSymbol(1).y, "anim12b" );
            smb.anchor.set(.5, .5);
            smb.animations.add("anim");
            smb.scale.x = 1;
            smb.scale.y = 1;
            displayManager_.getGroup("wins").add(smb);
            smb.animations.play("anim", 24, false, false,iconScatterComplete0_);
            var obj={};
            obj.smb=smb;
            obj.reelNum=2;
            scatterBonus_.push(obj);

            spinManager_.getReels()[3].getSymbol(1).visible=false;
            var smb = new Phaser.Sprite(game_, spinManager_.getReels()[3].getSymbol(1).x, spinManager_.getReels()[3].getSymbol(1).y, "anim12c" );
            smb.anchor.set(.5, .5);
            smb.animations.add("anim");
            smb.scale.x = 1;
            smb.scale.y = 1;
            displayManager_.getGroup("wins").add(smb);
            smb.animations.play("anim", 24, false, false);
            var obj={};
            obj.smb=smb;
            obj.reelNum=3;
            scatterBonus_.push(obj);

            soundManager_.playSound("introBonus");
            //
            // var msg1= balanceManager_.getCurrencySmb()+ "" + Util.formatNumber(winManager_.getScatterWinAmt()[0][12].amt,Util.getNubersOfDecimal());
            // var txt1 = new  Phaser.BitmapText(game_, 640, spinManager_.getReels()[1].getSymbol(2).y+75,"bmpFont",msg1 ,57,"center");
            //
            // txt1.alpha=0;
            // txt1.anchor.set(.5,.5);
            // displayManager_.getGroup("lines").add(txt1);
            //
            // TweenMax.to(txt1,.2,{alpha:1});
            // TweenMax.to(txt1.scale,.5,{x:1.5,y:1.5,ease:Bounce.easeOut,onComplete:bounce,onCompleteParams:[txt1]});

        }

    }

    function iconScatterComplete0_(){
        var smb = new Phaser.Sprite(game_, this._parent.x, -300, "bonus_0");
        smb.anchor.set(.5, .5);
        smb.animations.add("anim");
        smb.scale.x = 1;
        smb.scale.y = 1;
        smb.alpha=1;
        displayManager_.getGroup("wins").add(smb);
        TweenMax.to(smb,.5,{delay:1,y:this._parent.y, onStart:playSound_, onComplete:iconScatterComplete0a_,onCompleteParams:[smb],ease:Bounce.easeOut});
    }

    function playSound_(){
        soundManager_.playSound("showBonus");
    }

    function iconScatterComplete0a_(smb_) {
        smb_.animations.play("anim", 24, false, true,iconScatterComplete1_,smb_);
    }

    function iconScatterComplete1_(smb_){
        var smb = new Phaser.Sprite(game_, smb_.x, smb_.y, "bonus_1" );
        smb.anchor.set(.5, .5);
        smb.animations.add("anim");
        smb.scale.x = 1;
        smb.scale.y = 1;
        displayManager_.getGroup("wins").add(smb);
        smb.animations.play("anim", 24, false, true,iconScatterComplete2_);
    }

    function iconScatterComplete2_(){
        var smb = new Phaser.Sprite(game_, this._parent.x, this._parent.y, "bonus_2" );
        smb.anchor.set(.5, .5);
        smb.animations.add("anim");
        smb.scale.x = 1;
        smb.scale.y = 1;
        displayManager_.getGroup("wins").add(smb);
        smb.animations.play("anim", 24, false, false,iconScatterComplete3_);
        setTimeout(soundManager_.playSound,700,"endBonus");
    }

    function iconScatterComplete3_(){
        if(freeSpinsManager_.getIsInFs()==false){
            balanceManager_.balanceUpdate();
        }

        freeRoundsManager_.addWin(winManager_.getScatterWinAmt());
        freeRoundsManager_.updateFreeRoundsTot();

        var msg1= balanceManager_.getCurrencySmb()+ "" + Util.formatNumber(winManager_.getScatterWinAmt()[0][12].amt,Util.getNubersOfDecimal());
        var txt1 = new  Phaser.Text(game_, this._parent.x, this._parent.y+230,  msg1,{font:"36px HawaiianAlohaBTN-Bold",align:"center",fill:"#bcfa38"});

        txt1.alpha=1;
        txt1.anchor.set(.5,.5);
        displayManager_.getGroup("wins").add(txt1);
        TweenMax.to(txt1,.7,{delay:2,alpha:0,y:660,onComplete:kill,onCompleteParams:[txt1]});
        TweenMax.to(this._parent,.5,{delay:2, y:-300,apha:0,onStart:iconScatterComplete4_,onStartParams:[txt1]});
    }

    function iconScatterComplete4_(txt){
        move(txt);
    }

    function move(txt){
        lineManager_.completeBonusValue(winManager_.getScatterWinAmt()[0][12].amt, "Bonus Win");
    }

    function kill(txt){
        txt.visible=false;
        txt.destroy();
        clearScatterBonus_();
    }

    function findWinRange_(amt) {
        var number = amt;
        for (var a in tokenIndex_) {
            if (tokenIndex_[a] >= number) {
                return  Number(a);
            }
        }
        return 6;
    }

    function endScatterAnim_(){
        soundManager_.stopSound("incWin");
    }

    function fsEval_(){
        if (animateScatter_==false) {
            //console.log("fsEval")
            spinning_ = false;
            fs = freeSpinsManager_.getIsInFs();
            fsWon = freeSpinsManager_.getFsWon();
            if (fsWon) {
                setTimeout(apEval_, Number(ReelConfig.fsSpinDelay));
            } else {
                apEval_();
            }
        }else{
            setTimeout(fsEval_,200);//wait scatter bonus animation END
        }
    }

    function apEval_(){
        //console.log("apEval")
        setTimeout(enableButton_, 200);
        multiplierManager_.updateMultiplier();
    }

    function enableButton_() {
        if (spinManager_.getSpinResp()!=null &&  Number(spinManager_.getSpinResp().win.total)<=0){
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
//        idleCycleManager_.startIdleCycle();
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
            if (freeSpinsManager_.getIsInFs()== false) {

                var s = spinManager_.getReels()[i].swapSmb(smb, a);

                // if (spinManager_.getSpinReelResp().reel[i].smb[a].smb== 11 && spinManager_.getSpinReelResp().reel[i].smb[a].special.indexOf("trigger") >= 0) { //check for special to animate
                //     s.reel = i;
                //     s.smb = a;
                //     s.trigger = true;
                //     s.token=false;
                //     spinManager_.addTriggerIcon(s);
                // }
                if (spinManager_.getSpinReelResp().reel[i].smb[a].special.indexOf("anim") >= 0 && a ==1 && spinManager_.getSpinReelResp().reel[i].smb[a].smb!= 11) { //check for special to animate
                    s.reel = i;
                    s.smb = a;
                    s.trigger = true;
                    s.token=false;
                    spinManager_.addTriggerIcon(s);
                }
                if (gameClass_.checkSpecialSymbol != null && gameClass_.checkSpecialSymbol(spinManager_.getSpinReelResp().reel[i].smb[a].smb) == true) {    //check for other symbols the lazy guy didn't add special for( example Fs multiplier symbols in Ostara)
                    s.reel = i;
                    s.smb = a;
                    s.token=false;
                    spinManager_.addTriggerIcon(s);
                }
            }else{
                var s = spinManager_.getReels()[i].swapSmb(smb, a);
                if (spinManager_.getSpinReelResp().reel[i].smb[a].smb== 5 || spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb==5) { //check for special to animate
                    s.reel = i[0];
                    s.smb = a;
                    s.trigger = true;
                    s.token=true;
                    spinManager_.addTriggerIcon(s);
                    gotTokens_=true;
                }
            }
        }
    }

    function playTriggeredSmb_(){
        var iconN=-1;
        var triggerSymbol_=spinManager_.getTriggerIcons();
        var add=false;

        for (var a in triggerSymbol_){
            if ( triggerSymbol_[a].played==undefined && triggerSymbol_[a].token==false) {
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
                triggerSymbol_[a].played = true;

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

        if (freeSpinsManager_.getIsInFs()==false) {
            if (spinManager_.getSpinReelResp().reel[2].smb[1].smb == 11) {//luau FS
                if (spinManager_.getSpinReelResp().reel[1].smb[1].smb == 8 && spinManager_.getSpinReelResp().reel[3].smb[1].smb == 8) { //all FS symbols
                    delayRepeater[0] = 4;
                    delayRepeater[1] = 8;
                    iconSound[2] = true;
                    iconEffect[1]="win";
                    delayRepeater[2] = 0;
                    delayRepeater[3] = 14;
                    iconSound[1] = true;
                    iconEffect[3]="win";
                    delayRepeater[4] = 10;
                } else if (spinManager_.getSpinReelResp().reel[1].smb[1].smb == 8) {//just the left one
                    delayRepeater[0] = 4;
                    delayRepeater[1] = 8;
                    iconSound[2] = true;
                    iconEffect[1]="win";
                    delayRepeater[2] = 0;
                    delayRepeater[3] = 14;
                    iconSound[1] = true;
                    iconEffect[3]="lose";
                    delayRepeater[4] = 12;
                } else {
                    delayRepeater[0] = 4;
                    delayRepeater[1] = 8;
                    iconSound[2] = true;
                    iconEffect[1]="lose";
                    delayRepeater[2] = 0;
                    delayRepeater[3] = 10;

                    delayRepeater[4] = 12;
                }
                setTimeout(placeLuau_, 300);
            }

            if (spinManager_.getSpinReelResp().reel[2].smb[1].smb == 6 || spinManager_.getSpinReelResp().reel[2].smb[1].smb == 9) {//bonus or scatter
                if (spinManager_.getSpinReelResp().reel[1].smb[1].smb == 7 && spinManager_.getSpinReelResp().reel[3].smb[1].smb == 7) { //all bonus symbols
                    delayRepeater[0] = 4;
                    delayRepeater[1] = 8;
                    iconSound[2] = true;
                    iconEffect[1]="win";
                    delayRepeater[2] = 0;
                    delayRepeater[3] = 14;
                    iconSound[1] = true;
                    iconEffect[3]="win";
                    delayRepeater[4] = 10;
                } else if (spinManager_.getSpinReelResp().reel[1].smb[1].smb == 7) {//just the left one
                    delayRepeater[0] = 4;
                    delayRepeater[1] = 8;
                    iconSound[2] = true;
                    iconEffect[1]="win";
                    delayRepeater[2] = 0;
                    delayRepeater[3] = 14;
                    iconSound[1] = true;
                    iconEffect[3]="lose";
                    delayRepeater[4] = 12;
                } else {
                    delayRepeater[0] = 4;
                    delayRepeater[1] = 8;
                    iconSound[2] = true;
                    delayRepeater[2] = 0;
                    delayRepeater[3] = 10;
                    iconEffect[1]="lose";
                    delayRepeater[4] = 12;
                }
                setTimeout(placeTurtle_, 300);
            }
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

    function placeLuau_(){
        if (hasBeenStopped_)return;
        //animate luao symbol
        centralSmb_ = new Phaser.Sprite(game_, spinManager_.getReels()[2].getSymbol(1).x, spinManager_.getReels()[2].getSymbol(1).y, "anim11" );
        centralSmb_.anchor.set(.5, .5);
        centralSmb_.animations.add("anim");
        centralSmb_.scale.x = 1;
        centralSmb_.scale.y = 1;
        displayManager_.getGroup("reels").add(centralSmb_);
        centralSmb_.animations.play("anim", 36, false, false,endCentralAnim_);
        spinManager_.getReels()[2].getSymbol(1).visible=false;
        setTimeout(soundManager_.playSound,200,"luau");
    }

    function placeTurtle_(){
        if (hasBeenStopped_)return;
        //animate turtle
        centralSmb_ = new Phaser.Sprite(game_, spinManager_.getReels()[2].getSymbol(1).x, spinManager_.getReels()[2].getSymbol(1).y, "anim6" );
        centralSmb_.anchor.set(.5, .5);
        centralSmb_.animations.add("anim");
        centralSmb_.scale.x = 1;
        centralSmb_.scale.y = 1;
        displayManager_.getGroup("reels").add(centralSmb_);
        centralSmb_.animations.play("anim", 24, false, false,endCentralAnim_);
        spinManager_.getReels()[2].getSymbol(1).visible=false;
        setTimeout(soundManager_.playSound,200,"turtle");
    }

    function endCentralAnim_(){
        spinManager_.getReels()[2].getSymbol(1).visible=true;
        if (centralSmb_!=null) {
            displayManager_.getGroup("reels").remove(centralSmb_);
            centralSmb_ = null;
        }
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

    function fsLogoOut_(){
        displayManager_.getGroup("bg").visible=false;
        displayManager_.getGroup("mask").visible=false;
        displayManager_.getGroup("frame").visible=false;
        displayManager_.getGroup("bgFS").visible=true;
        displayManager_.getGroup("maskFS").visible=true;
        displayManager_.getGroup("frameFS").visible=true;
        TweenMax.to(displayManager_.getGroup("background"),.5,{y:500,onComplete:changeBg_});
        displayManager_.getGroup("backgroundFS").visible=true;
    }

    function fsHideTotPanel_(){
        displayManager_.getGroup("bg").visible=true;
        displayManager_.getGroup("mask").visible=true;
        displayManager_.getGroup("frame").visible=true;
        displayManager_.getGroup("bgFS").visible=false;
        displayManager_.getGroup("maskFS").visible=false;
        displayManager_.getGroup("frameFS").visible=false;
        TweenMax.to(displayManager_.getGroup("backgroundFS"),.5,{y:500,onComplete:restoreBg_});

    }

    function changeBg_(){
        displayManager_.getGroup("background").visible=false;
        displayManager_.getGroup("backgroundFS").visible=true;
        TweenMax.to(displayManager_.getGroup("backgroundFS"),.5,{y:0});
    }

    function restoreBg_(){
        displayManager_.getGroup("backgroundFS").visible=false;
        displayManager_.getGroup("background").visible=true;
        TweenMax.to(displayManager_.getGroup("background"),.5,{y:0});
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
        decreaseVolumeBG:decreaseVolumeBG_,
        increaseVolumeBG:increaseVolumeBG_,
        fsLogoOut:fsLogoOut_,
        fsHideTotPanel:fsHideTotPanel_,
        getStickyWildNumber:getStickyWildNumber_,
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
            popUpWildSmb_=value;
        },
        getStickyWildSimbs:function () {
            return popUpWildSmb_;
        },
        waitForSpin:function(){
            if (freeSpinsManager_.getIsInFs() == true) {
                return true; // forcing slow speed
            }else{
                return false;
            }
        },
        isSymbolWilded:function(reel,smb){
            return popUpWildManager_.isSymbolWilded(reel,smb);
        },
        getStickyWildManager:function(){
            return popUpWildManager_;
        },
        getLastFSTime:function(){
            //return the delay to close sticky spins
            return (won || winManager_.getScatterWinAmt()[0]!=null)?lineManager_.getTotalDuration():3000;
        },
        getFsIcon:function(num){
            var fs="";

            if (freeSpinsManager_.getIsInFs()==true) {
                if (ReelConfig.fsSpecialIcons.indexOf(num)>=0)fs= "_FS_";
            }
            return fs;
        },
        getTokenText:function (){
            return tokenTXT_;
        },
        hasStopped:function () {
            //if any central animation running STOP
            hasBeenStopped_=true;
            endCentralAnim_();

        },
        lineCompletion:function (value){
            //console.log("-----------------------line completion----------------------------!!!!!!")
            lineCompletion_=value;
        }
    }

    return me;
}