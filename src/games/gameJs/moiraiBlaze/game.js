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

    var featurePanelFS_;
    var sideFeature_=[];
    var sideFeatureFS_=[];
    var featureIcons_=[];
    var featureIconsText_=[];
    var collected_;
    var featureBalls_;
    var mask_;
    var lineCompletion_=false;
    var prevList_=null;
    var removed_=true;
    var fadeBg_=false;
    var iFadeT_O_=0;
    var bResume_=false;

    function create_() {

        //display manager levels
        displayManager_.getGroup("bg").visible=true;
        displayManager_.getGroup("mask").visible=true;
        displayManager_.getGroup("mask1").visible=true;
        displayManager_.getGroup("frame").visible=true;
        displayManager_.getGroup("status").visible=true;
        displayManager_.getGroup("logo").visible=true;
        displayManager_.getGroup("flower").visible=true;
        displayManager_.getGroup("freeSpinAccumulator").visible=true;
        if(!framework.getSettings().getHelpOnLoad())displayManager_.getGroup("buttonFg").visible=false;
        spinManager_.createReels();
        guiBottomBar_.setBetControlInitialBet(ReelConfig.bet);//todo change this, it's just to apply the default bet
        logger("nh call8")
        scatterManager_.addScatter(10); //todo get rid

        sideFeature_[0]=displayManager_.getGroup("freeSpinAccumulator")["sideLegs"].children[0];
        sideFeature_[1]=displayManager_.getGroup("freeSpinAccumulator")["sideActive"].children[0];
        sideFeature_[2]=displayManager_.getGroup("freeSpinAccumulator")["sideAnim"].children[0];
        sideFeature_[3]=displayManager_.getGroup("freeSpinAccumulator")["sideEnd"].children[0];
        sideFeatureFS_[0]=displayManager_.getGroup("freeSpinAccumulator")["sideLegsFS"].children[0];
        sideFeatureFS_[1]=displayManager_.getGroup("freeSpinAccumulator")["sideActiveFS"].children[0];
        sideFeatureFS_[2]=displayManager_.getGroup("freeSpinAccumulator")["sideAnimFS"].children[0];
        sideFeatureFS_[3]=displayManager_.getGroup("freeSpinAccumulator")["sideEndFS"].children[0];

        featurePanelFS_= displayManager_.getGroup("freeSpinLeftAccumulator")["sidePanelFS"].children[0];
        featureIcons_[0]=displayManager_.getGroup("freeSpinLeftAccumulator")["img1"].children[0];
        featureIconsText_[0]=displayManager_.getText("txt1");
        featureIcons_[1]=displayManager_.getGroup("freeSpinLeftAccumulator")["img2"].children[0];
        featureIconsText_[1]=displayManager_.getText("txt2");
        featureIcons_[2]=displayManager_.getGroup("freeSpinLeftAccumulator")["img3"].children[0];
        featureIconsText_[2]=displayManager_.getText("txt3");
    }

    function setMask_(){
        if (mask_!=null){
            //game_.stage.remove(mask_);
            mask_.destroy();
            mask_=null;
        }
        //mask
        mask_ = game_.add.graphics(0, 0);
        mask_.beginFill(0xffffff);
        mask_.drawRect(380, 118, 520, 520);
        displayManager_.getGroup("reels").mask=mask_;
    }

    function unSetMask_(){
        if (mask_!=null){
            mask_.destroy();
            mask_=null;
        }
    }

    function initGame_(){
        setTimeout(resume_,100);
    }

    function resume_(){

        collected_=communicationManager_.getResumeStatus().status.collected;
        gcmCalls_("STAKE",balanceManager_.getCoinValue());
        if (communicationManager_.getResumeStatus().status.hand=="freespins" &&(communicationManager_.getResumeStatus().status.type=="tumble" ||communicationManager_.getResumeStatus().status.type=="convert" )) {//todo tumble attribute not really correct, i should be able to understand if inside FS
            if (communicationManager_.getResumeStatus().status !=null && communicationManager_.getResumeStatus().status.stake>0){
                changeBet_(communicationManager_.getResumeStatus().status.stake/100, true);
            }
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
            //f1x2.GcmError(-3);
            freeSpinsManager_.parse(communicationManager_.getResumeStatus());
            buttonManager_.applyHide();
            freeRoundsManager_.frChecker();
            messageBox_.showMessage("game", "A free tumble has been interrupted", "Press Spin to continue", startTumble_);


            multiplier_=(communicationManager_.getResumeStatus().status.multiplier!=undefined)?communicationManager_.getResumeStatus().status.multiplier:0;
            featureBalls_=(communicationManager_.getResumeStatus().status.featureBalls!=undefined)?communicationManager_.getResumeStatus().status.featureBalls:[0,0,0];
            if (multiplier_>0)moveSideMeterFS_(true);
            lineManager_.resumeTumbling(communicationManager_.getResumeStatus(),true);
            bResume_=true;
        }else if (communicationManager_.getResumeStatus().status.hand=="freespins") {
            if (communicationManager_.getResumeStatus().status !=null && communicationManager_.getResumeStatus().status.stake>0){
                changeBet_(communicationManager_.getResumeStatus().status.stake/100, true);
            }
            //f1x2.GcmError(-3);
            freeSpinsManager_.parse(communicationManager_.getResumeStatus());
            //displayManager_.getGroup("freeSpinAccumulator")["bg1"].children[0].alpha=0;
            buttonManager_.applyHide();
            freeRoundsManager_.frChecker();

            multiplier_=(communicationManager_.getResumeStatus().status.multiplier!=undefined)?communicationManager_.getResumeStatus().status.multiplier:0;
            featureBalls_=(communicationManager_.getResumeStatus().status.featureBalls!=undefined)?communicationManager_.getResumeStatus().status.featureBalls:[0,0,0];
            if (multiplier_>0)moveSideMeterFS_(true);

            messageBox_.showMessage("game", "You have unused Free Spins", "They will be automatically started", startResumeFs_);
        }else{
            soundManager_.playBgSound("bgSlot");
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

        onGame_=true;
        framework.showFramework();
        displayManager_.getGroup("buttonFg").visible=true;
       // setTimeout(tryFix,3000)
        //setInterval(startVibrate_,2000);
        // setTimeout(shamrockPop_,1000);

        // setInterval(activateFSMusic,8000);
        //setTimeout(startTest,3000)
    }

    function tryFix(){
        spinManager_.getReels()[2].replaceIcon("upperIcon"+(Number(ReelConfig.numIcons)- 6-1),10);
    }

    function startVibrate_(duration,repeat,offset){
        vibration_(displayManager_.getGroup("frame"),duration,repeat,offset);
        vibration_(displayManager_.getGroup("frameFS"),duration,repeat,offset);
        vibration_(displayManager_.getGroup("mask1"),duration,repeat,offset);
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

    function startTest(){
        soundManager_.getBGSound("bgSlot"+2).fadeInBgSoundExternal(500, 1.2, soundManager_.getBGSound("bgSlot").getSound().currentTime+2,null );
        soundManager_.getBGSound("bgSlot"+3).fadeInBgSoundExternal(500, 1.3, soundManager_.getBGSound("bgSlot").getSound().currentTime+3,null );
        soundManager_.getBGSound("bgSlot"+4).fadeInBgSoundExternal(500, 1.4, soundManager_.getBGSound("bgSlot").getSound().currentTime+4,null );
        soundManager_.getBGSound("bgSlot"+5).fadeInBgSoundExternal(500, 1.5, soundManager_.getBGSound("bgSlot").getSound().currentTime+5,null );
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

    function activateFSMusic(){
        setTimeout (deactivateIt,4000);
        soundManager_.mixMultipleBgSound("bgSlot","bgFs", 1000, 1000);
    }

    function deactivateIt(){
        soundManager_.mixMultipleBgSound("bgFs","bgSlot", 1000, 1000);
    }

    function updateCollected_(val){
        displayManager_.getText("spinNum").y=300;
        displayManager_.getText("spinNum").setText(val);
    }

    function moveSideMeter_(resume){
        var arr=[];
        var index=0;
        var fps =24;
        var audioLevel=[];
        audioLevel[1]=1;
        audioLevel[2]=1.25;
        audioLevel[3]=1.25;
        audioLevel[4]=1.2;
        audioLevel[5]=1.2;
        audioLevel[6]=1.15;
        audioLevel[7]=1.15;
        audioLevel[8]=1.15;
        var audioDelay=[];
        audioDelay[2]=5;
        audioDelay[3]=2;
        audioDelay[4]=2;
        audioDelay[5]=2;

        if (freeSpinsManager_.getType()=="convert")return;
        if ((sucessiveWin_ > 0 || resume) && shamrockPos_ == 0) {
            displayManager_.getText("spinNum").visible = true;
            soundManager_.playSound("sideActive");
            sideFeatureFS_[0].alpha = 0;
            sideFeatureFS_[1].alpha = 0;
            sideFeatureFS_[2].alpha = 0;
            sideFeature_[0].alpha = 1;
            sideFeature_[1].alpha = 1;
            sideFeature_[2].alpha = 0;
            sideFeature_[3].alpha = 0;
            if (sucessiveWin_>0 || resume) {
                sideFeature_[1].animations.add("anim");
                sideFeature_[1].animations.play("anim", 24, false, false);

                if (sucessiveWin_>0 )setTimeout(updateCollected_,700,collected_);
            }else{
                displayManager_.getText("spinNum").setText("");
            }
        } else if (sucessiveWin_ > 0 && shamrockPos_ > 0) {
            displayManager_.getText("spinNum").visible = true;
            soundManager_.playSound("sideAnim");
            sideFeature_[0].alpha = 1;
            sideFeature_[1].alpha = 0;
            sideFeature_[2].alpha = 1;
            sideFeature_[3].alpha = 0;
            sideFeature_[2].animations.add("anim");
            sideFeature_[2].animations.play("anim", 24, false, false);
            setTimeout(updateCollected_,700,collected_);
        } else if (sucessiveWin_ == 0 && shamrockPos_ > 0) {
            displayManager_.getText("spinNum").setText("");

            sideFeature_[0].alpha = 1;
            sideFeature_[1].alpha = 0;
            sideFeature_[2].alpha = 0;
            sideFeature_[3].alpha = 1;
            sideFeature_[3].animations.add("anim");
            sideFeature_[3].animations.play("anim", 24, false, false);
        }

        if(collected_>=20 && shamrockPos_!=sucessiveWin_ && sucessiveWin_>0){
            var ii=0;
            if (Math.floor(collected_/80)>0){
                index=5;
                for (var b=lastSound_+1;b<=index;b++){
                    soundManager_.playAdditionalBgSound_("bgSlot"+b);
                    soundManager_.getBGSound("bgSlot"+b).fadeInBgSoundExternal(500, audioLevel[b], soundManager_.getBGSound("bgSlot").getSound().currentTime+audioDelay[b],null );
                    ii++
                }
            } else if (Math.floor(collected_/60)>0){
                index=4;
                for (var b=lastSound_+1;b<=index;b++){
                    soundManager_.playAdditionalBgSound_("bgSlot"+b);
                    soundManager_.getBGSound("bgSlot"+b).fadeInBgSoundExternal(500, audioLevel[b], soundManager_.getBGSound("bgSlot").getSound().currentTime+audioDelay[b],null );
                    ii++
                }
            } else if (Math.floor(collected_/40)>0) {
                index=3;
                for (var b=lastSound_+1;b<=index;b++){
                    soundManager_.playAdditionalBgSound_("bgSlot"+b);
                    soundManager_.getBGSound("bgSlot"+b).fadeInBgSoundExternal(500, audioLevel[b], soundManager_.getBGSound("bgSlot").getSound().currentTime+ audioDelay[b],null );
                    ii++
                }
            } else if (Math.floor(collected_/20)>0){
                index=2;
                soundManager_.playAdditionalBgSound_("bgSlot2");
                soundManager_.getBGSound("bgSlot2").fadeInBgSoundExternal(500, audioLevel[2], soundManager_.getBGSound("bgSlot").getSound().currentTime+ audioDelay[2],null );
            }

            lastSound_=index;

        }else if(sucessiveWin_<=0 && shamrockPos_!=sucessiveWin_){
            for (var a =2;a<=5;a++ ) {
                if (soundManager_.getBGSound("bgSlot" + a) != null) soundManager_.getBGSound("bgSlot" + a).fadeOutBgSound(1000);
            }
            lastSound_=1;
        }
        shamrockPos_ = sucessiveWin_;
    }

    function decreaseVolumeBG_(fadeT_O_){
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


    function moveSideMeterFS_(resume){
        if (resume==false &&  freeSpinsManager_.getIsInFs() == false )return;
        var arr=[];
        var index=0;
        var fps =24;
        var audioLevel=[];
        audioLevel[1]=1;
        audioLevel[2]=1.2;
        audioLevel[3]=1.2;
        audioLevel[4]=1.2;
        audioLevel[5]=1.2;
        audioLevel[6]=1.25;
        audioLevel[7]=1.25;
        audioLevel[8]=1.25;

        var audioDelay=[];
        audioDelay[2]=5;
        audioDelay[3]=2;
        audioDelay[4]=2;
        audioDelay[5]=2;
        audioDelay[6]=2;
        audioDelay[7]=2;
        audioDelay[8]=2;

        if (multiplier_ > 0 && multiplierPos_ == 0) {
            displayManager_.getText("spinNum").visible = true;
            soundManager_.playSound("sideActive");
            sideFeature_[0].alpha = 0;
            sideFeature_[1].alpha = 0;
            sideFeature_[2].alpha = 0;
            sideFeatureFS_[0].alpha = 1;
            sideFeatureFS_[1].alpha = 1;
            sideFeatureFS_[2].alpha = 0;
            sideFeature_[3].alpha = 0;
            sideFeatureFS_[1].animations.add("anim");
            sideFeatureFS_[1].animations.play("anim", 24, false, false);
            displayManager_.getText("spinNum").y=320;
            displayManager_.getText("spinNum").setText("x"+multiplier_);
        } else if (multiplier_ > 0 && multiplierPos_ > 0 && multiplier_!=multiplierPos_) {
            displayManager_.getText("spinNum").visible = true;
            soundManager_.playSound("sideAnim");
            sideFeatureFS_[0].alpha = 1;
            sideFeatureFS_[1].alpha = 0;
            sideFeatureFS_[2].alpha = 1;
            sideFeature_[3].alpha = 0;
            sideFeatureFS_[2].animations.add("anim");
            sideFeatureFS_[2].animations.play("anim", 24, false, false);
            displayManager_.getText("spinNum").y=320;
            displayManager_.getText("spinNum").setText("x"+multiplier_);
        } else if (multiplier_ == 0 && multiplierPos_ > 0) {
        }

        if (!resume && featureBalls_[0]==0 && featureBalls_[1]==0 && featureBalls_[2]==0) {
            prevList_ = null;
            if (freeSpinsManager_.getFsNumber() <= 1) {//on the last FS (or one of the tumbles [reason for this weird check] i need to place symbols on the reel from the side feature
                for (var i = 0; i < ReelConfig.numReels; i++) {
                    for (var a = 0; a < ReelConfig.numIcons; a++) {
                        if (spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb != null) {//saving prev list for substitution on the last FS
                            var s ={};
                            if (prevList_ == null) prevList_ = [];
                            if (prevList_[spinManager_.getSpinReelResp().reel[i].smb[a].smb] == undefined) prevList_[spinManager_.getSpinReelResp().reel[i].smb[a].smb] = [];
                            s.reel=i;
                            s.icon=a;
                            s.x=ReelConfig.reel.deltaX_0 + ReelConfig.reel.deltaX/2 +(ReelConfig.reel.deltaX * (i));
                            s.y=(90+ReelConfig.reel.deltaY * (a +1));
                            prevList_[spinManager_.getSpinReelResp().reel[i].smb[a].smb].push(s);
                        }
                    }
                }
            }
        }

        if (freeSpinsManager_.getIsInFs() == true && prevList_!=null){
            //explode balls on the side panels
            var ind=0;
            soundManager_.playSound("introFS");
            for (var a in prevList_) {
                for (var aa in prevList_[a]) {
                    var destX = prevList_[a][aa].x;
                    var index = 0;
                    if (a == 8) index = 1;
                    if (a == 10) index = 2;
                    setTimeout(startSubstitution_,index*2000,index,a,aa);
                    ind=Math.max(ind,index);
                }
            }

            //take the panel away
            removed_=true;
            TweenMax.to(featurePanelFS_,.5,{delay:((ind*2000)+2500)/1000,alpha:0,onComplete:removeTexts_});

        }else{
            if (featurePanelFS_.alpha==0 && removed_== false){
                TweenMax.to(featurePanelFS_,.2,{alpha:1,onComplete:updateTexts_});
            }else if (featurePanelFS_.alpha==1){
                updateTexts_();
            }
        }

        if(multiplier_>1 && multiplier_!=multiplierPos_ && multiplier_<8){
            for (var b=lastSound_+1;b<=multiplier_;b++){
                soundManager_.playAdditionalBgSound_("bgFs"+b);
                if (soundManager_.getBGSound("bgFs"+b)!=null)soundManager_.getBGSound("bgFs"+b).fadeInBgSoundExternal(500, audioLevel[b], soundManager_.getBGSound("bgFs").getSound().currentTime+audioDelay[b],null );
            }

            lastSound_=multiplier_;

        }else if(multiplier_<=0 && multiplier_!=multiplierPos_){
            for (var a =2;a<=7;a++ ) {
                if (soundManager_.getBGSound("bgFs" + a) != null) soundManager_.getBGSound("bgFs" + a).fadeOutBgSound(1000);
            }
            lastSound_=1;
        }



        multiplierPos_ = multiplier_;
    }

    function startSubstitution_(index,a,aa) {
        if (featureIcons_[index].alpha == 1) {
            soundManager_.playSound("iconPop");
            featureIconsText_[index].setText("");
            var expl = game_.add.sprite(featureIcons_[index].x, featureIcons_[index].y, "shamrock-pop");
            expl.anchor.set(.5, .5);
            expl.animations.add("anim");
            expl.scale.x = 1;
            expl.scale.y = 1;
            displayManager_.getGroup("scatter").add(expl);
            expl.animations.play("anim", 18, false, true);//todo parametric loop

            var icon = game_.add.sprite(featureIcons_[index].x, featureIcons_[index].y, "anim" + a);
            icon.reel = prevList_[a][aa].reel;
            icon.smb = Number(ReelConfig.numIcons) - prevList_[a][aa].icon;
            icon.numSmb = a;
            icon.anchor.set(.5, .5);
            icon.animations.add("anim");
            icon.scale.x = 1;
            icon.scale.y = 1;
            icon.smbNum = a;
            displayManager_.getGroup("scatter").add(icon);
            icon.animations.play("anim", 24, false, true);//todo parametric loop
            featureIcons_[index].alpha = 0;
        }
        setTimeout(animateReelsBall_,500,a,aa);
    }

    function animateReelsBall_(a,aa) {
        //animate balls on the reels
        var icon2 = spinManager_.getReels()[prevList_[a][aa].reel].getSymbol(prevList_[a][aa].icon);
        var anim_ = game_.add.sprite(icon2.x, icon2.y, "anim" + icon2.smbNum);
        anim_.reel = prevList_[a][aa].reel;
        anim_.smb =  prevList_[a][aa].icon;
        anim_.numSmb = a;
        anim_.anchor.set(.5, .5);
        anim_.animations.add("anim");
        anim_.scale.x = 1;
        anim_.scale.y = 1;
        anim_.smbNum = icon2.smbNum;
        icon2.visible=false;
        displayManager_.getGroup("reels").add(anim_);
        anim_.play("anim", 36, false, true);//todo parametric loop
        soundManager_.playSound("iconExplode_6");

        var expl_ = game_.add.sprite(icon2.x, icon2.y, "shamrock-pop");
        expl_.anchor.set(.5, .5);
        expl_.animations.add("anim");
        expl_.scale.x = 1;
        expl_.scale.y = 1;
        expl_.animations.play("anim", 36, false, true, substitution_, anim_);//todo parametric loop
        displayManager_.getGroup("winGlow").add(expl_);
    }

    function removeTexts_(){
        for (var a in featureBalls_) {
            featureIconsText_[a].setText("");
            featureIcons_[a].alpha = 0;
        }
    }

    function updateTexts_(){
        for (var a in featureBalls_) {
            featureIcons_[a].alpha = 1;
            featureIconsText_[a].setText(featureBalls_[a]);
        }
    }

    function substitution_(par){
        var icon=spinManager_.getReels()[par.reel].replaceIcon("upperIcon"+par.smb,par.numSmb);
        par.visible=false;
        //remove the icon todo
    }

    function handleFSMultiplier_(){
        if (freeSpinsManager_.getIsInFs() || fsWon){
            multiplier_=( spinManager_.getSpinResp().freeSpin.multiplier!=undefined)?spinManager_.getSpinResp().freeSpin.multiplier:0;
            featureBalls_=(spinManager_.getSpinResp().status.featureBalls!=undefined)?spinManager_.getSpinResp().status.featureBalls:[0,0,0];

            moveSideMeterFS_(false);
        }
    }

    function startResumeBonus_(){
        buttonManager_.applyRestore();
        bonusManager_.setResumeFlag(true);
        communicationManager_.sendServletRequest("bonusSetup");
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
    }

    function doAp_() {
        framework.checkAutoPlay();//moved logic to autoplayBox
    }

    function doSpin_() {
        framework.closeApMenu();
        framework.closeBetMenu();
        if (buttonManager_.getButton(frameworkSettings.buttons.spinButton.id).isEnable()==true && isTumbling_==false) {
            soundManager_.playSound("spinClick");
            realDoSpin_([false]);
        }else {
            return false;
        }
    }

    function realDoSpin_(swipe){//swipte=array
        if(!onGame_)return;
        if(messageOn_==false) {
            spinning_ = true;
            eventManager_.clearEvt();
            soundManager_.stopSound("smbWin_13");//todo see if possible to stop the sticky wild animation (also on line class)
            buttonManager_.applyState("SPIN");

            if (ReelConfig.spinType == "singleIconReelSpin") {
                //spinManager_.startSpin(swipe[0]);
            } else {
                if (!bResume_) lineManager_.stopEvents();
                bonusManager_.clearLineEval();
                wildManager_.clearWild(winManager_.getWildSimbs());
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

                logger(" interrupted win animation ")
                winAmtManager_.forceToComplete();
                lineManager_.clearLineAfterValue();
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
            lineCompletion_=false;
            eventManager_.clearEvt();
            winAmtManager_.resetWinManager();
            //lineManager_.initClass();
            soundManager_.stopSound("reelSound");
            winManager_.evaluate(spinManager_.getReels());
            var won = winManager_.getWinAmt();
            fsWon = freeSpinsManager_.getFsWon();
            wonBonus = (spinManager_.getSpinResp() != null && spinManager_.getSpinResp().bonus != null) ? spinManager_.getSpinResp().bonus.wonBonus : 0;
            fs = false;
            collected_=spinManager_.getSpinResp().status.collected;
            if (freeSpinsManager_.getIsInFs() || fsWon) {
                fs = freeSpinsManager_.getFreeSpinsEval();
            }

            wildManager_.endAnimHandle((winManager_.getWildNum()>0)?winManager_.getWildSimbs():null, eventManager_);
            eventManager_.addEvent(handleFSMultiplier_,0);
            if (checkLastFsReplacer_()) eventManager_.addEvent(fakeEvent_,7000);

            lineManager_.endAnimHandle(winManager_.getAllWinsSorted(), eventManager_);

            freeSpinsManager_.endAnimHandle(eventManager_);

            if (freeRoundsManager_.getIsInFr()==true && freeSpinsManager_.getIsInFs() == false ){//no add delay during nested FS
                eventManager_.addEvent(fakeEvent_,(won)?lineManager_.getTotalDuration():0);
            }

            buttonManager_.applyState("AFTERSPIN");

            //eventManager_.addEvent(fsEval_, 0);
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

        if (wonBonus==0) {
            logger("NO bonus found ")

            wildManager_.endAnimHandle((winManager_.getWildNum()>0)?winManager_.getWildSimbs():null, eventManager_);
            collected_=spinManager_.getSpinResp().status.collected;
            eventManager_.addEvent(handleFSMultiplier_,0);
            if (checkLastFsReplacer_()) eventManager_.addEvent(fakeEvent_,7000);
            if (won>0 || freeSpinsManager_.getType()=="convert" || freeSpinsManager_.getType()=="tumble") {
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
                if(!fsWon)framework.updateSmallMessageText(Translate.do("Good luck"));
                balanceManager_.setCanUpdate(true);
            }
            buttonManager_.applyState("AFTERSPIN");
            lineCompletion_=true;
            if ((freeSpinsManager_.getType()!="convert" && freeSpinsManager_.getType()!="tumble" )  ) {
                console.log("fsEval call "+ freeSpinsManager_.getType())
                eventManager_.addEvent(fsEval_,  0);
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
        logger("update balance "  + " "+getStackTrace().join('\n'));
        if(!freeSpinsManager_.getIsInFs() && updateBalanceOnFr_())balanceManager_.balanceUpdate();
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
        if (!won) {
            if (freeSpinsManager_.getIsInFs() == false || freeSpinsManager_.getFsNumber() <= 0) {
                gcmCalls_("PAID", 0);
                if(freeRoundsManager_.getIsInFr()==false)balanceManager_.balanceUpdate();
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

    function upperSmbCallBack_(i) {
        //called after spin to move the symbols in the upper position before moving the reel
        prevList_=null;
        for (var a = 0; a < ReelConfig.numIcons; a++) {
            var smb = (spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb != null) ? spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb : spinManager_.getSpinReelResp().reel[i].smb[a].smb;
            if (freeSpinsManager_.getIsInFs()== false || spinManager_.getSpinReelResp().reel[i].smb[a].notShow!=true) {
                var s = spinManager_.getReels()[i].swapSmb(smb, a);
                if (spinManager_.getSpinReelResp().reel[i].smb[a].special.indexOf("trigger") >= 0) { //check for special to animate
                    s.reel = i;
                    s.smb = a;
                    s.trigger = true;
                    spinManager_.addTriggerIcon(s);
                }
                if (gameClass_.checkSpecialSymbol != null && gameClass_.checkSpecialSymbol(spinManager_.getSpinReelResp().reel[i].smb[a].smb) == true) {    //check for other symbols the lazy guy didn't add special for( example Fs multiplier symbols in Ostara)
                    s.reel = i;
                    s.smb = a;
                    spinManager_.addTriggerIcon(s);
                }
            }else{
                spinManager_.getReels()[i].removeSymbol(a);
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
        displayManager_.getGroup("maskFS").visible=true;
        displayManager_.getGroup("frameFS").visible=true;
        displayManager_.getGroup("flower").visible=false;
        displayManager_.getGroup("flowerFS").visible=true;
        displayManager_.getGroup("freeSpinLeftAccumulator").visible=true;
        featurePanelFS_.alpha=1;
        removed_=true;//to place side feature
        lastSound_=1;
        multiplier_=1;
        multiplierPos_=0;
        moveSideMeterFS_(true);
    }

    function fsHideTotPanel_(){
        displayManager_.getGroup("bg").visible=true;
        displayManager_.getGroup("mask").visible=true;
        displayManager_.getGroup("frame").visible=true;
        displayManager_.getGroup("bgFS").visible=false;
        displayManager_.getGroup("maskFS").visible=false;
        displayManager_.getGroup("frameFS").visible=false;
        displayManager_.getGroup("flower").visible=true;
        displayManager_.getGroup("flowerFS").visible=false;
        displayManager_.getGroup("freeSpinLeftAccumulator").visible=false;

        displayManager_.getText("spinNum").setText("");
        sideFeatureFS_[0].alpha = 1;
        sideFeatureFS_[1].alpha = 0;
        sideFeatureFS_[2].alpha = 0;
        sideFeature_[3].alpha = 1;
        sideFeatureFS_[3].animations.add("anim");
        sideFeatureFS_[3].animations.play("anim", 24, false, false,revertSideChar_);

        sucessiveWin_=0;
        shamrockPos_=0;
        collected_=0;
        lastSound_=1;
        moveSideMeter_()
    }

    function revertSideChar_(){
        sideFeatureFS_[0].alpha = 0;
        sideFeatureFS_[1].alpha = 0;
        sideFeatureFS_[2].alpha = 0;
        sideFeature_[0].alpha = 1;
        sideFeature_[1].alpha = 1;
        sideFeature_[2].alpha = 0;
        sideFeature_[3].alpha = 0;
        sideFeature_[1].animations.add("anim");
        sideFeature_[1].animations.play("anim", 24, false, false);
        displayManager_.getText("spinNum").setText("");
    }

    var me = {
        initGame: initGame_,
        create:create_,
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
                moveSideMeter_(true);
            }else if(communicationManager_.getResumeStatus().status.hand=="freespins") {
                soundManager_.playBgSound("bgFs");
                moveSideMeterFS_(true);
            }else{
                moveSideMeter_(true);
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
            moveSideMeter_(false);
        },
        resetSuccessiveWinning:function () {
            if (freeSpinsManager_.getIsInFs())return;
            sucessiveWin_=0;
            moveSideMeter_(false);
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
        }
    }

    return me;
}