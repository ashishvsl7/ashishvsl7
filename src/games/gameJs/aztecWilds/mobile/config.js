
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
        "sprite": "fonts/fontAztec.png",
        "font": "fonts/fontAztec.xml"
    },
    "multiBmpFont":{
        "sprite": "fonts/multiplyAztec.png",
        "font": "fonts/multiplyAztec.xml"
    }
}

var extScripts={
    "webfont": "15px FuturaPT-Heavy",
    "webfont1": "15px FuturaPT-Book",
    "webfont2": "15px MayanSquare"
}
var gameAssets = {
    "assets": {
        "icon0": "aztecWilds/img/symbol-00.png",
        "icon1": "aztecWilds/img/symbol-01.png",
        "icon2": "aztecWilds/img/symbol-02.png",
        "icon3": "aztecWilds/img/symbol-03.png",
        "icon4": "aztecWilds/img/symbol-04.png",
        "icon5": "aztecWilds/img/symbol-05.png",
        "icon6": "aztecWilds/img/symbol-06.png",
        "icon7": "aztecWilds/img/symbol-07.png",
        "bicon0": "aztecWilds/img/b-symbol-00.png",
        "bicon1": "aztecWilds/img/b-symbol-01.png",
        "bicon2": "aztecWilds/img/b-symbol-02.png",
        "bicon3": "aztecWilds/img/b-symbol-03.png",
        "bicon4": "aztecWilds/img/b-symbol-04.png",
        "bicon5": "aztecWilds/img/b-symbol-05.png",
        "bicon6": "aztecWilds/img/b-symbol-06.png",
        "bicon7": "aztecWilds/img/b-symbol-07.png",
        "bicon8": "aztecWilds/img/b-symbol-08.png",
        "bicon9": "aztecWilds/img/b-symbol-09.png",
        "bicon10": "aztecWilds/img/b-symbol-10.png",
        "bicon11": "aztecWilds/img/b-symbol-11.png",
        "bicon12": "aztecWilds/img/b-symbol-12.png",
        "bicon13": "aztecWilds/img/b-symbol-13.png",
        "icon8": "aztecWilds/img/symbol-08.png",
        "icon9": "aztecWilds/img/symbol-09.png",
        "icon10": "aztecWilds/img/symbol-10.png",
        "icon11": "aztecWilds/img/symbol-11.png",
        "icon12": "aztecWilds/img/symbol-12.png",
        "icon13": "aztecWilds/img/symbol-13.png",
        "icon14":"aztecWilds/img/symbol-12-expanded-01.png",
        "icon15":"aztecWilds/img/symbol-12-expanded-02.png",
        "icon16":"aztecWilds/img/symbol-12-expanded-03.png",
        "icon17":"aztecWilds/img/symbol-12-expanded-04.png",
        "win-glow":"aztecWilds/img/win-glow.png",
        "fsHeading":"aztecWilds/img/free-spin-heading.png",
        "bottomBar": "gui/message-bar.png",
        "bgPanel": "aztecWilds/img/bgPanel.png",
        "bgPanelGame": "aztecWilds/img/bgPanel.png",
        "bgPreview1":"aztecWilds/img/intro-1.png",
        "bgPreview2":"aztecWilds/img/intro-2.png",
        "bgPreview3":"aztecWilds/img/intro-3.png",
        "freeRoundsPanel":"aztecWilds/img/free-rounds.png",
        "bgAlpha": "aztecWilds/img/alpha.png",
        "bgBlack": "aztecWilds/img/black.png",
        "bigWin":"aztecWilds/img/big-win.png",
        "superWin":"aztecWilds/img/super-bigwin.png",
        "megaWin":"aztecWilds/img/mega-bigwin.png",
        "bg_r": "aztecWilds/img/bg/base-right.jpg",
        "bg_l": "aztecWilds/img/bg/base-left.jpg",
        "bg_b": "aztecWilds/img/bg/base-bottom.jpg",
        "bg_t": "aztecWilds/img/bg/base-top.jpg",
        "bg_m": "aztecWilds/img/bg/base-main.jpg",
        "bg_r_FS": "aztecWilds/img/bg/base-right-fs.jpg",
        "bg_l_FS": "aztecWilds/img/bg/base-left-fs.jpg",
        "bg_b_FS": "aztecWilds/img/bg/base-bottom-fs.jpg",
        "bg_t_FS": "aztecWilds/img/bg/base-top-fs.jpg",
        "bg_m_FS": "aztecWilds/img/bg/base-main.jpg",
        "buttonBg":"gui/generic/img/desktop/png/cp-info-bar.png",
        "volOnButton": "gui/btnVolOn.png",
        "volOffButton": "gui/btnVolOff.png",
        "freeSpinPanel":"aztecWilds/img/free-spins.png",
        "logo":"aztecWilds/img/logo.png"
    },
    "localizedAssets":{
        "graphAsset": {
        }
    },
    "buttonsSpriteSheet": {
        "container-btn": {
            "sprite": "aztecWilds/img/game-btn.png",
            "json": "aztecWilds/img/game-btn.png",
            "w": 210,
            "h": 66
        },
        "yesButton": {
            "sprite": "aztecWilds/img/yes-btn.png",
            "json": "aztecWilds/img/yes-btn.png",
            "w": 54,
            "h": 44
        },
        "noButton": {
            "sprite": "aztecWilds/img/no-btn.png",
            "json": "aztecWilds/img/no-btn.png",
            "w": 54,
            "h": 44
        },
        "check": {
            "sprite": "aztecWilds/img/radio-btns.png",
            "json": "aztecWilds/img/radio-btns.png",
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
            "json": "aztecWilds/img/anim/symbol-00.json",
            "sprite": "aztecWilds/img/anim/symbol-00.png"
        },
        "anim1": {
            "json": "aztecWilds/img/anim/symbol-01.json",
            "sprite": "aztecWilds/img/anim/symbol-01.png"
        },
        "anim2": {
            "json": "aztecWilds/img/anim/symbol-02.json",
            "sprite": "aztecWilds/img/anim/symbol-02.png"
        },
        "anim3": {
            "json": "aztecWilds/img/anim/symbol-03.json",
            "sprite": "aztecWilds/img/anim/symbol-03.png"
        },
        "anim4": {
            "json": "aztecWilds/img/anim/symbol-04.json",
            "sprite": "aztecWilds/img/anim/symbol-04.png"
        },
        "anim5": {
            "json": "aztecWilds/img/anim/symbol-05.json",
            "sprite": "aztecWilds/img/anim/symbol-05.png"
        },
        "anim6": {
            "json": "aztecWilds/img/anim/symbol-06.json",
            "sprite": "aztecWilds/img/anim/symbol-06.png"
        },
        "anim7": {
            "json": "aztecWilds/img/anim/symbol-07.json",
            "sprite": "aztecWilds/img/anim/symbol-07.png"
        },
        "anim8": {
            "json": "aztecWilds/img/anim/symbol-08.json",
            "sprite": "aztecWilds/img/anim/symbol-08.png"
        },
        "anim9": {
            "json": "aztecWilds/img/anim/symbol-09.json",
            "sprite": "aztecWilds/img/anim/symbol-09.png"
        },
        "anim10": {
            "json": "aztecWilds/img/anim/symbol-10.json",
            "sprite": "aztecWilds/img/anim/symbol-10.png"
        },
        "anim11": {
            "json": "aztecWilds/img/anim/symbol-11.json",
            "sprite": "aztecWilds/img/anim/symbol-11.png"
        },
        "anim13": {
            "json": "aztecWilds/img/anim/symbol-13.json",
            "sprite": "aztecWilds/img/anim/symbol-13.png"
        },
        "anim17": {
            "json": "aztecWilds/img/anim/symbol-12-d.json",
            "sprite": "aztecWilds/img/anim/symbol-12-d.png"
        },
        "anim16": {
            "json": "aztecWilds/img/anim/symbol-12-l.json",
            "sprite": "aztecWilds/img/anim/symbol-12-l.png"
        },
        "anim15": {
            "json": "aztecWilds/img/anim/symbol-12-i.json",
            "sprite": "aztecWilds/img/anim/symbol-12-i.png"
        },
        "anim14": {
            "json": "aztecWilds/img/anim/symbol-12-w.json",
            "sprite": "aztecWilds/img/anim/symbol-12-w.png"
        },

        "tumble-smoke":{
            "json": "aztecWilds/img/anim/tumble-smoke.json",
            "sprite": "aztecWilds/img/anim/tumble-smoke.png"
        },
        "winglow":{
            "json": "aztecWilds/img/anim/winglow.json",
            "sprite": "aztecWilds/img/anim/winglow.png"
        },
        "shamrock_5":{
            "json": "aztecWilds/img/anim/side-feature-gold-00.json",
            "sprite": "aztecWilds/img/anim/side-feature-gold-00.png"
        },
        "shamrock_6":{
            "json": "aztecWilds/img/anim/side-feature-gold-01.json",
            "sprite": "aztecWilds/img/anim/side-feature-gold-01.png"
        },
        "shamrock_7":{
            "json": "aztecWilds/img/anim/side-feature-gold-02.json",
            "sprite": "aztecWilds/img/anim/side-feature-gold-02.png"
        },
        "shamrock_8":{
            "json": "aztecWilds/img/anim/side-feature-gold-03.json",
            "sprite": "aztecWilds/img/anim/side-feature-gold-03.png"
        },
        "shamrock_1":{
            "json": "aztecWilds/img/anim/side-feature-colour-00.json",
            "sprite": "aztecWilds/img/anim/side-feature-colour-00.png"
        },
        "shamrock_2":{
            "json": "aztecWilds/img/anim/side-feature-colour-01.json",
            "sprite": "aztecWilds/img/anim/side-feature-colour-01.png"
        },
        "shamrock_3":{
            "json": "aztecWilds/img/anim/side-feature-colour-02.json",
            "sprite": "aztecWilds/img/anim/side-feature-colour-02.png"
        },
        "shamrock_4":{
            "json": "aztecWilds/img/anim/side-feature-colour-03.json",
            "sprite": "aztecWilds/img/anim/side-feature-colour-03.png"
        },
        "medallionBg":{
            "json": "aztecWilds/img/anim/golden-crack.json",
            "sprite": "aztecWilds/img/anim/golden-crack.png"
        },
        "wildReel": {
            "json": "aztecWilds/img/anim/symbol-12-exp.json",
            "sprite": "aztecWilds/img/anim/symbol-12-exp.png"
        },
        "rainBowBW":{
            "json": "aztecWilds/img/anim/big-win-rainbow-reveal.json",
            "sprite": "aztecWilds/img/anim/big-win-rainbow-reveal.png"
        },
        "part-1": {
            "json": "aztecWilds/img/anim/bronze-coin.json",
            "sprite": "aztecWilds/img/anim/bronze-coin.png"
        },
        "part-2": {
            "json": "aztecWilds/img/anim/silver-coin.json",
            "sprite": "aztecWilds/img/anim/silver-coin.png"
        },
        "part-3": {
            "json": "aztecWilds/img/anim/gold-coin.json",
            "sprite": "aztecWilds/img/anim/gold-coin.png"
        },
        "f-part-1": {
            "json": "aztecWilds/img/anim/bronze-coin-frwrd.json",
            "sprite": "aztecWilds/img/anim/bronze-coin-frwrd.png"
        },
        "f-part-2": {
            "json": "aztecWilds/img/anim/silver-coin-frwrd.json",
            "sprite": "aztecWilds/img/anim/silver-coin-frwrd.png"
        },
        "f-part-3": {
            "json": "aztecWilds/img/anim/gold-coin-frwrd.json",
            "sprite": "aztecWilds/img/anim/gold-coin-frwrd.png"
        }
    },
    "importantSounds": {
        "spinClick": {
            "name": "aztecWilds/sounds/spinClick.mp3",
            "volume": .1
        },
        "reelFall": {
            "name": "aztecWilds/sounds/reelSound.mp3",
            "volume":1
        },
        "reelAppear": {
            "name": "aztecWilds/sounds/reelStop.mp3",
            "volume":1
        },
        "scroll": {
            "name": "aztecWilds/sounds/scroll.mp3",
            "volume": .7
        },
        "iConLight": {
            "name": "aztecWilds/sounds/iconPop.mp3",
            "volume": 1.5
        },
        "tumble": {
            "name": "aztecWilds/sounds/tumbling.mp3",
            "volume": 1.5
        },
        "coins": {
            "name": "aztecWilds/sounds/coins.mp3",
            "volume": 1
        },
        "shamrockPop": {
            "name": "aztecWilds/sounds/shamrockPop.mp3",
            "volume": 1
        },

    },
    "bgImportantSounds":{
        "bgSlot": {
            "name": "aztecWilds/sounds/bg_layer1.mp3",
            "volume": 3,
            "marker":true
        },
        "bgFs": {
            "name": "aztecWilds/sounds/bgFs_layer1.mp3",
            "volume": 2,
            "marker":true
        }
    },
    "sounds": {
        "click": {
            "name": "aztecWilds/sounds/click.mp3",
            "volume": .3
        },
        "smbWin_0": {
            "name": "aztecWilds/sounds/smbWin_0.mp3",
            "volume": 2
        },
        "shamrockWin": {
            "name": "aztecWilds/sounds/shamrockPop.mp3",
            "volume": 3
        },
        "smbWin_1": {
            "name": "aztecWilds/sounds/smbWin_1.mp3",
            "volume": 1.3
        },
        "smbWin_2": {
            "name": "aztecWilds/sounds/smbWin_2.mp3",
            "volume": 1.3
        },
        "smbWin_3": {
            "name": "aztecWilds/sounds/smbWin_3.mp3",
            "volume": 1.3
        },
        "smbWin_4": {
            "name": "aztecWilds/sounds/smbWin_4.mp3",
            "volume": 1.3
        },
        "smbWin_5": {
            "name": "aztecWilds/sounds/smbWin_5.mp3",
            "volume": 1.3
        },
        "smbWin_6": {
            "name": "aztecWilds/sounds/smbWin_6.mp3",
            "volume": 1.3
        },
        "smbWin_7": {
            "name": "aztecWilds/sounds/smbWin_7.mp3",
            "volume": 1.3
        },
        "smbWin_8": {
            "name": "aztecWilds/sounds/smbWin_8.mp3",
            "volume": 1.3
        },
        "smbWin_9": {
            "name": "aztecWilds/sounds/smbWin_9.mp3",
            "volume": 1.3
        },
        "smbWin_10": {
            "name": "aztecWilds/sounds/smbWin_10.mp3",
            "volume": 1.3
        },
        "smbWin_11": {
            "name": "aztecWilds/sounds/smbWin_10.mp3",
            "volume": 1.3
        },
        "wildReel":{
            "name": "aztecWilds/sounds/wildReel.mp3",
            "volume": 1
        },
        "smbWin_13": {
            "name": "aztecWilds/sounds/sticky.mp3",
            "volume": .8
        },
        "multiplier": {
            "name": "aztecWilds/sounds/centralWin/win1.mp3",
            "volume": 2
        },
        "winBg_0": {
            "name": "aztecWilds/sounds/centralWin/win1.mp3",
            "volume": 0
        },
        "winBg_1": {
            "name": "aztecWilds/sounds/centralWin/win2.mp3",
            "volume":  1.3
        },
        "winBg_2": {
            "name": "aztecWilds/sounds/centralWin/win3.mp3",
            "volume":  1.3
        },
        "winBg_3": {
            "name": "aztecWilds/sounds/centralWin/win4.mp3",
            "volume":  1.3
        },
        "winBg_4": {
            "name": "aztecWilds/sounds/centralWin/win5.mp3",
            "volume":  1
        },
        "winBg_5": {
            "name": "aztecWilds/sounds/centralWin/win6.mp3",
            "volume":  1
        },
        "winBg_6": {
            "name": "aztecWilds/sounds/centralWin/bigWin_Full.mp3",
            "volume":  1
        },
        "winBg_7": {
            "name": "aztecWilds/sounds/centralWin/superbigWin_Full.mp3",
            "volume":  1.2
        },
        "winBg_8": {
            "name": "aztecWilds/sounds/centralWin/megabigWin_Full.mp3",
            "volume": 1.5
        },
        "winBgS_6": {
            "name": "aztecWilds/sounds/centralWin/bigWin.mp3",
            "volume": 1
        },
        "winBgS_7": {
            "name": "aztecWilds/sounds/centralWin/superBigWin.mp3",
            "volume":  1.2
        },
        "winBgS_8": {
            "name": "aztecWilds/sounds/centralWin/megaBigWin.mp3",
            "volume": 1.5
        },
        "fsWon": {
            "name": "aztecWilds/sounds/introFs.mp3",
            "volume": 1.5
        },
        "incWin": {
            "name": "aztecWilds/sounds/counter.mp3",
            "volume": .6,
            "loop": true
        },
        "line": {
            "name": "aztecWilds/sounds/coinsDrop1.mp3",
            "volume": .6
        },
        "line1": {
            "name": "aztecWilds/sounds/coinsDrop2.mp3",
            "volume": .6
        },
        "winPanel": {
            "name": "aztecWilds/sounds/winScreen.mp3",
            "volume": 1.1
        },
        "multiplier_1":{
            "name": "aztecWilds/sounds/multiplier_layer1.mp3",
            "volume": 1.5
        },
        "multiplier_2":{
            "name": "aztecWilds/sounds/multiplier_layer2.mp3",
            "volume": 1.5
        },
        "multiplier_3":{
            "name": "aztecWilds/sounds/multiplier_layer3.mp3",
            "volume": 1.5
        },
        "multiplier_4":{
            "name": "aztecWilds/sounds/multiplier_layer3.mp3",
            "volume": 1.5
        },
        "multiplier_5":{
            "name": "aztecWilds/sounds/multiplier_layer3.mp3",
            "volume": 1.5
        },
        "sideF1":{
            "name": "aztecWilds/sounds/sideFeature_progress1.mp3",
            "volume": 1
        },
        "sideF2":{
            "name": "aztecWilds/sounds/sideFeature_progress2.mp3",
            "volume": 1
        },
        "sideF3":{
            "name": "aztecWilds/sounds/sideFeature_progress3.mp3",
            "volume": 1.2
        },
        "sideF14":{
            "name": "aztecWilds/sounds/sideFeature_progress4.mp3",
            "volume": 1.3
        },
        "sideF0":{
            "name": "aztecWilds/sounds/sideFeature_fail.mp3",
            "volume": 1.3
        }
    },
    "bgSounds": {
        "bgSlot2": {
            "name": "aztecWilds/sounds/bg_layer2.mp3",
            "volume": 0,
            "marker":true
        },
        "bgSlot3": {
            "name": "aztecWilds/sounds/bg_layer3.mp3",
            "volume": 0,
            "marker":true
        },
        "bgSlot4": {
            "name": "aztecWilds/sounds/bg_layer4.mp3",
            "volume": 0,
            "marker":true
        },
        "bgSlot5": {
            "name": "aztecWilds/sounds/bg_layer5.mp3",
            "volume": 0,
            "marker":true
        },
        "bgSlot6": {
            "name": "aztecWilds/sounds/bg_layer6.mp3",
            "volume": 0,
            "marker":true
        },
        "bgFs1": {
            "name": "aztecWilds/sounds/bgFs_layer2.mp3",
            "volume": 0,
            "marker":true
        },
        "bgFs2": {
            "name": "aztecWilds/sounds/bgFs_layer3.mp3",
            "volume": 0,
            "marker":true
        }
    }
}
var guiConfig = {
    "credits": ["cash","credits"]
}
var displayManager = {
    "render":Phaser.AUTO,
    "groups": {
        "bg": {
            "visible":false,
            "graphAsset": {
                "bg": {
                    "name": "bg_r",
                    "portrait": true,
                    "x": 970,
                    "y": 110
                },
                "bg1": {
                    "name": "bg_l",
                    "portrait": true,
                    "x": 0,
                    "y": 110
                }
            }
        },
        "frameFS": {
            "visible":false,
            "graphAsset": {
                "bgf": {
                    "name": "bg_m_FS",
                    "portrait": true,
                    "x": 256,
                    "y": 72
                }
            }
        },
        "bgFS": {
            "visible":false,
            "graphAsset": {
                "bg": {
                    "name": "bg_r_FS",
                    "portrait": true,
                    "x": 970,
                    "y": 110,
                },
                "bg1": {
                    "name": "bg_l_FS",
                    "portrait": true,
                    "x": 0,
                    "y": 110,
                }
            }
        },
        "frame": {
            "visible": false,
            "graphAsset": {
                "bg4": {
                    "name": "bg_m",
                    "portrait": true,
                    "x": 310,
                    "y": 110
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
                    "y": 632,
                    "portrait": true
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
                    "name": "bg_b_FS",
                    "portrait": true,
                    "x": 0,
                    "y": 632
                },
                "bg3": {
                    "name": "bg_t_FS",
                    "portrait": true,
                    "x": 0,
                    "y": 0
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
        "fsFire":{
            "visible":false,
            "animAsset": {
                "s1": {
                    "name": "medallionBg",
                    "x": 140,
                    "y": 196,
                    "anchorX": .5,
                    "anchorY": .5,
                    "loop":true,
                    "fps":18
                }
            }
        },
        "freeSpinAccumulator": {
            "visible": false,
            "maxFs": 12,
            "graphAsset": {
                "shamrock_1": {
                    "name": "shamrock_1",
                    "x": 140,
                    "y": 196,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "shamrock_2": {
                    "name": "shamrock_2",
                    "x": 140,
                    "y": 196,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "shamrock_3": {
                    "name": "shamrock_3",
                    "x": 140,
                    "y": 196,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "shamrock_4": {
                    "name": "shamrock_4",
                    "x": 140,
                    "y": 196,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "shamrock_5": {
                    "name": "shamrock_5",
                    "x": 140,
                    "y": 196,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "shamrock_6": {
                    "name": "shamrock_6",
                    "x": 140,
                    "y": 196,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "shamrock_7": {
                    "name": "shamrock_7",
                    "x": 140,
                    "y": 196,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "shamrock_8": {
                    "name": "shamrock_8",
                    "x": 140,
                    "y": 196,
                    "anchorX": .5,
                    "anchorY": .5
                },
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
                    "y": 65,
                    "anchorX":.5,
                    "anchorY":.5
                }
            },
            "_emitters": {
                "emitter": [{ "pos": {"x": 0, "y": 0}, "posVar": {"x": -125, "y": 0}, "speed": 66, "speedVar": 195.6372884671819, "angle": -168, "angleVar": -40, "life": 1, "lifeVar": 16.89594764034753, "radius": 14.205516971534776, "radiusVar": 5, "textureAdditive": true, "startScale": 3.023485367220084, "startScaleVar": 0, "endScale": 0.6224822814864879, "endScaleVar": 0, "startColor": [51, 103.29411764705887, 178, 1], "startColorVar": [0, 0, 51, 0.1], "endColor": [0, 0, 0, 1], "endColorVar": [0, 0, 0, 0], "colorList": [], "gravity": {"x": 87, "y": -82}, "radialAccel": 264.76394582625653, "radialAccelVar": 0, "tangentialAccel": 149.16009355019446, "tangentialAccelVar": -197.65146327799158, "totalParticles": 169, "emissionRate": 463, "xEquation": "", "yEquation": "", "textureEnabled": true, "active": true, "duration": null, "id": "aaa", "aFactor": {"x": -43.1, "y": 0}, "xFactor": {"x": -0.4, "y": 0}, "border": {"top": 500, "left": 500, "bottom": 307, "right": 466.86171111486584}, "zIndex": 0}]
            },
            "texts": {
                "frLabel": {
                    "x": 128,
                    "y": 402,
                    "fill": "#ffe424",
                    "font": "20px Futura ,Arial",
                    "text": "Free Rounds:",
                    "anchorX": 0.5,
                    "anchorY": 0.5
                },
                "frValue": {
                    "x": 130,
                    "y": 518,
                    "bmpFont": "multiBmpFont",
                    "size": "140",
                    "text": "12",
                    "anchorX": 0.5,
                    "anchorY": 0.5
                },
                "frTotWonLabel": {
                    "x": 1105,
                    "y": 392,
                    "fill": "#ffe424",
                    "font": "20px Futura ,Arial",
                    "text": "Total won:",
                    "anchorX": 0.5,
                    "anchorY": 0.5
                },
                "frTotWonValue": {
                    "x": 1105,
                    "y": 413,
                    "fill": "#c5ac1f",
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
                    "name": "freeSpinPanel",
                    "x": 640,
                    "y": 0,
                    "anchorX": .5
                }
            },
            "texts": {
                "fsLabel": {
                    "x": 128,
                    "y": 402,
                    "fill": "#ffe424",
                    "font": "20px Futura ,Arial",
                    "text": "Free Spins",
                    "anchorX": 0.5,
                    "anchorY": 0.5
                },
                "fsValue": {
                    "x": 130,
                    "y": 518,
                    "bmpFont": "multiBmpFont",
                    "size": "140",
                    "text": "12",
                    "anchorX": 0.5,
                    "anchorY": 0.5
                },
                "totWonLabel": {
                    "x": 1105,
                    "y": 392,
                    "fill": "#ffe424",
                    "font": "20px Futura ,Arial",
                    "text": "Total won",
                    "anchorX": 0.5,
                    "anchorY": 0.5
                },
                "totWonValue": {
                    "x": 1105,
                    "y": 413,
                    "fill": "#c5ac1f",
                    "font": "20px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5,
                    "anchorY": 0.5
                },
                "fsMultValue":{
                    "x": 1142,
                    "y": 523,
                    "bmpFont": "multiBmpFont",
                    "size": "115",
                    "text": "x20",
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
                    "y": 0,
                    "alpha": .5
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
                    "y": 230,
                    "fill": "#ffffff",
                    "font": "28px FuturaPT-Book",
                    "text": "You won",
                    "anchorX": .5
                },
                "fsValue1": {
                    "x": 640,
                    "y": 280,
                    "fill": "#ffffff",
                    "font": "28px FuturaPT-Book",
                    "text": "5",
                    "anchorX": .5
                },
                "fsWLabel1": {
                    "x": 640,
                    "y": 330,
                    "fill": "#ffffff",
                    "font": "28px FuturaPT-Book",
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
                "rainBow":{
                    "name": "rainBowBW",
                    "x": 635,
                    "y": 194,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
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
                    "size": "65",
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
                    "name": "bgBlack",
                    "x": -500,
                    "y": -500,
                    "width":1500,
                    "height":2500,
                    "alpha": 1,
                },
                "bgPreview1": {
                    "name": "bgPreview1",
                    "x": 60,
                    "y": 25,
                    "texts": {
                        "pw1": {
                            "x": 190,
                            "y": 30,
                            "font": "60px MayanSquare,Arial, Helvetica sans-serif",
                            "fill": "#f5a622",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "text": "Free Spins",
                            "anchorX": 0.5,
                        },
                        "pw2": {
                            "x": 197,
                            "y": 480,
                            "font": "22px MayanSquare,Arial, Helvetica sans-serif",
                            "fill": "#f5a622",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align": "center",
                            "text": "Up to 20 Free Spins with x6 starting Multiplier",
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
                            "y": 470,
                            "font": "36px MayanSquare,Arial, Helvetica sans-serif",
                            "fill": "#f5a622",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align": "center",
                            "text": "Every Win Triggers a Tumble",
                            "anchorX": 0.5,
                        },
                        "pw31": {
                            "x": 190,
                            "y": 30,
                            "font": "60px MayanSquare,Arial, Helvetica sans-serif",
                            "fill": "#f5a622",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align": "center",
                            "text": "Tumbling",
                            "anchorX": 0.5,
                        }
                    }
                },
                "bgPreview3": {
                    "name": "bgPreview3",
                    "x": 840,
                    "y": 25,
                    "texts": {
                        "pw40": {
                            "x": 190,
                            "y": 30,
                            "font": "60px MayanSquare,Arial, Helvetica sans-serif",
                            "fill": "#f5a622",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align": "center",
                            "text": "Wilds",
                            "anchorX": 0.5,
                        },
                        "pw4": {
                            "x": 120,
                            "y": 565,
                            "font": "22px MayanSquare,Arial, Helvetica sans-serif",
                            "fill": "#f5a622",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align": "center",
                            "text": "Expanding",
                            "anchorX": 0.5,
                        },
                        "pw5": {
                            "x": 270,
                            "y": 470,
                            "font": "36px MayanSquare,Arial, Helvetica sans-serif",
                            "fill": "#f5a622",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align": "center",
                            "text": "Sticky",
                            "anchorX": 0.5,
                        },
                        "pw6": {
                            "x": 270,
                            "y": 240,
                            "font": "36px MayanSquare,Arial, Helvetica sans-serif",
                            "fill": "#f5a622",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align": "center",
                            "text": "Normal",
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
        }
    }
}

var ReelConfig = {
    "newUI":true,
    "isMobile":true,
    "transparentUI":true,
    "slotEngine":"AztecEngine",
    "engineNumbers":0,
    "log":true,
    "canSwipe":false,
    "comment_preview":"enable feature preview screen",
    "preview":true,
    "previewTout":30000,
    "spinType": "TotallyTumblingSpin",
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
    "lineType": "TumblingWinnings",
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
            "reelSecondMovementTime":.36,
            "reelLoopInterval":.14,
            "reelPreMovement": 4,
            "reelPreMovementTime": .21,
            "reelBaseInterval": 5,
            "reelStopInterval": 1,
            "reelSpinBounceMeasure": 40,
            "reelSpinBounceTime": .28,
            "reelSpinBounceForce": 1.2,
            "minimumTime":1.5
        },
        "de":{
            "stopEnabled":false,
            "reelSecondMovementTime":.42,
            "reelLoopInterval":.17,
            "reelPreMovement": 4,
            "reelPreMovementTime": .3,
            "reelBaseInterval": 5,
            "reelStopInterval": 1,
            "reelSpinBounceMeasure": 40,
            "reelSpinBounceTime": .30,
            "reelSpinBounceForce": 1.2,
            "minimumTime":3.2
        },
        "default":{
            "stopEnabled":true,
            "reelSecondMovementTime":.25,
            "reelLoopInterval":.05,
            "reelPreMovement": 4,
            "reelPreMovementTime": .1,
            "reelBaseInterval": 3,
            "reelStopInterval": 1,
            "reelSpinBounceMeasure": 40,
            "reelSpinBounceTime": .30,
            "reelSpinBounceForce": 1.2,
            "minimumTime":.6
        }
    },
    "numIcon": 13,
    "loadTout": 30,
    "credits": "5000",
    "bet": "0.50",
    "animDelayAfterWild":1500,
    "freeRounds":"normal",
    "freeSpins":"IrishFreeSpins",
    "_fsIcon": 1,
    "fsSpinDelay":750,
    "minFsSmbs":3,
    "scatterIcon": 10,
    "scatterType": "SubstScatter",
    "_twinReelsFeature":"normal",
    "wildType": "TumblingWildReel",
    "wildNum": [12],
    "wildReelOrigin":2,
    "wildShowFirstAnim":true,
    "animDelayAfterWild":2000,
    "wildDelay":0,
    "winTxtClasses": [1, 2, 5, 10, 20, 50, 100, 300, 500, 1000],
    "smb_colors":[0xff33cc,0xcc33ff,0x0066ff,0x00ff99,0xffcc00,0xff33cc,0xcc33ff,0x0066ff,0x00ff99,0xffcc00,0xffcc00],
    "smbMinAnimTime":[.5,.5,.5,.5,.5,.5,.5,1.5,.5,.5],
    "muteDuringWins":true,
    "keepShowingAnimation":true,
    "additionalPreText":"",
    "additionalPostText":"",
    "reel": {
        "deltaX_Portrait":175,
        "deltaY_Portrait":280,
        "deltaX_0": 310,
        "deltaX": 132,
        "deltaY_0": 638,
        "deltaY": 132
    },
    "icon": {
        "x": 0,
        "y": 0,
        "width": 132,
        "height": 132
    },
    "winningcombinations": true
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
        "lineColours": [0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff],
    }
}
var paytableAssets = {

    "pages": [

        //Game guide object
        {
            "gameguide": true,
            "title": "Aztec Wilds Game Rules",
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
                            "bg": "aztecWilds/img/symbol-00.png", //symbol image
                            "payout_values": true //Whether symbol has payout values

                        },

                        {

                            "id": "symbol_01",
                            "bg": "aztecWilds/img/symbol-01.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_02",
                            "bg": "aztecWilds/img/symbol-02.png",
                            "payout_values": true

                        }


                    ],

                    [

                        {

                            "id": "symbol_03",
                            "bg": "aztecWilds/img/symbol-03.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_04",
                            "bg": "aztecWilds/img/symbol-04.png",
                            "payout_values": true

                        }

                    ],

                    [
                        {

                            "id": "symbol_05",
                            "bg": "aztecWilds/img/symbol-05.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_06",
                            "bg": "aztecWilds/img/symbol-06.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_07",
                            "bg": "aztecWilds/img/symbol-07.png",
                            "payout_values": true

                        }

                    ],

                    [

                        {
                            "id": "symbol_08",
                            "bg": "aztecWilds/img/symbol-08.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_09",
                            "bg": "aztecWilds/img/symbol-09.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_10",
                            "bg": "aztecWilds/img/symbol-10.png",
                            "payout_values": true

                        },

                    ],
                    [
                        {
                            "id": "symbol_11",
                            "bg": "aztecWilds/img/symbol-11.png",
                            "payout_values": false,
                            "text": [
                                "Wild",
                                "Wild appears on the 2nd, 3rd, 4th and 5th reels. It substitutes for all symbols. Wilds have a higher chance of appearing on tumbles.",
                            ]

                        }

                    ],

                    [
                        {
                            "id": "symbol_13",
                            "bg": "aztecWilds/img/symbol-13.png",
                            "payout_values": false,
                            "text": [
                                "Sticky Wild",
                                "The sticky wild will only appear on the middle reel and will not disappear when it is part of a winning combination. It will still fall down if symbols below it are part of a winning combination."
                            ]

                        },


                    ],

                    [


                        {
                            "id": "symbol_12",
                            "bg": "aztecWilds/img/symbol-12.png",
                            "payout_values": false,
                            "text": [
                                "Expanding Wild",
                                "The expanding wild has a random chance to appear on the 2nd, 3rd, 4th and 5th reels. They substitute for all symbols and multiple of them can appear simultaneously."
                            ]

                        },

                        {

                            "id" : "exp_screenshot",
                            "bg" : "aztecWilds/img/paytable/expanding-wild.png",
                            "size": { //Optional field that sets image height & width in px
                                "height": "216",
                                "width":  "60"

                            }

                        },
                    ],

                    [

                        {

                            "id" : "tumbling",
                            "text": [
                                "Tumbling"
                            ],

                        }

                    ],
                    [

                        {

                            "id" : "tumble_screenshot",
                            "bg" : "aztecWilds/img/paytable/tumble.png",
                            "text": [
                                "Whenever a win way pays out the symbols are destroyed and all remaining symbols tumble down.",
                                "All destroyed symbols are replaced with symbols from higher up on the reels with a high chance of extra Wild appearing.",
                                "If the new symbols also form a win way they too will pay out and more symbols will tumble in to replace them, this will continue until no more Win Ways can be made."
                            ],
                            "size": { //Optional field that sets image height & width in px

                                "height": "216",
                                "width":  "300"

                            }

                        }

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
                            "bg" : "aztecWilds/img/paytable/feature_8_sectors.png",

                            "text": [
                                "Freespins are reached by having multiple successive tumbles. A minimum of 4 tumbles is required to trigger free spins. The base free spin game is 14 free spins with no starting multiplier. Each extra successive win after 4 awards extra freespins or multipliers, up to a maximum of 20 freespins and 5 starting multiplier"
                            ],
                            "size": { //Optional field that sets image height & width in px

                                "height": "210",
                                "width":  "150"

                            }

                        }
                    ],
                    [

                        {

                            "id" : "fs1",
                            "bg" : "aztecWilds/img/paytable/feature_4_sectors.png",
                            "size": { //Optional field that sets image height & width in px
                                "height": "210",
                                "width":  "150"

                            },
                            "text": [
                                "4 Successive Winnings Triggers 14 FS"
                            ],
                        },
                        {

                            "id" : "fs1",
                            "bg" : "aztecWilds/img/paytable/feature_5_sectors.png",
                            "size": { //Optional field that sets image height & width in px
                                "height": "210",
                                "width":  "150"

                            },
                            "text": [
                                "5 Successive Winnings Triggers 16 FS"
                            ],
                        }

                    ],
                    [
                        {

                            "id" : "fs1",
                            "bg" : "aztecWilds/img/paytable/feature_6_sectors.png",
                            "size": { //Optional field that sets image height & width in px
                                "height": "210",
                                "width":  "150"

                            },
                            "text": [
                                "6 Successive Winnings Triggers 16 FS + 2x Starting Multiplier"
                            ],
                        }
                    ],
                    [
                        {

                            "id" : "fs1",
                            "bg" : "aztecWilds/img/paytable/feature_7_sectors.png",
                            "size": { //Optional field that sets image height & width in px
                                "height": "210",
                                "width":  "150"

                            },
                            "text": [
                                "7 Successive Winnings Triggers 20 FS + 2x Starting Multiplier"
                            ],
                        },
                        {

                            "id" : "fs1",
                            "bg" : "aztecWilds/img/paytable/feature_8_sectors.png",
                            "size": { //Optional field that sets image height & width in px
                                "height": "210",
                                "width":  "150"

                            },
                            "text": [
                                "8 Successive Winnings Triggers 20 FS + 5x Starting Multiplier"
                            ],
                        },


                    ],

                    [

                        {

                            "id" : "fs",
                            "text": [
                                "Free Spins game play"
                            ],

                        }

                    ],
                    [

                        {

                            "id" : "FSStart",
                            "text": [
                                "Inside free spins the game is similar to the base game except that each tumble increments the multiplier by 1. The multiplier applies to the current spin win. There is no sticky wild or expanding wild inside free spins."
                            ],
                            "size": { //Optional field that sets image height & width in px

                                "height": "257",
                                "width":  "100"

                            }

                        }

                    ],


                ]

            }

        },

        //Win Ways object
        {

            "win_ways": [ //key was previously symbol however need to differentiate between payout config & winways config

                //Each object represents an image, if you need more than 1 screenshot then just create another object (atm all text on winways screen is in first screenshot object)
                {

                    "bg": "aztecWilds/img/paytable/winways.png",
                    "text": {

                        "value": [
                            "J: Appears once on each 5 reels (including wild). So the payout is the flat value for 5x J, 10 coins",
                            "10: Appears on each 5 reels. Appears twice on 2nd, 3rd (including wild) and 5th reel, so payout is the value for 5x multiplied twice by 2. 15 * 2 * 2 * 2 = 120 coins."

                        ]

                    }

                }

            ],

        }

    ]

}