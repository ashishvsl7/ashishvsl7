
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
        "sprite": "fonts/fontMoirai.png",
        "font": "fonts/fontMoirai.xml"
    },
    "multiBmpFont":{
        "sprite": "fonts/multiplyerMoirai.png",
        "font": "fonts/multiplyerMoirai.xml"
    }
}

var extScripts={
    "webfont": "15px FuturaPT-Heavy",
    "webfont1": "15px FuturaPT-Book"
}
var gameAssets = {
    "assets": {
        "icon0": "moiraiBlaze/img/symbol-00.png",
        "icon1": "moiraiBlaze/img/symbol-01.png",
        "icon2": "moiraiBlaze/img/symbol-02.png",
        "icon3": "moiraiBlaze/img/symbol-03.png",
        "icon4": "moiraiBlaze/img/symbol-04.png",
        "icon5": "moiraiBlaze/img/symbol-05.png",
        "icon6": "moiraiBlaze/img/symbol-06.png",
        "icon7": "moiraiBlaze/img/symbol-07.png",
        "icon8": "moiraiBlaze/img/symbol-08.png",
        "icon9": "moiraiBlaze/img/symbol-09.png",
        "icon10": "moiraiBlaze/img/symbol-10.png",
        "colorConv_0":"moiraiBlaze/img/symbol-cloud-00.png",
        "colorConv_1":"moiraiBlaze/img/symbol-cloud-01.png",
        "colorConv_2":"moiraiBlaze/img/symbol-cloud-02.png",
        "colorConv_3":"moiraiBlaze/img/symbol-cloud-03.png",
        "colorConv_4":"moiraiBlaze/img/symbol-cloud-04.png",
        "colorConv_5":"moiraiBlaze/img/symbol-cloud-05.png",
        "colorConv_6":"moiraiBlaze/img/symbol-cloud-06.png",
        "colorConv_9":"moiraiBlaze/img/symbol-cloud-explosion.png",
        "bottomBar": "gui/message-bar.png",
        "bgPanel": "moiraiBlaze/img/bgPanel.png",
        "bgPanelGame": "moiraiBlaze/img/bgPanel.png",
        "bgPreview":"moiraiBlaze/img/intro-page.jpg",
        "freeRoundsPanel":"moiraiBlaze/img/free-rounds.png",
        "bgAlpha": "moiraiBlaze/img/alpha.png",
        "bg":"moiraiBlaze/img/bg/bg-base-main.jpg",
        "bgFS":"moiraiBlaze/img/bg/fs-base-main.jpg",
        "mask0T": "moiraiBlaze/img/bg/reelmaskT.png",
        "mask0B": "moiraiBlaze/img/bg/reelmaskB.png",
        "maskFS0T": "moiraiBlaze/img/bg/reelmaskFST.png",
        "maskFS0B": "moiraiBlaze/img/bg/reelmaskFSB.png",
        "maskTop": "moiraiBlaze/img/bg/reel-top.png",
        "maskBottom": "moiraiBlaze/img/bg/reel-bottom.png",
        "reels": "moiraiBlaze/img/bg/reel-middle.png",
        "flower":"moiraiBlaze/img/bg/side-flowersRight.png",
        "flowerFS":"moiraiBlaze/img/bg/fs-side-flowersRight.png",
        "slide_0":"moiraiBlaze/img/paytable/slide_0.png",
        "slide_1":"moiraiBlaze/img/paytable/side-counter.png",
        "slide_2":"moiraiBlaze/img/paytable/slide_2.png",
        "slide_3":"moiraiBlaze/img/paytable/slide_3.png",
        "slide_4":"moiraiBlaze/img/paytable/slide_4.png",
        "slide_5":"moiraiBlaze/img/paytable/slide_5.png",
        "buttonBg":"gui/generic/img/desktop/png/cp-info-bar.png",
        "volOnButton": "gui/btnVolOn.png",
        "volOffButton": "gui/btnVolOff.png",
        "freeSpinPanel":"moiraiBlaze/img/freespins.png",
        "sideLegs":"moiraiBlaze/img/side-feature-basegame/lakshmi-base.png",
        "sideLegsFS":"moiraiBlaze/img/side-feature-fs/krishna-base.png",
        "sidePanelFS":"moiraiBlaze/img/freespin-sidemeter.png"
    },
    "localizedAssets":{
        "graphAsset": {
            "logo": {
                "lang": ["zs","ko","jp","sp"],
                "img": "moiraiBlaze/img/logo"
            }
        }
    },
    "buttonsSpriteSheet": {
        "container-btn": {
            "sprite": "moiraiBlaze/img/game-btn.png",
            "json": "moiraiBlaze/img/game-btn.png",
            "w": 210,
            "h": 66
        },
        "yesButton": {
            "sprite": "moiraiBlaze/img/yes-btn.png",
            "json": "moiraiBlaze/img/yes-btn.png",
            "w": 54,
            "h": 44
        },
        "noButton": {
            "sprite": "moiraiBlaze/img/no-btn.png",
            "json": "moiraiBlaze/img/no-btn.png",
            "w": 54,
            "h": 44
        },
        "check": {
            "sprite": "moiraiBlaze/img/radio-btns.png",
            "json": "moiraiBlaze/img/radio-btns.png",
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
            "json": "moiraiBlaze/img/anim/symbol-00.json",
            "sprite": "moiraiBlaze/img/anim/symbol-00.png"
        },
        "anim1": {
            "json": "moiraiBlaze/img/anim/symbol-01.json",
            "sprite": "moiraiBlaze/img/anim/symbol-01.png"
        },
        "anim2": {
            "json": "moiraiBlaze/img/anim/symbol-02.json",
            "sprite": "moiraiBlaze/img/anim/symbol-02.png"
        },
        "anim3": {
            "json": "moiraiBlaze/img/anim/symbol-03.json",
            "sprite": "moiraiBlaze/img/anim/symbol-03.png"
        },
        "anim4": {
            "json": "moiraiBlaze/img/anim/symbol-04.json",
            "sprite": "moiraiBlaze/img/anim/symbol-04.png"
        },
        "anim5": {
            "json": "moiraiBlaze/img/anim/symbol-05.json",
            "sprite": "moiraiBlaze/img/anim/symbol-05.png"
        },
        "anim6": {
            "json": "moiraiBlaze/img/anim/symbol-06.json",
            "sprite": "moiraiBlaze/img/anim/symbol-06.png"
        },
        "anim7": {
            "json": "moiraiBlaze/img/anim/symbol-07.json",
            "sprite": "moiraiBlaze/img/anim/symbol-07.png"
        },
        "anim8": {
            "json": "moiraiBlaze/img/anim/symbol-08.json",
            "sprite": "moiraiBlaze/img/anim/symbol-08.png"
        },
        "anim9": {
            "json": "moiraiBlaze/img/anim/symbol-09.json",
            "sprite": "moiraiBlaze/img/anim/symbol-09.png"
        },
        "wildAnim":{
            "json": "moiraiBlaze/img/anim/symbol-09-side.json",
            "sprite": "moiraiBlaze/img/anim/symbol-09-side.png"

        },
        "anim10": {
            "json": "moiraiBlaze/img/anim/symbol-10.json",
            "sprite": "moiraiBlaze/img/anim/symbol-10.png"
        },
        "ganesha_0": {
            "json": "moiraiBlaze/img/anim/ganesha-pb-part1.json",
            "sprite": "moiraiBlaze/img/anim/ganesha-pb-part1.png"
        },
        "ganesha_1": {
            "json": "moiraiBlaze/img/anim/ganesha-pb-part2.json",
            "sprite": "moiraiBlaze/img/anim/ganesha-pb-part2.png"
        },
        "sideActive": {
            "json": "moiraiBlaze/img/side-feature-basegame/lakshmi-activate.json",
            "sprite": "moiraiBlaze/img/side-feature-basegame/lakshmi-activate.png",
        },
        "sideAnim": {
            "json": "moiraiBlaze/img/side-feature-basegame/lakshmi-win.json",
            "sprite": "moiraiBlaze/img/side-feature-basegame/lakshmi-win.png",
        },
        "sideEnd": {
            "json": "moiraiBlaze/img/side-feature-basegame/lakshmi-end.json",
            "sprite": "moiraiBlaze/img/side-feature-basegame/lakshmi-end.png",
        },
        "sideActiveFS": {
            "json": "moiraiBlaze/img/side-feature-fs/krishna-activate.json",
            "sprite": "moiraiBlaze/img/side-feature-fs/krishna-activate.png",
        },
        "sideAnimFS": {
            "json": "moiraiBlaze/img/side-feature-fs/krishna-win.json",
            "sprite": "moiraiBlaze/img/side-feature-fs/krishna-win.png",
        },
        "sideEndFS": {
            "json": "moiraiBlaze/img/side-feature-fs/krishna-end.json",
            "sprite": "moiraiBlaze/img/side-feature-fs/krishna-end.png",
        },
        "shamrock-pop":{
            "json": "moiraiBlaze/img/anim/symbol-explotion.json",
            "sprite": "moiraiBlaze/img/anim/symbol-explotion.png"
        },
        "winglow0":{
            "json": "moiraiBlaze/img/anim/glow-symbol-00.json",
            "sprite": "moiraiBlaze/img/anim/glow-symbol-00.png"
        },
        "winglow1":{
            "json": "moiraiBlaze/img/anim/glow-symbol-01.json",
            "sprite": "moiraiBlaze/img/anim/glow-symbol-01.png"
        },
        "winglow2":{
            "json": "moiraiBlaze/img/anim/glow-symbol-02.json",
            "sprite": "moiraiBlaze/img/anim/glow-symbol-02.png"
        },
        "winglow3":{
            "json": "moiraiBlaze/img/anim/glow-symbol-03.json",
            "sprite": "moiraiBlaze/img/anim/glow-symbol-03.png"
        },
        "winglow4":{
            "json": "moiraiBlaze/img/anim/glow-symbol-04.json",
            "sprite": "moiraiBlaze/img/anim/glow-symbol-04.png"
        },
        "winglow5":{
            "json": "moiraiBlaze/img/anim/glow-symbol-05.json",
            "sprite": "moiraiBlaze/img/anim/glow-symbol-05.png"
        },
        "winglow6":{
            "json": "moiraiBlaze/img/anim/glow-symbol-06.json",
            "sprite": "moiraiBlaze/img/anim/glow-symbol-06.png"
        },
        "ganeshaExplosion":{
            "json": "moiraiBlaze/img/anim/reel-explotion.json",
            "sprite": "moiraiBlaze/img/anim/reel-explotion.png"
        },
        "bigWin_0": {
            "json": "moiraiBlaze/img/anim/big-win-00.json",
            "sprite": "moiraiBlaze/img/anim/big-win-00.png"
        },
        "bigWin_1": {
            "json": "moiraiBlaze/img/anim/big-win-01.json",
            "sprite": "moiraiBlaze/img/anim/big-win-01.png"
        },
        "bigWin_2": {
            "json": "moiraiBlaze/img/anim/big-win-02.json",
            "sprite": "moiraiBlaze/img/anim/big-win-02.png"
        },
        "superWin_0": {
            "json": "moiraiBlaze/img/anim/ultra-win-00.json",
            "sprite": "moiraiBlaze/img/anim/ultra-win-00.png"
        },
        "superWin_1": {
            "json": "moiraiBlaze/img/anim/ultra-win-01.json",
            "sprite": "moiraiBlaze/img/anim/ultra-win-01.png"
        },
        "superWin_2": {
            "json": "moiraiBlaze/img/anim/ultra-win-02.json",
            "sprite": "moiraiBlaze/img/anim/ultra-win-02.png"
        },
        "megaWin_0": {
            "json": "moiraiBlaze/img/anim/epic-win-00.json",
            "sprite": "moiraiBlaze/img/anim/epic-win-00.png"
        },
        "megaWin_1": {
            "json": "moiraiBlaze/img/anim/epic-win-01.json",
            "sprite": "moiraiBlaze/img/anim/epic-win-01.png"
        },
        "megaWin_2": {
            "json": "moiraiBlaze/img/anim/epic-win-02.json",
            "sprite": "moiraiBlaze/img/anim/epic-win-02.png"
        },
        "part-1": {
            "json": "moiraiBlaze/img/anim/bronze-coin.json",
            "sprite": "moiraiBlaze/img/anim/bronze-coin.png"
        },
        "part-2": {
            "json": "moiraiBlaze/img/anim/silver-coin.json",
            "sprite": "moiraiBlaze/img/anim/silver-coin.png"
        },
        "part-3": {
            "json": "moiraiBlaze/img/anim/gold-coin.json",
            "sprite": "moiraiBlaze/img/anim/gold-coin.png"
        },
        "f-part-1": {
            "json": "moiraiBlaze/img/anim/bronze-coin-frwrd.json",
            "sprite": "moiraiBlaze/img/anim/bronze-coin-frwrd.png"
        },
        "f-part-2": {
            "json": "moiraiBlaze/img/anim/silver-coin-frwrd.json",
            "sprite": "moiraiBlaze/img/anim/silver-coin-frwrd.png"
        },
        "f-part-3": {
            "json": "moiraiBlaze/img/anim/gold-coin-frwrd.json",
            "sprite": "moiraiBlaze/img/anim/gold-coin-frwrd.png"
        }
    },
    "importantSounds": {
        "spinClick": {
            "name": "moiraiBlaze/sounds/spinClick.mp3",
            "volume": .1
        },
        "reelFall": {
            "name": "moiraiBlaze/sounds/iconsFall.mp3",
            "volume":1
        },
        "reelAppear": {
            "name": "moiraiBlaze/sounds/iconsAppear.mp3",
            "volume":1
        },
        "tumble": {
            "name": "moiraiBlaze/sounds/tumbling.mp3",
            "volume": 1.35
        },
        "coins": {
            "name": "moiraiBlaze/sounds/coins.mp3",
            "volume": 1
        },
        "iconExplode_0": {
            "name": "moiraiBlaze/sounds/iconExplode1.mp3",
            "volume": 1.3
        },
        "iconExplode_1": {
            "name": "moiraiBlaze/sounds/iconExplode2.mp3",
            "volume": 1.3
        },
        "iconExplode_2": {
            "name": "moiraiBlaze/sounds/iconExplode3.mp3",
            "volume": 1.3
        },
        "iconExplode_3": {
            "name": "moiraiBlaze/sounds/iconExplode4.mp3",
            "volume": 1.3
        },
        "iconExplode_4": {
            "name": "moiraiBlaze/sounds/iconExplode5.mp3",
            "volume": 1.3
        },
        "iconExplode_5": {
            "name": "moiraiBlaze/sounds/iconExplode6.mp3",
            "volume": 1.3
        },
        "iconExplode_6": {
            "name": "moiraiBlaze/sounds/iconExplode7.mp3",
            "volume": 1.3
        },
        "exploder": {
            "name": "moiraiBlaze/sounds/specialExploder.mp3",
            "volume": 1.2
        },
        "converter": {
            "name": "moiraiBlaze/sounds/specialConverter.mp3",
            "volume": 1.2
        },
        "ganesha": {
            "name": "moiraiBlaze/sounds/specialGanesha.mp3",
            "volume": 1.2
        },
        "iconWild": {
            "name": "moiraiBlaze/sounds/specialWild.mp3",
            "volume": 1.2
        },
        "iconPop": {
            "name": "moiraiBlaze/sounds/iconPop.mp3",
            "volume": 1.5
        },
        "line": {
            "name": "moiraiBlaze/sounds/coinsDrop1.mp3",
            "volume": .6
        },
        "line1": {
            "name": "moiraiBlaze/sounds/coinsDrop2.mp3",
            "volume": .6
        },
    },
    "bgImportantSounds":{
        "bgSlot": {
            "name": "moiraiBlaze/sounds/bgLayer1.mp3",
            "volume": 1.5,
            "marker":true
        },
        "bgSlot2": {
            "name": "moiraiBlaze/sounds/bgLayer2.mp3",
            "volume": 0,
            "marker":true
        },
        "bgFs": {
            "name": "moiraiBlaze/sounds/bgFsLayer0.mp3",
            "volume": 1.5,
            "marker":true
        },
        "bgFs2": {
            "name": "moiraiBlaze/sounds/bgFsLayer1.mp3",
            "volume": 0,
            "marker":true
        },
    },
    "sounds": {
        "click": {
            "name": "moiraiBlaze/sounds/click.mp3",
            "volume": .3
        },
        "loop":{
            "name": "moiraiBlaze/sounds/iconExplode1.mp3",
            "volume": 1.3
        },
        "multiplier": {
            "name": "moiraiBlaze/sounds/centralWin/win1.mp3",
            "volume": 2
        },
        "winBg_0": {
            "name": "moiraiBlaze/sounds/centralWin/win1.mp3",
            "volume": 1
        },
        "winBg_1": {
            "name": "moiraiBlaze/sounds/centralWin/win2.mp3",
            "volume":  .6
        },
        "winBg_2": {
            "name": "moiraiBlaze/sounds/centralWin/win3.mp3",
            "volume":  .65
        },
        "winBg_3": {
            "name": "moiraiBlaze/sounds/centralWin/win4.mp3",
            "volume":  .7
        },
        "winBg_4": {
            "name": "moiraiBlaze/sounds/centralWin/win5.mp3",
            "volume":  .7
        },
        "winBg_5": {
            "name": "moiraiBlaze/sounds/centralWin/win6.mp3",
            "volume":  .7
        },
        "winBg_6": {
            "name": "moiraiBlaze/sounds/centralWin/bigWin_Full.mp3",
            "volume":  1
        },
        "winBg_7": {
            "name": "moiraiBlaze/sounds/centralWin/superBigWin_Full.mp3",
            "volume":  1.2
        },
        "winBg_8": {
            "name": "moiraiBlaze/sounds/centralWin/megaBigWin_Full.mp3",
            "volume": 1.5
        },
        "winBgS_6": {
            "name": "moiraiBlaze/sounds/centralWin/bigWin.mp3",
            "volume": 1
        },
        "winBgS_7": {
            "name": "moiraiBlaze/sounds/centralWin/superBigWin.mp3",
            "volume":  1.2
        },
        "winBgS_8": {
            "name": "moiraiBlaze/sounds/centralWin/megaBigWin.mp3",
            "volume": 1.5
        },
        "fsWon": {
            "name": "moiraiBlaze/sounds/introFS.mp3",
            "volume": 1.5
        },
        "incWin": {
            "name": "moiraiBlaze/sounds/counter.mp3",
            "volume": .6,
            "loop": true
        },
        "winPanel": {
            "name": "moiraiBlaze/sounds/winScreen.mp3",
            "volume": 1.1
        }
    },
    "bgSounds": {
        "bgSlot3": {
            "name": "moiraiBlaze/sounds/bgLayer3.mp3",
            "volume": 0,
            "marker":true
        },
        "bgSlot4": {
            "name": "moiraiBlaze/sounds/bgLayer4.mp3",
            "volume": 0,
            "marker":true
        },
        "bgSlot5": {
            "name": "moiraiBlaze/sounds/bgLayer5.mp3",
            "volume": 0,
            "marker":true
        },
        "bgFs3": {
            "name": "moiraiBlaze/sounds/bgFsLayer2.mp3",
            "volume": 0,
            "marker":true
        },
        "bgFs4": {
            "name": "moiraiBlaze/sounds/bgFsLayer3.mp3",
            "volume": 0,
            "marker":true
        },
        "bgFs5": {
            "name": "moiraiBlaze/sounds/bgFsLayer4.mp3",
            "volume": 0,
            "marker":true
        },
        "bgFs6": {
            "name": "moiraiBlaze/sounds/bgFsLayer5.mp3",
            "volume": 0,
            "marker":true
        },
        "bgFs7": {
            "name": "moiraiBlaze/sounds/bgFsLayer6.mp3",
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
        "frameFS": {
            "visible":false,
            "graphAsset": {
                "bg4": {
                    "name": "reels",
                    "x": 323,
                    "y": 117
                }
            }
        },
        "frame": {
            "visible":false,
            "graphAsset": {
                "bg4": {
                    "name": "reels",
                    "x": 323,
                    "y": 117
                }
            }
        },
        "winGlow":{},
        "reels": {},
        "mask":{
            "visible":false,
            "graphAsset": {
                "bg2": {
                    "name": "mask0T",
                    "x": 350.75,
                    "y": 0
                },
                "bg3": {
                    "name": "mask0B",
                    "x": 350.75,
                    "y": 632
                }
            }
        },
        "maskFS":{
            "visible":false,
            "graphAsset": {
                "bg2": {
                    "name": "maskFS0T",
                    "x": 356,
                    "y": 0
                },
                "bg3": {
                    "name": "maskFS0B",
                    "x": 356,
                    "y": 632
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
        "mask1":{
            "visible":false,
            "graphAsset": {
                "bg2": {
                    "name": "maskTop",
                    "x": 323,
                    "y": 56,
                    "anchorX":0,
                    "anchorY":0
                },
                "bg3": {
                    "name": "maskBottom",
                    "x": 323,
                    "y": 630,
                    "anchorX":0,
                    "anchorY":0
                }
            }
        },
        "freeSpinAccumulator": {
            "visible": false,
            "graphAsset": {
                "sideLegs": {
                    "alpha":0,
                    "name": "sideLegs",
                    "x": 970,
                    "y": 431
                },
                "sideLegsFS": {
                    "alpha":0,
                    "name": "sideLegsFS",
                    "x": 924,
                    "y": 478
                },
                "sideActive": {
                    "alpha":0,
                    "name": "sideActive",
                    "x": 970,
                    "y": 135
                },
                "sideActiveFS": {
                    "alpha":0,
                    "name": "sideActiveFS",
                    "x": 924,
                    "y": 114
                },
                "sideAnim": {
                    "alpha":0,
                    "name": "sideAnim",
                    "x": 970    ,
                    "y": 135
                },
                "sideEnd": {
                    "alpha":0,
                    "name": "sideEnd",
                    "x": 970    ,
                    "y": 135
                },
                "sideAnimFS": {
                    "alpha":0,
                    "name": "sideAnimFS",
                    "x": 924    ,
                    "y": 114
                },
                "sideEndFS": {
                    "alpha":0,
                    "name": "sideEndFS",
                    "x": 924    ,
                    "y": 114
                }
            },
            "texts":{
                "spinNum":{
                    "x": 1094,
                    "y": 300,
                    "bmpFont": "multiBmpFont",
                    "size": "90",
                    "text": "",
                    "anchorX": .5,
                    "anchorY": .5
                }
            }
        },
        "freeSpinLeftAccumulator": {
            "visible": false,
            "graphAsset": {
                "sidePanelFS":{
                    "alpha":0,
                    "name": "sidePanelFS",
                    "x": 114,
                    "y": 100
                },

                "img1":{
                    "alpha":0,
                    "name": "icon7",
                    "x": 180,
                    "y": 215,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "img2":{
                    "alpha":0,
                    "name": "icon8",
                    "x": 184,
                    "y": 298,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "img3":{
                    "alpha":0,
                    "name": "icon10",
                    "x": 180,
                    "y": 382,
                    "anchorX": .5,
                    "anchorY": .5
                }

            },
            "texts":{
                "txt1":{
                    "x": 270,
                    "y": 205,
                    "bmpFont": "multiBmpFont",
                    "size": "70",
                    "text": "",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "txt2":{
                    "x": 270,
                    "y": 292,
                    "bmpFont": "multiBmpFont",
                    "size": "70",
                    "text": "",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "txt3":{
                    "x": 270,
                    "y": 371,
                    "bmpFont": "multiBmpFont",
                    "size": "70",
                    "text": "",
                    "anchorX": .5,
                    "anchorY": .5
                }
            }
        },
        "flower":{
            "visible":false,
            "graphAsset": {
                "rf":{
                    "name":"flower",
                    "x": 927,
                    "y": 362
                },
                "ff":{
                    "name":"flower",
                    "scaleX":-1,
                    "x": 353,
                    "y": 362
                }
            }
        },
        "flowerFS":{
            "visible":false,
            "graphAsset": {
                "rf":{
                    "name":"flowerFS",
                    "x": 807,
                    "y": 478
                },
                "ff":{
                    "name":"flowerFS",
                    "scaleX":-1,
                    "x": 473,
                    "y": 478
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
                    "x": 222,
                    "y": 16,
                    "fill": "#00e4ff",
                    "font": "13px Futura ,Arial",
                    "text": "Free Rounds:",
                    "anchorX": 1
                },
                "frValue": {
                    "x": 192,
                    "y": 30,
                    "fill": "#ff53e5",
                    "font": "23px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                },
                "frTotWonLabel": {
                    "x": 1116,
                    "y": 16,
                    "fill": "#00e4ff",
                    "font": "13px Futura ,Arial",
                    "text": "Total won:",
                    "anchorX": 1
                },
                "frTotWonValue": {
                    "x": 1086,
                    "y": 30,
                    "fill": "#ff53e5",
                    "font": "23px Futura ,Arial",
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
                }
            },
            "texts": {
                "fsLabel": {
                    "x": 222,
                    "y": 16,
                    "fill": "#00e4ff",
                    "font": "13px Futura ,Arial",
                    "text": "Free Spins",
                    "anchorX": 1
                },
                "fsValue": {
                    "x": 192,
                    "y": 30,
                    "fill": "#ff8ff8",
                    "stroke":"#88407b",
                    "stroke_tick":5,
                    "font": "23px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                },
                "totWonLabel": {
                    "x": 1116,
                    "y": 16,
                    "fill": "#00e4ff",
                    "font": "13px Futura ,Arial",
                    "text": "Total won",
                    "anchorX": 1
                },
                "totWonValue": {
                    "x": 1086,
                    "y": 30,
                    "fill": "#ff8ff8",
                    "stroke":"#88407b",
                    "stroke_tick":5,
                    "font": "23px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                },
                "fsMultValue":{
                    "x": 1210,
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
                "bigWin_0": {
                    "name": "bigWin_0",
                    "x": 635,
                    "y": 312,
                    "anchorX": .5,
                    "anchorY": .5,
                    "alpha": 0
                },
                "bigWin_1": {
                    "name": "bigWin_1",
                    "x": 635,
                    "y": 312,
                    "anchorX": .5,
                    "anchorY": .5,
                    "alpha": 0
                },
                "bigWin_2": {
                    "name": "bigWin_2",
                    "x": 635,
                    "y": 312,
                    "anchorX": .5,
                    "anchorY": .5,
                    "alpha": 0
                },
                "sBigWin_0": {
                    "name": "superWin_0",
                    "x": 635,
                    "y": 312,
                    "anchorX": .5,
                    "anchorY": .5,
                    "alpha": 0
                },
                "sBigWin_1": {
                    "name": "superWin_1",
                    "x": 635,
                    "y": 312,
                    "anchorX": .5,
                    "anchorY": .5,
                    "alpha": 0
                },
                "sBigWin_2": {
                    "name": "superWin_2",
                    "x": 635,
                    "y": 312,
                    "anchorX": .5,
                    "anchorY": .5,
                    "alpha": 0
                },
                "mBigWin_0": {
                    "name": "megaWin_0",
                    "x": 635,
                    "y": 312,
                    "anchorX": .5,
                    "anchorY": .5,
                    "alpha": 0
                },
                "mBigWin_1": {
                    "name": "megaWin_1",
                    "x": 635,
                    "y": 312,
                    "anchorX": .5,
                    "anchorY": .5,
                    "alpha": 0
                },
                "mBigWin_2": {
                    "name": "megaWin_2",
                    "x": 635,
                    "y": 312,
                    "anchorX": .5,
                    "anchorY": .5,
                    "alpha": 0
                }
            }
        },
        "centralLineWin": {
            "visible": false,
            "texts": {
                "lineWin": {
                    "x": 640,
                    "y": 388,
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
                                "text": "Collecting symbols on successive tumbling winnings to get special symbols.",
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
                                "text": "Special symbols.",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev1": {
                                "x": 0,
                                "y": 30,
                                "fill": "#d96c1f",
                                "font": "20px Futura PT, Arial",
                                "text": "Wild, Exploder, Converter and Power ball.",
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
                                "y": 90
                            }
                        },
                        "texts": {
                            "txtPrev0": {
                                "x": 0,
                                "y": 0,
                                "fill": "#ffba09",
                                "font": "24px Futura PT, Arial",
                                "text": "Wild complete all normal symbol",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev1": {
                                "x": 0,
                                "y": 30,
                                "fill": "#d96c1f",
                                "font": "20px Futura PT, Arial",
                                "text": "wild text",
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
                                "y": 90
                            }
                        },
                        "texts": {
                            "txtPrev0": {
                                "x": 0,
                                "y": 0,
                                "fill": "#ffba09",
                                "font": "24px Futura PT, Arial",
                                "text": "Exploder",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev1": {
                                "x": 0,
                                "y": 30,
                                "fill": "#d96c1f",
                                "font": "20px Futura PT, Arial",
                                "text": "exploder text",
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
                                "text": "Color Converter",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev1": {
                                "x": 0,
                                "y": 30,
                                "fill": "#d96c1f",
                                "font": "20px Futura PT, Arial",
                                "text": "converter text",
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
                                "text": "Ganesha Powerball",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev1": {
                                "x": 0,
                                "y": 30,
                                "fill": "#d96c1f",
                                "font": "20px Futura PT, Arial",
                                "text": "powerball text",
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
    "slotEngine":"BlazeEngine",
    "engineNumbers":15,
    "log":true,
    "canSwipe":false,
    "fastPlayEnable":false,
    "comment_preview":"enable feature preview screen",
    "preview":true,
    "previewTout":48000,
    "spinType": "TotallyTumblingSpin",
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
    "lineType": "MoiraiTumblingWinnings",
    "lineFrames":31,
    "lineFrames":19,
    "comment_lineWinAmtType":"lines/coinWinning class",
    "lineWinAmtType":"NormalLineWinAmount",
    "numReels": 7,
    "numIcons": 7,
    "numIconsOnTop": 1,
    "numIconsOnBottom":1,
    "icons": [16, 16, 16, 16, 16 ,16,16],
    "_spinResult":[[0,1,2,3,4],[5,6,7,8,9],[6,1,2,3,4],[9,1,2,3,4],[2,1,2,3,4]],
    "_spinResult":[[0,0,2,3],[11,5,7,8],[5,6,2,3],[2,9,2,3],[0,2,2,3]],
    "spinWithAlpha": .6,
    "spinConfig":{
        "es":{
            "stopEnabled":false,
            "reelSecondMovementTime":.28,
            "reelLoopInterval":.08,
            "reelPreMovement": 4,
            "reelPreMovementTime": .2,
            "reelBaseInterval": 5,
            "reelStopInterval": 1,
            "reelSpinBounceMeasure": 40,
            "reelSpinBounceTime": .28,
            "reelSpinBounceForce": 1.2,
            "minimumTime":1.5
        },
        "de":{
            "stopEnabled":false,
            "reelSecondMovementTime":.32,
            "reelLoopInterval":.17,
            "reelPreMovement": 4,
            "reelPreMovementTime": .3,
            "reelBaseInterval": 5,
            "reelStopInterval": 1,
            "reelSpinBounceMeasure": 40,
            "reelSpinBounceTime": .30,
            "reelSpinBounceForce": 1.2,
            "minimumTime":2.5
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
    "numIcon": 9,
    "loadTout": 30,
    "credits": "5000",
    "bet": "0.50",
    "animDelayAfterWild":1500,
    "freeRounds":"normal",
    "freeSpins":"MoiraiFreeSpins",
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
        "deltaX_0": 388,
        "deltaX": 72,
        "deltaY_0": 627,
        "deltaY": 72
    },
    "icon": {
        "x": 0,
        "y": 0,
        "width": 72,
        "height": 72
    },
    "winningcombinations": true
}
var lineConfig = {
    "win": {
    },
    "line": {
        "noCoinOnEachLine":20,
    }
}

var paytableAssets = {

    "bg" : "moiraiBlaze/img/paytable/pt-base-complete.jpg",

    "closeBtn": {

        "ypos": "133",
        "xpos": "1006"

    },

    "pagination" : {

        "ypos" : "590",
        "xpos" : "503",
        "checked" : "#fff",
        "unchecked" : "#000000"

    },

    "helpPath" : gameParams.pathCDN + 'ironDog/help/desktop/moiraiBlaze/help_' + gameParams.lang+".json",

    "fullscreen": true,

    "buttons" : [

        {
            "id" : "left",
            "ypos" : "556",
            "xpos" : "310",
            "bg_up" : "moiraiBlaze/img/paytable/forward-btn-up.png",
            "bg_over" : "moiraiBlaze/img/paytable/forward-btn-over.png",
            "bg_down" : "moiraiBlaze/img/paytable/forward-btn-down.png",
            "direction" : -1
        },

        {
            "id" : "right",
            "ypos" : "556",
            "xpos" : "873",
            "bg_up" : "moiraiBlaze/img/paytable/forward-btn-up.png",
            "bg_over" : "moiraiBlaze/img/paytable/forward-btn-over.png",
            "bg_down" : "moiraiBlaze/img/paytable/forward-btn-down.png",
            "direction" : 1
        }

    ],

    "pages" : [
        {

            "gameguide" : true,
            "title" : "Moirai Blaze Game Rules",
            "title_xpos" : "540",
            "title_ypos" : "149",
            "xpos" : "324",
            "ypos" : "224",
            "height" : "355",
            "width" : "634",
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
                    "bg" : "moiraiBlaze/img/paytable/symbols.png",
                    "xpos": "266",
                    "ypos": "173",
                    "width": "741px",
                    "height": "96px"
                },

            ],

            "text": [

                {
                    "value": 0,
                    "xpos": "495",
                    "ypos": "260",
                    "width": "150",
                    "left_fill": "#117906",
                    "right_fill": "#0e2c00",
                    "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "25px",
                    "align": "left",
                    "paginate": [ 2, 0 ]
                },

                {
                    "value": 0,
                    "xpos": "702",
                    "ypos": "260",
                    "width": "150",
                    "left_fill": "#117906",
                    "right_fill": "#0e2c00",
                    "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "25px",
                    "align": "left",
                    "paginate": [ 2, 1 ]
                },

                {
                    "value" : "Match wins are made by 5 or more identical symbols (or wilds) that are adjacent to each other (they do not match diagonally). Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "260",
                    "ypos" : "523",
                    "width" : "750",
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
                    "id" : "symbol_09",
                    "bg" : "moiraiBlaze/img/symbol-09.png",
                    "xpos": "568",
                    "ypos": "155",
                    "height": "150px",
                    "width": "150px",
                },


            ],


            "text": [
                {
                    "value": "Wild",
                    "xpos": "375",
                    "ypos": "285",
                    "width": "536",
                    "fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "20px",
                    "align" : "center"
                },

                {
                    "value": "Wild symbols simultaneously counts as all non-wild/non-feature symbols.",
                    "xpos": "424",
                    "ypos": "350",
                    "width": "440",
                    "fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "20px",
                    "align" : "center"
                },

                {
                    "value" : "Match wins are made by 5 or more identical symbols (or wilds) that are adjacent to each other (they do not match diagonally). Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "260",
                    "ypos" : "523",
                    "width" : "750",
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
                    "bg" : "moiraiBlaze/img/symbol-08.png",
                    "xpos": "568",
                    "ypos": "152",
                    "height": "-150px",
                    "width": "150px",
                },


            ],


            "text": [
                {
                    "value": "Replacer",
                    "xpos": "375",
                    "ypos": "285",
                    "width": "536",
                    "fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "20px",
                    "align" : "center"
                },

                {
                    "value": "The Replacer symbol replaces symbols with a randomly chosen symbol. It either replaces symbols in a diagonal shape OR all symbols of a certain type. In Free Spin it will always replace with wilds.",
                    "xpos": "375",
                    "ypos": "350",
                    "width": "536",
                    "fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "20px",
                    "align" : "center"
                },

                {
                    "value" : "Match wins are made by 5 or more identical symbols (or wilds) that are adjacent to each other (they do not match diagonally). Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "260",
                    "ypos" : "523",
                    "width" : "750",
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
                    "id" : "symbol_07",
                    "bg" : "moiraiBlaze/img/symbol-07.png",
                    "xpos": "568",
                    "ypos": "152",
                    "height": "-150px",
                    "width": "150px",
                },


            ],


            "text": [
                {
                    "value": "Exploder",
                    "xpos": "375",
                    "ypos": "285",
                    "width": "536",
                    "fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "20px",
                    "align" : "center"
                },

                {
                    "value": "The Exploder symbol either tumbles all symbols in a cross and diagonal shape OR all symbols of a certain type. It always leaves a wild behind in its place.",
                    "xpos": "375",
                    "ypos": "350",
                    "width": "536",
                    "fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "20px",
                    "align" : "center"
                },

                {
                    "value" : "Match wins are made by 5 or more identical symbols (or wilds) that are adjacent to each other (they do not match diagonally). Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "260",
                    "ypos" : "523",
                    "width" : "750",
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
                    "id" : "fs",
                    "bg" : "moiraiBlaze/img/paytable/side-counter.png",
                    "xpos": "306",
                    "ypos": "208",
                    "height": "-150px",
                    "width": "150px",
                },

                {
                    "id" : "frs",
                    "bg" : "moiraiBlaze/img/paytable/free-spin.png",
                    "xpos": "658",
                    "ypos": "180",
                    "height": "-150px",
                    "width": "150px",
                },


            ],

            "text": [
                {
                    "value": "15 Free Spins are awarded by Successive Symbol Tumbles.",
                    "xpos": "475",
                    "ypos": "200",
                    "width": "536",
                    "fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "20px",
                    "align" : "center"
                },

                {
                    "value": "The feature symbols collected inside Free Spins are recorded on the left panel and placed back on the board on the last Free Spin.",
                    "xpos": "475",
                    "ypos": "270",
                    "width": "536",
                    "fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "20px",
                    "align" : "center"
                },
                {
                    "value": "The Replacer symbol will always replace using WILD symbols inside free spins",
                    "xpos": "475",
                    "ypos": "350",
                    "width": "536",
                    "fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "20px",
                    "align" : "center"
                },

                {
                    "value" : "Match wins are made by 5 or more identical symbols (or wilds) that are adjacent to each other (they do not match diagonally). Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "260",
                    "ypos" : "523",
                    "width" : "750",
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
                    "id" : "symbol_10",
                    "bg" : "moiraiBlaze/img/symbol-10.png",
                    "xpos": "568",
                    "ypos": "152",
                    "height": "-150px",
                    "width": "150px"
                }

            ],

            "text": [
                {
                    "value": "Ganesha powerball",
                    "xpos": "375",
                    "ypos": "285",
                    "width": "536",
                    "fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "20px",
                    "align" : "center"
                },
                {
                    "value": "The symbol is activated during the Free Spin game, which gives a free respin and increases the global multiplier.",
                    "xpos": "375",
                    "ypos": "350",
                    "width": "536",
                    "fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "20px",
                    "align" : "center"
                },

                {
                    "value" : "Match wins are made by 5 or more identical symbols (or wilds) that are adjacent to each other (they do not match diagonally). Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "260",
                    "ypos" : "523",
                    "width" : "750",
                    "fill" : "#000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "14px",
                    "align" : "center"
                }

            ]


        }
    ]

};
