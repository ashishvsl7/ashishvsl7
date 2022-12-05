
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
    }
}

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
}

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
}

var bitmapFonts={
    "bmpFont":{
        "sprite": "fonts/fontIrish.png",
        "font": "fonts/fontIrish.xml"
    },
    "multiBmpFont":{
        "sprite": "fonts/multiplyerIrish.png",
        "font": "fonts/multiplyerIrish.xml"
    }
}

var extScripts={
    "webfont": "15px FuturaPT-Heavy",
    "webfont1": "15px FuturaPT-Book"
}
var gameAssets = {
    "assets": {
        "icon0": "rainbowGold/img/symbol-00.png",
        "icon1": "rainbowGold/img/symbol-01.png",
        "icon2": "rainbowGold/img/symbol-02.png",
        "icon3": "rainbowGold/img/symbol-03.png",
        "icon4": "rainbowGold/img/symbol-04.png",
        "icon5": "rainbowGold/img/symbol-05.png",
        "icon6": "rainbowGold/img/symbol-06.png",
        "icon7": "rainbowGold/img/symbol-07.png",
        "bicon0": "rainbowGold/img/b-symbol-00.png",
        "bicon1": "rainbowGold/img/b-symbol-01.png",
        "bicon2": "rainbowGold/img/b-symbol-02.png",
        "bicon3": "rainbowGold/img/b-symbol-03.png",
        "bicon4": "rainbowGold/img/b-symbol-04.png",
        "bicon5": "rainbowGold/img/b-symbol-05.png",
        "bicon6": "rainbowGold/img/b-symbol-06.png",
        "bicon7": "rainbowGold/img/b-symbol-07.png",
        "bicon8": "rainbowGold/img/b-symbol-08.png",
        "bicon9": "rainbowGold/img/b-symbol-09.png",
        "bicon10": "rainbowGold/img/b-symbol-10.png",
        "bicon11": "rainbowGold/img/b-symbol-11.png",
        "bicon12": "rainbowGold/img/b-symbol-12.png",
        "bicon13": "rainbowGold/img/b-symbol-13.png",
        "icon8": "rainbowGold/img/symbol-08.png",
        "icon9": "rainbowGold/img/symbol-09.png",
        "icon10": "rainbowGold/img/symbol-10.png",
        "icon11": "rainbowGold/img/symbol-11.png",
        "icon12": "rainbowGold/img/symbol-12.png",
        "icon13": "rainbowGold/img/symbol-13.png",
        "icon14":"rainbowGold/img/symbol-12-expanded-01.png",
        "icon15":"rainbowGold/img/symbol-12-expanded-02.png",
        "icon16":"rainbowGold/img/symbol-12-expanded-03.png",
        "icon17":"rainbowGold/img/symbol-12-expanded-04.png",
        "win-glow":"rainbowGold/img/win-glow.png",
        "fsHeading":"rainbowGold/img/free-spin-heading.png",
        "bottomBar": "gui/message-bar.png",
        "bgPanel": "rainbowGold/img/bgPanel.png",
        "bgPanelGame": "rainbowGold/img/bgPanel.png",
        "bgPreview":"rainbowGold/img/intro-page.png",
        "freeRoundsPanel":"rainbowGold/img/free-rounds.png",
        "bgAlpha": "rainbowGold/img/alpha.png",
        "bigWin":"rainbowGold/img/big-win.png",
        "superWin":"rainbowGold/img/super-bigwin.png",
        "megaWin":"rainbowGold/img/mega-bigwin.png",
        "bg_r": "rainbowGold/img/bg/base-right.png",
        "bg_l": "rainbowGold/img/bg/base-left.png",
        "bg_b": "rainbowGold/img/bg/base-bottom.png",
        "bg_t": "rainbowGold/img/bg/base-top.png",
        "bg_t_o":"rainbowGold/img/bg/base-main-overlay.png",
        "bg_m": "rainbowGold/img/bg/base-main.png",
        "bg_rFS": "rainbowGold/img/bg/base-right_FS.png",
        "bg_lFS": "rainbowGold/img/bg/base-left_FS.png",
        "bg_bFS": "rainbowGold/img/bg/base-bottom_FS.png",
        "bg_tFS": "rainbowGold/img/bg/base-top_FS.png",
        "bg_mFS": "rainbowGold/img/bg/base-main_FS.png",
        "buttonBg":"gui/generic/img/desktop/png/cp-info-bar.png",
        "volOnButton": "gui/btnVolOn.png",
        "volOffButton": "gui/btnVolOff.png",
        "freeSpinPanel":"rainbowGold/img/free-spins.png",
        "bgPt" : "rainbowGold/img/paytable/pt-base-complete.png",
        "slide_0": "rainbowGold/img/intro-01.png",
        "slide_1": "rainbowGold/img/intro-02.png",
        "slide_2": "rainbowGold/img/intro-03.png"
    },
    "localizedAssets":{
        "graphAsset": {
            "logo": {
                "lang": ["zs","ko","jp"],
                "img": "rainbowGold/img/logo"
            }
        }
    },
    "buttonsSpriteSheet": {
        "container-btn": {
            "sprite": "rainbowGold/img/game-btn.png",
            "json": "rainbowGold/img/game-btn.png",
            "w": 210,
            "h": 66
        },
        "yesButton": {
            "sprite": "rainbowGold/img/yes-btn.png",
            "json": "rainbowGold/img/yes-btn.png",
            "w": 54,
            "h": 44
        },
        "noButton": {
            "sprite": "rainbowGold/img/no-btn.png",
            "json": "rainbowGold/img/no-btn.png",
            "w": 54,
            "h": 44
        },
        "check": {
            "sprite": "rainbowGold/img/radio-btns.png",
            "json": "rainbowGold/img/radio-btns.png",
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
            "json": "rainbowGold/img/anim/symbol-00.json",
            "sprite": "rainbowGold/img/anim/symbol-00.png"
        },
        "anim1": {
            "json": "rainbowGold/img/anim/symbol-01.json",
            "sprite": "rainbowGold/img/anim/symbol-01.png"
        },
        "anim2": {
            "json": "rainbowGold/img/anim/symbol-02.json",
            "sprite": "rainbowGold/img/anim/symbol-02.png"
        },
        "anim3": {
            "json": "rainbowGold/img/anim/symbol-03.json",
            "sprite": "rainbowGold/img/anim/symbol-03.png"
        },
        "anim4": {
            "json": "rainbowGold/img/anim/symbol-04.json",
            "sprite": "rainbowGold/img/anim/symbol-04.png"
        },
        "anim5": {
            "json": "rainbowGold/img/anim/symbol-05.json",
            "sprite": "rainbowGold/img/anim/symbol-05.png"
        },
        "anim6": {
            "json": "rainbowGold/img/anim/symbol-06.json",
            "sprite": "rainbowGold/img/anim/symbol-06.png"
        },
        "anim7": {
            "json": "rainbowGold/img/anim/symbol-07.json",
            "sprite": "rainbowGold/img/anim/symbol-07.png"
        },
        "anim8": {
            "json": "rainbowGold/img/anim/symbol-08.json",
            "sprite": "rainbowGold/img/anim/symbol-08.png"
        },
        "anim9": {
            "json": "rainbowGold/img/anim/symbol-09.json",
            "sprite": "rainbowGold/img/anim/symbol-09.png"
        },
        "anim10": {
            "json": "rainbowGold/img/anim/symbol-10.json",
            "sprite": "rainbowGold/img/anim/symbol-10.png"
        },
        "anim11": {
            "json": "rainbowGold/img/anim/symbol-11.json",
            "sprite": "rainbowGold/img/anim/symbol-11.png"
        },
        "anim12": {
            "json": "rainbowGold/img/anim/symbol-12.json",
            "sprite": "rainbowGold/img/anim/symbol-12.png"
        },
        "anim13": {
            "json": "rainbowGold/img/anim/symbol-13.json",
            "sprite": "rainbowGold/img/anim/symbol-13.png"
        },
        "anim17": {
            "json": "rainbowGold/img/anim/symbol-12-d.json",
            "sprite": "rainbowGold/img/anim/symbol-12-d.png"
        },
        "anim16": {
            "json": "rainbowGold/img/anim/symbol-12-l.json",
            "sprite": "rainbowGold/img/anim/symbol-12-l.png"
        },
        "anim15": {
            "json": "rainbowGold/img/anim/symbol-12-i.json",
            "sprite": "rainbowGold/img/anim/symbol-12-i.png"
        },
        "anim14": {
            "json": "rainbowGold/img/anim/symbol-12-w.json",
            "sprite": "rainbowGold/img/anim/symbol-12-w.png"
        },
        "shamrock-pop":{
            "json": "rainbowGold/img/anim/shamrock-pop.json",
            "sprite": "rainbowGold/img/anim/shamrock-pop.png"
        },
        "tumble-smoke":{
            "json": "rainbowGold/img/anim/tumble-smoke.json",
            "sprite": "rainbowGold/img/anim/tumble-smoke.png"
        },
        "winglow":{
            "json": "rainbowGold/img/anim/winglow.json",
            "sprite": "rainbowGold/img/anim/winglow.png"
        },
        "cloverBg":{
            "json": "rainbowGold/img/anim/side-feature-scroll.json",
            "sprite": "rainbowGold/img/anim/side-feature-scroll.png"
        },
        "shamrock":{
            "json": "rainbowGold/img/anim/side-feature-shamrock.json",
            "sprite": "rainbowGold/img/anim/side-feature-shamrock.png"
        },
        "shamrockPop":{
            "json": "rainbowGold/img/anim/pop.json",
            "sprite": "rainbowGold/img/anim/pop.png"
        },
        "rainBow":{
            "json": "rainbowGold/img/anim/multiplyer-rainbow.json",
            "sprite": "rainbowGold/img/anim/multiplyer-rainbow.png"
        },
        "wildReel_0": {
            "json": "rainbowGold/img/anim/symbol-12-exp-pt1.json",
            "sprite": "rainbowGold/img/anim/symbol-12-exp-pt1.png"
        },
        "wildReel_1": {
            "json": "rainbowGold/img/anim/symbol-12-exp-pt2.json",
            "sprite": "rainbowGold/img/anim/symbol-12-exp-pt2.png"
        },
        "leperchaun":{
            "json": "rainbowGold/img/anim/leprechaun-01.json",
            "sprite": "rainbowGold/img/anim/leprechaun-01.png"
        },
        "leperchaunS":{
            "json": "rainbowGold/img/anim/leprechaun-02.json",
            "sprite": "rainbowGold/img/anim/leprechaun-02.png"
        },
        "leperchaunG":{
            "json": "rainbowGold/img/anim/leprechaun-03.json",
            "sprite": "rainbowGold/img/anim/leprechaun-03.png"
        },
        "goldLine":{
            "json": "rainbowGold/img/anim/star-scatter.json",
            "sprite": "rainbowGold/img/anim/star-scatter.png"
        },
        "rainBowBW":{
            "json": "rainbowGold/img/anim/big-win-rainbow-reveal.json",
            "sprite": "rainbowGold/img/anim/big-win-rainbow-reveal.png"
        },
        "part-1": {
            "json": "rainbowGold/img/anim/bronze-coin.json",
            "sprite": "rainbowGold/img/anim/bronze-coin.png"
        },
        "part-2": {
            "json": "rainbowGold/img/anim/silver-coin.json",
            "sprite": "rainbowGold/img/anim/silver-coin.png"
        },
        "part-3": {
            "json": "rainbowGold/img/anim/gold-coin.json",
            "sprite": "rainbowGold/img/anim/gold-coin.png"
        },
        "f-part-1": {
            "json": "rainbowGold/img/anim/bronze-coin-frwrd.json",
            "sprite": "rainbowGold/img/anim/bronze-coin-frwrd.png"
        },
        "f-part-2": {
            "json": "rainbowGold/img/anim/silver-coin-frwrd.json",
            "sprite": "rainbowGold/img/anim/silver-coin-frwrd.png"
        },
        "f-part-3": {
            "json": "rainbowGold/img/anim/gold-coin-frwrd.json",
            "sprite": "rainbowGold/img/anim/gold-coin-frwrd.png"
        }
    },
    "importantSounds": {
        "spinClick": {
            "name": "rainbowGold/sounds/spinClick.mp3",
            "volume": .1
        },
        "reelSound": {
            "name": "rainbowGold/sounds/reelSound.mp3",
            "volume":1.5
        },
        "reelStop": {
            "name": "rainbowGold/sounds/reelStop.mp3",
            "volume":.2
        },
        "scroll": {
            "name": "rainbowGold/sounds/scroll.mp3",
            "volume": .7
        },
        "iconPop": {
            "name": "rainbowGold/sounds/iconPop.mp3",
            "volume": 1.3
        },
        "iconPopFs": {
            "name": "rainbowGold/sounds/iconPop_fs.mp3",
            "volume": 1.5
        },
        "shamrock_1": {
            "name": "rainbowGold/sounds/shamrockProgress1.mp3",
            "volume": 1
        },
        "tumble": {
            "name": "rainbowGold/sounds/tumbling.mp3",
            "volume": 1.35
        },
        "coins": {
            "name": "rainbowGold/sounds/coins.mp3",
            "volume": 1
        },
        "shamrockPop": {
            "name": "rainbowGold/sounds/shamrockPop.mp3",
            "volume": 1.5
        },

    },
    "bgImportantSounds":{
        "bgSlot": {
            "name": "rainbowGold/sounds/bg_layer1.mp3",
            "volume": 1.3,
            "marker":true
        },
        "bgFs": {
            "name": "rainbowGold/sounds/bgFs_layer1.mp3",
            "volume": 1.5,
            "marker":true
        }
    },
    "sounds": {
        "click": {
            "name": "rainbowGold/sounds/click.mp3",
            "volume": .3
        },
        "smbWin_0": {
            "name": "rainbowGold/sounds/smbWin_0.mp3",
            "volume": 2
        },
        "shamrockWin": {
            "name": "rainbowGold/sounds/shamrockPop.mp3",
            "volume": 3
        },
        "shamrock_2": {
            "name": "rainbowGold/sounds/shamrockProgress2.mp3",
            "volume": 1
        },
        "shamrock_3": {
            "name": "rainbowGold/sounds/shamrockProgress3.mp3",
            "volume": .8
        },
        "shamrock_4": {
            "name": "rainbowGold/sounds/shamrockProgress4.mp3",
            "volume": .8
        },
        "smbWin_1": {
            "name": "rainbowGold/sounds/smbWin_1.mp3",
            "volume": 2
        },
        "smbWin_2": {
            "name": "rainbowGold/sounds/smbWin_2.mp3",
            "volume": 2
        },
        "smbWin_3": {
            "name": "rainbowGold/sounds/smbWin_3.mp3",
            "volume": 2
        },
        "smbWin_4": {
            "name": "rainbowGold/sounds/smbWin_4.mp3",
            "volume": 2
        },
        "smbWin_5": {
            "name": "rainbowGold/sounds/smbWin_5.mp3",
            "volume": 2
        },
        "smbWin_6": {
            "name": "rainbowGold/sounds/smbWin_6.mp3",
            "volume": 2
        },
        "smbWin_7": {
            "name": "rainbowGold/sounds/smbWin_7.mp3",
            "volume": 2
        },
        "smbWin_8": {
            "name": "rainbowGold/sounds/smbWin_8.mp3",
            "volume": 2
        },
        "smbWin_9": {
            "name": "rainbowGold/sounds/smbWin_9.mp3",
            "volume": 2
        },
        "smbWin_10": {
            "name": "rainbowGold/sounds/smbWin_10.mp3",
            "volume": 2
        },
        "smbWin_11": {
            "name": "rainbowGold/sounds/smbWin_10.mp3",
            "volume": 2
        },
        "wildReel":{
            "name": "rainbowGold/sounds/wildReel.mp3",
            "volume": 2.5
        },
        "smbWin_13": {
            "name": "rainbowGold/sounds/sticky.mp3",
            "volume": .8,
            "loop":true
        },
        "multiplier": {
            "name": "rainbowGold/sounds/centralWin/win1.mp3",
            "volume": 2
        },
        "shamrock_5": {
            "name": "rainbowGold/sounds/shamrockProgress5.mp3",
            "volume": 1
        },
        "shamrock_6": {
            "name": "rainbowGold/sounds/shamrockProgress6.mp3",
            "volume": 1
        },
        "shamrock_7": {
            "name": "rainbowGold/sounds/shamrockProgress7.mp3",
            "volume": 1
        },
        "shamrock_8": {
            "name": "rainbowGold/sounds/shamrockProgress8.mp3",
            "volume": 1
        },
        "winBg_0": {
            "name": "rainbowGold/sounds/centralWin/win1.mp3",
            "volume": 0
        },
        "winBg_1": {
            "name": "rainbowGold/sounds/centralWin/win2.mp3",
            "volume":  1.3
        },
        "winBg_2": {
            "name": "rainbowGold/sounds/centralWin/win3.mp3",
            "volume":  1.3
        },
        "winBg_3": {
            "name": "rainbowGold/sounds/centralWin/win4.mp3",
            "volume":  1.3
        },
        "winBg_4": {
            "name": "rainbowGold/sounds/centralWin/win5.mp3",
            "volume":  1
        },
        "winBg_5": {
            "name": "rainbowGold/sounds/centralWin/win6.mp3",
            "volume":  1
        },
        "winBg_6": {
            "name": "rainbowGold/sounds/centralWin/bigWin_Full.mp3",
            "volume":  1
        },
        "winBg_7": {
            "name": "rainbowGold/sounds/centralWin/superBigWin_Full.mp3",
            "volume":  1.2
        },
        "winBg_8": {
            "name": "rainbowGold/sounds/centralWin/megaBigWin_Full.mp3",
            "volume": 1.5
        },
        "winBgS_6": {
            "name": "rainbowGold/sounds/centralWin/bigWin.mp3",
            "volume": 1
        },
        "winBgS_7": {
            "name": "rainbowGold/sounds/centralWin/superBigWin.mp3",
            "volume":  1.2
        },
        "winBgS_8": {
            "name": "rainbowGold/sounds/centralWin/megaBigWin.mp3",
            "volume": 1.5
        },
        "fsWon": {
            "name": "rainbowGold/sounds/introFs.mp3",
            "volume": 1.5
        },
        "incWin": {
            "name": "rainbowGold/sounds/counter.mp3",
            "volume": .6,
            "loop": true
        },
        "line": {
            "name": "rainbowGold/sounds/coinsDrop1.mp3",
            "volume": .6
        },
        "line1": {
            "name": "rainbowGold/sounds/coinsDrop2.mp3",
            "volume": .6
        },
        "winPanel": {
            "name": "rainbowGold/sounds/winScreen.mp3",
            "volume": 1.1
        },
        "multiplier_1":{
            "name": "rainbowGold/sounds/multiplier_layer1.mp3",
            "volume": 1.5
        },
        "multiplier_2":{
            "name": "rainbowGold/sounds/multiplier_layer2.mp3",
            "volume": 1.5
        },
        "multiplier_3":{
            "name": "rainbowGold/sounds/multiplier_layer3.mp3",
            "volume": 1.5
        },
        "multiplier_4":{
            "name": "rainbowGold/sounds/multiplier_layer3.mp3",
            "volume": 1.5
        },
        "multiplier_5":{
            "name": "rainbowGold/sounds/multiplier_layer3.mp3",
            "volume": 1.5
        },
        "girlLeprechaun":{
            "name": "rainbowGold/sounds/girlLeprechaun_hide.mp3",
            "volume": .6
        }
    },
    "bgSounds": {
        "bgSlot2": {
            "name": "rainbowGold/sounds/bg_layer2.mp3",
            "volume": 0,
            "marker":true
        },
        "bgSlot4": {
            "name": "rainbowGold/sounds/bg_layer4.mp3",
            "volume": 0,
            "marker":true
        },
        "bgSlot5": {
            "name": "rainbowGold/sounds/bg_layer5.mp3",
            "volume": 0,
            "marker":true
        },
        "bgSlot6": {
            "name": "rainbowGold/sounds/bg_layer6.mp3",
            "volume": 0,
            "marker":true
        },
        "bgSlot7": {
            "name": "rainbowGold/sounds/bg_layer7.mp3",
            "volume": 0,
            "marker":true
        },
        "bgSlot8": {
            "name": "rainbowGold/sounds/bg_layer8.mp3",
            "volume": 0,
            "marker":true
        },
        "bgFs1": {
            "name": "rainbowGold/sounds/bgFs_layer2.mp3",
            "volume": 0,
            "marker":true
        },
        "bgFs2": {
            "name": "rainbowGold/sounds/bgFs_layer3.mp3",
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
            "visible":false,
            "graphAsset": {
                "bg4": {
                    "name": "bg_m",
                    "x": 310,
                    "y": 104
                }
            }
        },
        "bgFS": {
            "visible":false,
            "graphAsset": {
                "bg": {
                    "name": "bg_rFS",
                    "x": 970,
                    "y": 104
                },
                "bg1": {
                    "name": "bg_lFS",
                    "x": 0,
                    "y": 104
                }
            }
        },
        "frameFS": {
            "visible":false,
            "graphAsset": {
                "bg4": {
                    "name": "bg_mFS",
                    "x": 310,
                    "y": 104
                }
            }
        },
        "winGlow":{},
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
                },
                "bg4": {
                    "name": "bg_t_o",
                    "x": 310,
                    "y": 104
                }
            }
        },
        "maskFS":{
            "visible":false,
            "graphAsset": {
                "bg2": {
                    "name": "bg_bFS",
                    "x": 0,
                    "y": 632
                },
                "bg3": {
                    "name": "bg_tFS",
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
        "idleObjects":{
            "visible":false,
            "frequency":[2000,6000],
            "objects": {
                "s1": {
                    "name": "leperchaun",
                    "x": 1134,
                    "y": 430,
                    "scaleX":10,
                    "scaleY":10,
                    "fps":24,
                    "prob":40,
                    "clear":false
                },"s2": {
                    "name": "leperchaunS",
                    "x": 91,
                    "y": 495,
                    "scaleX":10,
                    "scaleY":10,
                    "fps":24,
                    "prob":80,
                    "clear":false
                },"s3": {
                    "name": "leperchaunG",
                    "x": 209,
                    "y": 508,
                    "scaleX":10,
                    "scaleY":10,
                    "fps":24,
                    "prob":7,
                    "clear":false,
                    "sound":"girlLeprechaun"
                }
            }
        },
        "freeSpinAccumulator": {
            "visible": false,
            "maxFs": 12,
            "graphAsset": {
                "bg1": {
                    "name": "cloverBg",
                    "x": 166,
                    "y": 226,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "shamrock": {
                    "name": "shamrock",
                    "x": 150,
                    "y": 206,
                    "anchorX": .5,
                    "anchorY": .5
                }
            }
        },
        "buttonFg":{
            "visible":false,
            "graphAsset": {
                "bg1": {
                    "name": "buttonBg",
                    "x": 640,
                    "y": 633,
                    "anchorX":.5
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
                    "x": 422,
                    "y": 16,
                    "fill": "#538700",
                    "font": "13px Futura ,Arial",
                    "text": "Free Rounds:",
                    "anchorX": 1
                },
                "frValue": {
                    "x": 392,
                    "y": 30,
                    "fill": "#0e3100",
                    "font": "23px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                },
                "frTotWonLabel": {
                    "x": 916,
                    "y": 16,
                    "fill": "#538700",
                    "font": "13px Futura ,Arial",
                    "text": "Total won:",
                    "anchorX": 1
                },
                "frTotWonValue": {
                    "x": 886,
                    "y": 30,
                    "fill": "#0e3100",
                    "font": "23px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
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
                    "x": 422,
                    "y": 16,
                    "fill": "#538700",
                    "font": "13px Futura ,Arial",
                    "text": "Free Spins",
                    "anchorX": 1
                },
                "fsValue": {
                    "x": 392,
                    "y": 30,
                    "fill": "#0e3100",
                    "font": "23px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                },
                "totWonLabel": {
                    "x": 916,
                    "y": 16,
                    "fill": "#538700",
                    "font": "13px Futura ,Arial",
                    "text": "Total won",
                    "anchorX": 1
                },
                "totWonValue": {
                    "x": 886,
                    "y": 30,
                    "fill": "#0e3100",
                    "font": "23px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                },
                "fsMultValue":{
                    "x": 1110,
                    "y": 230,
                    "bmpFont": "multiBmpFont",
                    "size": "130",
                    "text": "",
                    "anchorX": .5,
                    "anchorY": .5
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
                    "y": 250,
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
            }
        },
        "centralLineWin": {
            "visible": false,
            "texts": {
                "lineWin": {
                    "x": 640,
                    "y": 360,
                    "bmpFont": "bmpFont",
                    "size": "35",
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
                "logo": {
                    "name": "logo",
                    "x": 640,
                    "y": 55,
                    "anchorX":.5,
                    "anchorY":.5
                }
            },
            "slide": {
                "x": 450,
                "y": 140,
                "buttonBaseX":164,
                "buttonBaseY":455,
                "time":4000,
                "slides": {
                    "0": {
                        "x": -30,
                        "y": -180,
                        "visible": true,
                        "graphAsset": {
                            "bgPreview": {
                                "name": "slide_0",
                                "x": 30,
                                "y": 180
                            }
                        },
                        "texts": {
                            "txtPrev0": {
                                "x": 223,
                                "y": 199,
                                "fill": "#ffffff",
                                "font": "13px Futura PT, Arial",
                                "text": "Successive Winnings",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev1": {
                                "x": 219,
                                "y": 315,
                                "fill": "#ffda69",
                                "font": "10px Futura PT, Arial",
                                "text": "4 Successive Winnings Trigger 14 FS",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev2": {
                                "x": 125,
                                "y": 429,
                                "fill": "#ffda69",
                                "font": "10px Futura PT, Arial",
                                "text": "5 Successive Winnings Trigger 16 FS",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev3": {
                                "x": 317,
                                "y": 429,
                                "fill": "#ffda69",
                                "font": "10px Futura PT, Arial",
                                "text": "6 Successive Winnings Trigger 16 FS\n+x2 Starting multiplier",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev4": {
                                "x": 129,
                                "y": 555,
                                "fill": "#ffda69",
                                "font": "10px Futura PT, Arial",
                                "text": "7 Successive Winnings Trigger 20 FS\n+x2 Starting multiplier",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev5": {
                                "x": 319,
                                "y": 555,
                                "fill": "#ffda69",
                                "font": "10px Futura PT, Arial",
                                "text": "6 Successive Winnings Trigger 20 FS\n+x5 Starting multiplier",
                                "anchorX": .5,
                                "align": "center"
                            },
                        }
                    },
                    "1": {
                        "x": -440,
                        "y": -180,
                        "visible": false,
                        "graphAsset": {
                            "bgPreview": {
                                "name": "slide_1",
                                "x": 440,
                                "y": 180
                            }
                        },
                        "texts": {
                            "gameFeatures0": {
                                "x": 639,
                                "y": 199,
                                "fill": "#ffffff",
                                "font": "13px Futura PT, Arial",
                                "text": "Game Features",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "gameFeatures1": {
                                "x": 717,
                                "y": 314,
                                "fill": "#ffda69",
                                "font": "10px Futura PT, Arial",
                                "text": "Expanding Wild On Reel 2,3,4,5",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "gameFeatures2": {
                                "x": 708,
                                "y": 437,
                                "fill": "#ffda69",
                                "font": "10px Futura PT, Arial",
                                "text": "Sticky Wild On Successive Tumbling",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "gameFeatures3": {
                                "x": 711,
                                "y": 558,
                                "fill": "#ffda69",
                                "font": "10px Futura PT, Arial",
                                "text": "Wild",
                                "anchorX": .5,
                                "align": "center"
                            }
                        }
                    },
                    "2": {
                        "x": -860,
                        "y": -180,
                        "visible": false,
                        "graphAsset": {
                            "bgPreview": {
                                "name": "slide_2",
                                "x": 860,
                                "y": 180
                            }
                        },
                        "texts": {

                            "fsFeatures0": {
                                "x": 1060,
                                "y": 208,
                                "fill": "#ffffff",
                                "font": "13px Futura PT, Arial",
                                "text": "Free Spin Features",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "fsFeatures1": {
                                "x": 1062,
                                "y": 560,
                                "fill": "#ffda69",
                                "font": "10px Futura PT, Arial",
                                "text": "Wild Increasing Hand Multiplier (it increments by 1 on each win)",
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
                    "scaleX":1.2,
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
        }
    }
}

var ReelConfig = {
    "slotEngine":"IrishEngine",
    "engineNumbers":63,
    "log":true,
    "canSwipe":false,
    "comment_preview":"enable feature preview screen",
    "preview":true,
    "previewTout":24000,
    "spinType": "TumblingSpin",
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
            "reelSecondMovementTime":.3,
            "reelLoopInterval":.15,
            "reelPreMovement": 0,
            "reelPreMovementTime": 0,
            "reelBaseInterval": 1,
            "reelStopInterval": 1,
            "reelSpinBounceMeasure": 80,
            "reelSpinBounceTime": .30,
            "reelSpinBounceForce": 1.2
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
    "wildReelOrigin":1,
    "wildReelAnim":2,
    "wildReelAnimOffset":-67.5,
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

    "bg" : "rainbowGold/img/paytable/pt-base-complete.png",

    "closeBtn": {

        "ypos": "135",
        "xpos": "896"

    },

    "pagination" : {

        "ypos" : "580",
        "xpos" : "428",
        "checked" : "#fff",
        "unchecked" : "#000"

    },

    "helpPath" : gameParams.pathCDN + 'premiumslots/remoteHelp.jsp?rPage=help/desktop/cherryBlast/help_' + gameParams.lang,

    "fullscreen": true,

    "buttons" : [

        {
            "id" : "left",
            "ypos" : "540",
            "xpos" : "315",
            "bg_up" : "rainbowGold/img/paytable/forward-btn-up.png",
            "bg_over" : "rainbowGold/img/paytable/forward-btn-over.png",
            "bg_down" : "rainbowGold/img/paytable/forward-btn-down.png",
            "direction" : -1
        },

        {
            "id" : "right",
            "ypos" : "540",
            "xpos" : "865",
            "bg_up" : "rainbowGold/img/paytable/forward-btn-up.png",
            "bg_over" : "rainbowGold/img/paytable/forward-btn-over.png",
            "bg_down" : "rainbowGold/img/paytable/forward-btn-down.png",
            "direction" : 1
        }

    ],

    "pages" : [

        {

            "gameguide" : true,
            "title" : "Rainbow Wilds Game Rules",
            "title_xpos" : "510",
            "title_ypos" : "115",
            "xpos" : "331",
            "ypos" : "185",
            "height" : "386",
            "width" : "619",
            "fill": "#00441b",
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
                    "bg" : "rainbowGold/img/symbol-00.png",
                    "xpos": "379",
                    "ypos": "225",
                    "height": "132px",
                    "width": "132px",
                    "text": {
                        "value": 0,
                        "xpos": "45",
                        "ypos": "160",
                        "width": "109",
                        "left_fill": "#117906",
                        "right_fill": "#0e2c00",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_01",
                    "bg" : "rainbowGold/img/symbol-01.png",
                    "xpos": "574",
                    "ypos": "225",
                    "height": "132px",
                    "width": "132px",
                    "text": {
                        "value": 1,
                        "xpos": "45",
                        "ypos": "160",
                        "width": "109",
                        "left_fill": "#117906",
                        "right_fill": "#0e2c00",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_02",
                    "bg" : "rainbowGold/img/symbol-02.png",
                    "xpos": "769",
                    "ypos": "225",
                    "height": "132px",
                    "width": "132px",
                    "text": {
                        "value": 2,
                        "xpos": "45",
                        "ypos": "160",
                        "width": "109",
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
                    "value" : "Wins are calculated by counting consecutive reels with matching symbols and multiplying by the total number of matching symbols on those reels.",
                    "xpos" : "390",
                    "ypos" : "515",
                    "width" : "500",
                    "fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols": [

                {
                    "id" : "symbol_03",
                    "bg" : "rainbowGold/img/symbol-03.png",
                    "xpos": "477",
                    "ypos": "225",
                    "height": "132px",
                    "width": "132px",
                    "text": {
                        "value": 3,
                        "xpos": "45",
                        "ypos": "160",
                        "width": "109",
                        "left_fill": "#117906",
                        "right_fill": "#0e2c00",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_04",
                    "bg" : "rainbowGold/img/symbol-04.png",
                    "xpos": "671",
                    "ypos": "225",
                    "height": "132px",
                    "width": "132px",
                    "text": {
                        "value": 4,
                        "xpos": "45",
                        "ypos": "160",
                        "width": "109",
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
                    "value" : "Wins are calculated by counting consecutive reels with matching symbols and multiplying by the total number of matching symbols on those reels.",                    "xpos" : "390",
                    "ypos" : "515",
                    "width" : "500",
                    "fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols": [

                {
                    "id" : "symbol_05",
                    "bg" : "rainbowGold/img/symbol-05.png",
                    "xpos": "379",
                    "ypos": "225",
                    "height": "132px",
                    "width": "132px",
                    "text": {
                        "value": 5,
                        "xpos": "45",
                        "ypos": "160",
                        "width": "109",
                        "left_fill": "#117906",
                        "right_fill": "#0e2c00",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_06",
                    "bg" : "rainbowGold/img/symbol-06.png",
                    "xpos": "574",
                    "ypos": "225",
                    "height": "132px",
                    "width": "132px",
                    "text": {
                        "value": 6,
                        "xpos": "45",
                        "ypos": "160",
                        "width": "109",
                        "left_fill": "#117906",
                        "right_fill": "#0e2c00",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_07",
                    "bg" : "rainbowGold/img/symbol-07.png",
                    "xpos": "769",
                    "ypos": "225",
                    "height": "132px",
                    "width": "132px",
                    "text": {
                        "value": 7,
                        "xpos": "45",
                        "ypos": "160",
                        "width": "109",
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
                    "value" : "Wins are calculated by counting consecutive reels with matching symbols and multiplying by the total number of matching symbols on those reels.",                    "xpos" : "390",
                    "ypos" : "515",
                    "width" : "500",
                    "fill" : "#000",
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
                    "bg" : "rainbowGold/img/symbol-08.png",
                    "xpos": "379",
                    "ypos": "225",
                    "height": "132px",
                    "width": "132px",
                    "text": {
                        "value": 8,
                        "xpos": "35",
                        "ypos": "160",
                        "width": "109",
                        "left_fill": "#117906",
                        "right_fill": "#0e2c00",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_09",
                    "bg" : "rainbowGold/img/symbol-09.png",
                    "xpos": "574",
                    "ypos": "225",
                    "height": "132px",
                    "width": "132px",
                    "text": {
                        "value": 9,
                        "xpos": "35",
                        "ypos": "160",
                        "width": "109",
                        "left_fill": "#117906",
                        "right_fill": "#0e2c00",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_10",
                    "bg" : "rainbowGold/img/symbol-10.png",
                    "xpos": "769",
                    "ypos": "225",
                    "height": "132px",
                    "width": "132px",
                    "text": {
                        "value": 10,
                        "xpos": "35",
                        "ypos": "160",
                        "width": "109",
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
                    "value" : "Wins are calculated by counting consecutive reels with matching symbols and multiplying by the total number of matching symbols on those reels.",                    "xpos" : "390",
                    "ypos" : "515",
                    "width" : "500",
                    "fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols": [

                {
                    "id" : "symbol_11",
                    "bg" : "rainbowGold/img/symbol-11.png",
                    "xpos": "574",
                    "ypos": "240",
                    "height": "132px",
                    "width": "132px",
                    "text": {
                        "value": 11,
                        "xpos": "45",
                        "ypos": "160",
                        "width": "109",
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
                    "value" : "Wild",
                    "xpos" : "390",
                    "ypos" : "130",
                    "width" : "500",
                    "fill" : "#00441b",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "22px",
                    "align" : "center"
                },

                {
                    "value" : "Wild appears on the 2nd, 3rd, 4th and 5th reels. It substitutes for all symbols. Wilds have a higher chance of appearing on tumbles.",
                    "xpos" : "390",
                    "ypos" : "165",
                    "width" : "500",
                    "fill" : "#00441b",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "18px",
                    "align" : "center"
                },

                {
                    "value" : "Wins are calculated by counting consecutive reels with matching symbols and multiplying by the total number of matching symbols on those reels.",                    "xpos" : "390",
                    "ypos" : "515",
                    "width" : "500",
                    "fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols": [

                {
                    "id" : "symbol_13",
                    "bg" : "rainbowGold/img/symbol-13.png",
                    "xpos": "574",
                    "ypos": "240",
                    "height": "132px",
                    "width": "132px",
                    "text": {
                        "value": 13,
                        "xpos": "45",
                        "ypos": "160",
                        "width": "109",
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
                    "value" : "Sticky Wild",
                    "xpos" : "390",
                    "ypos" : "130",
                    "width" : "500",
                    "fill" : "#00441b",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "22px",
                    "align" : "center"
                },

                {
                    "value" : "The sticky wild will only appear on the middle reel and will not disappear when it is part of a winning combination. It will still fall down if symbols below it are part of a winning combination.",
                    "xpos" : "390",
                    "ypos" : "165",
                    "width" : "500",
                    "fill" : "#00441b",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "18px",
                    "align" : "center"
                },

                {
                    "value" : "It substitutes all the icons.",
                    "xpos" : "390",
                    "ypos" : "365",
                    "width" : "500",
                    "fill" : "#00441b",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "18px",
                    "align" : "center"
                },


                {
                    "value" : "Wins are calculated by counting consecutive reels with matching symbols and multiplying by the total number of matching symbols on those reels.",
                    "xpos" : "390",
                    "ypos" : "515",
                    "width" : "500",
                    "fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols": [

                {
                    "id" : "symbol_12_expanded_1",
                    "bg" : "rainbowGold/img/paytable/expanding-wild.png",
                    "xpos": "474",
                    "ypos": "235",
                    "height": "268px",
                    "width": "68px"
                },

                {
                    "id" : "symbol_12",
                    "bg" : "rainbowGold/img/symbol-12.png",
                    "xpos": "574",
                    "ypos": "240",
                    "height": "132px",
                    "width": "132px",
                    "text": {
                        "value": 12,
                        "xpos": "45",
                        "ypos": "160",
                        "width": "109",
                        "left_fill": "#117906",
                        "right_fill": "#0e2c00",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_12_expanded_2",
                    "bg" : "rainbowGold/img/paytable/expanding-wild.png",
                    "xpos": "738",
                    "ypos": "235",
                    "height": "268px",
                    "width": "68px"
                }

            ],

            "text": [

                {
                    "value" : "Expanding Wild",
                    "xpos" : "390",
                    "ypos" : "130",
                    "width" : "500",
                    "fill" : "#00441b",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "22px",
                    "align" : "center"
                },

                {
                    "value" : "The expanding wild has a random chance to appear on the 2nd, 3rd, 4th and 5th reels. They substitute for all symbols and multiple of them can appear simultaneously.",
                    "xpos" : "390",
                    "ypos" : "165",
                    "width" : "500",
                    "fill" : "#00441b",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "18px",
                    "align" : "center"
                },



                {
                    "value" : "Wins are calculated by counting consecutive reels with matching symbols and multiplying by the total number of matching symbols on those reels.",                    "xpos" : "390",
                    "ypos" : "515",
                    "width" : "500",
                    "fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols": [

                {
                    "id" : "tumble_scrnsht",
                    "bg" : "rainbowGold/img/paytable/tumble.png",
                    "xpos": "540",
                    "ypos": "190",
                    "height": "auto",
                    "width": "200px",
                    "text": {
                        "value": [
                          "Whenever a win way pays out the symbols are destroyed and all remaining symbols tumble down.",
                          "All destroyed symbols are replaced with symbols from higher up on the reels with a high chance of extra Wild Stars appearing.",
                          "If the new symbols also form a win way they too will pay out and more symbols will tumble in to replace them, this will continue until no more Win Ways can be made."
                        ],
                        "xpos": "-175",
                        "ypos": "155",
                        "width": "550",
                        "fill": "#00441b",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "16px",
                        "align": "center"
                    }
                },

            ],

            "text": [

                {
                    "value" : "Free Tumble",
                    "xpos" : "390",
                    "ypos" : "130",
                    "width" : "500",
                    "fill" : "#00441b",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "22px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols": [

                {
                    "id" : "shamrock_5_scroll",
                    "bg" : "rainbowGold/img/paytable/scroll.png",
                    "xpos": "420",
                    "ypos": "350",
                    "height": "110px",
                    "width": "100px",
                    "text": {
                        "value": "5 Successive Winnings Triggers 16 FS",
                        "xpos": "-50",
                        "ypos": "115",
                        "width": "200",
                        "fill": "#00441b",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "16px",
                        "align": "center"
                    }
                },

                {
                    "id" : "shamrock_5",
                    "bg" : "rainbowGold/img/paytable/shamrock_5.png",
                    "xpos": "440",
                    "ypos": "373",
                    "height": "50px",
                    "width": "50px"
                },

                {
                    "id" : "shamrock_4_scroll",
                    "bg" : "rainbowGold/img/paytable/scroll.png",
                    "xpos": "590",
                    "ypos": "300",
                    "height": "110px",
                    "width": "100px",
                    "text": {
                        "value": "4 Successive Winnings Triggers 14 FS",
                        "xpos": "-50",
                        "ypos": "115",
                        "width": "200",
                        "fill": "#00441b",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "16px",
                        "align": "center"
                    }
                },

                {
                    "id" : "shamrock_4",
                    "bg" : "rainbowGold/img/paytable/shamrock_4.png",
                    "xpos": "610",
                    "ypos": "323",
                    "height": "50px",
                    "width": "50px"
                },

                {
                    "id" : "shamrock_6_scroll",
                    "bg" : "rainbowGold/img/paytable/scroll.png",
                    "xpos": "760",
                    "ypos": "350",
                    "height": "110px",
                    "width": "100px",
                    "text": {
                        "value": "6 Successive Winnings Triggers 16 FS + 2x Starting Multiplier",
                        "xpos": "-50",
                        "ypos": "115",
                        "width": "200",
                        "fill": "#00441b",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "16px",
                        "align": "center"
                    }
                },

                {
                    "id" : "shamrock_6",
                    "bg" : "rainbowGold/img/paytable/shamrock_6.png",
                    "xpos": "780",
                    "ypos": "373",
                    "height": "50px",
                    "width": "50px"
                }

            ],

            "text": [

                {
                    "value" : "Free Spin",
                    "xpos" : "390",
                    "ypos" : "130",
                    "width" : "500",
                    "fill" : "#00441b",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "22px",
                    "align" : "center"
                },

                {
                    "value" : "Freespins are reached by having multiple successive tumbles. A minimum of 4 tumbles is required to trigger free spins. The base free spin game is 14 free spins with no starting multiplier. Each extra successive win after 4 awards extra freespins or multipliers, up to a maximum of 20 freespins and 5 starting multiplier",
                    "xpos" : "390",
                    "ypos" : "165",
                    "width" : "500",
                    "fill" : "#00441b",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "18px",
                    "align" : "center"
                },

                {
                    "value" : "Wins are calculated by counting consecutive reels with matching symbols and multiplying by the total number of matching symbols on those reels.",                    "xpos" : "390",
                    "ypos" : "515",
                    "width" : "500",
                    "fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols": [

                {
                    "id" : "shamrock_7_scroll",
                    "bg" : "rainbowGold/img/paytable/scroll.png",
                    "xpos": "450",
                    "ypos": "350",
                    "height": "110px",
                    "width": "100px",
                    "text": {
                        "value": "7 Successive Winnings Triggers 20 FS + 2x Starting Multiplier",
                        "xpos": "-50",
                        "ypos": "115",
                        "width": "200",
                        "fill": "#00441b",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "16px",
                        "align": "center"
                    }
                },

                {
                    "id" : "shamrock_7",
                    "bg" : "rainbowGold/img/paytable/shamrock_7.png",
                    "xpos": "470",
                    "ypos": "373",
                    "height": "50px",
                    "width": "50px"
                },

                {
                    "id" : "shamrock_8_scroll",
                    "bg" : "rainbowGold/img/paytable/scroll.png",
                    "xpos": "730",
                    "ypos": "350",
                    "height": "110px",
                    "width": "100px",
                    "text": {
                        "value": "8 Successive Winnings Triggers 20 FS + 5x Starting Multiplier",
                        "xpos": "-50",
                        "ypos": "115",
                        "width": "200",
                        "fill": "#00441b",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "16px",
                        "align": "center"
                    }
                },

                {
                    "id" : "shamrock_8",
                    "bg" : "rainbowGold/img/paytable/shamrock_8.png",
                    "xpos": "750",
                    "ypos": "373",
                    "height": "50px",
                    "width": "50px"
                }

            ],

            "text": [

                {
                    "value" : "Free Spin",
                    "xpos" : "390",
                    "ypos" : "130",
                    "width" : "500",
                    "fill" : "#00441b",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "22px",
                    "align" : "center"
                },

                {
                    "value" : "Inside free spins the game is similar to the base game except that each tumble increments the multiplier by 1. The multiplier applies to the current spin win. There is no sticky wild or expanding wild inside free spins.",
                    "xpos" : "390",
                    "ypos" : "165",
                    "width" : "500",
                    "fill" : "#00441b",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "18px",
                    "align" : "center"
                },

                {
                    "value" : "Wins are calculated by counting consecutive reels with matching symbols and multiplying by the total number of matching symbols on those reels.",                    "xpos" : "390",
                    "ypos" : "515",
                    "width" : "500",
                    "fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols": [

                {
                    "id" : "winways_scrnsht",
                    "bg" : "rainbowGold/img/paytable/winways.png",
                    "xpos": "540",
                    "ypos": "200",
                    "height": "auto",
                    "width": "200px",
                    "text": {
                        "value": [
                            "Red berry: Appears once on each 5 reels (including wild). So the payout is the flat value for 5x red berry, 10 coins",
                            "Orange berry: Appears on each 5 reels. Appears twice on 2nd, 3rd (including wild) and 5th reel, so payout is the value for 5x multiplied twice by 2. 15 * 2 * 2 * 2 = 120 coins."
                        ],
                        "xpos": "-180",
                        "ypos": "145",
                        "width": "560",
                        "fill": "#00441b",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "16px",
                        "align": "center"
                    }
                },

            ],

            "text": [

                {
                    "value" : "Win Ways",
                    "xpos" : "390",
                    "ypos" : "130",
                    "width" : "500",
                    "fill" : "#00441b",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "22px",
                    "align" : "center"
                },

                {
                    "value" : "Wins are calculated by counting consecutive reels with matching symbols and multiplying by the total number of matching symbols on those reels.",                    "xpos" : "390",
                    "ypos" : "515",
                    "width" : "500",
                    "fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        }
    ]

}
