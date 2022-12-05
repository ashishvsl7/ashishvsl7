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

    var xMaskH=ReelConfig.reel.deltaX_0+ ReelConfig.reel.deltaX;
    var yMaskH=10;
    var maskWidthH=(4*ReelConfig.reel.deltaX);
    var maskHeightH=330;
    var portraitLoaded_=false;
    var portraitLoading_=false;
    var buyIn_=false;
    var wasInbuyIn_=0;
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
    var conveyourEvent_=new EventManager();
    var stageH_;
    var stageW_;

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
            // displayManager_.getGroup("lights1").visible = true;
            // displayManager_.getGroup("lights2").visible = true;
            displayManager_.getGroup("reels").visible = true;
            displayManager_.getGroup("bg").visible = true;
            displayManager_.getGroup("logo").visible = true;
        }
        displayManager_.getGroup("bgFS").alpha=0;
        displayManager_.getGroup("bgFS").visible=true;


        displayManager_.getGroup("fog").visible = false;
        displayManager_.getGroup("winWays").visible = true;
        //displayManager_.getGroup("flashingLights").visible = true;

        spinManager_.createReels();
        guiBottomBar_.setBetControlInitialBet(ReelConfig.bet);//todo change this, it's just to apply the default bet
        var oFfset=ReelConfig.reel.reelHYOffset;
        setMask_(displayManager_.getGroup("reels"),355,182+27,1180,628);
        setMask_(displayManager_.getGroup("hReel"),575,oFfset,756,175);
        stageW_=game_.stage.width;
        stageH_=game_.stage.height;
    }

    function setMask_(group,x,y,w,h){
        var graphics = new PIXI.Graphics();

// Rectangle
        graphics.beginFill(0xDE3249);
        graphics.drawRect(x,y,w,h);
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
            xWideSafeSpace = Math.min(40*(scaleW_/scaleH_) / (Math.log10(rap)),800);  //working out the size related to the portrait scale, max is 800 to avoid shrinking too much
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

            setMask_(displayManager_.getGroup("reels"),(370-ReelConfig.reel.deltaX_0)*xRatio_,182*xRatio_+yPositionOffest+deviceYoffset+oFfset ,((1180*xRatio_)+ xWideSafeSpace/2),628*xRatio_);
            setMask_(displayManager_.getGroup("hReel"),((-1*(ReelConfig.reel.deltaX_0)*xRatio_)+ xWideSafeSpace/2)+( ReelConfig.reel.deltaX_0 + ReelConfig.reel.deltaX)*xRatio_ ,yPositionOffest+deviceYoffset-5*xRatio_,(ReelConfig.reel.deltaX*4)*xRatio_,205*xRatio_)

            adaptPortraitAsset_(displayManager_.getGroup("reels"), (-1*(ReelConfig.reel.deltaX_0)*xRatio_)+ xWideSafeSpace/2,yPositionOffest+deviceYoffset,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("hReel"), (-1*(ReelConfig.reel.deltaX_0)*xRatio_)+ xWideSafeSpace/2,yPositionOffest+deviceYoffset,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("centralLineWin"), (scaleW_/2 ) -(960*xRatio_),yPositionOffest+deviceYoffset,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("centralWin"), (scaleW_/2 ) -(960*xRatio_),yPositionOffest+deviceYoffset,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("buyFeature"), (scaleW_/2 ) -(1300*xRatio_),yPositionOffest+deviceYoffset -270*xRatio_,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("centralFuntainSmallObj"), (scaleW_/2 ) -(960*xRatio_),0,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("freeSpins"), (scaleW_/2 ) -(960*xRatio_),yPositionOffest+deviceYoffset,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("freeRounds"), (scaleW_/2 ) -(960*xRatio_),yPositionOffest+deviceYoffset,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("lockReels"), (-1*(ReelConfig.reel.deltaX_0)*xRatio_)+ xWideSafeSpace/2,yPositionOffest+deviceYoffset,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("wins"), (-1*(ReelConfig.reel.deltaX_0)*xRatio_)+ xWideSafeSpace/2,yPositionOffest+deviceYoffset,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("scatter"), (-1*(ReelConfig.reel.deltaX_0)*xRatio_)+ xWideSafeSpace/2,yPositionOffest+deviceYoffset,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("reelFg"), (-1*(ReelConfig.reel.deltaX_0)*xRatio_)+ xWideSafeSpace/2,yPositionOffest+deviceYoffset,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("logo"), (scaleW_/2 ) -(200*xRatio_),deviceYoffset,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("winWays"), (scaleW_/2 ) -(200*xRatio_),deviceYoffset,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("bg"), (scaleW_/2 ) -(960*xRatio_),0,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("bgFS"), (scaleW_/2 ) -(960*xRatio_),0,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("preview"),(scaleW_/2 ) -(960*xRatio_),0,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("msgBoxFeature"),(scaleW_/2 ) -(960*xRatio_),yPositionOffest+deviceYoffset,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("fsWonPanel"),(scaleW_/2 ) -(960*xRatio_),yPositionOffest+deviceYoffset,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("frWonPanel"),(scaleW_/2 ) -(960*xRatio_),yPositionOffest+deviceYoffset,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("msgBoxFR"),(scaleW_/2 ) -(960*xRatio_),yPositionOffest+deviceYoffset,xRatio_);
            adaptPortraitAsset_(displayManager_.getGroup("msgBox"),(scaleW_/2 ) -(960*xRatio_),yPositionOffest+deviceYoffset,xRatio_);

            //bg
            setPorytraitAssets_(displayManager_.getGroup("bg").bg.children[0],false);
            setPorytraitAssets_(displayManager_.getGroup("bg").bgP.children[0],true);

            //FS
            setPorytraitAssets_(displayManager_.getGroup("bgFS").bg.children[0],false);
            setPorytraitAssets_(displayManager_.getGroup("bgFS").bgP.children[0],true);



            //intro page
            setPorytraitAssets_(displayManager_.getGroup("preview").bgP.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("preview").logo.children[0],null,null,70);
            displayManager_.getGroup("preview").bgPreview1.children[0].scale.x=1.2
            displayManager_.getGroup("preview").bgPreview1.children[0].scale.y=1.2
            setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview1.children[0],true,960,300);
            setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview2.children[0],true,960 ,1000);
            displayManager_.getGroup("preview").bgPreview2.children[0].scale.x=1.2
            displayManager_.getGroup("preview").bgPreview2.children[0].scale.y=1.2
            setPorytraitAssets_(displayManager_.getGroup("preview").children[5],true,450 ,1750);
            setPorytraitAssets_(displayManager_.getGroup("preview").children[6],null,null ,750);

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

            var oFfset=ReelConfig.reel.reelHYOffset;
             setMask_(displayManager_.getGroup("reels"),355,182+oFfset,1180,628);
             setMask_(displayManager_.getGroup("hReel"),575,oFfset,756,175);

            adaptPortraitAsset_(displayManager_.getGroup("reels"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("hReel"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("bg"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("bgFS"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("lockReels"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("wins"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("scatter"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("reelFg"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("logo"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("winWays"),0,0,1);
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
            adaptPortraitAsset_(displayManager_.getGroup("frWonPanel"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("msgBox"),0,0,1);
            adaptPortraitAsset_(displayManager_.getGroup("msgBoxFr"),0,0,1);


            setPorytraitAssets_(displayManager_.getGroup("bg").bg.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("bg").bgP.children[0],false);

            //FS
            setPorytraitAssets_(displayManager_.getGroup("bgFS").bg.children[0],true);
            setPorytraitAssets_(displayManager_.getGroup("bgFS").bgP.children[0],false);


            //intro page
            setPorytraitAssets_(displayManager_.getGroup("preview").bgP.children[0],false);
            setPorytraitAssets_(displayManager_.getGroup("preview").logo.children[0],null,null,730);
            setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview1.children[0],true,480,280);
            setPorytraitAssets_(displayManager_.getGroup("preview").bgPreview2.children[0],true,1450 ,280);
            setPorytraitAssets_(displayManager_.getGroup("preview").children[5],null,50 ,965);
            setPorytraitAssets_(displayManager_.getGroup("preview").children[6],null,null ,0);
            displayManager_.getGroup("preview").bgPreview1.children[0].scale.x=1
            displayManager_.getGroup("preview").bgPreview1.children[0].scale.y=1
            displayManager_.getGroup("preview").bgPreview2.children[0].scale.x=1
            displayManager_.getGroup("preview").bgPreview2.children[0].scale.y=1


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
        //test
       //setTimeout(attachAnim_,1000);
        //triggerCompulsive_()
    }

    function attachAnim_(){
        var obj = spriteManager_.addSpine(200,500 -(315-157)/2, "anticipation", null,null,1);
        displayManager_.getGroup("scatter").add_Child(obj);
        obj.play("anticipation_reel", false);

//
//        var obj = spriteManager_.addSpine(200,500, "activate_16",null,null,1);
//        displayManager_.getGroup("scatter").add_Child(obj);
//        obj.play("activate_02", 2);

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
        // sideCharacter_.animations.play("anim", 24,false, false);//todo parametric loop
        // var  anim=displayManager_.getGroup("flashingLights")["ll_"+index].children[0];
        // anim.visible=true;
        // anim.animations.add("anim");
        // anim.animations.play("anim", 24,(index==1)?loop:false, false,endLight_,[anim,index]);//todo parametric loop
        //
        // var anim=displayManager_.getGroup("flashingLights")["lr_"+index].children[0];
        // anim.visible=true;
        // anim.animations.add("anim");
        // anim.animations.play("anim", 24,(index==1)?loop:false, false,endLight_,[anim,index]);//todo parametric loop
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
        var o = spriteManager_.addSpine(s.x, s.y, "activate_"+s.animal,null,null,1);
        displayManager_.getGroup("scatter").add_Child(o);
        var obj={};
        obj.loop=false;
        obj.reel=s.reel;
        obj.icon=[];
        obj.smbN=s.smb;
        obj.mult=s.mult;
        obj.icon[0]=s.animal;
        obj.transformTo=s.transformTo;
        obj.anim=o;
        o.play("activate_0" + spinManager_.getReels()[s.reel].getIconSize(0) , 2,placeWildIcon_,obj);
        soundManager_.playSound("activeTwice");
    }

    function placeWildIcon_(p){
        //p.visible=false;
        setTimeout(dispose,100,p.anim);
        var s = spinManager_.getReels()[p.reel].replaceIcon2(p.smbN, p.transformTo);
        s.alpha=0;
        if (p.mult!=undefined && p.mult>1){
            p.size=s.size;
            var fontSize=70;
            var offsetX=-0;
            var offsetY=30;
            if (s.size==3){
                offsetX=0;
                offsetY=-10;
            }else if (s.size==4){
                fontSize=60;
                offsetX=0;
                offsetY=-10;
            }else if (s.size==5){
                fontSize=55;
                offsetX=0;
                offsetY=-25;
            }else if (s.size==6){
                fontSize=52;
                offsetX=0;
                offsetY=-28;
            }else if (s.size==7){
                fontSize=45;
                offsetX=0;
                offsetY=-25;
            }
            var mult = spriteManager_.addBMPText(offsetX, offsetY, 'bmpFont', "X"+p.mult ,fontSize, "center" );
            mult.setAnchor(.5, .5);
            s.multTxt=mult;
            s.multVal=p.mult;
            s.addChild(mult);

        }
        TweenMax.to(s,.25,{alpha:1,onComplete:removeOldSymbol_,onCompleteParams:[p]});
        soundManager_.playSound("symbolsSwitch");
    }

    function removeOldSymbol_(p){
        p.visible=false;
        p=null;
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
                var smb = spinManager_.getReels()[0].getSymbolH(a[all] + 1);
                animSeq++;
                if (smb.smbNum>12) {
                    smb.visible = false;
                    smb.anim.play("expanding_reverse", false, tumblingAfterAnimal_, [smb.anim,a[all]]);
                }else{
                    var o = spriteManager_.addSpine(smb.x, smb.y, "tumble",null,null,1);
                    displayManager_.getGroup("scatter").add_Child(o);
                    o.play("tumble_05", false,endMoveAnimals_,[a[all],o],100);
                    smb.visible=false
                }
                //setTimeout(removeTile_,1000,a[all]);
            }
            conveyorSafes_.push(spinManager_.getReels()[0].setIconH(conveyorSafes_.length + 1, b[all]));
        }
        conveyourEvent_.clearEvt();
        conveyourEvent_.addEvent(moveConveyor_, 1200, [spin,a]);
        conveyourEvent_.triggerEvt();
    }

    function endMoveAnimals_(par){
        var a=par[0];
        var obj=par[1];
        removeTile_(a);
        dispose(obj);
        animSeq=animSeq-1;
    }

    function tumblingAfterAnimal_(par){
        var obj=par[0];
        var a=par[1];
        var o = spriteManager_.addSpine(obj.x, obj.y, "tumble",null,null,1);
        animSeq=animSeq-1;

        displayManager_.getGroup("scatter").add_Child(o);
        o.play("tumble_04", false,endTumblingAfterAnimal_,[o,a,obj],100);

        obj.visible=false;

    }

    function endTumblingAfterAnimal_(par){
        dispose(par[0]);
        removeTile_(par[1])
        dispose(par[2]);
        animSeq=animSeq-1;
    }

    function animateAnimalConvS_(spin,a,b){
        //a array of symbols to animate
        //b array of new symbols
        for (var all =0;all<a.length;all++) {
            if (!spin) {
                delayedAnimation_(spinManager_.getReels()[0].getSymbolH(a[all] + 1),a[all]);
                animSeq++;
            }
        }
    }
    var animSeq=0
    function animateConvS_(spin,a,b){
        animSeq=0
        console.log("------------------------------anim1")
        //a array of symbols to animate
        //b array of new symbols
        for (var all =0;all<a.length;all++) {
            if (!spin) {
                animSeq++;
                delayedAnimation_(spinManager_.getReels()[0].getSymbolH(a[all] + 1),a[all]);
            }
            conveyorSafes_.push(spinManager_.getReels()[0].setIconH(conveyorSafes_.length + 1, b[all]));
        }
        conveyourEvent_.clearEvt();
        conveyourEvent_.addEvent(moveConveyor_, (spin)?100:2000, [spin,a]);
        conveyourEvent_.triggerEvt();
    }

    function delayedAnimation_(smb,a){
        var add=false;
        add=true;
        var ic=smb.smbNum;
        var animal=false;
        smb.anim = spriteManager_.addSpine(smb.x, smb.y, "anim" + ic,null,null,1);
        smb.anim.smbNum=ic;
        console.log("------------------------------anim2")
        if (ic>12) {
            addMusicLayer_(ic);
            animal=true;
            soundManager_.playSound("smbWin_"+ic);
            //smb.anim.y=smb.anim.y+(315-157)/2
            smb.anim.play("expanding",false,endTopAnimation_,[smb,a],100);
        }else{
            smb.anim.play("win_04",false,endTopAnimation_,[smb,a],100);
        }

        displayManager_.getGroup("scatter").add_Child(smb.anim);
        smb.visible=false;
        smb.anim.alpha=1;
    }

    function endTopAnimation_(par){
        var smb=par[0];
        var a=par[1];

        if(smb.anim.smbNum<13) {
            smb.anim.visible=false;
            dispose(smb.anim);
            smb.anim = spriteManager_.addSpine(smb.anim.x, smb.anim.y, "tumble",null,null,1);
            displayManager_.getGroup("scatter").add_Child(smb.anim);
            smb.anim.play("tumble_04", false,endActivate1_,[a,smb.anim],100);
        }else{
            smb.anim.play("win", false);
            var obj = spriteManager_.addSpine(smb.anim.x, smb.anim.y +(315-157)/2, "activate_"+smb.anim.smbNum,null,null,1);
            displayManager_.getGroup("scatter").add_Child(obj);
            obj.play("activate_02", 2, endActivate_,obj,100);
            soundManager_.playSound("active");
        }
    }

    function endActivate1_ (par){
        removeTile_(par[0]);
        dispose(par[1]);
    }

    function endActivate_ (obj){
        animSeq=animSeq-1;
        dispose(obj);
    }

    function dispose (obj){
        displayManager_.getGroup("scatter").removeChild(obj);
    }

    function removeTile_(a){
        animSeq=animSeq-1;
        conveyorSafes_[a].displayed=false
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
     }


    function moveConveyor_(par){
        var spin=par[0];
        var smbExp=par[1];

        if (animSeq<=0) {
            var canMove = 0;
            setTimeout(soundManager_.playSound ,700,"horSpin");

            //find last object
            var last=0;
            for (var a = 0; a < conveyorSafes_.length; a++) {
                if (conveyorSafes_[a].displayed==false && !spin) {
                    canMove++;
                }
                if (conveyorSafes_[a].displayed) {
                    if (canMove > 0) {
                        last=a;
                    } else if (conveyorSafes_[a].displayed && spin) {
                        last=a;
                    }
                }
            }
            canMove = 0;

            for (var a = 0; a < conveyorSafes_.length; a++) {
                if (conveyorSafes_[a].displayed==false && !spin) {
                    canMove++;
                }
                if (conveyorSafes_[a].displayed) {
                    if (canMove > 0) {
                        TweenMax.to(conveyorSafes_[a], .5, {
                            delay: .05 * (Number(a)),
                            x: conveyorSafes_[a].x - (189 * canMove),
                            ease: Power1.easeInOut,onComplete: callReorderConveyor_,
                            onCompleteParams: [a,last,smbExp]
                        });

                        TweenMax.to(conveyorSafes_[a].scale, .2, {
                            delay: .07 * (Number(a)),
                            x: 1.2,
                            y: 1.2,
                            onComplete: backScale_,
                            onCompleteParams: [a]
                        });

                    } else if (conveyorSafes_[a].displayed && spin) {
                        TweenMax.to(conveyorSafes_[a], (compulsiveFlag_) ? .70 : .75, {
                            x: conveyorSafes_[a].x - (189 * 4),
                            ease: Power1.easeInOut,onComplete: callReorderConveyor_,
                            onCompleteParams: [a,last,smbExp]
                        });
                        TweenMax.to(conveyorSafes_[a].scale, .2, {
                            delay: .07 * (Number(a)),
                            x: 1.2,
                            y: 1.2,
                            onComplete: backScale_,
                            onCompleteParams: [a]
                        });

                    }
                }
            }


        }else{
            conveyourEvent_.clearEvt();
            conveyourEvent_.addEvent(moveConveyor_, 1000, [spin,smbExp]);
            conveyourEvent_.triggerEvt();
        }
    }

    function backScale_(a){
        TweenMax.to(conveyorSafes_[a].scale, .1, {x:1,y:1});
    }

    function callReorderConveyor_(c,last,aa){
        if (c<last)return;
        conveyourEvent_.clearEvt();
        conveyourEvent_.addEvent(reorderConveyor_, 500, aa);
        conveyourEvent_.triggerEvt();
    }

    function reorderConveyor_(aa){

        for (var all =aa.length-1;all>=0;all--){
            conveyorSafes_.splice(aa[all],1);
        }
        var smbNum=[];
        // console.log("reordered")
        for (var a =0;a<=3;a++){
            if (conveyorSafes_[a].displayed) {
                smbNum[a] = conveyorSafes_[a].smbNum;
            }
        }
        safes[0]=spinManager_.getReels()[0].setIconH(1,smbNum[0]);
        safes[1]=spinManager_.getReels()[0].setIconH(2,smbNum[1]);
        safes[2]=spinManager_.getReels()[0].setIconH(3,smbNum[2]);
        safes[3]=spinManager_.getReels()[0].setIconH(4,smbNum[3]);


        for (var a =5;a<=12;a++){
            removeAsset_(spinManager_.getReels()[0].getSymbolH(a));
            safes[a]=null;
            if (conveyorSafes_[a]!=undefined){
                conveyorSafes_[a].displayed=false
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
            //displayManager_.getGroup("frame").visible = true;
            displayManager_.getGroup("logo").visible = true;
            displayManager_.getGroup("winWays").visible = true;
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
            //play clover bg
            lineManager_.resumeTumbling(communicationManager_.getResumeStatus(),false);
            messageBox_.showMessage("game", "A free tumble has been interrupted", "Press Spin to continue", startTumble_);
            bResume_=true;
            safes[0]=spinManager_.getReels()[0].setIconH(1,communicationManager_.getResumeStatus().status.horizontalReel[0][0].smbID,0);
            safes[1]=spinManager_.getReels()[0].setIconH(2,communicationManager_.getResumeStatus().status.horizontalReel[0][1].smbID,0);
            safes[2]=spinManager_.getReels()[0].setIconH(3,communicationManager_.getResumeStatus().status.horizontalReel[0][2].smbID,0);
            safes[3]=spinManager_.getReels()[0].setIconH(4,communicationManager_.getResumeStatus().status.horizontalReel[0][3].smbID,0);
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
            safes[0]=spinManager_.getReels()[0].setIconH(1,communicationManager_.getResumeStatus().status.horizontalReel[0][0].smbID,0);
            safes[1]=spinManager_.getReels()[0].setIconH(2,communicationManager_.getResumeStatus().status.horizontalReel[0][1].smbID,0);
            safes[2]=spinManager_.getReels()[0].setIconH(3,communicationManager_.getResumeStatus().status.horizontalReel[0][2].smbID,0);
            safes[3]=spinManager_.getReels()[0].setIconH(4,communicationManager_.getResumeStatus().status.horizontalReel[0][3].smbID,0);

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
            safes[0]=spinManager_.getReels()[0].setIconH(1,communicationManager_.getResumeStatus().status.horizontalReel[0][0].smbID,0);
            safes[1]=spinManager_.getReels()[0].setIconH(2,communicationManager_.getResumeStatus().status.horizontalReel[0][1].smbID,0);
            safes[2]=spinManager_.getReels()[0].setIconH(3,communicationManager_.getResumeStatus().status.horizontalReel[0][2].smbID,0);
            safes[3]=spinManager_.getReels()[0].setIconH(4,communicationManager_.getResumeStatus().status.horizontalReel[0][3].smbID,0);
        }else{
            safes[0]=spinManager_.getReels()[0].setIconH(1,communicationManager_.getResumeStatus().status.horizontalReel[0][0].smbID,0);
            safes[1]=spinManager_.getReels()[0].setIconH(2,communicationManager_.getResumeStatus().status.horizontalReel[0][1].smbID,0);
            safes[2]=spinManager_.getReels()[0].setIconH(3,communicationManager_.getResumeStatus().status.horizontalReel[0][2].smbID,0);
            safes[3]=spinManager_.getReels()[0].setIconH(4,communicationManager_.getResumeStatus().status.horizontalReel[0][3].smbID,0);
            buttonManager_.applyRestore();
            buttonManager_.applyState("NH");
            freeRoundsManager_.frChecker();

        }

        onGame_=true;
        framework.showFramework();
        //displayManager_.getGroup("buttonFg").visible=true;
        if (framework.isTouch())setPortrait_((getOrientation()=="portrait")?true:false);
        //populate horzz reel
        conveyorSafes_=[safes[0],safes[1],safes[2],safes[3]];
    }

    function startTest(){
        displayManager_.getGroup("lockReels").visible = true;
    }

    function fsHideTotPanel_(){

    }

    function fsLogoOut_(){
        displayManager_.getGroup("fog").visible = true;
        displayManager_.getGroup("lockReels").visible=true;
        displayManager_.getGroup("buyFeature").visible=false;
            //setPortrait_(getOrientation()=="portrait")
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
        displayManager_.getText("lineWin").y=displayManager.groups.centralLineWin.texts.lineWin.yFs;
        changeAlpha_(displayManager_.getGroup("bgFS"),1);
    }

    function fadeOutFs_(){
        displayManager_.getGroup("freeSpins").visible=false;
        displayManager_.getGroup("fog").visible = false;
        displayManager_.getGroup("lockReels").visible=false;
        if (buyFeatureEnabled_())displayManager_.getGroup("buyFeature").visible=true;

        changeAlpha_(displayManager_.getGroup("bgFS"),0);
       // changeAlpha_(displayManager_.getGroup("sideCharacter"),1);
       //  if (!framework.isTouch()) {
       //      displayManager_.getGroup("lights1").visible = true;
       //      displayManager_.getGroup("lights2").visible = true;
       //      displayManager_.getGroup("lazers1").visible = false;
       //      displayManager_.getGroup("lazers2").visible = false;
       //      displayManager_.getGroup("lazers3").visible = false;
       //      displayManager_.getGroup("lazers4").visible = false;
       //  }
    }

    function moveLockedReels_(resume){
        //set and unset the lock animation
        displayManager_.getGroup("lockReels").visible=true;
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
//            TweenMax.to(document.getElementById("gameContainer"),.3,{scaleX:1,scaleY:1,ease:Sine.easeOut});
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
//        TweenMax.to(document.getElementById("gameContainer"),.3,{scaleX:1,scaleY:1,ease:Sine.easeOut});

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
            if (spinManager_.getSpinResp().state!=undefined && spinManager_.getSpinResp().state.status!=undefined && spinManager_.getSpinResp().state.status =="FREESPINS_TRIGGER") {
                eventManager_.addEvent(fakeEvent_,1500);
            }
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

                clearTimeout(quiteSpinMusic);
                quiteSpinMusic = setTimeout(stopSpinMusic_, 4000);
                freeRoundsManager_.updateFreeRoundsTot();
                if(playTrigger_)eventManager_.addEvent(playTriggeredSmb_,500);
                if (spinManager_.getSpinResp().state!=undefined && spinManager_.getSpinResp().state.status!=undefined && spinManager_.getSpinResp().state.status =="FREESPINS_TRIGGER") {
                    eventManager_.addEvent(fakeEvent_,1500);
                }
                eventManager_.addEvent(fsEval_, (freeSpinsManager_.getIsInFs()==true && freeSpinsManager_.getFsNumber() ==0)?2000:(freeSpinsManager_.getIsInFs()==true && spinManager_.getSpinResp().freeSpin.object.wonAdditionalEndLevel>0)?2000: 0);
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
        displayManager_.getText("lineWin").y=displayManager.groups.centralLineWin.texts.lineWin.y;
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
                if(loginVars.getRegParams().jurisdiction!="de"){ //this was causing the anticipation on the reels to play much earlier than the scatters land on long 5 sec spin for de
                    slowDownReel[i]=true;
                    reelSound[i]=true;
                    delayRepeater[i]=3*i;
                    setTimeout(startAnticipation,index*700,i);
                    index++;
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

    function centerShit_(){
        //game_.stage.x=game_.stage.x-(stageW_- game_.stage.width)/2;
        //game_.stage.y=game_.stage.y-(stageH_- game_.stage.height)/2;
        stageW_= game_.stage.width;
        stageH_=game_.stage.height;
        var oFfset=ReelConfig.reel.reelHYOffset;
        setMask_(displayManager_.getGroup("reels"),355,182+oFfset,1180,628);
        setMask_(displayManager_.getGroup("hReel"),575,oFfset,756,175);
    }

    function startAnticipation(i){
        if(stopped_ || compulsiveFlag_)return;
        //just for the anticipation
//        if(framework.isTouch()==true){
//            TweenMax.to(document.getElementById("gameContainer"),.8,{delay:.5,scaleX:1.1,scaleY:1.1,transformOrigin:"25% 25%",ease:Back.easeOut});
//        }else{
//            TweenMax.to(document.getElementById("gameContainer"),.8,{delay:.5,scaleX:1.1,scaleY:1.1,transformOrigin:"50% 50%",ease:Back.easeOut});
//        }

        var smb = spriteManager_.addSpine(ReelConfig.reel.deltaX_0 + ((ReelConfig.reel.deltaX) * i) + ReelConfig.reel.deltaX/2, ReelConfig.reel.deltaY_0+37, "anticipation",null,null,1);
        smb.setAnchor(0.5,0)
        displayManager_.getGroup("reelFg").add_Child(smb);
        smb.play("anticipation_reel", true);

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
                    s.reel=i;
                    s.scatter = false;
                    s.mult=spinManager_.getSpinReelResp().reel[i].smb[a].mult;
                    spinManager_.addTriggerIcon(s);
                    playTrigger_=true;
                }

                if (spinManager_.getSpinReelResp().reel[i].smb[a].smb==12 && spinManager_.getSpinReelResp().reel[i].smb[a].animate){
                    spinManager_.getSpinReelResp().reel[i].smb[a].animate=false;
                    soundManager_.playSound("scatterLand");

                    var smb = spriteManager_.addSpine(s.x, s.y, "anim12",null,null,1);
                    s.visible=false;
                    smb.s=s;
                    s.trigger=true;
                    s.reel=i;
                    displayManager_.getGroup("scatter").add_Child(smb);
                    smb.play("win_0" + spinManager_.getSpinReelResp().reel[i].smb.length, false,endBack_,smb);
                    scatterCount_++;
                    playTrigger_=true;

                    if (spinManager_.getSpinResp().state!=undefined && spinManager_.getSpinResp().state.status!=undefined && spinManager_.getSpinResp().state.status =="FREESPINS_TRIGGER") {
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

        if (scatterAnticipation_[i]!=undefined && scatterAnticipation_[i]!=null && compulsiveFlag_==false  ){
            scatterAnticipation_[i].visible=false;
            displayManager_.getGroup("reelFg").removeChild(scatterAnticipation_[i]);
            scatterAnticipation_[i]=null;
            soundManager_.playSound("drumFinal");
        }

        //fix for nonsense overlapping symbols
        for (var j = 0; j < ReelConfig.icons[i]; j++) {
            if (j<15){
                displayManager_.getGroup("reels").children[i].children[j].visible=false;
            }
        }

        if (scatterCount_>0 && i<5 && scatterPlayed_==false && compulsiveFlag_==false){
            scatterPlayed_=true;
            soundManager_.playSound("drumLoop",5);
        }

        if (i==5 && scatterCount_>0 && compulsiveFlag_==false){
            soundManager_.stopSound("drumLoop");
           // TweenMax.to(game_.stage.scale,.5,{x:1,y:1,onUpdate:centerShit_ });
//            TweenMax.to(document.getElementById("gameContainer"),.3,{scaleX:1,scaleY:1,ease:Sine.easeOut});
            if (scatterCount_>=3){
                soundManager_.playSound("iconsExplode");
            }else {
                soundManager_.playSound("drumFinal");
            }
        }

    }

    function tumbleEnd_(i, ind, s){
        if (s.smbNum==12) {
            soundManager_.playSound("scatterLand");//wild x2 landing sound

            var smb = spriteManager_.addSpine(s.x, s.y, "anim12", null, null, 1);
            s.visible = false;
            smb.s = s;
            s.trigger = true;
            s.reel = i;
            displayManager_.getGroup("scatter").add_Child(smb);
            smb.play("win_0" + spinManager_.getSpinReelResp().reel[i].smb.length, false, endBack_, smb);
        }
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
        var wonFs_ = (json.freeSpin.object != undefined && json.freeSpin.object.totalFSAwareded != undefined) ? json.freeSpin.object.totalFSAwareded : 0;
        freeSpinsManager_.fsWon(buyinNum_,buyinNum_) ;
        multiplierFS_=  Number(json.freeSpin!=undefined && json.freeSpin.object!=undefined && json.freeSpin.object.preMult!=undefined)?json.freeSpin.object.preMult:1;
        fs = freeSpinsManager_.getFreeSpinsEval();
        eventManager_.clearEvt();
        freeSpinsManager_.endAnimHandle(eventManager_);
        eventManager_.triggerEvt();
        startLightAnimal_(1,1);
        //startLight_();

        //setTimeout(startExplosion_,3800);
        setTimeout(setSpin_,3000,[json]);

    }

    function startExplosion_(num){
        return
        //sideCharacter_.animations.play("anim", 24,false, false);//todo parametric loop
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
