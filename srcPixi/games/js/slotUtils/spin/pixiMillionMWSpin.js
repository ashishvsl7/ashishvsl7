/**
 * KiS Framework, Created by Fabry on 24/04/2020.
 * handle spin for 1m mw style
 */
function PixiMillionMegaWayTumblingSpin(gameRef, gameClass) {
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
    var cFS=[];
    var gotError_=false;
    var tumblingEventManager_;
    var timeSpin_=0;
    var reelSound_=[];
    var auto_=false;
    var size_=[];
    size_[7]=[];
    size_[9]=[];

    size_[7][0]=0;
    size_[7][1]=0;
    size_[7][2]=321;
    size_[7][3]=214;
    size_[7][4]=161;
    size_[7][5]=129;
    size_[7][6]=107;
    size_[7][7]=92;

    size_[9][0]=0;
    size_[9][1]=0;
    size_[9][2]=413;
    size_[9][3]=275;
    size_[9][4]=207;
    size_[9][5]=165;
    size_[9][6]=138;
    size_[9][7]=118;
    size_[9][8]=103;
    size_[9][9]=92;



    var numIcon_=[];
    var tumbleReset_=false;
    var hasToWait_=false;
    var whStarted=[];
    var tumbleStarted=[];


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

    function createReels_(p) {
        var index = 0;
        var forceFs=false
        var add=0
        var offset=[];
        var additionalSmb=0;
        offset[0]=0;
        offset[1]=0;
        offset[2]=0;
        offset[3]=0;
        offset[4]=0;
        offset[5]=0;
        offset[6]=0;
        if (p==1){
            forceFs=true;
            add=1;
            offset[0]=-92;
            offset[1]=-92;
            offset[2]=-92;
            offset[3]=-92;
            offset[4]=-92;
            offset[5]=-92;
            offset[6]=-92;
        }else if (p==2){
            //force FS end flag
            forceFs=false;
        }
        for (var i = 0; i < ReelConfig.numReels+ add; i++) {
            numIcon_[i]=Util.getRandomInt(2,7);
            if (spinManager_.getSpinReelResp() !=null && spinManager_.getSpinReelResp().reel!=null && spinManager_.getSpinReelResp().reel[i]!=null){
                numIcon_[i] = spinManager_.getSpinReelResp().reel[i].smb.length;
            }else if (communicationManager_.getResumeStatus().status!=null && communicationManager_.getResumeStatus().status.reels!=null) {
                numIcon_[i] = (communicationManager_.getResumeStatus().status.reels[i]!=undefined)?communicationManager_.getResumeStatus().status.reels[i].smb.length:5;
            }

            reel_[i] = new PixiMillionMegaWaysTumblingReel(game_, gameClass, i,i,null,numIcon_[i],(i==3)?forceFs:false,offset[i]);

            displayManager_.getGroup("reels").children[i].x=0;
            animationMap_[i]=[];
            c[i]=[];
            cFS[i]=[];
            for (var j = 0; j < ReelConfig.icons[i]; j++) {
                var ind = parseInt(Math.random() * ReelConfig.numIcon) + 1;
                reel_[i].setIcon(j, ind);
                animationMap_[i][j]={};
                c[i][j] = ReelConfig.reel.deltaY_0 - (size_[7][numIcon_[i]]  * j)+ size_[7][numIcon_[i]] /2;//tunbling positions
                cFS[i][j] = ReelConfig.reel.deltaY_0 - (size_[9][numIcon_[i]]  * j)+ size_[9][numIcon_[i]] /2;//tunbling positions
            }
            for (var j = 1; j <= ReelConfig.icons[i]; j++) {
                c[i][ -1*(j)]=j;
                cFS[i][ -1*(j)]=j;
            }
        }

        var resumeJson=null;
        if (spinManager_.getSpinReelResp()!=undefined && spinManager_.getSpinReelResp().reel!=undefined){
            resumeJson = spinManager_.getSpinReelResp().reel;
        }else if (communicationManager_.getResumeStatus().status!=null && communicationManager_.getResumeStatus().status.reels!=null) {
            resumeJson = communicationManager_.getResumeStatus().status.reels;
        }

        if (resumeJson!=null){
            for (var i = 0; i < resumeJson.length; i++) {
                for (var j=0;j< numIcon_[i] ;j++){
                    if(resumeJson[i].smb[j]!=undefined)reel_[i].swapSmb(resumeJson[i].smb[j], j);
                }
            }
        }
    }

    function setReels_(){
        var now = new Date().getTime();

        if (getCanQuickPlay_() || now - timeSpin_ > 50) {
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

        for (var i = 0; i < ReelConfig.numReels + getFSNum_(); i++) {
            if (spinManager_.getSpinReelResp().reel[i]) {
                delayRepeater[i] = spinManager_.getSpinParams().reelBaseInterval + spinManager_.getSpinParams().reelStopInterval * i;
            }
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
        if (gameClass_.setStickyWild!=undefined)gameClass_.setStickyWild();
        startReel();

        soundManager_.playSound("reelSound", (gameClass_.getCompulsivePlayer()) ? null : 99);
        gameClass_.startSpinSound();
        for (var i = 0; i <  ReelConfig.numReels + getFSNum_(); i++) {
            for (var j = 0; j < ReelConfig.icons[i]; j++) {
                if (Util.getRandomInt(1,100)>60) {
                    var ind = parseInt(Math.random() * ReelConfig.numIcon-1) +1;
                }else{
                    var ind = parseInt(Math.random() * 5) + 1;
                }
                if (ind==5)ind=10;
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
        for (var i = 0; i < ReelConfig.numReels + getFSNum_(); i++) {
            reel_[i].clearGroup();  //needed to prevent lost of focus error
            for (var j = 0; j < ReelConfig.icons[i]; j++) {
                var ind = parseInt(Math.random() *ReelConfig.numIcon-1) + 1;
                var o=reel_[i].setIcon(j, ind);
            }
        }
        var resumeJson = reels;
        for (var i = 0; i < resumeJson.length; i++) {
            for (var a=0; a < resumeJson[i].smb.length; a++){
                reel_[i].swapSmb(  resumeJson[i].smb[a], a)
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
        for (var i = reel; i <  ReelConfig.numReels + getFSNum_(); i++) {
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
        for (var i = 0; i <  ReelConfig.numReels + getFSNum_(); i++) {
            delayRepeater[i]=0;//set to 1 to slow down, after that same number if no symbols present otherwise +1
            if (tw_[i] != null)tw_[i].timeScale(4);
        }
    }

    function spinReelSwipe_(params) {
        if (gotError_)return;
        triggerSymbol_=[];
        for (var i = 0; i <  ReelConfig.numReels + getFSNum_(); i++)delayRepeater[i]=0;
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
            stopState_();
        }

        tw_[i] = TweenMax.to(reel_[i].getAllIcons(), .2, {
            y: ((ReelConfig.icons[i] -(3+ReelConfig.numIconsOnTop+ ReelConfig.numIconsOnBottom)) * size_[getReelState_(i)][numIcon_[i]]) + spinManager_.getSpinParams().reelSpinBounceMeasure,
            onComplete: onCompletePreFinal,
            onCompleteParams: [i], ease:Linear.easeNone
        });

    }

    function spinAfterPreMovement(params) {
        if (gotError_)return;
        var i=params[0];
        var bounce=params[1];

        if (i ==  ReelConfig.numReels + getFSNum_() - 1) {
            setTimeout(stopState_,450);
        }

        var time =spinManager_.getSpinParams().reelSecondMovementTime;
        if (twinReels_!=null && twinReels_[i]!=null){
            //tweenReels
        }
        //version with negative bounce
        tw_[i] = TweenMax.to(reel_[i].getAllIcons(), time, {
            y:  size_[getReelState_(i)][numIcon_[i]]*numIcon_[i],
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
            tw_[i] = TweenMax.fromTo(reel_[i].getAllIcons(),time, {y: size_[getReelState_(i)][numIcon_[i]]*numIcon_[i]},{
                y:  size_[getReelState_(i)][numIcon_[i]]*(ReelConfig.icons[i] -(3+numIcon_[i]+ReelConfig.numIconsOnTop+ ReelConfig.numIconsOnBottom)),
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
                    c[i][j] = ReelConfig.reel.deltaY_0 - (size_[getReelState_(i)][numIcon_[i]] * j) + size_[getReelState_(i)][numIcon_[i]] / 2;//tunbling positions
                }
                for (var j = 1; j <= ReelConfig.icons[i]; j++) {
                    c[i][ -1*(j)]=j;
                }

            }
            tw_[i] = TweenMax.fromTo(reel_[i].getAllIcons(), time, {y:  size_[getReelState_(i)][numIcon_[i]]*numIcon_[i]}, {
                y:  size_[getReelState_(i)][numIcon_[i]]*(ReelConfig.icons[i] -(3+numIcon_[i]+ReelConfig.numIconsOnTop+ ReelConfig.numIconsOnBottom)) + spinManager_.getSpinParams().reelSpinBounceMeasure,
                onComplete: ononCompleteFinalStep_,
                onCompleteParams: [i],
                ease: Linear.easeInOut
            });
        }
    }

    function ononCompleteFinalStep_(i){
        gameClass.setReelsCallback(i);
        if (gotError_)return;
        if (i <  ReelConfig.numReels + getFSNum_() && iconSound[i] != true && reelSound[i] == true) {
            soundManager_.playSound("reelSoundFast1");
        }
        reelSound[i] = false;
        setBlurrSmb_(i,false);

        var time = spinManager_.getSpinParams().reelSpinBounceTime;
        var offset=(getReelState_(i)==9)?92:0;
        tw_[i] = TweenMax.to(reel_[i].getAllIcons(),time, {
            y: ((ReelConfig.icons[i] -(numIcon_[i]+ReelConfig.numIconsOnTop+ ReelConfig.numIconsOnBottom)) * size_[getReelState_(i)][numIcon_[i]])+offset ,
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
                reel_[i].getAllIcons().removeChild(animationMap_[i][j]);
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
                //var smb=(spinManager_.getSpinReelResp().reel[j].smb[i].prevsmb!=null)?spinManager_.getSpinReelResp().reel[j].smb[i].prevsmb:spinManager_.getSpinReelResp().reel[j].smb[i].smb;
                reel_[j].newSmb(spinManager_.getSpinReelResp().reel[j].smb[i], i);
                reel_[j].toggleSpin(i,true);
            }
        }
    }

    function parseResume_(reel){
        resumeJson_=reel;
    }

    function onCompleteFinal(i) {
        if (gotError_)return
        soundManager_.playSound("reelStop");
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
            for (var a =(Number(i)+1);a<=  ReelConfig.numReels + getFSNum_();a++)timeTween[a]=timeTween[a]-.1;
            startSlow_++;
        }

        if (!isStopped_)resetCompulsive_();
        if (reelArrived_ >= reelStarted_){
            //soundManager_.stopSound("reelSoundFast");
            logger("complete spin mov.------");
            gameClass_.spinAnimEnd();
        }
    }


    var stopp = 0;

    function tumble_(reel, obj, reels, prevR) {

        if (gotError_)return;
        var time = (gameClass_.getCompulsivePlayer()) ? .35 : .45;
        freePos=[];
        freePosIndex=getSmallest_(obj.index)-1;
        var dust=false;
        var numNewIcons=0;
        var wh = false;

        //check if split symbol triggered, coordinated and reel structure has to change in that case
        hasToWait_ = true;
        whStarted[reel] = 0;
        if (reel==0)tumbleReset_=false;
        for (var b = getSmallest_(obj.index); b<= numIcon_[reel]+obj.index.length;b++) {
            var ind = isTumbling(obj.index,b);
            if ( ind>=0) {   //tumbling icon
                reel_[reel].getArr()[obj.index[ind]].visible = false; //icon

                if (obj.tumbleObj[ind]!=null){
                    tumbleStarted[reel] = 1;
                    fadeIcon_(obj.tumbleObj[ind]);
                }
            }else{
                tumbleStarted[reel] = 1;
                if (b>numIcon_[reel]) {
                    numNewIcons++;
                    //outside reels, put a new symbol first
                    var newSmb;

                    for ( var i =0;i<numIcon_[reel];i++){
                        if (freePosIndex == i) newSmb =obj.newSmbs.smb[numIcon_[reel]-1-i];
                    }
                    var a = reel_[reel].swapSmb(newSmb, b);
                }
                //free = free -1;
                TweenMax.to( reel_[reel].getArr()[b],time,{
                    delay:.5,
                    y:c[reel][freePosIndex+1],
                    ease:Bounce.easeOut,
                    onComplete:changeIcon,
                    onCompleteParams:[reel, b,(freePosIndex+1)]
                });



                if (dust==false){
                    dust=true;
                    setTimeout(dust_, 320,reel_[reel].getArr()[b],freePosIndex+2);
                }
                freePosIndex++;
            }
        }
        setTimeout(endChecker_,1000);
    }

    function endChecker_() {
        var ret=true;
        for (var i=0;i<6;i++){
            if (whStarted[i]>0 || tumbleStarted[i]>0){
                ret=false;
            }
        }
        if (ret){
            hasToWait_ = false;
        }else{
            setTimeout(endChecker_,200);
        }
    }

    function fallIcon_(icon){
        if (icon!=undefined)TweenMax.to( icon,.3,{alpha:0,angle:icon.angle-5,y:icon.y+40,x:icon.x-5,onComplete:killIcon_,onCompleteParams:[icon]});

    }

    function fadeIcon_(icon){
        if (icon!=undefined)TweenMax.to( icon,.3,{alpha:0,angle:icon.angle-5,onComplete:killIcon_,onCompleteParams:[icon]});

    }

    function killIcon_(icon){
        if (icon!=undefined) icon.visible=false;
    }

    function dust_(anim,pos){
        if (gotError_)return;
         soundManager_.playSound("tumbleSound");
        //p3 if (game.cache.checkImageKey("tumble-smoke")) {
        //     var y = ReelConfig.reel.deltaY_0 - (ReelConfig.reel.deltaY * pos) - ReelConfig.reel.deltaY / 10;
        //     var expl = game_.add.sprite(anim.x, y, "tumble-smoke");
        //     expl.anchor.set(.5, 0);
        //     expl.animations.add("anim");
        //     expl.scale.x = 1.2;
        //     expl.scale.y = 1.2;
        //     expl.animations.play("anim", 24, false, true);//todo parametric loop
        //     displayManager_.getGroup("reels").add(expl);
        // }
    }

    function changeIcon(reel,b,free){
        reel_[reel].getArr()[free]=this.target;
        tumbleStarted[reel]=0;
        gameClass_.tumbleEnd(reel,b, reel_[reel].getSymbol(b));
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
        for (var i = 0; i <  ReelConfig.numReels + getFSNum_(); i++) {
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

    function getReelState_(i){
        return (freeSpinsManager_.getIsInFs() && i==3)?9:7;
    }

    function getFSNum_(){
        return (freeSpinsManager_.getIsInFs())?1:0;
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
        getReelState:getReelState_,
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
            if(animationMap_[reel][icon]!=undefined)reel_[reel].getAllIcons().removeChild(animationMap_[reel][icon]);    //prevent more than 1 icon
            animationMap_[reel][icon]=anim;
        },
        gotError:function(){
            return gotError_;
        },
        getNumIcons:function(num){
            return numIcon_[num];
        },
        getTumbleDone:function(){
            return tumbleReset_;
        },
        restoreIcons:function (reels) {
            createReelsAfterSpin_(reels);
            tumbleReset_=true;
        },
        tumbleDone:function () {
            return !hasToWait_;
        }
    }
    initClass_();
    return me;
}