/**
 * KiS Framework, Created by Fabry on 18/09/2017.
 */
function AllLineWinningsFirst(gameRef, gameClass) {
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
    var allLineDraw_=[];

    //central win amt
    var stage_=0;
    var centralWinGroup_;
    var centralWinMsgGroups_=[];
    var centralWinMsgPos_=[];
    var reset_=false;
    var wins;
    var tw_=[];

    //central win funtain
    var objThrown_=[];
    var centralFuntainGroup_;
    var centralFuntainGroupSmallObj_;
    var currentSmb_;
    var currentWinWeight_;
    var stToClear_=[];
    var bgStopped_=false;

    //rope
    var rope_;
    var ct_ = 0;
    var revert_ = false;
    var intervalRope_;
    var inc_=.70;

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
        winEventManager_ = new EventManager();
        funtainEventManager_= new EventManager();

        for (var a in displayManager.groups.centralWin.buttons) {
            var buttonE = new Phaser.Button(game_, displayManager.groups.centralWin.buttons[a].x, displayManager.groups.centralWin.buttons[a].y, displayManager.groups.centralWin.buttons[a].name, me[displayManager.groups.centralWin.buttons[a].evt], this, 1, 2, 0, 0);
            buttonE.alpha=0;
            buttonE.anchor.set(0.5, 0.5);
            centralWinGroup_.add(buttonE);
        }

    }

    var winAnim = {
        "winClasses_":     [0,   1,   2,  5,    7,  12, 24,    50, 100],
        "winClassesBI_":   [0,   1,   1,  1, 1, 1, 2, 5, 10],
        "winSound_":       [0,   1,   3,  3, 4, 5, 6, 7, 8],
        "winTxtDuration": [.5,  1.5, 1.7, 2,   2.5, 3.5, 4,   4,    4],
        "centralWinDur": [0, 0, 0, 0, 0, 0, 5, 6, 7],
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

    function doOk_() {
        winEventManager_.clearEvt();
        clearLineAfterValue_();
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
        winAmt_=0;
        stopEvent_=true;
        for (var a in stToClear_)clearTimeout(stToClear_[a]);
    }

    function showBonusWin_(amt,amtCash){
        clearLine_();
        var index=findWinRangeB_(amt);
        var time=winAnimB.winTxtDuration[index] * 1000;
        reset_=false;
        displayManager_.getText("winValue").setText("");
        //display central coins
        stepInc_= 2;

        var bkp=winAnimB.accuSnd;
        if (index>0) {
            if (gameClass_.getCompulsivePlayer()) winAnimB.accuSnd = "";
            if (ReelConfig.winType == "BounceWin")
                winAmtClass_ = new BounceWin(game_, gameClass_, winAnimB, "lineWin");
            if (ReelConfig.winType == "SimpleWin")
                winAmtClass_ = new SimpleWin(game_, gameClass_, winAnimB, "lineWin");

            if (balanceManager_.getShowIncredits() == false) {
                if (gameClass_.getCompulsivePlayer()) {
                    winAmtClass_.showShortWin(amtCash, null, null, stopIncSound_, null)
                } else {
                    winAmtClass_.showWin(amtCash, null, null, stopIncSound_, 0, null, stepInc_, time / 1000);
                }
            } else {
                if (gameClass_.getCompulsivePlayer()) {
                    winAmtClass_.showShortWin(amt, null, null, stopIncSound_, null)
                } else {
                    winAmtClass_.showWin(amt, null, null, stopIncSound_, 0, null, stepInc_, time / 1000);
                }
            }
        }
        if (gameClass_.getCompulsivePlayer())winAnimB.accuSnd=bkp;
        return (gameClass_.getCompulsivePlayer())?2000:time;

        return time;
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

    var winAmt_=0;
    function prepareWinnings_(winSmb) {
        winAmt_= winManager_.getLineWinAmt();
        coinsIconPoints_ = [];
        for (var line in winSmb) {
            if(winSmb[line]!=undefined)
                calcSingleLinePoints_(winSmb[line].line, winSmb[line]);
        }
    }

    function calcSingleLinePoints_(line, winSmb) {
        var smbW_ = ReelConfig.icon.width;
        var smbH_ = ReelConfig.icon.height;
        var pp;
        var real;
        var iconNum;

        coinsIconPoints_[line] = [];
        for (var w in winSmb.pos) {
            if (winSmb.smbNum!=null && winSmb.smbNum[w]!=null)iconNum = winSmb.smbNum[w];
            pp = new Phaser.Point(lineConfig.line.x_origin, 0);
            if (w == 0) {   //first symbol
                real = new Phaser.Point(winSmb.pos[w].x + pp.x, winSmb.pos[w].y + smbH_ / 2 + pp.y);
                coinsIconPoints_[line].push(real);
            }
            real = new Phaser.Point(winSmb.pos[w].x + smbW_ / 2, winSmb.pos[w].y + smbH_ / 2);
            coinsIconPoints_[line].push(real);
        }

        for ( var rest =Number(w)+1; rest<5 ;rest++){
            var smb= spinManager_.getReels()[rest].getPos((Number(lineConfig.line.lines[line].config[rest])));
            real = new Phaser.Point(smb.x + smbW_ / 2, smb.y + smbH_ / 2);
            coinsIconPoints_[line].push(real);
        }
        coinsIconPoints_[line].push(real);
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
        var iMaxSmb=0;
        wins=winManager_.getAllWinsSortedByAmt();
        bCompleted_=false;
        reset_=false;
        stopEvent_=false;
        if(coinWinGroup_!=null)coinWinGroup_.visible=true;
        if(animGroup_)animGroup_.visible=true;
        if (ReelConfig.winType=="BounceWin")
            winAmtClass_= new BounceWin(game_,gameClass_, winAnim,"lineWin");
        if (ReelConfig.winType=="SimpleWin")
            winAmtClass_= new SimpleWin(game_,gameClass_, winAnim,"lineWin");
        winEventManager_.clearEvt();
        totalDuration_=0;

        resetCentralWin_();
        resetPrevSounds_();
        index=findWinRange_(winManager_.getLineWinAmt());
        soundManager_.playSound("winBg_"+ winAnim.winSound_[index]);   //total bg sound

        //decrease music bg for winnings
        gameClass_.decreaseVolumeBG(me.getTotalDuration());

        bgStopped_=true;

        if (displayManager_.getGroup("bgIconAnim")!=undefined) {
            for (var a in displayManager_.getGroup("bgIconAnim").children) {
                if (displayManager_.getGroup("bgIconAnim").children[a].tw != undefined) displayManager_.getGroup("bgIconAnim").children[a].tw.kill();
                displayManager_.getGroup("bgIconAnim").remove(displayManager_.getGroup("bgIconAnim").children[a]);
            }
        }

        winEventManager_.addEvent(changeAllHL_, 200, [.35]);
        allLineDraw_=[];
        for (var a in wins) {
            if (wins[a] != undefined) {
                if (wins[a].winAmount > 0) {
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
                    winEventManager_.addEvent(amimIcon_, 0, [wins[a]]);   //anim icon
                    if(loginVars.getRegParams().jurisdiction.toUpperCase()=="IT" && Number(gameParams.gameOriginalID >= "7021") ) { //all lines must show for IT
                        if (checkBrowser_()) {
                            allLineDraw_[a] = new RopeDraw(game_, gameClass);
                        } else {
                            allLineDraw_[a] = new CCurveDraw(game_, gameClass);
                        }
                        allLineDraw_[a].showStatic(wins[a].smbNum[0], wins[a].line, wins[a].amt, coinsIconPoints_[wins[a].line], 1000);
                    }
                }
            }
        }
        soundManager_.playSound("smbWin_"+iMaxSmb);
        if(loginVars.getRegParams().jurisdiction.toUpperCase()=="IT")winEventManager_.addEvent(fakeEvent,1000);//goes with tall the lines static show above
        winEventManager_.addEvent(showCentralWin_,10,[index]);
        winEventManager_.addEvent(triggerComplete_,100);
        winEventManager_.addEvent(updateBalance_,((winAnim.winTxtDuration[index]*1000)+winAnim.centralWinDur[index]*1000));
        if (freeSpinsManager_.getIsInFs()==false)winEventManager_.addEvent(idle_,(winAnim.bigWinText[index]=="0")?ReelConfig.delayBeforeIdle:(winAnim.winTxtDuration[index]*1000+  (winAnim.centralWinDur[index]*1000) + ReelConfig.delayBeforeIdle), [wins[a]]);   //anim icon

        winEventManager_.triggerEvt();
    }

    function showCentralWin_(params){
        var index=findWinRange_(winManager_.getLineWinAmt());
        if (index>1) {
            winAmtClass_.showWin(winManager_.getLineWinAmt(), null, null, null, 0, null, winAnim.scaleFactor[index], winAnim.winTxtDuration[index]);
        }else{
            bCompleted_=true;
            // winManager_.resetWinAmt();
            bSkip_=true;
            winAmtManager_.showIstantUpdateWin( winManager_.getLineWinAmt());

            setTimeout(gameClass_.lineCompletion,100,true);
            balanceManager_.setCanUpdate(true);
            //gcmCalls_("PAID", winManager_.getWinAmtCash());
            //relax
            //clientMessageSend("value-win",winManager_.getWinAmtCash());
            coinWinTxt_.setText("");
        }
        if (winAnim.bigWinText[index]=="1" ){    // show coins animation
            stToClear_.push(setTimeout(changeCentralWinStage_,(winAnim.winTxtDuration[index]*1000)-1000, index-5,false));
        }else if (index>0){
            centralFuntainGroup_.visible = true;
            funtainEventManager_.clearEvt();
            var time =300*(index+1);
            var amt= winManager_.getLineWinAmt();
            if(balanceManager_.getShowIncredits()==false) {
                amt=  amt/ balanceManager_.getCoinValue()*lineManager_.getLinesNumber();
            }
            var numObj= Math.ceil(amt/3);
            var interval=time/numObj;
            for (a = 0; a <= numObj; a++) {
                funtainEventManager_.addEvtForce(startNewSmallObject_,interval);
                if (a%10==0)funtainEventManager_.addEvtForce(startCoinsSound_,0);

            }
            funtainEventManager_.addEvtForce(resetCentralWin_,2000);
            funtainEventManager_.triggerEvt();
            setTimeout(gameClass_.lineCompletion,me.getTotalDuration()+1000,true);
        }
    }

    function startCoinsSound_(){
        soundManager_.playSound("coins");
    }

    function drawLine_(params) {
        if (stopEvent_==true)return;
        var line = params[0];
        var smb = params[1];
        var amt = params[2];
        var time = params[3];
        var snd = params[4];
        var btn =gameClass_.getLineButton(line);

        currentSmb_=smb;
        currentWinWeight_=  amt*3;

        for (var a in btn){
            btn[a].getButton().tint=0x62e515;
            btn[a].getButton().children[0].fill="#ffffff";
        }
        //start big win funtain handle
        if (stage_>0) {
            startFuntain_();
        }
        clearAll_();
        if (coinsIconPoints_[line].length > 0) {
            if (checkBrowser_()){
                lineDraw_ = new RopeDraw(game_, gameClass);
            }else{
                lineDraw_ = new CCurveDraw(game_, gameClass);
            }
            lineDraw_.startDraw(smb,line, amt,coinsIconPoints_[line]);
            if (snd && (stage_<=0  || ReelConfig.muteDuringWins!=true))soundManager_.playSound("smbWin_"+smb);
        }


    }

    function startDrawLine_(smb, line, amt) {
        if (rope_ !=null && rope_.updateAnimation!=null){
            rope_.updateAnimation= null;
            rope_.destroy();
        }
        initLineParams();
        var fsp = new FindSmoothPath(coinsIconPoints_[line], true, 2).getArrayOfPoints();
        rope_ =  game_.add.rope(0, 0, 'line_0_00', null, fsp);
        mainGroup_.add(rope_);

        rope_.updateAnimation = function () {
            rope_.loadTexture('line_0_' + Util.formatTwoDigit(parseInt(ct_ % ReelConfig.lineFrames)));
            if (ct_ <  ReelConfig.lineFrames && revert_ == false) {
                ct_ += inc_;
            } else {
                rope_.updateAnimation = null;
                rope_.destroy();
                //here manage reope restart
                //ropeRestart()
            }
        }
    }

    function updatePrize_(){
        //start the winning central win dispaly during FS
        if (freeSpinsManager_.getIsInFs()==true){
            freeSpinsManager_.updateFreeSpinsTotWon();
        }
        bCompleted_=true;
        soundManager_.playSound("smbFsWin");
    }

    function idle_(force) {
        var index = 0;
        wins=winManager_.getAllWinsSortedByAmt();
        winEventManager_.clearEvt();

        for (var a in wins) {
            if (wins[a] != undefined) {
                if (wins[a].winAmount > 0) {
                    winEventManager_.addEvent(changeAllHL_, 200, [.35]);
                    winEventManager_.addEvent(amimIconIdle_, 0, wins[a]);
                    winEventManager_.addEvent(fakeEvent, ReelConfig.idleLineTime);
                    index++;
                }
            }
        }
        winEventManager_.addEvent(idle_, 1000, [force]);
        winEventManager_.triggerEvt();
    }

    function amimIconIdle_(winSmb_) {
        var index = 0;
        //lineWinAmtManager_.showLine();
        if (balanceManager_.getShowIncredits()==false) {
            displayManager_.getText("lineWin").setText(balanceManager_.getCurrencySmb() + "" + Util.formatNumber(winSmb_.winAmountCash, Util.getNubersOfDecimal()));
        }else{
            displayManager_.getText("lineWin").setText( Util.formatNumber(winSmb_.winAmount, Util.getNubersOfDecimal()));
        }
        drawLine_([winSmb_.line, winSmb_.smbNum[0], null, true,false]);
        for (var b = 0; b < winSmb_.reel.length; b++) {
            if (wildManager_.getWildReel(winSmb_.reel[b]) == false) {
                if (gameClass_.getStickyWildManager()==null || gameClass_.getStickyWildManager().isSymbolWilded(winSmb_.icon[b])!=true) {
                    hlSmb([spinManager_.getAnimationMap(winSmb_.reel[b], winSmb_.icon[b])]);
                }else{
                    gameClass_.getStickyWildManager().wildReelWinAnim(winSmb_.reel[b], winSmb_.icon[b]);
                }
            } else {
                wildManager_.wildReelWinAnim(winSmb_.reel[b]);
            }
        }
    }

    function amimIcon_(params) {
        var winSmb_=params[0];

        for (var a in winSmb_.smbNum){
            delayedAnimation_(winSmb_,a);
        }

        //drawLine_([winSmb_.line, winSmb_.smbNum[0], null, true,false]);
        for (var b = 0; b < winSmb_.reel.length; b++) {
            if (wildManager_.getWildReel(winSmb_.reel[b]) == false) {
                if (gameClass_.getStickyWildManager()==null || gameClass_.getStickyWildManager().isSymbolWilded(winSmb_.reel[b],winSmb_.icon[b])!=true) {
                    hlSmb([spinManager_.getAnimationMap(winSmb_.reel[b], winSmb_.icon[b])]);
                }else{
                    gameClass_.getStickyWildManager().wildReelWinAnim(winSmb_.reel[b], winSmb_.icon[b]);
                }
            } else {
                wildManager_.wildReelWinAnim(winSmb_.reel[b]);
            }
        }
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
        updatePrize_();
        if (bgStopped_ ){
            if(soundManager_.getCanPlayBg()){
                gameClass_.increaseVolumeBG();
            }
            bgStopped_=false;
        }

        //reset_=true;
        if (freeSpinsManager_.getIsInFs()==false || freeSpinsManager_.getFsNumber()==-999) {
            TweenMax.to(coinWinTxt_, .4, {y: 600, alpha: 0.1, onComplete: startUpdate, ease: Sine.easeInOut});
        }else{
            //TweenMax.to(coinWinTxt_,0,{ y :displayManager.groups.centralLineWin.texts.lineWin.y,alpha:1});
            //endCoins_();
            clearAll_();
            bCompleted_=true;
        }
        soundManager_.playSound("line");
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

    function startUpdate(){
        coinWinTxt_.setText("");
        TweenMax.to(coinWinTxt_,0,{ y :displayManager.groups.centralLineWin.texts.lineWin.y,alpha:1});
        winAmtManager_.showIstantUpdateWin( winManager_.getWinAmt() ,"WIN");
        endCoins_();
        clearAll_();
        bCompleted_=true;
    }

    function updateAfterWinScale_(a){
        if (a == null|| a==undefined)return;
        if (a.scale == null || a.scale==undefined)return;
        TweenMax.to(a.scale,.2,{x:1,y:1});
    }

    function changeAllHL_(params) {
        var alpha=params[0];
        var reels = spinManager_.getReels()
        for (var a in reels) {
            for (var s = 0; s < ReelConfig.numIcons ; s++) {
                //reels[a].getSymbol(s).tint = "#CCCCCC";
                var smb=reels[a].getSymbol(s);
                if (smb.smbNum<gameClass_.getHlMaximumIcon())
                    smb.alpha = alpha;
                if (smb.visible==false){
                    //there must be a bloody wild here
                }
            }
        }

        var map=spinManager_.getAllMap();
        for (var a in map) {
            if (map[a]!=null) {
                for (var b in map[a] ) {
                    if (map[a][b].smbNum!=undefined && map[a][b].smbNum<gameClass_.getHlMaximumIcon()) {
                        map[a][b].alpha = alpha;
                    }
                }
            }
        }

        //all wild symbols in expanding wild manager
        var expWRS = gameClass_.getStickyWildSimbs();

        for (var b = 0; b < ReelConfig.numReels; b++) {
            for (var s = 0; s < ReelConfig.numIcons; s++) {
                if (expWRS[b] != undefined) {
                    if (expWRS[b][s] != undefined) {
                        if (expWRS[b][s].anim != null) {
                            if (expWRS[b][s].anim.bgAnim == undefined) {
                                if (stopEvent_==true)return;
                                expWRS[b][s].anim.alpha = alpha;
                                //winning icons animated BG
                                var bgAnim = game_.add.sprite(expWRS[b][s].anim.x, expWRS[b][s].anim.y, "iconWinBgAnim");
                                bgAnim.anchor.set(.5, .5);
                                bgAnim.animations.add("anim");
                                bgAnim.alpha = .75;
                                bgAnim.scale.x = ReelConfig.winHLScale;
                                bgAnim.scale.y = ReelConfig.winHLScale;
                                bgAnim.play("anim", 24, false, false, loopBg_, [bgAnim, a]);
                                expWRS[b][s].anim.bgAnim = bgAnim;
                                bgAnim.alpha = 0;
                                displayManager_.getGroup("bgIconAnim").add(bgAnim);
                                soundManager_.playSound("whl");
                            }
                        }
                    }
                }
            }
        }
        if(freeSpinsManager_.getIsInFs()==false && displayManager_.getGroup("bgIconAnim")!=undefined)displayManager_.getGroup("bgIconAnim").alpha=(alpha!=1)?0:alpha;

    }

    function playBiggerIconSound_(iconN){
        soundManager_.playSound("smbWin_"+iconN);
    }

    function delayedWildReelAnimation_(reel){
        wildManager_.wildReelWinAnim(reel);
    }

    function delayedAnimation_(smb,a){
        if (stopEvent_==true)return;
        var add=false;

        if ((gameClass_.getSymbolWilded !=undefined && gameClass_.getSymbolWilded(smb.reel[a],smb.icon[a])==true) || wildManager_.isReelWilded(smb.reel[a])==true || gameClass_.isReelWilded(smb.reel[a])==true)return;

        if (spinManager_.getAnimationMap(smb.reel[a],smb.icon[a]).animations==null || ReelConfig.keepShowingAnimation==true) //avoid to add the same animation more then once
        {
            var special=smb.simbolReference[a].special;//save icon special infos before removing the icon
            if(spinManager_.getAnimationMap(smb.reel[a],smb.icon[a]).animations!=null){
                spinManager_.getReelGroup(smb.reel[a]).remove(spinManager_.getAnimationMap(smb.reel[a],smb.icon[a]));
            }
            add=true;
            if (gameParams.gameOriginalID !="7021" && smb.smbNum[a]<=8 && displayManager_.getGroup("bgIconAnim")!=undefined) {// not for Barbarian
                if (stopEvent_==true)return;
                //winning icons animated BG
                var bgAnim = game_.add.sprite(smb.pos[a].x + ReelConfig.icon.width / 2, smb.pos[a].y + ReelConfig.icon.height / 2, "iconWinBgAnim");
                bgAnim.anchor.set(.5, .5);
                bgAnim.animations.add("anim");
                if (gameParams.gameOriginalID !="7018") {
                    bgAnim.alpha = .75;
                }
                bgAnim.scale.x =  ReelConfig.winHLScale;
                bgAnim.scale.y =  ReelConfig.winHLScale;
                bgAnim.play("anim", 24, false, false, loopBg_, [bgAnim, a]);
                displayManager_.getGroup("bgIconAnim").add(bgAnim);
                displayManager_.getGroup("bgIconAnim").alpha = 1;
                soundManager_.playSound("whl");
            }

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
        }else{
            smb.anim[a]=spinManager_.getAnimationMap(smb.reel[a],smb.icon[a]);
            smb.simbolReference[a]=smb.anim[a];
        }
        if (smb.anim[a].scale.x <=1) {
            if ( add==true || lineConfig.line.multipleAnimation[smb.smbNum[a]]==true)
                smb.anim[a].animations.play("anim", 24, false, false, restoreIcon_, [spinManager_.getAnimationMap(smb.reel[a], smb.icon[a])]);//todo parametric loop
            else
                setTimeout(restoreIcon_,500,[spinManager_.getAnimationMap(smb.reel[a], smb.icon[a])]);
        }

        smb.anim[a].alpha=1;
    }

    function loopBg_(params){
        if (stopEvent_==true){
            if (displayManager_.getGroup("bgIconAnim")!=undefined)displayManager_.getGroup("bgIconAnim").remove(params[0]);
            return;
        }
        var anim= params[0];
        var a= params[1];
        var animFrameSeq_ = [];
        if (gameParams.gameOriginalID =="7018") {
            return;
        }

        anim.value_=0;
        anim.tw=TweenMax.to(anim.scale,.3,{x:1,y:1,onComplete:scaleBack_,onCompleteParams:[anim]});
    }

    function scaleBack_(anim){
        if (stopEvent_==true){
            if (displayManager_.getGroup("bgIconAnim")!=undefined)displayManager_.getGroup("bgIconAnim").remove(anim);
            return;
        }
        anim.value_=anim.value_+.7;
        TweenMax.to(anim.scale,.3,{x:1.15,y:1.15,onComplete:riScaleBack_,onCompleteParams:[anim]})
    }

    function riScaleBack_(anim){
        if (anim.value_>findWinRange_(winManager_.getLineWinAmt())){
            anim.visible=false;
            anim=null;
            return;
        }
        TweenMax.to(anim.scale,.3,{x:1,y:1,onComplete:scaleBack_,onCompleteParams:[anim]})
    }

    function restoreIcon_(par){
        var smb=par[0];
        if (smb==null || smb == undefined)return;
        TweenMax.to(smb.scale, .1, {x: 1, y: 1});
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
            winAmtClass_.clearAll();
            winAmtClass_=null;
            partialWinAmt_=0;
        }
    }

    function clearAll_() {
        if(lineDraw_!=null)lineDraw_.clearAll();
        if (allLineDraw_!=null){
            for (var a in allLineDraw_){
                if(allLineDraw_[a]!=null) {
                    allLineDraw_[a].clearAllStatic();
                    allLineDraw_[a] = null;
                }
            }
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
        endCoins_();
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
        var number=0;
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
        var number=0;
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
        if (gameClass_.getWasBuyIn!=null && gameClass_.getWasBuyIn()>0) {
            var amtC = amt*balanceManager_.getCoinValue() /lineManager_.getLinesNumber();
            var stages=[];
            stages[0] = winAnim.winClassesBI_[6] * gameClass_.getWasBuyIn();
            stages[1] = winAnim.winClassesBI_[7] * gameClass_.getWasBuyIn();
            stages[2] = winAnim.winClassesBI_[8] * gameClass_.getWasBuyIn();

            var index=-1;
            reset_=false;
            for (var a in stages){
                if (Number(amtC)>=stages[a]){
                    index=Number(a)+1;
                }
            }
            if (index>=0){
                time=(winAnim.winTxtDuration[index+5]-1)  + (winAnim.centralWinDur[index+5]-1)*1000
                resetCentralWin_();
                reset_ = false;
                currentSmb_ = 1;
                currentWinWeight_ = amt;
                stage_ =index;
                changeCentralWinStage_(index,true);
                //setTimeout((winAnim.winTxtDuration[index+6]-1)  + (winAnim.centralWinDur[index+6]-1)*1000,finalizeCentralWin_,winAnim.winTxtDuration[index]*1000+winAnim.centralWinDur[index]*100);
                // var obj={};
                // obj.val=0;
                // tw_.push(TweenMax.to( obj,(winAnim.winTxtDuration[index+6]-1)  + (winAnim.centralWinDur[index+6]-1),{val:Number(amt),onUpdate:updateValue_,onUpdateParams:[obj],onComplete:finalizeCentralWin_, onCompleteParams :[winAnim.winTxtDuration[index]*1000+winAnim.centralWinDur[index]*100],ease: Power2.easeOut}));

                soundManager_.playSound("winBgS_"+(Number(stage_) + 5));
            }else{
                index=findWinRangeB_(amt);
                time=1500;
                if(index>1) {
                    var numObj = Math.ceil(amt / 3);
                    var interval = time / numObj;
                    for (a = 0; a <= numObj; a++) {
                        funtainEventManager_.addEvtForce(startNewSmallObject_, interval);
                        if (a % 10 == 0) funtainEventManager_.addEvtForce(startCoinsSound_, 0);

                    }
                    funtainEventManager_.addEvtForce(resetCentralWin_, 2000);
                    funtainEventManager_.triggerEvt();
                }
            }


        }else{
            index=findWinRangeB_(amt);
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
        }


        return time;
    }

    function resetCentralWin_(){
        stage_=0;
        totalDuration_=0;
        centralWinGroup_.visible=false;
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
        displayManager_.getGroup("centralWin").visible=true;
        centralWinGroup_.visible=true;
        centralWinMsgGroups_[stage_].visible=true;
        tw_=[];
        if(centralWinMsgGroups_[stage_]){
            tw_.push(TweenMax.to(centralWinMsgGroups_[stage_],.1,{delay:.05,alpha:1,y:centralWinMsgPos_[stage_],ease:Bounce.easeOut, onComplete:animCentralStage_,onCompleteParams:[bonus]}));
        }

        centralFuntainGroup_.visible = true;
        funtainEventManager_.clearEvt();
        var time = winAnim.centralWinDur [(5+stage_)]  * 1000;
        setTimeout(lineCompletion_,(time+1000));
        var numObj= 300*stage_;
        var interval=time/numObj;
        for (a = 0; a <= numObj; a++) {
            funtainEventManager_.addEvtForce(startNewObject_,interval);
            if (a%20==0)funtainEventManager_.addEvtForce(startCoinsSound_,0);
        }
        funtainEventManager_.addEvtForce(resetCentralWin_,2000);
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
        if(centralWinMsgGroups_[stage_]){
            tw_.push(TweenMax.to(centralWinMsgGroups_[stage_].scale,.1,{x:1,y:1,ease:Bounce.easeInOut}));
        }
    }

    function removeCentralAnim_(param){
        if (param==true)tw_.push(TweenMax.to(centralWinMsgGroups_[stage_],.5,{delay:3,alpha:0}));

    }

    function lineCompletion_(){
        for (var a=1; a<=centralWinMsgGroups_.length-1;a++) {
            centralWinMsgGroups_[a].alpha=0;
            centralWinMsgGroups_[a].y=-200;
            centralWinMsgGroups_[a].scaleX=1;
            centralWinMsgGroups_[a].scaleY=1
            TweenMax.killChildTweensOf(centralWinMsgGroups_[stage_]);
        }
        gameClass_.lineCompletion(true);
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
            alpha: 1,
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
                centralFuntainGroup_.y=(window.innerHeight)
            }else{
                centralFuntainGroup_.y=0;
            }
        }
        if (Util.getRandomInt(1,100)>50)
            var ob = game_.add.sprite(640+ Util.getRandomInt(-20, 20) , 840, "part-" + Util.getRandomInt(1,stage_));
        else
            var ob = game_.add.sprite(640+ Util.getRandomInt(-20, 20) , 840, "f-part-" + stage_);
        ob.anchor.set(.5, .5);
        ob.angle=Util.getRandomInt(1,180);
        ob.animations.add("anim");
        ob.alpha = 0;
        ob.xVar=Util.getRandomInt(100, 1100);
        TweenMax.to(ob, .3 + Util.getRandomInt(20, 50) / 100, {
            alpha: 1,
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
        winEventManager_.addEvent(idle_,ReelConfig.delayBeforeIdle);
        winEventManager_.triggerEvt();
    }

    function resetPrevSounds_(){
        for (var i=0;i<9;i++){
            soundManager_.stopSound("winBg_"+i);
        }
        for (var i=6;i<9;i++) {
            soundManager_.stopSound("winBg_S_" + i);
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
        doOk:doOk_,
        getTotalDuration:function(){
            //return the total duration of winline process
            var index=findWinRange_(winManager_.getLineWinAmt());
            var additionalTime= winAnim.centralWinDur[index]*1000
            totalDuration_=(winAnim.winTxtDuration[index]*1000)+ (additionalTime);

            return totalDuration_;
        },
        completeValue:completeValue_,
        completeBonusValue:completeBonusValue_,
        startIdleCycle:startIdleCycle_ ,
        getTotalTumblingWin:function (){
            return (winAmt_!=undefined)?winAmt_:0;
        }

    }

    initClass_();
    return me;
}

