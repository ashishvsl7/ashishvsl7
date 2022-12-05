
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
        "sprite": "fonts/fontAvalon.png",
        "font": "fonts/fontAvalon.xml"
    }
};

var extScripts={
    "webfont": "15px FuturaPT-Heavy",
    "webfont1": "15px FuturaPT-Book",
    "webfont2": "15px GermaniaOne-Regular"
};
var gameAssets = {
    "assets": {
        "icon0": "avalonQuest/img/symbol-00.png",
        "icon1": "avalonQuest/img/symbol-01.png",
        "icon2": "avalonQuest/img/symbol-02.png",
        "icon3": "avalonQuest/img/symbol-03.png",
        "icon4": "avalonQuest/img/symbol-04.png",
        "icon5": "avalonQuest/img/symbol-05.png",
        "icon6": "avalonQuest/img/symbol-06.png",
        "icon7": "avalonQuest/img/symbol-07.png",
        "icon8": "avalonQuest/img/symbol-08.png",
        "icon9": "avalonQuest/img/symbol-09.png",
        "icon10": "avalonQuest/img/symbol-10.png",
        "icon11": "avalonQuest/img/symbol-11.png",
        "icon12": "avalonQuest/img/symbol-12.png",
        "icon13": "avalonQuest/img/symbol-13.png",
        "icon14": "avalonQuest/img/symbol-14.png",
        "icon15": "avalonQuest/img/symbol-15.png",
        "icon16": "avalonQuest/img/symbol-16.png",
        "icon17": "avalonQuest/img/symbol-17.png",
        "icon18": "avalonQuest/img/symbol-18.png",
        "icon19": "avalonQuest/img/symbol-19.png",
        "bicon0": "avalonQuest/img/b-symbol-00.png",
        "bicon1": "avalonQuest/img/b-symbol-01.png",
        "bicon2": "avalonQuest/img/b-symbol-02.png",
        "bicon3": "avalonQuest/img/b-symbol-03.png",
        "bicon4": "avalonQuest/img/b-symbol-04.png",
        "bicon5": "avalonQuest/img/b-symbol-05.png",
        "bicon6": "avalonQuest/img/b-symbol-06.png",
        "bicon7": "avalonQuest/img/b-symbol-07.png",
        "bicon8": "avalonQuest/img/b-symbol-08.png",

        "line_0_00": "avalonQuest/img/lines/payline_0_00.png",
        "line_0_01": "avalonQuest/img/lines/payline_0_01.png",
        "line_0_02": "avalonQuest/img/lines/payline_0_02.png",
        "line_0_03": "avalonQuest/img/lines/payline_0_03.png",
        "line_0_04": "avalonQuest/img/lines/payline_0_04.png",
        "line_0_05": "avalonQuest/img/lines/payline_0_05.png",
        "line_0_06": "avalonQuest/img/lines/payline_0_06.png",
        "line_0_07": "avalonQuest/img/lines/payline_0_07.png",
        "line_0_08": "avalonQuest/img/lines/payline_0_08.png",
        "line_0_09": "avalonQuest/img/lines/payline_0_09.png",
        "line_0_10": "avalonQuest/img/lines/payline_0_10.png",
        "line_0_11": "avalonQuest/img/lines/payline_0_11.png",
        "line_0_12": "avalonQuest/img/lines/payline_0_12.png",
        "line_0_13": "avalonQuest/img/lines/payline_0_13.png",
        "line_0_14": "avalonQuest/img/lines/payline_0_14.png",
        "line_0_15": "avalonQuest/img/lines/payline_0_15.png",
        "line_0_16": "avalonQuest/img/lines/payline_0_16.png",
        "line_0_17": "avalonQuest/img/lines/payline_0_17.png",
        "line_0_18": "avalonQuest/img/lines/payline_0_18.png",
        "line_0_19": "avalonQuest/img/lines/payline_0_19.png",
        "line_0_static": "avalonQuest/img/lines/payline_Static.png",
        "IEFB1":"avalonQuest/img/symbol-10_exp.png",
        "bottomBar": "gui/message-bar.png",
        "bgPanel": "avalonQuest/img/pop-up.png",
        "bgPanelGame": "avalonQuest/img/pop-up.png",
        "bgPreview":"avalonQuest/img/paytable/intro-page.png",
        "bgPreview1":"avalonQuest/img/paytable/page-01.png",
        "bgPreview2":"avalonQuest/img/paytable/page-02.png",
        "freeRoundsPanel":"avalonQuest/img/free-rounds.png",
        "bgAlpha": "avalonQuest/img/alpha.png",
        "bigWin":"avalonQuest/img/big-win.png",
        "superWin":"avalonQuest/img/epic-win.png",
        "megaWin":"avalonQuest/img/ultra-win.png",
        "bg_r": "avalonQuest/img/bg/base-right.jpg",
        "bg_l": "avalonQuest/img/bg/base-left.jpg",
        "bg_b": "avalonQuest/img/bg/base-bottom.jpg",
        "bg_t": "avalonQuest/img/bg/base-top.jpg",
        "bg_m": "avalonQuest/img/bg/base-main.jpg",
        "bgFS_r": "avalonQuest/img/bg/base-right_FS.jpg",
        "bgFS_l": "avalonQuest/img/bg/base-left_FS.jpg",
        "bgFS_b": "avalonQuest/img/bg/base-bottom_FS.jpg",
        "bgFS_t": "avalonQuest/img/bg/base-top_FS.jpg",
        "bgFS_m": "avalonQuest/img/bg/base-main_FS.jpg",
        "volOnButton": "gui/btnVolOn.png",
        "volOffButton": "gui/btnVolOff.png",
        "freeSpinPanel":"avalonQuest/img/free-spins.png",
        "wildBg":"avalonQuest/img/symbol-10_exp.png",

    },
    "localizedAssets":{
        "graphAsset": {
            "logo": {
                "lang": ["zs","ko","jp"],
                "img": "avalonQuest/img/logo"
            }
        }
    },
    "buttonsSpriteSheet": {
        "container-btn": {
            "sprite": "gui/generic/img/generic-game-btn.png",
            "json": "gui/generic/img/generic-game-btn.png",
            "w": 210,
            "h": 68
        },
        "yesButton": {
            "sprite": "avalonQuest/img/yes-btn.png",
            "json": "avalonQuest/img/yes-btn.png",
            "w": 62,
            "h": 62
        },
        "noButton": {
            "sprite": "avalonQuest/img/no-btn.png",
            "json": "avalonQuest/img/no-btn.png",
            "w": 62,
            "h": 62
        },
        "check": {
            "sprite": "avalonQuest/img/radio-btns.png",
            "json": "avalonQuest/img/radio-btns.png",
            "w": 64,
            "h": 32
        },
        "genericBtn":{
            "sprite": "gui/generic/img/generic-game-btn.png",
            "json": "gui/generic/img/generic-game-btn.png",
            "w": 210,
            "h": 68
        }
    },
    "animations": {
        "anim0": {
            "json": "avalonQuest/img/anim/symbol-00.json",
            "sprite": "avalonQuest/img/anim/symbol-00.png"
        },
        "anim1": {
            "json": "avalonQuest/img/anim/symbol-01.json",
            "sprite": "avalonQuest/img/anim/symbol-01.png"
        },
        "anim2": {
            "json": "avalonQuest/img/anim/symbol-02.json",
            "sprite": "avalonQuest/img/anim/symbol-02.png"
        },
        "anim3": {
            "json": "avalonQuest/img/anim/symbol-03.json",
            "sprite": "avalonQuest/img/anim/symbol-03.png"
        },
        "anim4": {
            "json": "avalonQuest/img/anim/symbol-04.json",
            "sprite": "avalonQuest/img/anim/symbol-04.png"
        },
        "anim5": {
            "json": "avalonQuest/img/anim/symbol-05.json",
            "sprite": "avalonQuest/img/anim/symbol-05.png"
        },
        "anim6": {
            "json": "avalonQuest/img/anim/symbol-06.json",
            "sprite": "avalonQuest/img/anim/symbol-06.png"
        },
        "anim7": {
            "json": "avalonQuest/img/anim/symbol-07.json",
            "sprite": "avalonQuest/img/anim/symbol-07.png"
        },
        "anim8": {
            "json": "avalonQuest/img/anim/symbol-08.json",
            "sprite": "avalonQuest/img/anim/symbol-08.png"
        },
        "anim9": {
            "json": "avalonQuest/img/anim/symbol-09.json",
            "sprite": "avalonQuest/img/anim/symbol-09.png"
        },
        "anim10": {
            "json": "avalonQuest/img/anim/fakeAnim.json",
            "sprite": "avalonQuest/img/anim/fakeAnim.png"
        },
        "anim10": {
            "json": "avalonQuest/img/anim/symbol-00-selected.json",
            "sprite": "avalonQuest/img/anim/symbol-00-selected.png"
        },
        "anim11": {
            "json": "avalonQuest/img/anim/symbol-01-selected.json",
            "sprite": "avalonQuest/img/anim/symbol-01-selected.png"
        },
        "anim12": {
            "json": "avalonQuest/img/anim/symbol-02-selected.json",
            "sprite": "avalonQuest/img/anim/symbol-02-selected.png"
        },
        "anim13": {
            "json": "avalonQuest/img/anim/symbol-03-selected.json",
            "sprite": "avalonQuest/img/anim/symbol-03-selected.png"
        },
        "anim14": {
            "json": "avalonQuest/img/anim/symbol-04-selected.json",
            "sprite": "avalonQuest/img/anim/symbol-04-selected.png"
        },
        "anim15": {
            "json": "avalonQuest/img/anim/symbol-05-selected.json",
            "sprite": "avalonQuest/img/anim/symbol-05-selected.png"
        },
        "anim16": {
            "json": "avalonQuest/img/anim/symbol-06-selected.json",
            "sprite": "avalonQuest/img/anim/symbol-06-selected.png"
        },
        "anim17": {
            "json": "avalonQuest/img/anim/symbol-07-selected.json",
            "sprite": "avalonQuest/img/anim/symbol-07-selected.png"
        },
        "anim18": {
            "json": "avalonQuest/img/anim/symbol-08-selected.json",
            "sprite": "avalonQuest/img/anim/symbol-08-selected.png"
        },

        "bluFlame": {
            "json": "avalonQuest/img/anim/win-highlight.json",
            "sprite": "avalonQuest/img/anim/win-highlight.png"
        },
        "wildReel_0": {
            "json": "avalonQuest/img/anim/symbol-19-part1.json",
            "sprite": "avalonQuest/img/anim/symbol-19-part1.png"
        },
        "wildReel_1": {
            "json": "avalonQuest/img/anim/symbol-19-part2.json",
            "sprite": "avalonQuest/img/anim/symbol-19-part2.png"
        },
        "iconWinBgAnim":{
            "json": "avalonQuest/img/anim/win-highlight.json",
            "sprite": "avalonQuest/img/anim/win-highlight.png"
        },
        "part-1": {
            "json": "avalonQuest/img/anim/bronze-coin.json",
            "sprite": "avalonQuest/img/anim/bronze-coin.png"
        },
        "part-2": {
            "json": "avalonQuest/img/anim/silver-coin.json",
            "sprite": "avalonQuest/img/anim/silver-coin.png"
        },
        "part-3": {
            "json": "avalonQuest/img/anim/gold-coin.json",
            "sprite": "avalonQuest/img/anim/gold-coin.png"
        },
        "f-part-1": {
            "json": "avalonQuest/img/anim/bronze-coin-frwrd.json",
            "sprite": "avalonQuest/img/anim/bronze-coin-frwrd.png"
        },
        "f-part-2": {
            "json": "avalonQuest/img/anim/silver-coin-frwrd.json",
            "sprite": "avalonQuest/img/anim/silver-coin-frwrd.png"
        },
        "f-part-3": {
            "json": "avalonQuest/img/anim/gold-coin-frwrd.json",
            "sprite": "avalonQuest/img/anim/gold-coin-frwrd.png"
        },
        "panelFs1":{
            "json":"avalonQuest/img/anim/crown-feature/feature-part1.json",
            "sprite":"avalonQuest/img/anim/crown-feature/feature-part1.png"
        },
        "panelFs2":{
            "json":"avalonQuest/img/anim/crown-feature/feature-part2.json",
            "sprite":"avalonQuest/img/anim/crown-feature/feature-part2.png"
        },
        "panelFs3":{
            "json":"avalonQuest/img/anim/crown-feature/feature-part3.json",
            "sprite":"avalonQuest/img/anim/crown-feature/feature-part3.png"
        },
        "reelFlame_0":{
            "json": "avalonQuest/img/anim/reel-anticipation-part1.json",
            "sprite": "avalonQuest/img/anim/reel-anticipation-part1.png"
        },
        "reelFlame_1":{
            "json": "avalonQuest/img/anim/reel-anticipation-part2.json",
            "sprite": "avalonQuest/img/anim/reel-anticipation-part2.png"
        }
    },
    "importantSounds": {
        "spinClick": {
            "name": "avalonQuest/sounds/spinClick.mp3",
            "volume": .2
        },
        "reelSound": {
            "name": "avalonQuest/sounds/reelSound.mp3",
            "volume":.9
        },
        "reelSoundFast_0": {
            "name": "avalonQuest/sounds/reelSoundFast.mp3",
            "volume":1
        },
        "reelSoundFast1_0": {
            "name": "avalonQuest/sounds/reelSoundFast.mp3",
            "volume":1
        },
        "reelSoundFast_1": {
            "name": "avalonQuest/sounds/reelSoundFast.mp3",
            "volume":1
        },
        "reelSoundFast1_1": {
            "name": "avalonQuest/sounds/reelSoundFast.mp3",
            "volume":1
        },
        "reelSoundFast_2": {
            "name": "avalonQuest/sounds/reelSoundFast.mp3",
            "volume":1
        },
        "reelSoundFast1_2": {
            "name": "avalonQuest/sounds/reelSoundFast.mp3",
            "volume":1
        },
        "reelSoundFast_3": {
            "name": "avalonQuest/sounds/reelSoundFast.mp3",
            "volume":1
        },
        "reelSoundFast1_3": {
            "name": "avalonQuest/sounds/reelSoundFast.mp3",
            "volume":1
        },
        "reelSoundFast_4": {
            "name": "avalonQuest/sounds/reelSoundFast.mp3",
            "volume":1
        },
        "reelSoundFast1_4": {
            "name": "avalonQuest/sounds/reelSoundFast.mp3",
            "volume":1
        },
        "reelStop": {
            "name": "avalonQuest/sounds/reelStop.mp3",
            "volume":.4
        }
    },
    "sounds": {
        "click": {
            "name": "avalonQuest/sounds/click.mp3",
            "volume": .2
        },
        "smbWin_0": {
            "name": "avalonQuest/sounds/smbWin_0.mp3",
            "volume": 1
        },
        "smbWin_1": {
            "name": "avalonQuest/sounds/smbWin_0.mp3",
            "volume": 1
        },
        "smbWin_2": {
            "name": "avalonQuest/sounds/smbWin_0.mp3",
            "volume": 1
        },
        "smbWin_3": {
            "name": "avalonQuest/sounds/smbWin_0.mp3",
            "volume": 1
        },
        "smbWin_4": {
            "name": "avalonQuest/sounds/smbWin_0.mp3",
            "volume": 1
        },
        "smbWin_5": {
            "name": "avalonQuest/sounds/smbWin_5.mp3",
            "volume": 1
        },
        "smbWin_6": {
            "name": "avalonQuest/sounds/smbWin_6.mp3",
            "volume": 1
        },
        "smbWin_7": {
            "name": "avalonQuest/sounds/smbWin_7.mp3",
            "volume": 1
        },
        "smbWin_8": {
            "name": "avalonQuest/sounds/smbWin_8.mp3",
            "volume": 1
        },
        "wildReel": {
            "name": "avalonQuest/sounds/wildReel.mp3",
            "volume": 1
        },
        "wildReelFast": {
            "name": "avalonQuest/sounds/wildReel.mp3",
            "volume": 1
        },

        "wildReelOut": {
            "name": "avalonQuest/sounds/wildReelRollback.mp3",
            "volume": 1
        },

        "fsWin": {
            "name": "avalonQuest/sounds/fsWin.mp3",
            "volume": 3
        },
        "fsWon": {
            "name": "avalonQuest/sounds/introFs.mp3",
            "volume": 1
        },
        "fsRetrigger": {
            "name": "avalonQuest/sounds/fsRetrigger.mp3",
            "volume": 1.2
        },
        "incWin": {
            "name": "avalonQuest/sounds/counter.mp3",
            "volume": .4,
            "loop": true
        },
        "line": {
            "name": "avalonQuest/sounds/line.mp3",
            "volume": 1
        },
        "winBg_0": {
            "name": "avalonQuest/sounds/centralWin/win1.mp3",
            "volume": 0
        },
        "winBg_1": {
            "name": "avalonQuest/sounds/centralWin/win2.mp3",
            "volume": 1
        },
        "winBg_2": {
            "name": "avalonQuest/sounds/centralWin/win3.mp3",
            "volume": 1
        },
        "winBg_3": {
            "name": "avalonQuest/sounds/centralWin/win4.mp3",
            "volume": 1
        },
        "winBg_4": {
            "name": "avalonQuest/sounds/centralWin/win5.mp3",
            "volume": 1
        },
        "winBg_5": {
            "name": "avalonQuest/sounds/centralWin/win6.mp3",
            "volume": 1
        },
        "winBg_6": {
            "name": "avalonQuest/sounds/centralWin/bigWin.mp3",
            "volume": 1
        },
        "winBg_7": {
            "name": "avalonQuest/sounds/centralWin/superBigWin.mp3",
            "volume": 1
        },
        "winBg_8": {
            "name": "avalonQuest/sounds/centralWin/megaBigWin.mp3",
            "volume": 1
        },
        "winBgS_6": {
            "name": "avalonQuest/sounds/centralWin/bigWin.mp3",
            "volume": 1
        },
        "winBgS_7": {
            "name": "avalonQuest/sounds/centralWin/superBigWin.mp3",
            "volume":1
        },
        "winBgS_8": {
            "name": "avalonQuest/sounds/centralWin/megaBigWin.mp3",
            "volume": .7
        },
        "winPanel": {
            "name": "avalonQuest/sounds/winScreen.mp3",
            "volume": 1
        },
        "coins": {
            "name": "avalonQuest/sounds/coins.mp3",
            "volume":.3
        },
        "scatterHL": {
            "name": "avalonQuest/sounds/specialSymbolLand.mp3",
            "volume":.5
        },
        "scatterExpand": {
            "name": "avalonQuest/sounds/symbolSurround.mp3",
            "volume":1.5
        }
    },
    "bgSounds": {
        "bgSlot": {
            "name": "avalonQuest/sounds/bg.mp3",
            "volume": 1.2
        },
        "bgFs": {
            "name": "avalonQuest/sounds/bgFs.mp3",
            "volume": .9
        }
    }

};
var guiConfig = {
    "credits": ["cash","credits"]
};
var displayManager = {
    "render":Phaser.AUTO,
    "groups": {

        "bg": {
            "visible":false,
            "graphAsset": {
                "bg": {
                    "name": "bg_r",
                    "x": 1080,
                    "y": 104
                },
                "bg1": {
                    "name": "bg_l",
                    "x": 0,
                    "y": 104
                }
            }
        },
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
        "bgFS": {
            "visible":false,
            "graphAsset": {
                "bg": {
                    "name": "bgFS_r",
                    "x": 1080,
                    "y": 104
                },
                "bg1": {
                    "name": "bgFS_l",
                    "x": 0,
                    "y": 104
                }
            }
        },
        "frameFS": {
            "visible":false,
            "graphAsset": {
                "bg4": {
                    "name": "bgFS_m",
                    "x": 200,
                    "y": 104
                }
            }
        },
        "reels": {},
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
        "maskFS":{
            "visible":false,
            "graphAsset": {
                "bg2": {
                    "name": "bgFS_b",
                    "x": 0,
                    "y": 632
                },
                "bg3": {
                    "name": "bgFS_t",
                    "x": 0,
                    "y": 0
                }
            }
        },
        "bgIconAnim":{},
        "flames": {},
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

        "wild": {
        },
        "scatter": {},
        "wins": {},
        "lines": {},
        "reelsPt_": {
            "visible": false,
            "clickDuration": 1000,
            "tOut": 3000,
            "x":300,
            "graphAsset": {
                "bgReelPt": {
                    "name": "bgPanel",
                    "width": 640,
                    "height":480,
                    "x":640,
                    "y":350,
                    "anchorX":.5,
                    "anchorY":.5
                }
            },
            "texts": {
                "ptDesc": {
                    "x": 644,
                    "y": 460,
                    "fill": "#ffffff",
                    "font": "20px Arial",
                    "text": "",
                    "anchorX": .5
                },
                "po5": {
                    "x": 610,
                    "y": 430,
                    "fill": "#ffffff",
                    "font": "20px Arial",
                    "text": "1",
                    "anchorX": .5
                },
                "win5": {
                    "x": 660,
                    "y": 430,
                    "fill": "#ffffff",
                    "font": "20px Arial",
                    "text": "5",
                    "anchorX": .5
                },
                "po4": {
                    "x": 610,
                    "y": 450,
                    "fill": "#ffffff",
                    "font": "20px Arial",
                    "text": "1",
                    "anchorX": .5
                },
                "win4": {
                    "x": 660,
                    "y": 450,
                    "fill": "#ffffff",
                    "font": "20px Arial",
                    "text": "5",
                    "anchorX": .5
                },
                "po3": {
                    "x": 610,
                    "y": 470,
                    "fill": "#ffffff",
                    "font": "20px Arial",
                    "text": "1",
                    "anchorX": .5
                },
                "win3": {
                    "x": 660,
                    "y": 470,
                    "fill": "#ffffff",
                    "font": "20px Arial",
                    "text": "5",
                    "anchorX": .5
                },
                "po2": {
                    "x": 610,
                    "y": 490,
                    "fill": "#ffffff",
                    "font": "20px Arial",
                    "text": "1",
                    "anchorX": .5
                },
                "win2": {
                    "x": 660,
                    "y": 490,
                    "fill": "#ffffff",
                    "font": "20px Arial",
                    "text": "5",
                    "anchorX": .5
                },
                "po1": {
                    "x": 610,
                    "y": 510,
                    "fill": "#ffffff",
                    "font": "20px Arial",
                    "text": "1",
                    "anchorX": .5
                },
                "win1": {
                    "x": 660,
                    "y": 510,
                    "fill": "#ffffff",
                    "font": "20px Arial",
                    "text": "5",
                    "anchorX": .5
                }
            }
        },
        "freeRounds": {
            "visible":false,
            "comment_movingLogo":"true when the panel substitute the logo",
            "movingLogo":true,
            "graphAsset": {
                "frPanel":{
                    "name": "freeRoundsPanel",
                    "x": 640,
                    "y": 14,
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
                    "x": 370,
                    "y": 22,
                    "fill": "#FFFFFF",
                    "font": "13px Futura ,Arial",
                    "text": "Free Spins",
                    "anchorX": 1
                },
                "fsValue": {
                    "x": 340,
                    "y": 38,
                    "fill": "#FFFFFF",
                    "font": "23px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                },
                "totWonLabel": {
                    "x": 960,
                    "y": 22,
                    "fill": "#FFFFFF",
                    "font": "13px Futura ,Arial",
                    "text": "Total won",
                    "anchorX": 1
                },
                "totWonValue": {
                    "x": 930,
                    "y": 38,
                    "fill": "#FFFFFF",
                    "font": "23px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                }
            }
        },
        "fsWonPanel": {
            "visible": false,
            "fakeButton": true,
            "eventBlock": true,
            "duration": 9,
            "graphAsset": {
                "bgmsg": {
                    "name": "bgAlpha",
                    "x": 0,
                    "y": 0,
                    "alpha": .9
                }
            }
        },
        "fsWonPanelText": {
            "visible": false,
            "graphAsset": {
                "bgmsg": {
                    "name": "bgAlpha",
                    "x": 0,
                    "y": 0,
                    "alpha": 0
                }
            },
            "texts": {
                "fsWLabel": {
                    "x": 795,
                    "y": 360,
                    "fill": "#ffffff",
                    "font": "22px GermaniaOne-Regular,FuturaPT-Heavy",
                    "text": "You won",
                    "anchorX": .5
                },
                "fsValue1": {
                    "x": 795,
                    "y": 400,
                    "fill": "#ffffff",
                    "font": "22px GermaniaOne-Regular,FuturaPT-Heavy",
                    "text": "5",
                    "anchorX": .5
                },
                "fsWLabel1": {
                    "x": 795,
                    "y": 440,
                    "fill": "#ffffff",
                    "font": "22px GermaniaOne-Regular,FuturaPT-Heavy",
                    "text": "Free spins!",
                    "align":"center",
                    "anchorX": .5
                },
                "fsSLabel": {
                    "x": 480,
                    "y": 500,
                    "fill":  "#ffffff",
                    "font": "20px GermaniaOne-Regular,FuturaPT-Heavy",
                    "text": "Picking special symbol",
                    "aligh": "center",
                    "anchorX": .5
                },
            },
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
                    "y": 365,
                    "anchorX": .5,
                    "anchorY": .5
                },
            },
            "texts": {
                "fsE1": {
                    "x": 640,
                    "y": 230,
                    "fill": "#ffffff",
                    "stroke": "#000000",
                    "stroke_tick": 4,
                    "font": "26px FuturaPT-Heavy",
                    "text": "FREE SPINS ARE NOW OVER",
                    "anchorX": .5
                },
                "fsE2": {
                    "x": 640,
                    "y": 300,
                    "fill": "#ffffff",
                    "stroke": "#000000",
                    "stroke_tick": 4,
                    "font": "35px FuturaPT-Heavy",
                    "text": "",
                    "anchorX": .5
                },
                "fsE3": {
                    "x": 640,
                    "y": 350,
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
                    "name": "bgPanelGame",
                    "x": 640,
                    "y": 340,
                    "anchorX": .5,
                    "anchorY": .5,
                    "scaleX":1,
                    "scaleY":1
                }
            },
            "texts": {
                "frWLabelTitol": {
                    "x": 640,
                    "y": 240,
                    "fill": "#ffffff",
                    "font": "14px FuturaPT-Book",
                    "text":"",
                    "anchorX": .5
                },
                "frWLabel": {
                    "x": 640,
                    "y": 260,
                    "fill": "#ffffff",
                    "font": "18px FuturaPT-Book",
                    "text":"",
                    "align":"center",
                    "anchorX": .5
                },
                "frValue1": {
                    "x": 640,
                    "y": 300,
                    "fill": "#ffffff",
                    "font": "24px FuturaPT-Book",
                    "text": "5",
                    "anchorX": .5
                },
                "frWLabel1": {
                    "x": 640,
                    "y": 330,
                    "fill": "#ffffff",
                    "font": "18px FuturaPT-Book",
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
                "group":{
                    "name":"centralFuntain"
                },
                "bigWin": {
                    "name": "bigWin",
                    "x": 635,
                    "y": 290,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "sBigWin": {
                    "name": "superWin",
                    "x": 635,
                    "y": 250,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "mBigWin": {
                    "name": "megaWin",
                    "x": 635,
                    "y": 250,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                }
            }
        },
        "centralLineWin": {
            "visible": false,
            "texts": {
                "lineWin": {
                    "x": 640,
                    "y": 490,
                    "bmpFont": "bmpFont",
                    "size": "100",
                    "text": "",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "lineWinFinal": {
                    "x": 640,
                    "y": 350,
                    "bmpFont": "bmpFont",
                    "size": "100",
                    "text": "",
                    "anchorX": .5,
                    "anchorY": .5
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
                    "x": 100,
                    "y": 80,
                    "texts": {
                        "pw1": {
                            "x": 220,
                            "y": 90,
                            "font": "36px GermaniaOne-Regular,Arial, Helvetica sans-serif",
                            "fill": "#b4ff8b",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "text": "EXPANDING WILD",
                            "anchorX": 0.5,
                        },
                        "pw2": {
                            "x": 220,
                            "y": 460,
                            "font": "22px GermaniaOne-Regular,Arial, Helvetica sans-serif",
                            "fill": "#b4ff8b",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align": "center",
                            "text": "SUBSTITUTE FOR ALL" ,
                            "anchorX": 0.5,
                        },
                        "pw21": {
                            "x": 220,
                            "y": 480,
                            "font": "22px GermaniaOne-Regular,Arial, Helvetica sans-serif",
                            "fill": "#b4ff8b",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align": "center",
                            "text": "NON-SPECIAL SYMBOLS",
                            "anchorX": 0.5,
                        }
                    }
                },
                "bgPreview2": {
                    "name": "bgPreview2",
                    "x": 710,
                    "y": 80,
                    "texts": {
                        "pw3": {
                            "x": 220,
                            "y": 90,
                            "font": "36px GermaniaOne-Regular,Arial, Helvetica sans-serif",
                            "fill": "#b4ff8b",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align": "center",
                            "text": "EXPANDING SYMBOL",
                            "anchorX": 0.5,
                        },
                        "pw31": {
                            "x": 220,
                            "y": 460,
                            "font": "22px GermaniaOne-Regular,Arial, Helvetica sans-serif",
                            "fill": "#b4ff8b",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align": "center",
                            "text": "WIN MORE IN FREE SPINS",
                            "anchorX": 0.5,
                        },
                        "pw32": {
                            "x": 220,
                            "y": 480,
                            "font": "22px GermaniaOne-Regular,Arial, Helvetica sans-serif",
                            "fill": "#b4ff8b",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align": "center",
                            "text": "WITH SPECIAL EXPANDING SYMBOL",
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
                    "font": "24px FuturaPT-Book",
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
                    "name": "bgPanelGame",
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
                    "y": 620,
                    "evt": "doOk"
                },
                "myAccount": {
                    "name": "container-btn",
                    "x": 650,
                    "y": 620,
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
                    "y": 620,
                    "evt": "doKo"
                },
                "ok": {
                    "name": "container-btn",
                    "x": 640,
                    "anchorX": .5,
                    "y": 620,
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
                    "scaleX":1,
                    "scaleY":1
                }
            },
            "texts": {
                "msgFR1": {
                    "x": 640,
                    "y": 230,
                    "fill": "#ffffff",
                    "font": "22px FuturaPT-Book",
                    "text": ".wqdwe",
                    "anchorX": .5
                },
                "msgFR2": {
                    "x": 640,
                    "y": 260,
                    "fill": "#ffffff",
                    "font": "20px FuturaPT-Book",
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
                            "font": "18px FuturaPT-Book",
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
                            "font": "18px FuturaPT-Book",
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
                            "font": "20px FuturaPT-Book",
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
    "previewTout":30000,
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
    "lineType": "LineBookOf",
    "lineFrames":31,
    "lineFrames":19,
    "comment_lineWinAmtType":"lines/coinWinning class",
    "lineWinAmtType":"NormalLineWinAmount",
    "numReels": 5,
    "numIcons": 3,
    "numIconsOnTop": 1,
    "numIconsOnBottom":1,
    "icons": [18, 18, 18, 18, 18 ],
    "_spinResult":[[9,2,1,10,8],[9,2,1,10,8],[9,2,1,10,8],[9,2,1,10,8],[9,2,1,4,5]],
    "spinWithAlpha": .6,
    "spinConfig":{
        "es":{
            "stopEnabled":false,
            "reelSecondMovementTime":0.5,
            "reelLoopInterval":.3,
            "reelPreMovement": 7,
            "reelPreMovementTime": .25,
            "reelBaseInterval": 1,
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
    "numIcon": 8,
    "loadTout": 30,
    "credits": "5000",
    "bet": "0.50",
    "animDelayAfterWild":800,
    "freeRounds":"normal",
    "freeSpins":"BookOfFreeSpins",
    "_fsIcon": 1,
    "winHLScale":1.15,
    "fsSpinDelay":750,
    "minFsSmbs":3,
    "scatterIcon": 11,
    "scatterType": "SubstScatter",
    "_twinReelsFeature":"normal",
    "wildType": "WildReel",
    "wildNum": [19],
    "wildReelOrigin":0,
    "wildReelRollbackSpinDelay": 500,
    "wilTextAnimOnly":false,
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
            "title": "Crown of Avalon Game Rules",
            "rtp": [

                "96.00",
                "96.00",
                "96.00"

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
                            "bg": "avalonQuest/img/symbol-00.png", //symbol image
                            "payout_values": true //Whether symbol has payout values

                        },

                        {

                            "id": "symbol_01",
                            "bg": "avalonQuest/img/symbol-01.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_02",
                            "bg": "avalonQuest/img/symbol-02.png",
                            "payout_values": true

                        }


                    ],

                    [

                        {

                            "id": "symbol_03",
                            "bg": "avalonQuest/img/symbol-03.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_04",
                            "bg": "avalonQuest/img/symbol-04.png",
                            "payout_values": true

                        }

                    ],

                    [
                        {

                            "id": "symbol_05",
                            "bg": "avalonQuest/img/symbol-05.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_06",
                            "bg": "avalonQuest/img/symbol-06.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_07",
                            "bg": "avalonQuest/img/symbol-07.png",
                            "payout_values": true

                        }

                    ],

                    [

                        {
                            "id": "symbol_08",
                            "bg": "avalonQuest/img/symbol-08.png",
                            "payout_values": true
                        },

                        {
                            "id": "symbol_09",
                            "bg": "avalonQuest/img/symbol-09.png",
                            "payout_values": true,
                            "text": [
                                "Substitute for all non-special symbols",
                                "Matching 3,4,5 special (scatter) symbols on reels awards 10 freespins",
                                "Matching special (scatter) symbols on reels awards a payout:",
                            ]

                        },

                    ],
                    [
                        {
                            "id": "symbol_10",
                            "bg": "avalonQuest/img/symbol-19.png",
                            "payout_values": false,
                        },
                        {
                            "id": "exp9",
                            "bg": "avalonQuest/img/symbol-10_exp.png",
                            "payout_values": false,
                            "size": { //Optional field that sets image height & width in px

                                "height": "300",
                                "width":  "120"

                            }

                        },

                    ],

                    [
                        {
                            "id": "exp10",
                            "payout_values": false,
                            "text": [
                                "The wild appears on any top position of the reels and expands to cover the entire reel.",
                                "It completes and substitutes all the icons except for free spin.",
                                "More than 1 wild can appear at the same time.",
                                "Can appear on base game only."
                            ],
                        },
                    ],


                ]
            }

        },

        //Win Lines objects
        {

            "lines": [1, 10],
            "text_colour": "#93d8fe",      //optional
            "checked_colour": "#FFFFFF",   //optional
            "unchecked_colour": "#08b936", //optional
            "winLinesPerRow": 5            //optional

        }

    ]

}
