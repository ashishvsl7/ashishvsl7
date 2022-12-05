
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
        "sprite": "fonts/fontSiXiang.png",
        "font": "fonts/fontSiXiang.xml"
    }
};

var extScripts={
    "webfont": "15px FuturaPT-Heavy",
    "webfont1": "15px FuturaPT-Book"
};
var gameAssets = {
    "assets": {
        "icon0": "siXiang/img/symbol-00.png",
        "icon1": "siXiang/img/symbol-01.png",
        "icon2": "siXiang/img/symbol-02.png",
        "icon3": "siXiang/img/symbol-03.png",
        "icon4": "siXiang/img/symbol-05.png",
        "icon5": "siXiang/img/symbol-06.png",
        "icon6": "siXiang/img/symbol-07.png",
        "icon7": "siXiang/img/symbol-08.png",
        "icon7Portal": "siXiang/img/symbol-08.png",
        "icon8": "siXiang/img/symbol-09Wild.png",
        "icon9": "siXiang/img/symbol-09Wild.png",
        "icon14": "siXiang/img/symbol-09Wild.png",

        "bicon0": "siXiang/img/b-symbol-00.png",
        "bicon1": "siXiang/img/b-symbol-01.png",
        "bicon2": "siXiang/img/b-symbol-02.png",
        "bicon3": "siXiang/img/b-symbol-03.png",
        "bicon4": "siXiang/img/b-symbol-05.png",
        "bicon5": "siXiang/img/b-symbol-06.png",
        "bicon6": "siXiang/img/b-symbol-07.png",
        "bicon7": "siXiang/img/b-symbol-08.png",

        "line_0_00": "siXiang/img/lines/line_0_01.png",
        "line_0_01": "siXiang/img/lines/line_0_01.png",
        "line_0_02": "siXiang/img/lines/line_0_02.png",
        "line_0_03": "siXiang/img/lines/line_0_03.png",
        "line_0_04": "siXiang/img/lines/line_0_04.png",
        "line_0_05": "siXiang/img/lines/line_0_05.png",
        "line_0_06": "siXiang/img/lines/line_0_06.png",
        "line_0_07": "siXiang/img/lines/line_0_07.png",
        "line_0_08": "siXiang/img/lines/line_0_08.png",
        "line_0_09": "siXiang/img/lines/line_0_09.png",
        "line_0_10": "siXiang/img/lines/line_0_10.png",
        "line_0_11": "siXiang/img/lines/line_0_11.png",
        "line_0_12": "siXiang/img/lines/line_0_12.png",
        "line_0_13": "siXiang/img/lines/line_0_13.png",
        "line_0_14": "siXiang/img/lines/line_0_14.png",
        "line_0_15": "siXiang/img/lines/line_0_15.png",
        "line_0_16": "siXiang/img/lines/line_0_16.png",
        "line_0_17": "siXiang/img/lines/line_0_17.png",
        "line_0_18": "siXiang/img/lines/line_0_18.png",
        "line_0_19": "siXiang/img/lines/line_0_19.png",

        "bottomBar": "gui/message-bar.png",
        "bgPanel": "siXiang/img/bgPanel.png",
        "bgPanelGame": "siXiang/img/bgPanel.png",
        "bgPreview":"siXiang/img/info-screen.png",
        "freeRoundsPanel":"siXiang/img/free-rounds.png",
        "bgAlpha": "siXiang/img/alpha.png",
        "bigWin":"siXiang/img/big-win.png",
        "superWin":"siXiang/img/super-bigwin.png",
        "megaWin":"siXiang/img/mega-bigwin.png",
        "bg_r": "siXiang/img/bg/base-right.jpg",
        "bg_l": "siXiang/img/bg/base-left.jpg",
        "bg_b": "siXiang/img/bg/base-bottom.jpg",
        "bg_t": "siXiang/img/bg/base-top.jpg",
        "bg_m": "siXiang/img/bg/base-main.jpg",
        "bgFS_r": "siXiang/img/bg/base-right_FS.jpg",
        "bgFS_l": "siXiang/img/bg/base-left_FS.jpg",
        "bgFS_b": "siXiang/img/bg/base-bottom_FS.jpg",
        "bgFS_t": "siXiang/img/bg/base-top_FS.jpg",
        "bgFS_m": "siXiang/img/bg/base-main_FS.jpg",
        "base-reel-mask":"siXiang/img/bg/base-main-mask-btm.png",
        "top-reel-mask":"siXiang/img/bg/base-main-mask-top.png",
        "buttonBg":"gui/generic/img/desktop/png/cp-info-bar.png",
        "volOnButton": "gui/btnVolOn.png",
        "volOffButton": "gui/btnVolOff.png",
        "freeSpinPanel":"siXiang/img/free-spins.png",
        "bgPt" : "siXiang/img/paytable/pt-base-complete.png",
        "btnTranspRight": "siXiang/img/transparent.png",
        "btnTranspLeft": "siXiang/img/transparent.png",
        "slide_0": "siXiang/img/paytable/screenShot0.png",
        "slide_1": "siXiang/img/paytable/screenShot1.png",
        "slide_2": "siXiang/img/paytable/screenShot2.png",
        "slide_3": "siXiang/img/paytable/screenShot3.png",
        "slide_4": "siXiang/img/paytable/screenShot4.png",
        "slide_5": "siXiang/img/paytable/screenShot5.png",
        "multiplier":"siXiang/img/multiplyer.png",
        "icon_wild_1": "siXiang/img/paytable/symbol-wild-01.png",
        "icon_wild_2": "siXiang/img/paytable/symbol-wild-02.png",
        "icon_wild_3": "siXiang/img/paytable/symbol-wild-03.png",
        "icon_wild_4": "siXiang/img/paytable/symbol-wild-04.png"
    },
    "localizedAssets":{
        "graphAsset": {
            "logo": {
                "lang": ["zs","ko","jp"],
                "img": "siXiang/img/logo"
            }
        }
    },
    "buttonsSpriteSheet": {
        "container-btn": {
            "sprite": "siXiang/img/game-btn.png",
            "json": "siXiang/img/game-btn.png",
            "w": 210,
            "h": 66
        },
        "yesButton": {
            "sprite": "siXiang/img/yes-btn.png",
            "json": "siXiang/img/yes-btn.png",
            "w": 56,
            "h": 54
        },
        "noButton": {
            "sprite": "siXiang/img/no-btn.png",
            "json": "siXiang/img/no-btn.png",
            "w": 56,
            "h": 54
        },
        "check": {
            "sprite": "siXiang/img/radio-btns.png",
            "json": "siXiang/img/radio-btns.png",
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
            "json": "siXiang/img/anim/smb/symbol-00.json",
            "sprite": "siXiang/img/anim/smb/symbol-00.png"
        },
        "anim1": {
            "json": "siXiang/img/anim/smb/symbol-01.json",
            "sprite": "siXiang/img/anim/smb/symbol-01.png"
        },
        "anim2": {
            "json": "siXiang/img/anim/smb/symbol-02.json",
            "sprite": "siXiang/img/anim/smb/symbol-02.png"
        },
        "anim3": {
            "json": "siXiang/img/anim/smb/symbol-03.json",
            "sprite": "siXiang/img/anim/smb/symbol-03.png"
        },
        "anim4": {
            "json": "siXiang/img/anim/smb/symbol-05.json",
            "sprite": "siXiang/img/anim/smb/symbol-05.png"
        },
        "anim5": {
            "json": "siXiang/img/anim/smb/symbol-06.json",
            "sprite": "siXiang/img/anim/smb/symbol-06.png"
        },
        "anim6": {
            "json": "siXiang/img/anim/smb/symbol-07.json",
            "sprite": "siXiang/img/anim/smb/symbol-07.png"
        },
        "anim7": {
            "json": "siXiang/img/anim/smb/symbol-08.json",
            "sprite": "siXiang/img/anim/smb/symbol-08.png"
        },
        "anim7Portal": {
            "json": "siXiang/img/anim/smb/symbol-08Portal.json",
            "sprite": "siXiang/img/anim/smb/symbol-08Portal.png"
        },
        "yinYang": {
            "json": "siXiang/img/anim/smb/symbol-09.json",
            "sprite": "siXiang/img/anim/smb/symbol-09.png"
        },
        "yinYangPortal": {
            "json": "siXiang/img/anim/smb/symbol-09Portal.json",
            "sprite": "siXiang/img/anim/smb/symbol-09Portal.png"
        },
        "anim14": {
            "json": "siXiang/img/anim/smb/symbol-09Portal.json",
            "sprite": "siXiang/img/anim/smb/symbol-09Portal.png"
        },
        "anim8": {
            "json": "siXiang/img/anim/smb/symbol-09Portal.json",
            "sprite": "siXiang/img/anim/smb/symbol-09Portal.png"
        },
        "animW4_1": {
            "json": "siXiang/img/anim/smb/symbol-wild-01-a.json",
            "sprite": "siXiang/img/anim/smb/symbol-wild-01-a.png"
        },
        "animW4_2": {
            "json": "siXiang/img/anim/smb/symbol-wild-01-b.json",
            "sprite": "siXiang/img/anim/smb/symbol-wild-01-b.png"
        },
        "animW4_3": {
            "json": "siXiang/img/anim/smb/symbol-wild-01-c.json",
            "sprite": "siXiang/img/anim/smb/symbol-wild-01-c.png"
        },
        "animW4_4": {
            "json": "siXiang/img/anim/smb/symbol-wild-01-d.json",
            "sprite": "siXiang/img/anim/smb/symbol-wild-01-d.png"
        },
        "animW4_5": {
            "json": "siXiang/img/anim/smb/symbol-wild-01-e.json",
            "sprite": "siXiang/img/anim/smb/symbol-wild-01-e.png"
        },
        "animW1_1": {
            "json": "siXiang/img/anim/smb/symbol-wild-02-a.json",
            "sprite": "siXiang/img/anim/smb/symbol-wild-02-a.png"
        },
        "animW1_2": {
            "json": "siXiang/img/anim/smb/symbol-wild-02-b.json",
            "sprite": "siXiang/img/anim/smb/symbol-wild-02-b.png"
        },
        "animW1_3": {
            "json": "siXiang/img/anim/smb/symbol-wild-02-c.json",
            "sprite": "siXiang/img/anim/smb/symbol-wild-02-c.png"
        },
        "animW2_1": {
            "json": "siXiang/img/anim/smb/symbol-wild-03-a.json",
            "sprite": "siXiang/img/anim/smb/symbol-wild-03-a.png"
        },
        "animW2_2": {
            "json": "siXiang/img/anim/smb/symbol-wild-03-b.json",
            "sprite": "siXiang/img/anim/smb/symbol-wild-03-b.png"
        },
        "animW2_3": {
            "json": "siXiang/img/anim/smb/symbol-wild-03-c.json",
            "sprite": "siXiang/img/anim/smb/symbol-wild-03-c.png"
        },
        "animW3_1": {
            "json": "siXiang/img/anim/smb/symbol-wild-04-a.json",
            "sprite": "siXiang/img/anim/smb/symbol-wild-04-a.png"
        },
        "animW3_2": {
            "json": "siXiang/img/anim/smb/symbol-wild-04-b.json",
            "sprite": "siXiang/img/anim/smb/symbol-wild-04-b.png"
        },
        "part-1": {
            "json": "siXiang/img/anim/coins/bronze-coin.json",
            "sprite": "siXiang/img/anim/coins/bronze-coin.png"
        },
        "part-2": {
            "json": "siXiang/img/anim/coins/silver-coin.json",
            "sprite": "siXiang/img/anim/coins/silver-coin.png"
        },
        "part-3": {
            "json": "siXiang/img/anim/coins/gold-coin.json",
            "sprite": "siXiang/img/anim/coins/gold-coin.png"
        },
        "f-part-1": {
            "json": "siXiang/img/anim/coins/bronze-coin-frwrd.json",
            "sprite": "siXiang/img/anim/coins/bronze-coin-frwrd.png"
        },
        "f-part-2": {
            "json": "siXiang/img/anim/coins/silver-coin-frwrd.json",
            "sprite": "siXiang/img/anim/coins/silver-coin-frwrd.png"
        },
        "f-part-3": {
            "json": "siXiang/img/anim/coins/gold-coin-frwrd.json",
            "sprite": "siXiang/img/anim/coins/gold-coin-frwrd.png"
        }
    },
    "importantSounds": {
        "spinClick": {
            "name": "siXiang/sounds/spinClick.mp3",
            "volume": .5
        },
        "reelSound": {
            "name": "siXiang/sounds/reelSound.mp3",
            "volume":1.8
        },
        "reelStop": {
            "name": "siXiang/sounds/reelStop.mp3",
            "volume":.7
        }
    },
    "sounds": {
        "click": {
            "name": "siXiang/sounds/click.mp3",
            "volume": .5
        },
        "smbWin_0": {
            "name": "siXiang/sounds/smbWin_0.mp3",
            "volume": 1.15
        },
        "smbWin_1": {
            "name": "siXiang/sounds/smbWin_0.mp3",
            "volume": 1.15
        },
        "smbWin_2": {
            "name": "siXiang/sounds/smbWin_0.mp3",
            "volume": 1.15
        },
        "smbWin_3": {
            "name": "siXiang/sounds/smbWin_0.mp3",
            "volume": 1.15
        },
        "smbWin_4": {
            "name": "siXiang/sounds/smbWin_4.mp3",
            "volume": 1.15
        },
        "smbWin_5": {
            "name": "siXiang/sounds/smbWin_5.mp3",
            "volume": 1.15
        },
        "smbWin_6": {
            "name": "siXiang/sounds/smbWin_6.mp3",
            "volume": 1.15
        },
        "smbWin_7": {
            "name": "siXiang/sounds/smbWin_7.mp3",
            "volume": 1.1
        },
        "fsWon": {
            "name": "siXiang/sounds/introFS.mp3",
            "volume": .8
        },
        "incWin": {
            "name": "siXiang/sounds/counter.mp3",
            "volume": .35,
            "loop": true
        },
        "line": {
            "name": "siXiang/sounds/line.mp3",
            "volume": .2
        },
        "winBg_0": {
            "name": "siXiang/sounds/centralWin/win1.mp3",
            "volume": 1
        },
        "winBg_1": {
            "name": "siXiang/sounds/centralWin/win2.mp3",
            "volume": 1
        },
        "winBg_2": {
            "name": "siXiang/sounds/centralWin/win3.mp3",
            "volume": 1
        },
        "winBg_3": {
            "name": "siXiang/sounds/centralWin/win4.mp3",
            "volume": 1
        },
        "winBg_4": {
            "name": "siXiang/sounds/centralWin/win5.mp3",
            "volume": 1.1
        },
        "winBg_5": {
            "name": "siXiang/sounds/centralWin/win6.mp3",
            "volume": 1.11
        },
        "winBg_6": {
            "name": "siXiang/sounds/centralWin/bigWin_Full.mp3",
            "volume": 1.1
        },
        "winBg_7": {
            "name": "siXiang/sounds/centralWin/superBigWin_Full.mp3",
            "volume": 1.1
        },
        "winBg_8": {
            "name": "siXiang/sounds/centralWin/megaBigWin_Full.mp3",
            "volume": 1.1
        },
        "winBgS_6": {
            "name": "siXiang/sounds/centralWin/bigWin.mp3",
            "volume": 1.1
        },
        "winBgS_7": {
            "name": "siXiang/sounds/centralWin/superBigWin.mp3",
            "volume": 1.1
        },
        "winBgS_8": {
            "name": "siXiang/sounds/centralWin/megaBigWin.mp3",
            "volume":1.1
        },
        "winPanel": {
            "name": "siXiang/sounds/winScreen.mp3",
            "volume": 1
        },
        "coins": {
            "name": "siXiang/sounds/coins.mp3",
            "volume":.35
        },
        "wild_start": {
            "name": "siXiang/sounds/wild_start.mp3",
            "volume":1
        },
        "wild_end": {
            "name": "siXiang/sounds/wild_end.mp3",
            "volume":1.1
        },
        "wild_1": {
            "name": "siXiang/sounds/wild_1.mp3",
            "volume":1
        },
        "wild_2": {
            "name": "siXiang/sounds/wild_2.mp3",
            "volume":1
        },
        "wild_3": {
            "name": "siXiang/sounds/wild_3.mp3",
            "volume":.8
        },
        "wild_4": {
            "name": "siXiang/sounds/wild_4.mp3",
            "volume":1
        },
        "portalLoop": {
            "name": "siXiang/sounds/portalLoop.wav",
            "loop":true,
            "volume":1.6
        },
        "yyLeft": {
            "name": "siXiang/sounds/yySpinSlow.mp3",
            "volume":2
        },
        "yyReels": {
            "name": "siXiang/sounds/yySpinFast.mp3",
            "volume":1
        },
        "yyLanding": {
            "name": "siXiang/sounds/yyLanding.mp3",
            "volume":1.3
        },
        "yyMultiply": {
            "name": "siXiang/sounds/yyMultiply.mp3",
            "volume":1.3
        }

    },
    "bgSounds": {
        "bgSlot": {
            "name": "siXiang/sounds/bg.mp3",
            "volume": .5
        },

        "bgFs": {
            "name": "siXiang/sounds/bgFs.mp3",
            "volume":.5
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
                    "x": 310,
                    "y": 104
                }
            }
        },
        "frameFS": {
            "visible":false,
            "graphAsset": {
                "bg4": {
                    "name": "bgFS_m",
                    "x": 310,
                    "y": 104
                }
            }
        },
        "bgIconAnim":{},
        "reels": {},
        "wins": {},
        "lines": {},
        "wild": {},
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
                },
                "bg4": {
                    "name": "top-reel-mask",
                    "x": 310,
                    "y": 104
                },
                "bg5": {
                    "name": "base-reel-mask",
                    "x": 310,
                    "y": 764
                }
            }
        },

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
        "portal": {
            "visible":false,
            "graphAsset": {
                "portal":{
                    "name":"yinYang",
                    "x":214,
                    "y":394,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "portalReel":{
                    "visible":false,
                    "name":"yinYangPortal",
                    "x":214,
                    "y":394,
                    "anchorX":.5,
                    "anchorY":.5
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
                },
                "bg4": {
                    "name": "top-reel-mask",
                    "x": 310,
                    "y": 104
                },
                "bg5": {
                    "name": "base-reel-mask",
                    "x": 310,
                    "y": 764
                }
            }
        },
        "bgFS": {
            "visible":false,
            "graphAsset": {
                "bg": {
                    "name": "bgFS_r",
                    "x": 970,
                    "y": 104
                },
                "bg1": {
                    "name": "bgFS_l",
                    "x": 0,
                    "y": 104
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
                    "y": 676,
                    "font": "25px Helvetica, Arial, sans-serif",
                    "fill": "#FFFFFF",
                    "backgroundColor": "rgba(0,0,0,0.50)",
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
                    "y": 20,
                    "anchorX":.5
                }
            }
        },
        "scatter": {},
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
                    "anchorX": 0.5,
                    "y": 0
                }
            },
            "texts": {
                "frLabel": {
                    "x": 165,
                    "y": 45,
                    "fill": "#ffffff",
                    "stroke":"#246e25",
                    "stroke_tick":5,
                    "font": "13px Futura ,Arial",
                    "text": "Free Rounds:",

                    "anchorX": 1
                },
                "frValue": {
                    "x": 132,
                    "y": 17,
                    "fill": "#ffff68",
                    "font": "23px Futura ,Arial",
                    "text": "5",
                    "anchorX": 0.5
                },
                "frTotWonLabel": {
                    "x": 1165,
                    "y": 45,
                    "fill": "#ffffff",
                    "stroke":"#246e25",
                    "stroke_tick":5,
                    "font": "13px Futura ,Arial",
                    "text": "Total won:",
                    "anchorX": 1
                },
                "frTotWonValue": {
                    "x": 1130,
                    "y": 17,
                    "fill": "#ffff68",
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
                    "anchorX":.5,
                    "y": 0
                }
            },
            "texts": {
                "fsLabel": {
                    "x": 168,
                    "y": 45,
                    "fill": "#c40003",
                    "font": "13px Futura ,Arial",
                    "text": "Free Spins",
                    "anchorX": 1
                },
                "fsValue": {
                    "x": 145,
                    "y": 17,
                    "fill": "#ffff68",
                    "font": "23px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                },
                "totWonLabel": {
                    "x": 1165,
                    "y": 45,
                    "fill": "#c40003",
                    "font": "13px Futura ,Arial",
                    "text": "Total won",
                    "anchorX": 1
                },
                "totWonValue": {
                    "x": 1135,
                    "y": 17,
                    "fill": "#ffff68",
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
            "duration": 5,
            "graphAsset": {
                "bgmsg": {
                    "name": "bgAlpha",
                    "x": 0,
                    "y": 0,
                    "alpha": .5
                },
                "bgFsWon": {
                    "name": "bgPanel",
                    "x": 652,
                    "y": 360,
                    "scaleX":1.25,
                    "anchorX": .5,
                    "anchorY": .5
                }
            },
            "texts": {
                "fsWLabel": {
                    "x": 640,
                    "y": 315,
                    "fill": "#ffffff",
                    "font": "28px FuturaPT-Heavy",
                    "text": "You won",
                    "anchorX": .5
                },
                "fsValue1": {
                    "x": 640,
                    "y": -370,
                    "fill": "#ffffff",
                    "font": "28px FuturaPT-Heavy",
                    "text": "5",
                    "anchorX": .5
                },
                "fsWLabel1": {
                    "x": 640,
                    "y": 420,
                    "fill": "#ffffff",
                    "font": "28px FuturaPT-Heavy",
                    "text": "Free spins!",
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
                    "y": 370,
                    "anchorX": .5,
                    "anchorY": .5,
                    "scaleX":1.2,
                    "scaleY":1.2
                }
            },
            "texts": {
                "frWLabelTitol": {
                    "x": 640,
                    "y": 270,
                    "fill": "#ffffff",
                    "font": "14px FuturaPT-Book",
                    "text":"",
                    "anchorX": .5
                },
                "frWLabel": {
                    "x": 640,
                    "y": 320,
                    "fill": "#ffffff",
                    "font": "18px FuturaPT-Book",
                    "text":"",
                    "align":"center",
                    "anchorX": .5
                },
                "frValue1": {
                    "x": 640,
                    "y": 360,
                    "fill": "#ffffff",
                    "font": "24px FuturaPT-Book",
                    "text": "5",
                    "anchorX": .5
                },
                "frWLabel1": {
                    "x": 640,
                    "y": 390,
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
                    "x": 646,
                    "y": 420,
                    "bmpFont": "bmpFont",
                    "size": "70",
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
                "y": 100,
                "buttonBaseX":-65,
                "buttonBaseY":465,
                "time":4000,
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
                                "y": 90
                            }
                        },
                        "texts": {
                            "txtPrev0": {
                                "x": 0,
                                "y": 0,
                                "fill": "#ffba09",
                                "font": "24px Futura PT, Arial",
                                "text": "Yin/Yang wilds and completes all the symbol and multiply x3 winning combinations.",
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
                                "y": 90
                            }
                        },
                        "texts": {
                            "txtPrev0": {
                                "x": 0,
                                "y": 0,
                                "fill": "#ffba09",
                                "font": "24px Futura PT, Arial",
                                "text": "Up to 100 Free Spins when Yin/Yang symbol lands on the Portal.",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev1": {
                                "x": 0,
                                "y": 30,
                                "fill": "#ffba09",
                                "font": "20px Futura PT, Arial",
                                "text": "During Free Spins, a mity wild beast will be unleashed by the portal.",
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
                                "name": "slide_5",
                                "anchorX": .5,
                                "x": 0,
                                "y": 90
                            }
                        },
                        "texts": {
                            "txtPrev0": {
                                "x": 0,
                                "y": 0,
                                "fill": "#ffba09",
                                "font": "24px Futura PT, Arial",
                                "text": "Phoenix",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev1": {
                                "x": 0,
                                "y": 30,
                                "fill": "#ffba09",
                                "font": "20px Futura PT, Arial",
                                "text": "Moves in All Directions.",
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
                                "name": "slide_4",
                                "anchorX": .5,
                                "x": 0,
                                "y": 90
                            }
                        },
                        "texts": {
                            "txtPrev0": {
                                "x": 0,
                                "y": 0,
                                "fill": "#ffba09",
                                "font": "24px Futura PT, Arial",
                                "text": "Tortoise",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev1": {
                                "x": 0,
                                "y": 30,
                                "fill": "#ffba09",
                                "font": "20px Futura PT, Arial",
                                "text": "Moves in All Directions.",
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
                                "name": "slide_3",
                                "anchorX": .5,
                                "x": 0,
                                "y": 90
                            }
                        },
                        "texts": {
                            "txtPrev0": {
                                "x": 0,
                                "y": 0,
                                "fill": "#ffba09",
                                "font": "24px Futura PT, Arial",
                                "text": "Tiger",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev1": {
                                "x": 0,
                                "y": 30,
                                "fill": "#ffba09",
                                "font": "20px Futura PT, Arial",
                                "text": "Moves Vertically.",
                                "anchorX": .5,
                                "align": "center"
                            }
                        }
                    },
                    "5": {
                        "x": 0,
                        "y": 0,
                        "visible": false,
                        "graphAsset": {
                            "bgPreview": {
                                "name": "slide_2",
                                "anchorX": .5,
                                "x": 0,
                                "y": 90
                            }
                        },
                        "texts": {
                            "txtPrev0": {
                                "x": 0,
                                "y": 0,
                                "fill": "#ffba09",
                                "font": "24px Futura PT, Arial",
                                "text": "Dragon",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev1": {
                                "x": 0,
                                "y": 30,
                                "fill": "#ffba09",
                                "font": "20px Futura PT, Arial",
                                "text": "Moves Horizzontally.",
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
                    "y": 320,
                    "fill": "#ffffff",
                    "font": "22px FuturaPT-Book",
                    "text": ".wqdwe",
                    "anchorX": .5
                },
                "msg2": {
                    "x": 640,
                    "y": 370,
                    "fill": "#ffffff",
                    "font": "20px FuturaPT-Book",
                    "text": ".ewfwefewf",
                    "anchorX": .5
                }
            },
            "buttons": {
                "yes": {
                    "name": "yesButton",
                    "x": 500,
                    "y": 575,
                    "evt": "doOk"
                },
                "myAccount": {
                    "name": "container-btn",
                    "x": 650,
                    "y": 575,
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
                    "y": 575,
                    "evt": "doKo"
                },
                "ok": {
                    "name": "container-btn",
                    "x": 640,
                    "anchorX": .5,
                    "y": 575,
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
            "selectorY":240,
            "selectorX":630,
            "textCol":"#ffffff",
            "graphAsset": {
                "bgmsg": {
                    "name": "bgAlpha",
                    "x": 0,
                    "y": 0
                },
                "generic": {
                    "name": "bgPanel",
                    "x": 654,
                    "y": 310,
                    "anchorX": .5,
                    "anchorY": .5,
                    "scaleX":1.6,
                    "scaleY":1.3
                }
            },
            "texts": {
                "msgFR1": {
                    "x": 640,
                    "y": 260,
                    "fill": "#ffffff",
                    "font": "22px FuturaPT-Book",
                    "text": ".wqdwe",
                    "anchorX": .5
                },
                "msgFR2": {
                    "x": 640,
                    "y": 290,
                    "fill": "#ffffff",
                    "font": "20px FuturaPT-Book",
                    "text": ".ewfwefewf",
                    "anchorX": .5
                }
            },
            "buttons": {
                "yes": {
                    "name": "genericBtn",
                    "x": 500,
                    "y": 570,
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
                    "y": 570,
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
                    "y": 570,
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
    "slotEngine":"XiangEngine",
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
    "lineType": "AllLineWinningsFirst4Smb",
    "lineFrames":31,
    "lineFrames":19,
    "comment_lineWinAmtType":"lines/coinWinning class",
    "lineWinAmtType":"NormalLineWinAmount",
    "numReels": 5,
    "numIcons": 4,
    "numIconsOnTop": 1,
    "numIconsOnBottom":1,
    "icons": [25, 25, 25, 25, 25 ],
    "_spinResult":[[0,1,2,3,4],[5,6,7,8,9],[6,1,2,3,4],[9,1,2,3,4],[2,1,2,3,4]],
    "_spinResult":[[0,0,2,3],[11,5,7,8],[5,6,2,3],[2,9,2,3],[0,2,2,3]],
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
            "reelInterval":100,
            "reelSecondMovementTime":0.4,
            "reelLoopInterval":.18,
            "reelPreMovement": 20,
            "reelPreMovementTime": 0.1,
            "reelBaseInterval": 1,
            "reelStopInterval": 1,
            "reelSpinBounceMeasure": 36,
            "reelSpinBounceTime": .27,
            "reelSpinBounceForce": 1.2
        }
    },
    "numIcon": 7,
    "loadTout": 30,
    "credits": "5000",
    "bet": "0.50",
    "animDelayAfterWild":1200,
    "freeRounds":"normal",
    "freeSpins":"FreeSpins",
    "maxFsNum":100,
    "_fsIcon": 1,
    "winHLScale":1.35,
    "fsSpinDelay":750,
    "minFsSmbs":3,
    "_scatterIcon": 10,
    "_scatterType": "SubstScatter",
    "_twinReelsFeature":"normal",
    "wildNum": [],
    "wildReelOrigin":3,
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
    },
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
        "noCoinOnEachLine":50,
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

    "bg" : "siXiang/img/paytable/pt-base-main.png",

    "closeBtn": {

        "ypos": "136",
        "xpos": "905"

    },

    "pagination" : {

        "ypos" : "578",
        "xpos" : "442",
        "checked" : "#fff",
        "unchecked" : "#000000"

    },

    "helpPath" : gameParams.pathCDN + 'ironDog/help/desktop/siXiang/help_' + gameParams.lang+".json",

    "translatePosition": true,

    "buttons" : [

        {
            "id" : "left",
            "ypos" : "422",
            "xpos" : "19",
            "bg_up" : "siXiang/img/paytable/forward-btn-up.png",
            "bg_over" : "siXiang/img/paytable/forward-btn-over.png",
            "bg_down" : "siXiang/img/paytable/forward-btn-down.png",
            "direction" : -1
        },

        {
            "id" : "right",
            "ypos" : "422",
            "xpos" : "843",
            "bg_up" : "siXiang/img/paytable/forward-btn-up.png",
            "bg_over" : "siXiang/img/paytable/forward-btn-over.png",
            "bg_down" : "siXiang/img/paytable/forward-btn-down.png",
            "direction" : 1
        }

    ],

    "pages" : [

        {

            "gameguide" : true,
            "title" : "Sì Xiàng Game Rules",
            "title_xpos" : "550",
            "title_ypos" : "130",
            "xpos" : "188",
            "ypos" : "185",
            "height" : "380",
            "width" : "926",
            "fill": "#000",
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
                    "bg" : "siXiang/img/symbol-00.png",
                    "xpos": "436",
                    "ypos": "200",
                    "height": "150px",
                    "width": "150px",
                    "text": {
                        "value": 0,
                        "xpos": "50",
                        "ypos": "185",
                        "width": "100",
                        "left_fill": "#117906",
                        "right_fill": "#0e2c00",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_01",
                    "bg" : "siXiang/img/symbol-01.png",
                    "xpos": "698",
                    "ypos": "200",
                    "height": "150px",
                    "width": "150px",
                    "text": {
                        "value": 1,
                        "xpos": "50",
                        "ypos": "185",
                        "width": "100",
                        "left_fill": "#117906",
                        "right_fill": "#0e2c00",
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
                    "ypos" : "500",
                    "width" : "500",
                    "fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "14px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols" : [

                {
                    "id" : "symbol_02",
                    "bg" : "siXiang/img/symbol-02.png",
                    "xpos": "436",
                    "ypos": "200",
                    "height": "150px",
                    "width": "150px",
                    "text": {
                        "value": 2,
                        "xpos": "50",
                        "ypos": "185",
                        "width": "100",
                        "left_fill": "#117906",
                        "right_fill": "#0e2c00",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_03",
                    "bg" : "siXiang/img/symbol-03.png",
                    "xpos": "698",
                    "ypos": "200",
                    "height": "150px",
                    "width": "150px",
                    "text": {
                        "value": 3,
                        "xpos": "50",
                        "ypos": "185",
                        "width": "100",
                        "left_fill": "#117906",
                        "right_fill": "#0e2c00",
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
                    "ypos" : "500",
                    "width" : "500",
                    "fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "14px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols" : [

                {
                    "id" : "symbol_05",
                    "bg" : "siXiang/img/symbol-05.png",
                    "xpos": "371",
                    "ypos": "200",
                    "height": "150px",
                    "width": "150px",
                    "text": {
                        "value": 4,
                        "xpos": "50",
                        "ypos": "185",
                        "width": "100",
                        "left_fill": "#117906",
                        "right_fill": "#0e2c00",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_06",
                    "bg" : "siXiang/img/symbol-06.png",
                    "xpos": "567",
                    "ypos": "200",
                    "height": "150px",
                    "width": "150px",
                    "text": {
                        "value": 5,
                        "xpos": "50",
                        "ypos": "185",
                        "width": "100",
                        "left_fill": "#117906",
                        "right_fill": "#0e2c00",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_07",
                    "bg" : "siXiang/img/symbol-07.png",
                    "xpos": "763",
                    "ypos": "200",
                    "height": "150px",
                    "width": "150px",
                    "text": {
                        "value": 6,
                        "xpos": "50",
                        "ypos": "185",
                        "width": "100",
                        "left_fill": "#117906",
                        "right_fill": "#0e2c00",
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
                    "ypos" : "500",
                    "width" : "500",
                    "fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "14px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols" : [

                {
                    "id" : "symbol_08",
                    "bg" : "siXiang/img/symbol-08.png",
                    "xpos": "380",
                    "ypos": "200",
                    "height": "150px",
                    "width": "150px",
                    "text": {
                        "value": 7,
                        "xpos": "50",
                        "ypos": "165",
                        "width": "100",
                        "left_fill": "#117906",
                        "right_fill": "#0e2c00",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_09",
                    "bg" : "siXiang/img/symbol-09.png",
                    "xpos": "658",
                    "ypos": "230",
                    "height": "150px",
                    "width": "150px"
                }

            ],

            "text": [
                {
                    "value": [ "Magic portal."],
                    "xpos": "335",
                    "ypos": "150",
                    "width": "250",
                    "para_fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "18px",
                    "align" : "center"
                },
                {
                    "value": [ "Magic portal also activates Free Spins when Yin/Yang symbol lands on it."],
                    "xpos": "559",
                    "ypos": "140",
                    "width": "350",
                    "para_fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "18px",
                    "align" : "center"
                },

                {
                    "value": [ "Yin/Yang wilds and completes all the symbols.", "Multiply x3 winning combinations."],
                    "xpos": "559",
                    "ypos": "370",
                    "width": "350",
                    "para_fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "18px",
                    "align" : "center"
                },

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "500",
                    "width" : "500",
                    "fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "14px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols" : [

                {
                    "id" : "wild-1_expanded",
                    "bg" : "siXiang/img/paytable/wild-1_expanded.png",
                    "xpos": "458",
                    "ypos": "200",
                    "height": "250px",
                    "width": "84px"
                }

            ],

            "text": [

                {
                    "value": "Free Spin Expanding Wild - Dragon",
                    "xpos": "659",
                    "ypos": "140",
                    "width": "250",
                    "fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "20px",
                    "align" : "center"
                },

                {
                    "value": [ "Moves Horizontally.", "Free Spins end when all Wilds move outside of the reels.","Wilds substitutes for all symbols." ,"More than 1 Wild can appear at the same time."],
                    "xpos": "600",
                    "ypos": "270",
                    "width": "350",
                    "para_fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "18px",
                    "align" : "center"
                },

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "500",
                    "width" : "500",
                    "fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "14px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols" : [

                {
                    "id" : "wild-2_expanded",
                    "bg" : "siXiang/img/paytable/wild-2_expanded.png",
                    "xpos": "355",
                    "ypos": "283",
                    "height": "84px",
                    "width": "250px"
                }

            ],

            "text": [

                {
                    "value": "Free Spin Expanding Wild - Tiger",
                    "xpos": "659",
                    "ypos": "140",
                    "width": "250",
                    "fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "20px",
                    "align" : "center"
                },

                {
                    "value": [ "Moves Vertically.", "Free Spins end when all Wilds move outside of the reels.","Wilds substitutes for all symbols." ,"More than 1 Wild can appear at the same time."],
                    "xpos": "600",
                    "ypos": "270",
                    "width": "350",
                    "para_fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "18px",
                    "align" : "center"
                },

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "500",
                    "width" : "500",
                    "fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "14px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols" : [

                {
                    "id" : "wild-3_expanded",
                    "bg" : "siXiang/img/paytable/wild-3_expanded.png",
                    "xpos": "411",
                    "ypos": "236",
                    "height": "177px",
                    "width": "177px"
                }

            ],

            "text": [

                {
                    "value": "Free Spin Expanding Wild - Tortoise",
                    "xpos": "659",
                    "ypos": "140",
                    "width": "250",
                    "fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "20px",
                    "align" : "center"
                },

                {
                    "value": [ "Moves in All Directions.", "Free Spins end when Wild moves outside of the reels." ,"Wild substitutes for all symbols." ,"Only 1 Wild can appear at the same time."],
                    "xpos": "600",
                    "ypos": "270",
                    "width": "350",
                    "para_fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "18px",
                    "align" : "center"
                },

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "500",
                    "width" : "500",
                    "fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "14px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols" : [

                {
                    "id" : "wild-4_expanded",
                    "bg" : "siXiang/img/paytable/wild-4_expanded.png",
                    "xpos": "340",
                    "ypos": "200",
                    "height": "258px",
                    "width": "275px"
                }

            ],

            "text": [

                {
                    "value": "Free Spin Expanding Wild - Phoenix",
                    "xpos": "659",
                    "ypos": "140",
                    "width": "250",
                    "fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "20px",
                    "align" : "center"
                },

                {
                    "value": [ "Moves in All Directions.", "Free Spins end when Wild moves outside of the reels." ,"Wild substitutes for all symbols." ,"Only 1 Wild can appear at the same time." ],
                    "xpos": "600",
                    "ypos": "270",
                    "width": "350",
                    "para_fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "18px",
                    "align" : "center"
                },

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "500",
                    "width" : "500",
                    "fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "14px",
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
            "unchecked_colour": "#117906",
            "small": true,

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "500",
                    "width" : "500",
                    "fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "14px",
                    "align" : "center"
                }

            ]

        },

        {

            "lines": [11, 20],
            "ypos": "225",
            "font" : "FuturaPT-Book, Arial, sans-serif",
            "text_colour": "#93d8fe",
            "checked_colour": "#fff",
            "unchecked_colour": "#117906",
            "small": true,

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "500",
                    "width" : "500",
                    "fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "14px",
                    "align" : "center"
                }

            ]

        },

        {

            "lines": [21, 28],
            "ypos": "225",
            "font" : "FuturaPT-Book, Arial, sans-serif",
            "text_colour": "#93d8fe",
            "checked_colour": "#fff",
            "unchecked_colour": "#117906",
            "small": true,

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "500",
                    "width" : "500",
                    "fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "14px",
                    "align" : "center"
                }

            ]

        }
    ]

};
