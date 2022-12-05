var frameworkAssets = {

    "assets": {
        "menuBtn": "gui/generic/img/desktop/svg/menu-btn.svg",
        "menuBtnClose": "gui/generic/img/desktop/svg/menu-close-btn.svg",
        "menuHistoryBtn": "gui/generic/img/desktop/svg/menu-history-btn.svg",
        "menuHomeBtn": "gui/generic/img/desktop/svg/menu-home-btn.svg",
        "menuSettingsBtn": "gui/generic/img/desktop/svg/menu-settings-btn.svg",
        "menuSoundOnBtn": "gui/generic/img/desktop/svg/menu-sound-btn.svg",
        "menuSoundOffBtn": "gui/generic/img/desktop/svg/menu-sound-close-btn.svg",

        /*"btnAutoSpin": "gui/generic/img/desktop/png/cp-btn-autospin-up.png",
         "btnBetAmt": "gui/generic/img/desktop/png/cp-btn-bet-up.png",
         "btnBorder": "gui/generic/img/desktop/png/cp-btn-ceperator.png",
         "btnHelp": "gui/generic/img/desktop/png/cp-btn-paytable-up.png",
         "btnSpin": "gui/generic/img/desktop/png/cp-btn-spin-up.png",
         "btnSpinStop": "gui/generic/img/desktop/png/cp-btn-stop-up.png",
         "btnSpinBg": "gui/generic/img/desktop/png/cp-btn-spin-bg.png",*/

        "dtHeader": "gui/generic/img/desktop/png/dt-header.png",

    }

}
var frameworkSettings = {
    "buttons": {
        "spinButton": {
            "id": "spinButton",
            "bg": "gui/generic/img/desktop/png/cp-btn-spin-up.png",
            "bgDisabled": "gui/generic/img/desktop/png/cp-btn-spin-disabled.png",
            "bgFill": "none",
        },
        "stopButton": {
            "id": "stopButton",
            "bg": "gui/generic/img/desktop/png/cp-btn-stop-up.png",
            "bgDisabled": "gui/generic/img/desktop/png/cp-btn-stop-disabled.png"
        },
        "betControl": {
            "id": "betOptions",
            "bg": "gui/generic/img/desktop/png/cp-btn-bet-up.png",
            "bgDisabled": "gui/generic/img/desktop/png/cp-btn-bet-disabled.png",
            "texts": {
                "betAmount": {
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
            "id": "autoPlay",
            "bg": "gui/generic/img/desktop/png/cp-btn-autospin-up.png",
            "bgDisabled": "gui/generic/img/desktop/png/cp-btn-autospin-disabled.png",
            "start": "gui/generic/img/desktop/png/cp-btn-autospin-select.png",
            "stop": "gui/generic/img/desktop/png/cp-btn-autospin-stop.png",
            "texts": {
                "auto_amount": {
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
        "chromeLogo":"gui/generic/img/chrome.png",
        "fireFoxLogo":"gui/generic/img/firefox.png"
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
                "x": 580,
                "y": 680,
                "anchorX": .5,
                "anchorY": .5
            },
            "fireFoxImg": {
                "name": "fireFoxLogo",
                "x": 700,
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
            "volume": .5
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

var bitmapFonts = {
    "bmpFont": {
        "sprite": "fonts/fontPaint.png",
        "font": "fonts/fontPaint.xml"
    },
    "multiBmpFont": {
        "sprite": "fonts/multiplyerPaint.png",
        "font": "fonts/multiplyerPaint.xml"
    }

}

var extScripts={
    "webfont": "15px FuturaPT-Heavy",
    "webfont1": "15px FuturaPT-Book"
}

var gameAssets = {
    "assets": {
        "fsBubble": "paint/img/freeSpins/fsBubble.png",
        "fsIcon": "paint/img/freeSpins/side-meter-static.png",
        "iconBubble_0": "paint/img/bubble-0.png",
        "iconBubble_1": "paint/img/bubble-1.png",
        "iconBubble_2": "paint/img/bubble-2.png",
        "iconBubble_3": "paint/img/bubble-3.png",
        "iconBubble_4": "paint/img/bubble-4.png",
        "icon0": "paint/img/symbol-00.png",
        "icon1": "paint/img/symbol-01.png",
        "icon2": "paint/img/symbol-02.png",
        "icon3": "paint/img/symbol-03.png",
        "icon4": "paint/img/symbol-04.png",
        "icon5": "paint/img/symbol-05.png",
        "icon6": "paint/img/symbol-06.png",
        "icon7": "paint/img/symbol-07.png",
        "icon8": "paint/img/symbol-08.png",
        "icon9": "paint/img/symbol-09.png",
        "icon10": "paint/img/symbol-10.png",
        "icon11": "paint/img/symbol-11.png",
        "icon12": "paint/img/freeSpins/freespin-yellow.png",
        "icon13": "paint/img/freeSpins/freespin-red.png",
        "icon14": "paint/img/freeSpins/freespin-blue.png",
        "icon15": "paint/img/freeSpins/freespin-green.png",
        "line_0_00": "paint/img/lines/line_0_0001.png",
        "line_0_01": "paint/img/lines/line_0_0002.png",
        "line_0_02": "paint/img/lines/line_0_0003.png",
        "line_0_03": "paint/img/lines/line_0_0004.png",
        "line_0_04": "paint/img/lines/line_0_0005.png",
        "line_0_05": "paint/img/lines/line_0_0006.png",
        "line_0_06": "paint/img/lines/line_0_0007.png",
        "line_0_07": "paint/img/lines/line_0_0008.png",
        "line_0_08": "paint/img/lines/line_0_0009.png",
        "line_0_09": "paint/img/lines/line_0_0010.png",
        "line_0_10": "paint/img/lines/line_0_0011.png",
        "line_0_11": "paint/img/lines/line_0_0012.png",
        "line_0_12": "paint/img/lines/line_0_0013.png",
        "line_0_13": "paint/img/lines/line_0_0014.png",
        "line_0_14": "paint/img/lines/line_0_0015.png",
        "line_0_15": "paint/img/lines/line_0_0016.png",
        "line_0_16": "paint/img/lines/line_0_0017.png",
        "line_0_17": "paint/img/lines/line_0_0018.png",
        "line_0_18": "paint/img/lines/line_0_0019.png",
        "line_0_19": "paint/img/lines/line_0_0020.png",
        "line_0_20": "paint/img/lines/line_0_0021.png",
        "line_0_21": "paint/img/lines/line_0_0022.png",
        "line_0_22": "paint/img/lines/line_0_0023.png",
        "line_0_23": "paint/img/lines/line_0_0024.png",
        "line_0_24": "paint/img/lines/line_0_0025.png",
        "line_0_25": "paint/img/lines/line_0_0026.png",
        "line_0_26": "paint/img/lines/line_0_0027.png",
        "line_0_27": "paint/img/lines/line_0_0028.png",
        "line_0_28": "paint/img/lines/line_0_0029.png",
        "line_0_29": "paint/img/lines/line_0_0030.png",
        "line_0_30": "paint/img/lines/line_0_0031.png",
        "freeRoundsLogo": "paint/img/free-rounds.png",
        "freeSpinPanel": "paint/img/freeSpins/fsPanel.png",
        "bottomBar": "gui/message-bar.png",
        "bgPanel": "paint/img/bgPanel.png",
        "bgAlpha": "paint/img/alpha.png",
        "bigWin": "paint/img/bigwin.png",
        "superWin": "paint/img/super-bigwin.png",
        "megaWin": "paint/img/mega-bigwin.png",
        "bg_r": "paint/img/bg/base-right.png",
        "bg_l": "paint/img/bg/base-left.png",
        "bg_b": "paint/img/bg/base-bottom.png",
        "bg_t": "paint/img/bg/base-top.png",
        "bg_m": "paint/img/bg/base-main.png",
        "buttonBg": "gui/generic/img/desktop/png/cp-info-bar.png",
        "volOnButton": "gui/btnVolOn.png",
        "volOffButton": "gui/btnVolOff.png",
        "bgPt": "paint/img/bgPt.png",
        "arrowUp": "cosmicCrystals/img/arrowUp.png",
        "arrowDw": "cosmicCrystals/img/arrowDw.png",
        "bgPick": "paint/img/bonus-bg.png",
        "totWinPic": "paint/img/total-win.png",
        "pickFrame": "paint/img/bonus-game-screen.png",
        "yellow#Bubble": "paint/img/yellow-bubble.png",
        "yellowSplat": "paint/img/yellow-splat.png",
        "purple#Bubble": "paint/img/purple-bubble.png",
        "purpleSplat": "paint/img/purple-splat.png",
        "red#Bubble": "paint/img/red-bubble.png",
        "redSplat": "paint/img/red-splat.png",
        "green#Bubble": "paint/img/green-bubble.png",
        "greenSplat": "paint/img/green-splat.png",
        "blue#Bubble": "paint/img/blue-bubble.png",
        "blueSplat": "paint/img/blue-splat.png",
        "accuBg": "paint/img/accuBg.png",
        "bgPreview": "paint/img/info-screen.png"

    },
    "localizedAssets":{
        "graphAsset": {
            "logo": {
                "lang": ["zs","ko","jp"],
                "img": "paint/img/logo"
            }
        }
    },
    "buttonsSpriteSheet": {
        "container-btn": {
            "sprite": "paint/img/game-btn.png",
            "json": "paint/img/game-btn.png",
            "w": 208,
            "h": 66
        },
        "yesButton": {
            "sprite": "paint/img/yes-btn.png",
            "json": "paint/img/yes-btn.png",
            "w": 88,
            "h": 80
        },
        "noButton": {
            "sprite": "paint/img/no-btn.png",
            "json": "paint/img/no-btn.png",
            "w": 88,
            "h": 80
        },
        "check": {
            "sprite": "paint/img/radio-btns.png",
            "json": "paint/img/radio-btns.png",
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
            "json": "paint/img/anim/symbol-00.json",
            "sprite": "paint/img/anim/symbol-00.png"
        },
        "anim1": {
            "json": "paint/img/anim/symbol-01.json",
            "sprite": "paint/img/anim/symbol-01.png"
        },
        "anim2": {
            "json": "paint/img/anim/symbol-02.json",
            "sprite": "paint/img/anim/symbol-02.png"
        },
        "anim3": {
            "json": "paint/img/anim/symbol-03.json",
            "sprite": "paint/img/anim/symbol-03.png"
        },
        "anim4": {
            "json": "paint/img/anim/symbol-04.json",
            "sprite": "paint/img/anim/symbol-04.png"
        },
        "anim5": {
            "json": "paint/img/anim/symbol-05.json",
            "sprite": "paint/img/anim/symbol-05.png"
        },
        "anim6": {
            "json": "paint/img/anim/symbol-06.json",
            "sprite": "paint/img/anim/symbol-06.png"
        },
        "anim7": {
            "json": "paint/img/anim/symbol-07.json",
            "sprite": "paint/img/anim/symbol-07.png"
        },
        "anim8": {
            "json": "paint/img/anim/symbol-08.json",
            "sprite": "paint/img/anim/symbol-08.png"
        },
        "anim9": {
            "json": "paint/img/anim/symbol-09.json",
            "sprite": "paint/img/anim/symbol-09.png"
        },
        "anim10": {
            "json": "paint/img/anim/symbol-10.json",
            "sprite": "paint/img/anim/symbol-10.png"
        },
        "anim11": {
            "json": "paint/img/anim/symbol-11.json",
            "sprite": "paint/img/anim/symbol-11.png"
        },
        "bubbleOn_0": {
            "json": "paint/img/anim/yellow-bubble.json",
            "sprite": "paint/img/anim/yellow-bubble.png"
        },
        "bubbleOff_0": {
            "json": "paint/img/anim/yellow-bubble-out.json",
            "sprite": "paint/img/anim/yellow-bubble-out.png"
        },
        "bubbleOn_1": {
            "json": "paint/img/anim/red-bubble.json",
            "sprite": "paint/img/anim/red-bubble.png"
        },
        "bubbleOff_1": {
            "json": "paint/img/anim/red-bubble-out.json",
            "sprite": "paint/img/anim/red-bubble-out.png"
        },
        "bubbleOn_2": {
            "json": "paint/img/anim/pink-bubble.json",
            "sprite": "paint/img/anim/pink-bubble.png"
        },
        "bubbleOff_2": {
            "json": "paint/img/anim/pink-bubble-out.json",
            "sprite": "paint/img/anim/pink-bubble-out.png"
        },
        "bubbleOn_3": {
            "json": "paint/img/anim/blue-bubble.json",
            "sprite": "paint/img/anim/blue-bubble.png"
        },
        "bubbleOff_3": {
            "json": "paint/img/anim/blue-bubble-out.json",
            "sprite": "paint/img/anim/blue-bubble-out.png"
        },
        "bubbleOn_4": {
            "json": "paint/img/anim/green-bubble.json",
            "sprite": "paint/img/anim/green-bubble.png"
        },
        "bubbleOff_4": {
            "json": "paint/img/anim/green-bubble-out.json",
            "sprite": "paint/img/anim/green-bubble-out.png"
        },
        "swipeFull": {
            "sprite": "cosmicCrystals/img/arrow.png",
            "json": "cosmicCrystals/img/arrow.json"
        },
        "bonus_intro1": {
            "sprite": "paint/img/anim/bonus_intro1.png",
            "json": "paint/img/anim/bonus_intro1.json"
        },
        "bonus_intro2": {
            "sprite": "paint/img/anim/bonus_intro2.png",
            "json": "paint/img/anim/bonus_intro2.json"
        },
        "bonus_intro3": {
            "sprite": "paint/img/anim/bonus_intro3.png",
            "json": "paint/img/anim/bonus_intro3.json"
        },
        "yellowDrop": {
            "sprite": "paint/img/anim/bonus-splat-drops-yellow.png",
            "json": "paint/img/anim/bonus-splat-drops-yellow.json"
        },
        "redDrop": {
            "sprite": "paint/img/anim/bonus-splat-drops-red.png",
            "json": "paint/img/anim/bonus-splat-drops-red.json"
        },
        "purpleDrop": {
            "sprite": "paint/img/anim/bonus-splat-drops-purple.png",
            "json": "paint/img/anim/bonus-splat-drops-purple.json"
        },
        "blueDrop": {
            "sprite": "paint/img/anim/bonus-splat-drops-blue.png",
            "json": "paint/img/anim/bonus-splat-drops-blue.json"
        },
        "greenDrop": {
            "sprite": "paint/img/anim/bonus-splat-drops-green.png",
            "json": "paint/img/anim/bonus-splat-drops-green.json"
        },
        "anim12": {
            "sprite": "paint/img/freeSpins/anim/freespin-yellow.png",
            "json": "paint/img/freeSpins/anim/freespin-yellow.json"
        },
        "anim13": {
            "sprite": "paint/img/freeSpins/anim/freespin-red.png",
            "json": "paint/img/freeSpins/anim/freespin-red.json"
        },
        "anim14": {
            "sprite": "paint/img/freeSpins/anim/freespin-blue.png",
            "json": "paint/img/freeSpins/anim/freespin-blue.json"
        },
        "anim15": {
            "sprite": "paint/img/freeSpins/anim/freespin-green.png",
            "json": "paint/img/freeSpins/anim/freespin-green.json"
        },
        "fs-intro": {
            "sprite": "paint/img/freeSpins/anim/side-meter-intro.png",
            "json": "paint/img/freeSpins/anim/side-meter-intro.json"
        },
        "fs-static": {
            "sprite": "paint/img/freeSpins/anim/side-meter-static.png",
            "json": "paint/img/freeSpins/anim/side-meter-static.json"
        },
        "fs-active": {
            "sprite": "paint/img/freeSpins/anim/side-meter-active.png",
            "json": "paint/img/freeSpins/anim/side-meter-active.json"
        },
        "fs-happy": {
            "sprite": "paint/img/freeSpins/anim/side-meter-happy.png",
            "json": "paint/img/freeSpins/anim/side-meter-happy.json"
        },
        "fs-trick": {
            "sprite": "paint/img/freeSpins/anim/side-meter-tongue.png",
            "json": "paint/img/freeSpins/anim/side-meter-tongue.json"
        },
        "fs-used": {
            "sprite": "paint/img/freeSpins/anim/side-meter-used.png",
            "json": "paint/img/freeSpins/anim/side-meter-used.json"
        },
        "part-1": {
            "json": "paint/img/anim/bronze-coin.json",
            "sprite": "paint/img/anim/bronze-coin.png"
        },
        "part-2": {
            "json": "paint/img/anim/silver-coin.json",
            "sprite": "paint/img/anim/silver-coin.png"
        },
        "part-3": {
            "json": "paint/img/anim/gold-coin.json",
            "sprite": "paint/img/anim/gold-coin.png"
        },
        "f-part-1": {
            "json": "paint/img/anim/bronze-coin-frwrd.json",
            "sprite": "paint/img/anim/bronze-coin-frwrd.png"
        },
        "f-part-2": {
            "json": "paint/img/anim/silver-coin-frwrd.json",
            "sprite": "paint/img/anim/silver-coin-frwrd.png"
        },
        "f-part-3": {
            "json": "paint/img/anim/gold-coin-frwrd.json",
            "sprite": "paint/img/anim/gold-coin-frwrd.png"
        }
    },
    "importantSounds": {
        "popOut": {
            "name": "paint/sounds/balls_clear.mp3",
            "volume": .7
        },
        "popIn": {
            "name": "paint/sounds/balls_apear.mp3",
            "volume": .7
        }
    },
    "sounds": {
        "click": {
            "name": "cosmicCrystals/sounds/click.mp3",
            "volume": .2
        },
        "_spinClick": {
            "name": "cosmicCrystals/sounds/spinClick.mp3",
            "volume": .2
        },
        "line": {
            "name": "cosmicCrystals/sounds/line.mp3",
            "volume": .2
        },
        "smbWin_0": {
            "name": "paint/sounds/smbWin_0.mp3",
            "volume": 1
        },
        "smbWin_1": {
            "name": "paint/sounds/smbWin_0.mp3",
            "volume": 1
        },
        "smbWin_2": {
            "name": "paint/sounds/smbWin_0.mp3",
            "volume": 1
        },
        "smbWin_3": {
            "name": "paint/sounds/smbWin_0.mp3",
            "volume": 1
        },
        "smbWin_4": {
            "name": "paint/sounds/smbWin_0.mp3",
            "volume": 1
        },
        "smbWin_5": {
            "name": "paint/sounds/smbWin_5.mp3",
            "volume": 1
        },
        "smbWin_6": {
            "name": "paint/sounds/smbWin_6.mp3",
            "volume": 1
        },
        "smbWin_7": {
            "name": "paint/sounds/smbWin_7.mp3",
            "volume": 1
        },
        "smbWin_8": {
            "name": "paint/sounds/smbWin_8.mp3",
            "volume": 1
        },
        "smbWin_9": {
            "name": "paint/sounds/smbWin_9.mp3",
            "volume": .6
        },
        "smbWin_10": {
            "name": "paint/sounds/smbWin_10.mp3",
            "volume": 2
        },
        "smbWin_11": {
            "name": "paint/sounds/smbWin_10.mp3",
            "volume": 1
        },
        "winEffect_1": {
            "name": "paint/sounds/centralWin/bigWin.mp3",
            "volume": .5
        },
        "winEffect_2": {
            "name": "paint/sounds/centralWin/superBigWin.mp3",
            "volume": .5
        },
        "winEffect_3": {
            "name": "paint/sounds/centralWin/megaBigWin.mp3",
            "volume": .5
        },
        "fsWon": {
            "name": "paint/sounds/fsWon.mp3",
            "volume": 1.5
        },
        "incWin": {
            "name": "paint/sounds/counter.mp3",
            "volume": .6,
            "loop": true
        },
        "winBg": {
            "name": "paint/sounds/centralWin/winBg.mp3",
            "volume": .7,
            "loop": true
        },
        "winFSBg": {
            "name": "paint/sounds/centralWin/winBg.mp3",
            "volume": .7,
            "loop": true
        },
        "bigWinBg_1": {
            "name": "paint/sounds/centralWin/bigWinBg.mp3",
            "volume": .7,
            "loop": true
        },
        "bigWinBg_2": {
            "name": "paint/sounds/centralWin/superBigWinBg.mp3",
            "volume": .7,
            "loop": true
        },
        "bigWinBg_3": {
            "name": "paint/sounds/centralWin/megaBigWinBg.mp3",
            "volume": .7,
            "loop": true
        },
        "bonusPop": {
            "name": "paint/sounds/bonusPop.mp3",
            "volume": .7,
        },
        "fs-intro": {
            "name": "paint/sounds/fs-intro.mp3",
            "volume": .5
        },
        "winPanel": {
            "name": "paint/sounds/winScreen.mp3",
            "volume": 1
        },
        "bonus-intro": {
            "name": "paint/sounds/bonus-intro.mp3",
            "volume": 2
        },
        "fs-intro": {
            "name": "paint/sounds/fsIntro.mp3",
            "volume": .4
        },
        "fs-static0": {
            "name": "paint/sounds/fsStatic0.mp3",
            "volume": .08
        },
        "fs-static1": {
            "name": "paint/sounds/fsStatic1.mp3",
            "volume": .08
        },
        "fs-active0": {
            "name": "paint/sounds/fsActive0.mp3",
            "volume": .08
        },
        "fs-active1": {
            "name": "paint/sounds/fsActive1.mp3",
            "volume": .08
        },
        "fs-active2": {
            "name": "paint/sounds/fsActive2.mp3",
            "volume": .08
        },
        "fs-happy0": {
            "name": "paint/sounds/fsHappy0.mp3",
            "volume": .08
        },
        "fs-happy1": {
            "name": "paint/sounds/fsHappy1.mp3",
            "volume": .08
        },
        "fs-happy2": {
            "name": "paint/sounds/fsHappy2.mp3",
            "volume": .08
        },
        "fs-happy3": {
            "name": "paint/sounds/fsHappy3.mp3",
            "volume": .08
        },
        "fs-trick0": {
            "name": "paint/sounds/fsTrick0.mp3",
            "volume": .2
        },
        "fs-trick1": {
            "name": "paint/sounds/fsTrick1.mp3",
            "volume": .2
        },
        "fs-used": {
            "name": "paint/sounds/fsUsed.mp3",
            "volume": .4
        },
        "scatterWin": {
            "name": "paint/sounds/scatterWin.mp3",
            "volume": 1
        }
    },
    "bgSounds": {
        "bgSlot": {
            "name": "paint/sounds/bg.mp3",
            "volume": 1
        },
        "bgPick": {
            "name": "paint/sounds/bgPick.mp3",
            "volume": 1.2
        },
        "bgFs": {
            "name": "paint/sounds/bgFs.mp3",
            "volume": 1.3
        }
    }
}

var guiConfig = {
    "credits": ["cash", "credits"]
}
var displayManager = {
    "render": Phaser.AUTO,
    "groups": {
        "bg": {
            "visible": false,
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
                },
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
        "frame": {
            "visible": false,
            "graphAsset": {
                "bg4": {
                    "name": "bg_m",
                    "x": 200,
                    "y": 104
                }
            }
        },
        "bubbles": {
            "visible": true
        },
        "reels": {},
        "introBubblePickBonus": {
            "eventBlock": true,
            "visible": false,
            "intro": {
                "part1Sx": {
                    "name": "bonus_intro1",
                    "x": 640,
                    "y": 0,
                    "scaleX": -1
                },
                "part2Sx": {
                    "name": "bonus_intro2",
                    "x":427,
                    "y": 0,
                    "scaleX": -1
                },
                "part3Sx": {
                    "name": "bonus_intro3",
                    "x": 214,
                    "y": 0,
                    "scaleX": -1
                },
                "part1Dx": {
                    "name": "bonus_intro1",
                    "x": 640,
                    "y": 0
                },
                "part2Dx": {
                    "name": "bonus_intro2",
                    "x": 853,
                    "y": 0
                },
                "part3Dx": {
                    "name": "bonus_intro3",
                    "x": 1066,
                    "y": 0
                }
            },
        },
        "BubblePickBonus": {
            "eventBlock": true,
            "visible": false,
            "name":"Balloon Bonus",
            "graphAsset": {
                "bg": {
                    "name": "bgPick",
                    "x": 235,
                    "y": 140,
                    "height": 450,
                    "width": 820,
                },
            },
            "graphObj": {
                "1": {
                    "name": "blue#Bubble",
                    "x": 350,
                    "y": 280,
                    "height": 200,
                    "width": 196,
                    "anchorX": .5,
                    "anchorY": .5,
                    "range": 40
                },
                "2": {
                    "name": "green#Bubble",
                    "x": 550,
                    "y": 280,
                    "height": 200,
                    "width": 196,
                    "anchorX": .5,
                    "anchorY": .5,
                    "range": 70
                },
                "3": {
                    "name": "purple#Bubble",
                    "x": 740,
                    "y": 280,
                    "height": 200,
                    "width": 196,
                    "anchorX": .5,
                    "anchorY": .5,
                    "range": 50
                },
                "4": {
                    "name": "red#Bubble",
                    "x": 930,
                    "y": 280,
                    "height": 200,
                    "width": 196,
                    "anchorX": .5,
                    "anchorY": .5,
                    "range": 40
                },
                "5": {
                    "name": "yellow#Bubble",
                    "x": 350,
                    "y": 460,
                    "height": 200,
                    "width": 196,
                    "anchorX": .5,
                    "anchorY": .5,
                    "range": 40
                },
                "6": {
                    "name": "red#Bubble",
                    "x": 550,
                    "height": 200,
                    "width": 196,
                    "y": 460,
                    "anchorX": .5,
                    "anchorY": .5,

                    "range": 70
                },
                "7": {
                    "name": "green#Bubble",
                    "x": 740,
                    "y": 460,
                    "height": 200,
                    "width": 196,
                    "anchorX": .5,
                    "anchorY": .5,
                    "range": 70
                },
                "8": {
                    "name": "blue#Bubble",
                    "x": 930,
                    "y": 460,
                    "height": 200,
                    "width": 196,
                    "anchorX": .5,
                    "anchorY": .5,
                    "range": 40
                }
            },
            "graphFrame": {
                "bonusFrame": {
                    "name": "pickFrame",
                    "x": 144,
                    "y": 56
                }
            },
            "_emitters": {
                "emitter": [{
                    "pos": {"x": 0, "y": 0},
                    "posVar": {"x": -125, "y": 0},
                    "speed": 66,
                    "speedVar": 195.6372884671819,
                    "angle": -168,
                    "angleVar": -40,
                    "life": 1,
                    "lifeVar": 16.89594764034753,
                    "radius": 14.205516971534776,
                    "radiusVar": 5,
                    "textureAdditive": true,
                    "startScale": 3.023485367220084,
                    "startScaleVar": 0,
                    "endScale": 0.6224822814864879,
                    "endScaleVar": 0,
                    "startColor": [51, 178, 65.94117647058825, 1],
                    "startColorVar": [0, 0, 51, 0.1],
                    "endColor": [0, 0, 0, 1],
                    "endColorVar": [0, 0, 0, 0],
                    "colorList": [],
                    "gravity": {"x": 87, "y": -82},
                    "radialAccel": 264.76394582625653,
                    "radialAccelVar": 0,
                    "tangentialAccel": 149.16009355019446,
                    "tangentialAccelVar": -197.65146327799158,
                    "totalParticles": 169,
                    "emissionRate": 463,
                    "xEquation": "",
                    "yEquation": "",
                    "textureEnabled": true,
                    "active": true,
                    "duration": null,
                    "id": "aaa",
                    "aFactor": {"x": -43.1, "y": 0},
                    "xFactor": {"x": -0.4, "y": 0},
                    "border": {"top": 500, "left": 500, "bottom": 307, "right": 466.86171111486584},
                    "zIndex": 0
                }]
            },
            "texts": {
                "txtMultBonus": {
                    "x": 640,
                    "y": 45,
                    "bmpFont": "multiBmpFont",
                    "size": "35",
                    "text": "",
                    "anchorX": .5
                }
            },
            "configuration": {
                "bgMusic": "bgPick",
                "chestSounds": ["", "bonusPop", "bonusPop", "bonusPop", "bonusPop", "bonusPop", "bonusPop", "bonusPop", "bonusPop"],
                "tOutChests": 1000,
                "tOutLastChest": 1000,
                "panelDuration": 1000
            }
        },
        "panelBonus": {
            "eventBlock": true,
            "visible": false,
            "graphAsset": {
                "bgPanel": {
                    "name": "bgPanel",
                    "x": 640,
                    "y": 360,
                    "anchorX": .5,
                    "anchorY": .5
                }
            },
            "texts": {
                "txtChestPanel1": {
                    "x": 640,
                    "y": 270,
                    "fill": "#ffffff",
                    "font": "28px FuturaPT-Heavy",
                    "text": "Congratulations",
                    "anchorX": .5
                },
                "txtChestPanel2": {
                    "x": 640,
                    "y": 330,
                    "fill": "#ffffff",
                    "font": "24px FuturaPT-Heavy",
                    "text": "You've won a bonus round",
                    "anchorX": .5
                },
                "txtChestPanel3": {
                    "x": 640,
                    "y": 390,
                    "fill": "#ffffff",
                    "font": "24px FuturaPT-Heavy",
                    "text": "Good luck!",
                    "anchorX": .5
                }
            },
            "configuration": {
                "sound": "panelShow",
                "durationIn": 1500,
                "durationOut": 3000
            }
        },
        "buttonFg": {
            "visible": false,
            "graphAsset": {
                "bg1": {
                    "name": "buttonBg",
                    "x": 640,
                    "y": 632,
                    "anchorX":.5
                }
            }
        },
        "status": {
            "visible": false,
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
        "logo": {
            "visible": false,
            "graphAsset": {
                "logo": {
                    "name": "logo",
                    "x": 640,
                    "y": 68,
                    "anchorX": .5,
                    "anchorY": .5,
                }
            }
        },
        "freeSpinAccumulator": {
            "visible": false,
            "maxFs": 5,
            "graphAsset": {
                "ball1": {
                    "name": "fsBubble",
                    "x": 1218,
                    "y": 564,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "accu1": {
                    "name": "fsIcon",
                    "x": 1218,
                    "y": 562,
                    "anchorX": .5,
                    "anchorY": .5,
                },
                "ball2": {
                    "name": "fsBubble",
                    "x": 1218,
                    "y": 477,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "accu2": {
                    "name": "fsIcon",
                    "x": 1218,
                    "y": 474,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "ball3": {
                    "name": "fsBubble",
                    "x": 1218,
                    "y": 389,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "accu3": {
                    "name": "fsIcon",
                    "x": 1218,
                    "y": 386,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "ball4": {
                    "name": "fsBubble",
                    "x": 1218,
                    "y": 301,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "accu4": {
                    "name": "fsIcon",
                    "x": 1218,
                    "y": 298,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "ball5": {
                    "name": "fsBubble",
                    "x": 1218,
                    "y": 213,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "accu5": {
                    "name": "fsIcon",
                    "x": 1218,
                    "y": 210,
                    "anchorX": .5,
                    "anchorY": .5

                }
            }
        },
        "wild": {},
        "wins": {},
        "lines": {},
        "_reelsPt": {
            "visible": false,
            "clickDuration": 1000,
            "tOut": 3000,
            "xIcon": 370,
            "yIcon": 260,
            "icons": {
                "9": {
                    "desc": "wild, replaces all symbols",

                    "4": "x2 bonus winnings",
                    "5": "x3 bonus winnings"
                },
                "10": {
                    "desc": "Free Spin symbol,\radd 1 during free spin rounds"
                },
                "11": {
                    "desc": "",
                    "3": "x1 bonus winnings",
                    "4": "x2 bonus winnings",
                    "5": "x3 bonus winnings"
                },
                "12": {
                    "desc": "Scatter, add 1 to\rFree Spins multiplier",
                    "1": 5
                },
                "13": {
                    "desc": "Scatter, add 2 to\rFree Spins multiplier",
                    "1": 15
                },
                "14": {
                    "desc": "Scatter, add 3 to\rFree Spins multiplier",
                    "1": 30
                },
                "15": {
                    "desc": "Scatter, add 4 to\rFree Spins multiplier",
                    "1": 50
                }
            }
            ,
            "graphAsset": {
                "bgReelPt": {
                    "name": "bgPanel",
                    "x": 680,
                    "y": 350,
                    "anchorX": .5,
                    "anchorY": .5
                }
            },
            "texts": {
                "desc": {
                    "x": 680,
                    "y": 260,
                    "fill": "#ffffff",
                    "font": "20px Arial",
                    "text": "",
                    "anchorX": .5
                },
                "po5": {
                    "x": 550,
                    "y": 290,
                    "fill": "#ffffff",
                    "font": "20px Arial",
                    "text": "1",
                    "anchorX": .5
                },
                "win5": {
                    "x": 700,
                    "y": 290,
                    "fill": "#ffffff",
                    "font": "20px Arial",
                    "text": "5",
                    "anchorX": 0
                },
                "po4": {
                    "x": 550,
                    "y": 310,
                    "fill": "#ffffff",
                    "font": "20px Arial",
                    "text": "1",
                    "anchorX": .5
                },
                "win4": {
                    "x": 700,
                    "y": 310,
                    "fill": "#ffffff",
                    "font": "20px Arial",
                    "text": "5",
                    "anchorX": 0
                },
                "po3": {
                    "x": 550,
                    "y": 330,
                    "fill": "#ffffff",
                    "font": "20px Arial",
                    "text": "1",
                    "anchorX": .5
                },
                "win3": {
                    "x": 700,
                    "y": 330,
                    "fill": "#ffffff",
                    "font": "20px Arial",
                    "text": "5",
                    "anchorX": 0
                },
                "po2": {
                    "x": 550,
                    "y": 350,
                    "fill": "#ffffff",
                    "font": "20px Arial",
                    "text": "1",
                    "anchorX": .5
                },
                "win2": {
                    "x": 700,
                    "y": 350,
                    "fill": "#ffffff",
                    "font": "20px Arial",
                    "text": "5",
                    "anchorX": 0
                },
                "po1": {
                    "x": 550,
                    "y": 370,
                    "fill": "#ffffff",
                    "font": "20px Arial",
                    "text": "1",
                    "anchorX": .5
                },
                "win1": {
                    "x": 700,
                    "y": 370,
                    "fill": "#ffffff",
                    "font": "20px Arial",
                    "text": "5",
                    "anchorX": 0
                }
            }
        },
        "freeRounds": {
            "visible": false,
            "comment_movingLogo": "true when the panel substitute the logo",
            "movingLogo": true,
            "graphAsset": {
                "fsLogo": {
                    "name": "freeRoundsLogo",
                    "x": 640,
                    "y": 10,
                    "anchorX": .5
                }
            },
            "texts": {
                "frLabel": {
                    "x": 352,
                    "y": 40,
                    "fill": "#1A98E5",
                    "font": "13px Futura ,Arial",
                    "text": "Free Rounds:",
                    "anchorX": .5
                },
                "frValue": {
                    "x": 352,
                    "y": 54,
                    "fill": "#438EF9",
                    "font": "23px Futura ,Arial",
                    "text": "5",
                    "anchorX": 0.5
                },
                "frTotWonLabel": {
                    "x": 930,
                    "y": 40,
                    "fill": "#1A98E5",
                    "font": "13px Futura ,Arial",
                    "text": "Total won:",
                    "anchorX": .5
                },
                "frTotWonValue": {
                    "x": 930,
                    "y": 54,
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
                    "y": 10,
                    "anchorX": .5
                }
            },
            "texts": {
                "fsLabel": {
                    "x": 385,
                    "y": 40,
                    "fill": "#1A98E5",
                    "font": "13px Futura ,Arial",
                    "text": "Free Spins",
                    "anchorX": 1
                },
                "fsValue": {
                    "x": 355,
                    "y": 54,
                    "fill": "#438EF9",
                    "font": "23px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                },
                "fsMultLabel": {
                    "x": 500,
                    "y": 40,
                    "fill": "#1A98E5",
                    "font": "13px Futura ,Arial",
                    "text": "Multiplier",
                    "anchorX": 1
                },
                "fsMultValue": {
                    "x": 470,
                    "y": 54,
                    "fill": "#438EF9",
                    "font": "23px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                },
                "totWonLabel": {
                    "x": 870,
                    "y": 40,
                    "fill": "#1A98E5",
                    "font": "13px Futura ,Arial",
                    "text": "Total won",
                    "anchorX": 1
                },
                "totWonValue": {
                    "x": 840,
                    "y": 54,
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
                    "y": 360,
                    "anchorX": .5,
                    "anchorY": .5
                }
            },
            "texts": {
                "fsWLabel": {
                    "x": 640,
                    "y": 270,
                    "fill": "#ffffff",
                    "font": "28px FuturaPT-Heavy",
                    "text": "You won",
                    "anchorX": .5
                },
                "fsValue1": {
                    "x": 640,
                    "y": 320,
                    "fill": "#ffffff",
                    "font": "28px FuturaPT-Heavy",
                    "text": "5",
                    "anchorX": .5
                },
                "fsWLabel1": {
                    "x": 640,
                    "y": 370,
                    "fill": "#ffffff",
                    "font": "28px FuturaPT-Heavy",
                    "text": "Free spins!",
                    "anchorX": .5
                }
            }

        },
        "frWonPanel": {
            "visible": false,
            "comment_fakeButton": "used to cover all the other buttons",
            "fakeButton": true,
            "eventBlock": true,
            "duration": 5,
            "graphAsset": {
                "bgmsg": {
                    "name": "bgAlpha",
                    "x": 0,
                    "y": 0,
                    "alpha": 0
                },
                "game": {
                    "name": "bgPanel",
                    "x": 640,
                    "y": 360,
                    "anchorX": .5,
                    "anchorY": .5
                }
            },
            "texts": {
                "frWLabelTitol": {
                    "x": 640,
                    "y": 250,
                    "fill": "#ffffff",
                    "font": "14px Futura PT, Arial",
                    "text": "Free Rounds",
                    "anchorX": .5
                },
                "frWLabel": {
                    "x": 640,
                    "y": 280,
                    "fill": "#ffffff",
                    "font": "18px Futura PT, Arial",
                    "text": "",
                    "align": "center",
                    "anchorX": .5
                },
                "frValue1": {
                    "x": 640,
                    "y": 350,
                    "fill": "#ffffff",
                    "font": "24px Futura PT, Arial",
                    "text": "5",
                    "anchorX": .5
                },
                "frWLabel1": {
                    "x": 640,
                    "y": 380,
                    "fill": "#ffffff",
                    "font": "18px Futura PT, Arial",
                    "text": "",
                    "align": "center",
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
                    "y": 410,
                    "bmpFont": "bmpFont",
                    "size": "35",
                    "text": "",
                    "anchorX": .5,
                    "anchorY": .5
                }
            }
        },
        "scatter": {},
        "preview": {
            "visible": false,
            "eventBlock": true,
            "graphAsset": {
                "bgPreview": {
                    "name": "bgPreview",
                    "x": 0,
                    "y": 0
                },
                "logo": {
                    "name": "logo",
                    "x": 640,
                    "y": 68,
                    "anchorX":.5,
                    "anchorY":.5
                }
            },
            "texts": {
                "txtPrev1": {
                    "x": 640,
                    "y": 130,
                    "fill": "#ffffff",
                    "font": "50px FuturaPT-Heavy",
                    "text": "Win Up To",
                    "weight": "bold",
                    "align": "center",
                    "anchorX": .5
                },
                "txtPrev2": {
                    "x": 640,
                    "y": 230,
                    "fill": "#ffffff",
                    "font": "70px FuturaPT-Heavy",
                    "text": "100,000 Coins",
                    "align": "center",
                    "weight": "bold",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "txtPrev3": {
                    "x": 640,
                    "y": 330,
                    "fill": "#065D84",
                    "font": "20px FuturaPT-Heavy",
                    "text": "Win scatters and multipliers during Free Spin",
                    "align": "center",
                    "anchorX": .5,
                    "anchorY": .5
                }
            },
            "checkbox": {
                "name": "check",
                "text": "Don't show anymore",
                "font": "15px FuturaPT-Heavy",
                "color": "#ffffff",
                "x": 50,
                "y": 595,
                "evt": "chkEvt"
            },
            "buttons": {
                "closePreview": {
                    "name": "container-btn",
                    "x": 640,
                    "y": 595,
                    "evt": "doCloseP",
                    "texts": {
                        "closeLabel": {
                            "x": 0,
                            "y": -18,
                            "fill": "#ffffff",
                            "font": "25px FuturaPT-Heavy",
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
            "visible": false,
            "eventBlock": true,
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
                    "visible": false
                },
                "game": {
                    "name": "bgPanel",
                    "x": 640,
                    "y": 360,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                }

            },
            "texts": {
                "msg1": {
                    "x": 630,
                    "y": 270,
                    "fill": "#ffffff",
                    "font": "28px FuturaPT-Heavy",
                    "_weight": "bold",
                    "_variant": "Bold",
                    "text": "",
                    "anchorX": .5
                },
                "msg2": {
                    "x": 630,
                    "y": 350,
                    "fill": "#ffffff",
                    "font": "24px FuturaPT-Heavy",
                    "text": "",
                    "anchorX": .5
                }
            },
            "buttons": {
                "yes": {
                    "name": "yesButton",
                    "x": 540,
                    "y": 545,
                    "anchorX": .5,
                    "evt": "doOk"
                },
                "myAccount": {
                    "name": "container-btn",
                    "x": 650,
                    "y": 485,
                    "evt": "doMyAccount",
                    "texts": {
                        "noLabel": {
                            "x": 0,
                            "y": -13,
                            "fill": "#00E2E2",
                            "font": "20px  FuturaPT-Heavy",
                            "text": "My Account",
                            "anchorX": .5
                        }
                    }
                },
                "no": {
                    "name": "noButton",
                    "x": 775,
                    "y": 545,
                    "evt": "doKo"
                },
                "ok": {
                    "name": "yesButton",
                    "x": 640,
                    "y": 545,
                    "anchorX": .5,
                    "evt": "doOk"
                }
            }
        },
        "msgBoxFR": {
            "visible":false,
            "eventBlock":true,
            "selectorY":210,
            "selectorX":640,
            "textCol":"#ffffff",
            "maskW":725,
            "maskH":100,
            "maskY":300,
            "maskX":280,

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
                    "scaleX":1.2
                }
            },
            "texts": {
                "msgFR1": {
                    "x": 640,
                    "y": 230,
                    "fill": "#ffffff",
                    "font": "22px FuturaPT-Book",
                    "text": ".wqdwe",
                    "anchorX": .5
                },
                "msgFR2": {
                    "x": 640,
                    "y": 260,
                    "fill": "#ffffff",
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
        }
    }
}

var ReelConfig = {
    "slotEngine":"PaintEngine",
    "canSwipe": false,
    "comment_preview": "enable feature preview screen",
    "preview": true,
    "previewTout": 15000,
    "spinType": "BubbleRandomSpin",
    "comment_winType": "the spin class used by the game",
    "disappearInterval": 60,
    "appearInterval": 70,
    "comment_winType":"spin class used by the game on line central win field",
    "winType": "BounceWin",
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
    "lineType": "LinePaint",
    "lineFrames":31,
    "comment_lineWinAmtType": "lines/coinWinning class",
    "lineWinAmtType": "NormalLineWinAmount",
    "numReels": 5,
    "numIcons": 3,
    "numIconsOnTop": 0,
    "numIconsOnBottom": 0,
    "icons": [3, 3, 3, 3, 3],
    "_spinResult": [[9, 8, 6, 4, 5], [9, 8, 3, 4, 5], [9, 8, 3, 4, 5], [9, 8, 3, 4, 5], [9, 2, 3, 4, 5]],
    "spinWithAlpha": .6,
    "reelInterval": 50,
    "reelPreMovement": 15,
    "reelPreMovementTime": .3,
    "reelStopInterval": .15,
    "reelSpinBounceMeasure": 17,
    "reelSpinBounceTime": .25,
    "reelSpinBounceForce": .7,
    "numIcon": 11,
    "popOutEffetcs": ["", "", "", "", "", "", "", "", "", "", "", "bonusPop"],
    "comment_popOutAnimation": "tween or animation, when tween it's just a scale effect, animation is a proper icon animation-- colled with popOutEffects when the reel stops, usually used to animate bonus or scatters symbols",
    "popOutAnimation": "animation",
    "loadTout": 30,
    "credits": "5000",
    "bet": "0.20",
    "freeRounds": "normal",
    "freeSpins": "AccumFreeSpins",
    "fsIcon": 10,
    "minFsSmbs": 5,
    "fsSpinDelay": 500,
    "_scatterIcon": 11,
    "wildNum": [],
    "scatterType": "FsMultScatter",
    "_twinReelsFeature": "normal",
    "winTxtClasses": [1, 2, 5, 10, 20, 50, 200, 500, 1000, 9999999999],
    "winTxtDuration": [0.3, .5, .5, .5, .7, 1, 1.2, 1.5, 1.6, 1.7],
    "smb_colors": [0xff33cc, 0xcc33ff, 0x0066ff, 0x00ff99, 0xffcc00, 0xff33cc, 0xcc33ff, 0x0066ff, 0x00ff99, 0xffcc00, 0xffcc00],
    "smbMinAnimTime": [1, 1, 1, 1, 1, 1, 1.2, 1.2, 1.2, 1.8],
    "muteDuringWins":false,
    "additionalPreText":"",
    "additionalPostText":"",
    "reel": {
        "deltaX_0": 200,
        "deltaX": 176,
        "deltaY_0": 100,
        "deltaY": 176,
        "time": [1.3]
    },
    "icon": {
        "x": 0,
        "y": 0,
        "width": 176,
        "height": 176
    },
    "mask": {
        "x": 50,
        "y": 104,
        "width": 1100,
        "height": 528

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

    "bg": "paint/img/paytable/paytable.png",

    "closeBtn": {

        "ypos": "125",
        "xpos": "1010"

    },

    "pagination": {

        "ypos": "560",
        "xpos": "485",
        "checked": "#FFFFFF",
        "unchecked": "#000000"

    },

    "helpPath" : gameParams.pathCDN + 'premiumslots/remoteHelp.jsp?rPage=help/desktop/paint/help_' + gameParams.lang,
    "fullscreen": true,

    "buttons": [

        {
            "id": "left",
            "ypos": "475",
            "xpos": "270",
            "bg_up": "paint/img/paytable/forward-btn-up.png",
            "bg_over": "paint/img/paytable/forward-btn-over.png",
            "bg_down": "paint/img/paytable/forward-btn-down.png",
            "direction": -1
        },

        {
            "id": "right",
            "ypos": "475",
            "xpos": "910",
            "bg_up": "paint/img/paytable/forward-btn-up.png",
            "bg_over": "paint/img/paytable/forward-btn-over.png",
            "bg_down": "paint/img/paytable/forward-btn-down.png",
            "direction": 1
        }

    ],

    "pages": [

        {

            "gameguide": true,
            "title": "",
            "title_xpos": "0",
            "xpos": "250",
            "ypos": "205",
            "height": "280",
            "width": "720",
            "fill": "#93d8fe",
            "font": "FuturaPT-Book, Arial, sans-serif",
            "rtp": [
                "95.80",
                "95.80",
                "95.80"
            ]

        },
        {

            "symbols": [

                {
                    "id": "symbol_00",
                    "bg": "paint/img/symbol-00.png",
                    "xpos": "295",
                    "ypos": "200",
                    "height": "136px",
                    "width": "136px"
                },

                {
                    "id": "symbol_00_text",
                    "bg": "paint/img/paytable/pt-small-textbox.png",
                    "xpos": "295",
                    "ypos": "320",
                    "text": {
                        "value": 0,
                        "xpos": "14",
                        "ypos": "24",
                        "width": "109",
                        "left_fill": "#ffffff",
                        "right_fill": "#93d8fe",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "center"
                    }

                },

                {
                    "id": "symbol_01",
                    "bg": "paint/img/symbol-01.png",
                    "xpos": "435",
                    "ypos": "200",
                    "height": "136px",
                    "width": "136px"
                },

                {
                    "id": "symbol_01_text",
                    "bg": "paint/img/paytable/pt-small-textbox.png",
                    "xpos": "435",
                    "ypos": "320",
                    "text": {
                        "value": 1,
                        "xpos": "14",
                        "ypos": "24",
                        "width": "109",
                        "left_fill": "#ffffff",
                        "right_fill": "#93d8fe",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "center"
                    }

                },

                {
                    "id": "symbol_02",
                    "bg": "paint/img/symbol-02.png",
                    "xpos": "575",
                    "ypos": "200",
                    "height": "136px",
                    "width": "136px"
                },

                {
                    "id": "symbol_02_text",
                    "bg": "paint/img/paytable/pt-small-textbox.png",
                    "xpos": "575",
                    "ypos": "320",
                    "text": {
                        "value": 2,
                        "xpos": "14",
                        "ypos": "24",
                        "width": "109",
                        "left_fill": "#ffffff",
                        "right_fill": "#93d8fe",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "center"
                    }

                },

                {
                    "id": "symbol_03",
                    "bg": "paint/img/symbol-03.png",
                    "xpos": "715",
                    "ypos": "200",
                    "height": "136px",
                    "width": "136px"
                },

                {
                    "id": "symbol_03_text",
                    "bg": "paint/img/paytable/pt-small-textbox.png",
                    "xpos": "715",
                    "ypos": "320",
                    "text": {
                        "value": 3,
                        "xpos": "14",
                        "ypos": "24",
                        "width": "109",
                        "left_fill": "#ffffff",
                        "right_fill": "#93d8fe",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "center"
                    }

                },

                {
                    "id": "symbol_04",
                    "bg": "paint/img/symbol-04.png",
                    "xpos": "855",
                    "ypos": "200",
                    "height": "136px",
                    "width": "136px"
                },

                {
                    "id": "symbol_04_text",
                    "bg": "paint/img/paytable/pt-small-textbox.png",
                    "xpos": "855",
                    "ypos": "320",
                    "text": {
                        "value": 4,
                        "xpos": "14",
                        "ypos": "24",
                        "width": "109",
                        "left_fill": "#ffffff",
                        "right_fill": "#93d8fe",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "center"
                    }

                }

            ],

            "text": [

                {
                    "value": "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos": "390",
                    "ypos": "480",
                    "width": "500",
                    "fill": "#93d8fe",
                    "font": "FuturaPT-Book, Arial, sans-serif",
                    "size": "12px",
                    "align": "center"
                }

            ]

        },

        {

            "symbols": [

                {
                    "id": "symbol_05",
                    "bg": "paint/img/symbol-05.png",
                    "xpos": "360",
                    "ypos": "190",
                    "height": "136px",
                    "width": "136px"
                },

                {
                    "id": "symbol_05_text",
                    "bg": "paint/img/paytable/pt-small-textbox.png",
                    "xpos": "360",
                    "ypos": "320",
                    "text": {
                        "value": 5,
                        "xpos": "14",
                        "ypos": "24",
                        "width": "109",
                        "left_fill": "#ffffff",
                        "right_fill": "#93d8fe",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "center"
                    }

                },

                {
                    "id": "symbol_06",
                    "bg": "paint/img/symbol-06.png",
                    "xpos": "500",
                    "ypos": "190",
                    "height": "136px",
                    "width": "136px"
                },

                {
                    "id": "symbol_06_text",
                    "bg": "paint/img/paytable/pt-small-textbox.png",
                    "xpos": "500",
                    "ypos": "320",
                    "text": {
                        "value": 6,
                        "xpos": "14",
                        "ypos": "24",
                        "width": "109",
                        "left_fill": "#ffffff",
                        "right_fill": "#93d8fe",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "center"
                    }

                },

                {
                    "id": "symbol_07",
                    "bg": "paint/img/symbol-07.png",
                    "xpos": "640",
                    "ypos": "190",
                    "height": "136px",
                    "width": "136px"
                },

                {
                    "id": "symbol_07_text",
                    "bg": "paint/img/paytable/pt-small-textbox.png",
                    "xpos": "640",
                    "ypos": "320",
                    "text": {
                        "value": 7,
                        "xpos": "14",
                        "ypos": "24",
                        "width": "109",
                        "left_fill": "#ffffff",
                        "right_fill": "#93d8fe",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "center"
                    }

                },

                {
                    "id": "symbol_08",
                    "bg": "paint/img/symbol-08.png",
                    "xpos": "780",
                    "ypos": "190",
                    "height": "136px",
                    "width": "136px"
                },

                {
                    "id": "symbol_08_text",
                    "bg": "paint/img/paytable/pt-small-textbox.png",
                    "xpos": "780",
                    "ypos": "320",
                    "text": {
                        "value": 8,
                        "xpos": "14",
                        "ypos": "24",
                        "width": "109",
                        "left_fill": "#ffffff",
                        "right_fill": "#93d8fe",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "center"
                    }

                }

            ],

            "text": [

                {
                    "value": "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos": "390",
                    "ypos": "480",
                    "width": "500",
                    "fill": "#93d8fe",
                    "font": "FuturaPT-Book, Arial, sans-serif",
                    "size": "12px",
                    "align": "center"
                }

            ]

        },

        {

            "symbols": [

                {
                    "id": "symbol_09",
                    "bg": "paint/img/symbol-09.png",
                    "xpos": "360",
                    "ypos": "186",
                    "height": "136px",
                    "width": "136px"
                },

                {
                    "id": "symbol_10",
                    "bg": "paint/img/symbol-10.png",
                    "xpos": "570",
                    "ypos": "186",
                    "height": "136px",
                    "width": "136px"
                },

                {
                    "id": "symbol_11",
                    "bg": "paint/img/symbol-11.png",
                    "xpos": "780",
                    "ypos": "186",
                    "height": "136px",
                    "width": "136px"
                }

            ],

            "text": [

                {
                    "value": [

                        {
                            "value": "Replace all symbols.",
                            "xpos": "0",
                            "ypos": "10",
                            "height": "20",
                            "width": "174",
                            "fill": "#93d8fe",
                            "font": "FuturaPT-Book, Arial, sans-serif",
                            "size": "14px",
                            "align": "center"
                        }
                    ],
                    "xpos": "340",
                    "ypos": "329",
                    "border": "3px solid #57AFFF",
                    "height": "150",
                    "width": "180",
                    "fill": "#93d8fe",
                    "font": "FuturaPT-Book, Arial, sans-serif",
                    "size": "12px",
                    "align": "center"
                },

                {
                    "value": [

                        {
                            "value": "Appears only on 3th reel.",
                            "xpos": "6",
                            "ypos": "10",
                            "height": "20",
                            "width": "174",
                            "fill": "#93d8fe",
                            "font": "FuturaPT-Book, Arial, sans-serif",
                            "size": "14px",
                            "align": "left"
                        },
                        {
                            "value": "Awards 1 Free Spin.",
                            "xpos": "6",
                            "ypos": "50",
                            "height": "20",
                            "width": "174",
                            "fill": "#93d8fe",
                            "font": "FuturaPT-Book, Arial, sans-serif",
                            "size": "14px",
                            "align": "left"
                        },
                        {
                            "value": "Can appear during Free Spins.",
                            "xpos": "6",
                            "ypos": "90",
                            "height": "20",
                            "width": "174",
                            "fill": "#93d8fe",
                            "font": "FuturaPT-Book, Arial, sans-serif",
                            "size": "14px",
                            "align": "left"
                        }


                    ],
                    "xpos": "550",
                    "ypos": "329",
                    "border": "3px solid #57AFFF",
                    "height": "150",
                    "width": "180",
                    "fill": "#93d8fe",
                    "font": "FuturaPT-Book, Arial, sans-serif",
                    "size": "12px",
                    "align": "center"
                },

                {
                    "value": [

                        {
                            "value": "3 or more symbols starts Balloon Bonus",
                            "xpos": "0",
                            "ypos": "10",
                            "height": "20",
                            "width": "174",
                            "fill": "#93d8fe",
                            "font": "FuturaPT-Book, Arial, sans-serif",
                            "size": "14px",
                            "align": "center"
                        },
                        {
                            "value": "3. X1",
                            "xpos": "6",
                            "ypos": "60",
                            "height": "20",
                            "width": "174",
                            "fill": "#93d8fe",
                            "font": "FuturaPT-Book, Arial, sans-serif",
                            "size": "14px",
                            "align": "left"
                        },
                        {
                            "value": "4. X2",
                            "xpos": "6",
                            "ypos": "80",
                            "height": "20",
                            "width": "174",
                            "fill": "#93d8fe",
                            "font": "FuturaPT-Book, Arial, sans-serif",
                            "size": "14px",
                            "align": "left"
                        },
                        {
                            "value": "5. X3",
                            "xpos": "6",
                            "ypos": "100",
                            "height": "20",
                            "width": "174",
                            "fill": "#93d8fe",
                            "font": "FuturaPT-Book, Arial, sans-serif",
                            "size": "14px",
                            "align": "left"
                        }

                    ],
                    "xpos": "760",
                    "ypos": "329",
                    "border": "3px solid #57AFFF",
                    "height": "150",
                    "width": "180",
                    "fill": "#93d8fe",
                    "font": "FuturaPT-Book, Arial, sans-serif",
                    "size": "12px",
                    "align": "center"
                },


                {
                    "value": "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos": "390",
                    "ypos": "480",
                    "width": "500",
                    "fill": "#93d8fe",
                    "font": "FuturaPT-Book, Arial, sans-serif",
                    "size": "12px",
                    "align": "center"
                }


            ],

        },

        {

            "symbols": [

                {
                    "id": "symbol_12",
                    "bg": "paint/img/freeSpins/freespin-yellow.png",
                    "xpos": "400",
                    "ypos": "175",
                    "height": "136px",
                    "width": "136px"
                },


                {
                    "id": "symbol_13",
                    "bg": "paint/img/freeSpins/freespin-red.png",
                    "xpos": "735",
                    "ypos": "175",
                    "height": "136px",
                    "width": "136px"
                },

                {
                    "id": "free-spin-characters",
                    "bg": "paint/img/paytable/free-spin-characters.png",
                    "xpos": "543",
                    "ypos": "440",
                    "zpos": "1"

                }

            ],

            "text": [

                {

                    "value": [

                        {
                            "value": "Appears only on 1st reel during Free spins.",
                            "xpos": "10",
                            "ypos": "10",
                            "height": "20",
                            "width": "244",
                            "fill": "#93d8fe",
                            "font": "FuturaPT-Book, Arial, sans-serif",
                            "size": "14px",
                            "align": "center"
                        },
                        {
                            "value": "Adds x1 to current multiplier.",
                            "xpos": "10",
                            "ypos": "60",
                            "height": "20",
                            "width": "244",
                            "fill": "#93d8fe",
                            "font": "FuturaPT-Book, Arial, sans-serif",
                            "size": "14px",
                            "align": "center"
                        }           ,
                        {
                            "value": "Awards 10 Coins",
                            "xpos": "10",
                            "ypos": "105",
                            "height": "20",
                            "width": "244",
                            "fill": "#93d8fe",
                            "font": "FuturaPT-Book, Arial, sans-serif",
                            "size": "14px",
                            "align": "center"
                        }
                    ],
                    "xpos": "338",
                    "ypos": "310",
                    "border": "3px solid #57AFFF",
                    "height": "145",
                    "width": "270",
                    "fill": "#93d8fe",
                    "font": "FuturaPT-Book, Arial, sans-serif",
                    "size": "12px",
                    "align": "center"
                },

                {
                    "value": [

                        {
                            "value": "Appears only on 2nd reel during Free spins.",
                            "xpos": "5",
                            "ypos": "10",
                            "height": "20",
                            "width": "254",
                            "fill": "#93d8fe",
                            "font": "FuturaPT-Book, Arial, sans-serif",
                            "size": "14px",
                            "align": "center"
                        },
                        {
                            "value": "Adds x2 to current multiplier.",
                            "xpos": "10",
                            "ypos": "60",
                            "height": "20",
                            "width": "244",
                            "fill": "#93d8fe",
                            "font": "FuturaPT-Book, Arial, sans-serif",
                            "size": "14px",
                            "align": "center"
                        }           ,
                        {
                            "value": "Awards 10 Coins",
                            "xpos": "10",
                            "ypos": "105",
                            "height": "20",
                            "width": "244",
                            "fill": "#93d8fe",
                            "font": "FuturaPT-Book, Arial, sans-serif",
                            "size": "14px",
                            "align": "center"
                        }
                    ],
                    "xpos": "668",
                    "ypos": "310",
                    "border": "3px solid #57AFFF",
                    "height": "145",
                    "width": "270",
                    "fill": "#93d8fe",
                    "font": "FuturaPT-Book, Arial, sans-serif",
                    "size": "12px",
                    "align": "center"
                },

                {
                    "value": "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos": "390",
                    "ypos": "480",
                    "width": "500",
                    "fill": "#93d8fe",
                    "font": "FuturaPT-Book, Arial, sans-serif",
                    "size": "12px",
                    "align": "center"
                }

            ]

        },

        {

            "symbols": [

                {
                    "id": "symbol_14",
                    "bg": "paint/img/freeSpins/freespin-blue.png",
                    "xpos": "400",
                    "ypos": "172",
                    "height": "136px",
                    "width": "136px"
                },


                {
                    "id": "symbol_15",
                    "bg": "paint/img/freeSpins/freespin-green.png",
                    "xpos": "735",
                    "ypos": "172",
                    "height": "136px",
                    "width": "136px"
                },

                {
                    "id": "free-spin-characters",
                    "bg": "paint/img/paytable/free-spin-characters.png",
                    "xpos": "543",
                    "ypos": "440",
                    "zpos": "1"

                }

            ],

            "text": [

                {

                    "value": [

                        {
                            "value": "Appears only on 4th reel during Free spins.",
                            "xpos": "5",
                            "ypos": "10",
                            "height": "20",
                            "width": "254",
                            "fill": "#93d8fe",
                            "font": "FuturaPT-Book, Arial, sans-serif",
                            "size": "14px",
                            "align": "center"
                        },
                        {
                            "value": "Adds x3 to current multiplier.",
                            "xpos": "10",
                            "ypos": "60",
                            "height": "20",
                            "width": "244",
                            "fill": "#93d8fe",
                            "font": "FuturaPT-Book, Arial, sans-serif",
                            "size": "14px",
                            "align": "center"
                        }           ,
                        {
                            "value": "Awards 15 Coins",
                            "xpos": "10",
                            "ypos": "105",
                            "height": "20",
                            "width": "244",
                            "fill": "#93d8fe",
                            "font": "FuturaPT-Book, Arial, sans-serif",
                            "size": "14px",
                            "align": "center"
                        }
                    ],
                    "xpos": "338",
                    "ypos": "310",
                    "border": "3px solid #57AFFF",
                    "height": "145",
                    "width": "270",
                    "fill": "#93d8fe",
                    "font": "FuturaPT-Book, Arial, sans-serif",
                    "size": "12px",
                    "align": "center"
                },

                {
                    "value": [

                        {
                            "value": "Appears only on 5th reel during Free spins.",
                            "xpos": "5",
                            "ypos": "10",
                            "height": "20",
                            "width": "254",
                            "fill": "#93d8fe",
                            "font": "FuturaPT-Book, Arial, sans-serif",
                            "size": "14px",
                            "align": "center"
                        },
                        {
                            "value": "Adds x4 to current multiplier.",
                            "xpos": "10",
                            "ypos": "60",
                            "height": "20",
                            "width": "244",
                            "fill": "#93d8fe",
                            "font": "FuturaPT-Book, Arial, sans-serif",
                            "size": "14px",
                            "align": "center"
                        }           ,
                        {
                            "value": "Awards 25 Coins",
                            "xpos": "10",
                            "ypos": "105",
                            "height": "20",
                            "width": "244",
                            "fill": "#93d8fe",
                            "font": "FuturaPT-Book, Arial, sans-serif",
                            "size": "14px",
                            "align": "center"
                        }
                    ],
                    "xpos": "668",
                    "ypos": "310",
                    "border": "3px solid #57AFFF",
                    "height": "145",
                    "width": "270",
                    "fill": "#93d8fe",
                    "font": "FuturaPT-Book, Arial, sans-serif",
                    "size": "12px",
                    "align": "center"
                },

                {
                    "value": "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos": "390",
                    "ypos": "480",
                    "width": "500",
                    "fill": "#93d8fe",
                    "font": "FuturaPT-Book, Arial, sans-serif",
                    "size": "12px",
                    "align": "center"
                }

            ]

        },

        {

            "symbols": [

                {
                    "id": "bonus-scrnshot",
                    "bg": "paint/img/paytable/bonus-scrnshot.png",
                    "xpos": "630",
                    "ypos": "235",
                    "bgWidth": "75%"
                }

            ],

            "text": [

                {
                    "value": "Balloon Bonus",
                    "xpos": "355",
                    "ypos": "240",
                    "width": "200",
                    "fill": "#93d8fe",
                    "font": "FuturaPT-Book, Arial, sans-serif",
                    "size": "22px",
                    "align": "center"
                },

                {
                    "value": "Shoot as many ballons as you can, the word 'END' will terminate the bonus. The total bonus multiplier depends on the number of icons that triggered the bonus. See game guide for details.",
                    "xpos": "310",
                    "ypos": "280",
                    "width": "290",
                    "fill": "#93d8fe",
                    "font": "FuturaPT-Book, Arial, sans-serif",
                    "size": "18px",
                    "align": "justify"
                },

                {
                    "value": "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos": "390",
                    "ypos": "480",
                    "width": "500",
                    "fill": "#93d8fe",
                    "font": "FuturaPT-Book, Arial, sans-serif",
                    "size": "12px",
                    "align": "center"
                }

            ]

        },

        {

            "lines": [1, 10],
            "ypos": "265",
            "font": "FuturaPT-Book, Arial, sans-serif",
            "text_colour": "#93d8fe",
            "checked_colour": "#FFFFFF",
            "unchecked_colour": "#42b0f4",

            "text": [

                {
                    "value": "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos": "390",
                    "ypos": "480",
                    "width": "500",
                    "fill": "#93d8fe",
                    "font": "FuturaPT-Book, Arial, sans-serif",
                    "size": "12px",
                    "align": "center"
                }

            ]

        },

        {

            "lines": [11, 20],
            "ypos": "265",
            "font": "FuturaPT-Book, Arial, sans-serif",
            "text_colour": "#93d8fe",
            "checked_colour": "#FFFFFF",
            "unchecked_colour": "#42b0f4",

            "text": [
                {
                    "value": "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos": "390",
                    "ypos": "480",
                    "width": "500",
                    "fill": "#93d8fe",
                    "font": "FuturaPT-Book, Arial, sans-serif",
                    "size": "12px",
                    "align": "center"
                }
            ]

        }
    ]

}
