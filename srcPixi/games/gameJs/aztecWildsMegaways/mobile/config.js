
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

    "buttons": {
        "spinButton": {
            "id": "spinButtonSelect",
            "bg": "gui/generic/img/mobile/png/mb-btn-spin-up.png",
            "bgDisabled": "gui/generic/img/mobile/png/mb-btn-spin-disabled.png"

        },
        "stopButton": {
            "id": "stopButtonSelect",
            "bg": "gui/generic/img/mobile/png/mb-btn-stop.png",
            "bgDisabled": "gui/generic/img/mobile/png/mb-btn-stop-disabled.png"
        },
        "betControl": {
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
                    "align": "left"

                }
            }

        },
        "helpButton": {
            "id": "helpButton",
            "bg": "gui/generic/img/desktop/png/cp-btn-paytable-up.png",
            "bgDisabled": "gui/generic/img/desktop/png/cp-btn-paytable-disabled.png"
        },
        "autoButton": {
            "id": "autoButtonSelect",
            "bg": "",
            "start": "gui/generic/img/mobile/png/mb-btn-spin-up.png",
            "stop": "gui/generic/img/mobile/png/mb-btn-autospin-active.png",
            "texts": {
                "betValue": {
                    "fill": "#ffffff",
                    "font": "15px Helvetica, Arial, sans-serif",
                    "text": "",
                    "align": "left"

                }
            }

        }
    }
}

var loaderAssets={
    "assets": {
        "winWayOb": "aztecWildsMegaways/img/loader/btg-megaways.png"
    },
    "loaderMc": {
        "staticLoaderLogo": {
            "sprite": "aztecWildsMegaways/img/logo.png",
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
                "x": 970,
                "y": 650,
                "anchorX": .5,
                "anchorY": .5,
                "scaleX":1,
                "scaleY":1
            }
        },
        "textsLicence": {
            "lice": {
                "x": 960,
                "y": 630,
                "fill": "#ffffff",
                "font": "Arial",
                "fontSize": "20px",
                "text": "UNDER LICENCE FROM",
                "align":"center",
                "anchorX": 0.5,
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
                "x": 960,
                "y": 500,
                "anchorX":.5,
                "anchorY":.5
            }
        },
        "texts": {
            "perc": {
                "x": 960,
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
        "sprite": "fonts/fontAtzec.png",
        "font": "fonts/fontAtzec.xml"
    },
    "multiBmpFont":{
        "sprite": "fonts/fontAtzec.png",
        "font": "fonts/fontAtzec.xml"
    }
}

var extScripts={
    "webfont": "FuturaPT-Heavy",
    "webfont1": "FuturaPT-Book",
    "webfont2": "mayan-square",
    "webfont3": "mayan-square"
}

var gameAssets = {
    "assets": {
        "iconGH0": "aztecWildsMegaways/img/paytable/symbol_00.png",
        "iconGH1": "aztecWildsMegaways/img/paytable/symbol_01.png",
        "iconGH2": "aztecWildsMegaways/img/paytable/symbol_02.png",
        "iconGH3": "aztecWildsMegaways/img/paytable/symbol_03.png",
        "iconGH4": "aztecWildsMegaways/img/paytable/symbol_04.png",
        "iconGH5": "aztecWildsMegaways/img/paytable/symbol_05.png",
        "iconGH6": "aztecWildsMegaways/img/paytable/symbol_06.png",
        "iconGH7": "aztecWildsMegaways/img/paytable/symbol_07.png",
        "iconGH8": "aztecWildsMegaways/img/paytable/symbol_08.png",
        "iconGH9": "aztecWildsMegaways/img/paytable/symbol_09.png",
        "iconGH10": "aztecWildsMegaways/img/paytable/symbol_10.png",
        "iconGH11": "aztecWildsMegaways/img/paytable/symbol_11.png",
        "iconGH12": "aztecWildsMegaways/img/paytable/symbol_12.png",
        "iconGH13": "aztecWildsMegaways/img/paytable/symbol_13.png",
        "iconGH15": "aztecWildsMegaways/img/paytable/symbol_13.png",

        "reelBg": "aztecWildsMegaways/img/bg/reel-bg.png",
        "bg": "aztecWildsMegaways/img/bg/bg.jpg",
        "bgP": "aztecWildsMegaways/img/bg/mobile/bg.jpg",
        "bg_Fs": "aztecWildsMegaways/img/bg/bgFs.jpg",
        "bg_FsP": "aztecWildsMegaways/img/bg/mobile/bgFs.jpg",
        "bgPanel": "aztecWildsMegaways/img/pop_up.png",
        "bgPanelGame": "aztecWildsMegaways/img/pop_up.png",
        "bgPreview":"aztecWildsMegaways/img/paytable/intro-page.png",
        "bgPreview1":"aztecWildsMegaways/img/paytable/intro1.png",
        "bgPreview2":"aztecWildsMegaways/img/paytable/intro2.png",
        "bgPreviewLogo":"aztecWildsMegaways/img/logo.png",
        "bgAlpha": "aztecWildsMegaways/img/alpha.png",
        "bgBlack": "aztecWildsMegaways/img/black.png",

        "logo": "aztecWildsMegaways/img/logo.png",

        "box": "aztecWildsMegaways/img/counter.png",
        "buttonBg":"gui/generic/img/desktop/png/cp-info-bar.png",
        "volOnButton": "gui/btnVolOn.png",
        "volOffButton": "gui/btnVolOff.png",
        "btnTranspRight": "aztecWildsMegaways/img/transparent.png",
        "btnTranspLeft": "aztecWildsMegaways/img/transparent.png",
        "none": "aztecWildsMegaways/img/transparent.png",
    },
    "localizedAssets":{

    },
    "buttonsSpriteSheet": {
    },
    "animations": {
        "bigWin":{
            "json": "aztecWildsMegaways/img/anim/centralWin.json",
            "type":"spine"
        },
        "yesButton": {
            "json": "aztecWildsMegaways/img/yes-btn.json",
        },
        "noButton": {
            "json": "aztecWildsMegaways/img/no-btn.json",
        },
        "feature-Fn-btn": {
            "json": "aztecWildsMegaways/img/buyFeature/buy-fs-btn.json",
        },
        "feature-Rn-btn": {
            "json": "aztecWildsMegaways/img/buyFeature/buy-fs-btn.json",
        },
        "buyFeature":{
            "json": "aztecWildsMegaways/img/buyFeature/buy-feature-btn.json",
        },
        "buyFeatureConfirm":{
            "json": "aztecWildsMegaways/img/generic-game-btn.json",
        },
        "buyUpgrade":{
            "json": "aztecWildsMegaways/img/buyFeature/buy-feature-btn.json",
        },
        "genericBtn":{
            "json": "aztecWildsMegaways/img/generic-game-btn.json",
        },
        "game-btn":{
            "json": "aztecWildsMegaways/img/generic-game-btn.json",
        },
        "check": {
            "json": "aztecWildsMegaways/img/radio-btns.json",
        },
        "pot":{
            "json": "aztecWildsMegaways/img/anim/wheel.json",
            "type":"spine"
        },

        "tumble_7_2":{
            "json": "aztecWildsMegaways/img/symbols/tiles/tile_7_02.json",
            "name": "tile_7_02.",
            "type":"spine"
        },
        "tumble_7_3":{
            "json": "aztecWildsMegaways/img/symbols/tiles/tile_7_03.json",
        },
        "tumble_7_4":{
            "json": "aztecWildsMegaways/img/symbols/tiles/tile_7_04.json",
        },
        "tumble_7_5":{
            "json": "aztecWildsMegaways/img/symbols/tiles/tile_7_05.json",
        },
        "tumble_7_6":{
            "json": "aztecWildsMegaways/img/symbols/tiles/tile_7_06.json",
        },
        "tumble_7_7":{
            "json": "aztecWildsMegaways/img/symbols/tiles/tile_7_07.json",
        },
        "tumble_9_2":{
            "json": "aztecWildsMegaways/img/symbols/tiles/tile_9_02.json",
        },
        "tumble_9_3":{
            "json": "aztecWildsMegaways/img/symbols/tiles/tile_9_03.json",
        },
        "tumble_9_4":{
            "json": "aztecWildsMegaways/img/symbols/tiles/tile_9_04.json",
        },
        "tumble_9_5":{
            "json": "aztecWildsMegaways/img/symbols/tiles/tile_9_05.json",
        },
        "tumble_9_6":{
            "json": "aztecWildsMegaways/img/symbols/tiles/tile_9_06.json",
        },
        "tumble_9_7":{
            "json": "aztecWildsMegaways/img/symbols/tiles/tile_9_07.json",
        },
        "tumble_9_8":{
            "json": "aztecWildsMegaways/img/symbols/tiles/tile_9_08.json",
        },
        "tumble_9_9":{
            "json": "aztecWildsMegaways/img/symbols/tiles/tile_9_09.json",
        },
        "tumble_9_2":{
            "json": "aztecWildsMegaways/img/symbols/tiles/tile_9_02.json",
        },
        "lockIn":{
            "json": "aztecWildsMegaways/img/anim/lockFeature/lockedReels.json",
            "type":"spine"
        },


        "icon0":{
            "json": "aztecWildsMegaways/img/symbols/symbol_d_00.json",
            "type":"spine"
        },
        "bicon0":{
            "json": "aztecWildsMegaways/img/symbols/symbol_b_00.json",
        },
        "anim0": {
            "json": "aztecWildsMegaways/img/symbols/symbol_00.json",
        },

        "icon1":{
            "json": "aztecWildsMegaways/img/symbols/symbol_d_01.json",
            "type":"spine"
        },
        "bicon1":{
            "json": "aztecWildsMegaways/img/symbols/symbol_b_01.json",
        },
        "anim1": {
            "json": "aztecWildsMegaways/img/symbols/symbol_01.json",

        },

        "icon2":{
            "json": "aztecWildsMegaways/img/symbols/symbol_d_02.json",
            "type":"spine"
        },
        "bicon2":{
            "json": "aztecWildsMegaways/img/symbols/symbol_b_02.json",
        },
        "anim2": {
            "json": "aztecWildsMegaways/img/symbols/symbol_02.json",
            "name": "symbol_02.",

        },

        "icon3":{
            "json": "aztecWildsMegaways/img/symbols/symbol_d_03.json",
            "type":"spine"
        },
        "bicon3":{
            "json": "aztecWildsMegaways/img/symbols/symbol_b_03.json",
        },
        "anim3":{
            "json": "aztecWildsMegaways/img/symbols/symbol_03.json",
            "name": "symbol_03.",

        },

        "icon4":{
            "json": "aztecWildsMegaways/img/symbols/symbol_d_04.json",
            "type":"spine"
        },
        "bicon4":{
            "json": "aztecWildsMegaways/img/symbols/symbol_b_04.json",
        },
        "anim4":{
            "json": "aztecWildsMegaways/img/symbols/symbol_04.json",
            "name": "symbol_04.",

        },

        "icon5":{
            "json": "aztecWildsMegaways/img/symbols/symbol_d_05.json",
            "type":"spine"
        },
        "bicon5":{
            "json": "aztecWildsMegaways/img/symbols/symbol_b_05.json",
        },
        "anim5":{
            "json": "aztecWildsMegaways/img/symbols/symbol_05.json",
            "name": "symbol_05.",

        },

        "icon6":{
            "json": "aztecWildsMegaways/img/symbols/symbol_d_06.json",
            "type":"spine"
        },
        "bicon6":{
            "json": "aztecWildsMegaways/img/symbols/symbol_b_06.json",
        },
        "anim6":{
            "json": "aztecWildsMegaways/img/symbols/symbol_06.json",
            "name": "symbol_06.",

        },

        "icon7":{
            "json": "aztecWildsMegaways/img/symbols/symbol_d_07.json",
            "type":"spine"
        },
        "bicon7":{
            "json": "aztecWildsMegaways/img/symbols/symbol_b_07.json",
        },
        "anim7":{
            "json": "aztecWildsMegaways/img/symbols/symbol_07.json",
            "name": "symbol_07.",

        },

        "icon8":{
            "json": "aztecWildsMegaways/img/symbols/symbol_d_08.json",
            "type":"spine"
        },
        "bicon8":{
            "json": "aztecWildsMegaways/img/symbols/symbol_b_08.json",
        },
        "anim8":{
            "json": "aztecWildsMegaways/img/symbols/symbol_08.json",
            "name": "symbol_08.",

        },

        "icon9":{
            "json": "aztecWildsMegaways/img/symbols/symbol_d_09.json",
            "type":"spine"
        },
        "bicon9":{
            "json": "aztecWildsMegaways/img/symbols/symbol_b_09.json",
        },
        "anim9":{
            "json": "aztecWildsMegaways/img/symbols/symbol_09.json",
            "name": "symbol_09.",

        },

        "icon10":{
            "json": "aztecWildsMegaways/img/symbols/symbol_d_10.json",
            "type":"spine"
        },
        "bicon10":{
            "json": "aztecWildsMegaways/img/symbols/symbol_b_10.json",
        },
        "anim10":{
            "json": "aztecWildsMegaways/img/symbols/symbol_10.json",
            "name": "symbol_10.",

        },

        "icon11":{
            "json": "aztecWildsMegaways/img/symbols/symbol_d_11.json",
            "type":"spine"
        },
        "bicon11":{
            "json": "aztecWildsMegaways/img/symbols/symbol_b_11.json",
        },
        "anim11":{
            "json": "aztecWildsMegaways/img/symbols/symbol_11.json",
            "name": "symbol_11.",
        },

        "icon12":{
            "json": "aztecWildsMegaways/img/symbols/symbol_d_12.json",
            "type":"spine"
        },
        "bicon12":{
            "json": "aztecWildsMegaways/img/symbols/symbol_b_12.json",
        },
        "anim12": {
            "json": "aztecWildsMegaways/img/symbols/symbol_12.json",
            "name": "symbol_12.",
        },

        "icon13":{
            "json": "aztecWildsMegaways/img/symbols/symbol_d_13.json",
            "type":"spine"
        },
        "bicon13":{
            "json": "aztecWildsMegaways/img/symbols/symbol_b_13.json",
        },
        "anim13": {
            "json": "aztecWildsMegaways/img/symbols/symbol_13.json",
            "name": "symbol_13.",
        },



        "part-1": {
            "json": "aztecWildsMegaways/img/anim/bronze-coin.json",
            "sprite": "aztecWildsMegaways/img/anim/bronze-coin.png"
        },
        "part-2": {
            "json": "aztecWildsMegaways/img/anim/silver-coin.json",
            "sprite": "aztecWildsMegaways/img/anim/silver-coin.png"
        },
        "part-3": {
            "json": "aztecWildsMegaways/img/anim/gold-coin.json",
            "sprite": "aztecWildsMegaways/img/anim/gold-coin.png"
        },
        "f-part-1": {
            "json": "aztecWildsMegaways/img/anim/bronze-coin-frwrd.json",
            "sprite": "aztecWildsMegaways/img/anim/bronze-coin-frwrd.png"
        },
        "f-part-2": {
            "json": "aztecWildsMegaways/img/anim/silver-coin-frwrd.json",
            "sprite": "aztecWildsMegaways/img/anim/silver-coin-frwrd.png"
        },
        "f-part-3": {
            "json": "aztecWildsMegaways/img/anim/gold-coin-frwrd.json",
            "sprite": "aztecWildsMegaways/img/anim/gold-coin-frwrd.png"
        },
    },
    "importantSounds": {

    },
    "sounds": {
        "spinClick": {
            "name": "aztecWildsMegaways/sounds/click.mp3",
            "volume":.4
        },
        "reelStop": {
            "name": "aztecWildsMegaways/sounds/reelStop.mp3",
            "volume":1.2
    },
        "click": {
            "name": "aztecWildsMegaways/sounds/click.mp3",
            "volume": .2
        },
        "smbWin_0": {
            "name": "aztecWildsMegaways/sounds/smbWin_0.mp3",
            "volume": 1.4
        },
        "smbWin_1": {
            "name": "aztecWildsMegaways/sounds/smbWin_1.mp3",
            "volume": 1.4
        },
        "smbWin_2": {
            "name": "aztecWildsMegaways/sounds/smbWin_2.mp3",
            "volume": 1.4
        },
        "smbWin_3": {
            "name": "aztecWildsMegaways/sounds/smbWin_3.mp3",
            "volume": 1.4
        },
        "smbWin_4": {
            "name": "aztecWildsMegaways/sounds/smbWin_4.mp3",
            "volume": 1.5
        },
        "smbWin_5": {
            "name": "aztecWildsMegaways/sounds/smbWin_5.mp3",
            "volume": 1.5
        },
        "smbWin_6": {
            "name": "aztecWildsMegaways/sounds/smbWin_6.mp3",
            "volume": 1.5
        },
        "smbWin_7": {
            "name": "aztecWildsMegaways/sounds/smbWin_7.mp3",
            "volume": 1.5
        },
        "smbWin_8": {
            "name": "aztecWildsMegaways/sounds/smbWin_8.mp3",
            "volume": 1.3
        },
        "smbWin_9": {
            "name": "aztecWildsMegaways/sounds/smbWin_9.mp3",
            "volume": 1.3
        },
        "smbWin_10": {
            "name": "aztecWildsMegaways/sounds/smbWin_10.mp3",
            "volume": 1.3
        },
        "smbWin_11": {
            "name": "aztecWildsMegaways/sounds/smbWin_11.mp3",
            "volume": 1.3
        },
        "smbWin_12": {
            "name": "aztecWildsMegaways/sounds/smbWin_12.mp3",
            "volume": 1.3
        },
        "smbWin_13": {
            "name": "aztecWildsMegaways/sounds/smbWin_13.mp3",
            "volume": 1.3
        },
        "fsWon": {
            "name": "aztecWildsMegaways/sounds/introFs.mp3",
            "volume": 1
        },

        "incWin": {
            "name": "aztecWildsMegaways/sounds/counter.mp3",
            "volume": .1,
            "loop": true
        },
        "line": {
            "name": "aztecWildsMegaways/sounds/line.mp3",
            "volume": .3
        },
        "winBg_0": {
            "name": "aztecWildsMegaways/sounds/centralWin/win1.mp3",
            "volume": .6
        },
        "winBg_1": {
            "name": "aztecWildsMegaways/sounds/centralWin/win2.mp3",
            "volume": .6
        },
        "winBg_2": {
            "name": "aztecWildsMegaways/sounds/centralWin/win3.mp3",
            "volume": .6
        },
        "winBg_3": {
            "name": "aztecWildsMegaways/sounds/centralWin/win4.mp3",
            "volume": .6
        },
        "winBg_4": {
            "name": "aztecWildsMegaways/sounds/centralWin/win5.mp3",
            "volume": .6
        },
        "winBg_5": {
            "name": "aztecWildsMegaways/sounds/centralWin/win6.mp3",
            "volume": .6
        },
        "winBg_6": {
            "name": "aztecWildsMegaways/sounds/centralWin/bigWin.mp3",
            "volume": .7
        },
        "winBg_7": {
            "name": "aztecWildsMegaways/sounds/centralWin/superBigWin.mp3",
            "volume": .7
        },
        "winBg_8": {
            "name": "aztecWildsMegaways/sounds/centralWin/megaBigWin.mp3",
            "volume": .7
        },
        "winBgS_6": {
            "name": "aztecWildsMegaways/sounds/centralWin/bigWin.mp3",
            "volume": .7
        },
        "winBgS_7": {
            "name": "aztecWildsMegaways/sounds/centralWin/superBigWin.mp3",
            "volume": .7
        },
        "winBgS_8": {
            "name": "aztecWildsMegaways/sounds/centralWin/megaBigWin.mp3",
            "volume": .7
        },
        "winPanel": {
            "name": "aztecWildsMegaways/sounds/winScreen.mp3",
            "volume": 1
        },
        "coins": {
            "name": "aztecWildsMegaways/sounds/coins.mp3",
            "volume":1.2
        },
        "tumbleSound": {
            "name": "aztecWildsMegaways/sounds/tumbling.mp3",
            "volume": 1,
        },
        "reelSound": {
            "name": "aztecWildsMegaways/sounds/reelSound.mp3",
            "volume":1
        },
        "iconPop": {
            "name": "aztecWildsMegaways/sounds/iconPop.mp3",
            "volume": 1.1
        },
        "potFill_01": {
            "name": "aztecWildsMegaways/sounds/sideFeature_progress1.mp3",
            "volume": 1
        },
        "potFill_02": {
            "name": "aztecWildsMegaways/sounds/sideFeature_progress2.mp3",
            "volume": 1.2
        },
        "potFill_03": {
            "name": "aztecWildsMegaways/sounds/sideFeature_progress3.mp3",
            "volume": 1.3
        },
        "potFill_04": {
            "name": "aztecWildsMegaways/sounds/sideFeature_progress4.mp3",
            "volume": 1.4
        },
        "potReset": {
            "name": "aztecWildsMegaways/sounds/sideFeature_fail.mp3",
            "volume": 1
        },
    },
    "bgSounds": {
        "bgSlot": {
            "name": "aztecWildsMegaways/sounds/bg.mp3",
            "volume": .3,
        },
        "bgFs": {
            "name": "aztecWildsMegaways/sounds/bgFs.mp3",
            "volume":.6
        }
    },

};
var guiConfig = {
    "credits": ["cash","credits"]
};
var displayManager = {
    "groups": {

        "bg": {
            "visible":false,
            "graphAsset": {
                "bg": {
                    "name": "bg",
                    "width":1920,
                    "height":1080,
                    "x": 960,
                    "y": 0,
                    "anchorX":.5
                },
                "bgP": {
                    "visible":false,
                    "name": "bgP",
                    "x": 960,
                    "y": 900,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "bgReel": {
                    "name": "reelBg",
                    "x": 960,
                    "y": 540,
                    "width": 968,
                    "anchorX": .5,
                    "anchorY": .5
                }
            },
        },

        "bgFS": {
            "visible":false,
            "graphAsset": {
                "bg": {
                    "name": "bg_Fs",
                    "width":1920,
                    "height":1080,
                    "x": 960,
                    "y": 0,
                    "anchorX":.5,
                },
                "bgP": {
                    "visible":false,
                    "name": "bg_FsP",
                    "x": 960,
                    "y": 900,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "bgReel": {
                    "name": "reelBg",
                    "x": 960,
                    "y": 540,
                    "width": 968,
                    "anchorX": .5,
                    "anchorY": .5
                }
            }
        },

        "bgIconAnim":{},
        "reels": {},
        "reelFg": {},
        "hReel": {
        },
        "mask":{
            "visible":false,
            "graphAsset": {

            },

        },
        "maskFS":{
            "visible":false,
        },

        "fog":{
            "visible":false,

        },

        "frame":{
            "visible":false,

        },
        "logo": {
            "visible":false,
            "graphAsset": {
                "logo": {
                    "name": "logo",
                    "x": 300,
                    "y": 15,
                    "anchorX":.5,
                    "scaleX":1,
                    "scaleY":1
                },
                "counter": {
                    "name": "box",
                    "x": 300,
                    "y": 165,
                    "anchorX":.5,
                    "scaleX":1,
                    "scaleY":.4,
                    "texts":{
                        "winWaysNum":{
                            "x": 0,
                            "y": 75,
                            "bmpFont": "bmpFont",
                            "size": "93",
                            "text": "",
                            "anchorX": .5,
                            "anchorY": .5
                        },
                    }
                },

            }
        },
        "pot": {
            "visible": false,
            "animAsset": {
                "pot": {
                    "name": "pot",
                    "x": 960,
                    "y": 120,
                    "scaleX":1,
                    "scaleY":1,
                    "anchorX":.5,
                    "anchorY":.5,
                    "autoplay":false,
                    "type":"spine",
                    "texts":{
                         "win":{
                            "x": 0,
                            "y": 10,
                            "font": "mayan-square ,Arial",
                            "fontSize": "35px",
                            "fill": "#f3c42b",
                             "style":{
                                    "dropShadow": true,
                                    "dropShadowAngle": 1.5,
                                    "dropShadowColor": "#300",
                                    "dropShadowDistance": 4,
                                    "fill": [
                                        "#ffe894",
                                        "#ffd500",
                                        "#c2a200"
                                    ],
                                    "fontFamily": "mayan-square",
                                    "fontSize": 70,
                                    "stroke": "#fff9d1",
                                    "strokeThickness": 1
                                      },
                            "text": "",
                            "align":"center",
                            "anchorX": .5,
                        },
                        }
                    }
            }
        },
        "scatter": {},
        "stickyWilds": {},
        "lockReels":{
            "visible":false,
            "animAsset": {
                "lockIn_0": {
                    "visible":false,
                    "name": "lockIn",
                    "x": 375,
                    "y": 532,
                    "scaleX":.25,
                    "scaleY":.25,
                    "type":"spine",
                    "autoplay":false,
                },
                "lockIn_1": {
                    "name": "lockIn",
                    "visible":false,
                    "x": 375+196,
                    "y": 532,
                    "scaleX":.25,
                    "scaleY":.25,
                    "type":"spine",
                    "autoplay":false,
                },
                "lockIn_2": {
                    "name": "lockIn",
                    "visible":false,
                    "x": 375+2*196,
                    "y": 532,
                    "scaleX":.25,
                    "scaleY":.25,
                    "type":"spine",
                    "autoplay":false,

                },
                "lockIn_3": {
                    "name": "lockIn",
                    "visible":false,
                    "x": 375+3*196,
                    "y": 525,
                    "scaleX":.25,
                    "scaleY":.25,
                    "type":"spine",
                    "autoplay":false,
                },
                "lockIn_4": {
                    "name": "lockIn",
                    "visible":false,
                    "x": 375+4*196,
                    "y": 532,
                    "scaleX":.25,
                    "scaleY":.25,
                    "type":"spine",
                    "autoplay":false,
                },
                "lockIn_5": {
                    "name": "lockIn",
                    "visible":false,
                    "x": 375+5*196,
                    "y": 532,
                    "scaleX":.25,
                    "scaleY":.25,
                    "type":"spine",
                    "autoplay":false,
                },
                "lockIn_6": {
                    "name": "lockIn",
                    "visible":false,
                    "x": 375+6*196,
                    "y": 532,
                    "scaleX":.25,
                    "scaleY":.25,
                    "type":"spine",
                    "autoplay":false,
                },

            },
            "texts":{
                "fsMultValueBig":{
                    "x": 960,
                    "y": 700,
                    "bmpFont": "bmpFont",
                    "size": "320",
                    "text": "",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsAdd0": {
                    "visible":false,
                    "x": 200,
                    "y": 200,
                    "bmpFont": "bmpFont",
                    "size": "50",
                    "text": "+1",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsAdd1": {
                    "visible":false,
                    "x": 370+196,
                    "y": 200,
                    "bmpFont": "bmpFont",
                    "size": "50",
                    "text": "+1",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsAdd2": {
                    "visible":false,
                    "x": 370+2*196,
                    "y": 120,
                    "bmpFont": "bmpFont",
                    "size": "50",
                    "text": "+1",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsAdd3": {
                    "visible":false,
                    "x": 370+3*196,
                    "y": 200,
                    "bmpFont": "bmpFont",
                    "size": "50",
                    "text": "+5",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsAdd4": {
                    "visible":false,
                    "x": 370+4*196,
                    "y": 200,
                    "bmpFont": "bmpFont",
                    "size": "50",
                    "text": "+1",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsAdd5": {
                    "visible":false,
                    "x": 370+5*196,
                    "y": 200,
                    "bmpFont": "bmpFont",
                    "size": "50",
                    "text": "+1",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsAdd6": {
                    "visible":false,
                    "x": 370+6*196,
                    "y": 200,
                    "bmpFont": "bmpFont",
                    "size": "50",
                    "text": "+1",
                    "anchorX": .5,
                    "anchorY": .5
                }
            }
        },
        "wild": {
        },
        "wins": {},
        "lines": {},
        "buyFeature":{
            "buttons": {
                "buyFeature": {
                    "visible":true,
                    "name": "buyFeature",
                    "x": 1720,
                    "y": 145,
                    "evt": "doBuyFeature",
                    "texts": {
                        "txt": {
                            "x": 20,
                            "y": -4,
                            "font": "FuturaPT-Heavy ,Arial, Helvetica sans-serif",
                            "fontSize": "27px",
                            "fill": "#000000",
                            "text": "BUY BONUS",
                            "anchorX": .5
                        }
                    }
                }
            }
        },
        "reelsPt_": {
            "visible": false,
            "clickDuration": 1000,
            "tOut": 3000,
            "x":300,
            "graphAsset": {
                "bgReelPt": {
                    "name": "bgPanel",
                    "width": 640,
                    "height":480,
                    "x":640,
                    "y":350,
                    "anchorX":.5,
                    "anchorY":.5
                }
            },
            "texts": {
                "ptDesc": {
                    "x": 644,
                    "y": 460,
                    "fill": "#ffffff",
                    "font": "20px Arial",
                    "text": "",
                    "anchorX": .5
                },
                "po5": {
                    "x": 610,
                    "y": 430,
                    "fill": "#ffffff",
                    "font": "20px Arial",
                    "text": "1",
                    "anchorX": .5
                },
                "win5": {
                    "x": 660,
                    "y": 430,
                    "fill": "#ffffff",
                    "font": "20px Arial",
                    "text": "5",
                    "anchorX": .5
                },
                "po4": {
                    "x": 610,
                    "y": 450,
                    "fill": "#ffffff",
                    "font": "20px Arial",
                    "text": "1",
                    "anchorX": .5
                },
                "win4": {
                    "x": 660,
                    "y": 450,
                    "fill": "#ffffff",
                    "font": "20px Arial",
                    "text": "5",
                    "anchorX": .5
                },
                "po3": {
                    "x": 610,
                    "y": 470,
                    "fill": "#ffffff",
                    "font": "20px Arial",
                    "text": "1",
                    "anchorX": .5
                },
                "win3": {
                    "x": 660,
                    "y": 470,
                    "fill": "#ffffff",
                    "font": "20px Arial",
                    "text": "5",
                    "anchorX": .5
                },
                "po2": {
                    "x": 610,
                    "y": 490,
                    "fill": "#ffffff",
                    "font": "20px Arial",
                    "text": "1",
                    "anchorX": .5
                },
                "win2": {
                    "x": 660,
                    "y": 490,
                    "fill": "#ffffff",
                    "font": "20px Arial",
                    "text": "5",
                    "anchorX": .5
                },
                "po1": {
                    "x": 610,
                    "y": 510,
                    "fill": "#ffffff",
                    "font": "20px Arial",
                    "text": "1",
                    "anchorX": .5
                },
                "win1": {
                    "x": 660,
                    "y": 510,
                    "fill": "#ffffff",
                    "font": "20px Arial",
                    "text": "5",
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
                    "name": "none",
                    "x": 368,
                    "y": 12
                }
            },
            "texts": {
                "frLabel": {
                    "x": 670,
                    "y": 90,
                    "fill": "#FFFFFF",
                    "font": "mayan-square",
                    "fontSize": "35px",
                    "text": "Free Rounds:",
                    "anchorX": 0.5
                },
                "frValue": {
                    "x": 670,
                    "y": 130,
                    "fill": "#FFFFFF",
                    "font": "mayan-square",
                    "fontSize": "30px",
                    "text": "5",
                    "anchorX": 0.5
                },
                "frTotWonLabel": {
                    "x": 1280,
                    "y": 90,
                    "fill": "#FFFFFF",
                    "font": "mayan-square",
                    "fontSize": "35px",
                    "text": "Total won:",
                    "anchorX": 0.5
                },
                "frTotWonValue": {
                    "x": 1280,
                    "y": 130,
                    "fill": "#FFFFFF",
                    "font": "mayan-square",
                    "fontSize": "30px",
                    "text": "£1234:00",
                    "anchorX": 0.5
                }
            }
        },
        "freeSpins": {
            "visible": false,
            "graphAsset": {
                "fsP": {
                    "name": "box",
                    "x": 520,
                    "y": 850,
                    "xP": 1740,
                    "yP": 206,
                    "scaleX":1.3,
                    "scaleY":1.3,
                    "anchorX": .5,
                    "texts": {
                        "fsLabel": {
                            "x": 0,
                            "y": 30,
                            "fill": "#f3c42b",
                            "font": "mayan-square ,Arial",
                             "style":{
                                "dropShadow": true,
                                "dropShadowAngle": 1.5,
                                "dropShadowColor": "#300",
                                "dropShadowDistance": 4,
                                "fill": [
                                    "#ffe894",
                                    "#ffd500",
                                    "#c2a200"
                                ],
                                "fontFamily": "mayan-square",
                                "fontSize": 35,
                                "stroke": "#fff9d1",
                                "strokeThickness": 1
                             },
                            "fontSize": "25px",
                            "text": "Free Spins",
                            "anchorX": 0.5
                        },
                        "fsValue": {
                            "x": 0,
                            "y": 70,
                            "fill": "#f3c42b",
                            "font": "mayan-square ,Arial",
                            "fontSize": "30px",
                            "style":{
                       "dropShadow": true,
                       "dropShadowAngle": 1.5,
                       "dropShadowColor": "#300",
                       "dropShadowDistance": 4,
                       "fill": [
                           "#ffe894",
                           "#ffd500",
                           "#c2a200"
                       ],
                       "fontFamily": "mayan-square",
                       "fontSize": 45,
                       "stroke": "#fff9d1",
                       "strokeThickness": 1
                                                                        },
                            "text": "12",
                            "anchorX": 0.5
                        },
                        "fsAdditional":{
                            "x": 110,
                            "y": 90,
                            "bmpFont": "bmpFont",
                            "size": "40",
                            "text": "",
                            "anchorX": .5,
                            "anchorY": .5
                        }
                    }
                },
                "fsP1": {
                    "name": "box",
                    "x": 960    ,
                    "y": 850,
                    "xP": 1720,
                    "yP": 338,
                    "scaleX":1.3,
                    "scaleY":1.3,
                    "anchorX": .5,
                    "texts":{
                        "fsmultT":{
                            "x": 0,
                            "y": 30,
                            "font": "mayan-square ,Arial",
                            "fontSize": "25px",
                            "fill": "#f3c42b",
                            "text": "Multiplier",
                             "style":{
    "dropShadow": true,
    "dropShadowAngle": 1.5,
    "dropShadowColor": "#300",
    "dropShadowDistance": 4,
    "fill": [
        "#ffe894",
        "#ffd500",
        "#c2a200"
    ],
    "fontFamily": "mayan-square",
    "fontSize": 35,
    "stroke": "#fff9d1",
    "strokeThickness": 1
                                                                        },
                            "align":"center",
                            "anchorX": .5
                        },
                        "fsMultValue":{
                            "x": 0,
                            "y": 70,
                            "font": "mayan-square ,Arial",
                            "fontSize": "30px",
                             "style":{
                                                               "dropShadow": true,
                                                               "dropShadowAngle": 1.5,
                                                               "dropShadowColor": "#300",
                                                               "dropShadowDistance": 4,
                                                               "fill": [
                                                                   "#ffe894",
                                                                   "#ffd500",
                                                                   "#c2a200"
                                                               ],
                                                               "fontFamily": "mayan-square",
                                                               "fontSize": 45,
                                                               "stroke": "#fff9d1",
                                                               "strokeThickness": 1
                                                                        },
                            "fill": "#f3c42b",
                            "text": "x12",
                            "anchorX": .5
                        }
                    }
                },
                "fsP2": {
                    "name": "box",
                    "x": 1402,
                    "y": 850,
                    "xP": 1700,
                    "yP": 470,
                    "scaleX":1.3,
                    "scaleY":1.3,
                    "anchorX": .5,
                    "texts": {
                        "totWonLabel": {
                            "x": 0,
                            "y": 30,
                            "fill": "#f3c42b",
                            "font": "mayan-square ,Arial",
                            "fontSize": "25px",
                            "style":{
                                        "dropShadow": true,
                                        "dropShadowAngle": 1.5,
                                        "dropShadowColor": "#300",
                                        "dropShadowDistance": 4,
                                        "fill": [
                                            "#ffe894",
                                            "#ffd500",
                                            "#c2a200"
                                        ],
                                        "fontFamily": "mayan-square",
                                        "fontSize": 35,
                                        "stroke": "#fff9d1",
                                        "strokeThickness": 1
                                                                        },
                            "text": "Total won",
                            "anchorX": 0.5
                        },
                        "totWonValue": {
                            "x": 0,
                            "y": 70,
                            "fill": "#f3c42b",
                            "font": "mayan-square ,Arial",
                            "fontSize": "30px",
                            "style":{
                               "dropShadow": true,
                               "dropShadowAngle": 1.5,
                               "dropShadowColor": "#300",
                               "dropShadowDistance": 4,
                               "fill": [
                                   "#ffe894",
                                   "#ffd500",
                                   "#c2a200"
                               ],
                               "fontFamily": "mayan-square",
                               "fontSize": 45,
                               "stroke": "#fff9d1",
                               "strokeThickness": 1
                                                                        },
                            "text": "121212",
                            "anchorX": 0.5
                        },
                    }
                }
            }

        },
        "status": {
            "visible":false,
            "graphAsset": {

            },
            "texts": {
                "winValue": {
                    "x": 642,
                    "y":- 670,
                    "font": "Helvetica, Arial, sans-serif",
                    "fontSize": "25px",
                    "fill": "#40e308",
                    "text": "",
                    "anchorX": 0.5,
                    "anchorY": .6
                },
                "creditLabel": {
                    "x": 120,
                    "y": -693,
                    "font": "Helvetica, Arial, sans-serif",
                    "fontSize": "18px",
                    "fill": "#FFFFFF",
                    "text": "Balance:",
                    "anchorX": 1
                },
                "creditValue": {
                    "x": 125,
                    "y": -693,
                    "font": "Helvetica, Arial, sans-serif",
                    "fontSize": "18px",
                    "fill": "#FFFFFF",
                    "anchorX": 0
                },
                "messages": {
                    "x": 640,
                    "y": -693,
                    "font": "Helvetica, Arial, sans-serif",
                    "fontSize": "18px",
                    "fill": "#FFFFFF",
                    "text": "Good luck",
                    "anchorX": .5
                },
                "time": {
                    "x": 1250,
                    "y": -693,
                    "anchorX":1,
                    "font": "18px Arial",
                    "fill": "#FFFFFF"
                }
            }
        },
        "fsWonPanelLR": {
            "visible": false,
            "fakeButton": true,
            "eventBlock": true,
            "duration": 5,
            "graphAsset": {
                "bgmsg": {
                    "name": "bgAlpha",
                    "x": -500,
                    "y": -500,
                    "width":2500,
                    "height":3500,
                    "alpha": .8
                },
                "bgFsWon": {
                    "name": "bgPanel",
                    "x": 960,
                    "y": 540-10,
                    "anchorX": .5,
                    "anchorY": .5
                }
            },
            "texts": {
                "pwfsW1":{
                    "x": 960,
                    "y": 300,
                    "fill": "#f3c42b",
                    "font": "mayan-square",
                    "fontSize": "45px",
                    "text": "PILLAR REEL UNLOCKED.",
                    "anchorX": 0.5,
                },
                "pwfsW2":{
                    "x": 960,
                    "y": 350,
                    "fill": "#f3c42b",
                    "font": "mayan-square",
                    "fontSize": "45px",
                    "text": "+ 5 EXTRA FREE SPINS.",
                    "anchorX": 0.5,
                },
                "pwfsW3":{
                    "x": 960,
                    "y": 400,
                    "fill": "#f3c42b",
                    "font": "mayan-square",
                    "fontSize": "45px",
                    "text": "STICKY WILDS UNLOCKED.",
                    "anchorX": 0.5,
                },
                "pwfsW4":{
                    "x": 960,
                    "y": 450,
                    "fill": "#f3c42b",
                    "font": "mayan-square",
                    "fontSize": "45px",
                    "text": "(IN CENTRAL REEL.)",
                    "anchorX": 0.5,
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
                    "x": -500,
                    "y": -500,
                    "width":2500,
                    "height":3500,
                    "alpha": .8
                },
                "bgFsWon": {
                    "name": "bgPanel",
                    "x": 960,
                    "y": 540-10,
                    "anchorX": .5,
                    "anchorY": .5
                }
            },
            "texts": {
                "fsHeading": {
                    "x": 960,
                    "y": 310,
                    "fill": "#ff8800",
                    "font": "mayan-square",
                    "fontSize": "90px",
                    "stroke": "#40372a",
                    "stroke_tick": 4,
                    "text": "FREE SPINS",
                    "style":{
        "dropShadow": true,
        "dropShadowAngle": 1.5,
        "dropShadowColor": "#300",
        "dropShadowDistance": 4,
        "fill": [
            "#ffe894",
            "#ffd500",
            "#c2a200"
        ],
        "fontFamily": "mayan-square",
        "fontSize": 110,
        "stroke": "#fff9d1",
        "strokeThickness": 1
                    },
                    "anchorX": .5
                },
                "fsWLabel": {
                    "x": 960,
                    "y": 480,
                    "fill": "#ffffff",
                    "font": "mayan-square",
                    "style":{
    "dropShadow": true,
    "dropShadowAngle": 1.5,
    "dropShadowColor": "#300",
    "dropShadowDistance": 4,
    "fill": [
        "#ffe894",
        "#ffd500",
        "#c2a200"
    ],
    "fontFamily": "mayan-square",
    "fontSize": 60,
    "stroke": "#fff9d1",
    "strokeThickness": 1
                    },
                    "text": "You won",
                    "anchorX": .5
                },
                "fsValue1": {
                    "x": 960,
                    "y": 550,
                    "fill": "#ffffff",
                    "font": "mayan-square",
                    "style":{
    "dropShadow": true,
    "dropShadowAngle": 1.5,
    "dropShadowColor": "#300",
    "dropShadowDistance": 4,
    "fill": [
        "#ffe894",
        "#ffd500",
        "#c2a200"
    ],
    "fontFamily": "mayan-square",
    "fontSize": 60,
    "stroke": "#fff9d1",
    "strokeThickness": 1
                    },
                    "text": "5",
                    "anchorX": .5
                },
                "fsCap": {
                    "x": 960,
                    "y": 600,
                    "fill": "#ffffff",
                    "font": "mayan-square",
                    "style":{
    "dropShadow": true,
    "dropShadowAngle": 1.5,
    "dropShadowColor": "#300",
    "dropShadowDistance": 4,
    "fill": [
        "#ffe894",
        "#ffd500",
        "#c2a200"
    ],
    "fontFamily": "mayan-square",
    "fontSize": 60,
    "stroke": "#fff9d1",
    "strokeThickness": 1
                    },
                    "text": "The maximum prize",
                    "anchorX": .5
                },
                "fsWLabel1": {
                    "x": 960,
                    "y": 600,
                    "fill": "#ffffff",
                    "font": "mayan-square",
                    "style":{
     "dropShadow": true,
     "dropShadowAngle": 1.5,
     "dropShadowColor": "#300",
     "dropShadowDistance": 4,
     "fill": [
         "#ffe894",
         "#ffd500",
         "#c2a200"
     ],
     "fontFamily": "mayan-square",
     "fontSize": 60,
     "stroke": "#fff9d1",
     "strokeThickness": 1
                    },
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
                    "x": -500,
                    "y": -500,
                    "width":2500,
                    "height":3500,
                    "alpha": .8
                },
                "game": {
                    "name": "bgPanel",
                    "x": 960,
                    "y": 540-70,
                    "anchorX": .5,
                    "anchorY": .5
                }
            },
            "texts": {
                "frWLabelTitol": {
                    "x": 960,
                    "y": 250,
                    "fill": "#ff8800",
                    "font": "mayan-square",
                    "style":{
      "dropShadow": true,
      "dropShadowAngle": 1.5,
      "dropShadowColor": "#300",
      "dropShadowDistance": 4,
      "fill": [
          "#ffe894",
          "#ffd500",
          "#c2a200"
      ],
      "fontFamily": "mayan-square",
      "fontSize": 90,
      "stroke": "#fff9d1",
      "strokeThickness": 1
                    },
                    "stroke": "#40372a",
                    "stroke_tick": 4,
                    "text": "FREE ROUNDS",
                    "anchorX": .5
                },
                "frWLabel": {
                    "x": 960,
                    "y": 350,
                    "fill": "#ffffff",
                    "font": "mayan-square",
                    "style":{
             "dropShadow": true,
             "dropShadowAngle": 1.5,
             "dropShadowColor": "#300",
             "dropShadowDistance": 4,
             "fill": [
                 "#ffe894",
                 "#ffd500",
                 "#c2a200"
             ],
             "fontFamily": "mayan-square",
             "fontSize": 35,
             "stroke": "#fff9d1",
             "strokeThickness": 1
                    },
                    "text":"",
                    "align":"center",
                    "anchorX": .5
                },
                "frValue1": {
                    "x": 960,
                    "y": 400,
                    "fill": "#ffffff",
                    "font": "mayan-square",
                    "style":{
     "dropShadow": true,
     "dropShadowAngle": 1.5,
     "dropShadowColor": "#300",
     "dropShadowDistance": 4,
     "fill": [
         "#ffe894",
         "#ffd500",
         "#c2a200"
     ],
     "fontFamily": "mayan-square",
     "fontSize": 35,
     "stroke": "#fff9d1",
     "strokeThickness": 1
                    },
                    "text": "5",
                    "anchorX": .5
                },
                "frWLabel1": {
                    "x": 960,
                    "y": 450,
                    "fill": "#ffffff",
                    "font": "mayan-square",
                    "style":{
        "dropShadow": true,
        "dropShadowAngle": 1.5,
        "dropShadowColor": "#300",
        "dropShadowDistance": 4,
        "fill": [
            "#ffe894",
            "#ffd500",
            "#c2a200"
        ],
        "fontFamily": "mayan-square",
        "fontSize": 35,
        "stroke": "#fff9d1",
        "strokeThickness": 1
                    },
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
                    "y": -500,
                    "width":2500,
                    "height":3000,
                    "alpha": .5
                },
                "group":{
                    "name":"centralFuntain"
                },
                "bigWin": {
                    "name": "bigWin",
                    "x": 970,
                    "y":500,
                    "scaleX":.25,
                    "scaleY":.25,
                    "anchorX": .5,
                    "anchorY": 0.5,
                    "visible": false,
                    "type":"spine"
                }
            }
        },
        "centralLineWin": {
            "visible": false,
            "texts": {
                "lineWin": {
                    "x": 970,
                    "y": 985,
                    "yFs":820,
                    "bmpFont": "bmpFont",
                    "size": "70",
                    "text": "",
                    "anchorX": .5,
                    "anchorY": .5
                }
            },
            "buttons": {
                "skip": {
                    "name": "bgAlpha",
                    "x": 0,
                    "y": 0,
                    "alpha": 0,
                    "evt": "doOk"
                },
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
                                    "x": 960,
                                    "y": 0,
                                    "anchorX": 0.5,
                                    "width":1920,
                                    "height":1080
                                },
                                "bgP": {
                                    "visible":false,
                                    "name": "bgP",
                                    "x": 960,
                                    "y": 0,
                                    "anchorX":.5
                                },
                                "bgPreview1": {
                                    "name": "bgPreview1",
                                    "x": 480,
                                    "y": 180,
                                    "anchorX": 0.5,
                                    "texts": {
                                        "pw1":{
                                            "x": 0,
                                            "y": 70,
                                            "font": "mayan-square",
                                            "fill": "#58d53f",
                                            "style":{
                                                "dropShadow": true,
                                                "dropShadowAngle": 1.5,
                                                "dropShadowColor": "#300",
                                                "dropShadowDistance": 4,
                                                "fill": [
                                                "#ffe894",
                                                "#ffd500",
                                                "#c2a200"
                                                ],
                                                "fontFamily": "mayan-square",
                                                "fontSize": 50,
                                                "stroke": "#fff9d1",
                                                "strokeThickness": 1
                                                },
                                            "stroke": "#000000",
                                            "stroke_tick": 4,
                                            "text": "Sticky Wilds inrcease the Multiplier",
                                            "anchorX": 0.5,
                                        },
                                        "pw2":{
                                            "x": 0,
                                            "y": 120,
                                            "font": "mayan-square",
                                            "fill": "#58d53f",
                                            "style":{
                                                                    "dropShadow": true,
                                                                    "dropShadowAngle": 1.5,
                                                    "dropShadowColor": "#300",
                                                    "dropShadowDistance": 4,
                                                                    "fill": [
                                                        "#ffe894",
                                                        "#ffd500",
                                                        "#c2a200"
                                                                    ],
                                                                    "fontFamily": "mayan-square",
                                                                    "fontSize": 50,
                                                    "stroke": "#fff9d1",
                                                                    "strokeThickness": 1
                                                                },
                                            "stroke": "#000000",
                                            "stroke_tick": 4,
                                            "text": "after each tumble",
                                            "anchorX": 0.5,
                                        },
                                        "pw4":{
                                            "x": 0,
                                            "y": 380,
                                            "font": "mayan-square",
                                            "style":{
                                                                    "dropShadow": true,
                                                                    "dropShadowAngle": 1.5,
                                                    "dropShadowColor": "#300",
                                                    "dropShadowDistance": 4,
                                                                    "fill": [
                                                        "#ffe894",
                                                        "#ffd500",
                                                        "#c2a200"
                                                                    ],
                                                                    "fontFamily": "mayan-square",
                                                                    "fontSize": 50,
                                                    "stroke": "#fff9d1",
                                                                    "strokeThickness": 1
                                                                },
                                            "fill": "#00af00",
                                            "stroke": "#000000",
                                            "stroke_tick": 4,
                                            "align":"center",
                                            "text": "4 Successive tumbles award you",
                                            "anchorX": 0.5,
                                        },
                                        "pw41":{
                                            "x": 0,
                                            "y": 430,
                                            "font": "mayan-square",
                                            "style":{
                                                                    "dropShadow": true,
                                                                    "dropShadowAngle": 1.5,
                                                    "dropShadowColor": "#300",
                                                    "dropShadowDistance": 4,
                                                                    "fill": [
                                                        "#ffe894",
                                                        "#ffd500",
                                                        "#c2a200"
                                                                    ],
                                                                    "fontFamily": "mayan-square",
                                                                    "fontSize": 50,
                                                    "stroke": "#fff9d1",
                                                                    "strokeThickness": 1
                                                                },
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
                                    "x": 1440,
                                    "y": 180,

                                    "anchorX": 0.5,
                                    "texts": {
                                        "pw3":{
                                            "x": 0,
                                            "y": 70,
                                            "font": "mayan-square",
                                            "style":{
                                                                    "dropShadow": true,
                                                                    "dropShadowAngle": 1.5,
                                                    "dropShadowColor": "#300",
                                                    "dropShadowDistance": 4,
                                                                    "fill": [
                                                        "#ffe894",
                                                        "#ffd500",
                                                        "#c2a200"
                                                                    ],
                                                                    "fontFamily": "mayan-square",
                                                                    "fontSize": 50,
                                                    "stroke": "#fff9d1",
                                                                    "strokeThickness": 1
                                                                },
                                            "fill": "#00af00",
                                            "stroke": "#000000",
                                            "stroke_tick": 4,
                                            "align":"center",
                                            "text": "Purple Wilds add wilds and multipliers",
                                            "anchorX": 0.5,
                                        },

                                        "pw5":{
                                            "x": 0,
                                            "y": 380,
                                            "font": "mayan-square",
                                            "style":{
                                                                    "dropShadow": true,
                                                                    "dropShadowAngle": 1.5,
                                                    "dropShadowColor": "#300",
                                                    "dropShadowDistance": 4,
                                                                    "fill": [
                                                        "#ffe894",
                                                        "#ffd500",
                                                        "#c2a200"
                                                                    ],
                                                                    "fontFamily": "mayan-square",
                                                                    "fontSize": 50,
                                                    "stroke": "#fff9d1",
                                                                    "strokeThickness": 1
                                                                },
                                            "fill": "#00af00",
                                            "stroke": "#000000",
                                            "stroke_tick": 4,
                                            "align":"center",
                                            "text": "4 or more successive Losses or Wins",
                                            "anchorX": 0.5,
                                        },
                                        "pw51":{
                                            "x": 0,
                                            "y": 430,
                                            "font": "mayan-square",
                                            "style":{
                                                                    "dropShadow": true,
                                                                    "dropShadowAngle": 1.5,
                                                    "dropShadowColor": "#300",
                                                    "dropShadowDistance": 4,
                                                                    "fill": [
                                                        "#ffe894",
                                                        "#ffd500",
                                                        "#c2a200"
                                                                    ],
                                                                    "fontFamily": "mayan-square",
                                                                    "fontSize": 50,
                                                    "stroke": "#fff9d1",
                                                                    "strokeThickness": 1
                                                                },
                                            "fill": "#00af00",
                                            "stroke": "#000000",
                                            "stroke_tick": 4,
                                            "align":"center",
                                            "text": "award you Re-Spins",
                                            "anchorX": 0.5,
                                        }
                                    }
                                },
                                "logo": {
                                    "visible":false,
                                    "name": "bgPreviewLogo",
                                    "x": 960,
                                    "y": 730,
                                    "anchorX": 0.5
                                },
                            },

                    "checkbox": {
                        "name": "check",
                        "text": "Don't show anymore",
                        "font": "Futura PT, Arial",
                        "fontSize": "20px",
                        "color": "#FFFFFF",
                        "x": 50,
                        "y": 1005,
                        "scale":1,
                        "evt": "chkEvt"
                    },
                    "buttons": {
                        "closePreview": {
                            "name": "genericBtn",
                            "x": 970,
                            "y": 1030,
                            "anchorX": .5,
                            "evt": "doCloseP",
                            "texts": {
                                "closeLabel": {
                                    "x": 0,
                                    "y": -20,
                                    "fill": "#FFFFFF",
                                    "font": "Futura PT, Arial",
                                    "fontSize": "30px",
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
                    "x": -500,
                    "y": -500,
                    "width":2500,
                    "height":3500,
                },
                "generic": {
                    "name": "bgPanel",
                    "x": 960,
                    "y": 540,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible":false
                },
                "game": {
                    "name": "bgPanelGame",
                    "x": 960,
                    "y": 540,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible":false
                }

            },
            "texts": {
                "msg1": {
                    "x": 960,
                    "y": 390,
                    "fill": "#ffffff",
                    "font": "FuturaPT-Heavy",
                    "fontSize":"40px",
                    "text": ".wqdwe",
                    "anchorX": .5
                },
                "msg2": {
                    "x": 960,
                    "y": 440,
                    "fill": "#ffffff",
                    "font": "FuturaPT-Heavy",
                    "fontSize":"38px",
                    "text": ".ewfwefewf",
                    "anchorX": .5
                }
            },
            "buttons": {
                "yes": {
                    "name": "yesButton",
                    "x": 1100,
                    "y": 900,
                    "scaleX":.5,
                    "scaleY":.5,
                    "evt": "doOk"
                },
                "myAccount": {
                    "name": "genericBtn",
                    "x": 960,
                    "y": 900,
                    "evt": "doMyAccount",
                    "texts": {
                        "noLabel": {
                            "x": 0,
                            "y": -21,
                            "fill": "#ffffff",
                            "font": "FuturaPT-Heavy",
                            "fontSize":"30px",
                            "text": "My Account",
                            "anchorX": .5
                        }
                    }
                },
                "no": {
                    "name": "noButton",
                    "x": 800,
                    "y": 900,
                    "scaleX":.5,
                    "scaleY":.5,
                    "evt": "doKo"
                },
                "ok": {
                    "name": "genericBtn",
                    "x": 960,
                    "anchorX": .5,
                    "y": 900,
                    "evt": "doOk",
                    "texts": {
                        "noLabel": {
                            "x": -3,
                            "y": -21,
                            "fill": "#ffffff",
                            "font": "FuturaPT-Heavy",
                            "fontSize":"30px",
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
            "selectorY":600,
            "selectorX":967,
            "textCol":"#ffffff",
            "graphAsset": {
                "bgmsg": {
                    "name": "bgAlpha",
                    "x": -500,
                    "y": -500,
                    "width":2500,
                    "height":3500,
                    "alpha": .8
                },
                "generic": {
                    "name": "bgPanel",
                    "x": 960,
                    "y": 540,
                    "anchorX": .5,
                    "anchorY": .5,
                    "scaleX":1,
                    "scaleY":1
                }
            },
            "texts": {
                "msgFR1": {
                    "x": 960,
                    "y": 430,
                    "fill": "#ffffff",
                    "font": "FuturaPT-Heavy",
                    "fontSize":"28px",
                    "text": ".wqdwe",
                    "anchorX": .5
                },
                "msgFR2": {
                    "x": 960,
                    "y": 470,
                    "fill": "#ffffff",
                    "font": "FuturaPT-Heavy",
                    "fontSize":"28px",
                    "text": ".ewfwefewf",
                    "anchorX": .5
                }
            },
            "buttons": {
                "yes": {
                    "name": "genericBtn",
                    "x": 1160,
                    "y": 900,
                    "evt": "doOk",
                    "texts": {
                        "noLabel": {
                            "x": 0,
                            "y": -20,
                            "fill": "#ffffff",
                            "font": "FuturaPT-Book",
                            "fontSize":"30px",
                            "text": "Use now",
                            "anchorX": .5
                        }
                    }
                },
                "no": {
                    "name": "genericBtn",
                    "x": 775,
                    "y": 900,
                    "evt": "doKo",
                    "texts": {
                        "noLabel": {
                            "x": 0,
                            "y": -20,
                            "fill": "#ffffff",
                            "font": "FuturaPT-Book",
                            "fontSize":"30px",
                            "text": "Use later",
                            "anchorX": .5
                        }
                    }
                },
                "ok": {
                    "name": "genericBtn",
                    "x": 960,
                    "anchorX": .5,
                    "y": 900,
                    "evt": "doOk",
                    "texts": {
                        "noLabel": {
                            "x": 0,
                            "y": -20,
                            "fill": "#ffffff",
                            "font": "FuturaPT-Book",
                            "fontSize":"30px",
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
            "selectorY":520,
            "selectorX":400,
            "textCol":"#ffffff",
            "graphAsset": {
                "bgmsg": {
                    "name": "bgAlpha",
                    "x": -500,
                    "y": -500,
                    "width":2500,
                    "height":3500,
                    "alpha": .8
                },
                "generic": {
                    "name": "bgPanel",
                    "x": 960,
                    "y": 540,
                    "anchorX": .5,
                    "anchorY": .5,
                    "scaleX":1,
                    "scaleY":1
                }
            },
            "texts": {
                           "msgName": {
                               "x": 960,
                               "y": 370,
                                "fill": "#ffffff",
                               "font": "mayan-square",
                                                            "style":{
                                                               "dropShadow": true,
                                                               "dropShadowAngle": 1.5,
                                                               "dropShadowColor": "#300",
                                                               "dropShadowDistance": 4,
                                                               "fill": [
                                                                   "#ffe894",
                                                                   "#ffd500",
                                                                   "#c2a200"
                                                               ],
                                                               "fontFamily": "mayan-square",
                                                               "fontSize": 60,
                                                               "stroke": "#fff9d1",
                                                               "strokeThickness": 1
                                                            },
                               "text": "",
                               "anchorX": .5
                           },
                           "msgF1": {
                               "x": 960,
                               "y": 470,
                              "fill": "#ffffff",
                             "font": "mayan-square",
                                                          "style":{
                                                             "dropShadow": true,
                                                             "dropShadowAngle": 1.5,
                                                             "dropShadowColor": "#300",
                                                             "dropShadowDistance": 4,
                                                             "fill": [
                                                                 "#ffe894",
                                                                 "#ffd500",
                                                                 "#c2a200"
                                                             ],
                                                             "fontFamily": "mayan-square",
                                                             "fontSize": 60,
                                                             "stroke": "#fff9d1",
                                                             "strokeThickness": 1
                                                          },
                               "text": "-",
                               "anchorX": .5
                           },
                           "msgF2": {
                               "x": 960,
                               "y": 560,
                               "fill": "#ffffff",
                               "font": "mayan-square",
                                                            "style":{
                                                               "dropShadow": true,
                                                               "dropShadowAngle": 1.5,
                                                               "dropShadowColor": "#300",
                                                               "dropShadowDistance": 4,
                                                               "fill": [
                                                                   "#ffe894",
                                                                   "#ffd500",
                                                                   "#c2a200"
                                                               ],
                                                               "fontFamily": "mayan-square",
                                                               "fontSize": 60,
                                                               "stroke": "#fff9d1",
                                                               "strokeThickness": 1
                                                            },
                               "text": "",
                               "anchorX": .5
                           },
                           "msgF3": {
                               "x": 960,
                               "y": 480,
                               "fill": "#ffffff",
                               "font": "mayan-square",
                               "style":{
                         "dropShadow": true,
                         "dropShadowAngle": 1.5,
                         "dropShadowColor": "#300",
                         "dropShadowDistance": 4,
                         "fill": [
                             "#ffe894",
                             "#ffd500",
                             "#c2a200"
                         ],
                         "fontFamily": "mayan-square",
                         "fontSize": 62,
                         "stroke": "#fff9d1",
                         "strokeThickness": 1
                               },
                               "text": "",
                               "anchorX": .5
                           },
                           "msgF45": {
                               "x": 960,
                               "y": 520,
                               "fill": "#ffffff",
                               "font": "mayan-square",
                               "style":{
                       "dropShadow": true,
                       "dropShadowAngle": 1.5,
                       "dropShadowColor": "#300",
                       "dropShadowDistance": 4,
                       "fill": [
                           "#ffe894",
                           "#ffd500",
                           "#c2a200"
                       ],
                       "fontFamily": "mayan-square",
                       "fontSize": 60,
                       "stroke": "#fff9d1",
                       "strokeThickness": 1
                               },
                               "text": "",
                               "anchorX": .5
                           },
                           "msgF4": {
                               "x": 960,
                               "y": 500,
                               "fill": "#ffffff",
                               "font": "mayan-square",
                               "style":{
                                   "dropShadow": true,
                                   "dropShadowAngle": 1.5,
                                   "dropShadowBlur": 5,
                                   "dropShadowDistance": 3,
                                   "fill": [
                                       "white",
                                       "#faeb7c",
                                       "#faeb7c",
                                       "#8c4c00",
                                       "#ffd200",
                                       "#8c6000"
                                   ],
                                   "fontFamily": "mayan-square",
                                   "fontSize": 60,
                                   "stroke": "#d2a800",
                                   "strokeThickness": 1
                               },
                               "text": "",
                               "anchorX": .5
                           },
                           "msgF5": {
                               "x": 960,
                               "y": 440,
                               "fill": "#ffffff",
                               "font": "28px mayan-square",
                               "text": "",
                               "anchorX": .5
                           },
                           "msgF51": {
                               "x": 960,
                               "y": 460,
                               "fill": "#ffffff",
                               "font": "mayan-square",
                               "fontSize":"28px",
                               "text": "",
                               "anchorX": .5
                           },
                           "priceF": {
                               "x": 960,
                               "y": 767,
                               "fill": "#ffffff",
                               "font": "mayan-square",
                                                            "style":{
                                                               "dropShadow": true,
                                                               "dropShadowAngle": 1.5,
                                                               "dropShadowColor": "#300",
                                                               "dropShadowDistance": 4,
                                                               "fill": [
                                                                   "#ffe894",
                                                                   "#ffd500",
                                                                   "#c2a200"
                                                               ],
                                                               "fontFamily": "mayan-square",
                                                               "fontSize": 60,
                                                               "stroke": "#fff9d1",
                                                               "strokeThickness": 1
                                                            },
                               "text": "",
                               "anchorX": .5
                           }
                       },
            "buttons": {
                "yes": {
                    "name": "genericBtn",
                    "x": 1260,
                    "y": 900,
                    "evt": "doOkMWJ",
                    "texts": {
                        "noLabel": {
                            "x": 0,
                            "y": -21,
                            "fill": "#ffffff",
                            "font": "FuturaPT-Heavy",
                            "fontSize":"30px",
                            "text": "OK",
                            "anchorX": .5
                        }
                    }
                },
                "no": {
                    "name": "genericBtn",
                    "x": 675,
                    "y": 900,
                    "evt": "doKo",
                    "texts": {
                        "noLabel": {
                            "x": 0,
                            "y": -21,
                            "fill": "#ffffff",
                            "font": "FuturaPT-Heavy",
                            "fontSize":"30px",
                            "text": "NO",
                            "anchorX": .5
                        }
                    }
                },
                "ok": {
                    "name": "genericBtn",
                    "x": 960,
                    "anchorX": .5,
                    "y": 1030,
                    "evt": "doKo",
                    "texts": {
                        "noLabel": {
                            "x": 0,
                            "y": -21,
                            "fill": "#ffffff",
                            "font": "FuturaPT-Heavy",
                            "fontSize":"30px",
                            "text": "Cancel",
                            "anchorX": .5
                        }
                    }
                },
                "ko": {
                    "name": "genericBtn",
                    "x": 960,
                    "anchorX": .5,
                    "y": -1030,
                    "evt": "doKo",
                    "texts": {
                        "noLabel": {
                            "x": 0,
                            "y": -21,
                            "fill": "#ffffff",
                            "font": "FuturaPT-Heavy",
                            "fontSize":"30px",
                            "text": "Cancel",
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
                    "width":4500,
                    "height":4500
                }

            }
        }
    }
};

var ReelConfig = {
    "phaserVer":-1,
    "premultiply":false,
    "newUI":true,
    "licence":true,
    "isMobile":true,
    "newComm":true,
    "slotEngine":"IntegratedSlots",
    "transparentUI":true,
    "germanRtpField":"#000000",
    "engineNumbers":0,
    "newUI":true,
    "newComm":true,
    "log":true,
    "canSwipe":false,
    "fastPlayEnable":true,
    "comment_preview":"enable feature preview screen",
    "preview":true,
    "previewTout":45000,
    "spinType": "PixiMegaWayTumblingSpin",
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
    "lineType": "PixiWayTumblingWinnings",
    "lineFrames":31,
    "lineFrames":19,
    "comment_lineWinAmtType":"lines/coinWinning class",
    "lineWinAmtType":"NormalLineWinAmount",
    "numReels": 6,
    "numIcons": 7 ,
    "numIconsOnTop": 1,
    "numIconsOnBottom":1,
    "icons": [25, 25, 25, 25, 25,25,25,25 ],
    "_spinResult":[[0,1,2,3,4],[5,6,7,8,9],[6,1,2,3,4],[9,1,2,3,4],[2,1,2,3,4]],
    "_spinResult":[[0,0,2,3],[11,5,7,8],[5,6,2,3],[2,9,2,3],[0,2,2,3]],
    "spinWithAlpha":.6,
    "spinConfig":{
            "es":{
                "stopEnabled":false,
                "reelSecondMovementTime":0.3,
                "reelLoopInterval":.20,
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
                "reelLoopInterval":.24,
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
                "reelLoopInterval":.28,
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
    "freeSpins":"PixiMillionMwFreeSpins",
    "_fsIcon": 1,
    "fsSpinDelay":750,
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
        "deltaX_0": 370,
        "deltaX": 196,
        "deltaY_0": 937-75 ,
        "deltaY": 104,
        "reelHYOffset":29
    },
    "icon": {
        "x": 0,
        "y": 0,
        "width": 196,
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
            "title": "Aztec Wilds Megaways Game Rules",
            "rtp": [
                "96.x",
                "96.x",
                "96.x"
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
                            "bg": "aztecWildsMegaways/img/paytable/symbol_00.png", //symbol image
                            "payout_values": true //Whether symbol has payout values

                        },

                        {

                            "id": "symbol_01",
                            "bg": "aztecWildsMegaways/img/paytable/symbol_01.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_02",
                            "bg": "aztecWildsMegaways/img/paytable/symbol_02.png",
                            "payout_values": true

                        }


                    ],

                    [

                        {

                            "id": "symbol_03",
                            "bg": "aztecWildsMegaways/img/paytable/symbol_03.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_04",
                            "bg": "aztecWildsMegaways/img/paytable/symbol_04.png",
                            "payout_values": true

                        }

                    ],

                    [
                        {

                            "id": "symbol_05",
                            "bg": "aztecWildsMegaways/img/paytable/symbol_05.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_06",
                            "bg": "aztecWildsMegaways/img/paytable/symbol_06.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_07",
                            "bg": "aztecWildsMegaways/img/paytable/symbol_07.png",
                            "payout_values": true

                        }

                    ],

                    [

                        {
                            "id": "symbol_08",
                            "bg": "aztecWildsMegaways/img/paytable/symbol_08.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_09",
                            "bg": "aztecWildsMegaways/img/paytable/symbol_09.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_10",
                            "bg": "aztecWildsMegaways/img/paytable/symbol_10.png",
                            "payout_values": true
                        },

                    ],
                    [

                        {
                            "id": "symbol_11",
                            "bg": "aztecWildsMegaways/img/paytable/symbol_11.png",
                            "payout_values": false,
                            "text": [
                                "Normal Wild",
                                "Normal Wilds can appear on reel 2,3,4,5,6 during regular game and Free Spins.",
                                "Normal wilds can have multipliers.",
                                "Wilds substitutes all the icons."
                            ]
                        },

                        {
                            "id": "symbol_12",
                            "bg": "aztecWildsMegaways/img/paytable/symbol_12.png",
                            "payout_values": false,
                            "text": [
                                "Sticky Wild",
                                "A single Sticky Wild can appear on reel 2,3,4 during Free Spins only.",
                                "Its multiplier start from 1 and increases on each consecutive tumble.",
                                "The multiplier resets at the end of the win sequence.",
                                "Wilds substitutes all the icons."
                            ]
                        },

                        {
                            "id": "symbol_13",
                            "bg": "aztecWildsMegaways/img/paytable/symbol_13.png",
                            "payout_values": false,
                            "text": [
                                "Purple Wild",
                                "A single Purple Wild can appear on reel 3,4 during regular and Free Spins.",
                                "A Purple Wild can spread up to 3 Purple Wilds on reels 2,3,4,5.",
                                "Normal Wilds multiplier increases by 1 when a Purple Wild grows on the same reel.",
                                "Wilds substitutes all the icons."
                            ]
                        },

                    ],
                    [

                        {
                            "id" : "tumble_screenshot",
                            "bg" : "aztecWildsMegaways/img/paytable/winways.png",
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
                            "bg" : "aztecWildsMegaways/img/paytable/win.png",
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
                            "bg" : "aztecWildsMegaways/img/paytable/losses.png",
                            "text": [
                                "You can get additional Free Spins from successive tumbles and losses.",
                                "The image shows the wins counter on top of the losses counter.",
                                "4 successive wins give 2 additional Free Spins, each successive win after 4 adds 1, maximum of 6. (counter shows just the first 4).",
                                "4 successive loosing tumbles give 2 additional Free Spins, each successive loss after 4 adds 1, no maximum limit. (counter shows just the first 4).",
                                "Last Free Spin cause the side meter to reset and awards the number of additional Spin shown on the text box."
                            ],
                            "size": { //Optional field that sets image height & width in px

                                "height": "225",
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

                    "bg": "aztecWildsMegaways/img/paytable/winways.png",
                    "text": {

                        "value": [
                                "Whenever a win way pays out the symbols are destroyed and all remaining symbols tumble down.",
                                "All destroyed symbols are replaced with symbols from higher up on the reels with a high chance of extra Wild Stars appearing.",
                                "If the new symbols also form a win way they too will pay out and more symbols will tumble in to replace them, this will continue until no more Win Ways can be made."
                        ]

                    }

                }

            ],

        }

    ]

}