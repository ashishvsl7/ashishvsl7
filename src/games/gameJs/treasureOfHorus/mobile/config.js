
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
        "sprite": "fonts/fontTOH.png",
        "font": "fonts/fontTOH.xml"
    }
}

var extScripts={
    "webfont": "15px FuturaPT-Heavy",
    "webfont1": "15px FuturaPT-Book"
}

var gameAssets = {
    "assets": {
        "icon0": "treasureOfHorus/img/symbol-00.png",
        "icon1": "treasureOfHorus/img/symbol-01.png",
        "icon2": "treasureOfHorus/img/symbol-02.png",
        "icon3": "treasureOfHorus/img/symbol-03.png",
        "icon4": "treasureOfHorus/img/symbol-04.png",
        "icon5": "treasureOfHorus/img/symbol-05.png",
        "icon6": "treasureOfHorus/img/symbol-06.png",
        "icon7": "treasureOfHorus/img/symbol-07.png",
        "bicon0": "treasureOfHorus/img/b-symbol-00.png",
        "bicon1": "treasureOfHorus/img/b-symbol-01.png",
        "bicon2": "treasureOfHorus/img/b-symbol-02.png",
        "bicon3": "treasureOfHorus/img/b-symbol-03.png",
        "bicon4": "treasureOfHorus/img/b-symbol-04.png",
        "bicon5": "treasureOfHorus/img/b-symbol-05.png",
        "bicon6": "treasureOfHorus/img/b-symbol-06.png",
        "bicon7": "treasureOfHorus/img/b-symbol-07.png",
        "icon8": "treasureOfHorus/img/symbol-08.png",
        "icon9": "treasureOfHorus/img/symbol-09.png",
        "icon10m": "treasureOfHorus/img/symbol-10.png",
        "icon12m": "treasureOfHorus/img/symbol-12.png",
        "icon10mw": "treasureOfHorus/img/symbol-10-m.png",
        "icon12mw": "treasureOfHorus/img/symbol-12-m.png",
        "icon10": "treasureOfHorus/img/symbol-10.png",
        "icon11": "treasureOfHorus/img/free-spins.png",
        "icon11-1": "treasureOfHorus/img/symbol-11-1.png",
        "icon11-2": "treasureOfHorus/img/symbol-11-2.png",
        "icon11-3": "treasureOfHorus/img/symbol-11-3.png",
        "icon12": "treasureOfHorus/img/symbol-12.png",
        "line_0_00": "treasureOfHorus/img/lines/line_0_01.png",
        "line_0_01": "treasureOfHorus/img/lines/line_0_02.png",
        "line_0_02": "treasureOfHorus/img/lines/line_0_03.png",
        "line_0_03": "treasureOfHorus/img/lines/line_0_04.png",
        "line_0_04": "treasureOfHorus/img/lines/line_0_05.png",
        "line_0_05": "treasureOfHorus/img/lines/line_0_06.png",
        "line_0_06": "treasureOfHorus/img/lines/line_0_07.png",
        "line_0_07": "treasureOfHorus/img/lines/line_0_08.png",
        "line_0_08": "treasureOfHorus/img/lines/line_0_09.png",
        "line_0_09": "treasureOfHorus/img/lines/line_0_10.png",
        "line_0_10": "treasureOfHorus/img/lines/line_0_11.png",
        "line_0_11": "treasureOfHorus/img/lines/line_0_12.png",
        "line_0_12": "treasureOfHorus/img/lines/line_0_13.png",
        "line_0_13": "treasureOfHorus/img/lines/line_0_14.png",
        "line_0_14": "treasureOfHorus/img/lines/line_0_15.png",
        "line_0_15": "treasureOfHorus/img/lines/line_0_16.png",
        "line_0_16": "treasureOfHorus/img/lines/line_0_17.png",
        "line_0_17": "treasureOfHorus/img/lines/line_0_18.png",
        "line_0_18": "treasureOfHorus/img/lines/line_0_19.png",
        "bottomBar": "gui/message-bar.png",
        "bgPanel": "treasureOfHorus/img/bgPanel.png",
        "bgPanelGame": "treasureOfHorus/img/bgPanel.png",
        "bgBlack": "gui/generic/img/mobile/png/black.png",
        "bgPreview":"treasureOfHorus/img/info-screen.png",
        "freeRoundsPanel":"treasureOfHorus/img/free-rounds.png",
        "bgAlpha": "treasureOfHorus/img/alpha.png",
        "bigWin":"treasureOfHorus/img/bigwin.png",
        "superWin":"treasureOfHorus/img/super-bigwin.png",
        "megaWin":"treasureOfHorus/img/mega-bigwin.png",
        "winEye":"treasureOfHorus/img/big-win-eye-right.png",
        "bg_r": "treasureOfHorus/img/bg/base-right.png",
        "bg_l": "treasureOfHorus/img/bg/base-left.png",
        "bg_b": "treasureOfHorus/img/bg/base-bottom.png",
        "bg_t": "treasureOfHorus/img/bg/base-top.png",
        "bg_m": "treasureOfHorus/img/bg/base-main.png",
        "mask_top":"treasureOfHorus/img/bg/mask-base-main.png",
        "mask_top_btm":"treasureOfHorus/img/bg/mask-base-main-btm.png",
        "bott_0":"treasureOfHorus/img/bg/transition-01.png",
        "middle_t":"treasureOfHorus/img/bg/transition-main-back.png",

        "bg_r_FS1": "treasureOfHorus/img/bg/base-right_FS1.png",
        "bg_l_FS1": "treasureOfHorus/img/bg/base-left_FS1.png",
        "bg_b_FS1": "treasureOfHorus/img/bg/base-bottom_FS1.png",
        "bg_t_FS1": "treasureOfHorus/img/bg/base-top_FS1.png",
        "bg_m_FS1": "treasureOfHorus/img/bg/base-main_FS1.png",
        "mask_top_FS1":"treasureOfHorus/img/bg/mask-fs1.png",
        "mask_top_btm_FS1":"treasureOfHorus/img/bg/mask-fs1-btm.png",
        "leftFireMask_FS1":"treasureOfHorus/img/bg/side-mask-left-fs1.png",
        "rightFireMask_FS1":"treasureOfHorus/img/bg/side-mask-right-fs1.png",
        "top_1":"treasureOfHorus/img/bg/transition-02.png",
        "bott_1":"treasureOfHorus/img/bg/transition-03.png",

        "bg_r_FS2": "treasureOfHorus/img/bg/base-right_FS2.png",
        "bg_l_FS2": "treasureOfHorus/img/bg/base-left_FS2.png",
        "bg_b_FS2": "treasureOfHorus/img/bg/base-bottom_FS2.png",
        "bg_t_FS2": "treasureOfHorus/img/bg/base-top_FS2.png",
        "bg_m_FS2": "treasureOfHorus/img/bg/base-main_FS2.png",
        "mask_top_FS2":"treasureOfHorus/img/bg/mask-fs2.png",
        "mask_top_btm_FS2":"treasureOfHorus/img/bg/mask-fs2-btm.png",
        "leftFireMask_FS2":"treasureOfHorus/img/bg/side-mask-left-fs2.png",
        "rightFireMask_FS2":"treasureOfHorus/img/bg/side-mask-right-fs2.png",
        "top_2":"treasureOfHorus/img/bg/transition-04.png",
        "bott_2":"treasureOfHorus/img/bg/transition-05.png",

        "bg_r_FS3": "treasureOfHorus/img/bg/base-right_FS3.png",
        "bg_l_FS3": "treasureOfHorus/img/bg/base-left_FS3.png",
        "bg_b_FS3": "treasureOfHorus/img/bg/base-bottom_FS3.png",
        "bg_t_FS3": "treasureOfHorus/img/bg/base-top_FS3.png",
        "bg_m_FS3": "treasureOfHorus/img/bg/base-main_FS3.png",
        "mask_top_FS3":"treasureOfHorus/img/bg/mask-fs3.png",
        "mask_top_btm_FS3":"treasureOfHorus/img/bg/mask-fs3-btm.png",
        "leftFireMask_FS3":"treasureOfHorus/img/bg/side-mask-left-fs3.png",
        "rightFireMask_FS3":"treasureOfHorus/img/bg/side-mask-right-fs3.png",
        "top_3":"treasureOfHorus/img/bg/transition-04.png",

        "fsPyr":"treasureOfHorus/img/level-heading-bg-image.png",
        "fsPyr-index":"treasureOfHorus/img/level-indicator.png",
        "fsPyrText-1":"treasureOfHorus/img/freespin-heading-01.png",
        "fsPyrText-2":"treasureOfHorus/img/freespin-heading-02.png",
        "fsPyrText-3":"treasureOfHorus/img/freespin-heading-03.png",

        "buttonBg":"gui/generic/img/desktop/png/cp-info-bar.png",
        "volOnButton": "gui/btnVolOn.png",
        "volOffButton": "gui/btnVolOff.png",
        "freeSpinPanel":"treasureOfHorus/img/free-spins.png",
        "bgPt" : "treasureOfHorus/img/paytable/pt-base-complete.png",
        "particle":"treasureOfHorus/img/particle.png",
         "swipeImg":"gui/generic/img/mobile/png/swipe.png"
    },
    "localizedAssets":{
        "graphAsset": {
            "logo": {
                "lang": ["zs","ko","jp"],
                "img": "treasureOfHorus/img/logo"
            }
        }
    },
    "buttonsSpriteSheet": {
        "container-btn": {
            "sprite": "treasureOfHorus/img/game-btn.png",
            "json": "treasureOfHorus/img/game-btn.png",
            "w": 208,
            "h": 66
        },
        "yesButton": {
            "sprite": "treasureOfHorus/img/yes-btn.png",
            "json": "treasureOfHorus/img/yes-btn.png",
            "w": 38.5,
            "h": 41
        },
        "noButton": {
            "sprite": "treasureOfHorus/img/no-btn.png",
            "json": "treasureOfHorus/img/no-btn.png",
            "w": 38.5,
            "h": 44
        },
        "check": {
            "sprite": "treasureOfHorus/img/radio-btns.png",
            "json": "treasureOfHorus/img/radio-btns.png",
            "w": 64,
            "h": 32
        },
        "genericBtn":{
            "sprite": "gui/generic/img/generic-game-btn.png",
            "json": "gui/generic/img/generic-game-btn.png",
            "w": 210,
            "h": 68
        }
    },
    "animations": {
        "anim0": {
            "json": "treasureOfHorus/img/anim/symbol-00.json",
            "sprite": "treasureOfHorus/img/anim/symbol-00.png"
        },
        "anim1": {
            "json": "treasureOfHorus/img/anim/symbol-01.json",
            "sprite": "treasureOfHorus/img/anim/symbol-01.png"
        },
        "anim2": {
            "json": "treasureOfHorus/img/anim/symbol-02.json",
            "sprite": "treasureOfHorus/img/anim/symbol-02.png"
        },
        "anim3": {
            "json": "treasureOfHorus/img/anim/symbol-03.json",
            "sprite": "treasureOfHorus/img/anim/symbol-03.png"
        },
        "anim4": {
            "json": "treasureOfHorus/img/anim/symbol-04.json",
            "sprite": "treasureOfHorus/img/anim/symbol-04.png"
        },
        "anim5": {
            "json": "treasureOfHorus/img/anim/symbol-05.json",
            "sprite": "treasureOfHorus/img/anim/symbol-05.png"
        },
        "anim6": {
            "json": "treasureOfHorus/img/anim/symbol-06.json",
            "sprite": "treasureOfHorus/img/anim/symbol-06.png"
        },
        "anim7": {
            "json": "treasureOfHorus/img/anim/symbol-07.json",
            "sprite": "treasureOfHorus/img/anim/symbol-07.png"
        },
        "anim8": {
            "json": "treasureOfHorus/img/anim/symbol-08.json",
            "sprite": "treasureOfHorus/img/anim/symbol-08.png"
        },
        "anim9": {
            "json": "treasureOfHorus/img/anim/symbol-09.json",
            "sprite": "treasureOfHorus/img/anim/symbol-09.png"
        },
        "anim10": {
            "json": "treasureOfHorus/img/anim/symbol-10.json",
            "sprite": "treasureOfHorus/img/anim/symbol-10.png"
        },
        "anim11-1": {
            "json": "treasureOfHorus/img/anim/symbol-11-1.json",
            "sprite": "treasureOfHorus/img/anim/symbol-11-1.png"
        },
        "anim11-2": {
            "json": "treasureOfHorus/img/anim/symbol-11-2.json",
            "sprite": "treasureOfHorus/img/anim/symbol-11-2.png"
        },
        "anim11-3": {
            "json": "treasureOfHorus/img/anim/symbol-11-3.json",
            "sprite": "treasureOfHorus/img/anim/symbol-11-3.png"
        },
        "anim10m": {
            "json": "treasureOfHorus/img/anim/symbol-10m.json",
            "sprite": "treasureOfHorus/img/anim/symbol-10m.png"
        },
        "anim12m": {
            "json": "treasureOfHorus/img/anim/symbol-12m.json",
            "sprite": "treasureOfHorus/img/anim/symbol-12m.png"
        },
        "anim12": {
            "json": "treasureOfHorus/img/anim/symbol-12.json",
            "sprite": "treasureOfHorus/img/anim/symbol-12.png"
        },
        "part-1": {
            "json": "treasureOfHorus/img/anim/bronze-coin.json",
            "sprite": "treasureOfHorus/img/anim/bronze-coin.png"
        },
        "part-2": {
            "json": "treasureOfHorus/img/anim/silver-coin.json",
            "sprite": "treasureOfHorus/img/anim/silver-coin.png"
        },
        "part-3": {
            "json": "treasureOfHorus/img/anim/gold-coin.json",
            "sprite": "treasureOfHorus/img/anim/gold-coin.png"
        },
        "f-part-1": {
            "json": "treasureOfHorus/img/anim/bronze-coin-frwrd.json",
            "sprite": "treasureOfHorus/img/anim/bronze-coin-frwrd.png"
        },
        "f-part-2": {
            "json": "treasureOfHorus/img/anim/silver-coin-frwrd.json",
            "sprite": "treasureOfHorus/img/anim/silver-coin-frwrd.png"
        },
        "f-part-3": {
            "json": "treasureOfHorus/img/anim/gold-coin-frwrd.json",
            "sprite": "treasureOfHorus/img/anim/gold-coin-frwrd.png"
        },
        "scarab_TakeOff": {
            "json": "treasureOfHorus/img/anim/scarab-anim.json",
            "sprite": "treasureOfHorus/img/anim/scarab-anim.png"
        },
        "scarab_Fly": {
            "json": "treasureOfHorus/img/anim/scarab-anim.json",
            "sprite": "treasureOfHorus/img/anim/scarab-anim.png"
        },
        "little-scarab_Fly0":{
            "json": "treasureOfHorus/img/anim/secondary-scarab.json",
            "sprite": "treasureOfHorus/img/anim/secondary-scarab.png"
        },
        "little-scarab_Fly1":{
            "json": "treasureOfHorus/img/anim/secondary-scarab.json",
            "sprite": "treasureOfHorus/img/anim/secondary-scarab.png"
        },
        "little-scarab_Fly2":{
            "json": "treasureOfHorus/img/anim/secondary-scarab.json",
            "sprite": "treasureOfHorus/img/anim/secondary-scarab.png"
        },
        "little-scarab_Fly3":{
            "json": "treasureOfHorus/img/anim/secondary-scarab.json",
            "sprite": "treasureOfHorus/img/anim/secondary-scarab.png"
        },
        "scarab_Land_9": {
            "json": "treasureOfHorus/img/anim/scarab-reveal-09.json",
            "sprite": "treasureOfHorus/img/anim/scarab-reveal-09.png"
        },
        "scarab_Land_10": {
            "json": "treasureOfHorus/img/anim/scarab-reveal-10.json",
            "sprite": "treasureOfHorus/img/anim/scarab-reveal-10.png"
        },
        "scarab_Land_12": {
            "json": "treasureOfHorus/img/anim/scarab-reveal-12.json",
            "sprite": "treasureOfHorus/img/anim/scarab-reveal-12.png"
        },
        "scarab_Land_11": {
            "json": "treasureOfHorus/img/anim/scarab-reveal-freespin.json",
            "sprite": "treasureOfHorus/img/anim/scarab-reveal-freespin.png"
        },
        "scarab_Reveal_9": {
            "json": "treasureOfHorus/img/anim/symbol-09-reveal.json",
            "sprite": "treasureOfHorus/img/anim/symbol-09-reveal.png"
        },
        "scarab_Reveal_10": {
            "json": "treasureOfHorus/img/anim/symbol-10-reveal.json",
            "sprite": "treasureOfHorus/img/anim/symbol-10-reveal.png"
        },
        "scarab_Reveal_12": {
            "json": "treasureOfHorus/img/anim/symbol-12-reveal.json",
            "sprite": "treasureOfHorus/img/anim/symbol-12-reveal.png"
        },
        "scarab_Reveal_11": {
            "json": "treasureOfHorus/img/anim/symbol-freespin-reveal.json",
            "sprite": "treasureOfHorus/img/anim/symbol-freespin-reveal.png"
        },
        "pyramidTop-base": {
            "json": "treasureOfHorus/img/anim/pyramid-basegame.json",
            "sprite": "treasureOfHorus/img/anim/pyramid-basegame.png"
        },
        "pyramidTop-FS1": {
            "json": "treasureOfHorus/img/anim/pyramid-freespin-01.json",
            "sprite": "treasureOfHorus/img/anim/pyramid-freespin-01.png"
        },
        "pyramidTop-FS2": {
            "json": "treasureOfHorus/img/anim/pyramid-freespin-02.json",
            "sprite": "treasureOfHorus/img/anim/pyramid-freespin-02.png"
        },
        "pyramidTop-FS3": {
            "json": "treasureOfHorus/img/anim/pyramid-freespin-03.json",
            "sprite": "treasureOfHorus/img/anim/pyramid-freespin-03.png"
        },
        "winEyeP": {
            "json": "treasureOfHorus/img/anim/pyramid-win-anim/icon-eye-of-horus.json",
            "sprite": "treasureOfHorus/img/anim/pyramid-win-anim/icon-eye-of-horus.png"
        },
        "lightH":{
            "json": "treasureOfHorus/img/anim/pyramid-win-anim/pyramid-ray.json",
            "sprite": "treasureOfHorus/img/anim/pyramid-win-anim/pyramid-ray.png"
        },
        "lightD":{
            "json": "treasureOfHorus/img/anim/pyramid-win-anim/pyramid-ray-diagonal.json",
            "sprite": "treasureOfHorus/img/anim/pyramid-win-anim/pyramid-ray-diagonal.png"
        },
        "riverLeft": {
            "json":"treasureOfHorus/img/anim/river-left.json",
            "sprite":"treasureOfHorus/img/anim/river-left.png"
        },
        "riverRight": {
            "json":"treasureOfHorus/img/anim/river-right.json",
            "sprite":"treasureOfHorus/img/anim/river-right.png"
        }
    },
    "importantSounds": {
        "spinClick": {
            "name": "treasureOfHorus/sounds/spinClick.mp3",
            "volume": 1
        },
        "reelSound": {
            "name": "treasureOfHorus/sounds/reelSound.mp3",
            "volume":.35
        },
        "reelStop": {
            "name": "treasureOfHorus/sounds/reelStop.mp3",
            "volume":.2
        },
    },
    "sounds": {
        "click": {
            "name": "treasureOfHorus/sounds/click.mp3",
            "volume": 1
        },
        "smbWin_0": {
            "name": "treasureOfHorus/sounds/smbWin_0.mp3",
            "volume": 1
        },
        "smbWin_1": {
            "name": "treasureOfHorus/sounds/smbWin_0.mp3",
            "volume": 1
        },
        "smbWin_2": {
            "name": "treasureOfHorus/sounds/smbWin_0.mp3",
            "volume": 1
        },
        "smbWin_3": {
            "name": "treasureOfHorus/sounds/smbWin_0.mp3",
            "volume": 1
        },
        "smbWin_4": {
            "name": "treasureOfHorus/sounds/smbWin_4.mp3",
            "volume": 3
        },
        "smbWin_5": {
            "name": "treasureOfHorus/sounds/smbWin_5.mp3",
            "volume": 1
        },
        "smbWin_6": {
            "name": "treasureOfHorus/sounds/smbWin_6.mp3",
            "volume": 1.5
        },
        "smbWin_7": {
            "name": "treasureOfHorus/sounds/smbWin_7.mp3",
            "volume": 2.5
        },
        "animScatter_8": {
            "name": "treasureOfHorus/sounds/smbWin_8.mp3",
            "volume": 1.5
        },
        "winEffect_1": {
            "name": "treasureOfHorus/sounds/centralWin/bigWin.mp3",
            "volume":1
        },
        "winEffect_2": {
            "name": "treasureOfHorus/sounds/centralWin/superBigWin.mp3",
            "volume": 1
        },
        "winEffect_3": {
            "name": "treasureOfHorus/sounds/centralWin/megaBigWin.mp3",
            "volume": 1
        },
        "incWin": {
            "name": "treasureOfHorus/sounds/counter.mp3",
            "volume": .4,
            "loop": true
        },
        "line": {
            "name": "treasureOfHorus/sounds/line.mp3",
            "volume": .5
        },
        "winFSBg": {
            "name": "treasureOfHorus/sounds/centralWin/bgBonusWin.wav",
            "volume": 1,
            "loop": true
        },
        "winBg": {
            "name": "treasureOfHorus/sounds/centralWin/bgWin.wav",
            "volume": 1,
            "loop": true
        },
        "bigWinBg_1": {
            "name": "treasureOfHorus/sounds/centralWin/bgBigWin.wav",
            "volume": 1,
            "loop": true
        },
        "bigWinBg_2": {
            "name": "treasureOfHorus/sounds/centralWin/bgSuperBigWin.wav",
            "volume": 1,
            "loop": true
        },
        "bigWinBg_3": {
            "name": "treasureOfHorus/sounds/centralWin/bgMegaBigWin.wav",
            "volume": 1,
            "loop": true
        },
        "fsPanelWon": {
            "name": "treasureOfHorus/sounds/fsPanelWon.mp3",
            "volume": 1
        },
        "winPanel": {
            "name": "treasureOfHorus/sounds/winScreen.mp3",
            "volume": 1
        },
        "fsWon1": {
            "name": "treasureOfHorus/sounds/FS1_Anubis.mp3",
            "volume": 1
        },
        "fsWon2": {
            "name": "treasureOfHorus/sounds/FS2_Weret.mp3",
            "volume": 1
        },
        "fsWon3": {
            "name": "treasureOfHorus/sounds/FS3_Horus.mp3",
            "volume": 1
        },
        "scarab_Fly0": {
            "name": "treasureOfHorus/sounds/Scarab_Fly-Loop.wav",
            "volume": .6,
            "loop": true
        },
        "scarab_Land0":{
            "name": "treasureOfHorus/sounds/Scarab_Reveal.mp3",
            "volume": 1.5
        },
        "scarab_Fly1": {
            "name": "treasureOfHorus/sounds/Scarab_Fly-Loop.wav",
            "volume": .6,
            "loop": true
        },
        "scarab_Land1":{
            "name": "treasureOfHorus/sounds/Scarab_Reveal.mp3",
            "volume": 1.2
        },
        "scarab_Fly2": {
            "name": "treasureOfHorus/sounds/Scarab_Fly-Loop.wav",
            "volume": .6,
            "loop": true
        },
        "scarab_Land2":{
            "name": "treasureOfHorus/sounds/Scarab_Reveal.mp3",
            "volume": 1
        },
        "scarab_Fly3": {
            "name": "treasureOfHorus/sounds/Scarab_Fly-Loop.wav",
            "volume": .6,
            "loop": true
        },
        "scarab_Land3":{
            "name": "treasureOfHorus/sounds/Scarab_Reveal.mp3",
            "volume": 3
        },
        "scarab_Fly4": {
            "name": "treasureOfHorus/sounds/Scarab_Fly-Loop.wav",
            "volume": .6,
            "loop": true
        },
        "scarab_Land4":{
            "name": "treasureOfHorus/sounds/Scarab_Reveal.mp3",
            "volume": 3
        },
        "wild_9": {
            "name": "treasureOfHorus/sounds/wild_9.mp3",
            "volume": 2
        },
        "wild_10": {
            "name": "treasureOfHorus/sounds/wild_10.mp3",
            "volume": 1
        },
        "wild_12": {
            "name": "treasureOfHorus/sounds/wild_12.mp3",
            "volume": .6
        },
        "eyeWin": {
            "name": "treasureOfHorus/sounds/FinalStage_WinningLoop.mp3",
            "volume": .6
        },
        "scarab_FlyF": {
            "name": "treasureOfHorus/sounds/Scarab_Fly-Loop.wav",
            "volume": .6,
            "loop": true
        },
        "scarab_FlyF1": {
            "name": "treasureOfHorus/sounds/Scarab_Fly-Loop.wav",
            "volume": .6,
            "loop": true
        },
        "stone":{
            "name": "treasureOfHorus/sounds/Stone_Door.mp3",
            "volume": .8
        }
    },
    "bgSounds": {
        "bgSlot": {
            "name": "treasureOfHorus/sounds/bg.mp3",
            "volume": .15
        },
        "bgFs1": {
            "name": "treasureOfHorus/sounds/bgFs1.mp3",
            "volume": .25
        },
        "bgFs2": {
            "name": "treasureOfHorus/sounds/bgFs2.mp3",
            "volume": .35
        },
        "bgFs3": {
            "name": "treasureOfHorus/sounds/bgFs3.mp3",
            "volume": .45
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
            },
            "animAsset":{
                "bg2": {
                    "name": "riverLeft",
                    "x": 0,
                    "y": 528,
                    "fps":24
                },
                "bg3": {
                    "name": "riverRight",
                    "x": 1180,
                    "y": 528,
                    "fps":24
                }
            },
            "emitters":{
                "emitter1":[{"pos":{"x":0,"y":0},"posVar":{"x":10,"y":0},"speed":15,"speedVar":5,"angle":90,"angleVar":360,"life":0.8,"lifeVar":0,"radius":20,"radiusVar":5,"textureAdditive":true,"startScale":2,"startScaleVar":0,"endScale":1.3,"endScaleVar":0,"startColor":[185,100,48,1],"startColorVar":[0,0,51,0.1],"endColor":[0,0,0,1],"endColorVar":[0,0,0,0],"colorList":[],"gravity":{"x":0,"y":-200},"radialAccel":0,"radialAccelVar":0,"tangentialAccel":0,"tangentialAccelVar":0,"texture":"treasureOfHorus/img/particle.png","totalParticles":150,"emissionRate":80,"xEquation":"","yEquation":"","textureEnabled":true,"active":true,"duration":null,"id":"333","aFactor":{"x":0,"y":0},"xFactor":{"x":0,"y":0},"border":{"top":333.47265079633274,"left":200,"bottom":200,"right":200},"zIndex":0}],
                "emitter2":[{"pos":{"x":1,"y":-18},"posVar":{"x":10,"y":0},"speed":70.78581098418817,"speedVar":53.089358238141145,"angle":90,"angleVar":360,"life":1.9000000000000004,"lifeVar":1,"radius":40,"radiusVar":40.4199919160016,"textureAdditive":true,"startScale":1,"startScaleVar":0,"endScale":1.5039996992000595,"endScaleVar":0,"startColor":[197.63123947628043,163.28292777398173,75.84349306199262,.6],"startColorVar":[0,0,0,0],"endColor":[0,0,0,1],"endColorVar":[0,0,0,0],"colorList":[],"gravity":{"x":-22,"y":-181},"radialAccel":-80,"radialAccelVar":0,"tangentialAccel":80,"tangentialAccelVar":0,"texture":"treasureOfHorus/img/particle.png","totalParticles":301,"emissionRate":50,"xEquation":"","yEquation":"","textureEnabled":true,"active":true,"duration":null,"id":"emitter","aFactor":{"x":0,"y":0},"xFactor":{"x":0,"y":0},"border":{"top":230.29995394000912,"left":200,"bottom":200,"right":200},"zIndex":0}],
                "emitter3":[{"pos":{"x":0,"y":0},"posVar":{"x":40,"y":0},"speed":60,"speedVar":20,"angle":90,"angleVar":10,"life":7,"lifeVar":4,"radius":20,"radiusVar":1,"textureAdditive":true,"startScale":3,"startScaleVar":0,"endScale":1,"endScaleVar":0,"startColor":[79.41176470588236,159.05709342560553,202.50000000000003,.6],"startColorVar":[0,0,0,0],"endColor":[0,0,0,0],"endColorVar":[0,0,0,0],"colorList":[],"gravity":{"x":0,"y":0},"radialAccel":0,"radialAccelVar":0,"tangentialAccel":0,"tangentialAccelVar":0,"texture":"treasureOfHorus/img/particle.png","totalParticles":150,"emissionRate":54.30226850328583,"xEquation":"","yEquation":"","textureEnabled":true,"active":true,"duration":null,"id":"EEE","aFactor":{"x":0,"y":0},"xFactor":{"x":0,"y":0},"border":{"top":200,"left":200,"bottom":200,"right":200},"zIndex":0}]
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
        "transition": {
            "visible":true,
        },
        "transition_FS1":{
            "parent":"transition",
            "x":0,
            "y":720,
            "visible":true,
            "graphAsset": {
                "bg1": {
                    "name": "bott_0",
                    "x": 0,
                    "y": 0
                },
                "bg2": {
                    "name": "middle_t",
                    "x": 0,
                    "y": 104
                },
                "bg3": {
                    "name": "top_1",
                    "x": 0,
                    "y": 632
                }
            }
        },
        "bg_FS0": {
            "parent":"bg",
            "x":0,
            "y":0,
            "visible":false
        },
        "bg_FS1": {
            "parent":"bg",
            "x":0,
            "y":1440,
            "visible":true,
            "graphAsset": {
                "bg": {
                    "name": "bg_r_FS1",
                    "x": 1080,
                    "y": 104
                },
                "bg1": {
                    "name": "bg_l_FS1",
                    "x": 0,
                    "y": 104
                }
            }
        },
        "frame_FS1": {
            "parent":"frame",
            "x":0,
            "y":1440,
            "visible":true,
            "graphAsset": {
                "bg4": {
                    "name": "bg_m_FS1",
                    "x": 200,
                    "y": 104
                }
            }
        },
        "transition_FS2":{
            "parent":"transition",
            "x":0,
            "y":2160,
            "visible":true,
            "graphAsset": {
                "bg1": {
                    "name": "bott_1",
                    "x": 0,
                    "y": 0
                },
                "bg2": {
                    "name": "middle_t",
                    "x": 0,
                    "y": 104
                },
                "bg3": {
                    "name": "top_2",
                    "x": 0,
                    "y": 632
                }
            }
        },

        "bg_FS2": {
            "parent":"bg",
            "x":0,
            "y":2880,

            "visible":true,
            "graphAsset": {
                "bg": {
                    "name": "bg_r_FS2",
                    "x": 1080,
                    "y": 104
                },
                "bg1": {
                    "name": "bg_l_FS2",
                    "x": 0,
                    "y": 104
                }
            }
        },
        "frame_FS2": {
            "parent":"frame",
            "x":0,
            "y":2880,

            "visible":true,
            "graphAsset": {
                "bg4": {
                    "name": "bg_m_FS2",
                    "x": 200,
                    "y": 104
                }
            }
        },
        "transition_FS3":{
            "parent":"transition",
            "x":0,
            "y":3600,
            "visible":true,
            "graphAsset": {
                "bg1": {
                    "name": "bott_2",
                    "x": 0,
                    "y": 0
                },
                "bg2": {
                    "name": "middle_t",
                    "x": 0,
                    "y": 104
                },
                "bg3": {
                    "name": "top_3",
                    "x": 0,
                    "y": 632
                }
            }
        },
        "bg_FS3": {
            "parent":"bg",
            "x":0,
            "y":4320,

            "visible":true,
            "graphAsset": {
                "bg": {
                    "name": "bg_r_FS3",
                    "x": 1080,
                    "y": 104
                },
                "bg1": {
                    "name": "bg_l_FS3",
                    "x": 0,
                    "y": 104
                }
            }
        },
        "frame_FS3": {
            "parent":"frame",
            "x":0,
            "y":4320,

            "visible":true,
            "graphAsset": {
                "bg4": {
                    "name": "bg_m_FS3",
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
                },
                "bg4": {
                    "name": "mask_top",
                    "x": 200,
                    "y": 104
                },
                "bg5": {
                    "name": "mask_top_btm",
                    "x": 200,
                    "y": 592
                },
                "bgP":{
                    "name": "pyramidTop-base",
                    "x": 640,
                    "y": 56,
                    "anchorX":.5,
                    "anchorY":.5
                }
            }
        },
        "mask_FS1":{
            "parent":"mask",
            "x":0,
            "y":1440,
            "visible":true,
            "graphAsset": {
                "bg2": {
                    "name": "bg_b_FS1",
                    "x": 0,
                    "y": 632
                },
                "bg3": {
                    "name": "bg_t_FS1",
                    "x": 0,
                    "y": 0
                },
                "bg4": {
                    "name": "mask_top_FS1",
                    "x": 200,
                    "y": 104
                },
                "bg5": {
                    "name": "mask_top_btm_FS1",
                    "x": 200,
                    "y": 592
                },
                "bgP1":{
                    "name": "pyramidTop-FS1",
                    "x": 640,
                    "y": 56,
                    "anchorX":.5,
                    "anchorY":.5
                }

            }
        },
        "mask_FS2":{
            "parent":"mask",
            "x":0,
            "y":2880,
            "visible":true,
            "graphAsset": {
                "bg2": {
                    "name": "bg_b_FS2",
                    "x": 0,
                    "y": 632
                },
                "bg3": {
                    "name": "bg_t_FS2",
                    "x": 0,
                    "y": 0
                },
                "bg4": {
                    "name": "mask_top_FS2",
                    "x": 200,
                    "y": 104
                },
                "bg5": {
                    "name": "mask_top_btm_FS2",
                    "x": 200,
                    "y": 592
                },
                "bgP2":{
                    "name": "pyramidTop-FS2",
                    "x": 640,
                    "y": 56,
                    "anchorX":.5,
                    "anchorY":.5
                }


            }
        },
        "mask_FS3":{
            "parent":"mask",
            "x":0,
            "y":4320,
            "visible":true,
            "graphAsset": {
                "bg2": {
                    "name": "bg_b_FS3",
                    "x": 0,
                    "y": 632
                },
                "bg3": {
                    "name": "bg_t_FS3",
                    "x": 0,
                    "y": 0
                },
                "bg4": {
                    "name": "mask_top_FS3",
                    "x": 200,
                    "y": 104
                },
                "bg5": {
                    "name": "mask_top_btm_FS3",
                    "x": 200,
                    "y": 592
                },
                "bgP3":{
                    "name": "pyramidTop-FS3",
                    "x": 640,
                    "y": 56,
                    "anchorX": .5,
                    "anchorY": .5
                }


            }
            },
        "logo": {
            "visible":false,
            "graphAsset": {
                "logo_": {
                    "name": "logo",
                    "x": 15,
                    "y": 0,
                }
            }
        },
        "buttonFg":{
            "visible":false
        },
        "scatter": {},
        "wild": {
        },
        "wins": {},
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
                    "x": 0,
                    "y": 0
                }
            },
            "texts": {
                "frLabel": {
                    "x": 494,
                    "y": 30,
                    "fill": "#3f2c0e",
                    "font": "15px Futura ,Arial",
                    "text": "Free Rounds:",
                    "anchorX": 1
                },
                "frValue": {
                    "x": 460,
                    "y": 45,
                    "fill": "#feffaa",
                    "stroke": "#3f2c0e",
                    "stroke_tick": 4,
                    "font": "25px Futura ,Arial",
                    "text": "5",
                    "anchorX": 0.5
                },
                "frTotWonLabel": {
                    "x": 848,
                    "y": 30,
                    "fill": "#3f2c0e",
                    "font": "15px Futura ,Arial",
                    "text": "Total won:",
                    "anchorX": 1
                },
                "frTotWonValue": {
                    "x": 813,
                    "y": 45,
                    "fill": "#feffaa",
                    "stroke": "#3f2c0e",
                    "stroke_tick": 4,
                    "font": "25px Futura ,Arial",
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
                    "x": 0,
                    "y": 0
                }
            },
            "texts": {
                "fsLabel": {
                    "x": 494,
                    "y": 30,
                    "fill": "#3f2c0e",
                    "font": "15px Futura ,Arial",
                    "text": "Free Spins",
                    "anchorX": 1
                },
                "fsValue": {
                    "x": 463,
                    "y": 45,
                    "fill": "#feffaa",
                    "stroke": "#3f2c0e",
                    "stroke_tick": 4,
                    "font": "25px Futura ,Arial",
                    "text": "8",
                    "anchorX": 0.5
                },
                "totWonLabel": {
                    "x": 848,
                    "y": 30,
                    "fill": "#3f2c0e",
                    "font": "15px Futura ,Arial",
                    "text": "Total Won",
                    "anchorX": 1
                },
                "totWonValue": {
                    "x": 813,
                    "y": 45,
                    "fill": "#feffaa",
                    "stroke": "#3f2c0e",
                    "stroke_tick": 4,
                    "font": "25px Futura ,Arial",
                    "text": "11111",
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
                    "alpha": .9
                },
                "pir": {
                    "name": "fsPyr",
                    "x": 592,
                    "y": 151,
                    "visible": true
                },
                "pirI-1": {
                    "name": "fsPyr-index",
                    "x": 832,
                    "y": 258,
                    "visible": false
                },
                "pirI-2": {
                    "name": "fsPyr-index",
                    "x": 832,
                    "y": 294,
                    "visible": false
                },
                "pirI-3": {
                    "name": "fsPyr-index",
                    "x": 832,
                    "y": 330,
                    "visible": false
                },
                "text-1": {
                    "name": "fsPyrText-1",
                    "x": 200,
                    "y": 194,
                    "visible": false
                },
                "text-2": {
                    "name": "fsPyrText-2",
                    "x": 200,
                    "y": 194,
                    "visible": false
                },
                "text-3": {
                    "name": "fsPyrText-3",
                    "x": 200,
                    "y": 194,
                    "visible": false
                }
            },
            "texts": {
                "fsWLabel": {
                    "x": 445,
                    "y": 368,
                    "fill": "#feffaa",
                    "stroke": "#3f2c0e",
                    "stroke_tick": 4,
                    "font": "28px FuturaPT-Book,Arial",
                    "text": "You won",
                    "anchorX": 1
                },
                "fsValue1": {
                    "x": 465,
                    "y": 368,
                    "fill": "#feffaa",
                    "stroke": "#3f2c0e",
                    "stroke_tick": 4,
                    "font": "28px FuturaPT-Book,Arial",
                    "text": "",
                    "anchorX": .5
                },
                "fsWLabel1": {
                    "x": 540,
                    "y": 368,
                    "fill": "#feffaa",
                    "stroke": "#3f2c0e",
                    "stroke_tick": 4,
                    "font": "28px FuturaPT-Book,Arial",
                    "text": "Free spins!",
                    "anchorX": .5
                }
            }
        },
        "fsfeature1":{
            "x":0,
            "y":0,
            "visible":false,
            "parent":"fsWonPanel",
            "graphAsset": {
                "w": {
                    "name": "icon9",
                    "x": 424,
                    "y": 440,
                    "scaleX":.5,
                    "scaleY":.5,
                },
            }
        },
        "fsfeature2":{
            "x":0,
            "y":0,
            "visible":false,
            "parent":"fsWonPanel",
            "graphAsset": {
                "w": {
                    "name": "icon9",
                    "x": 380,
                    "y": 440,
                    "scaleX":.5,
                    "scaleY":.5,
                },
                "w1": {
                    "name": "icon10mw",
                    "x": 472,
                    "y": 440,
                    "scaleX":.5,
                    "scaleY":.5,
                },
            }
        },
        "fsfeature3":{
            "x":0,
            "y":0,
            "visible":false,
            "parent":"fsWonPanel",
            "graphAsset": {
                "w": {
                    "name": "icon9",
                    "x": 332,
                    "y": 440,
                    "scaleX":.5,
                    "scaleY":.5,
                },
                "w1": {
                    "name": "icon10mw",
                    "x": 424,
                    "y": 440,
                    "scaleX":.5,
                    "scaleY":.5,
                },
                "w2": {
                    "name": "icon12mw",
                    "x": 516,
                    "y": 440,
                    "scaleX":.5,
                    "scaleY":.5,
                },
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
                    "scaleY":1
                }
            },
            "texts": {
                "frWLabelTitol": {
                    "x": 640,
                    "y": 240,
                    "fill": "#FFFFFF",
                    "font": "14px FuturaPT-Book",
                    "text":"",
                    "anchorX": .5
                },
                "frWLabel": {
                    "x": 640,
                    "y": 260,
                    "fill": "#FFFFFF",
                    "font": "18px FuturaPT-Book",
                    "text":"",
                    "align":"center",
                    "anchorX": .5
                },
                "frValue1": {
                    "x": 640,
                    "y": 300,
                    "fill": "#FFFFFF",
                    "font": "24px FuturaPT-Book",
                    "text": "5",
                    "anchorX": .5
                },
                "frWLabel1": {
                    "x": 640,
                    "y": 330,
                    "fill": "#FFFFFF",
                    "font": "18px FuturaPT-Book",
                    "text": "",
                    "align":"center",
                    "anchorX": .5
                }
            }

        },
        "lightWin":{
            "visible": true,
            "graphAsset": {
                "light1":{
                    "name":"lightD",
                    "x": 870,
                    "y": 320,
                    "anchorX":.5,
                    "anchorY":.5,
                    "angle":45
                },
                "light2":{
                    "name":"lightD",
                    "x": 390,
                    "y": 320,
                    "anchorX":.5,
                    "anchorY":.5,
                    "angle":135
                },
                "light3":{
                    "name":"lightH",
                    "x": 640,
                    "y": 570,
                    "scaleX":.95,
                    "anchorX":.5,
                    "anchorY":.5,
                },
                "topEye":{
                    "name":"winEyeP",
                    "x": 647,
                    "y": 7,
                    "anchorX":.5
                },
                "rightEye":{
                    "name":"winEyeP",
                    "x": 1010,
                    "y": 490
                },
                "leftEye":{
                    "name":"winEyeP",
                    "x": 270,
                    "y": 490,
                    "scaleX":-1,
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
                    "visible": true
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
                },
                "rightEye":{
                    "name":"winEye",
                    "x": 900,
                    "y": 272
                },
                "leftEye":{
                    "name":"winEye",
                    "x": 380,
                    "y": 272,
                    "scaleX":-1
                }
            }
        },
        "centralLineWin": {
            "visible": false,
            "texts": {
                "lineWin": {
                    "x": 635,
                    "y": 440,
                    "bmpFont": "bmpFont",
                    "size": "70",
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
                    "fill": "#281600",
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
        "preview": {
            "visible":false,
            "eventBlock":true,
            "graphAsset": {
                "bgPreview": {
                    "name": "bgPreview",
                    "x": 0,
                    "y": 0
                },
                "logo": {
                    "name": "logo",
                    "x": 640,
                    "y": 114,
                    "anchorX":.5,
                    "anchorY":.5
                }
            },
            "texts": {
                "txtPrev3": {
                    "x": 640,
                    "y": 550,
                    "fill": "#ffffff",
                    "font": "23px Futura PT, Arial",
                    "text": "Discover the 3 hidden chambers,\ryou'll find different Wild multipliers and a precious Scatter",
                    "align":"center",
                    "anchorX":.5
                },
                "buttons": {}
            },
            "checkbox": {
                "name": "check",
                "text": "Don't show anymore",
                "font": "13px Arial",
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
                            "y": -16,
                            "fill": "#002c52",
                            "font": "23px Futura PT, Arial",
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
            "textCol":"#0b2456",


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
                    "scaleX":1.4
                }
            },
            "texts": {
                "msgFR1": {
                    "x": 640,
                    "y": 230,
                    "fill": "#FFFFFF",
                    "font": "22px FuturaPT-Book",
                    "text": ".wqdwe",
                    "anchorX": .5
                },
                "msgFR2": {
                    "x": 640,
                    "y": 260,
                    "fill": "#FFFFFF",
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
                            "fill": "#0b2456",
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
                            "fill": "#0b2456",
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
                            "fill": "#0b2456",
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
    "slotEngine":"EgyptEngine",
    "log":true,
    "canSwipe":true,
    "comment_preview":"enable feature preview screen",
    "preview":true,
    "previewTout":15000,
    "spinType": "SubstituteSymbolSpinTOH",
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
    "winTxtColors": ["#281600", "#281600", "#281600", "#281600", "#281600", "#281600", "#281600", "#281600", "#281600", "#281600"],
    "comment_type of lines": "the class will handle line drawing",
    "lineType": "LineTOH",
    "lineFrames":31,
    "lineFrames":19,
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
            "reelLoopInterval":.16,
            "reelPreMovement": 25,
            "reelPreMovementTime": .3,
            "reelBaseInterval": 6,
            "reelStopInterval": 1,
            "reelSpinBounceMeasure": 27,
            "reelSpinBounceTime": .5,
            "reelSpinBounceForce": 1
        },
        "default":{
            "stopEnabled":true,
            "reelSecondMovementTime":0.4,
            "reelLoopInterval":.18,
            "reelPreMovement": 0,
            "reelPreMovementTime": 0,
            "reelBaseInterval": 2,
            "reelStopInterval": 1,
            "reelSpinBounceMeasure": 27,
            "reelSpinBounceTime": .45,
            "reelSpinBounceForce": 1
        }
    },
    "numIcon": 7,
    "loadTout": 30,
    "credits": "5000",
    "bet": "0.50",
    "animDelayAfterWild":1500,
    "freeRounds":"normal",
    "freeSpins":"TOHFreeSpins",
    "fsIcon": 11,
    "fsSpinDelay":750,
    "minFsSmbs":3,
    "scatterIcon": 8,
    "scatterType": "Scatter",
    "_twinReelsFeature":"normal",
    "wildNum": [],
    "winTxtClasses": [1, 2, 5, 10, 20, 50, 100, 300, 500, 1000],
    "smb_colors":[0xff33cc,0xcc33ff,0x0066ff,0x00ff99,0xffcc00,0xff33cc,0xcc33ff,0x0066ff,0x00ff99,0xffcc00,0xffcc00],
    "smbMinAnimTime":[.5,.5,.5,.5,.5,.5,.5,1.5,.5,.5],
    "muteDuringWins":true,
    "keepShowingAnimation":true,
    "additionalPreText":"",
    "additionalPostText":"",
    "reel": {
        "deltaX_0": 200,
        "deltaX": 176,
        "deltaY_0": 632,
        "deltaY": 176,
        "time": [1.3]
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

    "bg" : "treasureOfHorus/img/paytable/pt-base-main.png",

    "closeBtn": {

        "ypos": "110",
        "xpos": "980"

    },

	"pagination" : {

		"ypos" : "595",
		"xpos" : "424",
		"checked" : "#00E2E2",
		"unchecked" : "#000000"

	},

    "helpPath" : gameParams.pathCDN + 'premiumslots/remoteHelp.jsp?rPage=help/mobile/treasureOfHorus/help_' + gameParams.lang,

    "translatePosition": true,

    "buttons" : [

		{
			"id" : "left",
			"ypos" : "450",
			"xpos" : "128",
			"bg_up" : "treasureOfHorus/img/paytable/forward-btn-up.png",
			"bg_over" : "treasureOfHorus/img/paytable/forward-btn-over.png",
			"bg_down" : "treasureOfHorus/img/paytable/forward-btn-down.png",
			"direction" : -1
		},

		{
			"id" : "right",
			"ypos" : "450",
			"xpos" : "734",
			"bg_up" : "treasureOfHorus/img/paytable/forward-btn-up.png",
			"bg_over" : "treasureOfHorus/img/paytable/forward-btn-over.png",
			"bg_down" : "treasureOfHorus/img/paytable/forward-btn-down.png",
			"direction" : 1
		}

	],

    "pages" : [
        {

            "gameguide" : true,
            "title" : "Treasure of Horus Game Rules",
            "title_xpos" : "505",
            "title_ypos" : "115",
            "xpos" : "255",
            "ypos" : "175",
            "height" : "380",
            "width" : "740",
            "fill": "#000000",
            "font" : "FuturaPT-Book, Arial, sans-serif",
            "rtp": [
                "95.93",
                "95.93",
                "95.93"
            ]

        },
        {

            "symbols" : [

				{
					"id" : "symbol_00",
					"bg" : "treasureOfHorus/img/symbol-00.png",
                    "xpos": "340",
                    "ypos": "200",
                    "height": "150px",
                    "width": "150px",
                    "text": {
                        "value": 0,
                        "xpos": "50",
                        "ypos": "160",
                        "width": "50",
                        "left_fill": "#FFFFFF",
                        "right_fill": "#feffaa",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }

                },

				{
					"id" : "symbol_01",
					"bg" : "treasureOfHorus/img/symbol-01.png",
                    "xpos": "490",
                    "ypos": "200",
                    "height": "150px",
                    "width": "150px",
                    "text": {
                        "value": 1,
                        "xpos": "50",
                        "ypos": "160",
                        "width": "50",
                        "left_fill": "#FFFFFF",
                        "right_fill": "#feffaa",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }

                },

				{
					"id" : "symbol_02",
					"bg" : "treasureOfHorus/img/symbol-02.png",
                    "xpos": "640",
                    "ypos": "200",
                    "height": "150px",
                    "width": "150px",
                    "text": {
                        "value": 2,
                        "xpos": "50",
                        "ypos": "160",
                        "width": "50",
                        "left_fill": "#FFFFFF",
                        "right_fill": "#feffaa",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }

                },

				{
					"id" : "symbol_03",
					"bg" : "treasureOfHorus/img/symbol-03.png",
                    "xpos": "790",
                    "ypos": "200",
                    "height": "150px",
                    "width": "150px",
                    "text": {
                        "value": 3,
                        "xpos": "50",
                        "ypos": "160",
                        "width": "50",
                        "left_fill": "#FFFFFF",
                        "right_fill": "#feffaa",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }

                }

			],

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "480",
                    "width" : "500",
                    "fill" : "#000000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "14px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols" : [

				{
					"id" : "symbol_04",
					"bg" : "treasureOfHorus/img/symbol-04.png",
                    "xpos": "340",
                    "ypos": "200",
                    "height": "150px",
                    "width": "150px",
                    "text": {
                        "value": 4,
                        "xpos": "50",
                        "ypos": "160",
                        "width": "50",
                        "left_fill": "#FFFFFF",
                        "right_fill": "#feffaa",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }

                },

				{
					"id" : "symbol_05",
					"bg" : "treasureOfHorus/img/symbol-05.png",
                    "xpos": "490",
                    "ypos": "200",
                    "height": "150px",
                    "width": "150px",
                    "text": {
                        "value": 5,
                        "xpos": "50",
                        "ypos": "160",
                        "width": "50",
                        "left_fill": "#FFFFFF",
                        "right_fill": "#feffaa",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }

                },

				{
					"id" : "symbol_06",
					"bg" : "treasureOfHorus/img/symbol-06.png",
                    "xpos": "640",
                    "ypos": "200",
                    "height": "150px",
                    "width": "150px",
                    "text": {
                        "value": 6,
                        "xpos": "50",
                        "ypos": "160",
                        "width": "50",
                        "left_fill": "#FFFFFF",
                        "right_fill": "#feffaa",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }

                },

				{
					"id" : "symbol_07",
					"bg" : "treasureOfHorus/img/symbol-07.png",
                    "xpos": "790",
                    "ypos": "200",
                    "height": "150px",
                    "width": "150px",
                    "text": {
                        "value": 7,
                        "xpos": "50",
                        "ypos": "160",
                        "width": "50",
                        "left_fill": "#FFFFFF",
                        "right_fill": "#feffaa",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }

                }

			],

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "480",
                    "width" : "500",
                    "fill" : "#000000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "14px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols" : [

                {
					"id" : "scarab-reveal-08",
					"bg" : "treasureOfHorus/img/paytable/scarab-reveal-08.png",
                    "xpos": "355",
                    "ypos": "170",
                    "height": "75px",
                    "width": "75px"
                },

				{
					"id" : "symbol_09",
					"bg" : "treasureOfHorus/img/symbol-09.png",
                    "xpos": "323",
                    "ypos": "245",
                    "height": "140px",
                    "width": "140px",
                    "text": {
                        "value": 9,
                        "xpos": "45",
                        "ypos": "135",
                        "width": "50",
                        "left_fill": "#FFFFFF",
                        "right_fill": "#feffaa",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }

                }

			],

            "text": [

                {
                    "value" : "Replaces and multiplies regular winning combinations.",
                    "xpos" : "500",
                    "ypos" : "200",
                    "width" : "450",
                    "fill" : "#000000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "20px",
                    "align" : "center"
                },

                {
                    "value" : "Can appear in the regular game and in all free spins chambers.",
                    "xpos" : "475",
                    "ypos" : "250",
                    "width" : "500",
                    "fill" : "#000000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "20px",
                    "align" : "center"
                },

                {
                    "value" : "If more than one wild is displayed on the reels completing winning combinations, the higher multiplier is applied.",
                    "xpos" : "500",
                    "ypos" : "300",
                    "width" : "450",
                    "fill" : "#000000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "20px",
                    "align" : "center"
                },

                {
                    "value" : "Wild has its own paytable.",
                    "xpos" : "500",
                    "ypos" : "365",
                    "width" : "450",
                    "fill" : "#000000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "20px",
                    "align" : "center"
                },

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "480",
                    "width" : "500",
                    "fill" : "#000000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "14px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols" : [

                {
					"id" : "scarab-reveal-09",
					"bg" : "treasureOfHorus/img/paytable/scarab-reveal-09.png",
                    "xpos": "355",
                    "ypos": "170",
                    "height": "75px",
                    "width": "75px"
                },

				{
					"id" : "symbol_10",
					"bg" : "treasureOfHorus/img/symbol-10-m.png",
                    "xpos": "323",
                    "ypos": "245",
                    "height": "140px",
                    "width": "140px",
                    "text": {
                        "value": 9,
                        "xpos": "45",
                        "ypos": "135",
                        "width": "50",
                        "left_fill": "#FFFFFF",
                        "right_fill": "#feffaa",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }

                }

			],

            "text": [

                {
                    "value" : "Replaces and multiplies regular winning combinations.",
                    "xpos" : "500",
                    "ypos" : "200",
                    "width" : "450",
                    "fill" : "#000000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "20px",
                    "align" : "center"
                },

                {
                    "value" : "Can only appear inside Weret and Horus chamber.",
                    "xpos" : "500",
                    "ypos" : "250",
                    "width" : "450",
                    "fill" : "#000000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "20px",
                    "align" : "center"
                },

                {
                    "value" : "If more than one wild is displayed on the reels completing winning combinations, the higher multiplier is applied.",
                    "xpos" : "500",
                    "ypos" : "300",
                    "width" : "450",
                    "fill" : "#000000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "20px",
                    "align" : "center"
                },

                {
                    "value" : "Wild has its own paytable.",
                    "xpos" : "500",
                    "ypos" : "365",
                    "width" : "450",
                    "fill" : "#000000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "20px",
                    "align" : "center"
                },

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "480",
                    "width" : "500",
                    "fill" : "#000000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "14px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols" : [

                {
					"id" : "scarab-reveal-10",
					"bg" : "treasureOfHorus/img/paytable/scarab-reveal-10.png",
                    "xpos": "355",
                    "ypos": "170",
                    "height": "75px",
                    "width": "75px"
                },

				{
					"id" : "symbol_12",
					"bg" : "treasureOfHorus/img/symbol-12-m.png",
                    "xpos": "323",
                    "ypos": "245",
                    "height": "140px",
                    "width": "140px",
                    "text": {
                        "value": 9,
                        "xpos": "45",
                        "ypos": "135",
                        "width": "50",
                        "left_fill": "#FFFFFF",
                        "right_fill": "#feffaa",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }

                }

			],

            "text": [

                {
                    "value" : "Replaces and multiplies regular winning combinations.",
                    "xpos" : "500",
                    "ypos" : "200",
                    "width" : "450",
                    "fill" : "#000000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "20px",
                    "align" : "center"
                },

                {
                    "value" : "Can only appear inside Horus chamber.",
                    "xpos" : "500",
                    "ypos" : "250",
                    "width" : "450",
                    "fill" : "#000000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "20px",
                    "align" : "center"
                },

                {
                    "value" : "If more than one wild is displayed on the reels completing winning combinations, the higher multiplier is applied.",
                    "xpos" : "500",
                    "ypos" : "300",
                    "width" : "450",
                    "fill" : "#000000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "20px",
                    "align" : "center"
                },

                {
                    "value" : "Wild has its own paytable.",
                    "xpos" : "500",
                    "ypos" : "365",
                    "width" : "450",
                    "fill" : "#000000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "20px",
                    "align" : "center"
                },

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "480",
                    "width" : "500",
                    "fill" : "#000000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "14px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols" : [

				{
					"id" : "symbol_08",
					"bg" : "treasureOfHorus/img/symbol-08.png",
                    "xpos": "570",
                    "ypos": "160",
                    "height": "140px",
                    "width": "140px",
                    "text": {
                        "value": 8,
                        "xpos": "40",
                        "ypos": "145",
                        "width": "50",
                        "left_fill": "#FFFFFF",
                        "right_fill": "#feffaa",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }

                }

			],

            "text": [

                {
                    "value" : "Can only appear inside Horus chamber.",
                    "xpos" : "345",
                    "ypos" : "410",
                    "width" : "600",
                    "fill" : "#000000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "20px",
                    "align" : "center"
                },

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "480",
                    "width" : "500",
                    "fill" : "#000000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "14px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols" : [

                {
					"id" : "scarab-reveal-freespin",
					"bg" : "treasureOfHorus/img/paytable/scarab-reveal-freespin.png",
                    "xpos": "310",
                    "ypos": "215",
                    "height": "50px",
                    "width": "50px"
                },

				{
					"id" : "symbol_11-1",
					"bg" : "treasureOfHorus/img/symbol-11-1.png",
                    "xpos": "350",
                    "ypos": "190",
                    "width": "120px",
                    "text": {
                        "value": [
                            "Can only appear in the central reel in the regular game.",
                        	"Awards 6 free spins.",
                        	"Enters Anubis chamber."
                        ],
                        "xpos": "130",
                        "ypos": "15",
                        "width": "500",
                        "left_fill": "#000000",
                        "right_fill": "#feffaa",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "18px",
                        "align": "left",
                        "spacing": "0.5em"
                    }

                },

                {
					"id" : "scarab-reveal-freespin",
					"bg" : "treasureOfHorus/img/paytable/scarab-reveal-freespin.png",
                    "xpos": "310",
                    "ypos": "315",
                    "height": "50px",
                    "width": "50px"
                },

				{
					"id" : "symbol_11-2",
					"bg" : "treasureOfHorus/img/symbol-11-2.png",
                    "xpos": "350",
                    "ypos": "290",
                    "width": "120px",
                    "text": {
                        "value": [
                            "Can only appear in the central reel inside Anubis chamber.",
                        	"Awards 6 free spins.",
                        	"Enters Weret chamber."
                        ],
                        "xpos": "130",
                        "ypos": "15",
                        "width": "500",
                        "left_fill": "#000000",
                        "right_fill": "#feffaa",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "18px",
                        "align": "left",
                        "spacing": "0.5em"
                    }

                },

                {
					"id" : "scarab-reveal-freespin",
					"bg" : "treasureOfHorus/img/paytable/scarab-reveal-freespin.png",
                    "xpos": "310",
                    "ypos": "415",
                    "height": "50px",
                    "width": "50px"
                },

				{
					"id" : "symbol_11-3",
					"bg" : "treasureOfHorus/img/symbol-11-3.png",
                    "xpos": "350",
                    "ypos": "390",
                    "width": "125px",
                    "text": {
                        "value": [
                            "Can only appear in the central reel inside Weret chamber.",
                        	"Awards 6 free spins.",
                        	"Enters Horus chamber."
                        ],
                        "xpos": "130",
                        "ypos": "15",
                        "width": "500",
                        "left_fill": "#000000",
                        "right_fill": "#feffaa",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "18px",
                        "align": "left",
                        "spacing": "0.5em"
                    }

                }

			],

            "text": [

                {
                    "value" : "Free Spins",
                    "xpos" : "390",
                    "ypos" : "110",
                    "width" : "500",
                    "fill" : "#000000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "22px",
                    "align" : "center"
                },

                {
                    "value" : "Explore the Pyramid in search of the 3 secret chambers, where ever bigger treasures are waiting for you.",
                    "xpos" : "390",
                    "ypos" : "135",
                    "width" : "500",
                    "fill" : "#000000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "20px",
                    "align" : "center"
                },

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "480",
                    "width" : "500",
                    "fill" : "#000000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "14px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols" : [

                {
					"id" : "freespin-heading-01",
					"bg" : "treasureOfHorus/img/freespin-heading-01.png",
                    "xpos": "445",
                    "ypos": "140",
                    "width": "400px"
                },

                {
                    "id" : "symbol_09",
                    "bg" : "treasureOfHorus/img/symbol-09.png",
                    "xpos": "400",
                    "ypos": "325",
                    "height": "100px",
                    "width": "100px"
                },

                {
					"id" : "symbol_11-2_screenshot",
					"bg" : "treasureOfHorus/img/paytable/fs1-screenshot.png",
                    "xpos": "575",
                    "ypos": "295",
                    "width": "300px"
                }

			],

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "480",
                    "width" : "500",
                    "fill" : "#000000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "14px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols" : [

                {
                    "id" : "freespin-heading-02",
                    "bg" : "treasureOfHorus/img/freespin-heading-02.png",
                    "xpos": "445",
                    "ypos": "140",
                    "width": "400px"
                },

                {
                    "id" : "symbol_09",
                    "bg" : "treasureOfHorus/img/symbol-09.png",
                    "xpos": "350",
                    "ypos": "325",
                    "height": "100px",
                    "width": "100px"
                },

                {
                    "id" : "symbol-10-m",
                    "bg" : "treasureOfHorus/img/symbol-10-m.png",
                    "xpos": "450",
                    "ypos": "325",
                    "height": "100px",
                    "width": "100px"
                },

                {
					"id" : "symbol_11-3_screenshot",
					"bg" : "treasureOfHorus/img/paytable/fs2-screenshot.png",
                    "xpos": "620",
                    "ypos": "295",
                    "width": "300px"
                }

			],

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "480",
                    "width" : "500",
                    "fill" : "#000000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "14px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols" : [

                {
                    "id" : "freespin-heading-03",
                    "bg" : "treasureOfHorus/img/freespin-heading-03.png",
                    "xpos": "445",
                    "ypos": "140",
                    "width": "400px"
                },

				{
					"id" : "symbol_08",
					"bg" : "treasureOfHorus/img/symbol-08.png",
                    "xpos": "400",
                    "ypos": "275",
                    "width": "100px"
                },

                {
                    "id" : "symbol_09",
                    "bg" : "treasureOfHorus/img/symbol-09.png",
                    "xpos": "300",
                    "ypos": "385",
                    "height": "100px",
                    "width": "100px"
                },

                {
                    "id" : "symbol-10-m.png",
                    "bg" : "treasureOfHorus/img/symbol-10-m.png",
                    "xpos": "400",
                    "ypos": "385",
                    "height": "100px",
                    "width": "100px"
                },

                {
                    "id" : "symbol-12-m.png",
                    "bg" : "treasureOfHorus/img/symbol-12-m.png",
                    "xpos": "500",
                    "ypos": "385",
                    "height": "100px",
                    "width": "100px"
                },

                {
					"id" : "symbol_08_screenshot",
					"bg" : "treasureOfHorus/img/paytable/fs3-screenshot.png",
                    "xpos": "650",
                    "ypos": "295",
                    "width": "300px"
                }

			],

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "480",
                    "width" : "500",
                    "fill" : "#000000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "14px",
                    "align" : "center"
                }

            ]

        },

        {

            "lines": [1, 10],
            "ypos": "250",
            "font" : "FuturaPT-Book, Arial, sans-serif",
            "text_colour": "#000000",
            "checked_colour": "#FFFFFF",
            "unchecked_colour": "#23cfd7",

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "480",
                    "width" : "500",
                    "fill" : "#000000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "14px",
                    "align" : "center"
                }

            ]

        },

        {

            "lines": [11, 20],
            "ypos": "250",
            "font" : "FuturaPT-Book, Arial, sans-serif",
            "text_colour": "#000000",
            "checked_colour": "#FFFFFF",
            "unchecked_colour": "#23cfd7",

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "480",
                    "width" : "500",
                    "fill" : "#000000",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "14px",
                    "align" : "center"
                }

            ]

        }

    ]

}
