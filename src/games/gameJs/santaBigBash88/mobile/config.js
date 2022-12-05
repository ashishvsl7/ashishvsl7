
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
        "winWayOb": "santaBigBash/img/loader/btg-megaways.png"
    },
    "loaderMc": {
        "staticLoaderLogo": {
            "sprite": "santaBigBash/img/logo.png",
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
        "sprite": "fonts/fontSBB.png",
        "font": "fonts/fontSBB.xml"
    },
    "bmpFontMW":{
        "sprite": "fonts/fontSBBMW.png",
        "font": "fonts/fontSBBMW.xml"
    },
    "bmpFontSmall":{
        "sprite": "fonts/fontSBB.png",
        "font": "fonts/fontSBB.xml"
    },
    "multiBmpFont":{
        "sprite": "fonts/multiplierSBB.png",
        "font": "fonts/multiplierSBB.xml"
    }
}

var extScripts={
    "webfont": "15px FuturaPT-Heavy",
    "webfont1": "15px FuturaPT-Book",
    "webfont2": "15px dr-agu",
    "webfont3": "25px dr-agu"
}
var gameAssets = {
    "assets": {
        "icon0": "santaBigBash/img/symbol-00.png",
        "icon1": "santaBigBash/img/symbol-01.png",
        "icon2": "santaBigBash/img/symbol-02.png",
        "icon3": "santaBigBash/img/symbol-03.png",
        "icon4": "santaBigBash/img/symbol-04.png",
        "icon5": "santaBigBash/img/symbol-05.png",
        "icon6": "santaBigBash/img/symbol-06.png",
        "icon7": "santaBigBash/img/symbol-07.png",
        "icon8": "santaBigBash/img/symbol-08.png",
        "icon9": "santaBigBash/img/symbol-09.png",
        "icon5GH": "santaBigBash/img/paytable/symbol-05.png",
        "icon6GH": "santaBigBash/img/paytable/symbol-06.png",
        "icon7GH": "santaBigBash/img/paytable/symbol-07.png",
        "icon8GH": "santaBigBash/img/paytable/symbol-08.png",
        "icon9GH": "santaBigBash/img/paytable/symbol-09.png",
        "icon10GH": "santaBigBash/img/paytable/symbol-10.png",
        "icon12GH": "santaBigBash/img/paytable/symbol-11.png",
        "icon10_2": "santaBigBash/img/symbol-10-128x280.png",
        "icon10_3": "santaBigBash/img/symbol-10-128x187.png",
        "icon10_4": "santaBigBash/img/symbol-10-128x140.png",
        "icon10_5": "santaBigBash/img/symbol-10-128x112.png",
        "icon10_6": "santaBigBash/img/symbol-10-128x94.png",
        "icon10_7": "santaBigBash/img/symbol-10-128x80.png",
        "icon12": "santaBigBash/img/symbol-12.png",
        "icon18": "santaBigBash/img/empty.png",
        "icon19": "santaBigBash/img/paytable/harp.png",
        "none": "santaBigBash/img/transparent.png",

        "smbFrame_2": "santaBigBash/img/frame-06.png",
        "smbFrame_3": "santaBigBash/img/frame-05.png",
        "smbFrame_4": "santaBigBash/img/frame-04.png",
        "smbFrame_5": "santaBigBash/img/frame-03.png",
        "smbFrame_6": "santaBigBash/img/frame-02.png",
        "smbFrame_7": "santaBigBash/img/frame-01.png",

        "smbFrame_7_2": "santaBigBash/img/frame-07-06.png",
        "smbFrame_7_3": "santaBigBash/img/frame-07-05.png",
        "smbFrame_7_4": "santaBigBash/img/frame-07-04.png",
        "smbFrame_7_5": "santaBigBash/img/frame-07-03.png",
        "smbFrame_7_6": "santaBigBash/img/frame-07-02.png",
        "smbFrame_7_7": "santaBigBash/img/frame-07-01.png",

        "smbBg_5_2":"santaBigBash/img/anim/symbol-05/tile-06.png",
        "smbBg_5_3":"santaBigBash/img/anim/symbol-05/tile-05.png",
        "smbBg_5_4":"santaBigBash/img/anim/symbol-05/tile-04.png",
        "smbBg_5_5":"santaBigBash/img/anim/symbol-05/tile-03.png",
        "smbBg_5_6":"santaBigBash/img/anim/symbol-05/tile-02.png",
        "smbBg_5_7":"santaBigBash/img/anim/symbol-05/tile-01.png",

        "smbBg_6_2":"santaBigBash/img/anim/symbol-06/tile-06.png",
        "smbBg_6_3":"santaBigBash/img/anim/symbol-06/tile-05.png",
        "smbBg_6_4":"santaBigBash/img/anim/symbol-06/tile-04.png",
        "smbBg_6_5":"santaBigBash/img/anim/symbol-06/tile-03.png",
        "smbBg_6_6":"santaBigBash/img/anim/symbol-06/tile-02.png",
        "smbBg_6_7":"santaBigBash/img/anim/symbol-06/tile-01.png",

        "bicon0": "santaBigBash/img/b-symbol-00.png",
        "bicon1": "santaBigBash/img/b-symbol-01.png",
        "bicon2": "santaBigBash/img/b-symbol-02.png",
        "bicon3": "santaBigBash/img/b-symbol-03.png",
        "bicon4": "santaBigBash/img/b-symbol-04.png",
        "bicon5": "santaBigBash/img/b-symbol-05.png",
        "bicon6": "santaBigBash/img/b-symbol-06.png",
        "bicon7": "santaBigBash/img/b-symbol-07.png",
        "bicon8": "santaBigBash/img/b-symbol-08.png",
        "bicon9": "santaBigBash/img/b-symbol-09.png",
        "bicon10": "santaBigBash/img/b-symbol-10.png",
        "bicon11": "santaBigBash/img/b-symbol-11.png",
        "bicon12": "santaBigBash/img/b-symbol-11.png",

        "bottomBar": "gui/message-bar.png",
        "bgPanel": "santaBigBash/img/bgPanel.png",
        "bgPanelFs": "santaBigBash/img/bgPanelFs.png",
        "bgPanelGame": "santaBigBash/img/bgPanel.png",
        "bgPreview":"santaBigBash/img/paytable/intro-page.jpg",
        "bgPreview1":"santaBigBash/img/paytable/intro1.png",
        "bgPreview2":"santaBigBash/img/paytable/intro2.png",

        "bg_r": "santaBigBash/img/bg/base-right.png",
        "bg_l": "santaBigBash/img/bg/base-left.png",
        "bg_b": "santaBigBash/img/bg/base-bottom.png",
        "bg_t": "santaBigBash/img/bg/base-top.png",
        "bg_m": "santaBigBash/img/bg/base-main.png",

        "bg_r_FS": "santaBigBash/img/bg/base-right_FS.png",
        "bg_l_FS": "santaBigBash/img/bg/base-left_FS.png",
        "bg_b_FS": "santaBigBash/img/bg/base-bottom_FS.png",
        "bg_t_FS": "santaBigBash/img/bg/base-top_FS.png",
        "bg_m_FS": "santaBigBash/img/bg/base-main_FS.png",
        "freeSpins":"santaBigBash/img/free-spins.png",
        "bigWin":"santaBigBash/img/big-win.png",
        "superWin":"santaBigBash/img/epic-win.png",
        "megaWin":"santaBigBash/img/ultra-win.png",
        "boxFS":"santaBigBash/img/total-win-box.png",
        "buttonBg":"gui/generic/img/desktop/png/cp-info-bar.png",
        "volOnButton": "gui/btnVolOn.png",
        "volOffButton": "gui/btnVolOff.png",
        "featurePanel":"santaBigBash/img/upgrader-pop-up.png",
        "bgAlpha":"santaBigBash/img/alpha.png",
        "freeSpinPanel": "santaBigBash/img/free-spinsH.png",
        "bgBlack":"santaBigBash/img/black.png",
        "freeRoundsPanel": "santaBigBash/img/free-roundsH.png",
        "p1": "santaBigBash/img/p1.png",
        "p2": "santaBigBash/img/p2.png",
        "p3": "santaBigBash/img/p3.png",
        "popupMc":"santaBigBash/img/popup-container.png"
    },
    "localizedAssets":{
    },
    "buttonsSpriteSheet": {
        "feature-Fn-btn": {
            "sprite": "santaBigBash/img/buyFeature/buy-fs-btn.png",
            "json": "santaBigBash/img/buyFeature/buy-fs-btn.png",
            "w": 177,
            "h": 70
        },
        "feature-Rn-btn": {
            "sprite": "santaBigBash/img/buyFeature/buy-reels-btn.png",
            "json": "santaBigBash/img/buyFeature/buy-reels-btn.png",
            "w": 177,
            "h": 70
        },
        "yesButton": {
            "sprite": "santaBigBash/img/yes-btn.png",
            "json": "santaBigBash/img/yes-btn.png",
            "w": 330/3,
            "h": 53
        },
        "noButton": {
            "sprite": "santaBigBash/img/no-btn.png",
            "json": "santaBigBash/img/no-btn.png",
            "w": 330/3,
            "h": 53
        },
        "check": {
            "sprite": "santaBigBash/img/radio-btns.png",
            "json": "santaBigBash/img/radio-btns.png",
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
            "json": "santaBigBash/img/buy-free-spin-btn.png",
            "sprite": "santaBigBash/img/buy-free-spin-btn.png",
            "w": 450/3,
            "h": 105
        },

    },
    "animations": {
        "anim0": {
            "json": "santaBigBash/img/anim/symbol-00.json",
            "sprite": "santaBigBash/img/anim/symbol-00.png"
        },
        "anim1": {
            "json": "santaBigBash/img/anim/symbol-01.json",
            "sprite": "santaBigBash/img/anim/symbol-01.png"
        },
        "anim2": {
            "json": "santaBigBash/img/anim/symbol-02.json",
            "sprite": "santaBigBash/img/anim/symbol-02.png"
        },
        "anim3": {
            "json": "santaBigBash/img/anim/symbol-03.json",
            "sprite": "santaBigBash/img/anim/symbol-03.png"
        },
        "anim4": {
            "json": "santaBigBash/img/anim/symbol-04.json",
            "sprite": "santaBigBash/img/anim/symbol-04.png"
        },
        "anim5": {
            "json": "santaBigBash/img/anim/symbol-05.json",
            "sprite": "santaBigBash/img/anim/symbol-05.png"
        },
        "anim6": {
            "json": "santaBigBash/img/anim/symbol-06.json",
            "sprite": "santaBigBash/img/anim/symbol-06.png"
        },
        "anim7": {
            "json": "santaBigBash/img/anim/symbol-07.json",
            "sprite": "santaBigBash/img/anim/symbol-07.png"
        },
        "anim8": {
            "json": "santaBigBash/img/anim/symbol-08.json",
            "sprite": "santaBigBash/img/anim/symbol-08.png"
        },
        "anim9": {
            "json": "santaBigBash/img/anim/symbol-09.json",
            "sprite": "santaBigBash/img/anim/symbol-09.png"
        },
        "anim10_2": {
            "json": "santaBigBash/img/anim/symbol-10-128x280.json",
            "sprite": "santaBigBash/img/anim/symbol-10-128x280.png"
        },
        "anim10_3": {
            "json": "santaBigBash/img/anim/symbol-10-128x187.json",
            "sprite": "santaBigBash/img/anim/symbol-10-128x187.png"
        },
        "anim10_4": {
            "json": "santaBigBash/img/anim/symbol-10-128x140.json",
            "sprite": "santaBigBash/img/anim/symbol-10-128x140.png"
        },
        "anim10_5": {
            "json": "santaBigBash/img/anim/symbol-10-128x112.json",
            "sprite": "santaBigBash/img/anim/symbol-10-128x112.png"
        },
        "anim10_6": {
            "json": "santaBigBash/img/anim/symbol-10-128x94.json",
            "sprite": "santaBigBash/img/anim/symbol-10-128x94.png"
        },
        "anim10_7": {
            "json": "santaBigBash/img/anim/symbol-10-128x80.json",
            "sprite": "santaBigBash/img/anim/symbol-10-128x80.png"
        },
        "anim12": {
            "json": "santaBigBash/img/anim/symbol-12.json",
            "sprite": "santaBigBash/img/anim/symbol-12.png"
        },
        "part-1": {
            "json": "santaBigBash/img/anim/bronze-coin.json",
            "sprite": "santaBigBash/img/anim/bronze-coin.png"
        },
        "part-2": {
            "json": "santaBigBash/img/anim/silver-coin.json",
            "sprite": "santaBigBash/img/anim/silver-coin.png"
        },
        "part-3": {
            "json": "santaBigBash/img/anim/gold-coin.json",
            "sprite": "santaBigBash/img/anim/gold-coin.png"
        },
        "f-part-1": {
            "json": "santaBigBash/img/anim/bronze-coin-frwrd.json",
            "sprite": "santaBigBash/img/anim/bronze-coin-frwrd.png"
        },
        "f-part-2": {
            "json": "santaBigBash/img/anim/silver-coin-frwrd.json",
            "sprite": "santaBigBash/img/anim/silver-coin-frwrd.png"
        },
        "f-part-3": {
            "json": "santaBigBash/img/anim/gold-coin-frwrd.json",
            "sprite": "santaBigBash/img/anim/gold-coin-frwrd.png"
        },
        "anchorIn_1":{
            "json": "santaBigBash/img/side-feature/bauble-01.json",
            "sprite": "santaBigBash/img/side-feature/bauble-01.png"
        },
        "anchorIn_2":{
            "json": "santaBigBash/img/side-feature/bauble-02.json",
            "sprite": "santaBigBash/img/side-feature/bauble-02.png"
        },
        "anchorIn_3":{
            "json": "santaBigBash/img/side-feature/bauble-03.json",
            "sprite": "santaBigBash/img/side-feature/bauble-03.png"
        },
        "anchorIn_4":{
            "json": "santaBigBash/img/side-feature/bauble-04.json",
            "sprite": "santaBigBash/img/side-feature/bauble-04.png"
        },
        "anchorIn_5":{
            "json": "santaBigBash/img/side-feature/bauble-05.json",
            "sprite": "santaBigBash/img/side-feature/bauble-05.png"
        },
        "anchorIn_6":{
            "json": "santaBigBash/img/side-feature/bauble-06.json",
            "sprite": "santaBigBash/img/side-feature/bauble-06.png"
        },
        "anchorIn_7":{
            "json": "santaBigBash/img/side-feature/bauble-07.json",
            "sprite": "santaBigBash/img/side-feature/bauble-07.png"
        },
        "anchorIn_8":{
            "json": "santaBigBash/img/side-feature/bauble-08.json",
            "sprite": "santaBigBash/img/side-feature/bauble-08.png"
        },
        "anchorIn_9":{
            "json": "santaBigBash/img/side-feature/bauble-09.json",
            "sprite": "santaBigBash/img/side-feature/bauble-09.png"
        },
        "anchorIn_10":{
            "json": "santaBigBash/img/side-feature/bauble-10.json",
            "sprite": "santaBigBash/img/side-feature/bauble-10.png"
        },
        "anchorIn_11":{
            "json": "santaBigBash/img/side-feature/bauble-11.json",
            "sprite": "santaBigBash/img/side-feature/bauble-11.png"
        },
        "anchorIn_12":{
            "json": "santaBigBash/img/side-feature/bauble-12.json",
            "sprite": "santaBigBash/img/side-feature/bauble-12.png"
        },
        "anchorIn_13":{
            "json": "santaBigBash/img/side-feature/bauble-13.json",
            "sprite": "santaBigBash/img/side-feature/bauble-13.png"
        },

        "anchorFsIn_1":{
            "json": "santaBigBash/img/side-feature/sf-01.json",
            "sprite": "santaBigBash/img/side-feature/sf-01.png"
        },
        "anchorFsIn_2":{
            "json": "santaBigBash/img/side-feature/sf-02.json",
            "sprite": "santaBigBash/img/side-feature/sf-02.png"
        },
        "anchorFsIn_3":{
            "json": "santaBigBash/img/side-feature/sf-03.json",
            "sprite": "santaBigBash/img/side-feature/sf-03.png"
        },
        "anchorFsIn_4":{
            "json": "santaBigBash/img/side-feature/sf-04.json",
            "sprite": "santaBigBash/img/side-feature/sf-04.png"
        },
        "anchorFsIn_5":{
            "json": "santaBigBash/img/side-feature/sf-05.json",
            "sprite": "santaBigBash/img/side-feature/sf-05.png"
        },
        "anchorFsIn_6":{
            "json": "santaBigBash/img/side-feature/sf-06.json",
            "sprite": "santaBigBash/img/side-feature/sf-06.png"
        },

        "smbBg_2":{
            "json": "santaBigBash/img/anim/tile-06.json",
            "sprite": "santaBigBash/img/anim/tile-06.png"
        },
        "smbBg_3":{
            "json": "santaBigBash/img/anim/tile-05.json",
            "sprite": "santaBigBash/img/anim/tile-05.png"
        },
        "smbBg_4":{
            "json": "santaBigBash/img/anim/tile-04.json",
            "sprite": "santaBigBash/img/anim/tile-04.png"
        },
        "smbBg_5":{
            "json": "santaBigBash/img/anim/tile-03.json",
            "sprite": "santaBigBash/img/anim/tile-03.png"
        },
        "smbBg_6":{
            "json": "santaBigBash/img/anim/tile-02.json",
            "sprite": "santaBigBash/img/anim/tile-02.png"
        },
        "smbBg_7":{
            "json": "santaBigBash/img/anim/tile-01.json",
            "sprite": "santaBigBash/img/anim/tile-01.png"
        },
        "lockIn":{
            "json": "santaBigBash/img/anim/lockFeature/lock-feature.json",
            "sprite": "santaBigBash/img/anim/lockFeature/lock-feature.png"
        },
        "rudIn_1":{
            "json": "santaBigBash/img/anim/rud/in-win-01.json",
            "sprite": "santaBigBash/img/anim/rud/in-win-01.png"
        },
        "rudIn_2":{
            "json": "santaBigBash/img/anim/rud/in-win-02.json",
            "sprite": "santaBigBash/img/anim/rud/in-win-02.png"
        },
        "rudAt_1":{
            "json": "santaBigBash/img/anim/rud/attack-01.json",
            "sprite": "santaBigBash/img/anim/rud/attack-01.png"
        },
        "rudAt_2":{
            "json": "santaBigBash/img/anim/rud/attack-02.json",
            "sprite": "santaBigBash/img/anim/rud/attack-02.png"
        },
        "fire":{
            "json": "santaBigBash/img/anim/fire-anim.json",
            "sprite": "santaBigBash/img/anim/fire-anim.png"
        },

    },
    "importantSounds": {
        "spinClick": {
            "name": "santaBigBash/sounds/spinClick.mp3",
            "volume": .1
        },
        "reelStop": {
            "name": "santaBigBash/sounds/reelStop.mp3",
            "volume":.4
        },
        "reelSound": {
            "name": "santaBigBash/sounds/reelSound.mp3",
            "volume":1
        },
        "coins": {
            "name": "santaBigBash/sounds/coins.mp3",
            "volume": 1
        },
        "iconPop": {
            "name": "santaBigBash/sounds/iconPop.mp3",
            "volume": 1.1
        },
        "winAmountFall": {
            "name": "santaBigBash/sounds/winAmountFall.mp3",
            "volume": .6
        }
    },
    "bgImportantSounds":{
        "bgSlot": {
            "name": "santaBigBash/sounds/bgl1.mp3",
            "volume": .8,
            "marker":true
        }
    },
    "sounds": {
        "click": {
            "name": "santaBigBash/sounds/click.mp3",
            "volume": .3
        },
        "multiplier": {
            "name": "santaBigBash/sounds/multiplier.mp3",
            "volume":  .8
        },
        "multiplier_1": {
            "name": "santaBigBash/sounds/multiplier_layer1.mp3",
            "volume":  .8
        },
        "multiplier_2": {
            "name": "santaBigBash/sounds/multiplier_layer2.mp3",
            "volume":  .8
        },
        "multiplier_3": {
            "name": "santaBigBash/sounds/multiplier_layer3.mp3",
            "volume":  .8
        },
        "lock": {
            "name": "santaBigBash/sounds/reelLock.mp3",
            "volume": 2
        },
        "anchor_activate1": {
            "name": "santaBigBash/sounds/anchor_activate1.mp3",
            "volume": 1
        },
        "anchor_activate2": {
            "name": "santaBigBash/sounds/anchor_activate2.mp3",
            "volume": 1
        },
        "anchor_activate3": {
            "name": "santaBigBash/sounds/anchor_activate3.mp3",
            "volume": 1
        },
        "anchor_activate4": {
            "name": "santaBigBash/sounds/anchor_activate4.mp3",
            "volume": 1
        },
        "additionalFs": {
            "name": "santaBigBash/sounds/fs_anchors_full.mp3",
            "volume": .6
        },
        "anchor_deactivate": {
            "name": "santaBigBash/sounds/anchor_deactivate.mp3",
            "volume": 1
        },
        "smbWin_0": {
            "name": "santaBigBash/sounds/smbWin_00.mp3",
            "multiple":["smbWin_1","smbWin_2","smbWin_3","smbWin_4"],
            "volume": 1
        },
        "smbWin_5": {
            "name": "santaBigBash/sounds/smbWin_05.mp3",
            "volume": 1
        },

        "smbWin_6": {
            "name": "santaBigBash/sounds/smbWin_06.mp3",
            "volume": 1
        },
        "smbWin_7": {
            "name": "santaBigBash/sounds/smbWin_07.mp3",
            "volume": 1
        },
        "smbWin_8": {
            "name": "santaBigBash/sounds/smbWin_08.mp3",
            "volume": 1
        },
        "smbWin_9": {
            "name": "santaBigBash/sounds/smbWin_09.mp3",
            "volume": 1
        },
        "smbWin_10": {
            "name": "santaBigBash/sounds/smbWin_10.mp3",
            "volume": 2
        },
        "winBg_0": {
            "name": "santaBigBash/sounds/centralWin/win1.mp3",
            "volume": 0
        },
        "winBg_1": {
            "name": "santaBigBash/sounds/centralWin/win2.mp3",
            "volume":  .6
        },
        "winBg_2": {
            "name": "santaBigBash/sounds/centralWin/win3.mp3",
            "volume":  .6
        },
        "winBg_3": {
            "name": "santaBigBash/sounds/centralWin/win4.mp3",
            "volume":  .6
        },
        "winBg_4": {
            "name": "santaBigBash/sounds/centralWin/win5.mp3",
            "volume":  .6
        },
        "winBg_5": {
            "name": "santaBigBash/sounds/centralWin/win6.mp3",
            "volume":  .6
        },
        "winBg_6": {
            "name": "santaBigBash/sounds/centralWin/bigWin.mp3",
            "volume":  .8
        },
        "winBg_7": {
            "name": "santaBigBash/sounds/centralWin/superBigWin.mp3",
            "volume":   .8
        },
        "winBg_8": {
            "name": "santaBigBash/sounds/centralWin/megaBigWin.mp3",
            "volume":  .8
        },
        "winBgS_6": {
            "name": "santaBigBash/sounds/centralWin/bigWin.mp3",
            "volume":  .8
        },
        "winBgS_7": {
            "name": "santaBigBash/sounds/centralWin/superBigWin.mp3",
            "volume":   .8
        },
        "winBgS_8": {
            "name": "santaBigBash/sounds/centralWin/megaBigWin.mp3",
            "volume": .8
        },
        "fsWon": {
            "name": "santaBigBash/sounds/introFs.mp3",
            "volume": 1
        },
        "incWin": {
            "name": "santaBigBash/sounds/counter.mp3",
            "volume": .6,
            "loop": true
        },
        "winPanel": {
            "name": "santaBigBash/sounds/winScreen.mp3",
            "volume": 1
        },
        "tumble_0": {
            "name": "santaBigBash/sounds/tumbling.mp3",
            "volume": 1.1,
            "multiple":["tumble_1","tumble_2","tumble_3","tumble_4","tumble_5","tumble_6"]
        },
        "harpFS": {
            "name": "santaBigBash/sounds/harpwin_extraFS.mp3",
            "volume": 1
        },
        "harpPos": {
            "name": "santaBigBash/sounds/harpwin_extraStalkPosition.mp3",
            "volume": .3
        },
        "harpWild": {
            "name": "santaBigBash/sounds/harpwin_wilds.mp3",
            "volume": .3
        },
        "leaves1": {
            "name": "santaBigBash/sounds/bauble_01.mp3",
            "volume": .6
        },
        "leaves2": {
            "name": "santaBigBash/sounds/bauble_01.mp3",
            "volume": .6
        },
        "leaves3": {
            "name": "santaBigBash/sounds/bauble_01.mp3",
            "volume": .6
        },
        "leaves4": {
            "name": "santaBigBash/sounds/bauble_01.mp3",
            "volume": .6
        },
        "leaves5": {
            "name": "santaBigBash/sounds/bauble_05.mp3",
            "volume": .6
        },
        "leaves6": {
            "name": "santaBigBash/sounds/bauble_06.mp3",
            "volume": .6
        },
        "leaves7": {
            "name": "santaBigBash/sounds/bauble_07.mp3",
            "volume": .6
        },
        "leaves8": {
            "name": "santaBigBash/sounds/bauble_08.mp3",
            "volume": .6
        },
        "leaves9": {
            "name": "santaBigBash/sounds/bauble_09.mp3",
            "volume": .6
        },
        "leaves10": {
            "name": "santaBigBash/sounds/bauble_10.mp3",
            "volume": .6
        },
        "leaves11": {
            "name": "santaBigBash/sounds/bauble_11.mp3",
            "volume": .6
        },
        "leaves12": {
            "name": "santaBigBash/sounds/bauble_12.mp3",
            "volume": .6
        },
        "leaves13": {
            "name": "santaBigBash/sounds/bauble_13.mp3",
            "volume": .6
        },
        "bean": {
            "name": "santaBigBash/sounds/bean.mp3",
            "volume": 1
        },
        "rudolphEnter":{
            "name": "santaBigBash/sounds/rudolphEnter.mp3",
            "volume": 1
        },
        "rudolphHeadbutt":{
            "name": "santaBigBash/sounds/rudolphHeadbutt.mp3",
            "volume": 1
        }
    },
    "bgSounds": {
        "bgSlot1": {
            "name": "santaBigBash/sounds/bgl2.mp3",
            "volume": 0,
            "marker":true
        },
            "bgSlot5": {
            "name": "santaBigBash/sounds/bgl3.mp3",
            "volume": 0,
            "marker":true
        },
            "bgSlot7": {
            "name": "santaBigBash/sounds/bgl4.mp3",
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
        "frameFS": {
            "visible":false,
            "portrait":true,
            "graphAsset": {
                "bgf": {
                    "name": "bg_m_FS",
                    "portrait": true,
                    "x": 256,
                    "y": 72
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
        "bg": {
            "visible":false,
            "portrait":true,
            "graphAsset": {
                "bg": {
                    "name": "bg_r",
                    "portrait": true,
                    "x": 1025,
                    "y": 72
                },
                "bg1": {
                    "name": "bg_l",
                    "portrait": true,
                    "x": 0,
                    "y": 72
                }
            },
            "animAsset":{
                "fire":{
                    "name": "fire",
                    "x": 123,
                    "y": 480,
                    "anchorX": .5,
                    "anchorY": .5,
                    "fps":20

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
                    "x": 1025,
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
            "portrait":true,
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
            },
        },
        "buyFeature":{
            "buttons": {
                "buyFeature": {
                    "visible":false,
                    "name": "buyFeature",
                    "x": 1131,
                    "y": 65,
                    "evt": "doBuyFeature",
                    "texts": {
                        "txt": {
                            "x": 0,
                            "y": -5,
                            "font": "20px  dr-agu,Arial, Helvetica sans-serif",
                            "fill": "#ffffff",
                            "stroke": "#000000",
                            "stroke_tick": 2,
                            "text": "",
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
            "graphAsset": {
                "anchor1_In": {
                    "visible": true,
                    "name": "anchorIn_1",
                    "x": 1010-0,
                    "y": 510
                },
                "anchor2_In": {
                    "visible": true,
                    "name": "anchorIn_2",
                    "x": 1050-10,
                    "y": 490
                },
                "anchor3_In": {
                    "visible": true,
                    "name": "anchorIn_3",
                    "x": 1095-10,
                    "y": 482
                },
                "anchor4_In": {
                    "visible": true,
                    "name": "anchorIn_4",
                    "x": 1140-10,
                    "y": 452
                },
                "anchor5_In": {
                    "visible": true,
                    "name": "anchorIn_5",
                    "x": 1104-10,
                    "y": 419
                },
                "anchor6_In": {
                    "visible": true,
                    "name": "anchorIn_6",
                    "x": 1062-10,
                    "y": 395
                },
                "anchor7_In": {
                    "visible": true,
                    "name": "anchorIn_7",
                    "x": 1024-10,
                    "y": 363
                },
                "anchor8_In": {
                    "visible": true,
                    "name": "anchorIn_8",
                    "x": 1057-60,
                    "y": 295
                },
                "anchor9_In": {
                    "visible": true,
                    "name": "anchorIn_9",
                    "x": 1120-60,
                    "y": 270
                },
                "anchor10_In": {
                    "visible": true,
                    "name": "anchorIn_10",
                    "x": 1160-40,
                    "y": 220
                },
                "anchor11_In": {
                    "visible": true,
                    "name": "anchorIn_11",
                    "x": 1100-30,
                    "y": 175
                },
                "anchor12_In": {
                    "visible": true,
                    "name": "anchorIn_12",
                    "x": 1020-20,
                    "y": 132
                },
                "anchor13_In": {
                    "visible": true,
                    "name": "anchorIn_13",
                    "x": 1064-20,
                    "y": 62
                },

            }
        },
        "freeSpinAccumulatorFs": {
            "visible": false,
            "graphAsset": {
                "anchor1_In": {
                    "visible": true,
                    "name": "anchorFsIn_1",
                    "x": 1104,
                    "y": 365,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "anchor2_In": {
                    "visible": false,
                    "name": "anchorFsIn_2",
                    "x": 1104,
                    "y": 365,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "anchor3_In": {
                    "visible": false,
                    "name": "anchorFsIn_3",
                    "x": 1104,
                    "y": 365,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "anchor4_In": {
                    "visible": false,
                    "name": "anchorFsIn_4",
                    "x": 1104,
                    "y": 365,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "anchor5_In": {
                    "visible": false,
                    "name": "anchorFsIn_5",
                    "x": 1104,
                    "y": 365,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "anchor6_In": {
                    "visible": false,
                    "name": "anchorFsIn_6",
                    "x": 1104,
                    "y": 365,
                    "anchorX": .5,
                    "anchorY": .5
                }
            }
        },
        "buttonFg":{
        },
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
                    "y": 20,
                    "fill": "#ffffff",
                    "font": "15px Futura ,Arial",
                    "text": "Free Rounds:",
                    "anchorX":  0.5
                },
                "frValue": {
                    "x": 300,
                    "y": 32,
                    "fill": "#ffffff",
                    "font": "22px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                },
                "frTotWonLabel": {
                    "x": 1020,
                    "y": 20,
                    "fill": "#ffffff",
                    "font": "15px Futura ,Arial",
                    "text": "Total won:",
                    "anchorX":  0.5
                },
                "frTotWonValue": {
                    "x": 1020,
                    "y": 32,
                    "fill": "#ffffff",
                    "font": "22px Futura ,Arial",
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
                    "name": "bgAlpha",
                    "x": 640,
                    "y": 0,
                    "alpha":0
                }
            },
            "texts": {
                "fsLabel": {
                    "x": 134,
                    "y": 208,
                    "fill": "#ffffff",
                    "font": "17px Futura ,Arial",
                    "text": "Free Spins",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsValue": {
                    "x": 134,
                    "y": 228,
                    "fill": "#ffffff",
                    "font": "27px Futura ,Arial",
                    "text": "",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "totWonLabel": {
                    "x": 134,
                    "y": 430,
                    "fill": "#ffffff",
                    "font": "17px Futura ,Arial",
                    "text": "Total won",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "totWonValue": {
                    "x": 134,
                    "y": 450,
                    "fill": "#ffffff",
                    "font": "27px Futura ,Arial",
                    "text": "",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsMultValue":{
                    "x": 134,
                    "y": 345,
                    "bmpFont": "multiBmpFont",
                    "size": "60",
                    "text": "",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsmultT":{
                    "x": 134,
                    "y": 325,
                    "font": "17px Futura ,Arial",
                    "fill": "#ffffff",
                    "text": "Multiplier",
                    "align":"center",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsAdditional":{
                    "x": 180,
                    "y": 234,
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
                    "x": 244,
                    "y": 55
                },
                "lockIn_1": {
                    "name": "lockIn",
                    "visible":false,
                    "x": 244+ 128,
                    "y": 55
                },
                "lockIn_2": {
                    "name": "lockIn",
                    "visible":false,
                    "x": 244+ 2*128,
                    "y": 55
                },
                "lockIn_3": {
                    "name": "lockIn",
                    "visible":false,
                    "x": 244+ 3*128,
                    "y": 55
                },
                "lockIn_4": {
                    "name": "lockIn",
                    "visible":false,
                    "x": 244+ 4*128,
                    "y": 55
                },
                "lockIn_5": {
                    "name": "lockIn",
                    "visible":false,
                    "x": 244+ 5*128,
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
                    "y": 350,
                    "scaleX":1,
                    "scaleY":1,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "rudIn_1": {
                    "visible":true,
                    "name": "rudIn_1",
                    "x": -150,
                    "y": 400,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "rudIn_2": {
                    "visible":false,
                    "name": "rudIn_2",
                    "x": 230,
                    "y": 400,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "rudAt_1": {
                    "visible":false,
                    "name": "rudAt_1",
                    "x": 230,
                    "y": 400,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "rudAt_2": {
                    "visible":false,
                    "name": "rudAt_2",
                    "x": 230,
                    "y": 400,
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
                    "y": 310,
                    "font": "35px dr-agu, sans-serif",
                    "fill": "#58d53f",
                    "stroke": "#000000",
                    "stroke_tick": 4,
                    "text": "RUDIE THE REINDEER",
                    "anchorX": 0.5,
                },
                "harptext":{
                    "x": 640,
                    "y": 350,
                    "font": "35px dr-agu, sans-serif",
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
            "portrait":true,
            "graphAsset": {
                "fsP": {
                    "name": "bgAlpha",
                    "x": 640,
                    "y": 0,
                    "alpha":0
                }
            },
            "texts":{
                "winWaysNum":{
                    "x": 119,
                    "y": 132,
                    "bmpFont": "bmpFontMW",
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
                    "y": 360,
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
                "fsCap": {
                    "x": 640,
                    "y": 360,
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
                    "y": 500,
                    "bmpFont": "bmpFont",
                    "size": "30",
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
                    "portrait":true,
                    "name": "bgPreview",
                    "x": 0,
                    "y": 0
                },
                "logo": {
                    "name": "logo",
                    "x": 640,
                    "y": 100,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "bgPreview1": {
                    "name": "bgPreview1",
                    "x": 10,
                    "y": 120,
                    "texts": {
                        "pw1":{
                            "x": 245,
                            "y": 110,
                            "font": "25px dr-agu, sans-serif",
                            "fill": "#ec0d2d",
                            "text": "FREE SPINS",
                            "anchorX": 0.5,
                        },
                        "pw2":{
                            "x": 245,
                            "y": 140,
                            "font": "15px dr-agu, sans-serif",
                            "fill": "#ffffff",
                            "align":"center",
                            "text": "ACTIVATE THE MAGIC BAUBLES",
                            "anchorX": 0.5,
                        },
                        "pw3":{
                            "x": 245,
                            "y": 170,
                            "font": "15px dr-agu, sans-serif",
                            "fill": "#FFFFFF",
                            "align":"center",
                            "text": "AND TRIGGER FREE SPINS",
                            "anchorX": 0.5,
                        },

                        "pw4":{
                            "x": 245,
                            "y": 220,
                            "font": "25px dr-agu, sans-serif",
                            "fill": "#ec0d2d",
                            "align":"center",
                            "text": "SUCCESSIVE TUMBLES",
                            "anchorX": 0.5,
                        },
                        "pw5":{
                            "x": 245,
                            "y": 250,
                            "font": "15px dr-agu, sans-serif",
                            "fill": "#ffffff",
                            "align":"center",
                            "text": "HELPS TRIGGER THE MAGIC BAUBLES",
                            "anchorX": 0.5,
                        },
                        "pw6":{
                            "x": 245,
                            "y": 310,
                            "font": "30px dr-agu, sans-serif",
                            "fill": "#ec0d2d",
                            "align":"center",
                            "text": "MAX WIN",
                            "anchorX": 0.5,
                        },
                        "pw61":{
                            "x": 245,
                            "y": 340,
                            "font": "30px dr-agu, sans-serif",
                            "fill": "#4bcc0a",
                            "align":"center",
                            "text": "x25000",
                            "anchorX": 0.5,
                        }
                    }
                },
                "bgPreview2": {
                    "name": "bgPreview2",
                    "x": 647,
                    "y": 110,
                    "texts": {
                        "pw4":{
                            "x": 275,
                            "y": 110,
                            "font": "25px  dr-agu, sans-serif",
                            "fill": "#ec0d2d",
                            "align":"center",
                            "text": "RUDIE THE REINDEER",
                            "anchorX": 0.5,
                        },
                        "pw42":{
                            "x": 295,
                            "y": 130,
                            "font": "25px  dr-agu, sans-serif",
                            "fill": "#ec0d2d",
                            "align":"center",
                            "text": "AND THE MAGIC BAUBLES",
                            "anchorX": 0.5,
                        },
                        "pw5":{
                            "x": 320,
                            "y": 160,
                            "font": "15px dr-agu, sans-serif",
                            "fill": "#FFFFFF",
                            "align":"center",
                            "text": "HELPS YOU CLIMBING",
                            "anchorX": 0.5,
                        },
                        "pw51":{
                            "x": 320,
                            "y": 180,
                            "font": "15px  dr-agu, sans-serif",
                            "fill": "#FFFFFF",
                            "align":"center",
                            "text": "THE CHRISTMAS TREE",
                            "anchorX": 0.5,
                        },
                        "pw6":{
                            "x": 390,
                            "y": 280,
                            "font": "25px  dr-agu, sans-serif",
                            "fill": "#ec0d2d",
                            "align":"center",
                            "text": "REELS LOCK AT 7",
                            "anchorX": 0.5,
                        },
                        "pw62":{
                            "x": 390,
                            "y": 340,
                            "font": "15px  dr-agu, sans-serif",
                            "fill": "#FFFFFF",
                            "align":"center",
                            "text": "DURING FREE SPINS",
                            "anchorX": 0.5,
                        },
                        "pw72":{
                            "x": 390,
                            "y": 310,
                            "font": "20px  dr-agu, sans-serif",
                            "fill": "#ec0d2d",
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
                    "y": 553,
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
                    "y": 553,
                    "evt": "doKo"
                },
                "ok": {
                    "name": "yesButton",
                    "x": 640,
                    "anchorX": .5,
                    "y": 553,
                    "scaleX":1.5,
                    "scaleY":1.5,
                    "evt": "doOk",
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
                    "scaleX":1.4,
                    "scaleY":1.4
                }
            },
            "texts": {
                "msgFR1": {
                    "x": 640,
                    "y": 210,
                    "fill": "#ffffff",
                    "font": "26px FuturaPT-Book",
                    "text": "",
                    "anchorX": .5
                },
                "msgFR2": {
                    "x": 640,
                    "y": 250,
                    "fill": "#ffffff",
                    "font": "24px FuturaPT-Book",
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
            "textYShift":2,
            "graphAsset": {
                "bgmsg": {
                    "name": "bgAlpha",
                    "x": 640,
                    "y": 320,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "generic": {
                    "name": "featurePanel",
                    "x": 640,
                    "y": 350,
                    "anchorX": .5,
                    "anchorY": .5,
                    "scaleX":1.5,
                    "scaleY":1.5
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
                    "y": 455,
                    "fill": "#ffffff",
                    "font": "18px FuturaPT-Book",
                    "text": "Free spins with additional multiplier and more harp events",
                    "anchorX": .5
                },
                "priceF": {
                    "x": 640,
                    "y": 405,
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
                    "y": 640,
                    "scaleX":1.5,
                    "scaleY":1.5,
                    "evt": "doOkMWJ",
                },
                "no": {
                    "name": "noButton",
                    "x": 775,
                    "y": 640,
                    "scaleX":1.5,
                    "scaleY":1.5,
                    "evt": "doKo",

                },
                "ok": {
                    "name": "yesButton",
                    "x": 640,
                    "anchorX": .5,
                    "y": 640,
                    "scaleX":1.5,
                    "scaleY":1.5,
                    "evt": "doOk",

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
    "slotEngine":"IntegratedSlots",
    "engineNumbers":0,
    "newUI":true,
    "newComm":true,
    "log":true,
    "canSwipe":false,
    "fastPlayEnable":true,
    "comment_preview":"enable feature preview screen",
    "preview":true,
    "previewTout":45000,
    "spinType": "SBBTumblingSpin",
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
    "lineType": "MegaWayTumblingWinSBB",
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
            "reelSecondMovementTime":0.45,
            "reelLoopInterval":.20,
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
    "freeSpins":"SBBMwFreeSpins",
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
            "description":"Beans Stalk increase +4"
        },
        "ch5":{
            "value":"",
            "description":"Beans Stalk increase +8"
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
            "title": "Santa's Big Bash Megaways™ Game Rules",
            "rtp": [
                "96.04",
                "96.04",
                "96.04"
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
                            "bg": "santaBigBash/img/symbol-00.png", //symbol image
                            "payout_values": true //Whether symbol has payout values

                        },

                        {

                            "id": "symbol_01",
                            "bg": "santaBigBash/img/symbol-01.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_02",
                            "bg": "santaBigBash/img/symbol-02.png",
                            "payout_values": true

                        }


                    ],

                    [

                        {

                            "id": "symbol_03",
                            "bg": "santaBigBash/img/symbol-03.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_04",
                            "bg": "santaBigBash/img/symbol-04.png",
                            "payout_values": true

                        }

                    ],

                    [
                        {

                            "id": "symbol_05",
                            "bg": "santaBigBash/img/paytable/symbol-05.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_06",
                            "bg": "santaBigBash/img/paytable/symbol-06.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_07",
                            "bg": "santaBigBash/img/paytable/symbol-07.png",
                            "payout_values": true

                        }

                    ],

                    [

                        {
                            "id": "symbol_08",
                            "bg": "santaBigBash/img/paytable/symbol-08.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_09",
                            "bg": "santaBigBash/img/paytable/symbol-09.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_10",
                            "bg": "santaBigBash/img/paytable/symbol-10.png",
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
                            "id": "symbol_11",
                            "bg": "santaBigBash/img/paytable/symbol-11.png",
                            "payout_values": false,
                            "text": [
                                "Magic Baubles",
                                "Can only appear on tumbles during base game.",
                                "Maximum number of Magic Baubles symbols is 3.",
                                "Each symbol adds 1 to 3 position on your way to Free Spins."
                            ]
                        }
                    ],
                    [

                        {
                            "id": "symbol_12",
                            "bg": "santaBigBash/img/paytable/harp.png",
                            "payout_values": false,
                            "text": [
                                "Rudie the Reindeer",
                                "Rudie the Reindeer in the base game can award:",
                                "Up to 4 additional wilds on tumbles.",
                                "Up to 3 positions on the Christmas tree.",
                                "Single Re-Spin without loosing the Christmas tree position.",
                                "Rudie the Reindeer during Free Spins can award:",
                                "Up to 4 additional wilds on tumbles.",
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
                            "bg" : "santaBigBash/img/paytable/winways.png",
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
                            "bg" : "santaBigBash/img/paytable/fs.png",
                            "text": [
                                "8 Freespins are triggered by turning at least 8 Baubles on the Christmas tree on.",
                                "Each successive winnings increase 1 position, Random events like Rudie the Reindeed or Magic Baubles might add positions.",
                                "8 positions award 8 Free Spins.",
                                "9 positions award 9 Free Spins.",
                                "10 positions award 10 Free Spins, x2 multiplier.",
                                "11 positions award 11 Free Spins, x2 multiplier.",
                                "12 positions award 12 Free Spins, x3 multiplier.",
                                "13 positions award 12 Free Spins, x3 multiplier, bigger Rudie the Reindeed chance.",
                                "During Free Spins, reels with 7 symbols lock at that number of symbols for the entirety of Free Spins feature.",
                                "When a reel locks it awards 1 additional multiplier.",
                                "On the last Free Spin, locking reels award 1 additional Free Spin that can also re-trigger.",
                                "The current multiplier applies to any win earned while that multiplier is in effect, increases will affect all subsequent wins."
                            ],
                            "size": { //Optional field that sets image height & width in px

                                "height": "400",
                                "width":  "250"

                            }

                        }

                    ],


                    [

                        {

                            "id" : "FSSADDtart",
                            "bg" : "santaBigBash/img/paytable/fsAdd.png",
                            "text": [
                                "Additional Freespins are also reached by having multiple successive tumbles. A minimum of 4 tumbles is required to trigger additional 2 Free spins.",
                                "Each extra successive win after 4 awards 1 extra Free Spins, up to a maximum of 4."
                            ],
                            "size": { //Optional field that sets image height & width in px

                                "height": "400",
                                "width":  "160"

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

                    "bg": "santaBigBash/img/paytable/winways.png",
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