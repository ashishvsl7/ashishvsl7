
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
        },
        "textsPortrait": {
            "port": {
                "x": 510,
                "y": 450,
                "fill": "#ffffff",
                "font": "20px Arial",
                "text": "Loading Portrait assets...",
                "align":"center"
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
        "sprite": "fonts/fontJ&H.png",
        "font": "fonts/fontJ&H.xml"
    }
}

var extScripts={
    "webfont": "15px FuturaPT-Heavy",
    "webfont1": "15px FuturaPT-Book",
    "webfont2": "15px ElementaryGothicBookhandJ-H-Normal"
}
var gameAssets = {
    "assets": {
        "icon0": "jekyllHyde/img/symbol-00.png",
        "icon1": "jekyllHyde/img/symbol-01.png",
        "icon2": "jekyllHyde/img/symbol-02.png",
        "icon3": "jekyllHyde/img/symbol-03.png",
        "icon4": "jekyllHyde/img/symbol-04.png",
        "icon5": "jekyllHyde/img/symbol-05.png",
        "icon6": "jekyllHyde/img/symbol-06.png",
        "icon7": "jekyllHyde/img/symbol-07.png",
        "icon8": "jekyllHyde/img/symbol-08.png",
        "icon9": "jekyllHyde/img/symbol-09.png",
        "icon10": "jekyllHyde/img/symbol-10.png",
        "icon11": "jekyllHyde/img/symbol-11.png",
        "icon12": "jekyllHyde/img/symbol-12.png",
        "bicon0": "jekyllHyde/img/b-symbol-00.png",
        "bicon1": "jekyllHyde/img/b-symbol-01.png",
        "bicon2": "jekyllHyde/img/b-symbol-02.png",
        "bicon3": "jekyllHyde/img/b-symbol-03.png",
        "bicon4": "jekyllHyde/img/b-symbol-04.png",
        "bicon5": "jekyllHyde/img/b-symbol-05.png",
        "bicon6": "jekyllHyde/img/b-symbol-06.png",
        "bicon7": "jekyllHyde/img/b-symbol-07.png",
        "bicon8": "jekyllHyde/img/b-symbol-08.png",
        "wildBg":"jekyllHyde/img/symbol-09-expanded.png",
        "wildText":"jekyllHyde/img/symbol-09-text.png",

        "line_0_00": "jekyllHyde/img/lines/payline_0_00.png",
        "line_0_01": "jekyllHyde/img/lines/payline_0_01.png",
        "line_0_02": "jekyllHyde/img/lines/payline_0_02.png",
        "line_0_03": "jekyllHyde/img/lines/payline_0_03.png",
        "line_0_04": "jekyllHyde/img/lines/payline_0_04.png",
        "line_0_05": "jekyllHyde/img/lines/payline_0_05.png",
        "line_0_06": "jekyllHyde/img/lines/payline_0_06.png",
        "line_0_07": "jekyllHyde/img/lines/payline_0_07.png",
        "line_0_08": "jekyllHyde/img/lines/payline_0_08.png",
        "line_0_09": "jekyllHyde/img/lines/payline_0_09.png",
        "line_0_10": "jekyllHyde/img/lines/payline_0_10.png",
        "line_0_11": "jekyllHyde/img/lines/payline_0_11.png",
        "line_0_12": "jekyllHyde/img/lines/payline_0_12.png",
        "line_0_13": "jekyllHyde/img/lines/payline_0_13.png",
        "line_0_14": "jekyllHyde/img/lines/payline_0_14.png",
        "line_0_15": "jekyllHyde/img/lines/payline_0_15.png",
        "line_0_16": "jekyllHyde/img/lines/payline_0_16.png",
        "line_0_17": "jekyllHyde/img/lines/payline_0_17.png",
        "line_0_18": "jekyllHyde/img/lines/payline_0_18.png",
        "line_0_19": "jekyllHyde/img/lines/payline_0_19.png",
        "bottomBar": "gui/message-bar.png",
        "selBg": "jekyllHyde/img/selection-background.png",
        "bgPanel": "jekyllHyde/img/bgPanel.png",
        "bgPanelGame": "jekyllHyde/img/bgPanel.png",
        "bgBlack": "gui/generic/img/mobile/png/black.png",
        "freeRoundsPanel":"jekyllHyde/img/free-rounds.png",
        "bgAlpha": "jekyllHyde/img/alpha.png",
        "bigWin":"jekyllHyde/img/bigwin.png",
        "superWin":"jekyllHyde/img/super-bigwin.png",
        "megaWin":"jekyllHyde/img/mega-bigwin.png",
        "bg_r": "jekyllHyde/img/bg/base-right.png",
        "bg_l": "jekyllHyde/img/bg/base-left.png",
        "bg_b": "jekyllHyde/img/bg/base-bottom.png",
        "bg_t": "jekyllHyde/img/bg/base-top.png",
        "bg_m": "jekyllHyde/img/bg/base-main.png",
        "bgFS_r": "jekyllHyde/img/bg/base-right-fs.png",
        "bgFS_l": "jekyllHyde/img/bg/base-left-fs.png",
        "bgFS_b": "jekyllHyde/img/bg/base-bottom-fs.png",
        "bgFS_t": "jekyllHyde/img/bg/base-top-fs.png",
        "bgFS_m": "jekyllHyde/img/bg/base-main-fs.png",
        "buttonBg":"gui/generic/img/desktop/png/cp-info-bar.png",
        "volOnButton": "gui/btnVolOn.png",
        "volOffButton": "gui/btnVolOff.png",
        "freeSpinPanel":"jekyllHyde/img/free-spins.png",
        "swipeImg":"gui/generic/img/mobile/png/swipe.png",
        "btnTranspRight": "jekyllHyde/img/transparent.png",
        "btnTranspLeft": "jekyllHyde/img/transparent.png",
        "bgBlack":"jekyllHyde/img/black.png",
        "bgPreview1":"jekyllHyde/img/paytable/intro1.png",
        "bgPreview2":"jekyllHyde/img/paytable/intro2.png",
        "bgPreview3":"jekyllHyde/img/paytable/intro3.png",
        "logo":"jekyllHyde/img/logo.png",
        "icon9_expanded": "jekyllHyde/img/symbol-09-expanded.png",
        "icon11_expanded":"jekyllHyde/img/symbol-09-expanded.png"
    },
    "localizedAssets":{
        "graphAsset": {
        }
    },
    "buttonsSpriteSheet": {
        "container-btn": {
            "sprite": "jekyllHyde/img/game-btn.png",
            "json": "jekyllHyde/img/game-btn.png",
            "w": 210,
            "h": 66
        },
        "yesButton": {
            "sprite": "jekyllHyde/img/yes-btn.png",
            "json": "jekyllHyde/img/yes-btn.png",
            "w": 62,
            "h": 54
        },
        "noButton": {
            "sprite": "jekyllHyde/img/no-btn.png",
            "json": "jekyllHyde/img/no-btn.png",
            "w": 62,
            "h": 54
        },
        "selLeft": {
            "sprite": "jekyllHyde/img/select-left.png",
            "json": "jekyllHyde/img/select-left.png",
            "w": 69,
            "h": 67
        },
        "selRight": {
            "sprite": "jekyllHyde/img/select-right.png",
            "json": "jekyllHyde/img/select-right.png",
            "w": 69,
            "h": 67
        },
        "check": {
            "sprite": "jekyllHyde/img/radio-btns.png",
            "json": "jekyllHyde/img/radio-btns.png",
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
            "json": "jekyllHyde/img/anim/symbol-00.json",
            "sprite": "jekyllHyde/img/anim/symbol-00.png"
        },
        "anim1": {
            "json": "jekyllHyde/img/anim/symbol-01.json",
            "sprite": "jekyllHyde/img/anim/symbol-01.png"
        },
        "anim2": {
            "json": "jekyllHyde/img/anim/symbol-02.json",
            "sprite": "jekyllHyde/img/anim/symbol-02.png"
        },
        "anim3": {
            "json": "jekyllHyde/img/anim/symbol-03.json",
            "sprite": "jekyllHyde/img/anim/symbol-03.png"
        },
        "anim4": {
            "json": "jekyllHyde/img/anim/symbol-04.json",
            "sprite": "jekyllHyde/img/anim/symbol-04.png"
        },
        "anim5": {
            "json": "jekyllHyde/img/anim/symbol-05.json",
            "sprite": "jekyllHyde/img/anim/symbol-05.png"
        },
        "anim6": {
            "json": "jekyllHyde/img/anim/symbol-06.json",
            "sprite": "jekyllHyde/img/anim/symbol-06.png"
        },
        "anim7": {
            "json": "jekyllHyde/img/anim/symbol-07.json",
            "sprite": "jekyllHyde/img/anim/symbol-07.png"
        },
        "anim8": {
            "json": "jekyllHyde/img/anim/symbol-08.json",
            "sprite": "jekyllHyde/img/anim/symbol-08.png"
        },
        "anim10": {
            "json": "jekyllHyde/img/anim/fakeAnim.json",
            "sprite": "jekyllHyde/img/anim/fakeAnim.png"
        },
        "animW10": {
            "json": "jekyllHyde/img/anim/symbol-10.json",
            "sprite": "jekyllHyde/img/anim/symbol-10.png"
        },
        "anim11": {
            "json": "jekyllHyde/img/anim/symbol-11.json",
            "sprite": "jekyllHyde/img/anim/symbol-11.png"
        },
        "bluFlame": {
            "json": "jekyllHyde/img/anim/symbol-12-flames.json",
            "sprite": "jekyllHyde/img/anim/symbol-12-flames.png"
        },
        "anim12": {
            "json": "jekyllHyde/img/anim/symbol-12.json",
            "sprite": "jekyllHyde/img/anim/symbol-12.png"
        },
        "wildReel_0": {
            "json": "jekyllHyde/img/anim/symbol-09-0.json",
            "sprite": "jekyllHyde/img/anim/symbol-09-0.png"
        },
        "wildReel_1": {
            "json": "jekyllHyde/img/anim/symbol-09-1.json",
            "sprite": "jekyllHyde/img/anim/symbol-09-1.png"
        },
        "shiftWildReel_0": {
            "json": "jekyllHyde/img/anim/symbol-11-0.json",
            "sprite": "jekyllHyde/img/anim/symbol-11-0.png"
        },
        "shiftWildReel_1": {
            "json": "jekyllHyde/img/anim/symbol-11-1.json",
            "sprite": "jekyllHyde/img/anim/symbol-11-1.png"
        },
        "stickyWild": {
            "json": "jekyllHyde/img/anim/symbol-10-expanding.json",
            "sprite": "jekyllHyde/img/anim/symbol-10-expanding.png"
        },
        "iconWinBgAnim":{
            "json": "jekyllHyde/img/anim/fakeAnim.json",
            "sprite": "jekyllHyde/img/anim/fakeAnim.png"
        },
        "part-1": {
            "json": "jekyllHyde/img/anim/bronze-coin.json",
            "sprite": "jekyllHyde/img/anim/bronze-coin.png"
        },
        "part-2": {
            "json": "jekyllHyde/img/anim/silver-coin.json",
            "sprite": "jekyllHyde/img/anim/silver-coin.png"
        },
        "part-3": {
            "json": "jekyllHyde/img/anim/gold-coin.json",
            "sprite": "jekyllHyde/img/anim/gold-coin.png"
        },
        "f-part-1": {
            "json": "jekyllHyde/img/anim/bronze-coin-frwrd.json",
            "sprite": "jekyllHyde/img/anim/bronze-coin-frwrd.png"
        },
        "f-part-2": {
            "json": "jekyllHyde/img/anim/silver-coin-frwrd.json",
            "sprite": "jekyllHyde/img/anim/silver-coin-frwrd.png"
        },
        "f-part-3": {
            "json": "jekyllHyde/img/anim/gold-coin-frwrd.json",
            "sprite": "jekyllHyde/img/anim/gold-coin-frwrd.png"
        }
    },
    "importantSounds": {
        "spinClick": {
            "name": "jekyllHyde/sounds/spinClick.mp3",
            "volume": .2
        },
        "reelSound": {
            "name": "jekyllHyde/sounds/reelSound.mp3",
            "volume":1
        },
        "reelSoundFast_0": {
            "name": "jekyllHyde/sounds/reelSoundFast.mp3",
            "volume":.6
        },
        "reelSoundFast1_0": {
            "name": "jekyllHyde/sounds/reelSoundFast5.mp3",
            "volume":.6
        },
        "reelSoundFast_1": {
            "name": "jekyllHyde/sounds/reelSoundFast.mp3",
            "volume":.6
        },
        "reelSoundFast1_1": {
            "name": "jekyllHyde/sounds/reelSoundFast5.mp3",
            "volume":.6
        },
        "reelSoundFast_2": {
            "name": "jekyllHyde/sounds/reelSoundFast.mp3",
            "volume":.6
        },
        "reelSoundFast1_2": {
            "name": "jekyllHyde/sounds/reelSoundFast5.mp3",
            "volume":.6
        },
        "reelSoundFast_3": {
            "name": "jekyllHyde/sounds/reelSoundFast.mp3",
            "volume":.6
        },
        "reelSoundFast1_3": {
            "name": "jekyllHyde/sounds/reelSoundFast5.mp3",
            "volume":.6
        },
        "reelSoundFast_4": {
            "name": "jekyllHyde/sounds/reelSoundFast.mp3",
            "volume":.6
        },
        "reelSoundFast1_4": {
            "name": "jekyllHyde/sounds/reelSoundFast5.mp3",
            "volume":.6
        },
        "reelStop": {
            "name": "jekyllHyde/sounds/reelStop.mp3",
            "volume":.4
        }
    },
 "sounds": {
        "click": {
            "name": "jekyllHyde/sounds/click.mp3",
            "volume": .2
        },
        "smbWin_0": {
            "name": "jekyllHyde/sounds/smbWin_0.mp3",
            "volume": 1.4
        },
        "smbWin_1": {
            "name": "jekyllHyde/sounds/smbWin_0.mp3",
            "volume": 1.4
        },
        "smbWin_2": {
            "name": "jekyllHyde/sounds/smbWin_0.mp3",
            "volume": 1.4
        },
        "smbWin_3": {
            "name": "jekyllHyde/sounds/smbWin_0.mp3",
            "volume": 1.4
        },
        "smbWin_4": {
            "name": "jekyllHyde/sounds/smbWin_4.mp3",
            "volume": 1.5
        },
        "smbWin_5": {
            "name": "jekyllHyde/sounds/smbWin_5.mp3",
            "volume": 1.5
        },
        "smbWin_6": {
            "name": "jekyllHyde/sounds/smbWin_6.mp3",
            "volume": 1.5
        },
        "smbWin_7": {
            "name": "jekyllHyde/sounds/smbWin_7.mp3",
            "volume": 1.5
        },
        "smbWin_8": {
            "name": "jekyllHyde/sounds/smbWin_8.mp3",
            "volume": 1.3
        },
        "stickyWild": {
            "name": "jekyllHyde/sounds/stickywild.mp3",
            "volume": .6
        },
        "wildReel": {
            "name": "jekyllHyde/sounds/wildReel.mp3",
            "volume": .6
        },
        "wildReelFast": {
            "name": "jekyllHyde/sounds/wildReel.mp3",
            "volume": .4
        },
        "fsWildReel": {
            "name": "jekyllHyde/sounds/wildReel.mp3",
            "volume": .6
        },
        "fsWildReelFast": {
            "name": "jekyllHyde/sounds/wildReel.mp3",
            "volume": .4
        },
        "wildReelOut": {
            "name": "jekyllHyde/sounds/fsWildReelRollback.mp3",
            "volume": .4
        },
        "fsWildReelOut": {
            "name": "jekyllHyde/sounds/fsWildReelRollback.mp3",
            "volume": .5
        },
        "fsWin": {
            "name": "jekyllHyde/sounds/fsWin.mp3",
            "volume": 3
        },
        "fsWon": {
            "name": "jekyllHyde/sounds/introFs.mp3",
            "volume": 1
        },
        "incWin": {
            "name": "jekyllHyde/sounds/counter.mp3",
            "volume": .4,
            "loop": true
        },
        "line": {
            "name": "jekyllHyde/sounds/line.mp3",
            "volume": .3
        },
        "winBg_0": {
            "name": "jekyllHyde/sounds/centralWin/win1.mp3",
            "volume": 0
        },
        "winBg_1": {
            "name": "jekyllHyde/sounds/centralWin/win2.mp3",
            "volume": .6
        },
        "winBg_2": {
            "name": "jekyllHyde/sounds/centralWin/win3.mp3",
            "volume": .6
        },
        "winBg_3": {
            "name": "jekyllHyde/sounds/centralWin/win4.mp3",
            "volume": .6
        },
        "winBg_4": {
            "name": "jekyllHyde/sounds/centralWin/win5.mp3",
            "volume": .6
        },
        "winBg_5": {
            "name": "jekyllHyde/sounds/centralWin/win6.mp3",
            "volume": .6
        },
        "winBg_6": {
            "name": "jekyllHyde/sounds/centralWin/bigWin_Full.mp3",
            "volume": .7
        },
        "winBg_7": {
            "name": "jekyllHyde/sounds/centralWin/superbigWin_Full.mp3",
            "volume": .7
        },
        "winBg_8": {
            "name": "jekyllHyde/sounds/centralWin/megabigWin_Full.mp3",
            "volume": .7
        },
        "winBgS_6": {
            "name": "jekyllHyde/sounds/centralWin/bigWin.mp3",
            "volume": .7
        },
        "winBgS_7": {
            "name": "jekyllHyde/sounds/centralWin/superbigWin.mp3",
            "volume": .7
        },
        "winBgS_8": {
            "name": "jekyllHyde/sounds/centralWin/megabigWin.mp3",
            "volume": .7
        },
        "winPanel": {
            "name": "jekyllHyde/sounds/winScreen.mp3",
            "volume": 1
        },
        "coins": {
            "name": "jekyllHyde/sounds/coins.mp3",
            "volume":.3
        }
    },
    "bgSounds": {
        "bgSlot": {
            "name": "jekyllHyde/sounds/bg-short.mp3",
            "volume": .3
        },

        "bgFs": {
            "name": "jekyllHyde/sounds/bgFs-short.mp3",
            "volume":.35
        }
    }

};
var guiConfig = {
    "credits": ["cash","credits"]
};
var displayManager = {
    "render":Phaser.AUTO,
    "groups": {
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
        "frame": {
            "visible":false,
            "graphAsset": {
                "bg4": {
                    "name": "bg_m",
                    "portrait":true,
                    "x": 169,
                    "y": 98
                }
            }
        },
        "frameFS": {
            "visible":false,
            "graphAsset": {
                "bg4": {
                    "name": "bgFS_m",
                    "portrait":true,
                    "x": 169,
                    "y": 98
                }
            }
        },
        "wins": {},
        "bgIconAnim":{},
        "reels": {},
        "bg": {
            "visible":false,
            "graphAsset": {
                "bg": {
                    "name": "bg_r",
                    "portrait":true,
                    "x": 1072,
                    "y": 125
                },
                "bg1": {
                    "name": "bg_l",
                    "portrait":true,
                    "x": 0,
                    "y": 125
                }
            }
        },
        "bgFS": {
            "visible":false,
            "graphAsset": {
                "bg": {
                    "name": "bgFS_r",
                    "portrait":true,
                    "x": 1072,
                    "y": 125
                },
                "bg1": {
                    "name": "bgFS_l",
                    "portrait":true,
                    "x": 0,
                    "y": 125
                }
            }
        },
        "mask":{
            "visible":false,
            "graphAsset": {
                "bg2": {
                    "name": "bg_b",
                    "portrait":true,
                    "x": 0,
                    "y": 612
                },
                "bg3": {
                    "name": "bg_t",
                    "portrait":true,
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
                    "portrait":true,
                    "x": 0,
                    "y": 612
                },
                "bg3": {
                    "name": "bgFS_t",
                    "portrait":true,
                    "x": 0,
                    "y": 0
                }
            }
        },
        "idleObjects":{
            "visible":false,
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
        "fog":{},
        "buttonFg":{},
        "logo": {
            "visible":false,
            "graphAsset": {
                "logo": {
                    "name": "logo",
                    "x": 640,
                    "y": 10,
                    "anchorX":.5
                }
            }
        },
        "scatter": {},
        "wild": {
        },
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
                    "anchorX": 0.5,
                    "x": 640,
                    "y": 12
                }
            },
            "texts": {
                "frLabel": {
                    "x": 345,
                    "y": 20,
                    "fill": "#FFFFFF",
                    "font": "16px Futura ,Arial",
                    "text": "Free Rounds:",

                    "anchorX": 1
                },
                "frValue": {
                    "x": 315,
                    "y": 36,
                    "fill": "#FFFFFF",
                    "font": "27px Futura ,Arial",
                    "text": "5",
                    "anchorX": 0.5
                },
                "frTotWonLabel": {
                    "x": 1000,
                    "y": 20,
                    "fill": "#FFFFFF",
                    "font": "16px Futura ,Arial",
                    "text": "Total won:",
                    "anchorX": 1
                },
                "frTotWonValue": {
                    "x": 970,
                    "y": 36,
                    "fill": "#FFFFFF",
                    "font": "27px Futura ,Arial",
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
                    "anchorX": 0.5,
                    "x": 640,
                    "y": 5
                }
            },
            "texts": {
                "fsLabel": {
                    "x": 385,
                    "y": 18,
                    "fill": "#FFFFFF",
                    "font": "16px Futura ,Arial",
                    "text": "Free Spins",
                    "anchorX": 1
                },
                "fsValue": {
                    "x": 355,
                    "y": 34,
                    "fill": "#FFFFFF",
                    "font": "27px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                },
                "totWonLabel": {
                    "x": 960,
                    "y": 18,
                    "fill": "#FFFFFF",
                    "font": "16px Futura ,Arial",
                    "text": "Total won",
                    "anchorX": 1
                },
                "totWonValue": {
                    "x": 930,
                    "y": 34,
                    "fill": "#FFFFFF",
                    "font": "27px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                }
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
                    "height":1200,
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
                    "height":1200,
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
                    "height":1200,
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
                    "y": 477,
                    "bmpFont": "bmpFont",
                    "size": "20",
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
                "bgmsg": {
                    "name": "bgBlack",
                    "x": -500,
                    "y": -500,
                    "width":2500,
                    "height":3500,
                    "alpha": 1
                },
                "bgPreview1": {
                    "name": "bgPreview1",
                    "x": 60,
                    "y": 25,
                    "texts": {
                        "pw2": {
                            "x": 197,
                            "y": 440,
                            "font": "20px ElementaryGothicBookhandJ-H-Normal,Arial, Helvetica sans-serif",
                            "fill": "#ffd939",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align": "center",
                            "text": "Sticky\nSpreading Wild",
                            "anchorX": 0.5,
                        }
                    }
                },
                "bgPreview2": {
                    "name": "bgPreview2",
                    "x": 450,
                    "y": 25,
                    "texts": {
                        "pw3": {
                            "x": 190,
                            "y": 440,
                            "font": "20px ElementaryGothicBookhandJ-H-Normal,Arial, Helvetica sans-serif",
                            "fill": "#ffd939",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align": "center",
                            "text": "Choose between\n2 types of Wild",
                            "anchorX": 0.5,
                        },
                        "pw31": {
                            "x": 195,
                            "y": 130,
                            "font": "40px ElementaryGothicBookhandJ-H-Normal,Arial, Helvetica sans-serif",
                            "fill": "#ffd939",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align": "center",
                            "text": "Free Spins",
                            "anchorX": 0.5,
                        }
                    }
                },
                "bgPreview3": {
                    "name": "bgPreview3",
                    "x": 840,
                    "y": 25,
                    "texts": {

                        "pw5": {
                            "x": 197,
                            "y": 440,
                            "font": "20px ElementaryGothicBookhandJ-H-Normal,Arial, Helvetica sans-serif",
                            "fill": "#ffd939",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align": "center",
                            "text": "Expanding\nShifting Wild",
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
                    "y": 0,
                    "height":1200,
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
        "_msgBoxFR": {
            "visible":false,
            "eventBlock":true,
            "selectorY":200,
            "selectorX":638,
            "textCol":"#ffffff",
            "graphAsset": {
                "bgmsg": {
                    "name": "bgAlpha",
                    "x": 0,
                    "y": 0,
                    "height":1200,
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
                    "x": 640,
                    "y": 320,
                    "scaleY":3,
                    "anchorX": .5,
                    "anchorY": .5
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
                    "font": "22px FuturaPT-Book",
                    "text": "",
                    "anchorX": .5
                },
                "msgFR5": {
                    "x": 640,
                    "y": 420,
                    "fill": "#ffffff",
                    "font": "12px FuturaPT-Book",
                    "text": "",
                    "anchorX": .5
                }
            },
            "buttons": {
                "yes": {
                    "name": "genericBtn",
                    "x": 500,
                    "y": 580,
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
                    "name": "genericBtn",
                    "x": 775,
                    "y": 580,
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
                    "name": "genericBtn",
                    "x": 640,
                    "anchorX": .5,
                    "y": 580,
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
        },
    }
};

var ReelConfig = {
    "newUI":true,
    "isMobile":true,
    "slotEngine":"JekyllHydeEngine",
    "engineNumbers":0,
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
    "winningcombinations": false,
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
    "animDelayAfterWild":800,
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
            "title": "Jeckyll & Hyde Game Rules",
            "rtp": [
                "95.60",
                "95.60",
                "95.60"
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
                            "bg": "jekyllHyde/img/symbol-00.png", //symbol image
                            "payout_values": true //Whether symbol has payout values

                        },

                        {

                            "id": "symbol_01",
                            "bg": "jekyllHyde/img/symbol-01.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_02",
                            "bg": "jekyllHyde/img/symbol-02.png",
                            "payout_values": true

                        }


                    ],

                    [

                        {

                            "id": "symbol_03",
                            "bg": "jekyllHyde/img/symbol-03.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_04",
                            "bg": "jekyllHyde/img/symbol-04.png",
                            "payout_values": true

                        }

                    ],

                    [
                        {

                            "id": "symbol_05",
                            "bg": "jekyllHyde/img/symbol-05.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_06",
                            "bg": "jekyllHyde/img/symbol-06.png",
                            "payout_values": true

                        }


                    ],

                    [
                        {
                            "id": "symbol_07",
                            "bg": "jekyllHyde/img/symbol-07.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_08",
                            "bg": "jekyllHyde/img/symbol-08.png",
                            "payout_values": true

                        },
                    ],
                    [
                        {
                            "id": "symbol_09",
                            "bg": "jekyllHyde/img/symbol-09.png",
                            "payout_values": false,
                        },
                    ],
                    [
                        {
                            "id": "exp9",
                            "bg": "jekyllHyde/img/paytable/symbol-09-expanded.png",
                            "payout_values": false,
                            "text": [
                                "The wild appears on any top position of the reels and expands to cover the entire reel.",
                                "It completes and substitutes all the icons except for free spin.",
                                "More than 1 wild can appear at the same time."
                            ],
                            "size": { //Optional field that sets image height & width in px

                                "height": "300",
                                "width":  "120"

                            }

                        },



                    ],
                    [

                        {
                            "id": "symbol_12",
                            "bg": "jekyllHyde/img/symbol-12.png",
                            "payout_values": false

                        }
                    ],
                    [
                        {
                            "id": "symbol_12e",
                            "bg": "jekyllHyde/img/paytable/symbol-12-screenshot.png",
                            "payout_values": false,
                            "size": { //Optional field that sets image height & width in px

                                "height": "224",
                                "width":  "400"

                            },
                            "text": [
                                "Free spin symbols can appear on any position on the reels.",
                                " ",
                                "Number of awarded free spins:",
                                "3 symbols award 20 free spins",
                                "4 symbols award 30 free spins",
                                "5 symbols award 50 free spins",
                            ]

                        }

                    ],

                    [
                        {
                            "id": "ch0",
                            "bg": "jekyllHyde/img/symbol-10.png",
                            "payout_values": false,
                            "text": [
                                "Police badge sticky wild."
                            ]

                        },
                    ],[
                        {
                            "id": "ch0",
                            "bg": "jekyllHyde/img/symbol-11.png",
                            "payout_values": false,
                            "text": [
                                "Dr Jekyll shifting wild reel."
                            ]

                        },
                    ],[
                        {
                            "id": "ch0",
                            "bg": "jekyllHyde/img/paytable/freespin-screenshot.png",
                            "payout_values": false,
                            "size": { //Optional field that sets image height & width in px

                                "height": "224",
                                "width":  "400"

                            },
                        },

                    ],
                    [
                        {
                            "id": "txt",
                            "payout_values": false,
                            "text": [
                                "Depending on the initial Free spin game selection, (Police badge or Hyde potion) two different Wild symbols might be displayed during the free spin game."
                            ]

                        },

                    ],
                    [


                        {
                            "id": "symbol_10",
                            "bg": "jekyllHyde/img/symbol-10.png",
                            "payout_values": false,

                        },
                    ],[
                        {
                            "id": "ch0",
                            "bg": "jekyllHyde/img/paytable/symbol-10-screenshot.png",
                            "payout_values": false,
                            "size": { //Optional field that sets image height & width in px
                                "height": "224",
                                "width":  "400"

                            }
                        }
                    ],
                    [
                        {
                            "id": "txt",
                            "payout_values": false,
                            "text": [
                                "The Police badge symbol activates the sticky wild spreading animation.",
                                "Each spin, the number of sticky wilds will double, up to four.",
                                "Spreading animation starts vertically and moves horizontally towards the center."
                            ]

                        },

                    ],
                    [


                        {
                            "id": "symbol_11",
                            "bg": "jekyllHyde/img/symbol-11.png",
                            "payout_values": false,

                        },
                    ],[
                        {
                            "id": "ch0",
                            "bg": "jekyllHyde/img/paytable/symbol-11-screenshot.png",
                            "payout_values": false,
                            "size": { //Optional field that sets image height & width in px
                                "height": "224",
                                "width":  "400"

                            }
                        }
                    ],
                    [
                        {
                            "id": "txt",
                            "payout_values": false,
                            "text": [
                                "The Dr. Hyde potion wild icon appears on the top of reels 2,3,4 and expands covering the entire reel.",
                                "Each spin, the wild reel will shift leftwards until it reaches the first reel.",
                                "More than one wild reel can be displayed on the reels at the same time."
                            ]

                        },

                    ],


                ]

            }

        },

        //Win Lines objects
        {

            "lines": [1, 30],
            "text_colour": "#93d8fe",      //optional
            "checked_colour": "#FFFFFF",   //optional
            "unchecked_colour": "#08b936", //optional
            "winLinesPerRow": 5            //optional

        }

    ]

}
