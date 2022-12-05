/**
 * KiS Framework, Created by Fabry on 25/01/2021.
 */
function MegaWaySplitTumblingSpin(gameRef, gameClass) {
    var game_ = gameRef;
    var gameClass_ = gameClass;
    var eventManager_;
    var reel_ = [];
    var wormHole_=[];
    var animationMap_ = [];
    var tw_ = [];
    var reelArrived_ = 0;
    var reelStarted_ = 0;
    var debugReelSmb = ReelConfig.spinResult;
    var twinReels_ = [];
    var mask_ = null;
    var delayRepeater = [];
    var slowDownReel = [];
    var iconSound = [];
    var reelSound = [];
    var timeTween = [];
    var triggerSymbol_ = [];
    var isStopped_ = false;
    var compulsiveCount_ = 0;
    var compulsiveTH_ = 3;
    var countRepeat_ = [];
    var responseReceived;
    var startSlow_ = -1;
    var setBlur_ = [];
    var c = [];
    var cBeforeSplit = [];
    var gotError_ = false;
    var tumblingEventManager_;
    var timeSpin_ = 0;
    var reelSound_ = [];
    var auto_ = false;
    var size_ = [];
    size_[0] = 0;
    size_[1] = 0;
    size_[2] = 280;
    size_[3] = 187;
    size_[4] = 140;
    size_[5] = 112;
    size_[6] = 93.3;
    size_[7] = 80;


    var numIcon_ = [];
    var height_ = 0;
    var width_ = 128;
    var tumbleReset_ = false;
    var splitted_ = [];
    var hasToWait_=false;
    var whStarted=[];
    var tumbleStarted=[];

    function initClass_() {
        eventManager_ = new EventManager();
        tumblingEventManager_ = new EventManager();
        if (debugReelSmb != null && $(".debug") != null) {
            for (var i = 0; i < ReelConfig.numReels; i++) {
                for (var j = 0; j < ReelConfig.numIcons; j++) {
                    document.getElementsByName("d" + i + j)[0].value = debugReelSmb[i][j];
                    debugReelSmb[i][j] = document.getElementsByName("d" + i + j)[0];
                }
            }
        } else {
            $(".debug").css("visibility", "hidden");//just in case...
        }
    }

    function createReels_() {
        var index = 0;
        for (var i = 0; i < ReelConfig.numReels; i++) {
            numIcon_[i] = Util.getRandomInt(2, 7);
            wormHole_[i]=[];
            if (communicationManager_.getResumeStatus().status != null && communicationManager_.getResumeStatus().status.reels != null) {
                numIcon_[i] = communicationManager_.getResumeStatus().status.reels[i].smb.length;
            }
            splitted_[i] = false;
            reel_[i] = new MegaWaysSplitTumblingReel(game_, gameClass, i, i, null, numIcon_[i]);
            animationMap_[i] = [];
            c[i] = [];
            cBeforeSplit[i] = [];
            for (var j = 0; j < ReelConfig.icons[i]; j++) {
                var ind = parseInt(Math.random() * ReelConfig.numIcon) + 1;
                reel_[i].setIcon(j, ind);
                animationMap_[i][j] = {};
                c[i][j] = ReelConfig.reel.deltaY_0 - (size_[numIcon_[i]] * j) + size_[numIcon_[i]] / 2;//tunbling positions
            }
            for (var j = 1; j <= ReelConfig.icons[i]; j++) {
                c[i][-1 * (j)] = j;
            }
        }
        if (communicationManager_.getResumeStatus().status != null && communicationManager_.getResumeStatus().status.reels != null) {
            var resumeJson = communicationManager_.getResumeStatus().status.reels;
            for (var i = 0; i < resumeJson.length; i++) {
                splitted_[i] = true
                reel_[i].updateSizeOnTumble(resumeJson[i].smb);
                for (var j = 0; j < numIcon_[i]; j++) {
                    //console.log(i + " "+j + " "+resumeJson[i].smb[j].smb)
                    //  if (resumeJson[i].smb[j] != undefined) reel_[i].swapSmb(resumeJson[i].smb[j].smb, j);
                }
            }
            createReelsAfterSpin_(resumeJson);
        }

    }


    function setReels_() {
        var now = new Date().getTime();

        if (getCanQuickPlay_() || now - timeSpin_ > 50) {
            setReelsNow_();
        } else {
            setTimeout(setReels_, 200);
        }

    }

    function setReelsNow_() {
        if (gameClass_.getIsTumbling()) {
            gameClass_.spinAnimEndAfterTumbling();
            gameClass_.setTumblingReq(false);//answer recaived flag
            return;
        }
        if (gameClass_.getStickyWildNumber != null) gameClass_.getStickyWildNumber(spinManager_.getReels());

        for (var i = 0; i < ReelConfig.numReels; i++) {
            if (spinManager_.getSpinReelResp().reel[i]) {
                delayRepeater[i] = spinManager_.getSpinParams().reelBaseInterval + spinManager_.getSpinParams().reelStopInterval * i;
            }
        }
        var obj = {};

        if (gameClass_.setDelRepeter != null && gameClass_.getCompulsivePlayer() == false) {//slow down reels waiting for feature icon
            obj.delayRepeater = delayRepeater;
            obj = gameClass_.setDelRepeter(obj);
            delayRepeater = obj.delayRepeater;
            slowDownReel = obj.slowDownReel;
            iconSound = obj.iconSound;
            reelSound = obj.reelSound;
        }

        twinReels_ = twinReelManager_.parse(reel_);
        setTimeout(twinReelManager_.showTwinReels, 200);

        if (gameClass_.setReelsCallback != null) gameClass_.setReelsCallback();
        if (gameClass_.getLocked != null && gameClass_.getLocked != undefined) {
            if (gameClass_.getLocked() == false) {
                responseReceived = true;
            } else {
                setTimeout(lockLater_, 2000);
            }
        } else {
            responseReceived = true;
        }

        if (spinManager_.getSpinParams().stopEnabled == true) {
            if (gameClass_.getCompulsivePlayer() == false) {
                if (freeSpinsManager_.getIsInFs() == false) {

                }
            } else {
                var wait = (gameClass_.waitForSpin != null) ? gameClass_.waitForSpin() : false;
                if (wait == false) stopSpin_();
            }
        }
    }

    function lockLater_() {
        responseReceived = true;
    }

    function startSpin_() {
        gotError_ = false;
        isStopped_ = false;
        responseReceived = false;
        triggerSymbol_ = [];
        reelArrived_ = 0;
        reelStarted_ = 0;
        timeSpin_ = new Date().getTime();
        startReel();

        soundManager_.playSound("reelSound", (gameClass_.getCompulsivePlayer()) ? null : 99);
        gameClass_.startSpinSound();
        for (var i = 0; i < ReelConfig.numReels; i++) {
            for (var j = 0; j < ReelConfig.icons[i]; j++) {
                if (Util.getRandomInt(1, 100) > 60) {
                    var ind = parseInt(Math.random() * ReelConfig.numIcon - 1) + 1;
                } else {
                    var ind = parseInt(Math.random() * 5) + 1;
                }
                //if(reel_[i].getSymbol(j).dispIcon==undefined)reel_[i].replaceIcon(j,ind);
            }
            //todo if (wildManager_.getWildReelStickyNum(i)==0) {
            timeTween[i] = spinManager_.getSpinParams().reelLoopInterval;
            delayRepeater[i] = 99;
            countRepeat_[i] = 0;
            setBlur_[i] = false;
            setTimeout(spinReel_, (gameClass_.getCompulsivePlayer()) ? 0 : spinManager_.getSpinParams().reelInterval * i, ([[i], true]));

            //}
        }
    }

    function createReelsAfterSpin_(reels) {
        //fab
        if (!hasToWait_) {
            console.log("-------------------------reset symbols after tumble?")
            if (gotError_) return;
            for (var i = 0; i < ReelConfig.numReels; i++) {
                reel_[i].clearGroup();  //needed to prevent lost of focus error
                if (splitted_[i] && spinManager_.getSpinReelResp() != undefined) {
                    numIcon_[i] = spinManager_.getSpinReelResp().reel[i].smb.length;//mah? todo,2/2/2021 will need refactoring
                }
                for (var j = 0; j < ReelConfig.icons[i]; j++) {
                    var ind = parseInt(Math.random() * numIcon_[i]) + 1;
                    if (splitted_[i]) {
                        var o = reel_[i].setIcon(j, ind);
                    } else {
                        var o = reel_[i].setIcon(j, ind);
                    }


                }
            }

            var resumeJson = reels;

            for (var i = 0; i < resumeJson.length; i++) {

                for (var a = 0; a < resumeJson[i].smb.length; a++) {
                    if (splitted_[i]) {
                        var s = reel_[i].swapSmbS(resumeJson[i].smb[a], resumeJson[i].smb.length - a);
                        //var s =reel_[i].swapSmb( (resumeJson[i].smb[a].prevsmb!=undefined)?resumeJson[i].smb[a].prevsmb: resumeJson[i].smb[a].smb, a);
                    } else {
                        var s = reel_[i].swapSmb(resumeJson[i].smb[a], a);
                    }

                }
            }
        } else {
            setTimeout(createReelsAfterSpin_, 200, reels);
        }
    }

    function startSpinFromSwipe_(reel, bounce) {
        if (gotError_) return;
        isStopped_ = false;
        triggerSymbol_ = [];
        var index = 0;
        reelArrived_ = 0;
        reelStarted_ = 0;
        eventManager_.clearEvt();
        for (var i = reel; i < ReelConfig.numReels; i++) {
            eventManager_.addEvent(spinReelSwipe_, spinManager_.getSpinParams().reelInterval * index, [[i], bounce]);
            index++;
        }
        for (var i = 0; i < reel; i++) {
            eventManager_.addEvent(spinReelSwipe_, spinManager_.getSpinParams().reelInterval * index, [[i], bounce]);
            index++;
        }
        eventManager_.triggerEvt();
    }

    function stopSpin_() {
        if (gotError_) return;
        if (Number(spinManager_.getSpinResp().bet) != 0) setCompulsive_();
        isStopped_ = true;
        for (var i = 0; i < ReelConfig.numReels; i++) {
            delayRepeater[i] = 0;//set to 1 to slow down, after that same number if no symbols present otherwise +1
            if (tw_[i] != null) tw_[i].timeScale(4);
        }
    }

    function spinReelSwipe_(params) {
        if (gotError_) return;
        triggerSymbol_ = [];
        for (var i = 0; i < ReelConfig.numReels; i++) delayRepeater[i] = 0;
        var i = params[0];
        reelStarted_++;
        if (spinManager_.getSpinParams().reelPreMovement > 0) {
            tw_[i] = TweenMax.to(reel_[i].getAllIcons(), spinManager_.getSpinParams().reelPreMovementTime, {
                y: reel_[i].getAllIcons().y - spinManager_.getSpinParams().reelPreMovement,
                onComplete: spinSwipeAfterPreMovement,
                onCompleteParams: [params], ease: Power2.easeInOut
            });
        } else {
            spinSwipeAfterPreMovement(params);
        }
    }

    function spinReel_(params) {
        if (gotError_) return;
        triggerSymbol_ = [];
        var i = params[0];
        reelStarted_++;
        if (spinManager_.getSpinParams().reelPreMovement > 0) {
            tw_[i] = TweenMax.to(reel_[i].getAllIcons(), spinManager_.getSpinParams().reelPreMovementTime, {
                y: reel_[i].getAllIcons().y - spinManager_.getSpinParams().reelPreMovement,
                onComplete: spinAfterPreMovement,
                onCompleteParams: [params], ease: Power2.easeInOut
            });
        } else {
            spinAfterPreMovement(params);
        }
    }

    function startReel(params) {
        if (gotError_) return;
        //just set the blurr on spinning images
        setTimeout(setBlurrSmb_, (gameClass_.getCompulsivePlayer()) ? 100 : 500, params, true);
    }

    function stopState_() {
        if (gameClass_.getCompulsivePlayer() == false) {
            if (freeSpinsManager_.getIsInFs()==false) {
                buttonManager_.applyState("STOP");
            }
        }
        winManager_.clearWin();
    }

    function spinSwipeAfterPreMovement(params) {
        if (gotError_) return;
        var i = params[0];
        var bounce = params[1];

        if (i == ReelConfig.numReels - 1) {
            setTimeout(stopState_, 450);
        }

        tw_[i] = TweenMax.to(reel_[i].getAllIcons(), .2, {
            y: ((ReelConfig.icons[i] - (3 + ReelConfig.numIconsOnTop + ReelConfig.numIconsOnBottom)) * size_[numIcon_[i]]) + spinManager_.getSpinParams().reelSpinBounceMeasure,
            onComplete: onCompletePreFinal,
            onCompleteParams: [i], ease: Linear.easeNone
        });

        for (var ii = 0; ii < ReelConfig.numReels; ii++) reel_[ii].removeButton();
    }

    function spinAfterPreMovement(params) {
        if (gotError_) return;
        var i = params[0];
        var bounce = params[1];

        if (i == ReelConfig.numReels - 1) {
            setTimeout(stopState_, 450);
        }

        var time = spinManager_.getSpinParams().reelSecondMovementTime;
        if (twinReels_ != null && twinReels_[i] != null) {
            //tweenReels
        }
        //version with negative bounce
        tw_[i] = TweenMax.to(reel_[i].getAllIcons(), time, {
            y: size_[numIcon_[i]] * numIcon_[i],
            onComplete: onCompletePreFinal,
            onCompleteParams: [i], ease: Power4.easeIn
        });

        for (var ii = 0; ii < ReelConfig.numReels; ii++) reel_[ii].removeButton();
    }

    function onCompletePreFinal(i) {
        if (gotError_) return;
        if (setBlur_[i] == false) {
            setBlurrSmb_(i, true);
            setBlur_[i] = true;
        }
        var time = timeTween[i];
        if (responseReceived) countRepeat_[i] = countRepeat_[i] + 1;
        if (countRepeat_[i] <= delayRepeater[i]) {
            if (slowDownReel[i] == true) {
                time = (time / 10);
                //play accellerator sound

                slowDownReel[i] = false;
            }
            tw_[i] = TweenMax.fromTo(reel_[i].getAllIcons(), time, {y: size_[numIcon_[i]] * numIcon_[i]}, {
                y: size_[numIcon_[i]] * (ReelConfig.icons[i] - (3 + numIcon_[i] + ReelConfig.numIconsOnTop + ReelConfig.numIconsOnBottom)),
                onComplete: onCompletePreFinal,
                onCompleteParams: [i],
                ease: Linear.easeInOut
            });
        } else {
            if (spinManager_.getSpinReelResp().reel[i]) {
                numIcon_[i] = spinManager_.getSpinReelResp().reel[i].smb.length;
                reel_[i].updateReelSize(numIcon_[i]);

                setSmb_(i);

                for (var j = 0; j < ReelConfig.icons[i]; j++) {
                    c[i][j] = ReelConfig.reel.deltaY_0 - (size_[numIcon_[i]] * j) + size_[numIcon_[i]] / 2;//tunbling positions
                    cBeforeSplit[i][j] = ReelConfig.reel.deltaY_0 - (size_[numIcon_[i]] * j) + size_[numIcon_[i]] / 2;//tunbling positions
                }
                for (var j = 1; j <= ReelConfig.icons[i]; j++) {
                    c[i][-1 * (j)] = j;
                }
            }
            tw_[i] = TweenMax.fromTo(reel_[i].getAllIcons(), time, {y: size_[numIcon_[i]] * numIcon_[i]}, {
                y: size_[numIcon_[i]] * (ReelConfig.icons[i] - (3 + numIcon_[i] + ReelConfig.numIconsOnTop + ReelConfig.numIconsOnBottom)) + spinManager_.getSpinParams().reelSpinBounceMeasure,
                onComplete: ononCompleteFinalStep_,
                onCompleteParams: [i],
                ease: Linear.easeInOut
            });
        }
    }

    function ononCompleteFinalStep_(i) {
        gameClass.setReelsCallback(i);
        if (gotError_) return;
        if (i < ReelConfig.numReels && iconSound[i] != true && reelSound[i] == true) {
            soundManager_.playSound("reelSoundFast1");
        }
        reelSound[i] = false;
        setBlurrSmb_(i, false);
        soundManager_.playSound("reelStop");
        var time = spinManager_.getSpinParams().reelSpinBounceTime;
        tw_[i] = TweenMax.to(reel_[i].getAllIcons(), time, {
            y: ((ReelConfig.icons[i] - (numIcon_[i] + ReelConfig.numIconsOnTop + ReelConfig.numIconsOnBottom)) * size_[numIcon_[i]]),
            onStart: onStartFinal,
            onStartParams: [i],
            onComplete: onCompleteFinal,
            onCompleteParams: [i],
            ease: Power2.easeOut
        });
    }

    function onStartFinal(i) {

    }

    function upperSmb_(i) {
        var s = [];
        for (var j = 0; j < ReelConfig.icons[i]; j++) {
            if (animationMap_[i] != undefined && animationMap_[i][j] != null && animationMap_[i][j] != undefined) {
                reel_[i].getAllIcons().remove(animationMap_[i][j]);
            }
            animationMap_[i][j] = {};
        }
        //special attributes to add to trigger SYmbol Object (depending on the game)
        if (gameClass_.upperSmbCallBack != null) gameClass_.upperSmbCallBack(i);
    }

    function setBlurrSmb_(i, state) {
        for (var j = 0; j < ReelConfig.icons[i]; j++) {
            reel_[i].toggleSpin(j, state);
        }
    }

    function setSmb_(j) {
        for (var i = 0; i < numIcon_[j]; i++) {
            if (spinManager_.getSpinReelResp().reel[j].smb[i] != null) {
                //var smb=(spinManager_.getSpinReelResp().reel[j].smb[i].prevsmb!=null)?spinManager_.getSpinReelResp().reel[j].smb[i].prevsmb:spinManager_.getSpinReelResp().reel[j].smb[i].smb;
                reel_[j].newSmb(spinManager_.getSpinReelResp().reel[j].smb[i], i);
                reel_[j].toggleSpin(i, true);
            }
        }
    }

    function parseResume_(reel) {
        resumeJson_ = reel;
    }

    function onCompleteFinal(i) {
        if (gotError_) return;
        soundManager_.stopSound("reelSound");
        if (iconSound[i] == true) {
            soundManager_.playSound("reelSoundFast");//soundManager_.playSound("fsWin");
            iconSound[i] = false;
        }
        setBlurrSmb_(i, false);
        splitted_[i] = false;
        tw_[i] = null;
        reelArrived_++;
        tumbleReset_ = true;//no tumble on spin
        framework.updateSmallMessageText("");
        upperSmb_(i);  //move bottoom smb up
        reel_[i].resetStartPos();
        if (i == startSlow_) {
            for (var a = (Number(i) + 1); a <= ReelConfig.numReels; a++) timeTween[a] = timeTween[a] - .1;
            startSlow_++;
        }

        if (!isStopped_) resetCompulsive_();
        if (reelArrived_ >= reelStarted_) {
            //soundManager_.stopSound("reelSoundFast");
            logger("complete spin mov.------");
            gameClass_.spinAnimEnd();
        }
    }

    function split_(reel) {
        var split = false;
        var i = reel;
        //check if split
        if (reel_[reel].getSize() < spinManager_.getSpinReelResp().reel[reel].smb.length || splitted_[reel]) {


            split = true;
            //when split first change reel structure
            reel_[reel].updateSizeOnTumble(spinManager_.getSpinReelResp().reel[reel].smb);


            //change spin class symbols positions (c)
            for (var j = 0; j < ReelConfig.icons[i]; j++) {
                c[i][j] = reel_[reel].getPos(j).y + reel_[reel].getIconHeight(j) / 2;  // ReelConfig.reel.deltaY_0 - (size_[numIcon_[i]] * j) + size_[numIcon_[i]] / 2;//tunbling positions
            }
            if (splitted_[reel]) {
                for (var j = 0; j < ReelConfig.icons[i]; j++) {
                    cBeforeSplit[i][j] = reel_[reel].getPos(j).y + reel_[reel].getIconHeight(j) / 2;//tunbling positions
                }
            }
            splitted_[reel] = true;
        }
        return split;

    }


    var stopp = 0;

    function tumble_(reel, obj, reels, prevR) {
        if (reel == 1) {
            console.log("tumble 0 -------------------------")
        }
        if (gotError_) return;
        var time = (gameClass_.getCompulsivePlayer()) ? .35 : .45;
        freePos = [];
        freePosIndex = getSmallest_(obj.index) - 1;
        var dust = false;
        var numNewIcons = 0;
        var wh = false;

        //check if split symbol triggered, coordinated and reel structure has to change in that case
        var split = split_(reel) || splitted_[reel];
        var bloodyIconsOnTheReel = 0;
        var tumblingO = [];
        var getToSPlit = false;
        var hh = 0;
        hasToWait_ = true;
        whStarted[reel] = 0;

        if (split) {
            //new split
            //cycle through animations to remove them if normal (not split)


            for (var a in obj.tumbleObj) {
                var ind = obj.index[a];
                if (obj.tumbleObj[a].attribute.tumble == false && obj.tumbleObj[a].attribute.split == false) {
                    tumbleStarted[reel] = 1;
                    reel_[reel].getArr()[ind].visible = false; //icon
                    if (obj.tumbleObj[a] != null) {
                        var fr = reel_[reel].getFrameMW(obj.tumbleObj[a].iconNum);
                        fadeIcon_(fr);
                        fadeIcon_(obj.tumbleObj[a]);
                        fadeIcon_(obj.tumbleObj[a].F);
                        fadeIcon_(obj.tumbleObj[a].BG);
                        fadeIcon_(obj.tumbleObj[a].WH);
                    }
                    if (getToSPlit) {
                        obj.tumbleObj[a].nextH = hh;
                        tumblingO.push(obj.tumbleObj[a]);
                    }
                } else if (obj.tumbleObj[a].attribute.split && obj.tumbleObj[a].attribute.tumble == false) {
                    tumbleStarted[reel] = 1;
                    startWormHole_(reel, obj.tumbleObj[a], reels);
                    bloodyIconsOnTheReel = bloodyIconsOnTheReel + 2;
                } else if (obj.tumbleObj[a].attribute.split && obj.tumbleObj[a].attribute.tumble) {
                    if (obj.tumbleObj[a] != null) {
                        fadeIcon_(obj.tumbleObj[a].F);
                    }

                    tumbleStarted[reel] = 1;
                    reel_[reel].getArr()[ind].visible = true;
                    obj.tumbleObj[a].visible = false;
                    getToSPlit = true;
                    hh = obj.tumbleObj[a].newH;
                    bloodyIconsOnTheReel++;
                }
            }

            //cycle through new reel looking for tumbles and splits
            freePosIndex = 0;
            var ffs = false

            for (var b = prevR[reel].smb.length - 1; b >= 0; b--) {

                var tumblingIcon = prevR[reel].smb.length - b;
                if (reel_[reel].getArr()[tumblingIcon].tumble) {
                    tumbleStarted[reel] = 1;
                    bloodyIconsOnTheReel++;
                    reel_[reel].getArr()[tumblingIcon].visible = true;
                    var yy = c[reel][freePosIndex + 1];
                    if (reel_[reel].getArr()[tumblingIcon].split && tumblingO.length > 0) {
                        yy = cBeforeSplit[reel][freePosIndex + 1] + tumblingO[0].newH / 2 - tumblingO[0].nextH/2;
                        freePosIndex++;
                        reel_[reel].getArr()[tumblingIcon].iconNum = freePosIndex ;
                        ffs = true;
                    }

                    TweenMax.to(reel_[reel].getArr()[tumblingIcon], time, {
                        delay: .5,
                        y: yy,
                        ease: Power1.easeOut,
                        onComplete: changeIcon,
                        onCompleteParams: [reel, tumblingIcon, (freePosIndex + 1), reel_[reel].getArr()[freePosIndex + 1], reels,ffs]
                    });

                    if (reel_[reel].getTileMW(tumblingIcon) != undefined) reel_[reel].getTileMW(tumblingIcon).visible = true;

                    TweenMax.to(reel_[reel].getFrameMW(tumblingIcon), time, {
                        delay: .5,
                        y: yy,
                        ease: Power1.easeOut
                    });

                    if (reel_[reel].getTileMW(tumblingIcon) != undefined) {
                        TweenMax.to(reel_[reel].getTileMW(tumblingIcon), time, {
                            delay: .5,
                            y: yy,
                            ease: Power1.easeOut
                        });
                    }

                    if (reel_[reel].getWormHoleMW(tumblingIcon) != undefined) {
                        TweenMax.to(reel_[reel].getWormHoleMW(tumblingIcon), time, {
                            delay: .5,
                            y: yy,
                            ease: Power1.easeOut
                        });
                    }

                    freePosIndex++;
                    //if(ffs)freePosIndex++;
                } else if (reel_[reel].getArr()[tumblingIcon].split == false && prevR[reel].smb[b].animate == false) {
                    bloodyIconsOnTheReel++;
                    freePosIndex++;
                }else if (reel_[reel].getArr()[tumblingIcon].split == true && prevR[reel].smb[b].tumble == false) {
                    freePosIndex=freePosIndex+2;
                }
            }

            tumblingIcon = reels[reel].smb.length;
            //placing new symbols from above the reel
            for (var b = reels[reel].smb.length - bloodyIconsOnTheReel - 1; b >= 0; b--) {
                tumbleStarted[reel] = 1;
                tumblingIcon++;
                newSmb = obj.newSmbs.smb[b];
                freePosIndex = reels[reel].smb.length - 1 - newSmb.id;

                if (newSmb.splitOrigin == undefined || newSmb.splitOrigin < 0) {
                    var a = reel_[reel].swapSmb(newSmb, tumblingIcon);

                    TweenMax.to(reel_[reel].getArr()[tumblingIcon], time, {
                        delay: .5,
                        y: c[reel][freePosIndex + 1],
                        ease: Power1.easeOut,
                        onComplete: changeIcon,
                        onCompleteParams: [reel, tumblingIcon, (freePosIndex + 1), reel_[reel].getArr()[freePosIndex + 1], reels]
                    });

                    if (reel_[reel].getTileMW(tumblingIcon) != undefined) reel_[reel].getTileMW(tumblingIcon).visible = true;
                    var yy=c[reel][freePosIndex + 1];




                    TweenMax.to(reel_[reel].getFrameMW(tumblingIcon), time, {
                        delay: .5,
                        y: yy,
                        ease: Power1.easeOut
                    });

                    if (reel_[reel].getTileMW(tumblingIcon) != undefined) {
                        TweenMax.to(reel_[reel].getTileMW(tumblingIcon), time, {
                            delay: .5,
                            y: yy,
                            ease: Power1.easeOut
                        });
                    }

                    if (reel_[reel].getWormHoleMW(tumblingIcon) != undefined) {
                        TweenMax.to(reel_[reel].getWormHoleMW(tumblingIcon), time, {
                            delay: .5,
                            y: yy,
                            ease: Power1.easeOut
                        });
                    }


                    freePosIndex++;
                } else {
                    freePosIndex = freePosIndex + 2;
                }
                // }
            }

        } else {
            //regular reels tumble
            if (gotError_) return;
            var time = (gameClass_.getCompulsivePlayer()) ? .25 : .35;
            freePos = [];
            freePosIndex = getSmallest_(obj.index) - 1;
            var dust = false;
            var numNewIcons = 0;

            if (reel == 0) tumbleReset_ = false;
            for (var b = getSmallest_(obj.index); b <= numIcon_[reel] + obj.index.length; b++) {
                var ind = isTumbling(obj.index, b);
                if (ind >= 0) {   //tumbling icon
                    reel_[reel].getArr()[obj.index[ind]].visible = false; //icon

                    if (obj.tumbleObj[ind] != null) {
                        tumbleStarted[reel] = 1;
                        var bg = reel_[reel].getTileMW(obj.tumbleObj[ind].iconNum);
                        fadeIcon_(bg);
                        var fr = reel_[reel].getFrameMW(obj.tumbleObj[ind].iconNum);
                        fadeIcon_(fr);
                        fadeIcon_(obj.tumbleObj[ind]);
                        fadeIcon_(obj.tumbleObj[ind].F);
                        fadeIcon_(obj.tumbleObj[ind].BG);//background on branded mw stones
                    }
                } else {
                    tumbleStarted[reel] = 1;
                    if (b > numIcon_[reel]) {
                        numNewIcons++;
                        //outside reels, put a new symbol first
                        var newSmb;

                        for (var i = 0; i < numIcon_[reel]; i++) {
                            if (freePosIndex == i) newSmb = obj.newSmbs.smb[numIcon_[reel] - 1 - i];
                        }
                        var a = reel_[reel].swapSmb(newSmb, b);
                    }
                    //free = free -1;
                    TweenMax.to(reel_[reel].getArr()[b], time, {
                        delay: .5,
                        y: c[reel][freePosIndex + 1],
                        ease: Power1.easeOut,
                        onComplete: changeIcon,
                        onCompleteParams: [reel, b, (freePosIndex + 1)]
                    });

                    if (reel_[reel].getTileMW(b) != undefined) reel_[reel].getTileMW(b).visible = true;
                    if (game.cache.checkImageKey("smbFrame_" + reel_[reel].getArr()[b].smbNum + "_2")) {
                        TweenMax.to(reel_[reel].getFrameMW(b), time, {
                            delay: .5,
                            y: c[reel][freePosIndex + 1],
                            ease: Power1.easeOut
                        });
                        if (isBrandedMw() || needIconBg_(reel_[reel].getArr()[b].smbNum)) {
                            TweenMax.to(reel_[reel].getTileMW(b), time, {
                                delay: .5,
                                y: c[reel][freePosIndex + 1],
                                ease: Power1.easeOut
                            }); //branded stones BG
                        }
                        if (reel_[reel].getTileMW(b) != undefined) {
                            TweenMax.to(reel_[reel].getTileMW(b), time, {
                                delay: .5,
                                y: c[reel][freePosIndex + 1],
                                ease: Power1.easeOut
                            });
                        }
                    } else {
                        TweenMax.to(reel_[reel].getTileMW(b), time, {
                            delay: .5,
                            y: c[reel][freePosIndex + 1],
                            ease: Power1.easeOut
                        });
                    }

                    if (dust == false) {
                        dust = true;
                        setTimeout(dust_, (gameClass_.getCompulsivePlayer()) ? 600 : 850, reel_[reel].getArr()[b], freePosIndex + 2);
                    }
                    freePosIndex++;
                }
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

    function startWormHole_(reel,splitSmb,reelRes){
        soundManager_.playSound("wormHoleIn");
        whStarted[reel]++;
        //place the wormhole and play it
        wormHole_[reel][splitSmb.iconNum] = reel_[reel].getWormHoleMW(splitSmb.iconNum);
        wormHole_[reel][splitSmb.iconNum].visible=true;
        wormHole_[reel][splitSmb.iconNum].animations.add("anim");
        wormHole_[reel][splitSmb.iconNum].animations.play("anim", 24,true,false);

        //make symbol and tile small
        //making the new symbol appear
        //nothing else eed to be done on other symbols
        var obj=[];
        var index=[];

        if (game.cache.checkImageKey("smbFrame_" +splitSmb.smbNum+ "_2" )) {
            obj.push(reel_[reel].getFrameMW(splitSmb.iconNum));
            obj.push(splitSmb);
            obj.push(splitSmb.F);
            obj.push(splitSmb.BG);//background on branded mw stones
        } else {
            obj.push(splitSmb);
        }

        setTimeout(suckIcons_,300,obj,splitSmb.iconNum);
        setTimeout(reverseWormHole_,800,reel,splitSmb.iconNum);
        setTimeout(throwIcons_,1400,reel, reelRes,splitSmb.iconNum);
        setTimeout(stopWormHole_,2200,reel,splitSmb.iconNum);

    }

    function reverseWormHole_(reel,index){
        var anim=[];
        for (var b = 1;b <= wormHole_[reel][index].animations._outputFrames.length; b++) {
            anim.push(b);
        }
        anim.reverse();

        wormHole_[reel][index].animations.stop();
        wormHole_[reel][index].animations.add("animR",anim);
        wormHole_[reel][index].visible=true;
        wormHole_[reel][index].animations.play("animR", 24,true,false);
        gameClass_.expandReelSizeSplit();
    }

    function stopWormHole_(reel,index){
        wormHole_[reel][index].animations.stop();
        wormHole_[reel][index].visible=false;
        whStarted[reel]=whStarted[reel]-1;
        tumbleStarted[reel]=0;
    }

    function splitIcon_(objToSplit){
        suckIcon_(objToSplit);
        throwIcon_(objToSplit);
    }

    function throwIcon_(reel,newSmb,newIconPos,freeIndex){
        console.log("throw new splitted icon ")
        var obj=[];
        //get the origin smb and place it as well as the one below
        var a = reel_[reel].swapSmb(newSmb, freeIndex + newIconPos+5);
        //move new symbols in the right place
        a.y = c[reel][newIconPos];
        a.visible = true;
        a.scale.x=.2;
        a.scale.y=.2;
        obj.push(a);
        reel_[reel].getArr()[newIconPos] = a;
        reel_[reel].getArr()[newIconPos].visible = true;


        if (spinManager_.getTileMW(reel, freeIndex + newIconPos+5)!=undefined) {
            reel_[reel].getBgArray()[newIconPos] = spinManager_.getTileMW(reel, freeIndex + newIconPos+5);
            reel_[reel].getBgArray()[newIconPos].scale.x = .2;
            reel_[reel].getBgArray()[newIconPos].scale.y = .2;
            reel_[reel].getBgArray()[newIconPos].y=c[reel][newIconPos];
            obj.push(reel_[reel].getBgArray()[newIconPos]);
        }

        if (spinManager_.getFrameMW(reel, freeIndex + newIconPos+5)!=undefined) {
            reel_[reel].getFrameArray()[newIconPos] = spinManager_.getFrameMW(reel, freeIndex + newIconPos+5);
            reel_[reel].getFrameArray()[newIconPos].scale.x = .2;
            reel_[reel].getFrameArray()[newIconPos].scale.y = .2;
            reel_[reel].getFrameArray()[newIconPos].y=c[reel][newIconPos];
            obj.push(reel_[reel].getFrameArray()[newIconPos]);
        }

        if (spinManager_.getWormHoleMW(reel, freeIndex + newIconPos+5)!=undefined) {
            reel_[reel].getWHArray()[newIconPos] = spinManager_.getWormHoleMW(reel, freeIndex + newIconPos+5);
            reel_[reel].getWHArray()[newIconPos].scale.x = .2;
            reel_[reel].getWHArray()[newIconPos].scale.y = .2;
            reel_[reel].getWHArray()[newIconPos].y=c[reel][newIconPos];
            obj.push(reel_[reel].getWHArray()[newIconPos]);
        }


        for (var a in obj){
            blowIcon_(obj[a]);
        }

    }

    function throwIcons_(reel,reelRes,index){
        soundManager_.playSound("wormHoleOut");
        var freeIndex=5;
        var newIconsPos=[];

        for (var i=0;i<reelRes[reel].smb.length;i++){
            if (reelRes[reel].smb[i].splitOrigin>=0) {
                reelRes[reel].smb[i].splitOrigin=-1;
                var newIconPos = reelRes[reel].smb.length - i;
                var newSmb = reelRes[reel].smb[i];
                // var a = reel_[reel].swapSmb(reelRes[reel].smb[i], freeIndex + newIconPos);

                throwIcon_ (reel,newSmb,newIconPos,freeIndex);
            }
        }

    }

    function suckIcons_(obj,index){
        for (var a in obj){
            suckIcon_(obj[a],index);
        }
    }

    function suckIcon_(obj){
        if (obj!=undefined) {
            TweenMax.to(obj.scale, .5, {x: .2, y: .2});
            TweenMax.to(obj, .7, {angle:obj.angle+360});
            TweenMax.to(obj, .2, {delay: .5, alpha: 0}); //branded stones BG
        }
    }

    function blowIcon_(obj){
        if (obj!=undefined) {
            var h = (obj.newH != undefined) ? obj.newH : 140;
            var w = (obj.newW != undefined) ? obj.newW : 100;
            obj.angle=obj.angle+30;

            TweenMax.to(obj, .5, {width: w, height: h,angle:obj.angle-30});
            TweenMax.to(obj, .2, {delay: .5, alpha: 1}); //branded stones BG
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

    function changeIcon(reel,b,free,iconSmb,reels,ffs){
        reel_[reel].getArr()[free]=reel_[reel].getSymbol(b);
        reel_[reel].getBgArray()[free]=spinManager_.getTileMW(reel,b);
        reel_[reel].getFrameArray()[free]=spinManager_.getFrameMW(reel,b);
        reel_[reel].getWHArray()[free]=spinManager_.getWormHoleMW(reel,b);
        cBeforeSplit[reel][free]=c[reel][free];
        tumbleStarted[reel]=0;
        if (iconSmb!=undefined && reel_[reel].getArr()[b].split && wildManager_.isReelWilded(reel)==false){
            reel_[reel].getArr()[b].iconNum=free;
            startWormHole_(reel, reel_[reel].getArr()[b],reels);
        }
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

    function needIconBg_(icon) {
        if (gameParams.gameOriginalID==7025){
            if (icon==11 || icon ==12)return true;
        }
        return false;
    }

    function pauseSpin_() {
        if (gotError_)return;
        for (var i = 0; i < ReelConfig.numReels; i++) {
            if (tw_[i] != null)tw_[i].pause();
        }
    }

    function resumeSpin_() {
        if (gotError_)return;
        for (var i = 0; i < ReelConfig.numReels; i++) {
            if (tw_[i] != null)tw_[i].resume();
        }
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
        resumeSpin:resumeSpin_,
        pauseSpin:pauseSpin_,
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
        getWormHoleMW:function (reel,index){
            return reel_[reel].getWormHoleMW(index);
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
