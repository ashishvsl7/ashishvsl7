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
    var planetMask_;
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
    var hasScatter_=false;
    var numFuels=0;
    var pigID=-1;
    var pigValue=0;
    var respin_=false;
    var multiplierFS_=0;
    var isLocking_=false;
    var lf_=null;
    var p_=null;
    var w_=null;
    var splitNumberWaysUpdated_=false;
    var planetInfo_=0;

    function create_() {
        if (framework.isTouch()==true) {
            buttonManager_.applyState("NH");
            framework.hideFramework();
            displayManager_.getGroup("reels").visible = false;
            displayManager_.getGroup("bg").visible = false;
            displayManager_.getGroup("frame").visible = false;
            displayManager_.getGroup("logo").visible = false;
            displayManager_.getGroup("freeSpinAccumulator").visible = false;
        }else{
            displayManager_.getGroup("reels").visible = true;
            displayManager_.getGroup("bg").visible = true;
            displayManager_.getGroup("frame").visible = true;
            displayManager_.getGroup("logo").visible = true;
            displayManager_.getGroup("freeSpinAccumulator").visible = true;
        }
        spinManager_.createReels();
        guiBottomBar_.setBetControlInitialBet(ReelConfig.bet);//todo change this, it's just to apply the default bet
        setMask_();
    }

    function setMask_(){
        if (mask_!=null){
            //game_.stage.remove(mask_);
            mask_.destroy();
            mask_=null;

            planetMask_.destroy();
            planetMask_=null;
        }
        //mask
        mask_ = game_.add.graphics(0, 0);
        mask_.beginFill(0xffffff);
        mask_.drawRect(xMask, yMask, maskWidth* window.devicePixelRatio, maskHeight);

        //mask_.drawRect(xMask, 42, 864, 560);
        displayManager_.getGroup("reels").mask=mask_;


        //mask
        planetMask_ = game_.add.graphics(0, 0);
        planetMask_.beginFill(0xffffff);
        planetMask_.drawRect(-1000,yMask-200, 3000* window.devicePixelRatio, maskHeight+470);

        //mask_.drawRect(xMask, 42, 864, 560);
        displayManager_.getGroup("planets").mask=planetMask_;

    }

    function startVibrate_(duration,repeat,offset){
        var fs= (freeSpinsManager_!=undefined && freeSpinsManager_.getIsInFs())?"FS":"";

        vibration_(displayManager_.getGroup("frame"),duration,repeat,offset);
        vibration_(displayManager_.getGroup("bg"),duration,repeat,offset);
        vibration_(displayManager_.getGroup("harp"),duration,repeat,offset);
        //vibration_(displayManager_.getGroup("freeSpinAccumulator"),duration,repeat,offset);
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
                xRatio_ = scaleW_ / 864;//ratio between the current Width and the reel width to make the reels bigger as the current width (almost....)
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
                    xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(800*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                }else if (scaleW_>760) {//ipad
                    if (xRatio_ > .60) {
                        var factor = 43000;
                        xCompensate = 1 + (xRatio_ - .60 - (scaleW_) / factor);
                        xRatio_ = .60;
                    } else if (xRatio_ > .50) {
                        var factor = 43000;
                        xCompensate = 1 + (xRatio_ - .50 - (scaleW_) / factor);
                        xRatio_ = .50;
                    }
                    yCompensate = 10;
                    xOffset_ = -1 * (ReelConfig.reel.deltaX_0) * xRatio_ + (scaleW_ - (736 * xRatio_ * xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode

                }else{

                    //other devices which for some reason are showing a heigh smaller then expected
                    if (scaleW_==414 && (scaleH_==622|| scaleH_==620)) {
                        xRatio_=xRatio_*.93;
                        xCompensate=1.07;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(790*xRatio_*xCompensate));//  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                    }else if (scaleW_==375 && (scaleH_<=667)){
                        xRatio_=xRatio_*.92;
                        xCompensate=1.08;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(714*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                    }else if (scaleH_<500){
                        xRatio_=xRatio_*.77;
                        xCompensate=1.23;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(700*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                    }else if (scaleH_<600){
                        xRatio_=xRatio_*.85;
                        xCompensate=1.2;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(670*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                    }else if (scaleW_==712 && scaleH_==970){//samsung pad
                        xRatio_=xRatio_*.85;
                        xCompensate=1.2;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(744*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                    }else{
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(724*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                    }
                }
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
                yOffset_ =  -54*xRatio_   // scaleH_- maskHeight - scaleH_/ 2.25;         //change the objects Y position to move on top of the portrait mode UI
                yMask = (72+230-54)*xRatio_;

                adaptPortraitAsset_(displayManager_.getGroup("reels"),xOffset_,yOffset_+230*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("wins"),xOffset_,yOffset_+230*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("wild"),xOffset_,yOffset_+230*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("winGlow"),xOffset_,yOffset_+230*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("logo"),xOffset_+500*xRatio_,yOffset_+120*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("beans"),xOffset_,yOffset_+230*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("freeSpinAccumulatorFs"),xOffset_,yOffset_,xRatio_*1.15);
                adaptPortraitAsset_(displayManager_.getGroup("freeSpins"),xOffset_,yOffset_,xRatio_*1.15);
                adaptPortraitAsset_(displayManager_.getGroup("freeRounds"),xOffset_,yOffset_+248*xRatio_,xRatio_*1.35);
                adaptPortraitAsset_(displayManager_.getGroup("bg"),xOffset_,yOffset_-4*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("frame"),xOffset_,yOffset_-3*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("frameFs"),xOffset_,yOffset_-3*xRatio_,xRatio_);

                adaptPortraitAsset_(displayManager_.getGroup("scatter"),xOffset_,yOffset_+230*xRatio_,xRatio_*1.3);
                adaptPortraitAsset_(displayManager_.getGroup("lockReels"),xOffset_,yOffset_+230*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("freeSpinAccumulator"),xOffset_,yOffset_+230*xRatio_,  xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("harp"),xOffset_,yOffset_+230*xRatio_,  xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("buyFeature"), xOffset_-1235*xRatio_,yOffset_+932*xRatio_,xRatio_*1.7);//-1*( displayManager_.getGroup("idleObjects").children[0].x) + scaleW_/2 ,-1*( displayManager_.getGroup("idleObjects").children[0].y)+20,xRatio_);

                adaptPortraitAsset_(displayManager_.getGroup("centralLineWin"), scaleW_/2* window.devicePixelRatio,yOffset_,xRatio_);

                setPorytraitAssets_(displayManager_.getText("lineWin"),null,null,818);
                adaptPortraitAsset_(displayManager_.getGroup("centralWin"), xOffset_,yOffset_+330*xRatio_ ,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("winWays"), xOffset_,yOffset_+230*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("centralFuntainSmallObj"), xOffset_-245*xRatio_,yOffset_,xRatio_*1.5);
                adaptPortraitAsset_(displayManager_.getGroup("fsWonPanel"),xOffset_,yOffset_+230*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("frWonPanel"),xOffset_,yOffset_+230*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("fsAproachPopup"),xOffset_,yOffset_+230*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("preview"),xOffset_+180*xRatio_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("planets"),xOffset_+600*xRatio_,yOffset_+400*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("msgBox"),xOffset_,yOffset_+230*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("msgBoxFR"),xOffset_,yOffset_+230*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("msgBoxFeature"),xOffset_-130*xRatio_,yOffset_+330*xRatio_,xRatio_*1.2);//-scaleW_/2 +100*xRatio_,0,.55);

                setPorytraitAssets_(displayManager_.getGroup("bg").bg.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("bg").bg.children[1],true,-44);
                setPorytraitAssets_(displayManager_.getGroup("frame").bg.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("frame").bg.children[1],true,-44);

                setPorytraitAssets_(displayManager_.getGroup("frame").bgR1.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("frame").bgR1.children[1],true);
                setPorytraitAssets_(displayManager_.getGroup("frame").bgL1.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("frame").bgL1.children[1],true);

                //FR
                setPorytraitAssets_(displayManager_.getText("frLabel"),null,130);
                setPorytraitAssets_(displayManager_.getText("frValue"),null,130);
                setPorytraitAssets_(displayManager_.getText("frTotWonLabel"),null,800);
                setPorytraitAssets_(displayManager_.getText("frTotWonValue"),null,800);
                setPorytraitAssets_(displayManager_.getGroup("centralLineWin").children[0],null,0);

                //bottom FS
                setPorytraitAssets_(displayManager_.getText("fsLabel"),true,360,765);
                setPorytraitAssets_(displayManager_.getText("fsValue"),true,360,795);
                setPorytraitAssets_(displayManager_.getText("totWonLabel"),true,750,765);
                setPorytraitAssets_(displayManager_.getText("totWonValue"),true,750,795);
                setPorytraitAssets_(displayManager_.getText("fsmultT"),true,460,872);
                setPorytraitAssets_(displayManager_.getText("fsAdditional"),true,380,790);
                setPorytraitAssets_(displayManager_.getText("fsMultValue"),true,465,895);
                setPorytraitAssets_(displayManager_.getText("fsF"),true,640,880);
                setPorytraitAssets_(displayManager_.getText("fsFuel"),true,655,860);

                for (var i =1;i<=9;i++){
                    setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator")["anchor" + i +"_In"].children[0],false);
                    setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator")["anchor" + i +"_In"].children[1],false,640,710);
                    if(displayManager_.getGroup("freeSpinAccumulatorFs")["anchor" + i +"_In"])setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulatorFs")["anchor" + i +"_In"].children[0],false,567,892);
                    if(displayManager_.getGroup("freeSpinAccumulatorFs")["anchorS" + i +"_In"])setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulatorFs")["anchorS" + i +"_In"].children[0],false,567,892);
                }

                for (var i =0;i<=4;i++){
                    if (displayManager_.getGroup("frame")["info_"+i]){
                        displayManager_.getGroup("frame")["info_"+i].children[0].visible=false;
                        displayManager_.getGroup("frame")["info_"+i].children[0].x=640;
                        displayManager_.getGroup("frame")["info_"+i].children[0].y=916;
                    }
                }

                setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").cap.children[0],false);

                setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulatorFs").boxWin.children[0],true,476,890);
                displayManager_.getGroup("freeSpinAccumulatorFs").boxWin.children[0].scale.x=-1;

                setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulatorFs").boxMult.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulatorFs").boxMult.children[1],true,355,795);
                displayManager_.getGroup("freeSpinAccumulatorFs").boxMult.children[1].scale.x=-1;

                setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulatorFs").boxFs.children[0],false,);
                setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulatorFs").boxFs.children[1],true,760,795);
                setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulatorFs").boxFuel.children[0],true,630,890);
                displayManager_.getGroup("freeSpinAccumulatorFs").boxFuel.children[0].scale.y=-1
                setPorytraitAssets_(displayManager_.getGroup("frame").boxInfo.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("frame").boxInfo.children[1],true,640,918);
                displayManager_.getGroup("frame").boxInfo.children[1].scale.x=1.12;
                displayManager_.getGroup("frame").boxInfo.children[1].scale.y=1.18;

                displayManager_.getGroup("harp").pig.children[0].visible=false;

                //preview
                setPorytraitAssets_(displayManager_.getGroup("preview").children[4],null,null,1250);
                setPorytraitAssets_(displayManager_.getGroup("preview").children[5],null,null,1250);
                setPorytraitAssets_(displayManager_.getGroup("preview").children[6],null,null,1250);
                setPorytraitAssets_(displayManager_.getGroup("preview").children[7],null,null,1270);
                setPorytraitAssets_(displayManager_.getGroup("preview").children[8],null,null,1270);
                setPorytraitAssets_(displayManager_.getGroup("preview").bgmsgPo.children[0],true);
                setPorytraitAssets_(displayManager_.getGroup("preview").bgmsg.children[0],false);
                //setPorytraitAssets_(displayManager_.getGroup("preview").logo.children[0],true,400);
                setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview1.children[0],true,200,200);
                setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview2.children[0],true,200, 700);

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
            adaptPortraitAsset_(displayManager_.getGroup("wild"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("beans"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("freeSpins"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("freeRounds"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("bg"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("logo"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("frame"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("frameFs"),0,0,1);

            adaptPortraitAsset_(displayManager_.getGroup("winGlow"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("lockReels"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("freeSpinAccumulator"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("freeSpinAccumulatorFs"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("harp"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("scatter"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("winWays"), 0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("buyFeature"), -165,-10,1.15);
            adaptPortraitAsset_(displayManager_.getGroup("centralWin"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("centralLineWin"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("centralFuntainSmallObj"), 0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("fsWonPanel"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("frWonPanel"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("fsAproachPopup"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("msgBox"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("msgBoxFR"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("msgBoxFeature"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("planets"),600,200,1);

            adaptPortraitAsset_(displayManager_.getGroup("preview"),0,0,1);
            setPorytraitAssets_(displayManager_.getGroup("bg").bg.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("bg").bg.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("frame").bg.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("frame").bg.children[1],false);

            setPorytraitAssets_(displayManager_.getGroup("frame").bgR1.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("frame").bgR1.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("frame").bgL1.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("frame").bgL1.children[1],false);

            setPorytraitAssets_(displayManager_.getText("lineWin"),null,null,585);

            for (var i =1;i<=9;i++){
                if(displayManager_.getGroup("freeSpinAccumulator")["anchor" + i +"_In"]){
                    setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator")["anchor" + i +"_In"].children[1],false );
                    setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator")["anchor" + i +"_In"].children[0],false );
                }
                if(displayManager_.getGroup("freeSpinAccumulatorFs")["anchor" + i +"_In"])setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulatorFs")["anchor" + i +"_In"].children[0],false,1049,108);
                if(displayManager_.getGroup("freeSpinAccumulatorFs")["anchorS" + i +"_In"])setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulatorFs")["anchorS" + i +"_In"].children[0],false,1049,108);
            }

            for (var i =0;i<=4;i++){
                if (displayManager_.getGroup("frame")["info_"+i]){
                    displayManager_.getGroup("frame")["info_"+i].children[0].visible=false;
                    displayManager_.getGroup("frame")["info_"+i].children[0].x=displayManager.groups.frame.graphAsset["info_"+i].x;
                    displayManager_.getGroup("frame")["info_"+i].children[0].y=displayManager.groups.frame.graphAsset["info_"+i].y;
                }
            }


            setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulator").cap.children[0],true);

            setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulatorFs").boxWin.children[0],true,displayManager.groups.freeSpinAccumulatorFs.graphAsset.boxWin.x ,displayManager.groups.freeSpinAccumulatorFs.graphAsset.boxWin.y);
            displayManager_.getGroup("freeSpinAccumulatorFs").boxWin.children[0].scale.x=1;

            setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulatorFs").boxMult.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulatorFs").boxMult.children[1],false);

            setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulatorFs").boxFs.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulatorFs").boxFs.children[1],false);

            setPorytraitAssets_(displayManager_.getGroup("freeSpinAccumulatorFs").boxFuel.children[0],true,displayManager.groups.freeSpinAccumulatorFs.graphAsset.boxFuel.x,displayManager.groups.freeSpinAccumulatorFs.graphAsset.boxFuel.y);
            displayManager_.getGroup("freeSpinAccumulatorFs").boxFuel.children[0].scale.y=1

            setPorytraitAssets_(displayManager_.getGroup("frame").boxInfo.children[0],false);

            setPorytraitAssets_(displayManager_.getGroup("centralLineWin").children[0],null,displayManager.groups.centralLineWin.texts.lineWin.x);

            //FR
            setPorytraitAssets_(displayManager_.getText("frLabel"),null,300);
            setPorytraitAssets_(displayManager_.getText("frValue"),null,300);
            setPorytraitAssets_(displayManager_.getText("frTotWonLabel"),null,950);
            setPorytraitAssets_(displayManager_.getText("frTotWonValue"),null,950);

            //bottom FS
            setPorytraitAssets_(displayManager_.getText("fsLabel"),true,displayManager.groups.freeSpins.texts.fsLabel.x,displayManager.groups.freeSpins.texts.fsLabel.y);
            setPorytraitAssets_(displayManager_.getText("fsValue"),true,displayManager.groups.freeSpins.texts.fsValue.x,displayManager.groups.freeSpins.texts.fsValue.y);
            setPorytraitAssets_(displayManager_.getText("fsMultValue"),true,displayManager.groups.freeSpins.texts.fsMultValue.x,displayManager.groups.freeSpins.texts.fsMultValue.y);
            setPorytraitAssets_(displayManager_.getText("totWonLabel"),true,displayManager.groups.freeSpins.texts.totWonLabel.x,displayManager.groups.freeSpins.texts.totWonLabel.y);
            setPorytraitAssets_(displayManager_.getText("totWonValue"),true,displayManager.groups.freeSpins.texts.totWonValue.x,displayManager.groups.freeSpins.texts.totWonValue.y);
            setPorytraitAssets_(displayManager_.getText("fsmultT"),true,displayManager.groups.freeSpins.texts.fsmultT.x,displayManager.groups.freeSpins.texts.fsmultT.y);
            setPorytraitAssets_(displayManager_.getText("fsAdditional"),true,displayManager.groups.freeSpins.texts.fsAdditional.x,displayManager.groups.freeSpins.texts.fsAdditional.y);
            displayManager_.getGroup("harp").visible=true;
            displayManager_.getGroup("harp").pig.children[0].visible=true;
            displayManager_.getGroup("frame")["info_0"].x=0;
            //----
            //preview
            setPorytraitAssets_(displayManager_.getGroup("preview").bgmsgPo.children[0],false);
            setPorytraitAssets_(displayManager_.getGroup("preview").bgmsg.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview1.children[0],true,displayManager.groups.preview.graphAsset.bgPreview1.x ,displayManager.groups.preview.graphAsset.bgPreview1.y);
            setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview2.children[0],true,displayManager.groups.preview.graphAsset.bgPreview2.x ,displayManager.groups.preview.graphAsset.bgPreview2.y);
            setPorytraitAssets_(displayManager_.getGroup("preview").children[4],null,null,displayManager.groups.preview.checkbox.y);
            setPorytraitAssets_(displayManager_.getGroup("preview").children[5],null,null,displayManager.groups.preview.checkbox.y);
            setPorytraitAssets_(displayManager_.getGroup("preview").children[6],null,null,displayManager.groups.preview.checkbox.y);
            setPorytraitAssets_(displayManager_.getGroup("preview").children[7],null,null,displayManager.groups.preview.buttons.closePreview.y);
        }
        setPlanetInfo_();
        setMask_();
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
            var fs = (freeSpinsManager_.getIsInFs()) ? "Fs" : "";
            if (fs=="Fs"){
                var index=0;
            }else{
                if (getOrientation()=="portrait"){
                    var index=1;
                }else{
                    var index=0;
                }
            }

            if (sucessiveWin_>0 && sucessiveWin_<=9) {
                if(displayManager_.getGroup("freeSpinAccumulator" + fs)["anchor" + Math.max(sucessiveWin_ , 1) + "_In"]) {
                    if (displayManager_.getGroup("freeSpinAccumulator" + fs)["anchor" + Math.max(sucessiveWin_, 1) + "_In"].children[index]) displayManager_.getGroup("freeSpinAccumulator" + fs)["anchor" + Math.max(sucessiveWin_, 1) + "_In"].children[index].visible = true;
                    if (displayManager_.getGroup("freeSpinAccumulator" + fs)["anchor" + Math.max(sucessiveWin_, 1) + "_In"].children[index]) displayManager_.getGroup("freeSpinAccumulator" + fs)["anchor" + Math.max(sucessiveWin_, 1) + "_In"].children[index].frame = 23;
                }
                if (sucessiveWin_>6 ){
                    if (displayManager_.getGroup("freeSpinAccumulator" + fs)["fuel"]!=undefined && displayManager_.getGroup("freeSpinAccumulator" + fs)["fuel"].children[index]) displayManager_.getGroup("freeSpinAccumulator" + fs)["fuel"].children[index].visible = true;
                }
            }else if (sucessiveWin_==0){
                if (displayManager_.getGroup("freeSpinAccumulator" + fs)["anchor" + Math.max(sucessiveWin_, 1) + "_In"].children[index]) displayManager_.getGroup("freeSpinAccumulator" + fs)["anchor" + Math.max(sucessiveWin_, 1) + "_In"].children[index].visible = true;
                if (displayManager_.getGroup("freeSpinAccumulator" + fs)["anchor" + Math.max(sucessiveWin_, 1) + "_In"].children[index]) displayManager_.getGroup("freeSpinAccumulator" + fs)["anchor" + Math.max(sucessiveWin_, 1) + "_In"].children[index].frame = 0;
            }
            if(flag==true ||  (previewManager_!=undefined && previewManager_.getClosed()==false)){
                displayManager_.getGroup("preview").visible = !flag;
            }
            displayManager_.getGroup("bg").visible = !flag;
            displayManager_.getGroup("logo").visible = !flag;
            displayManager_.getGroup("frame").visible = !flag;
            displayManager_.getGroup("wins" ).visible = !flag;
            displayManager_.getGroup("planets" ).visible = !flag;

            if (fs == "" && flag == true)displayManager_.getGroup("freeRounds").visible = !flag;
            if (fs == "" && freeRoundsManager_.getIsInFr() && flag==false){
                displayManager_.getGroup("freeRounds").visible = !flag;
            }
            displayManager_.getGroup("reels").visible = !flag;
            displayManager_.getGroup("freeSpins").visible=false;
            if (fs == "FS") displayManager_.getGroup("lockReels").visible = !flag;
            if (fs == "FS") displayManager_.getGroup("freeSpins").visible = !flag;
            if (fs == "FS") displayManager_.getGroup("freeSpinAccumulatorFs").visible = !flag;
            if (fs == "" || flag == true) {
                displayManager_.getGroup("freeSpinAccumulator").visible = !flag;
            }
            //displayManager_.getGroup("harp").visible = !flag;


            displayManager_.getGroup("centralWin").visible = !flag;
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
        if (fs == "Fs"){
            displayManager_.getGroup("buyFeature").visible =false;
            displayManager_.getGroup("freeSpins").visible=true;
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
        if(fsLevel_>3)setTimeout (paybothWays_,500,n);
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

        //displayManager_.getGroup("harp").visible=true;
        // harpValue=3;
        // //setTimeout(harpEvent_,2000,[3,2,2]);
        // initLeaf(1);
        // initLeaf(2);
        // initLeaf(3);
        //  setTimeout(initLeaf,2000,6);
        // setTimeout(initLeaf,2000,5);
        // setTimeout(initLeaf,2000,4);
        // initLeaf(5);
        // initLeaf(6);
        // initLeaf(7);
        // initLeaf(8);
    }

    function initLeaf(id){
        displayManager_.getGroup("freeSpinAccumulatorFs" ).visible=true;
        var anchor = displayManager_.getGroup("freeSpinAccumulatorFs" )["fsAnimation"+id+"_On"].children[0];
        anchor.visible = true;
        anchor.animations.add("anim");
        anchor.animations.play("anim", 24, false, false);

    }

    function resume_(){
        var indexPort=(getOrientation()=="portrait")?1:0;
        if (framework.isTouch()!=true) {
            //display manager levels
            displayManager_.getGroup("reels").visible = true;
            displayManager_.getGroup("bg").visible = true;
            displayManager_.getGroup("frame").visible = true;
            displayManager_.getGroup("logo").visible = true;
            displayManager_.getGroup("freeSpinAccumulator").visible = true;
            displayManager_.getGroup("winWays").visible = true;
            displayManager_.getGroup("harp").visible=true;

        }
        displayManager_.getText("harptext").visible=false;
        displayManager_.getText("harpHead").visible=false;
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
        }else{
            // if (framework.isTouch()==true) {
            //     displayManager_.getGroup("freeSpinAccumulator").y = displayManager_.getGroup("freeSpinAccumulator").y - 30;
            // }else{
            //     displayManager_.getGroup("freeSpinAccumulator").y = displayManager_.getGroup("freeSpinAccumulator").y - 60;
            // }

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
            sucessiveWin_=(communicationManager_.getResumeStatus().status.numFuels!=undefined)?communicationManager_.getResumeStatus().status.numFuels:0;
            sucessiveWin_=Math.min(sucessiveWin_,9);
            anchorPos_=sucessiveWin_;
            lineManager_.resumeTumbling(communicationManager_.getResumeStatus(),false);
            //if (sucessiveWin_>0)moveSideMeter_(true);
            messageBox_.showMessage("game", "A free tumble has been interrupted", "Press Spin to continue", startTumble_);
            bResume_=true;
            if (sucessiveWin_>0) {//resume prev anchors on base game only
                var anchor = displayManager_.getGroup("freeSpinAccumulator")["anchor" + sucessiveWin_ + "_In"].children[indexPort];
                if (anchor!=undefined) {
                    anchor.visible = true;
                    anchor.animations.add("anim");
                    anchor.animations.play("anim", 36, false, false);
                }
            }
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
            sucessiveWin_=(communicationManager_.getResumeStatus().status.numFuels!=undefined)?communicationManager_.getResumeStatus().status.numFuels:0;
            //anchorPos_=sucessiveWin_
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
            sucessiveWin_=(communicationManager_.getResumeStatus().status.numFuels!=undefined)?communicationManager_.getResumeStatus().status.numFuels:0;
            //if (multiplier_>0)moveSideMeterFS_(true);

            messageBox_.showMessage("game", "You have unused Free Spins", "Press Spin to continue", startResumeFs_);
            bResume_=true;
        }else{
            buttonManager_.applyRestore();
            buttonManager_.applyState("NH");
            freeRoundsManager_.frChecker();

            //play clover bg
            sucessiveWin_=(communicationManager_.getResumeStatus().status.numFuels!=undefined)?communicationManager_.getResumeStatus().status.numFuels:0;
            if ( getOrientation()!="portrait")setPlanetInfo_();
            iRmess_= setTimeout(startRandomMessages_,1000);

        }

        if (!framework.isTouch()){
            displayManager_.getGroup("planets").x=600;
            displayManager_.getGroup("planets").y=200;
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

    function setPlanetInfo_(){
        if(displayManager_.getGroup("frame")["info_"+ planetInfo_]!=undefined){
            var lf=displayManager_.getGroup("frame")["info_"+planetInfo_].children[0];
            lf.visible=true;
            lf.frame=0;
            if(planetInfo_>0 || freeSpinsManager_.getIsInFs()) {
                lf.animations.add("anim");
                lf.animations.play("anim", 32, false, false);
            }
        }
    }

    function startTest(){
        displayManager_.getGroup("lockReels").visible = true;
        for (var i=0;i<7;i++){
            var lr=displayManager_.getGroup("lockReels")["lockIn_"+i].children[0];
            lr.visible=true;
            lr.animations.add("anim");
            lr.animations.play("anim",24,false,false);
        }
    }

    function fsHeadersIn_(){
        //play controls
        displayManager_.getGroup("freeSpinAccumulator").visible=false;

        if (framework.isTouch()!=true) {
            displayManager_.getGroup("lockReels").visible = true;
        }else{
            setPortrait_((getOrientation()=="portrait")?true:false)

        }

        removed_=true;//to place side feature
        if(freeSpinsManager_.getIsInFs()==false)lastSound_=1;
        multiplier_=1;
        multiplierPos_=0;
    }

    function fsTransition_(){
        stopSpinMusic_();
        activatePanels_("");
        displayManager_.getGroup("buyFeature").visible=false;
        soundManager_.playSound("transitionFull");
        if (!framework.isTouch()) {
            //raise side meter
            var sm = displayManager_.getGroup("freeSpinAccumulator");
            TweenMax.to(sm, 1, {delay: .1, y: -900, onComplete: beginJurney_});

            sm = displayManager_.getGroup("freeSpinAccumulatorFs");
            sm.y = -900;
            sm.visible = true;
            TweenMax.to(sm, 1, {delay: .5, y: 0});

            sm=displayManager_.getGroup("reels");
            TweenMax.to(sm,1,{delay:.1,y:-900});

            TweenMax.to(mask_,1,{delay:.1,y:-900});
        }else{
            var sm = displayManager_.getGroup("freeSpinAccumulator");
            TweenMax.to(sm, 1, {delay: .1, alpha:0, onComplete: beginJurney_});

            var sm = displayManager_.getGroup("freeSpinAccumulatorFs");
            sm.visible = true;
            sm.alpha=0;
            TweenMax.to(sm, 1, {delay: .5, alpha:1});

            sm=displayManager_.getGroup("reels");
            TweenMax.to(sm,1,{delay:.1,alpha:0});

            //TweenMax.to(mask_,1,{delay:.1,y:-900});
        }

    }

    function activatePanels_(part){
        if (framework.isTouch()) return;
        var  lf=displayManager_.getGroup("frame")["bgL"+part+"1"].children[0];
        lf.visible=true;
        lf.frame=0;
        lf.animations.add("anim");
        lf.animations.play("anim",32,false,false,nextPanel_,["bgL"+part,lf]);

        var  lf=displayManager_.getGroup("frame")["bgR"+part+"1"].children[0];
        lf.visible=true;
        lf.frame=0;
        lf.animations.add("anim");
        lf.animations.play("anim",32,false,false,nextPanel_,["bgR"+part,lf]);
    }

    function activatePanelsR_(){
        if (framework.isTouch())return;
        var lf=displayManager_.getGroup("frame")["bgRFS1"].children[0];
        lf.visible=false;
        lf=displayManager_.getGroup("frame")["bgR2"].children[0];
        lf.visible=false;
        lf=displayManager_.getGroup("frame")["bgRFS2"].children[0];
        lf.visible=false;
        lf=displayManager_.getGroup("frame")["bgR1"].children[0];

        var revFrames=[];
        for (var b = 1;b < lf.animations._outputFrames.length; b++) {
            revFrames.push(b);
        }
        revFrames.reverse();
        lf.animations.add("animRev",revFrames);

        lf.visible=true;
        lf.frame=0;
        lf.animations.play("animR",32,false);
    }

    function fsLogoOut_(){
        spinning_=true;//to prevent spinning
        fsLevel_=0;
        fsTransition_();
        setTimeout(fsHeadersIn_,1000);
    }

    function rollBackFs_(){
        var indexPort=(getOrientation()=="portrait")?1:0;
        var fs="";
        var anchor = displayManager_.getGroup("freeSpinAccumulator" + fs)["fuel"].children[0];
        anchor.visible=false;
        for (var i = 1; i <= 9; i++) {
            var anchor = displayManager_.getGroup("freeSpinAccumulator" + fs)["anchor" + i + "_In"].children[indexPort];
            anchor.visible=false;
        }
        anchor = displayManager_.getGroup("freeSpinAccumulator" + fs)["anchor1_In"].children[indexPort];
        anchor.visible=true;
        anchor.frame=0;


        activatePanelsR_();
        soundManager_.playSound("uiSlide");
        //raise side meter
        if (!framework.isTouch()) {
            var sm = displayManager_.getGroup("freeSpinAccumulatorFs");
            TweenMax.to(sm, 1, {delay: .1, y: -900, onComplete: beginRollBack_});

            sm.y = -900;
            sm = displayManager_.getGroup("freeSpinAccumulator");
            sm.visible = true;
            TweenMax.to(sm, 1, {delay: .5, y: 0, onComplete: endRollback_});
        }else{
            var sm = displayManager_.getGroup("freeSpinAccumulatorFs");
            TweenMax.to(sm, 1, {delay: .1, alpha:0, onComplete: beginRollBack_});

            sm = displayManager_.getGroup("freeSpinAccumulator");
            sm.visible = true;
            TweenMax.to(sm, 1, {delay: .5,alpha:1, onComplete: endRollback_});

            displayManager_.getGroup("frame").boxInfo.children[0].visible=false;

        }
        sm=displayManager_.getGroup("freeSpins");
        TweenMax.to(sm,1,{alpha:0});
    }

    function endRollback_(){
        displayManager_.getGroup("buyFeature").visible=true;
    }

    var fsLevel_=0;
    var planetDesc_=[];
    var additionalF_=0;
    var fsNum_=0;
    planetDesc_[0]=Translate.do("The Moon");
    planetDesc_[1]=Translate.do("Mars");
    planetDesc_[2]=Translate.do("Jupiter");
    planetDesc_[3]=Translate.do("Saturn");
    planetDesc_[4]=Translate.do("Uranus");
    var planetResources_=[];
    planetResources_[0]=[];
    planetResources_[0][0]=Translate.do("x1 Multiplier on Tumbles.");

    planetResources_[1]=[];
    planetResources_[1][0]=Translate.do("Super Fuel.");

    planetResources_[2]=[];
    planetResources_[2][0]=Translate.do("Reel lock at 7 height.");

    planetResources_[3]=[];
    planetResources_[3][0]=Translate.do("x2 Multiplier on Tumbles.");

    planetResources_[4]=[];
    planetResources_[4][0]=Translate.do("Additional Free Spins.");
    planetResources_[4][1]=Translate.do("Pays both ways.");

    var path_=[];

    function beginRollBack_(){
        if (!framework.isTouch()) {
            var lf = displayManager_.getGroup("frame")["info_0"].children[0];
            lf.visible = true;
            lf.frame = 0;
            for (var i = 1; i < 5; i++) {
                lf = displayManager_.getGroup("frame")["info_" + i].children[0];
                lf.visible = false;
                lf.frame = 0;
            }
        }

    }

    function resumePlanet_(level,succWin){
        spinning_=true;
        fsLevel_=level;
        sucessiveWin_=succWin;
        displayManager_.getGroup("buyFeature").visible=false;

        //raise side meter
        displayManager_.getGroup("freeSpinAccumulator").y=-900;

        displayManager_.getGroup("freeSpinAccumulatorFs").visible=true;
        moveAnchor_();
        setTimeout(movePlanet_,100,true);
        displayManager_.getGroup("frame")["info_0"].children[0].visible=false;
        displayManager_.getGroup("frame")["info_"+(fsLevel_)].children[0].visible=false;

        if(displayManager_.getGroup("frame")["info_"+(fsLevel_)]!=undefined){
            var lf=displayManager_.getGroup("frame")["info_"+(fsLevel_)].children[0];
            lf.visible=true;
            lf.frame=0;
            lf.animations.add("anim");
            lf.animations.play("anim",32,false,false);
        }
        soundManager_.playSound("introMission");
        soundManager_.mixBgSound("bgFs", 1000, 1000);

        moveLockedReels_(true);

        lineCompletion_=true;
        spinning_=false;

    }

    function beginJurney_(fs,num) {
        planetInfo_ = fsLevel_;
        displayManager_.getGroup("buyFeature").visible = false;
        if (getOrientation() != "portrait") {
            //playing pig
            var lf = displayManager_.getGroup("harp").pig.children[0];
            lf.frame = 0;
            lf.visible = true;
            lf.animations.add("anim");
            lf.animations.play("anim", 32, false, false);
        }
        soundManager_.playSound("reelsSlide");
        additionalF_=(fs!=undefined)?fs:0;
        fsNum_=(num!=undefined)?num:0;;
        var sm=displayManager_.getGroup("reels");
        TweenMax.to(sm,.5,{alpha:0});
        sm=displayManager_.getGroup("lockReels")
        TweenMax.to(sm,.5,{alpha:0});
        //show aproaching message
        displayManager_.getGroup("fsAproachPopup").visible=true;
        jurnMess1();
    }

    function jurnMess1(){
        soundManager_.playSound("txtAproach");
        displayManager_.getText("fsFeature").setText("");
        displayManager_.getText("fsAproach").setText(Translate.do("Aproaching")+ "...");
        setTimeout(jurnMess2,800);
    }

    function jurnMess2(){
        soundManager_.playSound("txtFeatures");
        displayManager_.getText("fsAproach").setText(planetDesc_[fsLevel_]);
        setTimeout(jurnMess3,800);
    }

    function jurnMess3(){
        movePlanet_(false);
        moveAnchor_();
        soundManager_.playSound("txtAproach");
        displayManager_.getText("fsAproach").setText(Translate.do("Additional Resources")+ "...");
        setTimeout(jurnMess4,800);
    }

    function jurnMess4() {
        soundManager_.playSound("txtFeatures");
        displayManager_.getText("fsFeature").setText(planetResources_[fsLevel_][0]);
        if (planetResources_[fsLevel_][1] != undefined){
            setTimeout(jurnMess4a, 800);
        }else{
            setTimeout(jurnMess5, 800);
        }
    }

    function jurnMess4a(){
        soundManager_.playSound("txtFeatures");
        displayManager_.getText("fsFeature").setText(planetResources_[fsLevel_][1]);
        setTimeout(jurnMess5,800);
    }

    function jurnMess5(){
        if (fsLevel_>0) {
            soundManager_.playSound("txtAproach");
            soundManager_.playSound("spinnerLoop");
            displayManager_.getText("fsAproach").setText(Translate.do("Additional Free Spins") + "...");
            displayManager_.getGroup("fsAproachPopup").fsCounter.children[0].visible = true;
            var lf = displayManager_.getGroup("fsAproachPopup").randNumber.children[0];
            lf.visible = true
            lf.animations.frame=0;
            lf.animations.add("anim");
            lf.animations.play("anim", 36, 1,false, jurnMess5a);
        }else{
            jurnMess6();
        }
    }

    function jurnMess5a(){
        soundManager_.stopSound("spinnerLoop");
        soundManager_.playSound("spinnerStop");
        checkAdditionalFs_();
        var lf= displayManager_.getGroup("fsAproachPopup").randNumber.children[0];
        lf.visible=false;
        lf.animations.frame=0;

        var lf= displayManager_.getGroup("fsAproachPopup")["n" + additionalF_].children[0];
        lf.visible=true;
        lf.animations.frame=0;
        lf.animations.add("anim");
        lf.animations.play("anim", 24, false);
        setTimeout(jurnMess6,1000,lf);
    }

    function jurnMess6(lf){
        if (lf!=undefined)lf.visible=false;
        //displayManager_.getGroup("fsAproachPopup").visible=false;
        displayManager_.getGroup("fsAproachPopup").fsCounter.children[0].visible =false
        setTimeout( endJurney_,(fsLevel_>0)? 200:1000);
    }

    function checkAddFs_(addFs,fs){
        //called on tumble only to chek on additional FS
        if (addFs!=undefined) {
            soundManager_.playSound("anchor_activate4");
            updateAddFsMars_(addFs,fs, 0);
        }
    }

    function checkAdditionalFs_(){
        var ret=false;
        //saving datas for additional FS that animate after tumble
        soundManager_.playSound("anchor_activate4");
        updateAddFs_(additionalF_,fsNum_,won);
        if(sucessiveWin_<0){
            if (won) {
                sucessiveWin_ = 0;
            }else{
                sucessiveWin_ = 1;  //reset counter when additional come on the last FS, not winning
            }
        }

    }

    function updateAddFs_(num,tot,won){
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

    function updateAddFsMars_(num,tot,won){
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
        TweenMax.to(displayManager_.getText("fsAdditional").scale,.3,{delay:.4,y:1,x:1,onComplete:updateNumberMars_,onCompleteParams:[w]});

        setTimeout(restoreFSAnchor_,2000);

    }

    function updateNumberMars_(tot){
        freeSpinsManager_.updateFsNum();
    }

    function updateNumber_(tot){
        freeSpinsManager_.fsWon(Number(tot));
        freeSpinsManager_.updateFsNum();
    }

    function restoreFSAnchor_(){
        displayManager_.getText("fsAdditional").alpha=0;
    }


    function nextPanel_(par){
        var str=par[0];
        var old=par[1];
        var lf=displayManager_.getGroup("frame")[str+2].children[0];
        spinning_=true;
        old.visible=false;
        lf.visible=true;
        lf.frame=0;
        lf.animations.add("anim");
        lf.animations.play("anim",32,7,false);
    }

    function movePlanet_(resume){
        var inn=0
        var lf=displayManager_.getGroup("frame")["info_"+fsLevel_].children[0];
        var time=(resume)?.1:4;
        if (!resume){
            lf.visible=true;
            lf.frame=0;
            lf.animations.add("anim");
            lf.animations.play("anim",32,false,false);
            soundManager_.playSound("planetPass");
        }

        displayManager_.getGroup("planets").visible=true;
        displayManager_.getGroup("freeSpins").visible=true;
        displayManager_.getGroup("freeSpins").alpha=1;
        displayManager_.getGroup("planets")["p0"].children[0].max=.8;
        displayManager_.getGroup("planets")["p1"].children[0].max=1;
        displayManager_.getGroup("planets")["p2"].children[0].max=1.5;
        displayManager_.getGroup("planets")["p3"].children[0].max=1.1;
        displayManager_.getGroup("planets")["p4"].children[0].max=1;

        //if from planet to planet, move old first
        var obj={};
        if(fsLevel_>0) {
            lf=displayManager_.getGroup("frame")["info_"+(fsLevel_-1)].children[0];
            lf.visible=false;

            obj.amt = 530;
            TweenMax.to(obj, time/4, {
                amt: 1100,
                ease: Sine.easeInOut,
                onUpdate: moving_,
                onUpdateParams: [(fsLevel_-1)],
            });
        }

        var obj1={};
        obj1.amt=-900;
        displayManager_.getGroup("planets")["p"+fsLevel_].children[0].scale.x=(resume)?displayManager_.getGroup("planets")["p"+fsLevel_].children[0].max:.1;
        displayManager_.getGroup("planets")["p"+fsLevel_].children[0].scale.y=(resume)?displayManager_.getGroup("planets")["p"+fsLevel_].children[0].max:.1;
        TweenMax.to(obj1,time,{amt:530,ease:Sine.easeInOut,onUpdate:moving_,onUpdateParams:[fsLevel_]});
    }

    function moving_(p){
        var amt=this.target.amt;
        var obj=displayManager_.getGroup("planets")["p"+p].children[0];
        obj.visible=true;
        obj.x=amt;
        if ( getOrientation()=="portrait"){
            obj.y= 0.00044* amt *amt +0.84 * amt-2283450/40579;
        }else{
            obj.y= 0.00044* amt *amt +0.84 * amt-4283450/40579;
        }

        if (p==5){
            obj.rotation =obj.rotation-0.005;
        }else{
            obj.rotation =obj.rotation+0.005;
        }
        if (obj.scale.x<=obj.max) {
            obj.scale.x = obj.scale.x +obj.max/150
            obj.scale.y = obj.scale.y +obj.max/150
        }
    }

    function endJurney_(){
        displayManager_.getGroup("fsAproachPopup").visible=false;
        if(getOrientation()!="portrait") {
            //pig back
            var anim = [];
            //playing pig
            for (var b = 1; b <= displayManager_.getGroup("harp").pig.children[0].animations._outputFrames.length; b++) {
                anim.push(b);
            }
            anim.reverse();
            var lf = displayManager_.getGroup("harp").pig.children[0];
            lf.visible = true;
            lf.animations.add("animR", anim);
            lf.animations.play("animR", 24, false, false);
        }
        //displayManager_.getGroup("frame")["info_"+(fsLevel_)].children[0].visible=false;
        //displayManager_.getGroup("frame")["info_"+(fsLevel_)].children[0].animations.stop();

        // if(displayManager_.getGroup("frame")["info_"+(fsLevel_+1)]) {
        //     var lf = displayManager_.getGroup("frame")["info_" + (fsLevel_ + 1)].children[0];
        // }else{
        //     var lf = displayManager_.getGroup("frame")["info_4"].children[0];
        // }
        // lf.visible=true;
        // lf.frame=0;
        // lf.animations.add("anim");
        // lf.animations.play("anim",32,false,false);

        soundManager_.playSound("introMission");



        sm=displayManager_.getGroup("lockReels")
        TweenMax.to(sm,.5,{alpha:1});

        if (!framework.isTouch()) {
            var sm=displayManager_.getGroup("reels");
            sm.alpha=1;
            TweenMax.to(sm,.5,{y:0});
            TweenMax.to(mask_,.5,{y:0});
        }else{
            var sm=displayManager_.getGroup("reels");
            sm.alpha=1;
            TweenMax.to(sm,.5,{alpha:1});
        }

        lineCompletion_=true;
        spinning_=false;
        soundManager_.playSound("reelsSlide");
        if (fsLevel_>0) {
            setTimeout(realDoSpin_, 200);
        }else{
            soundManager_.mixBgSound("bgFs", 1000, 1000);
        }
        anchorPos_=-1;
        moveAnchor_((spinManager_.getSpinResp()!=undefined)?spinManager_.getSpinResp().state.numFuels:0,true);


        //for test purpose only
         //setTimeout(moveAnchor_,1000, 2,true);
        //setTimeout(rollBackFs_,3000);
        //fsLevel_++;
        //setTimeout(nextOne_,2000,fsLevel_,2)
    }

    function nextOne_(lv,fs,numFs,numF){
        if (!framework.isTouch()) {
            var lf = displayManager_.getGroup("frame").bgL1.children[0];
            lf.visible = false;
            lf = displayManager_.getGroup("frame").bgR1.children[0];
            lf.visible = false;
        }
        displayManager_.getGroup("frame")["info_"+fsLevel_].children[0].visible=false;
        displayManager_.getGroup("frame")["info_"+fsLevel_].children[0].animations.stop();
        fsLevel_=lv;
        sucessiveWin_=numF;
        anchorPos_=(sucessiveWin_-1);
        if (fsLevel_<5){
            if (!framework.isTouch()) {
                nextPanel_(["bgR", displayManager_.getGroup("frame")["bgRFS" + 1].children[0]]);
                nextPanel_(["bgL", displayManager_.getGroup("frame")["bgLFS" + 1].children[0]]);
            }
            beginJurney_(fs,numFs);
        }

    }

    function logoIn_(){
        rollBackFs_();
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

    function moveLockedReels_(resume){
        //set and unset the lock animation
        displayManager_.getGroup("lockReels").visible=true;
        if ((spinManager_.getSpinReelResp()!=null || resume) && buyIn_==false) {
            var lockedReelCOnfiguration = "";
            var rlN=0;
            for (var i = 0; i < 6; i++) {
                lockedReelCOnfiguration += (resume!=true?spinManager_.getSpinReelResp().reel[i].smb.length ==7:communicationManager_.getResumeStatus().status.reels[i].smb.length ==7) ? "1" : "0";
            }
            if (reelLocked_ != lockedReelPos_) {
                if (reelLocked_ > 0) {
                    for (var i = 0; i < 6; i++) {
                        var bones = displayManager_.getGroup("lockReels")["lockIn_" + i].children[0];

                        if (lockedReelCOnfiguration[i]=="1" && bones.visible == false) {
                            bones.visible = true;
                            bones.animations.add("anim");
                            bones.animations.play("anim", 36, false, false);
                            soundManager_.playSound("lock");
                            rlN++;
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

                } else {
                    //reset
                }

            }
            lockedReelPos_ = reelLocked_;
        }
    }

    var fuelAdded_=0;
    var fuelToBeAdded_=0;
    function moveAnchor_(counter,forceFS){
        var arr=[];
        var index=0;
        var fps =32;
        var audioLevel=[];
        var fs= (freeSpinsManager_.getIsInFs()==true||forceFS)?"Fs":"";
        var indexPort=(getOrientation()=="portrait")?1:0;
        audioLevel[1]=1;
        audioLevel[2]=1;
        audioLevel[3]=1;
        audioLevel[4]=1;
        audioLevel[5]=1;
        audioLevel[6]=1;
        audioLevel[7]=1;

        displayManager_.getText("fsAdditional").setText("");
        if(counter!=undefined)sucessiveWin_=counter;
        console.log("move anchot " + sucessiveWin_);

        if (sucessiveWin_!= anchorPos_ ){
            if (freeSpinsManager_.getIsInFs()==true||forceFS){
                sucessiveWin_=Math.min(sucessiveWin_,7);
                if(fsLevel_==2){
                    var asset="anchorS";
                }else{
                    var asset="anchor";
                }

                if (sucessiveWin_>0){
                    for (var i = 1; i <= 9; i++) {
                        if (i <= 7) {
                            var anchor = displayManager_.getGroup("freeSpinAccumulator" + fs)["anchor" + i + "_In"].children[0];
                            anchor.visible = false;
                            anchor.frame=0;

                            var anchor = displayManager_.getGroup("freeSpinAccumulator" + fs)["anchorS" + i + "_In"].children[0];
                            anchor.visible = false;
                            anchor.frame=0;
                        }
                    }

                    fuelToBeAdded_=sucessiveWin_;
                    if (anchorPos_>=0)anchorPos_++;
                    fuelAdded_=Math.max(anchorPos_ ,1);

                    if (displayManager_.getGroup("freeSpinAccumulator" + fs)[asset + Math.max(fuelAdded_ ,1)+ "_In"]!=undefined) {
                        anchor = displayManager_.getGroup("freeSpinAccumulator" + fs)[asset + Math.max(fuelAdded_ ,1) + "_In"].children[0];
                        anchor.visible = true;
                        anchor.frame=0;
                        anchor.animations.add("anim");
                        anchor.animations.play("anim", fps, false, false, fsWinCloverAnim_, [anchor,fs,fuelAdded_,asset]);
                        soundManager_.playSound("sideFeature_" + Math.max(fuelAdded_ ,1));
                    }
                }else{

                    console.log("CT "+quiteSpinMusic)
                    clearTimeout(quiteSpinMusic);
                    for (var i = 1; i <= 7; i++) {
                        if (i<=7) {
                            var anchor = displayManager_.getGroup("freeSpinAccumulator" + fs)["anchor" + i + "_In"].children[0];
                            anchor.visible=false;

                            anchor = displayManager_.getGroup("freeSpinAccumulator" + fs)["anchorS" + i + "_In"].children[0];
                            anchor.visible=false;

                        }else{


                        }
                    }


                    soundManager_.playSound("anchor_deactivate");
                }
            }else{//base game
                sucessiveWin_=Math.min(sucessiveWin_,9);
                if (sucessiveWin_>0){
                    for (var i = 1; i <= 9; i++) {
                        var anchor = displayManager_.getGroup("freeSpinAccumulator" + fs)["anchor" + i + "_In"].children[indexPort];
                        anchor.visible = false;
                        anchor.frame=0;
                    }
                    if (sucessiveWin_>6){
                        fuelToBeAdded_=sucessiveWin_;
                        if (anchorPos_>=0)anchorPos_++;
                        fuelAdded_=Math.max(anchorPos_ ,1);
                        anchor = displayManager_.getGroup("freeSpinAccumulator" + fs)["fuel"].children[indexPort];
                        anchor.visible = true;
                        if (displayManager_.getGroup("freeSpinAccumulator" + fs)["anchor" + Math.max(fuelAdded_ ,1)+ "_In"]!=undefined) {
                            anchor = displayManager_.getGroup("freeSpinAccumulator" + fs)["anchor" + Math.max(fuelAdded_ ,1) + "_In"].children[indexPort];
                            anchor.visible = true;
                            anchor.frame=0;
                            anchor.animations.add("anim");
                            anchor.animations.play("anim", fps, false, false, fsWinCloverAnim_, [anchor,fs,fuelAdded_,"anchor"]);
                            soundManager_.playSound("sideFeature_" + Math.max(fuelAdded_ ,1));
                        }
                    }else{
                        fuelToBeAdded_=sucessiveWin_;
                        if (anchorPos_>=0)anchorPos_++;
                        fuelAdded_=Math.max(anchorPos_ ,1);
                        //full fuel
                        anchor = displayManager_.getGroup("freeSpinAccumulator" + fs)["fuel"].children[indexPort];
                        anchor.visible = false;

                        if (displayManager_.getGroup("freeSpinAccumulator" + fs)["anchor" + Math.max(fuelAdded_ ,1)+ "_In"]!=undefined) {
                            anchor = displayManager_.getGroup("freeSpinAccumulator" + fs)["anchor" + Math.max(fuelAdded_ ,1) + "_In"].children[indexPort];
                            anchor.visible = true;
                            anchor.frame=0;
                            anchor.animations.add("anim");
                            anchor.animations.play("anim", fps, false, false, fsWinCloverAnim_, [anchor,fs,fuelAdded_,"anchor"]);
                            soundManager_.playSound("sideFeature_" + Math.max(fuelAdded_ ,1));
                        }
                    }

                }else{
                    console.log("CT "+quiteSpinMusic)
                    clearTimeout(quiteSpinMusic);
                    for (var i = 1; i <= 6; i++) {
                        if (i<=6) {
                            var anchor = displayManager_.getGroup("freeSpinAccumulator" + fs)["anchor" + i + "_In"].children[indexPort];
                            anchor.visible=false;

                        }else{
                            var anchor = displayManager_.getGroup("freeSpinAccumulator" + fs )["fsPos" + i + "_On"].children[indexPort];
                        }
                    }
                    var anchor = displayManager_.getGroup("freeSpinAccumulator" + fs)["anchor1_In"].children[indexPort];
                    anchor.visible=true;
                    anchor.frame=0;
                    soundManager_.playSound("feature_deactivate");
                }
            }
        }

        anchorPos_=sucessiveWin_;
    }

    function startSpinSound_(){
        clearTimeout(quiteSpinMusic);
        for (var i=6;i<= 8;i++){
            soundManager_.stopSound("winBg_"+i);
            soundManager_.stopSound("winBgS_"+i);
        }
        if (freeSpinsManager_.getIsInFs()==false) {
            if (soundManager_.getBGSound("bgSlot" ) != undefined) {
                if (quiteSpinMusic == 0) {
                    soundManager_.getBGSound("bgSlot").increaseVolExternal(1000);
                    soundManager_.getBGSound("bgSlot1").fadeInBgSound(1000);
                }
                if (freeSpinsManager_.getIsInFs() == false) lastSound_ = 1;
                quiteSpinMusic = setTimeout(stopSpinMusic_, 8000);
                console.log("-----------------start spin music " + quiteSpinMusic)
            }
        }else{
            increaseVolumeBG_(true);
        }
    }

    function stopSpinMusic_(){
        if (hasScatter_==0 && won==0){
            soundManager_.getBGSound("bgSlot").fadeOutBgSoundExternal(2000,0);
            startRandomMessages_();
        }

        clearTimeout(quiteSpinMusic);
        quiteSpinMusic=0;
    }

    function reverseSkull_(obj){
        if (obj==null)return;
        obj.setFrame(0);
        obj.visible=false;
    }

    function fsWinCloverAnim_(obj){
        var fs=obj[1];
        var i=obj[2];
        var asset=obj[3];
        var anchor=obj[0];
        var indexPort=(getOrientation()=="portrait" && fs=="")?1:0;
        fuelAdded_++;
        if (fuelAdded_<= fuelToBeAdded_) {
            if (displayManager_.getGroup("freeSpinAccumulator" + fs)[asset + fuelAdded_ + "_In"] != undefined) {
                anchor.visible = false;
                anchor.frame = 0;
                anchor = displayManager_.getGroup("freeSpinAccumulator" + fs)[asset+ fuelAdded_ + "_In"].children[indexPort];
                anchor.visible = true;
                anchor.animations.add("anim");
                anchor.animations.play("anim", 32, false, false,fsWinCloverAnim_,[anchor,fs,i,asset]);
                soundManager_.playSound("sideFeature_" +fuelAdded_);
            }
        }
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
        if (pigID==-1) {
            console.log("realDoSpin_" + spinning_)
            if (spinning_ && gotErrorInAp_ == false) return;
            if (!onGame_) return;
            if (respin_) eventManager_.clearEvt();

            if (messageOn_ == false) {
                gcmCalls_("PAID", 0); //was in enable button but for some race condition it was resetting the FS win
                if (displayManager_.getText("lineWin") != undefined) displayManager_.getText("lineWin").alpha = 0;
                buyIn_ = false;
                spinning_ = true;
                stopped_ = false;
                checker_=0;
                updateLockedReels_ = false;
                splitNumberWaysUpdated_ = false;
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

                    if (!freeSpinsManager_.getIsInFs()) me.resetSuccessiveWinning();

                    if (!respin_) {
                        balanceManager_.bet(betCheckCallBack_);
                    } else {
                        betCheckCallBack_(true);
                    }
                }
            } else {
                if (freeSpinsManager_.getIsInFs()) {
                    setTimeout(realDoSpin_, 1000);// FS get stuck on RC message
                }
            }
        }else{
            setTimeout(realDoSpin_, 200);//FS stuck with pig animation
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
                if (framework.isTouch() && getOrientation()=="portrait"){
                    displayManager_.getGroup("harp").visible = false;
                }else{
                    displayManager_.getGroup("harp").bg.children[0].visible = false;
                    displayManager_.getText("harptext").visible=false;
                    displayManager_.getText("harpHead").visible=false;
                }

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
    var maxMessages_=2;
    var maxChar_= (getOrientation()=="portrait")?30:40;
    var charNum_= 0;
    var codeCaption;
    var iScroll_;

    messages_[0]=Translate.do("Collect Fuels to take off.");
    messages_[1]=Translate.do("You need at least 6 Fuels to get to The Moon.");
    messages_[2]=Translate.do("Successive Fuels after 6 are stored for the next part of the journey to Uranus.");


    function stopRandomMessages_(){
        clearInterval(iRmess_);
        clearTimeout(iScroll_);
        writeText_("");
    }

    function startRandomMessages_(){

        clearInterval(iRmess_);
        if (autoPlayManager_.getIsInAutoPlay() == false && freeSpinsManager_.getIsInFs()==false) {
            codeCaption = displayManager_.getText("messages");
            writeText_((messages_[messNum_]).substr(0, maxChar_));
            codeCaption.actualMessage = messages_[messNum_];
            codeCaption.startPos = 0;
            codeCaption.maxLen = maxChar_;
            codeCaption.visible=false
            if (messNum_ < maxMessages_) {
                messNum_++;
            } else {
                messNum_ = 0;
            }
            if (codeCaption.actualMessage.length > maxChar_) {
                iScroll_ = setTimeout(checkLen_, 2000);
            } else {
                iRmess_ = setInterval(startRandomMessages_, 5000);
            }
        }
    }

    function checkLen_(){
        clearTimeout(iScroll_);
        if (codeCaption.actualMessage.length>maxChar_)
        {
            codeCaption.visible=false;
            var str=codeCaption.actualMessage.substring(codeCaption.startPos,codeCaption.maxLen+ codeCaption.startPos);
            codeCaption.startPos++;
            writeText_(str);
            if (codeCaption.startPos>codeCaption.actualMessage.length+5){
                codeCaption.startPos=0;
                iScroll_=setTimeout(startRandomMessages_,500);
            }else{
                codeCaption.visible=false;
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
            if ( framework.isTouch() && window.innerHeight > window.innerWidth) {
                //portrait
                $("#footer-top-win").html(amt);
            } else {
                $("#footer-bottom-message").html(amt);
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

        //beans
        if ( (winManager_.getScatterWinAmt().scatters!=undefined && winManager_.getScatterWinAmt().scatters[0]!=undefined )) {
            //else
            hasScatter_ = true;
            numFuels = spinManager_.getSpinResp().state.numFuels;
        }

        //harp
        if (spinManager_.getSpinResp().state.pigBonusID>0 && spinManager_.getSpinResp().state.pigBonusID<=3){
            pigID=spinManager_.getSpinResp().state.pigBonusID;
            pigValue=spinManager_.getSpinResp().state.pigBonusValue;
            eventManager_.addEvent(pigEvent_,0,[pigID,won,spinManager_.getSpinResp().state.numFuels]);
            if (pigID==1){
                //wild
                if (won>0)eventManager_.addEvent(fakeEvent_, 3000);
            }else if (pigID==2){
                //expanding wild
                eventManager_.addEvent(fakeEvent_, 5500);
            }else if (pigID==3 && freeSpinsManager_.getIsInFs() ==false){
                //extra fuel
            }
            if (fsWon){
                eventManager_.addEvent(fakeEvent_, (won ||hasScatter_ )?5000:300);
            }
        }else{
            if (fsWon){
                eventManager_.addEvent(fakeEvent_, 3000);
            }
        }

        if (won>0 || hasScatter_) {
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

        if ((won<=0 && hasScatter_==false && freeSpinsManager_.getType()!="convert" && freeSpinsManager_.getType()!="tumble" )  ) {
            eventManager_.addEvent(fsEval_, (freeSpinsManager_.getIsInFs()) ? (freeSpinsManager_.getFsNumber() == 0)? 3500:200 : 100);
        }
        eventManager_.triggerEvt();
    }

    function spinAnimEndAfterTumbling_(){
        if (isTumbling_==false && lineManager_.getInterruptedWinAnim()==false && pigID<0) {
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
            pigID=-1;
            spinning_=false;
            if (freeSpinsManager_.getIsInFs() || fsWon) {
                fs = freeSpinsManager_.getFreeSpinsEval();
            }

            //beans
            if ( (winManager_.getScatterWinAmt().scatters!=undefined && winManager_.getScatterWinAmt().scatters[0]!=undefined )) {
                //else
                hasScatter_ = true;
                numFuels = spinManager_.getSpinResp().state.numFuels;
                //eventManager_.addEvent(fakeEvent_, 3000);
            }

            //harp
            if (spinManager_.getSpinResp().state.pigBonusID>0 && spinManager_.getSpinResp().state.pigBonusID<=3){
                pigID=spinManager_.getSpinResp().state.pigBonusID;
                pigValue=spinManager_.getSpinResp().state.pigBonusValue;
                eventManager_.addEvent(pigEvent_,50,[pigID,won,spinManager_.getSpinResp().state.numFuels]);
                eventManager_.addEvent(fakeEvent_, 1200);
                if (pigID==1){
                    //wild
                    if (won>0)eventManager_.addEvent(fakeEvent_,3000);
                }else if (pigID==2){
                    //expanding wild
                    eventManager_.addEvent(fakeEvent_, 5500);
                }else if (pigID==3 && freeSpinsManager_.getIsInFs() ==false){
                    //extra fuel
                    eventManager_.addEvent(fakeEvent_, 500);
                }
                if (fsWon){
                    eventManager_.addEvent(fakeEvent_, (won ||hasScatter_ )?5000:300);
                }
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
                freeRoundsManager_.updateFreeRoundsTot();
                eventManager_.addEvent(fsEval_, (freeSpinsManager_.getIsInFs()==true && freeSpinsManager_.getFsNumber() ==0)?2500:(freeSpinsManager_.getIsInFs()==true && spinManager_.getSpinResp().freeSpin.object.wonAdditionalEndLevel>0)?2500: 500);
            }

            freeSpinsManager_.endAnimHandle(eventManager_);

            if (freeRoundsManager_.getIsInFr() == true && freeSpinsManager_.getIsInFs() == false) {//no add delay during nested FS
                eventManager_.addEvent(fakeEvent_, (won) ? lineManager_.getTotalDuration() : 0);
            }
            eventManager_.triggerEvt();

        }else{
            console.log("waiting to tumble" + isTumbling_+ " "+  lineManager_.getInterruptedWinAnim() +" "+ pigID)
            setTimeout(spinAnimEndAfterTumbling_,100);
        }
    }

    function pigEvent_(obj){
        var id= obj[0];
        var won=obj[1];
        var numFuels= obj[2];

        soundManager_.playSound("harp"+id);
        displayManager_.getGroup("harp").visible=true;
        if(getOrientation()!="portrait"){
            displayManager_.getGroup("harp").pig.children[0].visible=true;
        }else{
            displayManager_.getGroup("harp").pig.children[0].visible=false;
        }
        displayManager_.getText("harptext").visible=false;
        displayManager_.getText("harpHead").visible=false;
        displayManager_.getText("harptext").setText("");
        displayManager_.getGroup("harp").alpha=1;


        setTimeout(pigPrizeMsg_, 30, [id, won, numFuels]);
        setTimeout(pigPrize_, 2800, [id, won, numFuels]);
        setTimeout(pigHarp_, 4000);
    }

    function hideHarpMobile_(){
        TweenMax.to(displayManager_.getGroup("harp"), .5, {alpha: 0,onComplete:hideHarp2_});
    }

    function pigHarp_(){
        setTimeout(unlockHarp_,1200);
    }

    function hideHarp2_(){
        displayManager_.getGroup("harp").visible=false;
        setTimeout(unlockHarp_,2000);
    }

    function unlockHarp_() {
        pigID=-1;
    }

    function pigPrize_(par){
        var id=par[0];
        var won=par[1];
        var numFuels=par[2];

        if (id==1){//wild
            setWilds_();
        }
        if (id==2) {//exp  wilds
            setExpWilds_(pigValue);
        }
        if (id==5) {//extra fs
            soundManager_.playSound("harpFs");
        }

    }

    function clearObject_(obj){
        if (obj!=null){
            displayManager_.getGroup("harp").remove(obj);
            obj=null;
        }

    }

    function pigLandOnTheMoon_(){
        soundManager_.playSound("pigSound");
        //playing pig
        var lf= displayManager_.getGroup("harp").pom.children[0];
        lf.frame=0;
        lf.visible=true;
        lf.animations.add("anim");
        lf.animations.play("anim",32,false,false,goBackToCockPit_);
    }

    function goBackToCockPit_(){
        displayManager_.getText("harptext").visible=false;
        displayManager_.getText("harpHead").visible=false;
        displayManager_.getGroup("harp").bg.children[0].visible=false;
        displayManager_.getGroup("harp").pom.children[0].visible=false;
        if(getOrientation()!="portrait") {
            var anim = [];
            for (var b = 1; b <= displayManager_.getGroup("harp").pig.children[0].animations._outputFrames.length; b++) {
                anim.push(b);
            }
            anim.reverse();
            var lf = displayManager_.getGroup("harp").pig.children[0];
            lf.animations.add("animR", anim);
            lf.animations.play("animR", 24, false, false, piggyIsBack_);
        }else{
            displayManager_.getGroup("harp").pig.frame=0;
        }
    }

    function piggyIsBack_() {

    }

    function pigPrizeMsg_(par){
        var id=par[0];
        var won=par[1];
        var numFuels=par[2];

        //remove previous objects
        clearObject_(lf_);
        clearObject_(p_);
        clearObject_(w_);

        if (id==1){//wild
            harpText_( pigValue + " " +Translate.do("Additional Wilds"));
        }
        if (id==2) {//exp wilds
            harpText_("x " +pigValue+ " " + Translate.do("Expanding Wilds"));
        }

        var id=par[0];

        if(getOrientation()!="portrait") {
            //playing pig
            var lf = displayManager_.getGroup("harp").pig.children[0];
            lf.frame = 0;
            lf.visible = true;
            lf.animations.add("anim");
            lf.animations.play("anim", 32, false, false, pigLandOnTheMoon_);
        }else {
            setTimeout(pigLandOnTheMoon_, 400);
        }
    }

    function harpText_(id,x,y){

        if(getOrientation()!="portrait"){
            displayManager_.getGroup("harp").pig.children[0].visible=true;
        }else{
            displayManager_.getGroup("harp").pig.children[0].visible=false;
        }
        displayManager_.getGroup("harp").bg.children[0].visible=true;
        displayManager_.getText("harptext").visible=true;
        displayManager_.getText("harpHead").visible=true;
        displayManager_.getText("harptext").setText(id);
    }

    function setWilds_(){

        soundManager_.playSound("placeWild");
        for (var i =0; i < ReelConfig.numReels; i++) {
            for (var a = 0; a < ReelConfig.numIcons; a++) {
                if (spinManager_.getSpinReelResp().reel[i].smb[a]!=undefined && spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb != undefined && spinManager_.getSpinReelResp().reel[i].smb[a].smb==10) {
                    spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb=null;
                    var smb =  spinManager_.getSpinReelResp().reel[i].smb[a];
                    var s = spinManager_.getReels()[i].swapSmb2(smb,(spinManager_.getSpinReelResp().reel[i].smb.length-a));
                }
            }
        }
    }

    function setExpWilds_(){
        soundManager_.playSound("placeWild");

        for (var i =0; i < ReelConfig.numReels; i++) {
            var a=0;
            if (spinManager_.getSpinReelResp().reel[i].smb[a]!=undefined && spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb != undefined && spinManager_.getSpinReelResp().reel[i].smb[a].smb==11) {
                spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb=null;
                var s = spinManager_.getReels()[i].swapSmb2( spinManager_.getSpinReelResp().reel[i].smb[a], spinManager_.getSpinReelResp().reel[i].smb.length );
                s.animations.add("anim");
                s.animations.play("anim",24,false,false);

                setTimeout(showMultiplierW_,1500,i);

            }
        }
        var eventManagerW_=new EventManager();
        eventManagerW_.clearEvt();
        eventManagerW_.addEvent(fakeEvent_, 1500);
        wildManager_.endAnimHandle((winManager_.getWildNum()>0)?winManager_.getWildSimbs():null, eventManagerW_);
        eventManagerW_.triggerEvt();




    }

    function showMultiplierW_(i){
        var txt1 = displayManager_.getText("mult"+i);
        txt1.setText("x"+spinManager_.getSpinReelResp().reel[i].smb.length);

        TweenMax.to(txt1,.2,{alpha:1});
        TweenMax.to(txt1.scale,.3,{x:1.2,y:1.2,ease:Bounce.easeOut,onComplete:bounce,onCompleteParams:[txt1]});
        //leave

    }

    function bounce(txt){
        TweenMax.to(txt.scale,.4,{x:1,y:1,ease:Bounce.easeOut,onComplete:move,onCompleteParams:[txt]});
    }

    function move(txt){
        TweenMax.to(txt,2,{alpha:0,onComplete:kill,onCompleteParams:[txt]});
    }

    function kill(txt){
        txt.setText("");
        //txt.destroy();
    }

    function updateBalance_(txt) {
    }

    function fsEval_(){
        checker_=0;
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
            setTimeout(enableButton_, 100);
            multiplierManager_.updateMultiplier(true);
        }else{
            enableButton_();
            multiplierManager_.resetMultipliers();
        }
    }
    var checker_=0
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
                eventManager_.addEvent(startAutoSpin_, 100, [false]);
            }
            eventManager_.triggerEvt();
        }
    }

    function waitForLineCompletion_() {
        if (lineCompletion_ || checker_>25){
            checker_++;
            lineCompletion_=true;
            startAutoSpin_([false]);
        }else{
            setTimeout(waitForLineCompletion_,200);
        }
    }

    function startAutoSpin_(par){
        if (autoPlayManager_.getIsInAutoPlay() || fs ) {
            if (autoPlayManager_.getIsFeature()==false || (autoPlayManager_.getStopOnFeature()==false && fs==true)){
                if (autoPlayManager_.getCanAp()==true) {
                    noSleep.enable();
                    gcmCalls_("ANIMATION_END",null,true);
                    var tOut= (won>0)?lineManager_.getTotalDuration():200;
                    if (spinManager_.getFsResp()!=undefined && spinManager_.getFsResp().won!=undefined && spinManager_.getFsResp().won>1){// FS retrigger
                        tOut+=2000;
                    }
                    apTimer_=setTimeout(realDoSpin_, tOut, par);
                }else {
                    setTimeout(startAutoSpin_, 500, par);
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
        sucessiveWin_=0
        fsLevel_=0;
        planetInfo_=0;
        if (gameClass_.isSpinning()==true)return;
        buttonManager_.applyState("NH");
        buttonManager_.applyRestore();
        autoPlayManager_.setCanAp(true);
        if(displayManager_.getText("lineWin")!=undefined)displayManager_.getText("lineWin").alpha=0;
        noSleep.disable();//mobile devices can now go to sleep
        if (freeRoundsManager_.getIsInFr()){
            setTimeout(freeRoundsManager_.getFreeRoundsEval,1000);
        }
        if(getOrientation()!="portrait"){
            displayManager_.getText("lineWin").y=585;
        }else{
            displayManager_.getText("lineWin").y=818;
        }
        for (var i = 0; i <= 4; i++) {
            displayManager_.getGroup("planets")["p"+i].children[0].y = -1000;
            displayManager_.getGroup("frame")["info_"+i].frame=0;
        }
        for (i = 1; i <= 9; i++) {
            if( displayManager_.getGroup("freeSpinAccumulatorFs")["anchor" + i + "_In"]){
                var anchor = displayManager_.getGroup("freeSpinAccumulatorFs")["anchor" + i + "_In"].children[0];
                anchor.frame = 0
                anchor.visible = false;
            }
            if (displayManager_.getGroup("freeSpinAccumulatorFs")["anchorS" + i + "_In"]){
                anchor = displayManager_.getGroup("freeSpinAccumulatorFs")["anchorS" + i + "_In"].children[0];
                anchor.visible=false;
                anchor.frame=0;
            }
            if (displayManager_.getGroup("freeSpinAccumulator")["anchor" + i + "_In"]){
                for (var a = 0; a <= 1; a++) {
                    if (displayManager_.getGroup("freeSpinAccumulator")["anchor" + i + "_In"].children[a]) {
                        anchor = displayManager_.getGroup("freeSpinAccumulator")["anchor" + i + "_In"].children[a];
                        anchor.visible = false;
                        anchor.frame=0;
                    }
                }
            }
        }

        if (displayManager_.getGroup("freeSpinAccumulator")["anchor1_In"]){
            var a= (getOrientation()=="portrait")?1:0
            if (displayManager_.getGroup("freeSpinAccumulator")["anchor1_In"].children[a]) {
                anchor = displayManager_.getGroup("freeSpinAccumulator")["anchor1_In"].children[a];
                anchor.visible = true;
                anchor.frame=0;
            }
        }

        displayManager_.getGroup("frame")["info_0"].children[0].visible=false;
        displayManager_.getGroup("frame")["info_1"].children[0].visible=false;
        displayManager_.getGroup("frame")["info_2"].children[0].visible=false;
        displayManager_.getGroup("frame")["info_3"].children[0].visible=false;
        displayManager_.getGroup("frame")["info_4"].children[0].visible=false;

        if(displayManager_.getGroup("frame")["info_0"]!=undefined && getOrientation()!="portrait"){
            var lf=displayManager_.getGroup("frame")["info_0"].children[0];
            lf.visible=true;
            lf.frame=0;
            // lf.animations.add("anim");
            // lf.animations.play("anim",32,false,false);
        }
        soundManager_.mixBgSound("bgSlot", 1000, 1000);
    }

    function hideLr_(){
        var lockedReelCOnfiguration = "";
        for (var i = 0; i < 6; i++) {
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
        updateLockedReels_=false;

        if (reel==undefined && freeSpinsManager_.getIsInFs() && fsLevel_>1){
            reelLocked_=0;
            isLocking_=false;
            //harp event if new locked reel
             for (var i = 0; i < 6; i++) {
                 if(spinManager_.getSpinReelResp().reel[i].smb.length ==7){
                     reelLocked_++;
                 }
             }
             if (reelLocked_ != lockedReelPos_) {
                 isLocking_=true;
                 setTimeout(moveLockedReels_,100);
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
                if (reel==5 && fsLevel_>3){
                    setTimeout (paybothWays_,500,n);
                }
            }
            //expandReelSize_(n, resume);
        }
    }

    function paybothWays_(n){
        displayManager_.getText("winWaysNum").fill="#ff00ff";
        displayManager_.getText("winWaysNum").fontSize=19;
        displayManager_.getText("winWaysNum").setText(Translate.do("Both Ways"));
        setTimeout (paybothWays1_,500,n);
    }

    function paybothWays1_(n){
        displayManager_.getText("winWaysNum").fontSize=35;
        displayManager_.getText("winWaysNum").setText("x2");
        setTimeout (paybothWays2_,500,n);
    }

    function paybothWays2_(n){
        displayManager_.getText("winWaysNum").fill="#ffe424"
        displayManager_.getText("winWaysNum").setText(n*2);

    }

    function upperSmbCallBack_(i) {

        //called after spin to move the symbols in the upper position before moving the reel
        prevList_=null;
        for (var a = 0; a < ReelConfig.numIcon; a++) {
            if (spinManager_.getSpinReelResp().reel[i].smb[a]!=undefined) {
                var smb = spinManager_.getSpinReelResp().reel[i].smb[a];//(spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb != null) ? spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb : spinManager_.getSpinReelResp().reel[i].smb[a].smb;
                var s = spinManager_.getReels()[i].swapSmb(smb, a);
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

    function doBuyFeature_() {
        var obj={};
        obj.options= communicationManager_.getResumeStatus().status.buyInSetup.options;
        obj.options.limit=2500;

        if (displayManager_.getGroup("fsWonPanel").visible==false && canSpin_==true && spinning_==false && isTumbling_==false && (window.SPIN_STATE==undefined || window.SPIN_STATE.spinning!="true") ) {//todo ask Joe about mobile
            if (freeRoundsManager_.getIsInFr()==false && autoPlayManager_.getIsInAutoPlay()==false && lineManager_.getInterruptedWinAnim()==false ) {
                canSpin_=false;
                featureMessageReq_.showMultipleMessageMWJ("Do you want to buy", "Free Spins round?","", buyFeatureCB_, noBF_, obj.options);
            }
        }
    }
    function noBF_(){
        canSpin_=true;
        buttonBF_.frame=2;
        if (buttonBFP_!=undefined)buttonBFP_.frame=2;
    }
    function buyFeatureCB_(par){
        console.log("----------------------buy buyb uy")
        buttonManager_.applyState("SPIN");
        balanceManager_.buyFeatureBet(betCheckCallBuyFeatureBack_,par);
        buttonBF_.frame=2;
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
        noSleep.enable();  //this prevents mobile to go to sleep during FS
        buyIn_=true;
        wasInbuyIn_=json.buyIn/100;
        scatterManager_.parse(json);
        freeSpinsManager_.fsWon(8);
        multiplierFS_=  Number(json.freeSpin.totalWin>0)?json.freeSpin.multiplier-1:json.freeSpin.multiplier;
        fs = freeSpinsManager_.getFreeSpinsEval();
        eventManager_.clearEvt();
        freeSpinsManager_.endAnimHandle(eventManager_);
        eventManager_.triggerEvt();
        if (spinManager_.getSpinResp()!=undefined && spinManager_.getSpinResp().state!=undefined && spinManager_.getSpinResp().state.numFuels!=undefined)spinManager_.getSpinResp().state.numFuels=0;
        setTimeout(setSpin_,11000,[json]);
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
            lastSound_ = 3;
            stopRandomMessages_();
            framework.updateSmallMessageText(Translate.do("Bet:") + " " + Translate.do("free spin"));
            communicationManager_.resetResumeStatus();
            spinManager_.setSpinType(swipe[0], swipe[1]);
            freeTumbling_ = false;
            sucessiveWin_=0;
            bResume_ = false;
            setTimeout(parse_,1500,par);
        }else{
            setTimeout(setSpin_,500,par)
        }
        //balanceManager_.bet(betCheckCallBack_);
    }

    function parse_(par){
        if(par[0].freeSpin==undefined)par[0].freeSpin={};
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
        nextOne:nextOne_,
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
        resumePlanet:resumePlanet_,
        checkAddFs:checkAddFs_,
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
            sucessiveWin_++;
            moveAnchor_(counter);
        },
        resetSuccessiveWinning:function () {
            if (respin_)return;
            if (bResume_)return;
            sucessiveWin_=0;
            moveAnchor_();
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
            return hasScatter_;
        },
        getNumTumbles:function(){
            return numFuels;
        },
        getMultiplier:function(){
            return multiplierFS_;
        },
        getLocked:function(){
            return isLocking_;
        },
        getHarpPlayed:function () {
            return (pigID>=0)?false:true;
        },
        getIsRespin:function(){
            return respin_;
        },
        doCutWinAnim:function () {
            clearTimeout(apTimer_);
            eventManager_.clearEvt();
            //realDoSpin_(false)
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
