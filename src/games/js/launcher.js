/**
 * @file launcher
 * @author Fab Motto <fabrizio.motta@1x2gaming.com>
 * @description This is the launcher where where games are launched and assets are loaded
 * Changelog:
 * Adam O'Brien [28-05-2021] - INT-157 new: update GAN wrapper to use the client wrapper
 */
var ids="v2.3.2";//otario buyins off
var gameClass_;
var gameGUI;
var game;
var mainDivWrapper;
var mainDiv;
var hasFocus_ = true;
var created_=false;
var barDisabled=false;
var iDisableBarTime_=1000;
var loadingAssNum_=0;
var loaded_=false;
var gameInfo;//
var iOS;
var message;
var messagesSE;
var canRotate_=true;
var buyFeatureAvailable_=false;
var clientName_="";
var clientDispName_="";
var brandedGameIDList_={};
var spinTime_=2
var buyInDisableOvverridde=false;
var localStorageFallback_={};
var noAutoplayList_=["de","uk","nl","lt","on"];
var noQuickPlayList_=["se","de","es","co","uk","ca","gr","lt","dk","on"];
var noCoinsList_=["co","es","de"];
var confirmFSList_=["uk","on"];
var threeSecList_=["se","es","co","ca","gr","uk","dk","on"];
var buyInDisableList_=["on"];
var maxBetList_={};
var disableSpaceBar_ = [3591, 3592, 3587, 3589, 4287, 3943, 4073, 3626, 3627, 3774, 3861, 3869, 3870, 3507, 3508, 3013, 3014, 3126, 2610, 2611, 2612, 2613, 2930, 4287, 3943, 4073, 3626, 3627, 3774, 3861, 3869, 3870];
var skipFullFlag_=false;
maxBetList_.de=1;
maxBetList_.gr=20;
var relaxWinUpdate_=false;
var relaxWinVal_=0;

/* this will work with different levels for different games
var maxBetList_={};
    maxBetList_.de={};
    maxBetList_.de.default=1//germany max 1 eur
    maxBetList_.gr={};
    maxBetList_.gr.default=2;  //grece max 2 eur
    maxBetList_.gr.limits=[];
    maxBetList_.gr.limits[1]={};
    maxBetList_.gr.limits[1].games=["7022","7500","7500","7501","7502","7503","7504","7505","7506","7507","7508","7509","7510","7016","7026"]; //PK
    maxBetList_.gr.limits[1].value=1.6;
    maxBetList_.gr.limits[2]={};
    maxBetList_.gr.limits[2].games=["7023"];  //1M
    maxBetList_.gr.limits[2].value=1.4;


 */



var rtpMess_="";
var gotErrorInAp_=false; //to handle communication error during autoplay
//class stores all launch params needed for gameplay and login.. TODO move to globals file
var loginVars = new LaunchParams();
var gameParams = loginVars.getGameParams();
var noSleep = new NoSleep();

framework = new Framework(gameParams.forceMobile);
//make sure we set site to negative for mobile
loginVars.setMobile(framework.isTouch());

var scriptConfigPath = "../gameJs/"+gameParams.folderName + "/config.js";

if(framework.isTouch()){
    scriptConfigPath = "../gameJs/"+gameParams.folderName + "/mobile/config.js";
}
//load the game specific config and game files
var scriptsToLoad = [scriptConfigPath, "../gameJs/"+gameParams.folderName + "/game.js"];
var local=(gameParams.path.indexOf("http://88.208.244.42/")>=0 || gameParams.path.indexOf("http://185.22.252.99/")>=0 )?true:false; //just to debug on 42 avoid using form data

if (local){
    var scriptConfigForce = "../gameJs/"+gameParams.folderName + "/force.js";
    $.getScript(scriptConfigForce, function() {
        console.log("script loaded" + loadCount);
    });
}


//to disable full screen (required to fix android browser full screen problems on samsumng browser
disableFullscreen_= function(){
    if(screenfull!=null && screenfull.exit!=null) {
        screenfull.exit();
        screenfull.enabled = false;
    }
    skipFullFlag_=true;
}


//iflorium isoftbet
window.f1x2.clientWrapperInit = new window.f1x2.ClientWrapperInit(
    {

        path: gameParams.path,
        pathCDN: gameParams.pathCDN + "f1x2games",
        clientName: gameParams.clientName,
        lobbyURL: gameParams.lobbyurl,
        jurisdiction: loginVars.getRegParams().jurisdiction,
        siteID: gameParams.site,
        gameID: gameParams.gameOriginalID,
        NYX_GCM_ENV: "NYX_GCM_ENV",
        NYX_GCM_PARAMS: "NYX_GCM_PARAMS",
        ukgcURL: gameParams.ukGCLink
    },
    {
        'game-pause': function () {
            if (buttonManager_ != undefined) buttonManager_.applyHide();
        },
        'game-resume': function () {
            if (buttonManager_ != undefined) buttonManager_.applyRestore();
            hasFocus_ = true;
        },
        'audio-enable': function () {
            if (soundManager_ != undefined) soundManager_.resumeAll();
        },
        'audio-disable': function () {
            if (soundManager_ != undefined) soundManager_.stopAll();
        },
        'help-open': function () {
            togglePT(0)
        },
        'help-close': function () {
            framework.hidePaytable();
        },
        'paytable-open': function () {
            togglePT(1)
        },
        'paytable-close': function () {
            framework.hidePaytable();
        },
        'quickspin-enable': function () {
            if (framework != undefined) framework.getMenu().setCompulsivePlayer_(true);
        },
        'quickspin-disable': function () {
            if (framework != undefined) framework.getMenu().setCompulsivePlayer_(false);
        },
        //changed this as value is now sent in
        'update-balance': function (balance) {
            balanceManager_.setBalance(balance);
            balanceManager_.forceBalanceUpdate();
        },

        'update-gameinfo': function(type_, property_, value_) {
            // Handle update-gameinfo wrapper message
            var value; // New value to determine

            // Switch on type of update
            switch (type_) {
                // Direct assignment
                case 1:
                    // Set value
                    value = value_;
                    break;

                // Append to current
                case 2:
                    // Set value
                    value =gameInfo[property_] + value_;
                    break;

                // Prepend to current
                case 3:
                    // Set value
                    value = value_+gameInfo[property_];
            }

            // Update value
            gameInfo[property_] = value;

        },
        'autoplay-disable': function () {
            if (autoPlayManager_ != undefined) {
                if (autoPlayManager_.getIsInAutoPlay()) {
                    autoPlayManager_.toggleAutoPlay();
                }
                //spinManager_.stopSpinForError();
                framework.setAutoPlayState(0);

                framework.setAutoPlayState(0);
                framework.hideApSettings();
            }
        },
        'fullscreen-disable':function (){
            screenfull.enabled=false;
        }
    }
)



var loadCount = 0;
var numScripts = scriptsToLoad.length;

for (var i = 0; i < numScripts; i++) {
    $.getScript(scriptsToLoad[i], function() {
        loadCount++;
        console.log("script loaded" + loadCount);
        if (loadCount === numScripts) {
            function iframe() {
                try {
                    return window.self !== window.top;
                } catch (e) {
                    return true;
                }
            }

            //limiting the number of servelets
            if (ReelConfig.engineNumbers!=undefined && ReelConfig.engineNumbers>0){
                ReelConfig.engineNumbers=Math.min(ReelConfig.engineNumbers,3);
            }

            var height = screen.height;
            var width = screen.width;
            var size = height > width ? height : width;
            var small = size < 1025;
            var touch = ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;
            var mobile = small && touch;

            if (mobile && iframe()) {
                document.body.classList.add('HANDLE_IFRAME');
            }

            if (gameParams.force=="Enable"){
                $('#debug').css("visibility","visible");
            }else{
                $('#debug').css("visibility","hidden");
            }

            f1x2.clientWrapperInit.ready.then(function() {
                start_(); //we've loaded game specific scripts lets start the game...
            });

        }
    });
}

//start the game
function start_() {
    mainDivWrapper = $('#mainDivWrapper');
    mainDiv = $('#mainDiv', mainDivWrapper);
    game = new Phaser.Game(1280, 720, displayManager.render, 'gameContainer', { preload: preload, create: create, update: update, render: render }, true,true,null,false);
    game.config.setForceTimeOut = true;
    lastCheck = new Date().getTime();
    setTimeout(adjust, 200);
}

function preload() {
    //get common language file from language server
    game.load.json("translations_common", gameParams.pathCDN + "f1x2games/properties/ironDog/lang/common/local_"+gameParams.lang+".json");
    //get game specific text from language server
    game.load.json("translations_game", gameParams.pathCDN + "f1x2games/properties/ironDog/lang/"+gameParams.folderName + "/localization/local_"+gameParams.lang+".json");

    //loading sounds
    for (a in loaderAssets.sounds) {
        game.load.audio(a, loaderAssets.sounds[a].name);
    }

    //loading loader graphic assets
    for (a in loaderAssets.assets) {
        loadingAssNum_++;
        game.load.image(a, loaderAssets.assets[a]);
    }

    //if playtech on the hu, they need the UK GC logo, old UI only, new up to Joe
    if(loginVars.getRegParams().jurisdiction=="uk" && gameParams.clientName=="theHub_malta_playtech" && ReelConfig.newUI!=true) game.load.image("gc", "gui/generic/img/gc.png" );
    if (loaderAssets.loaderMc.ironDogLogo!=null)game.load.atlas("ironDogLogo", loaderAssets.loaderMc.ironDogLogo.sprite, loaderAssets.loaderMc.ironDogLogo.json);
    if (loaderAssets.loaderMc.staticLoaderLogo!=null)game.load.image("staticLoaderLogo", loaderAssets.loaderMc.staticLoaderLogo.sprite);
    //relax doesn't want the logo anymore if(gameParams.clientName.toUpperCase().indexOf("RELAX")>=0)game.load.image("relaxLogo", "gui/generic/img/Logo_PB_White.png"); //load specific logo



    if (gameParams.clientName=="DEV_139"){
        gameParams.clientName="NYX";
    }
    brandedGameIDList_[gameParams.gameOriginalID]=[];
    if (loaderAssets.loaderMc.staticLoaderLogoClient!=null){
        if (gameAssets.clientAssets!=null) {
            if (gameParams.folderName.indexOf("branded")>=0) {
                for (var id in gameAssets.clientAssets.conf) {
                    brandedGameIDList_[gameParams.gameOriginalID].push(id);
                }
            }
            if (gameAssets.clientAssets.conf[gameParams.gameOriginalID]!=undefined && gameAssets.clientAssets.conf[gameParams.gameOriginalID][gameParams.clientName] != undefined) {
                clientName_ = gameParams.clientName;//
                clientDispName_ = gameAssets.clientAssets.conf[gameParams.gameOriginalID][gameParams.clientName].name;
                if (gameAssets.clientAssets.conf[gameParams.gameOriginalID][gameParams.clientName].disableBuyIn!=undefined){   //ovverrides backend parameter as NYX sometimes doesn't send it right. works only with multiple gameIDs configured
                    //buyInDisableOvverridde=true; removed as now handled by CAS
                }
            } else {
                if(gameAssets.clientAssets.conf[gameParams.gameOriginalID]!=undefined) {
                    for (var a in gameAssets.clientAssets.conf[gameParams.gameOriginalID]) {
                        for (var b in gameAssets.clientAssets.conf[gameParams.gameOriginalID][a]) {
                            var cn = (gameParams.pathCDN.indexOf("1x2-cloud") >= 0) ? gameParams.clientName + "/STAGE" : gameParams.clientName;
                            if (cn.indexOf(b) >= 0) {
                                var siteID = gameParams.site;
                                siteID = !isNaN(siteID) ? Math.abs(siteID) : siteID[0] === '-' ? siteID.replace('-', '') : siteID;
                                if (gameAssets.clientAssets.conf[gameParams.gameOriginalID][a][b].indexOf("*")==0 || gameAssets.clientAssets.conf[gameParams.gameOriginalID][a][b].indexOf(siteID.toString()) >= 0) {
                                    clientName_ = a; //found clientname = siteid
                                    clientDispName_ = gameAssets.clientAssets.conf[gameParams.gameOriginalID][a].name;
                                    if (gameAssets.clientAssets.conf[gameParams.gameOriginalID][a].disableBuyIn!=undefined){   //ovverrides backend parameter as NYX sometimes doesn't send it right. works only with multiple gameIDs configured
                                        //buyInDisableOvverridde=true; removed as now handled by CAS
                                    }
                                    break;
                                }
                            }
                        }
                    }
                }
            }

            if (gameParams.gameOriginalID==7030) {
                clientName_="BGT";
                clientDispName_="Britain's Got Talent";
            }
            if (gameParams.gameOriginalID==7032) {
                clientName_="BGT";
                clientDispName_="";
            }   
            //clients  image assets
            var file = loaderAssets.loaderMc.staticLoaderLogoClient.path + clientName_ + "/" + loaderAssets.loaderMc.staticLoaderLogoClient.name;
            game.load.image("staticLoaderLogo", file);
        }else{
            if(gameParams.gameOriginalID=="7026"){//hanldels christmas megaways that has similar assets and need this for tumbling correclty
                brandedGameIDList_[gameParams.gameOriginalID].push(gameParams.gameOriginalID);
            }
        }
    }




    if( loaderAssets.loaderMc.progressBar)game.load.atlas("progressBar", loaderAssets.loaderMc.progressBar.sprite, loaderAssets.loaderMc.progressBar.json);

    game.load.enableParallel = 1;
}

function render() {}

function update() {

}

function create() {
    //phaser game created, start loading loader gfx and all the other assets

    Translate.translationsGame = (game.cache.getJSON("translations_game") != null) ? game.cache.getJSON("translations_game").Messages : null;
    Translate.translationsGeneral = (game.cache.getJSON("translations_common") != null) ? game.cache.getJSON("translations_common").Messages : null;
    Translate.parseLang();

    created_=true;
    setTimeout(continueLoading_, 2000);
}

function continueLoading_(){
    clientMessageSend("load-start");
    loaderManager_ = new Loader(game);
    var canvas = $('#gameContainer canvas');
    var ctx = canvas.context;
    ctx.mozImageSmoothingEnabled = true;
    ctx.webkitImageSmoothingEnabled = true  ;
}

function initSounds_() {
    //instantiate less important sounds
    if (gameClass_!= null && gameClass_.getOnGame()==true){
        soundManager_.startSounds();
        setTimeout(gameClass_.startSounds,500);
    }else{
        setTimeout(initSounds_, 500);
    }
}

function initGame_() {
    //called when the loader complete (but still visible) to start setup communication request
    loaded_ = true;
    setTimeout(loginVars.doLogin, 500);
}

function initGameClasses_(){
    //called after the setup response arrived from the
    //init all the games classes, the order MUST not be changed, first of all the displayManager, then messagebox and then GUI and Game
    if (displayManager_!=undefined)return;
    if (loginVars.getCurrencySmb()!=undefined) {
        displayManager_ = new DisplayManager(game);
        messageBox_ = new MessageBox(game);
        gameGUI = new GuiFullScreen();    //just handle fullscreen
        gameClass_ = new Game(game);

        iOS = true;///iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        if (iOS == false) {
            completeInit_();
        } else {
            if (framework != undefined) framework.hideFramework();

            if (ReelConfig.newUI!=true || framework.isTouch()!=true) {
                message = new MessageScreen(
                    "",
                    "",
                    Translate.do("Activate sounds?"), [
                        {
                            "action": function () {
                                message.destroy();
                                continueWOS_();

                            },

                            "label": "NO"

                        },
                        {
                            "action": function () {
                                message.destroy();
                                continueWS_();

                            },

                            "label": "OK"

                        }


                    ],
                    false,
                    true
                );
            }else{
                setTimeout(continueWOS_,500);
            }
        }
    }

    window.f1x2gan && window.f1x2gan.main && window.f1x2gan.main.gameLoaded(); //Flag game loaded

}

function doYes(){
    localStorageSetItem('slots__sound', true);
    localStorageSetItem(gameParams.gameName + '__effects__on', true);
    localStorageSetItem(gameParams.gameName + '__bg__on', true);
    completeInit_();
}

function doNo(){
    localStorageSetItem('slots__sound', false);
    localStorageSetItem(gameParams.gameName + '__effects__on', false);
    localStorageSetItem(gameParams.gameName + '__bg__on', false);
    completeInit_();
}

function continueWS_(){
    localStorageSetItem('slots__sound', true);
    localStorageSetItem(gameParams.gameName + '__effects__on', true);
    localStorageSetItem(gameParams.gameName + '__bg__on', true);
    completeInit_();
    clientMessageSend("audio-enable");
}

var muteGcm_=false;

function continueWOS_(){
    muteGcm_=true;
    localStorageSetItem('slots__sound', false);
    localStorageSetItem(gameParams.gameName + '__effects__on', false);
    localStorageSetItem(gameParams.gameName + '__bg__on', false);
    completeInit_();
    clientMessageSend("audio-disable");
}

function completeInit_(){
    game.enableAudioContext();
    iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (iOS==true && framework != undefined) framework.showFramework();
    eventManager_ = new EventManager();
    winManager_ = new WinManager(game, gameClass_);
    timeHandle_ = new TimeUpdater(game, displayManager_.getText("time"));
    spinManager_ = new SpinManager(game, gameClass_);
    //paytableManager_= new PaytableManager(game, gameClass_);
    winAmtManager_ = new WinAmtManager(game, gameClass_);
    lineWinAmtManager_= new LineWinAmtManager(game,gameClass_);
    soundManager_ = new SoundManager(game, gameClass_);
    autoPlayManager_ = new AutoPlay(game, gameClass_);
    freeSpinsManager_ = new FreeSpinsManager(game, gameClass_);
    freeRoundsManager_= new FreeRoundsManager(game, gameClass_);
    multiplierManager_= new MultiplierManager(game,gameClass_);
    wildManager_= new WildManager(game,gameClass_,ReelConfig);
    scatterManager_= new ScatterManager(game,gameClass_);
    bonusManager_= new BonusManager(game,gameClass_);
    lineManager_ = new LineManager(game, gameClass_);
    balanceManager_ = new BalanceManager(game, gameClass_);
    twinReelManager_ = new TwinReelsManager(game,gameClass_);
    guiBottomBar_ = new BottomBar(game,gameClass_);
    idleCycleManager_= new IdleCycleManager(game,gameClass_);
    creditsCoinsDisplay_ = new CashCreditsDisplay(game,gameClass_);
    buttonManager_ = new ButtonStatesManager(game,gameClass_);
    jackpotManager_= new JackpotManager(game,gameClass_);
    previewManager_= new PreviewManager(game, gameClass_);
    freeRoundMessageReq_= new FreeRoundsReqBox(game);
    featureMessageReq_= new BuyFeatureReqBox(game);
    framework.initClass();
    if (clientName_!="" && clientName_!="default")timeHandle_.setPreText(clientDispName_); //just for branded MW

    if (gameParams.channel=="desktop" && gameParams.clientName!="" && gameParams.clientName.indexOf("NYX")>=0 && gameParams.site!=null && gameParams.site=="453") {
        // force remove home button on desktop for BETPOINT.IT - RQST-1779
        gameParams.lobbyurl = window.location.href;
        gameParams.hideHome = true;
    }

    if(gameParams.clientName.toUpperCase().indexOf("RELAX")>=0 && gameParams.hideHome!=true) {//relax will show the home button on desktop too if hideHome not true
        if (gameParams.lobbyurl == "") gameParams.lobbyurl = window.history.back();
        $(".sub__menu__icon.HomeButton").show();
    }else if (gameParams.clientName.toUpperCase().indexOf("RELAX")<0 && gameParams.lobbyurl!="" && gameParams.lobbyurl!=null && gameParams.lobbyurl!= undefined && gameParams.hideHome!=true){
        //show for other clients if lobbyUrl is passed
        $(".sub__menu__icon.HomeButton").show();
    }else{
        $(".sub__menu__icon.HomeButton").hide();
        if (gameParams.clientName.toUpperCase().indexOf("RELAX")>=0 ){
            gameParams.lobbyurl=""; //if hidehome remove the lobbyurl should remove the button too
        }
    }


    clientMessageSend('quickspin-disable'); //relax integration

    //somewhere in launcher.js:
    new f1x2.GcmFunctions(
        function () {
            if (autoPlayManager_!=undefined) {
                if (autoPlayManager_.getIsInAutoPlay()) {
                    autoPlayManager_.toggleAutoPlay();
                }
                //spinManager_.stopSpinForError();
                framework.setAutoPlayState(0);
            }
        },
        function () {
        },
        function (input) {
            balanceManager_.setBalance(input);
            balanceManager_.forceBalanceUpdate()
        },
        function(){
            if (autoPlayManager_ != undefined) {
                if (autoPlayManager_.getIsInAutoPlay()) {
                    autoPlayManager_.toggleAutoPlay();
                }
                //spinManager_.stopSpinForError();
                framework.setAutoPlayState(0);

                framework.setAutoPlayState(0);
                framework.hideApSettings();
            }            
        }
    )

    // init after logged in
    messagesSE =window.f1x2.messageHandlerInit = new window.f1x2.MessageHandlerInit(
        gameParams.path,
        gameParams.pathCDN + 'f1x2games/',
        gameParams.clientName,
        [
            gameInfo.accountID,
            loginVars.getLoginParams().customerID,
            gameParams.gameID,
            loginVars.getRegParams().jurisdiction,
            gameParams.lang,
            gameParams.site,
            gameInfo.username
        ],
        [
            loginVars.getRegParams().realitycheck_uk_exit,
            gameParams.lobbyurl,
            loginVars.getRegParams().realitycheck_uk_history
        ]
    );

    f1x2.clientWrapperInit.send('update-user', {
        siteID:     gameParams.site,
        accountID:  gameInfo.accountID,
        customerID: gameInfo.customerID,
        currency:   gameInfo.currency,
        gameID:     gameParams.gameID,
        username:gameInfo.username,
        playMode:gameParams.fun_real,
        minStake: (framework.getBetValues!=undefined && framework.getBetValues.lenght>0)?framework.getBetValues[0]:0,
        maxStake: (framework.getBetValues!=undefined && framework.getBetValues.lenght>0)?framework.getBetValues[lenght]:0
    });

    //GCM Param reader.
    var gcmParamsRaw =   gameParams.gcmParams;
    var gcmParams = gcmParamsRaw ? Object.fromEntries(new URLSearchParams(gcmParamsRaw.substring(gcmParamsRaw.indexOf("?")), gcmParamsRaw.length)) : {};
    //Check if NYX hiding session bar.
    if(gcmParams.realwinloss != 'n') {
        // session client wrapper
        window.f1x2.SessionBarInit = new window.f1x2.SessionBarInit(
            {
                currency: gameInfo.currency,
                language: gameParams.lang,
                jurisdiction: loginVars.getRegParams().jurisdiction,
                clientName: gameParams.clientName,
                siteID: gameParams.site,
                clientID: gameInfo.customerID,
                timerAutostart: true,
                pathCDN: gameParams.pathCDN + 'f1x2games/'
            }

        )

        f1x2.SessionBarInit.ready.then(function() {
            if(window.f1x2.SESSION_BAR) {
                window.f1x2.SESSION_BAR.setupDefault();
                window.f1x2.SESSION_BAR.use=true;
            }
        });
    }


    if (f1x2.gcmConnected) {
        gcmCalls_("MUTE",true,true);
    }

}

function adjust() {

    if (ReelConfig.newUI==true){
        if (loaderManager_!=undefined && (gameClass_==undefined || gameClass_.getOnGame==undefined))loaderManager_.switchPortrait((getOrientation()=="portrait")?false:true);

        canRotate_=false;
        if (gameParams.force == "Enable") {
            if (ReelConfig.ForceFeature != null && ReelConfig.ForceFeature!= undefined ) {
                //init force chk
                for (var a = 1; a <= 20; a++) {
                    if (ReelConfig.ForceFeature["ch" + a] != undefined) {
                        document.getElementsByName("ch" + a)[0].value = ReelConfig.ForceFeature["ch" + a].value;
                        document.getElementsByName("ch" + a)[0].style.visibility = "visible";
                        document.getElementsByName("ch" + a)[0].nextSibling.innerHTML = ReelConfig.ForceFeature["ch" + a].description;
                        document.getElementsByName("ch" + a)[0].nextSibling.style.visibility = "visible";
                        if (document.getElementsByName("ch" + a) != null && document.getElementsByName("ch" + a)[0] != null) {
                            document.getElementsByName("ch" + a)[0].checked = false;
                        }
                    }
                }
            }

            $('#debug').css("visibility", "visible");
            document.getElementsByName("chForceEnable")[0].style.visibility = "visible";
            document.getElementsByName("chForceEnable")[0].nextSibling.innerHTML="Force Enabled"
            document.getElementsByName("chForceEnable")[0].nextSibling.style.visibility = "visible";
            gameParams.singleTexts="Enabled";   //forcing matrix for PK on 139 (especially)

            if (gameParams.singleTexts  == "Disable" || gameParams.singleTexts=="" ) {//avoid matrix with gameParams.singleTexts==""
                if ( gameParams.gameOriginalID != "7020")$(".debugTxtSingle").addClass('hidden');
            }
            if (gameParams.seeding  == "Disable") {
                $(".seedTxt").addClass('hidden');
                $(".debugTxt").addClass('hidden');
            }

            document.getElementsByName('hideDebug')[0].addEventListener('click', function (event) {
                if ($("#debug").hasClass("hidden")) {
                    $("#debug").removeClass('hidden')
                } else {
                    $("#debug").addClass('hidden')
                }
            });
        } else {
            $('#debug').css("visibility", "hidden");
            $('#hideDebug').css("visibility", "hidden");
        }

        if (framework.isTouch()==true && ReelConfig.newUI==true){

            console.log("adjust width " + window.innerHeight)

            if (gameClass_!=null && gameClass_.hideGame!=null)gameClass_.hideGame(true);

            var divgame = document.getElementById("gameContainer");
            divgame.style.width = window.innerWidth * window.devicePixelRatio+ "px";
            divgame.style.height = window.innerHeight* window.devicePixelRatio + "px";

            framework.resize();//resize the framework

            if (window.innerHeight > window.innerWidth) {
                //portrait
                game.scale.setGameSize(window.innerWidth* window.devicePixelRatio, window.innerHeight* window.devicePixelRatio); // et voila!
                if (gameClass_ != undefined && gameClass_.setPortrait!=null) {
                    gameClass_.setPortrait(true);
                    if (loaderManager_!=undefined)loaderManager_.getLoadingGroup().x=-280;
                }
            } else {
                game.scale.setGameSize(1280, 720); // et voila!
                if (gameClass_ != undefined && gameClass_.setPortrait!=null) {
                    gameClass_.setPortrait(false);
                    if (loaderManager_!=undefined)loaderManager_.getLoadingGroup().x=0;
                }

            }

        }else{
            var divgame = document.getElementById("gameContainer");
            divgame.style.width = window.innerWidth + "px";
            divgame.style.height = window.innerHeight + "px";

            framework.resize();//resize the framework
        }
        setTimeout (unlockCanRotate_,500);
    }else{
        if (gameParams.force == "Enable") {
            if (ReelConfig.ForceFeature != null && ReelConfig.ForceFeature!= undefined ) {
                //init force chk
                for (var a = 1; a <= 20; a++) {
                    if (ReelConfig.ForceFeature["ch" + a] != undefined) {
                        document.getElementsByName("ch" + a)[0].value = ReelConfig.ForceFeature["ch" + a].value;
                        document.getElementsByName("ch" + a)[0].style.visibility = "visible";
                        document.getElementsByName("ch" + a)[0].nextSibling.innerHTML = ReelConfig.ForceFeature["ch" + a].description;
                        document.getElementsByName("ch" + a)[0].nextSibling.style.visibility = "visible";
                        if (document.getElementsByName("ch" + a) != null && document.getElementsByName("ch" + a)[0] != null) {
                            document.getElementsByName("ch" + a)[0].checked = false;
                        }
                    }
                }
            }
            document.getElementsByName("chForceEnable")[0].style.visibility = "visible";
            document.getElementsByName("chForceEnable")[0].nextSibling.innerHTML="Force Enabled"
            document.getElementsByName("chForceEnable")[0].nextSibling.style.visibility = "visible";

            $('#debug').css("visibility", "visible");
            gameParams.singleTexts="Enabled";
            if (gameParams.singleTexts  == "Disable" || gameParams.singleTexts=="") {//avoid matrix with gameParams.singleTexts==""
                $(".debugTxtSingle").addClass('hidden');
            }
            if (gameParams.seeding  == "Disable") {
                $(".seedTxt").addClass('hidden');
                $(".debugTxt").addClass('hidden');
            }

            document.getElementsByName('hideDebug')[0].addEventListener('click', function (event) {
                if ($("#debug").hasClass("hidden")) {
                    $("#debug").removeClass('hidden')
                } else {
                    $("#debug").addClass('hidden')
                }
            });
        } else {
            $('#debug').css("visibility", "hidden");
            $('#hideDebug').css("visibility", "hidden");
        }


        console.log("adjust");

        var divgame = document.getElementById("gameContainer");
        divgame.style.width = window.innerWidth + "px";
        divgame.style.height = window.innerHeight + "px";

        framework.resize();//resize the framework

    }
}

function unlockCanRotate_(){
    canRotate_=true;
}

function logger(msg){
    if (gameParams.doLog=="true"){
        console.log(msg);
    }
}

function getStackTrace () {
    if (gameParams.doLog!="true")return [];
    var stack;

    try {
        throw new Error('');
    }
    catch (error) {
        stack = error.stack || '';
    }

    stack = stack.split('\n').map(function (line) { return line.trim(); });
    return stack.splice(stack[0] == 'Error' ? 2 : 1);
}

$('#debug').click(function(e) {
    //$('#debug').css("opacity",".5");
});

$(window).blur(function() {
    hasFocus_ = false;
    noSleep.disable();
    if (created_==true &&  loaded_==true && communicationManager_ != undefined) {
        if (gameClass_!=null && gameClass_.getOnGame!= null && gameClass_.getOnGame()==true) {
            soundManager_.stopAllFocus();
        }
    }
});

$(window).focus(function() {
    hasFocus_ = true;
    if (created_==true &&  loaded_==true && communicationManager_ != undefined) {
        if (gameClass_!=null && gameClass_.getOnGame!= null && gameClass_.getOnGame()==true) {
            //it's not possible to start phaser game if the window doen't have focus (buttons won't work)
            //this should prevent TweenMax to slowdown when tabbed away
            soundManager_.resumeAllFocus();
        }
    }
});

window.addEventListener('resize', function() {
    if (ReelConfig.newUI==true){
        if (framework!=null && framework.isTouch()==true && gameClass_!=null && gameClass_.hideGame!=null)gameClass_.hideGame(true);
        new Debounce(function() {  adjust(); },(gameParams.gameOriginalID >=7016)?200:500).guaranteedFire();        //new games not allowing to load directly on portrait to avoid the game going on the left on bloody iOS
    }else{
        adjust();


    }
    //alert("FS "+window.innerHeight + " "+ window.innerWidth);
});

$(window).on("orientationchange", function() {
    if (ReelConfig.newUI==true){
        if (gameGUI == undefined || spinManager_ == null) return;

        gameGUI.askFull();
    }

});

function getOrientation(){
    if ( framework.isTouch() && window.innerHeight > window.innerWidth) {
        return "portrait";
    }else{
        return "landscape";
    }
}


function checkBrowser_(){
    var ua = window.navigator.userAgent;
    // alert(/^((?!chrome|android).)*safari/i.test(window.navigator.userAgent))
    if (/MSIE 10/i.test(navigator.userAgent)) {
        // This is internet explorer 10
        return false;
    }

    if (/MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent)) {
        // This is internet explorer 9 or 11
        return false;
    }

    if (/Edge\/\d./i.test(navigator.userAgent)){
        // This is Microsoft Edge
        return false;
    }

    if(/^((?!chrome|android).)*safari/i.test(window.navigator.userAgent))
    {
        if (framework.isTouch())return true;
        return false;
    }
    if((ua.indexOf("MQQBrowser") != -1  || ua.indexOf('QQ') != -1 )  )
    {
        return false;
    }
    if((ua.indexOf("Opera") || ua.indexOf('OPR')) != -1 )
    {
        return false;
    }
    else if(ua.indexOf("Chrome") != -1 )
    {
        return true;
    }
    else if(ua.indexOf("Firefox") != -1 || ua.indexOf("Mozi") != -1 )
    {
        if (framework.isTouch())return false;
        return true;

    }
    else if((ua.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
    {
        return false;
    }
    else
    {
        return false;
    }
}

function gcmCalls_(type, arg,force){
    if (force==null || force==false) {//crap filering
        if (displayManager_.getGroup("bg") == null || (displayManager_.getGroup("bg").visible == false && framework.isTouch()!=true)) return;
        if (type == "PAID" && (freeSpinsManager_.getIsInFs() && arg > 0)) return;
        if (type == "PAID" && gameClass_.getOnGame()!= true) return;
        if (type == "BALANCE" && gameClass_.getOnGame()!= true) return;
    }

    if (type=="BALANCE") {
        if(gameParams.clientName.toUpperCase().indexOf("RELAX")<0 ) {
            f1x2.GcmSendMessage(JSON.stringify({
                type: type, data: {

                    balance: Util.formatNumber(arg, 2),

                    params: {

                        accountID: gameInfo.accountID,
                        customerID: gameInfo.customerID,
                        siteID: gameParams.site,
                        currency: gameInfo.currency,
                        gameID: gameParams.gameID

                    }

                }
            }), '*');
        }
        clientMessageSend('value-balance', arg);
    }else if (type=="BALANCESPIN"){
        if(gameParams.clientName.toUpperCase().indexOf("RELAX")<0 ) {
            f1x2.GcmSendMessage(JSON.stringify({
                type: "BALANCE", data: {

                    balance: Util.formatNumber(arg[0], 2),
                    stake: Util.formatNumber(arg[1], 2),
                    winnings: Util.formatNumber(arg[2], 2),
                    params: {

                        accountID: gameInfo.accountID,
                        customerID: gameInfo.customerID,
                        siteID: gameParams.site,
                        currency: gameInfo.currency,
                        gameID: gameParams.gameID

                    }

                }
            }), '*');
            var obj={};
            obj.balanc= Util.formatNumber(arg[0],2);
            obj.stake= Util.formatNumber(arg[1],2);
            obj.winnings= Util.formatNumber(arg[2],2);
            clientMessageSend('value-balance', obj);
        }

    }else if (type=="STAKE" || type=="PAID" || type=="LOAD" ){
        f1x2.GcmSendMessage(JSON.stringify({ type: type, data: Util.formatNumber(arg,2)
        }), '*');
    }else if (type=="MUTE"){
        f1x2.GcmSendMessage(JSON.stringify({ type: type, data: arg
        }), '*');
    }else {
        f1x2.GcmSendMessage(JSON.stringify({ type: type}), '*');
    }
}
var state_="";
function clientMessageSend(msg,args) {
    console.log("client message  " + msg + " : " + args);
    if(gameParams.clientName.toUpperCase().indexOf("RELAX")<0 ) {
        if (msg == "play-end" && window.f1x2.SESSION_BAR != undefined) {
            //UKGC sesionbar
            window.f1x2.SESSION_BAR.updateNet(args);
        }

        if (args != undefined)
            f1x2.clientWrapperInit.send(msg, args);
        else
            f1x2.clientWrapperInit.send(msg);

    }
    //indecent fix to avoid sending value win after play end
    if(gameParams.clientName.toUpperCase().indexOf("RELAX")>=0 ) {
        if (msg == "value-win" ) {
            relaxWinVal_ = args;
            clientRelaxMessageSend("value-win", relaxWinVal_);
            return;
        }else if (msg=="play-start"){
            relaxWinVal_ = 0;
            clientRelaxMessageSend(msg, undefined);
            setTimeout(clientRelaxMessageSend,100,"value-win", relaxWinVal_);
        }else if (msg=="play-end"){
            if (state_!="play-end") {
                clientRelaxMessageSend("value-win", args);
                setTimeout(clientRelaxMessageSend, 100, "play-end");
                state_ = "play-end";
                relaxWinVal_ = 0;
            }
            return
        }else if (msg=="load-end"){
            clientRelaxMessageSend(msg, undefined);
            setTimeout(clientRelaxMessageSend,100,"value-win", 0);
        }else if (msg=="value-stake"){
            setTimeout(clientRelaxMessageSend,100,"value-stake", args);
            return;
        }else{
            setTimeout(clientRelaxMessageSend,100,msg, args);
            return;
        }
    }else{

    }
}

function clientRelaxMessageSend(msg,args){
    console.log("Relax message  " + msg +" : "+ args);
    //indecent fix to avoid sending value win after play end

    if (args!=undefined)
        f1x2.clientWrapperInit.send(msg,args);
    else
        f1x2.clientWrapperInit.send(msg);
}

//Initialise Gameiom script
new window.f1x2.GameiomHandler(

    function() {
        buttonManager_.applyHide();
        exitFullScreen();
    },

    function() {
        buttonManager_.applyRestore();
        enterFullScreen();
    }

);

function exitFullScreen(){
    //gameION, fullscreen on android prevent their RC message to show
    if (framework.isTouch() && screenfull.isFullscreen) {
        screenfull.exit();
        screenfull.enabled = false;
    }
}

function enterFullScreen(){
    //restore the fullscreen after message
    if (framework.isTouch() && !screenfull.isFullscreen) {
        if (screenfull.request!=undefined)screenfull.request(document.body);
    }
}

//Handle GCM mute sound option
f1x2.gcmMuteOption = function(v_) {
    if (f1x2.gcmConnected) {
        if (v_ == true) {
            soundManager_.stopAll();
        } else {
            soundManager_.resumeAll();
        }
    }
    //Set sound on/off
    //v_ = true - set sound off (mute)
    //v_ = false - set sound on (unmute)
}

//Handle Relax paytable toggle
f1x2.relaxPaytable = function(v_) {
    // if (f1x2.gcmConnected) {
    if (v_ == true) {
        soundManager_.stopAll();
    } else {
        soundManager_.resumeAll();
    }
    //}
    //Set sound on/off
    //v_ = true - set sound off (mute)
    //v_ = false - set sound on (unmute)
}



var pt_=-1;
function togglePT(i){
    //toggle the page if already open or opens one from game guide or paytable according to the "i" parameter. just for relax
    if (pt_>=0 &&  $('#PayoutIcon').hasClass('active')){
        if (i==0){
            framework.hidePaytable();
            framework.openPayTable(0);
        }else{
            framework.hidePaytable();
            pt_=-1;
        }
    }else if (pt_>=0 && $('#GameGuideIcon').hasClass('active')){

        if (i==1){
            framework.hidePaytable();
            framework.openPayTable(1);
        }else{
            framework.hidePaytable();
            pt_=-1;
        }
    }else{
        framework.hidePaytable();
        framework.openPayTable(i);
    }
}


//check through nested pahser groups returning the number of objects
function checkContent_(obj,num){
    var child=obj.children;
    var objNum=0;
    if (child!=null) {
        objNum += child.length;
        for (var a in child)
            objNum+=checkContent_(child[a],objNum);
    }
    return objNum
}

document.body.onkeyup = function(e){
    if (e.keyCode == 32) {
        if (created_ == true && loaded_ == true && communicationManager_ != undefined) {
            if (gameClass_ != null && gameClass_.getOnGame != null && gameClass_.getOnGame() == true && framework.getSettings().getSpaceEnabled() && (autoPlayManager_ != undefined && autoPlayManager_.getIsInAutoPlay() == false)) {
                if (gameClass_.isSpinning != null && gameClass_.isSpinning()) {
                    if (gameClass_.doStop != null && getCanQuickPlay_() && spinManager_.getCompulsivePlayer() == false && freeSpinsManager_!=undefined  && freeSpinsManager_.getIsInFs()==false) gameClass_.doStop();
                    if (gameParams.gameOriginalID == "7015" && gameClass_.doWheel != null) {
                        //spin the wheel
                        gameClass_.doWheel();
                    }
                } else if (freeSpinsManager_!=undefined  && freeSpinsManager_.getIsInFs()==false  ) {
                    if (gameClass_.getWasBuyIn!=null && gameClass_.getWasBuyIn()>0)return;
                    resetAp_();
                    gameClass_.doSpin();
                }
            }
        }
        e.preventDefault();
        return !(e.keyCode == 32);
    }else if (e.keyCode == 49 && e.ctrlKey && e.shiftKey ){
        if (gameClass_.startForcing!=undefined && local)gameClass_.startForcing(1);
    }else if (e.keyCode == 50 && e.ctrlKey && e.shiftKey ){
        if (gameClass_.startForcing!=undefined && local)gameClass_.startForcing(2);
    }else if (e.keyCode == 51 && e.ctrlKey && e.shiftKey ){
        if (gameClass_.startForcing!=undefined && local)gameClass_.startForcing(3);
    }else if (e.keyCode == 52 && e.ctrlKey && e.shiftKey ){
        if (gameClass_.startForcing!=undefined )gameClass_.startForcing(4);
    }else if (e.keyCode == 53 && e.ctrlKey && e.shiftKey ){
        if (gameClass_.startForcing!=undefined && local)gameClass_.startForcing(5);
    }else if (e.keyCode == 54 && e.ctrlKey && e.shiftKey ){
        if (gameClass_.startForcing!=undefined && local)gameClass_.startForcing(6);
    }else if (e.keyCode == 55 && e.ctrlKey && e.shiftKey ){
        if (gameClass_.startForcing!=undefined && local)gameClass_.startForcing(7);
    }else if (e.keyCode == 56 && e.ctrlKey && e.shiftKey ){
        if (gameClass_.startForcing!=undefined && local)gameClass_.startForcing(8);
    }else if (e.keyCode == 57 && e.ctrlKey && e.shiftKey ){
        if (gameClass_.startForcing!=undefined && local)gameClass_.startForcing(9);
    }else if (e.keyCode == 48 && e.ctrlKey && e.shiftKey ){
        //
        // console.log("hack")
        // noAutoplayList_=["de","nl"];
        // gameParams.force="Enable"
        // if (ReelConfig.ForceFeature != null && ReelConfig.ForceFeature!= undefined ) {
        //     //init force chk
        //     for (var a = 1; a <= 20; a++) {
        //         if (ReelConfig.ForceFeature["ch" + a] != undefined) {
        //             document.getElementsByName("ch" + a)[0].value = ReelConfig.ForceFeature["ch" + a].value;
        //             document.getElementsByName("ch" + a)[0].style.visibility = "visible";
        //             document.getElementsByName("ch" + a)[0].nextSibling.innerHTML = ReelConfig.ForceFeature["ch" + a].description;
        //             document.getElementsByName("ch" + a)[0].nextSibling.style.visibility = "visible";
        //             if (document.getElementsByName("ch" + a) != null && document.getElementsByName("ch" + a)[0] != null) {
        //                 document.getElementsByName("ch" + a)[0].checked = false;
        //             }
        //         }
        //     }
        // }
        //
        // $('#debug').css("visibility", "visible");
        // document.getElementsByName("chForceEnable")[0].style.visibility = "visible";
        // document.getElementsByName("chForceEnable")[0].nextSibling.innerHTML="Force Enabled"
        // document.getElementsByName("chForceEnable")[0].nextSibling.style.visibility = "visible";
        // gameParams.singleTexts="Enabled";   //forcing matrix for PK on 139 (especially)
        //
        // if (gameParams.singleTexts  == "Disable" || gameParams.singleTexts=="" ) {//avoid matrix with gameParams.singleTexts==""
        //     if ( gameParams.gameOriginalID != "7020")$(".debugTxtSingle").addClass('hidden');
        // }
        // if (gameParams.seeding  == "Disable") {
        //     $(".seedTxt").addClass('hidden');
        //     $(".debugTxt").addClass('hidden');
        // }
        //
        // document.getElementsByName('hideDebug')[0].addEventListener('click', function (event) {
        //     if ($("#debug").hasClass("hidden")) {
        //         $("#debug").removeClass('hidden')
        //     } else {
        //         $("#debug").addClass('hidden')
        //     }
        // });
        //
        // $('#debug').css("visibility","visible");
        // $('#hideDebug').css("visibility", "visible");
        //
        // $("#autoPlay").find(".button__background").css('display', 'inline-block');
        // $("#autoPlay").css('pointer-events', 'visible');
        // window.newUI.autospin().visible = false;

    }
}

window.onkeydown = function(e) {
    return !(e.keyCode == 32);
};


function resetKeyPress_(){
    skip_=false;
}

function resetAp_() {
    if ( buttonManager_.getButton("autoPlay")!=undefined) {
        buttonManager_.getButton("autoPlay").setText("");
        buttonManager_.getButton("autoPlay").setBackGround(frameworkSettings.buttons.autoButton.bg);
    }
    apState_ = 0;
    framework.setAutoPlayState(0);

    //If "NEW_UI" or game ID > x
    if (ReelConfig.newUI && !framework.isTouch()) {
        window.newUI.autospin().state = 'START'
    }

}


/*promise to hit get balance from server*/
function getBFAvaila_() {//no longer used
    var page = "http://www.1x2-cloud-1.com/f1x2games/infrastr_generic-framework/buy-a-feature.config.json";

    if(gameParams.clientName==false )gameParams.clientName="1X2_dev";
    return $.get(page).then(function (data) {
            var config = data.client;
            var jurisdiction = data.jurisdiction;
            var sites = config[gameParams.clientName.toUpperCase()];

            //Return whether buy a feature can be used
            buyFeatureAvailable_ = !(jurisdiction[loginVars.getRegParams().jurisdiction.toUpperCase()] || sites && sites[gameParams.site])
        },
        function (responseError) {
            console.error('failure loading buy feature json', responseError);
            buyFeatureAvailable_ = false;
        });

}

function buyFeatureEnabled_(){
    if(buyInDisableList_.indexOf(loginVars.getRegParams().jurisdiction )>=0)return false;
    if(buyInDisableOvverridde)return false; //branded has additional flag on config file
    //return true if enabled on the client and by jurisdiction
    if (ReelConfig.slotEngine=="IntegratedSlots"){//new engine
        return (communicationManager_.getResumeStatus()!=undefined && communicationManager_.getResumeStatus().status.hasBuyIn==true);
    }else{
        return (communicationManager_.getResumeStatus()!=undefined && communicationManager_.getResumeStatus().disableBuyIn==false);
    }

}

function isBrandedMw(){
    //return true when gameID is in the list of branded (dinamically loaded from branded config)
    return (brandedGameIDList_[gameParams.gameOriginalID].indexOf(gameParams.gameOriginalID)>=0);
}

function _checkStorage() {
    // check that storage is supported and accessible
    var test = 'test-storage';
    try {
        sessionStorage.setItem(test, test);
        localStorage.getItem(test);
        sessionStorage.removeItem(test);
        return 'true';
    } catch (e) {
        return 'false';
    }
}

function localStorageSetItem(par,val){
    if(_checkStorage()=='true'){
        localStorage.setItem(par,val);
    }else{
        localStorageFallback_[par]=val.toString();
    }
}

function localStorageGetItem(par){
    if(_checkStorage()=='true'){
        return localStorage.getItem(par);
    }else{
        if (localStorageFallback_!=undefined && localStorageFallback_[par]!=undefined){
            return localStorageFallback_[par];
        }else{
            return 'false';
        }
    }
    return 'false';
}

function getCanCoins_() {
    if(noCoinsList_.indexOf(loginVars.getRegParams().jurisdiction )>=0)return false;
    if(gameParams.gameOriginalID==7027)return false;
    if(gameParams.gameOriginalID==7021)return false; //barbarian has problem with coin play not updating the session bars (gcm) correctly
    return true;
}

function getCanAutoplay_() {
    if(loginVars.getRegParams().jurisdiction =="se" && gameParams.clientName!="" && gameParams.clientName.indexOf("NYX")>=0  &&  Math.abs(Number(gameParams.site))== 939)return false;
    if(noAutoplayList_.indexOf(loginVars.getRegParams().jurisdiction )>=0)return false;
    return true;
}

function getCanQuickPlay_(){
    if(loginVars.getRegParams().jurisdiction =="se" && gameParams.clientName!="" && gameParams.clientName.indexOf("NYX")>=0  &&  Math.abs(Number(gameParams.site))== 939)return false;
    if(noQuickPlayList_.indexOf(loginVars.getRegParams().jurisdiction)>=0)return false;

    return true;
}

function transpHack_(){
    if (framework.isTouch() && getCanAutoplay_()==false) {
        $(".autospin.portrait").css("opacity", "0");//remove spin button on mobile only
        $(".autospin.landscape").css("opacity", "0");//remove spin button on mobile only
        $(".autospin.portrait").css("pointer-events", "none");//remove spin button on mobile only
        $(".autospin.landscape").css("pointer-events", "none");//remove spin button on mobile only
    }
}

function getMaxBet_(val) {
    /*    this will work with different values for different games
    if (loginVars.getRegParams().jurisdiction==undefined)return true;
    if (loginVars.getRegParams().jurisdiction.toLowerCase()==undefined)return true;
    if (maxBetList_[loginVars.getRegParams().jurisdiction.toLowerCase()] == undefined){
        return true;
    } else{
        debugger
        if (maxBetList_[loginVars.getRegParams().jurisdiction.toLowerCase()]!=null){
            if (maxBetList_[loginVars.getRegParams().jurisdiction.toLowerCase()].limits!=null &&  maxBetList_[loginVars.getRegParams().jurisdiction.toLowerCase()].limits.length>0){
                for (var a in maxBetList_[loginVars.getRegParams().jurisdiction.toLowerCase()].limits){
                    if (maxBetList_[loginVars.getRegParams().jurisdiction.toLowerCase()].limits[a].games.indexOf(gameParams.gameID)>=0){
                        if (val<= maxBetList_[loginVars.getRegParams().jurisdiction.toLowerCase()].limits[a].value){
                            return true;
                        }else{
                            return false;
                        }
                    }
                }
                if (val<= maxBetList_[loginVars.getRegParams().jurisdiction.toLowerCase()]["default"]){
                    return true;
                }else{
                    return false;
                }

            }else{
                if (val<= maxBetList_[loginVars.getRegParams().jurisdiction.toLowerCase()]["default"]){
                    return true;
                }else{
                    return false;
                }
            }
        }else{
            return true;
        }
    }
    return false



     */




    if (loginVars.getRegParams().jurisdiction==undefined)return true;
    if (loginVars.getRegParams().jurisdiction.toLowerCase()==undefined)return true;
    if (maxBetList_[loginVars.getRegParams().jurisdiction.toLowerCase()] == undefined){
        return true;
    } else{
        if (val<= maxBetList_[loginVars.getRegParams().jurisdiction.toLowerCase()] )return true;
    }
    return false;
}

function mustConfirmFS_(){
    if(confirmFSList_.indexOf(loginVars.getRegParams().jurisdiction)>=0)return true;
}

function checkMaxApValue_(arr){
    var val=[];

    if (loginVars.getRegParams().jurisdiction=="ca"){
        for (var a in arr){
            if (arr[a]<=50) {
                val.push(arr[a])
            }
        }
        return val;
    }else{
        return arr;
    }
}

function threeSecSpinUsingES_() {
    if ( loginVars.getRegParams().jurisdiction=="uk" && Number(gameParams.gameOriginalID)>7021 || gameParams.gameOriginalID=="7016" && gameParams.gameOriginalID=="7019") return false;
    if(threeSecList_.indexOf(loginVars.getRegParams().jurisdiction)>=0)return true;
    return false
}

function hackWin_(opt, amt){
    lineManager_.hackWin(opt, amt);
}

function hackAnchor_(num){

    gameClass_.hackCounter_(num);
}

function updateBalanceOnFr_() {
    if(gameParams.clientName!=undefined && gameParams.clientName.toUpperCase().indexOf("RELAX_PPB")>=0){
        return true;
    }else if (!freeRoundsManager_.getIsInFr()){
        return true;
    }

    return false;
}

function iPadFullScrrenBlock_(){
    return false;
    //true when ipad full screen not handled
    if ( Number(gameParams.gameOriginalID)==7026 )return true;  //xmas
    //if ( Number(gameParams.gameID)==7016 )return true;  //pk
    return false
}

function isSpaceBarAllowed_() {
    //spacebar not allowed on bet365
    var ret=true;

    if (gameParams.clientName != undefined && gameParams.clientName.toUpperCase().indexOf("QUICKFIRE_MALTA") >= 0) {
        if (gameParams.site != undefined && disableSpaceBar_.indexOf(Number(gameParams.site)) >= 0){
            return false;
        }
    }
    return ret;
}

function sessionBarBalUpdate(coinValue_){
    //UKGC session bar
    if (window.f1x2.SESSION_BAR!=undefined) {
        window.f1x2.SESSION_BAR.updateNet(-coinValue_);
    }
}

function fullscreenDisable(){
    screenfull.enabled=false;
}
/**
 * Created by Fabry on 23/06/2016.
 */


function isIOS() {
    //detect safari on ipad or iphone
    if(navigator.vendor.match(/apple/i)) {
        browserName = 'safari/webkit';
        return true
    }
    return false;
}
