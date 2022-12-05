
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
}

var bitmapFonts={
    "bmpFont":{
        "sprite": "fonts/fontBloodQueen.png",
        "font": "fonts/fontBloodQueen.xml"
    }
}

var extScripts={
    "webfont": "15px FuturaPT-Heavy",
    "webfont1": "15px FuturaPT-Book"
}
var gameAssets = {
    "assets": {
        "icon0": "bloodQueen/img/symbol-00.png",
        "icon1": "bloodQueen/img/symbol-01.png",
        "icon2": "bloodQueen/img/symbol-02.png",
        "icon3": "bloodQueen/img/symbol-03.png",
        "icon4": "bloodQueen/img/symbol-04.png",
        "icon5": "bloodQueen/img/symbol-05.png",
        "icon6": "bloodQueen/img/symbol-06.png",
        "icon7": "bloodQueen/img/symbol-07.png",
        "icon8": "bloodQueen/img/symbol-08.png",
        "icon9": "bloodQueen/img/symbol-09.png",
        "icon10": "bloodQueen/img/symbol-10.png",
        "icon11": "bloodQueen/img/symbol-11.png",
        "icon12": "bloodQueen/img/symbol-12.png",
        "bicon0": "bloodQueen/img/b-symbol-00.png",
        "bicon1": "bloodQueen/img/b-symbol-01.png",
        "bicon2": "bloodQueen/img/b-symbol-02.png",
        "bicon3": "bloodQueen/img/b-symbol-03.png",
        "bicon4": "bloodQueen/img/b-symbol-04.png",
        "bicon5": "bloodQueen/img/b-symbol-05.png",
        "bicon6": "bloodQueen/img/b-symbol-06.png",
        "bicon7": "bloodQueen/img/b-symbol-07.png",
        "bicon8": "bloodQueen/img/b-symbol-08.png",

        "line_0_00": "bloodQueen/img/lines/payline_0_00.png",
        "line_0_01": "bloodQueen/img/lines/payline_0_01.png",
        "line_0_02": "bloodQueen/img/lines/payline_0_02.png",
        "line_0_03": "bloodQueen/img/lines/payline_0_03.png",
        "line_0_04": "bloodQueen/img/lines/payline_0_04.png",
        "line_0_05": "bloodQueen/img/lines/payline_0_05.png",
        "line_0_06": "bloodQueen/img/lines/payline_0_06.png",
        "line_0_07": "bloodQueen/img/lines/payline_0_07.png",
        "line_0_08": "bloodQueen/img/lines/payline_0_08.png",
        "line_0_09": "bloodQueen/img/lines/payline_0_09.png",
        "line_0_10": "bloodQueen/img/lines/payline_0_10.png",
        "line_0_11": "bloodQueen/img/lines/payline_0_11.png",
        "line_0_12": "bloodQueen/img/lines/payline_0_12.png",
        "line_0_13": "bloodQueen/img/lines/payline_0_13.png",
        "line_0_14": "bloodQueen/img/lines/payline_0_14.png",
        "line_0_15": "bloodQueen/img/lines/payline_0_15.png",
        "line_0_16": "bloodQueen/img/lines/payline_0_16.png",
        "line_0_17": "bloodQueen/img/lines/payline_0_17.png",
        "line_0_18": "bloodQueen/img/lines/payline_0_18.png",
        "line_0_19": "bloodQueen/img/lines/payline_0_19.png",
        "IEFB1":"bloodQueen/img/paytable/symbol-10-screenshot.png",
        "IEFB2":"bloodQueen/img/paytable/symbol-11-screenshot.png",
        "fog": "bloodQueen/img/fog.png",
        "bottomBar": "gui/message-bar.png",
        "selBg": "bloodQueen/img/selection-background.png",
        "bgPanel": "bloodQueen/img/bgPanel.png",
        "bgPanelGame": "bloodQueen/img/bgPanel.png",
        "bgBlack": "gui/generic/img/mobile/png/black.png",
        "bgPreview":"bloodQueen/img/info-screen.png",
        "freeRoundsPanel":"bloodQueen/img/free-rounds.png",
        "bgAlpha": "bloodQueen/img/alpha.png",
        "bigWin":"bloodQueen/img/bigwin.png",
        "superWin":"bloodQueen/img/super-bigwin.png",
        "megaWin":"bloodQueen/img/mega-bigwin.png",
        "bg_r": "bloodQueen/img/bg/base-right.png",
        "bg_l": "bloodQueen/img/bg/base-left.png",
        "bg_b": "bloodQueen/img/bg/base-bottom.png",
        "bg_t": "bloodQueen/img/bg/base-top.png",
        "bg_m": "bloodQueen/img/bg/base-main.png",
        "bgFS_r": "bloodQueen/img/bg/base-right-fs.png",
        "bgFS_l": "bloodQueen/img/bg/base-left-fs.png",
        "bgFS_b": "bloodQueen/img/bg/base-bottom-fs.png",
        "bgFS_t": "bloodQueen/img/bg/base-top-fs.png",
        "bgFS_m": "bloodQueen/img/bg/base-main-fs.png",
        "buttonBg":"gui/generic/img/desktop/png/cp-info-bar.png",
        "volOnButton": "gui/btnVolOn.png",
        "volOffButton": "gui/btnVolOff.png",
        "freeSpinPanel":"bloodQueen/img/free-spins.png",
        "swipeImg":"gui/generic/img/mobile/png/swipe.png",
        "icon9_expanded": "bloodQueen/img/paytable/symbol-09-expanded.png",
        "icon11_expanded": "bloodQueen/img/paytable/symbol-11-expanded.png",
        "btnTranspRight": "bloodQueen/img/transparent.png",
        "btnTranspLeft": "bloodQueen/img/transparent.png"
    },
    "localizedAssets":{
        "graphAsset": {
            "logo": {
                "lang": ["zs","ko","jp"],
                "img": "bloodQueen/img/logo"
            }
        }
    },
    "buttonsSpriteSheet": {
        "container-btn": {
            "sprite": "bloodQueen/img/game-btn.png",
            "json": "bloodQueen/img/game-btn.png",
            "w": 210,
            "h": 66
        },
        "yesButton": {
            "sprite": "bloodQueen/img/yes-btn.png",
            "json": "bloodQueen/img/yes-btn.png",
            "w": 58,
            "h": 54
        },
        "noButton": {
            "sprite": "bloodQueen/img/no-btn.png",
            "json": "bloodQueen/img/no-btn.png",
            "w": 58,
            "h": 54
        },
        "selLeft": {
            "sprite": "bloodQueen/img/select-left.png",
            "json": "bloodQueen/img/select-left.png",
            "w": 69,
            "h": 67
        },
        "selRight": {
            "sprite": "bloodQueen/img/select-right.png",
            "json": "bloodQueen/img/select-right.png",
            "w": 69,
            "h": 67
        },
        "check": {
            "sprite": "bloodQueen/img/radio-btns.png",
            "json": "bloodQueen/img/radio-btns.png",
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
            "json": "bloodQueen/img/anim/symbol-00.json",
            "sprite": "bloodQueen/img/anim/symbol-00.png"
        },
        "anim1": {
            "json": "bloodQueen/img/anim/symbol-01.json",
            "sprite": "bloodQueen/img/anim/symbol-01.png"
        },
        "anim2": {
            "json": "bloodQueen/img/anim/symbol-02.json",
            "sprite": "bloodQueen/img/anim/symbol-02.png"
        },
        "anim3": {
            "json": "bloodQueen/img/anim/symbol-03.json",
            "sprite": "bloodQueen/img/anim/symbol-03.png"
        },
        "anim4": {
            "json": "bloodQueen/img/anim/symbol-04.json",
            "sprite": "bloodQueen/img/anim/symbol-04.png"
        },
        "anim5": {
            "json": "bloodQueen/img/anim/symbol-05.json",
            "sprite": "bloodQueen/img/anim/symbol-05.png"
        },
        "anim6": {
            "json": "bloodQueen/img/anim/symbol-06.json",
            "sprite": "bloodQueen/img/anim/symbol-06.png"
        },
        "anim7": {
            "json": "bloodQueen/img/anim/symbol-07.json",
            "sprite": "bloodQueen/img/anim/symbol-07.png"
        },
        "anim8": {
            "json": "bloodQueen/img/anim/symbol-08.json",
            "sprite": "bloodQueen/img/anim/symbol-08.png"
        },
        "anim10": {
            "json": "bloodQueen/img/anim/fakeAnim.json",
            "sprite": "bloodQueen/img/anim/fakeAnim.png"
        },
        "animW10": {
            "json": "bloodQueen/img/anim/symbol-10.json",
            "sprite": "bloodQueen/img/anim/symbol-10.png"
        },
        "anim11": {
            "json": "bloodQueen/img/anim/symbol-11.json",
            "sprite": "bloodQueen/img/anim/symbol-11.png"
        },
        "bluFlame": {
            "json": "bloodQueen/img/anim/symbol-12-flames.json",
            "sprite": "bloodQueen/img/anim/symbol-12-flames.png"
        },
        "anim12": {
            "json": "bloodQueen/img/anim/symbol-12.json",
            "sprite": "bloodQueen/img/anim/symbol-12.png"
        },
        "wildReel_0": {
            "json": "bloodQueen/img/anim/symbol-09-pt1.json",
            "sprite": "bloodQueen/img/anim/symbol-09-pt1.png"
        },
        "wildReel_1": {
            "json": "bloodQueen/img/anim/symbol-09-pt2.json",
            "sprite": "bloodQueen/img/anim/symbol-09-pt2.png"
        },
        "shiftWildReel_0": {
            "json": "bloodQueen/img/anim/symbol-11-expanded-pt1.json",
            "sprite": "bloodQueen/img/anim/symbol-11-expanded-pt1.png"
        },
        "shiftWildReel_1": {
            "json": "bloodQueen/img/anim/symbol-11-expanded-pt2.json",
            "sprite": "bloodQueen/img/anim/symbol-11-expanded-pt2.png"
        },
        "stickyWild": {
            "json": "bloodQueen/img/anim/symbol-10-expanding.json",
            "sprite": "bloodQueen/img/anim/symbol-10-expanding.png"
        },
        "sckeleton": {
            "json": "bloodQueen/img/anim/skeleton-side-image.json",
            "sprite": "bloodQueen/img/anim/skeleton-side-image.png"
        },
        "candle":{
            "json": "bloodQueen/img/anim/candle-flicker.json",
            "sprite": "bloodQueen/img/anim/candle-flicker.png"
        },
        "iconWinBgAnim":{
            "json": "bloodQueen/img/anim/win-highlight.json",
            "sprite": "bloodQueen/img/anim/win-highlight.png"
        },
        "part-1": {
            "json": "bloodQueen/img/anim/bronze-coin.json",
            "sprite": "bloodQueen/img/anim/bronze-coin.png"
        },
        "part-2": {
            "json": "bloodQueen/img/anim/silver-coin.json",
            "sprite": "bloodQueen/img/anim/silver-coin.png"
        },
        "part-3": {
            "json": "bloodQueen/img/anim/gold-coin.json",
            "sprite": "bloodQueen/img/anim/gold-coin.png"
        },
        "f-part-1": {
            "json": "bloodQueen/img/anim/bronze-coin-frwrd.json",
            "sprite": "bloodQueen/img/anim/bronze-coin-frwrd.png"
        },
        "f-part-2": {
            "json": "bloodQueen/img/anim/silver-coin-frwrd.json",
            "sprite": "bloodQueen/img/anim/silver-coin-frwrd.png"
        },
        "f-part-3": {
            "json": "bloodQueen/img/anim/gold-coin-frwrd.json",
            "sprite": "bloodQueen/img/anim/gold-coin-frwrd.png"
        }
    },
    "importantSounds": {
        "spinClick": {
            "name": "bloodQueen/sounds/spinClick.mp3",
            "volume": .2
        },
        "reelSound": {
            "name": "bloodQueen/sounds/reelSound.mp3",
            "volume":1
        },
        "reelSoundFast_0": {
            "name": "bloodQueen/sounds/reelSoundFast.mp3",
            "volume":.8
        },
        "reelSoundFast1_0": {
            "name": "bloodQueen/sounds/reelSoundFast5.mp3",
            "volume":.8
        },
        "reelSoundFast_1": {
            "name": "bloodQueen/sounds/reelSoundFast.mp3",
            "volume":.8
        },
        "reelSoundFast1_1": {
            "name": "bloodQueen/sounds/reelSoundFast5.mp3",
            "volume":.8
        },
        "reelSoundFast_2": {
            "name": "bloodQueen/sounds/reelSoundFast.mp3",
            "volume":.8
        },
        "reelSoundFast1_2": {
            "name": "bloodQueen/sounds/reelSoundFast5.mp3",
            "volume":.8
        },
        "reelSoundFast_3": {
            "name": "bloodQueen/sounds/reelSoundFast.mp3",
            "volume":.8
        },
        "reelSoundFast1_3": {
            "name": "bloodQueen/sounds/reelSoundFast5.mp3",
            "volume":.8
        },
        "reelSoundFast_4": {
            "name": "bloodQueen/sounds/reelSoundFast.mp3",
            "volume":.8
        },
        "reelSoundFast1_4": {
            "name": "bloodQueen/sounds/reelSoundFast5.mp3",
            "volume":.8
        },
        "reelStop": {
            "name": "bloodQueen/sounds/reelStop.mp3",
            "volume":.4
        }
    },
 "sounds": {
        "click": {
            "name": "bloodQueen/sounds/click.mp3",
            "volume": .2
        },
        "smbWin_0": {
            "name": "bloodQueen/sounds/smbWin_0.mp3",
            "volume": 1.4
        },
        "smbWin_1": {
            "name": "bloodQueen/sounds/smbWin_0.mp3",
            "volume": 1.4
        },
        "smbWin_2": {
            "name": "bloodQueen/sounds/smbWin_0.mp3",
            "volume": 1.4
        },
        "smbWin_3": {
            "name": "bloodQueen/sounds/smbWin_0.mp3",
            "volume": 1.4
        },
        "smbWin_4": {
            "name": "bloodQueen/sounds/smbWin_4.mp3",
            "volume": 1.5
        },
        "smbWin_5": {
            "name": "bloodQueen/sounds/smbWin_5.mp3",
            "volume": 1.5
        },
        "smbWin_6": {
            "name": "bloodQueen/sounds/smbWin_6.mp3",
            "volume": 1.5
        },
        "smbWin_7": {
            "name": "bloodQueen/sounds/smbWin_7.mp3",
            "volume": 1.5
        },
        "smbWin_8": {
            "name": "bloodQueen/sounds/smbWin_8.mp3",
            "volume": 1.3
        },
        "stickyWild": {
            "name": "bloodQueen/sounds/stickywild.mp3",
            "volume": .6
        },
        "wildReel": {
            "name": "bloodQueen/sounds/wildReel.mp3",
            "volume": .6
        },
        "wildReelFast": {
            "name": "bloodQueen/sounds/wildReelFast.mp3",
            "volume": .6
        },
        "fsWildReel": {
            "name": "bloodQueen/sounds/fsWildReel.mp3",
            "volume": .6
        },
        "fsWildReelFast": {
            "name": "bloodQueen/sounds/fsWildReelFast.mp3",
            "volume": .6
        },
        "wildReelOut": {
            "name": "bloodQueen/sounds/wildReelRollback.mp3",
            "volume": .4
        },
        "fsWildReelOut": {
            "name": "bloodQueen/sounds/fsWildReelRollback.mp3",
            "volume": .5
        },
        "fsWin": {
            "name": "bloodQueen/sounds/fsWin.mp3",
            "volume": 3
        },
        "fsWon": {
            "name": "bloodQueen/sounds/introFs.mp3",
            "volume": 1
        },
        "incWin": {
            "name": "bloodQueen/sounds/counter.mp3",
            "volume": .4,
            "loop": true
        },
        "line": {
            "name": "bloodQueen/sounds/line.mp3",
            "volume": .3
        },
        "winBg_0": {
            "name": "bloodQueen/sounds/centralWin/win1.mp3",
            "volume": 0
        },
        "winBg_1": {
            "name": "bloodQueen/sounds/centralWin/win2.mp3",
            "volume": .6
        },
        "winBg_2": {
            "name": "bloodQueen/sounds/centralWin/win3.mp3",
            "volume": .6
        },
        "winBg_3": {
            "name": "bloodQueen/sounds/centralWin/win4.mp3",
            "volume": .6
        },
        "winBg_4": {
            "name": "bloodQueen/sounds/centralWin/win5.mp3",
            "volume": .6
        },
        "winBg_5": {
            "name": "bloodQueen/sounds/centralWin/win6.mp3",
            "volume": .6
        },
        "winBg_6": {
            "name": "bloodQueen/sounds/centralWin/bigWin_Full.mp3",
            "volume": .7
        },
        "winBg_7": {
            "name": "bloodQueen/sounds/centralWin/superbigWin_Full.mp3",
            "volume": .7
        },
        "winBg_8": {
            "name": "bloodQueen/sounds/centralWin/megabigWin_Full.mp3",
            "volume": .7
        },
        "winBgS_6": {
            "name": "bloodQueen/sounds/centralWin/bigWin.mp3",
            "volume": .7
        },
        "winBgS_7": {
            "name": "bloodQueen/sounds/centralWin/superbigWin.mp3",
            "volume": .7
        },
        "winBgS_8": {
            "name": "bloodQueen/sounds/centralWin/megabigWin.mp3",
            "volume": .7
        },
        "winPanel": {
            "name": "bloodQueen/sounds/winScreen.mp3",
            "volume": 1
        },
        "coins": {
            "name": "bloodQueen/sounds/coins.mp3",
            "volume":.3
        }
    },
    "bgSounds": {
        "bgSlot": {
            "name": "bloodQueen/sounds/bg.mp3",
            "volume": .3
        },

        "bgFs": {
            "name": "bloodQueen/sounds/bgFs.mp3",
            "volume":.35
        }
    },
    "video":{
        "promoVideo":"bloodQueen/img/info-page.mp4"
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
        "bgIconAnim":{},
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
            },
            "animAsset":{
                "s3": {
                    "name": "candle",
                    "x": 118,
                    "y": 45,
                    "fps":12
                },
                "s4": {
                    "name": "candle",
                    "x": 1142,
                    "y": 45,
                    "fps":12
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
        },
            "animAsset":{
                "s3": {
                    "name": "candle",
                    "x": 118,
                    "y": 45,
                    "fps":12
                },
                "s4": {
                    "name": "candle",
                    "x": 1142,
                    "y": 45,
                    "fps":12
                }
            }
        },
        "idleObjects":{
            "visible": false,
            "frequency":[1000,3000],
            "objects": {
                "s1": {
                    "name": "sckeleton",
                    "x": 129,
                    "y": 317,
                    "scaleX":10,
                    "scaleY":10,
                    "fps":24,
                    "prob":2,
                    "clear":false
                },
                "s2": {
                    "name": "sckeleton",
                    "x": 1152,
                    "y": 317,
                    "scaleX":10,
                    "scaleY":10,
                    "fps":24,
                    "prob":2,
                    "clear":false
                }
            }
        },
        "fog":{
            "visible":false,
            "graphAsset": {
                "bg1": {
                    "name": "fog",
                    "x": 1000,
                    "y": 500
                }
            }
        },
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
        "wild": {
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
                    "x": 368,
                    "y": 12
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
                    "x": 422,
                    "y": 14
                }
            },
            "texts": {
                "fsLabel": {
                    "x": 295,
                    "y": 20,
                    "fill": "#FFFFFF",
                    "font": "13px Futura ,Arial",
                    "text": "Free Spins",
                    "anchorX": 1
                },
                "fsValue": {
                    "x": 265,
                    "y": 36,
                    "fill": "#FFFFFF",
                    "font": "23px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                },
                "totWonLabel": {
                    "x": 1050,
                    "y": 20,
                    "fill": "#FFFFFF",
                    "font": "13px Futura ,Arial",
                    "text": "Total won",
                    "anchorX": 1
                },
                "totWonValue": {
                    "x": 1020,
                    "y": 36,
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
                    "name": "bgPanel",
                    "x": 640,
                    "y": 405,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "selBg": {
                    "visible": false,
                    "name": "selBg",
                    "x": 640,
                    "y": 250,
                    "anchorX": .5,
                    "anchorY": .5
                }
            },
            "texts": {
                "fsWLabel": {
                    "x": 640,
                    "y": 340,
                    "fill": "#ffffff",
                    "font": "28px FuturaPT-Heavy",
                    "text": "You won",
                    "anchorX": .5
                },
                "fsValue1": {
                    "x": 640,
                    "y": 380,
                    "fill": "#ffffff",
                    "font": "30px FuturaPT-Heavy",
                    "text": "5",
                    "anchorX": .5
                },
                "fsWLabel1": {
                    "x": 640,
                    "y": 420,
                    "fill": "#ffffff",
                    "font": "28px FuturaPT-Heavy",
                    "text": "Free spins!",
                    "align":"center",
                    "anchorX": .5
                }
            },
            "mainButtons": {
                "wR": {
                    "name": "selRight",
                    "x": 824,
                    "y": 400,
                    "evt": "doWR"
                },
                "sW": {
                    "name": "selLeft",
                    "x": 460,
                    "y": 400,
                    "evt": "doSM"
                },
                "bl":{
                    "name": "btnTranspLeft",
                    "x": 455,
                    "y": 250,
                    "evt": "doSM"
                },
                "br":{
                    "name": "btnTranspRight",
                    "x": 822,
                    "y": 250,
                    "evt": "doWR"
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
                    "fill": "#00E2E2",
                    "font": "14px FuturaPT-Book",
                    "text":"",
                    "anchorX": .5
                },
                "frWLabel": {
                    "x": 640,
                    "y": 260,
                    "fill": "#00E2E2",
                    "font": "18px FuturaPT-Book",
                    "text":"",
                    "align":"center",
                    "anchorX": .5
                },
                "frValue1": {
                    "x": 640,
                    "y": 300,
                    "fill": "#00E2E2",
                    "font": "24px FuturaPT-Book",
                    "text": "5",
                    "anchorX": .5
                },
                "frWLabel1": {
                    "x": 640,
                    "y": 330,
                    "fill": "#00E2E2",
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
                    "y": 447,
                    "bmpFont": "bmpFont",
                    "size": "40",
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
                "ieFallBack1":{
                    "name": "IEFB1",
                    "x": 640,
                    "y": 300,
                    "anchorX":.5,
                    "visible":false
                },
                "ieFallBack2":{
                    "name": "IEFB2",
                    "x": 640,
                    "y": 441,
                    "anchorX":.5,
                    "visible":false
                },
                "logo": {
                    "name": "logo",
                    "x": 640,
                    "y": 90,
                    "anchorX":.5,
                    "anchorY":.5
                }
            },
            "videoAsset":{
                "promoVideo": {
                    "name": "promoVideo",
                    "x": 640,
                    "y": 445,
                    "width":430,
                    "height":266
                }
            },
            "texts": {
                "txtPrev3": {
                    "x": 640,
                    "y": 170,
                    "fill": "#b1f7ff",
                    "font": "30px Futura PT, Arial",
                    "text": "Win up to 50 Free spins in the Seduction Battle",
                    "align":"center",
                    "anchorX":.5
                },
                "txtPrev4": {
                    "x": 640,
                    "y": 220,
                    "fill": "#00cce4",
                    "font": "20px Futura PT, Arial",
                    "text": "Choose between two modes\nBlood Queen for Shifting Expanding Wilds & Van Hell for Sticky Spreading Wilds.",
                    "align":"center",
                    "anchorX":.5
                },
                "buttons": {}
            },
            "checkbox": {
                "name": "check",
                "text": "Don't show anymore",
                "font": "15px Arial",
                "color": "#70e3ff",
                "x": 50,
                "y": 655,
                "evt": "chkEvt"
            },
            "buttons": {
                "closePreview": {
                    "name": "container-btn",
                    "x": 640,
                    "y": 672,
                    "evt": "doCloseP",
                    "texts": {
                        "closeLabel": {
                            "x": 0,
                            "y": -14,
                            "fill": "#70e3ff",
                            "font": "22px Futura PT, Arial",
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
                    "text": "",
                    "anchorX": .5
                },
                "msg2": {
                    "x": 640,
                    "y": 350,
                    "fill": "#ffffff",
                    "font": "20px FuturaPT-Heavy",
                    "text": "",
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
                    "scaleX":1.5,
                    "scaleY":1.5
                }
            },
            "texts": {
                "msgFR1": {
                    "x": 640,
                    "y": 230,
                    "fill": "#00E2E2",
                    "font": "22px FuturaPT-Book",
                    "text": ".wqdwe",
                    "anchorX": .5
                },
                "msgFR2": {
                    "x": 640,
                    "y": 260,
                    "fill": "#00E2E2",
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
}

var ReelConfig = {
    "slotEngine":"BloodEngine",
    "engineNumbers":15,
    "log":true,
    "canSwipe":false,
    "comment_preview":"enable feature preview screen",
    "preview":true,
    "previewTout":30000,
    "spinType": "Spin",
    "comment_winType":"spin class used by the game on line central win field",
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
    "spinWithAlpha":.6,
    "spinConfig":{
        "es":{
            "stopEnabled":false,
            "reelSecondMovementTime":0.5,
            "reelLoopInterval":.17,
            "reelPreMovement": 4,
            "reelPreMovementTime": .2,
            "reelBaseInterval": 5,
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
    "numIcon": 7,
    "loadTout": 30,
    "credits": "5000",
    "bet": "0.50",
    "animDelayAfterWild":1200,
    "freeRounds":"normal",
    "freeSpins":"TypeChoiceFreeSpins",
    "_fsIcon": 1,
    "winHLScale":1.15,
    "fsSpinDelay":750,
    "minFsSmbs":3,
    "scatterIcon": 10,
    "scatterType": "SubstScatter",
    "_twinReelsFeature":"normal",
    "wildType": "WildReel",
    "wildNum": [9],
    "wildReelRollbackSpinDelay": 500,
    "wildReelOrigin":0,
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

    "bg" : "bloodQueen/img/paytable/pt-base-main.png",

    "closeBtn": {

        "ypos": "140",
        "xpos": "1000"

    },

    "pagination" : {

        "ypos" : "590",
        "xpos" : "441",
        "checked" : "#fff",
        "unchecked" : "#000000"

    },

    "helpPath" : gameParams.pathCDN + 'premiumslots/remoteHelp.jsp?rPage=help/mobile/bloodQueen/help_' + gameParams.lang,

    "translatePosition": true,

    "buttons" : [

        {
            "id" : "left",
            "ypos" : "435",
            "xpos" : "170",
            "bg_up" : "bloodQueen/img/paytable/forward-btn-up.png",
            "bg_over" : "bloodQueen/img/paytable/forward-btn-over.png",
            "bg_down" : "bloodQueen/img/paytable/forward-btn-down.png",
            "direction" : -1
        },

        {
            "id" : "right",
            "ypos" : "435",
            "xpos" : "690",
            "bg_up" : "bloodQueen/img/paytable/forward-btn-up.png",
            "bg_over" : "bloodQueen/img/paytable/forward-btn-over.png",
            "bg_down" : "bloodQueen/img/paytable/forward-btn-down.png",
            "direction" : 1
        }

    ],

    "pages" : [
        {

            "gameguide" : true,
            "title" : "Blood Queen Game Rules",
            "title_xpos" : "520",
            "title_ypos" : "130",
            "xpos" : "200",
            "ypos" : "185",
            "height" : "340",
            "width" : "830",
            "fill": "#fff",
            "font" : "FuturaPT-Book, Arial, sans-serif",
            "rtp": [
                "96.06",
                "96.06",
                "96.06"
            ]

        },
        {

            "symbols" : [

                {
                    "id" : "symbol_00",
                    "bg" : "bloodQueen/img/symbol-00.png",
                    "xpos": "285",
                    "ypos": "160",
                    "height": "175px",
                    "width": "175px",
                    "text": {
                        "value": 0,
                        "xpos": "60",
                        "ypos": "185",
                        "width": "109",
                        "left_fill": "#fff",
                        "right_fill": "#60b7f1",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_01",
                    "bg" : "bloodQueen/img/symbol-01.png",
                    "xpos": "460",
                    "ypos": "160",
                    "height": "175px",
                    "width": "175px",
                    "text": {
                        "value": 1,
                        "xpos": "60",
                        "ypos": "185",
                        "width": "109",
                        "left_fill": "#fff",
                        "right_fill": "#60b7f1",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_02",
                    "bg" : "bloodQueen/img/symbol-02.png",
                    "xpos": "635",
                    "ypos": "160",
                    "height": "175px",
                    "width": "175px",
                    "text": {
                        "value": 2,
                        "xpos": "60",
                        "ypos": "185",
                        "width": "109",
                        "left_fill": "#fff",
                        "right_fill": "#60b7f1",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_03",
                    "bg" : "bloodQueen/img/symbol-03.png",
                    "xpos": "810",
                    "ypos": "160",
                    "height": "175px",
                    "width": "175px",
                    "text": {
                        "value": 3,
                        "xpos": "50",
                        "ypos": "185",
                        "width": "109",
                        "left_fill": "#fff",
                        "right_fill": "#60b7f1",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                }

            ],

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "445",
                    "width" : "500",
                    "fill" : "#70e3ff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols": [

                {
                    "id" : "symbol_04",
                    "bg" : "bloodQueen/img/symbol-04.png",
                    "xpos": "313",
                    "ypos": "160",
                    "height": "175px",
                    "width": "175px",
                    "text": {
                        "value": 4,
                        "xpos": "50",
                        "ypos": "185",
                        "width": "109",
                        "left_fill": "#fff",
                        "right_fill": "#60b7f1",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_05",
                    "bg" : "bloodQueen/img/symbol-05.png",
                    "xpos": "543",
                    "ypos": "160",
                    "height": "175px",
                    "width": "175px",
                    "text": {
                        "value": 5,
                        "xpos": "50",
                        "ypos": "185",
                        "width": "109",
                        "left_fill": "#fff",
                        "right_fill": "#60b7f1",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_06",
                    "bg" : "bloodQueen/img/symbol-06.png",
                    "xpos": "772",
                    "ypos": "160",
                    "height": "175px",
                    "width": "175px",
                    "text": {
                        "value": 6,
                        "xpos": "50",
                        "ypos": "185",
                        "width": "109",
                        "left_fill": "#fff",
                        "right_fill": "#60b7f1",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                }

            ],

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "445",
                    "width" : "500",
                    "fill" : "#70e3ff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols": [

                {
                    "id" : "symbol_08",
                    "bg" : "bloodQueen/img/symbol-08.png",
                    "xpos": "685",
                    "ypos": "160",
                    "height": "175px",
                    "width": "175px",
                    "text": {
                        "value": 8,
                        "xpos": "50",
                        "ypos": "185",
                        "width": "109",
                        "left_fill": "#fff",
                        "right_fill": "#60b7f1",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_07",
                    "bg" : "bloodQueen/img/symbol-07.png",
                    "xpos": "420",
                    "ypos": "160",
                    "height": "175px",
                    "width": "175px",
                    "text": {
                        "value": 7,
                        "xpos": "50",
                        "ypos": "185",
                        "width": "109",
                        "left_fill": "#fff",
                        "right_fill": "#60b7f1",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                }

            ],

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "445",
                    "width" : "500",
                    "fill" : "#70e3ff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols": [

                {
                    "id" : "symbol_09",
                    "bg" : "bloodQueen/img/symbol-09.png",
                    "xpos": "390",
                    "ypos": "155",
                    "height": "175px",
                    "width": "175px"
                },

                {
                    "id" : "symbol_09_screenshot",
                    "bg" : "bloodQueen/img/paytable/symbol-09-screenshot.png",
                    "xpos": "640",
                    "ypos": "175",
                    "width": "250px"
                }

            ],

            "text": [

                {
                    "value": [
                        "The wild appears on any top position of the reels and expands to cover the entire reel.",
                        "It completes and substitutes all the icons except for free spin.",
                        "More than 1 wild can appear at the same time."
                    ],
                    "xpos": "265",
                    "ypos": "340",
                    "width": "750",
                    "fill": "#fff",
                    "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "18px",
                    "align": "center",
                    "spacing": "10"
                },

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "445",
                    "width" : "500",
                    "fill" : "#70e3ff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols": [

                {
                    "id" : "symbol_12_text",
                    "bg" : "bloodQueen/img/symbol-12.png",
                    "xpos": "390",
                    "ypos": "155",
                    "height": "175px",
                    "width": "175px"
                },

                {
                    "id" : "symbol_12_screenshot",
                    "bg" : "bloodQueen/img/paytable/symbol-12-screenshot.png",
                    "xpos": "640",
                    "ypos": "175",
                    "width": "250px"
                }

            ],

            "text": [

                {
                    "value": "Free spin symbols can appear on any position on the reels.",
                    "xpos": "265",
                    "ypos": "340",
                    "width": "750",
                    "fill": "#fff",
                    "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "18px",
                    "align": "center",
                    "margin": "0"
                },

                {
                    "value": [
                        "Number of awarded free spins:",
                        "3 symbols award 20 free spins",
                        "4 symbols award 30 free spins",
                        "5 symbols award 50 free spins",
                    ],
                    "xpos": "265",
                    "ypos": "360",
                    "width": "750",
                    "fill": "#fff",
                    "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "18px",
                    "align": "center",
                    "spacing": "0"
                },

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "445",
                    "width" : "500",
                    "fill" : "#70e3ff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols": [

                {
                    "id" : "symbol_10_text",
                    "bg" : "bloodQueen/img/symbol-10.png",
                    "xpos": "295",
                    "ypos": "155",
                    "height": "175px",
                    "width": "175px",
                    "text": {
                        "value": "Van Hell&#39;s Holy Water expanding sticky wild",
                        "xpos": "-37",
                        "ypos": "185",
                        "width": "250",
                        "left_fill": "#fff",
                        "right_fill": "#60b7f1",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "18px",
                        "align": "center"
                    }
                },

                {
                    "id" : "freespin-screenshot",
                    "bg" : "bloodQueen/img/paytable/freespin-screenshot.png",
                    "xpos": "510",
                    "ypos": "200",
                    "width": "250px"
                },

                {
                    "id" : "symbol_11_text",
                    "bg" : "bloodQueen/img/symbol-11.png",
                    "xpos": "810",
                    "ypos": "155",
                    "height": "175px",
                    "width": "175px",
                    "text": {
                        "value": "Blood queen shifting wild reel",
                        "xpos": "-12",
                        "ypos": "185",
                        "width": "200",
                        "left_fill": "#fff",
                        "right_fill": "#60b7f1",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "18px",
                        "align": "center"
                    }
                }

            ],

            "text": [

                {
                    "value": "Depending on the initial Free spin game selection, (Van Hell or blood queen) two different Wild symbols might be displayed during the free spin game.",
                    "xpos": "265",
                    "ypos": "400",
                    "width": "750",
                    "fill": "#fff",
                    "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "18px",
                    "align": "center",
                    "margin": "0"
                },

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "445",
                    "width" : "500",
                    "fill" : "#70e3ff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols": [

                {
                    "id" : "symbol_10_text",
                    "bg" : "bloodQueen/img/symbol-10.png",
                    "xpos": "390",
                    "ypos": "155",
                    "height": "175px",
                    "width": "175px"
                },

                {
                    "id" : "symbol_10_screenshot",
                    "bg" : "bloodQueen/img/paytable/symbol-10-screenshot.png",
                    "xpos": "640",
                    "ypos": "175",
                    "width": "250px"
                }

            ],

            "text": [

                {
                    "value": [
                        "The holy water symbol activates the sticky wild spreading animation.",
                        "Each spin, the number of sticky wilds will double, up to four.",
                        "Spreading animation starts vertically and moves horizontally towards the center."
                    ],
                    "xpos": "265",
                    "ypos": "340",
                    "width": "750",
                    "fill": "#fff",
                    "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "18px",
                    "align": "center",
                    "spacing": "10"
                },

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "445",
                    "width" : "500",
                    "fill" : "#70e3ff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols": [

                {
                    "id" : "symbol_11_text",
                    "bg" : "bloodQueen/img/symbol-11.png",
                    "xpos": "390",
                    "ypos": "155",
                    "height": "175px",
                    "width": "175px"
                },

                {
                    "id" : "symbol_11_screenshot",
                    "bg" : "bloodQueen/img/paytable/symbol-11-screenshot.png",
                    "xpos": "640",
                    "ypos": "175",
                    "width": "250px"
                }

            ],

            "text": [

                {
                    "value": [
                        "The blood potion wild icon appears on the third top central reel and expands covering the entire reel.",
                        "Each spin, the wild reel will shift leftwards until it reaches the first reel.",
                        "More than one wild reel can be displayed on the reels at the same time."

                    ],
                    "xpos": "265",
                    "ypos": "340",
                    "width": "750",
                    "fill": "#fff",
                    "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "18px",
                    "align": "center",
                    "spacing": "10"
                },

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "445",
                    "width" : "500",
                    "fill" : "#70e3ff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "lines": [1, 10],
            "ypos": "225",
            "font" : "FuturaPT-Book, Arial, sans-serif",
            "text_colour": "#93d8fe",
            "checked_colour": "#fff",
            "unchecked_colour": "#60b7f1",

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "445",
                    "width" : "500",
                    "fill" : "#70e3ff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "lines": [11, 20],
            "ypos": "225",
            "font" : "FuturaPT-Book, Arial, sans-serif",
            "text_colour": "#93d8fe",
            "checked_colour": "#FFFFFF",
            "unchecked_colour": "#60b7f1",

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "445",
                    "width" : "500",
                    "fill" : "#70e3ff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "lines": [21, 30],
            "ypos": "225",
            "font" : "FuturaPT-Book, Arial, sans-serif",
            "text_colour": "#93d8fe",
            "checked_colour": "#FFFFFF",
            "unchecked_colour": "#60b7f1",

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "445",
                    "width" : "500",
                    "fill" : "#70e3ff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        }
    ]

}
