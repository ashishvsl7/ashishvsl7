/**
 * KiS Framework, Created by Fabry on 29/02/2016.
 */
function CurveDraw(gameRef, gameClass) {
    var gameClass_ = gameClass;
    var game_ = gameRef;
    var linesX_offset_ = 30;      //ok
    var linesY_offset_ = 10;      //ok
    var lineColor_;
    var startFromSinglePoint_ = false;
    var endInSinglePoint_ = false;
    var drawFilters_ = [];
    var randomIconPoints_ = [];
    var oldRandomIconPoints_ = [];
    var bezierIconPoints_ = [];
    var coinsIconPoints_ = [];
    var iconSmb_ = [];
    var myEndAlphaPoint_ = [];
    var myAlphaPoint_ = [];
    var myIncrAlphaPoint_ = [];
    var myStartEndAlphaPoint_ = [];
    var myAlphaLine_ = [];
    var objTwAmt_ = [];
    var myLineMaxAlpha_ = [];
    var myLineTick_ = [];
    var myTimelineCoins_;
    var linesToDraw_ = 1;
    var lineColor_;
    var winEventManager_;
    var isMobile = false; //todo
    var coinWinGroup_;
    var coinWinTxt_;
    var winAmtClass_;
    var iEndTimO=1000;

    //drawing
    var mainGroup_;
    var animGroup_;
    var coinWinGroup_;
    var container_ = [];
    var objTwLine_ = [];
    var iTimO_=[];
    var bCompleted_=true;
    var stopEvent_=false

    function Point(x, y){
        this.x = x || 0;
        this.y = y || 0;
    }

    function initClass_() {
        mainGroup_ = displayManager_.getGroup("lines");
        animGroup_ = displayManager_.getGroup("wins");
        coinWinGroup_= displayManager_.getGroup("centralLineWin");
        coinWinTxt_=displayManager_.getText("lineWin");
        winEventManager_ = new EventManager();
    }

    var winAnim= {
        "winClasses_":[1,2,  5,10, 20,50,200,500,1000,2000],
        "winTxtDuration": [.8, 1.3, 1.5, 1.8, 2.1, 2.5, 3, 4, 5, 6],
        "winTxtColors": ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "ffffff", "#ffffff", "#ffffff"],
        "winSndEffect": ["", "", "", "", "", "", "", "", "", ""],
        "accuSnd": "",
        "accuSnd": ""
    }

    function createCanvas_() {
        clearAll_();
        objTwLine_ = [];
        container_ = [];
    };

    function addContainer_() {
        var cont = new Phaser.Graphics(game_, 0, 0);
        container_.push(cont);
        mainGroup_.add(cont);
    };

    function addDrawFilters_(filters) {
        for (var a in filters) {
            drawFilters_.push(filters[a]);
        }
    };

    function clearOverLine_(){
        winEventManager_.clearEvt();
        clearAll_();
        //showLine_();
    }

    function clearLine_() {
        clearAll_();
        winEventManager_.clearEvt();
    }

    function stopEvents_(){
        stopEvent_=true;
    }
    
    function showLine_() {
        var index=0;
        var wins=winManager_.getAllWinsSorted();
        bCompleted_=false;
        stopEvent_=false;
        if(coinWinGroup_!=null)coinWinGroup_.visible=true;
        winAmtClass_= new BounceWin(game_,gameClass_, winAnim,"lineWin");
        for (var a in wins) {
            if(wins[a]!=undefined) {
                winEventManager_.addEvent(drawLine_, 10, [a, wins[a].winAmount, "txtCoin", "txtNum"]);
                winEventManager_.addEvent(amimIcon_ ,0,wins[a]);
                winEventManager_.addEvent(buttonHlOff_,(winAnim.winTxtDuration[findWinRange_(wins[a].winAmount) ]*1000)+300,a);
                index++;
            }
        }
        winEventManager_.addEvent(updateBalance_,100);

        winEventManager_.triggerEvt();
    }

    function buttonHlOff_(){
        if (stopEvent_==true)return;
        var btn =gameClass_.getLineButtons();
        for (a in btn){
            for (var b in btn[a]){
                btn[a][b].getButton().tint=0xffffff;
                btn[a][b].getButton().children[0].fill=displayManager.groups.buttons["line"+b].text.fill; //lineConfig.line.lines[b].color;
            }
        }
    }

    function updateBalance_(){
        TweenMax.to(coinWinTxt_,.4,{y:500,alpha:0,onComplete:startUpdate,ease:Sine.easeInOut});
    }

    function startUpdate(){
        bCompleted_=true;
        coinWinTxt_.setText("");
        TweenMax.to(coinWinTxt_,0,{y:200,alpha:1});
        winAmtManager_.showWin( winManager_.getWinAmt() * balanceManager_.getCoinValue(), null, null, null);
        endCoins_();
        clearAll_();
    }

    function showStaticLine_(line, smb) {
        initLineParams();
        randomIconPoints_ = [];
        coinsIconPoints_ = [];
        calcSingleLinePoints_(line, smb);
        logger("over line " + line)
        drawLine_([line, 0, null, null]);
    }

    function prepareWinnings_(winSmb) {
        initLineParams();
        randomIconPoints_ = [];
        coinsIconPoints_ = [];
        for (var line in winSmb) {
            if(winSmb[line]!=undefined)
                calcSingleLinePoints_(line, winSmb[line]);
        }
    };

    function calcSingleLinePoints_(line, winSmb) {
        var smbW_ = ReelConfig.icon.width;
        var smbH_ = ReelConfig.icon.height;
        var pp;
        var ll;
        var real;
        var spacing = 0;
        var iconNum;
        randomIconPoints_[line] = [];
        coinsIconPoints_[line] = [];
        for (var a = 0; a < linesToDraw_; a++) {
            randomIconPoints_[line][a] = [];
            coinsIconPoints_[line][a] = [];
            for (var w in winSmb.pos) {
                if (winSmb.smbNum!=null && winSmb.smbNum[w]!=null)iconNum = winSmb.smbNum[w];
                if ((w == 0 && startFromSinglePoint_ == true) || (w == winSmb.pos.length - 1 && endInSinglePoint_ == true)) {
                    pp = new Point(0, 0);
                } else {
                    pp = new Point(Math.random() * linesX_offset_ - Math.random() * linesX_offset_, Math.random() * linesY_offset_ - Math.random() * linesY_offset_);
                }
                if (w == 0) {   //first symbol
                    ll = new Point(winSmb.pos[w].x + pp.x, winSmb.pos[w].y + smbH_ / 2 + pp.y);
                    randomIconPoints_[line][a].push(ll);
                }
                ll = new Point(winSmb.pos[w].x + smbW_ / 2 + pp.x, winSmb.pos[w].y + smbH_ / 2 + pp.y);
                real = new Point(winSmb.pos[w].x + smbW_ / 2, winSmb.pos[w].y + smbH_ / 2);
                randomIconPoints_[line][a].push(ll);
                coinsIconPoints_[line][a].push(real);
                //iconSmb_[a].push(winSmb.simbolReference[w]);
            }

            for ( var rest =Number(w)+1; rest<5 ;rest++){
                var smb= spinManager_.getReels()[rest].getPos((Number(lineConfig.line.lines[line].smb[rest])+1));
                pp = new Point(Math.random() * linesX_offset_ - Math.random() * linesX_offset_, Math.random() * linesY_offset_ - Math.random() * linesY_offset_);
                ll = new Point(     smb.x + smbW_ / 2 + pp.x, smb.y + smbH_ / 2 + pp.y);
                real = new Point(smb.x + smbW_ / 2, smb.y + smbH_ / 2);
                randomIconPoints_[line][a].push(ll);
                coinsIconPoints_[line][a].push(real);
            }
        }
    }

    function amimIcon_(smb) {
        if (stopEvent_==true)return;
        for (var a in smb.smbNum) {
            if (game.cache.checkImageKey("anim" + smb.smbNum[a]) == true) {
                smb.anim[a] = game_.add.sprite(smb.pos[a].x, smb.pos[a].y, "anim" + smb.smbNum[a]);
                smb.anim[a].animations.add("anim");
                smb.anim[a].animations.play("anim", 24, false, true, restoreIcon_, smb.simbolReference[a]);//todo parametric loop
                smb.anim[a].width = ReelConfig.icon.width;
                smb.anim[a].height = ReelConfig.icon.height;
                smb.simbolReference[a].visible = false;
                animGroup_.add(smb.anim[a]);
            }
        }
    }

    function restoreIcon_(par){
        par.visible=true;
    }

    function initLineParams() {
        //todo params
        //todo addDrawFilters(slot_class_.getLineDrawFilters(line));
        tickRatio_ = lineConfig.line.tickBase;
        linesX_offset_ = lineConfig.line.xOffset;
        linesY_offset_ = lineConfig.line.yOffset;
        lineTweenTime_PointToPoint_ = lineConfig.line.pointToPointSpeed;
        linesToDraw_ = lineConfig.line.linesNumber;

        //todo  coinsDrawn_ = Math.min(linesToDraw_, slot_class_.getSlotConfParam("numCoins", 1));//devono essere meno delle linee
        lineFadeTime_ = 1.2//slot_class_.getSlotConfParam("lineFadeTime", 1.2);
        txtFadeTime_ = 1.2//slot_class_.getSlotConfParam("txtFadeTime", 1.2);
        /*
         coinsTweenSpeed_ = //slot_class_.getSlotConfParam("coinsTweenSpeed", 1.5);///rallenta l'arrivo dei coins
         coinsTweenInterval_ = slot_class_.getSlotConfParam("coinsTweenInterval", 0.2);//rallenta l'arrivo dei coins
         coinsAlphaInc_ = slot_class_.getSlotConfParam("coinsAlphaInc", 0.3);
         */

        startFromSinglePoint_ = lineConfig.line.startFromSinglePoint;
        endInSinglePoint_ = lineConfig.line.endInSinglePoint;

        randomIconPoints_ = [];
        bezierIconPoints_ = [];
        oldRandomIconPoints_ = [];
        coinsIconPoints_ = [];
        iconSmb_ = [];
        myEndAlphaPoint_ = [];
        myAlphaPoint_ = [];
        myAlphaLine_ = [];
        myIncrAlphaPoint_ = [];
        myStartEndAlphaPoint_ = [];
        objTwAmt_ = [];
        myLineMaxAlpha_ = [];
        myLineTick_ = [];

        revert = false;
        ct = 0;

        for ( var a in iTimO_)
            if (iTimO_[0]!=undefined)clearTimeout(iTimO_[a]);

        for ( a = 0; a < linesToDraw_; a++) {
            randomIconPoints_[a] = [];
            bezierIconPoints_[a] = [];
            coinsIconPoints_[a] = [];
            iconSmb_[a] = [];
            myStartEndAlphaPoint_[a] = 100;
            myAlphaLine_[a] = 0;
            myLineMaxAlpha_[a] = Util.getRandomInt(50, 100) / 100;
            myLineTick_[a] = myLineMaxAlpha_[a] * lineConfig.line.tickBase;
        }
    }

    function drawLine_(params) {
        if (stopEvent_==true)return;
        var bezierValues = [];
        var line = params[0];
        var amt = params[1];
        var txtCoin = params[2];
        var txtNum = params[3];
        var a;
        var b;
        //todo move txtCoin over the icons
        //for (var j = 0; j < coinsIconPoints_[0].length; j++) {
        //    var tmpObj = {x: coinsIconPoints_[0][j].x - txtCoin.width / 2, y: coinsIconPoints_[0][j].y - txtCoin.height / 2};
        //    bezierValues.push(tmpObj);
        //}
        //
        //TweenLite.to(txtCoin, lineTweenTime_PointToPoint_ * iconSmb_[0].length * coinsTweenSpeed_, {bezier: {autoRotate: false, values: bezierValues}});
        createCanvas_();

        var btn =gameClass_.getLineButton(line);

        for (a in btn){
            btn[a].getButton().tint=0x62e515;
            btn[a].getButton().children[0].fill="#ffffff";
        }

        if (amt>0){
            winAmtClass_.changeFilters(lineManager_.getLineConfig(line).color);
            winAmtClass_.showWin(amt,null,null,null);
        }

        for (a = 0; a < linesToDraw_; a++) {
            addContainer_();
            var fsp = new FindSmoothPath(randomIconPoints_[line][a], true, 5);
            bezierIconPoints_[a] = fsp.getArrayOfPoints();
            if (bezierIconPoints_[a].length > 0) {
                myEndAlphaPoint_[a] = bezierIconPoints_[a].length - myStartEndAlphaPoint_[a] / 100;
                myIncrAlphaPoint_[a] = myLineMaxAlpha_[a] / myStartEndAlphaPoint_[a];
                oldRandomIconPoints_[a] = new Point(bezierIconPoints_[a][0].x, bezierIconPoints_[a][0].y);
                startDrawLine_(a, line, lineTweenTime_PointToPoint_, amt);
            }
        }
    }

    function startDrawLine_(a, line, tweenTime, amt) {
        container_[a].clear();
        container_[a].lineStyle(myLineTick_[a], lineConfig.line.color, 0.7);

        //container_[a].filters = Util.getFilters("line");//todo line number
        //if (displayManager.groups[a].texts[t]["shadow"] != undefined && displayManager.groups[a].texts[t]["shadow"] == true) {
        //    var shadowDim = jQuery.isArray(displayManager.groups[a].texts[t]["shadowDim"]) ? displayManager.groups[a].texts[t]["shadowDim"] : [displayManager.groups[a].texts[t]["shadowDim"], displayManager.groups[a].texts[t]["shadowDim"]];
        //    txt.setShadow(shadowDim[0], shadowDim[1], displayManager.groups[a].texts[t]["shadow"]["shadowColor"], displayManager.groups[a].texts[t]["shadowBlur"]);
        //}
        //
        //if (displayManager.groups[a].texts[t]["stroke"] != undefined) {
        //    txt.stroke = displayManager.groups[a].texts[t]["stroke"];
        //    txt.strokeThickness = displayManager.groups[a].texts[t]["stroke_tick"];
        //}


        container_[a].moveTo(oldRandomIconPoints_[a].x, oldRandomIconPoints_[a].y);

        objTwLine_[a] = {};
        objTwLine_[a]._points = bezierIconPoints_[a].length - 1;
        objTwLine_[a].amt = 0;

        //todo handle simbols nummver     var interval = (tweenTime * iconSmb()[0].length * 1000) / (objTwLine_[a]._points); //800 per rendere piÃ¹ veloce i coins
        var interval = (tweenTime * 3 * 1000) / (objTwLine_[a]._points); //800 per rendere piÃ¹ veloce i coins
        for (var i = 0; i < objTwLine_[a]._points; i++) {
            iTimO_.push(setTimeout(updateTween_, 0, line, a, i, objTwLine_[a]._points));
        }
    };

    function endCoins_(){
        clearInterval(iEndTimO);
        if (winAmtClass_!=null){
            winAmtClass_.clearAll();
            winAmtClass_=null;
        }
    }

    function updateTween_(line, a, i, pointsL) {
        if (container_[a] != null) {
            objTwLine_[a].amt = i;

            //ALPHA AT THE BEGINNING AND AT THE END
            if (objTwLine_[a].amt >= myEndAlphaPoint_[a]) {
                myAlphaLine_[a] = myAlphaPoint_[a];
                myAlphaPoint_[a] = myAlphaPoint_[a] - myIncrAlphaPoint()[a];
            } else if (i > (pointsL - 20)) {
                myAlphaLine_[a] = myAlphaLine_[a] - 0.05;
            }
            else {
                if (myAlphaLine_[a] <= myLineMaxAlpha_[a])
                    myAlphaLine_[a] = myAlphaLine_[a] + 0.05;
                myAlphaPoint_[a] = myLineMaxAlpha_[a];
            }

            //BLUR EFFECT
            if (!isMobile) {
                for (var j = 0; j < 5; j++) {
                    container_[a].lineStyle(myLineTick_[a],  lineConfig.line.color, myAlphaLine_[a] - 0.2 * j);
                    drawLineSegment_(container_[a], oldRandomIconPoints_[a].x, oldRandomIconPoints_[a].y + 0.7 * j, bezierIconPoints_[a][Math.ceil(objTwLine_[a].amt)].x, bezierIconPoints_[a][Math.ceil(objTwLine_[a].amt)].y + 0.7 * j);
                    drawLineSegment_(container_[a], oldRandomIconPoints_[a].x, oldRandomIconPoints_[a].y - 0.7 * j, bezierIconPoints_[a][Math.ceil(objTwLine_[a].amt)].x, bezierIconPoints_[a][Math.ceil(objTwLine_[a].amt)].y - 0.7 * j);
                }

                container_[a].lineStyle(myLineTick_[a],  lineConfig.line.color, myAlphaLine_[a]);
                drawLineSegment_(container_[a], oldRandomIconPoints_[a].x, oldRandomIconPoints_[a].y, bezierIconPoints_[a][Math.ceil(objTwLine_[a].amt)].x, bezierIconPoints_[a][Math.ceil(objTwLine_[a].amt)].y);

                container_[a].lineStyle(myLineTick_[a],  lineConfig.line.color, myAlphaLine_[a]);
                oldRandomIconPoints_[a] = new Point(bezierIconPoints_[a][Math.ceil(objTwLine_[a].amt)].x, bezierIconPoints_[a][Math.ceil(objTwLine_[a].amt)].y);

            } else {
                container_[a].lineStyle(myLineTick_[a],  lineConfig.line.color, myAlphaLine_[a]);
                drawLineSegment_(container_[a], oldRandomIconPoints_[a].x, oldRandomIconPoints_[a].y, bezierIconPoints_[a][Math.ceil(objTwLine_[a].amt)].x, bezierIconPoints_[a][Math.ceil(objTwLine_[a].amt)].y);
                oldRandomIconPoints_[a] = new Point(bezierIconPoints_[a][Math.ceil(objTwLine_[a].amt)].x, bezierIconPoints_[a][Math.ceil(objTwLine_[a].amt)].y);
            }
        }
    };

    function drawLineSegment_(container, x1, y1, x2, y2) {
        container.moveTo(x1, y1);
        container.lineTo(x2, y2);
    };

    /**
     * Clear all the particle systems
     */
    function clearAll_() {
        for (var a = 0; a < container_.length; a++) {
            container_[a].clear();
            container_[a].destroy();
            if (container_[a] != null) {
                mainGroup_.remove(container_[a]);
                container_[a] = null;
            }
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
        if (bCompleted_==true)return;
        winEventManager_.clearEvt();
        var winAmount=winManager_.getWinAmt() * balanceManager_.getCoinValue();
        clearAll_();
        endCoins_();
        coinWinTxt_.setText(balanceManager_.getCurrencySmb()+ "" + Util.formatNumber(winAmount,Util.getNubersOfDecimal()));
        TweenMax.to(coinWinTxt_,.2,{y:500,alpha:0,onComplete:startForceUpdate,ease:Sine.easeInOut});
    }

    function startForceUpdate(){
        coinWinTxt_.setText("");
        TweenMax.to(coinWinTxt_,0,{y:200,alpha:1});
        winAmtManager_.showShortWin( winManager_.getWinAmt() * balanceManager_.getCoinValue(), null, null, null);
        bCompleted_=true;
    }


    function fakeEvent(){

    }

    function findWinRange_(amt){
        for (var a in winAnim.winClasses_){
            if(winAnim.winClasses_[a]>=amt)
                return Number(a)-1;
        }
        return 0;
    }

    function getInterruptedWinAnim_(){
        return !bCompleted_;
    }

    var me = {
        prepareWinnings: prepareWinnings_,
        clearLine: clearLine_,
        clearAll:clearAll_,
        clearOverLine:clearOverLine_,
        showLine: showLine_,
        showStaticLine: showStaticLine_,
        clearLineAfterValue:clearLineAfterValue_,
        buttonHlOff:buttonHlOff_,
        getInterruptedWinAnim:getInterruptedWinAnim_,
        stopEvents:stopEvents_
    }

    initClass_();
    return me;
}