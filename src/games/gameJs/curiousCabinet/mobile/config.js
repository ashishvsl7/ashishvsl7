
var frameworkAssets={

    "assets": {
        "menuBtn": "gui/generic/img/desktop/svg/menu-btn.svg",
        "menuBtnClose": "gui/generic/img/desktop/svg/menu-close-btn.svg",
        "menuHistoryBtn": "gui/generic/img/desktop/svg/menu-history-btn.svg",
        "menuHomeBtn": "gui/generic/img/desktop/svg/menu-home-btn.svg",
        "menuSettingsBtn": "gui/generic/img/desktop/svg/menu-settings-btn.svg",
        "menuSoundOnBtn": "gui/generic/img/desktop/svg/menu-sound-btn.svg",
        "menuSoundOffBtn": "gui/generic/img/desktop/svg/menu-sound-close-btn.svg",
        "dtHeader": "gui/generic/img/desktop/png/dt-header.png",
        "menuBtnPaytable": "gui/generic/img/mobile/svg/mb-btn-paytable.svg"
    }

}
var frameworkSettings = {

    "buttons": {
        "spinButton": {
            "id": "spinButtonSelect",
            "bg": "gui/generic/img/mobile/png/mb-btn-spin-up.png",
            "bgDisabled": "gui/generic/img/mobile/png/mb-btn-spin-disabled.png"

        },
        "stopButton": {
            "id": "stopButtonSelect",
            "bg": "gui/generic/img/mobile/png/mb-btn-stop.png",
            "bgDisabled": "gui/generic/img/mobile/png/mb-btn-stop-disabled.png"
        },
        "betControl": {
            "id": "betButtonSelect",
            "m_bg": "gui/generic/img/mobile/png/mb-btn-bet-m.png",
            "m_bgDisabled": "gui/generic/img/mobile/png/mb-btn-bet-m.png",
            "bg": "gui/generic/img/mobile/png/mb-btn-bet-up.png",
            "bgDisabled": "gui/generic/img/mobile/png/mb-btn-bet-disabled.png",
            "texts": {
                "betValue": {
                    "fill": "#ffffff",
                    "font": "15px Helvetica, Arial, sans-serif",
                    "text": "",
                    "align": "left"

                }
            }

        },
        "helpButton": {
            "id": "helpButton",
            "bg": "gui/generic/img/desktop/png/cp-btn-paytable-up.png",
            "bgDisabled": "gui/generic/img/desktop/png/cp-btn-paytable-disabled.png"
        },
        "autoButton": {
            "id": "autoButtonSelect",
            "bg": "",
            "start": "gui/generic/img/mobile/png/mb-btn-spin-up.png",
            "stop": "gui/generic/img/mobile/png/mb-btn-autospin-active.png",
            "texts": {
                "betValue": {
                    "fill": "#ffffff",
                    "font": "15px Helvetica, Arial, sans-serif",
                    "text": "",
                    "align": "left"

                }
            }

        }
    }
}

var loaderAssets={
    "assets": {
        "chromeLogo":"gui/generic/img/chrome.png"
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
                "x": 640,
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
        "sprite": "fonts/fontCurious.png",
        "font": "fonts/fontCurious.xml"
    }
};

var extScripts={
    "webfont": "15px FuturaPT-Heavy",
    "webfont1": "15px FuturaPT-Book"
};
var gameAssets = {
    "assets": {
        "icon0": "curiousCabinet/img/symbol-00.png",
        "icon1": "curiousCabinet/img/symbol-01.png",
        "icon2": "curiousCabinet/img/symbol-02.png",
        "icon3": "curiousCabinet/img/symbol-03.png",
        "icon4": "curiousCabinet/img/symbol-04.png",
        "icon5": "curiousCabinet/img/symbol-05.png",
        "icon6": "curiousCabinet/img/symbol-06.png",
        "icon7": "curiousCabinet/img/symbol-07.png",
        "icon8": "curiousCabinet/img/symbol-08.png",
        "icon9": "curiousCabinet/img/symbol-09.png",
        "icon10": "curiousCabinet/img/symbol-10.png",
        "icon11": "curiousCabinet/img/symbol-11.png",
        "icon12": "curiousCabinet/img/symbol-12.png",

        "bicon0": "curiousCabinet/img/b-symbol-00.png",
        "bicon1": "curiousCabinet/img/b-symbol-01.png",
        "bicon2": "curiousCabinet/img/b-symbol-02.png",
        "bicon3": "curiousCabinet/img/b-symbol-03.png",
        "bicon4": "curiousCabinet/img/b-symbol-04.png",
        "bicon5": "curiousCabinet/img/b-symbol-05.png",
        "bicon6": "curiousCabinet/img/b-symbol-06.png",
        "bicon7": "curiousCabinet/img/b-symbol-07.png",
        "bicon8": "curiousCabinet/img/b-symbol-08.png",
        "bicon9": "curiousCabinet/img/b-symbol-09.png",
        "bicon10": "curiousCabinet/img/b-symbol-10.png",

        "wildBg":"curiousCabinet/img/symbol-10-no-text.png",
        "wildText":"curiousCabinet/img/symbol-10-text.png",
        "glow1x1":"curiousCabinet/img/glow/1x1.png",
        "glow1x2":"curiousCabinet/img/glow/1x2.png",
        "glow1x3":"curiousCabinet/img/glow/1x3.png",
        "glow2x2":"curiousCabinet/img/glow/2x2.png",

        "line_0_00": "curiousCabinet/img/lines/payline_0_00.png",
        "line_0_01": "curiousCabinet/img/lines/payline_0_01.png",
        "line_0_02": "curiousCabinet/img/lines/payline_0_02.png",
        "line_0_03": "curiousCabinet/img/lines/payline_0_03.png",
        "line_0_04": "curiousCabinet/img/lines/payline_0_04.png",
        "line_0_05": "curiousCabinet/img/lines/payline_0_05.png",
        "line_0_06": "curiousCabinet/img/lines/payline_0_06.png",
        "line_0_07": "curiousCabinet/img/lines/payline_0_07.png",
        "line_0_08": "curiousCabinet/img/lines/payline_0_08.png",
        "line_0_09": "curiousCabinet/img/lines/payline_0_09.png",
        "line_0_10": "curiousCabinet/img/lines/payline_0_10.png",
        "line_0_11": "curiousCabinet/img/lines/payline_0_11.png",
        "line_0_12": "curiousCabinet/img/lines/payline_0_12.png",
        "line_0_13": "curiousCabinet/img/lines/payline_0_13.png",
        "line_0_14": "curiousCabinet/img/lines/payline_0_14.png",
        "line_0_15": "curiousCabinet/img/lines/payline_0_15.png",
        "line_0_16": "curiousCabinet/img/lines/payline_0_16.png",
        "line_0_17": "curiousCabinet/img/lines/payline_0_17.png",
        "line_0_18": "curiousCabinet/img/lines/payline_0_18.png",
        "line_0_19": "curiousCabinet/img/lines/payline_0_19.png",
        "fog": "curiousCabinet/img/fog.png",
        "bottomBar": "gui/message-bar.png",
        "bgPanel": "curiousCabinet/img/bgPanel.png",
        "bgPanelGame": "curiousCabinet/img/bgPanel.png",
        "bgPreview":"curiousCabinet/img/info-screen.png",
        "freeRoundsPanel":"curiousCabinet/img/free-rounds.png",
        "bgAlpha": "curiousCabinet/img/alpha.png",
        "bigWin":"curiousCabinet/img/bigwin.png",
        "superWin":"curiousCabinet/img/super-bigwin.png",
        "megaWin":"curiousCabinet/img/mega-bigwin.png",
        "bg_r": "curiousCabinet/img/bg/base-right.png",
        "bg_l": "curiousCabinet/img/bg/base-left.png",
        "bg_b": "curiousCabinet/img/bg/base-bottom.png",
        "bg_t": "curiousCabinet/img/bg/base-top.png",
        "bgFS_r": "curiousCabinet/img/bg/cabinet-right.png",
        "bgFS_l": "curiousCabinet/img/bg/cabinet-left.png",
        "bgFS_b": "curiousCabinet/img/bg/base-bottom_FS.png",
        "bgFS_s": "curiousCabinet/img/bg/cabinet-shadow.png",
        "bgFS_t": "curiousCabinet/img/bg/base-top_FS.png",
        "bgFS_m": "curiousCabinet/img/bg/cabinet-backing.png",
        "bgSmoke":"curiousCabinet/img/bg/heading-smoke.png",
        "bgFS":"curiousCabinet/img/bg/base-main_FS.jpg",
        "candleL": "curiousCabinet/img/bg/left-candles.png",
        "candleR": "curiousCabinet/img/bg/right-candles.png",
        "curtainR": "curiousCabinet/img/bg/right-curtain.png",
        "woman": "curiousCabinet/img/bg/glowing-eyes.png",
        "buttonBg":"gui/generic/img/desktop/png/cp-info-bar.png",
        "volOnButton": "gui/btnVolOn.png",
        "volOffButton": "gui/btnVolOff.png",
        "freeSpinPanel":"curiousCabinet/img/free-spins.png",
        "bgPt" : "curiousCabinet/img/paytable/pt-base-complete.png",
        "btnTranspRight": "curiousCabinet/img/transparent.png",
        "btnTranspLeft": "curiousCabinet/img/transparent.png",
        "slide_0":"curiousCabinet/img/paytable/screenshotD.png",
        "slide_1":"curiousCabinet/img/paytable/screenshotR.png",
        "slide_2":"curiousCabinet/img/paytable/screenshotM.png",
        "slide_3":"curiousCabinet/img/paytable/screenshotDo.png",
        "slide_4":"curiousCabinet/img/paytable/screenshotFS.png",

        "icon6-s": "curiousCabinet/img/paytable/symbol-06-small.png",
        "icon7-s": "curiousCabinet/img/paytable/symbol-07-small.png",
        "icon8-s": "curiousCabinet/img/paytable/symbol-08-small.png",
        "icon10-s": "curiousCabinet/img/paytable/symbol-10-small.png",

        "silver-coin": "curiousCabinet/img/paytable/silver-coin.png",
        "gold-coin": "curiousCabinet/img/paytable/coin.png",
        "silver-mult": "curiousCabinet/img/paytable/x2.png",
        "gold-mult": "curiousCabinet/img/paytable/x5.png"

    },
    "localizedAssets":{
        "graphAsset": {
            "logo": {
                "lang": ["zs","ko","jp","th","vn"],
                "img": "curiousCabinet/img/logo"
            }
        }
    },
    "buttonsSpriteSheet": {
        "container-btn": {
            "sprite": "curiousCabinet/img/game-btn.png",
            "json": "curiousCabinet/img/game-btn.png",
            "w": 210,
            "h": 66
        },
        "yesButton": {
            "sprite": "curiousCabinet/img/yes-btn.png",
            "json": "curiousCabinet/img/yes-btn.png",
            "w": 54,
            "h": 54
        },
        "noButton": {
            "sprite": "curiousCabinet/img/no-btn.png",
            "json": "curiousCabinet/img/no-btn.png",
            "w": 54,
            "h": 54
        },
        "check": {
            "sprite": "curiousCabinet/img/radio-btns.png",
            "json": "curiousCabinet/img/radio-btns.png",
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
            "json": "curiousCabinet/img/anim/symbol-00.json",
            "sprite": "curiousCabinet/img/anim/symbol-00.png"
        },
        "anim1": {
            "json": "curiousCabinet/img/anim/symbol-01.json",
            "sprite": "curiousCabinet/img/anim/symbol-01.png"
        },
        "anim2": {
            "json": "curiousCabinet/img/anim/symbol-02.json",
            "sprite": "curiousCabinet/img/anim/symbol-02.png"
        },
        "anim3": {
            "json": "curiousCabinet/img/anim/symbol-03.json",
            "sprite": "curiousCabinet/img/anim/symbol-03.png"
        },
        "anim4": {
            "json": "curiousCabinet/img/anim/symbol-04.json",
            "sprite": "curiousCabinet/img/anim/symbol-04.png"
        },
        "anim5": {
            "json": "curiousCabinet/img/anim/symbol-05.json",
            "sprite": "curiousCabinet/img/anim/symbol-05.png"
        },
        "anim6": {
            "json": "curiousCabinet/img/anim/symbol-06.json",
            "sprite": "curiousCabinet/img/anim/symbol-06.png"
        },
        "anim7": {
            "json": "curiousCabinet/img/anim/symbol-07.json",
            "sprite": "curiousCabinet/img/anim/symbol-07.png"
        },
        "anim8": {
            "json": "curiousCabinet/img/anim/symbol-08.json",
            "sprite": "curiousCabinet/img/anim/symbol-08.png"
        },
        "anim9": {
            "json": "curiousCabinet/img/anim/symbol-09.json",
            "sprite": "curiousCabinet/img/anim/symbol-09.png"
        },
        "anim10": {
            "json": "curiousCabinet/img/anim/fakeAnim.json",
            "sprite": "curiousCabinet/img/anim/fakeAnim.png"
        },
        "anim11-a": {
            "json": "curiousCabinet/img/anim/drawers/symbol-11-a.json",
            "sprite": "curiousCabinet/img/anim/drawers/symbol-11-a.png"
        },
        "anim11-b": {
            "json": "curiousCabinet/img/anim/drawers/symbol-11-b.json",
            "sprite": "curiousCabinet/img/anim/drawers/symbol-11-b.png"
        },
        "anim11-c": {
            "json": "curiousCabinet/img/anim/drawers/symbol-11-c.json",
            "sprite": "curiousCabinet/img/anim/drawers/symbol-11-c.png"
        },
        "anim12-a": {
            "json": "curiousCabinet/img/anim/drawers/symbol-12-a.json",
            "sprite": "curiousCabinet/img/anim/drawers/symbol-12-a.png"
        },
        "anim12-b": {
            "json": "curiousCabinet/img/anim/drawers/symbol-12-b.json",
            "sprite": "curiousCabinet/img/anim/drawers/symbol-12-b.png"
        },
        "anim11-d": {
            "json": "curiousCabinet/img/anim/drawers/symbol-11-d.json",
            "sprite": "curiousCabinet/img/anim/drawers/symbol-11-d.png"
        },
        "respin": {
            "json": "curiousCabinet/img/anim/drawers/respin.json",
            "sprite": "curiousCabinet/img/anim/drawers/respin.png"
        },
        "respin-1": {
            "json": "curiousCabinet/img/anim/drawers/respin-1.json",
            "sprite": "curiousCabinet/img/anim/drawers/respin-1.png"
        },
        "x2": {
            "json": "curiousCabinet/img/anim/drawers/x2.json",
            "sprite": "curiousCabinet/img/anim/drawers/x2.png"
        },
        "x5": {
            "json": "curiousCabinet/img/anim/drawers/x5.json",
            "sprite": "curiousCabinet/img/anim/drawers/x5.png"
        },
        "wildReel_0": {
            "json": "curiousCabinet/img/anim/symbol-10-part1.json",
            "sprite": "curiousCabinet/img/anim/symbol-10-part1.png"
        },
        "wildReel_1": {
            "json": "curiousCabinet/img/anim/symbol-10-part2.json",
            "sprite": "curiousCabinet/img/anim/symbol-10-part2.png"
        },
        "candleFire":{
            "json": "curiousCabinet/img/anim/candle-flames/flame.json",
            "sprite": "curiousCabinet/img/anim/candle-flames/flame.png"
        },
        "candleFireOut":{
            "json": "curiousCabinet/img/anim/candle-flames/flame-out.json",
            "sprite": "curiousCabinet/img/anim/candle-flames/flame-out.png"
        },
        "magic_1":{
            "json": "curiousCabinet/img/anim/reel-magic/magic-01.json",
            "sprite": "curiousCabinet/img/anim/reel-magic/magic-01.png"
        },
        "magic_2":{
            "json": "curiousCabinet/img/anim/reel-magic/magic-02.json",
            "sprite": "curiousCabinet/img/anim/reel-magic/magic-02.png"
        },
        "magic_3":{
            "json": "curiousCabinet/img/anim/reel-magic/magic-03.json",
            "sprite": "curiousCabinet/img/anim/reel-magic/magic-03.png"
        },
        "part-1": {
            "json": "curiousCabinet/img/anim/bronze-coin.json",
            "sprite": "curiousCabinet/img/anim/bronze-coin.png"
        },
        "part-2": {
            "json": "curiousCabinet/img/anim/silver-coin.json",
            "sprite": "curiousCabinet/img/anim/silver-coin.png"
        },
        "part-3": {
            "json": "curiousCabinet/img/anim/gold-coin.json",
            "sprite": "curiousCabinet/img/anim/gold-coin.png"
        },
        "f-part-1": {
            "json": "curiousCabinet/img/anim/bronze-coin-frwrd.json",
            "sprite": "curiousCabinet/img/anim/bronze-coin-frwrd.png"
        },
        "f-part-2": {
            "json": "curiousCabinet/img/anim/silver-coin-frwrd.json",
            "sprite": "curiousCabinet/img/anim/silver-coin-frwrd.png"
        },
        "f-part-3": {
            "json": "curiousCabinet/img/anim/gold-coin-frwrd.json",
            "sprite": "curiousCabinet/img/anim/gold-coin-frwrd.png"
        },
        "animShelf7": {
            "json": "curiousCabinet/img/anim/symbol-07-expanded.json",
            "sprite": "curiousCabinet/img/anim/symbol-07-expanded.png"
        },
        "animShelf8": {
            "json": "curiousCabinet/img/anim/symbol-08-part1.json",
            "sprite": "curiousCabinet/img/anim/symbol-08-part1.png"
        },
        "animShelf8_1": {
            "json": "curiousCabinet/img/anim/symbol-08-part2.json",
            "sprite": "curiousCabinet/img/anim/symbol-08-part2.png"
        }
    },
    "importantSounds": {
        "spinClick": {
            "name": "curiousCabinet/sounds/spinClick.mp3",
            "volume": .2
        },
        "reelStop": {
            "name": "curiousCabinet/sounds/reelStop.mp3",
            "volume":.6
    },
        "click": {
            "name": "curiousCabinet/sounds/click.mp3",
            "volume": .2
        }
        },
    "sounds": {
        "smbWin_0": {
            "name": "curiousCabinet/sounds/smbWin_0.mp3",
            "volume": 2
        },
        "smbWin_1": {
            "name": "curiousCabinet/sounds/smbWin_1.mp3",
            "volume": 2
        },
        "smbWin_2": {
            "name": "curiousCabinet/sounds/smbWin_2.mp3",
            "volume": 2
        },
        "smbWin_3": {
            "name": "curiousCabinet/sounds/smbWin_3.mp3",
            "volume": 2
        },
        "smbWin_4": {
            "name": "curiousCabinet/sounds/smbWin_4.mp3",
            "volume": 2
        },
        "smbWin_5": {
            "name": "curiousCabinet/sounds/smbWin_5.mp3",
            "volume": 1.5
        },
        "smbWin_6": {
            "name": "curiousCabinet/sounds/smbWin_6.mp3",
            "volume": 1.5
        },
        "smbWin_7": {
            "name": "curiousCabinet/sounds/smbWin_7.mp3",
            "volume": 1.5
        },
        "smbWin_8": {
            "name": "curiousCabinet/sounds/smbWin_8.mp3",
            "volume": 1.3
        },
        "wildReel": {
            "name": "curiousCabinet/sounds/wildReel.mp3",
            "volume": 1
        },
        "wildReelOut": {
            "name": "curiousCabinet/sounds/wildReelRollback.mp3",
            "volume": .8
        },
        "fsWon": {
            "name": "curiousCabinet/sounds/introFs.mp3",
            "volume": 1
        },
        "incWin": {
            "name": "curiousCabinet/sounds/counter.mp3",
            "volume": .4,
            "loop": true
        },
        "line": {
            "name": "curiousCabinet/sounds/line.mp3",
            "volume": .3
        },
        "winBg_0": {
            "name": "curiousCabinet/sounds/centralWin/win1.mp3",
            "volume": .6
        },
        "winBg_1": {
            "name": "curiousCabinet/sounds/centralWin/win2.mp3",
            "volume": .6
        },
        "winBg_2": {
            "name": "curiousCabinet/sounds/centralWin/win3.mp3",
            "volume": .6
        },
        "winBg_3": {
            "name": "curiousCabinet/sounds/centralWin/win4.mp3",
            "volume": .6
        },
        "winBg_4": {
            "name": "curiousCabinet/sounds/centralWin/win5.mp3",
            "volume": .6
        },
        "winBg_5": {
            "name": "curiousCabinet/sounds/centralWin/win6.mp3",
            "volume": .6
        },
        "winBg_6": {
            "name": "curiousCabinet/sounds/centralWin/bigWin_Full.mp3",
            "volume": .7
        },
        "winBg_7": {
            "name": "curiousCabinet/sounds/centralWin/superbigWin_Full.mp3",
            "volume": .7
        },
        "winBg_8": {
            "name": "curiousCabinet/sounds/centralWin/megabigWin_Full.mp3",
            "volume": .7
        },
        "winBgS_6": {
            "name": "curiousCabinet/sounds/centralWin/bigWin.mp3",
            "volume": .7
        },
        "winBgS_7": {
            "name": "curiousCabinet/sounds/centralWin/superbigWin.mp3",
            "volume": .7
        },
        "winBgS_8": {
            "name": "curiousCabinet/sounds/centralWin/megabigWin.mp3",
            "volume": .7
        },
        "winPanel": {
            "name": "curiousCabinet/sounds/winScreen.mp3",
            "volume": 1
        },
        "coins": {
            "name": "curiousCabinet/sounds/coins.mp3",
            "volume":.6
        },
        "silverCoins_0": {
            "name": "curiousCabinet/sounds/silverCoins.mp3",
            "volume":1.2,
            "multiple":["silverCoins_1","silverCoins_2","silverCoins_3","silverCoins_4"]
        },
        "goldCoins_1": {
            "name": "curiousCabinet/sounds/goldCoins.mp3",
            "volume":1.2,
            "multiple":["goldCoins_3"]
        },
        "drawerLand_0":{
            "name": "curiousCabinet/sounds/drawerLand_2.mp3",
            "volume":2
        },
        "drawerLand_1":{
            "name": "curiousCabinet/sounds/drawerLand_2.mp3",
            "volume":2
        },
        "dollLand_0":{
            "name": "curiousCabinet/sounds/dollLand_1.mp3",
            "volume":2,
            "multiple":["dollLand_1","dollLand_2","dollLand_3","dollLand_4"]
        },
        "monsterLand_0":{
            "name": "curiousCabinet/sounds/monsterLand_1.mp3",
            "volume":1
        },
        "monsterLand_1":{
            "name": "curiousCabinet/sounds/monsterLand_2.mp3",
            "volume":1
        },
        "monsterLand_2":{
            "name": "curiousCabinet/sounds/monsterLand_3.mp3",
            "volume":2,
            "multiple":["monsterLand_3","monsterLand_4"]
        },
        "drawer":{
            "name": "curiousCabinet/sounds/drawerOpen.mp3",
            "volume":1
        },
        "smb7Animate":{
            "name": "curiousCabinet/sounds/smbWin_7-Animate.mp3",
            "volume":1.6
        },
        "smb7Expand":{
            "name": "curiousCabinet/sounds/smbWin_7-Expand.mp3",
            "volume":1.5
        },
        "smb8Animate":{
            "name": "curiousCabinet/sounds/smbWin_8-Animate.mp3",
            "volume":1.5
        },
        "smb8Expand":{
            "name": "curiousCabinet/sounds/smbWin_8-Expand.mp3",
            "volume":1.5
        },
        "respinReveal":{
            "name": "curiousCabinet/sounds/revealRespin.mp3",
            "volume":1
        },
        "multReveal":{
            "name": "curiousCabinet/sounds/revealMultiplier.mp3",
            "volume":1
        },
        "fsReveal":{
            "name": "curiousCabinet/sounds/revealFreeSpins.mp3",
            "volume":1
        },
        "emptyReveal":{
            "name": "curiousCabinet/sounds/emptyReveal.mp3",
            "volume":2
        },
        "tranCabinetShrink":{
            "name": "curiousCabinet/sounds/transitionCabinetShrink.mp3",
            "volume":1
        },
        "tranCandle":{
            "name": "curiousCabinet/sounds/transitionCandle.mp3",
            "volume":4
        },
        "tranCurtain":{
            "name": "curiousCabinet/sounds/transitionCurtain.mp3",
            "volume":1
        },
        "drawerRollBack":{
            "name": "curiousCabinet/sounds/drawerRollBack.mp3",
            "volume":1
        },
    },
    "bgSounds": {
    },
    "bgImportantSounds": {
        "reelSound_0": {
            "name": "curiousCabinet/sounds/reelSound.mp3",
            "volume":1,
            "marker": true,
            "effect":true
        },
        "bgSlot": {
            "name": "curiousCabinet/sounds/bg.mp3",
            "volume": .5
        },

        "bgFs": {
            "name": "curiousCabinet/sounds/bgFs.mp3",
            "volume":.5
        },
        "reelSound_1": {
            "name": "curiousCabinet/sounds/reelSpinLayer3full.mp3",
            "volume": 0,
            "marker":true,
            "effect":true
        },
        "reelSound_2": {
            "name": "curiousCabinet/sounds/reelSpinLayer3full.mp3",
            "volume": 0,
            "marker":true,
            "effect":true
        },
        "reelSound_3": {
            "name": "curiousCabinet/sounds/reelSpinLayer4full.mp3",
            "volume": 0,
            "marker":true,
            "effect":true
        },
        "reelSound_4": {
            "name": "curiousCabinet/sounds/reelSpinLayer4full.mp3",
            "volume": 0,
            "marker":true,
            "effect":true
        },
        "reelSound_4": {
            "name": "curiousCabinet/sounds/reelSpinLayer4full.mp3",
            "volume": 0,
            "marker":true,
            "effect":true
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
                    "x": 970,
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
            "visible":false
        },
        "bgFS": {
            "visible":false,
            "graphAsset": {
                "bg": {
                    "name": "bgFS",
                    "x": 0,
                    "y": 104
                },

            }
        },
        "frameFS": {
            "visible":false,
            "graphAsset": {
                "bg": {
                    "name": "bgFS_m",
                    "x": 646.5,
                    "y": 104,
                    "anchorX":.5
                }
            }
        },
        "reels": {},

        "wild": {
        },
        "bgIconAnim":{},
        "bgIconScatterAnim":{},
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
                "bg": {
                    "name": "bgFS_b",
                    "x": 0,
                    "y": 632
                },
                "bgB": {
                    "name": "bgFS_s",
                    "x": 640,
                    "y": 632,
                    "anchorX":.5
                },
                "bg3": {
                    "name": "bgFS_t",
                    "x": 0,
                    "y": 0
                },
                "bgR": {
                    "name": "bgFS_r",
                    "x": 623,
                    "y": 22
                },
                "bgL": {
                    "name": "bgFS_l",
                    "x": 207,
                    "y": 22
                }
            }

        },
        "fsDrawers":{
            "visible":false,
            "graphAsset": {
                "drawer0":{
                    "name": "icon11",
                    "x": 312+68,
                    "y": 502+66,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "drawer1":{
                    "name": "icon12",
                    "x": 311+(132*1)+66,
                    "y": 502+66,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "drawer2":{
                    "name": "icon11",
                    "x": 312+(132*2)+66,
                    "y": 502+66,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "drawer3":{
                    "name": "icon12",
                    "x": 312+(132*3)+66,
                    "y": 502+66,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "drawer4":{
                    "name": "icon11",
                    "x": 313+(132*4)+66,
                    "y": 502+66,
                    "anchorX":.5,
                    "anchorY":.5
                },
            }
        },
        "sideObjects":{
            "visible":false,
            "graphAsset": {
                "bg0":{
                    "name": "woman",
                    "x": 1117,
                    "y": 154,
                    "alpha":0

                },
                "bg2":{
                    "name": "curtainR",
                    "x": 1280,
                    "y": 0,
                    "anchorX":1
                },
                "bg3":{
                    "name": "curtainR",
                    "x": 437,
                    "y": 0,
                    "scaleX":-1,
                    "anchorX":0
                },
                "bg4": {
                    "name": "candleL",
                    "x": 0,
                    "y": 418
                },
                "bg5": {
                    "name": "candleR",
                    "x": 990,
                    "y": 416
                }
            },
            "animAsset":{
                "s0": {
                    "name": "candleFire",
                    "x": -16,
                    "y": 600,
                    "fps":12,
                    "scaleX":2,
                    "scaleY":2
                },
                "s1": {
                    "name": "candleFire",
                    "x": 20,
                    "y": 504,
                    "fps":16,
                    "scaleX":2,
                    "scaleY":2
                },
                "s2": {
                    "name": "candleFire",
                    "x": 52,
                    "y": 436,
                    "fps":24,
                    "scaleX":2,
                    "scaleY":2
                },
                "s3": {
                    "name": "candleFire",
                    "x": 64,
                    "y": 608-30,
                    "fps":12,
                    "scaleX":2,
                    "scaleY":2
                },
                "s4": {
                    "name": "candleFire",
                    "x": 96,
                    "y": 566-30,
                    "fps":30,
                    "scaleX":2,
                    "scaleY":2
                },
                "s5": {
                    "name": "candleFire",
                    "x": 154,
                    "y": 617-30,
                    "fps":24,
                    "scaleX":2,
                    "scaleY":2
                },
                "s6": {
                    "name": "candleFire",
                    "x": 1076,
                    "y": 610-30,
                    "fps":24,
                    "scaleX":2,
                    "scaleY":2
                },
                "s7": {
                    "name": "candleFire",
                    "x": 1138,
                    "y": 554-30,
                    "fps":18,
                    "scaleX":2,
                    "scaleY":2
                },
                "s8": {
                    "name": "candleFire",
                    "x": 1172,
                    "y": 600-30,
                    "fps":20,
                    "scaleX":2,
                    "scaleY":2
                },
                "s9": {
                    "name": "candleFire",
                    "x": 1218,
                    "y": 520-30,
                    "fps":24,
                    "scaleX":2,
                    "scaleY":2
                },
                "s10": {
                    "name": "candleFire",
                    "x": 1256,
                    "y": 618-30,
                    "fps":12,
                    "scaleX":2,
                    "scaleY":2
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
        "scatter": {},
        "scatterCoins":{},
        "stickyWild": {},
        "buttonFg":{
            "visible":false
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
                    "y": 0,
                    "anchorX":.5
                }
            },
            "texts": {
                "frLabel": {
                    "x": 195,
                    "y": 20,
                    "fill": "#FFFFFF",
                    "font": "13px Futura ,Arial",
                    "text": "Free Rounds:",

                    "anchorX": 1
                },
                "frValue": {
                    "x": 165,
                    "y": 36,
                    "fill": "#FFFFFF",
                    "font": "23px Futura ,Arial",
                    "text": "5",
                    "anchorX": 0.5
                },
                "frTotWonLabel": {
                    "x": 1150,
                    "y": 20,
                    "fill": "#FFFFFF",
                    "font": "13px Futura ,Arial",
                    "text": "Total won:",
                    "anchorX": 1
                },
                "frTotWonValue": {
                    "x": 1120,
                    "y": 36,
                    "fill": "#FFFFFF",
                    "font": "23px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                }
            }
        },
        "freeSpins": {
            "visible": false,
            "graphAsset": {
                "bgsmoke": {
                    "name": "bgSmoke",
                    "x": 344,
                    "y": 29
                },
                "fsP": {
                    "name": "freeSpinPanel",
                    "x": 640,
                    "y": 0,
                    "anchorX": 0.5
                }
            },
            "texts": {
                "fsLabel": {
                    "x": 195,
                    "y": 20,
                    "fill": "#FFFFFF",
                    "font": "13px Futura ,Arial",
                    "text": "Free Spins",
                    "anchorX": 1
                },
                "fsValue": {
                    "x": 165,
                    "y": 36,
                    "fill": "#FFFFFF",
                    "font": "23px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                },
                "totWonLabel": {
                    "x": 1150,
                    "y": 20,
                    "fill": "#FFFFFF",
                    "font": "13px Futura ,Arial",
                    "text": "Total won",
                    "anchorX": 1
                },
                "totWonValue": {
                    "x": 1120,
                    "y": 36,
                    "fill": "#FFFFFF",
                    "font": "23px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                }
            }
        },
        "fadeFS":{
            "visible":false,
            "graphAsset": {
                "bg": {
                    "name": "bgAlpha",
                    "x": 0,
                    "y": 0,
                    "alpha": 0
                },
            }
        },
        "fsWonPanel": {
            "visible": false,
            "fakeButton": true,
            "eventBlock": true,
            "duration": 5,
            "graphAsset": {
                "bgmsg": {
                    "name": "bgAlpha",
                    "x": 0,
                    "y": 0,
                    "alpha": .3
                },
                "bgFsWon": {
                    "name": "bgPanel",
                    "x": 640,
                    "y": 365,
                    "anchorX": .5,
                    "anchorY": .5
                }
            },
            "texts": {
                "fsWLabel": {
                    "x": 640,
                    "y": 305,
                    "fill": "#ffffff",
                    "font": "28px FuturaPT-Heavy",
                    "text": "You won",
                    "anchorX": .5
                },
                "fsValue1": {
                    "x": 640,
                    "y": 345,
                    "fill": "#ffffff",
                    "font": "30px FuturaPT-Heavy",
                    "text": "5",
                    "anchorX": .5
                },
                "fsWLabel1": {
                    "x": 640,
                    "y": 385,
                    "fill": "#ffffff",
                    "font": "28px FuturaPT-Heavy",
                    "text": "Free spins!",
                    "align":"center",
                    "anchorX": .5
                }
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
                    "scaleX":1.5,
                    "scaleY":1.5
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
                    "y": 312,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "sBigWin": {
                    "name": "superWin",
                    "x": 635,
                    "y": 270,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "mBigWin": {
                    "name": "megaWin",
                    "x": 635,
                    "y": 270,
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
                    "y": 545,
                    "bmpFont": "bmpFont",
                    "size": "55",
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
            "graphAsset": {
                "bgPreview": {
                    "name": "bgPreview",
                    "x": 0,
                    "y": 0
                },
                "ilogo":{
                    "name": "logo",
                    "x": 640,
                    "y": 0,
                    "anchorX":.5
                }
            },
            "slide": {
                "x": 640,
                "y": 140,
                "buttonBaseX":-52,
                "buttonBaseY":480,
                "time":8000,
                "slides": {
                    "0": {
                        "x": 0,
                        "y": 0,
                        "visible": true,
                        "graphAsset": {
                            "bgPreview": {
                                "name": "slide_0",
                                "anchorX": .5,
                                "x": 0,
                                "y": 150,
                                "scaleX":.8,
                                "scaleY":.8

                            }
                        },
                        "texts": {
                            "txtPrev0": {
                                "x": 0,
                                "y": -20,
                                "fill": "#ffba09",
                                "font": "20px Futura PT, Arial",
                                "text": "infoScreen-1",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev1": {
                                "x": 0,
                                "y": 10,
                                "fill": "#d96c1f",
                                "font": "14px Futura PT, Arial",
                                "text": "infoScreen-1a",
                                "anchorX": .5,
                                "align": "center"
                            }
                        }
                    },
                    "1": {
                        "x": 0,
                        "y": 0,
                        "visible": false,
                        "graphAsset": {
                            "bgPreview": {
                                "name": "slide_1",
                                "anchorX": .5,
                                "x": 0,
                                "y": 150,
                                "scaleX":.8,
                                "scaleY":.8
                            }
                        },
                        "texts": {
                            "txtPrev0": {
                                "x": 0,
                                "y": -20,
                                "fill": "#ffba09",
                                "font": "20px Futura PT, Arial",
                                "text": "infoScreen-2",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev1": {
                                "x": 0,
                                "y": 10,
                                "fill": "#d96c1f",
                                "font": "14px Futura PT, Arial",
                                "text": "infoScreen-2a",
                                "anchorX": .5,
                                "align": "center"
                            }
                        }
                    },
                    "2": {
                        "x": 0,
                        "y": 0,
                        "visible": false,
                        "graphAsset": {
                            "bgPreview": {
                                "name": "slide_2",
                                "anchorX": .5,
                                "x": 0,
                                "y": 150,
                                "scaleX":.8,
                                "scaleY":.8

                            }
                        },
                        "texts": {
                            "txtPrev0": {
                                "x": 0,
                                "y": -20,
                                "fill": "#ffba09",
                                "font": "20px Futura PT, Arial",
                                "text": "infoScreen-3",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev1": {
                                "x": 0,
                                "y": 10,
                                "fill": "#d96c1f",
                                "font": "14px Futura PT, Arial",
                                "text": "infoScreen-3a",
                                "anchorX": .5,
                                "align": "center"
                            }
                        }
                    },
                    "3": {
                        "x": 0,
                        "y": 0,
                        "visible": false,
                        "graphAsset": {
                            "bgPreview": {
                                "name": "slide_3",
                                "anchorX": .5,
                                "x": 0,
                                "y": 150,
                                "scaleX":.8,
                                "scaleY":.8

                            }
                        },
                        "texts": {
                            "txtPrev0": {
                                "x": 0,
                                "y": -20,
                                "fill": "#ffba09",
                                "font": "20px Futura PT, Arial",
                                "text": "infoScreen-4",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev1": {
                                "x": 0,
                                "y": 10,
                                "fill": "#d96c1f",
                                "font": "14px Futura PT, Arial",
                                "text": "infoScreen-4a",
                                "anchorX": .5,
                                "align": "center"
                            }
                        }
                    },
                    "4": {
                        "x": 0,
                        "y": 0,
                        "visible": false,
                        "graphAsset": {
                            "bgPreview": {
                                "name": "slide_4",
                                "anchorX": .5,
                                "x": 0,
                                "y": 150,
                                "scaleX":.8,
                                "scaleY":.8

                            }
                        },
                        "texts": {
                            "txtPrev0": {
                                "x": 0,
                                "y": -20,
                                "fill": "#ffba09",
                                "font": "20px Futura PT, Arial",
                                "text": "infoScreen-5",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev1": {
                                "x": 0,
                                "y": 10,
                                "fill": "#d96c1f",
                                "font": "14px Futura PT, Arial",
                                "text": "infoScreen-5a",
                                "anchorX": .5,
                                "align": "center"
                            }
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
                    "y": 545,
                    "evt": "doOk"
                },
                "myAccount": {
                    "name": "container-btn",
                    "x": 650,
                    "y": 545,
                    "evt": "doMyAccount",
                    "texts": {
                        "noLabel": {
                            "x": 0,
                            "y": -13,
                            "fill": "#123700",
                            "font": "20px  FuturaPT-Heavy",
                            "text": "My Account",
                            "anchorX": .5
                        }
                    }
                },
                "no": {
                    "name": "noButton",
                    "x": 775,
                    "y": 545,
                    "evt": "doKo"
                },
                "ok": {
                    "name": "container-btn",
                    "x": 640,
                    "anchorX": .5,
                    "y": 545,
                    "evt": "doOk",
                    "texts": {
                        "noLabel": {
                            "x": 0,
                            "y": -13,
                            "fill": "#123700",
                            "font": "20px  FuturaPT-Heavy",
                            "text": "OK",
                            "anchorX": .5
                        }
                    }
                }
            }
        },
        "swipeBox": {
            "visible":false,
            "eventBlock":true,
            "animAsset": {
            },
            "graphAsset": {
                    "bgmsg": {
                        "name": "bgBlack",
                        "x": 0,
                        "y": 0
                    },
                    "bgFsWon": {
                        "name": "swipeImg",
                        "x": 590,
                        "y": 350,
                        "width":350,
                        "height":350,
                        "angle":180,
                        "anchorX": .5,
                        "anchorY": .5,
                    }
            },
            "texts": {
                "msg1s": {
                    "x": 630,
                    "y": 100,
                    "fill": "#ffffff",
                    "font": "30px Arial",
                    "text": "Swipe down To full screen",
                    "anchorX": .5
                },
                "msg2s": {
                    "x": 630,
                    "y": 300,
                    "fill": "#ffffff",
                    "font": "40px Arial",
                    "text": "rotate to exit",
                    "anchorX": .5
                }
            },
            "buttons": {
                "ok": {
                    "name": "noButton",
                    "x": 640,
                    "y": 587,
                    "anchorX": .5,
                    "evt": "doNotFull"
                }
            }
        },
        "msgBoxFR": {
            "visible":false,
            "eventBlock":true,
            "selectorY":200,
            "selectorX":638,
            "textCol":"#000000",
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
                    "scaleX":1.5,
                    "scaleY":1.5
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
                            "fill": "#000000",
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
                            "fill": "#000000",
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
                            "fill": "#000000",
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
    "slotEngine":"CabinetEngine",
    "engineNumbers":15,
    "log":true,
    "canSwipe":false,
    "comment_preview":"enable feature preview screen",
    "preview":true,
    "previewTout":45000,
    "spinType": "CabinetSpin",
    "comment_winType":"spin class used by the game on line central win field",
    "updateOtherIcons":true,
    "normalIconAnchor":false,
    "iconsAnchorOffset":[6,7,8,10],
    "winType": "SimpleWin",
    "comment_winTypeStatus":"spin class used by the game on status bar win field",
    "statusWinType": "BounceWin",
    "delayAfterWinAmt": 100,
    "comment_delayBeforeIdle": "after the first winning dicplay cycle with animation the engin starts the idle cycle with just win amount for each line and a symple winning HL",
    "delayBeforeIdle": 2000,
    "comment_idleLineTime": "single line time during idle cycle winning display",
    "idleLineTime": 1000,
    "comment__winTxtColors": "win amount counter colors",
    "winTxtColors": ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
    "comment_type of lines": "the class will handle line drawing",
    "lineType": "AllLineWinningsFirstCabinet",
    "lineFrames":31,
    "lineFrames":19,
    "comment_lineWinAmtType":"lines/coinWinning class",
    "lineWinAmtType":"NormalLineWinAmosvn verunt",
    "numReels": 5,
    "numIcons": 4,
    "numIconsOnTop": 1,
    "numIconsOnBottom":1,
    "icons": [19, 19, 19, 19, 19 ],
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
            "reelSecondMovementTime":.5,
            "reelLoopInterval":.25,
            "reelPreMovement": 0,
            "reelPreMovementTime": 0,
            "reelBaseInterval": 1,
            "reelStopInterval": 1,
            "reelSpinBounceMeasure": 45,
            "reelSpinBounceTime": .40,
            "reelSpinBounceForce": .6
        }
    },
    "numIcon": 9,
    "iconProb":[6,7,8,9],
    "rareIconPerc":[0,0,0,0,0,0,20,20,20,40],
    "defIcons":5,
    "loadTout": 30,
    "credits": "5000",
    "bet": "0.50",
    "animDelayAfterWild":800,
    "freeRounds":"normal",
    "freeSpins":"CabinetFreeSpins",
    "_fsIcon": 1,
    "winHLScale":1.15,
    "fsSpinDelay":750,
    "minFsSmbs":3,
    "scatterIcon": 10,
    "scatterType": "SubstScatter",
    "_twinReelsFeature":"normal",
    "wildType": "WildReel",
    "wildNum": [10],
    "wildDelay":100,
    "wilTextAnimOnly":true,
    "wildReelOrigin":1,
    "wildReelOrigin_Y_Offset":-66,
    "wildReelRollbackSpinDelay": 500,
    "winTxtClasses": [1, 2, 5, 10, 20, 50, 100, 300, 500, 1000],
    "symbol-colors":[0xff33cc,0xcc33ff,0x0066ff,0x00ff99,0xffcc00,0xff33cc,0xcc33ff,0x0066ff,0x00ff99,0xffcc00,0xffcc00],
    "smbMinAnimTime":[.5,.5,.5,.5,.5,.5,.5,1.5,.5,.5],
    "muteDuringWins":true,
    "keepShowingAnimation":false,
    "additionalPreText":"",
    "additionalPostText":"",
    "reel": {
        "deltaX_0": 310,
        "deltaX": 132,
        "deltaY_0": 630,
        "deltaY": 132
    },
    "icon": {
        "x": 0,
        "y": 0,
        "width": 132,
        "height": 132
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

    "bg" : "curiousCabinet/img/paytable/pt-base-main.png",

    "closeBtn": {

        "ypos": "115",
        "xpos": "915"

    },

    "pagination" : {

        "ypos" : "590",
        "xpos" : "416",
        "checked" : "#fff",
        "unchecked" : "#000000"

    },

    "helpPath" : gameParams.pathCDN + 'ironDog/help/mobile/curiousCabinet/help_' + gameParams.lang+".json",

    "translatePosition": true,

    "buttons" : [

        {
            "id" : "left",
            "ypos" : "440",
            "xpos" : "1",
            "bg_up" : "curiousCabinet/img/paytable/forward-btn-up.png",
            "bg_over" : "curiousCabinet/img/paytable/forward-btn-over.png",
            "bg_down" : "curiousCabinet/img/paytable/forward-btn-down.png",
            "direction" : -1
        },

        {
            "id" : "right",
            "ypos" : "440",
            "xpos" : "861",
            "bg_up" : "curiousCabinet/img/paytable/forward-btn-up.png",
            "bg_over" : "curiousCabinet/img/paytable/forward-btn-over.png",
            "bg_down" : "curiousCabinet/img/paytable/forward-btn-down.png",
            "direction" : 1
        }

    ],

    "pages" : [

        {

            "gameguide" : true,
            "title" : "Curious Cabinet Game Rules",
            "title_xpos" : "510",
            "title_ypos" : "115",
            "xpos" : "220",
            "ypos" : "180",
            "height" : "395",
            "width" : "860",
            "fill": "#fff",
            "font" : "FuturaPT-Book, Arial, sans-serif",
            "rtp": [
                "96.00",
                "96.00",
                "96.00"
            ]

        },
        {

            "symbols" : [

                {
                    "id" : "symbol_00",
                    "bg" : "curiousCabinet/img/symbol-00.png",
                    "xpos": "403",
                    "ypos": "200",
                    "height": "132px",
                    "width": "132px",
                    "text": {
                        "value": 0,
                        "xpos": "40",
                        "ypos": "150",
                        "width": "109",
                        "left_fill": "#fff",
                        "right_fill": "#00dd10",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_01",
                    "bg" : "curiousCabinet/img/symbol-01.png",
                    "xpos": "575",
                    "ypos": "200",
                    "height": "132px",
                    "width": "132px",
                    "text": {
                        "value": 1,
                        "xpos": "40",
                        "ypos": "150",
                        "width": "109",
                        "left_fill": "#fff",
                        "right_fill": "#00dd10",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_02",
                    "bg" : "curiousCabinet/img/symbol-02.png",
                    "xpos": "747",
                    "ypos": "200",
                    "height": "132px",
                    "width": "132px",
                    "text": {
                        "value": 2,
                        "xpos": "40",
                        "ypos": "150",
                        "width": "109",
                        "left_fill": "#fff",
                        "right_fill": "#00dd10",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                }

            ],

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "312",
                    "ypos" : "528",
                    "width" : "650",
                    "fill" : "#fff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols" : [

                {
                    "id" : "symbol_03",
                    "bg" : "curiousCabinet/img/symbol-03.png",
                    "xpos": "403",
                    "ypos": "200",
                    "height": "132px",
                    "width": "132px",
                    "text": {
                        "value": 3,
                        "xpos": "40",
                        "ypos": "150",
                        "width": "109",
                        "left_fill": "#fff",
                        "right_fill": "#00dd10",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_04",
                    "bg" : "curiousCabinet/img/symbol-04.png",
                    "xpos": "575",
                    "ypos": "200",
                    "height": "132px",
                    "width": "132px",
                    "text": {
                        "value": 4,
                        "xpos": "40",
                        "ypos": "150",
                        "width": "109",
                        "left_fill": "#fff",
                        "right_fill": "#00dd10",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_05",
                    "bg" : "curiousCabinet/img/symbol-05.png",
                    "xpos": "747",
                    "ypos": "200",
                    "height": "132px",
                    "width": "132px",
                    "text": {
                        "value": 5,
                        "xpos": "40",
                        "ypos": "150",
                        "width": "109",
                        "left_fill": "#fff",
                        "right_fill": "#00dd10",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                }

            ],

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "312",
                    "ypos" : "528",
                    "width" : "650",
                    "fill" : "#fff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols" : [

                {
                    "id" : "symbol_06",
                    "bg" : "curiousCabinet/img/symbol-06.png",
                    "xpos": "402",
                    "ypos": "134",
                    "height": "264px",
                    "width": "132px",
                    "text": {
                        "value": 6,
                        "xpos": "40",
                        "ypos": "282",
                        "width": "109",
                        "left_fill": "#fff",
                        "right_fill": "#00dd10",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_09",
                    "bg" : "curiousCabinet/img/symbol-09.png",
                    "xpos": "686",
                    "ypos": "134",
                    "height": "132px",
                    "width": "132px",
                    "text": {
                        "value": 9,
                        "xpos": "40",
                        "ypos": "150",
                        "width": "109",
                        "left_fill": "#fff",
                        "right_fill": "#00dd10",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                }

            ],

            "text": [
                {
                    "value": [
                        "Roses wild can appear on any position of the reel.",
                        "Wild substitutes for all symbolos in paytable.",
                        "Wildpays as if they were the highest paying symbol on any line.",
                        "More than 1 wild can appear at the same time."
                    ],
                    "xpos": "558",
                    "ypos": "270",
                    "width": "370",
                    "fill": "#a1ff80",
                    "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "15px",
                    "align": "center",
                    "spacing": "7"
                },
                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "312",
                    "ypos" : "528",
                    "width" : "650",
                    "fill" : "#fff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols" : [

                {
                    "id" : "symbol_07",
                    "bg" : "curiousCabinet/img/symbol-07.png",
                    "xpos": "337",
                    "ypos": "229",
                    "height": "198px",
                    "width": "99px"
                },

                {
                    "id" : "symbol_07-expanded",
                    "bg" : "curiousCabinet/img/paytable/symbol-7-expanded.png",
                    "xpos": "852",
                    "ypos": "180",
                    "height": "297px",
                    "width": "99px"
                }

            ],

            "text": [

                {
                    "value": 7,
                    "xpos": "520",
                    "ypos": "360",
                    "width": "109",
                    "left_fill": "#fff",
                    "right_fill": "#00dd10",
                    "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "25px",
                    "align": "left",
                    "margin": 0,
                    "paginate": [ 2, 0 ]
                },

                {
                    "value": 7,
                    "xpos": "650",
                    "ypos": "360",
                    "width": "109",
                    "left_fill": "#fff",
                    "right_fill": "#00dd10",
                    "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "25px",
                    "align": "left",
                    "margin": 0,
                    "paginate": [ 2, 1 ]
                },

                {
                    "value": [
                        "Doll pays as scatter when 4 single parts of them are on the screen.",
                        "Winning Dolls can turn into a 1x3 Dolls.",
                    ],
                    "xpos": "453",
                    "ypos": "169",
                    "width": "370",
                    "fill": "#a1ff80",
                    "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "15px",
                    "align": "center",
                    "spacing": "7"
                },

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "312",
                    "ypos" : "528",
                    "width" : "650",
                    "fill" : "#fff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols" : [

                {
                    "id" : "symbol_08",
                    "bg" : "curiousCabinet/img/symbol-08.png",
                    "xpos": "336",
                    "ypos": "180",
                    "height": "198px",
                    "width": "99px"
                },

                {
                    "id" : "symbol_08-expanded",
                    "bg" : "curiousCabinet/img/paytable/symbol-8-expanded.png",
                    "xpos": "754",
                    "ypos": "180",
                    "height": "198px",
                    "width": "198px"
                }

            ],

            "text": [

                {
                    "value": 8,
                    "xpos": "342",
                    "ypos": "435",
                    "width": "124",
                    "left_fill": "#fff",
                    "right_fill": "#00dd10",
                    "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "25px",
                    "align": "left",
                    "margin": 0,
                    "paginate": [ 5, 0 ]
                },

                {
                    "value": 8,
                    "xpos": "456",
                    "ypos": "435",
                    "width": "124",
                    "left_fill": "#fff",
                    "right_fill": "#00dd10",
                    "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "25px",
                    "align": "left",
                    "margin": 0,
                    "paginate": [ 5, 1 ]
                },

                {
                    "value": 8,
                    "xpos": "580",
                    "ypos": "435",
                    "width": "124",
                    "left_fill": "#fff",
                    "right_fill": "#00dd10",
                    "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "25px",
                    "align": "left",
                    "margin": 0,
                    "paginate": [ 5, 2 ]
                },

                {
                    "value": 8,
                    "xpos": "704",
                    "ypos": "435",
                    "width": "124",
                    "left_fill": "#fff",
                    "right_fill": "#00dd10",
                    "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "25px",
                    "align": "left",
                    "margin": 0,
                    "paginate": [ 5, 3 ]
                },

                {
                    "value": 8,
                    "xpos": "828",
                    "ypos": "435",
                    "width": "124",
                    "left_fill": "#fff",
                    "right_fill": "#00dd10",
                    "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "25px",
                    "align": "left",
                    "margin": 0,
                    "paginate": [ 5, 4 ]
                },
                {
                    "value": [
                        "Monster pays as scatter when 4 single parts of them are on the screen.",
                        "Winning Monsters can turn into a 2x2 Monsters.",
                    ],
                    "xpos": "437",
                    "ypos": "169",
                    "width": "320",
                    "fill": "#a1ff80",
                    "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "15px",
                    "align": "center",
                    "spacing": "7"
                },
                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "312",
                    "ypos" : "528",
                    "width" : "650",
                    "fill" : "#fff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols" : [

                {
                    "id" : "symbol_11",
                    "bg" : "curiousCabinet/img/paytable/symbol-11.png",
                    "xpos": "591",
                    "ypos": "115",
                    "height": "100px",
                    "width": "100px"
                },

                {
                    "id" : "freespin",
                    "bg" : "curiousCabinet/img/paytable/freespin-text.png",
                    "xpos": "431",
                    "ypos": "295",
                    "width": "100px"
                },

                {
                    "id" : "respin",
                    "bg" : "curiousCabinet/img/paytable/respin.png",
                    "xpos": "541",
                    "ypos": "260",
                    "width": "100px"
                },

                {
                    "id" : "x2",
                    "bg" : "curiousCabinet/img/paytable/x2.png",
                    "xpos": "641",
                    "ypos": "260",
                    "width": "100px"
                },

                {
                    "id" : "silver-coin",
                    "bg" : "curiousCabinet/img/paytable/silver-coin.png",
                    "xpos": "751",
                    "ypos": "295",
                    "width": "75px"
                }

            ],

            "text": [

                {
                    "value" : "Silver Drawer:In the regular game it can appear on reels 1,3,5 revealing one of the following prizes.",
                    "xpos" : "390",
                    "ypos" : "210",
                    "width" : "500",
                    "fill" : "#fff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "18px",
                    "align" : "center"
                } ,
                {
                    "value": [
                        "Respin: Disappear leaving a wild for the next free Spin.",
                        "x2 Multiplier: Apply to lines and scatters only.",
                        "Silver Coins: instant bonus win, see the game guide for details."
                    ],
                    "xpos": "293",
                    "ypos": "393",
                    "width": "695",
                    "fill": "#a1ff80",
                    "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "15px",
                    "align": "center",
                    "spacing": "7"
                },
                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "312",
                    "ypos" : "528",
                    "width" : "650",
                    "fill" : "#fff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols" : [
                {
                    "id" : "fs",
                    "bg" : "curiousCabinet/img/free-spins.png",
                    "xpos": "556",
                    "ypos": "90",
                    "height": "62px",
                    "width": "179px"
                },
                {
                    "id" : "symbol_10",
                    "bg" : "curiousCabinet/img/symbol-10.png",
                    "xpos": "335",
                    "ypos": "205",
                    "height": "198px",
                    "width": "99px"
                },

                {
                    "id" : "symbol_10-expanded",
                    "bg" : "curiousCabinet/img/symbol-10-no-text.png",
                    "xpos": "870",
                    "ypos": "205",
                    "height": "316px",
                    "width": "79px"
                },

                {
                    "id" : "fs-screenshot",
                    "bg" : "curiousCabinet/img/paytable/screenshotFS.png",
                    "xpos": "467",
                    "ypos": "205",
                    "width": "369px"
                }

            ],

            "text": [
                {
                    "value" : "Free Spins: 2 drawers on the reels trigger 8 Free Spins.",
                    "xpos" : "390",
                    "ypos" : "139",
                    "width" : "523",
                    "fill" : "#fff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "18px",
                    "align" : "center"
                } ,
                {
                    "value": [
                        "Free Spins:1 additional row of drawers will be added to the reels.",
                        "At least 1 drawers always gives prizes.",
                        "1x4 Expanding Wild can appear on any position of the reel."
                    ],
                    "xpos": "335",
                    "ypos": "408",
                    "width": "500",
                    "fill": "#a1ff80",
                    "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "15px",
                    "align": "center",
                    "spacing": "7"
                },
                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "312",
                    "ypos" : "528",
                    "width" : "650",
                    "fill" : "#fff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols" : [

                {
                    "id" : "symbol_12",
                    "bg" : "curiousCabinet/img/paytable/symbol-12.png",
                    "xpos": "591",
                    "ypos": "115",
                    "height": "100px",
                    "width": "100px"
                },

                {
                    "id" : "x5",
                    "bg" : "curiousCabinet/img/paytable/x5.png",
                    "xpos": "506",
                    "ypos": "260",
                    "width": "100px"
                },

                {
                    "id" : "coin",
                    "bg" : "curiousCabinet/img/paytable/coin.png",
                    "xpos": "701",
                    "ypos": "295",
                    "width": "75px"
                }

            ],

            "text": [


                {
                    "value" : "Gold Drawer: During Free Spins on the reels 2,4 revealing one of the following prizes.",
                    "xpos" : "390",
                    "ypos" : "210",
                    "width" : "500",
                    "fill" : "#fff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "18px",
                    "align" : "center"
                } ,
                {
                    "value": [
                        "x5 Multiplier: Apply to lines and scatters only.",
                        "Gold Coins: instant bonus win, see the game guide for details."
                    ],
                    "xpos": "293",
                    "ypos": "394",
                    "width": "695",
                    "fill": "#a1ff80",
                    "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "15px",
                    "align": "center",
                    "spacing": "7"
                },
                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "312",
                    "ypos" : "528",
                    "width" : "650",
                    "fill" : "#fff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "lines": [1, 10],
            "ypos": "225",
            "xpos": "215",
            "width": "52",
            "font" : "FuturaPT-Book, Arial, sans-serif",
            "text_colour": "#93d8fe",
            "checked_colour": "#fff",
            "unchecked_colour": "#00dd10",

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "312",
                    "ypos" : "528",
                    "width" : "650",
                    "fill" : "#fff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "lines": [11, 20],
            "ypos": "225",
            "xpos": "215",
            "width": "52",
            "font" : "FuturaPT-Book, Arial, sans-serif",
            "text_colour": "#93d8fe",
            "checked_colour": "#FFFFFF",
            "unchecked_colour": "#00dd10",

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "312",
                    "ypos" : "528",
                    "width" : "650",
                    "fill" : "#fff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "lines": [21, 30],
            "ypos": "225",
            "xpos": "215",
            "width": "52",
            "font" : "FuturaPT-Book, Arial, sans-serif",
            "text_colour": "#93d8fe",
            "checked_colour": "#FFFFFF",
            "unchecked_colour": "#00dd10",

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "312",
                    "ypos" : "528",
                    "width" : "650",
                    "fill" : "#fff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "lines": [31, 40],
            "ypos": "225",
            "xpos": "215",
            "width": "52",
            "font" : "FuturaPT-Book, Arial, sans-serif",
            "text_colour": "#93d8fe",
            "checked_colour": "#FFFFFF",
            "unchecked_colour": "#00dd10",

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "312",
                    "ypos" : "528",
                    "width" : "650",
                    "fill" : "#fff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        }

    ]


};
