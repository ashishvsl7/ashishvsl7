/**
 * KiS Framework, Created by Fabry on 13/05/2016...
 */
function LineWinAmtManager(gameRef,gameClass){
    var game_=gameRef;
    var gameClass_=gameClass;
    var lineWinAmtClass_;

    function initClass_  (){
        try{
            spinClass_= new window[ReelConfig.lineWinAmtType](game_,gameClass_);
        }catch(e){
            console.log("error looking for class " + ReelConfig.lineWinAmtType);
        }
    }

    function showWins_  (params){
        lineWinAmtClass_.showWins(params);
    }

    function prepareWinnings_() {
        lineWinAmtClass_.prepareWinnings();
    }
    
    function clear_(){
        lineWinAmtClass_.clear();
    }
    
    function  clearBetweenLine_(){
        lineWinAmtClass_.clearBetweenLine();
    }
    
    function moveWinAmountPosition_(params) {
        lineWinAmtClass_.moveWinAmountPosition(params);
    }
    
    function showLine_(){
        lineWinAmtClass_.showLine();
    }
    
    var me={
        showWins:showWins_,
        showLine:showLine_,
        prepareWinnings: prepareWinnings_,
        clear:clear_,
        clearBetweenLine:clearBetweenLine_,
        moveWinAmountPosition:moveWinAmountPosition_
    }

    initClass_();
    return me;
}