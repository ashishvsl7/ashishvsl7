/**
 * KiS Framework,Created by Fabry on 10/05/2016.
 */
function CentralAllLinesWin(gameRef,gameClass_, config, txt){
    var gameRef_ = gameRef;
    var gameClass_ = gameClass_;
    var tweens=[];
    var bCompleted_=false;
    var totalDuration_=0;
    var winTxt_=displayManager_.getText(txt);

    function initClass_(){
        winTxt_.setText("");
    }

    function forceToComplete_(){
        for (var a in tweens)
            if(tweens[a]!=null)tweens[a].time(tweens[a].totalDuration());

        bCompleted_=true;
    }

    function showShortWin_(value,start,update,complete){
    }

    function showWin_(value,start,update,complete){
        logger(value)
    }

    function changeWinValue_(amt){
        winTxt_.setText(Translate.do("Win")+ ": " +balanceManager_.getCurrencySmb() +  "" +  Util.formatNumber(amt,Util.getNubersOfDecimal()));
    }

    function getInterruptedWinAnim_(){
        return !bCompleted_;
    }
    
    var me={
        showWin:showWin_,
        showShortWin:showShortWin_,
        getTotalDuration:function(){
            return totalDuration_;
        },
        resetWinManager:function(){
            totalDuration_=0;
        },
        clearAll:function(){
            for (var a in tweens)
                if(tweens[a]!=null)tweens[a].kill();
            winTxt_.setText("");
        },
        forceToComplete:forceToComplete_,
        getInterruptedWinAnim:getInterruptedWinAnim_,
        winAnimStarted:function(){
            bCompleted_=false;
        },
        changeWinValue:changeWinValue_
    }
    initClass_();
    return me;
}

