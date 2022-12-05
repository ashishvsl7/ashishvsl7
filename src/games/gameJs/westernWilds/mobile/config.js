
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
        "sprite": "fonts/fontWW.png",
        "font": "fonts/fontWW.xml"
    },
    "multiBmpFont":{
        "sprite": "fonts/multiplyerWW.png",
        "font": "fonts/multiplyerWW.xml"
    }
}

var extScripts={
    "webfont": "15px FuturaPT-Heavy",
    "webfont1": "15px FuturaPT-Book",
    "webfont2": "15px EgyptienneCom-BoldCondensed"
}
var gameAssets = {
    "assets": {
        "icon0": "westernWilds/img/symbol-00.png",
        "icon1": "westernWilds/img/symbol-01.png",
        "icon2": "westernWilds/img/symbol-02.png",
        "icon3": "westernWilds/img/symbol-03.png",
        "icon4": "westernWilds/img/symbol-04.png",
        "icon5": "westernWilds/img/symbol-05.png",
        "icon6": "westernWilds/img/symbol-06.png",
        "icon7": "westernWilds/img/symbol-07.png",
        "icon8": "westernWilds/img/symbol-08.png",
        "icon9": "westernWilds/img/symbol-09.png",
        "icon10": "westernWilds/img/symbol-10.png",
        "icon11": "westernWilds/img/symbol-11.png",
        "icon12": "westernWilds/img/symbol-12.png",
        "icon13": "westernWilds/img/symbol-15.png",
        "icon15": "westernWilds/img/symbol-13.png",
        "icon14": "westernWilds/img/transparent.png",
        "safeStatic0": "westernWilds/img/transparent.png",
        "safeStatic1": "westernWilds/img/paytable/safe1.png",
        "safeStatic2": "westernWilds/img/paytable/safe2.png",
        "safeStatic3": "westernWilds/img/paytable/safe3.png",
        "safeStatic4": "westernWilds/img/paytable/safe4.png",
        "bank": "westernWilds/img/side-feature/banksign.png",

        "safeDynamite":"westernWilds/img/prize-dynamite.png",
        "safeWild":"westernWilds/img/prize-wild.png",
        "fsBox":"westernWilds/img/win-counter.png",
        "belt":"westernWilds/img/transporter.png",
        "selector":"westernWilds/img/selector.png",
        "bottomBar": "gui/message-bar.png",
        "bgPanel": "westernWilds/img/pop-up.png",
        "bgPanelGame": "westernWilds/img/pop-up.png",
        "bgPreview":"westernWilds/img/intro-page.jpg",
        "bgPreview1":"westernWilds/img/page-01.png",
        "bgPreview2":"westernWilds/img/page-02.png",
        "freeRoundsPanel":"westernWilds/img/bg/base-top-free-rounds.png",
        "bgAlpha": "westernWilds/img/alpha.png",
        "bgBlack": "westernWilds/img/black.png",
        "bigWin":"westernWilds/img/big-win.png",
        "superWin":"westernWilds/img/epic-win.png",
        "megaWin":"westernWilds/img/ultra-win.png",
        "bg_r": "westernWilds/img/bg/base-right.png",
        "bg_l": "westernWilds/img/bg/base-left.png",
        "bg_b": "westernWilds/img/bg/base-bottom.png",
        "bg_bFS": "westernWilds/img/bg/base-bottom_FS.jpg",
        "bg_t": "westernWilds/img/bg/base-top.png",
        "bg_t_bg": "westernWilds/img/bg/base-top-bg.png",
        "clouds": "westernWilds/img/bg//clouds.png",
        "bg_m": "westernWilds/img/bg/base-main.png",
        "bg_rFS": "westernWilds/img/bg/base-right_FS.jpg",
        "bg_lFS": "westernWilds/img/bg/base-left_FS.jpg",
        "bg_tFS": "westernWilds/img/bg/base-top_FS.png",
        "bg_t_bg_FS": "westernWilds/img/bg/base-top_bg_FS.png",
        "bg_mFS": "westernWilds/img/bg/base-main_FS.jpg",
        "buttonBg":"gui/generic/img/desktop/png/cp-info-bar.png",
        "volOnButton": "gui/btnVolOn.png",
        "volOffButton": "gui/btnVolOff.png",
        "freeSpinPanel":"westernWilds/img/free-spins.png",
        "logo":"westernWilds/img/logo.png"
    },
    "localizedAssets":{
        "graphAsset": {
        }
    },
    "buttonsSpriteSheet": {
        "container-btn": {
            "sprite": "westernWilds/img/game-btn.png",
            "json": "westernWilds/img/game-btn.png",
            "w": 210,
            "h": 66
        },
        "yesButton": {
            "sprite": "westernWilds/img/yes-btn.png",
            "json": "westernWilds/img/yes-btn.png",
            "w": 82,
            "h": 72
        },
        "noButton": {
            "sprite": "westernWilds/img/no-btn.png",
            "json": "westernWilds/img/no-btn.png",
            "w": 82,
            "h": 72
        },
        "check": {
            "sprite": "westernWilds/img/radio-btns.png",
            "json": "westernWilds/img/radio-btns.png",
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
            "json": "westernWilds/img/anim/symbol-00.json",
            "sprite": "westernWilds/img/anim/symbol-00.png"
        },
        "anim1": {
            "json": "westernWilds/img/anim/symbol-01.json",
            "sprite": "westernWilds/img/anim/symbol-01.png"
        },
        "anim2": {
            "json": "westernWilds/img/anim/symbol-02.json",
            "sprite": "westernWilds/img/anim/symbol-02.png"
        },
        "anim3": {
            "json": "westernWilds/img/anim/symbol-03.json",
            "sprite": "westernWilds/img/anim/symbol-03.png"
        },
        "anim4": {
            "json": "westernWilds/img/anim/symbol-04.json",
            "sprite": "westernWilds/img/anim/symbol-04.png"
        },
        "anim5": {
            "json": "westernWilds/img/anim/symbol-05.json",
            "sprite": "westernWilds/img/anim/symbol-05.png"
        },
        "anim6": {
            "json": "westernWilds/img/anim/symbol-06.json",
            "sprite": "westernWilds/img/anim/symbol-06.png"
        },
        "anim7": {
            "json": "westernWilds/img/anim/symbol-07.json",
            "sprite": "westernWilds/img/anim/symbol-07.png"
        },
        "anim8": {
            "json": "westernWilds/img/anim/symbol-08.json",
            "sprite": "westernWilds/img/anim/symbol-08.png"
        },
        "anim9": {
            "json": "westernWilds/img/anim/symbol-09.json",
            "sprite": "westernWilds/img/anim/symbol-09.png"
        },
        "anim10": {
            "json": "westernWilds/img/anim/symbol-10.json",
            "sprite": "westernWilds/img/anim/symbol-10.png"
        },
        "anim11": {
            "json": "westernWilds/img/anim/symbol-11.json",
            "sprite": "westernWilds/img/anim/symbol-11.png"
        },
        "anim12": {
            "json": "westernWilds/img/anim/symbol-12.json",
            "sprite": "westernWilds/img/anim/symbol-12.png"
        },
       "tumble-smoke":{
            "json": "westernWilds/img/anim/tumble-smoke.json",
            "sprite": "westernWilds/img/anim/tumble-smoke.png"
        },

        "shamrock_1":{
            "json": "westernWilds/img/side-feature/side-feature-01.json",
            "sprite": "westernWilds/img/side-feature/side-feature-01.png"
        },
        "shamrock_2":{
            "json": "westernWilds/img/side-feature/side-feature-02.json",
            "sprite": "westernWilds/img/side-feature/side-feature-02.png"
        },
        "shamrock_3":{
            "json": "westernWilds/img/side-feature/side-feature-03.json",
            "sprite": "westernWilds/img/side-feature/side-feature-03.png"
        },
        "draw":{
            "json": "westernWilds/img/anim/locked-reels.json",
            "sprite": "westernWilds/img/anim/locked-reels.png"
        },
        "safe1":{
            "json": "westernWilds/img/side-feature/activate-01.json",
            "sprite": "westernWilds/img/side-feature/activate-01.png"
        },
        "safe2":{
            "json": "westernWilds/img/side-feature/activate-02.json",
            "sprite": "westernWilds/img/side-feature/activate-02.png"
        },
        "safe3":{
            "json": "westernWilds/img/side-feature/activate-03.json",
            "sprite": "westernWilds/img/side-feature/activate-03.png"
        },
        "safe4":{
            "json": "westernWilds/img/side-feature/activate-04.json",
            "sprite": "westernWilds/img/side-feature/activate-04.png"
        },
        "sideTntActive":{
            "json": "westernWilds/img/side-feature/dynamite-active.json",
            "sprite": "westernWilds/img/side-feature/dynamite-active.png"
        },
        "meterActive":{
            "json": "westernWilds/img/side-feature/side-feature-activate.json",
            "sprite": "westernWilds/img/side-feature/side-feature-activate.png"
        },
        "sideTntIdle":{
            "json": "westernWilds/img/side-feature/dynamite-idle.json",
            "sprite": "westernWilds/img/side-feature/dynamite-idle.png"
        },
        "explosion":{
            "json": "westernWilds/img/side-feature/dynamite-explotion.json",
            "sprite": "westernWilds/img/side-feature/dynamite-explotion.png"
        },
        "tntReveal":{
            "json": "westernWilds/img/anim/symbol-11-reveal.json",
            "sprite": "westernWilds/img/anim/symbol-11-reveal.png"
        },
        "tumble_1":{
            "json": "westernWilds/img/anim/tumble-01.json",
            "sprite": "westernWilds/img/anim/tumble-01.png"
        },
        "tumble_2":{
            "json": "westernWilds/img/anim/tumble-02.json",
            "sprite": "westernWilds/img/anim/tumble-02.png"
        },
        "tumble_3":{
            "json": "westernWilds/img/anim/tumble-03.json",
            "sprite": "westernWilds/img/anim/tumble-03.png"
        },
        "wildReel": {
            "json": "westernWilds/img/anim/symbol-13.json",
            "sprite": "westernWilds/img/anim/symbol-13.png"
        },
        "cogs": {
            "json": "westernWilds/img/anim/cogs.json",
            "sprite": "westernWilds/img/anim/cogs.png"
        },

        "part-1": {
            "json": "westernWilds/img/anim/bronze-coin.json",
            "sprite": "westernWilds/img/anim/bronze-coin.png"
        },
        "part-2": {
            "json": "westernWilds/img/anim/silver-coin.json",
            "sprite": "westernWilds/img/anim/silver-coin.png"
        },
        "part-3": {
            "json": "westernWilds/img/anim/gold-coin.json",
            "sprite": "westernWilds/img/anim/gold-coin.png"
        },
        "f-part-1": {
            "json": "westernWilds/img/anim/bronze-coin-frwrd.json",
            "sprite": "westernWilds/img/anim/bronze-coin-frwrd.png"
        },
        "f-part-2": {
            "json": "westernWilds/img/anim/silver-coin-frwrd.json",
            "sprite": "westernWilds/img/anim/silver-coin-frwrd.png"
        },
        "f-part-3": {
            "json": "westernWilds/img/anim/gold-coin-frwrd.json",
            "sprite": "westernWilds/img/anim/gold-coin-frwrd.png"
        }
    },
    "importantSounds": {
        "spinClick": {
            "name": "westernWilds/sounds/spinClick.mp3",
            "volume": .1
        },
        "reelFall": {
            "name": "westernWilds/sounds/reelSound.mp3",
            "volume":1
        },
        "reelAppear": {
            "name": "westernWilds/sounds/reelStop.mp3",
            "volume":1
        },
        "iConLight": {
            "name": "westernWilds/sounds/iconPop.mp3",
            "volume": 1.5
        },
        "tumble": {
            "name": "westernWilds/sounds/tumbling.mp3",
            "volume": 1.5
        },
        "coins": {
            "name": "westernWilds/sounds/coins.mp3",
            "volume": 8
        },
        "conveyorBelt": {
            "name": "westernWilds/sounds/conveyorBelt.mp3",
            "volume": 1
        },
        "safeOpening": {
            "name": "westernWilds/sounds/safeOpening.mp3",
            "volume": 1
        },
        "safeClosing": {
            "name": "westernWilds/sounds/safeClose.mp3",
            "volume": 1
        },
        "additionalFS": {
            "name": "westernWilds/sounds/safePrize_additionalFS.mp3",
            "volume": 1.5
        },
        "additionalWilds": {
            "name": "westernWilds/sounds/safePrize_additionalWilds.mp3",
            "volume": 1.5
        },
        "additionalMult": {
            "name": "westernWilds/sounds/safePrize_multiplier.mp3",
            "volume": 1.5
        },
        "timer": {
            "name": "westernWilds/sounds/timer.mp3",
            "volume": 10,
            "loop":true
        },
    },
    "bgImportantSounds":{
        "bgSlot": {
            "name": "westernWilds/sounds/bg.mp3",
            "volume": 1
        }
    },
    "sounds": {
        "click": {
            "name": "westernWilds/sounds/click.mp3",
            "volume": .3
        },
        "smbWin_0": {
            "name": "westernWilds/sounds/smbWin_1234.mp3",
            "multiple":["smbWin_1","smbWin_2","smbWin_3","smbWin_4"],
            "volume": 2
        },
        "smbWin_5": {
            "name": "westernWilds/sounds/smbWin_05.mp3",
            "volume": 1
        },
        "smbWin_6": {
            "name": "westernWilds/sounds/smbWin_06.mp3",
            "volume": 1
        },
        "smbWin_7": {
            "name": "westernWilds/sounds/smbWin_07.mp3",
            "volume": 1
        },
        "smbWin_8": {
            "name": "westernWilds/sounds/smbWin_08.mp3",
            "volume": 1
        },
        "smbWin_9": {
            "name": "westernWilds/sounds/smbWin_09.mp3",
            "volume": 1
        },
        "smbWin_10": {
            "name": "westernWilds/sounds/smbWin_10.mp3",
            "volume": 1
        },
        "smbWin_11": {
            "name": "westernWilds/sounds/smbWin_11.mp3",
            "multiple":["smbWin_12","smbWin_13","smbWin_14","smbWin_15"],
            "volume": 1
        },
        "wildReel":{
            "name": "westernWilds/sounds/wildReel.mp3",
            "volume": 1
        },


        "winBg_1": {
            "name": "westernWilds/sounds/centralWin/win1.mp3",
            "volume":  0
        },
        "winBg_2": {
            "name": "westernWilds/sounds/centralWin/win2.mp3",
            "volume":  1
        },
        "winBg_3": {
            "name": "westernWilds/sounds/centralWin/win3.mp3",
            "volume":  1
        },
        "winBg_4": {
            "name": "westernWilds/sounds/centralWin/win4.mp3",
            "volume":  1
        },
        "winBg_5": {
            "name": "westernWilds/sounds/centralWin/win5.mp3",
            "volume":  1
        },
        "winBg_6": {
            "name": "westernWilds/sounds/centralWin/bigWin.mp3",
            "volume":  1
        },
        "winBg_7": {
            "name": "westernWilds/sounds/centralWin/superBigWin.mp3",
            "volume":  1
        },
        "winBg_8": {
            "name": "westernWilds/sounds/centralWin/megaBigWin.mp3",
            "volume": 1
        },
        "fsWon": {
            "name": "westernWilds/sounds/introFs.mp3",
            "volume": 1
        },
        "incWin": {
            "name": "westernWilds/sounds/counter.mp3",
            "volume": .6,
            "loop": true
        },
        "line": {
            "name": "westernWilds/sounds/coinsDrop1.mp3",
            "volume": .6
        },
        "land": {
            "name": "westernWilds/sounds/land.mp3",
            "volume": 3
        },
        "winPanel": {
            "name": "westernWilds/sounds/winScreen.mp3",
            "volume": 1.1
        },
        "blast":{
            "name": "westernWilds/sounds/blast.mp3",
            "volume": 1
        },
        "slide":{
            "name": "westernWilds/sounds/slide.mp3",
            "volume": 1.5
        }
    },
    "bgSounds": {
        "bgFs": {
            "name": "westernWilds/sounds/bgFs.mp3",
            "volume": 1
        }
    }
}
var guiConfig = {
    "credits": ["cash","credits"]
}
var displayManager = {
    "render":Phaser.AUTO,
    "groups": {
        "frame": {
            "visible": false,
            "graphAsset": {
                "bg4": {
                    "name": "bg_m",
                    "portrait": true,
                    "x": 420,
                    "y": 192
                }
            }
        },
        "frameFS": {
            "visible":false,
            "graphAsset": {
                "bg4": {
                    "name": "bg_mFS",
                    "portrait": true,
                    "x": 420,
                    "y": 102
                }
            }
        },
        "bg": {
            "visible":false,
            "graphAsset": {
                "bg": {
                    "name": "bg_r",
                    "portrait": true,
                    "x": 860,
                    "y": 192
                },
                "bg1": {
                    "name": "bg_l",
                    "portrait": true,
                    "x": 0,
                    "y": 192
                }
            }
        },
        "conveyorBelt": {
            "visible": false,
            "graphAsset": {
                "bg": {
                    "visible":true,
                    "name": "bg_t_bg_FS",
                    "x": 640,
                    "y": 46,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "belt": {
                    "visible":true,
                    "name": "belt",
                    "x": 892,
                    "y": 92,
                    "anchorX": .5,
                    "anchorY": .5
                }
            }
        },
        "bgFS": {
            "visible":false,
            "graphAsset": {
                "bg": {
                    "name": "bg_rFS",
                    "portrait": true,
                    "x": 860,
                    "y": 104
                },
                "bg1": {
                    "name": "bg_lFS",
                    "portrait": true,
                    "x": 0,
                    "y": 104
                }
            }
        },

        "reels": {},
        "cracking": {},
        "winGlow":{},
        "mask":{
            "visible":false,
            "graphAsset": {
                "bg2": {
                    "name": "bg_b",
                    "portrait": true,
                    "x": 0,
                    "y": 544
                },
                "bg31": {
                    "name": "bg_t_bg",
                    "x": 0,
                    "y": 0,
                    "portrait": true,
                },
                "bg32": {
                    "name": "clouds",
                    "x": 0,
                    "y": 0,
                },
                "bg3": {
                    "name": "bg_t",
                    "x": 0,
                    "y": 0,
                    "portrait": true,
                }
            }
        },
        "maskFS":{
            "visible":false,
            "graphAsset": {
                "bg2": {
                    "name": "bg_bFS",
                    "portrait": true,
                    "x": 0,
                    "y": 632
                },
                "bg3": {
                    "name": "bg_tFS",
                    "portrait": true,
                    "x": 0,
                    "y": 0
                },
                "selector": {
                    "visible":true,
                    "name": "selector",
                    "x": 406,
                    "y": 52,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "cogsL":{
                    "visible":true,
                    "name": "cogs",
                    "x": 356,
                    "y": 90,
                    "scaleX":-1,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "cogsR":{
                    "visible":true,
                    "name": "cogs",
                    "x": 922,
                    "y": 90,
                    "anchorX": .5,
                    "anchorY": .5
                }
            }
        },
        "freeSpinAccumulator": {
            "visible": false,
            "maxFs": 12,
            "graphAsset": {
                "shamrock_1": {
                    "name": "shamrock_1",
                    "x": 1050,
                    "y": 368,
                    "anchorX": .5,
                    "anchorY": .5,
                    "portrait":true
                },
                "shamrock_2": {
                    "visible":false,
                    "name": "shamrock_2",
                    "x": 1050,
                    "y": 368,
                    "anchorX": .5,
                    "anchorY": .5,
                    "portrait":true
                },
                "shamrock_3": {
                    "visible":false,
                    "name": "shamrock_3",
                    "x": 1050,
                    "y": 368,
                    "anchorX": .5,
                    "anchorY": .5,
                    "portrait":true
                },
                "shamrock_Active": {
                    "visible":false,
                    "name": "meterActive",
                    "x": 1050,
                    "y": 368,
                    "anchorX": .5,
                    "anchorY": .5,
                    "portrait":true
                },
                "tntLeft":{
                    "visible":true,
                    "name": "sideTntActive",
                    "x": 379,
                    "y": 548,
                    "scaleX":-1,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "tntRight":{
                    "visible":true,
                    "name": "sideTntActive",
                    "x": 898,
                    "y": 548,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "tntIdleLeft":{
                    "visible":false,
                    "name": "sideTntIdle",
                    "x": 379,
                    "y": 548,
                    "scaleX":-1,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "tntIdleRight":{
                    "visible":false,
                    "name": "sideTntIdle",
                    "x": 898,
                    "y": 548,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "tntExplosionLeft":{
                    "visible":false,
                    "name": "explosion",
                    "x": 384,
                    "y": 423,
                    "scaleX":-1,
                    "scaleX":2,
                    "scaleY":2,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "tntExplosionRight":{
                    "visible":false,
                    "name": "explosion",
                    "x": 897,
                    "y": 423,
                    "scaleX":2,
                    "scaleY":2,
                    "anchorX": .5,
                    "anchorY": .5
                }


            }
        },
        "buttonFg":{
            "visible":false,
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
        "scatter": {},
        "wild": {
        },
        "drawers": {
            "visible": false,
            "graphAsset": {
                "draw_0_0": {
                    "name": "draw",
                    "x": 464,
                    "y": 148,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "draw_0_5": {
                    "name": "draw",
                    "x": 464,
                    "y": 588,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "draw_1_0": {
                    "name": "draw",
                    "x": 464+1*88,
                    "y": 148,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "draw_1_5": {
                    "name": "draw",
                    "x": 464+1*88,
                    "y": 588,
                    "anchorX": .5,
                    "anchorY": .5
                },



                "draw_2_5": {
                    "name": "draw",
                    "x": 464+2*88,
                    "y": 588,
                    "anchorX": .5,
                    "anchorY": .5
                },

                "draw_2_0": {
                    "name": "draw",
                    "x": 464+2*88,
                    "y": 148,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "draw_2_5": {
                    "name": "draw",
                    "x": 464+2*88,
                    "y": 588,
                    "anchorX": .5,
                    "anchorY": .5
                },

                "draw_3_0": {
                    "name": "draw",
                    "x": 464+3*88,
                    "y": 148,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "draw_3_5": {
                    "name": "draw",
                    "x": 464+3*88,
                    "y": 588,
                    "anchorX": .5,
                    "anchorY": .5
                },

                "draw_4_0": {
                    "name": "draw",
                    "x": 464+4*88,
                    "y": 148,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "draw_4_5": {
                    "name": "draw",
                    "x": 464+4*88,
                    "y": 588,
                    "anchorX": .5,
                    "anchorY": .5
                },


            }
        },
        "wins": {},
        "lines": {},
        "safePrize":{
            "texts": {
                "txt1": {
                    "x": 640,
                    "y": 340,
                    "bmpFont": "multiBmpFont",
                    "size": "70",
                    "text": "",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "txt2": {
                    "visible":false,
                    "x": 640,
                    "y": 390,
                    "fill": "#ffc668",
                    "font": "35px EgyptienneCom-BoldCondensed,Arial",
                    "text": "Multiplier",
                    "anchorX": .5,
                    "anchorX": .5,
                    "align": "center"
                },
                "txt3": {
                    "visible":false,
                    "x": 640,
                    "y": 390,
                    "fill": "#ffc668",
                    "font": "35px EgyptienneCom-BoldCondensed,Arial",
                    "text": "Free Spins",
                    "anchorX": .5,
                    "anchorX": .5,
                    "align": "center"
                },

            }
        },
        "centralFuntainSmallObj":{},
        "logo": {
            "visible":false,
            "graphAsset": {
                "group":{
                    "name":"centralFuntain"
                },
                "logo": {
                    "name": "logo",
                    "x": 640,
                    "y": 0,
                    "anchorX":.5
                }
            }
        },
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
        "bgAnimation":{
            "graphAsset": {
                "bank":{
                    "name": "bank",
                    "x": 336,
                    "y": 217,
                    "scaleX":.8,
                    "scaleY":.8,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible":false
                }
            }
        },
        "freeRounds": {
            "visible":false,
            "comment_movingLogo":"true when the panel substitute the logo",
            "movingLogo":true,
            "graphAsset": {
                "frPanel":{
                    "portrait":true,
                    "name": "freeRoundsPanel",
                    "x": 0,
                    "y": 0
                }
            },
            "texts": {
                "frLabel": {
                    "x": 200,
                    "y": 20,
                    "fill": "#000000",
                    "font": "20px Futura ,Arial",
                    "text": "Free Rounds:",
                    "anchorX": 0.5,
                    "anchorY": 0.5
                },
                "frValue": {
                    "x": 200,
                    "y": 50,
                    "fill": "#000000",
                    "font": "20px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5,
                    "anchorY": 0.5
                },
                "frTotWonLabel": {
                    "x": 1070,
                    "y": 20,
                    "fill": "#000000",
                    "font": "20px Futura ,Arial",
                    "text": "Total won:",
                    "anchorX": 0.5,
                    "anchorY": 0.5
                },
                "frTotWonValue": {
                    "x": 1070,
                    "y": 50,
                    "fill": "#000000",
                    "font": "20px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5,
                    "anchorY": 0.5
                }
            }
        },
        "rainBow":{},
        "freeSpins": {
            "visible": false,
            "graphAsset": {
                "fsP": {
                    "name": "bgAlpha",
                    "x": 0,
                    "y": 0,
                    "alpha":0
                },
                "fsbox1":{
                    "name": "fsBox",
                    "x": 30,
                    "y": 20
                },
                "fsbox2":{
                    "name": "fsBox",
                    "x": 1015,
                    "y": 20
                },
                "fsbox3":{
                    "name": "fsBox",
                    "x": 30,
                    "y": 320
                },
            },
            "texts": {
                "fsLabelShadow": {
                    "x": 150,
                    "y":68,
                    "fill": "#ffffff",
                    "font": "25px EgyptienneCom-BoldCondensed ,Arial",
                    "text": "Free Spins",
                    "anchorX": 0.5,
                    "anchorY": 0.5,
                    "align":"center",
                },
                "fsLabel": {
                    "x": 152,
                    "y": 67,
                    "fill": "#635e5e",
                    "font": "25px EgyptienneCom-BoldCondensed ,Arial",
                    "text": "Free Spins",
                    "anchorX": 0.5,
                    "anchorY": 0.5,
                    "align":"center",
                },
                "fsValueShadow": {
                    "x": 150,
                    "y": 101,
                    "fill": "#ffffff",
                    "font": "27px EgyptienneCom-BoldCondensed ,Arial",
                    "text": "12",
                    "anchorX": 0.5,
                    "anchorY": 0.5,
                    "align":"center",
                },
                "fsValue": {
                    "x": 152,
                    "y": 100,
                    "fill": "#635e5e",
                    "font": "27px EgyptienneCom-BoldCondensed ,Arial",
                    "text": "12",
                    "anchorX": 0.5,
                    "anchorY": 0.5,
                    "align":"center",
                },
                "totWonLabelShadow": {
                    "x": 1137,
                    "y": 68,
                    "fill": "#ffffff",
                    "font": "25px EgyptienneCom-BoldCondensed  ,Arial",
                    "text": "Total won",
                    "anchorX": 0.5,
                    "anchorY": 0.5,
                    "align":"center"
                },
                "totWonLabel": {
                    "x": 1139,
                    "y": 67,
                    "fill": "#635e5e",
                    "font": "25px EgyptienneCom-BoldCondensed  ,Arial",
                    "text": "Total won",
                    "anchorX": 0.5,
                    "anchorY": 0.5,
                    "align":"center"
                },
                "totWonValueShadow": {
                    "x": 1137,
                    "y": 101,
                    "fill": "#ffffff",
                    "font": "25px EgyptienneCom-BoldCondensed  ,Arial",
                    "text": "",
                    "anchorX": 0.5,
                    "anchorY": 0.5,
                    "align":"center"
                },
                "totWonValue": {
                    "x": 1139,
                    "y": 100,
                    "fill": "#635e5e",
                    "font": "25px EgyptienneCom-BoldCondensed  ,Arial",
                    "text": "",
                    "anchorX": 0.5,
                    "anchorY": 0.5,
                    "align":"center"
                },
                "fsMultLabelShadow":{
                    "x": 150,
                    "y": 368,
                    "fill": "#ffffff",
                    "font": "25px EgyptienneCom-BoldCondensed  ,Arial",
                    "text": "Multiplier",
                    "anchorX": 0.5,
                    "anchorY": 0.5,
                    "align":"center"
                },
                "fsMultLabel":{
                    "x": 152,
                    "y": 367,
                    "fill": "#635e5e",
                    "font": "25px EgyptienneCom-BoldCondensed  ,Arial",
                    "text": "Multiplier",
                    "anchorX": 0.5,
                    "anchorY": 0.5,
                    "align":"center"
                },
                "fsMultValueShadow":{
                    "x": 150,
                    "y": 402,
                    "fill": "#ffffff",
                    "font": "27px EgyptienneCom-BoldCondensed  ,Arial",
                    "text": "x2",
                    "anchorX": 0.5,
                    "anchorY": 0.5,
                    "align":"center"
                },
                "fsMultValue":{
                    "x": 152,
                    "y": 401,
                    "fill": "#635e5e",
                    "font": "27px EgyptienneCom-BoldCondensed  ,Arial",
                    "text": "x2",
                    "anchorX": 0.5,
                    "anchorY": 0.5,
                    "align":"center"
                },
                "MultValueBig":{
                    "x": 640,
                    "y": 400,
                    "bmpFont": "multiBmpFont",
                    "size": "300",
                    "text": "",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsAdditional":{
                    "x": 640,
                    "y": 220,
                    "fill": "#c5ac1f",
                    "font": "30px Futura ,Arial",
                    "text": "",
                    "align":"center",
                    "anchorX": .5,
                    "anchorY": .5
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
                    "y": -300,
                    "height":2000,
                    "alpha": .8
                },
                "bgFsWon": {
                    "name": "bgPanel",
                    "x": 640,
                    "y": 330,
                    "anchorX": .5,
                    "anchorY": .5
                }
            },
            "texts": {
                "fsWLabel": {
                    "x": 640,
                    "y": 220,
                    "fill": "#ffffff",
                    "font": "70px EgyptienneCom-BoldCondensed, FuturaPT-Book",
                    "text": "You won",
                    "anchorX": .5
                },
                "fsValue1": {
                    "x": 640,
                    "y": 280,
                    "fill": "#550603",
                    "font": "70px EgyptienneCom-BoldCondensed, FuturaPT-Book",
                    "text": "5",
                    "anchorX": .5
                },
                "fsWLabel1": {
                    "x": 640,
                    "y": 342,
                    "fill": "#550603",
                    "font": "70px EgyptienneCom-BoldCondensed, FuturaPT-Book",
                    "text": "Free Spins!",
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
                    "y": -300,
                    "height":2000,
                    "alpha": .8
                },
                "game": {
                    "name": "bgPanelGame",
                    "x": 640,
                    "y": 340,
                    "anchorX": .5,
                    "anchorY": .5,
                    "scaleX":1.2,
                    "scaleY":1.2
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
            "minScale": 110,
            "maxScale": 130,
            "graphAsset": {
                "bgmsg": {
                    "name": "bgAlpha",
                    "x": 0,
                    "y": -300,
                    "height":2000,
                    "alpha": .8
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
                    "y": 312,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "mBigWin": {
                    "name": "megaWin",
                    "x": 635,
                    "y": 312,
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
                    "y": 360,
                    "bmpFont": "bmpFont",
                    "size": "27",
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
                    "name": "bgAlpha",
                    "x": -500,
                    "y": -500,
                    "width":1500,
                    "height":1500,
                    "alpha": .5
                },
                "bgPreview1": {
                    "name": "bgPreview1",
                    "x": 50,
                    "y": 150,
                    "texts": {
                        "pw1":{
                            "x": 290,
                            "y": 270,
                            "font": "35px EgyptienneCom-BoldCondensed, sans-serif",
                            "fill": "#ff6b00",
                            "text": "TNT explodes revealing:",
                            "anchorX": 0.5,
                        },
                        "pw11":{
                            "x": 290,
                            "y": 300,
                            "font": "35px EgyptienneCom-BoldCondensed, sans-serif",
                            "fill": "#ffff88",
                            "align":"center",
                            "text": "Expanding Wilds or",
                            "anchorX": 0.5,
                        },
                        "pw12":{
                            "x": 290,
                            "y": 330,
                            "font": "35px EgyptienneCom-BoldCondensed, sans-serif",
                            "fill": "#ffff88",
                            "align":"center",
                            "text": "up to 3 additional Wilds.",
                            "anchorX": 0.5,
                        },
                    }
                },
                "bgPreview2": {
                    "name": "bgPreview2",
                    "x": 647,
                    "y": 150,
                    "texts": {
                        "pw2":{
                            "x": 290,
                            "y": 240,
                            "font": "35px EgyptienneCom-BoldCondensed, sans-serif",
                            "fill": "#ff6b00",
                            "align":"center",
                            "text": "Every win can open a safe",
                            "anchorX": 0.5,
                        },
                        "pw21":{
                            "x": 290,
                            "y": 270,
                            "font": "35px  EgyptienneCom-BoldCondensed, sans-serif",
                            "fill": "#ffff88",
                            "align":"center",
                            "text": "You can unlock new",
                            "anchorX": 0.5,
                        },
                        "pw22":{
                            "x": 290,
                            "y": 300,
                            "font": "35px  EgyptienneCom-BoldCondensed, sans-serif",
                            "fill": "#ffff88",
                            "align":"center",
                            "text": "reel positions,",
                            "anchorX": 0.5,
                        },
                        "pw23":{
                            "x": 290,
                            "y": 330,
                            "font": "35px  EgyptienneCom-BoldCondensed, sans-serif",
                            "fill": "#ffff88",
                            "align":"center",
                            "text": "additional Free Spins",
                            "anchorX": 0.5,
                        },
                        "pw24":{
                            "x": 290,
                            "y": 360,
                            "font": "35px  EgyptienneCom-BoldCondensed, sans-serif",
                            "fill": "#ffff88",
                            "align":"center",
                            "text": "Multipliers or additional Wilds.",
                            "anchorX": 0.5,
                        },
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
                    "y": -300,
                    "height":2000,
                    "alpha": .8
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
                    "font": "22px FuturaPT-Book",
                    "text": ".wqdwe",
                    "anchorX": .5
                },
                "msg2": {
                    "x": 640,
                    "y": 350,
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
                    "y": 577,
                    "evt": "doOk"
                },
                "myAccount": {
                    "name": "genericBtn",
                    "x": 650,
                    "y": 577,
                    "evt": "doMyAccount",
                    "texts": {
                        "noLabel": {
                            "x": 0,
                            "y": -13,
                            "fill": "#ffffff",
                            "font": "20px  FuturaPT-Book",
                            "text": "My Account",
                            "anchorX": .5
                        }
                    }
                },
                "no": {
                    "name": "noButton",
                    "x": 775,
                    "y": 577,
                    "evt": "doKo"
                },
                "ok": {
                    "name": "genericBtn",
                    "x": 640,
                    "anchorX": .5,
                    "y": 577,
                    "evt": "doOk",
                    "texts": {
                        "noLabel": {
                            "x": -3,
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
                    "x": 0,
                    "y": -300,
                    "height":2000,
                    "alpha": .8
                },
                "generic": {
                    "name": "bgPanel",
                    "x": 640,
                    "y": 310,
                    "anchorX": .5,
                    "anchorY": .5,
                    "scaleX":1.5,
                    "scaleY":1.2
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
        "hideGame":{
            "visible":false,
            "graphAsset": {
                "bg": {
                    "name": "bgBlack",
                    "x": -500,
                    "y": -500,
                    "width":3500,
                    "height":3500
                }

            }
        }
    }
}

var ReelConfig = {
    "newUI":true,
    "isMobile":true,
    "transparentUI":true,
    "slotEngine":"IntegratedSlots",
    "engineNumbers":0,
    "newComm":true,
    "fastPlayEnable":false,
    "log":true,
    "canSwipe":false,
    "fastPlayEnable":false,
    "comment_preview":"enable feature preview screen",
    "preview":true,
    "previewTout":45000,
    "spinType": "WesternTumblingSpin",
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
    "lineType": "WesternTumbling",
    "lineFrames":31,
    "lineFrames":19,
    "comment_lineWinAmtType":"lines/coinWinning class",
    "lineWinAmtType":"NormalLineWinAmount",
    "numReels": 5,
    "numIcons": 6,
    "numIconsOnTop": 1,
    "numIconsOnBottom":1,
    "icons": [25, 25, 25, 25, 25 ],
    "_spinResult":[[0,1,2,3,4],[5,6,7,8,9],[6,1,2,3,4],[9,1,2,3,4],[2,1,2,3,4]],
    "_spinResult":[[0,0,2,3],[11,5,7,8],[5,6,2,3],[2,9,2,3],[0,2,2,3]],
    "spinWithAlpha": .6,
    "spinConfig":{
        "de":{
            "stopEnabled":false,
            "reelSecondMovementTime":.5,
            "reelLoopInterval":.15,
            "reelPreMovement": 4,
            "reelPreMovementTime": .2,
            "reelBaseInterval": 5,
            "reelStopInterval": 1,
            "reelSpinBounceMeasure": 40,
            "reelSpinBounceTime": .28,
            "reelSpinBounceForce": 1.2,
            "minimumTime":2.85
        },
        "es":{
            "stopEnabled":false,
            "reelSecondMovementTime":.4,
            "reelLoopInterval":.12,
            "reelPreMovement": 4,
            "reelPreMovementTime": .2,
            "reelBaseInterval": 5,
            "reelStopInterval": 1,
            "reelSpinBounceMeasure": 40,
            "reelSpinBounceTime": .28,
            "reelSpinBounceForce": 1.2,
            "minimumTime":1.52
        },
        "uk":{
            "stopEnabled":false,
            "reelSecondMovementTime":.4,
            "reelLoopInterval":.07,
            "reelPreMovement": 4,
            "reelPreMovementTime": .15,
            "reelBaseInterval": 2,
            "reelStopInterval": 1,
            "reelSpinBounceMeasure": 40,
            "reelSpinBounceTime": .28,
            "reelSpinBounceForce": 1.2,
            "minimumTime":1.52
        },
        "default":{
            "stopEnabled":false,
            "reelSecondMovementTime":.4,
            "reelLoopInterval":.06,
            "reelPreMovement": 4,
            "reelPreMovementTime": .1,
            "reelBaseInterval": 2,
            "reelStopInterval": 1,
            "reelSpinBounceMeasure": 40,
            "reelSpinBounceTime": .30,
            "reelSpinBounceForce": 1.2,
            "minimumTime":.9
        }
    },
    "numIcon": 12,
    "loadTout": 30,
    "credits": "5000",
    "bet": "0.50",
    "animDelayAfterWild":1500,
    "freeRounds":"normal",
    "freeSpins":"WesternFreeSpins",
    "_fsIcon": 1,
    "fsSpinDelay":750,
    "minFsSmbs":3,
    "scatterIcon": 10,
    "scatterType": "SubstScatter",
    "_twinReelsFeature":"normal",
    "wildType": "VikingTumblingWildReel",
    "wildNum": [13],
    "wildReelOrigin":3,
    "wildReelOrigin_Y_Offset":0,
    "wildShowFirstAnim":true,
    "animDelayAfterWild":1500,
    "wildDelay":0,
    "winTxtClasses": [1, 2, 5, 10, 20, 50, 100, 300, 500, 1000],
    "smb_colors":[0xff33cc,0xcc33ff,0x0066ff,0x00ff99,0xffcc00,0xff33cc,0xcc33ff,0x0066ff,0x00ff99,0xffcc00,0xffcc00],
    "smbMinAnimTime":[.5,.5,.5,.5,.5,.5,.5,1.5,.5,.5],
    "muteDuringWins":true,
    "keepShowingAnimation":true,
    "additionalPreText":"",
    "additionalPostText":"",
    "reel": {
        "deltaX_0": 420,
        "deltaX": 88,
        "deltaY_0": 543+88,
        "deltaY": 88
    },
    "icon": {
        "x": 0,
        "y": 0,
        "width": 88,
        "height": 88
    },
    "winningcombinations": true,
    "ForceFeature":{
        "ch1":{
            "value":"&freeSpins=1",
            "description":"Free Spins"
        },
        "ch2":{
            "value":"&seed=1",
            "description":"Seed"
        }
    }
}
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
        "color": "0xFFD700",
        "tickBase": 5,
        "alpha": 1,
        "pointToPointSpeed": .5,
        "duration": 30,
        "showWinWithSmbColor": true,
        "multipleAnimation": [true, true, true, true, true, true, false, false, false, true, true, true],
        "lineColours": [0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff],
    }
}
var paytableAssets = {

    "pages": [

        //Game guide object
        {
            "gameguide": true,
            "title": "Western Wilds Game Rules",
            "rtp": [

                "95.8",
                "95.8",
                "95.8"

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
                            "bg": "westernWilds/img/symbol-00.png", //symbol image
                            "payout_values": true //Whether symbol has payout values

                        },

                        {

                            "id": "symbol_01",
                            "bg": "westernWilds/img/symbol-01.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_02",
                            "bg": "westernWilds/img/symbol-02.png",
                            "payout_values": true

                        }


                    ],

                    [

                        {

                            "id": "symbol_03",
                            "bg": "westernWilds/img/symbol-03.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_04",
                            "bg": "westernWilds/img/symbol-04.png",
                            "payout_values": true

                        }

                    ],

                    [
                        {

                            "id": "symbol_05",
                            "bg": "westernWilds/img/symbol-05.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_06",
                            "bg": "westernWilds/img/symbol-06.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_07",
                            "bg": "westernWilds/img/symbol-07.png",
                            "payout_values": true

                        }

                    ],

                    [

                        {
                            "id": "symbol_08",
                            "bg": "westernWilds/img/symbol-08.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_09",
                            "bg": "westernWilds/img/symbol-09.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_10",
                            "bg": "westernWilds/img/symbol-10.png",
                            "payout_values": true

                        },

                    ],
                    [
                        {
                            "id": "symbol_12",
                            "bg": "westernWilds/img/symbol-12.png",
                            "payout_values": false,
                            "text": [
                                "Wild",
                                "Wild appears on the 2nd, 3rd, 4th and 5th reels. It substitutes for all symbols.",
                                "Wild appears on the 2nd, 3rd and 4th reels during Free Spins. It substitutes for all symbols.",
                            ]

                        }

                    ],

                    [


                        {
                            "id": "symbol_13",
                            "bg": "westernWilds/img/symbol-13.png",
                            "payout_values": false,
                            "text": [
                                "Expanding Wild",
                                "Can appear on base game only.",
                                "The expanding wild has a random chance to appear on the 2nd, 3rd and 4th reels.",
                                "They substitute for all symbols and multiple of them can appear simultaneously."
                            ]

                        },

                        {

                            "id" : "exp_screenshot",
                            "bg" : "westernWilds/img/paytable/expanding-wild.png",
                            "size": { //Optional field that sets image height & width in px
                                "height": "260",
                                "width":  "95"

                            }

                        },
                    ],

                    [

                        {

                            "id" : "tumbling",
                            "text": [
                                "TNT"
                            ],

                        }

                    ],
                    [

                        {

                            "id": "TNT",
                            "bg": "westernWilds/img/symbol-11.png",
                            "text": [
                                "TNT symbol can appear on base game only.",
                                "It explodes turning into a Wild or Expanding Wild.",
                                "After the explosion can triggers further explosions to turn up to 3 symbols into Wilds.",
                                "Exploded TNT will activates the TNT side meter.",
                                "3 TNTs on the same winning sequence awards 8 Free Spins."
                            ]
                        },



                    ],

                    [

                        {

                            "id" : "fs",
                            "text": [
                                "Free Spins"
                            ],

                        }

                    ],

                    [

                        {
                            "id" : "FSStart",
                            "bg" : "westernWilds/img/paytable/tntScreenshot.png",

                            "text": [
                                "Freespins are reached by having 3 TNTs on the side meter." +
                                "The base free spin game is 8 free spins with no starting multiplier.",
                                "During Free Spins a conveyour belt move randomly placed safes 1 position to the left.",
                                "The leftmost position is where safes opens to reveal their prizes.",
                                "Blue safe: can give up to 3 Wilds.",
                                "Orange safe: can raise the multiplier up to x3.",
                                "Green safe: can give up to 5 additional Free Spins.",
                                "Red safe: can unlock up to 2 positions for each reel.",
                            ],
                            "size": { //Optional field that sets image height & width in px
                                "height": "300",
                                "width":  "150"

                            }

                        },

                        {

                            "id" : "safes_screenshot",
                            "bg" : "westernWilds/img/paytable/safes.png",
                            "size": { //Optional field that sets image height & width in px
                                "height": "60",
                                "width":  "300"

                            }

                        },
                    ],



                ]

            }

        },

        //Win Ways object
        {

            "win_ways": [ //key was previously symbol however need to differentiate between payout config & winways config

                //Each object represents an image, if you need more than 1 screenshot then just create another object (atm all text on winways screen is in first screenshot object)
                {

                    "bg": "westernWilds/img/paytable/winways.jpg",
                    "text": {

                        "value": [
                            "Green: Appears on each of the first 3 Reels. Appears twice on reel 2.  The payout is the value for 3x Green, multiplied by 1*2*1",
                            "This will be the total win before tumbles occur."

                        ]

                    }


                }

            ],

        }

    ]

}