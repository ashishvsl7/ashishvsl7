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
    var onGame_=false;
    var spinning_=false;
    var showScatterWin_=false;
    var showFsWin_=false;
    var isTumbling_=false;
    var isTumblingReq_=false;
    var vaweTo_=0;
    var reelLocked_=0;
    var lockedReelPos_=0;
    var lastSound_;
    var multiplier_=1;
    var multiplierPos_=0;
    var freeTumbling_=false;
    var collected_;
    var featureBalls_;
    var mask_;
    var maskH_;
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
    var xMask=ReelConfig.reel.deltaX_0;
    var yMask=128;
    var maskWidth=128*6;
    var maskHeight=505;

    var xMaskH=ReelConfig.reel.deltaX_0+ ReelConfig.reel.deltaX;
    var yMaskH=10;
    var maskWidthH=(4*ReelConfig.reel.deltaX);
    var maskHeightH=330;
    var portraitLoaded_=false;
    var portraitLoading_=false;
    var buyIn_=false;
    var wasInbuyIn_=0;
    var canSpin_=true;
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
    var hasScatter_=false;
    var numFuels=0;
    var pigValue=0;
    var respin_=false;
    var multiplierFS_=0;
    var isLocking_=false;
    var lf_=null;
    var p_=null;
    var w_=null;
    var splitNumberWaysUpdated_=false;
    var playTrigger_=false;

    function create_() {
        if (framework.isTouch()==true) {
            buttonManager_.applyState("NH");
            framework.hideFramework();
            displayManager_.getGroup("reels").visible = true;
            displayManager_.getGroup("bg").visible = true;
            displayManager_.getGroup("frame").visible = true;
            displayManager_.getGroup("mask").visible = true;
            displayManager_.getGroup("logo").visible = true;

            if (displayManager_.getGroup("hideGame") != undefined) {
                displayManager_.getGroup("hideGame").visible = true;
            }
        }else{
            displayManager_.getGroup("lights1").visible = true;
            displayManager_.getGroup("lights2").visible = true;
            displayManager_.getGroup("reels").visible = true;
            displayManager_.getGroup("bg").visible = true;
            displayManager_.getGroup("frame").visible = true;
            displayManager_.getGroup("mask").visible = true;
            displayManager_.getGroup("logo").visible = true;
        }
        displayManager_.getGroup("bgFS").alpha=0;
        displayManager_.getGroup("bgFS").visible=true;
        displayManager_.getGroup("frameFS").alpha=0;
        displayManager_.getGroup("frameFS").visible=true;
        displayManager_.getGroup("maskFS").alpha=0;
        displayManager_.getGroup("maskFS").visible=true;


        displayManager_.getGroup("fog").visible = false;
        displayManager_.getGroup("winWays").visible = true;
        displayManager_.getGroup("flashingLights").visible = true;


        spinManager_.createReels();
        guiBottomBar_.setBetControlInitialBet(ReelConfig.bet);//todo change this, it's just to apply the default bet

        sideCharacter_=displayManager_.getGroup("sideCharacter").cheetah.children[0];
        sideCharacter_.animations.add("anim");
        setMask_();
    }

    function setMask_(){
        if (mask_!=null){
            //game_.stage.remove(mask_);
            mask_.destroy();
            mask_=null;
            //game_.stage.remove(mask_);
            maskH_.destroy();
            maskH_=null;
        }
        //mask
        mask_ = game_.add.graphics(0, 0);
        mask_.beginFill(0xffffff);
        mask_.drawRect(xMask, yMask, maskWidth, maskHeight);

        displayManager_.getGroup("reels").mask=mask_;

        //mask
        maskH_ = game_.add.graphics(0, 0);
        maskH_.beginFill(0xffffff);
        maskH_.drawRect(xMaskH, yMaskH, maskWidthH, maskHeightH);

        displayManager_.getGroup("hReel").mask=maskH_;
    }

    function startVibrate_(duration,repeat,offset){
        var fs= (freeSpinsManager_!=undefined && freeSpinsManager_.getIsInFs())?"FS":"";

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
                xRatio_ = scaleW_ / 630;//ratio between the current Width and the reel width to make the reels bigger as the current width (almost....)
                xRatioFull_ = scaleW_ / 1200;
                var xCompensate= 1;
                var yCompensate=0;
                //alert(scaleH_ + " " +scaleW_ + "ver 2 "+ xRatio_)

                if (scaleW_>1000){
                    if (xRatio_>.91){//ipad pro
                        var factor=13500;
                        xCompensate=1+(xRatio_-.90-(scaleW_)/factor);
                        var oldRatio=xRatio_;
                        xRatio_=.90;

                    }
                    if (oldRatio>1.7){
                        yCompensate=30;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(620*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode

                    }else if (oldRatio>1.5){
                        yCompensate=30;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(630*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode

                    }else if (oldRatio>1.3){
                        yCompensate=30;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(650*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode

                    }else if (oldRatio>1.1){
                        yCompensate=30;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(660*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode

                    }else{
                        yCompensate=30;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(670*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode

                    }
                }else if (scaleW_>760){//ipad
                    if (xRatio_>.85){   //samsung tab
                        xRatio_=xRatio_*.63;
                        xCompensate=1.37;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(648*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode

                    }else if (xRatio_>.72){
                        var factor=43000;
                        xCompensate=1+(xRatio_-.72-(scaleW_)/factor);
                        xRatio_=.72;
                        yCompensate=10;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(600*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                    }
                }else{

                    //other devices which for some reason are showing a heigh smaller then expected
                    if (scaleW_==414 && (scaleH_==622|| scaleH_==620)) {//iphone plus
                        xRatio_=xRatio_*.85;
                        xCompensate=1.15;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(780*xRatio_*xCompensate));//  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                    }else if (scaleW_==375 && (scaleH_<667)){
                        xRatio_=xRatio_*.7;
                        xCompensate=1.3;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(640*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                    }else if (scaleW_==320 && (scaleH_<455)){//iphone 6 7
                        xRatio_=xRatio_*.8;
                        xCompensate=1.2;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(714*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                    }else if ((scaleH_>700)){//samsung tab?
                        xRatio_=xRatio_*.7;
                        xCompensate=1.3;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(640*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode

                    }else{
                        xRatio_=xRatio_*.7;
                        xCompensate=1.3;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(640*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                    }

                }
                //
                // xRatio_=xRatio_*.65;
                // xCompensate=1.35;
                // xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(790*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode


                xOffsetFull_ = -1 * (ReelConfig.reel.deltaX_0)*xRatioFull_   +(scaleW_-(985*xRatioFull_));
                xRatio_=Number(Util.formatNumb(xRatio_,3))* window.devicePixelRatio;
                xOffset_=Number(Util.formatNumb(xOffset_,1))* window.devicePixelRatio;
                console.log(xCompensate+" scale to "+ xRatio_)
                var xCenter= (scaleW_/2)-640;

                if ($("#footer-bottom-message")!=undefined)$("#footer-top-win").html($("#footer-bottom-message")[0].outerText);
                if ($("#footer-bottom-message")!=undefined)$("#footer-bottom-message").html("")

                yCompensate=yCompensate* window.devicePixelRatio;
                yOffset_ =  130*xRatio_   // scaleH_- maskHeight - scaleH_/ 2.25;         //change the objects Y position to move on top of the portrait mode UI

                // maskWidth=128*6*window.devicePixelRatio;
                // maskHeight=505*xRatio_;
                // yMask=341* xRatio_;
                // xMask=50* xRatio_;
                // xMaskH=348
                // yMaskH=85* xRatio_;
                // maskWidthH=515*xRatio_;
                adaptPortraitAsset_(displayManager_.getGroup("reels"),xOffset_,yOffset_+85*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("reelFg"),xOffset_,yOffset_+85*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("hReel"),xOffset_,yOffset_+85*xRatio_,xRatio_);
                adaptPortraitAsset_(maskH_,xOffset_,yOffset_+85*xRatio_,xRatio_);
                adaptPortraitAsset_(mask_,xOffset_,yOffset_+85*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("flashingLights"),xOffset_,yOffset_+85*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("sideExplosion"),xOffset_,yOffset_+85*xRatio_,xRatio_);

                adaptPortraitAsset_(displayManager_.getGroup("lockReels"),xOffset_,yOffset_+85*xRatio_,xRatio_);

                adaptPortraitAsset_(displayManager_.getGroup("logo"),xOffset_,yOffset_-105*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("wins"),xOffset_,yOffset_+85*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("winGlow"),xOffset_,yOffset_+85*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("freeSpinAccumulatorFs"),xOffset_-1*xRatio_,yOffset_-1*xRatio_,  xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("freeSpins"),xOffset_,yOffset_,xRatio_*1.15);
                adaptPortraitAsset_(displayManager_.getGroup("freeRounds"),xOffset_-5*xRatio_,yOffset_-200*xRatio_,xRatio_*1.35);
                adaptPortraitAsset_(displayManager_.getGroup("bg"),xOffset_,yOffset_-210*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("bgFS"),xOffset_,yOffset_-210*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("frame"),xOffset_,yOffset_-210*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("frameFS"),xOffset_,yOffset_-210*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("mask"), xOffset_-3*xRatio_,yOffset_-2*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("maskFS"), xOffset_-3*xRatio_,yOffset_-2*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("scatter"),xOffset_,yOffset_+85*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("wild"),xOffset_,yOffset_+85*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("buyFeature"), xOffset_ -450*xRatio_,yOffset_-125*xRatio_,xRatio_*1.3);//-1*( displayManager_.getGroup("idleObjects").children[0].x) + scaleW_/2 ,-1*( displayManager_.getGroup("idleObjects").children[0].y)+20,xRatio_);

                adaptPortraitAsset_(displayManager_.getGroup("centralLineWin"), xOffset_,yOffset_+85*xRatio_,xRatio_);

                adaptPortraitAsset_(displayManager_.getGroup("centralWin"), xOffset_,yOffset_+85*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("winWays"), xOffset_+505*xRatio_,-71*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("centralFuntainSmallObj"), xOffset_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("fsWonPanel"),xOffset_,yOffset_+155*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("frWonPanel"),xOffset_,yOffset_+85*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("preview"),xOffset_+200*xRatio_,yOffset_-280*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("msgBox"),xOffset_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("msgBoxFR"),xOffset_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("msgBoxFeature"),xOffset_-199*xRatio_,yOffset_,xRatio_*1.3);//-scaleW_/2 +100*xRatio_,0,.55);


                //portait bg
                setPorytraitAssets_(displayManager_.getGroup("logo").logo.children[1],true,637,0);
                setPorytraitAssets_(displayManager_.getGroup("logo").logo.children[0],false);

                setPorytraitAssets_(displayManager_.getGroup("mask").bg2.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("mask").bg2.children[1],true,-45, 658+60);
                setPorytraitAssets_(displayManager_.getGroup("mask").bg3.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("mask").bg3.children[1],true,-45,-208+60);


                setPorytraitAssets_(displayManager_.getGroup("frame").bg.children[1],true,254,362+60);
                setPorytraitAssets_(displayManager_.getGroup("frame").bg.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("frameFS").bg.children[1],true,254,362+60);
                setPorytraitAssets_(displayManager_.getGroup("frameFS").bg.children[0],false);


                //fs
                setPorytraitAssets_(displayManager_.getGroup("maskFS").bg2.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("maskFS").bg2.children[1],true,-45, 658+60);
                setPorytraitAssets_(displayManager_.getGroup("maskFS").bg3.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("maskFS").bg3.children[1],true,-45,-208+60);


                setPorytraitAssets_(displayManager_.getGroup("bg").bg.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("bg").bg.children[1],true,1022,362+60);
                setPorytraitAssets_(displayManager_.getGroup("bg").bg1.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("bg").bg1.children[1],true,-47,362+60);
                //FS
                setPorytraitAssets_(displayManager_.getGroup("bgFS").bg.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("bgFS").bg.children[1],true,1022,362+60);
                setPorytraitAssets_(displayManager_.getGroup("bgFS").bg1.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("bgFS").bg1.children[1],true,-47,362+60);


                //FR
                setPorytraitAssets_(displayManager_.getGroup("freeRounds").frPanel.children[0],null,200);
                setPorytraitAssets_(displayManager_.getText("frLabel"),null,380);
                setPorytraitAssets_(displayManager_.getText("frValue"),null,380);
                setPorytraitAssets_(displayManager_.getText("frTotWonLabel"),null,770);
                setPorytraitAssets_(displayManager_.getText("frTotWonValue"),null,770);

                displayManager_.getText("winWaysNum").fontSize=55;

                //top FS


                //bottom FS
                setPorytraitAssets_(displayManager_.getText("fsLabel"),true,301+85,623+43);
                setPorytraitAssets_(displayManager_.getText("fsValue"),true,301+85,637+43);
                setPorytraitAssets_(displayManager_.getText("fsmultT"),true,472+85,639+43);
                setPorytraitAssets_(displayManager_.getText("fsMultValue"),true,472+85,654+43);
                setPorytraitAssets_(displayManager_.getText("totWonLabel"),true,638+85,623+43);
                setPorytraitAssets_(displayManager_.getText("totWonValue"),true,638+85,637+43);

                //preview
                setPorytraitAssets_(displayManager_.getGroup("preview").children[4],null,null,1320);
                setPorytraitAssets_(displayManager_.getGroup("preview").children[5],null,null,1320);
                setPorytraitAssets_(displayManager_.getGroup("preview").children[6],null,null,1320);
                setPorytraitAssets_(displayManager_.getGroup("preview").children[7],null,null,1320);
                setPorytraitAssets_(displayManager_.getGroup("preview").children[3],null,null,1312);
                setPorytraitAssets_(displayManager_.getGroup("preview").bgmsg.children[0],false);
                //setPorytraitAssets_(displayManager_.getGroup("preview").logo.children[0],true);
                setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview1.children[0],true,158,270);
                setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview2.children[0],true,158, 740);
                setPorytraitAssets_(displayManager_.getGroup("preview").rtp.children[0],true,240, -650);
                //---

                displayManager_.getGroup("sideCharacter").visible=false;


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
            maskWidth=128*6;
            maskHeight=505;
            yMask=128;
            yMaskH=10;
            xMask=ReelConfig.reel.deltaX_0;


            displayManager_.getText("winWaysNum").fontSize=40;
            adaptPortraitAsset_(displayManager_.getGroup("reels"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("sideExplosion"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("reelFg"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("flashingLights"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("hReel"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("lockReels"),0,0,1);
            adaptPortraitAsset_(mask_,0,0,1);
            adaptPortraitAsset_(maskH_,0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("wins"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("logo"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("beans"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("freeSpins"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("freeRounds"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("bg"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("bgFS"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("frame"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("frameFS"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("mask"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("maskFS"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("winGlow"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("freeSpinAccumulator"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("freeSpinAccumulatorFs"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("scatter"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("wild"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("winWays"), 0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("buyFeature"), 0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("centralWin"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("centralLineWin"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("centralFuntainSmallObj"), 0,0);
            adaptPortraitAsset_(displayManager_.getGroup("fsWonPanel"),0,60,1);
            adaptPortraitAsset_(displayManager_.getGroup("frWonPanel"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("msgBox"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("msgBoxFR"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("msgBoxFeature"),-180,-110,1.3);
            adaptPortraitAsset_(displayManager_.getGroup("preview"),0,0,1);

            //portait bg
            setPorytraitAssets_(displayManager_.getGroup("logo").logo.children[0],true );
            setPorytraitAssets_(displayManager_.getGroup("logo").logo.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("buyFeature").children[0],true,1100,50);

            setPorytraitAssets_(displayManager_.getGroup("frame").bg.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("frame").bg.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("frameFS").bg.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("frameFS").bg.children[1],false);

            setPorytraitAssets_(displayManager_.getGroup("mask").bg2.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("mask").bg2.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("mask").bg3.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("mask").bg3.children[0],true);

            //fs
            setPorytraitAssets_(displayManager_.getGroup("maskFS").bg2.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("maskFS").bg2.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("maskFS").bg3.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("maskFS").bg3.children[0],true);

            setPorytraitAssets_(displayManager_.getGroup("bg").bg.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("bg").bg.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("bg").bg1.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("bg").bg1.children[1],false);
            //FS
            setPorytraitAssets_(displayManager_.getGroup("bgFS").bg.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("bgFS").bg.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("bgFS").bg1.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("bgFS").bg1.children[1],false);








            //FR
            setPorytraitAssets_(displayManager_.getGroup("freeRounds").frPanel.children[0],null,140);
            setPorytraitAssets_(displayManager_.getText("frLabel"),null,300);
            setPorytraitAssets_(displayManager_.getText("frValue"),null,300);
            setPorytraitAssets_(displayManager_.getText("frTotWonLabel"),null,1020);
            setPorytraitAssets_(displayManager_.getText("frTotWonValue"),null,1020);

            //top FS


            setPorytraitAssets_(displayManager_.getText("fsAdditional"),true,160,230);
            //bottom FS
            setPorytraitAssets_(displayManager_.getText("fsLabel"),true,1150,65);
            setPorytraitAssets_(displayManager_.getText("fsValue"),true,1150,82);
            setPorytraitAssets_(displayManager_.getText("fsmultT"),true,1150,310);
            setPorytraitAssets_(displayManager_.getText("fsMultValue"),true,1150,335);
            setPorytraitAssets_(displayManager_.getText("totWonLabel"),true,1150,180);
            setPorytraitAssets_(displayManager_.getText("totWonValue"),true,1150,200);

            //----
            //preview
            setPorytraitAssets_(displayManager_.getGroup("preview").bgmsg.children[0],true);
            //setPorytraitAssets_(displayManager_.getGroup("preview").logo.children[0],false);
            setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview1.children[0],true,displayManager.groups.preview.graphAsset.bgPreview1.x ,displayManager.groups.preview.graphAsset.bgPreview1.y);
            setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview2.children[0],true,displayManager.groups.preview.graphAsset.bgPreview2.x ,displayManager.groups.preview.graphAsset.bgPreview2.y);
            setPorytraitAssets_(displayManager_.getGroup("preview").children[4],null,null,displayManager.groups.preview.checkbox.y);
            setPorytraitAssets_(displayManager_.getGroup("preview").children[5],null,null,displayManager.groups.preview.checkbox.y);
            setPorytraitAssets_(displayManager_.getGroup("preview").children[6],null,null,displayManager.groups.preview.checkbox.y);
            setPorytraitAssets_(displayManager_.getGroup("preview").children[3],null,null,displayManager.groups.preview.checkbox.y);
            setPorytraitAssets_(displayManager_.getGroup("preview").children[7],null,null,displayManager.groups.preview.buttons.closePreview.y);
            setPorytraitAssets_(displayManager_.getGroup("preview").rtp.children[0],true,100, 540);
            displayManager_.getGroup("preview").rtp.y=0;
            displayManager_.getGroup("sideCharacter").visible=true;
        }

        //setTimeout(setMask_,400);
        setTimeout(hideGame_,500,false);
        //activateShamrockScroll_();
    }

    function setPorytraitAssets_(name, visible,x,y,scale){
        if (name!=undefined){
            if(visible!=null)name.visible=visible;
            if (y!=null)name.y=y;
            if (x!=null)name.x=x;
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
            if (displayManager_.getGroup("hideGame") != undefined) {
                displayManager_.getGroup("hideGame").visible = flag;
            }
        }
        if (flag){
            displayManager_.getGroup("msgBox").visible=false;
            framework.hideFramework();
        }else{
            if (messageBox_.getIsOnMessage())displayManager_.getGroup("msgBox").visible=true;
            if (displayManager_.getGroup("msgBox").visible==false && displayManager_.getGroup("msgBoxFeature").visible==false) {
                framework.showFramework();
            }
        }
        //     var fs = (freeSpinsManager_.getIsInFs()) ? "FS" : "";
        //     if(flag==true ||  (previewManager_!=undefined && previewManager_.getClosed()==false)){
        //         displayManager_.getGroup("preview").visible = !flag;
        //     }
        //     displayManager_.getGroup("bg").visible = !flag;
        //     displayManager_.getGroup("logo").visible = !flag;
        //     displayManager_.getGroup("frame").visible = !flag;
        //     displayManager_.getGroup("mask").visible = !flag;
        //     displayManager_.getGroup("wins" ).visible = !flag;
        //
        //     if (fs == "" && flag == true)displayManager_.getGroup("freeRounds").visible = !flag;
        //     if (fs == "" && freeRoundsManager_.getIsInFr() && flag==false){
        //         displayManager_.getGroup("freeRounds").visible = !flag;
        //     }
        //     displayManager_.getGroup("reels").visible = !flag;
        //     displayManager_.getGroup("freeSpins").visible=false;
        //     if (fs == "FS") displayManager_.getGroup("lockReels").visible = !flag;
        //     if (fs == "FS") displayManager_.getGroup("freeSpins").visible = !flag;
        //
        //
        //     displayManager_.getGroup("centralWin").visible = !flag;
        //     displayManager_.getGroup("centralLineWin").visible = !flag;
        //     displayManager_.getGroup("winWays").visible = !flag;
        //     displayManager_.getGroup("buyFeature").visible = !flag;//
        //
        // }
        // if (flag){
        //     displayManager_.getGroup("msgBox").visible=false;
        //     framework.hideFramework();
        // }else{
        //     if (messageBox_.getIsOnMessage())displayManager_.getGroup("msgBox").visible=true;
        //     if (displayManager_.getGroup("msgBox").visible==false && displayManager_.getGroup("msgBoxFeature").visible==false) {
        //         framework.showFramework();
        //     }
        // }
        // if (fs == "FS"){
        //     displayManager_.getGroup("buyFeature").visible =false;
        //     displayManager_.getGroup("freeSpins").visible=true;
        // }
        //
        // if (isTumbling_==false) lineManager_.clearLineAfterValue();
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


    function expandReelSizeSplit_(){
        var reel = {};
        var expanded=0;
        var numWW={};
        var n=1;
        if(splitNumberWaysUpdated_==false) {
            splitNumberWaysUpdated_=true;
            for (var a in spinManager_.getSpinReelResp().reel) {
                n = n * spinManager_.getSpinReelResp().reel[a].smb.length;
            }

            numWW.num = Number(displayManager_.getText("winWaysNum").text);
            soundManager_.playSound("reelRetract");
            mwCounterTW_ = TweenMax.to(numWW, 1, {
                num: n,
                onUpdate: changeWinWays_,
                onUpdateParams: [numWW]
            });
            TweenMax.to(displayManager_.getText("winWaysNum").scale, .5, {x: 1.25, y: 1.25});
            setTimeout(resetWayNumScale_,700,n);
        }
    }

    function resetWayNumScale_(n){
        TweenMax.to(displayManager_.getText("winWaysNum").scale, .2, {x: 1, y: 1});
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

    var safes=[];
    var conveyorSafes_=[]
    var mainGroupH;
    var groupH;
    var isHorizSpin_=2;
    var once=true
    var scatterCount_=0;
    var scatterPlayed_=false;
    var sideCharacter_=null;

    function initGame_(){
        resume_();
        expandReelSize_(0);
        mainGroupH=displayManager_.getGroup("hReel");
        groupH= game_.add.group();

        safes[0]=spinManager_.getReels()[0].setIconH(1,13);
        safes[1]=spinManager_.getReels()[0].setIconH(2,14);
        safes[2]=spinManager_.getReels()[0].setIconH(3,15);
        safes[3]=spinManager_.getReels()[0].setIconH(4,16);

        conveyorSafes_=[safes[0],safes[1],safes[2],safes[3]];
        TweenMax.to(displayManager_.getGroup("fog")["bg1"].children[0],45,{x:-3950+1280,repeat:-1,yoyo:true, ease:Linear.easeInOut});
        // setTimeout(animateConvS_,200,[3],[0]);

        if(getOrientation()!="portrait")displayManager_.getGroup("sideCharacter").visible=true;
        if (!framework.isTouch()) {
            displayManager_.getGroup("lazers1").x = 470;
            displayManager_.getGroup("lazers1").y = -190;
            displayManager_.getGroup("lazers1").scale.x = -1;
            displayManager_.getGroup("lazers2").x = 800;
            displayManager_.getGroup("lazers2").y = -190;
            displayManager_.getGroup("lazers3").x = 470;
            displayManager_.getGroup("lazers3").y = 940;
            displayManager_.getGroup("lazers3").scale.x = -1;
            displayManager_.getGroup("lazers3").scale.y = -1;
            displayManager_.getGroup("lazers4").x = 800;
            displayManager_.getGroup("lazers4").y = 940;
            displayManager_.getGroup("lazers4").scale.y = -1;
            displayManager_.getGroup("lights2").x = 1275;
            displayManager_.getGroup("lights2").scale.x = -1;
            startLazers_();
            startLight_();
        }
        // initLeaf(1);
        // initLeaf(2);
        // initLeaf(3);
        // setInterval(startLight_,1000);
        // setTimeout(initLeaf,2000,5);
        // setTimeout(initLeaf,2000,4);
        // initLeaf(5);
        // initLeaf(6);
        // initLeaf(7);
        // initLeaf(8);
        //setTimeout(changeSpeed_,2000,0.09,3000);
    }

    function updatingValue_(obj){
        if (!freeSpinsManager_.getIsInFs() || displayManager_.getGroup("fsWonPanel").alpha==1) {
            if (obj.obj.rotation >= obj.angle && obj.dir > 0) {
                obj.dir = -1;

            } else if (obj.obj.rotation <= obj.amt && obj.dir < 0) {
                obj.dir = 1;
            }
            if (obj.dir > 0) {
                obj.obj.rotation = obj.obj.rotation + lightsInc_;
            } else {
                obj.obj.rotation = obj.obj.rotation - lightsInc_;
            }
        }
    }

    function updatingValue1_(obj){
        if (freeSpinsManager_.getIsInFs()) {
            if (obj.obj.rotation >= obj.angle && obj.dir > 0) {
                obj.dir = -1;

            } else if (obj.obj.rotation <= obj.amt && obj.dir < 0) {
                obj.dir = 1;
            }
            if (obj.dir > 0) {
                obj.obj.rotation = obj.obj.rotation + lightsInc_;
            } else {
                obj.obj.rotation = obj.obj.rotation - lightsInc_;
            }
        }
    }

    var lightsOn_=false;
    var lightsInc_=0.01;
    var resetL =0
    function changeSpeed_(spd,timeOut){
        var reset=0.01;
        lightsInc_=spd;
        clearTimeout(resetL);
        resetL=setTimeout(resetSpeed_,timeOut,reset);
    }

    function resetSpeed_(reset){
        lightsInc_=reset;
    }

    function startLight_(){
        if (framework.isTouch())return;
        if (lightsOn_==false) {
            lightsOn_ = true
            for (var index = 13; index <= 16; index++) {
                var twObject={};
                twObject.angle=1;
                twObject.dir=lightsInc_;
                twObject.amt=0;
                twObject.obj=displayManager_.getGroup("lights1")["l" + index].children[0];
                displayManager_.getGroup("lights1")["l" + index].children[0].angle=0;
                setInterval(updatingValue_,50,twObject)

                var twObject={};
                twObject.angle=1;
                twObject.dir=lightsInc_;
                twObject.amt=0;
                twObject.obj=displayManager_.getGroup("lights2")["l" + index].children[0];
                displayManager_.getGroup("lights2")["l" + index].children[0].angle=0;
                setInterval(updatingValue_,50,twObject)
            }
        }
    }

    var lazerOn_=false;
    function startLazers_(){
        if (framework.isTouch())return;
        if (lazerOn_==false) {
            lazerOn_ = true
            for (var index = 1; index <= 4; index++) {
                var twObject={};
                twObject.angle=3;
                twObject.dir=lightsInc_;
                twObject.amt=1;
                twObject.obj=displayManager_.getGroup("lazers" + index)["lg"].children[0];
                setInterval(updatingValue1_,50,twObject)

                var twObject={};
                twObject.angle=3;
                twObject.dir=lightsInc_;
                twObject.amt=1;
                twObject.obj=displayManager_.getGroup("lazers" + index)["lo"].children[0];
                setInterval(updatingValue1_,50,twObject)

                var twObject={};
                twObject.angle=3;
                twObject.dir=lightsInc_;
                twObject.amt=1;
                twObject.obj=displayManager_.getGroup("lazers" + index)["lp"].children[0];
                setInterval(updatingValue1_,50,twObject)

            }
        }
    }

    function startLightAnimal_(index,loop){
        sideCharacter_.animations.play("anim", 24,false, false);//todo parametric loop
        var  anim=displayManager_.getGroup("flashingLights")["ll_"+index].children[0];
        anim.visible=true;
        anim.animations.add("anim");
        anim.animations.play("anim", 24,(index==1)?loop:false, false,endLight_,[anim,index]);//todo parametric loop

        var anim=displayManager_.getGroup("flashingLights")["lr_"+index].children[0];
        anim.visible=true;
        anim.animations.add("anim");
        anim.animations.play("anim", 24,(index==1)?loop:false, false,endLight_,[anim,index]);//todo parametric loop
    }

    function endLight_(par){
        if (par[1]>1)par[0].visible=false;
        par[0].frame=0;
    }

    function animAnimalFrame_(ss){
        var symbolToAnimate;
        for (var a in ss){
            if (ss[a]!=undefined){
                symbolToAnimate=ss[a];
                break;
            }
        }

        var triggerSymbol_=spinManager_.getTriggerIcons();
        var add=false;
        placingWildsMults_=true;
        startLightAnimal_(symbolToAnimate);
        for (var a in triggerSymbol_) {
            if (triggerSymbol_[a].trigger == true && triggerSymbol_[a].animal ==symbolToAnimate) {
                triggerSymbol_[a].played=false;
                setTimeout(addWilds_,100,triggerSymbol_[a]);
                add=true;
            }
        }
        if (add){
            wildsSound_();
        }
    }

    function wildsSound_(){
        soundManager_.playSound("newIcons");
    }

    function addWilds_(s){
        var obj={};
        obj.type="frame";
        obj.loop=false;
        obj.anim= ["timer"];
        obj.callBack=placeWildIcon_;
        obj.reel=s.reel;
        obj.icon=[];
        obj.smbN=s.smb;
        obj.mult=s.mult;
        obj.icon[0]=s.animal;
        obj.transformTo=s.transformTo;
        spinManager_.getReels()[s.reel].replaceIconF(s.smb, s.transformTo,obj);
    }

    function placeWildIcon_(p){
        p[0].visible=false;
        var s = spinManager_.getReels()[p[0].reel].replaceIcon2(p[0].smbN, p[0].transformTo);
        if (p[0].mult!=undefined && p[0].mult>1){
            p[0].size=s.size;
            var offsetX=0;
            var offsetY=-80;
            if (s.size==3){
                offsetX=0;
                offsetY=-80;
            }else if (s.size==4){
                offsetX=52;
                offsetY=-60;
            }else if (s.size==5){
                offsetX=59;
                offsetY=-44;
            }else if (s.size==6){
                offsetX=67;
                offsetY=-40;
            }else if (s.size==7){
                offsetX=75;
                offsetY=-40;
            }
            var mult =new Phaser.BitmapText(game_, offsetX, offsetY, 'multiBmpFont', "x"+p[0].mult, 65, 'centre');
            mult.anchor.set(.5, .5);
            s.multTxt=mult;
            s.multVal=p[0].mult;
            s.addChild(mult);
        }
        soundManager_.playSound("symbSwitch");
    }

    function animHorizzontal_(a){
        var arraySmb=[];
        var arrayNewSmb=[];
        var newIndex= 3;
        for (var all =0;all<a.length;all++) {
            if (a[all] != undefined) {
                newIndex=newIndex-1;
            }
        }
        for (var all =0;all<a.length;all++) {
            if (a[all]!=undefined){
                newIndex++;
                arraySmb.push(all);
                //get new symbol
                arrayNewSmb.push(spinManager_.getSpinResp().spin.horizontalReel[0][newIndex].smbID);
            }
        }
        animateConvS_(false,arraySmb,arrayNewSmb);
    }

    function animAnimalHorizzontal_(par){
        var a=par[0];   //array of symbols to animate
        var all=par[1];        //actual symbol that can be animated on the array
        var arraySmb=[];
        var arrayNewSmb=[];
        var newIndex= 3;
        if (a[all]!=undefined){
            arraySmb.push(all);
        }
        animateAnimalConvS_(false,arraySmb);
    }

    function moveAnimalHorizzontal_(a){
        var arraySmb=[];
        var arrayNewSmb=[];
        var newIndex= 3;
        for (var all =0;all<a.length;all++) {
            if (a[all] != undefined) {
                newIndex=newIndex-1;
            }
        }
        for (var all =0;all<a.length;all++) {
            if (a[all]!=undefined){
                newIndex++;
                arraySmb.push(all);
                //get new symbol
                arrayNewSmb.push(spinManager_.getSpinResp().spin.horizontalReel[0][newIndex].smbID);
            }
        }
        moveAnimals_(false,arraySmb,arrayNewSmb);
    }

    function moveAnimals_(spin,a,b){
        //a array of symbols to animate
        //b array of new symbols
        for (var all =0;all<a.length;all++) {
            if (!spin) {
                for (var aa=0;aa<conveyorSafes_[a[all]].length;aa++){
                    if (conveyorSafes_[a[all]][aa] != undefined) {
                        var smb=spinManager_.getReels()[0].getSymbolH(a[all]+1 );
                        smb.visible=false;
                        smb.anim = game_.add.sprite(smb.x, smb.y, "tumble_5");
                        displayManager_.getGroup("scatter").add(smb.anim);
                        smb.anim.anchor.set(.5, .5);
                        smb.anim.animations.add("anim");
                        smb.anim.scale.x = 1;
                        smb.anim.scale.y = 1;
                        smb.anim.animations.play("anim", (gameClass_.getCompulsivePlayer()) ? 36 : 24, false, true);//todo parametric loop
                    }
                }
                removeTile_(a[all]);
            }
            conveyorSafes_.push(spinManager_.getReels()[0].setIconH(conveyorSafes_.length + 1, b[all]));
        }
        setTimeout(moveConveyor_,1000,spin,a);
    }

    function animateAnimalConvS_(spin,a,b){
        //a array of symbols to animate
        //b array of new symbols
        for (var all =0;all<a.length;all++) {
            if (!spin) {
                for (var aa=0;aa<conveyorSafes_[a[all]].length;aa++){
                    if (conveyorSafes_[a[all]][aa] != undefined) {
                        delayedAnimation_(spinManager_.getReels()[0].getSymbolH(a[all] + 1),a[all]);
                        break;
                    }
                }
            }
        }
    }

    function animateConvS_(spin,a,b){
        //a array of symbols to animate
        //b array of new symbols
        for (var all =0;all<a.length;all++) {
            if (!spin) {
                for (var aa=0;aa<conveyorSafes_[a[all]].length;aa++){
                    if (conveyorSafes_[a[all]][aa] != undefined) {
                        delayedAnimation_(spinManager_.getReels()[0].getSymbolH(a[all] + 1),a[all]);
                        break;
                    }
                }

            }
            conveyorSafes_.push(spinManager_.getReels()[0].setIconH(conveyorSafes_.length + 1, b[all]));
        }
        setTimeout(moveConveyor_,(spin)?100:2000,spin,a);
    }

    function delayedAnimation_(smb,a){
        console.log("anim symbols")
        var add=false;
        add=true;
        var ic=smb.smbNum;
        var animal=false;

        smb.anim = game_.add.sprite(smb.x, smb.y, "anim" + ic);
        smb.anim.anchor.set(.5, .5);
        if (ic>12) {
            addMusicLayer_(ic);
            animal=true;
            soundManager_.playSound("smbWin_"+ic);
            smb.anim.y=smb.anim.y+128/2;
        }
        smb.anim.animations.add("anim");
        smb.anim.scale.x = 1;
        smb.anim.scale.y = 1;
        smb.anim.smbNum = smb.smbNum;
        smb.visible=false;
        if ( (smb.smbNum<9 || smb.smbNum==10 || smb.smbNum==11|| smb.smbNum==12)){
            var ratio= 1- 5*.07;
            smb.anim.scale.x=Math.min(ratio,1);
            smb.anim.scale.y=Math.min(ratio,1);
        }

        var assetNum=smb.smbNum;
        if (smb.smbNum[a]<9)assetNum=0;
        if (game.cache.checkImageKey("smbFrame_" +assetNum+  "_5" )) {
            smb.F = iconAdjustment_(5, smb.anim,ic, spinManager_.getFrameH(0, a+1),5,  101,assetNum);
        }
        displayManager_.getGroup("scatter").add(smb.anim);

        smb.anim.animations.play("anim", (gameClass_.getCompulsivePlayer()) ? 36 : 24, false,true,endTopAnimation_,[smb,a]);//todo parametric loop
        smb.anim.alpha=1;

    }

    function endTopAnimation_(par){
        var smb=par[0];
        var a=par[1];
        if (smb.F!=undefined){
            smb.F.visible=false;
            smb.F=null;
        }
        if(smb.anim.smbNum<13) {
            smb.anim = game_.add.sprite(smb.x, smb.y, "tumble_5");
            displayManager_.getGroup("scatter").add(smb.anim);
            smb.anim.anchor.set(.5, .5);
            smb.anim.animations.add("anim");
            smb.anim.scale.x = 1;
            smb.anim.scale.y = 1;
            smb.anim.animations.play("anim", (gameClass_.getCompulsivePlayer()) ? 36 : 24, false, true);//todo parametric loop
            setTimeout(removeTile_,500,a);
        }else{
            smb.visible=true;
        }
    }

    function removeTile_(a){
        for (var aa=0;aa<conveyorSafes_[a].length;aa++){
            if (conveyorSafes_[a][aa] != undefined) {
                conveyorSafes_[a][aa].visible=false;
                conveyorSafes_[a][aa]=null;
            }
        }
        conveyorSafes_[a]=null;
    }

    function bounce(txt){
        TweenMax.to(txt.scale,.4,{x:1,y:1,ease:Bounce.easeOut,onComplete:move,onCompleteParams:[txt]});
    }

    function move(txt){
        TweenMax.to(txt,2,{alpha:0,y:txt.y-200,onComplete:kill,onCompleteParams:[txt]});
    }

    function kill(txt){
        txt.visible=false;
        txt.destroy();
    }

    function animateTile_ (tile){
        //they don't animate here
    }

    function endTile_(tile){
        tile.visible=false;
        tile.setFrame(0);
    }

    function iconAdjustment_(smbNum,image,icon,frame,iconSize, iconHeight,frameIndex){
        //create animation frame based on icon frame pos, this will be added later to the reel group
        var bgCrop=false;
        var F = game_.add.sprite(frame.x,frame.y, "smbFrame_" + frameIndex  + "_" +iconSize);
        F.scale.x=1;
        F.scale.y=1;
        F.anchor.set(.5,.5);

        image.cropEnabled=true;
        image.cropEnabled=true;

        if (icon==9){
            if (iconSize==7){
                var mask_ = new Phaser.Rectangle(0, 82, 128,iconHeight);
                image.height=image.height-20;
            }else if (iconSize==6){
                var mask_ = new Phaser.Rectangle(0, 74, 128,iconHeight);
                image.height=image.height-20;
            }else if (iconSize==5){
                var mask_ = new Phaser.Rectangle(0, 67, 128,iconHeight);
                image.height=image.height-20;
            }else if (iconSize==4){
                var mask_ = new Phaser.Rectangle(0, 55, 128,iconHeight); //ok
                image.height=image.height-20;
            }else if (iconSize==3){
                var mask_ = new Phaser.Rectangle(0, 35, 128,iconHeight); //ok
                image.height=image.height-10;
                image.correction = -10;
            }
        }else if (icon==13){

            if (iconSize==7){
                var mask_ = new Phaser.Rectangle(0, 57, 128,iconHeight);
                image.height=image.height-20;
            }else if (iconSize==6){
                var mask_ = new Phaser.Rectangle(0, 50, 128,iconHeight);
                image.height=image.height-20;
            }else if (iconSize==5){
                var mask_ = new Phaser.Rectangle(0, 50, 128,iconHeight);
                image.height=image.height-20;
            }else if (iconSize==4){
                var mask_ = new Phaser.Rectangle(0, 40, 128,iconHeight); //ok
                image.height=image.height-20;
            }else if (iconSize==3){
                var mask_ = new Phaser.Rectangle(0, 20, 128,iconHeight); //ok
                image.height=image.height-10;

            }

        }

        image.crop(mask_);
        image.updateCrop();

        return F;
    }


    function moveConveyor_(spin,smbExp){
        var canMove=0;
        soundManager_.playSound("horSpin");
        for (var a =0;a<conveyorSafes_.length;a++){
            if (conveyorSafes_[a]==null && !spin){
                canMove++;
            }

            if (conveyorSafes_[a]!=undefined) {
                for (var aa = 0; aa < conveyorSafes_[a].length; aa++) {
                    if (conveyorSafes_[a][aa] != undefined && canMove > 0) {
                        TweenMax.to(conveyorSafes_[a][aa], .5, {
                            delay: .05 * (Number(a)),
                            x: conveyorSafes_[a][aa].x - (128 * canMove),
                            ease: Power1.easeInOut
                        });

                        if (aa == "0" || aa == "3") {
                            TweenMax.to(conveyorSafes_[a][aa].scale, .2, {
                                delay: .07 * (Number(a)),
                                x: 1.2,
                                y: 1.2,
                                onComplete: backScale_,
                                onCompleteParams: [a, aa]
                            });
                        }

                    } else if (conveyorSafes_[a][aa] != undefined && spin) {
                        TweenMax.to(conveyorSafes_[a][aa], (compulsiveFlag_)?.70:.75, {
                            x: conveyorSafes_[a][aa].x - (128 * 4),
                            ease: Power1.easeInOut
                        });
                        if (aa == "0" || aa == "3") {
                            TweenMax.to(conveyorSafes_[a][aa].scale, .2, {
                                delay: .07 * (Number(a)),
                                x: 1.2,
                                y: 1.2,
                                onComplete: backScale_,
                                onCompleteParams: [a, aa]
                            });
                        }
                    }
                }
            }
        }

        setTimeout(reorderConveyor_,1000, smbExp);

    }

    function backScale_(a,aa){
        TweenMax.to(conveyorSafes_[a][aa].scale, .1, {x:1,y:1});
    }

    function reorderConveyor_(aa){
        for (var all =aa.length-1;all>=0;all--){
            conveyorSafes_.splice(aa[all],1);
        }
        var smbNum=[];
        // console.log("reordered")
        for (var a =0;a<=3;a++){
            if (conveyorSafes_[a]!=undefined && conveyorSafes_[a][1]!=undefined && conveyorSafes_[a][1].smbNum!=undefined) {
                smbNum[a] = conveyorSafes_[a][1].smbNum;
            }else{
                smbNum[a] =Util.getRandomInt(0,3); //fallback as sometimes messed up
            }
        }
        safes[0]=spinManager_.getReels()[0].setIconH(1,smbNum[0]);
        safes[1]=spinManager_.getReels()[0].setIconH(2,smbNum[1]);
        safes[2]=spinManager_.getReels()[0].setIconH(3,smbNum[2]);
        safes[3]=spinManager_.getReels()[0].setIconH(4,smbNum[3]);


        for (var a =5;a<=12;a++){
            removeAsset_(spinManager_.getReels()[0].getSymbolH(a));
            removeAsset_(spinManager_.getReels()[0].getBgH(a));
            removeAsset_(spinManager_.getReels()[0].getFrameH(a));
            removeAsset_(spinManager_.getReels()[0].getBlurH(a));

            if(safes[a]!=undefined)safes[a].visible=false;
            safes[a]=null;
            if (conveyorSafes_[a]!=undefined){
                for (var aa=0;aa<conveyorSafes_[a].length;aa++){
                    if (conveyorSafes_[a][aa] != undefined) {
                        conveyorSafes_[a][aa].visible = false;
                        conveyorSafes_[a][aa] = null;
                    }
                }
                conveyorSafes_[a]=null;
            }
        }
        conveyorSafes_=[safes[0],safes[1],safes[2],safes[3]];
        isHorizSpin_=2;


    }

    function removeAsset_(obj){
        if (obj!=undefined){
            obj.visible=false;
            obj=null;
        }
    }

    function resume_(){
        var indexPort=(getOrientation()=="portrait")?1:0;
        if (framework.isTouch()!=true) {
            displayManager_.getGroup("fsWonPanel").y=60;
            //display manager levels
            displayManager_.getGroup("reels").visible = true;
            displayManager_.getGroup("bg").visible = true;
            displayManager_.getGroup("frame").visible = true;
            displayManager_.getGroup("logo").visible = true;
            displayManager_.getGroup("winWays").visible = true;
        }

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


            var t = new Phaser.Text(game_,displayManager.groups.buyFeature.buttons.buyFeature.texts.txt.x , displayManager.groups.buyFeature.buttons.buyFeature.texts.txt.y,  Translate.do("BUY"), {
                font: displayManager.groups.buyFeature.buttons.buyFeature.texts.txt.font,
                fill: displayManager.groups.buyFeature.buttons.buyFeature.texts.txt.fill
            });

            t.anchor.set(0.5, .5);
            buttonBF_.addChild(t);
            var offsetB= (framework.isTouch())?15:15;
            var t = new Phaser.Text(game_,displayManager.groups.buyFeature.buttons.buyFeature.texts.txt.x , displayManager.groups.buyFeature.buttons.buyFeature.texts.txt.y+offsetB,  Translate.do("FREE SPINS"), {
                font: displayManager.groups.buyFeature.buttons.buyFeature.texts.txt.font,
                fill: displayManager.groups.buyFeature.buttons.buyFeature.texts.txt.fill
            });

            t.anchor.set(0.5, .5);
            buttonBF_.addChild(t);

            displayManager_.getGroup("buyFeature").add(buttonBF_);

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
            //play clover bg
            lineManager_.resumeTumbling(communicationManager_.getResumeStatus(),false);
            messageBox_.showMessage("game", "A free tumble has been interrupted", "Press Spin to continue", startTumble_);
            bResume_=true;
        }else if (communicationManager_.getResumeStatus().status.type=="tumble" && communicationManager_.getResumeStatus().status.state=="FREESPINS") {
            if (communicationManager_.getResumeStatus().status !=null && communicationManager_.getResumeStatus().status.stake>0){
                changeBet_(communicationManager_.getResumeStatus().status.stake/100, true);
            }
            communicationManager_.getResumeStatus().freeSpin.totalWin=communicationManager_.getResumeStatus().freeSpin.object.totalWin*(balanceManager_.getCoinValue()/ lineManager_.getLinesNumber());
            communicationManager_.getResumeStatus().status.totalWin=communicationManager_.getResumeStatus().freeSpin.totalWin*100;
            communicationManager_.getResumeStatus().status.unsettledTotal=communicationManager_.getResumeStatus().status.totalWin;

            wasInbuyIn_=communicationManager_.getResumeStatus().buyIn/100;
            callExpand_(exp,true);
            //f1x2.GcmError(-3);
            freeSpinsManager_.parse(communicationManager_.getResumeStatus());
            buttonManager_.applyState("NHFS");
            buttonManager_.applyHide();
            freeRoundsManager_.frChecker();

            multiplier_=(communicationManager_.getResumeStatus().status.multiplier!=undefined)?communicationManager_.getResumeStatus().status.multiplier:0;
            //if (multiplier_>0)moveSideMeterFS_(true);
            lineManager_.resumeTumbling(communicationManager_.getResumeStatus(),true);

            freeSpinsManager_.resumeFs();
            messageBox_.showMessage("game", "A free tumble has been interrupted", "Press Spin to continue", startTumble_);
            bResume_=true;
        }else if (communicationManager_.getResumeStatus().status.state=="FREESPINS" && communicationManager_.getResumeStatus().status.type=="NORMAL") {
            if (communicationManager_.getResumeStatus().status !=null && communicationManager_.getResumeStatus().status.stake>0){
                changeBet_(communicationManager_.getResumeStatus().status.stake/100, true);
            }
            communicationManager_.getResumeStatus().freeSpin.totalWin=communicationManager_.getResumeStatus().freeSpin.object.totalWin*(balanceManager_.getCoinValue()/ lineManager_.getLinesNumber());
            communicationManager_.getResumeStatus().status.totalWin=communicationManager_.getResumeStatus().freeSpin.totalWin*100;
            communicationManager_.getResumeStatus().status.unsettledTotal=communicationManager_.getResumeStatus().status.totalWin;
            wasInbuyIn_=communicationManager_.getResumeStatus().buyIn/100;

            callExpand_(exp,true);
            //f1x2.GcmError(-3);
            freeSpinsManager_.parse(communicationManager_.getResumeStatus());
            buttonManager_.applyState("NHFS");
            buttonManager_.applyHide();
            freeRoundsManager_.frChecker();

            multiplier_=(communicationManager_.getResumeStatus().status.multiplier!=undefined)?communicationManager_.getResumeStatus().status.multiplier:0;

            messageBox_.showMessage("game", "You have unused Free Spins", "Press Spin to continue", startResumeFs_);
            bResume_=true;
        }else{
            buttonManager_.applyRestore();
            buttonManager_.applyState("NH");
            freeRoundsManager_.frChecker();

        }

        onGame_=true;
        framework.showFramework();
        displayManager_.getGroup("buttonFg").visible=true;
        setPortrait_((getOrientation()=="portrait")?true:false);

        //setInterval(startVibrate_,2000);
        //setTimeout(fsLogoOut_,1000);
        //setTimeout(startTest,2000)
        //setTimeout(buttonManager_.applyState,1000,"SPIN")
        //setTimeout(buttonManager_.applyState,1500,"STOP")
        //setTimeout(buttonManager_.applyState,3000,"NH")
    }

    function startTest(){
        displayManager_.getGroup("lockReels").visible = true;
    }

    function fsHideTotPanel_(){

    }

    function fsLogoOut_(){
        if (!framework.isTouch()) {
            displayManager_.getGroup("lights1").visible = false;
            displayManager_.getGroup("lights2").visible = false;
        }
        soundManager_.getBGSound("bgFs").fadeInBgSoundExternal(1000, 1, soundManager_.getBGSound("bgSlot").getSound().currentTime, null);
        soundManager_.getBGSound("bgSlot").fadeOutBgSoundExternal(1000,0);
        displayManager_.getGroup("fog").visible = true;
        displayManager_.getGroup("lockReels").visible=true;
        displayManager_.getGroup("buyFeature").visible=false;
        fadeInFs_();
    }

    function logoIn_(amt){
        if (wasInbuyIn_>0){
            if (amt>= wasInbuyIn_*2){
                startExplosion_();
                setTimeout(fadeOutFs_,800);
                return;
            }
        }else{
            if ( amt >= balanceManager_.getCoinValue() *lineManager_.getLinesNumber()){
                startExplosion_();
                setTimeout(fadeOutFs_,800);
                return;
            }
        }
        fadeOutFs_();
    }

    function changeAlpha_(obj,val){
        TweenMax.to(obj,.3,{alpha:val});
    }

    function fadeInFs_() {
        changeAlpha_(displayManager_.getGroup("bgFS"),1);
        changeAlpha_(displayManager_.getGroup("frameFS"),1);
        changeAlpha_(displayManager_.getGroup("maskFS"),1);
        changeAlpha_(displayManager_.getGroup("sideCharacter"),0);

        if (!framework.isTouch()) {
            displayManager_.getGroup("lazers1").visible = true;
            displayManager_.getGroup("lazers2").visible = true;
            displayManager_.getGroup("lazers3").visible = true;
            displayManager_.getGroup("lazers4").visible = true;
        }
        //startLazers_();
    }

    function fadeOutFs_(){
        displayManager_.getGroup("freeSpins").visible=false;
        displayManager_.getGroup("fog").visible = false;
        soundManager_.getBGSound("bgSlot").fadeInBgSoundExternal(1000, 1, soundManager_.getBGSound("bgSlot").getSound().currentTime, null);
        soundManager_.getBGSound("bgFs").fadeOutBgSoundExternal(1000,0);
        displayManager_.getGroup("lockReels").visible=false;
        if (buyFeatureEnabled_())displayManager_.getGroup("buyFeature").visible=true;

        changeAlpha_(displayManager_.getGroup("bgFS"),0);
        changeAlpha_(displayManager_.getGroup("frameFS"),0);
        changeAlpha_(displayManager_.getGroup("maskFS"),0);
        changeAlpha_(displayManager_.getGroup("sideCharacter"),1);
        if (!framework.isTouch()) {
            displayManager_.getGroup("lights1").visible = true;
            displayManager_.getGroup("lights2").visible = true;
            displayManager_.getGroup("lazers1").visible = false;
            displayManager_.getGroup("lazers2").visible = false;
            displayManager_.getGroup("lazers3").visible = false;
            displayManager_.getGroup("lazers4").visible = false;
        }
    }

    function moveLockedReels_(resume){
        //set and unset the lock animation
        displayManager_.getGroup("lockReels").visible=true;
    }

    function startSpinSound_(){
        console.log ("-----fade all music layer--to 0--------------")
        //mute layers when spin begins
        clearTimeout(quiteSpinMusic);
        for (var i=6;i<= 8;i++){
            soundManager_.stopSound("winBg_"+i);
            soundManager_.stopSound("winBgS_"+i);
        }
        soundManager_.getBGSound("bgSlot1").fadeOutBgSoundExternal(1200,0);
        soundManager_.getBGSound("bgSlot2").fadeOutBgSoundExternal(1200,0);
        soundManager_.getBGSound("bgSlot3").fadeOutBgSoundExternal(1200,0);
        soundManager_.getBGSound("bgSlot13").fadeOutBgSoundExternal(1200,0);
        soundManager_.getBGSound("bgSlot14").fadeOutBgSoundExternal(1200,0);
        soundManager_.getBGSound("bgSlot15").fadeOutBgSoundExternal(1200,0);
        soundManager_.getBGSound("bgSlot16").fadeOutBgSoundExternal(1200,0);
    }

    function stopSpinMusic_(vol){
        clearTimeout(quiteSpinMusic);
        quiteSpinMusic=0;
        console.log ("-----fade all music layer--to 0.2--------------")
        var volume=(vol==null)?.2:vol;
        //automatic fade after 4 sec from loosing spin/tumble
        soundManager_.getBGSound("bgSlot1").fadeOutBgSoundExternal(1200,volume);
        soundManager_.getBGSound("bgSlot2").fadeOutBgSoundExternal(1200,volume);
        soundManager_.getBGSound("bgSlot3").fadeOutBgSoundExternal(1200,volume);
        soundManager_.getBGSound("bgSlot13").fadeOutBgSoundExternal(1200,volume);
        soundManager_.getBGSound("bgSlot14").fadeOutBgSoundExternal(1200,volume);
        soundManager_.getBGSound("bgSlot15").fadeOutBgSoundExternal(1200,volume);
        soundManager_.getBGSound("bgSlot16").fadeOutBgSoundExternal(1200,volume);


    }

    function reverseSkull_(obj){
        if (obj==null)return;
        obj.setFrame(0);
        obj.visible=false;
    }

    function removeReverseSkull_(obj){
        if (obj==null)return;
        obj.setFrame(0);
        obj.visible=false;
    }
    var layers_=[];
    function addMusicLayer_(index,won) {

        if (index < 5) {
            if (layers_[2]==null){
                console.log ("-----add music layer----------------2")
                if (won)changeSpeed_((freeSpinsManager_.getIsInFs())?.04:0.02,3000);
                soundManager_.getBGSound("bgSlot2").fadeInBgSoundExternal(300, (won)?1:.5, soundManager_.getBGSound("bgSlot").getSound().currentTime, null);
            }
            layers_[2]=true
        }else if (index<8){
            if (layers_[1]==null){
                console.log ("-----add music layer----------------1")
                soundManager_.getBGSound("bgSlot1").fadeInBgSoundExternal(300, (won)?1:.5, soundManager_.getBGSound("bgSlot").getSound().currentTime, null);
            }
            if (won)changeSpeed_((freeSpinsManager_.getIsInFs())?.05:0.03,3000);
            layers_[1]=true
        }else if (index<=12){
            if (layers_[3]==null){
                console.log ("-----add music layer----------------3")
                soundManager_.getBGSound("bgSlot3").fadeInBgSoundExternal(300, (won)?1.3:.5, soundManager_.getBGSound("bgSlot").getSound().currentTime, null);
            }
            if (won)changeSpeed_((freeSpinsManager_.getIsInFs())?.05:0.04,3000);
            layers_[3]=true
        }else{
            changeSpeed_((freeSpinsManager_.getIsInFs())?.06:0.05,(freeSpinsManager_.getIsInFs())?5000:3000);
            //decrease layers 2,3???
            if (index==14){
                soundManager_.getBGSound("bgSlot2").fadeOutBgSoundExternal(500, 0);
                layers_[2]=null;
            }else if (index==13){
                soundManager_.getBGSound("bgSlot3").fadeOutBgSoundExternal(500, 0);
                layers_[3]=null;
            }
            var vol=.8;
            if (index==13)vol=2
            if (index==16)vol=.8
            if (index==15)vol=.6
            soundManager_.getBGSound("bgSlot"+index).fadeInBgSoundExternal(300, vol, soundManager_.getBGSound("bgSlot").getSound().currentTime, null);

        }
    }

    function decreaseVolumeBG_(vol){
        stopSpinMusic_(vol);
        if (!spinning_){
            startLightAnimal_(1,2);
            changeSpeed_(.05,4000);
            //startLight_();
        }
    }

    function increaseVolumeBG_(force){

    }

    function startTumble_(){
        freeTumbling_=true;
        buttonManager_.applyRestore();
        framework.showFramework();
    }

    function startResumeFs_(){
        buttonManager_.applyRestore();
        framework.showFramework();
        freeSpinsManager_.resumeFs();
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
        if (stopped_==false) {
            stopped_ = true;
            soundManager_.playSound("click");
            buttonManager_.applyState("AFTERSPIN");
            spinManager_.stopSpin();

        }
    }

    function doAp_() {
        framework.checkAutoPlay();//moved logic to autoplayBox
    }

    function doSpin_() {
        framework.closeApMenu();
        framework.closeBetMenu();
        if (buttonManager_.getButton(frameworkSettings.buttons.spinButton.id).isEnable()==true && isTumbling_==false && canSpin_==true) {
            soundManager_.playSound("spinClick");
            realDoSpin_([false]);
        }else {
            return false;
        }
    }

    function endSpinAnim_(){
    }


    function realDoSpin_(swipe){//swipte=array
        console.log("realDoSpin_"+spinning_ + " "+ isHorizSpin_ + " "+gotErrorInAp_ + " "+onGame_ )
        if((spinning_ || isHorizSpin_!=2 )&& gotErrorInAp_==false)return;
        if(!onGame_)return;
        if (respin_)eventManager_.clearEvt();

        if(messageOn_==false) {
            gcmCalls_("PAID", 0); //was in enable button but for some race condition it was resetting the FS win
            if(displayManager_.getText("lineWin")!=undefined)displayManager_.getText("lineWin").alpha=0;
            layers_=[];
            buyIn_=false;
            spinning_ = true;
            stopped_=false;
            updateLockedReels_=false;
            splitNumberWaysUpdated_=false;
            scatterCount_=0;
            scatterPlayed_=false;
            isHorizSpin_=0;
            playTrigger_=false;
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

                if(!freeSpinsManager_.getIsInFs())me.resetSuccessiveWinning();

                if (!respin_){
                    balanceManager_.bet(betCheckCallBack_);
                }else{
                    betCheckCallBack_(true);
                }
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
                if (freeSpinsManager_.getIsInFs() && framework.isTouch()) {
                    $("#rightWrapper").css("opacity", "0");//remove spin button on mobile only
                }
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
                if (freeSpinsManager_.getIsInFs() == true || freeTumbling_) {
                    noSleep.enable();  //this prevents mobile to go to sleep during FS
                    if (freeSpinsManager_.getIsInFs())framework.updateSmallMessageText(Translate.do("Bet:") + " " + Translate.do("free spin"));
                    if (freeTumbling_) framework.updateSmallMessageText(Translate.do("Bet:") + " " + Translate.do("free re-spins"));
                } else if (freeRoundsManager_.getIsInFr() == true) {
                    framework.updateSmallMessageText(Translate.do("Bet:") + " " + Translate.do("free rounds"));
                } else if (respin_) {
                    framework.updateSmallMessageText(Translate.do("Bet:") + " " + Translate.do("free respin"));
                }else{
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
                respin_=false;
            } else {
                isHorizSpin_=2;
                buttonManager_.applyState("NH");
                spinning_=false;
                balanceManager_.unBet();
                setTimeout(showApMessage_, 500);
            }
        } else {
            isHorizSpin_=2;
            buttonManager_.applyState("NH");
            spinning_=false;
            framework.updateSmallMessageText(Translate.do("Insufficient funds. Please reduce stake."));
        }
    }

    function spinAnimEnd_() {
        logger("animation end called.------"+spinManager_.getSpinResp())
        if (isHorizSpin_==2) {
            lineCompletion_ = false;
            //lineManager_.initClass();
            displayManager_.getText("winValue").setText("");
            soundManager_.stopSound("reelSound");
            eventManager_.clearEvt();

            winManager_.evaluate(spinManager_.getReels());
            won = winManager_.getWinAmt();
            fsWon = freeSpinsManager_.getFsWon();
            wonBonus = (spinManager_.getSpinResp() != null && spinManager_.getSpinResp().bonus != null) ? spinManager_.getSpinResp().bonus.wonBonus : 0;
            fs = false;
            if (freeSpinsManager_.getIsInFs() || fsWon) {
                fs = freeSpinsManager_.getFreeSpinsEval();
            }
            displayManager_.getText("winValue").setText("");
            evaluateWinnings_();
        }else{
            setTimeout(spinAnimEnd_,200);
        }
    }

    function evaluateWinnings_(){
        //start bonus if needed, displays all winnings (also called after bonus to display lines winnings), after winnings call the autoplay and freespins evaluator
        lineManager_.clearLine();
        eventManager_.clearEvt();
        logger("NO bonus found ")

        collected_=spinManager_.getSpinResp().state.collected;
        if (stopped_==false && mwCounterTW_!=null){
            mwCounterTW_.timeScale(8);
            mwCounterTW_=null
        }

        if (won>0 || hasScatter_) {
            lineManager_.endAnimHandle(winManager_.getAllWinsSorted(), eventManager_);
            freeSpinsManager_.endAnimHandle(eventManager_);
            if (freeRoundsManager_.getIsInFr()==true && freeSpinsManager_.getIsInFs() == false ){//no add delay during nested FS
                eventManager_.addEvent(fakeEvent_,(won)?lineManager_.getTotalDuration():0);
            }

        } else {
            if(playTrigger_)eventManager_.addEvent(playTriggeredSmb_,500);
            freeSpinsManager_.endAnimHandle(eventManager_);
            balanceManager_.setCanUpdate(true);
            clearTimeout(quiteSpinMusic);
        }
        buttonManager_.applyState("AFTERSPIN");
        lineCompletion_=true;
        spinning_=false;

        if ((won<=0 && hasScatter_==false && freeSpinsManager_.getType()!="convert" && freeSpinsManager_.getType()!="tumble" )  ) {
            eventManager_.addEvent(fsEval_, (freeSpinsManager_.getIsInFs()) ? (freeSpinsManager_.getFsNumber() == 0)? 3500:0 : 0);
        }
        eventManager_.triggerEvt();
    }

    function spinAnimEndAfterTumbling_(){
        if (isTumbling_==false && lineManager_.getInterruptedWinAnim()==false ) {
            console.log("spinAnimEndAfterTumbling_");
            //just to check if expanind animation has to run
            var exp= spinManager_.getSpinResp().state.expand;
            var arr=[];
            var hasToExpand=false;
            updateLockedReels_=false;
            hasScatter_=false;
            numFuels=0;
            splitNumberWaysUpdated_=false;
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
            collected_ = spinManager_.getSpinResp().state.collected;
            spinning_=false;
            if (freeSpinsManager_.getIsInFs() || fsWon) {
                fs = freeSpinsManager_.getFreeSpinsEval();
            }

            if (won>0 || hasScatter_){
                lineCompletion_=false;
                buttonManager_.applyState("AFTERSPIN");
                lineManager_.endAnimHandle(winManager_.getAllWinsSorted(), eventManager_);
                if(fsWon){
                    //additional FS won, give time to show
                    eventManager_.addEvent(fakeEvent_, 7000);
                }
            }else{
                if(fsWon){
                    //additional FS won, give time to show
                    eventManager_.addEvent(fakeEvent_, 300);
                }
                clearTimeout(quiteSpinMusic);
                quiteSpinMusic = setTimeout(stopSpinMusic_, 4000);
                freeRoundsManager_.updateFreeRoundsTot();
                if(playTrigger_)eventManager_.addEvent(playTriggeredSmb_,500);
                eventManager_.addEvent(fsEval_, (freeSpinsManager_.getIsInFs()==true && freeSpinsManager_.getFsNumber() ==0)?2000:(freeSpinsManager_.getIsInFs()==true && spinManager_.getSpinResp().freeSpin.object.wonAdditionalEndLevel>0)?2000: 500);
            }

            freeSpinsManager_.endAnimHandle(eventManager_);

            if (freeRoundsManager_.getIsInFr() == true && freeSpinsManager_.getIsInFs() == false) {//no add delay during nested FS
                eventManager_.addEvent(fakeEvent_, (won) ? lineManager_.getTotalDuration() : 0);
            }
            eventManager_.triggerEvt();

        }else{
            //console.log("waiting to tumble" + isTumbling_+ " "+  lineManager_.getInterruptedWinAnim())
            setTimeout(spinAnimEndAfterTumbling_,100);
        }
    }

    function updateBalance_(txt) {
    }

    function fsEval_(){
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
            setTimeout(enableButton_, 0);
            multiplierManager_.updateMultiplier(true);
        }else{
            enableButton_();
            multiplierManager_.resetMultipliers();
        }
    }

    function enableButton_() {
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
                eventManager_.addEvent(showApMessage_, 100, [ap]);
                eventManager_.triggerEvt();
            } else {
                finalizeEnable_();
            }
        } else {
            if (fsWon == false) eventManager_.clearEvt();
            if (ap == false && autoPlayManager_.getIsInAutoPlay() == true) {
                eventManager_.addEvent(showApMessage_, 100, [ap]);
            }
            if ((ap && won) || fs) {
                //waiting for line class to trigger
                eventManager_.addEvent(waitForLineCompletion_, 50);
            } else {
                eventManager_.addEvent(startAutoSpin_, 100, [false]);
            }
            eventManager_.triggerEvt();
        }
    }

    function waitForLineCompletion_() {
        if (lineCompletion_ ){
            startAutoSpin_([false]);
        }else{
            setTimeout(waitForLineCompletion_,50);
        }
    }

    function startAutoSpin_(par){
        if (autoPlayManager_.getIsInAutoPlay() || fs ) {
            if (autoPlayManager_.getIsFeature()==false || (autoPlayManager_.getStopOnFeature()==false && fs==true)){
                if (autoPlayManager_.getCanAp()==true) {
                    gcmCalls_("ANIMATION_END",null,true);
                    noSleep.enable();  //this prevents mobile to go to sleep during FS
                    var tOut= (won>0)?lineManager_.getTotalDuration():200;
                    if (spinManager_.getFsResp()!=undefined && spinManager_.getFsResp().won!=undefined && spinManager_.getFsResp().won>1){// FS retrigger
                        tOut+=2000;
                    }
                    apTimer_=setTimeout(realDoSpin_, tOut, par);
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
        if (lineCompletion_ ) {
            setTimeout(autoPlayManager_.showAPMessage,1500,finalizeEnable_);
        }else{
            setTimeout(showApMessage_,200);
        }
    }

    function finalizeEnable_(){
        if(displayManager_.getText("lineWin")!=undefined)displayManager_.getText("lineWin").alpha=0;
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
        wasInbuyIn_=0;
        if (gameClass_.isSpinning()==true)return;
        buttonManager_.applyState("NH");
        buttonManager_.applyRestore();
        autoPlayManager_.setCanAp(true);
        //if(displayManager_.getText("lineWin")!=undefined)displayManager_.getText("lineWin").alpha=0;
        noSleep.disable();//mobile devices can now go to sleep
        if (freeRoundsManager_.getIsInFr()){
            setTimeout(freeRoundsManager_.getFreeRoundsEval,1000);
        }

        if(getOrientation()!="portrait"){
            displayManager_.getText("lineWin").y=520;
        }else{
            displayManager_.getText("lineWin").y=520;
        }
    }

    function hideLr_(){

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
                var num=exp.reel[i].smb.length;
                if (i>0 && i<5)num++;
                n = n * num
            }

            if (n==1){
                displayManager_.getText("winWaysNum").setText("");
            }else{
                displayManager_.getText("winWaysNum").setText(n);

            }
            //expandReelSize_(n, resume);
        }
    }



    function startHorizontalSpin_(){
        isHorizSpin_=1;
        //first reel also set the horizontal reel icons
        var smbs = [];
        smbs.push(spinManager_.getSpinResp().spin.horizontalReel[0][0].smbID);
        smbs.push(spinManager_.getSpinResp().spin.horizontalReel[0][1].smbID);
        smbs.push(spinManager_.getSpinResp().spin.horizontalReel[0][2].smbID);
        smbs.push(spinManager_.getSpinResp().spin.horizontalReel[0][3].smbID);
        animateConvS_(true, [0, 1, 2, 3], smbs);
    }

    var scatterAnticipation_=[];
    function setDelRepeter_(obj){
        var delayRepeater=obj.delayRepeater;
        var slowDownReel=[];
        var iconSound=[];
        var reelSound=[];
        var index=1;

        for (var i = 0; i < ReelConfig.numReels; i++) {
            slowDownReel[i]=false;
            reelSound[i]=false;
            iconSound[i]=false;
            if (spinManager_.getSpinResp().state.anticipate!=undefined && spinManager_.getSpinResp().state.anticipate.indexOf(i)>=0){
                slowDownReel[i]=true;
                reelSound[i]=true;
                delayRepeater[i]=3*i;
                setTimeout(startAnticipation,index*500,i);
                index++;

            }

            //console.log("loop " +delayRepeater[i] + " "+slowDownReel[i] + " "+reelSound[i] +" "+iconSound[i])
        }
        obj.slowDownReel=slowDownReel;
        obj.iconSound=iconSound;
        obj.delayRepeater=delayRepeater;
        obj.reelSound=reelSound;

        return obj;
    }

    function startAnticipation(i){
        displayManager_.getGroup("reelFg").visible = true;
        //just for the anticipation
        var smb = new Phaser.Sprite(game_, ReelConfig.reel.deltaX_0 + ((ReelConfig.reel.deltaX-2.5) * i), ReelConfig.reel.deltaY_0 -128 *2, "anticipation");
        smb.anchor.set(0, .5);
        smb.animations.add("anim");
        smb.scale.x = 1;
        smb.scale.y = 1;
        displayManager_.getGroup("reelFg").add(smb);
        smb.animations.play("anim", 20, false, true);
        scatterAnticipation_[i]=smb;
    }

    function upperSmbCallBack_(i) {
        //called after spin to move the symbols in the upper position before moving the reel
        prevList_=null;

        for (var a = 0; a < ReelConfig.numIcon; a++) {
            if (spinManager_.getSpinReelResp().reel[i].smb[a]!=undefined) {
                var smb = spinManager_.getSpinReelResp().reel[i].smb[a];//(spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb != null) ? spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb : spinManager_.getSpinReelResp().reel[i].smb[a].smb;
                var s = spinManager_.getReels()[i].swapSmb(smb, a);

                if (spinManager_.getSpinReelResp().reel[i].smb[a].transform !=null) {
                    s.transformTo=spinManager_.getSpinReelResp().reel[i].smb[a].smb;
                    s.animal=spinManager_.getSpinReelResp().reel[i].smb[a].transform;
                    s.trigger = true;
                    s.smbN = spinManager_.getSpinReelResp().reel[i].smb[a].smb;
                    s.smb=a;
                    s.scatter = false;
                    s.mult=spinManager_.getSpinReelResp().reel[i].smb[a].mult;
                    spinManager_.addTriggerIcon(s);
                    playTrigger_=true;
                }

                if (spinManager_.getSpinReelResp().reel[i].smb[a].smb==12 && spinManager_.getSpinReelResp().reel[i].smb[a].animate){
                    spinManager_.getSpinReelResp().reel[i].smb[a].animate=false;
                    soundManager_.playSound("scatterLand");//wild x2 landing sound

                    var smb = new Phaser.Sprite(game_, s.x, s.y, "anim12");
                    smb.anchor.set(.5, .5);
                    smb.animations.add("anim");
                    smb.scale.x = s.scale.x;
                    smb.scale.y = s.scale.y;
                    s.visible=false;
                    displayManager_.getGroup("scatter").add(smb);
                    smb.animations.play("anim", 36, false,true,endBack_,s);
                    scatterCount_++;
                    playTrigger_=true;
                    if (fsWon) {
                        s.trigger = true;
                        s.scatter = true;
                        spinManager_.addTriggerIcon(s);
                    }
                }

            }
        }

        if (i==3){
            if (stopped_ && mwCounterTW_!=null){
                mwCounterTW_.timeScale(5);
                mwCounterTW_=null
            }

        }

        if (scatterAnticipation_[i]!=undefined && scatterAnticipation_[i]!=null){
            scatterAnticipation_[i].visile=false;
            displayManager_.getGroup("reelFg").remove(scatterAnticipation_[i]);
            scatterAnticipation_[i]=null;
            soundManager_.playSound("drumFinal");
        }

        //fix for nonsense overlapping symbols
        for (var j = 0; j < ReelConfig.icons[i]; j++) {
            if (j<15){
                displayManager_.getGroup("reels").children[i].children[j].visible=false;
            }
        }

        if (scatterCount_>0 && i<5 && scatterPlayed_==false){
            scatterPlayed_=true;
            soundManager_.playSound("drumLoop",5);
            startLightAnimal_(1,1);
            //startLight_();
        }

        if (i==5 && scatterCount_>0){
            soundManager_.stopSound("drumLoop");
            soundManager_.playSound("drumFinal");
        }
    }

    function back_(smb,s){
        TweenMax.to(smb.scale,.1,{x:smb.scale.x - .07,y:smb.scale.y - .07,onComplete:endBack_,onCompleteParams:[smb,s]});
    }

    function endBack_(s){
        s.visible=true;
    }

    function playTriggeredSmb_(){
        var iconN=-1;
        var triggerSymbol_=spinManager_.getTriggerIcons();
        var add=false;
        var scatter=false;
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
                if (triggerSymbol_[a].scatter){
                    scatter=true;
                }
            }
        }
        if(add){
            if (!scatter) {
                soundManager_.playSound("smbWin_" + iconN);
            }else{
                soundManager_.playSound("fsWin");
                stopSpinMusic_();
            }
        }
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

    function doBuyFeature_() {
        var obj={};
        obj.options= communicationManager_.getResumeStatus().status.buyInSetup.options;
        obj.options.limit=2500;
        if (canSpin_==true && spinning_==false && isTumbling_==false && (window.SPIN_STATE==undefined || window.SPIN_STATE.spinning!="true") ) {//todo ask Joe about mobile
            if (freeRoundsManager_.getIsInFr()==false && autoPlayManager_.getIsInAutoPlay()==false && lineManager_.getInterruptedWinAnim()==false ) {
                canSpin_=false;
                featureMessageReq_.showMultipleMessageRR("BUY FREE SPINS ROUNDS", "","", buyFeatureCB_, noBF_, obj.options);
            }
        }
    }
    function noBF_(){
        canSpin_=true;
        buttonBF_.frame=2;
        if (buttonBFP_!=undefined)buttonBFP_.frame=2;
    }
    var buyinNum_=0;
    function buyFeatureCB_(par){
        console.log("----------------------buy buyb uy")
        buttonManager_.applyState("SPIN");
        balanceManager_.buyFeatureBet(betCheckCallBuyFeatureBack_,par);
        buttonBF_.frame=2;
        buyinNum_=par.nSpins;
        if (buttonBFP_!=undefined)buttonBFP_.frame=2;
    }

    function betCheckCallBuyFeatureBack_(response,par) {
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

    function getBuyInResponse_(json){
        buyIn_=true;
        wasInbuyIn_=json.buyIn/100;
        scatterManager_.parse(json);
        freeSpinsManager_.fsWon((buyinNum_>0)?buyinNum_:8); //todo fix it
        multiplierFS_=  Number(json.freeSpin.totalWin>0)?json.freeSpin.multiplier-1:json.freeSpin.multiplier;
        fs = freeSpinsManager_.getFreeSpinsEval();
        eventManager_.clearEvt();
        freeSpinsManager_.endAnimHandle(eventManager_);
        eventManager_.triggerEvt();
        startLightAnimal_(1,1);
        //startLight_();

        setTimeout(startExplosion_,3800);
        setTimeout(setSpin_,3000,[json]);

    }

    function startExplosion_(num){
        sideCharacter_.animations.play("anim", 24,false, false);//todo parametric loop
        changeSpeed_(.06,3000);
        soundManager_.playSound("explosionSound");
        displayManager_.getGroup("sideExplosion").visible=true;
        var anim=displayManager_.getGroup("sideExplosion")["leftE"].children[0];
        anim.visible=true;
        anim.animations.add("anim");
        anim.animations.play("anim", 24,(num!=undefined)?num:false);//todo parametric loop

        var anim=displayManager_.getGroup("sideExplosion")["rightE"].children[0];
        anim.visible=true;
        anim.animations.add("anim");
        anim.animations.play("anim", 24,(num!=undefined)?num:false);//todo parametric loop
        if (num!=undefined)setTimeout(soundManager_.playSound, 1800,"explosionSound");
    }

    function setSpin_(par){
        if (freeSpinsManager_.getIsInFs()) {
            var swipe = [false];
            buyIn_ = false;
            canSpin_=true;
            showScatterWin_ = false;
            showFsWin_ = false;
            spinning_ = true;
            stopped_ = false;
            soundManager_.stopSound("smbWin_13");//todo see if possible to stop the sticky wild animation (also on line class)

            if (!bResume_) lineManager_.stopEvents();
            bonusManager_.clearLineEval();
            wildManager_.clearWild(-1);
            winAmtManager_.resetWinManager();
            soundManager_.stopSound("winSound");
            autoPlayManager_.toggleFeature(false);
            winAmtManager_.forceToComplete();
            lineManager_.clearLineAfterValue();
            // for (var i = 2; i < 7; i++) {
            //     soundManager_.playAdditionalBgSound_("bgSlot" + i);
            //     if(soundManager_.getBGSound("bgSlot" + i)!=undefined )soundManager_.getBGSound("bgSlot" + i).fadeInBgSoundExternal(500, 1, soundManager_.getBGSound("bgSlot").getSound().currentTime, null);
            // }
            setTimeout(spin_,1000,par)
            lastSound_ = 3;
            framework.updateSmallMessageText(Translate.do("Bet:") + " " + Translate.do("free spin"));
        }else{
            setTimeout(setSpin_,500,par)
        }
        //balanceManager_.bet(betCheckCallBack_);
    }

    function spin_(par){
        var swipe = [false];
        communicationManager_.resetResumeStatus();
        spinManager_.setSpinType(swipe[0], swipe[1]);
        freeTumbling_ = false;
        bResume_ = false;
        setTimeout(parse_,1500,par);

    }

    function parse_(par){
        par[0].freeSpin.won=0;
        spinManager_.parse(par[0]);
        freeSpinsManager_.updateFreeSpinsNum();
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
            if (forceDemo["win"+id][0].response.startBuyIn!=null && forceDemo["win"+id][0].response.startBuyIn==true){
                communicationManager_.sendServletBfRequest("spin", "");
            } else {
                realDoSpin_(false);
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
        addMusicLayer:addMusicLayer_,
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
        setDelRepeter:setDelRepeter_,
        startHorizontalSpin:startHorizontalSpin_,
        playTriggeredSmb:playTriggeredSmb_,
        changeCompulsiveState:changeCompulsiveState_,
        spinAnimEndAfterTumbling:spinAnimEndAfterTumbling_,
        fsLogoOut:fsLogoOut_,
        fsHideTotPanel:fsHideTotPanel_,
        unSetMask:unSetMask_,
        setMask:setMask_,
        setReelsCallback:setReelsCallback_,
        logoIn:logoIn_,
        loadedPortrait:loadedPortrait_,
        hideGame:hideGame_,
        moveLockedReels:moveLockedReels_,
        doBuyFeature:doBuyFeature_,
        getBuyInResponse:getBuyInResponse_,
        startVibrate:startVibrate_,
        startSpinSound:startSpinSound_,
        startForcing:startForcing_,
        expandReelSizeSplit:expandReelSizeSplit_,
        animHorizzontal:animHorizzontal_,
        animAnimalHorizzontal:animAnimalHorizzontal_,
        moveAnimalHorizzontal:moveAnimalHorizzontal_,
        animAnimalFrame:animAnimalFrame_,
        startExplosion:startExplosion_,
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
            return spinning_ || (isHorizSpin_==1);
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
            soundManager_.playBgSound("bgSlot");
            soundManager_.playAdditionalBgSound_("bgFs");
            soundManager_.playAdditionalBgSound_("bgSlot1");
            soundManager_.playAdditionalBgSound_("bgSlot2");
            soundManager_.playAdditionalBgSound_("bgSlot3");
            soundManager_.playAdditionalBgSound_("bgSlot13");
            soundManager_.playAdditionalBgSound_("bgSlot14");
            soundManager_.playAdditionalBgSound_("bgSlot15");
            soundManager_.playAdditionalBgSound_("bgSlot16");
        },
        setChange:function(value){
            if (value==false){
            }
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
        successiveWinning:function (counter) {
        },
        resetSuccessiveWinning:function () {
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
            return 0;
        },
        waitForSpin:function () {
            if (gameClass_.getCompulsivePlayer()==true)return false;
            return false;
        },
        getBuyIn:function(){
            return buyIn_;
        },
        getUpdateLockedReels:function(){
            return updateLockedReels_;
        },
        getRatio:function(){
            return xRatio_;
        },
        clearPrevEvt:function () {
            eventManager_.clearEvt();
        },
        getTurning:function(){
            return turning_;
        },
        hasScatter:function(){
            return hasScatter_;
        },
        getNumTumbles:function(){
            return numFuels;
        },
        getMultiplier:function(){
            return multiplierFS_;
        },
        getHarpPlayed:function () {
            return true;
        },
        getIsRespin:function(){
            return respin_;
        },
        doCutWinAnim:function () {
            clearTimeout(apTimer_);
            eventManager_.clearEvt();
        },
        logger:function(msg){
            //console.log(msg);
        },
        getEventManager:function () {
            return eventManager_;
        },
        getWasBuyIn:function(){
            return wasInbuyIn_;
        },
    }

    return me;
}
