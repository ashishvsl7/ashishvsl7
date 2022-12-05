/**
 * KiS Framework, Created by Fabry on 02/11/2018.
 */
function MegaWayBasicTumblingWinnings(gameRef, gameClass) {
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
    var bSkip_=false;
    var winCash_=0;
    var mult_=0;
    var fsType_;
    var revAnimFrameSeq_=[];
    var exploder_=false;
    var converter_=false;
    var ganesha_=false;
    var wild=false;
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
            var buttonE = new Phaser.Button(game_, displayManager.groups.centralWin.buttons[a].x, displayManager.groups.centralWin.buttons[a].y, displayManager.groups.centralWin.buttons[a].name, me[displayManager.groups.centralWin.buttons[a].evt], this, 1, 2, 0, 0);
            buttonE.alpha=0;
            buttonE.anchor.set(0.5, 0.5);
            centralWinGroup_.add(buttonE);
        }

    }

    //x20, 50x,  x100
    var winAnim = {
        "winClasses_":    [1,   10,  20,  40, 80, 199, 400, 800, 1200],
        "winSound_":    [1,   2,  3,  3, 4, 5, 6, 7, 8],
        "winTxtDuration": [1,  1, 1, 2,   3, 4, 8,   9,    10],
        "centralWinDur": [0, 0, 0, 0, 0, 0, 2, 2.5, 3],
        "scaleFactor": [3, 3, 3, 3, 3, 3.2, 3.4, 3.5, 4],
        "bigWinText": [0, 0, 0, 0, 0, 0, 1, 1, 1],
        "winSndEffect": ["", "", "", "", "", "", "", "", "", "", "", ""],
        "bgLoopsNum": [2, 4, 5, 5, 6, 7, 8, 8, 8],
        "accuSnd": ""
    }

    var winAnimB=winAnim;

    // var winAnimB= {
    //     "winClasses_":    [1,    2,    5,   10,  20,  50,  200, 500, 1000,999999999],
    //     "winTxtDuration": [.2,  .2,   .2,   .3,   .5, .5,   2,   3,   5  ,6],
    //     "scaleFactor":    [1.6,  1.8  ,2,   2.1, 2.2, 2.5,  2.7,   3,  3.3,  3.5],
    //     "winTxtColors": ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "ffffff", "#ffffff", "#ffffff"],
    //     "winSndEffect": ["", "", "", "", "", "", "", "", "", ""],
    //     "accuSnd": "winFSBg"
    // }

    function doOk_() {
        winEventManager_.clearEvt();
        clearLineAfterValue_();
        gameClass_.setChange(false);
        reset_=true;
        if (autoPlayManager_.getIsInAutoPlay() || (freeSpinsManager_.getIsInFs() && freeSpinsManager_.getFsNumber()>0)) {
            gameClass.clearPrevEvt();
            setTimeout(gameClass_.realDoSpin, 1000);
        }
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
    }

    function showBonusWin_(amt,amtCash){
        clearLine_();
        reset_=false;
        displayManager_.getText("winValue").setText("");
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
        coinWinTxt_.y=(getOrientation()=="portrait")?360: (framework.isTouch())?400:400;
        coinWinTxt_.scale.x=3;
        coinWinTxt_.scale.y=3;
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
        winAmount_=winManager_.getWinAmt();
        lineWinAmt_= winManager_.getLineWinAmt();
        wins=winManager_.getTumblingWinningSymbols();
        mult_=spinManager_.getSpinResp().freeSpin.multiplier;
        fsType_=spinManager_.getSpinResp().freeSpin.type;
        var unsettledWin_=0;
        if (spinManager_.getSpinResp().freeSpin.won!=null && spinManager_.getSpinResp().freeSpin.totalWin!=null){
            winCash_=spinManager_.getSpinResp().freeSpin.totalWin/100;
        }
        if (spinManager_.getSpinResp().freeSpin.unsettledTotal!=null){
            unsettledWin_=spinManager_.getSpinResp().freeSpin.unsettledTotal/100;
        }
        var w=(unsettledWin_!=undefined)?unsettledWin_:0;
        winCash_+=(w-winCash_);
        coinWinTxt_.scale.x = scaleStart_;
        coinWinTxt_.scale.y =scaleStart_;

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

        //in this cersion i make the tumble request here
        if (fsType_=="tumble" || fsType_=="convert" ){
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
                for (var j = 0; j < ReelConfig.numIcons; j++) {
                    force[j]=[];
                    for (var i = 0; i < ReelConfig.numReels; i++) {
                        force[j].push(document.getElementsByName("d"+i + j)[0].value);
                    }
                }
                if(document.getElementsByName("sideFeature")!=undefined )force.push(document.getElementsByName("sideFeature")[0].value);//easter slot side feature
                communicationManager_.sendServleForceSpinReq("spin",force);
            }else{
                communicationManager_.sendServletRequest("spin");
            }
        }
        console.log("prepare winnings " + tumbling_ + " "+ fsType_)
    }

    function calcSingleLinePoints_(line, winSmb) {
    }

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
        if (tumbling_ && freeSpinsManager_.getIsInFs() && gameClass.getUpdateLockedReels!=undefined && gameClass.getUpdateLockedReels()==true)winEventManager_.addEvent(fakeEvent,(gameClass_.getCompulsivePlayer())?2200:2700);
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
        winEventManager_.addEvent(playIconWinningSounds_,0);
        winEventManager_.addEvent(gameClass_.triggerKey,0,null,[spinManager_.getSpinResp().status.keys]);
        if (tumbling_)winEventManager_.addEvent(tumble_,(gameClass_.getCompulsivePlayer())?600:1050);
        if (tumbling_)winEventManager_.addEvent(fakeEvent,(gameClass_.getCompulsivePlayer())?100:500);
        if (freeSpinsManager_.getIsInFs() && spinManager_.getFsResp()!=undefined && spinManager_.getFsResp().won !=undefined &&spinManager_.getFsResp().won>1){
            winEventManager_.addEvent(fakeEvent,3000);
        }


        winEventManager_.addEvent(showCentralWin_,0,null, [fsType_,lineWinAmt_]);
        winEventManager_.addEvent(updateBalance_,300);
        if (freeSpinsManager_.getIsInFs())winEventManager_.addEvent(updateFreeSpinsMult,(gameClass_.getCompulsivePlayer())?700:1000);
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
        soundManager_.playSound("winBg_" + winAnim.winSound_[index]);   //total bg sound
    }

    function showCentralWin_(params){
        if (reset_==true)return;
        var fsType=params[0];
        var lineWinAmt=params[1];
        tumblingWin_+=Number(lineWinAmt);

        if (spinManager_.gotError()==true)return;
        if (freeSpinsManager_.getIsInFs()==true) {
            coinWinTxt_.y=(getOrientation()=="portrait")?330: (framework.isTouch())?640:650;
        }
        var index=findWinRange_(lineWinAmt);
        if (index > 4 ) {
            centralFuntainGroup_.visible = true;
            funtainEventManager_.clearEvt();
            var time = 300 * (index + 1);
            var amt = lineWinAmt;
            if (balanceManager_.getShowIncredits() == false) {
                amt = amt / balanceManager_.getCoinValue() * lineManager_.getLinesNumber();
            }
            var numObj = Math.min(Math.max((Math.ceil(amt )/3),15),70);
            var interval = time / numObj;
            for (a = 0; a <= numObj; a++) {
                funtainEventManager_.addEvtForce(startNewSmallObject_, interval);
                if (a%10==0)funtainEventManager_.addEvtForce(startCoinsSound_,0);
            }
            funtainEventManager_.triggerEvt();
        }

        if (Number(spinManager_.getSpinResp().win.total)<=0){
            bCompleted_=true;
            if (lineWinAmt>0 && freeSpinsManager_.getFsWon()==false){
                if(freeSpinsManager_.getIsInFs()==false) {
                    winAmtClass_.showWin(lineWinAmt, null, updateValue1_, completeValueLast_, 0, null, 3.5, .2);
                }else{
                    winAmtClass_.showWin(tumblingWin_, null, updateValue1_, completeValueLast_, tumblingWin_-lineWinAmt, null, 3, .2);
                }
            }else{
                if(freeSpinsManager_.getFsWon()==false) {
                    delayedStartUpdate_(true, tumblingWin_, 0);
                }else{
                    setTimeout(gameClass_.lineCompletion,100,true);
                    bCompleted_=true;
                    gameClass_.setTumblingReq(false);
                }
            }
        }else {
            winManager_.resetWinAmt();
            if (lineWinAmt>0) {
                if(freeSpinsManager_.getIsInFs()==false) {
                    winAmtClass_.showWin(lineWinAmt, null, updateValue1_, completeValue_, 0, null, 3.5, .2);
                }else{
                    winAmtClass_.showWin(tumblingWin_, null, updateValue1_, completeValue_, tumblingWin_-lineWinAmt, null, 3, .2);
                }
            }else{
                delayedStartUpdate_(false,tumblingWin_,0);
            }
        }
        if (freeRoundsManager_.getIsInFr() && freeSpinsManager_.getFsWon())freeRoundsManager_.updateFrBalance(tumblingWin_);//compensate FS won because Moirai add it to FS tot won risking to display twice

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
    }


    function soundPop(){
        //play pop sound
        soundManager_.playSound("iconPop");
    }

    function updateBalance_(){
        if (fsType_!="endTumble" || spinManager_.gotError()==true)return;
        updatePrize_();
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
                TweenMax.to(displayManager_.getText("fsMultValueBig"),.4,{y:480,ease:Bounce.easeOut,onComplete:bigMult_,onCompleteParams:[m]})
                if (gameClass.startVibrate)setTimeout(gameClass.startVibrate,300,.1,1,4);
            }
        }
        bCompleted_=true;
    }

    function bigMult_(m) {
        displayManager_.getText("fsMultValue").setText("x" + m);
        TweenMax.to(displayManager_.getText("fsMultValueBig"), .4, {delay: 1.5, alpha: 0})
        if (m == 5 ) {
            soundManager_.playSound("multiplier_1");
        } else if (m ==10) {
            soundManager_.playSound("multiplier_2");
        } else if (m >15) {
            soundManager_.playSound("multiplier_3");
        }
    }

    function delayedStartUpdate_(last,tumblingWin,win){
        if(freeSpinsManager_.getIsInFs()==false){
        }else{
            //TweenMax.to(coinWinTxt_,0,{alpha:1});
        }
        soundManager_.playSound("winAmountFall");
        if (last){
            winManager_.resetWinAmt();
            if (balanceManager_.getShowIncredits()==true) {
                winManager_.setWinAmountBonus(tumblingWin*(balanceManager_.getCoinValue()/ lineManager_.getLinesNumber()));
            }else{
                winManager_.setWinAmountBonus(tumblingWin);
            }
            balanceManager_.setCanUpdate(true);

            var index = findWinRange_(tumblingWin);
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
                var time = me.getTotalDuration();
                var amt = lineWinAmt_;
                if (balanceManager_.getShowIncredits() == false) {
                    amt = amt / balanceManager_.getCoinValue() * lineManager_.getLinesNumber();
                }
                if (index>4) {
                    var numObj = Math.min(Math.max((Math.ceil(amt) / 3), 15), 70);
                    var interval = time / numObj;
                    for (a = 0; a <= numObj; a++) {
                        funtainEventManager_.addEvtForce(startNewSmallObject_, interval);
                        if (a % 10 == 0) funtainEventManager_.addEvtForce(startCoinsSound_, 0);
                    }
                    funtainEventManager_.triggerEvt();
                }
                setTimeout(gameClass_.lineCompletion,me.getTotalDuration()+1000,true);
            }else{

                if(freeSpinsManager_.getIsInFs()==false){
                    coinWinTxt_.setText("");
                    coinWinTxt_.y=displayManager.groups.centralLineWin.texts.lineWin.y;
                }
                setTimeout(gameClass_.lineCompletion,100,true);
            }

            if (winAnim.bigWinText[index] == "1") {    // show coins animation
                changeCentralWinStage_(index - 5, false);
            }
            playWinningSounds_(tumblingWin,true);
            var additionalTime= winAnim.centralWinDur[index]*1000;
            totalDuration_=additionalTime+(winAnim.winTxtDuration[index]*1000);

            var obj={};
            obj.val=0;

            if (freeSpinsManager_.getIsInFs()) {
                if (balanceManager_.getShowIncredits() == true) {
                    displayManager_.getText("totWonValue").setText(Util.formatNumber((winCash_) / balanceManager_.getCoinValue() * lineManager_.getLinesNumber(), Util.getNubersOfDecimal()));
                } else {
                    displayManager_.getText("totWonValue").setText(balanceManager_.getCurrencySmb() + "" + Util.formatNumber((winCash_), Util.getNubersOfDecimal()));
                }

            }

            if (balanceManager_.getShowIncredits()==true) {
                coinWinTxt_.setText(Util.formatNumber(tumblingWin , Util.getNubersOfDecimal()));
            }else {
                coinWinTxt_.setText(balanceManager_.getCurrencySmb() + "" + Util.formatNumber((tumblingWin), Util.getNubersOfDecimal()));
            }

            if (reset_==false)tw_.push(TweenMax.to( obj,winAnim.winTxtDuration[index]-1,{val:tumblingWin,onUpdate:updateValue_,onUpdateParams:[obj],onComplete:finalizeCentralWin_, ease:Power0.easeOut}));

            winAmtManager_.showIstantUpdateWin( tumblingWin ,"Total WIN");
            gameClass_.updateBalance(tumblingWin_);
            if (reset_==true)coinWinTxt_.setText("");
        }else{

            if(freeSpinsManager_.getIsInFs()==false){
                coinWinTxt_.setText("");
                TweenMax.to(coinWinTxt_,0,{ y :displayManager.groups.centralLineWin.texts.lineWin.y,alpha:1});
                bCompleted_=true;
            }

            winManager_.resetWinAmt();
            bSkip_=true;
            if(win>0)winAmtManager_.showIstantUpdateWin( tumblingWin ,"Tumble WIN");

        }

    }

    function finalizeCentralWin_(){
        console.log("fcw")
        tw3=setTimeout(gameClass_.increaseVolumeBG,1200);
        setTimeout(resetCentralWin_,2500);
        coinWinTxt_.setText("");
        if(freeSpinsManager_.getIsInFs()==false)coinWinTxt_.y=(getOrientation()=="portrait")?390:displayManager.groups.centralLineWin.texts.lineWin.y;
        coinWinTxt_.scale.x=scaleStart_;
        coinWinTxt_.scale.y=scaleStart_;
    }

    function finalizeComplete_(){

    }

    function finalizeComplete2_(){
        bCompleted_=true;
    }

    function startUpdate(tumblingWin,win){
        var amt=200;
        to=setTimeout(delayedStartUpdate_,amt,false,tumblingWin,win);
    }

    function startUpdateLast(tumblingWin){
        setTimeout(gameClass_.lineCompletion,100,true);
        var amt=200;
        to=setTimeout(delayedStartUpdate_,amt,true,tumblingWin,0);
        gameClass_.decreaseVolumeBG();
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
    }

    function delayedAnimation_(smb,a){
        if (spinManager_.gotError()==true)return;
        var add=false;
        var reels=spinManager_.getReels();
        if (spinManager_.getAnimationMap(smb.reel[a],smb.icon[a]).animations==null || ReelConfig.keepShowingAnimation==true) //avoid to add the same animation more then once
        {
            var special=smb.simbolReference[a].special;//save icon special infos before removing the icon
            if(spinManager_.getAnimationMap(smb.reel[a],smb.icon[a]).animations!=null){
                spinManager_.getReelGroup(smb.reel[a]).remove(spinManager_.getAnimationMap(smb.reel[a],smb.icon[a]));
            }
            add=true;

            if (game.cache.checkImageKey("anim" + smb.smbNum[a])==true) {
                smb.anim[a] = game_.add.sprite(smb.pos[a].x + ReelConfig.icon.width / 2,  smb.pos[a].y +  size_[spinManager_.getSpinReelResp().reel[smb.reel[a]].smb.length] / 2, "anim" + smb.smbNum[a]);
            }else{
                smb.anim[a]=smb.simbolReference[a];
            }

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
                if (smb.smbNum[a]==7 ||smb.smbNum[a]==8 ||smb.smbNum[a]==9){
                    var F=iconAdjustment_(spinManager_.getSpinReelResp().reel[smb.reel[a]].smb.length,smb.anim[a],smb.smbNum[a],spinManager_.getFrameMW(smb.reel[a],smb.icon[a])[spinManager_.getSpinReelResp().reel[smb.reel[a]].smb.length]);
                    smb.anim[a].F=F;
                }
            }
            if (smb.smbNum[a]==10){
                displayManager_.getGroup("wins").visible=true;
                displayManager_.getGroup("wins").add(smb.anim[a]);
            } else{
                spinManager_.getReelGroup(smb.reel[a]).add(smb.anim[a]);
            }
            if (F!=null){
                //add caracter frame to cover the animation borders
                spinManager_.getReelGroup(smb.reel[a]).add(F);
            }else{
                var tile= spinManager_.getTileMW(smb.reel[a],smb.icon[a])[spinManager_.getSpinReelResp().reel[smb.reel[a]].smb.length]
                setTimeout(animateTile_,500,tile);
            }

            if (spinManager_.getSpinReelResp().reel[smb.reel[a]].smb.length>=5 && smb.smbNum[a]!=7 && smb.smbNum[a]!=8 && smb.smbNum[a]!=9){
                var ratio=(size_[spinManager_.getSpinReelResp().reel[smb.reel[a]].smb.length]/smb.anim[a].height)+ ((smb.smbNum[a]==10)?.3:.1);
                smb.anim[a].scale.x=Math.min(ratio,1);
                smb.anim[a].scale.y=Math.min(ratio,1);
            }


            //animGroup_.add(smb.anim[a]);
            spinManager_.setAnimationMap(smb.reel[a],smb.icon[a],smb.anim[a]);
            //TweenMax.to(smb.anim[a].scale,.4,{delay:1.3,x:1.1,y:1.1,ease:Power1.easeOut});

            smb.anim[a].animations.play("anim", (gameClass_.getCompulsivePlayer())?36:24, false, false, restoreIcon_, [smb, a]);//todo parametric loop

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

    function animateTile_ (tile){
        tile.anchor.set(.5, .5);
        tile.animations.add("anim");
        tile.animations.play("anim", 24, false, false, endTile_, tile);//todo parametric loop

    }

    function endTile_(tile){
        tile.visible=false;
        tile.setFrame=0;
    }

    function iconAdjustment_(smbNum,image,icon,frame){

        //create animation frame based on icon frame pos, this will be added later to the reel group
        var F = game_.add.sprite(frame.x,frame.y, "smbFrame_" + smbNum);
        F.scale.x=1;
        F.scale.y=1;
        F.anchor.set(.5,.5);

        image.cropEnabled=true;

        if (smbNum == 7){
            var mask_ = new Phaser.Rectangle(0,20,frame.width, frame.height);//image.x- (image.width/2), frame.y-( frame.height/2), frame.width, frame.height);
        }else{
            var mask_ = new Phaser.Rectangle(0,0,frame.width, frame.height);//image.x- (image.width/2), frame.y-( frame.height/2), frame.width, frame.height);
            image.y=frame.y;
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

    function tumble_(){
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
            setTimeout(gameClass_.setChange,200,false);
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
        console.log("clear line after")
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
        if(freeSpinsManager_.getIsInFs()==false){
            TweenMax.to(coinWinTxt_,.2,{y:500,alpha:0,onComplete:startForceUpdate,ease:Sine.easeInOut});
        }else{
            TweenMax.to(coinWinTxt_,.2,{alpha:0,onComplete:startForceUpdate,ease:Sine.easeInOut});
        }
    }

    function startForceUpdate(){
        console.log("1 clear line after")
        coinWinTxt_.setText("");
        if(freeSpinsManager_.getIsInFs()==false) {
            TweenMax.to(coinWinTxt_, 0, {y: (getOrientation()=="portrait")?330:displayManager.groups.centralLineWin.texts.lineWin.y, alpha: 1});
        }else{
            TweenMax.to(coinWinTxt_, 0, {alpha: 1});
        }
        //winAmtManager_.showShortWin( tumblingWin_, null, null, null,"Total WIN");
        bCompleted_=true;
        reset_=true;
    }

    function fakeEvent(){

    }

    function findWinRange_(amt){
        if(balanceManager_.getShowIncredits()==false) {
            amt=  amt/ balanceManager_.getCoinValue()*lineManager_.getLinesNumber();
        }
        var number=winAnim.winClasses_.length-1;
        for (var a in winAnim.winClasses_) {
            if (winAnim.winClasses_[a] >= amt) {
                number = Number(a-1);
                break;
            }
        }

        return Math.max(number,0);
    }

    function findWinRangeB_(amt){
        var number=winAnimB.winClasses_.length-1;
        for (var a in winAnimB.winClasses_) {
            if (winAnimB.winClasses_[a] >= amt) {
                number = Number(a-1);
                break;
            }
        }

        return Math.max(number,0);
    }

    function getInterruptedWinAnim_(){
        return !bCompleted_;
    }

    function completeValue_(){
        if (freeSpinsManager_.getIsInFs()==false || freeSpinsManager_.getFsNumber()==-999) {
            TweenMax.to(coinWinTxt_, 1, {y: (getOrientation()=="portrait")? 330 :  (framework.isTouch())?640:630, onComplete: startUpdate, onCompleteParams:[tumblingWin_,lineWinAmt_],ease: Bounce.easeOut});
        }else{
            setTimeout(startUpdate,1000,tumblingWin_,lineWinAmt_);
        }


    }

    function updateValue_(par){
        var amt=par.val;
        if (balanceManager_.getShowIncredits()==false)amt=  Util.getNumericValue(amt)/balanceManager_.getCoinValue()*lineManager_.getLinesNumber();
        if (Util.getNumericValue(amt)> stages_[stage_] && reset_==false){
            // coinWinTxt_.scale.x = winAnim.scaleFactor[6 + stage_];
            changeCentralWinStage_();
        }
    }

    function updateValue1_(txt){
        return;
        if (coinWinTxt_.text.length>=12) {
            coinWinTxt_._fontSize=40;
        }else if (coinWinTxt_.text.length>=10) {
            coinWinTxt_._fontSize=45;
        }else if (coinWinTxt_.text.length>=6){
            coinWinTxt_._fontSize=50;
        }else{
            coinWinTxt_._fontSize=55;
        }
    }

    function completeValueLast_(){
        if (freeSpinsManager_.getIsInFs()==true && gameClass.getUpdateLockedReels!=undefined && gameClass.getUpdateLockedReels()==true){
            setTimeout(completeValueLast1_,2000);
        }else {
            completeValueLast1_();
        }
    }

    function completeValueLast1_(){
        if (freeSpinsManager_.getIsInFs() == false || freeSpinsManager_.getFsNumber() == -999) {
            TweenMax.to(coinWinTxt_, 1, {
                y: (getOrientation()=="portrait") ? 330 :  (framework.isTouch())?640:630,
                onComplete: startUpdateLast,
                onCompleteParams: [tumblingWin_, 0],
                ease: Bounce.easeOut
            });
        } else {
            TweenMax.to(coinWinTxt_, 1, {
                y: (getOrientation()=="portrait") ? 330 :  (framework.isTouch())?640:630,
                onComplete: startUpdateLast,
                onCompleteParams: [tumblingWin_, 0],
                ease: Bounce.easeOut
            });
        }
    }

    function completeBonusValue_(amt,msg){
        updateBonusBalance_ (amt,msg);
        setTimeout(handleBonusEndWinAnimation_,1500);
    }

    function showBonusCentralWinGreetings_(amt){
        //value always coming in coins
        var amtC=  Util.getNumericValue(amt)/balanceManager_.getCoinValue() *lineManager_.getLinesNumber();
        var time=0;
        var index=-1;
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
            if(getOrientation()=="portrait")displayManager_.getText("lineWin").y=410;
            var obj={};
            obj.val=0;
            tw_.push(TweenMax.to( obj,winAnim.winTxtDuration[index+6]-1,{val:Number(amt),onUpdate:updateValue_,onUpdateParams:[obj],onComplete:finalizeCentralWin_,ease: Power2.easeOut}));

            soundManager_.playSound("winBgS_"+(Number(stage_) + 6));
            gameClass_.decreaseVolumeBG(winAnimB.winTxtDuration[(Number(stage_) + 6)]*1000);
        }else{
            time=1500;
        }
        return time;
    }

    function updateBonusBalance_(amt,msg){
        var amtC=  Util.getNumericValue(amt)/balanceManager_.getCoinValue() *lineManager_.getLinesNumber();
        var time=0;
        var index=-1;

        reset_=true;
        coinWinTxt_.setText("");
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
                coinWinTxt_.scale.x = 3;
                coinWinTxt_.scale.y = 3;
                TweenMax.to(coinWinTxt_, .4, {y: (getOrientation()=="portrait")?330:490, alpha: 1, ease: Sine.easeInOut});
                coinWinTxt_.setText(balanceManager_.getCurrencySmb() + "" + Util.formatNumber(amt, Util.getNubersOfDecimal()));
                setTimeout(finalizeCentralWin_,winAnim.winTxtDuration[index]*1000,true);
            }
        }
        winAmtManager_.showIstantUpdateWin(amt,msg);
        bCompleted_=true;
        soundManager_.playSound("winAmountFall");
    }

    function resetCentralWin_(now){
        console.log("resetCentralWin " );
        //gameClass_.stopBgLights();

        stage_=0;
        totalDuration_=0;

        if (tw2>0)clearInterval(tw2);
        if (tw3>0)clearInterval(tw3);
        if (to>0)clearInterval(to);
        tw1=null;
        tw2=0;
        tw3=0;
        console.log("kill tw")

        for (a in tw_) {
            if (tw_[a]!=null)tw_[a].kill();
        }

        if (now==true){
            removeCW_();
        }else{
            removeCW_();
            //remove with tween TweenMax.to(centralWinMsgTxt[a].scale,.5,{x:1.2,y:1.2,ease: Sine.easeInOut,onComplete:removeCW_,onCompleteParams:[a]});
        }
        funtainEventManager_.clearEvt();
        // for (a in objThrown_){
        //     if(objThrown_[a]!=null) {
        //         objThrown_[a].destroy();
        //         objThrown_[a] = null;
        //     }
        // }
        // objThrown_=[];
    }

    function removeCW_(a){
        centralWinGroup_.visible=false;
        for (var a=1; a<=centralWinMsgGroups_.length-1;a++) {
            centralWinMsgGroups_[a].alpha = 0;
            centralWinMsgGroups_[a].y=-200;
            centralWinMsgGroups_[a].scaleX=1;
            centralWinMsgGroups_[a].scaleY=1
            TweenMax.killChildTweensOf(centralWinMsgGroups_[stage_]);
        }
        centralWinGroup_.bgmsg.children[0].visible=false;
        centralWinGroup_.candleA1.children[0].visible=false;
        centralWinGroup_.candleA.children[0].visible=false;
        centralWinGroup_.cannon.children[0].visible=false;
        centralWinGroup_.cannon1.children[0].visible=false;
        centralWinGroup_.candle.children[0].visible=false;
        centralWinGroup_.candle1.children[0].visible=false;
        centralWinGroup_.bigGlow.children[0].visible=false;
        centralWinGroup_.bigMap.children[0].visible=false;
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
        displayManager_.getGroup("centralWin").visible=true;
        centralWinGroup_.visible=true;
        centralWinGroup_.bgmsg.children[0].visible=true;
        if (stage_==0) {
            for (var a=1; a<=centralWinMsgGroups_.length-1;a++) {
                centralWinMsgGroups_[a].alpha = 0;
                centralWinMsgGroups_[a].y=-200;
                centralWinMsgGroups_[a].scaleX=1;
                centralWinMsgGroups_[a].scaleY=1
                TweenMax.killChildTweensOf(centralWinMsgGroups_[stage_]);
            }
            centralWinGroup_.candleA1.children[0].visible=false;
            centralWinGroup_.candleA.children[0].visible=false;
            centralWinGroup_.cannon.children[0].visible=false;
            centralWinGroup_.cannon1.children[0].visible=false;
            centralWinGroup_.candle.children[0].visible=false;
            centralWinGroup_.candleA.children[0].visible=false;
            centralWinGroup_.bigGlow.children[0].visible=false;
            centralWinGroup_.bigMap.children[0].visible=false;
        }
        soundManager_.stopSound(winAnim.accuSnd);

        stage_++;

        if (stage_==1) {
            coinWinTxt_.y = (getOrientation()=="portrait")?400:560;

            console.log("scale first " + winAnim.scaleFactor[6 + stage_]);
            coinWinTxt_.scale.x = winAnim.scaleFactor[6 + stage_];
            coinWinTxt_.scale.y = winAnim.scaleFactor[6 + stage_];
            centralWinGroup_.visible=true;
            centralWinGroup_.candleA.children[0].visible=true;
            centralWinGroup_.candleA1.children[0].visible=true;
            centralWinGroup_.cannon.children[0].visible=false;
            centralWinGroup_.cannon1.children[0].visible=false;
            centralWinGroup_.candle.children[0].visible=true;
            centralWinGroup_.candle1.children[0].visible=true;
            centralWinGroup_.bigGlow.children[0].visible=true;
            centralWinGroup_.bigMap.children[0].visible=true;
            centralWinMsgGroups_[1].visible=true;
            centralWinMsgGroups_[1].alpha=0;
            centralWinMsgGroups_[2].visible=true;
            centralWinMsgGroups_[2].alpha=0;
            centralWinMsgGroups_[3].visible=true;
            centralWinMsgGroups_[3].alpha=0;

            tw_.push(TweenMax.fromTo(centralWinGroup_.bigGlow.children[0],.2,{y:displayManager.groups.centralWin.graphAsset.bigGlow.yS},{delay:.1,y:displayManager.groups.centralWin.graphAsset.bigGlow.yE,alpha:1}));
            tw_.push(TweenMax.fromTo(centralWinGroup_.bigMap.children[0],.3,{y:displayManager.groups.centralWin.graphAsset.bigMap.yS},{alpha:1,y:displayManager.groups.centralWin.graphAsset.bigMap.yE,ease:Back.easeOut,onComplete:playMap_}));
            tw_.push(TweenMax.fromTo(centralWinGroup_.candle.children[0],.2,{x:displayManager.groups.centralWin.graphAsset.candle.xS},{alpha:1,x:displayManager.groups.centralWin.graphAsset.candle.xE}));
            tw_.push(TweenMax.fromTo(centralWinGroup_.candle1.children[0],.2,{x:displayManager.groups.centralWin.graphAsset.candle1.xS},{alpha:1,x:displayManager.groups.centralWin.graphAsset.candle1.xE}));
            tw_.push(TweenMax.to(centralWinGroup_.candleA.children[0],.2,{alpha:1,}));
            tw_.push(TweenMax.to(centralWinGroup_.candleA1.children[0],.2,{alpha:1,}));
            tw2_.push(TweenMax.to(centralWinMsgGroups_[1],.2,{alpha:1,y:centralWinMsgPos_[1]}));

            centralWinGroup_.bigMap.children[0].animations.add("anim");
            centralWinGroup_.bigMap.children[0].animations.play("anim", 24, false, false);//todo parametric loop
            centralWinGroup_.candleA.children[0].animations.add("anim");
            centralWinGroup_.candleA.children[0].animations.play("anim", 24, true, false);//todo parametric loop
            centralWinGroup_.candleA1.children[0].animations.add("anim");
            centralWinGroup_.candleA1.children[0].animations.play("anim", 24, true, false);//todo parametric loop


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
            centralWinMsgGroups_[a].scaleX=1;
            centralWinMsgGroups_[a].scaleY=1;
            TweenMax.killChildTweensOf(centralWinMsgGroups_[a]);
        }
        for (a in tw2_) {
            if (tw2_[a]!=null)tw2_[a].kill();
        }
        tw2_.push(TweenMax.to(centralWinMsgGroups_[s-1],.2,{alpha:0,y:-200}));
        tw2_.push(TweenMax.to(centralWinMsgGroups_[s],.4,{delay:.5,alpha:1,y:centralWinMsgPos_[s]}));

        if (s==3){
            centralWinGroup_.cannon.children[0].visible=true;
            centralWinGroup_.cannon1.children[0].visible=true;
            tw_.push(TweenMax.fromTo(centralWinGroup_.cannon.children[0],.2,{x:displayManager.groups.centralWin.graphAsset.cannon.xS},{alpha:1,x:displayManager.groups.centralWin.graphAsset.cannon.xE}));
            tw_.push(TweenMax.fromTo(centralWinGroup_.cannon1.children[0],.2,{x:displayManager.groups.centralWin.graphAsset.cannon1.xS},{alpha:1,x:displayManager.groups.centralWin.graphAsset.cannon1.xE}));
            tw_.push(TweenMax.to(centralWinGroup_.candleA.children[0],.1,{alpha:0}));
            tw_.push(TweenMax.to(centralWinGroup_.candleA1.children[0],.1,{alpha:0}));
            tw_.push(TweenMax.to(centralWinGroup_.candle.children[0],.1,{alpha:0}));
            tw_.push(TweenMax.to(centralWinGroup_.candle1.children[0],.1,{alpha:0}));

            centralWinGroup_.cannon.children[0].animations.add("anim");
            centralWinGroup_.cannon.children[0].animations.play("anim", 24, false, false);//todo parametric loop
            centralWinGroup_.cannon1.children[0].animations.add("anim");
            centralWinGroup_.cannon1.children[0].animations.play("anim", 24, false, false);//todo parametric loop
            soundManager_.playSound("cannonBoom");
        }

        bookChange_=0;
    }

    function checkVal(){
        if (bookChange_>0){
            console.log("sb2 "+bookChange_)
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
            if (window.innerHeight > window.innerWidth) {
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
        completeValue:completeValue_,
        completeBonusValue:completeBonusValue_,
        startIdleCycle:startIdleCycle_,
        resumeTumbling:resumeTumbling_,
        doOk:doOk_
    }

    initClass_();
    return me;
}

