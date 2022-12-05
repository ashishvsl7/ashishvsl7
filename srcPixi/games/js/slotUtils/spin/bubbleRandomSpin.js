/**
 * KiS Framework, Created by Fabry on 26/07/2016.
 */
function BubbleRandomSpin(gameRef, gameClass) {
    var game_ = gameRef;
    var gameClass_ = gameClass;
    var eventManager_;
    var reel_ = [];
    var animationMap_=[];
    var tw_ = [];
    var reelArrived_=0;
    var reelStarted_=0;
    var debugReelSmb= ReelConfig.spinResult;
    var smbArray_=[];
    var bubbleGroup_;
    var animGroup_;
    var isOnStop_=false;
    var disappearTo_=150;
    var specialSymbol_=[10,12,13,14,15];
    var triggerSymbol_=[];
    var triggerObj_=[];
    var realPos_B_=[];
    var reelBubble_=[];
    var place_=false;
    var compulsiveCount_=0;
    var compulsiveTH_=3;
    var gotError_=false;
    var timeSpin_=0;

    function initClass_() {
        bubbleGroup_= displayManager_.getGroup("bubbles");
        animGroup_ = displayManager_.getGroup("wins");
        eventManager_ = new EventManager();
        if (debugReelSmb!=null && $(".debug")!=null) {
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
        smbArray_=[];
        var resumeJson = communicationManager_.getResumeStatus().status.reels;
        for (var i = 0; i < ReelConfig.numReels; i++) {
            reel_[i] = new ReelBubbles(game_, gameClass, i,undefined,false);
            reelBubble_[i]=[];
            animationMap_[i]=[];
            for (var j = 0; j < ReelConfig.icons[i]; j++) {
                var ind = resumeJson[i].smb[j].smb
                reel_[i].setIcon(j, ind);
                animationMap_[i][j]={};
                var ob={};
                ob.reel=i;
                ob.smb=j;
                //icon bubble on the bottom
                var s = game_.add.sprite(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * i),ReelConfig.reel.deltaY_0 + (ReelConfig.reel.deltaY *j), "iconBubble_"+i );
                s.width = ReelConfig.icon.width;
                s.height = ReelConfig.icon.height;
                s.scale.x = 1;
                s.scale.y = 1;
                s.visible=true;
                ob.bubble=s;
                ob.removed=0;
                ob.placed=0;
                reelBubble_[i][j]=s;
                smbArray_.push(ob);
                bubbleGroup_.add(s);
            }
        }

        randomizeSymbols();
    }

    function fake_(){
    }

    function startSoundOut_(){
        if (isOnStop_==false)
            soundManager_.playSound("popOut",5);
    }

    function startSoundIn_(){
        soundManager_.stopSound("popOut");
        if (isOnStop_==false)
            soundManager_.playSound("popIn",5);
    }

    function preSpin_(){
        var comp=false;
        timeSpin_=new Date().getTime();
        gotError_=false;
        if (gameClass_.getCompulsivePlayer()==true || freeSpinsManager_.getIsInFs()==true) {
            comp=true;
        }

        isOnStop_=false;
        reelArrived_=0;
        reelStarted_=0;
        triggerSymbol_=[];
        triggerObj_=[];

        eventManager_.clearEvt();
        randomizeSymbols();

        eventManager_.addEvent(startSoundOut_,0);
        for (var a in smbArray_){
            eventManager_.addEvent(vanishBubble_,0,[a]);
            if(comp==false)eventManager_.addEvent(fake_,ReelConfig.disappearInterval);
        }
        eventManager_.triggerEvt();
    }

    function setReelsNow_(){
        var comp=false;
        if (gameClass_.getCompulsivePlayer()==true || freeSpinsManager_.getIsInFs()==true) {
            eventManager_.addEvent(fake_,300);//otherwise it's too fast
            comp=true;
        }
        if (comp==false)eventManager_.addEvent(activateStopState_,disappearTo_);
        for (var a in smbArray_) {
            eventManager_.addEvent(placeBubble_, 0, [a]);
            if (comp==false)eventManager_.addEvent(fake_,ReelConfig.appearInterval);
        }
        eventManager_.addEvent(endBubbleSpin_,500);
        eventManager_.triggerEvt();
    }

    function setReels_() {
        var now = new Date().getTime();

        if ((loginVars.getRegParams().jurisdiction !="es" && loginVars.getRegParams().jurisdiction !="se" && loginVars.getRegParams().jurisdiction !="co") || now-timeSpin_>1500 ){
            setReelsNow_();
        }else{
            setTimeout(setReels_,200);
        }
    }

    function startSpin_() {
    }

    function vanishBubble_(a){
        var smb;
        place_=false;
        if(smbArray_[a].removed==0 ) {

            if (animationMap_[smbArray_[a].reel][smbArray_[a].smb].animations == null) {
                smb = reel_[smbArray_[a].reel].getSymbol(smbArray_[a].smb);
            } else {
                smb = animationMap_[smbArray_[a].reel][smbArray_[a].smb];
                animationMap_[smbArray_[a].reel][smbArray_[a].smb] = {};
            }
            if (smbArray_[a].bubble.visible==true ) {
                var s = game_.add.sprite(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * smbArray_[a].reel), ReelConfig.reel.deltaY_0 + (ReelConfig.reel.deltaY * smbArray_[a].smb), "bubbleOff_" + smbArray_[a].reel);
                smbArray_[a].removed = 1;
                //s.tint = ReelConfig.reelColor[smbArray_[a].reel];
                s.animations.add("anim");
                s.animations.play("anim", 24, false, true);
                s.width = ReelConfig.icon.width;
                s.height = ReelConfig.icon.height;
                s.scale.x = 1;
                s.scale.y = 1;
                bubbleGroup_.add(s);
            }
            smb.reel=smbArray_[a].reel;
            smb.smb=smbArray_[a].smb;
            smb.alpha = 1;
            TweenMax.to(smb.scale, .2, {x: .6, y: .6});
            setTimeout(bubbleEnd_, disappearTo_, smb);
            smbArray_[a].bubble.visible = false;
        }
    }

    function placeBubble1_(a){
        if (gotError_)return;
        setTimeout(placeBubble_,100,a);
    }

    function placeBubble_(a){
        if (gotError_)return;
        var s;
        var smb;
        if (place_==false){
            startSoundIn_();
        }
        place_=true;
        if(smbArray_[a].placed==0) {
            //soundManager_.playSound("pop");
            smbArray_[a].placed = 1;
            var smbN = (spinManager_.getSpinReelResp().reel[smbArray_[a].reel].smb[smbArray_[a].smb].prevsmb != null) ? spinManager_.getSpinReelResp().reel[smbArray_[a].reel].smb[smbArray_[a].smb].prevsmb : spinManager_.getSpinReelResp().reel[smbArray_[a].reel].smb[smbArray_[a].smb].smb;
            reel_[smbArray_[a].reel].newSmb(smbN, smbArray_[a].smb);
            smb = reel_[smbArray_[a].reel].getSymbol(smbArray_[a].smb);
            spinManager_.getSpinReelResp().reel[smbArray_[a].reel].smb[smbArray_[a].smb].symbol=smb;
            smb.reel=smbArray_[a].reel;
            smb.smb=smbArray_[a].smb;
            if ( specialSymbol_.indexOf(smbN)<0) {
                s = game_.add.sprite(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * smbArray_[a].reel), ReelConfig.reel.deltaY_0 + (ReelConfig.reel.deltaY * smbArray_[a].smb), "bubbleOn_"+smbArray_[a].reel);
                s.animations.add("anim");
                smb.scale.x = .5;
                smb.scale.y = .5;
                smb.num=smbN;
                smb.special = spinManager_.getSpinReelResp().reel[smbArray_[a].reel].smb[smbArray_[a].smb].special;
                s.animations.play("anim", 24, false, true, placeBubbleEnd_, [a, smb,spinManager_.getSpinReelResp().reel[smbArray_[a].reel].smb[smbArray_[a].smb]]);
                placeIcon_( smb);
            }else{
                smb.visible=false;
                smb.special=true;
                smb.num=smbN;
                s = game_.add.sprite(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * smbArray_[a].reel), ReelConfig.reel.deltaY_0 + (ReelConfig.reel.deltaY * smbArray_[a].smb), "anim"+smbN);
                s.animations.add("anim");
                s.animations.play("anim", 24, false, true, updateFS_, [a, smb,spinManager_.getSpinReelResp().reel[smbArray_[a].reel].smb[smbArray_[a].smb]]);
                smbArray_[a].bubble.visible = false;
                if (smbN==10){  //fs symbol
                    soundManager_.playSound("smbWin_10");
                    freeSpinsManager_.addCollectedFs();
                    setTimeout(freeSpinsManager_.updateFsNum,1000);
                }
            }
            //sounds need to start a little earlier
            if (spinManager_.getSpinReelResp().reel[smbArray_[a].reel].smb[smbArray_[a].smb].special=="anim") {

            }else if (spinManager_.getSpinReelResp().reel[smbArray_[a].reel].smb[smbArray_[a].smb].special=="trigger") {

            }

            s.width = ReelConfig.icon.width;
            s.height = ReelConfig.icon.height;

            s.scale.x = 1;
            s.scale.y = 1;

            bubbleGroup_.add(s);
        }
    }

    function updateFS_(par){
        var a = par[0];
        var smb = par[1];
        var smbJson = par[2];
        smb.visible=true;

        if (smbJson.special!=""){
            if (smbJson.smb!=10)
                scatterManager_.showScatter(smbJson.smb,smb);
        }
    }

    function placeBubbleEnd_(par){
        if (gotError_)return;
        var a = par[0];
        var smb = par[1];
        var smbJson = par[2];
        smbArray_[a].bubble.visible = true;

        if (smbJson.special=="trigger") {
            smb.visible = false;
            var s = game_.add.sprite(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * smbArray_[a].reel), ReelConfig.reel.deltaY_0 + (ReelConfig.reel.deltaY * smbArray_[a].smb), "anim" + smb.num);
            s.animations.add("anim");
            //s.animations.play("anim", 24, false, true, updateIcon_, [a, smb, spinManager_.getSpinReelResp().reel[smbArray_[a].reel].smb[smbArray_[a].smb]]);
            s.width = ReelConfig.icon.width;
            s.height = ReelConfig.icon.height;
            s.scale.x = 1;
            s.scale.y = 1;
            s.symbol=spinManager_.getSpinReelResp().reel[smbArray_[a].reel].smb[smbArray_[a].smb];
            me.setAnimationMap(smbArray_[a].reel, smbArray_[a].smb,s);
            bubbleGroup_.add(s);
            triggerSymbol_.push(s);
            triggerObj_.push(spinManager_.getSpinReelResp().reel[smbArray_[a].reel].smb[smbArray_[a].smb]);
        }else if (smbJson.special=="anim") {
            TweenMax.to(smb.scale, .1, {x: 1, y: 1});
            //soundManager_.playSound("fs-intro");
        }else{
            TweenMax.to(smb.scale, .1, {x: 1, y: 1});
        }
    }

    function placeIcon_(smb){
        if (gotError_)return;
        smb.visible=true;
        if (isOnStop_==false) {
            TweenMax.to(smb.scale, .3, {x: 1.3, y: 1.3, onComplete: placeIcon2_, onCompleteParams: [smb]});
            TweenMax.to(smb, .3, {y: smb.y - 25});
        }else{
            TweenMax.to(smb.scale, .1, {x: 1.1, y: 1.1, onComplete: placeIcon2_, onCompleteParams: [smb]});
            TweenMax.to(smb, 0, {y: smb.y - 25});
        }
    }

    function placeIcon2_(smb){
        if (gotError_)return;
        if (isOnStop_==false) {
            TweenMax.to(smb.scale, .1, {x: 1, y: 1, onComplete: checkIcon_, onCompleteParams: [smb]});
            TweenMax.to(smb, .1, {delay:.05,y: smb.y + 25});
        }else{

            TweenMax.to(smb.scale, .05, {x: 1, y: 1, onComplete: checkIcon_, onCompleteParams: [smb]});
            TweenMax.to(smb, 0.1, {delay:.05,y: smb.y + 25});
        }
    }

    function checkIcon_(smb){

    }

    function backIcon_(smb){
        TweenMax.to(smb.scale,.1,{x:1,y:1});
    }

    function bubbleEnd_(smb){
        smb.visible=false;
        smb.scale.x=.1;
        smb.scale.y=.1;

        if (smb.animations!=null){
            smb.destroy();
            smb=null;
        }
    }

    function endBubbleSpin_(){
        if (gotError_)return;
        framework.updateSmallMessageText("");
        soundManager_.stopSound("popIn");
        balanceManager_.setCanUpdate(true);
        gameClass_.spinAnimEnd();
    }

    function startSpinFromSwipe_(reel,bounce) {

    }

    function activateStopState_(){
        if (loginVars.getRegParams().jurisdiction =="es" || loginVars.getRegParams().jurisdiction =="se" || loginVars.getRegParams().jurisdiction =="co")return;
        buttonManager_.applyState("STOP");
        // for (var a in bubbleGroup_.children){
        //     if (bubbleGroup_.children[a]!=undefined){
        //         bubbleGroup_.children[a].destroy();
        //     }
        // }

    }

    function stopSpin_() {
        if (gotError_)return;
        if ( Number(spinManager_.getSpinResp().bet)!=0)setCompulsive_();
        isOnStop_=true;
        eventManager_.clearEvt();
        soundManager_.stopSound("popIn");
        soundManager_.stopSound("popOut");
        //for (var a in smbArray_)
          //  vanishBubble_([a]);

        for (var a in smbArray_)
            placeBubble_([a]);
        setTimeout(endBubbleSpin_,500);
        eventManager_.triggerEvt();
    }

    function onCompletePreFinal(i) {
        if (gotError_)return;
        tw_[i] = TweenMax.to(reel_[i].getAllIcons(),ReelConfig.reelSpinBounceTime, {
            y: ((ReelConfig.icons[i] - 4) * ReelConfig.reel.deltaY),
            onComplete: onCompleteFinal,
            onCompleteParams: [i],
            ease: Back.easeOut.config(ReelConfig.reelSpinBounceForce)
        });
    }

    function onCompleteFinal(i) {
        if (gotError_)return;
        soundManager_.playSound("reelStop");
        buttonManager_.applyState("AFTERSPIN");
        reelArrived_++;
        displayManager_.getText("messages").setText("");
        upperSmb_(i);  //move bottoom smb up
        reel_[i].resetStartPos();
        if (reelArrived_ >= reelStarted_){
            winManager_.clearWin();
            gameClass_.spinAnimEnd();
        }
    }

    function getReels_() {
        return reel_;
    }

    function randomizeSymbols(){
        for (var a in smbArray_){
            smbArray_[a].removed=0;
            smbArray_[a].placed=0;
            smbArray_[a].index=Util.getRandomInt(1,1000);
        }
        smbArray_.sort(function(a, b){
            return a.index-b.index
        })
    }


    function setCompulsive_() {
        if (compulsiveCount_<=compulsiveTH_)compulsiveCount_++;
    }

    function resetCompulsive_() {
        compulsiveCount_=0;
    }

    function getCompulsivePlayer_() {
        if (loginVars.getRegParams().jurisdiction =="es" || loginVars.getRegParams().jurisdiction =="se"|| loginVars.getRegParams().jurisdiction =="co" )return false;
        if (compulsiveCount_>=compulsiveTH_)return true;
        return false;
    }

    function stopSpinForError_(){
        framework.updateSmallMessageText("");
        soundManager_.stopSound("reelSound");
        balanceManager_.setCanUpdate(true);
        gotError_=true;
        for (var a in smbArray_){
            vanishBubble_([a]);
        }
    }

    var me = {
        createReels: createReels_,
        preSpin:preSpin_,
        startSpin: startSpin_,
        stopSpin: stopSpin_,
        getReels: getReels_,
        startSpinFromSwipe:startSpinFromSwipe_,
        getCompulsivePlayer:getCompulsivePlayer_,
        setReels:setReels_,
        stopSpinForError:stopSpinForError_,
        getAllMap:function (){
            return animationMap_;
        },
        getAnimationMap:function(reel,icon){
            return animationMap_[reel][icon];
        },
        setAnimationMap:function(reel,icon,anim){
            animationMap_[reel][icon]=anim;
        },
        getTriggerIcons:function (){
            return triggerSymbol_;
        },
        addTriggerIcon:function (obj){
            triggerSymbol_.push(obj);
        }
    }
    initClass_();
    return me;
}

