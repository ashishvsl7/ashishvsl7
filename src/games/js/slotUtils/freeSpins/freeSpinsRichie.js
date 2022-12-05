/**
 * KiS Framework, Created by Fabry on 04/04/2019.
 */
function FreeSpinsRichie(gameRef,gameClass){
    var game_=gameRef;
    var gameClass_=gameClass;
    var freeSpinNum_=0;
    var fsPlayed_=0;
    var isInFs_=false;
    var fsWon_=false;
    var fsWonNum_=0;
    var wasOnFs=false;
    var startBalance_=0;
    var win_;
    var winCash_;
    var mult_=1;
    var emitter_=[];
    var unsettledWin_=0;
    var type_="";
    var resume_=false;

    function initClass_(){
    }

    function parse_(json){
        win_=0;
        mult_=1;
        fsWonNum_=0;
        fsAddNum_=0;
        if (json.freeSpin!=null){
            //inside FS
            freeSpinNum_=json.freeSpin.num;
            fsPlayed_=json.freeSpin.fsPlayed;
            if (json.freeSpin.won!=null && json.freeSpin.totalWin!=null){
                winCash_=json.freeSpin.totalWin/100;
            }
            if (json.freeSpin.multiplier!=null && json.freeSpin.multiplier>0){
                mult_=json.freeSpin.multiplier;
            }
            if(json.freeSpin.unsettledTotal!=undefined)
                unsettledWin_=json.freeSpin.unsettledTotal/100;

        }else if (json.status!=null){
            if (json.status.hand=="freespins"){
                freeSpinNum_=json.status.numFS;
                winCash_=json.status.totalWin/100;

                if (json.status.multiplier!=null && json.status.multiplier>0) {
                    mult_ = json.status.multiplier;
                }
                unsettledWin_=json.status.unsettledTotal/100;
            }else{
                freeSpinNum_=json.status.collected;
            }
        }
        win_=winCash_ / balanceManager_.getCoinValue()*lineManager_.getLinesNumber();
    }

    function resumeFs_(){
        resume_=true;
        balanceManager_.balanceBonusUpdate(winCash_,0);
        toggleFreeSpins_();
    }

    function toggleFreeSpins_ () {
        if(ReelConfig.maxFsNum==null) {
            displayManager_.getText("fsValue").setText(freeSpinNum_);
        }else{
            displayManager_.getText("fsValue").setText(ReelConfig.maxFsNum-(freeSpinNum_));
        }

        if (isInFs_ && freeSpinNum_>0) {
            //already in
            fsWon_=false;
        } else {
            if (wasOnFs==false)startBalance_=balanceManager_.getBalance();
            wasOnFs=true;
            fsWon_=false;
            isInFs_=true;
            fsPlayed_=0;
            win_=0;
            //first FS
            //toggle gfx
            if (balanceManager_.getShowIncredits()==true) {
                displayManager_.getText("totWonValue").setText(Util.formatNumber(winCash_/ balanceManager_.getCoinValue() * lineManager_.getLinesNumber(), Util.getNubersOfDecimal()));
                displayManager_.getText("totWonValue").num=Util.formatNumber((winCash_) / balanceManager_.getCoinValue() * lineManager_.getLinesNumber(), Util.getNubersOfDecimal());
            }else{
                displayManager_.getText("totWonValue").setText(balanceManager_.getCurrencySmb() + "" + Util.formatNumber(winCash_, Util.getNubersOfDecimal()));
                displayManager_.getText("totWonValue").num=Util.formatNumber((winCash_), Util.getNubersOfDecimal());
            }
            displayManager_.getGroup("freeSpins").alpha=0;
            displayManager_.getGroup("freeSpins").y=0;
            displayManager_.getGroup("freeSpins").visible=true;

            if (freeRoundsManager_.getIsInFr()==false && gameInfo.freeRoundsAvailable!=true){
                TweenMax.to(displayManager_.getGroup("logo"),.3,{alpha:0,onComplete:logoOut_});
            } else{
                TweenMax.to(displayManager_.getGroup("freeRounds"),.4,{y:-200});
                TweenMax.to(displayManager_.getGroup("freeSpins"),.4,{alpha:1});
                if (gameClass_.fsLogoOut!=null)gameClass_.fsLogoOut();
            }
        }
    }

    function logoOut_() {
        TweenMax.to(displayManager_.getGroup("freeSpins"), .4, {alpha:1});
        if (gameClass_.fsLogoOut!=null)gameClass_.fsLogoOut();
    }

    function updateFreeSpinsNum_ (){
        if(ReelConfig.maxFsNum==null) {
            displayManager_.getText("fsValue").setText(freeSpinNum_ - 1);
        }else{
            displayManager_.getText("fsValue").setText(ReelConfig.maxFsNum-(freeSpinNum_ - 1));
        }
        if (isInFs_ && freeSpinNum_>=0){
        }
    }

    function updateFreeSpinsData_(){
        if (balanceManager_.getShowIncredits()==true) {
            displayManager_.getText("totWonValue").setText(Util.formatNumber((winCash_/mult_) / balanceManager_.getCoinValue() * lineManager_.getLinesNumber(), Util.getNubersOfDecimal()));
            displayManager_.getText("totWonValue").num=Util.formatNumber((winCash_/mult_) / balanceManager_.getCoinValue() * lineManager_.getLinesNumber(), Util.getNubersOfDecimal());
        }else {
            displayManager_.getText("totWonValue").setText(balanceManager_.getCurrencySmb() + "" + Util.formatNumber((winCash_/mult_), Util.getNubersOfDecimal()));
            displayManager_.getText("totWonValue").num=Util.formatNumber((winCash_/mult_), Util.getNubersOfDecimal());
        }
        displayManager_.getText("fsMultValue").setText("x" +mult_);
    }

    function updateFreeSpinsTotWon_(){
        if (balanceManager_.getShowIncredits()==true) {
            displayManager_.getText("totWonValue").setText(Util.formatNumber((winCash_/mult_) / balanceManager_.getCoinValue() * lineManager_.getLinesNumber(), Util.getNubersOfDecimal()));
            displayManager_.getText("totWonValue").num=Util.formatNumber((winCash_/mult_) / balanceManager_.getCoinValue() * lineManager_.getLinesNumber(), Util.getNubersOfDecimal());
        }else {
            displayManager_.getText("totWonValue").setText(balanceManager_.getCurrencySmb() + "" + Util.formatNumber((winCash_/mult_), Util.getNubersOfDecimal()));
            displayManager_.getText("totWonValue").num=Util.formatNumber((winCash_/mult_), Util.getNubersOfDecimal());
        }
    }

    function updateFreeSpinsMult_(){
    }

    function showFsTotWonPanel_(){
        autoPlayManager_.setCanAp(false);
        freeSpinNum_=-999;
        displayManager_.getGroup("freeSpins").y=-500;
        displayManager_.getGroup("fsWonPanel").y=-1000;
        displayManager_.getGroup("fsWonPanel").visible=true;
        if (winCash_>0){
            if (winCash_>(balanceManager_.getCoinValue()))soundManager_.playSound("winPanel");
            winManager_.updateWinAmt(winCash_);
        }

        if (freeRoundsManager_.getIsInFr()==false){
            TweenMax.to(displayManager_.getGroup("logo"),.3,{alpha:1});
        }else{
            TweenMax.to(displayManager_.getGroup("freeRounds"),.4,{y:0,ease:Bounce.easeOut});
        }

        //TweenMax.to(displayManager_.getGroup("fsWonPanel"),.4,{y:0,ease:Bounce.easeOut,onComplete:hideTotPanel_});
        lineManager_.clearLine();
        me.setIsInFs(false);
        winManager_.resetWinAmt();
        winManager_.setWinAmountBonus(winCash_);

        balanceManager_.forceBalanceAfterFS(winCash_);
        // update FR total
        var p={};
        p.value=winCash_;
        freeRoundsManager_.parse(p);

        setTimeout(hideTotPanel_,1000);
        soundManager_.getBGSound("bgFs").fadeOutBgSound(1000);
        soundManager_.getBGSound("bgFs1").fadeOutBgSound( 500);
        soundManager_.getBGSound("bgFs2").fadeOutBgSound( 500);
        soundManager_.getBGSound("bgFs3").fadeOutBgSound( 500);
        soundManager_.resetVolume("bgSlot");
        soundManager_.playBgSound("bgSlot");

    }

    function hideTotPanel_(){
        if (resume_){
            balanceManager_.balanceBonusUpdate(winCash_,(unsettledWin_-winCash_));
            resume_=false;
        }

        if (win_>0) {

            if (balanceManager_.getShowIncredits() == true) {
                winAmtManager_.showIstantUpdateWin(win_,"Free Spins Win");
            }else{
                winAmtManager_.showIstantUpdateWin(winCash_,"Free Spins Win");
            }

            if (winCash_>(balanceManager_.getCoinValue()))soundManager_.playSound("winPanel");
            var time=lineManager_.showBonusCentralWinGreetings(winCash_);
            var lineEvalTOut_=setTimeout(goBackAfterCentralWin_,time);
            gameClass_.hideFs(lineEvalTOut_);
        }else{
            TweenMax.to(displayManager_.getGroup("fsWonPanel"), .5, {
                delay: 3,
                y: -1000,
                ease: Linear.easeIn,
                onStart: freeSpinsManager_.startHidePanel,onStartParams:[0,0],
                onComplete: freeSpinsManager_.completeDidePanel,onCompleteParams:[0,0],
            });
            buttonManager_.applyRestore();
        }
    }

    function goBackAfterCentralWin_(){
        if (gameClass_.fsHideTotPanel)gameClass_.fsHideTotPanel();
        buttonManager_.applyState("NH");
        buttonManager_.applyRestore();
        autoPlayManager_.setCanAp(true);
        lineManager_.clearLine();
        //lineManager_.idle(true);
    }

    function showFsPanel_(){
        if(gameClass_.decreaseVolumeBG!=null)gameClass_.decreaseVolumeBG();
        soundManager_.playSound("fsWon");
        displayManager_.getGroup("fsWonPanel").y=-1000;
        displayManager_.getGroup("fsWonPanel").visible=true;
        displayManager_.getText("fsWLabel").setText(Translate.do("You won"));
        displayManager_.getText("fsWLabel1").setText(Translate.do("Free spins"));
        displayManager_.getText("fsValue1").setText(fsWonNum_);
        TweenMax.to(displayManager_.getGroup("fsWonPanel"),.5,{y:0,ease:Bounce.easeOut});
        //stop lines
        lineManager_.clearLine();
    }

    function hideFsPanel_(){
        soundManager_.getBGSound("bgSlot").fadeOutBgSound(1000);
        soundManager_.resetVolume("bgFs");
        soundManager_.playBgSound("bgFs");
        soundManager_.playAdditionalBgSound_("bgFs1");
        soundManager_.playAdditionalBgSound_("bgFs2");
        soundManager_.playAdditionalBgSound_("bgFs3");
        completeHide_();
    }

    function completeHide_(){
        displayManager_.getGroup("fsWonPanel").visible=false;
        toggleFreeSpins_();
    }

    function getFreeSpinsEval_  () {
        if (isInFs_ || fsWon_ ){
            //setTimeout(updateFreeSpinsData_,lineManager_.getTotalDuration());
            if (freeSpinNum_ >=1 && fsWon_==false && isInFs_==true) {
                return true;
            }else if (fsWon_ ){
                return false;
            }
        }
        if (isInFs_ && freeSpinNum_<=0) {
            return false;
        }else{
            return true;
        }
    }

    function toggleBackFs_(){
        wasOnFs = true;
        fsWon_ = false;
        isInFs_ = true;

        if (ReelConfig.maxFsNum!=null && fsPlayed_>= Number(ReelConfig.maxFsNum)){
            displayManager_.getText("fsWLabel").setText(Translate.do("Maximum number of Free spins reached"));
        }else{
            displayManager_.getText("fsWLabel").setText(Translate.do("Free spins finished"));
        }

        if (win_>0){
            displayManager_.getText("fsValue1").setText(Translate.do("you've won"));
            displayManager_.getText("fsWLabel1").setText("");
        }else{
            displayManager_.getText("fsValue1").setText("");
            displayManager_.getText("fsWLabel1").setText("");
        }

        TweenMax.to(displayManager_.getGroup("freeSpins"),.5,{alpha:0,ease:Sine.easeOut});
        displayManager_.getText("fsValue").setText("");
        setTimeout(showFsTotWonPanel_,500);
    }

    function hideFs_(){
        TweenMax.to(displayManager_.getGroup("freeSpins"),.5,{alpha:0});
        TweenMax.to(displayManager_.getGroup("logo"),.3,{delay:.5,alpha:1});
        isInFs_ = false;
    }

    function endAnimHandle_(evt){
        if (me.getFsWon() && spinManager_.getSpinResp().bonus.wonBonus==0) {
            if (displayManager_.getGroup("fsWonPanel")!= null && ((me.getType!=undefined && me.getType()!="stickySpins" && me.getType()!="respin")|| (me.getType==undefined) )){
                evt.addEvent(showFsPanel1_,1200,[evt]);
            }  else if(displayManager_.getGroup("fsWonPanel")!= null){
                evt.addEvent(me.toggleFreeSpins ,1200);
            }
        } else if (me.getFsAdd != null && me.getFsAdd() > 0) {
            evt.addEvent(gameClass_.fakeEvent, 1000);
        } else if (me.getIsInFs() == true && me.getFsNumber() <= 0) {
            if (me.setEndPanel!=null)me.setEndPanel();
            evt.addEvent(me.toggleBackFs, gameClass_.getLastFSTime());
        }
    }

    function showFsPanel1_(par) {
        var evt=par[0];
        evt.clearEvt();
        autoPlayManager_.toggleFeature(true);
        if (lineManager_.getTotalDuration()>0){
            if (lineManager_.getInterruptedWinAnim()==false){
                evt.addEvtForce(me.hideFsPanel,1000);
                evt.addEvent(gameClass_.fsEval,0);
                evt.triggerEvt();
            }else{
                setTimeout(showFsPanel1_,100,[evt]);
            }
        }else{
            showFsPanel_();
            evt.addEvtForce(me.hideFsPanel,1500);
            evt.addEvent(gameClass_.fsEval,700);
            evt.triggerEvt();
        }
    }

    function txtFsBack_(num){
        displayManager_.getText("fsValue").setText(freeSpinNum_);
        TweenMax.to(displayManager_.getText("fsValue").scale,.2,{x:1,y:1,ease:Bounce.easeOut});
    }


    var me={
        toggleFreeSpins:toggleFreeSpins_,
        getFreeSpinsEval:getFreeSpinsEval_,
        updateFreeSpinsNum:updateFreeSpinsNum_,
        updateFreeSpinsData:updateFreeSpinsData_,
        updateFreeSpinsTotWon:updateFreeSpinsTotWon_,
        updateFreeSpinsMult:updateFreeSpinsMult_,
        showFsPanel1:showFsPanel1_,
        hideFsPanel:hideFsPanel_,
        endAnimHandle:endAnimHandle_,
        getFsNumber:function(){
            return freeSpinNum_;
        },
        getIsInFs:function(){
            return isInFs_;
        },
        setIsInFs:function(state){
            isInFs_=state;
        },
        getFsWon:function(){
            return fsWon_;
        },
        addFs:function(num){
            if (num>0)freeSpinNum_=freeSpinNum_ + num;
            TweenMax.to(displayManager_.getText("fsValue").scale,.2,{x:1.2,y:1.2,ease:Bounce.easeOut,onComplete:txtFsBack_,onCompleteParams:[freeSpinNum_]});

        },
        fsWon:function(num){
            if ( gameParams.gameOriginalID!="7015")autoPlayManager_.toggleFeature(true);
            fsWonNum_=num;
            freeSpinNum_=num;
            fsWon_=true;
        },
        parse:parse_,
        resumeFs:resumeFs_,
        hideFs:hideFs_,
        toggleBackFs:toggleBackFs_,
        getType:function (){
            return type_;
        }
    }
    initClass_();
    return me;
}
