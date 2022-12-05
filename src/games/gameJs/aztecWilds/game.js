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
    var freeTumbling_=false;


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
    var scaleH_=window.innerHeight;
    var scaleW_= window.innerWidth;
    var portrait_=false;



    function create_() {

    }

    function initGame_(){
        resume_();
    }

    function resume_(){
        if (framework.isTouch()!=true) {
            //display manager levels
            displayManager_.getGroup("bg").visible = true;
            displayManager_.getGroup("mask").visible = true;
            displayManager_.getGroup("frame").visible = true;
            displayManager_.getGroup("logo").visible = true;
            displayManager_.getGroup("freeSpinAccumulator").visible = true;
            displayManager_.getGroup("fsFire").visible = true;
        }else{
            buttonManager_.applyState("NH");
            displayManager_.getGroup("bg").visible = false;
            displayManager_.getGroup("mask").visible = false;
            displayManager_.getGroup("frame").visible = false;
            displayManager_.getGroup("logo").visible = false;
            displayManager_.getGroup("freeSpinAccumulator").visible = false;
            displayManager_.getGroup("fsFire").visible = false;
        }
        spinManager_.createReels();
        guiBottomBar_.setBetControlInitialBet(ReelConfig.bet);//todo change this, it's just to apply the default bet
        logger("nh call8")
        scatterManager_.addScatter(10);

        if (previewManager_.getClosed()) {
            //If "NEW_UI"
            if (ReelConfig.newUI && framework.isTouch()) {
                window.newUI.onPreview.dispatch(false) //Dispatch onPreview
            }
        }
        gcmCalls_("STAKE",balanceManager_.getCoinValue());
        if (communicationManager_.getResumeStatus().status.hand=="freespins" && communicationManager_.getResumeStatus().status.type=="tumble") {//todo tumble attribute not really correct, i should be able to understand if inside FS
            if (communicationManager_.getResumeStatus().status !=null && communicationManager_.getResumeStatus().status.stake>0){
                changeBet_(communicationManager_.getResumeStatus().status.stake/100, true);
            }
            //f1x2.GcmError(-3);
            freeSpinsManager_.parse(communicationManager_.getResumeStatus());
            buttonManager_.applyHide();
            buttonManager_.applyState("NHFS");
            freeRoundsManager_.frChecker();
            activateShamrockScroll_();
            //play clover bg
            sucessiveWin_=(communicationManager_.getResumeStatus().status.tumblesDone!=undefined)?communicationManager_.getResumeStatus().status.tumblesDone:0;
            messageBox_.showMessage("game", "A free tumble has been interrupted", "Press Spin to continue", startTumble_);
        }else if (communicationManager_.getResumeStatus().status.hand=="freespins" && communicationManager_.getResumeStatus().status.type=="freespins, tumble") {//todo tumble attribute not really correct, i should be able to understand if inside FS
            if (communicationManager_.getResumeStatus().status !=null && communicationManager_.getResumeStatus().status.stake>0){
                changeBet_(communicationManager_.getResumeStatus().status.stake/100, true);
            }
            //f1x2.GcmError(-3);
            freeSpinsManager_.parse(communicationManager_.getResumeStatus());
            buttonManager_.applyHide();
            freeRoundsManager_.frChecker();
            buttonManager_.applyState("NH");
            activateShamrockScroll_();
            sucessiveWin_=4;

            messageBox_.showMessage("game", "A free tumble has been interrupted", "Press Spin to continue", startTumble_);
        }else if (communicationManager_.getResumeStatus().status.hand=="freespins") {
            if (communicationManager_.getResumeStatus().status !=null && communicationManager_.getResumeStatus().status.stake>0){
                changeBet_(communicationManager_.getResumeStatus().status.stake/100, true);
            }
            //f1x2.GcmError(-3);
            freeSpinsManager_.parse(communicationManager_.getResumeStatus());
            buttonManager_.applyHide();
            freeRoundsManager_.frChecker();
            activateShamrockScroll_();
            sucessiveWin_=4;
            messageBox_.showMessage("game", "You have unused Free Spins", "They will be automatically started", startResumeFs_);
        }else{
            soundManager_.playBgSound("bgSlot");
            buttonManager_.applyRestore();
            buttonManager_.applyState("NH");
            freeRoundsManager_.frChecker();

            //play clover bg
            sucessiveWin_=(communicationManager_.getResumeStatus().status.tumblesDone!=undefined)?communicationManager_.getResumeStatus().status.tumblesDone:0;

            activateShamrockScroll_();
        }

        onGame_=true;
        framework.showFramework();
        setPortrait_((getOrientation()=="portrait")?true:false);

        // setTimeout(shamrockPop_,1000);
        //setTimeout(activateShamrockScroll_,6000);

        // setInterval(activateFSMusic,8000);
        //setTimeout(startTest,3000)
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
                xRatio_ = scaleW_ / 864;//ratio between the current Width and the reel width to make the reels bigger as the current width (almost....)
                xRatioFull_ = scaleW_ / 1200;
                var xCompensate= 1;
                if (scaleW_>1000){
                    if (xRatio_>.91){//ipad pro
                        var factor=13500;
                        xCompensate=1+(xRatio_-.91-(scaleW_)/factor);
                        xRatio_=.91;
                    }
                    xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(730*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                }else if (scaleW_>760){//ipad
                    if (xRatio_>.69){
                        var factor=43000;
                        xCompensate=1+(xRatio_-.69-(scaleW_)/factor);
                        xRatio_=.69;
                    }
                    xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(745*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                }else{

                    //other devices which for some reason are showing a heigh smaller then expected
                    if (scaleW_==414 && (scaleH_==622|| scaleH_==620)) {//iphone 8+
                        xRatio_=xRatio_*.91;
                        xCompensate=1.09;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(724*xRatio_*xCompensate));//  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                    }else if (scaleW_==375 && (scaleH_<667)){
                        xRatio_=xRatio_*.87;
                        xCompensate=1.13;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(712*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                    }else if (scaleW_==320 && (scaleH_<453)){
                        xRatio_=xRatio_*.83;
                        xCompensate=1.17;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(704*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                    }else{
                        //android  samsun s8
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(748*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
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


                yOffset_ =  14*xRatio_   // scaleH_- maskHeight - scaleH_/ 2.25;         //change the objects Y position to move on top of the portrait mode UI
                yMask = yOffset_ + (72 * xRatio_)-30;

                adaptPortraitAsset_(displayManager_.getGroup("reels"),xOffset_-112*xRatio_,yOffset_-18*xRatio_,Number(Util.formatNumb(xRatio_*1.16,3)));
                adaptPortraitAsset_(displayManager_.getGroup("cracking"),xOffset_-112*xRatio_,yOffset_-18*xRatio_,Number(Util.formatNumb(xRatio_*1.16,3)));
                adaptPortraitAsset_(displayManager_.getGroup("winGlow"),xOffset_-112*xRatio_,yOffset_-18*xRatio_,Number(Util.formatNumb(xRatio_*1.16,3)));
                adaptPortraitAsset_(displayManager_.getGroup("wild"),xOffset_-112*xRatio_,yOffset_-18*xRatio_,Number(Util.formatNumb(xRatio_*1.16,3)));
                adaptPortraitAsset_(displayManager_.getGroup("fsFire"),xOffset_+507*xRatio_,yOffset_+726*xRatio_,xRatio_*.90);
                adaptPortraitAsset_(displayManager_.getGroup("freeSpinAccumulator"),xOffset_+501*xRatio_,yOffset_+726*xRatio_,xRatio_*.90);
                adaptPortraitAsset_(displayManager_.getGroup("wins"),xOffset_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("freeSpins"),xOffset_-112*xRatio_,yOffset_,xRatio_*1.15);
                adaptPortraitAsset_(displayManager_.getGroup("freeRounds"),xOffset_-112*xRatio_,yOffset_,xRatio_*1.15);
                adaptPortraitAsset_(displayManager_.getGroup("logo"),xOffset_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("bg"),xOffset_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("bgFS"),xOffset_,yOffset_-30,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("frame"),xOffset_,yOffset_-30,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("frameFS"),xOffset_,yOffset_-30,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("mask"), xOffset_-(55*xRatio_),0,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("maskFS"), xOffset_-(50*xRatio_),0,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("lockReels"),xOffset_,yOffset_-30,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("centralLineWin"), scaleW_/2* window.devicePixelRatio,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("centralWin"), xOffset_,yOffset_ - 50,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("winWays"),scaleW_/2,5,xRatio_*1.18);
                adaptPortraitAsset_(displayManager_.getGroup("centralFuntainSmallObj"), xOffset_,yOffset_+500*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("fsWonPanel"),xOffset_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("frWonPanel"),xOffset_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("preview"),xOffset_+200*xRatio_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("msgBox"),xOffset_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("msgBoxFeature"),xOffset_,yOffset_,xRatio_);//-scaleW_/2 +100*xRatio_,0,.55);

                 setPorytraitAssets_(displayManager_.getGroup("logo").children[0],null,-18,-7);


                //portait bg
                setPorytraitAssets_(displayManager_.getGroup("mask").bg2.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("mask").bg2.children[1],true,null,(736));
                setPorytraitAssets_(displayManager_.getGroup("mask").bg3.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("mask").bg3.children[1],true);
                //fs
                setPorytraitAssets_(displayManager_.getGroup("maskFS").bg2.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("maskFS").bg2.children[1],true,null,736);
                setPorytraitAssets_(displayManager_.getGroup("maskFS").bg3.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("maskFS").bg3.children[1],true);

                setPorytraitAssets_(displayManager_.getGroup("bg").bg.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("bg").bg.children[1],true,1016);
                setPorytraitAssets_(displayManager_.getGroup("bg").bg1.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("bg").bg1.children[1],true,-54);
                //FS
                setPorytraitAssets_(displayManager_.getGroup("bgFS").bg.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("bgFS").bg.children[1],true,1020);
                setPorytraitAssets_(displayManager_.getGroup("bgFS").bg1.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("bgFS").bg1.children[1],true,-50);
                //main bg (behind reels)
                setPorytraitAssets_(displayManager_.getGroup("frame").bg4.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("frame").bg4.children[1],true);
                setPorytraitAssets_(displayManager_.getGroup("frameFS").bgf.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("frameFS").bgf.children[1],true);



                //bottom FS
                var offset=freeSpinsManager_.getIsInFs()?-11:0
                setPorytraitAssets_(displayManager_.getText("fsLabel"),true,380,678+offset);
                setPorytraitAssets_(displayManager_.getText("fsValue"),true,370,790+offset);
                setPorytraitAssets_(displayManager_.getText("totWonLabel"),true,910,672+offset);
                setPorytraitAssets_(displayManager_.getText("totWonValue"),true,910,691+offset);
                setPorytraitAssets_(displayManager_.getText("fsMultValue"),true,920,790+offset);

                //FR same positions as FR
                setPorytraitAssets_(displayManager_.getText("frLabel"),true,380,678+offset);
                setPorytraitAssets_(displayManager_.getText("frValue"),true,370,790+offset);
                setPorytraitAssets_(displayManager_.getText("frTotWonLabel"),true,910,672+offset);
                setPorytraitAssets_(displayManager_.getText("frTotWonValue"),true,910,691+offset);


                //preview
                setPorytraitAssets_(displayManager_.getGroup("preview").children[4],null,null,1320);
                setPorytraitAssets_(displayManager_.getGroup("preview").children[5],null,null,1320);
                setPorytraitAssets_(displayManager_.getGroup("preview").children[6],null,null,1320);
                setPorytraitAssets_(displayManager_.getGroup("preview").children[7],null,null,1350);
                setPorytraitAssets_(displayManager_.getGroup("preview").bgmsgPw.children[0],true);
                setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview1.children[0],true,25,660);
                setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview2.children[0],true,260);
                setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview3.children[0],true,460,660);

                setPorytraitAssets_(displayManager_.getGroup("centralLineWin").children[0],null,0);

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
            yMask=72;
            xMask=0;

            adaptPortraitAsset_(displayManager_.getGroup("reels"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("fsFire"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("cracking"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("winGlow"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("wild"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("freeSpinAccumulator"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("wins"),0,0,1);
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
            adaptPortraitAsset_(displayManager_.getGroup("centralFuntainSmallObj"), 0,0);
            adaptPortraitAsset_(displayManager_.getGroup("fsWonPanel"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("frWonPanel"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("frWonPanel"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("msgBox"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("msgBoxFeature"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("logo"),0,0,1);

            //portait bg
            setPorytraitAssets_(displayManager_.getGroup("mask").bg2.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("mask").bg2.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("mask").bg3.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("mask").bg3.children[0],true);
            //fs
            setPorytraitAssets_(displayManager_.getGroup("maskFS").bg2.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("maskFS").bg2.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("maskFS").bg3.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("maskFS").bg3.children[0],true);

            setPorytraitAssets_(displayManager_.getGroup("bg").bg.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("bg").bg.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("bg").bg1.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("bg").bg1.children[0],true,0);
            //fs
            setPorytraitAssets_(displayManager_.getGroup("bgFS").bg.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("bgFS").bg.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("bgFS").bg1.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("bgFS").bg1.children[0],true);
            //main bg (behind reels)
            setPorytraitAssets_(displayManager_.getGroup("frame").bg4.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("frame").bg4.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("frameFS").bgf.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("frameFS").bgf.children[1],false);



            setPorytraitAssets_(displayManager_.getText("fsLabel"),true,displayManager.groups.freeSpins.texts.fsLabel.x,displayManager.groups.freeSpins.texts.fsLabel.y);
            setPorytraitAssets_(displayManager_.getText("fsValue"),true,displayManager.groups.freeSpins.texts.fsValue.x,displayManager.groups.freeSpins.texts.fsValue.y);
            setPorytraitAssets_(displayManager_.getText("totWonLabel"),true,displayManager.groups.freeSpins.texts.totWonLabel.x,displayManager.groups.freeSpins.texts.totWonLabel.y);
            setPorytraitAssets_(displayManager_.getText("totWonValue"),true,displayManager.groups.freeSpins.texts.totWonValue.x,displayManager.groups.freeSpins.texts.totWonValue.y);
            setPorytraitAssets_(displayManager_.getText("fsMultValue"),true,displayManager.groups.freeSpins.texts.fsMultValue.x,displayManager.groups.freeSpins.texts.fsMultValue.y);

            //FR same positions as FS
            setPorytraitAssets_(displayManager_.getText("frLabel"),true,displayManager.groups.freeSpins.texts.fsLabel.x,displayManager.groups.freeSpins.texts.fsLabel.y);
            setPorytraitAssets_(displayManager_.getText("frValue"),true,displayManager.groups.freeSpins.texts.fsValue.x,displayManager.groups.freeSpins.texts.fsValue.y);
            setPorytraitAssets_(displayManager_.getText("frTotWonLabel"),true,displayManager.groups.freeSpins.texts.totWonLabel.x,displayManager.groups.freeSpins.texts.totWonLabel.y);
            setPorytraitAssets_(displayManager_.getText("frTotWonValue"),true,displayManager.groups.freeSpins.texts.totWonValue.x,displayManager.groups.freeSpins.texts.totWonValue.y);

            adaptPortraitAsset_(displayManager_.getGroup("preview"),0,0,1);
            setPorytraitAssets_(displayManager_.getGroup("centralLineWin").children[0],null,displayManager.groups.centralLineWin.texts.lineWin.x);

            setPorytraitAssets_(displayManager_.getGroup("logo").children[0],null,0,0);
            //----

            //preview
            setPorytraitAssets_(displayManager_.getGroup("preview").bgmsgPw.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview1.children[0],true,displayManager.groups.preview.graphAsset.bgPreview1.x ,displayManager.groups.preview.graphAsset.bgPreview1.y);
            setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview2.children[0],true,displayManager.groups.preview.graphAsset.bgPreview2.x ,displayManager.groups.preview.graphAsset.bgPreview2.y);
            setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview3.children[0],true,displayManager.groups.preview.graphAsset.bgPreview3.x ,displayManager.groups.preview.graphAsset.bgPreview3.y);
            setPorytraitAssets_(displayManager_.getGroup("preview").children[4],null,null,displayManager.groups.preview.checkbox.y);
            setPorytraitAssets_(displayManager_.getGroup("preview").children[5],null,null,displayManager.groups.preview.checkbox.y);
            setPorytraitAssets_(displayManager_.getGroup("preview").children[6],null,null,displayManager.groups.preview.checkbox.y);
            setPorytraitAssets_(displayManager_.getGroup("preview").children[7],null,null,displayManager.groups.preview.buttons.closePreview.y);
        }


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
        if (freeSpinsManager_!=undefined) {
            var fs = (freeSpinsManager_.getIsInFs()) ? "FS" : "";
            if(flag==true ||  (previewManager_!=undefined && previewManager_.getClosed()==false )){
                displayManager_.getGroup("preview").visible = !flag;
            }
            displayManager_.getGroup("bg" + fs).visible = !flag;
            if (displayManager_.getGroup("mask" + fs).bg2) displayManager_.getGroup("mask" + fs).bg2.visible = !flag;
            if (displayManager_.getGroup("mask" + fs).bg3) displayManager_.getGroup("mask" + fs).bg3.visible = !flag;
            if (fs == "" || flag == true) displayManager_.getGroup("logo").visible = !flag;
            displayManager_.getGroup("mask" + fs).visible = !flag;
            displayManager_.getGroup("frame" + fs).visible = !flag;
            displayManager_.getGroup("wins" ).visible = !flag;
            if (fs == "" && flag == true)displayManager_.getGroup("freeRounds").visible = !flag;
            if (fs == "" && freeRoundsManager_.getIsInFr() && flag==false){
                displayManager_.getGroup("freeRounds").visible = !flag;
            }
            displayManager_.getGroup("reels").visible = !flag;
            displayManager_.getGroup("cracking").visible = !flag;
            displayManager_.getGroup("fsFire").visible = !flag;
            displayManager_.getGroup("winGlow").visible = !flag;
            if (fs == "FS") displayManager_.getGroup("freeSpins").visible = !flag;
            displayManager_.getGroup("freeSpinAccumulator").visible = !flag;

        }
        if (flag){
            displayManager_.getGroup("msgBox").visible=false;
            framework.hideFramework();
        }else{
            if (messageBox_.getIsOnMessage())displayManager_.getGroup("msgBox").visible=true;
            framework.showFramework();
        }
        if (flag==false && fs=="FS"){
            displayManager_.getGroup("logo").visible = false;
            displayManager_.getGroup("bg").visible=false;
            displayManager_.getGroup("mask").visible=false;
            displayManager_.getGroup("frame").visible=false;
            displayManager_.getGroup("bgFS").visible=true;
            displayManager_.getGroup("frameFS").visible=true;
            displayManager_.getGroup("maskFS").visible=true;
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



    function startTest(){
        setTimeout(startBgSound,2000,2);
        //setTimeout(startBgSound,4000,4);
        //setTimeout(startBgSound,6000,5);
        //setTimeout(startBgSound,7000,6);
        //setTimeout(startBgSound,9000,7);
        //setTimeout(startBgSound,12000,8);
        setTimeout(checkSync,8000)
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

        shamrockPos_=sucessiveWin_;
        if (shamrockPos_>0) {
            if (resume){
                for (var a = 1; a <= shamrockPos_; a++) {
                    if (displayManager_.getGroup("freeSpinAccumulator")["shamrock_" + a].children[0].alpha == 0 && resume == false) {
                        displayManager_.getGroup("freeSpinAccumulator")["shamrock_" + a].children[0].alpha = 1;
                    }
                    displayManager_.getGroup("freeSpinAccumulator")["shamrock_" + a].children[0].animations.add("anim", arr);
                    if (sucessiveWin_ >= 4) {
                        soundManager_.playSound("sideF4");
                        displayManager_.getGroup("freeSpinAccumulator")["shamrock_" + a].children[0].animations.play("anim", fps, false, false);
                    } else {
                        if (shamrockPos_ > 0) soundManager_.playSound("sideF"+a);
                        displayManager_.getGroup("freeSpinAccumulator")["shamrock_" + a].children[0].animations.play("anim", fps, false);
                    }

                    if (a > 0 && a < 6) {
                        soundManager_.playAdditionalBgSound_("bgSlot"+((a)+1));
                        soundManager_.getBGSound("bgSlot"+((a)+1)).fadeInBgSoundExternal(500, audioLevel[(a)+1], soundManager_.getBGSound("bgSlot").getSound().currentTime, null);

                    }
                }



            }else{
                if (displayManager_.getGroup("freeSpinAccumulator")["shamrock_" + shamrockPos_].children[0].alpha == 0 && resume == false) {
                    displayManager_.getGroup("freeSpinAccumulator")["shamrock_" + shamrockPos_].children[0].alpha = 1;
                }
                displayManager_.getGroup("freeSpinAccumulator")["shamrock_" + shamrockPos_].children[0].animations.add("anim", arr);
                if (sucessiveWin_ >= 4) {
                    soundManager_.playSound("sideF4");
                    displayManager_.getGroup("freeSpinAccumulator")["shamrock_" + shamrockPos_].children[0].animations.play("anim", fps, false, false);
                } else {
                    if (shamrockPos_ > 0) soundManager_.playSound("sideF"+shamrockPos_);
                    displayManager_.getGroup("freeSpinAccumulator")["shamrock_" + shamrockPos_].children[0].animations.play("anim", fps, false);
                }

                if (shamrockPos_ > 0 && shamrockPos_ < 6) {
                    soundManager_.playAdditionalBgSound_("bgSlot"+((shamrockPos_)+1));
                    soundManager_.getBGSound("bgSlot"+((shamrockPos_)+1)).fadeInBgSoundExternal(500, audioLevel[(shamrockPos_)+1], soundManager_.getBGSound("bgSlot").getSound().currentTime, null);

                }

            }

        }else{
            for (var a = 1; a <= 8; a++) {
                if (soundManager_.getBGSound("bgSlot" + a) != null) soundManager_.getBGSound("bgSlot" + a).fadeOutBgSound(1000);
                var revAnimFrameSeq_ = [];
                if (displayManager_.getGroup("freeSpinAccumulator")["shamrock_" + a].children[0].animations.frame>0) {
                    for (var b = 0; b <= displayManager_.getGroup("freeSpinAccumulator")["shamrock_" + a].children[0].animations._outputFrames.length; b++) {
                        revAnimFrameSeq_.push(b);
                    }
                    revAnimFrameSeq_.reverse();
                    displayManager_.getGroup("freeSpinAccumulator")["shamrock_" + a].children[0].animations.add("anim", revAnimFrameSeq_);
                    displayManager_.getGroup("freeSpinAccumulator")["shamrock_" + a].children[0].animations.play("anim", 32, false);
                    soundManager_.playSound("sideF0");
                }
            }
        }
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

    function startResumeBonus_(){
        buttonManager_.applyRestore();
        bonusManager_.setResumeFlag(true);
        communicationManager_.sendServletRequest("bonusSetup");
    }

    function startTumble_(){
        //idleCycleManager_.startIdleCycle();
        //idleCycleManager_.forceIdleCycle("s1"); //forces the logo to idle cycle
        //idleCycleManager_.forceIdleCycle("s2"); //forces the logo to idle cycle
        //soundManager_.playBgSound("bgSlot");

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

            if (freeSpinsManager_.getIsInFs() || fsWon) {
                fs = freeSpinsManager_.getFreeSpinsEval();
            }

            console.log("game tumble win "+ won)
            if (wonBonus == 0) {
                logger("NO bonus found ")

                wildManager_.endAnimHandle((winManager_.getWildNum()>0)?winManager_.getWildSimbs():null, eventManager_);

                if (won > 0) {
                    lineManager_.endAnimHandle(winManager_.getAllWinsSorted(), eventManager_);
                    freeSpinsManager_.endAnimHandle(eventManager_);
                } else {
                    if (freeSpinsManager_.getIsInFs())eventManager_.addEvent(fakeEvent_,1000);//just a delay to make sure payment are displayed
                    freeSpinsManager_.endAnimHandle(eventManager_);

                }
                buttonManager_.applyState("AFTERSPIN");

                if (fsWon && freeSpinsManager_.getIsInFs() == true && freeSpinsManager_.getFsNumber() == 0) {
                    eventManager_.addEvent(fsEval_, 3000);
                } else {
                    eventManager_.addEvent(fsEval_, 200);
                }
            } else {
                logger("bonus found ");
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

            if (won>0) {
                lineManager_.endAnimHandle(winManager_.getAllWinsSorted(), eventManager_);
                freeSpinsManager_.endAnimHandle(eventManager_);

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
                //framework.updateSmallMessageText(Translate.do("Good luck"));
                balanceManager_.setCanUpdate(true);
            }
            buttonManager_.applyState("AFTERSPIN");

            if (freeSpinsManager_.getType()!="tumble" || freeSpinsManager_.getIsInFs() == true) {
                if (fsWon && freeSpinsManager_.getIsInFs() == true && freeSpinsManager_.getFsNumber() == 0) {
                    eventManager_.addEvent(fsEval_, 2000);
                } else {
                    eventManager_.addEvent(fsEval_,  0);
                }
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
            setTimeout(enableButton_, 200);
            multiplierManager_.updateMultiplier(true);
        }else{
            enableButton_();
            multiplierManager_.resetMultipliers();
        }
    }

    function enableButton_() {
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
                    var tOut= (won>0)?lineManager_.getTotalDuration():200;
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

        activateShamrockScroll_();
        moveClover_(false);
        //idleCycleManager_.startIdleCycle();
        //displayManager_.getGroup("idleObjects").visible=true;
        //idleCycleManager_.forceIdleCycle("s1"); //forces the logo to idle cycle
        //idleCycleManager_.forceIdleCycle("s2"); //forces the logo to idle cycle

    }

    function getBetConfigurationDeg_() {
        return [72, 36, 0, 324, 288, 252, 216, 180, 144, 108];    //todo read from json
    }

    function getBetConfiguration_() {
        return ["0.01", "0.02", "0.05", "0.10", "0.25", "0.50", "1.00", "2.00", "5.00", "10.00"]; //todo read from json
    }

    function fakeEvent_() {
    }

    function endBombAnimation_(param,img){
        param.push(this);
        var blast;
        var stage=param[0].stage;
        var objP;
        var scaleFactor=1.7;
        var tOut=(compulsiveFlag_)?100:500;
        var speed=(compulsiveFlag_)?48:36;

        if (this._parent==undefined){
            objP=img;
            scaleFactor=1.25;
        }else{
            tOut=(compulsiveFlag_)?150:600;
            speed=(compulsiveFlag_)?48:24;
            objP=this._parent;
        }

        if (param[0].anim[stage]=="boom") {
            blast = game_.add.sprite(objP.x, objP.y, "cherryBlast");
            blast.animations.add("anim");
            blast.animations.play("anim", speed, false, true, endBombAnimation_, param);//todo parametric loop
            blast.scale.x = scaleFactor;
            blast.scale.y = scaleFactor;
            blast.anchor.set(.5, .5);
            blast.visible = true;
            displayManager_.getGroup("lines").add(blast);
            soundManager_.playSound("bomb");
            setTimeout(afterExplosion_, tOut, param[0].reel, param[0].realSmb, param[0].icon[stage],param[0].smb);
            stage++;
            param[0].stage=stage;
            param[1].remove(objP);
        }
    }

    function afterExplosion_(par1,par2,par3,par4){
        var trigger=false;
        var scatterAnim=false;
        var fsAnim=false;

        var s =spinManager_.getReels()[par1].replaceIcon(par2,par3,{"type":"fade"});
        s.reel=par1;
        s.smb=par2;
        if (spinManager_.getSpinReelResp().reel[par1].smb[par4].special=="trigger") {
            if (spinManager_.getSpinReelResp().reel[par1].smb[par4].smb==8){
                winManager_.addFsWinSmb(s);
                fsAnim=true;
            }else{
                spinManager_.addTriggerIcon(s);
                trigger=true;
            }
        }else if (spinManager_.getSpinReelResp().reel[par1].smb[par4].special=="anim") {
            winManager_.addScatterWinSmb(s);
            scatterAnim=true;
        }
        if (trigger){
            setTimeout(startBonus_,(compulsiveFlag_)?200:1200);
        }else if (scatterAnim){
            setTimeout(animScatterWin_,(compulsiveFlag_)?200:1200);
        }else if (fsAnim){
            setTimeout(animFsWin_,(compulsiveFlag_)?200:1200);
        }
    }

    function animFsWin_(){
        if (showFsWin_==true)return;
        showFsWin_=true;
        freeSpinsManager_.showFsIconAfterSubst(winManager_.getFsSimbs());
    }

    function animScatterWin_(){
        if (showScatterWin_==true)return;
        showScatterWin_=true;
        scatterManager_.showScatterAfterSubst(winManager_.getScatterSimbs(), winManager_.getScatterWinAmt());
    }

    function upperSmbCallBack_(i) {
        //called after spin to move the symbols in the upper position before moving the reel
        for (var a = 0; a < ReelConfig.numIcons; a++) {
            var smb = (spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb != null) ? spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb : spinManager_.getSpinReelResp().reel[i].smb[a].smb;
            if (freeSpinsManager_.getIsInFs()== false || spinManager_.getSpinReelResp().reel[i].smb[a].notShow!=true) {
                if (spinManager_.getSpinReelResp().reel[i].smb[a].smb==13) { //check for special to animate
                    var obj={};
                    obj.type="anim";
                    obj.loop=true;
                    obj.callBack=null;
                    var s = spinManager_.getReels()[i].swapSmb(smb, a ,obj);
                    soundManager_.playSound("smbWin_13");
                    s.scale.x=1;
                    s.scale.y=1;
                }else{
                    var s = spinManager_.getReels()[i].swapSmb(smb, a);
                }
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

    function startVibrate_(duration,repeat,offset){
        var fs= (freeSpinsManager_!=undefined && freeSpinsManager_.getIsInFs())?"FS":"";
        offset=offset*(sucessiveWin_/2);
        vibration_(displayManager_.getGroup("frame"+fs),duration,repeat,offset);
        vibration_(displayManager_.getGroup("mask"+fs),duration,repeat,offset);
        vibration_(displayManager_.getGroup("bg"+fs),duration,repeat,offset);
        vibration_(displayManager_.getGroup("freeSpinAccumulator"),duration,repeat,offset);
        vibration_(displayManager_.getGroup("fsFire"),duration,repeat,offset);
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
        endBombAnimation:endBombAnimation_,
        upperSmbCallBack:upperSmbCallBack_,
        playTriggeredSmb:playTriggeredSmb_,
        changeCompulsiveState:changeCompulsiveState_,
        spinAnimEndAfterTumbling:spinAnimEndAfterTumbling_,
        shamrockPop:shamrockPop_,
        setPortrait:setPortrait_,
        loadedPortrait:loadedPortrait_,
        hideGame:hideGame_,
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
            if (communicationManager_.getResumeStatus().status.hand=="freespins" && communicationManager_.getResumeStatus().status.type=="tumble") {
                moveClover_(true);
            }else if(communicationManager_.getResumeStatus().status.hand=="freespins") {
                moveClover_(true);
                soundManager_.playBgSound("bgFs");
            }else{
                moveClover_(true);
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
        resetSuccessiveWinning:function () {
            if (freeSpinsManager_.getIsInFs())return;
            sucessiveWin_=0;
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
        getEventManager:function () {
            return eventManager_;
        }
    }

    return me;
}
