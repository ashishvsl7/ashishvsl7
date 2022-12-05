/**
 * KiS Framework, Created by Fabry on 14/03/2016.
 */
function PreviewManager(gameRef,gameClass) {
    var game_ = gameRef;
    var gameClass_ = gameClass;
    var mainGroup_;
    var mainTextGroup_;
    var mainButtonGroup_=[];
    var check;
    var iTout=0;
    var gameGroups_ = [];
    var slides_;
    var gameText_ = [];
    var slideCurrentPage_=0;
    var slidePages_=-1;
    var slideTimer_=0;
    var button_;
    var pX_;
    var pY_;
    var dragStart_=false;
    var distance_=0;
    var closed_=false;

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

    function initClass_(){
        if (ReelConfig.preview==true) {
            mainGroup_ = displayManager_.getGroup("preview");
            mainTextGroup_ = displayManager_.getTexts();

            check = new PHASER_checkbox(mainGroup_, displayManager.groups.preview.checkbox.x, displayManager.groups.preview.checkbox.y,{
                text: Translate.do(displayManager.groups.preview.checkbox.text),
                style: {fill: displayManager.groups.preview.checkbox.color,font: "20px Arial"}
            }, displayManager.groups.preview.checkbox.name);
            if (displayManager.groups.preview.buttons != null) {
                for (var a in displayManager.groups.preview.buttons) {
                    var buttonE = new Phaser.Button(game_, displayManager.groups.preview.buttons[a].x, displayManager.groups.preview.buttons[a].y, displayManager.groups.preview.buttons[a].name, me[displayManager.groups.preview.buttons[a].evt], this,1,2,0);
                    mainButtonGroup_[a] = buttonE;
                    buttonE.anchor.set(0.5, 0.5);
                    mainGroup_.add(buttonE);
                    if (displayManager.groups.preview.buttons[a].texts != null) {
                        for (var t in displayManager.groups.preview.buttons[a].texts) {
                            logger(t + " disp preview font " +displayManager.groups.preview.buttons[a].texts[t].font );
                            var txt = new Phaser.Text(game_, displayManager.groups.preview.buttons[a].texts[t].x, displayManager.groups.preview.buttons[a].texts[t].y, '', {
                                font: displayManager.groups.preview.buttons[a].texts[t].font,
                                fill: displayManager.groups.preview.buttons[a].texts[t].fill,
                                boundsAlignH: displayManager.groups.preview.buttons[a].texts[t].align
                            });
                            txt.anchor.set((displayManager.groups.preview.buttons[a].texts[t].anchorX != undefined) ? displayManager.groups.preview.buttons[a].texts[t].anchorX : 0, (displayManager.groups.preview.buttons[a].texts[t].anchorY != undefined) ? displayManager.groups.preview.buttons[a].texts[t].anchorY : 0);
                            if (displayManager.groups.preview.buttons[a].texts[t].text != undefined)txt.setText(Translate.do(displayManager.groups.preview.buttons[a].texts[t].text));
                            buttonE.addChild(txt);
                            mainTextGroup_[t] = txt;
                        }
                    }
                }
            }



            //If "NEW_UI"
            if (ReelConfig.newUI && framework.isTouch()) {
                window.newUI.onPreview.dispatch(true) //Dispatch onPreview
            }

            if ( gameParams.gameID != 7028){
                //get rid of 96.7 rtp on intro page
                if(mainGroup_.rtp!=undefined && mainGroup_.rtp.children[0]!=undefined )mainGroup_.rtp.children[0].visible=false;
            }



        }else{
            closed_=true;
        }
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

    function slidesChange_(){
        if (slideCurrentPage_>=0)gameGroups_[slideCurrentPage_].visible=false;
        if (slideCurrentPage_>=0)gameGroups_[slideCurrentPage_].light.visible=false;
        slideCurrentPage_++;
        if (slideCurrentPage_>slidePages_)slideCurrentPage_=0;
        gameGroups_[slideCurrentPage_].visible=true;
        gameGroups_[slideCurrentPage_].light.visible=true;

    }


    function doCloseP_(){
        console.log("click received ")
        clearTimeout(iTout);
        close_();
    }

    function onDown(me){
        clearTimeout(slideTimer_);
        gameGroups_[slideCurrentPage_].visible=false;
        gameGroups_[slideCurrentPage_].light.visible=false;
        slideCurrentPage_=me.num-1;
        slidesChange_();
        slideTimer_=setInterval(slidesChange_,displayManager.groups.preview.slide.time);

    }

    function enabled_(){
        console.log("preview enabled "+ framework.getSettings().getHelpOnLoad() + " " + mainGroup_ + " "+ ((gameParams.gameOriginalID == 7002 || gameParams.gameOriginalID == 7004 )&& loginVars.getRegParams().jurisdiction =="es"))
        if (framework.getSettings().getHelpOnLoad() && mainGroup_!=undefined && !((gameParams.gameOriginalID == 7002 || gameParams.gameOriginalID == 7004 )&& loginVars.getRegParams().jurisdiction =="es")){ //can't load GOF and Pain into on Spain, missing translations
            var ua = window.navigator.userAgent;
            if ((ua.indexOf('iPhone')>=0) &&  gameParams.gameOriginalID< 7016){//it will not show the info page on smaller Iphones (continue button collide white safe area on the bottom when on landscape mode, making impossible to click it)
                if ($(window).height()<375)return false;
            }
            framework.hideFramework();
            $("#gameFramework").addClass("hidden");
            if (displayManager.groups.preview.slide!=null){
                slides_=[];
                var slidesGroup=game_.add.group();
                mainGroup_.addChild(slidesGroup);
                slidesGroup.x=displayManager.groups.preview.slide.x;
                slidesGroup.y=displayManager.groups.preview.slide.y;

                for (var a in displayManager.groups.preview.slide.slides) {
                    slidePages_++;
                    gameGroups_[a] = game_.add.group();
                    slidesGroup.addChild(gameGroups_[a]);

                    gameGroups_[a].visible = false;
                    gameGroups_[a].x=displayManager.groups.preview.slide.slides[a].x;
                    gameGroups_[a].y=displayManager.groups.preview.slide.slides[a].y;

                    gameGroups_[a].button = game_.add.graphics(0, 0);
                    gameGroups_[a].button.num=a;
                    gameGroups_[a].button.beginFill(0xCCCCCC, 1);
                    gameGroups_[a].button.drawCircle((25*slidePages_)+displayManager.groups.preview.slide.buttonBaseX, displayManager.groups.preview.slide.buttonBaseY, 15);
                    slidesGroup.addChild(gameGroups_[a].button);
                    gameGroups_[a].button.inputEnabled = true;
                    gameGroups_[a].button.events.onInputDown.add(onDown, this);

                    //var buttonE = new Phaser.Button(game_, (25*slidePages_)+182, 445,"", click_);
                    //buttonE.num=a;

                    gameGroups_[a].light= game_.add.graphics(0, 0);
                    gameGroups_[a].light.beginFill(0xFFFFFF, .9);
                    gameGroups_[a].light.drawCircle((25*slidePages_)+displayManager.groups.preview.slide.buttonBaseX, displayManager.groups.preview.slide.buttonBaseY, 15);
                    gameGroups_[a].light.visible=false;
                    slidesGroup.addChild(gameGroups_[a].light);

                    if (displayManager.groups.preview.slide.slides[a].graphAsset != null) {
                        for (var ga in displayManager.groups.preview.slide.slides[a].graphAsset) {
                            gameGroups_[a][ga] = game_.add.group();
                            if (ga != "group") {//group is just a placeholder
                                var sp = new Phaser.Sprite(game_, displayManager.groups.preview.slide.slides[a].graphAsset[ga].x, displayManager.groups.preview.slide.slides[a].graphAsset[ga].y, displayManager.groups.preview.slide.slides[a].graphAsset[ga].name);
                                if (displayManager.groups.preview.slide.slides[a].graphAsset[ga].width != null) sp.width = displayManager.groups.preview.slide.slides[a].graphAsset[ga].width;
                                if (displayManager.groups.preview.slide.slides[a].graphAsset[ga].height != null) sp.height = displayManager.groups.preview.slide.slides[a].graphAsset[ga].height;
                                if (displayManager.groups.preview.slide.slides[a].graphAsset[ga].angle != null) sp.angle = displayManager.groups.preview.slide.slides[a].graphAsset[ga].angle;
                                if (displayManager.groups.preview.slide.slides[a].graphAsset[ga].scaleX != null) sp.scale.x = displayManager.groups.preview.slide.slides[a].graphAsset[ga].scaleX;
                                if (displayManager.groups.preview.slide.slides[a].graphAsset[ga].scaleY != null) sp.scale.y = displayManager.groups.preview.slide.slides[a].graphAsset[ga].scaleY;
                                sp.anchor.set((displayManager.groups.preview.slide.slides[a].graphAsset[ga].anchorX != undefined) ? displayManager.groups.preview.slide.slides[a].graphAsset[ga].anchorX : 0, (displayManager.groups.preview.slide.slides[a].graphAsset[ga].anchorY != undefined) ? displayManager.groups.preview.slide.slides[a].graphAsset[ga].anchorY : 0);
                                gameGroups_[a].addChild(gameGroups_[a][ga]);
                                gameGroups_[a][ga].add(sp);
                                gameGroups_[a].visible = (displayManager.groups.preview.slide.slides[a].visible != null) ? displayManager.groups.preview.slide.slides[a].visible : true;
                                if (displayManager.groups.preview.slide.slides[a].graphAsset[ga].visible != null) sp.visible = displayManager.groups.preview.slide.slides[a].graphAsset[ga].visible;
                                if (displayManager.groups.preview.slide.slides[a].graphAsset[ga].alpha != null) sp.alpha = displayManager.groups.preview.slide.slides[a].graphAsset[ga].alpha;
                            } else {
                                gameGroups_[a].addChild(gameGroups_[a][ga]);
                            }
                        }
                    }

                    if (displayManager.groups.preview.slide.slides[a].texts != null) {
                        for (var t in displayManager.groups.preview.slide.slides[a].texts) {
                            var txt = null;
                            if (displayManager.groups.preview.slide.slides[a].texts[t].font != null) {
                                logger(t + " disp manager font " + displayManager.groups.preview.slide.slides[a].texts[t].font);
                                txt = new Phaser.Text(game_, displayManager.groups.preview.slide.slides[a].texts[t].x, displayManager.groups.preview.slide.slides[a].texts[t].y, '', {
                                    font: displayManager.groups.preview.slide.slides[a].texts[t].font,
                                    fill: displayManager.groups.preview.slide.slides[a].texts[t].fill,
                                    align: displayManager.groups.preview.slide.slides[a].texts[t].align,
                                    fontWeight: (displayManager.groups.preview.slide.slides[a].texts[t].weight == null) ? 'normal' : displayManager.groups.preview.slide.slides[a].texts[t].weight,
                                    fontVariant: (displayManager.groups.preview.slide.slides[a].texts[t].variant == null) ? 'normal' : displayManager.groups.preview.slide.slides[a].texts[t].variant,
                                    backgroundColor: displayManager.groups.preview.slide.slides[a].texts[t].backgroundColor
                                });
                            } else if (displayManager.groups.preview.slide.slides[a].texts[t].bmpFont != null) {
                                logger(t + " disp manager BMP font " + displayManager.groups.preview.slide.slides[a].texts[t].bmpFont);
                                txt = new Phaser.BitmapText(game_, displayManager.groups.preview.slide.slides[a].texts[t].x, displayManager.groups.preview.slide.slides[a].texts[t].y, displayManager.groups.preview.slide.slides[a].texts[t].bmpFont, '', displayManager.groups.preview.slide.slides[a].texts[t].size, displayManager.groups.preview.slide.slides[a].texts[t].align);
                            }
                            if (txt != null) {
                                if (window.devicePixelRatio != null) txt.resolution = window.devicePixelRatio;

                                txt.anchor.set((displayManager.groups.preview.slide.slides[a].texts[t].anchorX != undefined) ? displayManager.groups.preview.slide.slides[a].texts[t].anchorX : 0, (displayManager.groups.preview.slide.slides[a].texts[t].anchorY != undefined) ? displayManager.groups.preview.slide.slides[a].texts[t].anchorY : 0);
                                if (displayManager.groups.preview.slide.slides[a].texts[t].text != undefined) txt.setText(Translate.do(displayManager.groups.preview.slide.slides[a].texts[t].text));

                                if (displayManager.groups.preview.slide.slides[a].texts[t]["shadow"] != undefined && displayManager.groups.preview.slide.slides[a].texts[t]["shadow"] == true) {
                                    var shadowDim = jQuery.isArray(displayManager.groups.preview.slide.slides[a].texts[t]["shadowDim"]) ? displayManager.groups.preview.slide.slides[a].texts[t]["shadowDim"] : [displayManager.groups.preview.slide.slides[a].texts[t]["shadowDim"], displayManager.groups.preview.slide.slides[a].texts[t]["shadowDim"]];
                                    txt.setShadow(shadowDim[0], shadowDim[1], displayManager.groups.preview.slide.slides[a].texts[t]["shadow"]["shadowColor"], displayManager.groups.preview.slide.slides[a].texts[t]["shadowBlur"]);
                                }

                                if (displayManager.groups.preview.slide.slides[a].texts[t]["stroke"] != undefined) {
                                    txt.stroke = displayManager.groups.preview.slide.slides[a].texts[t]["stroke"];
                                    txt.strokeThickness = displayManager.groups.preview.slide.slides[a].texts[t]["stroke_tick"];
                                }

                                var mod=Translate.langModifier(displayManager.groups.preview.slide.slides[a].texts[t].text);
                                if (mod!=null){
                                    if (mod.font!=null)txt.fontSize=mod.font;
                                    if (mod.x!=null)txt.x=txt.x +mod.x;
                                    if (mod.y!=null)txt.y=txt.y +mod.y;
                                }

                                gameGroups_[a].add(txt);
                                gameText_[t] = txt;
                            }
                        }
                    }

                    if (framework.isTouch()){
                        button_ = new Phaser.Button(game_, 0, 200);
                        button_.anchor.set(.5, .5);
                        button_.width = 1280;
                        button_.height = 420;
                        button_.inputEnabled = true;

                        button_.input.enableDrag();
                        button_.events.onDragStart.add(touchDown_);
                        button_.events.onDragStop.add(touchGo_)
                        button_.events.onDragUpdate.add(keepControl_);
                        button_.input.allowVerticallDrag = false;
                        slidesGroup.add(button_);
                    }

                }
                gameGroups_[0].light.visible=true;
                slideTimer_=setInterval(slidesChange_,displayManager.groups.preview.slide.time);

            }

            if (ReelConfig.newUI!=null && framework.isTouch()) {
                var ratio= (window.innerWidth/1200)* window.devicePixelRatio;
                if(Number(gameParams.gameOriginalID)>7023)mainGroup_.visible=true;//just a blank png coverign everything on last games
                if (getOrientation()=="portrait") {
                    gameClass_.setPortrait(true);
                } else {
                    mainGroup_.visible=true;
                    mainGroup_.x = 0;
                }
            }else{
                mainGroup_.visible=true;
            }

            closed_=false;
            /*
            if (displayManager.groups.preview.tweenShow!=null){
                for (var a in mainGroup_.children) {
                    if (mainGroup_.children[a].name!="group"){
                        mainGroup_.children[a].scale.x=.5;
                        mainGroup_.children[a].scale.y=.5;
                        TweenMax.to(mainGroup_.children[a].scale, .5, {x: 1.1, y: 1.1, ease: Bounce.easeOut, onComplete: previewBack_})
                    }else{
                        for (var b=0 ; b<mainGroup_.children[a].length;b++) {
                            mainGroup_.children[a].children[b].scale.x=.5;
                            mainGroup_.children[a].children[b].scale.y=.5;
                            TweenMax.to(mainGroup_.children[a].children[b].scale, .5, {x: 1.1, y: 1.1, ease: Bounce.easeOut, onComplete: previewBack_})
                        }
                    }
                }
            }

             */
            var forceIe=false;//used duting test to force IE

            try {
                if (displayManager.groups.preview.videoAsset != null && (ua.indexOf('iPhone') == -1 && (isIE_()==false) )) {    //not possible to play video on iPhone and a lot of bugs on IE/Edge
                    for (var ga in displayManager.groups.preview.videoAsset) {
                        displayManager_.getVideo(ga).mute = true;
                        displayManager_.getVideo(ga).loop = true;
                        displayManager_.getVideo(ga).play(true);
                    }
                }

                if (ua.indexOf('iPhone') != -1 || checkBrowser_()==false){  //not possible to play video on iPhone and a lot of bugs on IE/Edge

                    if(mainGroup_["promoVideo"]!=null)mainGroup_["promoVideo"].children[0].visible=false;
                    if (displayManager.groups.preview.graphAsset.ieFallBack1!=null)mainGroup_["ieFallBack1"].children[0].visible=true;
                    if (displayManager.groups.preview.graphAsset.ieFallBack2!=null)mainGroup_["ieFallBack2"].children[0].visible=true;
                }


            }catch(e){

            }

            var tOut=ReelConfig.previewTout;
            iTout=setTimeout(timer_,tOut);
            console.log("returning true: " + framework.getSettings().getHelpOnLoad());
        }
        else{
            closed_=true;
            console.log("returning false");
            return false;
        }
    }

    function previewBack_(){
        for (var a in mainGroup_.children) {
            if (mainGroup_.children[a].name!="group"){
                TweenMax.to(mainGroup_.children[a].scale, .4, {x: 1, y: 1})
            }else{
                for (var b=0 ; b<mainGroup_.children[a].length;b++) {
                    TweenMax.to(mainGroup_.children[a].children[b].scale, .4, {x: 1, y: 1})
                }
            }
        }
    }

    function keepControl_(dd){
        //if(dragStart_==false )return;
        distance_=this.game.input.activePointer.x-pX_;
    }

    function touchGo_(dd) {
        if (slideCurrentPage_>=0)gameGroups_[slideCurrentPage_].visible=false;
        if (slideCurrentPage_>=0)gameGroups_[slideCurrentPage_].light.visible=false;
        if (distance_<0){
            slideCurrentPage_=slideCurrentPage_+1;
        }else{
            slideCurrentPage_=slideCurrentPage_-1;
        }
        if (slideCurrentPage_>slidePages_)slideCurrentPage_=0;
        if (slideCurrentPage_<0)slideCurrentPage_=slidePages_;
        gameGroups_[slideCurrentPage_].visible=true;
        gameGroups_[slideCurrentPage_].light.visible=true;
        button_.x=0;
        button_.y=200;
    }

    function touchDown_(dd) {
        pX_= this.game.input.activePointer.x;
        pY_= this.game.input.activePointer.y;

    }

    function isIE_(){
        if (/MSIE 10/i.test(navigator.userAgent)) {
            // This is internet explorer 10
            return true;
        }

        if (/MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent)) {
            // This is internet explorer 9 or 11
            return true;
        }

        if (/Edge\/\d./i.test(navigator.userAgent)){
            // This is Microsoft Edge
            return true;
        }
        return false;
    }

    function close_(){
        closed_=true;
        clearTimeout(iTout);
        clearTimeout(slideTimer_);
        console.log(" close? " +messageBox_.getIsOnMessage());
        if (messageBox_.getIsOnMessage()==false) {
            TweenMax.to(mainGroup_, .3, {alpha: 0, onComplete: destroy_});
        }else{
            iTout=setTimeout(timer_,500);
        }
    }

    function timer_(){
        close_();
    }

    function destroy_(){
        console.log("destroy prev")
        var showHelp = !check.state;
        framework.getSettings().setHelpOnLoad(showHelp);
        if (showHelp==false){
            var s = framework.getMenu().getIntroSwitch();
            s.doSwitch(false);
        }
        mainGroup_.visible=false;
        mainGroup_.destroy();
        continueLoading_();
    }

    function continueLoading_(){
        console.log("continueloading call game init")
        framework.showFramework();
        gcmCalls_("PAID",0,true);
        gcmCalls_("BALANCE",balanceManager_.getBalance(),true);
        gameClass_.create();
        gameClass_.initGame();
        if (!framework.isTouch() && ReelConfig.newUI!=true){ //reduces the session bar width to avoid overlapping the buttons for old UI
            $(".gf-session-bar.gf-_0").css("width", "50%");
            $(".gf-session-bar.gf-_0").css("left", "50%");
            $(".gf-session-bar.gf-_0").css("transform", "translate(-50%,0)");
        }
        setTimeout(transpHack_, 1000);//to make the ap button transparent
    }

    var me={
        doCloseP:doCloseP_,
        enabled:enabled_,
        getClosed:function (){
            return closed_;
        }
    }
    initClass_();
    return me;
}

