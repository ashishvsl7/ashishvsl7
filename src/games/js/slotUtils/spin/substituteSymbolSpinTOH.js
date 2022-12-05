/**
 * KiS Framework, Created by Fabry on 27/04/2017.
 */
function SubstituteSymbolSpinTOH(gameRef, gameClass) {
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
    var timeTween=[];
    var triggerSymbol_=[];
    var isStopped_=false;
    var compulsiveCount_=0;
    var compulsiveTH_=3;
    var countRepeat_=[];
    var responseReceived;
    var startSlow_=-1;
    var setBlur_=[];
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
                reel_[i].swapSmb((resumeJson[i].smb[0].smb!=11)?resumeJson[i].smb[0].smb:resumeJson[i].smb[0].smb+"-"+communicationManager_.getResumeStatus().status.stage, 0);
                reel_[i].swapSmb((resumeJson[i].smb[1].smb!=11)?resumeJson[i].smb[1].smb:resumeJson[i].smb[1].smb+"-"+communicationManager_.getResumeStatus().status.stage, 1);
                reel_[i].swapSmb((resumeJson[i].smb[2].smb!=11)?resumeJson[i].smb[2].smb:resumeJson[i].smb[2].smb+"-"+communicationManager_.getResumeStatus().status.stage, 2);
            }
        }
    }


    function setReels_(){
        for (var i = 0; i < ReelConfig.numReels; i++) {
            delayRepeater[i]=spinManager_.getSpinParams().reelBaseInterval + spinManager_.getSpinParams().reelStopInterval*i;
            setSmb_(i);
        }
        twinReels_=twinReelManager_.parse(reel_);
        setTimeout(twinReelManager_.showTwinReels,200);
        responseReceived=true;
        if(gameClass_.setReelsCallback!=null)gameClass_.setReelsCallback();
        if (spinManager_.getSpinParams().stopEnabled==true) {
            if (gameClass_.getCompulsivePlayer()==false && freeSpinsManager_.getIsInFs()==false) {
                buttonManager_.applyState("STOP");
            }else{
                stopSpin_();
            }
        }
    }

    function startSpin_() {
        isStopped_=false;
        responseReceived=false;
        triggerSymbol_=[];
        reelArrived_=0;
        reelStarted_=0;
        gotError_=false;
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
            eventManager_.addEvent(spinReelSwipe_, ReelConfig.reelInterval * index,[[i],bounce]);
            index++;
        }
        for (var i = 0; i < reel; i++) {
            eventManager_.addEvent(spinReelSwipe_, spinManager_.getSpinParams().reelInterval * index, [[i],bounce]);
            index++;
        }
        eventManager_.triggerEvt();
    }

    function stopSpin_() {
        if ( Number(spinManager_.getSpinResp().bet)!=0)setCompulsive_();
        soundManager_.stopSound("reelSound");
        isStopped_=true;
        delayRepeater[0]=0;
        delayRepeater[1]=0;
        delayRepeater[2]=0;
        delayRepeater[3]=0;
        delayRepeater[4]=0;

        for (var i = 0; i < spinManager_.getSpinParams().numReels; i++) {
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
        var i = params[0];
        var bounce = params[1];

        if (i == ReelConfig.numReels - 1) {
            setTimeout(stopState_, 450);
            soundManager_.playSound("reelSound", 99);
        }

        tw_[i] = TweenMax.to(reel_[i].getAllIcons(), .2, {
            y: ((ReelConfig.icons[i] -(ReelConfig.numIconsOnTop+ ReelConfig.numIconsOnBottom)) * ReelConfig.reel.deltaY) + spinManager_.getSpinParams().reelSpinBounceMeasure,
            onComplete: onCompletePreFinal,
            onCompleteParams: [i], ease: Linear.easeNone
        });

    }

    function spinAfterPreMovement(params) {
        if (gotError_)return;
        var i=params[0];
        var bounce=params[1];

        if (i == ReelConfig.numReels - 1) {
            setTimeout(stopState_,450);
            soundManager_.playSound("reelSound",99);
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
            tw_[i] = TweenMax.fromTo(reel_[i].getAllIcons(),time, {y: ReelConfig.reel.deltaY*ReelConfig.numIcons},{
                y: ReelConfig.reel.deltaY*(ReelConfig.icons[i]),
                onComplete: onCompletePreFinal,
                onCompleteParams: [i],
                ease: Linear.easeInOut
            });
        }else{

            tw_[i] = TweenMax.fromTo(reel_[i].getAllIcons(), time, {y: ReelConfig.reel.deltaY*ReelConfig.numIcons}, {
                y: ReelConfig.reel.deltaY*(ReelConfig.icons[i]) + spinManager_.getSpinParams().reelSpinBounceMeasure,
                onComplete: ononCompleteFinalStep_,
                onCompleteParams: [i],
                ease: Linear.easeInOut
            });
        }
    }

    function ononCompleteFinalStep_(i){
        if (gotError_)return;
        setBlurrSmb_(i, false);
        var time = spinManager_.getSpinParams().reelSpinBounceTime;
        tw_[i] = TweenMax.to(reel_[i].getAllIcons(), time, {
            y: ((ReelConfig.icons[i]  +ReelConfig.numIcons  )* ReelConfig.reel.deltaY),
            onComplete: onCompleteFinal,
            onCompleteParams: [i],
            ease: Back.easeOut.config(spinManager_.getSpinParams().reelSpinBounceForce)
        });
    }

    function upperSmb_(i) {
        for (var j in animationMap_[i]) {
            if (animationMap_[i]!=undefined && animationMap_[i][j]!=null && animationMap_[i][j]!=undefined){
                reel_[i].getAllIcons().remove(animationMap_[i][j]);
            }
            animationMap_[i][j]={};
        }
        //special attributes to add to trigger SYmbol Object (depending on the game)
        if(gameClass_.upperSmbCallBack!=null)gameClass_.upperSmbCallBack(i);
    }

    function setSmb_(i) {
        if (gotError_)return;
        for (var a =0;a <3;a++) {
            if (spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb != null) {
                //create object
                var s = {
                    "subst": "previous",
                    "type": "anim",
                    "loop": false,
                    "killOnComplete": true,
                    "callBack": gameClass_.endBombAnimation,
                    "reels":[1,2,3],
                    "icon": [spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb, 14, spinManager_.getSpinReelResp().reel[i].smb[a].smb],
                    "anim": ["timer", "place","boom","still"],
                    "stage": 0,
                    "delay": 1.3
                }

                reel_[i].newSmb(spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb, a, s);
                gameClass_.setWaitForSubstitution();
            }else{

                var obj=gameClass_.getSubstIcon(spinManager_.getSpinReelResp().reel[i].smb[a].smb);
                var s = {
                    "subst": obj.subst,
                    "type": obj.type,
                    "loop": false,
                    "killOnComplete": true,
                    "callBack": obj.callBack,
                    "reels":obj.reels,
                    "icon": obj.icon,
                    "anim": obj.anim,
                    "stage": 0,
                    "delay": 1.3
                }

                reel_[i].newSmb(obj.subst, a,s);
                logger("place origin smb? "+ i + " smb "+a + " " +obj.subst+ " " + obj.reels );
            }
        }
    }

    function parseResume_(reel){
        resumeJson_=reel;
    }

    function onCompleteFinal(i) {
        if (gotError_)return;
        setBlurrSmb_(i,false);
        soundManager_.playSound("reelStop");
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
            logger("complete spin mov.------");
            balanceManager_.setCanUpdate(true);
            gameClass_.spinAnimEnd();

        }else if (reelArrived_ == reelStarted_-4){
            soundManager_.stopSound("reelSound");
        }
    }

    function getReels_() {
        return reel_;
    }

    function setBlurrSmb_(i,state){
        if (state==true && isStopped_==true)return;
        for (var j = 0; j <= ReelConfig.icons[i]; j++) {
            reel_[i].toggleSpin(j,state);
        }
    }

    function setCompulsive_() {
        if (compulsiveCount_<=compulsiveTH_)compulsiveCount_++;
    }

    function resetCompulsive_() {
        compulsiveCount_=0;
    }

    function getCompulsivePlayer_() {
        if (!getCanQuickPlay_())return false;
        if (compulsiveCount_>=compulsiveTH_) return true;
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
        getTriggerIcons:function (){
            return triggerSymbol_;
        },
        addTriggerIcon:function (obj){
            triggerSymbol_.push(obj);
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
