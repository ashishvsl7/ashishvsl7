/*This is the launcher where where games are launched and assets are loaded*/

//-------this is just a test page, should be used to maunally launch the game with a dedicated index.hlm
start_();//don't comment please
//------------------------------------------------------------------------------------------------------
var gameClass;
var gameGUI;
var game;
var mainDivWrapper;
var mainDiv;
var hasFocus_ = true;
var barDisabled=false;
var iDisableBarTime_=1000;
var loadingAssNum_=0;


//class stores all launch params needed for gameplay and login..
//var loginVars = new LaunchParams();


//start the game
function start_() {
    
    mainDivWrapper = $('#mainDivWrapper');
    mainDiv = $('#mainDiv', mainDivWrapper);
    game = new Phaser.Game(1280, 720, displayManager.render, 'gameContainer', { preload: preload, create: create, update: update, render: render }, true);
    lastCheck = new Date().getTime();
    setTimeout(adjust, 200);
}

//preload the assets
function preload() {
    //todo fonts
    game.load.bitmapFont('bmpFont', 'fonts/font.png', 'fonts/font.fnt');
    game.load.bitmapFont('bmpFont1', 'fonts/font1.png', 'fonts/font1.xml');
    game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    //todo localization
    game.load.json("translations", "cosmicCrystals/localization/local_it.json");
    //todo general interface translations

    //loading loader graphic assets
    for (a in loaderAssets.assets) {
        loadingAssNum_++;
        game.load.image(a, loaderAssets.assets[a]);
    }

    game.load.enableParallel = 1;
}

function render() {}

function update() {
    if (barDisabled==false && game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) && gameGUI!=null && gameGUI.getGameClass()!=null){
        if (gameGUI.getGameClass().doSpin()==false)gameGUI.getGameClass().doStop();
        barDisabled=true;
        setTimeout(enableBar,iDisableBarTime_);
    }
}

function enableBar(){
    barDisabled=false;
}

function create() {
   setTimeout(continueLoading_,500);
}

function continueLoading_(){
    if(hasFocus_==true) 
        loaderManager_=new Loader(game);
}


var textDelay_=function() {
    if (hasFocus_ == true) {

        $("#wait").css("display", "none");
        Translate.translationsGame = game.cache.getJSON("translations").Messages;

        //todo general interface translations to add before parsing
        Translate.parseLang();

        game.forceSingleUpdate = true;
        game.renderer.renderSession.roundPixels = true;
        game.stage.disableVisibilityChange = true; //todo not for mobile
        game.scale.refresh();
        game.load.crossOrigin = 'anonymous';
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.scale.windowConstraints.bottom = "visual";

        gameGUI = new Gui(game);
        game.forceSingleUpdate = true;
        game.renderer.renderSession.roundPixels = true;

    }
}

function adjust() {
    var divgame = document.getElementById("gameContainer");
    divgame.style.width = window.innerWidth + "px";
    divgame.style.height = window.innerHeight + "px";

}

$(window).blur(function() {
    hasFocus_ = false;
    //if(soundManager_!=null)soundManager_.stopAll();
});

$(window).focus(function() {
    if (hasFocus_ == false && displayManager_ == null) {
        hasFocus_ = true;
        setTimeout(continueLoading_, 1000);
    } else {
        // if(soundManager_!=null)soundManager_.resumeAll();
    }
});



window.addEventListener('resize', function() {
    adjust();
});

$(window).on("orientationchange", function() {
    if (gameGUI == undefined || spinManager_ == null) return;

    if (screen.orientation.angle == 90) {
        gameGUI.askFull();
    } else if (screen.orientation.angle == 270) {
        gameGUI.askFull();
    } else {
        gameGUI.stopFull();
    }

});
/**
 * Created by Fabry on 23/06/2016.
 */
