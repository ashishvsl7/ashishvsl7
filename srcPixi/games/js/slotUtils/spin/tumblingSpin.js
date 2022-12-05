/**
 * KiS Framework, Created by Fabry on 31/03/2017.
 */
function TumblingSpin(gameRef, gameClass) {
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
            index=ReelConfig.icons[i];
            c[i]=[];
            reel_[i] = new TumblingReel(game_, gameClass, i);
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


            c[i][0]="upperIcon0";
            c[i][1]="upperIcon1";
            c[i][2]="upperIcon2";
            c[i][3]="upperIcon3";

            for (var j = 1; j <= ReelConfig.icons[i]; j++) {
                c[i][ -1*(j)]=j;
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
        var now = new Date().getTime();

        if ((loginVars.getRegParams().jurisdiction !="es"  && loginVars.getRegParams().jurisdiction !="se" )|| now-timeSpin_>1500 ){
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
        var now = new Date().getTime();
        for (var i = 0; i < ReelConfig.numReels; i++) {
            delayRepeater[i]= (now-timeSpin_<500)?spinManager_.getSpinParams().reelBaseInterval  + spinManager_.getSpinParams().reelStopInterval*i:spinManager_.getSpinParams().reelStopInterval*i;
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
            if (gameClass_.getCompulsivePlayer()==false) {
                buttonManager_.applyState("STOP");
            }else{
                var wait=(gameClass_.waitForSpin!=null)?gameClass_.waitForSpin():false;
                if (wait==false)stopSpin_();
            }
        }
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

        for (var i = 0; i < ReelConfig.numReels; i++) {
            //todo if (wildManager_.getWildReelStickyNum(i)==0) {
            timeTween[i] = spinManager_.getSpinParams().reelLoopInterval;
            delayRepeater[i] = 99;
            countRepeat_[i] = 0;
            setBlur_[i] = false;
            spinReel_([[i], true]);
            //}
        }
    }

    function createReelsAfterSpin_(){
        if (gotError_)return;
        for (var i = 0; i < ReelConfig.numReels; i++) {
            reel_[i].clearGroup();  //needed to prevent lost of focus error
            for (var j = 0; j <= ReelConfig.icons[i]; j++) {
                var ind = parseInt(Math.random() * ReelConfig.numIcon) + 1;
                var o=reel_[i].setIcon(j, ind);
            }
        }
        if (spinManager_.getSpinReelResp()!=undefined && spinManager_.getSpinReelResp().reel!=null){
            var resumeJson = spinManager_.getSpinReelResp().reel;

            for (var i = 0; i < resumeJson.length; i++) {
                for (var a=0; a < ReelConfig.numReels; a++)resetSmb_(resumeJson,i,a);
            }

        }
    }

    function resetSmb_(resumeJson,i,a){
        var obj={};
        if(resumeJson[i].smb[a]!=undefined) {
            if (resumeJson[i].smb[a].smb == 13) {
                obj.type = "anim";
                obj.loop = true;
                obj.callBack = null;
            } else {
                obj = null;
            }
            var s=reel_[i].swapSmb(resumeJson[i].smb[a].smb, a, obj);
            if (obj!=null){
                s.scale.x=1;
                s.scale.y=1;
        	}
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
            y: ((ReelConfig.icons[i] -(3+ReelConfig.numIconsOnTop+ ReelConfig.numIconsOnBottom)) * ReelConfig.reel.deltaY) + spinManager_.getSpinParams().reelSpinBounceMeasure,
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
                y: ReelConfig.reel.deltaY*(ReelConfig.icons[i]),
                onComplete: onCompletePreFinal,
                onCompleteParams: [i],
                ease: Linear.easeInOut
            });
        }else {

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
        if (i < ReelConfig.numReels && iconSound[i] != true && reelSound[i] == true) {
            soundManager_.playSound("reelSoundFast1");
        }
        reelSound[i] = false;
        setBlurrSmb_(i,false);
        soundManager_.playSound("reelStop");
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

    function setSmb_(j) {
        for (var i=0;i<ReelConfig.numIcons;i++){
            if (spinManager_.getSpinReelResp().reel[j].smb[i]!=null){
                var smb=(spinManager_.getSpinReelResp().reel[j].smb[i].prevsmb!=null)?spinManager_.getSpinReelResp().reel[j].smb[i].prevsmb:spinManager_.getSpinReelResp().reel[j].smb[i].smb;
                reel_[j].newSmb(smb, i);
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
    
    function tumble_(reel,obj) {
        if (gotError_)return;
        var time=.35;
        freePos=[];
        freePosIndex=getBigger_(obj.index);
        var dust=false;
        var numNewIcons=0;

        for (var b = getBigger_(obj.index); b>= -1*(ReelConfig.numIcons);b--) {
            var ind = isTumbling(obj.index,b);
            if ( ind>=0) {   //tumbling icon
                reel_[reel].getWholeArrSmb(c[reel][(b)]).visible=false;                     //animation
                if (obj.tumbleObj[ind]!=null)obj.tumbleObj[ind].visible=false;
            }else{
                if (b<0) { //outside screen, need to replace with right icon
                    //outside reels, put a new symbol first
                    var newSmb = obj.newSmbs.smb[freePosIndex].smb;
                    reel_[reel].replaceIcon(c[reel][(b)],newSmb);
                }else{
                    reel_[reel].getWholeArrSmb(c[reel][(b)]).visible=true;
                }
                TweenMax.to(reel_[reel].getWholeArrSmb(c[reel][(b)]),time,{delay:.1,y:reel_[reel].getWholeArrSmb(c[reel][freePosIndex]).y,ease:Bounce.easeOut,onComplete:changeIcon,onCompleteParams:[reel,b,((freePosIndex))]});
                if (dust==false){
                    dust=true;
                    setTimeout(dust_,350,reel_[reel].getPos(b+1),(freePosIndex+2));
                }
                freePosIndex--;
                if (freePosIndex<0)break;
            }
        }

        tumblingEventManager_.clearEvt();
        tumblingEventManager_.addEvent(restoreIconNum_, 650,[reel,obj.index[0],obj]);
        tumblingEventManager_.triggerEvt();
    }

    function dust_(anim,pos){
        if (gotError_)return;
        soundManager_.playSound("tumble");
        if (game.cache.checkImageKey("tumble-smoke")) {
            var expl = game_.add.sprite(anim.x, anim.y, "tumble-smoke");
            expl.anchor.set(0, 0);
            expl.animations.add("anim");
            expl.scale.x = 1.2;
            expl.scale.y = 1.2;
            expl.animations.play("anim", 24, false, true);//todo parametric loop
            displayManager_.getGroup("reels").add(expl);
        }
    }

    function changeIcon(reel,b,icon){
        //c[reel][icon]=this.target;
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

    function getBigger_(arr){
        var ind=arr[0];
        for (var a =1;a<arr.length;a++){
            if (arr[a]>ind)ind=arr[a];
        }
        return ind;
    }

    function restoreIconNum_(obj){
        var reel=obj[0];
        var index=obj[1];

        if (reel==ReelConfig.numReels-1) {
            createReelsAfterSpin_();
            gameClass_.setChange(false);
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
        if (loginVars.getRegParams().jurisdiction =="es" || loginVars.getRegParams().jurisdiction =="se" || loginVars.getRegParams().jurisdiction =="co" )return false;
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
            for (var j = 0; j < ReelConfig.numIcons; j++) {
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
        }
    }
    initClass_();
    return me;
}
