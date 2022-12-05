/**
 * KiS Framework,  Created by Fabry on 12/07/2016.
 */
function Respin(gameRef,gameClass){
    var game_=gameRef;
    var gameClass_=gameClass;
    var freeSpinNum_=0;
    var isInFs_=false;
    var fsWon_=false;
    var fsWonNum_=0;
    var wasOnFs=false;
    var startBalance_=0;
    var win_;
    var mult_;
    var emitter_=[];
    var mainGroup_;
    var bgGroup_;
    var respAnim_;
    
    function initClass_(){
        mainGroup_= displayManager_.getGroup("respinPanel");
        bgGroup_=displayManager_.getGroup("respin");
    }

    function parse_(json){

        if (json.freeSpin!=null){
            //inside FS
            freeSpinNum_=json.freeSpin.num;
            if (json.freeSpin.won!=null && json.freeSpin.totalWin>0){
                win_=json.freeSpin.totalWin/100;
            }
            if (json.freeSpin.multiplier!=null && json.freeSpin.multiplier>0){
                mult_=json.freeSpin.multiplier;
            }
        }else if (json.status!=null){
            if (json.status.numFS!=null){
                freeSpinNum_=json.status.numFS;
            }else{
                freeSpinNum_=json.status.collected;
            }
        }
    }
    
    function toggleFreeSpins_ () {
        soundManager_.playSound("fsWin");
        mainGroup_.visible=true;
        bgGroup_.visible=true;
        respAnim_ = game_.add.sprite(displayManager.groups.respinPanel.x, displayManager.groups.respinPanel.y, displayManager.groups.respinPanel.name);
        //TweenMax.to(mainGroup_,.2,{y:0,ease:Bounce.easeOut});
        respAnim_.anchor.set(.5,.5);
        respAnim_.animations.add("anim");
        respAnim_.animations.play("anim", (gameClass_.getCompulsivePlayer())?52:24, false, true);//todo parametric loop
        respAnim_.scale.x=1;
        respAnim_.scale.y=1;
        mainGroup_.add(respAnim_);


        var index=0;
        for (var a in displayManager.groups.respin.objects){
            if (Util.getRandomInt(1,1200)>190+(index*3)){
                var name=displayManager.groups.respin.objects[a].name;
                if (game_.cache.checkImageKey(name) == true) {
                    var ob = game_.add.sprite(displayManager.groups.respin.objects[a].x, displayManager.groups.respin.objects[a].y,name);
                    ob.anchor.set(.5, .5);
                    ob.animations.add("anim");
                    ob.alpha =(displayManager.groups.respin.objects[a].alpha!=null)?displayManager.groups.respin.objects[a].alpha:1;
                    ob.scale.x =(displayManager.groups.respin.objects[a].scaleX!=null)?displayManager.groups.respin.objects[a].scaleX:.6;
                    ob.scale.y =(displayManager.groups.respin.objects[a].scaleY!=null)?displayManager.groups.respin.objects[a].scaleY:.6;
                    mainGroup_.add(ob);
                    ob.animations.play("anim", (displayManager.groups.respin.objects[a].fps!=null)?displayManager.groups.respin.objects[a].fps:24,false, true, null, null);//todo parametric loop
                    index++;
                }
            }
        }

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
            soundManager_.mixBgSound("bgFs", 500, 100);
        }
    }

    function updateFreeSpinsNum_ (){
    }

    function showFsTotWonPanel_(){
        hideTotPanel_();
    }

    function hideTotPanel_(){
        isInFs_ = false;
    }

    function completeDidePanel_(){
        gameClass_.hideFs();
        isInFs_ = false;
    }

    function showFsPanel_(){
       // mainGroup_.y=-1000;
    }

    function hideFsPanel_(){
    }

    function getFreeSpinsEval_  (update) {
        if (isInFs_ || fsWon_){
            freeSpinNum_=freeSpinNum_-1;
            if (freeSpinNum_ >1 && fsWon_==false) {
                //displayManager_.getText("fsValue").setText(freeSpinNum_);
                return true;
            }else if (fsWon_){
                toggleFreeSpins_();
                return true;
            }else{
                winManager_.updateWinAmt(win_);
                gcmCalls_("PAID", winManager_.getWinAmtCash(),true);
                if(update){
                    balanceManager_.balanceBonusUpdate(win_);
                }else{
                    balanceManager_.forceBalanceAfterFS(win_);
                }
                //toggleFreeSpins_();
            }
            setTimeout(soundManager_.mixBgSound,1000,"bgSlot", 1000, 1000);
        }

        wasOnFs=true;
        fsWon_=false;
        isInFs_=false;
        return false;
    }

    function toggleBackFs_(){

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
                showFsPanel();
                evt.addEvtForce(me.hideFsPanel,displayManager.groups.fsWonPanel.duration * 1000);
                evt.addEvent(gameClass_.fsEval,700);
                evt.triggerEvt();
            }else{
                setTimeout(showFsPanel1_,100,[evt]);
            }
        }else{
            showFsPanel();
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
        showFsPanel1:showFsPanel1_,
        hideFsPanel:hideFsPanel_,
        toggleBackFs:toggleBackFs_,
        endAnimHandle:endAnimHandle_,
        resumeFs:function(){
            isInFs_=true;
        },
        getFsNumber:function(){
            return freeSpinNum_;
        },
        getIsInFs:function(){
            return isInFs_;
        },
        getFsWon:function(){
            return fsWon_;
        },
        fsWon:function(){
            autoPlayManager_.toggleFeature(true);
            fsWonNum_=1;
            fsWon_=true;
        }

    }
    initClass_();
    return me;
}
