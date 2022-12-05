function ButtonHtml(gameRef, gameClass, group, config, _click, _over, _out, _visible, _hold, _id) {
    var game_ = gameRef;
    var gameClass_ = gameClass;
    var defGroup_ = (group == null) ? "buttons" : group;
    var clickCB = _click;
    var overCB = _over;
    var outCB = _out;
    var holdCB = _hold;
    var config_ = config;
    var initStage_ = _visible;
    var mainGroup_;
    var mainTextGroup_;
    var buttonE_ = { enable_: true, visible: _visible, name_: config.id };
    var buttonD_ = { enable_: true, visible: _visible, name_: config.id };

    var buttonObj_ = $("#" + config_.id);
    var iPress_=0;
    var buttonHeld = false;
    var state_;
    var minor_=false;
    var id = _id;

    var init_ = function() {
        if (config_.bgDisabled!=null)setBackGround_(config_.bgDisabled);
        setBackGround_(config_.bg);
        state_="bg";
        console.log("adding mousedown: " + holdCB);

        $(buttonObj_).on('mousedown touchstart', function(e) {
            e.stopPropagation();
            e.preventDefault();
            //custom code here
            if (holdCB) {
                buttonHeld = false;
                iPress_=setTimeout(function() { //wait for 1 sec for hold
                    buttonHeld = true;
                    onHold_(e);
                }, 1000);

            } else {
                console.log("clicker");
                onClick_(e);
            }

        });

        if (holdCB) {//only add this listner if there is a hold event 

            console.log("adding mouseUp");

            $(buttonObj_).on('mouseup touchend', function(e) {
                e.stopPropagation();
                e.preventDefault();
                //custom code here

                if (!buttonHeld) {
                    console.log("clicker");
                    onClick_(e);
                    buttonHeld = false;
                }
                buttonHeld = false;

            });
        }

        if (buttonE_.visible == false) $(buttonObj_).hide();
    }

    var setBackGround_ = function(imgSrc) {

        //If "NEW_UI" or game ID > x
        if (ReelConfig.newUI) {
            window.newUI[id]().backgroundImage()
        }
        //old ui
        else {

            if (minor_ == true) imgSrc = "m_" + imgSrc;
            $(buttonObj_).find(".button__background").css('background-image', 'url(' + imgSrc + ')');
        }
    }

    var setText_ = function(message) {
        $(buttonObj_).find("span").text(message);
    }

    var applyState_ = function(state) {
        buttonE_.enable_ = state;
        if (state) {
            buttonObj_.removeClass("disabled");
            if (state_=="bg") {
                setBackGround_(config_.bg);
            }
            //TweenMax.to($(buttonObj_), 0.25, {opacity:1});
        } else {
            //buttonObj_.addClass("disabled");
            if (state_=="bg") {
                if (config_.bgDisabled != null) {
                    setBackGround_(config_.bgDisabled);
                }
            }
            //TweenMax.to($(buttonObj_), 0.25, {opacity:0.5});
        }
    }

    var enable_ = function() {
        buttonE_.enable_ = true;
        buttonObj_.addClass("disabled");
        setBackGround_(config_.bg);
    }

    var disable_ = function() {
        buttonE_.enable_ = false;
        buttonObj_.removeClass("disabled");
        if (state_=="bg") {
            if (config_.bgDisabled != null) {
                setBackGround_(config_.bgDisabled);
            }
        }
    }

    var onClick_ = function(d) {
        clearTimeout(iPress_);
        if (buttonE_.enable_) {
            buttonE_.frame = 2;
            clickCB(d);
        }
    }

    var onHold_ = function(d) {
        if (!getCanAutoplay_())return;  //disabling AP buttons for NYX Svesnka Spil (operator ID 939)
        if (buttonE_.enable_ && buttonE_.visible) {
            buttonE_.frame = 2;
            holdCB(d);
        }
    }


    var reset_ = function(d) {
        if (buttonE_.enable_) {
            buttonE_.frame = 0;
        }
    }

    var me = {
        applyState: applyState_,
        enable: enable_,
        disable: disable_,
        isButton: true,
        setText: setText_,
        setBackGround: setBackGround_,
        reset:reset_,
        showButton: function() {
            buttonE_.visible = true;
            $(buttonObj_).show();
        },
        hideButton: function() {
            buttonE_.visible = false;
            $(buttonObj_).hide();
        },
        getButton: function() {
            return buttonE_;
        },
        isEnable: function() {
            return buttonE_.enable_;
        },
        getName: function() {
            return buttonE_.name_;
        },
        isVisible:function(){
          return buttonE_.visible;  
        },
        applyState_MinorCurrency:function(state){
            minor_=state;
        },
        changeState:function(state){
            state_=state;
            if (state=="bg"){
                setBackGround_(config_.bg);
            }else if (state=="start"){
                setBackGround_( config_.start);
            }else if (state=="stop"){
                setBackGround_(config_.stop);
            }


        },
        setText: setText_
    };

    init_();
    return me;
}
