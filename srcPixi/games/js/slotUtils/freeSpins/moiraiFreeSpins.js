/**
 * KiS Framework, Created by Fabry on 20/11/2017.
 */
function MoiraiFreeSpins(gameRef,gameClass){
    var game_=gameRef;
    var gameClass_=gameClass;
    var freeSpinNum_=0;
    var isInFs_=false;
    var fsWon_=false;
    var fsWonNum_=0;
    var wasOnFs=false;
    var startBalance_=0;
    var win_;
    var winCash_;
    var mult_;
    var emitter_=[];
    var unsettledWin_=0;
    var type_="";

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
            if (json.freeSpin.won!=null && json.freeSpin.totalWin!=null){
                winCash_=json.freeSpin.totalWin/100;
            }
            if (json.freeSpin.multiplier!=null && json.freeSpin.multiplier>0){
                mult_=json.freeSpin.multiplier;
            }
            if (json.freeSpin.type!=null )type_=json.freeSpin.type;
            if (json.freeSpin.unsettledTotal!=null){
                unsettledWin_=json.freeSpin.unsettledTotal/100;
            }
        }else if (json.status!=null){
            if (json.status.hand=="freespins"){
                freeSpinNum_=json.status.numFS;
                winCash_=json.status.totalWin/100;
                mult_=json.status.multiplier;
                unsettledWin_=json.status.unsettledTotal/100;
            }else{
                freeSpinNum_=json.status.collected;
            }
            type_=json.status.type;
        }
        var w=(unsettledWin_!=undefined)?unsettledWin_:0;
        winCash_+=(w-winCash_);
        win_=winCash_ / balanceManager_.getCoinValue()*lineManager_.getLinesNumber();
    }

    function resumeFs_(){
        if (type_=="tumble"||type_=="convert")return;
        idleCycleManager_.startIdleCycle();
        balanceManager_.balanceBonusUpdate(winCash_,0);
        toggleFreeSpins_();

    }

    function toggleFreeSpins_ () {
        displayManager_.getText("fsValue").setText((freeSpinNum_));
        if (isInFs_ && freeSpinNum_>0) {
            //already in
            fsWon_=false;
        } else {
            if (wasOnFs==false)startBalance_=balanceManager_.getBalance();
            wasOnFs=true;
            fsWon_=false;
            isInFs_=true;
            win_=0;
            //first FS
            //toggle gfx
            if (balanceManager_.getShowIncredits()==true) {
                displayManager_.getText("totWonValue").setText(Util.formatNumber(winCash_/ balanceManager_.getCoinValue() * lineManager_.getLinesNumber(), Util.getNubersOfDecimal()));
            }else{
                displayManager_.getText("totWonValue").setText(balanceManager_.getCurrencySmb() + "" + Util.formatNumber(winCash_, Util.getNubersOfDecimal()));
            }

            displayManager_.getGroup("freeSpins").y=-300;
            displayManager_.getGroup("freeSpins").visible=true;
            idleCycleManager_.stopIdleCycle();
            rainBow_=false;

            if (freeRoundsManager_.getIsInFr()==false && gameInfo.freeRoundsAvailable!=true){
                TweenMax.to(displayManager_.getGroup("logo"),.3,{y:-200,ease:Bounce.easeIn,onComplete:logoOut_});
            } else{
                TweenMax.to(displayManager_.getGroup("freeRounds"),.4,{y:-200,ease:Bounce.easeOut,onComplete:logoOutcomplete_});
                TweenMax.to(displayManager_.getGroup("freeSpins"),.4,{y:0,ease:Bounce.easeOut});
            }
        }
    }
    function logoOut_() {
        TweenMax.to(displayManager_.getGroup("freeSpins"), .4, {y: 0, ease: Bounce.easeOut,onComplete:logoOutcomplete_});
    }

    function logoOutcomplete_(){
        updateFreeSpinsMult_();
        if (gameClass_.fsLogoOut!=null)gameClass_.fsLogoOut();

    }

    function updateFreeSpinsNum_ (){
        if(communicationManager_.getResumeStatus().status.type.indexOf("tumble")>=0 || communicationManager_.getResumeStatus().status.type.indexOf("convert")>=0)return;
        displayManager_.getText("fsValue").setText(freeSpinNum_-1);
        if (isInFs_ && freeSpinNum_>=0){
        }
    }

    function updateFreeSpinsData_(){
        if (balanceManager_.getShowIncredits()==true) {
            displayManager_.getText("totWonValue").setText(Util.formatNumber((winCash_) / balanceManager_.getCoinValue() * lineManager_.getLinesNumber(), Util.getNubersOfDecimal()));
        }else {
            displayManager_.getText("totWonValue").setText(balanceManager_.getCurrencySmb() + "" + Util.formatNumber((winCash_), Util.getNubersOfDecimal()));
        }
        updateFreeSpinsMult_();
    }

    function updateFreeSpinsTotWon_(){
    }

    function updateFreeSpinsMult_(m){
    }

    function showFsTotWonPanel_(){

        autoPlayManager_.setCanAp(false);
        freeSpinNum_=-999;
        for (var a in emitter_) {
            displayManager_.getGroup("freeSpins").remove(emitter_[a]);
            emitter_[a].destroy();
            emitter_[a]=null;
        }
        emitter_=[];
        displayManager_.getGroup("fsWonPanel").y=-600;
        displayManager_.getGroup("fsWonPanel").visible=true;
        if (winCash_>0){
            soundManager_.playSound("winPanel");
            winManager_.updateWinAmt(winCash_);
        }

        if (freeRoundsManager_.getIsInFr()==false){
            TweenMax.to(displayManager_.getGroup("logo"),.3,{y:0,ease:Bounce.easeOut});
        }else{
            TweenMax.to(displayManager_.getGroup("freeRounds"),.4,{y:0,ease:Bounce.easeOut});
        }

        TweenMax.to(displayManager_.getGroup("fsWonPanel"),.4,{y:0,ease:Bounce.easeOut,onComplete:hideTotPanel_});

    }

    function hideTotPanel_(){
        if (gameClass_.getLineCompletion()) {
            if (gameClass_.fsHideTotPanel) gameClass_.fsHideTotPanel();
            stopbg();
            soundManager_.resetVolume("bgSlot");
            soundManager_.playBgSound("bgSlot");
            winCash_ = winCash_;

            if (win_ > 0) {
                var time = lineManager_.showBonusWin(win_, winCash_) / 1000;
                TweenMax.to(displayManager_.getGroup("fsWonPanel"), .4, {
                    delay: (time + .7),
                    y: -1000,
                    ease: Linear.easeIn,
                    onStart: freeSpinsManager_.startHidePanel, onStartParams: [win_, winCash_],
                    onComplete: freeSpinsManager_.completeDidePanel, onCompleteParams: [winCash_],
                });
            } else {
                TweenMax.to(displayManager_.getGroup("fsWonPanel"), .5, {
                    delay: 3,
                    y: -1000,
                    ease: Linear.easeIn,
                    onStart: freeSpinsManager_.startHidePanel, onStartParams: [0, 0],
                    onComplete: freeSpinsManager_.completeDidePanel, onCompleteParams: [0, 0],
                });
                buttonManager_.applyRestore();
            }
        }else{
            setTimeout(hideTotPanel_,1000);
        }
    }

    function stopbg(){
        soundManager_.getBGSound("bgFs").fadeOutBgSound(500);
        soundManager_.getBGSound("bgFs2").fadeOutBgSound(500);
        soundManager_.getBGSound("bgFs3").fadeOutBgSound(500);
        soundManager_.getBGSound("bgFs4").fadeOutBgSound(500);
        soundManager_.getBGSound("bgFs5").fadeOutBgSound(500);
        soundManager_.getBGSound("bgFs6").fadeOutBgSound(500);
        soundManager_.getBGSound("bgFs7").fadeOutBgSound(500);
    }

    function showFsPanel_(){
        //donnie, tween alpha  todo
        soundManager_.playSound("fsWon");
        displayManager_.getGroup("fsWonPanel").y=-1000;
        displayManager_.getGroup("fsWonPanel").visible=true;
        displayManager_.getText("fsWLabel").setText(Translate.do("You won"));
        displayManager_.getText("fsWLabel1").setText(Translate.do("Free spins"));
        displayManager_.getText("fsValue1").setText(fsWonNum_);
        TweenMax.to(displayManager_.getGroup("fsWonPanel"),.5,{y:0});
        //stop lines
        lineManager_.clearLine();
        setTimeout(switchSound_,2000);
    }

    function switchSound_() {
        soundManager_.getBGSound("bgSlot").fadeOutBgSound(1000);
        soundManager_.getBGSound("bgSlot2").fadeOutBgSound( 1000);
        soundManager_.getBGSound("bgSlot3").fadeOutBgSound( 1000);
        soundManager_.getBGSound("bgSlot4").fadeOutBgSound( 1000);
        soundManager_.getBGSound("bgSlot5").fadeOutBgSound( 1000);
        soundManager_.resetVolume("bgFs");
        soundManager_.playBgSound("bgFs");
    }

    function hideFsPanel_(){
        TweenMax.to(displayManager_.getGroup("fsWonPanel"),.5,{y:-1000,ease:Linear.easeIut,onComplete:completeHide_});
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
        if (gameClass_.getLineCompletion()) {
            wasOnFs = true;
            fsWon_ = false;
            isInFs_ = true;

            displayManager_.getText("fsWLabel").setText(Translate.do("Free spins finished"));
            if (win_ > 0) {
                displayManager_.getText("fsValue1").setText(Translate.do("you've won"));
                displayManager_.getText("fsWLabel1").setText("");
            } else {
                displayManager_.getText("fsValue1").setText(Translate.do("better luck"));
                displayManager_.getText("fsWLabel1").setText(Translate.do("the next time"));
            }

            TweenMax.to(displayManager_.getGroup("freeSpins"), .5, {
                y: -400,
                ease: Sine.easeOut,
                onComplete: showFsTotWonPanel_
            });
            displayManager_.getText("fsValue").setText("");
        }else{
            setTimeout(toggleBackFs_,500);
        }
    }

    function hideFs_(){
        TweenMax.to(displayManager_.getGroup("freeSpins"),.5,{y:-400});
        TweenMax.to(displayManager_.getGroup("logo"),.3,{delay:.5,y:0});
        isInFs_ = false;
    }

    function endAnimHandle_(evt){
        if (me.getFsWon() && spinManager_.getSpinResp().bonus.wonBonus==0) {
            if (displayManager_.getGroup("fsWonPanel")!= null && ((me.getType!=undefined && me.getType()!="stickySpins" && me.getType()!="respin" && me.getType()!="tumble" && me.getType()!="convert")|| (me.getType==undefined) )){
                evt.addEvent(gameClass.shamrockPop,0);
                evt.addEvent(showFsPanel1_,3000,[evt]);
            }  else if(displayManager_.getGroup("fsWonPanel")!= null && me.getType()!="tumble" &&  me.getType()!="convert"){
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
        if (gameClass_.getLineCompletion()) {
            autoPlayManager_.toggleStopOnFeature(true);
            autoPlayManager_.toggleFeature(true);
            evt.clearEvt();
            if (lineManager_.getTotalDuration()>0){
                if (lineManager_.getInterruptedWinAnim()==false){
                    evt.addEvent(showFsPanel_,0);
                    evt.addEvtForce(me.hideFsPanel,displayManager.groups.fsWonPanel.duration * 1000);
                    evt.addEvent(gameClass_.fsEval,700);
                    evt.triggerEvt();
                }else{
                    setTimeout(showFsPanel1_,100,[evt]);
                }
            }else{
                showFsPanel_();
                evt.addEvtForce(me.hideFsPanel,displayManager.groups.fsWonPanel.duration * 1000);
                evt.addEvent(gameClass_.fsEval,700);
                evt.triggerEvt();
            }
        }else{
            setTimeout(showFsPanel1_,500,par);
        }
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
        fsWon:function(num){
            autoPlayManager_.toggleFeature(true);
            fsWonNum_=num;
            freeSpinNum_=num;
            fsWon_=true;
            if (freeRoundsManager_.getIsInFr()==false) {
                balanceManager_.forceBalance(winCash_);// this prevent the cash got on the normal game leading to FS to be added twice
            }
        },
        parse:parse_,
        resumeFs:resumeFs_,
        hideFs:hideFs_,
        toggleBackFs:toggleBackFs_,
        getType:function (){
            return type_;
        },
        updateWin:function (amt) {
            winCash_=amt;
            if (balanceManager_.getShowIncredits()==true) {
                displayManager_.getText("totWonValue").setText(Util.formatNumber((winCash_) / balanceManager_.getCoinValue() * lineManager_.getLinesNumber(), Util.getNubersOfDecimal()));
            }else {
                displayManager_.getText("totWonValue").setText(balanceManager_.getCurrencySmb() + "" + Util.formatNumber((winCash_), Util.getNubersOfDecimal()));
            }

        }
    }
    initClass_();
    return me;
}
