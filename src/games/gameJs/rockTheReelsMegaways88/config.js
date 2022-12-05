
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
        "winWayOb": "rockTheReelsMegaways/img/loader/btg-megaways.png"
    },
    "loaderMc": {
        "staticLoaderLogo": {
            "sprite": "rockTheReelsMegaways/img/intro-logo.png",
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
        "sprite": "fonts/fontRR.png",
        "font": "fonts/fontRR.xml"
    },
    "bmpFontSmall":{
        "sprite": "fonts/fontNewts.png",
        "font": "fonts/fontNewts.xml"
    },
    "multiBmpFont":{
        "sprite": "fonts/multiplyerRR.png",
        "font": "fonts/multiplyerRR.xml"
    }
}

var extScripts={
    "webfont": "15px FuturaPT-Heavy",
    "webfont1": "15px FuturaPT-Book",
    "webfont2": "15px JockeyOne-Regular",
    "webfont3": "25px JockeyOne-Regular"
}
var gameAssets = {
    "assets": {
        "icon0": "rockTheReelsMegaways/img/symbol-00.png",
        "icon1": "rockTheReelsMegaways/img/symbol-01.png",
        "icon2": "rockTheReelsMegaways/img/symbol-02.png",
        "icon3": "rockTheReelsMegaways/img/symbol-03.png",
        "icon4": "rockTheReelsMegaways/img/symbol-04.png",
        "icon5": "rockTheReelsMegaways/img/symbol-05.png",
        "icon6": "rockTheReelsMegaways/img/symbol-06.png",
        "icon7": "rockTheReelsMegaways/img/symbol-07.png",
        "icon8": "rockTheReelsMegaways/img/symbol-08.png",
        "icon9": "rockTheReelsMegaways/img/symbol-09.png",
        "icon10": "rockTheReelsMegaways/img/symbol-10.png",
        "icon11": "rockTheReelsMegaways/img/symbol-11.png",
        "icon17": "rockTheReelsMegaways/img/symbol-11.png",

        "icon8GH": "rockTheReelsMegaways/img/paytable/symbol-08.png",
        "icon9GH": "rockTheReelsMegaways/img/paytable/symbol-09.png",
        "icon10GH": "rockTheReelsMegaways/img/paytable/symbol-10.png",
        "icon11GH": "rockTheReelsMegaways/img/paytable/symbol-11.png",
        "icon12GH": "rockTheReelsMegaways/img/paytable/symbol-12.png",
        "icon13GH": "rockTheReelsMegaways/img/paytable/symbol-13.png",

        "icon12": "rockTheReelsMegaways/img/symbol-12.png",
        "icon13": "rockTheReelsMegaways/img/symbol-13.png",
        "icon14": "rockTheReelsMegaways/img/symbol-14.png",
        "icon15": "rockTheReelsMegaways/img/symbol-15.png",
        "icon16": "rockTheReelsMegaways/img/symbol-16.png",

        "icon18": "rockTheReelsMegaways/img/empty.png",
        "icon19": "rockTheReelsMegaways/img/harp.png",
        "none": "rockTheReelsMegaways/img/transparent.png",

        "smbBg_0_2": "rockTheReelsMegaways/img/tiles/tile-00-07.png",
        "smbBg_0_3": "rockTheReelsMegaways/img/tiles/tile-00-06.png",
        "smbBg_0_4": "rockTheReelsMegaways/img/tiles/tile-00-05.png",
        "smbBg_0_5": "rockTheReelsMegaways/img/tiles/tile-00-04.png",
        "smbBg_0_6": "rockTheReelsMegaways/img/tiles/tile-00-03.png",
        "smbBg_0_7": "rockTheReelsMegaways/img/tiles/tile-00-02.png",


        "smbBg_5_2": "rockTheReelsMegaways/img/tiles/tile-05-07.png",
        "smbBg_5_3": "rockTheReelsMegaways/img/tiles/tile-05-06.png",
        "smbBg_5_4": "rockTheReelsMegaways/img/tiles/tile-05-05.png",
        "smbBg_5_5": "rockTheReelsMegaways/img/tiles/tile-05-04.png",
        "smbBg_5_6": "rockTheReelsMegaways/img/tiles/tile-05-03.png",
        "smbBg_5_7": "rockTheReelsMegaways/img/tiles/tile-05-02.png",

        "smbBg_6_2": "rockTheReelsMegaways/img/tiles/tile-05-07.png",
        "smbBg_6_3": "rockTheReelsMegaways/img/tiles/tile-05-06.png",
        "smbBg_6_4": "rockTheReelsMegaways/img/tiles/tile-05-05.png",
        "smbBg_6_5": "rockTheReelsMegaways/img/tiles/tile-05-04.png",
        "smbBg_6_6": "rockTheReelsMegaways/img/tiles/tile-05-03.png",
        "smbBg_6_7": "rockTheReelsMegaways/img/tiles/tile-05-02.png",



        "smbBg_7": "rockTheReelsMegaways/img/tiles/symbol-07-tile.png",
        "smbBg_8": "rockTheReelsMegaways/img/tiles/symbol-08-tile.png",
        "smbBg_10": "rockTheReelsMegaways/img/tiles/symbol-10-tile.png",
        "smbBg_11": "rockTheReelsMegaways/img/tiles/symbol-11-tile.png",
        "smbBg_12": "rockTheReelsMegaways/img/tiles/symbol-12-tile.png",


        "smbFrame_0_2": "rockTheReelsMegaways/img/frames/frame-128x252.png",
        "smbFrame_0_3": "rockTheReelsMegaways/img/frames/frame-128x168.png",
        "smbFrame_0_4": "rockTheReelsMegaways/img/frames/frame-128x126.png",
        "smbFrame_0_5": "rockTheReelsMegaways/img/frames/frame-128x101.png",
        "smbFrame_0_6": "rockTheReelsMegaways/img/frames/frame-128x84.png",
        "smbFrame_0_7": "rockTheReelsMegaways/img/frames/frame-128x72.png",


        "smbFrame_9_2": "rockTheReelsMegaways/img/frames/frame-128x252.png",
        "smbFrame_9_3": "rockTheReelsMegaways/img/frames/frame-128x168.png",
        "smbFrame_9_4": "rockTheReelsMegaways/img/frames/frame-128x126.png",
        "smbFrame_9_5": "rockTheReelsMegaways/img/frames/frame-128x101.png",
        "smbFrame_9_6": "rockTheReelsMegaways/img/frames/frame-128x84.png",
        "smbFrame_9_7": "rockTheReelsMegaways/img/frames/frame-128x72.png",


        "smbFrame_10_2": "rockTheReelsMegaways/img/frames/symbol-10-frame-128x252.png",
        "smbFrame_10_3": "rockTheReelsMegaways/img/frames/symbol-10-frame-128x168.png",
        "smbFrame_10_4": "rockTheReelsMegaways/img/frames/symbol-10-frame-128x126.png",
        "smbFrame_10_5": "rockTheReelsMegaways/img/frames/symbol-10-frame-128x101.png",
        "smbFrame_10_6": "rockTheReelsMegaways/img/frames/symbol-10-frame-128x84.png",
        "smbFrame_10_7": "rockTheReelsMegaways/img/frames/symbol-10-frame-128x72.png",

        "smbFrame_11_2": "rockTheReelsMegaways/img/frames/symbol-11-frame-128x252.png",
        "smbFrame_11_3": "rockTheReelsMegaways/img/frames/symbol-11-frame-128x168.png",
        "smbFrame_11_4": "rockTheReelsMegaways/img/frames/symbol-11-frame-128x126.png",
        "smbFrame_11_5": "rockTheReelsMegaways/img/frames/symbol-11-frame-128x101.png",
        "smbFrame_11_6": "rockTheReelsMegaways/img/frames/symbol-11-frame-128x84.png",
        "smbFrame_11_7": "rockTheReelsMegaways/img/frames/symbol-11-frame-128x72.png",


        "smbFrame_17_2": "rockTheReelsMegaways/img/frames/symbol-11-frame-128x252.png",
        "smbFrame_17_3": "rockTheReelsMegaways/img/frames/symbol-11-frame-128x168.png",
        "smbFrame_17_4": "rockTheReelsMegaways/img/frames/symbol-11-frame-128x126.png",
        "smbFrame_17_5": "rockTheReelsMegaways/img/frames/symbol-11-frame-128x101.png",
        "smbFrame_17_6": "rockTheReelsMegaways/img/frames/symbol-11-frame-128x84.png",
        "smbFrame_17_7": "rockTheReelsMegaways/img/frames/symbol-11-frame-128x72.png",

        "smbFrame_12_2": "rockTheReelsMegaways/img/frames/symbol-12-frame-128x252.png",
        "smbFrame_12_3": "rockTheReelsMegaways/img/frames/symbol-12-frame-128x168.png",
        "smbFrame_12_4": "rockTheReelsMegaways/img/frames/symbol-12-frame-128x126.png",
        "smbFrame_12_5": "rockTheReelsMegaways/img/frames/symbol-12-frame-128x101.png",
        "smbFrame_12_6": "rockTheReelsMegaways/img/frames/symbol-12-frame-128x84.png",
        "smbFrame_12_7": "rockTheReelsMegaways/img/frames/symbol-12-frame-128x72.png",


        "bicon0": "rockTheReelsMegaways/img/b-symbol-00.png",
        "bicon1": "rockTheReelsMegaways/img/b-symbol-01.png",
        "bicon2": "rockTheReelsMegaways/img/b-symbol-02.png",
        "bicon3": "rockTheReelsMegaways/img/b-symbol-03.png",
        "bicon4": "rockTheReelsMegaways/img/b-symbol-04.png",
        "bicon5": "rockTheReelsMegaways/img/b-symbol-05.png",
        "bicon6": "rockTheReelsMegaways/img/b-symbol-06.png",
        "bicon7": "rockTheReelsMegaways/img/b-symbol-07.png",
        "bicon8": "rockTheReelsMegaways/img/b-symbol-08.png",
        "bicon9": "rockTheReelsMegaways/img/b-symbol-09.png",
        "bicon10": "rockTheReelsMegaways/img/b-symbol-10.png",
        "bicon12": "rockTheReelsMegaways/img/b-symbol-10.png",

        "bottomBar": "gui/message-bar.png",
        "bgPanel": "rockTheReelsMegaways/img/bgPanel.png",
        "bgPreview":"rockTheReelsMegaways/img/paytable/intro-page.jpg",
        "bgPreview1":"rockTheReelsMegaways/img/paytable/intro1.png",
        "bgPreview2":"rockTheReelsMegaways/img/paytable/intro2.png",
        "rtp":"rockTheReelsMegaways/img/paytable/rtp-with-frame.png",

        "bg_r": "rockTheReelsMegaways/img/bg/base-right.jpg",
        "bg_l": "rockTheReelsMegaways/img/bg/base-left.jpg",
        "bg_b": "rockTheReelsMegaways/img/bg/base-bottom.jpg",
        "bg_t": "rockTheReelsMegaways/img/bg/base-top.jpg",
        "bg_m": "rockTheReelsMegaways/img/bg/base-main.jpg",

        "bg_r_FS": "rockTheReelsMegaways/img/bg/base-right_FS.jpg",
        "bg_l_FS": "rockTheReelsMegaways/img/bg/base-left_FS.jpg",
        "bg_b_FS": "rockTheReelsMegaways/img/bg/base-bottom_FS.jpg",
        "bg_t_FS": "rockTheReelsMegaways/img/bg/base-top_FS.jpg",
        "bg_m_FS": "rockTheReelsMegaways/img/bg/base-main_FS.jpg",

        "boxes": "rockTheReelsMegaways/img/win-counter.png",
        "highBF": "rockTheReelsMegaways/img/buyFeature/no-text/high.png",
        "normalBF": "rockTheReelsMegaways/img/buyFeature/no-text/normal.png",
        "superBF": "rockTheReelsMegaways/img/buyFeature/no-text/super.png",
        "logo":"rockTheReelsMegaways/img/logo.png",
        "bigWin":"rockTheReelsMegaways/img/big-win.png",
        "superWin":"rockTheReelsMegaways/img/epic-win.png",
        "megaWin":"rockTheReelsMegaways/img/ultra-win.png",
        "boxFS":"rockTheReelsMegaways/img/total-win-box.png",
        "buttonBg":"gui/generic/img/desktop/png/cp-info-bar.png",
        "volOnButton": "gui/btnVolOn.png",
        "volOffButton": "gui/btnVolOff.png",
        "bgAlpha":"rockTheReelsMegaways/img/alpha.png",
        "freeSpinPanel": "rockTheReelsMegaways/img/free-spinsH.png",
        "freeRoundsPanel": "rockTheReelsMegaways/img/free-rounds.png",

        "light1": "rockTheReelsMegaways/img/side-light.png",
        "light2": "rockTheReelsMegaways/img/side-light.png",
        "light3": "rockTheReelsMegaways/img/side-light.png",
        "light4": "rockTheReelsMegaways/img/side-light.png",
        "greenL":"rockTheReelsMegaways/img/green-lazer.png",
        "orangeL":"rockTheReelsMegaways/img/orange-lazer.png",
        "pinkL":"rockTheReelsMegaways/img/pink-lazer.png",

        "fog": "rockTheReelsMegaways/img/smoke.png",

        "popupMc":"rockTheReelsMegaways/img/bgPanel.png"
    },
    "localizedAssets":{
    },
    "buttonsSpriteSheet": {
        "feature-Fn-btn": {
            "sprite": "rockTheReelsMegaways/img/buyFeature/buy-fs-btn.png",
            "json": "rockTheReelsMegaways/img/buyFeature/buy-fs-btn.png",
            "w": 432/3,
            "h": 70
        },
        "feature-Rn-btn": {
            "sprite": "rockTheReelsMegaways/img/buyFeature/buy-fs-btn.png",
            "json": "rockTheReelsMegaways/img/buyFeature/buy-fs-btn.png",
            "w": 432/3,
            "h": 70
        },
        "yesButton": {
            "sprite": "rockTheReelsMegaways/img/yes-btn.png",
            "json": "rockTheReelsMegaways/img/yes-btn.png",
            "w": 189/3,
            "h": 60
        },
        "noButton": {
            "sprite": "rockTheReelsMegaways/img/no-btn.png",
            "json": "rockTheReelsMegaways/img/no-btn.png",
            "w": 189/3,
            "h": 60
        },
        "check": {
            "sprite": "rockTheReelsMegaways/img/radio-btns.png",
            "json": "rockTheReelsMegaways/img/radio-btns.png",
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
            "json": "rockTheReelsMegaways/img/buyFeature/buy-feature-btn.png",
            "sprite": "rockTheReelsMegaways/img/buyFeature/buy-feature-btn.png",
            "w": 438/3,
            "h": 131
        },
        "buyUpgrade":{
            "json": "rockTheReelsMegaways/img/buyFeature/buy-upgrade-btn.png",
            "sprite": "rockTheReelsMegaways/img/buyFeature/buy-upgrade-btn.png",
            "w": 255/3,
            "h": 30
        },

    },
    "animations": {
        "anim0": {
            "json": "rockTheReelsMegaways/img/anim/symbol-00.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-00.png"
        },
        "anim1": {
            "json": "rockTheReelsMegaways/img/anim/symbol-01.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-01.png"
        },
        "anim2": {
            "json": "rockTheReelsMegaways/img/anim/symbol-02.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-02.png"
        },
        "anim3": {
            "json": "rockTheReelsMegaways/img/anim/symbol-03.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-03.png"
        },
        "anim4": {
            "json": "rockTheReelsMegaways/img/anim/symbol-04.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-04.png"
        },
        "anim5": {
            "json": "rockTheReelsMegaways/img/anim/symbol-05.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-05.png"
        },
        "anim6": {
            "json": "rockTheReelsMegaways/img/anim/symbol-06.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-06.png"
        },
        "anim7": {
            "json": "rockTheReelsMegaways/img/anim/symbol-07.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-07.png"
        },
        "anim8": {
            "json": "rockTheReelsMegaways/img/anim/symbol-08.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-08.png"
        },
        "anim9": {
            "json": "rockTheReelsMegaways/img/anim/symbol-09.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-09.png"
        },
        "anim10": {
            "json": "rockTheReelsMegaways/img/anim/symbol-10.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-10.png"
        },
        "anim11": {
            "json": "rockTheReelsMegaways/img/anim/symbol-11.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-11.png"
        },
        "anim12": {
            "json": "rockTheReelsMegaways/img/anim/symbol-12.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-12.png"
        },
        "anim13": {
            "json": "rockTheReelsMegaways/img/anim/symbol-13.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-13.png"
        },
        "anim14": {
            "json": "rockTheReelsMegaways/img/anim/symbol-14.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-14.png"
        },
        "anim15": {
            "json": "rockTheReelsMegaways/img/anim/symbol-15.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-15.png"
        },
        "anim16": {
            "json": "rockTheReelsMegaways/img/anim/symbol-16.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-16.png"
        },

        "anim17": {
            "json": "rockTheReelsMegaways/img/anim/symbol-11.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-11.png"
        },

        "tumble_2": {
            "json": "rockTheReelsMegaways/img/anim/tumble-128x252.json",
            "sprite": "rockTheReelsMegaways/img/anim/tumble-128x252.png"
        },
        "tumble_3": {
            "json": "rockTheReelsMegaways/img/anim/tumble-128x168.json",
            "sprite": "rockTheReelsMegaways/img/anim/tumble-128x168.png"
        },
        "tumble_4": {
            "json": "rockTheReelsMegaways/img/anim/tumble-128x126.json",
            "sprite": "rockTheReelsMegaways/img/anim/tumble-128x126.png"
        },
        "tumble_5": {
            "json": "rockTheReelsMegaways/img/anim/tumble-128x101.json",
            "sprite": "rockTheReelsMegaways/img/anim/tumble-128x101.png"
        },
        "tumble_6": {
            "json": "rockTheReelsMegaways/img/anim/tumble-128x84.json",
            "sprite": "rockTheReelsMegaways/img/anim/tumble-128x84.png"
        },
        "tumble_7": {
            "json": "rockTheReelsMegaways/img/anim/tumble-128x72.json",
            "sprite": "rockTheReelsMegaways/img/anim/tumble-128x72.png"
        },


        "frame13_2": {
            "json": "rockTheReelsMegaways/img/anim/symbol-13-act-128x252.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-13-act-128x252.png"
        },
        "frame13_3": {
            "json": "rockTheReelsMegaways/img/anim/symbol-13-act-128x168.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-13-act-128x168.png"
        },
        "frame13_4": {
            "json": "rockTheReelsMegaways/img/anim/symbol-13-act-128x126.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-13-act-128x126.png"
        },
        "frame13_5": {
            "json": "rockTheReelsMegaways/img/anim/symbol-13-act-128x101.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-13-act-128x101.png"
        },
        "frame13_6": {
            "json": "rockTheReelsMegaways/img/anim/symbol-13-act-128x84.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-13-act-128x84.png"
        },
        "frame13_7": {
            "json": "rockTheReelsMegaways/img/anim/symbol-13-act-128x72.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-13-act-128x72.png"
        },

        "frame14_2": {
            "json": "rockTheReelsMegaways/img/anim/symbol-14-act-128x252.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-14-act-128x252.png"
        },
        "frame14_3": {
            "json": "rockTheReelsMegaways/img/anim/symbol-14-act-128x168.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-14-act-128x168.png"
        },
        "frame14_4": {
            "json": "rockTheReelsMegaways/img/anim/symbol-14-act-128x126.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-14-act-128x126.png"
        },
        "frame14_5": {
            "json": "rockTheReelsMegaways/img/anim/symbol-14-act-128x101.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-14-act-128x101.png"
        },
        "frame14_6": {
            "json": "rockTheReelsMegaways/img/anim/symbol-14-act-128x84.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-14-act-128x84.png"
        },
        "frame14_7": {
            "json": "rockTheReelsMegaways/img/anim/symbol-14-act-128x72.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-14-act-128x72.png"
        },

        "frame15_2": {
            "json": "rockTheReelsMegaways/img/anim/symbol-15-act-128x252.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-15-act-128x252.png"
        },
        "frame15_3": {
            "json": "rockTheReelsMegaways/img/anim/symbol-15-act-128x168.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-15-act-128x168.png"
        },
        "frame15_4": {
            "json": "rockTheReelsMegaways/img/anim/symbol-15-act-128x126.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-15-act-128x126.png"
        },
        "frame15_5": {
            "json": "rockTheReelsMegaways/img/anim/symbol-15-act-128x101.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-15-act-128x101.png"
        },
        "frame15_6": {
            "json": "rockTheReelsMegaways/img/anim/symbol-15-act-128x84.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-15-act-128x84.png"
        },
        "frame15_7": {
            "json": "rockTheReelsMegaways/img/anim/symbol-15-act-128x72.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-15-act-128x72.png"
        },

        "frame16_2": {
            "json": "rockTheReelsMegaways/img/anim/symbol-16-act-128x252.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-16-act-128x252.png"
        },
        "frame16_3": {
            "json": "rockTheReelsMegaways/img/anim/symbol-16-act-128x168.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-16-act-128x168.png"
        },
        "frame16_4": {
            "json": "rockTheReelsMegaways/img/anim/symbol-16-act-128x126.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-16-act-128x126.png"
        },
        "frame16_5": {
            "json": "rockTheReelsMegaways/img/anim/symbol-16-act-128x101.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-16-act-128x101.png"
        },
        "frame16_6": {
            "json": "rockTheReelsMegaways/img/anim/symbol-16-act-128x84.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-16-act-128x84.png"
        },
        "frame16_7": {
            "json": "rockTheReelsMegaways/img/anim/symbol-16-act-128x72.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-16-act-128x72.png"
        },


        "tumble_2": {
            "json": "rockTheReelsMegaways/img/anim/tumble-128x252.json",
            "sprite": "rockTheReelsMegaways/img/anim/tumble-128x252.png"
        },
        "tumble_3": {
            "json": "rockTheReelsMegaways/img/anim/tumble-128x168.json",
            "sprite": "rockTheReelsMegaways/img/anim/tumble-128x168.png"
        },
        "tumble_4": {
            "json": "rockTheReelsMegaways/img/anim/tumble-128x126.json",
            "sprite": "rockTheReelsMegaways/img/anim/tumble-128x126.png"
        },
        "tumble_5": {
            "json": "rockTheReelsMegaways/img/anim/tumble-128x101.json",
            "sprite": "rockTheReelsMegaways/img/anim/tumble-128x101.png"
        },
        "tumble_6": {
            "json": "rockTheReelsMegaways/img/anim/tumble-128x84.json",
            "sprite": "rockTheReelsMegaways/img/anim/tumble-128x84.png"
        },
        "tumble_7": {
            "json": "rockTheReelsMegaways/img/anim/tumble-128x72.json",
            "sprite": "rockTheReelsMegaways/img/anim/tumble-128x72.png"
        },




        "part-1": {
            "json": "rockTheReelsMegaways/img/anim/bronze-coin.json",
            "sprite": "rockTheReelsMegaways/img/anim/bronze-coin.png"
        },
        "part-2": {
            "json": "rockTheReelsMegaways/img/anim/silver-coin.json",
            "sprite": "rockTheReelsMegaways/img/anim/silver-coin.png"
        },
        "part-3": {
            "json": "rockTheReelsMegaways/img/anim/gold-coin.json",
            "sprite": "rockTheReelsMegaways/img/anim/gold-coin.png"
        },
        "f-part-1": {
            "json": "rockTheReelsMegaways/img/anim/bronze-coin-frwrd.json",
            "sprite": "rockTheReelsMegaways/img/anim/bronze-coin-frwrd.png"
        },
        "f-part-2": {
            "json": "rockTheReelsMegaways/img/anim/silver-coin-frwrd.json",
            "sprite": "rockTheReelsMegaways/img/anim/silver-coin-frwrd.png"
        },
        "f-part-3": {
            "json": "rockTheReelsMegaways/img/anim/gold-coin-frwrd.json",
            "sprite": "rockTheReelsMegaways/img/anim/gold-coin-frwrd.png"
        },

        "lighting": {
            "json": "rockTheReelsMegaways/img/anim/lighting.json",
            "sprite": "rockTheReelsMegaways/img/anim/lighting.png"
        },

        "lighting_13": {
            "json": "rockTheReelsMegaways/img/anim/symbol-13-lighting.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-13-lighting.png"
        },
        "lighting_14": {
            "json": "rockTheReelsMegaways/img/anim/symbol-14-lighting.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-14-lighting.png"
        },
        "lighting_15": {
            "json": "rockTheReelsMegaways/img/anim/symbol-15-lighting.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-15-lighting.png"
        },
        "lighting_16": {
            "json": "rockTheReelsMegaways/img/anim/symbol-16-lighting.json",
            "sprite": "rockTheReelsMegaways/img/anim/symbol-16-lighting.png"
        },

        "anticipation": {
            "json": "rockTheReelsMegaways/img/anim/anticipation.json",
            "sprite": "rockTheReelsMegaways/img/anim/anticipation.png"
        },

        "explosion": {
            "json": "rockTheReelsMegaways/img/anim/fs-side-anim.json",
            "sprite": "rockTheReelsMegaways/img/anim/fs-side-anim.png"
        },
        "cheetah": {
            "json": "rockTheReelsMegaways/img/anim/anim-cheetah.json",
            "sprite": "rockTheReelsMegaways/img/anim/anim-cheetah.png"
        },

    },
    "importantSounds": {
        "spinClick": {
            "name": "rockTheReelsMegaways/sounds/spinClick.mp3",
            "volume": .1
        },
        "reelStop": {
            "name": "rockTheReelsMegaways/sounds/reelStop.mp3",
            "volume":.2
        },
        "reelSound": {
            "name": "rockTheReelsMegaways/sounds/reelSound.mp3",
            "volume":.7
        },
        "coins": {
            "name": "rockTheReelsMegaways/sounds/coins.mp3",
            "volume": 1
        },
        "winAmountFall": {
            "name": "rockTheReelsMegaways/sounds/winAmountFall.mp3",
            "volume": .6
        }
    },
    "bgImportantSounds":{
        "bgSlot": {
            "name": "rockTheReelsMegaways/sounds/bg_layer1.mp3",
            "volume": 1,
            "marker":true
        },
        "bgSlot1": {
            "name": "rockTheReelsMegaways/sounds/bg_layer2.mp3",
            "volume": 0,
            "marker":true
        },
        "bgSlot2": {
            "name": "rockTheReelsMegaways/sounds/bg_layer3.mp3",
            "volume": 0,
            "marker":true
        }
    },
    "sounds": {
        "click": {
            "name": "rockTheReelsMegaways/sounds/click.mp3",
            "volume": .3
        },
        "multiplier": {
            "name": "rockTheReelsMegaways/sounds/multiplier.mp3",
            "volume":  .8
        },
         "smbWin_0": {
            "name": "rockTheReelsMegaways/sounds/smbWin_04.mp3",
            "multiple":["smbWin_1","smbWin_2","smbWin_3","smbWin_4"],
            "volume": 1
        },
        "smbWin_5": {
            "name": "rockTheReelsMegaways/sounds/smbWin_05.mp3",
            "volume": 1
        },

        "smbWin_6": {
            "name": "rockTheReelsMegaways/sounds/smbWin_06.mp3",
            "volume": 1
        },
        "smbWin_7": {
            "name": "rockTheReelsMegaways/sounds/smbWin_07.mp3",
            "volume": 1
        },
        "smbWin_8": {
            "name": "rockTheReelsMegaways/sounds/smbWin_08.mp3",
            "volume": 1
        },
        "smbWin_9": {
            "name": "rockTheReelsMegaways/sounds/smbWin_09.mp3",
            "volume": 1
        },
        "smbWin_10": {
            "name": "rockTheReelsMegaways/sounds/smbWin_10.mp3",
            "volume": 1
        },
        "smbWin_11": {
            "name": "rockTheReelsMegaways/sounds/smbWin_11.mp3",
            "volume": 1
        },
        "smbWin_12": {
            "name": "rockTheReelsMegaways/sounds/smbWin_12.mp3",
            "volume": 1
        },
        "smbWin_13": {
            "name": "rockTheReelsMegaways/sounds/smbWin_13.mp3",
            "volume": 1.5
        },
        "smbWin_14": {
            "name": "rockTheReelsMegaways/sounds/smbWin_14.mp3",
            "volume": 1.4
        },
        "smbWin_15": {
            "name": "rockTheReelsMegaways/sounds/smbWin_15.mp3",
            "volume": 1.3
        },
        "smbWin_16": {
            "name": "rockTheReelsMegaways/sounds/smbWin_16.mp3",
            "volume": 1
        },

        "winBg_6": {
            "name": "rockTheReelsMegaways/sounds/centralWin/bigWin.mp3",
            "volume":  1
        },
        "winBg_7": {
            "name": "rockTheReelsMegaways/sounds/centralWin/superBigWin.mp3",
            "volume":   1
        },
        "winBg_8": {
            "name": "rockTheReelsMegaways/sounds/centralWin/megaBigWin.mp3",
            "volume":  1
        },
        "fsWin": {
            "name": "rockTheReelsMegaways/sounds/introFs.mp3",
            "volume": 1
        },
        "incWin": {
            "name": "rockTheReelsMegaways/sounds/counter.mp3",
            "volume": .6,
            "loop": true
        },
        "winPanel": {
            "name": "rockTheReelsMegaways/sounds/winScreen.mp3",
            "volume": 1
        },
        "tumble_0": {
            "name": "rockTheReelsMegaways/sounds/tumbling.mp3",
            "volume": 1.1,
            "multiple":["tumble_1","tumble_2","tumble_3","tumble_4","tumble_5","tumble_6"]
        },
        "placeWild": {
            "name": "rockTheReelsMegaways/sounds/placeWild.mp3",
            "volume": 1
        },
        "wildReel": {
            "name": "rockTheReelsMegaways/sounds/wildReel.mp3",
            "volume": 1
        },
        "wildReel1": {
            "name": "rockTheReelsMegaways/sounds/wildReel1.mp3",
            "volume": 1
        },

        "symbSwitch": {
            "name": "rockTheReelsMegaways/sounds/topSymSwitch.mp3",
            "volume": 1
        },
        "newIcons": {
            "name": "rockTheReelsMegaways/sounds/iconsExplode.mp3",
            "volume": 1
        },
        "horSpin": {
            "name": "rockTheReelsMegaways/sounds/horSpin.mp3",
            "volume": 1
        },


        "scatterLand": {
            "name": "rockTheReelsMegaways/sounds/scatterLand.mp3",
            "volume":.4
        },
        "drumLoop": {
            "name": "rockTheReelsMegaways/sounds/drumRoll.mp3",
            "volume":.4,
            "loop":true
        },
        "drumFinal": {
            "name": "rockTheReelsMegaways/sounds/drumRoll_end.mp3",
            "volume":.6
        },
        "explosionSound": {
            "name": "rockTheReelsMegaways/sounds/explosionSound.mp3",
            "volume":1
        },

    },
    "bgSounds": {
        "bgFs": {
            "name": "rockTheReelsMegaways/sounds/bgFs.mp3",
            "volume": 0
        },
        "bgSlot3": {
            "name": "rockTheReelsMegaways/sounds/bg_layer4.mp3",
            "volume": 0,
            "marker":true
        },
        "bgSlot13": {
            "name": "rockTheReelsMegaways/sounds/bg_layer5.mp3",
            "volume": 0,
            "marker":true
        },
        "bgSlot14": {
            "name": "rockTheReelsMegaways/sounds/bg_layer6.mp3",
            "volume": 0,
            "marker":true
        },
        "bgSlot15": {
            "name": "rockTheReelsMegaways/sounds/bg_layer7.mp3",
            "volume": 0,
            "marker":true
        },
        "bgSlot16": {
            "name": "rockTheReelsMegaways/sounds/bg_layer8.mp3",
            "volume": 0,
            "marker":true
        },
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
                    "x": 1024,
                    "y": 128
                },
                "bg1": {
                    "name": "bg_l",
                    "x": 0,
                    "y": 128
                },
            }
        },

        "frame": {
            "visible": false,
            "graphAsset": {
                "bg4": {
                    "name": "bg_m",
                    "x": 256,
                    "y": 128
                }
            }
        },
        "frameFS": {
            "visible": false,
            "graphAsset": {
                "bg4": {
                    "name": "bg_m_FS",
                    "x": 256,
                    "y": 128
                }
            }
        },

        "bgFS": {
            "visible":false,
            "graphAsset": {
                "bg": {
                    "name": "bg_r_FS",
                    "x": 1024,
                    "y": 128
                },
                "bg1": {
                    "name": "bg_l_FS",
                    "x": 0,
                    "y": 128
                },
            }
        },
        "flashingLights": {
            "visible":false,
            "graphAsset": {
                "ll_1": {

                    "name": "lighting",
                    "x": 260,
                    "y": 228,
                    "scaleX": -1
                },

                "lr_1": {
                    "name": "lighting",
                    "x": 1012,
                    "y": 228,

                },

                "ll_13": {
                    "visible": false,
                    "name": "lighting_13",
                    "x": 260,
                    "y": 228,
                    "scaleX": -1
                },
                "lr_13": {
                    "visible": false,
                    "name": "lighting_13",
                    "x": 1012,
                    "y": 228,
                },
                "ll_14": {
                    "visible": false,
                    "name": "lighting_14",
                    "x": 260,
                    "y": 228,
                    "scaleX": -1
                },
                "lr_14": {
                    "visible": false,
                    "name": "lighting_14",
                    "x": 1012,
                    "y": 228,
                },
                "ll_15": {
                    "visible": false,
                    "name": "lighting_15",
                    "x": 260,
                    "y": 228,
                    "scaleX": -1
                },
                "lr_15": {
                    "visible": false,
                    "name": "lighting_15",
                    "x": 1012,
                    "y": 228,
                },
                "ll_16": {
                    "visible": false,
                    "name": "lighting_16",
                    "x": 260,
                    "y": 228,
                    "scaleX": -1
                },
                "lr_16": {
                    "visible": false,
                    "name": "lighting_16",
                    "x": 1012,
                    "y": 228,
                },
            }
        },
        "wild": {
        },
        "winGlow":{
        },
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
            }
        },
        "maskFS":{
            "visible":false,
            "graphAsset": {
                "bg2": {
                    "name": "bg_b_FS",
                    "x": 0,
                    "y": 632
                },
                "bg3": {
                    "name": "bg_t_FS",
                    "x": 0,
                    "y": 0
                },
            }
        },
        "lights1":{
            "visible":false,
            "graphAsset": {
                "l13": {
                    "name": "light1",
                    "x": 50,
                    "y": 330,
                    "scaleX":-1,
                    "anchorX": 1,
                    "anchorY": 1,
                },
                "l14": {
                    "name": "light2",
                    "x": 50,
                    "y": 430,
                    "scaleX":-1,
                    "anchorX": 1,
                    "anchorY": 1,
                },
                "l15": {
                    "name": "light3",
                    "x": 50,
                    "y": 530,
                    "scaleX":-1,
                    "anchorX": 1,
                    "anchorY": 1,
                },
                "l16": {
                    "name": "light4",
                    "x": 50,
                    "y": 630,
                    "scaleX":-1,
                    "anchorX": 1,
                    "anchorY": 1,
                },


            }
        },
        "lights2":{
            "visible":false,
            "graphAsset": {
                "l13": {
                    "name": "light1",
                    "x": 50,
                    "y": 330,
                    "scaleX":-1,
                    "anchorX": 1,
                    "anchorY": 1,
                },
                "l14": {
                    "name": "light2",
                    "x": 50,
                    "y": 430,
                    "scaleX":-1,
                    "anchorX": 1,
                    "anchorY": 1,
                },
                "l15": {
                    "name": "light3",
                    "x": 50,
                    "y": 530,
                    "scaleX":-1,
                    "anchorX": 1,
                    "anchorY": 1,
                },
                "l16": {
                    "name": "light4",
                    "x": 50,
                    "y": 630,
                    "scaleX":-1,
                    "anchorX": 1,
                    "anchorY": 1,
                },


            }
        },
        "lazers1":{
            "visible":false,
            "graphAsset": {
                "lo": {
                    "name": "orangeL",
                    "x": 200,
                    "y": 335,
                    "angle":-220,
                    "anchorX": 1,
                    "anchorY":1
                },
                "lp": {
                    "name": "pinkL",
                    "x": 200,
                    "y": 340,
                    "angle":-230,
                    "anchorX": 1,
                    "anchorY":1
                },
                "lg": {
                    "name": "greenL",
                    "x": 200,
                    "y": 330,
                    "angle":-240,
                    "anchorX": 1,
                    "anchorY":1

                },
            }
        },
        "lazers2":{
            "visible":false,
            "graphAsset": {
                "lo": {
                    "name": "orangeL",
                    "x": 200,
                    "y": 335,
                    "angle":-220,
                    "anchorX": 1,
                    "anchorY":1
                },
                "lp": {
                    "name": "pinkL",
                    "x": 200,
                    "y": 340,
                    "angle":-230,
                    "anchorX": 1,
                    "anchorY":1
                },
                "lg": {
                    "name": "greenL",
                    "x": 200,
                    "y": 330,
                    "angle":-240,
                    "anchorX": 1,
                    "anchorY":1

                },
            }
        },
        "lazers3":{
            "visible":false,
            "graphAsset": {
                "lo": {
                    "name": "orangeL",
                    "x": 200,
                    "y": 335,
                    "angle":-220,
                    "anchorX": 1,
                    "anchorY":1
                },
                "lp": {
                    "name": "pinkL",
                    "x": 200,
                    "y": 340,
                    "angle":-230,
                    "anchorX": 1,
                    "anchorY":1
                },
                "lg": {
                    "name": "greenL",
                    "x": 200,
                    "y": 330,
                    "angle":-240,
                    "anchorX": 1,
                    "anchorY":1

                },
            }
        },
        "lazers4":{
            "visible":false,
            "graphAsset": {
                "lo": {
                    "name": "orangeL",
                    "x": 200,
                    "y": 335,
                    "angle":-220,
                    "anchorX": 1,
                    "anchorY":1
                },
                "lp": {
                    "name": "pinkL",
                    "x": 200,
                    "y": 340,
                    "angle":-230,
                    "anchorX": 1,
                    "anchorY":1
                },
                "lg": {
                    "name": "greenL",
                    "x": 200,
                    "y": 330,
                    "angle":-240,
                    "anchorX": 1,
                    "anchorY":1

                },
            }
        },
        "fog":{
            "visible":false,
            "graphAsset": {
                "bg1": {
                    "name": "fog",
                    "x": 0,
                    "y": 300
                }
            }
        },
        "reels": {
        },
        "reelFg": {},
        "hReel": {
        },
        "sideCharacter":{
            "visible":false,
            "graphAsset": {
                "cheetah": {
                    "name": "cheetah",
                    "x": 172,
                    "y": 472,
                    "anchorX": .5,
                    "anchorY": .5,
                }
            }
        },
        "buyFeature":{
            "buttons": {
                "buyFeature": {
                    "visible":true,
                    "name": "buyFeature",
                    "name": "buyFeature",
                    "x": 1102,
                    "y": 60,
                    "evt": "doBuyFeature",
                    "texts": {
                        "txt": {
                            "x": 0,
                            "y": 7,
                            "font": "14px JockeyOne-Regular,Arial, Helvetica sans-serif",
                            "fill": "#FFFFFF",
                            "text": "Buy Free Spins",
                            "anchorX": .5
                        }
                    }
                }
            }
        },
        "buttonFg":{},
        "wins": {},
        "lines": {},
        "logo": {
            "visible":false,
            "graphAsset": {
                "logo": {
                    "name": "logo",
                    "x": 127,
                    "y": 18,
                    "anchorX": .5
                }
            }
        },
        "freeRounds": {
            "visible":false,
            "comment_movingLogo":"true when the panel substitute the logo",
            "movingLogo":false,
            "graphAsset": {
                "frPanel":{
                    "name": "freeRoundsPanel",
                    "x": 220,
                    "y": 35,
                    "anchorX":.5,
                    "anchorY":.5,
                    "scaleX":.35,
                    "scaleY":.35,
                }
            },
            "texts": {
                "frLabel": {
                    "x": 300,
                    "y": 60,
                    "fill": "#ffffff",
                    "font": "15px Futura ,Arial",
                    "text": "Free Rounds:",
                    "anchorX":  0.5
                },
                "frValue": {
                    "x": 300,
                    "y": 72,
                    "fill": "#ffffff",
                    "font": "22px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                },
                "frTotWonLabel": {
                    "x": 970,
                    "y": 60,
                    "fill": "#ffffff",
                    "font": "15px Futura ,Arial",
                    "text": "Total won:",
                    "anchorX":  0.5
                },
                "frTotWonValue": {
                    "x": 970,
                    "y": 72,
                    "fill": "#ffffff",
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
                    "name": "boxes",
                    "x": 1150,
                    "y": -5,
                    "anchorX": .5
                }
            },

            "texts": {
                "fsLabel": {
                    "x": 1150,
                    "y": 65,
                    "fill": "#ff2eb6",
                    "font": "17px JockeyOne-Regular ,Arial",
                    "text": "Free Spins",
                    "anchorX": 0.5
                },
                "fsValue": {
                    "x": 1150,
                    "y": 82,
                    "fill": "#ff2eb6",
                    "font": "27px JockeyOne-Regular ,Arial",
                    "text": "12",
                    "anchorX": 0.5
                },
                "totWonLabel": {
                    "x": 1150,
                    "y": 180,
                    "fill": "#ff8800",
                    "font": "17px JockeyOne-Regular ,Arial",
                    "text": "Total won",
                    "anchorX":0.5
                },
                "totWonValue": {
                    "x": 1150   ,
                    "y": 200,
                    "fill": "#ff8800",
                    "font": "27px JockeyOne-Regular ,Arial",
                    "text": "121212",
                    "anchorX": 0.5
                },
                "fsMultValue":{
                    "x": 1150,
                    "y": 335,
                    "font": "27px JockeyOne-Regular ,Arial",
                    "fill": "#fffe",
                    "text": "x12",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsmultT":{
                    "x": 1150,
                    "y": 310,
                    "font": "17px JockeyOne-Regular ,Arial",
                    "fill": "#fffe",
                    "text": "Multiplier",
                    "align":"center",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsAdditional":{
                    "x": 1150,
                    "y": 200,
                    "bmpFont": "multiBmpFont",
                    "size": "24",
                    "text": "",
                    "anchorX": .5,
                    "anchorY": .5
                }
            }
        },
        "scatter": {},
        "lockReels":{
            "visible":false,
            "graphAsset": {
                 "lockIn_5": {
                    "name": "none",
                    "visible":false,
                    "x": 340+ 5*100,
                    "y": 67
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
        "sideExplosion":{
            "visible":false,
            "graphAsset": {
                "leftE": {
                    "name": "explosion",
                    "x": 1008,
                    "y": 360,
                    "scaleX":2,
                    "scaleY":2,
                    "anchorX": 0.5,
                    "anchorY": 0.5
                },
                "rightE": {
                    "name": "explosion",
                    "x": 264,
                    "y": 360,
                    "scaleX":-2,
                    "scaleY":2,
                    "anchorX": 0.5,
                    "anchorY": 0.5
                }
            },
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
                    "fill": "#40e308",
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
                    "name": "none",
                    "x": 620,
                    "y": 0,
                    "anchorX": .5,
                    "alpha":0
                }
            },
            "texts":{
                "winWaysNum":{
                    "x": 130,
                    "y": 258,
                    "font": "40px JockeyOne-Regular,Arial, Helvetica sans-serif",
                    "fill": "#ffe424",
                    "text": "1024",
                    "anchorX": 0.5,
                    "anchorY": 0.5
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

                "bgFsWon": {
                    "name": "bgPanel",
                    "x": 640,
                    "y": 310,
                    "anchorX": .5,
                    "anchorY": .5
                }
            },
            "texts": {
                "fsHeading": {
                    "x": 640,
                    "y": 160,
                    "fill": "#ff8800",
                    "font": "60px JockeyOne-Regular",
                    "stroke": "#40372a",
                    "stroke_tick": 4,
                    "text": "FREE SPINS",
                    "anchorX": .5
                },
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
                    "y": 200,
                    "fill": "#ffffff",
                    "font": "28px FuturaPT-Book",
                    "text": "The maximum prize",
                    "anchorX": .5
                },
                "fsWLabel1": {
                    "x": 640,
                    "y": 380,
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
                    "name": "bgPanel",
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
                    "alpha": .25
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
                    "name": "bgPreview",
                    "x": 0,
                    "y": 0
                },
                "bgPreview1": {
                    "name": "bgPreview1",
                    "x": 16,
                    "y": 155,
                    "texts": {
                        "pw1":{
                            "x": 192,
                            "y": 200,
                            "font": "35px JockeyOne-Regular, sans-serif",
                            "fill": "#bd02e3",
                            "text": "Warthog",
                            "anchorX": 0.5,
                        },
                        "pw1a":{
                            "x": 192,
                            "y": 240,
                            "font": "20px JockeyOne-Regular, sans-serif",
                            "fill": "#bd02e3",
                            "text": "Turns symbols into Wilds.",
                            "anchorX": 0.5,
                        },
                        "pw2":{
                            "x": 425,
                            "y": 200,
                            "font": "35px JockeyOne-Regular, sans-serif",
                            "fill": "#06b8f2",
                            "text": "Octopus",
                            "anchorX": 0.5,
                        },
                        "pw2a":{
                            "x": 425,
                            "y": 240,
                            "font": "20px JockeyOne-Regular, sans-serif",
                            "fill": "#06b8f2",
                            "text": "Takes top paying symbols",
                            "anchorX": 0.5,
                        },
                        "pw2b":{
                            "x": 425,
                            "y": 270,
                            "font": "20px JockeyOne-Regular, sans-serif",
                            "fill": "#06b8f2",
                            "text": "from 1st reel and",
                            "anchorX": 0.5,
                        },
                        "pw2c":{
                            "x": 425,
                            "y": 300,
                            "font": "20px JockeyOne-Regular, sans-serif",
                            "fill": "#06b8f2",
                            "text": "adds more on the reels.",
                            "anchorX": 0.5,
                        },
                    }
                },
                "bgPreview2": {
                    "name": "bgPreview2",
                    "x": 647,
                    "y": 155,
                    "texts": {
                        "pw3":{
                            "x": 192,
                            "y": 200,
                            "font": "35px JockeyOne-Regular, sans-serif",
                            "fill": "#bbf604",
                            "text": "Flamingo",
                            "anchorX": 0.5,
                        },
                        "pw3a":{
                            "x": 192,
                            "y": 240,
                            "font": "20px JockeyOne-Regular, sans-serif",
                            "fill": "#bbf604",
                            "text": "Turns symbols into",
                            "anchorX": 0.5,
                        },
                        "pw3b":{
                            "x": 192,
                            "y": 270,
                            "font": "20px JockeyOne-Regular, sans-serif",
                            "fill": "#bbf604",
                            "text": "Highest Paying symbol.",
                            "anchorX": 0.5,
                        },
                        "pw4":{
                            "x": 425,
                            "y": 200,
                            "font": "35px JockeyOne-Regular, sans-serif",
                            "fill": "#ea2008",
                            "text": "Lion",
                            "anchorX": 0.5,
                        },
                        "pw4a":{
                            "x": 425,
                            "y": 240,
                            "font": "20px JockeyOne-Regular, sans-serif",
                            "fill": "#ea2008",
                            "text": "Turns symbols into",
                            "anchorX": 0.5,
                        },
                        "pw4b":{
                            "x": 425,
                            "y": 270,
                            "font": "20px JockeyOne-Regular, sans-serif",
                            "fill": "#ea2008",
                            "text": "Multiplier Wilds",
                            "anchorX": 0.5,
                        },
                        "pw4c":{
                            "x": 425,
                            "y": 300,
                            "font": "20px JockeyOne-Regular, sans-serif",
                            "fill": "#ea2008",
                            "text": "(increasing during Free Spins).",
                            "anchorX": 0.5,
                        },
                    }
                },
                "rtp": {
                    "name": "rtp",
                    "x": 100,
                    "y": 560,
                    "anchorY": 0.5,
                    "anchorX": 0.5,
                },

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
                    "name": "bgPanel",
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
            "selectorY":250,
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
                    "scaleX":1.4,
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
                    "y": 600,
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
                    "y": 600,
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
                    "y": 600,
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
            "selectorY":228,
            "selectorX":660,
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
                    "y": 330,
                    "anchorX": .5,
                    "anchorY": .5,
                    "scaleX":1.1,
                    "scaleY":1.1
                },
                "normalBF": {
                    "name": "normalBF",
                    "x": 480,
                    "y": 400,
                    "anchorX": .5,
                    "anchorY": .5,

                },
                "highBF": {
                    "name": "highBF",
                    "x": 640,
                    "y": 400,
                    "anchorX": .5,
                    "anchorY": .5,

                },
                "superBF": {
                    "name": "superBF",
                    "x": 800,
                    "y": 400,
                    "anchorX": .5,
                    "anchorY": .5,

                },
            },
            "texts": {
                "msgF1": {
                    "x": 640,
                    "y": 200,
                    "fill": "#ffffff",
                    "font": "24px JockeyOne-Regular",
                    "text": "",
                    "align":"center",
                    "anchorX": .5
                },
                "msgF2": {
                    "x": 640,
                    "y": 220,
                    "fill": "#ffffff",
                    "font": "20px JockeyOne-Regular",
                    "text": "",
                    "anchorX": .5
                },
                "msgF3": {
                    "x": 640,
                    "y": 220,
                    "fill": "#ffffff",
                    "font": "22px JockeyOne-Regular",
                    "text": "",
                    "anchorX": .5
                },
                "msgF45": {
                    "x": 640,
                    "y": 290,
                    "fill": "#ffffff",
                    "font": "18px JockeyOne-Regular",
                    "text": "",
                    "anchorX": .5
                },
                "msgF4": {
                    "x": 640,
                    "y": 285,
                    "fill": "#ffffff",
                    "font": "18px JockeyOne-Regular",
                    "text": "",
                    "anchorX": .5
                },
                "msgF5": {
                    "x": 640,
                    "y": 310,
                    "fill": "#ffffff",
                    "font": "18px JockeyOne-Regular",
                    "text": "",
                    "anchorX": .5
                },
                "msgF51": {
                    "x": 640,
                    "y": 395,
                    "fill": "#ffffff",
                    "font": "18px JockeyOne-Regular",
                    "text": "",
                    "anchorX": .5
                },
                "priceF": {
                    "x": 640,
                    "y": 467,
                    "fill": "#ffffff",
                    "font": "20px JockeyOne-Regular",
                    "text": "",
                    "anchorX": .5
                }
            },
            "buttons": {
                "yes": {
                    "name": "genericBtn",
                    "x": 500,
                    "y": 630,
                    "evt": "doOkRR",
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
                    "evt": "doKo",
                    "texts": {
                        "noLabel": {
                            "x": 0,
                            "y": -13,
                            "fill": "#ffffff",
                            "font": "20px FuturaPT-Book",
                            "text": "Cancel",
                            "anchorX": .5
                        }
                    }
                },
                "ko": {
                    "name": "genericBtn",
                    "x": 640,
                    "anchorX": .5,
                    "y": 630,
                    "evt": "doKo",
                    "texts": {
                        "noLabel": {
                            "x": 0,
                            "y": -13,
                            "fill": "#ffffff",
                            "font": "20px FuturaPT-Book",
                            "text": "Cancel",
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
    "spinType": "MegaWayRRTumblingSpin",
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
    "lineType": "MegaWayRRTumblingWin",
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
            "reelSecondMovementTime":0.35,
            "reelLoopInterval":.22,
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
    "freeSpins":"RRMwFreeSpins",
    "_fsIcon": 1,
    "fsSpinDelay":750,
    "minFsSmbs":3,
    "scatterIcon": 10,
    "scatterType": "SubstScatter",
    "_twinReelsFeature":"normal",
    "wildType": "VikingTumblingWildReel",
    "wildNum": [10,11],
    "wildReelOrigin":0,
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
        "deltaX_0": 252,
        "deltaX": 128,
        "deltaY_0": 632 ,
        "deltaY": 104
    },
    "icon": {
        "x": 0,
        "y": 0,
        "width": 128,
        "height": 132
    },
    "winningcombinations": true,
    "ForceFeature":{
        "ch1":{
            "value":"&freeSpins=1",
            "description":"FS"
        },
        "ch2":{
            "value":"",
            "description":"Horiz. Reel"
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
            "title": "Rock The Reels MegaWays™ Game Rules",
            "rtp": [
                "96.7",
                "96.7",
                "96.7"
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
                            "bg": "rockTheReelsMegaways/img/symbol-00.png", //symbol image
                            "payout_values": true //Whether symbol has payout values

                        },

                        {

                            "id": "symbol_01",
                            "bg": "rockTheReelsMegaways/img/symbol-01.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_02",
                            "bg": "rockTheReelsMegaways/img/symbol-02.png",
                            "payout_values": true

                        }


                    ],

                    [

                        {

                            "id": "symbol_03",
                            "bg": "rockTheReelsMegaways/img/symbol-03.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_04",
                            "bg": "rockTheReelsMegaways/img/symbol-04.png",
                            "payout_values": true

                        }

                    ],

                    [
                        {

                            "id": "symbol_05",
                            "bg": "rockTheReelsMegaways/img/symbol-05.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_06",
                            "bg": "rockTheReelsMegaways/img/symbol-06.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_07",
                            "bg": "rockTheReelsMegaways/img/symbol-07.png",
                            "payout_values": true

                        }

                    ],

                    [

                        {
                            "id": "symbol_08",
                            "bg": "rockTheReelsMegaways/img/paytable/symbol-08.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_09",
                            "bg": "rockTheReelsMegaways/img/paytable/symbol-09.png",
                            "payout_values": true

                        }



                    ],
                    [
                        {
                            "id": "symbol_10",
                            "bg": "rockTheReelsMegaways/img/paytable/symbol-10.png",
                            "payout_values": false,
                            "text": [
                                "Wild",
                                "Wild can appear on reel 2,3,4 during base game and Free Spins.",
                                "Wild cannot appear on top Horizontal reel.",
                                "Wilds substitutes all the symbols, except Scatters and Special Symbols."
                            ]

                        }
                    ],
                    [
                        {
                            "id": "symbol_11",
                            "bg": "rockTheReelsMegaways/img/paytable/symbol-11.png",
                            "payout_values": false,
                            "text": [
                                "Multiplier Wild",
                                "Multiplier Wild can only be added on reels 2,3,4 by the Lion.",
                                "It multiplies x2 on regular game.",
                                "Multiplier Wild cannot appear on top Horizontal reel.",
                                "Wilds substitutes all the symbols, except Scatters and Special Symbols."
                            ]

                        }
                    ],
                    [

                        {
                            "id": "smb9",
                            "payout_values": false,
                            "text": [
                                "Band Members",
                            ]
                        }
                    ],
                    [

                        {
                            "id": "symbol_13",
                            "bg": "rockTheReelsMegaways/img/paytable/symbol-13.png",
                            "payout_values": false,
                            "text": [
                                "Warthog",
                                "Can only appear on top reel, during base game and Free Spins.",
                                "Transform 2 to 4 symbols on reels 2 to 4 into Wilds.",
                                "Can appear on tumbles too.",
                            ]
                        }
                    ],
                    [

                        {
                            "id": "symbol_14",
                            "bg": "rockTheReelsMegaways/img/paytable/symbol-14.png",
                            "payout_values": false,
                            "text": [
                                "Octopus",
                                "Can only appear on top reel, during base game and Free Spins.",
                                "Transform 2 to 4 symbols on reels 1 to 4 into a random symbol picked from reel 1.",
                                "Can appear on tumbles too.",
                            ],

                        }
                    ],
                    [

                        {
                            "id": "symbol_15",
                            "bg": "rockTheReelsMegaways/img/paytable/symbol-15.png",
                            "payout_values": false,
                            "text": [
                                "Flamingo",
                                "Can only appear on top reel, during base game and Free Spins.",
                                "Transform 3 to 4 symbols on reels 1 to 3 into the high symbol (cougar).",
                                "Can appear on tumbles too.",
                            ],

                        }
                    ],
                    [

                        {
                            "id": "symbol_16",
                            "bg": "rockTheReelsMegaways/img/paytable/symbol-16.png",
                            "payout_values": false,
                            "text": [
                                "Lion",
                                "Can only appear on top reel, during base game and Free Spins.",
                                "Transform 2 symbols on reels 2 and 3 into Multiplier Wilds.",
                                "Can appear on tumbles too.",
                                "Multiplier on Wilds in base game is always 2.",
                                "During Free Spins the Wild Multiplier increases each time the Lion shows."
                            ],

                        }
                    ],
                    [
                        {
                            "id": "addSF",
                            "bg": "rockTheReelsMegaways/img/paytable/symbol-12.png",
                            "payout_values": false,
                            "text": [
                                "Free Spins",
                                "Scatter symbol, can appear on spin and tumbles during base game and Free Spins.",
                                "3 Scatters award 8 Free Spins.",
                                "4 Scatters award 10 Free Spins.",
                                "5 Scatters award 15 Free Spins.",
                                "6 Scatters award 20 Free Spins.",
                                "Additional Free Spins",
                                "Scatter symbols, can appear on spin and tumbles and award additional Free Spins.",
                                "3 Scatters award 4 Free Spins.",
                                "4 Scatters award 6 Free Spins.",
                                "5 Scatters award 8 Free Spins.",
                                "6 Scatters award 12 Free Spins.",
                            ],


                        }
                    ],
                    [

                        {
                            "id" : "tumble_screenshot",
                            "bg" : "rockTheReelsMegaways/img/paytable/winways.png",
                            "text": [
                                "Whenever a win way pays out the symbols are destroyed and all remaining symbols tumble down.",
                                "All destroyed symbols are replaced with symbols from higher up on the reels.",
                                "If the new symbols also form a win way they too will pay out and more symbols will tumble in to replace them, this will continue until no more Win Ways can be made."
                            ],
                            "size": { //Optional field that sets image height & width in px

                                "height": "216",
                                "width":  "300"

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

                    "bg": "rockTheReelsMegaways/img/paytable/winways.png",
                    "text": {

                        "value": [
                            "Green: Appears on each of the first 3 Reels and once on Top Reel counting for reel 3. Appears twice on reel 2. The payout is the value for 4x Green, multiplied by 1*2*1*1",
                            "This will be the total win before tumbles occur."

                        ]

                    }

                }

            ],

        }

    ]

}