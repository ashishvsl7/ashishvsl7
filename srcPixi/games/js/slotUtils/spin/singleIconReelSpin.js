/**
 * KiS Framework, Created by Fabry on 04/03/2016.
 */
function SingleIconReelSpin(gameRef, gameClass) {
    var game_ = gameRef;
    var gameClass_ = gameClass;
    var eventManager_;
    var reel_ = [];
    var tw_ = [];
    var reelArrived_=0;
    var debugReelSmb;
    var twinReels_=[];
    var iStopIntervalIndex_=0;
    var masks=[];

    function initClass_() {
        eventManager_ = new EventManager();
        if ($(".debug")!=null && (window.top.location.href.indexOf("local")>=0 || window.top.location.href.indexOf("192.168.")>=0 )) {
            debugReelSmb=[];
            for (var i = 0; i < ReelConfig.numReels; i++) {
                debugReelSmb[i] = [];
                for (var j = 0; j < ReelConfig.numIcons; j++) {
                    debugReelSmb[i][j]=document.getElementsByName("d"+i + j)[0];
                }
            }
        }
    }

    function createReels_() {
        var index = 0;
        if (masks.length>0){
            for (var a in masks){
                masks[a].destroy();
                masks[a]=null;
            }
            masks=[];
        }
        for (var i = 0; i < ReelConfig.numReels; i++) {
            reel_[i]=[];
            for (var j = 0; j < ReelConfig.numIcons; j++) {
                reel_[i][j] = new Reel(game_, gameClass, i, j);
                for ( jj = 0; jj < ReelConfig.icons[i]; jj++) {
                    var ind = parseInt(Math.random() * ReelConfig.numIcon) + 1;
                    reel_[i][j].setIcon(jj, ind);
                }
            }
        }
        setMask_();
    }

    function setMask_(){
        if (masks.length>0){
            for (var a in masks){
                masks[a].destroy();
                masks[a]=null;
            }
            masks=[];
        }
        for (var i = 0; i < ReelConfig.numReels; i++) {
            for (var j = 0; j < ReelConfig.numIcons; j++) {
                var mask_ = game_.add.graphics(0, 0);
                mask_.beginFill(0xffffff);
                mask_.drawRect(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * i), ReelConfig.reel.deltaY_0 - (ReelConfig.reel.deltaY * (j+1))+15, ReelConfig.icon.width, ReelConfig.icon.height-25);
                reel_[i][j].getAllIcons().mask = mask_;
            }
        }

    }

    function setReels_(){
        buttonManager_.applyState("STOP");
        for (var i = 0; i < ReelConfig.numReels; i++) {
            setSmb_(i); //todo setSmb will be called by the server response parser
        }
        twinReels_=[];//todo twinReelManager_.parse(reel_);
        setTimeout(twinReelManager_.showTwinReels,200);
        iStopIntervalIndex_=0;
    }

    function startSpin_() {
        setReels_();
        reelArrived_=0;
        eventManager_.clearEvt();
        for (var i = 0; i < ReelConfig.numReels; i++) {
            for (var j = 0; j < ReelConfig.numIcons; j++) {
                eventManager_.addEvent(spinReel_, 0 * i , [i,j, true]);
            }
        }
        eventManager_.triggerEvt();
    }

    function startSpinFromSwipe_(reel,bounce) {
        var index=0;
        reelArrived_=0;
        setReels_();
        eventManager_.clearEvt();
        for (var i = reel; i < ReelConfig.numReels; i++) {
            for (var j = 0; j < ReelConfig.numIcons; j++) {
                eventManager_.addEvent(spinReel_, ReelConfig.reelInterval * index, [i,j, bounce]);
            }
            index++;
        }
        for (var i = 0; i < reel; i++) {
            for (var j = 0; j < ReelConfig.numIcons; j++) {
                eventManager_.addEvent(spinReel_, ReelConfig.reelInterval * index, [i,j, bounce]);
            }
            index++;
        }
        eventManager_.triggerEvt();
    }

    function stopSpin_() {
        for (var i = 0; i < ReelConfig.numReels; i++) {
            if (tw_[i] != undefined)tw_[i].timeScale(4);
        }
    }

    function spinReel_(params) {
        var i=params[0];
        var j=params[1];
        var bounce=params[2];

        if (i == ReelConfig.numReels - 1) {
            soundManager_.playSound("reelSound",99);
        }
        var time = (gameClass_.getAutoPlayStatus()) ?  2 : ReelConfig.reel.time[0];
        time = time+(iStopIntervalIndex_)*ReelConfig.reelStopInterval;
        if (twinReels_[i]!=null){
            //tweenReels
        } else{
            iStopIntervalIndex_++;
        }

        tw_[i] = TweenMax.to(reel_[i][j].getAllIcons(), time, {
            y: ((ReelConfig.icons[i] - 4) * ReelConfig.reel.deltaY) + ReelConfig.reelSpinBounceMeasure,
            onComplete: onCompletePreFinal,
            onCompleteParams: [i,j]
        });

        reel_[i][j].removeButton();
    }

    function upperSmb_(i,jj) {
        //called after spin to move the symbols in the upper position before moving the reel
        reel_[i][jj].swapSmb(ReelConfig.icons[i] - 3, 1);
        reel_[i][jj].swapSmb(ReelConfig.icons[i] - 2, 2);
        reel_[i][jj].swapSmb(ReelConfig.icons[i] - 1, 3);
    }

    function setSmb_(i) {
        //todo fake to change with real symbols
        //
        //reel_[i].newSmb(parseInt(Math.random() * ReelConfig.numIcon-1) +1, ReelConfig.icons - 1);    //+1 to reach the wild
        //reel_[i].newSmb(parseInt(Math.random() * ReelConfig.numIcon-1) +1, ReelConfig.icons - 2);
        //reel_[i].newSmb(parseInt(Math.random() * ReelConfig.numIcon) +1, ReelConfig.icons - 3);

        for (var jj = 0; jj < ReelConfig.numIcons; jj++) {
            for (var j = 0; j < ReelConfig.icons[i]; j++) {
                if (j != 1 && j != 2 && j != 3) {
                    var ind = parseInt(Math.random() * ReelConfig.numIcon - 1) + 1;
                    reel_[i][jj].newSmb(ind, j);
                }
            }

            var smb0 = (debugReelSmb != null && debugReelSmb[i][0].value != "#") ? debugReelSmb[i][0].value : parseInt(Math.random() * ReelConfig.numIcon - 1) + 1;
            var smb1 = (debugReelSmb != null && debugReelSmb[i][1].value != "#") ? debugReelSmb[i][1].value : parseInt(Math.random() * ReelConfig.numIcon - 1) + 1;
            var smb2 = (debugReelSmb != null && debugReelSmb[i][2].value != "#") ? debugReelSmb[i][2].value : parseInt(Math.random() * ReelConfig.numIcon) + 1;

            reel_[i][jj].newSmb(smb0, ReelConfig.icons[i] - 1); //parseInt(Math.random() * ReelConfig.numIcon-1) +1   //+1 to reach the wild
            reel_[i][jj].newSmb(smb1, ReelConfig.icons[i] - 2);//parseInt(Math.random() * ReelConfig.numIcon-1) +1
            reel_[i][jj].newSmb(smb2, ReelConfig.icons[i] - 3);
        }
    }

    function onCompletePreFinal(i,j) {
        tw_[i] = TweenMax.to(reel_[i][j].getAllIcons(),ReelConfig.reelSpinBounceTime, {
            y: ((ReelConfig.icons[i] - 4) * ReelConfig.reel.deltaY),
            onComplete: onCompleteFinal,
            onCompleteParams: [i,j],
            ease: Back.easeOut.config(ReelConfig.reelSpinBounceForce)
        });
    }

    function onCompleteFinal(i,j) {
        upperSmb_(i,j);
        reel_[i][j].resetStartPos();
        return;
        //buttonManager_.applyState("AFTERSPIN");
        reelArrived_++;
        displayManager_.getText("messages").setText("");
        upperSmb_(i);  //move bottoom smb up
        reel_[i].resetStartPos();
        if (reelArrived_ >= ReelConfig.numReels){
            balanceManager_.setCanUpdate(true);
            gameClass_.spinAnimEnd();
        }
    }

    function getReels_() {
        return reel_;
    }

    var me = {
        createReels: createReels_,
        startSpin: startSpin_,
        stopSpin: stopSpin_,
        spinReel: spinReel_,
        getReels: getReels_,
        startSpinFromSwipe:startSpinFromSwipe_,
        reel: reel_,
        setMask:setMask_
    }
    initClass_();
    return me;
}