
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
        "chromeLogo":"gui/generic/img/chrome.png"
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
                "x": 640,
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
        "sprite": "fonts/fontNewts.png",
        "font": "fonts/fontNewts.xml"
    },
    "bmpFontSmall":{
        "sprite": "fonts/fontNewts.png",
        "font": "fonts/fontNewts.xml"
    },
    "multiBmpFont":{
        "sprite": "fonts/multiplierNewts.png",
        "font": "fonts/multiplierNewts.xml"
    }
}

var extScripts={
    "webfont": "15px FuturaPT-Heavy",
    "webfont1": "15px FuturaPT-Book",
    "webfont2": "15px Andale-Mono",
    "webfont3": "25px TOMO-Fonts-TOMO-Bossa-Black"
}
var gameAssets = {
    "assets": {
        "icon0": "astroNewtsMegaways/img/symbol-00.png",
        "icon1": "astroNewtsMegaways/img/symbol-01.png",
        "icon2": "astroNewtsMegaways/img/symbol-02.png",
        "icon3": "astroNewtsMegaways/img/symbol-03.png",
        "icon4": "astroNewtsMegaways/img/symbol-04.png",
        "icon5": "astroNewtsMegaways/img/symbol-05.png",
        "icon6": "astroNewtsMegaways/img/symbol-06.png",
        "icon7": "astroNewtsMegaways/img/symbol-07.png",
        "icon8": "astroNewtsMegaways/img/symbol-08.png",
        "icon9": "astroNewtsMegaways/img/symbol-09.png",
        "icon8GH": "astroNewtsMegaways/img/paytable/symbol-08.png",
        "icon9GH": "astroNewtsMegaways/img/paytable/symbol-09.png",
        "icon10GH": "astroNewtsMegaways/img/paytable/symbol-10.png",
        "icon11GH": "astroNewtsMegaways/img/paytable/symbol-11.png",
        "icon12GH": "astroNewtsMegaways/img/paytable/symbol-12.png",
        "icon13GH": "astroNewtsMegaways/img/paytable/symbol-13.png",

        "icon10_2": "astroNewtsMegaways/img/symbol-10-100x280.png",
        "icon10_3": "astroNewtsMegaways/img/symbol-10-100x187.png",
        "icon10_4": "astroNewtsMegaways/img/symbol-10-100x140.png",
        "icon10_5": "astroNewtsMegaways/img/symbol-10-100x112.png",
        "icon10_6": "astroNewtsMegaways/img/symbol-10-100x94.png",
        "icon10_7": "astroNewtsMegaways/img/symbol-10-100x80.png",


        "icon12": "astroNewtsMegaways/img/symbol-12.png",
        "icon13": "astroNewtsMegaways/img/symbol-13.png",
        "icon18": "astroNewtsMegaways/img/empty.png",
        "icon19": "astroNewtsMegaways/img/empty.png",
        "none": "astroNewtsMegaways/img/transparent.png",

        "smbBg_0_2": "astroNewtsMegaways/img/tiles/tile-00-07.png",
        "smbBg_0_3": "astroNewtsMegaways/img/tiles/tile-00-06.png",
        "smbBg_0_4": "astroNewtsMegaways/img/tiles/tile-00-05.png",
        "smbBg_0_5": "astroNewtsMegaways/img/tiles/tile-00-04.png",
        "smbBg_0_6": "astroNewtsMegaways/img/tiles/tile-00-03.png",
        "smbBg_0_7": "astroNewtsMegaways/img/tiles/tile-00-02.png",

        "smbBg_5": "astroNewtsMegaways/img/tiles/symbol-05-tile.png",
        "smbBg_6": "astroNewtsMegaways/img/tiles/symbol-06-tile.png",
        "smbBg_7": "astroNewtsMegaways/img/tiles/symbol-07-tile.png",

        "smbFrame_0_2": "astroNewtsMegaways/img/frames/s-00-frame-100x280.png",
        "smbFrame_0_3": "astroNewtsMegaways/img/frames/s-00-frame-100x187.png",
        "smbFrame_0_4": "astroNewtsMegaways/img/frames/s-00-frame-100x140.png",
        "smbFrame_0_5": "astroNewtsMegaways/img/frames/s-00-frame-100x112.png",
        "smbFrame_0_6": "astroNewtsMegaways/img/frames/s-00-frame-100x94.png",
        "smbFrame_0_7": "astroNewtsMegaways/img/frames/s-00-frame-100x80.png",

        "smbFrame_1_2": "astroNewtsMegaways/img/frames/s-00-frame-100x280.png",
        "smbFrame_1_3": "astroNewtsMegaways/img/frames/s-00-frame-100x187.png",
        "smbFrame_1_4": "astroNewtsMegaways/img/frames/s-00-frame-100x140.png",
        "smbFrame_1_5": "astroNewtsMegaways/img/frames/s-00-frame-100x112.png",
        "smbFrame_1_6": "astroNewtsMegaways/img/frames/s-00-frame-100x94.png",
        "smbFrame_1_7": "astroNewtsMegaways/img/frames/s-00-frame-100x80.png",

        "smbFrame_2_2": "astroNewtsMegaways/img/frames/s-00-frame-100x280.png",
        "smbFrame_2_3": "astroNewtsMegaways/img/frames/s-00-frame-100x187.png",
        "smbFrame_2_4": "astroNewtsMegaways/img/frames/s-00-frame-100x140.png",
        "smbFrame_2_5": "astroNewtsMegaways/img/frames/s-00-frame-100x112.png",
        "smbFrame_2_6": "astroNewtsMegaways/img/frames/s-00-frame-100x94.png",
        "smbFrame_2_7": "astroNewtsMegaways/img/frames/s-00-frame-100x80.png",

        "smbFrame_3_2": "astroNewtsMegaways/img/frames/s-00-frame-100x280.png",
        "smbFrame_3_3": "astroNewtsMegaways/img/frames/s-00-frame-100x187.png",
        "smbFrame_3_4": "astroNewtsMegaways/img/frames/s-00-frame-100x140.png",
        "smbFrame_3_5": "astroNewtsMegaways/img/frames/s-00-frame-100x112.png",
        "smbFrame_3_6": "astroNewtsMegaways/img/frames/s-00-frame-100x94.png",
        "smbFrame_3_7": "astroNewtsMegaways/img/frames/s-00-frame-100x80.png",

        "smbFrame_4_2": "astroNewtsMegaways/img/frames/s-00-frame-100x280.png",
        "smbFrame_4_3": "astroNewtsMegaways/img/frames/s-00-frame-100x187.png",
        "smbFrame_4_4": "astroNewtsMegaways/img/frames/s-00-frame-100x140.png",
        "smbFrame_4_5": "astroNewtsMegaways/img/frames/s-00-frame-100x112.png",
        "smbFrame_4_6": "astroNewtsMegaways/img/frames/s-00-frame-100x94.png",
        "smbFrame_4_7": "astroNewtsMegaways/img/frames/s-00-frame-100x80.png",

        "smbFrame_5_2": "astroNewtsMegaways/img/frames/s-05-frame-100x280.png",
        "smbFrame_5_3": "astroNewtsMegaways/img/frames/s-05-frame-100x187.png",
        "smbFrame_5_4": "astroNewtsMegaways/img/frames/s-05-frame-100x140.png",
        "smbFrame_5_5": "astroNewtsMegaways/img/frames/s-05-frame-100x112.png",
        "smbFrame_5_6": "astroNewtsMegaways/img/frames/s-05-frame-100x94.png",
        "smbFrame_5_7": "astroNewtsMegaways/img/frames/s-05-frame-100x80.png",

        "smbFrame_6_2": "astroNewtsMegaways/img/frames/s-06-frame-100x280.png",
        "smbFrame_6_3": "astroNewtsMegaways/img/frames/s-06-frame-100x187.png",
        "smbFrame_6_4": "astroNewtsMegaways/img/frames/s-06-frame-100x140.png",
        "smbFrame_6_5": "astroNewtsMegaways/img/frames/s-06-frame-100x112.png",
        "smbFrame_6_6": "astroNewtsMegaways/img/frames/s-06-frame-100x94.png",
        "smbFrame_6_7": "astroNewtsMegaways/img/frames/s-06-frame-100x80.png",

        "smbFrame_7_2": "astroNewtsMegaways/img/frames/s-07-frame-100x280.png",
        "smbFrame_7_3": "astroNewtsMegaways/img/frames/s-07-frame-100x187.png",
        "smbFrame_7_4": "astroNewtsMegaways/img/frames/s-07-frame-100x140.png",
        "smbFrame_7_5": "astroNewtsMegaways/img/frames/s-07-frame-100x112.png",
        "smbFrame_7_6": "astroNewtsMegaways/img/frames/s-07-frame-100x94.png",
        "smbFrame_7_7": "astroNewtsMegaways/img/frames/s-07-frame-100x80.png",

        "smbFrame_8_2": "astroNewtsMegaways/img/frames/s-08-frame-100x280.png",
        "smbFrame_8_3": "astroNewtsMegaways/img/frames/s-08-frame-100x187.png",
        "smbFrame_8_4": "astroNewtsMegaways/img/frames/s-08-frame-100x140.png",
        "smbFrame_8_5": "astroNewtsMegaways/img/frames/s-08-frame-100x112.png",
        "smbFrame_8_6": "astroNewtsMegaways/img/frames/s-08-frame-100x94.png",
        "smbFrame_8_7": "astroNewtsMegaways/img/frames/s-08-frame-100x80.png",

        "smbFrame_9_2": "astroNewtsMegaways/img/frames/s-09-frame-100x280.png",
        "smbFrame_9_3": "astroNewtsMegaways/img/frames/s-09-frame-100x187.png",
        "smbFrame_9_4": "astroNewtsMegaways/img/frames/s-09-frame-100x140.png",
        "smbFrame_9_5": "astroNewtsMegaways/img/frames/s-09-frame-100x112.png",
        "smbFrame_9_6": "astroNewtsMegaways/img/frames/s-09-frame-100x94.png",
        "smbFrame_9_7": "astroNewtsMegaways/img/frames/s-09-frame-100x80.png",

        "smbFrame_12_2": "astroNewtsMegaways/img/frames/s-12-frame-100x280.png",
        "smbFrame_12_3": "astroNewtsMegaways/img/frames/s-12-frame-100x187.png",
        "smbFrame_12_4": "astroNewtsMegaways/img/frames/s-12-frame-100x140.png",
        "smbFrame_12_5": "astroNewtsMegaways/img/frames/s-12-frame-100x112.png",
        "smbFrame_12_6": "astroNewtsMegaways/img/frames/s-12-frame-100x94.png",
        "smbFrame_12_7": "astroNewtsMegaways/img/frames/s-12-frame-100x80.png",

        "smbFrame_13_2": "astroNewtsMegaways/img/frames/s-13-frame-100x280.png",
        "smbFrame_13_3": "astroNewtsMegaways/img/frames/s-13-frame-100x187.png",
        "smbFrame_13_4": "astroNewtsMegaways/img/frames/s-13-frame-100x140.png",
        "smbFrame_13_5": "astroNewtsMegaways/img/frames/s-13-frame-100x112.png",
        "smbFrame_13_6": "astroNewtsMegaways/img/frames/s-13-frame-100x94.png",
        "smbFrame_13_7": "astroNewtsMegaways/img/frames/s-13-frame-100x80.png",

        "bicon0": "astroNewtsMegaways/img/b-symbol-00.png",
        "bicon1": "astroNewtsMegaways/img/b-symbol-01.png",
        "bicon2": "astroNewtsMegaways/img/b-symbol-02.png",
        "bicon3": "astroNewtsMegaways/img/b-symbol-03.png",
        "bicon4": "astroNewtsMegaways/img/b-symbol-04.png",
        "bicon5": "astroNewtsMegaways/img/b-symbol-05.png",
        "bicon6": "astroNewtsMegaways/img/b-symbol-06.png",
        "bicon7": "astroNewtsMegaways/img/b-symbol-07.png",
        "bicon8": "astroNewtsMegaways/img/b-symbol-08.png",
        "bicon9": "astroNewtsMegaways/img/b-symbol-09.png",
        "bicon10": "astroNewtsMegaways/img/b-symbol-10.png",
        "bicon12": "astroNewtsMegaways/img/b-symbol-10.png",


        "bottomBar": "gui/message-bar.png",
        "bgPanel": "astroNewtsMegaways/img/bgPanel.png",
        "bgPanelFs": "astroNewtsMegaways/img/bgPanelFs.png",
        "bgPanelGame": "astroNewtsMegaways/img/bgPanel.png",
        "bgPreview":"astroNewtsMegaways/img/paytable/intro-page.jpg",
        "bgBlack":"astroNewtsMegaways/img/paytable/black.png",
        "bgPreview1":"astroNewtsMegaways/img/paytable/intro1.png",
        "bgPreview2":"astroNewtsMegaways/img/paytable/intro2.png",

        "bg_b": "astroNewtsMegaways/img/bg/background.jpg",
        "bg_f": "astroNewtsMegaways/img/bg/midground.png",

        "sideMeterCap": "astroNewtsMegaways/img/bg/side-feature-top.png",
        "fuelS": "astroNewtsMegaways/img/side-feature/fuel.png",
        "fsBox2": "astroNewtsMegaways/img/side-feature/freespins/win-counter-02.png",
        "fsBox3": "astroNewtsMegaways/img/side-feature/freespins/win-counter-01.png",
        "fsBoxI": "astroNewtsMegaways/img/side-feature/freespins/planet-info-counter.png",

        "bg_fl_1":"astroNewtsMegaways/img/bg/left-anim-bg.png",
        "bg_fr_1":"astroNewtsMegaways/img/bg/right-anim-bg.png",

        "moon":"astroNewtsMegaways/img/bg/planets/moon.png",
        "mars":"astroNewtsMegaways/img/bg/planets/mars.png",
        "jupiter":"astroNewtsMegaways/img/bg/planets/jupiter.png",
        "saturn":"astroNewtsMegaways/img/bg/planets/saturn.png",
        "uranus":"astroNewtsMegaways/img/bg/planets/uranus.png",

        "moonPopUp":"astroNewtsMegaways/img/anim/moon-pig/moon-pop-up.png",
        "fsCounter":"astroNewtsMegaways/img/addFS/extra-free-spins.png",
        "logo":"astroNewtsMegaways/img/logo.png",
        "bigWin":"astroNewtsMegaways/img/big-win.png",
        "superWin":"astroNewtsMegaways/img/epic-win.png",
        "megaWin":"astroNewtsMegaways/img/ultra-win.png",
        "boxFS":"astroNewtsMegaways/img/total-win-box.png",
        "buttonBg":"gui/generic/img/desktop/png/cp-info-bar.png",
        "volOnButton": "gui/btnVolOn.png",
        "volOffButton": "gui/btnVolOff.png",
        "bgAlpha":"astroNewtsMegaways/img/alpha.png",
        "leftArrow": "astroNewtsMegaways/img/paytable/leftArrow.png",
        "rightArrow": "astroNewtsMegaways/img/paytable/rightArrow.png",
    },
    "localizedAssets":{
    },
    "buttonsSpriteSheet": {

        "feature-Fn-btn": {
            "sprite": "astroNewtsMegaways/img/buyFeature/buy-fs-btn.png",
            "json": "astroNewtsMegaways/img/buyFeature/buy-fs-btn.png",
            "w": 366/3,
            "h": 65
        },
        "feature-Rn-btn": {
            "sprite": "astroNewtsMegaways/img/buyFeature/buy-fs-btn.png",
            "json": "astroNewtsMegaways/img/buyFeature/buy-fs-btn.png",
            "w": 366/3,
            "h": 65
        },
        "yesButton": {
            "sprite": "astroNewtsMegaways/img/yes-btn.png",
            "json": "astroNewtsMegaways/img/yes-btn.png",
            "w": 162/3,
            "h": 54
        },
        "noButton": {
            "sprite": "astroNewtsMegaways/img/no-btn.png",
            "json": "astroNewtsMegaways/img/no-btn.png",
            "w": 162/3,
            "h": 54
        },
        "check": {
            "sprite": "astroNewtsMegaways/img/radio-btns.png",
            "json": "astroNewtsMegaways/img/radio-btns.png",
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
            "json": "astroNewtsMegaways/img/buy-free-spin-btn.png",
            "sprite": "astroNewtsMegaways/img/buy-free-spin-btn.png",
            "w": 393/3,
            "h": 54
        },

    },
    "animations": {

        "info_0": {
            "json": "astroNewtsMegaways/img/bg/background-animation/info-moon.json",
            "sprite": "astroNewtsMegaways/img/bg/background-animation/info-moon.png"
        },
        "info_1": {
            "json": "astroNewtsMegaways/img/bg/background-animation/info-mars.json",
            "sprite": "astroNewtsMegaways/img/bg/background-animation/info-mars.png"
        },
        "info_2": {
            "json": "astroNewtsMegaways/img/bg/background-animation/info-jupiter.json",
            "sprite": "astroNewtsMegaways/img/bg/background-animation/info-jupiter.png"
        },
        "info_3": {
            "json": "astroNewtsMegaways/img/bg/background-animation/info-saturn.json",
            "sprite": "astroNewtsMegaways/img/bg/background-animation/info-saturn.png"
        },
        "info_4": {
            "json": "astroNewtsMegaways/img/bg/background-animation/info-uranus.json",
            "sprite": "astroNewtsMegaways/img/bg/background-animation/info-uranus.png"
        },


        "sidePig":{
            "json": "astroNewtsMegaways/img/anim/moon-pig/moon-pig-out.json",
            "sprite": "astroNewtsMegaways/img/anim/moon-pig/moon-pig-out.png"
        },
        "pigOnTheMoon":{
            "json": "astroNewtsMegaways/img/anim/moon-pig/moon-pig-wave.json",
            "sprite": "astroNewtsMegaways/img/anim/moon-pig/moon-pig-wave.png"
        },
        "anim0": {
            "json": "astroNewtsMegaways/img/anim/symbol-00.json",
            "sprite": "astroNewtsMegaways/img/anim/symbol-00.png"
        },
        "anim1": {
            "json": "astroNewtsMegaways/img/anim/symbol-01.json",
            "sprite": "astroNewtsMegaways/img/anim/symbol-01.png"
        },
        "anim2": {
            "json": "astroNewtsMegaways/img/anim/symbol-02.json",
            "sprite": "astroNewtsMegaways/img/anim/symbol-02.png"
        },
        "anim3": {
            "json": "astroNewtsMegaways/img/anim/symbol-03.json",
            "sprite": "astroNewtsMegaways/img/anim/symbol-03.png"
        },
        "anim4": {
            "json": "astroNewtsMegaways/img/anim/symbol-04.json",
            "sprite": "astroNewtsMegaways/img/anim/symbol-04.png"
        },
        "anim5": {
            "json": "astroNewtsMegaways/img/anim/symbol-05.json",
            "sprite": "astroNewtsMegaways/img/anim/symbol-05.png"
        },
        "anim6": {
            "json": "astroNewtsMegaways/img/anim/symbol-06.json",
            "sprite": "astroNewtsMegaways/img/anim/symbol-06.png"
        },
        "anim7": {
            "json": "astroNewtsMegaways/img/anim/symbol-07.json",
            "sprite": "astroNewtsMegaways/img/anim/symbol-07.png"
        },
        "anim8": {
            "json": "astroNewtsMegaways/img/anim/symbol-08.json",
            "sprite": "astroNewtsMegaways/img/anim/symbol-08.png"
        },
        "anim9": {
            "json": "astroNewtsMegaways/img/anim/symbol-09.json",
            "sprite": "astroNewtsMegaways/img/anim/symbol-09.png"
        },

        "anim10_2": {
            "json": "astroNewtsMegaways/img/anim/symbol-10-100x280.json",
            "sprite": "astroNewtsMegaways/img/anim/symbol-10-100x280.png"
        },
        "anim10_3": {
            "json": "astroNewtsMegaways/img/anim/symbol-10-100x187.json",
            "sprite": "astroNewtsMegaways/img/anim/symbol-10-100x187.png"
        },
        "anim10_4": {
            "json": "astroNewtsMegaways/img/anim/symbol-10-100x140.json",
            "sprite": "astroNewtsMegaways/img/anim/symbol-10-100x140.png"
        },
        "anim10_5": {
            "json": "astroNewtsMegaways/img/anim/symbol-10-100x112.json",
            "sprite": "astroNewtsMegaways/img/anim/symbol-10-100x112.png"
        },
        "anim10_6": {
            "json": "astroNewtsMegaways/img/anim/symbol-10-100x94.json",
            "sprite": "astroNewtsMegaways/img/anim/symbol-10-100x94.png"
        },
        "anim10_7": {
            "json": "astroNewtsMegaways/img/anim/symbol-10-100x80.json",
            "sprite": "astroNewtsMegaways/img/anim/symbol-10-100x80.png"
        },

        "anim11_2": {
            "json": "astroNewtsMegaways/img/anim/symbol-11-100x280.json",
            "sprite": "astroNewtsMegaways/img/anim/symbol-11-100x280.png"
        },
        "anim11_3": {
            "json": "astroNewtsMegaways/img/anim/symbol-11-100x187.json",
            "sprite": "astroNewtsMegaways/img/anim/symbol-11-100x187.png"
        },
        "anim11_4": {
            "json": "astroNewtsMegaways/img/anim/symbol-11-100x140.json",
            "sprite": "astroNewtsMegaways/img/anim/symbol-11-100x140.png"
        },
        "anim11_5": {
            "json": "astroNewtsMegaways/img/anim/symbol-11-100x112.json",
            "sprite": "astroNewtsMegaways/img/anim/symbol-11-100x112.png"
        },
        "anim11_6": {
            "json": "astroNewtsMegaways/img/anim/symbol-11-100x94.json",
            "sprite": "astroNewtsMegaways/img/anim/symbol-11-100x94.png"
        },
        "anim11_7": {
            "json": "astroNewtsMegaways/img/anim/symbol-11-100x80.json",
            "sprite": "astroNewtsMegaways/img/anim/symbol-11-100x80.png"
        },

        "icon11_2": {
            "json": "astroNewtsMegaways/img/anim/symbol-11-100x280-intro.json",
            "sprite": "astroNewtsMegaways/img/anim/symbol-11-100x280-intro.png"
        },
        "icon11_3": {
            "json": "astroNewtsMegaways/img/anim/symbol-11-100x187-intro.json",
            "sprite": "astroNewtsMegaways/img/anim/symbol-11-100x187-intro.png"
        },
        "icon11_4": {
            "json": "astroNewtsMegaways/img/anim/symbol-11-100x140-intro.json",
            "sprite": "astroNewtsMegaways/img/anim/symbol-11-100x140-intro.png"
        },
        "icon11_5": {
            "json": "astroNewtsMegaways/img/anim/symbol-11-100x112-intro.json",
            "sprite": "astroNewtsMegaways/img/anim/symbol-11-100x112-intro.png"
        },
        "icon11_6": {
            "json": "astroNewtsMegaways/img/anim/symbol-11-100x94-intro.json",
            "sprite": "astroNewtsMegaways/img/anim/symbol-11-100x94-intro.png"
        },
        "icon11_7": {
            "json": "astroNewtsMegaways/img/anim/symbol-11-100x80-intro.json",
            "sprite": "astroNewtsMegaways/img/anim/symbol-11-100x80-intro.png"
        },
        "anim11_end": {
            "json": "astroNewtsMegaways/img/anim/symbol-11-end.json",
            "sprite": "astroNewtsMegaways/img/anim/symbol-11-end.png"
        },
        "anim12": {
            "json": "astroNewtsMegaways/img/anim/symbol-12.json",
            "sprite": "astroNewtsMegaways/img/anim/symbol-12.png"
        },
        "anim13": {
            "json": "astroNewtsMegaways/img/anim/symbol-13.json",
            "sprite": "astroNewtsMegaways/img/anim/symbol-13.png"
        },
        "wormHole": {
            "json": "astroNewtsMegaways/img/anim/black-hole.json",
            "sprite": "astroNewtsMegaways/img/anim/black-hole.png"
        },
        "part-1": {
            "json": "astroNewtsMegaways/img/anim/bronze-coin.json",
            "sprite": "astroNewtsMegaways/img/anim/bronze-coin.png"
        },
        "part-2": {
            "json": "astroNewtsMegaways/img/anim/silver-coin.json",
            "sprite": "astroNewtsMegaways/img/anim/silver-coin.png"
        },
        "part-3": {
            "json": "astroNewtsMegaways/img/anim/gold-coin.json",
            "sprite": "astroNewtsMegaways/img/anim/gold-coin.png"
        },
        "f-part-1": {
            "json": "astroNewtsMegaways/img/anim/bronze-coin-frwrd.json",
            "sprite": "astroNewtsMegaways/img/anim/bronze-coin-frwrd.png"
        },
        "f-part-2": {
            "json": "astroNewtsMegaways/img/anim/silver-coin-frwrd.json",
            "sprite": "astroNewtsMegaways/img/anim/silver-coin-frwrd.png"
        },
        "f-part-3": {
            "json": "astroNewtsMegaways/img/anim/gold-coin-frwrd.json",
            "sprite": "astroNewtsMegaways/img/anim/gold-coin-frwrd.png"
        },

        "anchorIn_1":{
            "json": "astroNewtsMegaways/img/side-feature/dt-sf-x1.json",
            "sprite": "astroNewtsMegaways/img/side-feature/dt-sf-x1.png"
        },
        "anchorIn_2":{
            "json": "astroNewtsMegaways/img/side-feature/dt-sf-x2.json",
            "sprite": "astroNewtsMegaways/img/side-feature/dt-sf-x2.png"
        },
        "anchorIn_3":{
            "json": "astroNewtsMegaways/img/side-feature/dt-sf-x3.json",
            "sprite": "astroNewtsMegaways/img/side-feature/dt-sf-x3.png"
        },
        "anchorIn_4":{
            "json": "astroNewtsMegaways/img/side-feature/dt-sf-x4.json",
            "sprite": "astroNewtsMegaways/img/side-feature/dt-sf-x4.png"
        },
        "anchorIn_5":{
            "json": "astroNewtsMegaways/img/side-feature/dt-sf-x5.json",
            "sprite": "astroNewtsMegaways/img/side-feature/dt-sf-x5.png"
        },
        "anchorIn_6":{
            "json": "astroNewtsMegaways/img/side-feature/dt-sf-x6.json",
            "sprite": "astroNewtsMegaways/img/side-feature/dt-sf-x6.png"
        },
        "anchorIn_7":{
            "json": "astroNewtsMegaways/img/side-feature/dt-sf-x7.json",
            "sprite": "astroNewtsMegaways/img/side-feature/dt-sf-x7.png"
        },
        "anchorIn_8":{
            "json": "astroNewtsMegaways/img/side-feature/dt-sf-x8.json",
            "sprite": "astroNewtsMegaways/img/side-feature/dt-sf-x8.png"
        },
        "anchorIn_9":{
            "json": "astroNewtsMegaways/img/side-feature/dt-sf-x9.json",
            "sprite": "astroNewtsMegaways/img/side-feature/dt-sf-x9.png"
        },

        "boxFuel":{
            "json": "astroNewtsMegaways/img/side-feature/freespins/superfuel-counter-glow.json",
            "sprite": "astroNewtsMegaways/img/side-feature/freespins/superfuel-counter-glow.png"
        },
        "fuelInFs_1":{
            "json": "astroNewtsMegaways/img/side-feature/freespins/fuel-x1.json",
            "sprite": "astroNewtsMegaways/img/side-feature/freespins/fuel-x1.png"
        },
        "fuelInFs_2":{
            "json": "astroNewtsMegaways/img/side-feature/freespins/fuel-x2.json",
            "sprite": "astroNewtsMegaways/img/side-feature/freespins/fuel-x2.png"
        },
        "fuelInFs_3":{
            "json": "astroNewtsMegaways/img/side-feature/freespins/fuel-x3.json",
            "sprite": "astroNewtsMegaways/img/side-feature/freespins/fuel-x3.png"
        },
        "fuelInFs_4":{
            "json": "astroNewtsMegaways/img/side-feature/freespins/fuel-x4.json",
            "sprite": "astroNewtsMegaways/img/side-feature/freespins/fuel-x4.png"
        },
        "fuelInFs_5":{
            "json": "astroNewtsMegaways/img/side-feature/freespins/fuel-x5.json",
            "sprite": "astroNewtsMegaways/img/side-feature/freespins/fuel-x5.png"
        },
        "fuelInFs_6":{
            "json": "astroNewtsMegaways/img/side-feature/freespins/fuel-x6.json",
            "sprite": "astroNewtsMegaways/img/side-feature/freespins/fuel-x6.png"
        },
        "fuelInFs_7":{
            "json": "astroNewtsMegaways/img/side-feature/freespins/fuel-x7.json",
            "sprite": "astroNewtsMegaways/img/side-feature/freespins/fuel-x7.png"
        },

        "supFuelFs1":{
            "json": "astroNewtsMegaways/img/side-feature/freespins/super-fuel-x1.json",
            "sprite": "astroNewtsMegaways/img/side-feature/freespins/super-fuel-x1.png"
        },
        "supFuelFs2":{
            "json": "astroNewtsMegaways/img/side-feature/freespins/super-fuel-x2.json",
            "sprite": "astroNewtsMegaways/img/side-feature/freespins/super-fuel-x2.png"
        },
        "supFuelFs3":{
            "json": "astroNewtsMegaways/img/side-feature/freespins/super-fuel-x3.json",
            "sprite": "astroNewtsMegaways/img/side-feature/freespins/super-fuel-x3.png"
        },
        "supFuelFs4":{
            "json": "astroNewtsMegaways/img/side-feature/freespins/super-fuel-x4.json",
            "sprite": "astroNewtsMegaways/img/side-feature/freespins/super-fuel-x4.png"
        },
        "supFuelFs5":{
            "json": "astroNewtsMegaways/img/side-feature/freespins/super-fuel-x5.json",
            "sprite": "astroNewtsMegaways/img/side-feature/freespins/super-fuel-x5.png"
        },
        "supFuelFs6":{
            "json": "astroNewtsMegaways/img/side-feature/freespins/super-fuel-x6.json",
            "sprite": "astroNewtsMegaways/img/side-feature/freespins/super-fuel-x6.png"
        },
        "supFuelFs7":{
            "json": "astroNewtsMegaways/img/side-feature/freespins/super-fuel-x7.json",
            "sprite": "astroNewtsMegaways/img/side-feature/freespins/super-fuel-x7.png"
        },

        "randNumber":{
            "json": "astroNewtsMegaways/img/addFS/counter-spin.json",
            "sprite": "astroNewtsMegaways/img/addFS/counter-spin.png"
        },
        "n1":{
            "json": "astroNewtsMegaways/img/addFS/select-01.json",
            "sprite": "astroNewtsMegaways/img/addFS/select-01.png"
        },
        "n2":{
            "json": "astroNewtsMegaways/img/addFS/select-02.json",
            "sprite": "astroNewtsMegaways/img/addFS/select-02.png"
        },
        "n3":{
            "json": "astroNewtsMegaways/img/addFS/select-03.json",
            "sprite": "astroNewtsMegaways/img/addFS/select-03.png"
        },
        "n4":{
            "json": "astroNewtsMegaways/img/addFS/select-04.json",
            "sprite": "astroNewtsMegaways/img/addFS/select-04.png"
        },

        "lockIn":{
            "json": "astroNewtsMegaways/img/anim/lockFeature/lock-feature.json",
            "sprite": "astroNewtsMegaways/img/anim/lockFeature/lock-feature.png"
        },

    },
    "importantSounds": {
        "spinClick": {
            "name": "astroNewtsMegaways/sounds/spinClick.mp3",
            "volume": .1
        },
        "reelStop": {
            "name": "astroNewtsMegaways/sounds/reelStop.mp3",
            "volume":.2
        },
        "reelSound": {
            "name": "astroNewtsMegaways/sounds/reelSound.mp3",
            "volume":.7
        },
        "coins": {
            "name": "astroNewtsMegaways/sounds/coins.mp3",
            "volume": 1
        },
        "winAmountFall": {
            "name": "astroNewtsMegaways/sounds/winAmountFall.mp3",
            "volume": .6
        }
    },
    "bgImportantSounds":{
        "bgSlot": {
            "name": "astroNewtsMegaways/sounds/bg.mp3",
            "volume": .8,
            "marker":true
        }
    },
    "sounds": {
        "click": {
            "name": "astroNewtsMegaways/sounds/click.mp3",
            "volume": .3
        },
        "multiplier": {
            "name": "astroNewtsMegaways/sounds/multiplier.mp3",
            "volume":  .8
        },
        "lock": {
            "name": "astroNewtsMegaways/sounds/reelLock.mp3",
            "volume": 2
        },
        "sideFeature_1": {
            "name": "astroNewtsMegaways/sounds/sideFeature_1.mp3",
            "volume": .5
        },
        "sideFeature_2": {
            "name": "astroNewtsMegaways/sounds/sideFeature_2.mp3",
            "volume": .6
        },
        "sideFeature_3": {
            "name": "astroNewtsMegaways/sounds/sideFeature_3.mp3",
            "volume": .7
        },
        "sideFeature_4": {
            "name": "astroNewtsMegaways/sounds/sideFeature_4.mp3",
            "volume": .8
        },
        "sideFeature_5": {
            "name": "astroNewtsMegaways/sounds/sideFeature_5.mp3",
            "volume": .9
        },
        "sideFeature_6": {
            "name": "astroNewtsMegaways/sounds/sideFeature_6.mp3",
            "volume": 1
        },

        "feature_deactivate": {
            "name": "astroNewtsMegaways/sounds/feature_deactivate.mp3",
            "volume": 1
        },
        "smbWin_0": {
            "name": "astroNewtsMegaways/sounds/smbWin_04.mp3",
            "multiple":["smbWin_1","smbWin_2","smbWin_3","smbWin_4"],
            "volume": 1
        },
        "smbWin_5": {
            "name": "astroNewtsMegaways/sounds/smbWin_05.mp3",
            "volume": 1
        },

        "smbWin_6": {
            "name": "astroNewtsMegaways/sounds/smbWin_06.mp3",
            "volume": 1
        },
        "smbWin_7": {
            "name": "astroNewtsMegaways/sounds/smbWin_07.mp3",
            "volume": 1
        },
        "smbWin_8": {
            "name": "astroNewtsMegaways/sounds/smbWin_08.mp3",
            "volume": 1
        },
        "smbWin_9": {
            "name": "astroNewtsMegaways/sounds/smbWin_09.mp3",
            "volume": 1
        },
        "smbWin_10": {
            "name": "astroNewtsMegaways/sounds/smbWin_10.mp3",
            "volume": .5
        },
        "fuel": {
            "name": "astroNewtsMegaways/sounds/smbWin_12-fuel.mp3",
            "volume": 1
        },
        "superFuel": {
            "name": "astroNewtsMegaways/sounds/smbWin_13-fuel.mp3",
            "volume": 1
        },

        "wormHoleIn": {
            "name": "astroNewtsMegaways/sounds/wormHoleIn.mp3",
            "volume": 1
        },
        "wormHoleOut": {
            "name": "astroNewtsMegaways/sounds/wormHoleOut.mp3",
            "volume": .9
        },


        "winBg_0": {
            "name": "astroNewtsMegaways/sounds/centralWin/win1.mp3",
            "volume": 0
        },
        "winBg_1": {
            "name": "astroNewtsMegaways/sounds/centralWin/win2.mp3",
            "volume":  .2
        },
        "winBg_2": {
            "name": "astroNewtsMegaways/sounds/centralWin/win3.mp3",
            "volume":  .2
        },
        "winBg_3": {
            "name": "astroNewtsMegaways/sounds/centralWin/win4.mp3",
            "volume":  .2
        },
        "winBg_4": {
            "name": "astroNewtsMegaways/sounds/centralWin/win5.mp3",
            "volume":  .2
        },
        "winBg_5": {
            "name": "astroNewtsMegaways/sounds/centralWin/win6.mp3",
            "volume":  .2
        },
        "winBg_6": {
            "name": "astroNewtsMegaways/sounds/centralWin/bigWin.mp3",
            "volume":  .7
        },
        "winBg_7": {
            "name": "astroNewtsMegaways/sounds/centralWin/superBigWin.mp3",
            "volume":   .3
        },
        "winBg_8": {
            "name": "astroNewtsMegaways/sounds/centralWin/megaBigWin.mp3",
            "volume": .3
        },
        "fsWon": {
            "name": "astroNewtsMegaways/sounds/introFs.mp3",
            "volume": 1
        },
        "incWin": {
            "name": "astroNewtsMegaways/sounds/counter.mp3",
            "volume": .6,
            "loop": true
        },
        "winPanel": {
            "name": "astroNewtsMegaways/sounds/winScreen.mp3",
            "volume": 1
        },
        "tumble_0": {
            "name": "astroNewtsMegaways/sounds/tumbling.mp3",
            "volume": 1.1,
            "multiple":["tumble_1","tumble_2","tumble_3","tumble_4","tumble_5","tumble_6"]
        },
        "placeWild": {
            "name": "astroNewtsMegaways/sounds/placeWild.mp3",
            "volume": 1
        },
        "wildReel": {
            "name": "astroNewtsMegaways/sounds/wildReel.mp3",
            "volume": 1
        },
        "wildReel1": {
            "name": "astroNewtsMegaways/sounds/wildReel1.mp3",
            "volume": 1
        },

        "transitionFull": {
            "name": "astroNewtsMegaways/sounds/transitionFs.mp3",
            "volume": 1
        },
        "pigSound": {
            "name": "astroNewtsMegaways/sounds/pig.mp3",
            "volume": 1
        },
        "spinnerLoop": {
            "name": "astroNewtsMegaways/sounds/spinnerLoop.mp3",
            "volume": 1
        },

        "spinnerStop": {
            "name": "astroNewtsMegaways/sounds/spinnerStop.mp3",
            "volume": 1
        },

        "reelsSlide": {
            "name": "astroNewtsMegaways/sounds/reelsSlide.mp3",
            "volume": 1
        },

        "uiSlide": {
            "name": "astroNewtsMegaways/sounds/uiSlide.mp3",
            "volume": 1
        },

        "planetPass": {
            "name": "astroNewtsMegaways/sounds/planetPass.mp3",
            "volume": 1
        },

        "introMission": {
            "name": "astroNewtsMegaways/sounds/introMission.mp3",
            "volume": 1
        },

        "txtAproach": {
            "name": "astroNewtsMegaways/sounds/txtAproach.mp3",
            "volume": 1
        },
        "txtFeatures": {
            "name": "astroNewtsMegaways/sounds/txtFeatures.mp3",
            "volume": 1
        },


    },
    "bgSounds": {
        "bgSlot1": {
            "name": "astroNewtsMegaways/sounds/bg-ambience.mp3",
            "volume": 2
        },
        "bgFs": {
            "name": "astroNewtsMegaways/sounds/bgFs.mp3",
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
        "bg": {
            "visible":false,
            "portrait":true,
            "graphAsset": {
                "bg": {
                    "portrait":true,
                    "name": "bg_b",
                    "x": 0,
                    "y": 0
                }
            }
        },
        "planets":{
            "x":900,
            "y":500,
            "visible": true,
            "graphAsset": {
                "p0": {
                    "name": "moon",
                    "x": -900,
                    "y": -750,
                    "anchorX": .5,
                    "anchorY": .5,
                    "scaleX":.2,
                    "scaleY":.2,
                },
                "p1": {
                    "name": "mars",
                    "x": -900,
                    "y": -750,
                    "anchorX": .5,
                    "anchorY": .5,
                    "scaleX":.3,
                    "scaleY":.3,
                },
                "p2": {
                    "name": "jupiter",
                    "x": -900,
                    "y": -750,
                    "anchorX": .5,
                    "anchorY": .5,
                    "scaleX":.5,
                    "scaleY":.5,
                },
                "p3": {
                    "name": "saturn",
                    "x": -900,
                    "y": -750,
                    "anchorX": .5,
                    "anchorY": .5,
                    "scaleX":.4,
                    "scaleY":.4,
                },
                "p4": {
                    "name": "uranus",
                    "x": -900,
                    "y": -750,
                    "anchorX": .5,
                    "anchorY": .5,
                    "scaleX":.2,
                    "scaleY":.2,
                }
            }
        },
        "frame": {
            "portrait":true,
            "visible": false,
            "graphAsset": {
                "bg":{
                    "portrait":true,
                    "name": "bg_f",
                    "x": 0,
                    "y": 0

                },
                "boxInfo": {
                    "visible": false,
                    "portrait":true,
                    "name": "fsBoxI",
                    "x": 1121,
                    "y": 305,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "info_0":{
                    "name": "info_0",
                    "x": 139,
                    "y": 174,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "info_1":{
                    "visible": false,
                    "name": "info_1",
                    "x": 139,
                    "y": 174,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "info_2":{
                    "visible": false,
                    "name": "info_2",
                    "x": 139,
                    "y": 174,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "info_3":{
                    "visible": false,
                    "name": "info_3",
                    "x": 139,
                    "y": 174,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "info_4":{
                    "visible": false,
                    "name": "info_4",
                    "x": 139,
                    "y": 174,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "bgR1":{
                    "visible": true,
                    "portrait":true,
                    "name": "bg_fr_1",
                    "x": 1101,
                    "y": 568,
                    "anchorX": .5,
                    "anchorY": .5

                },
                "bgL1": {
                    "visible": true,
                    "portrait":true,
                    "name": "bg_fl_1",
                    "x": 179,
                    "y": 591,
                    "anchorX": .5,
                    "anchorY": .5
                },
            }
        },
        "reels": {
        },
        "wild": {
        },
        "winGlow":{
            "texts": {
                "mult0": {
                    "x": 392,
                    "y": 90,
                    "bmpFont": "multiBmpFont",
                    "size": "70",
                    "text": "",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "mult1": {
                    "x": 392+100,
                    "y": 90,
                    "bmpFont": "multiBmpFont",
                    "size": "70",
                    "text": "",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "mult2": {
                    "x": 392+100*2,
                    "y": 90,
                    "bmpFont": "multiBmpFont",
                    "size": "70",
                    "text": "",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "mult3": {
                    "x": 392+100*3,
                    "y": 90,
                    "bmpFont": "multiBmpFont",
                    "size": "70",
                    "text": "",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "mult4": {
                    "x": 392+100*4,
                    "y": 90,
                    "bmpFont": "multiBmpFont",
                    "size": "70",
                    "text": "",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "mult5": {
                    "x": 392+100*5,
                    "y": 90,
                    "bmpFont": "multiBmpFont",
                    "size": "70",
                    "text": "",
                    "anchorX": .5,
                    "anchorY": .5
                },
            }
        },
        "freeSpinAccumulator": {
            "visible": false,
            "portrait":true,
            "maxFs": 12,
            "graphAsset": {
                "cap": {
                    "visible": true,
                    "name": "sideMeterCap",
                    "x": 1102,
                    "y": 70,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fuel": {
                    "portrait":true,
                    "visible": false,
                    "name": "fuelS",
                    "x": 1102,
                    "y": 373,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "anchor1_In": {
                    "portrait":true,
                    "visible": true,
                    "name": "anchorIn_1",
                    "x": 1102,
                    "y": 373,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "anchor2_In": {
                    "portrait":true,
                    "visible": false,
                    "name": "anchorIn_2",
                    "x": 1102,
                    "y": 373,
                    "anchorX": .5,
                    "anchorY": .5
                },

                "anchor3_In": {
                    "portrait":true,
                    "visible": false,
                    "name": "anchorIn_3",
                    "x": 1102,
                    "y": 373,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "anchor4_In": {
                    "portrait":true,
                    "visible": false,
                    "name": "anchorIn_4",
                    "x": 1102,
                    "y": 373,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "anchor5_In": {
                    "portrait":true,
                    "visible": false,
                    "name": "anchorIn_5",
                    "x": 1102,
                    "y": 373,
                    "anchorX": .5,
                    "anchorY": .5
                },

                "anchor6_In": {
                    "portrait":true,
                    "visible": false,
                    "name": "anchorIn_6",
                    "x": 1102,
                    "y": 373,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "anchor7_In": {
                    "portrait":true,
                    "visible": false,
                    "name": "anchorIn_7",
                    "x": 1102,
                    "y": 351,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "anchor8_In": {
                    "portrait":true,
                    "visible": false,
                    "name": "anchorIn_8",
                    "x": 1102,
                    "y": 351,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "anchor9_In": {
                    "portrait":true,
                    "visible": false,
                    "name": "anchorIn_9",
                    "x": 1102,
                    "y": 351,
                    "anchorX": .5,
                    "anchorY": .5
                },
            }
        },
        "freeSpinAccumulatorFs": {
            "visible": false,
            "graphAsset": {
                "boxWin": {
                    "name": "fsBox3",
                    "x": 1121,
                    "y": 406,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "boxFuel": {
                    "name": "boxFuel",
                    "x": 1113,
                    "y": 107,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "boxFs": {
                    "portrait":true,
                    "name": "fsBox2",
                    "x": 1121,
                    "y": 205,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "boxMult": {
                    "portrait":true,
                    "name": "fsBox2",
                    "x": 1121,
                    "y": 305,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "anchor1_In": {
                    "visible": false,
                    "name": "fuelInFs_1",
                    "x": 1049,
                    "y": 105,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "anchorS1_In": {
                    "visible": false,
                    "name": "supFuelFs1",
                    "x": 1049,
                    "y": 105,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "anchor2_In": {
                    "visible": false,
                    "name": "fuelInFs_2",
                    "x": 1049,
                    "y": 105,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "anchorS2_In": {
                    "visible": false,
                    "name": "supFuelFs2",
                    "x": 1049,
                    "y": 105,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "anchor3_In": {
                    "visible": false,
                    "name": "fuelInFs_3",
                    "x": 1049,
                    "y": 105,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "anchorS3_In": {
                    "visible": false,
                    "name": "supFuelFs3",
                    "x": 1049,
                    "y": 105,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "anchor4_In": {
                    "visible": false,
                    "name": "fuelInFs_4",
                    "x": 1049,
                    "y": 105,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "anchorS4_In": {
                    "visible": false,
                    "name": "supFuelFs4",
                    "x": 1049,
                    "y": 105,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "anchor5_In": {
                    "visible": false,
                    "name": "fuelInFs_5",
                    "x": 1049,
                    "y": 105,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "anchorS5_In": {
                    "visible": false,
                    "name": "supFuelFs5",
                    "x": 1049,
                    "y": 105,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "anchor6_In": {
                    "visible": false,
                    "name": "fuelInFs_6",
                    "x": 1049,
                    "y": 105,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "anchorS6_In": {
                    "visible": false,
                    "name": "supFuelFs6",
                    "x": 1049,
                    "y": 105,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "anchor7_In": {
                    "visible": false,
                    "name": "fuelInFs_7",
                    "x": 1049,
                    "y": 105,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "anchorS7_In": {
                    "visible": false,
                    "name": "supFuelFs7",
                    "x": 1049,
                    "y": 105,
                    "anchorX": .5,
                    "anchorY": .5
                },
            }
        },
        "buyFeature":{
            "buttons": {
                "buyFeature": {
                    "visible":true,
                    "name": "buyFeature",
                    "x": 1102,
                    "y": 77,
                    "evt": "doBuyFeature",
                    "texts": {
                        "txt": {
                            "x": 0,
                            "y": -6,
                            "font": "12px TOMO-Fonts-TOMO-Bossa-Black,Arial, Helvetica sans-serif",
                            "fill": "#62f014",
                            "text": "Buy Free Spins",
                            "anchorX": .5
                        }
                    }
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
                    "x": 140,
                    "y": 18,
                    "anchorX": .5
                }
            }
        },
        "freeRounds": {
            "visible":false,
            "comment_movingLogo":"true when the panel substitute the logo",
            "movingLogo":true,
            "graphAsset": {
                "logo": {
                    "name": "none",
                    "x": 140,
                    "y": 18,
                    "anchorX": .5
                }
            },
            "texts": {
                "frLabel": {
                    "x": 400,
                    "y": 10,
                    "fill": "#ffe424",
                    "font": "15px Futura ,Arial",
                    "text": "Free Rounds:",
                    "anchorX":  0.5
                },
                "frValue": {
                    "x": 400,
                    "y": 22,
                    "fill": "#ffe424",
                    "font": "22px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                },
                "frTotWonLabel": {
                    "x": 900,
                    "y": 10,
                    "fill": "#ffe424",
                    "font": "15px Futura ,Arial",
                    "text": "Total won:",
                    "anchorX":  0.5
                },
                "frTotWonValue": {
                    "x": 900,
                    "y": 22,
                    "fill": "#ffe424",
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
                    "name": "icon19",
                    "x": 640,
                    "y": 0,
                    "anchorX": .5,
                    "alpha":0
                }
            },
            "texts": {
                "fsF": {
                    "x": 1115,
                    "y": 95,
                    "fill": "#fffc00",
                    "font": "30px Andale-Mono ,Arial",
                    "text": "/4",
                    "anchorX": 0.5
                },
                "fsFuel": {
                    "x": 1120,
                    "y": 75,
                    "fill": "#fffc00",
                    "font": "18px Andale-Mono ,Arial",
                    "text": "Fuel",
                    "anchorX": 0.5
                },
                "fsLabel": {
                    "x": 1120,
                    "y": 175,
                    "fill": "#fffc00",
                    "font": "18px Andale-Mono ,Arial",
                    "text": "Free Spins",
                    "anchorX": 0.5
                },
                "fsValue": {
                    "x": 1120,
                    "y": 205,
                    "fill": "#fffc00",
                    "font": "28px Andale-Mono ,Arial",
                    "text": "12",
                    "anchorX": 0.5
                },
                "totWonLabel": {
                    "x": 1120,
                    "y": 275,

                    "fill": "#fffc00",
                    "font": "18px Andale-Mono ,Arial",
                    "text": "Total won",
                    "anchorX":0.5
                },
                "totWonValue": {
                    "x": 1120   ,
                    "y": 305,
                    "fill": "#fffc00",
                    "font": "28px Andale-Mono ,Arial",
                    "text": "121212",
                    "anchorX": 0.5
                },
                "fsMultValue":{
                    "x": 1120,
                    "y": 405,
                    "bmpFont": "multiBmpFont",
                    "size": "60",
                    "text": "x12",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsmultT":{
                    "x": 1120,
                    "y": 385,
                    "font": "18px Andale-Mono ,Arial",
                    "fill": "#fffc00",
                    "text": "Multiplier",
                    "align":"center",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsAdditional":{
                    "x": 1130,
                    "y": 200,
                    "bmpFont": "multiBmpFont",
                    "size": "24",
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
                    "x": 340,
                    "y": 67
                },
                "lockIn_1": {
                    "name": "lockIn",
                    "visible":false,
                    "x": 340+ 100,
                    "y": 67
                },
                "lockIn_2": {
                    "name": "lockIn",
                    "visible":false,
                    "x": 340+ 2*100,
                    "y": 67
                },
                "lockIn_3": {
                    "name": "lockIn",
                    "visible":false,
                    "x": 340+ 3*100,
                    "y": 67
                },
                "lockIn_4": {
                    "name": "lockIn",
                    "visible":false,
                    "x": 340+ 4*100,
                    "y": 67
                },
                "lockIn_5": {
                    "name": "lockIn",
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
        "harp":{
            "visible":false,
            "graphAsset": {
                "pig":{
                    "visible":true,
                    "name": "sidePig",
                    "y": 472,
                    "x": 58,
                    "scaleX":1,
                    "scaleY":1,
                    "anchorX": .5,
                    "anchorY": .5

                },
                "bg": {
                    "visible":false,
                    "name": "moonPopUp",
                    "x": 640,
                    "y": 320,
                    "scaleX":1,
                    "scaleY":1,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "pom":{
                    "visible":false,
                    "name": "pigOnTheMoon",
                    "x": 592,
                    "y": 420,
                    "scaleX":1,
                    "scaleY":1,
                    "anchorX": .5,
                    "anchorY": .5
                }
            },
            "texts":{
                "harpHead":{
                    "x": 640,
                    "y": 270,
                    "font": "35px TOMO-Fonts-TOMO-Bossa-Black, sans-serif",
                    "fill": "#ffff01",
                    "text": "PIG ON THE MOON",
                    "stroke": "#40372a",
                    "stroke_tick": 4,
                    "anchorX": 0.5,
                },
                "harptext":{
                    "x": 640,
                    "y": 310,
                    "font": "35px TOMO-Fonts-TOMO-Bossa-Black, sans-serif",
                    "fill": "#ffff01",
                    "text": "",
                    "stroke": "#40372a",
                    "stroke_tick": 4,
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
                    "name": "icon19",
                    "x": 640,
                    "y": 0,
                    "anchorX": .5,
                    "alpha":0
                }
            },
            "texts":{
                "winWaysNum":{
                    "x": 640,
                    "y": 42,
                    "font": "35px TOMO-Fonts-TOMO-Bossa-Black,Arial, Helvetica sans-serif",
                    "fill": "#ffe424",
                    "text": "1024",
                    "anchorX": 0.5,
                    "anchorY": 0.5
                },
            }
        },
        "fsAproachPopup": {
            "visible": false,
            "comment_fakeButton": "used to cover all the other buttons",
            "fakeButton": true,
            "eventBlock": true,
            "duration": 5,
            "graphAsset": {
                "fsCounter": {
                    "visible": false,
                    "name": "fsCounter",
                    "x": 640,
                    "y": 360,
                    "anchorX": .5,
                    "anchorY": .5,
                },
                "randNumber": {
                    "visible": false,
                    "name": "randNumber",
                    "x": 640,
                    "y": 360,
                    "anchorX": .5,
                    "anchorY": .5,
                },
                "n1": {
                    "visible": false,
                    "name": "n1",
                    "x": 640,
                    "y": 360,
                    "anchorX": .5,
                    "anchorY": .5,
                },
                "n2": {
                    "visible": false,
                    "name": "n2",
                    "x": 640,
                    "y": 360,
                    "anchorX": .5,
                    "anchorY": .5,
                },
                "n3": {
                    "visible": false,
                    "name": "n3",
                    "x": 640,
                    "y": 360,
                    "anchorX": .5,
                    "anchorY": .5,
                },
                "n4": {
                    "visible": false,
                    "name": "n4",
                    "x": 640,
                    "y": 360,
                    "anchorX": .5,
                    "anchorY": .5,
                },
            },
            "texts": {
                "fsFeature": {
                    "x": 640,
                    "y": 100,
                    "fill": "#62f014",
                    "font": "28px Andale-Mono",
                    "text": "",
                    "anchorX": .5
                },
                "fsAproach": {
                    "x": 640,
                    "y": 70,
                    "fill": "#62f014",
                    "font": "28px Andale-Mono",
                    "text": "Aproaching...",
                    "anchorX": .5
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
                    "name": "bgPanelFs",
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
                    "fill": "#62f014",
                    "font": "60px Andale-Mono",
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
                    "y": 350,
                    "fill": "#ffffff",
                    "font": "28px FuturaPT-Book",
                    "text": "The maximum prize",
                    "anchorX": .5
                },
                "fsWLabel1": {
                    "x": 640,
                    "y": 380,
                    "fill": "#ffffff",
                    "font": "46px FuturaPT-Book",
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
                    "x": -500,
                    "y": -500,
                    "width":2500,
                    "height":3500,
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
                    "y": 332,
                    "bmpFont": "bmpFont",
                    "size": "50",
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
                    "x": 0,
                    "y": 0,
                    "alpha": 1
                },
                "bgmsgPo": {
                    "name": "bgBlack",
                    "x": -500,
                    "y": -500,
                    "width":2500,
                    "height":3500,
                    "alpha": 1
                },
                "bgPreview1": {
                    "name": "bgPreview1",
                    "x": 110,
                    "y": 140,
                    "texts": {
                        "pw1":{
                            "x": 250,
                            "y": 40,
                            "font": "45px TOMO-Fonts-TOMO-Bossa-Black, sans-serif",
                            "fill": "#ffe424",

                            "text": "MEGA FISSION",
                            "anchorX": 0.5,
                        },
                        "pw2":{
                            "x": 250,
                            "y": 370,
                            "font": "20px TOMO-Fonts-TOMO-Bossa-Black, sans-serif",
                            "fill": "#ffe424",
                            "align":"center",
                            "text": "SYMBOLS ON REELS WITH MAXIMUM HEIGHT OF 3",
                            "anchorX": 0.5,
                        },
                        "pw3":{
                            "x": 250,
                            "y": 390,
                            "font": "20px TOMO-Fonts-TOMO-Bossa-Black, sans-serif",
                            "fill": "#ffe424",
                            "align":"center",
                            "text": "SPLIT IN 2 ON WIN",
                            "anchorX": 0.5,
                        }
                    }
                },
                "bgPreview2": {
                    "name": "bgPreview2",
                    "x": 647,
                    "y": 140,
                    "texts": {
                        "pw5":{
                            "x": 250,
                            "y": 40,
                            "font": "45px TOMO-Fonts-TOMO-Bossa-Black, sans-serif",
                            "fill": "#ffe424",
                            "text": "235298",
                            "anchorX": 0.5,
                        },
                        "pw51":{
                            "x": 250,
                            "y": 80,
                            "font": "45px TOMO-Fonts-TOMO-Bossa-Black, sans-serif",
                            "fill": "#ffe424",
                            "text": "WINWAYS",
                            "anchorX": 0.5,
                        },
                        "pw6":{
                            "x": 250,
                            "y": 350,
                            "font": "20px TOMO-Fonts-TOMO-Bossa-Black, sans-serif",
                            "fill": "#ffe424",
                            "align":"center",
                            "text": "DOUBLE YOUR WINWAYS AND",
                            "anchorX": 0.5,
                        },
                        "pw7":{
                            "x": 250,
                            "y": 370,
                            "font": "20px TOMO-Fonts-TOMO-Bossa-Black, sans-serif",
                            "fill": "#ffe424",
                            "align":"center",
                            "text": "UNLOCK MANY MORE FEATURES",
                            "anchorX": 0.5,
                        },
                        "pw8":{
                            "x": 250,
                            "y": 390,
                            "font": "20px TOMO-Fonts-TOMO-Bossa-Black, sans-serif",
                            "fill": "#ffe424",
                            "align":"center",
                            "text": "ON THE WAY TO URANUS",
                            "anchorX": 0.5,
                        }
                    }
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
                    "x": 640,
                    "y": -320,
                    "height":2000,
                    "anchorX": .5
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
                    "y": 530,
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
                    "y": 530,
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
                    "y": 530,
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
            "selectorY":215,
            "selectorX":300,
            "textCol":"#ffffff",
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
                    "y": 290,
                    "anchorX": .5,
                    "anchorY": .5,
                    "scaleX":1.1,
                    "scaleY":1
                }
            },
            "texts": {
                "msgF1": {
                    "x": 640,
                    "y": 211,
                    "fill": "#ffffff",
                    "font": "24px Andale-Mono,FuturaPT-Book",
                    "text": "",
                    "align":"center",
                    "anchorX": .5
                },
                "msgF2": {
                    "x": 640,
                    "y": 335,
                    "fill": "#ffffff",
                    "font": "20px Andale-Mono, FuturaPT-Book",
                    "text": "",
                    "anchorX": .5
                },
                "msgF3": {
                    "x": 640,
                    "y": 269,
                    "fill": "#ffffff",
                    "font": "18px Andale-Mono, FuturaPT-Book",
                    "text": "",
                    "anchorX": .5
                },
                "msgF45": {
                    "x": 640,
                    "y": 298,
                    "fill": "#ffffff",
                    "font": "18px Andale-Mono,FuturaPT-Book",
                    "text": "",
                    "anchorX": .5
                },
                "msgF4": {
                    "x": 640,
                    "y": 285,
                    "fill": "#ffffff",
                    "font": "18px Andale-Mono,FuturaPT-Book",
                    "text": "",
                    "anchorX": .5
                },
                "msgF5": {
                    "x": 640,
                    "y": 310,
                    "fill": "#ffffff",
                    "font": "18px Andale-Mono, FuturaPT-Book",
                    "text": "",
                    "anchorX": .5
                },
                "msgF51": {
                    "x": 640,
                    "y": 395,
                    "fill": "#ffffff",
                    "font": "18px Andale-Mono, FuturaPT-Book",
                    "text": "",
                    "anchorX": .5
                },
                "priceF": {
                    "x": 640,
                    "y": 430,
                    "fill": "#ffffff",
                    "font": "20px Andale-Mono, FuturaPT-Book",
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
                            "font": "18px Andale-Mono, FuturaPT-Book",
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
                            "font": "18px Andale-Mono, FuturaPT-Book",
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
                            "font": "20px Andale-Mono, FuturaPT-Book",
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
    "slotEngine":"IntegratedSlots",
    "engineNumbers":0,
    "newUI":true,
    "newComm":true,
    "isMobile":true,
    "transparentUI":true,
    "log":true,
    "canSwipe":false,
    "fastPlayEnable":true,
    "comment_preview":"enable feature preview screen",
    "preview":true,
    "previewTout":45000,
    "spinType": "MegaWaySplitTumblingSpin",
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
    "lineType": "MegaWaySplitTumblingWin",
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
            "reelSecondMovementTime":0.35,
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
            "reelSecondMovementTime":0.65,
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
            "reelSecondMovementTime":0.3,
            "reelLoopInterval":.18,
            "reelPreMovement": 4,
            "reelPreMovementTime": .3,
            "reelBaseInterval": 1,
            "reelStopInterval": 3,
            "reelSpinBounceMeasure": 40,
            "reelSpinBounceTime": .28,
            "reelSpinBounceForce": 1.2
        },
        "default":{
            "stopEnabled":true,
            "reelSecondMovementTime":.65,
            "reelLoopInterval":.1,
            "reelPreMovement": 0,
            "reelPreMovementTime": 0,
            "reelBaseInterval": 1,
            "reelStopInterval": 1,
            "reelSpinBounceMeasure": 80,
            "reelSpinBounceTime": 1,
            "reelSpinBounceForce": 0,
            "minimumTime":.3
        }
    },
    "numIcon": 10,
    "loadTout": 30,
    "credits": "5000",
    "bet": "0.50",
    "animDelayAfterWild":1500,
    "freeRounds":"normal",
    "freeSpins":"AstroNewtsMwFreeSpins",
    "_fsIcon": 1,
    "fsSpinDelay":750,
    "minFsSmbs":3,
    "scatterIcon": 10,
    "scatterType": "SubstScatter",
    "_twinReelsFeature":"normal",
    "wildType": "MegawaysWildReel",
    "wildNum": [11],
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
        "deltaX_0": 340,
        "deltaX": 100,
        "deltaY_0": 632 ,
        "deltaY": 104
    },
    "icon": {
        "x": 0,
        "y": 0,
        "width": 100,
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
        "noCoinOnEachLine":10,
    }
}

var paytableAssets = {

    "pages": [

        //Game guide object
        {
            "gameguide": true,
            "title": "Astro Newts MegaWays™ Game Rules",
            "rtp": [
                "95.9%",
                "95.9%",
                "95.9%"
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
                            "bg": "astroNewtsMegaways/img/symbol-00.png", //symbol image
                            "payout_values": true //Whether symbol has payout values

                        },

                        {

                            "id": "symbol_01",
                            "bg": "astroNewtsMegaways/img/symbol-01.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_02",
                            "bg": "astroNewtsMegaways/img/symbol-02.png",
                            "payout_values": true

                        }


                    ],

                    [

                        {

                            "id": "symbol_03",
                            "bg": "astroNewtsMegaways/img/symbol-03.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_04",
                            "bg": "astroNewtsMegaways/img/symbol-04.png",
                            "payout_values": true

                        }

                    ],

                    [
                        {

                            "id": "symbol_05",
                            "bg": "astroNewtsMegaways/img/symbol-05.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_06",
                            "bg": "astroNewtsMegaways/img/symbol-06.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_07",
                            "bg": "astroNewtsMegaways/img/symbol-07.png",
                            "payout_values": true

                        }

                    ],

                    [

                        {
                            "id": "symbol_08",
                            "bg": "astroNewtsMegaways/img/paytable/symbol-08.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_09",
                            "bg": "astroNewtsMegaways/img/paytable/symbol-09.png",
                            "payout_values": true

                        }



                    ],
                    [
                        {
                            "id": "symbol_10",
                            "bg": "astroNewtsMegaways/img/paytable/symbol-10.png",
                            "payout_values": false,
                            "text": [
                                "Wild",
                                "Wild can appear on reel 2,3,4,5,6 during base game and Free Spins",
                                "Wilds substitutes all the icons."
                            ]

                        }
                    ],
                    [
                        {
                            "id": "symbol_11",
                            "bg": "astroNewtsMegaways/img/paytable/symbol-11.png",
                            "payout_values": false,
                            "text": [
                                "Expanding Wild",
                                "Wild can appear on reel 2,3,4,5 during base game and Free Spins",
                                "Wilds substitutes all the icons."
                            ]

                        }
                    ],
                    [

                        {
                            "id": "symbol_12",
                            "bg": "astroNewtsMegaways/img/paytable/symbol-12.png",
                            "payout_values": false,
                            "text": [
                                "Fuel",
                                "Can appear on spin and tumbles during base game and Free Spins.",
                                "There is no Maximum number of Fuel per spin or tumbles.",
                                "Each symbol adds 1 to the fuel tank.",
                                "There is no Fuel on Uranus.",
                            ]
                        }
                    ],
                    [

                        {
                            "id": "symbol_13",
                            "bg": "astroNewtsMegaways/img/paytable/symbol-13.png",
                            "payout_values": false,
                            "text": [
                                "ALien Super Fuel",
                                "Can only appear during Free Spins on Mars only.",
                                "Can appear on spin and tumbles.",
                                "There is no Maximum number of Fuel per spin or tumbles.",
                                "Each symbol adds 2 to the fuel tank."
                            ]
                        }
                    ],
                    [

                        {
                            "id": "symbol_12",
                            "bg": "astroNewtsMegaways/img/paytable/pig.png",
                            "payout_values": false,
                            "text": [
                                "PIG ON THE MOON",
                                "Can award additional Wilds and additional Expanding Wilds",
                                "on base game and Free Spins.",
                                "Up to 2 additional Expanding Wilds.",
                                "Up to 4 additional Wilds."
                            ],
                            "size": { //Optional field that sets image height & width in px
                                "height": "128",
                                "width":  "173"
                            }
                        }
                    ],
                    [

                        {
                            "id" : "tumble_screenshot",
                            "bg" : "astroNewtsMegaways/img/paytable/winways2.png",
                            "text": [
                                "Whenever a win way pays out the symbols are destroyed and all remaining symbols tumble down.",
                                "All destroyed symbols are replaced with symbols from higher up on the reels with a high chance of extra Wild Stars appearing.",
                                "If the new symbols also form a win way they too will pay out and more symbols will tumble in to replace them, this will continue until no more Win Ways can be made."
                            ],
                            "size": { //Optional field that sets image height & width in px

                                "height": "250",
                                "width":  "250"

                            }

                        }

                    ],
                    [
                        {
                            "id" : "tumble_screenshot",
                            "bg" : "astroNewtsMegaways/img/paytable/intro1.png",
                            "text":[
                                "MEGA FISSION™",
                                "Winning symbols on 2 or 3 reel height will split into 2 on win.",
                                "Mega Fission can happen only once per symbol.",
                                "There is no limit on the number of symbols that can have a Mega Fission per Spin or Tumble.",
                                "Mega Fission increases the number of ways to win.",
                            ],
                            "size": { //Optional field that sets image height & width in px

                                "height": "250",
                                "width":  "250"

                            }

                        },
                    ],
                    [
                        {

                            "id" : "FSStart",
                            "bg" : "astroNewtsMegaways/img/paytable/fs.png",
                            "text": [
                                "Free Spins",
                                "8 Free Spins are reached when the fuel tank is full at 6, when you'll have enough Fuel to reach the Moon.",
                                "Successive Fuels after 6 are stored for the next part of the journey to Uranus.",
                                "From the Moon you need 4 Fuels to reach the next planet, unused Fuels are stored for the next part of the journey.",
                                "Each planet on the journey to Uranus awards up to 4 additional Free Spins and unlocks new features:",
                                "The Moon: x1 multiplier for each winning tumble.",
                                "Mars: on Mars only the Alien symbol gives Super Fuel.",
                                "Jupiter: reels with 7 symbols lock at that number of symbols for the entirety of Free Spins feature.",
                                "Saturn: x2 multiplier for each winning tumble.",
                                "Uranus: pays both way.",
                                "The current multiplier applies to any win earned while that multiplier is in effect, increases will affect all subsequent wins."
                            ],
                            "size": { //Optional field that sets image height & width in px

                                "height": "249",
                                "width":  "92"

                            }

                        }

                    ],
                    [
                        {
                            "id": "addSF",
                            "bg": "astroNewtsMegaways/img/paytable/fsAdd.png",
                            "payout_values": false,
                            "text": [
                                "Free Spins fuel level",
                                "Shows the current level of the fuel tank.",
                            ],
                            "size": { //Optional field that sets image height & width in px

                                "height": "104",
                                "width":  "226"

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

                    "bg": "astroNewtsMegaways/img/paytable/winways.jpg",
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