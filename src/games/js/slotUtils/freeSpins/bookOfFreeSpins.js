/**
 * KiS Framework, Created by Fabry on 16/07/2020.
 * handle book of engine FS, book animation with special symbol + golden scatter symbol substitution
 */
function BookOfFreeSpins(gameRef,gameClass){
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
    var retrigger_=false;

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
        retrigger_=false;
        if (json.freeSpin!=null){
            //inside FS
            freeSpinNum_=json.freeSpin.num;
            fsPlayed_=json.freeSpin.fsPlayed;
            if (json.freeSpin.won!=null && json.freeSpin.totalWin!=null){
                winCash_=json.freeSpin.totalWin;
            }
            if (json.freeSpin.multiplier!=null && json.freeSpin.multiplier>0){
                mult_=json.freeSpin.multiplier;
            }
        }else if (json.status!=null){
            if (json.status.hand=="freespins"){
                freeSpinNum_=json.status.numFS;
                winCash_=json.status.totalWin;
                mult_ = json.status.multiplier;
                unsettledWin_=json.status.unsettledTotal;
            }else{
                freeSpinNum_=json.status.collected;
            }
        }

        win_=winCash_ / balanceManager_.getCoinValue()*lineManager_.getLinesNumber();
    }

    function resumeFs_(){
        balanceManager_.balanceBonusUpdate(winCash_, (gameParams.gameOriginalID =="7003")?0: unsettledWin_);
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
            }else{
                displayManager_.getText("totWonValue").setText(balanceManager_.getCurrencySmb() + "" + Util.formatNumber(winCash_, Util.getNubersOfDecimal()));
            }
            displayManager_.getGroup("freeSpins").alpha=0;
            displayManager_.getGroup("freeSpins").visible=true;

            if (freeRoundsManager_.getIsInFr()==false && gameInfo.freeRoundsAvailable!=true){
                TweenMax.to(displayManager_.getGroup("logo"),.3,{y:-400,ease:Bounce.easeIn,onComplete:logoOut_});
            } else{
                TweenMax.to(displayManager_.getGroup("freeRounds"),.4,{y:-400,ease:Bounce.easeOut,onComplete:logoOutcomplete_});
                TweenMax.to(displayManager_.getGroup("freeSpins"),.4,{alpha:1});
            }
        }
    }

    function logoOut_() {
        TweenMax.to(displayManager_.getGroup("freeSpins"), .4, {alpha:1,onComplete:logoOutcomplete_});
    }

    function logoOutcomplete_(){
        if (gameClass_.fsLogoOut!=null)gameClass_.fsLogoOut();
        for (var a in displayManager.groups.freeSpins.emitters){
            var anim = epsy_.loadSystem(displayManager.groups.freeSpins.emitters[a][0], 500, 500);
            displayManager.groups.freeSpins.emitters[a][0].texture = game.cache.checkImageKey("particle");
            displayManager_.getGroup("freeSpins").add(anim);
            emitter_.push(anim);
        }

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
            displayManager_.getText("totWonValue").setText(Util.formatNumber((winCash_) / balanceManager_.getCoinValue() * lineManager_.getLinesNumber(), Util.getNubersOfDecimal()));
        }else {
            displayManager_.getText("totWonValue").setText(balanceManager_.getCurrencySmb() + "" + Util.formatNumber((winCash_), Util.getNubersOfDecimal()));
        }
    }

    function updateFreeSpinsTotWon_(){
        if (balanceManager_.getShowIncredits()==true) {
            displayManager_.getText("totWonValue").setText(Util.formatNumber((winCash_) / balanceManager_.getCoinValue() * lineManager_.getLinesNumber(), Util.getNubersOfDecimal()));
        }else {
            displayManager_.getText("totWonValue").setText(balanceManager_.getCurrencySmb() + "" + Util.formatNumber((winCash_), Util.getNubersOfDecimal()));
        }
    }

    function updateFreeSpinsMult_(){
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
        displayManager_.getGroup("fsEndPanel").y=0;
        displayManager_.getGroup("fsEndPanel").visible=true;
        displayManager_.getGroup("fsEndPanel").alpha=0;
        displayManager_.getText("fsE1").setText(Translate.do("Free Spins are now over"));
        displayManager_.getText("fsE2").setText("");
        displayManager_.getText("fsE3").setText("");
        displayManager_.getText("lineWin").setText("");
        if (winCash_>0){
            if (winCash_>(balanceManager_.getCoinValue()))soundManager_.playSound("winPanel");
            winManager_.updateWinAmt(winCash_);
        }

        if (freeRoundsManager_.getIsInFr()==false){
            TweenMax.to(displayManager_.getGroup("logo"),.3,{y:0,ease:Bounce.easeOut});
        }else{
            TweenMax.to(displayManager_.getGroup("freeRounds"),.4,{y:0,ease:Bounce.easeOut});
        }

        TweenMax.to(displayManager_.getGroup("fsEndPanel"),.4,{alpha:1,onComplete:hideTotPanel_});
        soundManager_.mixBgSound("bgSlot", 1000, 1000);
    }

    function hideTotPanel_(){
        if (gameClass_.fsHideTotPanel)gameClass_.fsHideTotPanel();

        if (win_>0) {
            if(spinManager_.getSpinResp().balance.value) {
                winCash_ = spinManager_.getSpinResp().balance.value;
                win_ = winCash_ / balanceManager_.getCoinValue() * lineManager_.getLinesNumber();
            }
            var time = lineManager_.showBonusWin(win_,winCash_) / 1000;
            TweenMax.to(displayManager_.getGroup("fsEndPanel"), .4, {
                delay: (time + 2),
                alpha:0,
                ease: Linear.easeIn,
                onStart: freeSpinsManager_.startHidePanel,onStartParams:[win_,winCash_],
                onComplete: freeSpinsManager_.completeDidePanel,onCompleteParams:[winCash_],
            });
        }else{
            TweenMax.to(displayManager_.getGroup("fsEndPanel"), .5, {
                delay: 3,
                alpha:0,
                ease: Linear.easeIn,
                onStart: freeSpinsManager_.startHidePanel,onStartParams:[0,0],
                onComplete: freeSpinsManager_.completeDidePanel,onCompleteParams:[0,0],
            });
            buttonManager_.applyRestore();
        }
    }

    function showFsPanel_(){
        if(gameClass_.decreaseVolumeBG!=null)gameClass_.decreaseVolumeBG();
        if(gameClass_.playTriggeredSmb!=null)gameClass_.playTriggeredSmb(iconsAnimCallback_);


        //stop lines
        lineManager_.clearLine();
    }

    function iconsAnimCallback_(obj){
        soundManager_.playSound("fsWon");
        displayManager_.getGroup("fsWonPanel").alpha=1;
        displayManager_.getGroup("fsWonPanel").visible=true;
        displayManager_.getGroup("fsWonPanelText").visible=true;

        var smb = new Phaser.Sprite(game_, obj.x,obj.y, "panelFs1" );
        smb.anchor.set(.5, .5);
        smb.animations.add("anim");
        smb.scale.x = 1;
        smb.scale.y = 1;
        smb.animations.play("anim", 36, false, true,nextFrame2);
        displayManager_.getGroup("fsWonPanel").add(smb);
        displayManager_.getText("fsWLabel").visible=false;
        displayManager_.getText("fsWLabel1").visible=false;
        displayManager_.getText("fsValue1").visible=false;
            displayManager_.getText("fsSLabel").setText(Translate.do("Picking special Symbol!")+"...");
        displayManager_.getText("fsWLabel").setText(Translate.do("You've won"));
        displayManager_.getText("fsWLabel1").setText(Translate.do("Free spins"));
        displayManager_.getText("fsValue1").setText(fsWonNum_);
    }

    function nextFrame2(){
        var smb = new Phaser.Sprite(game_, this._parent.x,this._parent.y, "panelFs2" );
        smb.anchor.set(.5, .5);
        smb.animations.add("anim");
        smb.scale.x = 1;
        smb.scale.y = 1;
        smb.animations.play("anim", 36, false, true,nextFrame3);
        displayManager_.getGroup("fsWonPanel").add(smb);
    }

    function nextFrame3(){
        displayManager_.getText("fsWLabel").visible=true;
        displayManager_.getText("fsWLabel1").visible=true;
        displayManager_.getText("fsValue1").visible=true;
        var smb = new Phaser.Sprite(game_, this._parent.x,this._parent.y, "panelFs3" );
        smb.anchor.set(.5, .5);
        smb.animations.add("anim");
        smb.scale.x = 1;
        smb.scale.y = 1;
        smb.animations.play("anim", 36, false, false,nextFrame4);
        displayManager_.getGroup("fsWonPanel").add(smb);
        //
        // displayManager_.getText("fsWLabel").visible=true;
        // displayManager_.getText("fsWLabel1").visible=true;
        // displayManager_.getText("fsValue1").visible=true;
    }
    var smbAlt_=null;
    function nextFrame4() {
        var iNumIcon=Number(spinManager_.getSpinResp().state.transformTo)-10;
        var index=0;
        for (var a =0;a<= 26 + iNumIcon;a++ ) {
            index++;
            if (index>8)index=0;
            setTimeout(alternateSmb_, 100 * a, this._parent,index);
        }
        setTimeout(hlSmb_,(100 * a)+500,this._parent,iNumIcon);
    }

    function hlSmb_(obj,iSmb){
        if (smbAlt_!=null){
            displayManager_.getGroup("fsWonPanel").remove(smbAlt_);
            smbAlt_=null;
        }
        smbAlt_= new Phaser.Sprite(game_, obj.x-165,obj.y+50, "anim1"+iSmb );
        smbAlt_.anchor.set(.5, .5);
        smbAlt_.scale.x = .8;
        smbAlt_.scale.y = .8;
        smbAlt_.animations.add("anim");
        smbAlt_.animations.play("anim", 24, false, false);
        soundManager_.playSound("winBg_0");
        soundManager_.playSound("smbWin_"+iSmb);
        displayManager_.getGroup("fsWonPanel").add(smbAlt_);
        displayManager_.getText("fsSLabel").setText(Translate.do("Special Expanding Symbol"));

    }

    function alternateSmb_ (obj,iSmb){
        if (smbAlt_!=null){
            displayManager_.getGroup("fsWonPanel").remove(smbAlt_);
            smbAlt_=null;
        }
        soundManager_.playSound("scatterExpand");
        smbAlt_= new Phaser.Sprite(game_, obj.x-165,obj.y+50, "icon1"+iSmb );
        smbAlt_.anchor.set(.5, .5);
        smbAlt_.scale.x = .8;
        smbAlt_.scale.y = .8;
        displayManager_.getGroup("fsWonPanel").add(smbAlt_);
    }

    function hideFsPanel_(){
        soundManager_.mixBgSound("bgFs", 1000, 1000);
        TweenMax.to(displayManager_.getGroup("fsWonPanel"),.5,{alpha:0,onComplete:completeHide_});
        TweenMax.to(displayManager_.getGroup("fsWonPanelText"),.5,{alpha:0,onComplete:completeHide_});
    }

    function completeHide_(){
        displayManager_.getGroup("fsWonPanel").visible=false;
        displayManager_.getGroup("fsWonPanel").alpha=1;
        displayManager_.getGroup("fsWonPanelText").visible=false;
        displayManager_.getGroup("fsWonPanelText").alpha=1;
        toggleFreeSpins_();
    }

    function getFreeSpinsEval_  () {
        if (isInFs_ || fsWon_ ){
            //setTimeout(updateFreeSpinsData_,lineManager_.getTotalDuration());
            if (freeSpinNum_ >=1 && fsWon_==false && isInFs_==true) {
                return true;
            }else if (fsWon_ ){
                return true; //just on avalon????? weird
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

        TweenMax.to(displayManager_.getGroup("freeSpins"),.5,{alpha:0,onComplete:showFsTotWonPanel_});
        displayManager_.getText("fsValue").setText("");
    }

    function hideFs_(){
        TweenMax.to(displayManager_.getGroup("freeSpins"),.5,{alpha:0});
        TweenMax.to(displayManager_.getGroup("logo"),.3,{delay:.5,y:0,ease:Bounce.easeOut});
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
        if (retrigger_){
            return;
        }
        var evt=par[0];
        evt.clearEvt();
        autoPlayManager_.toggleFeature(true);
        if (lineManager_.getTotalDuration()>0){
            if (lineManager_.getInterruptedWinAnim()==false){
                showFsPanel_();
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
    }

    function removeRetriggerTotPanel_(){
        displayManager_.getText("fsValue").setText(freeSpinNum_);
        displayManager_.getGroup("fsEndPanel").visible=false;
        displayManager_.getGroup("fsEndPanel").y=-600;
        //gameClass_.fsEval();
    }

    function showRetrigger_(num) {
        soundManager_.playSound("fsRetrigger");
        displayManager_.getText("lineWin").setText("");
        displayManager_.getGroup("fsEndPanel").y=0;
        displayManager_.getGroup("fsEndPanel").visible=true;
        displayManager_.getGroup("fsEndPanel").alpha=0;
        displayManager_.getText("fsE1").setText(Translate.do("You've won"));
        displayManager_.getText("fsE2").setText(num);
        displayManager_.getText("fsE3").setText(Translate.do("Additional Free Spins!"));

        TweenMax.to(displayManager_.getGroup("fsEndPanel"),.4,{alpha:1});
        TweenMax.to(displayManager_.getGroup("fsEndPanel"),.4,{delay:4,alpha:0,onComplete:removeRetriggerTotPanel_});
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
            if (isInFs_){
               // freeSpinNum_+=num;
                var delayWin=2000;
                if (spinManager_.getSpinResp().win.total>0) {
                    delayWin=3200;
                }
                gameClass_.decreaseVolumeBG( delayWin+2500, num);
                if (gameClass_.playTriggeredSmb != null) setTimeout(gameClass_.playTriggeredSmb,0 + delayWin,null,true)
                setTimeout(showRetrigger_, 1500 + delayWin, num);

                retrigger_=true;
            }else{
                freeSpinNum_=num;
            }
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
