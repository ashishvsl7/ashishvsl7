/**
 * KiS Framework, Created by Fabry on 29/02/2016.
 */
function LineManager(gameRef, gameClass) {
    var game_ = gameRef;
    var gameClass_ = gameClass;
    var lineType_ = ReelConfig.lineType;
    var lineDrawing_;
    var lineConfig_ = [];
    var linesNumber_=0;

    function initClass_() {
        lineDrawing_=null;
        linesNumber_=0;
        initLines_();

        try{
            lineDrawing_= new window[lineType_](game_,gameClass_);
        }catch(e){
            console.log("error looking for class " + lineType_);
        }
        if (lineConfig.line!=null && lineConfig.line.lines.length>0) {
            for (var a in lineConfig.line.lines)
                linesNumber_++;
        }else{
            if(lineConfig.line!=null && lineConfig.line.lineColours)linesNumber_=lineConfig.line.lineColours.length;
        }
    }

    function initLines_() {
        if (lineConfig.line!=null  && lineConfig.line.lines!=undefined) {
            var defColour = lineConfig.line.lines.color;
            lineConfig_ = lineConfig.line.lines;
        }
    }

    function setLineType_(type) {
        lineType_ = type;
        initClass_();
    }

    function prepareWinnings_(winSmb) {
        lineDrawing_.prepareWinnings(winSmb);
    }

    function showBonusWin_(amt,amtCash){
        return lineDrawing_.showBonusWin(amt,amtCash);
    }
    
    function showLine_() {
        winAmtManager_.winAnimStarted();
        lineDrawing_.showLine();
        setTimeout(releaseBalance,1000)
    }

    function releaseBalance(){
        //balanceManager_.setCanUpdate(true);    //removed for UKGC session bar because it was causing the updatable parameter on balancemanager to go to true after the first tumble and the win on the session bar update before the actual tumble animation start
    }

    function clearLine_() {
        buttonHlOff_();
        lineDrawing_.clearLine();
    }

    function clearOverLine_() {
        buttonHlOff_();
        lineDrawing_.clearOverLine();
    }

    function showStaticLine_(line) {
        var smbs = {}
        smbs.pos = [];
        for (var a in lineConfig_[line].smb) {
            smbs.pos.push(spinManager_.getReels()[a].getPos((Number(lineConfig_[line].smb[a]) + 1)));
        }
        lineDrawing_.showStaticLine(line, smbs);
    }

    function getLineConfig_(line) {
        return lineConfig.line;
    }

    function clearLineAfterValue_() {
        lineDrawing_.clearLineAfterValue();
    }

    function buttonHlOff_() {
        lineDrawing_.clearAll();
    }

    function getInterruptedWinAnim_() {
        return lineDrawing_.getInterruptedWinAnim();
    }

    function endAnimHandle_(wins, evt) {
        evt.addEvent(prepareWinnings_, 0, wins);
        evt.addEvent(showLine_, lineConfig.win.initialDelay);
        //evt.addEvent(gameClass_.updateBalance, 200);
    }
    
    function stopEvents_(){
        lineDrawing_.stopEvents();
    }

    function completeValue_(){
        lineDrawing_.completeValue();
    }

    function completeBonusValue_(amt,msg,tOut){
        lineDrawing_.completeBonusValue(amt,msg,tOut);
    }
    
    function showBonusCentralWinGreetings_(amt){
        return lineDrawing_.showBonusCentralWinGreetings(amt);
    }

    function showScatterCentralWinGreeting_(amt){
        return lineDrawing_.showScatterCentralWinGreeting(amt);
    }

    function showJpotCentralWinGreetings_(amt){
        return lineDrawing_.showJpotCentralWinGreetings(amt);
    }

    var me = {
        initClass:initClass_,
        setLineType: setLineType_,
        prepareWinnings: prepareWinnings_,
        clearLine: clearLine_,
        clearOverLine: clearOverLine_,
        showLine: showLine_,
        showStaticLine: showStaticLine_,
        getLineConfig: getLineConfig_,
        clearLineAfterValue: clearLineAfterValue_,
        buttonHlOff: buttonHlOff_,
        getInterruptedWinAnim: getInterruptedWinAnim_,
        endAnimHandle: endAnimHandle_,
        stopEvents:stopEvents_,
        getLinesNumber:function(){
            return (lineConfig.line.noCoinOnEachLine==null)? linesNumber_:lineConfig.line.noCoinOnEachLine;
        },
        getRealLinesNumber:function(){
            return linesNumber_;
        },
        getTotalDuration:function(){
            return lineDrawing_.getTotalDuration()+1500;
        },
        getPartialDuration:function(){
            return lineDrawing_.getPartialDuration();
        },
        idle:function(force){
            lineDrawing_.idle([force])
        },
        showBonusWin:showBonusWin_,
        completeValue:completeValue_,
        completeBonusValue:completeBonusValue_,
        showBonusCentralWinGreetings:showBonusCentralWinGreetings_,
        showScatterCentralWinGreeting:showScatterCentralWinGreeting_,
        showJpotCentralWinGreetings:showJpotCentralWinGreetings_,
        stopBigWinAnimation:function() {
            lineDrawing_.stopBigWinAnimation();
        },
        startIdleCycle:function (){
            lineDrawing_.startIdleCycle();
        },
        resumeTumbling:function (json,fs){
            if (lineDrawing_!=undefined){
                if (lineDrawing_.resumeTumbling!=null){
                    lineDrawing_.resumeTumbling(json,fs);
                }
            }
        },
        hackWin:function (opt,amt) {
            lineDrawing_.hackWin(opt,amt);
        },
        getTotalTumblingWin:function (){
            if (lineDrawing_.getTotalTumblingWin!=null){
                return lineDrawing_.getTotalTumblingWin();
            }
        }
    }
    initClass_();
    return me;
}
