
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

    "buttons":{
        "spinButton":{
            "id": "spinButtonSelect",
            "bg": "gui/generic/img/mobile/png/mb-btn-spin-up.png",
            "bgDisabled": "gui/generic/img/mobile/png/mb-btn-spin-disabled.png"

        },
        "stopButton":{
            "id": "stopButtonSelect",
            "bg": "gui/generic/img/mobile/png/mb-btn-stop.png",
            "bgDisabled": "gui/generic/img/mobile/png/mb-btn-stop-disabled.png"
        },
        "betControl":{
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
            "id": "autoButtonSelect",
            "bg": "",
            "start": "gui/generic/img/mobile/png/mb-btn-spin-up.png",
            "stop": "gui/generic/img/mobile/png/mb-btn-autospin-active.png",
            "texts": {
                "betValue": {
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
        "winWayOb": "millionWaysBC/img/loader/btg-megaways.png"
    },
    "loaderMc": {
        "staticLoaderLogo": {
            "sprite": "millionWaysBC/img/loader/logo-loader.png",
            "w": 360,
            "h": 360
        },
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
        "graphAssetLicence": {
            "licence": {
                "name": "winWayOb",
                "x": 650,
                "y": 650,
                "anchorX": .5,
                "anchorY": .5,
                "scaleX":1,
                "scaleY":1
            }
        },
        "textsLicence": {
            "lice": {
                "x": 640,
                "y": 630,
                "fill": "#ffffff",
                "font": "20px Arial",
                "text": "UNDER LICENCE FROM",
                "align":"center",
                "anchorX": .5,
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
        "sprite": "fonts/fontMillion.png",
        "font": "fonts/fontMillion.xml"
    },
    "bmpFontSmall":{
        "sprite": "fonts/fontMillion.png",
        "font": "fonts/fontMillion.xml"
    },
    "multiBmpFont":{
        "sprite": "fonts/multiplier1M.png",
        "font": "fonts/multiplier1M.xml"
    }
}

var extScripts={
    "webfont": "15px FuturaPT-Heavy",
    "webfont1": "15px FuturaPT-Book",
    "webfont2": "15px GermaniaOne-Regular"
}
var gameAssets = {
    "assets": {
        "icon0": "millionWaysBC/img/symbol-00.png",
        "icon1": "millionWaysBC/img/symbol-01.png",
        "icon2": "millionWaysBC/img/symbol-02.png",
        "icon3": "millionWaysBC/img/symbol-03.png",
        "icon4": "millionWaysBC/img/symbol-04.png",
        "icon5": "millionWaysBC/img/symbol-05.png",
        "icon6": "millionWaysBC/img/symbol-06.png",
        "icon7": "millionWaysBC/img/symbol-07.png",
        "icon8": "millionWaysBC/img/symbol-08.png",
        "icon9": "millionWaysBC/img/symbol-09.png",
        "icon5GH": "millionWaysBC/img/paytable/symbol-05.png",
        "icon6GH": "millionWaysBC/img/paytable/symbol-06.png",
        "icon7GH": "millionWaysBC/img/paytable/symbol-07.png",
        "icon8GH": "millionWaysBC/img/paytable/symbol-08.png",
        "icon9GH": "millionWaysBC/img/paytable/symbol-09.png",
        "icon11GH": "millionWaysBC/img/symbol-11.png",
        "icon10": "millionWaysBC/img/symbol-10.png",
        "icon12": "millionWaysBC/img/symbol-11.png",
        "icon18": "millionWaysBC/img/empty.png",
        "none": "millionWaysBC/img/transparent.png",

        "smbFrame_5_2": "millionWaysBC/img/frame-217.png",
        "smbFrame_5_3": "millionWaysBC/img/frame-144.png",
        "smbFrame_5_4": "millionWaysBC/img/frame-108.png",
        "smbFrame_5_5": "millionWaysBC/img/frame-87.png",
        "smbFrame_5_6": "millionWaysBC/img/frame-72.png",
        "smbFrame_5_7": "millionWaysBC/img/frame-62.png",
        "smbFrame_5_8": "millionWaysBC/img/frame-62.png",
        "smbFrame_5_9": "millionWaysBC/img/frame-62.png",

        "smbFrame_6_2": "millionWaysBC/img/frame-280.png",
        "smbFrame_6_3": "millionWaysBC/img/frame-187.png",
        "smbFrame_6_4": "millionWaysBC/img/frame-140.png",
        "smbFrame_6_5": "millionWaysBC/img/frame-112.png",
        "smbFrame_6_6": "millionWaysBC/img/frame-94.png",
        "smbFrame_6_7": "millionWaysBC/img/frame-80.png",
        "smbFrame_6_8": "millionWaysBC/img/frame-72.png",
        "smbFrame_6_9": "millionWaysBC/img/frame-62.png",

        "bicon0": "millionWaysBC/img/b-symbol-00.png",
        "bicon1": "millionWaysBC/img/b-symbol-01.png",
        "bicon2": "millionWaysBC/img/b-symbol-02.png",
        "bicon3": "millionWaysBC/img/b-symbol-03.png",
        "bicon4": "millionWaysBC/img/b-symbol-04.png",
        "bicon5": "millionWaysBC/img/b-symbol-05.png",
        "bicon6": "millionWaysBC/img/b-symbol-06.png",
        "bicon7": "millionWaysBC/img/b-symbol-07.png",
        "bicon8": "millionWaysBC/img/b-symbol-08.png",
        "bicon9": "millionWaysBC/img/b-symbol-09.png",
        "bicon10": "millionWaysBC/img/b-symbol-10.png",
        "anchorBg": "millionWaysBC/img/side-feature/side-feature-static.png",
        "multBg": "millionWaysBC/img/side-feature/multiplyer-container.png",
        "bottomBar": "gui/message-bar.png",
        "bgPanel": "millionWaysBC/img/bgPanel.png",
        "bgPanelGame": "millionWaysBC/img/bgPanel.png",
        "bgPreview":"millionWaysBC/img/intro-page.jpg",
        "bgPreview1":"millionWaysBC/img/page-01.png",
        "bgPreview2":"millionWaysBC/img/page-02.png",
        "winWayObj":"millionWaysBC/img/logo.png",
        "bgFS_m": "millionWaysBC/img/bg/base-game-main_FS.jpg",
        "bg_m": "millionWaysBC/img/bg/base-game-main.jpg",
        "bg_bg": "millionWaysBC/img/bg/reel-bg.png",
        "freeSpins":"millionWaysBC/img/free-spins.png",
        "bigWin":"millionWaysBC/img/big-win.png",
        "superWin":"millionWaysBC/img/epic-win.png",
        "megaWin":"millionWaysBC/img/ultra-win.png",
        "boxFS":"millionWaysBC/img/total-win-box.png",
        "buttonBg":"gui/generic/img/desktop/png/cp-info-bar.png",
        "volOnButton": "gui/btnVolOn.png",
        "volOffButton": "gui/btnVolOff.png",
        "featurePanel":"millionWaysBC/img/buyFeature/buy-feature-pop-up.png",
        "bgAlpha":"millionWaysBC/img/alpha.png",
        "freeSpinPanel": "millionWaysBC/img/free-spinsH.png",
        "freeRoundsPanel": "millionWaysBC/img/free-rounds.png",
    },
    "localizedAssets":{
    },
    "buttonsSpriteSheet": {
        "container-btn": {
            "sprite": "millionWaysBC/img/game-btn.png",
            "json": "millionWaysBC/img/game-btn.png",
            "w": 210,
            "h": 66
        },
        "feature-Fn-btn": {
            "sprite": "millionWaysBC/img/buyFeature/buy-fs-btn.png",
            "json": "millionWaysBC/img/buyFeature/buy-fs-btn.png",
            "w": 172,
            "h": 65
        },
        "feature-Rn-btn": {
            "sprite": "millionWaysBC/img/buyFeature/buy-reels-btn.png",
            "json": "millionWaysBC/img/buyFeature/buy-reels-btn.png",
            "w": 172,
            "h": 65
        },
        "yesButton": {
            "sprite": "millionWaysBC/img/yes-btn.png",
            "json": "millionWaysBC/img/yes-btn.png",
            "w": 54,
            "h": 52
        },
        "noButton": {
            "sprite": "millionWaysBC/img/no-btn.png",
            "json": "millionWaysBC/img/no-btn.png",
            "w": 54,
            "h": 52
        },
        "check": {
            "sprite": "millionWaysBC/img/radio-btns.png",
            "json": "millionWaysBC/img/radio-btns.png",
            "w": 64,
            "h": 32
        },
        "genericBtn":{
            "sprite": "gui/generic/img/generic-game-btn.png",
            "json": "gui/generic/img/generic-game-btn.png",
            "w": 210,
            "h": 68
        },
        "buyFeature":{
            "json": "millionWaysBC/img/buy-free-spin-btn.png",
            "sprite": "millionWaysBC/img/buy-free-spin-btn.png",
            "w": 170,
            "h": 82
        },

    },
    "animations": {
        "reelFrame_1": {
            "json": "millionWaysBC/img/bg/frame/add-reel-01.json",
            "sprite": "millionWaysBC/img/bg/frame/add-reel-01.png"
        },
        "reelFrame_2": {
            "json": "millionWaysBC/img/bg/frame/add-reel-02.json",
            "sprite": "millionWaysBC/img/bg/frame/add-reel-02.png"
        },
        "reelFrame_3": {
            "json": "millionWaysBC/img/bg/frame/add-reel-03.json",
            "sprite": "millionWaysBC/img/bg/frame/add-reel-03.png"
        },
        "reelFrame_4": {
            "json": "millionWaysBC/img/bg/frame/add-reel-04.json",
            "sprite": "millionWaysBC/img/bg/frame/add-reel-04.png"
        },
        "anim0": {
            "json": "millionWaysBC/img/anim/symbol-00.json",
            "sprite": "millionWaysBC/img/anim/symbol-00.png"
        },
        "anim1": {
            "json": "millionWaysBC/img/anim/symbol-01.json",
            "sprite": "millionWaysBC/img/anim/symbol-01.png"
        },
        "anim2": {
            "json": "millionWaysBC/img/anim/symbol-02.json",
            "sprite": "millionWaysBC/img/anim/symbol-02.png"
        },
        "anim3": {
            "json": "millionWaysBC/img/anim/symbol-03.json",
            "sprite": "millionWaysBC/img/anim/symbol-03.png"
        },
        "anim4": {
            "json": "millionWaysBC/img/anim/symbol-04.json",
            "sprite": "millionWaysBC/img/anim/symbol-04.png"
        },
        "anim5": {
            "json": "millionWaysBC/img/anim/symbol-05.json",
            "sprite": "millionWaysBC/img/anim/symbol-05.png"
        },
        "anim6": {
            "json": "millionWaysBC/img/anim/symbol-06.json",
            "sprite": "millionWaysBC/img/anim/symbol-06.png"
        },
        "anim7": {
            "json": "millionWaysBC/img/anim/symbol-07.json",
            "sprite": "millionWaysBC/img/anim/symbol-07.png"
        },
        "anim8": {
            "json": "millionWaysBC/img/anim/symbol-08.json",
            "sprite": "millionWaysBC/img/anim/symbol-08.png"
        },
        "anim9": {
            "json": "millionWaysBC/img/anim/symbol-09.json",
            "sprite": "millionWaysBC/img/anim/symbol-09.png"
        },
        "anim10": {
            "json": "millionWaysBC/img/anim/symbol-10.json",
            "sprite": "millionWaysBC/img/anim/symbol-10.png"
        },
        "icon11": {
            "json": "millionWaysBC/img/anim/symbol-11.json",
            "sprite": "millionWaysBC/img/anim/symbol-11.png"
        },
        "anim12": {
            "json": "millionWaysBC/img/anim/symbol-11.json",
            "sprite": "millionWaysBC/img/anim/symbol-11.png"
        },
        "part-1": {
            "json": "millionWaysBC/img/anim/bronze-coin.json",
            "sprite": "millionWaysBC/img/anim/bronze-coin.png"
        },
        "part-2": {
            "json": "millionWaysBC/img/anim/silver-coin.json",
            "sprite": "millionWaysBC/img/anim/silver-coin.png"
        },
        "part-3": {
            "json": "millionWaysBC/img/anim/gold-coin.json",
            "sprite": "millionWaysBC/img/anim/gold-coin.png"
        },
        "f-part-1": {
            "json": "millionWaysBC/img/anim/bronze-coin-frwrd.json",
            "sprite": "millionWaysBC/img/anim/bronze-coin-frwrd.png"
        },
        "f-part-2": {
            "json": "millionWaysBC/img/anim/silver-coin-frwrd.json",
            "sprite": "millionWaysBC/img/anim/silver-coin-frwrd.png"
        },
        "f-part-3": {
            "json": "millionWaysBC/img/anim/gold-coin-frwrd.json",
            "sprite": "millionWaysBC/img/anim/gold-coin-frwrd.png"
        },
        "anchorIn":{
            "json": "millionWaysBC/img/side-feature/side-feature.json",
            "sprite": "millionWaysBC/img/side-feature/side-feature.png"
        },
        "anchorIdle":{
            "json": "millionWaysBC/img/side-feature/side-feature-idle.json",
            "sprite": "millionWaysBC/img/side-feature/side-feature-idle.png"
        },
        "smbBg_5_2":{
            "json": "millionWaysBC/img/anim/tile-128x217.json",
            "sprite": "millionWaysBC/img/anim/tile-128x217.png"
        },
        "smbBg_5_3":{
            "json": "millionWaysBC/img/anim/tile-128x144.json",
            "sprite": "millionWaysBC/img/anim/tile-128x144.png"
        },
        "smbBg_5_4":{
            "json": "millionWaysBC/img/anim/tile-128x108.json",
            "sprite": "millionWaysBC/img/anim/tile-128x108.png"
        },
        "smbBg_5_5":{
            "json": "millionWaysBC/img/anim/tile-128x87.json",
            "sprite": "millionWaysBC/img/anim/tile-128x87.png"
        },
        "smbBg_5_6":{
            "json": "millionWaysBC/img/anim/tile-128x72.json",
            "sprite": "millionWaysBC/img/anim/tile-128x72.png"
        },
        "smbBg_5_7":{
            "json": "millionWaysBC/img/anim/tile-128x62.json",
            "sprite": "millionWaysBC/img/anim/tile-128x62.png"
        },
        "smbBg_5_8":{
            "json": "millionWaysBC/img/anim/fakeAnim.json",
            "sprite": "millionWaysBC/img/anim/fakeAnim.png"
        },
        "smbBg_5_9":{
            "json": "millionWaysBC/img/anim/fakeAnim.json",
            "sprite": "millionWaysBC/img/anim/fakeAnim.png"
        },
        "smbBg_6_2":{
            "json": "millionWaysBC/img/anim/tile-128x280.json",
            "sprite": "millionWaysBC/img/anim/tile-128x280.png"
        },
        "smbBg_6_3":{
            "json": "millionWaysBC/img/anim/tile-128x187.json",
            "sprite": "millionWaysBC/img/anim/tile-128x187.png"
        },
        "smbBg_6_4":{
            "json": "millionWaysBC/img/anim/tile-128x140.json",
            "sprite": "millionWaysBC/img/anim/tile-128x140.png"
        },
        "smbBg_6_5":{
            "json": "millionWaysBC/img/anim/tile-128x112.json",
            "sprite": "millionWaysBC/img/anim/tile-128x112.png"
        },
        "smbBg_6_6":{
            "json": "millionWaysBC/img/anim/tile-128x93.json",
            "sprite": "millionWaysBC/img/anim/tile-128x93.png"
        },
        "smbBg_6_7":{
            "json": "millionWaysBC/img/anim/tile-128x80.json",
            "sprite": "millionWaysBC/img/anim/tile-128x80.png"
        },
        "smbBg_6_8":{
            "json": "millionWaysBC/img/anim/tile-128x70.json",
            "sprite": "millionWaysBC/img/anim/tile-128x70.png"
        },
        "smbBg_6_9":{
            "json": "millionWaysBC/img/anim/tile-128x62.json",
            "sprite": "millionWaysBC/img/anim/tile-128x62.png"
        },
        "lockIn":{
            "json": "millionWaysBC/img/anim/lockFeature/lock-reel.json",
            "sprite": "millionWaysBC/img/anim/lockFeature/lock-reel.png"
        },
        "lockInLong":{
            "json": "millionWaysBC/img/anim/lockFeature/lock-reel-expanded.json",
            "sprite": "millionWaysBC/img/anim/lockFeature/lock-reel-expanded.png"
        },

    },
    "importantSounds": {
        "spinClick": {
            "name": "millionWaysBC/sounds/spinClick.mp3",
            "volume": .1
        },
        "reelStop": {
            "name": "millionWaysBC/sounds/reelStop.mp3",
            "volume":.8
        },
        "reelSound": {
            "name": "millionWaysBC/sounds/reelSound.mp3",
            "volume":1
        },
        "coins": {
            "name": "millionWaysBC/sounds/coins.mp3",
            "volume": 1
        },
        "iconPop": {
            "name": "millionWaysBC/sounds/iconPop.mp3",
            "volume": 1.1
        },
        "winAmountFall": {
            "name": "millionWaysBC/sounds/winAmountFall.mp3",
            "volume": .6
        }
    },
    "bgImportantSounds":{
        "bgSlot": {
            "name": "millionWaysBC/sounds/bg_layer1.mp3",
            "volume": 1.5,
            "marker":true
        }
    },
    "sounds": {
        "click": {
            "name": "millionWaysBC/sounds/click.mp3",
            "volume": .3
        },
        "multiplier": {
            "name": "millionWaysBC/sounds/multiplier.mp3",
            "volume": .7
        },
        "multiplier_1": {
            "name": "millionWaysBC/sounds/multiplier_layer1.mp3",
            "volume": 1
        },
        "multiplier_2": {
            "name": "millionWaysBC/sounds/multiplier_layer2.mp3",
            "volume": 1
        },
        "multiplier_3": {
            "name": "millionWaysBC/sounds/multiplier_layer3.mp3",
            "volume": 1
        },
        "lock": {
            "name": "millionWaysBC/sounds/reelLock.mp3",
            "volume": 1
        },
        "amtCentral": {
            "name": "millionWaysBC/sounds/amtC.mp3",
            "volume": 1
        },
        "anchor_activate1": {
            "name": "millionWaysBC/sounds/anchor_activate1.mp3",
            "volume": 1
        },
        "anchor_activate2": {
            "name": "millionWaysBC/sounds/anchor_activate2.mp3",
            "volume": 1
        },
        "anchor_activate3": {
            "name": "millionWaysBC/sounds/anchor_activate3.mp3",
            "volume": 1
        },
        "anchor_activate4": {
            "name": "millionWaysBC/sounds/anchor_activate4.mp3",
            "volume": 1
        },
        "additionalFs": {
            "name": "millionWaysBC/sounds/anchor_activate4.mp3",
            "volume": 1
        },
        "anchor_deactivate": {
            "name": "millionWaysBC/sounds/anchor_deactivate.mp3",
            "volume": 1
        },
        "smbWin_0": {
            "name": "millionWaysBC/sounds/smbWin_0.mp3",
            "multiple":["smbWin_1","smbWin_2","smbWin_3","smbWin_4"],
            "volume": 1
        },
        "smbWin_5": {
            "name": "millionWaysBC/sounds/smbWin_5.mp3",
            "volume": 1
        },

        "smbWin_6": {
            "name": "millionWaysBC/sounds/smbWin_6.mp3",
            "volume": 1
        },
        "smbWin_7": {
            "name": "millionWaysBC/sounds/smbWin_7.mp3",
            "volume": 1
        },
        "smbWin_8": {
            "name": "millionWaysBC/sounds/smbWin_8.mp3",
            "volume": 1
        },
        "smbWin_9": {
            "name": "millionWaysBC/sounds/smbWin_9.mp3",
            "volume": 1
        },
        "smbWin_10": {
            "name": "millionWaysBC/sounds/smbWin_10.mp3",
            "volume": 1
        },
        "smbWin_12": {
            "name": "millionWaysBC/sounds/smbWin_10.mp3",
            "volume": 1
        },
        "winBg_0": {
            "name": "millionWaysBC/sounds/centralWin/win1.mp3",
            "volume": 0
        },
        "winBg_1": {
            "name": "millionWaysBC/sounds/centralWin/win2.mp3",
            "volume":  .6
        },
        "winBg_2": {
            "name": "millionWaysBC/sounds/centralWin/win3.mp3",
            "volume":  .65
        },
        "winBg_3": {
            "name": "millionWaysBC/sounds/centralWin/win4.mp3",
            "volume":  .7
        },
        "winBg_4": {
            "name": "millionWaysBC/sounds/centralWin/win5.mp3",
            "volume":  .7
        },
        "winBg_5": {
            "name": "millionWaysBC/sounds/centralWin/win6.mp3",
            "volume":  .7
        },
        "winBgS_6": {
            "name": "millionWaysBC/sounds/centralWin/bigWin_Full.mp3",
            "volume":  .8
        },
        "winBgS_7": {
            "name": "millionWaysBC/sounds/centralWin/superBigWin_Full.mp3",
            "volume":   .8
        },
        "winBgS_8": {
            "name": "millionWaysBC/sounds/centralWin/megaBigWin_Full.mp3",
            "volume":  .8
        },
        "winBg_6": {
            "name": "millionWaysBC/sounds/centralWin/bigWin.mp3",
            "volume":  .8
        },
        "winBg_7": {
            "name": "millionWaysBC/sounds/centralWin/superBigWin.mp3",
            "volume":   .8
        },
        "winBg_8": {
            "name": "millionWaysBC/sounds/centralWin/megaBigWin.mp3",
            "volume": .8
        },
        "fsWon": {
            "name": "millionWaysBC/sounds/introFs.mp3",
            "volume": .6
        },
        "incWin": {
            "name": "millionWaysBC/sounds/counter.mp3",
            "volume": .6,
            "loop": true
        },
        "winPanel": {
            "name": "millionWaysBC/sounds/winScreen.mp3",
            "volume": 1
        },
        "tumble_0": {
            "name": "millionWaysBC/sounds/tumbling.mp3",
            "volume": 1.1,
            "multiple":["tumble_1","tumble_2","tumble_3","tumble_4","tumble_5","tumble_6"]
        },
        "wildx2": {
            "name": "millionWaysBC/sounds/wildx2_land.mp3",
            "volume": 1
        },
        "fsOpen": {
            "name": "millionWaysBC/sounds/fsOpen.mp3",
            "volume": 1
        },
        "fsClose": {
            "name": "millionWaysBC/sounds/fsClose.mp3",
            "volume": 1
        }
    },
    "bgSounds": {
        "bgSlot1": {
            "name": "millionWaysBC/sounds/bg_layer2.mp3",
            "volume": 0,
            "marker":true
        },
        "bgSlot2": {
            "name": "millionWaysBC/sounds/bg_layer3.mp3",
            "volume": 0,
            "marker":true
        },
        "bgSlot3": {
            "name": "millionWaysBC/sounds/bg_layer4.mp3",
            "volume": 0,
            "marker":true
        },
        "bgFs": {
            "name": "millionWaysBC/sounds/bgLevels1234.mp3",
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
        "bgContainer": {
            "visible":true,
            "graphAsset": {
            }
        },
        "bg": {
            "visible":false,
            "portrait":true,
            "graphAsset": {
                "bg": {
                    "name": "bg_m",
                    "portrait": true,
                    "x": 0,
                    "y": 0
                },
                "bgP": {
                    "name": "bg_bg",
                    "x": 640,
                    "y": 360,
                    "width":768,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "multBg":{
                    "visible": true,
                    "name": "multBg",
                    "x": 130,
                    "y": 560,
                    "anchorX":.5,
                    "anchorY":.5
                },


            },
            "texts":{
                "fsmultT1":{
                    "x": 130,
                    "y": 539,
                    "font": "15px GermaniaOne-Regular,Arial, Helvetica sans-serif",
                    "fill": "#ffffff",
                    "text": "Multiplier",
                    "align":"center",
                    "anchorX": .5
                },
                "multValue1":{
                    "x": 130,
                    "y": 565,
                    "bmpFont": "multiBmpFont",
                    "size": "55",
                    "text": "",
                    "anchorX": .5,
                    "anchorY": .5
                },
            }
        },
        "bgFS": {
            "visible":false,
            "portrait":true,
            "graphAsset": {
                "bg": {
                    "name": "bgFS_m",
                    "portrait": true,
                    "x": 0,
                    "y": 0
                },
                "bgP": {
                    "name": "bg_bg",
                    "x": 640,
                    "y": 360,
                    "width": 768,
                    "anchorX": .5,
                    "anchorY": .5
                }
            }
        },
        "reels": {
        },
        "stickyWilds": {
        },
        "wild": {
        },
        "winGlow":{
        },
        "mask":{},
        "lockReels":{
            "visible":false,
            "graphAsset": {
                "lockIn_0": {
                    "visible":false,
                    "name": "lockIn",
                    "x": 168,
                    "y": 105
                },
                "lockIn_1": {
                    "name": "lockIn",
                    "visible":false,
                    "x":168+ 128,
                    "y": 105
                },
                "lockIn_2": {
                    "name": "lockIn",
                    "visible":false,
                    "x":168+ 2*128,
                    "y": 105
                },
                "lockIn_3": {
                    "name": "lockInLong",
                    "visible":false,
                    "x":168+ 3*128,
                    "y": 105-50
                },
                "lockIn_4": {
                    "name": "lockIn",
                    "visible":false,
                    "x":168+ 4*128,
                    "y": 105
                },
                "lockIn_5": {
                    "name": "lockIn",
                    "visible":false,
                    "x":168+ 5*128,
                    "y": 105
                },
                "lockIn_6": {
                    "name": "lockIn",
                    "visible":false,
                    "x":168+ 6*128,
                    "y": 105
                },

            },
            "texts":{
                "fsMultValueBig":{
                    "x": 640,
                    "y": 400,
                    "bmpFont": "multiBmpFont",
                    "size": "300",
                    "text": "",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsAdd0": {
                    "visible":false,
                    "x": 168+85,
                    "y": 125,
                    "bmpFont": "multiBmpFont",
                    "size": "50",
                    "text": "+1",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsAdd1": {
                    "visible":false,
                    "x": 168 + 1 *128+85,
                    "y": 125,
                    "bmpFont": "multiBmpFont",
                    "size": "50",
                    "text": "+1",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsAdd2": {
                    "visible":false,
                    "x": 168 + 2 *128+85,
                    "y": 125,
                    "bmpFont": "multiBmpFont",
                    "size": "50",
                    "text": "+1",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsAdd3": {
                    "visible":false,
                    "x": 168 + 3 *128+85,
                    "y": 65,
                    "bmpFont": "multiBmpFont",
                    "size": "50",
                    "text": "+5",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsAdd4": {
                    "visible":false,
                    "x": 168 + 4 *128+85,
                    "y": 125,
                    "bmpFont": "multiBmpFont",
                    "size": "50",
                    "text": "+1",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsAdd5": {
                    "visible":false,
                    "x": 168 + 5 *128+85,
                    "y": 125,
                    "bmpFont": "multiBmpFont",
                    "size": "50",
                    "text": "+1",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsAdd6": {
                    "visible":false,
                    "x": 168 + 6 *128+85,
                    "y": 125,
                    "bmpFont": "multiBmpFont",
                    "size": "50",
                    "text": "+1",
                    "anchorX": .5,
                    "anchorY": .5
                }
            }
        },
        "buyFeature":{
            "buttons": {
                "buyFeature": {
                    "visible":true,
                    "name": "buyFeature",
                    "x": 132,
                    "y": 60,
                    "evt": "doBuyFeature",
                    "texts": {
                        "txt": {
                            "x": 0,
                            "y": 0,
                            "font": "20px  GermaniaOne-Regular,Arial, Helvetica sans-serif",
                            "fill": "#ffffff",
                            "text": "Buy Free Spins",
                            "anchorX": .5
                        }
                    }
                }
            }
        },
        "freeSpinAccumulator": {
            "visible": false,
            "maxFs": 12,
            "graphAsset": {
                "bg4":{
                    "visible": true,
                    "name": "anchorBg",
                    "x": 130,
                    "y": 225,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "bg3":{
                    "visible": true,
                    "name": "anchorBg",
                    "x": 130,
                    "y": 320,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "bg2":{
                    "visible": true,
                    "name": "anchorBg",
                    "x": 130,
                    "y": 415,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "bg1":{
                    "visible": true,
                    "name": "anchorBg",
                    "x": 130,
                    "y": 510,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "anchor4_In": {
                    "visible": false,
                    "name": "anchorIn",
                    "x": 130,
                    "y": 185,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "anchor3_In": {
                    "visible": false,
                    "name": "anchorIn",
                    "x": 130,
                    "y": 281,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "anchor2_In": {
                    "visible": false,
                    "name": "anchorIn",
                    "x": 130,
                    "y": 375,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "anchor1_In": {
                    "visible": false,
                    "name": "anchorIn",
                    "x": 130,
                    "y": 470,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "anchor4_Idle": {
                    "visible": false,
                    "name": "anchorIdle",
                    "x": 130,
                    "y": 185,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "anchor3_Idle": {
                    "visible": false,
                    "name": "anchorIdle",
                    "x": 130,
                    "y": 281,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "anchor2_Idle": {
                    "visible": false,
                    "name": "anchorIdle",
                    "x": 130,
                    "y": 375,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "anchor1_Idle": {
                    "visible": false,
                    "name": "anchorIdle",
                    "x": 130,
                    "y": 470,
                    "anchorX":.5,
                    "anchorY":.5
                }

            }
        },
        "idleObjects":{
            "visible":false,
            "frequency":[1000,3000],
            "objects": {
                "s2": {
                    "name": "explosion",
                    "x": 115,
                    "y": 418,
                    "scaleX":10,
                    "scaleY":10,
                    "fps":24,
                    "prob":15,
                    "clear":false,
                    "anchorX": .5,
                    "anchorY": .5
                },
            }
        },

        "buttonFg":{
        },
        "stickyWild": {},
        "wins": {},
        "lines": {},
        "logo": {
            "visible":false,
            "graphAsset": {


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
                    "y": 35,
                    "anchorX":.5,
                    "anchorY":.5
                }
            },
            "texts": {
                "frLabel": {
                    "x": 339,
                    "y": 13,
                    "fill": "#af7d16",
                    "font": "15px Futura ,Arial",
                    "text": "Free Rounds:",
                    "anchorX":  0.5
                },
                "frValue": {
                    "x": 339,
                    "y": 25,
                    "fill": "#cb911a",
                    "font": "25px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                },
                "frTotWonLabel": {
                    "x": 942,
                    "y": 13,
                    "fill": "#af7d16",
                    "font": "15px Futura ,Arial",
                    "text": "Total won:",
                    "anchorX":  0.5
                },
                "frTotWonValue": {
                    "x": 942,
                    "y": 25,
                    "fill": "#cb911a",
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
                    "y": 17,
                    "scaleX":.5,
                    "scaleY":.5,
                    "anchorX": .5
                },
                "boxFS":{
                    "name": "boxFS",
                    "x": 451,
                    "y": 60,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "boxTW":{
                    "name": "boxFS",
                    "x": 827,
                    "y": 60,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "boxMu":{
                    "name": "boxFS",
                    "x": 994,
                    "y": 60,
                    "anchorX": .5,
                    "anchorY": .5
                }
            },
            "texts": {
                "fsLabel": {
                    "x": 451,
                    "y": 30,
                    "fill": "#ffffff",
                    "font": "14px GermaniaOne-Regular ,Arial",
                    "text": "Free Spins",
                    "align":"center",
                    "anchorX": 0.5
                },
                "fsValue": {
                    "x": 451,
                    "y": 50,
                    "fill": "#ffffff",
                    "font": "27px GermaniaOne-Regular ,Arial",
                    "text": "10",
                    "align":"center",
                    "anchorX": 0.5
                },
                "totWonLabel": {
                    "x": 827,
                    "y": 30,
                    "fill": "#ffffff",
                    "font": "14px GermaniaOne-Regular ,Arial",
                    "text": "Total won",
                    "anchorX":0.5
                },
                "totWonValue": {
                    "x": 827,
                    "y": 50,
                    "fill": "#ffffff",
                    "font": "27px GermaniaOne-Regular ,Arial",
                    "text": "",
                    "anchorX": 0.5
                },
                "fsmultT":{
                    "x": 994,
                    "y": 30,
                    "font": "14px GermaniaOne-Regular,Arial, Helvetica sans-serif",
                    "fill": "#ffffff",
                    "text": "Multiplier",
                    "align":"center",
                    "anchorX": .5
                },
                "fsMultValue":{
                    "x": 994,
                    "y": 28,
                    "bmpFont": "multiBmpFont",
                    "size": "62",
                    "text": "",
                    "anchorX": .5
                },
                "fsAdditional":{
                    "x": 500,
                    "y": 52,
                    "bmpFont": "multiBmpFont",
                    "size": "50",
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
                }
            },
            "texts": {

                "winValue": {
                    "x": 642,
                    "y": 670,
                    "font": "55px Helvetica, Arial, sans-serif",
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
        "winWays":{
            "visible": false,
            "portrait":true,
            "graphAsset": {
                "winW":{
                    "name":"winWayObj",
                    "x": 640,
                    "y": 45,
                    "anchorX": .5,
                    "anchorY": .5
                }
            },
            "texts":{
                "winWaysNum":{
                    "x": 640,
                    "y": 65,
                    "bmpFont": "bmpFont",
                    "size": "60",
                    "text": "1024",
                    "anchorX": 0.5
                },
            }
        },
        "fsWonPanel": {
            "visible": false,
            "fakeButton": true,
            "eventBlock": true,
            "evt": "fireConfirmation",
            "duration": 400,
            "graphAsset": {

                "bgFsWon": {
                    "name": "bgPanel",
                    "x": 640,
                    "y": 310,
                    "anchorX": .5,
                    "anchorY": .5,
                    "scaleX":1.3,
                    "scaleY":1.3,
                },
                "fsHeading": {
                    "name": "freeSpins",
                    "x": 640,
                    "y": 214,
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
                "fsCap": {
                    "x": 640,
                    "y": 350,
                    "fill": "#ffffff",
                    "font": "28px FuturaPT-Book",
                    "text": "The maximum prize",
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
        "fsWonPanelLR": {
            "visible": false,
            "fakeButton": true,
            "eventBlock": true,
            "duration": 5,
            "graphAsset": {
                "bgFsWon": {
                    "name": "bgPanel",
                    "x": 640,
                    "y": 345,
                    "anchorX": .5,
                    "anchorY": .5,
                    "scaleX":1.1,
                    "scaleY":1.1,
                }
            },
            "texts": {
                "pwfsW1":{
                    "x": 640,
                    "y": 250,
                    "font": "35px GermaniaOne-Regular, sans-serif",
                    "fill": "#fddb29",
                    "align":"center",
                    "text": "MAMMOTH REEL UNLOCKED.",
                    "anchorX": 0.5,
                },
                "pwfsW2":{
                    "x": 640,
                    "y": 310,
                    "font": "25px GermaniaOne-Regular, sans-serif",
                    "fill": "#9bffff",
                    "align":"center",
                    "text": "+ 5 EXTRA FREE SPINS.",
                    "anchorX": 0.5,
                },
                "pwfsW3":{
                    "x": 640,
                    "y": 350,
                    "font": "25px GermaniaOne-Regular, sans-serif",
                    "fill": "#9bffff",
                    "align":"center",
                    "text": "STICKY WILDS UNLOCKED.",
                    "anchorX": 0.5,
                },
                "pwfsW4":{
                    "x": 640,
                    "y": 373,
                    "font": "12px GermaniaOne-Regular, sans-serif",
                    "fill": "#9bffff",
                    "align":"center",
                    "text": "(IN CENTRAL REEL.)",
                    "anchorX": 0.5,
                },
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
                    "y": 345,
                    "anchorX": .5,
                    "anchorY": .5,
                    "scaleX":1.1,
                    "scaleY":1.1,
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
                    "y": -300,
                    "height":2000,
                    "alpha": .8
                },
                "group":{
                    "name":"centralFuntain"
                },
                "bigWin": {
                    "name": "bigWin",
                    "x": 635,
                    "y":270,
                    "yS": -300,
                    "yE": 270,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "sBigWin": {
                    "name": "superWin",
                    "x": 635,
                    "y": 270,
                    "yS": -300,
                    "yE": 270,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "mBigWin": {
                    "name": "megaWin",
                    "x": 635,
                    "y": 270,
                    "yS": -300,
                    "yE": 270,
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
                },
            }
        },
        "centralLineWin": {
            "visible": false,
            "texts": {
                "lineWin": {
                    "x": 640,
                    "y": 410,
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
            "tweenShow":true,
            "graphAsset": {
                "bgmsgPw": {
                    "name": "bgPreview",
                    "x": 0,
                    "y": 0
                },
                "bgPreview1": {
                    "name": "bgPreview1",
                    "x": 10,
                    "y": 120,
                    "texts": {
                        "pw1":{
                            "x": 310,
                            "y": 240,
                            "font": "18px GermaniaOne-Regular, sans-serif",
                            "fill": "#FFFFFF",
                            "text": "ADDITIONAL MAMMOTH REEL IN FREE SPINS",
                            "anchorX": 0.5,
                        },
                        "pw2":{
                            "x": 310,
                            "y": 320,
                            "font": "24px GermaniaOne-Regular, sans-serif",
                            "fill": "#9bffff",
                            "align":"center",
                            "text": "MAMMOTH REEL CAN FREEZE TO 9 AND",
                            "anchorX": 0.5,
                        },
                        "pw3":{
                            "x": 310,
                            "y": 340,
                            "font": "24px GermaniaOne-Regular, sans-serif",
                            "fill": "#9bffff",
                            "align":"center",
                            "text": "UNLOCK STICKY WILDS",
                            "anchorX": 0.5,
                        },
                        "pw31":{
                            "x": 310,
                            "y": 380,
                            "font": "35px GermaniaOne-Regular, sans-serif",
                            "fill": "#fddb29",
                            "align":"center",
                            "text": "AWARDING 5 EXTRA FREE SPINS",
                            "anchorX": 0.5,
                        },
                        "pw51":{
                            "x": 310,
                            "y": 265,
                            "font": "35px GermaniaOne-Regular, sans-serif",
                            "fill": "#fddb29",
                            "align":"center",
                            "text": "MAX WIN x45000",
                            "anchorX": 0.5,
                        }
                    }
                },
                "bgPreview2": {
                    "name": "bgPreview2",
                    "x": 647,
                    "y": 120,
                    "texts": {
                        "pw4":{
                            "x": 310,
                            "y": 230,
                            "font": "24px GermaniaOne-Regular, sans-serif",
                            "fill": "#9bffff",
                            "align":"center",
                            "text": "EVERY WIN TRIGGERS A TUMBLE",
                            "anchorX": 0.5,
                        },
                        "pw41":{
                            "x": 310,
                            "y": 396,
                            "font": "18px  GermaniaOne-Regular, sans-serif",
                            "fill": "#FFFFFF",
                            "align":"center",
                            "text": "4 SUCCESSIVE TUMBLES AWARD YOU FREE SPIN",
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
        "msgBox": {
            "visible":false,
            "eventBlock":true,
            "graphAsset": {
                "bgmsg": {
                    "name": "bgAlpha",
                    "x": 640,
                    "y": -320,
                    "height":2000,
                    "anchorX": .5
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
                    "text": "",
                    "anchorX": .5
                },
                "msg2": {
                    "x": 640,
                    "y": 350,
                    "fill": "#ffffff",
                    "font": "22px FuturaPT-Book",
                    "text": "",
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
                    "x": 640,
                    "y": 0,
                    "height":2000,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "generic": {
                    "name": "bgPanel",
                    "x": 640,
                    "y": 310,
                    "anchorX": .5,
                    "anchorY": .5,
                    "scaleX":1.7,
                    "scaleY":1.5
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
                "msgFR2": {
                    "x": 640,
                    "y": 260,
                    "fill": "#ffffff",
                    "font": "20px FuturaPT-Book",
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
        "msgBoxFeature": {
            "visible":false,
            "eventBlock":true,
            "selectorY":260,
            "selectorX":470,
            "textYShift":2,
            "textCol":"#ffffff",
            "graphAsset": {
                "bgmsg": {
                    "name": "bgAlpha",
                    "x": 0,
                    "y": -320,
                    "height":2000,
                },
                "generic": {
                    "name": "featurePanel",
                    "x": 640,
                    "y": 320,
                    "anchorX": .5,
                    "anchorY": .5,
                    "scaleX":1.1,
                    "scaleY":1.1
                }
            },
            "texts": {
                "msgF1": {
                    "x": 640,
                    "y": 150,
                    "fill": "#ffffff",
                    "stroke": "#000000",
                    "stroke_tick": 4,
                    "font": "24px FuturaPT-Heavy",
                    "text": "",
                    "align":"center",
                    "anchorX": .5
                },
                "msgF2": {
                    "x": 640,
                    "y": 195,
                    "fill": "#ffffff",
                    "stroke": "#000000",
                    "stroke_tick": 4,
                    "font": "24px FuturaPT-Heavy",
                    "text": "",
                    "anchorX": .5
                },
                "msgF3": {
                    "x": 640,
                    "y": 260,
                    "fill": "#ffffff",
                    "stroke": "#000000",
                    "stroke_tick": 4,
                    "font": "20px FuturaPT-Heavy",
                    "text": "",
                    "anchorX": .5
                },

                "priceF": {
                    "x": 650,
                    "y": 465,
                    "fill": "#ffffff",
                    "stroke": "#000000",
                    "stroke_tick": 4,
                    "font": "24px FuturaPT-Heavy",
                    "text": "",
                    "anchorX": .5
                }
            },
            "buttons": {
                "yes": {
                    "name": "genericBtn",
                    "x": 500,
                    "y": 630,
                    "evt": "doOkMWJ",
                    "texts": {
                        "noLabel": {
                            "x": 0,
                            "y": -13,
                            "fill": "#ffffff",
                            "font": "18px FuturaPT-Heavy",
                            "text": "OK",
                            "anchorX": .5
                        }
                    }
                },
                "no": {
                    "name": "genericBtn",
                    "x": 775,
                    "y": 630,
                    "evt": "doKo",
                    "texts": {
                        "noLabel": {
                            "x": 0,
                            "y": -13,
                            "fill": "#ffffff",
                            "font": "18px FuturaPT-Heavy",
                            "text": "NO",
                            "anchorX": .5
                        }
                    }
                },
                "ok": {
                    "name": "genericBtn",
                    "x": 640,
                    "anchorX": .5,
                    "y": 630,
                    "evt": "doOk",
                    "texts": {
                        "noLabel": {
                            "x": 0,
                            "y": -13,
                            "fill": "#ffffff",
                            "font": "20px FuturaPT-Heavy",
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
    "slotEngine":"IntegratedSlots",
    "engineNumbers":0,
    "licence":true,
    "newUI":true,
    "newComm":true,
    "log":true,
    "canSwipe":false,
    "fastPlayEnable":true,
    "comment_preview":"enable feature preview screen",
    "preview":true,
    "previewTout":30000,
    "spinType": "MillionMegaWayTumblingSpin",
    "falling":false,
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
    "lineType": "MillionWayTumblingWinnings",
    "lineFrames":31,
    "lineFrames":19,
    "comment_lineWinAmtType":"lines/coinWinning class",
    "lineWinAmtType":"NormalLineWinAmount",
    "numReels": 6,
    "numIcons": 7,
    "numIconsOnTop": 1,
    "numIconsOnBottom":1,
    "icons": [25, 25, 25, 25, 25,25,25,25 ],
    "_spinResult":[[0,1,2,3,4],[5,6,7,8,9],[6,1,2,3,4],[9,1,2,3,4],[2,1,2,3,4]],
    "_spinResult":[[0,0,2,3],[11,5,7,8],[5,6,2,3],[2,9,2,3],[0,2,2,3]],
    "spinWithAlpha": .6,
    "spinConfig":{
        "es":{
            "stopEnabled":false,
            "reelSecondMovementTime":0.3,
            "reelLoopInterval":.18,
            "reelPreMovement": 4,
            "reelPreMovementTime": .2,
            "reelBaseInterval": 1,
            "reelStopInterval": 2,
            "reelSpinBounceMeasure": 40,
            "reelSpinBounceTime": .28,
            "reelSpinBounceForce": 1.2
        },
        "uk":{
            "stopEnabled":false,
            "reelSecondMovementTime":0.32,
            "reelLoopInterval":.18,
            "reelPreMovement": 4,
            "reelPreMovementTime": .2,
            "reelBaseInterval": 1,
            "reelStopInterval": 1,
            "reelSpinBounceMeasure": 40,
            "reelSpinBounceTime": .28,
            "reelSpinBounceForce": 1.2
        },
        "de":{
            "stopEnabled":false,
            "reelInterval": 200,
            "reelSecondMovementTime":0.47,
            "reelLoopInterval":.25,
            "reelPreMovement": 4,
            "reelPreMovementTime": .3,
            "reelBaseInterval": 5,
            "reelStopInterval": 1,
            "reelSpinBounceMeasure": 40,
            "reelSpinBounceTime": .3,
            "reelSpinBounceForce": 1.2
        },
        "default":{
            "stopEnabled":true,
            "reelSecondMovementTime":.25,
            "reelLoopInterval":.20,
            "reelPreMovement": 0,
            "reelPreMovementTime": 0,
            "reelBaseInterval": 1,
            "reelStopInterval": 1,
            "reelSpinBounceMeasure": 50,
            "reelSpinBounceTime": .35,
            "reelSpinBounceForce": 1,
            "minimumTime":.3
        }
    },
    "numIcon": 9,
    "loadTout": 30,
    "credits": "5000",
    "bet": "0.50",
    "animDelayAfterWild":1500,
    "freeRounds":"normal",
    "freeSpins":"MillionMwFreeSpins",
    "_fsIcon": 1,
    "fsSpinDelay":5000,
    "minFsSmbs":3,
    "scatterIcon": 10,
    "scatterType": "SubstScatter",
    "_twinReelsFeature":"normal",
    "animDelayAfterWild":2000,
    "winTxtClasses": [1, 2, 5, 10, 20, 50, 100, 300, 500, 1000],
    "smb_colors":[0xff33cc,0xcc33ff,0x0066ff,0x00ff99,0xffcc00,0xff33cc,0xcc33ff,0x0066ff,0x00ff99,0xffcc00,0xffcc00],
    "smbMinAnimTime":[.5,.5,.5,.5,.5,.5,.5,1.5,.5,.5],
    "muteDuringWins":true,
    "keepShowingAnimation":true,
    "additionalPreText":"",
    "additionalPostText":"",
    "reel": {
        "deltaX_0": 256,
        "deltaX": 128,
        "deltaY_0": 576,
        "deltaY": 104
    },
    "icon": {
        "x": 0,
        "y": 0,
        "width": 128,
        "height": 128
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

    "pages": [

        //Game guide object
        {
            "gameguide": true,
            "title": "1 Million Megaways BC™ Game Rules",
            "rtp": [
                "96.20",
                "96.20",
                "96.20"
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
                            "bg": "millionWaysBC/img/symbol-00.png", //symbol image
                            "payout_values": true //Whether symbol has payout values

                        },

                        {

                            "id": "symbol_01",
                            "bg": "millionWaysBC/img/symbol-01.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_02",
                            "bg": "millionWaysBC/img/symbol-02.png",
                            "payout_values": true

                        }


                    ],

                    [

                        {

                            "id": "symbol_03",
                            "bg": "millionWaysBC/img/symbol-03.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_04",
                            "bg": "millionWaysBC/img/symbol-04.png",
                            "payout_values": true

                        }

                    ],

                    [
                        {

                            "id": "symbol_05",
                            "bg": "millionWaysBC/img/paytable/symbol-05.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_06",
                            "bg": "millionWaysBC/img/paytable/symbol-06.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_07",
                            "bg": "millionWaysBC/img/paytable/symbol-07.png",
                            "payout_values": true

                        }

                    ],

                    [

                        {
                            "id": "symbol_08",
                            "bg": "millionWaysBC/img/paytable/symbol-08.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_09",
                            "bg": "millionWaysBC/img/paytable/symbol-09.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_10",
                            "bg": "millionWaysBC/img/symbol-10.png",
                            "payout_values": false,
                            "text": [
                                "Wild",
                                "Wild can appear on reel 2,3,4,5,6,7 during regular and Free Spins",
                                "Wilds substitutes all the icons."
                            ]

                        }

                    ],
                    [

                        {
                            "id": "symbol_12",
                            "bg": "millionWaysBC/img/symbol-11.png",
                            "payout_values": false,
                            "text": [
                                "Sticky Wild",
                                "Sticky Wilds can appear on central reel only during Free Spins.",
                                "Sticky Wilds stays on the reels while spinning.",
                                "Up to 9 Sticky Wilds can appear on the central reel.",
                                "Wilds substitutes all the icons."
                            ]
                        }
                    ],

                    [

                        {
                            "id" : "tumble_screenshot",
                            "bg" : "millionWaysBC/img/paytable/winways.jpg",
                            "text": [
                                " ",
                                "Whenever a win way pays out the symbols are destroyed and all remaining symbols tumble down.",
                                "All destroyed symbols are replaced with symbols from higher up on the reels with a high chance of extra Wild Stars appearing.",
                                "If the new symbols also form a win way they too will pay out and more symbols will tumble in to replace them, this will continue until no more Win Ways can be made.",
                                "Sticky Wilds on the central reels never disappears for all the Free Spin rounds but can tumble down."
                            ],
                            "size": { //Optional field that sets image height & width in px

                                "height": "225",
                                "width":  "400"

                            }

                        }

                    ],

                    [

                        {
                            "id" : "tumble_screenshot",
                            "bg" : "millionWaysBC/img/paytable/mult1.png",
                            "size": { //Optional field that sets image height & width in px

                                "height": "89",
                                "width":  "183"

                            }

                        },
                        {
                            "id" : "tumble_screenshot",
                            "bg" : "millionWaysBC/img/paytable/mult2.png",
                            "size": { //Optional field that sets image height & width in px

                                "height": "89",
                                "width":  "183"

                            }

                        },
                        {
                            "id" : "tumble_screenshot",
                            "bg" : "millionWaysBC/img/paytable/mult3.png",
                            "size": { //Optional field that sets image height & width in px

                                "height": "89",
                                "width":  "183"

                        }

                        },
                        {
                            "id" : "tumble_screenshot",
                            "bg" : "millionWaysBC/img/paytable/mult4.png",
                            "size": { //Optional field that sets image height & width in px

                                "height": "89",
                                "width":  "183"

                            }

                        },
                    ],
                    [
                        {
                            "id" : "mult-desc",

                            "text": [
                                "Base game Multiplier",
                                "Whenever a win way pays out the base game multiplier start raising from x1 from the first win in a winning sequence.",
                                "Every successive win increments the multiplier x2.",
                                "Maximum multiplier is x8.",
                                "Multiplier resets at the end of a winning sequence.",
                                "Multiplier resets when Free Spins starts.",
                            ],


                        }
                    ],

                    [

                        {

                            "id" : "FSStart",
                            "bg" : "millionWaysBC/img/paytable/fs.png",
                            "text": [
                                " ",
                                "Freespins are reached by having multiple successive tumbles (the image shows the counter at 4). A minimum of 4 tumbles is required to trigger 8 Free Spins.",
                                "Each extra successive win after 4 awards 2 extra Free Spins, up to a maximum of 14.",
                                "Additional central reel with up to 9 icons appears on the center.",
                                "During the spin, reels with 7 symbols lock at that position for the entire Free Spins round, each locked reels award 1 additional Free Spin.",
                                "During the spin, central reel with 9 symbols lock at that position for the entire Free Spins round, awards 5 additional Free Spins.",
                                "During Free spins, reels can lock awarding 1 additional multiplier per reel.",
                            ],
                            "size": { //Optional field that sets image height & width in px

                                "height": "442",
                                "width":  "220"

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

                    "bg": "millionWaysBC/img/paytable/winways.jpg",
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