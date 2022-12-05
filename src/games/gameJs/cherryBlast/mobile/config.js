
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
        "sprite": "fonts/fontCherryBlast.png",
        "font": "fonts/fontCherryBlast.xml"
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
        "icon0": "cherryBlast/img/symbol-00.png",
        "icon1": "cherryBlast/img/symbol-01.png",
        "icon2": "cherryBlast/img/symbol-02.png",
        "icon3": "cherryBlast/img/symbol-03.png",
        "icon4": "cherryBlast/img/symbol-04.png",
        "icon5": "cherryBlast/img/symbol-05.png",
        "icon6": "cherryBlast/img/symbol-06.png",
        "icon7": "cherryBlast/img/symbol-07.png",
        "bicon0": "cherryBlast/img/b-symbol-00.png",
        "bicon1": "cherryBlast/img/b-symbol-01.png",
        "bicon2": "cherryBlast/img/b-symbol-02.png",
        "bicon3": "cherryBlast/img/b-symbol-03.png",
        "bicon4": "cherryBlast/img/b-symbol-04.png",
        "bicon5": "cherryBlast/img/b-symbol-05.png",
        "bicon6": "cherryBlast/img/b-symbol-06.png",
        "bicon7": "cherryBlast/img/b-symbol-07.png",
        "icon8": "cherryBlast/img/symbol-08.png",
        "icon9": "cherryBlast/img/symbol-09.png",
        "icon10": "cherryBlast/img/symbol-10.png",
        "icon11": "cherryBlast/img/symbol-11.png",
        "icon12": "cherryBlast/img/symbol-12.png",
        "icon13": "cherryBlast/img/symbol-13.png",
        "icon14": "cherryBlast/img/symbol-14.png",
        "bicon14": "cherryBlast/img/b-symbol-14.png",
        "icon15": "cherryBlast/img/symbol-15.png",
        "line_0_00": "cherryBlast/img/lines/line_0_0001.png",
        "line_0_01": "cherryBlast/img/lines/line_0_0002.png",
        "line_0_02": "cherryBlast/img/lines/line_0_0003.png",
        "line_0_03": "cherryBlast/img/lines/line_0_0004.png",
        "line_0_04": "cherryBlast/img/lines/line_0_0005.png",
        "line_0_05": "cherryBlast/img/lines/line_0_0006.png",
        "line_0_06": "cherryBlast/img/lines/line_0_0007.png",
        "line_0_07": "cherryBlast/img/lines/line_0_0008.png",
        "line_0_08": "cherryBlast/img/lines/line_0_0009.png",
        "line_0_09": "cherryBlast/img/lines/line_0_0010.png",
        "line_0_10": "cherryBlast/img/lines/line_0_0011.png",
        "line_0_11": "cherryBlast/img/lines/line_0_0012.png",
        "line_0_12": "cherryBlast/img/lines/line_0_0013.png",
        "line_0_13": "cherryBlast/img/lines/line_0_0014.png",
        "line_0_14": "cherryBlast/img/lines/line_0_0015.png",
        "line_0_15": "cherryBlast/img/lines/line_0_0016.png",
        "line_0_16": "cherryBlast/img/lines/line_0_0017.png",
        "line_0_17": "cherryBlast/img/lines/line_0_0018.png",
        "line_0_18": "cherryBlast/img/lines/line_0_0019.png",
        "bonusLogo": "cherryBlast/img/bonus/bonus-logo.png",
        "bottomBar": "gui/message-bar.png",
        "bgPanel": "cherryBlast/img/bgPanel.png",
        "bgPanelGame": "cherryBlast/img/bgPanel.png",
        "bgBlack": "gui/generic/img/mobile/png/black.png",
        "bgPreview":"cherryBlast/img/info-screen.png",
        "freeRoundsPanel":"cherryBlast/img/free-rounds.png",
        "bgAlpha": "cherryBlast/img/alpha.png",
        "bigWin":"cherryBlast/img/bigWin.png",
        "superWin":"cherryBlast/img/super-bigwin.png",
        "megaWin":"cherryBlast/img/mega-bigwin.png",
        "bg_r": "cherryBlast/img/bg/base-right.png",
        "bg_l": "cherryBlast/img/bg/base-left.png",
        "bg_b": "cherryBlast/img/bg/base-bottom.png",
        "bg_t": "cherryBlast/img/bg/base-top.png",
        "bg_m": "cherryBlast/img/bg/base-main.png",
        "dash":"cherryBlast/img/bonus/blocks.png",
        "bg_r_b": "cherryBlast/img/bonus/bonus-base-right.png",
        "bg_l_b": "cherryBlast/img/bonus/bonus-base-left.png",
        "bg_b_b": "cherryBlast/img/bonus/bonus-base-bottom.png",
        "bg_t_b": "cherryBlast/img/bonus/bonus-base-top.png",
        "bg_m_b": "cherryBlast/img/bonus/bonus-base-main.png",
        "cherry":"cherryBlast/img/bonus/cherry.png",
        "path0":"cherryBlast/img/bonus/path-01.png",
        "path1":"cherryBlast/img/bonus/path-02.png",
        "path2":"cherryBlast/img/bonus/path-03.png",
        "path3":"cherryBlast/img/bonus/path-04.png",
        "path4":"cherryBlast/img/bonus/path-05.png",
        "gameOver":"cherryBlast/img/bonus/game-over.png",
        "buttonBg":"gui/generic/img/desktop/png/cp-info-bar.png",
        "volOnButton": "gui/btnVolOn.png",
        "volOffButton": "gui/btnVolOff.png",
        "freeSpinPanel":"cherryBlast/img/free-spins.png",
        "swipeImg":"gui/generic/img/mobile/png/swipe.png"
    },
    "localizedAssets":{
        "graphAsset": {
            "logo": {
                "lang": ["zs","ko","jp"],
                "img": "cherryBlast/img/logo"
            }
        }
    },
    "buttonsSpriteSheet": {
        "container-btn": {
            "sprite": "cherryBlast/img/game-btn.png",
            "json": "cherryBlast/img/game-btn.png",
            "w": 208,
            "h": 66
        },
        "yesButton": {
            "sprite": "cherryBlast/img/yes-btn.png",
            "json": "cherryBlast/img/yes-btn.png",
            "w": 48,
            "h": 44
        },
        "noButton": {
            "sprite": "cherryBlast/img/no-btn.png",
            "json": "cherryBlast/img/no-btn.png",
            "w": 48,
            "h": 44
        },
        "check": {
            "sprite": "cherryBlast/img/radio-btns.png",
            "json": "cherryBlast/img/radio-btns.png",
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
            "json": "cherryBlast/img/anim/symbol-00.json",
            "sprite": "cherryBlast/img/anim/symbol-00.png"
        },
        "anim1": {
            "json": "cherryBlast/img/anim/symbol-01.json",
            "sprite": "cherryBlast/img/anim/symbol-01.png"
        },
        "anim2": {
            "json": "cherryBlast/img/anim/symbol-02.json",
            "sprite": "cherryBlast/img/anim/symbol-02.png"
        },
        "anim3": {
            "json": "cherryBlast/img/anim/symbol-03.json",
            "sprite": "cherryBlast/img/anim/symbol-03.png"
        },
        "anim4": {
            "json": "cherryBlast/img/anim/symbol-04.json",
            "sprite": "cherryBlast/img/anim/symbol-04.png"
        },
        "anim5": {
            "json": "cherryBlast/img/anim/symbol-05.json",
            "sprite": "cherryBlast/img/anim/symbol-05.png"
        },
        "anim6": {
            "json": "cherryBlast/img/anim/symbol-06.json",
            "sprite": "cherryBlast/img/anim/symbol-06.png"
        },
        "anim7": {
            "json": "cherryBlast/img/anim/symbol-07.json",
            "sprite": "cherryBlast/img/anim/symbol-07.png"
        },
        "anim8": {
            "json": "cherryBlast/img/anim/symbol-08.json",
            "sprite": "cherryBlast/img/anim/symbol-08.png"
        },
        "anim9": {
            "json": "cherryBlast/img/anim/symbol-09.json",
            "sprite": "cherryBlast/img/anim/symbol-09.png"
        },
        "anim10": {
            "json": "cherryBlast/img/anim/symbol-10.json",
            "sprite": "cherryBlast/img/anim/symbol-10.png"
        },
        "anim11": {
            "json": "cherryBlast/img/anim/symbol-11.json",
            "sprite": "cherryBlast/img/anim/symbol-11.png"
        },
        "anim12": {
            "json": "cherryBlast/img/anim/symbol-12.json",
            "sprite": "cherryBlast/img/anim/symbol-12.png"
        },
        "anim13": {
            "json": "cherryBlast/img/anim/symbol-13.json",
            "sprite": "cherryBlast/img/anim/symbol-13.png"
        },
        "anim14": {
            "json": "cherryBlast/img/anim/symbol-14.json",
            "sprite": "cherryBlast/img/anim/symbol-14.png"
        },
        "anim15": {
            "json": "cherryBlast/img/anim/symbol-15.json",
            "sprite": "cherryBlast/img/anim/symbol-15.png"
        },
        "cherryBlast": {
            "json": "cherryBlast/img/anim/cherry-blast-anim.json",
            "sprite": "cherryBlast/img/anim/cherry-blast-anim.png"
        },
        "specialDash":{
            "json": "cherryBlast/img/bonus/mystery-square.json",
            "sprite": "cherryBlast/img/bonus/mystery-square.png"
        },
        "cherryAnim":{
            "json": "cherryBlast/img/bonus/bonus-game-cherry.json",
            "sprite": "cherryBlast/img/bonus/bonus-game-cherry.png"
        },
        "cherryExplode":{
            "json": "cherryBlast/img/bonus/bonus-game-explode.json",
            "sprite": "cherryBlast/img/bonus/bonus-game-explode.png"
        },
        "cherryDeath":{
            "json": "cherryBlast/img/bonus/bonus-game-cherry-game-over.json",
            "sprite": "cherryBlast/img/bonus/bonus-game-cherry-game-over.png"
        },
        "cherryWin":{
            "json": "cherryBlast/img/bonus/bonus-game-cherry-win.json",
            "sprite": "cherryBlast/img/bonus/bonus-game-cherry-win.png"

        },
        "part-1": {
            "json": "cherryBlast/img/anim/bronze-coin.json",
            "sprite": "cherryBlast/img/anim/bronze-coin.png"
        },
        "part-2": {
            "json": "cherryBlast/img/anim/silver-coin.json",
            "sprite": "cherryBlast/img/anim/silver-coin.png"
        },
        "part-3": {
            "json": "cherryBlast/img/anim/gold-coin.json",
            "sprite": "cherryBlast/img/anim/gold-coin.png"
        },
        "f-part-1": {
            "json": "cherryBlast/img/anim/bronze-coin-frwrd.json",
            "sprite": "cherryBlast/img/anim/bronze-coin-frwrd.png"
        },
        "f-part-2": {
            "json": "cherryBlast/img/anim/silver-coin-frwrd.json",
            "sprite": "cherryBlast/img/anim/silver-coin-frwrd.png"
        },
        "f-part-3": {
            "json": "cherryBlast/img/anim/gold-coin-frwrd.json",
            "sprite": "cherryBlast/img/anim/gold-coin-frwrd.png"
        }
    },
    "importantSounds": {
        "spinClick": {
            "name": "cherryBlast/sounds/click.mp3",
            "volume": .1
        },
        "reelSound": {
            "name": "cherryBlast/sounds/reelSound.mp3",
            "volume":.2
        },
        "reelStop": {
            "name": "cherryBlast/sounds/reelStop.mp3",
            "volume":.2
        },
        "fuse": {
            "name": "cherryBlast/sounds/fuse.mp3",
            "volume": .7
        },
        "bomb": {
            "name": "cherryBlast/sounds/blast.mp3",
            "volume": .6
        }
    },
    "sounds": {
        "click": {
            "name": "cherryBlast/sounds/click.mp3",
            "volume": .2
        },
        "smbWin_0": {
            "name": "cherryBlast/sounds/smbWin_0.mp3",
            "volume": .6
        },
        "smbWin_1": {
            "name": "cherryBlast/sounds/smbWin_0.mp3",
            "volume": .6
        },
        "smbWin_2": {
            "name": "cherryBlast/sounds/smbWin_0.mp3",
            "volume": .6
        },
        "smbWin_3": {
            "name": "cherryBlast/sounds/smbWin_0.mp3",
            "volume": .6
        },
        "smbWin_4": {
            "name": "cherryBlast/sounds/smbWin_0.mp3",
            "volume": .6
        },
        "smbWin_5": {
            "name": "cherryBlast/sounds/smbWin_5.mp3",
            "volume": .6
        },
        "smbWin_6": {
            "name": "cherryBlast/sounds/smbWin_6.mp3",
            "volume": .6
        },
        "smbWin_7": {
            "name": "cherryBlast/sounds/smbWin_7.mp3",
            "volume": .6
        },
        "smbWin_8": {
            "name": "cherryBlast/sounds/smbWin_8.mp3",
            "volume": .6
        },
        "smbWin_9": {
            "name": "cherryBlast/sounds/smbWin_9.mp3",
            "volume": .6
        },
        "smbWin_10": {
            "name": "cherryBlast/sounds/smbWin_10.mp3",
            "volume": 1
        },
        "smbWin_11": {
            "name": "cherryBlast/sounds/smbWin_10.mp3",
            "volume": .6
        },
        "smbWin_12": {
            "name": "cherryBlast/sounds/smbWin_12.mp3",
            "volume": .6
        },
        "smbWin_13": {
            "name": "cherryBlast/sounds/smbWin_13.mp3",
            "volume": .6
        },
        "winEffect_1": {
            "name": "cherryBlast/sounds/centralWin/bigWin.mp3",
            "volume":.6
        },
        "winEffect_2": {
            "name": "cherryBlast/sounds/centralWin/superBigWin.mp3",
            "volume": .6
        },
        "winEffect_3": {
            "name": "cherryBlast/sounds/centralWin/megaBigWin.mp3",
            "volume": .6
        },
        "fsWon": {
            "name": "cherryBlast/sounds/bonusIntro.mp3",
            "volume": .7
        },
        "bonus-intro": {
            "name": "cherryBlast/sounds/bonusIntro.mp3",
            "volume":.6
        },

        "incWin": {
            "name": "cherryBlast/sounds/counter.mp3",
            "volume": .6,
            "loop": true
        },
        "line": {
            "name": "cherryBlast/sounds/line.mp3",
            "volume": .5
        },
        "winBg": {
            "name": "cherryBlast/sounds/centralWin/bgWin.mp3",
            "volume": .8,
            "loop": true
        },
        "winFSBg": {
            "name": "cherryBlast/sounds/centralWin/bgWin.mp3",
            "volume": .8,
            "loop": true
        },
        "bigWinBg_1": {
            "name": "cherryBlast/sounds/centralWin/bgBigWin.mp3",
            "volume": .6,
            "loop": true
        },
        "bigWinBg_2": {
            "name": "cherryBlast/sounds/centralWin/bgSuperBigWin.mp3",
            "volume": .6,
            "loop": true
        },
        "bigWinBg_3": {
            "name": "cherryBlast/sounds/centralWin/bgMegaBigWin.mp3",
            "volume": .6,
            "loop": true
        },
        "winPanel": {
            "name": "cherryBlast/sounds/winScreen.mp3",
            "volume": .6
        },
        "select": {
            "name": "cherryBlast/sounds/bonus/select.mp3",
            "volume": 1
        },
        "x1": {
            "name": "cherryBlast/sounds/bonus/eat_low.mp3",
            "volume": 1
        },
        "x5": {
            "name": "cherryBlast/sounds/bonus/eat_med.mp3",
            "volume": 1
        },
        "xBig": {
            "name": "cherryBlast/sounds/bonus/eat_high.mp3",
            "volume": 1
        },
        "die": {
            "name": "cherryBlast/sounds/bonus/eat_die.mp3",
            "volume": 1.3
        },
        "end": {
            "name": "cherryBlast/sounds/bonus/eat_end.mp3",
            "volume": 1
        }
    },
    "bgSounds": {
        "bgSlot": {
            "name": "cherryBlast/sounds/bg.mp3",
            "volume": .8
        },
        "bgDashBonus": {
            "name": "cherryBlast/sounds/bonus/bgDashBonus.mp3",
            "volume": 1
        },
        "bgFs": {
            "name": "cherryBlast/sounds/bgFs.mp3",
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
                    "y": 0,
                    "anchorX":.5
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
                    "x": 445,
                    "y": 32,
                    "fill": "#1A98E5",
                    "font": "13px Futura ,Arial",
                    "text": "Free Rounds:",
                    "anchorX": 1
                },
                "frValue": {
                    "x": 412,
                    "y": 48,
                    "fill": "#438EF9",
                    "font": "23px Futura ,Arial",
                    "text": "5",
                    "anchorX": 0.5
                },
                "frTotWonLabel": {
                    "x": 895,
                    "y": 32,
                    "fill": "#1A98E5",
                    "font": "13px Futura ,Arial",
                    "text": "Total won:",
                    "anchorX": 1
                },
                "frTotWonValue": {
                    "x": 865,
                    "y": 48,
                    "fill": "#438EF9",
                    "font": "23px Futura ,Arial",
                    "text": "£1234:00",
                    "anchorX": 0.5
                }
            }
        },
        "MazeBonus": {
            "eventBlock": false,
            "visible": false,
            "name":"Dash Bonus",
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
                },
                "bLogo": {
                    "name": "bonusLogo",
                    "x": 640,
                    "y": 68,
                    "anchorX":.5,
                    "anchorY":.5
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
                },
                "txtDumb":{
                    "x": 640,
                    "y": 660,
                    "fill": "#ffffff",
                    "font": "20px FuturaPT-Heavy",
                    "anchorX": .5,
                    "text":"Select one from the 5 paths on the bottom"
                }
            },
            "configuration": {
                "bgMusic": "bgDashBonus",
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
                "durationIn": 3000,
                "durationOut": 3000
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
                    "x": 640,
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
                    "y": 440,
                    "bmpFont": "bmpFont",
                    "size": "45",
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
                "logo": {
                    "name": "logo",
                    "x": 640,
                    "y": 88,
                    "anchorX":.5,
                    "anchorY":.5
                }
            },
            "texts": {
                "txtPrev3": {
                    "x": 640,
                    "y": 280,
                    "fill": "#fbba49",
                    "font": "25px Futura PT, Arial",
                    "text": "Losing spins award a\nfree respin where\nwild reels stick",
                    "align":"center",
                    "anchorX":.5
                },
                "buttons": {}
            },
            "checkbox": {
                "name": "check",
                "text": "Don't show anymore",
                "font": "15px Arial",
                "color": "#fbba49",
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
                            "y": -18,
                            "fill": "#fbba49",
                            "font": "25px Futura PT, Arial",
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
                    "text": "",
                    "anchorX": .5
                },
                "msg2": {
                    "x": 640,
                    "y": 350,
                    "fill": "#ffffff",
                    "font": "20px FuturaPT-Heavy",
                    "text": "",
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
    "slotEngine":"CherryEngine",
    "log":true,
    "canSwipe":true,
    "comment_preview":"enable feature preview screen",
    "preview":true,
    "previewTout":15000,
    "spinType": "SubstituteSymbolSpin",
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
    "numIcon": 7,
    "loadTout": 30,
    "credits": "5000",
    "bet": "0.50",
    "animDelayAfterWild":1500,
    "freeRounds":"normal",
    "freeSpins":"FreeSpins",
    "_fsIcon": 1,
    "fsSpinDelay":750,
    "minFsSmbs":3,
    "scatterIcon": 10,
    "scatterType": "SubstScatter",
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

	"bg" : "cherryBlast/img/paytable/pt-base-main.png",

    "closeBtn": {

        "ypos": "140",
        "xpos": "1000"

    },

	"pagination" : {

		"ypos" : "465",
		"xpos" : "300",
		"checked" : "#00E2E2",
		"unchecked" : "#000000"

	},

    "helpPath" : gameParams.pathCDN + 'premiumslots/remoteHelp.jsp?rPage=help/mobile/cherryBlast/help_' + gameParams.lang,

    "buttons" : [

		{
			"id" : "left",
			"ypos" : "400",
			"xpos" : "30",
			"bg_up" : "cherryBlast/img/paytable/forward-btn-up.png",
			"bg_over" : "cherryBlast/img/paytable/forward-btn-over.png",
			"bg_down" : "cherryBlast/img/paytable/forward-btn-down.png",
			"direction" : -1
		},

		{
			"id" : "right",
			"ypos" : "400",
			"xpos" : "830",
			"bg_up" : "cherryBlast/img/paytable/forward-btn-up.png",
			"bg_over" : "cherryBlast/img/paytable/forward-btn-over.png",
			"bg_down" : "cherryBlast/img/paytable/forward-btn-down.png",
			"direction" : 1
		}

	],

    "pages" : [
        {

            "gameguide" : true,
            "title" : "Cherry Blast Game Rules",
            "title_xpos" : "405",
            "title_ypos" : "15",
            "xpos" : "50",
            "ypos" : "85",
            "height" : "325",
            "width" : "830",
            "fill": "#FF85EE",
            "font" : "FuturaPT-Book, Arial, sans-serif",
            "rtp": [
                "96.00",
                "96.00",
                "96.00"
            ]


        },
        {

            "symbols" : [

				{
					"id" : "symbol_00",
					"bg" : "cherryBlast/img/symbol-00.png",
                    "xpos": "105",
                    "ypos": "55",
                    "height": "150px",
                    "width": "150px"
                },

                {
                    "id": "symbol_00_text",
                    "bg": "rgba(2, 188, 54, 0.1)",
                    "bgType": "style",
                    "xpos": "115",
                    "ypos": "225",
                    "height": "130px",
                    "width": "130px",
                    "text": {
                        "value": 0,
                        "xpos": "35",
                        "ypos": "22",
                        "width": "109",
                        "left_fill": "#08b936",
                        "right_fill": "#de34d3",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }

                },

				{
					"id" : "symbol_01",
					"bg" : "cherryBlast/img/symbol-01.png",
                    "xpos": "255",
                    "ypos": "55",
                    "height": "150px",
                    "width": "150px"
                },

                {
                    "id": "symbol_01_text",
                    "bg": "rgba(2, 188, 54, 0.1)",
                    "bgType": "style",
                    "xpos": "265",
                    "ypos": "225",
                    "height": "130px",
                    "width": "130px",
                    "text": {
                        "value": 1,
                        "xpos": "35",
                        "ypos": "22",
                        "width": "109",
                        "left_fill": "#08b936",
                        "right_fill": "#de34d3",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }

                },

				{
					"id" : "symbol_02",
					"bg" : "cherryBlast/img/symbol-02.png",
                    "xpos": "405",
                    "ypos": "55",
                    "height": "150px",
                    "width": "150px"
                },

                {
                    "id": "symbol_02_text",
                    "bg": "rgba(2, 188, 54, 0.1)",
                    "bgType": "style",
                    "xpos": "415",
                    "ypos": "225",
                    "height": "130px",
                    "width": "130px",
                    "text": {
                        "value": 2,
                        "xpos": "35",
                        "ypos": "22",
                        "width": "109",
                        "left_fill": "#08b936",
                        "right_fill": "#de34d3",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }

                },

				{
					"id" : "symbol_03",
					"bg" : "cherryBlast/img/symbol-03.png",
                    "xpos": "555",
                    "ypos": "55",
                    "height": "150px",
                    "width": "150px"
                },

                {
                    "id": "symbol_03_text",
                    "bg": "rgba(2, 188, 54, 0.1)",
                    "bgType": "style",
                    "xpos": "565",
                    "ypos": "225",
                    "height": "130px",
                    "width": "130px",
                    "text": {
                        "value": 3,
                        "xpos": "35",
                        "ypos": "22",
                        "width": "109",
                        "left_fill": "#08b936",
                        "right_fill": "#de34d3",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }

                },

				{
					"id" : "symbol_04",
					"bg" : "cherryBlast/img/symbol-04.png",
                    "xpos": "705",
                    "ypos": "55",
                    "height": "150px",
                    "width": "150px"
                },

                {
                    "id": "symbol_04_text",
                    "bg": "rgba(2, 188, 54, 0.1)",
                    "bgType": "style",
                    "xpos": "715",
                    "ypos": "225",
                    "height": "130px",
                    "width": "130px",
                    "text": {
                        "value": 4,
                        "xpos": "35",
                        "ypos": "22",
                        "width": "109",
                        "left_fill": "#08b936",
                        "right_fill": "#de34d3",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }

                }

			],

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "240",
                    "ypos" : "405",
                    "width" : "500",
                    "fill" : "#08b936",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols": [

                {
					"id" : "symbol_05",
					"bg" : "cherryBlast/img/symbol-05.png",
                    "xpos": "255",
                    "ypos": "55",
                    "height": "150px",
                    "width": "150px"
                },

                {
                    "id": "symbol_05_text",
                    "bg": "rgba(2, 188, 54, 0.1)",
                    "bgType": "style",
                    "xpos": "265",
                    "ypos": "225",
                    "height": "130px",
                    "width": "130px",
                    "text": {
                        "value": 5,
                        "xpos": "25",
                        "ypos": "10",
                        "width": "109",
                        "left_fill": "#08b936",
                        "right_fill": "#de34d3",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }

                },

				{
					"id" : "symbol_06",
					"bg" : "cherryBlast/img/symbol-06.png",
                    "xpos": "405",
                    "ypos": "55",
                    "height": "150px",
                    "width": "150px"
                },

                {
                    "id": "symbol_06_text",
                    "bg": "rgba(2, 188, 54, 0.1)",
                    "bgType": "style",
                    "xpos": "415",
                    "ypos": "225",
                    "height": "130px",
                    "width": "130px",
                    "text": {
                        "value": 6,
                        "xpos": "25",
                        "ypos": "10",
                        "width": "109",
                        "left_fill": "#08b936",
                        "right_fill": "#de34d3",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }

                },

				{
					"id" : "symbol_07",
					"bg" : "cherryBlast/img/symbol-07.png",
                    "xpos": "555",
                    "ypos": "55",
                    "height": "150px",
                    "width": "150px"
                },

                {
                    "id": "symbol_07_text",
                    "bg": "rgba(2, 188, 54, 0.1)",
                    "bgType": "style",
                    "xpos": "565",
                    "ypos": "225",
                    "height": "130px",
                    "width": "130px",
                    "text": {
                        "value": 7,
                        "xpos": "25",
                        "ypos": "10",
                        "width": "109",
                        "left_fill": "#08b936",
                        "right_fill": "#de34d3",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }

                }

            ],

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "240",
                    "ypos" : "405",
                    "width" : "500",
                    "fill" : "#08b936",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols": [

                {
					"id" : "symbol_14",
					"bg" : "cherryBlast/img/symbol-14.png",
                    "xpos": "255",
                    "ypos": "55",
                    "height": "150px",
                    "width": "150px"
                },

                {
                    "id": "symbol_14_text",
                    "bg": "rgba(2, 188, 54, 0.1)",
                    "bgType": "style",
                    "xpos": "190",
                    "ypos": "225",
                    "height": "160px",
                    "width": "280px",
                    "text": {
                        "value": "A bomb symbol can appear on the central position on the reels, which will explode outwards in a random direction revealing 3 scatters, Free Spin symbols, Bonus symbols, or up to 5 wild symbols.",
                        "xpos": "10",
                        "ypos": "10",
                        "width": "260",
                        "fill": "#de34d3",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "18px",
                        "align": "center"
                    }

                },

				{
					"id" : "symbol_15",
					"bg" : "cherryBlast/img/symbol-15.png",
                    "xpos": "555",
                    "ypos": "55",
                    "height": "150px",
                    "width": "150px"
                },

                {
                    "id": "symbol_15_text",
                    "bg": "rgba(2, 188, 54, 0.1)",
                    "bgType": "style",
                    "xpos": "490",
                    "ypos": "225",
                    "height": "160px",
                    "width": "280px",
                    "text": {
                        "value": "2 cherry bombs can appear in free spins revealing super wild or super scatter symbols.",
                        "xpos": "10",
                        "ypos": "10",
                        "width": "260",
                        "fill": "#de34d3",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "18px",
                        "align": "center"
                    }

                }

            ],

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "240",
                    "ypos" : "405",
                    "width" : "500",
                    "fill" : "#08b936",
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
					"bg" : "cherryBlast/img/symbol-09.png",
                    "xpos": "255",
                    "ypos": "55",
                    "height": "150px",
                    "width": "150px"
                },

                {
                    "id": "symbol_09_text",
                    "bg": "rgba(2, 188, 54, 0.1)",
                    "bgType": "style",
                    "xpos": "190",
                    "ypos": "225",
                    "height": "160px",
                    "width": "280px",
                    "text": {
                        "value": "Substitutes for all non-scatter symbols.",
                        "xpos": "10",
                        "ypos": "45",
                        "width": "260",
                        "fill": "#de34d3",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "18px",
                        "align": "center"
                    }

                },

				{
					"id" : "symbol_10",
					"bg" : "cherryBlast/img/symbol-10.png",
                    "xpos": "555",
                    "ypos": "55",
                    "height": "150px",
                    "width": "150px"
                },

                {
                    "id": "symbol_10_text",
                    "bg": "rgba(2, 188, 54, 0.1)",
                    "bgType": "style",
                    "xpos": "490",
                    "ypos": "225",
                    "height": "160px",
                    "width": "280px",
                    "text": {
                        "value": "Pays 80 coins for 3 symbols.",
                        "xpos": "10",
                        "ypos": "45",
                        "width": "260",
                        "fill": "#de34d3",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "18px",
                        "align": "center"
                    }

                }

            ],

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "240",
                    "ypos" : "405",
                    "width" : "500",
                    "fill" : "#08b936",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols": [

				{
					"id" : "symbol_08",
					"bg" : "cherryBlast/img/symbol-08.png",
                    "xpos": "405",
                    "ypos": "55",
                    "height": "150px",
                    "width": "150px"
                },

                {
                    "id": "symbol_08_text",
                    "bg": "rgba(2, 188, 54, 0.1)",
                    "bgType": "style",
                    "xpos": "285",
                    "ypos": "225",
                    "height": "75px",
                    "width": "400px",
                    "text": {
                        "value": "Free Spin<br>Awards 9 free spin and 100 coins",
                        "xpos": "10",
                        "ypos": "18",
                        "width": "380",
                        "fill": "#de34d3",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "18px",
                        "align": "center"
                    }

                }

            ],

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "240",
                    "ypos" : "405",
                    "width" : "500",
                    "fill" : "#08b936",
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
					"bg" : "cherryBlast/img/symbol-11.png",
                    "xpos": "405",
                    "ypos": "55",
                    "height": "150px",
                    "width": "150px"
                },

                {
                    "id": "symbol_11_text",
                    "bg": "rgba(2, 188, 54, 0.1)",
                    "bgType": "style",
                    "xpos": "285",
                    "ypos": "225",
                    "height": "75px",
                    "width": "400px",
                    "text": {
                        "value": "Can appear in the 3 central reels during free spins. Substitute for all regular symbols.",
                        "xpos": "10",
                        "ypos": "18",
                        "width": "380",
                        "fill": "#de34d3",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "18px",
                        "align": "center"
                    }

                }

            ],

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "240",
                    "ypos" : "405",
                    "width" : "500",
                    "fill" : "#08b936",
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
					"bg" : "cherryBlast/img/symbol-12.png",
                    "xpos": "405",
                    "ypos": "25",
                    "height": "150px",
                    "width": "150px"
                },

                {
                    "id": "symbol_12_text",
                    "bg": "rgba(2, 188, 54, 0.1)",
                    "bgType": "style",
                    "xpos": "285",
                    "ypos": "185",
                    "height": "225px",
                    "width": "400px",
                    "text": {
                        "value": "1 to 9 symbols can appear in the 3 central reels during free spins. Coins Payout:",
                        "xpos": "10",
                        "ypos": "18",
                        "width": "380",
                        "fill" : "#de34d3",
                        "font" : "FuturaPT-Book, Arial, sans-serif",
                        "size" : "18px",
                        "align" : "center"
                    }
                },

                {
                    "id": "symbol_12_text_payouts",
                    "bg": "rgba(2, 188, 54, 0)",
                    "bgType": "style",
                    "xpos": "450",
                    "ypos": "255",
                    "height": "160px",
                    "width": "280px",
                    "text": {
                        "value": 12,
                        "xpos": "6",
                        "ypos": "-2",
                        "width": "60",
                        "left_fill": "#08b936",
                        "right_fill": "#de34d3",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "18px",
                        "align": "left"
                    }

                }

            ],

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "240",
                    "ypos" : "405",
                    "width" : "500",
                    "fill" : "#08b936",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols": [

				{
					"id" : "symbol_13",
					"bg" : "cherryBlast/img/symbol-13.png",
                    "xpos": "175",
                    "ypos": "55",
                    "height": "150px",
                    "width": "150px"
                },

                {
                    "id": "symbol_13_text",
                    "bg": "rgba(2, 188, 54, 0.1)",
                    "bgType": "style",
                    "xpos": "120",
                    "ypos": "225",
                    "height": "160px",
                    "width": "280px",
                    "text": {
                        "value": "The bonus symbol can appear in the 3 central reels. Choose from the 5 paths, the higher the number of the path , the higher the risk, but the higher the potential winnings.",
                        "xpos": "10",
                        "ypos": "30",
                        "width": "260",
                        "fill": "#de34d3",
                        "font": "FuturaPT-Book, Arial, sans-serif",
                        "size": "18px",
                        "align": "center"
                    }

                },

                {
					"id" : "bonus_dash_screenshot",
					"bg" : "cherryBlast/img/paytable/bonus-dash-screenshot.png",
                    "xpos": "460",
                    "ypos": "120",
                    "width": "400px"
                }

            ],

            "text": [

                {
                    "value": "Dash Bonus",
                    "xpos": "120",
                    "ypos": "210",
                    "width": "280",
                    "fill": "#de34d3",
                    "font": "FuturaPT-Book, Arial, sans-serif",
                    "size": "22px",
                    "align": "center"
                },

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "240",
                    "ypos" : "405",
                    "width" : "500",
                    "fill" : "#08b936",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "lines": [1, 10],
            "ypos": "165",
            "font" : "FuturaPT-Book, Arial, sans-serif",
            "text_colour": "#93d8fe",
            "checked_colour": "#FFFFFF",
            "unchecked_colour": "#08b936",

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "240",
                    "ypos" : "405",
                    "width" : "500",
                    "fill" : "#08b936",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "lines": [11, 20],
            "ypos": "165",
            "font" : "FuturaPT-Book, Arial, sans-serif",
            "text_colour": "#93d8fe",
            "checked_colour": "#FFFFFF",
            "unchecked_colour": "#08b936",

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "240",
                    "ypos" : "405",
                    "width" : "500",
                    "fill" : "#08b936",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        }

    ]

}
