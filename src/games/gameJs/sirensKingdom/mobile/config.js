
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
        "sprite": "fonts/fontSirens.png",
        "font": "fonts/fontSirens.xml"
    }
}

var extScripts={
    "webfont": "15px FuturaPT-Heavy",
    "webfont1": "15px FuturaPT-Book"
};
var gameAssets = {
    "assets": {
        "icon0": "sirensKingdom/img/symbol-00.png",
        "icon1": "sirensKingdom/img/symbol-01.png",
        "icon2": "sirensKingdom/img/symbol-02.png",
        "icon3": "sirensKingdom/img/symbol-03.png",
        "icon4": "sirensKingdom/img/symbol-04.png",
        "icon5": "sirensKingdom/img/symbol-05.png",
        "icon6": "sirensKingdom/img/symbol-06.png",
        "icon7": "sirensKingdom/img/symbol-07.png",
        "icon8": "sirensKingdom/img/symbol-08.png",
        "icon9": "sirensKingdom/img/symbol-09.png",
        "icon10": "sirensKingdom/img/symbol-10.png",
        "icon12": "sirensKingdom/img/symbol-12.png",

        "bicon0": "sirensKingdom/img/b-symbol-00.png",
        "bicon1": "sirensKingdom/img/b-symbol-01.png",
        "bicon2": "sirensKingdom/img/b-symbol-02.png",
        "bicon3": "sirensKingdom/img/b-symbol-03.png",
        "bicon4": "sirensKingdom/img/b-symbol-04.png",
        "bicon5": "sirensKingdom/img/b-symbol-05.png",
        "bicon6": "sirensKingdom/img/b-symbol-06.png",
        "bicon7": "sirensKingdom/img/b-symbol-07.png",
        "bicon8": "sirensKingdom/img/b-symbol-08.png",
        "bicon9": "sirensKingdom/img/b-symbol-09.png",
        "wildBg":"sirensKingdom/img/symbol-09-expanded.png",
        "wildText":"sirensKingdom/img/symbol-09-text.png",

        "line_0_00": "sirensKingdom/img/lines/payline_00000.png",
        "line_0_01": "sirensKingdom/img/lines/payline_00001.png",
        "line_0_02": "sirensKingdom/img/lines/payline_00002.png",
        "line_0_03": "sirensKingdom/img/lines/payline_00003.png",
        "line_0_04": "sirensKingdom/img/lines/payline_00004.png",
        "line_0_05": "sirensKingdom/img/lines/payline_00005.png",
        "line_0_06": "sirensKingdom/img/lines/payline_00006.png",
        "line_0_07": "sirensKingdom/img/lines/payline_00007.png",
        "line_0_08": "sirensKingdom/img/lines/payline_00008.png",
        "line_0_09": "sirensKingdom/img/lines/payline_00009.png",
        "line_0_10": "sirensKingdom/img/lines/payline_00010.png",
        "line_0_11": "sirensKingdom/img/lines/payline_00011.png",
        "line_0_12": "sirensKingdom/img/lines/payline_00012.png",
        "line_0_13": "sirensKingdom/img/lines/payline_00013.png",
        "line_0_14": "sirensKingdom/img/lines/payline_00014.png",
        "line_0_15": "sirensKingdom/img/lines/payline_00015.png",
        "line_0_16": "sirensKingdom/img/lines/payline_00016.png",
        "line_0_17": "sirensKingdom/img/lines/payline_00017.png",
        "line_0_18": "sirensKingdom/img/lines/payline_00018.png",
        "line_0_19": "sirensKingdom/img/lines/payline_00019.png",
        "IEFB1":"sirensKingdom/img/paytable/symbol-10-screenshot.png",
        "bottomBar": "gui/message-bar.png",
        "bgPanel": "sirensKingdom/img/bgPanel.png",
        "bgPanelGame": "sirensKingdom/img/bgPanel.png",
        "bgPreview":"sirensKingdom/img/info-screen.jpg",
        "freeRoundsPanel":"sirensKingdom/img/free-rounds.png",
        "bgAlpha": "sirensKingdom/img/alpha.png",
        "bigWin":"sirensKingdom/img/big-win.png",
        "superWin":"sirensKingdom/img/super-bigwin.png",
        "megaWin":"sirensKingdom/img/mega-bigwin.png",
        "bg_r": "sirensKingdom/img/bg/base-right.jpg",
        "bg_l": "sirensKingdom/img/bg/base-left.jpg",
        "bg_b": "sirensKingdom/img/bg/base-bottom.jpg",
        "bg_t": "sirensKingdom/img/bg/base-top.jpg",
        "bg_m": "sirensKingdom/img/bg/base-main.jpg",
        "reel-mask": "sirensKingdom/img/bg/reel-mask.png",
        "bgFS_r": "sirensKingdom/img/bg/base-right_FS.jpg",
        "bgFS_l": "sirensKingdom/img/bg/base-left_FS.jpg",
        "bgFS_b": "sirensKingdom/img/bg/base-bottom_FS.jpg",
        "bgFS_t": "sirensKingdom/img/bg/base-top_FS.jpg",
        "bgFS_m": "sirensKingdom/img/bg/base-main_FS.jpg",
        "reelFS-mask": "sirensKingdom/img/bg/reel-mask-fs.png",
        "buttonBg":"gui/generic/img/desktop/png/cp-info-bar.png",
        "volOnButton": "gui/btnVolOn.png",
        "volOffButton": "gui/btnVolOff.png",
        "freeSpinPanel":"sirensKingdom/img/free-spins.png",
        "octoPussy":"sirensKingdom/img/bg/gold-octopus.png",
        "bgPt" : "sirensKingdom/img/paytable/pt-base-complete.png",
        "icon9_expanded": "sirensKingdom/img/symbol-09-expanded.png",
        "btnTranspRight": "sirensKingdom/img/transparent.png",
        "btnTranspLeft": "sirensKingdom/img/transparent.png",
        "slide_0": "sirensKingdom/img/paytable/symbol-09-screenshot.png",
        "slide_1": "sirensKingdom/img/paytable/symbol-12-screenshot.png",
        "slide_2": "sirensKingdom/img/paytable/screenShot4.png"
    },
    "localizedAssets":{
        "graphAsset": {
            "logo": {
                "lang": ["zs","ko","jp"],
                "img": "sirensKingdom/img/logo"
            },
            "introLogo": {
                "lang": ["zs","ko","jp"],
                "img": "sirensKingdom/img/intro-logo"
            }
        }
    },
    "buttonsSpriteSheet": {
        "container-btn": {
            "sprite": "sirensKingdom/img/game-btn.png",
            "json": "sirensKingdom/img/game-btn.png",
            "w": 210,
            "h": 66
        },
        "yesButton": {
            "sprite": "sirensKingdom/img/yes-btn.png",
            "json": "sirensKingdom/img/yes-btn.png",
            "w": 56,
            "h": 54
        },
        "noButton": {
            "sprite": "sirensKingdom/img/no-btn.png",
            "json": "sirensKingdom/img/no-btn.png",
            "w": 56,
            "h": 54
        },
        "check": {
            "sprite": "sirensKingdom/img/radio-btns.png",
            "json": "sirensKingdom/img/radio-btns.png",
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
            "json": "sirensKingdom/img/anim/smb/symbol-00.json",
            "sprite": "sirensKingdom/img/anim/smb/symbol-00.png"
        },
        "anim1": {
            "json": "sirensKingdom/img/anim/smb/symbol-01.json",
            "sprite": "sirensKingdom/img/anim/smb/symbol-01.png"
        },
        "anim2": {
            "json": "sirensKingdom/img/anim/smb/symbol-02.json",
            "sprite": "sirensKingdom/img/anim/smb/symbol-02.png"
        },
        "anim3": {
            "json": "sirensKingdom/img/anim/smb/symbol-03.json",
            "sprite": "sirensKingdom/img/anim/smb/symbol-03.png"
        },
        "anim4": {
            "json": "sirensKingdom/img/anim/smb/symbol-04.json",
            "sprite": "sirensKingdom/img/anim/smb/symbol-04.png"
        },
        "anim5": {
            "json": "sirensKingdom/img/anim/smb/symbol-05.json",
            "sprite": "sirensKingdom/img/anim/smb/symbol-05.png"
        },
        "anim6": {
            "json": "sirensKingdom/img/anim/smb/symbol-06.json",
            "sprite": "sirensKingdom/img/anim/smb/symbol-06.png"
        },
        "anim7": {
            "json": "sirensKingdom/img/anim/smb/symbol-07.json",
            "sprite": "sirensKingdom/img/anim/smb/symbol-07.png"
        },
        "anim8": {
            "json": "sirensKingdom/img/anim/smb/symbol-08.json",
            "sprite": "sirensKingdom/img/anim/smb/symbol-08.png"
        },
        "anim10": {
            "json": "sirensKingdom/img/anim/smb/fakeAnim.json",
            "sprite": "sirensKingdom/img/anim/smb/fakeAnim.png"
        },
        "anim11": {
            "json": "sirensKingdom/img/anim/smb/symbol-11.json",
            "sprite": "sirensKingdom/img/anim/smb/symbol-11.png"
        },
        "animW10": {
            "json": "sirensKingdom/img/anim/smb/symbol-10.json",
            "sprite": "sirensKingdom/img/anim/smb/symbol-10.png"
        },
        "anim12": {
            "json": "sirensKingdom/img/anim/smb/symbol-12.json",
            "sprite": "sirensKingdom/img/anim/smb/symbol-12.png"
        },
        "bluFlame": {
            "json": "sirensKingdom/img/anim/smb/freespin-highlight.json",
            "sprite": "sirensKingdom/img/anim/smb/freespin-highlight.png"
        },
        "wildReel_0": {
            "json": "sirensKingdom/img/anim/smb/symbol-09-part1.json",
            "sprite": "sirensKingdom/img/anim/smb/symbol-09-part1.png"
        },
        "wildReel_1": {
            "json": "sirensKingdom/img/anim/smb/symbol-09-part2.json",
            "sprite": "sirensKingdom/img/anim/smb/symbol-09-part2.png"
        },
        "stickyWild": {
            "json": "sirensKingdom/img/anim/smb/symbol-10-expanding.json",
            "sprite": "sirensKingdom/img/anim/smb/symbol-10-expanding.png"
        },
        "iconWinBgAnim":{
            "json": "sirensKingdom/img/anim/win-highlight.json",
            "sprite": "sirensKingdom/img/anim/win-highlight.png"
        },
        "part-1": {
            "json": "sirensKingdom/img/anim/coins/bronze-coin.json",
            "sprite": "sirensKingdom/img/anim/coins/bronze-coin.png"
        },
        "part-2": {
            "json": "sirensKingdom/img/anim/coins/silver-coin.json",
            "sprite": "sirensKingdom/img/anim/coins/silver-coin.png"
        },
        "part-3": {
            "json": "sirensKingdom/img/anim/coins/gold-coin.json",
            "sprite": "sirensKingdom/img/anim/coins/gold-coin.png"
        },
        "f-part-1": {
            "json": "sirensKingdom/img/anim/coins/bronze-coin-frwrd.json",
            "sprite": "sirensKingdom/img/anim/coins/bronze-coin-frwrd.png"
        },
        "f-part-2": {
            "json": "sirensKingdom/img/anim/coins/silver-coin-frwrd.json",
            "sprite": "sirensKingdom/img/anim/coins/silver-coin-frwrd.png"
        },
        "f-part-3": {
            "json": "sirensKingdom/img/anim/coins/gold-coin-frwrd.json",
            "sprite": "sirensKingdom/img/anim/coins/gold-coin-frwrd.png"
        },
        "flower": {
            "json": "sirensKingdom/img/fore-ground-anim/sea-flowers-left.json",
            "sprite": "sirensKingdom/img/fore-ground-anim/sea-flowers-left.png"
        },
        "bubble": {
            "json": "sirensKingdom/img/fore-ground-anim/bubble-right.json",
            "sprite": "sirensKingdom/img/fore-ground-anim/bubble-right.png"
        },
        "smallBubble": {
            "json": "sirensKingdom/img/fore-ground-anim/small-bubbles.json",
            "sprite": "sirensKingdom/img/fore-ground-anim/small-bubbles.png"
        },
        "mermaid":{
            "json": "sirensKingdom/img/fore-ground-anim/side-mermid.json",
            "sprite": "sirensKingdom/img/fore-ground-anim/side-mermid.png"
        },
        "mermaidR":{
            "json": "sirensKingdom/img/fore-ground-anim/side-mermaid-right.json",
            "sprite": "sirensKingdom/img/fore-ground-anim/side-mermaid-right.png"
        }
    },
    "importantSounds": {
        "spinClick": {
            "name": "sirensKingdom/sounds/spinClick.mp3",
            "volume": .2
        },
        "reelSound": {
            "name": "sirensKingdom/sounds/reelSound.mp3",
            "volume":.8
        },
        "reelSoundFast_0": {
            "name": "sirensKingdom/sounds/reelSoundFast.mp3",
            "volume":.6
        },
        "reelSoundFast1_0": {
            "name": "sirensKingdom/sounds/reelSoundFast5.mp3",
            "volume":1
        },
        "reelSoundFast_1": {
            "name": "sirensKingdom/sounds/reelSoundFast.mp3",
            "volume":.6
        },
        "reelSoundFast1_1": {
            "name": "sirensKingdom/sounds/reelSoundFast5.mp3",
            "volume":1
        },
        "reelSoundFast_2": {
            "name": "sirensKingdom/sounds/reelSoundFast.mp3",
            "volume":.6
        },
        "reelSoundFast1_2": {
            "name": "sirensKingdom/sounds/reelSoundFast5.mp3",
            "volume":1
        },
        "reelSoundFast_3": {
            "name": "sirensKingdom/sounds/reelSoundFast.mp3",
            "volume":.6
        },
        "reelSoundFast1_3": {
            "name": "sirensKingdom/sounds/reelSoundFast5.mp3",
            "volume":1
        },
        "reelSoundFast_4": {
            "name": "sirensKingdom/sounds/reelSoundFast.mp3",
            "volume":.6
        },
        "reelSoundFast1_4": {
            "name": "sirensKingdom/sounds/reelSoundFast5.mp3",
            "volume":1
        },
        "reelStop": {
            "name": "sirensKingdom/sounds/reelStop.mp3",
            "volume":.4
        }
    },
 "sounds": {
        "click": {
            "name": "sirensKingdom/sounds/click.mp3",
            "volume": .2
        },
        "smbWin_0": {
            "name": "sirensKingdom/sounds/smbWin_0.mp3",
            "volume": 1.1
        },
        "smbWin_1": {
            "name": "sirensKingdom/sounds/smbWin_0.mp3",
            "volume": 1.1
        },
        "smbWin_2": {
            "name": "sirensKingdom/sounds/smbWin_0.mp3",
            "volume": 1.1
        },
        "smbWin_3": {
            "name": "sirensKingdom/sounds/smbWin_0.mp3",
            "volume": 1.1
        },
        "smbWin_4": {
            "name": "sirensKingdom/sounds/smbWin_0.mp3",
            "volume": 1.15
        },
        "smbWin_5": {
            "name": "sirensKingdom/sounds/smbWin_5.mp3",
            "volume": 1.15
        },
        "smbWin_6": {
            "name": "sirensKingdom/sounds/smbWin_6.mp3",
            "volume": 1.15
        },
        "smbWin_7": {
            "name": "sirensKingdom/sounds/smbWin_7.mp3",
            "volume": 1.15
        },
        "smbWin_8": {
            "name": "sirensKingdom/sounds/smbWin_8.mp3",
            "volume": .8
        },
        "stickyWild": {
            "name": "sirensKingdom/sounds/stickywild.mp3",
            "volume": .6
        },
        "wildReel": {
            "name": "sirensKingdom/sounds/wildReel.mp3",
            "volume": .5
        },
        "wildReelFast": {
            "name": "sirensKingdom/sounds/wildReel.mp3",
            "volume": .25
        },
        "wildReelOut": {
            "name": "sirensKingdom/sounds/wildReelRollBack.mp3",
            "volume": .4
        },
        "fsWin": {
            "name": "sirensKingdom/sounds/fsWin.mp3",
            "volume": .5
        },
        "fsWon": {
            "name": "sirensKingdom/sounds/introFs.mp3",
            "volume": .5
        },
        "incWin": {
            "name": "sirensKingdom/sounds/counter.mp3",
            "volume": .4,
            "loop": true
        },
        "line": {
            "name": "sirensKingdom/sounds/line.mp3",
            "volume": .3
        },
        "winBg_0": {
            "name": "sirensKingdom/sounds/centralWin/win1.mp3",
            "volume": 0
        },
        "winBg_1": {
            "name": "sirensKingdom/sounds/centralWin/win2.mp3",
            "volume": .6
        },
        "winBg_2": {
            "name": "sirensKingdom/sounds/centralWin/win3.mp3",
            "volume": .6
        },
        "winBg_3": {
            "name": "sirensKingdom/sounds/centralWin/win4.mp3",
            "volume": .6
        },
        "winBg_4": {
            "name": "sirensKingdom/sounds/centralWin/win5.mp3",
            "volume": .6
        },
        "winBg_5": {
            "name": "sirensKingdom/sounds/centralWin/win6.mp3",
            "volume": .6
        },
        "winBg_6": {
            "name": "sirensKingdom/sounds/centralWin/bigWin_Full.mp3",
            "volume": .7
        },
        "winBg_7": {
            "name": "sirensKingdom/sounds/centralWin/superBigWin_Full.mp3",
            "volume": .8
        },
        "winBg_8": {
            "name": "sirensKingdom/sounds/centralWin/megaBigWin_Full.mp3",
            "volume": .8
        },
        "winBgS_6": {
            "name": "sirensKingdom/sounds/centralWin/bigWin.mp3",
            "volume": .8
        },
        "winBgS_7": {
            "name": "sirensKingdom/sounds/centralWin/superBigWin.mp3",
            "volume": .8
        },
        "winBgS_8": {
            "name": "sirensKingdom/sounds/centralWin/megaBigWin.mp3",
            "volume": .8
        },
        "winPanel": {
            "name": "sirensKingdom/sounds/winScreen.mp3",
            "volume": .8
        },
        "coins": {
            "name": "sirensKingdom/sounds/coins.mp3",
            "volume":.3
        },
        "whl": {
            "name": "sirensKingdom/sounds/winHighlight.mp3",
            "volume":.8
        }
    },
    "bgSounds": {
        "bgSlot": {
            "name": "sirensKingdom/sounds/bg.mp3",
            "volume": .8
        },

        "bgFs": {
            "name": "sirensKingdom/sounds/bgfs.mp3",
            "volume":.6
        }
    },
    "video":{
        "promoVideo":"sirensKingdom/img/info-page.mp4"
    }

};
var guiConfig = {
    "credits": ["cash","credits"]
};
var displayManager = {
    "render":Phaser.AUTO,
    "groups": {
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
        "frameFS": {
            "visible":false,
            "graphAsset": {
                "bg4": {
                    "name": "bgFS_m",
                    "x": 200,
                    "y": 104
                }
            }
        },
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
        "bgFS": {
            "visible":false,
            "graphAsset": {
                "bg": {
                    "name": "bgFS_r",
                    "x": 1080,
                    "y": 104
                },
                "bg1": {
                    "name": "bgFS_l",
                    "x": 0,
                    "y": 104
                }
            }
        },

        "bgIconAnim":{},
        "reels": {},
        "wild": {},
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
                "reel": {
                    "name": "reel-mask",
                    "x": 200,
                    "y": 104
                }
            }
        },
        "maskFS":{
            "visible":false,
            "graphAsset": {
                "bg2": {
                    "name": "bgFS_b",
                    "x": 0,
                    "y": 632
                },
                "bg3": {
                    "name": "bgFS_t",
                    "x": 0,
                    "y": 0
                },
                "reel": {
                    "name": "reelFS-mask",
                    "x": 200,
                    "y": 104
                }
             }
        },
        "mermadeLevel":{
            "visible": false,
            "graphAsset": {
                "mermade": {
                    "visible":false,
                    "name": "mermaid",
                    "x": 70,
                    "y": 357,
                    "scaleX":-1,
                    "anchorX": 0.5,
                    "anchorY": 0.5,
                    "fps": 8
                },
                "mermadeR": {
                    "visible":false,
                    "name": "mermaidR",
                    "x": 1148,
                    "y": 264,
                    "anchorX": 0.5,
                    "anchorY": 0.5,
                    "fps": 8
                }
            }
        },
        "seaLife":{
            "visible":false,
            "graphAsset":{
                "s1": {
                    "name": "flower",
                    "x": 114,
                    "y": 620,
                    "anchorX":0.5,
                    "anchorY":0.5,
                    "fps":12
                },
                "s3": {
                    "name": "flower",
                    "x": 1170,
                    "y": 600,
                    "scaleX":-1,
                    "scaleY":1,
                    "anchorX":0.5,
                    "anchorY":0.5,
                    "fps":12
                },
                "s2": {
                    "name": "bubble",
                    "x": 70,
                    "y": 357,
                    "scaleX":-1,
                    "scaleY":1,
                    "anchorX":0.5,
                    "anchorY":0.5,
                    "fps":20
                },
                "s4": {
                    "name": "bubble",
                    "x": 1190,
                    "y": 350,
                    "scaleX":1,
                    "scaleY":1,
                    "anchorX":0.5,
                    "anchorY":0.5,
                    "fps":20
                }
            }
        },
        "buttonFg":{
            "visible":false,
            "graphAsset": {
                "bg1": {
                    "name": "buttonBg",
                    "x": 640,
                    "y": 633,
                    "anchorX":.5
                }
            }
        },
        "buttonFg":{
            "visible":false
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
        "logo": {
            "visible":false,
            "graphAsset": {
                "logo": {
                    "name": "logo",
                    "x": 640,
                    "y": 4,
                    "anchorX":.5
                }
            }
        },
        "scatter": {},
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
                    "x": 640,
                    "anchorX": 0.5,
                    "y": 0
                }
            },
            "texts": {
                "frLabel": {
                    "x": 295,
                    "y": 20,
                    "fill": "#FFFFFF",
                    "font": "13px Futura ,Arial",
                    "text": "Free Rounds:",

                    "anchorX": 1
                },
                "frValue": {
                    "x": 262,
                    "y": 36,
                    "fill": "#FFFFFF",
                    "font": "23px Futura ,Arial",
                    "text": "5",
                    "anchorX": 0.5
                },
                "frTotWonLabel": {
                    "x": 1050,
                    "y": 20,
                    "fill": "#FFFFFF",
                    "font": "13px Futura ,Arial",
                    "text": "Total won:",
                    "anchorX": 1
                },
                "frTotWonValue": {
                    "x": 1020,
                    "y": 36,
                    "fill": "#FFFFFF",
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
                    "anchorX":.5,
                    "y": 0
                },
                "lo":{
                    "name": "octoPussy",
                    "x": 312,
                    "anchorX":.5,
                    "y": 26
                },
                "ro":{
                    "name": "octoPussy",
                    "x": 966,
                    "anchorX":.5,
                    "scaleX":-1,
                    "y": 26
                }
            },
            "texts": {
                "fsLabel": {
                    "x": 510,
                    "y": 45,
                    "fill": "#005b90",
                    "font": "13px Futura ,Arial",
                    "text": "Free Spins",
                    "anchorX": 1
                },
                "fsValue": {
                    "x": 480,
                    "y": 15,
                    "fill": "#022f4a",
                    "font": "23px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                },
                "totWonLabel": {
                    "x": 835,
                    "y": 45,
                    "fill": "#005b90",
                    "font": "13px Futura ,Arial",
                    "text": "Total won",
                    "anchorX": 1
                },
                "totWonValue": {
                    "x": 805,
                    "y": 15,
                    "fill": "#022f4a",
                    "font": "23px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                }
            }
        },
        "fsWonPanel": {
            "visible": false,
            "fakeButton": true,
            "evt": "fireConfirmation",
            "duration": 500,
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
                    "y": 320,
                    "fill": "#ffffff",
                    "font": "28px FuturaPT-Heavy",
                    "text": "You won",
                    "anchorX": .5
                },
                "fsValue1": {
                    "x": 640,
                    "y": 370,
                    "fill": "#ffffff",
                    "font": "28px FuturaPT-Heavy",
                    "text": "5",
                    "anchorX": .5
                },
                "fsWLabel1": {
                    "x": 640,
                    "y": 420,
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
                    "y": 370,
                    "anchorX": .5,
                    "anchorY": .5,
                    "scaleX":1.2,
                    "scaleY":1.2
                }
            },
            "texts": {
                "frWLabelTitol": {
                    "x": 640,
                    "y": 270,
                    "fill": "#ffffff",
                    "font": "14px FuturaPT-Book",
                    "text":"",
                    "anchorX": .5
                },
                "frWLabel": {
                    "x": 640,
                    "y": 320,
                    "fill": "#ffffff",
                    "font": "18px FuturaPT-Book",
                    "text":"",
                    "align":"center",
                    "anchorX": .5
                },
                "frValue1": {
                    "x": 640,
                    "y": 360,
                    "fill": "#ffffff",
                    "font": "24px FuturaPT-Book",
                    "text": "5",
                    "anchorX": .5
                },
                "frWLabel1": {
                    "x": 640,
                    "y": 390,
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
                    "size": "70",
                    "text": "",
                    "anchorX": .5,
                    "anchorY": .5
                }
            }
        },
        "centralFuntainSmallObj":{},
        "preview": {
            "visible": false,
            "eventBlock": true,
            "graphAsset": {
                "bgPreview": {
                    "name": "bgPreview",
                    "x": 0,
                    "y": 0
                },
                "ilogo":{
                    "name": "introLogo",
                    "x": 640,
                    "y": 0,
                    "anchorX":.5
                }
            },
            "slide": {
                "x": 640,
                "y": 140,
                "buttonBaseX": -25,
                "buttonBaseY": 455,
                "time": 4000,
                "slides": {
                    "0": {
                        "x": 0,
                        "y": 0,
                        "visible": true,
                        "graphAsset": {
                            "bgPreview": {
                                "name": "slide_0",
                                "anchorX": .5,
                                "x": 0,
                                "y": 90
                            }
                        },
                        "texts": {
                            "txtPrev0": {
                                "x": 0,
                                "y": 0,
                                "fill": "#ff81b5",
                                "font": "24px Futura PT, Arial",
                                "text": "Siren's Expanding wild reel in normal game",
                                "anchorX": .5,
                                "align": "center"
                            }
                        }
                    },
                    "1": {
                        "x": 0,
                        "y": 0,
                        "visible": false,
                        "graphAsset": {
                            "bgPreview": {
                                "name": "slide_1",
                                "anchorX": .5,
                                "x": 0,
                                "y": 90
                            }
                        },
                        "texts": {
                            "txtPrev0": {
                                "x": 0,
                                "y": 0,
                                "fill": "#ff81b5",
                                "font": "24px Futura PT, Arial",
                                "text": "Win up to 36 Free Spins challenging the Siren's temptation trap",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev1": {
                                "x": 0,
                                "y": 30,
                                "fill": "#ff2f91",
                                "font": "20px Futura PT, Arial",
                                "text": "During Free Spins, Sticky expanding wild Siren's appears and expands on 2 sides",
                                "anchorX": .5,
                                "align": "center"
                            }
                        }
                    },
                    "2": {
                        "x": 0,
                        "y": 0,
                        "visible": false,
                        "graphAsset": {
                            "bgPreview": {
                                "name": "slide_2",
                                "anchorX": .5,
                                "x": 0,
                                "y": 90
                            }
                        },
                        "texts": {
                            "txtPrev0": {
                                "x": 0,
                                "y": 0,
                                "fill": "#ff81b5",
                                "font": "24px Futura PT, Arial",
                                "text": "Win up to 36 Free Spins challenging the Siren's temptation trap",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev1": {
                                "x": 0,
                                "y": 30,
                                "fill": "#ff2f91",
                                "font": "20px Futura PT, Arial",
                                "text": "Multiple Sticky wilds leads to big winnings",
                                "anchorX": .5,
                                "align": "center"
                            }
                        }
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
                    "y": 665,
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
                    "y": 320,
                    "fill": "#ffffff",
                    "font": "22px FuturaPT-Book",
                    "text": ".wqdwe",
                    "anchorX": .5
                },
                "msg2": {
                    "x": 640,
                    "y": 370,
                    "fill": "#ffffff",
                    "font": "20px FuturaPT-Book",
                    "text": ".ewfwefewf",
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
        },
        "msgBoxFR": {
            "visible":false,
            "eventBlock":true,
            "selectorY":230,
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
                    "scaleX":1.2,
                    "scaleY":1.2
                }
            },
            "texts": {
                "msgFR1": {
                    "x": 640,
                    "y": 260,
                    "fill": "#ffffff",
                    "font": "22px FuturaPT-Book",
                    "text": ".wqdwe",
                    "anchorX": .5
                },
                "msgFR2": {
                    "x": 640,
                    "y": 290,
                    "fill": "#ffffff",
                    "font": "20px FuturaPT-Book",
                    "text": ".ewfwefewf",
                    "anchorX": .5
                }
            },
            "buttons": {
                "yes": {
                    "name": "genericBtn",
                    "x": 500,
                    "y": 560,
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
                    "y": 560,
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
                    "y": 560,
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
    "slotEngine":"SirensEngine",
    "engineNumbers":15,
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
    "lineType": "AllLineWinningsFirst",
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
    "spinWithAlpha":.6,
    "spinConfig":{
        "es":{
            "stopEnabled":false,
            "reelSecondMovementTime":0.5,
            "reelLoopInterval":.17,
            "reelPreMovement": 4,
            "reelPreMovementTime": .2,
            "reelBaseInterval": 5,
            "reelStopInterval": 1,
            "reelSpinBounceMeasure": 40,
            "reelSpinBounceTime": .28,
            "reelSpinBounceForce": 1.2
        },
        "default":{
            "stopEnabled":true,
            "reelInterval":100,
            "reelSecondMovementTime":0.4,
            "reelLoopInterval":.18,
            "reelPreMovement": 20,
            "reelPreMovementTime": 0.1,
            "reelBaseInterval": 1,
            "reelStopInterval": 1,
            "reelSpinBounceMeasure": 36,
            "reelSpinBounceTime": .27,
            "reelSpinBounceForce": 1.2
        }
    },
    "numIcon": 9,
    "loadTout": 30,
    "credits": "5000",
    "bet": "0.50",
    "animDelayAfterWild":1200,
    "freeRounds":"normal",
    "freeSpins":"FreeSpins",
    "_fsIcon": 1,
    "winHLScale":1.35,
    "fsSpinDelay":750,
    "minFsSmbs":3,
    "_scatterIcon": 10,
    "_scatterType": "SubstScatter",
    "_twinReelsFeature":"normal",
    "wildType": "WildReel",
    "wildNum": [9],
    "wildReelOrigin":0,
    "wildReelRollbackSpinDelay": 500,
    "wilTextAnimOnly":true,
    "winTxtClasses": [1, 2, 5, 10, 20, 50, 100, 300, 500, 1000],
    "smb_colors":[0xff33cc,0xcc33ff,0x0066ff,0x00ff99,0xffcc00,0xff33cc,0xcc33ff,0x0066ff,0x00ff99,0xffcc00,0xffcc00],
    "smbMinAnimTime":[.5,.5,.5,.5,.5,.5,.5,1.5,.5,.5],
    "muteDuringWins":true,
    "keepShowingAnimation":false,
    "additionalPreText":"",
    "additionalPostText":"",
    "reel": {
        "deltaX_0": 200,
        "deltaX": 176,
        "deltaY_0": 632,
        "deltaY": 176
    },
    "icon": {
        "x": 0,
        "y": 0,
        "width": 176,
        "height": 176
    }
};
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
        "color": "0xCC0000",
        "tickBase": 5,
        "alpha": 1,
        "pointToPointSpeed": .5,
        "duration": 30,
        "showWinWithSmbColor": true,
        "multipleAnimation": [false, false, false, false, false, false, false, false, false, false, false, false],
        "lineColours": [0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff],
    }
};


var paytableAssets = {

    "translatePosition": true,

    "bg" : "sirensKingdom/img/paytable/pt-base-main.png",

    "closeBtn": {

        "ypos": "140",
        "xpos": "1000"

    },

    "pagination" : {

        "ypos" : "578",
        "xpos" : "484",
        "checked" : "#fff",
        "unchecked" : "#000000"

    },

    "helpPath" : gameParams.pathCDN + 'ironDog/help/mobile/sirensKingdom/help_' + gameParams.lang+".json",

    "buttons" : [

        {
            "id" : "left",
            "ypos" : "422",
            "xpos" : "5",
            "bg_up" : "sirensKingdom/img/paytable/forward-btn-up.png",
            "bg_over" : "sirensKingdom/img/paytable/forward-btn-over.png",
            "bg_down" : "sirensKingdom/img/paytable/forward-btn-down.png",
            "direction" : -1
        },

        {
            "id" : "right",
            "ypos" : "422",
            "xpos" : "855",
            "bg_up" : "sirensKingdom/img/paytable/forward-btn-up.png",
            "bg_over" : "sirensKingdom/img/paytable/forward-btn-over.png",
            "bg_down" : "sirensKingdom/img/paytable/forward-btn-down.png",
            "direction" : 1
        }

    ],

    "pages" : [
        {

            "gameguide" : true,
            "title" : "Siren's Kingdom Game Rules",
            "title_xpos" : "520",
            "title_ypos" : "130",
            "xpos" : "200",
            "ypos" : "185",
            "height" : "331",
            "width" : "830",
            "fill": "#fff",
            "font" : "FuturaPT-Book, Arial, sans-serif",
            "rtp": [
                "96.18",
                "96.18",
                "96.18"
            ]

        },
        {

            "symbols" : [

                {
                    "id" : "symbol_00",
                    "bg" : "sirensKingdom/img/symbol-00.png",
                    "xpos": "313",
                    "ypos": "160",
                    "height": "175px",
                    "width": "175px",
                    "text": {
                        "value": 0,
                        "xpos": "60",
                        "ypos": "185",
                        "width": "109",
                        "left_fill": "#06e1ff",
                        "right_fill": "#a1ff80",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_01",
                    "bg" : "sirensKingdom/img/symbol-01.png",
                    "xpos": "543",
                    "ypos": "160",
                    "height": "175px",
                    "width": "175px",
                    "text": {
                        "value": 1,
                        "xpos": "60",
                        "ypos": "185",
                        "width": "109",
                        "left_fill": "#06e1ff",
                        "right_fill": "#a1ff80",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_02",
                    "bg" : "sirensKingdom/img/symbol-02.png",
                    "xpos": "772",
                    "ypos": "160",
                    "height": "175px",
                    "width": "175px",
                    "text": {
                        "value": 2,
                        "xpos": "60",
                        "ypos": "185",
                        "width": "109",
                        "left_fill": "#06e1ff",
                        "right_fill": "#a1ff80",
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
                    "ypos" : "500",
                    "width" : "500",
                    "fill" : "#f9ff79",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "14px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols": [

                {
                    "id" : "symbol_03",
                    "bg" : "sirensKingdom/img/symbol-03.png",
                    "xpos": "313",
                    "ypos": "160",
                    "height": "175px",
                    "width": "175px",
                    "text": {
                        "value": 3,
                        "xpos": "60",
                        "ypos": "185",
                        "width": "109",
                        "left_fill": "#06e1ff",
                        "right_fill": "#a1ff80",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_04",
                    "bg" : "sirensKingdom/img/symbol-04.png",
                    "xpos": "543",
                    "ypos": "160",
                    "height": "175px",
                    "width": "175px",
                    "text": {
                        "value": 4,
                        "xpos": "60",
                        "ypos": "185",
                        "width": "109",
                        "left_fill": "#06e1ff",
                        "right_fill": "#a1ff80",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_05",
                    "bg" : "sirensKingdom/img/symbol-05.png",
                    "xpos": "772",
                    "ypos": "160",
                    "height": "175px",
                    "width": "175px",
                    "text": {
                        "value": 5,
                        "xpos": "60",
                        "ypos": "185",
                        "width": "109",
                        "left_fill": "#06e1ff",
                        "right_fill": "#a1ff80",
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
                    "ypos" : "500",
                    "width" : "500",
                    "fill" : "#f9ff79",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "14px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols": [

                {
                    "id" : "symbol_06",
                    "bg" : "sirensKingdom/img/symbol-06.png",
                    "xpos": "313",
                    "ypos": "160",
                    "height": "175px",
                    "width": "175px",
                    "text": {
                        "value": 6,
                        "xpos": "60",
                        "ypos": "185",
                        "width": "109",
                        "left_fill": "#06e1ff",
                        "right_fill": "#a1ff80",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_07",
                    "bg" : "sirensKingdom/img/symbol-07.png",
                    "xpos": "543",
                    "ypos": "160",
                    "height": "175px",
                    "width": "175px",
                    "text": {
                        "value": 7,
                        "xpos": "60",
                        "ypos": "185",
                        "width": "109",
                        "left_fill": "#06e1ff",
                        "right_fill": "#a1ff80",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_08",
                    "bg" : "sirensKingdom/img/symbol-08.png",
                    "xpos": "772",
                    "ypos": "160",
                    "height": "175px",
                    "width": "175px",
                    "text": {
                        "value": 8,
                        "xpos": "60",
                        "ypos": "185",
                        "width": "109",
                        "left_fill": "#06e1ff",
                        "right_fill": "#a1ff80",
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
                    "ypos" : "500",
                    "width" : "500",
                    "fill" : "#f9ff79",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "14px",
                    "align" : "center"
                }

            ]

        },


        {

            "symbols": [

                {
                    "id" : "symbol_09",
                    "bg" : "sirensKingdom/img/symbol-09.png",
                    "xpos": "330",
                    "ypos": "155",
                    "height": "175px",
                    "width": "175px"
                },

                {
                    "id" : "symbol_09_screenshot",
                    "bg" : "sirensKingdom/img/paytable/symbol-09-screenshot.png",
                    "xpos": "600",
                    "ypos": "175",
                    "width": "350px"
                }

            ],

            "text": [

                {
                    "value": [
                        "The wild appears on any top position of the reels and expands to cover the entire reel.",
                        "It completes and substitutes all the icons except for free spin.",
                        "More than 1 wild can appear at the same time."
                    ],
                    "xpos": "265",
                    "ypos": "360",
                    "width": "750",
                    "fill": "#a1ff80",
                     "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "22px",
                    "align": "center",
                    "spacing": "10"
                },

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "500",
                    "width" : "500",
                    "fill" : "#f9ff79",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "14px",
                    "align" : "center"
                    }

            ]

                },



                {


            "symbols": [

                {
                    "id" : "symbol_12_text",
                    "bg" : "sirensKingdom/img/symbol-12.png",
                    "xpos": "330",
                    "ypos": "165",
                    "height": "175px",
                    "width": "175px"
                },

                {
                    "id" : "symbol_12_screenshot",
                    "bg" : "sirensKingdom/img/paytable/symbol-12-screenshot.png",
                    "xpos": "600",
                    "ypos": "175",
                    "width": "350px"
                }

            ],

            "text": [

                {
                    "value": "Free spin symbols can appear on any position on the reels.",
                    "xpos": "265",
                    "ypos": "370",
                    "width": "750",
                    "fill": "#fff",
                     "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "22px",
                    "align": "center",
                    "margin": "0"
                },

                {
                    "value": [
                        "Number of awarded free spins:",
                        "3 symbols award 14 free spins",
                        "4 symbols award 25 free spins",
                        "5 symbols award 36 free spins"
            ],
                    "xpos": "265",
                    "ypos": "390",
                    "width": "750",
                    "fill": "#fff",
                    "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "18px",
                    "align": "center",
                    "spacing": "0"
                },
                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "500",
                    "width" : "500",
                    "fill" : "#f9ff79",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "14px",
                    "align" : "center"
                }
            ]
        },

        {

            "symbols": [

                {
                    "id" : "symbol_10",
                    "bg" : "sirensKingdom/img/symbol-10.png",
                    "xpos": "300",
                    "ypos": "160",
                    "height": "175px",
                    "width": "175px",
                    "text": {
                        "value": 10,
                        "xpos": "50",
                        "ypos": "185",
                        "width": "109",
                        "left_fill": "#06e1ff",
                        "right_fill": "#a1ff80",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "freespin-screenshot",
                    "bg" : "sirensKingdom/img/paytable/symbol-10-screenshot.png",
                    "xpos": "600",
                    "ypos": "175",
                    "width": "350px"
                },


            ],

            "text": [
                {
                    "value": "The sticky wild inside freespins will expand outwards in two different directions on the second spin, after which it will disappear",
                    "xpos": "265",
                    "ypos": "400",
                    "width": "750",
                    "fill": "#ffffff",
                     "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "22px",
                    "align": "center",
                    "margin": "0"
                },
                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "500",
                    "width" : "500",
                    "fill" : "#f9ff79",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "14px",
                    "align" : "center"
                }

            ]

        },

        {

            "lines": [1, 10],
            "ypos": "225",
            "font" : "FuturaPT-Book, Arial, sans-serif",
            "text_colour": "#93d8fe",
            "checked_colour": "#fff",
            "unchecked_colour": "#06e1ff",

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "500",
                    "width" : "500",
                    "fill" : "#f9ff79",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "14px",
                    "align" : "center"
                }

            ]

        },

        {

            "lines": [11, 20],
            "ypos": "225",
            "font" : "FuturaPT-Book, Arial, sans-serif",
            "text_colour": "#93d8fe",
            "checked_colour": "#fff",
            "unchecked_colour": "#06e1ff",

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "500",
                    "width" : "500",
                    "fill" : "#f9ff79",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "14px",
                    "align" : "center"
                }

            ]

        },

        {

            "lines": [21, 30],
            "ypos": "225",
            "font" : "FuturaPT-Book, Arial, sans-serif",
            "text_colour": "#93d8fe",
            "checked_colour": "#fff",
            "unchecked_colour": "#06e1ff",

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "500",
                    "width" : "500",
                    "fill" : "#f9ff79",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "14px",
                    "align" : "center"
                }

            ]

        }

    ]

};
