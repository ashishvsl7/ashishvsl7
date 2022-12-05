
var frameworkAssets={
    "assets": {
        "menuBtn": "gui/generic/img/desktop/svg/menu-btn.svg",
        "menuBtnClose": "gui/generic/img/desktop/svg/menu-close-btn.svg",
        "menuHistoryBtn": "gui/generic/img/desktop/svg/menu-history-btn.svg",
        "menuHomeBtn": "gui/generic/img/desktop/svg/menu-home-btn.svg",
        "menuSettingsBtn": "gui/generic/img/desktop/svg/menu-settings-btn.svg",
        "menuSoundOnBtn": "gui/generic/img/desktop/svg/menu-sound-btn.svg",
        "menuSoundOffBtn": "gui/generic/img/desktop/svg/menu-sound-close-btn.svg",
        "dtHeader": "gui/generic/img/desktop/png/dt-header.png"
    }
};

var frameworkSettings = {
    "buttons":{
        "spinButton":{
            "id":"spinButton",
            "bg": "gui/generic/img/desktop/png/cp-btn-spin-up.png",
            "bgDisabled": "gui/generic/img/desktop/png/cp-btn-spin-disabled.png",
            "bgFill": "none",
        },
        "stopButton":{
            "id":"stopButton",
            "bg": "gui/generic/img/desktop/png/cp-btn-stop-up.png",
            "bgDisabled": "gui/generic/img/desktop/png/cp-btn-stop-disabled.png"
        },
        "betControl":{
            "id":"betOptions",
            "bg": "gui/generic/img/desktop/png/cp-btn-bet-up.png",
            "bgDisabled": "gui/generic/img/desktop/png/cp-btn-bet-disabled.png",
            "texts": {
                "betAmount": {
                    "fill": "#ffffff",
                    "font": "15px Helvetica, Arial, sans-serif",
                    "text": "",
                    "align":"left"
                }
            }
        },
        "helpButton":{
            "id":"helpButton",
            "bg": "gui/generic/img/desktop/png/cp-btn-paytable-up.png",
            "bgDisabled": "gui/generic/img/desktop/png/cp-btn-paytable-disabled.png"

        },
        "autoButton":{
            "id":"autoPlay",
            "bg": "gui/generic/img/desktop/png/cp-btn-autospin-up.png",
            "bgDisabled": "gui/generic/img/desktop/png/cp-btn-autospin-disabled.png",
            "start": "gui/generic/img/desktop/png/cp-btn-autospin-select.png",
            "stop":"gui/generic/img/desktop/png/cp-btn-autospin-stop.png",
            "texts": {
                "auto_amount": {
                    "fill": "#ffffff",
                    "font": "15px Helvetica, Arial, sans-serif",
                    "text": "",
                    "align":"left"

                }
            }

        }
    }
};

var loaderAssets={
    "assets": {
        "chromeLogo":"gui/generic/img/chrome.png",
        "fireFoxLogo":"gui/generic/img/firefox.png"
    },
    "loaderMc": {
        "ironDogLogo": {
            "sprite": "gui/generic/img/ironDogLogo.png",
            "json": "gui/generic/img/ironDogLogo.json",
            "w": 360,
            "h": 360
        },
        "progressBar": {
            "sprite": "gui/generic/img/status-bar.png",
            "json": "gui/generic/img/status-bar.json",
            "w": 360,
            "h": 360
        },
        "graphAsset": {
            "chromeImg": {
                "name": "chromeLogo",
                "x": 580,
                "y": 680,
                "anchorX": .5,
                "anchorY": .5
            },
            "fireFoxImg": {
                "name": "fireFoxLogo",
                "x": 700,
                "y": 680,
                "anchorX": .5,
                "anchorY": .5
            }
        },
        "texts": {
            "optimizedFor": {
                "x": 640,
                "y": 600,
                "fill": "#ffffff",
                "font": "20px Arial",
                "text": "This game is optimized for:",
                "anchorX": .5
            }
        }
    },
    "sounds":{
        "loaderSound": {
            "name": "gui/generic/LoaderAudio.mp3",
            "volume": .3
        }
    },
    "loader": {
        "visible":true,
        "graphAsset": {
            "progressBar": {
                "name": "progressBar",
                "x": 640,
                "y": 500,
                "anchorX":.5,
                "anchorY":.5
            }
        },
        "texts": {
            "perc": {
                "x": 640,
                "y": 640,
                "fill": "#ffffff",
                "font": "20px Arial",
                "text": "",
                "anchorX":.5
            }
        }
    }
};

var bitmapFonts={
    "bmpFont":{
        "sprite": "fonts/fontBarbarian.png",
        "font": "fonts/fontBarbarian.xml"
    },
    "multiBmpFont":{
        "sprite": "fonts/fontCounterBarbarian.png",
        "font": "fonts/fontCounterBarbarian.xml"
    },
};

var extScripts={
    "webfont": "15px FuturaPT-Heavy",
    "webfont2": "15px GROBOLD"
};
var gameAssets = {
    "assets": {
        "icon0": "barbarianGold/img/symbol-00.png",
        "icon1": "barbarianGold/img/symbol-01.png",
        "icon2": "barbarianGold/img/symbol-02.png",
        "icon3": "barbarianGold/img/symbol-03.png",
        "icon4": "barbarianGold/img/symbol-04.png",
        "icon5": "barbarianGold/img/symbol-05.png",
        "icon6": "barbarianGold/img/symbol-06.png",
        "icon7": "barbarianGold/img/symbol-07.png",
        "icon8": "barbarianGold/img/symbol-08.png",
        "icon9": "barbarianGold/img/symbol-09.png",
        "icon10": "barbarianGold/img/symbol-10.png",
        "icon11": "barbarianGold/img/symbol-11.png",
        "icon12": "barbarianGold/img/symbol-12.png",
        "icon13": "barbarianGold/img/symbol-13.png",

        "bicon0": "barbarianGold/img/b-symbol-00.png",
        "bicon1": "barbarianGold/img/b-symbol-01.png",
        "bicon2": "barbarianGold/img/b-symbol-02.png",
        "bicon3": "barbarianGold/img/b-symbol-03.png",
        "bicon4": "barbarianGold/img/b-symbol-04.png",
        "bicon5": "barbarianGold/img/b-symbol-05.png",
        "bicon6": "barbarianGold/img/b-symbol-06.png",
        "bicon7": "barbarianGold/img/b-symbol-07.png",
        "bicon8": "barbarianGold/img/b-symbol-08.png",
        "bicon9": "barbarianGold/img/b-symbol-09.png",
        "bicon10": "barbarianGold/img/b-symbol-10.png",
        "bicon11": "barbarianGold/img/b-symbol-11.png",

        "line_0_00": "barbarianGold/img/lines/payline_0_00.png",
        "line_0_01": "barbarianGold/img/lines/payline_0_01.png",
        "line_0_02": "barbarianGold/img/lines/payline_0_02.png",
        "line_0_03": "barbarianGold/img/lines/payline_0_03.png",
        "line_0_04": "barbarianGold/img/lines/payline_0_04.png",
        "line_0_05": "barbarianGold/img/lines/payline_0_05.png",
        "line_0_06": "barbarianGold/img/lines/payline_0_06.png",
        "line_0_07": "barbarianGold/img/lines/payline_0_07.png",
        "line_0_08": "barbarianGold/img/lines/payline_0_08.png",
        "line_0_09": "barbarianGold/img/lines/payline_0_09.png",
        "line_0_10": "barbarianGold/img/lines/payline_0_10.png",
        "line_0_11": "barbarianGold/img/lines/payline_0_11.png",
        "line_0_12": "barbarianGold/img/lines/payline_0_12.png",
        "line_0_13": "barbarianGold/img/lines/payline_0_13.png",
        "line_0_14": "barbarianGold/img/lines/payline_0_14.png",
        "line_0_15": "barbarianGold/img/lines/payline_0_15.png",
        "line_0_16": "barbarianGold/img/lines/payline_0_16.png",
        "line_0_17": "barbarianGold/img/lines/payline_0_17.png",
        "line_0_18": "barbarianGold/img/lines/payline_0_18.png",
        "line_0_19": "barbarianGold/img/lines/payline_0_19.png",
        "line_0_static": "barbarianGold/img/lines/payline_Static.png",
        "bottomBar": "gui/message-bar.png",
        "bgPanel": "barbarianGold/img/bgPanel.png",
        "bgFeatureWinGame": "barbarianGold/img/bgPanel1.png",
        "bgPreview":"barbarianGold/img/intro-page.jpg",
        "bgPreview1":"barbarianGold/img/intro-1.png",
        "bgPreview2":"barbarianGold/img/intro-2.png",
        "bgPreview3":"barbarianGold/img/intro-3.png",
        "freeRoundsPanel":"barbarianGold/img/free-rounds.png",
        "bgAlpha": "barbarianGold/img/alpha.png",
        "bgWin":"barbarianGold/img/win-text-container.png",
        "bigWin":"barbarianGold/img/big-win.png",
        "superWin":"barbarianGold/img/epic-win.png",
        "megaWin":"barbarianGold/img/ultra-win.png",
        "logo": "barbarianGold/img/logo.png",
        "bg_r": "barbarianGold/img/bg/base-right.png",
        "bg_l": "barbarianGold/img/bg/base-left.png",
        "bg_b": "barbarianGold/img/bg/base-bottom.png",
        "bg_t": "barbarianGold/img/bg/base-top.png",
        "bg_m": "barbarianGold/img/bg/base-main.jpg",
        "bgFS0_t": "barbarianGold/img/bg/base-top_FS0.png",
        "bgFS1_r": "barbarianGold/img/bg/base-right_FS1.jpg",
        "bgFS1_l": "barbarianGold/img/bg/base-left_FS1.jpg",
        "bgFS1_b": "barbarianGold/img/bg/base-bottom_FS1.jpg",
        "bgFS1_t": "barbarianGold/img/bg/base-top_FS1.jpg",
        "bgFS1_m": "barbarianGold/img/bg/base-main_FS1.jpg",
        "bgFS2_r": "barbarianGold/img/bg/base-right_FS2.jpg",
        "bgFS2_l": "barbarianGold/img/bg/base-left_FS2.jpg",
        "bgFS2_b": "barbarianGold/img/bg/base-bottom_FS2.jpg",
        "bgFS2_t": "barbarianGold/img/bg/base-top_FS2.jpg",
        "bgFS2_m": "barbarianGold/img/bg/base-main_FS2.jpg",
        "volOnButton": "gui/btnVolOn.png",
        "volOffButton": "gui/btnVolOff.png",
        "freeSpinPanel":"barbarianGold/img/free-spins.png",
        "btnTranspRight": "barbarianGold/img/transparent.png",
        "btnTranspLeft": "barbarianGold/img/transparent.png",
        "wildBg":"barbarianGold/img/symbol-10_exp.png",
        "wildText":"barbarianGold/img/symbol-10-text.png"

    },
    "localizedAssets":{
        "graphAsset": {
        }
    },
    "buttonsSpriteSheet": {
        "container-btn": {
            "sprite": "barbarianGold/img/generic-game-btn.png",
            "json": "barbarianGold/img/generic-game-btn.png",
            "w": 210,
            "h": 66
        },
        "yesButton": {
            "sprite": "barbarianGold/img/yes-btn.png",
            "json": "barbarianGold/img/yes-btn.png",
            "w": 58,
            "h": 54
        },
        "noButton": {
            "sprite": "barbarianGold/img/no-btn.png",
            "json": "barbarianGold/img/no-btn.png",
            "w": 58,
            "h": 54
        },
        "check": {
            "sprite": "barbarianGold/img/radio-btns.png",
            "json": "barbarianGold/img/radio-btns.png",
            "w": 64,
            "h": 32
        },
        "genericBtn":{
            "sprite": "gui/generic/img/generic-game-btn.png",
            "json": "gui/generic/img/generic-game-btn.png",
            "w": 210,
            "h": 68
        },
        "buyFeature":{
            "json": "barbarianGold/img/buyFeature/buy-reels-btnLandscape.png",
            "sprite": "barbarianGold/img/buyFeature/buy-reels-btnLandscape.png",
            "w": 180,
            "h": 78
        },
        "feature-Fn-btn": {
            "sprite": "barbarianGold/img/buyFeature/buy-feature-btn.png",
            "json": "barbarianGold/img/buyFeature/buy-feature-btn.png",
            "w": 145,
            "h": 63
        }

    },
    "animations": {
        "anim0": {
            "json": "barbarianGold/img/anim/symbol-00.json",
            "sprite": "barbarianGold/img/anim/symbol-00.png"
        },
        "anim1": {
            "json": "barbarianGold/img/anim/symbol-01.json",
            "sprite": "barbarianGold/img/anim/symbol-01.png"
        },
        "anim2": {
            "json": "barbarianGold/img/anim/symbol-02.json",
            "sprite": "barbarianGold/img/anim/symbol-02.png"
        },
        "anim3": {
            "json": "barbarianGold/img/anim/symbol-03.json",
            "sprite": "barbarianGold/img/anim/symbol-03.png"
        },
        "anim4": {
            "json": "barbarianGold/img/anim/symbol-04.json",
            "sprite": "barbarianGold/img/anim/symbol-04.png"
        },
        "anim5": {
            "json": "barbarianGold/img/anim/symbol-05.json",
            "sprite": "barbarianGold/img/anim/symbol-05.png"
        },
        "anim6": {
            "json": "barbarianGold/img/anim/symbol-06.json",
            "sprite": "barbarianGold/img/anim/symbol-06.png"
        },
        "anim7": {
            "json": "barbarianGold/img/anim/symbol-07.json",
            "sprite": "barbarianGold/img/anim/symbol-07.png"
        },
        "anim8": {
            "json": "barbarianGold/img/anim/symbol-08.json",
            "sprite": "barbarianGold/img/anim/symbol-08.png"
        },
        "anim9": {
            "json": "barbarianGold/img/anim/symbol-09.json",
            "sprite": "barbarianGold/img/anim/symbol-09.png"
        },
        "anim10": {
            "json": "barbarianGold/img/anim/fakeAnim.json",
            "sprite": "barbarianGold/img/anim/fakeAnim.png"
        },
        "anim11": {
            "json": "barbarianGold/img/anim/symbol-11.json",
            "sprite": "barbarianGold/img/anim/symbol-11.png"
        },
        "anim12": {
            "json": "barbarianGold/img/anim/fakeAnim.json",
            "sprite": "barbarianGold/img/anim/fakeAnim.png"
        },
        "anim13": {
            "json": "barbarianGold/img/anim/fakeAnim.json",
            "sprite": "barbarianGold/img/anim/fakeAnim.png"
        },

        "animW10": {
            "json": "barbarianGold/img/anim/symbol-10-part1.json",
            "sprite": "barbarianGold/img/anim/symbol-10-part1.png"
        },

        "animW12": {
            "json": "barbarianGold/img/anim/symbol-12-part1.json",
            "sprite": "barbarianGold/img/anim/symbol-12-part1.png"
        },
        "animW13": {
            "json": "barbarianGold/img/anim/symbol-13-part1.json",
            "sprite": "barbarianGold/img/anim/symbol-13-part1.png"
        },

        "wildReel_10_0": {
            "json": "barbarianGold/img/anim/symbol-10-part1.json",
            "sprite": "barbarianGold/img/anim/symbol-10-part1.png"
        },
        "wildReel_10_1": {
            "json": "barbarianGold/img/anim/symbol-10-part2.json",
            "sprite": "barbarianGold/img/anim/symbol-10-part2.png"
        },

        "wildReel_12_0": {
            "json": "barbarianGold/img/anim/symbol-12-part1.json",
            "sprite": "barbarianGold/img/anim/symbol-12-part1.png"
        },
        "wildReel_12_1": {
            "json": "barbarianGold/img/anim/symbol-12-part2.json",
            "sprite": "barbarianGold/img/anim/symbol-12-part2.png"
        },

        "wildReel_13_0": {
            "json": "barbarianGold/img/anim/symbol-13-part1.json",
            "sprite": "barbarianGold/img/anim/symbol-13-part1.png"
        },
        "wildReel_13_1": {
            "json": "barbarianGold/img/anim/symbol-13-part2.json",
            "sprite": "barbarianGold/img/anim/symbol-13-part2.png"
        },


        "bluFlame": {
            "json": "barbarianGold/img/anim/win-highlight.json",
            "sprite": "barbarianGold/img/anim/win-highlight.png"
        },

        "counterMultIntro":{
            "json": "barbarianGold/img/counter/counter-orange-intro.json",
            "sprite": "barbarianGold/img/counter/counter-orange-intro.png"
        },
        "counterMult":{
            "json": "barbarianGold/img/counter/counter-orange-active.json",
            "sprite": "barbarianGold/img/counter/counter-orange-active.png"
        },


        "iconWinBgAnim":{
            "json": "barbarianGold/img/anim/win-highlight.json",
            "sprite": "barbarianGold/img/anim/win-highlight.png"
        },
        "part-1": {
            "json": "barbarianGold/img/anim/bronze-coin.json",
            "sprite": "barbarianGold/img/anim/bronze-coin.png"
        },
        "part-2": {
            "json": "barbarianGold/img/anim/silver-coin.json",
            "sprite": "barbarianGold/img/anim/silver-coin.png"
        },
        "part-3": {
            "json": "barbarianGold/img/anim/gold-coin.json",
            "sprite": "barbarianGold/img/anim/gold-coin.png"
        },
        "f-part-1": {
            "json": "barbarianGold/img/anim/bronze-coin-frwrd.json",
            "sprite": "barbarianGold/img/anim/bronze-coin-frwrd.png"
        },
        "f-part-2": {
            "json": "barbarianGold/img/anim/silver-coin-frwrd.json",
            "sprite": "barbarianGold/img/anim/silver-coin-frwrd.png"
        },
        "f-part-3": {
            "json": "barbarianGold/img/anim/gold-coin-frwrd.json",
            "sprite": "barbarianGold/img/anim/gold-coin-frwrd.png"
        },
        "scatterFlame":{
            "json": "barbarianGold/img/anim/scatter-flame.json",
            "sprite": "barbarianGold/img/anim/scatter-flame.png"
        },
        "reelFlame_0":{
            "json": "barbarianGold/img/anim/reel-flames-part1.json",
            "sprite": "barbarianGold/img/anim/reel-flames-part1.png"
        },
        "reelFlame_1":{
            "json": "barbarianGold/img/anim/reel-flames-part2.json",
            "sprite": "barbarianGold/img/anim/reel-flames-part2.png"
        }
    },
    "importantSounds": {
        "spinClick": {
            "name": "barbarianGold/sounds/spinClick.mp3",
            "volume": .2
        },
        "reelSound": {
            "name": "barbarianGold/sounds/reelSound.mp3",
            "volume":1
        },
        "reelSoundFast_0": {
            "name": "barbarianGold/sounds/reelSoundFast.mp3",
            "volume":1
        },
        "reelSoundFast1_0": {
            "name": "barbarianGold/sounds/reelSoundFast5.mp3",
            "volume":1
        },
        "reelSoundFast_1": {
            "name": "barbarianGold/sounds/reelSoundFast.mp3",
            "volume":1
        },
        "reelSoundFast1_1": {
            "name": "barbarianGold/sounds/reelSoundFast5.mp3",
            "volume":1
        },
        "reelSoundFast_2": {
            "name": "barbarianGold/sounds/reelSoundFast.mp3",
            "volume":1
        },
        "reelSoundFast1_2": {
            "name": "barbarianGold/sounds/reelSoundFast5.mp3",
            "volume":1
        },
        "reelSoundFast_3": {
            "name": "barbarianGold/sounds/reelSoundFast.mp3",
            "volume":1
        },
        "reelSoundFast1_3": {
            "name": "barbarianGold/sounds/reelSoundFast5.mp3",
            "volume":1
        },
        "reelSoundFast_4": {
            "name": "barbarianGold/sounds/reelSoundFast.mp3",
            "volume":1
        },
        "reelSoundFast1_4": {
            "name": "barbarianGold/sounds/reelSoundFast5.mp3",
            "volume":1
        },
        "reelStop": {
            "name": "barbarianGold/sounds/reelStop.mp3",
            "volume":.4
        }
    },
    "sounds": {
        "click": {
            "name": "barbarianGold/sounds/click.mp3",
            "volume": .2
        },
        "smbWin_0": {
            "name": "barbarianGold/sounds/smbWin_0.mp3",
            "volume": 1.4
        },
        "smbWin_1": {
            "name": "barbarianGold/sounds/smbWin_01.mp3",
            "volume": 1.4
        },
        "smbWin_2": {
            "name": "barbarianGold/sounds/smbWin_01.mp3",
            "volume": 1.4
        },
        "smbWin_3": {
            "name": "barbarianGold/sounds/smbWin_01.mp3",
            "volume": 1.4
        },
        "smbWin_4": {
            "name": "barbarianGold/sounds/smbWin_04.mp3",
            "volume": 1.5
        },
        "smbWin_5": {
            "name": "barbarianGold/sounds/smbWin_05.mp3",
            "volume": 1.5
        },
        "smbWin_6": {
            "name": "barbarianGold/sounds/smbWin_06.mp3",
            "volume": 1.5
        },
        "smbWin_7": {
            "name": "barbarianGold/sounds/smbWin_07.mp3",
            "volume": 1.5
        },
        "smbWin_8": {
            "name": "barbarianGold/sounds/smbWin_08.mp3",
            "volume": 1.3
        },

        "wildReel": {
            "name": "barbarianGold/sounds/smbWin_10.mp3",
            "volume": .6
        },
        "fsWildReel": {
            "name": "barbarianGold/sounds/smbWin_11.mp3",
            "volume": .6
        },

        "wildReelOut": {
            "name": "barbarianGold/sounds/wildReelRollback.mp3",
            "volume": .4
        },
        "fsWildReelOut": {
            "name": "barbarianGold/sounds/fsWildReelRollback.mp3",
            "volume": .5
        },
        "fsWin": {
            "name": "barbarianGold/sounds/fsWin.mp3",
            "volume": 3
        },
        "fsWon": {
            "name": "barbarianGold/sounds/introFS_1.mp3",
            "volume": 1
        },
        "fsWon2": {
            "name": "barbarianGold/sounds/introFS_2.mp3",
            "volume": 1
        },
        "incWin": {
            "name": "barbarianGold/sounds/counter.mp3",
            "volume": .4,
            "loop": true
        },
        "line": {
            "name": "barbarianGold/sounds/line.mp3",
            "volume": .3
        },
        "winBg_0": {
            "name": "barbarianGold/sounds/centralWin/win1.mp3",
            "volume": 0
        },
        "winBg_1": {
            "name": "barbarianGold/sounds/centralWin/win2.mp3",
            "volume": .8
        },
        "winBg_2": {
            "name": "barbarianGold/sounds/centralWin/win3.mp3",
            "volume": .8
        },
        "winBg_3": {
            "name": "barbarianGold/sounds/centralWin/win4.mp3",
            "volume": .8
        },
        "winBg_4": {
            "name": "barbarianGold/sounds/centralWin/win5.mp3",
            "volume": .8
        },
        "winBg_5": {
            "name": "barbarianGold/sounds/centralWin/win6.mp3",
            "volume": .8
        },
        "winBg_6": {
            "name": "barbarianGold/sounds/centralWin/bigWin_Full.mp3",
            "volume": .8
        },
        "winBg_7": {
            "name": "barbarianGold/sounds/centralWin/superbigWin_Full.mp3",
            "volume": .8
        },
        "winBg_8": {
            "name": "barbarianGold/sounds/centralWin/megabigWin_Full.mp3",
            "volume": .8
        },
        "winBgS_6": {
            "name": "barbarianGold/sounds/centralWin/bigWin.mp3",
            "volume": .8
        },
        "winBgS_7": {
            "name": "barbarianGold/sounds/centralWin/superbigWin.mp3",
            "volume": .8
        },
        "winBgS_8": {
            "name": "barbarianGold/sounds/centralWin/megabigWin.mp3",
            "volume": .8
        },
        "winPanel": {
            "name": "barbarianGold/sounds/winScreen.mp3",
            "volume": 1
        },
        "coins": {
            "name": "barbarianGold/sounds/coins.mp3",
            "volume":.3
        },
        "scatterPop":{
            "name": "barbarianGold/sounds/scatterAppear.mp3",
            "volume":1
        },
    },
    "bgSounds": {
        "bgSlot": {
            "name": "barbarianGold/sounds/bg.mp3",
            "volume": .3
        },
        "bgFs1": {
            "name": "barbarianGold/sounds/bgFs_base1.mp3",
            "volume":.7
        },
        "bgFs2": {
            "name": "barbarianGold/sounds/bgFs_base2.mp3",
            "volume":.7
        }
    }

};
var guiConfig = {
    "credits": ["cash","credits"]
};
var displayManager = {
    "render":Phaser.AUTO,
    "groups": {
        "frame": {
            "visible":false,
            "graphAsset": {
                "bg4": {
                    "name": "bg_m",
                    "x": 200,
                    "y": 104
                }
            }
        },
        "frameFS1": {
            "visible":false,
            "graphAsset": {
                "bg4": {
                    "name": "bgFS1_m",
                    "x": 200,
                    "y": 104
                }
            }
        },
        "frameFS2": {
            "visible":false,
            "graphAsset": {
                "bg4": {
                    "name": "bgFS2_m",
                    "x": 200,
                    "y": 104
                }
            }
        },
        "reelFg": {},
        "reels": {},
        "bg": {
            "visible":false,
            "graphAsset": {
                "bg": {
                    "name": "bg_r",
                    "x": 1050,
                    "y": 104
                },
                "bg1": {
                    "name": "bg_l",
                    "x": 0,
                    "y": 104
                }
            }
        },
        "bgFS1": {
            "visible":false,
            "graphAsset": {
                "bg": {
                    "name": "bgFS1_r",
                    "x": 1080,
                    "y": 104
                },
                "bg1": {
                    "name": "bgFS1_l",
                    "x": 0,
                    "y": 104
                }
            }
        },
        "bgFS2": {
            "visible":false,
            "graphAsset": {
                "bg": {
                    "name": "bgFS2_r",
                    "x": 1080,
                    "y": 104
                },
                "bg1": {
                    "name": "bgFS2_l",
                    "x": 0,
                    "y": 104
                }
            }
        },
        "bgIconAnim":{},
        "mask":{
            "visible":false,
            "graphAsset": {
                "bg2": {
                    "name": "bg_b",
                    "x": 0,
                    "y": 632
                },
                "bg3": {
                    "name": "bg_t",
                    "x": 0,
                    "y": 0
                }
            }
        },
        "maskFS1":{
            "visible":false,
            "graphAsset": {
                "bg2": {
                    "name": "bgFS1_b",
                    "x": 0,
                    "y": 632
                },
                "bg3": {
                    "name": "bgFS1_t",
                    "x": 0,
                    "y": 0
                }
            }
        },
        "maskFS2":{
            "visible":false,
            "graphAsset": {
                "bg2": {
                    "name": "bgFS2_b",
                    "x": 0,
                    "y": 632
                },
                "bg3": {
                    "name": "bgFS2_t",
                    "x": 0,
                    "y": 0
                }
            }
        },
        "buyFeature":{
            "buttons": {
                "buyFeature": {
                    "visible":true,
                    "name": "buyFeature",
                    "x": 1180,
                    "y": 70,
                    "evt": "doBuyFeature",
                    "texts": {
                        "txt": {
                            "x": 0,
                            "y": -4,
                            "font": "12px GROBOLD, FuturaPT-Heavy",
                            "fill": "#FFFFFF",
                            "text": "",
                            "anchorX": .5
                        }
                    }
                }
            }
        },
        "status": {
            "visible":false,
            "graphAsset": {
                "bottomBar": {
                    "name": "bottomBar",
                    "x": 0,
                    "y": 688
                }
            },
            "texts": {
                "winValue": {
                    "x": 642,
                    "y": 670,
                    "font": "25px Helvetica, Arial, sans-serif",
                    "fill": "#FFFFFF",
                    "text": "",
                    "anchorX": 0.5,
                    "anchorY": .6
                },
                "creditLabel": {
                    "x": 120,
                    "y": 693,
                    "font": "18px Arial,Helvetica sans-serif",
                    "fill": "#FFFFFF",
                    "text": "Balance:",
                    "anchorX": 1
                },
                "creditValue": {
                    "x": 125,
                    "y": 693,
                    "font": "18px Arial,Helvetica, sans-serif",
                    "fill": "#FFFFFF",
                    "anchorX": 0
                },
                "messages": {
                    "x": 640,
                    "y": 693,
                    "font": "18px Arial,Helvetica sans-serif",
                    "fill": "#FFFFFF",
                    "text": "Good luck",
                    "anchorX": .5
                },
                "time": {
                    "x": 1250,
                    "y": 693,
                    "anchorX":1,
                    "font": "18px Arial",
                    "fill": "#FFFFFF"
                }
            }
        },
        "logo": {
            "visible":false,
            "graphAsset": {
                "logo": {
                    "name": "logo",
                    "x": 640,
                    "y": 0,
                    "anchorX":.5
                }
            }
        },
        "buttonFg":{},
        "scatter": {},
        "wild": {},
        "wins": {},
        "lines": {},
        "freeRounds": {
            "visible":false,
            "comment_movingLogo":"true when the panel substitute the logo",
            "movingLogo":true,
            "graphAsset": {
                "frPanel":{
                    "name": "freeRoundsPanel",
                    "x": 640,
                    "y": 12,
                    "anchorX": 0.5
                }
            },
            "texts": {
                "frLabel": {
                    "x": 295,
                    "y": 20,
                    "fill": "#FFFFFF",
                    "font": "13px Futura ,Arial",
                    "text": "Free Rounds:",
                    "anchorX": 1
                },
                "frValue": {
                    "x": 262,
                    "y": 36,
                    "fill": "#FFFFFF",
                    "font": "23px Futura ,Arial",
                    "text": "5",
                    "anchorX": 0.5
                },
                "frTotWonLabel": {
                    "x": 1050,
                    "y": 20,
                    "fill": "#FFFFFF",
                    "font": "13px Futura ,Arial",
                    "text": "Total won:",
                    "anchorX": 1
                },
                "frTotWonValue": {
                    "x": 1020,
                    "y": 36,
                    "fill": "#FFFFFF",
                    "font": "23px Futura ,Arial",
                    "text": "£1234:00",
                    "anchorX": 0.5
                }
            }
        },
        "fsCounter":{},
        "freeSpins": {
            "visible": false,
            "graphAsset": {
                "fsP": {
                    "name": "freeSpinPanel",
                    "x": 640,
                    "y": 14,
                    "anchorX": 0.5
                }
            },
            "texts": {
                "fsLabel": {
                    "x": 355,
                    "y": 16,
                    "fill": "#FFFFFF",
                    "font": "13px Futura ,Arial",
                    "text": "Free Spins",
                    "align":"center",
                    "anchorX": .5
                },
                "fsValue": {
                    "x": 355,
                    "y": 30,
                    "fill": "#FFFFFF",
                    "font": "23px Futura ,Arial",
                    "text": "",
                    "align":"center",
                    "anchorX": .5
                },
                "totWonLabel": {
                    "x": 940,
                    "y": 16,
                    "fill": "#FFFFFF",
                    "font": "13px Futura ,Arial",
                    "text": "Total won",
                    "align":"center",
                    "anchorX": .5
                },
                "totWonValue": {
                    "x": 940,
                    "y": 30,
                    "fill": "#FFFFFF",
                    "font": "23px Futura ,Arial",
                    "text": "",
                    "align":"center",
                    "anchorX": .5
                },
                "fsMultValue": {
                    "x": 640,
                    "y": 10,
                    "bmpFont": "multiBmpFont",
                    "size": "70",
                    "text": "",
                    "anchorX": 0.5
                },
            }
        },
        "fsWinPanel": {
            "visible": false,
            "fakeButton": true,
            "eventBlock": true,
            "evt": "fireConfirmation",
            "duration": 500,
            "graphAsset": {
                "bgmsg": {
                    "name": "bgAlpha",
                    "x": 0,
                    "y": 0,
                    "alpha": .9
                },
                "bgFsWon": {
                    "name": "bgFeatureWinGame",
                    "x": 640,
                    "y": 305,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "TXT":{

                }
            },
            "texts": {
                "fsW1Small": {
                    "x": 640,
                    "y": 158,
                    "fill": "#b4ff68",
                    "stroke": "#004700",
                    "stroke_tick": 4,
                    "font": "21px FuturaPT-Heavy",
                    "text": "YOU ARE ENTERING",
                    "anchorX": .5
                },
                "fsW1Big": {
                    "x": 640,
                    "y": 185,
                    "fill": "#b4ff68",
                    "stroke": "#004700",
                    "stroke_tick": 4,
                    "font": "42px FuturaPT-Heavy",
                    "text": "THE CAVE OF LAVA",
                    "anchorX": .5
                },
                "fsW2Small": {
                    "x": 640,
                    "y": 250,
                    "fill": "#ffffff",
                    "stroke": "#000000",
                    "stroke_tick": 4,
                    "font": "25px FuturaPT-Heavy",
                    "text": "YOU HAVE BEEN AWARDED",
                    "anchorX": .5
                },
                "fsW2Big": {
                    "x": 640,
                    "y": 270,
                    "fill": "#ffffff",
                    "stroke": "#000000",
                    "stroke_tick": 4,
                    "font": "65px FuturaPT-Heavy",
                    "text": "6",
                    "anchorX": .5
                },
                "fsW3Big": {
                    "x": 640,
                    "y": 328,
                    "fill": "#ffffff",
                    "stroke": "#000000",
                    "stroke_tick": 4,
                    "font": "65px FuturaPT-Heavy",
                    "text": "FREE SPINS",
                    "anchorX": .5
                },
                "fsW3Small": {
                    "x": 640,
                    "y": 410,
                    "fill": "#ffffff",
                    "stroke": "#000000",
                    "stroke_tick": 4,
                    "font": "25px FuturaPT-Heavy",
                    "text": "GOOD LUCK",
                    "anchorX": .5
                }
            }

        },
        "fsEndPanel": {
            "visible": false,
            "fakeButton": true,
            "eventBlock": true,
            "duration": 5,
            "graphAsset": {
                "bgmsg": {
                    "name": "bgAlpha",
                    "x": 0,
                    "y": 0,
                    "alpha": .9
                },
                "bgFsWon": {
                    "name": "bgPanel",
                    "x": 640,
                    "y": 305,
                    "anchorX": .5,
                    "anchorY": .5
                },
            },
            "texts": {
                "fsE1": {
                    "x": 640,
                    "y": 180,
                    "fill": "#ffffff",
                    "stroke": "#000000",
                    "stroke_tick": 4,
                    "font": "24px FuturaPT-Heavy",
                    "text": "FREE SPINS ARE NOW OVER",
                    "anchorX": .5
                },
                "fsE2": {
                    "x": 640,
                    "y": 250,
                    "fill": "#ffffff",
                    "stroke": "#000000",
                    "stroke_tick": 4,
                    "font": "35px FuturaPT-Heavy",
                    "text": "",
                    "anchorX": .5
                },
                "fsE3": {
                    "x": 640,
                    "y": 300,
                    "fill": "#ffffff",
                    "stroke": "#000000",
                    "stroke_tick": 4,
                    "font": "35px FuturaPT-Heavy",
                    "text": "",
                    "anchorX": .5
                },
            }

        },
        "frWonPanel": {
            "visible":false,
            "comment_fakeButton":"used to cover all the other buttons",
            "fakeButton":true,
            "eventBlock":true,
            "duration":5,
            "graphAsset": {
                "bgmsg": {
                    "name": "bgAlpha",
                    "x": 0,
                    "y": 0,
                    "alpha":0
                },
                "game": {
                    "name": "bgPanel",
                    "x": 640,
                    "y": 340,
                    "anchorX": .5,
                    "anchorY": .5,
                    "scaleX":1.1,
                    "scaleY":1.1
                }
            },
            "texts": {
                "frWLabelTitol": {
                    "x": 640,
                    "y": 240,
                    "fill": "#ffffff",
                    "font": "14px FuturaPT-Heavy",
                    "text":"",
                    "anchorX": .5
                },
                "frWLabel": {
                    "x": 640,
                    "y": 260,
                    "fill": "#ffffff",
                    "font": "18px FuturaPT-Heavy",
                    "text":"",
                    "align":"center",
                    "anchorX": .5
                },
                "frValue1": {
                    "x": 640,
                    "y": 300,
                    "fill": "#ffffff",
                    "font": "24px FuturaPT-Heavy",
                    "text": "5",
                    "anchorX": .5
                },
                "frWLabel1": {
                    "x": 640,
                    "y": 330,
                    "fill": "#ffffff",
                    "font": "18px FuturaPT-Heavy",
                    "text": "",
                    "align":"center",
                    "anchorX": .5
                }
            }
        },
        "centralWin": {
            "visible": false,
            "maxObjNum": 200,
            "minScale": 120,
            "maxScale": 170,
            "graphAsset": {
                "bgmsg": {
                    "name": "bgAlpha",
                    "x": 0,
                    "y": 0,
                    "alpha": .5
                },
                "bgmsg1": {
                    "name": "bgWin",
                    "x": 635,
                    "y": 275,
                    "anchorX": .5,
                    "anchorY": .5,
                },
                "group":{
                    "name":"centralFuntain"
                },
                "bigWin": {
                    "name": "bigWin",
                    "x": 635,
                    "y": 322,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "sBigWin": {
                    "name": "superWin",
                    "x": 635,
                    "y": 322,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "mBigWin": {
                    "name": "megaWin",
                    "x": 635,
                    "y": 322,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                }
            },
            "buttons": {
                "skip": {
                    "name": "bgAlpha",
                    "x": 500,
                    "y": 577,
                    "alpha": 0,
                    "evt": "doOk"
                }
            }
        },
        "centralLineWin": {
            "visible": false,
            "texts": {
                "lineWin": {
                    "x": 640,
                    "y": 520,
                    "bmpFont": "bmpFont",
                    "size": "90",
                    "text": "",
                    "anchorX": .5,
                    "anchorY": .5
                }
            }
        },
        "centralFuntainSmallObj":{},
        "preview": {
            "visible":false,
            "eventBlock":true,
            "tweenShow":true,
            "graphAsset": {
                "bgmsgPw": {
                    "name": "bgPreview",
                    "x": 0,
                    "y": 0
                },
                "bgPreview1": {
                    "name": "bgPreview1",
                    "x": 20,
                    "y": 155,
                    "texts": {
                        "pw1":{
                            "x": 200,
                            "y": 35,
                            "font": "40px GROBOLD,Arial, Helvetica sans-serif",
                            "fill": "#ffbd00",
                            "text": "3",
                            "anchorX": 0.5,
                        },
                        "pw2":{
                            "x": 200,
                            "y": 85,
                            "font": "30px GROBOLD,Arial, Helvetica sans-serif",
                            "fill": "#ffbd00",
                            "align":"center",
                            "text": "EXPANDING",
                            "anchorX": 0.5,
                        },
                        "pw3":{
                            "x": 200,
                            "y": 125,
                            "font": "30px GROBOLD,Arial, Helvetica sans-serif",
                            "fill": "#ffbd00",
                            "align":"center",
                            "text": "WILDS",
                            "anchorX": 0.5,
                        }
                    }
                },
                "bgPreview2": {
                    "name": "bgPreview2",
                    "x": 435,
                    "y": 155,
                    "texts": {
                        "pw21":{
                            "x": 200,
                            "y": 35,
                            "font": "40px GROBOLD,Arial, Helvetica sans-serif",
                            "fill": "#ffbd00",
                            "text": "SCATTERS",
                            "anchorX": 0.5,
                        },
                        "pw22":{
                            "x": 200,
                            "y": 85,
                            "font": "30px GROBOLD,Arial, Helvetica sans-serif",
                            "fill": "#ffbd00",
                            "align":"center",
                            "text": "GIVE UP TO 12",
                            "anchorX": 0.5,
                        },
                        "pw23":{
                            "x": 200,
                            "y": 125,
                            "font": "30px GROBOLD,Arial, Helvetica sans-serif",
                            "fill": "#ffbd00",
                            "align":"center",
                            "text": "FREE SPINS",
                            "anchorX": 0.5,
                        }
                    }
                },
                "bgPreview3": {
                    "name": "bgPreview3",
                    "x": 850,
                    "y": 155,
                    "texts": {
                        "pw31":{
                            "x": 200,
                            "y": 35,
                            "font": "40px GROBOLD,Arial, Helvetica sans-serif",
                            "fill": "#ffbd00",
                            "text": "2",
                            "anchorX": 0.5,
                        },
                        "pw32":{
                            "x": 200,
                            "y": 85,
                            "font": "30px GROBOLD,Arial, Helvetica sans-serif",
                            "fill": "#ffbd00",
                            "align":"center",
                            "text": "FREE SPINS LEVELS",
                            "anchorX": 0.5,
                        },
                        "pw33":{
                            "x": 200,
                            "y": 245,
                            "font": "13px GROBOLD,Arial, Helvetica sans-serif",
                            "fill": "#FFFFFF",
                            "align":"center",
                            "text": "LAVA CAVE WITH EXPANDING WILD",
                            "anchorX": 0.5,
                        },
                        "pw34":{
                            "x": 200,
                            "y": 265,
                            "font": "13px GROBOLD,Arial, Helvetica sans-serif",
                            "fill": "#FFFFFF",
                            "align":"center",
                            "text": "AND UNLIMITED MULTIPLIER",
                            "anchorX": 0.5,
                        },
                        "pw35":{
                            "x": 200,
                            "y": 380,
                            "font": "13px GROBOLD,Arial, Helvetica sans-serif",
                            "fill": "#FFFFFF",
                            "align":"center",
                            "text": "GOLD CAVE WITH EXPANDING WILD",
                            "anchorX": 0.5,
                        },
                        "pw36":{
                            "x": 200,
                            "y": 400,
                            "font": "13px GROBOLD,Arial, Helvetica sans-serif",
                            "fill": "#FFFFFF",
                            "align":"center",
                            "text": "MULTIPLIERS AND RETRIGGERS",
                            "anchorX": 0.5,
                        }
                    }
                }
            },

            "checkbox": {
                "name": "check",
                "text": "Don't show anymore",
                "font": "20px Futura PT, Arial",
                "color": "#FFFFFF",
                "x": 50,
                "y": 655,
                "evt": "chkEvt"
            },
            "buttons": {
                "closePreview": {
                    "name": "genericBtn",
                    "x": 640,
                    "y": 675,
                    "evt": "doCloseP",
                    "texts": {
                        "closeLabel": {
                            "x": 0,
                            "y": -14,
                            "fill": "#FFFFFF",
                            "font": "20px Futura PT, Arial",
                            "text": "Continue",
                            "anchorX": .5
                        }
                    }
                }
            }
        },
        "soundReq": {
            "visible":false,
            "eventBlock":true,
            "graphAsset": {
                "bgmsg": {
                    "name": "bgAlpha",
                    "x": 0,
                    "y": 0
                }
            },
            "texts": {
                "msg1": {
                    "x": 640,
                    "y": 290,
                    "fill": "#ffffff",
                    "font": "24px FuturaPT-Heavy",
                    "text": "Activate sounds?",
                    "anchorX": .5
                }
            },
            "buttons": {
                "yb": {
                    "name": "genericBtn",
                    "x": 540,
                    "y": 565,
                    "evt": "doYes",
                    "texts": {
                        "closeLabel": {
                            "x": 0,
                            "y": -14,
                            "fill": "#FFFFFF",
                            "font": "20px Futura PT, Arial",
                            "text": "Yes",
                            "anchorX": .5
                        }
                    }
                },
                "nb": {
                    "name": "genericBtn",
                    "x": 740,
                    "y": 565,
                    "evt": "doNo",
                    "texts": {
                        "closeLabel": {
                            "x": 0,
                            "y": -14,
                            "fill": "#FFFFFF",
                            "font": "20px Futura PT, Arial",
                            "text": "No",
                            "anchorX": .5
                        }
                    }
                }
            }
        },
        "msgBox": {
            "visible":false,
            "eventBlock":true,
            "graphAsset": {
                "bgmsg": {
                    "name": "bgAlpha",
                    "x": 0,
                    "y": 0
                },
                "generic": {
                    "name": "bgPanel",
                    "x": 640,
                    "y": 360,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible":false
                },
                "game": {
                    "name": "bgPanel",
                    "x": 640,
                    "y": 360,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible":false
                }

            },
            "texts": {
                "msg1": {
                    "x": 640,
                    "y": 290,
                    "fill": "#ffffff",
                    "font": "22px FuturaPT-Heavy",
                    "text": ".wqdwe",
                    "anchorX": .5
                },
                "msg2": {
                    "x": 640,
                    "y": 350,
                    "fill": "#ffffff",
                    "font": "20px FuturaPT-Heavy",
                    "text": ".ewfwefewf",
                    "anchorX": .5
                }
            },
            "buttons": {
                "yes": {
                    "name": "yesButton",
                    "x": 500,
                    "y": 525,
                    "evt": "doOk"
                },
                "myAccount": {
                    "name": "container-btn",
                    "x": 650,
                    "y": 525,
                    "evt": "doMyAccount",
                    "texts": {
                        "noLabel": {
                            "x": 0,
                            "y": -13,
                            "fill": "#ffffff",
                            "font": "20px  FuturaPT-Heavy",
                            "text": "My Account",
                            "anchorX": .5
                        }
                    }
                },
                "no": {
                    "name": "noButton",
                    "x": 775,
                    "y": 525,
                    "evt": "doKo"
                },
                "ok": {
                    "name": "container-btn",
                    "x": 640,
                    "anchorX": .5,
                    "y": 525,
                    "evt": "doOk",
                    "texts": {
                        "noLabel": {
                            "x": 0,
                            "y": -13,
                            "fill": "#ffffff",
                            "font": "20px  FuturaPT-Heavy",
                            "text": "OK",
                            "anchorX": .5
                        }
                    }
                }
            }
        },
        "msgBoxFR": {
            "visible":false,
            "eventBlock":true,
            "selectorY":200,
            "selectorX":638,
            "textCol":"#ffffff",
            "graphAsset": {
                "bgmsg": {
                    "name": "bgAlpha",
                    "x": 0,
                    "y": 0
                },
                "generic": {
                    "name": "bgPanel",
                    "x": 640,
                    "y": 310,
                    "anchorX": .5,
                    "anchorY": .5,
                    "scaleX":1.3,
                    "scaleY":1.3
                }
            },
            "texts": {
                "msgFR1": {
                    "x": 640,
                    "y": 230,
                    "fill": "#ffffff",
                    "font": "22px FuturaPT-Heavy",
                    "text": ".wqdwe",
                    "anchorX": .5
                },
                "msgFR2": {
                    "x": 640,
                    "y": 260,
                    "fill": "#ffffff",
                    "font": "20px FuturaPT-Heavy",
                    "text": ".ewfwefewf",
                    "anchorX": .5
                }
            },
            "buttons": {
                "yes": {
                    "name": "container-btn",
                    "x": 500,
                    "y": 550,
                    "evt": "doOk",
                    "texts": {
                        "noLabel": {
                            "x": 0,
                            "y": -13,
                            "fill": "#ffffff",
                            "font": "18px FuturaPT-Heavy",
                            "text": "Use now",
                            "anchorX": .5
                        }
                    }
                },
                "no": {
                    "name": "container-btn",
                    "x": 775,
                    "y": 550,
                    "evt": "doKo",
                    "texts": {
                        "noLabel": {
                            "x": 0,
                            "y": -13,
                            "fill": "#ffffff",
                            "font": "18px FuturaPT-Heavy",
                            "text": "Use later",
                            "anchorX": .5
                        }
                    }
                },
                "ok": {
                    "name": "container-btn",
                    "x": 640,
                    "anchorX": .5,
                    "y": 550,
                    "evt": "doOk",
                    "texts": {
                        "noLabel": {
                            "x": 0,
                            "y": -13,
                            "fill": "#ffffff",
                            "font": "20px FuturaPT-Heavy",
                            "text": "OK",
                            "anchorX": .5
                        }
                    }
                }
            }
        },
        "msgBoxFeature": {
            "visible":false,
            "eventBlock":true,
            "selectorY":270,
            "selectorX":280,
            "textCol":"#ffffff",
            "textYShift":0,
            "graphAsset": {
                "bgmsg": {
                    "name": "bgAlpha",
                    "x": 0,
                    "y": 0
                },
                "generic": {
                    "name": "bgFeatureWinGame",
                    "x": 623,
                    "y": 300,
                    "anchorX": .5,
                    "anchorY": .5,
                    "scaleX":1,
                    "scaleY":1
                }
            },
            "texts": {
                "msgF1": {
                    "x": 640,
                    "y": 150,
                    "fill": "#ffffff",
                    "stroke": "#000000",
                    "stroke_tick": 4,
                    "font": "24px FuturaPT-Heavy",
                    "text": "",
                    "align":"center",
                    "anchorX": .5
                },
                "msgF2": {
                    "x": 640,
                    "y": 195,
                    "fill": "#ffffff",
                    "stroke": "#000000",
                    "stroke_tick": 4,
                    "font": "24px FuturaPT-Heavy",
                    "text": "",
                    "anchorX": .5
                },
                "msgF3": {
                    "x": 640,
                    "y": 280,
                    "fill": "#ffffff",
                    "stroke": "#000000",
                    "stroke_tick": 4,
                    "font": "20px FuturaPT-Heavy",
                    "text": "",
                    "anchorX": .5
                },

                "priceF": {
                    "x": 650,
                    "y": 415,
                    "fill": "#ffffff",
                    "stroke": "#000000",
                    "stroke_tick": 4,
                    "font": "24px FuturaPT-Heavy",
                    "text": "",
                    "anchorX": .5
                }
            },
            "buttons": {
                "yes": {
                    "name": "genericBtn",
                    "x": 500,
                    "y": 630,
                    "evt": "doOkMWJ",
                    "texts": {
                        "noLabel": {
                            "x": 0,
                            "y": -13,
                            "fill": "#ffffff",
                            "font": "18px FuturaPT-Heavy",
                            "text": "OK",
                            "anchorX": .5
                        }
                    }
                },
                "no": {
                    "name": "genericBtn",
                    "x": 775,
                    "y": 630,
                    "evt": "doKo",
                    "texts": {
                        "noLabel": {
                            "x": 0,
                            "y": -13,
                            "fill": "#ffffff",
                            "font": "18px FuturaPT-Heavy",
                            "text": "NO",
                            "anchorX": .5
                        }
                    }
                },
                "ok": {
                    "name": "genericBtn",
                    "x": 640,
                    "anchorX": .5,
                    "y": 630,
                    "evt": "doOk",
                    "texts": {
                        "noLabel": {
                            "x": 0,
                            "y": -13,
                            "fill": "#ffffff",
                            "font": "20px FuturaPT-Heavy",
                            "text": "OK",
                            "anchorX": .5
                        }
                    }
                }
            }
        }
    }
};

var ReelConfig = {
    "slotEngine":"IntegratedSlots",
    "engineNumbers":0,
    "newUI":true,
    "newComm":true,
    "log":true,
    "canSwipe":false,
    "comment_preview":"enable feature preview screen",
    "preview":true,
    "previewTout":45000,
    "spinType": "Spin",
    "comment_winType":"spin class used by the game on line central win field",
    "winType": "SimpleWin",
    "comment_winTypeStatus":"spin class used by the game on status bar win field",
    "statusWinType": "NewUIBounceWin",
    "delayAfterWinAmt": 100,
    "comment_delayBeforeIdle": "after the first winning dicplay cycle with animation the engin starts the idle cycle with just win amount for each line and a symple winning HL",
    "delayBeforeIdle": 2000,
    "comment_idleLineTime": "single line time during idle cycle winning display",
    "idleLineTime": 1000,
    "comment__winTxtColors": "win amount counter colors",
    "winTxtColors": ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
    "comment_type of lines": "the class will handle line drawing",
    "lineType": "AllLineWinningsFirst",
    "lineFrames":31,
    "lineFrames":19,
    "comment_lineWinAmtType":"lines/coinWinning class",
    "lineWinAmtType":"NormalLineWinAmount",
    "numReels": 5,
    "numIcons": 3,
    "numIconsOnTop": 1,
    "numIconsOnBottom":1,
    "icons": [25, 25, 25, 25, 25 ],
    "_spinResult":[[9,2,1,10,8],[9,2,1,10,8],[9,2,1,10,8],[9,2,1,10,8],[9,2,1,4,5]],
    "spinWithAlpha": .6,
    "spinConfig":{
        "es":{
            "stopEnabled":false,
            "reelSecondMovementTime":0.5,
            "reelLoopInterval":.17,
            "reelPreMovement": 4,
            "reelPreMovementTime": .2,
            "reelBaseInterval": 6,
            "reelStopInterval": 1,
            "reelSpinBounceMeasure": 40,
            "reelSpinBounceTime": .28,
            "reelSpinBounceForce": 1.2
        },
        "default":{
            "stopEnabled":true,
            "reelSecondMovementTime":0.4,
            "reelLoopInterval":.20,
            "reelPreMovement": 0,
            "reelPreMovementTime": 0,
            "reelBaseInterval": 2,
            "reelStopInterval": 1,
            "reelSpinBounceMeasure": 40,
            "reelSpinBounceTime": .28,
            "reelSpinBounceForce": 1.2
        }
    },
    "numIcon": 11,
    "loadTout": 30,
    "credits": "5000",
    "bet": "0.50",
    "animDelayAfterWild":800,
    "freeRounds":"normal",
    "freeSpins":"BarbarianFreeSpins",
    "_fsIcon": 1,
    "winHLScale":1.15,
    "fsSpinDelay":750,
    "minFsSmbs":3,
    "scatterIcon": 11,
    "scatterType": "SubstScatter",
    "_twinReelsFeature":"normal",
    "wildType": "MultipleWildsReel",
    "wildNum": [10,12,13],
    "wildReelOrigin":0,
    "wildReelRollbackSpinDelay": 500,
    "wilTextAnimOnly":true,
    "winTxtClasses": [1, 2, 5, 10, 20, 50, 100, 300, 500, 1000],
    "smb_colors":[0xff33cc,0xcc33ff,0x0066ff,0x00ff99,0xffcc00,0xff33cc,0xcc33ff,0x0066ff,0x00ff99,0xffcc00,0xffcc00],
    "smbMinAnimTime":[.5,.5,.5,.5,.5,.5,.5,1.5,.5,.5],
    "muteDuringWins":true,
    "keepShowingAnimation":false,
    "additionalPreText":"",
    "additionalPostText":"",
    "reel": {
        "deltaX_0": 200,
        "deltaX": 176,
        "deltaY_0": 632,
        "deltaY": 176
    },
    "icon": {
        "x": 0,
        "y": 0,
        "width": 176,
        "height": 176
    },
    "ForceFeature":{
        "ch1":{
            "value":"&freeSpins=1",
            "description":"Free Spins"
        }
    }
};

var lineConfig = {
    "win": {
        "min": 2,
        "wild": 1,
        "initialDelay": 200,
        "delay": 100,
        "duration": 2000
    },
    "line": {
        "comment_linesNumber": "number of lines to draw in winning animation",
        "color": "0xCC0000",
        "tickBase": 5,
        "alpha": 1,
        "pointToPointSpeed": .5,
        "duration": 30,
        "showWinWithSmbColor": true,
        "multipleAnimation": [false, false, false, false, false, false, false, false, false, false, false, false],
        "lineColours": [0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff],
    }
};

var paytableAssets = {

    "pages": [

        //Game guide object
        {
            "gameguide": true,
            "title": "Barbarian Gold Game Rules",
            "rtp": [
                "96.30",
                "96.30",
                "96.30"
            ]
        },

        {
            "symbols": {

                "colours": {
                    //If you want colour scheme define in here (left empty as an example of the default colours new ui uses if not set)
                },

                //Config for symbol payouts
                "config": [

                    //Each array represents 1 row in payout
                    [

                        //Each object represents column in paytable
                        {

                            "id": "symbol_00", //ID of DIV (not required but useful)
                            "bg": "barbarianGold/img/symbol-00.png", //symbol image
                            "payout_values": true //Whether symbol has payout values

                        },

                        {

                            "id": "symbol_01",
                            "bg": "barbarianGold/img/symbol-01.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_02",
                            "bg": "barbarianGold/img/symbol-02.png",
                            "payout_values": true

                        }


                    ],

                    [

                        {

                            "id": "symbol_03",
                            "bg": "barbarianGold/img/symbol-03.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_04",
                            "bg": "barbarianGold/img/symbol-04.png",
                            "payout_values": true

                        }

                    ],

                    [
                        {

                            "id": "symbol_05",
                            "bg": "barbarianGold/img/symbol-05.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_06",
                            "bg": "barbarianGold/img/symbol-06.png",
                            "payout_values": true

                        }


                    ],

                    [
                        {
                            "id": "symbol_07",
                            "bg": "barbarianGold/img/symbol-07.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_08",
                            "bg": "barbarianGold/img/symbol-08.png",
                            "payout_values": true

                        },
                    ],
                    [
                        {
                            "id": "symbol_09",
                            "bg": "barbarianGold/img/symbol-09.png",
                            "payout_values": true,
                        },
                    ],
                    [
                        {
                            "id": "symbol_10",
                            "bg": "barbarianGold/img/symbol-10.png",
                            "payout_values": false,
                        },
                        {
                            "id": "exp9",
                            "bg": "barbarianGold/img/paytable/symbol-10-expanded.png",
                            "payout_values": false,
                            "size": { //Optional field that sets image height & width in px

                                "height": "300",
                                "width":  "120"

                            }

                        },

                    ],
                    [
                        {
                            "id": "exp9",
                            "payout_values": false,
                            "text": [
                                "The wild appears on any top position of the reels and expands to cover the entire reel.",
                                "It completes and substitutes all the icons except for free spin.",
                                "More than 1 wild can appear at the same time."
                            ],
                        },

                    ],
                    [

                        {
                            "id": "symbol_12",
                            "bg": "barbarianGold/img/symbol-11.png",
                            "payout_values": false,
                            "text": [
                                "3 Scatter symbols awards 8 Free Spins in the Lava Cave.",
                                "4 Scatter symbols awards 10 Free Spins in the Lava Cave.",
                                "5 Scatter symbols awards 12 Free Spins in the Lava Cave.",
                                "Scatter Symbols can appear in the Lava Cave giving access to the Gold Cave and awarding additional Free Spins."
                            ],
                        },

                    ],
                    [

                        {
                            "id": "fs1image",
                            "bg": "barbarianGold/img/paytable/fsLevel1.png",
                            "payout_values": false,
                            "text": [
                                "Lava Cave",
                                "Expanding wilds can appear on all reels.",
                                "Expanding wilds increment the multiplier by 1.",
                                "More than 1 wild can appear at the same time.",
                                "3 Scatter symbols in the Lava Cave give 4 additional Free Spins.",
                                "4 Scatter symbols in the Lava Cave give 5 additional Free Spins.",
                                "5 Scatter symbols in the Lava Cave give 6 additional Free Spins.",
                                "3 or more Scatters bring you to the Gold Cave."
                            ],
                            "size": { //Optional field that sets image height & width in px

                                "height": "200",
                                "width":  "400"

                            }
                        },

                    ],
                    [

                        {
                            "id": "fs2image",
                            "bg": "barbarianGold/img/paytable/fsLevel2.png",
                            "payout_values": false,
                            "text": [
                                "Gold Cave",
                                "Expanding wilds can appear on all reels.",
                                "Expanding wild increments the multiplier by 1 and gives 1 additional Free Spin each.",
                                "More than 1 wild can appear at the same time."
                            ],
                            "size": { //Optional field that sets image height & width in px

                                "height": "200",
                                "width":  "400"

                            }
                        },

                    ],



                ]

            }

        },

        //Win Lines objects
        {

            "lines": [1, 20],
            "text_colour": "#93d8fe",      //optional
            "checked_colour": "#FFFFFF",   //optional
            "unchecked_colour": "#08b936", //optional
            "winLinesPerRow": 5            //optional

        }

    ]

}
