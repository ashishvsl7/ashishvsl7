/**
 * KiS Framework, Created by Fabry on 19/02/2020.
 * handles megaways jack free spins
 */
function MegaJackMwFreeSpins(gameRef,gameClass){
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
    var addedFs_=false;

    function initClass_(){
    }

    function parse_(json){
        win_=0;
        addedFs_=false;
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
            if (json.status.type=="freespins"){
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

        /*
                  winCash_=1090;
                  win_=winCash_ / balanceManager_.getCoinValue()*lineManager_.getLinesNumber();
                  freeSpinNum_=0;
        */

        //if (isInFs_==false)me.fsWon(10)
    }

    function resumeFs_(){
        if (type_=="normal"||type_=="convert")return;
        idleCycleManager_.startIdleCycle();
        balanceManager_.balanceBonusUpdate(winCash_,0);

        var sucessiveWin=communicationManager_.getResumeStatus().status.numTumbles;
        mult_=communicationManager_.getResumeStatus().status.multiplier;
        if (mult_>0) {
            displayManager_.getText("fsMultValue").setText("x" + mult_);
            displayManager_.getText("fsMultValue").mult = mult_;
        }
        if (sucessiveWin>0) {
            for (var i=1;i<=sucessiveWin;i++) {
                if(displayManager_.getGroup("freeSpinAccumulatorFs")["anchor" + i + "_In"]!=undefined) {
                    var anchor = displayManager_.getGroup("freeSpinAccumulatorFs")["anchor" + i + "_In"].children[0];
                    anchor.visible = true;
                    anchor.animations.add("anim");
                    anchor.animations.play("anim", 36, false, false);
                }
            }
        }
        gameClass_.moveLockedReels(true);
        toggleFreeSpins_();
    }

    function toggleFreeSpins_ () {
        displayManager_.getText("fsMultValue").mult=1;
        displayManager_.getText("fsValue").setText((freeSpinNum_));
        if (isInFs_ && freeSpinNum_>0) {
            //already in
            fsWon_=false;
        } else {
            if (wasOnFs==false)startBalance_=balanceManager_.getBalance();
            displayManager_.getText("fsMultValue").setText("");
            wasOnFs=true;
            fsWon_=false;
            isInFs_=true;
            win_=0;
            if (winCash_==undefined)winCash_=0;
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
                logoOut_();
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
        updateFreeSpinsMult_(mult_);
        if (gameClass_.fsLogoOut!=null)gameClass_.fsLogoOut();
        //if (gameClass_.moveLockedReels!=null)setTimeout(gameClass_.moveLockedReels,500);
    }

    function updateFreeSpinsNum_ (){
        if(communicationManager_.getResumeStatus().status.type.indexOf("tumble")>=0 || communicationManager_.getResumeStatus().status.type.indexOf("convert")>=0)return;
        freeSpinNum_=freeSpinNum_-1;
        displayManager_.getText("fsValue").setText(freeSpinNum_);
        //updateFreeSpinsMult_();
    }

    function updateFsNum_ (){
        displayManager_.getText("fsValue").setText(freeSpinNum_);
        TweenMax.to(displayManager_.getText("fsValue").scale,.3,{x:1.5,y:1.5,ease:Bounce.easeOut,onComplete:bounce,onCompleteParams:[displayManager_.getText("fsValue")]});
        //updateFreeSpinsMult_();
    }

    function updateFreeSpinsData_(){
        if (balanceManager_.getShowIncredits()==true) {
            displayManager_.getText("totWonValue").setText(Util.formatNumber((winCash_) / balanceManager_.getCoinValue() * lineManager_.getLinesNumber(), Util.getNubersOfDecimal()));
        }else {
            displayManager_.getText("totWonValue").setText(balanceManager_.getCurrencySmb() + "" + Util.formatNumber((winCash_), Util.getNubersOfDecimal()));
        }
        //updateFreeSpinsMult_();
    }

    function bounce(txt){
        TweenMax.to(txt.scale,.4,{delay:1,x:1,y:1,ease:Bounce.easeOut});
    }

    function updateFreeSpinsTotWon_(){
        //updateFreeSpinsMult_();
    }

    function updateFreeSpinsMult_(m){
        if (m==null)m=(spinManager_.getSpinResp()!=undefined&& spinManager_.getSpinResp().freeSpin!=undefined && spinManager_.getSpinResp().freeSpin.multiplier!=undefined )?spinManager_.getSpinResp().freeSpin.multiplier:mult_;
        displayManager_.getText("fsMultValue").setText("");
        if (("x" +m)!=displayManager_.getText("fsMultValue").text ){
            if (m>1){
                displayManager_.getText("fsMultValue").setText("x" +m);
                displayManager_.getText("fsMultValue").mult=m;
            }
        }
    }

    function showFsTotWonPanel_(){
        var delay=0;
        autoPlayManager_.setCanAp(false);
        freeSpinNum_=-999;

        displayManager_.getGroup("fsWonPanel").y=(getOrientation()=="portrait")?-2000:-1000;
        displayManager_.getGroup("fsWonPanel").alpha=1;
        displayManager_.getGroup("fsWonPanel").visible=true;
        if (winCash_>0){
            gameClass_.decreaseVolumeBG();
            delay=1;
            soundManager_.playSound("winPanel");
            winManager_.updateWinAmt(winCash_);
            if (getOrientation()=="portrait")displayManager_.getText("lineWin").y=360;
            lineManager_.showBonusWin(win_, winCash_) / 1000;
        }else{
            displayManager_.getText("lineWin").y=-1500;
        }

        gameClass_.logoIn();
        if (freeRoundsManager_.getIsInFr()==true){
            TweenMax.to(displayManager_.getGroup("freeRounds"),.4,{y:0,ease:Bounce.easeOut});
        }

        TweenMax.to(displayManager_.getGroup("fsWonPanel"),.4,{y: (getOrientation()=="portrait")?200* gameClass.getRatio():0,ease:Bounce.easeOut,onComplete:hideTotPanel_,onCompleteParams:[delay]});


    }

    function delayedHidePanel_(){
        if (gameClass_.getLineCompletion()) {
            if (gameClass_.fsHideTotPanel) gameClass_.fsHideTotPanel();
            stopbg();
            soundManager_.resetVolume("bgSlot");
            soundManager_.playBgSound("bgSlot");
            winCash_ = winCash_;

            if (win_ > 0) {
                if (getOrientation()=="portrait"){
                    setTimeout(moveTxtPM_,4000);
                }
                var time = 3;//
                TweenMax.to(displayManager_.getGroup("fsWonPanel"), .4, {
                    delay: (time + .7),
                    y: (getOrientation()=="portrait")?-2000: -1000,
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
            $("#rightWrapper").css("opacity", "1");

        }else{
            setTimeout(hideTotPanel_,1000);
        }
    }

    function hideTotPanel_(del){
        setTimeout(delayedHidePanel_,del*1000);
    }

    function moveTxtPM_(){
        displayManager_.getText("lineWin").y=490;
    }

    function stopbg(){
        for ( var i =1;i<8;i++){
            if(soundManager_.getBGSound("bgSlot"+i)!=undefined)soundManager_.getBGSound("bgSlot"+i).fadeOutBgSound(500);
        }
    }

    function showFsPanel_(){
        //mult_=1;
        winCash_=0;
        //donnie, tween alpha  todo
        soundManager_.playSound("fsWon");
        displayManager_.getGroup("fsWonPanel").y= (getOrientation()=="portrait")?-2000:-1000;
        displayManager_.getGroup("fsWonPanel").alpha=1;
        displayManager_.getGroup("fsWonPanel").visible=true;
        displayManager_.getText("fsWLabel").setText(Translate.do(gameClass_.getBuyIn()==false?"You won":"You bought"));
        displayManager_.getText("fsWLabel1").setText(Translate.do("Free spins"));
        displayManager_.getText("fsValue1").setText(fsWonNum_);
        TweenMax.to(displayManager_.getGroup("fsWonPanel"),.3,{y: (getOrientation()=="portrait")?200* gameClass.getRatio():0});
        //stop lines
        lineManager_.clearLine();
        setTimeout(switchSound_,2000);
    }

    function switchSound_() {
    }

    function hideFsPanel_(){
        TweenMax.to(displayManager_.getGroup("fsWonPanel"),.5,{y: (getOrientation()=="portrait")?-2000:1000,alpha:0,ease:Linear.easeIut,onComplete:completeHide_});
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

            if  (gameClass_.hideLr!=null)gameClass_.hideLr();
            displayManager_.getText("fsWLabel").setText(Translate.do("Free spins finished"));
            if (win_ > 0) {
                displayManager_.getText("fsValue1").setText(Translate.do("you've won"));
                displayManager_.getText("fsWLabel1").setText("");
            } else {
                displayManager_.getText("fsValue1").setText(Translate.do("better luck"));
                displayManager_.getText("fsWLabel1").setText(Translate.do("the next time"));
            }

            TweenMax.to(displayManager_.getGroup("freeSpins"), .5, {
                y: -1200,
                ease: Sine.easeOut,
                onComplete: showFsTotWonPanel_
            });
            displayManager_.getText("fsValue").setText("");
        }else{
            setTimeout(toggleBackFs_,500);
        }
    }

    function buyFeatureCB_(par){

    }

    function noBuyFeatureCB_(par){
        showFsTotWonPanel_();
    }

    function hideFs_(){
        TweenMax.to(displayManager_.getGroup("freeSpins"),.5,{y:-800});
        gameClass_.logoIn();
        isInFs_ = false;
    }

    function endAnimHandle_(evt){
        if (me.getFsWon() ) {
            if (displayManager_.getGroup("fsWonPanel")!= null && ((me.getType!=undefined && me.getType()!="stickySpins" && me.getType()!="respin" && me.getType()!="tumble" && me.getType()!="convert")|| (me.getType==undefined) )){
                evt.addEvent(showFsPanel1_,300,[evt]);
            }  else if(displayManager_.getGroup("fsWonPanel")!= null && me.getType()!="tumble" &&  me.getType()!="convert"){
                evt.addEvent(me.toggleFreeSpins ,1200);
            }
        } else if (me.getFsAdd != null && me.getFsAdd() > 0) {
            evt.addEvent(gameClass_.fakeEvent, 1000);
        } else if (me.getIsInFs() == true && (me.getFsNumber() <= 0 && type_!="tumble")){
            if (me.setEndPanel!=null)me.setEndPanel();
            evt.addEvent(me.toggleBackFs, gameClass_.getLastFSTime());
        }
    }

    function showFsPanel1_(par) {
        var evt=par[0];
        autoPlayManager_.toggleStopOnFeature(true);
        autoPlayManager_.toggleFeature(true);
        if (gameClass_.getBuyIn()==false) evt.clearEvt();
        if (gameClass_.getBuyIn()==true){
            mult_=gameClass.getMultiplier();
            fsWon_=false;
        }else{
            mult_=(spinManager_.getSpinResp()!=undefined&& spinManager_.getSpinResp().freeSpin!=undefined && spinManager_.getSpinResp().freeSpin.multiplier!=undefined )?spinManager_.getSpinResp().freeSpin.multiplier:1;
        }
        if (lineManager_.getTotalDuration()>0){
            if (lineManager_.getInterruptedWinAnim()==false && displayManager_.getGroup("centralWin").visible==false){
                evt.addEvent(showFsPanel_,0);
                evt.addEvtForce(me.hideFsPanel,(displayManager.groups.fsWonPanel.duration * 1000));
                if (gameClass_.getBuyIn()==false)evt.addEvent(gameClass_.fsEval,700);
                evt.triggerEvt();
            }else{
                setTimeout(showFsPanel1_,100,[evt]);
            }
        }else{
            evt.addEvent(showFsPanel_,0);
            evt.addEvtForce(me.hideFsPanel,(displayManager.groups.fsWonPanel.duration * 1000));
            if (gameClass_.getBuyIn()==false)evt.addEvent(gameClass_.fsEval,700);
            evt.triggerEvt();
        }

    }

    var me={
        toggleFreeSpins:toggleFreeSpins_,
        getFreeSpinsEval:getFreeSpinsEval_,
        updateFreeSpinsNum:updateFreeSpinsNum_,
        updateFsNum:updateFsNum_,
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
            if (addedFs_==true)return;
            if (isInFs_==false) {
                autoPlayManager_.toggleFeature(true);
                fsWonNum_ = num;
                freeSpinNum_ = num;
                fsWon_ = true;
                if (freeRoundsManager_.getIsInFr() == false && gameClass_.getBuyIn() == false) { //not buyin
                    balanceManager_.forceBalance(winCash_);// this prevent the cash got on the normal game leading to FS to be added twice
                }
            }else{
                if (num>1) {
                    addedFs_=true;
                    //additional FS WON
                    freeSpinNum_ =num;
                    displayManager_.getText("fsValue").setText(num);
                }
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
