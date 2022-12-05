
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
        "winWayOb": "godsOfAsgardMegaways/img/loader/btg-megaways.png"
    },
    "loaderMc": {
        "staticLoaderLogo": {
            "sprite": "godsOfAsgardMegaways/img/intro-logo.png",
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
        "sprite": "fonts/fontAsgard.png",
        "font": "fonts/fontAsgard.xml"
    }
}

var extScripts={
    "webfont": "FuturaPT-Heavy",
    "webfont1": "FuturaPT-Heavy",
    "webfont2": "UNIVERSAL-SERIF",
    "webfont3": "UNIVERSAL-SERIF"
}

var gameAssets = {
    "assets": {
        "iconGH0": "godsOfAsgardMegaways/img/paytable/symbol_00.png",
        "iconGH1": "godsOfAsgardMegaways/img/paytable/symbol_01.png",
        "iconGH2": "godsOfAsgardMegaways/img/paytable/symbol_02.png",
        "iconGH3": "godsOfAsgardMegaways/img/paytable/symbol_03.png",
        "iconGH4": "godsOfAsgardMegaways/img/paytable/symbol_04.png",
        "iconGH5": "godsOfAsgardMegaways/img/paytable/symbol_05.png",
        "iconGH6": "godsOfAsgardMegaways/img/paytable/symbol_06.png",
        "iconGH7": "godsOfAsgardMegaways/img/paytable/symbol_07.png",
        "iconGH8": "godsOfAsgardMegaways/img/paytable/symbol_08.png",
        "iconGH9": "godsOfAsgardMegaways/img/paytable/symbol_09.png",
        "iconGH10": "godsOfAsgardMegaways/img/paytable/symbol_10.png",
        "iconGH11": "godsOfAsgardMegaways/img/paytable/symbol_11.png",
        "iconGH12": "godsOfAsgardMegaways/img/paytable/symbol_12.png",
        "iconGH13": "godsOfAsgardMegaways/img/paytable/symbol_13.png",
        "iconGH14": "godsOfAsgardMegaways/img/paytable/symbol_14.png",
        "iconGH15": "godsOfAsgardMegaways/img/paytable/symbol_15.png",
        "iconGH16": "godsOfAsgardMegaways/img/paytable/symbol_16.png",

        "bg": "godsOfAsgardMegaways/img/bg/bg.jpg",
        "bgP": "godsOfAsgardMegaways/img/bg/mobile/bg.jpg",
        "bg_Fs": "godsOfAsgardMegaways/img/bg/fs_bg.jpg",
        "bg_FsP": "godsOfAsgardMegaways/img/bg/mobile/fs_bg.jpg",
        "bgPanel": "godsOfAsgardMegaways/img/pop_up.png",
        "bgPanelGame": "godsOfAsgardMegaways/img/pop_up.png",
        "bgPreview":"godsOfAsgardMegaways/img/paytable/intro-page.jpg",
        "bgPreview1":"godsOfAsgardMegaways/img/paytable/intro1.png",
        "bgPreview2":"godsOfAsgardMegaways/img/paytable/intro2.png",
        "bgPreviewLogo":"godsOfAsgardMegaways/img/intro-logo.png",
        "bgAlpha": "godsOfAsgardMegaways/img/alpha.png",
        "bgBlack": "godsOfAsgardMegaways/img/black.png",
        "logo": "godsOfAsgardMegaways/img/logo.png",
        "box": "godsOfAsgardMegaways/img/counter.png",
        "highBF": "godsOfAsgardMegaways/img/buyFeature/no-text/high.png",
        "normalBF": "godsOfAsgardMegaways/img/buyFeature/no-text/normal.png",
        "superBF": "godsOfAsgardMegaways/img/buyFeature/no-text/super.png",
        "buttonBg":"gui/generic/img/desktop/png/cp-info-bar.png",
        "volOnButton": "gui/btnVolOn.png",
        "volOffButton": "gui/btnVolOff.png",
        "btnTranspRight": "godsOfAsgardMegaways/img/transparent.png",
        "btnTranspLeft": "godsOfAsgardMegaways/img/transparent.png",
        "none": "godsOfAsgardMegaways/img/transparent.png",
    },
    "localizedAssets":{

    },
    "buttonsSpriteSheet": {
    },
    "animations": {
        "bigWin":{
            "json": "godsOfAsgardMegaways/img/win_tier.json",
            "name": " win_tier.",
            "type":"spine"
        },
        "yesButton": {
            "json": "godsOfAsgardMegaways/img/yes-btn.json",
        },
        "noButton": {
            "json": "godsOfAsgardMegaways/img/no-btn.json",
        },
        "feature-Fn-btn": {
            "json": "godsOfAsgardMegaways/img/buyFeature/buy-fs-btn.json",
        },
        "feature-Rn-btn": {
            "json": "godsOfAsgardMegaways/img/buyFeature/buy-fs-btn.json",
        },
        "buyFeature":{
            "json": "godsOfAsgardMegaways/img/buyFeature/buy-feature-btn.json",
        },
        "buyFeatureConfirm":{
            "json": "godsOfAsgardMegaways/img/generic-game-btn.json",
        },
        "buyUpgrade":{
            "json": "godsOfAsgardMegaways/img/buyFeature/buy-feature-btn.json",
        },
        "genericBtn":{
            "json": "godsOfAsgardMegaways/img/generic-game-btn.json",
        },
        "game-btn":{
            "json": "godsOfAsgardMegaways/img/generic-game-btn.json",
        },
        "check":{
            "json": "godsOfAsgardMegaways/img/radio-btns.json",
        },
        "tumble":{
            "json": "godsOfAsgardMegaways/img/symbols/tumble.json",
            "name": "tumble.",
            "type":"spine"
        },
        "activate_13":{
            "json": "godsOfAsgardMegaways/img/symbols/activate_purple.json",
            "name": "activate_purple.",
            "type":"spine"
        },
        "activate_14":{
            "json": "godsOfAsgardMegaways/img/symbols/activate_green.json",
            "name": "activate_green.",
            "type":"spine"
        },
        "activate_15":{
            "json": "godsOfAsgardMegaways/img/symbols/activate_blue.json",
            "name": "activate_blue.",
            "type":"spine"
        },
        "activate_16":{
            "json": "godsOfAsgardMegaways/img/symbols/activate_red.json",
            "name": "activate_red.",
            "type":"spine"
        },

        "icon0":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol-d_00.json",
        },
        "bicon0":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol-b_00.json",
        },
        "anim0": {
            "json": "godsOfAsgardMegaways/img/symbols/symbol_00.json",
            "name": "symbol_00.",
            "type":"spine"
        },

        "icon1":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol-d_01.json",
        },
        "bicon1":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol-b_01.json",
        },
        "anim1": {
            "json": "godsOfAsgardMegaways/img/symbols/symbol_01.json",
            "name": "symbol_01.",
            "type":"spine"
        },

        "icon2":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol-d_02.json",
        },
        "bicon2":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol-b_02.json",
        },
        "anim2": {
            "json": "godsOfAsgardMegaways/img/symbols/symbol_02.json",
            "name": "symbol_02.",
            "type":"spine"
        },

        "icon3":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol-d_03.json",
        },
        "bicon3":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol-b_03.json",
        },
        "anim3":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol_03.json",
            "name": "symbol_03.",
            "type":"spine"
        },

        "icon4":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol-d_04.json",
        },
        "bicon4":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol-b_04.json",
        },
        "anim4":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol_04.json",
            "name": "symbol_04.",
            "type":"spine"
        },

        "icon5":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol-d_05.json",
        },
        "bicon5":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol-b_05.json",
        },
        "anim5":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol_05.json",
            "name": "symbol_05.",
            "type":"spine"
        },

        "icon6":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol-d_06.json",
        },
        "bicon6":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol-b_06.json",
        },
        "anim6":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol_06.json",
            "name": "symbol_06.",
            "type":"spine"
        },

        "icon7":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol-d_07.json",
        },
        "bicon7":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol-b_07.json",
        },
        "anim7":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol_07.json",
            "name": "symbol_07.",
            "type":"spine"
        },

        "icon8":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol-d_08.json",
        },
        "bicon8":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol-b_08.json",
        },
        "anim8":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol_08.json",
            "name": "symbol_08.",
            "type":"spine"
        },

        "icon9":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol-d_09.json",
        },
        "bicon9":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol-b_09.json",
        },
        "anim9":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol_09.json",
            "name": "symbol_09.",
            "type":"spine"
        },

        "icon10":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol-d_10.json",
        },
        "bicon10":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol-b_10.json",
        },
        "anim10":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol_10.json",
            "name": "symbol_10.",
            "type":"spine"
        },

        "icon11":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol-d_11.json",
        },
        "bicon11":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol-b_11.json",
        },
        "anim11":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol_11.json",
            "name": "symbol_11.",
            "type":"spine"
        },

        "icon12":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol-d_12.json",
        },
        "bicon12":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol-b_12.json",
        },
        "anim12":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol_12.json",
            "name": "symbol_12.",
            "type":"spine"
        },

        "icon13":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol-d_13.json",
        },
        "bicon13":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol-b_13.json",
        },
        "anim13":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol_13.json",
            "name": "symbol_13.",
            "type":"spine"
        },

        "icon14":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol-d_14.json",
        },
        "bicon14":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol-b_14.json",
        },
        "anim14":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol_14.json",
            "name": "symbol_14.",
            "type":"spine"
        },

        "icon15":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol-d_15.json",
        },
        "bicon15":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol-b_15.json",
        },
        "anim15":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol_15.json",
            "name": "symbol_15.",
            "type":"spine"
        },

        "icon16":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol-d_16.json",
        },
        "bicon16":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol-b_16.json",
        },
        "anim16":{
            "json": "godsOfAsgardMegaways/img/symbols/symbol_16.json",
            "name": "symbol_16.",
            "type":"spine"
        },

        "anticipation": {
            "json": "godsOfAsgardMegaways/img/anim/tension.json",
            "sprite": "godsOfAsgardMegaways/img/anim/tension.png"
        },
        "part-1": {
            "json": "godsOfAsgardMegaways/img/anim/bronze-coin.json",
            "sprite": "godsOfAsgardMegaways/img/anim/bronze-coin.png"
        },
        "part-2": {
            "json": "godsOfAsgardMegaways/img/anim/silver-coin.json",
            "sprite": "godsOfAsgardMegaways/img/anim/silver-coin.png"
        },
        "part-3": {
            "json": "godsOfAsgardMegaways/img/anim/gold-coin.json",
            "sprite": "godsOfAsgardMegaways/img/anim/gold-coin.png"
        },
        "f-part-1": {
            "json": "godsOfAsgardMegaways/img/anim/bronze-coin-frwrd.json",
            "sprite": "godsOfAsgardMegaways/img/anim/bronze-coin-frwrd.png"
        },
        "f-part-2": {
            "json": "godsOfAsgardMegaways/img/anim/silver-coin-frwrd.json",
            "sprite": "godsOfAsgardMegaways/img/anim/silver-coin-frwrd.png"
        },
        "f-part-3": {
            "json": "godsOfAsgardMegaways/img/anim/gold-coin-frwrd.json",
            "sprite": "godsOfAsgardMegaways/img/anim/gold-coin-frwrd.png"
        },
    },
    "importantSounds": {
        "spinClick": {
            "name": "godsOfAsgardMegaways/sounds/spinClick.mp3",
            "volume":.4
        },
        "reelStop": {
            "name": "godsOfAsgardMegaways/sounds/reelStop.mp3",
            "volume":.3
        }
    },
    "sounds": {
        "click": {
            "name": "godsOfAsgardMegaways/sounds/click.mp3",
            "volume": .2
        },
        "smbWin_0": {
            "name": "godsOfAsgardMegaways/sounds/smbWin_00.mp3",
            "volume": 1.4
        },
        "smbWin_1": {
            "name": "godsOfAsgardMegaways/sounds/smbWin_00.mp3",
            "volume": 1.4
        },
        "smbWin_2": {
            "name": "godsOfAsgardMegaways/sounds/smbWin_00.mp3",
            "volume": 1.4
        },
        "smbWin_3": {
            "name": "godsOfAsgardMegaways/sounds/smbWin_00.mp3",
            "volume": 1.4
        },
        "smbWin_4": {
            "name": "godsOfAsgardMegaways/sounds/smbWin_00.mp3",
            "volume": 1.5
        },
        "smbWin_5": {
            "name": "godsOfAsgardMegaways/sounds/smbWin_05.mp3",
            "volume": 1.5
        },
        "smbWin_6": {
            "name": "godsOfAsgardMegaways/sounds/smbWin_05.mp3",
            "volume": 1.5
        },
        "smbWin_7": {
            "name": "godsOfAsgardMegaways/sounds/smbWin_05.mp3",
            "volume": 1.5
        },
        "smbWin_8": {
            "name": "godsOfAsgardMegaways/sounds/smbWin_05.mp3",
            "volume": 1.3
        },
        "smbWin_9": {
            "name": "godsOfAsgardMegaways/sounds/smbWin_05.mp3",
            "volume": 1.3
        },
        "smbWin_10": {
            "name": "godsOfAsgardMegaways/sounds/smbWin_09.mp3",
            "volume": 1.3
        },
        "smbWin_11": {
            "name": "godsOfAsgardMegaways/sounds/smbWin_11.mp3",
            "volume": 1.3
        },
        "smbWin_12": {
            "name": "godsOfAsgardMegaways/sounds/smbWin_12.mp3",
            "volume": 1.3
        },
        "smbWin_13": {
            "name": "godsOfAsgardMegaways/sounds/smbWin_13.mp3",
            "volume": 2
        },
        "smbWin_14": {
            "name": "godsOfAsgardMegaways/sounds/smbWin_14.mp3",
            "volume": 2
        },
        "smbWin_15": {
            "name": "godsOfAsgardMegaways/sounds/smbWin_15.mp3",
            "volume": 2
        },
        "smbWin_16": {
            "name": "godsOfAsgardMegaways/sounds/smbWin_16.mp3",
            "volume": 2
        },
        "fsWin": {
            "name": "godsOfAsgardMegaways/sounds/fsWin.mp3",
            "volume": 2
        },
        "fsWon": {
            "name": "godsOfAsgardMegaways/sounds/introFS.mp3",
            "volume": 1
        },
        "incWin": {
            "name": "godsOfAsgardMegaways/sounds/counter.mp3",
            "volume": .1,
            "loop": true
        },
        "line": {
            "name": "godsOfAsgardMegaways/sounds/line.mp3",
            "volume": .3
        },
        "winBg_0": {
            "name": "godsOfAsgardMegaways/sounds/centralWin/win1.mp3",
            "volume": .6
        },
        "winBg_1": {
            "name": "godsOfAsgardMegaways/sounds/centralWin/win2.mp3",
            "volume": .6
        },
        "winBg_2": {
            "name": "godsOfAsgardMegaways/sounds/centralWin/win3.mp3",
            "volume": .6
        },
        "winBg_3": {
            "name": "godsOfAsgardMegaways/sounds/centralWin/win4.mp3",
            "volume": .6
        },
        "winBg_4": {
            "name": "godsOfAsgardMegaways/sounds/centralWin/win5.mp3",
            "volume": .6
        },
        "winBg_5": {
            "name": "godsOfAsgardMegaways/sounds/centralWin/win6.mp3",
            "volume": .6
        },
        "winBg_6": {
            "name": "godsOfAsgardMegaways/sounds/centralWin/bigWin.mp3",
            "volume": .7
        },
        "winBg_7": {
            "name": "godsOfAsgardMegaways/sounds/centralWin/superBigWin.mp3",
            "volume": .7
        },
        "winBg_8": {
            "name": "godsOfAsgardMegaways/sounds/centralWin/megaBigWin.mp3",
            "volume": .7
        },
        "winBgS_6": {
            "name": "godsOfAsgardMegaways/sounds/centralWin/bigWin.mp3",
            "volume": .7
        },
        "winBgS_7": {
            "name": "godsOfAsgardMegaways/sounds/centralWin/superBigWin.mp3",
            "volume": .7
        },
        "winBgS_8": {
            "name": "godsOfAsgardMegaways/sounds/centralWin/megaBigWin.mp3",
            "volume": .7
        },
        "winPanel": {
            "name": "godsOfAsgardMegaways/sounds/winScreen.mp3",
            "volume": 1
        },
        "coins": {
            "name": "godsOfAsgardMegaways/sounds/coins.mp3",
            "volume":1.2
        },
        "tumbleSound": {
            "name": "godsOfAsgardMegaways/sounds/tumbling.mp3",
            "volume": 1,
        },
        "reelSound": {
            "name": "godsOfAsgardMegaways/sounds/reelSound.mp3",
            "volume":1
        },
        "iconPop": {
            "name": "godsOfAsgardMegaways/sounds/iconsExplode.mp3",
            "volume": 1.1
        },
        "horSpin": {
            "name": "godsOfAsgardMegaways/sounds/horSpin.mp3",
            "volume": 2
        },
        "scatterLand": {
            "name": "godsOfAsgardMegaways/sounds/scatterLand.mp3",
            "volume": 2
        },
        "iconsExplode": {
            "name": "godsOfAsgardMegaways/sounds/iconsExplode.mp3",
            "volume": .4
        },
        "drumLoop": {
            "name": "godsOfAsgardMegaways/sounds/drumLoop.mp3",
            "volume": 1
        },
        "drumFinal": {
            "name": "godsOfAsgardMegaways/sounds/drumFinal.mp3",
            "volume": 1.2
        },
        "active": {
            "name": "godsOfAsgardMegaways/sounds/active.mp3",
            "volume": 1
        },
        "activeTwice": {
            "name": "godsOfAsgardMegaways/sounds/activeTwice.mp3",
            "volume": 1
        },
        "symbolsSwitch": {
            "name": "godsOfAsgardMegaways/sounds/symbolsSwitch.mp3",
            "volume": 1
        },
    },
    "bgSounds": {
        "bgSlot": {
            "name": "godsOfAsgardMegaways/sounds/bg.mp3",
            "volume": .3,
        },
        "bgFs": {
            "name": "godsOfAsgardMegaways/sounds/bgFs.mp3",
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
                    "y": 0,
                    "anchorX":.5
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
                    "y": 0,
                    "anchorX":.5
                },
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

        "logo": {
            "visible":false,
            "graphAsset": {
                "logo": {
                    "name": "logo",
                    "x": 193,
                    "y": 38,
                    "anchorX":.5,
                    "scaleX":1,
                    "scaleY":1
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
                    "x": 960,
                    "y": 700,
                    "bmpFont": "bmpFont",
                    "size": "320",
                    "text": "",
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
                    "x": 460,
                    "y": 130,
                    "fill": "#FFFFFF",
                    "font": "JockeyOne-Regular",
                    "fontSize": "35px",
                    "text": "Free Rounds:",
                    "anchorX": 0.5
                },
                "frValue": {
                    "x": 460,
                    "y": 167,
                    "fill": "#FFFFFF",
                    "font": "UNIVERSAL-SERIF",
                    "fontSize": "30px",
                    "text": "5",
                    "anchorX": 0.5
                },
                "frTotWonLabel": {
                    "x": 1450,
                    "y": 130,
                    "fill": "#FFFFFF",
                    "font": "UNIVERSAL-SERIF",
                    "fontSize": "35px",
                    "text": "Total won:",
                    "anchorX": 0.5
                },
                "frTotWonValue": {
                    "x": 1450,
                    "y": 167,
                    "fill": "#FFFFFF",
                    "font": "UNIVERSAL-SERIF",
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
                    "x": 563,
                    "y": 847,
                    "xP": 1720,
                    "yP": 206,
                    "scaleX":1,
                    "scaleY":1,
                    "anchorX": .5,
            "texts": {
                "fsLabel": {
                            "x": 0,
                            "y": 10,
                    "fill": "#ff2eb6",
                            "font": "UNIVERSAL-SERIF ,Arial",
          "style":{
                                "dropShadow": true,
                                "dropShadowAlpha": 0.8,
                                "dropShadowAngle": 1.6,
                                "dropShadowBlur": 6,
                                "dropShadowColor": "#201105",
                                "dropShadowDistance": 0,
                                "fill": [
                                    "#a45018",
                                    "#e0bd38",
                                    "#fffab4",
                                    "#e4b137",
                                    "#f0f2be",
                                    "#ffff26",
                                    "#ffffd8",
                                    "#ffff8c",
                                    "#ffa500",
                                    "#e36e00",
                                    "#fffa82",
                                    "#9a4b00"
                                ],
                                "fontFamily": "UNIVERSAL-SERIF",
                                "fontSize": 30,
                                "fontWeight": "bold",
                                "letterSpacing": 2,
                                "lineJoin": "bevel",
                                "miterLimit": 21,
                                "padding": 2,
                                "stroke": "#9a4b00",
                                "strokeThickness": 2
                            },
                    "text": "Free Spins",
                    "anchorX": 0.5
                },
                "fsValue": {
                            "x": 0,
                            "y": 50,
                    "fill": "#ff2eb6",
                            "font": "UNIVERSAL-SERIF ,Arial",
          "style":{
                                "dropShadow": true,
                                "dropShadowAlpha": 0.8,
                                "dropShadowAngle": 1.6,
                                "dropShadowBlur": 6,
                                "dropShadowColor": "#201105",
                                "dropShadowDistance": 0,
                                "fill": [
                                    "#a45018",
                                    "#e0bd38",
                                    "#fffab4",
                                    "#e4b137",
                                    "#f0f2be",
                                    "#ffff26",
                                    "#ffffd8",
                                    "#ffff8c",
                                    "#ffa500",
                                    "#e36e00",
                                    "#fffa82",
                                    "#9a4b00"
                                ],
                                "fontFamily": "UNIVERSAL-SERIF",
                                "fontSize": 35,
                                "fontWeight": "bold",
                                "letterSpacing": 2,
                                "lineJoin": "bevel",
                                "miterLimit": 21,
                                "padding": 2,
                                "stroke": "#9a4b00",
                                "strokeThickness": 2
                            },
                    "text": "12",
                    "anchorX": 0.5
                },
                        "fsAdditional":{
                            "x": 30,
                            "y": 35,
                            "bmpFont": "bmpFont",
                            "size": "24",
                            "text": "",
                            "anchorX": .5,
                            "anchorY": .5
                        }
                    }
                },
                "fsP1": {
                    "name": "box",
                    "x": 952    ,
                    "y": 847,
                    "xP": 1720,
                    "yP": 338,
                    "scaleX":1,
                    "scaleY":1,
                    "anchorX": .5,
                    "texts":{
                "fsmultT":{
                            "x": 0,
                            "y": 10,
                            "font": "UNIVERSAL-SERIF ,Arial",
          "style":{
                                "dropShadow": true,
                                "dropShadowAlpha": 0.8,
                                "dropShadowAngle": 1.6,
                                "dropShadowBlur": 6,
                                "dropShadowColor": "#201105",
                                "dropShadowDistance": 0,
                                "fill": [
                                    "#a45018",
                                    "#e0bd38",
                                    "#fffab4",
                                    "#e4b137",
                                    "#f0f2be",
                                    "#ffff26",
                                    "#ffffd8",
                                    "#ffff8c",
                                    "#ffa500",
                                    "#e36e00",
                                    "#fffa82",
                                    "#9a4b00"
                                ],
                                "fontFamily": "UNIVERSAL-SERIF",
                                "fontSize": 30,
                                "fontWeight": "bold",
                                "letterSpacing": 2,
                                "lineJoin": "bevel",
                                "miterLimit": 21,
                                "padding": 2,
                                "stroke": "#9a4b00",
                                "strokeThickness": 2
                            },
                    "fill": "#fffe",
                    "text": "Multiplier",
                    "align":"center",
                    "anchorX": .5
                },
                        "fsMultValue":{
                            "x": 0,
                            "y": 50,
                            "font": "UNIVERSAL-SERIF ,Arial",
          "style":{
                                "dropShadow": true,
                                "dropShadowAlpha": 0.8,
                                "dropShadowAngle": 1.6,
                                "dropShadowBlur": 6,
                                "dropShadowColor": "#201105",
                                "dropShadowDistance": 0,
                                "fill": [
                                    "#a45018",
                                    "#e0bd38",
                                    "#fffab4",
                                    "#e4b137",
                                    "#f0f2be",
                                    "#ffff26",
                                    "#ffffd8",
                                    "#ffff8c",
                                    "#ffa500",
                                    "#e36e00",
                                    "#fffa82",
                                    "#9a4b00"
                                ],
                                "fontFamily": "UNIVERSAL-SERIF",
                                "fontSize": 35,
                                "fontWeight": "bold",
                                "letterSpacing": 2,
                                "lineJoin": "bevel",
                                "miterLimit": 21,
                                "padding": 2,
                                "stroke": "#9a4b00",
                                "strokeThickness": 2
                            },
                            "fill": "#fffe",
                            "text": "x12",
                            "anchorX": .5
                        }
                    }
                },
                "fsP2": {
                    "name": "box",
                    "x": 1347,
                    "y": 847,
                    "xP": 1720,
                    "yP": 470,
                    "scaleX":1,
                    "scaleY":1,
                    "anchorX": .5,
                    "texts": {
                "totWonLabel": {
                            "x": 0,
                            "y": 10,
                    "fill": "#ff8800",
                            "font": "UNIVERSAL-SERIF ,Arial",
                            "style":{
                                "dropShadow": true,
                                "dropShadowAlpha": 0.8,
                                "dropShadowAngle": 1.6,
                                "dropShadowBlur": 6,
                                "dropShadowColor": "#201105",
                                "dropShadowDistance": 0,
                                "fill": [
                                    "#a45018",
                                    "#e0bd38",
                                    "#fffab4",
                                    "#e4b137",
                                    "#f0f2be",
                                    "#ffff26",
                                    "#ffffd8",
                                    "#ffff8c",
                                    "#ffa500",
                                    "#e36e00",
                                    "#fffa82",
                                    "#9a4b00"
                                ],
                                "fontFamily": "UNIVERSAL-SERIF",
                                "fontSize": 30,
                                "fontWeight": "bold",
                                "letterSpacing": 2,
                                "lineJoin": "bevel",
                                "miterLimit": 21,
                                "padding": 2,
                                "stroke": "#9a4b00",
                                "strokeThickness": 2
                            },
                    "text": "Total won",
                    "anchorX":0.5
                },
                "totWonValue": {
                            "x": 0,
                            "y": 50,
                    "fill": "#ff8800",
                            "font": "UNIVERSAL-SERIF ,Arial",
          "style":{
                                "dropShadow": true,
                                "dropShadowAlpha": 0.8,
                                "dropShadowAngle": 1.6,
                                "dropShadowBlur": 6,
                                "dropShadowColor": "#201105",
                                "dropShadowDistance": 0,
                                "fill": [
                                    "#a45018",
                                    "#e0bd38",
                                    "#fffab4",
                                    "#e4b137",
                                    "#f0f2be",
                                    "#ffff26",
                                    "#ffffd8",
                                    "#ffff8c",
                                    "#ffa500",
                                    "#e36e00",
                                    "#fffa82",
                                    "#9a4b00"
                                ],
                                "fontFamily": "UNIVERSAL-SERIF",
                                "fontSize": 35,
                                "fontWeight": "bold",
                                "letterSpacing": 2,
                                "lineJoin": "bevel",
                                "miterLimit": 21,
                                "padding": 2,
                                "stroke": "#9a4b00",
                                "strokeThickness": 2
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
        "winWays":{
            "visible": false,
            "graphAsset": {
                "fsP": {
                    "name": "none",
                    "x": 620,
                    "y": 0,
                    "anchorX": .5,
                    "align":"center",
                    "alpha":0
                }
            },
            "texts":{
                "winWaysNum":{
                    "x": 190,
                    "y": 243,
                    "bmpFont": "bmpFont",
                    "size": "80",
                    "text": "",
                    "anchorX": .5,
                    "anchorY": .5
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
                    "y": 540-70,
                    "anchorX": .5,
                    "anchorY": .5
                }
            },
            "texts": {
                "fsHeading": {
                    "x": 960,
                    "y": 270-20,
                    "fill": "#ff8800",
                    "font": "UNIVERSAL-SERIF",
                    "style":{
                        "dropShadow": true,
                        "dropShadowAlpha": 0.8,
                        "dropShadowAngle": 1.6,
                        "dropShadowBlur": 6,
                        "dropShadowColor": "#201105",
                        "dropShadowDistance": 0,
                        "fill": [
                            "#a45018",
                            "#e0bd38",
                            "#fffab4",
                            "#e4b137",
                            "#f0f2be",
                            "#ffff26",
                            "#ffffd8",
                            "#ffff8c",
                            "#ffa500",
                            "#e36e00",
                            "#fffa82",
                            "#9a4b00"
                        ],
                        "fontFamily": "UNIVERSAL-SERIF",
                        "fontSize": 70,
                        "fontWeight": "bold",
                        "letterSpacing": 2,
                        "lineJoin": "bevel",
                        "miterLimit": 21,
                        "padding": 2,
                        "stroke": "#9a4b00",
                        "strokeThickness": 5
                    },
                    "text": "FREE SPINS",
                    "anchorX": .5
                },
                "fsWLabel": {
                    "x": 960,
                    "y": 300+147,
                    "fill": "#ffffff",
                    "font": "UNIVERSAL-SERIF",
                    "style":{
                        "dropShadow": true,
                        "dropShadowAlpha": 0.8,
                        "dropShadowAngle": 1.6,
                        "dropShadowBlur": 6,
                        "dropShadowColor": "#201105",
                        "dropShadowDistance": 0,
                        "fill": [
                            "#a45018",
                            "#e0bd38",
                            "#fffab4",
                            "#e4b137",
                            "#f0f2be",
                            "#ffff26",
                            "#ffffd8",
                            "#ffff8c",
                            "#ffa500",
                            "#e36e00",
                            "#fffa82",
                            "#9a4b00"
                        ],
                        "fontFamily": "UNIVERSAL-SERIF",
                        "fontSize": 30,
                        "fontWeight": "bold",
                        "letterSpacing": 2,
                        "lineJoin": "bevel",
                        "miterLimit": 21,
                        "padding": 2,
                        "stroke": "#9a4b00",
                        "strokeThickness": 2
                    },
                    "text": "You won",
                    "anchorX": .5
                },
                "fsValue1": {
                    "x": 960,
                    "y": 530-20,
                    "fill": "#ffffff",
                    "font": "UNIVERSAL-SERIF",
                    "style":{
                        "dropShadow": true,
                        "dropShadowAlpha": 0.8,
                        "dropShadowAngle": 1.6,
                        "dropShadowBlur": 6,
                        "dropShadowColor": "#201105",
                        "dropShadowDistance": 0,
                        "fill": [
                            "#a45018",
                            "#e0bd38",
                            "#fffab4",
                            "#e4b137",
                            "#f0f2be",
                            "#ffff26",
                            "#ffffd8",
                            "#ffff8c",
                            "#ffa500",
                            "#e36e00",
                            "#fffa82",
                            "#9a4b00"
                        ],
                        "fontFamily": "UNIVERSAL-SERIF",
                        "fontSize": 30,
                        "fontWeight": "bold",
                        "letterSpacing": 2,
                        "lineJoin": "bevel",
                        "miterLimit": 21,
                        "padding": 2,
                        "stroke": "#9a4b00",
                        "strokeThickness": 2
                    },
                    "text": "5",
                    "anchorX": .5
                },
                "fsCap": {
                    "x": 960,
                    "y": 230+147,
                    "fill": "#ffffff",
                    "font": "UNIVERSAL-SERIF",
                    "style":{
                        "dropShadow": true,
                        "dropShadowAlpha": 0.8,
                        "dropShadowAngle": 1.6,
                        "dropShadowBlur": 6,
                        "dropShadowColor": "#201105",
                        "dropShadowDistance": 0,
                        "fill": [
                            "#a45018",
                            "#e0bd38",
                            "#fffab4",
                            "#e4b137",
                            "#f0f2be",
                            "#ffff26",
                            "#ffffd8",
                            "#ffff8c",
                            "#ffa500",
                            "#e36e00",
                            "#fffa82",
                            "#9a4b00"
                        ],
                        "fontFamily": "UNIVERSAL-SERIF",
                        "fontSize": 30,
                        "fontWeight": "bold",
                        "letterSpacing": 2,
                        "lineJoin": "bevel",
                        "miterLimit": 21,
                        "padding": 2,
                        "stroke": "#9a4b00",
                        "strokeThickness": 2
                    },
                    "text": "The maximum prize",
                    "anchorX": .5
                },
                "fsWLabel1": {
                    "x": 960,
                    "y": 420+147,
                    "fill": "#ffffff",
                    "font": "UNIVERSAL-SERIF",
                    "style":{
                        "dropShadow": true,
                        "dropShadowAlpha": 0.8,
                        "dropShadowAngle": 1.6,
                        "dropShadowBlur": 6,
                        "dropShadowColor": "#201105",
                        "dropShadowDistance": 0,
                        "fill": [
                            "#a45018",
                            "#e0bd38",
                            "#fffab4",
                            "#e4b137",
                            "#f0f2be",
                            "#ffff26",
                            "#ffffd8",
                            "#ffff8c",
                            "#ffa500",
                            "#e36e00",
                            "#fffa82",
                            "#9a4b00"
                        ],
                        "fontFamily": "UNIVERSAL-SERIF",
                        "fontSize": 30,
                        "fontWeight": "bold",
                        "letterSpacing": 2,
                        "lineJoin": "bevel",
                        "miterLimit": 21,
                        "padding": 2,
                        "stroke": "#9a4b00",
                        "strokeThickness": 2
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
                    "font": "UNIVERSAL-SERIF",
                    "fontSize": "90px",
                    "stroke": "#40372a",
                    "stroke_tick": 4,
                    "text": "FREE ROUNDS",
                    "anchorX": .5
                },
                "frWLabel": {
                    "x": 960,
                    "y": 350,
                    "fill": "#ffffff",
                    "font": "UNIVERSAL-SERIF",
                    "fontSize": "30px",
                    "text":"",
                    "align":"center",
                    "anchorX": .5
                },
                "frValue1": {
                    "x": 960,
                    "y": 400,
                    "fill": "#ffffff",
                    "font": "UNIVERSAL-SERIF",
                    "fontSize": "35px",
                    "text": "5",
                    "anchorX": .5
                },
                "frWLabel1": {
                    "x": 960,
                    "y": 450,
                    "fill": "#ffffff",
                    "font": "UNIVERSAL-SERIF",
                    "fontSize": "30px",
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
                    "y": 880,
                    "yFs":720,
                    "bmpFont": "bmpFont",
                    "size": "90",
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
                    "x": 520,
                    "y": 260,
                    "anchorX": 0.5,
                    "texts": {
                        "pw1":{
                            "x": 192-309-75,
                            "y": 200+60,
                            "font": "UNIVERSAL-SERIF",
                            "style":{
                                    "dropShadow": true,
                                    "dropShadowAlpha": 0.8,
                                    "dropShadowAngle": 1.6,
                                    "dropShadowBlur": 6,
                                    "dropShadowColor": "#201105",
                                    "dropShadowDistance": 0,
                                    "fill": [
                                        "#a45018",
                                        "#e0bd38",
                                        "#fffab4",
                                        "#e4b137",
                                        "#f0f2be",
                                        "#ffff26",
                                        "#ffffd8",
                                        "#ffff8c",
                                        "#ffa500",
                                        "#e36e00",
                                        "#fffa82",
                                        "#9a4b00"
                                    ],
                                    "fontFamily": "UNIVERSAL-SERIF",
                                    "fontSize": 30,
                                    "fontWeight": "bold",
                                    "letterSpacing": 2,
                                    "lineJoin": "bevel",
                                    "miterLimit": 21,
                                    "padding": 2,
                                    "stroke": "#9a4b00",
                                    "strokeThickness": 3
                                },
                            "fill": "#bd02e3",
                            "text": "Freya",
                            "anchorX": 0.5,
                        },
                        "pw1a":{
                            "x": 192-309-75,
                            "y": 260+60,
                            "font": "UNIVERSAL-SERIF",
                                "style":{
                                    "dropShadow": true,
                                    "dropShadowAlpha": 0.8,
                                    "dropShadowAngle": 1.6,
                                    "dropShadowBlur": 6,
                                    "dropShadowColor": "#201105",
                                    "dropShadowDistance": 0,
                                    "fill": [
                                        "#a45018",
                                        "#e0bd38",
                                        "#fffab4",
                                        "#e4b137",
                                        "#f0f2be",
                                        "#ffff26",
                                        "#ffffd8",
                                        "#ffff8c",
                                        "#ffa500",
                                        "#e36e00",
                                        "#fffa82",
                                        "#9a4b00"
                                    ],
                                    "fontFamily": "UNIVERSAL-SERIF",
                                    "fontSize": 17,
                                    "fontWeight": "bold",
                                    "letterSpacing": 2,
                                    "lineJoin": "bevel",
                                    "miterLimit": 21,
                                    "padding": 2,
                                    "stroke": "#9a4b00",
                                    "strokeThickness": 2
                                },
                            "text": "Turns symbols into Wilds.",
                            "anchorX": 0.5,
                        },
                        "pw2":{
                            "x": 425-309+ 85,
                            "y": 200+60,
                            "font": "UNIVERSAL-SERIF",
                                "style":{
                                    "dropShadow": true,
                                    "dropShadowAlpha": 0.8,
                                    "dropShadowAngle": 1.6,
                                    "dropShadowBlur": 6,
                                    "dropShadowColor": "#201105",
                                    "dropShadowDistance": 0,
                                    "fill": [
                                        "#a45018",
                                        "#e0bd38",
                                        "#fffab4",
                                        "#e4b137",
                                        "#f0f2be",
                                        "#ffff26",
                                        "#ffffd8",
                                        "#ffff8c",
                                        "#ffa500",
                                        "#e36e00",
                                        "#fffa82",
                                        "#9a4b00"
                                    ],
                                    "fontFamily": "UNIVERSAL-SERIF",
                                    "fontSize": 30,
                                    "fontWeight": "bold",
                                    "letterSpacing": 2,
                                    "lineJoin": "bevel",
                                    "miterLimit": 21,
                                    "padding": 2,
                                    "stroke": "#9a4b00",
                                    "strokeThickness": 3
                                },
                            "text": "Loki",
                            "anchorX": 0.5,
                        },
                        "pw2a":{
                            "x": 425-309+ 85,
                            "y": 260+60,
                            "font": "UNIVERSAL-SERIF",
                                "style":{
                                    "dropShadow": true,
                                    "dropShadowAlpha": 0.8,
                                    "dropShadowAngle": 1.6,
                                    "dropShadowBlur": 6,
                                    "dropShadowColor": "#201105",
                                    "dropShadowDistance": 0,
                                    "fill": [
                                        "#a45018",
                                        "#e0bd38",
                                        "#fffab4",
                                        "#e4b137",
                                        "#f0f2be",
                                        "#ffff26",
                                        "#ffffd8",
                                        "#ffff8c",
                                        "#ffa500",
                                        "#e36e00",
                                        "#fffa82",
                                        "#9a4b00"
                                    ],
                                    "fontFamily": "UNIVERSAL-SERIF",
                                    "fontSize": 17,
                                    "fontWeight": "bold",
                                    "letterSpacing": 2,
                                    "lineJoin": "bevel",
                                    "miterLimit": 21,
                                    "padding": 2,
                                    "stroke": "#9a4b00",
                                    "strokeThickness": 2
                                },
                            "text": "Takes top paying symbols",
                            "anchorX": 0.5,
                        },
                        "pw2b":{
                            "x": 425-309+ 85,
                            "y": 310+60,
                            "font": "UNIVERSAL-SERIF",
                                "style":{
                                    "dropShadow": true,
                                    "dropShadowAlpha": 0.8,
                                    "dropShadowAngle": 1.6,
                                    "dropShadowBlur": 6,
                                    "dropShadowColor": "#201105",
                                    "dropShadowDistance": 0,
                                    "fill": [
                                        "#a45018",
                                        "#e0bd38",
                                        "#fffab4",
                                        "#e4b137",
                                        "#f0f2be",
                                        "#ffff26",
                                        "#ffffd8",
                                        "#ffff8c",
                                        "#ffa500",
                                        "#e36e00",
                                        "#fffa82",
                                        "#9a4b00"
                                    ],
                                    "fontFamily": "UNIVERSAL-SERIF",
                                    "fontSize": 17,
                                    "fontWeight": "bold",
                                    "letterSpacing": 2,
                                    "lineJoin": "bevel",
                                    "miterLimit": 21,
                                    "padding": 2,
                                    "stroke": "#9a4b00",
                                    "strokeThickness": 2
                                },
                            "text": "from 1st reel and",
                            "anchorX": 0.5,
                        },
                        "pw2c":{
                            "x": 425-309+85,
                            "y": 360+60,
                            "font": "UNIVERSAL-SERIF",
                                "style":{
                                    "dropShadow": true,
                                    "dropShadowAlpha": 0.8,
                                    "dropShadowAngle": 1.6,
                                    "dropShadowBlur": 6,
                                    "dropShadowColor": "#201105",
                                    "dropShadowDistance": 0,
                                    "fill": [
                                        "#a45018",
                                        "#e0bd38",
                                        "#fffab4",
                                        "#e4b137",
                                        "#f0f2be",
                                        "#ffff26",
                                        "#ffffd8",
                                        "#ffff8c",
                                        "#ffa500",
                                        "#e36e00",
                                        "#fffa82",
                                        "#9a4b00"
                                    ],
                                    "fontFamily": "UNIVERSAL-SERIF",
                                    "fontSize": 17,
                                    "fontWeight": "bold",
                                    "letterSpacing": 2,
                                    "lineJoin": "bevel",
                                    "miterLimit": 21,
                                    "padding": 2,
                                    "stroke": "#9a4b00",
                                    "strokeThickness": 2
                                },
                            "text": "adds more on the reels.",
                            "anchorX": 0.5,
                        },
                    }
                },
                "bgPreview2": {
                    "name": "bgPreview2",
                    "x": 1410,
                    "y": 260,

                    "anchorX": 0.5,
                    "texts": {
                        "pw3":{
                            "x": 192-309-75,
                            "y": 200+60,
                            "font": "UNIVERSAL-SERIF",
                                "style":{
                                    "dropShadow": true,
                                    "dropShadowAlpha": 0.8,
                                    "dropShadowAngle": 1.6,
                                    "dropShadowBlur": 6,
                                    "dropShadowColor": "#201105",
                                    "dropShadowDistance": 0,
                                    "fill": [
                                        "#a45018",
                                        "#e0bd38",
                                        "#fffab4",
                                        "#e4b137",
                                        "#f0f2be",
                                        "#ffff26",
                                        "#ffffd8",
                                        "#ffff8c",
                                        "#ffa500",
                                        "#e36e00",
                                        "#fffa82",
                                        "#9a4b00"
                                    ],
                                    "fontFamily": "UNIVERSAL-SERIF",
                                    "fontSize": 30,
                                    "fontWeight": "bold",
                                    "letterSpacing": 2,
                                    "lineJoin": "bevel",
                                    "miterLimit": 21,
                                    "padding": 2,
                                    "stroke": "#9a4b00",
                                    "strokeThickness": 3
                                },
                            "text": "Thor",
                            "anchorX": 0.5,
                        },
                        "pw3a":{
                            "x": 192-309-75,
                            "y": 260+60,
                            "font": "UNIVERSAL-SERIF",
                                "style":{
                                    "dropShadow": true,
                                    "dropShadowAlpha": 0.8,
                                    "dropShadowAngle": 1.6,
                                    "dropShadowBlur": 6,
                                    "dropShadowColor": "#201105",
                                    "dropShadowDistance": 0,
                                    "fill": [
                                        "#a45018",
                                        "#e0bd38",
                                        "#fffab4",
                                        "#e4b137",
                                        "#f0f2be",
                                        "#ffff26",
                                        "#ffffd8",
                                        "#ffff8c",
                                        "#ffa500",
                                        "#e36e00",
                                        "#fffa82",
                                        "#9a4b00"
                                    ],
                                    "fontFamily": "UNIVERSAL-SERIF",
                                    "fontSize": 17,
                                    "fontWeight": "bold",
                                    "letterSpacing": 2,
                                    "lineJoin": "bevel",
                                    "miterLimit": 21,
                                    "padding": 2,
                                    "stroke": "#9a4b00",
                                    "strokeThickness": 2
                                },
                            "text": "Turns symbols into",
                            "anchorX": 0.5,
                        },
                        "pw3b":{
                            "x": 192-309-75,
                            "y": 310+60,
                            "font": "UNIVERSAL-SERIF",
                                "style":{
                                    "dropShadow": true,
                                    "dropShadowAlpha": 0.8,
                                    "dropShadowAngle": 1.6,
                                    "dropShadowBlur": 6,
                                    "dropShadowColor": "#201105",
                                    "dropShadowDistance": 0,
                                    "fill": [
                                        "#a45018",
                                        "#e0bd38",
                                        "#fffab4",
                                        "#e4b137",
                                        "#f0f2be",
                                        "#ffff26",
                                        "#ffffd8",
                                        "#ffff8c",
                                        "#ffa500",
                                        "#e36e00",
                                        "#fffa82",
                                        "#9a4b00"
                                    ],
                                    "fontFamily": "UNIVERSAL-SERIF",
                                    "fontSize": 17,
                                    "fontWeight": "bold",
                                    "letterSpacing": 2,
                                    "lineJoin": "bevel",
                                    "miterLimit": 21,
                                    "padding": 2,
                                    "stroke": "#9a4b00",
                                    "strokeThickness": 2
                                },
                            "text": "Highest Paying symbol.",
                            "anchorX": 0.5,
                        },
                        "pw4":{
                            "x": 425-309+ 85,
                            "y": 200+60,
                            "font": "UNIVERSAL-SERIF",
                                "style":{
                                    "dropShadow": true,
                                    "dropShadowAlpha": 0.8,
                                    "dropShadowAngle": 1.6,
                                    "dropShadowBlur": 6,
                                    "dropShadowColor": "#201105",
                                    "dropShadowDistance": 0,
                                    "fill": [
                                        "#a45018",
                                        "#e0bd38",
                                        "#fffab4",
                                        "#e4b137",
                                        "#f0f2be",
                                        "#ffff26",
                                        "#ffffd8",
                                        "#ffff8c",
                                        "#ffa500",
                                        "#e36e00",
                                        "#fffa82",
                                        "#9a4b00"
                                    ],
                                    "fontFamily": "UNIVERSAL-SERIF",
                                    "fontSize": 30,
                                    "fontWeight": "bold",
                                    "letterSpacing": 2,
                                    "lineJoin": "bevel",
                                    "miterLimit": 21,
                                    "padding": 2,
                                    "stroke": "#9a4b00",
                                    "strokeThickness": 2
                                },
                            "text": "Odin",
                            "anchorX": 0.5,
                        },
                        "pw4a":{
                            "x": 425-309+ 85,
                            "y": 260+60,
                            "font": "UNIVERSAL-SERIF",
                                "style":{
                                    "dropShadow": true,
                                    "dropShadowAlpha": 0.8,
                                    "dropShadowAngle": 1.6,
                                    "dropShadowBlur": 6,
                                    "dropShadowColor": "#201105",
                                    "dropShadowDistance": 0,
                                    "fill": [
                                        "#a45018",
                                        "#e0bd38",
                                        "#fffab4",
                                        "#e4b137",
                                        "#f0f2be",
                                        "#ffff26",
                                        "#ffffd8",
                                        "#ffff8c",
                                        "#ffa500",
                                        "#e36e00",
                                        "#fffa82",
                                        "#9a4b00"
                                    ],
                                    "fontFamily": "UNIVERSAL-SERIF",
                                    "fontSize": 17,
                                    "fontWeight": "bold",
                                    "letterSpacing": 2,
                                    "lineJoin": "bevel",
                                    "miterLimit": 21,
                                    "padding": 2,
                                    "stroke": "#9a4b00",
                                    "strokeThickness": 2
                                },
                            "text": "Turns symbols into",
                            "anchorX": 0.5,
                        },
                        "pw4b":{
                            "x": 425-309+ 85,
                            "y": 310+60,
                            "font": "UNIVERSAL-SERIF",
                                "style":{
                                    "dropShadow": true,
                                    "dropShadowAlpha": 0.8,
                                    "dropShadowAngle": 1.6,
                                    "dropShadowBlur": 6,
                                    "dropShadowColor": "#201105",
                                    "dropShadowDistance": 0,
                                    "fill": [
                                        "#a45018",
                                        "#e0bd38",
                                        "#fffab4",
                                        "#e4b137",
                                        "#f0f2be",
                                        "#ffff26",
                                        "#ffffd8",
                                        "#ffff8c",
                                        "#ffa500",
                                        "#e36e00",
                                        "#fffa82",
                                        "#9a4b00"
                                    ],
                                    "fontFamily": "UNIVERSAL-SERIF",
                                    "fontSize": 17,
                                    "fontWeight": "bold",
                                    "letterSpacing": 2,
                                    "lineJoin": "bevel",
                                    "miterLimit": 21,
                                    "padding": 2,
                                    "stroke": "#9a4b00",
                                    "strokeThickness": 2
                                },
                            "text": "Multiplier Wilds",
                            "anchorX": 0.5,
                        },
                        "pw4c":{
                            "x": 425-309+ 85,
                            "y": 360+60,
                            "font": "UNIVERSAL-SERIF",
                                "style":{
                                    "dropShadow": true,
                                    "dropShadowAlpha": 0.8,
                                    "dropShadowAngle": 1.6,
                                    "dropShadowBlur": 6,
                                    "dropShadowColor": "#201105",
                                    "dropShadowDistance": 0,
                                    "fill": [
                                        "#a45018",
                                        "#e0bd38",
                                        "#fffab4",
                                        "#e4b137",
                                        "#f0f2be",
                                        "#ffff26",
                                        "#ffffd8",
                                        "#ffff8c",
                                        "#ffa500",
                                        "#e36e00",
                                        "#fffa82",
                                        "#9a4b00"
                                    ],
                                    "fontFamily": "UNIVERSAL-SERIF",
                                    "fontSize": 17,
                                    "fontWeight": "bold",
                                    "letterSpacing": 2,
                                    "lineJoin": "bevel",
                                    "miterLimit": 21,
                                    "padding": 2,
                                    "stroke": "#9a4b00",
                                    "strokeThickness": 2
                                },
                            "text": "(increasing during Free Spins).",
                            "anchorX": 0.5,
                        },
                    }
                },
                "logo": {
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
                    "font": "UNIVERSAL-SERIF",
                    "style":{
                        "dropShadow": true,
                        "dropShadowAlpha": 0.8,
                        "dropShadowAngle": 1.6,
                        "dropShadowBlur": 6,
                        "dropShadowColor": "#201105",
                        "dropShadowDistance": 0,
                        "fill": [
                            "#a45018",
                            "#e0bd38",
                            "#fffab4",
                            "#e4b137",
                            "#f0f2be",
                            "#ffff26",
                            "#ffffd8",
                            "#ffff8c",
                            "#ffa500",
                            "#e36e00",
                            "#fffa82",
                            "#9a4b00"
                        ],
                        "fontFamily": "UNIVERSAL-SERIF",
                        "fontSize": 25,
                        "fontWeight": "bold",
                        "letterSpacing": 2,
                        "lineJoin": "bevel",
                        "miterLimit": 21,
                        "padding": 2,
                        "stroke": "#9a4b00",
                        "strokeThickness": 2
                    },
                    "text": ".wqdwe",
                    "anchorX": .5
                },
                "msg2": {
                    "x": 960,
                    "y": 440,
                    "fill": "#ffffff",
                    "font": "UNIVERSAL-SERIF",
                    "style":{
                        "dropShadow": true,
                        "dropShadowAlpha": 0.8,
                        "dropShadowAngle": 1.6,
                        "dropShadowBlur": 6,
                        "dropShadowColor": "#201105",
                        "dropShadowDistance": 0,
                        "fill": [
                            "#a45018",
                            "#e0bd38",
                            "#fffab4",
                            "#e4b137",
                            "#f0f2be",
                            "#ffff26",
                            "#ffffd8",
                            "#ffff8c",
                            "#ffa500",
                            "#e36e00",
                            "#fffa82",
                            "#9a4b00"
                        ],
                        "fontFamily": "UNIVERSAL-SERIF",
                        "fontSize": 25,
                        "fontWeight": "bold",
                        "letterSpacing": 2,
                        "lineJoin": "bevel",
                        "miterLimit": 19,
                        "padding": 2,
                        "stroke": "#9a4b00",
                        "strokeThickness": 2
                    },
                    "text": ".ewfwefewf",
                    "anchorX": .5
                }
            },
            "buttons": {
                "yes": {
                    "name": "yesButton",
                    "x": 1100,
                    "y": 930,
                    "evt": "doOk"
                },
                "myAccount": {
                    "name": "genericBtn",
                    "x": 960,
                    "y": 930,
                    "evt": "doMyAccount",
                    "texts": {
                        "noLabel": {
                            "x": 0,
                            "y": -13,
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
                    "y": 930,
                    "evt": "doKo"
                },
                "ok": {
                    "name": "genericBtn",
                    "x": 960,
                    "anchorX": .5,
                    "y": 930,
                    "evt": "doOk",
                    "texts": {
                        "noLabel": {
                            "x": -3,
                            "y": -13,
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
                    "fill": "#00E2E2",
                    "font": "FuturaPT-Heavy",
                    "fontSize":"28px",
                    "text": ".wqdwe",
                    "anchorX": .5
                },
                "msgFR2": {
                    "x": 960,
                    "y": 270,
                    "fill": "#00E2E2",
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
                    "y": 920,
                    "evt": "doOk",
                    "texts": {
                        "noLabel": {
                            "x": 0,
                            "y": -20,
                            "fill": "#ffffff",
                            "font": "FuturaPT-Heavy",
                            "fontSize":"30px",
                            "text": "Use now",
                            "anchorX": .5
                        }
                    }
                },
                "no": {
                    "name": "genericBtn",
                    "x": 775,
                    "y": 920,
                    "evt": "doKo",
                    "texts": {
                        "noLabel": {
                            "x": 0,
                            "y": -20,
                            "fill": "#ffffff",
                            "font": "FuturaPT-Heavy",
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
                    "y": 920,
                    "evt": "doOk",
                    "texts": {
                        "noLabel": {
                            "x": 0,
                            "y": -20,
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
        "msgBoxFeature": {
            "visible":false,
            "eventBlock":true,
            "selectorY":300,
            "selectorX":1060,
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
                },
                "normalBF": {
                    "name": "normalBF",
                    "x": 600,
                    "y": 630,
                    "anchorX": .5,
                    "anchorY": .5,
                    "scaleX":2.5,
                    "scaleY":2.5

                },
                "highBF": {
                    "name": "highBF",
                    "x": 960,
                    "y": 630,
                    "anchorX": .5,
                    "anchorY": .5,
                    "scaleX":2.5,
                    "scaleY":2.5
                },
                "superBF": {
                    "name": "superBF",
                    "x": 1330,
                    "y": 630,
                    "anchorX": .5,
                    "anchorY": .5,
                    "scaleX":2.5,
                    "scaleY":2.5
                },
            },
             "texts": {
                            "msgName": {
                                "x": 960,
                                "y": 190,
                                "fill": "#ffffff",
                    "font": "UNIVERSAL-SERIF",
                    "style":{
                        "dropShadow": true,
                        "dropShadowAlpha": 0.8,
                        "dropShadowAngle": 1.6,
                        "dropShadowBlur": 6,
                        "dropShadowColor": "#201105",
                        "dropShadowDistance": 0,
                        "fill": [
                            "#a45018",
                            "#e0bd38",
                            "#fffab4",
                            "#e4b137",
                            "#f0f2be",
                            "#ffff26",
                            "#ffffd8",
                            "#ffff8c",
                            "#ffa500",
                            "#e36e00",
                            "#fffa82",
                            "#9a4b00"
                        ],
                        "fontFamily": "UNIVERSAL-SERIF",
                        "fontSize": 30,
                        "fontWeight": "bold",
                        "letterSpacing": 2,
                        "lineJoin": "bevel",
                        "miterLimit": 21,
                        "padding": 2,
                        "stroke": "#9a4b00",
                        "strokeThickness": 2
                    },
                                "text": "",
                                "anchorX": .5
                            },
                            "msgF1": {
                                "x": 960,
                                "y": 240,
                                "fill": "#ffffff",
                    "font": "UNIVERSAL-SERIF",
                    "style":{
                        "dropShadow": true,
                        "dropShadowAlpha": 0.8,
                        "dropShadowAngle": 1.6,
                        "dropShadowBlur": 6,
                        "dropShadowColor": "#201105",
                        "dropShadowDistance": 0,
                        "fill": [
                            "#a45018",
                            "#e0bd38",
                            "#fffab4",
                            "#e4b137",
                            "#f0f2be",
                            "#ffff26",
                            "#ffffd8",
                            "#ffff8c",
                            "#ffa500",
                            "#e36e00",
                            "#fffa82",
                            "#9a4b00"
                        ],
                        "fontFamily": "UNIVERSAL-SERIF",
                        "fontSize": 25,
                        "fontWeight": "bold",
                        "letterSpacing": 2,
                        "lineJoin": "bevel",
                        "miterLimit": 21,
                        "padding": 2,
                        "stroke": "#9a4b00",
                        "strokeThickness": 2
                    },
                                "text": "-",
                                "anchorX": .5
                            },
                            "msgF2": {
                                "x": 960,
                                "y": 360,
                                "fill": "#ffffff",
                    "font": "UNIVERSAL-SERIF",
                    "style":{
                        "dropShadow": true,
                        "dropShadowAlpha": 0.8,
                        "dropShadowAngle": 1.6,
                        "dropShadowBlur": 6,
                        "dropShadowColor": "#201105",
                        "dropShadowDistance": 0,
                        "fill": [
                            "#a45018",
                            "#e0bd38",
                            "#fffab4",
                            "#e4b137",
                            "#f0f2be",
                            "#ffff26",
                            "#ffffd8",
                            "#ffff8c",
                            "#ffa500",
                            "#e36e00",
                            "#fffa82",
                            "#9a4b00"
                        ],
                        "fontFamily": "UNIVERSAL-SERIF",
                        "fontSize": 25,
                        "fontWeight": "bold",
                        "letterSpacing": 2,
                        "lineJoin": "bevel",
                        "miterLimit": 21,
                        "padding": 2,
                        "stroke": "#9a4b00",
                        "strokeThickness": 2
                    },
                                "text": "",
                                "anchorX": .5
                            },
                            "msgF3": {
                                "x": 960,
                                "y": 380,
                                "fill": "#ffffff",
                    "font": "UNIVERSAL-SERIF",
                    "style":{
                        "dropShadow": true,
                        "dropShadowAlpha": 0.8,
                        "dropShadowAngle": 1.6,
                        "dropShadowBlur": 6,
                        "dropShadowColor": "#201105",
                        "dropShadowDistance": 0,
                        "fill": [
                            "#a45018",
                            "#e0bd38",
                            "#fffab4",
                            "#e4b137",
                            "#f0f2be",
                            "#ffff26",
                            "#ffffd8",
                            "#ffff8c",
                            "#ffa500",
                            "#e36e00",
                            "#fffa82",
                            "#9a4b00"
                        ],
                        "fontFamily": "UNIVERSAL-SERIF",
                        "fontSize": 28,
                        "fontWeight": "bold",
                        "letterSpacing": 2,
                        "lineJoin": "bevel",
                        "miterLimit": 21,
                        "padding": 2,
                        "stroke": "#9a4b00",
                        "strokeThickness": 2
                    },
                                "text": "",
                                "anchorX": .5
                            },
                            "msgF45": {
                                "x": 960,
                                "y": 420,
                                "fill": "#ffffff",
                    "font": "UNIVERSAL-SERIF",
                    "style":{
                        "dropShadow": true,
                        "dropShadowAlpha": 0.8,
                        "dropShadowAngle": 1.6,
                        "dropShadowBlur": 6,
                        "dropShadowColor": "#201105",
                        "dropShadowDistance": 0,
                        "fill": [
                            "#a45018",
                            "#e0bd38",
                            "#fffab4",
                            "#e4b137",
                            "#f0f2be",
                            "#ffff26",
                            "#ffffd8",
                            "#ffff8c",
                            "#ffa500",
                            "#e36e00",
                            "#fffa82",
                            "#9a4b00"
                        ],
                        "fontFamily": "UNIVERSAL-SERIF",
                        "fontSize": 25,
                        "fontWeight": "bold",
                        "letterSpacing": 2,
                        "lineJoin": "bevel",
                        "miterLimit": 21,
                        "padding": 2,
                        "stroke": "#9a4b00",
                        "strokeThickness": 2
                    },
                                "text": "",
                                "anchorX": .5
                            },
                            "msgF4": {
                                "x": 960,
                                "y": 400,
                                "fill": "#ffffff",
                    "font": "UNIVERSAL-SERIF",
                    "style":{
                        "dropShadow": true,
                        "dropShadowAlpha": 0.8,
                        "dropShadowAngle": 1.6,
                        "dropShadowBlur": 6,
                        "dropShadowColor": "#201105",
                        "dropShadowDistance": 0,
                        "fill": [
                            "#a45018",
                            "#e0bd38",
                            "#fffab4",
                            "#e4b137",
                            "#f0f2be",
                            "#ffff26",
                            "#ffffd8",
                            "#ffff8c",
                            "#ffa500",
                            "#e36e00",
                            "#fffa82",
                            "#9a4b00"
                        ],
                        "fontFamily": "UNIVERSAL-SERIF",
                        "fontSize": 25,
                        "fontWeight": "bold",
                        "letterSpacing": 2,
                        "lineJoin": "bevel",
                        "miterLimit": 21,
                        "padding": 2,
                        "stroke": "#9a4b00",
                        "strokeThickness": 2
                    },
                                "text": "",
                                "anchorX": .5
                            },
                            "msgF5": {
                                "x": 960,
                                "y": 440,
                                "fill": "#ffffff",
                    "font": "UNIVERSAL-SERIF",
                    "style":{
                        "dropShadow": true,
                        "dropShadowAlpha": 0.8,
                        "dropShadowAngle": 1.6,
                        "dropShadowBlur": 6,
                        "dropShadowColor": "#201105",
                        "dropShadowDistance": 0,
                        "fill": [
                            "#a45018",
                            "#e0bd38",
                            "#fffab4",
                            "#e4b137",
                            "#f0f2be",
                            "#ffff26",
                            "#ffffd8",
                            "#ffff8c",
                            "#ffa500",
                            "#e36e00",
                            "#fffa82",
                            "#9a4b00"
                        ],
                        "fontFamily": "UNIVERSAL-SERIF",
                        "fontSize": 25,
                        "fontWeight": "bold",
                        "letterSpacing": 2,
                        "lineJoin": "bevel",
                        "miterLimit": 21,
                        "padding": 2,
                        "stroke": "#9a4b00",
                        "strokeThickness": 2
                    },
                                "text": "",
                                "anchorX": .5
                            },
                            "msgF51": {
                                "x": 960,
                                "y": 460,
                                "fill": "#ffffff",
                    "font": "UNIVERSAL-SERIF",
                    "style":{
                        "dropShadow": true,
                        "dropShadowAlpha": 0.8,
                        "dropShadowAngle": 1.6,
                        "dropShadowBlur": 6,
                        "dropShadowColor": "#201105",
                        "dropShadowDistance": 0,
                        "fill": [
                            "#a45018",
                            "#e0bd38",
                            "#fffab4",
                            "#e4b137",
                            "#f0f2be",
                            "#ffff26",
                            "#ffffd8",
                            "#ffff8c",
                            "#ffa500",
                            "#e36e00",
                            "#fffa82",
                            "#9a4b00"
                        ],
                        "fontFamily": "UNIVERSAL-SERIF",
                        "fontSize": 25,
                        "fontWeight": "bold",
                        "letterSpacing": 2,
                        "lineJoin": "bevel",
                        "miterLimit": 21,
                        "padding": 2,
                        "stroke": "#9a4b00",
                        "strokeThickness": 2
                    },
                                "text": "",
                                "anchorX": .5
                            },
                            "priceF": {
                    "x": 960,
                    "y": 837,
                                "fill": "#ffffff",
                    "font": "UNIVERSAL-SERIF",
                    "style":{
                        "dropShadow": true,
                        "dropShadowAlpha": 0.8,
                        "dropShadowAngle": 1.6,
                        "dropShadowBlur": 6,
                        "dropShadowColor": "#201105",
                        "dropShadowDistance": 0,
                        "fill": [
                            "#a45018",
                            "#e0bd38",
                            "#fffab4",
                            "#e4b137",
                            "#f0f2be",
                            "#ffff26",
                            "#ffffd8",
                            "#ffff8c",
                            "#ffa500",
                            "#e36e00",
                            "#fffa82",
                            "#9a4b00"
                        ],
                        "fontFamily": "UNIVERSAL-SERIF",
                        "fontSize": 22,
                        "fontWeight": "bold",
                        "letterSpacing": 2,
                        "lineJoin": "bevel",
                        "miterLimit": 21,
                        "padding": 2,
                        "stroke": "#9a4b00",
                        "strokeThickness": 2
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
                    "evt": "doOkRR",
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
    "premultiply":true,
    "newUI":true,
    "licence":true,
    "isMobile":true,
    "newComm":true,
    "slotEngine":"IntegratedSlots",
    "transparentUI":true,
    "engineNumbers":0,
    "newUI":true,
    "newComm":true,
    "log":true,
    "canSwipe":false,
    "fastPlayEnable":true,
    "comment_preview":"enable feature preview screen",
    "preview":true,
    "previewTout":45000,
    "spinType": "PixiMegaWayRRTumblingSpin",
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
    "lineType": "PixiMegaWayRRTumblingWin",
    "lineFrames":31,
    "lineFrames":19,
    "comment_lineWinAmtType":"lines/coinWinning class",
    "lineWinAmtType":"NormalLineWinAmount",
    "numReels": 6,
    "numIcons": 7 ,
    "numIconsOnTop": 1,
    "numIconsOnBottom":1,
    "icons": [25, 25, 25, 25, 25 ,25,25],
    "_spinResult":[[0,1,2,3,4],[5,6,7,8,9],[6,1,2,3,4],[9,1,2,3,4],[2,1,2,3,4]],
    "_spinResult":[[0,0,2,3],[11,5,7,8],[5,6,2,3],[2,9,2,3],[0,2,2,3]],
    "spinWithAlpha":.6,
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
    "wildType": "WildReel",
    "wildNum": [9],
    "wildReelRollbackSpinDelay": 500,
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
        "deltaX_0": 385,
        "deltaX": 189,
        "deltaY_0": 837 ,
        "deltaY": 104,
        "reelHYOffset":29
    },
    "icon": {
        "x": 0,
        "y": 0,
        "width": 189,
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
};
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
                            "bg": "godsOfAsgardMegaways/img/paytable/symbol_00.png", //symbol image
                            "payout_values": true //Whether symbol has payout values

                        },

                        {

                            "id": "symbol_01",
                            "bg": "godsOfAsgardMegaways/img/paytable/symbol_01.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_02",
                            "bg": "godsOfAsgardMegaways/img/paytable/symbol_02.png",
                            "payout_values": true

                        }


                    ],

                    [

                        {

                            "id": "symbol_03",
                            "bg": "godsOfAsgardMegaways/img/paytable/symbol_03.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_04",
                            "bg": "godsOfAsgardMegaways/img/paytable/symbol_04.png",
                            "payout_values": true

                        }

                    ],

                    [
                        {

                            "id": "symbol_05",
                            "bg": "godsOfAsgardMegaways/img/paytable/symbol_05.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_06",
                            "bg": "godsOfAsgardMegaways/img/paytable/symbol_06.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_07",
                            "bg": "godsOfAsgardMegaways/img/paytable/symbol_07.png",
                            "payout_values": true

                        }

                    ],

                    [

                        {
                            "id": "symbol_08",
                            "bg": "godsOfAsgardMegaways/img/paytable/symbol_08.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_09",
                            "bg": "godsOfAsgardMegaways/img/paytable/symbol_09.png",
                            "payout_values": true

                        }



                    ],
                    [
                        {
                            "id": "symbol_10",
                            "bg": "godsOfAsgardMegaways/img/paytable/symbol_10.png",
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
                            "bg": "godsOfAsgardMegaways/img/paytable/symbol_11.png",
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
                                "Gods",
                            ]
                        }
                    ],
                    [

                        {
                            "id": "symbol_13",
                            "bg": "godsOfAsgardMegaways/img/paytable/symbol_13.png",
                            "payout_values": false,
                            "text": [
                                "Freya",
                                "Can only appear on top reel, during base game and Free Spins.",
                                "Transform 2 to 4 symbols on reels 2 to 4 into Wilds.",
                                "Can appear on tumbles too.",
                            ]
                        }
                    ],
                    [

                        {
                            "id": "symbol_14",
                            "bg": "godsOfAsgardMegaways/img/paytable/symbol_14.png",
                            "payout_values": false,
                            "text": [
                                "Loki",
                                "Can only appear on top reel, during base game and Free Spins.",
                                "Transform 2 to 4 symbols on reels 1 to 4 into a random symbol picked from reel 1.",
                                "Can appear on tumbles too.",
                            ],

                        }
                    ],
                    [

                        {
                            "id": "symbol_15",
                            "bg": "godsOfAsgardMegaways/img/paytable/symbol_15.png",
                            "payout_values": false,
                            "text": [
                                "Thor",
                                "Can only appear on top reel, during base game and Free Spins.",
                                "Transform 3 to 4 symbols on reels 1 to 3 into the high symbol (cougar).",
                                "Can appear on tumbles too.",
                            ],

                        }
                    ],
                    [

                        {
                            "id": "symbol_16",
                            "bg": "godsOfAsgardMegaways/img/paytable/symbol_16.png",
                            "payout_values": false,
                            "text": [
                                "Odin",
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
                            "bg": "godsOfAsgardMegaways/img/paytable/symbol_12.png",
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
                    ]
                ]

            }

        },

        //Win Ways object
        {

            "win_ways": [ //key was previously symbol however need to differentiate between payout config & winways config

                //Each object represents an image, if you need more than 1 screenshot then just create another object (atm all text on winways screen is in first screenshot object)
                {

                    "bg": "godsOfAsgardMegaways/img/paytable/winways.png",
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