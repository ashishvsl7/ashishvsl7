/**
 * KiS Framework, Created by Fabry on 23/02/2016.
 */
function BalanceManager(gameRef, gameClass) {
    var game_ = gameRef;
    var gameClass_ = gameClass;
    var coinValue_ = 0;
    var shoInCredits_ = false;
    var availableCashDisplays = ["cash", "credits"];
    var updatable_ = true;
    var balanceField_;
    var updated_ = false;
    var bBet_=false;
    var balanceUpdated_=true;
    var updateBalanceOnSPinLaterForRelax_=0;

    //todo handle different kind of balances here
    var balance_ = {
        //"cash": ReelConfig.credits,
        "cash": loginVars.getLoginParams().balance,
        "trueCash": loginVars.getLoginParams().balance,
        "display": loginVars.getLoginParams().balance,
        "balanceFromServer": false,
        "bonus": 0,
        //"currency":"₺"
        "currency": loginVars.getCurrencySmb()
    }

    function initClass_() {
        //init balance fields
        coinValue_ = ReelConfig.bet;
        if (guiConfig.showInCredit == "false") shoInCredits_ = false;
        balanceField_ = displayManager_.getText("creditValue");
        writeBalance_(getCurrencySmb_() + "" + Util.formatNumber(Number(balance_.cash), 2));

        if (gameParams.fun_real === "real") {
            framework.updateSmallMessageText(Translate.do("Playing for real"));
        } else {
            framework.updateSmallMessageText(Translate.do("Playing for fun"));
        }

        window.addEventListener("message", receiveMessage, false);

    }

    //listen for postmeassage and grab balance from server server on request
    function receiveMessage(event) {
        //if (event.origin !== "http://example.org:8080")
        // return;
        if (event.data === "refresh1x2GameBalance") {
            //call refreshBalance
            communicationManager_.sendBalanceReq();
        }
    }

    function unBet_(amt) {
        bBet_=false;
        if (freeSpinsManager_.getIsInFs() == true) return true;
        if (freeRoundsManager_.getIsInFr() == true) return true;
        if (communicationManager_.getResumeStatus().status.type == "tumble") return true;
        if (communicationManager_.getResumeStatus().status.type == "convert") return true;
        if (updateBalanceOnSPinLaterForRelax_>0){
            balanceUpdated_=true;
            return true;
        }

        if (amt==undefined) {
            if (balance_.cash >= coinValue_) {
                balance_.cash = balance_.cash + (coinValue_);
                balance_.trueCash = balance_.cash;
            }
        }else{
            if (balance_.cash >= amt) {
                balance_.cash = balance_.cash + (amt);
                balance_.trueCash = balance_.cash;
            }
        }
        balanceUpdate_(true);
    }

    function processBalanceBet_(cb){
        if (freeSpinsManager_.getIsInFs() == true) {
            cb(true);
            return;
        }
        if (freeRoundsManager_.getIsInFr() == true){
            cb(true);
            return;
        }
        if (communicationManager_.getResumeStatus().status.hand == "freespins" && (communicationManager_.getResumeStatus().status.type == "tumble" || communicationManager_.getResumeStatus().status.type == "convert")){
            cb(true);
            return;
        }
        if (communicationManager_.getResumeStatus().status.state=="FREESPINS" || (communicationManager_.getResumeStatus().status.type=="tumble" && communicationManager_.getResumeStatus().status.state=="NORMAL")){
            cb(true);
            return;
        }
        if (gameClass_.getIsRespin!=null && gameClass_.getIsRespin()){
            cb(true);
            return;

        }
        cb(cashCheck_());
    }

    var parBuyFeature_=[];

    function processBalanceBuyFeatureBet_(cb,par){
        cb(cashBuyFeatureCheck_(par),parBuyFeature_);
    }

    function buyFeatureBet_(cb,par) {
        bBet_=true;
        parBuyFeature_=par;
        if (updateBal_() == true) {
            return communicationManager_.getBalance().then(function(response) {
                    if (!isNaN(response) && response!="" && response !=undefined && response!=null) {
                        balance_.cash = Number(response);
                    }
                    processBalanceBuyFeatureBet_(cb,par.buyInValue/100);
                },
                function(responseError) {
                    processBalanceBuyFeatureBet_(cb,par.buyInValue/100);
                }
            );
        } else {
            processBalanceBuyFeatureBet_(cb,par.buyInValue/100);
        }
    }

    function bet_(cb) {
        bBet_=true;
        if (updateBal_() == true) {
            return communicationManager_.getBalance().then(function(response) {
                    if (!isNaN(response) && response!="" && response !=undefined && response!=null) {
                        balance_.cash = Number(response);
                    }
                    processBalanceBet_(cb);
                },
                function(responseError) {
                    processBalanceBet_(cb);
                }
            );
        } else {
            processBalanceBet_(cb);
        }
    }

    function updateBal_() {
        return (gameParams.balanceBeforeSpin == "true" && gameParams.fun_real == "real")?true:false;
    }

    function cashBuyFeatureCheck_(par) {
        if (balance_.cash >= par) {
            balance_.cash = balance_.cash - (par);
            balance_.trueCash = balance_.cash;
            gcmCalls_("BALANCE",balance_.cash);
        }else{
            clientMessageSend("no-funds");
            checkFailed_();
            return false;
        }
        balanceUpdate_();
        updatable_=false;
        return true;
    }

    function cashCheck_() {
        if (balance_.cash >= coinValue_) {
            if(gameParams.clientName!=undefined && gameParams.clientName.toUpperCase().indexOf("RELAX")>=0){
                updateBalanceOnSPinLaterForRelax_=coinValue_;
                updatable_=false;
                return true;
            }else{
                balance_.cash =  Number( Util.formatNumber( (balance_.cash - (coinValue_)) ,2));
                balance_.trueCash = balance_.cash;
            }
            sessionBarBalUpdate(coinValue_);
        }else{
            clientMessageSend("no-funds");
            f1x2.GcmError("Error code: 1006 - Insufficient funds, Please top up.");
            checkFailed_();
            return false;
        }
        balanceUpdate_();
        updatable_=false;
        return true;
    }

    function checkFailed_() {
        if (autoPlayManager_.getIsInAutoPlay()) {
            autoPlayManager_.toggleAutoPlay();
        }
        framework.setAutoPlayState(0);
        buttonManager_.applyState("NH");

    }

    function parse_(json) {
        if (updateBalanceOnSPinLaterForRelax_>0){
            //this update the balance taking the spin amout away, Relax doesn't want it to be taken away and give back in case of an error
            balance_.cash = balance_.cash - (updateBalanceOnSPinLaterForRelax_);
            balance_.trueCash = balance_.cash;
            updateBalanceOnSPinLaterForRelax_=0;
            balanceUpdateRelax_(balance_.cash);
        }

        if (json.newBalance != "" && isNaN(json.newBalance) == false && json.newBalance != null && json.newBalance != "not sent") { // during FR the balance is not sent by server but some balance update due to other games play or if the balance change for deposit it will change
            balance_.balanceFromServer = true;
            if (freeSpinsManager_.getIsInFs() == true && freeSpinsManager_.getFsNumber() > 0 && freeSpinsManager_.getType() != "tumble" && freeSpinsManager_.getType() != "convert") return true;
            balance_.cash = Number(json.newBalance);
            balance_.trueCash = balance_.cash;
        }
        if (freeSpinsManager_.getIsInFs() == true) return true;
        if (gameClass_.getBuyIn!=undefined && gameClass_.getBuyIn()==true)return;
        if (freeRoundsManager_.getIsInFr() == true ) {
            freeRoundsManager_.parse(json); //the win amount will be added inside FR panel
            if(updateBalanceOnFr_()==false)return;
        }
        if (updatable_) {
            if (shoInCredits_ == false) {
                writeBalance_(getCurrencySmb_() + "" + Util.formatNumber(Number(balance_.cash), 2));
            } else {
                writeBalance_(getCurrencySmb_() + "" + Util.formatNumber(Number(balance_.cash) / coinValue_ * lineManager_.getLinesNumber(), 0));
            }
            gcmCalls_("BALANCE",balance_.cash);
        }
        if (json.newBalance == "" || isNaN(json.newBalance) == true || json.newBalance == null || freeRoundsManager_.getIsInFr() == true) { // during FR the balance is not sent by server so i should get that
            balance_.cash = balance_.cash + (json.value);
            balance_.trueCash = balance_.cash;
        }
        updated_ = false;
        logger("new balance  " + balance_.cash)
    }

    function forceBalance_(val){
        if (balance_.balanceFromServer == false) {
            balance_.cash = balance_.cash - val;
            balance_.trueCash = balance_.trueCash - val;
        }
    }

    function forceBalanceAfterFS_(val) {
        if(gameParams.gameOriginalID =="7012" && freeRoundsManager_.getIsInFr() && freeRoundsManager_.getFrNumber()>0)return;
        if(gameParams.gameOriginalID =="7014" && freeRoundsManager_.getIsInFr() && freeRoundsManager_.getFrNumber()>0)return;
        if(gameParams.gameOriginalID =="7015" && freeRoundsManager_.getIsInFr() && freeRoundsManager_.getFrNumber()>0)return;
        if(gameParams.gameOriginalID =="7021" && freeRoundsManager_.getIsInFr() && freeRoundsManager_.getFrNumber()>0)return;
        if (balance_.balanceFromServer == false && (freeRoundsManager_.getIsInFr() == false || freeRoundsManager_.getFrNumber() <= 0)) {
            if (freeRoundsManager_.getIsInFr() == true && updated_ == false) {
                updated_ = true; //bonus and FS on last FR used to call this function twice... the second one is the one called on free rounds finish and is the good one
                return;
            }
            balance_.cash = balance_.cash + (val);
            balance_.trueCash = balance_.cash;

        }
        balanceUpdated_=false;
        logger("fs force new balance  " + balance_.cash)
        //balanceUpdate_(true); here -> ukgc and celientmessages session bar refactoring
    }

    function forceBalanceAfterFR_(val) {
        if(updateBalanceOnFr_()==true)return; //balance updates after each spin
        if (balance_.balanceFromServer == false && (freeRoundsManager_.getIsInFr() == false || freeRoundsManager_.getFrNumber() <= 0)) {
            if (updated_ == false) {
                if(gameInfo.accountID.indexOf("755")>=0){
                    updated_=true;
                    return;
                }   //skip FR last update for Lottomatica
                updated_ = true; //bonus and FS on last FR used to call this function twice... the second one is the one called on free rounds finish and is the good one
            }
            balance_.cash = balance_.cash + (val);
            balance_.trueCash = balance_.cash;

        }
        logger("fs force new balance  " + balance_.cash)
        balanceUpdate_(true);
    }

    function fakeBalanceUpdaterToRemove(value) {
        //todo remove when balance will arrive from server
        balance_.cash = balance_.cash + value;
    }

    function toggleCredits_() {
        //swap from credits to cash
        shoInCredits_ = !shoInCredits_;
        if (shoInCredits_ == false) {
            writeBalance_(getCurrencySmb_() + "" + Util.formatNumber(Number(balance_.cash), 2));
        } else {
            writeBalance_(getCurrencySmb_() + "" + Util.formatNumber(Number(balance_.cash) / coinValue_ * lineManager_.getLinesNumber(), 0));
        }
        framework.updateSmallMessageText("");
        if (winAmtManager_.getInterruptedWinAnim() == true) {
            winAmtManager_.forceToComplete();
            lineManager_.clearLineAfterValue();
        }

        lineManager_.idle(true);
        if (winManager_.getWinAmt() > 0) {
            if (shoInCredits_ == false) {
                displayManager_.getText("winValue").setText(ReelConfig.additionalPreText + Translate.do("WIN") + " " + getCurrencySmb_() + "" + Util.formatNumber(winManager_.getWinAmt(), 2) + ReelConfig.additionalPostText);
            } else {
                displayManager_.getText("winValue").setText(ReelConfig.additionalPreText + Translate.do("WIN") + " " + getCurrencySmb_() + "" + Util.formatNumber(winManager_.getWinAmt(), 0) + ReelConfig.additionalPostText);
            }
        } else {
            displayManager_.getText("winValue").setText("");
        }
    }

    function getBalance_() {
        //todo handle different kind of balances here


        if (updateBalanceOnSPinLaterForRelax_>0){
            if (shoInCredits_ == true) {
                return (balance_.cash - updateBalanceOnSPinLaterForRelax_) / coinValue_;

            }else{
                return Number(balance_.cash - updateBalanceOnSPinLaterForRelax_);
            }
        }

        return Number((shoInCredits_ == true) ? balance_.cash / coinValue_ : balance_.cash);
    }

    function getTrueBalance_() {
        //todo handle different kind of balances here

        // if (updateBalanceOnSPinLaterForRelax_>0){
        //     return Number(balance_.trueCash-updateBalanceOnSPinLaterForRelax_);
        // }

        return Number(balance_.trueCash);
    }


    function getTrueBeforeSpinBalance_() {
        //todo handle different kind of balances here

        if (updateBalanceOnSPinLaterForRelax_>0){
            return Number(balance_.trueCash-updateBalanceOnSPinLaterForRelax_);
        }

        return Number(balance_.trueCash);
    }

    function getCurrencySmb_() {
        //return the currency currently used
        if (balance_.currency == undefined) {
            //Display error message
            var message = new MessageScreen(
                "We were unable to retrieve the game setup parameters",
                "fatal-error",
                "Error Loading Game Currencies:" + balance_.currency, [

                    {
                        "action": function() {

                            message.destroy();
                            window.top.location.replace(gameParams.lobbyurl);

                        },

                        "label": "Lobby"

                    }

                ],
                false,
                true
            );
            return "";
        }
        return (shoInCredits_ == true) ? "" : balance_.currency;
    }

    function geBalanceObj_() {
        return balance_;
    }

    function setCoinValue_(value) {
        if (value!=undefined) {
            coinValue_ = Util.getNumericValue(value);
            balanceUpdate_();
        }
    }

    function getCoinValue_() {
        return coinValue_;
    }

    function setCanUpdate_(value) {
        console.log("set can update balance "+ value)
        updatable_ = value;
    }

    function getCanUpdate_() {
        return updatable_;
    }

    function forceBalanceUpdate_() {
        console.log("forcebalance update------------")
        updatable_ = true;
        balanceUpdate_();
    }


    var prev= gameInfo.balance
    function balanceUpdate_(force,amount) {
        //update the balance and store the balace
        logger(updatable_ + " update balance  " + balance_.cash)
        // if ((updatable_ )&& prev - balance_.cash < 0 &&  window.f1x2.SESSION_BAR !=undefined){
        //     //ukgc session bar
        //     //window.f1x2.SESSION_BAR.updateNet(balance_.cash-prev);
        // }
        if (amount!=undefined) {
            //logger("update balance " + " " + getStackTrace().join('\n'));
            //gcmCalls_("PAID", amount);
            //relax and client wrapper
            //clientMessageSend("value-win", amount);
        }
        //here changed to always update because now balance update gets called just once at the right time
        if (shoInCredits_ == false) {
            writeBalance_(getCurrencySmb_() + "" + Util.formatNumber(Number(balance_.cash), 2));
        } else {
            writeBalance_(getCurrencySmb_() + "" + Util.formatNumber(Number(balance_.cash) / coinValue_ * lineManager_.getLinesNumber(), 0));
        }
        balance_.display = balance_.cash;
        gcmCalls_("BALANCE",balance_.cash);

        bBet_=false;
        if (amount!=undefined && (freeRoundsManager_.getIsInFr()==false|| updateBalanceOnFr_()==true)) {
            console.log("update balance message" +amount + " "+ freeSpinsManager_.getIsInFs())
            gcmCalls_("PAID", amount);
            gcmCalls_("ANIMATION_END", null, true);
            if (freeSpinsManager_.getIsInFs() == false) clientMessageSend("play-end",amount);
        }
        balanceUpdated_=true;
    }


    function balanceUpdateRelax_(amt) {
        //update the balance and store the balace
        logger(updatable_ + " update balance  " + amt);
        if (shoInCredits_ == false) {
            writeBalance_(getCurrencySmb_() + "" + Util.formatNumber(Number(amt), 2));
        } else {
            writeBalance_(getCurrencySmb_() + "" + Util.formatNumber(Number(amt) / coinValue_ * lineManager_.getLinesNumber(), 0));
        }
        balance_.display = amt;
        gcmCalls_("BALANCE",amt);
        bBet_=false;

    }

    function balanceBonusUpdate_(amt, unsAmt) {
        //add to the balance field the amount won on the feature
        if(updateBalanceOnFr_()==false) {
            if (gameInfo.freeRoundsAvailable) {
                //just set the free spin total won inside the FR total won after a resume take place
                var p = {};
                p.value = amt + unsAmt;
                //freeRoundsManager_.parse(p);
                return;
            }
            if (balance_.balanceFromServer == false) {
                balance_.cash += unsAmt;
                balance_.trueCash = balance_.cash;
            }
        }
        if (updatable_) {
            if (shoInCredits_ == false) {
                writeBalance_(getCurrencySmb_() + "" + Util.formatNumber(Number(balance_.display), 2));
            } else {
                writeBalance_(getCurrencySmb_() + "" + Util.formatNumber(Number(balance_.display) / coinValue_ * lineManager_.getLinesNumber(), 0));
            }
            gcmCalls_("BALANCE",balance_.display);
        }
    }

    function setBalance_(_amt) {
        balance_.cash = _amt;
        balance_.trueCash = balance_.cash;
        balanceUpdate_();

    }


    function balanceBeforeSpin_() {

        return new Promise(function(resolve, reject) {

            //if setting is switched off do not attempt
            if (gameParams.balanceBeforeSpin !== "true" || gameParams.fun_real !== "real") {
                resolve(getBalance_());
            } else {
                //communicationManager will request balance if launch param says to
                communicationManager_.getBalance().done(function(data) {
                    if (data) { //set the balance
                        setBalance_(data);
                    }
                    resolve(getBalance_());
                });
            }
        });

    }

    function writeBalance_(amt){
        /*
        Game messages - ‘footer-top-message’
        Balance               - ‘footer-bottom-balance’
        Clock                   - ‘footer-bottom-clock’
         */

        if(gameParams.fun_real != "real" && gameParams.clientName!=undefined && gameParams.clientName.toUpperCase().indexOf("RELAX")>=0 && window.currencyLookup!=undefined && gameParams.luncherCurrency!="" && window.currencyLookup(gameParams.luncherCurrency)!=undefined&& window.currencyLookup(gameParams.luncherCurrency)!=""){
            //relax wants the currecny along with FUN text
            amt=amt.replace ("FUN","FUN "+window.currencyLookup(gameParams.luncherCurrency));
        }
        prev=balance_.cash;

        if (ReelConfig.newUI) {
            if (window.innerHeight > window.innerWidth) {
                //portrait
                $("#footer-bottom-balance").html("&nbsp;&nbsp;&nbsp;"+amt);
            } else {
                $("#footer-bottom-balance").html(amt);
            }
        }else{
            balanceField_.setText(amt);
        }
    }


    var me = {
        parse: parse_,
        getBalance: getBalance_,
        forceBalanceUpdate: forceBalanceUpdate_,
        getTrueBalance: getTrueBalance_,
        getTrueBeforeSpinBalance:getTrueBeforeSpinBalance_,
        toggleCredits: toggleCredits_,
        getCurrencySmb: getCurrencySmb_,
        geBalanceObj: geBalanceObj_,
        setCoinValue: setCoinValue_,
        getCoinValue: getCoinValue_,
        setCanUpdate: setCanUpdate_,
        getCcanUpdate: getCanUpdate_,
        balanceUpdate: balanceUpdate_,
        balanceBonusUpdate: balanceBonusUpdate_,
        forceBalanceAfterFS: forceBalanceAfterFS_,
        forceBalanceAfterFR:forceBalanceAfterFR_,
        forceBalance:forceBalance_,
        buyFeatureBet:buyFeatureBet_,
        bet: bet_,
        unBet: unBet_,
        balanceBeforeSpin: balanceBeforeSpin_,
        setBalanceUpdated:function(val){
            balanceUpdated_=val;
        },
        getShowIncredits: function() {
            return shoInCredits_;
        },
        getDisplayBalance:function(){
            return balance_.display;
        },
        setBalance: setBalance_
    }
    initClass_();
    return me;
}
