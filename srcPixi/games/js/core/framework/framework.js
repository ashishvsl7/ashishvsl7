/**
 * KiS Framework, Created by Tom on 14/07/2016...
 */
function Framework(forceMobile) {

    //desktop
    var GAME_WIDTH = 1280;
    var GAME_HEIGHT = 720;
    var scaleFactorX;
    var scaleFactorY;
    var ratio = GAME_WIDTH / GAME_HEIGHT;
    var orientation
    var orientations = ['landscape', 'portrait']

    //temp default
    var autoPlayValues = [5, 10, 20, 30, 50, 75, 100];
    var betValues = ["0.01", "0.02", "0.05", "1.00", "1.50", "2.00", "2.50", "5.00"];

    //var isMobile_ = isMobile === "mobile";
    //added instead of launch param 
    var isMobile_ = ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;

    if(forceMobile === "true"){//used to force mobile on non touch devices for demo purposes
        isMobile_ = true;
    }
    var helpFolder = isMobile_ ? "mobile" : "desktop";
    gameParams.setChannel(helpFolder);

    var uniqueBetValues = false;

    if(gameParams.clientName ) {
        uniqueBetValues = true; //gameParams.clientName.indexOf("NYX") >= 0 || gameParams.clientName.indexOf("theHub") >= 0 || gameParams.clientName.indexOf("Quickfire_MIT") >= 0 || gameParams.clientName.indexOf("Quickfire_dev") >= 0;    }
    }

    var soundOn_ = true;
    var menu_;

    var betValue = 0;

    var autoPlayBox;
    var betValueBox;

    var settings_;

    var btnMobileAP;
    var betValueSelector;
    var autoPlayOpen_ = false;

    var paytable;
    var setup;

    var spinButton;
    var gotBetValues_=false;
    var gotJurisdictionExtras_=false;
    var ptHelp_;

    var defaultAutoPlay=0;


    function initClass_() {
        if (gotBetValues_ && gotJurisdictionExtras_) {
            var defaultStake = betValue > 0 ? betValue : (betValues.default != undefined) ? betValues.default : betValues[0];

            window.AUTOSPIN_VALUES.init(autoPlayValues) //Store autoplay values in new ui

            //create all the GUI controls and, if preview is not present, start the game gfx
            //if preview is there the game will be started by the end of the preview page
            if (isMobile_) {
                GAME_WIDTH = 960;
                GAME_HEIGHT = 540;
                $("body").addClass("is__mobile");
                $("body").removeClass("is__desktop");

                //If "NEW_UI" or game ID > x
                if (ReelConfig.newUI) {

                   document.body.classList.add('newUI')           //Add "NEW_UI" class to body to indicate new UI
                   window.newUI.autospin().text = defaultAutoPlay //Set autoplay text

                }

                //mobile selectors
                betValueSelector = new CircularSelector($("#bet"), betValues, $("#betControl"), false, "left", defaultStake, setBetValue_, false, frameworkSettings.mobileButtonUnderlay);
                spinButton = new CircularSelector($("#spin"), autoPlayValues, $("#spinCtrl"), false, "right", defaultAutoPlay, doAutoPlay, false, frameworkSettings.mobileButtonUnderlay);
                settings_ = new FrameworkSettings(spinButton);
                menu_ = new MenuMobile(me, betValueSelector, spinButton);

                var ua = window.navigator.userAgent;
                if ((ua.indexOf('iPhone') >= 0)) {//it will not show the info page on smaller Iphones (continue button collide white safe area on the bottom when on landscape mode, making impossible to click it)
                    if ($(window).height() <= 640) {
                        $("body").addClass("iOs");
                    }
                }
            } else {
                if (!getCanCoins_()){ //getting rid of coin visualization for Colombian regulation
                    $("#cashOptions").addClass("hidden");
                }
                GAME_WIDTH = 1280;
                GAME_HEIGHT = 720;
                $("body").removeClass("is__mobile");
                $("body").addClass("is__desktop");

                //If "NEW_UI" or game ID > x
                if (ReelConfig.newUI) {
                    document.body.classList.add('newUI')           //Add "NEW_UI" class to body to indicate new UI
                }

                //desktop selectors
                autoPlayBox = new AutoPanelValueBox($("#autoPlayNumber"), autoPlayValues);
                betValueBox = new BetConsoleValueBox($("#betValueBox"), betValues);
                settings_ = new FrameworkSettings(autoPlayBox);
                menu_ = new MenuDesktop(me, autoPlayBox, betValueBox);

            }

            setBetValue_(defaultStake, true);

            var translator = new Translator();

            //play sound on all input changes
            $('input:checkbox').change(function () {
                soundManager_.playSound("slide");
            });

            //Get help file content
            if (paytableAssets != null) {

                $.get(gameParams.pathCDN + 'f1x2games/properties/ironDog/help/' + helpFolder + '/' + gameParams.folderName + '/help_' + gameParams.lang + ".html", function (data) {
                    ptHelp_=data;
                    paytable = new Paytable(data); //Generate paytble
                })
                    .fail(function () {
                        paytable = new Paytable();
                        //MessageScreen.showGenericError();
                    });
            }
            resize_();
            if (previewManager_.enabled() == false) { //start the game only if not preview enabled.
                console.log("framework init going to call create")
                setTimeout(gcmCalls_, 200, "PAID", 0, true);
                setTimeout(gcmCalls_, 300, "BALANCE", balanceManager_.getBalance(), true);
                setTimeout(gameClass_.create, 500);
                setTimeout(gameClass_.initGame, 1000);
                setTimeout(transpHack_, 2000);//to make the ap button transparent
                if (!framework.isTouch() && ReelConfig.newUI!=true){ //reduces the session bar width to avoid overlapping the buttons for old UI
                    $(".gf-session-bar.gf-_0").css("width", "50%");
                    $(".gf-session-bar.gf-_0").css("left", "50%");
                    $(".gf-session-bar.gf-_0").css("transform", "translate(-50%,0)");
                }
            }

            //levelthree session timer. Will initialize as per launch param settings
            new SessionTimer();
        }else{
            setTimeout(initClass_,500);
        }
    }

    function setBetValue_(value, init) {
        if (value!=undefined) {
            betValue = value;

            balanceManager_.setCoinValue(value);

            var amountText = balanceManager_.geBalanceObj().currency + "" + Util.formatNumber(balanceManager_.getCoinValue(), 2);

            //If "NEW_UI" or game ID > x
            if (ReelConfig.newUI) {

                //Desktop
                if (!framework.isTouch()) {
                    amountText = "<span class='bet_currency'>" + balanceManager_.geBalanceObj().currency + "</span>" + "" + Util.formatNumber(balanceManager_.getCoinValue(), 2);
                }

                window.newUI.bet().text = amountText //Set current bet amount in cash

                //If bet values have been initialized
                if (init) {
                    window.BET_VALUES.init(betValues, value) //Store bet values in new ui
                }

            }

            //old ui
            else {
                if (framework.isTouch()) { //translate HOLD for old mobile request from betway RMT-1389
                    $("#holdText").text(Translate.do("HOLD"));
                }
                if (amountText.length > 8) {
                    if (framework.isTouch()) {
                        $(".bet__amount").html(Translate.do("Bet:") + "<BR>" + amountText);
                        $(".bet__amount").css("top", "52px")
                    } else {
                        $(".bet__amount").html(Translate.do("Bet:") + "<BR>" + amountText);
                        $(".bet__amount").css("top", "18px");
                        $(".bet__amount").css("left", "0px");
                    }
                    buttonManager_.getButton(frameworkSettings.buttons.betControl.id).applyState_MinorCurrency(true);
                    buttonManager_.getButton(frameworkSettings.buttons.betControl.id).setBackGround(frameworkSettings.buttons.betControl.m_bg);
                } else {
    
                    //If old ui
                    if (!ReelConfig.newUI) {

                        if (framework.isTouch()) {
                            $(".bet__amount").css("top", "")
                            $(".bet__amount").html(amountText);
                        } else {
                            $(".bet__amount").css("top", "22px");
                            $(".bet__amount").css("left", "20px");
                        }

                    }

                    $(".bet__amount").html(amountText);
                    
                    buttonManager_.getButton(frameworkSettings.buttons.betControl.id).applyState_MinorCurrency(false);
                    buttonManager_.getButton(frameworkSettings.buttons.betControl.id).setBackGround(frameworkSettings.buttons.betControl.bg);
                }

            }


            gcmCalls_("STAKE", balanceManager_.getCoinValue());
            clientMessageSend('value-stake', balanceManager_.getCoinValue());
            //todo restore with phaser buttons buttonManager_.getButton(frameworkSettings.buttons.betControl.id).setText(balanceManager_.geBalanceObj().currency + "" + Util.formatNumber(balanceManager_.getCoinValue(), 2));

            if (betValueSelector && init) {
                betValueSelector.setValueAmount(value);
            }

            if (betValueBox && init) {
                betValueBox.setValueAmount(value);
            }

            freeSpinsManager_.resumeFsAcc();
        }
    }

    function handleDeHeader_(){
        if (loginVars.getRegParams().jurisdiction.toUpperCase() === "DE") { //do .it stuff NO NYX
            communicationManager_.rtpMaxChanceRequest().done(function(data) {
            //Chance auf max. Auszahlung von 5400x ist 1:50 M. RTP=96.4%
                if (data!=undefined && data.maxPayout!=undefined && data.probabilityMaxPrize!= undefined && data.RTP!=undefined && data.maxPayout!="0x" ) {
                    var message=Translate.do("Probability of max payout of [0] is [1]");
                    message=message.replace("[0]", data.maxPayout ).replace("[1]",data.probabilityMaxPrize);
                    rtpMess_= " " + data.RTP  + ", "+ message;
                    $("#dertp_msg").html(  message + " RTP=" + data.RTP + "%");
                    $(".dertp__container").css("display", "flex");
                    gotJurisdictionExtras_=true;
                    if (ReelConfig.germanRtpField!=undefined){
                        $(".dertp__container li span").css("color",ReelConfig.germanRtpField)
                    }


                }else{
                    showMessage_( "Unable to retrieve game information at this time","fatal-error","Something went wrong!");
                }

            });

        }else{
            gotJurisdictionExtras_=true
            $(".dertp__container").hide();
        }

    }


    function showMessage_(msg1,msg2,msg3){
        var message = new MessageScreen(
            msg1,
            msg2,
            msg3, [
                {
                    "action": function () {
                        message.destroy();
                        // client wrapper game-close event
                        f1x2.clientWrapperInit.send("game-close"),
                            // client wrapper should game navigate to the lobby url
                        f1x2.clientWrapperInit.doLobbyURLNavigate && window.location.replace(gameParams.lobbyurl)
                    },
                    label: "Lobby"
                }],
            false,
            true
        );
    }


    function doAutoPlay(value) {
        autoPlayManager_.setAutoPlayValue(value);
    }

    function openAp_() { //autoButtonSelect

        var btn

        //If "NEW_UI" or game ID > x and mobile
        if (ReelConfig.newUI && framework.isTouch()) {
            btn = buttonManager_.getButton(frameworkSettings.buttons.autoButton.id)
        }

        //old ui
        else {
            btn = buttonManager_.getButton(frameworkSettings.buttons.spinButton.id)
        }

        if (!isTouch_() || btn.isEnable()) {
            if (freeSpinsManager_.getIsInFs() || freeRoundsManager_.getIsInFr()) return;
                spinButton.showSelector();
                buttonManager_.applyState("APNH");
                setAutoPlayState_(1);
        }
        
    }

    function doSetup_(setupJson) {
        setTimeout(delayedDoSetup_,500,setupJson);
    }

    function delayedDoSetup_(setupJson){
        setup = new Setup(setupJson);

        if (lineConfig.line)lineConfig.line.lines = [];
        for (var a in setupJson.lines) {
            lineConfig.line.lines[setupJson.lines[a].id] = setupJson.lines[a]
            if (lineConfig.line.lineColours!=null && lineConfig.line.lineColours[a]!=undefined)lineConfig.line.lines[setupJson.lines[a].id].color = lineConfig.line.lineColours[a];
        }
        autoPlayValues = setupJson.autoPlayValues;
        if(loginVars.getRegParams().jurisdiction !="mt" && loginVars.getRegParams().jurisdiction !="se" && loginVars.getRegParams().jurisdiction !="uk" && loginVars.getRegParams().jurisdiction !="it" && loginVars.getRegParams().jurisdiction !="es" && loginVars.getRegParams().jurisdiction !="co" && loginVars.getRegParams().jurisdiction !="be") {
            autoPlayValues.push(999);
        }
        autoPlayValues=checkMaxApValue_(autoPlayValues);
        defaultAutoPlay = autoPlayValues[1] //Store default auto play value
        betValues = [];

        //if we are on a client that requires unique bet values request
        if (uniqueBetValues && ReelConfig.newComm!=true) {

            communicationManager_.uniqueBetValuesRequest().done(function(data) {
                //handle response and show message here
                for (var i in data.response.betValues) {
                    if (getMaxBet_(data.response.betValues[i])) betValues.push(Util.formatNumber(data.response.betValues[i], 2));
                }
                if (data.response.default!=null && data.response.default!=undefined){//default from server
                    if (getMaxBet_(data.response.default))betValues.default=Util.formatNumber(data.response.default,2);
                }else if (setupJson.status !=null && setupJson.status.stake>0){//default from stake setup response
                    if (setupJson.status !=null && setupJson.status.stake>0){
                        if (getMaxBet_(setupJson.status.stake/100))betValues.default=(setupJson.status.stake/100);
                    }
                }else{//just in case....
                    if (getMaxBet_(betValues[0])) betValues.default=betValues[0];
                }

                loader_.hideLoader(initGameClasses_); //init All game classes
                buyInDisableOvverridde=(data.response.buyInDisabled!=undefined && data.response.buyInDisabled=="true")?true:false; //asked to disable buyin from the getbetvalue response (on old louis games only)
                gotBetValues_=true;
            });
        } else {
            //handle response and show message here
            for (var i in setupJson.betValues) {
                if (getMaxBet_(setupJson.betValues[i]))betValues.push(Util.formatNumber(setupJson.betValues[i], 2));
            }
            if (setupJson.status !=null && setupJson.status.stake>0){
                if (getMaxBet_( setupJson.status.stake/100))betValues.default=Util.formatNumber((setupJson.status.stake/100),2);
            }
            gotBetValues_=true;
            loader_.hideLoader(initGameClasses_); //init All game classes
            paytableAssets.pages[0].rtp[0]=setupJson.rtp;
            paytableAssets.pages[0].rtp[1]=setupJson.rtp;
            paytableAssets.pages[0].rtp[2]=setupJson.rtp;
        }
        handleDeHeader_();
    }

    function openBetOptions_() {

        isMobile_ ? betValueSelector.toggleOpen() : betValueBox.toggleOptionsOpen();

    }

    function checkAutoPlay_() {
        if (getCanAutoplay_()) {
            settings_.getAutoPlaySettings().doAutoPlay();
        }
    }

    function hideApSettings_() {

        isMobile_ ? spinButton.hideSelector() : autoPlayBox.closeSettings();
    }

    function hideBetSettings_() {

        isMobile_ ? betValueSelector.hideSelector() : betValueBox.closeSettings();
    }

    function closeApMenu_() {
            isMobile_ ? spinButton.hideSelector() : autoPlayBox.closeMenu();
        }

    function closeBetMenu_() {
        isMobile_ ? betValueSelector.hideSelector() : betValueBox.closeSettings();
    }

    function hideAllSettings_() {
        hideApSettings_();
        hideBetSettings_();
    }

    function openPayTable_(page) {
        if (isTouch_()){
            if (buttonManager_.getButton(frameworkSettings.buttons.spinButton.id).isEnable() ||  $("#menuMobile").hasClass("hidden")==false ) {
                if( $("#menuMobile").hasClass("hidden")==false ){
                    menu_.getMainMenu().toggleMenu(false, $("#menuMobile"), menu_.getMainMenu());
                    $("#menuButton").find("img").attr("src", frameworkAssets.assets.menuBtn);
                }
                //Can only show paytable is menu is not open
                paytable.toggle(page); //Show/hide paytable
            }

        }else{
            if (buttonManager_.getButton(frameworkSettings.buttons.spinButton.id).isEnable() ||   $("#menuContainer").hasClass("hidden")==false ) {
                if($("#menuContainer").hasClass("hidden")==false ){
                    menu_.getMainMenu().toggleMenu(false, $("#menuContainer"), menu_.getMainMenu());
                }
                //Can only show paytable is menu is not open
                paytable.toggle(page); //Show/hide paytable
            }


        }

    }

    function setAutoPlayState_(newState) {
        settings_.getAutoPlaySettings().setApState(newState);
    }

    function doReplay_(json) {
        menu_.showReplay(json);
    }

    function showLoadingScreen_() {
        $("#loadingScreen").removeClass("hidden");
        $("#gameFramework").addClass("hidden");
    }

    function hideLoadingScreen_() {
        $("#loadingScreen").addClass("hidden");
        $("#gameFramework").removeClass("hidden");

    }

    function showFramework_() {
        logger("showFramework_");
        $("#gameFramework").removeClass("hidden");
        var footer = document.getElementById('footer') //Retrieve footer new ui footer node
        if (footer!=undefined)footer.style.zIndex = 7                        //Show footer once game initialized
    }

    function hideFramework_() {
        logger("hideFramework_");
        $("#gameFramework").addClass("hidden");

    }

    function showBetConsole_() {
        $("#betconsole").removeClass("hidden");
    }

    function updateSmallMessageText_(message) {
        if (ReelConfig.newUI) {
            if (framework.isTouch()&& window.innerHeight > window.innerWidth) {
                //portrait
                $("#footer-top-win").html(message);
            } else {
                $("#footer-bottom-message").html(message);
            }
        }else{
            var elem = displayManager_.getText("messages");
            elem.setText(message);
        }
    }

    function getSmallMessageText_() {
        if (ReelConfig.newUI) {
            if (window.innerHeight > window.innerWidth) {
                //portrait
                return $("#footer-top-win").html();
            } else {
                return $("#footer-bottom-message").html();
            }
        }else{
            var elem = displayManager_.getText("messages");
            return elem;
        }
    }

    function resize_(_x, _y, _s) {
        if (ReelConfig.newUI) {
            if (isTouch_()==true && ReelConfig.newUI==true) {

                if (window.innerHeight > window.innerWidth) {
                    //portrait
                    if (isMobile_) {
                        GAME_WIDTH = 720;
                        GAME_HEIGHT = 1280;
                        orientation = 'portrait';
                    } else {
                        GAME_WIDTH = 720;
                        GAME_HEIGHT = 1280;
                    }
                } else {
                    if (isMobile_) {
                        GAME_WIDTH = 1280;
                        GAME_HEIGHT = 720;
                        orientation = 'landscape';
                    } else {
                        GAME_WIDTH = 1280;
                        GAME_HEIGHT = 720;
                    }
                }

                var width = _x > 0 ? _x : window.innerWidth;
                var height = _y > 0 ? _y : window.innerHeight;

                var scaleFactorx = width / GAME_WIDTH;

                var scaleFactorY = height / GAME_HEIGHT;

                var scaleFactor = _s > 0 ? _s : Math.min(scaleFactorx, scaleFactorY);

                // $("#mainViewport").css("transform", "scale(" + scaleFactor + ") translate3d(0px,0px,0px)");

                //If portrait
                if (orientation === 'portrait') {

                    $("#mainViewport").css("height", window.innerHeight + "px");
                    $("#mainViewport").css("width", window.innerWidth + "px");

                    document.getElementById('mainViewport').style.removeProperty('transform')

                    //If "NEW_UI"
                    if (window.newUI) {

                        //Initialize arrays for storing which side buttons are in portrait
                        var arrL = []
                        var arrR = []
                        var arrT = ['autospin', 'bet', 'spin']

                        //If controls aren't inverted
                        if (!window.newUI._settings.inverted()) {

                            //Populate arrays for which side buttons are
                            arrL.push('autospin', 'sound')
                            arrR.push('bet', 'paytable')

                        }

                        //Inverted controls
                        else {

                            //Populate arrays for which side buttons are
                            arrL.push('bet', 'paytable')
                            arrR.push('autospin', 'sound')

                        }

                        //For each button
                        window.newUI.buttons.forEach(function(b_) {

                            var btn = document.getElementsByClassName(b_.id)[0] //Store button node
                            var translateX                                      //Stores translateX amount
                        var translateY                                      //Stores translateY amount

                        //If scale factor is bigger on x-axis
                        if (scaleFactorY < scaleFactorx) {
                            translateY = 0 //Don't apply translateX
                        }

                        //Calculate translateY axis when y-axis scale factor is greater than x-axis scale factor
                        else {
                            translateY = b_.id === 'spin' ? (scaleFactorY - scaleFactorx) * 350 : (scaleFactorY - scaleFactorx) * 500
                        }

                        //If UI not scaled
                            if (scaleFactor > 1) {
                                translateX = 0 //Don't apply translateX
                            }

                        //If UI isn't scaled down more than half
                            else if (scaleFactor > 0.48 && scaleFactor < 1) {
                                translateX = (100 - (scaleFactor * 100)) * 2 //Apply translateX
                            }

                            //UI is scaled down more than half
                            else {
                                translateX = (100 - (scaleFactor * 100)) * 2.5 //Apply translateX
                            }

                            //If button is on left side of UI
                            if (arrL.includes(b_.id)) {
                                btn.style.transform = 'scale(' + scaleFactor + ') translateX(' + translateX + '%)' //Calculate translateX amount
                            }

                            //If button is on right side of UI
                            else if (arrR.includes(b_.id)) {
                                btn.style.transform = 'scale(' + scaleFactor + ') translateX(-' + translateX + '%)' //Calculate translateX amount
                            }

                            //Button is in middle of UI
                            else {
                                btn.style.transform = 'scale(' + scaleFactor + ')' //Just scale button
                            }

                            //If button is on the top of portrait UI
                            if (arrT.includes(b_.id)) {
                                btn.style.transform += 'translateY(' + translateY + '%)' //Apply translateY
                            }

                        })

                    }

                }

                //Landscape
                else {

                    $("#mainViewport").css("transform", "scale(" + scaleFactor + ") translate3d(0px,0px,0px)");

                    $("#mainViewport").css("height", GAME_HEIGHT + "px");
                    $("#mainViewport").css("width", GAME_WIDTH + "px");

                    if (window.newUI) {

                        window.newUI.buttons.forEach(function(b_) {
                            document.getElementsByClassName(b_.id)[0].style.removeProperty('transform')
                        })

                    }

                }

                var actualHeight = GAME_HEIGHT * scaleFactor;
                var actualWidth = GAME_WIDTH * scaleFactor;

                var top = Math.ceil((height - actualHeight) / 2);

                var left;

                //If landscape
                if (orientation === 'landscape') {
                    left = Math.ceil((width - actualWidth) / 2) - 1;
                }

                //Portrait
                else {
                    left = 0;
                    top = 0;
                }

                $("#mainViewport").css("top", top + "px");

                $("#mainViewport").css("left", left + "px");


                //Retrieve old orientation
                var old = orientations.filter(function (o_) {
                    return o_ !== orientation;
                });
                if (framework.isTouch() != true) return;
                //If "NEW_UI"
                if (ReelConfig.newUI) {

                    var messageScreen = document.getElementsByClassName('message__container')[0] //Store message screen node

                    //If message screen showing
                    if (messageScreen !== undefined) {

                        //Apply orientation styling
                        messageScreen.classList.remove(old)
                        messageScreen.classList.add(orientation)

                    }

                }

                if (gameGUI) {

                    //setTimeout(function() {
                    gameGUI.swipeRequest();
                    // }, 500);
                }
            }else{

                logger("RESIZE");

                var width = _x > 0 ? _x : window.innerWidth;
                var height = _y > 0 ? _y : window.innerHeight;

                var scaleFactorx = width / GAME_WIDTH;

                var scaleFactorY = height / GAME_HEIGHT;

                var scaleFactor = _s > 0 ? _s : Math.min(scaleFactorx, scaleFactorY);

                $("#mainViewport").css("transform", "scale(" + scaleFactor + ") translate3d(0px,0px,0px)");

                $("#mainViewport").css("width", GAME_WIDTH + 2 + "px");
                $("#mainViewport").css("height", GAME_HEIGHT + "px");

                var actualHeight = GAME_HEIGHT * scaleFactor;
                var actualWidth = GAME_WIDTH * scaleFactor;

                var top = Math.ceil((height - actualHeight) / 2);
                var left = Math.ceil((width - actualWidth) / 2) - 1;

                $("#mainViewport").css("top", top + "px");
                $("#mainViewport").css("left", left + "px");

            }
        }else{

           var width = _x > 0 ? _x : window.innerWidth;
            var height = _y > 0 ? _y : window.innerHeight;

            var scaleFactorx = width / GAME_WIDTH;

            var scaleFactorY = height / GAME_HEIGHT;

            var scaleFactor = _s > 0 ? _s : Math.min(scaleFactorx, scaleFactorY);

            $("#mainViewport").css("transform", "scale(" + scaleFactor + ") translate3d(0px,0px,0px)");

            $("#mainViewport").css("width", GAME_WIDTH + 2 + "px");
            $("#mainViewport").css("height", 688 + "px");

            var actualHeight = GAME_HEIGHT * scaleFactor;
            var actualWidth = GAME_WIDTH * scaleFactor;

            var top = Math.ceil((height - actualHeight) / 2);
            var left = Math.ceil((width - actualWidth) / 2) - 1;

            $("#mainViewport").css("top", top + "px");
            $("#mainViewport").css("left", left + "px");

            if (gameGUI) {

                //setTimeout(function() {
                gameGUI.swipeRequest();
                // }, 500);
            }
        }
        console.log("RESIZE  " + GAME_HEIGHT +  " " +GAME_WIDTH);
    }

    function isTouch_() {

        return isMobile_;
    }

    function fullscreenEnabled_() {
        if (skipFullFlag_)return false;
        if (gameParams.clientName!=null && gameParams.clientName=="Quickfire_Malta_Betway") return false;
        if (gameParams.clientName!=null && gameParams.site!=null && gameParams.clientName.indexOf("Quickfire_dev")>=0 && Math.abs(Number(gameParams.site))== 5118) return false;
        if (gameParams.clientName!=null && gameParams.site!=null && gameParams.clientName.indexOf("Quickfire_dev")>=0 && Math.abs(Number(gameParams.site))== 5001) return false;
        if(/iPad/.test(navigator.platform) || navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform))return false; //ipad
        return screenfull.enabled && isMobile_;
    }

    var me = {
        showFramework: showFramework_,
        hideFramework: hideFramework_,
        showLoadingScreen: showLoadingScreen_,
        hideLoadingScreen: hideLoadingScreen_,
        resize: resize_,
        updateSmallMessageText: updateSmallMessageText_,
        getSmallMessageText:getSmallMessageText_,
        showBetConsole: showBetConsole_,
        isTouch: isTouch_,
        closeApMenu: closeApMenu_,
        closeBetMenu: closeBetMenu_,
        checkAutoPlay: checkAutoPlay_,
        setAutoPlayState: setAutoPlayState_,
        initClass: initClass_,
        doSetup: doSetup_,
        openBetOptions: openBetOptions_,
        fullscreenEnabled: fullscreenEnabled_,
        hideApSettings: hideApSettings_,
        hideBetSettings: hideBetSettings_,
        hideAllSettings: hideAllSettings_,
        openPayTable: openPayTable_,
        doReplay: doReplay_,
        openAp: openAp_,
        setBetValue: setBetValue_,
        getSettings: function() {

            return settings_;
        },
        setSound:function(val){
          if (menu_!=undefined) {
              var s = menu_.getSoundSwitch();
              s.doSwitch(val);
          }
        },
        setMusic:function(val){
          if (menu_!=undefined) {
              var s = menu_.getMusicSwitch();
              s.doSwitch(val);
          }
        },
        getMenu: function() {
            return menu_;
        },
        getBetValues: function() {
            return betValues;
        },

        //Hide paytable
        hidePaytable: function() {
            if (paytable != null) paytable.hide();
        },

        //Get setup object
        getSetup: function() {
            return setup;
        },

        getAutoplaySettings: function() {
            return settings_.getAutoPlaySettings();
        },

        GAME_WIDTH: GAME_WIDTH,
        GAME_HEIGHT: GAME_HEIGHT,

        getGameWidth:function () {
            return GAME_WIDTH;
        },

        getGameHeight: function() {
            return GAME_HEIGHT;
        },
        getOrientation: function() {
            return orientation;
        }


    }

    return me;
}
