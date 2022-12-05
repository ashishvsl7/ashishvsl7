/**
 * KiS Framework, Created by Fabry on 26/09/2016.
 */

function NoLineJustice(gameRef, gameClass) {
    var gameClass_ = gameClass;
    var game_ = gameRef;
    var lineColor_;
    var drawFilters_ = [];
    var randomIconPoints_ = [];
    var oldIconPoints_ = [];
    var coinsIconPoints_ = [];
    var iconSmb_ = [];
    var objTwAmt_ = [];
    var myLineTick_ = [];
    var myTimelineCoins_;
    var linesToDraw_ = 1;
    var lineColor_;
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
    var container_ = [];
    var objTwLine_ = [];
    var bCompleted_=true;
    var stopEvent_=false;
    //central win amt
    var stages_=displayManager.groups.centralWin.thresHolds;
    var stage_=0;
    var centralWinGroup_;
    var centralWinMsgGroups_=[];
    var centralWinMsgPos_=[];
    var reset_=false;
    //central win funtain
    var objThrown_=[];
    var centralFuntainGroup_;
    var currentSmb_;
    var currentWinWeight_;
    var stToClear_=[];
    var stepInc_;
    var step_=0;

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
        centralFuntainGroup_=displayManager_.getGroup("centralFuntain");
        winEventManager_ = new EventManager();
        funtainEventManager_ = new EventManager();
    }

    var winAnim= {
        "winClasses_":    [1,    2,    5,   10,  20,  50,  200, 500, 1000,99999000],
        "winTxtDuration": [0.5,  .7,   .8,   1,  1.5, 2,   3,   4,   5  ,6 ],
        "scaleFactor":    [1.1,  1.15 ,1.2, 1.5, 1.7, 1.8, 2,   2.2, 2.3, 2.5],
        "winTxtColors": ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "ffffff", "#ffffff", "#ffffff"],
        "winSndEffect": ["", "", "", "", "", "", "", "", "", ""],
        "accuSnd": "",
        "accuSnd": ""
    }

    function createCanvas_() {
        clearAll_();
        objTwLine_ = [];
    };

    function addContainer_(line) {
        var cont = new Phaser.Graphics(game_, 0, 0);
        container_[line].push(cont);
        mainGroup_.add(cont);
    };

    function addDrawFilters_(filters) {
        for (var a in filters) {
            drawFilters_.push(filters[a]);
        }
    };

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
        resetCentralWin_();
        clearAll_();
        if (winAmtClass_!=null){
            winAmtClass_.forceToComplete();
            winAmtClass_.clearAll();
        }
    }

    function stopEvents_(){
        stopEvent_=true;
        for (var a in stToClear_)clearTimeout(stToClear_[a]);
    }
    /*
    function showBonusWin_(amt){
        reset_=false;
        resetCentralWin_();
        clearAll_();
        displayManager_.getText("winValue").setText("");
        stepInc_= winAnim.scaleFactor[findWinRange_(amt)];
        winAmtClass_= new BounceWin(game_,gameClass_, winAnim,"lineWin");
        winAmtClass_.showWin(amt,null,updatingValue_,completeValue_,0, null,stepInc_,5);
        setTimeout(updateBalance_ ,winAnim.winTxtDuration[findWinRange_(amt)] * 1000);
        setTimeout(handleBonusEndWinAnimation_,(winAnim.winTxtDuration[findWinRange_(amt)] * 1000 )+500);
    }
    
     function showBonusWin_(amt,amtCash){
        clearLine_();
        var time=winAnim.winTxtDuration[findWinRange_(amt)] * 1000;
        reset_=false;
        displayManager_.getText("winValue").setText("");
        stepInc_= 2;
        winAmtClass_= new BounceWin(game_,gameClass_, winAnim,"lineWin");
        
        winAmtClass_.showWin(amt,null,updatingValue_,completeValue_,0, null,stepInc_,5);
         
        //setTimeout(handleBonusEndWinAnimation_,(winAnim.winTxtDuration[findWinRange_(amt)] * 1000 )+500);
        return time;
    }
    */
    function showBonusWin_(amt,amtCash){
        clearLine_();
        var time=winAnim.winTxtDuration[findWinRange_(amt)] * 1000;
        reset_=false;
        displayManager_.getText("winValue").setText("");
        stepInc_= 2;

        if (ReelConfig.winType=="BounceWin")
            winAmtClass_= new BounceWin(game_,gameClass_, winAnim,"lineWin");
        if (ReelConfig.winType=="SimpleWin")
            winAmtClass_= new SimpleWin(game_,gameClass_, winAnim,"lineWin");

        if (balanceManager_.getShowIncredits()==false) {
            winAmtClass_.showWin(amtCash, null, null, null, 0, null, stepInc_, time / 1000);
        }else{
            winAmtClass_.showWin(amt, null, null, null, 0, null, stepInc_, time / 1000);
        }



        return time;
    }
    
    

    function handleBonusEndWinAnimation_(){
        logger("nh call5")
        buttonManager_.applyState("NH");
        buttonManager_.applyRestore();
        //gameClass_.fsEval(true);
    }

    function prepareWinnings_(winSmb) {
        initLineParams();
        coinsIconPoints_ = [];
        for (var line in winSmb) {
            container_[line]=[];
            if(winSmb[line]!=undefined)
                calcSingleLinePoints_(winSmb[line].line, winSmb[line]);
        }
    }

    function calcSingleLinePoints_(line, winSmb) {
        var smbW_ = ReelConfig.icon.width;
        var smbH_ = ReelConfig.icon.height;
        var pp;
        var real;
        var spacing = 0;
        var iconNum;
        coinsIconPoints_[line] = [];
        for (var a = 0; a < linesToDraw_; a++) {
            coinsIconPoints_[line][a] = [];
            for (var w in winSmb.pos) {
                if (winSmb.smbNum!=null && winSmb.smbNum[w]!=null)iconNum = winSmb.smbNum[w];
                pp = new Phaser.Point(lineConfig.line.x_origin, 0);
                if (w == 0) {   //first symbol
                    real = new Phaser.Point(winSmb.pos[w].x + pp.x, winSmb.pos[w].y + smbH_ / 2 + pp.y);
                    coinsIconPoints_[line][a].push(real);
                }
                real = new Phaser.Point(winSmb.pos[w].x + smbW_ / 2, winSmb.pos[w].y + smbH_ / 2);
                coinsIconPoints_[line][a].push(real);
            }


            //taking all the lines symbols (after winning ones)
            for ( var rest =Number(w)+1; rest<5 ;rest++){
                var smb= spinManager_.getReels()[rest].getPos((Number(lineConfig.line.lines[line].config[rest])));
                real = new Phaser.Point(smb.x + smbW_ / 2, smb.y + smbH_ / 2);
                coinsIconPoints_[line][a].push(real);
            }
            real = new Phaser.Point(real.x+88,real.y);
            coinsIconPoints_[line][a].push(real);
            real = new Phaser.Point(real.x+100,real.y);
            coinsIconPoints_[line][a].push(real);
        }
    }
    
    /*
    function showLine_() {
        //reset the physic engin from the previous win and remove all the objects
        for (a in objThrown_){
            if (objThrown_[a]!=null) {
                TweenMax.killChildTweensOf(objThrown_[a]);
                centralFuntainGroup_.remove(objThrown_[a]);
                objThrown_[a].destroy();
                objThrown_[a] = null;
            }
        }
        objThrown_=[];
        var wins=winManager_.getAllWinsSmbWinNumAggregated();
        bCompleted_=false;
        reset_=false;
        stopEvent_=false;
        if(coinWinGroup_!=null)coinWinGroup_.visible=true;
        if(animGroup_)animGroup_.visible=true;
        winAmtClass_= new BounceWin(game_,gameClass_, winAnim,"lineWin");
        winEventManager_.clearEvt();
        step_=1;
        totStep=0;
        totalDuration_=0;
        resetCentralWin_();

        soundManager_.playSound("bigWinBg");
        if (freeSpinsManager_.getIsInFs()==false) {
            for (var a = wins.length; a >= 0; a--) {
                if (wins[a] != undefined) {
                    for (var s in wins[a]) {
                        if (wins[a][s].winAmount > 0) {
                            totStep++;
                            winEventManager_.addEvent(createCanvas_, 100);
                            var time_ = Math.max(winAnim.winTxtDuration[Number(findWinRange_(wins[a][s].winAmount))] * 1000, ReelConfig.smbMinAnimTime[wins[a][s].smbNum[0]] * 1000) + lineConfig.line.duration;//based on win lenght
                            if (balanceManager_.getShowIncredits() == false) {
                                winEventManager_.addEvent(updatePrize_, 0, [wins[a][s].winAmountCash, wins[a][s].lineSmbNum[0], time_ / 1000]);
                            } else {
                                winEventManager_.addEvent(updatePrize_, 0, [wins[a][s].winAmount, wins[a][s].lineSmbNum[0], time_ / 1000]);
                            }
                            for (var b in wins[a][s].line) {
                                winEventManager_.addEvent(drawLine_, 0, [wins[a][s].line[b], wins[a][s].lineSmbNum[b], wins[a][s], false]);
                            }
                            winEventManager_.addEvent(fake_, time_);
                            totalDuration_ += time_;
                        }
                    }
                }
            }
            stepInc_ = winAnim.scaleFactor[findWinRange_(winManager_.getWinAmt())] / totStep;
            winEventManager_.addEvent(triggerComplete_, 100);
            winEventManager_.addEvent(updateBalance_, ReelConfig.delayAfterWinAmt);

            if (ReelConfig.automaticIdleCycle != false) winEventManager_.addEvent(idle_, ReelConfig.delayBeforeIdle);
        }else{
            // soundManager_.getSound("bigWinBg").setVolume(soundManager_.getSound("bigWinBg").getBaseVolume());
            soundManager_.playSound("winBg");
            changeAllHL_([[.35]]);
            stepInc_=2;
            var icon_=-1;
            for (var a = wins.length; a >= 0; a--) {
                if (wins[a] != undefined) {
                    for (var s in wins[a]) {
                        if (wins[a][s].winAmount > 0) {

                            icon_ = Math.max(icon_, wins[a][s].smbNum[0]);
                            winEventManager_.addEvent(amimIcon_, 0, wins[a][s]);
                        }
                    }
                }
            }
            winEventManager_.addEvent(playBiggerIconSound_,0,[icon_]);
            totalDuration_=winAnim.winTxtDuration[findWinRange_(winManager_.getLineWinAmt())]  * 1000;
            var sAmt=Number((winManager_.getScatterWinAmt()[0]!=undefined)?winManager_.getScatterWinAmt()[0][12].amt:0);
            if (balanceManager_.getShowIncredits()==true)sAmt=sAmt / balanceManager_.getCoinValue() * lineManager_.getLinesNumber();
            winEventManager_.addEvent(updatePrize_, 0, [Number(winManager_.getLineWinAmt())+ sAmt,totalDuration_/1000]);
            winEventManager_.addEvent(triggerComplete_,totalDuration_);
        }
        
        //winEventManager_.addEvent(idle_,ReelConfig.delayBeforeIdle);
        winEventManager_.triggerEvt();
    }
    
    
    */
     function showLine_() {
        //reset the physic engin from the previous win and remove all the objects
        for (a in objThrown_){
            if (objThrown_[a]!=null) {
                TweenMax.killChildTweensOf(objThrown_[a]);
                centralFuntainGroup_.remove(objThrown_[a]);
                objThrown_[a].destroy();
                objThrown_[a] = null;
            }
        }
        objThrown_=[];
        var wins=winManager_.getAllWinsSmbWinNumAggregated();
        bCompleted_=false;
        reset_=false;
        stopEvent_=false;
        if(coinWinGroup_!=null)coinWinGroup_.visible=true;
        if(animGroup_)animGroup_.visible=true;
        winAmtClass_= new BounceWin(game_,gameClass_, winAnim,"lineWin");
        winEventManager_.clearEvt();
        step_=1;
        totStep=0;
        totalDuration_=0;
        resetCentralWin_();
        soundManager_.playSound("bigWinBg");
        if (wins.length>0)changeAllHL_([[.35]]);
        if (freeSpinsManager_.getIsInFs()==false) {
            for (var a = wins.length; a >= 0; a--) {
                if (wins[a] != undefined) {
                    for (var s in wins[a]) {
                        if (wins[a][s].winAmount > 0) {
                            totStep++;
                            winEventManager_.addEvent(createCanvas_, 100);
                            var time_ = Math.max(winAnim.winTxtDuration[Number(findWinRange_(wins[a][s].winAmount))] * 1000, ReelConfig.smbMinAnimTime[wins[a][s].smbNum[0]] * 1000) + lineConfig.line.duration;//based on win lenght
                            if (balanceManager_.getShowIncredits() == false) {
                                winEventManager_.addEvent(updatePrize_, 0, [wins[a][s].winAmountCash, wins[a][s].lineSmbNum[0], time_ / 1000]);
                            } else {
                                winEventManager_.addEvent(updatePrize_, 0, [wins[a][s].winAmount, wins[a][s].lineSmbNum[0], time_ / 1000]);
                            }
                            for (var b in wins[a][s].line) {
                                winEventManager_.addEvent(drawLine_, 0, [wins[a][s].line[b], wins[a][s].lineSmbNum[b], wins[a][s], false]);
                            }
                            winEventManager_.addEvent(fake_, time_);
                            totalDuration_ += time_;
                        }
                    }
                }
            }
            stepInc_ = winAnim.scaleFactor[findWinRange_(winManager_.getWinAmt())] / totStep;
            winEventManager_.addEvent(triggerComplete_, 100);
            winEventManager_.addEvent(updateBalance_, ReelConfig.delayAfterWinAmt);
            if (ReelConfig.automaticIdleCycle != false) winEventManager_.addEvent(idle_, ReelConfig.delayBeforeIdle);
        }else{
            // soundManager_.getSound("bigWinBg").setVolume(soundManager_.getSound("bigWinBg").getBaseVolume());
            soundManager_.playSound("winBg");
            stepInc_=2;
            var icon_=-1;
            for (var a = wins.length; a >= 0; a--) {
                if (wins[a] != undefined) {
                    for (var s in wins[a]) {
                        if (wins[a][s].winAmount > 0) {
                            icon_ = Math.max(icon_, wins[a][s].smbNum[0]);
                            winEventManager_.addEvent(amimIcon_, 0, wins[a][s]);
                        }
                    }
                }
            }
            winEventManager_.addEvent(playBiggerIconSound_,0,[icon_]);
            totalDuration_=winAnim.winTxtDuration[findWinRange_(winManager_.getLineWinAmt())]  * 1000;
            var sAmt=Number((winManager_.getScatterWinAmt()[0]!=undefined)?winManager_.getScatterWinAmt()[0][12].amt:0);
            if (balanceManager_.getShowIncredits()==true)sAmt=sAmt / balanceManager_.getCoinValue() * lineManager_.getLinesNumber();
            winEventManager_.addEvent(updatePrize_, 0, [Number(winManager_.getLineWinAmt())+ sAmt,totalDuration_/1000]);
            winEventManager_.addEvent(triggerComplete_,totalDuration_);
        }
        
        //winEventManager_.addEvent(idle_,ReelConfig.delayBeforeIdle);
        winEventManager_.triggerEvt();
    }

    function playBiggerIconSound_(iconN){
        soundManager_.playSound("smbWin_"+iconN);
    }

    function updatePrize_(params){
        var amt=params[0];
        var smb=params[1];
        var time=params[2];

        if (amt>0){
            var st=partialWinAmt_;
            partialWinAmt_+=Number(amt);
            step_=step_+stepInc_
            if (freeSpinsManager_.getIsInFs()==true){
                winAmtClass_.showWin(amt,null,null,freeSpinsManager_.updateFreeSpinsTotWon,0, null,step_,time);

            }else{
                winAmtClass_.showWin(partialWinAmt_,null,updatingValue_,completeValue_,st, null,step_,time);
            }

        }
        //if (balanceManager_.getShowIncredits()==false)amt= Util.getNumericValue(amt)/balanceManager_.getCoinValue()*lineManager_.getLinesNumber();
        currentWinWeight_=  amt*3;
        if (stage_>0) {
            startFuntain_();
        }

        soundManager_.playSound("smbWin_"+smb);
    }

    function drawLine_(params) {
        console.log("drawLine");
        console.warn(params);
        if (stopEvent_==true)return;
        var line = params[0];
        var smb = params[1];
        var winSmb=params[2];
        var justLine=params[3];

        currentSmb_=smb;
        container_[line]=[];
        // for (var a = 0; a < linesToDraw_; a++) {
        //     addContainer_(line);
        //     if (coinsIconPoints_[line][a].length > 0) {
        //         oldIconPoints_[a] = new Phaser.Point(coinsIconPoints_[line][a][0].x, coinsIconPoints_[line][a][0].y);
        //         startDrawLine_(a, smb,line, lineTweenTime_PointToPoint_);
        //     }
        // }
        
        // play each symbols win sound here.
        var snd = "reelitem"+winSmb.smbNum[0];
        //console.log("play:"+snd);
        soundManager_.playSound(snd);
        

        if (justLine==false){
            amimIcon_( winSmb);
        }
    }

    function startDrawLine_(a,smb, line, tweenTime) {
        container_[line][a].clear();
        container_[line][a].lineStyle(myLineTick_[a],getColor_(line,smb), 0.7);
        container_[line][a].moveTo(oldIconPoints_[a].x, oldIconPoints_[a].y);

        objTwLine_[a] = {};
        objTwLine_[a]._points = coinsIconPoints_[line][a].length - 1;
        objTwLine_[a].amt = 0;

        for (var i = 0; i < objTwLine_[a]._points; i++) {
            updateTween_( line, a,smb, i, objTwLine_[a]._points);
        }
    };

    function endCoins_(){
        clearInterval(iEndTimO);
        if (winAmtClass_!=null){
            winAmtClass_.clearAll();
            winAmtClass_=null;
            partialWinAmt_=0;
        }
    }

    function updateTween_(line, a, smb, i, pointsL) {
        if (container_[line][a] != null) {
            objTwLine_[a].amt = i;

            for (var j = 0; j < 15; j++) {
                container_[line][a].lineStyle(myLineTick_[a],  getColor_(line,smb), lineConfig.line.alpha- 0.1 * j);
                drawLineSegment_(container_[line][a], oldIconPoints_[a].x, oldIconPoints_[a].y + 0.2 * j, coinsIconPoints_[line][a][Math.ceil(objTwLine_[a].amt)].x, coinsIconPoints_[line][a][Math.ceil(objTwLine_[a].amt)].y + 0.2 * j);
                drawLineSegment_(container_[line][a], oldIconPoints_[a].x, oldIconPoints_[a].y - 0.2 * j, coinsIconPoints_[line][a][Math.ceil(objTwLine_[a].amt)].x, coinsIconPoints_[line][a][Math.ceil(objTwLine_[a].amt)].y - 0.2 * j);
            }

            container_[line][a].lineStyle(myLineTick_[a],  getColor_(line,smb), lineConfig.line.alpha);
            drawLineSegment_(container_[line][a], oldIconPoints_[a].x, oldIconPoints_[a].y, coinsIconPoints_[line][a][Math.ceil(objTwLine_[a].amt)].x, coinsIconPoints_[line][a][Math.ceil(objTwLine_[a].amt)].y);

            container_[line][a].lineStyle(myLineTick_[a],  getColor_(line,smb), lineConfig.line.alpha);
            oldIconPoints_[a] = new Phaser.Point(coinsIconPoints_[line][a][Math.ceil(objTwLine_[a].amt)].x, coinsIconPoints_[line][a][Math.ceil(objTwLine_[a].amt)].y);
        }
    };

    function drawLineSegment_(container, x1, y1, x2, y2) {
        container.moveTo(x1, y1);
        container.lineTo(x2, y2);
        container.lineTo(x2, y2);
    };
    function idle_(force){
        //keep showing winlines without animations
        if (stopEvent_==true && force[0]!=true)return;
        stopEvent_=false;
        var index=0;
        var wins=winManager_.getAllWinsSorted();
        if (wins.length==0)return;

        winEventManager_.clearEvt();
        coinWinTxt_.scale.x=1.2;
        coinWinTxt_.scale.y=1.2;
        for (var a in wins) {
            if(wins[a]!=undefined) {
                if(wins[a].winAmount>0) {
                    winEventManager_.addEvent(changeAllHL_,200,[.45]);
                    winEventManager_.addEvent(amimIconIdle_, 0, wins[a]);
                    winEventManager_.addEvent(clearAll_, ReelConfig.idleLineTime);
                    index++;
                }
            }
        }
        winEventManager_.addEvent(idle_,1000,[force]);
        winEventManager_.triggerEvt();
    }

    function amimIconIdle_(winSmb_) {
        var index = 0;
        //lineWinAmtManager_.showLine();
        if (balanceManager_.getShowIncredits()==false) {
            displayManager_.getText("lineWin").setText(balanceManager_.getCurrencySmb() + "" + Util.formatNumber(winSmb_.winAmountCash, Util.getNubersOfDecimal()));
        }else{
            displayManager_.getText("lineWin").setText(balanceManager_.getCurrencySmb() + "" + Util.formatNumber(winSmb_.winAmount, Util.getNubersOfDecimal()));
        }
        //drawLine_([winSmb_.line ,winSmb_.smbNum[0],null,true]);
        for (var b=0; b<winSmb_.reel.length;b++) {
            if (wildManager_.getWildReel(winSmb_.reel[b])==false) {
                hlSmb([spinManager_.getAnimationMap(winSmb_.reel[b], winSmb_.icon[b])]);
            }else{
                wildManager_.wildReelWinAnim(winSmb_.reel[b]);
            }
        }
    }

    function hlSmb(par) {
        var a = par[0];
        if (a==null)return;
        a.alpha = 1;
        TweenMax.to(a.scale,.2,{x:1.2,y:1.2,onComplete:updateAfterWinScale_,onCompleteParams:[a]});
    }

    function triggerComplete_(){
        logger("nh call6")
        bCompleted_=true;
        //buttonManager_.applyState("NH");
    }

    function updateBalance_(){
        logger(" line animation update balance event " )

        if (freeSpinsManager_.getIsInFs()==false || freeSpinsManager_.getFsNumber()==-999) {
            TweenMax.to(coinWinTxt_, .4, {y: 600, alpha: 0.1, onComplete: startUpdate, ease: Sine.easeInOut});
        }else{
            TweenMax.to(coinWinTxt_,0,{ y :displayManager.groups.centralLineWin.texts.lineWin.y,alpha:1});
            endCoins_();
            clearAll_();
        }
        bCompleted_=true;
    }

    function startUpdate(){
        if(displayManager_.getGroup("buttonFg")){
            displayManager_.getGroup("buttonFg").visible=true;
            displayManager_.getGroup("buttonFg").alpha=1;
        }
        logger(" line animation update startUpdate " )
        coinWinTxt_.setText("");
        TweenMax.to(coinWinTxt_,0,{ y :displayManager.groups.centralLineWin.texts.lineWin.y,alpha:1});
        winAmtManager_.showIstantUpdateWin( winManager_.getWinAmt() ,"WIN");
        endCoins_();
        clearAll_();
        bCompleted_=true;
    }
    
    function updateAfterWinScale_(a){
        if (a.scale==undefined)return;
        TweenMax.to(a.scale,.2,{x:1,y:1});
    }

    function changeAllHL_(params) {
        var alpha=params[0];
        var reels = spinManager_.getReels()
        for (var a in reels) {
            for (var s = 0; s < ReelConfig.numIcons ; s++) {
                //reels[a].getSymbol(s).tint = "#CCCCCC";
                //reels[a].getSymbol(s+Number(ReelConfig.numIconsOnTop)).alpha = alpha;
            }
        }

        var map=spinManager_.getAllMap();
        for (var a in map) {
            if (map[a]!=null) {
                for (var b in map[a] ) {
                    if (map[a][b]!=null) {
                        //map[a][b].alpha = alpha;
                    }
                }

            }
        }
        
    }

    function amimIcon_(smb) {
        if (stopEvent_==true)return;
        var index=0;
        var wildReelAnim=[];
        var wildReelSeq=[];
        for (var a in smb.smbNum) {
            if (wildManager_.getWildReel(smb.reel[a])==false) {
                if (game.cache.checkImageKey("anim" + smb.smbNum[a]) == true) {
                    index++;
                    animation_(smb, a);
                }
            }else{
                if (wildReelSeq.indexOf(smb.reel[a]<0)) {
                    wildReelAnim.push(index * lineConfig.line.pointToPointSpeed * 1000);
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

    function animation_(smb,a){
        var add=false;
        if (spinManager_.getAnimationMap(smb.reel[a],smb.icon[a]).animations==null) //avoid to add the same animation more then once
        {
            add=true;
            smb.anim[a] = game_.add.sprite(smb.pos[a].x + ReelConfig.icon.width / 2, smb.pos[a].y + ReelConfig.icon.height / 2, "anim" + smb.smbNum[a]);
            smb.refer.anim[a]=smb.anim[a];
            smb.anim[a].anchor.set(.5, .5);
            smb.anim[a].animations.add("anim");
            smb.anim[a].width = ReelConfig.icon.width;
            smb.anim[a].height = ReelConfig.icon.height;
            smb.simbolReference[a].visible=false;
            smb.simbolReference[a]=smb.anim[a];
            spinManager_.getReelGroup(smb.reel[a]).add(smb.anim[a]);
            //animGroup_.add(smb.anim[a]);
            spinManager_.setAnimationMap(smb.reel[a],smb.icon[a],smb.anim[a]);
        }else{
            smb.anim[a]=spinManager_.getAnimationMap(smb.reel[a],smb.icon[a]);
            smb.simbolReference[a]=smb.anim[a];

        }
        if (smb.anim[a].scale.x ==1) {
            if (add == true){
                TweenMax.to(smb.anim[a].scale, .3, {x: 1.15, y: 1.15,repeat:1,yoyo:true,onComplete:backScale_,onCompleteParams:[smb.anim[a]]});
            }
            //setTimeout(backScale_,500,[spinManager_.getAnimationMap(smb.reel[a], smb.icon[a])]);
        }
        if ( add==true || lineConfig.line.multipleAnimation[smb.smbNum[a]]==true) {
            smb.anim[a].animations.play("anim", 24, false, false);
        }
        

    }

    function backScale_(smb){
        TweenMax.to(smb.scale, .5, {x: 1, y: 1});
    }

    function initLineParams() {
        //todo params
        //todo addDrawFilters(slot_class_.getLineDrawFilters(line));
        tickRatio_ = lineConfig.line.tickBase;
        lineTweenTime_PointToPoint_ = lineConfig.line.pointToPointSpeed;
        linesToDraw_ = lineConfig.line.linesNumber;

        //todo  coinsDrawn_ = Math.min(linesToDraw_, slot_class_.getSlotConfParam("numCoins", 1));//devono essere meno delle linee
        lineFadeTime_ = 1.2//slot_class_.getSlotConfParam("lineFadeTime", 1.2);
        txtFadeTime_ = 1.2//slot_class_.getSlotConfParam("txtFadeTime", 1.2);

        oldIconPoints_ = [];
        coinsIconPoints_ = [];
        iconSmb_ = [];
        objTwAmt_ = [];
        myLineTick_ = [];

        revert = false;
        ct = 0;

        for ( a = 0; a < linesToDraw_; a++) {
            coinsIconPoints_[a] = [];
            coinsIconPoints_[a] = [];
            iconSmb_[a] = [];
            myLineTick_[a] =  tickRatio_;
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
            rotation:Util.getRandomInt(0, 90),
            x: ob.xVar, onComplete: endFallsDown_,  onCompleteParams: [ob],ease:Power1.easeIn
        });

    }

    function endFallsDown_(ob){
        ob.destroy();
    }
    
    function clearAll_() {
        for (var line in container_) {
            for (var a = 0; a < container_[line].length; a++) {
                container_[line][a].clear();
                container_[line][a].destroy();
                if (container_[line][a] != null) {
                    mainGroup_.remove(container_[line][a]);
                    container_[line][a] = null;
                }
            }
        }
        for (var a in mainGroup_.children){
            mainGroup_.remove(mainGroup_.children[a]);
        }
        container_ = [];
        clearTrow_();


    };

    function clearLineAfterValue_(){
        stopEvent_=true;
        resetCentralWin_();
        winEventManager_.clearEvt();
        clearAll_();
        if (bCompleted_==true){
            displayManager_.getText("lineWin").setText("");
            return;
        }

        var winAmount=winManager_.getWinAmt() ;

        endCoins_();
        coinWinTxt_.setText(balanceManager_.getCurrencySmb()+ "" + Util.formatNumber(winAmount,Util.getNubersOfDecimal()));
        logger(" try to complete upate balance " +!bCompleted_ )

        if (bCompleted_==false )TweenMax.to(coinWinTxt_,.2,{y:500,alpha:0,onComplete:startForceUpdate,ease:Sine.easeInOut});
    }

    function startForceUpdate(){
        logger(" startForceUpdate " )
        coinWinTxt_.setText("");
        TweenMax.to(coinWinTxt_,0,{y:displayManager.groups.centralLineWin.texts.lineWin.y,alpha:1});
        winAmtManager_.showShortWin( winManager_.getWinAmt(), null, null, null,"WIN");
        bCompleted_=true;
        reset_=true;
    }

    function fakeEvent(){

    }

    function findWinRange_(amt){
        //amt must be in coins
        //if (balanceManager_.getShowIncredits()==false)amt= Util.getNumericValue(amt)/balanceManager_.getCoinValue()*lineManager_.getLinesNumber();
        for (var a in winAnim.winClasses_){
            if(winAnim.winClasses_[a]>=amt)
                return Number(a);
        }
        return 0;
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
    }

    function updatingValue_(amt){
        if (balanceManager_.getShowIncredits()==false)amt= Util.getNumericValue(amt)/balanceManager_.getCoinValue()*lineManager_.getLinesNumber();
        if (Util.getNumericValue(amt)> stages_[stage_] && displayManager_.getText("lineWin").text!="" && reset_==false){
            changeCentralWinStage_();
        }
    }

    function resetCentralWin_(){
        if(soundManager_.getSound("bigWinBg"))soundManager_.getSound("bigWinBg").fadeOutBgSound(500);
        funtainEventManager_.clearEvt();
        stage_=0;
        totalDuration_=0;
        centralWinGroup_.visible=false;
        for (var a=1; a<=centralWinMsgGroups_.length-1;a++) {
            centralWinMsgGroups_[a].alpha=0;
            centralWinMsgGroups_[a].y=-200;
        }
    }

    function changeCentralWinStage_(){
        if (reset_==true)return;
        displayManager_.getGroup("centralWin").visible=true;
        centralWinGroup_.visible=true;
        if(centralWinMsgGroups_[stage_]!=null){
            TweenMax.to(centralWinMsgGroups_[stage_],.1,{alpha:0,y:-200,ease:Bounce.easeIn});
        }
        stage_++;
        centralWinMsgGroups_[stage_].visible=true;
        startFuntain_();
        if(centralWinMsgGroups_[stage_])TweenMax.to(centralWinMsgGroups_[stage_],.1,{delay:.05,alpha:1,y:centralWinMsgPos_[stage_],ease:Bounce.easeOut,onStart:animCentralSound_, onComplete:animCentralStage_})
    }

    function animCentralSound_(){
        soundManager_.playSound("winEffect_"+stage_);
    }

    function animCentralStage_(){
        if(centralWinMsgGroups_[stage_])TweenMax.to(centralWinMsgGroups_[stage_].scale,.1,{x:1.2,y:1.2,ease:Bounce.easeInOut,onComplete:animCentralStage1_})
    }

    function animCentralStage1_(){
        if(centralWinMsgGroups_[stage_])TweenMax.to(centralWinMsgGroups_[stage_].scale,.1,{x:1,y:1,ease:Bounce.easeInOut})
    }

    function startFuntain_(){
        //if (reset_==true)return;
        centralFuntainGroup_.visible = true;
        funtainEventManager_.clearEvt();
        var time = winAnim.winTxtDuration[findWinRange_(winManager_.getLineWinAmt())]  * 1000;
        var numObj= Math.min(Math.round(currentWinWeight_*20),displayManager.groups.centralWin.maxObjNum);
        var interval=time/numObj;
        if (game_.cache.checkImageKey("gemPart" + currentSmb_) == true) {
            for (a = 0; a <= numObj; a++) {
                funtainEventManager_.addEvent(startNewObject_,interval);
            }
        }
        funtainEventManager_.triggerEvt();
    }

    function startNewObject_(){
        var ob = game_.add.sprite(640, 740, "gemPart" + currentSmb_);
        ob.anchor.set(.5, .5);
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
        ob.scale.x = Util.getRandomInt(80,125)/100
        ob.scale.y = Util.getRandomInt(80,125)/100
        objThrown_.push(ob);
        centralFuntainGroup_.add(ob);
    }
    function startFuntaintChecker_(){
        if (stage_>0){
            clearTrow_();
        }
    }

    function clearTrow_(){
        for (a in objThrown_){
            if (objThrown_[a]!=null && objThrown_[a].y>750) {
                TweenMax.killChildTweensOf(objThrown_[a]);
                centralFuntainGroup_.remove(objThrown_[a]);
                objThrown_[a].destroy();
                objThrown_[a] = null;
            }
        }
    }

    function fake_(){
    }
    
    
    function startIdleCycle_(){
        winEventManager_.addEvent(idle_,ReelConfig.delayBeforeIdle);
        winEventManager_.triggerEvt();
    }
    
    // added in /////////////////
    function completeBonusValue_(amt,msg){
        updateBonusBalance_ (amt,msg);
        setTimeout(handleBonusEndWinAnimation_,1500);
    }
    function updateBonusBalance_(amt,msg){
        reset_=true;
        TweenMax.to(coinWinTxt_, .4, {y: 600, alpha: 0.1, onComplete: startBonusUpdate,onCompleteParams:[amt,msg], ease: Sine.easeInOut});
        soundManager_.playSound("line");
        resetCentralWin_();
    }
    function startBonusUpdate(amt,msg){
        if(displayManager_.getGroup("buttonFg")){
            displayManager_.getGroup("buttonFg").visible=true;
            displayManager_.getGroup("buttonFg").alpha=1;
        }
        coinWinTxt_.setText("");
        TweenMax.to(coinWinTxt_,0,{ y :displayManager.groups.centralLineWin.texts.lineWin.y,alpha:1});
        winAmtManager_.showIstantUpdateWin(amt,msg);
        endCoins_();
        clearAll_();
        bCompleted_=true;
    }
    function showBonusCentralWinGreetings_(amt){
        var time=0;
        var index=-1;

        for (var a in stages_){
            if (Number(amt)>=stages_[a]){
                time =winAnim.winTxtDuration[findWinRange_(amt)] * 1000;
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
        console.log("Time:"+time)
        return time;
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
        console.log("---")
    }
    
    
    
    
    /////////////////

    var me = {
        prepareWinnings: prepareWinnings_,
        clearLine: clearLine_,
        clearAll:clearAll_,
        clearOverLine:clearOverLine_,
        showLine: showLine_,
        clearLineAfterValue:clearLineAfterValue_,
        getInterruptedWinAnim:getInterruptedWinAnim_,
        getInterruptedWinAnim:getInterruptedWinAnim_,
        stopEvents:stopEvents_,
        idle:idle_,
        startIdleCycle:startIdleCycle_,
        showBonusWin:showBonusWin_,
        // added
        completeBonusValue:completeBonusValue_,
        showBonusCentralWinGreetings:showBonusCentralWinGreetings_,
        stopBigWinAnimation:stopBigWinAnimation_,
        //
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
            return totalDuration_;
        }
    }

    initClass_();
    return me;
}