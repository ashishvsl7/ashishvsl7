
var frameworkAssets={
    "assets": {
        "menuBtn": "gui/generic/img/desktop/svg/menu-btn.svg",
        "menuBtnClose": "gui/generic/img/desktop/svg/menu-close-btn.svg",
        "menuHistoryBtn": "gui/generic/img/desktop/svg/menu-history-btn.svg",
        "menuHomeBtn": "gui/generic/img/desktop/svg/menu-home-btn.svg",
        "menuSettingsBtn": "gui/generic/img/desktop/svg/menu-settings-btn.svg",
        "menuSoundOnBtn": "gui/generic/img/desktop/svg/menu-sound-btn.svg",
        "menuSoundOffBtn": "gui/generic/img/desktop/svg/menu-sound-close-btn.svg",
        "dtHeader": "gui/generic/img/desktop/png/dt-header.png"
    }
};



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
};

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
};

var bitmapFonts={
    "bmpFont":{
        "sprite": "fonts/fontRIV.png",
        "font": "fonts/fontRIV.xml"
    }
};

var extScripts={
    "webfont": "15px FuturaPT-Heavy",
    "webfont1": "15px FuturaPT-Book"
};
var gameAssets = {
    "assets": {
        "icon0": "richieInVegas/img/symbol-00.png",
        "icon1": "richieInVegas/img/symbol-01.png",
        "icon2": "richieInVegas/img/symbol-02.png",
        "icon3": "richieInVegas/img/symbol-03.png",
        "icon4": "richieInVegas/img/symbol-04.png",
        "icon5": "richieInVegas/img/symbol-05.png",
        "icon6": "richieInVegas/img/symbol-06.png",
        "icon7": "richieInVegas/img/symbol-07.png",
        "icon8": "richieInVegas/img/symbol-08.png",
        "icon10": "richieInVegas/img/symbol-10.png",
        "icon11": "richieInVegas/img/symbol-11.png",
        "icon12": "richieInVegas/img/symbol-12.png",
        "icon13": "richieInVegas/img/symbol-12-w.png",
        "bicon0": "richieInVegas/img/b-symbol-00.png",
        "bicon1": "richieInVegas/img/b-symbol-01.png",
        "bicon2": "richieInVegas/img/b-symbol-02.png",
        "bicon3": "richieInVegas/img/b-symbol-03.png",
        "bicon4": "richieInVegas/img/b-symbol-04.png",
        "bicon5": "richieInVegas/img/b-symbol-05.png",
        "bicon6": "richieInVegas/img/b-symbol-06.png",
        "bicon7": "richieInVegas/img/b-symbol-07.png",
        "bicon8": "richieInVegas/img/b-symbol-08.png",
        "bicon10": "richieInVegas/img/b-symbol-10.png",
        "bicon11": "richieInVegas/img/b-symbol-11.png",
        "bicon12": "richieInVegas/img/b-symbol-12.png",

        "line_0_00": "richieInVegas/img/lines/line_0_01.png",
        "line_0_01": "richieInVegas/img/lines/line_0_02.png",
        "line_0_02": "richieInVegas/img/lines/line_0_03.png",
        "line_0_03": "richieInVegas/img/lines/line_0_04.png",
        "line_0_04": "richieInVegas/img/lines/line_0_05.png",
        "line_0_05": "richieInVegas/img/lines/line_0_06.png",
        "line_0_06": "richieInVegas/img/lines/line_0_07.png",
        "line_0_07": "richieInVegas/img/lines/line_0_08.png",
        "line_0_08": "richieInVegas/img/lines/line_0_09.png",
        "line_0_09": "richieInVegas/img/lines/line_0_10.png",
        "line_0_10": "richieInVegas/img/lines/line_0_11.png",
        "line_0_11": "richieInVegas/img/lines/line_0_12.png",
        "line_0_12": "richieInVegas/img/lines/line_0_13.png",
        "line_0_13": "richieInVegas/img/lines/line_0_14.png",
        "line_0_14": "richieInVegas/img/lines/line_0_15.png",
        "line_0_15": "richieInVegas/img/lines/line_0_16.png",
        "line_0_16": "richieInVegas/img/lines/line_0_17.png",
        "line_0_17": "richieInVegas/img/lines/line_0_18.png",
        "line_0_18": "richieInVegas/img/lines/line_0_19.png",
        "line_0_19": "richieInVegas/img/lines/line_0_20.png",

        "slide_0":"richieInVegas/img/paytable/slide_0.png",
        "slide_2":"richieInVegas/img/paytable/slide_2.png",
        "slide_4":"richieInVegas/img/paytable/slide_4.png",
        "slide_5":"richieInVegas/img/paytable/slide_5.png",
        "slide_6":"richieInVegas/img/paytable/slide_6.png",
        "slide_7":"richieInVegas/img/paytable/slide_7.png",
        "slide_8":"richieInVegas/img/paytable/slide_8.png",

        "bottomBar": "gui/message-bar.png",
        "bgPanelW": "richieInVegas/img/wheel-of-chance/wheel-pop-up.png",
        "bgPanel": "richieInVegas/img/bgPanel.png",
        "bgPanelGame": "richieInVegas/img/bgPanel.png",
        "bgPreview":"richieInVegas/img/info-screen.jpg",
        "freeRoundsPanel":"richieInVegas/img/free-rounds.png",

        "ultra-win-bg":"richieInVegas/img/win-text/ultra-win-bg.png",
        "bigWin-bg":"richieInVegas/img/win-text/win-text-pop-up.png",
        "win-rays":"richieInVegas/img/win-text/win-rays.png",

        "bigWin":"richieInVegas/img/win-text/big-win.png",
        "epicWin":"richieInVegas/img/win-text/epic-win.png",
        "ultraWin":"richieInVegas/img/win-text/ultra-win.png",

        "bg": "richieInVegas/img/bg/bg-base-main.jpg",
        "bgFS": "richieInVegas/img/bg/fs-base-main.jpg",
        "spotlight": "richieInVegas/img/bg/spotlight.png",
        "bg_b": "richieInVegas/img/bg/base-bottom.png",
        "bgFS_b": "richieInVegas/img/bg/base-bottom_FS.png",
        "reel-frame": "richieInVegas/img/bg/reel.png",
        "reel-inside": "richieInVegas/img/bg/reel-inside.png",
        "fsTxtBox": "richieInVegas/img/bg/total-win-box.png",
        "buttonBg":"gui/generic/img/desktop/png/cp-info-bar.png",
        "volOnButton": "gui/btnVolOn.png",
        "volOffButton": "gui/btnVolOff.png",
        "freeSpinPanel":"richieInVegas/img/freespins.png",
        "bgPt" : "richieInVegas/img/paytable/pt-base-complete.jpg",
        "btnTranspRight": "richieInVegas/img/transparent.png",
        "btnTranspLeft": "richieInVegas/img/transparent.png",

        "richie_0": "richieInVegas/img/wheel-of-chance/transparent.png",
        "richie_1": "richieInVegas/img/wheel-of-chance/characters-01.png",
        "richie_2": "richieInVegas/img/wheel-of-chance/characters-01.png",
        "richie_3": "richieInVegas/img/wheel-of-chance/characters-02.png",

        "wheel_base_0": "richieInVegas/img/wheel-of-chance/wheel-glow.png",
        "wheel_base_1": "richieInVegas/img/transparent.png",
        "wheel_base_2": "richieInVegas/img/transparent.png",
        "wheel_base_3": "richieInVegas/img/transparent.png",
        "wheel_cover_0": "richieInVegas/img/wheel-of-chance/wheel-of-chance-00.png",
        "wheel_cover_1": "richieInVegas/img/wheel-of-chance/wheel-of-chance-01.png",
        "wheel_cover_2": "richieInVegas/img/wheel-of-chance/wheel-of-chance-02.png",
        "wheel_cover_3": "richieInVegas/img/wheel-of-chance/wheel-of-chance-03.png",

        "pink_0": "richieInVegas/img/wheel-of-chance/wild.png",
        "pink_1": "richieInVegas/img/wheel-of-chance/wild.png",
        "pink_2": "richieInVegas/img/wheel-of-chance/wild.png",
        "pink_3": "richieInVegas/img/wheel-of-chance/wild.png",

        "yellow_0": "richieInVegas/img/wheel-of-chance/wild-reel.png",
        "yellow_1": "richieInVegas/img/wheel-of-chance/wild-reel.png",
        "yellow_2": "richieInVegas/img/wheel-of-chance/wild-reel.png",
        "yellow_3": "richieInVegas/img/wheel-of-chance/wild-reel.png",

        "green_0": "richieInVegas/img/wheel-of-chance/0-coins.png",
        "green_1": "richieInVegas/img/wheel-of-chance/0-coins.png",
        "green_2": "richieInVegas/img/wheel-of-chance/0-coins.png",
        "green_3": "richieInVegas/img/wheel-of-chance/0-coins.png",

        "blue_0": "richieInVegas/img/wheel-of-chance/160-coins.png",
        "blue_1": "richieInVegas/img/wheel-of-chance/80-coins.png",
        "blue_2": "richieInVegas/img/wheel-of-chance/160-coins.png",
        "blue_3": "richieInVegas/img/wheel-of-chance/320-coins.png",
        "blue2_3": "richieInVegas/img/wheel-of-chance/160-coins.png",

        "prize_1000": "richieInVegas/img/wheel-of-chance/1000-coins.png",
        "purple_0": "richieInVegas/img/wheel-of-chance/free-spins-image.png",
        "purple_1": "richieInVegas/img/wheel-of-chance/free-spins-image.png",
        "purple_2": "richieInVegas/img/wheel-of-chance/free-spins-image.png",
        "purple_3": "richieInVegas/img/wheel-of-chance/free-spins-image.png",

        "red_1": "richieInVegas/img/wheel-of-chance/upgrade-01.png",
        "red_2": "richieInVegas/img/wheel-of-chance/upgrade-02.png",
        "red_3": "richieInVegas/img/wheel-of-chance/1000-coins.png",


        "arrow": "richieInVegas/img/wheel-of-chance/picker-01.png",
        "winHl": "richieInVegas/img/wheel-of-chance/w-highlight.png",
        "fsWheel_bg": "richieInVegas/img/wheel-of-chance/wheel-bg.png",
        "goldCenter": "richieInVegas/img/wheel-of-chance/gold-circle.png",
        "blurWheel_0": "richieInVegas/img/wheel-of-chance/wheel-00-blur.png",
        "blurWheel_1": "richieInVegas/img/wheel-of-chance/wheel-01-blur.png",
        "blurWheel_2": "richieInVegas/img/wheel-of-chance/wheel-02-blur.png",
        "blurWheel_3": "richieInVegas/img/wheel-of-chance/wheel-03-blur.png",
        "bgAlpha": "richieInVegas/img/alpha.png"
    },
    "localizedAssets":{
        "graphAsset": {
            "logo": {
                "lang": ["zh","zs","ko","jp","th"],
                "img": "richieInVegas/img/logo"
            },
            "icon9": {
                "lang": ["es"],
                "img":"richieInVegas/img/symbol-09"
            },
            "jpotWin": {
                "lang": ["es"],
                "img":"richieInVegas/img/win-text/jackpot"
            },
            "slide_J":{
                "lang": ["es"],
                "img":"richieInVegas/img/paytable/slide_J"
            }
        },
        "animAssets": {
            "anim9": {
                "lang": ["es"],
                "sprite":"richieInVegas/img/anim/symbol-09",
                "json": "richieInVegas/img/anim/symbol-09"
            },
        }
    },
    "buttonsSpriteSheet": {
        "container-btn": {
            "sprite": "richieInVegas/img/game-btn.png",
            "json": "richieInVegas/img/game-btn.png",
            "w": 210,
            "h": 66
        },
        "yesButton": {
            "sprite": "richieInVegas/img/yes-btn.png",
            "json": "richieInVegas/img/yes-btn.png",
            "w": 54,
            "h": 54
        },
        "noButton": {
            "sprite": "richieInVegas/img/no-btn.png",
            "json": "richieInVegas/img/no-btn.png",
            "w": 54,
            "h": 54
        },
        "startWheel": {
            "sprite": "richieInVegas/img/wheel-of-chance/spin-btn.png",
            "json": "richieInVegas/img/wheel-of-chance/spin-btn.png",
            "w": 87,
            "h": 85
        },
        "selRight": {
            "sprite": "richieInVegas/img/select-right.png",
            "json": "richieInVegas/img/select-right.png",
            "w": 69,
            "h": 67
        },
        "check": {
            "sprite": "richieInVegas/img/radio-btns.png",
            "json": "richieInVegas/img/radio-btns.png",
            "w": 64,
            "h": 32
        },
        "checkWF": {
            "sprite": "richieInVegas/img/wheel-of-chance/on-off-btn.png",
            "json": "richieInVegas/img/wheel-of-chance/on-off-btn.png",
            "w": 43,
            "h": 27
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
            "json": "richieInVegas/img/anim/symbol-00.json",
            "sprite": "richieInVegas/img/anim/symbol-00.png"
        },
        "anim1": {
            "json": "richieInVegas/img/anim/symbol-01.json",
            "sprite": "richieInVegas/img/anim/symbol-01.png"
        },
        "anim2": {
            "json": "richieInVegas/img/anim/symbol-02.json",
            "sprite": "richieInVegas/img/anim/symbol-02.png"
        },
        "anim3": {
            "json": "richieInVegas/img/anim/symbol-03.json",
            "sprite": "richieInVegas/img/anim/symbol-03.png"
        },
        "anim4": {
            "json": "richieInVegas/img/anim/symbol-04.json",
            "sprite": "richieInVegas/img/anim/symbol-04.png"
        },
        "anim5": {
            "json": "richieInVegas/img/anim/symbol-05.json",
            "sprite": "richieInVegas/img/anim/symbol-05.png"
        },
        "anim6": {
            "json": "richieInVegas/img/anim/symbol-06.json",
            "sprite": "richieInVegas/img/anim/symbol-06.png"
        },
        "anim7": {
            "json": "richieInVegas/img/anim/symbol-07.json",
            "sprite": "richieInVegas/img/anim/symbol-07.png"
        },
        "anim8": {
            "json": "richieInVegas/img/anim/symbol-08.json",
            "sprite": "richieInVegas/img/anim/symbol-08.png"
        },
        "anim10": {
            "json": "richieInVegas/img/anim/symbol-10.json",
            "sprite": "richieInVegas/img/anim/symbol-10.png"
        },
        "anim12": {
            "json": "richieInVegas/img/anim/symbol-12.json",
            "sprite": "richieInVegas/img/anim/symbol-12.png"
        },
        "anim13": {
            "json": "richieInVegas/img/anim/symbol-12-w.json",
            "sprite": "richieInVegas/img/anim/symbol-12-w.png"
        },
        "wildReel_a_0": {
            "json": "richieInVegas/img/anim/symbol-11-a01.json",
            "sprite": "richieInVegas/img/anim/symbol-11-a01.png"
        },
        "wildReel_a_1": {
            "json": "richieInVegas/img/anim/symbol-11-a02.json",
            "sprite": "richieInVegas/img/anim/symbol-11-a02.png"
        },
        "wildReel_b": {
            "json": "richieInVegas/img/anim/symbol-11-b.json",
            "sprite": "richieInVegas/img/anim/symbol-11-b.png"
        },
        "wildReel_c": {
            "json": "richieInVegas/img/anim/symbol-11-c.json",
            "sprite": "richieInVegas/img/anim/symbol-11-c.png"
        },
        "fworks": {
            "json": "richieInVegas/img/anim/symbol-11-fireworks.json",
            "sprite": "richieInVegas/img/anim/symbol-11-fireworks.png"
        },
        "part-1": {
            "json": "richieInVegas/img/anim/bronze-coin.json",
            "sprite": "richieInVegas/img/anim/bronze-coin.png"
        },
        "part-2": {
            "json": "richieInVegas/img/anim/silver-coin.json",
            "sprite": "richieInVegas/img/anim/silver-coin.png"
        },
        "part-3": {
            "json": "richieInVegas/img/anim/gold-coin.json",
            "sprite": "richieInVegas/img/anim/gold-coin.png"
        },
        "part-4": {
            "json": "richieInVegas/img/anim/gold-coin.json",
            "sprite": "richieInVegas/img/anim/gold-coin.png"
        },
        "f-part-1": {
            "json": "richieInVegas/img/anim/bronze-coin-frwrd.json",
            "sprite": "richieInVegas/img/anim/bronze-coin-frwrd.png"
        },
        "f-part-2": {
            "json": "richieInVegas/img/anim/silver-coin-frwrd.json",
            "sprite": "richieInVegas/img/anim/silver-coin-frwrd.png"
        },
        "f-part-3": {
            "json": "richieInVegas/img/anim/gold-coin-frwrd.json",
            "sprite": "richieInVegas/img/anim/gold-coin-frwrd.png"
        },
        "f-part-4": {
            "json": "richieInVegas/img/anim/gold-coin-frwrd.json",
            "sprite": "richieInVegas/img/anim/gold-coin-frwrd.png"
        },
        "winframeHl": {
            "json": "richieInVegas/img/wheel-of-chance/wheel-win.json",
            "sprite": "richieInVegas/img/wheel-of-chance/wheel-win.png"
        },
        "logoLights": {
            "json": "richieInVegas/img/anim/left-lights.json",
            "sprite": "richieInVegas/img/anim/left-lights.png"
        }
    },
    "importantSounds": {
        "spinClick": {
            "name": "richieInVegas/sounds/spinClick.mp3",
            "volume": .2
        },
        "reelSound": {
            "name": "richieInVegas/sounds/reelSound1.mp3",
            "volume":1,
            "loop":true
        },
        "reelStop": {
            "name": "richieInVegas/sounds/reelStop2.mp3",
            "volume":.8
        }
    },
    "sounds": {
        "reelSoundFast_0": {
            "name": "richieInVegas/sounds/anticipation.mp3",
            "multiple":["reelSoundFast1_0","reelSoundFast_1","reelSoundFast1_1","reelSoundFast_2","reelSoundFast1_2","reelSoundFast_3","reelSoundFast1_3","reelSoundFast_4","reelSoundFast1_4"],
            "volume":.8
        },
        "click": {
            "name": "richieInVegas/sounds/click.mp3",
            "volume": .2
        },
        "jackpotLand": {
            "name": "richieInVegas/sounds/jackpotLand.mp3",
            "volume": 1
        },
        "smbWin_0": {
            "name": "richieInVegas/sounds/smbWin_00.mp3",
            "volume": 1
        },
        "smbWin_1": {
            "name": "richieInVegas/sounds/smbWin_01.mp3",
            "volume": 1
        },
        "smbWin_2": {
            "name": "richieInVegas/sounds/smbWin_02.mp3",
            "volume": 1
        },
        "smbWin_3": {
            "name": "richieInVegas/sounds/smbWin_03.mp3",
            "volume": 1
        },
        "smbWin_4": {
            "name": "richieInVegas/sounds/smbWin_04.mp3",
            "volume": 1
        },
        "smbWin_5": {
            "name": "richieInVegas/sounds/smbWin_05.mp3",
            "volume": 1
        },
        "smbWin_6": {
            "name": "richieInVegas/sounds/smbWin_06.mp3",
            "volume": 1
        },
        "smbWin_7": {
            "name": "richieInVegas/sounds/smbWin_07.mp3",
            "volume": 1
        },
        "smbWin_8": {
            "name": "richieInVegas/sounds/smbWin_08.mp3",
            "volume": 1
        },
        "smbWin_9": {
            "name": "richieInVegas/sounds/smbWin_09.mp3",
            "volume": 1
        },
        "smbWin_10": {
            "name": "richieInVegas/sounds/smbWin_10.mp3",
            "volume": 1
        },
        "smbWin_12": {
            "name": "richieInVegas/sounds/smbWin_12.mp3",
            "volume": 1
        },
        "smbWin_11": {
            "name": "richieInVegas/sounds/smbWin_11_extend.mp3",
            "volume": 1
        },
        "wildReel": {
            "name": "richieInVegas/sounds/smbWin_11_extend.mp3",
            "volume": .6
        },
        "wildReelFast": {
            "name": "richieInVegas/sounds/smbWin_11_extend.mp3",
            "volume": .6
        },
        "fsWildReel": {
            "name": "richieInVegas/sounds/smbWin_11_extend.mp3",
            "volume": .6
        },
        "fsWildReelFast": {
            "name": "richieInVegas/sounds/smbWin_11_extend.mp3",
            "volume": .6
        },
        "wildReelOut": {
            "name": "richieInVegas/sounds/wildReelRollback.mp3",
            "volume": .4
        },
        "fsWildReelOut": {
            "name": "richieInVegas/sounds/wildReelRollback.mp3",
            "volume": .5
        },
        "fsWin": {
            "name": "richieInVegas/sounds/fsWin.mp3",
            "volume": 0
        },
        "fsWon": {
            "name": "richieInVegas/sounds/introFs.mp3",
            "volume": 1
        },
        "incWin": {
            "name": "richieInVegas/sounds/counter.mp3",
            "volume": .4,
            "loop": true
        },
        "winPanel": {
            "name": "richieInVegas/sounds/winScreen.mp3",
            "volume": 1.1
        },
        "line": {
            "name": "richieInVegas/sounds/line.mp3",
            "volume": .3
        },
        "winBg_0": {
            "name": "richieInVegas/sounds/centralWin/win1.mp3",
            "volume": 1
        },
        "winBg_1": {
            "name": "richieInVegas/sounds/centralWin/win2.mp3",
            "volume": 1
        },
        "winBg_2": {
            "name": "richieInVegas/sounds/centralWin/win3.mp3",
            "volume": 1
        },
        "winBg_3": {
            "name": "richieInVegas/sounds/centralWin/win4.mp3",
            "volume": 1
        },
        "winBg_4": {
            "name": "richieInVegas/sounds/centralWin/win5.mp3",
            "volume": 1
        },
        "winBg_5": {
            "name": "richieInVegas/sounds/centralWin/win6.mp3",
            "volume": 1
        },
        "winBg_6": {
            "name": "richieInVegas/sounds/centralWin/bigWin_Full.mp3",
            "volume": 1
        },
        "winBg_7": {
            "name": "richieInVegas/sounds/centralWin/bigWin_Full.mp3",
            "volume": 1
        },
        "winBg_8": {
            "name": "richieInVegas/sounds/centralWin/bigWin_Full.mp3",
            "volume": 1
        },
        "winBg_9": {
            "name": "richieInVegas/sounds/centralWin/jackpotWin.mp3",
            "volume": 1.2
        },
        "winBgS_6": {
            "name": "richieInVegas/sounds/centralWin/bigWin.mp3",
            "volume": 1
        },
        "winBgS_7": {
            "name": "richieInVegas/sounds/centralWin/superbigWin.mp3",
            "volume": 1
        },
        "winBgS_8": {
            "name": "richieInVegas/sounds/centralWin/megabigWin.mp3",
            "volume": 1
        },
        "winPanel": {
            "name": "richieInVegas/sounds/wheelPrize_highScatter.mp3",
            "volume": 1
        },
        "coins": {
            "name": "richieInVegas/sounds/coins.mp3",
            "volume":.3
        },
        "wheelBell": {
            "name": "richieInVegas/sounds/fortuneWin.mp3",
            "volume":.7
        },
        "drumRoll": {
            "name": "richieInVegas/sounds/fsWheel_drumRoll.mp3",
            "volume":1.4
        },
        "drumLoop": {
            "name": "richieInVegas/sounds/drumRoll.mp3",
            "volume":1.1
        },
        "drumFinal": {
            "name": "richieInVegas/sounds/drumRoll_end.mp3",
            "volume":1.5
        },
        "blue_0": {
            "name": "richieInVegas/sounds/wheelPrize_highScatter.mp3",
            "volume":1,
            "multiple":["blue_1","blue_2","blue_3"]
        },
        "green_0": {
            "name": "richieInVegas/sounds/wheelPrize_0.mp3",
            "volume":1.5,
            "multiple":["green_1","green_2","green_3"]
        },
        "pink_0": {
            "name": "richieInVegas/sounds/wheelPrize_wild.mp3",
            "volume":1,
            "multiple":["pink_1","pink_2","pink_3"]
        },
        "yellow_0": {
            "name": "richieInVegas/sounds/wheelPrize_expWild.mp3",
            "volume":1,
            "multiple":["yellow_1","yellow_2","yellow_3"]
        },
        "purple_0": {
            "name": "richieInVegas/sounds/wheelPrize_freeSpins.mp3",
            "volume":1
        },
        "purple_1": {
            "name": "richieInVegas/sounds/wheelPrize_extraFreeSpins.mp3",
            "volume":1,
            "multiple":["purple_2","purple_3"]
        },
        "red_1": {
            "name": "richieInVegas/sounds/wheelPrize_wheelUpgrade.mp3",
            "volume":1,
            "multiple":["red_2"]
        },
    },
    "bgSounds": {
        "bgFs": {
            "name": "richieInVegas/sounds/bgFs_layer1.mp3",
            "volume":1,
            "marker":true
        },
        "bgFs1": {
            "name": "richieInVegas/sounds/bgFs_layer2.mp3",
            "volume": 0,
            "marker":true
        },
        "bgFs2": {
            "name": "richieInVegas/sounds/bgFs_layer3.mp3",
            "volume": 0,
            "marker":true
        },
        "bgFs3": {
            "name": "richieInVegas/sounds/bgFs_layer4.mp3",
            "volume": 0,
            "marker":true
        }
    },
    "bgImportantSounds":{
        "bgSlot": {
            "name": "richieInVegas/sounds/bg_layer1.mp3",
            "volume": 1,
            "marker":true
        },
        "bgSlot2": {
            "name": "richieInVegas/sounds/bg_wheel1.mp3",
            "volume": 1.3,
            "marker":true
        },
    }

};
var guiConfig = {
    "credits": ["cash","credits"]
};
var displayManager = {
    "render":Phaser.AUTO,
    "groups": {
        "bg": {
            "visible":false,
            "graphAsset": {
                "bg": {
                    "name": "bg",
                    "x": 0,
                    "y": 0
                }
            }
        },
        "bgFS": {
            "visible":false,
            "graphAsset": {
                "bg": {
                    "name": "bgFS",
                    "x": 0,
                    "y": 0
                }
                ,
                "light_r_0":{
                    "name": "spotlight",
                    "x": 1124,
                    "y": 536+30,
                    "anchorX":.5,
                    "anchorY":1,
                    "angle": 30
                },
                "light_r_1":{
                    "name": "spotlight",
                    "x": 1144,
                    "y": 566+30,
                    "anchorX":.5,
                    "anchorY":1,
                    "angle": 40
                },
                "light_r_3":{
                    "name": "spotlight",
                    "x": 1130,
                    "y": 580+30,
                    "anchorX":.5,
                    "anchorY":1,
                    "angle": 70
                },
                "light_r_2":{
                    "name": "spotlight",
                    "x": 1110,
                    "y": 568+30,
                    "anchorX":.5,
                    "anchorY":1,
                    "angle": 50
                },
                "light_l_0":{
                    "name": "spotlight",
                    "x": 1124-980,
                    "y": 536+30,
                    "anchorX":.5,
                    "anchorY":1,
                    "angle": 330
                },
                "light_l_2":{
                    "name": "spotlight",
                    "x": 1110-980,
                    "y": 568+30,
                    "anchorX":.5,
                    "anchorY":1,
                    "angle": 310
                },
                "light_l_1":{
                    "name": "spotlight",
                    "x": 1144-980,
                    "y": 566+30,
                    "anchorX":.5,
                    "anchorY":1,
                    "angle": 320
                },
                "light_l_3":{
                    "name": "spotlight",
                    "x": 1130-978,
                    "y": 588+30,
                    "anchorX":.5,
                    "anchorY":1,
                    "angle": 290
                }

            }
        },
        "bgIconAnim":{},
        "fireworks":{},
        "reels": {},
        "inner":{
            "visible":false,
            "graphAsset": {
                "reel-inner": {
                    "name": "reel-inside",
                    "x": 640,
                    "y": 368,
                    "anchorX":.5,
                    "anchorY":.5
                }
            }
        },
        "wheelOfFortuneFS":{
            "visible":false,
            "graphAsset": {
                "fsWbg": {
                    "name": "fsWheel_bg",
                    "x": 640,
                    "y": 1000,
                    "finalYPos":498,
                    "anchorX":.5,
                    "anchorY":.5
                }
            },
            "wheelX":239,
            "wheelY":239,
            "restX":410,
            "restY":1000,
            "scale":1,
            "angle":0,
            "activeX":400,
            "activeY":410,
            "time":700,
            "buttons": {
                "yes": {
                    "name": "startWheel",
                    "x": 239,
                    "y": 239,
                    "evt": "doOk"
                },
            },
            "checkbox": {
                "name": "checkWF",
                "text": "Automatic Wheel",
                "font": "15px Arial",
                "color": "#FFFFFF",
                "x": 800,
                "y": -550,
                "evt": "chkEvt"
            }
        },
        "wheelOfFortuneBaseGame":{
            "wheelX":239,
            "wheelY":239,
            "restX":410,
            "restY":1000,
            "scale":.95,
            "angle":0,
            "activeX":410,
            "activeY":160,
            "time":800,
            "buttons": {
                "yes": {
                    "name": "startWheel",
                    "x": 239,
                    "y": 239,
                    "evt": "doOk"
                },
            },
            "checkbox": {
                "name": "checkWF",
                "text": "Automatic Wheel",
                "font": "15px Arial",
                "color": "#FFFFFF",
                "x": 900,
                "y": 8,
                "evt": "chkEvt"
            }
        },
        "frame": {
            "visible":false,
            "graphAsset": {
                "bg2": {
                    "name": "bg_b",
                    "x": 0,
                    "y": 632
                },


                "reel": {
                    "name": "reel-frame",
                    "x": 640,
                    "y": 368,
                    "anchorX":.5,
                    "anchorY":.5
                }

            }
        },
        "frameFS": {
            "visible":false,
            "graphAsset": {
                "bg2fs": {
                    "name": "bgFS_b",
                    "x": 0,
                    "y": 632
                },
                "reelfs": {
                    "name": "reel-frame",
                    "x": 640,
                    "y": 368,
                    "anchorX":.5,
                    "anchorY":.5

                }
            }
        },
        "idleObjects":{
        },
        "logo": {
            "visible":false,
            "graphAsset": {
                "logoLightL": {
                    "name": "logoLights",
                    "x": 422,
                    "y": 44,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "logoLightR": {
                    "name": "logoLights",
                    "x": 856,
                    "y": 44,
                    "scaleX":-1,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "logo": {
                    "name": "logo",
                    "x": 640,
                    "y": 59,
                    "anchorX":.5,
                    "anchorY":.5
                }
            }
        },
        "scatter": {},
        "wild": {
        },
        "wins": {},
        "lines": {},
        "freeRounds": {
            "visible":false,
            "comment_movingLogo":"true when the panel substitute the logo",
            "movingLogo":true,
            "graphAsset": {
                "frPanel":{
                    "name": "freeRoundsPanel",
                    "anchorX": 0.5,
                    "x": 640,
                    "y": 12
                }
            },
            "texts": {
                "frLabel": {
                    "x": 495,
                    "y": 20,
                    "fill": "#FFFFFF",
                    "font": "13px Futura ,Arial",
                    "text": "Free Rounds:",

                    "anchorX": 1
                },
                "frValue": {
                    "x": 462,
                    "y": 36,
                    "fill": "#FFFFFF",
                    "font": "23px Futura ,Arial",
                    "text": "5",
                    "anchorX": 0.5
                },
                "frTotWonLabel": {
                    "x": 850,
                    "y": 20,
                    "fill": "#FFFFFF",
                    "font": "13px Futura ,Arial",
                    "text": "Total won:",
                    "anchorX": 1
                },
                "frTotWonValue": {
                    "x": 820,
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
                    "y": 0,
                    "anchorX": .5
                },
                "fsHt": {
                    "name": "fsTxtBox",
                    "x": 367,
                    "y": 34,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsHt1": {
                    "name": "fsTxtBox",
                    "x": 905,
                    "y": 34,
                    "anchorX": .5,
                    "anchorY": .5
                },

            },
            "texts": {
                "fsLabel": {
                    "x": 367,
                    "y": 10,
                    "fill": "#fbe9b0",
                    "font": "13px Futura ,Arial",
                    "text": "Free Spins",
                    "anchorX": .5
                },
                "fsValue": {
                    "x": 367,
                    "y": 26,
                    "fill": "#ff2222",
                    "font": "23px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                },
                "totWonLabel": {
                    "x": 905,
                    "y": 10,
                    "fill": "#fbe9b0",
                    "font": "13px Futura ,Arial",
                    "text": "Total won",
                    "anchorX": .5
                },
                "totWonValue": {
                    "x": 905,
                    "y": 26,
                    "fill": "#ff2222",
                    "font": "23px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                }
            }
        },
        "wheelPrizeWonPanel": {
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
                "bgFsWon": {
                    "name": "bgPanelW",
                    "x": 648,
                    "y": 385,
                    "anchorX": .5,
                    "anchorY": .5,
                    "scaleX":1.07,
                    "scaleY":1.01
                },
                "panelChar": {
                    "name": "richie_1",
                    "x": 890,
                    "y": 370,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "panelChar1": {
                    "name": "richie_3",
                    "x": 890    ,
                    "y": 370,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible":false
                },
                "p_purple_0":{
                    "name": "purple_0",
                    "x": 360    ,
                    "y": 468,
                    "scaleX":1.5,
                    "scaleY":1.5,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible":false
                },
                "p_purple_1":{
                    "name": "purple_1",
                    "x": 360    ,
                    "y": 468,
                    "scaleX":1.5,
                    "scaleY":1.5,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible":false
                },
                "p_purple_2":{
                    "name": "purple_2",
                    "x": 360    ,
                    "y": 468,
                    "scaleX":1.5,
                    "scaleY":1.5,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible":false
                },
                "p_purple_3":{
                    "name": "purple_3",
                    "x": 360    ,
                    "y": 468,
                    "scaleX":1.5,
                    "scaleY":1.5,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible":false
                },
                "p_red_1":{
                    "name": "red_1",
                    "x": 360    ,
                    "y": 464,
                    "scaleX":1.5,
                    "scaleY":1.5,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible":false
                },
                "p_red_2":{
                    "name": "red_2",
                    "x": 360    ,
                    "y": 464,
                    "scaleX":1.5,
                    "scaleY":1.5,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible":false
                },

            },
            "checkbox": {
                "name": "checkWF",
                "text": "Don't show anymore",
                "font": "15px Arial",
                "color": "#FFFFFF",
                "x": 615,
                "y": 528,
                "evt": "chkEvt"
            },

            "texts": {
                "wofWLabel": {
                    "x": 640,
                    "y": 300,
                    "fill": "#ffffff",
                    "font": "28px FuturaPT-Heavy",
                    "text": "You won",
                    "anchorX": .5
                },
                "wofValue1": {
                    "x": 640,
                    "y": 420,
                    "fill": "#ffffff",
                    "font": "30px FuturaPT-Heavy",
                    "text": "",
                    "anchorX": .5
                },
                "wofWLabel1": {
                    "x": 640,
                    "y": 360,
                    "fill": "#ffffff",
                    "font": "28px FuturaPT-Heavy",
                    "text": "",
                    "align":"center",
                    "anchorX": .5
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
                "bgFsWon": {
                    "name": "bgPanel",
                    "x": 640,
                    "y": 405,
                    "anchorX": .5,
                    "anchorY": .5
                }
            },
            "texts": {
                "fsWLabel": {
                    "x": 640,
                    "y": 340,
                    "fill": "#ffffff",
                    "font": "28px FuturaPT-Heavy",
                    "text": "You won",
                    "anchorX": .5
                },
                "fsValue1": {
                    "x": 640,
                    "y": 380,
                    "fill": "#ffffff",
                    "font": "30px FuturaPT-Heavy",
                    "text": "5",
                    "anchorX": .5
                },
                "fsWLabel1": {
                    "x": 640,
                    "y": 420,
                    "fill": "#ffffff",
                    "font": "28px FuturaPT-Heavy",
                    "text": "Free spins!",
                    "align":"center",
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
                    "y": 340,
                    "anchorX": .5,
                    "anchorY": .5,
                    "scaleX":1.35,
                    "scaleY":.9
                }
            },
            "texts": {
                "frWLabelTitol": {
                    "x": 640,
                    "y": 240,
                    "fill": "#00E2E2",
                    "font": "14px FuturaPT-Book",
                    "text":"",
                    "anchorX": .5
                },
                "frWLabel": {
                    "x": 640,
                    "y": 260,
                    "fill": "#00E2E2",
                    "font": "18px FuturaPT-Book",
                    "text":"",
                    "align":"center",
                    "anchorX": .5
                },
                "frValue1": {
                    "x": 640,
                    "y": 300,
                    "fill": "#00E2E2",
                    "font": "24px FuturaPT-Book",
                    "text": "5",
                    "anchorX": .5
                },
                "frWLabel1": {
                    "x": 640,
                    "y": 330,
                    "fill": "#00E2E2",
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
                "bg_3": {
                    "name": "ultra-win-bg",
                    "x": 640,
                    "y": 360,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "bg_4": {
                },
                "group":{
                    "name":"centralFuntain"
                },
                "winRays": {
                    "name": "win-rays",
                    "x": 640,
                    "y": 300,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "bigWinBg": {
                    "name": "bigWin-bg",
                    "x": 640,
                    "y": 260,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "bigWin": {
                    "name": "bigWin",
                    "x": 635,
                    "y": 180,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "epicWin": {
                    "name": "epicWin",
                    "x": 635,
                    "y": 180,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "ultraWin": {
                    "name": "ultraWin",
                    "x": 635,
                    "y": 180,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "jpotWin": {
                    "name": "jpotWin",
                    "x": 635,
                    "y": 300,
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
                    "size": "40",
                    "text": "",
                    "anchorX": .5,
                    "anchorY": .5
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
        "centralFuntainSmallObj":{},
        "preview": {
            "visible":false,
            "eventBlock":true,
            "graphAsset": {
                "bgPreview": {
                    "name": "bgPreview",
                    "x": 0,
                    "y": 0
                },
                "ilogo":{
                    "name": "logo",
                    "x": 640,
                    "y": 0,
                    "anchorX":.5
                }
            },
            "slide": {
                "x": 640,
                "y": 120,
                "buttonBaseX":-80,
                "buttonBaseY":495,
                "time":10000,
                "slides": {
                    "0": {
                        "x": 0,
                        "y": 0,
                        "visible": true,
                        "graphAsset": {
                            "bgPreview": {
                                "name": "slide_J",
                                "anchorX": .5,
                                "x": 0,
                                "y": 121
                            }
                        },
                        "texts": {
                            "txtPrev0": {
                                "x": 0,
                                "y": 0,
                                "fill": "#ffffff",
                                "font": "24px Futura PT, Arial",
                                "text": "40000 Coins Fixed Jackpot.",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev1": {
                                "x": 0,
                                "y": 30,
                                "fill": "#ffffff",
                                "font": "20px Futura PT, Arial",
                                "text": "5 Jackpot Richie in any positions award you 40000 Coins Win.",
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
                                "name": "slide_4",
                                "anchorX": .5,
                                "x": 0,
                                "y": 121
                            }
                        },
                        "texts": {
                            "txtPrev0": {
                                "x": 0,
                                "y": 0,
                                "fill": "#ffffff",
                                "font": "24px Futura PT, Arial",
                                "text": "Expanding Wild",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev1": {
                                "x": 0,
                                "y": 30,
                                "fill": "#ffffff",
                                "font": "20px Futura PT, Arial",
                                "text": "Up to 5 expanding wilds award you up to 8000 Coins Win.",
                                "anchorX": .5,
                                "align": "center"
                            }
                        }
                    }
                    ,
                    "2": {
                        "x": 0,
                        "y": 0,
                        "visible": false,
                        "graphAsset": {
                            "bgPreview": {
                                "name": "slide_8",
                                "anchorX": .5,
                                "x": 0,
                                "y": 121
                            }
                        },
                        "texts": {
                            "txtPrev0": {
                                "x": 0,
                                "y": 0,
                                "fill": "#ffffff",
                                "font": "24px Futura PT, Arial",
                                "text": "Big Winnings.",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev1": {
                                "x": 0,
                                "y": 30,
                                "fill": "#ffffff",
                                "font": "20px Futura PT, Arial",
                                "text": "Wheel of Chance after every spin to boost your Winnings.",
                                "anchorX": .5,
                                "align": "center"
                            }
                        }
                    },
                    "3": {
                        "x": 0,
                        "y": 0,
                        "visible": false,
                        "graphAsset": {
                            "bgPreview": {
                                "name": "slide_2",
                                "anchorX": .5,
                                "x": 0,
                                "y": 121
                            }
                        },
                        "texts": {
                            "txtPrev0": {
                                "x": 0,
                                "y": 0,
                                "fill": "#ffffff",
                                "font": "24px Futura PT, Arial",
                                "text": "Scatter Prizes.",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev1": {
                                "x": 0,
                                "y": 30,
                                "fill": "#ffffff",
                                "font": "20px Futura PT, Arial",
                                "text": "Win up to 1000 Coins Scatter.",
                                "anchorX": .5,
                                "align": "center"
                            }
                        }

                    },

                    "4": {
                        "x": 0,
                        "y": 0,
                        "visible": false,
                        "graphAsset": {
                            "bgPreview": {
                                "name": "slide_7",
                                "anchorX": .5,
                                "x": 0,
                                "y": 121
                            }
                        },
                        "texts": {
                            "txtPrev0": {
                                "x": 0,
                                "y": 0,
                                "fill": "#ffffff",
                                "font": "24px Futura PT, Arial",
                                "text": "Free Spins.",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev1": {
                                "x": 0,
                                "y": 30,
                                "fill": "#ffffff",
                                "font": "20px Futura PT, Arial",
                                "text": "Spin the Wheel to get 6 Free Spins.",
                                "anchorX": .5,
                                "align": "center"
                            }
                        }
                    },
                    "5": {
                        "x": 0,
                        "y": 0,
                        "visible": false,
                        "graphAsset": {
                            "bgPreview": {
                                "name": "slide_5",
                                "anchorX": .5,
                                "x": 0,
                                "y": 121
                            }
                        },
                        "texts": {
                            "txtPrev0": {
                                "x": 0,
                                "y": 0,
                                "fill": "#ffffff",
                                "font": "24px Futura PT, Arial",
                                "text": "Free Spins Upgrade.",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev1": {
                                "x": 0,
                                "y": 30,
                                "fill": "#ffffff",
                                "font": "20px Futura PT, Arial",
                                "text": "During Free Spins you can Upgrade the wheel Prizes to a better level.",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "swofWLabel": {
                                "x": 0,
                                "y": 260,
                                "fill": "#ffffff",
                                "font": "13px FuturaPT-Heavy",
                                "text": "You won",
                                "anchorX": .5
                            },
                            "swofWLabel1": {
                                "x": 0,
                                "y": 290,
                                "fill": "#ffffff",
                                "font": "12px FuturaPT-Heavy",
                                "text": "a wheel of fortune",
                                "align":"center",
                                "anchorX": .5
                            },
                            "swofValue1": {
                                "x": 0,
                                "y": 310,
                                "fill": "#ffffff",
                                "font": "12px FuturaPT-Heavy",
                                "text": "upgrade to better prizes",
                                "anchorX": .5
                            },
                        }
                    },
                    "6": {
                        "x": 0,
                        "y": 0,
                        "visible": false,
                        "graphAsset": {
                            "bgPreview": {
                                "name": "slide_6",
                                "anchorX": .5,
                                "x": 0,
                                "y": 121
                            }
                        },
                        "texts": {
                            "txtPrev0": {
                                "x": 0,
                                "y": 0,
                                "fill": "#ffffff",
                                "font": "24px Futura PT, Arial",
                                "text": "Free Spins Re-Trigger.",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev1": {
                                "x": 0,
                                "y": 30,
                                "fill": "#ffffff",
                                "font": "20px Futura PT, Arial",
                                "text": "During Free Spins you can win 3 additional Free Spins.",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "s1wofWLabel": {
                                "x": 0,
                                "y": 260,
                                "fill": "#ffffff",
                                "font": "13px FuturaPT-Heavy",
                                "text": "You won",
                                "anchorX": .5
                            },
                            "s1wofWLabel1": {
                                "x": 0,
                                "y": 290,
                                "fill": "#ffffff",
                                "font": "12px FuturaPT-Heavy",
                                "text": "3",
                                "align":"center",
                                "anchorX": .5
                            },
                            "s1wofValue1": {
                                "x": 0,
                                "y": 310,
                                "fill": "#ffffff",
                                "font": "12px FuturaPT-Heavy",
                                "text": "Free Spins",
                                "anchorX": .5
                            },
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
                    "x": 463,
                    "y": 590,
                    "evt": "doOk"
                },
                "myAccount": {
                    "name": "container-btn",
                    "x": 650,
                    "y": 525,
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
                    "x": 814,
                    "y": 590,
                    "evt": "doKo"
                },
                "ok": {
                    "name": "container-btn",
                    "x": 650,
                    "anchorX": .5,
                    "y": 590,
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
            "selectorX":630,
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
                    "scaleX":1.35,
                    "scaleY":.9
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
        }
    }
};

var ReelConfig = {
    "slotEngine":"RichieEngine",
    "engineNumbers":0,
    "log":true,
    "canSwipe":false,
    "comment_preview":"enable feature preview screen",
    "preview":true,
    "previewTout":60000,
    "spinType": "Spin",
    "stopTurboReel":true,
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
    "lineType": "AllLineWinningsFirstLoop",
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
    "animDelayAfterWild":800,
    "freeRounds":"normal",
    "freeSpins":"FreeSpinsRichie",
    "_fsIcon": 1,
    "winHLScale":1.15,
    "fsSpinDelay":750,
    "minFsSmbs":3,
    "scatterIcon": 10,
    "scatterType": "SubstScatter",
    "_twinReelsFeature":"normal",
    "wildType": "FadingWildReel",
    "wilTextAnim":true,
    "wildNum": [11],
    "wildReelOrigin":0,
    "wildReelRollbackSpinDelay": 1000,
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
    },
    "ForceFeature":{
        "ch1":{
            "value":"8,57,64,49,5,1",
            "description":"1 - Zero/ Zero / Zero / Zero"
        },
        "ch2":{
            "value":"8,57,64,49,5,2",
            "description":"2 - Wild reel / Wheel Upgrade / Wheel Upgrade / wild reel"
        },
        "ch3":{
            "value":"8,57,64,49,5,3",
            "description":"3 - wild / Wild / Wild / Wild "
        },
        "ch4":{
            "value":"8,57,64,49,5,4",
            "description":"4 - Zero / Wild / Zero / 160"
        },
        "ch5":{
            "value":"8,57,64,49,5,5",
            "description":"5 - Free Spins / wild reel / wild reel / wild reel"
        },
        "ch6":{
            "value":"8,57,64,49,5,6",
            "description":"6 - wild reel / Zero / Zero / Zero"
        },
        "ch7":{
            "value":"8,57,64,49,5,7",
            "description":"7 - Wild/ Wheel upgrade / wild / 1000"
        },
        "ch8":{
            "value":"8,57,64,49,5,8",
            "description":"8 - Zero / Additional FS"
        },
        "ch9":{
            "value":"8,57,64,49,5,9",
            "description":"9 - 160 / 80 / 160 / 320"
        },
        "ch10":{
            "value":"8,57,64,49,5,0",
            "description":"10 - wild / wild / wild / wild"
        }
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

    "bg" : "richieInVegas/img/paytable/pt-base-complete.jpg",

    "closeBtn": {

        "ypos": "140",
        "xpos": "1000"

    },

    "pagination" : {

        "ypos" : "585",
        "xpos" : "431",
        "checked" : "#fff",
        "unchecked" : "#000000"

    },

    "helpPath" : gameParams.pathCDN + 'ironDog/help/desktop/richieInVegas/help_' + gameParams.lang+".json",

    "fullscreen": true,

    "buttons" : [

        {
            "id" : "left",
            "ypos" : "540",
            "xpos" : "225",
            "bg_up" : "richieInVegas/img/paytable/forward-btn-up.png",
            "bg_over" : "richieInVegas/img/paytable/forward-btn-over.png",
            "bg_down" : "richieInVegas/img/paytable/forward-btn-down.png",
            "direction" : -1
        },

        {
            "id" : "right",
            "ypos" : "540",
            "xpos" : "955",
            "bg_up" : "richieInVegas/img/paytable/forward-btn-up.png",
            "bg_over" : "richieInVegas/img/paytable/forward-btn-over.png",
            "bg_down" : "richieInVegas/img/paytable/forward-btn-down.png",
            "direction" : 1
        }

    ],

    "pages" : [
        {

            "gameguide" : true,
            "title" : "Richie In Vegas Game Rules",
            "title_xpos" : "520",
            "title_ypos" : "130",
            "xpos" : "200",
            "ypos" : "185",
            "height" : "331",
            "width" : "830",
            "fill": "#fff",
            "font" : "FuturaPT-Book, Arial, sans-serif",
            "rtp": [
                "96.24",
                "96.24",
                "96.24"
            ]

        },
        {

            "symbols" : [


                {
                    "id" : "symbol_00",
                    "bg" : "richieInVegas/img/symbol-00.png",
                    "xpos": "420",
                    "ypos": "160",
                    "height": "175px",
                    "width": "175px",
                    "text": {
                        "value": 0,
                        "xpos": "50",
                        "ypos": "185",
                        "width": "109",
                        "left_fill": "#fff",
                        "right_fill": "#60b7f1",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_01",
                    "bg" : "richieInVegas/img/symbol-01.png",
                    "xpos": "685",
                    "ypos": "160",
                    "height": "175px",
                    "width": "175px",
                    "text": {
                        "value": 1,
                        "xpos": "50",
                        "ypos": "185",
                        "width": "109",
                        "left_fill": "#fff",
                        "right_fill": "#60b7f1",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                }

            ],

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "305",
                    "ypos" : "541",
                    "width" : "700",
                    "fill" : "#70e3ff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols": [

                {
                    "id" : "symbol_02",
                    "bg" : "richieInVegas/img/symbol-02.png",
                    "xpos": "420",
                    "ypos": "160",
                    "height": "175px",
                    "width": "175px",
                    "text": {
                        "value": 2,
                        "xpos": "50",
                        "ypos": "185",
                        "width": "109",
                        "left_fill": "#fff",
                        "right_fill": "#60b7f1",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_03",
                    "bg" : "richieInVegas/img/symbol-03.png",
                    "xpos": "685",
                    "ypos": "160",
                    "height": "175px",
                    "width": "175px",
                    "text": {
                        "value": 3,
                        "xpos": "50",
                        "ypos": "185",
                        "width": "109",
                        "left_fill": "#fff",
                        "right_fill": "#60b7f1",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                }


            ],

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "305",
                    "ypos" : "541",
                    "width" : "700",
                    "fill" : "#70e3ff",
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
                    "bg" : "richieInVegas/img/symbol-04.png",
                    "xpos": "420",
                    "ypos": "160",
                    "height": "175px",
                    "width": "175px",
                    "text": {
                        "value": 4,
                        "xpos": "50",
                        "ypos": "185",
                        "width": "109",
                        "left_fill": "#fff",
                        "right_fill": "#60b7f1",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_05",
                    "bg" : "richieInVegas/img/symbol-05.png",
                    "xpos": "685",
                    "ypos": "160",
                    "height": "175px",
                    "width": "175px",
                    "text": {
                        "value": 5,
                        "xpos": "50",
                        "ypos": "185",
                        "width": "109",
                        "left_fill": "#fff",
                        "right_fill": "#60b7f1",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                }


            ],

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "305",
                    "ypos" : "541",
                    "width" : "700",
                    "fill" : "#70e3ff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },


        {

            "symbols": [

                {
                    "id" : "symbol_06",
                    "bg" : "richieInVegas/img/symbol-06.png",
                    "xpos": "420",
                    "ypos": "160",
                    "height": "175px",
                    "width": "175px",
                    "text": {
                        "value": 6,
                        "xpos": "50",
                        "ypos": "185",
                        "width": "109",
                        "left_fill": "#fff",
                        "right_fill": "#60b7f1",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_07",
                    "bg" : "richieInVegas/img/symbol-07.png",
                    "xpos": "685",
                    "ypos": "160",
                    "height": "175px",
                    "width": "175px",
                    "text": {
                        "value": 7,
                        "xpos": "50",
                        "ypos": "185",
                        "width": "109",
                        "left_fill": "#fff",
                        "right_fill": "#60b7f1",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                }

            ],

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "305",
                    "ypos" : "541",
                    "width" : "700",
                    "fill" : "#70e3ff",
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
                    "bg" : "richieInVegas/img/symbol-08.png",
                    "xpos": "420",
                    "ypos": "160",
                    "height": "175px",
                    "width": "175px",
                    "text": {
                        "value": 8,
                        "xpos": "50",
                        "ypos": "185",
                        "width": "109",
                        "left_fill": "#fff",
                        "right_fill": "#60b7f1",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_09",
                    "bg" : "richieInVegas/img/symbol-09.png",
                    "xpos": "685",
                    "ypos": "160",
                    "height": "175px",
                    "width": "175px",
                }

            ],

            "text": [
                {
                    "value":  ["Jackpot Richie symbol appears during Free Spins only.",
                        "5 symbols in any positions award 40000 Coins.",
                        "Jackpot Richie symbols pay on winning line too according with normal Richie paytable on the left."],
                    "xpos": "628",
                    "ypos": "338",
                    "width": "440",
                    "left_fill": "#fff",
                    "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "18px",
                    "align": "left",
                    "spacing": "10"
                },
                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "305",
                    "ypos" : "541",
                    "width" : "700",
                    "fill" : "#70e3ff",
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
                    "bg" : "richieInVegas/img/symbol-10.png",
                    "xpos": "544",
                    "ypos": "160",
                    "height": "175px",
                    "width": "175px",
                    "text": {
                        "value": "",
                        "xpos": "50",
                        "ypos": "185",
                        "width": "109",
                        "left_fill": "#fff",
                        "right_fill": "#60b7f1",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                }
            ],

            "text": [
                {
                    "value": [
                        "The Wild symbol appears on any top position of the reels.",
                        "It completes and substitutes all the icons except for Free Spins.",
                        "More than 1 symbol can appear at the same time."],
                    "xpos": "262",
                    "ypos": "338",
                    "width": "750",
                    "left_fill": "#fff",
                    "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "18px",
                    "align": "center",
                    "spacing": "10"
                },
                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "305",
                    "ypos" : "541",
                    "width" : "700",
                    "fill" : "#70e3ff",
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
                    "bg" : "richieInVegas/img/symbol-11.png",
                    "xpos": "420",
                    "ypos": "160",
                    "height": "175px",
                    "width": "175px",
                    "text": {
                        "value":"",
                        "xpos": "50",
                        "ypos": "185",
                        "width": "109",
                        "left_fill": "#fff",
                        "right_fill": "#60b7f1",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_11_exp",
                    "bg" : "richieInVegas/img/paytable/expWild.png",
                    "xpos": "780",
                    "ypos": "160",
                    "height": "370px",
                    "width": "150px",

                }

            ],

            "text": [
                {
                    "value":["The Expanding Wild symbol appears on any top position of the reels and expands to cover the entire reel.",
                    "It completes and substitutes all the icons except for Free Spins.",
                    "Up to 5 symbols can appear at the same time."],
                    "xpos": "226",
                    "ypos": "334",
                    "width": "550",
                    "left_fill": "#fff",
                    "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "18px",
                    "align": "center",
                    "spacing": "10"
                },
                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "305",
                    "ypos" : "541",
                    "width" : "700",
                    "fill" : "#70e3ff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]


        },
        {

            "symbols": [

                {
                    "id" : "symbol_12_text",
                    "bg" : "richieInVegas/img/symbol-12.png",
                    "xpos": "390",
                    "ypos": "155",
                    "height": "175px",
                    "width": "175px"
                },

                {
                    "id" : "w1",
                    "bg" : "richieInVegas/img/paytable/slide_7.png",
                    "xpos": "640",
                    "ypos": "175",
                    "width": "350px"
                }
            ],

            "text": [

                {
                    "value": "Wheel of Chance symbol, appearing in any position of the central reel, open the Wheel of Chance.",
                    "xpos": "265",
                    "ypos": "375",
                    "width": "750",
                    "fill": "#fff",
                    "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "18px",
                    "align": "center",
                    "margin": "0"
                },

                {
                    "value": [
                        "Manually spin the wheel or press the Spin button in the middle.",
                        "You can get Coins prizes, additional wilds, expanding wilds, 6 Free Spins.",
                    ],
                    "xpos": "265",
                    "ypos": "400",
                    "width": "750",
                    "fill": "#fff",
                    "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "18px",
                    "align": "center",
                    "spacing": "0"
                },

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "305",
                    "ypos" : "541",
                    "width" : "700",
                    "fill" : "#70e3ff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },


        {

            "symbols": [

                {
                    "id" : "symbol_12W",
                    "bg" : "richieInVegas/img/symbol-12-w.png",
                    "xpos": "550",
                    "ypos": "155",
                    "height": "175px",
                    "width": "175px"
                },

            ],

            "text": [

                {
                    "value": "Wheel Of Chances Wild replacement symbol.",
                    "xpos": "265",
                    "ypos": "375",
                    "width": "750",
                    "fill": "#fff",
                    "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "18px",
                    "align": "center",
                    "margin": "0"
                },

                {
                    "value": [
                        "Appears in the normal game only taking the wheel of chances symbol place.",
                        "Wheel Of Chances Wild completes and substitutes all the icons except for Free Spins."
                    ],
                    "xpos": "265",
                    "ypos": "400",
                    "width": "750",
                    "fill": "#fff",
                    "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "18px",
                    "align": "center",
                    "spacing": "0"
                },

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "305",
                    "ypos" : "541",
                    "width" : "700",
                    "fill" : "#70e3ff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },





        {

            "symbols": [

                {
                    "id" : "w2",
                    "bg" : "richieInVegas/img/wheel-of-chance/wheel-of-chance-01.png",
                    "xpos": "295",
                    "ypos": "155",
                    "height": "175px",
                    "width": "175px",
                    "text": {
                        "value": "First level wheel.",
                        "xpos": "-37",
                        "ypos": "185",
                        "width": "250",
                        "left_fill": "#fff",
                        "right_fill": "#60b7f1",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "18px",
                        "align": "center"
                    }
                },


                {
                    "id" : "w3",
                    "bg" : "richieInVegas/img/wheel-of-chance/wheel-of-chance-02.png",
                    "xpos": "548",
                    "ypos": "155",
                    "height": "175px",
                    "width": "175px",
                    "text": {
                        "value": "Second level wheel.",
                        "xpos": "-12",
                        "ypos": "185",
                        "width": "200",
                        "left_fill": "#fff",
                        "right_fill": "#60b7f1",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "18px",
                        "align": "center"
                    }
                },

                {
                    "id" : "w4",
                    "bg" : "richieInVegas/img/wheel-of-chance/wheel-of-chance-03.png",
                    "xpos": "812",
                    "ypos": "155",
                    "height": "175px",
                    "width": "175px",
                    "text": {
                        "value": "Final level wheel.",
                        "xpos": "-12",
                        "ypos": "185",
                        "width": "200",
                        "left_fill": "#fff",
                        "right_fill": "#60b7f1",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "18px",
                        "align": "center"
                    }
                }

            ],

            "text": [

                {
                    "value": [
                        "During Free Spins Wheel Upgrade prize will bring you to the next level with better prizes.",
                        "Wheel upgrade adds 1 Free Spins.",
                        "Free Spins re-trigger adds 3 Free Spins.",
                        "The higher the level the higher the number of wilds, expanding wilds and Coins you can get.",
                        "See game guide for details."
                    ],
                    "xpos": "213",
                    "ypos": "340",
                    "width": "850",
                    "fill": "#fff",
                    "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "18px",
                    "align": "center",
                    "spacing": "0"
                },

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "305",
                    "ypos" : "541",
                    "width" : "700",
                    "fill" : "#70e3ff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
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
            "unchecked_colour": "#60b7f1",

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "305",
                    "ypos" : "541",
                    "width" : "700",
                    "fill" : "#70e3ff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "lines": [11, 20],
            "ypos": "225",
            "font" : "FuturaPT-Book, Arial, sans-serif",
            "text_colour": "#93d8fe",
            "checked_colour": "#FFFFFF",
            "unchecked_colour": "#60b7f1",

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "305",
                    "ypos" : "541",
                    "width" : "700",
                    "fill" : "#70e3ff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        }
    ]

};
