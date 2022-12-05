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
    var awardedFs_ =0;
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
    var sucessiveWin_=0;
    var anchorPos_=0;
    var outOfFs_=false;
    var xMaskH=0;
    var yMaskH=10;
    var yMaskTop=0;
    var fsMask_=0;
    var maskWidthH=(4*ReelConfig.reel.deltaX);
    var maskHeightH=330;
    var portraitLoaded_=false;
    var portraitLoading_=false;
    var buyIn_=false;
    var wasInbuyIn_=0;
    var endFs_=0; //used to avoid displaying sticky wilds on multiple buyin
    var enabledButtons_=true;
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
    var stageH_;
    var stageW_;
    var reelFrame_;
    var pot_;
    var lockedReels_=[];

    function create_() {
        if (framework.isTouch()==true) {
            buttonManager_.applyState("NH");
            framework.hideFramework();
            displayManager_.getGroup("reels").visible = true;
            displayManager_.getGroup("bg").visible = true;
            displayManager_.getGroup("logo").visible = true;

            if (displayManager_.getGroup("hideGame") != undefined) {
                displayManager_.getGroup("hideGame").visible = true;
            }
        }else{
            displayManager_.getGroup("reels").visible = true;
            displayManager_.getGroup("bg").visible = true;
            displayManager_.getGroup("logo").visible = true;
        }
        displayManager_.getGroup("bgFS").alpha=0;
        displayManager_.getGroup("bgFS").visible=true;


        displayManager_.getGroup("fog").visible = false;
        displayManager_.getGroup("multiplier").visible=true;
        displayManager_.getGroup("pot").visible=true;
        pot_=displayManager_.getGroup("pot").pot.children[0];
        pot_.play("potOff",false);
        spinManager_.createReels();
        guiBottomBar_.setBetControlInitialBet(ReelConfig.bet);//todo change this, it's just to apply the default bet
        maskWidth=1180;
        maskHeight=642;
        yMask=220;
        xMask=(ReelConfig.reel.deltaX_0);
        setMask_(displayManager_.getGroup("reels"));
        setMask_(displayManager_.getGroup("bg").bgReel);
        setMask_(displayManager_.getGroup("bgFS").bgReel);
        displayManager_.getGroup("bg").bgReel.children[0].width=ReelConfig.reel.deltaX*6;
        displayManager_.getGroup("bgFS").bgReel.children[0].width=ReelConfig.reel.deltaX*6;

        stageW_=game_.stage.width;
        stageH_=game_.stage.height;

        reelFrame_ = spriteManager_.addSpine(960, 532, "frame",null,null,.25);
        reelFrame_.visible=true;
        reelFrame_.setAnchor(.5,.5);
        displayManager_.getGroup("frame").add_Child(reelFrame_);
        displayManager_.getGroup("frame").visible=true;
        displayManager_.getGroup("fsWonPanel").alpha=0;
        reelFrame_.play("lanternLoop",true);
        for (var i = 0; i < ReelConfig.numReels+1; i++) {
            lockedReels_[i] = displayManager_.getGroup("lockReels")["lockIn_" + i].children[0];
        }

    }

    function setMask_(group){
        var graphics = new PIXI.Graphics();

        // Rectangle
        graphics.beginFill(0xDE3249);
        graphics.drawRect(xMask -(fsMask_/2)*xRatio_ ,yMask,maskWidth+(fsMask_*xRatio_),maskHeight);
        if ((getOrientation()=="portrait")) {
            graphics.drawRect((scaleW_ / 2) - (93 * xRatio_), yMask - (92 * xRatio_), 196 * xRatio_, yMaskTop * xRatio_)
            graphics.drawRect((scaleW_ / 2) - (93 * xRatio_), yMask + (7 * 90 * xRatio_), 196 * xRatio_, yMaskTop * xRatio_)
        }else{
            graphics.drawRect( ReelConfig.reel.deltaX_0 + (3*ReelConfig.reel.deltaX) -181/2,ReelConfig.reel.deltaY_0-642-(92),196,yMaskTop)
            graphics.drawRect( ReelConfig.reel.deltaX_0 + (3*ReelConfig.reel.deltaX) -181/2,ReelConfig.reel.deltaY_0 -644  + (7* 92),196,yMaskTop)

        }
        graphics.endFill();
        group.mask=graphics

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
        scaleH_=window.innerHeight*window.devicePixelRatio;
        scaleW_= window.innerWidth*window.devicePixelRatio;
        // if (framework.isTouch()!=true)return;
        hideGame_(true);
        portrait_=port;
        if (portraitLoading_)return;
        var fs= (freeSpinsManager_!=undefined && freeSpinsManager_.getIsInFs())?"FS":"";

        if (port) {
            if (firstLandscape){
                //load the game on landscape of r iOS
                $(".turnLandscape").removeClass('hidden');
                return;
            }
            var xWideSafeSpace=50;
            var rap=scaleH_/scaleW_

            if (fs=="FS"){
                xWideSafeSpace = Math.min(100*(scaleW_/scaleH_) / (Math.log10(rap)),900);  //working out the size related to the portrait scale, max is 800 to avoid shrinking too much
            }else{
                xWideSafeSpace = Math.min(40*(scaleW_/scaleH_) / (Math.log10(rap)),800);  //working out the size related to the portrait scale, max is 800 to avoid shrinking too much
            }

            console.log(scaleH_/scaleW_)
            console.log(xWideSafeSpace)
            xRatio_ = window.innerWidth*window.devicePixelRatio/(( ReelConfig.icon.width *  ReelConfig.numReels)+xWideSafeSpace) ;//ratio between the current Width and the reel width to make the reels bigger as the current width (almost....)
            console.log(xRatio_)

            var yPositionOffest=270*xRatio_;    //this is to move tha all thing down compared to landscape
            xWideSafeSpace=xWideSafeSpace*xRatio_

            var deviceYoffset= 10 * window.innerHeight/window.innerWidth;
            if ($("#footer-bottom-message")!=undefined)$("#footer-top-win").html($("#footer-bottom-message")[0].outerText);
            if ($("#footer-bottom-message")!=undefined)$("#footer-bottom-message").html("")

            var oFfset=ReelConfig.reel.reelHYOffset*xRatio_;
            maskWidth=((1180*xRatio_)+ xWideSafeSpace/2);
            maskHeight=642*xRatio_;
            yMask=185*xRatio_+yPositionOffest+deviceYoffset+oFfset;
            xMask=(380-ReelConfig.reel.deltaX_0)*xRatio_;
            setMask_(displayManager_.getGroup("reels"));
            setMask_(displayManager_.getGroup("bg").bgReel);
            setMask_(displayManager_.getGroup("bgFS").bgReel);

            adaptPortraitAsset_(displayManager_.getGroup("reels"), (-1*(ReelConfig.reel.deltaX_0)*xRatio_)+ xWideSafeSpace/2,yPositionOffest+deviceYoffset,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("frame"),(-1*(ReelConfig.reel.deltaX_0)*xRatio_)+ xWideSafeSpace/2,yPositionOffest+deviceYoffset,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("stickyWilds"), (-1*(ReelConfig.reel.deltaX_0)*xRatio_)+ xWideSafeSpace/2,yPositionOffest+deviceYoffset,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("lockReels"), (-1*(ReelConfig.reel.deltaX_0)*xRatio_)+ xWideSafeSpace/2,yPositionOffest+deviceYoffset,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("pot"),(-1*(ReelConfig.reel.deltaX_0)*xRatio_)+ xWideSafeSpace/2,yPositionOffest+deviceYoffset,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("multiplier"),(-1*(ReelConfig.reel.deltaX_0)*xRatio_)+ xWideSafeSpace/2 -130*xRatio_ ,yPositionOffest+deviceYoffset -30*xRatio_  ,xRatio_*1.25);
            adaptPortraitAsset_(displayManager_.getGroup("centralLineWin"), (scaleW_/2 ) -(960*xRatio_),yPositionOffest+deviceYoffset,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("centralWin"), (scaleW_/2 ) -(960*xRatio_),yPositionOffest+deviceYoffset,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("buyFeature"), (scaleW_/2 ) -(1300*xRatio_),yPositionOffest+deviceYoffset -270*xRatio_,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("centralFuntainSmallObj"), (scaleW_/2 ) -(1250*xRatio_),0,xRatio_*1.5);
            adaptPortraitAsset_(displayManager_.getGroup("freeSpins"), (scaleW_/2 ) -(960*xRatio_),yPositionOffest+deviceYoffset,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("freeRounds"), (scaleW_/2 ) -(960*xRatio_),yPositionOffest+deviceYoffset,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("lockReels"), (-1*(ReelConfig.reel.deltaX_0)*xRatio_)+ xWideSafeSpace/2,yPositionOffest+deviceYoffset,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("wins"), (-1*(ReelConfig.reel.deltaX_0)*xRatio_)+ xWideSafeSpace/2,yPositionOffest+deviceYoffset,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("scatter"), (-1*(ReelConfig.reel.deltaX_0)*xRatio_)+ xWideSafeSpace/2,yPositionOffest+deviceYoffset,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("reelFg"), (-1*(ReelConfig.reel.deltaX_0)*xRatio_)+ xWideSafeSpace/2,yPositionOffest+deviceYoffset,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("logo"), (scaleW_/2 ) -(290*xRatio_),deviceYoffset,xRatio_*1.2);
            adaptPortraitAsset_(displayManager_.getGroup("bg"), (scaleW_/2 ) -(960*xRatio_),0,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("bgFS"), (scaleW_/2 ) -(960*xRatio_),0,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("preview"),(scaleW_/2 ) -(960*xRatio_),0,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("msgBoxFeature"),(scaleW_/2 ) -(960*xRatio_),yPositionOffest+deviceYoffset,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("fsWonPanel"),(scaleW_/2 ) -(960*xRatio_),yPositionOffest+deviceYoffset,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("fsWonPanelLR"),(scaleW_/2 ) -(960*xRatio_),yPositionOffest+deviceYoffset,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("frWonPanel"),(scaleW_/2 ) -(960*xRatio_),yPositionOffest+deviceYoffset,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("msgBoxFR"),(scaleW_/2 ) -(960*xRatio_),yPositionOffest+deviceYoffset,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("msgBox"),(scaleW_/2 ) -(960*xRatio_),yPositionOffest+deviceYoffset,xRatio_);


            //bg
            setPorytraitAssets_(displayManager_.getGroup("bg").bg.children[0],false);
            setPorytraitAssets_(displayManager_.getGroup("bg").bgP.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("bg").bgReel.children[0],null,null,820);
            setPorytraitAssets_(displayManager_.getGroup("bgFS").bgReel.children[0],null,null,820);
            //FS
            setPorytraitAssets_(displayManager_.getGroup("bgFS").bg.children[0],false);
            setPorytraitAssets_(displayManager_.getGroup("bgFS").bgP.children[0],true);



            //intro page
            setPorytraitAssets_(displayManager_.getGroup("preview").bgP.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("preview").logo.children[0], true,null,70);
            setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview1.children[0],true,960);
            setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview2.children[0],true,960 ,930);
            setPorytraitAssets_(displayManager_.getGroup("preview").children[5],true,400 ,1690);
            setPorytraitAssets_(displayManager_.getGroup("preview").children[6],null,null ,690);
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
            maskWidth=1180;
            maskHeight=642;
            yMask=ReelConfig.reel.deltaY_0-642;
            xMask=ReelConfig.reel.deltaX_0;

            var oFfset=ReelConfig.reel.reelHYOffset;


            setMask_(displayManager_.getGroup("reels"));
            setMask_(displayManager_.getGroup("bg").bgReel);
            setMask_(displayManager_.getGroup("bgFS").bgReel);

            adaptPortraitAsset_(displayManager_.getGroup("reels"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("hReel"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("stickyWilds"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("bg"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("bgFS"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("lockReels"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("wins"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("scatter"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("reelFg"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("logo"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("centralWin"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("buyFeature"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("centralLineWin"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("centralFuntainSmallObj"),0,0,1.2);
            adaptPortraitAsset_(displayManager_.getGroup("freeSpins"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("freeRounds"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("preview"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("msgBoxFR"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("msgBoxFeature"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("fsWonPanel"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("fsWonPanelLR"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("frWonPanel"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("msgBox"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("msgBoxFr"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("frame"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("multiplier"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("pot"),0,0,1);


            setPorytraitAssets_(displayManager_.getGroup("bg").bg.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("bg").bgP.children[0],false);
            setPorytraitAssets_(displayManager_.getGroup("bg").bgReel.children[0],null,null,540);
            setPorytraitAssets_(displayManager_.getGroup("bgFS").bgReel.children[0],null,null,540);

            //FS
            setPorytraitAssets_(displayManager_.getGroup("bgFS").bg.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("bgFS").bgP.children[0],false);


            //intro page
            setPorytraitAssets_(displayManager_.getGroup("preview").bgP.children[0],false);
            setPorytraitAssets_(displayManager_.getGroup("preview").logo.children[0],false,null,730);
            setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview1.children[0],true,495,200);
            setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview2.children[0],true,1430 ,200);
            setPorytraitAssets_(displayManager_.getGroup("preview").children[5],null,50 ,965);
            setPorytraitAssets_(displayManager_.getGroup("preview").children[6],null,null ,0);


        }

        //setTimeout(setMask_,400);
        setTimeout(hideGame_,500,false);
        stageW_=game_.stage.width;
        stageH_=game_.stage.height;
        //activateShamrockScroll_();
    }

    function setPorytraitAssets_(name, visible,x,y,scale){
        if (name!=undefined){
            if(visible!=null)name.visible=visible;

            if (x!=null&& !isNaN(x)){
                name.x=x;
            }else if (x!=null){
                if (name.json[x]!=null)name.x=name.json[x];
            }

            if (y!=null && !isNaN(y)){
                name.y=y;
            }else if (y!=null){
                if (name.json[y]!=null)name.y=name.json[y];
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
            if (displayManager_.getGroup("hideGame") != undefined) {
                displayManager_.getGroup("hideGame").visible = flag;
            }
        }
        if (flag){
            framework.hideFramework();
        }else{
            if (displayManager_.getGroup("msgBox").visible==false && displayManager_.getGroup("msgBoxFeature").visible==false &&  displayManager_.getGroup("msgBoxFR").visible==false) {
                framework.showFramework();
            }else{
                framework.hideFramework();
            }
        }
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

    function waitForReelExp_(){
        waitForReelExpansion_=false;
    }

    function unSetMask_(){
        if (mask_!=null){
            mask_.destroy();
            mask_=null;
        }
    }

    var scatterCount_=0;
    var scatterPlayed_=false;
    var sideCharacter_=null;

    function initGame_() {
        resume_();
        expandReelSize_(0);
        //setTimeout(fsLogoOut_, 1000);
        //setTimeout(reelCrack_, 4000);
    }

    function freeze_(i){
        displayManager_.getGroup("lockReels").visible=true;
        displayManager_.getGroup("freeSpins").visible=true;
        var bones =  lockedReels_[i];

        if (bones.visible == false) {
            bones.visible = true;
            if (i==3){
                bones.play("look-reel-expanded",false, showText_,i);
            }else{
                bones.play("look-reel",false, showText_,i);
            }
            soundManager_.playSound("lock");
        }else if ( bones.visible == true) {
            //bones.playBack( 0, false);
             bones.visible = false;
        }
        addFS_=2;
        numFs_=12
        setTimeout(updateAddFsEvent_,20,addFS_,numFs_,0);
        setTimeout(updateFreeSpinsMult,700,1);
    }

    var transition_=false;
    function reelCrack_(){
        if (framework.isTouch())setPortrait_((getOrientation()=="portrait")?true:false);
        TweenMax.to(displayManager_.getGroup("bgFS").bgReel.children[0],1,{delay:.3,width:1367})
        //central reel mask bottom
        var o={}
        o.val=0;
        TweenMax.to(o,1,{val:ReelConfig.reel.deltaX,onUpdate:increaseMask_,onUpdateParams: [o]})
        //central reel top mask
        var o={}
        o.val=0;
        TweenMax.to(o,.1,{val:96,onUpdate:increaseMaskTop_,onUpdateParams: [o]})

        for (var i=0;i<6;i++) {
            var pos=0;
            if (i<3){
                TweenMax.to( displayManager_.getGroup("reels").children[i],1,{x:pos-ReelConfig.reel.deltaX/2});
            }else{
                TweenMax.to(displayManager_.getGroup("reels").children[i],1,{x:pos+ReelConfig.reel.deltaX/2});
            }
        }
        reelFrame_.state.timeScale=.25;
        soundManager_.playSound("crack");
        reelFrame_.play("start-Fs" , false,nextFrame_);

        setTimeout(replaceReels_,2000)

        //back for debug
        // setTimeout(moveCentralReel_,4000);
        // setTimeout(reelFrameReset_,5000);
    }

    function increaseMask_(o){
        fsMask_=o.val;
        setMask_(displayManager_.getGroup("reels"));
        setMask_(displayManager_.getGroup("bg").bgReel);
        setMask_(displayManager_.getGroup("bgFS").bgReel);
    }

    function increaseMaskTop_(o){
        yMaskTop=o.val;
        setMask_(displayManager_.getGroup("reels"));
        setMask_(displayManager_.getGroup("bg").bgReel);
        setMask_(displayManager_.getGroup("bgFS").bgReel);
    }

    function replaceReels_(){
         displayManager_.getGroup("stickyWilds").visible = false;
         removeAll("stickyWilds");
        if (bResume_){
            moveLockedReels_(true,true);
        }
        for (var i=0;i<6;i++) {
            if (spinManager_.getReels()[i]!= undefined) {
                spinManager_.getReels()[i]= null;
            }
        }

        while(displayManager_.getGroup("reels").children[0]) {
            displayManager_.getGroup("reels").removeChild(displayManager_.getGroup("reels").children[0])
        }

        spinManager_.createReels(1);
        displayManager_.getGroup("reels").children[3].y=-635
        soundManager_.playSound("multiplier");
        TweenMax.to( displayManager_.getGroup("reels").children[3],.3,{y:92,ease: Back.easeOut,onComplete:goAhead_})
        if (!buyIn_){
            if (displayManager_.getGroup("msgBox").visible==false) {
                setTimeout(checkButton_,500);
            }else{
                checkButton_();
            }
        }
        transition_=false;

//         setTimeout(freeze_,1000,0);
//         setTimeout(freeze_,1000,1);
//         setTimeout(freeze_,1000,2);
//         setTimeout(freeze_,1000,3);
//         setTimeout(freeze_,1000,4);
//         setTimeout(freeze_,1000,5);
//         setTimeout(freeze_,1000,6);
    }

    function goAhead_(){
        if (bResume_){
            freeSpinsManager_.setIsInFs(true);
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

    function removeAll(group){
        while(displayManager_.getGroup(group).children[0]) {
            displayManager_.getGroup(group).removeChild(displayManager_.getGroup(group).children[0]);
        }
    }

    function restoreReels_(){
         displayManager_.getGroup("stickyWilds").visible = false;
        removeAll("stickyWilds");

        // soundManager_.playSound("winAmountFall");
        for (var i=0;i<6;i++) {
            if (spinManager_.getReels()[i]!= undefined) {
                spinManager_.getReels()[i]= null;
            }
        }

        removeAll("reels");
        spinManager_.getSpinReelResp().reel[3] = spinManager_.getSpinReelResp().reel[4];
        spinManager_.getSpinReelResp().reel[4] = spinManager_.getSpinReelResp().reel[5];
        spinManager_.getSpinReelResp().reel[5] = spinManager_.getSpinReelResp().reel[6];

        spinManager_.createReels(2);

        displayManager_.getGroup("reels").children[3].y=0;
        transition_=false;
        setTimeout(completeFsOut_,2000);

    }

    function completeFsOut_(){
        wasInbuyIn_=0;
        if (gameClass_.isSpinning()==true)return;
        //if(displayManager_.getText("lineWin")!=undefined)displayManager_.getText("lineWin").alpha=0;
        noSleep.disable();//mobile devices can now go to sleep
        reelFrame_.play("lanternLoop",true);
        if (freeRoundsManager_.getIsInFr()){
            setTimeout(freeRoundsManager_.getFreeRoundsEval,1000);
        }
    }

    function moveCentralReel_(){
    if (framework.isTouch())setPortrait_((getOrientation()=="portrait")?true:false);
        TweenMax.to( displayManager_.getGroup("reels").children[3],.4,{y:displayManager_.getGroup("reels").children[3].y-700,alpha:0,ease: Back.easeIn})
    }

    function reelFrameReset_(){
    console.log("reelframereset")
        removeAll("stickyWilds");
        soundManager_.playSound("crack");
        TweenMax.to(displayManager_.getGroup("bgFS").bgReel.children[0],.5,{delay:.3,width:ReelConfig.reel.deltaX*6})
        //central reel bottom mask
        var o={}
        o.val=ReelConfig.reel.deltaX;
        TweenMax.to(o,.7,{val:0,onUpdate:increaseMask_,onUpdateParams: [o]})

        //central reel top mask
        var o={}
        o.val=94;
        TweenMax.to(o,.7,{val:0,onUpdate:increaseMaskTop_,onUpdateParams: [o]})

        reelFrame_.play("end-Fs" , false,nextFrameRevert_);
        for (var i=0;i<=6;i++) {
            var pos=0;
            if (i<3){
                TweenMax.to( displayManager_.getGroup("reels").children[i],.7,{x:pos+ReelConfig.reel.deltaX/2});
            }else{
                TweenMax.to( displayManager_.getGroup("reels").children[i],.7,{x:pos-ReelConfig.reel.deltaX/2});
            }
        }

    }

    function nextFrameRevert_(){
        console.log("nextFrameRevert_")
        removeAll("stickyWilds");
        restoreReels_();
    }

    function nextFrame_(){
    console.log("nextframe-------------------------")
        removeAll("stickyWilds");
    }

    function resume_(){
        var indexPort=(getOrientation()=="portrait")?1:0;
        if (framework.isTouch()!=true) {
            //display manager levels
            displayManager_.getGroup("reels").visible = true;
            displayManager_.getGroup("bg").visible = true;
            //displayManager_.getGroup("frame").visible = true;
            displayManager_.getGroup("logo").visible = true;
        }

       // if(!framework.getSettings().getHelpOnLoad())displayManager_.getGroup("buttonFg").visible=false;
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
            buttonBF_ = new PixiButton(game_, displayManager.groups.buyFeature.buttons.buyFeature.x, displayManager.groups.buyFeature.buttons.buyFeature.y, displayManager.groups.buyFeature.buttons.buyFeature.name, me[displayManager.groups.buyFeature.buttons.buyFeature.evt], 0,1,2);
            buttonBF_.setAnchor(0.5, 0.5);


            var t =spriteManager_.addText(displayManager.groups.buyFeature.buttons.buyFeature.texts.txt.x , displayManager.groups.buyFeature.buttons.buyFeature.texts.txt.y,  Translate.do( displayManager.groups.buyFeature.buttons.buyFeature.texts.txt.text),.5,.5, {
                fontFamily: displayManager.groups.buyFeature.buttons.buyFeature.texts.txt.font,
                fontSize: displayManager.groups.buyFeature.buttons.buyFeature.texts.txt.fontSize,
                fill: displayManager.groups.buyFeature.buttons.buyFeature.texts.txt.fill
            });

            buttonBF_.add_Child(t);
            displayManager_.getGroup("buyFeature").add_Child(buttonBF_);

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
            moveAnchor_();
            anchorPos_=sucessiveWin_;
            //multiplier
            if (Number(communicationManager_.getResumeStatus().state.preMult)>1) {
                displayManager_.getText("multValue1").setText("X" + communicationManager_.getResumeStatus().state.preMult);
            }


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

            numFs_=Number(communicationManager_.getResumeStatus().freeSpin.num);
            addFS_=Number(communicationManager_.getResumeStatus().freeSpin.object.wonAdditionalSpins);
            awardedFs_ =Number(communicationManager_.getResumeStatus().freeSpin.object.totalFSAwareded) ;

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
            communicationManager_.getResumeStatus().freeSpin.totalWin=communicationManager_.getResumeStatus().freeSpin.object.totalWin*(balanceManager_.getCoinValue()/ lineManager_.getLinesNumber());
            communicationManager_.getResumeStatus().status.totalWin=communicationManager_.getResumeStatus().freeSpin.totalWin*100;
            communicationManager_.getResumeStatus().status.unsettledTotal=communicationManager_.getResumeStatus().status.totalWin;
            numFs_=Number(communicationManager_.getResumeStatus().freeSpin.num);
            addFS_=Number(communicationManager_.getResumeStatus().freeSpin.object.wonAdditionalSpins);
            awardedFs_ =Number(communicationManager_.getResumeStatus().freeSpin.object.totalFSAwareded);
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
        }

        onGame_=true;
        framework.showFramework();
        sucessiveWin_=(communicationManager_.getResumeStatus().status.numTumbles!=undefined)?communicationManager_.getResumeStatus().status.numTumbles:0;

        if (framework.isTouch())setPortrait_((getOrientation()=="portrait")?true:false);

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
        transition_=true;
        removeAll("stickyWilds");
        displayManager_.getGroup("lockReels").visible=true;
        displayManager_.getGroup("buyFeature").visible=false;
        setTimeout(reelCrack_, 500);
        fadeInFs_();
    }

    function logoIn_(amt){
        console.log("logoin")
        outOfFs_=true;
        endFs_=true;
        setTimeout(moveCentralReel_,800);
        setTimeout(reelFrameReset_,1000);
    }

    function changeAlpha_(obj,val){
        TweenMax.to(obj,.3,{alpha:val});
    }

    function fadeInFs_() {
        displayManager_.getText("lineWin").y=displayManager.groups.centralLineWin.texts.lineWin.yFs;
        changeAlpha_(displayManager_.getGroup("freeSpins"),1);
        changeAlpha_(displayManager_.getGroup("bgFS"),1);
        changeAlpha_(displayManager_.getGroup("pot"),0);
        changeAlpha_(displayManager_.getGroup("multiplier"),0);
        lineManager_.fsEndWinReset();
    }

    function fadeOutFs_(){
        displayManager_.getGroup("freeSpins").visible=false;
        displayManager_.getGroup("fog").visible = false;
        displayManager_.getGroup("lockReels").visible=false;
        if (buyFeatureEnabled_())displayManager_.getGroup("buyFeature").visible=true;
        me.resetSuccessiveWinning();
        changeAlpha_(displayManager_.getGroup("bgFS"),0);
        changeAlpha_(displayManager_.getGroup("pot"),1);
        changeAlpha_(displayManager_.getGroup("multiplier"),1);

    }

    function moveAnchor_(resume){
        var arr=[];
        var index=0;
        var fps =24;
        var fs= (freeSpinsManager_.getIsInFs()==true)?"":"";

        displayManager_.getText("fsAdditional").setText("");

        if (sucessiveWin_!= anchorPos_ ) {
            if (sucessiveWin_>0){

                if (sucessiveWin_<=4) {
                    pot_.play("potOn"+ sucessiveWin_,false);
                    soundManager_.playSound("potFill_0"+sucessiveWin_);
                }else{

                }

            }else{
                displayManager_.getText("multValue1").setText("");
                pot_.play("potOff",false);
                clearTimeout(quiteSpinMusic);
            }
        }

        anchorPos_=sucessiveWin_;
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
                        var bones = lockedReels_[i];
                        if (lockedReelCOnfiguration[i]=="1" && bones.visible == false) {
                            bones.visible=true;
                            if (i==3){
                                bones.play("look-reel-expanded",false, showText_,i);
                            }else{
                                bones.play("look-reel",false, showText_,i);
                            }
                            rlN++;
                            if (i==3)centralReel=true;
                        }else if (lockedReelCOnfiguration[i]=="0" && bones.visible == true) {
                            bones.visible=false;
                            //bones.playBack(24, false);
                        }
                    }
                    //increment the locked reels multiplier by reelLocked_-lockedReelPos_
                    if(rlN>0 && bResume_!=true){
                        updateLockedReels_=true;
                        setTimeout(updateAddFsEvent_,20,addFS_,numFs_,spinManager_.getSpinResp().win.total,awardedFs_);
                        setTimeout(updateFreeSpinsMult,700,rlN);
                    }
                } else {
                    //reset
                }

            }
            lockedReelPos_ = reelLocked_;
        }
    }

    function updateFreeSpinsMult(mult){
        var m=mult==undefined?spinManager_.getSpinResp().freeSpin.multiplier:Number(displayManager_.getText("fsMultValue").mult)+mult;
        if (("X" +m)!=displayManager_.getText("fsMultValueBig").text ){
            if (m>1){
                displayManager_.getText("fsMultValueBig").setText("X" +m);
                displayManager_.getText("fsMultValueBig").y=-200;
                displayManager_.getText("fsMultValueBig").alpha=1;
                displayManager_.getText("fsMultValue").mult=m;
                soundManager_.playSound("multiplier");
                TweenMax.to(displayManager_.getText("fsMultValueBig"),.4,{y:300,ease:Bounce.easeOut,onComplete:bigMult_,onCompleteParams:[m]})
                //if (gameClass.startVibrate)setTimeout(gameClass.startVibrate,300,.1,1,4);
            }
        }
    }

    function updateAddFsEvent_(num,tot,won,aw){
        updateAddFs_(num,tot,won,aw);
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
    function updateAddFs_(num,tot,won,awarded){
        var w=Number(tot);
        decreaseVolumeBG_(2500);
        displayManager_.getText("fsAdditional").setText("+" + num);
        //displayManager_.getText("fsMultValueBig").y=-200;
        displayManager_.getText("fsAdditional").visible=true;
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
        setTimeout(updateNumber_,500,w,awarded);
        setTimeout(restoreFSAnchor_,2000);

    }

    function updateNumber_(tot,aw){
        freeSpinsManager_.fsWon(Number(tot),aw);
    }

    function restoreFSAnchor_(){
        displayManager_.getText("fsAdditional").alpha=0;
    }



    function showText_(i){
        if(bResume_)return;
        soundManager_.playSound("multiplier_3");
        displayManager_.getText("fsAdd"+i).visible=true;
        displayManager_.getText("fsAdd"+i).alpha=1;
        displayManager_.getText("fsAdd"+i).visible=true;
        TweenMax.to(displayManager_.getText("fsAdd"+i).scale,.2,{y:1.3,x:1.3,yoyo:true,rep:2});
        TweenMax.to(displayManager_.getText("fsAdd"+i),.3,{delay:.7,alpha:0});
    }

    function startSpinSound_(){
    }

    function stopSpinMusic_(vol){
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
    }

    function decreaseVolumeBG_(vol){
        stopSpinMusic_(vol);
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
     //   freeSpinsManager_.resumeFs();
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
        console.log("realDoSpin_"+spinning_ + " " + " "+gotErrorInAp_ + " "+onGame_ )
        if((spinning_ )&& gotErrorInAp_==false)return;
        if(!onGame_)return;
        if (respin_)eventManager_.clearEvt();
        if (!freeTumbling_)me.resetSuccessiveWinning();
        if (displayManager_.getGroup("fsWonPanel").alpha==1)return;
        if(messageOn_==false) {
            gcmCalls_("PAID", 0); //was in enable button but for some race condition it was resetting the FS win
            if(displayManager_.getText("lineWin")!=undefined)displayManager_.getText("lineWin").alpha=0;
            if(!bResume_)displayManager_.getText("multValue1").setText("");
            freeSpinsManager_.updateFreeSpinsData();
            layers_=[];
            buyIn_=false;
            enabledButtons_=false;
            spinning_ = true;
            stopped_=false;
            updateLockedReels_=false;
            splitNumberWaysUpdated_=false;
            scatterCount_=0;
            scatterPlayed_=false;
            playTrigger_=false;
            outOfFs_=false;
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
    }

    function evaluateWinnings_(){
        //start bonus if needed, displays all winnings (also called after bonus to display lines winnings), after winnings call the autoplay and freespins evaluator
        lineManager_.clearLine();
        eventManager_.clearEvt();
        logger("NO bonus found ")
        collected_=spinManager_.getSpinResp().state.collected;
        endFs_=false; //ued to avoid displayng sticky wild on successive buyin

        if (stopped_==false && mwCounterTW_!=null){
            mwCounterTW_.timeScale(8);
            mwCounterTW_=null
        }

        if (won>0) {
            multiplier_= spinManager_.getSpinResp().state.mult;
            if (Number(spinManager_.getSpinResp().state.mult)>1) {
                displayManager_.getText("multValue1").setText("X" + multiplier_);
            }

            lineManager_.endAnimHandle(winManager_.getAllWinsSorted(), eventManager_);
            freeSpinsManager_.endAnimHandle(eventManager_);
            if (freeRoundsManager_.getIsInFr()==true && freeSpinsManager_.getIsInFs() == false ){//no add delay during nested FS
                eventManager_.addEvent(fakeEvent_,(won)?lineManager_.getTotalDuration():0);
            }
        } else {
            freeSpinsManager_.endAnimHandle(eventManager_);
            balanceManager_.setCanUpdate(true);
            clearTimeout(quiteSpinMusic);
        }
        buttonManager_.applyState("AFTERSPIN");
        lineCompletion_=true;
        spinning_=false;

        if ((won<=0 && hasScatter_==false && freeSpinsManager_.getType()!="convert" && freeSpinsManager_.getType()!="tumble" )  ) {
            eventManager_.addEvent(fsEval_, (freeSpinsManager_.getIsInFs()) ? (freeSpinsManager_.getFsNumber() == 0)? 3500:1000 : 0);
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
            multiplier_= spinManager_.getSpinResp().state.mult;
            if (Number(spinManager_.getSpinResp().state.mult)>1) {
                displayManager_.getText("multValue1").setText("X" + multiplier_);
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
            collected_ = spinManager_.getSpinResp().state.collected;
            spinning_=false;
            if (freeSpinsManager_.getIsInFs() || fsWon) {
                fs = freeSpinsManager_.getFreeSpinsEval();
            }

            if (freeRoundsManager_.getIsInFr() == true && freeSpinsManager_.getIsInFs() == false) {//no add delay during nested FS
                eventManager_.addEvent(fakeEvent_, lineManager_.getTotalDuration() );
            }

            if (won>0 || hasScatter_){
                lineCompletion_=false;
                buttonManager_.applyState("AFTERSPIN");
                lineManager_.endAnimHandle(winManager_.getAllWinsSorted(), eventManager_);
                freeSpinsManager_.endAnimHandle(eventManager_);
            }else{

                clearTimeout(quiteSpinMusic);
                quiteSpinMusic = setTimeout(stopSpinMusic_, 4000);
                freeRoundsManager_.updateFreeRoundsTot();
                if(playTrigger_)eventManager_.addEvent(playTriggeredSmb_,500);
                if (fsWon && freeSpinsManager_.getIsInFs()==false && spinManager_.getFsResp().won>5){//to make sure is fs trigger
                    transition_=true;//to prevent spinning while the transition to FS is not started yet
                }
                freeSpinsManager_.endAnimHandle(eventManager_);
                if(fsWon){
                    //additional FS won, give time to show
                    eventManager_.addEvent(fakeEvent_, 4000);
                }
                eventManager_.addEvent(fsEval_, (freeSpinsManager_.getIsInFs()==true && freeSpinsManager_.getFsNumber() ==0)?2000:(freeSpinsManager_.getIsInFs()==true && spinManager_.getSpinResp().freeSpin.object.wonAdditionalEndLevel>0)?2000: 0);
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
        console.log("fsEval "+fs + " "+ fsWon)
        if (fsWon  ){
            apTimer_=setTimeout(apEval_,Number(ReelConfig.fsSpinDelay ));
        }else{
            if (transition_){
                apTimer_=setTimeout(apEval_,2000);
            }else{
                apEval_();
            }
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
        enabledButtons_=true;
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
            if ((ap && won) || (fs)) {
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


    var resetFromAp=false;
    function startAutoSpin_(par){
        if (resetFromAp==true){
            if (freeSpinsManager_.getIsInFs() ==false){
                resetFromAp=false;
            }
            setTimeout(startAutoSpin_,1000,par);
        }
        if (autoPlayManager_.getIsInAutoPlay() || fs ) {
            if ((freeSpinsManager_.getIsInFs() && freeSpinsManager_.getFsNumber() >0) || freeSpinsManager_.getIsInFs()==false){
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
            } else{
                eventManager_.clearEvt();
                freeSpinsManager_.endAnimHandle(eventManager_);
                eventManager_.addEvent(startAutoSpin_,2000,par);
                eventManager_.triggerEvt();
                resetFromAp=true;
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
        if(displayManager_.getText("lineWin")!=undefined && outOfFs_==false){
            //displayManager_.getText("lineWin").alpha=0;
        }
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
        displayManager_.getText("multValue1").setText("");
        removeAll("stickyWilds");
        fadeOutFs_();
        transition_=true;
        displayManager_.getText("multValue1").setText("");
        soundManager_.mixBgSound("bgSlot", 1000, 1000);
        hideLr_();
        displayManager_.getText("lineWin").y=displayManager.groups.centralLineWin.texts.lineWin.y;
        buttonManager_.applyState("NH");
        buttonManager_.applyRestore();
        autoPlayManager_.setCanAp(true);
    }

    function hideLr_(){
        var lockedReelCOnfiguration = "";
        for (var i = 0; i < 7; i++) {
            var bones = lockedReels_[i];
            //bones.playBack(24,false);
            bones.visible=false;
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

        updateLockedReels_=false;
        if(spinManager_.getFsResp()!=null) {
            numFs_ = Number(spinManager_.getFsResp().num);
            addFS_ = Number(spinManager_.getFsResp().object.wonAdditionalSpins);
            awardedFs_ =Number(spinManager_.getFsResp().object.totalFSAwareded) ;
        }
        if (freeSpinsManager_.getIsInFs())moveLockedReels_();
    }

    function tumbleEnd_(i, ind, s){

    }


    function back_(smb,s){
        TweenMax.to(smb.scale,.1,{x:smb.scale.x - .07,y:smb.scale.y - .07,onComplete:endBack_,onCompleteParams:[smb,s]});
    }

    function endBack_(s){
        s.s.visible=true;
        setTimeout(dispose,100,s)
    }

    function playTriggeredSmb_(loop){
        var iconN=-1;
        var triggerSymbol_=spinManager_.getTriggerIcons();
        var add=false;
        var scatter=false;
        for (var a in triggerSymbol_){
            if ( triggerSymbol_[a].played==undefined) {
                iconN = triggerSymbol_[a].smbNum;
                add = true;

                var smb = spriteManager_.addSpine(triggerSymbol_[a].x, triggerSymbol_[a].y, "anim" + iconN);
                smb.setAnchor(.5, .5);
                smb.scale.x = 1;
                smb.scale.y = 1;
                triggerSymbol_[a].visible = false;
                spinManager_.getReelGroup(triggerSymbol_[a].reel).add_Child(smb);
                spinManager_.setAnimationMap(triggerSymbol_[a].reel, triggerSymbol_[a].smb, smb);
                smb.play("win_0" + spinManager_.getSpinReelResp().reel[ triggerSymbol_[a].reel].smb.length,(loop)?5:false,  updateIcon_, triggerSymbol_[a]);
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
        if (enabledButtons_==true && displayManager_.getGroup("fsWonPanel").visible==false && bResume_==false && canSpin_==true && spinning_==false && isTumbling_==false && (window.SPIN_STATE==undefined || window.SPIN_STATE.spinning!=true) ) {//todo ask Joe about mobile
            if (freeRoundsManager_.getIsInFr()==false && autoPlayManager_.getIsInAutoPlay()==false && lineManager_.getInterruptedWinAnim()==false ) {
                canSpin_=false;
                featureMessageReq_.showMultipleMessageMWJ("BUY FREE SPINS ROUNDS", "","", buyFeatureCB_, noBF_, obj.options);
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
        var wonFs_ = (json.freeSpin.object != undefined && json.freeSpin.object.totalFSAwareded != undefined) ? json.freeSpin.object.totalFSAwareded : 0;
        freeSpinsManager_.fsWon(buyinNum_,buyinNum_) ;
        multiplierFS_=  Number(json.freeSpin!=undefined && json.freeSpin.object!=undefined && json.freeSpin.object.preMult!=undefined)?json.freeSpin.object.preMult:1;
        fs = freeSpinsManager_.getFreeSpinsEval();
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
            setTimeout(spin_,5000,par)
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
        displayManager_.getText("fsMultValue").setText("X" + m);
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

    function setStickyWild_(){
        if (spinManager_.getSpinResp()!=undefined && freeSpinsManager_.getIsInFs()==true){
            var i=3;
            for (var a = 0; a < spinManager_.getSpinReelResp().reel[i].smb.length; a++) {
                if (spinManager_.getSpinReelResp().reel[i].smb[a] != undefined && endFs_==false && spinManager_.getSpinReelResp().reel[i].smb[a].smb==11) {
                    var smb = 11;
                    var s = spinManager_.getReels()[i].getSymbol(8-a);
                    var smb= spriteManager_.addSpine(s.x,s.y, "anim11" ,null,null,.25);
                    smb.setAnchor(.5, .5);
                    displayManager_.getGroup("stickyWilds").visible = true;
                    displayManager_.getGroup("stickyWilds").addChild(smb);
                    smb.play("win_7_07",true);
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
        playTriggeredSmb:playTriggeredSmb_,
        tumbleEnd:tumbleEnd_,
        changeCompulsiveState:changeCompulsiveState_,
        spinAnimEndAfterTumbling:spinAnimEndAfterTumbling_,
        fsLogoOut:fsLogoOut_,
        fsHideTotPanel:fsHideTotPanel_,
        unSetMask:unSetMask_,
        setMask:setMask_,
        setReelsCallback:setReelsCallback_,
        logoIn:logoIn_,
        hideGame:hideGame_,
        moveLockedReels:moveLockedReels_,
        doBuyFeature:doBuyFeature_,
        getBuyInResponse:getBuyInResponse_,
        startVibrate:startVibrate_,
        startSpinSound:startSpinSound_,
        startForcing:startForcing_,
        expandReelSizeSplit:expandReelSizeSplit_,
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
            return spinning_ ;
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
            if (communicationManager_.getResumeStatus().status.hand=="freespins") {
                soundManager_.playBgSound("bgFs");
            }else{
                soundManager_.playBgSound("bgSlot");
            }
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
        frStop:function(){
            buttonManager_.applyRestore();
        },
        setTotWin:function (value) {
            won=value;
        },
        wtf:function () {
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
        successiveWinning:function () {
            sucessiveWin_++;
            moveAnchor_(false);
        },
        resetSuccessiveWinning:function () {
            if (bResume_)return;
            sucessiveWin_=0;
            moveAnchor_(false);
        },
    }

    return me;
}
