/**
 * KiS Framework, Created by Fabry on 18/03/2020.
 * handles barbarian moltileve battle free spins
 */

function BarbarianFreeSpins(gameRef,gameClass){
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
    var level_=1;

    var counterMultIntro_;

    var counterMult_;
    var fsAddTier_=false;
    var fsAddWild_=false;
    var nuFSFromJson_=0;

    function initClass_(){
    }

    function parse_(json){
        win_=0;
        mult_=1;
        fsWonNum_=0;
        fsAddNum_=0;
        fsWon_=false;
        fsAddTier_=0;
        fsAddWild_=0;
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
            if(json.freeSpin.object!=undefined && json.freeSpin.object.freespinTier!=null)level_=json.freeSpin.object.freespinTier;
            if(json.freeSpin.object!=undefined && json.freeSpin.object.wonAdditionalEndLevel!=null)fsAddTier_=json.freeSpin.object.wonAdditionalEndLevel;
            if(json.freeSpin.object!=undefined && json.freeSpin.object.wonAdditionalFromWilds!=null)fsAddWild_=json.freeSpin.object.wonAdditionalFromWilds;
        }else if (json.status!=null){
            if (json.status.hand=="freespins"){
                freeSpinNum_=json.status.numFS;
                winCash_=json.status.totalWin;
                mult_=json.status.multiplier;
                unsettledWin_=json.status.unsettledTotal;
            }else{
                freeSpinNum_=json.status.collected;
            }
        }

        win_=winCash_ / balanceManager_.getCoinValue()*lineManager_.getLinesNumber();
    }

    function resumeFs_(){
        balanceManager_.balanceBonusUpdate(winCash_,unsettledWin_);
        displayManager_.getGroup("logo").visible = false;
        displayManager_.getGroup("bg").visible = false;
        displayManager_.getGroup("mask").visible = false;
        displayManager_.getGroup("frame").visible = false;
        displayManager_.getGroup("buyFeature").visible = false;
        displayManager_.getGroup("bgFS1").visible = false;
        displayManager_.getGroup("maskFS1").visible = false;
        displayManager_.getGroup("frameFS1").visible = false;
        displayManager_.getGroup("bgFS2").visible = false;
        displayManager_.getGroup("maskFS2").visible = false;
        displayManager_.getGroup("frameFS2").visible = false;

        if(fsAddTier_>0)level_++;
        displayManager_.getGroup("bgFS"+level_).visible = true;
        displayManager_.getGroup("maskFS"+level_).visible = true;
        displayManager_.getGroup("frameFS"+level_).visible = true;
        soundManager_.playBgSound("bgFs"+level_);
        updateFreeSpinsMult_();
        toggleFreeSpins_();
        setFsLevel_();
    }

    function toggleFreeSpins_ () {
        displayManager_.getText("fsValue").setText((freeSpinNum_));
        if (isInFs_ && freeSpinNum_>0) {
            //already in

        } else {
            if (wasOnFs==false)startBalance_=balanceManager_.getBalance();
            wasOnFs=true;
            isInFs_=true;
            win_=0;
            //first FS
            //toggle gfx
            if (balanceManager_.getShowIncredits()==true) {
                displayManager_.getText("totWonValue").setText(Util.formatNumber(winCash_/ balanceManager_.getCoinValue() * lineManager_.getLinesNumber(), Util.getNubersOfDecimal()));
            }else{
                displayManager_.getText("totWonValue").setText(balanceManager_.getCurrencySmb() + "" + Util.formatNumber(winCash_, Util.getNubersOfDecimal()));
            }
            displayManager_.getGroup("freeSpins").visible=true;
            displayManager_.getGroup("freeSpins").alpha=0;
            displayManager_.getText("fsMultValue").text="";

            if (freeRoundsManager_.getIsInFr()==false && gameInfo.freeRoundsAvailable!=true){
                TweenMax.to(displayManager_.getGroup("logo"),.3,{y:-200,ease:Bounce.easeIn,onComplete:logoOut_});
            } else{
                TweenMax.to(displayManager_.getGroup("freeRounds"),.4,{y:-200,ease:Bounce.easeOut});
                TweenMax.to(displayManager_.getGroup("freeSpins"),.4,{alpha:1,ease:Bounce.easeOut});
            }

         }
    }

    function vilainIntroCompleted_(par){
        counterMultIntro_.visible=false;
        counterMult_ = new Phaser.Sprite(game_, 1180, 111, "counterMult" );
        counterMult_.anchor.set(.5, .5);
        counterMult_.animations.add("anim");
        counterMult_.scale.x = 1;
        counterMult_.scale.y = 1;
        //counterMultIntro_.animations.play("anim", 24, false, false,vilainIntroCompleted_,counterMultIntro_);
        displayManager_.getGroup("fsCounter").add(counterMult_);
    }


    function logoOut_() {
        displayManager_.getGroup("freeSpins").visible=true;
        TweenMax.to(displayManager_.getGroup("freeSpins"), .4, {alpha: 1, ease: Bounce.easeOut});
        // counterMultIntro_ = new Phaser.Sprite(game_, 1180, 111, "counterMultIntro" );
        // counterMultIntro_.anchor.set(.5, .5);
        // counterMultIntro_.animations.add("anim");
        // counterMultIntro_.scale.x = 1;
        // counterMultIntro_.scale.y = 1;
        // counterMultIntro_.animations.play("anim", 24, false, false,vilainIntroCompleted_);
        // displayManager_.getGroup("fsCounter").add(counterMultIntro_);
    }

    function updateFreeSpinsNum_ (){
        freeSpinNum_=freeSpinNum_-1;
        displayManager_.getText("fsValue").setText(freeSpinNum_);
    }

    function bounce(txt){
        TweenMax.to(txt.scale,.4,{x:1.2,y:1.2,ease:Bounce.easeOut,onComplete:move,onCompleteParams:[txt]});
    }

    function move(txt){
        freeSpinsManager_.updateFreeSpinsMult();
        freeSpinsManager_.updateFreeSpinsTotWon();
        TweenMax.to(txt,2,{alpha:0,onComplete:kill,onCompleteParams:[txt]});
    }

    function kill(txt){
        txt.visible=false;
        txt.destroy();
    }

    function updateFreeSpinsData_(){
        updateFreeSpinsTotWon_();
    }

    function updateFreeSpinsTotWon_(){
        if (balanceManager_.getShowIncredits()==true) {
            displayManager_.getText("totWonValue").setText(Util.formatNumber((winCash_) / balanceManager_.getCoinValue() * lineManager_.getLinesNumber(), Util.getNubersOfDecimal()));
        }else {
            displayManager_.getText("totWonValue").setText(balanceManager_.getCurrencySmb() + "" + Util.formatNumber((winCash_), Util.getNubersOfDecimal()));
        }
    }

    function updateFreeSpinsMult_(){
        if (displayManager_.getText("fsMultValue").text!= "x" +mult_ && mult_>1) {
            if (displayManager_.getText("fsMultValue").text==""){//roll back FS assets, and place multiplier instead
                TweenMax.to(displayManager_.getGroup("freeSpins").fsP.children[0].scale,.2,{x:1.15,y:1.15,ease:Power1.easeInOut,onComplete:fadeFSH_});
            }

            //counterMult_.animations.play("anim", 24, false, false);
            //TweenMax.to(displayManager_.getText("fsMultValue").scale,.2,{delay:.4,x:1.15,y:1.15,ease:Power1.easeInOut});
            setTimeout(updateMultCounter_, 500);
        }
    }

    function fadeFSH_(){
        displayManager_.getGroup("freeSpins").fsP.children[0].visible=false;
        displayManager_.getGroup("freeSpins").fsP.children[0].scale.x=1;
        displayManager_.getGroup("freeSpins").fsP.children[0].scale.y=1;
    }

    function updateMultCounter_(){
        displayManager_.getText("fsMultValue").setText("x" +mult_);
        //TweenMax.to(displayManager_.getText("fsMultValue").scale,.2,{x:1,y:1,ease:Power1.easeIn});
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
        displayManager_.getGroup("fsWinPanel").visible=false;
        displayManager_.getGroup("fsWinPanel").alpha=0;

        displayManager_.getGroup("fsEndPanel").visible=true;
        displayManager_.getGroup("fsEndPanel").alpha=0;

        displayManager_.getGroup("freeSpins").visible=false;
        if (winCash_>0){
            if(!gameClass_.getCompulsivePlayer())if (winCash_>(balanceManager_.getCoinValue()))soundManager_.playSound("winPanel");
            winManager_.updateWinAmt(winCash_);
        }

        if (freeRoundsManager_.getIsInFr()==false){
            TweenMax.to(displayManager_.getGroup("logo"),.3,{y:0,ease:Bounce.easeOut});
        }else{
            TweenMax.to(displayManager_.getGroup("freeRounds"),.4,{y:0,ease:Bounce.easeOut});
        }

        TweenMax.to(displayManager_.getGroup("fsEndPanel"),.5,{alpha:1,ease:Bounce.easeOut,onComplete:hideTotPanel_});
        soundManager_.mixBgSound("bgSlot", 1000, 1000);
    }

    function hideTotPanel_(){
        displayManager_.getGroup("logo").visible = true;
        displayManager_.getGroup("bg").visible = true;
        displayManager_.getGroup("mask").visible = true;
        displayManager_.getGroup("buyFeature").visible = true;
        displayManager_.getGroup("frame").visible = true;
        displayManager_.getGroup("bgFS1").visible = false;
        displayManager_.getGroup("maskFS1").visible = false;
        displayManager_.getGroup("frameFS1").visible = false;
        displayManager_.getGroup("bgFS2").visible = false;
        displayManager_.getGroup("maskFS2").visible = false;
        displayManager_.getGroup("frameFS2").visible = false;
        if (!framework.isTouch()) displayManager_.getText("lineWin").y=displayManager_.getText("lineWin").y+80;
        if (win_>0) {
            var time = lineManager_.showBonusWin(win_,winCash_) / 1000;
            TweenMax.to(displayManager_.getGroup("fsEndPanel"), .5, {
                delay: (time + 2),
                alpha:0,
                ease: Linear.easeIn,
                onStart: startHidePanel_,onStartParams:[win_,winCash_],
                onComplete: completeDidePanel_,onCompleteParams:[winCash_],
            });
        }else{
            //gameClass_.hideFs();
            //isInFs_ = false;
            TweenMax.to(displayManager_.getGroup("fsEndPanel"), .5, {
                delay: 3,
                alpha:0,
                ease: Linear.easeIn,
                onStart: startHidePanel_,onStartParams:[0,0],
                onComplete: completeDidePanel_,onCompleteParams:[0,0],
            });
            buttonManager_.applyRestore();
        }
    }

    function startHidePanel_(win,winCash) {
        balanceManager_.setCanUpdate(true);
        me.setIsInFs(false);
        winManager_.resetWinAmt();
        winManager_.setWinAmountBonus(winCash);
        balanceManager_.forceBalanceAfterFS(winCash);
        // update FR total
        var p={};
        p.value=winCash;
        freeRoundsManager_.parse(p);

        if (balanceManager_.getShowIncredits()==false) {
            lineManager_.completeBonusValue(winCash, "Free Spins Win",5000);
        }else{
            lineManager_.completeBonusValue(win, "Free Spins Win",5000);
        }
    }

    function completeDidePanel_(win){
        var lineEvalTOut_=4000;

        me.setIsInFs(false);
        autoPlayManager_.toggleFeature(false);
        if (win>0){
            lineEvalTOut_=(lineManager_.showBonusCentralWinGreetings(win));
            setTimeout(goBackAfterCentralWin_,lineEvalTOut_);
        }else{
            autoPlayManager_.setCanAp(true);
        }
        gameClass_.hideFs(lineEvalTOut_);
        displayManager_.getGroup("fsCounter").visible=false;
        balanceManager_.balanceUpdate(false,winCash_);
        //setTimeout(buttonManager_.applyRestore,4000);
    }

    function goBackAfterCentralWin_(){
        autoPlayManager_.setCanAp(true);
        lineManager_.clearLine();
        lineManager_.idle(true);
    }

    function showFsPanel_(){
        soundManager_.playSound("fsPanelWon");
        displayManager_.getGroup("fsWinPanel").visible=true;
        displayManager_.getGroup("fsWinPanel").alpha=0;

        displayManager_.getGroup("logo").visible = false;
        displayManager_.getGroup("bg").visible = false;
        displayManager_.getGroup("mask").visible = false;
        displayManager_.getGroup("buyFeature").visible = false;
        displayManager_.getGroup("frame").visible = false;
        displayManager_.getGroup("bgFS1").visible = false;
        displayManager_.getGroup("maskFS1").visible = false;
        displayManager_.getGroup("frameFS1").visible = false;
        displayManager_.getGroup("bgFS2").visible = false;
        displayManager_.getGroup("maskFS2").visible = false;
        displayManager_.getGroup("frameFS2").visible = false;

        if(fsAddTier_>0)level_++;
        displayManager_.getText("fsW2Small").setText(Translate.do(gameClass_.getBuyIn()==false?"YOU HAVE BEEN AWARDED":"YOU BOUGHT"));

        if (level_>1){
            //change BG
            soundManager_.mixBgSound("bgFs2", 1000, 1000);
            displayManager_.getText("fsW1Big").setText(Translate.do("THE CAVE OF GOLD"));
            displayManager_.getText("fsW2Big").setText(fsWonNum_);
        }else{
            soundManager_.mixBgSound("bgFs1", 1000, 1000);
            displayManager_.getText("fsW1Big").setText(Translate.do("THE CAVE OF LAVA"));
            displayManager_.getText("fsW2Big").setText(fsWonNum_);
        }


        displayManager_.getGroup("bgFS"+(level_)).visible = true;
        displayManager_.getGroup("frameFS"+(level_)).visible = true;
        displayManager_.getGroup("maskFS"+(level_)).visible=true;
        displayManager_.getGroup("fsCounter").visible=true;

        TweenMax.to(displayManager_.getGroup("fsWinPanel"),.5,{alpha:1,ease:Bounce.easeOut});

        //stop lines
        lineManager_.clearLine();
    }

    function hideFsPanel_(){
        TweenMax.to(displayManager_.getGroup("fsWinPanel"),.5,{alpha:0,ease:Linear.easeIut,onComplete:completeHide_});
    }

    function completeHide_(){
        displayManager_.getGroup("fsWinPanel").visible=false;
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
        level_=1;

        //displayManager_.getText("fsWLabel").setText(Translate.do("Free spins finished"));
        if (win_>0){
            displayManager_.getText("fsE2").setText(Translate.do("CONGRATULATION"));
            displayManager_.getText("fsE3").setText(Translate.do("YOU'VE WON"));
        }else{
            displayManager_.getText("fsE2").setText(Translate.do("better luck").toUpperCase());
            displayManager_.getText("fsE3").setText(Translate.do("the next time").toUpperCase());
        }
        TweenMax.to(displayManager_.getGroup("freeSpins"),.5,{alpha:0,ease:Sine.easeOut,onComplete:showFsTotWonPanel_});
        displayManager_.getText("fsValue").setText("");

    }

    function hideFs_(){
        isInFs_ = false;
    }

    function endAnimHandle_(evt){
        if (me.getFsWon() || fsAddTier_>0) {
            if (fsAddTier_>0){
               freeSpinNum_=nuFSFromJson_;
            }

            evt.addEvent(showFsPanel1_, 300,[evt]);
        } else if (me.getIsInFs() == true && me.getFsNumber() <= 0) {
            if (me.setEndPanel!=null)me.setEndPanel();
            evt.addEvent(me.toggleBackFs, gameClass_.getLastFSTime());
        }else  if (fsAddWild_>0){
            freeSpinNum_=nuFSFromJson_;
            displayManager_.getText("fsValue").setText((freeSpinNum_));
            if (isInFs_){
                var msg="+" + fsAddWild_ ;
                var txt = new  Phaser.BitmapText(game_, displayManager_.getText("fsValue").x+50 , displayManager_.getText("fsValue").y-10,"multiBmpFont",msg ,40,"center");
                txt.alpha=0;
                txt.anchor.set(.5,.5);
                displayManager_.getGroup("freeSpins").add(txt);

                TweenMax.to(txt,.2,{alpha:1});
                TweenMax.to(txt.scale,.3,{x:1.5,y:1.5,ease:Bounce.easeOut,onComplete:bounce,onCompleteParams:[txt]});

            }
        }
    }

    function showFsPanel1_(par) {
        var evt=par[0];
        evt.clearEvt();
        setFsLevel_();
        autoPlayManager_.toggleStopOnFeature(true);
        autoPlayManager_.toggleFeature(true);

        if (gameClass_.getBuyIn()==false) evt.clearEvt();
        if (gameClass_.getBuyIn()==true){
            mult_=1;
            fsWon_=false;
        }

        if (lineManager_.getTotalDuration()>0){
            if (lineManager_.getInterruptedWinAnim()==false){
                evt.addEvtForce(showFsPanel_,1000);
                evt.addEvtForceConfirmable(me.hideFsPanel,displayManager.groups.fsWinPanel.duration * 1000);
                if (gameClass_.getBuyIn()==false)evt.addEvent(gameClass_.fsEval,700);
                evt.triggerEvt();
            }else{
                setTimeout(showFsPanel1_,100,[evt]);
            }
        }else{
            evt.addEvtForce(showFsPanel_,1000);
            evt.addEvtForceConfirmable(me.hideFsPanel,displayManager.groups.fsWinPanel.duration * 1000);
            if (gameClass_.getBuyIn()==false)evt.addEvent(gameClass_.fsEval,700);
            evt.triggerEvt();
        }
    }

    function setFsLevel_(){

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

            if (isInFs_==false){
                soundManager_.playSound("fsWon");
                winCash_=0;
                win_=0;
            }else{
                soundManager_.playSound("fsWon2");
            }
        },
        parse:parse_,
        resumeFs:resumeFs_,
        hideFs:hideFs_,
        toggleBackFs:toggleBackFs_
    }
    initClass_();
    return me;
}
