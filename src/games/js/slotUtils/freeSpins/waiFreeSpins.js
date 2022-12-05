/**
 * KiS Framework, Created by Fabry on 10/03/2016.
 */
function WaiFreeSpins(gameRef,gameClass){
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
    var winTokenCash_;
    var mult_;
    var emitter_=[];
    var unsettledWin_=0;
    var type_="";
    var fsIcon_=[];
    var idleFSSide_=0;
    var sideFeatureAnim_=false;

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
        }else if (json.status!=null){
            if (json.status.hand=="freespins"){
                freeSpinNum_=json.status.numFS;
                winCash_=json.status.totalWin/100;
                mult_=json.status.multiplier;
                unsettledWin_=json.status.unsettledTotal/100;
            }else{
                freeSpinNum_=json.status.collected;
            }
        }
        if (json.status.tokenWinnings!=null)winTokenCash_=json.status.tokenWinnings/100;

        win_=winCash_ / balanceManager_.getCoinValue()*lineManager_.getLinesNumber();
    }

    function resumeFs_(){
        balanceManager_.balanceBonusUpdate(winCash_,unsettledWin_);
        toggleFreeSpins_();
    }

    function toggleFreeSpins_ () {
        displayManager_.getText("fsValue").setText((freeSpinNum_));
        if (isInFs_ && freeSpinNum_>0) {
            //already in
            fsWon_=false;
        } else {
            if (wasOnFs==false)startBalance_=balanceManager_.getBalance();
            for (var a in displayManager_.getGroup("freeSpins").children){
                if (displayManager_.getGroup("freeSpins").children[a].key=="sideFS_idle"){
                    displayManager_.getGroup("freeSpins").children[a].visible=false;
                }
                if (displayManager_.getGroup("freeSpins").children[a].key=="sideFS_intro"){
                    displayManager_.getGroup("freeSpins").children[a].visible=false;
                }
                if (displayManager_.getGroup("freeSpins").children[a].key=="sideFS_active"){
                    displayManager_.getGroup("freeSpins").children[a].visible=false;
                }
            }
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

            if (freeRoundsManager_.getIsInFr()==false && gameInfo.freeRoundsAvailable!=true){
                TweenMax.to(displayManager_.getGroup("logo"),.3,{y:-400,ease:Bounce.easeIn,onComplete:logoOut_});
            } else{
                TweenMax.to(displayManager_.getGroup("freeRounds"),.4,{y:-400,ease:Bounce.easeOut,onComplete:logoOutcomplete_});
                TweenMax.to(displayManager_.getGroup("freeSpins"),.4,{y:0,ease:Bounce.easeOut});
            }
        }
    }

    function logoOut_() {
        TweenMax.to(displayManager_.getGroup("freeSpins"), .4, {y: 0, ease: Bounce.easeOut,onComplete:logoOutcomplete_});
    }

    function logoOutcomplete_(){
        //fs side feature
        var smb = new Phaser.Sprite(game_, 1190, 135, "sideFS_intro" );
        smb.anchor.set(.5, .5);
        smb.animations.add("anim");
        smb.scale.x = 1;
        smb.scale.y = 1;
        smb.alpha=1;
        displayManager_.getGroup("freeSpins").add(smb);
        smb.animations.play("anim", 24, false, true,sideFS0_);
        soundManager_.playSound("sideSlide");
        if (gameClass_.fsLogoOut!=null)gameClass_.fsLogoOut();
        for (var a in displayManager.groups.freeSpins.emitters){
            var anim = epsy_.loadSystem(displayManager.groups.freeSpins.emitters[a][0], 500, 500);
            displayManager.groups.freeSpins.emitters[a][0].texture = game.cache.checkImageKey("particle");
            displayManager_.getGroup("freeSpins").add(anim);
            emitter_.push(anim);
        }
    }

    function sideFS0_(){

        //fs side feature
        var smb = new Phaser.Sprite(game_, 1190, 135, "sideFS_idle" );
        smb.anchor.set(.5, .5);
        smb.animations.add("anim");
        smb.scale.x = 1;
        smb.scale.y = 1;
        smb.alpha=1;
        displayManager_.getGroup("freeSpins").add(smb);

        smb.animations.play("anim", 24, false, false);
        idleFSSide_=setTimeout(sideFS1_,2000,smb);
        displayManager_.getGroup("flame").visible=true;
        displayManager_.getGroup("token").visible=true;
    }

    function sideFS1_(smb){

        if (sideFeatureAnim_==false){
            smb.animations.play("anim", 24, false, false);
            soundManager_.playSound("sideIdle");
        }
        idleFSSide_=setTimeout(sideFS1_,Util.getRandomInt(8000,16000),smb);
    }

    function updateFreeSpinsNum_ (){
        displayManager_.getText("fsValue").setText(freeSpinNum_-1);
        if (isInFs_ && freeSpinNum_>=0){
        }
    }

    function updateFreeSpinsData_(){
        if (balanceManager_.getShowIncredits()==true) {
            displayManager_.getText("totWonValue").setText(Util.formatNumber((winCash_/mult_) / balanceManager_.getCoinValue() * lineManager_.getLinesNumber(), Util.getNubersOfDecimal()));
        }else {
            displayManager_.getText("totWonValue").setText(balanceManager_.getCurrencySmb() + "" + Util.formatNumber((winCash_/mult_), Util.getNubersOfDecimal()));
        }
        displayManager_.getText("fsMultValue").setText("x" +mult_);

    }

    function updateFreeSpinsTotWon_(){
        if (balanceManager_.getShowIncredits()==true) {
            displayManager_.getText("totWonValue").setText(Util.formatNumber((winCash_/mult_) / balanceManager_.getCoinValue() * lineManager_.getLinesNumber(), Util.getNubersOfDecimal()));
        }else {
            displayManager_.getText("totWonValue").setText(balanceManager_.getCurrencySmb() + "" + Util.formatNumber((winCash_/mult_), Util.getNubersOfDecimal()));
        }
    }

    function updateFreeSpinsMult_(){
    }

    function showFsTotWonPanel_(){
        clearTimeout(idleFSSide_);
        autoPlayManager_.setCanAp(false);
        freeSpinNum_=-999;
        for (var a in emitter_) {
            displayManager_.getGroup("freeSpins").remove(emitter_[a]);
            emitter_[a].destroy();
            emitter_[a]=null;
        }
        emitter_=[];
        displayManager_.getGroup("token").visible=false;
        displayManager_.getGroup("flame").visible=false;
        displayManager_.getGroup("fsWonPanel").y=-600;
        displayManager_.getGroup("fsWonPanel").visible=true;
        if (winCash_>0){
            if (winCash_>(balanceManager_.getCoinValue()))soundManager_.playSound("winPanel");
            winManager_.updateWinAmt(winCash_);
        }

        if (freeRoundsManager_.getIsInFr()==false){
            TweenMax.to(displayManager_.getGroup("logo"),.3,{y:0,ease:Bounce.easeOut});
        }else{
            TweenMax.to(displayManager_.getGroup("freeRounds"),.4,{y:0,ease:Bounce.easeOut});
        }

        TweenMax.to(displayManager_.getGroup("fsWonPanel"),.4,{y:0,ease:Bounce.easeOut,onComplete:hideTotPanel_});
        soundManager_.mixBgSound("bgSlot", 1000, 1000);
    }

    function hideTotPanel_(){
        if (gameClass_.fsHideTotPanel)gameClass_.fsHideTotPanel();
        if (win_>0) {
            var time = lineManager_.showBonusWin(win_,winCash_) / 1000;
            TweenMax.to(displayManager_.getGroup("fsWonPanel"), .4, {
                delay: (time + 2),
                y: -1000,
                ease: Linear.easeIn,
                onStart: freeSpinsManager_.startHidePanel,onStartParams:[win_,winCash_],
                onComplete: freeSpinsManager_.completeDidePanel,onCompleteParams:[winCash_],
            });
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

    function showFsPanel_(){
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
        soundManager_.mixBgSound("bgFs", 1000, 1000);
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

    function moveToken_(){
        if (gameClass_.getTokenText()!=undefined){
            soundManager_.playSound("tokenNewLevel");
            TweenMax.to(gameClass_.getTokenText(),.8,{x:905,y:20,alpha:0,onComplete:moveTokenComplete_})
        }
    }

    function moveTokenComplete_(){
        var txt=gameClass_.getTokenText();
        txt.visible=false;
        txt=null;

        winCash_=winCash_+winTokenCash_;
        if (balanceManager_.getShowIncredits()==true) {
            displayManager_.getText("totWonValue").setText(Util.formatNumber(Number(winCash_)/ balanceManager_.getCoinValue() * lineManager_.getLinesNumber(), Util.getNubersOfDecimal()));
        }else{
            displayManager_.getText("totWonValue").setText(balanceManager_.getCurrencySmb() + "" + Util.formatNumber(Number(winCash_), Util.getNubersOfDecimal()));
        }

        TweenMax.to(displayManager_.getText("totWonValue").scale,.3,{x:1.16,y:1.16,repeat:3,onComplete:scaleComplete_});
    }

    function scaleComplete_() {
        TweenMax.to(displayManager_.getText("totWonValue").scale,.3,{x:1,y:1});
    }

    function toggleBackFs_(){
        wasOnFs = true;
        fsWon_ = false;
        isInFs_ = true;

        displayManager_.getText("fsWLabel").setText(Translate.do("Free spins finished"));
        if (win_>0){
            displayManager_.getText("fsValue1").setText(Translate.do("you've won"));
            displayManager_.getText("fsWLabel1").setText("");
        }else{
            displayManager_.getText("fsValue1").setText(Translate.do("better luck"));
            displayManager_.getText("fsWLabel1").setText(Translate.do("the next time"));
        }

        TweenMax.to(displayManager_.getGroup("freeSpins"),.5,{y:-400,ease:Sine.easeOut,onComplete:showFsTotWonPanel_});
        displayManager_.getText("fsValue").setText("");
    }

    function hideFs_(){
        TweenMax.to(displayManager_.getGroup("freeSpins"),.5,{y:-400,ease:Sine.easeOut});
        TweenMax.to(displayManager_.getGroup("logo"),.3,{delay:.5,y:0,ease:Bounce.easeOut});
        isInFs_ = false;
    }

    function endAnimHandle_(evt){
        if (me.getFsWon() && spinManager_.getSpinResp().bonus.wonBonus==0) {
            if (displayManager_.getGroup("fsWonPanel")!= null && ((me.getType!=undefined && me.getType()!="stickySpins" && me.getType()!="respin")|| (me.getType==undefined) )){
                evt.addEvent(animIcons_,1200,[evt]);
                evt.addEvent(showFsPanel1_,2700,[evt]);
            }  else if(displayManager_.getGroup("fsWonPanel")!= null){
                evt.addEvent(me.toggleFreeSpins ,1200);
            }
        } else if (me.getFsAdd != null && me.getFsAdd() > 0) {
            evt.addEvent(gameClass_.fakeEvent, 1000);
        } else if (me.getIsInFs() == true && me.getFsNumber() <= 0) {
            if (me.setEndPanel!=null)me.setEndPanel();
            evt.addEvent(moveToken_, gameClass_.getLastFSTime());
            evt.addEvent(me.toggleBackFs, 3000);
        }
    }

    function animIcons_(){
        displayManager_.getGroup("wins").visible=true;
        fsIcon_=[];
        spinManager_.getReels()[1].getSymbol(1).visible=false;
        spinManager_.getAnimationMap(1, 1).visible=false;
        var smb = new Phaser.Sprite(game_, spinManager_.getReels()[1].getSymbol(1).x, spinManager_.getReels()[1].getSymbol(1).y, "anim14a" );
        smb.anchor.set(.5, .5);
        smb.animations.add("anim");
        smb.scale.x = 1;
        smb.scale.y = 1;
        displayManager_.getGroup("reels").add(smb);
        smb.animations.play("anim", 24, false, false);
        var obj={};
        obj.smb=smb;
        obj.reelNum=1;
        fsIcon_.push(obj);

        var smb = new Phaser.Sprite(game_, spinManager_.getReels()[2].getSymbol(1).x, spinManager_.getReels()[2].getSymbol(1).y, "anim14b" );
        smb.anchor.set(.5, .5);
        smb.animations.add("anim");
        smb.scale.x = 1;
        smb.scale.y = 1;
        displayManager_.getGroup("reels").add(smb);
        smb.animations.play("anim", 24, false, false);
        var obj={};
        obj.smb=smb;
        obj.reelNum=2;
        fsIcon_.push(obj);

        spinManager_.getReels()[3].getSymbol(1).visible=false;
        spinManager_.getAnimationMap(3, 1).visible=false;
        var smb = new Phaser.Sprite(game_, spinManager_.getReels()[3].getSymbol(1).x, spinManager_.getReels()[3].getSymbol(1).y, "anim14c" );
        smb.anchor.set(.5, .5);
        smb.animations.add("anim");
        smb.scale.x = 1;
        smb.scale.y = 1;
        displayManager_.getGroup("reels").add(smb);
        smb.animations.play("anim", 24, false, false);
        var obj={};
        obj.smb=smb;
        obj.reelNum=3;
        fsIcon_.push(obj);

        soundManager_.playSound("fsWin");

    }

    function showFsPanel1_(par) {
        var evt=par[0];
        evt.clearEvt();
        autoPlayManager_.toggleFeature(true);
        framework.updateSmallMessageText(Translate.do("Autoplay stopped, you entered a feature."));
        if (lineManager_.getTotalDuration()>0){
            if (lineManager_.getInterruptedWinAnim()==false){
                showFsPanel_();
                evt.addEvtForce(me.hideFsPanel,displayManager.groups.fsWonPanel.duration * 1000);
                evt.addEvent(clearFSIcon_,3000);
                evt.addEvent(gameClass_.fsEval,500);
                evt.triggerEvt();
            }else{
                setTimeout(showFsPanel1_,100,[evt]);
            }
        }else{
            showFsPanel_();
            evt.addEvtForce(me.hideFsPanel,displayManager.groups.fsWonPanel.duration * 1000);
            evt.addEvent(clearFSIcon_,3000);
            evt.addEvent(gameClass_.fsEval,500);
            evt.triggerEvt();
        }
    }

    function subst_(a){
        spinManager_.getReels()[fsIcon_[a].reelNum].getSymbol(1).visible=true;
        fsIcon_[a].smb=null;
    }

    function clearFSIcon_(){
        for (var a=0; a< fsIcon_.length;a++){
            var revAnimFrameSeq_=[];
            for (var b = 1; b <= fsIcon_[a].smb.animations._outputFrames.length; b++) {
                if (b % 3 == 0) revAnimFrameSeq_.push(b);
            }
            revAnimFrameSeq_.reverse();
            fsIcon_[a].smb.animations.add("anim", revAnimFrameSeq_);
            fsIcon_[a].smb.animations.play("anim", 48, false, true, subst_, a);//todo parametric loop
        }
        soundManager_.playSound("revert");
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
