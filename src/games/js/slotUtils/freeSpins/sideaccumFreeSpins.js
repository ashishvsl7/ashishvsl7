/**
 * KiS Framework, Created by Fabry on 18/01/2017.
 */

function SideAccumFreeSpins(gameRef,gameClass){
    var game_=gameRef;
    var gameClass_=gameClass;
    var freeSpinNum_=0;
    var freeSpinTH_=2;
    var isInFs_=false;
    var fsWon_=false;
    var fsInc_=false;
    var fsWonNum_=0;
    var fsAddNum_=0;
    var wasOnFs=false;
    var startBalance_=0;
    var win_;
    var winCash_=0;
    var mult_=1;
    var symbolCollected_=0;
    var emitter_=[];
    var mainGroup_;
    var fsPanelGroup_;
    var unsettledWin_=0;
    var freeSpinAccum_=[];
    var eggExit_;
    var eggs_=[];
    var panelSmb_;
    var type_="";
    var endPanelUp_=false;
    var sideStatus_=0;

    function initClass_(){
        mainGroup_= displayManager_.getGroup("freeSpinAccumulator");
        fsPanelGroup_= displayManager_.getGroup("freeSpins");
    }

    function parse_(json){
        win_=0;
        mult_=1;
        fsWonNum_=0;
        fsAddNum_=0;

        if (json.freeSpin!=null){
            //inside FS
            freeSpinNum_=json.freeSpin.num;
            if (json.freeSpin.totalWin!=null){
                winCash_=json.freeSpin.totalWin/100;
            }
            if (json.freeSpin.multiplier!=null && json.freeSpin.multiplier>0){
                mult_=json.freeSpin.multiplier;
                type_="freeSpin";
            }
            if (json.freeSpin.type!=null )type_=json.freeSpin.type;
            if(json.freeSpin.eggsCollected!=null)symbolCollected_=json.freeSpin.eggsCollected;
            if(json.freeSpin.feature!=null)eggExit_=json.freeSpin.feature;
        }else if (json.status!=null){
            if (json.status.hand=="freespins"){
                if (json.status.eggsCollected!=null)symbolCollected_=json.status.eggsCollected;
                freeSpinNum_=json.status.numFS;
                winCash_=json.status.totalWin/100;
                mult_=json.status.multiplier;
                unsettledWin_=json.status.unsettledTotal/100;
                type_=json.status.type;
                eggExit_=json.status.feature;
            }else{
                mult_=json.status.multiplier;
                eggExit_=json.status.feature;
                freeSpinAccum_=json.status.eggs;
            }
        }
        win_=winCash_ / balanceManager_.getCoinValue()*lineManager_.getLinesNumber();
    }

    function resumeFs_(){
        if (type_=="respin")return;
        balanceManager_.balanceBonusUpdate(winCash_,unsettledWin_);
        resumeFsAcc_(true);
        toggleFreeSpins_();
    }

    function resumeFsAcc_(resume){

        if(!resume){
            freeSpinNum_=0;
            freeSpinAccum_=communicationManager_.getResumeStatus().status.collected[ framework.getBetValues().indexOf(Util.formatNumber(balanceManager_.getCoinValue(),2))];
        }
        if (communicationManager_.getResumeStatus().status.hand=="freespins" && communicationManager_.getResumeStatus().status.type!="respin") {
            freeSpinNum_=communicationManager_.getResumeStatus().status.numFS;  //fixes FR resume
        }
        if (freeSpinAccum_!=undefined) {
            for (var a = 0; a <= displayManager.groups.freeSpinAccumulator.maxFs; a++) {
                if (freeSpinAccum_[a] >= 0) {
                    placeSymbol_(a, freeSpinAccum_[a], ((((freeSpinAccum_[a + 1] != undefined && freeSpinAccum_[a] == freeSpinAccum_[a + 1]) || (freeSpinAccum_[a - 1] != undefined && freeSpinAccum_[a] == freeSpinAccum_[a - 1])) && freeSpinAccum_[0] == freeSpinAccum_[a]) || a == 0) ? 1 : .5);//this insane IF hilight up to two consecutive similar egg or the first one from the bottom
                } else {
                    if (eggs_[a]) mainGroup_.remove(eggs_[a]);
                }
            }
            updateFreeSpinsData_();
        }
    }

    function updateFsNum_(par){
        //fade top symbol and move up others
        if(eggs_[2]!=undefined)TweenMax.to(eggs_[2],.2,{alpha:0});
        if(par[1]!=undefined)TweenMax.to(par[1],.2,{delay:.1,y:displayManager.groups.freeSpinAccumulator.graphAsset["accu"+0].y,onComplete:endUpdate_,onCompleteParams:[par[1]],ease:Bounce.easeInOut});
        if(eggs_[1]!=undefined)TweenMax.to(eggs_[1],.2,{delay:.1,y:displayManager.groups.freeSpinAccumulator.graphAsset["accu"+2].y,ease:Bounce.easeInOut});
        if(eggs_[0]!=undefined)TweenMax.to(eggs_[0],.2,{delay:.1,y:displayManager.groups.freeSpinAccumulator.graphAsset["accu"+1].y,ease:Bounce.easeInOut});
        //when FS trigger animate all of them
        soundManager_.playSound("line");
    }

    function endUpdate_(par){
        var win=0;
        if(eggs_[1]!=undefined)eggs_[2]=eggs_[1];
        if(eggs_[0]!=undefined)eggs_[1]=eggs_[0];
        eggs_[0]=par;
        symbolCollected_=0;
        //check similar eggs
        for (var a=0;a<= displayManager.groups.freeSpinAccumulator.maxFs;a++ ){
            if(eggs_[a]!=undefined) {
                eggs_[a].alpha = ((((freeSpinAccum_[a + 1] != undefined && freeSpinAccum_[a] == freeSpinAccum_[a + 1]) || (freeSpinAccum_[a - 1] != undefined && freeSpinAccum_[a] == freeSpinAccum_[a - 1])) && (freeSpinAccum_[0] == freeSpinAccum_[a] || a == 0)) || a == 0 || freeSpinsManager_.getFsWon()) ? 1 : .3;//this insane IF hilight up to two consecutive similar egg or the first one from the bottom
                if (eggs_[a].alpha == 1) {
                    win++;
                    eggs_[a].animations.add("anim");
                    eggs_[a].animations.play("anim", 24, false, false);
                }
            }
        }

        if (win!= sideStatus_){
            if (win==2){
                //play lev 2
                soundManager_.getBGSound("bgSlot2").fadeInBgSoundExternal(500 ,1.5,soundManager_.getBGSound("bgSlot").getSound().currentTime,null );
            }else if (win==3){
                //play lev 3
                soundManager_.getBGSound("bgSlot3").fadeInBgSoundExternal(500, .8, soundManager_.getBGSound("bgSlot").getSound().currentTime,null );
            }else{
                if(soundManager_.getBGSound("bgSlot2")!=null)soundManager_.getBGSound("bgSlot2").fadeOutBgSoundExternal(1000,0);
                if(soundManager_.getBGSound("bgSlot3")!=null)soundManager_.getBGSound("bgSlot3").fadeOutBgSoundExternal(1000,0);
                //stop all
            }
        }
        sideStatus_=win;
        gameClass_.setFsStatus(sideStatus_);

        if (win>displayManager.groups.freeSpinAccumulator.maxFs ){
            soundManager_.playSound("eggFsWin");
        }
    }

    function placeSymbol_(pos,icon,alpha){
        if (eggs_[pos]!=undefined){
            mainGroup_.remove(eggs_[pos]);
        }
        var s = game_.add.sprite(mainGroup_["accu"+pos].children[0].x, mainGroup_["accu"+pos].children[0].y, "anim"+icon);
        mainGroup_.add(s);
        s.anchor.set(.5,.5);
        s.visible=true;
        s.alpha=alpha;
        s.height =displayManager.groups.freeSpinAccumulator.graphAsset["accu"+pos].height;
        s.width =displayManager.groups.freeSpinAccumulator.graphAsset["accu"+pos].width;
        eggs_[pos]=s;
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
            if (type_!="stickySpins" && type_!="respin") {
                if (panelSmb_ != undefined)fsPanelGroup_.remove(panelSmb_);
                panelSmb_ = game_.add.sprite(190, 50, "anim" + eggExit_);
                panelSmb_.anchor.set(.5, .5);
                panelSmb_.visible = true;
                panelSmb_.alpha = 1;
                panelSmb_.height = 80;
                panelSmb_.width = 80;
                fsPanelGroup_.add(panelSmb_);
                displayManager_.getText("totLineWonValue").visible=true;
                displayManager_.getText("totLineWonLabel").visible=true;
                displayManager_.getText("fsMultValue").visible=true;
                displayManager_.getText("fsMultLabel").visible=true;
                displayManager_.getText("fsMultTotValue").visible=true;
                displayManager_.getText("fsMultTotLabel").visible=true;
                displayManager_.getText("fsSymbValue").visible=true;
                displayManager_.getText("fsSymbLabel").visible=true;

                displayManager_.getText("totWonValue").x=1030
                displayManager_.getText("totWonValue").y=30
                displayManager_.getText("totWonLabel").x=1030
                displayManager_.getText("totWonLabel").y=16
                displayManager_.getText("fsValue").x=750
                displayManager_.getText("fsValue").y=30
                displayManager_.getText("fsLabel").x=750
                displayManager_.getText("fsLabel").y=16

            }else{
                if (panelSmb_ != undefined)fsPanelGroup_.remove(panelSmb_);

                displayManager_.getText("totLineWonValue").visible=false;
                displayManager_.getText("totLineWonLabel").visible=false;
                displayManager_.getText("fsMultValue").visible=false;
                displayManager_.getText("fsMultLabel").visible=false;
                displayManager_.getText("fsMultTotValue").visible=false;
                displayManager_.getText("fsMultTotLabel").visible=false;
                displayManager_.getText("fsSymbValue").visible=false;
                displayManager_.getText("fsSymbLabel").visible=false;

                displayManager_.getText("totWonValue").x = 800
                displayManager_.getText("totWonValue").y = 30
                displayManager_.getText("totWonLabel").x = 800
                displayManager_.getText("totWonLabel").y = 16
                displayManager_.getText("fsValue").x = 500
                displayManager_.getText("fsValue").y = 30
                displayManager_.getText("fsLabel").x = 500
                displayManager_.getText("fsLabel").y = 16
                soundManager_.mixBgSound("bgFsS", 1000, 1000);

                if(soundManager_.getBGSound("bgSlot2")!=null)soundManager_.getBGSound("bgSlot2").fadeOutBgSoundExternal(1000,0);
                if(soundManager_.getBGSound("bgSlot3")!=null)soundManager_.getBGSound("bgSlot3").fadeOutBgSoundExternal(1000,0);


            }
            if (freeRoundsManager_.getIsInFr()==false && gameInfo.freeRoundsAvailable!=true){
                TweenMax.to(displayManager_.getGroup("logo"),.3,{y:-200,ease:Bounce.easeIn,onComplete:logoOut_});
            } else{
                TweenMax.to(displayManager_.getGroup("logo"),.4,{y:-200,ease:Bounce.easeOut});
                TweenMax.to(displayManager_.getGroup("freeRounds"),.4,{y:-200,ease:Bounce.easeOut});
                TweenMax.to(displayManager_.getGroup("freeSpins"),.4,{y:0,ease:Bounce.easeOut});
            }
            //soundManager_.mixBgSound("bgFs", 1000, 1000);
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

    function updateFreeSpinsNum_ (){
        if (freeSpinNum_>=0){
            displayManager_.getText("fsValue").setText(freeSpinNum_-1);
        }
    }

    function updateFreeSpinsData_(){
        updateFreeSpinsTotWon_();
        updateFreeSpinsMult_();
    }

    function updateFreeSpinsTotWon_(){
        var w=symbolCollected_ * mult_*balanceManager_.getCoinValue();

        if (balanceManager_.getShowIncredits()==true) {
            var wc=winCash_ / balanceManager_.getCoinValue() * lineManager_.getLinesNumber();
            var mc= w / balanceManager_.getCoinValue() * lineManager_.getLinesNumber();
            var c=balanceManager_.getCoinValue()/ balanceManager_.getCoinValue() * lineManager_.getLinesNumber();
            //displayManager_.getText("fsMultTotEQ").setText("x"+ c);
            displayManager_.getText("totWonValue").setText(Util.formatNumber(wc, Util.getNubersOfDecimal()));
            displayManager_.getText("totLineWonValue").setText(Util.formatNumber(Math.max(wc-mc,0), Util.getNubersOfDecimal()));
        }else {
            //displayManager_.getText("fsMultTotEQ").setText("x"+ Util.formatNumber(balanceManager_.getCoinValue(), Util.getNubersOfDecimal())+"=");
            displayManager_.getText("totWonValue").setText(balanceManager_.getCurrencySmb() + "" + Util.formatNumber((winCash_), Util.getNubersOfDecimal()));
            displayManager_.getText("totLineWonValue").setText(balanceManager_.getCurrencySmb() + "" + Util.formatNumber(Math.max((winCash_-w),0), Util.getNubersOfDecimal()));
        }
    }

    function updateFreeSpinsMult_(){
        displayManager_.getText("fsSymbValue").setText(symbolCollected_);

        var w=symbolCollected_ * mult_*balanceManager_.getCoinValue();
        if (balanceManager_.getShowIncredits()==true) {
            var c=balanceManager_.getCoinValue()/ balanceManager_.getCoinValue() * lineManager_.getLinesNumber();
            displayManager_.getText("fsMultValue").setText("x" +mult_*c);
            displayManager_.getText("fsMultTotValue").setText(Util.formatNumber((w) / balanceManager_.getCoinValue() * lineManager_.getLinesNumber(), Util.getNubersOfDecimal()));
        }else {
            displayManager_.getText("fsMultValue").setText("x" +Util.formatNumber(mult_*balanceManager_.getCoinValue(), Util.getNubersOfDecimal()));
            displayManager_.getText("fsMultTotValue").setText(balanceManager_.getCurrencySmb() + "" +Util.formatNumber(w, 2));
        }
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
        //remove all the pending caracter animations,
        //set the FS counter to zero, close the total win panel and send the animatino contro to the main game with total win amount in the central win display if >threshold
        communicationManager_.getResumeStatus().status.collected[ framework.getBetValues().indexOf(Util.formatNumber(balanceManager_.getCoinValue(),Util.getNubersOfDecimal()))]=0;
        symbolCollected_=0;
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
        soundManager_.mixBgSound("bgFs", 1000, 1000);
        if(soundManager_.getBGSound("bgSlot2")!=null)soundManager_.getBGSound("bgSlot2").fadeOutBgSoundExternal(500,0);
        if(soundManager_.getBGSound("bgSlot3")!=null)soundManager_.getBGSound("bgSlot3").fadeOutBgSoundExternal(500,0);

        TweenMax.to(displayManager_.getGroup("fsWonPanel"),.5,{y:-1000,ease:Linear.easeIut,onComplete:completeHide_});
    }

    function completeHide_(){
        displayManager_.getGroup("fsWonPanel").visible=false;
        toggleFreeSpins_();
    }

    function getFreeSpinsEval_  () {
        if (isInFs_){
            updateFreeSpinsData_();
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

        if (type_!="stickySpins" && type_!="respin") {
            //reset side eggs, music and main game level property
            if (eggs_[0])mainGroup_.remove(eggs_[0]);
            if (eggs_[1])mainGroup_.remove(eggs_[1]);
            if (eggs_[2])mainGroup_.remove(eggs_[2]);
            if(soundManager_.getBGSound("bgSlot2")!=null)soundManager_.getBGSound("bgSlot2").fadeOutBgSoundExternal(500,0);
            if(soundManager_.getBGSound("bgSlot3")!=null)soundManager_.getBGSound("bgSlot3").fadeOutBgSoundExternal(500,0);
            gameClass_.setFsStatus(0);

            displayManager_.getText("fsWLabel").setText(Translate.do("Free spins finished"));
            if (win_ > 0) {
                displayManager_.getText("fsValue1").setText(Translate.do("you've won"));
                displayManager_.getText("fsWLabel1").setText("");
            } else {
                displayManager_.getText("fsValue1").setText(Translate.do("better luck"));
                displayManager_.getText("fsWLabel1").setText(Translate.do("the next time"));
            }

            TweenMax.to(displayManager_.getGroup("freeSpins"), .5, {
                y: -200,
                ease: Sine.easeOut,
                onComplete: showFsTotWonPanel_
            });
        }else{
            isInFs_=false;

            soundManager_.mixBgSound("bgSlot", 1000, 1000);
            if (freeRoundsManager_.getIsInFr()==false){
                TweenMax.to(displayManager_.getGroup("logo"),.3,{delay:.5,y:0,ease:Bounce.easeOut});
            }else{
                TweenMax.to(displayManager_.getGroup("freeRounds"),.4,{delay:.5,y:0,ease:Bounce.easeOut});
            }

            TweenMax.to(displayManager_.getGroup("freeSpins"), .5, {
                y: -200,
                ease: Sine.easeOut});
            freeSpinsManager_.startHidePanel(win_,winCash_);
            freeSpinsManager_.completeDidePanel(win_,winCash_);
        }
        type_="";
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
                evt.addEvent(showFsPanel1_,3000,[evt]);
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
            communicationManager_.getResumeStatus().status.collected[ framework.getBetValues().indexOf(Util.formatNumber(balanceManager_.getCoinValue(),Util.getNubersOfDecimal()))]++;
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
            }

        },
        getType:function (){
            return type_;
        },
        setEndPanel:function(){
            endPanelUp_ =true;
        },
        setClearEndPanel:function(){
            endPanelUp_ =false;
        },
        getEndPanelOn:function(){
            return endPanelUp_;
        }

    }
    initClass_();
    return me;
}
