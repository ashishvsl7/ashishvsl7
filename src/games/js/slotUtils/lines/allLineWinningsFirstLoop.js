/**
 * KiS Framework, Created by Fabry on 01/04/2019.
 */

function AllLineWinningsFirstLoop(gameRef, gameClass) {
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
    var stages_=[];
    var stage_=0;
    var centralWinGroup_;
    var centralWinRay_;
    var centralWinPopUp_;
    var centralWinMsgBg=[];
    var centralWinMsgTxt=[];
    var centralWinMsgPos_=[];
    var tw1=null;
    var tw2=null;
    var reset_=false;
    var wins;
    var scaleStart_=2.5;

    //central win funtain
    var objThrown_=[];
    var centralFuntainGroup_;
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
        stages_[0]=winAnim.winClasses_[7];
        stages_[1]=winAnim.winClasses_[8];
        stages_[2]=winAnim.winClasses_[9];

        mainGroup_ = displayManager_.getGroup("lines");
        //animGroup_ = displayManager_.getGroup("reels");       //animations can be added in a differe
        coinWinGroup_= displayManager_.getGroup("centralLineWin");
        coinWinTxt_=displayManager_.getText("lineWin");
        //central win
        centralWinGroup_=displayManager_.getGroup("centralWin");
        //bg
        centralWinMsgBg[1]=displayManager_.getGroup("centralWin").bg_3.children[0];
        centralWinMsgBg[2]=displayManager_.getGroup("centralWin").bg_3.children[0];
        centralWinMsgBg[3]=displayManager_.getGroup("centralWin").bg_3.children[0];
        centralWinMsgBg[4]=displayManager_.getGroup("centralWin").bg_4.children[0];
        //text
        centralWinMsgTxt[1]=displayManager_.getGroup("centralWin").bigWin.children[0];
        centralWinMsgTxt[3]=displayManager_.getGroup("centralWin").epicWin.children[0];
        centralWinMsgTxt[2]=displayManager_.getGroup("centralWin").ultraWin.children[0];
        centralWinMsgTxt[4]=displayManager_.getGroup("centralWin").jpotWin.children[0];
        //pos
        centralWinMsgPos_[1]=displayManager_.getGroup("centralWin").bigWin.children[0].y;
        centralWinMsgPos_[3]=displayManager_.getGroup("centralWin").epicWin.children[0].y;
        centralWinMsgPos_[2]=displayManager_.getGroup("centralWin").ultraWin.children[0].y;
        centralWinMsgPos_[4]=displayManager_.getGroup("centralWin").jpotWin.children[0].y;
        //ray
        centralWinRay_=displayManager_.getGroup("centralWin").winRays.children[0];
        //popup
        centralWinPopUp_=displayManager_.getGroup("centralWin").bigWinBg.children[0];
        //funtain
        centralFuntainGroup_=displayManager_.getGroup("centralWin")["group"];
        centralFuntainGroupSmallObj_=displayManager_.getGroup("centralFuntainSmallObj");
        winEventManager_ = new EventManager();
        funtainEventManager_= new EventManager();
    }


    var winAnim= {
        "winClasses_":    [1,    10,    20,  40,   80,  120,  240,  300,  600, 1000, 39999],
        "winTxtDuration": [.5,  .6,   .8,   2,   3,   4.5,    5,  5.5,  6 , 8, 16],
        "scaleFactor":    [1.6,  1.8  ,1.8,   1.8, 1.8, 1.8,  2.5,   3,  3.3,  3.5 , 4],
        "winSound_":    [1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        "bigWinText":   [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2],
        "winTxtColors": ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "ffffff", "#ffffff", "#ffffff", "#ffffff"],
        "winSndEffect": ["", "", "", "", "", "", "", "", "", "",""],
        "accuSnd": ""
    }

    var winAnimB= {
        "winClasses_":    [1,    10,    20,  40,   80,  120,  240,  300,  600, 1000, 39999],
        "winTxtDuration": [.5,  .6,   .8,   2,   3,   3,    3, 4,  5 , 5,10],
        "scaleFactor":    [1.6,  1.8  ,1.8,   1.8, 1.8, 1.8,  2.5,   3,  3.3,  3.5 , 4],
        "winSound_":    [1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        "bigWinText":   [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2],
        "winTxtColors": ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "ffffff", "#ffffff", "#ffffff", "#ffffff"],
        "winSndEffect": ["", "", "", "", "", "", "", "", "", "",""],
        "accuSnd": ""
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
        resetCentralWin_(true);
        clearAll_();
        changeAllHL_([[1]]);
        if (winAmtClass_!=null)winAmtClass_.forceToComplete();
    }

    function stopEvents_(){
        stopEvent_=true;
        for (var a in stToClear_)clearTimeout(stToClear_[a]);
    }

    function showBonusWin_(amt,amtCash){
        clearLine_();
        var time=winAnim.winTxtDuration[findWinRange_(amt)] * 1000;
        reset_=false;
        return time;
    }

    function stopIncSound_() {
        soundManager_.stopSound(winAnim.accuSnd);
    }

    function handleBonusEndWinAnimation_(){
        if (gameClass_.isSpinning()==true)return;
        buttonManager_.applyState("NH");
        buttonManager_.applyRestore();
        //gameClass_.fsEval(true);
    }

    function prepareWinnings_(winSmb) {
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

    function resetPrevSounds_(){
        for (var i=0;i<9;i++){
            soundManager_.stopSound("winBg_"+i);
        }
        for (var i=6;i<9;i++) {
            soundManager_.stopSound("winBg_S_" + i);
        }
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
        index=findWinRange_(winManager_.getLineWinAmt());
        var timeBW=0;
        if (index>6){
            timeBW=2000;
        }
        resetCentralWin_(true);
        resetPrevSounds_();


        soundManager_.playSound("winBg_"+ winAnim.winSound_[index]);   //total bg sound

        //decrease music bg for winnings
        gameClass_.decreaseVolumeBG(me.getTotalDuration());

        winEventManager_.addEvent(changeAllHL_, 200, [.35]);
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
                }
            }
        }
        soundManager_.playSound("smbWin_"+iMaxSmb);
        winEventManager_.addEvent(showCentralWin_,10,[index]);
        winEventManager_.addEvent(triggerComplete_,100);
        winEventManager_.addEvent(updateBalance_,((winAnim.winTxtDuration[index]*1000)+timeBW));
        if (freeSpinsManager_.getIsInFs()==false)winEventManager_.addEvent(idle_, timeBW+ReelConfig.delayBeforeIdle, [wins[a]]);


        winEventManager_.triggerEvt();
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
    };

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
        coinWinTxt_.scale.x = scaleStart_;
        coinWinTxt_.scale.y =scaleStart_;
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
                hlSmb([spinManager_.getAnimationMap(winSmb_.reel[b], winSmb_.icon[b])]);
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
        TweenMax.to(a.scale, .2, {x: 1.1, y: 1.1, onComplete: updateAfterWinScale_, onCompleteParams: [a]});
        a.animations.play("anim", 24, false, false);//todo parametric loop
        //soundManager_.playSound("smbWin_"+a.smbNum);
    }

    function showCentralWin_(params){
        var index=findWinRange_(winManager_.getLineWinAmt());
        freeSpinsManager_.updateFreeSpinsTotWon();

        winAmtClass_.showWin(winManager_.getLineWinAmt(),null,updatingValue_,completeV_,0, null,scaleStart_,winAnim.winTxtDuration[index],"Sine");
        if (index>=4 && index<10){
            gameClass_.playBgLights();
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

    function triggerComplete_(){
    }

    function updateBalance_(){
        updatePrize_();
        //reset_=true;
        if (freeSpinsManager_.getIsInFs()==false || freeSpinsManager_.getFsNumber()==-999) {
            TweenMax.to(coinWinTxt_, .4, {y: 600, alpha: 0.1, onComplete: startUpdate, ease: Sine.easeInOut});
            setTimeout(resetCentralWin_,500);
        }else{
            //TweenMax.to(coinWinTxt_, .01, {y: 600, alpha: 0, onComplete: startUpdate, ease: Sine.easeInOut});
            //TweenMax.to(coinWinTxt_,0,{ y :displayManager.groups.centralLineWin.texts.lineWin.y,alpha:1});
            //endCoins_();
            //endCoins_();
            clearAll_();
            bCompleted_=true;
        }
        coinWinTxt_.scale.x=scaleStart_;
        coinWinTxt_.scale.y=scaleStart_;
        soundManager_.playSound("line");
    }

    function updateBonusBalance_(amt,msg){
        reset_=true;
        winAmtManager_.showIstantUpdateWin(amt,msg);
        //TweenMax.to(coinWinTxt_, .1, {y: 600, alpha: 0.1, onComplete: startBonusUpdate,onCompleteParams:[amt,msg], ease: Sine.easeInOut});
        soundManager_.playSound("line");
        //resetCentralWin_();
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
    }

    function playBiggerIconSound_(iconN){
        soundManager_.playSound("smbWin_"+iconN);
    }

    function amimIcon_(params) {
        var winSmb_=params[0];

        for (var a in winSmb_.smbNum){
            delayedAnimation_(winSmb_,a);
        }
        //drawLine_([winSmb_.line, winSmb_.smbNum[0], null, true,false]);
        for (var b = 0; b < winSmb_.reel.length; b++) {
            var smbIndex=winSmb_.icon[b];

            if (gameClass_.isReelWilded()==undefined || gameClass_.isReelWilded(winSmb_.reel[b])!=true) {
                hlSmb([spinManager_.getAnimationMap(winSmb_.reel[b], winSmb_.icon[b])]);
            }else{
               // gameClass_.getStickyWildManager().wildReelWinAnim(winSmb_.reel[b], smbIndex);
            }
        }
    }

    function delayedWildReelAnimation_(reel){
        wildManager_.wildReelWinAnim(reel);
    }

    function delayedAnimation_(smb,a){
        var add=false;
        if (gameClass_.isReelWilded()!=undefined && gameClass_.isReelWilded(smb.reel[a])==true) {
            wildManager_.wildReelWinAnim(smb.reel[a]);
            return;
        }
        if (spinManager_.getAnimationMap(smb.reel[a],smb.icon[a]).animations==null || ReelConfig.keepShowingAnimation==true) //avoid to add the same animation more then once
        {

            var special=smb.simbolReference[a].special;//save icon special infos before removing the icon
            if(spinManager_.getAnimationMap(smb.reel[a],smb.icon[a]).animations!=null){
                spinManager_.getReelGroup(smb.reel[a]).remove(spinManager_.getAnimationMap(smb.reel[a],smb.icon[a]));
            }
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
        }else{
            smb.anim[a]=spinManager_.getAnimationMap(smb.reel[a],smb.icon[a]);
            smb.simbolReference[a]=smb.anim[a];

        }
        if (smb.anim[a].scale.x <=1) {
            if ( add==true || lineConfig.line.multipleAnimation[smb.smbNum[a]]==true)
                smb.anim[a].animations.play("anim", 24, 1, false, restoreIcon_, [spinManager_.getAnimationMap(smb.reel[a], smb.icon[a])]);//todo parametric loop
            else
                setTimeout(restoreIcon_,500,[spinManager_.getAnimationMap(smb.reel[a], smb.icon[a])]);
        }

        if (smb.anim[a].special!=undefined && smb.anim[a].special=="mult"){
            var smbM = game_.add.sprite(smb.pos[a].x + ReelConfig.icon.width / 2, smb.pos[a].y + ReelConfig.icon.height / 2, "lights-mult");
            smbM.anchor.set(.5, .5);
            smbM.animations.add("anim");
            smbM.scale.x=1;
            smbM.scale.y=1;
            smbM.animations.play("anim", 70, false, true);
            spinManager_.getReelGroup(smb.reel[a]).add(smbM);
        }

        smb.anim[a].alpha=1;
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
        if(lineDraw_!=null)lineDraw_.clearAll();    }

    function clearLineAfterValue_(){
        console.log("clearline")
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
        coinWinTxt_.setText(balanceManager_.getCurrencySmb()+ "" + Util.formatNumber(winAmount,Util.getNubersOfDecimal()));
        TweenMax.to(coinWinTxt_,.2,{y:500,alpha:0,onComplete:startForceUpdate,ease:Sine.easeInOut});
    }

    function startForceUpdate(){
        console.log("start force update reset " );
        coinWinTxt_.setText("");
        TweenMax.to(coinWinTxt_,0,{y:displayManager.groups.centralLineWin.texts.lineWin.y,alpha:1});
        winAmtManager_.showShortWin( winManager_.getWinAmt(), null, null, null,"WIN");
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

    function getColor_(line,smb){
        if (lineConfig.line.showWinWithSmbColor==true){
            return ReelConfig.smb_colors[smb];
        }else{
            return lineConfig.line.lines[line].color;
        }
    }

    function completeValue_(){
        updateBalance_ ();
        setTimeout(handleBonusEndWinAnimation_,1500);
    }

    function completeBonusValue_(amt,msg){
        updateBonusBalance_ (amt,msg);
        setTimeout(handleBonusEndWinAnimation_,1500);
    }

    function showJpotCentralWinGreetings_(amt){
        //value always coming in coins
        var amtC=  Util.getNumericValue(amt)/balanceManager_.getCoinValue() *lineManager_.getLinesNumber();
        var time=0;
        var index=-1;
        reset_=false;
        for (var a in stages_){
            if (Number(amtC)>=stages_[a]){
                time =winAnim.winTxtDuration[findWinRangeB_(amtC )] * 1000;
                index=a;
            }
        }
        if (index>0){
            if (amtC<39999) {
                resetCentralWin_(true);
                stage_ = index;
                reset_ = false;
                currentSmb_ = 1;
                currentWinWeight_ = amt;
                ImmediateCentralWinStage_(amtC);
                soundManager_.playSound("winBgS_"+(Number(stage_) + 6));
                gameClass_.decreaseVolumeBG(winAnim.winTxtDuration[(Number(stage_) + 6)]*1000);
            }else{
                //jackpot
                gameClass_.playBgLights();
                stage_=4;
                ImmediateCentralWinStage_(amtC);
                soundManager_.playSound("winBg_9");
                gameClass_.decreaseVolumeBG(winAnim.winTxtDuration[9]*1000);
            }
        }else{
            time=1500;
        }
        return time;
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
                index=a;
            }
        }
        console.log("showcentral bonus " + index);
        if (index>0){
            resetCentralWin_(true);
            stage_ = index;
            reset_ = false;
            currentSmb_ = 1;
            currentWinWeight_ = amt;
            ImmediateCentralWinStage_(amtC);
            soundManager_.playSound("winBgS_"+(Number(stage_) + 6));
            gameClass_.decreaseVolumeBG(winAnimB.winTxtDuration[(Number(stage_) + 6)]*1000);
        }else{
            time=1500;
        }
        return time;
    }

    function showScatterCentralWinGreetings_(amt){
        var amtC=  Util.getNumericValue(amt)/balanceManager_.getCoinValue() *lineManager_.getLinesNumber();
        var time=0;
        var index=-1;
        reset_=false;
        for (var a in stages_){
            if (Number(amtC)>=stages_[a]){
                time =winAnim.winTxtDuration[findWinRangeB_(amtC)] * 1000;
                index=a;
            }
        }
        if (index>0){
            resetCentralWin_(true);
            stage_=index;
            reset_=false;
            currentSmb_=1;
            currentWinWeight_=amt;
            ImmediateCentralWinStage_(amtC);
        }else{
            if (balanceManager_.getShowIncredits()==false) {
                completeBonusValue_(amt, "Scatter Win");
            }else{
                completeBonusValue_(amtC, "Scatter Win");
            }
            time=1500;
        }
        return time;
    }

    function updatingValue_(amt){
        if (balanceManager_.getShowIncredits()==false)amt=  Util.getNumericValue(amt)/balanceManager_.getCoinValue()*lineManager_.getLinesNumber();
        if (Util.getNumericValue(amt)> stages_[stage_] && displayManager_.getText("lineWin").text!="" && reset_==false){
            changeCentralWinStage_();
        }
    }

    function completeV_() {
        console.log("complete")
        if (tw2!=null) {
            tw2.kill();
            tw2=null;
        }
    }

    function resetCentralWin_(now){
        console.log("resetCentralWin " );
        //gameClass_.stopBgLights();
        soundManager_.stopSound("winBg");
        if(soundManager_.getSound("bigWinBg_"+stage_)!=undefined){
            soundManager_.getSound("bigWinBg_"+stage_).fadeOutBgSound(200);
        }

        stage_=0;
        totalDuration_=0;

        if (tw1!=null)tw1.stop();
        if (tw2!=null)tw2.kill();
        tw1=null;
        tw2=null;
        console.log("kill tw")
        for (var a=1; a<=centralWinMsgBg.length-1;a++) {
            TweenMax.to(centralWinPopUp_.scale,.5,{x:1.1,y:1.1,ease: Sine.easeInOut});
            if (now==true){
                removeCW_(a);
                TweenMax.to(centralWinMsgTxt[a].scale,.5,{x:1.2,y:1.2,ease: Sine.easeInOut});
            }else{
                TweenMax.to(centralWinMsgTxt[a].scale,.5,{x:1.2,y:1.2,ease: Sine.easeInOut,onComplete:removeCW_,onCompleteParams:[a]});
            }
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
        centralWinMsgTxt[a].alpha=0;
        centralWinMsgTxt[a].scaleX=1;
        centralWinMsgTxt[a].scaleY=1;
        centralWinMsgBg[a].alpha=0;
        coinWinTxt_.y=450;
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
        if (stage_==0) {
            if (centralWinMsgBg[stage_] != null) {
                centralWinMsgBg[stage_].visible = false;
                centralWinMsgTxt[stage_].visible = false;
                centralWinMsgBg[stage_].alpha = 0;
                centralWinMsgTxt[stage_].alpha = 0;
                //TweenMax.to(centralWinMsgGroups_[stage_],.1,{alpha:0,y:-200,ease:Bounce.easeIn});
            }
        }
        soundManager_.stopSound(winAnim.accuSnd);

        stage_++;

        if (stage_==1) {
            coinWinTxt_.y = 550;
            console.log("scale first " + winAnim.scaleFactor[6 + stage_]);
            coinWinTxt_.scale.x = winAnim.scaleFactor[6 + stage_];
            coinWinTxt_.scale.y = winAnim.scaleFactor[6 + stage_];
            centralWinPopUp_.visible = false;
            if (stage_ < 4) centralWinPopUp_.visible = true;
            centralWinPopUp_.scale.x = 1;
            centralWinPopUp_.scale.y = 1;
            centralWinMsgTxt[stage_].scale.x = 1;
            centralWinMsgTxt[stage_].scale.y = 1;
            centralWinMsgBg[stage_].visible = true;
            centralWinMsgTxt[stage_].visible = true;
            centralWinMsgBg[stage_].alpha = 1;
            centralWinMsgTxt[stage_].alpha = 1;
            centralWinMsgTxt[stage_].stage=stage_;
            tw2 =TweenMax.to(centralWinMsgTxt[stage_].scale,.5, {
                x: 1.2,
                y: 1.2,
                ease: Sine.easeInOut,
                onComplete: scaleBack_,
                onCompleteParams: [centralWinMsgTxt[stage_]]
            });
        }else{
            bookChange_++;
        }

        //TweenMax.to(centralWinPopUp_.scale, .5, {x: 1.1, y: 1.1, ease: Sine.easeInOut});

        tw1 = game.add.tween(centralWinRay_).to({angle: 360}, 5000, Phaser.Easing.Linear.None, true).loop(true);

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

    function ImmediateCentralWinStage_(amt){
        console.log(amt +" immediate central win " + reset_);
        if (reset_==true)return;
        if (balanceManager_.getShowIncredits()==true) {
            coinWinTxt_.setText(Util.formatNumber(amt, Util.getNubersOfDecimal()));
        }else{
            coinWinTxt_.setText(balanceManager_.getCurrencySmb() + "" + Util.formatNumber(amt * balanceManager_.getCoinValue() / lineManager_.getLinesNumber(), Util.getNubersOfDecimal()));
        }

        displayManager_.getGroup("centralWin").visible=true;
        centralWinGroup_.visible=true;

        soundManager_.stopSound(winAnim.accuSnd);

        coinWinTxt_.y = 550;
        coinWinTxt_.alpha=1;
        coinWinTxt_.visible=true;
        coinWinTxt_.scale.x = 3;
        coinWinTxt_.scale.y = 3;
        centralWinPopUp_.visible = false;
        if (stage_ < 4) centralWinPopUp_.visible = true;
        centralWinPopUp_.scale.x = 1;
        centralWinPopUp_.scale.y = 1;
        centralWinMsgTxt[stage_].scale.x = 1;
        centralWinMsgTxt[stage_].scale.y = 1;
        centralWinMsgBg[stage_].visible = true;
        centralWinMsgTxt[stage_].visible = true;
        centralWinMsgBg[stage_].alpha = 1;
        centralWinMsgTxt[stage_].alpha = 1;
        centralWinMsgTxt[stage_].stage=stage_;
        tw2 =TweenMax.to(centralWinMsgTxt[stage_].scale,.5, {
            x: 1.2,
            y: 1.2,
            ease: Sine.easeInOut,
            onComplete: scaleBack_,
            onCompleteParams: [centralWinMsgTxt[stage_]]
        });

        //TweenMax.to(centralWinPopUp_.scale, .5, {x: 1.1, y: 1.1, ease: Sine.easeInOut});

        tw1 = game.add.tween(centralWinRay_).to({angle: 360}, 5000, Phaser.Easing.Linear.None, true).loop(true);

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

    function change_(s){
        var nextS=s.stage+1;
        console.log("change "+ stage_)
        centralWinMsgBg[s.stage].visible = false;
        centralWinMsgBg[s.stage].alpha = 0;
        centralWinMsgTxt[s.stage].alpha=0;
        centralWinMsgTxt[s.stage].visible=false;
        centralWinMsgTxt[s.stage].scale.x=1;
        centralWinMsgTxt[s.stage].scale.y=1;

        coinWinTxt_.y=550;
        console.log("scale "+winAnim.scaleFactor[6+nextS]);
        coinWinTxt_.scale.x= winAnim.scaleFactor[6+nextS];
        coinWinTxt_.scale.y= winAnim.scaleFactor[6+nextS];
        centralWinPopUp_.visible = false;
        if (nextS < 4) centralWinPopUp_.visible = true;
        centralWinPopUp_.scale.x = 1;
        centralWinPopUp_.scale.y = 1;
        centralWinMsgTxt[nextS].scale.x = 1;
        centralWinMsgTxt[nextS].scale.y = 1;
        centralWinMsgBg[nextS].visible = true;
        centralWinMsgTxt[nextS].visible = true;
        centralWinMsgBg[nextS].alpha = 1;
        centralWinMsgTxt[nextS].alpha=1;
        centralWinMsgTxt[nextS].scale.y=0;
        centralWinMsgTxt[nextS].scale.x=0;
        centralWinMsgTxt[nextS].stage=nextS;
        tw2 =TweenMax.to(centralWinMsgTxt[nextS].scale,.4,{x:1.2,y:1.2,  onComplete: scaleBack2_,onCompleteParams: [centralWinMsgTxt[nextS]] });

        bookChange_=bookChange_-1;
    }

    function scaleAgain_(s){
        console.log("sa")
        tw2 == TweenMax.to(s.scale, .4, {
            x: 1.2,
            y: 1.2,
            ease: Sine.easeInOut,
            onComplete: scaleBack2_,
            onCompleteParams: [s]
        });
    }

    function scaleBack2_(s){
        console.log("sb2 "+bookChange_)
        //TweenMax.to(centralWinPopUp_.scale,.5,{x:1,y:1,ease: Sine.easeInOut});
        if (bookChange_>0){
            this.visible=false;
            this.alpha=false;
            tw2=TweenMax.to(s.scale,.4,{x:.7,y:.7,ease: Sine.easeInOut,onComplete: change_,onCompleteParams: [s]});
        }else{
            tw2=TweenMax.to(s.scale,.4,{x:1,y:1,ease: Sine.easeInOut,onComplete: scaleAgain_,onCompleteParams: [s]});
        }


    }

    function scaleBack_(s){
        console.log("sb")
        scaleBack2_(s);
    }

    function animCentralSound_(){
        soundManager_.playSound("winEffect_"+stage_);
        //soundManager_.getSound("bigWinBg").setVolume(soundManager_.getSound("bigWinBg").getVolume()*1.4);//todo params
    }

    function animCentralStage_(bonus){
        if (bonus == undefined) {
            if (centralWinMsgGroups_[stage_])TweenMax.to(centralWinMsgGroups_[stage_].scale, .1, {
                x: 1.2,
                y: 1.2,
                ease: Bounce.easeInOut,
                onComplete: animCentralStage1_
            })
        } else {
            if (centralWinMsgGroups_[stage_])TweenMax.to(centralWinMsgGroups_[stage_].scale, .5, {
                x: 1.2,
                y: 1.2,
                repeat: 25,
                yoyo: true,
                ease: Circ.easeInOut
            })
        }
    }

    function endBonusAnim_(){
        resetCentralWin_(true);
    }

    function animCentralStage1_(){
        if(centralWinMsgGroups_[stage_])TweenMax.to(centralWinMsgGroups_[stage_].scale,.1,{x:1,y:1,ease:Bounce.easeInOut})
    }

    function startFuntain_(){
        centralFuntainGroup_.visible = true;
        funtainEventManager_.clearEvt();
        var time = winAnim.winTxtDuration[findWinRange_(winManager_.getLineWinAmt())]  * 1000
        var numObj= Math.min(Math.round(currentWinWeight_*20),displayManager.groups.centralWin.maxObjNum);
        var interval=time/numObj;
        for (a = 0; a <= numObj; a++) {
            funtainEventManager_.addEvtForce(startNewObject_,interval);
        }
        funtainEventManager_.triggerEvt();
    }


    function lineCompletion_(){
        for (var a=1; a<=centralWinMsgBg.length-1;a++) {

            centralWinMsgBg[a].alpha=0;
            centralWinMsgBg[a].scaleX=1;
            centralWinMsgBg[a].scaleY=1;

            centralWinMsgTxt[a].alpha=0;
            centralWinMsgTxt[a].scaleX=1;
            centralWinMsgTxt[a].scaleY=1
            //TweenMax.killChildTweensOf(centralWinMsgGroups_[stage_]);
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
        winEventManager_.addEvent(idle_,ReelConfig.delayBeforeIdle);
        winEventManager_.triggerEvt();
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
        showJpotCentralWinGreetings:showJpotCentralWinGreetings_,
        showBonusCentralWinGreetings:showBonusCentralWinGreetings_,
        showScatterCentralWinGreeting:showScatterCentralWinGreetings_,
        getTotalDuration:function(){
            totalDuration_=0;
            if (winManager_.getLineWinAmt()>0) {
                //return the total duration of winline process
                var index = findWinRange_(winManager_.getLineWinAmt());
                var additionalTime = 2000;
                totalDuration_ = (winAnim.winTxtDuration[index] * 1000) + (additionalTime);
            }
            var sAmt=Number((winManager_.getScatterWinAmt()[0]!=undefined && winManager_.getScatterWinAmt()[0][12]!=null  && winManager_.getScatterWinAmt()[0][12].amt!=null)?winManager_.getScatterWinAmt()[0][12].amt:0);
            if(sAmt>0){
                totalDuration_+=1000;
            }
            return totalDuration_;
        },
        completeValue:completeValue_,
        completeBonusValue:completeBonusValue_,
        startIdleCycle:startIdleCycle_
    }

    initClass_();
    return me;
}