function Game(gameRef) {
    var game_ = gameRef;
    var onGame_=false;
    //animations
    var fs;
    var fr;
    var fsWon;
    var ap;
    var won;
    var spinning_=false;
    var messageOn_=false;
    var refuseCompulsive_=false;
    var compulsiveFlag_=false;
    var compulsiveSettingBakup_=displayManager.groups.centralWin.thresHolds;

    var waitForSubstitution_=false;
    var wonBonus=0;
    var onGame_=false;
    var spinning_=false;
    var showScatterWin_=false;
    var showFsWin_=false;

    var choose_=false;
    var fadeBg_=false;
    var iFadeT_O_=0;
    var lineCompletion_=false;

    var battlAnimFS_=false;

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
    var reelFlames_=[];
    var scatterSmb_=0;
    var stopped_=false;
    var buttonBF_;
    var buttonBFP_;
    var buyIn_=false;
    var wasInbuyIn_=0;
    var bResume_=false;
    var apTimer_=0;


    function create_() {
        if (framework.isTouch()==true) {
            buttonManager_.applyState("NH");
            framework.hideFramework();
        }
    }

    function initGame_(){
        if (framework.isTouch()!=true) {
            //display manager levels
            displayManager_.getGroup("bg").visible = true;
            displayManager_.getGroup("mask").visible = true;
            displayManager_.getGroup("frame").visible = true;
            displayManager_.getGroup("logo").visible = true;
        }else{
            buttonManager_.applyState("NH");
            displayManager_.getGroup("bg").visible = false;
            displayManager_.getGroup("mask").visible = false;
            displayManager_.getGroup("frame").visible = false;
            displayManager_.getGroup("logo").visible = false;
        }
        spinManager_.createReels();
        guiBottomBar_.setBetControlInitialBet(ReelConfig.bet);//todo change this, it's just to apply the default bet
        logger("nh call8")
        scatterManager_.addScatter(11);

        //guyin
        if (buyFeatureEnabled_()) {
            if (!framework.isTouch()) {
                buttonBF_ = new Phaser.Button(game_, displayManager.groups.buyFeature.buttons.buyFeature.x, displayManager.groups.buyFeature.buttons.buyFeature.y, displayManager.groups.buyFeature.buttons.buyFeature.name, me[displayManager.groups.buyFeature.buttons.buyFeature.evt], this, 1, 2, 0, 0);
            }else{
                buttonBF_ = new Phaser.Button(game_, displayManager.groups.buyFeature.buttons.buyFeature.x, displayManager.groups.buyFeature.buttons.buyFeature.y + 22, displayManager.groups.buyFeature.buttons.buyFeature.name, me[displayManager.groups.buyFeature.buttons.buyFeature.evt], this, 1, 2, 0, 0);
            }
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

        //resuming wilds
        wildManager_.resumeWildReel();
        gcmCalls_("STAKE",balanceManager_.getCoinValue());

        if (communicationManager_.getResumeStatus().status.state=="FREESPINS") {
            if (communicationManager_.getResumeStatus().status !=null && communicationManager_.getResumeStatus().status.stake>0){
                changeBet_(communicationManager_.getResumeStatus().status.stake/100, true);
            }
            //f1x2.GcmError(-3);
            freeRoundsManager_.frChecker();
            communicationManager_.getResumeStatus().freeSpin.totalWin=communicationManager_.getResumeStatus().freeSpin.object.totalWin*(balanceManager_.getCoinValue()/ lineManager_.getLinesNumber());
            wasInbuyIn_=communicationManager_.getResumeStatus().buyIn/100;
            freeSpinsManager_.parse(communicationManager_.getResumeStatus());
            freeSpinsManager_.resumeFs();
            buttonManager_.applyState("NHFS");
            buttonManager_.applyHide();
            messageBox_.showMessage("game", "\n"+ Translate.do("You have unused Free Spins"), "\n"+Translate.do("They will be automatically started"), startResumeFs_);
        }else{
            buttonManager_.applyRestore();
            buttonManager_.applyState("NH");
            freeRoundsManager_.frChecker();
            idleCycleManager_.startIdleCycle();
            idleCycleManager_.forceIdleCycle("s1"); //forces the logo to idle cycle
            idleCycleManager_.forceIdleCycle("s2"); //forces the logo to idle cycle
        }

        onGame_=true;
        framework.showFramework();
        setPortrait_((getOrientation()=="portrait")?true:false);

        if (previewManager_.getClosed()) {
            //If "NEW_UI"
            if (ReelConfig.newUI && framework.isTouch()) {
                window.newUI.onPreview.dispatch(false) //Dispatch onPreview
            }
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

    function startResumeBonus_(){
        buttonManager_.applyRestore();
        bonusManager_.setResumeFlag(true);
        communicationManager_.sendServletRequest("bonusSetup");
    }

    function startResumeFs_(){
        //freeSpinsManager_.resumeFs();
        buttonManager_.applyRestore();
        realDoSpin_([false]);
    }

    function setPortrait_(port){
        scaleH_=window.innerHeight;
        scaleW_= window.innerWidth;
        if (framework.isTouch()!=true)return;
        hideGame_(true);
        portrait_=port;
        loaderManager_.switchPortrait(port);
        if (portraitLoading_)return;
        var fs= (freeSpinsManager_!=undefined && freeSpinsManager_.getIsInFs())?"FS":"";

        //alert(scaleH_ + " bb " + scaleW_)
        if (port) {
            if (portraitLoaded_) {
                xRatio_ = scaleW_ / 1000;//ratio between the current Width and the reel width to make the reels bigger as the current width (almost....)
                xRatioFull_ = scaleW_ / 1200;
                var xCompensate= 1;
                var yCompensate=0;
                if (scaleW_>1000){
                        xRatio_=xRatio_*.8;
                        xCompensate=1.2;
                    xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(880*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                }else if (scaleW_>760){//ipad
                    if (xRatio_>.85){   //samsung tab
                        xRatio_=xRatio_*.7;
                        xCompensate=1.3;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(854*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode

                    }else if (xRatio_>.72){//ipad
                        xRatio_=xRatio_*.8;
                        xCompensate=1.2;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(878*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                    }
                }else{

                    //other devices which for some reason are showing a heigh smaller then expected
                    if (scaleW_==414 && (scaleH_==622|| scaleH_==620)) {//iphone plus
                        xRatio_=xRatio_*.85;
                        xCompensate=1.15;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(910*xRatio_*xCompensate));//  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                    }else if (scaleW_==375 && (scaleH_<667)){   //iphone 11
                        xRatio_=xRatio_*.85;
                        xCompensate=1.15;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(880*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                    }else if (scaleW_==320 && (scaleH_<455)){//iphone 6 7
                        xRatio_=xRatio_*.8;
                        xCompensate=1.2;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(810*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                    }else{
                        xRatio_=xRatio_*.85;
                        xCompensate=1.2;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(850*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
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

                yOffset_ =  104*xRatio_   // scaleH_- maskHeight - scaleH_/ 2.25;         //change the objects Y position to move on top of the portrait mode UI
                yMask = yOffset_ + (72 * xRatio_)-30*xRatio_;

                adaptPortraitAsset_(displayManager_.getGroup("reels"),xOffset_-14*xRatio_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("wild"),xOffset_-14*xRatio_,yOffset_,xRatio_)
                adaptPortraitAsset_(displayManager_.getGroup("wins"),xOffset_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("lines"),xOffset_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("reelFg"),xOffset_-14*xRatio_,yOffset_,xRatio_)
                adaptPortraitAsset_(displayManager_.getGroup("bgIconAnim"),xOffset_-14*xRatio_,yOffset_,xRatio_)
                adaptPortraitAsset_(displayManager_.getGroup("fsCounter"),xOffset_-14*xRatio_,yOffset_,xRatio_)
                adaptPortraitAsset_(displayManager_.getGroup("scatter"),xOffset_-14*xRatio_,yOffset_,xRatio_)
                adaptPortraitAsset_(displayManager_.getGroup("wild"),xOffset_-14*xRatio_,yOffset_,xRatio_)

                adaptPortraitAsset_(displayManager_.getGroup("freeSpins"),xOffset_-112*xRatio_,yOffset_,xRatio_*1.15);
                adaptPortraitAsset_(displayManager_.getGroup("freeRounds"),xOffset_,yOffset_,xRatio_*1.15);
                adaptPortraitAsset_(displayManager_.getGroup("logo"),xOffset_-(5*xRatio_),yOffset_ -(55*xRatio_),xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("bg"),xOffset_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("bgFS1"),xOffset_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("bgFS2"),xOffset_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("frame"),xOffset_,yOffset_-30,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("frameFS1"),xOffset_,yOffset_-30,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("frameFS2"),xOffset_,yOffset_-30,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("mask"), xOffset_-(55*xRatio_),0,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("maskFS1"), xOffset_-(55*xRatio_),0,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("maskFS2"), xOffset_-(55*xRatio_),0,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("centralLineWin"), scaleW_/2* window.devicePixelRatio,yOffset_+300*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("centralWin"), xOffset_,yOffset_ + 80,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("centralFuntainSmallObj"), xOffset_,yOffset_+500*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("fsWinPanel"),xOffset_,yOffset_+80*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("fsEndPanel"),xOffset_,yOffset_+80*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("frWonPanel"),xOffset_,yOffset_+80*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("preview"),xOffset_+10*xRatio_,yOffset_-200*xRatio_,xRatio_*1.4);
                adaptPortraitAsset_(displayManager_.getGroup("msgBox"),xOffset_,yOffset_+10*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("msgBoxFR"),xOffset_-170*xRatio_,yOffset_+10*xRatio_,xRatio_*1.2);
                adaptPortraitAsset_(displayManager_.getGroup("msgBoxFeature"),xOffset_,yOffset_+10*xRatio_,xRatio_);//-scaleW_/2 +100*xRatio_,0,.55);
                adaptPortraitAsset_(displayManager_.getGroup("buyFeature"),xOffset_-255*xRatio_,yOffset_-53*xRatio_,xRatio_);//-1*( displayManager_.getGroup("idleObjects").children[0].x) + scaleW_/2 ,-1*( displayManager_.getGroup("idleObjects").children[0].y)+20,xRatio_);

                //portait bg
                setPorytraitAssets_(displayManager_.getGroup("mask").bg2.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("mask").bg2.children[1],true,null,(736));
                setPorytraitAssets_(displayManager_.getGroup("mask").bg3.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("mask").bg3.children[1],true);
                //fs
                setPorytraitAssets_(displayManager_.getGroup("maskFS1").bg2.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("maskFS1").bg2.children[1],true,null,(736));
                setPorytraitAssets_(displayManager_.getGroup("maskFS1").bg3.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("maskFS1").bg3.children[1],true);
                setPorytraitAssets_(displayManager_.getGroup("maskFS2").bg2.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("maskFS2").bg2.children[1],true,null,(736));
                setPorytraitAssets_(displayManager_.getGroup("maskFS2").bg3.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("maskFS2").bg3.children[1],true);

                setPorytraitAssets_(displayManager_.getGroup("bg").bg.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("bg").bg.children[1],true,1038);
                setPorytraitAssets_(displayManager_.getGroup("bg").bg1.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("bg").bg1.children[1],true,-54);
                //FS
                setPorytraitAssets_(displayManager_.getGroup("bgFS1").bg.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("bgFS1").bg.children[1],true,1070);
                setPorytraitAssets_(displayManager_.getGroup("bgFS1").bg1.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("bgFS1").bg1.children[1],true,-54);
                setPorytraitAssets_(displayManager_.getGroup("bgFS2").bg.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("bgFS2").bg.children[1],true,1070);
                setPorytraitAssets_(displayManager_.getGroup("bgFS2").bg1.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("bgFS2").bg1.children[1],true,-54);
                //main bg (behind reels)
                setPorytraitAssets_(displayManager_.getGroup("frame").bg4.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("frame").bg4.children[1],true);

                //FR
                setPorytraitAssets_(displayManager_.getGroup("freeRounds").frPanel.children[0],null,550);
                setPorytraitAssets_(displayManager_.getText("frLabel"),null,280);
                setPorytraitAssets_(displayManager_.getText("frValue"),null,280);
                setPorytraitAssets_(displayManager_.getText("frTotWonLabel"),null,820);
                setPorytraitAssets_(displayManager_.getText("frTotWonValue"),null,820);

                //bottom FS
                setPorytraitAssets_(displayManager_.getGroup("freeSpins").fsP.children[0],null,null,575);
                setPorytraitAssets_(displayManager_.getText("fsMultValue"),null,null,575);

                setPorytraitAssets_(displayManager_.getText("fsLabel"),true,450,-50);
                setPorytraitAssets_(displayManager_.getText("fsValue"),true,450,-25);
                setPorytraitAssets_(displayManager_.getText("totWonLabel"),true,850,-50);
                setPorytraitAssets_(displayManager_.getText("totWonValue"),true,850,-25);

                displayManager_.getText("fsLabel").fontSize=23;
                displayManager_.getText("fsValue").fontSize=33;
                displayManager_.getText("totWonLabel").fontSize=23;
                displayManager_.getText("totWonValue").fontSize=33;
                //preview
                setPorytraitAssets_(displayManager_.getGroup("preview").children[5],null,null,1130);
                setPorytraitAssets_(displayManager_.getGroup("preview").children[6],null,null,1135);
                setPorytraitAssets_(displayManager_.getGroup("preview").children[7],null,null,1120);
                setPorytraitAssets_(displayManager_.getGroup("preview").children[8],null,null,1150);
                setPorytraitAssets_(displayManager_.getGroup("preview").bgmsgPwL.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("preview").bgmsgPwP.children[0],true);
                setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview1.children[0],true,25,660);
                setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview2.children[0],true,260);
                setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview3.children[0],true,460,660);

                setPorytraitAssets_(displayManager_.getGroup("centralLineWin").children[0],null,0);

                displayManager_.getText("lineWin")._fontSize=90;


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
            adaptPortraitAsset_(displayManager_.getGroup("wild"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("lines"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("reelFg"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("wins"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("freeSpins"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("freeRounds"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("bg"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("bgFS1"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("bgFS2"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("frame"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("frameFS1"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("frameFS2"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("mask"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("maskFS1"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("maskFS2"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("centralWin"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("centralLineWin"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("centralFuntainSmallObj"), 0,0);
            adaptPortraitAsset_(displayManager_.getGroup("fsWinPanel"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("fsEndPanel"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("frWonPanel"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("frWonPanel"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("msgBox"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("msgBoxFR"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("msgBoxFeature"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("logo"),228,0,.65);
            adaptPortraitAsset_(displayManager_.getGroup("buyFeature"),0,0,1);

            //portait bg
            setPorytraitAssets_(displayManager_.getGroup("mask").bg2.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("mask").bg2.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("mask").bg3.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("mask").bg3.children[0],true);
            //fs
            setPorytraitAssets_(displayManager_.getGroup("maskFS1").bg2.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("maskFS1").bg2.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("maskFS1").bg3.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("maskFS1").bg3.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("maskFS2").bg2.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("maskFS2").bg2.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("maskFS2").bg3.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("maskFS2").bg3.children[0],true);

            setPorytraitAssets_(displayManager_.getGroup("bg").bg.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("bg").bg.children[0],true,1050);
            setPorytraitAssets_(displayManager_.getGroup("bg").bg1.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("bg").bg1.children[0],true,0);
            //fs
            setPorytraitAssets_(displayManager_.getGroup("bgFS1").bg.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("bgFS1").bg.children[0],true,1080);
            setPorytraitAssets_(displayManager_.getGroup("bgFS1").bg1.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("bgFS1").bg1.children[0],true,0);
            setPorytraitAssets_(displayManager_.getGroup("bgFS2").bg.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("bgFS2").bg.children[0],true,1080);
            setPorytraitAssets_(displayManager_.getGroup("bgFS2").bg1.children[1],false);
            setPorytraitAssets_(displayManager_.getGroup("bgFS2").bg1.children[0],true,0);

            setPorytraitAssets_(displayManager_.getGroup("freeRounds").frPanel.children[0],null,640);
            setPorytraitAssets_(displayManager_.getText("frLabel"),null,300);
            setPorytraitAssets_(displayManager_.getText("frValue"),null,300);
            setPorytraitAssets_(displayManager_.getText("frTotWonLabel"),null,1020);
            setPorytraitAssets_(displayManager_.getText("frTotWonValue"),null,1020);

            //main bg (behind reels)
            setPorytraitAssets_(displayManager_.getGroup("frame").bg4.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("frame").bg4.children[1],false);



            setPorytraitAssets_(displayManager_.getText("fsLabel"),true,displayManager.groups.freeSpins.texts.fsLabel.x,displayManager.groups.freeSpins.texts.fsLabel.y);
            setPorytraitAssets_(displayManager_.getText("fsValue"),true,displayManager.groups.freeSpins.texts.fsValue.x,displayManager.groups.freeSpins.texts.fsValue.y);
            setPorytraitAssets_(displayManager_.getText("totWonLabel"),true,displayManager.groups.freeSpins.texts.totWonLabel.x,displayManager.groups.freeSpins.texts.totWonLabel.y);
            setPorytraitAssets_(displayManager_.getText("totWonValue"),true,displayManager.groups.freeSpins.texts.totWonValue.x,displayManager.groups.freeSpins.texts.totWonValue.y);
            setPorytraitAssets_(displayManager_.getText("fsMultValue"),null,null,displayManager.groups.freeSpins.texts.fsMultValue.y);
            adaptPortraitAsset_(displayManager_.getGroup("preview"),0,0,1);
            setPorytraitAssets_(displayManager_.getGroup("centralLineWin").children[0],null,displayManager.groups.centralLineWin.texts.lineWin.x);
            displayManager_.getText("fsLabel").fontSize=12;
            displayManager_.getText("fsValue").fontSize=23;
            displayManager_.getText("totWonLabel").fontSize=12;
            displayManager_.getText("totWonValue").fontSize=23;
            //----

            //preview
            setPorytraitAssets_(displayManager_.getGroup("preview").bgmsgPwL.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("preview").bgmsgPwP.children[0],false);
            setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview1.children[0],true,displayManager.groups.preview.graphAsset.bgPreview1.x ,displayManager.groups.preview.graphAsset.bgPreview1.y);
            setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview2.children[0],true,displayManager.groups.preview.graphAsset.bgPreview2.x ,displayManager.groups.preview.graphAsset.bgPreview2.y);
            setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview3.children[0],true,displayManager.groups.preview.graphAsset.bgPreview3.x ,displayManager.groups.preview.graphAsset.bgPreview3.y);
            setPorytraitAssets_(displayManager_.getGroup("preview").children[5],null,null,displayManager.groups.preview.checkbox.y);
            setPorytraitAssets_(displayManager_.getGroup("preview").children[6],null,null,displayManager.groups.preview.checkbox.y);
            setPorytraitAssets_(displayManager_.getGroup("preview").children[7],null,null,displayManager.groups.preview.checkbox.y);
            setPorytraitAssets_(displayManager_.getGroup("preview").children[8],null,null,displayManager.groups.preview.buttons.closePreview.y);
            displayManager_.getText("lineWin")._fontSize=80;
        }


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
        if (freeSpinsManager_!=undefined) {
            var fs =  "";
            if(flag==true ||  (previewManager_!=undefined && previewManager_.getClosed()==false )){
                displayManager_.getGroup("preview").visible = !flag;
            }
            if (previewManager_.getClosed()==false && flag ==false)return;
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
            if (fs == "FS") displayManager_.getGroup("freeSpins").visible = !flag;
           // displayManager_.getGroup("centralWin").visible = !flag;
           // displayManager_.getGroup("centralLineWin").visible = !flag;
            displayManager_.getGroup("buyFeature").visible = !flag;
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
        if (freeSpinsManager_.getIsInFs() ||  freeRoundsManager_.getIsInFr()){
            displayManager_.getGroup("logo").visible = false;
        }

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
        if (buttonManager_.getButton(frameworkSettings.buttons.spinButton.id).isEnable()==true) {
            soundManager_.playSound("spinClick");
            realDoSpin_([false]);
            if (Util.getRandomInt(1,100)>30){//forces the logo to idle cycle
                idleCycleManager_.forceIdleCycle("s1");
                idleCycleManager_.forceIdleCycle("s2"); //forces the logo to idle cycle
            }

        }else {
            return false;
        }
    }

    function realDoSpin_(swipe){//swipte=array
        if(!onGame_)return;
        if(buyIn_)return;
        if(spinning_ && gotErrorInAp_==false)return;
        if(messageOn_==true){

            return;
        }
        stopped_=false;
        scatterSmb_=0;
        spinning_=true;
        buyIn_=false;
        battlAnimFS_=false;
        eventManager_.clearEvt();
        //console.log("----spin ---- "+ getStackTrace().join('\n'));

        if(won){
            //  updateBalance_("WIN");
        }
        if(displayManager_.getGroup("bgIconAnim"))displayManager_.getGroup("bgIconAnim").alpha=0;
        //clear
        for (var a in displayManager_.getGroup("bgIconAnim").children){
            if (displayManager_.getGroup("bgIconAnim").children[a].tw!=undefined) displayManager_.getGroup("bgIconAnim").children[a].tw.kill();
            displayManager_.getGroup("bgIconAnim").remove(displayManager_.getGroup("bgIconAnim").children[a]);
        }
        buttonManager_.applyState("SPIN");

        if (ReelConfig.spinType=="singleIconReelSpin") {
            //spinManager_.startSpin(swipe[0]);
        }else{
            lineManager_.stopEvents();
            bonusManager_.clearLineEval();
            wildManager_.clearWild(winManager_.getWildSimbs());

            winAmtManager_.resetWinManager();
            soundManager_.stopSound("winSound");
            balanceManager_.bet(betCheckCallBack_);
        }
    }

    function betCheckCallBack_(response) {
        var swipe = [false];

            //handling FS message here
        if (response == true) {
            if (autoPlayManager_.getIsInAutoPlay() == false || autoPlayManager_.getPreAutoPlayAutoriz() == true) {
                waitForSubstitution_ = false;
                showScatterWin_ = false;
                showFsWin_ = false;

                autoPlayManager_.updateApNum();
                freeSpinsManager_.updateFreeSpinsNum();
                freeRoundsManager_.updateFreeRoundsNum();

                logger(" interrupted win animation ");
                winAmtManager_.forceToComplete();
                lineManager_.clearLineAfterValue();
                if (freeSpinsManager_.getIsInFs() == true) {
                    noSleep.enable();  //this prevents mobile to go to sleep during FS
                    framework.updateSmallMessageText(Translate.do("Bet:") + " " + Translate.do("free re-spins"));
                } else if (freeRoundsManager_.getIsInFr() == true) {
                    framework.updateSmallMessageText(Translate.do("Bet:") + " " + Translate.do("free rounds"));
                } else {
                    if (balanceManager_.getShowIncredits() == false) {
                        framework.updateSmallMessageText(Translate.do("Bet:") + " " + balanceManager_.geBalanceObj().currency + "" + Util.formatNumber(balanceManager_.getCoinValue(), Util.getNubersOfDecimal()));
                    } else {
                        framework.updateSmallMessageText(Translate.do("Bet:") + " " + balanceManager_.geBalanceObj().currency + "" + Util.formatNumber(balanceManager_.getCoinValue(), 2) + " " + Translate.do("Coins:") + "" + lineManager_.getLinesNumber());
                    }
                }
                spinManager_.setSpinType(swipe[0], swipe[1]);
                spinManager_.sendSpinRequest();
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
        choose_=false;
        playTriggeredSmb_();
        for (var a =0 ;a<ReelConfig.numReels;a++){
            gameClass_.removeReelFlames(a);
        }


        logger("animation end called.------"+spinManager_.getSpinResp())
        //lineManager_.initClass();
        displayManager_.getText("winValue").setText("");
        soundManager_.stopSound("reelSound");
        eventManager_.clearEvt();
        won=winManager_.evaluate(spinManager_.getReels());
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

        if(freeSpinsManager_.getIsInFs())setTimeout(freeSpinsManager_.updateFreeSpinsMult,500);

        if (wonBonus==0) {
            logger("NO bonus found ")

            if (waitForSubstitution_ || battlAnimFS_)eventManager_.addEvent(fakeEvent_,(compulsiveFlag_)?700:2300);
            wildManager_.endAnimHandle((winManager_.getWildNum()>0)?winManager_.getWildSimbs():null, eventManager_);
            twinReelManager_.hideTwinReels();


            if (won) {
                lineManager_.endAnimHandle(winManager_.getAllWinsSorted(), eventManager_);
                freeSpinsManager_.endAnimHandle(eventManager_);
                if (freeRoundsManager_.getIsInFr()==true && freeSpinsManager_.getIsInFs() == false ){//no add delay during nested FS
                    eventManager_.addEvent(fakeEvent_,(won)?lineManager_.getTotalDuration():0);
                }
            } else {
                logger("no win.------"+waitForSubstitution_)
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
            }

            buttonManager_.applyState("AFTERSPIN");
            if (fsWon && freeSpinsManager_.getIsInFs() == true && freeSpinsManager_.getFsNumber() == 0) {
                eventManager_.addEvent(fsEval_, 3000);
            } else {
                eventManager_.addEvent(fsEval_, (freeSpinsManager_.getFsAdd() == true)?2000:(freeSpinsManager_.getIsInFs())?300:0);
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
        //framework.updateSmallMessageText(Translate.do("You won:") + " " + balanceManager_.getCurrencySmb() + " " + Util.formatNumber(winManager_.getWinAmt(), 2));
        freeRoundsManager_.addWin(winManager_.getWinAmt());

        if (winManager_.getScatterWinAmt()>0) {
            winAmtManager_.showWin(Number(winAmtManager_.getLineWinAmt())+Number(winManager_.getScatterWinAmt()[0][10].amt), null,null,null,winAmtManager_.getLineWinAmt());
            freeRoundsManager_.addWin(winManager_.getScatterWinAmt());
        }
        freeRoundsManager_.updateFreeRoundsTot();
    }

    function updateScatterBalance(){
        if(freeSpinsManager_.getIsInFs()){
            lineManager_.showBonusWin(winManager_.getScatterWinAmt()[0][12].amt / balanceManager_.getCoinValue() * lineManager_.getLinesNumber() ,winManager_.getScatterWinAmt()[0][12].amt);
            freeSpinsManager_.updateFreeSpinsTotWon();
        }else{
            if (winManager_.getScatterWinAmt()[0][10]!=null) {
                lineManager_.completeBonusValue(winManager_.getScatterWinAmt()[0][10].amt, "Scatter Win");
            }
            balanceManager_.balanceUpdate();
        }

        freeRoundsManager_.addWin(winManager_.getScatterWinAmt());
        freeRoundsManager_.updateFreeRoundsTot();
    }

    function endScatterAnim_(){
        soundManager_.stopSound("incWin");
    }

    function fsEval_(){
        //console.log("fsEval")
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
        //console.log("apEval")
        setTimeout(enableButton_, 200);
        multiplierManager_.resetMultipliers();
    }

    function enableButton_() {
        if (freeSpinsManager_.getIsInFs() == false || freeSpinsManager_.getFsNumber() <= 0) {
             if(freeRoundsManager_.getIsInFr()==false || updateBalanceOnFr_()==true)balanceManager_.balanceUpdate(false,lineManager_.getTotalTumblingWin());
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

        logger("enable button called.------"+fs + " " +fr +" "+ap + " "+fsWon);
        if (ap ==false && fs == false && fsWon==false) {
            if (ap==false && autoPlayManager_.getIsInAutoPlay()==true){
                eventManager_.clearEvt();
                eventManager_.addEvent(showApMessage_,500,[ap]);
                eventManager_.triggerEvt();
            }else{
                finalizeEnable_();
            }
        }else{
            eventManager_.clearEvt();
            if (ap==false && autoPlayManager_.getIsInAutoPlay()==true){
                eventManager_.addEvent(showApMessage_,500,[ap]);
            }
            eventManager_.addEvent(startAutoSpin_,(won || winManager_.getScatterWinAmt()[0]!=null)?lineManager_.getTotalDuration():500,[false]);
            eventManager_.triggerEvt();
        }
    }

    function startAutoSpin_(par){
        if (autoPlayManager_.getIsInAutoPlay() || fs ) {
            if (autoPlayManager_.getIsFeature()==false || (autoPlayManager_.getStopOnFeature()==false && fs==true)){
                if (autoPlayManager_.getCanAp()==true) {
                    gcmCalls_("ANIMATION_END",null,true);
                    noSleep.enable();
                    apTimer_=setTimeout(realDoSpin_, 200, par);
                }else {
                    setTimeout(startAutoSpin_, 1000, par);
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
        fs=false;
        wasInbuyIn_=0;
        if (!framework.isTouch()) displayManager_.getText("lineWin").y=displayManager_.getText("lineWin").y-100;
        noSleep.disable();//mobile devices can now go to sleep
        displayManager_.getGroup("fsEndPanel").visible=false;
        displayManager_.getGroup("fsWinPanel").visible=false;
        displayManager_.getGroup("freeSpins").visible=false;
        //displayManager_.getGroup("freeSpins").y=0;
        if (freeRoundsManager_.getIsInFr()){
            setTimeout(freeRoundsManager_.getFreeRoundsEval,1000);
        }

        //reset expanding wilds
        idleCycleManager_.startIdleCycle();
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

    function animScatterWin_(){
        if (showScatterWin_==true)return;
        showScatterWin_=true;
        scatterManager_.showScatterAfterSubst(winManager_.getScatterSimbs(), winManager_.getScatterWinAmt());
    }

    function upperSmbCallBack_(i) {
        if (i==0){
            for (var a in displayManager_.getGroup("bgIconAnim").children){
                if (displayManager_.getGroup("bgIconAnim").children[a].tw!=undefined) displayManager_.getGroup("bgIconAnim").children[a].tw.kill();
                displayManager_.getGroup("bgIconAnim").remove(displayManager_.getGroup("bgIconAnim").children[a]);
            }
        }

        //called after spin to move the symbols in the upper position before moving the reel
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
                if (spinManager_.getSpinReelResp().reel[i].smb[a].animate==true && (spinManager_.getSpinReelResp().reel[i].smb[a].smb != 11 || (spinManager_.getFsResp()!=undefined && spinManager_.getFsResp().num>0))) {//not highlight the scatter unless it really trigger
                    s.reel = i;
                    s.smb = a;
                    s.trigger = true;
                    spinManager_.addTriggerIcon(s);
                    spinManager_.addTriggerIcon(s);
                }
                if (spinManager_.getSpinReelResp().reel[i].smb[a].smb == 11 && spinManager_.getSpinResp().state.anticipate!=undefined && spinManager_.getSpinResp().state.anticipate.indexOf(i)>=0){
                    displayManager_.getGroup("reelFg").visible = true;
                    //just for the anticipation
                    var smb = new Phaser.Sprite(game_, s.x, s.y, "scatterFlame");
                    smb.anchor.set(.5, .5);
                    smb.animations.add("anim");
                    smb.scale.x = 1;
                    smb.scale.y = 1;
                    displayManager_.getGroup("reelFg").add(smb);
                    smb.animations.play("anim", 24, false, true);
                    scatterSmb_++;
                    TweenMax.to(s.scale, .2, {
                        x: 1.1,
                        y: 1.1,
                        ease: Power1.easeOut,
                        onComplete: backScatter_,
                        onCompleteParams: [s]
                    });

                    //startReelFlames((Number(i)+1));
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
                if (iconN==11) {
                    var smb = new Phaser.Sprite(game_, triggerSymbol_[a].x, triggerSymbol_[a].y, "anim" + iconN);
                    smb.anchor.set(.5, .5);
                    smb.animations.add("anim");
                    smb.scale.x = 1;
                    smb.scale.y = 1;
                    triggerSymbol_[a].visible = false;
                    spinManager_.getReelGroup(triggerSymbol_[a].reel).add(smb);
                    spinManager_.setAnimationMap(triggerSymbol_[a].reel, triggerSymbol_[a].smb, smb);
                    smb.animations.play("anim", 24, false, true, updateIcon_, triggerSymbol_[a]);
                }else{
                    if (iconN == 9){//hero
                        setTimeout(hlCharacter_,1000,triggerSymbol_[a]);
                    }else{
                        setTimeout(hlCharacter_,0,triggerSymbol_[a]);
                    }
                }
                triggerSymbol_[a].played=true;
                soundManager_.playSound("fsWin");
            }
        }

    }

    function backScatter_(obj){
        TweenMax.to(obj.scale,.2,{x:1,y:1,ease:Power1.easeIn});
    }


    function hlCharacter_(obj){
        var smbB = new Phaser.Sprite(game_, obj.x, obj.y, "bluFlame" );
        smbB.anchor.set(.5, .5);
        smbB.animations.add("anim");
        smbB.scale.x = 1.05;
        smbB.scale.y = 1.05;
        smbB.animations.play("anim", 24, false, true);
        displayManager_.getGroup("bgIconAnim").alpha=1;
        displayManager_.getGroup("bgIconAnim").add(smbB);
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

    function setDelRepeter_(obj){
        var delayRepeater=obj.delayRepeater;
        var slowDownReel=[];
        var iconSound=[];
        var reelSound=[];

        for (var i = 0; i < ReelConfig.numReels; i++) {
            slowDownReel[i]=false;
            reelSound[i]=false;
            iconSound[i]=false;
            if (spinManager_.getSpinResp().state.anticipate!=undefined && spinManager_.getSpinResp().state.anticipate.indexOf(i)>=0){
                slowDownReel[i]=true;
                reelSound[i]=true;
                delayRepeater[i]=6*i;
                for (var a = 0; a < 3; a++) {
                    if (spinManager_.getSpinReelResp().reel[i].smb[a].smb == 11) {
                        iconSound[i]=true;
                        break;
                    }
                }
            }

            //console.log("loop " +delayRepeater[i] + " "+slowDownReel[i] + " "+reelSound[i] +" "+iconSound[i])
        }
        obj.slowDownReel=slowDownReel;
        obj.iconSound=iconSound;
        obj.delayRepeater=delayRepeater;
        obj.reelSound=reelSound;

        return obj;
    }

    function decreaseVolumeBG_(fadeT_O_){
        fadeBg_=true;
        clearTimeout(iFadeT_O_);
        if (freeSpinsManager_.getIsInFs()==false) {
            soundManager_.getBGSound("bgSlot").fadeOutBgSoundExternal(500, 0.2);
            if (fadeT_O_!=null){
                fadeBg_=false;
                iFadeT_O_=setTimeout(soundManager_.getBGSound("bgSlot").increaseVolExternal,fadeT_O_,1500);
            }
        }else{
            soundManager_.getBGSound("bgFs1").fadeOutBgSoundExternal(1000,0.1);
            if (fadeT_O_!=null){
                fadeBg_=false;
                iFadeT_O_=setTimeout(soundManager_.getBGSound("bgFs1").increaseVolExternal,fadeT_O_,1500);
            }
        }
    }

    function increaseVolumeBG_(){
        if (fadeBg_) {
            fadeBg_=false;
            if (freeSpinsManager_.getIsInFs() == false) {
                soundManager_.getBGSound("bgSlot").increaseVolExternal(1500);
            } else {
                soundManager_.getBGSound("bgFs1").increaseVolExternal(1500);
            }
        }
    }

    function startForcing_(id){
        communicationManager_.startForceDemo(id);

        if (forceDemo["win"+id][0].response.startBuyIn!=null && forceDemo["win"+id][0].response.startBuyIn==true){

        }else {
            realDoSpin_(false);
        }
    }


    function fsLogoOut_(){
        // displayManager_.getGroup("logo").visible = false;
        // displayManager_.getGroup("bg").visible=false;
        // displayManager_.getGroup("mask").visible=false;
        // displayManager_.getGroup("frame").visible=false;
        // displayManager_.getGroup("bgFS").visible=true;
        // displayManager_.getGroup("frameFS").visible=true;
        // displayManager_.getGroup("maskFS").visible=true;



        if (framework.isTouch()!=true) {

           // displayManager_.getGroup("buyFeature").visible=false;
        }else{
            setPortrait_((getOrientation()=="portrait")?true:false)
        }

    }

    function logoIn_(){

    }

    function fsHideTotPanel_(){


    }

    function nextPart_(par){
        if (stopped_)return;
        var reel=par[0];
        //just for the anticipation
        var smb = new Phaser.Sprite(game_, ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * reel)-10,ReelConfig.reel.deltaY_0+10, "reelFlame_1" );
        smb.anchor.set(0, 1);
        smb.animations.add("anim");
        smb.scale.x = 1;
        smb.scale.y = 1;
        displayManager_.getGroup("reels").add(smb);
        smb.animations.play("anim", 24,true,true);
        reelFlames_[reel]=smb;
    }

    function doBuyFeature_() {
        //40,70,90,110,150,200,240"Free Spin Multiplier"
        var obj={};
        obj.options=communicationManager_.getResumeStatus().status.buyInSetup.options;
        obj.options.limit=2500;

        if ( spinning_==false  && (window.SPIN_STATE==undefined || window.SPIN_STATE.spinning!="true") ) {//todo ask Joe about mobile
            if (freeRoundsManager_.getIsInFr()==false) {
                buyIn_=true;
                featureMessageReq_.showMultipleMessageMWJ("Buy Free Spins round", "Select from the list to get the price.","Free Spins number:", buyFeatureCB_, noBF_, obj.options);
            }
        }
    }

    function noBF_(){
        buyIn_=false;
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

    function betCheckCallBuyFeatureBack_(response,par) {

        var swipe = [false];
        //handling FS message here
        if (response == true) {
            spinManager_.sendBfRequest(par)
        } else {
            buttonManager_.applyState("NH");
            spinning_=false;
            framework.updateSmallMessageText(Translate.do("Insufficient funds. Please reduce stake."));
        }
    }

    function getBuyInResponse_(json){
        wasInbuyIn_=json.buyIn/100;
        noSleep.enable();  //this prevents mobile to go to sleep during FS
        spinning_=true;
        scatterManager_.parse(json);
        freeSpinsManager_.fsWon(Number(json.freeSpin.num)+1);
        fs = freeSpinsManager_.getFreeSpinsEval();
        eventManager_.clearEvt();
        freeSpinsManager_.endAnimHandle(eventManager_);
        eventManager_.triggerEvt();
        setTimeout(setSpin_,20,[json]);
    }

    function setSpin_(par){
        if (freeSpinsManager_.getIsInFs()) {
            var swipe = [false];
            buyIn_ = false;
            showScatterWin_ = false;
            showFsWin_ = false;
            spinning_ = true;
            stopped_ = false;

            if (!bResume_) lineManager_.stopEvents();
            bonusManager_.clearLineEval();
            wildManager_.clearWild(winManager_.getWildSimbs());
            winAmtManager_.resetWinManager();
            soundManager_.stopSound("winSound");
            autoPlayManager_.toggleFeature(false);
            winAmtManager_.forceToComplete();
            lineManager_.clearLineAfterValue();

            //framework.updateSmallMessageText(Translate.do("Bet:") + " " + Translate.do("free spin"));
            communicationManager_.resetResumeStatus();
            spinManager_.setSpinType(swipe[0], swipe[1]);
            bResume_ = false;
            setTimeout(parse_,1000,par);
        }else{
            setTimeout(setSpin_,200,par)
        }
        //balanceManager_.bet(betCheckCallBack_);
    }

    function parse_(par){
        par[0].freeSpin.won=0;
        spinManager_.parse(par[0]);
        freeSpinsManager_.updateFreeSpinsNum();
        //displayManager_.getText("fsValue").setText(par[0].freeSpin.num);
    }

    function startReelFlames_(reel){
        if (stopped_)return;
        //just for the anticipation
        var smb = new Phaser.Sprite(game_,ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * reel)-10,ReelConfig.reel.deltaY_0+10, "reelFlame_0" );
        smb.anchor.set(0, 1);
        smb.animations.add("anim");
        smb.scale.x = 1;
        smb.scale.y = 1;
        displayManager_.getGroup("reels").add(smb);
        smb.animations.play("anim", 24, false, true,nextPart_,[reel]);
        reelFlames_[reel]=smb;
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
        upperSmbCallBack:upperSmbCallBack_,
        playTriggeredSmb:playTriggeredSmb_,
        changeCompulsiveState:changeCompulsiveState_,
        setDelRepeter:setDelRepeter_,
        decreaseVolumeBG:decreaseVolumeBG_,
        increaseVolumeBG:increaseVolumeBG_,
        setPortrait:setPortrait_,
        loadedPortrait:loadedPortrait_,
        hideGame:hideGame_,
        fsHideTotPanel:fsHideTotPanel_,
        logoIn:logoIn_,
        fsLogoOut:fsLogoOut_,
        startForcing:startForcing_,
        startReelFlames:startReelFlames_,
        doBuyFeature:doBuyFeature_,
        getBuyInResponse:getBuyInResponse_,
        startFS:function(){
            lineManager_.clearLine();
            eventManager_.clearEvt();
            freeSpinsManager_.hideFsPanel();
            setTimeout(realDoSpin_,2000,[false]);
        },
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
            waitForSubstitution_=true;
        },
        setMessageOnOff:function (val) {
            messageOn_=val;
        },
        getMessageOnOff:function(){
            return messageOn_;
        },
        getHlMaximumIcon:function(){
            //during the idle cycle the maximum disable icon will be 8. never disable wilds
            return (fsWon)?12:13;
        },
        getCompulsivePlayer:function () {
            return compulsiveFlag_;
        },
        startSounds:function(){
            if (communicationManager_.getResumeStatus().status.state=="FREESPINS") {
                //moved in FS class
            }else{
                soundManager_.playBgSound("bgSlot");

            }
        },
        getStickyWildSimbs:function () {
            return [];
        },
        waitForSpin:function(){
            if (freeSpinsManager_.getIsInFs() == true) {
                //return ( ret );
                return true; // forcing slow speed
            }else{
                return false;
            }
        },
        getBuyIn:function(){
            return buyIn_;
        },
        getWasBuyIn:function(){
            return wasInbuyIn_;
        },
        isReelWilded:function(num){
            return wildManager_.isReelWilded(num);
        },
        getStickyWildManager:function(){
            return null;
        },
        getLastFSTime:function(){
            //return the delay to close sticky spins
            return (won || winManager_.getScatterWinAmt()[0]!=null)?lineManager_.getTotalDuration():3000;
        },
        getFsIcon:function(){
            return "";
            return "";
        },
        lineCompletion:function (value){
            //console.log("-----------------------line completion----------------------------!!!!!!")
            lineCompletion_=value;
        },
        getSymbolWilded:function(reel,smb){
            return wildManager_.isSymbolWilded(reel,smb);
        },
        removeReelFlames:function (reel) {
            if(reelFlames_[reel]!= null){
                reelFlames_[reel].animations.stop(null,true);
                displayManager_.getGroup("reels").remove(reelFlames_[reel]);
                reelFlames_[reel]=null;

            }
        },
        clearPrevEvt:function () {
            if (freeSpinsManager_.getIsInFs()==true) {
                freeSpinsManager_.updateFreeSpinsTotWon();
            }
            clearTimeout(apTimer_);
            eventManager_.clearEvt();
        },
        getEventManager:function () {
            return eventManager_;
        }
    }

    return me;
}
