/**
 * KiS Framework, Created by Fabry on 08/03/2016.
 */
function WinAmtManager(gameRef,gameClass){
    var game_=gameRef;
    var gameClass_=gameClass;
    var winAmtClass_;

    function initClass_  (){
        try{
            winAmtClass_= new window[ReelConfig.statusWinType](game_,gameClass_,ReelConfig, "winValue");
        }catch(e){
            console.log("error looking for class " + ReelConfig.statusWinType);
        }
    }

    function showWin_  (value,start,update,complete,startVal,additionalText,scaleFactor,duration){
        winAmtClass_.showWin(value,start,update,complete,startVal,additionalText,scaleFactor,duration);
    }

    function showShortWin_  (value,start,update,complete){
        winAmtClass_.showShortWin(value,start,update,complete,"WIN");
    }

    function showIstantUpdateWin_  (value,txt){
        winAmtClass_.showIstantUpdateWin(value,txt);
    }

    function forceToComplete_(){
        winAmtClass_.forceToComplete();
    }

    function getInterruptedWinAnim_(){
        return winAmtClass_.getInterruptedWinAnim();
    }

    function winAnimStarted_(){
        winAmtClass_.winAnimStarted();
    }

    function changeWinValue_(amt){
        winAmtClass_.changeWinValue(amt);
    }
    
    var me={
        showWin:showWin_,
        showShortWin:showShortWin_,
        showIstantUpdateWin:showIstantUpdateWin_,
        clearAll:function(){
            return winAmtClass_.clearAll();
        },
        getTotalDuration:function(){
            return winAmtClass_.getTotalDuration();
        },
        resetWinManager:function(){
            winAmtClass_.resetWinManager();
        },
        forceToComplete:forceToComplete_,
        getInterruptedWinAnim:getInterruptedWinAnim_,
        winAnimStarted:winAnimStarted_,
        changeWinValue:changeWinValue_,
        getWinAmtClass:function(){
            return winAmtClass_;
        }
    }

    initClass_();
    return me;
}