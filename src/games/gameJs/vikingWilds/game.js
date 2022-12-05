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
    var lastSound_;
    var multiplier_=1;
    var shamrockPos_=0;
    var multiplierPos_=0;
    var freeTumbling_=false;

    var collected_;
    var featureBalls_;
    var mask_;
    var upPos_= 224-52;
    var dwPos_= 224;
    var upPosB_= 512+52;
    var dwPosB_= 512;
    var expandedReels_=[0,0,0,0,0];
    var lineCompletion_=false;
    var prevList_=null;
    var removed_=true;
    var fadeBg_=false;
    var iFadeT_O_=0;
    var bResume_=false;
    var waitForReelExpansion_=false;
    var expanded_=0;
    var winWaysDisp_=[1024,1280,1280,2000,2000,3125];
    var sideFeature_=[];
    var sideFeatureBg_=[];
    var keysConf_=[];
    var gotKeys_=false;
    var activeKey_=[false,false,false,false];

    function create_() {

        //display manager levels
        displayManager_.getGroup("bg").visible=true;
        displayManager_.getGroup("reelBG").visible=true;
        displayManager_.getGroup("mask").visible=true;
        displayManager_.getGroup("mask1").visible=true;
        displayManager_.getGroup("gates").visible=true;
        displayManager_.getGroup("frame").visible=true;
        displayManager_.getGroup("status").visible=true;
        displayManager_.getGroup("logo").visible=true;
        displayManager_.getGroup("freeSpinLeftAccumulator").visible=true;
        displayManager_.getGroup("vikingCharacter").visible=true;
        if (displayManager_.getGroup("vikingCharacter").v1_1!=undefined){
            if (Util.getRandomInt(1, 100) > 50) {
                displayManager_.getGroup("vikingCharacter").v1_1.children[0].visible = true;
            } else {
                displayManager_.getGroup("vikingCharacter").v2_1.children[0].visible = true;
            }
        }


        if(!framework.getSettings().getHelpOnLoad())displayManager_.getGroup("buttonFg").visible=false;
        spinManager_.createReels();
        guiBottomBar_.setBetControlInitialBet(ReelConfig.bet);//todo change this, it's just to apply the default bet


        for (var a =1;a<4;a++) {
            sideFeatureBg_[a] = displayManager_.getGroup("freeSpinLeftAccumulator")["bg"+a].children[0];
            sideFeature_[a] = {};
            sideFeature_[a].played=false;
            sideFeatureBg_[a].played=false;
            sideFeatureBg_[a].sound=false;
            sideFeature_[a].sound=false;
        }
        setMask_()

        //setTimeout(animateFS_,2000)


    }

    function animateFS_() {
        soundManager_.playSound("doors");
        var g = displayManager_.getGroup("gates")["gate" + 2].children[0];
        TweenMax.to(g, 1, {y: 100});

        var g = displayManager_.getGroup("gates")["gate" + 1].children[0];
        TweenMax.to(g, 1, {delay:.1,y: 100});
        var g = displayManager_.getGroup("gates")["gate" + 3].children[0];
        TweenMax.to(g, 1, {delay:.1,y: 100});


        var g = displayManager_.getGroup("gates")["gate" + 0].children[0];
        TweenMax.to(g, 1, {delay:.2,y: 100});
        var g = displayManager_.getGroup("gates")["gate" + 4].children[0];
        TweenMax.to(g, 1, {delay:.2,y: 100});

    }

    function animateSideChar_() {
        if (displayManager_.getGroup("vikingCharacter").v1_1!=null) {
            if (displayManager_.getGroup("vikingCharacter").v1_1.children[0].visible == true) {
                var anim = displayManager_.getGroup("vikingCharacter").v1_1.children[0];
                anim.animations.add("anim");
                anim.animations.play("anim", 24, false, false, secondPart_, 1);//todo parametric loop and speed
            } else {
                var anim = displayManager_.getGroup("vikingCharacter").v2_1.children[0];
                anim.animations.add("anim");
                anim.animations.play("anim", 24, false, false, secondPart_, 2);//todo parametric loop and speed
            }
        }
    }

    function secondPart_(v){
        displayManager_.getGroup("vikingCharacter")["v" + v +"_1"].children[0].visible=false;
        var anim= displayManager_.getGroup("vikingCharacter")["v" + v +"_2"].children[0];
        anim.visible=true;
        anim.animations.add("anim");
        anim.animations.play("anim", 24,false, false ,thirdPart_,v);//todo parametric loop and speed
    }

    function thirdPart_(v){
        displayManager_.getGroup("vikingCharacter")["v" + v +"_1"].children[0].animations.frame=1;
        displayManager_.getGroup("vikingCharacter")["v" + v +"_1"].children[0].visible=true;
        displayManager_.getGroup("vikingCharacter")["v" + v +"_2"].children[0].visible=false;
    }

    function setMask_(){
        if (mask_ != null) {
            //game_.stage.remove(mask_);
            mask_.destroy();
            mask_ = null;
        }
        mask_= game_.add.graphics(0, 0);
        for (var i = 0; i < ReelConfig.numReels; i++) {
            mask_.beginFill(0xffffff);
            mask_.drawRect(380 +(i*104), 110 + 52, 104, 520-104 );
        }
        displayManager_.getGroup("reels").mask=mask_;
        displayManager_.getGroup("wild").mask=mask_;
        displayManager_.getGroup("gates").mask=mask_;
        //setTimeout(expandReelSize_,2000,[0,0,1,0,0]);
        //setTimeout(expandReelSize_,4000,[0,0,0,0,0]);
    }

    function expandReelSize_(num,resume){
        var reel = {};
        var expanded=0;
        waitForReelExpansion_=true;
        reel.num=0;
        reel.reel=num;
        var ex=expandedReels_;

        if (num.toString()=="0,0,0,0,0"){
            soundManager_.playSound("reelRetract");
            realExpandReelSize_(num,expanded_,false);
        }else{
            if (!resume) {
                soundManager_.playSound("reelExpand_" + num.toString());

                if (freeSpinsManager_.getIsInFs() == true) {
                    displayManager_.getGroup("freeSpins")["fsP"].children[0].animations.add("anim");
                    displayManager_.getGroup("freeSpins")["fsP"].children[0].animations.play("anim", 24, false, false);
                } else if (freeRoundsManager_.getIsInFr() == true) {
                    displayManager_.getGroup("freeRounds")["frPanel"].children[0].animations.add("anim");
                    displayManager_.getGroup("freeRounds")["frPanel"].children[0].animations.play("anim", 24, false, false);
                } else {
                    displayManager_.getGroup("logo")["textV"].children[0].animations.add("anim");
                    displayManager_.getGroup("logo")["textV"].children[0].animations.play("anim", 24, false, false);
                }
            }
            setTimeout(startReelLightning_,(resume)?0:2000,num,ex,expanded_,resume);
        }
    }

    function startReelLightning_(num,ex,exp,resume){
        if (!resume)animateSideChar_();
        for (var a = 0; a < ReelConfig.numReels; a++) {
            if (num[a]==1 && ex[a]==0){
                displayManager_.getGroup("mask1")["ra" + a].children[0].alpha=1;
                displayManager_.getGroup("mask1")["ra" + a].children[0].animations.add("anim");
                displayManager_.getGroup("mask1")["ra" + a].children[0].animations.play("anim",24,false,false);
            }
        }
        if (!resume)soundManager_.playSound("flame");
        setTimeout(realExpandReelSize_,(resume)?0:1000,num,exp,resume);
    }

    function realExpandReelSize_(num,exp,resume){

        var reel = {};
        var expanded=0;
        waitForReelExpansion_=true;
        reel.num=0;
        reel.reel=num;
        var numWW={};
        numWW.num=winWaysDisp_[exp];

        soundManager_.playSound("reelRetract");
        TweenMax.to(reel,1,{num:104,onUpdate:keepMasking_,onUpdateParams:[reel],onComplete:waitForReelExp_});

        for (var a = 0; a < ReelConfig.numReels; a++) {
            TweenMax.to(displayManager_.getGroup("mask1")["ra" + a].children[0],.3,{alpha:0});
            var frame = displayManager_.getGroup("mask1")["bg" + a].children[0];
            var frameB = displayManager_.getGroup("mask1")["bgB" + a].children[0];
            var frameBg = displayManager_.getGroup("reelBG")["reelBg" + a].children[0];
            var reelObj=spinManager_.getReelOuterGroup(a);

            if (num[a]==1){
                expanded++;
                TweenMax.to(frame, 1, {y: upPos_});
                TweenMax.to(frameBg.scale, 1, {y: 1.25});

            }else{
                TweenMax.to(frame, 1, {y: dwPos_});
                TweenMax.to(frameBg.scale, 1, {y: 1});
            }
            if (num[a]==1){
                TweenMax.to(frameB, 1, {y: upPosB_});
                TweenMax.to(frameBg.scale, 1, {y: 1.25});
            }else{
                TweenMax.to(frameB, 1, {y: dwPosB_});
                TweenMax.to(frameBg.scale, 1, {y: 1});
            }
            if (num[a]==1){
                TweenMax.to(reelObj, 1, {y: 52});
                TweenMax.to(frameBg.scale, 1, {y: 1.25});
            }else{
                TweenMax.to(reelObj, 1, {y: 0});
                TweenMax.to(frameBg.scale, 1, {y: 1});
            }
        }
        if (expanded>=0 && freeSpinsManager_.getIsInFs()){
            //show "+2"
            var txt = new  Phaser.BitmapText(game_, displayManager_.getGroup("logo")["logo"].children[0].x + 180 , displayManager_.getGroup("logo")["logo"].children[0].y+30, "multiBmpFont","+2" ,40,"center");

            txt.alpha=0;
            txt.anchor.set(.5,.5);
            displayManager_.getGroup("reelBG").add(txt);

            TweenMax.to(txt,.2,{alpha:1});
            TweenMax.to(txt.scale,.3,{x:1.5,y:1.5,ease:Bounce.easeOut,onComplete:bounce,onCompleteParams:[txt]});

        }
        TweenMax.to(numWW,1,{num:winWaysDisp_[expanded],onUpdate:changeWinWays_,onUpdateParams:[numWW]});

    }

    function bounce(txt){
        freeSpinsManager_.updateFsNum();
        TweenMax.to(txt.scale,.4,{delay:1,x:1,y:1,ease:Bounce.easeOut,onComplete:move,onCompleteParams:[txt]});
    }

    function move(txt){
        setTimeout(kill,1000,txt);
    }

    function kill(txt){
        txt.visible=false;
        txt.destroy();
    }

    function changeWinWays_(obj){
        displayManager_.getText("winWaysNum").setText( Math.ceil(obj.num));
    }

    function keepMasking_(reel){
        if (mask_ != null) {
            displayManager_.getGroup("reels").mask=null;
            displayManager_.getGroup("wild").mask=null;
            displayManager_.getGroup("gates").mask=null;
            mask_.destroy();
            mask_ = null;
        }
        mask_= game_.add.graphics(0, 0);
        for (var i = 0; i < ReelConfig.numReels; i++) {
            mask_.beginFill(0xffffff);
            mask_.drawRect(380 +(i*104), (reel.reel[i]==1) ? 108-(reel.num/2) +52 :110+52, 104, (reel.reel[i]==1) ? 520+reel.num-104:520-104);
        }

        displayManager_.getGroup("reels").mask=mask_;
        displayManager_.getGroup("wild").mask=mask_;
        displayManager_.getGroup("gates").mask=mask_;
    }

    function waitForReelExp_(){
        waitForReelExpansion_=false;
    }

    function unSetMask_(){
        if (mask_!=null){
            mask_.destroy();
            mask_=null;
        }
    }

    function initGame_(){
        setTimeout(resume_,100);
        //start the fog
        TweenMax.to(displayManager_.getGroup("frameFS")["bgf"].children[0],45,{x:-2024,repeat:-1, ease:Linear.easeInOut});
    }

    function resume_(){

        collected_=communicationManager_.getResumeStatus().status.collected;
        var exp= communicationManager_.getResumeStatus().status.expand;
        var keys=communicationManager_.getResumeStatus().status.keys;
        wildManager_.resumeWildReel();
        gcmCalls_("STAKE",balanceManager_.getCoinValue());
        if (communicationManager_.getResumeStatus().status.hand=="freespins" &&(communicationManager_.getResumeStatus().status.type=="tumble" ||communicationManager_.getResumeStatus().status.type=="convert" )) {//todo tumble attribute not really correct, i should be able to understand if inside FS
            if (communicationManager_.getResumeStatus().status !=null && communicationManager_.getResumeStatus().status.stake>0){
                changeBet_(communicationManager_.getResumeStatus().status.stake/100, true);
            }
            callExpand_(exp,true);
            triggerKey_([keys,true]);
            //f1x2.GcmError(-3);
            freeSpinsManager_.parse(communicationManager_.getResumeStatus());
            buttonManager_.applyHide();
            freeRoundsManager_.frChecker();
            //play clover bg
            sucessiveWin_=(communicationManager_.getResumeStatus().status.tumblesDone!=undefined)?communicationManager_.getResumeStatus().status.tumblesDone:0;
            lineManager_.resumeTumbling(communicationManager_.getResumeStatus(),false);
            //if (sucessiveWin_>0)moveSideMeter_(true);
            messageBox_.showMessage("game", "A free tumble has been interrupted", "Press Spin to continue", startTumble_);
            bResume_=true;
        }else if (communicationManager_.getResumeStatus().status.hand=="freespins" && communicationManager_.getResumeStatus().status.type=="freespins, tumble") {//todo tumble attribute not really correct, i should be able to understand if inside FS
            if (communicationManager_.getResumeStatus().status !=null && communicationManager_.getResumeStatus().status.stake>0){
                changeBet_(communicationManager_.getResumeStatus().status.stake/100, true);
            }
            callExpand_(exp,true);
            triggerKey_([keys,true]);
            //f1x2.GcmError(-3);
            freeSpinsManager_.parse(communicationManager_.getResumeStatus());
            buttonManager_.applyHide();
            freeRoundsManager_.frChecker();
            messageBox_.showMessage("game", "A free tumble has been interrupted", "Press Spin to continue", startTumble_);


            multiplier_=(communicationManager_.getResumeStatus().status.multiplier!=undefined)?communicationManager_.getResumeStatus().status.multiplier:0;
            featureBalls_=(communicationManager_.getResumeStatus().status.featureBalls!=undefined)?communicationManager_.getResumeStatus().status.featureBalls:[0,0,0];
            //if (multiplier_>0)moveSideMeterFS_(true);
            lineManager_.resumeTumbling(communicationManager_.getResumeStatus(),true);
            bResume_=true;
        }else if (communicationManager_.getResumeStatus().status.hand=="freespins") {
            if (communicationManager_.getResumeStatus().status !=null && communicationManager_.getResumeStatus().status.stake>0){
                changeBet_(communicationManager_.getResumeStatus().status.stake/100, true);
            }
            callExpand_(exp,true);
            triggerKey_([keys,true]);
            //f1x2.GcmError(-3);
            freeSpinsManager_.parse(communicationManager_.getResumeStatus());
            buttonManager_.applyHide();
            freeRoundsManager_.frChecker();

            multiplier_=(communicationManager_.getResumeStatus().status.multiplier!=undefined)?communicationManager_.getResumeStatus().status.multiplier:0;
            featureBalls_=(communicationManager_.getResumeStatus().status.featureBalls!=undefined)?communicationManager_.getResumeStatus().status.featureBalls:[0,0,0];
            //if (multiplier_>0)moveSideMeterFS_(true);

            messageBox_.showMessage("game", "You have unused Free Spins", "They will be automatically started", startResumeFs_);
            bResume_=true;
        }else{
            buttonManager_.applyRestore();
            buttonManager_.applyState("NH");
            freeRoundsManager_.frChecker();
            idleCycleManager_.startIdleCycle();
            idleCycleManager_.forceIdleCycle("s1"); //forces the logo to idle cycle
            idleCycleManager_.forceIdleCycle("s2"); //forces the logo to idle cycle
            //soundManager_.playBgSound("bgSlot");

            //play clover bg
            sucessiveWin_=(communicationManager_.getResumeStatus().status.tumblesDone!=undefined)?communicationManager_.getResumeStatus().status.tumblesDone:0;

        }
       iRmess_= setTimeout(startRandomMessages_,1000);
        onGame_=true;
        framework.showFramework();
        displayManager_.getGroup("buttonFg").visible=true;
        //setInterval(startVibrate_,2000);
        // setTimeout(shamrockPop_,1000);

        // setInterval(activateFSMusic,8000);
        //setTimeout(startTest,3000)
    }

    function startVibrate_(duration,repeat,offset){
    }

    function vibration_(obj,duration,repeat,offset){
        TweenMax.to(obj,duration,{y:obj.y+offset,repeat:repeat,onComplete:endVibration_,onCompleteParams:[obj,offset]})
    }

    function endVibration_(obj,offset){
        //obj.x=obj.x-5;
        obj.y=obj.y-offset;

    }

    function startTest(){
    }

    function checkSync(){
        //console.log(" is bg " +soundManager_.getBGSound("bgSlot").getSound().currentTime)
        //console.log(" is bg2 " +soundManager_.getBGSound("bgSlot2").getSound().currentTime)
        //console.log(" is bg4 " +soundManager_.getBGSound("bgSlot4").getSound().currentTime)
        //console.log(" is bg5 " +soundManager_.getBGSound("bgSlot5").getSound().currentTime)
        //console.log("wtf is bg6 " +soundManager_.getBGSound("bgSlot6").getSound().currentTime)
    }

    function startBgSound(sound){
        var arr=[];
        var index=0;
        var fps =24;
        var audioLevel=[];
        audioLevel[1]=1;
        audioLevel[2]=1.2;
        audioLevel[3]=1.1;
        audioLevel[4]=1.1;
        audioLevel[5]=1;
        audioLevel[6]=1.2;
        audioLevel[7]=1.3;
        audioLevel[8]=1.4;

        soundManager_.getBGSound("bgSlot"+sound).fadeInBgSoundExternal(500,audioLevel[sound],soundManager_.getBGSound("bgSlot").getSound().currentTime +15,null);

    }

    function decreaseVolumeBG_(fadeT_O_){
        return;
        fadeBg_=true;
        clearTimeout(iFadeT_O_);
        if (freeSpinsManager_.getIsInFs()==false) {
            if (lastSound_>1) {
                for (var a = 2; a <= lastSound_; a++) {
                    soundManager_.getBGSound("bgSlot" + a).fadeOutBgSoundExternal(1000, 0.5);
                }
            }
            if (fadeT_O_!=null){
                fadeBg_=false;
                iFadeT_O_ = setTimeout(increaseVolumeBG_, fadeT_O_,true);
            }
        }else{
            if (lastSound_>1) {
                for (var a = 2; a <= lastSound_; a++) {
                    soundManager_.getBGSound("bgFs" + a).fadeOutBgSoundExternal(1000, 0.5);
                }
            }
            if (fadeT_O_!=null){
                fadeBg_=false;
                iFadeT_O_ = setTimeout(increaseVolumeBG_, fadeT_O_,true);
            }
        }
    }

    function increaseVolumeBG_(force){
        return;
        var audioLevel=[];
        audioLevel[1]=1.2;
        audioLevel[2]=1.25;
        audioLevel[3]=1.25;
        audioLevel[4]=1.15;
        audioLevel[5]=1.15;
        audioLevel[6]=1.15;
        audioLevel[7]=1.15;
        audioLevel[8]=1.15;
        var audioDelay=[];
        audioDelay[2]=5;
        audioDelay[3]=2;
        audioDelay[4]=2;
        audioDelay[5]=2;
        if (fadeBg_ || force) {
            fadeBg_=false;
            if (freeSpinsManager_.getIsInFs() == false ) {
                if (lastSound_>1) {
                    for (var a = 2; a <= lastSound_; a++) {
                        soundManager_.getBGSound("bgSlot" + a).fadeInBgSoundExternal(1000, audioLevel[a], soundManager_.getBGSound("bgSlot").getSound().currentTime + audioDelay[a] , null);
                    }
                }
            } else {
                if (lastSound_>1) {
                    for (var a = 2; a <= lastSound_; a++) {
                        soundManager_.getBGSound("bgFs" + a).fadeInBgSoundExternal(1000, audioLevel[a], soundManager_.getBGSound("bgFs").getSound().currentTime + audioDelay[a] , null);
                    }
                }
            }
        }
    }


    function handleFSMultiplier_(){
        if (freeSpinsManager_.getIsInFs() || fsWon){
            multiplier_=( spinManager_.getSpinResp().freeSpin.multiplier!=undefined)?spinManager_.getSpinResp().freeSpin.multiplier:0;
            featureBalls_=(spinManager_.getSpinResp().status.featureBalls!=undefined)?spinManager_.getSpinResp().status.featureBalls:[0,0,0];


        }
    }


    function startTumble_(){
        idleCycleManager_.startIdleCycle();
        idleCycleManager_.forceIdleCycle("s1"); //forces the logo to idle cycle
        idleCycleManager_.forceIdleCycle("s2"); //forces the logo to idle cycle
        //soundManager_.playBgSound("bgSlot");
        buttonManager_.applyState("NH");
        freeTumbling_=true;
        freeSpinsManager_.resumeFs();
        buttonManager_.applyRestore();
    }

    function startResumeFs_(){
        freeSpinsManager_.resumeFs();
        buttonManager_.applyRestore();
        setTimeout(realDoSpin_,1000,[false]);
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

    function doStop_() {
        soundManager_.playSound("click");
        buttonManager_.applyState("AFTERSPIN");
        spinManager_.stopSpin();
    }

    function doAp_() {
        framework.checkAutoPlay();//moved logic to autoplayBox
    }

    function doSpin_() {
        framework.closeApMenu();
        framework.closeBetMenu();
        if (buttonManager_.getButton(frameworkSettings.buttons.spinButton.id).isEnable()==true && isTumbling_==false) {
            soundManager_.playSound("spinClick");
            if (displayManager_.getGroup("vikingCharacter").spinAnim!=undefined && (gameClass_.getCompulsivePlayer()==false)){
                var anim=displayManager_.getGroup("vikingCharacter").spinAnim.children[0];
                anim.visible=true;
                anim.animations.add("anim");
                anim.animations.play("anim", 24,false, false ,endSpinAnim_);//todo parametric loop and speed

            }
            realDoSpin_([false]);
        }else {
            return false;
        }
    }

    function endSpinAnim_(){
        var anim=displayManager_.getGroup("vikingCharacter").spinAnim.children[0];
        anim.visible=false;
        anim.animations.frame=1;
    }


    function realDoSpin_(swipe){//swipte=array
        if(!onGame_)return;
        if(messageOn_==false) {
            spinning_ = true;
            if (!bResume_){
                activeKey_=[false,false,false,false];
                waitForReelExpansion_=false;

                for (var a =1;a<4;a++) {
                    disableKey_(a);
                    disableBg_(a);
                }
                restartBg_();
            }
            eventManager_.clearEvt();
            soundManager_.stopSound("smbWin_13");//todo see if possible to stop the sticky wild animation (also on line class)
            buttonManager_.applyState("SPIN");

            if (ReelConfig.spinType == "singleIconReelSpin") {
                //spinManager_.startSpin(swipe[0]);
            } else {
                if (!bResume_) lineManager_.stopEvents();
                bonusManager_.clearLineEval();
                wildManager_.clearWild(-1);
                winAmtManager_.resetWinManager();
                soundManager_.stopSound("winSound");

                me.resetSuccessiveWinning();

                balanceManager_.bet(betCheckCallBack_);
            }
        }else{
            if (freeSpinsManager_.getIsInFs()){
                setTimeout(realDoSpin_,1000);// FS get stuck on RC message
            }
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

                if (waitForReelExpansion_){
                    eventManager_.addEvent(fakeEvent_, 2500);
                    waitForReelExpansion_=false;
                }

                logger(" interrupted win animation ")
                winAmtManager_.forceToComplete();
                lineManager_.clearLineAfterValue();
                stopRandomMessages_();
                if (freeSpinsManager_.getIsInFs() == true || freeTumbling_) {
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
                bResume_=false;
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

    var iRmess_=0;
    var messages_=[];
    var messNum_=0;
    var maxMessages_=4;
    var maxChar_= ("zskojp".indexOf(gameParams.lang)>=0)?40:80;
    var charNum_= 0;
    var codeCaption;
    var iScroll_;

    messages_[0]=Translate.do("Collect all 3 Keys to get Free Spins.");
    messages_[1]=Translate.do("Keys do not persist from spin to spins.");
    messages_[2]=Translate.do("Expanded Reels increase the number of win ways.");
    messages_[3]=Translate.do("Expanded Reels award extra Free Spins.");
    messages_[4]=Translate.do("Some Wild types add multiplier in Free Spins.");

    function stopRandomMessages_(){
        clearInterval(iRmess_);
        clearTimeout(iScroll_);
    }

    function startRandomMessages_(){
        clearInterval(iRmess_);
        if (autoPlayManager_.getIsInAutoPlay() == false) {
            codeCaption = displayManager_.getText("messages");
            codeCaption.setText((messages_[messNum_]).substr(0, maxChar_));
            codeCaption.actualMessage = messages_[messNum_];
            codeCaption.startPos = 0;
            codeCaption.maxLen = maxChar_;
            if (messNum_ < maxMessages_) {
                messNum_++;
            } else {
                messNum_ = 0;
            }
            if (codeCaption.actualMessage.length > maxChar_) {
                iScroll_ = setTimeout(checkLen_, 1000);
            } else {
                iRmess_ = setInterval(startRandomMessages_, 5000);
            }
        }
    }


    function checkLen_(){
        clearTimeout(iScroll_);
        if (codeCaption.actualMessage.length>maxChar_)
        {
            var str=codeCaption.actualMessage.substring(codeCaption.startPos,codeCaption.maxLen+ codeCaption.startPos);
            codeCaption.startPos++;
            codeCaption.setText(str);
            if (codeCaption.startPos>codeCaption.actualMessage.length+5){
                codeCaption.startPos=0;
                iScroll_=setTimeout(startRandomMessages_,500);
            }else{
                iScroll_=setTimeout(checkLen_,100);
            }
        }

    }



    function spinAnimEnd_() {
        logger("animation end called.------"+spinManager_.getSpinResp())
        lineCompletion_=false;
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

    function spinAnimEndAfterTumbling_(){
        if (isTumbling_==false && lineManager_.getInterruptedWinAnim()==false ) {
            console.log("spinAnimEndAfterTumbling_")
            //just to check if expanind animation has to run
            var exp= spinManager_.getSpinResp().status.expand;
            var arr=[];
            var hasToExpand=false;

            if (exp!=null && exp.length>0) {
                var arr = [];
                for (var a in exp) {
                    arr[a] = (exp[a] == true) ? 1 : 0;
                }
            }

            eventManager_.clearEvt();
            winAmtManager_.resetWinManager();
            //lineManager_.initClass();
            soundManager_.stopSound("reelSound");
            winManager_.evaluate(spinManager_.getReels());
            var won = winManager_.getWinAmt();
            fsWon = freeSpinsManager_.getFsWon();
            wonBonus = (spinManager_.getSpinResp() != null && spinManager_.getSpinResp().bonus != null) ? spinManager_.getSpinResp().bonus.wonBonus : 0;
            fs = false;
            collected_ = spinManager_.getSpinResp().status.collected;
            if (freeSpinsManager_.getIsInFs() || fsWon) {
                fs = freeSpinsManager_.getFreeSpinsEval();
            }

            wildManager_.endAnimHandle((winManager_.getWildNum() > 0) ? winManager_.getWildSimbs() : null, eventManager_);

            if (arr.length>0 && expandedReels_.toString()!= arr.toString()){
                eventManager_.addEvent(setReelsCallback_, 0);
                eventManager_.addEvent(fakeEvent_, (gameClass_.getCompulsivePlayer())?2500:3500);
            }

            eventManager_.addEvent(handleFSMultiplier_, 0);


            freeSpinsManager_.endAnimHandle(eventManager_);
            if (won>0){
                lineCompletion_=false;
                buttonManager_.applyState("AFTERSPIN");
                lineManager_.endAnimHandle(winManager_.getAllWinsSorted(), eventManager_);
            }else{
                freeRoundsManager_.updateFreeRoundsTot();
                eventManager_.addEvent(fsEval_, 0);
            }

            if (freeRoundsManager_.getIsInFr() == true && freeSpinsManager_.getIsInFs() == false) {//no add delay during nested FS
                eventManager_.addEvent(fakeEvent_, (won) ? lineManager_.getTotalDuration() : 0);
            }
            eventManager_.triggerEvt();

        }else{
            setTimeout(spinAnimEndAfterTumbling_,100);
        }
    }

    function checkLastFsReplacer_() {
        if (featureBalls_!=undefined ) {
            if (freeSpinsManager_.getFsNumber() <= 1) {//on the last FS (or one of the tumbles [reason for this weird check] i need to place symbols on the reel from the side feature
                for (var i = 0; i < ReelConfig.numReels; i++) {
                    for (var a = 0; a < ReelConfig.numIcons; a++) {
                        if (spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb != null) {//saving prev list for substitution on the last FS
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }

    function evaluateWinnings_(){
        //start bonus if needed, displays all winnings (also called after bonus to display lines winnings), after winnings call the autoplay and freespins evaluator
        lineManager_.clearLine();
        eventManager_.clearEvt();
        startRandomMessages_();
        if (wonBonus==0) {
            logger("NO bonus found ")

            wildManager_.endAnimHandle((winManager_.getWildNum()>0)?winManager_.getWildSimbs():null, eventManager_);
            collected_=spinManager_.getSpinResp().status.collected;
            eventManager_.addEvent(handleFSMultiplier_,0);

            if (won>0 ) {
                if (waitForReelExpansion_){
                    eventManager_.addEvent(fakeEvent_, 2500);
                }

                lineManager_.endAnimHandle(winManager_.getAllWinsSorted(), eventManager_);
                freeSpinsManager_.endAnimHandle(eventManager_);
                if (freeRoundsManager_.getIsInFr()==true && freeSpinsManager_.getIsInFs() == false ){//no add delay during nested FS
                    eventManager_.addEvent(fakeEvent_,(won)?lineManager_.getTotalDuration():0);
                }

            } else {
                if (winManager_.getScatterWinAmt()[0]!=null) {
                    if (winManager_.getScatterWinAmt()[0][10] != null) {
                        eventManager_.addEvent(updateScatterBalance, 0);
                        eventManager_.addEvent(fakeEvent_, 2000);
                    }
                    if (winManager_.getScatterWinAmt()[0][12] != null) {
                        eventManager_.addEvent(updateScatterBalance, 0);
                        eventManager_.addEvent(fakeEvent_, 2000);
                    }
                }
                freeSpinsManager_.endAnimHandle(eventManager_);
                balanceManager_.setCanUpdate(true);
            }
            buttonManager_.applyState("AFTERSPIN");
            lineCompletion_=true;
            if ((freeSpinsManager_.getType()!="convert" && freeSpinsManager_.getType()!="tumble" )  ) {
                eventManager_.addEvent(fsEval_, (freeSpinsManager_.getIsInFs()) ? 500 : 100);
            }
        }else{
            logger("bonus found ");
        }
        eventManager_.triggerEvt();
    }

    function startBonus_(){
        if (wonBonus==0)return;
        wonBonus=0;
        //send a bonus setup request
        communicationManager_.sendServletRequest("bonusSetup");
    }

    function updateBalance_(txt) {
    }

    function updateScatterBalance(){
    }

    function endScatterAnim_(){
        soundManager_.stopSound("incWin");
    }

    function fsEval_(){
        spinning_=false;
        fs=freeSpinsManager_.getIsInFs();
        fsWon=freeSpinsManager_.getFsWon();
        if (fsWon  ){
            setTimeout(apEval_,Number(ReelConfig.fsSpinDelay ));
        }else{
            decreaseKeyVol_();
            apEval_();
        }
    }

    function apEval_(){
        if ((won>0 || winManager_.getScatterWinAmt()[0]!=null)){
            setTimeout(enableButton_, 500);
            multiplierManager_.updateMultiplier(true);
        }else{
            enableButton_();
            multiplierManager_.resetMultipliers();
        }
    }

    function enableButton_() {
        freeRoundsManager_.updateFreeRoundsTot();
        if (winManager_.getWinAmt()<=0) {
            if (freeSpinsManager_.getIsInFs() == false || freeSpinsManager_.getFsNumber() <= 0) {
                 if(freeRoundsManager_.getIsInFr()==false || updateBalanceOnFr_()==true)balanceManager_.balanceUpdate(false,lineManager_.getTotalTumblingWin());
            }
        }
        ap = autoPlayManager_.getAutoPlayEval();
        if (gameParams.force == "Enable") {
            setTimeout(hideForcePanel_, 3000);
        }
        if (freeSpinsManager_.getIsInFs() || fsWon) {
            fs = freeSpinsManager_.getFreeSpinsEval(false); //false cause in this game the balance will be updated after each fs
        }

        if (freeRoundsManager_.getIsInFr() == true && freeSpinsManager_.getIsInFs() == false) {//no add delay during nested FS
            freeRoundsManager_.getFreeRoundsEval();
        }

        if (ap == false && fs == false && fsWon == false) {
            if (ap == false && autoPlayManager_.getIsInAutoPlay() == true) {
                eventManager_.clearEvt();
                eventManager_.addEvent(showApMessage_, 500, [ap]);
                eventManager_.triggerEvt();
            } else {
                finalizeEnable_();
            }
        } else {
            if (fsWon == false) eventManager_.clearEvt();
            if (ap == false && autoPlayManager_.getIsInAutoPlay() == true) {
                eventManager_.addEvent(showApMessage_, 500, [ap]);
            }
            if ((ap && won) || fs) {
                //waiting for line class to trigger
                eventManager_.addEvent(waitForLineCompletion_, 50);
            } else {
                eventManager_.addEvent(startAutoSpin_, 500, [false]);
            }
            eventManager_.triggerEvt();
        }
    }

    function waitForLineCompletion_() {
        if (lineCompletion_ ){
            startAutoSpin_([false]);
        }else{
            setTimeout(waitForLineCompletion_,250);
        }
    }

    function startAutoSpin_(par){
        if (autoPlayManager_.getIsInAutoPlay() || fs ) {
            if (autoPlayManager_.getIsFeature()==false || (autoPlayManager_.getStopOnFeature()==false && fs==true)){
                if (autoPlayManager_.getCanAp()==true) {
                    gcmCalls_("ANIMATION_END",null,true);
                    realDoSpin_(par);
                }else {
                    setTimeout(startAutoSpin_, 1000, par);
                }
            } else{
                if (fsWon==false)buttonManager_.applyState("NH");
            }
        }else{
            if (fsWon==false)buttonManager_.applyState("NH");
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
        if (freeRoundsManager_.getIsInFr()){
            setTimeout(freeRoundsManager_.getFreeRoundsEval,1000);
        }
    }

    function getBetConfigurationDeg_() {
        return [72, 36, 0, 324, 288, 252, 216, 180, 144, 108];    //todo read from json
    }

    function getBetConfiguration_() {
        return ["0.01", "0.02", "0.05", "0.10", "0.25", "0.50", "1.00", "2.00", "5.00", "10.00"]; //todo read from json
    }

    function fakeEvent_() {
    }

    function animFsWin_(){
        if (showFsWin_==true)return;
        showFsWin_=true;
        freeSpinsManager_.showFsIconAfterSubst(winManager_.getFsSimbs());
    }

    function setReelsCallback_(){
        var exp= spinManager_.getSpinResp().status.expand;
        callExpand_(exp,false);
    }

    function callExpand_(exp,resume){
        var e=0;


        if (exp!=null && exp.length>0){
            var arr=[];
            for (var a in exp){
                if (exp[a]==true){
                    arr[a]=1;
                    e++;
                }else{
                    arr[a]=0;
                }
            }
            if (arr.length>0 && expandedReels_.toString()!= arr.toString()){
                expandReelSize_(arr,resume);
                expandedReels_=arr;
            }
            expanded_=e;
        }
    }

    function upperSmbCallBack_(i) {

        //called after spin to move the symbols in the upper position before moving the reel
        prevList_=null;
        for (var a = 0; a < ReelConfig.numIcons; a++) {
            if (spinManager_.getSpinReelResp().reel[i].smb[a]!=undefined) {
                var smb = (spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb != null) ? spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb : spinManager_.getSpinReelResp().reel[i].smb[a].smb;
                if (spinManager_.getSpinReelResp().reel[i].smb[a].special=="remove" )smb=Util.getRandomInt(1,5);
                if (freeSpinsManager_.getIsInFs() == false || spinManager_.getSpinReelResp().reel[i].smb[a].notShow != true) {
                    var s = spinManager_.getReels()[i].swapSmb(smb, a);
                    if (spinManager_.getSpinReelResp().reel[i].smb[a].special.indexOf("trigger") >= 0) { //check for special to animate
                        s.reel = i;
                        s.smb = a;
                        s.trigger = true;
                        spinManager_.addTriggerIcon(s);
                    }else if (spinManager_.getSpinReelResp().reel[i].smb[a].special.indexOf("anim") >= 0) {
                        var obj={};
                        obj.type="anim";
                        obj.loop= (smb==13)? true:false;
                        obj.callBack=null;
                        var s = spinManager_.getReels()[i].swapSmb(smb, a ,obj);
                        soundManager_.playSound("smbWin_"+smb);
                        //triggerKey_([spinManager_.getSpinResp().status.keys]);

                    }

                }else{
                    spinManager_.getReels()[i].removeSymbol(a);
                }
            }
        }
    }

    function playTriggeredSmb_(){
        var iconN=-1;
        var triggerSymbol_=spinManager_.getTriggerIcons();
        var add=false;

        for (var a in triggerSymbol_){
            if ( triggerSymbol_[a].played==undefined) {
                iconN = triggerSymbol_[a].smbNum;
                add = true;
                var smb = new Phaser.Sprite(game_, triggerSymbol_[a].x, triggerSymbol_[a].y, "anim" + iconN);
                smb.anchor.set(.5, .5);
                smb.animations.add("anim");
                smb.scale.x = 1;
                smb.scale.y = 1;
                triggerSymbol_[a].visible = false;

                spinManager_.getReelGroup(triggerSymbol_[a].reel).add(smb);
                spinManager_.setAnimationMap(triggerSymbol_[a].reel, triggerSymbol_[a].smb, smb);
                smb.animations.play("anim", 24, false, true, updateIcon_, triggerSymbol_[a]);
                triggerSymbol_[a].played=true;
            }
        }
        if(add)soundManager_.playSound("smbWin_"+iconN);
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

    function fsLogoOut_(){
        displayManager_.getGroup("bg").visible=false;
        displayManager_.getGroup("mask").visible=false;
        displayManager_.getGroup("frame").visible=false;
        displayManager_.getGroup("bgFS").visible=true;
        displayManager_.getGroup("frameFS").visible=true;
        displayManager_.getGroup("freeSpinLeftAccumulator").visible=false;
        displayManager_.getGroup("vikingCharacter").visible=false;
        if (displayManager_.getGroup("vikingCharacter").v1_1!=undefined){
            displayManager_.getGroup("vikingCharacter").v1_1.children[0].visible=false;
            displayManager_.getGroup("vikingCharacter").v2_1.children[0].visible=false;
            displayManager_.getGroup("vikingCharacter").v1_2.children[0].visible=false;
            displayManager_.getGroup("vikingCharacter").v2_2.children[0].visible=false;
        }
        displayManager_.getGroup("logo").logoA.children[0].visible=false;
        removed_=true;//to place side feature
        lastSound_=1;
        multiplier_=1;
        multiplierPos_=0;

        soundManager_.playSound("doors");
        var g = displayManager_.getGroup("gates")["gate" + 2].children[0];
        TweenMax.to(g, 1, {y: -450});

        var g = displayManager_.getGroup("gates")["gate" + 1].children[0];
        TweenMax.to(g, 1, {delay:.1,y: -450});
        var g = displayManager_.getGroup("gates")["gate" + 3].children[0];
        TweenMax.to(g, 1, {delay:.1,y: -450});

        var g = displayManager_.getGroup("gates")["gate" + 0].children[0];
        TweenMax.to(g, 1, {delay:.2,y: -450});
        var g = displayManager_.getGroup("gates")["gate" + 4].children[0];
        TweenMax.to(g, 1, {delay:.2,y: -450});
        //moveSideMeterFS_(true);
    }

    function logoIn_(){
        var anim=displayManager_.getGroup("logo").logoA.children[0];
        displayManager_.getGroup("logo").logo.children[0].visible=false;
        anim.visible=true;
        anim.animations.add("anim");
        anim.animations.play("anim", 12,false, false ,placeLogo_);//todo parametric loop and speed
    }

    function placeLogo_(){
        displayManager_.getGroup("logo").logoA.children[0].visible=false;
        displayManager_.getGroup("logo").logo.children[0].visible=true;
    }

    function fsHideTotPanel_(){
        displayManager_.getGroup("bg").visible=true;
        displayManager_.getGroup("mask").visible=true;
        displayManager_.getGroup("frame").visible=true;
        displayManager_.getGroup("bgFS").visible=false;
        displayManager_.getGroup("frameFS").visible=false;
        displayManager_.getGroup("freeSpinLeftAccumulator").visible=true;
        displayManager_.getGroup("vikingCharacter").visible=true;
        if (displayManager_.getGroup("vikingCharacter").v1_1!=undefined) {
            if (Util.getRandomInt(1,100)>50){
                displayManager_.getGroup("vikingCharacter").v1_1.children[0].visible=true;
            }else{
                displayManager_.getGroup("vikingCharacter").v2_1.children[0].visible=true;
            }
        }

        sucessiveWin_=0;
        shamrockPos_=0;
        collected_=0;
        lastSound_=1;
        activeKey_=[false,false,false,false];
        waitForReelExpansion_=false;

        for (var a =1;a<4;a++) {
            disableKey_(a);
            disableBg_(a);
        }
    }

    function triggerKey_(par){
        var num=0;
        var keys=par[0];
        var resume=(par[1]!=undefined)?par[1]:false;

        if (keys.toString()!=keysConf_){
            console.log("keys " +keys.toString() )
            for (var a in keys){
                if (keys[a]==true){
                    num++;
                    enableKey_((Number(a)+1),resume);

                }
            }
            if(num>0){
                triggerKeySound_(num);
            }
        }

        keysConf_=keys.toString();
    }

    function enableKey_ (key,resume){
        if (activeKey_[key])return;
        if (sideFeature_[key].played == false) {
            gotKeys_ = true;
            activeKey_[key] = true;
            displayManager_.getGroup("freeSpinLeftAccumulator")["img" + key].children[0].visible = true;
            displayManager_.getGroup("freeSpinLeftAccumulator")["img" + key].children[0].alpha = 1;
            displayManager_.getGroup("freeSpinLeftAccumulator")["img" + key].children[0].animations.add("anim");
            displayManager_.getGroup("freeSpinLeftAccumulator")["img" + key].children[0].animations.play("anim", (resume)?48:24, false, false);
            sideFeature_[key].played = true;
            sideFeatureBg_[key].sound = false;
            keyAnimComplete_(key,resume);

        }
    }

    function disableKey_ (num){
        sideFeatureBg_[num].animations.frame=0;
        if (sideFeature_[num].played==true) {
            keyFadeComplete_(num);
            soundManager_.playSound("keyDeactivation");
            sideFeature_[num].played = false;
        }
    }

    function restartBg_() {
        if (gotKeys_){
            for (var i=1;i<4;i++){
                if (sideFeatureBg_[i].sound){
                    soundManager_.getBGSound("bgSlot"+i ).fadeOutBgSoundExternal(300,0);
                }
                sideFeatureBg_[i].sound=false;
            }
            keysConf_=[];
        }
        gotKeys_=false;
    }

    function disableBg_ (num){
        if (sideFeatureBg_[num].played==true) {
            sideFeatureBg_[num].visible = true;
            sideFeatureBg_[num].alpha = 1;
            var arr=[];
            for (var i=0;i<48;i++){
                arr.push(i);
            }
            arr.reverse();
            sideFeatureBg_[num].animations.add("anim1",arr);
            sideFeatureBg_[num].animations.play("anim1", 48, false, false);
            sideFeatureBg_[num].played = false;
        }
    }

    function keyFadeComplete_(num){
        TweenMax.to(displayManager_.getGroup("freeSpinLeftAccumulator")["img"+num].children[0], .3, {alpha: 0});
    }

    function keyAnimComplete_(num,resume) {
        sideFeatureBg_[num].visible=true;
        sideFeatureBg_[num].alpha=1;
        var arr=[];
        for (var i=0;i<50;i++){
            arr.push(i);
        }
        sideFeatureBg_[num].animations.add("anim",arr);
        sideFeatureBg_[num].animations.play("anim", (resume)?48:24, false, false);
        sideFeatureBg_[num].played=true;
        if (freeSpinsManager_.getIsInFs() != true)soundManager_.playSound("keyActivation");
    }

    function triggerKeySound_(num){
        if (freeSpinsManager_.getIsInFs() == true )return;
        if (sideFeatureBg_[num].sound==false){
            soundManager_.playAdditionalBgSound_("bgSlot"+num);
            soundManager_.getBGSound("bgSlot"+num).fadeInBgSoundExternal(500, 1.2, soundManager_.getBGSound("bgSlot").getSound().currentTime+10,null );
            sideFeatureBg_[num].sound=true;
        }
    }

    function decreaseKeyVol_() {
        for (var i=1;i<4;i++){
            if (sideFeatureBg_[i].sound){
                soundManager_.getBGSound("bgSlot"+i ).fadeOutBgSoundExternal(600,.5);
            }
        }
    }

    var me = {
        initGame: initGame_,
        create:create_,
        enableKey:enableKey_,
        triggerKey:triggerKey_,
        disableKey:disableKey_,
        spinAnimEnd: spinAnimEnd_,
        getBetConfiguration: getBetConfiguration_,
        getBetConfigurationDeg: getBetConfigurationDeg_,
        decreaseVolumeBG:decreaseVolumeBG_,
        increaseVolumeBG:increaseVolumeBG_,
        doSpin: doSpin_,
        doAp:doAp_,
        betSelector:betSelector_,
        doPt:doPt_,
        doStop:doStop_,
        closePt:closePt_,
        leaveGame:leaveGame_,
        backToGame:backToGame_,
        realDoSpin:realDoSpin_,
        evaluateWinnings:evaluateWinnings_,
        fakeEvent:fakeEvent_,
        fsEval:fsEval_,
        hideFs:hideFs_,
        updateBalance:updateBalance_,
        changeBet:changeBet_,
        upperSmbCallBack:upperSmbCallBack_,
        playTriggeredSmb:playTriggeredSmb_,
        changeCompulsiveState:changeCompulsiveState_,
        spinAnimEndAfterTumbling:spinAnimEndAfterTumbling_,
        fsLogoOut:fsLogoOut_,
        fsHideTotPanel:fsHideTotPanel_,
        unSetMask:unSetMask_,
        setMask:setMask_,
        setReelsCallback:setReelsCallback_,
        animateFS:animateFS_,
        logoIn:logoIn_,
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
            return 10;
        },
        getCompulsivePlayer:function () {
            return compulsiveFlag_;
        },
        startSounds:function(){
            if (communicationManager_.getResumeStatus().status.hand=="freespins" && (communicationManager_.getResumeStatus().status.type=="tumble" || communicationManager_.getResumeStatus().status.type=="convert")) {
                soundManager_.playBgSound("bgSlot");
            }else if(communicationManager_.getResumeStatus().status.hand=="freespins") {
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
        },
        resetSuccessiveWinning:function () {
            if (freeSpinsManager_.getIsInFs())return;
            sucessiveWin_=0;
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
        endTumble:function(duration,repeat,offset){
            startVibrate_(duration,repeat,offset);
        },
        lineCompletion:function (value){
            lineCompletion_=value;
        },
        getLineCompletion:function (){
            return lineCompletion_;
        },
        getCollected:function(){
            return collected_;
        },
        getSideRemoved:function () {
            return removed_;
        },
        getIconsNum:function (reel) {
            return   (expandedReels_.length==0)? ReelConfig.numIcons: (expandedReels_[reel]==1)?5:4;
        },
        shamrockPop:function(){
        },
        hasWildActive:function (num){
            var key=1;
            if (num==12)key=2;
            if (num==13)key=3;
            return activeKey_[key];
        },
        waitForSpin:function () {
            if (gameClass_.getCompulsivePlayer()==true)return false;
            return true;
        },
        getEventManager:function () {
            return eventManager_;
        }

    }

    return me;
}
