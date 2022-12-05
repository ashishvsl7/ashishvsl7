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

    var check=true;

    function initClass_(){
        if (ReelConfig.preview==true) {
            mainGroup_ = displayManager_.getGroup("preview");
            mainTextGroup_ = displayManager_.getTexts();

            check = new PIXI_checkbox(mainGroup_, displayManager.groups.preview.checkbox.x, displayManager.groups.preview.checkbox.y,{
                text: Translate.do(displayManager.groups.preview.checkbox.text),
                style: {fill: displayManager.groups.preview.checkbox.color,
                    fontSize: displayManager.groups.preview.checkbox.fontSize,
                    fontFamily: displayManager.groups.preview.checkbox.font,
                    }
            }, displayManager.groups.preview.checkbox.name,null,null,displayManager.groups.preview.checkbox.scale);

            if (displayManager.groups.preview.buttons != null) {
                for (var a in displayManager.groups.preview.buttons) {
                    var c = addGroup();
                    var buttonE = new PixiButton(game_,  displayManager.groups.preview.buttons[a].x,  displayManager.groups.preview.buttons[a].y,displayManager.groups.preview.buttons[a].name,me[ displayManager.groups.preview.buttons[a].evt],0,1,2);
                    mainButtonGroup_[a] = buttonE;
                    buttonE.setAnchor(0.5, 0.5);
                    c.add_Child(buttonE);
                    mainGroup_.add_Child(c);
                    if (displayManager.groups.preview.buttons[a].texts != null) {
                        for (var t in displayManager.groups.preview.buttons[a].texts) {
                            logger(t + " disp preview font " +displayManager.groups.preview.buttons[a].texts[t].font );
                            var txt = spriteManager_.addText( displayManager.groups.preview.buttons[a].x+displayManager.groups.preview.buttons[a].texts[t].x,  displayManager.groups.preview.buttons[a].y+displayManager.groups.preview.buttons[a].texts[t].y, Translate.do(displayManager.groups.preview.buttons[a].texts[t].text),  0,.5,{
                                fontFamily: displayManager.groups.preview.buttons[a].texts[t].font,
                                fontSize: displayManager.groups.preview.buttons[a].texts[t].fontSize,
                                fill: displayManager.groups.preview.buttons[a].texts[t].fill,
                                boundsAlignH: displayManager.groups.preview.buttons[a].texts[t].align
                            });
                            txt.anchor.set((displayManager.groups.preview.buttons[a].texts[t].anchorX != undefined) ? displayManager.groups.preview.buttons[a].texts[t].anchorX : 0, (displayManager.groups.preview.buttons[a].texts[t].anchorY != undefined) ? displayManager.groups.preview.buttons[a].texts[t].anchorY : 0);
                            c.add_Child(txt);
                            mainTextGroup_[t] = txt;
                        }
                    }
                }
            }
           
            if (ReelConfig.newUI && framework.isTouch()) {
                window.newUI.onPreview.dispatch(true) //Dispatch onPreview
            }

        }else{
            closed_=true;
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
        if (framework.getSettings().getHelpOnLoad() && mainGroup_!=undefined && !((gameParams.gameID == 7002 || gameParams.gameID == 7004 )&& loginVars.getRegParams().jurisdiction =="es")){ //can't load GOF and Pain into on Spain, missing translations
            var ua = window.navigator.userAgent;

            framework.hideFramework();

            $("#gameFramework").addClass("hidden");

            if (ReelConfig.newUI!=null && framework.isTouch()) {
               // mainGroup_.visible=false;
                if (getOrientation()=="portrait") {
                    gameClass_.setPortrait(true);
                    mainGroup_.visible=true;
                } else {
            		mainGroup_.visible=true;
                    mainGroup_.x = 0;
                }
            }else{
                mainGroup_.visible=true;
            }

            closed_=false;

            var forceIe=false;//used duting test to force IE


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

    function close_(){
        closed_=true;
        clearTimeout(iTout);
        clearTimeout(slideTimer_);
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
        var showHelp = !check.state;
        framework.getSettings().setHelpOnLoad(showHelp);
        if (showHelp==false){
            var s = framework.getMenu().getIntroSwitch();
            s.doSwitch(false);
        }
        mainGroup_.visible=false;
        continueLoading_();
    }

    function continueLoading_(){
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

