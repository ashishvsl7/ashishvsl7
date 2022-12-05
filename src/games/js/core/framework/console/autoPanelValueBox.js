/**
 *KiS Framework, Created by Tom on 12/08/2016.
 */

function AutoPanelValueBox(target, targetValues) {

    ConsoleValueBox.call(this);

    var _this = this;

    this.target_ = target;
    this.targetValues_ = targetValues;

    var apState_ = 0;

    this.setValue = function() {

        this.boxInfo_.value = this.targetValues_[this.boxInfo_.step];
        $(this.targetValue).text(this.boxInfo_.value);
        // TweenMax.to($(this.targetValue), 0.15, { opacity: 0, onComplete: $(this.targetValue).text, onCompleteParams: [this.boxInfo_.value], onCompleteScope: $(this.targetValue) });
        // TweenMax.to($(this.targetValue), 0.15, { opacity: 1, delay: 0.15 });

        autoPlayManager_.setAutoPlayValue(_this.boxInfo_.value);

    }

    //overide
    this.setListeners = function() {

        $("#auto_amount").text("");

        $('body').on('touchstart click', function(e) {

            logger("body click");

            if (!$('#autoPlaySettings').hasClass("hidden")) { // && framework.getAutoplaySettings().getApState()==1   -- removed for basics 110 (RC message and ap menu not closing)
                _this.animateItem($("#autoPlaySettings"));
                resetAp_();

                //If "NEW_UI"
                if (ReelConfig.newUI) {
                    window.newUI.autospin().text = window.AUTOSPIN_VALUES.value() //Set autoplay amount on close
                }

                logger("hidden");
            }
        });

        $('#autoPlaySettings').on('click touchstart mousedown', function(e) {
            e.stopPropagation(); //stop above being fired

        });

        $('#autoPlay').on('touchstart mousedown click', function(e) {
            e.stopPropagation(); //stop above being fired

        });

        $('#autoplayStopOnAnyWin:checkbox').change(function() {

            autoPlayManager_.toggleStopOnAnyWin($(this).is(':checked'));

        });

        $('#autoplayStopOnWin:checkbox').change(function() {

            autoPlayManager_.toggleStopOnSingleWin($(this).is(':checked'));

        });

        $('#autoplayStopOnCashUp:checkbox').change(function() {

            autoPlayManager_.toggleStopOnWin($(this).is(':checked'));


        });

        $('#autoplayStopOnCashDown:checkbox').change(function() {

            autoPlayManager_.toggleStopOnLose($(this).is(':checked'));

        });

        $('#autoplayFeatureStop:checkbox').change(function() {

            autoPlayManager_.toggleStopOnFeature($(this).is(':checked'));

        });

    }

    //overide
    this.animateItem = function(target) {

        if ($(target).hasClass("hidden")) {
            //$(target).removeClass("hidden");
            fadeElement(target, 'in');
        } else {
            //$(target).addClass("hidden");
            fadeElement(target, 'out');
        }

    }


    function resetAp_() {

        buttonManager_.getButton("autoPlay").setText("");
        buttonManager_.getButton("autoPlay").setBackGround(frameworkSettings.buttons.autoButton.bg);
        apState_ = 0;
        framework.setAutoPlayState(0);

        //If "NEW_UI" or game ID > x
        if (ReelConfig.newUI && !framework.isTouch()) {
            window.newUI.autospin().state = 'START'
        }

    }
    var autoEnable_=true;
    var autoTout=400;

    function toggleOptionsOpen_() {
        //if (autoEnable_==false)return;
        autoEnable_=false;
        setTimeout(autoReset_,autoTout);

        _this.animateItem($("#autoPlaySettings"));

    }
    function autoReset_() {
        autoEnable_=true;
    }

    function closeSettings_(){
        resetAp_();
        closeMenu_();
    }

    function closeMenu_(){
        _this.hideOptions($("#autoPlaySettings"));
    }

    var me = {
        closeMenu:closeMenu_,
        doAutoPlay: _this.doAutoPlay_,
        setApState: _this.setApState_,
        resetAp:resetAp_,

        getBoxInfo: function() {
            return _this.boxInfo_;
        },

        toggleOpen: function() {
            toggleOptionsOpen_();
        },

        closeSettings: function(){
            closeSettings_();

        }
    }

    this.initClass_();

    return me;

}

AutoPanelValueBox.prototype = Object.create(ConsoleValueBox.prototype);
AutoPanelValueBox.prototype.constructor = AutoPanelValueBox;
