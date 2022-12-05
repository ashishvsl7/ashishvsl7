/**
 * KiS Framework, Created by Fabry on 28/02/2018.
 *
 *
 * just spin class that handles different spin sounds
 *
 *
 */
function OstaraSpin(gameRef, gameClass) {
    var game_ = gameRef;
    var gameClass_ = gameClass;
    var eventManager_;
    var reel_ = [];
    var animationMap_=[];
    var tw_ = [];
    var reelArrived_=0;
    var reelStarted_=0;
    var debugReelSmb= ReelConfig.spinResult;
    var twinReels_=[];
    var mask_=null;
    var delayRepeater=[];

    var slowDownReel=[];
    var iconSound=[];
    var reelSound=[];

    var timeTween=[];
    var triggerSymbol_=[];
    var isStopped_=false;
    var compulsiveCount_=0;
    var compulsiveTH_=3;
    var countRepeat_=[];
    var responseReceived;
    var startSlow_=-1;
    var setBlur_=[];
    var iStopReelSound_=0;
    var gotError_=false;

    function initClass_() {
        eventManager_ = new EventManager();
        if (debugReelSmb!=null && $(".debug")!=null ) {
            for (var i = 0; i < ReelConfig.numReels; i++) {
                for (var j = 0; j < ReelConfig.numIcons; j++) {
                    document.getElementsByName("d"+i + j)[0].value=debugReelSmb[i][j];
                    debugReelSmb[i][j]=document.getElementsByName("d"+i + j)[0];
                }
            }
        }else{
            $(".debug").css("visibility","hidden");//just in case...
        }
    }

    function createReels_() {
        var index = 0;
        for (var i = 0; i < ReelConfig.numReels; i++) {
            reel_[i] = new Reel(game_, gameClass, i);
            animationMap_[i]=[];
            for (var j = 0; j <= ReelConfig.icons[i]; j++) {
                var ind = parseInt(Math.random() * ReelConfig.numIcon) + 1;
                reel_[i].setIcon(j, ind);
                animationMap_[i][j]={};
            }
            for (j = 0; j < ReelConfig.numIcons; j++) {
                var ind = parseInt(Math.random() * ReelConfig.numIcon) + 1;
                reel_[i].setIcon("lowerIcon" +j, ind);
                animationMap_[i]["lowerIcon"+j]={};
                reel_[i].setIcon("upperIcon" +j, ind);
                animationMap_[i]["upperIcon"+j]={};
            }
        }
        if (communicationManager_.getResumeStatus().status!=null && communicationManager_.getResumeStatus().status.reels!=null) {
            var resumeJson = communicationManager_.getResumeStatus().status.reels;
            for (var i = 0; i < resumeJson.length; i++) {
                for (var j=0;j<ReelConfig.numIcons;j++){
                    if(resumeJson[i].smb[j]!=undefined)reel_[i].swapSmb(resumeJson[i].smb[j].smb, j);
                }
            }
        }
    }

    function setReels_(){
        if (gameClass_.getStickyWildNumber!=null)gameClass_.getStickyWildNumber(spinManager_.getReels());
        for (var i = 0; i < ReelConfig.numReels; i++) {
            delayRepeater[i]=spinManager_.getSpinParams().reelBaseInterval  + spinManager_.getSpinParams().reelStopInterval*i;
            setSmb_(i);
        }
        var obj={};



        if (gameClass_.setDelRepeter!=null && gameClass_.getCompulsivePlayer()==false ) {//slow down reels waiting for feature icon
            obj.delayRepeater = delayRepeater;
            obj = gameClass_.setDelRepeter(obj);
            delayRepeater = obj.delayRepeater;
            slowDownReel=obj.slowDownReel;
            iconSound=obj.iconSound;
            reelSound=obj.reelSound;
        }

        twinReels_=twinReelManager_.parse(reel_);
        setTimeout(twinReelManager_.showTwinReels,200);
        responseReceived=true;
        if(gameClass_.setReelsCallback!=null)gameClass_.setReelsCallback();
        if (spinManager_.getSpinParams().stopEnabled==true) {
            if (gameClass_.getCompulsivePlayer()==false && freeSpinsManager_.getIsInFs()==false) {
                buttonManager_.applyState("STOP");
            }else{
                var wait=(gameClass_.waitForSpin!=null)?gameClass_.waitForSpin():false;
                if (wait==false)stopSpin_();
            }
        }
        gameClass_.poppinUpEgg();// start the egg
    }

    function startSpin_() {
        isStopped_=false;
        responseReceived=false;
        triggerSymbol_=[];
        reelArrived_=0;
        reelStarted_=0;
        gotError_=false;
        startReel();
        if (gameClass_.getFsLevel()<2) {
            if (iStopReelSound_!=0)stopReelSound_();
            soundManager_.playSound("reelSound" + gameClass_.getFsLevel(), (gameClass_.getCompulsivePlayer()) ? null : 99);
        }else{
            if (iStopReelSound_==0){
                soundManager_.getBGSound("bgSlot3").fadeInBgSoundExternal(250, .7, soundManager_.getBGSound("bgSlot").getSound().currentTime,null );
            }else{
                clearTimeout(iStopReelSound_);
                iStopReelSound_= setTimeout(stopReelSound_,5000);
            }
        }

        for (var i = 0; i < ReelConfig.numReels; i++) {
            for (var j = 0; j <= ReelConfig.icons[i]; j++) {
                var ind = parseInt(Math.random() * ReelConfig.numIcon-1) +1;
                reel_[i].replaceIcon(j,ind);
            }
            if (wildManager_.getWildReelStickyNum(i)==0) {
                timeTween[i]=spinManager_.getSpinParams().reelLoopInterval;
                delayRepeater[i]=99;
                countRepeat_[i]=0;
                setBlur_[i]=false;
                setTimeout(spinReel_ , (gameClass_.getCompulsivePlayer())?0:spinManager_.getSpinParams().reelInterval *i,( [[i], true]));
            }
        }
    }

    function startSpinFromSwipe_(reel,bounce) {
        isStopped_=false;
        triggerSymbol_=[];
        var index=0;
        reelArrived_=0;
        reelStarted_=0;
        eventManager_.clearEvt();
        for (var i = reel; i < ReelConfig.numReels; i++) {
            eventManager_.addEvent(spinReelSwipe_, spinManager_.getSpinParams().reelInterval * index,[[i],bounce]);
            index++;
        }
        for (var i = 0; i < reel; i++) {
            eventManager_.addEvent(spinReelSwipe_, spinManager_.getSpinParams().reelInterval * index, [[i],bounce]);
            index++;
        }
        eventManager_.triggerEvt();
    }

    function stopSpin_() {
        gameClass_.hasStopped();
        if ( Number(spinManager_.getSpinResp().bet)!=0)setCompulsive_();
        isStopped_=true;
        delayRepeater[0]=0;
        delayRepeater[1]=0;
        delayRepeater[2]=0;
        delayRepeater[3]=0;
        delayRepeater[4]=0;
        for (var i = 0; i < ReelConfig.numReels; i++) {
            if (tw_[i] != null)tw_[i].timeScale(4);
        }
    }

    function spinReelSwipe_(params) {
        triggerSymbol_=[];
        delayRepeater[0]=0;
        delayRepeater[1]=0;
        delayRepeater[2]=0;
        delayRepeater[3]=0;//set to 1 to slow down, after that same number if no symbols present otherwise +1
        delayRepeater[4]=0;
        var i=params[0];
        reelStarted_++;
        if (spinManager_.getSpinParams().reelPreMovement>0){
            tw_[i] = TweenMax.to(reel_[i].getAllIcons(), spinManager_.getSpinParams().reelPreMovementTime, {
                y: reel_[i].getAllIcons().y-spinManager_.getSpinParams().reelPreMovement,
                onComplete: spinSwipeAfterPreMovement,
                onCompleteParams: [params],ease:Circ.easeInOut
            });
        }else{
            spinSwipeAfterPreMovement(params);
        }
    }

    function spinReel_(params) {
        if (gotError_)return;
        triggerSymbol_=[];
        var i=params[0];
        reelStarted_++;
        if (spinManager_.getSpinParams().reelPreMovement>0){
            tw_[i] = TweenMax.to(reel_[i].getAllIcons(), spinManager_.getSpinParams().reelPreMovementTime, {
                y: reel_[i].getAllIcons().y-spinManager_.getSpinParams().reelPreMovement,
                onComplete: spinAfterPreMovement,
                onCompleteParams: [params],ease:Circ.easeInOut
            });
        }else{
            spinAfterPreMovement(params);
        }
    }

    function startReel(params){
        if (gotError_)return;
        //just set the blurr on spinning images
        setTimeout(setBlurrSmb_,(gameClass_.getCompulsivePlayer())?100: 500, params ,true);

    }

    function stopState_(){
        winManager_.clearWin();
    }

    function spinSwipeAfterPreMovement(params) {
        if (gotError_)return;
        var i=params[0];
        var bounce=params[1];

        if (i == ReelConfig.numReels - 1) {
            setTimeout(stopState_,450);
        }

        tw_[i] = TweenMax.to(reel_[i].getAllIcons(), .2, {
            y: ((ReelConfig.icons[i] -(ReelConfig.numIconsOnTop+ ReelConfig.numIconsOnBottom)) * ReelConfig.reel.deltaY) + spinManager_.getSpinParams().reelSpinBounceMeasure,
            onComplete: onCompletePreFinal,
            onCompleteParams: [i], ease:Linear.easeNone
        });

    }

    function spinAfterPreMovement(params) {
        if (gotError_)return;
        var i=params[0];
        var bounce=params[1];

        if (i == ReelConfig.numReels - 1) {
            setTimeout(stopState_,450);
        }

        var time =spinManager_.getSpinParams().reelSecondMovementTime;
        if (twinReels_!=null && twinReels_[i]!=null){
            //tweenReels
        }
        //version with negative bounce
        tw_[i] = TweenMax.to(reel_[i].getAllIcons(), time, {
            y: ReelConfig.reel.deltaY*ReelConfig.numIcons,
            onComplete: onCompletePreFinal,
            onCompleteParams: [i], ease: Sine.easeIn
        });

    }

    function onCompletePreFinal(i) {
        if (gotError_)return;
        if (setBlur_[i]==false){
            setBlurrSmb_(i,true);
            setBlur_[i]=true;
        }
        var time= timeTween[i];
        if(responseReceived)countRepeat_[i] = countRepeat_[i] + 1;
        if (countRepeat_[i] <= delayRepeater[i]) {
            if (slowDownReel[i]==true){
                time=(time/10);
                //play accellerator sound

                slowDownReel[i]=false;
            }
            tw_[i] = TweenMax.fromTo(reel_[i].getAllIcons(),time, {y: ReelConfig.reel.deltaY*ReelConfig.numIcons},{
                y: ReelConfig.reel.deltaY*(ReelConfig.icons[i] ),
                onComplete: onCompletePreFinal,
                onCompleteParams: [i],
                ease: Linear.easeInOut
            });
        }else {

            tw_[i] = TweenMax.fromTo(reel_[i].getAllIcons(), time, {y: ReelConfig.reel.deltaY*ReelConfig.numIcons}, {
                y: ReelConfig.reel.deltaY*(ReelConfig.icons[i] ) + spinManager_.getSpinParams().reelSpinBounceMeasure,
                onComplete: ononCompleteFinalStep_,
                onCompleteParams: [i],
                ease: Linear.easeInOut
            });
        }
    }

    function ononCompleteFinalStep_(i){
        if (gotError_)return;
        if (i < 4 && iconSound[i] != true && reelSound[i] == true) {
            soundManager_.playSound("reelSoundFast1");
        }
        reelSound[i] = false;
        setBlurrSmb_(i,false);

        var time = spinManager_.getSpinParams().reelSpinBounceTime;
        tw_[i] = TweenMax.to(reel_[i].getAllIcons(),time, {
            y: ((ReelConfig.icons[i]  +ReelConfig.numIcons  )* ReelConfig.reel.deltaY),
            onStart:onStartFinal,
            onStartParams:[i],
            onComplete: onCompleteFinal,
            onCompleteParams: [i],
            ease: Back.easeOut.config(spinManager_.getSpinParams().reelSpinBounceForce)
        });
    }

    function onStartFinal(i) {
        if (gameClass_.getCompulsivePlayer()==false){
            setTimeout(delaySound,200);
        }else{
            delaySound();
        }

    }

    function delaySound(){
        soundManager_.playSound("reelStop");
    }

    function upperSmb_(i) {
        var s=[];
        for (var j in animationMap_[i]) {
            if (animationMap_[i]!=undefined && animationMap_[i][j]!=null && animationMap_[i][j]!=undefined){
                reel_[i].getAllIcons().remove(animationMap_[i][j]);
            }
            animationMap_[i][j]={};
        }
        //
        //special attributes to add to trigger SYmbol Object (depending on the game)
        if(gameClass_.upperSmbCallBack!=null)gameClass_.upperSmbCallBack(i);
    }

    function setBlurrSmb_(i,state){
        for (var j = 0; j <= ReelConfig.icons[i]; j++) {
            reel_[i].toggleSpin(j,state);
        }
    }

    function setSmb_(i) {
        var smb0=(spinManager_.getSpinReelResp().reel[i].smb[0].prevsmb!=null)?spinManager_.getSpinReelResp().reel[i].smb[0].prevsmb:spinManager_.getSpinReelResp().reel[i].smb[0].smb;
        var smb1=(spinManager_.getSpinReelResp().reel[i].smb[1].prevsmb!=null)?spinManager_.getSpinReelResp().reel[i].smb[1].prevsmb:spinManager_.getSpinReelResp().reel[i].smb[1].smb;
        var smb2=(spinManager_.getSpinReelResp().reel[i].smb[2].prevsmb!=null)?spinManager_.getSpinReelResp().reel[i].smb[2].prevsmb:spinManager_.getSpinReelResp().reel[i].smb[2].smb;

        if (spinManager_.getSpinReelResp().reel[i].smb[0].notShow!=true){
            reel_[i].newSmb(smb0, 0);
        }else{
            reel_[i].removeSymbol(0);
        }
        if (spinManager_.getSpinReelResp().reel[i].smb[1].notShow!=true){
            reel_[i].newSmb(smb1, 1);
        }else{
            reel_[i].removeSymbol(1);
        }
        if (spinManager_.getSpinReelResp().reel[i].smb[2].notShow!=true){
            reel_[i].newSmb(smb2, 2);
        }else{
            reel_[i].removeSymbol(2);
        }
    }

    function parseResume_(reel){
        resumeJson_=reel;
    }

    function stopReelSound_(){
        clearTimeout(iStopReelSound_);
        iStopReelSound_=0;
        if(soundManager_.getBGSound("bgSlot3")!=null)soundManager_.getBGSound("bgSlot3").fadeOutBgSoundExternal(2000,0);
    }

    function onCompleteFinal(i) {
        if (gotError_)return;
        if (i==4) {
            if (gameClass_.getFsLevel() < 2) {
                soundManager_.stopSound("reelSound" + gameClass_.getFsLevel());
            } else {
                clearTimeout(iStopReelSound_);
                iStopReelSound_ = setTimeout(stopReelSound_, 5000);
            }
        }
        if (iconSound[i]==true){
            soundManager_.playSound("reelSoundFast");//soundManager_.playSound("fsWin");
            iconSound[i]=false;
        }

        setBlurrSmb_(i,false);
        tw_[i]=null;
        reelArrived_++;
        framework.updateSmallMessageText("");
        upperSmb_(i);  //move bottoom smb up
        reel_[i].resetStartPos();
        if (i== startSlow_){
            for (var a =(Number(i)+1);a<= ReelConfig.numReels;a++)timeTween[a]=timeTween[a]-.1;
            startSlow_++;
        }

        if (!isStopped_)resetCompulsive_();
        if (reelArrived_ >= reelStarted_){
            //soundManager_.stopSound("reelSoundFast");
            logger("complete spin mov.------");
            gameClass_.spinAnimEnd();
            balanceManager_.setCanUpdate(true);

        }
    }

    function getReels_() {
        return reel_;
    }

    function setCompulsive_() {
        if (compulsiveCount_<=compulsiveTH_)compulsiveCount_++;
    }

    function resetCompulsive_() {
        compulsiveCount_=0;
    }

    function getCompulsivePlayer_() {
        if (!getCanQuickPlay_())return false;
        if (compulsiveCount_>=compulsiveTH_)return true;
        return false;
    }

    function stopSpinForError_(){
        gotError_=true;
        for (var i = 0; i < ReelConfig.numReels; i++) {
            setBlurrSmb_(i, false);
            for (var j = 0; j < ReelConfig.numIcons; j++) {
                //reel_[i].removeSymbol(j);
                reel_[i].getSymbol(j).visible=true;
                reel_[i].getSymbol(j).alpha=1;

            }
            if(tw_[i]!=null)tw_[i].kill();
            tw_[i] = null;
            reel_[i].resetStartPos();
        }
        framework.updateSmallMessageText("");
        soundManager_.stopSound("reelSound");
        balanceManager_.setCanUpdate(true);
    }

    var me = {
        createReels: createReels_,
        parseResume:parseResume_,
        startSpin: startSpin_,
        stopSpin: stopSpin_,
        spinReel: spinReel_,
        getReels: getReels_,
        setReels:setReels_,
        startSpinFromSwipe:startSpinFromSwipe_,
        getCompulsivePlayer:getCompulsivePlayer_,
        stopSpinForError:stopSpinForError_,
        addTriggerIcon:function (obj){
            triggerSymbol_.push(obj);
        },
        getTriggerIcons:function (){
            return triggerSymbol_;
        },
        getAllMap:function (){
            return animationMap_;
        },
        getAnimationMap:function(reel,icon){
            return animationMap_[reel][icon];
        },
        setAnimationMap:function(reel,icon,anim){
            animationMap_[reel][icon]=anim;
        }




    }
    initClass_();
    return me;
}