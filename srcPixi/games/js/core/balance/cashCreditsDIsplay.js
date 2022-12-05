/**
 * KiS Framework, Created by Fabry on 08/06/2016.
 */


function CashCreditsDisplay(gameRef, gameClass) {
    var game_ = gameRef;
    var gameClass_ = gameClass;
    var shoInCredits_=true;

    function initClass_(){

    }

    function toggleCreditsDisplay_(){
        //used to toggle  cash and credits
        shoInCredits_= !shoInCredits_;
        balanceManager_.toggleCredits();
        gameClass_.changeBet(balanceManager_.getCoinValue());
        if (shoInCredits_) {
            displayManager_.getText("betLabel").setText(Translate.do("Coins"));
            displayManager_.getText("creditLabel").setText(Translate.do("Coins:"));
        }else {
            displayManager_.getText("betLabel").setText(Translate.do("Cash"));
            displayManager_.getText("creditLabel").setText(Translate.do("Cash:"));
        }
    }

    var me={
        toggleCreditsDisplay:toggleCreditsDisplay_
    }
    initClass_();
    return me;
}