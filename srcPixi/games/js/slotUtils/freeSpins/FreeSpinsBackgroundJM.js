/**
 * KiS Framework, Created by Fabry on 10/03/2016.
 * Lee added screen based on freeSpins.js to update background for freespins.
 * Justice machine only versions (as it has special feature detections).
 */
function FreeSpinsBackgroundJM(gameRef,gameClass){
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
    var passedJson;
    
    var type_="";
    
    function initClass_(){
        hideFs_();
    }

    function parse_(json){
        console.log("parse_");
        console.warn(json);
        win_=0;
        mult_=1;
        fsWonNum_=0;
        fsAddNum_=0;

        passedJson = json;

                // check for demon or normal freespins.
            if (json.status.feature!=null){
                type_="";
                if (json.status.feature==1)type_="demon";
            }
            console.warn(type_);
        
        
        if (json.freeSpin!=null){
            //
            //inside FS
            freeSpinNum_=json.freeSpin.num;
            //console.log("------json-------")
            //console.warn(json.freeSpin.num)
            
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
        
        console.warn("freeSpinNum_:"+freeSpinNum_)
        console.warn(json)
        win_=winCash_ / balanceManager_.getCoinValue()*lineManager_.getLinesNumber();

    }

    function resumeFs_(){
        console.log("resumeFs_");
        // Lee added in type so we know if its freespins or just a demon spin
        if( type_ === "demon") {
            // demon spin
            console.log("do demon spin.")
        } else {
            // normal freespins.
            soundManager_.playBgSound("bgFs");
            balanceManager_.balanceBonusUpdate(unsettledWin_-10);
            toggleFreeSpins_();
        }
        
        
    }

    /* New function here */ 
    function toggleFreeSpins_ () {
        displayManager_.getText("fsValue").setText((freeSpinNum_));
        console.warn("toggleFreeSpins_ called");
        console.warn(isInFs_, freeSpinNum_);

        if (type_=="demon") {
           if (isInFs_==false)autoPlayManager_.toggleFeature(false);
           return;
       }


        if (isInFs_ && freeSpinNum_>0) {
            //already in
            fsWon_=false;
        } else {
            if (wasOnFs==false) {
               startBalance_=balanceManager_.getBalance(); 
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
            
            
            
            
            // show freespin background & masker
            //displayManager_.getGroup("freespinsbg").visible=true;
            //displayManager_.getGroup("freespinsMask").visible=true;
            
            // hide normal background and mask groups.
            //displayManager_.getGroup("mask").y=-300;
            var fsG = displayManager_.getGroup("freeSpins");
            fsG.alpha = 0;
            fsG.visible=true;
            
            // show freespin background & masker
            var fsBG = displayManager_.getGroup("freespinsbg");
            var fsMask = displayManager_.getGroup("freespinsMask");
            fsBG.alpha = 0;
            fsMask.alpha = 0;
            fsBG.visible=true;
            fsMask.visible=true;
            TweenMax.to(fsBG, 0.5, {alpha:1});
            TweenMax.to(fsMask, 0.5, {alpha:1});
            TweenMax.to(fsG, 0.5, {alpha:1});
            
            //var bG = displayManager_.getGroup("freespinsbg");
            //var mask = displayManager_.getGroup("freespinsMask");
            
            //TweenMax.to(bG, 0.5, {alpha:0});
            //TweenMax.to(mask, 0.5, {alpha:0});
            
            // mask frame
            //displayManager_.getGroup("mask").visible=false;
            //displayManager_.getGroup("frame").visible=false;
            
            
            
            
            
            /*
            if (freeRoundsManager_.getIsInFr()==false){
                TweenMax.to(displayManager_.getGroup("logo"),.3,{y:-200,ease:Bounce.easeIn,onComplete:logoOut_});
            } else{
                TweenMax.to(displayManager_.getGroup("freeSpins"),.4,{y:0,ease:Bounce.easeOut});
            }
            */
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

        if (type_=="demon") {
            wasOnFs = true;
            fsWon_ = false;
            // erm... switched to false..
            //isInFs_ = true;
            isInFs_ = false;
            return;
        }

        if (winCash_>0){
           
            soundManager_.playSound("winPanel");
            winManager_.updateWinAmt(winCash_);
        }
        TweenMax.to(displayManager_.getGroup("logo"),.3,{y:0,ease:Bounce.easeOut});
        TweenMax.to(displayManager_.getGroup("fsWonPanel"),.4,{y:0,ease:Bounce.easeOut,onComplete:hideTotPanel_});
        soundManager_.mixBgSound("bgSlot", 1000, 1000);
    }

    function hideTotPanel_(){
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
        console.log("Actual showFsPanel_")
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
        console.log("completeHide_")
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
    
    
    ///

    function toggleBackFs_(){
        wasOnFs = true;
        fsWon_ = false;
        // erm... switched to false..
        //isInFs_ = true;
        isInFs_ = false;

        if (type_=="demon") {

            return;
        }

        displayManager_.getText("fsWLabel").setText(Translate.do("Free spins finished"));
        
        if (win_>0){
            displayManager_.getText("fsValue1").setText(Translate.do("you've won"));
            displayManager_.getText("fsWLabel1").setText("");
        }else{
            displayManager_.getText("fsValue1").setText(Translate.do("better luck"));
            displayManager_.getText("fsWLabel1").setText(Translate.do("the next time"));
        }

        //TweenMax.to(displayManager_.getGroup("freeSpins"),.5,{y:-200,ease:Sine.easeOut,onComplete:showFsTotWonPanel_});
        var fsG = displayManager_.getGroup("freeSpins");
        
        //displayManager_.getText("fsValue").setText("");
        
        console.warn("toggleBackFs_");
        showFsTotWonPanel_();
        
        // revert interface.
        var fsBG = displayManager_.getGroup("freespinsbg");
        var fsMask = displayManager_.getGroup("freespinsMask");
        TweenMax.to(fsBG, 0.5, {alpha:0});
        TweenMax.to(fsMask, 0.5, {alpha:0});
        TweenMax.to(fsG, 0.5, {alpha:0});
       /*     
        var bG = displayManager_.getGroup("freespinsbg");
        var mask = displayManager_.getGroup("freespinsMask");
            
        TweenMax.to(bG, 0.5, {alpha:1});
        TweenMax.to(mask, 0.5, {alpha:1});
        */
        
    }

    function hideFs_(){
        //TweenMax.to(displayManager_.getGroup("freeSpins"),.5,{y:-200,ease:Sine.easeOut});
        console.log("hideFS")
        var fsG = displayManager_.getGroup("freeSpins");
        TweenMax.to(fsG, 0.5, {alpha:0});
        TweenMax.to(displayManager_.getGroup("logo"),.3,{delay:.5,y:0,ease:Bounce.easeOut});
        isInFs_ = false;
    }

    function endAnimHandle_(evt){
        console.log("endAnimHandle_, "+me.getType()+", passedJson.status.type:"+passedJson.status.type);

        if (me.getFsWon() && spinManager_.getSpinResp().bonus.wonBonus==0) {
            if (displayManager_.getGroup("fsWonPanel")!= null && me.getType!=undefined && me.getType()!="stickySpins" && me.getType()!="demon"){
                evt.addEvent(showFsPanel1_,1200,[evt]);
                console.log("1")
            }  else if(displayManager_.getGroup("fsWonPanel")!= null){
                evt.addEvent(me.toggleFreeSpins ,1200);
                type_="demon";
            } else {

            }
        } else if (me.getFsAdd != null && me.getFsAdd() > 0) {
            evt.addEvent(gameClass_.fakeEvent, 1000);
            console.log("3")
        } else if (me.getIsInFs() == true && me.getFsNumber() <= 0) {
            console.log("isin:"+me.getIsInFs()+", num:"+me.getFsNumber()+", fs:"+freeSpinNum_)
            if (me.setEndPanel!=null)me.setEndPanel();
            evt.addEvent(me.toggleBackFs, 3000);
        }
    }

    /*
    function showFsPanel1_(par) {
        console.log("showFsPanel1_:"+me.getFsNumber());
        
        if( me.getFsNumber() > 0) {
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
        
        
    }
    */
    
    function showFsPanel1_(par) {
        console.log("showFsPanel1_:"+me.getFsNumber());
        
        if( me.getFsNumber() > 0) {
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
        }else{
            fsWon_=false;
            
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
            console.log("fsWOn:"+freeSpinNum_);
        },
        //
        getType:function (){
            return type_;
        },
        //
        
        parse:parse_,
        resumeFs:resumeFs_,
        hideFs:hideFs_,
        toggleBackFs:toggleBackFs_,

    }
    initClass_();
    return me;
}
