
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
    },
    "mobileButtonUnderlay": true
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
        "sprite": "fonts/fontNeon.png",
        "font": "fonts/fontNeon.xml"
    },
   "multiBmpFont":{
       "sprite": "fonts/multiplierCherry.png",
       "font": "fonts/multiplierCherry.xml"
   }
}

var extScripts={
    "webfont": "15px FuturaPT-Heavy",
    "webfont1": "15px FuturaPT-Book"
}

var gameAssets = {
    "assets": {
        "icon0": "neonJungle/img/symbol-00.png",
        "icon1": "neonJungle/img/symbol-01.png",
        "icon2": "neonJungle/img/symbol-02.png",
        "icon3": "neonJungle/img/symbol-03.png",
        "icon4": "neonJungle/img/symbol-04.png",
        "icon5": "neonJungle/img/symbol-05.png",
        "icon6": "neonJungle/img/symbol-06.png",
        "icon7": "neonJungle/img/symbol-07.png",
        "icon8": "neonJungle/img/symbol-08.png",
        "icon9": "neonJungle/img/symbol-09.png",
        "icon10": "neonJungle/img/symbol-10.png",
        "icon11": "neonJungle/img/symbol-11.png",
        "icon12": "neonJungle/img/symbol-12.png",
        "bicon0": "neonJungle/img/b-symbol-00.png",
        "bicon1": "neonJungle/img/b-symbol-01.png",
        "bicon2": "neonJungle/img/b-symbol-02.png",
        "bicon3": "neonJungle/img/b-symbol-03.png",
        "bicon4": "neonJungle/img/b-symbol-04.png",
        "bicon5": "neonJungle/img/b-symbol-05.png",
        "bicon6": "neonJungle/img/b-symbol-06.png",
        "bicon7": "neonJungle/img/b-symbol-07.png",
        "bicon8": "neonJungle/img/b-symbol-08.png",
        "bicon9": "neonJungle/img/b-symbol-09.png",
        "bicon10": "neonJungle/img/b-symbol-10.png",
        "bicon11": "neonJungle/img/b-symbol-11.png",
        "bicon12": "neonJungle/img/b-symbol-12.png",
        "line_0_00": "neonJungle/img/lines/payline_0_01.png",
        "line_0_01": "neonJungle/img/lines/payline_0_02.png",
        "line_0_02": "neonJungle/img/lines/payline_0_03.png",
        "line_0_03": "neonJungle/img/lines/payline_0_04.png",
        "line_0_04": "neonJungle/img/lines/payline_0_05.png",
        "line_0_05": "neonJungle/img/lines/payline_0_06.png",
        "line_0_06": "neonJungle/img/lines/payline_0_07.png",
        "line_0_07": "neonJungle/img/lines/payline_0_08.png",
        "line_0_08": "neonJungle/img/lines/payline_0_09.png",
        "line_0_09": "neonJungle/img/lines/payline_0_10.png",
        "line_0_10": "neonJungle/img/lines/payline_0_11.png",
        "line_0_11": "neonJungle/img/lines/payline_0_12.png",
        "line_0_12": "neonJungle/img/lines/payline_0_13.png",
        "line_0_13": "neonJungle/img/lines/payline_0_14.png",
        "line_0_14": "neonJungle/img/lines/payline_0_15.png",
        "line_0_15": "neonJungle/img/lines/payline_0_16.png",
        "line_0_16": "neonJungle/img/lines/payline_0_17.png",
        "line_0_17": "neonJungle/img/lines/payline_0_18.png",
        "line_0_18": "neonJungle/img/lines/payline_0_19.png",
        "line_0_19": "neonJungle/img/lines/payline_0_20.png",
        "IEFB1":"neonJungle/img/iefb1.png",
        "bgBlack": "gui/generic/img/mobile/png/black.png",
        "bottomBar": "gui/message-bar.png",
        "bgPanel": "neonJungle/img/bgPanel.png",
        "bgPanelGame": "neonJungle/img/bgPanel.png",
        "bgPreview":"neonJungle/img/info-screen.png",
        "freeRoundsPanel":"neonJungle/img/free-rounds.png",
        "bgAlpha": "neonJungle/img/alpha.png",
        "bigWin":"neonJungle/img/bigwin.png",
        "superWin":"neonJungle/img/super-bigwin.png",
        "megaWin":"neonJungle/img/mega-bigwin.png",
        "bg_r": "neonJungle/img/bg/base-right.png",
        "bg_l": "neonJungle/img/bg/base-left.png",
        "bg_b": "neonJungle/img/bg/base-bottom.png",
        "bg_t": "neonJungle/img/bg/base-top.png",
        "bg_m": "neonJungle/img/bg/base-main.png",
        "bg_r_b": "neonJungle/img/bonus/bg/bonus-base-right.png",
        "bg_l_b": "neonJungle/img/bonus/bg/bonus-base-left.png",
        "bg_b_b": "neonJungle/img/bonus/bg/bonus-base-bottom.png",
        "bg_t_b": "neonJungle/img/bonus/bg/bonus-base-top.png",
        "bg_m_b": "neonJungle/img/bonus/bg/bonus-base-main.png",
        "sel_01": "neonJungle/img/bonus/keno-balls/01-selected.png",
        "unS_01": "neonJungle/img/bonus/keno-balls/01-unselected.png",
        "sel_02": "neonJungle/img/bonus/keno-balls/02-selected.png",
        "unS_02": "neonJungle/img/bonus/keno-balls/02-unselected.png",
        "sel_03": "neonJungle/img/bonus/keno-balls/03-selected.png",
        "unS_03": "neonJungle/img/bonus/keno-balls/03-unselected.png",
        "sel_04": "neonJungle/img/bonus/keno-balls/04-selected.png",
        "unS_04": "neonJungle/img/bonus/keno-balls/04-unselected.png",
        "sel_05": "neonJungle/img/bonus/keno-balls/05-selected.png",
        "unS_05": "neonJungle/img/bonus/keno-balls/05-unselected.png",
        "sel_06": "neonJungle/img/bonus/keno-balls/06-selected.png",
        "unS_06": "neonJungle/img/bonus/keno-balls/06-unselected.png",
        "sel_07": "neonJungle/img/bonus/keno-balls/07-selected.png",
        "unS_07": "neonJungle/img/bonus/keno-balls/07-unselected.png",
        "sel_08": "neonJungle/img/bonus/keno-balls/08-selected.png",
        "unS_08": "neonJungle/img/bonus/keno-balls/08-unselected.png",
        "sel_09": "neonJungle/img/bonus/keno-balls/09-selected.png",
        "unS_09": "neonJungle/img/bonus/keno-balls/09-unselected.png",
        "sel_10": "neonJungle/img/bonus/keno-balls/10-selected.png",
        "unS_10": "neonJungle/img/bonus/keno-balls/10-unselected.png",
        "sel_11": "neonJungle/img/bonus/keno-balls/11-selected.png",
        "unS_11": "neonJungle/img/bonus/keno-balls/11-unselected.png",
        "sel_12": "neonJungle/img/bonus/keno-balls/12-selected.png",
        "unS_12": "neonJungle/img/bonus/keno-balls/12-unselected.png",
        "sel_13": "neonJungle/img/bonus/keno-balls/13-selected.png",
        "unS_13": "neonJungle/img/bonus/keno-balls/13-unselected.png",
        "sel_14": "neonJungle/img/bonus/keno-balls/14-selected.png",
        "unS_14": "neonJungle/img/bonus/keno-balls/14-unselected.png",
        "sel_15": "neonJungle/img/bonus/keno-balls/15-selected.png",
        "unS_15": "neonJungle/img/bonus/keno-balls/15-unselected.png",
        "sel_16": "neonJungle/img/bonus/keno-balls/16-selected.png",
        "unS_16": "neonJungle/img/bonus/keno-balls/16-unselected.png",
        "sel_17": "neonJungle/img/bonus/keno-balls/17-selected.png",
        "unS_17": "neonJungle/img/bonus/keno-balls/17-unselected.png",
        "sel_18": "neonJungle/img/bonus/keno-balls/18-selected.png",
        "unS_18": "neonJungle/img/bonus/keno-balls/18-unselected.png",
        "sel_19": "neonJungle/img/bonus/keno-balls/19-selected.png",
        "unS_19": "neonJungle/img/bonus/keno-balls/19-unselected.png",
        "sel_20": "neonJungle/img/bonus/keno-balls/20-selected.png",
        "unS_20": "neonJungle/img/bonus/keno-balls/20-unselected.png",
        "sel_21": "neonJungle/img/bonus/keno-balls/21-selected.png",
        "unS_21": "neonJungle/img/bonus/keno-balls/21-unselected.png",
        "sel_22": "neonJungle/img/bonus/keno-balls/22-selected.png",
        "unS_22": "neonJungle/img/bonus/keno-balls/22-unselected.png",
        "sel_23": "neonJungle/img/bonus/keno-balls/23-selected.png",
        "unS_23": "neonJungle/img/bonus/keno-balls/23-unselected.png",
        "sel_24": "neonJungle/img/bonus/keno-balls/24-selected.png",
        "unS_24": "neonJungle/img/bonus/keno-balls/24-unselected.png",
        "sel_25": "neonJungle/img/bonus/keno-balls/25-selected.png",
        "unS_25": "neonJungle/img/bonus/keno-balls/25-unselected.png",
        "sel_26": "neonJungle/img/bonus/keno-balls/26-selected.png",
        "unS_26": "neonJungle/img/bonus/keno-balls/26-unselected.png",
        "sel_27": "neonJungle/img/bonus/keno-balls/27-selected.png",
        "unS_27": "neonJungle/img/bonus/keno-balls/27-unselected.png",
        "sel_28": "neonJungle/img/bonus/keno-balls/28-selected.png",
        "unS_28": "neonJungle/img/bonus/keno-balls/28-unselected.png",
        "bal_01": "neonJungle/img/bonus/ball-call-numbers/ball-call-01.png",
        "bal_02": "neonJungle/img/bonus/ball-call-numbers/ball-call-02.png",
        "bal_03": "neonJungle/img/bonus/ball-call-numbers/ball-call-03.png",
        "bal_04": "neonJungle/img/bonus/ball-call-numbers/ball-call-04.png",
        "bal_05": "neonJungle/img/bonus/ball-call-numbers/ball-call-05.png",
        "bal_06": "neonJungle/img/bonus/ball-call-numbers/ball-call-06.png",
        "bal_07": "neonJungle/img/bonus/ball-call-numbers/ball-call-07.png",
        "bal_08": "neonJungle/img/bonus/ball-call-numbers/ball-call-08.png",
        "bal_09": "neonJungle/img/bonus/ball-call-numbers/ball-call-09.png",
        "bal_10": "neonJungle/img/bonus/ball-call-numbers/ball-call-10.png",
        "bal_11": "neonJungle/img/bonus/ball-call-numbers/ball-call-11.png",
        "bal_12": "neonJungle/img/bonus/ball-call-numbers/ball-call-12.png",
        "bal_13": "neonJungle/img/bonus/ball-call-numbers/ball-call-13.png",
        "bal_14": "neonJungle/img/bonus/ball-call-numbers/ball-call-14.png",
        "bal_15": "neonJungle/img/bonus/ball-call-numbers/ball-call-15.png",
        "bal_16": "neonJungle/img/bonus/ball-call-numbers/ball-call-16.png",
        "bal_17": "neonJungle/img/bonus/ball-call-numbers/ball-call-17.png",
        "bal_18": "neonJungle/img/bonus/ball-call-numbers/ball-call-18.png",
        "bal_19": "neonJungle/img/bonus/ball-call-numbers/ball-call-19.png",
        "bal_20": "neonJungle/img/bonus/ball-call-numbers/ball-call-20.png",
        "bal_21": "neonJungle/img/bonus/ball-call-numbers/ball-call-21.png",
        "bal_22": "neonJungle/img/bonus/ball-call-numbers/ball-call-22.png",
        "bal_23": "neonJungle/img/bonus/ball-call-numbers/ball-call-23.png",
        "bal_24": "neonJungle/img/bonus/ball-call-numbers/ball-call-24.png",
        "bal_25": "neonJungle/img/bonus/ball-call-numbers/ball-call-25.png",
        "bal_26": "neonJungle/img/bonus/ball-call-numbers/ball-call-26.png",
        "bal_27": "neonJungle/img/bonus/ball-call-numbers/ball-call-27.png",
        "bal_28": "neonJungle/img/bonus/ball-call-numbers/ball-call-28.png",
        "ext_01": "neonJungle/img/bonus/ball-call-numbers/01.png",
        "ext_02": "neonJungle/img/bonus/ball-call-numbers/02.png",
        "ext_03": "neonJungle/img/bonus/ball-call-numbers/03.png",
        "ext_04": "neonJungle/img/bonus/ball-call-numbers/04.png",
        "ext_05": "neonJungle/img/bonus/ball-call-numbers/05.png",
        "ext_06": "neonJungle/img/bonus/ball-call-numbers/06.png",
        "ext_07": "neonJungle/img/bonus/ball-call-numbers/07.png",
        "ext_08": "neonJungle/img/bonus/ball-call-numbers/08.png",
        "ext_09": "neonJungle/img/bonus/ball-call-numbers/09.png",
        "ext_10": "neonJungle/img/bonus/ball-call-numbers/10.png",
        "ext_11": "neonJungle/img/bonus/ball-call-numbers/11.png",
        "ext_12": "neonJungle/img/bonus/ball-call-numbers/12.png",
        "ext_13": "neonJungle/img/bonus/ball-call-numbers/13.png",
        "ext_14": "neonJungle/img/bonus/ball-call-numbers/14.png",
        "ext_15": "neonJungle/img/bonus/ball-call-numbers/15.png",
        "ext_16": "neonJungle/img/bonus/ball-call-numbers/16.png",
        "ext_17": "neonJungle/img/bonus/ball-call-numbers/17.png",
        "ext_18": "neonJungle/img/bonus/ball-call-numbers/18.png",
        "ext_19": "neonJungle/img/bonus/ball-call-numbers/19.png",
        "ext_20": "neonJungle/img/bonus/ball-call-numbers/20.png",
        "ext_21": "neonJungle/img/bonus/ball-call-numbers/21.png",
        "ext_22": "neonJungle/img/bonus/ball-call-numbers/22.png",
        "ext_23": "neonJungle/img/bonus/ball-call-numbers/23.png",
        "ext_24": "neonJungle/img/bonus/ball-call-numbers/24.png",
        "ext_25": "neonJungle/img/bonus/ball-call-numbers/25.png",
        "ext_26": "neonJungle/img/bonus/ball-call-numbers/26.png",
        "ext_27": "neonJungle/img/bonus/ball-call-numbers/27.png",
        "ext_28": "neonJungle/img/bonus/ball-call-numbers/28.png",
        "select_bubble": "neonJungle/img/bonus/select-bubble.png",
        "bingo": "neonJungle/img/bonus/bingo-win-message.png",
        "buttonBg":"gui/generic/img/desktop/png/cp-info-bar.png",
        "volOnButton": "gui/btnVolOn.png",
        "volOffButton": "gui/btnVolOff.png",
        "freeSpinPanel":"neonJungle/img/free-spins.png",
        "swipeImg":"gui/generic/img/mobile/png/swipe.png",
        "mult_4_symbol" : "neonJungle/img/paytable/circle-red.png",
        "circle_symbol" : "neonJungle/img/paytable/circle-green.png"
    },
    "localizedAssets":{
        "graphAsset": {
            "logo": {
                "lang": ["zs","ko","jp"],
                "img": "neonJungle/img/logo"
            }
        },
        "animAssets": {
            "logoFlash": {
                "lang": ["zs","ko","jp"],
                "json": "neonJungle/img/anim/logo",
                "sprite": "neonJungle/img/anim/logo"
            }
        }
    },
    "buttonsSpriteSheet": {
        "container-btn": {
            "sprite": "neonJungle/img/game-btn.png",
            "json": "neonJungle/img/game-btn.png",
            "w": 208,
            "h": 66
        },
        "yesButton": {
            "sprite": "neonJungle/img/yes-btn.png",
            "json": "neonJungle/img/yes-btn.png",
            "w": 54,
            "h": 52
        },
        "noButton": {
            "sprite": "neonJungle/img/no-btn.png",
            "json": "neonJungle/img/no-btn.png",
            "w": 50.3,
            "h": 52
        },
        "check": {
            "sprite": "neonJungle/img/radio-btns.png",
            "json": "neonJungle/img/radio-btns.png",
            "w": 64,
            "h": 32
        },
        "btnRandom": {
            "sprite": "neonJungle/img/bonus/bonus-btns-random.png",
            "json": "neonJungle/img/bonus/bonus-btns-random.png",
            "w": 172,
            "h": 72
        },
        "btnClear": {
            "sprite": "neonJungle/img/bonus/bonus-btns-clear.png",
            "json": "neonJungle/img/bonus/bonus-btns-clear.png",
            "w": 172,
            "h": 72
        },
        "btnStart": {
            "sprite": "neonJungle/img/bonus/bonus-btns-start.png",
            "json": "neonJungle/img/bonus/bonus-btns-start.png",
            "w": 172,
            "h": 72
        },
        "genericBtn":{
            "sprite": "gui/generic/img/generic-game-btn.png",
            "json": "gui/generic/img/generic-game-btn.png",
            "w": 210,
            "h": 68
        }
    },
    "animations": {
        "logoFlash": {
            "json": "neonJungle/img/anim/logo.json",
            "sprite": "neonJungle/img/anim/logo.png"
        },
        "blueS": {
            "json": "neonJungle/img/anim/blue.json",
            "sprite": "neonJungle/img/anim/blue.png"
        },
        "greenS": {
            "json": "neonJungle/img/anim/green.json",
            "sprite": "neonJungle/img/anim/green.png"
        },
        "pinkS": {
            "json": "neonJungle/img/anim/pink.json",
            "sprite": "neonJungle/img/anim/pink.png"
        },
        "purpleS": {
            "json": "neonJungle/img/anim/purple.json",
            "sprite": "neonJungle/img/anim/purple.png"
        },
        "yellowS": {
            "json": "neonJungle/img/anim/yellow.json",
            "sprite": "neonJungle/img/anim/yellow.png"
        },
        "anim0": {
            "json": "neonJungle/img/anim/symbol-00.json",
            "sprite": "neonJungle/img/anim/symbol-00.png"
        },
        "anim1": {
            "json": "neonJungle/img/anim/symbol-01.json",
            "sprite": "neonJungle/img/anim/symbol-01.png"
        },
        "anim2": {
            "json": "neonJungle/img/anim/symbol-02.json",
            "sprite": "neonJungle/img/anim/symbol-02.png"
        },
        "anim3": {
            "json": "neonJungle/img/anim/symbol-03.json",
            "sprite": "neonJungle/img/anim/symbol-03.png"
        },
        "anim4": {
            "json": "neonJungle/img/anim/symbol-04.json",
            "sprite": "neonJungle/img/anim/symbol-04.png"
        },
        "anim5": {
            "json": "neonJungle/img/anim/symbol-05.json",
            "sprite": "neonJungle/img/anim/symbol-05.png"
        },
        "anim6": {
            "json": "neonJungle/img/anim/symbol-06.json",
            "sprite": "neonJungle/img/anim/symbol-06.png"
        },
        "anim7": {
            "json": "neonJungle/img/anim/symbol-07.json",
            "sprite": "neonJungle/img/anim/symbol-07.png"
        },
        "anim8": {
            "json": "neonJungle/img/anim/symbol-08.json",
            "sprite": "neonJungle/img/anim/symbol-08.png"
        },
        "anim9": {
            "json": "neonJungle/img/anim/symbol-09.json",
            "sprite": "neonJungle/img/anim/symbol-09.png"
        },
        "anim10": {
            "json": "neonJungle/img/anim/symbol-10.json",
            "sprite": "neonJungle/img/anim/symbol-10.png"
        },
        "anim11": {
            "json": "neonJungle/img/anim/symbol-11.json",
            "sprite": "neonJungle/img/anim/symbol-11.png"
        },
        "anim12": {
            "json": "neonJungle/img/anim/symbol-12.json",
            "sprite": "neonJungle/img/anim/symbol-12.png"
        },
        "lights-random":{
            "json": "neonJungle/img/anim/win-circle-inactive.json",
            "sprite": "neonJungle/img/anim/win-circle-inactive.png"
        },
        "lights-reFocus":{
            "json": "neonJungle/img/anim/win-circle-02.json",
            "sprite": "neonJungle/img/anim/win-circle-02.png"
        },
        "lights-mult":{
            "json": "neonJungle/img/anim/win-circle-multiplyer.json",
            "sprite": "neonJungle/img/anim/win-circle-multiplyer.png"
        },
        "ball-call":{
            "json": "neonJungle/img/bonus/ball-call.json",
            "sprite": "neonJungle/img/bonus/ball-call.png"
        },
        "keno-stars-01":{
            "json": "neonJungle/img/bonus/keeno-stars-01.json",
            "sprite": "neonJungle/img/bonus/keeno-stars-01.png"
        },
        "keno-stars-02":{
            "json": "neonJungle/img/bonus/keeno-stars-02.json",
            "sprite": "neonJungle/img/bonus/keeno-stars-02.png"
        },
        "keno-stars-03":{
            "json": "neonJungle/img/bonus/keeno-stars-03.json",
            "sprite": "neonJungle/img/bonus/keeno-stars-03.png"
        },
        "keno-stars-04":{
            "json": "neonJungle/img/bonus/keeno-stars-04.json",
            "sprite": "neonJungle/img/bonus/keeno-stars-04.png"
        },
        "keno-stars-05":{
            "json": "neonJungle/img/bonus/keeno-stars-05.json",
            "sprite": "neonJungle/img/bonus/keeno-stars-05.png"
        },
        "keno-stars-06":{
            "json": "neonJungle/img/bonus/keeno-stars-06.json",
            "sprite": "neonJungle/img/bonus/keeno-stars-06.png"
        },
        "keno-stars-07":{
            "json": "neonJungle/img/bonus/keeno-stars-07.json",
            "sprite": "neonJungle/img/bonus/keeno-stars-07.png"
        },
        "keno-stars-08":{
            "json": "neonJungle/img/bonus/keeno-stars-08.json",
            "sprite": "neonJungle/img/bonus/keeno-stars-08.png"
        },
        "keno-stars-09":{
            "json": "neonJungle/img/bonus/keeno-stars-09.json",
            "sprite": "neonJungle/img/bonus/keeno-stars-09.png"
        },
        "keno-stars-10":{
            "json": "neonJungle/img/bonus/keeno-stars-10.json",
            "sprite": "neonJungle/img/bonus/keeno-stars-10.png"
        },
        "part-1": {
            "json": "neonJungle/img/anim/bronze-coin.json",
            "sprite": "neonJungle/img/anim/bronze-coin.png"
        },
        "part-2": {
            "json": "neonJungle/img/anim/silver-coin.json",
            "sprite": "neonJungle/img/anim/silver-coin.png"
        },
        "part-3": {
            "json": "neonJungle/img/anim/gold-coin.json",
            "sprite": "neonJungle/img/anim/gold-coin.png"
        },
        "f-part-1": {
            "json": "neonJungle/img/anim/bronze-coin-frwrd.json",
            "sprite": "neonJungle/img/anim/bronze-coin-frwrd.png"
        },
        "f-part-2": {
            "json": "neonJungle/img/anim/silver-coin-frwrd.json",
            "sprite": "neonJungle/img/anim/silver-coin-frwrd.png"
        },
        "f-part-3": {
            "json": "neonJungle/img/anim/gold-coin-frwrd.json",
            "sprite": "neonJungle/img/anim/gold-coin-frwrd.png"
        }
    },
    "importantSounds": {
        "spinClick": {
            "name": "neonJungle/sounds/spinClick.mp3",
            "volume": 3
        },
        "reelSound": {
            "name": "neonJungle/sounds/reelSound.mp3",
            "volume":2
        },
        "reelStop": {
            "name": "neonJungle/sounds/reelStop.mp3",
            "volume":.2
        },
        "slights-random": {
            "name": "neonJungle/sounds/winCircle_Inactive.mp3",
            "volume": 2
        }

    },
    "sounds": {
        "click": {
            "name": "neonJungle/sounds/click.mp3",
            "volume": 3
        },
        "randomClick": {
            "name": "neonJungle/sounds/randomHit.mp3",
            "volume": 1.2
        },
        "clearClick": {
            "name": "neonJungle/sounds/clear.mp3",
            "volume": .7
        },
        "startClick": {
            "name": "neonJungle/sounds/start.mp3",
            "volume": 1.3
        },
        "selection": {
            "name": "neonJungle/sounds/ballSelect.mp3",
            "volume": 1.3
        },
        "extraction": {
            "name": "neonJungle/sounds/extraction.mp3",
            "volume": 1.3
        },
        "lose": {
            "name": "neonJungle/sounds/lose.mp3",
            "volume": 2
        },
        "win_1": {
            "name": "neonJungle/sounds/win_1.mp3",
            "volume": 1.4
        },
        "win_2": {
            "name": "neonJungle/sounds/win_2.mp3",
            "volume": 1.4
        },
        "win_3": {
            "name": "neonJungle/sounds/win_3.mp3",
            "volume": 1.45
        },
        "win_4": {
            "name": "neonJungle/sounds/win_4.mp3",
            "volume": 1.5
        },
        "win_5": {
            "name": "neonJungle/sounds/win_5.mp3",
            "volume": 1.55
        },
        "win_6": {
            "name": "neonJungle/sounds/win_6.mp3",
            "volume": 1.6
        },
        "win_7": {
            "name": "neonJungle/sounds/win_7.mp3",
            "volume": 1.65
        },
        "win_8": {
            "name": "neonJungle/sounds/win_8.mp3",
            "volume": 1.7
        },
        "win_9": {
            "name": "neonJungle/sounds/win_9.mp3",
            "volume": 1.9
        },
        "win_10": {
            "name": "neonJungle/sounds/win_10.mp3",
            "volume": 2
        },
        "smbWin_0": {
            "name": "neonJungle/sounds/smbWin_0.mp3",
            "volume":3
        },
        "smbWin_1": {
            "name": "neonJungle/sounds/smbWin_0.mp3",
            "volume": 5
        },
        "smbWin_2": {
            "name": "neonJungle/sounds/smbWin_0.mp3",
            "volume": 5
        },
        "smbWin_3": {
            "name": "neonJungle/sounds/smbWin_0.mp3",
            "volume": 5
        },
        "smbWin_4": {
            "name": "neonJungle/sounds/smbWin_4.mp3",
            "volume": 7
        },
        "smbWin_5": {
            "name": "neonJungle/sounds/smbWin_5.mp3",
            "volume": 7
        },
        "smbWin_6": {
            "name": "neonJungle/sounds/smbWin_6.mp3",
            "volume": 6
        },
        "smbWin_7": {
            "name": "neonJungle/sounds/smbWin_7.mp3",
            "volume":5
        },
        "smbWin_8": {
            "name": "neonJungle/sounds/smbWin_8.mp3",
            "volume": 5
        },
        "smbWin_9": {
            "name": "neonJungle/sounds/smbWin_9.mp3",
            "volume": 4
        },
        "smbWin_10": {
            "name": "neonJungle/sounds/smbWin_10.mp3",
            "volume": 4
        },
        "smbWin_11": {
            "name": "neonJungle/sounds/smbWin_10.mp3",
            "volume": 4
        },
        "smbWin_12": {
            "name": "neonJungle/sounds/smbWin_12.mp3",
            "volume": 4
        },
        "winEffect_1": {
            "name": "neonJungle/sounds/centralWin/bigWin.mp3",
            "volume":1
        },
        "winEffect_2": {
            "name": "neonJungle/sounds/centralWin/superBigWin.mp3",
            "volume": 1.5
        },
        "winEffect_3": {
            "name": "neonJungle/sounds/centralWin/megaBigWin.mp3",
            "volume": 2
        },
        "fsWon": {
            "name": "neonJungle/sounds/introFs.mp3",
            "volume": 1
        },
        "bonus-intro": {
            "name": "neonJungle/sounds/introKeno.mp3",
            "volume":1
        },
        "incWin": {
            "name": "neonJungle/sounds/counter.mp3",
            "volume": .9,
            "loop": true
        },
        "line": {
            "name": "neonJungle/sounds/line.mp3",
            "volume": .5
        },
        "winBg": {
            "name": "neonJungle/sounds/centralWin/bgWin.wav",
            "volume": 1.3,
            "loop": true
        },
        "winFSBg": {
            "name": "neonJungle/sounds/centralWin/bgWin.wav",
            "volume": 1.3,
            "loop": true
        },
        "bigWinBg_1": {
            "name": "neonJungle/sounds/centralWin/bgBigWin.wav",
            "volume": 1.3,
            "loop": true
        },
        "bigWinBg_2": {
            "name": "neonJungle/sounds/centralWin/bgSuperBigWin.wav",
            "volume": 1.4,
            "loop": true
        },
        "bigWinBg_3": {
            "name": "neonJungle/sounds/centralWin/bgMegaBigWin.wav",
            "volume": 1.4,
            "loop": true
        },
        "winPanel": {
            "name": "neonJungle/sounds/winScreen.mp3",
            "volume": 1.5
        },
        "slights-reFocus": {
            "name": "neonJungle/sounds/winCircle.mp3",
            "volume": 4
        },
        "slights-mult": {
            "name": "neonJungle/sounds/winCircle_Multiplier.mp3",
            "volume": 4
        }
    },
    "bgSounds": {
        "bgSlot": {
            "name": "neonJungle/sounds/bg.mp3",
            "volume": .4
        },
        "bgKenoBonus": {
            "name": "neonJungle/sounds/bgKeno.mp3",
            "volume": .6
        },
        "bgFs": {
            "name": "neonJungle/sounds/bgFs.mp3",
            "volume": .8
        }
    },
    "video":{
        "promoVideo":"neonJungle/img/loading-screen.mp4"
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
                    "x": 1080,
                    "y": 104
                },
                "bg1": {
                    "name": "bg_l",
                    "x": 0,
                    "y": 104
                }
            }
        },
        "frame": {
            "visible":false,
            "graphAsset": {
                "bg4": {
                    "name": "bg_m",
                    "x": 200,
                    "y": 104
                }
            }
        },
        "reels": {},
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
                }
            }
        },
        "logo": {
            "visible":false,
            "graphAsset": {
                "logo": {
                    "name": "logo",
                    "x": 640,
                    "y": 64,
                    "anchorX":.5,
                    "anchorY":.5
                }
            }
        },
        "idleObjects":{
            "visible":false,
            "frequency":[1000,3000],
            "objects": {
                "s1": {
                    "name": "logoFlash",
                    "x": 640,
                    "y": 64,
                    "scaleX":10,
                    "scaleY":10,
                    "fps":24,
                    "prob":10
                },
                "s2": {
                    "name": "blueS",
                    "x": [10,200],
                    "y": [300,570],
                    "scaleX":[4,7],
                    "fps":[12,36],
                    "prob":30
                },
                "s3": {
                    "name": "greenS",
                    "x": [10,200],
                    "y": [300,570],
                    "scaleX":[4,7],
                    "fps":[12,36],
                    "prob":30
                },
                "s4": {
                    "name": "pinkS",
                    "x": [10,200],
                    "y": [300,570],
                    "scaleX":[4,7],
                    "fps":[12,36],
                    "prob":30
                },
                "s5": {
                    "name": "purpleS",
                    "x": [10,200],
                    "y": [300,570],
                    "scaleX":[4,7],
                    "fps":[12,36],
                    "prob":30
                },
                "s5": {
                    "name": "yellowS",
                    "x": [10,200],
                    "y": [300,570],
                    "scaleX":[4,7],
                    "fps":[12,36],
                    "prob":30
                },
                "s6": {
                    "name": "blueS",
                    "x": [1090,1280],
                    "y": [300,570],
                    "scaleX":[4,7],
                    "fps":[12,36],
                    "prob":30
                },
                "s7": {
                    "name": "greenS",
                    "x": [1090,1280],
                    "y": [300,570],
                    "scaleX":[4,7],
                    "fps":[12,36],
                    "prob":30
                },
                "s8": {
                    "name": "pinkS",
                    "x": [1090,1280],
                    "y": [300,570],
                    "scaleX":[4,7],
                    "fps":[12,36],
                    "prob":30
                },
                "s9": {
                    "name": "purpleS",
                    "x": [1090,1280],
                    "y": [300,570],
                    "scaleX":[4,7],
                    "fps":[12,36],
                    "prob":30
                },
                "s10": {
                    "name": "yellowS",
                    "x": [1090,1280],
                    "y": [300,570],
                    "scaleX":[4,7],
                    "fps":[12,36],
                    "prob":30
                }
            }
        },
        "KenoBonus": {
            "eventBlock": false,
            "visible": false,
            "name":"Keno light",
            "graphAsset": {
                "bgb": {
                    "name": "bg_r_b",
                    "x": 1080,
                    "y": 104
                },
                "bg1b": {
                    "name": "bg_l_b",
                    "x": 0,
                    "y": 104
                },
                "bg2b": {
                    "name": "bg_b_b",
                    "x": 0,
                    "y": 632
                },
                "bg3b": {
                    "name": "bg_t_b",
                    "x": 0,
                    "y": 0
                },
                "bg4": {
                    "name": "bg_m_b",
                    "x": 200,
                    "y": 104
                }
            },
            "texts": {
                "txtMultBonus": {
                    "x": 430,
                    "y": 18,
                    "bmpFont": "multiBmpFont",
                    "size": "45",
                    "text": "",
                    "anchorX": .5
                }            },
            "configuration": {
                "bgMusic": "bgKenoBonus",
                "tOutChests": 1000,
                "tOutLastChest": 1000,
                "panelDuration": 3000
            }
        },
        "panelBonus": {
            "eventBlock": true,
            "visible": false,
            "graphAsset": {
                "bgPanel": {
                    "name": "bgPanel",
                    "x": 640,
                    "y": 390,
                    "anchorX": .5,
                    "anchorY": .5
                }
            },
            "texts": {
                "txtChestPanel1": {
                    "x": 640,
                    "y": 320,
                    "fill": "#ffffff",
                    "font": "28px FuturaPT-Heavy",
                    "text": "Congratulations",
                    "anchorX": .5
                },
                "txtChestPanel2": {
                    "x": 640,
                    "y": 380,
                    "fill": "#ffffff",
                    "font": "24px FuturaPT-Heavy",
                    "text": "You've won a bonus round",
                    "anchorX": .5
                },
                "txtChestPanel3": {
                    "x": 640,
                    "y": 440,
                    "fill": "#ffffff",
                    "font": "24px FuturaPT-Heavy",
                    "text": "Good luck!",
                    "anchorX": .5
                }
            },
            "configuration": {
                "sound": "panelShow",
                "durationIn": 500,
                "durationOut": 2000
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
                    "font": "24px Arial,Helvetica sans-serif",
                    "fill": "#FFFFFF",
                    "text": "Balance:",
                    "anchorX": 1
                },
                "creditValue": {
                    "x": 125,
                    "y": 693,
                    "font": "24px Arial,Helvetica, sans-serif",
                    "fill": "#FFFFFF",
                    "anchorX": 0
                },
                "messages": {
                    "x": 670,
                    "y": 693,
                    "font": "24px Arial,Helvetica sans-serif",
                    "fill": "#FFFFFF",
                    "text": "Good luck",
                    "anchorX": .5
                },
                "time": {
                    "x": 1250,
                    "y": 693,
                    "anchorX":1,
                    "font": "24px Arial",
                    "fill": "#FFFFFF"
                }
            }
        },
        "scatter": {},
        "wild": {
        },
        "wins": {},
        "lights":{
        },
        "lines": {},
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
            "movingLogo":true,
            "graphAsset": {
                "frPanel":{
                    "name": "freeRoundsPanel",
                    "x": 640,
                    "y": 65,
                    "anchorX":.5,
                    "anchorY":.5
                }
            },
            "texts": {
                "frLabel": {
                    "x": 465,
                    "y": 16,
                    "fill": "#1A98E5",
                    "font": "13px Futura ,Arial",
                    "text": "Free Rounds:",
                    "anchorX": 1
                },
                "frValue": {
                    "x": 435,
                    "y": 30,
                    "fill": "#438EF9",
                    "font": "23px Futura ,Arial",
                    "text": "5",
                    "anchorX": 0.5
                },
                "frTotWonLabel": {
                    "x": 870,
                    "y": 16,
                    "fill": "#1A98E5",
                    "font": "13px Futura ,Arial",
                    "text": "Total won:",
                    "anchorX": 1
                },
                "frTotWonValue": {
                    "x": 840,
                    "y": 30,
                    "fill": "#438EF9",
                    "font": "23px Futura ,Arial",
                    "text": "£1234:00",
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
                    "y": 0,
                    "anchorX": .5
                }
            },
            "texts": {
                "fsLabel": {
                    "x": 465,
                    "y": 16,
                    "fill": "#1A98E5",
                    "font": "13px Futura ,Arial",
                    "text": "Free Spins",
                    "anchorX": 1
                },
                "fsValue": {
                    "x": 435,
                    "y": 30,
                    "fill": "#438EF9",
                    "font": "23px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                },
                "totWonLabel": {
                    "x": 870,
                    "y": 16,
                    "fill": "#1A98E5",
                    "font": "13px Futura ,Arial",
                    "text": "Total won",
                    "anchorX": 1
                },
                "totWonValue": {
                    "x": 840,
                    "y": 30,
                    "fill": "#438EF9",
                    "font": "23px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                }
            }
        },
        "fsWonPanel": {
            "visible": false,
            "fakeButton": true,
            "eventBlock": true,
            "duration": 5,
            "graphAsset": {
                "bgmsg": {
                    "name": "bgAlpha",
                    "x": 0,
                    "y": 0,
                    "alpha": .5
                },
                "bgFsWon": {
                    "name": "bgPanel",
                    "x": 640,
                    "y": 390,
                    "anchorX": .5,
                    "anchorY": .5
                }
            },
            "texts": {
                "fsWLabel": {
                    "x": 640,
                    "y": 310,
                    "fill": "#ffffff",
                    "font": "28px FuturaPT-Heavy",
                    "text": "You won",
                    "anchorX": .5
                },
                "fsValue1": {
                    "x": 640,
                    "y": 360,
                    "fill": "#ffffff",
                    "font": "28px FuturaPT-Heavy",
                    "text": "5",
                    "anchorX": .5
                },
                "fsWLabel1": {
                    "x": 640,
                    "y": 410,
                    "fill": "#ffffff",
                    "font": "28px FuturaPT-Heavy",
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
                    "y": 360,
                    "scaleX":1.5,
                    "scaleY":1.5,
                    "anchorX": .5,
                    "anchorY": .5
                }
            },
            "texts": {
                "frWLabelTitol": {
                    "x": 640,
                    "y": 240,
                    "fill": "#00E2E2",
                    "font": "14px Futura PT, Arial",
                    "text":"Free Rounds",
                    "anchorX": .5
                },
                "frWLabel": {
                    "x": 640,
                    "y": 270,
                    "fill": "#00E2E2",
                    "font": "18px Futura PT, Arial",
                    "text":"",
                    "align":"center",
                    "anchorX": .5
                },
                "frValue1": {
                    "x": 640,
                    "y": 340,
                    "fill": "#00E2E2",
                    "font": "24px Futura PT, Arial",
                    "text": "5",
                    "anchorX": .5
                },
                "frWLabel1": {
                    "x": 640,
                    "y": 370,
                    "fill": "#00E2E2",
                    "font": "18px Futura PT, Arial",
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
            "thresHolds": [400, 1000, 2000],
            "graphAsset": {
                "bgmsg": {
                    "name": "bgAlpha",
                    "x": 0,
                    "y": 0,
                    "alpha": .5
                },
                "group":{
                    "name":"centralFuntain"
                },
                "bigWin": {
                    "name": "bigWin",
                    "x": 635,
                    "y": 312,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "sBigWin": {
                    "name": "superWin",
                    "x": 635,
                    "y": 270,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "mBigWin": {
                    "name": "megaWin",
                    "x": 635,
                    "y": 270,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                }
            }
        },
        "centralLineWin": {
            "visible": false,
            "texts": {
                "lineWin": {
                    "x": 640,
                    "y": 450,
                    "bmpFont": "bmpFont",
                    "size": "33",
                    "text": "",
                    "anchorX": .5,
                    "anchorY": .5
                }
            }
        },
        "preview": {
            "visible":false,
            "eventBlock":true,
            "graphAsset": {
                "bgPreview": {
                    "name": "bgPreview",
                    "x": 0,
                    "y": 0
                },
                "ieFallBack1":{
                    "name": "IEFB1",
                    "x": 340,
                    "y": 300,
                    "anchorX":.5,
                    "visible":false
                },
                "logo": {
                    "name": "logo",
                    "x": 192,
                    "y": 74,
                    "anchorX":.5,
                    "anchorY":.5
                }
            },
            "videoAsset":{
                "promoVideo": {
                    "name": "promoVideo",
                    "x": 490,
                    "y": 422,
                    "width":500,
                    "height":280
                }
            },
            "texts": {
                "txtPrev3": {
                    "x": 480,
                    "y": 200,
                    "fill": "#ea00ea",
                    "font": "22px Futura PT, Arial",
                    "text": "The neon glimmer turning into neon glow on a feature symbol\ror on a winning combination will activate that feature or multiply the winline x4.",
                    "align":"center",
                    "anchorX":.5
                },
                "buttons": {}
            },
            "checkbox": {
                "name": "check",
                "text": "Don't show anymore",
                "font": "15px Arial",
                "color": "#ffffff",
                "x": 50,
                "y": 640,
                "evt": "chkEvt"
            },
            "buttons": {
                "closePreview": {
                    "name": "container-btn",
                    "x": 640,
                    "y": 658,
                    "evt": "doCloseP",
                    "texts": {
                        "closeLabel": {
                            "x": 0,
                            "y": -13,
                            "fill": "#ffffff",
                            "font": "20px Futura PT, Arial",
                            "text": "Continue",
                            "anchorX": .5
                        }
                    }
                }
            }
        },
        "soundReq": {
            "visible":false,
            "eventBlock":true,
            "graphAsset": {
                "bgmsg": {
                    "name": "bgAlpha",
                    "x": 0,
                    "y": 0
                }
            },
            "texts": {
                "msg1": {
                    "x": 640,
                    "y": 290,
                    "fill": "#ffffff",
                    "font": "24px FuturaPT-Book",
                    "text": "Activate sounds?",
                    "anchorX": .5
                }
            },
            "buttons": {
                "yb": {
                    "name": "genericBtn",
                    "x": 540,
                    "y": 565,
                    "evt": "doYes",
                    "texts": {
                        "closeLabel": {
                            "x": 0,
                            "y": -14,
                            "fill": "#FFFFFF",
                            "font": "20px Futura PT, Arial",
                            "text": "Yes",
                            "anchorX": .5
                        }
                    }
                },
                "nb": {
                    "name": "genericBtn",
                    "x": 740,
                    "y": 565,
                    "evt": "doNo",
                    "texts": {
                        "closeLabel": {
                            "x": 0,
                            "y": -14,
                            "fill": "#FFFFFF",
                            "font": "20px Futura PT, Arial",
                            "text": "No",
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
                    "font": "22px FuturaPT-Heavy",
                    "text": ".wqdwe",
                    "anchorX": .5
                },
                "msg2": {
                    "x": 640,
                    "y": 350,
                    "fill": "#ffffff",
                    "font": "20px FuturaPT-Heavy",
                    "text": ".ewfwefewf",
                    "anchorX": .5
                }
            },
            "buttons": {
                "yes": {
                    "name": "yesButton",
                    "x": 500,
                    "y": 537,
                    "evt": "doOk"
                },
                "myAccount": {
                    "name": "container-btn",
                    "x": 650,
                    "y": 537,
                    "evt": "doMyAccount",
                    "texts": {
                        "noLabel": {
                            "x": 0,
                            "y": -13,
                            "fill": "#ffffff",
                            "font": "20px  FuturaPT-Heavy",
                            "text": "My Account",
                            "anchorX": .5
                        }
                    }
                },
                "no": {
                    "name": "noButton",
                    "x": 775,
                    "y": 537,
                    "evt": "doKo"
                },
                "ok": {
                    "name": "container-btn",
                    "x": 640,
                    "anchorX": .5,
                    "y": 537,
                    "evt": "doOk",
                    "texts": {
                        "noLabel": {
                            "x": 0,
                            "y": -13,
                            "fill": "#ffffff",
                            "font": "20px  FuturaPT-Heavy",
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
                    "scaleX":1.5,
                    "scaleY":1.5
                }
            },
            "texts": {
                "msgFR1": {
                    "x": 640,
                    "y": 230,
                    "fill": "#00E2E2",
                    "font": "22px FuturaPT-Book",
                    "text": ".wqdwe",
                    "anchorX": .5
                },
                "msgFR2": {
                    "x": 640,
                    "y": 260,
                    "fill": "#00E2E2",
                    "font": "20px FuturaPT-Book",
                    "text": ".ewfwefewf",
                    "anchorX": .5
                }
            },
            "buttons": {
                "yes": {
                    "name": "container-btn",
                    "x": 500,
                    "y": 550,
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
                    "name": "container-btn",
                    "x": 775,
                    "y": 550,
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
                    "name": "container-btn",
                    "x": 640,
                    "anchorX": .5,
                    "y": 550,
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
        "swipeBox": {
            "visible":false,
            "eventBlock":true,
            "animAsset": {
            },
            "graphAsset": {
                    "bgmsg": {
                        "name": "bgBlack",
                        "x": 0,
                        "y": 0
                    },
                    "bgFsWon": {
                        "name": "swipeImg",
                        "x": 590,
                        "y": 350,
                        "width":350,
                        "height":350,
                        "angle":180,
                        "anchorX": .5,
                        "anchorY": .5,
                    }
            },
            "texts": {
                "msg1s": {
                    "x": 630,
                    "y": 100,
                    "fill": "#ffffff",
                    "font": "30px Arial",
                    "text": "Swipe down To full screen",
                    "anchorX": .5
                },
                "msg2s": {
                    "x": 630,
                    "y": 300,
                    "fill": "#ffffff",
                    "font": "40px Arial",
                    "text": "rotate to exit",
                    "anchorX": .5
                }
            },
            "buttons": {
                "ok": {
                    "name": "noButton",
                    "x": 640,
                    "y": 587,
                    "anchorX": .5,
                    "evt": "doNotFull"
                }
            }
        }

    }
}

var ReelConfig = {
    "engineNumbers":15,
    "slotEngine":"NeonEngine",
    "log":true,
    "canSwipe":false,
    "comment_preview":"enable feature preview screen",
    "preview":true,
    "previewTout":30000,
    "spinType": "Spin",
    "comment_winType":"spin class used by the game on line central win field",
    "winType": "SimpleWin",
    "comment_winTypeStatus":"spin class used by the game on status bar win field",
    "statusWinType": "BounceWin",
    "delayAfterWinAmt": 100,
    "comment_delayBeforeIdle": "after the first winning dicplay cycle with animation the engin starts the idle cycle with just win amount for each line and a symple winning HL",
    "delayBeforeIdle": 2000,
    "comment_idleLineTime": "single line time during idle cycle winning display",
    "idleLineTime": 1000,
    "comment__winTxtColors": "win amount counter colors",
    "winTxtColors": ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
    "comment_type of lines": "the class will handle line drawing",
    "lineType": "LineCherryBlast",
    "lineFrames":31,
    "lineFrames":20,
    "comment_lineWinAmtType":"lines/coinWinning class",
    "lineWinAmtType":"NormalLineWinAmount",
    "numReels": 5,
    "numIcons": 3,
    "numIconsOnTop": 1,
    "numIconsOnBottom":1,
    "icons": [25, 25, 25, 25, 25 ],
    "_spinResult":[[9,2,1,10,8],[9,2,1,10,8],[9,2,1,10,8],[9,2,1,10,8],[9,2,1,4,5]],
    "spinWithAlpha": .6,
    "spinConfig":{
        "es":{
            "stopEnabled":false,
            "reelSecondMovementTime":0.5,
            "reelLoopInterval":.17,
            "reelPreMovement": 4,
            "reelPreMovementTime": .2,
            "reelBaseInterval": 6,
            "reelStopInterval": 1,
            "reelSpinBounceMeasure": 40,
            "reelSpinBounceTime": .28,
            "reelSpinBounceForce": 1.2
        },
        "default":{
            "stopEnabled":true,
            "reelSecondMovementTime":0.4,
            "reelLoopInterval":.20,
            "reelPreMovement": 0,
            "reelPreMovementTime": 0,
            "reelBaseInterval": 2,
            "reelStopInterval": 1,
            "reelSpinBounceMeasure": 40,
            "reelSpinBounceTime": .28,
            "reelSpinBounceForce": 1.2
        }
    },
    "numIcon": 12,
    "loadTout": 30,
    "credits": "5000",
    "bet": "0.50",
    "animDelayAfterWild":1500,
    "freeRounds":"normal",
    "freeSpins":"NeonFreeSpins",
    "fsIcon": 11,
    "fsSpinDelay":750,
    "minFsSmbs":1,
    "scatterIcon": 10,
    "scatterType": "Scatter",
    "_twinReelsFeature":"normal",
    "wildNum": [],
    "winTxtClasses": [1, 2, 5, 10, 20, 50, 100, 300, 500, 1000],
    "smb_colors":[0xff33cc,0xcc33ff,0x0066ff,0x00ff99,0xffcc00,0xff33cc,0xcc33ff,0x0066ff,0x00ff99,0xffcc00,0xffcc00],
    "smbMinAnimTime":[.6,.6,.6,.6,1.5,1.5,1.5,1.5,1.5,1.5],
    "muteDuringWins":true,
    "keepShowingAnimation":true,
    "additionalPreText":"",
    "additionalPostText":"",
    "reel": {
        "deltaX_0": 200,
        "deltaX": 176,
        "deltaY_0": 632,
        "deltaY": 176,
        "time": [1]
    },
    "icon": {
        "x": 0,
        "y": 0,
        "width": 176,
        "height": 176
    }
}
var lineConfig = {
    "win": {
        "min": 2,
        "wild": 1,
        "initialDelay": 200,
        "delay": 100,
        "duration": 2000
    },
    "line": {
        "comment_linesNumber": "number of lines to draw in winning animation",
        "color": "0xFFD700",
        "tickBase": 5,
        "alpha": 1,
        "pointToPointSpeed": .5,
        "duration": 30,
        "showWinWithSmbColor": true,
        "multipleAnimation": [true, true, true, true, true, true, false, false, false, true, true, true],
        "lineColours": [0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff],
    }
}

var paytableAssets = {

	"bg" : "neonJungle/img/paytable/pt-base-main.png",

    "closeBtn": {

        "ypos": "140",
        "xpos": "1000"

    },

	"pagination" : {

		"ypos" : "580",
		"xpos" : "404",
		"checked" : "#FFFFFF",
		"unchecked" : "#000000"

	},

    "helpPath" : gameParams.pathCDN + 'premiumslots/remoteHelp.jsp?rPage=help/mobile/neonJungle/help_' + gameParams.lang,

    "translatePosition": true,

    "buttons" : [

		{
			"id" : "left",
			"ypos" : "400",
			"xpos" : "15",
			"bg_up" : "neonJungle/img/paytable/forward-btn-up.png",
			"bg_over" : "neonJungle/img/paytable/forward-btn-over.png",
			"bg_down" : "neonJungle/img/paytable/forward-btn-down.png",
			"direction" : -1
		},

		{
			"id" : "right",
			"ypos" : "400",
			"xpos" : "845",
			"bg_up" : "neonJungle/img/paytable/forward-btn-up.png",
			"bg_over" : "neonJungle/img/paytable/forward-btn-over.png",
			"bg_down" : "neonJungle/img/paytable/forward-btn-down.png",
			"direction" : 1
		}

	],

    "pages" : [
        {

            "gameguide" : true,
            "title" : "Neon Jungle Game Rules",
            "title_xpos" : "520",
            "title_ypos" : "115",
            "xpos" : "200",
            "ypos" : "185",
            "height" : "340",
            "width" : "830",
            "fill": "#00ffff",
            "font" : "FuturaPT-Book, Arial, sans-serif",
            "rtp": [
                "96.13",
                "96.13",
                "96.13"
            ]

        },
        {

            "symbols" : [

				{
					"id" : "symbol_00",
					"bg" : "neonJungle/img/symbol-00.png",
                    "xpos": "340",
                    "ypos": "220",
                    "height": "150px",
                    "width": "150px",
                    "text": {
                        "value": 0,
                        "xpos": "50",
                        "ypos": "145",
                        "width": "109",
                        "left_fill": "#00ffff",
                        "right_fill": "#ff00ff",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

				{
					"id" : "symbol_01",
					"bg" : "neonJungle/img/symbol-01.png",
                    "xpos": "490",
                    "ypos": "220",
                    "height": "150px",
                    "width": "150px",
                    "text": {
                        "value": 1,
                        "xpos": "50",
                        "ypos": "145",
                        "width": "109",
                        "left_fill": "#00ffff",
                        "right_fill": "#ff00ff",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

				{
					"id" : "symbol_02",
					"bg" : "neonJungle/img/symbol-02.png",
                    "xpos": "640",
                    "ypos": "220",
                    "height": "150px",
                    "width": "150px",
                    "text": {
                        "value": 2,
                        "xpos": "50",
                        "ypos": "145",
                        "width": "109",
                        "left_fill": "#00ffff",
                        "right_fill": "#ff00ff",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

				{
					"id" : "symbol_03",
					"bg" : "neonJungle/img/symbol-03.png",
                    "xpos": "790",
                    "ypos": "220",
                    "height": "150px",
                    "width": "150px",
                    "text": {
                        "value": 3,
                        "xpos": "50",
                        "ypos": "145",
                        "width": "109",
                        "left_fill": "#00ffff",
                        "right_fill": "#ff00ff",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                }

			],

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "515",
                    "width" : "500",
                    "fill" : "#FFFFFF",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols": [

                {
					"id" : "symbol_04",
					"bg" : "neonJungle/img/symbol-04.png",
                    "xpos": "255",
                    "ypos": "220",
                    "height": "150px",
                    "width": "150px",
                    "text": {
                        "value": 4,
                        "xpos": "50",
                        "ypos": "155",
                        "width": "109",
                        "left_fill": "#00ffff",
                        "right_fill": "#ff00ff",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
					"id" : "symbol_05",
					"bg" : "neonJungle/img/symbol-05.png",
                    "xpos": "405",
                    "ypos": "220",
                    "height": "150px",
                    "width": "150px",
                    "text": {
                        "value": 5,
                        "xpos": "50",
                        "ypos": "155",
                        "width": "109",
                        "left_fill": "#00ffff",
                        "right_fill": "#ff00ff",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

				{
					"id" : "symbol_06",
					"bg" : "neonJungle/img/symbol-06.png",
                    "xpos": "555",
                    "ypos": "220",
                    "height": "150px",
                    "width": "150px",
                    "text": {
                        "value": 6,
                        "xpos": "50",
                        "ypos": "155",
                        "width": "109",
                        "left_fill": "#00ffff",
                        "right_fill": "#ff00ff",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

				{
					"id" : "symbol_07",
					"bg" : "neonJungle/img/symbol-07.png",
                    "xpos": "705",
                    "ypos": "220",
                    "height": "150px",
                    "width": "150px",
                    "text": {
                        "value": 7,
                        "xpos": "50",
                        "ypos": "155",
                        "width": "109",
                        "left_fill": "#00ffff",
                        "right_fill": "#ff00ff",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
					"id" : "symbol_08",
					"bg" : "neonJungle/img/symbol-08.png",
                    "xpos": "855",
                    "ypos": "220",
                    "height": "150px",
                    "width": "150px",
                    "text": {
                        "value": 8,
                        "xpos": "50",
                        "ypos": "155",
                        "width": "109",
                        "left_fill": "#00ffff",
                        "right_fill": "#ff00ff",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

            ],

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "515",
                    "width" : "500",
                    "fill" : "#FFFFFF",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "videos": [

                {
                    height: '240',
                    width: 'auto',
                    styles: {
                        'position': 'absolute',
                        'top': '265px',
                        'left': '430px'
                    },
                    sources: [
                        {path: 'neonJungle/img/loading-screen.mp4', type: 'mp4'}
                    ]
                }

            ],

            "text": [

                {
                    "value": "Special Features - General Image",
                    "xpos" : "390",
                    "ypos" : "145",
                    "width" : "500",
                    "fill" : "#00ffff",
                    "font" : "FuturaPT-Heavy, Arial, sans-serif",
                    "size" : "22px",
                    "align" : "center"
                },

                {
                    "value": "The neon glimmer turning into neon glow on a feature symbol or on a winning combination will activate that feature or multiply the winline x4.",
                    "xpos" : "315",
                    "ypos" : "180",
                    "width" : "650",
                    "fill" : "#00ffff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "22px",
                    "align" : "center"
                },

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "515",
                    "width" : "500",
                    "fill" : "#FFFFFF",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols": [

                {
					"id" : "symbol_09",
					"bg" : "neonJungle/img/symbol-09.png",
                    "xpos": "350",
                    "ypos": "220",
                    "height": "150px",
                    "width": "150px"
                }

            ],

            "text": [

                {
                    "value": "Special Features - General Image",
                    "value": "Wild Symbol",
                    "xpos" : "500",
                    "ypos" : "250",
                    "width" : "500",
                    "fill" : "#00ffff",
                    "font" : "FuturaPT-Heavy, Arial, sans-serif",
                    "size" : "22px",
                    "align" : "center"
                },

                {
                    "value": "",
                    "value": "Wild symbols can complete winning combinations.",
                    "xpos" : "575",
                    "ypos" : "290",
                    "width" : "350",
                    "fill" : "#00ffff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "22px",
                    "align" : "center"
                },

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "515",
                    "width" : "500",
                    "fill" : "#FFFFFF",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols": [

                {
					"id" : "circlered",
					"bg" : "neonJungle/img/paytable/circle-red.png",
                    "xpos": "350",
                    "ypos": "220",
                    "height": "150px",
                    "width": "150px"
                }

            ],

            "text": [

                {
                    "value": "X4 Multiplier",
                    "xpos" : "500",
                    "ypos" : "250",
                    "width" : "500",
                    "fill" : "#00ffff",
                    "font" : "FuturaPT-Heavy, Arial, sans-serif",
                    "size" : "22px",
                    "align" : "center"
                },

                {
                    "value": "Neon glow appearing on a winning combination awards a x4 multiplier.\rThis will apply to all active win lines using this symbol.",
                    "xpos" : "575",
                    "ypos" : "290",
                    "width" : "350",
                    "fill" : "#00ffff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "22px",
                    "align" : "center"
                },

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "515",
                    "width" : "500",
                    "fill" : "#FFFFFF",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols": [

                {
					"id" : "symbol_10",
					"bg" : "neonJungle/img/symbol-10.png",
                    "xpos": "350",
                    "ypos": "220",
                    "height": "150px",
                    "width": "150px"
                },

                {
					"id" : "circlegreen",
					"bg" : "neonJungle/img/paytable/circle-green.png",
                    "xpos": "440",
                    "ypos": "210",
                    "height": "75px",
                    "width": "75px"
                }

            ],

            "text": [

                {
                    "value": "Scatter",
                    "xpos" : "500",
                    "ypos" : "250",
                    "width" : "500",
                    "fill" : "#00ffff",
                    "font" : "FuturaPT-Heavy, Arial, sans-serif",
                    "size" : "22px",
                    "align" : "center"
                },

                {
                    "value": "Neon glow appearing round a scatter symbol on any position awards 250 coins.\rMultiple scatter symbols showing on the reels will not increase the pay out.",
                    "xpos" : "575",
                    "ypos" : "290",
                    "width" : "350",
                    "fill" : "#00ffff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "22px",
                    "align" : "center"
                },

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "515",
                    "width" : "500",
                    "fill" : "#FFFFFF",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols": [

                {
					"id" : "symbol_11",
					"bg" : "neonJungle/img/symbol-11.png",
                    "xpos": "350",
                    "ypos": "220",
                    "height": "150px",
                    "width": "150px"
                },
                {
                    "id" : "circlegreen",
                    "bg" : "neonJungle/img/paytable/circle-green.png",
                    "xpos": "440",
                    "ypos": "210",
                    "height": "75px",
                    "width": "75px"
                }


            ],

            "text": [

                {
                    "value": "Free Spins",
                    "xpos" : "500",
                    "ypos" : "250",
                    "width" : "500",
                    "fill" : "#00ffff",
                    "font" : "FuturaPT-Heavy, Arial, sans-serif",
                    "size" : "22px",
                    "align" : "center"
                },

                {
                    "value": "Neon glow appearing around a free spin symbol on any position will award 6 free spins.\rMultiple free spin symbols showing on the reels will not increase the free spins awarded.",
                    "xpos" : "575",
                    "ypos" : "290",
                    "width" : "350",
                    "fill" : "#00ffff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "22px",
                    "align" : "center"
                },

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "515",
                    "width" : "500",
                    "fill" : "#FFFFFF",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols": [

                {
					"id" : "symbol_12",
					"bg" : "neonJungle/img/symbol-12.png",
                    "xpos": "350",
                    "ypos": "220",
                    "height": "150px",
                    "width": "150px"
                },

                {
					"id" : "circlegreen",
					"bg" : "neonJungle/img/paytable/circle-green.png",
                    "xpos": "440",
                    "ypos": "210",
                    "height": "75px",
                    "width": "75px"
                }

            ],

            "text": [

                {
                    "value": "Bonus",
                    "xpos" : "500",
                    "ypos" : "250",
                    "width" : "500",
                    "fill" : "#00ffff",
                    "font" : "FuturaPT-Heavy, Arial, sans-serif",
                    "size" : "22px",
                    "align" : "center"
                },

                {
                    "value": "Neon glow appearing on a Bonus symbol in any position on the reels will activate the Keno light bonus round.",
                    "xpos" : "575",
                    "ypos" : "290",
                    "width" : "350",
                    "fill" : "#00ffff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "22px",
                    "align" : "center"
                },

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "515",
                    "width" : "500",
                    "fill" : "#FFFFFF",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols": [
/*
                {
					"id" : "bonustitle",
					"bg" : "neonJungle/img/paytable/bonus-title.png",
                    "xpos": "300",
                    "ypos": "200",
                    "height": "auto",
                    "width": "300px"
                },
*/
                {
					"id" : "bonusscreenshot",
					"bg" : "neonJungle/img/paytable/bonus-screenshot.png",
                    "xpos": "300",
                    "ypos": "250",
                    "height": "auto",
                    "width": "300px"
                }

            ],

            "text": [

                {
                    "value": "Bonus Game",
                    "xpos" : "550",
                    "ypos" : "250",
                    "width" : "500",
                    "fill" : "#00ffff",
                    "font" : "FuturaPT-Heavy, Arial, sans-serif",
                    "size" : "22px",
                    "align" : "center"
                },

                {
                    "value": "Manually select or randomly select 10 numbers from the available 28.\rThere will be 15 numbers drawn randomly after pressing start.",
                    "xpos" : "625",
                    "ypos" : "290",
                    "width" : "350",
                    "fill" : "#00ffff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "22px",
                    "align" : "center"
                },

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "515",
                    "width" : "500",
                    "fill" : "#FFFFFF",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "text": [

                {
                    "value": "Bonus Game Paytable",
                    "xpos" : "500",
                    "ypos" : "250",
                    "width" : "500",
                    "fill" : "#00ffff",
                    "font" : "FuturaPT-Heavy, Arial, sans-serif",
                    "size" : "22px",
                    "align" : "center"
                },

                {
                    "value": "The amount won is dependent on the amount of numbers drawn that match the selection chose.\rThe amount that will be paid can be seen on the paytable in the game.",
                    "xpos" : "575",
                    "ypos" : "290",
                    "width" : "350",
                    "fill" : "#00ffff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "22px",
                    "align" : "center"
                },

                {
                    "value": "0<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10",
                    "xpos" : "375",
                    "ypos" : "220",
                    "width" : "50",
                    "fill" : "#00ffff",
                    "font" : "FuturaPT-Heavy, Arial, sans-serif",
                    "size" : "22px",
                    "align" : "right"
                },

                {
                    "value": "50<br>75<br>100<br>125<br>150<br>250<br>400<br>750<br>1500<br>7500<br>20000",
                    "xpos" : "435",
                    "ypos" : "220",
                    "width" : "100",
                    "fill" : "#ff00ff",
                    "font" : "FuturaPT-Heavy, Arial, sans-serif",
                    "size" : "22px",
                    "align" : "left"
                },

            ]

        },

        {

            "lines": [1, 10],
            "ypos": "265",
            "font" : "FuturaPT-Book, Arial, sans-serif",
            "text_colour": "#93d8fe",
            "checked_colour": "#ffffff",
            "unchecked_colour": "#ff00ff",

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "515",
                    "width" : "500",
                    "fill" : "#FFFFFF",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "lines": [11, 20],
            "ypos": "265",
            "font" : "FuturaPT-Book, Arial, sans-serif",
            "text_colour": "#93d8fe",
            "checked_colour": "#ffffff",
            "unchecked_colour": "#ff00ff",

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "515",
                    "width" : "500",
                    "fill" : "#FFFFFF",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        }

    ]

}
