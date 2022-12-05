    /**
 * KiS Framework, Created by Fabry on 17/08/2016.
 */
function AccumFreeSpins(gameRef,gameClass){
    var game_=gameRef;
    var gameClass_=gameClass;
    var freeSpinNum_=0;
    var freeSpinTH_=3;
    var isInFs_=false;
    var fsWon_=false;
    var fsInc_=false;
    var fsWonNum_=0;
    var fsAddNum_=0;
    var wasOnFs=false;
    var startBalance_=0;
    var win_;
    var winCash_;
    var mult_;
    var emitter_=[];
    var mainGroup_;
    var stopIdle_=false;
    var carIdle_=[];
    var irandomizeCaracter_=0;
    var unsettledWin_=0;

    //idle percentage
    var randomFreq_=45;
    //----these must make 100
    var freq_={
        "trick":8,
        "happy":35,
        "static":35,
        "active":40,
    }

    //----these must make 100
    var randomTimeMinOut_=1500;
    var randomTimeMaxOut_=4500;

    function initClass_(){
        mainGroup_= displayManager_.getGroup("freeSpinAccumulator");
        for (var a=1;a<= displayManager.groups.freeSpinAccumulator.maxFs;a++ ){//todo paramter
            mainGroup_["accu"+a].visible=false;
            mainGroup_["ball"+a].visible=false;
        }
    }

    function parse_(json){
        win_=0;
        mult_=1;
        fsWonNum_=0;
        fsAddNum_=0;
        if (json.freeSpin!=null){
            //inside FS
            freeSpinNum_=json.freeSpin.num;
            if (json.freeSpin.won!=null && json.freeSpin.totalWin>0){
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
        win_=winCash_ / balanceManager_.getCoinValue()*lineManager_.getLinesNumber();
        if (freeSpinNum_>5)freeSpinNum_=5;//todo remove
    }

    function resumeFs_(){
        balanceManager_.balanceBonusUpdate(winCash_,unsettledWin_);
        resumeFsAcc_(true);
        toggleFreeSpins_();
    }

    function resumeFsAcc_(resume){
        stopIdle_=true;
        for (var a in carIdle_){
            if (carIdle_[a]!=null){
                carIdle_[a].visible=false;
                carIdle_[a].destroy();
            }
        }
        carIdle_=[];
        if(!resume)freeSpinNum_= communicationManager_.getResumeStatus().status.collects[ framework.getBetValues().indexOf(Util.formatNumber(balanceManager_.getCoinValue(),2))];
        for (var a=1;a<= displayManager.groups.freeSpinAccumulator.maxFs;a++ ){//todo paramter
            mainGroup_["ball"+a].visible=true;
            mainGroup_["accu"+a].visible=false;
        }
        clearTimeout(irandomizeCaracter_);
        if (freeSpinNum_>0) {
            randomizeCaracter_();
        }
        updateFreeSpinAccu_();
        updateFreeSpinsData_();
        setTimeout(restoreIdleCount_,2000);
    }

    function updateFsNum_(){
        animateCaracter_(freeSpinNum_,"intro");
    }

    function randomizeCaracter_(){
        //side-meter character idle cycle, just for having some FUN
        var lastCar=freeSpinNum_-1; //cannot animate the caracter that is still not in the side bar
        var randNumber=Util.getRandomInt(1,100);
        var carNumber=Util.getRandomInt(1,lastCar);
        if ( carNumber>0 && mainGroup_["accu"+carNumber].visible==true && randNumber>100-randomFreq_){
            var ret=checkFreq("trick");
            if (ret==1 && isInFs_==false){
                var cbCaracter=[];
                //after the trick all the caracter lol
                if (isInFs_==false)lastCar++; //during FS there is a chance the symbol will disappear befor laught
                for (var i=1;i<= lastCar;i++){
                    if (i!=carNumber){
                        cbCaracter.push(i);
                    }
                }
                animateCaracter_(carNumber,"trick",cbCaracter,"happy");
                irandomizeCaracter_= setTimeout(randomizeCaracter_,Util.getRandomInt(randomTimeMinOut_,randomTimeMaxOut_));
                return;
            }
            var ret=checkFreq("happy");
            if (ret==1){
                animateCaracter_(carNumber,"happy");
                irandomizeCaracter_=setTimeout(randomizeCaracter_,Util.getRandomInt(randomTimeMinOut_,randomTimeMaxOut_));
                return;
            }
            var ret=checkFreq("active");
            if (ret==1){
                animateCaracter_(carNumber,"active");
                irandomizeCaracter_=setTimeout(randomizeCaracter_,Util.getRandomInt(randomTimeMinOut_,randomTimeMaxOut_));
                return;
            }
            var ret=checkFreq("static");
            if (ret==1){
                animateCaracter_(carNumber,"static");
                irandomizeCaracter_=setTimeout(randomizeCaracter_,Util.getRandomInt(randomTimeMinOut_,randomTimeMaxOut_));
                return;
            }
        }
        irandomizeCaracter_=setTimeout(randomizeCaracter_,Util.getRandomInt(randomTimeMinOut_,randomTimeMaxOut_));
    }

    function checkFreq(type){
        var randNumber=Util.getRandomInt(1,100);
        if (randNumber<= freq_[type])return 1
        return 0;
    }

    function animateCaracter_(num, animation, caracter, callBackAnimation){
        logger("anim c" + animation+ " ")
        if (stopIdle_)return;

        var s = game_.add.sprite(mainGroup_["accu"+num].children[0].x, mainGroup_["accu"+num].children[0].y, "fs-"+animation);
        s.animations.add("anim");
        carIdle_.push(s);
        mainGroup_.add(s);
        s.anchor.set(.5,.5);
        s.visible=true;
        s.scale.x =1;
        s.scale.y =1;
        mainGroup_["accu"+num].visible=false;
        if (caracter!=null) {
            soundManager_.playSound("fs-"+animation+Util.getRandomInt(0,1));
            s.animations.play("anim", 24, false, true, idleAnimationEnd_, [num,caracter, callBackAnimation]);
        }else if (animation=="used"){
            soundManager_.playSound("fs-"+animation);
            s.animations.play("anim", 24, false, true, animationEnd_, [num]);
        }else if (animation=="intro"){
            soundManager_.playSound("fs-"+animation);
            mainGroup_["ball"+num].visible=false;
            s.animations.play("anim", 24, false, true, idleAnimationEnd_, [num,[num], "happy"]);
            setTimeout(restoreIdleCount_,2000);
        }else if (animation=="active"){
            soundManager_.playSound("fs-"+animation+Util.getRandomInt(0,2));
            s.animations.play("anim", 24, false, true, idleAnimationEnd_, [num]);
        }else if (animation=="static"){
            soundManager_.playSound("fs-"+animation+Util.getRandomInt(0,1));
            s.animations.play("anim", 24, false, true, idleAnimationEnd_, [num]);
        }else if (animation=="happy"){
            soundManager_.playSound("fs-"+animation+Util.getRandomInt(0,3));
            s.animations.play("anim", 24, false, true, idleAnimationEnd_, [num]);
        }else{
            soundManager_.playSound("fs-"+animation);
            s.animations.play("anim", 24, false, true, idleAnimationEnd_, [num]);
        }
    }

    function restoreIdleCount_(){
        stopIdle_=false;
    }

    function animationEnd_(params) {
        var num= params[0];
        mainGroup_["ball"+num].visible=true;
    }

    function idleAnimationEnd_(params){
        var num= params[0];
        var caracter= params[1];
        var callBackAnimation= params[2];

        mainGroup_["accu"+num].visible=true;
        if (caracter!=undefined){
            for (var a in caracter){
                logger("anim callback" +callBackAnimation)
                animateCaracter_(caracter[a],callBackAnimation);
            }
        }
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
            //first FS
            //toggle gfx
            displayManager_.getGroup("freeSpins").y=-300;
            displayManager_.getGroup("freeSpins").visible=true;
            updateFreeSpinsData_();
            if (freeRoundsManager_.getIsInFr()==false && gameInfo.freeRoundsAvailable!=true){
                TweenMax.to(displayManager_.getGroup("logo"),.3,{y:-200,ease:Bounce.easeIn,onComplete:logoOut_});
            } else{
                TweenMax.to(displayManager_.getGroup("freeRounds"),.4,{y:-200,ease:Bounce.easeOut});
                TweenMax.to(displayManager_.getGroup("freeSpins"),.4,{y:0,ease:Bounce.easeOut});
            }
            soundManager_.mixBgSound("bgFs", 1000, 1000);
        }
    }

    function logoOut_() {
        TweenMax.to(displayManager_.getGroup("freeSpins"), .4, {y: 0, ease: Bounce.easeOut});

        for (var a in displayManager.groups.freeSpins.emitters){
            var anim = epsy_.loadSystem(displayManager.groups.freeSpins.emitters[a][0], 500, 500);
            displayManager.groups.freeSpins.emitters[a][0].texture = game.cache.checkImageKey("particle");
            displayManager_.getGroup("freeSpins").add(anim);
            emitter_.push(anim);
        }
    }

    function updateFreeSpinAccu_(){
        for (var a=1;a<= freeSpinNum_;a++ ){//todo paramter
            mainGroup_["accu"+a].visible=true;
            mainGroup_["ball"+a].visible=false;
        }
    }

    function updateFreeSpinsNum_ (){
        displayManager_.getText("fsValue").setText(freeSpinNum_-1);
        if (isInFs_ && freeSpinNum_>=0){
            if (freeSpinNum_>=0){
                animateCaracter_(freeSpinNum_,"used");
            }
        }
    }

    function updateFreeSpinsData_(){
        updateFreeSpinsTotWon_();
        updateFreeSpinsMult_();
    }

    function updateFreeSpinsTotWon_(){
        if (balanceManager_.getShowIncredits()==true) {
            displayManager_.getText("totWonValue").setText(Util.formatNumber((winCash_/mult_) / balanceManager_.getCoinValue() * lineManager_.getLinesNumber(), Util.getNubersOfDecimal()));
        }else {
            displayManager_.getText("totWonValue").setText(balanceManager_.getCurrencySmb() + "" + Util.formatNumber((winCash_/mult_), Util.getNubersOfDecimal()));
        }
    }

    function updateFreeSpinsMult_(){
        displayManager_.getText("fsMultValue").setText("x" +mult_);
    }


    function showFsTotWonPanel_(){
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
        TweenMax.to(displayManager_.getGroup("logo"),.3,{y:0,ease:Bounce.easeOut});
        TweenMax.to(displayManager_.getGroup("fsWonPanel"),.4,{y:0,ease:Bounce.easeOut,onComplete:hideTotPanel_});
        soundManager_.mixBgSound("bgSlot", 1000, 1000);
    }

    function hideTotPanel_(){
        //remove all the pending caracter animations,
        //set the FS counter to zero, close the total win panel and send the animatino contro to the main game with total win amount in the central win display if >threshold
        for (var a in carIdle_){
            if (carIdle_[a]!=null){
                carIdle_[a].visible=false;
                carIdle_[a].destroy();
            }
        }
        communicationManager_.getResumeStatus().status.collects[ framework.getBetValues().indexOf(Util.formatNumber(balanceManager_.getCoinValue(),Util.getNubersOfDecimal()))]=0;
        if (win_>0) {
            var time = lineManager_.showBonusWin(win_,winCash_) / 1000;
            TweenMax.to(displayManager_.getGroup("fsWonPanel"), .4, {
                delay: (time + 2),
                y: -1000,
                ease: Linear.easeIn,
                onStart: freeSpinsManager_.startHidePanel,onStartParams:[win_,winCash_],
                onComplete: freeSpinsManager_.completeDidePanel,onCompleteParams:[win_,winCash_],
            });
        }else{
            gameClass_.hideFs();
            isInFs_ = false;
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
        
        TweenMax.to(displayManager_.getGroup("freeSpins"),.5,{y:-200,ease:Sine.easeOut,onComplete:showFsTotWonPanel_});
        displayManager_.getText("fsValue").setText("");         
    }

    function hideFs_(){
        TweenMax.to(displayManager_.getGroup("freeSpins"),.5,{y:-200,ease:Sine.easeOut});
        TweenMax.to(displayManager_.getGroup("logo"),.3,{delay:.5,y:0,ease:Bounce.easeOut});
        isInFs_ = false;
    }

    function endAnimHandle_(evt){
        if (me.getFsWon() && spinManager_.getSpinResp().bonus.wonBonus==0) {
            if (displayManager_.getGroup("fsWonPanel")!= null && me.getType!=undefined && me.getType()!="stickySpins" && me.getType()!="respin" ){
                evt.addEvent(showFsPanel1_,1200,[evt]);
            }  else if(displayManager_.getGroup("fsWonPanel")!= null){
                evt.addEvent(me.toggleFreeSpins ,1200);
            }
        } else if (me.getFsAdd != null && me.getFsAdd() > 0) {
            evt.addEvent(gameClass_.fakeEvent, 1000);
        } else if (me.getIsInFs() == true && me.getFsNumber() <= 0) {
            if (me.setEndPanel!=null)me.setEndPanel();
            evt.addEvent(me.toggleBackFs, 3000);
        }
    }

    function showFsPanel1_(par) {
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



    var me={
        parse:parse_,
        toggleFreeSpins:toggleFreeSpins_,
        getFreeSpinsEval:getFreeSpinsEval_,
        updateFreeSpinsNum:updateFreeSpinsNum_,
        updateFsNum:updateFsNum_,
        updateFreeSpinsData:updateFreeSpinsData_,
        updateFreeSpinsTotWon:updateFreeSpinsTotWon_,
        updateFreeSpinsMult:updateFreeSpinsMult_,
        resumeFsAcc:resumeFsAcc_,
        resumeFs:resumeFs_,
        showFsPanel1:showFsPanel1_,
        hideFsPanel:hideFsPanel_,
        hideFs:hideFs_,
        toggleBackFs:toggleBackFs_,
        updateFreeSpinAccu:updateFreeSpinAccu_,
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
            if (fsInc_){
                displayManager_.getText("fsValue").setText(freeSpinNum_);
            }
            return fsWon_;
        },
        addCollectedFs:function(){
            communicationManager_.getResumeStatus().status.collects[ framework.getBetValues().indexOf(Util.formatNumber(balanceManager_.getCoinValue(),Util.getNubersOfDecimal()))]++;
            fsAddNum_=1;
        },
        getFsAdd:function(){
          return fsAddNum_;
        },
        fsWon:function(num){
            autoPlayManager_.toggleFeature(true);
            fsWonNum_=num;
            fsInc_=true;

            if (isInFs_ ==false && freeSpinNum_>= freeSpinTH_){
                fsWon_=true;
                win_=0;
                winCash_=0;
                mult_=1;
            }
        }

    }
    initClass_();
    return me;
}
