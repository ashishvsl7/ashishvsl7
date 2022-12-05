
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
        "sprite": "fonts/fontOstara.png",
        "font": "fonts/fontOstara.xml"
    }
}

var extScripts={
    "webfont": "15px FuturaPT-Heavy",
    "webfont1": "15px FuturaPT-Book"
}

var gameAssets = {
    "assets": {
        "icon0": "giftOfOstara/img/symbol-00.png",
        "icon1": "giftOfOstara/img/symbol-01.png",
        "icon2": "giftOfOstara/img/symbol-02.png",
        "icon3": "giftOfOstara/img/symbol-03.png",
        "icon4": "giftOfOstara/img/symbol-04.png",
        "icon5": "giftOfOstara/img/symbol-05.png",
        "icon6": "giftOfOstara/img/symbol-06.png",
        "icon7": "giftOfOstara/img/symbol-07.png",
        "icon8": "giftOfOstara/img/symbol-08.png",
        "icon9": "giftOfOstara/img/symbol-09.png",
        "icon10": "giftOfOstara/img/symbol-10.png",
        "icon12": "giftOfOstara/img/symbol-12.png",
        "icon29r": "giftOfOstara/img/symbol-29.png",
        "icon30": "giftOfOstara/img/symbol-30.png",
        "bicon0": "giftOfOstara/img/b-symbol-00.png",
        "bicon1": "giftOfOstara/img/b-symbol-01.png",
        "bicon2": "giftOfOstara/img/b-symbol-02.png",
        "bicon3": "giftOfOstara/img/b-symbol-03.png",
        "bicon4": "giftOfOstara/img/b-symbol-04.png",
        "bicon5": "giftOfOstara/img/b-symbol-05.png",
        "bicon6": "giftOfOstara/img/b-symbol-06.png",
        "bicon7": "giftOfOstara/img/b-symbol-07.png",
        "bicon8": "giftOfOstara/img/b-symbol-08.png",
        "bicon9": "giftOfOstara/img/b-symbol-11.png",
        "bicon12": "giftOfOstara/img/b-symbol-11.png",
        "resumeWildReel":"giftOfOstara/img/wild-reel_0.png",
        "line_0_00": "giftOfOstara/img/lines/line_0_01.png",
        "line_0_01": "giftOfOstara/img/lines/line_0_02.png",
        "line_0_02": "giftOfOstara/img/lines/line_0_03.png",
        "line_0_03": "giftOfOstara/img/lines/line_0_04.png",
        "line_0_04": "giftOfOstara/img/lines/line_0_05.png",
        "line_0_05": "giftOfOstara/img/lines/line_0_06.png",
        "line_0_06": "giftOfOstara/img/lines/line_0_07.png",
        "line_0_07": "giftOfOstara/img/lines/line_0_08.png",
        "line_0_08": "giftOfOstara/img/lines/line_0_09.png",
        "line_0_09": "giftOfOstara/img/lines/line_0_10.png",
        "line_0_10": "giftOfOstara/img/lines/line_0_11.png",
        "line_0_11": "giftOfOstara/img/lines/line_0_12.png",
        "line_0_12": "giftOfOstara/img/lines/line_0_13.png",
        "line_0_13": "giftOfOstara/img/lines/line_0_14.png",
        "line_0_14": "giftOfOstara/img/lines/line_0_15.png",
        "line_0_15": "giftOfOstara/img/lines/line_0_16.png",
        "line_0_16": "giftOfOstara/img/lines/line_0_17.png",
        "line_0_17": "giftOfOstara/img/lines/line_0_18.png",
        "line_0_18": "giftOfOstara/img/lines/line_0_19.png",
        "line_0_19": "giftOfOstara/img/lines/line_0_20.png",
        "goldFil":"giftOfOstara/img/gold-filigree.png",
        "bottomBar": "gui/message-bar.png",
        "bgPanel": "giftOfOstara/img/bgPanel.png",
        "bgPanelGame": "giftOfOstara/img/bgPanel.png",
        "bgPreview":"giftOfOstara/img/info-screen.png",
        "freeRoundsPanel":"giftOfOstara/img/free-rounds.png",
        "bgAlpha": "giftOfOstara/img/alpha.png",
        "bigWin":"giftOfOstara/img/bigWin.png",
        "superWin":"giftOfOstara/img/super-bigwin.png",
        "megaWin":"giftOfOstara/img/mega-bigwin.png",
        "bg_r": "giftOfOstara/img/bg/base-right.png",
        "bg_l": "giftOfOstara/img/bg/base-left.png",
        "bg_b": "giftOfOstara/img/bg/base-bottom.png",
        "bg_t": "giftOfOstara/img/bg/base-top.png",
        "bg_m": "giftOfOstara/img/bg/base-main.png",
        "buttonBg":"gui/generic/img/desktop/png/cp-info-bar.png",
        "volOnButton": "gui/btnVolOn.png",
        "volOffButton": "gui/btnVolOff.png",
        "freeSpinPanel":"giftOfOstara/img/free-spins.png",
        "eggMask":"giftOfOstara/img/egg-mask.png",
        "fakeHatching":"giftOfOstara/img/symbol-reveal_0.png",
        "bgPt" : "giftOfOstara/img/paytable/pt-base-complete.png"
    },
    "localizedAssets":{
        "graphAsset": {
            "logo": {
                "lang": ["zs","ko","jp"],
                "img": "giftOfOstara/img/logo"
            }
        }
    },
    "buttonsSpriteSheet": {
        "container-btn": {
            "sprite": "giftOfOstara/img/game-btn.png",
            "json": "giftOfOstara/img/game-btn.png",
            "w": 208,
            "h": 66
        },
        "yesButton": {
            "sprite": "giftOfOstara/img/yes-btn.png",
            "json": "giftOfOstara/img/yes-btn.png",
            "w": 47,
            "h": 38
        },
        "noButton": {
            "sprite": "giftOfOstara/img/no-btn.png",
            "json": "giftOfOstara/img/no-btn.png",
            "w": 47,
            "h": 38
        },
        "check": {
            "sprite": "giftOfOstara/img/radio-btns.png",
            "json": "giftOfOstara/img/radio-btns.png",
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
            "json": "giftOfOstara/img/anim/symbol-00.json",
            "sprite": "giftOfOstara/img/anim/symbol-00.png"
        },
        "anim1": {
            "json": "giftOfOstara/img/anim/symbol-01.json",
            "sprite": "giftOfOstara/img/anim/symbol-01.png"
        },
        "anim2": {
            "json": "giftOfOstara/img/anim/symbol-02.json",
            "sprite": "giftOfOstara/img/anim/symbol-02.png"
        },
        "anim3": {
            "json": "giftOfOstara/img/anim/symbol-03.json",
            "sprite": "giftOfOstara/img/anim/symbol-03.png"
        },
        "anim4": {
            "json": "giftOfOstara/img/anim/symbol-04.json",
            "sprite": "giftOfOstara/img/anim/symbol-04.png"
        },
        "anim5": {
            "json": "giftOfOstara/img/anim/symbol-05.json",
            "sprite": "giftOfOstara/img/anim/symbol-05.png"
        },
        "anim6": {
            "json": "giftOfOstara/img/anim/symbol-06.json",
            "sprite": "giftOfOstara/img/anim/symbol-06.png"
        },
        "anim7": {
            "json": "giftOfOstara/img/anim/symbol-07.json",
            "sprite": "giftOfOstara/img/anim/symbol-07.png"
        },
        "anim8": {
            "json": "giftOfOstara/img/anim/symbol-08.json",
            "sprite": "giftOfOstara/img/anim/symbol-08.png"
        },
        "anim33": {
            "json": "giftOfOstara/img/anim/symbol-09.json",
            "sprite": "giftOfOstara/img/anim/symbol-09.png"
        },
        "anim29r": {
            "json": "giftOfOstara/img/anim/symbol-09r.json",
            "sprite": "giftOfOstara/img/anim/symbol-09r.png"
        },
        "anim30": {
            "json": "giftOfOstara/img/anim/symbol-10.json",
            "sprite": "giftOfOstara/img/anim/symbol-10.png"
        },
        "anim34": {
            "json": "giftOfOstara/img/anim/symbol-11.json",
            "sprite": "giftOfOstara/img/anim/symbol-11.png"
        },
        "anim35": {
            "json": "giftOfOstara/img/anim/symbol-12.json",
            "sprite": "giftOfOstara/img/anim/symbol-12.png"
        },
        "wildReel": {
            "json": "giftOfOstara/img/anim/wild-reel.json",
            "sprite": "giftOfOstara/img/anim/wild-reel.png"
        },
        "wildReelBack": {
            "json": "giftOfOstara/img/anim/wild-reel-exit.json",
            "sprite": "giftOfOstara/img/anim/wild-reel-exit.png"
        },
        "part-1": {
            "json": "giftOfOstara/img/anim/bronze-coin.json",
            "sprite": "giftOfOstara/img/anim/bronze-coin.png"
        },
        "part-2": {
            "json": "giftOfOstara/img/anim/silver-coin.json",
            "sprite": "giftOfOstara/img/anim/silver-coin.png"
        },
        "part-3": {
            "json": "giftOfOstara/img/anim/gold-coin.json",
            "sprite": "giftOfOstara/img/anim/gold-coin.png"
        },
        "f-part-1": {
            "json": "giftOfOstara/img/anim/bronze-coin-frwrd.json",
            "sprite": "giftOfOstara/img/anim/bronze-coin-frwrd.png"
        },
        "f-part-2": {
            "json": "giftOfOstara/img/anim/silver-coin-frwrd.json",
            "sprite": "giftOfOstara/img/anim/silver-coin-frwrd.png"
        },
        "f-part-3": {
            "json": "giftOfOstara/img/anim/gold-coin-frwrd.json",
            "sprite": "giftOfOstara/img/anim/gold-coin-frwrd.png"
        },
        "hatchingEgg":{
            "json": "giftOfOstara/img/anim/symbol-reveal.json",
            "sprite":"giftOfOstara/img/anim/symbol-reveal.png"
        },
        "respin":{
            "json": "giftOfOstara/img/anim/re-spin.json",
            "sprite":"giftOfOstara/img/anim/re-spin.png"
        },
        "scatterA":{
            "json": "giftOfOstara/img/anim/scatter.json",
            "sprite":"giftOfOstara/img/anim/scatter.png"
        },
        "fsSymbHL":{
            "json": "giftOfOstara/img/anim/fs.json",
            "sprite":"giftOfOstara/img/anim/fs.png"
        },
        "butterfly":{
            "json": "giftOfOstara/img/anim/butterfly.json",
            "sprite":"giftOfOstara/img/anim/butterfly.png"
        }

    },
    "importantSounds": {
        "spinClick": {
            "name": "giftOfOstara/sounds/click.mp3",
            "volume": .5
        },
        "reelSound0": {
            "name": "giftOfOstara/sounds/reelSound.mp3",
            "volume":.4
        },
        "reelStop": {
            "name": "giftOfOstara/sounds/reelStop.mp3",
            "volume":.7
        },
        "eggReveal": {
            "name": "giftOfOstara/sounds/egg-reveal.mp3",
            "volume": .6
        }
    },
    "bgImportantSounds":{
        "bgSlot": {
            "name": "giftOfOstara/sounds/bg_layer1.mp3",
            "volume": 1.3,
            "marker":true
        }
    },
    "sounds": {
        "reelSound1": {
            "name": "giftOfOstara/sounds/reelSound.mp3",
            "volume":.4
        },
        "reelSound2": {
            "name": "giftOfOstara/sounds/bg_layer3.mp3",
            "volume":.8
        },
        "reelSound3": {
            "name": "giftOfOstara/sounds/reelSound.mp3",
            "volume":.4
        },
        "click": {
            "name": "giftOfOstara/sounds/click.mp3",
            "volume": .6
        },
        "eggRise": {
            "name": "giftOfOstara/sounds/egg_rise.mp3",
            "volume": 1.5
        },
        "eggFall": {
            "name": "giftOfOstara/sounds/egg_fall.mp3",
            "volume": 1.5
        },
        "smbWin_0": {
            "name": "giftOfOstara/sounds/smbWin_0.mp3",
            "volume": 1
        },
        "smbWin_1": {
            "name": "giftOfOstara/sounds/smbWin_0.mp3",
            "volume": 1
        },
        "smbWin_2": {
            "name": "giftOfOstara/sounds/smbWin_0.mp3",
            "volume": 1
        },
        "smbWin_3": {
            "name": "giftOfOstara/sounds/smbWin_0.mp3",
            "volume": 1
        },
        "smbWin_4": {
            "name": "giftOfOstara/sounds/smbWin_0.mp3",
            "volume": 1
        },
        "smbWin_5": {
            "name": "giftOfOstara/sounds/smbWin_5.mp3",
            "volume": 1
        },
        "smbWin_6": {
            "name": "giftOfOstara/sounds/smbWin_6.mp3",
            "volume": 1
        },
        "smbWin_7": {
            "name": "giftOfOstara/sounds/smbWin_7.mp3",
            "volume": 1
        },
        "smbWin_8": {
            "name": "giftOfOstara/sounds/smbWin_8.mp3",
            "volume": 1
        },
        "smbWin_29": {
            "name": "giftOfOstara/sounds/smbWin_29.mp3",
            "volume": 1.5
        },
        "smbWin_29r": {
            "name": "giftOfOstara/sounds/smbWin_29r.mp3",
            "volume": 1.5
        },
        "smbWin_34": {
            "name": "giftOfOstara/sounds/smbWin_34.mp3",
            "volume": 1.5
        },
        "smbWin_33": {
            "name": "giftOfOstara/sounds/smbWin_35.mp3",
            "volume": 1.5
        },
        "smbWin_35": {
            "name": "giftOfOstara/sounds/smbWin_35.mp3",
            "volume": 1.5
        },
        "scatter": {
            "name": "giftOfOstara/sounds/scatter.mp3",
            "volume": 1
        },
        "respinS": {
            "name": "giftOfOstara/sounds/respin.mp3",
            "volume": 1
        },
        "mult": {
            "name": "giftOfOstara/sounds/scatter.mp3",
            "volume": 1
        },
        "wildReel": {
            "name": "giftOfOstara/sounds/wildReel.mp3",
            "volume": 1
        },
        "wildReelOut": {
            "name": "giftOfOstara/sounds/wildReelExit.mp3",
            "volume": 1
        },
        "eggFsWin": {
            "name": "giftOfOstara/sounds/fsWin.mp3",
            "volume": 1
        },
        "incWin": {
            "name": "giftOfOstara/sounds/counter.mp3",
            "volume": .6,
            "loop": true
        },
        "line": {
            "name": "giftOfOstara/sounds/line.mp3",
            "volume": .5
        },
        "eggAcc": {
            "name": "giftOfOstara/sounds/line.mp3",
            "volume": .8
        },
        "winBg_0": {
            "name": "giftOfOstara/sounds/centralWin/win1.mp3",
            "volume": 1.7
        },
        "winBg_1": {
            "name": "giftOfOstara/sounds/centralWin/win2.mp3",
            "volume": 1.8
        },
        "winBg_2": {
            "name": "giftOfOstara/sounds/centralWin/win3.mp3",
            "volume": 1.5
        },
        "winBg_3": {
            "name": "giftOfOstara/sounds/centralWin/win4.mp3",
            "volume": 1.5
        },
        "winBg_4": {
            "name": "giftOfOstara/sounds/centralWin/win5.mp3",
            "volume": 1.5
        },
        "winBg_5": {
            "name": "giftOfOstara/sounds/centralWin/win6.mp3",
            "volume": 1.3
        },
        "winBg_6": {
            "name": "giftOfOstara/sounds/centralWin/bigWin_Full.mp3",
            "volume": 1.4
        },
        "winBg_7": {
            "name": "giftOfOstara/sounds/centralWin/superBigWin_Full.mp3",
            "volume": 1.4
        },
        "winBg_8": {
            "name": "giftOfOstara/sounds/centralWin/megaBigWin_Full.mp3",
            "volume": 1.4
        },
        "winBgS_6": {
            "name": "giftOfOstara/sounds/centralWin/bigWin.mp3",
            "volume": 1.4
        },
        "winBgS_7": {
            "name": "giftOfOstara/sounds/centralWin/superBigWin.mp3",
            "volume": 1.4
        },
        "winBgS_8": {
            "name": "giftOfOstara/sounds/centralWin/megaBigWin.mp3",
            "volume": 1.4
        },
        "winPanel": {
            "name": "giftOfOstara/sounds/line.mp3",
            "volume": 1
        },
        "fsWon": {
            "name": "giftOfOstara/sounds/fsIntro.mp3",
            "volume": 1.5
        },
        "winPanel": {
            "name": "giftOfOstara/sounds/winScreen.mp3",
            "volume": 1.5
        },
        "coins": {
            "name": "giftOfOstara/sounds/coins.mp3",
            "volume":.4
        }
    },
    "bgSounds": {
        "bgSlot2": {
            "name": "giftOfOstara/sounds/bg_layer2.mp3",
            "volume": 0,
            "marker":true
        },
        "bgSlot3": {
            "name": "giftOfOstara/sounds/bg_layer3.mp3",
            "volume": 0,
            "marker":true
        },
        "bgFs": {
            "name": "giftOfOstara/sounds/bgFs.mp3",
            "volume": 1
        },
        "bgFsS": {
            "name": "giftOfOstara/sounds/bg_wfs.mp3",
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
        "logo": {
            "visible":false,
            "graphAsset": {
                "bg":{
                   "name":"goldFil",
                    "x": 640,
                    "y": 0,
                    "anchorX":.5

                },
                "logo": {
                    "name": "logo",
                    "x": 640,
                    "y": 68,
                    "anchorX":.5,
                    "anchorY":.5
                }
            }
        },
        "freeSpinAccumulator": {
            "visible": false,
            "maxFs": 2,
            "graphAsset": {
                "hatch":{
                    "name":"hatchingEgg",
                    "x": 1185,
                    "y": 570,
                    "yFinal": 530
                },
                "accu0": {
                    "x": 1185,
                    "y": 400,
                    "height":120,
                    "width":120,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "accu1": {
                    "x": 1185,
                    "y": 280,
                    "height":120,
                    "width":120,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "accu2": {
                    "x": 1185,
                    "y": 160,
                    "height":120,
                    "width":120,
                    "anchorX": .5,
                    "anchorY": .5
                }
            }
        },
        "freeSpinAccumulatorMASK": {
            "visible": false,
            "graphAsset": {
                "bg": {
                    "name": "eggMask",
                    "x": 1280,
                    "y": 719,
                    "anchorX": 1,
                    "anchorY": 1
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
                    "y": 688,
                    "height":32
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
            "texts": {
                "frLabel": {
                    "x": 500,
                    "y": 16,
                    "fill": "#7c1b00",
                    "font": "13px Futura ,Arial",
                    "text": "Free Rounds:",
                    "anchorX": .5
                },
                "frValue": {
                    "x": 500,
                    "y": 30,
                    "fill": "#D35522",
                    "font": "23px Futura ,Arial",
                    "text": "5",
                    "anchorX": 0.5
                },
                "frTotWonLabel": {
                    "x": 870,
                    "y": 16,
                    "fill": "#7c1b00",
                    "font": "13px Futura ,Arial",
                    "text": "Total won:",
                    "anchorX": .5
                },
                "frTotWonValue": {
                    "x": 870,
                    "y": 30,
                    "fill": "#D35522",
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
                    "y": 0,
                    "anchorX": .5
                },
            },
            "texts": {
                "fsSymbLabel": {
                    "x": 250,
                    "y": 16,
                    "fill": "#7c1b00",
                    "font": "13px Futura ,Arial",
                    "text": "Symbols",
                    "anchorX": .5
                },
                "fsSymbValue": {
                    "x": 250,
                    "y": 30,
                    "fill": "#D35522",
                    "font": "23px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                },
                "fsMultLabel": {
                    "x": 380,
                    "y": 16,
                    "fill": "#7c1b00",
                    "font": "13px Futura ,Arial",
                    "text": "Egg Value",
                    "anchorX": .5
                },
                "fsMultValue": {
                    "x": 380,
                    "y": 30,
                    "fill": "#D35522",
                    "font": "23px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                },
                "fsMultTotLabel": {
                    "x": 500,
                    "y": 16,
                    "fill": "#7c1b00",
                    "font": "13px Futura ,Arial",
                    "text": "Mltiplier won",
                    "anchorX": .5
                },
                "fsMultTotValue": {
                    "x": 500,
                    "y": 30,
                    "fill": "#D35522",
                    "font": "23px Futura ,Arial",
                    "text": "£24.00",
                    "anchorX": 0.5
                },
                "fsLabel": {
                    "x": 750,
                    "y": 16,
                    "fill": "#7c1b00",
                    "font": "13px Futura ,Arial",
                    "text": "Free Spins",
                    "anchorX": .5
                },
                "fsValue": {
                    "x": 750,
                    "y": 30,
                    "fill": "#D35522",
                    "font": "27px Futura ,Arial",
                    "text": "5",
                    "anchorX": 0.5
                },
                "totLineWonLabel": {
                    "x": 870,
                    "y": 16,
                    "fill": "#7c1b00",
                    "font": "13px Futura ,Arial",
                    "text": "Line won",
                    "anchorX": .5
                },
                "totLineWonValue": {
                    "x": 870,
                    "y": 30,
                    "fill": "#D35522",
                    "font": "23px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                },
                "totWonLabel": {
                    "x": 1030,
                    "y": 16,
                    "fill": "#7c1b00",
                    "font": "13px Futura ,Arial",
                    "text": "Total won",
                    "anchorX": .5
                },
                "totWonValue": {
                    "x": 1030,
                    "y": 30,
                    "fill": "#D35522",
                    "font": "23px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                }
            }
        },
        "scatter": {},
        "wild": {
        },
        "wins": {},
        "fsWonPanel": {
            "visible": false,
            "fakeButton": true,
            "eventBlock": true,
            "duration": 3.5,
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
                    "y": 360,
                    "anchorX": .5,
                    "anchorY": .5
                }
            },
            "texts": {
                "fsWLabel": {
                    "x": 640,
                    "y": 270,
                    "fill": "#ffffff",
                    "font": "28px FuturaPT-Heavy",
                    "text": "You won",
                    "anchorX": .5
                },
                "fsValue1": {
                    "x": 640,
                    "y": 320,
                    "fill": "#ffffff",
                    "font": "28px FuturaPT-Heavy",
                    "text": "5",
                    "anchorX": .5
                },
                "fsWLabel1": {
                    "x": 640,
                    "y": 370,
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
            "duration":4,
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
                    "y": 360,
                    "anchorX": .5,
                    "anchorY": .5
                }
            },
            "texts": {
                "frWLabelTitol": {
                    "x": 640,
                    "y": 240,
                    "fill": "#FFFFFF",
                    "font": "14px Futura PT, Arial",
                    "text":"Free Rounds",
                    "anchorX": .5
                },
                "frWLabel": {
                    "x": 640,
                    "y": 270,
                    "fill": "#FFFFFF",
                    "font": "18px Futura PT, Arial",
                    "text":"",
                    "align":"center",
                    "anchorX": .5
                },
                "frValue1": {
                    "x": 640,
                    "y": 340,
                    "fill": "#FFFFFF",
                    "font": "24px Futura PT, Arial",
                    "text": "5",
                    "anchorX": .5
                },
                "frWLabel1": {
                    "x": 640,
                    "y": 370,
                    "fill": "#FFFFFF",
                    "font": "18px Futura PT, Arial",
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
                    "y": 446,
                    "bmpFont": "bmpFont",
                    "size": "60",
                    "text": "",
                    "anchorX": .5,
                    "anchorY": .5
                }
            }
        },
        "idleObjects":{
            "visible":false,
            "frequency":[1500,2500],
            "onlyOne":true,
            "objects": {
                "s1": {
                    "name": "butterfly",
                    "x": 130,
                    "y": 180,
                    "scaleX":10,
                    "scaleY":10,
                    "fps":24,
                    "prob":2
                },
                "s2": {
                    "name": "butterfly",
                    "x": 1150,
                    "y": 180,
                    "scaleX":-10,
                    "scaleY":10,
                    "fps":24,
                    "prob":1
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
                    "x": 446,
                    "y": 100,
                    "anchorX":.5,
                    "anchorY":.5
                }
            },
            "checkbox": {
                "name": "check",
                "text": "Don't show anymore",
                "font": "15px Arial",
                "color": "#2d2d2d",
                "x": 900,
                "y": 640,
                "evt": "chkEvt"
            },
            "buttons": {
                "closePreview": {
                    "name": "container-btn",
                    "x": 640,
                    "y": 658,
                    "evt": "doCloseP",
                    "texts": {
                        "closeLabel": {
                            "x": 0,
                            "y": -18,
                            "fill": "#2d2d2d",
                            "font": "25px Futura PT, Arial",
                            "text": "Continue",
                            "anchorX": .5
                        }
                    }
                }
            },
            "texts": {
                "title": {
                    "x": 740,
                    "y": 220,
                    "fill": "#4f89a3",
                    "font": "25px Futura PT, Arial",
                    "text": "Gold egg reveals",
                    "align":"center",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "wild": {
                    "x": 425,
                    "y": 580,
                    "fill": "#4f89a3",
                    "font": "20px Futura PT, Arial",
                    "text": "Wild",
                    "align":"center",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "swild": {
                    "x": 588,
                    "y": 580,
                    "fill": "#4f89a3",
                    "font": "20px Futura PT, Arial",
                    "text": "Sticky Wild",
                    "align":"center",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "iscatter": {
                    "x": 750,
                    "y": 580,
                    "fill": "#4f89a3",
                    "font": "20px Futura PT, Arial",
                    "text": "Scatter",
                    "align":"center",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "imultiplier": {
                    "x": 912,
                    "y": 580,
                    "fill": "#4f89a3",
                    "font": "20px Futura PT, Arial",
                    "text": "Multiplier",
                    "align":"center",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "irespin": {
                    "x": 1070,
                    "y": 580,
                    "fill": "#4f89a3",
                    "font": "20px Futura PT, Arial",
                    "text": "Respin",
                    "align":"center",
                    "anchorX": .5,
                    "anchorY": .5
                },
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
                    "x": 630,
                    "y": 310,
                    "fill": "#ffffff",
                    "font": "22px FuturaPT-Heavy",
                    "text": "",
                    "anchorX": .5
                },
                "msg2": {
                    "x": 630,
                    "y": 380,
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
                    "y": 590,
                    "evt": "doOk"
                },
                "myAccount": {
                    "name": "container-btn",
                    "x": 650,
                    "y": 590,
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
                    "y": 590,
                    "evt": "doKo"
                },
                "ok": {
                    "name": "container-btn",
                    "x": 640,
                    "anchorX": .5,
                    "y": 590,
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
            "textCol":"#0b2456",

            "graphAsset": {
                "bgmsg": {
                    "name": "bgAlpha",
                    "x": 0,
                    "y": 0
                },
                "generic": {
                    "name": "bgPanel",
                    "x": 648,
                    "y": 310,
                    "anchorX": .5,
                    "anchorY": .5,
                    "scaleX":1.4
                }
            },
            "texts": {
                "msgFR1": {
                    "x": 640,
                    "y": 230,
                    "fill": "#FFFFFF",
                    "font": "22px FuturaPT-Book",
                    "text": ".wqdwe",
                    "anchorX": .5
                },
                "msgFR2": {
                    "x": 640,
                    "y": 260,
                    "fill": "#FFFFFF",
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
                            "fill": "#0b2456",
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
                            "fill": "#0b2456",
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
                            "fill": "#0b2456",
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
    "slotEngine":"EasterEngine",
    "log":true,
    "canSwipe":false,
    "comment_preview":"enable feature preview screen",
    "preview":true,
    "previewTout":35000,
    "spinType": "OstaraSpin",
    "comment_winType":"spin class used by the game on line central win field",
    "winType": "BounceWin",
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
    "lineFrames":20 ,
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
            "reelLoopInterval":.14,
            "reelPreMovement": 25,
            "reelPreMovementTime": .3,
            "reelBaseInterval": 6,
            "reelStopInterval": 1,
            "reelSpinBounceMeasure": 47,
            "reelSpinBounceTime": .57,
            "reelSpinBounceForce": 1
        },
        "default":{
            "stopEnabled":true,
            "reelSecondMovementTime":0.4,
            "reelLoopInterval":.10,
            "reelPreMovement": 24,
            "reelPreMovementTime": .2,
            "reelBaseInterval": 1,
            "reelStopInterval": 1,
            "reelSpinBounceMeasure": 47,
            "reelSpinBounceTime": .5,
            "reelSpinBounceForce": 1
        }
    },
    "numIcon": 8,
    "loadTout": 30,
    "credits": "5000",
    "bet": "0.50",
    "wildType": "ExternalWildReel",
    "wildNum": [9,12],
    "wildReelRollbackSpinDelay":800,
    "animDelayAfterWild":1500,
    "wildDelay":2200,
    "wildReelOrigin":1,
    "freeRounds":"normal",
    "freeSpins": "SideAccumFreeSpins",
    "_fsIcon": 1,
    "fsSpinDelay":750,
    "minFsSmbs":3,
    "scatterIcon": 10,
    "scatterType": "SubstScatter",
    "_twinReelsFeature":"normal",
    "winTxtClasses": [1, 2, 5, 10, 20, 50, 100, 300, 500, 1000],
    "smb_colors":[0xff33cc,0xcc33ff,0x0066ff,0x00ff99,0xffcc00,0xff33cc,0xcc33ff,0x0066ff,0x00ff99,0xffcc00,0xffcc00],
    "smbMinAnimTime":[.5,.5,.5,.5,.5,.5,.5,1.5,.5,.5],
    "muteDuringWins":true,
    "keepShowingAnimation":true,
    "additionalPreText":"",
    "additionalPostText":"",
    "reel": {
        "deltaX_0": 200,
        "deltaX": 176,
        "deltaY_0": 632,
        "deltaY": 176,
        "time": [1.3]
    },
    "icon": {
        "x": 0,
        "y": 0,
        "width": 176,
        "height": 176
    },
    "mask": {
        "x": 50,
        "y": 102,
        "width": 1100,
        "height": 527
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
        "linesNumber": 1,
        "color": "0xFFD700",
        "x_origin": 0,
        "tickBase": 2,
        "alpha": 1,
        "pointToPointSpeed": .08,
        "duration": 30,
        "showWinWithSmbColor": true,
        "multipleAnimation": [true, true, true, true, true, true, false, false, false, true, true, true],
        "lineColours": [0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff],
    }
}

var paytableAssets = {

	"bg" : "giftOfOstara/img/paytable/pt-base-complete.png",

    "top": false,

    "closeBtn": {

        "ypos": "125",
        "xpos": "1010"

    },

	"pagination" : {

		"ypos" : "560",
		"xpos" : "485",
		"checked" : "#00E2E2",
		"unchecked" : "#000000"

	},

    "helpPath" : gameParams.pathCDN + 'premiumslots/remoteHelp.jsp?rPage=help/desktop/giftOfOstara/help_' + gameParams.lang,

    "fullscreen": true,

	"buttons" : [

		{
			"id" : "left",
			"ypos" : "500",
			"xpos" : "230",
			"bg_up" : "giftOfOstara/img/paytable/forward-btn-up.png",
			"bg_over" : "giftOfOstara/img/paytable/forward-btn-over.png",
			"bg_down" : "giftOfOstara/img/paytable/forward-btn-down.png",
			"direction" : -1
		},

		{
			"id" : "right",
			"ypos" : "500",
			"xpos" : "950",
			"bg_up" : "giftOfOstara/img/paytable/forward-btn-up.png",
			"bg_over" : "giftOfOstara/img/paytable/forward-btn-over.png",
			"bg_down" : "giftOfOstara/img/paytable/forward-btn-down.png",
			"direction" : 1
		}

	],

	"pages" : [
        {

            "gameguide": true,
            "title": "Gifts of Ostara Game Rules",
            "title_xpos": "505",
            "title_ypos" : "140",
            "xpos": "250",
            "ypos": "205",
            "height": "280",
            "width": "720",
            "fill": "#FFFFFF",
            "font": "FuturaPT-Book, Arial, sans-serif",
            "rtp": [
                "96.70",
                "96.70",
                "96.70"
            ]

        },
        {
            "symbols": [

                {
                    "id": "symbol_00",
                    "bg": "giftOfOstara/img/symbol-00.png",
                    "xpos": "295",
                    "ypos": "200",
                    "height": "136px",
                    "width": "136px",
                    "text": {
                        "value": 0,
                        "xpos": "40",
                        "ypos": "150",
                        "width": "109",
                        "left_fill": "#ffffff",
                        "right_fill": "#FEC7DB",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }

                },

                {
                    "id": "symbol_01",
                    "bg": "giftOfOstara/img/symbol-01.png",
                    "xpos": "435",
                    "ypos": "200",
                    "height": "136px",
                    "width": "136px",
                    "text": {
                        "value": 1,
                        "xpos": "40",
                        "ypos": "150",
                        "width": "109",
                        "left_fill": "#ffffff",
                        "right_fill": "#FEC7DB",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }

                },

                {
                    "id": "symbol_02",
                    "bg": "giftOfOstara/img/symbol-02.png",
                    "xpos": "575",
                    "ypos": "200",
                    "height": "136px",
                    "width": "136px",
                    "text": {
                        "value": 2,
                        "xpos": "40",
                        "ypos": "150",
                        "width": "109",
                        "left_fill": "#ffffff",
                        "right_fill": "#FEC7DB",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }

                },

                {
                    "id": "symbol_03",
                    "bg": "giftOfOstara/img/symbol-03.png",
                    "xpos": "715",
                    "ypos": "200",
                    "height": "136px",
                    "width": "136px",
                    "text": {
                        "value": 3,
                        "xpos": "40",
                        "ypos": "150",
                        "width": "109",
                        "left_fill": "#ffffff",
                        "right_fill": "#FEC7DB",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }

                },

                {
                    "id": "symbol_04",
                    "bg": "giftOfOstara/img/symbol-04.png",
                    "xpos": "855",
                    "ypos": "200",
                    "height": "136px",
                    "width": "136px",
                    "text": {
                        "value": 4,
                        "xpos": "40",
                        "ypos": "150",
                        "width": "109",
                        "left_fill": "#ffffff",
                        "right_fill": "#FEC7DB",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }

                }

            ],

            "text": [

                {
                    "value": "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos": "390",
                    "ypos": "480",
                    "width": "500",
                    "fill": "#EDEBF4",
                    "font": "FuturaPT-Book, Arial, sans-serif",
                    "size": "12px",
                    "align": "center"
                }

            ]

        },

        {

            "symbols": [

                {
                    "id": "symbol_05",
                    "bg": "giftOfOstara/img/symbol-05.png",
                    "xpos": "360",
                    "ypos": "190",
                    "height": "136px",
                    "width": "136px",
                    "text": {
                        "value": 5,
                        "xpos": "40",
                        "ypos": "150",
                        "width": "109",
                        "left_fill": "#ffffff",
                        "right_fill": "#FEC7DB",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }

                },

                {
                    "id": "symbol_06",
                    "bg": "giftOfOstara/img/symbol-06.png",
                    "xpos": "500",
                    "ypos": "190",
                    "height": "136px",
                    "width": "136px",
                    "text": {
                        "value": 6,
                        "xpos": "40",
                        "ypos": "150",
                        "width": "109",
                        "left_fill": "#ffffff",
                        "right_fill": "#FEC7DB",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }

                },

                {
                    "id": "symbol_07",
                    "bg": "giftOfOstara/img/symbol-07.png",
                    "xpos": "640",
                    "ypos": "190",
                    "height": "136px",
                    "width": "136px",
                    "text": {
                        "value": 7,
                        "xpos": "40",
                        "ypos": "150",
                        "width": "109",
                        "left_fill": "#ffffff",
                        "right_fill": "#FEC7DB",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }

                },

                {
                    "id": "symbol_08",
                    "bg": "giftOfOstara/img/symbol-08.png",
                    "xpos": "780",
                    "ypos": "190",
                    "height": "136px",
                    "width": "136px",
                    "text": {
                        "value": 8,
                        "xpos": "40",
                        "ypos": "150",
                        "width": "109",
                        "left_fill": "#ffffff",
                        "right_fill": "#FEC7DB",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }

                }

            ],

            "text": [

                {
                    "value": "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos": "390",
                    "ypos": "480",
                    "width": "500",
                    "fill": "#EDEBF4",
                    "font": "FuturaPT-Book, Arial, sans-serif",
                    "size": "12px",
                    "align": "center"
                }

            ]

        },

        {

            "symbols": [

                {
					"id" : "symbol_14",
					"bg" : "giftOfOstara/img/paytable/symbol-14.png",
                    "xpos": "560",
                    "ypos": "175",
                    "height": "136px",
                    "width": "136px",
                    "text": {
                        "value": "Golden egg reveals special prize eggs",
                        "xpos": "-182",
                        "ypos": "150",
                        "width": "500",
                        "fill": "#ffffff",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "22px",
                        "align": "center"
                    }
                },

                {
                    "id" : "symbol_11",
					"bg" : "giftOfOstara/img/paytable/symbol-11.png",
                    "xpos": "260",
                    "ypos": "375",
                    "height": "75px",
                    "width": "75px"
                },

                {
                    "id" : "symbol_12",
					"bg" : "giftOfOstara/img/paytable/symbol-12.png",
                    "xpos": "340",
                    "ypos": "375",
                    "height": "75px",
                    "width": "75px"
                },

                {
                    "id" : "symbol_13",
					"bg" : "giftOfOstara/img/paytable/symbol-13.png",
                    "xpos": "420",
                    "ypos": "375",
                    "height": "75px",
                    "width": "75px"
                },

                {
                    "id" : "symbol_09",
					"bg" : "giftOfOstara/img/symbol-SB.png",
                    "xpos": "495",
                    "ypos": "375",
                    "height": "75px",
                    "width": "75px"
                },

                {
                    "id" : "symbol_10",
					"bg" : "giftOfOstara/img/symbol-10.png",
                    "xpos": "565",
                    "ypos": "375",
                    "height": "75px",
                    "width": "75px"
                },

                {
                    "id" : "symbol_00",
					"bg" : "giftOfOstara/img/symbol-00.png",
                    "xpos": "640",
                    "ypos": "375",
                    "height": "75px",
                    "width": "75px"
                },

                {
                    "id" : "symbol_01",
					"bg" : "giftOfOstara/img/symbol-01.png",
                    "xpos": "715",
                    "ypos": "375",
                    "height": "75px",
                    "width": "75px"
                },

                {
                    "id" : "symbol_02",
					"bg" : "giftOfOstara/img/symbol-02.png",
                    "xpos": "790",
                    "ypos": "375",
                    "height": "75px",
                    "width": "75px"
                },

                {
                    "id" : "symbol_03",
					"bg" : "giftOfOstara/img/symbol-03.png",
                    "xpos": "865",
                    "ypos": "375",
                    "height": "75px",
                    "width": "75px"
                },

                {
                    "id" : "symbol_04",
					"bg" : "giftOfOstara/img/symbol-04.png",
                    "xpos": "940",
                    "ypos": "375",
                    "height": "75px",
                    "width": "75px"
                }

            ],

            "text": [


                {
                    "value": "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos": "390",
                    "ypos": "480",
                    "width": "500",
                    "fill": "#EDEBF4",
                    "font": "FuturaPT-Book, Arial, sans-serif",
                    "size": "12px",
                    "align": "center"
                }


            ]

        },

        {

            "symbols": [

                {
                    "id": "symbol_13",
                    "bg": "giftOfOstara/img/paytable/symbol-13.png",
                    "xpos": "360",
                    "ypos": "186",
                    "height": "136px",
                    "width": "136px",
                    "text": {
                        "value": "X Multiplier<br>Awards a 2x, 4x, 6x, 8x, 10x bet multiplier",
                        "xpos": "-7",
                        "ypos": "150",
                        "width": "150",
                        "fill": "#ffffff",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "18px",
                        "align": "center"
                    }
                },

                {
                    "id": "symbol_09",
                    "bg": "giftOfOstara/img/symbol-SB.png",
                    "xpos": "570",
                    "ypos": "186",
                    "height": "136px",
                    "width": "136px",
                    "text": {
                        "value": "Re-Spin<br>Awards 1 free re-spin",
                        "xpos": "-7",
                        "ypos": "150",
                        "width": "150",
                        "fill": "#ffffff",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "18px",
                        "align": "center"
                    }
                },

                {
                    "id": "symbol_10",
                    "bg": "giftOfOstara/img/symbol-10.png",
                    "xpos": "780",
                    "ypos": "186",
                    "height": "136px",
                    "width": "136px",
                    "text": {
                        "value": "Scatter<br>Awards 30x bet multiplier",
                        "xpos": "-7",
                        "ypos": "150",
                        "width": "150",
                        "fill": "#ffffff",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "18px",
                        "align": "center"
                    }
                }

            ],

            "text": [

                {
                    "value": "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos": "390",
                    "ypos": "480",
                    "width": "500",
                    "fill": "#EDEBF4",
                    "font": "FuturaPT-Book, Arial, sans-serif",
                    "size": "12px",
                    "align": "center"
                }


            ]

        },

        {

            "symbols": [

                {
                    "id": "symbol_11",
                    "bg": "giftOfOstara/img/paytable/symbol-11.png",
                    "xpos": "310",
                    "ypos": "200",
                    "height": "136px",
                    "width": "136px",
                    "text": {
                        "value": "Wild<br>Completes winning combinations",
                        "xpos": "-25",
                        "ypos": "150",
                        "width": "200",
                        "fill": "#ffffff",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "18px",
                        "align": "center"
                    }
                },

                {
                    "id": "symbol_12",
                    "bg": "giftOfOstara/img/paytable/symbol-12.png",
                    "xpos": "570",
                    "ypos": "200",
                    "height": "136px",
                    "width": "136px",
                    "text": {
                        "value": "Sticky Wild<br>Awards 3 free spins and completes winning combinations",
                        "xpos": "-25",
                        "ypos": "150",
                        "width": "200",
                        "fill": "#ffffff",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "18px",
                        "align": "center"
                    }
                },

                {
                    "id": "wild-reel_0",
                    "bg": "giftOfOstara/img/wild-reel_0.png",
                    "xpos": "848",
                    "ypos": "170",
                    "width": "100px",
                    "text": {
                        "value": "Expanding Wild",
                        "xpos": "-25",
                        "ypos": "260",
                        "width": "150",
                        "fill": "#ffffff",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "18px",
                        "align": "center"
                    }
                }

            ],

            "text": [

                {
                    "value": "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos": "390",
                    "ypos": "480",
                    "width": "500",
                    "fill": "#EDEBF4",
                    "font": "FuturaPT-Book, Arial, sans-serif",
                    "size": "12px",
                    "align": "center"
                }


            ]

        },

        {
            "symbols": [

                {
                    "id": "symbol_00",
                    "bg": "giftOfOstara/img/symbol-00.png",
                    "xpos": "295",
                    "ypos": "200",
                    "height": "136px",
                    "width": "136px",
                    "text": {
                        "value": "x1",
                        "xpos": "14",
                        "ypos": "150",
                        "width": "109",
                        "left_fill": "#ffffff",
                        "right_fill": "#FEC7DB",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "center"
                    }

                },

                {
                    "id": "symbol_01",
                    "bg": "giftOfOstara/img/symbol-01.png",
                    "xpos": "435",
                    "ypos": "200",
                    "height": "136px",
                    "width": "136px",
                    "text": {
                        "value": "x2",
                        "xpos": "14",
                        "ypos": "150",
                        "width": "109",
                        "left_fill": "#ffffff",
                        "right_fill": "#FEC7DB",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "center"
                    }

                },

                {
                    "id": "symbol_02",
                    "bg": "giftOfOstara/img/symbol-02.png",
                    "xpos": "575",
                    "ypos": "200",
                    "height": "136px",
                    "width": "136px",
                    "text": {
                        "value": "x3",
                        "xpos": "14",
                        "ypos": "150",
                        "width": "109",
                        "left_fill": "#ffffff",
                        "right_fill": "#FEC7DB",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "center"
                    }

                },

                {
                    "id": "symbol_03",
                    "bg": "giftOfOstara/img/symbol-03.png",
                    "xpos": "715",
                    "ypos": "200",
                    "height": "136px",
                    "width": "136px",
                    "text": {
                        "value": "x4",
                        "xpos": "14",
                        "ypos": "150",
                        "width": "109",
                        "left_fill": "#ffffff",
                        "right_fill": "#FEC7DB",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "center"
                    }

                },

                {
                    "id": "symbol_04",
                    "bg": "giftOfOstara/img/symbol-04.png",
                    "xpos": "855",
                    "ypos": "200",
                    "height": "136px",
                    "width": "136px",
                    "text": {
                        "value": "x5",
                        "xpos": "14",
                        "ypos": "150",
                        "width": "109",
                        "left_fill": "#ffffff",
                        "right_fill": "#FEC7DB",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "center"
                    }

                }

            ],

            "text": [

                {
                    "value": "3 egg symbols in a row of the same type award 10 free spins special symbol egg on the reel award special symbol multiplier",
                    "xpos": "290",
                    "ypos": "390",
                    "width": "700",
                    "fill": "#FFFFFF",
                    "font": "FuturaPT-Book, Arial, sans-serif",
                    "size": "18px",
                    "align": "center"
                },

                {
                    "value": "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos": "390",
                    "ypos": "480",
                    "width": "500",
                    "fill": "#EDEBF4",
                    "font": "FuturaPT-Book, Arial, sans-serif",
                    "size": "12px",
                    "align": "center"
                }

            ]

        },

        {

            "lines": [1, 10],
            "ypos": "265",
            "font": "FuturaPT-Book, Arial, sans-serif",
            "text_colour": "#FFFFFF",
            "checked_colour": "#FFFFFF",
            "unchecked_colour": "#B82A44",

            "text": [

                {
                    "value": "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos": "390",
                    "ypos": "480",
                    "width": "500",
                    "fill": "#EDEBF4",
                    "font": "FuturaPT-Book, Arial, sans-serif",
                    "size": "12px",
                    "align": "center"
                }

            ]

        },

        {

            "lines": [11, 20],
            "ypos": "265",
            "font": "FuturaPT-Book, Arial, sans-serif",
            "text_colour": "#FFFFFF",
            "checked_colour": "#FFFFFF",
            "unchecked_colour": "#B82A44",

            "text": [
                {
                    "value": "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos": "390",
                    "ypos": "480",
                    "width": "500",
                    "fill": "#EDEBF4",
                    "font": "FuturaPT-Book, Arial, sans-serif",
                    "size": "12px",
                    "align": "center"
                }
            ]

        }
    ]

}
