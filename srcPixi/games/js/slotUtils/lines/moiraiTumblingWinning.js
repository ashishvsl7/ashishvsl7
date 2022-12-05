/**
 * KiS Framework, Created by Fabry on 15/06/2018.
 */
function MoiraiTumblingWinnings(gameRef, gameClass) {
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
    var bSkip_=false;
    var winCash_=0;
    var mult_=0
    var fsType_;
    var revAnimFrameSeq_=[];
    var exploder_=false;
    var converter_=false;
    var ganesha_=false;

    function initClass_() {
        mainGroup_ = displayManager_.getGroup("lines");
        //animGroup_ = displayManager_.getGroup("reels");       //animations can be added in a differe
        coinWinGroup_ = displayManager_.getGroup("centralLineWin");
        coinWinTxt_ = displayManager_.getText("lineWin");
        //central win
        centralWinGroup_ = displayManager_.getGroup("centralWin");
        centralWinMsgGroups_[1]=[];
        centralWinMsgGroups_[2]=[];
        centralWinMsgGroups_[3]=[];

        for (var i = 0; i < 3; i++){
            centralWinMsgGroups_[1][i] = displayManager_.getGroup("centralWin")["bigWin_"+i].children[0];
            centralWinMsgGroups_[2][i] = displayManager_.getGroup("centralWin")["sBigWin_"+i].children[0];
            centralWinMsgGroups_[3][i] = displayManager_.getGroup("centralWin")["mBigWin_"+i].children[0];
        }
        centralWinMsgPos_[1]=displayManager_.getGroup("centralWin").bigWin_0.children[0];
        centralWinMsgPos_[2]=displayManager_.getGroup("centralWin").sBigWin_0.children[0];
        centralWinMsgPos_[3]=displayManager_.getGroup("centralWin").mBigWin_0.children[0];

        //funtain
        centralFuntainGroup_=displayManager_.getGroup("centralWin")["group"];
        centralFuntainGroupSmallObj_=displayManager_.getGroup("centralFuntainSmallObj");
        winEventManager_ = new EventManagerCheck();
        funtainEventManager_= new EventManager();

        if (ReelConfig.winType=="BounceWin")
            winAmtClass_= new BounceWin(game_,gameClass_, winAnim,"lineWin");
        if (ReelConfig.winType=="SimpleWin")
            winAmtClass_= new SimpleWin(game_,gameClass_, winAnim,"lineWin");

    }

    var winAnim = {
        "winClasses_":    [1,   10,  30,  80, 120, 150, 400, 1000, 2000],
        "winSound_":    [1,   2,  3,  3, 4, 5, 6, 7, 8],
        "winTxtDuration": [.5,  1, 1.5, 2,   2.5, 3, 2,   2.5,    3],
        "centralWinDur": [0, 0, 0, 0, 0, 0, 2, 3, 4],
        "scaleFactor": [1.6, 1.8, 1.9, 2, 2.1, 2.2, 2.3, 2.5, 2.7],
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

    function clearOverLine_(){
         //showLine_();
        //clearAll_();
    }

    function clearLine_() {
        //clearAll_();
    }

    function stopEvents_(){
        stage_=0;
        totalDuration_=0;
        tumblingWin_=0;
        funtainEventManager_.clearEvt();
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
    }

    function resumeTumbling_(json,fs){
        if (!fs) {
            tumblingWin_ = json.status.unsettledTotal / 100;
            winAmtManager_.showIstantUpdateWin(tumblingWin_, "Tumble WIN");
        }else{
            tumblingWin_ = json.status.totalWin / 100;
            if (json.status.type=="freespins"){
                freeSpinsManager_.updateWin((Number(json.status.unsettledTotal)+Number(json.status.totalWin))/100);
            }else{
                freeSpinsManager_.updateWin((Number(json.status.unsettledTotal))/100);
            }
        }
    }

    function prepareWinnings_(winSmb) {
        winAmount_=winManager_.getWinAmt();
        lineWinAmt_= winManager_.getLineWinAmt();
        wins=winManager_.getTumblingWinningSymbols();
        winCash_=spinManager_.getSpinResp().freeSpin.totalWin/100;
        mult_=spinManager_.getSpinResp().freeSpin.multiplier;
        fsType_=spinManager_.getSpinResp().freeSpin.type;
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
            communicationManager_.sendServletRequest("spin");
        }
        console.log("prepare winnings " + tumbling_ + " "+ fsType_)
    }

    function calcSingleLinePoints_(line, winSmb) {
    }

    function showLine_() {
        console.log(fsType_ +" process showline call "+spinManager_.getSpinResp().freeSpin.type)
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
        winEventManager_.addEvent(gameClass_.successiveWinning,0);
        if (fsType_=="tumble" || fsType_=="convert" )winEventManager_.addEvent(fakeEvent,0,gameClass_.getTumblingReq);//wait for response to come after tumbling or convert

        if (tumbling_!=true) {
            for (var a in wins) {
                if (wins[a] != undefined ){
                    for (var b in wins[a].smbNum) {
                        if (wins[a].smbNum[b] == 8) {
                            winEventManager_.addEvent(amimIconConvert_, 0, null, [wins[a].smbNum[b],wins[a],b]);   //anim icon
                            converter_=true;
                        }
                    }
                }
            }
        }else{
            for (var a in wins) {
                if (wins[a] != undefined) {
                    for (var b in wins[a].smbNum) {
                        if (wins[a].smbNum[b] == 7 ) {//exploder  , need to animate first
                            winEventManager_.addEvent(amimIconExploder_, 0, null, [wins[a].smbNum[b],wins[a],b]);   //anim icon
                            exploder_=true;
                            break;
                        }else if (wins[a].smbNum[b] == 10){//ganesha , need to animate first
                            winEventManager_.addEvent(amimIconGanesha_, 0, null, [wins[a].smbNum[b],wins[a],b]);   //anim icon
                            ganesha_=true;
                            break;
                        }
                    }

                    if (exploder_==false && ganesha_ ==false){
                        //normal sequence without the explorer
                        winEventManager_.addEvent(amimIcon_, 0,null, [wins[a]]);//anim icon
                    }
                }
            }
        }


        if (ganesha_==false)winEventManager_.addEvent(tumble_,(tumbling_ && exploder_==false && ganesha_==false && converter_==false)?750:(converter_)?900: (exploder_)?1900:(ganesha_)?5000:1800);
        if (exploder_||converter_)winEventManager_.addEvent(fakeEvent,300);
        winEventManager_.addEvent(showCentralWin_,0,null, [fsType_,lineWinAmt_]);
        winEventManager_.addEvent(updateBalance_,300);
        //if (lineWinAmt_==0)setTimeout(lineComp_, (exploder_==false && converter_==false && ganesha_==false)?200:1500,true);
        winEventManager_.triggerEvt();
    }

    function lineComp_(){

        if (freeSpinsManager_.getIsInFs()==false) {
            var index=findWinRange_(lineWinAmt_);
        }
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
            var time = 300 * (index + 1);
            var amt = lineWinAmt_;
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
            setTimeout(gameClass_.lineCompletion,me.getTotalDuration()+1000,true);
        }
        var index = findWinRange_(tumblingWin_);
        if (freeSpinsManager_.getIsInFs() == false && spinManager_.getFsResp().won <= 0) {
            if (winAnim.bigWinText[index] == "1") {    // show coins animation
                changeCentralWinStage_(index - 5, false);
            }
        }
        playWinningSounds_(tumblingWin_);
        var additionalTime= winAnim.centralWinDur[index]*1000;
        totalDuration_=700+additionalTime+(winAnim.winTxtDuration[index]*1000);
        setTimeout(gameClass_.increaseVolumeBG,totalDuration_);


        gameClass_.lineCompletion(true);
        clearAll_();
        console.log("coimplete 3")
        bCompleted_=true;

    }

    function playIconWinningSounds_(){
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
        if (fsType_ != "tumble" && fsType_ != "convert") {
            var index = findWinRange_(amt);
            var iMaxSmb = 0;
            soundManager_.playSound("winBg_" + winAnim.winSound_[index]);   //total bg sound
        }
    }

    function showCentralWin_(params){
        var fsType=params[0];
        var lineWinAmt=params[1];

        tumblingWin_+=Number(lineWinAmt);

        if (spinManager_.gotError()==true)return;
        if (freeSpinsManager_.getIsInFs()==true) {
            coinWinTxt_.y=644;
        }
        var index=findWinRange_(lineWinAmt);
        if (index >= 0 ) {
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

        if (fsType=="endTumble"){
            if (freeSpinsManager_.getIsInFs())updateFreeSpinsTotWon_();
            if (lineWinAmt>0 && freeSpinsManager_.getFsWon()==false){
                winAmtClass_.showWin(lineWinAmt, null, updateValue_, completeValueLast_, 0, null, 1.7, .2);
            }else{
                if(freeSpinsManager_.getFsWon()==false) {
                    delayedStartUpdate_(true, tumblingWin_, 0);
                    gameClass_.decreaseVolumeBG();
                }else{
                    setTimeout(gameClass_.lineCompletion,100,true);
                    bCompleted_=true;
                }
            }
        }else {
            winManager_.resetWinAmt();
            if (lineWinAmt>0) {
                if (freeSpinsManager_.getIsInFs()) {
                    winAmtClass_.showWin(tumblingWin_,  null,updateValue_, completeValue_, (tumblingWin_-lineWinAmt), null, 1.7, .2);
                }else{
                    winAmtClass_.showWin(lineWinAmt, null, updateValue_, completeValue_, 0, null, 1.7, .2);
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
        soundManager_.playSound("iconPop");

        for (var a in winSmb_.smbNum){
            delayedAnimation_(winSmb_,a);
        }
    }

    function amimIconExploder_(params){
        var smb=params[1];
        var convertSmb=params[0];
        var a=params[2];

        var add=false;
        var reels=spinManager_.getReels();

        var special=smb.simbolReference[a].special;//save icon special infos before removing the icon
        if(spinManager_.getAnimationMap(smb.reel[a],smb.icon[a]).animations!=null){
            spinManager_.getReelGroup(smb.reel[a]).remove(spinManager_.getAnimationMap(smb.reel[a],smb.icon[a]));
        }
        soundManager_.playSound("exploder");
        gameClass_.setMask();
        setTimeout(delayedExplosion_,350,smb,a);

        add=true;
        smb.anim[a] = game_.add.sprite(smb.pos[a].x + ReelConfig.icon.width / 2, smb.pos[a].y + ReelConfig.icon.height / 2, "anim" + smb.smbNum[a]);

        smb.anim[a].anchor.set(.5, .5);
        smb.anim[a].animations.add("anim");
        smb.anim[a].scale.x=1;
        smb.anim[a].scale.y=1;
        smb.anim[a].smbNum=smb.smbNum[a];
        smb.simbolReference[a].visible=false;
        smb.simbolReference[a]=smb.anim[a];
        smb.anim[a].special=special;

        spinManager_.getReelGroup(smb.reel[a]).add(smb.anim[a]);
        //animGroup_.add(smb.anim[a]);
        spinManager_.setAnimationMap(smb.reel[a],smb.icon[a],smb.anim[a]);


        smb.anim[a].animations.play("anim", 36, false,true, explodeIcons_, [smb, a]);//todo parametric loop

        smb.anim[a].alpha=1;

    }

    function amimIconGanesha_(params){
        var smb=params[1];
        var convertSmb=params[0];
        var a=params[2];

        var add=false;
        var reels=spinManager_.getReels();

        var special=smb.simbolReference[a].special;//save icon special infos before removing the icon
        if(spinManager_.getAnimationMap(smb.reel[a],smb.icon[a]).animations!=null){
            spinManager_.getReelGroup(smb.reel[a]).remove(spinManager_.getAnimationMap(smb.reel[a],smb.icon[a]));
        }
        soundManager_.playSound("ganesha");
        add=true;
        smb.anim[a] = game_.add.sprite(smb.pos[a].x + ReelConfig.icon.width / 2, smb.pos[a].y + ReelConfig.icon.height / 2, "anim" + smb.smbNum[a]);

        smb.anim[a].anchor.set(.5, .5);
        smb.anim[a].animations.add("anim");
        smb.anim[a].scale.x=1;
        smb.anim[a].scale.y=1;
        smb.anim[a].smbNum=smb.smbNum[a];
        smb.simbolReference[a].visible=false;
        smb.simbolReference[a]=smb.anim[a];
        smb.anim[a].special=special;

        spinManager_.getReelGroup(smb.reel[a]).add(smb.anim[a]);
        //animGroup_.add(smb.anim[a]);
        spinManager_.setAnimationMap(smb.reel[a],smb.icon[a],smb.anim[a]);


        smb.anim[a].animations.play("anim", 24, false, true, ganeshaIcons_, [smb, a,-1]);//todo parametric loop

        smb.anim[a].alpha=1;

    }

    function amimIconConvert_(params){
        if (spinManager_.gotError()==true)return;
        var smb=params[1];
        var convertSmb=params[0];
        var a=params[2];

        var add=false;
        var reels=spinManager_.getReels();
        gameClass_.setMask();
        setTimeout(delayedExplosion_,350,smb,a);

        var special=smb.simbolReference[a].special;//save icon special infos before removing the icon
        if(spinManager_.getAnimationMap(smb.reel[a],smb.icon[a]).animations!=null){
            spinManager_.getReelGroup(smb.reel[a]).remove(spinManager_.getAnimationMap(smb.reel[a],smb.icon[a]));
        }
        soundManager_.playSound("converter");
        add=true;
        smb.anim[a] = game_.add.sprite(smb.pos[a].x + ReelConfig.icon.width / 2, smb.pos[a].y + ReelConfig.icon.height / 2, "anim" + smb.smbNum[a]);

        smb.anim[a].anchor.set(.5, .5);
        smb.anim[a].animations.add("anim");
        smb.anim[a].scale.x=1;
        smb.anim[a].scale.y=1;
        smb.anim[a].smbNum=smb.smbNum[a];
        smb.simbolReference[a].visible=false;
        smb.simbolReference[a]=smb.anim[a];
        smb.anim[a].special=special;

        spinManager_.getReelGroup(smb.reel[a]).add(smb.anim[a]);
        //animGroup_.add(smb.anim[a]);
        spinManager_.setAnimationMap(smb.reel[a],smb.icon[a],smb.anim[a]);

        smb.anim[a].animations.play("anim", 24, false, true, convertIcons_, [smb, a]);//todo parametric loop

        smb.anim[a].alpha=1;
    }

    function ganeshaIcons_(par){
        var smb=par[0];
        var a=par[1];
        var part = Number(par[2]) + 1;

        if (part<=1) {
            smb.anim[a].visible=false;
            smb.simbolReference[a].visible=true;
            var gn = game_.add.sprite(640, 320, "ganesha_" + part);
            gn.anchor.set(.5, .5);
            gn.animations.add("anim");
            gn.scale.x = 1;
            gn.scale.y = 1;
            displayManager_.getGroup("reels").add(gn);
            gn.animations.play("anim", 24, false, (part>=1)?false:true, ganeshaIcons_, [smb, a, (part)]);
            gn.alpha = 1;
            if (part==1){
                explodeIconsGanesha_(par,this);
            }
        }
    }

    function explodeIcons_(par){
        var smb=par[0];
        var c=par[1];

        if (smb==null || smb == undefined)return;


        for (var a in wins) {
            for (var b in wins[a].smbNum) {
                if (wins[a].smbNum[b]!= 7 ) {
                    soundManager_.playSound("iconPop");
                    delayedAnimation_(wins[a], b);
                }else{
                    soundManager_.playSound("iconWild");
                    var icon=spinManager_.getReels()[wins[a].reel[b]].replaceIcon("upperIcon"+wins[a].icon[b],wins[a].realSmbNum[b]);
                    var gn = game_.add.sprite(icon.x, icon.y, "wildAnim");
                    gn.anchor.set(.5, .5);
                    gn.animations.add("anim");
                    gn.scale.x = 1;
                    gn.scale.y = 1;
                    displayManager_.getGroup("scatter").add(gn);
                    gn.animations.play("anim", 24, false, true);//todo parametric loop
                    gn.alpha = 1;

                    var gn = game_.add.sprite(icon.x, icon.y, "wildAnim");
                    gn.anchor.set(.5, .5);
                    gn.animations.add("anim");
                    gn.scale.x = -1;
                    gn.scale.y = 1;
                    displayManager_.getGroup("scatter").add(gn);
                    gn.animations.play("anim", 24, false, true);//todo parametric loop
                    gn.alpha = 1;

                    //reelSmb[wins[a].reel[b]].tumbleObj.push(icon);
                }
            }
        }
    }

    function explodeIconsGanesha_(par,gan){
        var smb=par[0];
        var c=par[1];

        if (smb==null || smb == undefined)return;
        soundManager_.playSound("iconPop");

        //order winnings by reel
        var reelOrder=[];
        for (var a in wins) {
            for (var b in wins[a].smbNum) {
                if (reelOrder[wins[a].reel[b]]==undefined)reelOrder[wins[a].reel[b]]=[];
                reelOrder[wins[a].reel[b]].push([a,b]);
            }
        }

        animateGaneshaReel_(0,reelOrder,false);
        animateGaneshaReel_(6,reelOrder,false);
        setTimeout(animateGaneshaReel_,400,1,reelOrder,false);
        setTimeout(animateGaneshaReel_,400,5,reelOrder,false);
        setTimeout(animateGaneshaReel_,800,2,reelOrder,false);
        setTimeout(animateGaneshaReel_,800,4,reelOrder,false);
        setTimeout(animateGaneshaReel_,1200,3,reelOrder,true,gan);

    }

    function animateGaneshaReel_(reel,arr,last,gan){
        var x=ReelConfig.reel.deltaX_0 + ReelConfig.reel.deltaX/2 +(ReelConfig.reel.deltaX * (reel));
        var y=(16+ReelConfig.reel.deltaY *5);
        var gn = game_.add.sprite(x, y, "ganeshaExplosion");
        gn.anchor.set(.5, .5);
        gn.animations.add("anim");
        gn.scale.x = 1;
        gn.scale.y = 1;
        displayManager_.getGroup("scatter").add(gn);
        gn.animations.play("anim", 24, false, true);//todo parametric loop
        gn.alpha = 1;
        soundManager_.playSound("iconWild");

        for (var a in arr[reel]) {
            setTimeout(delayedAnimation_,1000,wins[arr[reel][a][0]],arr[reel][a][1]);
        }
        setTimeout(ganeshaTumble_,1700,reel,arr);
        if (last){
            gan.visible=false;
            gan=null;
            setTimeout(endColorConversion_,2800);
        }
    }

    function ganeshaTumble_(reel,arr){
        if (spinManager_.gotError()==true)return;
        var tumble = false;

        for (var a in arr[reel]) {
            if(wins[arr[reel][a][0]].tumble[arr[reel][a][1]]) {
                reelSmb[wins[arr[reel][a][0]].reel[arr[reel][a][1]]].index.push(wins[arr[reel][a][0]].icon[arr[reel][a][1]]); //tumbling icons
                reelSmb[wins[arr[reel][a][0]].reel[arr[reel][a][1]]].newSmbs = spinManager_.getSpinReelResp().reel[wins[arr[reel][a][0]].reel[arr[reel][a][1]]];  //next spin result
            }
        }
        spinManager_.tumbleByReel(reel, reelSmb[reel]);

        if (gameClass_.endTumble != null) setTimeout(gameClass_.endTumble, 0, .15, 1, 4);
    }


    function convertIcons_(par){
        if (spinManager_.gotError()==true)return;
        var smb=par[0];
        var c=par[1];

        setTimeout(endColorConversion_,1000,false);

        for (var a in wins) {
            for (var b in wins[a].smbNum) {
                var icon=spinManager_.getReels()[wins[a].reel[b]].getIcon(wins[a].icon[b]);
                TweenMax.to(icon,.1,{alpha:0,onComplete:endAlpha_,onCompleteParams:[wins[a].reel[b],wins[a].icon[b],wins[a].realSmbNum[b]]});
            }
        }

        if (smb==null || smb == undefined)return;

        soundManager_.playSound("iconPop");
    }

    function endColorConversion_(){
        bCompleted_=true;
        gameClass_.setChange(false);
    }

    function endAlpha_(reel,icon,smb){
        var icon=spinManager_.getReels()[reel].replaceIcon("upperIcon"+icon,smb);
        icon.alpha=0;
        TweenMax.to(icon,.2,{alpha:1});
        TweenMax.to(icon.scale,.2,{x:1.2,y:1.2,onComplete:endAlpha1_,onCompleteParams:[icon]});
    }

    function endAlpha1_(icon){
        TweenMax.to(icon.scale,.2,{x:1,y:1});
    }

    function delayedExplosion_(smb,a){
        if (game.cache.checkImageKey("colorConv_" + smb.realSmbNum[a]) == true) {
            var wg = game_.add.sprite(smb.pos[a].x + ReelConfig.icon.width / 2, smb.pos[a].y + ReelConfig.icon.height / 2, "colorConv_" + smb.realSmbNum[a]);
            wg.scale.x=0;
            wg.scale.y=0;
            TweenMax.to(wg.scale, .7, {alpha:0,x: 7, y: 7, ease: Power1.easeOut,onComplete:endFirstWave_,onCompleteParams:[wg]});//,onComplete:fadeAway_,onCompleteParams:[wg]
            //TweenMax.to(wg, .3, {delay:.4,alpha:0 });//,onComplete:fadeAway_,onCompleteParams:[wg]
            wg.anchor.set(.5, .5);
            displayManager_.getGroup("reels").add(wg);


            if (gameClass_.endTumble != null) setTimeout(gameClass_.endTumble, 0.7, .15, 1, 3);
        }
    }

    function endFirstWave_(wg){
        wg.alpha=1;
        wg.scale.x=0;
        wg.scale.y=0;
        TweenMax.to(wg.scale, 1.2, {x: 7, y: 7, ease: Power1.easeOut,onComplete:fadeAway_,onCompleteParams:[wg]});
        TweenMax.to(wg, .3, {delay:.2,alpha:0 });
        if (gameClass_.endTumble != null) setTimeout(gameClass_.endTumble, 0.7, .15, 1, 3);
    }

    function hlSmb(par) {
        var a = par[0];
        if (a == null || a==undefined)return;
        if (a.scale == null || a.scale==undefined)return;
        a.alpha = 1;
    }

    function triggerComplete_(){

    }

    function updateBalance_(){
        if (fsType_!="endTumble" || spinManager_.gotError()==true)return;
        updatePrize_();
        soundManager_.playSound("line1");

        //reset_=true;

        //resetCentralWin_();
    }

    function updateFreeSpinsTotWon_(){

        freeSpinsManager_.updateFreeSpinsData();
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
        bCompleted_=true;
    }

    function delayedStartUpdate_(last,tumblingWin,win){
        if(freeSpinsManager_.getIsInFs()==false){
            coinWinTxt_.setText("");
            TweenMax.to(coinWinTxt_,0,{ y :displayManager.groups.centralLineWin.texts.lineWin.y,alpha:1});
        }else{
            TweenMax.to(coinWinTxt_,0,{alpha:1});
        }
        soundManager_.playSound("line");
        if (last){
            coinWinTxt_.setText("");
            coinWinTxt_.y=displayManager.groups.centralLineWin.texts.lineWin.y;
            winManager_.resetWinAmt();
            winManager_.setWinAmountBonus(tumblingWin);
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
                var numObj = Math.min(Math.max((Math.ceil(amt )/3),15),70);
                var interval = time / numObj;
                for (a = 0; a <= numObj; a++) {
                    funtainEventManager_.addEvtForce(startNewSmallObject_, interval);
                    if (a%10==0)funtainEventManager_.addEvtForce(startCoinsSound_,0);
                }
                funtainEventManager_.triggerEvt();
                setTimeout(gameClass_.lineCompletion,me.getTotalDuration()+1000,true);
            }else{
                setTimeout(gameClass_.lineCompletion,100,true);
            }

            if (winAnim.bigWinText[index] == "1") {    // show coins animation
                changeCentralWinStage_(index - 5, false);
            }
            playWinningSounds_(tumblingWin,true);
            var additionalTime= winAnim.centralWinDur[index]*1000;
            totalDuration_=700+additionalTime+(winAnim.winTxtDuration[index]*1000);
            setTimeout(finalizeComplete_,totalDuration_+2000);
            gameClass_.fsEval();
            if(freeSpinsManager_.getIsInFs()==false)winAmtManager_.showIstantUpdateWin( tumblingWin ,"Total WIN");
        }else{
            winManager_.resetWinAmt();
            //setTimeout(gameClass_.lineCompletion,5000,true);
            bSkip_=true;
            if(freeSpinsManager_.getIsInFs()==false && win>0)winAmtManager_.showIstantUpdateWin( tumblingWin ,"Tumble WIN");
            bCompleted_=true;
        }
    }

    function finalizeComplete_(){
        bCompleted_=true;
        gameClass_.increaseVolumeBG();
    }

    function finalizeComplete2_(){
        bCompleted_=true;
    }

    function startUpdate(tumblingWin,win){
        var amt=200;
        setTimeout(delayedStartUpdate_,amt,false,tumblingWin,win);
    }

    function startUpdateLast(tumblingWin){
        var amt=200;
        setTimeout(delayedStartUpdate_,amt,true,tumblingWin,0);
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
            smb.anim[a] = game_.add.sprite(smb.pos[a].x + ReelConfig.icon.width / 2, smb.pos[a].y + ReelConfig.icon.height / 2, "anim" + smb.smbNum[a]);

            if (smb.smbNum[a]==9)soundManager_.playSound("iconWild");

            if (game.cache.checkImageKey("winglow" + smb.smbNum[a]) == true) {
                var wg = game_.add.sprite(smb.pos[a].x + ReelConfig.icon.width / 2, smb.pos[a].y + ReelConfig.icon.height / 2, "winglow" + smb.smbNum[a]);

                wg.animations.add("anim");
                wg.animations.play("anim", 36, false, true);//todo parametric loop
                TweenMax.to(wg.scale, .3, {x: 1.1, y: 1.1, ease: Sine.easeOut});//,onComplete:fadeAway_,onCompleteParams:[wg]
                wg.anchor.set(.5, .5);
                wg.scale.x = 1;
                wg.scale.y = 1;
                displayManager_.getGroup("winGlow").add(wg);
                TweenMax.to(smb.anim[a].scale, .3, {x: 1.1, y: 1.1, ease: Sine.easeOut, onComplete: popComplete_});

                var expl = game_.add.sprite(smb.pos[a].x + ReelConfig.icon.width / 2, smb.pos[a].y + ReelConfig.icon.height / 2, "shamrock-pop" );
                expl.anchor.set(.5, .5);
                expl.animations.add("anim");
                expl.scale.x=1;
                expl.scale.y=1;
                expl.animations.play("anim", 36, false, true);//todo parametric loop
                displayManager_.getGroup("winGlow").add(expl);

            }

            smb.anim[a].anchor.set(.5, .5);
            smb.anim[a].animations.add("anim");
            smb.anim[a].scale.x=1;
            smb.anim[a].scale.y=1;
            smb.anim[a].smbNum=smb.smbNum[a];
            smb.simbolReference[a].visible=false;
            smb.simbolReference[a]=smb.anim[a];
            smb.anim[a].special=special;
            spinManager_.getReelGroup(smb.reel[a]).add(smb.anim[a]);
            //animGroup_.add(smb.anim[a]);
            spinManager_.setAnimationMap(smb.reel[a],smb.icon[a],smb.anim[a]);
        }else{
            smb.anim[a]=spinManager_.getAnimationMap(smb.reel[a],smb.icon[a]);
            smb.simbolReference[a]=smb.anim[a];
        }
        if (smb.smbNum[a]==8) {
            smb.anim[a].animations.play("anim", 36, false, true, convertIcons_, [smb, a]);//todo parametric loop
        }else{
            smb.anim[a].animations.play("anim", 36, false, false, restoreIcon_, [smb, a]);//todo parametric loop
        }

        reelSmb[smb.reel[a]].tumbleObj.push(smb.anim[a]);
        smb.anim[a].alpha=1;

    }

    function popComplete_() {
        if (pop_==false)setTimeout(soundManager_.playSound ,300,"iconExplode_"+ Math.min(Math.ceil(gameClass_.getCollected()/10),6));
        pop_=true;
        //soundManager_.playSound("smbWin_" + Math.ceil(gameClass_.getCollected()/10));
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
        if (tumbling_==true) {
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
                //reorder the tumbling smb from the bottom
                spinManager_.tumble(b, reelSmb[b]);
            }

            if (tumble) {
                if (gameClass_.endTumble != null) setTimeout(gameClass_.endTumble, 0, .15, 1, 4);
            }
        }else{
            //setTimeout(gameClass_.setChange,1000,false);
        }
    }

    function scaleBack_(anim){
        if (stopEvent_== true){
            return;
        }
        anim.value_=anim.value_+.7;
        TweenMax.to(anim.scale,.3,{x:1.15,y:1.15,onComplete:riScaleBack_,onCompleteParams:[anim]})
    }

    function riScaleBack_(anim){
        if (anim.value_>findWinRange_(lineWinAmt_)){
            anim.visible=false;
            anim=null;
            return;
        }
        TweenMax.to(anim.scale,.3,{x:1,y:1,onComplete:scaleBack_,onCompleteParams:[anim]})
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
    }

    function clearAll_() {
        bSkip_=false;
        for (var a in displayManager_.getGroup("winGlow").children){
            displayManager_.getGroup("winGlow").remove(displayManager_.getGroup("winGlow").children[a]);
        }

        for (var a in displayManager_.getGroup("scatter").children){
            displayManager_.getGroup("scatter").remove(displayManager_.getGroup("scatter").children[a]);
        }
    }

    function clearLineAfterValue_(){
        stopEvent_=true;
        resetCentralWin_();
        //clearAll_();
        winEventManager_.clearEvt();
        if (bCompleted_==true){
            displayManager_.getText("lineWin").setText("");
            return;
        }

        var winAmount=winManager_.getWinAmt() ;
        //endCoins_();coinWinTxt_.setText(balanceManager_.getCurrencySmb()+ "" + Util.formatNumber(winAmount,Util.getNubersOfDecimal()));

        if(freeSpinsManager_.getIsInFs()==false){
            TweenMax.to(coinWinTxt_,.2,{y:500,alpha:0,onComplete:startForceUpdate,ease:Sine.easeInOut});
        }else{
            TweenMax.to(coinWinTxt_,.2,{alpha:0,onComplete:startForceUpdate,ease:Sine.easeInOut});
        }
    }

    function startForceUpdate(){
        coinWinTxt_.setText("");
        if(freeSpinsManager_.getIsInFs()==false) {
            TweenMax.to(coinWinTxt_, 0, {y: displayManager.groups.centralLineWin.texts.lineWin.y, alpha: 1});
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

        // }
        // if ( gameClass_.getCompulsivePlayer()==true) {
        //     return Math.min(number, 1);
        // }else if (freeSpinsManager_.getIsInFs()){
        //     return Math.min(number, 3);
        // }else{
        //     return number;
        // }

        return number;
    }

    function findWinRangeB_(amt){
        var number=winAnim.winClasses_.length-1;
        for (var a in winAnim.winClasses_){
            if(winAnim.winClasses_[a]>=amt) {
                number = Number(a-1);
                break;
            }
        }
        return number;
    }

    function getInterruptedWinAnim_(){
        return !bCompleted_;
    }

    function completeValue_(){
        if (freeSpinsManager_.getIsInFs()==false || freeSpinsManager_.getFsNumber()==-999) {
            TweenMax.to(coinWinTxt_, 1, {y: 598, onComplete: startUpdate, onCompleteParams:[tumblingWin_,lineWinAmt_],ease: Bounce.easeOut});
        }else{
            bCompleted_=true;
        }
    }

    function updateValue_(txt){
        if (coinWinTxt_.text.length>=12) {
            coinWinTxt_._fontSize=40;
        }else if (coinWinTxt_.text.length>=10) {
            coinWinTxt_._fontSize=45;
        }else if (coinWinTxt_.text.length>=6){
            coinWinTxt_._fontSize=50;
        }else{
            coinWinTxt_._fontSize=65;
        }
    }

    function completeValueLast_(){

        if (freeSpinsManager_.getIsInFs()==false || freeSpinsManager_.getFsNumber()==-999) {
            TweenMax.to(coinWinTxt_, 1, {y: 598, onComplete: startUpdateLast,onCompleteParams:[tumblingWin_,0], ease: Bounce.easeOut});
        }else{
            gameClass_.lineCompletion(true);
            //TweenMax.to(coinWinTxt_,0,{ y :displayManager.groups.centralLineWin.texts.lineWin.y,alpha:1});
            //endCoins_();
            bCompleted_=true;
        }
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
        for (var a=1; a<=centralWinMsgGroups_.length-1;a++) {
            for ( var i=0;i<3;i++)
            {
                centralWinMsgGroups_[a][i].alpha = 0;
                centralWinMsgGroups_[a][i].scale.x = 1;
                centralWinMsgGroups_[a][i].scale.y = 1
            }
        }

    }

    function stopBigWinAnimation_(){
        soundManager_.stopSound(winAnim.accuSnd);
        for (var a=1; a<=centralWinMsgGroups_.length-1;a++) {
            for ( var i=0;i<3;i++) {
                centralWinMsgGroups_[a][i].alpha = 0;
                centralWinMsgGroups_[a][i].scale.x = 1;
                centralWinMsgGroups_[a][i].scale.y = 1;
            }
        }
    }

    function changeCentralWinStage_(stage, bonus){
        if (reset_==true)return;
        for (a in objThrown_){
            if(objThrown_[a]!=null) {
                objThrown_[a].destroy();
                objThrown_[a] = null;
            }
        }
        objThrown_=[];

        resetCentralWin_();
        stage_=stage;
        centralWinGroup_.visible=true;

        tw_=[];
        if(centralWinMsgGroups_[stage_][0]){
            centralWinMsgGroups_[stage_][0].visible=true;
            centralWinMsgGroups_[stage_][0].alpha=1;
            centralWinMsgGroups_[stage_][0].animations.add("anim");
            centralWinMsgGroups_[stage_][0].animations.play("anim", 24, false, false,endAnimPart_,[stage,0]);//todo parametric loop
            tw_.push(TweenMax.to(centralWinMsgGroups_[stage_][0],.2,{y:centralWinMsgPos_[stage_],ease:Bounce.easeOut}));
        }

        centralFuntainGroup_.visible = true;
        funtainEventManager_.clearEvt();
        var time = (winAnim.centralWinDur [(5+stage_)]+ winAnim.winTxtDuration [(5+stage_)] ) * 1000;
        setTimeout(lineCompletion_,(time+1000));
        var numObj= 300*stage_;
        var interval=time/numObj;
        for (a = 0; a <= numObj; a++) {
            funtainEventManager_.addEvtForce(startNewObject_,interval);
            if (a%20==0)funtainEventManager_.addEvtForce(startCoinsSound_,0);
        }
        funtainEventManager_.triggerEvt();

    }


    function lineCompletion_(){
        if (stage_>0 && centralWinMsgGroups_[stage_][2]!=null && centralWinMsgGroups_[stage_][2].alpha==1){

            revAnimFrameSeq_ = []
            for (var b = 1;b <= centralWinMsgGroups_[stage_][2].animations._outputFrames.length; b++) {
                revAnimFrameSeq_.push(b);
            }
            revAnimFrameSeq_.reverse();

            centralWinMsgGroups_[stage_][2].animations.add("anim",revAnimFrameSeq_);
            centralWinMsgGroups_[stage_][2].animations.play("anim", 24, false, false,endAnimPartRev_,[stage_,2]);//todo parametric loop
        }else{
            gameClass_.lineCompletion(true);
        }

    }

    function endAnimPart_(params){
        var stage_=params[0];
        var part=Number(params[1]);

        part++;

        if (part<3) {
            centralWinMsgGroups_[stage_][part-1].alpha=0;
            centralWinMsgGroups_[stage_][part].visible=true;
            centralWinMsgGroups_[stage_][part].alpha = 1;
            centralWinMsgGroups_[stage_][part].animations.add("anim");
            centralWinMsgGroups_[stage_][part].animations.play("anim", 24, false, false,endAnimPart_,[stage_,part]);//todo parametric loop
        }
    }

    function endAnimPartRev_(params){
        var stage_=params[0];
        var part=Number(params[1]);

        part= part-1;

        if (part>=0) {
            revAnimFrameSeq_ = []
            for (var b = 1;b <= centralWinMsgGroups_[stage_][part].animations._outputFrames.length; b++) {
                revAnimFrameSeq_.push(b);
            }
            revAnimFrameSeq_.reverse();
            centralWinMsgGroups_[stage_][part+1].alpha=0;
            centralWinMsgGroups_[stage_][part].visible=true;
            centralWinMsgGroups_[stage_][part].alpha = 1;
            centralWinMsgGroups_[stage_][part].animations.add("anim",revAnimFrameSeq_);
            centralWinMsgGroups_[stage_][part].animations.play("anim", 24, false, false,endAnimPartRev_,[stage_,part]);//todo parametric loop
            if (part==0)tw_.push(TweenMax.to(centralWinMsgGroups_[stage_][0],.2,{y:-200,ease:Bounce.easeIn}));
        }else{
            setTimeout(fadeCentralWin_,500);
        }
    }

    function fadeCentralWin_(){
        if (stage_>0 && centralWinMsgGroups_[stage_][0]!=null)centralWinMsgGroups_[stage_][0].alpha = 0;
        gameClass_.lineCompletion(true);
        centralWinGroup_.visible=false;
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
        if (stage_<=0)return;
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
            var additionalTime= winAnim.centralWinDur[index]*1000;
            totalDuration_=(winAnim.winTxtDuration[index]*1000);

            return additionalTime +totalDuration_;
        },
        completeValue:completeValue_,
        completeBonusValue:completeBonusValue_,
        startIdleCycle:startIdleCycle_,
        resumeTumbling:resumeTumbling_
    }

    initClass_();
    return me;
}

