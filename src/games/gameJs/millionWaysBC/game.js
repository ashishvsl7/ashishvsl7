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
    var wonBonus=0;
    var numFs_=0;
    var addFS_=0;
    var onGame_=false;
    var spinning_=false;
    var showScatterWin_=false;
    var showFsWin_=false;
    var isTumbling_=false;
    var isTumblingReq_=false;
    var sucessiveWin_=0;
    var vaweTo_=0;
    var anchorPos_=0;
    var reelLocked_=0;
    var lockedReelPos_=0;
    var lastSound_;
    var multiplier_=1;
    var multiplierPos_=0;
    var freeTumbling_=false;
    var collected_;
    var featureBalls_;
    var mask_;
    var stopped_=false;
    var mwCounterTW_=null;
    var expandedReels_=[0,0,0,0,0];
    var lineCompletion_=false;
    var prevList_=null;
    var removed_=true;
    var fadeBg_=false;
    var iFadeT_O_=0;
    var bResume_=false;
    var waitForReelExpansion_=false;
    var expanded_=0;
    var xOffset_=0;
    var xOffsetFull_=0;
    var yOffset_=0;
    var xRatio_=1;
    var xRatioFull_=1;
    var yRatio_=1;
    var xMask=0;
    var yMask=132;
    var yMaskTop=64;
    var fsMask_=0;
    var maskWidth=515+ReelConfig.reel.deltaX_0;
    var maskHeight=444;
    var portraitLoaded_=false;
    var portraitLoading_=false;
    var buyIn_=false;
    var wasInbuyIn_=0;
    var endFs_=0; //used to avoid displaying sticky wilds on multiple buyin
    prevInner_=1;
    var scaleH_=window.innerHeight;
    var scaleW_= window.innerWidth;
    var portrait_=false;
    var quiteSpinMusic=0;
    var buttonBF_;
    var buttonBFP_;
    var updateLockedReels_=false;
    var apTimer_=0;
    var turning_=false;
    var reelFrame_=[];
    var multiplierFS_=0;
    var fsTransition_=false;
    var canSpin_=true;

    function create_() {
        buttonManager_.applyState("NH");
        framework.hideFramework();
        displayManager_.getGroup("reels").visible = false;
        displayManager_.getGroup("bg").visible = false;
        displayManager_.getGroup("mask").visible = false;
        displayManager_.getGroup("logo").visible = false;
        displayManager_.getGroup("freeSpinAccumulator").visible = false;
        spinManager_.createReels();

        if (!framework.isTouch()) {
            displayManager_.getGroup("freeRounds").y=70;
            //FR
            displayManager_.getGroup("freeRounds").frPanel.x=250
            displayManager_.getGroup("freeRounds").frPanel.y=-50
        }

        //set Reel frame
        for (var i=1;i<5;i++) {
            reelFrame_[i] = new Phaser.Sprite(game_, 640, 360, "reelFrame_"+i);
            reelFrame_[i].anchor.set(.5, .5);
            reelFrame_[i].animations.add("anim");
            reelFrame_[i].scale.x = 1;
            reelFrame_[i].scale.y = 1;
            reelFrame_[i].visible=false;
            displayManager_.getGroup("mask").add(reelFrame_[i]);
        }
        reelFrame_[1].visible=true;
        setMask_();
        guiBottomBar_.setBetControlInitialBet(ReelConfig.bet);//todo change this, it's just to apply the default bet
    }

    var reelFrameSeq_=0;

    function increaseMask_(o){
        fsMask_=o.val;
        setMask_();
    }

    function increaseMaskTop_(o){
        yMaskTop=o.val;
        setMask_();
    }

    function toggleFS_(){
        displayManager_.getGroup("stickyWilds").visible = false;
        displayManager_.getGroup("stickyWilds").removeAll();
        soundManager_.playSound("winAmountFall");
        fsTransition_=true;
        displayManager_.getGroup("bg").visible = false;
        displayManager_.getGroup("freeSpinAccumulator").visible = false;
        displayManager_.getGroup("bgFS").visible = true;
        displayManager_.getGroup("mask").visible = true;
        displayManager_.getGroup("logo").visible = true;
        displayManager_.getGroup("freeSpins").visible=true;
        if (!framework.isTouch()) {
            TweenMax.to(displayManager_.getGroup("winWays"), .6, {x: -380});
            TweenMax.to(displayManager_.getGroup("freeSpins"), .6, {delay: .5, y: 0});
        }
        // setTimeout(freeze_,4000,0);
        // setTimeout(freeze_,4000,1);
        // setTimeout(freeze_,4000,3);
        // setTimeout(freeze_,4000,5);
    }

    function freeze_(i){
        displayManager_.getGroup("lockReels").visible=true;
        var bones = displayManager_.getGroup("lockReels")["lockIn_" + i].children[0];

        if (bones.visible == false) {
            bones.visible = true;
            bones.animations.add("anim");
            bones.animations.play("anim", 24, false, false);
            soundManager_.playSound("lock");
        }else if ( bones.visible == true) {
            var anim=[];
            for (var b = 1;b <= bones.animations._outputFrames.length; b++) {
                anim.push(b);
            }
            anim.reverse();
            bones.animations.add("anim",anim);
            bones.animations.play("anim", 24, false, false,removeReverseSkull_,bones);
        }
    }
    var transition_=false;
    function reelCrack_(){
        displayManager_.getGroup("stickyWilds").visible = false;
        displayManager_.getGroup("stickyWilds").removeAll();
        soundManager_.playSound("fsOpen");
        var newPos= displayManager_.getGroup("reels").children[3].x+ReelConfig.reel.deltaX/2;
        reelFrameSeq_=0;
        TweenMax.to(displayManager_.getGroup("bgFS").bgP.children[0],2,{delay:.3,width:910,onUpdate:setMask_})
        //central reel mask bottom
        var o={}
        o.val=0;
        TweenMax.to(o,1,{delay:.8,val:576,onUpdate:increaseMask_,onUpdateParams: [o]})
        //central reel top mask
        var o={}
        o.val=0;
        TweenMax.to(o,2,{delay:.8,val:64,onUpdate:increaseMaskTop_,onUpdateParams: [o]})

        for (var i=0;i<6;i++) {
            var pos=0;
            if (i<3){
                TweenMax.to( displayManager_.getGroup("reels").children[i],1,{x:pos-ReelConfig.reel.deltaX/2});
                TweenMax.to( displayManager_.getGroup("reels").children[i],.1,{angle:.5,yoyo:true,repeat:13});
            }else{
                TweenMax.to(displayManager_.getGroup("reels").children[i],1,{x:pos+ReelConfig.reel.deltaX/2});
                TweenMax.to( displayManager_.getGroup("reels").children[i],.1,{angle:-.5,yoyo:true,repeat:13});
            }
        }
        nextFrame_();
        setTimeout(replaceReels_,2000)

        //back for debug
        //setTimeout(moveCentralReel_,4000);
        //setTimeout(reelFrameReset_,5000);
    }

    function replaceReels_(){
        displayManager_.getGroup("stickyWilds").visible = false;
        displayManager_.getGroup("stickyWilds").removeAll();
        if (bResume_){
            moveLockedReels_(true,true);
        }
        for (var i=0;i<6;i++) {
            if (spinManager_.getReels()[i]!= undefined) {
                spinManager_.getReels()[i]= null;
            }
        }
        for (var o in displayManager_.getGroup("reels").children) {
            displayManager_.getGroup("reels").children[0].removeAll();
        }
        displayManager_.getGroup("reels").removeAll();
        spinManager_.createReels(1);
        //displayManager_.getGroup("reels").children[3].y=62;
        displayManager_.getGroup("reels").children[3].y=-635
        soundManager_.playSound("multiplier");
        TweenMax.to( displayManager_.getGroup("reels").children[3],.3,{y:62,ease: Back.easeOut})
        if (!buyIn_){
            if (displayManager_.getGroup("msgBox").visible==false) {
                setTimeout(checkButton_,500);
            }else{
                checkButton_();
            }
        }

    }

    function checkButton_(){
        if (displayManager_.getGroup("msgBox").visible==false) {
            buttonManager_.applyState("NH");
            buttonManager_.applyRestore()
        }else{
            setTimeout(checkButton_,500);
        }
    }

    function restoreReels_(){
        displayManager_.getGroup("stickyWilds").visible = false;
        displayManager_.getGroup("stickyWilds").removeAll();
        soundManager_.playSound("winAmountFall");
        for (var i=0;i<6;i++) {
            if (spinManager_.getReels()[i]!= undefined) {
                spinManager_.getReels()[i]= null;
            }
        }

        for (var o in displayManager_.getGroup("reels").children) {
            displayManager_.getGroup("reels").children[0].removeAll();
        }
        displayManager_.getGroup("reels").removeAll()
        spinManager_.createReels();
        displayManager_.getGroup("reels").children[3].y=0;

        //restore gfx
        if (!framework.isTouch()){
            TweenMax.to(displayManager_.getGroup("winWays"),.6,{x:0});
        }
        //TweenMax.to( displayManager_.getGroup("freeSpinAccumulator"),.6,{x:0});
    }


    function moveCentralReel_(){
        TweenMax.to( displayManager_.getGroup("reels").children[3],.4,{y:displayManager_.getGroup("reels").children[3].y-700,alpha:0,ease: Back.easeIn})
    }

    function reelFrameReset_(){
        displayManager_.getGroup("stickyWilds").visible = false;
        displayManager_.getGroup("stickyWilds").removeAll();
        soundManager_.playSound("fsClose");
        //central reel bottom mask
        var o={}
        o.val=576;
        TweenMax.to(o,.3,{val:0,onUpdate:increaseMask_,onUpdateParams: [o]})

        //central reel top mask
        var o={}
        o.val=yMaskTop;
        TweenMax.to(o,.3,{val:64,onUpdate:increaseMaskTop_,onUpdateParams: [o]})

        reelFrameSeq_=5;
        TweenMax.to(displayManager_.getGroup("bgFS").bgP.children[0],1.5,{width:778,onUpdate:setMask_})

        for (var i=0;i<6;i++) {
            TweenMax.to( displayManager_.getGroup("reels").children[i],1.6,{x:0});
            if (i<3){
                TweenMax.to( displayManager_.getGroup("reels").children[i],.1,{angle:.5,yoyo:true,repeat:13});
            }else{
                TweenMax.to( displayManager_.getGroup("reels").children[i],.1,{angle:-.5,yoyo:true,repeat:13});
            }
        }

        prevFrame_();
        setTimeout(restoreReels_,1000);
    }

    function prevFrame_(){
        displayManager_.getGroup("stickyWilds").visible = false;
        displayManager_.getGroup("stickyWilds").removeAll();
        reelFrameSeq_--;
        if (reelFrameSeq_>0){
            if(reelFrame_[reelFrameSeq_+1]!=undefined)reelFrame_[reelFrameSeq_+1].visible=false;

            var anim=[];
            for (var b = 0;b <= reelFrame_[reelFrameSeq_].animations._outputFrames.length; b++) {
                anim.push(b);
            }
            anim.reverse();
            reelFrame_[reelFrameSeq_].animations.add("animR",anim);

            reelFrame_[reelFrameSeq_].visible=true;
            reelFrame_[reelFrameSeq_].animations.play("animR", 24, false, false,prevFrame_,reelFrameSeq_);
        }else{
            fsTransition_=false;
        }
    }

    function nextFrame_(){
        displayManager_.getGroup("stickyWilds").visible = false;
        displayManager_.getGroup("stickyWilds").removeAll();
        reelFrameSeq_++;
        if (reelFrameSeq_<=4){
            if(reelFrame_[reelFrameSeq_-1]!=undefined)reelFrame_[reelFrameSeq_-1].visible=false;
            reelFrame_[reelFrameSeq_].visible=true;
            reelFrame_[reelFrameSeq_].animations.play("anim", 12, false, false,nextFrame_,reelFrameSeq_);
        }else{
            transition_=false;
            fsTransition_=false;
        }
    }

    function setMask_(){

        //mobile  mask x256 y 132 width 768 height 444
        //desktop mask x256 y 132 width 768 height 444


        //mobile FS mask x185 y 72 width 910 height 444
        //desk   FS mask x185 y 132 width 910 height 444


        if (mask_!=null){
            //game_.stage.remove(mask_);
            mask_.destroy();
            mask_=null;
        }
        //mask
        mask_ = game_.add.graphics(0, 0);
        mask_.beginFill(0xffffff);
        if (getOrientation()=="portrait"){
            mask_.drawRect(((displayManager_.getGroup("bgFS").bgP.children[0].x-displayManager_.getGroup("bgFS").bgP.children[0].width/2) *xRatio_)-188*xRatio_, yMask, displayManager_.getGroup("bgFS").bgP.children[0].width* window.devicePixelRatio, maskHeight);
            mask_.drawRect((scaleW_/2* window.devicePixelRatio)-70*xRatio_,yOffset_-2*xRatio_,132*xRatio_,fsMask_*xRatio_);
        }else{
            if (framework.isTouch()){
                mask_.drawRect(((displayManager_.getGroup("bgFS").bgP.children[0].x-displayManager_.getGroup("bgFS").bgP.children[0].width/2) *xRatio_), yMask, displayManager_.getGroup("bgFS").bgP.children[0].width* window.devicePixelRatio, maskHeight);
            }else{
                mask_.drawRect(((displayManager_.getGroup("bgFS").bgP.children[0].x-displayManager_.getGroup("bgFS").bgP.children[0].width/2) *xRatio_), yMask, displayManager_.getGroup("bgFS").bgP.children[0].width, maskHeight);
            }

            mask_.drawRect(576,yMask-yMaskTop,132,fsMask_);
        }


        displayManager_.getGroup("reels").mask=mask_;
        displayManager_.getGroup("bg").bgP.children[0].mask=mask_;
        displayManager_.getGroup("bgFS").bgP.children[0].mask=mask_;
    }

    function startVibrate_(duration,repeat,offset){
        var fs= (freeSpinsManager_!=undefined && freeSpinsManager_.getIsInFs())?"FS":"";
        vibration_(displayManager_.getGroup("mask"),duration,repeat,offset);
        vibration_(displayManager_.getGroup("bg"),duration,repeat,offset);
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

        if (port) {
            if (portraitLoaded_) {
                if (firstLandscape){
                    //load the game on landscape of r iOS
                    $(".turnLandscape").removeClass('hidden');
                    return;
                }
                xRatio_ = scaleW_ / 990;//ratio between the current Width and the reel width to make the reels bigger as the current width (almost....)
                xRatioFull_ = scaleW_ / 1200;
                var xCompensate= 1;
                var yCompensate=0;
                if (scaleW_>1000){
                    if (xRatio_>.91){//ipad pro
                        var factor=13500;
                        xCompensate=1+(xRatio_-.91-(scaleW_)/factor);
                        xRatio_=.91;
                    }
                    yCompensate=30;
                    xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(950*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                }else if (scaleW_>760){//ipad
                    if (xRatio_>.69){
                        var factor=43000;
                        xCompensate=1+(xRatio_-.59-(scaleW_)/factor);
                        xRatio_=.59;
                    } else if (xRatio_>.59){
                        var factor=43000;
                        xCompensate=1+(xRatio_-.49-(scaleW_)/factor);
                        xRatio_=.49;
                    }
                    yCompensate=10;
                    xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(930*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                }else{

                    //other devices which for some reason are showing a heigh smaller then expected
                    if (scaleW_==414 && (scaleH_==622|| scaleH_==620)) {//iphone plus
                        xRatio_=xRatio_*.93;
                        xCompensate=1.07;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(898*xRatio_*xCompensate));//  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                    }else if (scaleW_==375 && (scaleH_<667)){//iphone 11
                        xRatio_=xRatio_*.92;
                        xCompensate=1.08;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(900*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                    }else if (scaleW_==320 && (scaleH_<455)){//iphone 6 7
                        xRatio_=xRatio_*.85;
                        xCompensate=1.2;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(900*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                    }else{
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(930*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                    }
                }
                xRatio_=Number(Util.formatNumb(xRatio_,3))* window.devicePixelRatio;
                xOffset_=Number(Util.formatNumb(xOffset_,1))* window.devicePixelRatio;
                console.log(xCompensate+" scale to "+ xRatio_)
                xMask = -250* xRatio_;
                var xCenter= (scaleW_/2)-640;
                maskHeight = 560 * xRatio_;

                if ($("#footer-bottom-message")!=undefined)$("#footer-top-win").html($("#footer-bottom-message")[0].outerText);
                if ($("#footer-bottom-message")!=undefined)$("#footer-bottom-message").html("")

                yCompensate=yCompensate* window.devicePixelRatio;
                yOffset_ =  234*xRatio_   // scaleH_- maskHeight - scaleH_/ 2.25;         //change the objects Y position to move on top of the portrait mode UI
                yMask = (132 * xRatio_)+165*xRatio_;
                maskHeight=444 * xRatio_;
                //maskHeight=444;
                //yMask=132;

                adaptPortraitAsset_(displayManager_.getGroup("reels"),xOffset_+50*xRatio_,yOffset_-70*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("wins"),xOffset_+50*xRatio_,yOffset_-70*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("stickyWilds"),xOffset_+50*xRatio_,yOffset_-70*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("freeSpins"),xOffset_,yOffset_,xRatio_*1.5);
                adaptPortraitAsset_(displayManager_.getGroup("freeRounds"),xOffset_-50*xRatio_,yOffset_+520*xRatio_,xRatio_*1.15);
                adaptPortraitAsset_(displayManager_.getGroup("bg"),xOffset_,yOffset_-310*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("bgFS"),xOffset_,yOffset_-310*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("mask"), xOffset_+50*xRatio_,yOffset_-70*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup(""),xOffset_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("lockReels"),xOffset_+50*xRatio_,yOffset_-70*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("freeSpinAccumulator"),buyFeatureEnabled_()?xOffset_+190*xRatio_:xOffset_+295*xRatio_,-120*xRatio_,  xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("buyFeature"),  xOffset_,yOffset_ - 50*xRatio_,xRatio_*1.18);;//-1*( displayManager_.getGroup("idleObjects").children[0].x) + scaleW_/2 ,-1*( displayManager_.getGroup("idleObjects").children[0].y)+20,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("centralLineWin"), scaleW_/2* window.devicePixelRatio,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("centralWin"), xOffset_+50*xRatio_,yOffset_-70*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("winWays"),scaleW_/2* window.devicePixelRatio,yOffset_-70*xRatio_,xRatio_*1.18);
                adaptPortraitAsset_(displayManager_.getGroup("centralFuntainSmallObj"), xOffset_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("fsWonPanel"),xOffset_+40*xRatio_,null,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("fsWonPanelLR"),xOffset_+40*xRatio_,null,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("frWonPanel"),xOffset_+40*xRatio_,null,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("preview"),xOffset_+280*xRatio_,yOffset_-280*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("msgBox"),xOffset_-270*xRatio_,yOffset_-260*xRatio_,xRatio_*1.5);
                adaptPortraitAsset_(displayManager_.getGroup("msgBoxFR"),xOffset_-70*xRatio_,yOffset_,xRatio_*1.2);
                adaptPortraitAsset_(displayManager_.getGroup("msgBoxFeature"),xOffset_-70*xRatio_,yOffset_,xRatio_*1.2);//-scaleW_/2 +100*xRatio_,0,.55);

                // //portait bg
                // setPorytraitAssets_(displayManager_.getGroup("mask").bg2.children[0],false);
                // setPorytraitAssets_(displayManager_.getGroup("mask").bg2.children[1],true,null,(214+560+92));
                // setPorytraitAssets_(displayManager_.getGroup("mask").bg3.children[0],false);
                // setPorytraitAssets_(displayManager_.getGroup("mask").bg3.children[1],true);
                // //fs
                // setPorytraitAssets_(displayManager_.getGroup("maskFS").bg2.children[0],false);
                // setPorytraitAssets_(displayManager_.getGroup("maskFS").bg2.children[1],true,null,(214+560+92));
                // setPorytraitAssets_(displayManager_.getGroup("maskFS").bg3.children[0],false);
                // setPorytraitAssets_(displayManager_.getGroup("maskFS").bg3.children[1],true);

                setPorytraitAssets_(displayManager_.getGroup("bg").bg.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("bg").bg.children[1],true,0);
                setPorytraitAssets_(displayManager_.getGroup("bg").bgP.children[0],null,690,600);
                //FS
                setPorytraitAssets_(displayManager_.getGroup("bgFS").bg.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("bgFS").bg.children[1],true,0);
                setPorytraitAssets_(displayManager_.getGroup("bgFS").bgP.children[0],null,690,600);
   //             setPorytraitAssets_(displayManager_.getGroup("bgFS").bgP.children[0],null,null,null,xRatio_);



                setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").anchor1_In.children[0],null,170,310);
                setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").anchor2_In.children[0],null,320,310);
                setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").anchor3_In.children[0],null,470,310);
                setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").anchor4_In.children[0],null,620,310);
                setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").anchor1_Idle.children[0],null,170,310);
                setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").anchor2_Idle.children[0],null,320,310);
                setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").anchor3_Idle.children[0],null,470,310);
                setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").anchor4_Idle.children[0],null,620,310);
                setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").bg1.children[0],null,170,350);
                setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").bg2.children[0],null,320,350);
                setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").bg3.children[0],null,470,350);
                setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").bg4.children[0],null,620,350);

                setPorytraitAssets_(displayManager_.getGroup("bg").multBg.children[0],null,690,180,1.18);
                setPorytraitAssets_(displayManager_.getText("fsmultT1"),null,690,150,1.25);
                setPorytraitAssets_(displayManager_.getText("multValue1"),null,690,185, 1.25);

                setPorytraitAssets_(displayManager_.getGroup("winWays").children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("winWays").children[1],true,10,650);
                if (framework.isTouch())displayManager_.getText("winWaysNum").fontSize=65;

                setPorytraitAssets_(displayManager_.getGroup("buyFeature").children[0],null,850,40);
                setPorytraitAssets_(displayManager_.getGroup("centralLineWin").children[0],null,0);

                //FS
                setPorytraitAssets_(displayManager_.getGroup("freeSpins").fsP.children[0],true,456,-140);
                setPorytraitAssets_(displayManager_.getText("fsLabel"),true,240,-85);
                setPorytraitAssets_(displayManager_.getText("fsValue"),true,240,-60);
                setPorytraitAssets_(displayManager_.getText("totWonLabel"),true,668,-85);
                setPorytraitAssets_(displayManager_.getText("totWonValue"),true,668,-60);
                setPorytraitAssets_(displayManager_.getGroup("freeSpins").boxFS.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("freeSpins").boxMu.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("freeSpins").boxTW.children[0],false);
                setPorytraitAssets_(displayManager_.getText("fsmultT"),true,458,-85);
                setPorytraitAssets_(displayManager_.getText("fsAdditional"),true,300,-75);
                setPorytraitAssets_(displayManager_.getText("fsMultValue"),true,458,-84);

                //FR
                displayManager_.getGroup("freeRounds").frPanel.x=0;
                displayManager_.getGroup("freeRounds").frPanel.y=0;
                //preview
                setPorytraitAssets_(displayManager_.getGroup("preview").children[3],null,null,1250);
                setPorytraitAssets_(displayManager_.getGroup("preview").children[4],null,null,1250);
                setPorytraitAssets_(displayManager_.getGroup("preview").children[5],null,null,1250);
                setPorytraitAssets_(displayManager_.getGroup("preview").children[6],null,null,1270);
                setPorytraitAssets_(displayManager_.getGroup("preview").bgmsgPw.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview1.children[0],true,100,180);
                setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview2.children[0],true,100,700);

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
            maskHeight=444;
            yMask=132;
            xMask=0;

            adaptPortraitAsset_(displayManager_.getGroup("reels"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("wins"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("stickyWilds"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("freeSpins"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("freeRounds"),0,70,1);
            adaptPortraitAsset_(displayManager_.getGroup("bg"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("bgFS"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("mask"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("winGlow"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("lockReels"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("freeSpinAccumulator"),0,buyFeatureEnabled_()?-40:-55,1);
            adaptPortraitAsset_(displayManager_.getGroup("winWays"), 0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("buyFeature"), 0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("centralWin"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("centralLineWin"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("centralFuntainSmallObj"), 0,0);
            adaptPortraitAsset_(displayManager_.getGroup("fsWonPanel"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("fsWonPanelLR"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("frWonPanel"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("msgBox"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("msgBoxFR"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("msgBoxFeature"),0,0,1);

            setPorytraitAssets_(displayManager_.getGroup("bg").bg.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("bg").bg.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("bg").bgP.children[0],true);
            //fs
            setPorytraitAssets_(displayManager_.getGroup("bgFS").bg.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("bgFS").bg.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("bgFS").bgP.children[0],true);


            //FR
            displayManager_.getGroup("freeRounds").frPanel.x=250
            displayManager_.getGroup("freeRounds").frPanel.y=-50

            adaptPortraitAsset_(displayManager_.getGroup("preview"),0,0,1);

            setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").anchor1_In.children[0],null);
            setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").anchor2_In.children[0],null);
            setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").anchor3_In.children[0],null);
            setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").anchor4_In.children[0],null);
            setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").anchor1_Idle.children[0],null);
            setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").anchor2_Idle.children[0],null);
            setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").anchor3_Idle.children[0],null);
            setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").anchor4_Idle.children[0],null);
            setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").bg1.children[0],null);
            setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").bg2.children[0],null);
            setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").bg3.children[0],null);
            setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").bg4.children[0],null);


            setPorytraitAssets_(displayManager_.getGroup("bg").multBg.children[0],null,null,null,1);
            setPorytraitAssets_(displayManager_.getText("fsmultT1"),null,null,null,1);
            setPorytraitAssets_(displayManager_.getText("multValue1"),null,null,null, 1);

            setPorytraitAssets_(displayManager_.getGroup("winWays").children[0],true,(freeSpinsManager_.getIsInFs())?-500:0,(freeSpinsManager_.getIsInFs())?0:null);
            setPorytraitAssets_(displayManager_.getGroup("winWays").children[1],true,(freeSpinsManager_.getIsInFs())?145:null,(freeSpinsManager_.getIsInFs())?65:null);
            if (framework.isTouch())displayManager_.getText("winWaysNum").fontSize=50;
            //
            // if (fs!=""){
            //     displayManager_.getGroup("winWays").x=-1050;
            //     displayManager_.getGroup("winWays").y=250;
            // }else{
            //     displayManager_.getGroup("winWays").x=0;
            //     displayManager_.getGroup("winWays").y=0;
            // }

            setPorytraitAssets_(displayManager_.getGroup("buyFeature").children[0],true,displayManager.groups.buyFeature.buttons.buyFeature.x);
            setPorytraitAssets_(displayManager_.getGroup("buyFeature").children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("centralLineWin").children[0],null,displayManager.groups.centralLineWin.texts.lineWin.x);


            //top FS
            setPorytraitAssets_(displayManager_.getGroup("freeSpins").fsP.children[0],true);
            setPorytraitAssets_(displayManager_.getText("fsLabel"),true);
            setPorytraitAssets_(displayManager_.getText("fsValue"),true);
            setPorytraitAssets_(displayManager_.getText("totWonLabel"),true);
            setPorytraitAssets_(displayManager_.getText("totWonValue"),true);
            setPorytraitAssets_(displayManager_.getGroup("freeSpins").boxFS.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("freeSpins").boxMu.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("freeSpins").boxTW.children[0],true);
            setPorytraitAssets_(displayManager_.getText("fsmultT"),true);
            setPorytraitAssets_(displayManager_.getText("fsAdditional"),true);
            setPorytraitAssets_(displayManager_.getText("fsMultValue"),true);

            //----
            //preview
            setPorytraitAssets_(displayManager_.getGroup("preview").bgmsgPw.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview1.children[0],true,displayManager.groups.preview.graphAsset.bgPreview1.x ,displayManager.groups.preview.graphAsset.bgPreview1.y);
            setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview2.children[0],true,displayManager.groups.preview.graphAsset.bgPreview2.x ,displayManager.groups.preview.graphAsset.bgPreview2.y);
            setPorytraitAssets_(displayManager_.getGroup("preview").children[3],null,null,displayManager.groups.preview.checkbox.y);
            setPorytraitAssets_(displayManager_.getGroup("preview").children[4],null,null,displayManager.groups.preview.checkbox.y);
            setPorytraitAssets_(displayManager_.getGroup("preview").children[5],null,null,displayManager.groups.preview.checkbox.y);
            setPorytraitAssets_(displayManager_.getGroup("preview").children[6],null,null,displayManager.groups.preview.checkbox.y);
            setPorytraitAssets_(displayManager_.getGroup("preview").children[7],null,null,displayManager.groups.preview.buttons.closePreview.y);

        }

        setMask_();
        setTimeout(hideGame_,500,false);
        //activateShamrockScroll_();
    }

    function setPorytraitAssets_(name, visible,x,y,scale){
        if (name!=undefined){
            if(visible!=null)name.visible=visible;
            if (y!=null){
                name.y=y;
            }else{
                if(name.defY!=null){
                    name.y=name.defY;
                }
            }
            if (x!=null){
                name.x=x;
            }else{
                if(name.defX!=null){
                    name.x=name.defX;
                }
            }
            if (scale!=null)name.scale.x=scale;
            if (scale!=null)name.scale.y=scale;
        }
    }

    function adaptPortraitAsset_(obj,x,y,scale){
        if(obj!=undefined){
            if (x!=null){
                obj.x=x;
            }
            if (y!=null){
                obj.y=y;
            }
            if (scale!=null){
                obj.scale.x=scale;
                obj.scale.y=scale;
            }
        }
    }

    function hideGame_(flag){
        turning_=flag;
        console.log("hide -----------" + flag)
        if (freeSpinsManager_!=undefined) {
            var fs = (freeSpinsManager_.getIsInFs()) ? "FS" : "";
            if(flag==true ||  (previewManager_!=undefined && previewManager_.getClosed()==false)){
                displayManager_.getGroup("preview").visible = !flag;
            }
            if (previewManager_.getClosed()==false && flag ==false)return;
            displayManager_.getGroup("bg" + fs).visible = !flag;
            displayManager_.getGroup("mask").visible = !flag;
            displayManager_.getGroup("wins" ).visible = !flag;
            if (fs == "" || flag == true)displayManager_.getGroup("logo").visible = !flag;
            if (fs == "" && flag == true)displayManager_.getGroup("freeRounds").visible = !flag;
            if (fs == "" && freeRoundsManager_.getIsInFr() && flag==false){
                displayManager_.getGroup("freeRounds").visible = !flag;
            }
            displayManager_.getGroup("reels").visible = !flag;
            if (fs == "FS") displayManager_.getGroup("lockReels").visible = !flag;
            if (fs == "FS") displayManager_.getGroup("freeSpins").visible = !flag;
            if (fs == "" || flag == true) displayManager_.getGroup("freeSpinAccumulator").visible = !flag;
            displayManager_.getGroup("centralWin").visible = !flag;
            displayManager_.getGroup("centralLineWin").visible = !flag;
            displayManager_.getGroup("winWays").visible = !flag;
            displayManager_.getGroup("buyFeature").visible = !flag;
            displayManager_.getGroup("bgFS").bgP.visible = !flag;
            displayManager_.getGroup("bg").bgP.visible = !flag;
        }
        if (flag){
            displayManager_.getGroup("msgBox").visible=false;
            displayManager_.getGroup("stickyWilds").visible=false;
            framework.hideFramework();
        }else{
            if (messageBox_.getIsOnMessage())displayManager_.getGroup("msgBox").visible=true;
            if (displayManager_.getGroup("msgBox").visible==false && displayManager_.getGroup("msgBoxFeature").visible==false) {
                framework.showFramework();
            }
        }
        if (flag==false && fs=="FS"){
            displayManager_.getGroup("logo").visible = false;
            displayManager_.getGroup("bg").visible=false;
            displayManager_.getGroup("bgFS").visible=true;
            displayManager_.getGroup("freeSpinAccumulator").visible=false;
            displayManager_.getGroup("lockReels").visible = true;
            displayManager_.getGroup("buyFeature").visible=false;

        }else if (flag==false ) {
            displayManager_.getGroup("logo").visible = true;
            displayManager_.getGroup("bg").visible=true;
            displayManager_.getGroup("bgFS").visible=false;
            displayManager_.getGroup("freeSpinAccumulator").visible=true;
            displayManager_.getGroup("lockReels").visible = false;
            displayManager_.getGroup("buyFeature").visible=true;
            displayManager_.getGroup("freeSpins").visible=false;
        }
        if (isTumbling_==false && lineManager_!=undefined) lineManager_.clearLineAfterValue();

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

    function expandReelSize_(n,resume){
        var reel = {};
        var expanded=0;
        var numWW={};
        if (n>0) {
            numWW.num = Number(displayManager_.getText("winWaysNum").text);
            soundManager_.playSound("reelRetract");
            mwCounterTW_ = TweenMax.to(numWW, (stopped_ || gameClass_.getCompulsivePlayer()) ? .7 : 2, {
                num: n,
                onUpdate: changeWinWays_,
                onUpdateParams: [numWW]
            });
        }else{
            displayManager_.getText("winWaysNum").setText("");
        }
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
        return;
        if (mask_ != null) {
            displayManager_.getGroup("reels").mask=null;
            displayManager_.getGroup("wild").mask=null;
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
        resume_();
        expandReelSize_(0);

         // setTimeout(toggleFS_,1000);
        //  setTimeout(reelCrack_,3000);
        //
        //
        // setTimeout(moveCentralReel_,6000);
        // setTimeout(reelFrameReset_,8000);
       // setTimeout(tryflame,1000);

    }

    function tryflame(){
        var anchor = displayManager_.getGroup("freeSpinAccumulator")["anchor" + 1 + "_In"].children[0];
        anchor.visible = true;
        anchor.animations.add("anim");
        anchor.animations.play("anim", 24, false,false,fsWinCloverAnim_,[anchor,1]);
    }

    function resume_(){
        //display manager levels
        displayManager_.getGroup("reels").visible = true;
        displayManager_.getGroup("bg").visible = true;
        displayManager_.getGroup("mask").visible = true;
        displayManager_.getGroup("logo").visible = true;
        displayManager_.getGroup("freeSpinAccumulator").visible = true;
        displayManager_.getGroup("winWays").visible = true;

        if(!framework.getSettings().getHelpOnLoad())displayManager_.getGroup("buttonFg").visible=false;

        if (previewManager_.getClosed()) {
            //If "NEW_UI"
            if (ReelConfig.newUI && framework.isTouch()) {
                window.newUI.onPreview.dispatch(false) //Dispatch onPreview
            }
        }
        collected_=communicationManager_.getResumeStatus().status.collected;
        var exp= communicationManager_.getResumeStatus().status.expand;
        //guyin
        if (buyFeatureEnabled_()) {
            buttonBF_ = new Phaser.Button(game_, displayManager.groups.buyFeature.buttons.buyFeature.x, displayManager.groups.buyFeature.buttons.buyFeature.y, displayManager.groups.buyFeature.buttons.buyFeature.name, me[displayManager.groups.buyFeature.buttons.buyFeature.evt], this, 1,2,0,0 );
            buttonBF_.anchor.set(0.5, 0.5);

            var t = new Phaser.Text(game_,displayManager.groups.buyFeature.buttons.buyFeature.texts.txt.x , displayManager.groups.buyFeature.buttons.buyFeature.texts.txt.y,  Translate.do(displayManager.groups.buyFeature.buttons.buyFeature.texts.txt.text), {
                font: displayManager.groups.buyFeature.buttons.buyFeature.texts.txt.font,
                fill: displayManager.groups.buyFeature.buttons.buyFeature.texts.txt.fill
            });

            t.anchor.set(0.5, .5);
            buttonBF_.addChild(t);

            displayManager_.getGroup("buyFeature").add(buttonBF_);
            if (framework.isTouch()){


            }else{
                displayManager_.getGroup("freeSpinAccumulator").y=displayManager_.getGroup("freeSpinAccumulator").y-60
                displayManager_.getGroup("buyFeature").visible=true;
            }
        }else{
            displayManager_.getGroup("freeSpinAccumulator").y=displayManager_.getGroup("freeSpinAccumulator").y-60
        }

        gcmCalls_("STAKE",balanceManager_.getCoinValue());
        if (communicationManager_.getResumeStatus().status.type=="tumble" && communicationManager_.getResumeStatus().status.state=="NORMAL") {
            if (communicationManager_.getResumeStatus().status !=null && communicationManager_.getResumeStatus().status.stake>0){
                changeBet_(communicationManager_.getResumeStatus().status.stake/100, true);
            }
            callExpand_(exp,true);
            //f1x2.GcmError(-3);
            communicationManager_.getResumeStatus().freeSpin.totalWin=communicationManager_.getResumeStatus().status.totalWin*(balanceManager_.getCoinValue()/ lineManager_.getLinesNumber());
            communicationManager_.getResumeStatus().status.totalWin=communicationManager_.getResumeStatus().freeSpin.totalWin*100;
            communicationManager_.getResumeStatus().status.unsettledTotal=communicationManager_.getResumeStatus().status.totalWin;
            freeSpinsManager_.parse(communicationManager_.getResumeStatus());
            buttonManager_.applyState("NHFS");
            buttonManager_.applyHide();
            freeRoundsManager_.frChecker();

            if (spinManager_.getSpinReelResp()!=undefined && spinManager_.getSpinReelResp().reel!=undefined ) {
                spinManager_.getSpinReelResp().reel[6] = {};
                spinManager_.getSpinReelResp().reel[6] = spinManager_.getSpinReelResp().reel[5];
                spinManager_.getSpinReelResp().reel[5] = spinManager_.getSpinReelResp().reel[4];
                spinManager_.getSpinReelResp().reel[4] = spinManager_.getSpinReelResp().reel[3];
                spinManager_.getSpinReelResp().reel[3] = spinManager_.getSpinReelResp().reel[3];
                communicationManager_.getResumeStatus().status.reels=spinManager_.getSpinReelResp().reel;
            }


            //play clover bg
            sucessiveWin_=(communicationManager_.getResumeStatus().status.numTumbles!=undefined)?communicationManager_.getResumeStatus().status.numTumbles:0;
            anchorPos_=sucessiveWin_;

            lineManager_.resumeTumbling(communicationManager_.getResumeStatus(),false);
            //if (sucessiveWin_>0)moveSideMeter_(true);
            messageBox_.showMessage("game", "A free tumble has been interrupted", "Press Spin to continue", startTumble_);
            bResume_=true;
            if (sucessiveWin_>0) {//resume prev anchors on base game only
                for (var i=1;i<=sucessiveWin_;i++) {
                    if (i<5) {
                        var anchor = displayManager_.getGroup("freeSpinAccumulator")["anchor" + i+ "_Idle"].children[0];
                        anchor.visible = true;
                        anchor.animations.add("anim");
                        anchor.animations.play("anim", 24, true,false);
                    }
                }
            }
        }else if (communicationManager_.getResumeStatus().status.type=="tumble" && communicationManager_.getResumeStatus().status.state=="FREESPINS") {
            if (communicationManager_.getResumeStatus().status !=null && communicationManager_.getResumeStatus().status.stake>0){
                changeBet_(communicationManager_.getResumeStatus().status.stake/100, true);
            }
            //f1x2.GcmError(-3);
            communicationManager_.getResumeStatus().freeSpin.totalWin=communicationManager_.getResumeStatus().freeSpin.object.totalWin*(balanceManager_.getCoinValue()/ lineManager_.getLinesNumber());
            communicationManager_.getResumeStatus().status.totalWin=communicationManager_.getResumeStatus().freeSpin.totalWin*100;
            communicationManager_.getResumeStatus().status.unsettledTotal=communicationManager_.getResumeStatus().status.totalWin;

            numFs_=Number(communicationManager_.getResumeStatus().freeSpin.num);
            addFS_=Number(communicationManager_.getResumeStatus().freeSpin.object.wonAdditionalSpins);


            wasInbuyIn_=communicationManager_.getResumeStatus().buyIn/100;
            callExpand_(exp,true);
            freeSpinsManager_.parse(communicationManager_.getResumeStatus());
            buttonManager_.applyState("SPIN");
            buttonManager_.applyHide();
            freeRoundsManager_.frChecker();

            if (spinManager_.getSpinReelResp()!=undefined && spinManager_.getSpinReelResp().reel!=undefined ) {
                spinManager_.getSpinReelResp().reel[6] = {};
                spinManager_.getSpinReelResp().reel[6] = spinManager_.getSpinReelResp().reel[5];
                spinManager_.getSpinReelResp().reel[5] = spinManager_.getSpinReelResp().reel[4];
                spinManager_.getSpinReelResp().reel[4] = spinManager_.getSpinReelResp().reel[3];
                spinManager_.getSpinReelResp().reel[3] = spinManager_.getSpinReelResp().reel[3];
                communicationManager_.getResumeStatus().status.reels=spinManager_.getSpinReelResp().reel;
            }

            multiplier_=(communicationManager_.getResumeStatus().status.multiplier!=undefined)?communicationManager_.getResumeStatus().status.multiplier:0;
            sucessiveWin_=(communicationManager_.getResumeStatus().status.numTumbles!=undefined)?communicationManager_.getResumeStatus().status.numTumbles:0;

            //if (multiplier_>0)moveSideMeterFS_(true);
            lineManager_.resumeTumbling(communicationManager_.getResumeStatus(),true);

            freeSpinsManager_.resumeFs();
            messageBox_.showMessage("game", "A free tumble has been interrupted", "Press Spin to continue", startTumble_);
            bResume_=true;
        }else if (communicationManager_.getResumeStatus().status.state=="FREESPINS" && communicationManager_.getResumeStatus().status.type=="NORMAL") {
            if (communicationManager_.getResumeStatus().status !=null && communicationManager_.getResumeStatus().status.stake>0){
                changeBet_(communicationManager_.getResumeStatus().status.stake/100, true);
            }

            //f1x2.GcmError(-3);
            communicationManager_.getResumeStatus().freeSpin.totalWin=communicationManager_.getResumeStatus().freeSpin.object.totalWin*(balanceManager_.getCoinValue()/ lineManager_.getLinesNumber());
            communicationManager_.getResumeStatus().status.totalWin=communicationManager_.getResumeStatus().freeSpin.totalWin*100;
            communicationManager_.getResumeStatus().status.unsettledTotal=communicationManager_.getResumeStatus().status.totalWin;
            numFs_=Number(communicationManager_.getResumeStatus().freeSpin.num);
            addFS_=Number(communicationManager_.getResumeStatus().freeSpin.object.wonAdditionalSpins);
            wasInbuyIn_=communicationManager_.getResumeStatus().buyIn/100;
            callExpand_(exp,true);
            freeSpinsManager_.parse(communicationManager_.getResumeStatus());
            buttonManager_.applyState("SPIN");
            buttonManager_.applyHide();
            freeRoundsManager_.frChecker();

            if (spinManager_.getSpinReelResp()!=undefined && spinManager_.getSpinReelResp().reel!=undefined ) {
                spinManager_.getSpinReelResp().reel[6] = {};
                spinManager_.getSpinReelResp().reel[6] = spinManager_.getSpinReelResp().reel[5];
                spinManager_.getSpinReelResp().reel[5] = spinManager_.getSpinReelResp().reel[4];
                spinManager_.getSpinReelResp().reel[4] = spinManager_.getSpinReelResp().reel[3];
                spinManager_.getSpinReelResp().reel[3] = spinManager_.getSpinReelResp().reel[3];
                communicationManager_.getResumeStatus().status.reels=spinManager_.getSpinReelResp().reel;
            }

            multiplier_=(communicationManager_.getResumeStatus().status.multiplier!=undefined)?communicationManager_.getResumeStatus().status.multiplier:0;
            sucessiveWin_=(communicationManager_.getResumeStatus().status.numTumbles!=undefined)?communicationManager_.getResumeStatus().status.numTumbles:0;
            //if (multiplier_>0)moveSideMeterFS_(true);

            freeSpinsManager_.resumeFs();

            messageBox_.showMessage("game", "You have unused Free Spins", "Press Spin to continue", startResumeFs_);
            bResume_=true;
        }else{

            if (communicationManager_.getResumeStatus().status.reels[3].smb.length==9){
                communicationManager_.getResumeStatus().status.reels[3].smb.pop();
                communicationManager_.getResumeStatus().status.reels[3].smb.pop();
            }

            buttonManager_.applyRestore();
            buttonManager_.applyState("NH");
            freeRoundsManager_.frChecker();


            if (framework.isTouch()!=true){
                idleCycleManager_.forceIdleCycle("s2"); //forces the logo to idle cycle
                idleCycleManager_.startIdleCycle();
            }
            //soundManager_.playBgSound("bgSlot");

            //play clover bg
            sucessiveWin_=(communicationManager_.getResumeStatus().status.numTumbles!=undefined)?communicationManager_.getResumeStatus().status.numTumbles:0;

        }
        iRmess_= setTimeout(startRandomMessages_,1000);
        onGame_=true;
        framework.showFramework();
        displayManager_.getGroup("buttonFg").visible=true;
        setPortrait_((getOrientation()=="portrait")?true:false);

        //setInterval(startVibrate_,2000);
        // setTimeout(shamrockPop_,1000);

        // setInterval(activateFSMusic,8000);
        //setTimeout(startTest,3000)
        //setTimeout(buttonManager_.applyState,1000,"SPIN")
        //setTimeout(buttonManager_.applyState,1500,"STOP")
        //setTimeout(buttonManager_.applyState,3000,"NH")

    }

    function moveLockedReels_(resume,fs){
        //set and unset the lock animation
        if ((spinManager_.getSpinReelResp()!=null || resume) && buyIn_==false) {
            var lockedReelCOnfiguration = "";
            var rlN=0;
            var centralReel=false;
            for (var i = 0; i < 7; i++) {
                displayManager_.getText("fsAdd"+i).visible=false;
                if (i==3 && (freeSpinsManager_.getIsInFs()==true || fs==true)){
                    lockedReelCOnfiguration += (resume!=true && spinManager_.getSpinReelResp().reel[i].smb.length ==9)?"1":(resume==true && communicationManager_.getResumeStatus().status.reels[i]!=undefined && communicationManager_.getResumeStatus().status.reels[i].smb.length ==9 ) ? "1" : "0";
                }else{
                    lockedReelCOnfiguration += (resume!=true && spinManager_.getSpinReelResp().reel[i].smb.length ==7)?"1":(resume==true && communicationManager_.getResumeStatus().status.reels[i]!=undefined && communicationManager_.getResumeStatus().status.reels[i].smb.length ==7 ) ? "1" : "0";
                }

                reelLocked_++;
            }
            if (reelLocked_ != lockedReelPos_) {
                if (reelLocked_ > 0) {
                    for (var i = 0; i < 7; i++) {
                        var bones = displayManager_.getGroup("lockReels")["lockIn_" + i].children[0];

                        if (lockedReelCOnfiguration[i]=="1" && bones.visible == false) {
                            bones.visible = true;
                            bones.animations.add("anim");
                            bones.animations.play("anim", 36, false, false,showText_,i);
                            soundManager_.playSound("lock");
                            rlN++;
                            if (i==3)centralReel=true;
                        }else if (lockedReelCOnfiguration[i]=="0" && bones.visible == true) {
                            var anim=[];
                            for (var b = 1;b <= bones.animations._outputFrames.length; b++) {
                                anim.push(b);
                            }
                            anim.reverse();
                            bones.animations.add("anim",anim);
                            bones.animations.play("anim", 36, false, false,removeReverseSkull_,bones);
                        }
                    }
                    //increment the locked reels multiplier by reelLocked_-lockedReelPos_
                    if(rlN>0 && bResume_!=true){
                        updateLockedReels_=true;
                        setTimeout(updateAddFsEvent_,20,addFS_,numFs_,spinManager_.getSpinResp().win.total);
                        setTimeout(updateFreeSpinsMult,700,rlN);

                    }
                } else {
                    //reset
                }

            }
            lockedReelPos_ = reelLocked_;
        }
    }

    function showText_(i){
        if(bResume_)return;
        soundManager_.playSound("multiplier_3");
        displayManager_.getText("fsAdd"+i).visible=true;
        displayManager_.getText("fsAdd"+i).alpha=1;
        TweenMax.to(displayManager_.getText("fsAdd"+i).scale,.2,{y:1.3,x:1.3,yoyo:true,rep:2});
        TweenMax.to(displayManager_.getText("fsAdd"+i),.3,{delay:.7,alpha:0});
    }

    function moveAnchor_(resume){
        var arr=[];
        var index=0;
        var fps =24;
        var audioLevel=[];
        var fs= (freeSpinsManager_.getIsInFs()==true)?"":"";
        audioLevel[1]=1.5;
        audioLevel[2]=1.5;
        audioLevel[3]=1;
        audioLevel[4]=1;

        displayManager_.getText("fsAdditional").setText("");

        if (sucessiveWin_!= anchorPos_ ) {
            if (sucessiveWin_>0){

                if (sucessiveWin_<=4) {
                    var anchor = displayManager_.getGroup("freeSpinAccumulator"+fs)["anchor" + sucessiveWin_ + "_In"].children[0];
                    anchor.visible = true;
                    anchor.animations.add("anim");
                    anchor.animations.play("anim", fps, false,false,fsWinCloverAnim_,[anchor,sucessiveWin_]);
                    soundManager_.playSound("anchor_activate"+sucessiveWin_);

                    if(sucessiveWin_>1 && soundManager_.getBGSound("bgSlot"+sucessiveWin_)!=undefined && freeSpinsManager_.getIsInFs()==false){
                        soundManager_.playAdditionalBgSound_("bgSlot"+sucessiveWin_ );
                        soundManager_.getBGSound("bgSlot"+sucessiveWin_).fadeInBgSoundExternal(500, audioLevel[(sucessiveWin_)],soundManager_.getBGSound("bgSlot").getSound().currentTime,null);
                        lastSound_=sucessiveWin_;
                    }

                }else{

                }

            }else{
                displayManager_.getText("multValue1").setText("");
                clearTimeout(quiteSpinMusic);
                for (var i = 1; i < 5; i++) {
                    var anchor = displayManager_.getGroup("freeSpinAccumulator"+fs)["anchor" + i + "_Idle"].children[0];
                    if (anchor.visible == true) {

                        var anim = [];
                        for (var b = 1; b <= anchor.animations._outputFrames.length; b++) {
                            anim.push(b);
                        }
                        anim.reverse();

                        anchor.animations.add("animR",anim);
                        anchor.animations.play("animR", fps, false, false, fsWinCloverOut_, anchor);
                        if (soundManager_.getBGSound("bgSlot" + i) != null && freeSpinsManager_.getIsInFs()==false) soundManager_.getBGSound("bgSlot" + i).fadeOutBgSound((i==1)?1:1000);
                        if(freeSpinsManager_.getIsInFs()==false)lastSound_=0;
                    }
                }
                soundManager_.playSound("anchor_deactivate");
            }
        }

        anchorPos_=sucessiveWin_;
    }

    function updateAddFsEvent_(num,tot,won){
        updateAddFs_(num,tot,won);
        if (Number(num)>=5){
            setTimeout(showPopUp_,1000,num,tot,won);
        }
    }

    function showPopUp_(){
        soundManager_.playSound("fsWon");
        displayManager_.getGroup("fsWonPanelLR").alpha=0;
        displayManager_.getGroup("fsWonPanelLR").visible=true;
        TweenMax.to(displayManager_.getGroup("fsWonPanelLR"),.4,{alpha:1});
        setTimeout(fadeFsWonLR_,4000);
    }

    function fadeFsWonLR_(){
        TweenMax.to(displayManager_.getGroup("fsWonPanelLR"),.3,{alpha:0,onComplete:setVis_});
    }

    function setVis_() {
        displayManager_.getGroup("fsWonPanelLR").visible=false;
    }
    function updateAddFs_(num,tot,won){
        var w=Number(tot);
        decreaseVolumeBG_(2500);
        displayManager_.getText("fsAdditional").setText("+" + num);
        //displayManager_.getText("fsMultValueBig").y=-200;
        displayManager_.getText("fsAdditional").alpha=0;
        soundManager_.playSound("additionalFs");
        if (won>0){
            w=(Number(tot) -1  );
        }
        if (tot<=2){
            displayManager_.getText("fsValue").setText("1"); //otherwise it'll not display the right amount
        }else{
            displayManager_.getText("fsValue").setText(w)
        }
        TweenMax.to(displayManager_.getText("fsAdditional"),.4,{alpha:1})
        TweenMax.to(displayManager_.getText("fsAdditional").scale,.4,{y:1.1,x:1.1,yoyo:true,repeat:3});
        TweenMax.to(displayManager_.getText("fsAdditional").scale,.3,{delay:1.4,y:1,x:1});
        setTimeout(updateNumber_,500,w);
        setTimeout(restoreFSAnchor_,2000);

    }

    function updateNumber_(tot){
        freeSpinsManager_.fsWon(Number(tot));
    }

    function restoreFSAnchor_(){
        displayManager_.getText("fsAdditional").alpha=0;
    }

    function startSpinSound_(){
        clearTimeout(quiteSpinMusic);
        for (var i=6;i<= 8;i++){
            soundManager_.stopSound("winBg_"+i);
            soundManager_.stopSound("winBgS_"+i);
        }
        if (freeSpinsManager_.getIsInFs()==false) {
            if (soundManager_.getBGSound("bgSlot" + 1) != undefined) {
                if (quiteSpinMusic == 0) {
                    soundManager_.getBGSound("bgSlot" + 1).fadeInBgSoundExternal(100, 1.5, soundManager_.getBGSound("bgSlot").getSound().currentTime, null);
                }
                if (freeSpinsManager_.getIsInFs() == false) lastSound_ = 1;
                quiteSpinMusic = setTimeout(stopSpinMusic_, 7000);
                console.log("-----------------start spin music " + quiteSpinMusic)
            }
        }else{
            increaseVolumeBG_(true);
        }
    }

    function stopSpinMusic_(){

        if (sucessiveWin_==0){
            console.log(quiteSpinMusic +" stop spin music-------------------")
            soundManager_.getBGSound("bgSlot1").fadeOutBgSound(1000);
        }
        quiteSpinMusic=0;

    }

    function reverseSkull_(obj){
        if (obj==null)return;
        obj.setFrame(0);
        obj.visible=false;
    }

    function fsWinCloverAnim_(obj){
        obj[0].visible=false;
        var anchor = displayManager_.getGroup("freeSpinAccumulator")["anchor" + obj[1] + "_Idle"].children[0];
        anchor.visible = true;
        anchor.animations.add("anim");
        anchor.animations.play("anim", 24, true,false);

    }

    function fsWinCloverOut_(obj){
        obj.setFrame(0);
        obj.visible=false;
    }

    function removeReverseSkull_(obj){
        if (obj==null)return;
        obj.setFrame(0);
        obj.visible=false;
    }

    function decreaseVolumeBG_(fadeT_O_){
        console.log("decrease vol "+ lastSound_)
        fadeBg_=true;
        clearTimeout(iFadeT_O_);
        if(freeSpinsManager_.getIsInFs())lastSound_=3;

        if(freeSpinsManager_.getIsInFs()){
            soundManager_.getBGSound("bgFs").fadeOutBgSoundExternal(400, 0.4);
        }else {
            if (lastSound_>0) {
                for (var a = 1; a <= 3; a++) {
                    soundManager_.getBGSound("bgSlot" + a).fadeOutBgSoundExternal(400, 0.2);
                }
            }
            if (fadeT_O_!=null){
                fadeBg_=false;
                soundManager_.getBGSound("bgSlot").fadeOutBgSoundExternal(400, 0.3);
                iFadeT_O_ = setTimeout(increaseVolumeBG_, fadeT_O_,true);
            }
        }


    }

    function increaseVolumeBG_(force){
        console.log("Increase vol "+ lastSound_)
        var audioLevel=[];
        audioLevel[1]=1.5;
        audioLevel[2]=1.5;
        audioLevel[3]=1;
        audioLevel[4]=1;
        var audioDelay=[];
        audioDelay[1]=5;
        audioDelay[2]=5;
        audioDelay[3]=2;
        audioDelay[4]=2;
        audioDelay[5]=2;
        if (fadeBg_ || force) {
            fadeBg_=false;
            if (freeSpinsManager_.getIsInFs()){
                if(soundManager_.getBGSound("bgFs")!=undefined)soundManager_.getBGSound("bgFs").fadeInBgSoundExternalJustVol(1000, 1);
            }else{
                if(soundManager_.getBGSound("bgSlot")!=undefined)soundManager_.getBGSound("bgSlot").fadeInBgSoundExternalJustVol(1000, 1);
            }

            if (lastSound_>0 && freeSpinsManager_.getIsInFs()) {
                for (var a = 1; a <= lastSound_; a++) {
                   // soundManager_.getBGSound("bgSlot" + a).fadeInBgSoundExternalJustVolSync(1000, audioLevel[a],soundManager_.getBGSound("bgSlot").getSound().currentTime);
                }
            }
        }
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

    function doStop_() {
        stopped_=true;
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
        if (buttonManager_.getButton(frameworkSettings.buttons.spinButton.id).isEnable()==true && isTumbling_==false && canSpin_==true && fsTransition_==false && (displayManager_.getGroup("fsWonPanel")== undefined || displayManager_.getGroup("fsWonPanel").visible==false)) {
            soundManager_.playSound("spinClick");
            realDoSpin_([false]);
        }else {
            return false;
        }
    }

    function endSpinAnim_(){
    }


    function realDoSpin_(swipe){//swipte=array
        if(spinning_ && gotErrorInAp_==false)return;
        if(!onGame_)return;
        if(messageOn_==false) {
            gcmCalls_("PAID", 0); //was in enable button but for some race condition it was resetting the FS win
            buyIn_=false;
            spinning_ = true;
            stopped_=false;
            updateLockedReels_=false;
            fsTransition_=false;
            eventManager_.clearEvt();
            soundManager_.stopSound("smbWin_13");//todo see if possible to stop the sticky wild animation (also on line class)
            buttonManager_.applyState("SPIN");

            if (ReelConfig.spinType == "singleIconReelSpin") {
                //spinManager_.startSpin(swipe[0]);
            } else {
                if (!bResume_) lineManager_.stopEvents();
                bonusManager_.clearLineEval();
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
                    noSleep.enable();  //this prevents mobile to go to sleep during FS
                    if (freeSpinsManager_.getIsInFs())framework.updateSmallMessageText(Translate.do("Bet:") + " " + Translate.do("free spin"));
                    if (freeTumbling_) framework.updateSmallMessageText(Translate.do("Bet:") + " " + Translate.do("free re-spins"));
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
return;
        clearInterval(iRmess_);
        if (autoPlayManager_.getIsInAutoPlay() == false) {
            codeCaption = displayManager_.getText("messages");
            writeText_((messages_[messNum_]).substr(0, maxChar_));
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
            writeText_(str);
            if (codeCaption.startPos>codeCaption.actualMessage.length+5){
                codeCaption.startPos=0;
                iScroll_=setTimeout(startRandomMessages_,500);
            }else{
                iScroll_=setTimeout(checkLen_,100);
            }
        }

    }


    function writeText_(amt){
        /*
        Game messages - ‘footer-top-message’
        Balance               - ‘footer-bottom-balance’
        Clock                   - ‘footer-bottom-clock’
         */
        if (ReelConfig.newUI) {
            if (window.innerHeight > window.innerWidth) {
                //portrait
                $("#footer-bottom-message").html(amt);
            } else {
                $("#footer-bottom-message").html(amt);
            }
        }else{
            codeCaption.setText(amt);
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
            console.log("spinAnimEndAfterTumbling_");
            //just to check if expanind animation has to run
            var exp= spinManager_.getSpinResp().status.expand;
            var arr=[];
            var hasToExpand=false;
            updateLockedReels_=false;
            multiplier_= spinManager_.getSpinResp().state.mult;
            if (Number(spinManager_.getSpinResp().state.mult)>1) {
                displayManager_.getText("multValue1").setText("x" + multiplier_);
            }
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
            won = winManager_.getWinAmt();
            fsWon = freeSpinsManager_.getFsWon();
            wonBonus = (spinManager_.getSpinResp() != null && spinManager_.getSpinResp().bonus != null) ? spinManager_.getSpinResp().bonus.wonBonus : 0;
            fs = false;
            collected_ = spinManager_.getSpinResp().status.collected;
            spinning_=false;
            if (freeSpinsManager_.getIsInFs() || fsWon) {
                fs = freeSpinsManager_.getFreeSpinsEval();
            }

            freeSpinsManager_.endAnimHandle(eventManager_);

            if (won>0){
                lineCompletion_=false;
                buttonManager_.applyState("AFTERSPIN");
                lineManager_.endAnimHandle(winManager_.getAllWinsSorted(), eventManager_);
            }else{
                freeRoundsManager_.updateFreeRoundsTot();
                if(freeSpinsManager_.getIsInFs() && spinManager_.getFsResp().won>1){
                    //additional FS won, give time to show
                    eventManager_.addEvent(fakeEvent_, 3000);
                }
                if (fsWon && freeSpinsManager_.getIsInFs()==false && spinManager_.getFsResp().won>5){//to make sure is fs trigger
                    fsTransition_=true;//to prevent spinning while the transition to FS is not started yet
                }
                eventManager_.addEvent(fsEval_, (fsWon)?3000:500);
            }

            if (freeRoundsManager_.getIsInFr() == true && freeSpinsManager_.getIsInFs() == false) {//no add delay during nested FS
                eventManager_.addEvent(fakeEvent_, (won) ? lineManager_.getTotalDuration()-800 : 0);
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
        logger("NO bonus found ")
        collected_=spinManager_.getSpinResp().status.collected;
        endFs_=false; //ued to avoid displayng sticky wild on successive buyin
        if (stopped_==false && mwCounterTW_!=null){
            mwCounterTW_.timeScale(8);
            mwCounterTW_=null
        }
        displayManager_.getGroup("stickyWilds").visible = false;
        displayManager_.getGroup("stickyWilds").removeAll();
        if (won>0 ) {
            multiplier_= spinManager_.getSpinResp().state.mult;
            if (Number(spinManager_.getSpinResp().state.mult)>1) {
                displayManager_.getText("multValue1").setText("x" + multiplier_);

            }
            lineManager_.endAnimHandle(winManager_.getAllWinsSorted(), eventManager_);
            freeSpinsManager_.endAnimHandle(eventManager_);
            if (freeRoundsManager_.getIsInFr()==true && freeSpinsManager_.getIsInFs() == false ){//no add delay during nested FS
                eventManager_.addEvent(fakeEvent_,(won)?lineManager_.getTotalDuration():0);
            }

        } else {
            freeSpinsManager_.endAnimHandle(eventManager_);
            balanceManager_.setCanUpdate(true);
        }
        buttonManager_.applyState("AFTERSPIN");
        lineCompletion_=true;
        spinning_=false;
        if ((won<=0 && freeSpinsManager_.getType()!="convert" && freeSpinsManager_.getType()!="tumble" )  ) {
            eventManager_.addEvent(fsEval_, (freeSpinsManager_.getIsInFs()) ?  (updateLockedReels_)?2000: 600 : 300);
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
        fs=freeSpinsManager_.getIsInFs();
        fsWon=freeSpinsManager_.getFsWon();
        if (fsWon  ){
            apTimer_=setTimeout(apEval_,Number(ReelConfig.fsSpinDelay ));
        }else{
            if (fsTransition_){
                apTimer_=setTimeout(apEval_,3000);
            }else{
                apEval_();
            }
        }
    }

    function apEval_(){
        if ((won>0 || winManager_.getScatterWinAmt()[0]!=null)){
            apTimer_=setTimeout(enableButton_, 500);
            multiplierManager_.updateMultiplier(true);
        }else{
            enableButton_();
            multiplierManager_.resetMultipliers();
        }
    }

    function enableButton_() {
        console.log("enable button call "+ won )
        if (fsWon){
        }
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
            apTimer_=setTimeout(waitForLineCompletion_,50);
        }
    }

    function startAutoSpin_(par){
        if (autoPlayManager_.getIsInAutoPlay() || fs ) {
            if (autoPlayManager_.getIsFeature()==false || (autoPlayManager_.getStopOnFeature()==false && fs==true)){
                if (autoPlayManager_.getCanAp()==true) {
                    gcmCalls_("ANIMATION_END",null,true);
                    noSleep.enable();
                    var tOut= (won>0)?lineManager_.getTotalDuration():200;
                    if (spinManager_.getFsResp()!=undefined && spinManager_.getFsResp().won!=undefined && spinManager_.getFsResp().won>1){// FS retrigger
                        tOut+=2000;
                    }
                    apTimer_=setTimeout(realDoSpin_, tOut, par);
                }else {
                    apTimer_=setTimeout(startAutoSpin_, 1000, par);
                }
            } else{
                buttonManager_.applyState("NH");
            }
        }else{
            buttonManager_.applyState("NH");
        }
    }

    function showApMessage_(){
        if (lineCompletion_ ) {
            setTimeout(autoPlayManager_.showAPMessage,1500,finalizeEnable_);
        }else{
            setTimeout(showApMessage_,200);
        }
    }

    function finalizeEnable_(){
        if(!freeSpinsManager_.getIsInFs()){
            if (refuseCompulsive_==false && compulsiveFlag_ == false && spinManager_.getCompulsivePlayer()==true ){
                triggerCompulsive_();
                refuseCompulsive_=true; //aks just the first time
            }else{
                if (fsWon==false){
                    buttonManager_.applyState("NH");
                }else{
                    setTimeout( buttonManager_.applyState,2000,"NH");
                }
            }
        }
    }

    function hideForcePanel_(){
        if (gameParams.force=="Enable"){
            //$('#debug').css("opacity","0");
        }
    }

    function hideFs_(){
        wasInbuyIn_=0;
        buttonManager_.applyState("NH");
        buttonManager_.applyRestore();
        noSleep.disable();//mobile devices can now go to sleep
        if (freeRoundsManager_.getIsInFr()){
            setTimeout(freeRoundsManager_.getFreeRoundsEval,1000);
        }
        //setPortrait_((getOrientation()=="portrait")?true:false);
        sucessiveWin_=0;
        for (var i = 1; i < 5; i++) {
            var anchor = displayManager_.getGroup("freeSpinAccumulator")["anchor" + i + "_In"].children[0];
            if (anchor.visible == true) {
                anchor.visible=false;
                anchor.setFrame(0);
                anchor = displayManager_.getGroup("freeSpinAccumulator")["anchor" + i + "_Out"].children[0];
                anchor.visible = true;
                anchor.animations.add("anim");
                anchor.animations.play("anim", 36, false, false, fsWinCloverOut_, anchor);
                if (soundManager_.getBGSound("bgSlot" + i) != null && freeSpinsManager_.getIsInFs()==false) soundManager_.getBGSound("bgSlot" + i).fadeOutBgSound((i==1)?1:1000);
                if(freeSpinsManager_.getIsInFs()==false)lastSound_=0;
            }
        }
        if (framework.isTouch()) {
            setPortrait_((getOrientation() == "portrait") ? true : false)
        }
    }

    function hideLr_(){
        var lockedReelCOnfiguration = "";
        for (var i = 0; i < 7; i++) {
            var bones = displayManager_.getGroup("lockReels")["lockIn_" + i].children[0];
            var skullOut = (displayManager_.getGroup("lockReels")["lockOut_" + i]!=undefined)?displayManager_.getGroup("lockReels")["lockOut_" + i].children[0]:null;
            var skull = (displayManager_.getGroup("lockReels")["lockSkull_" + i]!=null)?displayManager_.getGroup("lockReels")["lockSkull_" + i].children[0]:null;
            if (bones.frame>0) {
                if (skull != null) skull.visible = false;
                if (skullOut!=null) {
                    skullOut.visible = true;
                    skullOut.animations.add("anim");
                    skullOut.animations.play("anim", 24, false, false, reverseSkull_, skullOut);
                }
                var anim = [];
                for (var b = 1; b <= bones.animations._outputFrames.length; b++) {
                    anim.push(b);
                }
                anim.reverse();
                bones.animations.add("anim", anim);
                bones.animations.play("anim", 36, false, false, removeReverseSkull_, bones);
            }
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

    function setReelsCallback_(reel){
        var exp= spinManager_.getSpinReelResp();
        callExpand_(exp,false,reel);
    }

    function callExpand_(exp,resume,reel){
        if (resume==false) {
            var n = 1;
            for (var i = 0; i <= reel; i++) {
                n = n * exp.reel[i].smb.length;
            }

            if (n==1){
                displayManager_.getText("winWaysNum").setText("");
            }else{
                displayManager_.getText("winWaysNum").setText(n);

            }
            //expandReelSize_(n, resume);
        }
    }

    function upperSmbCallBack_(i) {

        //called after spin to move the symbols in the upper position before moving the reel
        prevList_=null;
        for (var a = 0; a < ReelConfig.numIcon; a++) {
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

                    }

                }else{
                    spinManager_.getReels()[i].removeSymbol(a);
                }

                if (spinManager_.getSpinReelResp().reel[i].smb[a].smb==11){
                    s.animations.add("anim");
                    s.animations.play("anim", 24, true, false);
                    displayManager_.getGroup("stickyWilds").visible = false;
                    displayManager_.getGroup("stickyWilds").removeAll();
                }

            }
        }
        if (i==3){
            if (stopped_ && mwCounterTW_!=null){
                mwCounterTW_.timeScale(5);
                mwCounterTW_=null
            }
            updateLockedReels_=false;
            if(spinManager_.getFsResp()!=null) {
                numFs_ = Number(spinManager_.getFsResp().num);
                addFS_ = Number(spinManager_.getFsResp().object.wonAdditionalSpins);
            }
            if (freeSpinsManager_.getIsInFs())moveLockedReels_();
        }

        //fix for nonsense overlapping symbols
        for (var j = 0; j < ReelConfig.icons[i]; j++) {
            if (j<15){
                if (displayManager_.getGroup("reels").children[i]!=undefined && displayManager_.getGroup("reels").children[i].children[j]!=undefined)displayManager_.getGroup("reels").children[i].children[j].visible=false;
            }
        }
    }

    function back_(obj){
        TweenMax.to(obj.scale,.1,{x:obj.scale.x - .07,y:obj.scale.y - .07});
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
        soundManager_.playSound("multiplier");
        fsTransition_=true;
        setTimeout(toggleFS_,1000);
        setTimeout(reelCrack_,2000);
        if (framework.isTouch()!=true) {
            idleCycleManager_.stopIdleCycle();
            displayManager_.getGroup("idleObjects").visible=false;
            displayManager_.getGroup("lockReels").visible = true;
            displayManager_.getGroup("buyFeature").visible=false;
        }else{
            setPortrait_((getOrientation()=="portrait")?true:false)
        }
        removed_=true;//to place side feature
        if(freeSpinsManager_.getIsInFs()==false)lastSound_=1;
        multiplier_=1;
        multiplierPos_=0;
        for (var i=1;i<= 8;i++){
            soundManager_.stopSound("winBg_"+i);
            soundManager_.stopSound("winBgS_"+i);
        }
        if (lastSound_>0) {
            for (var a = 2; a <= 3; a++) {
                soundManager_.getBGSound("bgSlot" + a).fadeOutBgSoundExternal(200, 0);
            }
        }
        soundManager_.getBGSound("bgSlot").fadeOutBgSoundExternal(200, 0);
        setTimeout(startFSbg_,500);
    }

    function startFSbg_(){
        soundManager_.mixBgSound("bgFs",1500,1500)
    }

    function animateFS_() {
        displayManager_.getGroup("idleObjects").visible=false;
        displayManager_.getGroup("logo").visible = false;
        displayManager_.getGroup("bg").visible=false;
        displayManager_.getGroup("mask").visible=false;
        displayManager_.getGroup("freeSpinAccumulator").visible=false;
        displayManager_.getGroup("freeSpinAccumulator").visible=false;
        TweenMax.to(displayManager_.getGroup("freeSpinAccumulator"),1,{delay:.5,alpha:1});
        moveAnchor_();
    }

    function logoIn_(){
        fsTransition_=true;
        endFs_=true;
        if (framework.isTouch()) {
            displayManager_.getGroup("logo").visible = true;
            displayManager_.getGroup("bg").visible = true;
            displayManager_.getGroup("mask").visible = true;
            displayManager_.getGroup("freeSpins").visible=false;

            displayManager_.getGroup("freeSpinAccumulator").visible = true;
            if (getOrientation()=="landscape") {
                displayManager_.getGroup("winWays").x = 0;
                displayManager_.getGroup("winWays").y = 0;
            }
        }else{
            displayManager_.getGroup("logo").visible = true;
            displayManager_.getGroup("bg").visible = true;
            displayManager_.getGroup("mask").visible = true;
            displayManager_.getGroup("freeSpins").visible=false;

            displayManager_.getGroup("freeSpinAccumulator").visible = true;
            displayManager_.getGroup("idleObjects").visible=true;
            displayManager_.getGroup("winWays").y=0;
        }
        displayManager_.getGroup("bgFS").visible = false;
        displayManager_.getGroup("buyFeature").visible=true;
        displayManager_.getGroup("lockReels").visible = false;


        //resets sticky wilds
        displayManager_.getGroup("stickyWilds").visible = false;
        displayManager_.getGroup("stickyWilds").removeAll();

        //resets anchors
        displayManager_.getText("multValue1").setText("");
        for (var i = 1; i < 5; i++) {
            var anchor = displayManager_.getGroup("freeSpinAccumulator")["anchor" + i + "_Idle"].children[0];
            if (anchor.visible == true) {
                anchor.visible=false;
                var anim = [];
                for (var b = 1; b <= anchor.animations._outputFrames.length; b++) {
                    anim.push(b);
                }
                anim.reverse();

                anchor.animations.add("animR",anim);
                anchor.animations.play("animR", 45, false, false, fsWinCloverOut_, anchor);
                if(freeSpinsManager_.getIsInFs()==false)lastSound_=0;
            }
        }
        soundManager_.mixBgSound("bgSlot", 1000, 1000);
        hideLr_();
        setTimeout(moveCentralReel_,800);
        setTimeout(reelFrameReset_,1000);
    }

    function fsHideTotPanel_(){
        //TweenMax.to(displayManager_.getGroup("freeSpinAccumulator"),1,{y:0});
        displayManager_.getGroup("logo").visible = true;
        displayManager_.getGroup("freeSpinAccumulator").visible=true;

        lastSound_=1;
    }

    function doBuyFeature_() {
        //40,70,90,110,150,200,240"Free Spin Multiplier"
        var obj={};
        obj.options= communicationManager_.getResumeStatus().status.buyInSetup.options;
        obj.options.limit=2500;

        if (canSpin_==true && spinning_==false && isTumbling_==false && (window.SPIN_STATE==undefined || window.SPIN_STATE.spinning!="true") ) {//todo ask Joe about mobile
            if (freeRoundsManager_.getIsInFr()==false && autoPlayManager_.getIsInAutoPlay()==false && lineManager_.getInterruptedWinAnim()==false ) {
                canSpin_=false;
                featureMessageReq_.showMultipleMessageMWJ("Buy Free Spins round", "Select from the list to get the price.","Free Spins number:", buyFeatureCB_, noBF_, obj.options);
            }
        }
    }

    function noBF_(){
        canSpin_=true;
        buttonBF_.frame=2;
        out_(buttonBF_);
        if (buttonBFP_!=undefined)buttonBFP_.frame=2;
    }

    function buyFeatureCB_(par){
        buttonManager_.applyState("SPIN");
        balanceManager_.buyFeatureBet(betCheckCallBuyFeatureBack_,par);
        buttonBF_.frame=2;
        out_(buttonBF_);
        if (buttonBFP_!=undefined)buttonBFP_.frame=2;
    }
    var frChosen_=0;
    function betCheckCallBuyFeatureBack_(response,par) {
        frChosen_=par[par.index-1].rounds;
        var swipe = [false];
        //handling FS message here
        if (response == true) {
            spinManager_.sendBfRequest(par)
        } else {
            canSpin_=true;
            buttonManager_.applyState("NH");
            spinning_=false;
            framework.updateSmallMessageText(Translate.do("Insufficient funds. Please reduce stake."));
        }
    }

    var btnOver_=false;
    function out_(btn){
        if(!btnOver_)return;
        btn.children[0].y=btn.children[0].y+20;
        btn.children[1].y=btn.children[1].y+20;
        btnOver_=false;
    }

    function over_(btn){
        if(btnOver_)return;
        btn.children[0].y=btn.children[0].y-20;
        btn.children[1].y=btn.children[1].y-20;
        btnOver_=true;
    }

    function getBuyInResponse_(json){
        buyIn_=true;
        wasInbuyIn_=json.buyIn/100;
        scatterManager_.parse(json);
        freeSpinsManager_.fsWon(frChosen_);
        fs = freeSpinsManager_.getFreeSpinsEval();
        transition_=true;
        multiplierFS_= 1;

        eventManager_.clearEvt();
        freeSpinsManager_.endAnimHandle(eventManager_);
        eventManager_.triggerEvt();
        setTimeout(setSpin_,13000,[json]);
    }

    function setSpin_(par){
        if (freeSpinsManager_.getIsInFs()) {
            buyIn_ = false;
            showScatterWin_ = false;
            showFsWin_ = false;
            spinning_ = true;
            stopped_ = false;
            canSpin_=true;
            sucessiveWin_=0;
            anchorPos_=-1;
            soundManager_.stopSound("smbWin_13");//todo see if possible to stop the sticky wild animation (also on line class)

            if (!bResume_) lineManager_.stopEvents();
            bonusManager_.clearLineEval();
            winAmtManager_.resetWinManager();
            soundManager_.stopSound("winSound");
            autoPlayManager_.toggleFeature(false);
            winAmtManager_.forceToComplete();
            lineManager_.clearLineAfterValue();
            stopRandomMessages_();
            actualSpin_(par);

        }else{
            setTimeout(setSpin_,500,par)
        }
        //balanceManager_.bet(betCheckCallBack_);
    }

    function actualSpin_(par){
        if (transition_==false){
            var swipe = [false];
            framework.updateSmallMessageText(Translate.do("Bet:") + " " + Translate.do("free spin"));
            communicationManager_.resetResumeStatus();
            spinManager_.setSpinType(swipe[0], swipe[1]);
            freeTumbling_ = false;
            bResume_ = false;
            setTimeout(parse_,1500,par);
        }else{
            setTimeout(actualSpin_,500,par);
        }
    }

    function parse_(par){
        if (transition_==false){
            par[0].freeSpin.won=0;
            spinManager_.parse(par[0]);
            freeSpinsManager_.updateFreeSpinsNum();

        }else{
            setTimeout(parse_,500,par)
        }
    }

    function updateFreeSpinsMult(mult){

        var m=mult==undefined?spinManager_.getSpinResp().freeSpin.multiplier:Number(displayManager_.getText("fsMultValue").mult)+mult;
        if (("x" +m)!=displayManager_.getText("fsMultValueBig").text ){
            if (m>1){
                displayManager_.getText("fsMultValueBig").setText("x" +m);
                displayManager_.getText("fsMultValueBig").y=-200;
                displayManager_.getText("fsMultValueBig").alpha=1;
                displayManager_.getText("fsMultValue").mult=m;
                soundManager_.playSound("multiplier");
                TweenMax.to(displayManager_.getText("fsMultValueBig"),.4,{y:300,ease:Bounce.easeOut,onComplete:bigMult_,onCompleteParams:[m]})
                //if (gameClass.startVibrate)setTimeout(gameClass.startVibrate,300,.1,1,4);
            }
        }
    }

    function bigMult_(m) {
        displayManager_.getText("fsMultValue").setText("x" + m);
        TweenMax.to(displayManager_.getText("fsMultValueBig"), .4, {delay: 1.5, alpha: 0})
        if (m == 5 ) {
            soundManager_.playSound("multiplier_1");
        } else if (m ==10) {
            soundManager_.playSound("multiplier_2");
        } else if (m >15) {
            soundManager_.playSound("multiplier_3");
        }
    }

    function startForcing_(id){
        if(forceDemo["win"+id][0].url!=null) {
            communicationManager_.startForceReplay(id);
            if (forceDemo["win"+id][0].buy) {
                communicationManager_.sendServletBfRequest("spin", "");
            }else{
                realDoSpin_(false);
            }

        }else{
            communicationManager_.startForceDemo(id);
            if (forceDemo["win" + id][0].response.startBuyIn != null && forceDemo["win" + id][0].response.startBuyIn == true) {

            } else {
                realDoSpin_(false);
            }
        }


    }

    function setStickyWild_(){
        if (spinManager_.getSpinResp()!=undefined && freeSpinsManager_.getIsInFs()==true){
            var i=3;
            for (var a = 0; a < spinManager_.getSpinReelResp().reel[i].smb.length; a++) {
                if (spinManager_.getSpinReelResp().reel[i].smb[a] != undefined && endFs_==false && spinManager_.getSpinReelResp().reel[i].smb[a].smb==11) {
                    var smb = 11;
                    var s = spinManager_.getReels()[i].getSymbol(8-a);
                    var smb = game_.add.sprite(s.x, s.y, "icon11");
                    smb.anchor.set(.5, .5);
                    smb.scale.x = .6;
                    smb.scale.y = .6;
                    displayManager_.getGroup("stickyWilds").visible = true;
                    displayManager_.getGroup("stickyWilds").add(smb);
                }
            }
        }
    }

    var me = {
        initGame: initGame_,
        create:create_,
        setPortrait:setPortrait_,
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
        hideLr:hideLr_,
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
        loadedPortrait:loadedPortrait_,
        hideGame:hideGame_,
        moveLockedReels:moveLockedReels_,
        doBuyFeature:doBuyFeature_,
        getBuyInResponse:getBuyInResponse_,
        startVibrate:startVibrate_,
        startSpinSound:startSpinSound_,
        startForcing:startForcing_,
        setStickyWild:setStickyWild_,
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
            if (communicationManager_.getResumeStatus().status.type=="FREESPINS" && (communicationManager_.getResumeStatus().status.state=="tumble" || communicationManager_.getResumeStatus().status.state=="convert")) {
                soundManager_.playBgSound("bgSlot");
                soundManager_.playAdditionalBgSound_("bgFs");
            }else if(communicationManager_.getResumeStatus().status.type=="FREESPINS") {
                soundManager_.playBgSound("bgFs");
                soundManager_.playAdditionalBgSound_("bgSlot");
            }else{
                if (communicationManager_.getResumeStatus().status.state=="FREESPINS"){
                    soundManager_.playBgSound("bgFs");
                    soundManager_.playAdditionalBgSound_("bgSlot");
                }else{
                    soundManager_.playBgSound("bgSlot");
                    soundManager_.playAdditionalBgSound_("bgFs");

                }
            }
            soundManager_.playAdditionalBgSound_("bgSlot1");
        },
        setChange:function(value){
            isTumbling_ = value;
            if (value==false){
                spinning_=false;
            }
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
            sucessiveWin_++;
            moveAnchor_(false);
        },
        resetSuccessiveWinning:function () {
            if (bResume_)return;
            sucessiveWin_=0;
            moveAnchor_(false);
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
            console.log("line compleyte")
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
            return 0;
        },
        waitForSpin:function () {
            if (gameClass_.getCompulsivePlayer()==true)return false;
            return true;
        },
        getBuyIn:function(){
            return buyIn_;
        },
        getWasBuyIn:function(){
            return wasInbuyIn_;
        },
        getUpdateLockedReels:function(){
            return updateLockedReels_;
        },
        getRatio:function(){
            return xRatio_;
        },
        clearPrevEvt:function () {
            clearTimeout(apTimer_);
            eventManager_.clearEvt();
        },
        getTurning:function(){
            return turning_;
        },
        getMultiplier:function(){
            return multiplierFS_;
        },
        doCutWinAnim:function () {
            clearTimeout(apTimer_);
            eventManager_.clearEvt();
            realDoSpin_(false);
        },
        logger:function (msg) {
            console.log(msg);
        },
        getEventManager:function () {
            return eventManager_;
        }
    }

    return me;
}
