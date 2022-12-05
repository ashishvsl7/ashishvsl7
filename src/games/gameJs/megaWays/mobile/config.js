
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
        "winWayOb": "megaWays/img/loader/btg-megaways.png",
        "btg": "megaWays/img/loader/btg.png",
    },
    "loaderMc": {
        "staticLoaderLogo": {
            "sprite": "megaWays/img/loader/logo-loader.png",
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
        "sprite": "fonts/fontPirKing.png",
        "font": "fonts/fontPirKing.xml"
    },
    "bmpFontSmall":{
        "sprite": "fonts/fontPirKing.png",
        "font": "fonts/fontPirKing.xml"
    },
    "multiBmpFont":{
        "sprite": "fonts/multiplierPirKing.png",
        "font": "fonts/multiplierPirKing.xml"
    }
}

var extScripts={
    "webfont": "15px FuturaPT-Heavy",
    "webfont1": "15px FuturaPT-Book",
    "webfont2": "15px BlackmoorStd"
}
var gameAssets = {
    "assets": {
        "icon0": "megaWays/img/symbol-00.png",
        "icon1": "megaWays/img/symbol-01.png",
        "icon2": "megaWays/img/symbol-02.png",
        "icon3": "megaWays/img/symbol-03.png",
        "icon4": "megaWays/img/symbol-04.png",
        "icon5": "megaWays/img/symbol-05.png",
        "icon6": "megaWays/img/symbol-06.png",
        "icon7": "megaWays/img/symbol-07.png",
        "icon8": "megaWays/img/symbol-08.png",
        "icon9": "megaWays/img/symbol-09.png",
        "icon7GH": "megaWays/img/paytable/symbol-07.png",
        "icon8GH": "megaWays/img/paytable/symbol-08.png",
        "icon9GH": "megaWays/img/paytable/symbol-09.png",
        "icon10": "megaWays/img/symbol-10.png",
        "icon12": "megaWays/img/symbol-11.png",
        "icon18": "megaWays/img/empty.png",
        "none": "megaWays/img/transparent.png",

        "smbFrame_2": "megaWays/img/frame-06.png",
        "smbFrame_3": "megaWays/img/frame-05.png",
        "smbFrame_4": "megaWays/img/frame-04.png",
        "smbFrame_5": "megaWays/img/frame-03.png",
        "smbFrame_6": "megaWays/img/frame-02.png",
        "smbFrame_7": "megaWays/img/frame-01.png",

        "bicon0": "megaWays/img/b-symbol-00.png",
        "bicon1": "megaWays/img/b-symbol-01.png",
        "bicon2": "megaWays/img/b-symbol-02.png",
        "bicon3": "megaWays/img/b-symbol-03.png",
        "bicon4": "megaWays/img/b-symbol-04.png",
        "bicon5": "megaWays/img/b-symbol-05.png",
        "bicon6": "megaWays/img/b-symbol-06.png",
        "bicon7": "megaWays/img/b-symbol-07.png",
        "bicon8": "megaWays/img/b-symbol-08.png",
        "bicon9": "megaWays/img/b-symbol-09.png",
        "bicon10": "megaWays/img/b-symbol-10.png",
        "bicon12": "megaWays/img/b-symbol-11.png",
        "anchorBg": "megaWays/img/side-feature/side-feature.png",
        "anchorBgFs": "megaWays/img/side-feature/side-feature-gold.png",
        "anchorShadFs": "megaWays/img/side-feature/anchor-shadow.png",
        "bottomBar": "gui/message-bar.png",
        "bgPanel": "megaWays/img/bgPanel.png",
        "bgPanelGame": "megaWays/img/bgPanel.png",
        "bgPreview":"megaWays/img/intro-page.jpg",
        "bgPreview1":"megaWays/img/intro-1.jpg",
        "bgPreview2":"megaWays/img/intro-2.jpg",
        "bgPreview3":"megaWays/img/intro-3.jpg",
        "winWayObj":"megaWays/img/megaways.png",

        "bg_r": "megaWays/img/bg/base-right.jpg",
        "bg_l": "megaWays/img/bg/base-left.jpg",
        "bg_b": "megaWays/img/bg/base-bottom.jpg",
        "bg_t": "megaWays/img/bg/base-top.jpg",
        "bg_m": "megaWays/img/bg/base-main.jpg",

        "bg_r_FS": "megaWays/img/bg/base-right_FS.jpg",
        "bg_l_FS": "megaWays/img/bg/base-left_FS.jpg",
        "bg_b_FS": "megaWays/img/bg/base-bottom_FS.jpg",
        "bg_t_FS": "megaWays/img/bg/base-top_FS.jpg",
        "bg_m_FS": "megaWays/img/bg/base-main_FS.jpg",
        "bgAlpha":"megaWays/img/alpha.png",
        "bgBlack":"megaWays/img/black.png",
        "logo":"megaWays/img/bg/skull-flag.png",
        "freeSpins":"megaWays/img/free-spins.png",
        "bigWin":"megaWays/img/big-win.png",
        "superWin":"megaWays/img/epic-win.png",
        "megaWin":"megaWays/img/ultra-win.png",
        "boxFS":"megaWays/img/total-win-box.png",
        "buttonBg":"gui/generic/img/desktop/png/cp-info-bar.png",
        "volOnButton": "gui/btnVolOn.png",
        "volOffButton": "gui/btnVolOff.png",
        "featureBg":"megaWays/img/buyFeature/buy-feature-bg.png",
        "featureGlow":"megaWays/img/buyFeature/buy-feature-glow.png",
        "featurePanel":"megaWays/img/buyFeature/buy-feature-pop-up.png",
        "winGlow":"megaWays/img/win/glow.png",
        "candle":"megaWays/img/win/candle.png",
        "cannon":"megaWays/img/win/cannon.png",
        "winMap":"megaWays/img/win/map.png",
        "freeSpinPanel": "megaWays/img/free-spinsH.png",
        "freeRoundsPanel": "megaWays/img/free-roundsH.png",
    },
    "localizedAssets":{
    },
    "buttonsSpriteSheet": {
        "container-btn": {
            "sprite": "megaWays/img/game-btn.png",
            "json": "megaWays/img/game-btn.png",
            "w": 210,
            "h": 66
        },
        "feature-Fn-btn": {
            "sprite": "megaWays/img/buyFeature/buy-fs-btn.png",
            "json": "megaWays/img/buyFeature/buy-fs-btn.png",
            "w": 166,
            "h": 72
        },
        "feature-Rn-btn": {
            "sprite": "megaWays/img/buyFeature/buy-reels-btn.png",
            "json": "megaWays/img/buyFeature/buy-reels-btn.png",
            "w": 166,
            "h": 72
        },
        "yesButton": {
            "sprite": "megaWays/img/yes-btn.png",
            "json": "megaWays/img/yes-btn.png",
            "w": 54,
            "h": 52
        },
        "noButton": {
            "sprite": "megaWays/img/no-btn.png",
            "json": "megaWays/img/no-btn.png",
            "w": 54,
            "h": 52
        },
        "check": {
            "sprite": "megaWays/img/radio-btns.png",
            "json": "megaWays/img/radio-btns.png",
            "w": 64,
            "h": 32
        },
        "genericBtn":{
            "sprite": "gui/generic/img/generic-game-btn.png",
            "json": "gui/generic/img/generic-game-btn.png",
            "w": 210,
            "h": 68
        },
        "container-btn":{
            "sprite": "gui/generic/img/generic-game-btn.png",
            "json": "gui/generic/img/generic-game-btn.png",
            "w": 210,
            "h": 68
        },
        "buyFeature":{
            "json": "megaWays/img/buy-free-spin-btn.png",
            "sprite": "megaWays/img/buy-free-spin-btn.png",
            "w": 172,
            "h": 53
        },
        "buyFeatureP":{
            "json": "megaWays/img/buy-free-spin-btn.png-Portrait.png",
            "sprite": "megaWays/img/buy-free-spin-btn.png-Portrait.png",
            "w": 234,
            "h": 132
        },

    },
    "animations": {
        "anim0": {
            "json": "megaWays/img/anim/symbol-00.json",
            "sprite": "megaWays/img/anim/symbol-00.png"
        },
        "anim1": {
            "json": "megaWays/img/anim/symbol-01.json",
            "sprite": "megaWays/img/anim/symbol-01.png"
        },
        "anim2": {
            "json": "megaWays/img/anim/symbol-02.json",
            "sprite": "megaWays/img/anim/symbol-02.png"
        },
        "anim3": {
            "json": "megaWays/img/anim/symbol-03.json",
            "sprite": "megaWays/img/anim/symbol-03.png"
        },
        "anim4": {
            "json": "megaWays/img/anim/symbol-04.json",
            "sprite": "megaWays/img/anim/symbol-04.png"
        },
        "anim5": {
            "json": "megaWays/img/anim/symbol-05.json",
            "sprite": "megaWays/img/anim/symbol-05.png"
        },
        "anim6": {
            "json": "megaWays/img/anim/symbol-06.json",
            "sprite": "megaWays/img/anim/symbol-06.png"
        },
        "anim7": {
            "json": "megaWays/img/anim/symbol-07.json",
            "sprite": "megaWays/img/anim/symbol-07.png"
        },
        "anim8": {
            "json": "megaWays/img/anim/symbol-08.json",
            "sprite": "megaWays/img/anim/symbol-08.png"
        },
        "anim9": {
            "json": "megaWays/img/anim/symbol-09.json",
            "sprite": "megaWays/img/anim/symbol-09.png"
        },


        "anim10": {
            "json": "megaWays/img/anim/symbol-10.json",
            "sprite": "megaWays/img/anim/symbol-10.png"
        },
        "anim12": {
            "json": "megaWays/img/anim/symbol-11.json",
            "sprite": "megaWays/img/anim/symbol-11.png"
        },
        "part-1": {
            "json": "megaWays/img/anim/bronze-coin.json",
            "sprite": "megaWays/img/anim/bronze-coin.png"
        },
        "part-2": {
            "json": "megaWays/img/anim/silver-coin.json",
            "sprite": "megaWays/img/anim/silver-coin.png"
        },
        "part-3": {
            "json": "megaWays/img/anim/gold-coin.json",
            "sprite": "megaWays/img/anim/gold-coin.png"
        },
        "f-part-1": {
            "json": "megaWays/img/anim/bronze-coin-frwrd.json",
            "sprite": "megaWays/img/anim/bronze-coin-frwrd.png"
        },
        "f-part-2": {
            "json": "megaWays/img/anim/silver-coin-frwrd.json",
            "sprite": "megaWays/img/anim/silver-coin-frwrd.png"
        },
        "f-part-3": {
            "json": "megaWays/img/anim/gold-coin-frwrd.json",
            "sprite": "megaWays/img/anim/gold-coin-frwrd.png"
        },
        "anchorIn":{
            "json": "megaWays/img/side-feature/anchor-intro.json",
            "sprite": "megaWays/img/side-feature/anchor-intro.png"
        },
        "anchorOut":{
            "json": "megaWays/img/side-feature/anchor-out.json",
            "sprite": "megaWays/img/side-feature/anchor-out.png"
        },
        "smbBg_2":{
            "json": "megaWays/img/anim/tile-06.json",
            "sprite": "megaWays/img/anim/tile-06.png"
        },
        "smbBg_3":{
            "json": "megaWays/img/anim/tile-05.json",
            "sprite": "megaWays/img/anim/tile-05.png"
        },
        "smbBg_4":{
            "json": "megaWays/img/anim/tile-04.json",
            "sprite": "megaWays/img/anim/tile-04.png"
        },
        "smbBg_5":{
            "json": "megaWays/img/anim/tile-03.json",
            "sprite": "megaWays/img/anim/tile-03.png"
        },
        "smbBg_6":{
            "json": "megaWays/img/anim/tile-02.json",
            "sprite": "megaWays/img/anim/tile-02.png"
        },
        "smbBg_7":{
            "json": "megaWays/img/anim/tile-01.json",
            "sprite": "megaWays/img/anim/tile-01.png"
        },
        "lockSkull":{
            "json": "megaWays/img/anim/lockFeature/skull-intro.json",
            "sprite": "megaWays/img/anim/lockFeature/skull-intro.png"
        },
        "lockIn":{
            "json": "megaWays/img/anim/lockFeature/lock-feature.json",
            "sprite": "megaWays/img/anim/lockFeature/lock-feature.png"
        },
        "lockOut":{
            "json": "megaWays/img/anim/lockFeature/skull-out.json",
            "sprite": "megaWays/img/anim/lockFeature/skull-out.png"
        },
        "candleAnim":{
            "json": "megaWays/img/win/candle-flame.json",
            "sprite": "megaWays/img/win/candle-flame.png"
        }
    },
    "importantSounds": {
        "spinClick": {
            "name": "megaWays/sounds/spinClick.mp3",
            "volume": .1
        },
        "reelStop": {
            "name": "megaWays/sounds/reelStop.mp3",
            "volume":.8
        },
        "reelSound": {
            "name": "megaWays/sounds/reelSound.mp3",
            "volume":1
        },
        "coins": {
            "name": "megaWays/sounds/coins.mp3",
            "volume": 1
        },
        "iconPop": {
            "name": "megaWays/sounds/iconPop.mp3",
            "volume": 1.1
        },
        "winAmountFall": {
            "name": "megaWays/sounds/winAmountFall.mp3",
            "volume": .6
        }
    },
    "bgImportantSounds":{
        "bgSlot": {
            "name": "megaWays/sounds/bg_layer1-short.mp3",
            "volume": .8,
            "marker":true
        }
    },
    "sounds": {
        "click": {
            "name": "megaWays/sounds/click.mp3",
            "volume": .3
        },
        "multiplier": {
            "name": "megaWays/sounds/multiplier.mp3",
            "volume": 1
        },
        "multiplier_1": {
            "name": "megaWays/sounds/multiplier_layer1.mp3",
            "volume": 1
        },
        "multiplier_2": {
            "name": "megaWays/sounds/multiplier_layer2.mp3",
            "volume": 1
        },
        "multiplier_3": {
            "name": "megaWays/sounds/multiplier_layer3.mp3",
            "volume": 1
        },
        "lock": {
            "name": "megaWays/sounds/reelLock.mp3",
            "volume": 1
        },
        "anchor_activate1": {
            "name": "megaWays/sounds/anchor_activate1.mp3",
            "volume": 1
        },
        "anchor_activate2": {
            "name": "megaWays/sounds/anchor_activate2.mp3",
            "volume": 1
        },
        "anchor_activate3": {
            "name": "megaWays/sounds/anchor_activate3.mp3",
            "volume": 1
        },
        "anchor_activate4": {
            "name": "megaWays/sounds/anchor_activate4.mp3",
            "volume": 1
        },
        "additionalFs": {
            "name": "megaWays/sounds/fs_anchors_full.mp3",
            "volume": 1
        },
        "anchor_deactivate": {
            "name": "megaWays/sounds/anchor_deactivate.mp3",
            "volume": 1
        },
        "smbWin_0": {
            "name": "megaWays/sounds/smbWin_0.mp3",
            "multiple":["smbWin_1","smbWin_2","smbWin_3","smbWin_4"],
            "volume": 1
        },
        "smbWin_5": {
            "name": "megaWays/sounds/smbWin_5.mp3",
            "volume": 1
        },

        "smbWin_6": {
            "name": "megaWays/sounds/smbWin_6.mp3",
            "volume": 1
        },
        "smbWin_7": {
            "name": "megaWays/sounds/smbWin_7.mp3",
            "volume": 1
        },
        "smbWin_8": {
            "name": "megaWays/sounds/smbWin_8.mp3",
            "volume": 1
        },
        "smbWin_9": {
            "name": "megaWays/sounds/smbWin_9.mp3",
            "volume": 1
        },
        "smbWin_10": {
            "name": "megaWays/sounds/smbWin_10.mp3",
            "volume": 1
        },
        "smbWin_12": {
            "name": "megaWays/sounds/smbWin_10.mp3",
            "volume": 1
        },
        "winBg_0": {
            "name": "megaWays/sounds/centralWin/win1.mp3",
            "volume": 0
        },
        "winBg_1": {
            "name": "megaWays/sounds/centralWin/win2.mp3",
            "volume":  .6
        },
        "winBg_2": {
            "name": "megaWays/sounds/centralWin/win3.mp3",
            "volume":  .65
        },
        "winBg_3": {
            "name": "megaWays/sounds/centralWin/win4.mp3",
            "volume":  .7
        },
        "winBg_4": {
            "name": "megaWays/sounds/centralWin/win5.mp3",
            "volume":  .7
        },
        "winBg_5": {
            "name": "megaWays/sounds/centralWin/win6.mp3",
            "volume":  .7
        },
        "winBg_6": {
            "name": "megaWays/sounds/centralWin/bigWin_Full.mp3",
            "volume":  1
        },
        "winBg_7": {
            "name": "megaWays/sounds/centralWin/superBigWin_Full.mp3",
            "volume":  1.2
        },
        "winBg_8": {
            "name": "megaWays/sounds/centralWin/megaBigWin_Full.mp3",
            "volume": 1.5
        },
        "winBgS_6": {
            "name": "megaWays/sounds/centralWin/bigWin.mp3",
            "volume": 1
        },
        "winBgS_7": {
            "name": "megaWays/sounds/centralWin/superBigWin.mp3",
            "volume":  1.2
        },
        "winBgS_8": {
            "name": "megaWays/sounds/centralWin/megaBigWin.mp3",
            "volume": 1.5
        },
        "fsWon": {
            "name": "megaWays/sounds/introFs.mp3",
            "volume": 1.5
        },
        "incWin": {
            "name": "megaWays/sounds/counter.mp3",
            "volume": .6,
            "loop": true
        },
        "winPanel": {
            "name": "megaWays/sounds/winScreen.mp3",
            "volume": 1.1
        },
        "tumble_0": {
            "name": "megaWays/sounds/tumbling.mp3",
            "volume": 1.1,
            "multiple":["tumble_1","tumble_2","tumble_3","tumble_4","tumble_5","tumble_6"]
        },
        "wildx2": {
            "name": "megaWays/sounds/wildx2_land.mp3",
            "volume": 1
        },
    },
    "bgSounds": {
    "bgSlot1": {
        "name": "megaWays/sounds/bg_layer2-short.mp3",
        "volume": 0,
        "marker":true
    },
    "bgSlot2": {
        "name": "megaWays/sounds/bg_layer3-short.mp3",
        "volume": 0,
        "marker":true
    },
    "bgSlot3": {
        "name": "megaWays/sounds/bg_layer4-short.mp3",
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
            "portrait":true,
            "graphAsset": {
                "bg": {
                    "name": "bg_r",
                    "portrait": true,
                    "x": 256,
                    "y": 72,
                    "scaleX":-1
                },
                "bg1": {
                    "name": "bg_l",
                    "portrait": true,
                    "x": 1024+256,
                    "y": 72,
                    "scaleX":-1
                }
            }
        },
        "frameFS": {
            "visible":false,
            "portrait":true,
            "graphAsset": {
                "bgf": {
                    "name": "bg_m_FS",
                    "portrait": true,
                    "x": 256,
                    "y": 433
                }
            }
        },
        "bgFS": {
            "visible":false,
            "portrait":true,
            "graphAsset": {
                "bg": {
                    "name": "bg_r_FS",
                    "portrait": true,
                    "x": 1024,
                    "y": 72,
                },
                "bg1": {
                    "name": "bg_l_FS",
                    "portrait": true,
                    "x": 0,
                    "y": 72,
                }
            }
        },
        "frame": {
            "visible": false,
            "portrait":true,
            "graphAsset": {
                "bg4": {
                    "name": "bg_m",
                    "portrait": true,
                    "x": 256,
                    "y": 72
                }
            }
        },
        "reels": {
        },
        "wild": {
        },
        "winGlow":{
        },
        "mask":{
            "visible":false,
            "portrait":true,
            "graphAsset": {
                "bg2": {
                    "name": "bg_b",
                    "portrait": true,
                    "x": 1280,
                    "y": 632,
                    "scaleX":-1
                },
                "bg3": {
                    "name": "bg_t",
                    "portrait": true,
                    "x": 1280,
                    "y": 0,
                    "scaleX":-1
                },
            },
        },
        "buyFeature":{
            "buttons": {
                "buyFeature": {
                    "visible":false,
                    "name": "buyFeature",
                    "x": 1159-1040,
                    "y": 74,
                    "evt": "doBuyFeature",
                    "texts": {
                        "txt": {
                            "x": 0,
                            "y": 0,
                            "font": "20px  BlackmoorStd,Arial, Helvetica sans-serif",
                            "fill": "#f5cd87",
                            "stroke": "#000000",
                            "stroke_tick": 2,
                            "text": "Buy Free Spins",
                            "anchorX": .5
                        }
                    }
                },"buyFeatureP": {
                    "visible":false,
                    "name": "buyFeatureP",
                    "x": 1159-1040,
                    "y": 74,
                    "evt": "doBuyFeature",
                    "texts": {
                        "txt": {
                            "x": 0,
                            "y": 0,
                            "font": "25px  BlackmoorStd,Arial, Helvetica sans-serif",
                            "fill": "#f5cd87",
                            "stroke": "#000000",
                            "stroke_tick": 2,
                            "text": "Buy\nFree Spin",
                            "align":"center",
                            "anchorX": .5
                        }
                    }
                }
            }
        },
        "maskFS":{
            "visible":false,
            "portrait":true,
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
                },

            }
        },
        "freeSpinAccumulator": {
            "visible": false,
            "maxFs": 12,
            "portrait":true,
            "graphAsset": {
                "bg1": {
                    "name": "anchorBg",
                    "portrait": true,
                    "x": 1080-1040,
                    "y": 101
                },
                "anchor1_In": {
                    "visible": false,
                    "name": "anchorIn",
                    "x": 1127-1040,
                    "y": 84
                },
                "anchor2_In": {
                    "visible": false,
                    "name": "anchorIn",
                    "x": 1127-1040,
                    "y": 180
                },
                "anchor3_In": {
                    "visible": false,
                    "name": "anchorIn",
                    "x": 1127-1040,
                    "y": 276
                },
                "anchor4_In": {
                    "visible": false,
                    "name": "anchorIn",
                    "x": 1127-1040,
                    "y": 372
                },
                "anchor1_Out": {
                    "visible": false,
                    "name": "anchorOut",
                    "x": 1127-1040,
                    "y": 84
                },
                "anchor2_Out": {
                    "visible": false,
                    "name": "anchorOut",
                    "x": 1127-1040,
                    "y": 180
                },
                "anchor3_Out": {
                    "visible": false,
                    "name": "anchorOut",
                    "x": 1127-1040,
                    "y": 276
                },
                "anchor4_Out": {
                    "visible": false,
                    "name": "anchorOut",
                    "x": 1127-1040,
                    "y": 372
                }
            }
        },
        "freeSpinAccumulatorFs": {
            "visible": false,
            "graphAsset": {
                "bg1": {
                    "name": "anchorBgFs",
                    "x": 1164,
                    "y": 226,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "bg2": {
                    "name": "anchorShadFs",
                    "x": 1164,
                    "y": 226,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "anchor1_In": {
                    "visible": false,
                    "name": "anchorIn",
                    "x": 1095,
                    "y": 216,
                    "scaleX":.6,
                    "scaleY":.6,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "anchor2_In": {
                    "visible": false,
                    "name": "anchorIn",
                    "x": 1140,
                    "y": 216,
                    "scaleY":.6,
                    "scaleX":.6,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "anchor3_In": {
                    "visible": false,
                    "name": "anchorIn",
                    "x": 1186,
                    "y": 216,
                    "scaleY":.6,
                    "scaleX":.6,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "anchor4_In": {
                    "visible": false,
                    "name": "anchorIn",
                    "x": 1234,
                    "y": 216,
                    "scaleY":.6,
                    "scaleX":.6,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "anchor1_Out": {
                    "visible": false,
                    "name": "anchorOut",
                    "x": 1095,
                    "y": 216,
                    "scaleY":.6,
                    "scaleX":.6,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "anchor2_Out": {
                    "visible": false,
                    "name": "anchorOut",
                    "x": 1140,
                    "y": 216,
                    "scaleY":.6,
                    "scaleX":.6,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "anchor3_Out": {
                    "visible": false,
                    "name": "anchorOut",
                    "x": 1186,
                    "y": 216,
                    "scaleY":.6,
                    "scaleX":.6,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "anchor4_Out": {
                    "visible": false,
                    "name": "anchorOut",
                    "x": 1234,
                    "y": 216,
                    "scaleY":.6,
                    "scaleX":.6,
                    "anchorX":.5,
                    "anchorY":.5
                }
            }
        },
        "mask1":{
            "visible":false,
            "graphAsset": {
            }
        },
        "buttonFg":{
        },
        "stickyWild": {},
        "scatter": {},
        "wins": {},
        "lines": {},
        "lockReels":{
            "visible":false,
            "graphAsset": {
                "lockIn_0": {
                    "visible":false,
                    "name": "lockIn",
                    "x": 243,
                    "y": 60
                },
                "lockSkull_0": {
                    "visible":false,
                    "name": "lockSkull",
                    "x": 272,
                    "y": -18
                },
                "lockOut_0": {
                    "name": "lockOut",
                    "visible":false,
                    "x": 272,
                    "y": -18
                },
                "lockIn_1": {
                    "name": "lockIn",
                    "visible":false,
                    "x": 243+ 128,
                    "y": 60
                },
                "lockSkull_1": {
                    "name": "lockSkull",
                    "visible":false,
                    "x": 272 + 128,
                    "y": -18
                },
                "lockOut_1": {
                    "name": "lockOut",
                    "visible":false,
                    "x": 272+ 128,
                    "y": -18
                },
                "lockIn_2": {
                    "name": "lockIn",
                    "visible":false,
                    "x": 243+ 2*128,
                    "y": 60
                },
                "lockIn_3": {
                    "name": "lockIn",
                    "visible":false,
                    "x": 243+ 3*128,
                    "y": 60
                },
                "lockIn_4": {
                    "name": "lockIn",
                    "visible":false,
                    "x": 243+ 4*128,
                    "y": 60
                },
                "lockSkull_4": {
                    "name": "lockSkull",
                    "visible":false,
                    "x": 272 + 4*128,
                    "y": -18
                },
                "lockOut_4": {
                    "name": "lockOut",
                    "visible":false,
                    "x": 272+ 4*128,
                    "y": -18
                },
                "lockIn_5": {
                    "name": "lockIn",
                    "visible":false,
                    "x": 243+ 5*128,
                    "y": 60
                },
                "lockSkull_5": {
                    "name": "lockSkull",
                    "visible":false,
                    "x": 272 + 5*128,
                    "y": -18
                },
                "lockOut_5": {
                    "name": "lockOut",
                    "visible":false,
                    "x": 272+ 5*128,
                    "y": -18
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
        "freeRounds": {
            "visible":false,
            "portrait":true,
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
                    "y": 13,
                    "fill": "#dcffff",
                    "font": "15px Futura ,Arial",
                    "text": "Free Rounds:",
                    "anchorX":  0.5
                },
                "frValue": {
                    "x": 339,
                    "y": 25,
                    "fill": "#ffffff",
                    "font": "25px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                },
                "frTotWonLabel": {
                    "x": 942,
                    "y": 13,
                    "fill": "#dcffff",
                    "font": "15px Futura ,Arial",
                    "text": "Total won:",
                    "anchorX":  0.5
                },
                "frTotWonValue": {
                    "x": 942,
                    "y": 25,
                    "fill": "#ffffff",
                    "font": "25px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                }
            }
        },
        "freeSpins": {
            "visible": false,
            "portrait":true,
            "graphAsset": {
                "fsP": {
                    "name": "freeSpinPanel",
                    "x": 640,
                    "y": 0,
                    "anchorX": .5
                },
                "boxTW":{
                    "name": "boxFS",
                    "x": 120,
                    "y": 100,
                    "anchorX": 0.5,
                    "anchorY": 0.5
                },
                "boxFS":{
                    "name": "boxFS",
                    "x": 1164,
                    "y": 100,
                    "anchorX": 0.5,
                    "anchorY": 0.5
                },
                "boxMu":{
                    "name": "boxFS",
                    "x": 118,
                    "y": 226,
                    "anchorX": 0.5,
                    "anchorY": 0.5
                }
            },
            "texts": {
                "fsLabel": {
                    "x": 1160,
                    "y": 70,
                    "fill": "#ffffff",
                    "font": "17px Futura ,Arial",
                    "text": "Free Spins",
                    "anchorX": 0.5
                },
                "fsValue": {
                    "x": 1160,
                    "y": 86,
                    "fill": "#ffffff",
                    "font": "27px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                },
                "totWonLabel": {
                    "x": 120,
                    "y": 70,
                    "fill": "#ffffff",
                    "font": "17px Futura ,Arial",
                    "text": "Total won",
                    "anchorX":0.5
                },
                "totWonValue": {
                    "x": 120,
                    "y": 86,
                    "fill": "#ffffff",
                    "font": "27px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                },
                "fsMultValue":{
                    "x": 120,
                    "y": 206,
                    "bmpFont": "multiBmpFont",
                    "size": "100",
                    "text": "",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsmultT":{
                    "x": 120,
                    "y": 167,
                    "font": "22px BlackmoorStd,Arial, Helvetica sans-serif",
                    "fill": "#f5cd87",
                    "stroke": "#000000",
                    "stroke_tick": 4,
                    "text": "Multiplier",
                    "align":"center",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsAdditionalT":{
                    "x": 1160,
                    "y": 167,
                    "font": "22px BlackmoorStd,Arial, Helvetica sans-serif",
                    "fill": "#f5cd87",
                    "stroke": "#000000",
                    "stroke_tick": 4,
                    "text": "Additional Free Spins",
                    "align":"center",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsAdditional":{
                    "x": 1156,
                    "y": 206,
                    "bmpFont": "multiBmpFont",
                    "size": "100",
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
                    "portrait":true,
                    "x": 1162,
                    "y": 40,
                    "anchorX": 0.5
                }
            },
            "texts":{
                "winWaysNum":{
                    "x": 1162,
                    "y": 86,
                    "font": "70px BlackmoorStd,Arial, Helvetica sans-serif",
                    "fill": "#ffe424",
                    "stroke": "#000000",
                    "stroke_tick": 4,
                    "text": "",
                    "anchorX": 0.5
                },
            }
        },
        "fsWonPanel": {
            "visible": false,
            "fakeButton": true,
            "eventBlock": true,
            "evt": "fireConfirmation",
            "duration": 300,
            "graphAsset": {
                "bgmsg": {
                    "name": "bgAlpha",
                    "x": 640,
                    "y": 320,
                    "anchorX": .5,
                    "anchorY": .5
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
        "frWonPanel": {
            "visible":false,
            "comment_fakeButton":"used to cover all the other buttons",
            "fakeButton":true,
            "eventBlock":true,
            "duration":5,
            "graphAsset": {
                "bgmsg": {
                    "name": "bgAlpha",
                    "x": 640,
                    "y": 320,
                    "anchorX": .5,
                    "anchorY": .5
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
                    "x": 640,
                    "y": 320,
                    "anchorX": .5,
                    "anchorY": .5,
                    "alpha": .8,
                    "visible": false
                },
                "group":{
                    "name":"centralFuntain"
                },
                "bigGlow": {
                    "name": "winGlow",
                    "x": 640,
                    "y": 332,
                    "yS": -300,
                    "yE": 332,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "candle": {
                    "name": "candle",
                    "x": 680,
                    "y": 322,
                    "xS": 880,
                    "xE": 880,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "candle1": {
                    "name": "candle",
                    "x": 600,
                    "y": 322,
                    "xS": 400,
                    "xE": 400,
                    "scaleX":-1,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "cannon": {
                    "name": "cannon",
                    "x": 640,
                    "y": 465,
                    "xS": 840,
                    "xE": 840,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "cannon1": {
                    "name": "cannon",
                    "x": 440,
                    "y": 465,
                    "xS": 440,
                    "xE": 440,
                    "scaleX":-1,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "candleA": {
                    "name": "candle",
                    "x": 870,
                    "y": 302,
                    "yS": -300,
                    "yE": 332,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "candleA1": {
                    "name": "candle",
                    "x": 410,
                    "y": 302,
                    "yS": -300,
                    "yE": 332,
                    "scaleX":-1,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "bigMap": {
                    "name": "winMap",
                    "x": 640,
                    "y": 332,
                    "yS": -300,
                    "yE": 332,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "bigWin": {
                    "name": "bigWin",
                    "x": 635,
                    "y": 322,
                    "yS": -300,
                    "yE": 332,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "sBigWin": {
                    "name": "superWin",
                    "x": 635,
                    "y": 322,
                    "yS": -300,
                    "yE": 332,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "mBigWin": {
                    "name": "megaWin",
                    "x": 635,
                    "y": 322,
                    "yS": -300,
                    "yE": 332,
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
                    "y": 65,
                    "texts": {
                        "pw1":{
                            "x": 190,
                            "y": 10,
                            "font": "89px BlackmoorStd,Arial, Helvetica sans-serif",
                            "fill": "#f5cd87",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "text": "Free Spins",
                            "anchorX": 0.5,
                        },
                        "pw2":{
                            "x": 190,
                            "y": 410,
                            "font": "30px BlackmoorStd,Arial, Helvetica sans-serif",
                            "fill": "#f5cd87",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align":"center",
                            "text": "Unlimited Win Multiplier\rUp to 14 Additional\rFree Spins",
                            "anchorX": 0.5,
                            }
                        }
                    },
                "bgPreview2": {
                    "name": "bgPreview2",
                    "x": 450,
                    "y": 65,
                    "texts": {
                        "pw3":{
                            "x": 190,
                            "y": 420,
                            "font": "36px BlackmoorStd,Arial, Helvetica sans-serif",
                            "fill": "#FFFFFF",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align":"center",
                            "text": "Every Win\rTriggers a Tumble",
                            "anchorX": 0.5,
                            }
                        }
                    },
                "bgPreview3": {
                    "name": "bgPreview3",
                    "x": 840,
                    "y": 65,
                    "texts": {
                        "pw4":{
                                "x": 190,
                                "y": 45,
                            "font": "36px BlackmoorStd,Arial, Helvetica sans-serif",
                            "fill": "#f5cd87",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align":"center",
                            "text": "Reels Lock At 7\rDuring Free Spins",
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
        "msgBox": {
            "visible":false,
            "eventBlock":true,
            "graphAsset": {
                "bgmsg": {
                    "name": "bgAlpha",
                    "x": 640,
                    "y": 320,
                    "anchorX": .5,
                    "anchorY": .5
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
                    "y": 320,
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
            "selectorY":225,
            "selectorX":650,
            "textCol":"#ffffff",
            "graphAsset": {
                "bgmsg": {
                    "name": "bgAlpha",
                    "x": 640,
                    "y": 320,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "bg": {
                    "name": "featureBg",
                    "x": 0,
                    "y": 0
                },
                "generic": {
                    "name": "featurePanel",
                    "x": 640,
                    "y": 310,
                    "anchorX": .5,
                    "anchorY": .5,
                    "scaleX":1,
                    "scaleY":1
                }
            },
            "texts": {
                "msgF1": {
                    "x": 640,
                    "y": 111,
                    "fill": "#ffffff",
                    "font": "24px FuturaPT-Book",
                    "text": "",
                    "align":"center",
                    "anchorX": .5
                },
                "msgF2": {
                    "x": 640,
                    "y": 145,
                    "fill": "#ffffff",
                    "font": "20px FuturaPT-Book",
                    "text": "",
                    "anchorX": .5
                },
                "msgF3": {
                    "x": 640,
                    "y": 169,
                    "fill": "#ffffff",
                    "font": "18px FuturaPT-Book",
                    "text": "",
                    "anchorX": .5
                },
                "msgF45": {
                    "x": 640,
                    "y": 198,
                    "fill": "#ffffff",
                    "font": "18px FuturaPT-Book",
                    "text": "",
                    "anchorX": .5
                },
                "msgF4": {
                    "x": 640,
                    "y": 241,
                    "fill": "#ffffff",
                    "font": "18px FuturaPT-Book",
                    "text": "Free spins number",
                    "anchorX": .5
                },
                "msgF5": {
                    "x": 640,
                    "y": 358,
                    "fill": "#ffffff",
                    "font": "18px FuturaPT-Book",
                    "text": "Locked reels number (reels locked at 7 symbols)",
                    "anchorX": .5
                },
                "priceF": {
                    "x": 640,
                    "y": 480,
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
                    "y": 630,
                    "evt": "doOk",
                    "texts": {
                        "noLabel": {
                            "x": 0,
                            "y": -13,
                            "fill": "#ffffff",
                            "font": "18px FuturaPT-Book",
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
                            "font": "18px FuturaPT-Book",
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
    "licence":true,
    "slotEngine":"MegaEngine",
    "engineNumbers":0,
    "log":true,
    "canSwipe":false,
    "fastPlayEnable":true,
    "comment_preview":"enable feature preview screen",
    "preview":true,
    "previewTout":30000,
    "spinType": "MegaWayTumblingSpin",
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
    "lineType": "MegaWayTumblingWinnings",
    "lineFrames":31,
    "lineFrames":19,
    "comment_lineWinAmtType":"lines/coinWinning class",
    "lineWinAmtType":"NormalLineWinAmount",
    "numReels": 6,
    "numIcons": 7,
    "numIconsOnTop": 1,
    "numIconsOnBottom":1,
    "icons": [25, 25, 25, 25, 25,25,25 ],
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
    "numIcon": 10,
    "loadTout": 30,
    "credits": "5000",
    "bet": "0.50",
    "animDelayAfterWild":1500,
    "freeRounds":"normal",
    "freeSpins":"PirKinMwFreeSpins",
    "_fsIcon": 1,
    "fsSpinDelay":750,
    "minFsSmbs":3,
    "scatterIcon": 10,
    "scatterType": "SubstScatter",
    "_twinReelsFeature":"normal",
    "wildType": "VikingTumblingWildReel",
    "wildNum": [13],
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
        "deltaX_Portrait":175,
        "deltaY_Portrait":280,
        "maskY":72,
        "deltaX_0": 254,
        "deltaX": 128,
        "deltaY_0": 634,
        "deltaY": 104
    },
    "icon": {
        "x": 0,
        "y": 0,
        "width": 128,
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

    "pages": [

        //Game guide object
        {
            "gameguide": true,
            "title": "Pirate Kingdom MegaWays™ Game Rules",
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
                            "bg": "megaWays/img/symbol-00.png", //symbol image
                            "payout_values": true //Whether symbol has payout values

                        },

                        {

                            "id": "symbol_01",
                            "bg": "megaWays/img/symbol-01.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_02",
                            "bg": "megaWays/img/symbol-02.png",
                            "payout_values": true

                        }


                    ],

                    [

                        {

                            "id": "symbol_03",
                            "bg": "megaWays/img/symbol-03.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_04",
                            "bg": "megaWays/img/symbol-04.png",
                            "payout_values": true

                        }

                    ],

                    [
                        {

                            "id": "symbol_05",
                            "bg": "megaWays/img/symbol-05.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_06",
                            "bg": "megaWays/img/symbol-06.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_07",
                            "bg": "megaWays/img/paytable/symbol-07.png",
                            "payout_values": true

                        }

                    ],

                    [

                        {
                            "id": "symbol_08",
                            "bg": "megaWays/img/paytable/symbol-08.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_09",
                            "bg": "megaWays/img/paytable/symbol-09.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_10",
                            "bg": "megaWays/img/symbol-10.png",
                            "payout_values": false,
                            "text": [
                                "Wild",
                                "Wild can appear on reel 2,3,4,5,6 during regular and Free Spins",
                                "Wilds substitutes all the icons."
                            ]

                        }

                    ],

                    [

                        {
                            "id": "symbol_12",
                            "bg": "megaWays/img/symbol-11.png",
                            "payout_values": false,
                            "text": [
                                "X2 Wild",
                                "X2 Wild can appear on reel 2,3,4,5,6 during regular spins.",
                                "Up to 3 X2 Wilds can appear on the same spins.",
                                "When multiple x2 Wilds appears the hand multiplier is calculated multiplying them together, ie: 3 X2 wilds symbols on the reel = X8 multiplier."
                            ]
                        }
                    ],
                    [

                        {

                            "id" : "wildDesc",
                            "text": [
                                "X2 Wilds substitutes all the icons."
                            ]

                        }

                    ],
                    [

                        {
                            "id" : "tumble_screenshot",
                            "bg" : "megaWays/img/paytable/winways.png",
                            "text": [
                                "Whenever a win way pays out the symbols are destroyed and all remaining symbols tumble down.",
                                "All destroyed symbols are replaced with symbols from higher up on the reels with a high chance of extra Wild Stars appearing.",
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

                            "id" : "FSStart",
                            "bg" : "megaWays/img/paytable/fs.png",
                            "text": [
                                "Freespins are reached by having multiple successive tumbles (the image shows the counter at 4). A minimum of 4 tumbles is required to trigger 8 Free Spins.",
                                "Each extra successive win after 4 awards 2 extra Free Spins, up to a maximum of 14.",
                                "During the spin, reels with 7 symbols lock at that position for the entire Free Spins round, each locked reels increase the multiplier by 1.",
                                "During Free spins, reels can lock awarding 1 additional multiplier per reel.",
                                "Locked reels occurring on the last Free Spin also award 1 additional Free Spin. (can re-trigger)"
                            ],
                            "size": { //Optional field that sets image height & width in px

                                "height": "257",
                                "width":  "100"

                            }

                        }

                    ],


                    [

                        {

                            "id" : "FSSADDtart",
                            "bg" : "megaWays/img/paytable/fsAdd.png",
                            "text": [
                                "Additional Freespins are reached by having multiple successive tumbles (the image shows the counter at 4). A minimum of 4 tumbles is required to trigger additional 4 Free spins.",
                                "Each extra successive win after 4 awards 1 extra Free Spins, up to a maximum of 14."
                            ],
                            "size": { //Optional field that sets image height & width in px

                                "height": "90",
                                "width":  "200"

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

                    "bg": "megaWays/img/paytable/winways.png",
                    "text": {

                        "value": [

                            "King: Appears once on 4 reels (including wild). So the payout is the flat value for 4x King, 6 coins.",
                            "J: Appears on each 6 reels. Appears once on reels 1,3,4,6, twice on reels 2,5 (including wild) , so payout is the value for 6x multiplied twice by 2. 12 * 2 *2 = 48 coins.",
                            "Chest: Appears once on 3 reels (including wild), 6 coins.",
                            "Total coins won is 60."

                        ]

                    }

                }

            ],

        }

    ]

}