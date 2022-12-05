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
    var bskipSideMeterUpdt=false;
    var waitForReelExpansion_=false;
    var expanded_=0;
    var xOffset_=0;
    var xOffsetFull_=0;
    var yOffset_=0;
    var xRatio_=1;
    var xRatioFull_=1;
    var yRatio_=1;
    var xMask=ReelConfig.reel.deltaX_0;
    var yMask=72;
    var maskWidth=864+ReelConfig.reel.deltaX_0;
    var maskHeight=560;
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
    var numTumbles=0;
    //saving datas for additional FS that animate after tumble
    var fsNum_=0;
    var wonFs_=0;


    var dobuyIn_=false;
    var respin_=false;
    var multiplierFS_=0;
    var isLocking_=false;
    var lf_=null;
    var p_=null;
    var w_=null;
    var placeMashroomWilds_=false;
    var placemWildsMults_=false;
    var placingWildsMults_=false;

    function create_() {
        if (framework.isTouch()==true) {
            buttonManager_.applyState("NH");
            framework.hideFramework();
            displayManager_.getGroup("reels").visible = false;
            displayManager_.getGroup("bg").visible = false;
            displayManager_.getGroup("mask").visible = false;
            displayManager_.getGroup("frame").visible = false;
            displayManager_.getGroup("logo").visible = false;
            displayManager_.getGroup("freeSpinAccumulator").visible = false;
        }else{
            displayManager_.getGroup("reels").visible = true;
            displayManager_.getGroup("bg").visible = true;
            displayManager_.getGroup("mask").visible = true;
            displayManager_.getGroup("frame").visible = true;
            displayManager_.getGroup("logo").visible = true;
            displayManager_.getGroup("freeSpinAccumulator").visible = true;
        }
        spinManager_.createReels();
        guiBottomBar_.setBetControlInitialBet(ReelConfig.bet);//todo change this, it's just to apply the default bet
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
        mask_.drawRect(xMask, yMask, maskWidth* window.devicePixelRatio, maskHeight);

        //mask_.drawRect(xMask, 42, 864, 560);
        displayManager_.getGroup("reels").mask=mask_;
    }

    function startVibrate_(duration,repeat,offset){
        var fs= (freeSpinsManager_!=undefined && freeSpinsManager_.getIsInFs())?"FS":"";

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
                xRatio_ = scaleW_ / 730;//ratio between the current Width and the reel width to make the reels bigger as the current width (almost....)
                xRatioFull_ = scaleW_ / 1200;
                var xCompensate= 1;
                var yCompensate=0;
                console.log(scaleW_ + "ver 2 "+ xRatio_)

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
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(702*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode

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
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(704*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                    }else if (scaleW_==320 && (scaleH_<455)){//iphone 6 7
                        xRatio_=xRatio_*.8;
                        xCompensate=1.2;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(714*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                    }else if ((scaleH_>700)){//samsung tab?
                        xRatio_=xRatio_*.7;
                        xCompensate=1.3;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(697*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode

                    }else{
                        xRatio_=xRatio_*.7;
                        xCompensate=1.3;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(697*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
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
                xMask = 0;
                var xCenter= (scaleW_/2)-640;
                maskHeight = 560 * xRatio_;

                if ($("#footer-bottom-message")!=undefined)$("#footer-top-win").html($("#footer-bottom-message")[0].outerText);
                if ($("#footer-bottom-message")!=undefined)$("#footer-bottom-message").html("")

                yCompensate=yCompensate* window.devicePixelRatio;
                yOffset_ =  130*xRatio_   // scaleH_- maskHeight - scaleH_/ 2.25;         //change the objects Y position to move on top of the portrait mode UI
                yMask = yOffset_ + (72 * xRatio_)-3*xRatio_;

                adaptPortraitAsset_(displayManager_.getGroup("reels"),xOffset_-5*xRatio_,yOffset_-5*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("logo"),xOffset_,yOffset_-5*xRatio_,xRatio_*1.2);
                adaptPortraitAsset_(displayManager_.getGroup("wins"),xOffset_,yOffset_-5*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("winGlow"),xOffset_,yOffset_-5*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("freeSpinAccumulatorFs"),xOffset_-1*xRatio_,yOffset_-1*xRatio_,  xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("freeSpins"),xOffset_,yOffset_,xRatio_*1.15);
                adaptPortraitAsset_(displayManager_.getGroup("freeRounds"),xOffset_-5*xRatio_,yOffset_-200*xRatio_,xRatio_*1.35);
                adaptPortraitAsset_(displayManager_.getGroup("bg"),xOffset_,yOffset_-210*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("bgFS"),xOffset_,yOffset_-210*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("frame"),xOffset_,yOffset_-210*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("frameFS"),xOffset_,yOffset_-210*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("mask"), xOffset_-3*xRatio_,yOffset_-2*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("maskFS"), xOffset_-3*xRatio_,yOffset_-2*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("scatter"),xOffset_,yOffset_-5*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("wild"),xOffset_,yOffset_-5*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("freeSpinAccumulator"),xOffset_-1*xRatio_,yOffset_-1*xRatio_,  xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("buyFeature"), xOffset_,yOffset_-5*xRatio_,xRatio_);//-1*( displayManager_.getGroup("idleObjects").children[0].x) + scaleW_/2 ,-1*( displayManager_.getGroup("idleObjects").children[0].y)+20,xRatio_);

                adaptPortraitAsset_(displayManager_.getGroup("centralLineWin"), xOffset_,yOffset_-5*xRatio_,xRatio_);

                adaptPortraitAsset_(displayManager_.getGroup("centralWin"), xOffset_,yOffset_-5*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("winWays"), xOffset_,yOffset_-5*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("centralFuntainSmallObj"), xOffset_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("fsWonPanel"),xOffset_,yOffset_+35*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("frWonPanel"),xOffset_,yOffset_+35*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("preview"),xOffset_+200*xRatio_,yOffset_-280*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("msgBox"),xOffset_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("msgBoxFR"),xOffset_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("msgBoxFeature"),xOffset_-130*xRatio_,yOffset_,xRatio_*1.2);//-scaleW_/2 +100*xRatio_,0,.55);


                //portait bg
                setPorytraitAssets_(displayManager_.getGroup("logo").logo.children[0],true);
                setPorytraitAssets_(displayManager_.getGroup("buyFeature").children[0],true,640,900);
                setPorytraitAssets_(displayManager_.getGroup("mask").bg2.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("mask").bg2.children[1],true,-45, 658);
                setPorytraitAssets_(displayManager_.getGroup("mask").bg3.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("mask").bg3.children[1],true,-45,-208);
                setPorytraitAssets_(displayManager_.getGroup("mask").fr1.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("mask").fr1.children[1],true,-45,-234);


                setPorytraitAssets_(displayManager_.getGroup("frame").bg4.children[1],true,254,306);
                setPorytraitAssets_(displayManager_.getGroup("frame").bg4.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("frameFS").bg4.children[1],true,254,306);
                setPorytraitAssets_(displayManager_.getGroup("frameFS").bg4.children[0],false);


                //fs
                setPorytraitAssets_(displayManager_.getGroup("maskFS").bg2.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("maskFS").bg2.children[1],true,-45, 658);
                setPorytraitAssets_(displayManager_.getGroup("maskFS").bg3.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("maskFS").bg3.children[1],true,-45,-208);
                setPorytraitAssets_(displayManager_.getGroup("maskFS").fr1.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("maskFS").fr1.children[1],true,-45,-234);



                setPorytraitAssets_(displayManager_.getGroup("bg").bg.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("bg").bg.children[1],true,1022,306);
                setPorytraitAssets_(displayManager_.getGroup("bg").bg1.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("bg").bg1.children[1],true,-47,306);
                //FS
                setPorytraitAssets_(displayManager_.getGroup("bgFS").bg.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("bgFS").bg.children[1],true,1022,306);
                setPorytraitAssets_(displayManager_.getGroup("bgFS").bg1.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("bgFS").bg1.children[1],true,-47,306);


                //FR
                setPorytraitAssets_(displayManager_.getGroup("freeRounds").frPanel.children[0],null,200);
                setPorytraitAssets_(displayManager_.getText("frLabel"),null,380);
                setPorytraitAssets_(displayManager_.getText("frValue"),null,380);
                setPorytraitAssets_(displayManager_.getText("frTotWonLabel"),null,770);
                setPorytraitAssets_(displayManager_.getText("frTotWonValue"),null,770);

                //displayManager_.getText("winWaysNum").fontSize=65;

                //top FS
                setPorytraitAssets_(displayManager_.getText("fsAdditionalT"),true,1167,167);
                setPorytraitAssets_(displayManager_.getText("fsAdditionalT1"),true,695,560);
                setPorytraitAssets_(displayManager_.getText("fsAdditionalT2"),true,420,560);
                setPorytraitAssets_(displayManager_.getText("fsAdditionalT3"),true,562,618);
                setPorytraitAssets_(displayManager_.getText("fsAdditional"),true,375,-22);
                //bottom FS
                setPorytraitAssets_(displayManager_.getText("fsLabel"),true,330,-50);
                setPorytraitAssets_(displayManager_.getText("fsValue"),true,330,-30);
                setPorytraitAssets_(displayManager_.getText("fsmultT"),true,550,-38);
                setPorytraitAssets_(displayManager_.getText("fsMultValue"),true,550,-17);
                setPorytraitAssets_(displayManager_.getText("totWonLabel"),true,780,-50);
                setPorytraitAssets_(displayManager_.getText("totWonValue"),true,780,-30);
                setPorytraitAssets_(displayManager_.getGroup("freeSpins").box1.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("freeSpins").box2.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("freeSpins").box3.children[0],false);

                setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulatorFs")["fsAddBox"].children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulatorFs")["fsAddBox"].children[1],true,643,720);
                setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator")["anchorIn"].children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator")["anchorIn"].children[1],true,640,750);
                for (var i =1;i<=4;i++){
                    setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator")["anchor"+i +"_In"].children[0],false);
                    setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator")["anchor"+i +"_In"].children[1],false,640,750);

                    setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulatorFs")["fsPos"+i].children[0],false);
                    setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulatorFs")["fsPos"+i].children[1],false,800,720);

                    setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulatorFs")["fsPosLS-"+i].children[0],false);
                    setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulatorFs")["fsPosLS-"+i].children[1],false,485,720);
                }

                //preview
                setPorytraitAssets_(displayManager_.getGroup("preview").children[4],null,null,1320);
                setPorytraitAssets_(displayManager_.getGroup("preview").children[5],null,null,1320);
                setPorytraitAssets_(displayManager_.getGroup("preview").children[6],null,null,1320);
                setPorytraitAssets_(displayManager_.getGroup("preview").children[7],null,null,1330);
                setPorytraitAssets_(displayManager_.getGroup("preview").bgmsg.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("preview").logo.children[0],true);
                setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview1.children[0],true,158,270);
                setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview2.children[0],true,158, 740);

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
            yMask=72;
            xMask=0;

            adaptPortraitAsset_(displayManager_.getGroup("reels"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("wins"),0,0,1);
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
            adaptPortraitAsset_(displayManager_.getGroup("fsWonPanel"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("frWonPanel"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("msgBox"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("msgBoxFR"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("msgBoxFeature"),0,0,1);

            //portait bg
            setPorytraitAssets_(displayManager_.getGroup("logo").logo.children[0],false);
            setPorytraitAssets_(displayManager_.getGroup("buyFeature").children[0],true,110,112);

            setPorytraitAssets_(displayManager_.getGroup("frame").bg4.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("frame").bg4.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("frameFS").bg4.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("frameFS").bg4.children[1],false);

            setPorytraitAssets_(displayManager_.getGroup("mask").bg2.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("mask").bg2.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("mask").bg3.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("mask").bg3.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("mask").fr1.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("mask").fr1.children[0],true);
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

            //displayManager_.getText("winWaysNum").fontSize=50;



            adaptPortraitAsset_(displayManager_.getGroup("preview"),0,0,1);

            setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulatorFs")["fsAddBox"].children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulatorFs")["fsAddBox"].children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator")["anchorIn"].children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator")["anchorIn"].children[1],false);
            for (var i =1;i<=4;i++){
                setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator")["anchor"+i +"_In"].children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator")["anchor"+i +"_In"].children[1],false);

                setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulatorFs")["fsPos"+i].children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulatorFs")["fsPos"+i].children[1],false);

                setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulatorFs")["fsPosLS-"+i].children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulatorFs")["fsPosLS-"+i].children[1],false);
            }



            //FR
            setPorytraitAssets_(displayManager_.getGroup("freeRounds").frPanel.children[0],null,140);
            setPorytraitAssets_(displayManager_.getText("frLabel"),null,300);
            setPorytraitAssets_(displayManager_.getText("frValue"),null,300);
            setPorytraitAssets_(displayManager_.getText("frTotWonLabel"),null,1020);
            setPorytraitAssets_(displayManager_.getText("frTotWonValue"),null,1020);

            //top FS
            setPorytraitAssets_(displayManager_.getText("fsAdditionalT"),true,1167,167);
            setPorytraitAssets_(displayManager_.getText("fsAdditionalT1"),true,1176,100);
            setPorytraitAssets_(displayManager_.getText("fsAdditionalT2"),true,1176,333);
            setPorytraitAssets_(displayManager_.getText("fsAdditionalT3"),true,1177,225);

            setPorytraitAssets_(displayManager_.getText("fsAdditional"),true,160,230);
            //bottom FS
            setPorytraitAssets_(displayManager_.getText("fsLabel"),true,100,207);
            setPorytraitAssets_(displayManager_.getText("fsValue"),true,100,222);
            setPorytraitAssets_(displayManager_.getText("fsmultT"),true,100,294);
            setPorytraitAssets_(displayManager_.getText("fsMultValue"),true,100,316);
            setPorytraitAssets_(displayManager_.getText("totWonLabel"),true,100,132);
            setPorytraitAssets_(displayManager_.getText("totWonValue"),true,100,147);
            setPorytraitAssets_(displayManager_.getGroup("freeSpins").box1.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("freeSpins").box2.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("freeSpins").box3.children[0],true);

            //----
            //preview
            setPorytraitAssets_(displayManager_.getGroup("preview").bgmsg.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("preview").logo.children[0],false);
            setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview1.children[0],true,displayManager.groups.preview.graphAsset.bgPreview1.x ,displayManager.groups.preview.graphAsset.bgPreview1.y);
            setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview2.children[0],true,displayManager.groups.preview.graphAsset.bgPreview2.x ,displayManager.groups.preview.graphAsset.bgPreview2.y);
            setPorytraitAssets_(displayManager_.getGroup("preview").children[4],null,null,displayManager.groups.preview.checkbox.y);
            setPorytraitAssets_(displayManager_.getGroup("preview").children[5],null,null,displayManager.groups.preview.checkbox.y);
            setPorytraitAssets_(displayManager_.getGroup("preview").children[6],null,null,displayManager.groups.preview.checkbox.y);
            setPorytraitAssets_(displayManager_.getGroup("preview").children[7],null,null,displayManager.groups.preview.buttons.closePreview.y);

        }

        setMask_();
        moveAnchor_();
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
            var fs = (freeSpinsManager_.getIsInFs()) ? "FS" : "";
            if(flag==true ||  (previewManager_!=undefined && previewManager_.getClosed()==false)){
                displayManager_.getGroup("preview").visible = !flag;
            }
            if (previewManager_.getClosed()==false && flag ==false)return;
            displayManager_.getGroup("bg" + fs).visible = !flag;
            if (displayManager_.getGroup("mask" + fs).bg2) displayManager_.getGroup("mask" + fs).bg2.visible = !flag;
            if (displayManager_.getGroup("mask" + fs).bg3) displayManager_.getGroup("mask" + fs).bg3.visible = !flag;
            displayManager_.getGroup("mask" + fs).visible = !flag;
            displayManager_.getGroup("frame" + fs).visible = !flag;
            displayManager_.getGroup("wins" ).visible = !flag;

            if (fs == "" || flag == true)displayManager_.getGroup("logo").visible = !flag;
            if (fs == "" && flag == true)displayManager_.getGroup("freeRounds").visible = !flag;
            if (fs == "" && freeRoundsManager_.getIsInFr() && flag==false){
                displayManager_.getGroup("freeRounds").visible = !flag;
            }
            displayManager_.getGroup("reels").visible = !flag;
            displayManager_.getGroup("freeSpins").visible=false;
            if (fs == "FS") displayManager_.getGroup("freeSpins").visible = !flag;
            if (fs == "FS") displayManager_.getGroup("freeSpinAccumulatorFs").visible = !flag;
            if (fs == "" || flag == true) {

                displayManager_.getGroup("freeSpinAccumulator").visible = !flag;
            }

            displayManager_.getGroup("centralWin").visible = !flag;
            displayManager_.getGroup("winGlow").visible = !flag;
            displayManager_.getGroup("centralLineWin").visible = !flag;
            displayManager_.getGroup("winWays").visible = !flag;
            displayManager_.getGroup("buyFeature").visible = !flag;//



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
        if (flag==false && fs=="FS"){
            displayManager_.getGroup("logo").visible = false;
            displayManager_.getGroup("bg").visible=false;
            displayManager_.getGroup("mask").visible=false;
            displayManager_.getGroup("frame").visible=false;
            displayManager_.getGroup("bgFS").visible=true;
            displayManager_.getGroup("frameFS").visible=true;
            displayManager_.getGroup("maskFS").visible=true;
            displayManager_.getGroup("freeSpinAccumulator").visible=false;
            displayManager_.getGroup("freeSpinAccumulatorFs").visible=true;
            displayManager_.getGroup("buyFeature").visible=false;

            if (getOrientation()=="portrait") {
                //displayManager_.getGroup("winWays").x = -1050;
                //displayManager_.getGroup("winWays").y = 250;
            }
        }else if (flag==false ) {
            displayManager_.getGroup("logo").visible = true;
            displayManager_.getGroup("bg").visible=true;
            displayManager_.getGroup("mask").visible=true;
            displayManager_.getGroup("frame").visible=true;
            displayManager_.getGroup("bgFS").visible=false;
            displayManager_.getGroup("frameFS").visible=false;
            displayManager_.getGroup("maskFS").visible=false;
            displayManager_.getGroup("freeSpinAccumulator").visible=true;
            displayManager_.getGroup("freeSpinAccumulatorFs").visible=false;
            displayManager_.getGroup("buyFeature").visible=true;
            displayManager_.getGroup("freeSpins").visible=false;
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
    }

    function resume_(){
        //display manager levels
        displayManager_.getGroup("bg").visible = true;
        displayManager_.getGroup("mask").visible = true;
        displayManager_.getGroup("frame").visible = true;
        displayManager_.getGroup("logo").visible = true;
        displayManager_.getGroup("freeSpinAccumulator").visible = true;
        displayManager_.getGroup("winWays").visible = true;
        displayManager_.getGroup("reels").visible = true;

        if(!framework.getSettings().getHelpOnLoad())displayManager_.getGroup("buttonFg").visible=false;
        if (previewManager_.getClosed()) {
            //If "NEW_UI"
            if (ReelConfig.newUI && framework.isTouch()) {
                window.newUI.onPreview.dispatch(false) //Dispatch onPreview
            }
        }
        collected_=communicationManager_.getResumeStatus().status.collected;
        var exp= communicationManager_.getResumeStatus().status.expand;
        wildManager_.resumeWildReel();

        //guyin
        if (buyFeatureEnabled_()) {
            buttonBF_ = new Phaser.Button(game_, displayManager.groups.buyFeature.buttons.buyFeature.x, displayManager.groups.buyFeature.buttons.buyFeature.y, displayManager.groups.buyFeature.buttons.buyFeature.name, me[displayManager.groups.buyFeature.buttons.buyFeature.evt], this, 1,2,0,0 );
            buttonBF_.anchor.set(0.5, 0.5);

            var t = new Phaser.Text(game_,displayManager.groups.buyFeature.buttons.buyFeature.texts.txt.x , displayManager.groups.buyFeature.buttons.buyFeature.texts.txt.y,  Translate.do(displayManager.groups.buyFeature.buttons.buyFeature.texts.txt.text), {
                font: displayManager.groups.buyFeature.buttons.buyFeature.texts.txt.font,
                fill: displayManager.groups.buyFeature.buttons.buyFeature.texts.txt.fill
            });

            t.align="center";
            t.lineSpacing=-10;
            t.anchor.set(0.5, .5);
            buttonBF_.addChild(t);

            displayManager_.getGroup("buyFeature").add(buttonBF_);
        }else{
            // if (framework.isTouch()==true) {
            //     displayManager_.getGroup("freeSpinAccumulator").y = displayManager_.getGroup("freeSpinAccumulator").y - 30;
            // }else{
            //     displayManager_.getGroup("freeSpinAccumulator").y = displayManager_.getGroup("freeSpinAccumulator").y - 60;
            // }

        }

        gcmCalls_("STAKE",balanceManager_.getCoinValue());
        displayManager_.getGroup("freeSpinAccumulator" )["anchorIn"].children[0].visible=true;
        if (!framework.isTouch()) {
            displayManager_.getGroup("freeSpinAccumulator")["anchorIn"].children[0].animations.add("anim");
            displayManager_.getGroup("freeSpinAccumulator")["anchorIn"].children[0].animations.play("anim", 24, false, false);
        }
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
            sucessiveWin_=(communicationManager_.getResumeStatus().status.numTumbles!=undefined)?communicationManager_.getResumeStatus().status.numTumbles:0;
            anchorPos_=sucessiveWin_;

            lineManager_.resumeTumbling(communicationManager_.getResumeStatus(),false);
            //if (sucessiveWin_>0)moveSideMeter_(true);
            messageBox_.showMessage("game", "A free tumble has been interrupted", "Press Spin to continue", startTumble_);
            bResume_=true;
            if (sucessiveWin_>0) {//resume prev anchors on base game only
                for (var i=1;i<=sucessiveWin_;i++) {
                    if (i<8) {
                        var anchor = displayManager_.getGroup("freeSpinAccumulator")["anchor" + i + "_In"].children[0];
                        anchor.visible = true;
                        anchor.animations.add("anim");
                        anchor.animations.play("anim", 36, false, false);
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
            //f1x2.GcmError(-3);
            freeSpinsManager_.parse(communicationManager_.getResumeStatus());
            buttonManager_.applyState("NHFS");
            buttonManager_.applyHide();
            freeRoundsManager_.frChecker();

            multiplier_=(communicationManager_.getResumeStatus().status.multiplier!=undefined)?communicationManager_.getResumeStatus().status.multiplier:0;
            sucessiveWin_=(communicationManager_.getResumeStatus().status.numTumbles!=undefined)?communicationManager_.getResumeStatus().status.numTumbles:0;
            anchorPos_=sucessiveWin_
            //if (multiplier_>0)moveSideMeterFS_(true);
            lineManager_.resumeTumbling(communicationManager_.getResumeStatus(),true);
            displayManager_.getGroup("freeSpinAccumulatorFs").visible = true;
            displayManager_.getGroup("freeSpinAccumulator").visible = false;
            if (sucessiveWin_>=0) {//resume prev anchors on base game only
                displayManager_.getGroup("freeSpinAccumulatorFs")["fsPosLS-1" ].children[0].visible=true;
                if (sucessiveWin_>0) {
                    displayManager_.getGroup("freeSpinAccumulatorFs")["fsPos" + Math.min(sucessiveWin_,4)].children[0].visible = true;
                    displayManager_.getGroup("freeSpinAccumulatorFs")["fsPos" + Math.min(sucessiveWin_,4)].children[0].animations.add("anim");
                    displayManager_.getGroup("freeSpinAccumulatorFs")["fsPos" + Math.min(sucessiveWin_,4)].children[0].animations.play("anim", 36, false, false);
                }
            }else{
                displayManager_.getGroup("freeSpinAccumulatorFs")["fsPos1" ].children[0].visible=true;
                displayManager_.getGroup("freeSpinAccumulatorFs")["fsPosLS" + Math.max(sucessiveWin_ ,-4)].children[0].visible=true;
                displayManager_.getGroup("freeSpinAccumulatorFs")["fsPosLS" + Math.max(sucessiveWin_ ,-4) ].children[0].animations.add("anim");
                displayManager_.getGroup("freeSpinAccumulatorFs")["fsPosLS" + Math.max(sucessiveWin_ ,-4) ].children[0].animations.play("anim", 36, false, false);
            }
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
            buttonManager_.applyState("NHFS");
            buttonManager_.applyHide();
            freeRoundsManager_.frChecker();

            multiplier_=(communicationManager_.getResumeStatus().status.multiplier!=undefined)?communicationManager_.getResumeStatus().status.multiplier:0;
            sucessiveWin_=(communicationManager_.getResumeStatus().status.numTumbles!=undefined)?communicationManager_.getResumeStatus().status.numTumbles:0;
            displayManager_.getGroup("freeSpinAccumulatorFs").visible = true;
            displayManager_.getGroup("freeSpinAccumulator").visible = false;
            if (sucessiveWin_>=0) {//resume prev anchors on base game only
                displayManager_.getGroup("freeSpinAccumulatorFs")["fsPosLS-1" ].children[0].visible=true;
                if (sucessiveWin_>0) {
                    displayManager_.getGroup("freeSpinAccumulatorFs")["fsPos" + Math.min(sucessiveWin_,4)].children[0].visible = true;
                    displayManager_.getGroup("freeSpinAccumulatorFs")["fsPos" + Math.min(sucessiveWin_,4)].children[0].animations.add("anim");
                    displayManager_.getGroup("freeSpinAccumulatorFs")["fsPos" + Math.min(sucessiveWin_,4)].children[0].animations.play("anim", 36, false, false);
                }
            }else{
                displayManager_.getGroup("freeSpinAccumulatorFs")["fsPos1" ].children[0].visible=true;
                displayManager_.getGroup("freeSpinAccumulatorFs")["fsPosLS" + Math.max(sucessiveWin_ ,-4)].children[0].visible=true;
                displayManager_.getGroup("freeSpinAccumulatorFs")["fsPosLS" + Math.max(sucessiveWin_ ,-4) ].children[0].animations.add("anim");
                displayManager_.getGroup("freeSpinAccumulatorFs")["fsPosLS" + Math.max(sucessiveWin_ ,-4) ].children[0].animations.play("anim", 36, false, false);
            }
            freeSpinsManager_.resumeFs();

            messageBox_.showMessage("game", "You have unused Free Spins", "Press Spin to continue", startResumeFs_);
            bResume_=true;
        }else{

            buttonManager_.applyRestore();
            buttonManager_.applyState("NH");
            freeRoundsManager_.frChecker();

            //soundManager_.playBgSound("bgSlot");

            //play clover bg
            sucessiveWin_=(communicationManager_.getResumeStatus().status.numTumbles!=undefined)?communicationManager_.getResumeStatus().status.numTumbles:0;

        }
        onGame_=true;
        framework.showFramework();
        displayManager_.getGroup("buttonFg").visible=true;
        setPortrait_((getOrientation()=="portrait")?true:false);

    }

    function moveLockedReels_(resume){

    }

    function moveAnchorToZero_(){
        if (freeSpinsManager_.getIsInFs()==false || sucessiveWin_<0)return;
        var fs= "Fs";
        var portraitChild=(getOrientation()=="portrait")?1:0;
        displayManager_.getText("fsAdditionalT3").visible=false
        if (sucessiveWin_>0) {
            sucessiveWin_=0;
            clearTimeout(quiteSpinMusic);
            for (var i = 1; i <= 4; i++) {
                var anchor = displayManager_.getGroup("freeSpinAccumulator" + fs)["fsPos" + i].children[portraitChild];
                if (anchor==undefined)return;
                if (anchor.visible == true) {
                    anchor.visible = false;
                    if (anchor.animations.frame != undefined) anchor.animations.frame = 0;
                }
                var anchor = displayManager_.getGroup("freeSpinAccumulator" + fs)["fsPosLS-" + i].children[portraitChild];
                if (anchor.visible == true) {
                    anchor.visible = false;
                    if (anchor.animations.frame != undefined) anchor.animations.frame = 0;
                }
            }
            displayManager_.getGroup("freeSpinAccumulator" + fs)["fsPos1"].children[portraitChild].visible = true;
            displayManager_.getGroup("freeSpinAccumulator" + fs)["fsPos1"].children[portraitChild].animations.frame = 0;
            displayManager_.getGroup("freeSpinAccumulator" + fs)["fsPosLS-1"].children[portraitChild].visible = true;
            displayManager_.getGroup("freeSpinAccumulator" + fs)["fsPosLS-1"].children[portraitChild].animations.frame = 0;
            soundManager_.playSound("anchor_deactivate");
        }else{
            displayManager_.getGroup("freeSpinAccumulator" + fs)["fsPos1"].children[portraitChild].visible = true;
            displayManager_.getGroup("freeSpinAccumulator" + fs)["fsPos1"].children[portraitChild].animations.frame = 0;
            displayManager_.getGroup("freeSpinAccumulator" + fs)["fsPosLS-1"].children[portraitChild].visible = true;
            displayManager_.getGroup("freeSpinAccumulator" + fs)["fsPosLS-1"].children[portraitChild].animations.frame = 0;

        }
        anchorPos_=sucessiveWin_;
    }

    function moveAnchor_(){
        var arr=[];
        var index=0;
        var fps =24;
        var audioLevel=[];
        var fs= (freeSpinsManager_.getIsInFs()==true)?"Fs":"";
        var portraitChild=(getOrientation()=="portrait")?1:0;
        audioLevel[1]=.4;
        audioLevel[2]=.4;
        audioLevel[3]=.5;
        audioLevel[4]=.5;
        audioLevel[5]=.5;

        displayManager_.getText("fsAdditional").setText("");
        console.log("move anchot " + sucessiveWin_);

        if (sucessiveWin_!= anchorPos_ ){
            if (freeSpinsManager_.getIsInFs()==true){
                if (sucessiveWin_>0){
                    if (sucessiveWin_<=4) {
                        for (var i = 1; i <= 4; i++) {
                            var anchor = displayManager_.getGroup("freeSpinAccumulator" + fs)["fsPosLS-" + i].children[portraitChild];
                            anchor.visible = false;
                            if (anchor.animations.frame != undefined) anchor.animations.frame = 0;

                            anchor = displayManager_.getGroup("freeSpinAccumulator" + fs)["fsPos" + i].children[portraitChild];
                            anchor.visible = false;
                            if (anchor.animations.frame != undefined) anchor.animations.frame = 0;
                        }
                        displayManager_.getGroup("freeSpinAccumulator" + fs)["fsPosLS-1"].children[portraitChild].visible = true;
                        anchor = displayManager_.getGroup("freeSpinAccumulator" + fs)["fsPos" + sucessiveWin_].children[portraitChild];
                        anchor.visible = true;
                        anchor.animations.add("anim");
                        anchor.animations.play("anim", fps, false, false, fsWinCloverAnim_);
                        soundManager_.playSound("anchor_activate" + Math.min(Number(sucessiveWin_), 4));
                        if (sucessiveWin_ > 1 && i > lastSound_ && soundManager_.getBGSound("bgSlot" + i) != undefined && freeSpinsManager_.getIsInFs() == false) {
                            soundManager_.playAdditionalBgSound_("bgSlot" + i);
                            if (soundManager_.getBGSound("bgSlot" + i) != undefined) soundManager_.getBGSound("bgSlot" + i).fadeInBgSoundExternal(500, audioLevel[(i)], soundManager_.getBGSound("bgSlot").getSound().currentTime, null);
                            lastSound_ = i;
                        }
                    }
                    if (sucessiveWin_ > 3) {
                        displayManager_.getText("fsAdditionalT3").visible = true;
                        displayManager_.getText("fsAdditionalT3").setText("+" + (Number(sucessiveWin_) - 2).toString());
                        TweenMax.to(displayManager_.getText("fsAdditionalT3").scale, .3, {
                            x: 1.5,
                            y: 1.5,
                            ease: Bounce.easeOut,
                            onComplete: bounce1,
                            onCompleteParams: [displayManager_.getText("fsAdditionalT3")]
                        });
                    } else {
                        displayManager_.getText("fsAdditionalT3").visible = false
                    }
                }else if (sucessiveWin_==0){
                    displayManager_.getText("fsAdditionalT3").visible=false;
                    console.log("CT "+quiteSpinMusic)
                    clearTimeout(quiteSpinMusic);
                    for (var i = 1; i <= 4; i++) {
                        var anchor = displayManager_.getGroup("freeSpinAccumulator" + fs )["fsPos" + i].children[portraitChild];
                        if (anchor.visible == true) {
                            anchor.visible=false;
                            if(anchor.animations.frame!=undefined)anchor.animations.frame=0;
                        }
                        var anchor = displayManager_.getGroup("freeSpinAccumulator" + fs )["fsPosLS-" + i].children[portraitChild];
                        if (anchor.visible == true) {
                            anchor.visible=false;
                            if(anchor.animations.frame!=undefined) anchor.animations.frame=0;
                        }
                    }
                    displayManager_.getGroup("freeSpinAccumulator" + fs )["fsPos1" ].children[portraitChild].visible=true;
                    displayManager_.getGroup("freeSpinAccumulator" + fs )["fsPos1" ].children[portraitChild].animations.frame=0;
                    displayManager_.getGroup("freeSpinAccumulator" + fs )["fsPosLS-1" ].children[portraitChild].visible=true;
                    displayManager_.getGroup("freeSpinAccumulator" + fs )["fsPosLS-1" ].children[portraitChild].animations.frame=0;
                    soundManager_.playSound("anchor_deactivate");
                }else if (sucessiveWin_<0){
                    if (sucessiveWin_>=-4) {
                        for (var i = 1; i <= 4; i++) {
                            var anchor = displayManager_.getGroup("freeSpinAccumulator" + fs)["fsPosLS-" + i].children[portraitChild];
                            anchor.visible = false;
                            if (anchor.animations.frame != undefined) anchor.animations.frame = 0;

                            anchor = displayManager_.getGroup("freeSpinAccumulator" + fs)["fsPos" + i].children[portraitChild];
                            if (anchor.animations.frame != undefined) anchor.animations.frame = 0;
                            anchor.visible = false;
                        }
                        displayManager_.getGroup("freeSpinAccumulator" + fs)["fsPos1"].children[portraitChild].visible = true;

                        soundManager_.playSound("anchor_activate" + Math.max(Number(sucessiveWin_), -4).toString());
                        anchor = displayManager_.getGroup("freeSpinAccumulator" + fs)["fsPosLS" + sucessiveWin_].children[portraitChild];
                        anchor.visible = true;
                        anchor.animations.add("anim");
                        anchor.animations.play("anim", fps, false, false, fsWinCloverAnim_);
                    }
                    if (sucessiveWin_ < -3) {
                        displayManager_.getText("fsAdditionalT3").visible = true;
                        displayManager_.getText("fsAdditionalT3").setText("+" + (Math.abs(Number(sucessiveWin_)) - 2).toString());
                        TweenMax.to(displayManager_.getText("fsAdditionalT3").scale, .3, {
                            x: 1.5,
                            y: 1.5,
                            ease: Bounce.easeOut,
                            onComplete: bounce1,
                            onCompleteParams: [displayManager_.getText("fsAdditionalT3")]
                        });
                    } else {
                        displayManager_.getText("fsAdditionalT3").visible = false
                    }
                }

            }else{//base game
                sucessiveWin_=Math.min(sucessiveWin_,13);
                if (sucessiveWin_>0){
                    for (var i = 1; i <= sucessiveWin_; i++) {
                        if (displayManager_.getGroup("freeSpinAccumulator" + fs)["anchor" + i + "_In"]!=undefined) {
                            var anchor = displayManager_.getGroup("freeSpinAccumulator" + fs)["anchor" + i + "_In"].children[portraitChild];
                            if (anchor.visible == false) {
                                anchor.visible = true;
                                anchor.animations.add("anim");
                                anchor.animations.play("anim", fps, false, false, fsWinCloverAnim_, anchor);
                                soundManager_.playSound("leaves" + sucessiveWin_);
                            }
                        }
                        if (sucessiveWin_ > 1 && i>lastSound_ && soundManager_.getBGSound("bgSlot" + i) != undefined && freeSpinsManager_.getIsInFs() == false) {
                            soundManager_.playAdditionalBgSound_("bgSlot" + i);
                            if(soundManager_.getBGSound("bgSlot" + i)!=undefined)soundManager_.getBGSound("bgSlot" + i).fadeInBgSoundExternal(500, audioLevel[(i)], soundManager_.getBGSound("bgSlot").getSound().currentTime, null);
                            lastSound_ = i;
                        }
                    }

                }else{
                    console.log("CT "+quiteSpinMusic)
                    clearTimeout(quiteSpinMusic);
                    for (var i = 1; i < 5; i++) {
                        if (i<=8) {
                            var anchor = displayManager_.getGroup("freeSpinAccumulator" + fs)["anchor" + i + "_In"].children[portraitChild];
                            if (anchor.visible == true) {
                                var revFrames=[];
                                for (var b = 1;b < anchor.animations._outputFrames.length; b++) {
                                    revFrames.push(b);
                                }
                                revFrames.reverse();
                                anchor.animations.add("animRev",revFrames);
                                if (i<=7) {
                                    anchor.animations.play("animRev", fps, false, false, fsWinCloverOut_, anchor);
                                }
                                if (soundManager_.getBGSound("bgSlot" + i) != null && freeSpinsManager_.getIsInFs()==false) soundManager_.getBGSound("bgSlot" + i).fadeOutBgSound((i==1)?1:1000);
                                if(freeSpinsManager_.getIsInFs()==false)lastSound_=0;
                            }
                            if (i==8){
                                var anchor = displayManager_.getGroup("freeSpinAccumulator" + fs )["fsPos" + i + "_On"].children[portraitChild];
                                if (anchor.visible == true) {
                                    anchor.visible=false;
                                    anchor = displayManager_.getGroup("freeSpinAccumulator" + fs )["fsPos" + i + "_Off"].children[portraitChild];
                                    anchor.visible=true;
                                    if (soundManager_.getBGSound("bgSlot" + i) != null && freeSpinsManager_.getIsInFs()==false) soundManager_.getBGSound("bgSlot" + i).fadeOutBgSound((i==1)?1:1000);
                                    if(freeSpinsManager_.getIsInFs()==false)lastSound_=0;
                                }
                            }
                        }else{
                            var anchor = displayManager_.getGroup("freeSpinAccumulator" + fs )["fsPos" + i + "_On"].children[portraitChild];
                            if (anchor.visible == true) {
                                anchor.visible=false;
                                anchor = displayManager_.getGroup("freeSpinAccumulator" + fs )["fsPos" + i + "_Off"].children[portraitChild];
                                anchor.visible=true;
                                if (soundManager_.getBGSound("bgSlot" + i) != null && freeSpinsManager_.getIsInFs()==false) soundManager_.getBGSound("bgSlot" + i).fadeOutBgSound((i==1)?1:1000);
                                if(freeSpinsManager_.getIsInFs()==false)lastSound_=0;
                            }

                        }
                    }
                    soundManager_.playSound("anchor_deactivate");
                }
            }
        }

        anchorPos_=sucessiveWin_;
    }

    function bounce1(txt){
        TweenMax.to(txt.scale,.4,{delay:1,x:1,y:1,ease:Bounce.easeOut});
    }


    function updateAddFsEvent_(par){
        updateAddFs_(par[0],par[1],par[2]);
    }

    function updateAddFs_(num,tot,won){
        displayManager_.getText("fsAdditionalT3").visible=false;
        if(getOrientation()=="portrait"){
            displayManager_.getText("fsAdditionalT3").x=562;
            displayManager_.getText("fsAdditionalT3").y=618;
        }else{
            displayManager_.getText("fsAdditionalT3").x=1177;
            displayManager_.getText("fsAdditionalT3").y=225;
        }

        var w=Number(tot);
        decreaseVolumeBG_(2500);
        displayManager_.getText("fsAdditional").setText("+" + num);
        //displayManager_.getText("fsMultValueBig").y=-200;
        displayManager_.getText("fsAdditional").alpha=0;
//        displayManager_.getGroup("freeSpinAccumulatorFs").bg2.children[0].visible=false;
        soundManager_.playSound("additionalFs");
        if (won>0){
            w=(Number(tot) -1  );
        }
        TweenMax.to(displayManager_.getText("fsAdditional"),0,{alpha:1})
        TweenMax.to(displayManager_.getText("fsAdditional").scale,.4,{y:1.1,x:1.1,yoyo:true,repeat:3});
        TweenMax.to(displayManager_.getText("fsAdditional").scale,.3,{delay:.4,y:1,x:1,onComplete:updateNumber_,onCompleteParams:[w]});

        setTimeout(restoreFSAnchor_,2000);

    }

    function updateNumber_(tot){
        freeSpinsManager_.fsWon(Number(tot));
        wonFs_=0;//so it won't show again
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
                    soundManager_.getBGSound("bgSlot" + 1).fadeInBgSoundExternal(100, 1, soundManager_.getBGSound("bgSlot").getSound().currentTime, null);
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
        obj.frame=0;
        obj.visible=false;
    }

    function fsWinCloverAnim_(obj){
    }

    function fsWinCloverOut_(obj){
        obj.frame=0;
        obj.visible=false;
    }

    function removeReverseSkull_(obj){
        if (obj==null)return;
        obj.frame=0;
        obj.visible=false;
    }

    function decreaseVolumeBG_(fadeT_O_){
        console.log("decrease vol "+ lastSound_)
        if(freeSpinsManager_.getIsInFs())lastSound_=7;
        fadeBg_=true;
        clearTimeout(iFadeT_O_);
        if (lastSound_>0) {
            for (var a = 1; a <= lastSound_; a++) {
                if(soundManager_.getBGSound("bgSlot" + a)!=undefined )soundManager_.getBGSound("bgSlot" + a).fadeOutBgSoundExternal(500, (freeSpinsManager_.getIsInFs()?.4:.45));
            }
        }

        if (fadeT_O_!=null){
            soundManager_.getBGSound("bgSlot").fadeOutBgSoundExternal(500,.1);
            fadeBg_=false;
            iFadeT_O_ = setTimeout(increaseVolumeBG_, fadeT_O_,true);
        }
    }

    function increaseVolumeBG_(force){
        console.log("Increase vol "+ lastSound_)
        var audioLevel=[];
        audioLevel[1]=.5;
        audioLevel[2]=.5;
        audioLevel[3]=.5;
        audioLevel[4]=.5;
        audioLevel[5]=.5;
        var audioDelay=[];
        audioDelay[1]=5;
        audioDelay[2]=5;
        audioDelay[3]=2;
        audioDelay[4]=2;
        audioDelay[5]=2;
        if (fadeBg_ || force) {
            soundManager_.getBGSound("bgSlot").fadeInBgSoundExternalJustVol(500,.5);
            fadeBg_=false;
            if (lastSound_>0) {
                for (var a = 1; a <= lastSound_; a++) {
                    if(soundManager_.getBGSound("bgSlot" + a)!=undefined)soundManager_.getBGSound("bgSlot" + a).fadeInBgSoundExternalJustVol(1000, audioLevel[a]);
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
        //setTimeout(realDoSpin_,3000,[false]);
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
        if (buttonManager_.getButton(frameworkSettings.buttons.spinButton.id).isEnable()==true && isTumbling_==false && canSpin_==true && (displayManager_.getGroup("fsWonPanel")== undefined || displayManager_.getGroup("fsWonPanel").visible==false)) {
            soundManager_.playSound("spinClick");
            realDoSpin_([false]);
        }else {
            return false;
        }
    }

    function endSpinAnim_(){
    }


    function realDoSpin_(swipe){//swipte=array
        console.log("realDoSpin_"+spinning_)
        if(spinning_ && gotErrorInAp_==false)return;
        if(!onGame_)return;
        if (respin_)eventManager_.clearEvt();
        if(messageOn_==false) {
            gcmCalls_("PAID", 0); //was in enable button but for some race condition it was resetting the FS win
            displayManager_.getText("lineWin").alpha=0;
            buyIn_=false;
            spinning_ = true;
            stopped_=false;
            updateLockedReels_=false;
            placeMashroomWilds_=false;
            placemWildsMults_=false;
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

                if (!freeSpinsManager_.getIsInFs())me.resetSuccessiveWinning();
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
                displayManager_.getGroup("wild").removeAll();
                displayManager_.getGroup("wild").removeAll();
                if (!bResume_)moveAnchorToZero_();
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
                if (bResume_ && sucessiveWin_>0 && freeSpinsManager_.getIsInFs() )bskipSideMeterUpdt=true;
                bResume_=false;
                respin_=false;
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
            numTumbles=0;
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

            if (placeMashroomWilds_ || placemWildsMults_){
                eventManager_.addEvent( playTriggeredSmb_,0);
                eventManager_.addEvent(fakeEvent_,2200);
            }else if (placingWildsMults_){
                eventManager_.addEvent(fakeEvent_,2200);
                placingWildsMults_=false;
            }

            //wilds and wins
            wildManager_.endAnimHandle((winManager_.getWildNum() > 0) ? winManager_.getWildSimbs() : null, eventManager_);

            if (won>0){
                if(displayManager_.getText("lineWin")!=undefined)displayManager_.getText("lineWin").alpha=0;
                lineCompletion_=false;
                buttonManager_.applyState("AFTERSPIN");
               lineManager_.endAnimHandle(winManager_.getAllWinsSorted(), eventManager_);
            }else{
                var ret= checkAdditionalFs_();
                if (ret)eventManager_.addEvent(fakeEvent_,1000);
                freeRoundsManager_.updateFreeRoundsTot();
                eventManager_.addEvent(fsEval_, (freeSpinsManager_.getIsInFs()==true && freeSpinsManager_.getFsNumber() ==0)?2000: 100);
            }

            freeSpinsManager_.endAnimHandle(eventManager_);

            if (freeRoundsManager_.getIsInFr() == true && freeSpinsManager_.getIsInFs() == false) {//no add delay during nested FS
                eventManager_.addEvent(fakeEvent_, (won) ? lineManager_.getTotalDuration() : 0);
            }
            eventManager_.triggerEvt();

        }else{
            setTimeout(spinAnimEndAfterTumbling_,100);
        }
    }

    function evaluateWinnings_(){
        wonFs_=0;
        //start bonus if needed, displays all winnings (also called after bonus to display lines winnings), after winnings call the autoplay and freespins evaluator
        lineManager_.clearLine();
        eventManager_.clearEvt();
        startRandomMessages_();
        logger("NO bonus found ")
//        wildManager_.endAnimHandle((winManager_.getWildNum()>0)?winManager_.getWildSimbs():null, eventManager_);
        collected_=spinManager_.getSpinResp().status.collected;
        if (stopped_==false && mwCounterTW_!=null){
            mwCounterTW_.timeScale(8);
            mwCounterTW_=null
        }
        // //saving datas for additional FS that animate after tumble
        // if (spinManager_.getFsResp()!=undefined) {
        //     fsNum_ = (spinManager_.getFsResp().num != undefined) ? spinManager_.getFsResp().num : 0;
        //     wonFs_ = (spinManager_.getFsResp().object != undefined && spinManager_.getFsResp().object.wonAdditionalSpins != undefined) ? spinManager_.getFsResp().object.wonAdditionalSpins : 0;
        // }

        var ret= checkAdditionalFs_();
        if (won>0 ) {
            if (spinManager_.getFsResp()==false && bskipSideMeterUpdt==false)sucessiveWin_=0;
            if (placeMashroomWilds_){
                eventManager_.addEvent( playTriggeredSmb_,0);
                eventManager_.addEvent(fakeEvent_,2200);
            }

            lineManager_.endAnimHandle(winManager_.getAllWinsSorted(), eventManager_);
            freeSpinsManager_.endAnimHandle(eventManager_);
            if (freeRoundsManager_.getIsInFr()==true && freeSpinsManager_.getIsInFs() == false ){//no add delay during nested FS
                eventManager_.addEvent(fakeEvent_,(won)?lineManager_.getTotalDuration():0);
            }

        } else {
            if (spinManager_.getFsResp() && bskipSideMeterUpdt==false)me.resetSuccessiveWinning();
            freeSpinsManager_.endAnimHandle(eventManager_);
            balanceManager_.setCanUpdate(true);
        }
        bskipSideMeterUpdt=false;
        if (ret)eventManager_.addEvent(fakeEvent_,1000);
        buttonManager_.applyState("AFTERSPIN");
        lineCompletion_=true;
        spinning_=false;
        if ((won<=0 && freeSpinsManager_.getType()!="convert" && freeSpinsManager_.getType()!="tumble" )  ) {
            eventManager_.addEvent(fsEval_, (freeSpinsManager_.getIsInFs()) ? (freeSpinsManager_.getFsNumber() == 0)? 3500:1500 : 100);
        }
        eventManager_.triggerEvt();
    }

    function checkAdditionalFs_(){
        var ret=false;
        //saving datas for additional FS that animate after tumble
        if (spinManager_.getFsResp()!=undefined) {
            fsNum_ = (spinManager_.getFsResp().num != undefined) ? spinManager_.getFsResp().num : 0;
            wonFs_ = (spinManager_.getFsResp().object != undefined && spinManager_.getFsResp().object.wonAdditionalSpins != undefined) ? spinManager_.getFsResp().object.wonAdditionalSpins : 0;
            if (spinManager_.getFsResp().object.status!="FREESPINS_TRIGGER" && wonFs_>0){
                soundManager_.playSound("anchor_activate4");
                displayManager_.getText("fsAdditionalT3").setText("+"+  wonFs_);
                TweenMax.to(displayManager_.getText("fsAdditionalT3").scale,.3,{x:1.5,y:1.5,ease:Bounce.easeOut,onComplete:bounce1,onCompleteParams:[displayManager_.getText("fsAdditionalT3")]});
                TweenMax.to(displayManager_.getText("fsAdditionalT3"),1,{x:displayManager_.getText("fsAdditional").x,y:displayManager_.getText("fsAdditional").y,onComplete:updateAddFs_,onCompleteParams:[wonFs_,fsNum_,won]});
                //updateAddFs_(wonFs_,fsNum_,won);
                if(sucessiveWin_<0){
                    if (won) {
                        sucessiveWin_ = 0;
                    }else{
                        sucessiveWin_ = 1;  //reset counter when additional come on the last FS, not winning
                    }
                }
                ret=true;
            }
        }
        return ret;
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
        fs=freeSpinsManager_.getIsInFs();
        fsWon=freeSpinsManager_.getFsWon();
        console.log("fseval")
        if (fsWon  ){
            setTimeout(apEval_,Number(ReelConfig.fsSpinDelay ));
        }else{
            apEval_();
        }
    }

    function apEval_(){
        console.log("apeval")
        if ((won>0 || winManager_.getScatterWinAmt()[0]!=null)){
            setTimeout(enableButton_, 100);
            multiplierManager_.updateMultiplier(true);
        }else{
            enableButton_();
            multiplierManager_.resetMultipliers();
        }
    }

    function enableButton_() {
        console.log("enablebut")
        freeRoundsManager_.updateFreeRoundsTot();
        if (!won) {
            if (freeSpinsManager_.getIsInFs() == false || freeSpinsManager_.getFsNumber() <= 0) {
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
            setTimeout(waitForLineCompletion_,50);
        }
    }

    function startAutoSpin_(par){
        console.log("startap")
        if (autoPlayManager_.getIsInAutoPlay() || fs ) {
            if (autoPlayManager_.getIsFeature()==false || (autoPlayManager_.getStopOnFeature()==false && fs==true)){
                if (autoPlayManager_.getCanAp()==true) {
                    gcmCalls_("ANIMATION_END",null,true);
                    noSleep.enable();
                    if (freeSpinsManager_.getIsInFs()){
                        var tOut= (won>0)?lineManager_.getTotalDuration()-500:500;
                    }else{
                        var tOut= (won>0)?lineManager_.getTotalDuration()-500:100;
                    }

                    if (spinManager_.getFsResp()!=undefined && spinManager_.getFsResp().won!=undefined && spinManager_.getFsResp().won>1){// FS retrigger
                        console.log("ap delay + 2000 FS");
                        tOut+=1500;
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
            setTimeout(autoPlayManager_.showAPMessage,1200,finalizeEnable_);
        }else{
            setTimeout(showApMessage_,200);
        }
    }

    function finalizeEnable_(){
        console.log("final enable")
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
        displayManager_.getText("lineWin").alpha=0;
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
                anchor.frame=0;
                if (soundManager_.getBGSound("bgSlot" + i) != null && freeSpinsManager_.getIsInFs()==false) soundManager_.getBGSound("bgSlot" + i).fadeOutBgSound((i==1)?1:1000);
                if(freeSpinsManager_.getIsInFs()==false)lastSound_=0;
            }
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
        updateLockedReels_=false;

        if (reel==undefined && freeSpinsManager_.getIsInFs()){
            reelLocked_=0;
            isLocking_=false;
            //harp event if new locked reel
            for (var i = 0; i < 6; i++) {
                if(spinManager_.getSpinReelResp().reel[i].smb.length ==7){
                    reelLocked_++;
                }
            }

        }

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
                    if (spinManager_.getSpinReelResp().reel[i].smb[a].smb == 15) { //mushrooming wilds
                        s.reel = i;
                        s.smb = a;
                        s.trigger = true;
                        s.smbN = spinManager_.getSpinReelResp().reel[i].smb[a].smb;
                        s.tnt = false;
                        s.mult =0;
                        spinManager_.addTriggerIcon(s);
                        delayedExplosion = true;
                    }
                    if (spinManager_.getSpinReelResp().reel[i].smb[a].smb == 13) { //mushroom wild
                        s.reel = i;
                        s.smb = a;
                        s.smbN = spinManager_.getSpinReelResp().reel[i].smb[a].smb;
                        s.tnt = true;
                        s.mult =0;
                        s.trigger = true;
                        spinManager_.addTriggerIcon(s);
                        placeMashroomWilds_=true
                    }
                    if (spinManager_.getSpinReelResp().reel[i].smb[a].smb == 11 || spinManager_.getSpinReelResp().reel[i].smb[a].smb == 12 &&  spinManager_.getSpinReelResp().reel[i].smb[a].mult>0){ //multiplier on wilds
                        s.reel = i;
                        s.smb = a;
                        s.smbN = spinManager_.getSpinReelResp().reel[i].smb[a].smb;
                        s.mult = spinManager_.getSpinReelResp().reel[i].smb[a].mult;
                        s.offset=0;(spinManager_.getSpinReelResp().reel[i].smb[a].smb==11)?-5:-40;
                        s.tnt = false;
                        s.trigger = true;
                        spinManager_.addTriggerIcon(s);
                        placemWildsMults_=true
                    }
                }else{
                    spinManager_.getReels()[i].removeSymbol(a);
                }
                // if (spinManager_.getSpinReelResp().reel[i].smb[a].smb==12){
                //     soundManager_.playSound("wildx2");//wild x2 landing sound
                //     TweenMax.to(s.scale,.1,{x: s.scale.x + .07,y:s.scale.y + .07,onComplete:back_,onCompleteParams:[s]});
                // }

            }
        }
        if (i==3){
            if (stopped_ && mwCounterTW_!=null){
                mwCounterTW_.timeScale(5);
                mwCounterTW_=null
            }
        }

        //fix for nonsense overlapping symbols
        for (var j = 0; j < ReelConfig.icons[i]; j++) {
            if (j<15){
                displayManager_.getGroup("reels").children[i].children[j].visible=false;
            }
        }
    }

    function back_(obj){
        TweenMax.to(obj.scale,.1,{x:obj.scale.x - .07,y:obj.scale.y - .07});
    }

    function placeWild_(p){
        //p.visible=false;
        //var s = spinManager_.getReels()[p[2].reel].swapSmb(p[0].smbN, p[2].icon);

        setTimeout(playTriggeredWilds_,200);
        //setTimeout(explosionSound_,600);
    }

    function placeWildIcon_(p){
        p.visible=false;
        var s = spinManager_.getReels()[p[0].reel].replaceIcon2(p[0].smbN, p[0].icon[0]);

        //setTimeout(playTriggeredWilds_,200);
        //setTimeout(explosionSound_,600);
    }

    function playTriggeredSmb_(){
        var iconN=-1;
        var triggerSymbol_=spinManager_.getTriggerIcons();
        var add=false;
        placingWildsMults_=true;

        for (var a in triggerSymbol_){
            if ( triggerSymbol_[a].played==undefined) {
                if (triggerSymbol_[a].tnt==true) {
                    var obj={};
                    obj.type="anim";
                    obj.loop=false;
                    obj.anim= ["timer"];
                    obj.callBack=placeWild_;
                    obj.icon=[];
                    obj.reel=triggerSymbol_[a].reel;
                    obj.smbN=triggerSymbol_[a].smb;
                    obj.icon[0]=triggerSymbol_[a].smbNum;
                    var s = spinManager_.getReels()[triggerSymbol_[a].reel].replaceIcon2(triggerSymbol_[a].smb,obj.icon[0] , obj);

                    s.scale.x=1;
                    s.scale.y=1;
                    add = true;
                    triggerSymbol_[a].played = true;
                }else if (triggerSymbol_[a].mult>0){
                    var mult = game_.add.sprite(0,0, "wildMultiplier");
                    triggerSymbol_[a].addChild(mult);
                    mult.anchor.set(.5, .5);
                    mult.animations.add("anim");
                    mult.animations.play("anim",24, false, true, placeMult_, triggerSymbol_[a]);
                }

            }
        }
        if (add){
            soundManager_.playSound("smbWin_13");
        }
        placeMashroomWilds_ =false;
        placemWildsMults_=false;
    }

    function placeMult_(obj) {
        var mult = game_.add.sprite(obj.x,obj.y, "mult_"+obj.mult);
        mult.anchor.set(.5, .5);
        displayManager_.getGroup("wild").addChild(mult);
    }

    function playTriggeredWilds_(){
        var iconN=-1;
        var triggerSymbol_=spinManager_.getTriggerIcons();
        var add=false;

        for (var a in triggerSymbol_){
            if ( triggerSymbol_[a].played==undefined &&  triggerSymbol_[a].tnt==false && triggerSymbol_[a].mult==0 ) {
                addWilds_(a);
                add = true;
                triggerSymbol_[a].played = true;
            }
        }
        if (add){
            if (add){
                soundManager_.playSound("smbWin_13-growing");
            }
        }
    }

    function wildsSound_(){
        soundManager_.playSound("blast");
    }

    function addWilds_(a){
        var triggerSymbol_=spinManager_.getTriggerIcons();
        var obj={};
        obj.type="anim";
        obj.loop=false;
        obj.anim= ["timer"];
        obj.callBack=placeWildIcon_;
        obj.reel=triggerSymbol_[a].reel;
        obj.icon=[];
        obj.smbN=triggerSymbol_[a].smb;
        obj.icon[0]=15;
        spinManager_.getReels()[triggerSymbol_[a].reel].replaceIcon2(triggerSymbol_[a].smb, 15,obj);
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
        displayManager_.getGroup("logo").visible = false;
        displayManager_.getGroup("bg").visible=false;
        displayManager_.getGroup("mask").visible=false;
        displayManager_.getGroup("frame").visible=false;
        displayManager_.getGroup("bgFS").visible=true;
        displayManager_.getGroup("frameFS").visible=true;
        displayManager_.getGroup("maskFS").visible=true;
        displayManager_.getGroup("freeSpinAccumulator").visible=false;
        displayManager_.getGroup("freeSpinAccumulatorFs").visible=true;
        displayManager_.getGroup("freeSpinAccumulator").visible=false;
        displayManager_.getGroup("freeSpinAccumulatorFs").visible=true;
        displayManager_.getGroup("freeSpinAccumulatorFs").alpha=0;


        TweenMax.to(displayManager_.getGroup("freeSpinAccumulatorFs"),.2,{alpha:1});
        displayManager_.getGroup("freeSpinAccumulatorFs" )["fsPos1"].children[0].visible = true;
        if(!bResume_)displayManager_.getGroup("freeSpinAccumulatorFs" )["fsPos1"].children[0].animations.frame = 0;
        displayManager_.getGroup("freeSpinAccumulatorFs" )["fsPosLS-1"].children[0].visible = true;
        if(!bResume_)displayManager_.getGroup("freeSpinAccumulatorFs" )["fsPosLS-1"].children[0].animations.frame = 0;

        if (framework.isTouch()!=true) {
            displayManager_.getGroup("buyFeature").visible=false;
        }else{
            setPortrait_((getOrientation()=="portrait")?true:false)
        }
        removed_=true;//to place side feature
        if(freeSpinsManager_.getIsInFs()==false)lastSound_=1;
        multiplier_=1;
        multiplierPos_=0;
        if(!bResume_)moveAnchorToZero_();
        buttonManager_.applyState("NH");
    }

    function logoIn_(){
        if (framework.isTouch()) {
            displayManager_.getGroup("logo").visible = true;
            displayManager_.getGroup("bg").visible = true;
            displayManager_.getGroup("mask").visible = true;
            displayManager_.getGroup("frame").visible = true;
            displayManager_.getGroup("bgFS").visible = false;
            displayManager_.getGroup("frameFS").visible = false;
            displayManager_.getGroup("maskFS").visible=false;
            displayManager_.getGroup("freeSpins").visible=false;

            displayManager_.getGroup("freeSpinAccumulator").visible = true;
            displayManager_.getGroup("freeSpinAccumulatorFs").visible = false;
            if (getOrientation()=="landscape") {
                displayManager_.getGroup("winWays").x = 0;
                displayManager_.getGroup("winWays").y = 0;
            }
        }else{
            displayManager_.getGroup("logo").visible = true;
            displayManager_.getGroup("bg").visible = true;
            displayManager_.getGroup("mask").visible = true;
            displayManager_.getGroup("frame").visible = true;
            displayManager_.getGroup("bgFS").visible = false;
            displayManager_.getGroup("frameFS").visible = false;
            displayManager_.getGroup("maskFS").visible=false;
            displayManager_.getGroup("freeSpins").visible=false;

            displayManager_.getGroup("freeSpinAccumulator").visible = true;
            displayManager_.getGroup("freeSpinAccumulatorFs").visible = false;
            displayManager_.getGroup("winWays").y=0;
        }
        displayManager_.getGroup("buyFeature").visible=true;
        for (var i = 1; i <=4; i++) {
            var anchor = displayManager_.getGroup("freeSpinAccumulatorFs" )["fsPosLS-"+i].children[0];
            anchor.visible = false;
            if(anchor.animations.frame!=undefined)anchor.animations.frame=0;

            anchor = displayManager_.getGroup("freeSpinAccumulatorFs" )["fsPos"+i].children[0];
            anchor.visible = false;
            if(anchor.animations.frame!=undefined)anchor.animations.frame=0;
        }
    }

    function fsHideTotPanel_(){
        //TweenMax.to(displayManager_.getGroup("freeSpinAccumulator"),1,{y:0});
        displayManager_.getGroup("logo").visible = true;
        displayManager_.getGroup("freeSpinAccumulator").visible=true;
        displayManager_.getGroup("freeSpinAccumulatorFs").visible=false;
        displayManager_.getGroup("freeSpinAccumulatorFs").alpha=1;
        lastSound_=1;
        lockedReelPos_=0;
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
        multiplierFS_=  Number(json.freeSpin.totalWin>0)?json.freeSpin.multiplier-1:json.freeSpin.multiplier;

        eventManager_.clearEvt();
        freeSpinsManager_.endAnimHandle(eventManager_);
        eventManager_.triggerEvt();
        setTimeout(setSpin_,3000,[json]);
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
            for (var i = 2; i < 7; i++) {
                soundManager_.playAdditionalBgSound_("bgSlot" + i);
                if(soundManager_.getBGSound("bgSlot" + i)!=undefined )soundManager_.getBGSound("bgSlot" + i).fadeInBgSoundExternal(500, 1, soundManager_.getBGSound("bgSlot").getSound().currentTime, null);
            }
            lastSound_ = 3;
            stopRandomMessages_();
            framework.updateSmallMessageText(Translate.do("Bet:") + " " + Translate.do("free spin"));
            communicationManager_.resetResumeStatus();
            spinManager_.setSpinType(swipe[0], swipe[1]);
            freeTumbling_ = false;
            sucessiveWin_=0;
            bResume_ = false;
            setTimeout(parse_,1000,par);
        }else{
            setTimeout(setSpin_,500,par)
        }
        //balanceManager_.bet(betCheckCallBack_);
    }

    function parse_(par){
        par[0].freeSpin.won=0;
        spinManager_.parse(par[0]);
        freeSpinsManager_.updateFreeSpinsNum();
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
                TweenMax.to(displayManager_.getText("fsMultValueBig"),.4,{y:480,ease:Bounce.easeOut,onComplete:bigMult_,onCompleteParams:[m]})
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

        communicationManager_.startForceDemo(id);

        if (forceDemo["win"+id][0].response.startBuyIn!=null && forceDemo["win"+id][0].response.startBuyIn==true){

        }else {
            realDoSpin_(false);
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
        logoIn:logoIn_,
        loadedPortrait:loadedPortrait_,
        hideGame:hideGame_,
        moveLockedReels:moveLockedReels_,
        doBuyFeature:doBuyFeature_,
        getBuyInResponse:getBuyInResponse_,
        startVibrate:startVibrate_,
        startSpinSound:startSpinSound_,
        startForcing:startForcing_,
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
            soundManager_.playAdditionalBgSound_("bgSlot1");
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
            if (sucessiveWin_<0){
                sucessiveWin_=0;
            }
            sucessiveWin_++;
            moveAnchor_();
        },
        resetSuccessiveWinning:function () {
            if (respin_)return;
            if (bResume_)return;
            if (sucessiveWin_>0){
                if(freeSpinsManager_.getIsInFs())
                    sucessiveWin_=0;
                else
                    sucessiveWin_=-1;
            } else if (freeSpinsManager_.getIsInFs()){
                sucessiveWin_=sucessiveWin_-1;
            }
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
            return false;
        },
        getNumTumbles:function(){
            return numTumbles;
        },
        getMultiplier:function(){
            return multiplierFS_;
        },
        getLocked:function(){
            return isLocking_;
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
            realDoSpin_(false)
        },
        logger:function(msg){
            //console.log(msg);
        },
        getEventManager:function () {
            return eventManager_;
        },
        getMultiplier:function () {
            return placingWildsMults_;
        },
        getBuyIn:function(){
            return buyIn_;
        },
        getWasBuyIn:function(){
            return wasInbuyIn_;
        },
    }

    return me;
}