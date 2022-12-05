
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
        "winWayOb": "brandedVegasLuckyDiceMW/img/default/loader/btg-megaways.png",
    },
    "loaderMc": {
        "staticLoaderLogoClient": {
            "clients":["redQueen","Betfred"],
            "name":"loader/logo-loader.png",
            "path": "brandedVegasLuckyDiceMW/img/",
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
        "sprite": "fonts/fontDice.png",
        "font": "fonts/fontDice.xml"
    },
    "bmpFontSmall":{
        "sprite": "fonts/fontDice.png",
        "font": "fonts/fontDice.xml"
    },
    "multiBmpFont":{
        "sprite": "fonts/multiplyerDice.png",
        "font": "fonts/multiplyerDice.xml"
    }
}

var extScripts={
    "webfont": "15px FuturaPT-Heavy",
    "webfont1": "15px FuturaPT-Book",
    "webfont2": "15px YesevaOne"
}
var gameAssets = {
    "assets": {
        "icon0": "brandedVegasLuckyDiceMW/img/default/symbol-00.png",
        "icon1": "brandedVegasLuckyDiceMW/img/default/symbol-01.png",
        "icon2": "brandedVegasLuckyDiceMW/img/default/symbol-02.png",
        "icon3": "brandedVegasLuckyDiceMW/img/default/symbol-03.png",
        "icon4": "brandedVegasLuckyDiceMW/img/default/symbol-04.png",
        "icon5": "brandedVegasLuckyDiceMW/img/default/symbol-05.png",
        "icon6": "brandedVegasLuckyDiceMW/img/default/symbol-06.png",
        "icon7": "brandedVegasLuckyDiceMW/img/default/symbol-07.png",
        "icon8": "brandedVegasLuckyDiceMW/img/default/symbol-08.png",
        "icon9": "brandedVegasLuckyDiceMW/img/default/symbol-09.png",
        "icon7GH": "brandedVegasLuckyDiceMW/img/default/paytable/symbol-07.png",
        "icon8GH": "brandedVegasLuckyDiceMW/img/default/paytable/symbol-08.png",
        "icon9GH": "brandedVegasLuckyDiceMW/img/default/paytable/symbol-09.png",
        "icon10": "brandedVegasLuckyDiceMW/img/default/symbol-10.png",
        "icon12": "brandedVegasLuckyDiceMW/img/default/symbol-11.png",
        "icon18": "brandedVegasLuckyDiceMW/img/default/empty.png",
        "none": "brandedVegasLuckyDiceMW/img/default/transparent.png",

        "smbFrameBg_2": "brandedVegasLuckyDiceMW/img/default/back-frame-06.png",
        "smbFrameBg_3": "brandedVegasLuckyDiceMW/img/default/back-frame-05.png",
        "smbFrameBg_4": "brandedVegasLuckyDiceMW/img/default/back-frame-04.png",
        "smbFrameBg_5": "brandedVegasLuckyDiceMW/img/default/back-frame-03.png",
        "smbFrameBg_6": "brandedVegasLuckyDiceMW/img/default/back-frame-02.png",
        "smbFrameBg_7": "brandedVegasLuckyDiceMW/img/default/back-frame-01.png",
        "smbFrameBg_9": "brandedVegasLuckyDiceMW/img/default/back-frame-01.png",
        "smbFrameBg_10": "brandedVegasLuckyDiceMW/img/default/back-frame-01.png",
        "smbFrameBg_11": "brandedVegasLuckyDiceMW/img/default/back-frame-01.png",

        "smbFrame9_2": "brandedVegasLuckyDiceMW/img/BGT/frames/symbol-09/frame-06.png",
        "smbFrame9_3": "brandedVegasLuckyDiceMW/img/BGT/frames/symbol-09/frame-05.png",
        "smbFrame9_4": "brandedVegasLuckyDiceMW/img/BGT/frames/symbol-09/frame-04.png",
        "smbFrame9_5": "brandedVegasLuckyDiceMW/img/BGT/frames/symbol-09/frame-03.png",
        "smbFrame9_6": "brandedVegasLuckyDiceMW/img/BGT/frames/symbol-09/frame-02.png",
        "smbFrame9_7": "brandedVegasLuckyDiceMW/img/BGT/frames/symbol-09/frame-01.png",

        "smbFrame10_2": "brandedVegasLuckyDiceMW/img/BGT/frames/symbol-10/frame-06.png",
        "smbFrame10_3": "brandedVegasLuckyDiceMW/img/BGT/frames/symbol-10/frame-05.png",
        "smbFrame10_4": "brandedVegasLuckyDiceMW/img/BGT/frames/symbol-10/frame-04.png",
        "smbFrame10_5": "brandedVegasLuckyDiceMW/img/BGT/frames/symbol-10/frame-03.png",
        "smbFrame10_6": "brandedVegasLuckyDiceMW/img/BGT/frames/symbol-10/frame-02.png",
        "smbFrame10_7": "brandedVegasLuckyDiceMW/img/BGT/frames/symbol-10/frame-01.png",

        "smbFrame11_2": "brandedVegasLuckyDiceMW/img/BGT/frames/symbol-10/frame-06.png",
        "smbFrame11_3": "brandedVegasLuckyDiceMW/img/BGT/frames/symbol-10/frame-05.png",
        "smbFrame11_4": "brandedVegasLuckyDiceMW/img/BGT/frames/symbol-10/frame-04.png",
        "smbFrame11_5": "brandedVegasLuckyDiceMW/img/BGT/frames/symbol-10/frame-03.png",
        "smbFrame11_6": "brandedVegasLuckyDiceMW/img/BGT/frames/symbol-10/frame-02.png",
        "smbFrame11_7": "brandedVegasLuckyDiceMW/img/BGT/frames/symbol-10/frame-01.png",


        "smbFrame12_2": "brandedVegasLuckyDiceMW/img/BGT/frames/symbol-10/frame-06.png",
        "smbFrame12_3": "brandedVegasLuckyDiceMW/img/BGT/frames/symbol-10/frame-05.png",
        "smbFrame12_4": "brandedVegasLuckyDiceMW/img/BGT/frames/symbol-10/frame-04.png",
        "smbFrame12_5": "brandedVegasLuckyDiceMW/img/BGT/frames/symbol-10/frame-03.png",
        "smbFrame12_6": "brandedVegasLuckyDiceMW/img/BGT/frames/symbol-10/frame-02.png",
        "smbFrame12_7": "brandedVegasLuckyDiceMW/img/BGT/frames/symbol-10/frame-01.png",

        "bicon0": "brandedVegasLuckyDiceMW/img/default/b-symbol-00.png",
        "bicon1": "brandedVegasLuckyDiceMW/img/default/b-symbol-01.png",
        "bicon2": "brandedVegasLuckyDiceMW/img/default/b-symbol-02.png",
        "bicon3": "brandedVegasLuckyDiceMW/img/default/b-symbol-03.png",
        "bicon4": "brandedVegasLuckyDiceMW/img/default/b-symbol-04.png",
        "bicon5": "brandedVegasLuckyDiceMW/img/default/b-symbol-05.png",
        "bicon6": "brandedVegasLuckyDiceMW/img/default/b-symbol-06.png",
        "bicon7": "brandedVegasLuckyDiceMW/img/default/b-symbol-07.png",
        "bicon8": "brandedVegasLuckyDiceMW/img/default/b-symbol-08.png",
        "bicon9": "brandedVegasLuckyDiceMW/img/default/b-symbol-09.png",
        "bicon10": "brandedVegasLuckyDiceMW/img/default/b-symbol-10.png",
        "bicon12": "brandedVegasLuckyDiceMW/img/default/b-symbol-11.png",

        "anchorBgFs": "brandedVegasLuckyDiceMW/img/default/transparent.png",
        "anchorShadFs": "brandedVegasLuckyDiceMW/img/default/transparent.png",
        "bottomBar": "gui/message-bar.png",
        "bgPanel": "brandedVegasLuckyDiceMW/img/default/pop-up.png",
        "bgPanelFs": "brandedVegasLuckyDiceMW/img/default/pop-up.png",
        "bgPanelGame": "brandedVegasLuckyDiceMW/img/default/pop-up.png",
        "bgTransition": "brandedVegasLuckyDiceMW/img/default/transparent.png",
        "freeSpins":"brandedVegasLuckyDiceMW/img/default/free-spins-header.png",
        "bigWin":"brandedVegasLuckyDiceMW/img/default/big_win.png",
        "superWin":"brandedVegasLuckyDiceMW/img/default/epic_win.png",
        "megaWin":"brandedVegasLuckyDiceMW/img/default/ultra_win.png",
        "buttonBg":"gui/generic/img/desktop/png/cp-info-bar.png",
        "volOnButton": "gui/btnVolOn.png",
        "volOffButton": "gui/btnVolOff.png",
        "featureBg":"brandedVegasLuckyDiceMW/img/default/transparent.png",
        "featureGlow":"brandedVegasLuckyDiceMW/img/default/transparent.png",
        "featurePanel":"brandedVegasLuckyDiceMW/img/default/buyFeature/buy-feature-pop-up.png",
        "winGlow":"brandedVegasLuckyDiceMW/img/default/transparent.png",
        "candle":"brandedVegasLuckyDiceMW/img/default/transparent.png",
        "bgAlpha":"brandedVegasLuckyDiceMW/img/default/alpha.png",
        "freeSpinPanel": "brandedVegasLuckyDiceMW/img/default/free-spins.png",
    },
    "localizedAssets":{
    },
    "clientAssets":{
        "conf": {
            "7032":{
                "BGT":{
                    "name": "",
                },
            }
        },
        "graphAsset": {
            "bgPreview":{
                "name":"Intro-page.jpg",
                "path": "brandedVegasLuckyDiceMW/img/",
            },
            "bgPreview1":{
                "name":"page-01.png",
                "path": "brandedVegasLuckyDiceMW/img/",
            },
            "bgPreview2":{
                "name":"page-02.png",
                "path": "brandedVegasLuckyDiceMW/img/",
            },
            "bgPreview3":{
                "name":"page-03.png",
                "path": "brandedVegasLuckyDiceMW/img/",
            },
            "logo":{
                "name":"logo.png",
                "path": "brandedVegasLuckyDiceMW/img/",
            },
            "bg_r":{
                "name":"bg/base-right.jpg",
                "path": "brandedVegasLuckyDiceMW/img/",
            },
            "bg_l":{
                "name":"bg/base-left.jpg",
                "path": "brandedVegasLuckyDiceMW/img/",
            },
            "bg_b": {
                "name":"bg/base-bottom.jpg",
                "path": "brandedVegasLuckyDiceMW/img/",
            },
            "bg_t": {
                "name":"bg/base-top.jpg",
                "path": "brandedVegasLuckyDiceMW/img/",
            },
            "bg_m": {
                "name":"bg/base-main.jpg",
                "path": "brandedVegasLuckyDiceMW/img/",
            },

            "bg_r_FS": {
                "name":"bg/base-right_FS.jpg",
                "path": "brandedVegasLuckyDiceMW/img/",
            },
            "bg_l_FS": {
                "name":"bg/base-left_FS.jpg",
                "path": "brandedVegasLuckyDiceMW/img/",
            },
            "bg_b_FS": {
                "name":"bg/base-bottom_FS.jpg",
                "path": "brandedVegasLuckyDiceMW/img/",
            },
            "bg_t_FS": {
                "name":"bg/base-top_FS.jpg",
                "path": "brandedVegasLuckyDiceMW/img/",
            },
            "bg_m_FS": {
                "name":"bg/base-main_FS.jpg",
                "path": "brandedVegasLuckyDiceMW/img/",
            },
            "anchorBg": {
                "name":"side-feature/side-feature-static.png",
                "path": "brandedVegasLuckyDiceMW/img/",
            },
            "freeRoundsPanel": {
                "name":"bg/base-top-free-rounds.jpg",
                "path": "brandedVegasLuckyDiceMW/img/",
            }

        },
        "animAssets": {
            "smbBg_0_2":{
                "name": "anim/symbol-00-05/tile-06",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_0_3":{
                "name": "anim/symbol-00-05/tile-05",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_0_4":{
                "name": "anim/symbol-00-05/tile-04",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_0_5":{
                "name": "anim/symbol-00-05/tile-03",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_0_6":{
                "name": "anim/symbol-00-05/tile-02",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_0_7":{
                "name": "anim/symbol-00-05/tile-01",
                "path": "brandedVegasLuckyDiceMW/img/"
            },

            "smbBg_1_2":{
                "name": "anim/symbol-00-05/tile-06",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_1_3":{
                "name": "anim/symbol-00-05/tile-05",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_1_4":{
                "name": "anim/symbol-00-05/tile-04",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_1_5":{
                "name": "anim/symbol-00-05/tile-03",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_1_6":{
                "name": "anim/symbol-00-05/tile-02",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_1_7":{
                "name": "anim/symbol-00-05/tile-01",
                "path": "brandedVegasLuckyDiceMW/img/"
            },

            "smbBg_2_2":{
                "name": "anim/symbol-00-05/tile-06",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_2_3":{
                "name": "anim/symbol-00-05/tile-05",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_2_4":{
                "name": "anim/symbol-00-05/tile-04",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_2_5":{
                "name": "anim/symbol-00-05/tile-03",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_2_6":{
                "name": "anim/symbol-00-05/tile-02",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_2_7":{
                "name": "anim/symbol-00-05/tile-01",
                "path": "brandedVegasLuckyDiceMW/img/"
            },

            "smbBg_3_2":{
                "name": "anim/symbol-00-05/tile-06",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_3_3":{
                "name": "anim/symbol-00-05/tile-05",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_3_4":{
                "name": "anim/symbol-00-05/tile-04",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_3_5":{
                "name": "anim/symbol-00-05/tile-03",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_3_6":{
                "name": "anim/symbol-00-05/tile-02",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_3_7":{
                "name": "anim/symbol-00-05/tile-01",
                "path": "brandedVegasLuckyDiceMW/img/"
            },

            "smbBg_4_2":{
                "name": "anim/symbol-00-05/tile-06",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_4_3":{
                "name": "anim/symbol-00-05/tile-05",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_4_4":{
                "name": "anim/symbol-00-05/tile-04",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_4_5":{
                "name": "anim/symbol-00-05/tile-03",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_4_6":{
                "name": "anim/symbol-00-05/tile-02",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_4_7":{
                "name": "anim/symbol-00-05/tile-01",
                "path": "brandedVegasLuckyDiceMW/img/"
            },

            "smbBg_5_2":{
                "name": "anim/symbol-00-05/tile-06",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_5_3":{
                "name": "anim/symbol-00-05/tile-05",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_5_4":{
                "name": "anim/symbol-00-05/tile-04",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_5_5":{
                "name": "anim/symbol-00-05/tile-03",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_5_6":{
                "name": "anim/symbol-00-05/tile-02",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_5_7":{
                "name": "anim/symbol-00-05/tile-01",
                "path": "brandedVegasLuckyDiceMW/img/"
            },

            "smbBg_6_2":{
                "name": "anim/symbol-06/tile-06-purple",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_6_3":{
                "name": "anim/symbol-06/tile-05-purple",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_6_4":{
                "name": "anim/symbol-06/tile-04-purple",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_6_5":{
                "name": "anim/symbol-06/tile-03-purple",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_6_6":{
                "name": "anim/symbol-06/tile-02-purple",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_6_7":{
                "name": "anim/symbol-06/tile-01-purple",
                "path": "brandedVegasLuckyDiceMW/img/"
            },

            "smbBg_7_2":{
                "name": "anim/symbol-07/tile-06-blue",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_7_3":{
                "name": "anim/symbol-07/tile-05-blue",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_7_4":{
                "name": "anim/symbol-07/tile-04-blue",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_7_5":{
                "name": "anim/symbol-07/tile-03-blue",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_7_6":{
                "name": "anim/symbol-07/tile-02-blue",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_7_7":{
                "name": "anim/symbol-07/tile-01-blue",
                "path": "brandedVegasLuckyDiceMW/img/"
            },


            "smbBg_8_2":{
                "name": "anim/symbol-08/tile-06-green",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_8_3":{
                "name": "anim/symbol-08/tile-05-green",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_8_4":{
                "name": "anim/symbol-08/tile-04-green",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_8_5":{
                "name": "anim/symbol-08/tile-03-green",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_8_6":{
                "name": "anim/symbol-08/tile-02-green",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_8_7":{
                "name": "anim/symbol-08/tile-01-green",
                "path": "brandedVegasLuckyDiceMW/img/"
            },

            "smbBg_9_2":{
                "name": "anim/symbol-09/tile-06-yellow",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_9_3":{
                "name": "anim/symbol-09/tile-05-yellow",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_9_4":{
                "name": "anim/symbol-09/tile-04-yellow",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_9_5":{
                "name": "anim/symbol-09/tile-03-yellow",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_9_6":{
                "name": "anim/symbol-09/tile-02-yellow",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_9_7":{
                "name": "anim/symbol-09/tile-01-yellow",
                "path": "brandedVegasLuckyDiceMW/img/"
            },

            "smbBg_10_2":{
                "name": "anim/symbol-10/tile-06-red",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_10_3":{
                "name": "anim/symbol-10/tile-05-red",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_10_4":{
                "name": "anim/symbol-10/tile-04-red",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_10_5":{
                "name": "anim/symbol-10/tile-03-red",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_10_6":{
                "name": "anim/symbol-10/tile-02-red",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_10_7":{
                "name": "anim/symbol-10/tile-01-red",
                "path": "brandedVegasLuckyDiceMW/img/"
            },

            "smbBg_11_2":{
                "name": "anim/symbol-10/tile-06-red",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_11_3":{
                "name": "anim/symbol-10/tile-05-red",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_11_4":{
                "name": "anim/symbol-10/tile-04-red",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_11_5":{
                "name": "anim/symbol-10/tile-03-red",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_11_6":{
                "name": "anim/symbol-10/tile-02-red",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_11_7":{
                "name": "anim/symbol-10/tile-01-red",
                "path": "brandedVegasLuckyDiceMW/img/"
            },

            "smbBg_12_2":{
                "name": "anim/symbol-10/tile-06-red",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_12_3":{
                "name": "anim/symbol-10/tile-05-red",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_12_4":{
                "name": "anim/symbol-10/tile-04-red",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_12_5":{
                "name": "anim/symbol-10/tile-03-red",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_12_6":{
                "name": "anim/symbol-10/tile-02-red",
                "path": "brandedVegasLuckyDiceMW/img/"
            },
            "smbBg_12_7":{
                "name": "anim/symbol-10/tile-01-red",
                "path": "brandedVegasLuckyDiceMW/img/"
            },

            "anchorIn":{
                "name": "side-feature/side-feature",
                "path": "brandedVegasLuckyDiceMW/img/"
            },

        },
        "buttonsSpriteSheet":{
            "buyFeature":{
                "json": "brandedVegasLuckyDiceMW/img/default/buy-feature-btn.png",
                "sprite": "brandedVegasLuckyDiceMW/img/default/buy-feature-btn.png",
                "w": 447/3,
                "h": 61
            },
        }
    },
    "buttonsSpriteSheet": {
        "container-btn": {
            "sprite": "brandedVegasLuckyDiceMW/img/default/generic-game-btn.png",
            "json": "brandedVegasLuckyDiceMW/img/default/generic-game-btn.png",
            "w": 185,
            "h": 74
        },
        "feature-Fn-btn": {
            "sprite": "brandedVegasLuckyDiceMW/img/default/buyFeature/buy-fs-btn.png",
            "json": "brandedVegasLuckyDiceMW/img/default/buyFeature/buy-fs-btn.png",
            "w": 447/3,
            "h": 61
        },
        "feature-Rn-btn": {
            "sprite": "brandedVegasLuckyDiceMW/img/default/buyFeature/buy-reels-btn.png",
            "json": "brandedVegasLuckyDiceMW/img/default/buyFeature/buy-reels-btn.png",
            "w": 447/3,
            "h": 61
        },
        "yesButton": {
            "sprite": "brandedVegasLuckyDiceMW/img/default/yes-btn.png",
            "json": "brandedVegasLuckyDiceMW/img/default/yes-btn.png",
            "w": 330/3,
            "h": 103
        },
        "noButton": {
            "sprite": "brandedVegasLuckyDiceMW/img/default/no-btn.png",
            "json": "brandedVegasLuckyDiceMW/img/default/no-btn.png",
            "w": 330/3,
            "h": 103
        },
        "check": {
            "sprite": "brandedVegasLuckyDiceMW/img/default/radio-btns.png",
            "json": "brandedVegasLuckyDiceMW/img/default/radio-btns.png",
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
            "json": "brandedVegasLuckyDiceMW/img/default/buy-feature-btn.png",
            "sprite": "brandedVegasLuckyDiceMW/img/default/buy-feature-btn.png",
            "w": 447/3,
            "h": 61
        },

    },
    "animations": {
        "anim0": {
            "json": "brandedVegasLuckyDiceMW/img/default/anim/symbol-00.json",
            "sprite": "brandedVegasLuckyDiceMW/img/default/anim/symbol-00.png"
        },
        "anim1": {
            "json": "brandedVegasLuckyDiceMW/img/default/anim/symbol-01.json",
            "sprite": "brandedVegasLuckyDiceMW/img/default/anim/symbol-01.png"
        },
        "anim2": {
            "json": "brandedVegasLuckyDiceMW/img/default/anim/symbol-02.json",
            "sprite": "brandedVegasLuckyDiceMW/img/default/anim/symbol-02.png"
        },
        "anim3": {
            "json": "brandedVegasLuckyDiceMW/img/default/anim/symbol-03.json",
            "sprite": "brandedVegasLuckyDiceMW/img/default/anim/symbol-03.png"
        },
        "anim4": {
            "json": "brandedVegasLuckyDiceMW/img/default/anim/symbol-04.json",
            "sprite": "brandedVegasLuckyDiceMW/img/default/anim/symbol-04.png"
        },
        "anim5": {
            "json": "brandedVegasLuckyDiceMW/img/default/anim/symbol-05.json",
            "sprite": "brandedVegasLuckyDiceMW/img/default/anim/symbol-05.png"
        },
        "anim6": {
            "json": "brandedVegasLuckyDiceMW/img/default/anim/symbol-06.json",
            "sprite": "brandedVegasLuckyDiceMW/img/default/anim/symbol-06.png"
        },
        "anim7": {
            "json": "brandedVegasLuckyDiceMW/img/default/anim/symbol-07.json",
            "sprite": "brandedVegasLuckyDiceMW/img/default/anim/symbol-07.png"
        },
        "anim8": {
            "json": "brandedVegasLuckyDiceMW/img/default/anim/symbol-08.json",
            "sprite": "brandedVegasLuckyDiceMW/img/default/anim/symbol-08.png"
        },
        "anim9": {
            "json": "brandedVegasLuckyDiceMW/img/default/anim/symbol-09.json",
            "sprite": "brandedVegasLuckyDiceMW/img/default/anim/symbol-09.png"
        },
        "anim10": {
            "json": "brandedVegasLuckyDiceMW/img/default/anim/symbol-10.json",
            "sprite": "brandedVegasLuckyDiceMW/img/default/anim/symbol-10.png"
        },
        "anim12": {
            "json": "brandedVegasLuckyDiceMW/img/default/anim/symbol-11.json",
            "sprite": "brandedVegasLuckyDiceMW/img/default/anim/symbol-11.png"
        },
        "part-1": {
            "json": "brandedVegasLuckyDiceMW/img/default/anim/bronze-coin.json",
            "sprite": "brandedVegasLuckyDiceMW/img/default/anim/bronze-coin.png"
        },
        "part-2": {
            "json": "brandedVegasLuckyDiceMW/img/default/anim/silver-coin.json",
            "sprite": "brandedVegasLuckyDiceMW/img/default/anim/silver-coin.png"
        },
        "part-3": {
            "json": "brandedVegasLuckyDiceMW/img/default/anim/gold-coin.json",
            "sprite": "brandedVegasLuckyDiceMW/img/default/anim/gold-coin.png"
        },
        "f-part-1": {
            "json": "brandedVegasLuckyDiceMW/img/default/anim/bronze-coin-frwrd.json",
            "sprite": "brandedVegasLuckyDiceMW/img/default/anim/bronze-coin-frwrd.png"
        },
        "f-part-2": {
            "json": "brandedVegasLuckyDiceMW/img/default/anim/silver-coin-frwrd.json",
            "sprite": "brandedVegasLuckyDiceMW/img/default/anim/silver-coin-frwrd.png"
        },
        "f-part-3": {
            "json": "brandedVegasLuckyDiceMW/img/default/anim/gold-coin-frwrd.json",
            "sprite": "brandedVegasLuckyDiceMW/img/default/anim/gold-coin-frwrd.png"
        },
        "lockSkull":{
            "json": "brandedVegasLuckyDiceMW/img/default/anim/fakeAnim.json",
            "sprite": "brandedVegasLuckyDiceMW/img/default/anim/fakeAnim.png"
        },
        "lockIn":{
            "json": "brandedVegasLuckyDiceMW/img/default/anim/lockFeature/lock-feature.json",
            "sprite": "brandedVegasLuckyDiceMW/img/default/anim/lockFeature/lock-feature.png"
        },
        "lockOut":{
            "json": "brandedVegasLuckyDiceMW/img/default/anim/fakeAnim.json",
            "sprite": "brandedVegasLuckyDiceMW/img/default/anim/fakeAnim.png"
        },
        "candleAnim":{
            "json": "brandedVegasLuckyDiceMW/img/default/anim/fakeAnim.json",
            "sprite": "brandedVegasLuckyDiceMW/img/default/anim/fakeAnim.png"
        },
        "cannonAnim":{
            "json": "brandedVegasLuckyDiceMW/img/default/anim/fakeAnim.json",
            "sprite": "brandedVegasLuckyDiceMW/img/default/anim/fakeAnim.png"
        },
        "winMap":{
            "json": "brandedVegasLuckyDiceMW/img/default/anim/fakeAnim.json",
            "sprite": "brandedVegasLuckyDiceMW/img/default/anim/fakeAnim.png"
        },
        "explosion":{
            "json": "brandedVegasLuckyDiceMW/img/default/anim/fakeAnim.json",
            "sprite": "brandedVegasLuckyDiceMW/img/default/anim/fakeAnim.png"
        }
    },
    "importantSounds": {
        "spinClick": {
            "name": "brandedVegasLuckyDiceMW/sounds/spinClick.mp3",
            "volume": .1
        },
        "reelStop": {
            "name": "brandedVegasLuckyDiceMW/sounds/reelStop.mp3",
            "volume":.8
        },
        "reelSound": {
            "name": "brandedVegasLuckyDiceMW/sounds/reelSound.mp3",
            "volume":1
        },
        "coins": {
            "name": "brandedVegasLuckyDiceMW/sounds/coins.mp3",
            "volume": 1
        },
        "iconPop": {
            "name": "brandedVegasLuckyDiceMW/sounds/tumbling.mp3",
            "volume": 1.1
        },
        "winAmountFall": {
            "name": "brandedVegasLuckyDiceMW/sounds/winAmountFall.mp3",
            "volume": .6
        }
    },
    "bgImportantSounds":{
        "bgSlot": {
            "name": "brandedVegasLuckyDiceMW/sounds/bg_layer1.mp3",
            "volume": .8,
            "marker":true
        }

    },
    "sounds": {
        "click": {
            "name": "brandedVegasLuckyDiceMW/sounds/click.mp3",
            "volume": .3
        },
        "multiplier": {
            "name": "brandedVegasLuckyDiceMW/sounds/multiplier.mp3",
            "volume": .6
        },
        "multiplier_1": {
            "name": "brandedVegasLuckyDiceMW/sounds/multiplier_layer1.mp3",
            "volume": 1
        },
        "multiplier_2": {
            "name": "brandedVegasLuckyDiceMW/sounds/multiplier_layer2.mp3",
            "volume": 1
        },
        "multiplier_3": {
            "name": "brandedVegasLuckyDiceMW/sounds/multiplier_layer3.mp3",
            "volume": 1
        },
        "lock": {
            "name": "brandedVegasLuckyDiceMW/sounds/reelLock.mp3",
            "volume": 1
        },
        "anchor_activate1": {
            "name": "brandedVegasLuckyDiceMW/sounds/anchor_activate1.mp3",
            "volume": 1
        },
        "anchor_activate2": {
            "name": "brandedVegasLuckyDiceMW/sounds/anchor_activate2.mp3",
            "volume": 1
        },
        "anchor_activate3": {
            "name": "brandedVegasLuckyDiceMW/sounds/anchor_activate3.mp3",
            "volume": 1
        },
        "anchor_activate4": {
            "name": "brandedVegasLuckyDiceMW/sounds/anchor_activate4.mp3",
            "volume": 1
        },
        "additionalFs": {
            "name": "brandedVegasLuckyDiceMW/sounds/anchor_activate4.mp3",
            "volume": 1
        },
        "anchor_deactivate": {
            "name": "brandedVegasLuckyDiceMW/sounds/anchor_deactivate.mp3",
            "volume": 1
        },
        "smbWin_0": {
            "name": "brandedVegasLuckyDiceMW/sounds/smbWin_1.mp3",
            "multiple":["smbWin_1"],
            "volume": 1
        },
        "smbWin_2": {
            "name": "brandedVegasLuckyDiceMW/sounds/smbWin_2.mp3",
            "volume": 1
        },
        "smbWin_3": {
            "name": "brandedVegasLuckyDiceMW/sounds/smbWin_3.mp3",
            "volume": 1
        },
        "smbWin_4": {
            "name": "brandedVegasLuckyDiceMW/sounds/smbWin_4.mp3",
            "volume": 1
        },
        "smbWin_5": {
            "name": "brandedVegasLuckyDiceMW/sounds/smbWin_5.mp3",
            "volume": 1
        },

        "smbWin_6": {
            "name": "brandedVegasLuckyDiceMW/sounds/smbWin_6.mp3",
            "volume": 1
        },
        "smbWin_7": {
            "name": "brandedVegasLuckyDiceMW/sounds/smbWin_7.mp3",
            "volume": 1
        },
        "smbWin_8": {
            "name": "brandedVegasLuckyDiceMW/sounds/smbWin_8.mp3",
            "volume": 1
        },
        "smbWin_9": {
            "name": "brandedVegasLuckyDiceMW/sounds/smbWin_9.mp3",
            "volume": 1
        },
        "smbWin_10": {
            "name": "brandedVegasLuckyDiceMW/sounds/smbWin_10.mp3",
            "volume": 1
        },
        "smbWin_12": {
            "name": "brandedVegasLuckyDiceMW/sounds/smbWin_10.mp3",
            "volume": 1
        },
        "winBg_0": {
            "name": "brandedVegasLuckyDiceMW/sounds/centralWin/win1.mp3",
            "volume": 0
        },
        "winBg_1": {
            "name": "brandedVegasLuckyDiceMW/sounds/centralWin/win2.mp3",
            "volume":  0.4
        },
        "winBg_2": {
            "name": "brandedVegasLuckyDiceMW/sounds/centralWin/win3.mp3",
            "volume":  0.4
        },
        "winBg_3": {
            "name": "brandedVegasLuckyDiceMW/sounds/centralWin/win4.mp3",
            "volume":  0.5
        },
        "winBg_4": {
            "name": "brandedVegasLuckyDiceMW/sounds/centralWin/win5.mp3",
            "volume":  0.6
        },
        "winBg_5": {
            "name": "brandedVegasLuckyDiceMW/sounds/centralWin/win6.mp3",
            "volume":  0.7
        },
        "winBg_6": {
            "name": "brandedVegasLuckyDiceMW/sounds/centralWin/bigWin_Full.mp3",
            "volume":  1
        },
        "winBg_7": {
            "name": "brandedVegasLuckyDiceMW/sounds/centralWin/superBigWin_Full.mp3",
            "volume":  1
        },
        "winBg_8": {
            "name": "brandedVegasLuckyDiceMW/sounds/centralWin/megaBigWin_Full.mp3",
            "volume": 1
        },
        "winBgS_6": {
            "name": "brandedVegasLuckyDiceMW/sounds/centralWin/bigWin.mp3",
            "volume": 1
        },
        "winBgS_7": {
            "name": "brandedVegasLuckyDiceMW/sounds/centralWin/superBigWin.mp3",
            "volume":  1
        },
        "winBgS_8": {
            "name": "brandedVegasLuckyDiceMW/sounds/centralWin/megaBigWin.mp3",
            "volume": 1
        },
        "fsWon": {
            "name": "brandedVegasLuckyDiceMW/sounds/introFs.mp3",
            "volume": 1
        },
        "incWin": {
            "name": "brandedVegasLuckyDiceMW/sounds/counter.mp3",
            "volume": .6,
            "loop": true
        },
        "winPanel": {
            "name": "brandedVegasLuckyDiceMW/sounds/winScreen.mp3",
            "volume": .8
        },
        "tumble_0": {
            "name": "brandedVegasLuckyDiceMW/sounds/iconPop.mp3",
            "volume": 1.1,
            "multiple":["tumble_1","tumble_2","tumble_3","tumble_4","tumble_5","tumble_6"]
        },
        "wildx2": {
            "name": "brandedVegasLuckyDiceMW/sounds/wildx2_land.mp3",
            "volume": 1
        },
    },
    "bgSounds": {
        "bgSlot1": {
            "name": "brandedVegasLuckyDiceMW/sounds/bg_layer2.mp3",
            "volume": 0,
            "marker":true
        },
        "bgSlot2": {
            "name": "brandedVegasLuckyDiceMW/sounds/bg_layer3.mp3",
            "volume": 0,
            "marker":true
        },
        "bgSlot3": {
            "name": "brandedVegasLuckyDiceMW/sounds/bg_layer4.mp3",
            "volume": 0,
            "marker":true
        },
        "bgFs": {
            "name": "brandedVegasLuckyDiceMW/sounds/bgLevels134.mp3",
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
            "graphAsset": {
                "bg": {
                    "name": "bg_r",
                    "x": 1024,
                    "y": 72
                },
                "bg1": {
                    "name": "bg_l",
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
                    "x": 1024,
                    "y": 72
                },
                "bg1": {
                    "name": "bg_l_FS",
                    "x": 0,
                    "y": 72
                }
            }
        },
        "frameFS": {
            "visible":false,
            "graphAsset": {
                "bg4": {
                    "name": "bg_m_FS",
                    "x": 256,
                    "y": 72
                }
            }

        },
        "frame": {
            "visible": false,
            "graphAsset": {
                "bg4": {
                    "name": "bg_m",
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
        "buyFeature":{
            "buttons": {
                "buyFeature": {
                    "visible":true,
                    "name": "buyFeature",
                    "x": 1108,
                    "y": 90,
                    "evt": "doBuyFeature",
                    "texts": {
                        "txt": {
                            "x": 0,
                            "y": 4,
                            "font": "11px YesevaOne,Arial, Helvetica sans-serif",
                            "fill": "#ffffff",
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
                    "y": 632
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
                "bg4":{
                    "visible": true,
                    "name": "anchorBg",
                    "x": 1107,
                    "y": 229,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "bg3":{
                    "visible": true,
                    "name": "anchorBg",
                    "x": 1107,
                    "y": 341,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "bg2":{
                    "visible": true,
                    "name": "anchorBg",
                    "x": 1107,
                    "y": 453,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "bg1":{
                    "visible": true,
                    "name": "anchorBg",
                    "x": 1107,
                    "y": 566,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "anchor4_In": {
                    "visible": false,
                    "name": "anchorIn",
                    "x": 1107,
                    "y": 229,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "anchor3_In": {
                    "visible": false,
                    "name": "anchorIn",
                    "x": 1107,
                    "y": 341,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "anchor2_In": {
                    "visible": false,
                    "name": "anchorIn",
                    "x": 1107,
                    "y": 453,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "anchor1_In": {
                    "visible": false,
                    "name": "anchorIn",
                    "x": 1107,
                    "y": 566,
                    "anchorX":.5,
                    "anchorY":.5
                }
            }
        },
        "freeSpinAccumulatorFs": {
            "visible": false,
            "graphAsset": {
                "bg1":{
                    "visible": true,
                    "name": "anchorBg",
                    "x": 50,
                    "y": 280,
                    "scaleX":.45,
                    "scaleY":.45,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "bg2":{
                    "visible": true,
                    "name": "anchorBg",
                    "x": 101,
                    "y": 280,
                    "scaleX":.45,
                    "scaleY":.45,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "bg3":{
                    "visible": true,
                    "name": "anchorBg",
                    "x": 152,
                    "y": 280,
                    "scaleX":.45,
                    "scaleY":.45,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "bg4":{
                    "visible": true,
                    "name": "anchorBg",
                    "x": 203,
                    "y": 280,
                    "scaleX":.45,
                    "scaleY":.45,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "anchor1_In": {
                    "visible": false,
                    "name": "anchorIn",
                    "x": 50,
                    "y": 280,
                    "scaleX":.45,
                    "scaleY":.45,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "anchor2_In": {
                    "visible": false,
                    "name": "anchorIn",
                    "x": 101,
                    "y": 280,
                    "scaleY":.45,
                    "scaleX":.45,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "anchor3_In": {
                    "visible": false,
                    "name": "anchorIn",
                    "x": 152,
                    "y": 280,
                    "scaleY":.45,
                    "scaleX":.45,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "anchor4_In": {
                    "visible": false,
                    "name": "anchorIn",
                    "x": 203,
                    "y": 280,
                    "scaleY":.45,
                    "scaleX":.45,
                    "anchorX":.5,
                    "anchorY":.5
                }
            },
            "texts":{
                "fsAdditionalT":{
                    "x": 120,
                    "y": 230,
                    "font": "20px YesevaOne,Arial, Helvetica sans-serif",
                    "fill": "#f5cd87",
                    "stroke": "#000000",
                    "stroke_tick": 2,
                    "text": "Additional Free Spins",
                    "align":"center",
                    "anchorX": .5
                },
            }
        },
        "buttonFg":{},
        "stickyWild": {},
        "scatter": {},
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
            "_emitters": {
                "emitter": [{ "pos": {"x": 0, "y": 0}, "posVar": {"x": -125, "y": 0}, "speed": 66, "speedVar": 195.6372884671819, "angle": -168, "angleVar": -40, "life": 1, "lifeVar": 16.93294764034753, "radius": 14.205516971534776, "radiusVar": 5, "textureAdditive": true, "startScale": 3.023485367220084, "startScaleVar": 0, "endScale": 0.6224822814864879, "endScaleVar": 0, "startColor": [51, 103.29411764705887, 178, 1], "startColorVar": [0, 0, 51, 0.1], "endColor": [0, 0, 0, 1], "endColorVar": [0, 0, 0, 0], "colorList": [], "gravity": {"x": 87, "y": -82}, "radialAccel": 264.76394582625653, "radialAccelVar": 0, "tangentialAccel": 149.16009355019446, "tangentialAccelVar": -197.65146327799158, "totalParticles": 169, "emissionRate": 463, "xEquation": "", "yEquation": "", "textureEnabled": true, "active": true, "duration": null, "id": "aaa", "aFactor": {"x": -43.1, "y": 0}, "xFactor": {"x": -0.4, "y": 0}, "border": {"top": 500, "left": 500, "bottom": 307, "right": 466.86171111486584}, "zIndex": 0}]
            },
            "texts": {
                "frLabel": {
                    "x": 390,
                    "y": 13,
                    "fill": "#dcffff",
                    "font": "15px Futura ,Arial",
                    "text": "Free Rounds:",
                    "anchorX":  0.5
                },
                "frValue": {
                    "x": 390,
                    "y": 23,
                    "fill": "#ffffff",
                    "font": "25px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                },
                "frTotWonLabel": {
                    "x": 900,
                    "y": 13,
                    "fill": "#dcffff",
                    "font": "15px Futura ,Arial",
                    "text": "Total won:",
                    "anchorX":  0.5
                },
                "frTotWonValue": {
                    "x": 900,
                    "y": 23,
                    "fill": "#ffffff",
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
                    "y": 10,
                    "anchorX": .5
                }
            },
            "texts": {
                "fsLabel": {
                    "x": 1150,
                    "y": 82,
                    "fill": "#ffffff",
                    "font": "22px YesevaOne,Arial, Helvetica sans-serif",
                    "text": "Free Spins",
                    "anchorX": 0.5
                },
                "fsValue": {
                    "x": 1150,
                    "y": 112,
                    "fill": "#ffffff",
                    "font": "25px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                },
                "fsmultT":{
                    "x": 1150,
                    "y": 191,
                    "font": "22px YesevaOne,Arial, Helvetica sans-serif",
                    "fill": "#ffffff",
                    "text": "Multiplier",
                    "align":"center",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsMultValue":{
                    "x": 1150,
                    "y": 225,
                    "bmpFont": "multiBmpFont",
                    "size": "20",
                    "text": "",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "totWonLabel": {
                    "x": 1150,
                    "y": 272,
                    "fill": "#ffffff",
                    "font": "22px YesevaOne,Arial, Helvetica sans-serif",
                    "text": "Total won",
                    "anchorX":0.5
                },
                "totWonValue": {
                    "x": 1150,
                    "y": 300,
                    "fill": "#ffffff",
                    "font": "25px Futura ,Arial",
                    "text": "",
                    "align":"center",
                    "anchorX": 0.5
                },
                "fsAdditional":{
                    "x": 1190,
                    "y": 130,
                    "bmpFont": "multiBmpFont",
                    "size": "20",
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
                    "x": 240,
                    "y": 72
                },

                "lockIn_1": {
                    "name": "lockIn",
                    "visible":false,
                    "x": 240+ 128,
                    "y": 72
                },

                "lockIn_2": {
                    "name": "lockIn",
                    "visible":false,
                    "x": 240+ 2*128,
                    "y": 72
                },

                "lockIn_3": {
                    "name": "lockIn",
                    "visible":false,
                    "x": 240+ 3*128,
                    "y": 72
                },

                "lockIn_4": {
                    "name": "lockIn",
                    "visible":false,
                    "x": 240+ 4*128,
                    "y": 72
                },

                "lockIn_5": {
                    "name": "lockIn",
                    "visible":false,
                    "x": 240+ 5*128,
                    "y": 72
                },

            },
            "texts":{
                "fsMultValueBig":{
                    "x": 640,
                    "y": 400,
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
                "winW":{
                    "name":"logo",
                    "x": 0,
                    "y": 0
                }
            },
            "texts":{
                "winWaysNum":{
                    "x": 120,
                    "y": 160,
                    "bmpFont": "bmpFont",
                    "size": "52",
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
            "duration": 500,
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
                    "alpha": .8
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
                    "xS": 680,
                    "xE": 880,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "candle1": {
                    "name": "candle",
                    "x": 600,
                    "y": 322,
                    "xS": 600,
                    "xE": 400,
                    "scaleX":-1,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "cannon": {
                    "name": "cannonAnim",
                    "x": 640,
                    "y": 465,
                    "xS": 640,
                    "xE": 940,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "cannon1": {
                    "name": "cannonAnim",
                    "x": 440,
                    "y": 465,
                    "xS": 440,
                    "xE": 340,
                    "scaleX":-1,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "candleA": {
                    "name": "candleAnim",
                    "x": 870,
                    "y": 302,
                    "yS": -300,
                    "yE": 332,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "candleA1": {
                    "name": "candleAnim",
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
                    "x": 20,
                    "y": 20,
                    "texts": {
                        "pw1":{
                            "x": 195,
                            "y": 25,
                            "font": "60px YesevaOne,Arial, Helvetica sans-serif",
                            "fill": "#f5cd87",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "text": "Free Spins",
                            "anchorX": 0.5,
                        },
                        "pw2":{
                            "x": 195,
                            "y": 445,
                            "font": "22px YesevaOne,Arial, Helvetica sans-serif",
                            "fill": "#f5cd87",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align":"center",
                            "text": "Unlimited Win Multiplier\rUp to 14 Additional\rFree Spins",
                            "anchorX": 0.5,
                        },
                    }
                },
                "bgPreview2": {
                    "name": "bgPreview2",
                    "x": 435,
                    "y": 20,
                    "texts": {

                        "pw3":{
                            "x": 190,
                            "y": 465,
                            "font": "27px YesevaOne,Arial, Helvetica sans-serif",
                            "fill": "#f5cd87",
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
                    "x": 850,
                    "y": 20,
                    "texts": {
                        "pw4":{
                            "x": 200,
                            "y": 80,
                            "font": "25px YesevaOne,Arial, Helvetica sans-serif",
                            "fill": "#f5cd87",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align":"center",
                            "text": "Reels Lock At 7\rDuring Free Spins",
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
            "selectorY":225,
            "selectorX":650,
            "textCol":"#ffffff",
            "graphAsset": {
                "bg": {
                    "name": "featureBg",
                    "x": 0,
                    "y": 0
                },
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
                    "scaleX":1.2,
                    "scaleY":1.2
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
    "licence":true,
    "slotEngine":"MegaEngine",
    "engineNumbers":0,
    "log":true,
    "canSwipe":false,
    "fastPlayEnable":true,
    "comment_preview":"enable feature preview screen",
    "preview":true,
    "previewTout":30000,
    "spinType": "MegaWayTumblingSpinDice",
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
    "lineType": "MegaWayTumblingWinningsDice",
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
        "deltaX_0": 254,
        "deltaX": 128,
        "deltaY_0": 632,
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
            "title": "Branded MegaWays™ Game Rules",
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
                            "bg": "brandedVegasLuckyDiceMW/img/default/symbol-00.png", //symbol image
                            "payout_values": true //Whether symbol has payout values

                        },

                        {

                            "id": "symbol_01",
                            "bg": "brandedVegasLuckyDiceMW/img/default/symbol-01.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_02",
                            "bg": "brandedVegasLuckyDiceMW/img/default/symbol-02.png",
                            "payout_values": true

                        }


                    ],

                    [

                        {

                            "id": "symbol_03",
                            "bg": "brandedVegasLuckyDiceMW/img/default/symbol-03.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_04",
                            "bg": "brandedVegasLuckyDiceMW/img/default/symbol-04.png",
                            "payout_values": true

                        }

                    ],

                    [
                        {

                            "id": "symbol_05",
                            "bg": "brandedVegasLuckyDiceMW/img/default/symbol-05.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_06",
                            "bg": "brandedVegasLuckyDiceMW/img/default/symbol-06.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_07",
                            "bg": "brandedVegasLuckyDiceMW/img/default/paytable/symbol-07.png",
                            "payout_values": true

                        }

                    ],

                    [

                        {
                            "id": "symbol_08",
                            "bg": "brandedVegasLuckyDiceMW/img/default/paytable/symbol-08.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_09",
                            "bg": "brandedVegasLuckyDiceMW/img/default/paytable/symbol-09.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_10",
                            "bg": "brandedVegasLuckyDiceMW/img/default/symbol-10.png",
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
                            "bg": "brandedVegasLuckyDiceMW/img/default/symbol-11.png",
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
                            "bg" : "brandedVegasLuckyDiceMW/img/default/paytable/winways.jpg",
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
                            "bg" : "brandedVegasLuckyDiceMW/img/default/paytable/fs.png",
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
                            "bg" : "brandedVegasLuckyDiceMW/img/default/paytable/fsAdd.png",
                            "text": [
                                "Additional Freespins are reached by having multiple successive tumbles (the image shows the counter at 4). A minimum of 4 tumbles is required to trigger additional 4 Free spins.",
                                "Each extra successive win after 4 awards 1 extra Free Spins, up to a maximum of 14."
                            ],
                            "size": { //Optional field that sets image height & width in px

                                "height": "90",
                                "width":  "240"

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

                    "bg": "brandedVegasLuckyDiceMW/img/default/paytable/winways.jpg",
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
