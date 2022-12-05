
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
        "winWayOb": "millionFortunesMegaways/img/loader/btg-megaways.png"
    },
    "loaderMc": {
        "staticLoaderLogo": {
            "sprite": "millionFortunesMegaways/img/logo.png",
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
        "sprite": "fonts/fontMillionFortunes.png",
        "font": "fonts/fontMillionFortunes.xml"
    }
}

var extScripts={
    "webfont": "FuturaPT-Heavy",
    "webfont1": "FuturaPT-Book",
    "webfont2": "aAsianHiro-modified-Regular",
    "webfont3": "aAsianHiro-modified-Regular"
}

var gameAssets = {
    "assets": {
        "iconGH0": "millionFortunesMegaways/img/paytable/symbol_00.png",
        "iconGH1": "millionFortunesMegaways/img/paytable/symbol_01.png",
        "iconGH2": "millionFortunesMegaways/img/paytable/symbol_02.png",
        "iconGH3": "millionFortunesMegaways/img/paytable/symbol_03.png",
        "iconGH4": "millionFortunesMegaways/img/paytable/symbol_04.png",
        "iconGH5": "millionFortunesMegaways/img/paytable/symbol_05.png",
        "iconGH6": "millionFortunesMegaways/img/paytable/symbol_06.png",
        "iconGH7": "millionFortunesMegaways/img/paytable/symbol_07.png",
        "iconGH8": "millionFortunesMegaways/img/paytable/symbol_08.png",
        "iconGH9": "millionFortunesMegaways/img/paytable/symbol_09.png",
        "iconGH10": "millionFortunesMegaways/img/paytable/symbol_10.png",
        "iconGH11": "millionFortunesMegaways/img/paytable/symbol_11.png",


        "reelBg": "millionFortunesMegaways/img/bg/reel-bg.png",
        "bg": "millionFortunesMegaways/img/bg/bg.jpg",
        "bg_Fs": "millionFortunesMegaways/img/bg/bgFs.jpg",
        "bgPanel": "millionFortunesMegaways/img/pop_up.png",
        "bgPanelGame": "millionFortunesMegaways/img/pop_up.png",
        "bgPreview":"millionFortunesMegaways/img/paytable/intro-page.jpg",
        "bgPreview1":"millionFortunesMegaways/img/paytable/intro1.png",
        "bgPreview2":"millionFortunesMegaways/img/paytable/intro2.png",
        "bgPreviewLogo":"millionFortunesMegaways/img/logo.png",
        "bgAlpha": "millionFortunesMegaways/img/alpha.png",
        "bgBlack": "millionFortunesMegaways/img/black.png",

        "logo": "millionFortunesMegaways/img/logo.png",

        "box": "millionFortunesMegaways/img/counter.png",
        "buttonBg":"gui/generic/img/desktop/png/cp-info-bar.png",
        "volOnButton": "gui/btnVolOn.png",
        "volOffButton": "gui/btnVolOff.png",
        "btnTranspRight": "millionFortunesMegaways/img/transparent.png",
        "btnTranspLeft": "millionFortunesMegaways/img/transparent.png",
        "none": "millionFortunesMegaways/img/transparent.png",
    },
    "localizedAssets":{

    },
    "buttonsSpriteSheet": {
    },
    "animations": {
        "bigWin":{
            "json": "millionFortunesMegaways/img/anim/centralWin.json",
            "type":"spine"
        },
        "yesButton": {
            "json": "millionFortunesMegaways/img/yes-btn.json",
        },
        "noButton": {
            "json": "millionFortunesMegaways/img/no-btn.json",
        },
        "feature-Fn-btn": {
            "json": "millionFortunesMegaways/img/buyFeature/buy-fs-btn.json",
        },
        "feature-Rn-btn": {
            "json": "millionFortunesMegaways/img/buyFeature/buy-fs-btn.json",
        },
        "buyFeature":{
            "json": "millionFortunesMegaways/img/buyFeature/buy-feature-btn.json",
        },
        "buyFeatureConfirm":{
            "json": "millionFortunesMegaways/img/generic-game-btn.json",
        },
        "buyUpgrade":{
            "json": "millionFortunesMegaways/img/buyFeature/buy-feature-btn.json",
        },
        "genericBtn":{
            "json": "millionFortunesMegaways/img/generic-game-btn.json",
        },
        "game-btn":{
            "json": "millionFortunesMegaways/img/generic-game-btn.json",
        },
        "check": {
            "json": "millionFortunesMegaways/img/radio-btns.json",
        },
        "pot":{
            "json": "millionFortunesMegaways/img/anim/pot/pot.json",
            "type":"spine"
        },

        "tumble_7_2":{
            "json": "millionFortunesMegaways/img/symbols/tiles/tile_7_02.json",
            "name": "tile_7_02.",
            "type":"spine"
        },
        "tumble_7_3":{
            "json": "millionFortunesMegaways/img/symbols/tiles/tile_7_03.json",
        },
        "tumble_7_4":{
            "json": "millionFortunesMegaways/img/symbols/tiles/tile_7_04.json",
        },
        "tumble_7_5":{
            "json": "millionFortunesMegaways/img/symbols/tiles/tile_7_05.json",
        },
        "tumble_7_6":{
            "json": "millionFortunesMegaways/img/symbols/tiles/tile_7_06.json",
        },
        "tumble_7_7":{
            "json": "millionFortunesMegaways/img/symbols/tiles/tile_7_07.json",
        },
        "tumble_9_2":{
            "json": "millionFortunesMegaways/img/symbols/tiles/tile_9_02.json",
        },
        "tumble_9_3":{
            "json": "millionFortunesMegaways/img/symbols/tiles/tile_9_03.json",
        },
        "tumble_9_4":{
            "json": "millionFortunesMegaways/img/symbols/tiles/tile_9_04.json",
        },
        "tumble_9_5":{
            "json": "millionFortunesMegaways/img/symbols/tiles/tile_9_05.json",
        },
        "tumble_9_6":{
            "json": "millionFortunesMegaways/img/symbols/tiles/tile_9_06.json",
        },
        "tumble_9_7":{
            "json": "millionFortunesMegaways/img/symbols/tiles/tile_9_07.json",
        },
        "tumble_9_8":{
            "json": "millionFortunesMegaways/img/symbols/tiles/tile_9_08.json",
        },
        "tumble_9_9":{
            "json": "millionFortunesMegaways/img/symbols/tiles/tile_9_09.json",
        },
        "tumble_9_2":{
            "json": "millionFortunesMegaways/img/symbols/tiles/tile_9_02.json",
        },
        "frame":{
            "json": "millionFortunesMegaways/img/bg/frame/frame.json",
            "type":"spine"
        },
        "lockIn":{
            "json": "millionFortunesMegaways/img/anim/lockFeature/lockedReels.json",
            "type":"spine"
        },


        "icon0":{
            "json": "millionFortunesMegaways/img/symbols/symbol_d_00.json",
            "type":"spine"
        },
        "bicon0":{
            "json": "millionFortunesMegaways/img/symbols/symbol_b_00.json",
        },
        "anim0": {
            "json": "millionFortunesMegaways/img/symbols/symbol_00.json",
        },

        "icon1":{
            "json": "millionFortunesMegaways/img/symbols/symbol_d_01.json",
            "type":"spine"
        },
        "bicon1":{
            "json": "millionFortunesMegaways/img/symbols/symbol_b_01.json",
        },
        "anim1": {
            "json": "millionFortunesMegaways/img/symbols/symbol_01.json",

        },

        "icon2":{
            "json": "millionFortunesMegaways/img/symbols/symbol_d_02.json",
            "type":"spine"
        },
        "bicon2":{
            "json": "millionFortunesMegaways/img/symbols/symbol_b_02.json",
        },
        "anim2": {
            "json": "millionFortunesMegaways/img/symbols/symbol_02.json",
            "name": "symbol_02.",

        },

        "icon3":{
            "json": "millionFortunesMegaways/img/symbols/symbol_d_03.json",
            "type":"spine"
        },
        "bicon3":{
            "json": "millionFortunesMegaways/img/symbols/symbol_b_03.json",
        },
        "anim3": {
            "json": "millionFortunesMegaways/img/symbols/symbol_03.json",
            "name": "symbol_03.",

        },

        "icon4":{
            "json": "millionFortunesMegaways/img/symbols/symbol_d_04.json",
            "type":"spine"
        },
        "bicon4":{
            "json": "millionFortunesMegaways/img/symbols/symbol_b_04.json",
        },
        "anim4": {
            "json": "millionFortunesMegaways/img/symbols/symbol_04.json",
            "name": "symbol_04.",

        },

        "icon5":{
            "json": "millionFortunesMegaways/img/symbols/symbol_d_05.json",
            "type":"spine"
        },
        "bicon5":{
            "json": "millionFortunesMegaways/img/symbols/symbol_b_05.json",
        },
        "anim5": {
            "json": "millionFortunesMegaways/img/symbols/symbol_05.json",
            "name": "symbol_05.",

        },

        "icon6":{
            "json": "millionFortunesMegaways/img/symbols/symbol_d_06.json",
            "type":"spine"
        },
        "bicon6":{
            "json": "millionFortunesMegaways/img/symbols/symbol_b_06.json",
        },
        "anim6": {
            "json": "millionFortunesMegaways/img/symbols/symbol_06.json",
            "name": "symbol_06.",

        },

        "icon7":{
            "json": "millionFortunesMegaways/img/symbols/symbol_d_07.json",
            "type":"spine"
        },
        "bicon7":{
            "json": "millionFortunesMegaways/img/symbols/symbol_b_07.json",
        },
        "anim7": {
            "json": "millionFortunesMegaways/img/symbols/symbol_07.json",
            "name": "symbol_07.",

        },

        "icon8":{
            "json": "millionFortunesMegaways/img/symbols/symbol_d_08.json",
            "type":"spine"
        },
        "bicon8":{
            "json": "millionFortunesMegaways/img/symbols/symbol_b_08.json",
        },
        "anim8": {
            "json": "millionFortunesMegaways/img/symbols/symbol_08.json",
            "name": "symbol_08.",

        },

        "icon9":{
            "json": "millionFortunesMegaways/img/symbols/symbol_d_09.json",
            "type":"spine"
        },
        "bicon9":{
            "json": "millionFortunesMegaways/img/symbols/symbol_b_09.json",
        },
        "anim9": {
            "json": "millionFortunesMegaways/img/symbols/symbol_09.json",
            "name": "symbol_09.",

        },

        "icon10":{
            "json": "millionFortunesMegaways/img/symbols/symbol_d_10.json",
            "type":"spine"
        },
        "bicon10":{
            "json": "millionFortunesMegaways/img/symbols/symbol_b_10.json",
        },
        "anim10": {
            "json": "millionFortunesMegaways/img/symbols/symbol_10.json",
            "name": "symbol_10.",

        },

        "icon11":{
            "json": "millionFortunesMegaways/img/symbols/symbol_d_11.json",
            "type":"spine"
        },
        "bicon11":{
            "json": "millionFortunesMegaways/img/symbols/symbol_b_11.json",
        },
        "anim11": {
            "json": "millionFortunesMegaways/img/symbols/symbol_11.json",
            "name": "symbol_11.",

        },
        "part-1": {
            "json": "millionFortunesMegaways/img/anim/bronze-coin.json",
            "sprite": "millionFortunesMegaways/img/anim/bronze-coin.png"
        },
        "part-2": {
            "json": "millionFortunesMegaways/img/anim/silver-coin.json",
            "sprite": "millionFortunesMegaways/img/anim/silver-coin.png"
        },
        "part-3": {
            "json": "millionFortunesMegaways/img/anim/gold-coin.json",
            "sprite": "millionFortunesMegaways/img/anim/gold-coin.png"
        },
        "f-part-1": {
            "json": "millionFortunesMegaways/img/anim/bronze-coin-frwrd.json",
            "sprite": "millionFortunesMegaways/img/anim/bronze-coin-frwrd.png"
        },
        "f-part-2": {
            "json": "millionFortunesMegaways/img/anim/silver-coin-frwrd.json",
            "sprite": "millionFortunesMegaways/img/anim/silver-coin-frwrd.png"
        },
        "f-part-3": {
            "json": "millionFortunesMegaways/img/anim/gold-coin-frwrd.json",
            "sprite": "millionFortunesMegaways/img/anim/gold-coin-frwrd.png"
        },
    },
    "importantSounds": {

    },
    "sounds": {
        "spinClick": {
            "name": "millionFortunesMegaways/sounds/spinClick.mp3",
            "volume":.4
        },
        "reelStop": {
            "name": "millionFortunesMegaways/sounds/reelStop.mp3",
            "volume":1.2
        },
        "click": {
            "name": "millionFortunesMegaways/sounds/click.mp3",
            "volume": .2
        },
        "smbWin_0": {
            "name": "millionFortunesMegaways/sounds/smbWin_00.mp3",
            "volume": 1.4
        },
        "smbWin_1": {
            "name": "millionFortunesMegaways/sounds/smbWin_00.mp3",
            "volume": 1.4
        },
        "smbWin_2": {
            "name": "millionFortunesMegaways/sounds/smbWin_00.mp3",
            "volume": 1.4
        },
        "smbWin_3": {
            "name": "millionFortunesMegaways/sounds/smbWin_00.mp3",
            "volume": 1.4
        },
        "smbWin_4": {
            "name": "millionFortunesMegaways/sounds/smbWin_00.mp3",
            "volume": 1.5
        },
        "smbWin_5": {
            "name": "millionFortunesMegaways/sounds/smbWin_05.mp3",
            "volume": 1.5
        },
        "smbWin_6": {
            "name": "millionFortunesMegaways/sounds/smbWin_06.mp3",
            "volume": 1.5
        },
        "smbWin_7": {
            "name": "millionFortunesMegaways/sounds/smbWin_07.mp3",
            "volume": 1.5
        },
        "smbWin_8": {
            "name": "millionFortunesMegaways/sounds/smbWin_08.mp3",
            "volume": 1.3
        },
        "smbWin_9": {
            "name": "millionFortunesMegaways/sounds/smbWin_09.mp3",
            "volume": 1.3
        },
        "smbWin_10": {
            "name": "millionFortunesMegaways/sounds/smbWin_10.mp3",
            "volume": 1.3
        },
        "smbWin_11": {
            "name": "millionFortunesMegaways/sounds/smbWin_10.mp3",
            "volume": 1.3
        },
        "fsWin": {
            "name": "millionFortunesMegaways/sounds/fsWin.mp3",
            "volume": 2
        },
        "fsWon": {
            "name": "millionFortunesMegaways/sounds/introFs.mp3",
            "volume": 1
        },
        "crack": {
            "name": "millionFortunesMegaways/sounds/reelOpen.mp3",
            "volume": 1
        },
        "incWin": {
            "name": "millionFortunesMegaways/sounds/counter.mp3",
            "volume":.1,
            "loop":true
        },
        "line": {
            "name": "millionFortunesMegaways/sounds/line.mp3",
            "volume": .3
        },
        "winBg_0": {
            "name": "millionFortunesMegaways/sounds/centralWin/win1.mp3",
            "volume": .6
        },
        "winBg_1": {
            "name": "millionFortunesMegaways/sounds/centralWin/win2.mp3",
            "volume": .6
        },
        "winBg_2": {
            "name": "millionFortunesMegaways/sounds/centralWin/win3.mp3",
            "volume": .6
        },
        "winBg_3": {
            "name": "millionFortunesMegaways/sounds/centralWin/win4.mp3",
            "volume": .6
        },
        "winBg_4": {
            "name": "millionFortunesMegaways/sounds/centralWin/win5.mp3",
            "volume": .6
        },
        "winBg_5": {
            "name": "millionFortunesMegaways/sounds/centralWin/win6.mp3",
            "volume":.6
        },
        "winBg_6": {
            "name": "millionFortunesMegaways/sounds/centralWin/bigWin.mp3",
            "volume": .7
        },
        "winBg_7": {
            "name": "millionFortunesMegaways/sounds/centralWin/superBigWin.mp3",
            "volume": .7
        },
        "winBg_8": {
            "name": "millionFortunesMegaways/sounds/centralWin/megaBigWin.mp3",
            "volume": .7
        },
        "winBgS_6": {
            "name": "millionFortunesMegaways/sounds/centralWin/bigWin.mp3",
            "volume": .7
        },
        "winBgS_7": {
            "name": "millionFortunesMegaways/sounds/centralWin/superBigWin.mp3",
            "volume": .7
        },
        "winBgS_8": {
            "name": "millionFortunesMegaways/sounds/centralWin/megaBigWin.mp3",
            "volume": .7
        },
        "winPanel": {
            "name": "millionFortunesMegaways/sounds/winScreen.mp3",
            "volume":1
        },
        "coins": {
            "name": "millionFortunesMegaways/sounds/coins.mp3",
            "volume":1.2
        },
        "tumbleSound": {
            "name": "millionFortunesMegaways/sounds/tumbling.mp3",
            "volume": 1,
        },
        "reelSound": {
            "name": "millionFortunesMegaways/sounds/reelSound.mp3",
            "volume":1
        },
        "iconPop": {
            "name": "millionFortunesMegaways/sounds/iconsExplode.mp3",
            "volume": 1.1
        },
        "scatterLand": {
            "name": "millionFortunesMegaways/sounds/scatterLand.mp3",
            "volume": 2
        },
        "iconsExplode": {
            "name": "millionFortunesMegaways/sounds/iconsExplode.mp3",
            "volume": .4
        },
        "potFill_01": {
            "name": "millionFortunesMegaways/sounds/potFill_01.mp3",
            "volume": 1
        },
        "potFill_02": {
            "name": "millionFortunesMegaways/sounds/potFill_02.mp3",
            "volume": 1
        },
        "potFill_03": {
            "name": "millionFortunesMegaways/sounds/potFill_03.mp3",
            "volume": 1
        },
        "potFill_04": {
            "name": "millionFortunesMegaways/sounds/potFill_04.mp3",
            "volume": 1
        },
    },
    "bgSounds": {
        "bgSlot": {
            "name": "millionFortunesMegaways/sounds/bg.mp3",
            "volume": .3,
        },
        "bgFs": {
            "name": "millionFortunesMegaways/sounds/bgFs.mp3",
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

        "bgFS": {
            "visible":false,
            "graphAsset": {
                "bg": {
                    "name": "bg_Fs",
                    "width": 1920,
                    "height": 1080,
                    "x": 960,
                    "y": 0,
                    "anchorX": .5,
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
                    "x": 240,
                    "y": 10,
                    "anchorX":.5,
                    "scaleX":1,
                    "scaleY":1
                },
                "counter": {
                    "name": "box",
                    "x": 240,
                    "y": 140,
                    "anchorX":.5,
                    "scaleX":.8,
                    "scaleY":.8,
                    "texts":{
                        "winWaysNum":{
                            "x": 0,
                            "y": 45,
                            "bmpFont": "bmpFont",
                            "size": "53",
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
                    "scaleX":.2,
                    "scaleY":.2,
                    "anchorX":.5,
                    "anchorY":.5,
                    "autoplay":false,
                    "type":"spine"
                }
            }
        },
        "multiplier":{
            "visible":false,
            "graphAsset": {
                "multBg":{
                    "visible": true,
                    "name": "box",
                    "x": 560,
                    "y": 140,
                    "anchorX":.5,
                    "scaleX":.8,
                    "scaleY":.8,
                    "texts":{
                        "multT":{
                            "x": 0,
                            "y": -32,
                            "font": "aAsianHiro-modified-Regular ,Arial",
                            "fontSize": "35px",
                            "fill": "#f3c42b",
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
                                                "fontFamily": "aAsianHiro-modified-Regular",
                                                "fontSize": 42,
                                                "stroke": "#d2a800",
                                                "strokeThickness": 1
                                            },
                            "text": "Multiplier",
                            "align":"center",
                            "anchorX": .5,
                        },
                        "multValue1":{
                            "x": 0,
                            "y": 14,
                            "bmpFont": "bmpFont",
                            "size": "53",
                            "text": "",
                            "text": "",
                            "anchorX": .5
                        }
                    }
                },
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
        "buttonFg":{},
        "lines": {},
        "buyFeature":{
            "buttons": {
                "buyFeature": {
                    "visible":true,
                    "name": "buyFeature",
                    "x": 1690,
                    "y": 65,
                    "evt": "doBuyFeature",
                    "texts": {
                        "txt": {
                            "x": 20,
                            "y": -4,
                            "font": "FuturaPT-Heavy ,Arial, Helvetica sans-serif",
                            "fontSize": "27px",
                            "fill": "#FFFFFF",
                            "text": "BUY BONUS",
                            "anchorX": .5
                        }
                    }
                }
            }
        },
        "reelsPt_": {
            "visible":false,
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
                    "x": 600,
                    "y": 50,
                    "fill": "#FFFFFF",
                    "font": "aAsianHiro-modified-Regular",
                    "fontSize": "35px",
                    "text": "Free Rounds:",
                    "anchorX": 0.5
                },
                "frValue": {
                    "x": 600,
                    "y": 80,
                    "fill": "#FFFFFF",
                    "font": "aAsianHiro-modified-Regular",
                    "fontSize": "30px",
                    "text": "5",
                    "anchorX": 0.5
                },
                "frTotWonLabel": {
                    "x": 1350,
                    "y": 50,
                    "fill": "#FFFFFF",
                    "font": "aAsianHiro-modified-Regular",
                    "fontSize": "35px",
                    "text": "Total won:",
                    "anchorX": 0.5
                },
                "frTotWonValue": {
                    "x": 1350,
                    "y": 80,
                    "fill": "#FFFFFF",
                    "font": "aAsianHiro-modified-Regular",
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
                    "scaleX":1.5,
                    "scaleY":1.5,
                    "anchorX": .5,
                    "texts": {
                        "fsLabel": {
                            "x": 0,
                            "y": 18,
                            "fill": "#f3c42b",
                            "font": "aAsianHiro-modified-Regular ,Arial",
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
                                                "fontFamily": "aAsianHiro-modified-Regular",
                                                "fontSize": 25,
                                                "stroke": "#d2a800",
                                                "strokeThickness": 1
                                            },
                            "fontSize": "25px",
                            "text": "Free Spins",
                            "anchorX": 0.5
                        },
                        "fsValue": {
                            "x": 0,
                            "y": 40,
                            "fill": "#f3c42b",
                            "font": "aAsianHiro-modified-Regular ,Arial",
                            "fontSize": "30px",
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
                                                                            "fontFamily": "aAsianHiro-modified-Regular",
                                                                            "fontSize": 30,
                                                                            "stroke": "#d2a800",
                                                                            "strokeThickness": 1
                                                                        },
                            "text": "12",
                            "anchorX": 0.5
                        },
                        "fsAdditional":{
                            "x": 105,
                            "y": 47,
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
                    "x": 967    ,
                    "y": 920,
                    "xP": 1720,
                    "yP": 338,
                    "scaleX":1.5,
                    "scaleY":1.5,
                    "anchorX": .5,
                    "texts":{
                        "fsmultT":{
                            "x": 0,
                            "y": 18,
                            "font": "aAsianHiro-modified-Regular ,Arial",
                            "fontSize": "25px",
                            "fill": "#f3c42b",
                            "text": "Multiplier",
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
                                                                            "fontFamily": "aAsianHiro-modified-Regular",
                                                                            "fontSize": 25,
                                                                            "stroke": "#d2a800",
                                                                            "strokeThickness": 1
                                                                        },
                            "align":"center",
                            "anchorX": .5
                        },
                        "fsMultValue":{
                            "x": 0,
                            "y": 40,
                            "font": "aAsianHiro-modified-Regular ,Arial",
                            "fontSize": "30px",
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
                                                                            "fontFamily": "aAsianHiro-modified-Regular",
                                                                            "fontSize": 30,
                                                                            "stroke": "#d2a800",
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
                    "x": 1410,
                    "y": 850,
                    "xP": 1700,
                    "yP": 470,
                    "scaleX":1.5,
                    "scaleY":1.5,
                    "anchorX": .5,
                    "texts": {
                        "totWonLabel": {
                            "x": 0,
                            "y": 18,
                            "fill": "#f3c42b",
                            "font": "aAsianHiro-modified-Regular ,Arial",
                            "fontSize": "25px",
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
                                                                            "fontFamily": "aAsianHiro-modified-Regular",
                                                                            "fontSize": 25,
                                                                            "stroke": "#d2a800",
                                                                            "strokeThickness": 1
                                                                        },
                            "text": "Total won",
                            "anchorX": 0.5
                        },
                        "totWonValue": {
                            "x": 0,
                            "y": 40,
                            "fill": "#f3c42b",
                            "font": "aAsianHiro-modified-Regular ,Arial",
                            "fontSize": "30px",
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
                                                                            "fontFamily": "aAsianHiro-modified-Regular",
                                                                            "fontSize": 30,
                                                                            "stroke": "#d2a800",
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
                    "font": "aAsianHiro-modified-Regular",
                    "fontSize": "45px",
                    "text": "PILLAR REEL UNLOCKED.",
                    "anchorX": 0.5,
                },
                "pwfsW2":{
                    "x": 960,
                    "y": 350,
                    "fill": "#f3c42b",
                    "font": "aAsianHiro-modified-Regular",
                    "fontSize": "45px",
                    "text": "+ 5 EXTRA FREE SPINS.",
                    "anchorX": 0.5,
                },
                "pwfsW3":{
                    "x": 960,
                    "y": 400,
                    "fill": "#f3c42b",
                    "font": "aAsianHiro-modified-Regular",
                    "fontSize": "45px",
                    "text": "STICKY WILDS UNLOCKED.",
                    "anchorX": 0.5,
                },
                "pwfsW4":{
                    "x": 960,
                    "y": 450,
                    "fill": "#f3c42b",
                    "font": "aAsianHiro-modified-Regular",
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
                    "y": 270-20,
                    "fill": "#ff8800",
                    "font": "aAsianHiro-modified-Regular",
                    "fontSize": "90px",
                    "stroke": "#40372a",
                    "stroke_tick": 4,
                    "text": "FREE SPINS",
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
                        "fontFamily": "aAsianHiro-modified-Regular",
                        "fontSize": 90,
                        "stroke": "#d2a800",
                        "strokeThickness": 1
                    },
                    "anchorX": .5
                },
                "fsWLabel": {
                    "x": 960,
                    "y": 300+147,
                    "fill": "#ffffff",
                    "font": "aAsianHiro-modified-Regular",
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
                        "fontFamily": "aAsianHiro-modified-Regular",
                        "fontSize": 45,
                        "stroke": "#d2a800",
                        "strokeThickness": 1
                    },
                    "text": "You won",
                    "anchorX": .5
                },
                "fsValue1": {
                    "x": 960,
                    "y": 530-20,
                    "fill": "#ffffff",
                    "font": "aAsianHiro-modified-Regular",
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
                        "fontFamily": "aAsianHiro-modified-Regular",
                        "fontSize": 45,
                        "stroke": "#d2a800",
                        "strokeThickness": 1
                    },
                    "text": "5",
                    "anchorX": .5
                },
                "fsCap": {
                    "x": 960,
                    "y": 230+147,
                    "fill": "#ffffff",
                    "font": "aAsianHiro-modified-Regular",
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
                        "fontFamily": "aAsianHiro-modified-Regular",
                        "fontSize": 45,
                        "stroke": "#d2a800",
                        "strokeThickness": 1
                    },
                    "text": "The maximum prize",
                    "anchorX": .5
                },
                "fsWLabel1": {
                    "x": 960,
                    "y": 420+147,
                    "fill": "#ffffff",
                    "font": "aAsianHiro-modified-Regular",
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
                        "fontFamily": "aAsianHiro-modified-Regular",
                        "fontSize": 45,
                        "stroke": "#d2a800",
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
                    "font": "aAsianHiro-modified-Regular",
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
                        "fontFamily": "aAsianHiro-modified-Regular",
                        "fontSize": 90,
                        "stroke": "#d2a800",
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
                    "font": "aAsianHiro-modified-Regular",
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
                        "fontFamily": "aAsianHiro-modified-Regular",
                        "fontSize": 35,
                        "stroke": "#d2a800",
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
                    "font": "aAsianHiro-modified-Regular",
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
                        "fontFamily": "aAsianHiro-modified-Regular",
                        "fontSize": 35,
                        "stroke": "#d2a800",
                        "strokeThickness": 1
                    },
                    "text": "5",
                    "anchorX": .5
                },
                "frWLabel1": {
                    "x": 960,
                    "y": 450,
                    "fill": "#ffffff",
                    "font": "aAsianHiro-modified-Regular",
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
                        "fontFamily": "aAsianHiro-modified-Regular",
                        "fontSize": 35,
                        "stroke": "#d2a800",
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
                    "y": 0,
                    "width":2500,
                    "height":2500,
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
                "bgPreview1": {
                    "name": "bgPreview1",
                    "x": 495,
                    "y": 200,
                    "scaleX":1.5,
                    "scaleY":1.5,
                    "anchorX": 0.5,
                    "texts": {
                        "pw1":{
                            "x": 0,
                            "y": 230,
                            "font": "aAsianHiro-modified-Regular, sans-serif",
                            "fontSize":"27px",
                            "fill": "#f3c42b",
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
                                                                            "fontFamily": "aAsianHiro-modified-Regular",
                                                                            "fontSize": 25,
                                                                            "stroke": "#d2a800",
                                                                            "strokeThickness": 1
                                                                        },
                            "text": "ADDITIONAL PILLAR REEL IN FREE SPINS",
                            "anchorX": 0.5,
                        },
                        "pw1a":{
                            "x": 0,
                            "y": 260,
                            "font": "aAsianHiro-modified-Regular, sans-serif",
                            "fontSize":"27px",
                            "fill": "#f3c42b",
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
                                                                            "fontFamily": "aAsianHiro-modified-Regular",
                                                                            "fontSize": 25,
                                                                            "stroke": "#d2a800",
                                                                            "strokeThickness": 1
                                                                        },
                            "text": "PILLAR REEL CAN FREEZE TO 9 AND",
                            "anchorX": 0.5,
                        },
                        "pw2":{
                            "x": 0,
                            "y": 290,
                            "font": "aAsianHiro-modified-Regular, sans-serif",
                            "fontSize":"27px",
                            "fill": "#f3c42b",
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
                                                                            "fontFamily": "aAsianHiro-modified-Regular",
                                                                            "fontSize": 25,
                                                                            "stroke": "#d2a800",
                                                                            "strokeThickness": 1
                                                                        },
                            "text": "UNLOCK STICKY WILDS",
                            "anchorX": 0.5,
                        },
                        "pw2a":{
                            "x": 0,
                            "y": 320,
                            "font": "aAsianHiro-modified-Regular, sans-serif",
                            "fontSize":"27px",
                            "fill": "#f3c42b",
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
                                                                            "fontFamily": "aAsianHiro-modified-Regular",
                                                                            "fontSize": 25,
                                                                            "stroke": "#d2a800",
                                                                            "strokeThickness": 1
                                                                        },
                            "text": "AWARDING 5 EXTRA FREE SPINS",
                            "anchorX": 0.5,
                        },
                        "pw2b":{
                            "x": 0,
                            "y": 380,
                            "font": "aAsianHiro-modified-Regular, sans-serif",
                            "fontSize":"40px",
                            "fill": "#f3c42b",
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
                                                                            "fontFamily": "aAsianHiro-modified-Regular",
                                                                            "fontSize": 25,
                                                                            "stroke": "#d2a800",
                                                                            "strokeThickness": 1
                                                                        },
                            "text": "MAX WIN x45000",
                            "anchorX": 0.5,
                        },
                        "pw2c":{
                            "x": 0,
                            "y": 340,
                            "font": "aAsianHiro-modified-Regular, sans-serif",
                            "fontSize":"27px",
                            "fill": "#f3c42b",
                            "text": "",
                            "anchorX": 0.5,
                        },
                    }
                },
                "bgPreview2": {
                    "name": "bgPreview2",
                    "x": 1430,
                    "y": 200,
                    "scaleX":1.5,
                    "scaleY":1.5,
                    "anchorX": 0.5,
                    "texts": {
                        "pw3":{
                            "x": 0,
                            "y": 230,
                            "font": "aAsianHiro-modified-Regular, sans-serif",
                            "fontSize":"27px",
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
                                                                            "fontFamily": "aAsianHiro-modified-Regular",
                                                                            "fontSize": 25,
                                                                            "stroke": "#d2a800",
                                                                            "strokeThickness": 1
                                                                        },
                            "fill": "#f3c42b",
                            "text": "EVERY WIN TRIGGERS A TUMBLE",
                            "anchorX": 0.5,
                        }
                    }
                }
            },

            "checkbox": {
                "name": "check",
                "text": "Don't show anymore",
                "font": "Futura PT, Arial",
                "fontSize": "20px",
                "color": "#FFFFFF",
                "x": 50,
                "y": 965,
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
                    "scaleX":1.5,
                    "scaleY":1.5,
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
                    "scaleX":1.5,
                    "scaleY":1.5,
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
            "selectorY":300,
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
                    "scaleX":1.4,
                    "scaleY":1.4
                }
            },
            "texts": {
                "msgFR1": {
                    "x": 960,
                    "y": 230,
                    "fill": "#ffffff",
                    "font": "FuturaPT-Heavy",
                    "fontSize":"28px",
                    "text": ".wqdwe",
                    "anchorX": .5
                },
                "msgFR2": {
                    "x": 960,
                    "y": 270,
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
            "selectorY":300,
            "selectorX":900,
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
                                "y": 195,
                                "fill": "#ffffff",
                                "font": "aAsianHiro-modified-Regular",
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
                                    "fontFamily": "aAsianHiro-modified-Regular",
                                    "fontSize": 40,
                                    "stroke": "#d2a800",
                                    "strokeThickness": 1
                                },
                                "text": "",
                                "anchorX": .5
                            },
                "msgF1": {
                    "x": 960,
                    "y": 250,
                    "fill": "#ffffff",
                    "font": "aAsianHiro-modified-Regular",
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
                        "fontFamily": "aAsianHiro-modified-Regular",
                        "fontSize": 40,
                        "stroke": "#d2a800",
                        "strokeThickness": 1
                    },
                    "text": "-",
                    "anchorX": .5
                },
                "msgF2": {
                    "x": 960,
                    "y": 360,
                    "fill": "#ffffff",
                    "font": "aAsianHiro-modified-Regular",
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
                        "fontFamily": "aAsianHiro-modified-Regular",
                        "fontSize": 40,
                        "stroke": "#d2a800",
                        "strokeThickness": 1
                    },
                    "text": "",
                    "anchorX": .5
                },
                "msgF3": {
                    "x": 960,
                    "y": 380,
                    "fill": "#ffffff",
                    "font": "aAsianHiro-modified-Regular",
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
                        "fontFamily": "aAsianHiro-modified-Regular",
                        "fontSize": 42,
                        "stroke": "#d2a800",
                        "strokeThickness": 1
                    },
                    "text": "",
                    "anchorX": .5
                },
                "msgF45": {
                    "x": 960,
                    "y": 420,
                    "fill": "#ffffff",
                    "font": "aAsianHiro-modified-Regular",
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
                        "fontFamily": "aAsianHiro-modified-Regular",
                        "fontSize": 40,
                        "stroke": "#d2a800",
                        "strokeThickness": 1
                    },
                    "text": "",
                    "anchorX": .5
                },
                "msgF4": {
                    "x": 960,
                    "y": 400,
                    "fill": "#ffffff",
                    "font": "aAsianHiro-modified-Regular",
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
                        "fontFamily": "aAsianHiro-modified-Regular",
                        "fontSize": 40,
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
                    "font": "28px aAsianHiro-modified-Regular",
                    "text": "",
                    "anchorX": .5
                },
                "msgF51": {
                    "x": 960,
                    "y": 460,
                    "fill": "#ffffff",
                    "font": "aAsianHiro-modified-Regular",
                    "fontSize":"28px",
                    "text": "",
                    "anchorX": .5
                },
                "priceF": {
                    "x": 960,
                    "y": 667,
                    "fill": "#ffffff",
                    "font": "aAsianHiro-modified-Regular",
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
                        "fontFamily": "aAsianHiro-modified-Regular",
                        "fontSize": 40,
                        "stroke": "#d2a800",
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
        }
    }
}

var ReelConfig = {
    "phaserVer":-1,
    "premultiply":false,
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
    "previewTout":199999,
    "spinType": "PixiMillionMegaWayTumblingSpin",
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
    "lineType": "PixiMillionWayTumblingWinnings",
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
    "spinWithAlpha": .6,
    "spinConfig":{
        "es":{
            "stopEnabled":false,
            "reelSecondMovementTime":0.3,
            "reelLoopInterval":.19,
            "reelPreMovement": 4,
            "reelPreMovementTime": .2,
            "reelBaseInterval": 1,
            "reelStopInterval": 2,
            "reelSpinBounceMeasure": 30,
            "reelSpinBounceTime": .2,
            "reelSpinBounceForce": 2
        },
        "uk":{
            "stopEnabled":false,
            "reelSecondMovementTime":0.3,
            "reelLoopInterval":.19,
            "reelPreMovement": 4,
            "reelPreMovementTime": .2,
            "reelBaseInterval": 1,
            "reelStopInterval": 2,
            "reelSpinBounceMeasure": 30,
            "reelSpinBounceTime": .2,
            "reelSpinBounceForce": 2
        },
        "de":{
            "stopEnabled":false,
            "reelInterval": 200,
            "reelSecondMovementTime":0.48,
            "reelLoopInterval":.35,
            "reelPreMovement": 4,
            "reelPreMovementTime": .3,
            "reelBaseInterval": 5,
            "reelStopInterval": 1,
            "reelSpinBounceMeasure": 30,
            "reelSpinBounceTime": .18,
            "reelSpinBounceForce": 2
        },
        "default":{
            "stopEnabled":true,
            "reelSecondMovementTime":.25,
            "reelLoopInterval":.20,
            "reelPreMovement": 0,
            "reelPreMovementTime": 0,
            "reelBaseInterval": 1,
            "reelStopInterval": 2,
            "reelSpinBounceMeasure": 30,
            "reelSpinBounceTime": .2,
            "reelSpinBounceForce": 3,
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
        "noCoinOnEachLine":20,
    }
}

var paytableAssets = {

    "pages": [

        //Game guide object
        {
            "gameguide": true,
            "title": "1 Million Fortunes Megaways™ Game Rules",
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
                            "bg": "millionFortunesMegaways/img/paytable/symbol_00.png", //symbol image
                            "payout_values": true //Whether symbol has payout values

                        },

                        {

                            "id": "symbol_01",
                            "bg": "millionFortunesMegaways/img/paytable/symbol_01.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_02",
                            "bg": "millionFortunesMegaways/img/paytable/symbol_02.png",
                            "payout_values": true

                        }


                    ],

                    [

                        {

                            "id": "symbol_03",
                            "bg": "millionFortunesMegaways/img/paytable/symbol_03.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_04",
                            "bg": "millionFortunesMegaways/img/paytable/symbol_04.png",
                            "payout_values": true

                        }

                    ],

                    [
                        {

                            "id": "symbol_05",
                            "bg": "millionFortunesMegaways/img/paytable/symbol_05.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_06",
                            "bg": "millionFortunesMegaways/img/paytable/symbol_06.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_07",
                            "bg": "millionFortunesMegaways/img/paytable/symbol_07.png",
                            "payout_values": true

                        }

                    ],

                    [

                        {
                            "id": "symbol_08",
                            "bg": "millionFortunesMegaways/img/paytable/symbol_08.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_09",
                            "bg": "millionFortunesMegaways/img/paytable/symbol_09.png",
                            "payout_values": true

                        }



                    ],
                    [
                        {
                            "id": "symbol_10",
                            "bg": "millionFortunesMegaways/img/paytable/symbol_10.png",
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
                            "id": "symbol_11",
                            "bg": "millionFortunesMegaways/img/paytable/symbol_11.png",
                            "payout_values": false,
                            "text": [
                                "Sticky Wild",
                                "Sticky Wilds can appear on central reel only during Free Spins.",
                                "Sticky Wilds stays on the reels while spinning.",
                                "Up to 9 Sticky Wilds can appear on the central reel.",
                                "Wilds substitutes all the icons."
                            ],
                            "size": { //Optional field that sets image height & width in px

                                "height": "92",
                                "width":  "196"

                            }
                        }
                    ],

                    [

                        {
                            "id" : "tumble_screenshot",
                            "bg" : "millionFortunesMegaways/img/paytable/winways.png",
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
                            "bg" : "millionFortunesMegaways/img/paytable/mult1.png",
                            "size": { //Optional field that sets image height & width in px

                                "height": "89",
                                "width":  "183"

                            }

                        },
                        ],[
                        {
                            "id" : "tumble_screenshot",
                            "bg" : "millionFortunesMegaways/img/paytable/mult2.png",
                            "size": { //Optional field that sets image height & width in px

                                "height": "89",
                                "width":  "183"

                            }

                        },
                        ],[
                        {
                            "id" : "tumble_screenshot",
                            "bg" : "millionFortunesMegaways/img/paytable/mult3.png",
                            "size": { //Optional field that sets image height & width in px

                                "height": "89",
                                "width":  "183"

                            }

                        },
                        ],[
                        {
                            "id" : "tumble_screenshot",
                            "bg" : "millionFortunesMegaways/img/paytable/mult4.png",
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
                            "bg" : "millionFortunesMegaways/img/paytable/fs.png",
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

                                "height": "220",
                                "width":  "450"

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

                    "bg": "millionFortunesMegaways/img/paytable/winways.png",
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