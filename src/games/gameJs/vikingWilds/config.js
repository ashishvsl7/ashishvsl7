
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
        "sprite": "fonts/fontViking.png",
        "font": "fonts/fontViking.xml"
    },
    "bmpFontSmall":{
        "sprite": "fonts/fontVikingSmall.png",
        "font": "fonts/fontVikingSmall.xml"
    },
    "multiBmpFont":{
        "sprite": "fonts/multiplyViking.png",
        "font": "fonts/multiplyViking.xml"
    }
}

var extScripts={
    "webfont": "15px FuturaPT-Heavy",
    "webfont1": "15px FuturaPT-Book"
}
var gameAssets = {
    "assets": {
        "icon0": "vikingWilds/img/symbol-00.png",
        "icon1": "vikingWilds/img/symbol-01.png",
        "icon2": "vikingWilds/img/symbol-02.png",
        "icon3": "vikingWilds/img/symbol-03.png",
        "icon4": "vikingWilds/img/symbol-04.png",
        "icon5": "vikingWilds/img/symbol-05.png",
        "icon6": "vikingWilds/img/symbol-06.png",
        "icon7": "vikingWilds/img/symbol-07.png",
        "icon8": "vikingWilds/img/symbol-08.png",
        "icon9": "vikingWilds/img/symbol-09.png",
        "icon10": "vikingWilds/img/symbol-10.png",
        "icon11": "vikingWilds/img/symbol-11.png",
        "icon12": "vikingWilds/img/symbol-12.png",
        "icon13": "vikingWilds/img/symbol-13.png",
        "icon14": "vikingWilds/img/symbol-12.png",
        "icon15": "vikingWilds/img/symbol-12.png",
        "icon16": "vikingWilds/img/symbol-12.png",
        "icon17": "vikingWilds/img/symbol-12.png",
        "icon18": "vikingWilds/img/symbol-14.png",
        "none": "vikingWilds/img/transparent.png",

        "bicon0": "vikingWilds/img/b-symbol-00.png",
        "bicon1": "vikingWilds/img/b-symbol-01.png",
        "bicon2": "vikingWilds/img/b-symbol-02.png",
        "bicon3": "vikingWilds/img/b-symbol-03.png",
        "bicon4": "vikingWilds/img/b-symbol-04.png",
        "bicon5": "vikingWilds/img/b-symbol-05.png",
        "bicon6": "vikingWilds/img/b-symbol-06.png",
        "bicon7": "vikingWilds/img/b-symbol-07.png",
        "bicon8": "vikingWilds/img/b-symbol-08.png",
        "bicon9": "vikingWilds/img/b-symbol-09.png",
        "bicon10": "vikingWilds/img/b-symbol-10.png",
        "bicon11": "vikingWilds/img/b-symbol-11.png",
        "bicon12": "vikingWilds/img/b-symbol-12.png",
        "bicon13": "vikingWilds/img/b-symbol-13.png",
        
        "winWayObj": "vikingWilds/img/win-ways.png",
        "bottomBar": "gui/message-bar.png",
        "bgPanel": "vikingWilds/img/bgPanel.png",
        "bgPanelGame": "vikingWilds/img/bgPanel.png",
        "bgPreview":"vikingWilds/img/intro-page.jpg",

        "keyShadow_1":"vikingWilds/img/key-01-s.png",
        "keyShadow_2":"vikingWilds/img/key-02-s.png",
        "keyShadow_3":"vikingWilds/img/key-03-s.png",
        "bgAlpha": "vikingWilds/img/alpha.png",
        "bg":"vikingWilds/img/bg/bg-base-main.jpg",
        "bgFS":"vikingWilds/img/bg/fs-base-main.jpg",
        "foreground":"vikingWilds/img/bg/foreg-ground.png",
        "gate":"vikingWilds/img/gate.png",
        "reel-devide-mid": "vikingWilds/img/bg/reels/reel-devide-mid.png",
        "reel-devide-top": "vikingWilds/img/bg/reels/reel-devide-top.png",
        "reel-devide-btm": "vikingWilds/img/bg/reels/reel-devide-btm.png",
        "reelBg": "vikingWilds/img/bg/reels/reel-back.png",
        "sideWing": "vikingWilds/img/bg/reels/right-wing.png",
        "sideWingL": "vikingWilds/img/bg/reels/left-wing.png",
        "fcharBg": "vikingWilds/img/anim/character-anim/behind-characters.png",
        "multBg":"vikingWilds/img/freespin-side-feature.png",
        "boxTotWin":"vikingWilds/img/total-win-box.png",
        "boxFsNum":"vikingWilds/img/freespin-box.png",
        "boxWinWay":"vikingWilds/img/winway-box.png",
        "logo":"vikingWilds/img/logo.png",
        "logoPreview":"vikingWilds/img/logoPreview.png",
        "bigWin":"vikingWilds/img/big-win.png",
        "superWin":"vikingWilds/img/epic-win.png",
        "megaWin":"vikingWilds/img/ultra-win.png",
        "fog":"vikingWilds/img/bg/clouds.png",
        "slide_0":"vikingWilds/img/paytable/slide_0.png",
        "slide_1":"vikingWilds/img/paytable/slide_1.png",
        "slide_2":"vikingWilds/img/paytable/slide_2.png",
        "slide_3":"vikingWilds/img/paytable/slide_3.png",
        "slide_4":"vikingWilds/img/paytable/slide_4.png",
        "buttonBg":"gui/generic/img/desktop/png/cp-info-bar.png",
        "volOnButton": "gui/btnVolOn.png",
        "volOffButton": "gui/btnVolOff.png",
        "icon12_expanded": "vikingWilds/img/paytable/icon12_expanded.png"
    },
    "localizedAssets":{
        "animAssets": {
            "logoText": {
                "lang": ["zs","ko","jp","sp"],
                "sprite": "vikingWilds/img/anim/logo-anim",
                "json": "vikingWilds/img/anim/logo-anim"
            }
            ,"freeSpinPanel": {
                "lang": ["zs","ko","jp","sp"],
                "sprite": "vikingWilds/img/anim/freespins",
                "json": "vikingWilds/img/anim/freespins"
            },
            "freeRoundsPanel": {
                "lang": ["zs","ko","jp","sp"],
                "sprite": "vikingWilds/img/anim/freerounds",
                "json": "vikingWilds/img/anim/freerounds"
            }
        }
    },
    "buttonsSpriteSheet": {
        "container-btn": {
            "sprite": "vikingWilds/img/game-btn.png",
            "json": "vikingWilds/img/game-btn.png",
            "w": 210,
            "h": 66
        },
        "yesButton": {
            "sprite": "vikingWilds/img/yes-btn.png",
            "json": "vikingWilds/img/yes-btn.png",
            "w": 54,
            "h": 44
        },
        "noButton": {
            "sprite": "vikingWilds/img/no-btn.png",
            "json": "vikingWilds/img/no-btn.png",
            "w": 54,
            "h": 44
        },
        "check": {
            "sprite": "vikingWilds/img/radio-btns.png",
            "json": "vikingWilds/img/radio-btns.png",
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
        "logoA":{
            "sprite": "vikingWilds/img/anim/axe-anim.png",
            "json": "vikingWilds/img/anim/axe-anim.json"
        },
        "key_1": {
            "json": "vikingWilds/img/anim/sideAnimation/key-01.json",
            "sprite": "vikingWilds/img/anim/sideAnimation/key-01.png"
        },
        "key_2": {
            "json": "vikingWilds/img/anim/sideAnimation/key-02.json",
            "sprite": "vikingWilds/img/anim/sideAnimation/key-02.png"
        },
        "key_3": {
            "json": "vikingWilds/img/anim/sideAnimation/key-03.json",
            "sprite": "vikingWilds/img/anim/sideAnimation/key-03.png"
        },
        "key_hl": {
            "json": "vikingWilds/img/anim/sideAnimation/side-feature.json",
            "sprite": "vikingWilds/img/anim/sideAnimation/side-feature.png"
        },
        "reelAnim": {
            "json": "vikingWilds/img/anim/reel-animation.json",
            "sprite": "vikingWilds/img/anim/reel-animation.png"
        },
        "anim0": {
            "json": "vikingWilds/img/anim/symbol-00.json",
            "sprite": "vikingWilds/img/anim/symbol-00.png"
        },
        "anim1": {
            "json": "vikingWilds/img/anim/symbol-01.json",
            "sprite": "vikingWilds/img/anim/symbol-01.png"
        },
        "anim2": {
            "json": "vikingWilds/img/anim/symbol-02.json",
            "sprite": "vikingWilds/img/anim/symbol-02.png"
        },
        "anim3": {
            "json": "vikingWilds/img/anim/symbol-03.json",
            "sprite": "vikingWilds/img/anim/symbol-03.png"
        },
        "anim4": {
            "json": "vikingWilds/img/anim/symbol-04.json",
            "sprite": "vikingWilds/img/anim/symbol-04.png"
        },
        "anim5": {
            "json": "vikingWilds/img/anim/symbol-05.json",
            "sprite": "vikingWilds/img/anim/symbol-05.png"
        },
        "anim6": {
            "json": "vikingWilds/img/anim/symbol-06.json",
            "sprite": "vikingWilds/img/anim/symbol-06.png"
        },
        "anim7": {
            "json": "vikingWilds/img/anim/symbol-07.json",
            "sprite": "vikingWilds/img/anim/symbol-07.png"
        },
        "anim8": {
            "json": "vikingWilds/img/anim/symbol-08.json",
            "sprite": "vikingWilds/img/anim/symbol-08.png"
        },
        "anim9": {
            "json": "vikingWilds/img/anim/symbol-09.json",
            "sprite": "vikingWilds/img/anim/symbol-09.png"
        },


        "anim10": {
            "json": "vikingWilds/img/anim/symbol-10.json",
            "sprite": "vikingWilds/img/anim/symbol-10.png"
        },
        "anim11": {
            "json": "vikingWilds/img/anim/symbol-11.json",
            "sprite": "vikingWilds/img/anim/symbol-11.png"
        },
        "anim11short": {
            "json": "vikingWilds/img/anim/symbol-11-short.json",
            "sprite": "vikingWilds/img/anim/symbol-11-short.png"
        },
        "anim13": {
            "json": "vikingWilds/img/anim/symbol-13.json",
            "sprite": "vikingWilds/img/anim/symbol-13.png"
        },
        "anim14": {
            "json": "vikingWilds/img/anim/fakeAnim.json",
            "sprite": "vikingWilds/img/anim/fakeAnim.png"
        },
        "anim15": {
            "json": "vikingWilds/img/anim/fakeAnim.json",
            "sprite": "vikingWilds/img/anim/fakeAnim.png"
        },
        "anim16": {
            "json": "vikingWilds/img/anim/fakeAnim.json",
            "sprite": "vikingWilds/img/anim/fakeAnim.png"
        },
        "anim17": {
            "json": "vikingWilds/img/anim/fakeAnim.json",
            "sprite": "vikingWilds/img/anim/fakeAnim.png"
        },
        "anim18": {
            "json": "vikingWilds/img/anim/fakeAnim.json",
            "sprite": "vikingWilds/img/anim/fakeAnim.png"
        },
        "wildReel": {
            "json": "vikingWilds/img/anim/symbol-12.json",
            "sprite": "vikingWilds/img/anim/symbol-12.png"
        },
        "winglow":{
            "json": "vikingWilds/img/anim/win-highlight.json",
            "sprite": "vikingWilds/img/anim/win-highlight.png"
        },
        "part-1": {
            "json": "vikingWilds/img/anim/bronze-coin.json",
            "sprite": "vikingWilds/img/anim/bronze-coin.png"
        },
        "part-2": {
            "json": "vikingWilds/img/anim/silver-coin.json",
            "sprite": "vikingWilds/img/anim/silver-coin.png"
        },
        "part-3": {
            "json": "vikingWilds/img/anim/gold-coin.json",
            "sprite": "vikingWilds/img/anim/gold-coin.png"
        },
        "f-part-1": {
            "json": "vikingWilds/img/anim/bronze-coin-frwrd.json",
            "sprite": "vikingWilds/img/anim/bronze-coin-frwrd.png"
        },
        "f-part-2": {
            "json": "vikingWilds/img/anim/silver-coin-frwrd.json",
            "sprite": "vikingWilds/img/anim/silver-coin-frwrd.png"
        },
        "f-part-3": {
            "json": "vikingWilds/img/anim/gold-coin-frwrd.json",
            "sprite": "vikingWilds/img/anim/gold-coin-frwrd.png"
        },

        "female_1": {
            "json": "vikingWilds/img/anim/character-anim/valkyrie-anim-01.json",
            "sprite": "vikingWilds/img/anim/character-anim/valkyrie-anim-01.png"
        },
        "female_2": {
            "json": "vikingWilds/img/anim/character-anim/valkyrie-anim-02.json",
            "sprite": "vikingWilds/img/anim/character-anim/valkyrie-anim-02.png"
        },
        "male_1": {
            "json": "vikingWilds/img/anim/character-anim/viking-anim-01.json",
            "sprite": "vikingWilds/img/anim/character-anim/viking-anim-01.png"
        },
        "male_2": {
            "json": "vikingWilds/img/anim/character-anim/viking-anim-02.json",
            "sprite": "vikingWilds/img/anim/character-anim/viking-anim-02.png"
        },
        "spinAnim": {
            "json": "vikingWilds/img/anim/spin-anim.json",
            "sprite": "vikingWilds/img/anim/spin-anim.png"
        }





    },
    "importantSounds": {
        "spinClick": {
            "name": "vikingWilds/sounds/spinClick.mp3",
            "volume": .1
        },
        "reelStop": {
            "name": "vikingWilds/sounds/reelStop.mp3",
            "volume":.8
        },
        "reelFall": {
            "name": "vikingWilds/sounds/reelSound.mp3",
            "volume":1
        },
        "coins": {
            "name": "vikingWilds/sounds/coins.mp3",
            "volume": 1
        },
        "iconWild": {
            "name": "vikingWilds/sounds/specialWild.mp3",
            "volume": 1.2
        },
        "iconPop": {
            "name": "vikingWilds/sounds/iconPop.mp3",
            "volume": 1.3
        },
        "iconPopNW": {
            "name": "vikingWilds/sounds/iconPopNoW.mp3",
            "volume": 1.3
        },
        "iconPopShort": {
            "name": "vikingWilds/sounds/iconPopShort.mp3",
            "volume": 1.3
        },
        "winAmountFall": {
            "name": "vikingWilds/sounds/winAmountFall.mp3",
            "volume": .5
        }
    },
    "bgImportantSounds":{
        "bgSlot": {
            "name": "vikingWilds/sounds/bg-Layer1.mp3",
            "volume": .8,
            "marker":true
        },
        "bgSlot1": {
            "name": "vikingWilds/sounds/bg-Layer2.mp3",
            "volume": 0,
            "marker":true
        },
        "bgSlot2": {
            "name": "vikingWilds/sounds/bg-Layer3.mp3",
            "volume": 0,
            "marker":true
        },
        "bgSlot3": {
            "name": "vikingWilds/sounds/bg-Layer4.mp3",
            "volume": 0,
            "marker":true
        }

    },
    "sounds": {
        "click": {
            "name": "vikingWilds/sounds/click.mp3",
            "volume": .3
        },
        "multiplier": {
            "name": "vikingWilds/sounds/centralWin/win1.mp3",
            "volume": 2
        },
        "flame":{
            "name": "vikingWilds/sounds/reelExpand_Flame.mp3",
            "volume": 1
        },
        "reelExpand_0,0,1,0,0": {
            "name": "vikingWilds/sounds/reelExpand_Central.mp3",
            "volume": 1.5
        },
        "reelExpand_0,1,1,1,0": {
            "name": "vikingWilds/sounds/reelExpand_2and4.mp3",
            "volume": 1.5
        },
        "reelExpand_1,1,1,1,1": {
            "name": "vikingWilds/sounds/reelExpand_All.mp3",
            "volume": 1.7
        },
        "reelRetract": {
            "name": "vikingWilds/sounds/reelRetract.mp3",
            "volume": 1
        },
        "keyActivation": {
            "name": "vikingWilds/sounds/keyActivation.mp3",
            "volume": 1.5
        },
        "keyDeactivation": {
            "name": "vikingWilds/sounds/keyDeactivation.mp3",
            "volume": 1.2
        },
        "smbWin_0": {
            "name": "vikingWilds/sounds/smbWin_0.mp3",
            "multiple":["smbWin_1","smbWin_2","smbWin_3"],
            "volume": 1
        },
        "smbWin_4": {
            "name": "vikingWilds/sounds/smbWin_4.mp3",
            "volume": 1
        },
        "smbWin_5": {
            "name": "vikingWilds/sounds/smbWin_5.mp3",
            "volume": 1
        },
        "smbWin_6": {
            "name": "vikingWilds/sounds/smbWin_6.mp3",
            "volume": 1
        },
        "smbWin_7": {
            "name": "vikingWilds/sounds/smbWin_7.mp3",
            "volume": 1
        },
        "smbWin_8": {
            "name": "vikingWilds/sounds/smbWin_8.mp3",
            "multiple":["smbWin_9","smbWin_10"],
            "volume": 1
        },
        "smbWin_11": {
            "name": "vikingWilds/sounds/smbWin_11.mp3",
            "volume": 1
        },
        "wildReel": {
            "name": "vikingWilds/sounds/smbWin_12.mp3",
            "volume": 1
        },
        "smbWin_13": {
            "name": "vikingWilds/sounds/smbWin_13.mp3",
            "volume": 1
        },
        "winBg_0": {
            "name": "vikingWilds/sounds/centralWin/win1.mp3",
            "volume": 0
        },
        "winBg_1": {
            "name": "vikingWilds/sounds/centralWin/win2.mp3",
            "volume":  .6
        },
        "winBg_2": {
            "name": "vikingWilds/sounds/centralWin/win3.mp3",
            "volume":  .65
        },
        "winBg_3": {
            "name": "vikingWilds/sounds/centralWin/win4.mp3",
            "volume":  .7
        },
        "winBg_4": {
            "name": "vikingWilds/sounds/centralWin/win5.mp3",
            "volume":  .7
        },
        "winBg_5": {
            "name": "vikingWilds/sounds/centralWin/win6.mp3",
            "volume":  .7
        },
        "winBg_6": {
            "name": "vikingWilds/sounds/centralWin/bigWin_Full.mp3",
            "volume":  1
        },
        "winBg_7": {
            "name": "vikingWilds/sounds/centralWin/superBigWin_Full.mp3",
            "volume":  1.2
        },
        "winBg_8": {
            "name": "vikingWilds/sounds/centralWin/megaBigWin_Full.mp3",
            "volume": 1.5
        },
        "winBgS_6": {
            "name": "vikingWilds/sounds/centralWin/bigWin.mp3",
            "volume": 1
        },
        "winBgS_7": {
            "name": "vikingWilds/sounds/centralWin/superBigWin.mp3",
            "volume":  1.2
        },
        "winBgS_8": {
            "name": "vikingWilds/sounds/centralWin/megaBigWin.mp3",
            "volume": 1.5
        },
        "fsWon": {
            "name": "vikingWilds/sounds/introFs.mp3",
            "volume": 1.5
        },
        "incWin": {
            "name": "vikingWilds/sounds/counter.mp3",
            "volume": .6,
            "loop": true
        },
        "winPanel": {
            "name": "vikingWilds/sounds/winScreen.mp3",
            "volume": 1.1
        },
        "tumble_0": {
            "name": "vikingWilds/sounds/tumbling.mp3",
            "volume": .8,
            "multiple":["tumble_1","tumble_2","tumble_3","tumble_4"]
        },
        "doors":{
            "name": "vikingWilds/sounds/fs_doorsClose.mp3",
            "volume": .7
        }
    },
    "bgSounds": {
        "bgFs": {
            "name": "vikingWilds/sounds/bgFs.mp3",
            "volume": .8
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
                    "name": "bg",
                    "x": 0,
                    "y": 0
                }
            }
        },
        "bgFS": {
            "visible":false,
            "graphAsset": {
                "bg": {
                    "name": "bgFS",
                    "x": 0,
                    "y": 0
                }
            }
        },
        "reelBG":{
            "visible":false,
            "graphAsset": {
                "reelBg0": {
                    "name": "reelBg",
                    "x": 380,
                    "y": 368,
                    "anchorX": 0,
                    "anchorY": .5
                },
                "reelBg1": {
                    "name": "reelBg",
                    "x": 380+104,
                    "y": 368,
                    "anchorX": 0,
                    "anchorY": .5
                },
                "reelBg2": {
                    "name": "reelBg",
                    "x": 380+104+104,
                    "y": 368,
                    "anchorX": 0,
                    "anchorY": .5
                },
                "reelBg3": {
                    "name": "reelBg",
                    "x": 380+104+104+104,
                    "y": 368,
                    "anchorX": 0,
                    "anchorY": .5
                },
                "reelBg4": {
                    "name": "reelBg",
                    "x": 380+104+104+104+104,
                    "y": 368,
                    "anchorX": 0,
                    "anchorY": .5
                }
            }
        },
        "frameFS": {
            "visible":false,
            "graphAsset": {
                "bgf": {
                    "name": "fog",
                    "x": 0,
                    "y": 433
                }}

        },
        "frame": {
            "visible": false,
            "graphAsset": {
                "leftW": {
                    "name": "sideWingL",
                    "x": 324,
                    "y": 377,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "rightW": {
                    "name": "sideWing",
                    "x": 957,
                    "y": 377,

                    "anchorX": .5,
                    "anchorY": .5
                }
            }
        },
        "winGlow":{},

        "reels": {


        },
        "wild": {
        },
        "mask":{
            "visible":false,
            "graphAsset": {
                "bgForeground": {
                    "name": "foreground",
                    "x": 0,
                    "y": 0
                }

            }
        },
        "gates":{
            "visible":false,
            "graphAsset": {
                "gate0":{
                    "name": "gate",
                    "x": 380,
                    "y": -450,
                    "anchorX":0
                },
                "gate1":{
                    "name": "gate",
                    "x": 380+104,
                    "y": -450,
                    "anchorX":0
                },
                "gate2":{
                    "name": "gate",
                    "x": 380+104+104,
                    "y": -450,
                    "anchorX":0
                },
                "gate3":{
                    "name": "gate",
                    "x": 380+104+104+104,
                    "y": -450,
                    "anchorX":0
                },
                "gate4":{
                    "name": "gate",
                    "x": 380+104+104+104+104,
                    "y": -450,
                    "anchorX":0
                }
            }
        },
        "freeSpinLeftAccumulator": {
            "visible": false,
            "graphAsset": {
                 "bg1":{
                    "alpha":1,
                    "name": "key_hl",
                    "x": 140,
                    "y": 139
                },
                "shdw_1":{
                    "name" : "keyShadow_1",
                    "x": 140,
                    "y": 139
                },
                 "img1":{
                    "alpha":0,
                    "name" : "key_1",
                    "x": 140,
                    "y": 139
                },
                "bg2":{
                    "alpha":1,
                    "name": "key_hl",
                    "x": 140,
                    "y": 411
                },
                "shdw_2":{
                    "name" : "keyShadow_2",
                    "x": 140,
                    "y": 411
                },
                "img2":{
                    "alpha":0,
                    "name": "key_2",
                    "x": 140,
                    "y": 411
                },
                "bg3":{
                    "alpha":1,
                    "name": "key_hl",
                    "x": 140,
                    "y": 275
                },
                "shdw_3":{
                    "name" : "keyShadow_3",
                    "x": 140,
                    "y": 275
                },
                "img3":{
                    "alpha":0,
                    "name": "key_3",
                    "x": 140,
                    "y": 275
                }

            }
        },
        "mask1":{
            "visible":false,
            "graphAsset": {
                "rfc1":{
                    "name": "reel-devide-mid",
                    "x": 380,
                    "y": 368,
                    "anchorX":0,
                    "anchorY":.5
                },
                "rfc2":{
                    "name": "reel-devide-mid",
                    "x": 380+104,
                    "y": 368,
                    "anchorX":0,
                    "anchorY":.5
                },
                "rfc3":{
                    "name": "reel-devide-mid",
                    "x": 380+104+104,
                    "y": 368,
                    "anchorX":0,
                    "anchorY":.5
                },
                "rfc4":{
                    "name": "reel-devide-mid",
                    "x": 380+104+104+104,
                    "y": 368,
                    "anchorX":0,
                    "anchorY":.5
                },
                "rfc5":{
                    "name": "reel-devide-mid",
                    "x": 380+104+104+104+104,
                    "y": 360,
                    "anchorX":0,
                    "anchorY":.5
                },
                "bg0": {
                    "name": "reel-devide-top",
                    "x": 380,
                    "y": 224,
                    "anchorX":0,
                    "anchorY":.5
                },
                "bg1": {
                    "name": "reel-devide-top",
                    "x": 380+104,
                    "y": 224,
                    "anchorX":0,
                    "anchorY":.5
                },
                "bg2": {
                    "name": "reel-devide-top",
                    "x": 380+104+104,
                    "y": 224,
                    "anchorX":0,
                    "anchorY":.5
                },
                "bg3": {
                    "name": "reel-devide-top",
                    "x": 380+104+104+104,
                    "y": 224,
                    "anchorX":0,
                    "anchorY":.5
                },
                "bg4": {
                    "name": "reel-devide-top",
                    "x": 380+104+104+104+104,
                    "y": 224,
                    "anchorX":0,
                    "anchorY":.5
                },

                "bgB0": {
                    "name": "reel-devide-btm",
                    "x": 380,
                    "y": 512,
                    "anchorX":0,
                    "anchorY":0.5
                },
                "bgB1": {
                    "name": "reel-devide-btm",
                    "x": 380+104,
                    "y": 512,
                    "anchorX":0,
                    "anchorY":0.5
                },
                "bgB2": {
                    "name": "reel-devide-btm",
                    "x": 380+104+104,
                    "y": 512,
                    "anchorX":0,
                    "anchorY":0.5
                },
                "bgB3": {
                    "name": "reel-devide-btm",
                    "x": 380+104+104+104,
                    "y": 512,
                    "anchorX":0,
                    "anchorY":0.5
                },
                "bgB4": {
                    "name": "reel-devide-btm",
                    "x": 380+104+104+104+104,
                    "y": 512,
                    "anchorX":0,
                    "anchorY":0.5
                },
                "ra0":{
                    "name": "reelAnim",
                    "x": 350,
                    "y": 366,
                    "anchorX":0,
                    "anchorY":.5,
                    "alpha":0
                },
                "ra1":{
                    "name": "reelAnim",
                    "x": 350+104,
                    "y": 366,
                    "anchorX":0,
                    "anchorY":.5,
                    "alpha":0
                },
                "ra2":{
                    "name": "reelAnim",
                    "x": 350+104+104,
                    "y": 366,
                    "anchorX":0,
                    "anchorY":.5,
                    "alpha":0
                },
                "ra3":{
                    "name": "reelAnim",
                    "x": 350+104+104+104,
                    "y": 366,
                    "anchorX":0,
                    "anchorY":.5,
                    "alpha":0
                },
                "ra4":{
                    "name": "reelAnim",
                    "x": 350+104+104+104+104,
                    "y": 366,
                    "anchorX":0,
                    "anchorY":.5,
                    "alpha":0
                }

            }
        },
        "vikingCharacter":{
            "visible": false,
            "graphAsset": {
                "fcharBg":{
                    "visible":true,
                    "name": "fcharBg",
                    "x": 1053,
                    "y": 526,
                    "anchorY":.5,
                    "anchorX":.5
                }
            },
            "animAsset": {
                "v1_1": {
                    "visible":false,
                    "name": "female_1",
                    "x": 1090,
                    "y": 520,
                    "autoplay":false,
                    "anchorY":.5,
                    "anchorX":.5
                },
                "v1_2": {
                    "visible":false,
                    "name": "female_2",
                    "x": 1090,
                    "y": 520,
                    "autoplay":false,
                    "anchorY":.5,
                    "anchorX":.5
                },
                "v2_1": {
                    "visible":false,
                    "name": "male_1",
                    "x": 1090,
                    "y": 520,
                    "autoplay":false,
                    "anchorY":.5,
                    "anchorX":.5
                },
                "v2_2": {
                    "visible":false,
                    "name": "male_2",
                    "x": 1090,
                    "y": 520,
                    "autoplay":false,
                    "anchorY":.5,
                    "anchorX":.5
                },
                "spinAnim": {
                    "visible":false,
                    "name": "spinAnim",
                    "x": 1086,
                    "y": 596,
                    "scaleX":1.5,
                    "scaleY":1.5,
                    "autoplay":false,
                    "anchorY":.5,
                    "anchorX":.5
                }
            }
        },
        "logo": {
            "visible":false,
            "graphAsset": {
                "logoA": {
                    "visible":false,
                    "name": "logoA",
                    "x": 640,
                    "y": 0,
                    "anchorX":.5
                },
                "logo": {
                    "name": "logo",
                    "x": 640,
                    "y": 0,
                    "anchorX":.5
                },
                "textV":{
                    "name": "logoText",
                    "x": 640,
                    "y": 0,
                    "anchorX":.5
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

        "stickyWild": {},
        "scatter": {},

        "wins": {},
        "lines": {},
        "freeRounds": {
            "visible":false,
            "comment_movingLogo":"true when the panel substitute the logo",
            "movingLogo":true,
            "graphAsset": {
                "frPanel":{
                    "name": "freeRoundsPanel",
                    "x": 640,
                    "y": 35,
                    "anchorX":.5,
                    "anchorY":.5
                }
            },
            "_emitters": {
                "emitter": [{ "pos": {"x": 0, "y": 0}, "posVar": {"x": -125, "y": 0}, "speed": 66, "speedVar": 195.6372884671819, "angle": -168, "angleVar": -40, "life": 1, "lifeVar": 16.93294764034753, "radius": 14.205516971534776, "radiusVar": 5, "textureAdditive": true, "startScale": 3.023485367220084, "startScaleVar": 0, "endScale": 0.6224822814864879, "endScaleVar": 0, "startColor": [51, 103.29411764705887, 178, 1], "startColorVar": [0, 0, 51, 0.1], "endColor": [0, 0, 0, 1], "endColorVar": [0, 0, 0, 0], "colorList": [], "gravity": {"x": 87, "y": -82}, "radialAccel": 264.76394582625653, "radialAccelVar": 0, "tangentialAccel": 149.16009355019446, "tangentialAccelVar": -197.65146327799158, "totalParticles": 169, "emissionRate": 463, "xEquation": "", "yEquation": "", "textureEnabled": true, "active": true, "duration": null, "id": "aaa", "aFactor": {"x": -43.1, "y": 0}, "xFactor": {"x": -0.4, "y": 0}, "border": {"top": 500, "left": 500, "bottom": 307, "right": 466.86171111486584}, "zIndex": 0}]
            },
            "texts": {
                "frLabel": {
                    "x": 339,
                    "y": 16,
                    "fill": "#dcffff",
                    "font": "15px Futura ,Arial",
                    "text": "Free Rounds:",
                    "anchorX":  0.5
                },
                "frValue": {
                    "x": 339,
                    "y": 30,
                    "fill": "#5cfff3",
                    "font": "25px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                },
                "frTotWonLabel": {
                    "x": 942,
                    "y": 16,
                    "fill": "#dcffff",
                    "font": "15px Futura ,Arial",
                    "text": "Total won:",
                    "anchorX":  0.5
                },
                "frTotWonValue": {
                    "x": 942,
                    "y": 30,
                    "fill": "#5cfff3",
                    "font": "25px Futura ,Arial",
                    "text": "",
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
                "multBg":{
                    "name": "multBg",
                    "x": 191,
                    "y": 233,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "boxTW":{
                    "name": "boxTotWin",
                    "x": 276,
                    "y": 44,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "boxFS":{
                    "name": "boxFsNum",
                    "x": 932,
                    "y": 44,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "boxWW":{
                    "name": "boxWinWay",
                    "x": 1128,
                    "y": 44,
                    "anchorX": .5,
                    "anchorY": .5
                }
            },
            "texts": {
                "fsLabel": {
                    "x": 932,
                    "y": 20,
                    "fill": "#dcffff",
                    "font": "15px Futura ,Arial",
                    "text": "Free Spins",
                    "anchorX": 0.5
                },
                "fsValue": {
                    "x": 932,
                    "y": 36,
                    "fill": "#5cfff3",
                    "font": "25px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                },
                "totWonLabel": {
                    "x": 276,
                    "y": 20,
                    "fill": "#dcffff",
                    "font": "15px Futura ,Arial",
                    "text": "Total won",
                    "anchorX":0.5
                },
                "totWonValue": {
                    "x": 276,
                    "y": 36,
                    "fill": "#5cfff3",
                    "font": "25px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                },
                "fsMultValue":{
                    "x": 191,
                    "y": 190,
                    "bmpFont": "multiBmpFont",
                    "size": "120",
                    "text": "",
                    "anchorX": .5,
                    "anchorY": .5
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
                },
                "winW":{
                    "name":"winWayObj",
                    "x": 1050,
                    "y": 16,
                    "scaleX":.9,
                    "scaleY":.9,
                }
            },
            "texts": {
                "winWaysNum":{
                    "x": 1132,
                    "y": 30,
                    "bmpFont": "bmpFontSmall",
                    "size": "40",
                    "text": "1024",
                    "anchorX": 0.5
                },
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
                    "y": 270,
                    "fill": "#ffffff",
                    "font": "28px FuturaPT-Book",
                    "text": "You won",
                    "anchorX": .5
                },
                "fsValue1": {
                    "x": 640,
                    "y": 320,
                    "fill": "#ffffff",
                    "font": "28px FuturaPT-Book",
                    "text": "5",
                    "anchorX": .5
                },
                "fsWLabel1": {
                    "x": 640,
                    "y": 370,
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
                    "name": "none",
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
                    "y": 410,
                    "bmpFont": "bmpFont",
                    "size": "4",
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
                    "name": "logoPreview",
                    "x": 640,
                    "y": 0,
                    "anchorX":.5
                }
            },
            "slide": {
                "x": 640,
                "y": 120,
                "buttonBaseX":-55,
                "buttonBaseY":495,
                "time":10000,
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
                                "y": 50
                            }
                        },
                        "texts": {
                            "txtPrev0": {
                                "x": 0,
                                "y": 0,
                                "fill": "#ffffff",
                                "font": "24px Futura PT, Arial",
                                "text": "Wilds/Sticky Wilds/Expanding Wilds.",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev1": {
                                "x": 0,
                                "y": 30,
                                "fill": "#ffffff",
                                "font": "20px Futura PT, Arial",
                                "text": "Each Wild awards you a different Key on successive tumbling winnings.",
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
                                "y": 50
                            }
                        },
                        "texts": {
                            "txtPrev0": {
                                "x": 0,
                                "y": 0,
                                "fill": "#ffffff",
                                "font": "24px Futura PT, Arial",
                                "text": "Wilds/Sticky Wilds/Expanding Wilds.",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev1": {
                                "x": 0,
                                "y": 30,
                                "fill": "#ffffff",
                                "font": "20px Futura PT, Arial",
                                "text": "Collect all 3 Keys, in any order, to get Free Spins.",
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
                                "y": 70
                            }
                        },
                        "texts": {
                            "txtPrev0": {
                                "x": 0,
                                "y": 0,
                                "fill": "#ffffff",
                                "font": "24px Futura PT, Arial",
                                "text": "Expanding Reels.",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev1": {
                                "x": 0,
                                "y": 30,
                                "fill": "#ffffff",
                                "font": "20px Futura PT, Arial",
                                "text": "Reels can expand and increase the number of win ways from 1024 potentially up to 3120 win ways.",
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
                                "y": 150
                            }
                        },
                        "texts": {
                            "txtPrev0": {
                                "x": 0,
                                "y": 0,
                                "fill": "#ffffff",
                                "font": "24px Futura PT, Arial",
                                "text": "Expanding Reels.",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev1": {
                                "x": 0,
                                "y": 30,
                                "fill": "#ffffff",
                                "font": "20px Futura PT, Arial",
                                "text": "Expanding reels stay expanded during Free Spins. Each additional expanded reel will increase the number of free spins awarded by 2, as well as increasing the starting multiplier for free spins by 2.",
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
                                "y": 50
                            }
                        },
                        "texts": {
                            "txtPrev0": {
                                "x": 0,
                                "y": 0,
                                "fill": "#ffffff",
                                "font": "24px Futura PT, Arial",
                                "text": "Free Spin Multiplier.",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev1": {
                                "x": 0,
                                "y": 30,
                                "fill": "#ffffff",
                                "font": "20px Futura PT, Arial",
                                "text": "During Free Spins any expanding reel or expanding wild adds to the multiplier for all remaining free spins.",
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
    "slotEngine":"VikingEngine",
    "engineNumbers":0,
    "log":true,
    "canSwipe":false,
    "fastPlayEnable":true,
    "comment_preview":"enable feature preview screen",
    "preview":true,
    "previewTout":60000,
    "spinType": "VikingTumblingSpin",
    "falling":false,
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
    "lineType": "VikingTumbling",
    "lineFrames":31,
    "lineFrames":19,
    "comment_lineWinAmtType":"lines/coinWinning class",
    "lineWinAmtType":"NormalLineWinAmount",
    "numReels": 5,
    "numIcons": 5,
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
            "reelLoopInterval":.18,
            "reelPreMovement": 4,
            "reelPreMovementTime": .2,
            "reelBaseInterval": 1,
            "reelStopInterval": 3,
            "reelSpinBounceMeasure": 40,
            "reelSpinBounceTime": .28,
            "reelSpinBounceForce": 1.2
        },
        "default":{
            "stopEnabled":true,
            "reelSecondMovementTime":.3,
            "reelLoopInterval":.20,
            "reelPreMovement": 0,
            "reelPreMovementTime": 0,
            "reelBaseInterval": 2,
            "reelStopInterval": 1,
            "reelSpinBounceMeasure": 50,
            "reelSpinBounceTime": .35,
            "reelSpinBounceForce": 1,
            "minimumTime":.3
        }
    },
    "numIcon": 11,
    "loadTout": 30,
    "credits": "5000",
    "bet": "0.50",
    "animDelayAfterWild":1500,
    "freeRounds":"normal",
    "freeSpins":"VikingFreeSpins",
    "_fsIcon": 1,
    "fsSpinDelay":750,
    "minFsSmbs":3,
    "scatterIcon": 10,
    "scatterType": "SubstScatter",
    "_twinReelsFeature":"normal",
    "wildType": "VikingTumblingWildReel",
    "wildNum": [12],
    "wildReelOrigin":1,
    "wildReelAnim":3,
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
        "deltaX_0": 380,
        "deltaX": 104,
        "deltaY_0": 576,
        "deltaY": 104
    },
    "icon": {
        "x": 0,
        "y": 0,
        "width": 104,
        "height": 104
    },
    "winningcombinations": true,
    "ForceFeature":{
        "ch1":{
            "value":"114,152,39,14,23,125",
            "description":"Free Spins"
        },
        "ch2":{
            "value":"65,3,92,56,72,-4",
            "description":"Expanding Reel"
        },
        "ch3":{
            "value":"26,147,40,75,136,704",
            "description":"Sticky wild"
        },
        "ch4":{
            "value":"65,3,92,56,72,125",
            "description":"Expanding wild"
        }

    }
}
var lineConfig = {
    "win": {
    },
    "line": {
        "noCoinOnEachLine":20,
    }
}



var paytableAssets = {

    "bg" : "vikingWilds/img/paytable/pt-base-complete.jpg",

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
            "bg_up" : "vikingWilds/img/paytable/forward-btn-up.png",
            "bg_over" : "vikingWilds/img/paytable/forward-btn-over.png",
            "bg_down" : "vikingWilds/img/paytable/forward-btn-down.png",
            "direction" : -1
        },

        {
            "id" : "right",
            "ypos" : "540",
            "xpos" : "865",
            "bg_up" : "vikingWilds/img/paytable/forward-btn-up.png",
            "bg_over" : "vikingWilds/img/paytable/forward-btn-over.png",
            "bg_down" : "vikingWilds/img/paytable/forward-btn-down.png",
            "direction" : 1
        }

    ],

    "pages" : [

        {

            "gameguide" : true,
            "title" : "Viking Wilds Game Rules",
            "title_xpos" : "510",
            "title_ypos" : "115",
            "xpos" : "331",
            "ypos" : "185",
            "height" : "350",
            "width" : "619",
            "fill": "#FFFFFF",
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
                    "bg" : "vikingWilds/img/symbol-00.png",
                    "xpos": "379",
                    "ypos": "225",
                    "height": "132px",
                    "width": "132px",
                    "text": {
                        "value": 0,
                        "xpos": "45",
                        "ypos": "160",
                        "width": "109",
                        "left_fill": "#FFFFFF",
                        "right_fill": "#FFFFFF",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_01",
                    "bg" : "vikingWilds/img/symbol-01.png",
                    "xpos": "574",
                    "ypos": "225",
                    "height": "132px",
                    "width": "132px",
                    "text": {
                        "value": 1,
                        "xpos": "45",
                        "ypos": "160",
                        "width": "109",
                        "left_fill": "#FFFFFF",
                        "right_fill": "#FFFFFF",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_02",
                    "bg" : "vikingWilds/img/symbol-02.png",
                    "xpos": "769",
                    "ypos": "225",
                    "height": "132px",
                    "width": "132px",
                    "text": {
                        "value": 2,
                        "xpos": "45",
                        "ypos": "160",
                        "width": "109",
                        "left_fill": "#FFFFFF",
                        "right_fill": "#FFFFFF",
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
                    "ypos" : "530",
                    "width" : "500",
                    "fill" : "#FFFFFF",
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
                    "bg" : "vikingWilds/img/symbol-03.png",
                    "xpos": "477",
                    "ypos": "225",
                    "height": "132px",
                    "width": "132px",
                    "text": {
                        "value": 3,
                        "xpos": "45",
                        "ypos": "160",
                        "width": "109",
                        "left_fill": "#FFFFFF",
                        "right_fill": "#FFFFFF",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_04",
                    "bg" : "vikingWilds/img/symbol-04.png",
                    "xpos": "671",
                    "ypos": "225",
                    "height": "132px",
                    "width": "132px",
                    "text": {
                        "value": 4,
                        "xpos": "45",
                        "ypos": "160",
                        "width": "109",
                        "left_fill": "#FFFFFF",
                        "right_fill": "#FFFFFF",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                }

            ],

            "text": [

                {
                    "value" : "Wins are calculated by counting consecutive reels with matching symbols and multiplying by the total number of matching symbols on those reels.",                    "xpos" : "390",
                    "ypos" : "530",
                    "width" : "500",
                    "fill" : "#FFFFFF",
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
                    "bg" : "vikingWilds/img/symbol-05.png",
                    "xpos": "379",
                    "ypos": "225",
                    "height": "132px",
                    "width": "132px",
                    "text": {
                        "value": 5,
                        "xpos": "45",
                        "ypos": "160",
                        "width": "109",
                        "left_fill": "#FFFFFF",
                        "right_fill": "#FFFFFF",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_06",
                    "bg" : "vikingWilds/img/symbol-06.png",
                    "xpos": "574",
                    "ypos": "225",
                    "height": "132px",
                    "width": "132px",
                    "text": {
                        "value": 6,
                        "xpos": "45",
                        "ypos": "160",
                        "width": "109",
                        "left_fill": "#FFFFFF",
                        "right_fill": "#FFFFFF",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_07",
                    "bg" : "vikingWilds/img/symbol-07.png",
                    "xpos": "769",
                    "ypos": "225",
                    "height": "132px",
                    "width": "132px",
                    "text": {
                        "value": 7,
                        "xpos": "45",
                        "ypos": "160",
                        "width": "109",
                        "left_fill": "#FFFFFF",
                        "right_fill": "#FFFFFF",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                }

            ],

            "text": [

                {
                    "value" : "Wins are calculated by counting consecutive reels with matching symbols and multiplying by the total number of matching symbols on those reels.",                    "xpos" : "390",
                    "ypos" : "530",
                    "width" : "500",
                    "fill" : "#FFFFFF",
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
                    "bg" : "vikingWilds/img/symbol-08.png",
                    "xpos": "379",
                    "ypos": "225",
                    "height": "132px",
                    "width": "132px",
                    "text": {
                        "value": 8,
                        "xpos": "35",
                        "ypos": "160",
                        "width": "109",
                        "left_fill": "#FFFFFF",
                        "right_fill": "#FFFFFF",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_09",
                    "bg" : "vikingWilds/img/symbol-09.png",
                    "xpos": "574",
                    "ypos": "225",
                    "height": "132px",
                    "width": "132px",
                    "text": {
                        "value": 9,
                        "xpos": "35",
                        "ypos": "160",
                        "width": "109",
                        "left_fill": "#FFFFFF",
                        "right_fill": "#FFFFFF",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_10",
                    "bg" : "vikingWilds/img/symbol-10.png",
                    "xpos": "769",
                    "ypos": "225",
                    "height": "132px",
                    "width": "132px",
                    "text": {
                        "value": 10,
                        "xpos": "35",
                        "ypos": "160",
                        "width": "109",
                        "left_fill": "#FFFFFF",
                        "right_fill": "#FFFFFF",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                }

            ],

            "text": [

                {
                    "value" : "Wins are calculated by counting consecutive reels with matching symbols and multiplying by the total number of matching symbols on those reels.",                    "xpos" : "390",
                    "ypos" : "530",
                    "width" : "500",
                    "fill" : "#FFFFFF",
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
                    "bg" : "vikingWilds/img/symbol-11.png",
                    "xpos": "590",
                    "ypos": "265",
                    "height": "104px",
                    "width": "104px",
                    "text": {
                        "value": 11,
                        "xpos": "45",
                        "ypos": "160",
                        "width": "109",
                        "left_fill": "#FFFFFF",
                        "right_fill": "#FFFFFF",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "bg" : "vikingWilds/img/paytable/key-01.png",
                    "xpos": "590",
                    "ypos": "381"
                }

            ],

            "text": [

                {
                    "value" : "Wild",
                    "xpos" : "390",
                    "ypos" : "130",
                    "width" : "500",
                    "fill" : "#FFFFFF",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "22px",
                    "align" : "center"
                },

                {
                    "value" : "Wild Substitutes for all Symbols. It can appear on the 2nd, 3rd, 4th and 5th reels. Wilds have a higher chance of appearing on tumbles.",
                    "xpos" : "243",
                    "ypos" : "175",
                    "width" : "800",
                    "fill" : "#FFFFFF",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "18px",
                    "align" : "center"
                },

                {
                    "value" : "Awards one of the special key to unlock Free Spins mode.",
                    "xpos" : "390",
                    "ypos" : "480",
                    "width" : "500",
                    "fill" : "#FFFFFF",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "18px",
                    "align" : "center"
                },

                {
                    "value" : "Wins are calculated by counting consecutive reels with matching symbols and multiplying by the total number of matching symbols on those reels.",                    "xpos" : "390",
                    "ypos" : "530",
                    "width" : "500",
                    "fill" : "#FFFFFF",
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
                    "bg" : "vikingWilds/img/symbol-13.png",
                    "xpos": "590",
                    "ypos": "265",
                    "height": "104px",
                    "width": "104px",
                    "text": {
                        "value": 13,
                        "xpos": "45",
                        "ypos": "160",
                        "width": "109",
                        "left_fill": "#FFFFFF",
                        "right_fill": "#FFFFFF",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "bg" : "vikingWilds/img/paytable/key-03.png",
                    "xpos": "590",
                    "ypos": "381"
                }

            ],

            "text": [

                {
                    "value" : "Sticky Wild",
                    "xpos" : "390",
                    "ypos" : "130",
                    "width" : "500",
                    "fill" : "#FFFFFF",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "22px",
                    "align" : "center"
                },

                {
                    "value" : "Sticky Wild substitutes for all Symbols. Sticky wild will not disappear when it is part of a winning combination, it will tumble down if symbols directly below are destroyed as part of a winning combination. Sticky wild can only appear on reel 3. Sticky Wild will not appear during Free Spins and will not persist between spins.",
                    "xpos" : "243",
                    "ypos" : "175",
                    "width" : "800",
                    "fill" : "#FFFFFF",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "18px",
                    "align" : "center"
                },

                {
                    "value" : "Awards one of the special key to unlock Free Spins mode.",
                    "xpos" : "390",
                    "ypos" : "480",
                    "width" : "500",
                    "fill" : "#FFFFFF",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "18px",
                    "align" : "center"
                },


                {
                    "value" : "Wins are calculated by counting consecutive reels with matching symbols and multiplying by the total number of matching symbols on those reels.",
                    "xpos" : "390",
                    "ypos" : "530",
                    "width" : "500",
                    "fill" : "#FFFFFF",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols": [



                {
                    "id" : "symbol_12",
                    "bg" : "vikingWilds/img/symbol-12.png",
                    "xpos": "590",
                    "ypos": "265",
                    "height": "104px",
                    "width": "104px",
                    "text": {
                        "value": 12,
                        "xpos": "45",
                        "ypos": "160",
                        "width": "109",
                        "left_fill": "#FFFFFF",
                        "right_fill": "#FFFFFF",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },


                {
                    "bg" : "vikingWilds/img/paytable/key-02.png",
                    "xpos": "590",
                    "ypos": "381"

                }

            ],

            "text": [

                {
                    "value" : "Expanding Wild",
                    "xpos" : "390",
                    "ypos" : "130",
                    "width" : "500",
                    "fill" : "#FFFFFF",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "22px",
                    "align" : "center"
                },

                {
                    "value" : "This wild expands to fill a reel even if the reel is extended, and substitutes for all symbols. The Expanding wild has a random chance to appear on the 2nd, 3rd, 4th and 5th reels. Expanding wild can appear as a tumble and during free spins however only one can appear at a time.",
                    "xpos" : "243",
                    "ypos" : "175",
                    "width" : "800",
                    "fill" : "#FFFFFF",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "18px",
                    "align" : "center"
                },

                {
                    "value" : "Awards one of the special key to unlock Free Spins mode.",
                    "xpos" : "390",
                    "ypos" : "480",
                    "width" : "500",
                    "fill" : "#FFFFFF",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "18px",
                    "align" : "center"
                },

                {
                    "value" : "Wins are calculated by counting consecutive reels with matching symbols and multiplying by the total number of matching symbols on those reels.",                    "xpos" : "390",
                    "ypos" : "530",
                    "width" : "500",
                    "fill" : "#FFFFFF",
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
                    "bg" : "vikingWilds/img/paytable/winways1.png",
                    "xpos": "570",
                    "ypos": "190",
                    "height": "auto",
                    "width": "150px",
                    "text": {
                        "value": [
                            "Whenever a win way pays out the symbols are destroyed and all remaining symbols tumble down.",
                            "All destroyed symbols are replaced with symbols from higher up on the reels with a high chance of extra Wild appearing.",
                            "If the new symbols also form a win way they too will pay out and more symbols will tumble in to replace them, this will continue until no more Win Ways can be made."
                        ],
                        "xpos": "-200",
                        "ypos": "155",
                        "width": "550",
                        "fill": "#FFFFFF",
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
                    "fill" : "#FFFFFF",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "22px",
                    "align" : "center"
                }

            ]

        },

        {


            "symbols": [
            {
                "id" : "symbol_12",
                "bg" : "vikingWilds/img/paytable/slide_2.png",
                "xpos": "518",
                "ypos": "265",
                "height": "185px",
                "width": "250px",

            },
            ],

            "text": [

                {
                    "value" : "Free Spin",
                    "xpos" : "390",
                    "ypos" : "130",
                    "width" : "500",
                    "fill" : "#FFFFFF",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "22px",
                    "align" : "center"
                },

                {
                    "value" : "Free spins are awarded by collecting all 3 unique keys during successive tumbles. The base free spin game is 12 Free Spins with no starting multiplier. Getting expanded reels during the tumbling sequence that leads to Free Spins also increases the quantity and starting multiplier of the awarded Free Spins.",
                    "xpos" : "243",
                    "ypos" : "175",
                    "width" : "800",
                    "fill" : "#FFFFFF",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "18px",
                    "align" : "center"
                },

                {
                    "value": [
                        "1 Expanded Reel: 14 Free Spins, x2 Base Multiplier.",
                        "3 Expanded Reel: 16 Free Spins, x4 Base Multiplier.",
                        "5 Expanded Reel: 20 Free Spins, x6 Base Multiplier."
                    ],
                    "xpos": "370",
                    "ypos": "428",
                    "width": "560",
                    "fill": "#FFFFFF",
                    "font": "FuturaPT-Book, Arial, sans-serif",
                    "size": "16px",
                    "align": "center"
                },

                {
                    "value" : "Wins are calculated by counting consecutive reels with matching symbols and multiplying by the total number of matching symbols on those reels.",
                    "xpos" : "390",
                    "ypos" : "530",
                    "width" : "500",
                    "fill" : "#FFFFFF",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols": [

                {
                    "id" : "1exp",
                    "bg" : "vikingWilds/img/paytable/slide_3.png",
                    "xpos": "510",
                    "ypos": "300",
                    "height": "206px",
                    "width": "270px",
                    "text": {
                        "value": "",
                        "xpos": "-50",
                        "ypos": "115",
                        "width": "200",
                        "fill": "#FFFFFF",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "16px",
                        "align": "center"
                    }
                }

            ],

            "text": [

                {
                    "value" : "Free Spin Multiplier",
                    "xpos" : "390",
                    "ypos" : "130",
                    "width" : "500",
                    "fill" : "#FFFFFF",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "22px",
                    "align" : "center"
                },

                {
                    "value" : "Inside free spins the game is similar to the base game except that each sticky, expanding wild or expanded reels adds a x1 multiplier to the current spin win.",
                    "xpos" : "243",
                    "ypos" : "175",
                    "width" : "800",
                    "fill" : "#FFFFFF",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "18px",
                    "align" : "center"
                },

                {
                    "value" : "Wins are calculated by counting consecutive reels with matching symbols and multiplying by the total number of matching symbols on those reels.",
                    "xpos" : "390",
                    "ypos" : "530",
                    "width" : "500",
                    "fill" : "#FFFFFF",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols": [

                {
                    "id" : "winways_scrnsht1",
                    "bg" : "vikingWilds/img/paytable/winways2.png",
                    "xpos": "420",
                    "ypos": "200",
                    "height": "auto",
                    "width": "200px",
                    "text": {
                        "value": [
                            "Win Ways start at 1024 but as the reels expand they will increase up to 3125.",
                            "Jack: Appears once on each of 5 reels. Thus the payout is the flat value for 5x Jack which is 7 Coins.",
                            "Queen: Appears on each 5 reels. Appears twice on reel 2, 3, and 5. The payout is the value of 5x Queens which is 7 multiplied by 2, 7*1*2*2*1*2=56 Coins."
                        ],
                        "xpos": "-50",
                        "ypos": "165",
                        "width": "560",
                        "fill": "#FFFFFF",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "16px",
                        "align": "center"
                    }
                },
                {
                    "id" : "winways_scrnsht2",
                    "bg" : "vikingWilds/img/paytable/winways1.png",
                    "xpos": "650",
                    "ypos": "200",
                    "height": "auto",
                    "width": "200px",

                },

            ],

            "text": [

                {
                    "value" : "1024 to 3125 Win Ways",
                    "xpos" : "390",
                    "ypos" : "130",
                    "width" : "500",
                    "fill" : "#FFFFFF",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "22px",
                    "align" : "center"
                },

                {
                    "value" : "Wins are calculated by counting consecutive reels with matching symbols and multiplying by the total number of matching symbols on those reels.",                    "xpos" : "390",
                    "ypos" : "530",
                    "width" : "500",
                    "fill" : "#FFFFFF",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },
        {

            "symbols": [
                {
                    "id" : "symbol_12",
                    "bg" : "vikingWilds/img/paytable/slide_2.png",
                    "xpos": "518",
                    "ypos": "265",
                    "height": "185px",
                    "width": "250px",

                },
            ],
            "text": [

                {
                    "value" : "Expanding Reels",
                    "xpos" : "390",
                    "ypos" : "130",
                    "width" : "500",
                    "fill" : "#FFFFFF",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "22px",
                    "align" : "center"
                },

                {
                    "value" : "Reels can expand at any random point and increase the number of win ways from 1024 potentially up to 3125. Once a reel has expanded it will stay expanded for all the winning sequence.",
                    "xpos" : "243",
                    "ypos" : "175",
                    "width" : "800",
                    "fill" : "#FFFFFF",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "18px",
                    "align" : "center"
                },

                {
                    "value" : "Wins are calculated by counting consecutive reels with matching symbols and multiplying by the total number of matching symbols on those reels.",                    "xpos" : "390",
                    "ypos" : "530",
                    "width" : "500",
                    "fill" : "#FFFFFF",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        }
    ]

}
