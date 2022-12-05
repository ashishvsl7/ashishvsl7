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

    //wilds Reel
    var shiftingWildReelManager_;
    var shiftReelConf={};
    shiftReelConf.wildNum=[11];
    shiftReelConf.wildType="WildShiftingReel";
    shiftReelConf.wildDelay=300;
    shiftReelConf.animDelayAfterWild=3000;

    var shiftWildReelSmb_;
    var shiftWilSimbsNum_=0;

    //sticky wilds
    var stickyWildManager_;
    var stickyWildConf={};
    stickyWildConf.wildNum=[10];
    stickyWildConf.wildType="ExpandingStickyWild";
    stickyWildConf.wildDelay=300;
    stickyWildConf.animDelayAfterWild=1500;

    var stickyWildSmb_;
    var stickyWilSimbsNum_=0;

    var choose_=false;
    var fadeBg_=false;
    var iFadeT_O_=0;
    var lineCompletion_=false;




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
    var apTimer_=0;


    function create_() {
console.log("create")
        if (framework.isTouch()==true) {
            buttonManager_.applyState("NH");
            framework.hideFramework();
            displayManager_.getGroup("reels").visible = false;
            displayManager_.getGroup("bg").visible = false;
            displayManager_.getGroup("bgFS").visible = false;
            displayManager_.getGroup("mask").visible = false;
            displayManager_.getGroup("maskFS").visible = false;
            displayManager_.getGroup("frame").visible = false;
            displayManager_.getGroup("frameFS").visible = false;
            displayManager_.getGroup("logo").visible = false;
        }else{
            displayManager_.getGroup("reels").visible = true;
            displayManager_.getGroup("bg").visible = true;
            displayManager_.getGroup("mask").visible = true;
            displayManager_.getGroup("frame").visible = true;
            displayManager_.getGroup("logo").visible = true;
            displayManager_.getGroup("fog").visible=true;
        }
        spinManager_.createReels();
        guiBottomBar_.setBetControlInitialBet(ReelConfig.bet);//todo change this, it's just to apply the default bet



    }

    function initGame_(){
        resumeGame();
    }

    function resumeGame(){

        //wild reel init params
        shiftingWildReelManager_= new WildManager(game_,gameClass_,shiftReelConf);
        if (shiftWildReelSmb_==undefined) {
            shiftWildReelSmb_ = [];
            for (i = 0; i < 5; i++) {
                shiftWildReelSmb_[i] = {};
                shiftWildReelSmb_[i].simbolReference = [];
                shiftWildReelSmb_[i].substOnreel = [];
                shiftWildReelSmb_[i].smbNum = [];
                shiftWildReelSmb_[i].pos = [];
                shiftWildReelSmb_[i].reel = [];
                shiftWildReelSmb_[i].onReel=false;
                if (shiftWildReelSmb_[i].anim == undefined) shiftWildReelSmb_[i].anim = [];
                if (shiftWildReelSmb_[i].shift == undefined) shiftWildReelSmb_[i].shift = 0;
            }
        }

        //sticky wild
        stickyWildManager_= new WildManager(game_,gameClass_,stickyWildConf);
        if (stickyWildSmb_==undefined) {
            stickyWildSmb_ = [];
            for (i = 0; i < 5; i++) {
                stickyWildSmb_[i] = [];
                for (a = 0; a < 3; a++) {
                    stickyWildSmb_[i][a] = {};
                }
            }
        }
        //resuming wilds
        wildManager_.resumeWildReel();

        gcmCalls_("STAKE",balanceManager_.getCoinValue());
        if (communicationManager_.getResumeStatus().status.hand=="freespins") {
            if (communicationManager_.getResumeStatus().status !=null && communicationManager_.getResumeStatus().status.stake>0){
                changeBet_(communicationManager_.getResumeStatus().status.stake/100, true);
            }
            //f1x2.GcmError(-3);
            freeRoundsManager_.frChecker();
            freeSpinsManager_.parse(communicationManager_.getResumeStatus());
            shiftingWildReelManager_.resumeWildReel();
            stickyWildManager_.resumeWildReel();
            freeSpinsManager_.resumeFs();
            buttonManager_.applyHide();
            messageBox_.showMessage("game", "\n"+ Translate.do("You have unused Free Spins"), "\n"+Translate.do("They will be automatically started"), startResumeFs_);
        }else if (communicationManager_.getResumeStatus().status.hand=="choose"){
            if (communicationManager_.getResumeStatus().status !=null && communicationManager_.getResumeStatus().status.stake>0){
                changeBet_(communicationManager_.getResumeStatus().status.stake/100, true);
            }
            //f1x2.GcmError(-3);
            freeRoundsManager_.frChecker();
            freeSpinsManager_.showFsPanel1([communicationManager_.getResumeStatus().status.numFS]);
        }else if (communicationManager_.getResumeStatus().status.hand=="bonus"){
            if (communicationManager_.getResumeStatus().status !=null && communicationManager_.getResumeStatus().status.stake>0){
                changeBet_(communicationManager_.getResumeStatus().status.stake/100, true);
            }
            //f1x2.GcmError(-3);
            buttonManager_.applyHide();
            freeRoundsManager_.frChecker();
            messageBox_.showMessage("game", "You have an unfinished Bonus", "it will be automatically started", startResumeBonus_);
        }else{
            buttonManager_.applyRestore();
            buttonManager_.applyState("NH");
            freeRoundsManager_.frChecker();
            if (!framework.isTouch())idleCycleManager_.startIdleCycle();
            if (!framework.isTouch())idleCycleManager_.forceIdleCycle("s1"); //forces the logo to idle cycle
        }

        onGame_=true;
        framework.showFramework();

        //start the fog
        if (!framework.isTouch())TweenMax.to(displayManager_.getGroup("fog")["bg1"].children[0],45,{x:-2024,repeat:-1, ease:Linear.easeInOut});
        console.log("initgame create")
       setPortrait_((getOrientation()=="portrait")?true:false);
        if (previewManager_.getClosed()) {
            //If "NEW_UI"
            if (ReelConfig.newUI && framework.isTouch()) {
                window.newUI.onPreview.dispatch(false) //Dispatch onPreview
            }
        }
        displayManager_.getGroup("status").y=-2000;
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

        if (port) {
            if (portraitLoaded_) {
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
                }else if (scaleW_>750){//ipad mini
                    if (xRatio_>.60){
                        var factor=43000;
                        xCompensate=1+(xRatio_-.60-(scaleW_)/factor);
                        xRatio_=.60;
                    }
                    xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(845*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode

                }else if (scaleW_>760){//ipad
                    if (xRatio_>.69){
                        var factor=43000;
                        xCompensate=1+(xRatio_-.69-(scaleW_)/factor);
                        xRatio_=.69;
                    }
                    xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(835*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                }else{

                    //other devices which for some reason are showing a heigh smaller then expected
                    if (scaleW_==414 && (scaleH_==622|| scaleH_==620)) {//iphone 8+
                        xRatio_=xRatio_*.91;
                        xCompensate=1.09;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(825*xRatio_*xCompensate));//  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                    }else if (scaleW_==375 && (scaleH_<667)){//iphone XS
                        xRatio_=xRatio_*.87;
                        xCompensate=1.13;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(802*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                    }else if (scaleW_==320 && (scaleH_<453)){
                        xRatio_=xRatio_*.83;
                        xCompensate=1.17;
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(704*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
                    }else{
                        xRatio_=xRatio_*.87;
                        xCompensate=1.13;
                        //android  samsun s8
                        xOffset_ = -1 * (ReelConfig.reel.deltaX_0)*xRatio_   +(scaleW_-(810*xRatio_*xCompensate)); //  -1 * (ReelConfig.reel.deltaX_0)+(1280-scaleW_)/2  ; //change the object X position compared to the landcae mode
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


                yOffset_ =  -15*xRatio_   // scaleH_- maskHeight - scaleH_/ 2.25;         //change the objects Y position to move on top of the portrait mode UI
                yMask = yOffset_ + (72 * xRatio_)-30;

                adaptPortraitAsset_(displayManager_.getGroup("reels"),xOffset_+70*xRatio_,yOffset_+36*xRatio_,Number(Util.formatNumb(xRatio_*.88,3)));
                adaptPortraitAsset_(displayManager_.getGroup("wild"),xOffset_+70*xRatio_,yOffset_+36*xRatio_,Number(Util.formatNumb(xRatio_*.88,3)));
                adaptPortraitAsset_(displayManager_.getGroup("lines"),xOffset_+70*xRatio_,yOffset_+36*xRatio_,Number(Util.formatNumb(xRatio_*.88,3)));
                adaptPortraitAsset_(displayManager_.getGroup("wins"),xOffset_+70*xRatio_,yOffset_+36*xRatio_,Number(Util.formatNumb(xRatio_*.88,3)));
                adaptPortraitAsset_(displayManager_.getGroup("bgIconAnim"),xOffset_+70*xRatio_,yOffset_+36*xRatio_,Number(Util.formatNumb(xRatio_*.88,3)));
                adaptPortraitAsset_(displayManager_.getGroup("freeSpins"),xOffset_+1*xRatio_,0,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("freeRounds"),xOffset_+162*xRatio_,0);
                adaptPortraitAsset_(displayManager_.getGroup("logo"),xOffset_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("bg"),xOffset_,yOffset_+19*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("bgFS"),xOffset_,yOffset_+19*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("frame"),xOffset_-210*xRatio_,yOffset_-90*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("frameFS"),xOffset_-210*xRatio_,yOffset_-90*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("mask"), xOffset_-(54*xRatio_),0,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("maskFS"), xOffset_-(54*xRatio_),0,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("lockReels"),xOffset_,yOffset_-30,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("centralLineWin"), scaleW_/2* window.devicePixelRatio,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("centralWin"), xOffset_,yOffset_ - 50,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("winWays"),scaleW_/2,5,xRatio_*1.18);
                adaptPortraitAsset_(displayManager_.getGroup("centralFuntainSmallObj"), xOffset_,yOffset_+700*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("fsWonPanel"),xOffset_,yOffset_-30*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("frWonPanel"),xOffset_,yOffset_-30*xRatio_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("preview"),xOffset_+200*xRatio_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("msgBox"),xOffset_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("msgBoxFR"),xOffset_,yOffset_,xRatio_);
                adaptPortraitAsset_(displayManager_.getGroup("msgBoxFeature"),xOffset_,yOffset_,xRatio_);//-scaleW_/2 +100*xRatio_,0,.55);

                setPorytraitAssets_(displayManager_.getGroup("logo").children[0],null,null,30);


                //portait bg
                setPorytraitAssets_(displayManager_.getGroup("mask").bg2.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("mask").bg2.children[1],true,null,(563));
                setPorytraitAssets_(displayManager_.getGroup("mask").bg3.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("mask").bg3.children[1],true);
                //fs
                setPorytraitAssets_(displayManager_.getGroup("maskFS").bg2.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("maskFS").bg2.children[1],true,null,563);
                setPorytraitAssets_(displayManager_.getGroup("maskFS").bg3.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("maskFS").bg3.children[1],true);

                setPorytraitAssets_(displayManager_.getGroup("bg").bg.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("bg").bg.children[1],true,1015);
                setPorytraitAssets_(displayManager_.getGroup("bg").bg1.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("bg").bg1.children[1],true,-54);
                //FS
                setPorytraitAssets_(displayManager_.getGroup("bgFS").bg.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("bgFS").bg.children[1],true,1015);
                setPorytraitAssets_(displayManager_.getGroup("bgFS").bg1.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("bgFS").bg1.children[1],true,-54);
                //main bg (behind reels)
                setPorytraitAssets_(displayManager_.getGroup("frame").bg4.children[0],false);
                setPorytraitAssets_(displayManager_.getGroup("frame").bg4.children[1],true);


                setPorytraitAssets_(displayManager_.getGroup("freeSpins").fsP.children[0],true,null,30);

                //preview
                setPorytraitAssets_(displayManager_.getGroup("preview").children[4],null,null,1320);
                setPorytraitAssets_(displayManager_.getGroup("preview").children[5],null,null,1320);
                setPorytraitAssets_(displayManager_.getGroup("preview").children[6],null,null,1320);
                setPorytraitAssets_(displayManager_.getGroup("preview").children[7],null,null,1350);
                setPorytraitAssets_(displayManager_.getGroup("preview").bgmsg.children[0],true);
                setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview1.children[0],true,25,700);
                setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview2.children[0],true,260);
                setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview3.children[0],true,460,700);

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
            adaptPortraitAsset_(displayManager_.getGroup("frWonPanel"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("frWonPanel"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("msgBox"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("msgBoxFR"),0,0,1);
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



            //setPorytraitAssets_(displayManager_.getGroup("frameFS").bgf.children[0],true);
            //setPorytraitAssets_(displayManager_.getGroup("frameFS").bgf.children[1],false);



            setPorytraitAssets_(displayManager_.getText("fsLabel"),true,displayManager.groups.freeSpins.texts.fsLabel.x,displayManager.groups.freeSpins.texts.fsLabel.y);
            setPorytraitAssets_(displayManager_.getText("fsValue"),true,displayManager.groups.freeSpins.texts.fsValue.x,displayManager.groups.freeSpins.texts.fsValue.y);
            setPorytraitAssets_(displayManager_.getText("totWonLabel"),true,displayManager.groups.freeSpins.texts.totWonLabel.x,displayManager.groups.freeSpins.texts.totWonLabel.y);
            setPorytraitAssets_(displayManager_.getText("totWonValue"),true,displayManager.groups.freeSpins.texts.totWonValue.x,displayManager.groups.freeSpins.texts.totWonValue.y);

            adaptPortraitAsset_(displayManager_.getGroup("preview"),0,0,1);
            setPorytraitAssets_(displayManager_.getGroup("centralLineWin").children[0],null,displayManager.groups.centralLineWin.texts.lineWin.x);

            setPorytraitAssets_(displayManager_.getGroup("logo").children[0],null,0,0);

            setPorytraitAssets_(displayManager_.getGroup("freeSpins").fsP.children[0],true,null,0);


            //----

            //preview

            setPorytraitAssets_(displayManager_.getGroup("preview").bgmsg.children[0],true);
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
            if (previewManager_.getClosed()==false && flag ==false)return;
            displayManager_.getGroup("bg" + fs).visible = !flag;
            if (displayManager_.getGroup("mask" + fs).bg2) displayManager_.getGroup("mask" + fs).bg2.visible = !flag;
            if (displayManager_.getGroup("mask" + fs).bg3) displayManager_.getGroup("mask" + fs).bg3.visible = !flag;
            if (fs == "" || flag == true) displayManager_.getGroup("logo").visible = !flag;
            displayManager_.getGroup("mask" + fs).visible = !flag;
            displayManager_.getGroup("frame" + fs).visible = !flag;
            displayManager_.getGroup("wins" ).visible = !flag;
            displayManager_.getGroup("wild" ).visible = !flag;
            displayManager_.getGroup("lines" ).visible = !flag;
            displayManager_.getGroup("scatter" ).visible = !flag;
            if (fs == "" && flag == true)displayManager_.getGroup("freeRounds").visible = !flag;
            if (fs == "" && freeRoundsManager_.getIsInFr() && flag==false){
                displayManager_.getGroup("freeRounds").visible = !flag;
            }
            displayManager_.getGroup("reels").visible = !flag;
            displayManager_.getGroup("freeSpins").visible=false;
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
        }else if (flag==false ) {
            displayManager_.getGroup("logo").visible = true;
            displayManager_.getGroup("bg").visible=true;
            displayManager_.getGroup("mask").visible=true;
            displayManager_.getGroup("frame").visible=true;
            displayManager_.getGroup("bgFS").visible=false;
            displayManager_.getGroup("frameFS").visible=false;
            displayManager_.getGroup("maskFS").visible=false;
            displayManager_.getGroup("freeSpins").visible=false;
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
        console.log("loaded port")
        setPortrait_(true);
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
            if (Util.getRandomInt(1,100)>60){//forces the logo to idle cycle
                idleCycleManager_.forceIdleCycle("s1");
            }

        }else {
            return false;
        }
    }

    function realDoSpin_(swipe){//swipte=array
        if(!onGame_)return;
        if(messageOn_==true){

            return;
        }
        spinning_=true;
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
            shiftingWildReelManager_.clearWild(shiftWildReelSmb_);
            stickyWildManager_.clearWild(stickyWildSmb_);

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

    function getShiftWildNumber_(reels){
        shiftWilSimbsNum_=0;
        if (shiftingWildReelManager_ != null) {
            //wild on bottom smb for wild reel
            for (var i = 0; i < reels.length; i++) {
                var a = 0;
                if (shiftingWildReelManager_.getTriggerIcon().indexOf(spinManager_.getSpinReelResp().reel[i].smb[a].smb)>=0) {
                    if (spinManager_.getSpinReelResp().reel[i].smb[0].prevsmb!=null) {
                        shiftWildReelSmb_[i] = {};
                        shiftWildReelSmb_[i].simbolReference = [];
                        shiftWildReelSmb_[i].substOnreel = [];
                        shiftWildReelSmb_[i].smbNum = [];
                        shiftWildReelSmb_[i].pos = [];
                        shiftWildReelSmb_[i].reel = [];
                        shiftWildReelSmb_[i].anim = [];
                        shiftWildReelSmb_[i].onReel = false;
                        if (shiftWildReelSmb_[i].shift == undefined) shiftWildReelSmb_[i].shift = 0;

                        shiftWildReelSmb_[i].smbNum.push(shiftingWildReelManager_.getTriggerIcon());
                        shiftWildReelSmb_[i].simbolReference.push(reels[i].getSymbol(0));
                        shiftWildReelSmb_[i].pos.push(reels[i].getPos(0));
                        shiftWildReelSmb_[i].substOnreel.push(reels[i].getSymbol(0));
                        shiftWildReelSmb_[i].substOnreel.push(reels[i].getSymbol(1));
                        shiftWildReelSmb_[i].substOnreel.push(reels[i].getSymbol(2));
                        if (shiftWildReelSmb_[i].shift == "0") shiftWilSimbsNum_++;
                        shiftWildReelSmb_[i].shift = ((spinManager_.getSpinReelResp().reel[i].smb[0].prevsmb != null) ? "0" : "1");
                    }
                }
            }
        }
    }

    function getStickyWildNumber_(reels){
        stickyWilSimbsNum_=0;
        if (stickyWildManager_ != null) {
            for (var i = 0; i < reels.length; i++) {
                for (var a =0 ;a<3;a++) {
                    if (stickyWildManager_.getTriggerIcon().indexOf(spinManager_.getSpinReelResp().reel[i].smb[a].smb) >= 0 || ( spinManager_.getSpinReelResp().reel[i].smb[a].prevSmb!=undefined && stickyWildManager_.getTriggerIcon().indexOf(spinManager_.getSpinReelResp().reel[i].smb[a].prevSmb>=0)) ) {
                        if (spinManager_.getSpinReelResp().reel[i].smb[a].special != "done" && spinManager_.getSpinReelResp().reel[i].smb[a].special.split("-")[0]!="stage2" ) {//attach a new one only when stage 1
                            stickyWildSmb_[i][a].special=spinManager_.getSpinReelResp().reel[i].smb[a].special;
                            stickyWildSmb_[i][a].simbolReference=(reels[i].getSymbol(a));
                            stickyWildSmb_[i][a].simbolReference.smbToRemove=a;

                            stickyWilSimbsNum_++;
                        }else {
                            if (stickyWildSmb_[i]!=undefined && stickyWildSmb_[i][a]!=undefined)stickyWildSmb_[i][a].special=spinManager_.getSpinReelResp().reel[i].smb[a].special;
                        }
                        if (stickyWildManager_.getTriggerIcon().indexOf(spinManager_.getSpinReelResp().reel[i].smb[a].smb) >= 0 && spinManager_.getSpinReelResp().reel[i].smb[a].special.split("-")[0]!="stage1" ){
                            spinManager_.getSpinReelResp().reel[i].smb[a].notShow=true;
                        }
                    }
                }
            }
        }
    }

    function spinAnimEnd_() {
        choose_=false;
        playTriggeredSmb_();
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
        getShiftWildNumber_(spinManager_.getReels());
        //getStickyWildNumber_(spinManager_.getReels());
        evaluateWinnings_();
    }

    function evaluateWinnings_(){
        //start bonus if needed, displays all winnings (also called after bonus to display lines winnings), after winnings call the autoplay and freespins evaluator
        lineManager_.clearLine();
        eventManager_.clearEvt();

        if (wonBonus==0) {

            logger("NO bonus found ")

            wildManager_.endAnimHandle((winManager_.getWildNum()>0)?winManager_.getWildSimbs():null, eventManager_);
            shiftingWildReelManager_.endAnimHandle((shiftWilSimbsNum_>0)?shiftWildReelSmb_:null, eventManager_);
            stickyWildManager_.endAnimHandle((stickyWilSimbsNum_>0)?stickyWildSmb_:null, eventManager_);

            twinReelManager_.hideTwinReels();

            if (waitForSubstitution_)eventManager_.addEvent(fakeEvent_,(compulsiveFlag_)?700:2300);
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
                        eventManager_.addEvent(fakeEvent_, 300);
                    }
                }
                freeSpinsManager_.endAnimHandle(eventManager_);
                if(!fsWon)framework.updateSmallMessageText(Translate.do("Good luck"));
            }

            buttonManager_.applyState("AFTERSPIN");

            if (fsWon && freeSpinsManager_.getIsInFs() == true && freeSpinsManager_.getFsNumber() == 0) {
                eventManager_.addEvent(fsEval_, 2000);
            } else {
                eventManager_.addEvent(fsEval_, (freeSpinsManager_.getFsAdd() == true)?2000:0);
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
                    realDoSpin_(par);
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
        //reset expanding wilds
        stickyWildManager_.resetWilds();
        idleCycleManager_.startIdleCycle();
        setPortrait_((getOrientation()=="portrait")?true:false);
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

                if (spinManager_.getSpinReelResp().reel[i].smb[a].special.indexOf("anim") >= 0) { //check for special to animate
                    var smb = new Phaser.Sprite(game_, s.x, s.y, "bluFlame");
                    smb.anchor.set(.5, .5);
                    smb.animations.add("anim");
                    smb.scale.x = 1.5;
                    smb.scale.y = 1.5;
                    smb.animations.play("anim", 24, false, true);
                    displayManager_.getGroup("bgIconAnim").add(smb);
                    displayManager_.getGroup("bgIconAnim").alpha=1;
                    if (compulsiveFlag_==true)  soundManager_.playSound("reelSoundFast");

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

                smbB = new Phaser.Sprite(game_, triggerSymbol_[a].x, triggerSymbol_[a].y, "bluFlame" );
                smbB.anchor.set(.5, .5);
                smbB.animations.add("anim");
                smbB.scale.x = 1.4;
                smbB.scale.y = 1.4;
                smbB.animations.play("anim", 24, false, true);
                displayManager_.getGroup("bgIconAnim").alpha=1;
                displayManager_.getGroup("bgIconAnim").add(smbB);


                spinManager_.getReelGroup(triggerSymbol_[a].reel).add(smb);
                spinManager_.setAnimationMap(triggerSymbol_[a].reel, triggerSymbol_[a].smb, smb);
                smb.animations.play("anim", 24, false, true, updateIcon_, triggerSymbol_[a]);
                triggerSymbol_[a].played=true;
                soundManager_.playSound("fsWin");
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

    function setDelRepeter_(obj){
        var delayRepeater=obj.delayRepeater;
        var slowDownReel=[];
        var iconSound=[];
        var reelSound=[];
        var found=0;
        var inc=0;
        var min=3;
        var nextToFind;

        for (var i = 0; i <= ReelConfig.numReels; i++) {
            slowDownReel[i]=false;
            iconSound[i]=false;
            reelSound[i]=false;
        }

        //looking for feature symbols to slow down the reels creating some anticipation
        for (var i = 0; i < ReelConfig.numReels; i++) {
            var reelDone=false;
            for (var a = 0; a < 3; a++) {
                if (spinManager_.getSpinReelResp().reel[i].smb[a].smb == 12 ) {

                    found++;
                    inc=inc+3;
                    min=delayRepeater[i];
                    if (i==4 && found<3){//play sound just when is possible to trigger

                    }else if (i==4 ){
                        iconSound[i]=true;
                    }
                    if (i==3 && found<2){//play sound just when is possible to trigger

                    }else if (i==3 ){
                        iconSound[i]=true;
                    }
                    if  (i==2 && found<1){//play sound just when is possible to trigger

                    }else if (i==2 ){
                        iconSound[i]=true;
                    }
                    if  (i==1 && found<0){//play sound just when is possible to trigger

                    }else if (i==1 ){
                        iconSound[i]=true;
                    }
                    if  (i==0 && found<0){//play sound just when is possible to trigger

                    }else if (i==0 ){
                        iconSound[i]=true;
                    }
                }
                if (reelDone==false && found > 0 && i<ReelConfig.numReels) {
                    var skip=false;
                    if (i==4 && found<=2){
                        delayRepeater[i+1] =  delayRepeater[i]+2;
                        skip=true;
                    }
                    if (i==3 && found<=1){
                        delayRepeater[i+1] =  delayRepeater[i]+2;
                        skip=true;
                    }
                    if (i==2 && found<=0){
                        delayRepeater[i+1] = delayRepeater[i]+2;
                        skip=true;
                    }
                    if (skip==false) {
                        reelDone=true;
                        inc = inc + 2;
                        delayRepeater[i + 1] = Math.max(delayRepeater[i + 1], min) + inc;
                        slowDownReel[i + 1] = true;
                        reelSound[i+1] = true;
                    }

                }
            }
        }

        for (var i = 0; i < ReelConfig.numReels; i++) {
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
            soundManager_.getBGSound("bgFs").fadeOutBgSoundExternal(1000,0.1);
            if (fadeT_O_!=null){
                fadeBg_=false;
                iFadeT_O_=setTimeout(soundManager_.getBGSound("bgFs").increaseVolExternal,fadeT_O_,1500);
            }
        }
    }

    function increaseVolumeBG_(){
        if (fadeBg_) {
            fadeBg_=false;
            if (freeSpinsManager_.getIsInFs() == false) {
                soundManager_.getBGSound("bgSlot").increaseVolExternal(1500);
            } else {
                soundManager_.getBGSound("bgFs").increaseVolExternal(1500);
            }
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
        getStickyWildNumber:getStickyWildNumber_,
        decreaseVolumeBG:decreaseVolumeBG_,
        increaseVolumeBG:increaseVolumeBG_,
        setPortrait:setPortrait_,
        loadedPortrait:loadedPortrait_,
        hideGame:hideGame_,
        doWR:function(){
            if (choose_)return;
            communicationManager_.sendServletRequest("choose","&pick=1");
            choose_=true;
        },
        doSM:function(){
            if (choose_)return;
            communicationManager_.sendServletRequest("choose","&pick=2");
            choose_=true;
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
        setWildSimbs:function (value) {
            shiftWildReelSmb_=value;
        },
        setStickyWildSimbs:function (value) {
            stickyWildSmb_=value;
        },
        getStickyWildSimbs:function () {
            return stickyWildSmb_;
        },
        waitForSpin:function(){
            if (freeSpinsManager_.getIsInFs() == true) {
                var wr=shiftingWildReelManager_.hasWildReel();
                var sw=stickyWildManager_.hasWildReel();
                var ret= (wr||sw);
                //return ( ret );
                return true; // forcing slow speed
            }else{
                return false;
            }
        },
        isReelWilded:function(num){
            return shiftingWildReelManager_.isReelWilded(num);
        },
        getStickyWildManager:function(){
            return stickyWildManager_;
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
            return stickyWildManager_.isSymbolWilded(reel,smb);
        },
        clearPrevEvt:function () {
            clearTimeout(apTimer_);
            eventManager_.clearEvt();
        },
        getRatio:function(){
            return xRatio_;
        },
    }

    return me;
}
