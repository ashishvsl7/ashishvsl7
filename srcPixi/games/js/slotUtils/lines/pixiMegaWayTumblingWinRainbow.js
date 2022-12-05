/**
 * KiS Framework, Created by Fabry on 28/04/2020.
 * handles winnings on 1Million MW slot
 */
function PixiWayTumblingWinnings(gameRef, gameClass) {
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
    size_[2]=321;
    size_[3]=214;
    size_[4]=161;
    size_[5]=129;
    size_[6]=107;
    size_[7]=92;
    var hasBeenCapped_=0;
    var stopped_=0;
    var smallCoinShower=new SmallCoinShower(game,gameClass_,displayManager_.getGroup("centralFuntainSmallObj"));
    var coinShower=new BigWinCoinShower(game,gameClass_,displayManager_.getGroup("centralWin")["group"]);
    var tiersAnimationFrames=[];

    function initClass_() {
        tiersAnimationFrames[1]="bigWin";
        tiersAnimationFrames[2]="epicWin";
        tiersAnimationFrames[3]="ultraWin";

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

        //central win
        centralWinGroup_=displayManager_.getGroup("centralWin");
        centralWinMsgGroups_[1]=displayManager_.getGroup("centralWin").bigWin.children[0];

        winEventManager_ = new EventManagerCheck();


        buttonE={};
        for (var a in displayManager.groups.centralLineWin.buttons) {
            buttonE = new PixiButton(game_, displayManager.groups.centralLineWin.buttons[a].x, displayManager.groups.centralLineWin.buttons[a].y, "bgAlpha", me[displayManager.groups.centralLineWin.buttons[a].evt]);
            buttonE.alpha=0;
            buttonE.width=5000;
            buttonE.height=6000;
            buttonE.x=0;
            buttonE.y=-500;
            buttonE.setAnchor(0, 0);
            coinWinGroup_.add_Child(buttonE);
        }
        buttonE.visible=false;
    }

    //x20, 50x,  x100
    var winAnim = {
        "winClasses_":    [0,   .5,   1,   2,   4, 10,  20,  50, 100],
        "winClassesBI_":    [1,   1,  1,  1, 1, 1, 2, 5, 10],
        "winSound_":    [0,   0,  2,  3, 4, 5, 6, 7, 8],
        "winTxtDuration": [0.2,  0.5, .5, 1,   1.5, 3, 4,   5,    6],
        "centralWinDur": [0, 0, 0, 0, 0, 0, 2, 2, 2],
        "scaleFactor": [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5],
        "bigWinText": [0, 0, 0, 0, 0, 0, 1, 1, 1],
        "winSndEffect": ["", "", "", "", "", "", "", "", "", "", "", ""],
        "bgLoopsNum": [2, 4, 5, 5, 6, 7, 8, 8, 8],
        "accuSnd": "incWin"
    }

    var winAnimB=winAnim;

    function doOk_() {
        console.log("bE "+ buttonE.enable + " " + stopped_)
        if(buttonE.enable && stopped_==0) {
            buttonE.visible=false;
            stopped_ = 1;
            for (var a=1; a<=centralWinMsgGroups_.length-1;a++) {
                centralWinMsgGroups_[a].alpha = 0;
                centralWinMsgGroups_[a].visible=false;
                TweenMax.killChildTweensOf(centralWinMsgGroups_[a]);
            }
            if (centralTw != null) centralTw.timeScale(200);
            for (a in tw_) {
                if (tw_[a]!=null)tw_[a].timeScale(200);
            }
            soundManager_.stopSound("incWin");
            smallCoinShower.clearEvt();
            coinShower.clearEvt();
            gameClass_.lineCompletion(true);
            return
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
        console.log("/////////////////////////////////////////////////eeeee0001")
        smallCoinShower.clearEvt();
        coinShower.clearEvt();
        if (tw3>0)clearInterval(tw3);
    }

    function showBonusWin_(amt,amtCash){
        clearLine_();
        reset_=false;
        //display central coins
        stepInc_= 2;
        var bkp=winAnimB.accuSnd;
        if (gameClass_.getCompulsivePlayer())winAnimB.accuSnd="incWin";
        if (ReelConfig.winType=="BounceWin")
            winAmtClass_= new BounceWin(game_,gameClass_, winAnimB,"lineWin");
        if (ReelConfig.winType=="SimpleWin")
            winAmtClass_= new SimpleWin(game_,gameClass_, winAnimB,"lineWin");

        if (balanceManager_.getShowIncredits()==false) {
            winAmtClass_.showIstantUpdateWin(amtCash);
        }else{
            winAmtClass_.showIstantUpdateWin(amt);
        }

        coinWinTxt_.alpha=1;
        return 1500;
    }

    function stopIncSound_() {
        soundManager_.stopSound(winAnimB.accuSnd);
    }

    function handleBonusEndWinAnimation_(){
        if (gameClass_.isSpinning()==true)return;
        // buttonManager_.applyState("NH");
        // buttonManager_.applyRestore();
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
        buttonE.visible=false;
        prevPreviousReels_=spinManager_.getSpinReelResp().reel;
        winAmount_=winManager_.getWinAmt();
        lineWinAmt_= winManager_.getWinAmt();//changed on the 10th Gen 2020 because we've found out Louis was capping lineWin to 2500. was getLineWinAmt
        tumblingWinCoins_=spinManager_.getSpinResp().win.lineCoinsWin;
        wins=winManager_.getTumblingWinningSymbols();
        mult_=(spinManager_.getSpinResp().freeSpin!=undefined)?spinManager_.getSpinResp().freeSpin.multiplier:1;
        fsType_=(spinManager_.getSpinResp().freeSpin!=undefined)?spinManager_.getSpinResp().freeSpin.type:"tumble";
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
        centralTw=null;

        pop_=false;
        tumbling_=false;
        for (var b = 0; b <  ReelConfig.numReels + getFSNum_(); b++) {
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

    function removeAll(group){
        while(displayManager_.getGroup(group).children[0]) {
            displayManager_.getGroup(group).removeChild(displayManager_.getGroup(group).children[0]);
        }
    }

    var previousReels_;
    function showLine_() {
        displayManager_.getGroup("stickyWilds").visible = false;
        removeAll("stickyWilds");
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
        buttonE.visible=true;
        winEventManager_.addEvent(fakeEvent,0,gameClass_.getTumblingReq);//wait for response to come after tumbling or convert
        winEventManager_.addEvent(fakeEvent,10,spinManager_.getTumbleDone);//wait for previoustumbleDone
        if (tumbling_ && freeSpinsManager_.getIsInFs() && gameClass.getUpdateLockedReels!=undefined && gameClass.getUpdateLockedReels()==true)winEventManager_.addEvent(fakeEvent,(gameClass_.getCompulsivePlayer())?2200:2700);
        if (gameClass_.getMultiplier!=undefined && gameClass_.getMultiplier()==true)winEventManager_.addEvent(fakeEvent,1000);
        for (var a in wins) {
            if (wins[a] != undefined) {
                //normal sequence without the explorer
                winEventManager_.addEvent(amimIcon_, 0,null, [wins[a]]);//anim icon
                for (var b in wins[a].smbNum) {
                    if ((wins[a].smbNum[b] == 11 && gameClass.hasWildActive(11)==false) || (wins[a].smbNum[b] == 12 && gameClass.hasWildActive(12)==false) || (wins[a].smbNum[b] == 13 && gameClass.hasWildActive(13)==false)) {
                        wild=true;
                    }
                }
            }
        }
        winEventManager_.addEvent(playIconWinningSounds_, 0,null,[tumblingWin_+winAmount_]);

        if (hasBeenCapped_ == 0) {
            if (tumbling_) winEventManager_.addEvent(tumble_, 1000);
            winEventManager_.addEvent(fakeEvent, 500, spinManager_.tumbleDone)
            if (tumbling_) winEventManager_.addEvent(restoreIcons, 1000);
            if (freeSpinsManager_.getIsInFs() && spinManager_.getFsResp() != undefined && spinManager_.getFsResp().won != undefined && spinManager_.getFsResp().won > 1) {
                winEventManager_.addEvent(fakeEvent, 2000);
            }

            winEventManager_.addEvent(showCentralWin_, 0, gameClass_.getHarpPlayed, [fsType_, lineWinAmt_]);
            if (freeSpinsManager_.getIsInFs()) winEventManager_.addEvent(updateFreeSpinsMult, 500);
            if (gameClass.hasScatter() && lineWinAmt_ == 0) {
                winEventManager_.addEvent(unlock_, 300);
            }
        } else {
            winEventManager_.addEvent(showCentralWin_, 400, null, [fsType_, hasBeenCapped_]);
            spinManager_.getFsResp().object.freespinsRemaining = 0;
            bCompleted_ = true;
            gameClass_.lineCompletion(true);
            winEventManager_.addEvent(freeSpinsManager_.hitCap, winAnim.winTxtDuration[index] * 1000, null, [lineWinAmt_]);

        }
        winEventManager_.addEvent(updateBalance_,500);

        winEventManager_.triggerEvt();
    }

    function unlock_() {
        gameClass_.lineCompletion(true);
        bCompleted_ = true;
        var max = 40000 * 10;//just something from 1M that will never apply for WW
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

    function playIconWinningSounds_(amt){
        var smbWin=[];

        var iMaxSmb=0;
        for (var a in wins) {
            if (wins[a] != undefined) {
                var num = 10;
                var def = 0;  //def higher icon
                for (var b = wins[a].smbNum.length; b >= 0; b--) {
                    if (wins[a].smbNum[b]!=undefined) {
                        if (smbWin[wins[a].smbNum[b]] == undefined) smbWin[wins[a].smbNum[b]] = {};
                        smbWin[wins[a].smbNum[b]] = true;
                    }
                    if (wins[a].realSmbNum[b] > def ) {
                        def = wins[a].realSmbNum[b];
                    }
                }
                num = def;
                iMaxSmb = (num > iMaxSmb) ? num : iMaxSmb;//get the high symbol to play its own sound
            }
        }
        console.log("max smb = " + iMaxSmb)
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
            //gameClass_.decreaseVolumeBG(.4);
            soundManager_.playSound("winBg_" + winAnim.winSound_[index]);   //total bg sound
        }
    }

     function showCentralWin_(params){
        bCompleted_ = true;
        if (gameClass_.getHarpPlayed()==true) {
            if (ReelConfig.winType=="BounceWin")
                winAmtClass_= new BounceWin(game_,gameClass_, winAnim,"lineWin");
            if (ReelConfig.winType=="SimpleWin")
                winAmtClass_= new SimpleWin(game_,gameClass_, winAnim,"lineWin");
            if (reset_ == true) return;
            stopped_=0;
            if (buttonE)buttonE.enable=true;
            var fsType = params[0];
            var lineWinAmt = params[1];
            tumblingWin_ += Number(lineWinAmt);

            if (hasBeenCapped_){
                tumblingWin_=hasBeenCapped_;
            }
            coinWinTxt_.alpha = 1;
            buttonE.visible=true;
            coinWinTxt_.setText("");
            if (spinManager_.gotError() == true) return;
            var index = -1;
            if (gameClass_.getWasBuyIn()>0 && tumblingWin_>0) {
                var line = lineManager_.getLinesNumber();
                //value always coming in coins

                var amtC;
                if (balanceManager_.getShowIncredits() == true) {
                    amtC = (tumblingWin * (balanceManager_.getCoinValue() / lineManager_.getLinesNumber()));
                } else {
                    amtC = tumblingWin_;//  Util.getNumericValue(amt)/balanceManager_.getCoinValue() *lineManager_.getLinesNumber();
                }
                line = 1;
                if (spinManager_.getSpinResp().freeSpin.totalWin > winAnim.winClassesBI_[6] * gameClass_.getWasBuyIn()){
                    stages_[0] = winAnim.winClasses_[8]*balanceManager_.getCoinValue();
                }else{
                    stages_[0] = winAnim.winClassesBI_[6] * gameClass_.getWasBuyIn();
                }
                stages_[1] = winAnim.winClassesBI_[7] * gameClass_.getWasBuyIn();
                stages_[2] = winAnim.winClassesBI_[8] * gameClass_.getWasBuyIn();
                reset_ = false;

                for (var a in stages_) {
                    if (Number(amtC) >= line * stages_[a]) {
                        time = winAnimB.winTxtDuration[findWinRangeB_(amtC)] * 1000;
                        index = Number(a) + 4;
                    }
                }

            } else{
                if(balanceManager_.getShowIncredits()==true){
                    stages_[0]=winAnim.winClasses_[6]*10;
                    stages_[1]=winAnim.winClasses_[7]*10;
                    stages_[2]=winAnim.winClasses_[8]*10;
                }else{
                    stages_[0]=winAnim.winClasses_[6]*balanceManager_.getCoinValue();
                    stages_[1]=winAnim.winClasses_[7]*balanceManager_.getCoinValue();
                    stages_[2]=winAnim.winClasses_[8]*balanceManager_.getCoinValue();
                }
                index = findWinRange_(tumblingWin_);
            }

            if ((spinManager_.getSpinResp()==undefined ||    Number(spinManager_.getSpinResp().win.total) <= 0 || hasBeenCapped_ ) ) {
                if (lineWinAmt > 0 && freeSpinsManager_.getFsWon() == false) {
                    if (index > 1 ||  (index==1 && gameClass_.getWasBuyIn()>0  )) {

                        displayManager_.getText("winValue").setText("");
                        stageProcessed_=0;
                        stageThrough_=[0,0,0];
                        tw_= winAmtClass_.showWin(tumblingWin_, null, updateValue_, completeValueLast2_, (tumblingWin_-lineWinAmt), null, winAnim.scaleFactor[index], winAnim.winTxtDuration[index]);


                        var time = 300 * (findWinRange_(tumblingWin_) + 1);
                        var amt = tumblingWin_;
                        var numObj =  Math.min(Math.max((Math.ceil(amt) ), 15), 70);
                        var interval = time / numObj;
                        smallCoinShower.startFuntain(time,numObj,interval);

                    } else {

                        if (findWinRange_(tumblingWin_) > 4) {
                            if (gameClass_.getWasBuyIn()>0 ) {
                                displayManager_.getText("lineWin").setText(balanceManager_.getCurrencySmb() + "" + Util.formatNumber(tumblingWin_, Util.getNubersOfDecimal()));
                                displayManager_.getText("lineWin").alpha = 1;
                                displayManager_.getText("lineWin").visible = true;
                            }

                            var time = 300 * (findWinRange_(tumblingWin_) + 1);
                            var amt = lineWinAmt;
                            var numObj =  Math.min(Math.max((Math.ceil(amt) ), 10), 40);
                            var interval = time / numObj;
                            smallCoinShower.startFuntain(time,numObj,interval);

                        }

                        if (lineWinAmt > 0 && winAnim.bigWinText[index] == "0") {
                            soundManager_.playSound("amtCentral");
                        }
                        if (findWinRange_(tumblingWin_) > 1) {
                           winAmtClass_.showWin(tumblingWin_, null, null, null, (tumblingWin_ - lineWinAmt), null, winAnim.scaleFactor[index], winAnim.winTxtDuration[index]);
                        }
                        winAmtManager_.showIstantUpdateWin(tumblingWin_, "Total WIN");

                        bCompleted_ = true;
                        // winManager_.resetWinAmt();
                        bSkip_ = true;
                        unlock_();
                        setTimeout(gameClass_.lineCompletion, 100, true);
                        balanceManager_.setCanUpdate(true);

                    }


                } else {
                    if (freeSpinsManager_.getFsWon() == false) {
                        if (gameClass.hasScatter() && lineWinAmt_ == 0) {
                            //handling win 0 with beans only, next resp will process delaystart update
                        } else {
                            delayedStartUpdate_(true, tumblingWin_, 0);
                        }
                    } else {
                        setTimeout(gameClass_.lineCompletion, 100, true);
                        bCompleted_=true
                        gameClass_.setTumblingReq(false);
                    }
                }
            } else {
                winManager_.resetWinAmt();
                if (lineWinAmt > 0) {

                    bCompleted_=true;
                    //winManager_.resetWinAmt();
                    bSkip_=true;
                    index = findWinRange_(tumblingWin_);
                    if (index>1) {
                        TweenMax.to(coinWinTxt_.scale,.2,{x:winAnim.scaleFactor[index]+.2,y:winAnim.scaleFactor[index]+.2,onComplete:updateAfterWinScale_,onCompleteParams:[coinWinTxt_,winAnim.scaleFactor[index]]});
                        winAmtClass_.showWin(tumblingWin_, null, null,  null, (tumblingWin_-lineWinAmt), null, winAnim.scaleFactor[index], 1);
                    }
                    winAmtManager_.showIstantUpdateWin( tumblingWin_ ,"Tumble WIN");

                } else {
                    delayedStartUpdate_(false, tumblingWin_, 0);
                }
            }
            if (freeRoundsManager_.getIsInFr() && freeSpinsManager_.getFsWon()) freeRoundsManager_.updateFrBalance(tumblingWin_);//compensate FS won because Moirai add it to FS tot won risking to display twice
        }else{
            gameClass_.logger("waiting harp to play1")
            setTimeout(showCentralWin_,300,params);
        }
    }

    function updatePrize_(){
        //start the winning central win dispaly during FS
    }

    function idle_(force) {

    }

    function amimIconIdle_(winSmb_) {

    }

    function amimIcon_(params) {
        displayManager_.getGroup("stickyWilds").visible = false;
        removeAll("stickyWilds");
        if (spinManager_.gotError()==true)return;
        var winSmb_=params[0];
        setTimeout(soundPop,800);
        for (var a in winSmb_.smbNum){
            delayedAnimation_(winSmb_,a);
        }
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
        if (("X" +m)!=displayManager_.getText("fsMultValueBig").text ){
            if (m>1){
                displayManager_.getText("fsMultValueBig").setText("X" +m);
                displayManager_.getText("fsMultValueBig").y=-200;
                displayManager_.getText("fsMultValueBig").alpha=1;
                soundManager_.playSound("multiplier");
                displayManager_.getText("fsMultValue").mult=m;
                TweenMax.to(displayManager_.getText("fsMultValueBig"),.4,{y:380,ease:Bounce.easeOut,onComplete:bigMult_,onCompleteParams:[m]})
                if (gameClass.startVibrate)setTimeout(gameClass.startVibrate,300,.1,1,4);
            }
        }
        // todo this was screwing win timing animation bCompleted_=true;
    }

    function bigMult_(m) {
        displayManager_.getText("fsMultValue").setText("X" + m);
        TweenMax.to(displayManager_.getText("fsMultValueBig"), .4, {delay: 1.1, alpha: 0})
        if (m == 5 ) {
            soundManager_.playSound("multiplier_1");
        } else if (m ==10) {
            soundManager_.playSound("multiplier_2");
        } else if (m >15) {
            soundManager_.playSound("multiplier_3");
        }
    }

    function delayedStartUpdate_(last,tumblingWin,win){
        if (gameClass_.getHarpPlayed()==true) {
            if (freeSpinsManager_.getIsInFs() == false) {
            } else {
                //TweenMax.to(coinWinTxt_,0,{alpha:1});
            }
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


                setTimeout(gameClass_.lineCompletion, winAnim.winTxtDuration[index]*1000, true);

                var obj = {};
                obj.val = 0;

                if (freeSpinsManager_.getIsInFs()) {
                    var max = 50000 * 10;//just something from 1M that will never apply for WW
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


                setTimeout(finalizeCentralWin_,index*350,index);

                winAmtManager_.showIstantUpdateWin(tumblingWin, "Total WIN");
            } else {
                bCompleted_ = true;
                winManager_.resetWinAmt();
                bSkip_ = true;
                if (win > 0) winAmtManager_.showIstantUpdateWin(tumblingWin, "Tumble WIN");
            }
        }else{
            gameClass_.logger("waiting harp to play2")
            setTimeout(delayedStartUpdate_,300,last,tumblingWin,win);
        }
    }

    function finalizeCentralWin_(index){
        if (stopped_>0){
            setTimeout(resetCentralWin_,500);
        }else{
            setTimeout(resetCentralWin_,Math.max(winAnim.centralWinDur[index]*1000,2000));
        }
        unlock_();
        gameClass_.lineCompletion(true);
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

    function updateAfterWinScale_(a,scale){
        if (a == null|| a==undefined)return;
        if (a.scale == null || a.scale==undefined)return;
        TweenMax.to(a.scale,.2,{x:scale,y:scale});
    }

    function changeAllHL_(params) {
    }

    function restoreIcon_(par){
//        var smb = par[0];
//        var a = par[1];
//        //
//        if (hasBeenCapped_==false && smb.anim[a].smbNum !=11) {
//           // smb.simbolReference[a].visible = false;
//            //smb.anim[a].visible = false;
//            smb.anim[a] = spriteManager_.addSprite(smb.simbolReference[a].x, smb.simbolReference[a].y, ["tumble_"+ getReelState_(smb.reel[a])+ "_"+spinManager_.getReels()[smb.reel[a]].getIconSize(0),0] );
//            animationManager_.create(smb.anim[a], "tumble_"+ getReelState_(smb.reel[a])+ "_"+spinManager_.getReels()[smb.reel[a]].getIconSize(0),24);
//            if(getReelState_(smb.reel[a])==9){
//                smb.anim[a].y=smb.anim[a].y+92;
//            }
//            smb.anim[a].alpha=0;
//            TweenMax.to(smb.anim[a],.2,{alpha:.4});
//            displayManager_.getGroup("scatter").add_Child(smb.anim[a]);
//            smb.anim[a].setAnchor(.5,0.5)
//            smb.anim[a].smbNum = smb.smbNum[a];
//            smb.anim[a].iconNum = smb.icon[a];
//            smb.anim[a].play(24, false,removeTile_,par);
//
//        }else{
//            smb.simbolReference[a].visible = true;
//        }
    }

    function dispose (obj){
        console.log ("dispose tumble-----")
        displayManager_.getGroup("scatter").removeChild(obj);
    }

    function removeTile_(par){
        var smb=par[0];
        var a=par[1];
        setTimeout(dispose, 100,smb.anim[a]);
        smb.anim[a].visible=false;
        smb.visible=false;
    }

    function delayedAnimation_(smb,a){
        if (spinManager_.gotError()==true)return;
        var add=false;
        var reels=spinManager_.getReels();
        var special=smb.simbolReference[a].special;//save icon special infos before removing the icon

        if(spinManager_.getAnimationMap(smb.reel[a],smb.icon[a]).animations!=null){
            spinManager_.getReelGroup(smb.reel[a]).remove(spinManager_.getAnimationMap(smb.reel[a],smb.icon[a]));
        }
        add=true;
        var ic=smb.smbNum[a];
        var ss="anim";
        if (smb.smbNum[a]==15){
            ss=ss+"13";
        }else{
            ss=ss+smb.smbNum[a];
        }
        smb.simbolReference[a].visible = false;
        smb.anim[a] = spriteManager_.addSpine(smb.pos[a].x + ReelConfig.icon.width / 2,  smb.pos[a].y +  size_[spinManager_.getSpinReelResp().reel[smb.reel[a]].smb.length] / 2, ss,null,null,.25);
        smb.simbolReference[a] = smb.anim[a];
        smb.anim[a].attribute = smb.simbolReference[a].attributes;

        smb.anim[a].smbNum = smb.smbNum[a];
        smb.anim[a].iconNum = smb.icon[a];

        smb.anim[a].special = special;

        var s = spinManager_.getReels()[smb.reel[a]].getSymbol(smb.icon[a]);
        if (s!=undefined){
            s.visible=false;
        }
        smb.simbolReference[a] = smb.anim[a];


        spinManager_.getReelGroup(smb.reel[a]).add_Child(smb.anim[a]);

        //animGroup_.add(smb.anim[a]);
        spinManager_.setAnimationMap(smb.reel[a], smb.icon[a], smb.anim[a]);
        //TweenMax.to(smb.anim[a].scale,.4,{delay:1.3,x:1.1,y:1.1,ease:Power1.easeOut});
        smb.anim[a].play("win_7"+ "_0"+ spinManager_.getSpinReelResp().reel[smb.reel[a]].smb.length,false);
        setTimeout(restoreIcon_,500,[smb, a])
        reelSmb[smb.reel[a]].tumbleObj.push(smb.anim[a]);
        smb.anim[a].alpha=1;
    }

    function getIconSize(val,num){
        if (freeSpinsManager_.getIsInFs() && num==3){
            return val+6;
        }
        return val;
    }

    function restoreIcons(){
        spinManager_.restoreIcons(previousReels_);
    }

    var previousReels_;
    function tumble_(){
        gameClass_.logger("calling tumble")
        if (spinManager_.gotError()==true)return;
        previousReels_=spinManager_.getSpinReelResp().reel;
        gameClass_.successiveWinning();
        if (tumbling_==true) {
            wildManager_.clearWild(0);
            var tumble = false;
            for (var a in wins) {
                if (wins[a] != undefined) {
                    var index = 10;
                    for (var s in wins[a].smbNum) {
                        //if(wins[a].tumble[s] && wins[a].smbNum[s]!=11) {
                            reelSmb[wins[a].reel[s]].index.push(wins[a].icon[s]); //tumbling icons
                            reelSmb[wins[a].reel[s]].newSmbs = spinManager_.getSpinReelResp().reel[wins[a].reel[s]];  //next spin result
                        //}
                    }
                }
                tumble = true;
            }

            for (var b = 0; b <  ReelConfig.numReels + getFSNum_(); b++) {
                spinManager_.tumble(b, reelSmb[b],previousReels_, prevPreviousReels_);
                if (reelSmb[b]!=undefined && reelSmb[b].index.length>0){
                    //setTimeout (tumbleSound_,(gameClass_.getCompulsivePlayer())?100:280*b,b);
                }
            }

            setTimeout(soundManager_.playSound,(gameClass_.getCompulsivePlayer())?100:200,"tumble_0");
            if (tumble) {
                if (gameClass_.endTumble != null) setTimeout(gameClass_.endTumble, 500, .12, 1, 2.5);
            }

        }else{
            //setTimeout(gameClass_.setChange,1000,false);
        }

    }

    function tumbleSound_(reel){
        soundManager_.playSound("tumble_"+reel);
    }

    function riScaleBack_(anim){
        TweenMax.to(anim.scale,.3,{x:1,y:1})
    }

    function endCoins_(){
        clearInterval(iEndTimO);
        if (winAmtClass_!=null){
            partialWinAmt_=0;
        }
    }

    function clearAll_() {
        reset_=true;
        stage_=0;
        resetCentralWin_();
        buttonE.visible=false;
    }

    function clearLineAfterValue_(){
        gameClass_.logger("clear line after")
        stopEvent_=true;
        resetCentralWin_(true);
        clearAll_();
        winEventManager_.clearEvt();
        if (bCompleted_==true){
           // displayManager_.getText("lineWin").setText("");
            return;
        }

        var winAmount=winManager_.getWinAmt() ;
        endCoins_();
        if (winAmount>0) {
            writeText_(balanceManager_.getCurrencySmb() + "" + Util.formatNumber(winAmount, Util.getNubersOfDecimal()));
        }else{
            writeText_("");
        }

    }

    function fakeEvent(){

    }

    function findWinRange_(amt){
        if (Number(amt<=0))return 0;
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
        if (Number(amt<=0))return 0;
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
        var amt=par;
        //if (balanceManager_.getShowIncredits()==true)amt=  Util.getNumericValue(amt)/balanceManager_.getCoinValue()*lineManager_.getLinesNumber();
        if (Util.getNumericValue(amt)> stages_[stageProcessed_] && reset_==false && stageProcessed_<stages_.length && stopped_==0){
            stageThrough_[stageProcessed_]=1;
            stageProcessed_++;
            setTimeout(changeCentralWinStage_,1000*(stageProcessed_-1),stageProcessed_,false);
        }else if  (stopped_ ==1){
            stopped_=2;
            var stage=findWinRange_(tumblingWin_ );
            console.log("final stage "+ stage)
            setTimeout(changeCentralWinStage_,10,stage-5,false);
        }
    }

    function completeValueLast2_(){
        if (gameClass.getUpdateLockedReels!=undefined && gameClass.getUpdateLockedReels()==true){ //todo add
            setTimeout(completeValueLast2_,2000);
        }else {
            setTimeout(delayedStartUpdate_,50,true, tumblingWin_,winAmtClass_);
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
        var line=lineManager_.getLinesNumber();
        //value always coming in coins
        var amtC=amt;//  Util.getNumericValue(amt)/balanceManager_.getCoinValue() *lineManager_.getLinesNumber();
        var stages=[];
        if (gameClass_.getWasBuyIn()>0){
            line=1;
            stages[0]=winAnim.winClassesBI_[6]*gameClass_.getWasBuyIn();
            stages[1]=winAnim.winClassesBI_[7]*gameClass_.getWasBuyIn();
            stages[2]=winAnim.winClassesBI_[8]*gameClass_.getWasBuyIn();
        }else{
            line=1;
            if(balanceManager_.getShowIncredits()==true){
                stages[0]=winAnim.winClasses_[6]*10;
                stages[1]=winAnim.winClasses_[7]*10 ;
                stages[2]=winAnim.winClasses_[8]*10 ;
            }else{
                stages[0]=winAnim.winClasses_[6]*balanceManager_.getCoinValue() ;
                stages[1]=winAnim.winClasses_[7]*balanceManager_.getCoinValue() ;
                stages[2]=winAnim.winClasses_[8]*balanceManager_.getCoinValue() ;
            }
        }

        var time=0;
        var index=-1;
        reset_=false;

        for (var a in stages){
            if (Number(amtC)>=line*stages[a]){
                time =winAnimB.winTxtDuration[findWinRangeB_(amtC )] * 1000;
                index=Number(a)+1;
            }
        }
        if (index>=0){
            resetCentralWin_(true);
            displayManager_.getText("lineWin").alpha=1;
            displayManager_.getText("lineWin").visible=true;
            reset_ = false;
            currentSmb_ = 1;
            currentWinWeight_ = amt;
            stage_ =index;

            displayManager_.getGroup("centralWin").visible=true;
            centralWinGroup_.visible=true;
            centralWinGroup_.bgmsg.children[0].visible=true;
            soundManager_.stopSound(winAnim.accuSnd);

            //funtain
            var time = winAnim.winTxtDuration [(5+stage_)]  * 1000;
            var numObj= 46*stage_;
            var interval=((time)-2000)/numObj;
            coinShower.startFuntain(time,numObj,interval);

            //sounds
            soundManager_.playSound("winBg_"+(Number(stage_) + 5));

            //big win anim
            changeCentralWinStage_(stage_,true);
            gameClass_.decreaseVolumeBG(.5);

            //reset
            setTimeout(finalizeCentralWin_,time+ 4000);

            coinWinTxt_.setText(balanceManager_.getCurrencySmb() + "" + Util.formatNumber(amtC, Util.getNubersOfDecimal()));
            coinWinTxt_.alpha=1;
            coinWinTxt_.visible=true;
            setTimeout(clearGreetings_,time+ 4000);

        }else{
            coinWinTxt_.alpha=0;
            time=1500;
        }
        return time;
    }

    function clearGreetings_(){
        coinWinTxt_.alpha=0;
    }

    function updateBonusBalance_(amt,msg){
        var amtC=  Util.getNumericValue(amt)/balanceManager_.getCoinValue() *lineManager_.getLinesNumber();
        var time=0;
        var index=-1;

        reset_=true;

        resetCentralWin_();
        endCoins_();
        var index = findWinRange_(amt);
        if (index >= 0 ) {
            displayManager_.getGroup("centralWin").visible=false;

            var time = 300 * (index + 1);

            if (index>4) {
                var numObj = Math.min(Math.max((Math.ceil(amtC) / 3), 15), 70);
                var interval = time / numObj;
                smallCoinShower.startFuntain(time,numObj,interval);
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
        smallCoinShower.clearEvt();
        coinShower.clearEvt();
        if (!freeSpinsManager_.getIsInFs()){
            coinWinTxt_.y=displayManager.groups.centralLineWin.texts.lineWin.y;
            if(winManager_.getWinAmt()==0)displayManager_.getText("lineWin").alpha=0;
        }

    }

    function removeCW_(a){
        //clearWinText_();
        clearWinGroup_();
        for (var a=1; a<=centralWinMsgGroups_.length-1;a++) {
            centralWinMsgGroups_[a].alpha = 0;
            TweenMax.killChildTweensOf(centralWinMsgGroups_[stage_]);
        }
        centralWinGroup_.bgmsg.children[0].visible=false;
        if (!freeSpinsManager_.getIsInFs()){
            coinWinTxt_.y=displayManager.groups.centralLineWin.texts.lineWin.y;
        }
    }

    function clearWinGroup_(){
        centralWinGroup_.visible=false;
    }

    function clearWinText_(){
        coinWinTxt_.alpha=0;
    }

    function stopBigWinAnimation_(){
        soundManager_.stopSound(winAnim.accuSnd);
        for (var a=1; a<=centralWinMsgBg.length-1;a++) {
            centralWinMsgBg[a].alpha=0;
            centralWinMsgTxt[a].alpha=0;
            //TweenMax.killChildTweensOf(centralWinMsgGroups_[stage_]);
        }
        if (!freeSpinsManager_.getIsInFs()){
            coinWinTxt_.y=displayManager.groups.centralLineWin.texts.lineWin.y;
        }
    }


    var bookChange_=0;
    function changeCentralWinStage_(s,greetings){
        console.log("changeCentralStage")
        if (reset_==true)return;
        if (s<=0)return;

        displayManager_.getGroup("centralWin").visible=true;
        centralWinGroup_.visible=true;
        centralWinGroup_.bgmsg.children[0].visible=true;

        coinWinTxt_.alpha=1;

        coinWinTxt_.y=displayManager.groups.centralLineWin.texts.lineWin.yFs;

        for (a in tw2_) {
            if (tw2_[a]!=null)tw2_[a].kill();
        }
        if (s==1 && stopped_==0) {
            //[s].play("win_tier_in",showFirstAnimCentral_);
            centralWinMsgGroups_[1].play(tiersAnimationFrames[1],false);
            playWinningSounds_(tumblingWin_, true);
        }else if (s>1 && stopped_==0) {
            centralWinMsgGroups_[1].play(tiersAnimationFrames[s],false);
        }
        soundManager_.stopSound(winAnim.accuSnd);
        centralWinMsgGroups_[1].visible=true;
        centralWinMsgGroups_[1].alpha=1;
        coinWinTxt_.y=displayManager.groups.centralLineWin.texts.lineWin.yFs;
        coinWinTxt_.alpha=1;
        if (!greetings) {
            var time = winAnim.winTxtDuration [(5 + s)] * 1000;
           // time = time - 1000;
            var numObj = 40 * s;
            var interval = ((time) - 4000) / numObj;
            coinShower.startFuntain(time, numObj, interval);
        }
    }

    function showFirstAnimCentral_(){
        centralWinMsgGroups_[1].play(tiersAnimationFrames[1],false);
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
            if (framework.isTouch()&& window.innerHeight > window.innerWidth) {
                //portrait
                $("#footer-top-win").html(amt);
            } else {
                $("#footer-bottom-message").html(amt);
            }
        }else{
            coinWinTxt_.setText(amt);
        }
    }

    function getFSNum_(){
        return (freeSpinsManager_.getIsInFs())?1:0;
    }

    function getReelState_(i){
        return 7;
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
        fsEndWinReset:function (){
            console.log("/////////////////////////////////////////////////eeeee0000")
            tumblingWin_=0;
        },
        hackWin:function (amt,cash) {
            stage_=0;
            stopped_=0;
            reset_=false;
            resetCentralWin_();
            tumblingWin_=0;
            if (cash==null){
                showCentralWin_(["spin",amt]);
            }else if (amt!="cap"){
                showBonusCentralWinGreetings_(cash);
            }else{
                hasBeenCapped_=cash
                showCentralWin_(["spin", hasBeenCapped_]);
                bCompleted_ = true;
                gameClass_.lineCompletion(true);
                freeSpinsManager_.hitCap([5000, null, [cash]]);
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

