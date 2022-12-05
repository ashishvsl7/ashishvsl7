/**
 * KiS Framework, Created by Tom on 14/07/2016.
 */
function AutoPlaySettings(autoPlayOptions) {

    var apState_ = 0;

    var autoPlayOptions_ = autoPlayOptions;

    var autoPlayCount = 0;
    var autoEnable_=true;
    var autoTout=100;

    function initClass_() {

        $("input[name='autoPlayWinLimit']").change(function() {
            autoPlayManager_.setSingleWinThreshold($(this).val());
        });

        $("input[name='autoPlayCashLimit']").change(function() {
            autoPlayManager_.setWinThreshold($(this).val());
        });

        $("input[name='autoPlayCashDownLimit']").change(function() {
            autoPlayManager_.setLoseThreshold($(this).val());
        });


        const BIRTHNUMBER_ALLOWED_CHARS_REGEXP = /[.0-9\/]+/;

        $("input[name='autoPlayWinLimit']").keypress(function(e) {
            if (!BIRTHNUMBER_ALLOWED_CHARS_REGEXP.test(e.key)) {
                e.preventDefault();
            }
        });
        $("input[name='autoPlayWinLimit']").keyup(function(e) {
            autoPlayManager_.setSingleWinThreshold($(this).val());
        });

        $("input[name='autoPlayCashLimit']").keypress(function(e) {
            if (!BIRTHNUMBER_ALLOWED_CHARS_REGEXP.test(e.key)) {
                e.preventDefault();
            }
        });
        $("input[name='autoPlayCashLimit']").keyup(function(e) {
            autoPlayManager_.setWinThreshold($(this).val());
        });

        $("input[name='autoPlayCashDownLimit']").keypress(function(e) {
            if (!BIRTHNUMBER_ALLOWED_CHARS_REGEXP.test(e.key)) {
                e.preventDefault();
            }
        });
        $("input[name='autoPlayCashDownLimit']").keyup(function(e) {
            autoPlayManager_.setLoseThreshold($(this).val());
        });
        
        $("#autoPlayCashDownLimitMobile").on("touchstart", function(e) {
            
            e.stopPropagation();
            e.preventDefault();
            
            //Show grid input
            gridInput.show(function(value) {
            
                $("#autoPlayCashDownLimitMobile").html(value); //When the value is confirmed, set input value
                autoPlayManager_.setLoseThreshold(Number(value)); //Update value in autoPlayManager
                
            });
            
        });

        $('#autoplayStopOnCashDownMobile').parent().on("touchstart", function(e) {
            autoPlayManager_.mobToggleStopOnLose();
        });
    }


    var setApState_ = function(state) {
        logger(state+ " "+buttonManager_.getCurrentState()+ " " +autoPlayManager_.getAutoPlayNum());
        apState_ = state;
        if((freeSpinsManager_.getIsInFs()==true || freeSpinsManager_.getFsWon()==true) && state!=0)return;
        if( ReelConfig.newUI || buttonManager_.getButton(frameworkSettings.buttons.autoButton.id)!=undefined) {
            if (state === 0 ) {  //open AP
                if (buttonManager_.getCurrentState()=="APNH" || buttonManager_.getCurrentState()=="SPIN" && gameClass_.isSpinning()==false){
                    buttonManager_.applyState("NH");
                }
                $("#holdText").show();
                //old ui
                if (!ReelConfig.newUI) {
                    buttonManager_.getButton(frameworkSettings.buttons.autoButton.id).setText("");
                }
                if (framework.isTouch()){
                    //If "NEW_UI" or game ID > x
                    if (ReelConfig.newUI) {
                        window.newUI.autospin().text = AUTOSPIN_VALUES.value()           //Set autoplay button text to starting amount
                    }
                    //old ui
                    else {
                        buttonManager_.getButton(frameworkSettings.buttons.autoButton.id).changeState("bg");
                    }
                    
                     if (autoPlayManager_.getAutoPlayNum()<=0){
                         buttonManager_.applyStateForce("NH");
                     }
                }else{
                    if (!ReelConfig.newUI) {
                        buttonManager_.getButton(frameworkSettings.buttons.autoButton.id).changeState("bg");
                    }else{
                        window.newUI.autospin().state = 'START';
                    }
                }
            } else if (state === 1  ) {//startAP
                if (!framework.isTouch()) {
                    if (buttonManager_.getCurrentState() == "APNH") {
                        logger("nh call3")
                        buttonManager_.applyState("NH");
                    } else if (buttonManager_.getCurrentState() == "NH") {
                        buttonManager_.applyState("NH");
                    }
                }
                $("#holdText").hide();
                //old ui
                if (!ReelConfig.newUI) {
                    buttonManager_.getButton(frameworkSettings.buttons.autoButton.id).setText("");
                    buttonManager_.getButton(frameworkSettings.buttons.autoButton.id).changeState("start");
                }
            } else if (state === 2 ) {   //stopAP
                $("#holdText").hide();
                $("#autoPlayMobileInput").fadeOut(500);
                //old ui
                if (!ReelConfig.newUI) {
                    buttonManager_.getButton(frameworkSettings.buttons.autoButton.id).changeState("stop");
                }
            }
        }
        //framework.isTouch() ? doMobileState_(state) : doDesktopSate_(state);

    }

    var doAutoPlay_ = function() {

        var tooltip;
        
        logger(apState_);
        //If "NEW_UI" or game ID > x
        if (ReelConfig.newUI && framework.isTouch()) {
           tooltip = window.newUI.autospin().interface.settings.cashDecreasesBy.tooltip 
        }
        
        if (autoEnable_==false)return;
        if((freeSpinsManager_.getIsInFs()==true || freeSpinsManager_.getFsWon()==true) && apState_!=2) return;
        autoEnable_=false;
        setTimeout(autoReset_,autoTout);
        if (apState_ === 0 ) {
            if (framework.isTouch()){
                autoPlayOptions_.showSelector();
            }else{
                autoPlayOptions_.toggleOpen();
                //If "NEW_UI" or game ID > x
                if (ReelConfig.newUI) {
                    window.newUI.autospin().state = 'SPIN'
                }
            }
            setApState_(1);
            soundManager_.playSound("click");
        } else if (apState_ === 1 && (gameClass_.isSpinning()==false || gotErrorInAp_==true )) {
            if (!$('#autoPlaySettings').hasClass("hidden")||framework.isTouch() ) {
                //If stop on lose is off/set to a value
                if (autoPlayManager_.validStopOnLose()) {
                    setApState_(2);
                    if (framework.isTouch()) {
                        autoPlayOptions_.hideSelector();
                        //If "NEW_UI" or game ID > x
                        if (ReelConfig.newUI) {
                            window.newUI.autospin().interface.show = false //Hide new UI autospin interface
                        }
                    } else {
                        autoPlayOptions_.toggleOpen();
                    }
                    soundManager_.playSound("spinClick");
                    framework.hideBetSettings();
                    autoPlayManager_.toggleAutoPlay();

                    $('.autoplayStopOnCashDownTooltip').removeClass('show');

                    //If "NEW_UI" or game ID > x
                    if (ReelConfig.newUI && framework.isTouch()) {
                        tooltip.classList.add('hidden') //Hide tooltip
                    }

                    else if (ReelConfig.newUI && !framework.isTouch()) {
                        window.newUI.autospin().state = 'STOP'
                    }

                }
                else {
                    $('.autoplayStopOnCashDownTooltip').addClass('show');
                    //If "NEW_UI" or game ID > x
                    if (ReelConfig.newUI && framework.isTouch()) {

                        //If tooltip hidden initially
                        if (tooltip.classList.contains('hidden')) {
                            tooltip.classList.remove('hidden') //Show tooltip
                        }

                        //If tooltip isn't present
                        if (tooltip.innerHTML.length < 1) {
                            tooltip.innerHTML = Translate.do('Must be set to a value')
                        }
                        
                    }
                }
            }else{
                autoPlayOptions_.toggleOpen();
                setApState_(1);
                soundManager_.playSound("click");
                //If "NEW_UI" or game ID > x
                if (ReelConfig.newUI) {
                    window.newUI.autospin().state = 'STOP'
                }
            }
        } else if (apState_ === 2 ) {
            autoPlayManager_.setStopOnLose();
            soundManager_.playSound("spinClick");
            autoPlayManager_.toggleAutoPlay();
            setApState_(0);
            //If "NEW_UI" or game ID > x
            if (ReelConfig.newUI) {
                window.newUI.autospin().state = 'START'
            }
        }

    }

    function autoReset_() {
        autoEnable_=true;
    }

    function resetAp_(){
        autoPlayManager_.resetAutoPlay();
    }

    var me = {
        resetAp:resetAp_,
        setApState:setApState_,
        doAutoPlay:doAutoPlay_,
        getApState:function(){
            return apState_;
        }

    }

    initClass_();

    return me;
}