
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
        "winWayOb": "rainbowWildsMegaways/img/loader/btg-megaways.png"
    },
    "loaderMc": {
        "staticLoaderLogo": {
            "sprite": "rainbowWildsMegaways/img/logo.png",
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
        "sprite": "fonts/fontRw.png",
        "font": "fonts/fontRw.xml"
    },
    "bmpFontMW":{
        "sprite": "fonts/mw-numbers-export.png",
        "font": "fonts/mw-numbers-export.xml"
    },
    "multiBmpFont":{
        "sprite": "fonts/rwmwMultiplier.png",
        "font": "fonts/rwmwMultiplier.xml"
    }
}

var extScripts={
    "webfont": "15px FuturaPT-Heavy",
    "webfont1": "15px FuturaPT-Book",
    "webfont2": "15px connemara_old_style_probold",
    "webfont3": "25px connemara_old_style_probold"
}
var gameAssets = {
    "assets": {
        "icon0": "rainbowWildsMegaways/img/symbol-00.png",
        "icon1": "rainbowWildsMegaways/img/symbol-01.png",
        "icon2": "rainbowWildsMegaways/img/symbol-02.png",
        "icon3": "rainbowWildsMegaways/img/symbol-03.png",
        "icon4": "rainbowWildsMegaways/img/symbol-04.png",
        "icon5": "rainbowWildsMegaways/img/symbol-05.png",
        "icon6": "rainbowWildsMegaways/img/symbol-06.png",
        "icon7": "rainbowWildsMegaways/img/symbol-07.png",
        "icon8": "rainbowWildsMegaways/img/symbol-08.png",
        "icon9": "rainbowWildsMegaways/img/symbol-09.png",
        "icon10": "rainbowWildsMegaways/img/symbol-10.png",
        "icon11": "rainbowWildsMegaways/img/symbol-11.png",
        "icon12": "rainbowWildsMegaways/img/symbol-12.png",
        "icon13": "rainbowWildsMegaways/img/symbol-13.png",
        "icon15": "rainbowWildsMegaways/img/symbol-13.png",
        "icon8GH": "rainbowWildsMegaways/img/paytable/symbol-08.png",
        "icon9GH": "rainbowWildsMegaways/img/paytable/symbol-09.png",
        "icon10GH": "rainbowWildsMegaways/img/paytable/symbol-10.png",
        "icon11GH": "rainbowWildsMegaways/img/paytable/symbol-11.png",
        "icon12GH": "rainbowWildsMegaways/img/paytable/symbol-12.png",
        "icon13GH": "rainbowWildsMegaways/img/paytable/symbol-13.png",
        "icon15GH": "rainbowWildsMegaways/img/paytable/symbol-13.png",


        "icon18": "rainbowWildsMegaways/img/empty.png",
        "icon19": "rainbowWildsMegaways/img/empty.png",
        "none": "rainbowWildsMegaways/img/transparent.png",

        "smbFrame_2": "rainbowWildsMegaways/img/frame_6.png",
        "smbFrame_3": "rainbowWildsMegaways/img/frame_5.png",
        "smbFrame_4": "rainbowWildsMegaways/img/frame_4.png",
        "smbFrame_5": "rainbowWildsMegaways/img/frame_3.png",
        "smbFrame_6": "rainbowWildsMegaways/img/frame_2.png",
        "smbFrame_7": "rainbowWildsMegaways/img/frame_1.png",

        "smbFrameBg_2": "rainbowWildsMegaways/img/tile-06-back.png",
        "smbFrameBg_3": "rainbowWildsMegaways/img/tile-05-back.png",
        "smbFrameBg_4": "rainbowWildsMegaways/img/tile-04-back.png",
        "smbFrameBg_5": "rainbowWildsMegaways/img/tile-03-back.png",
        "smbFrameBg_6": "rainbowWildsMegaways/img/tile-02-back.png",
        "smbFrameBg_7": "rainbowWildsMegaways/img/tile-01-back.png",

        "smbFrame_w_2": "rainbowWildsMegaways/img/wild-frame_6.png",
        "smbFrame_w_3": "rainbowWildsMegaways/img/wild-frame_5.png",
        "smbFrame_w_4": "rainbowWildsMegaways/img/wild-frame_4.png",
        "smbFrame_w_5": "rainbowWildsMegaways/img/wild-frame_3.png",
        "smbFrame_w_6": "rainbowWildsMegaways/img/wild-frame_2.png",
        "smbFrame_w_7": "rainbowWildsMegaways/img/wild-frame_1.png",

        "bicon0": "rainbowWildsMegaways/img/b-symbol-00.png",
        "bicon1": "rainbowWildsMegaways/img/b-symbol-01.png",
        "bicon2": "rainbowWildsMegaways/img/b-symbol-02.png",
        "bicon3": "rainbowWildsMegaways/img/b-symbol-03.png",
        "bicon4": "rainbowWildsMegaways/img/b-symbol-04.png",
        "bicon5": "rainbowWildsMegaways/img/b-symbol-05.png",
        "bicon6": "rainbowWildsMegaways/img/b-symbol-06.png",
        "bicon7": "rainbowWildsMegaways/img/b-symbol-07.png",
        "bicon8": "rainbowWildsMegaways/img/b-symbol-08.png",
        "bicon9": "rainbowWildsMegaways/img/b-symbol-09.png",
        "bicon10": "rainbowWildsMegaways/img/b-symbol-10.png",
        "bicon11": "rainbowWildsMegaways/img/b-symbol-11.png",
        "bicon12": "rainbowWildsMegaways/img/b-symbol-12.png",
        "bicon13": "rainbowWildsMegaways/img/b-symbol-13.png",
        "bicon15": "rainbowWildsMegaways/img/b-symbol-13.png",


        "bottomBar": "gui/message-bar.png",
        "bgPanel": "rainbowWildsMegaways/img/bgPanel.png",
        "bgPanelGame": "rainbowWildsMegaways/img/bgPanel.png",
        "bgPreview":"rainbowWildsMegaways/img/paytable/intro-page.jpg",
        "bgPreview1":"rainbowWildsMegaways/img/paytable/intro1.png",
        "bgPreview2":"rainbowWildsMegaways/img/paytable/intro2.png",

        "bg_r": "rainbowWildsMegaways/img/bg/base-right.jpg",
        "bg_l": "rainbowWildsMegaways/img/bg/base-left.jpg",
        "bg_b": "rainbowWildsMegaways/img/bg/base-bottom.jpg",
        "bg_t": "rainbowWildsMegaways/img/bg/base-top.jpg",
        "bg_m": "rainbowWildsMegaways/img/bg/base-main.jpg",

        "frame_r": "rainbowWildsMegaways/img/bg/frame-right.png",
        "frame_l": "rainbowWildsMegaways/img/bg/frame-left.png",
        "frame_t": "rainbowWildsMegaways/img/bg/frame-top.png",
        "frame_m": "rainbowWildsMegaways/img/bg/frame-main.png",

        "mult_1":"rainbowWildsMegaways/img/wm-x1.png",
        "mult_2":"rainbowWildsMegaways/img/wm-x2.png",
        "mult_3":"rainbowWildsMegaways/img/wm-x3.png",
        "mult_4":"rainbowWildsMegaways/img/wm-x4.png",
        "mult_5":"rainbowWildsMegaways/img/wm-x5.png",
        "mult_6":"rainbowWildsMegaways/img/wm-x6.png",
        "mult_7":"rainbowWildsMegaways/img/wm-x7.png",
        "mult_8":"rainbowWildsMegaways/img/wm-x8.png",
        "mult_9":"rainbowWildsMegaways/img/wm-x9.png",
        "mult_10":"rainbowWildsMegaways/img/wm-x10.png",

        "bg_r_FS": "rainbowWildsMegaways/img/bg/base-right_FS.jpg",
        "bg_l_FS": "rainbowWildsMegaways/img/bg/base-left_FS.jpg",
        "bg_b_FS": "rainbowWildsMegaways/img/bg/base-bottom_FS.jpg",
        "bg_t_FS": "rainbowWildsMegaways/img/bg/base-top_FS.jpg",
        "bg_m_FS": "rainbowWildsMegaways/img/bg/base-main_FS.jpg",

        "bigWin":"rainbowWildsMegaways/img/big-win.png",
        "superWin":"rainbowWildsMegaways/img/epic-win.png",
        "megaWin":"rainbowWildsMegaways/img/ultra-win.png",
        "boxFS":"rainbowWildsMegaways/img/total-win-box.png",
        "buttonBg":"gui/generic/img/desktop/png/cp-info-bar.png",
        "volOnButton": "gui/btnVolOn.png",
        "volOffButton": "gui/btnVolOff.png",
        "featurePanel":"rainbowWildsMegaways/img/buyFeature/buy-feature-pop-up.png",
        "bgAlpha":"rainbowWildsMegaways/img/alpha.png",
        "bgBlack": "rainbowWildsMegaways/img/black.png",
        "freeRoundsPanel": "rainbowWildsMegaways/img/free-roundsH.png",
        "p1": "rainbowWildsMegaways/img/p1.png",
        "p2": "rainbowWildsMegaways/img/p2.png",
        "p3": "rainbowWildsMegaways/img/p3.png",
        "popupMc":"rainbowWildsMegaways/img/popup-container.png",
        "logo":"rainbowWildsMegaways/img/logo.png",
        "anchorIn": "rainbowWildsMegaways/img/side-feature/side-feature-ease-in-static.png",
        "fsAddBox":"rainbowWildsMegaways/img/side-feature/freeSpins/fs-number-box.png"
    },
    "localizedAssets":{
    },
    "buttonsSpriteSheet": {

        "feature-Fn-btn": {
            "sprite": "rainbowWildsMegaways/img/buyFeature/buy-fs-btn.png",
            "json": "rainbowWildsMegaways/img/buyFeature/buy-fs-btn.png",
            "w": 116,
            "h": 65
        },
        "feature-Rn-btn": {
            "sprite": "rainbowWildsMegaways/img/buyFeature/buy-reels-btn.png",
            "json": "rainbowWildsMegaways/img/buyFeature/buy-reels-btn.png",
            "w": 116,
            "h": 65
        },
        "yesButton": {
            "sprite": "rainbowWildsMegaways/img/yes-btn.png",
            "json": "rainbowWildsMegaways/img/yes-btn.png",
            "w": 54,
            "h": 54
        },
        "noButton": {
            "sprite": "rainbowWildsMegaways/img/no-btn.png",
            "json": "rainbowWildsMegaways/img/no-btn.png",
            "w": 54,
            "h": 54
        },
        "check": {
            "sprite": "rainbowWildsMegaways/img/radio-btns.png",
            "json": "rainbowWildsMegaways/img/radio-btns.png",
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
            "json": "rainbowWildsMegaways/img/buy-free-spin-btn.png",
            "sprite": "rainbowWildsMegaways/img/buy-free-spin-btn.png",
            "w": 116,
            "h": 49
        },

    },
    "animations": {
        "anim0": {
            "json": "rainbowWildsMegaways/img/anim/symbol-00.json",
            "sprite": "rainbowWildsMegaways/img/anim/symbol-00.png"
        },
        "anim1": {
            "json": "rainbowWildsMegaways/img/anim/symbol-01.json",
            "sprite": "rainbowWildsMegaways/img/anim/symbol-01.png"
        },
        "anim2": {
            "json": "rainbowWildsMegaways/img/anim/symbol-02.json",
            "sprite": "rainbowWildsMegaways/img/anim/symbol-02.png"
        },
        "anim3": {
            "json": "rainbowWildsMegaways/img/anim/symbol-03.json",
            "sprite": "rainbowWildsMegaways/img/anim/symbol-03.png"
        },
        "anim4": {
            "json": "rainbowWildsMegaways/img/anim/symbol-04.json",
            "sprite": "rainbowWildsMegaways/img/anim/symbol-04.png"
        },
        "anim5": {
            "json": "rainbowWildsMegaways/img/anim/symbol-05.json",
            "sprite": "rainbowWildsMegaways/img/anim/symbol-05.png"
        },
        "anim6": {
            "json": "rainbowWildsMegaways/img/anim/symbol-06.json",
            "sprite": "rainbowWildsMegaways/img/anim/symbol-06.png"
        },
        "anim7": {
            "json": "rainbowWildsMegaways/img/anim/symbol-07.json",
            "sprite": "rainbowWildsMegaways/img/anim/symbol-07.png"
        },
        "anim8": {
            "json": "rainbowWildsMegaways/img/anim/symbol-08.json",
            "sprite": "rainbowWildsMegaways/img/anim/symbol-08.png"
        },
        "anim9": {
            "json": "rainbowWildsMegaways/img/anim/symbol-09.json",
            "sprite": "rainbowWildsMegaways/img/anim/symbol-09.png"
        },
        "anim10": {
            "json": "rainbowWildsMegaways/img/anim/symbol-10.json",
            "sprite": "rainbowWildsMegaways/img/anim/symbol-10.png"
        },
        "anim11": {
            "json": "rainbowWildsMegaways/img/anim/symbol-11.json",
            "sprite": "rainbowWildsMegaways/img/anim/symbol-11.png"
        },
        "anim12": {
            "json": "rainbowWildsMegaways/img/anim/symbol-12.json",
            "sprite": "rainbowWildsMegaways/img/anim/symbol-12.png"
        },
        "anim13": {
            "json": "rainbowWildsMegaways/img/anim/symbol-13.json",
            "sprite": "rainbowWildsMegaways/img/anim/symbol-13.png"
        },
        "anim15": {
            "json": "rainbowWildsMegaways/img/anim/symbol-13-replace.json",
            "sprite": "rainbowWildsMegaways/img/anim/symbol-13-replace.png"
        },
        "iconInnerAnim_7":{
            "json": "rainbowWildsMegaways/img/anim/tumble-anim-01.json",
            "sprite": "rainbowWildsMegaways/img/anim/tumble-anim-01.png"
        },
        "iconInnerAnim_6":{
            "json": "rainbowWildsMegaways/img/anim/tumble-anim-02.json",
            "sprite": "rainbowWildsMegaways/img/anim/tumble-anim-02.png"
        },
        "iconInnerAnim_5":{
            "json": "rainbowWildsMegaways/img/anim/tumble-anim-03.json",
            "sprite": "rainbowWildsMegaways/img/anim/tumble-anim-03.png"
        },
        "iconInnerAnim_4":{
            "json": "rainbowWildsMegaways/img/anim/tumble-anim-04.json",
            "sprite": "rainbowWildsMegaways/img/anim/tumble-anim-04.png"
        },
        "iconInnerAnim_3":{
            "json": "rainbowWildsMegaways/img/anim/tumble-anim-05.json",
            "sprite": "rainbowWildsMegaways/img/anim/tumble-anim-05.png"
        },
        "iconInnerAnim_2":{
            "json": "rainbowWildsMegaways/img/anim/tumble-anim-06.json",
            "sprite": "rainbowWildsMegaways/img/anim/tumble-anim-06.png"
        },
        "wildMultiplier":{
            "json": "rainbowWildsMegaways/img/anim/add-multiplyer.json",
            "sprite": "rainbowWildsMegaways/img/anim/add-multiplyer.png"
        },
        "part-1": {
            "json": "rainbowWildsMegaways/img/anim/bronze-coin.json",
            "sprite": "rainbowWildsMegaways/img/anim/bronze-coin.png"
        },
        "part-2": {
            "json": "rainbowWildsMegaways/img/anim/silver-coin.json",
            "sprite": "rainbowWildsMegaways/img/anim/silver-coin.png"
        },
        "part-3": {
            "json": "rainbowWildsMegaways/img/anim/gold-coin.json",
            "sprite": "rainbowWildsMegaways/img/anim/gold-coin.png"
        },
        "f-part-1": {
            "json": "rainbowWildsMegaways/img/anim/bronze-coin-frwrd.json",
            "sprite": "rainbowWildsMegaways/img/anim/bronze-coin-frwrd.png"
        },
        "f-part-2": {
            "json": "rainbowWildsMegaways/img/anim/silver-coin-frwrd.json",
            "sprite": "rainbowWildsMegaways/img/anim/silver-coin-frwrd.png"
        },
        "f-part-3": {
            "json": "rainbowWildsMegaways/img/anim/gold-coin-frwrd.json",
            "sprite": "rainbowWildsMegaways/img/anim/gold-coin-frwrd.png"
        },
        "anchorIn_1":{
            "json": "rainbowWildsMegaways/img/side-feature/side-feature-01.json",
            "sprite": "rainbowWildsMegaways/img/side-feature/side-feature-01.png"
        },
        "anchorIn_2":{
            "json": "rainbowWildsMegaways/img/side-feature/side-feature-02.json",
            "sprite": "rainbowWildsMegaways/img/side-feature/side-feature-02.png"
        },
        "anchorIn_3":{
            "json": "rainbowWildsMegaways/img/side-feature/side-feature-03.json",
            "sprite": "rainbowWildsMegaways/img/side-feature/side-feature-03.png"
        },
        "anchorIn_4":{
            "json": "rainbowWildsMegaways/img/side-feature/side-feature-04.json",
            "sprite": "rainbowWildsMegaways/img/side-feature/side-feature-04.png"
        },

        "fsPosition_1":{
            "json": "rainbowWildsMegaways/img/side-feature/freeSpins/extra-freespins-01.json",
            "sprite": "rainbowWildsMegaways/img/side-feature/freeSpins/extra-freespins-01.png"
        },
        "fsPositionLS_1":{
            "json": "rainbowWildsMegaways/img/side-feature/freeSpins/re-spin-counter-01.json",
            "sprite": "rainbowWildsMegaways/img/side-feature/freeSpins/re-spin-counter-01.png"
        },
        "fsPosition_2":{
            "json": "rainbowWildsMegaways/img/side-feature/freeSpins/extra-freespins-02.json",
            "sprite": "rainbowWildsMegaways/img/side-feature/freeSpins/extra-freespins-02.png"
        },
        "fsPositionLS_2":{
            "json": "rainbowWildsMegaways/img/side-feature/freeSpins/re-spin-counter-02.json",
            "sprite": "rainbowWildsMegaways/img/side-feature/freeSpins/re-spin-counter-02.png"
        },
        "fsPosition_3":{
            "json": "rainbowWildsMegaways/img/side-feature/freeSpins/extra-freespins-03.json",
            "sprite": "rainbowWildsMegaways/img/side-feature/freeSpins/extra-freespins-03.png"
        },
        "fsPositionLS_3":{
            "json": "rainbowWildsMegaways/img/side-feature/freeSpins/re-spin-counter-03.json",
            "sprite": "rainbowWildsMegaways/img/side-feature/freeSpins/re-spin-counter-03.png"
        },
        "fsPosition_4":{
            "json": "rainbowWildsMegaways/img/side-feature/freeSpins/extra-freespins-04.json",
            "sprite": "rainbowWildsMegaways/img/side-feature/freeSpins/extra-freespins-04.png"
        },
        "fsPositionLS_4":{
            "json": "rainbowWildsMegaways/img/side-feature/freeSpins/re-spin-counter-04.json",
            "sprite": "rainbowWildsMegaways/img/side-feature/freeSpins/re-spin-counter-04.png"
        },

        "smbBg_2":{
            "json": "rainbowWildsMegaways/img/anim/tile-06.json",
            "sprite": "rainbowWildsMegaways/img/anim/tile-06.png"
        },
        "smbBg_3":{
            "json": "rainbowWildsMegaways/img/anim/tile-05.json",
            "sprite": "rainbowWildsMegaways/img/anim/tile-05.png"
        },
        "smbBg_4":{
            "json": "rainbowWildsMegaways/img/anim/tile-04.json",
            "sprite": "rainbowWildsMegaways/img/anim/tile-04.png"
        },
        "smbBg_5":{
            "json": "rainbowWildsMegaways/img/anim/tile-03.json",
            "sprite": "rainbowWildsMegaways/img/anim/tile-03.png"
        },
        "smbBg_6":{
            "json": "rainbowWildsMegaways/img/anim/tile-02.json",
            "sprite": "rainbowWildsMegaways/img/anim/tile-02.png"
        },
        "smbBg_7":{
            "json": "rainbowWildsMegaways/img/anim/tile-01.json",
            "sprite": "rainbowWildsMegaways/img/anim/tile-01.png"
        }
    },
    "importantSounds": {
        "spinClick": {
            "name": "rainbowWildsMegaways/sounds/spinClick.mp3",
            "volume": .1
        },
        "reelStop": {
            "name": "rainbowWildsMegaways/sounds/reelStop.mp3",
            "volume":.2
        },
        "reelSound": {
            "name": "rainbowWildsMegaways/sounds/reelSound.mp3",
            "volume":.7
        },
        "coins": {
            "name": "rainbowWildsMegaways/sounds/coins.mp3",
            "volume": 1
        },
        "iconPop": {
            "name": "rainbowWildsMegaways/sounds/iconPop.mp3",
            "volume": 1
        },
        "winAmountFall": {
            "name": "rainbowWildsMegaways/sounds/winAmountFall.mp3",
            "volume": .6
        }
    },
    "bgImportantSounds":{
        "bgSlot": {
            "name": "rainbowWildsMegaways/sounds/bg_layer1.mp3",
            "volume": .6,
            "marker":true
        }
    },
    "sounds": {
        "click": {
            "name": "rainbowWildsMegaways/sounds/click.mp3",
            "volume": .3
        },
        "multiplier": {
            "name": "rainbowWildsMegaways/sounds/multiplier.mp3",
            "volume":  .7
        },
        "multiplier_1": {
            "name": "rainbowWildsMegaways/sounds/multiplier_layer1.mp3",
            "volume":  .7
        },
        "multiplier_2": {
            "name": "rainbowWildsMegaways/sounds/multiplier_layer2.mp3",
            "volume":  .7
        },
        "multiplier_3": {
            "name": "rainbowWildsMegaways/sounds/multiplier_layer3.mp3",
            "volume":  .7
        },
        "anchor_activate1": {
            "name": "rainbowWildsMegaways/sounds/respinCounter_1.mp3",
            "volume": .8
        },
        "anchor_activate2": {
            "name": "rainbowWildsMegaways/sounds/respinCounter_2.mp3",
            "volume": .8
        },
        "anchor_activate3": {
            "name": "rainbowWildsMegaways/sounds/respinCounter_3.mp3",
            "volume": .8
        },
        "anchor_activate4": {
            "name": "rainbowWildsMegaways/sounds/respinCounter_4.mp3",
            "volume": .8
        },
        "additionalFs": {
            "name": "rainbowWildsMegaways/sounds/fs_anchors_full.mp3",
            "volume": .5
        },
        "anchor_deactivate": {
            "name": "rainbowWildsMegaways/sounds/respinCounter_reset.mp3",
            "volume": .7
        },
        "smbWin_0": {
            "name": "rainbowWildsMegaways/sounds/smbWin_0.mp3",
            "multiple":["smbWin_1","smbWin_2","smbWin_3","smbWin_4"],
            "volume": .6
        },
        "smbWin_5": {
            "name": "rainbowWildsMegaways/sounds/smbWin_5.mp3",
            "volume": .6
        },

        "smbWin_6": {
            "name": "rainbowWildsMegaways/sounds/smbWin_6.mp3",
            "volume": .6
        },
        "smbWin_7": {
            "name": "rainbowWildsMegaways/sounds/smbWin_7.mp3",
            "volume": .6
        },
        "smbWin_8": {
            "name": "rainbowWildsMegaways/sounds/smbWin_8.mp3",
            "volume": .7
        },
        "smbWin_9": {
            "name": "rainbowWildsMegaways/sounds/smbWin_9.mp3",
            "volume": .7
        },
        "smbWin_10": {
            "name": "rainbowWildsMegaways/sounds/smbWin_10.mp3",
            "volume": .7
        },
        "smbWin_11": {
            "name": "rainbowWildsMegaways/sounds/smbWin_11.mp3",
            "volume": .7
        },
        "smbWin_12": {
            "name": "rainbowWildsMegaways/sounds/smbWin_12.mp3",
            "volume": .7
        },
        "smbWin_13": {
            "name": "rainbowWildsMegaways/sounds/smbWin_13.mp3",
            "volume": .7
        },
        "smbWin_13-growing": {
            "name": "rainbowWildsMegaways/sounds/smbWin_13-grow.mp3",
            "volume": .8
        },
        "bubble": {
            "name": "rainbowWildsMegaways/sounds/tumble-animation.mp3",
            "volume": .15
        },

        "winBg_0": {
            "name": "rainbowWildsMegaways/sounds/centralWin/win1.mp3",
            "volume": 0
        },
        "winBg_1": {
            "name": "rainbowWildsMegaways/sounds/centralWin/win2.mp3",
            "volume":  .6
        },
        "winBg_2": {
            "name": "rainbowWildsMegaways/sounds/centralWin/win3.mp3",
            "volume":  .6
        },
        "winBg_3": {
            "name": "rainbowWildsMegaways/sounds/centralWin/win4.mp3",
            "volume":  .6
        },
        "winBg_4": {
            "name": "rainbowWildsMegaways/sounds/centralWin/win5.mp3",
            "volume":  .6
        },
        "winBg_5": {
            "name": "rainbowWildsMegaways/sounds/centralWin/win6.mp3",
            "volume":  .6
        },
        "winBg_6": {
            "name": "rainbowWildsMegaways/sounds/centralWin/bigWin.mp3",
            "volume":  .8
        },
        "winBg_7": {
            "name": "rainbowWildsMegaways/sounds/centralWin/superBigWin.mp3",
            "volume":   .8
        },
        "winBg_8": {
            "name": "rainbowWildsMegaways/sounds/centralWin/megaBigWin.mp3",
            "volume":  .8
        },
        "winBgS_6": {
            "name": "rainbowWildsMegaways/sounds/centralWin/bigWin.mp3",
            "volume":  .8
        },
        "winBgS_7": {
            "name": "rainbowWildsMegaways/sounds/centralWin/superBigWin.mp3",
            "volume":   .8
        },
        "winBgS_8": {
            "name": "rainbowWildsMegaways/sounds/centralWin/megaBigWin.mp3",
            "volume": .8
        },
        "fsWon": {
            "name": "rainbowWildsMegaways/sounds/introFs.mp3",
            "volume": 1
        },
        "incWin": {
            "name": "rainbowWildsMegaways/sounds/counter.mp3",
            "volume": .6,
            "loop": true
        },
        "winPanel": {
            "name": "rainbowWildsMegaways/sounds/winScreen.mp3",
            "volume": .7
        },
        "tumble_0": {
            "name": "rainbowWildsMegaways/sounds/tumbling.mp3",
            "volume": .8,
            "multiple":["tumble_1","tumble_2","tumble_3","tumble_4","tumble_5","tumble_6"]
        },
        "anchor_activate1": {
            "name": "rainbowWildsMegaways/sounds/consecutiveWinsClover1.mp3",
            "volume": .7
        },
        "anchor_activate2" :{
            "name": "rainbowWildsMegaways/sounds/consecutiveWinsClover2.mp3",
            "volume": .7
        },
        "anchor_activate3": {
            "name": "rainbowWildsMegaways/sounds/consecutiveWinsClover3.mp3",
            "volume": .7
        },
        "anchor_activate4": {
            "name": "rainbowWildsMegaways/sounds/consecutiveWinsClover4.mp3",
            "volume": .7
        },
        "anchor_activate-1": {
            "name": "rainbowWildsMegaways/sounds/sideBarClover1.mp3",
            "volume": .7
        },
        "anchor_activate-2" :{
            "name": "rainbowWildsMegaways/sounds/sideBarClover2.mp3",
            "volume": .7
        },
        "anchor_activate-3": {
            "name": "rainbowWildsMegaways/sounds/sideBarClover3.mp3",
            "volume": .7
        },
        "anchor_activate-4": {
            "name": "rainbowWildsMegaways/sounds/sideBarClover4.mp3",
            "volume": .7
        },
    },
    "bgSounds": {
        "bgSlot1": {
            "name": "rainbowWildsMegaways/sounds/bg_layer2.mp3",
            "volume": 0,
            "marker":true
        },
        "bgSlot2": {
            "name": "rainbowWildsMegaways/sounds/bg_layer3.mp3",
            "volume": 0,
            "marker":true
        },
        "bgSlot3": {
            "name": "rainbowWildsMegaways/sounds/bg_layer4.mp3",
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
                    "portrait": true,
                    "x": 254,
                    "y": 72
                }
            }

        },
        "frame": {
            "visible": false,
            "graphAsset": {
                "bg4": {
                    "name": "bg_m",
                    "portrait": true,
                    "x": 256,
                    "y": 72
                },

            }
        },

        "bg": {
            "visible":false,
            "graphAsset": {
                "bg": {
                    "name": "bg_r",
                    "portrait": true,
                    "x": 1024,
                    "y": 72
                },
                "bg1": {
                    "name": "bg_l",
                    "portrait": true,
                    "x": 0,
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
                    "x": 1024,
                    "y": 72
                },
                "bg1": {
                    "name": "bg_l_FS",
                    "portrait": true,
                    "x": 0,
                    "y": 72
                }
            }
        },
        "mask":{
            "visible":false,
            "graphAsset": {
                "bg2": {
                    "name": "bg_b",
                    "portrait": true,
                    "x": 0,
                    "y": 632
                },
                "bg3": {
                    "name": "bg_t",
                    "portrait": true,
                    "x": 0,
                    "y": 0
                },
                "fr1": {
                    "name": "frame_t",
                    "portrait": true,
                    "x": 0,
                    "y": 0
                },
                "fr2": {
                    "name": "frame_l",
                    "x": 0,
                    "y": 72
                },
                "fr3": {
                    "name": "frame_r",
                    "x": 1024,
                    "y": 72
                },
                "fr4": {
                    "name": "frame_m",
                    "x": 256,
                    "y": 72
                },
            }
        },
        "buyFeature":{
            "buttons": {
                "buyFeature": {
                    "visible":true,
                    "name": "buyFeature",
                    "x": 110,
                    "y": 132,
                    "evt": "doBuyFeature",
                    "texts": {
                        "txt": {
                            "x": 0,
                            "y": 0,
                            "font": "15px  connemara_old_style_probold,Arial, Helvetica sans-serif",
                            "fill": "#0a4300",
                            "text": "Buy\rFree Spins",
                            "align":"center",
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
                "fr1": {
                    "name": "frame_t",
                    "portrait": true,
                    "x": 0,
                    "y": 0
                },
                "fr2": {
                    "name": "frame_l",
                    "x": 0,
                    "y": 72
                },
                "fr3": {
                    "name": "frame_r",
                    "x": 1024,
                    "y": 72
                },
                "fr4": {
                    "name": "frame_m",
                    "x": 256,
                    "y": 72
                },
            }
        },
        "reels": {
        },
        "wild": {
        },
        "winGlow":{
        },
        "freeSpinAccumulator": {
            "visible": false,
            "maxFs": 12,
            "graphAsset": {
                "anchorIn": {
                    "visible": false,
                    "portrait": true,
                    "name": "anchorIn",
                    "x": 109    ,
                    "y": 365,
                    "anchorX":.5,
                    "anchorY":.5,
                },
                "anchor1_In": {
                    "visible": false,
                    "portrait": true,
                    "name": "anchorIn_1",
                    "x": 109,
                    "y": 365,
                    "anchorX":.5,
                    "anchorY":.5,
                },
                "anchor2_In": {
                    "visible": false,
                    "portrait": true,
                    "name": "anchorIn_2",
                    "x": 109,
                    "y": 365,
                    "anchorX":.5,
                    "anchorY":.5,
                },
                "anchor3_In": {
                    "visible": false,
                    "portrait": true,
                    "name": "anchorIn_3",
                    "x": 109,
                    "y": 365,
                    "anchorX":.5,
                    "anchorY":.5,
                },
                "anchor4_In": {
                    "visible": false,
                    "portrait": true,
                    "name": "anchorIn_4",
                    "x": 109,
                    "y": 365,
                    "anchorX":.5,
                    "anchorY":.5,
                }
            }
        },
        "freeSpinAccumulatorFs": {
            "visible": false,
            "graphAsset": {
                "fsAddBox":{
                    "visible": true,
                    "portrait": true,
                    "name": "fsAddBox",
                    "x": 1176,
                    "y": 226,
                    "anchorX": .5,
                    "anchorY": .5

                },
                "fsPos1": {
                    "visible": false,
                    "portrait": true,
                    "name": "fsPosition_1",
                    "x": 1176,
                    "y": 153,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsPos2": {
                    "visible": false,
                    "portrait": true,
                    "name": "fsPosition_2",
                    "x": 1176,
                    "y": 153,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsPos3": {
                    "visible": false,
                    "portrait": true,
                    "name": "fsPosition_3",
                    "x": 1176,
                    "y": 153,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsPos4": {
                    "visible": false,
                    "portrait": true,
                    "name": "fsPosition_4",
                    "x": 1176,
                    "y": 153,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsPosLS-1": {
                    "visible": false,
                    "portrait": true,
                    "name": "fsPositionLS_1",
                    "x": 1176,
                    "y": 300,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsPosLS-2": {
                    "visible": false,
                    "portrait": true,
                    "name": "fsPositionLS_2",
                    "x": 1176,
                    "y": 300,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsPosLS-3": {
                    "visible": false,
                    "portrait": true,
                    "name": "fsPositionLS_3",
                    "x": 1176,
                    "y": 300,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsPosLS-4": {
                    "visible": false,
                    "portrait": true,
                    "name": "fsPositionLS_4",
                    "x": 1176,
                    "y": 300,
                    "anchorX": .5,
                    "anchorY": .5
                }
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
                "logo": {
                    "name": "logo",
                    "x": 535,
                    "y": -130,
                    "anchorX":.5
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
                "box1": {
                    "name": "boxFS",
                    "x": 103,
                    "y": 154,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "box2": {
                    "name": "boxFS",
                    "x": 103,
                    "y": 229,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "box3": {
                    "name": "boxFS",
                    "x": 103,
                    "y": 304,
                    "anchorX": .5,
                    "anchorY": .5
                },
            },
            "texts": {
                "fsLabel": {
                    "x": 100,
                    "y": 207,
                    "fill": "#003100",
                    "font": "16px connemara_old_style_probold,Futura ,Arial",
                    "text": "Free Spins",
                    "anchorX": 0.5
                },
                "fsValue": {
                    "x": 100,
                    "y": 222,
                    "fill": "#003100",
                    "font": "25px connemara_old_style_probold, Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                },
                "totWonLabel": {
                    "x": 100,
                    "y": 132,
                    "fill": "#003100",
                    "font": "16px connemara_old_style_probold,Futura ,Arial",
                    "text": "Total won",
                    "anchorX":0.5
                },
                "totWonValue": {
                    "x": 100,
                    "y": 147,
                    "fill": "#003100",
                    "font": "25px connemara_old_style_probold,Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                },
                "fsMultValue":{
                    "x": 100,
                    "y": 316,
                    "font": "25px connemara_old_style_probold,Futura ,Arial",
                    "fill": "#003100",
                    "text": "",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsmultT":{
                    "x": 100,
                    "y": 294,
                    "font": "16px connemara_old_style_probold,Futura ,Arial",
                    "fill": "#003100",
                    "text": "Multiplier",
                    "align":"center",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsAdditional":{
                    "x": 175,
                    "y": 225,
                    "font": "40px connemara_old_style_probold,Futura ,Arial",
                    "fill": "#fffb9e",
                    "text": "",
                    "align":"center",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsAdditionalT1":{
                    "x": 1176,
                    "y": 100,
                    "fill": "#fffb9e",
                    "font": "18px connemara_old_style_probold,Futura ,Arial",
                    "text": "Winning tumbles",
                    "anchorX": 0.5
                },
                "fsAdditionalT2":{
                    "x": 1176,
                    "y": 333,
                    "fill": "#fffb9e",
                    "font": "18px connemara_old_style_probold,Futura ,Arial",
                    "text": "Consecutive losses",
                    "anchorX": 0.5
                },
                "fsAdditionalT3":{
                    "x": 1177,
                    "y": 224,
                    "fill": "#fffb9e",
                    "font": "40px connemara_old_style_probold,Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5,
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
            "portrait": true,

            "texts":{
                "winWaysNum":{
                    "x": 640,
                    "y": 7,
                    "bmpFont": "bmpFontMW",
                    "size": "46",
                    "text": "",
                    "text": "",
                    "anchorX": 0.5
                },
                "fsMultValueBig":{
                    "x": 640,
                    "y": 400,
                    "bmpFont": "multiBmpFont",
                    "size": "200",
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
                }

            },
            "texts": {
                "fsWLabel": {
                    "x": 640,
                    "y": 170,
                    "fill": "#fffe00",
                    "font": "43px connemara_old_style_probold, FuturaPT-Book",
                    "text": "You won",
                    "anchorX": .5
                },
                "fsValue1": {
                    "x": 640,
                    "y": 200,
                    "fill": "#ffffff",
                    "font": "144px connemara_old_style_probold, FuturaPT-Book",
                    "text": "5",
                    "anchorX": .5
                },
                "fsCap": {
                    "x": 640,
                    "y": 200,
                    "fill": "#ffffff",
                    "font": "43px connemara_old_style_probold, FuturaPT-Book",
                    "text": "The maximum prize",
                    "anchorX": .5
                },
                "fsWLabel1": {
                    "x": 640,
                    "y": 370,
                    "fill": "#ffffff",
                    "font": "60px connemara_old_style_probold, FuturaPT-Book",
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
                "bgmsg": {
                    "name": "bgPreview",
                    "portrait":true,
                    "x": 0,
                    "y": 0
                },
                "logo": {
                    "name": "logo",
                    "x": 450,
                    "y": 200,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible":false
                },
                "bgPreview1": {
                    "name": "bgPreview1",
                    "x": 10,
                    "y": 120,
                    "texts": {
                        "pw1":{
                            "x": 300,
                            "y": 70,
                            "font": "20px connemara_old_style_probold, sans-serif",
                            "fill": "#58d53f",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "text": "Sticky Wilds inrcease the Multiplier",
                            "anchorX": 0.5,
                        },
                        "pw2":{
                            "x": 300,
                            "y": 90,
                            "font": "20px connemara_old_style_probold, sans-serif",
                            "fill": "#58d53f",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "text": "after each tumble",
                            "anchorX": 0.5,
                        },
                        "pw4":{
                            "x": 300,
                            "y": 280,
                            "font": "20px connemara_old_style_probold, sans-serif",
                            "fill": "#00af00",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align":"center",
                            "text": "4 Successive tumbles award you",
                            "anchorX": 0.5,
                        },
                        "pw41":{
                            "x": 300,
                            "y": 300,
                            "font": "20px connemara_old_style_probold, sans-serif",
                            "fill": "#00af00",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align":"center",
                            "text": "Free Spins",
                            "anchorX": 0.5,
                        },

                    }
                },
                "bgPreview2": {
                    "name": "bgPreview2",
                    "x": 647,
                    "y": 120,
                    "texts": {
                        "pw3":{
                            "x": 300,
                            "y": 60,
                            "font": "20px  connemara_old_style_probold, sans-serif",
                            "fill": "#00af00",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align":"center",
                            "text": "Mushroom Wilds add wilds and multipliers",
                            "anchorX": 0.5,
                        },

                        "pw5":{
                            "x": 300,
                            "y": 280,
                            "font": "20px  connemara_old_style_probold, sans-serif",
                            "fill": "#00af00",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align":"center",
                            "text": "4 or more successive Losses or Wins",
                            "anchorX": 0.5,
                        },
                        "pw51":{
                            "x": 300,
                            "y": 300,
                            "font": "20px  connemara_old_style_probold, sans-serif",
                            "fill": "#00af00",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align":"center",
                            "text": "award you Re-Spins",
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
                    "y": 635,
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
            "selectorY":210,
            "selectorX":310,
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
                    "y": 131,
                    "fill": "#ffffff",
                    "font": "24px FuturaPT-Book",
                    "text": "",
                    "align":"center",
                    "anchorX": .5
                },
                "msgF2": {
                    "x": 640,
                    "y": 165,
                    "fill": "#ffffff",
                    "font": "20px FuturaPT-Book",
                    "text": "",
                    "anchorX": .5
                },
                "msgF3": {
                    "x": 640,
                    "y": 189,
                    "fill": "#ffffff",
                    "font": "18px FuturaPT-Book",
                    "text": "",
                    "anchorX": .5
                },
                "msgF45": {
                    "x": 640,
                    "y": 218,
                    "fill": "#ffffff",
                    "font": "18px FuturaPT-Book",
                    "text": "",
                    "anchorX": .5
                },
                "priceF": {
                    "x": 640,
                    "y": 410,
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
    "licence":true,
    "isMobile":true,
    "newComm":true,
    "slotEngine":"IntegratedSlots",
    "transparentUI":true,
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
    "lineType": "MegaWayTumblingWinRainbow",
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
            "reelInterval": 110,
            "reelSecondMovementTime":0.65,
            "reelLoopInterval":.25,
            "reelPreMovement": 4,
            "reelPreMovementTime": .25,
            "reelBaseInterval": 1,
            "reelStopInterval": 1,
            "reelSpinBounceMeasure": 40,
            "reelSpinBounceTime": .28,
            "reelSpinBounceForce": 1.2
        },
        "uk":{
            "stopEnabled":false,
            "reelInterval": 75,
            "reelSecondMovementTime":0.3,
            "reelLoopInterval":.22,
            "reelPreMovement": 5,
            "reelPreMovementTime": .25,
            "reelBaseInterval": 1,
            "reelStopInterval": 1,
            "reelSpinBounceMeasure": 40,
            "reelSpinBounceTime": .28,
            "reelSpinBounceForce": 1.2
        },
        "de":{
            "stopEnabled":false,
            "reelInterval": 215,
            "reelSecondMovementTime":0.55,
            "reelLoopInterval":.25,
            "reelPreMovement": 5,
            "reelPreMovementTime": .3,
            "reelBaseInterval": 4,
            "reelStopInterval": 1,
            "reelSpinBounceMeasure": 40,
            "reelSpinBounceTime": .3,
            "reelSpinBounceForce": 1.2
        },
        "default":{
            "stopEnabled":true,
            "reelSecondMovementTime":.25,
            "reelLoopInterval":.20,
            "reelPreMovement": 4,
            "reelPreMovementTime": .2,
            "reelBaseInterval": 1,
            "reelStopInterval": 1,
            "reelSpinBounceMeasure": 40,
            "reelSpinBounceTime": .3,
            "reelSpinBounceForce": 1,
        }
    },
    "numIcon": 10,
    "loadTout": 30,
    "credits": "5000",
    "bet": "0.50",
    "animDelayAfterWild":1500,
    "freeRounds":"normal",
    "freeSpins":"RainbowMwFreeSpins",
    "_fsIcon": 1,
    "fsSpinDelay":750,
    "minFsSmbs":3,
    "scatterIcon": 10,
    "scatterType": "SubstScatter",
    "_twinReelsFeature":"normal",
    "wildType": "VikingTumblingWildReel",
    "wildNum": [13],
    "wildReelOrigin":1,
    "wildReelAnim":1,
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
            "description":"FS"
        },
    }
}
var lineConfig = {
    "win": {
    },
    "line": {
        "noCoinOnEachLine":10,
    }
}

var paytableAssets = {

    "pages": [

        //Game guide object
        {
            "gameguide": true,
            "title": "Rainbow Wilds MegaWays™ Game Rules",
            "rtp": [
                "95.82",
                "95.82",
                "95.82"
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
                            "bg": "rainbowWildsMegaways/img/symbol-00.png", //symbol image
                            "payout_values": true //Whether symbol has payout values

                        },

                        {

                            "id": "symbol_01",
                            "bg": "rainbowWildsMegaways/img/symbol-01.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_02",
                            "bg": "rainbowWildsMegaways/img/symbol-02.png",
                            "payout_values": true

                        }


                    ],

                    [

                        {

                            "id": "symbol_03",
                            "bg": "rainbowWildsMegaways/img/symbol-03.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_04",
                            "bg": "rainbowWildsMegaways/img/symbol-04.png",
                            "payout_values": true

                        }

                    ],

                    [
                        {

                            "id": "symbol_05",
                            "bg": "rainbowWildsMegaways/img/symbol-05.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_06",
                            "bg": "rainbowWildsMegaways/img/symbol-06.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_07",
                            "bg": "rainbowWildsMegaways/img/paytable/symbol-07.png",
                            "payout_values": true

                        }

                    ],

                    [

                        {
                            "id": "symbol_08",
                            "bg": "rainbowWildsMegaways/img/paytable/symbol-08.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_09",
                            "bg": "rainbowWildsMegaways/img/paytable/symbol-09.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_10",
                            "bg": "rainbowWildsMegaways/img/paytable/symbol-10.png",
                            "payout_values": true
                        },

                    ],
                    [

                        {
                            "id": "symbol_11",
                            "bg": "rainbowWildsMegaways/img/paytable/symbol-11.png",
                            "payout_values": false,
                            "text": [
                                "Normal Wild",
                                "Normal Wilds can appear on reel 2,3,4,5,6 during regular game and Free Spins.",
                                "Normal wilds can have multipliers.",
                                "Wilds substitutes all the icons."
                            ]
                        },

                    ],
                    [

                        {
                            "id": "symbol_12",
                            "bg": "rainbowWildsMegaways/img/paytable/symbol-12.png",
                            "payout_values": false,
                            "text": [
                                "Sticky Wild",
                                "A single Sticky Wild can appear on reel 2,3,4 during Free Spins only.",
                                "Its multiplier start from 1 and increases on each consecutive tumble.",
                                "The multiplier resets at the end of the win sequence.",
                                "Wilds substitutes all the icons."
                            ]
                        },

                    ],
                    [

                        {
                            "id": "symbol_13",
                            "bg": "rainbowWildsMegaways/img/paytable/symbol-13.png",
                            "payout_values": false,
                            "text": [
                                "Mushroom Wild",
                                "A single Mushroom Wild can appear on reel 3,4 during regular and Free Spins.",
                                "A Mushroom Wild can spread up to 3 Mushrooming Wilds on reels 2,3,4,5.",
                                "Normal Wilds multiplier increases by 1 when a Mushrooming Wild grows on the same reel.",
                                "Wilds substitutes all the icons."
                            ]
                        },

                    ],
                    [

                        {
                            "id" : "tumble_screenshot",
                            "bg" : "rainbowWildsMegaways/img/paytable/winways.jpg",
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
                            "bg" : "rainbowWildsMegaways/img/paytable/counter.png",
                            "text": [
                                "Free Spins are reached by having multiple successive tumbles. A minimum of 4 tumbles is required to trigger 8 Free Spins.",
                                "Each extra successive win after 4 awards 2 extra Free Spins, up to a maximum of 14.",
                            ],
                            "size": { //Optional field that sets image height & width in px

                                "height": "225",
                                "width":  "400"

                            }

                        }

                    ],


                    [
                        {

                            "id" : "FSStart",
                            "bg" : "rainbowWildsMegaways/img/paytable/counters.png",
                            "text": [
                                "You can get additional Free Spins from successive tumbles and losses.",
                                "The image shows the wins counter on top of the losses counter.",
                                "4 successive wins give 2 additional Free Spins, each successive win after 4 adds 1, maximum of 6. (counter shows just the first 4).",
                                "4 successive loosing tumbles give 2 additional Free Spins, each successive loss after 4 adds 1, no maximum limit. (counter shows just the first 4).",
                                "Last Free Spin cause the side meter to reset and awards the number of additional Spin shown on the text box."
                            ],
                            "size": { //Optional field that sets image height & width in px

                                "height": "300",
                                "width":  "295"

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

                    "bg": "rainbowWildsMegaways/img/paytable/winways.jpg",
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