/**
 * KiS Framework, Created by Fabry on 17/05/2016.
 */
function AllInOneLineWinAmount(gameRef, gameClass) {
    var gameClass_ = gameClass;
    var game_ = gameRef;
    var coinWinGroup_;
    var coinWinTxt_;
    var winAmtClass_;

    var winAnim= {
        "winClasses_":[1,2,  5,10, 20,50,200,500,1000,2000],
        "winTxtDuration": [.8, 1.3, 1.5, 1.8, 2.1, 2.5, 3, 4, 5, 6],
        "winTxtColors": ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "ffffff", "#ffffff", "#ffffff"],
        "winSndEffect": ["", "", "", "", "", "", "", "", "", ""],
        "accuSnd": "",
        "accuSnd": ""
    }

    function initClass_(){
        coinWinGroup_ = displayManager_.getGroup("centralLineWin");
        coinWinTxt_ = displayManager_.getText("lineWin");
        winAmtClass_= new BounceWin(game_,gameClass_, winAnim,"lineWin");
    }

    function prepareWinnings_() {
        if (coinWinGroup_ != null)coinWinGroup_.visible = true;
        TweenMax.to(coinWinTxt_, 0, {y: 200, alpha: 1});
        winAmtClass_.showWin(winManager_.getWinAmt()* balanceManager_.getCoinValue(),null,null,onComplete_);
    }

    function onComplete_(){
        setTimeout(winAmtClass_.clearAll,1000);
    }

    function clear_(){
        coinWinTxt_.setText("");
    }

    function clearBetweenLine_(){
    }

    function showWins_(params){
    }

    function moveWinAmountPosition_(params) {
    }

    function showLine_(){
        winAmtManager_.showWin(winManager_.getWinAmt() * balanceManager_.getCoinValue(), null, null, null);
    }

    function getCentralWinDuration_(){
        var index=Number(findWinRange_(winManager_.getWinAmt()* balanceManager_.getCoinValue()));
        return winAnim.winTxtDuration[index];
    }


    function findWinRange_(amt){
        for (var a in winAnim.winClasses_){
            if(winAnim.winClasses_[a]>=amt)
                return Number(a)-1;
        }
        return 0;
    }


    var me={
        prepareWinnings:prepareWinnings_,
        clear:clear_,
        clearBetweenLine:clearBetweenLine_,
        showWins:showWins_,
        showLine:showLine_,
        moveWinAmountPosition:moveWinAmountPosition_,
        getCentralWinDuration:getCentralWinDuration_
    }
    initClass_();
    return me;
}