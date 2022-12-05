/**
 * KiS Framework, Created by Fabry on 24/05/2017.
 */

function LineTOH(gameRef, gameClass) {
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
    var stages_=displayManager.groups.centralWin.thresHolds;
    var stage_=0;
    var centralWinGroup_;
    var centralWinMsgGroups_=[];
    var centralWinMsgPos_=[];
    var reset_=false;
    var wins;

    //central win funtain
    var objThrown_=[];
    var centralFuntainGroup_;
    var currentSmb_;
    var currentWinWeight_;
    var stToClear_=[];
    var stepInc_;
    var step_=0;
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
        winEventManager_ = new EventManager();
        funtainEventManager_= new EventManager();
    }

    var winAnim= {
        "winClasses_":    [1,    2,    5,   10,  20,  50,  400, 1000, 2000,999999999],
        "winTxtDuration": [.5,  .6,   .8,   1,   1,   1,    1,  1.2,  5  ,6],
        "scaleFactor":    [1.6,  1.8  ,2,   2.2, 2.4, 2.6,  3,   3.1,  3.3,  3.4],
        "winTxtColors": ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "ffffff", "#ffffff", "#ffffff"],
        "winSndEffect": ["", "", "", "", "", "", "", "", "", ""],
        "accuSnd": ""
    }

    var winAnimB= {
        "winClasses_":    [1,    2,    5,   10,  20,  50,  200, 500, 1000,999999999],
        "winTxtDuration": [.2,  .2,   .2,   .3,   .5, .5,   2,   3,   5  ,6],
        "scaleFactor":    [1.1,  1.15 ,1.2, 1.5, 1.7, 1.8, 2,   2.2, 2.3,   2.4],
        "winTxtColors": ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "ffffff", "#ffffff", "#ffffff"],
        "winSndEffect": ["", "", "", "", "", "", "", "", "", ""],
        "accuSnd": "winFSBg"
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
        stopEvent_=true;
        for (var a in stToClear_)clearTimeout(stToClear_[a]);
    }

    function showBonusWin_(amt,amtCash){
        clearLine_();
        var time=winAnimB.winTxtDuration[findWinRangeB_(amt)] * 1000;
        reset_=false;
        displayManager_.getText("winValue").setText("");
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

        stages_=displayManager.groups.centralWin.thresHolds;    // treshold refresh
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
        step_=winAnim.scaleFactor[0];
        totalDuration_=0;
        stepInc_= (winAnim.scaleFactor[findWinRange_(winManager_.getLineWinAmt())]-step_)/wins.length;

        resetCentralWin_();
        if (freeSpinsManager_.getIsInFs()==false) {
            soundManager_.playSound("winBg");

            for (var a in wins) {
                if (wins[a] != undefined) {
                    if (wins[a].winAmount > 0) {
                        var time_ = Math.max(winAnim.winTxtDuration[findWinRange_(wins[a].winAmount)] * 1000, ReelConfig.smbMinAnimTime[wins[a].smbNum[0]] * 1000) ;//based on win lenght
                        console.log("time btwn winnings " + time_)
                        if (balanceManager_.getShowIncredits()==false) {
                            winEventManager_.addEvent(drawLine_, 10, [wins[a].line, wins[a].smbNum[0], wins[a].winAmountCash, time_ / 1000, true]);
                        }else{
                            winEventManager_.addEvent(drawLine_, 10, [wins[a].line, wins[a].smbNum[0], wins[a].winAmount, time_ / 1000, true]);
                        }
                        winEventManager_.addEvent(amimIcon_, 0, wins[a]);
                        winEventManager_.addEvent(fakeEvent, time_);
                        totalDuration_ += time_;
                        index++;
                    }
                }
            }
            winEventManager_.addEvent(triggerComplete_,100);
            winEventManager_.addEvent(updateBalance_,ReelConfig.delayAfterWinAmt);
            winEventManager_.addEvent(idle_,ReelConfig.delayBeforeIdle);
        }else{
            // soundManager_.getSound("bigWinBg").setVolume(soundManager_.getSound("bigWinBg").getBaseVolume());
            soundManager_.playSound("winBg");
            changeAllHL_([[.35]]);
            var icon_=-1;
            for (var a in wins) {
                if (wins[a] != undefined) {
                    if (wins[a].winAmount > 0) {
                        icon_=Math.max(icon_,wins[a].smbNum[0]);
                        winEventManager_.addEvent(amimIcon_, 0, wins[a]);

                    }
                }
            }
            winEventManager_.addEvent(playBiggerIconSound_,0,[icon_]);
            totalDuration_=winAnim.winTxtDuration[findWinRange_(winManager_.getLineWinAmt())]  * 1000;
            var sAmt=Number((winManager_.getScatterWinAmt()[0]!=undefined)?winManager_.getScatterWinAmt()[0][scatterManager_.getTriggerIcon()].amt:0);
            if (balanceManager_.getShowIncredits()==true)sAmt=sAmt / balanceManager_.getCoinValue() * lineManager_.getLinesNumber();
            winEventManager_.addEvent(updatePrize_, 0, [Number(winManager_.getLineWinAmt())+ sAmt,totalDuration_/1000]);
            winEventManager_.addEvent(triggerComplete_,totalDuration_);
        }

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
        //win amount
        if (amt>0){
            var st=partialWinAmt_;
            partialWinAmt_+=Number(amt);
            step_=step_+stepInc_;
            winAmtClass_.showWin(partialWinAmt_,null,updatingValue_,null,st, null,step_,time);
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

    function updatePrize_(params){
        //start the winning central win dispaly during FS
        var amt=params[0];
        var time=params[1];
        if (amt>0){
            var st=partialWinAmt_;
            step_=step_+stepInc_
            winAmtClass_.showWin(amt,null,null,freeSpinsManager_.updateFreeSpinsTotWon,0, null,step_,time);
        }
        bCompleted_=true;
        soundManager_.playSound("smbFsWin");
    }

    function idle_(force) {
        if (stopEvent_ == true && force[0] != true)return;
        stopEvent_ = false;
        var index = 0;
        wins=winManager_.getAllWinsSortedByAmt();
        winEventManager_.clearEvt();
        coinWinTxt_.scale.x = 1.2;
        coinWinTxt_.scale.y = 1.2;
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
        TweenMax.to(a.scale, .2, {x: 1.2, y: 1.2, onComplete: updateAfterWinScale_, onCompleteParams: [a]});
    }

    function triggerComplete_(){

    }

    function updateBalance_(){
        reset_=true;
        if (freeSpinsManager_.getIsInFs()==false || freeSpinsManager_.getFsNumber()==-999) {
            TweenMax.to(coinWinTxt_, .4, {y: 600, alpha: 0.1, onComplete: startUpdate, ease: Sine.easeInOut});
        }else{
            TweenMax.to(coinWinTxt_,0,{ y :displayManager.groups.centralLineWin.texts.lineWin.y,alpha:1});
            endCoins_();
            clearAll_();
            bCompleted_=true;
        }
        soundManager_.playSound("line");
        resetCentralWin_();
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

    function amimIcon_(smb) {
        if (stopEvent_==true)return;
        var index=0;
        var wildReelAnim=[];
        var wildReelSeq=[];
        for (var a in smb.smbNum) {
            if (wildManager_.getWildReel(smb.reel[a])==false) {
                if (smb.smbNum[a]=="previous"){
                    smb.smbNum[a]=(spinManager_.getReels()[smb.reel[a]].getIconNum((Number(lineConfig.line.lines[smb.line].config[smb.reel[a]]))));
                    smb.simbolReference[a]=(spinManager_.getReels()[smb.reel[a]].getSymbol((Number(lineConfig.line.lines[smb.line].config[smb.reel[a]]))));
                }
                if (game.cache.checkImageKey("anim" + smb.smbNum[a]) == true) {
                    index++;
                    stToClear_.push(setTimeout(delayedAnimation_, index * 0.08 * 1000, smb, a));
                }
            }else{
                if (wildReelSeq.indexOf(smb.reel[a]<0)) {
                    wildReelAnim.push(index * 0.08 * 1000);
                    wildReelSeq.push(smb.reel[a]);
                }
            }
        }
        if (wildReelSeq.length>0){
            for (var a in wildReelSeq )
                stToClear_.push(setTimeout(delayedWildReelAnimation_, wildReelAnim[a],wildReelSeq[a]));
        }
    }

    function delayedWildReelAnimation_(reel){
        wildManager_.wildReelWinAnim(reel);
    }

    function delayedAnimation_(smb,a){
        var add=false;
        if (spinManager_.getAnimationMap(smb.reel[a],smb.icon[a]).animations==null || ReelConfig.keepShowingAnimation==true) //avoid to add the same animation more then once
        {

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
            spinManager_.getReelGroup(smb.reel[a]).add(smb.anim[a]);
            //animGroup_.add(smb.anim[a]);
            spinManager_.setAnimationMap(smb.reel[a],smb.icon[a],smb.anim[a]);
        }else{
            smb.anim[a]=spinManager_.getAnimationMap(smb.reel[a],smb.icon[a]);
            smb.simbolReference[a]=smb.anim[a];
        }
        if (smb.anim[a].scale.x <=1) {
            if ( add==true || lineConfig.line.multipleAnimation[smb.smbNum[a]]==true)

                smb.anim[a].animations.play("anim", 24, (smb.smbNum[a]<4)?2:false, false, restoreIcon_, [spinManager_.getAnimationMap(smb.reel[a], smb.icon[a])]);//todo parametric loop
            else
                setTimeout(restoreIcon_,500,[spinManager_.getAnimationMap(smb.reel[a], smb.icon[a])]);
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
        var number=0;
        for (var a in winAnim.winClasses_){
            if(winAnim.winClasses_[a]>=amt) {
                number = Number(a);
                break;
            }
        }
        if ( gameClass_.getCompulsivePlayer()==true) {
            return Math.min(number, 1);
        }else if (freeSpinsManager_.getIsInFs()){
            return Math.min(number, 3);
        }else{
            return number;
        }
    }

    function findWinRangeB_(amt){
        var number=0;
        for (var a in winAnimB.winClasses_){
            if(winAnimB.winClasses_[a]>=amt) {
                number = Number(a);
                break;
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
        updateBalance_ ();
        setTimeout(handleBonusEndWinAnimation_,1500);
    }

    function completeBonusValue_(amt,msg,tOut){
        updateBonusBalance_ (amt,msg);
        setTimeout(handleBonusEndWinAnimation_,(tOut==null)?1500:tOut);
    }

    function showBonusCentralWinGreetings_(amt){
        var time=0;
        var index=-1;

        for (var a in stages_){
            if (Number(amt)>=stages_[a]){
                time =winAnimB.winTxtDuration[findWinRangeB_(amt)] * 1000;
                index=a;
            }
        }
        if (index>=0){
            resetCentralWin_();
            stage_=index;
            reset_=false;
            currentSmb_=1;
            currentWinWeight_=amt;
            changeCentralWinStage_(1);
        }else{
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

    function resetCentralWin_(){
        soundManager_.stopSound("winBg");
        if(soundManager_.getSound("bigWinBg_"+stage_)!=undefined){
            soundManager_.getSound("bigWinBg_"+stage_).fadeOutBgSound(200);
        }

        if (bgStopped_){
            if(soundManager_.getCanPlayBg())soundManager_.resumeBgSound("bgSlot");
            bgStopped_=false;
        }
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
        // for (a in objThrown_){
        //     if(objThrown_[a]!=null) {
        //         objThrown_[a].destroy();
        //         objThrown_[a] = null;
        //     }
        // }
        // objThrown_=[];
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

    function changeCentralWinStage_(bonus){
        if (reset_==true)return;
        displayManager_.getGroup("centralWin").visible=true;
        centralWinGroup_.visible=true;
        if(centralWinMsgGroups_[stage_]!=null){
            TweenMax.to(centralWinMsgGroups_[stage_],.1,{alpha:0,y:-200,ease:Bounce.easeIn});
        }
        soundManager_.stopSound(winAnim.accuSnd);
        if (stage_>0){
            soundManager_.getSound("bigWinBg_"+stage_).fadeOutBgSound(200);
        }else if( ReelConfig.muteDuringWins==true){
            soundManager_.stopSound("bgSlot");
            bgStopped_=true;
        }
        stage_++;
        centralWinMsgGroups_[stage_].visible=true;
        startFuntain_();
        //soundManager_.playSound("bigWinBg_"+stage_);
        soundManager_.getSound("bigWinBg_"+stage_).fadeInBgSound(250);

        if(centralWinMsgGroups_[stage_])TweenMax.to(centralWinMsgGroups_[stage_],.1,{delay:.05,alpha:1,y:centralWinMsgPos_[stage_],ease:Bounce.easeOut,onStart:animCentralSound_, onComplete:animCentralStage_,onCompleteParams:[bonus]})
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
        resetCentralWin_();
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
            var wins=winManager_.getAllWinsSortedByAmt();
            var amt=winManager_.getWinAmt();
            if (balanceManager_.getShowIncredits()==false)amt= Util.getNumericValue(amt)/balanceManager_.getCoinValue()*lineManager_.getLinesNumber();
            totalDuration_=0;
            if (freeSpinsManager_.getIsInFs()==false) {
                for (var a in wins) {
                    if (wins[a] != undefined) {
                        if (wins[a].winAmount > 0) {
                            var time_ = Math.max(winAnim.winTxtDuration[findWinRange_(wins[a].winAmount)] * 1000, ReelConfig.smbMinAnimTime[wins[a].smbNum[0]] * 1000) ;//based on win lenght
                            totalDuration_ += time_;
                        }
                    }
                }

                if (amt >= stages_[1])totalDuration_ = 1.1 * totalDuration_;
                if (amt >= stages_[2])totalDuration_ = 1.2 * totalDuration_;
            }else{
                totalDuration_=winAnim.winTxtDuration[findWinRange_(winManager_.getLineWinAmt())]  * 1000+Number(ReelConfig.delayAfterWinAmt);
            }
            var sAmt=Number((winManager_.getScatterWinAmt()[0]!=undefined && winManager_.getScatterWinAmt()[0][12]!=null)?winManager_.getScatterWinAmt()[0][12].amt:0);
            if (sAmt==0)sAmt=Number((winManager_.getScatterWinAmt()[0]!=undefined && winManager_.getScatterWinAmt()[0][scatterManager_.getTriggerIcon()]!=null)?winManager_.getScatterWinAmt()[0][scatterManager_.getTriggerIcon()].amt:0);
            if(sAmt>0){
                sAmt=sAmt / balanceManager_.getCoinValue() * lineManager_.getLinesNumber();
                totalDuration_+=winAnim.winTxtDuration[findWinRange_(sAmt)];
            }
            return totalDuration_;
        },
        completeValue:completeValue_,
        completeBonusValue:completeBonusValue_
    }

    initClass_();
    return me;
}