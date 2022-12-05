/**
 * KiS Framework, Created by Fabry on 31/03/2017.
 */
function MegaWayBasicTumblingSpin(gameRef, gameClass) {
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
    var c=[];
    var gotError_=false;
    var tumblingEventManager_;
    var timeSpin_=0;
    var reelSound_=[];
    var auto_=false;
    var size_=[];
    size_[0]=0;
    size_[1]=0;
    size_[2]=280;
    size_[3]=187;
    size_[4]=140;
    size_[5]=112;
    size_[6]=93.3;
    size_[7]=80;


    var numIcon_=[];
    var height_=0;
    var width_=128;
    var tumbleReset_=false;

    function initClass_() {
        eventManager_ = new EventManager();
        tumblingEventManager_= new EventManager();
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
            numIcon_[i]=Util.getRandomInt(2,7);
            if (communicationManager_.getResumeStatus().status!=null && communicationManager_.getResumeStatus().status.reels!=null) {
                numIcon_[i] = communicationManager_.getResumeStatus().status.reels[i].smb.length;
            }

            reel_[i] = new MegaWaysBasicTumblingReel(game_, gameClass, i,i,null,numIcon_[i]);
            animationMap_[i]=[];
            c[i]=[];
            for (var j = 0; j < ReelConfig.icons[i]; j++) {
                var ind = parseInt(Math.random() * ReelConfig.numIcon) + 1;
                reel_[i].setIcon(j, ind);
                animationMap_[i][j]={};
                c[i][j] = ReelConfig.reel.deltaY_0 - (size_[numIcon_[i]]  * j)+ size_[numIcon_[i]] /2;//tunbling positions
            }
            for (var j = 1; j <= ReelConfig.icons[i]; j++) {
                c[i][ -1*(j)]=j;
            }
        }

        if (communicationManager_.getResumeStatus().status!=null && communicationManager_.getResumeStatus().status.reels!=null) {
            var resumeJson = communicationManager_.getResumeStatus().status.reels;
            for (var i = 0; i < resumeJson.length; i++) {
                for (var j=0;j< numIcon_[i] ;j++){
                    //console.log(i + " "+j + " "+resumeJson[i].smb[j].smb)
                    if(resumeJson[i].smb[j]!=undefined)reel_[i].swapSmb(resumeJson[i].smb[j].smb, j);
                }
            }
        }

    }

    function setReels_(){
        var now = new Date().getTime();

        if (getCanQuickPlay_() || now-timeSpin_>1500 ){
            setReelsNow_();
        }else{
            setTimeout(setReels_,200);
        }

    }

    function setReelsNow_(){
        if (gameClass_.getIsTumbling()){
            gameClass_.spinAnimEndAfterTumbling();
            gameClass_.setTumblingReq(false);//answer recaived flag
            return;
        }
        if (gameClass_.getStickyWildNumber!=null)gameClass_.getStickyWildNumber(spinManager_.getReels());

        for (var i = 0; i < ReelConfig.numReels; i++) {
            if (spinManager_.getSpinReelResp().reel[i]) {
                delayRepeater[i] = spinManager_.getSpinParams().reelBaseInterval + spinManager_.getSpinParams().reelStopInterval * i;
            }
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

        if(gameClass_.setReelsCallback!=null)gameClass_.setReelsCallback();
        if (gameClass_.getLocked!=null && gameClass_.getLocked!=undefined ){
            if (gameClass_.getLocked()==false){
                responseReceived=true;
            }else{
                setTimeout(lockLater_,2000);
            }
        }else{
            responseReceived=true;
        }

        if (spinManager_.getSpinParams().stopEnabled==true) {
            if (gameClass_.getCompulsivePlayer()==false) {
                buttonManager_.applyState("STOP");
            }else{
                var wait=(gameClass_.waitForSpin!=null)?gameClass_.waitForSpin():false;
                if (wait==false)  stopSpin_();
            }
        }
    }

    function lockLater_(){
        responseReceived=true;
    }

    function startSpin_() {
        gotError_=false;
        isStopped_ = false;
        responseReceived = false;
        triggerSymbol_ = [];
        reelArrived_ = 0;
        reelStarted_ = 0;
        timeSpin_=new Date().getTime();
        startReel();

        soundManager_.playSound("reelSound", (gameClass_.getCompulsivePlayer()) ? null : 99);
        gameClass_.startSpinSound();
        for (var i = 0; i < ReelConfig.numReels; i++) {
            for (var j = 0; j < ReelConfig.icons[i]; j++) {
                var ind = parseInt(Math.random() * ReelConfig.numIcon-1) +1;
                if(reel_[i].getSymbol(j).dispIcon==undefined)reel_[i].replaceIcon(j,ind);
            }
            //todo if (wildManager_.getWildReelStickyNum(i)==0) {
            timeTween[i] = spinManager_.getSpinParams().reelLoopInterval;
            delayRepeater[i] = 99;
            countRepeat_[i] = 0;
            setBlur_[i] = false;
            spinReel_([[i], true]);
            //}
        }
    }

    function createReelsAfterSpin_(reels){
        if (gotError_)return;
        console.log("reset symbols")
        for (var i = 0; i < ReelConfig.numReels; i++) {
            reel_[i].clearGroup();  //needed to prevent lost of focus error
            for (var j = 0; j < ReelConfig.icons[i]; j++) {
                var ind = parseInt(Math.random() *numIcon_[i]) + 1;
                var o=reel_[i].setIcon(j, ind);
            }
        }

        var resumeJson = reels;

        for (var i = 0; i < resumeJson.length; i++) {
            for (var a=0; a < resumeJson[i].smb.length; a++){
                resetSmb_(resumeJson,i,a);
            }
        }
    }

    function resetSmb_(resumeJson,i,a){
        var obj={};
        if(resumeJson[i].smb[a]!=undefined) {
            obj = null;
            reel_[i].swapSmb( (resumeJson[i].smb[a].prevsmb!=undefined)?resumeJson[i].smb[a].prevsmb: resumeJson[i].smb[a].smb, a, obj);
        }
    }

    function startSpinFromSwipe_(reel,bounce) {
        if (gotError_)return;
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
        if (gotError_)return;
        if ( Number(spinManager_.getSpinResp().bet)!=0)setCompulsive_();
        isStopped_=true;
        for (var i = 0; i < ReelConfig.numReels; i++) {
            delayRepeater[i]=0;//set to 1 to slow down, after that same number if no symbols present otherwise +1
            if (tw_[i] != null)tw_[i].timeScale(4);
        }
    }

    function spinReelSwipe_(params) {
        if (gotError_)return;
        triggerSymbol_=[];
        for (var i = 0; i < ReelConfig.numReels; i++)delayRepeater[i]=0;
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
            y: ((ReelConfig.icons[i] -(3+ReelConfig.numIconsOnTop+ ReelConfig.numIconsOnBottom)) * size_[numIcon_[i]]) + spinManager_.getSpinParams().reelSpinBounceMeasure,
            onComplete: onCompletePreFinal,
            onCompleteParams: [i], ease:Linear.easeNone
        });

        for (var ii = 0; ii < ReelConfig.numReels; ii++) reel_[ii].removeButton();
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
            y:  size_[numIcon_[i]]*numIcon_[i],
            onComplete: onCompletePreFinal,
            onCompleteParams: [i], ease: Sine.easeIn
        });

        for (var ii = 0; ii < ReelConfig.numReels; ii++) reel_[ii].removeButton();
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
            tw_[i] = TweenMax.fromTo(reel_[i].getAllIcons(),time, {y: size_[numIcon_[i]]*numIcon_[i]},{
                y:  size_[numIcon_[i]]*(ReelConfig.icons[i] -(3+numIcon_[i]+ReelConfig.numIconsOnTop+ ReelConfig.numIconsOnBottom)),
                onComplete: onCompletePreFinal,
                onCompleteParams: [i],
                ease: Linear.easeInOut
            });
        }else {
            if (spinManager_.getSpinReelResp().reel[i]) {
                numIcon_[i] = spinManager_.getSpinReelResp().reel[i].smb.length;
                reel_[i].updateReelSize(numIcon_[i]);

                setSmb_(i);

                for (var j = 0; j < ReelConfig.icons[i]; j++) {
                    c[i][j] = ReelConfig.reel.deltaY_0 - (size_[numIcon_[i]] * j) + size_[numIcon_[i]] / 2;//tunbling positions
                }
                for (var j = 1; j <= ReelConfig.icons[i]; j++) {
                    c[i][ -1*(j)]=j;
                }

            }
            tw_[i] = TweenMax.fromTo(reel_[i].getAllIcons(), time, {y:  size_[numIcon_[i]]*numIcon_[i]}, {
                y:  size_[numIcon_[i]]*(ReelConfig.icons[i] -(3+numIcon_[i]+ReelConfig.numIconsOnTop+ ReelConfig.numIconsOnBottom)) + spinManager_.getSpinParams().reelSpinBounceMeasure,
                onComplete: ononCompleteFinalStep_,
                onCompleteParams: [i],
                ease: Linear.easeInOut
            });
        }
    }

    function ononCompleteFinalStep_(i){
        gameClass.setReelsCallback(i);
        if (gotError_)return;
        if (i < ReelConfig.numReels && iconSound[i] != true && reelSound[i] == true) {
            soundManager_.playSound("reelSoundFast1");
        }
        reelSound[i] = false;
        setBlurrSmb_(i,false);
        soundManager_.playSound("reelStop");
        var time = spinManager_.getSpinParams().reelSpinBounceTime;
        tw_[i] = TweenMax.to(reel_[i].getAllIcons(),time, {
            y: ((ReelConfig.icons[i] -(numIcon_[i]+ReelConfig.numIconsOnTop+ ReelConfig.numIconsOnBottom)) * size_[numIcon_[i]]),
            onStart:onStartFinal,
            onStartParams:[i],
            onComplete: onCompleteFinal,
            onCompleteParams: [i],
            ease: Back.easeOut.config(spinManager_.getSpinParams().reelSpinBounceForce)
        });
    }

    function onStartFinal(i) {

    }

    function upperSmb_(i) {
        var s=[];
        for (var j = 0; j < ReelConfig.icons[i]; j++) {
            if (animationMap_[i]!=undefined && animationMap_[i][j]!=null && animationMap_[i][j]!=undefined){
                reel_[i].getAllIcons().remove(animationMap_[i][j]);
            }
            animationMap_[i][j]={};
        }
        //special attributes to add to trigger SYmbol Object (depending on the game)
        if(gameClass_.upperSmbCallBack!=null)gameClass_.upperSmbCallBack(i);
    }

    function setBlurrSmb_(i,state){
        for (var j = 0; j < ReelConfig.icons[i]; j++) {
            reel_[i].toggleSpin(j,state);
        }
    }

    function setSmb_(j) {
        for (var i=0;i<numIcon_[j];i++){
            if (spinManager_.getSpinReelResp().reel[j].smb[i]!=null){
                var smb=(spinManager_.getSpinReelResp().reel[j].smb[i].prevsmb!=null)?spinManager_.getSpinReelResp().reel[j].smb[i].prevsmb:spinManager_.getSpinReelResp().reel[j].smb[i].smb;
                reel_[j].newSmb(smb, i);
                reel_[j].toggleSpin(i,true);
            }
        }
    }

    function parseResume_(reel){
        resumeJson_=reel;
    }

    function onCompleteFinal(i) {
        if (gotError_)return;
        soundManager_.stopSound("reelSound");
        if (iconSound[i]==true){
            soundManager_.playSound("reelSoundFast");//soundManager_.playSound("fsWin");
            iconSound[i]=false;
        }
        setBlurrSmb_(i,false);
        tw_[i]=null;
        reelArrived_++;
        tumbleReset_=true;//no tumble on spin
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
        }
    }

    function tumble_(reel,obj,reels) {
        if (gotError_)return;
        var time=(gameClass_.getCompulsivePlayer())?.25:.35;
        freePos=[];
        freePosIndex=getSmallest_(obj.index)-1;
        var dust=false;
        var numNewIcons=0;

        if (reel==0)tumbleReset_=false;
        for (var b = getSmallest_(obj.index); b<= numIcon_[reel]+obj.index.length;b++) {
            var ind = isTumbling(obj.index,b);
            if ( ind>=0) {   //tumbling icon
                reel_[reel].getArr()[obj.index[ind]].visible = false; //icon
                if (obj.tumbleObj[ind]!=null){
                    if (obj.tumbleObj[ind].smbNum==7 || obj.tumbleObj[ind].smbNum==8 || obj.tumbleObj[ind].smbNum==9) {
                        var fr=reel_[reel].getFrameMW(obj.tumbleObj[ind].iconNum)[numIcon_[reel]];
                        fadeIcon_(fr);
                        fadeIcon_(obj.tumbleObj[ind]);
                        fadeIcon_(obj.tumbleObj[ind].F);
                    }else{
                        fallIcon_(obj.tumbleObj[ind]);
                    }
                }
            }else{
                if (b>numIcon_[reel]) {
                    numNewIcons++;
                    //outside reels, put a new symbol first
                    var newSmb;

                    for ( var i =0;i<numIcon_[reel];i++){
                        if (freePosIndex == i) newSmb =(obj.newSmbs.smb[numIcon_[reel]-1-i].prevsmb!=undefined)?obj.newSmbs.smb[numIcon_[reel]-1-i].prevsmb:obj.newSmbs.smb[numIcon_[reel]-1-i].smb;
                    }
                    var a = reel_[reel].swapSmb(newSmb, b);
                }
                //free = free -1;
                TweenMax.to( reel_[reel].getArr()[b],time,{delay:.5,y:c[reel][freePosIndex+1],ease:Bounce.easeOut,onComplete:changeIcon,onCompleteParams:[reel,b,(freePosIndex+1)]});

                reel_[reel].getTileMW(b)[numIcon_[reel]].visible=true;
                if (reel_[reel].getArr()[b].smbNum==7 || reel_[reel].getArr()[b]. smbNum==8 || reel_[reel].getArr()[b].smbNum==9){
                    TweenMax.to( reel_[reel].getFrameMW(b)[numIcon_[reel]] ,time,{delay:.5,y:c[reel][freePosIndex+1],ease:Bounce.easeOut});
                }else{
                    TweenMax.to( reel_[reel].getTileMW(b)[numIcon_[reel]] ,time,{delay:.5,y:c[reel][freePosIndex+1],ease:Bounce.easeOut});

                }

                if (dust==false){
                    dust=true;
                    setTimeout(dust_,(gameClass_.getCompulsivePlayer())?600:850,reel_[reel].getArr()[b],freePosIndex+2);
                }
                freePosIndex++;
            }
        }

        tumblingEventManager_.clearEvt();
        tumblingEventManager_.addEvent(restoreIconNum_, (gameClass_.getCompulsivePlayer())?750:950,[reel,reels]);
        tumblingEventManager_.triggerEvt();
    }

    function fallIcon_(icon){
        TweenMax.to( icon,.3,{alpha:0,angle:icon.angle-5,y:icon.y+40,x:icon.x-5,onComplete:killIcon_,onCompleteParams:[icon]});

    }

    function fadeIcon_(icon){
        TweenMax.to( icon,.3,{alpha:0,angle:icon.angle-5,onComplete:killIcon_,onCompleteParams:[icon]});

    }

    function killIcon_(icon){
        icon.visible=false;
    }

    function dust_(anim,pos){
        if (gotError_)return;
        soundManager_.playSound("tumble");
        if (game.cache.checkImageKey("tumble-smoke")) {
            var y = ReelConfig.reel.deltaY_0 - (ReelConfig.reel.deltaY * pos) - ReelConfig.reel.deltaY / 10;
            var expl = game_.add.sprite(anim.x, y, "tumble-smoke");
            expl.anchor.set(.5, 0);
            expl.animations.add("anim");
            expl.scale.x = 1.2;
            expl.scale.y = 1.2;
            expl.animations.play("anim", 24, false, true);//todo parametric loop
            displayManager_.getGroup("reels").add(expl);
        }
    }

    function changeIcon(reel,b,free){
        reel_[reel].getArr()[free]=this.target;
    }

    function isTumbling(arr,index){
        for (var a =0;a<arr.length;a++){
            if (arr[a]==index)return a;
        }
        return -1;
    }

    function getSmallest_(arr){
        var ind=arr[0];
        for (var a =1;a<arr.length;a++){
            if (arr[a]<ind)ind=arr[a];
        }
        return ind;
    }

    function restoreIconNum_(obj){
        var reel=obj[0];
        var reels=obj[1];

        if (reel==ReelConfig.numReels-1) {
            createReelsAfterSpin_(reels);
            //gameClass_.setChange(false);
        }
        if (reel= ReelConfig.numReels)tumbleReset_=true;
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
        if (!getCanQuickPlay_() )return false;
        if (compulsiveCount_>=compulsiveTH_)return true;
        return false;
    }

    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function stopSpinForError_(){
        framework.updateSmallMessageText("");
        soundManager_.stopSound("reelSound");
        balanceManager_.setCanUpdate(true);
        gameClass_.setChange(false);
        gameClass_.setTumblingReq(false);

        gotError_=true;
        for (var i = 0; i < ReelConfig.numReels; i++) {
            setBlurrSmb_(i, false);
            for (var j = 0; j < numIcon_[i]; j++) {
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
        createReelsAfterSpin:createReelsAfterSpin_,
        stopSpinForError:stopSpinForError_,
        tumble:tumble_,
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
            if(animationMap_[reel][icon]!=undefined)reel_[reel].getAllIcons().remove(animationMap_[reel][icon]);    //prevent more than 1 icon
            animationMap_[reel][icon]=anim;
        },
        gotError:function(){
            return gotError_;
        },
        getFrameMW:function (reel,index){
            return reel_[reel].getFrameMW(index);
        },
        getTileMW:function (reel,index){
            return reel_[reel].getTileMW(index);
        },
        getNumIcons:function(num){
            return numIcon_[num];
        },
        getTumbleDone:function(){
            return tumbleReset_;
        }
    }
    initClass_();
    return me;
}