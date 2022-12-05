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
    var apTimer_=0;


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
    var stopped_=false;
    var center=new Phaser.Point(640, 365);

    function create_() {

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
        scatterManager_.addScatter(11);


        //If "NEW_UI"
        if (ReelConfig.newUI && framework.isTouch()) {
            window.newUI.onPreview.dispatch(false) //Dispatch onPreview
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
            freeSpinsManager_.parse(communicationManager_.getResumeStatus());
            freeSpinsManager_.resumeFs();
            buttonManager_.applyHide();
            messageBox_.showMessage("game", "\n"+ Translate.do("You have unused Free Spins"), "\n"+Translate.do("They will be automatically started"), startResumeFs_);

        }else{
            buttonManager_.applyRestore();
            buttonManager_.applyState("NH");
            freeRoundsManager_.frChecker();
        }



        onGame_=true;
        framework.showFramework();
        setPortrait_((getOrientation()=="portrait")?true:false);

    }

    function startResumeBonus_(){
        buttonManager_.applyRestore();
        bonusManager_.setResumeFlag(true);
        communicationManager_.sendServletRequest("bonusSetup");
    }

    function startResumeFs_(){
        freeSpinsManager_.resumeFs();
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

        console.log(scaleH_ + " bb " + scaleW_)
        if (port) {
            if (portraitLoaded_) {
                xRatio_ = scaleW_ / 1000;//ratio between the current Width and the reel width to make the reels bigger as the current width (almost....)
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
                    xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(970*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                }else if (scaleW_>760){//ipad
                    if (xRatio_>.69){
                        var factor=43000;
                        xCompensate=1+(xRatio_-.69-(scaleW_)/factor);
                        xRatio_=.69;
                    }
                    yCompensate=10;
                    xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(930*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                }else{
                    //other devices which for some reason are showing a heigh smaller then expected
                    if (scaleW_==414 && (scaleH_==622|| scaleH_==620)) {//iphone plus
                        xRatio_=xRatio_*.93;
                        xCompensate=1.07;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(900*xRatio_*xCompensate));//  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                    }else if (scaleW_==375 && (scaleH_<667)){//iphone 11
                        xRatio_=xRatio_*.92;
                        xCompensate=1.08;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(904*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                    }else if (scaleW_==320 && (scaleH_<455)){//iphone 6 7   / XS
                        xRatio_=xRatio_*.85;
                        xCompensate=1.2;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(904*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                    }else{
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(930*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
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

                adaptPortraitAsset_(displayManager_.getGroup("reels"),xOffset_-8*xRatio_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("wild"),xOffset_-8*xRatio_,yOffset_,xRatio_)
                adaptPortraitAsset_(displayManager_.getGroup("bgIconAnim"),xOffset_-8*xRatio_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("flames"),xOffset_-8*xRatio_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("wins"),xOffset_-8*xRatio_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("scatter"),xOffset_-8*xRatio_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("lines"),xOffset_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("freeSpins"),xOffset_-200*xRatio_,yOffset_-25*xRatio_,xRatio_*1.3);
                adaptPortraitAsset_(displayManager_.getGroup("freeRounds"),xOffset_-200*xRatio_,yOffset_-25*xRatio_,xRatio_*1.3);
                adaptPortraitAsset_(displayManager_.getGroup("logo"),xOffset_,yOffset_-1500 ,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("bg"),xOffset_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("bgFS"),xOffset_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("frame"),xOffset_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("frameFS"),xOffset_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("mask"), xOffset_-(55*xRatio_),0,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("maskFS"), xOffset_-(55*xRatio_),0,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("centralLineWin"), scaleW_/2* window.devicePixelRatio,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("centralWin"), xOffset_,yOffset_ - 50,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("centralFuntainSmallObj"), xOffset_,yOffset_+500*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("fsWonPanel"),xOffset_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("fsEndPanel"),xOffset_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("fsWonPanelText"),xOffset_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("frWonPanel"),xOffset_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("preview"),xOffset_+200*xRatio_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("msgBox"),xOffset_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("msgBoxFR"),xOffset_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("msgBoxFeature"),xOffset_,yOffset_,xRatio_);//-scaleW_/2 +100*xRatio_,0,.55);
                center= new Phaser.Point(640-1*xRatio_, 360+3*xRatio_);

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
                setPorytraitAssets_(displayManager_.getGroup("bg").bg.children[1],true,1069);
                setPorytraitAssets_(displayManager_.getGroup("bg").bg1.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("bg").bg1.children[1],true,-54);
                //FS
                setPorytraitAssets_(displayManager_.getGroup("bgFS").bg.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("bgFS").bg.children[1],true,1069);
                setPorytraitAssets_(displayManager_.getGroup("bgFS").bg1.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("bgFS").bg1.children[1],true,-54);
                //main bg (behind reels)
                setPorytraitAssets_(displayManager_.getGroup("frame").bg4.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("frame").bg4.children[1],true);



                //bottom FS
                var offset=freeSpinsManager_.getIsInFs()?-11:0
                setPorytraitAssets_(displayManager_.getText("fsLabel"),true,485,610);
                setPorytraitAssets_(displayManager_.getText("fsValue"),true,455,640);
                setPorytraitAssets_(displayManager_.getText("totWonLabel"),true,855,610);
                setPorytraitAssets_(displayManager_.getText("totWonValue"),true,830,640);

                //preview
                setPorytraitAssets_(displayManager_.getGroup("preview").children[4],null,null,1150);
                setPorytraitAssets_(displayManager_.getGroup("preview").children[5],null,null,1150);
                setPorytraitAssets_(displayManager_.getGroup("preview").children[6],null,null,1150);
                setPorytraitAssets_(displayManager_.getGroup("preview").children[7],null,null,1170);
                setPorytraitAssets_(displayManager_.getGroup("preview").bgmsgPw.children[0],true);
                setPorytraitAssets_(displayManager_.getGroup("preview").bgmsgPwL.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview1.children[0],true,200,-100);
                setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview2.children[0],true,200,480);

                setPorytraitAssets_(displayManager_.getGroup("centralLineWin").children[0],null,0);
                setPorytraitAssets_(displayManager_.getGroup("centralLineWin").children[1],null,0);

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
            adaptPortraitAsset_(displayManager_.getGroup("wins"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("lines"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("flames"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("scatter"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("bgIconAnim"),0,0,1);
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
            adaptPortraitAsset_(displayManager_.getGroup("fsEndPanel"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("fsWonPanelText"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("frWonPanel"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("msgBox"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("msgBoxFR"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("msgBoxFeature"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("logo"),0,0,1);
            center= new Phaser.Point(640, 365);

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
            setPorytraitAssets_(displayManager_.getGroup("bgFS").bg1.children[0],true,0);
            //main bg (behind reels)
            setPorytraitAssets_(displayManager_.getGroup("frame").bg4.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("frame").bg4.children[1],false);



            setPorytraitAssets_(displayManager_.getText("fsLabel"),true,displayManager.groups.freeSpins.texts.fsLabel.x,displayManager.groups.freeSpins.texts.fsLabel.y);
            setPorytraitAssets_(displayManager_.getText("fsValue"),true,displayManager.groups.freeSpins.texts.fsValue.x,displayManager.groups.freeSpins.texts.fsValue.y);
            setPorytraitAssets_(displayManager_.getText("totWonLabel"),true,displayManager.groups.freeSpins.texts.totWonLabel.x,displayManager.groups.freeSpins.texts.totWonLabel.y);
            setPorytraitAssets_(displayManager_.getText("totWonValue"),true,displayManager.groups.freeSpins.texts.totWonValue.x,displayManager.groups.freeSpins.texts.totWonValue.y);

            adaptPortraitAsset_(displayManager_.getGroup("preview"),0,0,1);
            setPorytraitAssets_(displayManager_.getGroup("centralLineWin").children[0],null,displayManager.groups.centralLineWin.texts.lineWin.x);
            setPorytraitAssets_(displayManager_.getGroup("centralLineWin").children[1],null,displayManager.groups.centralLineWin.texts.lineWinFinal.x);

            setPorytraitAssets_(displayManager_.getGroup("logo").children[0],null,0,0);
            //----

            //preview
            setPorytraitAssets_(displayManager_.getGroup("preview").bgmsgPw.children[0],false);
            setPorytraitAssets_(displayManager_.getGroup("preview").bgmsgPwL.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview1.children[0],true,displayManager.groups.preview.graphAsset.bgPreview1.x ,displayManager.groups.preview.graphAsset.bgPreview1.y);
            setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview2.children[0],true,displayManager.groups.preview.graphAsset.bgPreview2.x ,displayManager.groups.preview.graphAsset.bgPreview2.y);
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
            if (y!=null)name.y=y;
            if (x!=null)name.x=x;
            if (scale!=null)name.scale.x=scale;
            if (scale!=null)name.scale.y=scale;
            if (y!=null)name.y=Math.floor(y);
            if (x!=null)name.x=Math.floor(x);
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
            var fs = (freeSpinsManager_.getIsInFs()) ? "FS" : "";
            if(flag==true ||  (previewManager_!=undefined && previewManager_.getClosed()==false )){
                displayManager_.getGroup("preview").visible = !flag;
            }
            if (previewManager_.getClosed()==false && flag ==false)return;
            displayManager_.getGroup("bg" + fs).visible = !flag;
            if (displayManager_.getGroup("mask" + fs).bg2) displayManager_.getGroup("mask" + fs).bg2.visible = !flag;
            if (displayManager_.getGroup("mask" + fs).bg3) displayManager_.getGroup("mask" + fs).bg3.visible = !flag;
            if (fs == "" || flag == true) displayManager_.getGroup("logo").visible = !flag;
            if (freeRoundsManager_.getIsInFr()) displayManager_.getGroup("logo").visible = false;
            displayManager_.getGroup("mask" + fs).visible = !flag;
            displayManager_.getGroup("frame" + fs).visible = !flag;
            displayManager_.getGroup("wins" ).visible = !flag;
            displayManager_.getGroup("wild" ).visible = !flag;
            displayManager_.getGroup("lines" ).visible = !flag;
            displayManager_.getGroup("bgIconAnim" ).visible = !flag;
            displayManager_.getGroup("flames" ).visible = !flag;
            displayManager_.getGroup("scatter" ).visible = !flag;
            displayManager_.getGroup("centralLineWin" ).visible = !flag;
            if (fs == "" && flag == true)displayManager_.getGroup("freeRounds").visible = !flag;
            if (fs == "" && freeRoundsManager_.getIsInFr() && flag==false){
                displayManager_.getGroup("freeRounds").visible = !flag;
            }
            displayManager_.getGroup("reels").visible = !flag;
            if (fs == "FS") displayManager_.getGroup("freeSpins").visible = !flag;

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
        }else {
            return false;
        }
    }

    function realDoSpin_(swipe){//swipte=array
        if(!onGame_)return;
        if(messageOn_==true){

            return;
        }
        stopped_=false;
        spinning_=true;
        eventManager_.clearEvt();

        displayManager_.getText("lineWin").setText("");
        displayManager_.getText("lineWinFinal").setText("");

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
                    noSleep.enable();
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

        if (wonBonus==0) {

            logger("NO bonus found ")

            wildManager_.endAnimHandle((winManager_.getWildNum()>0)?winManager_.getWildSimbs():null, eventManager_);
            twinReelManager_.hideTwinReels();

            if (won || winManager_.getScatterWinAmt()[0]!=null) {

                if(winManager_.getScatterWinAmt()[0]!=null && winManager_.getScatterWinAmt()[0].id==9)eventManager_.addEvent(fakeEvent_, 1000);
                lineManager_.endAnimHandle(winManager_.getAllWinsSorted(), eventManager_);

                freeSpinsManager_.endAnimHandle(eventManager_,( winManager_.getScatterWinAmt()[0]!= null && winManager_.getScatterWinAmt()[0].id==9)?5000:2000);

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
                eventManager_.addEvent(fsEval_, 2000);
            } else {
                eventManager_.addEvent(fsEval_, (fsWon == true)?3000: (winManager_.getScatterWinAmt()[0]!=null && winManager_.getScatterWinAmt()[0].id!=9)?5000:0);
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
        noSleep.disable();//mobile devices can now go to sleep
        if (freeRoundsManager_.getIsInFr()){
            setTimeout(freeRoundsManager_.getFreeRoundsEval,1000);
        }
        displayManager_.getGroup("fsEndPanel").visible=false;
        displayManager_.getGroup("fsEndPanel").y=-600;
        setPortrait_((getOrientation()=="portrait")?true:false);
        //reset expanding wilds
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
                if (spinManager_.getSpinReelResp().reel[i].smb[a].smb == 9) { //check for special to animate
                    var smb = new Phaser.Sprite(game_, s.x, s.y, "bluFlame");
                    smb.anchor.set(.5, .5);
                    smb.animations.add("anim");
                    smb.scale.x = 1;
                    smb.scale.y = 1;
                    smb.animations.play("anim", 32, false, true);
                    displayManager_.getGroup("bgIconAnim").add(smb);
                    displayManager_.getGroup("bgIconAnim").alpha=1;
                    if (compulsiveFlag_==true)  soundManager_.playSound("reelSoundFast");
                    soundManager_.playSound("scatterHL");
                }
                if (spinManager_.getSpinReelResp().reel[i].smb[a].animate!=undefined && spinManager_.getSpinReelResp().reel[i].smb[a].animate== true) { //check for special to animate
                    s.reel = i;
                    s.smb = a;
                    s.trigger = true;
                    s.expanding = false;
                    spinManager_.addTriggerIcon(s);
                }else if (freeSpinsManager_.getIsInFs()==true && spinManager_.getSpinReelResp().reel[i].smb[a].prevsmb != null) {
                    //FS expanding symbols
                    s.reel = i;
                    s.smb = a;
                    s.trigger = false;
                    s.expanding = true;
                    s.icon = spinManager_.getSpinReelResp().reel[i].smb[a].smb;
                    spinManager_.addTriggerIcon(s);
                }

            }else{
                spinManager_.getReels()[i].removeSymbol(a);
            }
        }

    }

    function playTriggeredSmb_(cb,retrigger){
        var iconN=-1;
        var triggerSymbol_=spinManager_.getTriggerIcons();
        var add=false;
        for (var a in triggerSymbol_){
            if ( triggerSymbol_[a].played==undefined && triggerSymbol_[a].trigger==true) {
                iconN = triggerSymbol_[a].smbNum;
                add = true;
                var smb = new Phaser.Sprite(game_, triggerSymbol_[a].x, triggerSymbol_[a].y, "anim" + iconN);
                smb.anchor.set(.5, .5);
                smb.animations.add("anim");
                smb.scale.x = 1;
                smb.scale.y = 1;
                triggerSymbol_[a].visible = (retrigger!=true)? false:true;

                displayManager_.getGroup("scatter").add(smb);
                smb.animations.play("anim", 24, false,true);
                if (retrigger!=true) {
                    TweenMax.to(smb, .5, {
                        x: center.x,
                        y: center.y,
                        ease: Linear.easeInOut
                    });
                }
                triggerSymbol_[a].played=true;
                soundManager_.playSound("scatterExpand");
            }else if (triggerSymbol_[a].played==undefined && triggerSymbol_[a].expanding==true){
                //replace smb with special one
                setTimeout(changeSmb_,300 *triggerSymbol_[a].reel +(70*triggerSymbol_[a].smb),triggerSymbol_[a]);
                //var s = spinManager_.getReels()[triggerSymbol_[a].reel].swapSmb(triggerSymbol_[a].icon, triggerSymbol_[a].smb);
            }
        }
        if (add && cb !=null)setTimeout(cb,1000,smb)

    }

    function changeSmb_(obj){
        soundManager_.playSound("scatterExpand");
        var s = spinManager_.getReels()[obj.reel].swapSmb(obj.icon, obj.smb);
        s.alpha=1;
        setTimeout(animSpecialSmb_,200, s);
    }

    function animSpecialSmb_(s){
        var smb = new Phaser.Sprite(game_, s.x, s.y, "anim" + s.smbNum);
        smb.anchor.set(.5, .5);
        smb.animations.add("anim");
        smb.scale.x = 1;
        smb.scale.y = 1;
        //triggerSymbol_[a].visible = false;
        displayManager_.getGroup("scatter").add(smb);
        smb.animations.play("anim", 24, false, true);
    }

    function updateIcon_(obj){
        obj.visible=false;
        displayManager_.getGroup("scatter").remove(obj);
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
                    if (spinManager_.getSpinReelResp().reel[i].smb[a].smb == 9) {
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
        console.log("decrease vol " +fadeT_O_)
        fadeBg_=true;
        clearTimeout(iFadeT_O_);
        if (freeSpinsManager_.getIsInFs()==false) {
            soundManager_.getBGSound("bgSlot").fadeOutBgSoundExternal(500, 0.2);
            if (fadeT_O_!=null){
                fadeBg_=false;
                iFadeT_O_=setTimeout(soundManager_.getBGSound("bgSlot").increaseVolExternal,fadeT_O_,1500);
            }
        }else{
            soundManager_.getBGSound("bgFs").fadeOutBgSoundExternal(1000,0.1);
            if (fadeT_O_!=null){
                fadeBg_=false;
                iFadeT_O_=setTimeout(soundManager_.getBGSound("bgFs").increaseVolExternal,fadeT_O_,1500);
            }
        }
    }

    function increaseVolumeBG_(){
        console.log("increase vol " + fadeBg_)
        if (fadeBg_) {
            fadeBg_=false;
            if (freeSpinsManager_.getIsInFs() == false) {
                soundManager_.getBGSound("bgSlot").increaseVolExternal(1500);
            } else {
                debugger
                soundManager_.getBGSound("bgFs").increaseVolExternal(1500);
            }
        }
    }

    function startReelFlames_(reel){
        if (stopped_)return;
        //just for the anticipation
        var smb = new Phaser.Sprite(game_,ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * reel)-10,ReelConfig.reel.deltaY_0+10, "reelFlame_0" );
        smb.anchor.set(0, 1);
        smb.animations.add("anim");
        smb.scale.x = 1;
        smb.scale.y = 1;
        displayManager_.getGroup("flames").add(smb);
        smb.animations.play("anim", 24, false, true,nextPart_,[reel]);
        reelFlames_[reel]=smb;
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
        displayManager_.getGroup("flames").add(smb);
        smb.animations.play("anim", 24,false,true);
        reelFlames_[reel]=smb;
    }

    function fsLogoOut_(){
        displayManager_.getGroup("bg").visible=false;
        displayManager_.getGroup("mask").visible=false;
        displayManager_.getGroup("frame").visible=false;
        displayManager_.getGroup("bgFS").visible=true;
        displayManager_.getGroup("maskFS").visible=true;
        displayManager_.getGroup("frameFS").visible=true;
    }

    function fsHideTotPanel_(){
        displayManager_.getGroup("bg").visible=true;
        displayManager_.getGroup("mask").visible=true;
        displayManager_.getGroup("frame").visible=true;
        displayManager_.getGroup("bgFS").visible=false;
        displayManager_.getGroup("maskFS").visible=false;
        displayManager_.getGroup("frameFS").visible=false;

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
        startForcing:startForcing_,
        startReelFlames:startReelFlames_,
        fsLogoOut:fsLogoOut_,
        fsHideTotPanel:fsHideTotPanel_,
        doWR:function(){
            if (choose_)return;
            communicationManager_.sendServletRequest("CHOICE","&choice=1");
            choose_=true;
        },
        doSM:function(){
            if (choose_)return;
            communicationManager_.sendServletRequest("CHOICE","&choice=0");
            choose_=true;
        },
        doOver:function(par){
            if (par.key=="btnTranspRight"){
                displayManager_.getGroup("fsWonPanel").sel2_hl.visible=true;
                displayManager_.getGroup("fsWonPanel").sel1_hl.visible=false;
            }else{
                displayManager_.getGroup("fsWonPanel").sel2_hl.visible=false;
                displayManager_.getGroup("fsWonPanel").sel1_hl.visible=true;
            }
        },
        doOut:function(par){
            if (par.key=="btnTranspRight"){
              //  displayManager_.getGroup("fsWonPanel").sel2_hl.visible=false;
            }else{
                //displayManager_.getGroup("fsWonPanel").sel1_hl.visible=false;
            }
        },
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
            if (communicationManager_.getResumeStatus().status.hand=="freespins") {
                soundManager_.playBgSound("bgFs");
            }else{
                soundManager_.playBgSound("bgSlot");
            }
        },
        waitForSpin:function(){
            if (freeSpinsManager_.getIsInFs() == true) {
                return true; // forcing slow speed
            }else{
                return false;
            }
        },
        isReelWilded:function(num){
            return false
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
        },
        lineCompletion:function (value){
            //console.log("-----------------------line completion----------------------------!!!!!!")
            lineCompletion_=value;
        },
        getSymbolWilded:function(reel,smb){
            return false;
        },
        doCutWinAnim:function () {
            clearTimeout(apTimer_);
            eventManager_.clearEvt();
            realDoSpin_(false);
        },
        getEventManager:function () {
            return eventManager_;
        }
    }
    return me;
}
