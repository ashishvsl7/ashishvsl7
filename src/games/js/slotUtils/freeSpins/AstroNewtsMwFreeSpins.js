/**
 * KiS Framework, Created by Fabry on 18/03/2021
 * handles megaways astro newts free spins
 */
function AstroNewtsMwFreeSpins(gameRef,gameClass){
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
    var capAmt_=0;
    var resume_=false;
    var fsAddTier_=0;
    var addFs_=0;
    var level_=0;
    var nuFSFromJson_=0;

    function initClass_(){
    }

    function parse_(json){
        win_=0;
        addedFs_=false;
        mult_=1;
        fsWonNum_=0;
        fsAddNum_=0;
        fsWon_=false;
        fsAddTier_=0;
        addFs_=0;
        if (json.freeSpin!=null){
            //inside FS
            freeSpinNum_=json.freeSpin.num;
            nuFSFromJson_=json.freeSpin.num;
            if (json.freeSpin.won!=null && json.freeSpin.totalWin!=null){
                winCash_=json.freeSpin.totalWin;
            }
            if (json.freeSpin.multiplier!=null && json.freeSpin.multiplier>0){
                mult_=json.freeSpin.multiplier;
            }
            if (json.freeSpin.type!=null )type_=json.freeSpin.type;
            if (json.freeSpin.unsettledTotal!=null){
                unsettledWin_=json.freeSpin.unsettledTotal;
            }else{
                unsettledWin_=winCash_;
            }
            if(json.freeSpin.object!=undefined && json.freeSpin.object.freespinTier!=null)level_=json.freeSpin.object.freespinTier;
            if(json.freeSpin.object!=undefined && json.freeSpin.object.wonAdditionalEndLevel!=null)fsAddTier_=json.freeSpin.object.wonAdditionalEndLevel;
            if(json.freeSpin.object!=undefined && json.freeSpin.object.wonAdditionalSpins!=null)addFs_=json.freeSpin.object.wonAdditionalSpins;
        }else if (json.status!=null){
            if (json.status.hand=="freespins"){
                freeSpinNum_=json.status.numFS;
                winCash_=json.status.totalWin;
                mult_=json.status.multiplier;
                unsettledWin_=json.status.unsettledTotal;
            }else{
                freeSpinNum_=json.status.collected;
            }
            type_=json.status.type;
        }
        var w=(unsettledWin_!=undefined)?unsettledWin_:0;
        winCash_+=(w-winCash_);
        win_=winCash_ / balanceManager_.getCoinValue()*lineManager_.getLinesNumber();

        var max=45000*20;
        var maxC=max* balanceManager_.getCoinValue() / lineManager_.getLinesNumber();
        var coinsW=(winCash_) / balanceManager_.getCoinValue() * lineManager_.getLinesNumber();
        if (max-coinsW<0) {
            winCash_=maxC;
            win_=max;
        }

    }

    function resumeFs_(){
        if (type_=="normal"||type_=="convert")return;
        idleCycleManager_.startIdleCycle();
        balanceManager_.balanceBonusUpdate(winCash_,0);

        var sucessiveWin=communicationManager_.getResumeStatus().status.numFuels;
        mult_=communicationManager_.getResumeStatus().freeSpin.multiplier;
        level_=communicationManager_.getResumeStatus().freeSpin.object.freespinTier;

        resume_=true;
        toggleFreeSpins_();
        if (mult_>0) {
            displayManager_.getText("fsMultValue").setText("x" + mult_);
            displayManager_.getText("fsMultValue").mult = mult_;
        }
        gameClass_.resumePlanet(level_,sucessiveWin);

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

            displayManager_.getGroup("freeSpins").alpha=0;
            displayManager_.getGroup("freeSpins").visible=true;
            idleCycleManager_.stopIdleCycle();
            rainBow_=false;
            if (!resume_) {
                if (freeRoundsManager_.getIsInFr() == false && gameInfo.freeRoundsAvailable != true) {
                    logoOut_();
                } else {
                    TweenMax.to(displayManager_.getGroup("freeRounds"), .4, {
                        y: -200,
                        ease: Bounce.easeOut,
                        onComplete: logoOutcomplete_
                    });
                }
            }
        }
    }

    function logoOut_() {
        logoOutcomplete_();
    }

    function logoOutcomplete_(){
        updateFreeSpinsMult_(mult_);
        if (gameClass_.fsLogoOut!=null)gameClass_.fsLogoOut();
        //if (gameClass_.moveLockedReels!=null)setTimeout(gameClass_.moveLockedReels,500);
    }

    function updateFreeSpinsNum_ (){
        if((communicationManager_.getResumeStatus().status.type.indexOf("tumble")>=0 && resume_==false )|| communicationManager_.getResumeStatus().status.type.indexOf("convert")>=0)return;
        resume_=false;
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

        if (isInFs_) {
        if (winCash_>0){
            gameClass_.decreaseVolumeBG();
            delay=1;
            if (winCash_>(balanceManager_.getCoinValue()))soundManager_.playSound("winPanel");
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
            displayManager_.getGroup("fsWonPanel").visible = true;
            TweenMax.to(displayManager_.getGroup("fsWonPanel"), .4, {
                alpha: 1,
                onComplete: hideTotPanel_,
                onCompleteParams: [delay]
            });

        }else{
            gameClass_.decreaseVolumeBG();
            delay = 1;
            if (winCash_>(balanceManager_.getCoinValue()))soundManager_.playSound("winPanel");
            winManager_.updateWinAmt(winCash_);
            if (getOrientation() == "portrait") displayManager_.getText("lineWin").y = 360;
            lineManager_.showBonusWin(win_, winCash_) / 1000;

            displayManager_.getGroup("fsWonPanel").visible = true;
            TweenMax.to(displayManager_.getGroup("fsWonPanel"), .4, {
                alpha: 1,
                onComplete: hideTotPanelCap_,
                onCompleteParams: [delay]
            });
        }
    }

    function delayedHidePanel_(){
        if (gameClass_.getLineCompletion()) {
            if (gameClass_.fsHideTotPanel) gameClass_.fsHideTotPanel();
            winCash_ = winCash_;
            if (win_ > 0) {
                var time = 3;//
                TweenMax.to(displayManager_.getGroup("fsWonPanel"), .4, {
                    delay: (time + .7),
                    alpha:0,
                    onStart: freeSpinsManager_.startHidePanel, onStartParams: [win_, winCash_],
                    onComplete: freeSpinsManager_.completeDidePanel, onCompleteParams: [winCash_],
                });
            } else {
                TweenMax.to(displayManager_.getGroup("fsWonPanel"), .5, {
                    delay: 3,
                    alpha:0,
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



    function delayedHidePanelCap_(){
        if (gameClass_.fsHideTotPanel) gameClass_.fsHideTotPanel();

        var time = 3;//
        TweenMax.to(displayManager_.getGroup("fsWonPanel"), .4, {
            delay: (time + .7),
            alpha:0,

        });
        displayManager_.getGroup("fsWonPanel").visible=false;
        buttonManager_.applyState("NH");
        $("#rightWrapper").css("opacity", "1");


    }

    function hideTotPanel_(del){
        setTimeout(delayedHidePanel_,del*1000);
    }

    function hideTotPanelCap_(del){
        setTimeout(delayedHidePanelCap_,del*1000);
    }

    function showFsPanel_(){
        //mult_=1;
        if(gameClass_.getBuyIn()==true)winCash_=0;
        //donnie, tween alpha  todo

        if(fsAddTier_>0) {
            if (level_>0){
                displayManager_.getText("lineWin").setText("");
                gameClass_.nextOne(level_,addFs_,freeSpinNum_,spinManager_.getSpinResp().state.numFuels);
                return;
            }
        }else{
            soundManager_.playSound("fsWon");
            displayManager_.getText("fsCap").setText("");
            displayManager_.getGroup("fsWonPanel").visible=true;
            displayManager_.getText("fsWLabel").setText(Translate.do(gameClass_.getBuyIn()==false?"You won":"You bought"));
            displayManager_.getText("fsWLabel1").setText(Translate.do("Free spins"));
            displayManager_.getText("fsValue1").setText(fsWonNum_);
            displayManager_.getText("fsValue1").fontSize=110;
            displayManager_.getText("fsValue1").y=285;
        }
        TweenMax.to(displayManager_.getGroup("fsWonPanel"),.5,{alpha:1});
        //stop lines
        lineManager_.clearLine();

    }

    function hideFsPanel_(){
        TweenMax.to(displayManager_.getGroup("fsWonPanel"),.5,{alpha:0,onComplete:completeHide_});
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
                return true;
            }
        }
        if (isInFs_ && freeSpinNum_<=0) {
            return false;
        }else{
            return true;
        }
    }

    function toggleBackFs_(cap){
        if (gameClass_.getLineCompletion()) {
            wasOnFs = true;
            fsWon_ = false;
             level_=0;
            if(!cap)isInFs_ = true;

            if  (gameClass_.hideLr!=null)gameClass_.hideLr();
            displayManager_.getText("fsCap").setText("");
            if (capAmt_==0) {
                displayManager_.getText("fsHeading").visible=true;
                displayManager_.getText("fsWLabel").setText(Translate.do("Free spins finished"));
                if (win_ > 0) {
                    displayManager_.getText("fsValue1").setText(Translate.do("you've won"));
                    displayManager_.getText("fsWLabel1").setText("");
                } else {
                    displayManager_.getText("fsValue1").setText(Translate.do("better luck"));
                    displayManager_.getText("fsWLabel1").setText(Translate.do("the next time"));
                }
            }else{
                //win_=capAmt_*(balanceManager_.getCoinValue()/ lineManager_.getLinesNumber());
                //winCash_=capAmt_;
                displayManager_.getText("fsHeading").visible=false;
                displayManager_.getText("fsValue1").setText("");
                displayManager_.getText("fsWLabel").setText(Translate.do("Congratulation,\r you've won"));
                displayManager_.getText("fsCap").setText(Translate.do("The maximum prize"));
                displayManager_.getText("fsWLabel1").setText("");

            }
            displayManager_.getText("fsValue1").fontSize=43;
            displayManager_.getText("fsValue1").y=315;


            TweenMax.to(displayManager_.getGroup("freeSpins"), .5, {
                alpha:0,
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
        TweenMax.to(displayManager_.getGroup("freeSpins"),.5,{alpha:0});
        gameClass_.logoIn();
        isInFs_ = false;
    }

    function endAnimHandle_(evt){
        if (me.getFsWon() || fsAddTier_>0) {
            if (fsAddTier_>0){
               freeSpinNum_=nuFSFromJson_;
            }
            evt.addEvent(showFsPanel1_, 300,[evt]);

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
                if(level_==0){
                    evt.addEvtForceConfirmable(me.hideFsPanel,displayManager.groups.fsWonPanel.duration * 1000);
                    if (gameClass_.getBuyIn()==false)evt.addEvent(gameClass_.fsEval,700);
                }

                evt.triggerEvt();
            }else{
                setTimeout(showFsPanel1_,100,[evt]);
            }
        }else{
            evt.addEvent(showFsPanel_,0);
            evt.addEvtForceConfirmable(me.hideFsPanel,displayManager.groups.fsWonPanel.duration * 1000);
            if (gameClass_.getBuyIn()==false)evt.addEvent(gameClass_.fsEval,700);
            evt.triggerEvt();
        }

    }

    function hitCap_(amt){
        type_= undefined;
        capAmt_=amt;
        winCash_=capAmt_;
        freeSpinNum_=0;
        toggleBackFs_(true);
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
        hitCap:hitCap_,
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

            if (isInFs_==false){
                winCash_=0;
                win_=0;
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
