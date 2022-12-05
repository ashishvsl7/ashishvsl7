/**
 * KiS Framework, Created by Fabry on 29/02/2016.
 */
function LineDraw(gameRef, gameClass) {
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
    var iTimO_=[];
    var bCompleted_=true;
    var stopEvent_=false;
    var wins;

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
    var iFc_=0;
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
    }

    var winAnim= {
        "winClasses_":    [1,    2,    5,   10,  20,  50,  200, 500, 1000,2000],
        "winTxtDuration": [0,  .2,   .2,   .2,   .6, 2,   0,   0,   0  ,0],
        "scaleFactor":    [1.1,  1.15 ,1.2, 1.5, 1.7, 1.8, 2,   2.5, 3,   4],
        "winTxtColors": ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "ffffff", "#ffffff", "#ffffff"],
        "winSndEffect": ["", "", "", "", "", "", "", "", "", ""],
        "accuSnd": "",
        "accuSnd": ""
    }

    function createCanvas_() {
        clearAll_();
        objTwLine_ = [];
        container_ = [];
    }

    function addContainer_() {
        var cont = new Phaser.Graphics(game_, 0, 0);
        container_.push(cont);
        mainGroup_.add(cont);
    }

    function addDrawFilters_(filters) {
        for (var a in filters) {
            drawFilters_.push(filters[a]);
        }
    }

    function clearOverLine_(){
        winEventManager_.clearEvt();
        displayManager_.getText("lineWin").setText("");
        clearAll_();
    }

    function clearLine_() {
        stopEvent_=true;
        winEventManager_.clearEvt();
        displayManager_.getText("lineWin").setText("");
        resetCentralWin_();
        clearAll_();
        if (winAmtClass_!=null)winAmtClass_.forceToComplete();
    }

    function stopEvents_(){
        stopEvent_=true;
        for (var a in stToClear_)clearTimeout(stToClear_[a]);
    }

    function showBonusWin_(amt){
        reset_=false;
        resetCentralWin_();
        clearAll_();
        displayManager_.getText("winValue").setText("");
        stepInc_= winAnim.scaleFactor[findWinRange_(amt)];
        winAmtClass_= new BounceWin(game_,gameClass_, winAnim,"lineWin");
        winAmtClass_.showWin(amt,null,updatingValue_,completeValue_,0, null,stepInc_);
        setTimeout(updateBalance_ ,winAnim.winTxtDuration[findWinRange_(amt)] * 1000 );
        setTimeout(handleBonusEndWinAnimation_,(winAnim.winTxtDuration[findWinRange_(amt)] * 1000 )+500);
    }

    function handleBonusEndWinAnimation_(){
        if (gameClass_.isSpinning()==true)return;
        buttonManager_.applyState("NH");
        buttonManager_.applyRestore();
        gameClass_.fsEval(true);
    }

    function prepareWinnings_(winSmb) {
        initLineParams();
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

            for ( var rest =Number(w)+1; rest<5 ;rest++){
                var smb= spinManager_.getReels()[rest].getPos((Number(lineConfig.line.lines[line].config[rest])+Number(ReelConfig.numIconsOnTop)));
                real = new Phaser.Point(smb.x + smbW_ / 2, smb.y + smbH_ / 2);
                coinsIconPoints_[line][a].push(real);
            }
            real = new Phaser.Point(real.x+150,real.y);
            coinsIconPoints_[line][a].push(real);
        }
    }

    function showLine_() {
        var index=0;
        wins=winManager_.getAllWinsSorted();
        bCompleted_=false;
        reset_=false;
        stopEvent_=false;
        if(coinWinGroup_!=null)coinWinGroup_.visible=true;
        if(animGroup_)animGroup_.visible=true;
        winAmtClass_= new BounceWin(game_,gameClass_, winAnim,"lineWin");
        winEventManager_.clearEvt();
        step_=1;
        totalDuration_=0;
        stepInc_= winAnim.scaleFactor[findWinRange_(winManager_.getWinAmt())]/wins.length;

        resetCentralWin_();
        iFc_=setInterval(startFuntaintChecker_,100);
        soundManager_.getSound("bigWinBg").setVolume(soundManager_.getSound("bigWinBg").getBaseVolume());
        soundManager_.playSound("bigWinBg");

        for (var a in wins) {
            if(wins[a]!=undefined) {
                if(wins[a].winAmount>0) {
                    winEventManager_.addEvent(drawLine_, 10, [wins[a].line,wins[a].smbNum[0], wins[a].winAmount, "txtCoin", "txtNum"]);
                    winEventManager_.addEvent(amimIcon_, 0, wins[a]);
                    //based on win amount var time_=Math.max(winAnim.winTxtDuration[findWinRange_(wins[a].winAmount)] * 1000, ReelConfig.smbMinAnimTime[wins[a].smbNum[0]]*1000) + lineConfig.line.duration;
                    var time_=Math.max(winAnim.winTxtDuration[wins[a].smbNum.length] * 1000, ReelConfig.smbMinAnimTime[wins[a].smbNum[0]]*1000) + lineConfig.line.duration;//based on win lenght
                    winEventManager_.addEvent(buttonHlOff_,time_ , a);
                    totalDuration_+=time_;
                    index++;
                }
            }
        }
        winEventManager_.addEvent(triggerComplete_,100);
        winEventManager_.addEvent(updateBalance_,((winManager_.getWinAmt()*5>stages_[0]&& ReelConfig.delayAfterWinAmt!=null)?time_+ReelConfig.delayAfterWinAmt:300));
        winEventManager_.addEvent(idle_,ReelConfig.delayBeforeIdle);
        winEventManager_.triggerEvt();
    }

    function drawLine_(params) {
        if (stopEvent_==true)return;
        var line = params[0];
        var smb = params[1];
        var amt = params[2];
        var txtCoin = params[3];
        var txtNum = params[4];
        var a;
        var b;
        currentSmb_=smb;

        currentWinWeight_=  amt*3;
        createCanvas_();

        var btn =gameClass_.getLineButton(line);

        for (a in btn){
            btn[a].getButton().tint=0x62e515;
            btn[a].getButton().children[0].fill="#ffffff";
        }

        if (amt>0){
            var st=partialWinAmt_;
            partialWinAmt_+=Number(amt);
            step_=step_+stepInc_
            winAmtClass_.showWin(partialWinAmt_,null,updatingValue_,completeValue_,st, null,step_);
        }
        if (stage_>0) {
            startFuntain_();
        }

        for (a = 0; a < linesToDraw_; a++) {
            addContainer_();
            //var ll = new Phaser.Point(coinsIconPoints_[line][a][coinsIconPoints_[line][a].length - 1].x + 5, coinsIconPoints_[line][a][coinsIconPoints_[line][a].length - 1].y + 5);
            //coinsIconPoints_[line][a].push(ll);
            if (coinsIconPoints_[line][a].length > 0) {
                oldIconPoints_[a] = new Phaser.Point(coinsIconPoints_[line][a][0].x, coinsIconPoints_[line][a][0].y);
                startDrawLine_(a, smb,line, lineTweenTime_PointToPoint_, amt);
                soundManager_.playSound("smbWin_"+smb);
            }
        }
    }

    function startDrawLine_(a,smb, line, tweenTime, amt) {
        container_[a].clear();
        container_[a].lineStyle(myLineTick_[a],getColor_(line,smb), 0.7);
        container_[a].moveTo(oldIconPoints_[a].x, oldIconPoints_[a].y);

        objTwLine_[a] = {};
        objTwLine_[a]._points = coinsIconPoints_[line][a].length - 1;
        objTwLine_[a].amt = 0;

        var interval = (tweenTime * 3 * 1400) / (objTwLine_[a]._points);
        for (var i = 0; i < objTwLine_[a]._points; i++) {
            iTimO_.push(setTimeout(updateTween_, 0, line, a,smb, i, objTwLine_[a]._points));
        }
        setTimeout(clearAll_,(i * interval)+lineConfig.line.duration);
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
        if (container_[a] != null) {
            objTwLine_[a].amt = i;

            for (var j = 0; j < 15; j++) {
                container_[line][a].lineStyle(myLineTick_[a],  getColor_(line,smb), lineConfig.line.alpha- 0.1 * j);
                drawLineSegment_(container_[line][a], oldIconPoints_[a].x, oldIconPoints_[a].y + 0.2 * j, coinsIconPoints_[line][a][Math.ceil(objTwLine_[a].amt)].x, coinsIconPoints_[line][a][Math.ceil(objTwLine_[a].amt)].y + 0.2 * j);
                drawLineSegment_(container_[line][a], oldIconPoints_[a].x, oldIconPoints_[a].y - 0.2 * j, coinsIconPoints_[line][a][Math.ceil(objTwLine_[a].amt)].x, coinsIconPoints_[line][a][Math.ceil(objTwLine_[a].amt)].y - 0.2 * j);
            }

            container_[a].lineStyle(myLineTick_[a],  getColor_(line,smb), lineConfig.line.alpha);
            drawLineSegment_(container_[a], oldIconPoints_[a].x, oldIconPoints_[a].y, coinsIconPoints_[line][a][Math.ceil(objTwLine_[a].amt)].x, coinsIconPoints_[line][a][Math.ceil(objTwLine_[a].amt)].y);

            container_[a].lineStyle(myLineTick_[a],  getColor_(line,smb), lineConfig.line.alpha);
            oldIconPoints_[a] = new Phaser.Point(coinsIconPoints_[line][a][Math.ceil(objTwLine_[a].amt)].x, coinsIconPoints_[line][a][Math.ceil(objTwLine_[a].amt)].y);
        }
    };

    function drawLineSegment_(container, x1, y1, x2, y2) {
        container.moveTo(x1, y1);
        container.lineTo(x2, y2);
    };

    function idle_(force){
        if (stopEvent_==true && force[0]!=true)return;
        stopEvent_=false;
        var index=0;
        changeAllHL_(1);
        winEventManager_.clearEvt();
        coinWinTxt_.scale.x=1.2;
        coinWinTxt_.scale.y=1.2;
        for (var a in wins) {
            if(wins[a]!=undefined) {
                if(wins[a].winAmount>0) {
                    winEventManager_.addEvent(amimIconIdle_, 200, wins[a]);
                    winEventManager_.addEvent(buttonHlOff_, ReelConfig.idleLineTime);
                    index++;
                }
            }
        }
        winEventManager_.addEvent(idle_,1000,[force]);
        winEventManager_.triggerEvt();
    }

    function startDrawLine_(a,smb, line, tweenTime, amt) {
        container_[a].clear();
        container_[a].lineStyle(myLineTick_[a],getColor_(line,smb), 0.7);
        container_[a].moveTo(oldIconPoints_[a].x, oldIconPoints_[a].y);

        objTwLine_[a] = {};
        objTwLine_[a]._points = coinsIconPoints_[line][a].length - 1;
        objTwLine_[a].amt = 0;

        var interval = (tweenTime * 3 * 1400) / (objTwLine_[a]._points);
        for (var i = 0; i < objTwLine_[a]._points; i++) {
            iTimO_.push(setTimeout(updateTween_, i * interval, line, a,smb, i, objTwLine_[a]._points));
        }
        setTimeout(clearAll_,(i * interval)+lineConfig.line.duration);
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
        if (container_[a] != null) {
            objTwLine_[a].amt = i;

            for (var j = 0; j < 15; j++) {
                container_[line][a].lineStyle(myLineTick_[a],  getColor_(line,smb), lineConfig.line.alpha- 0.1 * j);
                drawLineSegment_(container_[line][a], oldIconPoints_[a].x, oldIconPoints_[a].y + 0.2 * j, coinsIconPoints_[line][a][Math.ceil(objTwLine_[a].amt)].x, coinsIconPoints_[line][a][Math.ceil(objTwLine_[a].amt)].y + 0.2 * j);
                drawLineSegment_(container_[line][a], oldIconPoints_[a].x, oldIconPoints_[a].y - 0.2 * j, coinsIconPoints_[line][a][Math.ceil(objTwLine_[a].amt)].x, coinsIconPoints_[line][a][Math.ceil(objTwLine_[a].amt)].y - 0.2 * j);
            }

            container_[a].lineStyle(myLineTick_[a],  getColor_(line,smb), lineConfig.line.alpha);
            drawLineSegment_(container_[a], oldIconPoints_[a].x, oldIconPoints_[a].y, coinsIconPoints_[line][a][Math.ceil(objTwLine_[a].amt)].x, coinsIconPoints_[line][a][Math.ceil(objTwLine_[a].amt)].y);

            container_[a].lineStyle(myLineTick_[a],  getColor_(line,smb), lineConfig.line.alpha);
            oldIconPoints_[a] = new Phaser.Point(coinsIconPoints_[line][a][Math.ceil(objTwLine_[a].amt)].x, coinsIconPoints_[line][a][Math.ceil(objTwLine_[a].amt)].y);
        }
    };

    function drawLineSegment_(container, x1, y1, x2, y2) {
        container.moveTo(x1, y1);
        container.lineTo(x2, y2);
    };

    function buttonHlOff_(){
        if (stopEvent_==true)return;
        displayManager_.getText("lineWin").setText("");

        var btn =gameClass_.getLineButtons();
        for (a in btn){
            for (var b in btn[a]){
                btn[a][b].getButton().tint=0xffffff;
                btn[a][b].getButton().children[0].fill=displayManager.groups.buttons["line"+b].text.fill; //lineConfig.line.lines[b].color;
            }
        }
    }

    function triggerComplete_(){
        setTimeout(gameClass.winComplete,1000);
    }

    function updateBalance_(){
        reset_=true;
        TweenMax.to(coinWinTxt_,.4,{y:600,alpha:0.1,onComplete:startUpdate,ease:Sine.easeInOut});
        soundManager_.playSound("line");
        resetCentralWin_();
    }

    function startUpdate(){
        coinWinTxt_.setText("");
        TweenMax.to(coinWinTxt_,0,{ y :displayManager.groups.centralLineWin.texts.lineWin.y,alpha:1});
        winAmtManager_.showIstantUpdateWin( winManager_.getWinAmt() ,"WIN");
        endCoins_();
        clearAll_();
        bCompleted_=true;
    }

    function amimIconIdle_(winSmb_) {
        var index = 0;
        //lineWinAmtManager_.showLine();
        changeAllHL_(.45);
        hlButton_(winSmb_.line);
        for (var b in winSmb_.simbolReference) {
            hlSmb([winSmb_.simbolReference[b]]);
            displayManager_.getText("lineWin").setText(balanceManager_.getCurrencySmb()+ "" + Util.formatNumber(winSmb_.winAmount,Util.getNubersOfDecimal()));
        }
    }

    function hlButton_(line){
        var btn =gameClass_.getLineButton(line);
        for (a in btn){
            if(btn[a]!=undefined) {
                btn[a].getButton().tint = 0x62e515;
                btn[a].getButton().children[0].fill = "#ffffff";
            }
        }
    }

    function hlSmb(par) {
        var a = par[0];
        if (a==null)return;
        a.alpha = 1;
        TweenMax.to(a.scale,.2,{x:1.2,y:1.2,onComplete:updateAfterWinScale_,onCompleteParams:[a]});
    }

    function updateAfterWinScale_(a){
        TweenMax.to(a.scale,.2,{x:1,y:1});
    }

    function changeAllHL_(alpha) {
        var reels = spinManager_.getReels()
        for (var a in reels) {
            for (var s = 0; s < ReelConfig.numIcons ; s++) {
                //reels[a].getSymbol(s).tint = "#CCCCCC";
                reels[a].getSymbol(s+Number(ReelConfig.numIconsOnTop)).alpha = alpha;
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
                    stToClear_.push(setTimeout(delayedAnimation_, index * lineConfig.line.pointToPointSpeed * 1000, smb, a));
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

    function delayedAnimation_(smb,a){
        var add=false;
        if (spinManager_.getAnimationMap(smb.reel[a],smb.icon[a]).animations==null) //avoid to add the same animation more then once
        {
            add=true;
            smb.anim[a] = game_.add.sprite(smb.pos[a].x + ReelConfig.icon.width / 2, smb.pos[a].y + ReelConfig.icon.height / 2, "anim" + smb.smbNum[a]);
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
            TweenMax.to(smb.anim[a].scale, .2, {x: 1.15, y: 1.15});
            logger(smb.smbNum[a] + " "+ lineConfig.line.multipleAnimation[smb.smbNum[a]]);
            if ( add==true || lineConfig.line.multipleAnimation[smb.smbNum[a]]==true)
                smb.anim[a].animations.play("anim", 24, false, false, restoreIcon_, [spinManager_.getAnimationMap(smb.reel[a], smb.icon[a])]);//todo parametric loop
            else
                setTimeout(restoreIcon_,500,[spinManager_.getAnimationMap(smb.reel[a], smb.icon[a])]);
        }
    }

    function restoreIcon_(par){
        var smb=par[0];
        TweenMax.to(smb.scale, .1, {x: 1, y: 1});
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

        for ( var a in iTimO_)
            if (iTimO_[0]!=undefined)clearTimeout(iTimO_[a]);

        for ( a = 0; a < linesToDraw_; a++) {
            coinsIconPoints_[a] = [];
            coinsIconPoints_[a] = [];
            iconSmb_[a] = [];
            myLineTick_[a] =  tickRatio_;
        }
    }

    function startFallsDown_(ob){
        ob.collideWorldBounds=false;
        game_.physics.box2d.enable(ob);
        ob.body.setCircle(20);
    }

    function clearAll_() {
        for (var a = 0; a < container_.length; a++) {
            container_[a].clear();
            container_[a].destroy();
            if (container_[a] != null) {
                mainGroup_.remove(container_[a]);
                container_[a] = null;
            }
        }
        for (var a in mainGroup_.children){
            mainGroup_.remove(mainGroup_.children[a]);
        }
        container_ = [];
        buttonHlOff_();
    };

    /**
     * Clear all point of the particle system
     */
    function clearPoints_() {
        clearAll_();
    };

    function clearLineAfterValue_(){
        stopEvent_=true;
        resetCentralWin_();
        winEventManager_.clearEvt();
        if (bCompleted_==true){
            displayManager_.getText("lineWin").setText("");

            return;
        }

        var winAmount=winManager_.getWinAmt() ;
        clearAll_();
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
        if (balanceManager_.getShowIncredits()==false)amt= Util.getNumericValue(amt)/balanceManager_.getCoinValue()*lineManager_.getLinesNumber();
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
        soundManager_.getSound("bigWinBg").fadeOutBgSound(500);
        clearInterval(iFc_);
        stage_=0;
        totalDuration_=0;
        centralWinGroup_.visible=false;
        for (var a=1; a<=centralWinMsgGroups_.length-1;a++) {
            centralWinMsgGroups_[a].alpha=0;
            centralWinMsgGroups_[a].y=-200;
        }
        for (a in objThrown_){
            if(objThrown_[a]!=null) {
                objThrown_[a].destroy();
                objThrown_[a] = null;
            }
        }
        objThrown_=[];
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
        soundManager_.getSound("bigWinBg").setVolume(soundManager_.getSound("bigWinBg").getVolume()*1.4);//todo params
    }

    function animCentralStage_(){
        if(centralWinMsgGroups_[stage_])TweenMax.to(centralWinMsgGroups_[stage_].scale,.1,{x:1.2,y:1.2,ease:Bounce.easeInOut,onComplete:animCentralStage1_})
    }

    function animCentralStage1_(){
        if(centralWinMsgGroups_[stage_])TweenMax.to(centralWinMsgGroups_[stage_].scale,.1,{x:1,y:1,ease:Bounce.easeInOut})
    }

    function startFuntain_(){
        if (reset_==true)return;
        centralFuntainGroup_.visible = true;
        if (game_.cache.checkImageKey("gemPart" + currentSmb_) == true) {
            for (a = 0; a <= Math.min(Math.round(currentWinWeight_*2),displayManager.groups.centralWin.maxObjNum); a++) {
                var ob = game_.add.sprite(640, 740, "gemPart" + currentSmb_);
                ob.anchor.set(.5, .5);
                ob.animations.add("anim");
                ob.alpha = 0.5;
                var delal = Util.getRandomInt(1, currentWinWeight_) / 50;
                TweenMax.to(ob, .3 + Util.getRandomInt(-50, 100) / 100, {
                    delay: delal,
                    alpha: .8,
                    y: Util.getRandomInt(400, -100),
                    x: Util.getRandomInt(0, 1200), onComplete: startFallsDown_, onCompleteParams: [ob],ease:Sine.easeOut
                });
                ob.animations.play("anim", 24, true, false, null, null);//todo parametric loop
                ob.scale.x = Util.getRandomInt(80,125)/100
                ob.scale.y = Util.getRandomInt(80,125)/100
                objThrown_.push(ob);
                centralFuntainGroup_.add(ob);
            }
        }
    }

    function startFuntaintChecker_(){
        if (stage_>0){
            for (a in objThrown_){
                if (objThrown_[a]!=null && objThrown_[a].y>750) {
                    objThrown_[a].destroy();
                    objThrown_[a] = null;
                }
            }
        }
    }

    var me = {
        prepareWinnings: prepareWinnings_,
        clearLine: clearLine_,
        clearOverLine:clearOverLine_,
        showLine: showLine_,
        clearLineAfterValue:clearLineAfterValue_,
        buttonHlOff:buttonHlOff_,
        getInterruptedWinAnim:getInterruptedWinAnim_,
        stopEvents:stopEvents_,
        idle:idle_,
        showBonusWin:showBonusWin_,
        getTotalDuration:function(){
            if (winManager_.getWinAmt()>=stages_[1])totalDuration_=2*totalDuration_;
            if (winManager_.getWinAmt()>=stages_[2])totalDuration_=2*totalDuration_;
            return totalDuration_;
        }        
    }

    initClass_();
    return me;
}