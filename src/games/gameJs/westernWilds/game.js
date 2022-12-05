function Game(gameRef) {
    var game_ = gameRef;
    var onGame_=false;
    //animations
    var fs;
    var fr;
    var fsWon;
    var ap;
    var won=0;
    var spinning_=false;
    var messageOn_=false;
    var refuseCompulsive_=false;
    var compulsiveFlag_=false;
    var compulsiveSettingBakup_=displayManager.groups.centralWin.thresHolds;

    // "icon":[14,,14,,8],
    //     "anim":["place","boom","place","boom","still"],

    var wonBonus=0;
    var onGame_=false;
    var spinning_=false;
    var showScatterWin_=false;
    var showFsWin_=false;
    var isTumbling_=false;
    var isTumblingReq_=false;
    var sucessiveWin_=0;
    var shamrockPos_=0;
    var shamrockPrevPos_=-1;
    var freeTumbling_=false;
    var tntIdle_=false;


    var expanded_=0;
    var xOffset_=0;
    var xOffsetFull_=0;
    var yOffset_=0;
    var xRatio_=1;
    var xRatioFull_=1;
    var yRatio_=1;
    var xMask=ReelConfig.reel.deltaX_0;
    var yMask=100;
    var xMaxC_=0;
    var yMaxC_=0;
    var cloudHeight_=192;
    var maskWidth=864+ReelConfig.reel.deltaX_0;
    var maskHeight=650;
    var portraitLoaded_=false;
    var portraitLoading_=false;
    var scaleH_=window.innerHeight;
    var scaleW_= window.innerWidth;
    var portrait_=false;
    var activeKey_=[false,false,false];
    var delayedExplosion=false;
    var mask_=null;
    var mask2_=null;
    var reelBaseY_= ReelConfig.reel.deltaY_0;
    var conveyorSafes_=null;
    var safeAnim_=null;
    var safeDyn_=null;
    var safeTxt_=null;
    var safeBMPTxt_=null;
    var twTout_=0;
    var shTout_=0;
    var clTout_=null;

    function create_() {

    }

    function initGame_(){
        resume_();
    }

    function resume_(){
        //display manager levels
        displayManager_.getGroup("bg").visible = true;
        displayManager_.getGroup("mask").visible = true;
        displayManager_.getGroup("frame").visible = true;
        displayManager_.getGroup("logo").visible = true;
        displayManager_.getGroup("freeSpinAccumulator").visible = true;
        spinManager_.createReels();
        guiBottomBar_.setBetControlInitialBet(ReelConfig.bet);//todo change this, it's just to apply the default bet
        scatterManager_.addScatter(10);

        conveyorSafes_=game_.add.group();
        displayManager_.getGroup("conveyorBelt").addChild(conveyorSafes_);

        if (previewManager_.getClosed()) {
            //If "NEW_UI"
            if (ReelConfig.newUI && framework.isTouch()) {
                window.newUI.onPreview.dispatch(false) //Dispatch onPreview
            }
        }
        gcmCalls_("STAKE",balanceManager_.getCoinValue());
        if (communicationManager_.getResumeStatus().status.type=="tumble" && communicationManager_.getResumeStatus().status.state=="NORMAL") {
            if (communicationManager_.getResumeStatus().status !=null && communicationManager_.getResumeStatus().status.stake>0){
                changeBet_(communicationManager_.getResumeStatus().status.stake/100, true);
            }
            //f1x2.GcmError(-3);
            communicationManager_.getResumeStatus().freeSpin.totalWin=communicationManager_.getResumeStatus().status.totalWin*(balanceManager_.getCoinValue()/ lineManager_.getLinesNumber());
            communicationManager_.getResumeStatus().status.totalWin=communicationManager_.getResumeStatus().freeSpin.totalWin*100;
            communicationManager_.getResumeStatus().status.unsettledTotal=communicationManager_.getResumeStatus().status.totalWin;
            freeSpinsManager_.parse(communicationManager_.getResumeStatus());
            buttonManager_.applyState("NHFS");
            buttonManager_.applyHide();
            freeRoundsManager_.frChecker();
            wildManager_.resumeWildReel();
            //play clover bg
            me.triggerKey([communicationManager_.getResumeStatus().state.tntCollected!=undefined?communicationManager_.getResumeStatus().state.tntCollected:[]]);
            lineManager_.resumeTumbling(communicationManager_.getResumeStatus(),false);
            //if (sucessiveWin_>0)moveSideMeter_(true);
            messageBox_.showMessage("game", "A free tumble has been interrupted", "Press Spin to continue", startTumble_);
            bResume_=true;
            if (getOrientation()!="portrait")displayManager_.getGroup("bgAnimation").bank.children[0].visible=true;

        }else if (communicationManager_.getResumeStatus().status.type=="tumble" && communicationManager_.getResumeStatus().status.state=="FREESPINS") {
            if (communicationManager_.getResumeStatus().status !=null && communicationManager_.getResumeStatus().status.stake>0){
                changeBet_(communicationManager_.getResumeStatus().status.stake/100, true);
            }
            //f1x2.GcmError(-3);
            communicationManager_.getResumeStatus().freeSpin.totalWin=communicationManager_.getResumeStatus().status.totalWin*(balanceManager_.getCoinValue()/ lineManager_.getLinesNumber());
            communicationManager_.getResumeStatus().status.totalWin=communicationManager_.getResumeStatus().freeSpin.totalWin*100;
            communicationManager_.getResumeStatus().status.unsettledTotal=communicationManager_.getResumeStatus().status.totalWin;

            numFs_=Number(communicationManager_.getResumeStatus().freeSpin.num);
            freeSpinsManager_.parse(communicationManager_.getResumeStatus());
            buttonManager_.applyState("NHFS");
            buttonManager_.applyHide();
            freeRoundsManager_.frChecker();


            //if (multiplier_>0)moveSideMeterFS_(true);
            lineManager_.resumeTumbling(communicationManager_.getResumeStatus(),true);
            fsLogoOut_();
            freeSpinsManager_.resumeFs();
            messageBox_.showMessage("game", "A free tumble has been interrupted", "Press Spin to continue", startTumble_);
            bResume_=true;

        }else if (communicationManager_.getResumeStatus().status.state.indexOf("FREESPINS")>=0 && communicationManager_.getResumeStatus().status.type=="NORMAL") {
            if (communicationManager_.getResumeStatus().status !=null && communicationManager_.getResumeStatus().status.stake>0){
                changeBet_(communicationManager_.getResumeStatus().status.stake/100, true);
            }

            //f1x2.GcmError(-3);
            communicationManager_.getResumeStatus().freeSpin.totalWin=communicationManager_.getResumeStatus().status.totalWin*(balanceManager_.getCoinValue()/ lineManager_.getLinesNumber());
            communicationManager_.getResumeStatus().status.totalWin=communicationManager_.getResumeStatus().freeSpin.totalWin*100;
            communicationManager_.getResumeStatus().status.unsettledTotal=communicationManager_.getResumeStatus().status.totalWin;
            numFs_=Number(communicationManager_.getResumeStatus().freeSpin.num);
            freeSpinsManager_.parse(communicationManager_.getResumeStatus());
            buttonManager_.applyState("NHFS");
            buttonManager_.applyHide();
            freeRoundsManager_.frChecker();

            fsLogoOut_();
            freeSpinsManager_.resumeFs();
            messageBox_.showMessage("game", "You have unused Free Spins", "Press Spin to continue", startResumeFs_);
            bResume_=true;
        }else{

            buttonManager_.applyRestore();
            buttonManager_.applyState("NH");
            freeRoundsManager_.frChecker();

            //soundManager_.playBgSound("bgSlot");
            activateShamrockScroll_();
            //play clover bg
            sucessiveWin_=(communicationManager_.getResumeStatus().status.numTumbles!=undefined)?communicationManager_.getResumeStatus().status.numTumbles:0;
            twTout_=setTimeout(startTumbleWeed_,Util.getRandomInt(30,120)*1000);
            //shTout_=setTimeout(startShooting_,Util.getRandomInt(50,180)*1000);
            if (getOrientation()!="portrait")displayManager_.getGroup("bgAnimation").bank.children[0].visible=true;

            clTout_=TweenMax.to(displayManager_.getGroup("mask").bg32.children[0], 45,{
                y: -481,
                repeat: -1,
                ease:Linear.easeInOut
            });


        }

        onGame_=true;
        framework.showFramework();
        setPortrait_((getOrientation()=="portrait")?true:false);
        if(!framework.isTouch()){
            setMask_();
        }

        // setInterval(activateFSMusic,8000);


    }

    function startTumbleWeed_() {
        var time=0;
        clearTimeout(twTout_);
        if (framework.isTouch())return;
        if (!freeSpinsManager_.getIsInFs() && hasFocus_) {
            var tw = displayManager_.getGroup("bgAnimation").tw.children[0];
            tw.animations.add("anim");
            tw.animations.play("anim", 24, true, false);
            tw.x = -50;
            tw.visible = true;
            time = Util.getRandomInt(30, 65) / 10;
            var numBounce = Util.getRandomInt(2, 4)


            var bn = displayManager_.getGroup("bgAnimation").bank.children[0];
            bn.animations.add("anim");
            bn.animations.play("anim", 24, 2, false);
            bn.visible = true;
            tw.y=displayManager.groups.bgAnimation.graphAsset.tw.y;
            TweenMax.to(tw, time, {x: 1400, onComplete: endTumbleWeed_})
            TweenMax.to(tw, time / numBounce, {
                y: tw.y + Util.getRandomInt(-5, +17),
                ease: Elastic.easeInOut,
                repeat: numBounce,
                yoyo: true
            });
            soundManager_.playSound("tumbleWeed");
            twTout_=setTimeout(startTumbleWeed_,Util.getRandomInt(time +30,time+120)*1000); //restart between 30 sec and 2 min after the end
        }else if (hasFocus_==false){
            twTout_=setTimeout(startTumbleWeed_,10000); //restart between 30 sec and 2 min after the end
        }

    }

    function endTumbleWeed_(){
        soundManager_.stopSound("tumbleWeed");
    }

    function startShooting_() {
        if (framework.isTouch())return;
        var tw=displayManager_.getGroup("bgAnimation").sheriff.children[0];
        tw.x=-116;
        tw.visible=true;
        var time=.5;
        soundManager_.playSound("drawPistol");
        TweenMax.to(tw, time, {x:116, onComplete:shoot_})
    }

    function endShooting_() {
        var tw=displayManager_.getGroup("bgAnimation").sheriff.children[0];
        tw.visible=true;
        var time=.2;
        shTout_= TweenMax.to(tw, time, {x:-116});
        soundManager_.playSound("drawPistol");
        //randimy timed shTout_=setTimeout(startShooting_,Util.getRandomInt(time +50,time+180)*1000); //restart between 30 sec and 2 min after the end
    }

    function shoot_(){
        var tw=displayManager_.getGroup("bgAnimation").pow1.children[0];
        tw.visible=true;
        tw.animations.add("anim");
        tw.animations.play("anim", 24, false, false,rewind1_);
        soundManager_.playSound("pistolShot");
        setTimeout(reShoot_,500);
    }

    function rewind1_(){
        displayManager_.getGroup("bgAnimation").pow1.frame=0;
        displayManager_.getGroup("bgAnimation").pow1.children[0].visible=false;
        setTimeout(endShooting_,500);
    }

    function rewind2_(){
        displayManager_.getGroup("bgAnimation").pow2.frame=0;
        displayManager_.getGroup("bgAnimation").pow2.children[0].visible=false;

    }

    function reShoot_(){
        var tw=displayManager_.getGroup("bgAnimation").pow2.children[0];
        tw.visible=true;
        tw.animations.add("anim");
        tw.animations.play("anim", 24, false, false,rewind2_);
        soundManager_.playSound("pistolShot");
    }

    function setMask_(){
        if (mask_ != null) {
            //game_.stage.remove(mask_);
            mask_.destroy();
            mask_ = null;
        }

        if (mask2_ != null) {
            //game_.stage.remove(mask_);
            mask2_.destroy();
            mask2_ = null;
        }
        mask_= game_.add.graphics(0, 0);
        mask_.beginFill(0xffffff);
        mask_.drawRect(xMask, yMask, maskWidth* window.devicePixelRatio, maskHeight);
        displayManager_.getGroup("reels").mask=mask_;



        //cloud mask
        mask2_= game_.add.graphics(0, 0);
        mask2_.beginFill(0xffffff);
        mask2_.drawRect(xMaxC_, yMaxC_, window.innerWidth* window.devicePixelRatio, cloudHeight_*xRatio_);
        displayManager_.getGroup("mask").bg32.mask=mask2_;
    }

    function buldConveyor_(safes){
        conveyorSafes_.removeAll();
        for (var i=1;i<=7;i++){
            if (safes[i]>0) {
                var sp = new Phaser.Sprite(game_, 462 + i * 79, 46, "safe" + safes[i]);
                sp.anchor.set(.5, .5);
                sp.visible = true;
                //if (displayManager.groups[a].graphAsset[ga].angle != null) sp.angle = displayManager.groups[a].graphAsset[ga].angle;
                conveyorSafes_.addChild(sp);
            }
        }
    }

    function moveConveyor_(safes){
        var i = 6
        if(safes[i]>0) {
            var sp = new Phaser.Sprite(game_, 462 + (i + 1) * 79, 46, "safe" + safes[i]);
            sp.anchor.set(.5, .5);
            sp.visible = true;
            //if (displayManager.groups[a].graphAsset[ga].angle != null) sp.angle = displayManager.groups[a].graphAsset[ga].angle;
            conveyorSafes_.addChild(sp);
        }
        soundManager_.playSound("conveyorBelt");
        displayManager_.getGroup("maskFS").cogsL.children[0].animations.add("anim");
        displayManager_.getGroup("maskFS").cogsL.children[0].animations.play("anim", 24, false, false);
        displayManager_.getGroup("maskFS").cogsR.children[0].animations.add("anim");
        displayManager_.getGroup("maskFS").cogsR.children[0].animations.play("anim", 24, false, false);

        TweenMax.to(conveyorSafes_, 1, {x:-79})
        TweenMax.to(displayManager_.getGroup("conveyorBelt").belt, 1, {x:-79,onComplete:restoreSafesPosition_,onCompleteParams:[safes]})
    }

    function restoreSafesPosition_(safes) {
        var x=conveyorSafes_.children[0].x-79;
        var y=conveyorSafes_.children[0].y;
        conveyorSafes_.removeAll();
        conveyorSafes_.x=0;
        displayManager_.getGroup("conveyorBelt").belt.x=0;
        buldConveyor_(safes);
        if (safes[0]>0) {
            //positioning the safe animation
            safeAnim_ = new Phaser.Sprite(game_, x, y, "safe" + safes[0]);
            safeAnim_.anchor.set(.5, .5);
            safeAnim_.visible = true;
            safeAnim_.animations.add("anim");

            var safeReverse = [];
            for (var b = 1; b < safeAnim_.animations._outputFrames.length; b++) {
                safeReverse.push(b);
            }
            safeReverse.reverse();
            safeAnim_.animations.add("animReverse", safeReverse);

            displayManager_.getGroup("wins").visible = true;
            //if (displayManager.groups[a].graphAsset[ga].angle != null) sp.angle = displayManager.groups[a].graphAsset[ga].angle;
            displayManager_.getGroup("wins").addChild(safeAnim_);
        }
    }

    function explodeSafe_(json){
        displayManager_.getText("lineWin").setText("");//removing win text
        var safes=json.state.safes;
        soundManager_.playSound("safeOpening");
        TweenMax.to(safeAnim_, .25, {x:693,y:364});//moving to center-ish

        safeAnim_.animations.play("anim", 24, false, false);

        if (safes[0]==1){
            //additional wilds
            setTimeout(delayedAddWilds_,850,json);
        }else if (safes[0]==2){
            //additional multiplier
            setTimeout(delayedAddMults_,850,json);
        }else if (safes[0]==3){
            //additional FS
            setTimeout(delayedAddFS_,850,json);
        }else if (safes[0]==4){
            setTimeout(delayedAddDynamite_,850,json);
        }

    }

    function delayedAddWilds_(){
        soundManager_.playSound("additionalWilds");
        //extra reel positions
        safeDyn_ = new Phaser.Sprite(game_, 640, 360, "safeWild");
        safeDyn_.anchor.set(.5, .5);
        safeDyn_.visible = true;
        displayManager_.getGroup("wins").visible = true;
        //if (displayManager.groups[a].graphAsset[ga].angle != null) sp.angle = displayManager.groups[a].graphAsset[ga].angle;
        displayManager_.getGroup("wins").addChild(safeDyn_);
        setTimeout(delayedRemoveDynamite_,1500);

    }

    function delayedAddMults_(json){
        soundManager_.playSound("additionalMult");
        displayManager_.getText("txt1").setText("x" +json.state.mult);
        displayManager_.getText("txt1").visible=true;
        displayManager_.getText("txt2").visible=true;
        setTimeout(delayedRemoveTxt_,2000);
    }

    function delayedAddFS_(json){
        soundManager_.playSound("additionalFS");
        displayManager_.getText("txt1").setText("+ " +json.state.wonAdditionalSpins);
        displayManager_.getText("txt1").visible=true;
        displayManager_.getText("txt3").visible=true;
        setTimeout(delayedRemoveTxt_,2000);
    }

    function delayedRemoveTxt_(){
        displayManager_.getText("txt1").visible=false;
        displayManager_.getText("txt2").visible=false;
        displayManager_.getText("txt3").visible=false;
    }

    function delayedRemoveDynamite_(){
        displayManager_.getGroup("wins").remove(safeDyn_);
    }

    function delayedAddDynamite_(){
        soundManager_.playSound("additionalMult");
        //extra reel positions
        safeDyn_ = new Phaser.Sprite(game_, 640, 350, "safeDynamite");
        safeDyn_.anchor.set(.5, .5);
        safeDyn_.visible = true;
        displayManager_.getGroup("wins").visible = true;
        //if (displayManager.groups[a].graphAsset[ga].angle != null) sp.angle = displayManager.groups[a].graphAsset[ga].angle;
        displayManager_.getGroup("wins").addChild(safeDyn_);
        setTimeout(delayedRemoveDynamite_,1500);
    }

    function showPrice_(json){
        var safes=json.state.safes;
        soundManager_.playSound("safeClosing");
        safeAnim_.animations.play("animReverse", 24, false, true);
        if (safes[0]==1){
            //additional wilds
            setWilds_();
        }else if (safes[0]==2){
            //additional multiplier
            setMult_(json.state.mult);
        }else if (safes[0]==3){
            //additional FS
            setExtraFS_( json.state.wonAdditionalSpins,json.state.freespinsRemaining,json.win.lineWin);
        }else if (safes[0]==4){
            setTimeout(wildsSound_,1000);
            var pos=json.win.scatter.scatters[0].smbPos;
            for ( var a in pos) {
                displayManager_.getGroup("drawers")["draw_" + json.win.scatter.scatters[0].reel + "_" +pos[a]].children[0].animations.frame=0;
                displayManager_.getGroup("drawers")["draw_" + json.win.scatter.scatters[0].reel + "_" +pos[a]].children[0].animations.add("anim");
                displayManager_.getGroup("drawers")["draw_" + json.win.scatter.scatters[0].reel + "_" +pos[a]].children[0].play("anim", 24, false, false);
            }
        }
     }

    function setWilds_(){
        for (var i =0; i < ReelConfig.numReels; i++) {
            for (var a = 0; a < ReelConfig.numIcons; a++) {
                if (spinManager_.getSpinReelResp().reel[i].smb[a]!=undefined && spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb != undefined) {
                    var smb =  spinManager_.getSpinReelResp().reel[i].smb[a].smb;
                    spinManager_.getReels()[i].swapSmb(smb, a);
                }
            }
        }
    }

    function setMult_(m){
        freeSpinsManager_.updateFreeSpinsMult(m);
        if (m == 5 ) {
            soundManager_.playSound("multiplier_1");
        } else if (m ==10) {
            soundManager_.playSound("multiplier_2");
        } else if (m >15) {
            soundManager_.playSound("multiplier_3");
        }
    }

    function setExtraFS_(num,tot,won){
        var w=Number(tot);
        soundManager_.playSound("additionalFs");
        if (won>0){
            w=(Number(tot) -1  );
        }
        freeSpinsManager_.fsWon(-1*Number(tot));

    }

    function restoreFSAnchor_(){
        // displayManager_.getGroup("freeSpinAccumulatorFs").bg2.children[0].visible=true;
        displayManager_.getText("fsAdditional").alpha=0;
        //freeSpinsManager_.updateFreeSpinsNum();
        // for (var i = 1; i < 5; i++) {
        //     var anchor = displayManager_.getGroup("freeSpinAccumulatorFs")["anchor" + i + "_In"].children[0];
        //     anchor.alpha=1;
        // }

    }

    var firstLandscape=false;//found the portrait inneheight fix for apple  on  22/10/2021 it's on the index page shrink-to-fit=no   this line was not allowing the game to load in portrait first: isIOS();
    function setPortrait_(port){
        scaleH_=window.innerHeight;
        scaleW_= window.innerWidth;
        if (framework.isTouch()!=true)return;
        hideGame_(true);
        portrait_=port;
        loaderManager_.switchPortrait(port);
        if (portraitLoading_)return;
            var fs= (freeSpinsManager_!=undefined && freeSpinsManager_.getIsInFs())?"FS":"";

        console.log(scaleH_ + " bb " + scaleW_)
        if (port) {
            if (portraitLoaded_) {
                if (firstLandscape){
                    //load the game on landscape of r iOS
                    $(".turnLandscape").removeClass('hidden');
                    return;
                }
                xRatio_ = scaleW_ / 570;//ratio between the current Width and the reel width to make the reels bigger as the current width (almost....)
                xRatioFull_ = scaleW_ / 1200;
                var xCompensate= 1;
                if (scaleW_>1000){
                    if (xRatio_>.91){//ipad pro
                        var factor=13500;
                        xCompensate=1+(xRatio_-.95-(scaleW_)/factor);
                        xRatio_=.95;
                    }
                    xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(415*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                }else if (scaleW_>760){//ipad
                    if (xRatio_>.60){
                        var factor=43000;
                        xCompensate=1+(xRatio_-.60-(scaleW_)/factor);
                        xRatio_=.90;
                    }
                    xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(370*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                }else{
                    //other devices which for some reason are showing a heigh smaller then expected
                    if (scaleW_==414 && (scaleH_==622|| scaleH_==620)) {//iphone 8+
                        xRatio_=xRatio_*.85 ;
                        xCompensate=1.15;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(467*xRatio_*xCompensate));//  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                    }else if (scaleW_==375 && (scaleH_<667)){
                        xRatio_=xRatio_*.80;
                        xCompensate=1.2;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(466*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                    }else if (scaleW_==320 && (scaleH_<453)){
                        xRatio_=xRatio_*.75;
                        xCompensate=1.25;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(465*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                    }else if (scaleW_==320 && (scaleH_<550)){
                        xRatio_=xRatio_*.65;
                        xCompensate=1.35;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(460*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                     }else if (scaleW_==414 && (scaleH_>660)){//iponx 11
                        xRatio_=xRatio_*.95;
                        xCompensate=1.05;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(484*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                    }else{
                        //android  samsun s8
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(488*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                    }

                }
                xOffsetFull_ = -1 * (ReelConfig.reel.deltaX_0)*xRatioFull_   +(scaleW_-(985*xRatioFull_));
                xRatio_=Number(Util.formatNumb(xRatio_,2))* window.devicePixelRatio;
                xOffset_=Number(Util.formatNumb(xOffset_,1))* window.devicePixelRatio;
                //alert(xCompensate+" scale to "+ xRatio_)
                xMask = 0;
                var xCenter= (scaleW_/2)-640

                if ($("#footer-bottom-message")!=undefined)$("#footer-top-win").html($("#footer-bottom-message")[0].outerText);
                if ($("#footer-bottom-message")!=undefined)$("#footer-bottom-message").html("")

                maskHeight=maskHeight*xRatio_;
                yOffset_ =  14*xRatio_   // scaleH_- maskHeight - scaleH_/ 2.25;         //change the objects Y position to move on top of the portrait mode UI
                yMask = yOffset_ + (187 * xRatio_);
                yMaxC_= yOffset_ - (29 * xRatio_);
                xMaxC_=0
                cloudHeight_=268;
                adaptPortraitAsset_(displayManager_.getGroup("reels"),xOffset_-8*xRatio_,yOffset_+90*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("winGlow"),xOffset_-8*xRatio_,yOffset_+90*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("wild"),xOffset_-8*xRatio_,yOffset_+90*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("freeSpinAccumulator"),xOffset_-8*xRatio_,yOffset_+90*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("wins"),xOffset_-8*xRatio_,yOffset_+90*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("drawers"),xOffset_-8*xRatio_,yOffset_+90*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("bgAnimation"),xOffset_-8*xRatio_,yOffset_+90*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("safePrize"),xOffset_-8*xRatio_,yOffset_+90*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("conveyorBelt"),xOffset_-8*xRatio_,yOffset_+90*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("bgAnimation"),xOffset_-8*xRatio_,yOffset_+90*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("freeSpins"),xOffset_-8*xRatio_,yOffset_,xRatio_*1.15);
                adaptPortraitAsset_(displayManager_.getGroup("freeRounds"),xOffset_-(55*xRatio_),0,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("logo"),xOffset_-8*xRatio_,yOffset_+90*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("bg"),xOffset_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("bgFS"),xOffset_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("frame"),xOffset_,yOffset_-30,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("frameFS"),xOffset_,yOffset_-30,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("mask"), xOffset_-(55*xRatio_),0,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("maskFS"), xOffset_-(55*xRatio_),0,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("centralLineWin"), xOffset_-8*xRatio_,yOffset_+90*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("centralWin"), xOffset_-8*xRatio_,yOffset_+90*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("winWays"),scaleW_/2,5,xRatio_*1.18);
                adaptPortraitAsset_(displayManager_.getGroup("centralFuntainSmallObj"), xOffset_-8*xRatio_,yOffset_+90*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("fsWonPanel"),xOffset_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("frWonPanel"),xOffset_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("preview"),xOffset_+200*xRatio_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("msgBox"),xOffset_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("msgBoxFR"),xOffset_,yOffset_,xRatio_);


                //portait bg
                setPorytraitAssets_(displayManager_.getGroup("mask").bg2.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("mask").bg2.children[1],true,null,(647));
                setPorytraitAssets_(displayManager_.getGroup("mask").bg3.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("mask").bg3.children[1],true);
                setPorytraitAssets_(displayManager_.getGroup("mask").bg31.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("mask").bg31.children[1],true);

                setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").shamrock_1.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").shamrock_1.children[1],false,640,-30);
                setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").shamrock_2.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").shamrock_2.children[1],false,640,-30);
                setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").shamrock_3.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").shamrock_3.children[1],false,640,-30);
                setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").shamrock_Active.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").shamrock_Active.children[1],false,640,-30);

                //fs
                setPorytraitAssets_(displayManager_.getGroup("maskFS").bg2.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("maskFS").bg2.children[1],true,null,735);
                setPorytraitAssets_(displayManager_.getGroup("maskFS").bg3.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("maskFS").bg3.children[1],true);
                setPorytraitAssets_(displayManager_.getGroup("maskFS").cogsL.children[0],true,410,200);
                setPorytraitAssets_(displayManager_.getGroup("maskFS").cogsR.children[0],true,964,200);
                setPorytraitAssets_(displayManager_.getGroup("maskFS").selector.children[0],true,450,155);

                setPorytraitAssets_(displayManager_.getGroup("bg").bg.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("bg").bg.children[1],true,852,282);
                setPorytraitAssets_(displayManager_.getGroup("bg").bg1.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("bg").bg1.children[1],true,-54,282);
                setPorytraitAssets_(displayManager_.getGroup("bgAnimation").bank.children[0],false);
                //FS
                setPorytraitAssets_(displayManager_.getGroup("bgFS").bg.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("bgFS").bg.children[1],true,852,194);
                setPorytraitAssets_(displayManager_.getGroup("bgFS").bg1.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("bgFS").bg1.children[1],true,-54,194);
                setPorytraitAssets_(displayManager_.getGroup("freeSpins").fsbox1,false);
                setPorytraitAssets_(displayManager_.getGroup("freeSpins").fsbox2,false);
                setPorytraitAssets_(displayManager_.getGroup("freeSpins").fsbox3,false);

                //main bg (behind reels)
                setPorytraitAssets_(displayManager_.getGroup("frame").bg4.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("frame").bg4.children[1],true,410,298);
                setPorytraitAssets_(displayManager_.getGroup("frameFS").bg4.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("frameFS").bg4.children[1],true,410,207);



                //bottom FS
                var offset=freeSpinsManager_.getIsInFs()?-11:0
                setPorytraitAssets_(displayManager_.getText("fsLabel"),true,388,24);
                setPorytraitAssets_(displayManager_.getText("fsLabelShadow"),true,386,25);
                setPorytraitAssets_(displayManager_.getText("fsValue"),true,388,48);
                setPorytraitAssets_(displayManager_.getText("fsValueShadow"),true,386,49);
                setPorytraitAssets_(displayManager_.getText("totWonLabel"),true,724,24);
                setPorytraitAssets_(displayManager_.getText("totWonLabelShadow"),true,722,25);
                setPorytraitAssets_(displayManager_.getText("totWonValue"),true,724,48);
                setPorytraitAssets_(displayManager_.getText("totWonValueShadow"),true,722,49);
                setPorytraitAssets_(displayManager_.getText("fsMultLabel"),true,554,24);
                setPorytraitAssets_(displayManager_.getText("fsMultLabelShadow"),true,552,25);
                setPorytraitAssets_(displayManager_.getText("fsMultValue"),true,554,48);
                setPorytraitAssets_(displayManager_.getText("fsMultValueShadow"),true,552,49);

                //FR
                setPorytraitAssets_(displayManager_.getGroup("freeRounds").frPanel.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("freeRounds").frPanel.children[1],true,0,0)
                setPorytraitAssets_(displayManager_.getText("frLabel"),true,400,20);
                setPorytraitAssets_(displayManager_.getText("frValue"),true,400,50);
                setPorytraitAssets_(displayManager_.getText("frTotWonLabel"),true,1000,20);
                setPorytraitAssets_(displayManager_.getText("frTotWonValue"),true,1000,50);


                //preview
                setPorytraitAssets_(displayManager_.getGroup("preview").children[3],null,150,960);
                setPorytraitAssets_(displayManager_.getGroup("preview").children[4],null,210,965);
                setPorytraitAssets_(displayManager_.getGroup("preview").children[5],null,null,960);
                setPorytraitAssets_(displayManager_.getGroup("preview").children[6],null,null,960);
                setPorytraitAssets_(displayManager_.getGroup("preview").bgmsgPw.children[0],true);
                setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview1.children[0],true,140,30);
                setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview2.children[0],true,140,500);


                //setPorytraitAssets_(displayManager_.getGroup("winWays").children[1],true,null,null, xRatio_);
                //---

            }else{
                scaleH_=window.innerHeight;
                scaleW_= window.innerWidth;
                console.log(scaleH_ + " " + scaleW_)
                portraitLoading_=true;
                loaderManager_.loadPortrait();
                return;
            }
        }else{
            //-----------------------------------loaded in landscape, can hide message
            firstLandscape=false;
            $(".turnLandscape").addClass('hidden');
            //-----------------------------------
            $("#footer-bottom-message").html($("#footer-top-win")[0].outerText);
            $("#footer-top-win").html("");
            prevInner_=window.innerWidth
            xRatio_=1;
            xOffset_=ReelConfig.reel.deltaX_0;
            yOffset_=0;
            maskWidth=864+ReelConfig.reel.deltaX_0;
            maskHeight=560;
            yMask=100;
            xMask=0;
            xMaxC_=0;
            yMaxC_=0;
            cloudHeight_=192
            adaptPortraitAsset_(displayManager_.getGroup("reels"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("cracking"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("winGlow"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("wild"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("freeSpinAccumulator"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("wins"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("drawers"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("safePrize"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("conveyorBelt"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("bgAnimation"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("freeSpins"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("freeRounds"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("bg"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("bgFS"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("frame"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("frameFS"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("mask"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("maskFS"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("centralWin"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("centralLineWin"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("centralFuntainSmallObj"), 0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("fsWonPanel"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("frWonPanel"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("frWonPanel"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("msgBox"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("msgBoxFR"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("logo"),0,0,1);

            //portait bg
            setPorytraitAssets_(displayManager_.getGroup("mask").bg2.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("mask").bg2.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("mask").bg3.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("mask").bg3.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("mask").bg31.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("mask").bg31.children[0],true);

            setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").shamrock_1.children[0],false);
            setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").shamrock_1.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").shamrock_2.children[0],false);
            setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").shamrock_2.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").shamrock_3.children[0],false);
            setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").shamrock_3.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").shamrock_Active.children[0],false);
            setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").shamrock_Active.children[1],false);
            //fs
            setPorytraitAssets_(displayManager_.getGroup("maskFS").bg2.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("maskFS").bg2.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("maskFS").bg3.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("maskFS").bg3.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("maskFS").cogsL.children[0],true,356,90);
            setPorytraitAssets_(displayManager_.getGroup("maskFS").cogsR.children[0],true,922,90);
            setPorytraitAssets_(displayManager_.getGroup("maskFS").selector.children[0],true,406,52);
            setPorytraitAssets_(displayManager_.getGroup("freeSpins").fsbox1,true);
            setPorytraitAssets_(displayManager_.getGroup("freeSpins").fsbox2,true);
            setPorytraitAssets_(displayManager_.getGroup("freeSpins").fsbox3,true);

            setPorytraitAssets_(displayManager_.getGroup("bg").bg.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("bg").bg.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("bg").bg1.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("bg").bg1.children[0],true,0);
            setPorytraitAssets_(displayManager_.getGroup("bgAnimation").bank.children[0],(freeSpinsManager_.getIsInFs())?false:true);
            //fs
            setPorytraitAssets_(displayManager_.getGroup("bgFS").bg.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("bgFS").bg.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("bgFS").bg1.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("bgFS").bg1.children[0],true);
            //main bg (behind reels)
            setPorytraitAssets_(displayManager_.getGroup("frame").bg4.children[0],true,420,192);
            setPorytraitAssets_(displayManager_.getGroup("frame").bg4.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("frameFS").bg4.children[0],true,420,102);
            setPorytraitAssets_(displayManager_.getGroup("frameFS").bg4.children[1],false);



            setPorytraitAssets_(displayManager_.getText("fsLabel"),true,displayManager.groups.freeSpins.texts.fsLabel.x,displayManager.groups.freeSpins.texts.fsLabel.y);
            setPorytraitAssets_(displayManager_.getText("fsValue"),true,displayManager.groups.freeSpins.texts.fsValue.x,displayManager.groups.freeSpins.texts.fsValue.y);
            setPorytraitAssets_(displayManager_.getText("totWonLabel"),true,displayManager.groups.freeSpins.texts.totWonLabel.x,displayManager.groups.freeSpins.texts.totWonLabel.y);
            setPorytraitAssets_(displayManager_.getText("totWonValue"),true,displayManager.groups.freeSpins.texts.totWonValue.x,displayManager.groups.freeSpins.texts.totWonValue.y);
            setPorytraitAssets_(displayManager_.getText("fsMultValue"),true,displayManager.groups.freeSpins.texts.fsMultValue.x,displayManager.groups.freeSpins.texts.fsMultValue.y);
            setPorytraitAssets_(displayManager_.getText("fsMultLabel"),true,displayManager.groups.freeSpins.texts.fsMultLabel.x,displayManager.groups.freeSpins.texts.fsMultLabel.y);

            setPorytraitAssets_(displayManager_.getText("fsLabelShadow"),true,displayManager.groups.freeSpins.texts.fsLabelShadow.x,displayManager.groups.freeSpins.texts.fsLabelShadow.y);
            setPorytraitAssets_(displayManager_.getText("fsValueShadow"),true,displayManager.groups.freeSpins.texts.fsValueShadow.x,displayManager.groups.freeSpins.texts.fsValueShadow.y);
            setPorytraitAssets_(displayManager_.getText("totWonLabelShadow"),true,displayManager.groups.freeSpins.texts.totWonLabelShadow.x,displayManager.groups.freeSpins.texts.totWonLabelShadow.y);
            setPorytraitAssets_(displayManager_.getText("totWonValueShadow"),true,displayManager.groups.freeSpins.texts.totWonValueShadow.x,displayManager.groups.freeSpins.texts.totWonValueShadow.y);
            setPorytraitAssets_(displayManager_.getText("fsMultValueShadow"),true,displayManager.groups.freeSpins.texts.fsMultValueShadow.x,displayManager.groups.freeSpins.texts.fsMultValueShadow.y);
            setPorytraitAssets_(displayManager_.getText("fsMultLabelShadow"),true,displayManager.groups.freeSpins.texts.fsMultLabelShadow.x,displayManager.groups.freeSpins.texts.fsMultLabelShadow.y);

            adaptPortraitAsset_(displayManager_.getGroup("preview"),0,0,1);

            setPorytraitAssets_(displayManager_.getGroup("logo").children[1],true);
            //----
            //FR
            setPorytraitAssets_(displayManager_.getGroup("freeRounds").frPanel.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("freeRounds").frPanel.children[0],true)
            setPorytraitAssets_(displayManager_.getText("frLabel"),true,200,20);
            setPorytraitAssets_(displayManager_.getText("frValue"),true,200,50);
            setPorytraitAssets_(displayManager_.getText("frTotWonLabel"),true,1070,20);
            setPorytraitAssets_(displayManager_.getText("frTotWonValue"),true,1070,50);

            //preview
            setPorytraitAssets_(displayManager_.getGroup("preview").bgmsgPw.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview1.children[0],true,displayManager.groups.preview.graphAsset.bgPreview1.x ,displayManager.groups.preview.graphAsset.bgPreview1.y);
            setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview2.children[0],true,displayManager.groups.preview.graphAsset.bgPreview2.x ,displayManager.groups.preview.graphAsset.bgPreview2.y);
            setPorytraitAssets_(displayManager_.getGroup("preview").children[3],null,displayManager.groups.preview.checkbox.x,displayManager.groups.preview.checkbox.y);
            setPorytraitAssets_(displayManager_.getGroup("preview").children[4],null,displayManager.groups.preview.checkbox.x+70,displayManager.groups.preview.checkbox.y+5);
            setPorytraitAssets_(displayManager_.getGroup("preview").children[5],null,null,displayManager.groups.preview.checkbox.y);
            setPorytraitAssets_(displayManager_.getGroup("preview").children[6],null,null,displayManager.groups.preview.buttons.closePreview.y);
        }

        setMask_();
        moveClover_(true);
        setTimeout(hideGame_,500,false);
        //activateShamrockScroll_();
    }

    function setPorytraitAssets_(name, visible,x,y,scale){
        if (name!=undefined){
            if(visible!=null)name.visible=visible;
            if (scale!=null)name.scale.x=scale;
            if (scale!=null)name.scale.y=scale;
            if (y!=null)name.y=Math.floor(y);
            if (x!=null)name.x=Math.floor(x);
        }
    }

    function adaptPortraitAsset_(obj,x,y,scale){
        if(obj!=undefined){
            if (scale!=null){
                obj.scale.x=scale;
                obj.scale.y=scale;
            }
            if (x!=null){
                obj.x=Math.floor(x);
            }
            if (y!=null){
                obj.y=Math.floor(y);
            }
        }
    }

    function hideGame_(flag){
        if (displayManager_!=undefined) {
            if (displayManager_.getGroup("hideGame") != undefined) {
                displayManager_.getGroup("hideGame").visible = flag;
            }
            if (flag){
                framework.hideFramework();
            }else{
                framework.showFramework();
            }
            if (freeSpinsManager_!=undefined) {
                var fs = (freeSpinsManager_.getIsInFs()) ? "FS" : "";
                if (fs == "FS") {
                    displayManager_.getGroup("freeRounds").visible = false;
                }
            }

        }
        if (isTumbling_==false) lineManager_.clearLineAfterValue();

    }

    function loadedPortrait_(){
        portraitLoaded_=true;
        portraitLoading_=false;

        var pA=displayManager_.getPortraitAssets();

        for (var a in pA) {
            var sp=new Phaser.Sprite(game_, pA[a].sprite.x, pA[a].sprite.y, pA[a].normalAsset+"Portrait");
            sp.anchor.set(pA[a].sprite.anchor.x,pA[a].sprite.anchor.y);
            sp.scale.x=pA[a].sprite.scale.x;
            sp.scale.y=pA[a].sprite.scale.y;
            //if (displayManager.groups[a].graphAsset[ga].angle != null) sp.angle = displayManager.groups[a].graphAsset[ga].angle;
            pA[a].group.addChild(sp);
            sp.visible=false;
            pA[a].sprite.visible=false;
        }

        if (portrait_==false)return; //maybe mobile is not in portrait anymore
        setPortrait_(true);
    }

    function startBgSound(sound){
        var arr=[];
        var index=0;
        var fps =24;
        var audioLevel=[];
        audioLevel[1]=2;
        audioLevel[2]=2;
        audioLevel[3]=2;
        audioLevel[4]=2;
        audioLevel[5]=2.5;
        audioLevel[6]=2.5;
        audioLevel[7]=3;
        audioLevel[8]=3;

        soundManager_.getBGSound("bgSlot"+sound).fadeInBgSoundExternal(500,audioLevel[sound],soundManager_.getBGSound("bgSlot").getSound().currentTime +15,null);

    }

    function activateFSMusic(){
        setTimeout (deactivateIt,4000);
        soundManager_.mixMultipleBgSound("bgSlot","bgFs", 1000, 1000);
    }

    function deactivateIt(){
        soundManager_.mixMultipleBgSound("bgFs","bgSlot", 1000, 1000);
    }

    function activateShamrockScroll_(){
        //soundManager_.playSound("scroll");
        sucessiveWin_=0;
    }

    function moveClover_(resume){
        if (freeSpinsManager_.getIsInFs() == true)return;
        var arr=[];
        var index=0;
        var fps =24;
        var audioLevel=[];
        var indexPort=(getOrientation()=="portrait")?1:0;
        audioLevel[1]=2;
        audioLevel[2]=2;
        audioLevel[3]=2;
        audioLevel[4]=2;
        audioLevel[5]=2.5;
        audioLevel[6]=2.5;
        audioLevel[7]=3;
        audioLevel[8]=3;

        shamrockPos_=sucessiveWin_;
        if(shamrockPos_!= shamrockPrevPos_ || resume) {
            shamrockPrevPos_ = shamrockPos_;

            if (shamrockPos_ > 0) {
                if ((shamrockPos_ > 0) && tntIdle_==false && resume==false){
                    tntIdle_=true;
                    soundManager_.playSound("timer");
                    displayManager_.getGroup("freeSpinAccumulator")["tntLeft"].children[0].alpha = 0;
                    displayManager_.getGroup("freeSpinAccumulator")["tntRight"].children[0].alpha = 0;
                    displayManager_.getGroup("freeSpinAccumulator")["tntIdleLeft"].children[0].alpha = 1;
                    displayManager_.getGroup("freeSpinAccumulator")["tntIdleRight"].children[0].alpha = 1;
                    displayManager_.getGroup("freeSpinAccumulator")["tntIdleLeft"].children[0].visible = true;
                    displayManager_.getGroup("freeSpinAccumulator")["tntIdleRight"].children[0].visible = true;
                    displayManager_.getGroup("freeSpinAccumulator")["tntIdleLeft"].children[0].animations.add("anim");
                    displayManager_.getGroup("freeSpinAccumulator")["tntIdleRight"].children[0].animations.add("anim");
                    displayManager_.getGroup("freeSpinAccumulator")["tntIdleLeft"].children[0].animations.play("anim", 24, true, false);
                    displayManager_.getGroup("freeSpinAccumulator")["tntIdleRight"].children[0].animations.play("anim", 24, true, false);
                }

                if (resume) {
                    for (var a = 1; a <= shamrockPos_; a++) {
                        if (displayManager_.getGroup("freeSpinAccumulator")["shamrock_" + a].children[indexPort].alpha == 0 && resume == false) {
                            displayManager_.getGroup("freeSpinAccumulator")["shamrock_" + a].children[indexPort].alpha = 1;
                        }
                        displayManager_.getGroup("freeSpinAccumulator")["shamrock_" + a].children[indexPort].visible=true;
                        displayManager_.getGroup("freeSpinAccumulator")["shamrock_" + a].children[indexPort].animations.add("anim", arr);
                        if (sucessiveWin_ >= 4) {
                            soundManager_.playSound("sideF4");
                            displayManager_.getGroup("freeSpinAccumulator")["shamrock_" + a].children[indexPort].animations.play("anim", fps, false, false);
                        } else {
                            if (shamrockPos_ > 0) soundManager_.playSound("sideF" + a);
                            displayManager_.getGroup("freeSpinAccumulator")["shamrock_" + a].children[indexPort].animations.play("anim", fps, false);
                        }

                        if (a > 0 && a < 6) {
                            soundManager_.playAdditionalBgSound_("bgSlot" + ((a) + 1));
                            // soundManager_.getBGSound("bgSlot"+((a)+1)).fadeInBgSoundExternal(500, audioLevel[(a)+1], soundManager_.getBGSound("bgSlot").getSound().currentTime, null);

                        }
                    }


                } else {
                    displayManager_.getGroup("freeSpinAccumulator")["shamrock_" + 1].children[indexPort].visible = false;
                    displayManager_.getGroup("freeSpinAccumulator")["shamrock_" + 2].children[indexPort].visible = false;
                    displayManager_.getGroup("freeSpinAccumulator")["shamrock_" + 3].children[indexPort].visible = false;
                    if (resume == false) {
                        displayManager_.getGroup("freeSpinAccumulator")["shamrock_" + shamrockPos_].children[indexPort].alpha = 1;
                        displayManager_.getGroup("freeSpinAccumulator")["shamrock_" + shamrockPos_].children[indexPort].visible = true;
                    }

                    displayManager_.getGroup("freeSpinAccumulator")["shamrock_" + shamrockPos_].children[indexPort].animations.add("anim", arr);
                    if (sucessiveWin_ >= 3) {
                        soundManager_.playSound("sideF4");
                        displayManager_.getGroup("freeSpinAccumulator")["shamrock_" + shamrockPos_].children[indexPort].animations.play("anim", fps, false, false);

                    } else {
                        if (shamrockPos_ > 0) soundManager_.playSound("sideF" + shamrockPos_);
                        displayManager_.getGroup("freeSpinAccumulator")["shamrock_" + shamrockPos_].children[indexPort].animations.play("anim", fps, false);
                    }



                }

            } else {


                for (var a = 1; a <= 3; a++) {
                    if (soundManager_.getBGSound("bgSlot" + a) != null) soundManager_.getBGSound("bgSlot" + a).fadeOutBgSound(1000);
                    var revAnimFrameSeq_ = [];
                    if (displayManager_.getGroup("freeSpinAccumulator")["shamrock_" + a].children[indexPort].animations.frame > 0) {
                        for (var b = 0; b <= displayManager_.getGroup("freeSpinAccumulator")["shamrock_" + a].children[indexPort].animations._outputFrames.length; b++) {
                            revAnimFrameSeq_.push(b);
                        }
                        revAnimFrameSeq_.reverse();
                        displayManager_.getGroup("freeSpinAccumulator")["shamrock_" + a].children[indexPort].animations.add("anim", revAnimFrameSeq_);
                        displayManager_.getGroup("freeSpinAccumulator")["shamrock_" + a].children[indexPort].animations.play("anim", 32, false, false, hideIt_, a != 1 ? displayManager_.getGroup("freeSpinAccumulator")["shamrock_" + a].children[indexPort] : null);
                        soundManager_.playSound("sideF0");
                    }
                }
                displayManager_.getGroup("freeSpinAccumulator")["shamrock_1"].children[indexPort].visible = true;
            }
        }
    }
    
    function playActiveMeter_() {
        var indexPort=(getOrientation()=="portrait")?1:0;
        displayManager_.getGroup("freeSpinAccumulator")["shamrock_" + 1].children[indexPort].visible = false;
        displayManager_.getGroup("freeSpinAccumulator")["shamrock_" + 2].children[indexPort].visible = false;
        displayManager_.getGroup("freeSpinAccumulator")["shamrock_" + 3].children[indexPort].visible = false;

        displayManager_.getGroup("freeSpinAccumulator")["shamrock_Active"].children[indexPort].alpha = 1;
        displayManager_.getGroup("freeSpinAccumulator")["shamrock_Active"].children[indexPort].visible = true;

        displayManager_.getGroup("freeSpinAccumulator")["shamrock_Active"].children[indexPort].animations.add("anim");

        displayManager_.getGroup("freeSpinAccumulator")["shamrock_Active"].children[indexPort].animations.play("anim", 24, false, false);
    }

    function playTnt_() {
        tntIdle_=false;
        soundManager_.stopSound("timer");
        displayManager_.getGroup("freeSpinAccumulator")["tntLeft"].children[0].alpha = 1;
        displayManager_.getGroup("freeSpinAccumulator")["tntRight"].children[0].alpha = 1;
        displayManager_.getGroup("freeSpinAccumulator")["tntIdleLeft"].children[0].alpha = 0;
        displayManager_.getGroup("freeSpinAccumulator")["tntIdleRight"].children[0].alpha = 0;
        displayManager_.getGroup("freeSpinAccumulator")["tntIdleLeft"].children[0].animations.stop();
        displayManager_.getGroup("freeSpinAccumulator")["tntIdleRight"].children[0].animations.stop();
        displayManager_.getGroup("freeSpinAccumulator")["tntIdleLeft"].children[0].frame=0;
        displayManager_.getGroup("freeSpinAccumulator")["tntIdleRight"].children[0].frame=0;

        displayManager_.getGroup("freeSpinAccumulator")["tntLeft"].children[0].animations.add("anim");
        displayManager_.getGroup("freeSpinAccumulator")["tntRight"].children[0].animations.add("anim");
        displayManager_.getGroup("freeSpinAccumulator")["tntLeft"].children[0].animations.play("anim", 24, false, false);
        displayManager_.getGroup("freeSpinAccumulator")["tntRight"].children[0].animations.play("anim", 24, false, false);

    }

    function playExplosion_() {
        tntIdle_ = false;
        soundManager_.playSound("blast");
        displayManager_.getGroup("freeSpinAccumulator")["tntExplosionLeft"].children[0].alpha = 1;
        displayManager_.getGroup("freeSpinAccumulator")["tntExplosionRight"].children[0].alpha = 1;
        displayManager_.getGroup("freeSpinAccumulator")["tntExplosionLeft"].children[0].visible = true;
        displayManager_.getGroup("freeSpinAccumulator")["tntExplosionRight"].children[0].visible = true;
        displayManager_.getGroup("freeSpinAccumulator")["tntExplosionLeft"].children[0].animations.add("anim");
        displayManager_.getGroup("freeSpinAccumulator")["tntExplosionRight"].children[0].animations.add("anim");
        displayManager_.getGroup("freeSpinAccumulator")["tntExplosionLeft"].children[0].animations.play("anim", 24, false, false);
        displayManager_.getGroup("freeSpinAccumulator")["tntExplosionRight"].children[0].animations.play("anim", 24, false, false);
        displayManager_.getGroup("freeSpinAccumulator")["tntLeft"].children[0].alpha = 0;
        displayManager_.getGroup("freeSpinAccumulator")["tntRight"].children[0].alpha = 0;
        displayManager_.getGroup("freeSpinAccumulator")["tntLeft"].children[0].frame=0;
        displayManager_.getGroup("freeSpinAccumulator")["tntRight"].children[0].frame=0;
        displayManager_.getGroup("centralWin").visible=false;
        displayManager_.getText("lineWin").setText("");
    }

    function hideIt_(obj){
        if (obj!=null)obj.visible=false;
    }

    function shamrockPop_(){
        return;
        //shamrock pop
        var obj= displayManager_.getGroup("freeSpinAccumulator")["shamrock"].children[0];
        var wg= game_.add.sprite(obj.x, obj.y, "shamrockPop" );
        wg.anchor.set(.5,.5);
        wg.animations.add("anim");
        wg.animations.play("anim", 24, false, true,takeShamrockOut_);//todo parametric loop
        displayManager_.getGroup("freeSpinAccumulator")["shamrock"].children[0].alpha = 0;
        soundManager_.playSound("shamrockWin");
    }

    function delayedTakeShamrockOut_(){
        var anim=[];
        soundManager_.playSound("scroll");
        moveClover_(true);
    }

    function takeShamrockOut_(){
        sucessiveWin_=0;
        setTimeout (delayedTakeShamrockOut_,2000);
    }

    function startTumble_(){
        freeTumbling_=true;
        buttonManager_.applyRestore();
        framework.showFramework();
    }

    function startResumeFs_(){
        buttonManager_.applyRestore();
        framework.showFramework();
    }

    function toggleCredits_(){
        creditsCoinsDisplay_.toggleCreditsDisplay();
    }

    function leaveGame_(){
        onGame_=false;
        buttonManager_.applyHide();
    }

    function backToGame_(){
        onGame_=true;
        buttonManager_.applyRestore();
    }

    function doPt_(){
        //open game paytable and disable buttons
        displayManager_.getGroup("logo").visible=false;
        framework.openPayTable();
        leaveGame_();
        soundManager_.playSound("click");
    }

    function closePt_() {
        //close paytable and enable buttons
        backToGame_();
        displayManager_.getGroup("logo").visible=true;
    }

    function betSelector_() {
        soundManager_.playSound("click");
        framework.openBetOptions();
    }

    function changeBet_(val, init) {
        framework.closeApMenu();
        framework.closeBetMenu();
        framework.setBetValue(val, init);
    }


    function doAp_() {
        framework.checkAutoPlay();//moved logic to autoplayBox
    }

    function doSpin_() {
        framework.closeApMenu();
        framework.closeBetMenu();
        if (buttonManager_.getButton(frameworkSettings.buttons.spinButton.id).isEnable()==true) {
            soundManager_.playSound("spinClick");
            realDoSpin_([false]);
        }else {
            return false;
        }
    }

    function realDoSpin_(swipe){//swipte=array
        if(!onGame_)return;
        if(messageOn_==true)return;
        spinning_=true;
        delayedExplosion=false;
        prevWin_=0;
        eventManager_.clearEvt();
        logger("----spin ---- "+ getStackTrace().join('\n'));
        soundManager_.stopSound("smbWin_13");//todo see if possible to stop the sticky wild animation (also on line class)
        buttonManager_.applyState("SPIN");
        for (var i=6;i<= 8;i++){
            soundManager_.stopSound("winBg_"+i);
            soundManager_.stopSound("winBgS_"+i);
        }
        if (ReelConfig.spinType=="singleIconReelSpin") {
            //spinManager_.startSpin(swipe[0]);
        }else{
            lineManager_.stopEvents();
            bonusManager_.clearLineEval();
            wildManager_.clearWild(winManager_.getWildSimbs());
            winAmtManager_.resetWinManager();
            soundManager_.stopSound("winSound");

            if (!freeTumbling_)me.resetSuccessiveWinning();

            balanceManager_.bet(betCheckCallBack_);
        }
    }

    function betCheckCallBack_(response) {
        var swipe = [false];
        //handling FS message here
        if (response == true) {
            if (autoPlayManager_.getIsInAutoPlay() == false || autoPlayManager_.getPreAutoPlayAutoriz() == true) {
                showScatterWin_ = false;
                showFsWin_ = false;

                autoPlayManager_.updateApNum();
                freeSpinsManager_.updateFreeSpinsNum();
                freeRoundsManager_.updateFreeRoundsNum();

                logger(" interrupted win animation ")
                winAmtManager_.forceToComplete();
                lineManager_.clearLineAfterValue();
                if (freeSpinsManager_.getIsInFs() == true || freeTumbling_) {
                    noSleep.enable();
                    if (freeSpinsManager_.getIsInFs()) framework.updateSmallMessageText(Translate.do("Bet:") + " " + Translate.do("free re-spins"));
                    if (freeTumbling_) framework.updateSmallMessageText(Translate.do("Bet:") + " " + Translate.do("free spin"));
                } else if (freeRoundsManager_.getIsInFr() == true) {
                    framework.updateSmallMessageText(Translate.do("Bet:") + " " + Translate.do("free rounds"));
                } else {
                    if (balanceManager_.getShowIncredits() == false) {
                        framework.updateSmallMessageText(Translate.do("Bet:") + " " + balanceManager_.geBalanceObj().currency + "" + Util.formatNumber(balanceManager_.getCoinValue(), Util.getNubersOfDecimal()));
                    } else {
                        framework.updateSmallMessageText(Translate.do("Bet:") + " " + balanceManager_.geBalanceObj().currency + "" + Util.formatNumber(balanceManager_.getCoinValue(), 2) + " " + Translate.do("Coins:") + "" + lineManager_.getLinesNumber());
                    }
                }
                communicationManager_.resetResumeStatus();
                spinManager_.setSpinType(swipe[0], swipe[1]);
                spinManager_.sendSpinRequest();
                freeTumbling_ = false;
            } else {
                buttonManager_.applyState("NH");
                spinning_=false;
                balanceManager_.unBet();
                setTimeout(showApMessage_, 500);
            }
        } else {
            buttonManager_.applyState("NH");
            spinning_=false;
            framework.updateSmallMessageText(Translate.do("Insufficient funds. Please reduce stake."));
        }
    }

    function spinAnimEnd_() {



        logger("animation end called.------"+spinManager_.getSpinResp())
        //lineManager_.initClass();
        displayManager_.getText("winValue").setText("");
        soundManager_.stopSound("reelSound");
        eventManager_.clearEvt();

        winManager_.evaluate(spinManager_.getReels());
        won=winManager_.getWinAmt();
        fsWon=freeSpinsManager_.getFsWon();
        wonBonus= (spinManager_.getSpinResp()!=null && spinManager_.getSpinResp().bonus!=null)?spinManager_.getSpinResp().bonus.wonBonus:0;
        fs=false;
        if(freeSpinsManager_.getIsInFs() || fsWon ) {
            fs = freeSpinsManager_.getFreeSpinsEval();
        }
        displayManager_.getText("winValue").setText("");
        evaluateWinnings_();
    }

    var prevWin_=0;
    function spinAnimEndAfterTumbling_(){
        if (isTumbling_==false && lineManager_.getInterruptedWinAnim()==false ) {
            eventManager_.clearEvt();

            winAmtManager_.resetWinManager();
            //lineManager_.initClass();
            soundManager_.stopSound("reelSound");
            winManager_.evaluate(spinManager_.getReels());
            var won = winManager_.getWinAmt();
            fsWon = freeSpinsManager_.getFsWon();
            wonBonus = (spinManager_.getSpinResp() != null && spinManager_.getSpinResp().bonus != null) ? spinManager_.getSpinResp().bonus.wonBonus : 0;
            fs = false;

            if (freeSpinsManager_.getIsInFs()){//conveyor belt
                if(prevWin_>0 && won == 0){
                    //last tumble of a winning sequence need to be delayed
                    eventManager_.addEvent(fakeEvent_, ( prevWin_>5000)?prevWin_-2000:500);
                }
                eventManager_.addEvent(moveConveyor_,10,spinManager_.getSpinResp().state.safes);
                if (spinManager_.getSpinResp().win.scatter!= undefined && spinManager_.getSpinResp().win.scatter.scatters!= undefined && spinManager_.getSpinResp().win.scatter.scatters[0]!=undefined && spinManager_.getSpinResp().win.scatter.scatters[0].smbID!=undefined) {
                    eventManager_.addEvent(explodeSafe_,1100,spinManager_.getSpinResp());
                    eventManager_.addEvent(showPrice_,2500,spinManager_.getSpinResp());
                    if ((spinManager_.getSpinResp().win.scatter.scatters[0].smbID==1 || spinManager_.getSpinResp().win.scatter.scatters[0].smbID==4 )&& won >0){
                        eventManager_.addEvent(fakeEvent_, 2200);//adds delay after wild and additinal reel safes
                    }else{
                        eventManager_.addEvent(fakeEvent_, Math.min(lineManager_.getTotalDuration()-1500,600));
                    }

                }else{
                    eventManager_.addEvent(fakeEvent_, 1000);
                }

            }

            wildManager_.endAnimHandle((winManager_.getWildNum()>0)?winManager_.getWildSimbs():null, eventManager_);
            if(delayedExplosion){
                // eventManager_.addEvent(playTriggeredSmb_,0);
                eventManager_.addEvent(fakeEvent_, 1500);
                delayedExplosion=false;
            }

            if (freeSpinsManager_.getIsInFs() || fsWon) {
                fs = freeSpinsManager_.getFreeSpinsEval();
            }



            if (won > 0) {
                lineManager_.endAnimHandle(winManager_.getAllWinsSorted(), eventManager_);
                freeSpinsManager_.endAnimHandle(eventManager_);
                prevWin_=lineManager_.getTotalDuration();
            } else {
                if(!fsWon) {
                    tntIdle_ = false;
                    soundManager_.stopSound("timer");
                    displayManager_.getGroup("freeSpinAccumulator")["tntLeft"].children[0].alpha = 1;
                    displayManager_.getGroup("freeSpinAccumulator")["tntRight"].children[0].alpha = 1;
                    displayManager_.getGroup("freeSpinAccumulator")["tntIdleLeft"].children[0].alpha = 0;
                    displayManager_.getGroup("freeSpinAccumulator")["tntIdleRight"].children[0].alpha = 0;
                    displayManager_.getGroup("freeSpinAccumulator")["tntIdleLeft"].children[0].animations.stop();
                    displayManager_.getGroup("freeSpinAccumulator")["tntIdleLeft"].children[0].frame = 0;
                    displayManager_.getGroup("freeSpinAccumulator")["tntIdleRight"].children[0].animations.stop();
                    displayManager_.getGroup("freeSpinAccumulator")["tntIdleRight"].children[0].frame = 0;
                }else{
                    eventManager_.addEvent(playActiveMeter_,1000);
                    eventManager_.addEvent(playTnt_,200);
                    eventManager_.addEvent(playExplosion_,300);
                    eventManager_.addEvent(fsLogoOut_,300);
                }


                if (freeSpinsManager_.getIsInFs())eventManager_.addEvent(fakeEvent_,1000);//just a delay to make sure payment are displayed
                freeSpinsManager_.endAnimHandle(eventManager_);
                buttonManager_.applyState("AFTERSPIN");

                if (fsWon && freeSpinsManager_.getIsInFs() == true && freeSpinsManager_.getFsNumber() == 0) {
                    eventManager_.addEvent(fsEval_, 3000);
                } else {
                    //var tou=(freeSpinsManager_.getIsInFs() || autoPlayManager_.getIsInAutoPlay() && won>0 )?lineManager_.getTotalDuration()/3:200;
                    eventManager_.addEvent(fsEval_,  500);
                }
            }

            eventManager_.triggerEvt();
        }else{
            setTimeout(spinAnimEndAfterTumbling_,100);
        }
    }

    function evaluateWinnings_(){
        //start bonus if needed, displays all winnings (also called after bonus to display lines winnings), after winnings call the autoplay and freespins evaluator
        lineManager_.clearLine();
        eventManager_.clearEvt();

        if (wonBonus==0) {
            logger("NO bonus found ")

            wildManager_.endAnimHandle((winManager_.getWildNum()>0)?winManager_.getWildSimbs():null, eventManager_);
            if(delayedExplosion){
                eventManager_.addEvent(playTriggeredSmb_,0);
                eventManager_.addEvent(fakeEvent_, 2500);
            }

            if (freeSpinsManager_.getIsInFs()) {
                if (spinManager_.getSpinResp().win.scatter != undefined && spinManager_.getSpinResp().win.scatter.scatters != undefined && spinManager_.getSpinResp().win.scatter.scatters[0] != undefined && spinManager_.getSpinResp().win.scatter.scatters[0].smbID != undefined) {
                    eventManager_.addEvent(moveConveyor_, 10, spinManager_.getSpinResp().state.safes);
                    eventManager_.addEvent(explodeSafe_, 1100, spinManager_.getSpinResp());
                    eventManager_.addEvent(showPrice_, 2500, spinManager_.getSpinResp());
                    if ((spinManager_.getSpinResp().win.scatter.scatters[0].smbID == 1 || spinManager_.getSpinResp().win.scatter.scatters[0].smbID == 4) && won > 0) {
                        eventManager_.addEvent(fakeEvent_, 2200);//adds delay after wild and additinal reel safes
                    } else {
                        eventManager_.addEvent(fakeEvent_, Math.min(lineManager_.getTotalDuration() - 1500, 600));
                    }
                }
            }

            if (won>0) {
                if (delayedExplosion && Util.getRandomInt(10,1000)>400)setTimeout(startShooting_,500);
                lineManager_.endAnimHandle(winManager_.getAllWinsSorted(), eventManager_);
                freeSpinsManager_.endAnimHandle(eventManager_);
                prevWin_=lineManager_.getTotalDuration();

            } else {
                soundManager_.stopSound("timer");
                displayManager_.getGroup("freeSpinAccumulator")["tntLeft"].children[0].alpha = 1;
                displayManager_.getGroup("freeSpinAccumulator")["tntRight"].children[0].alpha = 1;
                displayManager_.getGroup("freeSpinAccumulator")["tntIdleLeft"].children[0].alpha = 0;
                displayManager_.getGroup("freeSpinAccumulator")["tntIdleRight"].children[0].alpha = 0;
                displayManager_.getGroup("freeSpinAccumulator")["tntIdleLeft"].children[0].animations.stop();
                displayManager_.getGroup("freeSpinAccumulator")["tntIdleLeft"].children[0].frame = 0;
                displayManager_.getGroup("freeSpinAccumulator")["tntIdleRight"].children[0].animations.stop();
                displayManager_.getGroup("freeSpinAccumulator")["tntIdleRight"].children[0].frame = 0;

                freeSpinsManager_.endAnimHandle(eventManager_);
                //framework.updateSmallMessageText(Translate.do("Good luck"));
                balanceManager_.setCanUpdate(true);

                if (fsWon && freeSpinsManager_.getIsInFs() == true && freeSpinsManager_.getFsNumber() == 0) {
                    eventManager_.addEvent(fsEval_, 2000);
                } else {
                    eventManager_.addEvent(fsEval_,  0);
                }
            }
            buttonManager_.applyState("AFTERSPIN");


        }else{
            logger("bonus found ");
        }
        eventManager_.triggerEvt();
    }



    function updateBalance_(txt) {
        logger("update balance "  + " "+getStackTrace().join('\n'));
        //framework.updateSmallMessageText(Translate.do("You won:") + " " + balanceManager_.getCurrencySmb() + " " + Util.formatNumber(winManager_.getWinAmt(), 2));
        freeRoundsManager_.addWin(winManager_.getWinAmt());

        if (winManager_.getScatterWinAmt()>0) {
            winAmtManager_.showWin(Number(winAmtManager_.getLineWinAmt())+Number(winManager_.getScatterWinAmt()[0][10].amt), null,null,null,winAmtManager_.getLineWinAmt());
            freeRoundsManager_.addWin(winManager_.getScatterWinAmt());
        }
        freeRoundsManager_.updateFreeRoundsTot();
    }

    function updateScatterBalance(){
    }

    function endScatterAnim_(){
        soundManager_.stopSound("incWin");
    }

    function fsEval_(){
        console.log("fseval")
        spinning_=false;
        fs=freeSpinsManager_.getIsInFs();
        fsWon=freeSpinsManager_.getFsWon();
        if (fsWon  ){
            setTimeout(apEval_,Number(ReelConfig.fsSpinDelay ));
        }else{
            apEval_();
        }
    }

    function apEval_(){
        console.log("apeval")
        if ((won>0 || winManager_.getScatterWinAmt()[0]!=null)){
            setTimeout(enableButton_, 200);
            multiplierManager_.updateMultiplier(true);
        }else{
            enableButton_();
            multiplierManager_.resetMultipliers();
        }
    }

    function enableButton_() {
        console.log("enableButton_ "+ isTumbling_)
        if (isTumbling_)return;
        if (winManager_.getWinAmt()<=0) {
            if (freeSpinsManager_.getIsInFs() == false || freeSpinsManager_.getFsNumber() <= 0) {
                 if(freeRoundsManager_.getIsInFr()==false || updateBalanceOnFr_()==true)balanceManager_.balanceUpdate(false,lineManager_.getTotalTumblingWin());
            }
        }
        ap=autoPlayManager_.getAutoPlayEval();
        if (gameParams.force=="Enable"){
            setTimeout(hideForcePanel_,3000);
        }
        if(freeSpinsManager_.getIsInFs() || fsWon ) {
            fs = freeSpinsManager_.getFreeSpinsEval(false); //false cause in this game the balance will be updated after each fs
        }

        if (freeRoundsManager_.getIsInFr()==true && freeSpinsManager_.getIsInFs() == false ){//no add delay during nested FS
            freeRoundsManager_.getFreeRoundsEval();
        }

        logger("enable button called.------"+fs + " " +fr +" "+ap);
        if (ap ==false && fs == false && fsWon==false) {
            if (ap==false && autoPlayManager_.getIsInAutoPlay()==true){
                eventManager_.clearEvt();
                eventManager_.addEvent(showApMessage_,200,[ap]);
                eventManager_.triggerEvt();
            }else{
                finalizeEnable_();
            }
        }else{
            eventManager_.clearEvt();
            if (ap==false && autoPlayManager_.getIsInAutoPlay()==true){
                eventManager_.addEvent(showApMessage_,200,[ap]);
            }
            eventManager_.addEvent(startAutoSpin_,500,[false]);
            eventManager_.triggerEvt();
        }
    }

    function startAutoSpin_(par){
        if (autoPlayManager_.getIsInAutoPlay() || fs ) {
            if (autoPlayManager_.getIsFeature()==false || (autoPlayManager_.getStopOnFeature()==false && fs==true)){
                if (autoPlayManager_.getCanAp()==true) {
                    gcmCalls_("ANIMATION_END",null,true);
                    noSleep.enable();
                    var tOut= 200;//(won>0)?lineManager_.getTotalDuration():200;
                    apTimer_=setTimeout(realDoSpin_, tOut, par);
                }else {
                    setTimeout(startAutoSpin_, 500, par);
                }
            } else{
                buttonManager_.applyState("NH");
            }
        }else{
            buttonManager_.applyState("NH");
        }
    }

    function showApMessage_(){
        autoPlayManager_.showAPMessage(finalizeEnable_);
    }

    function finalizeEnable_(){
        if(!freeSpinsManager_.getIsInFs()){
            if (refuseCompulsive_==false && compulsiveFlag_ == false && spinManager_.getCompulsivePlayer()==true ){
                triggerCompulsive_();
                refuseCompulsive_=true; //aks just the first time
            }else{
                buttonManager_.applyState("NH");
            }
        }
    }

    function hideForcePanel_(){
        if (gameParams.force=="Enable"){
            //$('#debug').css("opacity","0");
        }
    }

    function hideFs_(){
        noSleep.disable();
        if (freeRoundsManager_.getIsInFr()){
            setTimeout(freeRoundsManager_.getFreeRoundsEval,1000);
        }
        displayManager_.getGroup("freeSpins").visible=false;
        activateShamrockScroll_();
        shamrockPos_=0;
        moveClover_(true);
        twTout_=setTimeout(startTumbleWeed_,Util.getRandomInt(30,120)*1000);
        if(clTout_!=null)clTout_.play();
    }

    function fsHideTotPanel_(){
        displayManager_.getGroup("logo").visible=true;
        displayManager_.getGroup("bg").visible=true;
        displayManager_.getGroup("mask").visible=true;
        displayManager_.getGroup("frame").visible=true;
        displayManager_.getGroup("bgFS").visible=false;
        displayManager_.getGroup("maskFS").visible=false;
        displayManager_.getGroup("frameFS").visible=false;
        displayManager_.getGroup("drawers").visible=false;
        displayManager_.getGroup("conveyorBelt").visible=false;
        displayManager_.getGroup("freeSpins").visible=false;
        displayManager_.getGroup("freeSpinAccumulator").visible=true;
        if (getOrientation()!="portrait")displayManager_.getGroup("bgAnimation").bank.children[0].visible=true;
        if (freeRoundsManager_.getIsInFr() == true) {
            displayManager_.getGroup("freeRounds").visible=true;
        }
    }

    function fsLogoOut_(safes){
        if(clTout_!=null)clTout_.pause();
        clearTimeout(twTout_);
        buldConveyor_((spinManager_.getSpinResp()!=undefined)?spinManager_.getSpinResp().freeSpin.object.safes:communicationManager_.getResumeStatus().state.safes);
        displayManager_.getGroup("freeSpinAccumulator")["tntExplosionLeft"].alpha = 0;
        displayManager_.getGroup("freeSpinAccumulator")["tntExplosionRight"].alpha = 0;
        displayManager_.getGroup("freeSpinAccumulator")["tntExplosionLeft"].frame=0;
        displayManager_.getGroup("freeSpinAccumulator")["tntExplosionRight"].frame=0;
        displayManager_.getGroup("freeRounds").visible=false;
        displayManager_.getGroup("logo").visible=false;
        displayManager_.getGroup("bg").visible=false;
        displayManager_.getGroup("mask").visible=false;
        displayManager_.getGroup("frame").visible=false;
        displayManager_.getGroup("freeSpinAccumulator").visible=false;
        displayManager_.getGroup("bgAnimation").bank.children[0].visible=false;
        displayManager_.getGroup("bgFS").visible=true;
        displayManager_.getGroup("maskFS").visible=true;
        displayManager_.getGroup("frameFS").visible=true;
        displayManager_.getGroup("drawers").visible=true;
        displayManager_.getGroup("conveyorBelt").visible=true;
        for ( var a=0;a<5;a++) {
            displayManager_.getGroup("drawers")["draw_" + a + "_0"].children[0].animations.frame = 0;
            displayManager_.getGroup("drawers")["draw_" + a + "_5"].children[0].animations.frame = 0;

        }
        removed_=true;//to place side feature
        lastSound_=1;
        multiplier_=1;
        multiplierPos_=0;
        sucessiveWin_=0;
        moveClover_();
    }

    function getBetConfigurationDeg_() {
        return [72, 36, 0, 324, 288, 252, 216, 180, 144, 108];    //todo read from json
    }

    function getBetConfiguration_() {
        return ["0.01", "0.02", "0.05", "0.10", "0.25", "0.50", "1.00", "2.00", "5.00", "10.00"]; //todo read from json
    }

    function fakeEvent_() {
    }

    function delayedLandSound_() {
        soundManager_.playSound("land");
    }

    function upperSmbCallBack_(i) {
        //called after spin to move the symbols in the upper position before moving the reel
        for (var a = 0; a < ReelConfig.numIcons; a++) {
            if (spinManager_.getSpinReelResp().reel[i].smb[a]!=undefined) {
                var smb = (spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb != null) ? spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb : spinManager_.getSpinReelResp().reel[i].smb[a].smb;
                //if (spinManager_.getSpinReelResp().reel[i].smb[a].special=="remove" )smb=Util.getRandomInt(1,5);
                if (freeSpinsManager_.getIsInFs() == false || spinManager_.getSpinReelResp().reel[i].smb[a].notShow != true) {
                    var s = spinManager_.getReels()[i].swapSmb(smb, a);
                    if ((spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb == 11 || spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb == 15  )&& spinManager_.getSpinReelResp().reel[i].smb[a].special == "tumble") { //check for special to animate1
                        setTimeout(delayedLandSound_,400);
                        s.reel = i;
                        s.smb = a;
                        s.trigger = true;
                        s.smbN = spinManager_.getSpinReelResp().reel[i].smb[a].smb;
                        s.tnt = true;
                        spinManager_.addTriggerIcon(s);
                        delayedExplosion = true;
                    }

                    if (spinManager_.getSpinReelResp().reel[i].smb[a].animate == true && spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb != null && spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb != 11) { //check for special to animate
                        s.reel = i;
                        s.smb = a;
                        s.smbN = spinManager_.getSpinReelResp().reel[i].smb[a].smb;
                        s.tnt = false;
                        s.trigger = true;
                        spinManager_.addTriggerIcon(s);
                    }
                } else {
                    spinManager_.getReels()[i].removeSymbol(a);
                }
            }
        }

    }

    function placeWild_(p){
        p.visible=false;
        var s = spinManager_.getReels()[p[2].reel].swapSmb(p[0].smbN, p[2].icon);

        setTimeout(playTriggeredWilds_,500);
        setTimeout(explosionSound_,600);
    }

    function playTriggeredSmb_(){
        var iconN=-1;
        var triggerSymbol_=spinManager_.getTriggerIcons();
        var add=false;

        for (var a in triggerSymbol_){
            if ( triggerSymbol_[a].played==undefined) {
                if (triggerSymbol_[a].tnt) {
                    var obj={};
                    obj.type="anim";
                    obj.loop=false;
                    obj.anim= ["timer"];
                    obj.callBack=placeWild_;
                    obj.icon=[];
                    obj.smbN=triggerSymbol_[a].smbN;
                    obj.icon[0]=triggerSymbol_[a].smbNum;
                    var s = spinManager_.getReels()[triggerSymbol_[a].reel].replaceIcon2(triggerSymbol_[a].smb,obj.icon[0] , obj);
                    s.scale.x=1;
                    s.scale.y=1;
                    add = true;
                    triggerSymbol_[a].played = true;
                }


            }
        }
        if(add){
            setTimeout(explosionAnimation_,100,s);
            setTimeout(explosionSound_,500);
        }
    }

    function explosionAnimation_(o){
        var wg = game_.add.sprite(o.x ,o.y, "tntReveal");
        wg.anchor.set(.5, .5);
        wg.scale.x = .80;
        wg.scale.y = .80;
        displayManager_.getGroup("winGlow").add(wg);
        wg.animations.add("anim");
        wg.animations.play("anim", 24,false,true);
    }

    function explosionSound_(){
        soundManager_.playSound("blast");
    }

    function playTriggeredWilds_(){
        var iconN=-1;
        var triggerSymbol_=spinManager_.getTriggerIcons();
        var add=false;
        var exp=-1;

        for (var a in triggerSymbol_){
            if ( triggerSymbol_[a].played==undefined) {
                 var wg = game_.add.sprite(triggerSymbol_[a].x ,triggerSymbol_[a].y, "tntReveal");
                 wg.anchor.set(.5, .5);
                 wg.scale.x = .80;
                 wg.scale.y = .80;
                 displayManager_.getGroup("winGlow").add(wg);
                 wg.animations.add("anim");
                 wg.animations.play("anim", 24,false,true);
                 if( triggerSymbol_[a].smbN!=15){
                     setTimeout(addWilds_,800,a);
                 }else{
                     exp=triggerSymbol_[a].reel;
                 }


                add = true;
                triggerSymbol_[a].played = true;
            }
        }
        if(exp>=0)setTimeout(addExpWild_,800,exp);
    }

    function addExpWild_(i) {
        var reels=spinManager_.getReels();
        var wildReelSmb_ = [];

        for (var ii = 0; ii < 7; ii++) {
            wildReelSmb_[ii]={};
            wildReelSmb_[ii].simbolReference = [];
            wildReelSmb_[ii].substOnreel = [];
            wildReelSmb_[ii].smbNum = [];
            wildReelSmb_[ii].pos = [];
            wildReelSmb_[ii].reel = [];
            if (wildReelSmb_[ii].anim == undefined) wildReelSmb_[ii].anim = [];
            if (wildReelSmb_[ii].sticky == undefined)wildReelSmb_[ii].sticky = 0;
        }


        if (ReelConfig.wildReelAnim!=undefined)a=ReelConfig.wildReelAnim;
        wildReelSmb_[i].smbNum.push(15);
        var a=3;
        wildReelSmb_[i].simbolReference.push(reels[i].getSymbol(a));
        wildReelSmb_[i].pos.push(reels[i].getPos(a));
        wildReelSmb_[i].substOnreel.push(reels[i].getSymbol(0));
        wildReelSmb_[i].substOnreel.push(reels[i].getSymbol(1));
        wildReelSmb_[i].substOnreel.push(reels[i].getSymbol(2));
        wildReelSmb_[i].substOnreel.push(reels[i].getSymbol(3));
        wildReelSmb_[i].sticky = ((spinManager_.getSpinReelResp().reel[i].smb[a].stick != null) ? "1" : "0");
        wildManager_.showWild(wildReelSmb_);
        winManager_.setWildSimbs(wildReelSmb_);
    }

    function wildsSound_(){
        soundManager_.playSound("blast");
    }

    function addWilds_(a){
        var triggerSymbol_=spinManager_.getTriggerIcons();

        if (triggerSymbol_[a].smbN!=13) {//regular wild
            iconN = triggerSymbol_[a].smbNum;
            setTimeout(replaceSingleIcon_, (200 * a), a );
        }else{ //exp wild
            if (triggerSymbol_[a].smb==3){
                spinManager_.getReels()[triggerSymbol_[a].reel].replaceIcon2(triggerSymbol_[a].smb, 13);
            }
        }
    }



    function replaceSingleIcon_(a){
        var triggerSymbol_=spinManager_.getTriggerIcons();
        spinManager_.getReels()[triggerSymbol_[a].reel].replaceIcon2(triggerSymbol_[a].smb, 12);
    }


    function updateIcon_(obj){
        obj.visible=true;
    }

    function triggerCompulsive_(){
        messageBox_.showMessageYN("game", "You have been using the slam stop feature","would you like to enable Fast Play?\rThis can be adjusted in the settings menu.", enableCompulsive_,notEnableCompulsive_);
    }

    function enableCompulsive_(){
        framework.getMenu().setCompulsivePlayer_(true);
        framework.getSettings().setCompulsivePlayer(true);
        buttonManager_.applyState("NH");
    }

    function notEnableCompulsive_(){
        refuseCompulsive_=true;
        framework.getMenu().setCompulsivePlayer_(false);
        framework.getSettings().setCompulsivePlayer(false);
        buttonManager_.applyState("NH");
    }

    function changeCompulsiveState_(state){
        if (state==false){
            compulsiveFlag_=false;
            displayManager.groups.centralWin.thresHolds= compulsiveSettingBakup_;
        }else{
            displayManager.groups.centralWin.thresHolds= [9000, 1500, 2500];
            compulsiveFlag_=true;
        }
    }

    function startVibrate_(duration,repeat,offset){
        var fs= (freeSpinsManager_!=undefined && freeSpinsManager_.getIsInFs())?"FS":"";
        offset=offset*(sucessiveWin_/2);
        vibration_(displayManager_.getGroup("frame"+fs),duration,repeat,offset);
        vibration_(displayManager_.getGroup("mask"+fs),duration,repeat,offset);
        vibration_(displayManager_.getGroup("bg"+fs),duration,repeat,offset);
        vibration_(displayManager_.getGroup("freeSpinAccumulator"),duration,repeat,offset);
        for (var i = 0; i < ReelConfig.numReels; i++) {
            vibration_(spinManager_.getReels()[i].getAllIcons(),duration,repeat,offset);
        }
    }

    function vibration_(obj,duration,repeat,offset){
        TweenMax.to(obj,duration,{y:obj.y+offset,repeat:repeat,onComplete:endVibration_,onCompleteParams:[obj,offset]})
    }

    function endVibration_(obj,offset){
        //obj.x=obj.x-5;
        obj.y=obj.y-offset;
    }

    function enableKey_ (key,resume){
        if (activeKey_[key])return;
        activeKey_[key] = true;
        //if (sideFeature_[key].played == false) {
        //     gotKeys_ = true;
        //     activeKey_[key] = true;
        //     displayManager_.getGroup("freeSpinLeftAccumulator")["img" + key].children[0].visible = true;
        //     displayManager_.getGroup("freeSpinLeftAccumulator")["img" + key].children[0].alpha = 1;
        //     displayManager_.getGroup("freeSpinLeftAccumulator")["img" + key].children[0].animations.add("anim");
        //     displayManager_.getGroup("freeSpinLeftAccumulator")["img" + key].children[0].animations.play("anim", (resume)?48:24, false, false);
        //     sideFeature_[key].played = true;
        //     sideFeatureBg_[key].sound = false;
        //     keyAnimComplete_(key,resume);
        //
        // }
    }


    function startForcing_(id){

        communicationManager_.startForceDemo(id);

        if (forceDemo["win"+id][0].response.startBuyIn!=null && forceDemo["win"+id][0].response.startBuyIn==true){

        }else {
            realDoSpin_(false);
        }
    }

    function decreaseVolumeBG_() {

    }
    function increaseVolumeBG_() {

    }





//to test new coins shower
    var funtainEventManager_;
    var stage_=2;
    var winAnim = {
        "winClasses_":    [1,   10,  20,  40, 80, 125, 200, 800, 1200],
        "winClassesBI_":    [1,   1,  1,  1, 1, 1, 2, 5, 10],
        "winSound_":    [1,   2,  3,  3, 4, 5, 6, 7, 8],
        "winTxtDuration": [1,  1, 1, 2,   3, 4, 5,  6,    7],
        "centralWinDur": [0, 0, 0, 0, 0, 0, 2, 2.5, 3],
        "scaleFactor": [3, 3, 3, 3, 3, 3.2, 3.4, 3.5, 4],
        "bigWinText": [0, 0, 0, 0, 0, 0, 1, 1, 1],
        "winSndEffect": ["", "", "", "", "", "", "", "", "", "", "", ""],
        "bgLoopsNum": [2, 4, 5, 5, 6, 7, 8, 8, 8],
        "accuSnd": ""
    }
    //central win funtain
    var objThrown_=[];
    var centralFuntainGroup_;
    var centralFuntainGroupSmallObj_;
    var currentSmb_;
    var currentWinWeight_;
    var stToClear_=[];
    var bgStopped_=false;

    function startTest_() {
        //funtain
        displayManager_.getGroup("centralFuntainSmallObj").visible=true;
        centralFuntainGroup_=displayManager_.getGroup("logo")["group"];
        centralFuntainGroupSmallObj_=displayManager_.getGroup("centralFuntainSmallObj");
        winEventManager_ = new EventManagerCheck();
        funtainEventManager_= new EventManager();

        //funtain
        funtainEventManager_.clearEvt();
        var time = winAnim.winTxtDuration [(5+stage_)]  * 1000;
        time=time-1000;
        var numObj= ((stage_==4)?50:30)*stage_;
        var interval=((time)-2000)/numObj;
        for (a = 0; a <= numObj; a++) {
            funtainEventManager_.addEvtForce(startNewObject_,interval);
            if (a%20==0)funtainEventManager_.addEvtForce(startCoinsSound_,0);
        }
        funtainEventManager_.triggerEvt();
    }

    function startSmallTest_(amt) {
        //funtain
        displayManager_.getGroup("centralFuntainSmallObj").visible=true;
        centralFuntainGroup_=displayManager_.getGroup("logo")["group"];
        centralFuntainGroupSmallObj_=displayManager_.getGroup("centralFuntainSmallObj");
        winEventManager_ = new EventManagerCheck();
        funtainEventManager_= new EventManager();
        var index=2;
        //funtain
        funtainEventManager_.clearEvt();
        var time = 300 * (index + 1);

        var numObj = Math.min(Math.max((Math.ceil(amt )/3),15),70);
        var interval = time / numObj;
        for (a = 0; a <= numObj; a++) {
            funtainEventManager_.addEvtForce(startNewSmallObject_, interval);
            if (a%10==0)funtainEventManager_.addEvtForce(startCoinsSound_,0);
        }
        funtainEventManager_.triggerEvt();
    }
    var platformY=590;
    var portraitPlatformY=550;
    var safeBaseY=630;
    var portraitsafeBaseY=600;

    function startNewSmallObject_(){

        var origin=Util.getRandomInt(570,710);
        if (!freeSpinsManager_.getIsInFs()) {
            var originY =70;
        }else{
            var originY=-20
        }
        if (Util.getRandomInt(1,100)>50)
            var ob = game_.add.sprite(origin, originY, "part-1" );
        else
            var ob = game_.add.sprite(origin, originY, "f-part-1" );
        ob.anchor.set(.5, .5);
        ob.angle=Util.getRandomInt(1,180);
        ob.animations.add("anim");
        ob.alpha = 0.5;
        ob.xVar=Util.getRandomInt(origin-50, origin+50);
        var yPos;
        if (getOrientation()=="portrait"){
            yPos=(freeSpinsManager_.getIsInFs())?portraitsafeBaseY:portraitPlatformY;
        }else{
            yPos=(freeSpinsManager_.getIsInFs())?safeBaseY:platformY;
        }
        yPos=
        TweenMax.to(ob, Util.getRandomInt(60, 75) / 100, {
            alpha: .8,
            rotation:Util.getRandomInt(0, 90),
            y:yPos,
            x: ob.xVar, onComplete: startFallsDown_,  onCompleteParams: [ob],ease:Power0.easeIn
        });
        ob.animations.play("anim", Util.getRandomInt(24, 34), true, false, null, null);//todo parametric loop
        ob.scale.x = Util.getRandomInt(45,50)/100;
        ob.scale.y = ob.scale.x;
        objThrown_.push(ob);
        centralFuntainGroupSmallObj_.add(ob);
        centralFuntainGroupSmallObj_.visible=true;

    }

    function startNewObject_(){
        var origin=Util.getRandomInt(570,710);
        if (!freeSpinsManager_.getIsInFs()) {
            var originY =70;
        }else{
            var originY=-20
        }
        if (Util.getRandomInt(1,100)>50)
            var ob = game_.add.sprite(origin, originY, "part-" + Util.getRandomInt(1,stage_));
        else
            var ob = game_.add.sprite(origin, originY, "f-part-" + stage_);
        ob.anchor.set(.5, .5);
        ob.angle=Util.getRandomInt(1,180);
        ob.animations.add("anim");
        ob.alpha = 0.5;
        ob.xVar=Util.getRandomInt(origin-100, origin+100);
        var posProb=Util.getRandomInt(1,100);


        TweenMax.to(ob,  Util.getRandomInt(65, 75) / 100, {
            alpha: .8,
            rotation:Util.getRandomInt(0, 90),
            y:(freeSpinsManager_.getIsInFs())?630:590,
            x: ob.xVar, onComplete: startFallsDown_,  onCompleteParams: [ob],ease:Power1.easeIn
        });
        ob.animations.play("anim", Util.getRandomInt(24, 34), true, false, null, null);//todo parametric loop
        ob.scale.x = Util.getRandomInt(50,55)/100;
        ob.scale.y = ob.scale.x;
        objThrown_.push(ob);
        centralFuntainGroup_.add(ob);
    }

    function startCoinsSound_(){
        soundManager_.playSound("coins");
    }

    function startFallsDown_(ob){
        //coins falls down in the first tween direction
        if (ob.xVar > 960) {
            ob.xVar = Util.getRandomInt(ob.xVar + 100, ob.xVar + 100);
        } else if (ob.xVar > 640) {
            ob.xVar = Util.getRandomInt(ob.xVar + 50, ob.xVar + 50);
        } else if (ob.xVar > 320) {
            ob.xVar = Util.getRandomInt(ob.xVar - 50, ob.xVar - 50);
        } else {
            ob.xVar = Util.getRandomInt(0, ob.xVar - 100);
        }

        TweenMax.to(ob, Util.getRandomInt(40, 50) / 100, {
            rotation: Util.getRandomInt(0, 90),
            y: Util.getRandomInt(450, 600),
            x: ob.xVar, onComplete: startFallsDown2_, onCompleteParams: [ob], ease: Power1.easeOut
        });


    }
    function startFallsDown2_(ob){
        if (Util.getRandomInt(1,100)>60 && freeSpinsManager_.getIsInFs() == false && getOrientation()!="portrait") {//can bounce more than once on regular game

            //coins falls down in the first tween direction
            if (ob.xVar > 960) {
                ob.xVar = Util.getRandomInt(ob.xVar + 50, ob.xVar + 70);
            } else if (ob.xVar > 640) {
                ob.xVar = Util.getRandomInt(ob.xVar + 40, ob.xVar + 40);
            } else if (ob.xVar > 320) {
                ob.xVar = Util.getRandomInt(ob.xVar - 40, ob.xVar - 40);
            } else {
                ob.xVar = Util.getRandomInt(-50, ob.xVar - 70);
            }
            ob.time=  Util.getRandomInt(30, 40) / 100;
            TweenMax.to(ob, ob.time, {
                y:window.innerHeight*window.devicePixelRatio-60,
                rotation: ob.angle + 35,
                x: ob.xVar, onComplete: startFallsDown3_, onCompleteParams: [ob], ease: Power1.easeIn
            });
        }else{
            ob.time=  Util.getRandomInt(30, 40) / 100;
            ob.scale.x = Util.getRandomInt(55,60)/100;
            ob.scale.y = ob.scale.x;
            TweenMax.to(ob, ob.time, {
                y:window.innerHeight*window.devicePixelRatio+20,
                rotation: ob.angle + 35,
                x: ob.xVar, onComplete: endFallsDown_, onCompleteParams: [ob], ease: Power1.easeIn
            });

        }
    }

    function endFallsDown_(ob){
        ob.destroy();
    }



    function startFallsDown3_(ob){
        if (Util.getRandomInt(1,100)>60) {
            //coins falls down in the first tween direction
            if (ob.xVar > 960) {
                ob.xVar = Util.getRandomInt(ob.xVar + 100, ob.xVar + 100);
            } else if (ob.xVar > 640) {
                ob.xVar = Util.getRandomInt(ob.xVar + 50, ob.xVar + 50);
            } else if (ob.xVar > 320) {
                ob.xVar = Util.getRandomInt(ob.xVar - 50, ob.xVar - 50);
            } else {
                ob.xVar = Util.getRandomInt(0, ob.xVar - 100);
            }

            TweenMax.to(ob, ob.time*0.8, {
                rotation: Util.getRandomInt(0, 90),
                y: Util.getRandomInt(500, 600),
                x: ob.xVar, onComplete: startFallsDown4_, onCompleteParams: [ob], ease: Power1.easeOut
            });
            ob.scale.x = Util.getRandomInt(55,60)/100;
            ob.scale.y = ob.scale.x;
        }else{
            ob.destroy();
        }

    }
    function startFallsDown4_(ob){
        //coins falls down in the first tween direction
        if (ob.xVar>960) {
            ob.xVar = Util.getRandomInt(ob.xVar+50, ob.xVar + 70);
        }else if (ob.xVar>640){
            ob.xVar=Util.getRandomInt(ob.xVar+40,ob.xVar+40);
        }else if (ob.xVar>320){
            ob.xVar=Util.getRandomInt(ob.xVar-40,ob.xVar-40);
        }else{
            ob.xVar=Util.getRandomInt(-50,ob.xVar-70);
        }
        ob.scale.x = Util.getRandomInt(55,60)/100;
        ob.scale.y = ob.scale.x;
        TweenMax.to(ob,  ob.time*0.7, {
            y:window.innerHeight*window.devicePixelRatio+20,
            rotation: ob.angle+35,
            x: ob.xVar, onComplete: endFallsDown_,  onCompleteParams: [ob],ease:Power1.easeIn
        });

    }




    var me = {
        initGame: initGame_,
        create:create_,
        spinAnimEnd: spinAnimEnd_,
        getBetConfiguration: getBetConfiguration_,
        getBetConfigurationDeg: getBetConfigurationDeg_,
        doSpin: doSpin_,
        doAp:doAp_,
        betSelector:betSelector_,
        doPt:doPt_,
        closePt:closePt_,
        leaveGame:leaveGame_,
        backToGame:backToGame_,
        realDoSpin:realDoSpin_,
        evaluateWinnings:evaluateWinnings_,
        fakeEvent:fakeEvent_,
        fsEval:fsEval_,
        hideFs:hideFs_,
        fsLogoOut:fsLogoOut_,
        fsHideTotPanel:fsHideTotPanel_,
        updateBalance:updateBalance_,
        changeBet:changeBet_,
        upperSmbCallBack:upperSmbCallBack_,
        playTriggeredSmb:playTriggeredSmb_,
        changeCompulsiveState:changeCompulsiveState_,
        spinAnimEndAfterTumbling:spinAnimEndAfterTumbling_,
        shamrockPop:shamrockPop_,
        setPortrait:setPortrait_,
        loadedPortrait:loadedPortrait_,
        hideGame:hideGame_,
        startForcing:startForcing_,
        decreaseVolumeBG:decreaseVolumeBG_,
        increaseVolumeBG:increaseVolumeBG_,
        startSmallTest:startSmallTest_,
        startTest:startTest_,
        getAutoPlayStatus: function () {
            return autoPlayManager_.getIsInAutoPlay();
        },
        getLineButtons:function(){
            return null;
        },
        getLineButton:function(line){
            return null;
        },
        getOnGame:function (){
            return onGame_;
        },
        isSpinning:function(){
            return spinning_;
        },
        getSubstIcon:function (icon) {
            return {
                "subst": icon,
                "type": "icon"
            };
        },
        setWaitForSubstitution:function(){
        },
        setMessageOnOff:function (val) {
            messageOn_=val;
        },
        getMessageOnOff:function(){
            return messageOn_;
        },
        getHlMaximumIcon:function(){
            //during the idle cycle the maximum disable icon will be 8. never disable wilds
            return 9;
        },
        getCompulsivePlayer:function () {
            return compulsiveFlag_;
        },
        startSounds:function(){
            if (communicationManager_.getResumeStatus().status.state=="FREESPINS") {
                soundManager_.playBgSound("bgFs");
            }else{
                soundManager_.playBgSound("bgSlot");
            }
        },
        setChange:function(value){
            isTumbling_ = value;
        },
        getIsTumbling:function () {
            return isTumbling_;
        },
        setTumblingReq:function(value){
            isTumblingReq_ = value;
        },
        getTumblingReq:function(){
            return !isTumblingReq_;
        },
        successiveWinning:function () {
            if (freeSpinsManager_.getIsInFs())return;
            sucessiveWin_++;
            moveClover_(false);

        },
        hasWildActive:function(num){
            var key=1;
            if (num==12)key=2;
            if (num==13)key=3;
            return activeKey_[key];
        },
        resetSuccessiveWinning:function () {
            if (freeSpinsManager_.getIsInFs())return;
            sucessiveWin_=0;
            moveClover_(false);
        },
        triggerKey:function(par){
            var num=0;
            var keys=par[0];
            var resume=(par[1]!=undefined)?par[1]:false;

            for (var a in keys){
                if (keys[a]==true){
                    num++;
                    enableKey_((Number(a)+1),resume);
                }
            }
            sucessiveWin_=num;
            moveClover_(false);
        },
        frStop:function(){
            buttonManager_.applyRestore();
        },
        setTotWin:function (value) {
            won=value;
        },
        wtf:function () {
            //console.log(soundManager_.getBGSound("bgSlot").getSound().currentTime + " "+soundManager_.getBGSound("bgSlot2").getSound().currentTime );
        },
        getMarker:function(){
            return soundManager_.getBGSound("bgSlot").getSound().currentTime/1000;
        },
        getLastFSTime:function(){
            //return the delay to close sticky spins
            return (won || winManager_.getScatterWinAmt()[0]!=null)?lineManager_.getTotalDuration():3000;
        },
        getFsIcon:function(){
            return "";
        },
        clearPrevEvt:function () {
            clearTimeout(apTimer_);
            eventManager_.clearEvt();
        },
        endTumble:function(duration,repeat,offset){
            startVibrate_(duration,repeat,offset);
        },
        addExplosionDelay:function () {
            delayedExplosion=true;
        },
        getBuyIn:function () {
            return false;
        },
        lineCompletion:function (val) {

        },
        getLineCompletion:function () {
            return true;
        },
        getEventManager:function () {
            return eventManager_;
        }
    }

    return me;
}
