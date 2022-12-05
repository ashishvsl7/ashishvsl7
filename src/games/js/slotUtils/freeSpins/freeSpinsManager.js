/**
 * KiS Framework, Created by Fabry on 18/03/2016.
 */
function FreeSpinsManager(gameRef,gameClass) {
    var game_ = gameRef;
    var gameClass_ = gameClass;
    var freeSpinsClass_;
    var triggerIcon_;
    var minNumTriggerIcon_ = ReelConfig.minFsSmbs;//todo read from configuration
    var lineEvalTOut_=0;

    function initClass_() {
        triggerIcon_ = ReelConfig.fsIcon;//todo
        try{
            freeSpinsClass_= new window[ReelConfig.freeSpins](game_,gameClass_);
        }catch(e){
            console.log("error looking for Free Spin class " +ReelConfig.freeSpins);
        }
    }

    function showFsIconAfterSubst_(par1){
        if ( par1.length>0) {
            for ( var a in par1 ){
                var iconN= par1[a].smbNum;
                add=true;
                var smb = new Phaser.Sprite( game_,par1[a].x , par1[a].y , "anim" +iconN);
                smb.anchor.set(.5, .5);
                smb.animations.add("anim");
                smb.scale.x=1;
                smb.scale.y=1;
                par1[a].visible=false;

                spinManager_.getReelGroup(par1[a].reel).add(smb);
                spinManager_.setAnimationMap(par1[a].reel,par1[a].smb,smb);
                smb.animations.play("anim", 24, false, true, updateIcon_,[par1[a],a]);
                soundManager_.playSound("smbWin_"+iconN);
            }
        }
    }

    function updateIcon_(obj){
        obj[0].visible=true;
    }
    
    function endAnimHandle_(evt) {
        if (freeSpinsClass_ == null)return;
        freeSpinsClass_.endAnimHandle(evt);
    }

    function resumeFsAcc_(){
        if(freeSpinsClass_.resumeFsAcc!=null)freeSpinsClass_.resumeFsAcc();
    }
    
    function resumeFs_(){
        freeSpinsClass_.resumeFs();
    }

    function updateFsNum_(par){
        freeSpinsClass_.updateFsNum(par)
    }

    function parse_(json){
        autoPlayManager_.toggleFeature(false);
        freeSpinsClass_.parse(json);
    }

    function updateFreeSpinsTotWon_(){
        freeSpinsClass_.updateFreeSpinsTotWon();
    }

    function updateFreeSpinsMult_(m){
        freeSpinsClass_.updateFreeSpinsMult(m);
    }
    var wC_=0;
    function startHidePanel_(win,winCash) {
        wC_=winCash;
        freeSpinsClass_.setIsInFs(false);
        winManager_.resetWinAmt();
        winManager_.setWinAmountBonus(winCash);

        balanceManager_.forceBalanceAfterFS(winCash);  //re-enabled this , just got disenabled because of session bar update but fixed now internally so it can work
        // update FR total
        var p={};
        p.value=winCash;
        freeRoundsManager_.parse(p);
        if (win>0) {
            if (balanceManager_.getShowIncredits() == false) {
                lineManager_.completeBonusValue(winCash, "Free Spins Win");
            } else {
                lineManager_.completeBonusValue(win, "Free Spins Win");
            }
        }
    }

    function completeDidePanel_(win,winCash){
        displayManager_.getGroup("fsWonPanel").visible=false;
        lineEvalTOut_=0
        autoPlayManager_.toggleFeature(false);
        if (win>0){
            var time=lineManager_.showBonusCentralWinGreetings(win);
            lineEvalTOut_=setTimeout(goBackAfterCentralWin_,time);
        }else{
            if (freeSpinsClass_.setClearEndPanel!=null)freeSpinsClass_.setClearEndPanel();
            autoPlayManager_.setCanAp(true);
            buttonManager_.applyRestore();
        }
        balanceManager_.balanceUpdate(!( freeRoundsManager_.getIsInFr() && freeRoundsManager_.getFrNumber()>0),wC_);
        gameClass_.hideFs(lineEvalTOut_);
    }

    function goBackAfterCentralWin_(){
        if (freeSpinsClass_.setClearEndPanel!=null)freeSpinsClass_.setClearEndPanel();
        autoPlayManager_.setCanAp(true);
        lineManager_.clearLine();
        //lineManager_.idle(true);
    }

    var me = {
        parse:parse_,
        endAnimHandle:endAnimHandle_,
        updateFsNum:updateFsNum_,
        resumeFsAcc:resumeFsAcc_,
        resumeFs:resumeFs_,
        showFsIconAfterSubst:showFsIconAfterSubst_,
        updateFreeSpinsTotWon:updateFreeSpinsTotWon_,
        updateFreeSpinsMult:updateFreeSpinsMult_,
        startHidePanel:startHidePanel_,
        completeDidePanel:completeDidePanel_,
        showFsPanel1:function(num){
            freeSpinsClass_.showFsPanel1(num);
        },
        hideFsPanel:function(){
            buttonManager_.applyRestore();
            freeSpinsClass_.hideFsPanel();
        },
        getTriggerIcon:function(){
            return (triggerIcon_!=null)?triggerIcon_:999;
        },
        fsWon:function(num,awarded){
            freeSpinsClass_.fsWon(num,awarded);
        },
        getMinNumTriggerIcon:function(){
            if(freeSpinsClass_==null)return 99;
            return minNumTriggerIcon_;
        },
        getFsNumber:function(){
            if(freeSpinsClass_==null)return 0;
            return freeSpinsClass_.getFsNumber();
        },
        getIsInFs:function(){
            if(freeSpinsClass_==null)return false;
            return freeSpinsClass_.getIsInFs();
        },
        getFsWon:function(){
            if(freeSpinsClass_==null)return 0;
            return freeSpinsClass_.getFsWon();
        },
        updateFreeSpinsNum:function(){
            if(freeSpinsClass_==null)return;
            freeSpinsClass_.updateFreeSpinsNum();
        },
        updateFreeSpinsData:function(){
            if(freeSpinsClass_==null)return;
            freeSpinsClass_.updateFreeSpinsData();
        },
        getFreeSpinsEval:function(update){
            if(freeSpinsClass_==null)return false;
            return freeSpinsClass_.getFreeSpinsEval(update);
        },
        getFsAdd:function(){
            if (freeSpinsClass_.getFsAdd!=null){
                return freeSpinsClass_.getFsAdd();
            }
            return 0;
        },
        addCollectedFs:function(){
            if (freeSpinsClass_.addCollectedFs!=null){
                freeSpinsClass_.addCollectedFs();
            }
        },
        addFs:function(num){
            if (freeSpinsClass_.addFs!=null){
                freeSpinsClass_.addFs(num);
            }
        },
        hideFs:function(){
            if (freeSpinsClass_.hideFs){
                freeSpinsClass_.hideFs();
            }
        },
        clearLineEval: function () {
            clearTimeout(lineEvalTOut_);
        },
        getEndPanelOn:function(){
            if (freeSpinsClass_.getEndPanelOn!=null){
                return freeSpinsClass_.getEndPanelOn();
            }else{
                return false;
            }
        },
        getType:function () {
            if (freeSpinsClass_.getType!=null)return freeSpinsClass_.getType();
            return "";
        },
        updateWin:function (amt) {
            if (freeSpinsClass_.updateWin){
                freeSpinsClass_.updateWin(amt);
            }
        },
        addToFsTotWon:function(amt){
            if (freeSpinsClass_.addToFsTotWon){
                freeSpinsClass_.addToFsTotWon(amt);
            }
        },
        hitCap:function (amt) {
            if (freeSpinsClass_.hitCap){
                freeSpinsClass_.hitCap(amt[0]);
            }
        }
    }

    initClass_();
    return me;
}
