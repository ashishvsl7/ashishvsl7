
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
        "winWayOb": "megaJack/img/loader/btg-megaways.png"
    },
    "loaderMc": {
        "staticLoaderLogo": {
            "sprite": "megaJack/img/logo.png",
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
        "sprite": "fonts/fontJack.png",
        "font": "fonts/fontJack.xml"
    },
    "bmpFontSmall":{
        "sprite": "fonts/fontJack.png",
        "font": "fonts/fontJack.xml"
    },
    "multiBmpFont":{
        "sprite": "fonts/multiplierJack.png",
        "font": "fonts/multiplierJack.xml"
    }
}

var extScripts={
    "webfont": "15px FuturaPT-Heavy",
    "webfont1": "15px FuturaPT-Book",
    "webfont2": "15px BernhardGothicMedium",
    "webfont3": "25px BernhardGothicMedium"
}
var gameAssets = {
    "assets": {
        "icon0": "megaJack/img/symbol-00.png",
        "icon1": "megaJack/img/symbol-01.png",
        "icon2": "megaJack/img/symbol-02.png",
        "icon3": "megaJack/img/symbol-03.png",
        "icon4": "megaJack/img/symbol-04.png",
        "icon5": "megaJack/img/symbol-05.png",
        "icon6": "megaJack/img/symbol-06.png",
        "icon7": "megaJack/img/symbol-07.png",
        "icon8": "megaJack/img/symbol-08.png",
        "icon9": "megaJack/img/symbol-09.png",
        "icon7GH": "megaJack/img/paytable/symbol-07.png",
        "icon8GH": "megaJack/img/paytable/symbol-08.png",
        "icon9GH": "megaJack/img/paytable/symbol-09.png",
        "icon10": "megaJack/img/symbol-10.png",
        "icon12": "megaJack/img/symbol-12.png",
        "icon18": "megaJack/img/empty.png",
        "icon19": "megaJack/img/harp.png",
        "none": "megaJack/img/transparent.png",

        "smbFrame_2": "megaJack/img/frame-06.png",
        "smbFrame_3": "megaJack/img/frame-05.png",
        "smbFrame_4": "megaJack/img/frame-04.png",
        "smbFrame_5": "megaJack/img/frame-03.png",
        "smbFrame_6": "megaJack/img/frame-02.png",
        "smbFrame_7": "megaJack/img/frame-01.png",

        "bicon0": "megaJack/img/b-symbol-00.png",
        "bicon1": "megaJack/img/b-symbol-01.png",
        "bicon2": "megaJack/img/b-symbol-02.png",
        "bicon3": "megaJack/img/b-symbol-03.png",
        "bicon4": "megaJack/img/b-symbol-04.png",
        "bicon5": "megaJack/img/b-symbol-05.png",
        "bicon6": "megaJack/img/b-symbol-06.png",
        "bicon7": "megaJack/img/b-symbol-07.png",
        "bicon8": "megaJack/img/b-symbol-08.png",
        "bicon9": "megaJack/img/b-symbol-09.png",
        "bicon10": "megaJack/img/b-symbol-10.png",


        "bottomBar": "gui/message-bar.png",
        "bgPanel": "megaJack/img/bgPanel.png",
        "bgPanelFs": "megaJack/img/bgPanelFs.png",
        "bgPanelGame": "megaJack/img/bgPanel.png",
        "bgPreview":"megaJack/img/paytable/intro-page.jpg",
        "bgPreview1":"megaJack/img/paytable/intro1.png",
        "bgPreview2":"megaJack/img/paytable/intro2.png",

        "bg_r": "megaJack/img/bg/base-right.png",
        "bg_l": "megaJack/img/bg/base-left.png",
        "bg_b": "megaJack/img/bg/base-bottom.png",
        "bg_t": "megaJack/img/bg/base-top.png",
        "bg_m": "megaJack/img/bg/base-main.jpg",

        "bg_r_FS": "megaJack/img/bg/base-right_FS.png",
        "bg_l_FS": "megaJack/img/bg/base-left_FS.png",
        "bg_b_FS": "megaJack/img/bg/base-bottom_FS.png",
        "bg_t_FS": "megaJack/img/bg/base-top_FS.png",
        "bg_m_FS": "megaJack/img/bg/base-main_FS.jpg",
        "freeSpins":"megaJack/img/free-spins.png",
        "bigWin":"megaJack/img/big-win.png",
        "superWin":"megaJack/img/epic-win.png",
        "megaWin":"megaJack/img/ultra-win.png",
        "boxFS":"megaJack/img/total-win-box.png",
        "buttonBg":"gui/generic/img/desktop/png/cp-info-bar.png",
        "volOnButton": "gui/btnVolOn.png",
        "volOffButton": "gui/btnVolOff.png",
        "featurePanel":"megaJack/img/buyFeature/buy-feature-pop-up.png",
        "bgAlpha":"megaJack/img/alpha.png",
        "freeSpinPanel": "megaJack/img/free-spinsH.png",
        "freeRoundsPanel": "megaJack/img/free-roundsH.png",
        "fsPosition_8_Off": "megaJack/img/prizes/8-static.png",
        "fsPosition_8_On": "megaJack/img/prizes/8-active.png",
        "fsPosition_9_Off": "megaJack/img/prizes/9-static.png",
        "fsPosition_9_On": "megaJack/img/prizes/9-active.png",
        "fsPosition_10_Off": "megaJack/img/prizes/10-static.png",
        "fsPosition_10_On": "megaJack/img/prizes/10-active.png",
        "fsPosition_11_Off": "megaJack/img/prizes/11-static.png",
        "fsPosition_11_On": "megaJack/img/prizes/11-active.png",
        "fsPosition_12_Off": "megaJack/img/prizes/12-static.png",
        "fsPosition_12_On": "megaJack/img/prizes/12-active.png",
        "fsPosition_13_Off": "megaJack/img/prizes/13-static.png",
        "fsPosition_13_On": "megaJack/img/prizes/13-active.png",
        "fsPosition_1_Off": "megaJack/img/prizes/01-static.png",
        "fsPosition_1_On": "megaJack/img/prizes/01-active.png",
        "fsPosition_2_Off": "megaJack/img/prizes/02-static.png",
        "fsPosition_2_On": "megaJack/img/prizes/02-active.png",
        "fsPosition_3_Off": "megaJack/img/prizes/03-static.png",
        "fsPosition_3_On": "megaJack/img/prizes/03-active.png",
        "fsPosition_4_Off": "megaJack/img/prizes/04-static.png",
        "fsPosition_4_On": "megaJack/img/prizes/04-active.png",
        "fsPosition_5_Off": "megaJack/img/prizes/05-static.png",
        "fsPosition_5_On": "megaJack/img/prizes/05-active.png",
        "fsPosition_6_Off": "megaJack/img/prizes/06-static.png",
        "fsPosition_6_On": "megaJack/img/prizes/06-active.png",
        "p1": "megaJack/img/p1.png",
        "p2": "megaJack/img/p2.png",
        "p3": "megaJack/img/p3.png",
        "popupMc":"megaJack/img/popup-container.png"
    },
    "localizedAssets":{
    },
    "buttonsSpriteSheet": {

        "feature-Fn-btn": {
            "sprite": "megaJack/img/buyFeature/buy-fs-btn.png",
            "json": "megaJack/img/buyFeature/buy-fs-btn.png",
            "w": 177,
            "h": 70
        },
        "feature-Rn-btn": {
            "sprite": "megaJack/img/buyFeature/buy-reels-btn.png",
            "json": "megaJack/img/buyFeature/buy-reels-btn.png",
            "w": 177,
            "h": 70
        },
        "yesButton": {
            "sprite": "megaJack/img/yes-btn.png",
            "json": "megaJack/img/yes-btn.png",
            "w": 62,
            "h": 52
        },
        "noButton": {
            "sprite": "megaJack/img/no-btn.png",
            "json": "megaJack/img/no-btn.png",
            "w": 62,
            "h": 52
        },
        "check": {
            "sprite": "megaJack/img/radio-btns.png",
            "json": "megaJack/img/radio-btns.png",
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
            "json": "megaJack/img/buy-free-spin-btn.png",
            "sprite": "megaJack/img/buy-free-spin-btn.png",
            "w": 177,
            "h": 72
        },

    },
    "animations": {
        "anim0": {
            "json": "megaJack/img/anim/symbol-00.json",
            "sprite": "megaJack/img/anim/symbol-00.png"
        },
        "anim1": {
            "json": "megaJack/img/anim/symbol-01.json",
            "sprite": "megaJack/img/anim/symbol-01.png"
        },
        "anim2": {
            "json": "megaJack/img/anim/symbol-02.json",
            "sprite": "megaJack/img/anim/symbol-02.png"
        },
        "anim3": {
            "json": "megaJack/img/anim/symbol-03.json",
            "sprite": "megaJack/img/anim/symbol-03.png"
        },
        "anim4": {
            "json": "megaJack/img/anim/symbol-04.json",
            "sprite": "megaJack/img/anim/symbol-04.png"
        },
        "anim5": {
            "json": "megaJack/img/anim/symbol-05.json",
            "sprite": "megaJack/img/anim/symbol-05.png"
        },
        "anim6": {
            "json": "megaJack/img/anim/symbol-06.json",
            "sprite": "megaJack/img/anim/symbol-06.png"
        },
        "anim7": {
            "json": "megaJack/img/anim/symbol-07.json",
            "sprite": "megaJack/img/anim/symbol-07.png"
        },
        "anim8": {
            "json": "megaJack/img/anim/symbol-08.json",
            "sprite": "megaJack/img/anim/symbol-08.png"
        },
        "anim9": {
            "json": "megaJack/img/anim/symbol-09.json",
            "sprite": "megaJack/img/anim/symbol-09.png"
        },
        "anim10": {
            "json": "megaJack/img/anim/symbol-10.json",
            "sprite": "megaJack/img/anim/symbol-10.png"
        },
        "anim12": {
            "json": "megaJack/img/anim/symbol-12.json",
            "sprite": "megaJack/img/anim/symbol-12.png"
        },
        "part-1": {
            "json": "megaJack/img/anim/bronze-coin.json",
            "sprite": "megaJack/img/anim/bronze-coin.png"
        },
        "part-2": {
            "json": "megaJack/img/anim/silver-coin.json",
            "sprite": "megaJack/img/anim/silver-coin.png"
        },
        "part-3": {
            "json": "megaJack/img/anim/gold-coin.json",
            "sprite": "megaJack/img/anim/gold-coin.png"
        },
        "f-part-1": {
            "json": "megaJack/img/anim/bronze-coin-frwrd.json",
            "sprite": "megaJack/img/anim/bronze-coin-frwrd.png"
        },
        "f-part-2": {
            "json": "megaJack/img/anim/silver-coin-frwrd.json",
            "sprite": "megaJack/img/anim/silver-coin-frwrd.png"
        },
        "f-part-3": {
            "json": "megaJack/img/anim/gold-coin-frwrd.json",
            "sprite": "megaJack/img/anim/gold-coin-frwrd.png"
        },
        "anchorIn_1":{
            "json": "megaJack/img/side-feature/gold-leaf-01.json",
            "sprite": "megaJack/img/side-feature/gold-leaf-01.png"
        },
        "anchorIn_2":{
            "json": "megaJack/img/side-feature/gold-leaf-02.json",
            "sprite": "megaJack/img/side-feature/gold-leaf-02.png"
        },
        "anchorIn_3":{
            "json": "megaJack/img/side-feature/gold-leaf-03.json",
            "sprite": "megaJack/img/side-feature/gold-leaf-03.png"
        },
        "anchorIn_4":{
            "json": "megaJack/img/side-feature/gold-leaf-04.json",
            "sprite": "megaJack/img/side-feature/gold-leaf-04.png"
        },
        "anchorIn_5":{
            "json": "megaJack/img/side-feature/gold-leaf-05.json",
            "sprite": "megaJack/img/side-feature/gold-leaf-05.png"
        },
        "anchorIn_6":{
            "json": "megaJack/img/side-feature/gold-leaf-06.json",
            "sprite": "megaJack/img/side-feature/gold-leaf-06.png"
        },
        "anchorIn_7":{
            "json": "megaJack/img/side-feature/gold-leaf-07.json",
            "sprite": "megaJack/img/side-feature/gold-leaf-07.png"
        },
        "anchorIn_8":{
            "json": "megaJack/img/side-feature/gold-leaf-08.json",
            "sprite": "megaJack/img/side-feature/gold-leaf-08.png"
        },
        "smbBg_2":{
            "json": "megaJack/img/anim/tile-06.json",
            "sprite": "megaJack/img/anim/tile-06.png"
        },
        "smbBg_3":{
            "json": "megaJack/img/anim/tile-05.json",
            "sprite": "megaJack/img/anim/tile-05.png"
        },
        "smbBg_4":{
            "json": "megaJack/img/anim/tile-04.json",
            "sprite": "megaJack/img/anim/tile-04.png"
        },
        "smbBg_5":{
            "json": "megaJack/img/anim/tile-03.json",
            "sprite": "megaJack/img/anim/tile-03.png"
        },
        "smbBg_6":{
            "json": "megaJack/img/anim/tile-02.json",
            "sprite": "megaJack/img/anim/tile-02.png"
        },
        "smbBg_7":{
            "json": "megaJack/img/anim/tile-01.json",
            "sprite": "megaJack/img/anim/tile-01.png"
        },
        "lockIn":{
            "json": "megaJack/img/anim/lockFeature/lock-feature.json",
            "sprite": "megaJack/img/anim/lockFeature/lock-feature.png"
        },
        "harp_event":{
            "json": "megaJack/img/side-feature/harp-event.json",
            "sprite": "megaJack/img/side-feature/harp-event.png"
        },
        "leavesFS":{
            "json": "megaJack/img/prizes/shield-leaves.json",
            "sprite": "megaJack/img/prizes/shield-leaves.png"
        },
        "wharp":{
            "json": "megaJack/img/side-feature/w-anim.json",
            "sprite": "megaJack/img/side-feature/w-anim.png"
        }
    },
    "importantSounds": {
        "spinClick": {
            "name": "megaJack/sounds/spinClick.mp3",
            "volume": .1
        },
        "reelStop": {
            "name": "megaJack/sounds/reelStop.mp3",
            "volume":.4
        },
        "reelSound": {
            "name": "megaJack/sounds/reelSound.mp3",
            "volume":1
        },
        "coins": {
            "name": "megaJack/sounds/coins.mp3",
            "volume": 1
        },
        "iconPop": {
            "name": "megaJack/sounds/iconPop.mp3",
            "volume": 1.1
        },
        "winAmountFall": {
            "name": "megaJack/sounds/winAmountFall.mp3",
            "volume": .6
        }
    },
    "bgImportantSounds":{
        "bgSlot": {
            "name": "megaJack/sounds/bg_layer1.mp3",
            "volume": .8,
            "marker":true
        }
    },
    "sounds": {
        "click": {
            "name": "megaJack/sounds/click.mp3",
            "volume": .3
        },
        "multiplier": {
            "name": "megaJack/sounds/multiplier.mp3",
            "volume":  .8
        },
        "multiplier_1": {
            "name": "megaJack/sounds/multiplier_layer1.mp3",
            "volume":  .8
        },
        "multiplier_2": {
            "name": "megaJack/sounds/multiplier_layer2.mp3",
            "volume":  .8
        },
        "multiplier_3": {
            "name": "megaJack/sounds/multiplier_layer3.mp3",
            "volume":  .8
        },
        "lock": {
            "name": "megaJack/sounds/reelLock.mp3",
            "volume": 2
        },
        "anchor_activate1": {
            "name": "megaJack/sounds/anchor_activate1.mp3",
            "volume": 1
        },
        "anchor_activate2": {
            "name": "megaJack/sounds/anchor_activate2.mp3",
            "volume": 1
        },
        "anchor_activate3": {
            "name": "megaJack/sounds/anchor_activate3.mp3",
            "volume": 1
        },
        "anchor_activate4": {
            "name": "megaJack/sounds/anchor_activate4.mp3",
            "volume": 1
        },
        "additionalFs": {
            "name": "megaJack/sounds/fs_anchors_full.mp3",
            "volume": .6
        },
        "anchor_deactivate": {
            "name": "megaJack/sounds/anchor_deactivate.mp3",
            "volume": 1
        },
        "smbWin_0": {
            "name": "megaJack/sounds/smbWin_0.mp3",
            "multiple":["smbWin_1","smbWin_2","smbWin_3","smbWin_4"],
            "volume": 1
        },
        "smbWin_5": {
            "name": "megaJack/sounds/smbWin_5.mp3",
            "volume": 1
        },

        "smbWin_6": {
            "name": "megaJack/sounds/smbWin_6.mp3",
            "volume": 1
        },
        "smbWin_7": {
            "name": "megaJack/sounds/smbWin_7.mp3",
            "volume": 1
        },
        "smbWin_8": {
            "name": "megaJack/sounds/smbWin_8.mp3",
            "volume": 1
        },
        "smbWin_9": {
            "name": "megaJack/sounds/smbWin_9.mp3",
            "volume": 1
        },
        "smbWin_10": {
            "name": "megaJack/sounds/smbWin_10.mp3",
            "volume": 2
        },
        "winBg_0": {
            "name": "megaJack/sounds/centralWin/win1.mp3",
            "volume": 0
        },
        "winBg_1": {
            "name": "megaJack/sounds/centralWin/win2.mp3",
            "volume":  .6
        },
        "winBg_2": {
            "name": "megaJack/sounds/centralWin/win3.mp3",
            "volume":  .6
        },
        "winBg_3": {
            "name": "megaJack/sounds/centralWin/win4.mp3",
            "volume":  .6
        },
        "winBg_4": {
            "name": "megaJack/sounds/centralWin/win5.mp3",
            "volume":  .6
        },
        "winBg_5": {
            "name": "megaJack/sounds/centralWin/win6.mp3",
            "volume":  .6
        },
        "winBg_6": {
            "name": "megaJack/sounds/centralWin/bigWin_Full.mp3",
            "volume":  .8
        },
        "winBg_7": {
            "name": "megaJack/sounds/centralWin/superBigWin_Full.mp3",
            "volume":   .8
        },
        "winBg_8": {
            "name": "megaJack/sounds/centralWin/megaBigWin_Full.mp3",
            "volume":  .8
        },
        "winBgS_6": {
            "name": "megaJack/sounds/centralWin/bigWin.mp3",
            "volume":  .8
        },
        "winBgS_7": {
            "name": "megaJack/sounds/centralWin/superBigWin.mp3",
            "volume":   .8
        },
        "winBgS_8": {
            "name": "megaJack/sounds/centralWin/megaBigWin.mp3",
            "volume": .8
        },
        "fsWon": {
            "name": "megaJack/sounds/introFs.mp3",
            "volume": 1
        },
        "incWin": {
            "name": "megaJack/sounds/counter.mp3",
            "volume": .6,
            "loop": true
        },
        "winPanel": {
            "name": "megaJack/sounds/winScreen.mp3",
            "volume": 1
        },
        "tumble_0": {
            "name": "megaJack/sounds/tumbling.mp3",
            "volume": 1.1,
            "multiple":["tumble_1","tumble_2","tumble_3","tumble_4","tumble_5","tumble_6"]
        },
        "wildx2": {
            "name": "megaJack/sounds/wildx2_land.mp3",
            "volume": 2
        },
        "harpFS": {
            "name": "megaJack/sounds/harpwin_extraFS.mp3",
            "volume": 1
        },
        "harpPos": {
            "name": "megaJack/sounds/harpwin_extraStalkPosition.mp3",
            "volume": .3
        },
        "harpWild": {
            "name": "megaJack/sounds/harpwin_wilds.mp3",
            "volume": .3
        },
        "harp1": {
            "name": "megaJack/sounds/harp1.mp3",
            "volume": .7
        },
        "harp2": {
            "name": "megaJack/sounds/harp2.mp3",
            "volume": .7
        },
        "harp3": {
            "name": "megaJack/sounds/harp3.mp3",
            "volume": .7
        },
        "harp4": {
            "name": "megaJack/sounds/harp4.mp3",
            "volume": .7
        },
        "harp5": {
            "name": "megaJack/sounds/harp5.mp3",
            "volume": .7
        },
        "harp6": {
            "name": "megaJack/sounds/harp6.mp3",
            "volume": .7
        },
        "leaves1": {
            "name": "megaJack/sounds/leaves1.mp3",
            "volume": .6
        },
        "leaves2": {
            "name": "megaJack/sounds/leaves2.mp3",
            "volume": .6
        },
        "leaves3": {
            "name": "megaJack/sounds/leaves3.mp3",
            "volume": .6
        },
        "leaves4": {
            "name": "megaJack/sounds/leaves4.mp3",
            "volume": .6
        },
        "leaves5": {
            "name": "megaJack/sounds/leaves5.mp3",
            "volume": .6
        },
        "leaves6": {
            "name": "megaJack/sounds/leaves6.mp3",
            "volume": .6
        },
        "leaves7": {
            "name": "megaJack/sounds/leaves7.mp3",
            "volume": .6
        },
        "bean": {
            "name": "megaJack/sounds/bean.mp3",
            "volume": 1
        },
    },
    "bgSounds": {
        "bgSlot1": {
            "name": "megaJack/sounds/bg_layer2.mp3",
            "volume": 0,
            "marker":true
        },
        "bgSlot5": {
            "name": "megaJack/sounds/bg_layer3.mp3",
            "volume": 0,
            "marker":true
        },
        "bgSlot7": {
            "name": "megaJack/sounds/bg_layer4.mp3",
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
        "bgContainer": {
            "visible":true,
            "graphAsset": {
            }
        },
        "frameFS": {
            "visible":false,
            "graphAsset": {
                "bg4": {
                    "name": "bg_m_FS",
                    "x": 256,
                    "y": 88
                }
            }

        },
        "frame": {
            "visible": false,
            "graphAsset": {
                "bg4": {
                    "name": "bg_m",
                    "x": 256,
                    "y": 88
                }
            }
        },
        "reels": {
        },
        "wild": {
        },
        "winGlow":{
        },
        "bg": {
            "visible":false,
            "graphAsset": {
                "bg": {
                    "name": "bg_r",
                    "x": 1002,
                    "y": 88
                },
                "bg1": {
                    "name": "bg_l",
                    "x": 0,
                    "y": 88
                }
            }
        },
        "bgFS": {
            "visible":false,
            "graphAsset": {
                "bg": {
                    "name": "bg_r_FS",
                    "x": 1002,
                    "y": 88
                },
                "bg1": {
                    "name": "bg_l_FS",
                    "x": 0,
                    "y": 88
                }
            }
        },
        "mask":{
            "visible":false,
            "graphAsset": {
                "bg2": {
                    "name": "bg_b",
                    "x": 0,
                    "y": 624
                },
                "bg3": {
                    "name": "bg_t",
                    "x": 0,
                    "y": 0
                },
            }
        },
        "buyFeature":{
            "buttons": {
                "buyFeature": {
                    "visible":true,
                    "name": "buyFeature",
                    "x": 1159,
                    "y": 60,
                    "evt": "doBuyFeature",
                    "texts": {
                        "txt": {
                            "x": 0,
                            "y": 4,
                            "font": "20px  BernhardGothicMedium,Arial, Helvetica sans-serif",
                            "fill": "#f5cd87",
                            "stroke": "#000000",
                            "stroke_tick": 2,
                            "text": "Buy Free Spins",
                            "anchorX": .5
                        }
                    }
                }
            }
        },
        "maskFS":{
            "visible":false,
            "graphAsset": {
                "bg2": {
                    "name": "bg_b_FS",
                    "x": 0,
                    "y": 624
                },
                "bg3": {
                    "name": "bg_t_FS",
                    "x": 0,
                    "y": 0
                },
            }
        },
        "freeSpinAccumulator": {
            "visible": false,
            "maxFs": 12,
            "graphAsset": {
                "anchor1_In": {
                    "visible": false,
                    "name": "anchorIn_1",
                    "x": 1053,
                    "y": 473
                },
                "anchor2_In": {
                    "visible": false,
                    "name": "anchorIn_2",
                    "x": 1064,
                    "y": 453
                },
                "anchor3_In": {
                    "visible": false,
                    "name": "anchorIn_3",
                    "x": 1074,
                    "y": 381
                },
                "anchor4_In": {
                    "visible": false,
                    "name": "anchorIn_4",
                    "x": 1046,
                    "y": 307
                },
                "anchor5_In": {
                    "visible": false,
                    "name": "anchorIn_5",
                    "x": 1071,
                    "y": 255
                },
                "anchor6_In": {
                    "visible": false,
                    "name": "anchorIn_6",
                    "x": 1049,
                    "y": 198
                },
                "anchor7_In": {
                    "visible": false,
                    "name": "anchorIn_7",
                    "x": 1063,
                    "y": 136
                },
                "anchor8_In": {
                    "visible": false,
                    "name": "anchorIn_8",
                    "x": 1068,
                    "y": 85
                },
                "fsPos8_Off": {
                    "visible": true,
                    "name": "fsPosition_8_Off",
                    "x": 879,
                    "y": 38,
                    "alpha": .8,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsPos8_On": {
                    "visible": false,
                    "name": "fsPosition_8_On",
                    "x": 879,
                    "y": 38,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsPos9_Off": {
                    "visible": true,
                    "name": "fsPosition_9_Off",
                    "x": 782,
                    "y": 38,
                    "alpha": .8,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsPos9_On": {
                    "visible": false,
                    "name": "fsPosition_9_On",
                    "x": 782,
                    "y": 38,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsPos10_Off": {
                    "visible": true,
                    "name": "fsPosition_10_Off",
                    "x": 686,
                    "y": 38,
                    "alpha": .8,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsPos10_On": {
                    "visible": false,
                    "name": "fsPosition_10_On",
                    "x": 686,
                    "y": 38,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsPos11_Off": {
                    "visible": true,
                    "name": "fsPosition_11_Off",
                    "x": 595,
                    "y": 38,
                    "alpha": .8,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsPos11_On": {
                    "visible": false,
                    "name": "fsPosition_11_On",
                    "x": 595,
                    "y": 38,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsPos12_Off": {
                    "visible": true,
                    "name": "fsPosition_12_Off",
                    "x": 498,
                    "y": 38,
                    "alpha": .8,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsPos12_On": {
                    "visible": false,
                    "name": "fsPosition_12_On",
                    "x": 498,
                    "y": 38,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsPos13_Off": {
                    "visible": true,
                    "name": "fsPosition_13_Off",
                    "x": 402,
                    "y": 38,
                    "alpha": .8,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsPos13_On": {
                    "visible": false,
                    "name": "fsPosition_13_On",
                    "x": 402,
                    "y": 38,
                    "anchorX": .5,
                    "anchorY": .5
                }
            }
        },
        "freeSpinAccumulatorFs": {
            "visible": false,
            "graphAsset": {
                "fsPos1_Off": {
                    "visible": true,
                    "name": "fsPosition_1_Off",
                    "x": 879,
                    "y": 38,
                    "alpha": .8,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsPos1_On": {
                    "visible": false,
                    "name": "fsPosition_1_On",
                    "x": 879,
                    "y": 38,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsPos2_Off": {
                    "visible": true,
                    "name": "fsPosition_2_Off",
                    "x": 782,
                    "y": 38,
                    "alpha": .8,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsPos2_On": {
                    "visible": false,
                    "name": "fsPosition_2_On",
                    "x": 782,
                    "y": 38,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsPos3_Off": {
                    "visible": true,
                    "name": "fsPosition_3_Off",
                    "x": 686,
                    "y": 38,
                    "alpha": .8,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsPos3_On": {
                    "visible": false,
                    "name": "fsPosition_3_On",
                    "x": 686,
                    "y": 38,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsPos4_Off": {
                    "visible": true,
                    "name": "fsPosition_4_Off",
                    "x": 595,
                    "y": 38,
                    "alpha": .8,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsPos4_On": {
                    "visible": false,
                    "name": "fsPosition_4_On",
                    "x": 595,
                    "y": 38,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsAnimation4_On":{
                    "visible": false,
                    "name": "leavesFS",
                    "x": 595,
                    "y": 38,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsPos5_Off": {
                    "visible": true,
                    "name": "fsPosition_5_Off",
                    "x": 498,
                    "y": 38,
                    "alpha": .8,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsPos5_On": {
                    "visible": false,
                    "name": "fsPosition_5_On",
                    "x": 498,
                    "y": 38,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsAnimation5_On":{
                    "visible": false,
                    "name": "leavesFS",
                    "x": 498,
                    "y": 38,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsPos6_Off": {
                    "visible": true,
                    "name": "fsPosition_6_Off",
                    "x": 402,
                    "y": 38,
                    "alpha": .8,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsPos6_On": {
                    "visible": false,
                    "name": "fsPosition_6_On",
                    "x": 402,
                    "y": 38,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsAnimation6_On":{
                    "visible": false,
                    "name": "leavesFS",
                    "x": 402,
                    "y": 38,
                    "anchorX": .5,
                    "anchorY": .5
                },

            }
        },

        "buttonFg":{},
        "stickyWild": {},

        "beans": {},
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
                    "x": 140,
                    "y": 35,
                    "anchorX":.5,
                    "anchorY":.5,
                    "scaleX":.55,
                    "scaleY":.55,
                }
            },
            "texts": {
                "frLabel": {
                    "x": 300,
                    "y": 10,
                    "fill": "#093b0a",
                    "font": "15px Futura ,Arial",
                    "text": "Free Rounds:",
                    "anchorX":  0.5
                },
                "frValue": {
                    "x": 300,
                    "y": 22,
                    "fill": "#093b0a",
                    "font": "22px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                },
                "frTotWonLabel": {
                    "x": 1020,
                    "y": 10,
                    "fill": "#093b0a",
                    "font": "15px Futura ,Arial",
                    "text": "Total won:",
                    "anchorX":  0.5
                },
                "frTotWonValue": {
                    "x": 1020,
                    "y": 22,
                    "fill": "#093b0a",
                    "font": "22px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                }
            }
        },
        "freeSpins": {
            "visible": false,
            "graphAsset": {
                "fsP": {
                    "name": "leavesFS",
                    "x": 640,
                    "y": 0,
                    "anchorX": .5,
                    "alpha":0
                }
            },
            "texts": {
                "fsLabel": {
                    "x": 1167,
                    "y": 85,
                    "fill": "#ffffff",
                    "font": "17px Futura ,Arial",
                    "text": "Free Spins",
                    "anchorX": 0.5
                },
                "fsValue": {
                    "x": 1167,
                    "y": 105,
                    "fill": "#ffffff",
                    "font": "27px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                },
                "totWonLabel": {
                    "x": 1167,
                    "y": 330,
                    "fill": "#ffffff",
                    "font": "17px Futura ,Arial",
                    "text": "Total won",
                    "anchorX":0.5
                },
                "totWonValue": {
                    "x": 1167,
                    "y": 350,
                    "fill": "#ffffff",
                    "font": "27px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                },
                "fsMultValue":{
                    "x": 1167,
                    "y": 238,
                    "bmpFont": "multiBmpFont",
                    "size": "80",
                    "text": "",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsmultT":{
                    "x": 1165,
                    "y": 212,
                    "font": "14px Futura ,Arial",
                    "fill": "#ffffff",
                    "text": "Multiplier",
                    "align":"center",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsAdditional":{
                    "x": 1197,
                    "y": 60,
                    "bmpFont": "multiBmpFont",
                    "size": "44",
                    "text": "",
                    "anchorX": .5,
                    "anchorY": .5
                }
            }
        },
        "lockReels":{
            "visible":false,
            "graphAsset": {
                "lockIn_0": {
                    "visible":false,
                    "name": "lockIn",
                    "x": 235,
                    "y": 55
                },
                "lockIn_1": {
                    "name": "lockIn",
                    "visible":false,
                    "x": 235+ 128,
                    "y": 55
                },
                "lockIn_2": {
                    "name": "lockIn",
                    "visible":false,
                    "x": 235+ 2*128,
                    "y": 55
                },
                "lockIn_3": {
                    "name": "lockIn",
                    "visible":false,
                    "x": 235+ 3*128,
                    "y": 55
                },
                "lockIn_4": {
                    "name": "lockIn",
                    "visible":false,
                    "x": 235+ 4*128,
                    "y": 55
                },
                "lockIn_5": {
                    "name": "lockIn",
                    "visible":false,
                    "x": 235+ 5*128,
                    "y": 55
                }
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
        "harp":{
            "visible":false,
            "graphAsset": {
                "bg": {
                    "visible":false,
                    "name": "bgPanel",
                    "x": 640,
                    "y": 240,
                    "scaleX":.7,
                    "scaleY":.5,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "he": {
                    "visible":true,
                    "name": "harp_event",
                    "x": 185,
                    "y": 368,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "circle":{
                    "visible":false,
                    "name": "popupMc",
                    "x": 550,
                    "y": 360,
                    "anchorX":.5,
                    "anchorY":.5
                }
            },
            "texts":{
                "harpHead":{
                    "x": 640,
                    "y": 200,
                    "font": "35px BernhardGothicMedium, sans-serif",
                    "fill": "#58d53f",
                    "stroke": "#000000",
                    "stroke_tick": 4,
                    "text": "ENCHANTED HARP",
                    "anchorX": 0.5,
                },
                "harptext":{
                    "x": 640,
                    "y": 230,
                    "font": "35px BernhardGothicMedium, sans-serif",
                    "fill": "#ffe424",
                    "stroke": "#000000",
                    "stroke_tick": 4,
                    "text": "",
                    "anchorX": 0.5,
                },
                "MultValueBig":{
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
        "scatter": {},
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
        "winWays":{
            "visible": false,
            "graphAsset": {
                "fsP": {
                    "name": "leavesFS",
                    "x": 640,
                    "y": 0,
                    "anchorX": .5,
                    "alpha":0
                }
            },
            "texts":{
                "winWaysNum":{
                    "x": 118,
                    "y": 138,
                    "font": "50px BernhardGothicMedium,Arial, Helvetica sans-serif",
                    "fill": "#ffe424",
                    "stroke": "#000000",
                    "stroke_tick": 4,
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
                    "anchorY": .5
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
                    "y": 400,
                    "bmpFont": "bmpFont",
                    "size": "38",
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
                            "x": 235,
                            "y": 70,
                            "font": "35px BernhardGothicMedium, sans-serif",
                            "fill": "#58d53f",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "text": "FREE SPINS",
                            "anchorX": 0.5,
                        },
                        "pw2":{
                            "x": 235,
                            "y": 110,
                            "font": "20px BernhardGothicMedium, sans-serif",
                            "fill": "#ffe424",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align":"center",
                            "text": "CLIMB THE BEANSTALK",
                            "anchorX": 0.5,
                        },
                        "pw3":{
                            "x": 235,
                            "y": 140,
                            "font": "20px BernhardGothicMedium, sans-serif",
                            "fill": "#ffe424",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align":"center",
                            "text": "TO GET TO THE GIANT'S CASTLE",
                            "anchorX": 0.5,
                        },
                        "pw31":{
                            "x": 235,
                            "y": 170,
                            "font": "20px BernhardGothicMedium, sans-serif",
                            "fill": "#ffe424",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align":"center",
                            "text": "AND TRIGGER FREE SPINS",
                            "anchorX": 0.5,
                        },
                        "pw4":{
                            "x": 235,
                            "y": 230,
                            "font": "35px BernhardGothicMedium, sans-serif",
                            "fill": "#00af00",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align":"center",
                            "text": "SUCCESSIVE TUMBLES",
                            "anchorX": 0.5,
                        },
                        "pw5":{
                            "x": 235,
                            "y": 270,
                            "font": "20px BernhardGothicMedium, sans-serif",
                            "fill": "#ffe424",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align":"center",
                            "text": "HELPS YOU CLIMB THE BEANSTALK",
                            "anchorX": 0.5,
                        },
                        "pw6":{
                            "x": 235,
                            "y": 330,
                            "font": "35px BernhardGothicMedium, sans-serif",
                            "fill": "#00af00",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align":"center",
                            "text": "MAX WIN",
                            "anchorX": 0.5,
                        },
                        "pw61":{
                            "x": 235,
                            "y": 370,
                            "font": "30px BernhardGothicMedium, sans-serif",
                            "fill": "#ffe424",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align":"center",
                            "text": "x25000",
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
                            "x": 240,
                            "y": 50,
                            "font": "32px  BernhardGothicMedium, sans-serif",
                            "fill": "#00af00",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align":"center",
                            "text": "ENCHANTED HARP",
                            "anchorX": 0.5,
                        },
                        "pw41":{
                            "x": 240,
                            "y": 75,
                            "font": "20px  BernhardGothicMedium, sans-serif",
                            "fill": "#00af00",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align":"center",
                            "text": "+",
                            "anchorX": 0.5,
                        },
                        "pw42":{
                            "x": 240,
                            "y": 88,
                            "font": "32px  BernhardGothicMedium, sans-serif",
                            "fill": "#00af00",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align":"center",
                            "text": "MAGIC BEANS",
                            "anchorX": 0.5,
                        },
                        "pw5":{
                            "x": 300,
                            "y": 140,
                            "font": "20px BernhardGothicMedium, sans-serif",
                            "fill": "#ffe424",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align":"center",
                            "text": "HELPS YOU CLIMBING",
                            "anchorX": 0.5,
                        },
                        "pw51":{
                            "x": 300,
                            "y": 170,
                            "font": "20px  BernhardGothicMedium, sans-serif",
                            "fill": "#ffe424",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align":"center",
                            "text": "THE BEANSTALK",
                            "anchorX": 0.5,
                        },
                        "pw52":{
                            "x": 300,
                            "y": 200,
                            "font": "20px  BernhardGothicMedium, sans-serif",
                            "fill": "#ffe424",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align":"center",
                            "text": "ADDING UP TO 3 POSITIONS.",
                            "anchorX": 0.5,
                        },
                        "pw6":{
                            "x": 430,
                            "y": 300,
                            "font": "35px  BernhardGothicMedium, sans-serif",
                            "fill": "#00af00",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align":"center",
                            "text": "REELS LOCK AT 7",
                            "anchorX": 0.5,
                        },
                        "pw62":{
                            "x": 430,
                            "y": 380,
                            "font": "20px  BernhardGothicMedium, sans-serif",
                            "fill": "#ffe424",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align":"center",
                            "text": "DURING FREE SPINS",
                            "anchorX": 0.5,
                        },
                        "pw72":{
                            "x": 430,
                            "y": 340,
                            "font": "25px  BernhardGothicMedium, sans-serif",
                            "fill": "#00af00",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align":"center",
                            "text": "UNLIMITED MULTIPLIER",
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
                    "text": "",
                    "anchorX": .5
                },
                "msg2": {
                    "x": 640,
                    "y": 354,
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
            "selectorY":195,
            "selectorX":650,
            "textCol":"#ffffff",
            "graphAsset": {
                "bgmsg": {
                    "name": "bgAlpha",
                    "x": 0,
                    "y": 0
                },
                "generic": {
                    "name": "featurePanel",
                    "x": 640,
                    "y": 310,
                    "anchorX": .5,
                    "anchorY": .5,
                    "scaleX":1.5,
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
                    "y": 221,
                    "fill": "#ffffff",
                    "font": "18px FuturaPT-Book",
                    "text": "Free spins",
                    "anchorX": .5
                },
                "msgF5": {
                    "x": 640,
                    "y": 310,
                    "fill": "#ffffff",
                    "font": "18px FuturaPT-Book",
                    "text": "Free spins with additional multiplier",
                    "anchorX": .5
                },
                "msgF51": {
                    "x": 640,
                    "y": 395,
                    "fill": "#ffffff",
                    "font": "18px FuturaPT-Book",
                    "text": "Free spins with additional multiplier and more harp events",
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
                    "evt": "doOkMWJ",
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
    "licence":true,
    "slotEngine":"MegaJack88Engine",
    "engineNumbers":0,
    "log":true,
    "canSwipe":false,
    "fastPlayEnable":true,
    "comment_preview":"enable feature preview screen",
    "preview":true,
    "previewTout":45000,
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
    "lineType": "MegaWayTumblingWinjack",
    "lineFrames":31,
    "lineFrames":19,
    "comment_lineWinAmtType":"lines/coinWinning class",
    "lineWinAmtType":"NormalLineWinAmount",
    "numReels": 6,
    "numIcons": 7 ,
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
    "freeSpins":"MegaJackMwFreeSpins",
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
        "deltaX_0": 254,
        "deltaX": 128,
        "deltaY_0": 632 ,
        "deltaY": 104
    },
    "icon": {
        "x": 0,
        "y": 0,
        "width": 132,
        "height": 132
    },
    "winningcombinations": true,
    "ForceFeature":{
        "ch1":{
            "value":"",
            "description":"Harp Wilds:2"
        },
        "ch2":{
            "value":"",
            "description":"Harp Wilds:4"
        },
        "ch3":{
            "value":"",
            "description":"Harp Wilds:8"
        },
        "ch4":{
            "value":"",
            "description":"Multiplier x5"
        },
        "ch5":{
            "value":"",
            "description":"Beans Stalk increase +2"
        },
        "ch6":{
            "value":"",
            "description":"Respin"
        },
        "ch7":{
            "value":"",
            "description":"Extra FS:2"
        },
        "ch8":{
            "value":"",
            "description":"Magic Beans"
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
            "title": "MegaWays™ Jack Game Rules",
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
                            "bg": "megaJack/img/symbol-00.png", //symbol image
                            "payout_values": true //Whether symbol has payout values

                        },

                        {

                            "id": "symbol_01",
                            "bg": "megaJack/img/symbol-01.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_02",
                            "bg": "megaJack/img/symbol-02.png",
                            "payout_values": true

                        }


                    ],

                    [

                        {

                            "id": "symbol_03",
                            "bg": "megaJack/img/symbol-03.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_04",
                            "bg": "megaJack/img/symbol-04.png",
                            "payout_values": true

                        }

                    ],

                    [
                        {

                            "id": "symbol_05",
                            "bg": "megaJack/img/symbol-05.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_06",
                            "bg": "megaJack/img/symbol-06.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_07",
                            "bg": "megaJack/img/paytable/symbol-07.png",
                            "payout_values": true

                        }

                    ],

                    [

                        {
                            "id": "symbol_08",
                            "bg": "megaJack/img/paytable/symbol-08.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_09",
                            "bg": "megaJack/img/paytable/symbol-09.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_10",
                            "bg": "megaJack/img/symbol-10.png",
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
                            "bg": "megaJack/img/symbol-12.png",
                            "payout_values": false,
                            "text": [
                                "Magic beans",
                                "Can only appear on tumbles during base game.",
                                "Maximum number of Magic Beans symbols is 3.",
                                "Each symbol adds 1 to 3 position on your way to Free Spins."
                            ]
                        }
                    ],
                    [

                        {
                            "id": "symbol_12",
                            "bg": "megaJack/img/paytable/harp.png",
                            "payout_values": false,
                            "text": [
                                "Magic harp",
                                "Harp in the base game can award:",
                                "Up to 4 additional wilds on tumbles.",
                                "Up to x5 multipliers on winnings.",
                                "Up to 3 positions on the stalk or the cloud.",
                                "Single Re-Spin without loosing the stalk position.",
                                "Harp during Free Spins can award:",
                                "Up to 4 additional wilds on tumbles.",
                                "Up to x3 to the global Free Spins multiplier.",
                                "Up to 4 additional Free Spins."

                            ],
                            "size": { //Optional field that sets image height & width in px
                                "height": "300",
                                "width":  "147"
                            }
                        }
                    ],
                    [

                        {
                            "id" : "tumble_screenshot",
                            "bg" : "megaJack/img/paytable/winways.png",
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
                            "id": "fs1",
                            "bg": "megaJack/img/paytable/fs1.png",
                            "payout_values": false,
                            "size": { //Optional field that sets image height & width in px

                                "width": "400",
                                "height":  "32"

                            }

                        },
                    ],
                    [
                        {

                            "id" : "FSStart",
                            "bg" : "megaJack/img/paytable/fs.png",
                            "text": [
                                "Freespins are reached by climbing the 8 leaves on the stalk to trigger 8 Free Spins.",
                                "Each successive winnings increase 1 position, Random events like Harp or Magic Beans might add positions.",
                                "8 positions award 8 Free Spins.",
                                "9 positions award 9 Free Spins.",
                                "10 positions award 10 Free Spins, x2 multiplier.",
                                "11 positions award 11 Free Spins, x2 multiplier.",
                                "12 positions award 12 Free Spins, x3 multiplier.",
                                "13 positions award 12 Free Spins, x3 multiplier, bigger Harp chance.",
                                "During Free Spins, reels with 7 symbols lock at that number of symbols for the entirety of Free Spins feature.",
                                "When a reel locks it awards 1 additional multiplier.",
                                "On the last Free Spin, locking reels award 1 additional Free Spin that can also re-trigger.",
                                "The current multiplier applies to any win earned while that multiplier is in effect, increases will affect all subsequent wins."
                            ],
                            "size": { //Optional field that sets image height & width in px

                                "height": "400",
                                "width":  "73"

                            }

                        }

                    ],


                    [

                        {

                            "id" : "FSSADDtart",
                            "bg" : "megaJack/img/paytable/fsAdd.png",
                            "text": [
                                "Additional Freespins are also reached by having multiple successive tumbles. A minimum of 4 tumbles is required to trigger additional 2 Free spins. (see picture)",
                                "Each extra successive win after 4 awards 1 extra Free Spins, up to a maximum of 4."
                            ],
                            "size": { //Optional field that sets image height & width in px

                                "height": "50",
                                "width":  "400"

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

                    "bg": "megaJack/img/paytable/winways.png",
                    "text": {

                        "value": [

                            "Ten: Appears on 4 reels: twice on reel 1, once in reel 2, three times in reel 3 and once in reel 4: 2*1*3*1=x6 multiplier",
                            "Ten on 4 reels award  5 coins x 6 multiplier= 30 coins.",

                        ]

                    }

                }

            ],

        }

    ]

}