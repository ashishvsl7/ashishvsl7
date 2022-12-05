/**
 * KiS Framework, Created by Tom on 14/07/2016.
 */
function MenuMobile(frameworkRef, autoPlayBox, betValueBox) {

    MainMenu.call(this);

    var this_ = this;

    var framework_ = frameworkRef;
    var autoPlayBox_ = autoPlayBox;
    var betValueBox_ = betValueBox;
    var compulsivePlayer_=false;
    var soundEffectSwitch = null;
    var backgroundSwitch = null;
    var showHelpScreenOnLoad=null;

    function initClass_() {

        this_.menuTab = new MenuTabSet($("#menuMobile footer li"), $("#menuMobile .mobile__sub__section"));

        //If "NEW_UI" or game ID > x
        if (ReelConfig.newUI) {

            $("#exitMenu").on('touchstart mousedown', function(e) {

                e.stopPropagation();
                e.preventDefault();
                this_.toggleMenu(false, $("#menuMobile"), $(this));

            })

            $(".menu").on('touchstart mousedown', function(e) {
                e.stopPropagation();
                e.preventDefault();

                window.newUI.menuManager.onClick.dispatch() //Dispatch menu click event to new UI

                //Flag for svenska spel client
                var svenskaspel = loginVars.getRegParams().jurisdiction =="se" && gameParams.clientName!="" && gameParams.clientName.indexOf("NYX")>=0  &&  Math.abs(Number(gameParams.site))== 939

                //If autospin interface is showing
                if (window.newUI.autospin().interface.show) {

                    window.newUI.autospin().interface.show = false //Hide autospin interface

                    //For each button
                    window.newUI.buttons.forEach(function(b_){
                        b_.enable  = true //Enable button
                        b_.visible = true //Make button visible

                    })
                }

                //If bet interface is showing
                else if (window.newUI.bet().interface.show) {

                    window.newUI.bet().interface.show = false //Hide bet interface

                    //For each button
                    window.newUI.buttons.forEach(function(b_){

                        //If autoplay button
                        if (b_.id === 'autospin') {

                            if (!getCanAutoplay_()) {
                                b_.enable   = false //Disable button
                                b_.visible  = false //Hide button

                            }

                            //Any other client
                            else {
                                b_.enable   = true  //Enable button
                            }

                        }

                        //Any other button
                        else {
                            b_.enable  = true //Enable button
                        }

                        b_.visible = true //Make button visible

                    })

                }

                else {
                    this_.toggleMenu(false, $("#menuMobile"), $(this));
                }
            });

        }

        //old ui
        else {

            $("#menuButton").on('touchstart mousedown', function(e) {
                e.stopPropagation();
                e.preventDefault();
                //custom code here
                this_.toggleMenu(false, $("#menuMobile"), $(this));

            });

        }
        var prev=false;
        //If "NEW_UI" or game ID > x
        if (ReelConfig.newUI) {

            $(".sound").unbind('touchstart mouseup').bind('touchstart mouseup', function(e) { //on pokestars staging the sound button (only?) was firing the event twice...
                if (prev==false){
                    prev=true;
                    console.log("sound button up")             
                    e.stopPropagation();
                    e.preventDefault();

                    soundManager_.playSound("click");

                    framework_.getSettings().toggleAllSounds();

                    if (framework_.getSettings().getSounds().allSounds) {
                        window.newUI.sound().state = 'ON'
                    }

                    else {
                        window.newUI.sound().state = 'OFF'
                    }
                    setTimeout(prevhack_,200);//on pokestars staging the sound button (only?) was firing the event twice...
                }
            });
            function prevhack_(){
                prev=false;
            }
            

        }

        //prevnts scrolling of document
        $(document).on('touchmove', function(evt) {
            evt.preventDefault();
        });

        $(".scrollable__content").on("touchmove", function(e) {
            e.stopPropagation()
        });

        $('input').on("blur", function(e) {

            setTimeout(function() {
                $(window).resize();

            }, 500);
        });


        /*add the radio switch buttons to the mobile menu*/
        soundEffectSwitch = new RadioSwitch(Translate.do("Sound Effects"), (localStorageGetItem('slots__sound')=="false")?false:true , framework_.getSettings().setSoundEffects, $("#soundPage .switch__list"));
        backgroundSwitch = new RadioSwitch(Translate.do("Background Music"),(localStorageGetItem('slots__sound')=="false")?false:true, framework_.getSettings().setBackgroundMusic, $("#soundPage .switch__list"));

        //spin
        //var switchBet = new RadioSwitch(Translate.do("Left Handed Spin"), false, switchSpinBet, $("#spinPage .switch__list"));
        showHelpScreenOnLoad = new RadioSwitch(Translate.do("Show help screen on load"),localStorageGetItem('show__help__on__load__'+ gameParams.folderName)=='false'?false:true, framework_.getSettings().setHelpOnLoad, $("#spinPage .switch__list"));
        var swipeToSpin = null;
        if (ReelConfig.canSwipe == true) swipeToSpin = new RadioSwitch(Translate.do("Swipe to spin"), framework_.getSettings().getSwipeToSpin(), framework_.getSettings().toggleSwipeToSpin, $("#spinPage .switch__list"));
        //compulsive play
        if (getCanQuickPlay_() && ReelConfig.fastPlayEnable!=false) compulsivePlayer_ = new RadioSwitch(Translate.do("Fast Play"), framework_.getSettings().getCompulsivePlayer, framework_.getSettings().setCompulsivePlayer, $("#spinPage .switch__list"));

        //bet settings
        if (getCanCoins_()) var dispCoins = new RadioSwitch(Translate.do("Display in Coins"), false, balanceManager_.toggleCredits, $("#betPage .switch__list"));

        //auto play
        var stopOnAnyWin = new RadioSwitch(Translate.do("Stop on any win"), false, autoPlayManager_.toggleStopOnAnyWin, $("#autoPage .switch__list"));
        var stopOnWin = new RadioSwitch(Translate.do("Stop on win of"), false, autoPlayManager_.toggleStopOnSingleWin, $("#autoPage .switch__list"), 'autoPlayWinLimit');
        var stopOnCashUp = new RadioSwitch(Translate.do("Stop if cash increases by"), false, autoPlayManager_.toggleStopOnWin, $("#autoPage .switch__list"), 'autoPlayCashLimit');
        var stopOncashDown = new RadioSwitch(Translate.do("Stop if cash decreases by"), (loginVars.getRegParams().jurisdiction === 'uk'), autoPlayManager_.toggleStopOnLose, $("#autoPage .switch__list"), 'autoPlayCashDownLimit', (loginVars.getRegParams().jurisdiction === 'uk' ? 'active' : ''));
        if (gameParams.clientName!=false && gameParams.clientName!="" && gameParams.clientName.indexOf("theHub_malta_playtech")>=0) {
            // NOT show it for playtech
        }else{
            var stopOnFeature = new RadioSwitch(Translate.do("Stop when feature entered"), false, autoPlayManager_.toggleStopOnFeature, $("#autoPage .switch__list"));
        }

        //If "NEW_UI" or game ID > x
        if (ReelConfig.newUI) {
            window.newUI.settings.init() //Initialise new UI exclusive settings
        }

        //autoplay inputs

        $('#gameContainer canvas').on('touchstart', function() {
            if (framework_.getSettings().getAutoPlaySettings().getApState() === 1) {
                framework_.setAutoPlayState(0);

                logger("nh call1")
                buttonManager_.applyState("NH");
            }
            framework_.hideApSettings();
            framework_.hideBetSettings();

        });

        //If "NEW_UI" or game ID > x
        if (ReelConfig.newUI) {

            $(".paytable").on('touchstart mousedown', function(e) {
                e.stopPropagation();
                e.preventDefault();

                soundManager_.playSound("click");
                framework.openPayTable(); //Show/hide paytable
            });

        }

        //old ui
        else {

            //Mobile paytable button click
            $('#paytableMobile').on('touchstart mousedown', function(e) {
                e.stopPropagation();
                e.preventDefault();

                soundManager_.playSound("click");
                framework.openPayTable(); //Show/hide paytable
            });

        }

        if ( gameParams.lobbyurl=="" && loginVars.getRegParams().jurisdiction=="it")$("#goBackToLobby").addClass("hidden");
        if (gameParams.clientName!="" && gameParams.clientName.toUpperCase().indexOf("ISOFTBET")>=0  )$("#goBackToLobby").addClass("hidden");
        if ( gameParams.lobbyurl=="")$("#goBackToLobby").addClass("hidden");

        $("#goBackToLobby").on('touchstart mousedown', function(e){
            //adam asked to comment this line and restore back the following after that cost might be chance to to some error?
            // window.top.location.href = gameParams.lobbyurl;

            window.sendCustomEvent('f1x2gan', { 'detail': 'gameClosing' }); //GAN event dispatch

            //window.top.location.href = gameParams.lobbyurl;
            f1x2.clientWrapperInit.send('game-close');

            if (f1x2.clientWrapperInit.doLobbyURLNavigate) {
                top.location.href =  gameParams.lobbyurl;
            }
            e.stopPropagation();
            e.preventDefault();
        });
        if (!ReelConfig.newUI) {
            Draggable.create('#autoPage > .scrollable__content', {
                type: 'scrollTop',
                throwProps: true,
                cursor: 'default'
            });
        }
        // Draggable.create('#historyPage > .scrollable__content', {type: 'scrollTop', throwProps: true, cursor: 'default'});

    }

    function toggleCoin_() {
        balanceManager_.toggleCredits();

        if (balanceManager_ != null) {
            framework.setBetValue(balanceManager_.getCoinValue());
        }

    }


    function switchSpinBet(isChecked) {

        logger("switch spin");
    }

    var me = {
        getAutoPlay: function() {
            return autoPlayBox_;
        },
        getBetBox: function() {
            return betValueBox_;
        },
        showReplay: function(json) {
            this_.showReplay(json);
        },
        setCompulsivePlayer_:function (val){
            compulsivePlayer_.doSwitch(val);
        },
        getSoundSwitch:function(){
            return soundEffectSwitch;
        },
        getMusicSwitch:function(){
            return backgroundSwitch;
        },
        getIntroSwitch:function(){
            return showHelpScreenOnLoad;
        },
        getMainMenu:function(){
            return this_;
        },
        //Show the history page
        showHistory: function(_callback, _isReality) {

            $("#menuMobile").addClass('hidden'); //Hide menu if it is open

            this_.toggleMenu(3, $("#menuMobile"), $("#menuButton"), _isReality); //Show history

            //If a callback was passed
            if (_callback) {

                //If "NEW_UI"
                if (ReelConfig.newUI) {

                    document.getElementById('exitMenu').addEventListener('touchstart', function() {
                        _callback() //Execute callback
                    })

                }

                //Old ui
                else {

                    //Add namespaced event listener for menu close
                    $("#menuButton").on('touchstart.showHistory', function() {

                        _callback(); //Execute callback
                        $("#menuButton").off('touchstart.showHistory'); //Unbind current event listener

                    });

                }

            }

        }

    }

    initClass_();

    return me;
}


MenuMobile.prototype = Object.create(MainMenu.prototype);
MenuMobile.prototype.constructor = MenuMobile;
