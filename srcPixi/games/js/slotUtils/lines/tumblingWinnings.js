/**
 * KiS Framework, Created by Fabry on 17/11/2017.
 */
function TumblingWinnings(gameRef, gameClass) {
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
    var lineDraw_;

    //central win amt
    var stage_=0;
    var centralWinGroup_;
    var centralWinMsgGroups_=[];
    var centralWinMsgPos_=[];
    var reset_=false;
    var wins;
    var tw_=[];
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
    var winCash_=0;
    var mult_=0
    var glows_=[];

    function initClass_() {
        mainGroup_ = displayManager_.getGroup("lines");
        //animGroup_ = displayManager_.getGroup("reels");       //animations can be added in a differe
        coinWinGroup_= displayManager_.getGroup("centralLineWin");
        coinWinTxt_=displayManager_.getText("lineWin");
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

        for (var a in displayManager.groups.centralWin.buttons) {
            var buttonE = new Phaser.Button(game_, displayManager.groups.centralWin.buttons[a].x, displayManager.groups.centralWin.buttons[a].y, displayManager.groups.centralWin.buttons[a].name, me[displayManager.groups.centralWin.buttons[a].evt], this, 1, 2, 0, 0);
            buttonE.alpha=0;
            buttonE.anchor.set(0.5, 0.5);
            centralWinGroup_.add(buttonE);
        }

    }

    var winAnim = {
        "winClasses_":    [0,   1,  2,  5, 7, 12, 24, 50, 100],
        "winSound_":    [0,   2,  3,  3, 4, 5, 6, 7, 8],
        "winTxtDuration": [.5,  1.5, 1.7, 2,   2.5, 3, 3,   3.5,    4],
        "centralWinDur": [0, 0, 0, 0, 0, 0, 5, 6, 7],
        "scaleFactor": [1, 1.7, 1.8, 1.9, 2.1, 2.2, 2.3, 2.5, 2.7],
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
        winEventManager_.clearEvt();
        displayManager_.getText("lineWin").setText("");
        clearAll_();
        //showLine_();
    }

    function clearLine_() {
        stopEvent_=true;
        winEventManager_.clearEvt();
        displayManager_.getText("lineWin").setText("");
        stopIncSound_();
        resetCentralWin_();
        clearAll_();
        changeAllHL_([[1]]);
        if (winAmtClass_!=null)winAmtClass_.forceToComplete();

    }

    function stopEvents_(){
        tumblingWin_=0;
        stopEvent_=true;
        for (var a in stToClear_)clearTimeout(stToClear_[a]);
    }

    function showBonusWin_(amt,amtCash){
        clearLine_();
        var time=winAnimB.winTxtDuration[findWinRangeB_(amt)] * 1000;
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
            if (gameClass_.getCompulsivePlayer()){
                winAmtClass_.showShortWin(amtCash, null, null, stopIncSound_,null)
            }else {
                winAmtClass_.showWin(amtCash, null, null, stopIncSound_, 0, null, stepInc_, time / 1000);
            }
        }else{
            if (gameClass_.getCompulsivePlayer()){
                winAmtClass_.showShortWin(amt, null, null, stopIncSound_,null)
            }else {
                winAmtClass_.showWin(amt, null, null, stopIncSound_, 0, null, stepInc_, time / 1000);
            }
        }
        if (gameClass_.getCompulsivePlayer())winAnimB.accuSnd=bkp;
        return (gameClass_.getCompulsivePlayer())?2000:time;
    }

    function stopIncSound_() {
        soundManager_.stopSound(winAnimB.accuSnd);
    }

    function handleBonusEndWinAnimation_(){
        if (gameClass_.isSpinning()==true)return;
        buttonManager_.applyState("NH");
        buttonManager_.applyRestore();
        //gameClass_.fsEval(true);
    }

    function resumeTumbling(){
        wins=winManager_.getResumeTumblingWinningSymbols_();
        for (var b = 0; b < ReelConfig.numReels; b++) {
            var obj={};
            obj.index=[];
            obj.indexFallen=[];
            obj.newSmbs=[];
            obj.current=0;
            obj.tumbleObj=[];
            reelSmb[b]=obj;
        }
        tumbling_=true;
        gameClass_.setChange(true);
        gameClass_.setTumblingReq(true);
        communicationManager_.sendServleForceSpinReq("spin");

        var index=0;
        var iMaxSmb=0;
        bCompleted_=false;
        if(coinWinGroup_!=null)coinWinGroup_.visible=true;
        if(animGroup_)animGroup_.visible=true;

        bgStopped_=true;
        winEventManager_.addEvent(fakeEvent,0,gameClass_.getTumblingReq);//wait for response to come after tumbling
        for (var a in wins) {
            if (wins[a] != undefined) {
                var num=8;
                var def=8;  //def higher icon
                for (var b=wins[a].smbNum.length;b >= 0;b--){
                    if (wins[a].realSmbNum[b] < num && wins[a].realSmbNum[b]<8 ) {
                        def = wins[a].realSmbNum[b];
                        break;
                    }
                }
                num=def;
                iMaxSmb=(num>iMaxSmb)? num:iMaxSmb;//get the high symbol to play its own sound
                winEventManager_.addEvent(amimIcon_, 0,null, [wins[a]]);   //anim icon
            }
        }
        //soundManager_.playSound("smbWin_"+iMaxSmb);
        winEventManager_.addEvent(tumble_,1800);
        winEventManager_.addEvent(gameClass_.successiveWinning,500);
        winEventManager_.triggerEvt();
    }

    function prepareWinnings_(winSmb) {
        console.log("obj "+ objThrown_.length)
        winAmount_=winManager_.getWinAmt();
        lineWinAmt_= winManager_.getWinAmt();//changed on the 10th Gen 2020 because we've found out Louis was capping lineWin to 2500. was getLineWinAmt

        wins=winManager_.getTumblingWinningSymbols();
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
        winCash_=spinManager_.getSpinResp().freeSpin.totalWin/100;
        mult_=spinManager_.getSpinResp().freeSpin.multiplier;
        //in this cersion i make the tumble request here
        if (freeSpinsManager_.getType()=="tumble"){
            tumbling_=true;
            gameClass_.setChange(true);
            gameClass_.setTumblingReq(true);



            //now send force ontumbles too
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
    }

    function calcSingleLinePoints_(line, winSmb) {
    }

    function showLine_() {
        for (a in objThrown_){
            if(objThrown_[a]!=null) {
                objThrown_[a].destroy();
                objThrown_[a] = null;
            }
        }

        objThrown_=[];
        var index=0;

        bCompleted_=false;
        reset_=false;
        stopEvent_=false;
        if(coinWinGroup_!=null)coinWinGroup_.visible=true;
        if(animGroup_)animGroup_.visible=true;

        winEventManager_.clearEvt();
        totalDuration_=0;

        resetCentralWin_();
        index=findWinRange_(winManager_.getLineWinAmt());

        bgStopped_=true;
        winEventManager_.addEvent(fakeEvent,30,gameClass_.getTumblingReq);//wait for response to come after tumbling

        for (var a in wins) {
            if (wins[a] != undefined) {
                winEventManager_.addEvent(amimIcon_, 0,null, [wins[a]]);   //anim icon
            }
        }
        winEventManager_.addEvent(playIconWinningSounds_,0);
        winEventManager_.addEvent(gameClass_.successiveWinning,0);
        winEventManager_.addEvent(tumble_,(gameParams.gameOriginalID =="7017")?1700:1200);
        winEventManager_.addEvent(showCentralWin_,(freeSpinsManager_.getIsInFs()==false)? 1000:0,null, [lineWinAmt_]);
        winEventManager_.addEvent(playWinningSounds_,0);
        winEventManager_.addEvent(updateBalance_,100);
        winEventManager_.triggerEvt();
    }

    function playIconWinningSounds_(){
        if (freeSpinsManager_.getIsInFs()==false) return;
        var iMaxSmb=0;
        for (var a in wins) {
            if (wins[a] != undefined) {
                var num = 10;
                var def = 10;  //def higher icon
                for (var b = wins[a].smbNum.length; b >= 0; b--) {
                    if (wins[a].realSmbNum[b] < num && wins[a].realSmbNum[b] < 10) {
                        def = wins[a].realSmbNum[b];
                        break;
                    }
                }
                num = def;
                iMaxSmb = (num > iMaxSmb) ? num : iMaxSmb;//get the high symbol to play its own sound
            }
        }
        soundManager_.playSound("smbWin_" + iMaxSmb);
    }

    function playWinningSounds_(){
        var audioLevel=[];
        audioLevel[1]=1;
        audioLevel[2]=1.4;
        audioLevel[3]=1.2;
        audioLevel[4]=1.1;
        audioLevel[5]=1;
        audioLevel[6]=1.2;
        audioLevel[7]=1.3;
        audioLevel[8]=1.4;

        if (freeSpinsManager_.getIsInFs()==true || spinManager_.getFsResp().won>1) {
            return;
        }

        var iMaxSmb=0;
        //tumblingWin_+=winManager_.getLineWinAmt();
        gameClass_.setTotWin(tumblingWin_);
        if (freeSpinsManager_.getIsInFs()==false) {
            if (freeSpinsManager_.getType() != "tumble") {
                var index = findWinRange_(tumblingWin_);
                if (index>5) {
                    for (var a = 1; a <= 8; a++)
                        if(soundManager_.getBGSound("bgSlot"+a)!=null)soundManager_.getBGSound("bgSlot" + a).fadeOutBgSoundExternal(500, audioLevel[a]-.8);

                    var iMaxSmb = 0;
                    soundManager_.playSound("winBg_" + winAnim.winSound_[index]);   //total bg sound
                }
                //soundManager_.getBGSound("bgSlot").fadeOutBgSoundExternal(500, 0.2);
            } else {
                //no sounds during tumble
                index = findWinRange_(winManager_.getLineWinAmt());
               // soundManager_.playSound("winBg_" + index);   //total bg sound
            }
        }
    }

    function showCentralWin_(params){
        if (spinManager_.gotError()==true)return;
        var lineWinAmt = params[0];
        console.log("show central "+lineWinAmt)
        tumblingWin_ += Number(lineWinAmt);
        console.log("show centralT "+tumblingWin_)
        balanceManager_.setCanUpdate(false);
        if (freeSpinsManager_.getIsInFs()==true) {
            updateFreeSpinsTotWon_();
        }else{
            var index=findWinRange_(tumblingWin_);
        }
        if (index > 3 ) {
            centralFuntainGroup_.visible = true;
            funtainEventManager_.clearEvt();
            var time = 300 * (index + 1);
            var amt = winManager_.getLineWinAmt();
            if (balanceManager_.getShowIncredits() == false) {
                amt = amt / balanceManager_.getCoinValue() * lineManager_.getLinesNumber();
            }
            var numObj = Math.min(Math.max((Math.ceil(amt )/3),10),50);
            var interval = time / numObj;
            for (a = 0; a <= numObj; a++) {
                funtainEventManager_.addEvtForce(startNewSmallObject_, interval);
                if (a%10==0)funtainEventManager_.addEvtForce(startCoinsSound_,0);
            }
            funtainEventManager_.triggerEvt();

        }
        index=findWinRange_(tumblingWin_);
        console.log("scw "+ index + " "+tumblingWin_+ " "+ freeSpinsManager_.getType())
        if (freeSpinsManager_.getType()=="tumble"){
            if (index>0 || freeSpinsManager_.getIsInFs()){
                if (ReelConfig.winType=="BounceWin")
                    winAmtClass_= new BounceWin(game_,gameClass_, winAnim,"lineWin");
                if (ReelConfig.winType=="SimpleWin")
                    winAmtClass_= new SimpleWin(game_,gameClass_, winAnim,"lineWin");
                winAmtClass_.showWin(lineWinAmt, null, null, null, 0 ,null, winAnim.scaleFactor[index], 1);
            }else{
                winAmtManager_.showIstantUpdateWin(tumblingWin_, "Tumble WIN");
                coinWinTxt_.setText("");
                //bCompleted_ = true;
                //winManager_.resetWinAmt();
                bSkip_ = true;
            }
        }else {
            if(gameParams.gameOriginalID =="7017")setTimeout(sendComplete_,1000);
            if (index>0 || freeSpinsManager_.getIsInFs()) {
                if (ReelConfig.winType=="BounceWin")
                    winAmtClass_= new BounceWin(game_,gameClass_, winAnim,"lineWin");
                if (ReelConfig.winType=="SimpleWin")
                    winAmtClass_= new SimpleWin(game_,gameClass_, winAnim,"lineWin");
                winAmtClass_.showWin(lineWinAmt, null, null, null, 0, null, winAnim.scaleFactor[index], 1.5);
            }else{
                winAmtManager_.showIstantUpdateWin(tumblingWin_, "Total WIN");
                coinWinTxt_.setText("");
                //bCompleted_ = true;
                //winManager_.resetWinAmt();
                bSkip_ = true;
            }
            if (freeSpinsManager_.getIsInFs()==false && spinManager_.getFsResp().won<=0) {
                if (winAnim.bigWinText[index] == "1") {    // show coins animation
                    stToClear_.push(setTimeout(changeCentralWinStage_, 2000, index - 5, false));
                } else {

                }
            }
        }
        winManager_.resetWinAmt();
    }

    function sendComplete_(){
        bCompleted_=true;
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

        if(gameParams.gameOriginalID =="7017"){
            soundManager_.playSound("iConLight");
        }
        for (var a in winSmb_.smbNum){
            if(gameParams.gameOriginalID =="7017"){
                startFirstAnim_(winSmb_,a);
                setTimeout(delayedAnimation_,800,winSmb_,a);
            }else{
                delayedAnimation_(winSmb_,a);
            }

        }
    }

    function startFirstAnim_(smb,a){
        if (spinManager_.gotError()==true)return;
        var wg = game_.add.sprite(smb.pos[a].x + ReelConfig.icon.width / 2, (smb.pos[a].y + ReelConfig.icon.height / 2), "winglow");

        wg.animations.add("anim");
        wg.animations.play("anim", 32, false, false);//todo parametric loop
        wg.anchor.set(.5, .5);
        wg.scale.x = 1;
        wg.scale.y = 1;
        displayManager_.getGroup("winGlow").add(wg);
        glows_[a] = wg;

    }

    function updateBalance_(){
        if (spinManager_.gotError()==true)return;
        updatePrize_();
        soundManager_.playSound("line1");

        //reset_=true;
        if (freeSpinsManager_.getIsInFs()==false || freeSpinsManager_.getFsNumber()==-999) {
            TweenMax.to(coinWinTxt_, 1, {y: 608, alpha: 1, onComplete: startUpdate, ease: Bounce.easeOut});
        }else{
            //TweenMax.to(coinWinTxt_,0,{ y :displayManager.groups.centralLineWin.texts.lineWin.y,alpha:1});
            //endCoins_();
            clearAll_();
            bCompleted_=true;
        }
        //resetCentralWin_();
    }

    function updateFreeSpinsTotWon_(){
        if (balanceManager_.getShowIncredits()==true) {
            displayManager_.getText("totWonValue").setText(Util.formatNumber((winCash_) / balanceManager_.getCoinValue() * lineManager_.getLinesNumber(), Util.getNubersOfDecimal()));
        }else {
            displayManager_.getText("totWonValue").setText(balanceManager_.getCurrencySmb() + "" + Util.formatNumber((winCash_), Util.getNubersOfDecimal()));
        }
        freeSpinsManager_.updateFreeSpinsMult(mult_);
    }

    function updateBonusBalance_(amt,msg){
        reset_=true;
        TweenMax.to(coinWinTxt_, .4, {y: 600, alpha: 0.1, onComplete: startBonusUpdate,onCompleteParams:[amt,msg], ease: Sine.easeInOut});
        soundManager_.playSound("line");
        resetCentralWin_();
    }

    function startBonusUpdate(amt,msg){
        coinWinTxt_.setText("");
        TweenMax.to(coinWinTxt_,0,{ y :displayManager.groups.centralLineWin.texts.lineWin.y,alpha:1});
        winAmtManager_.showIstantUpdateWin(amt,msg);
        endCoins_();
        clearAll_();
        bCompleted_=true;
    }

    function delayedStartUpdate_(){

        coinWinTxt_.setText("");
        TweenMax.to(coinWinTxt_,0,{ y :displayManager.groups.centralLineWin.texts.lineWin.y,alpha:1});
        soundManager_.playSound("line");
        if (freeSpinsManager_.getType()!="tumble"){
            winManager_.resetWinAmt();
            winManager_.setWinAmountBonus(tumblingWin_);
            balanceManager_.setCanUpdate(true);
            winAmtManager_.showIstantUpdateWin( tumblingWin_ ,"Total WIN");
            if (stopEvent_==true)return;
            soundManager_.stopSound("smbWin_13");

        }else{
            winAmtManager_.showIstantUpdateWin( tumblingWin_ ,"Tumble WIN");
        }

        endCoins_();
        clearAll_();
        bCompleted_=true;
    }

    function startUpdate(){
        setTimeout(delayedStartUpdate_,1000);
    }

    function changeAllHL_(params) {
    }

    function playBiggerIconSound_(iconN){
        soundManager_.playSound("smbWin_"+iconN);
    }

    function restoreIcon_(par){
        var smb=par[0];
        var a=par[1];

        if (glows_[a]!=undefined)fadeAway_(glows_[a]);
        if (smb==null || smb == undefined)return;

        var expl = game_.add.sprite(smb.pos[a].x + ReelConfig.icon.width / 2, smb.pos[a].y + ReelConfig.icon.height / 2, "shamrock-pop" );
        expl.anchor.set(.5, .5);
        expl.animations.add("anim");
        expl.scale.x=1;
        expl.scale.y=1;
        expl.animations.play("anim", 24, false, true);//todo parametric loop
        displayManager_.getGroup("winGlow").add(expl);
        soundManager_.playSound("shamrockPop");
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
            if(gameParams.gameOriginalID !="7017") {
                if (smb.smbNum[a] == 12) {
                    smb.anim[a] = game_.add.sprite(smb.pos[a].x + ReelConfig.icon.width / 2, smb.pos[a].y + ReelConfig.icon.height / 2, "anim" + (Number(14) + Number(smb.icon[a])).toString());//reels[smb.reel[a]].getSymbol(smb.icon[a]);//
                    reels[smb.reel[a]].getSymbol(smb.icon[a]).visible = false;
                } else {
                    smb.anim[a] = game_.add.sprite(smb.pos[a].x + ReelConfig.icon.width / 2, smb.pos[a].y + ReelConfig.icon.height / 2, "anim" + smb.smbNum[a]);
                    var wg = game_.add.sprite(smb.pos[a].x + ReelConfig.icon.width / 2, smb.pos[a].y + ReelConfig.icon.height / 2, "winglow");
                    wg.animations.add("anim");
                    wg.animations.play("anim", 24, false, true);//todo parametric loop
                    TweenMax.to(wg.scale, .3, {x: 1.1, y: 1.1, ease: Sine.easeOut});//,onComplete:fadeAway_,onCompleteParams:[wg]
                    wg.anchor.set(.5, .5);
                    wg.scale.x = 1;
                    wg.scale.y = 1;
                    displayManager_.getGroup("winGlow").add(wg);
                    glows_[a] = wg;
                    TweenMax.to(smb.anim[a].scale, .3, {x: 1.1, y: 1.1, ease: Sine.easeOut, onComplete: popComplete_});
                }
                smb.anim[a].scale.x=1;
                smb.anim[a].scale.y=1;
                spinManager_.getReelGroup(smb.reel[a]).add(smb.anim[a]);
                spinManager_.setAnimationMap(smb.reel[a],smb.icon[a],smb.anim[a]);

            }else{
                glows_[a].visible=false;
                displayManager_.getGroup("winGlow").remove(glows_[a]);
                glows_[a]=null;
                if (smb.smbNum[a] == 12) {
                    smb.anim[a] = game_.add.sprite(smb.pos[a].x + ReelConfig.icon.width / 2, smb.pos[a].y + ReelConfig.icon.height / 2, "anim" + (Number(14) + Number(smb.icon[a])).toString());//reels[smb.reel[a]].getSymbol(smb.icon[a]);//
                    reels[smb.reel[a]].getSymbol(smb.icon[a]).visible = false;
                    smb.anim[a].scale.x=2;
                    smb.anim[a].scale.y=2;
                } else {
                    smb.anim[a] = game_.add.sprite(smb.pos[a].x + ReelConfig.icon.width / 2, smb.pos[a].y + ReelConfig.icon.height / 2, "anim" + smb.smbNum[a]);
                    setTimeout(popComplete_,100);
                    smb.anim[a].scale.x=2;
                    smb.anim[a].scale.y=2;
                }
                displayManager_.getGroup("cracking").add(smb.anim[a]);
            }
            smb.anim[a].anchor.set(.5, .5);
            smb.anim[a].animations.add("anim");

            smb.anim[a].smbNum=smb.smbNum[a];
            smb.simbolReference[a].visible=false;
            smb.simbolReference[a]=smb.anim[a];
            smb.anim[a].special=special;
        }else{
            smb.anim[a]=spinManager_.getAnimationMap(smb.reel[a],smb.icon[a]);
            smb.simbolReference[a]=smb.anim[a];
        }
        if (smb.smbNum[a]==12) {
            smb.anim[a].animations.play("anim", 24, false, true, restoreIcon_, [smb, a]);//todo parametric loop
        }else{
            smb.anim[a].animations.play("anim", 24, false, false, restoreIcon_, [smb, a]);//todo parametric loop
        }

        reelSmb[smb.reel[a]].tumbleObj.push(smb.anim[a]);
        smb.anim[a].alpha=1;

    }

    function popComplete_() {
        if (freeSpinsManager_.getIsInFs())
            soundManager_.playSound("iconPopFs");
        else
            soundManager_.playSound("iconPop");
    }

    function fadeAway_(obj){
        obj.visible=false;
        displayManager_.getGroup("winGlow").remove(obj);
        obj=null;
    }

    function tumble_(){
        var tumble=false;

        if (spinManager_.gotError()==true)return;
        for (var a in wins) {
            if (wins[a] != undefined) {
                var index=10;
                for (var s in wins[a].smbNum){
                    reelSmb[wins[a].reel[s]].index.push(wins[a].icon[s]); //tumbling icons
                    reelSmb[wins[a].reel[s]].newSmbs = spinManager_.getSpinReelResp().reel[wins[a].reel[s]];  //next spin result
                }
            }
        }

        for (var b = 0; b < ReelConfig.numReels; b++) {
            //reorder the tumbling smb from the bottom
            spinManager_.tumble(b, reelSmb[b]);
            tumble=true
        }

        if (tumble && gameParams.gameOriginalID =="7017") {
            if (gameClass_.endTumble != null) setTimeout(gameClass_.endTumble, 450, .12, 1, 1.5);
        }

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
            winAmtClass_.clearAll();
            winAmtClass_=null;
            partialWinAmt_=0;
        }
    }

    function clearAll_() {
        glows_=[];
        for (var a in displayManager_.getGroup("winGlow").children){
            displayManager_.getGroup("winGlow").remove(displayManager_.getGroup("winGlow").children[a]);
        }

    }

    function clearLineAfterValue_(){
        stopEvent_=true;
        resetCentralWin_();
        clearAll_();
        winEventManager_.clearEvt();
        if (bCompleted_==true){
            displayManager_.getText("lineWin").setText("");
            return;
        }

        var winAmount=winManager_.getWinAmt() ;
        //endCoins_();
        coinWinTxt_.setText(balanceManager_.getCurrencySmb()+ "" + Util.formatNumber(winAmount,Util.getNubersOfDecimal()));
        TweenMax.to(coinWinTxt_,.2,{y:500,alpha:0,onComplete:startForceUpdate,ease:Sine.easeInOut});
    }

    function startForceUpdate(){
        coinWinTxt_.setText("");
        TweenMax.to(coinWinTxt_,0,{y:displayManager.groups.centralLineWin.texts.lineWin.y,alpha:1});
        winAmtManager_.showShortWin( winManager_.getWinAmt(), null, null, null,"WIN");
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

    function getColor_(line,smb){
        if (lineConfig.line.showWinWithSmbColor==true){
            return ReelConfig.smb_colors[smb];
        }else{
            return lineConfig.line.lines[line].color;
        }
    }

    function completeValue_(){
        // updateBalance_ ();
        setTimeout(handleBonusEndWinAnimation_,1500);
    }

    function completeBonusValue_(amt,msg){
        updateBonusBalance_ (amt,msg);
        setTimeout(handleBonusEndWinAnimation_,1500);
    }

    function showBonusCentralWinGreetings_(amt){
        var time=0;
        var index=-1;
        var index=findWinRange_(amt);
        if (winAnim.bigWinText[index]=="1"){    // show coins animation
            resetCentralWin_();
            reset_=false;
            currentSmb_=1;
            currentWinWeight_=amt;
            changeCentralWinStage_(index-5,true);
            if(gameParams.gameOriginalID =="7017") {
                tumblingWin_=amt;
            }

            soundManager_.playSound("winBgS_"+winAnim.winSound_[index]);
            time=(winAnim.centralWinDur[index]*1000)+1500;
        }else{
            time=1500;
        }

        return time;
    }

    function resetCentralWin_(){
        if (bgStopped_){
            bgStopped_=false;
        }

        stage_=0;
        totalDuration_=0;
        centralWinGroup_.visible=false;
        displayManager_.getGroup("centralWin")["rainBow"].children[0].visible=false;
        for (var a=1; a<=centralWinMsgGroups_.length-1;a++) {
            centralWinMsgGroups_[a].alpha=0;
            centralWinMsgGroups_[a].y=-200;
            centralWinMsgGroups_[a].scaleX=1;
            centralWinMsgGroups_[a].scaleY=1
            TweenMax.killChildTweensOf(centralWinMsgGroups_[stage_]);
        }

        funtainEventManager_.clearEvt();
        for (a in tw_){
            tw_[a].kill();
            tw_[a]=null;
        }
        tw_=[];
    }

    function stopBigWinAnimation_(){
        soundManager_.stopSound(winAnim.accuSnd);
        for (var a=1; a<=centralWinMsgGroups_.length-1;a++) {
            centralWinMsgGroups_[a].alpha=0;
            centralWinMsgGroups_[a].y=-200;
            centralWinMsgGroups_[a].scaleX=1;
            centralWinMsgGroups_[a].scaleY=1;
            TweenMax.killChildTweensOf(centralWinMsgGroups_[stage_]);
        }
    }

    function changeCentralWinStage_(stage, bonus){
        if (reset_==true)return;
        resetCentralWin_();
        stage_=stage;

        centralWinGroup_.visible=true;
        centralWinMsgGroups_[stage_].visible=true;

        tw_=[];
        if(centralWinMsgGroups_[stage_]){
            tw_.push(TweenMax.to(centralWinMsgGroups_[stage_],.1,{delay:.01,alpha:1,y:centralWinMsgPos_[stage_],ease:Bounce.easeOut, onComplete:animCentralStage_,onCompleteParams:[bonus]}));
        }

        centralFuntainGroup_.visible = true;
        funtainEventManager_.clearEvt();
        var time = winAnim.winTxtDuration [(5+stage_)]  * 1000;
        var numObj= 300*stage_;
        var interval=time/numObj;
        for (a = 0; a <= numObj; a++) {
            funtainEventManager_.addEvtForce(startNewObject_,interval);
            if (a%20==0)funtainEventManager_.addEvtForce(startCoinsSound_,0);
        }
        funtainEventManager_.triggerEvt();

    }


    function animCentralStage_(bonus){
        if (centralWinMsgGroups_[stage_]){
            tw_.push(TweenMax.to(centralWinMsgGroups_[stage_].scale, .1, {
                x: 1.2,
                y: 1.2,
                ease: Bounce.easeInOut,
                onComplete: animCentralStage1_,
                onCompleteParams:[bonus]
            }));
        }
    }

    function endBonusAnim_(){
        resetCentralWin_();
    }

    function animCentralStage1_(param){
        if(gameParams.gameOriginalID =="7017") {
            if (balanceManager_.getShowIncredits() == true) {
                coinWinTxt_.setText(Util.formatNumber(tumblingWin_, Util.getNubersOfDecimal()));
            } else {
                coinWinTxt_.setText(balanceManager_.getCurrencySmb() + "" + Util.formatNumber((tumblingWin_), Util.getNubersOfDecimal()));
            }
            coinWinTxt_.alpha = 1;
            coinWinTxt_.y = 460;
        }
        if(centralWinMsgGroups_[stage_]){
            //rainbow animation
            displayManager_.getGroup("centralWin")["rainBow"].children[0].alpha=1;
            displayManager_.getGroup("centralWin")["rainBow"].children[0].animations.add("anim");
            displayManager_.getGroup("centralWin")["rainBow"].children[0].animations.stop(null, true);
            displayManager_.getGroup("centralWin")["rainBow"].children[0].animations.play("anim", 10,false,false);
            displayManager_.getGroup("centralWin")["rainBow"].children[0].visible=true;
            tw_.push(TweenMax.to(centralWinMsgGroups_[stage_].scale,.1,{x:1,y:1,ease:Bounce.easeInOut,onComplete:removeCentralAnim_,onCompleteParams:[param]}));
        }
    }

    function removeCentralAnim_(param){
        if(centralWinMsgGroups_[stage_])tw_.push(TweenMax.to(centralWinMsgGroups_[stage_],.5,{delay:(stage_+1)*3,alpha:0}));
        tw_.push(TweenMax.to(displayManager_.getGroup("centralWin")["rainBow"].children[0],.5,{delay:(stage_+1)*3,alpha:0,onComplete:resetCentralWin_}));
    }

    function startFuntain_(){
    }


    function startNewSmallObject_(){
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

    function hackWin_(opt,amt) {
        if (ReelConfig.winType=="BounceWin")
            winAmtClass_= new BounceWin(game_,gameClass_, winAnim,"lineWin");
        if (ReelConfig.winType=="SimpleWin")
            winAmtClass_= new SimpleWin(game_,gameClass_, winAnim,"lineWin");
        var index = findWinRange_(amt);


        index=findWinRange_(amt);
        if (opt==0){
            if (index>0){
                winAmtClass_.showWin(amt, null, null, null, 0, null, winAnim.scaleFactor[index], 1);
            }else{
                winAmtManager_.showIstantUpdateWin(amt, "Tumble WIN");
                coinWinTxt_.setText("");
                bCompleted_ = true;
                winManager_.resetWinAmt();
                bSkip_ = true;
            }
        }else {
            if(gameParams.gameOriginalID =="7017")setTimeout(sendComplete_,1000);
            if (index>0) {
                winAmtClass_.showWin(amt, null, null, null, 0, null, winAnim.scaleFactor[index], 1.5);
            }else{
                winAmtManager_.showIstantUpdateWin(amt, "Total WIN");
                coinWinTxt_.setText("");
                //bCompleted_ = true;
                winManager_.resetWinAmt();
                bSkip_ = true;
            }
            if (winAnim.bigWinText[index] == "1") {    // show coins animation
                stToClear_.push(setTimeout(changeCentralWinStage_, 2000, index - 5, false));
            }
        }



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
            //return the total duration of winline process
            var index=findWinRange_(tumblingWin_);
            var additionalTime= winAnim.centralWinDur[index]*1000
            totalDuration_=(winAnim.winTxtDuration[index]*1000);

            return totalDuration_;
        },
        completeValue:completeValue_,
        completeBonusValue:completeBonusValue_,
        startIdleCycle:startIdleCycle_,
        doOk:doOk_,
        hackWin:hackWin_

    }

    initClass_();
    return me;
}

