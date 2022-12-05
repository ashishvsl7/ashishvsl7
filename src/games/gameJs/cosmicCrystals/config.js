
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
        "loaderBg": "cherryBlast/img/loader/bg.png",
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
                "anchorX":.5,
                "anchorY":.5
            },
            "fireFoxImg": {
                "name": "fireFoxLogo",
                "x": 700,
                "y": 680,
                "anchorX":.5,
                "anchorY":.5
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
            "volume": .5
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
        "sprite": "fonts/fontCosmicCrystals.png",
        "font": "fonts/fontCosmicCrystals.xml"
    }
}

var extScripts={
    "webfont": "15px FuturaPT-Heavy",
    "webfont1": "15px FuturaPT-Book"
}

var gameAssets = {
    "assets": {
        "icon0": "cosmicCrystals/img/symbol-00.png",
        "icon1": "cosmicCrystals/img/symbol-01.png",
        "icon2": "cosmicCrystals/img/symbol-02.png",
        "icon3": "cosmicCrystals/img/symbol-03.png",
        "icon4": "cosmicCrystals/img/symbol-04.png",
        "icon5": "cosmicCrystals/img/symbol-05.png",
        "icon6": "cosmicCrystals/img/symbol-06.png",
        "icon7": "cosmicCrystals/img/symbol-07.png",
        "icon8": "cosmicCrystals/img/symbol-08.png",
        "icon9": "cosmicCrystals/img/symbol-09.png",
        "icon10": "cosmicCrystals/img/symbol-10.png",
        "bicon0": "cosmicCrystals/img/b-symbol-00.png",
        "bicon1": "cosmicCrystals/img/b-symbol-01.png",
        "bicon2": "cosmicCrystals/img/b-symbol-02.png",
        "bicon3": "cosmicCrystals/img/b-symbol-03.png",
        "bicon4": "cosmicCrystals/img/b-symbol-04.png",
        "bicon5": "cosmicCrystals/img/b-symbol-05.png",
        "bicon6": "cosmicCrystals/img/b-symbol-06.png",
        "bicon7": "cosmicCrystals/img/b-symbol-07.png",
        "bicon8": "cosmicCrystals/img/b-symbol-08.png",
        "bicon9": "cosmicCrystals/img/b-symbol-09.png",
        "bicon10": "cosmicCrystals/img/b-symbol-10.png",
        "bottomBar": "gui/message-bar.png",
        "bgPanel": "cosmicCrystals/img/bgPanel.png",
        "bgPanelGame": "cosmicCrystals/img/bgPanelGame.png",
        "bgPreview":"cosmicCrystals/img/info-screen.png",
        "freeRoundsPanel":"cosmicCrystals/img/free-rounds.png",
        "bgAlpha": "cosmicCrystals/img/alpha.png",
        "bigWin":"cosmicCrystals/img/bigWin.png",
        "superWin":"cosmicCrystals/img/super-bigwin.png",
        "megaWin":"cosmicCrystals/img/mega-bigwin.png",
        "bg_r": "cosmicCrystals/img/bg/base-right.png",
        "bg_l": "cosmicCrystals/img/bg/base-left.png",
        "bg_b": "cosmicCrystals/img/bg/base-bottom.png",
        "bg_t": "cosmicCrystals/img/bg/base-top.png",
        "bg_m": "cosmicCrystals/img/bg/base-main.png",
        "buttonBg":"gui/generic/img/desktop/png/cp-info-bar.png",
        "volOnButton": "gui/btnVolOn.png",
        "volOffButton": "gui/btnVolOff.png",
        "bgPt":"cosmicCrystals/img/bgPt.png",
        "arrowUp":"cosmicCrystals/img/arrowUp.png",
        "arrowDw":"cosmicCrystals/img/arrowDw.png",
        "settingButton":"cosmicCrystals/img/gear.png",
        "ptAsset1": "cosmicCrystals/img/paytable/forward-btn-down.png",
        "ptAsset2": "cosmicCrystals/img/paytable/forward-btn-over.png",
        "ptAsset3": "cosmicCrystals/img/paytable/forward-btn-up.png",
        "ptAsset4": "cosmicCrystals/img/paytable/paytable.png",
        "ptAsset5": "cosmicCrystals/img/paytable/pt-symbol-00.png",
        "ptAsset6": "cosmicCrystals/img/paytable/pt-symbol-01.png",
        "ptAsset7": "cosmicCrystals/img/paytable/pt-symbol-02.png",
        "ptAsset8": "cosmicCrystals/img/paytable/pt-symbol-03.png",
        "ptAsset9": "cosmicCrystals/img/paytable/pt-symbol-04.png",
        "ptAsset10": "cosmicCrystals/img/paytable/pt-symbol-05.png",
        "ptAsset11": "cosmicCrystals/img/paytable/pt-symbol-06.png",
        "ptAsset12": "cosmicCrystals/img/paytable/pt-symbol-07.png",
        "ptAsset13": "cosmicCrystals/img/paytable/pt-symbol-08.png",
        "ptAsset14": "cosmicCrystals/img/paytable/pt-symbol-09.png",
        "ptAsset15": "cosmicCrystals/img/paytable/pt-symbol-10.png",
        "ptAsset16": "cosmicCrystals/img/paytable/respin.png",
        "ptAsset17": "cosmicCrystals/img/paytable/respin-scrnshot.png",
        "ptAsset18": "cosmicCrystals/img/paytable/wild-expanded-scrnshot.png"
    },
    "localizedAssets":{
        "graphAsset": {
            "logo": {
                "lang": ["zs","ko","jp"],
                "img": "cosmicCrystals/img/logo"
            }
        }
    },
    "buttonsSpriteSheet": {
        "container-btn": {
            "sprite": "cosmicCrystals/img/game-btn.png",
            "json": "cosmicCrystals/img/game-btn.png",
            "w": 188,
            "h": 88
        },
        "yesButton": {
            "sprite": "cosmicCrystals/img/yes-btn.png",
            "json": "cosmicCrystals/img/yes-btn.png",
            "w": 188,
            "h": 88
        },
        "noButton": {
            "sprite": "cosmicCrystals/img/no-btn.png",
            "json": "cosmicCrystals/img/no-btn.png",
            "w": 188,
            "h": 88
        },
        "check": {
            "sprite": "cosmicCrystals/img/radio-btns.png",
            "json": "cosmicCrystals/img/radio-btns.png",
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
            "json": "cosmicCrystals/img/anim/symbol-00.json",
            "sprite": "cosmicCrystals/img/anim/symbol-00.png"
        },
        "anim1": {
            "json": "cosmicCrystals/img/anim/symbol-01.json",
            "sprite": "cosmicCrystals/img/anim/symbol-01.png"
        },
        "anim2": {
            "json": "cosmicCrystals/img/anim/symbol-02.json",
            "sprite": "cosmicCrystals/img/anim/symbol-02.png"
        },
        "anim3": {
            "json": "cosmicCrystals/img/anim/symbol-03.json",
            "sprite": "cosmicCrystals/img/anim/symbol-03.png"
        },
        "anim4": {
            "json": "cosmicCrystals/img/anim/symbol-04.json",
            "sprite": "cosmicCrystals/img/anim/symbol-04.png"
        },
        "anim5": {
            "json": "cosmicCrystals/img/anim/symbol-05.json",
            "sprite": "cosmicCrystals/img/anim/symbol-05.png"
        },
        "anim6": {
            "json": "cosmicCrystals/img/anim/symbol-06.json",
            "sprite": "cosmicCrystals/img/anim/symbol-06.png"
        },
        "anim7": {
            "json": "cosmicCrystals/img/anim/symbol-07.json",
            "sprite": "cosmicCrystals/img/anim/symbol-07.png"
        },
        "anim8": {
            "json": "cosmicCrystals/img/anim/symbol-08.json",
            "sprite": "cosmicCrystals/img/anim/symbol-08.png"
        },
        "anim9": {
            "json": "cosmicCrystals/img/anim/symbol-09.json",
            "sprite": "cosmicCrystals/img/anim/symbol-09.png"
        },
        "wildReel": {
            "json": "cosmicCrystals/img/anim/symbol-10.json",
            "sprite": "cosmicCrystals/img/anim/symbol-10.png"
        },
        "gemPart0":{
            "json": "cosmicCrystals/img/anim/pinkgem.json",
            "sprite": "cosmicCrystals/img/anim/pinkgem.png"
        },
        "gemPart1":{
            "json": "cosmicCrystals/img/anim/purplegem.json",
            "sprite": "cosmicCrystals/img/anim/purplegem.png"
        },
        "gemPart2":{
            "json": "cosmicCrystals/img/anim/bluegem.json",
            "sprite": "cosmicCrystals/img/anim/bluegem.png"
        },
        "gemPart3":{
            "json": "cosmicCrystals/img/anim/greengem.json",
            "sprite": "cosmicCrystals/img/anim/greengem.png"
        },
        "gemPart4":{
            "json": "cosmicCrystals/img/anim/yellowgem.json",
            "sprite": "cosmicCrystals/img/anim/yellowgem.png"
        },
        "gemPart5":{
            "json": "cosmicCrystals/img/anim/pinkgem.json",
            "sprite": "cosmicCrystals/img/anim/pinkgem.png"
        },
        "gemPart6":{
            "json": "cosmicCrystals/img/anim/purplegem.json",
            "sprite": "cosmicCrystals/img/anim/purplegem.png"
        },
        "gemPart7":{
            "json": "cosmicCrystals/img/anim/bluegem.json",
            "sprite": "cosmicCrystals/img/anim/bluegem.png"
        },
        "gemPart8":{
            "json": "cosmicCrystals/img/anim/greengem.json",
            "sprite": "cosmicCrystals/img/anim/greengem.png"
        },
        "gemPart9":{
            "json": "cosmicCrystals/img/anim/yellowgem.json",
            "sprite": "cosmicCrystals/img/anim/yellowgem.png"
        },
        "sideCloud":{
            "json": "cosmicCrystals/img/anim/side-cloud-anim.json",
            "sprite": "cosmicCrystals/img/anim/side-cloud-anim.png"
        },
        "cloud":{
            "json": "cosmicCrystals/img/anim/clouds-bg.json",
            "sprite": "cosmicCrystals/img/anim/clouds-bg.png"
        },
        "sparkle":{
            "json": "cosmicCrystals/img/anim/sparkle.json",
            "sprite": "cosmicCrystals/img/anim/sparkle.png"
        },
        "swipeFull":{
            "sprite": "cosmicCrystals/img/arrow.png",
            "json": "cosmicCrystals/img/arrow.json"
        },
        "respin":{
            "json": "cosmicCrystals/img/anim/respin.json",
            "sprite": "cosmicCrystals/img/anim/respin.png"
        }
    },
    "importantSounds": {
        "spinClick": {
            "name": "cosmicCrystals/sounds/spinClick.mp3",
            "volume":.1
        },
        "reelSound": {
            "name": "cosmicCrystals/sounds/reelSound.mp3",
            "volume":.2
        },
        "reelStop": {
            "name": "cosmicCrystals/sounds/reelStop.mp3",
            "volume":.1
        },
        "fsWin": {
            "name": "cosmicCrystals/sounds/fsWin.mp3",
            "volume":.4
        },
        "wildReel": {
            "name": "cosmicCrystals/sounds/wildReel.mp3",
            "volume": .7
        }
    },
    "sounds": {
        "click": {
            "name": "cosmicCrystals/sounds/click.mp3",
            "volume":.1
        },
        "slide": {
            "name": "cosmicCrystals/sounds/slide.mp3",
            "volume":.1
        },
        "line": {
            "name": "cosmicCrystals/sounds/line.mp3",
            "volume":.3
        },
        "smbWin_0": {
            "name": "cosmicCrystals/sounds/smbWin_0.mp3",
            "volume":.7
        },
        "smbWin_1": {
            "name": "cosmicCrystals/sounds/smbWin_0.mp3",
            "volume":.7
        },
        "smbWin_2": {
            "name": "cosmicCrystals/sounds/smbWin_0.mp3",
            "volume":.7
        },
        "smbWin_3": {
            "name": "cosmicCrystals/sounds/smbWin_0.mp3",
            "volume":.7
        },
        "smbWin_4": {
            "name": "cosmicCrystals/sounds/smbWin_0.mp3",
            "volume":.7
        },
        "smbWin_5": {
            "name": "cosmicCrystals/sounds/smbWin_5.mp3",
            "volume":.7
        },
        "smbWin_6": {
            "name": "cosmicCrystals/sounds/smbWin_6.mp3",
            "volume":.9
        },
        "smbWin_7": {
            "name": "cosmicCrystals/sounds/smbWin_7.mp3",
            "volume":.35
        },
        "smbWin_8": {
            "name": "cosmicCrystals/sounds/smbWin_8.mp3",
            "volume":.4
        },
        "smbWin_9": {
            "name": "cosmicCrystals/sounds/smbWin_9.mp3",
            "volume":.4
        },
        "winEffect_1": {
            "name": "cosmicCrystals/sounds/bigWin.mp3",
            "volume":.4
        },
        "winEffect_2": {
            "name": "cosmicCrystals/sounds/superBigWin.mp3",
            "volume":.5
        },
        "winEffect_3": {
            "name": "cosmicCrystals/sounds/megaBigWin.mp3",
            "volume":.6
        },
        "incWin": {
            "name": "cosmicCrystals/sounds/counter.mp3",
            "volume": .7,
            "loop":true
        },
        "wildReelOut": {
            "name": "cosmicCrystals/sounds/wildOut.mp3",
            "volume": .3
        },
        "bigWinBg": {
            "name": "cosmicCrystals/sounds/bigWinBg.mp3",
            "volume": .4,
            "loop":true
        }
    },
    "bgSounds": {
        "bgSlot": {
            "name": "cosmicCrystals/sounds/bg.mp3",
            "volume": .4
        },
        "bgFs": {
            "name": "cosmicCrystals/sounds/bgFs.mp3",
            "volume": .7
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
        "idleObjects":{
            "visible":false,
            "frequency":[500,1000],
            "objects": {
                "s1": {
                    "name": "sparkle",
                    "x": 152,
                    "y": 409,
                    "fps":12,
                    "prob":10
                },
                "s2": {
                    "name": "sparkle",
                    "x": 18,
                    "y": 445,
                    "fps":12,
                    "prob":10
                },
                "s3": {
                    "name": "sparkle",
                    "x": 1129,
                    "y": 418,
                    "fps":12,
                    "prob":10
                },
                "s4": {
                    "name": "sparkle",
                    "x": 1212,
                    "y": 478,
                    "fps":12,
                    "prob":10
                },
                "container": {
                    "prob": 5,
                    "cL": {
                        "name": "sideCloud",
                        "x": 100,
                        "y": 370,
                        "alpha": 1,
                        "scaleX": -2,
                        "scaleY": 2,
                        "fps": 24,
                        "anchorX": 0,
                        "anchorY": 0
                    },
                    "cR": {
                        "name": "sideCloud",
                        "x": 1180,
                        "y": 370,
                        "alpha": 1,
                        "scaleX": 2,
                        "scaleY": 2,
                        "fps": 24,
                        "anchorX": 0,
                        "anchorY": 0
                    }
                }
            }
        },
        "respin":{
            "visible":false,
            "objects":{
                "cL": {
                    "name": "sideCloud",
                    "x": 100,
                    "y": 370,
                    "alpha":1,
                    "scaleX":-2,
                    "scaleY":2,
                    "fps":24,
                    "anchorX":0,
                    "anchorY":0,
                    "prob":5
                },
                "cR": {
                    "name": "sideCloud",
                    "x": 1180,
                    "y": 370,
                    "alpha":1,
                    "scaleX":2,
                    "scaleY":2,
                    "fps":24,
                    "anchorX":0,
                    "anchorY":0,
                    "prob":5
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
        "lines": {},
        "reels": {},
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
        "logo": {
            "visible":false,
            "graphAsset": {
                "logo": {
                    "name": "logo",
                    "x": 640,
                    "y": 68,
                    "anchorX":.5,
                    "anchorY":.5,
                }
            }
        },
        "scatter": {},
        "wild": {
        },
        "wins": {},
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
                    "x": 415,
                    "y": 32,
                    "fill": "#00E2E2",
                    "font": "13px Futura ,Arial",
                    "text": "Free Rounds:",
                    "anchorX": 1
                },
                "frValue": {
                    "x": 382,
                    "y": 48,
                    "fill": "#00E2E2",
                    "font": "23px Futura ,Arial",
                    "text": "5",
                    "anchorX": 0.5
                },
                "frTotWonLabel": {
                    "x": 925,
                    "y": 32,
                    "fill": "#00E2E2",
                    "font": "13px Futura ,Arial",
                    "text": "Total won:",
                    "anchorX": 1
                },
                "frTotWonValue": {
                    "x": 895,
                    "y": 48,
                    "fill": "#00E2E2",
                    "font": "23px Futura ,Arial",
                    "text": "£1234:00",
                    "anchorX": 0.5
                }
            }
        },
        "centralWin": {
            "visible":false,
            "thresHolds":[600,1500,3000],
            "maxObjNum":200,
            "graphAsset": {
                "group":{
                    "name":"centralFuntain"
                },
                "bigWin":{
                    "name":"bigWin",
                    "x": 640,
                    "y": 352,
                    "anchorX":.5,
                    "anchorY":.5,
                    "visible":false
                },
                "sBigWin":{
                    "name":"superWin",
                    "x": 640,
                    "y": 300,
                    "anchorX":.5,
                    "anchorY":.5,
                    "visible":false
                },
                "mBigWin":{
                    "name":"megaWin",
                    "x": 640,
                    "y": 290,
                    "anchorX":.5,
                    "anchorY":.5,
                    "visible":false
                }
            }
        },
        "centralFuntainSmallObj":{},
        "centralLineWin": {
            "visible":false,
            "texts": {
                "lineWin": {
                    "x":640,
                    "y":450,
                    "bmpFont": "bmpFont",
                    "size":"35",
                    "text": "",
                    "anchorX": .5,
                    "anchorY": .5
                }
            }
        },
        "respinPanel": {
            "visible": true,
            "name": "respin",
            "x": 664,
            "y": 350,
            "anchorX":.5
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
                    "y": 360,
                    "anchorX": .5,
                    "anchorY": .5
                }
            },
            "texts": {
                "frWLabelTitol": {
                    "x": 640,
                    "y": 240,
                    "fill": "#00E2E2",
                    "font": "14px Futura PT, Arial",
                    "text":"Free Rounds",
                    "anchorX": .5
                },
                "frWLabel": {
                    "x": 640,
                    "y": 270,
                    "fill": "#00E2E2",
                    "font": "18px Futura PT, Arial",
                    "text":"",
                    "align":"center",
                    "anchorX": .5
                },
                "frValue1": {
                    "x": 640,
                    "y": 340,
                    "fill": "#00E2E2",
                    "font": "24px Futura PT, Arial",
                    "text": "5",
                    "anchorX": .5
                },
                "frWLabel1": {
                    "x": 640,
                    "y": 370,
                    "fill": "#00E2E2",
                    "font": "18px Futura PT, Arial",
                    "text": "",
                    "align":"center",
                    "anchorX": .5
                }
            }

        },
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
                    "y": 165,
                    "anchorX":.5,
                    "anchorY":.5
                }
            },
            "texts": {
                "txtPrev3": {
                    "x": 640,
                    "y": 280,
                    "fill": "#00E2E2",
                    "font": "25px Futura PT, Arial",
                    "text": "Losing spins award a\nfree respin where\nwild reels stick",
                    "align":"center",
                    "anchorX":.5
                },
                "buttons": {}
            },
            "checkbox": {
                "name": "check",
                "text": "Don't show anymore",
                "font": "15px Arial",
                "color": "#00E2E2",
                "x": 50,
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
                            "fill": "#00E2E2",
                            "font": "25px Futura PT, Arial",
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
                    "scaleX":1.15,
                    "scaleY":1.15,
                    "visible":false
                }

            },
            "texts": {
                "msg1": {
                    "x": 640,
                    "y": 270,
                    "fill": "#00E2E2",
                    "font": "28px Futura PT, Arial",
                    "text": "",
                    "anchorX": .5
                },
                "msg2": {
                    "x": 640,
                    "y": 370,
                    "fill": "#00E2E2",
                    "font": "22px Futura PT,Arial",
                    "text": "",
                    "anchorX": .5
                }
            },
            "buttons": {
                "yes": {
                    "name": "yesButton",
                    "x": 500,
                    "y": 560,
                    "evt": "doOk"
                },
                "myAccount": {
                    "name": "container-btn",
                    "x": 650,
                    "y": 560,
                    "evt": "doMyAccount",
                    "texts": {
                        "noLabel": {
                            "x": 0,
                            "y": -13,
                            "fill": "#00E2E2",
                            "font": "20px  Futura PT,Arial",
                            "text": "My Account",
                            "anchorX": .5
                        }
                    }
                },
                "no": {
                    "name": "noButton",
                    "x": 775,
                    "y": 560,
                    "evt": "doKo"
                },
                "ok": {
                    "name": "container-btn",
                    "x": 640,
                    "anchorX": .5,
                    "y": 560,
                    "evt": "doOk",
                    "texts": {
                        "noLabel": {
                            "x": 0,
                            "y": -13,
                            "fill": "#00E2E2",
                            "font": "20px  Futura PT,Arial",
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
            "selectorY":210,
            "selectorX":640,
            "textCol":"#00E2E2",
            "maskW":725,
            "maskH":100,
            "maskY":300,
            "maskX":280,

            "graphAsset": {
                "bgmsg": {
                    "name": "bgAlpha",
                    "x": 0,
                    "y": 0
                },
                "generic": {
                    "name": "bgPanelGame",
                    "x": 640,
                    "y": 310,
                    "anchorX": .5,
                    "anchorY": .5,
                    "scaleX":1.4,
                    "scaleY":1.2,
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
                            "fill": "#00E2E2",
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
                            "fill": "#00E2E2",
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
                            "fill": "#00E2E2",
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
    "slotEngine":"CosmicEngine",
    "log":true,
    "canSwipe":true,
    "comment_preview":"enable feature preview screen",
    "preview":true,
    "previewTout":15000,
    "spinType": "Spin",
    "comment_winType":"spin class used by the game on line central win field",
    "winType": "BounceWin",
    "comment_winTypeStatus":"spin class used by the game on status bar win field",
    "statusWinType": "BounceWin",
    "delayAfterWinAmt":1000,
    "comment_delayBeforeIdle":"after the first winning dicplay cycle with animation the engin starts the idle cycle with just win amount for each line and a symple winning HL",
    "delayBeforeIdle":1000,
    "comment_idleLineTime":"single line time during idle cycle winning display",
    "idleLineTime":800,
    "comment__winTxtColors":"win amount counter colors",
    "winTxtColors":["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
    "comment_type of lines": "the class will handle lineDrawing",
    "lineType": "AggregateLineDraw",
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
            "reelSecondMovementTime":0.4,
            "reelLoopInterval":.14,
            "reelPreMovement": 25,
            "reelPreMovementTime": .3,
            "reelBaseInterval": 6,
            "reelStopInterval": 1.35,
            "reelSpinBounceMeasure": 40,
            "reelSpinBounceTime": .38,
            "reelSpinBounceForce": 1.2
        },
        "default":{
            "stopEnabled":true,
            "reelSecondMovementTime":0.4,
            "reelLoopInterval":.18,
            "reelPreMovement": 25,
            "reelPreMovementTime": .2,
            "reelBaseInterval": 1,
            "reelStopInterval": 1.15,
            "reelSpinBounceMeasure": 40,
            "reelSpinBounceTime": .28,
            "reelSpinBounceForce": 1.2
        }
    },
    "numIcon": 9,
    "loadTout": 30,
    "credits": "5000",
    "bet": "0.50",
    "wildType": "WildReel",
    "wildNum": [10],
    "wildReelRollbackSpinDelay": 1200,
    "rollbackBaseTime":1300,
    "wildReelOrigin":0,
    "animDelayAfterWild": 1500,
    "freeRounds": "normal",
    "freeSpins":"Respin",
    "_fsIcon": 1,
    "fsSpinDelay": 750,
    "minFsSmbs": 3,
    "_scatterIcon": 11,
    "_scatterType": "normal",
    "_twinReelsFeature": "normal",
    "winTxtClasses": [1, 2, 5, 10, 20, 50, 100, 300, 500, 1000],
    "smb_colors": [0xff33cc, 0xcc33ff, 0x0066ff, 0x00ff99, 0xffcc00, 0xff33cc, 0xcc33ff, 0x0066ff, 0x00ff99, 0xffcc00, 0xffcc00],
    "smbMinAnimTime": [.3,.3,.3,.3,.3,.4,.4,.5,.5,.6],
    "additionalPreText":"",
    "additionalPostText":"",
    "reel": {
        "deltaX_0": 200,
        "deltaX": 176,
        "deltaY_0": 632,
        "deltaY": 176,
        "time": [1]
    },
    "icon": {
        "x": 0,
        "y": 0,
        "width": 176,
        "height": 176
    }
}
var lineConfig = {
    "win": {
        "min": 2,
        "wild": 1,
        "initialDelay":200,
        "delay": 100,
        "duration": 2000
    },
    "line": {
        "comment_linesNumber":"number of lines to draw in winning animation",
        "linesNumber": 1,
        "color": "0xFFD700",
        "x_origin":0,
        "tickBase": 1,
        "alpha":1,
        "pointToPointSpeed": .05,
        "duration":30,
        "showWinWithSmbColor":true,
        "multipleAnimation":[true,true,true,true,true,true,true,true,true,true,true,true],
        "lineColours":[0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff,0xffffff],
    }
}

var paytableAssets = {

	"bg" : "cosmicCrystals/img/paytable/paytable.png",
    "fullscreen": true,
    "closeBtn": {

        "ypos": "125",
        "xpos": "1010"

    },

	"pagination" : {

		"ypos" : "570",
		"xpos" : "505",
		"checked" : "#00E2E2",
		"unchecked" : "#000000"

	},

    "helpPath" : gameParams.pathCDN + 'premiumslots/remoteHelp.jsp?rPage=help/desktop/cosmicCrystals/help_' + gameParams.lang,

	"buttons" : [

		{
			"id" : "left",
			"ypos" : "500",
			"xpos" : "270",
			"bg_up" : "cosmicCrystals/img/paytable/forward-btn-up.png",
			"bg_over" : "cosmicCrystals/img/paytable/forward-btn-over.png",
			"bg_down" : "cosmicCrystals/img/paytable/forward-btn-down.png",
			"direction" : -1
		},

		{
			"id" : "right",
			"ypos" : "500",
			"xpos" : "910",
			"bg_up" : "cosmicCrystals/img/paytable/forward-btn-up.png",
			"bg_over" : "cosmicCrystals/img/paytable/forward-btn-over.png",
			"bg_down" : "cosmicCrystals/img/paytable/forward-btn-down.png",
			"direction" : 1
		}

	],

	"pages" : [
        {

            "gameguide" : true,
            "title" : "Cosmic Crystals<sup>TM</sup> Game Rules",
            "title_xpos" : "495",
            "title_ypos" : "115",
            "xpos" : "230",
            "ypos" : "180",
            "height" : "320",
            "width" : "820",
            "fill": "#FF85EE",
            "font": "FuturaPT-Book, Arial, sans-serif",
            "rtp": [
                "96.48",
                "95.01",
                "92.30"
            ]

        },
		{

			"symbols" : [

				{
					"id" : "symbol_00",
					"bg" : "cosmicCrystals/img/paytable/pt-symbol-00.png",
					"xpos" : "250",
					"ypos" : "150",
					"text" : {
						"value" : 0,
						"xpos" : "160",
						"ypos" : "22",
						"width" : "90",
						"left_fill" : "#FF85EE",
						"right_fill" : "#00E2E2",
						"font" : "FuturaPT-Book, Arial, sans-serif",
						"size" : "20px",
						"align" : "left",
						"shadow" : "2px 2px 3px #000000",
						"effect" : {
							"type" : "slant",
							"start" : 20,
							"increment" : 5
						}
					}
				},

				{
					"id" : "symbol_01",
					"bg" : "cosmicCrystals/img/paytable/pt-symbol-01.png",
					"xpos" : "516",
					"ypos" : "150",
					"text" : {
						"value" : 1,
						"xpos" : "160",
						"ypos" : "22",
						"width" : "90",
						"left_fill" : "#FF85EE",
						"right_fill" : "#00E2E2",
						"font" : "FuturaPT-Book, Arial, sans-serif",
						"size" : "20px",
						"align" : "left",
						"shadow" : "2px 2px 3px #000000",
						"effect" : {
							"type" : "slant",
							"start" : 20,
							"increment" : 5
						}
					}
				},

				{
					"id" : "symbol_02",
					"bg" : "cosmicCrystals/img/paytable/pt-symbol-02.png",
					"xpos" : "782",
					"ypos" : "150",
					"text" : {
						"value" : 2,
						"xpos" : "160",
						"ypos" : "22",
						"width" : "90",
						"left_fill" : "#FF85EE",
						"right_fill" : "#00E2E2",
						"font" : "FuturaPT-Book, Arial, sans-serif",
						"size" : "20px",
						"align" : "left",
						"shadow" : "2px 2px 3px #000000",
						"effect" : {
							"type" : "slant",
							"start" : 20,
							"increment" : 5
						}
					}
				},

				{
					"id" : "symbol_03",
					"bg" : "cosmicCrystals/img/paytable/pt-symbol-03.png",
					"xpos" : "380",
					"ypos" : "315",
					"text" : {
						"value" : 3,
						"xpos" : "158",
						"ypos" : "20",
						"width" : "90",
						"left_fill" : "#FF85EE",
						"right_fill" : "#00E2E2",
						"font" : "FuturaPT-Book, Arial, sans-serif",
						"size" : "20px",
						"align" : "left",
						"shadow" : "2px 2px 3px #000000",
						"effect" : {
							"type" : "slant",
							"start" : 20,
							"increment" : 5
						}
					}
				},

				{
					"id" : "symbol_04",
					"bg" : "cosmicCrystals/img/paytable/pt-symbol-04.png",
					"xpos" : "652",
					"ypos" : "315",
					"text" : {
						"value" : 4,
						"xpos" : "158",
						"ypos" : "20",
						"width" : "90",
						"left_fill" : "#FF85EE",
						"right_fill" : "#00E2E2",
						"font" : "FuturaPT-Book, Arial, sans-serif",
						"size" : "20px",
						"align" : "left",
						"shadow" : "2px 2px 3px #000000",
						"effect" : {
							"type" : "slant",
							"start" : 20,
							"increment" : 5
						}
					}
				}

			],

			"text" : [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : gameParams.lang == "ru" ? "475" : "495",
                    "width" : "500",
                    "fill" : "#FF85EE",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }


			]

		},

		{

			"symbols" : [

				{
					"id" : "symbol_05",
					"bg" : "cosmicCrystals/img/paytable/pt-symbol-05.png",
					"xpos" : "250",
					"ypos" : "150",
					"text" : {
						"value" : 5,
						"xpos" : "160",
						"ypos" : "20",
						"width" : "90",
						"left_fill" : "#FF85EE",
						"right_fill" : "#00E2E2",
						"font" : "FuturaPT-Book, Arial, sans-serif",
						"size" : "16px",
						"align" : "left",
						"shadow" : "2px 2px 3px #000000",
						"effect" : {
							"type" : "slant",
							"start" : 20,
							"increment" : 5
						}
					}
				},

				{
					"id" : "symbol_06",
					"bg" : "cosmicCrystals/img/paytable/pt-symbol-06.png",
					"xpos" : "516",
					"ypos" : "150",
					"text" : {
						"value" : 6,
						"xpos" : "160",
						"ypos" : "20",
						"width" : "90",
						"left_fill" : "#FF85EE",
						"right_fill" : "#00E2E2",
						"font" : "FuturaPT-Book, Arial, sans-serif",
						"size" : "16px",
						"align" : "left",
						"shadow" : "2px 2px 3px #000000",
						"effect" : {
							"type" : "slant",
							"start" : 20,
							"increment" : 5
						}
					}
				},

				{
					"id" : "symbol_07",
					"bg" : "cosmicCrystals/img/paytable/pt-symbol-07.png",
					"xpos" : "782",
					"ypos" : "150",
					"text" : {
						"value" : 7,
						"xpos" : "160",
						"ypos" : "20",
						"width" : "90",
						"left_fill" : "#FF85EE",
						"right_fill" : "#00E2E2",
						"font" : "FuturaPT-Book, Arial, sans-serif",
						"size" : "16px",
						"align" : "left",
						"shadow" : "2px 2px 3px #000000",
						"effect" : {
							"type" : "slant",
							"start" : 20,
							"increment" : 5
						}
					}
				},

				{
					"id" : "symbol_08",
					"bg" : "cosmicCrystals/img/paytable/pt-symbol-08.png",
					"xpos" : "380",
					"ypos" : "315",
					"text" : {
						"value" : 8,
						"xpos" : "155",
						"ypos" : "18",
						"width" : "90",
						"left_fill" : "#FF85EE",
						"right_fill" : "#00E2E2",
						"font" : "FuturaPT-Book, Arial, sans-serif",
						"size" : "16px",
						"align" : "left",
						"shadow" : "2px 2px 3px #000000",
						"effect" : {
							"type" : "slant",
							"start" : 20,
							"increment" : 5
						}
					}
				},

				{
					"id" : "symbol_09",
					"bg" : "cosmicCrystals/img/paytable/pt-symbol-09.png",
					"xpos" : "652",
					"ypos" : "315",
					"text" : {
						"value" : 9,
						"xpos" : "152",
						"ypos" : "18",
						"width" : "90",
						"left_fill" : "#FF85EE",
						"right_fill" : "#00E2E2",
						"font" : "FuturaPT-Book, Arial, sans-serif",
						"size" : "16px",
						"align" : "left",
						"shadow" : "2px 2px 3px #000000",
						"effect" : {
							"type" : "slant",
							"start" : 20,
							"increment" : 5
						}
					}
				}

			],

			"text" : [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : gameParams.lang == "ru" ? "475" : "495",
                    "width" : "500",
                    "fill" : "#FF85EE",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }


			]

		},

		{

			"symbols" : [

				{
					"id" : "symbol_10",
					"bg" : "cosmicCrystals/img/paytable/pt-symbol-10.png",
					"xpos" : "325",
					"ypos" : "204",
					"text" : {
						"value" : "Replaces all symbols!",
						"xpos" : "132",
						"ypos" : gameParams.lang == "jp" ? "20" : (gameParams.lang == "ru" ? "28" : "38"),
						"width" : "93",
						"fill" : "#00E2E2",
						"font" : "FuturaPT-Book, Arial, sans-serif",
						"size" : "18px",
						"align" : "center",
						"shadow" : "2px 2px 3px #000000"
					}
				},

				{
					"id" : "wild-expanded-scrnshot",
					"bg" : "cosmicCrystals/img/paytable/wild-expanded-scrnshot.png",
					"xpos" : "640",
					"ypos" : "175"
				}

			],

			"text" : [

				{
					"value" : "Expands over the reel.",
					"xpos" : "360",
					"ypos" : "335",
					"width" : "175",
					"fill" : "#FF85EE",
					"font" : "FuturaPT-Book, Arial, sans-serif",
					"size" : "18px",
					"align" : "center"

				},

				{
					"value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
					"xpos" : "390",
					"ypos" : gameParams.lang == "ru" ? "475" : "495",
					"width" : "500",
					"fill" : "#FF85EE",
					"font" : "FuturaPT-Book, Arial, sans-serif",
					"size" : "12px",
					"align" : "center"
				}

			]

		},

		{

			"symbols" : [

				{
					"id" : "respin",
					"bg" : "cosmicCrystals/img/paytable/respin.png",
					"xpos" : "422",
					"ypos" : "135"
				},

				{
					"id" : "respin-scrnshot",
					"bg" : "cosmicCrystals/img/paytable/respin-scrnshot.png",
					"xpos" : "650",
					"ypos" : "250",
				}

			],

			"text" : [
                {
                    "value" : "When a non winning hand occurs FREE re-spin rounds start until the first winning combination takes place. Wilds reel are sticky during FREE re-spins.",
                    "xpos" : "275",
                    "ypos" : "265",
                    "width" : "315",
                    "fill" : "#FF85EE",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "18px",
                    "align" : "center"
                },

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : gameParams.lang == "ru" ? "475" : "495",
                    "width" : "500",
                    "fill" : "#FF85EE",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }


            ]

		},

		{

			"lines" : [1, 20],
            "font": "FuturaPT-Book, Arial, sans-serif",
			"text_colour" : "#FF85EE",
			"checked_colour" : "#FFFFFF",
			"unchecked_colour" : "#bf64ef",

			"text" : [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : gameParams.lang == "ru" ? "475" : "495",
                    "width" : "500",
                    "fill" : "#FF85EE",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }


            ]

		},

		{

			"lines" : [21, 40],
            "font": "FuturaPT-Book, Arial, sans-serif",
			"text_colour" : "#FF85EE",
			"checked_colour" : "#FFFFFF",
			"unchecked_colour" : "#bf64ef",

			"text" : [

				{
					"value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
					"xpos" : "390",
					"ypos" : gameParams.lang == "ru" ? "475" : "495",
					"width" : "500",
					"fill" : "#FF85EE",
					"font" : "FuturaPT-Book, Arial, sans-serif",
					"size" : "12px",
					"align" : "center"
				}

			]

		},

		{

			"lines" : [41, 50],
            "font": "FuturaPT-Book, Arial, sans-serif",
			"text_colour" : "#FF85EE",
			"checked_colour" : "#FFFFFF",
			"unchecked_colour" : "#bf64ef",

			"text" : [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : gameParams.lang == "ru" ? "475" : "495",
                    "width" : "500",
                    "fill" : "#FF85EE",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

			]

		}



	]

}
