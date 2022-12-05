
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
        "sprite": "fonts/fontWai.png",
        "font": "fonts/fontWai.xml"
    }
};

var extScripts={
    "webfont": "15px FuturaPT-Heavy",
    "webfont1": "15px FuturaPT-Book",
    "webFont2":"15px HawaiianAlohaBTN-Bold"
};
var gameAssets = {
    "assets": {
        "icon0": "waiKiki/img/symbol-00.png",
        "icon1": "waiKiki/img/symbol-01.png",
        "icon2": "waiKiki/img/symbol-02.png",
        "icon3": "waiKiki/img/symbol-03.png",
        "icon4": "waiKiki/img/symbol-04.png",
        "icon_FS_4": "waiKiki/img/symbol-04-night.png",
        "icon5": "waiKiki/img/symbol-05.png",
        "icon_FS_5": "waiKiki/img/symbol-05-night.png",
        "icon6": "waiKiki/img/symbol-06.png",
        "icon7": "waiKiki/img/symbol-07.png",
        "icon_FS_7": "waiKiki/img/symbol-07-night.png",
        "icon8": "waiKiki/img/symbol-08.png",
        "icon9": "waiKiki/img/symbol-09.png",
        "icon11": "waiKiki/img/symbol-11.png",
        "bicon0": "waiKiki/img/b-symbol-00.png",
        "bicon1": "waiKiki/img/b-symbol-01.png",
        "bicon2": "waiKiki/img/b-symbol-02.png",
        "bicon3": "waiKiki/img/b-symbol-03.png",
        "bicon4": "waiKiki/img/b-symbol-04.png",
        "bicon_FS_4": "waiKiki/img/b-symbol-04-night.png",
        "bicon5": "waiKiki/img/b-symbol-05.png",
        "bicon_FS_5": "waiKiki/img/b-symbol-05-night.png",
        "bicon6": "waiKiki/img/b-symbol-06.png",
        "bicon7": "waiKiki/img/b-symbol-07.png",
        "bicon_FS_7": "waiKiki/img/b-symbol-07-night.png",
        "bicon8": "waiKiki/img/b-symbol-08.png",
        "bicon9": "waiKiki/img/b-symbol-09.png",

        "line_0_00": "waiKiki/img/lines/payline_00000.png",
        "line_0_01": "waiKiki/img/lines/payline_00001.png",
        "line_0_02": "waiKiki/img/lines/payline_00002.png",
        "line_0_03": "waiKiki/img/lines/payline_00003.png",
        "line_0_04": "waiKiki/img/lines/payline_00004.png",
        "line_0_05": "waiKiki/img/lines/payline_00005.png",
        "line_0_06": "waiKiki/img/lines/payline_00006.png",
        "line_0_07": "waiKiki/img/lines/payline_00007.png",
        "line_0_08": "waiKiki/img/lines/payline_00008.png",
        "line_0_09": "waiKiki/img/lines/payline_00009.png",
        "line_0_10": "waiKiki/img/lines/payline_00010.png",
        "line_0_11": "waiKiki/img/lines/payline_00011.png",
        "line_0_12": "waiKiki/img/lines/payline_00012.png",
        "line_0_13": "waiKiki/img/lines/payline_00013.png",
        "line_0_14": "waiKiki/img/lines/payline_00014.png",
        "line_0_15": "waiKiki/img/lines/payline_00015.png",
        "line_0_16": "waiKiki/img/lines/payline_00016.png",
        "line_0_17": "waiKiki/img/lines/payline_00017.png",
        "line_0_18": "waiKiki/img/lines/payline_00018.png",
        "line_0_19": "waiKiki/img/lines/payline_00019.png",
        "part-1": "waiKiki/img/anim/coins/flower-cascade-pink.png",
        "f-part-1":"waiKiki/img/anim/coins/flower-cascade-pink.png",
        "part-2": "waiKiki/img/anim/coins/flower-cascade-blue.png",
        "f-part-2":"waiKiki/img/anim/coins/flower-cascade-blue.png",
        "part-3": "waiKiki/img/anim/coins/flower-cascade-red.png",
        "f-part-3":"waiKiki/img/anim/coins/flower-cascade-red.png",
        "bottomBar": "gui/message-bar.png",
        "bgPanel": "waiKiki/img/bgPanel.png",
        "bgPanelGame": "waiKiki/img/bgPanel.png",
        "bgPreview":"waiKiki/img/info-screen.png",
        "freeRoundsPanel":"waiKiki/img/free-rounds.png",
        "bgAlpha": "waiKiki/img/alpha.png",
        "bigWin":"waiKiki/img/big-win.png",
        "superWin":"waiKiki/img/super-bigwin.png",
        "megaWin":"waiKiki/img/mega-bigwin.png",
        "bg_r": "waiKiki/img/bg/base-right.png",
        "bg_l": "waiKiki/img/bg/base-left.png",
        "bg_b": "waiKiki/img/bg/base-bottom.png",
        "bg_t": "waiKiki/img/bg/base-top.png",
        "bg_m": "waiKiki/img/bg/base-main.png",
        "bgFS_r": "waiKiki/img/bg/base-right-fs.png",
        "bgFS_l": "waiKiki/img/bg/base-left-fs.png",
        "bgFS_b": "waiKiki/img/bg/base-bottom-fs.png",
        "bgFS_t": "waiKiki/img/bg/base-top-fs.png",
        "bgFS_m": "waiKiki/img/bg/base-main-fs.png",
        "sideFS_SxTree":"waiKiki/img/bg/flowers-foreground.png",
        "sideFS_DxTree":"waiKiki/img/bg/flowers-foreground.png",
        "sideFS_Sxflower":"waiKiki/img/bg/free-spin-foreground-right.png",
        "sideFS_DxFlower":"waiKiki/img/bg/free-spin-foreground-right.png",
        "token":"waiKiki/img/flower.png",
        "buttonBg":"gui/generic/img/desktop/png/cp-info-bar.png",
        "volOnButton": "gui/btnVolOn.png",
        "volOffButton": "gui/btnVolOff.png",
        "freeSpinPanel":"waiKiki/img/free-spins.png",
        "bgPt" : "waiKiki/img/paytable/pt-base-complete.png",
        "btnTranspRight": "waiKiki/img/transparent.png",
        "btnTranspLeft": "waiKiki/img/transparent.png",
        "slide_0": "waiKiki/img/paytable/screenShot1.png",
        "slide_1": "waiKiki/img/paytable/screenShot2.png",
        "slide_2": "waiKiki/img/paytable/screenShot3.png",
        "slide_3": "waiKiki/img/paytable/screenShot4.png",
        "slide_4": "waiKiki/img/paytable/screenShot5.png",
        "slide_5": "waiKiki/img/paytable/screenShot6.png",
        "slide_6": "waiKiki/img/paytable/screenShot7.png",
        "tokenText":"waiKiki/img/token-text.png",
        "icon6-change": "waiKiki/img/paytable/scatter.png",
        "icon12-change": "waiKiki/img/paytable/bonus-expanded.png",
        "icon10-fs": "waiKiki/img/paytable/hybiscus-blue.png",
        "icon11-expanded": "waiKiki/img/paytable/freespins-expanded.png",
        "tokens-text": "waiKiki/img/paytable/tokens-text.png"
    },
    "localizedAssets":{
        "graphAsset": {
            "logo": {
                "lang": ["zs","ko","jp"],
                "img": "waiKiki/img/logo"
            }
        }
    },
    "buttonsSpriteSheet": {
        "container-btn": {
            "sprite": "waiKiki/img/game-btn.png",
            "json": "waiKiki/img/game-btn.png",
            "w": 210,
            "h": 66
        },
        "yesButton": {
            "sprite": "waiKiki/img/yes-btn.png",
            "json": "waiKiki/img/yes-btn.png",
            "w": 50,
            "h": 43
        },
        "noButton": {
            "sprite": "waiKiki/img/no-btn.png",
            "json": "waiKiki/img/no-btn.png",
            "w": 50,
            "h": 43
        },
        "check": {
            "sprite": "waiKiki/img/radio-btns.png",
            "json": "waiKiki/img/radio-btns.png",
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
        "anim4": {
            "json": "waiKiki/img/anim/smb/symbol-04.json",
            "sprite": "waiKiki/img/anim/smb/symbol-04.png"
        },
        "anim5": {
            "json": "waiKiki/img/anim/smb/symbol-05.json",
            "sprite": "waiKiki/img/anim/smb/symbol-05.png"
        },
        "anim6": {
            "json": "waiKiki/img/anim/smb/symbol-06.json",
            "sprite": "waiKiki/img/anim/smb/symbol-06.png"
        },
        "anim7": {
            "json": "waiKiki/img/anim/smb/symbol-07.json",
            "sprite": "waiKiki/img/anim/smb/symbol-07.png"
        },
        "anim_FS_4": {
            "json": "waiKiki/img/anim/smb/symbol-04-night.json",
            "sprite": "waiKiki/img/anim/smb/symbol-04-night.png"
        },
        "anim_FS_5": {
            "json": "waiKiki/img/anim/smb/symbol-05-night.json",
            "sprite": "waiKiki/img/anim/smb/symbol-05-night.png"
        },
        "anim_FS_7": {
            "json": "waiKiki/img/anim/smb/symbol-07-night.json",
            "sprite": "waiKiki/img/anim/smb/symbol-07-night.png"
        },
        "anim8": {
            "json": "waiKiki/img/anim/smb/symbol-08.json",
            "sprite": "waiKiki/img/anim/smb/symbol-08.png"
        },
        "animW9": {
            "json": "waiKiki/img/anim/smb/symbol-09.json",
            "sprite": "waiKiki/img/anim/smb/symbol-09.png"
        },
        "animWr10": {
            "json": "waiKiki/img/anim/smb/symbol-10-red.json",
            "sprite": "waiKiki/img/anim/smb/symbol-10-red.png"
        },
        "animWb10": {
            "json": "waiKiki/img/anim/smb/symbol-10-blue.json",
            "sprite": "waiKiki/img/anim/smb/symbol-10-blue.png"
        },
        "anim11": {
            "json": "waiKiki/img/anim/smb/symbol-11.json",
            "sprite": "waiKiki/img/anim/smb/symbol-11.png"
        },
        "anim12a": {
            "json": "waiKiki/img/anim/smb/symbol-15-a.json",
            "sprite": "waiKiki/img/anim/smb/symbol-15-a.png"
        },
        "anim12b": {
            "json": "waiKiki/img/anim/smb/symbol-15-b.json",
            "sprite": "waiKiki/img/anim/smb/symbol-15-b.png"
        },
        "anim12c": {
            "json": "waiKiki/img/anim/smb/symbol-15-c.json",
            "sprite": "waiKiki/img/anim/smb/symbol-15-c.png"
        },
        "anim13": {
            "json": "waiKiki/img/anim/smb/symbol-13.json",
            "sprite": "waiKiki/img/anim/smb/symbol-13.png"
        },
        "anim14a": {
            "json": "waiKiki/img/anim/smb/symbol-14-a.json",
            "sprite": "waiKiki/img/anim/smb/symbol-14-a.png"
        },
        "anim14b": {
            "json": "waiKiki/img/anim/smb/symbol-14-b.json",
            "sprite": "waiKiki/img/anim/smb/symbol-14-b.png"
        },
        "anim14c": {
            "json": "waiKiki/img/anim/smb/symbol-14-c.json",
            "sprite": "waiKiki/img/anim/smb/symbol-14-c.png"
        },
        "animToken": {
            "json": "waiKiki/img/anim/smb/symbol-12-token-win.json",
            "sprite": "waiKiki/img/anim/smb/symbol-12-token-win.png"
        },
        "bonus_0":{
            "json": "waiKiki/img/bonus/bonus-game-intro.json",
            "sprite": "waiKiki/img/bonus/bonus-game-intro.png"
        },
        "bonus_1":{
            "json": "waiKiki/img/bonus/bonus-game-middle.json",
            "sprite": "waiKiki/img/bonus/bonus-game-middle.png"
        },
        "bonus_2":{
            "json": "waiKiki/img/bonus/bonus-game-reveal.json",
            "sprite": "waiKiki/img/bonus/bonus-game-reveal.png"
        },
        "sideFS_intro":{
            "json": "waiKiki/img/fore-ground-anim/side-feature-intro.json",
            "sprite": "waiKiki/img/fore-ground-anim/side-feature-intro.png"
        },
        "sideFS_idle":{
            "json": "waiKiki/img/fore-ground-anim/side-feature-idle.json",
            "sprite": "waiKiki/img/fore-ground-anim/side-feature-idle.png"
        },
        "sideFS_active":{
            "json": "waiKiki/img/fore-ground-anim/side-feature-active.json",
            "sprite": "waiKiki/img/fore-ground-anim/side-feature-active.png"
        },
        "flame": {
            "json": "waiKiki/img/fore-ground-anim/flames.json",
            "sprite": "waiKiki/img/fore-ground-anim/flames.png"
        }
    },
    "importantSounds": {
        "spinClick": {
            "name": "waiKiki/sounds/spinClick.mp3",
            "volume": .2
        },
        "reelSound": {
            "name": "waiKiki/sounds/reelSound.mp3",
            "volume":.7
        },
        "reelSoundFast_0": {
            "name": "waiKiki/sounds/reelSoundFast.mp3",
            "volume":1
        },
        "reelSoundFast_1": {
            "name": "waiKiki/sounds/reelSoundFast.mp3",
            "volume":1
        },
        "reelSoundFast_2": {
            "name": "waiKiki/sounds/reelSoundFast.mp3",
            "volume":1
        },
        "reelSoundFast_3": {
            "name": "waiKiki/sounds/reelSoundFast.mp3",
            "volume":1
        },
        "reelSoundFast_4": {
            "name": "waiKiki/sounds/reelSoundFast.mp3",
            "volume":1
        },
        "reelStop": {
            "name": "waiKiki/sounds/reelStop.mp3",
            "volume":.4
        }
    },
    "sounds": {
        "click": {
            "name": "waiKiki/sounds/click.mp3",
            "volume": .2
        },
        "smbWin_0": {
            "name": "waiKiki/sounds/smbWin_0.mp3",
            "volume": 1.2
        },
        "smbWin_1": {
            "name": "waiKiki/sounds/smbWin_0.mp3",
            "volume": 1.2
        },
        "smbWin_2": {
            "name": "waiKiki/sounds/smbWin_0.mp3",
            "volume": 1.2
        },
        "smbWin_3": {
            "name": "waiKiki/sounds/smbWin_0.mp3",
            "volume": 1.2
        },
        "smbWin_4": {
            "name": "waiKiki/sounds/smbWin_0.mp3",
            "volume": 1.3
        },
        "smbWin_5": {
            "name": "waiKiki/sounds/smbWin_5.mp3",
            "volume": 1.3
        },
        "smbWin_6": {
            "name": "waiKiki/sounds/smbWin_6.mp3",
            "volume": 1.3
        },
        "smbWin_7": {
            "name": "waiKiki/sounds/smbWin_7.mp3",
            "volume": 1.3
        },
        "smbWin_8": {
            "name": "waiKiki/sounds/smbWin_8.mp3",
            "volume": 1.1
        },
        "stickyWild": {
            "name": "waiKiki/sounds/stickyWild.mp3",
            "volume": 1
        },
        "stickyWildFs": {
            "name": "waiKiki/sounds/stickyWildFs.mp3",
            "volume": 1
        },
        "wildReel": {
            "name": "waiKiki/sounds/wildReel.mp3",
            "volume": .6
        },
        "lose": {
            "name": "waiKiki/sounds/AnticipationLose.mp3",
            "volume": 1.8
        },
        "win": {
            "name": "waiKiki/sounds/AnticipationWin.mp3",
            "volume": 1.8
        },
        "wildReelFast": {
            "name": "waiKiki/sounds/wildReelFast.mp3",
            "volume": .6
        },
        "fsWildReel": {
            "name": "waiKiki/sounds/fsWildReel.mp3",
            "volume": .6
        },
        "fsWildReelFast": {
            "name": "waiKiki/sounds/fsWildReelFast.mp3",
            "volume": .6
        },
        "wildReelOut": {
            "name": "waiKiki/sounds/wildReelRollback.mp3",
            "volume": .4
        },
        "fsWildReelOut": {
            "name": "waiKiki/sounds/fsWildReelRollback.mp3",
            "volume": .5
        },
        "fsWin": {
            "name": "waiKiki/sounds/fsWin.mp3",
            "volume": 1.6
        },
        "luau": {
            "name": "waiKiki/sounds/luau.mp3",
            "volume": 1.1
        },
        "turtle": {
            "name": "waiKiki/sounds/turtle.mp3",
            "volume": 1.1
        },
        "fsWon": {
            "name": "waiKiki/sounds/introFs.mp3",
            "volume": 1
        },
        "introBonus": {
            "name": "waiKiki/sounds/introBonus.mp3",
            "volume": 1.3
        },
        "showBonus": {
            "name": "waiKiki/sounds/showBonus.mp3",
            "volume": 1.3
        },
        "endBonus": {
            "name": "waiKiki/sounds/endBonus.mp3",
            "volume": 1.3
        },
        "revert": {
            "name": "waiKiki/sounds/iconsRevert.mp3",
            "volume": 1
        },
        "incWin": {
            "name": "waiKiki/sounds/counter.mp3",
            "volume": .4,
            "loop": true
        },
        "line": {
            "name": "waiKiki/sounds/line.mp3",
            "volume": .3
        },
        "winBg_0": {
            "name": "waiKiki/sounds/centralWin/win1.mp3",
            "volume": 1
        },
        "winBg_1": {
            "name": "waiKiki/sounds/centralWin/win2.mp3",
            "volume": 1
        },
        "winBg_2": {
            "name": "waiKiki/sounds/centralWin/win3.mp3",
            "volume": 1
        },
        "winBg_3": {
            "name": "waiKiki/sounds/centralWin/win4.mp3",
            "volume": 1
        },
        "winBg_4": {
            "name": "waiKiki/sounds/centralWin/win5.mp3",
            "volume": 1.1
        },
        "winBg_5": {
            "name": "waiKiki/sounds/centralWin/win6.mp3",
            "volume": 1.1
        },
        "winBg_6": {
            "name": "waiKiki/sounds/centralWin/bigWin_Full.mp3",
            "volume": 1.1
        },
        "winBg_7": {
            "name": "waiKiki/sounds/centralWin/superBigWin_Full.mp3",
            "volume": 1.1
        },
        "winBg_8": {
            "name": "waiKiki/sounds/centralWin/megaBigWin_Full.mp3",
            "volume": 1.1
        },
        "winBgS_6": {
            "name": "waiKiki/sounds/centralWin/bigWin.mp3",
            "volume": 1.1
        },
        "winBgS_7": {
            "name": "waiKiki/sounds/centralWin/superBigWin.mp3",
            "volume": 1.1
        },
        "winBgS_8": {
            "name": "waiKiki/sounds/centralWin/megaBigWin.mp3",
            "volume": 1.1
        },




        "winBgFS_0": {
            "name": "waiKiki/sounds/centralWin/FSwin1.mp3",
            "volume": 1
        },
        "winBgFS_1": {
            "name": "waiKiki/sounds/centralWin/FSwin2.mp3",
            "volume": 1
        },
        "winBgFS_2": {
            "name": "waiKiki/sounds/centralWin/FSwin3.mp3",
            "volume": 1
        },
        "winBgFS_3": {
            "name": "waiKiki/sounds/centralWin/FSwin4.mp3",
            "volume": 1
        },
        "winBgFS_4": {
            "name": "waiKiki/sounds/centralWin/FSwin5.mp3",
            "volume": 1
        },
        "winBgFS_5": {
            "name": "waiKiki/sounds/centralWin/FSwin6.mp3",
            "volume": 1
        },
        "winBgFS_6": {
            "name": "waiKiki/sounds/centralWin/FSbigWin_Full.mp3",
            "volume": 1.1
        },
        "winBgFS_7": {
            "name": "waiKiki/sounds/centralWin/FSsuperBigWin_Full.mp3",
            "volume": 1.1
        },
        "winBgFS_8": {
            "name": "waiKiki/sounds/centralWin/FSmegaBigWin_Full.mp3",
            "volume": 1.1
        },
        "winBgSFS_6": {
            "name": "waiKiki/sounds/centralWin/FSbigWin.mp3",
            "volume": 1.1
        },
        "winBgSFS_7": {
            "name": "waiKiki/sounds/centralWin/FSsuperBigWin.mp3",
            "volume": 1.1
        },
        "winBgSFS_8": {
            "name": "waiKiki/sounds/centralWin/FSmegaBigWin.mp3",
            "volume": 1.1
        },
        "winPanel": {
            "name": "waiKiki/sounds/winScreen.mp3",
            "volume": 1.2
        },
        "sideActive":{
            "name": "waiKiki/sounds/sideActive.mp3",
            "volume": 2.5
        },
        "sideIdle":{
            "name": "waiKiki/sounds/sideIdle.mp3",
            "volume": 1.5
        },
        "sideSlide":{
            "name": "waiKiki/sounds/sideSlide.mp3",
            "volume": 1.5
        },
        "token":{
            "name": "waiKiki/sounds/token.mp3",
            "volume": 1.1
        },
        "tokenNewLevel":{
            "name": "waiKiki/sounds/tokenNewLevel.mp3",
            "volume": 1
        }
    },
    "bgSounds": {
        "bgSlot": {
            "name": "waiKiki/sounds/bg.mp3",
            "volume": .65
        },

        "bgFs": {
            "name": "waiKiki/sounds/bgFs.mp3",
            "volume":.75
        }
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
                }
            }
        },
        "background":{
            "visible":false,
            "graphAsset": {
                "bg2": {
                    "name": "sideFS_SxTree",
                    "x": 940,
                    "y": 300
                },
                "bg3": {
                    "name": "sideFS_SxTree",
                    "x": 340,
                    "scaleX":-1,
                    "y": 300
                }
            }
        },
        "flame":{
            "visible":false,
            "animAsset":{
                "f1": {
                    "name": "flame",
                    "x": 160,
                    "y": 320,
                    "scaleX":-.8,
                    "anchorX":.5,
                    "anchorY":0.5
                },
                "f2": {
                    "name": "flame",
                    "x": 92,
                    "y": 364,
                    "scaleX":-1,
                    "anchorX":.5,
                    "anchorY":0.5
                },
                "f3": {
                    "name": "flame",
                    "x": 1120,
                    "y": 320,
                    "scaleX":.8,
                    "anchorX":.5,
                    "anchorY":0.5
                },
                "f4": {
                    "name": "flame",
                    "x": 1188,
                    "y": 364,
                    "anchorX":.5,
                    "anchorY":0.5
                }
            }
        },
        "backgroundFS":{
            "visible":false,
            "y":500,
            "graphAsset": {
                "bg4": {
                    "name": "sideFS_DxFlower",
                    "x": 785,
                    "y": 300
                },
                "bg5": {
                    "name": "sideFS_DxFlower",
                    "x": 490,
                    "scaleX":-1,
                    "y": 300
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
                    "x": 410,
                    "y": 15,
                    "fill": "#94197e",
                    "font": "13px Futura ,Arial",
                    "text": "Free Rounds:",

                    "anchorX": 1
                },
                "frValue": {
                    "x": 380,
                    "y": 45,
                    "fill": "#202c83",
                    "font": "23px Futura ,Arial",
                    "text": "5",
                    "anchorX": 0.5
                },
                "frTotWonLabel": {
                    "x": 935,
                    "y": 15,
                    "fill": "#94197e",
                    "font": "13px Futura ,Arial",
                    "text": "Total won:",
                    "anchorX": 1
                },
                "frTotWonValue": {
                    "x": 905,
                    "y": 45,
                    "fill": "#202c83",
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
                }
            },
            "texts": {
                "fsLabel": {
                    "x": 410,
                    "y": 45,
                    "fill": "#3ee902",
                    "font": "13px Futura ,Arial",
                    "text": "Free Spins",
                    "anchorX": 1
                },
                "fsValue": {
                    "x": 380,
                    "y": 15,
                    "fill": "#17e1ff",
                    "font": "23px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                },
                "totWonLabel": {
                    "x": 935,
                    "y": 45,
                    "fill": "#3ee902",
                    "font": "13px Futura ,Arial",
                    "text": "Total won",
                    "anchorX": 1
                },
                "totWonValue": {
                    "x": 905,
                    "y": 15,
                    "fill": "#17e1ff",
                    "font": "23px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                }
            }
        },
        "token":{},
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
                    "y": 300,
                    "fill": "#5baf04",
                    "font": "28px FuturaPT-Heavy",
                    "text": "You won",
                    "anchorX": .5
                },
                "fsValue1": {
                    "x": 640,
                    "y": 350,
                    "fill": "#5baf04",
                    "font": "28px FuturaPT-Heavy",
                    "text": "5",
                    "anchorX": .5
                },
                "fsWLabel1": {
                    "x": 640,
                    "y": 400,
                    "fill": "#5baf04",
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
                    "y": 250,
                    "fill": "#5baf04",
                    "font": "28px FuturaPT-Book",
                    "text":"",
                    "anchorX": .5
                },
                "frWLabel": {
                    "x": 640,
                    "y": 300,
                    "fill": "#5baf04",
                    "font": "28px FuturaPT-Book",
                    "text":"",
                    "align":"center",
                    "anchorX": .5
                },
                "frValue1": {
                    "x": 640,
                    "y": 340,
                    "fill": "#5baf04",
                    "font": "28px FuturaPT-Book",
                    "text": "5",
                    "anchorX": .5
                },
                "frWLabel1": {
                    "x": 640,
                    "y": 370,
                    "fill": "#5baf04",
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
            "minScale": 60,
            "maxScale": 90,
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
                    "y": 395,
                    "bmpFont": "bmpFont",
                    "size": "100",
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
            "graphAsset": {
                "bgPreview": {
                    "name": "bgPreview",
                    "x": 0,
                    "y": 0
                },
                "logoPreview": {
                    "name": "logo",
                    "anchorX": .5,
                    "x": 640,
                    "y": 0
                }
            },
            "slide": {
                "x": 640,
                "y": 140,
                "buttonBaseX":-75,
                "buttonBaseY":455,
                "time":4000,
                "slides": {
                    "0": {
                        "x": 0,
                        "y": 0,
                        "visible": true,
                        "graphAsset": {
                            "bgPreview": {
                                "name": "slide_6",
                                "anchorX": .5,
                                "x": 0,
                                "y": 90
                            }
                        },
                        "texts": {
                            "txtPrev0": {
                                "x": 0,
                                "y": 0,
                                "fill": "#ffe600",
                                "font": "24px Futura PT, Arial",
                                "text": "Wilds in normal game",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev1": {
                                "x": 0,
                                "y": 30,
                                "fill": "#ff9700",
                                "font": "20px Futura PT, Arial",
                                "text": "Multiple flower Wilds grows everywhere on the reels",
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
                                "fill": "#ffe600",
                                "font": "24px Futura PT, Arial",
                                "text": "Scatter",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev1": {
                                "x": 0,
                                "y": 30,
                                "fill": "#ff9700",
                                "font": "20px Futura PT, Arial",
                                "text": "When a flower Wild appears on top of a turtle it turns it into a scatter",
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
                                "fill": "#ffe600",
                                "font": "24px Futura PT, Arial",
                                "text": "Joining symbols",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev1": {
                                "x": 0,
                                "y": 30,
                                "fill": "#ff9700",
                                "font": "20px Futura PT, Arial",
                                "text": "Join a turtle with 2 fishing hooks...",
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
                                "name": "slide_3",
                                "anchorX": .5,
                                "x": 0,
                                "y": 90
                            }
                        },
                        "texts": {
                            "txtPrev0": {
                                "x": 0,
                                "y": 0,
                                "fill": "#ffe600",
                                "font": "24px Futura PT, Arial",
                                "text": "Joining symbols1",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev1": {
                                "x": 0,
                                "y": 30,
                                "fill": "#ff9700",
                                "font": "20px Futura PT, Arial",
                                "text": "...to get an instant Bonus prize",
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
                                "fill": "#ffe600",
                                "font": "24px Futura PT, Arial",
                                "text": "Joining symbols2",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev1": {
                                "x": 0,
                                "y": 30,
                                "fill": "#ff9700",
                                "font": "20px Futura PT, Arial",
                                "text": "Join the Luau symbol and 2 Hukuleles...",
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
                                "y": 90
                            }
                        },
                        "texts": {
                            "txtPrev0": {
                                "x": 0,
                                "y": 0,
                                "fill": "#ffe600",
                                "font": "24px Futura PT, Arial",
                                "text": "Joining symbols3",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev1": {
                                "x": 0,
                                "y": 30,
                                "fill": "#ff9700",
                                "font": "20px Futura PT, Arial",
                                "text": "...to get inside Free Spins with expanding wilds...",
                                "anchorX": .5,
                                "align": "center"
                            }
                        }
                    },
                    "6": {
                        "x": 0,
                        "y": 0,
                        "visible": false,
                        "graphAsset": {
                            "bgPreview": {
                                "name": "slide_4",
                                "anchorX": .5,
                                "x": 0,
                                "y": 90
                            }
                        },
                        "texts": {
                            "txtPrev0": {
                                "x": 0,
                                "y": 0,
                                "fill": "#ffe600",
                                "font": "24px Futura PT, Arial",
                                "text": "Joining symbols4",
                                "anchorX": .5,
                                "align": "center"
                            },
                            "txtPrev1": {
                                "x": 0,
                                "y": 30,
                                "fill": "#ff9700",
                                "font": "20px Futura PT, Arial",
                                "text": "...and a token collection feature",
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
                    "y": 300,
                    "fill": "#5baf04",
                    "font": "22px FuturaPT-Book",
                    "text": ".wqdwe",
                    "anchorX": .5
                },
                "msg2": {
                    "x": 640,
                    "y": 350,
                    "fill": "#5baf04",
                    "font": "20px FuturaPT-Book",
                    "text": ".ewfwefewf",
                    "anchorX": .5
                }
            },
            "buttons": {
                "yes": {
                    "name": "yesButton",
                    "x": 500,
                    "y": 575,
                    "evt": "doOk"
                },
                "myAccount": {
                    "name": "container-btn",
                    "x": 650,
                    "y": 575,
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
                    "y": 575,
                    "evt": "doKo"
                },
                "ok": {
                    "name": "container-btn",
                    "x": 640,
                    "anchorX": .5,
                    "y": 575,
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
            "selectorY":270,
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
                    "scaleX":1.37,
                    "scaleY":1.2
                }
            },
            "texts": {
                "msgFR1": {
                    "x": 640,
                    "y": 250,
                    "fill": "#5baf04",
                    "font": "22px FuturaPT-Book",
                    "text": ".wqdwe",
                    "anchorX": .5
                },
                "msgFR2": {
                    "x": 640,
                    "y": 280,
                    "fill": "#5baf04",
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
                            "font": "20px  FuturaPT-Heavy",
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
                            "font": "20px  FuturaPT-Heavy",
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
                            "font": "20px  FuturaPT-Heavy",
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
    "slotEngine":"WaikikiEngine",
    "engineNumbers":15,
    "log":true,
    "canSwipe":false,
    "comment_preview":"enable feature preview screen",
    "preview":true,
    "previewTout":50000,
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
    "lineType": "AllLineWinningsWaikiki",
    "lineFrames":31,
    "lineFrames":19,
    "comment_lineWinAmtType":"lines/coinWinning class",
    "lineWinAmtType":"NormalLineWinAmount",
    "numReels": 5,
    "numIcons": 3,
    "numIconsOnTop": 1,
    "numIconsOnBottom":1,
    "simbolsReflection":[8],
    "fsSpecialIcons":[4,5,7],
    "icons": [25, 25, 25, 25, 25 ],
    "_spinResult":[[9,2,1,10,8],[9,2,1,10,8],[9,2,1,10,8],[9,2,1,10,8],[9,2,1,4,5]],
    "spinWithAlpha": .6,
    "spinConfig":{
        "es":{
            "stopEnabled":false,
            "reelSecondMovementTime":0.5,
            "reelLoopInterval":.18,
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
    "stopTurboReel":true,
    "numIcon": 8,
    "loadTout": 30,
    "credits": "5000",
    "bet": "0.50",
    "animDelayAfterWild":100,
    "freeRounds":"normal",
    "freeSpins":"WaiFreeSpins",
    "_fsIcon": 1,
    "winHLScale":1.35,
    "fsSpinDelay":750,
    "minFsSmbs":3,
    "scatterIcon": 6,
    "scatterType": "SubstScatter",
    "_twinReelsFeature":"normal",
    "wildReelRollbackSpinDelay": 500,
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

    "bg" : "waiKiki/img/paytable/pt-base-complete.png",

    "closeBtn": {

        "ypos": "120",
        "xpos": "1020"

    },

    "pagination" : {

        "ypos" : "600",
        "xpos" : "412",
        "checked" : "#fff",
        "unchecked" : "#000000"

    },

    "helpPath" : gameParams.pathCDN + 'ironDog/help/desktop/waiKiki/help_' + gameParams.lang+".json",

    "fullscreen": true,

    "buttons" : [

        {
            "id" : "left",
            "ypos" : "550",
            "xpos" : "190",
            "bg_up" : "waiKiki/img/paytable/forward-btn-up.png",
            "bg_over" : "waiKiki/img/paytable/forward-btn-over.png",
            "bg_down" : "waiKiki/img/paytable/forward-btn-down.png",
            "direction" : -1
        },

        {
            "id" : "right",
            "ypos" : "550",
            "xpos" : "990",
            "bg_up" : "waiKiki/img/paytable/forward-btn-up.png",
            "bg_over" : "waiKiki/img/paytable/forward-btn-over.png",
            "bg_down" : "waiKiki/img/paytable/forward-btn-down.png",
            "direction" : 1
        }

    ],

    "pages" : [

        {

            "gameguide" : true,
            "title" : "Wai Kiki Game Rules",
            "title_xpos" : "520",
            "title_ypos" : "130",
            "xpos" : "200",
            "ypos" : "185",
            "height" : "331",
            "width" : "830",
            "fill": "#fff",
            "font" : "FuturaPT-Book, Arial, sans-serif",
            "rtp": [
                "96.0",
                "96.0",
                "96.0"
            ]

        },
        {

            "symbols" : [

                {
                    "id" : "symbol_00",
                    "bg" : "waiKiki/img/symbol-00.png",
                    "xpos": "235",
                    "ypos": "200",
                    "height": "176px",
                    "width": "176px",
                    "text": {
                        "value": 0,
                        "xpos": "60",
                        "ypos": "190",
                        "width": "109",
                        "left_fill": "#8af84b",
                        "right_fill": "#60b7f1",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_01",
                    "bg" : "waiKiki/img/symbol-01.png",
                    "xpos": "446",
                    "ypos": "200",
                    "height": "176px",
                    "width": "176px",
                    "text": {
                        "value": 1,
                        "xpos": "60",
                        "ypos": "190",
                        "width": "109",
                        "left_fill": "#8af84b",
                        "right_fill": "#60b7f1",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_02",
                    "bg" : "waiKiki/img/symbol-02.png",
                    "xpos": "657",
                    "ypos": "200",
                    "height": "176px",
                    "width": "176px",
                    "text": {
                        "value": 2,
                        "xpos": "60",
                        "ypos": "190",
                        "width": "109",
                        "left_fill": "#8af84b",
                        "right_fill": "#60b7f1",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_03",
                    "bg" : "waiKiki/img/symbol-03.png",
                    "xpos": "868",
                    "ypos": "200",
                    "height": "176px",
                    "width": "176px",
                    "text": {
                        "value": 3,
                        "xpos": "50",
                        "ypos": "190",
                        "width": "109",
                        "left_fill": "#8af84b",
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
                    "xpos" : "390",
                    "ypos" : "540",
                    "width" : "500",
                    "fill" : "#fff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols" : [

                {
                    "id" : "symbol_04",
                    "bg" : "waiKiki/img/symbol-04.png",
                    "xpos": "235",
                    "ypos": "200",
                    "height": "176px",
                    "width": "176px",
                    "text": {
                        "value": 4,
                        "xpos": "60",
                        "ypos": "190",
                        "width": "109",
                        "left_fill": "#8af84b",
                        "right_fill": "#60b7f1",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_05",
                    "bg" : "waiKiki/img/symbol-05.png",
                    "xpos": "446",
                    "ypos": "200",
                    "height": "176px",
                    "width": "176px",
                    "text": {
                        "value": 5,
                        "xpos": "60",
                        "ypos": "190",
                        "width": "109",
                        "left_fill": "#8af84b",
                        "right_fill": "#60b7f1",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_06",
                    "bg" : "waiKiki/img/symbol-06.png",
                    "xpos": "657",
                    "ypos": "200",
                    "height": "176px",
                    "width": "176px",
                    "text": {
                        "value": 6,
                        "xpos": "60",
                        "ypos": "190",
                        "width": "109",
                        "left_fill": "#8af84b",
                        "right_fill": "#60b7f1",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_07",
                    "bg" : "waiKiki/img/symbol-07.png",
                    "xpos": "868",
                    "ypos": "200",
                    "height": "176px",
                    "width": "176px",
                    "text": {
                        "value": 7,
                        "xpos": "50",
                        "ypos": "190",
                        "width": "109",
                        "left_fill": "#8af84b",
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
                    "xpos" : "390",
                    "ypos" : "540",
                    "width" : "500",
                    "fill" : "#fff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols" : [

                {
                    "id" : "symbol_08",
                    "bg" : "waiKiki/img/symbol-08.png",
                    "xpos": "780",
                    "ypos": "150",
                    "height": "176px",
                    "width": "176px",
                    "text": {
                        "value": 8,
                        "xpos": "45",
                        "ypos": "190",
                        "width": "109",
                        "left_fill": "#8af84b",
                        "right_fill": "#60b7f1",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "symbol_08",
                    "bg" : "waiKiki/img/symbol-08.png",
                    "xpos": "320",
                    "ypos": "150",
                    "height": "176px",
                    "width": "176px",
                    "flip": true,
                    "text": {
                        "value": 8,
                        "xpos": "75",
                        "ypos": "190",
                        "width": "109",
                        "left_fill": "#8af84b",
                        "right_fill": "#60b7f1",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                }

            ],

            "text": [
                {
                    "value" : "First 2 reels Hukuleles. Facing left",
                    "xpos" : "178",
                    "ypos" : "440",
                    "width" : "500",
                    "fill": "#fff",
                    "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "18px",
                    "align" : "center"
                },
                {
                    "value" : "Reels 3,4,5 Hukuleles. Facing right",
                    "xpos" : "619",
                    "ypos" : "440",
                    "width" : "500",
                    "fill": "#fff",
                    "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "18px",
                    "align" : "center"
                },
                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "540",
                    "width" : "500",
                    "fill" : "#fff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols" : [

                {
                    "id" : "symbol_09",
                    "bg" : "waiKiki/img/symbol-09.png",
                    "xpos": "527",
                    "ypos": "200",
                    "height": "176px",
                    "width": "225px",
                    "text": {
                        "value": 9,
                        "xpos": "60",
                        "ypos": "190",
                        "width": "109",
                        "left_fill": "#8af84b",
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
                        "The wild appears in any position of the reels after they stop.",
                        "They complete and substitute all the icons except for Luau.",
                        "More than 1 wild can appear at the same time."
                    ],
                    "xpos": "265",
                    "ypos": "400",
                    "width": "750",
                    "fill": "#a1ff80",
                    "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "18px",
                    "align": "center",
                    "spacing": "10"
                },
                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "540",
                    "width" : "500",
                    "fill" : "#fff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols" : [

                {
                    "id" : "symbol_06",
                    "bg" : "waiKiki/img/symbol-06.png",
                    "xpos": "302",
                    "ypos": "200",
                    "height": "176px",
                    "width": "176px",
                },

                {
                    "id" : "plus-symbol",
                    "bg" : "waiKiki/img/paytable/plus-symbol.png",
                    "xpos": "488",
                    "ypos": "261",
                    "height": "54px",
                    "width": "54px"
                },

                {
                    "id" : "hybiscus",
                    "bg" : "waiKiki/img/symbol-09.png",
                    "xpos": "528",
                    "ypos": "200",
                    "height": "176px",
                    "width": "225px",
                },

                {
                    "id" : "equals-symbol",
                    "bg" : "waiKiki/img/paytable/equals-symbol.png",
                    "xpos": "738",
                    "ypos": "261",
                    "height": "54px",
                    "width": "54px"
                },

                {
                    "id" : "scatter",
                    "bg" : "waiKiki/img/paytable/scatter.png",
                    "xpos": "802",
                    "ypos": "200",
                    "height": "176px",
                    "width": "176px",
                }

            ],

            "text": [
                {
                    "value": [
                        "When a Wild flower lands on top of a turtle in the center of the screen",
                        "it turns the turtle into a scatter",
                        "and awards 80 Coins."
                    ],
                    "xpos": "265",
                    "ypos": "400",
                    "width": "750",
                    "fill": "#a1ff80",
                    "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "18px",
                    "align": "center",
                    "spacing": "10"
                },
                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "540",
                    "width" : "500",
                    "fill" : "#fff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols" : [

                {
                    "id" : "bonus-expanded",
                    "bg" : "waiKiki/img/paytable/bonus-expanded.png",
                    "xpos": "471",
                    "ypos": "130",
                    "height": "127px",
                    "width": "338px"
                },

                {
                    "id" : "symbol_07",
                    "bg" : "waiKiki/img/symbol-07.png",
                    "xpos": "302",
                    "ypos": "255",
                    "height": "176px",
                    "width": "176px",
                },

                {
                    "id" : "plus-symbol",
                    "bg" : "waiKiki/img/paytable/plus-symbol.png",
                    "xpos": "488",
                    "ypos": "316",
                    "height": "54px",
                    "width": "54px"
                },

                {
                    "id" : "symbol_06",
                    "bg" : "waiKiki/img/symbol-06.png",
                    "xpos": "552",
                    "ypos": "255",
                    "height": "176px",
                    "width": "176px",
                },

                {
                    "id" : "plus-symbol",
                    "bg" : "waiKiki/img/paytable/plus-symbol.png",
                    "xpos": "738",
                    "ypos": "316",
                    "height": "54px",
                    "width": "54px"
                },

                {
                    "id" : "symbol_07",
                    "bg" : "waiKiki/img/symbol-07.png",
                    "xpos": "802",
                    "ypos": "255",
                    "height": "176px",
                    "width": "176px"
                }

            ],

            "text": [
                {
                    "value": [
                        "When a turtle in the center of the screen",
                        "is surrunded by a fishing hook on the left and one one the right",
                        "an instant Shark Fishing Bonus is awarded."
                    ],
                    "xpos": "265",
                    "ypos": "420",
                    "width": "750",
                    "fill": "#a1ff80",
                    "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "18px",
                    "align": "center",
                    "spacing": "10"
                },

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "540",
                    "width" : "500",
                    "fill" : "#fff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols" : [

                {
                    "id" : "freespins-expanded",
                    "bg" : "waiKiki/img/paytable/freespins-expanded.png",
                    "xpos": "471",
                    "ypos": "130",
                    "height": "123px",
                    "width": "338px"
                },

                {
                    "id" : "symbol_08",
                    "bg" : "waiKiki/img/symbol-08.png",
                    "xpos": "302",
                    "ypos": "255",
                    "height": "176px",
                    "width": "176px",
                    "flip": true
                },

                {
                    "id" : "plus-symbol",
                    "bg" : "waiKiki/img/paytable/plus-symbol.png",
                    "xpos": "488",
                    "ypos": "316",
                    "height": "54px",
                    "width": "54px"
                },

                {
                    "id" : "symbol_11",
                    "bg" : "waiKiki/img/symbol-11.png",
                    "xpos": "552",
                    "ypos": "255",
                    "height": "176px",
                    "width": "176px",
                },

                {
                    "id" : "plus-symbol",
                    "bg" : "waiKiki/img/paytable/plus-symbol.png",
                    "xpos": "738",
                    "ypos": "316",
                    "height": "54px",
                    "width": "54px"
                },

                {
                    "id" : "symbol_08",
                    "bg" : "waiKiki/img/symbol-08.png",
                    "xpos": "802",
                    "ypos": "255",
                    "height": "176px",
                    "width": "176px"

                }

            ],

            "text": [
                {
                    "value": [
                        "When the Luau symbol is in the center of the screen",
                        "is surrunded by a Hukulele on the left and one one the right",
                        "21 Free Spins are awarded."
                    ],
                    "xpos": "265",
                    "ypos": "420",
                    "width": "750",
                    "fill": "#a1ff80",
                    "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "18px",
                    "align": "center",
                    "spacing": "10"
                },

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "540",
                    "width" : "500",
                    "fill" : "#fff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols" : [

                {
                    "id" : "symbol_04",
                    "bg" : "waiKiki/img/symbol-04.png",
                    "xpos": "223",
                    "ypos": "200",
                    "height": "176px",
                    "width": "176px",
                },

                {
                    "id" : "equals-symbol",
                    "bg" : "waiKiki/img/paytable/equals-symbol.png",
                    "xpos": "399",
                    "ypos": "261",
                    "height": "54px",
                    "width": "54px"
                },

                {
                    "id" : "symbol_04-night",
                    "bg" : "waiKiki/img/symbol-04-night.png",
                    "xpos": "453",
                    "ypos": "200",
                    "height": "176px",
                    "width": "176px",
                },

                {
                    "id" : "symbol_07",
                    "bg" : "waiKiki/img/symbol-07.png",
                    "xpos": "652",
                    "ypos": "200",
                    "height": "176px",
                    "width": "176px",
                },

                {
                    "id" : "equals-symbol",
                    "bg" : "waiKiki/img/paytable/equals-symbol.png",
                    "xpos": "828",
                    "ypos": "261",
                    "height": "54px",
                    "width": "54px"
                },

                {
                    "id" : "symbol_07-night",
                    "bg" : "waiKiki/img/symbol-07-night.png",
                    "xpos": "882",
                    "ypos": "200",
                    "height": "176px",
                    "width": "176px",
                },

            ],

            "text": [
                {
                    "value": [
                        "During Free Spins Surf and Fishing hook turn into night mode.",
                        "The payout vaules for those symbols don't change.",
                    ],
                    "xpos": "265",
                    "ypos": "400",
                    "width": "750",
                    "fill": "#a1ff80",
                    "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "18px",
                    "align": "center",
                    "spacing": "10"
                },
                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "540",
                    "width" : "500",
                    "fill" : "#fff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols" : [

                {
                    "id" : "hybiscus-red",
                    "bg" : "waiKiki/img/paytable/hybiscus-red.png",
                    "xpos": "346",
                    "ypos": "180",
                    "height": "176px",
                    "width": "176px",
                    "text": {
                        "value": 9,
                        "xpos": "60",
                        "ypos": "190",
                        "width": "109",
                        "left_fill": "#8af84b",
                        "right_fill": "#60b7f1",
                        "font": "FuturaPT-Heavy, Arial, sans-serif",
                        "size": "25px",
                        "align": "left"
                    }
                },

                {
                    "id" : "hybiscus-blue",
                    "bg" : "waiKiki/img/paytable/hybiscus-blue.png",
                    "xpos": "757",
                    "ypos": "180",
                    "height": "176px",
                    "width": "176px",
                    "text": {
                        "value": 9,
                        "xpos": "60",
                        "ypos": "190",
                        "width": "109",
                        "left_fill": "#8af84b",
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
                        "During Free Spins Pink and Blue Flower Wilds can appear in any position of the reels after they stop.",
                        "They can spread on the reels up to 5 additional position.",
                        "They complete and substitute all the icons.",
                        "More than 1 wild can appear at the same time."
                    ],
                    "xpos": "265",
                    "ypos": "360",
                    "width": "750",
                    "fill": "#a1ff80",
                    "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "18px",
                    "align": "center",
                    "spacing": "10"
                },
                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "540",
                    "width" : "500",
                    "fill" : "#fff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "symbols" : [
                {
                    "id" : "symbol_05",
                    "bg" : "waiKiki/img/symbol-05.png",
                    "xpos": "252",
                    "ypos": "130",
                    "height": "176px",
                    "width": "176px",
                },

                {
                    "id" : "plus-symbol",
                    "bg" : "waiKiki/img/paytable/plus-symbol.png",
                    "xpos": "420",
                    "ypos": "190",
                    "height": "54px",
                    "width": "54px"
                },
                {
                    "id" : "symbol_05-night",
                    "bg" : "waiKiki/img/symbol-05-night.png",
                    "xpos": "480",
                    "ypos": "130",
                    "height": "176px",
                    "width": "176px"
                },

                {
                    "id" : "tokens-text",
                    "bg" : "waiKiki/img/paytable/tokens-text.png",
                    "xpos": "728",
                    "ypos": "155",
                    "height": "227px",
                    "width": "176px"
                }

            ],

            "text": [
                {
                    "value": [
                        "During Free Spins the Token symbol replace Cocktail symbol with the same payouts.",
                        "Each token on the reels is collected inside the side Tiki paying at the end of Free Spins according to the table.",
                    ],
                    "xpos": "265",
                    "ypos": "460",
                    "width": "750",
                    "fill": "#a1ff80",
                    "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "18px",
                    "align": "center",
                    "spacing": "10"
                },
                {
                    "value": [
                        "10-14 tokens: 50 Coins",
                        "15-19 tokens: 125 Coins",
                        "20-24 tokens: 250 Coins",
                        "25-29 tokens: 500 Coins",
                        "30-34 tokens: 1250 Coins",
                        "more than 35 tokens: 5000 Coins"
                    ],
                    "xpos": "105",
                    "ypos": "290",
                    "width": "750",
                    "fill": "#a1ff80",
                    "font": "FuturaPT-Heavy, Arial, sans-serif",
                    "size": "18px",
                    "align": "center",
                    "spacing": "10"
                },
                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "540",
                    "width" : "500",
                    "fill" : "#fff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "lines": [1, 15],
            "ypos": "185",
            "font" : "FuturaPT-Book, Arial, sans-serif",
            "text_colour": "#FFF",
            "checked_colour": "#8af84b",
            "unchecked_colour": "#FFF",

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "540",
                    "width" : "500",
                    "fill" : "#fff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        },

        {

            "lines": [16, 25],
            "ypos": "225",
            "font" : "FuturaPT-Book, Arial, sans-serif",
            "text_colour": "#FFF",
            "checked_colour": "#8af84b",
            "unchecked_colour": "#FFF",

            "text": [

                {
                    "value" : "You win by matching symbols on win lines. All symbols must be matched on consecutive reels from left to right. Only the highest win on each line will be paid. Malfunction voids all pays and plays. See game rules for more details.",
                    "xpos" : "390",
                    "ypos" : "540",
                    "width" : "500",
                    "fill" : "#fff",
                    "font" : "FuturaPT-Book, Arial, sans-serif",
                    "size" : "12px",
                    "align" : "center"
                }

            ]

        }

    ]

};
