/**
 * KiS Framework, Created by Fabry on 29/10/2020.
 */
function MegaWayTumblingWinRainbow(gameRef, gameClass) {
    var gameClass_ = gameClass;
    var game_ = gameRef;
    var coinsIconPoints_ = [];
    var winEventManager_;
    var funtainEventManager_;
    var isMobile = false; //todo
    var coinWinGroup_;
    var coinWinTxt_;
    var winAmtClass_;
    var partialWinAmt_=0;
    var iEndTimO=1000;
    var totalDuration_=0;

    //drawing
    var mainGroup_;
    var animGroup_;
    var coinWinGroup_;
    var bCompleted_=true;
    var stopEvent_=false;
    var pop_=false;
    var lineDraw_;

    //central win amt
    var stages_=[];
    var stage_=0;
    var centralWinGroup_;
    var centralWinMsgGroups_=[];
    var centralWinMsgPos_=[];
    var reset_=false;
    var wins;
    var tw_=[];
    var tw2_=[];
    var tw1=null;
    var tw2=0;
    var tw3=0;
    var tw4=0;
    var to=0;
    var scaleStart_=2.5;
    var winAmount_;
    var lineWinAmt_=0;

    //central win funtain
    var objThrown_=[];
    var centralFuntainGroup_;
    var centralFuntainGroupSmallObj_;
    var currentSmb_;
    var currentWinWeight_;
    var stToClear_=[];
    var bgStopped_=false;

    //tumble
    var reelSmb=[];
    var tumbling_=false;
    var tumblingWin_=0;
    var tumblingWinCoins_=0;
    var bSkip_=false;
    var winCash_=0;
    var mult_=0;
    var fsType_;
    var revAnimFrameSeq_=[];
    var exploder_=false;
    var converter_=false;
    var ganesha_=false;
    var wild=false;
    var buttonE;
    var wildAnim_=[];
    var glows_=[];
    var size_=[];
    size_[0]=0;
    size_[1]=0;
    size_[2]=280;
    size_[3]=187;
    size_[4]=140;
    size_[5]=112;
    size_[6]=93.3;
    size_[7]=80;
    var hasBeenCapped_=0;

    function initClass_() {
        stages_[0]=winAnim.winClasses_[6];
        stages_[1]=winAnim.winClasses_[7];
        stages_[2]=winAnim.winClasses_[8];

        mainGroup_ = displayManager_.getGroup("lines");
        //animGroup_ = displayManager_.getGroup("reels");       //animations can be added in a differe
        coinWinGroup_ = displayManager_.getGroup("centralLineWin");
        coinWinTxt_ = displayManager_.getText("lineWin");
        //central win
        centralWinGroup_ = displayManager_.getGroup("centralWin");
        centralWinMsgGroups_[1]=[];
        centralWinMsgGroups_[2]=[];
        centralWinMsgGroups_[3]=[];

        //central win
        centralWinGroup_=displayManager_.getGroup("centralWin");
        centralWinMsgGroups_[1]=displayManager_.getGroup("centralWin").bigWin.children[0];
        centralWinMsgGroups_[2]=displayManager_.getGroup("centralWin").sBigWin.children[0];
        centralWinMsgGroups_[3]=displayManager_.getGroup("centralWin").mBigWin.children[0];
        centralWinMsgPos_[1]=displayManager_.getGroup("centralWin").bigWin.children[0].y;
        centralWinMsgPos_[2]=displayManager_.getGroup("centralWin").sBigWin.children[0].y;
        centralWinMsgPos_[3]=displayManager_.getGroup("centralWin").mBigWin.children[0].y;

        //funtain
        centralFuntainGroup_=displayManager_.getGroup("centralWin")["group"];
        centralFuntainGroupSmallObj_=displayManager_.getGroup("centralFuntainSmallObj");
        winEventManager_ = new EventManagerCheck();
        funtainEventManager_= new EventManager();

        if (ReelConfig.winType=="BounceWin")
            winAmtClass_= new BounceWin(game_,gameClass_, winAnim,"lineWin");
        if (ReelConfig.winType=="SimpleWin")
            winAmtClass_= new SimpleWin(game_,gameClass_, winAnim,"lineWin");
        //setTimeout(changeCentralWinStage_,1500);

        for (var a in displayManager.groups.centralWin.buttons) {
            buttonE = new Phaser.Button(game_, displayManager.groups.centralWin.buttons[a].x, displayManager.groups.centralWin.buttons[a].y, displayManager.groups.centralWin.buttons[a].name, me[displayManager.groups.centralWin.buttons[a].evt], this, 1, 2, 0, 0);
            buttonE.alpha=0;
            buttonE.anchor.set(0.5, 0.5);
            centralWinGroup_.add(buttonE);
        }

    }

    //x20, 50x,  x100
    var winAnim = {
        "winClasses_":    [0, .5, 1,  2, 4, 10, 20, 50, 80],
        "winClassesBI_":    [1,   1,  1,  1, 1, 1, 2, 5, 10],
        "winSound_":    [0,   0,  2,  3, 4, 5,  6,  7,  8],
        "winTxtDuration": [0.2,  0.2, .5, 2,   3, 4, 6,   7,    8],
        "centralWinDur": [0, 0, 0, 0, 0, 0, 2, 2.5, 3],
        "scaleFactor": [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5],
        "bigWinText": [0, 0, 0, 0, 0, 0, 1, 1, 1],
        "winSndEffect": ["", "", "", "", "", "", "", "", "", "", "", ""],
        "bgLoopsNum": [2, 4, 5, 5, 6, 7, 8, 8, 8],
        "accuSnd": ""
    }

    var winAnimB=winAnim;

    function doOk_() {
        if (hasBeenCapped_>0)return;
        if(buttonE.enable) {
            buttonE.enable = false;
        if (autoPlayManager_.getIsInAutoPlay() || (freeSpinsManager_.getIsInFs() && freeSpinsManager_.getFsNumber()>0)) {
            gameClass_.setChange(false);
            gameClass_.lineCompletion(true);
            setTimeout(callDoSpin_, 800);
        }else{
            winEventManager_.clearEvt();
            clearLineAfterValue_();
            gameClass_.setChange(false);
            gameClass_.lineCompletion(true);
            reset_=true;
                bCompleted_ = true;
            }
        }
        return;
    }

    function callDoSpin_(){
        gameClass_.doCutWinAnim();
    }

    function clearOverLine_(){
        //showLine_();
        //clearAll_();
    }

    function clearLine_() {
        clearAll_();
    }

    function stopEvents_(){
        stage_=0;
        totalDuration_=0;
        tumblingWin_=0;
        funtainEventManager_.clearEvt();
        if (tw3>0)clearInterval(tw3);
    }

    function showBonusWin_(amt,amtCash){
        clearLine_();
        reset_=false;
        //display central coins
        stepInc_= 2;
        var bkp=winAnimB.accuSnd;
        if (gameClass_.getCompulsivePlayer())winAnimB.accuSnd="";
        if (ReelConfig.winType=="BounceWin")
            winAmtClass_= new BounceWin(game_,gameClass_, winAnimB,"lineWin");
        if (ReelConfig.winType=="SimpleWin")
            winAmtClass_= new SimpleWin(game_,gameClass_, winAnimB,"lineWin");

        if (balanceManager_.getShowIncredits()==false) {
            winAmtClass_.showIstantUpdateWin(amtCash);
        }else{
            winAmtClass_.showIstantUpdateWin(amt);
        }
        if (!getOrientation() != "portrait") {
            coinWinTxt_.y = 415;
        }else{
            coinWinTxt_.y = 440;
        }
        coinWinTxt_._fontSize=56;
        coinWinTxt_.alpha=1;
        return 1500;
    }

    function stopIncSound_() {
        soundManager_.stopSound(winAnimB.accuSnd);
    }

    function handleBonusEndWinAnimation_(){
        if (gameClass_.isSpinning()==true)return;
        buttonManager_.applyState("NH");
        buttonManager_.applyRestore();
    }

    function resumeTumbling_(json,fs){
        if (!fs) {
            tumblingWin_ = json.status.unsettledTotal / 100;
            freeRoundsManager_.updateFrBalance(-1*tumblingWin_);
        }else{
            tumblingWin_ = json.status.totalWin / 100;
            freeSpinsManager_.updateWin((Number(json.status.unsettledTotal))/100);
        }
        winAmtManager_.showIstantUpdateWin(tumblingWin_, "Tumble WIN");
    }

    function prepareWinnings_(winSmb) {
        stages_[0]=200;
        stages_[1]=500;
        stages_[2]=800;

        winAmount_=winManager_.getWinAmt();
        lineWinAmt_= winManager_.getWinAmt();//changed on the 10th Gen 2020 because we've found out Louis was capping lineWin to 2500. was getLineWinAmt
        tumblingWinCoins_=spinManager_.getSpinResp().win.lineCoinsWin;
        wins=winManager_.getTumblingWinningSymbols();
        mult_=spinManager_.getSpinResp().freeSpin.multiplier;
        fsType_=spinManager_.getSpinResp().freeSpin.type;
        var unsettledWin_=0;

        if (spinManager_.getSpinResp().state!=null && spinManager_.getSpinResp().state.totalWin!=null){
            winCash_=spinManager_.getSpinResp().state.totalWin*(balanceManager_.getCoinValue()/ lineManager_.getLinesNumber());
        }
        if (spinManager_.getSpinResp().state!=null && spinManager_.getSpinResp().state.totalWin.unsettledTotal!=null){
            unsettledWin_= spinManager_.getSpinResp().state.totalWin.unsettledTotal*(balanceManager_.getCoinValue()/ lineManager_.getLinesNumber());
        }else{
            unsettledWin_=winCash_;
        }
        var w=(unsettledWin_!=undefined)?unsettledWin_:0;
        winCash_+=(w-winCash_);
        //scaleR coinWinTxt_.scale.x = 4;
        //scaleR coinWinTxt_.scale.y =4;

        pop_=false;
        tumbling_=false;
        for (var b = 0; b < ReelConfig.numReels; b++) {
            var obj={};
            obj.index=[];
            obj.indexFallen=[];
            obj.newSmbs=[];
            obj.current=0;
            obj.tumbleObj=[];
            reelSmb[b]=obj;
        }
        hasBeenCapped_=(spinManager_.getFsResp()!=undefined && spinManager_.getFsResp().object!=undefined && spinManager_.getFsResp().object.cap!=null)?spinManager_.getFsResp().object.cap:0;//cap, terminates FS after showing the win, prevents also the game to tumble further


        //in this cersion i make the tumble request here
        if ((fsType_=="tumble" || fsType_=="convert" ) && hasBeenCapped_==0){
            if (fsType_=="tumble" ){
                tumbling_=true;
            }else{
                tumbling_=false;
            }
            //bSkip_=true;
            gameClass_.setChange(true);
            gameClass_.setTumblingReq(true);

            var force=[];
            var found=false;
            if ($(".debug")!=null && gameParams.force=="Enable"){
                for (var j = 0; j <  ReelConfig.numReels ; j++) {
                    force[j]=[];
                    for (var i = 0; i < ReelConfig.numIcons; i++) {
                        force[j].push(document.getElementsByName("d"+j + i)[0].value);
                    }
                }
                if(document.getElementsByName("sideFeature")!=undefined )force.push(document.getElementsByName("sideFeature")[0].value);//easter slot side feature
                communicationManager_.sendServleForceSpinReq("spin",force,true);
            }else{
                communicationManager_.sendServletRequest("spin");
            }
        }
    }

    function calcSingleLinePoints_(line, winSmb) {
    }
    var previousReels_;
    function showLine_() {
        var index=0;
        bCompleted_=false;
        reset_=false;
        stopEvent_=false;
        if(coinWinGroup_!=null)coinWinGroup_.visible=true;
        if(animGroup_)animGroup_.visible=true;
        //winEventManager_.clearEvt();
        totalDuration_=0;
        resetCentralWin_();
        index=findWinRange_(lineWinAmt_);
        exploder_=false;
        converter_=false;
        ganesha_=false;
        bgStopped_=true;
        wild=false;

        winEventManager_.addEvent(fakeEvent,0,gameClass_.getTumblingReq);//wait for response to come after tumbling or convert
        winEventManager_.addEvent(fakeEvent,10,spinManager_.getTumbleDone);//wait for previoustumbleDone
        if (tumbling_ && freeSpinsManager_.getIsInFs() && gameClass.getUpdateLockedReels!=undefined && gameClass.getUpdateLockedReels()==true)winEventManager_.addEvent(fakeEvent,(gameClass_.getCompulsivePlayer())?2200:2700);
        if (gameClass_.getMultiplier!=undefined && gameClass_.getMultiplier()==true)winEventManager_.addEvent(fakeEvent,1000);
        for (var a in wins) {
            if (wins[a] != undefined) {
                //normal sequence without the explorer
                winEventManager_.addEvent(amimIcon_, 0,null, [wins[a]]);//anim icon
                for (var b in wins[a].smbNum) {
                    if ((wins[a].smbNum[b] == 11 && gameClass.hasWildActive(11)==false) ) {
                        wild=true;
                    }
                }
            }
        }
        winEventManager_.addEvent(playIconWinningSounds_,0);

        if (hasBeenCapped_==0) {
            if (tumbling_) winEventManager_.addEvent(tumble_, 1000);
            winEventManager_.addEvent(showCentralWin_, 400, null, [fsType_, lineWinAmt_]);
            if (tumbling_) winEventManager_.addEvent(restoreIcons, 1000);
            if (freeSpinsManager_.getIsInFs()) winEventManager_.addEvent(updateFreeSpinsMult, (gameClass_.getCompulsivePlayer()) ? 700 : 1000);
            if (freeSpinsManager_.getIsInFs() && spinManager_.getFsResp() != undefined && spinManager_.getFsResp().won != undefined && spinManager_.getFsResp().won > 1) {
                winEventManager_.addEvent(fakeEvent, 1000);
            }
        }else{
            winEventManager_.addEvent(showCentralWin_, 400, null, [fsType_, hasBeenCapped_]);
            spinManager_.getFsResp().object.freespinsRemaining=0;
            bCompleted_=true;
            gameClass_.lineCompletion(true);
            winEventManager_.addEvent(freeSpinsManager_.hitCap, winAnim.winTxtDuration[index]*1000,null,[lineWinAmt_]);
        }


        winEventManager_.addEvent(updateBalance_,0);

        winEventManager_.triggerEvt();
    }


    function playIconWinningSounds_(){
        var iMaxSmb=0;
        for (var a in wins) {
            if (wins[a] != undefined) {
                var num = 10;
                var def = 0;  //def higher icon
                for (var b = wins[a].smbNum.length; b >= 0; b--) {
                    if (wins[a].realSmbNum[b] > def ) {
                        def = wins[a].realSmbNum[b];
                    }
                }
                num = def;
                iMaxSmb = (num > iMaxSmb) ? num : iMaxSmb;//get the high symbol to play its own sound
            }
        }

        soundManager_.playSound("smbWin_" + iMaxSmb);
    }

    function playWinningSounds_(amt){
        var audioLevel=[];
        audioLevel[1]=1;
        audioLevel[2]=1.4;
        audioLevel[3]=1.2;
        audioLevel[4]=1.1;
        audioLevel[5]=1;
        audioLevel[6]=1.2;
        audioLevel[7]=1.3;
        audioLevel[8]=1.4;

        var iMaxSmb=0;
        gameClass_.setTotWin(amt);
        var index = findWinRange_(amt);
        var iMaxSmb = 0;
        if ( winAnim.bigWinText[index]=="1") {
            soundManager_.playSound("winBg_" + winAnim.winSound_[index]);   //total bg sound
        }
    }

    function showCentralWin_(params){
            if (reset_ == true) return;
            var fsType = params[0];
            var lineWinAmt = params[1];
            tumblingWin_ += Number(lineWinAmt);
            if (!getOrientation() != "portrait") {
                coinWinTxt_.y=displayManager.groups.centralLineWin.texts.lineWin.y;
            }else{
                coinWinTxt_.y=540;
            }
            coinWinTxt_._fontSize=46;
            coinWinTxt_.alpha=1;

            if (spinManager_.gotError() == true) return;
            var index = findWinRange_(lineWinAmt);
            if (index > 4) {
                centralFuntainGroup_.visible = true;
                funtainEventManager_.clearEvt();
                var time = 300 * (index + 1);
                var amt = lineWinAmt;
                if (balanceManager_.getShowIncredits() == false) {
                    amt = amt / balanceManager_.getCoinValue() * lineManager_.getLinesNumber();
                }
                var numObj = Math.min(Math.max((Math.ceil(amt) / 3), 15), 70);
                var interval = time / numObj;
                for (a = 0; a <= numObj; a++) {
                    funtainEventManager_.addEvtForce(startNewSmallObject_, interval);
                    if (a % 10 == 0) funtainEventManager_.addEvtForce(startCoinsSound_, 0);
                }
                funtainEventManager_.triggerEvt();
            }

            if (lineWinAmt>0 &&  winAnim.bigWinText[index]=="0") {
                soundManager_.playSound("amtCentral");
            }

            index=findWinRange_(tumblingWin_);
            if (Number(spinManager_.getSpinResp().win.total) <= 0 || hasBeenCapped_) {
                if (lineWinAmt > 0 && freeSpinsManager_.getFsWon() == false) {
                    if (freeSpinsManager_.getIsInFs() == false) {
                        if (index>1){
                            soundManager_.playSound("winBg_" + winAnim.winSound_[index]);   //total bg sound
                            winAmtClass_.showWin(tumblingWin_, null, updateValue1_, completeValueLast_,  tumblingWin_-lineWinAmt, null, winAnim.scaleFactor[index], .2);
                        }else{
                            winAmtManager_.showIstantUpdateWin(tumblingWin_, "Total WIN");
                            coinWinTxt_.setText("");
                            bCompleted_ = true;
                            //winManager_.resetWinAmt();
                            bSkip_ = true;

                            setTimeout(gameClass_.lineCompletion,100,true);
                            balanceManager_.setCanUpdate(true);

                            // removed as it was causing inconsistency when the bet is above stake anc coin play activated so the session bar was updating coins rather than cash, moved on getTotalTumblingWin for both cases
                            //if (balanceManager_.getShowIncredits() == true) {
                            //    tumblingWin_= tumblingWin_ * (balanceManager_.getCoinValue() / lineManager_.getLinesNumber());
                            //}
                            coinWinTxt_.setText("");
                        }

                    } else {
                        winAmtClass_.showWin(tumblingWin_, null, updateValue1_, completeValueLast_, tumblingWin_-lineWinAmt, null, winAnim.scaleFactor[index], .2);
                    }
                } else {
                    if (freeSpinsManager_.getFsWon() == false) {
                        delayedStartUpdate_(true, tumblingWin_, 0);
                    } else {
                        setTimeout(gameClass_.lineCompletion, 100, true);
                        gameClass_.setTumblingReq(false);
                    }
                }
            } else {
                winManager_.resetWinAmt();
                if (lineWinAmt > 0) {
                    if (freeSpinsManager_.getIsInFs() == false) {
                        if (index>1){
                            winAmtClass_.showWin(tumblingWin_, null, updateValue1_, completeValue_,  tumblingWin_-lineWinAmt, null, winAnim.scaleFactor[index], .2);
                        }else{
                            winAmtManager_.showIstantUpdateWin(tumblingWin_, "Tumble WIN");
                            coinWinTxt_.setText("");
                            bCompleted_ = true;
                            //winManager_.resetWinAmt();
                            bSkip_ = true;
                        }


                    } else {
                        winAmtClass_.showWin(tumblingWin_, null, updateValue1_, completeValue_, tumblingWin_-lineWinAmt, null, winAnim.scaleFactor[index], .2);
                    }
                } else {
                    delayedStartUpdate_(false, tumblingWin_, 0);
                }
            }
            if (freeRoundsManager_.getIsInFr() && freeSpinsManager_.getFsWon()) freeRoundsManager_.updateFrBalance(tumblingWin_);//compensate FS won because Moirai add it to FS tot won risking to display twice

    }

    function startCoinsSound_(){
        soundManager_.playSound("coins");
    }


    function updatePrize_(){
        //start the winning central win dispaly during FS
    }

    function idle_(force) {

    }

    function amimIconIdle_(winSmb_) {

    }

    function amimIcon_(params) {
        if (spinManager_.gotError()==true)return;
        var winSmb_=params[0];
        setTimeout(soundPop,(gameClass_.getCompulsivePlayer())?600:1300);
        for (var a in winSmb_.smbNum){
            delayedAnimation_(winSmb_,a);
        }
        soundManager_.playSound("bubble");
    }


    function soundPop(){
        //play pop sound
        soundManager_.playSound("iconPop");
    }

    function updateBalance_(){
        gameClass_.setChange(false);    // for magic beans setTimeout(gameClass_.setChange, (winAmount_>1)? 1500:(gameClass_.hasScatter())?2000:200,false);
        if (fsType_!="endTumble" || spinManager_.gotError()==true)return;
        updatePrize_();
        setTimeout(gameClass_.lineCompletion,me.getTotalDuration(),true);
        soundManager_.playSound("winAmountFall");

        //reset_=true;
    }

    function updateFreeSpinsMult(){
        var m=mult_;
        if (("x" +m)!=displayManager_.getText("fsMultValueBig").text ){
            if (m>1){
                displayManager_.getText("fsMultValueBig").setText("x" +m);
                displayManager_.getText("fsMultValueBig").y=-200;
                displayManager_.getText("fsMultValueBig").alpha=1;
                soundManager_.playSound("multiplier");
                displayManager_.getText("fsMultValue").mult=m;
                TweenMax.to(displayManager_.getText("fsMultValueBig"),.4,{y:280,ease:Bounce.easeOut,onComplete:bigMult_,onCompleteParams:[m]})
                if (gameClass.startVibrate)setTimeout(gameClass.startVibrate,300,.1,1,4);
            }
        }
        bCompleted_=true;
    }

    function bigMult_(m) {
        displayManager_.getText("fsMultValue").setText("x" + m);
        TweenMax.to(displayManager_.getText("fsMultValueBig"), .4, {delay: 1.1, alpha: 0})
        if (m == 5 ) {
            soundManager_.playSound("multiplier_1");
        } else if (m ==10) {
            soundManager_.playSound("multiplier_2");
        } else if (m >15) {
            soundManager_.playSound("multiplier_3");
        }
    }

    function delayedStartUpdate_(last,tumblingWin,win) {
        soundManager_.playSound("winAmountFall");
        if (last) {
            winManager_.resetWinAmt();
            if (balanceManager_.getShowIncredits() == true) {
                winManager_.setWinAmountBonus(tumblingWin * (balanceManager_.getCoinValue() / lineManager_.getLinesNumber()));
            } else {
                winManager_.setWinAmountBonus(tumblingWin);
            }
            balanceManager_.setCanUpdate(true);

            var index = findWinRange_(tumblingWin);
            if (index >= 0) {

                centralFuntainGroup_.visible = true;
                funtainEventManager_.clearEvt();
                var time = me.getTotalDuration();
                var amt = lineWinAmt_;
                if (balanceManager_.getShowIncredits() == false) {
                    amt = amt / balanceManager_.getCoinValue() * lineManager_.getLinesNumber();
                }
                if (index > 1) {
                    var numObj = Math.min(Math.max((Math.ceil(amt) / 3), 45), 100);
                    var interval = time / numObj;
                    for (a = 0; a <= numObj; a++) {
                        funtainEventManager_.addEvtForce(startNewSmallObject_, interval);
                        if (a % 10 == 0) funtainEventManager_.addEvtForce(startCoinsSound_, 0);
                    }
                    funtainEventManager_.triggerEvt();
                    gameClass_.decreaseVolumeBG(me.getTotalDuration() + 1000);
                }
                setTimeout(gameClass_.lineCompletion, me.getTotalDuration(), true);

            } else {
                setTimeout(gameClass_.lineCompletion, 100, true);
            }
            if (winAnim.bigWinText[index] == "1") {    // show coins animation
                changeCentralWinStage_(index - 5, false);
            }
            playWinningSounds_(tumblingWin, true);


            var obj = {};
            obj.val = 0;

            if (freeSpinsManager_.getIsInFs()) {
                var max = 45000 * 20;//just something from 1M that will never apply for WW
                var maxC = max * balanceManager_.getCoinValue() / lineManager_.getLinesNumber();
                var coinsW = (winCash_) / balanceManager_.getCoinValue() * lineManager_.getLinesNumber();

                if (balanceManager_.getShowIncredits() == true) {
                    if (max - coinsW > 0) {
                        displayManager_.getText("totWonValue").setText(Util.formatNumber((winCash_) / balanceManager_.getCoinValue() * lineManager_.getLinesNumber(), Util.getNubersOfDecimal()));
                        //displayManager_.getText("totWonValueShadow").setText(Util.formatNumber((winCash_) / balanceManager_.getCoinValue() * lineManager_.getLinesNumber(), Util.getNubersOfDecimal()));
                    } else {
                        displayManager_.getText("totWonValue").setText(max)
                        //displayManager_.getText("totWonValueShadow").setText(max)
                    }
                } else {
                    if (max - coinsW > 0) {
                        displayManager_.getText("totWonValue").setText(balanceManager_.getCurrencySmb() + "" + Util.formatNumber((winCash_), Util.getNubersOfDecimal()));
                        //displayManager_.getText("totWonValueShadow").setText(balanceManager_.getCurrencySmb() + "" + Util.formatNumber((winCash_), Util.getNubersOfDecimal()));
                    } else {
                        displayManager_.getText("totWonValue").setText(balanceManager_.getCurrencySmb() + "" + maxC)
                        //displayManager_.getText("totWonValueShadow").setText(balanceManager_.getCurrencySmb() + "" + maxC)
                    }
                }

            }

            if (balanceManager_.getShowIncredits() == true) {
                coinWinTxt_.setText(Util.formatNumber(tumblingWin, Util.getNubersOfDecimal()));
            } else {
                coinWinTxt_.setText(balanceManager_.getCurrencySmb() + "" + Util.formatNumber((tumblingWin), Util.getNubersOfDecimal()));
            }

            if (reset_ == false) tw_.push(TweenMax.to(obj, winAnim.winTxtDuration[index] - 1, {
                val: tumblingWin,
                onUpdate: updateValue_,
                onUpdateParams: [obj],
                onComplete: finalizeCentralWin_,
                onCompleteParams: [index],
                ease: Power0.easeOut
            }));

            winAmtManager_.showIstantUpdateWin(tumblingWin, "Total WIN");
        } else {
            bCompleted_ = true;
            winManager_.resetWinAmt();
            bSkip_ = true;
            if (win > 0) winAmtManager_.showIstantUpdateWin(tumblingWin, "Tumble WIN");

        }
    }


    function finalizeCentralWin_(index){
        setTimeout(resetCentralWin_,Math.max(winAnim.centralWinDur[index]*1000,2000));

        bCompleted_=true;
    }

    function finalizeComplete_(){

    }

    function finalizeComplete2_(){
        bCompleted_=true;
    }

    function startUpdate(tumblingWin,win){
        if (freeSpinsManager_.getIsInFs()){
            updateValues_(2,tumblingWin, win);
            return
        }
        soundManager_.playSound("slide");
        updateValues_(2,tumblingWin, win);
    }

    function startUpdateLast(tumblingWin){
        if (freeSpinsManager_.getIsInFs()){
            updateValues_(1,tumblingWin);
            return
        }
        soundManager_.playSound("slide");
        updateValues_(1,tumblingWin);
    }

    function updateValues_(type,tumblingWin,win) {
        if (type==1) {
            setTimeout(gameClass_.lineCompletion, 200, true);
            var amt = 500;
        to=setTimeout(delayedStartUpdate_,amt,true,tumblingWin,0);
        }else{
            var amt=500;
            to=setTimeout(delayedStartUpdate_,amt,false,tumblingWin,win);
        }
        //gameClass_.decreaseVolumeBG();
    }

    function updateAfterWinScale_(a){
        if (a == null|| a==undefined)return;
        if (a.scale == null || a.scale==undefined)return;
        TweenMax.to(a.scale,.2,{x:1,y:1});
    }

    function changeAllHL_(params) {
    }

    function delayedWildReelAnimation_(reel){
        wildManager_.wildReelWinAnim(reel);
    }

    function restoreIcon_(par){
        var smb=par[0];
        var a=par[1];
        smb.simbolReference[a].visible = true;
    }

    function delayedAnimation_(smb,a){
        gameClass_.logger("anim symbols")
        if (spinManager_.gotError()==true)return;
        var add=false;
        var reels=spinManager_.getReels();
        if (spinManager_.getAnimationMap(smb.reel[a],smb.icon[a]).animations==null || ReelConfig.keepShowingAnimation==true) //avoid to add the same animation more then once
        {
            var special=smb.simbolReference[a].special;//save icon special infos before removing the icon
            var beanVal=(smb.simbolReference[a].attributes!=null && smb.simbolReference[a].attributes.beanValue!=null)?smb.simbolReference[a].attributes.beanValue.toString():"1";
            if(spinManager_.getAnimationMap(smb.reel[a],smb.icon[a]).animations!=null){
                spinManager_.getReelGroup(smb.reel[a]).remove(spinManager_.getAnimationMap(smb.reel[a],smb.icon[a]));
            }
            add=true;

            if (game.cache.checkImageKey("anim" + smb.smbNum[a])==true) {
                var ss="anim";
                if (smb.smbNum[a]==15){
                    ss=ss+"13";
                }else{
                    ss=ss+smb.smbNum[a];
                }
                smb.anim[a] = game_.add.sprite(smb.pos[a].x + ReelConfig.icon.width / 2,  smb.pos[a].y +  size_[spinManager_.getSpinReelResp().reel[smb.reel[a]].smb.length] / 2, ss);
            }else{
                smb.anim[a]=smb.simbolReference[a];
            }

            var innerAnim = game_.add.sprite(smb.pos[a].x + ReelConfig.icon.width / 2,  smb.pos[a].y +  size_[spinManager_.getSpinReelResp().reel[smb.reel[a]].smb.length] / 2, "iconInnerAnim_" +spinManager_.getSpinReelResp().reel[smb.reel[a]].smb.length);
            innerAnim.alpha=.65;
            innerAnim.anchor.set(.5, .5);
            innerAnim.animations.add("anim");
            innerAnim.scale.x = 1;
            innerAnim.scale.y = 1;
            if (game.cache.checkImageKey("anim" + smb.smbNum[a])==true) {
                smb.anim[a].anchor.set(.5, .5);
                smb.anim[a].animations.add("anim");
                smb.anim[a].scale.x = 1;
                smb.anim[a].scale.y = 1;
                smb.anim[a].smbNum = smb.smbNum[a];
                smb.anim[a].iconNum=smb.icon[a];
                smb.simbolReference[a].visible = false;
                smb.simbolReference[a] = smb.anim[a];
                smb.anim[a].special = special;
                if (smb.smbNum[a]==8 ||smb.smbNum[a]==9 ||smb.smbNum[a]==10 || smb.smbNum[a]==11 || smb.smbNum[a]==12 || smb.smbNum[a]==13|| smb.smbNum[a]==15){
                    var F=iconAdjustment_(spinManager_.getSpinReelResp().reel[smb.reel[a]].smb.length,smb.anim[a],smb.smbNum[a],spinManager_.getFrameMW(smb.reel[a],smb.icon[a]));
                    smb.anim[a].F=F;
                    if (smb.smbNum[a]==11 || smb.smbNum[a]==12 || smb.smbNum[a]==15){
                        smb.anim[a].BG= spinManager_.getTileMW(smb.reel[a],smb.icon[a]);
                    }
                }
            }
            displayManager_.getGroup("winGlow").add(innerAnim);
            spinManager_.getReelGroup(smb.reel[a]).add(smb.anim[a]);
            if (F!=null){
                //add caracter frame to cover the animation borders
                spinManager_.getReelGroup(smb.reel[a]).add(F);
            }else{
                var tile= spinManager_.getTileMW(smb.reel[a],smb.icon[a]);
                setTimeout(animateTile_,500,tile);

            }

            if (spinManager_.getSpinReelResp().reel[smb.reel[a]].smb.length>=5 && smb.smbNum[a]!=8 && smb.smbNum[a]!=9 && smb.smbNum[a]!=10){
                var ratio=(size_[spinManager_.getSpinReelResp().reel[smb.reel[a]].smb.length]/smb.anim[a].height)+ ((smb.smbNum[a]==11)?.07:.1);
                smb.anim[a].scale.x=Math.min(ratio,1);
                smb.anim[a].scale.y=Math.min(ratio,1);
            }


            //animGroup_.add(smb.anim[a]);
            spinManager_.setAnimationMap(smb.reel[a],smb.icon[a],smb.anim[a]);
            //TweenMax.to(smb.anim[a].scale,.4,{delay:1.3,x:1.1,y:1.1,ease:Power1.easeOut});

            smb.anim[a].animations.play("anim", (gameClass_.getCompulsivePlayer())?36:24, false, false, restoreIcon_, [smb, a]);//todo parametric loop
            innerAnim.play("anim", (gameClass_.getCompulsivePlayer())?36:24, false, true);//todo parametric loop
        }else{
            smb.anim[a]=spinManager_.getAnimationMap(smb.reel[a],smb.icon[a]);
            smb.simbolReference[a]=smb.anim[a];
            if (smb.smbNum[a]!=13) {
                smb.anim[a].animations.play("anim", (gameClass_.getCompulsivePlayer())?36:24, false, false, restoreIcon_, [smb, a]);//todo parametric loop
            }
        }

        reelSmb[smb.reel[a]].tumbleObj.push(smb.anim[a]);
        smb.anim[a].alpha=1;

    }

    function bounce(txt){
        TweenMax.to(txt.scale,.4,{x:1,y:1,ease:Bounce.easeOut,onComplete:move,onCompleteParams:[txt]});
    }

    function move(txt){
        TweenMax.to(txt,2,{alpha:0,y:txt.y-200,onComplete:kill,onCompleteParams:[txt]});
    }

    function kill(txt){
        txt.visible=false;
        txt.destroy();
    }

    function animateTile_ (tile){
        if (hasBeenCapped_>0)return
        tile.anchor.set(.5, .5);
        tile.animations.add("anim");
        tile.animations.play("anim", 24, false, false, endTile_, tile);//todo parametric loop
    }

    function endTile_(tile){
        tile.visible=false;
        tile.setFrame(0);
    }

    function iconAdjustment_(smbNum,image,icon,frame){

        //create animation frame based on icon frame pos, this will be added later to the reel group
        if (icon >10){
            var F = game_.add.sprite(frame.x,frame.y, "smbFrame_w_" + smbNum);
        }else{
            var F = game_.add.sprite(frame.x,frame.y, "smbFrame_" + smbNum);
        }
        F.scale.x=1;
        F.scale.y=1;
        F.anchor.set(.5,.5);

        //if (icon==11 || icon ==12)return F;
        image.cropEnabled=true;

            if (smbNum==7) {
                if (smbNum==9){
                    var mask_ = new Phaser.Rectangle(0, 35, frame.width, frame.height);
                }else{
                    var mask_ = new Phaser.Rectangle(0, 15, frame.width, frame.height);
                }

            }else if (smbNum==6){
                 if (smbNum==9){
                    var mask_ = new Phaser.Rectangle(0, 25, frame.width, frame.height);
                 }else{
                    var mask_ = new Phaser.Rectangle(0, 15, frame.width, frame.height);
                 }

            }else if (smbNum==5){
                var mask_ = new Phaser.Rectangle(0, 10, frame.width, frame.height);
            }else if (smbNum==4){
                var mask_ = new Phaser.Rectangle(0, 5, frame.width, frame.height);
            }else{
                var mask_ = new Phaser.Rectangle(0, 0, frame.width, frame.height);
            }

        if (icon==13 ||icon==15 ){
            if (smbNum==7) {//ok
                var mask_ = new Phaser.Rectangle(0, 145, frame.width, frame.height);
            }else if (smbNum==6){//ok
                var mask_ = new Phaser.Rectangle(0, 140, frame.width, frame.height);
            }else if (smbNum==5){//ok
                var mask_ = new Phaser.Rectangle(0, 120, frame.width, frame.height);
            }else if (smbNum==4){//ok
                var mask_ = new Phaser.Rectangle(0, 110, frame.width, frame.height);
            }else if (smbNum==3){//ok
                var mask_ = new Phaser.Rectangle(0, 60, frame.width, frame.height);
            }else{//ok
                var mask_ = new Phaser.Rectangle(0, 0, frame.width, frame.height);
            }
        }else if (icon==11){
            if (smbNum==7) {
                var mask_ = new Phaser.Rectangle(0, 40, frame.width, frame.height);
            }else if (smbNum==6){
                var mask_ = new Phaser.Rectangle(0, 27, frame.width, frame.height);
            }else if (smbNum==5){
                var mask_ = new Phaser.Rectangle(0, 15, frame.width, frame.height);
            }
        }else if (icon==12){
            if (numIcon_==7) {
                var mask_ = new Phaser.Rectangle(0, 100, frame.width, frame.height);
            }else if (numIcon_==6){
                var mask_ = new Phaser.Rectangle(0, 87, frame.width, frame.height);
            }else if (numIcon_==5){
                var mask_ = new Phaser.Rectangle(0, 77, frame.width, frame.height);
            }else if (numIcon_==4){
                var mask_ = new Phaser.Rectangle(0, 70, frame.width, frame.height);
            }else if (numIcon_==3){
                var mask_ = new Phaser.Rectangle(0, 40, frame.width, frame.height);
            }else{
                var mask_ = new Phaser.Rectangle(0, 0, frame.width, frame.height);
            }
        }

        image.crop(mask_);
        image.updateCrop();
        return F;
    }

    function fadeAway_(obj){
        gameClass_.unSetMask();
        obj.visible=false;
        displayManager_.getGroup("reels").remove(obj);
        displayManager_.getGroup("winGlow").remove(obj);
        obj=null;
    }

    function restoreIcons(){
        spinManager_.restoreIcons(previousReels_);
    }

    var previousReels_;
    function tumble_(){
        displayManager_.getGroup("wild").removeAll();
        gameClass_.logger("calling tumble")
        if (spinManager_.gotError()==true)return;
        previousReels_=spinManager_.getSpinReelResp().reel;
        gameClass_.successiveWinning((gameClass.hasScatter())?gameClass.getNumTumbles():undefined);
        if (tumbling_==true) {
            wildManager_.clearWild(0);
            var tumble = false;
            for (var a in wins) {
                if (wins[a] != undefined) {
                    var index = 10;
                    for (var s in wins[a].smbNum) {
                        if(wins[a].tumble[s]) {
                            reelSmb[wins[a].reel[s]].index.push(wins[a].icon[s]); //tumbling icons
                            reelSmb[wins[a].reel[s]].newSmbs = spinManager_.getSpinReelResp().reel[wins[a].reel[s]];  //next spin result
                        }
                    }
                }
                tumble = true;
            }

            for (var b = 0; b < ReelConfig.numReels; b++) {
                spinManager_.tumble(b, reelSmb[b],previousReels_);
                if (reelSmb[b]!=undefined && reelSmb[b].index.length>0){
                    //setTimeout (tumbleSound_,(gameClass_.getCompulsivePlayer())?100:280*b,b);
                }
            }

            setTimeout(soundManager_.playSound,(gameClass_.getCompulsivePlayer())?100:200,"tumble_0");
            if (tumble) {
                if (gameClass_.endTumble != null) setTimeout(gameClass_.endTumble, (gameClass_.getCompulsivePlayer())?250:500, .12, 1, 2.5);
            }

        }else{
            //setTimeout(gameClass_.setChange,1000,false);
        }
    }

    function tumbleSound_(reel){
        soundManager_.playSound("tumble_"+reel);
    }

    function scaleBack_(anim){
        TweenMax.to(anim.scale,.3,{x:1.15,y:1.15,onComplete:riScaleBack_,onCompleteParams:[anim]})
    }

    function riScaleBack_(anim){
        TweenMax.to(anim.scale,.3,{x:1,y:1})
    }

    function initLineParams() {
        revert_ = false;
        ct_ = 0;
    }

    function startFallsDown_(ob){
        //coins falls down in the first tween direction
        if (ob.xVar>960) {
            ob.xVar = Util.getRandomInt(ob.xVar+100, ob.xVar + 100);
        }else if (ob.xVar>640){
            ob.xVar=Util.getRandomInt(ob.xVar+50,ob.xVar+50);
        }else if (ob.xVar>320){
            ob.xVar=Util.getRandomInt(ob.xVar-50,ob.xVar-50);
        }else{
            ob.xVar=Util.getRandomInt(0,ob.xVar-100);
        }
        TweenMax.to(ob, .60 , {
            y: ob.y+500,
            rotation: ob.angle+35,
            x: ob.xVar, onComplete: endFallsDown_,  onCompleteParams: [ob],ease:Power1.easeIn
        });

    }
    function endFallsDown_(ob){
        ob.destroy();
    }

    function endCoins_(){
        clearInterval(iEndTimO);
        if (winAmtClass_!=null){
            // winAmtClass_.clearAll();
            // winAmtClass_=null;
            partialWinAmt_=0;
        }
    }

    function clearAll_() {
        reset_=true;
        stage_=0;
        resetCentralWin_();
    }

    function clearLineAfterValue_(){
        gameClass_.logger("clear line after")
        stopEvent_=true;
        resetCentralWin_(true);
        clearAll_();
        winEventManager_.clearEvt();
        if (bCompleted_==true){
            displayManager_.getText("lineWin").setText("");
            return;
        }

        var winAmount=winManager_.getWinAmt() ;
        endCoins_();
        writeText_(balanceManager_.getCurrencySmb()+ "" + Util.formatNumber(winAmount,Util.getNubersOfDecimal()));

    }

    function startForceUpdate(){
        gameClass_.logger("1 clear line after")
        coinWinTxt_.setText("");

        //winAmtManager_.showShortWin( tumblingWin_, null, null, null,"Total WIN");
        bCompleted_=true;
        reset_=true;
    }

    function fakeEvent(){

    }

    function findWinRange_(amt){
        var coins=balanceManager_.getCoinValue();

        if(balanceManager_.getShowIncredits()==true) {
            coins= lineManager_.getLinesNumber();
        }
        var number=winAnim.winClasses_.length-1;
        for (var a in winAnim.winClasses_) {
            if (amt > winAnim.winClasses_[a]* coins ) {
                number = Number(a);
            }
        }

        return number;
    }

    function findWinRangeB_(amt){
        var coins=balanceManager_.getCoinValue();

        if(balanceManager_.getShowIncredits()==true) {
            coins= lineManager_.getLinesNumber();
        }
        var number=winAnim.winClasses_.length-1;
        for (var a in winAnim.winClasses_){
            if(amt> winAnim.winClasses_[a]* coins) {
                number = Number(a-1);
            }
        }
        return number;
    }

    function getInterruptedWinAnim_(){
        return !bCompleted_;
    }

    function completeValue_(){
        if (freeSpinsManager_.getIsInFs()==false || freeSpinsManager_.getFsNumber()==-999) {
            TweenMax.to(coinWinTxt_, .3, {alpha:1, onComplete: startUpdate,
                onCompleteParams:[tumblingWin_,lineWinAmt_],
                ease: Power1.easeIn});
        }else{
            setTimeout(startUpdate,1000,tumblingWin_,lineWinAmt_);
        }
    }

    function updateValue_(par){
        var amt=par.val;
        if (balanceManager_.getShowIncredits()==true)amt=  Util.getNumericValue(amt)/balanceManager_.getCoinValue()*lineManager_.getLinesNumber();
        if (Util.getNumericValue(amt)> stages_[stage_] && reset_==false){
            changeCentralWinStage_();
        }
    }

    function updateValue1_(txt){
        if (!getOrientation() == "portrait") {
            if (coinWinTxt_.text.length >= 12) {
                coinWinTxt_._fontSize = 40;
            } else if (coinWinTxt_.text.length >= 10) {
                coinWinTxt_._fontSize = 42;
            } else if (coinWinTxt_.text.length >= 6) {
                coinWinTxt_._fontSize = 44;
            } else {
                coinWinTxt_._fontSize = 46;
            }
        }else{
            coinWinTxt_._fontSize = 46;
        }
    }

    function completeValueLast_(){
        if (gameClass.getUpdateLockedReels!=undefined && gameClass.getUpdateLockedReels()==true){ //todo add
            setTimeout(completeValueLast1_,2000);
        }else {
            completeValueLast1_();
        }
    }

    function completeValueLast1_(){
        if (freeSpinsManager_.getIsInFs() == false || freeSpinsManager_.getFsNumber() == -999) {
            TweenMax.to(coinWinTxt_, .2, {
                alpha:1,
                onComplete: startUpdateLast,
                onCompleteParams: [tumblingWin_, 0],
                ease: Power1.easeIn
            });
        } else {
            startUpdateLast(tumblingWin_, 0);

        }
    }

    function completeBonusValue_(amt,msg){
        updateBonusBalance_ (amt,msg);
        setTimeout(handleBonusEndWinAnimation_,1500);
    }

    function showBonusCentralWinGreetings_(amt){
        //value always coming in coins
        var amtC=  Util.getNumericValue(amt)/balanceManager_.getCoinValue() *lineManager_.getLinesNumber();
        var stages=[];
        if (gameClass_.getWasBuyIn()>0){
            amtC= amt;
            stages[0]=winAnim.winClassesBI_[6]*gameClass_.getWasBuyIn();
            stages[1]=winAnim.winClassesBI_[7]*gameClass_.getWasBuyIn();
            stages[2]=winAnim.winClassesBI_[8]*gameClass_.getWasBuyIn();
        }else{
            stages[0]=winAnim.winClasses_[6];
            stages[1]=winAnim.winClasses_[7];
            stages[2]=winAnim.winClasses_[8];
        }
        displayManager_.getText("lineWin").y=displayManager.groups.centralLineWin.texts.lineWin.y;
        displayManager_.getText("lineWin")._fontSize=46;

        var time=0;
        var index=-1;
        reset_=false;
        for (var a in stages){
            if (Number(amtC)>=stages[a]){
                time =winAnimB.winTxtDuration[findWinRangeB_(amtC )] * 1000;
                index=Number(a);
            }
        }
        if (index>=0){
            resetCentralWin_(true);
            displayManager_.getText("lineWin").alpha=1;
            reset_ = false;
            currentSmb_ = 1;
            currentWinWeight_ = amt;
            stage_ =index+1;

            displayManager_.getGroup("centralWin").visible=true;
            centralWinGroup_.visible=true;
            centralWinGroup_.bgmsg.children[0].visible=true;
            soundManager_.stopSound(winAnim.accuSnd);
            centralFuntainGroup_.visible = true;

            //funtain
            funtainEventManager_.clearEvt();
            var time = winAnim.winTxtDuration [(5+stage_)]  * 1000;
            var numObj= ((stage_==4)?500:200)*stage_;
            var interval=((time)-2000)/numObj;
            for (a = 0; a <= numObj; a++) {
                funtainEventManager_.addEvtForce(startNewObject_,interval);
                if (a%20==0)funtainEventManager_.addEvtForce(startCoinsSound_,0);
            }
            funtainEventManager_.triggerEvt();

            //sounds
            soundManager_.playSound("winBgS_"+(Number(stage_) + 6));
            gameClass_.decreaseVolumeBG(winAnimB.winTxtDuration[(Number(stage_) + 6)]*1000);
            //central win
            for (var a=1; a<=centralWinMsgGroups_.length-1;a++) {
                centralWinMsgGroups_[a].alpha = 0;
                centralWinMsgGroups_[a].visible=true;
                centralWinMsgGroups_[a].y=-200;
                centralWinMsgGroups_[a].scale.x=1;
                centralWinMsgGroups_[a].scale.y=1;
                TweenMax.killChildTweensOf(centralWinMsgGroups_[a]);
            }
            for (a in tw2_) {
                if (tw2_[a]!=null)tw2_[a].kill();
            }
            centralWinMsgGroups_[stage_].scale.x=.8;
            centralWinMsgGroups_[stage_].scale.y=.8;
            centralWinMsgGroups_[stage_].y=centralWinMsgPos_[stage_];
            centralWinMsgGroups_[stage_].alpha=1;
            tw2_.push(TweenMax.to(centralWinMsgGroups_[stage_].scale,.2,{x:1.2,y:1.2}));
            tw2_.push(TweenMax.to(centralWinMsgGroups_[stage_].scale,.2,{delay:.2,x:1,y:1}));


            //reset
            setTimeout(finalizeCentralWin_,time);


        }else{
            time=1500;
        }
        return time;
    }



    /*

    function showBonusCentralWinGreetings_(amt){
        //value always coming in coins
        var amtC=  Util.getNumericValue(amt)/balanceManager_.getCoinValue() *lineManager_.getLinesNumber();
        var time=0;
        var index=-1;
        displayManager_.getText("lineWin").y=displayManager.groups.centralLineWin.texts.lineWin.y;
        displayManager_.getText("lineWin")._fontSize=46;
        reset_=false;
        for (var a in stages_){
            if (Number(amtC)>=stages_[a]){
                time =winAnimB.winTxtDuration[findWinRangeB_(amtC )] * 1000;
                index=Number(a);
            }
        }
        if (index>=0){
            resetCentralWin_(true);
            reset_ = false;
            currentSmb_ = 1;
            currentWinWeight_ = amt;
            stage_ = 0;
            changeCentralWinStage_();
            //if(getOrientation()=="portrait")displayManager_.getText("lineWin").y=410;
            var obj={};
            obj.val=0;
            tw_.push(TweenMax.to( obj,winAnim.winTxtDuration[index+6]-1,{val:Number(amt),onUpdate:updateValue_,onUpdateParams:[obj],onComplete:finalizeCentralWin_, onCompleteParams :[index],ease: Power2.easeOut}));

            soundManager_.playSound("winBgS_"+(Number(stage_) + 6));
            gameClass_.decreaseVolumeBG(winAnimB.winTxtDuration[(Number(stage_) + 6)]*1000);
        }else{
            time=1500;
        }
        return time;
    }
    */


    function updateBonusBalance_(amt,msg){
        var amtC=  Util.getNumericValue(amt)/balanceManager_.getCoinValue() *lineManager_.getLinesNumber();
        var time=0;
        var index=-1;

        reset_=true;

        resetCentralWin_();
        endCoins_();
        var index = findWinRange_(amt);
        if (index >= 0 ) {
            for (a in objThrown_){
                if(objThrown_[a]!=null) {
                    objThrown_[a].destroy();
                    objThrown_[a] = null;
                }
            }
            objThrown_=[];

            centralFuntainGroup_.visible = true;
            funtainEventManager_.clearEvt();
            var time = winAnim.winTxtDuration[index]*1000;

            if (index>4) {
                var numObj = Math.min(Math.max((Math.ceil(amtC) / 3), 15), 70);
                var interval = time / numObj;
                for (a = 0; a <= numObj; a++) {
                    funtainEventManager_.addEvtForce(startNewSmallObject_, interval);
                    if (a % 10 == 0) funtainEventManager_.addEvtForce(startCoinsSound_, 0);
                }
                funtainEventManager_.triggerEvt();
                //scaleR coinWinTxt_.scale.x = winAnim.scaleFactor[index];
                //scaleR coinWinTxt_.scale.y = winAnim.scaleFactor[index];
                coinWinTxt_.setText(balanceManager_.getCurrencySmb() + "" + Util.formatNumber(amt, Util.getNubersOfDecimal()));
                setTimeout(finalizeCentralWin_,winAnim.winTxtDuration[index]*1000,index);
            }
        }
        winAmtManager_.showIstantUpdateWin(amt,msg);
        bCompleted_=true;
        soundManager_.playSound("winAmountFall");
    }

    function resetCentralWin_(now){
        stage_=0;
        totalDuration_=0;

        if (tw2>0)clearInterval(tw2);
        if (tw3>0)clearInterval(tw3);
        if (to>0)clearInterval(to);
        tw1=null;
        tw2=0;
        tw3=0;

        for (a in tw_) {
            if (tw_[a]!=null)tw_[a].kill();
        }

        if (now==true){
            removeCW_();
        }else{
            removeCW_();
        }
        funtainEventManager_.clearEvt();
    }

    function removeCW_(a){
        clearWinText_();
        centralWinGroup_.visible=false;
        for (var a=1; a<=centralWinMsgGroups_.length-1;a++) {
            centralWinMsgGroups_[a].alpha = 0;
            centralWinMsgGroups_[a].y=-200;
            centralWinMsgGroups_[a].scaleX=1;
            centralWinMsgGroups_[a].scaleY=1
            TweenMax.killChildTweensOf(centralWinMsgGroups_[stage_]);
        }
        centralWinGroup_.bgmsg.children[0].visible=false;
    }

    function clearWinText_(){
        coinWinTxt_.alpha=0;
    }

    function stopBigWinAnimation_(){
        soundManager_.stopSound(winAnim.accuSnd);
        for (var a=1; a<=centralWinMsgBg.length-1;a++) {
            centralWinMsgBg[a].alpha=0;

            centralWinMsgTxt[a].alpha=0;
            centralWinMsgTxt[a].scaleX=1;
            centralWinMsgTxt[a].scaleY=1;
            //TweenMax.killChildTweensOf(centralWinMsgGroups_[stage_]);
        }
    }


    var bookChange_=0;
    function changeCentralWinStage_(flip){
        if (reset_==true)return;
        buttonE.enable=true;
        displayManager_.getGroup("centralWin").visible=true;
        centralWinGroup_.visible=true;
        centralWinGroup_.bgmsg.children[0].visible=true;
        if (!getOrientation() != "portrait") {
            coinWinTxt_.y = 552;
        }else{
            coinWinTxt_.y = 540;
        }
        coinWinTxt_._fontSize=56;
        coinWinTxt_.alpha=1;
        if (stage_==0) {
            for (var a=1; a<=centralWinMsgGroups_.length-1;a++) {
                centralWinMsgGroups_[a].alpha = 0;
                centralWinMsgGroups_[a].y=-200;
                centralWinMsgGroups_[a].scale.x=1;
                centralWinMsgGroups_[a].scale.y=1
                TweenMax.killChildTweensOf(centralWinMsgGroups_[stage_]);
            }
        }
        soundManager_.stopSound(winAnim.accuSnd);

        stage_++;

        if (stage_==1) {
            centralWinGroup_.visible=true;
            centralWinMsgGroups_[1].visible=true;
            centralWinMsgGroups_[1].alpha=0;
            centralWinMsgGroups_[2].visible=true;
            centralWinMsgGroups_[2].alpha=0;
            centralWinMsgGroups_[3].visible=true;
            centralWinMsgGroups_[3].alpha=0;

            tw2_.push(TweenMax.to(centralWinMsgGroups_[1],.4,{delay:.5,alpha:1,y:centralWinMsgPos_[1],ease:"power1.in"}));

            tw2=setInterval(checkVal,200)


        }else{
            bookChange_++;
        }


        centralFuntainGroup_.visible = true;
        funtainEventManager_.clearEvt();
        var time = winAnim.winTxtDuration [(5+stage_)]  * 1000;
        time=time-1000;
        var numObj= ((stage_==4)?500:200)*stage_;
        var interval=((time)-2000)/numObj;
        for (a = 0; a <= numObj; a++) {
            funtainEventManager_.addEvtForce(startNewObject_,interval);
            if (a%20==0)funtainEventManager_.addEvtForce(startCoinsSound_,0);
        }
        funtainEventManager_.triggerEvt();

    }

    function playMap_(){

    }

    function change_(s){
        if (reset_==true)return;

        for (var a=1; a<=centralWinMsgGroups_.length-1;a++) {
            centralWinMsgGroups_[a].alpha = 0;
            centralWinMsgGroups_[a].y=-200;
            centralWinMsgGroups_[a].scale.x=1;
            centralWinMsgGroups_[a].scale.y=1;
            TweenMax.killChildTweensOf(centralWinMsgGroups_[a]);
        }
        for (a in tw2_) {
            if (tw2_[a]!=null)tw2_[a].kill();
        }

        tw2_.push(TweenMax.to(centralWinMsgGroups_[s-1],.3,{alpha:0}));
        tw2_.push(TweenMax.to(centralWinMsgGroups_[s-1].scale,.2,{x:.8,y:.8}));
        centralWinMsgGroups_[s].scale.x=.8;
        centralWinMsgGroups_[s].scale.y=.8;
        centralWinMsgGroups_[s].y=centralWinMsgPos_[s];
        centralWinMsgGroups_[s].alpha=1;
        tw2_.push(TweenMax.to(centralWinMsgGroups_[s].scale,.2,{x:1.2,y:1.2}));
        tw2_.push(TweenMax.to(centralWinMsgGroups_[s].scale,.2,{delay:.2,x:1,y:1}));

        bookChange_=0;
    }

    function checkVal(){
        if (bookChange_>0 && stage_>1){
            gameClass_.logger("sb2 "+bookChange_)
            this.visible=false;
            this.alpha=false;
            change_(stage_);
        }
    }

    function startNewSmallObject_(){
        if (ReelConfig.newUI){
            if ( getOrientation()=="portrait"){
                centralFuntainGroupSmallObj_.y=window.innerHeight;
            }else{
                centralFuntainGroupSmallObj_.y=0;
            }
        }
        if (Util.getRandomInt(1,100)>50)
            var ob = game_.add.sprite(640, 800, "part-1" );
        else
            var ob = game_.add.sprite(640, 800, "f-part-1" );
        ob.anchor.set(.5, .5);
        ob.angle=Util.getRandomInt(1,180);
        ob.animations.add("anim");
        ob.alpha = 0.5;
        ob.xVar=Util.getRandomInt(350, 850);
        TweenMax.to(ob, .1 + Util.getRandomInt(20, 50) / 100, {
            alpha: .8,
            rotation:Util.getRandomInt(0, 90),
            y: Util.getRandomInt(550, 490),
            x: ob.xVar, onComplete: startFallsDown_,  onCompleteParams: [ob],ease:Power1.easeOut
        });
        ob.animations.play("anim", Util.getRandomInt(24, 34), true, false, null, null);//todo parametric loop
        ob.scale.x = Util.getRandomInt(100,80)/100;
        ob.scale.y = ob.scale.x;
        objThrown_.push(ob);
        centralFuntainGroupSmallObj_.add(ob);
        centralFuntainGroupSmallObj_.visible=true;

    }

    function startNewObject_(){
        if (ReelConfig.newUI){
            if ( getOrientation()=="portrait"){
                centralFuntainGroup_.y=window.innerHeight;
            }else{
                centralFuntainGroup_.y=0;
            }
        }

        if (Util.getRandomInt(1,100)>50)
            var ob = game_.add.sprite(640, 840, "part-" + Util.getRandomInt(1,stage_));
        else
            var ob = game_.add.sprite(640, 840, "f-part-" + stage_);
        ob.anchor.set(.5, .5);
        ob.angle=Util.getRandomInt(1,180);
        ob.animations.add("anim");
        ob.alpha = 0.5;
        ob.xVar=Util.getRandomInt(100, 1100);
        TweenMax.to(ob, .3 + Util.getRandomInt(20, 50) / 100, {
            alpha: .8,
            rotation:Util.getRandomInt(0, 90),
            y: Util.getRandomInt(300, -30),
            x: ob.xVar, onComplete: startFallsDown_,  onCompleteParams: [ob],ease:Power1.easeOut
        });
        ob.animations.play("anim", Util.getRandomInt(24, 34), true, false, null, null);//todo parametric loop
        ob.scale.x = Util.getRandomInt(displayManager.groups.centralWin.minScale,displayManager.groups.centralWin.minScale, displayManager.groups.centralWin.minScale,displayManager.groups.centralWin.maxScale)/100;
        ob.scale.y = Util.getRandomInt(displayManager.groups.centralWin.minScale,displayManager.groups.centralWin.minScale, displayManager.groups.centralWin.minScale,displayManager.groups.centralWin.maxScale)/100;
        objThrown_.push(ob);
        centralFuntainGroup_.add(ob);
    }

    function startIdleCycle_(){

    }


    function writeText_(amt){
        /*
        Game messages - ‘footer-top-message’
        Balance               - ‘footer-bottom-balance’
        Clock                   - ‘footer-bottom-clock’
         */
        if (ReelConfig.newUI) {
            if (framework.isTouch()&&window.innerHeight > window.innerWidth) {
                //portrait
                $("#footer-top-win").html(amt);
            } else {
                $("#footer-bottom-message").html(amt);
            }
        }else{
            coinWinTxt_.setText(amt);
        }
    }


    var me = {
        stopBigWinAnimation:stopBigWinAnimation_,
        prepareWinnings: prepareWinnings_,
        clearLine: clearLine_,
        clearAll:clearAll_,
        clearOverLine:clearOverLine_,
        showLine: showLine_,
        clearLineAfterValue:clearLineAfterValue_,
        getInterruptedWinAnim:getInterruptedWinAnim_,
        stopEvents:stopEvents_,
        idle:idle_,
        showBonusWin:showBonusWin_,
        showBonusCentralWinGreetings:showBonusCentralWinGreetings_,
        getTotalDuration:function(){
            if (reset_)return 0;
            //return the total duration of winline process
            var index=findWinRange_(tumblingWin_);
            var additionalTime= winAnim.centralWinDur[index]*1000;
            totalDuration_=(winAnim.winTxtDuration[index]*1000);

            return additionalTime +totalDuration_;
        },
        getPartialDuration:function(){
            if (reset_)return 0;
            //return the total duration of winline process
            var index=findWinRange_(lineWinAmt_);
            totalDuration_=(winAnim.winTxtDuration[index]*1000);

            return totalDuration_;
        },
        completeValue:completeValue_,
        completeBonusValue:completeBonusValue_,
        startIdleCycle:startIdleCycle_,
        resumeTumbling:resumeTumbling_,
        doOk:doOk_,
        hackWin:function (amt) {
            var index = findWinRange_(amt);
            if (index > 0) {
                soundManager_.playSound("winBg_" + winAnim.winSound_[index]);   //total bg sound
                winAmtClass_.showWin(amt, null, updateValue1_, completeValueLast_, 0, null, winAnim.scaleFactor[index], .2);
            } else {
                winAmtManager_.showIstantUpdateWin(amt, "Total WIN");
                coinWinTxt_.setText("");

                bCompleted_ = true;
                winManager_.resetWinAmt();
                bSkip_ = true;
            }
        },
        getTotalTumblingWin:function (){
            if(tumblingWin_!=undefined && balanceManager_.getShowIncredits() == true) {
                tumblingWin_=  Number(Util.formatNumber((tumblingWin_ * (balanceManager_.getCoinValue() / lineManager_.getLinesNumber()))+0.0001,2));
            }
            return (tumblingWin_!=undefined)?tumblingWin_:0;
        }

    }

    initClass_();
    return me;
}

