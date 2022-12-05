/**
 * KiS Framework, Created by Tom on 14/07/2016.
 */
function MenuDesktop(frameworkRef, autoPlayBox, betValueBox) {

    MainMenu.call(this);

    var this_ = this;

    var framework_ = frameworkRef;
    var autoPlayBox_ = autoPlayBox;
    var betValueBox_ = betValueBox;

    var overButtons = false;
    var subMenuOpen = false;
    var compulsivePlayer_=false;
    var soundEffectSwitch = null;
    var backgroundSwitch = null;
    var showHelpScreenOnLoad=null;

    function initClass_() {

        this_.menuTab = new MenuTabSet($("#menu__desktop__nav a"), $(".menu__section"));

        //If "NEW_UI"
        if (ReelConfig.newUI) {

            var dtNavBar = document.getElementById('menu__desktop__nav') //Store desktop nav bar node

            //Loop through children
            for (var i = 0; i < dtNavBar.children.length; i++) {

                var nav = dtNavBar.children[i] //Store child node

                //If not settings tab
                if (!nav.id) {
                    nav.id = 'settingsTab' //Generate ID
                }

            }

            document.getElementById('exitMenuIcon').addEventListener('click', function() {

                this_.toggleMenu(false, $("#menuContainer"), $(this)); //Hide menu

                //Reset styling of menu nodes to default state
                document.getElementById('gameHistoryPage').removeAttribute('style')
                document.getElementById('settingsTabPage').removeAttribute('style')
                document.getElementsByClassName('game__history__list')[1].removeAttribute('style')
                document.getElementsByClassName('game__history__replay')[1].removeAttribute('style')

            })

        }

        //click functions
        $("#menuButton").on('click', function(e) {

            e.stopPropagation();
            e.preventDefault();

            //New UI
            if (ReelConfig.newUI) {

                //If not spinning
                if (!window.SPIN_STATE.spinning && !window.AUTOSPIN_STATE.spinning) {
            this_.toggleMenu(false, $("#menuContainer"), $(this));
                }

            }

            //Old UI
            else {
                this_.toggleMenu(false, $("#menuContainer"), $(this));
            }

        });

        //click functions
        $(".menu__button__content").on('mouseover', function(e) {

            e.stopPropagation();
            e.preventDefault();

            overButtons = true;

            if (!subMenuOpen && buttonManager_.getButton(frameworkSettings.buttons.spinButton.id).isEnable()) {

                //New UI
                if (ReelConfig.newUI) {

                    //If not spinning
                    if (!window.SPIN_STATE.spinning) {

                        fadeElement(".sub__menu", 'in');
                        subMenuOpen = true;

                    }

                }

                    //Old UI
                    else {

                    fadeElement(".sub__menu", 'in');
                    subMenuOpen = true;

                }

            }

        });

        //click functions
        $(".menu__button__content").on('mouseout', function(e) {

            e.stopPropagation();
            e.preventDefault();

            overButtons = false;

            if (subMenuOpen) {

                setTimeout(function() {

                    if (!overButtons) {

                        fadeElement(".sub__menu", 'out');
                        subMenuOpen = false;

                    }

                }, 250);

            }

        });

        //click functions
        $("#soundButton").on('click', function(e) {
            e.stopPropagation();
            e.preventDefault();

            soundManager_.playSound("click");

            framework_.getSettings().toggleAllSounds();

            //framework_.hideAllSettings();


        });

        $(".sub__menu__icon").on('click', function(e) {
            e.stopPropagation();
            e.preventDefault();

            var index = $(this).index();

            if (index < 2) {

                //If Old UI
                if (!ReelConfig.newUI) {
                     this_.toggleMenu(index, $("#menuContainer"), $("#menuButton"));
                }

            } else {
                // for PP 2021
                f1x2.clientWrapperInit.send('game-close');
                if (f1x2.clientWrapperInit.doLobbyURLNavigate) {
                    window.top.location.href = gameParams.lobbyurl;
                }
            }

            framework_.hideAllSettings();

        });
        soundEffectSwitch = new RadioSwitch(Translate.do("Sound Effects"), localStorageGetItem(gameParams.gameName + '__effects__on')=='false'?false:true , framework_.getSettings().setSoundEffects, $(".menu__section .switch__list"));
        backgroundSwitch = new RadioSwitch(Translate.do("Background Music"), localStorageGetItem(gameParams.gameName + '__bg__on')=='false'?false:true , framework_.getSettings().setBackgroundMusic, $(".menu__section .switch__list"));
        if(isSpaceBarAllowed_())var spaceSwitch = new RadioSwitch(Translate.do("Press Space to Spin"), framework_.getSettings().getSpaceEnabled(), framework_.getSettings().setSpaceToSpin, $(".menu__section .switch__list"));

        showHelpScreenOnLoad = new RadioSwitch(Translate.do("Show help screen on load"), localStorageGetItem('show__help__on__load__'+ gameParams.folderName)=='false'?false:true , framework_.getSettings().setHelpOnLoad, $(".menu__section .switch__list"));

        if (getCanQuickPlay_() && ReelConfig.fastPlayEnable!=false) compulsivePlayer_ = new RadioSwitch(Translate.do("Fast Play"), framework_.getSettings().getCompulsivePlayer, framework_.getSettings().setCompulsivePlayer, $(".menu__section .switch__list"));

        $("#spinButton").mouseover(function() {
                logger("mouseover");
                if(!$("#spinButton").hasClass("disabled")){
                    $("#spinBack").css("opacity", "0.7");
                }

            })
            .mouseout(function() {
                logger("mouseout");
                 $("#spinBack").css("opacity", "0.5");
            });

    }


    var me = {
        setCompulsivePlayer_:function (val){
            if (compulsivePlayer_!=undefined && compulsivePlayer_.doSwitch!=undefined) compulsivePlayer_.doSwitch(val);
        },
        getAutoPlay: function() {
            return autoPlayBox_;
        },
        getBetBox: function() {
            return betValueBox_;
        },
        getSoundSwitch:function(){
            return soundEffectSwitch;
        },
        getMusicSwitch:function(){
            return backgroundSwitch;
        },
        showReplay: function(json) {
            this_.showReplay(json);
        },
        getIntroSwitch:function(){
            return showHelpScreenOnLoad;
        },
        getMainMenu:function(){
          return this_;
        },
        //Show the history page
        showHistory: function(_callback, _isReality) {
            $("#menuContainer").addClass('hidden'); //Hide menu if it is open

            this_.toggleMenu(1, $("#menuContainer"), $("#menuButton"), _isReality); //Show history

            //If a callback was passed
            if (_callback) {

                //If "NEW_UI"
                if (ReelConfig.newUI) {

                    //If showing history from reality check
                    if (_isReality) {

                        //Show correct styling for desktop sidebar
                        document.getElementById('settingsTabIcon').classList.remove('active')
                        document.getElementById('gameHistoryIcon').classList.add('active')
                        document.getElementById('helpIcon').classList.remove('active')
                        //hide game guide
                        $('#helpPage').css("visibility","hidden");
                        $('#helpPage').css("opacity",0);
                        $('#helpPage').css("display","none");

                    }

                    document.getElementById('exitMenuIcon').addEventListener('click', function() {
                        _callback() //Execute callback
                    })

                }

                //Old ui
                else {

                    //Add namespaced event listener for menu close
                    $("#menuButton").on('click.showHistory', function() {

                        _callback(); //Execute callback
                        $("#menuButton").off('click.showHistory'); //Unbind current event listener

                    });

                }

            }

        }
    }

    initClass_();

    return me;
}

MenuDesktop.prototype = Object.create(MainMenu.prototype);
MenuDesktop.prototype.constructor = MenuDesktop;
