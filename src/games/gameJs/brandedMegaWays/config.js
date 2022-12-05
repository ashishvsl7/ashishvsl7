// frameworkAssets : This is initialize common game assets, which are used for all games. Below assets are common and generic for all games. It Developer want to add an any assets in the game for generic then he/she can use.
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
//frameworkSettings : For framework settings
var frameworkSettings = {
    "buttons":{ // All game buttons define in this object
        "spinButton":{ // Spin Button
            "id":"spinButton", // Spin Button Id
            "bg": "gui/generic/img/desktop/png/cp-btn-spin-up.png", // Spin Button Background at normal state
            "bgDisabled": "gui/generic/img/desktop/png/cp-btn-spin-disabled.png", // Spin Button Background at disabled state
            "bgFill": "none" // Background fill
        },
        "stopButton":{ // Stop Button
            "id":"stopButton", // Stop Button Id
            "bg": "gui/generic/img/desktop/png/cp-btn-stop-up.png", // Stop Button Background at normal state
            "bgDisabled": "gui/generic/img/desktop/png/cp-btn-stop-disabled.png" // Stop button background at disabled state
        },
        "betControl":{ // Bet control : In the bet control button have a text, hence we have added texts properties
            "id":"betOptions", // Bet control button id
            "bg": "gui/generic/img/desktop/png/cp-btn-bet-up.png", // bet control button background at normal state
            "bgDisabled": "gui/generic/img/desktop/png/cp-btn-bet-disabled.png", // bet control button background at disabled state
            "texts": { // bet control text properties. like text styling
                "betAmount": {  // bet amount text, total bet display in this button
                    "fill": "#ffffff", // fill color : text color of the bet amount
                    "font": "15px Helvetica, Arial, sans-serif", // font properties of bet control button
                    "text": "", // text of bet : which is dynamically change
                    "align":"left" // alignment of the text
                }
            }
        },
        "helpButton":{ // help button
            "id":"helpButton", // help button id
            "bg": "gui/generic/img/desktop/png/cp-btn-paytable-up.png", // help button background at normal state
            "bgDisabled": "gui/generic/img/desktop/png/cp-btn-paytable-disabled.png" // help button background at disabled state
        },
        "autoButton":{ // autoplay button
            "id":"autoPlay", //autoplay button id
            "bg": "gui/generic/img/desktop/png/cp-btn-autospin-up.png", // autoplay button background at normal state
            "bgDisabled": "gui/generic/img/desktop/png/cp-btn-autospin-disabled.png", // autoplay button background at disabled state
            "start": "gui/generic/img/desktop/png/cp-btn-autospin-select.png", // autoplay start background
            "stop":"gui/generic/img/desktop/png/cp-btn-autospin-stop.png", // autoplay stop background
            "texts": { // autplay button text
                "auto_amount": { // autoplay properties
                    "fill": "#ffffff", // text colour of autoplay button
                    "font": "15px Helvetica, Arial, sans-serif", // font style properties of autoplay text
                    "text": "", // autoplay text
                    "align":"left" // autoplay text alignment
                }
            }
        }
    }
}

// loaderAssets : loader assets properties: images, audios, animations, json and other properties
var loaderAssets={
    "assets": {
        "winWayOb": "brandedMegaWays/img/default/loader/btg-megaways.png"
    },
    "loaderMc": {
        "staticLoaderLogoClient": { // client logo properties
            "clients":["redQueen","Betfred"], // client name & game name
            "name":"loader/logo-loader.png", // loader image on loading screen
            "path": "brandedMegaWays/img/",  // image path : where we
            "w": 360, // loader image width
            "h": 360 // loader image height
        },
        "ironDogLogo": { // iron dog studio logo properties
            "sprite": "gui/generic/img/ironDogLogo.png", // animation sprite image
            "json": "gui/generic/img/ironDogLogo.json", // animation sprite json
            "w": 360, // image width
            "h": 360 // image height
        },
        "progressBar": { // progress bar : showing progress of assets
            "sprite": "gui/generic/img/status-bar.png", // image sprite of progress bar
            "json": "gui/generic/img/status-bar.json", // json of progress bar image
            "w": 360, // width of progress bar image
            "h": 360 // height of progress bar  image
        },
        "graphAssetLicence": { // licence properties
            "licence": { // licence key
                "name": "winWayOb", // name of image of client: like BTG
                "x": 650, // position X of licence image
                "y": 650,  // position Y of licence image
                "anchorX": .5, // anchor X of licence image : this is set for scaling
                "anchorY": .5, // anchor Y of licence image : this is set for scaling
                "scaleX":1, // scale X of licence image : we can change the scale x as per client requirement
                "scaleY":1 // scale Y of licence image : we can change the scale y as per client requirement
            }
        },
        "textsLicence": { // text properties of licence provider name
            "lice": { // licence provider text key
                "x": 640, // licence provider text position X
                "y": 630, // licence provider text position Y
                "fill": "#ffffff", // licence provider text colour
                "font": "20px Arial", // licence provider text styling
                "text": "UNDER LICENCE FROM", // licence provider text
                "align":"center", // licence provider text alignment
                "anchorX": .5 // licence provider text anchor X: this is for center the text
            }
        }
    },
    "sounds":{ // sounds loading
        "loaderSound": { // this sound is for loading screen
            "name": "gui/generic/LoaderAudio.mp3", // loading screen sound file absoulate path
            "volume": .3 // loading screen sound fadeout level
        }
    },
    "loader": { // loader properties
        "visible":true, // loader visibility properties like : true and false
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

// Bitmap font :  Bitmap font have two properties : png sprite and .xml files
// bitmapFonts : all bitmap fonts should be include in the variable, if you want to add more bitmap font. you have to add new key and bitmap font details
var bitmapFonts={
    "bmpFont":{ // bitmap font name
        "sprite": "fonts/fontBranded.png", // bitmap font sprite
        "font": "fonts/fontBranded.xml" // font : xml file path
    },
    "bmpFontSmall":{
        "sprite": "fonts/fontBranded.png",
        "font": "fonts/fontBranded.xml"
    },
    "multiBmpFont":{
        "sprite": "fonts/multiplierBranded.png",
        "font": "fonts/multiplierBranded.xml"
    }
}

// extScripts : web font : which is excutable.
var extScripts={
    "webfont": "15px FuturaPT-Heavy",
    "webfont1": "15px FuturaPT-Book",
    "webfont2": "15px YesevaOne"
}

// gameAssets : game assets properties like : images(png/jpg), sprites, static images
var gameAssets = {
    "assets": { // assets :  key and image absolute path
        "icon0": "brandedMegaWays/img/default/symbol-00.png",
        "icon1": "brandedMegaWays/img/default/symbol-01.png",
        "icon2": "brandedMegaWays/img/default/symbol-02.png",
        "icon3": "brandedMegaWays/img/default/symbol-03.png",
        "icon4": "brandedMegaWays/img/default/symbol-04.png",
        "icon5": "brandedMegaWays/img/default/symbol-05.png",
        "icon6": "brandedMegaWays/img/default/symbol-06.png",
        "icon7": "brandedMegaWays/img/default/symbol-07.png",
        "icon8": "brandedMegaWays/img/default/symbol-08.png",
        "icon9": "brandedMegaWays/img/default/symbol-09.png",
        "icon7GH": "brandedMegaWays/img/default/paytable/symbol-07.png",
        "icon8GH": "brandedMegaWays/img/default/paytable/symbol-08.png",
        "icon9GH": "brandedMegaWays/img/default/paytable/symbol-09.png",
        "icon10": "brandedMegaWays/img/default/symbol-10.png",
        "icon12": "brandedMegaWays/img/default/symbol-11.png",
        "icon18": "brandedMegaWays/img/default/empty.png",
        "none": "brandedMegaWays/img/default/transparent.png",

        "smbFrameBg_2": "brandedMegaWays/img/default/back-frame-06.png",
        "smbFrameBg_3": "brandedMegaWays/img/default/back-frame-05.png",
        "smbFrameBg_4": "brandedMegaWays/img/default/back-frame-04.png",
        "smbFrameBg_5": "brandedMegaWays/img/default/back-frame-03.png",
        "smbFrameBg_6": "brandedMegaWays/img/default/back-frame-02.png",
        "smbFrameBg_7": "brandedMegaWays/img/default/back-frame-01.png",

        "smbFrame7_2": "brandedMegaWays/img/default/green/g-frame-06.png",
        "smbFrame7_3": "brandedMegaWays/img/default/green/g-frame-05.png",
        "smbFrame7_4": "brandedMegaWays/img/default/green/g-frame-04.png",
        "smbFrame7_5": "brandedMegaWays/img/default/green/g-frame-03.png",
        "smbFrame7_6": "brandedMegaWays/img/default/green/g-frame-02.png",
        "smbFrame7_7": "brandedMegaWays/img/default/green/g-frame-01.png",

        "smbFrame8_2": "brandedMegaWays/img/default/red/r-frame-06.png",
        "smbFrame8_3": "brandedMegaWays/img/default/red/r-frame-05.png",
        "smbFrame8_4": "brandedMegaWays/img/default/red/r-frame-04.png",
        "smbFrame8_5": "brandedMegaWays/img/default/red/r-frame-03.png",
        "smbFrame8_6": "brandedMegaWays/img/default/red/r-frame-02.png",
        "smbFrame8_7": "brandedMegaWays/img/default/red/r-frame-01.png",

        "smbFrame9_2": "brandedMegaWays/img/default/blue/b-frame-06.png",
        "smbFrame9_3": "brandedMegaWays/img/default/blue/b-frame-05.png",
        "smbFrame9_4": "brandedMegaWays/img/default/blue/b-frame-04.png",
        "smbFrame9_5": "brandedMegaWays/img/default/blue/b-frame-03.png",
        "smbFrame9_6": "brandedMegaWays/img/default/blue/b-frame-02.png",
        "smbFrame9_7": "brandedMegaWays/img/default/blue/b-frame-01.png",

        "bicon0": "brandedMegaWays/img/default/b-symbol-00.png",
        "bicon1": "brandedMegaWays/img/default/b-symbol-01.png",
        "bicon2": "brandedMegaWays/img/default/b-symbol-02.png",
        "bicon3": "brandedMegaWays/img/default/b-symbol-03.png",
        "bicon4": "brandedMegaWays/img/default/b-symbol-04.png",
        "bicon5": "brandedMegaWays/img/default/b-symbol-05.png",
        "bicon6": "brandedMegaWays/img/default/b-symbol-06.png",
        "bicon7": "brandedMegaWays/img/default/b-symbol-07.png",
        "bicon8": "brandedMegaWays/img/default/b-symbol-08.png",
        "bicon9": "brandedMegaWays/img/default/b-symbol-09.png",
        "bicon10": "brandedMegaWays/img/default/b-symbol-10.png",
        "bicon12": "brandedMegaWays/img/default/b-symbol-11.png",
        "anchorBgFs": "brandedMegaWays/img/default/transparent.png",
        "anchorShadFs": "brandedMegaWays/img/default/transparent.png",
        "bottomBar": "gui/message-bar.png",
        "bgPanel": "brandedMegaWays/img/default/pop-up.png",
        "bgPanelFs": "brandedMegaWays/img/default/pop-up.png",
        "bgPanelGame": "brandedMegaWays/img/default/pop-up.png",
        "bgTransition": "brandedMegaWays/img/default/transparent.png",
        "freeSpins":"brandedMegaWays/img/default/free-spins-header.png",
        "bigWin":"brandedMegaWays/img/default/big_win.png",
        "superWin":"brandedMegaWays/img/default/epic_win.png",
        "megaWin":"brandedMegaWays/img/default/ultra_win.png",
        "buttonBg":"gui/generic/img/desktop/png/cp-info-bar.png",
        "volOnButton": "gui/btnVolOn.png",
        "volOffButton": "gui/btnVolOff.png",
        "featureBg":"brandedMegaWays/img/default/transparent.png",
        "featureGlow":"brandedMegaWays/img/default/transparent.png",
        "featurePanel":"brandedMegaWays/img/default/buyFeature/buy-feature-pop-up.png",
        "winGlow":"brandedMegaWays/img/default/transparent.png",
        "candle":"brandedMegaWays/img/default/transparent.png",
        "bgAlpha":"brandedMegaWays/img/default/alpha.png",
        "freeSpinPanel": "brandedMegaWays/img/default/free-spins.png"
    },
    "localizedAssets":{ // localization assets details
    },
    "clientAssets":{ // client details: you can find in JIRA ticket
        "conf": { // client configurations
            "7500":{ // client id : depend on game behaviours
                "1xBet":{ // client name and category of game
                    "name": "1xBet", // client name / game name
                    "Hub": ["14"] // hub : depend on market
                },
                "NovibetLadies": {
                    "name": "NoviLadies",
                    "Iforium":["279","282","1069"],
                    "Iforium/STAGE": ["279"] // client short key name
                },
                "BetssonCasinoEuro": {
                    "disableBuyIn":true,
                    "name": "casinoeuro",
                    "NYX": ["213","1426"],
                },
                "HeartBingo":{
                    "name": "Heart Bingo",
                    "GameIOM_GIB": ["226"]
                },
                "Paf": {
                    "name": "PAF",
                    "Quickfire": ["*"]
                },
                "AhtiGames":{
                    "name": "AhtiGames",
                    "Relax": ["4583","4584","4585","4586"],
                },
                "PariMatchUK": {
                    "name": "Parimatch",
                    "GameIOM_GIB": ["48"],
                },
            },
            "7501":{
                "AventoColumbus":{
                    "name": "CASINO COLUMBUS",
                    "Hub": ["232"],
                },
                "BetssonStarCasino": {
                    "name": "StarCasino",
                    "NYX": ["574"],
                },
                "Vbet": {
                    "name": "VBET",
                    "Hub": ["1","2","3","12", "32", "33","769", "797", "864", "865", "866", "867", "868", "869", "870"],
                },
                "NoAccount": {
                    "name": "NoAccountCasino",
                    "Quickfire": ["*"]
                },
                "DruckGluck":{
                    "name": "DrückGlück",
                    "Relax": ["4583","4584","4585","4586"],
                },
                "PariMatchUK": {
                    "name": "Parimatch",
                    "GameIOM_GIB": ["48"],
                },
            },
            "7502":{
                "AventoDrift":{
                    "name": "DRIFT CASINO",
                    "Hub": ["232"],
                },
                "Betsafe": {
                    "disableBuyIn":true,
                    "name": "betsafe",
                    "NYX": ["196","1467"],
                },
                "Manekichi":{
                    "name": "MANEKICHI",
                    "Quickfire": ["*"]
                },
                "LuckyNiki":{
                    "name": "LuckyNiki",
                    "Relax": ["4583","4584","4585","4586"],
                },
                "Skoll": {
                    "name": "SKOL CASINO",
                    "Hub": ["4783","118"],
                },
            },
            "7503":{
                "AventoAplay":{
                    "name": "APLAY Casino",
                    "Hub": ["232"],
                },
                "BetssonCasinoEuro": {
                    "name": "casinoeuro",
                    "NYX": ["213","1426"],
                },
                "MegaRush":{
                    "name": "MEGARUSH",
                    "Quickfire":["*"]
                },
                "MegaCasino":{
                    "name": "MegaCasino",
                    "Relax": ["4583","4584","4585","4586"],
                },
                "Captain": {
                    "name": "Captain Spins",
                    "whg":["629"]
                },
            },
            "7504":{
                "AventoSlotv":{
                    "name": "SLOT V",
                    "Hub": ["232","772"],
                },
                "BetssonStarCasino": {
                    "name": "StarCasino",
                    "NYX": ["574"],
                },
                "Twin":{
                    "name": "twin",
                    "Quickfire":["*"]
                },
                "Turbonino":{
                    "name": "Turbonino",
                    "Relax": ["4583","4584","4585","4586"]
                },
            },
            "7505":{
                "AventoFrank":{
                    "name": "FRANK CASINO",
                    "Hub": ["772","774","232"],
                },
                "Betsafe": {
                    "name": "betsafe",
                    "NYX": ["196","1171","1467"],
                },
                "Playojo": {
                    "name": "PlayOJO",
                    "Relax": ["4583","4584","4585","4586"],
                },
                "Coolbet":{
                    "name": "COOLBET",
                    "Quickfire":["*"]
                }
            },
            "7506":{
                "AventoMrbit":{
                    "name": "MR BIT",
                    "Hub": ["232"],
                },
                "Betsson": {
                    "name": "betsson",
                    "NYX": ["104","1081","1425"],
                },
                "SwiftCasino":{
                    "name": "Swift Casino",
                    "Relax": ["4583","4584","4585","4586"]
                },
                "CityCasino":{
                    "name": "SkyCity",
                    "Quickfire": ["*"]
                },
            },
            "7507":{
                "SlotsMagic":{
                    "name": "Slots Magic",
                    "Relax": ["4583","4584","4585","4586"]
                },
                "FruitKing":{
                    "name": "Fruit Kings",
                    "NYX": ["1193"],
                },
                "JoyCasino":{
                    "name": "Joycasino",
                    "Quickfire":["4969"]
                },
            },
            "7508":{
                "SpinGenie":{
                    "name": "Spin Genie",
                    "Relax": ["4583","4584","4585","4586"]
                },
                "Casino-X":{
                    "name": "Casino-X",
                    "Quickfire":["4900","3448"]
                },
            },
            "7509":{
                "MetalCasino":{
                    "name": "Metal Casino",
                    "Relax": ["4583","4584","4585","4586"]
                },
            },
            "7510":{
                "SkillONet":{
                    "name": "Skillonet",
                    "Relax": ["4583","4584","4585","4586"]
                },
                "Casimba":{
                    "name": "Casimba",
                    "whg": ["604", "97", "56"]
                },
            },
            "7511":{
                "Playuzu":{
                    "name": "playuzu",
                    "Relax": ["4583","4584","4585","4586"]
                },
                "DreamVegas":{
                    "name": "Dream Vegas",
                    "whg": ["605", "56", "103"]
                },
            },
            "7512":{
            },
            "7513":{
            },
            "7514":{
            },
            "7515":{
            },
            "7516":{
            },
            "7517":{
            },
            "7022": {
                "Rod25":{
                    "name": "Rod25",
                    "NYX": ["1547"]
                },
                "Stake7":{
                    "name": "Stake 7",
                    "theHubMalta": ["4893"]
                },
                "Cashimashi":{
                    "name": "Cashimashi",
                    "theHubMalta":["4840"]
                },
                "CasinoOlympic":{
                    "name": "Olympic Casino",
                    "NYX": ["732"] // client short name
                },
                "HappyLuke":{
                    "name": "Happy Luke",
                    "solid_gaming": ["750"]
                },
                "Profibul":{
                    "name": "Bull",
                    "theHubStandard":["55","216","56","58","59","61","63","64","820","819"],
                    "theHubMalta":["46","47","50","49"]
                },
                "BlueVegas":{
                    "name": "BlueVegas",
                    "theHub": ["4839"]
                },
                "Melbet":{
                    "name": "MELBET",
                    "theHub": ["200"]
                },
                "VegaDream":{
                    "name": "Vegadream",
                    "theHub": ["4850"]
                },
                "Sugar":{
                    "name": "Sugar",
                    "theHub": ["4849"]
                },
                "Loco":{
                    "name": "Loco",
                    "theHub": ["4844"]
                },
                "Rant":{
                    "name": "Rant",
                    "theHub": ["4846"]
                },
                "777": {
                    "name": "777.be",
                    "isoftbet":["902"]
                },
                "Velpa": {
                    "name": "Mount Gold Casino",
                    "theHub": ["780"]
                },
                "Lq": {
                    "name": "Loto-Québec",
                    "NYX": ["959","200975","100975","975"],
                },
                "NetBet": {
                    "name": "NetBet",
                    "isoftbet":["906","4514","4517","999","4522"]
                },
                "GoldenSlot":{
                    "name": "Golden Slot",
                    "Quickfire":["606"]
                },
                "MrGreen":{
                    "name": "MrGreen",
                    "NYX": ["113"],
                },
                "Meridian":{
                    "name": "meridianbet",
                    "Meridian": ["2"],
                },
                "KingJ":{
                    "name": "KingJCasino",
                    "NYX": ["268"],
                },
                "Goldbet":{
                    "name": "GoldBet",
                    "NYX": ["1367"],
                },
                "Hajper":{
                    "name": "Hajper",
                    "Relax": ["862","4756"]
                },
                "Stugen":{
                    "name": "CasinoStugan",
                    "Relax": ["4743"]
                },
                "SlotsMagic":{
                    "name": "Slots Magic",
                    "Relax": ["4583","4584","4585","4586"]
                },
                "PariMatch":{
                    "name": "Parimatch",
                    "theHub": ["899","1020"]
                },
                "Playzee":{
                    "name": "playzee",
                    "theHub": ["620"]
                },
                "10betRebrand":{
                    "name": "Kakekkorinrin",
                    "solid_gaming": ["783","10BETJAPAN"],
                },
                "BingoCams":{
                    "name": "Bingocams",
                    "NYX": ["1201","1293"],
                },
                "BuzzBingo":{
                    "name": "Buzz Bingo",
                    "Hub": ["925"],
                },
                "Casushi":{
                    "name": "Casushi",
                    "NYX": ["1193"],
                },
                "Comeon":{
                    "name": "Comeon",
                    "Relax": ["4739"]
                },
                "Digitain":{
                    "name": "TotoGaming",
                    "Hub": ["242"],
                },
                "GoldenPalace":{
                    "name": "GOLDENPALACE",
                    "NYX":["428"]
                },
                "Europa":{
                    "name": "EUROPA CASINO",
                    "Hub": ["637"],
                },
                "Manekichi":{
                    "name": "MANEKICHI",
                    "Quickfire": ["3448","30898"],
                },
                "MegaRush":{
                    "name": "MEGARUSH",
                    "Quickfire":["3458","31067"]
                },
                "Napoleon":{
                    "name": "NAPOLEON",
                    "NYX":["1345"]
                },
                "NitroCasino":{
                    "name": "NITRO CASINO",
                    "Hub": ["85","234"],
                },
                "Twin":{
                    "name": "twin",
                    "Quickfire":["2861","22426"]
                },
                "BGO": {
                    "name": "BGO",
                    "theHub": ["543","566","889", "890", "891", "892", "893"]
                },
                "Betaland": {
                    "name": "betaland",
                    "Hub": ["400"],
                },
                "Betfred": {
                    "name": "Betfred",
                    "NYX": ["982", "1292"],
                    "Hub": ["586"],
                    "hub": ["586"],
                },
                "BetShop": {
                    "name": "Betshop",
                    "theHub": ["20", "23"],
                    "theHubMalta":["20","23"],
                    "theHub_dev/STAGE": ["20", "23"]
                },
                "BetShopLadies": {
                    "name": "BetshopGirls",
                    "theHub": ["356"],
                    "theHubMalta":["356"],
                    "theHub_dev": ["576"]
                },
                "Betsson": {
                    "disableBuyIn":true,
                    "name": "betsson",
                    "NYX": ["104","1425"],
                },
                "BetVictor": {
                    "name": "BETVICTOR",
                    "GameIOM_GIB": ["48"],
                },
                "BetVictorAsia": {
                    "name": "BETVICTOR",
                    "GameIom": ["32", "590"],
                },
                "Caxino":{
                    "name": "Caxino",
                    "Quickfire": ["3578","1867","33050","27601"],
                },
                "CherryCasino": {
                    "name": "CherryCasino",
                    "Quickfire": ["1474","2545","4428"],
                },
                "Interwetten": {
                    "name": "Interwetten",
                    "isoftbet": ["102","853"]
                },
                "Nomini":{
                    "name": "nomini",
                    "Hub": ["180"]
                },
                "Novibet": {
                    "name": "Novibet",
                    "Iforium":["282", "686","1069"],
                    "Iforium/STAGE": ["556"],
                },
                "Paf": {
                    "name": "PAF",
                    "Quickfire": ["28714","3618","22111","28701"]
                },
                "PlanetWin": {
                    "name": "Planetwin365",
                    "theHub": ["341"],
                    "Hub-bespoke-dev/STAGE": ["341"],
                },
                "Rabona":{
                    "name": "RABONA",
                    "Hub": ["813"],
                },
                "RefuelCasino":{
                    "name": "REFUEL CASINO",
                    "Hub": ["230","4603"],
                },
                "RoyalPanda": {
                    "name": "Royal Panda",
                    "Hub": ["568","644"],
                    "NYX": ["1532","1396"],
                },
                "OldRoyalPanda": {
                    "name": "Royal Panda",
                },
                "redQueen": {
                    "name": "Red Queen",
                },
                "Skoll": {
                    "name": "SKOL CASINO",
                    "Hub": ["4783","118"],
                },
                "Sisal":{
                    "name": "Sisal",
                    "NYX":["431","1305","1457"]
                },
                "Sportpesa":{
                    "name": "xxx",
                },
                "SunBingo":{
                    "name": "The Sun",
                    "Hub":["886","887","888"]
                },
                "Wazamba":{
                    "name": "Wazamba",
                    "Hub": ["168"],
                }
            },
        },
        "graphAsset": { // graphic assets with the key
            "bgPreview":{ // background view : depend on features
                "name":"Intro-page.jpg", // background preview
                "path": "brandedMegaWays/img/", // background image absolute path
            },
            "bgPreview1":{
                "name":"page-01.png",
                "path": "brandedMegaWays/img/",
            },
            "bgPreview2":{
                "name":"page-02.png",
                "path": "brandedMegaWays/img/",
            },
            "bgPreview3":{
                "name":"page-03.png",
                "path": "brandedMegaWays/img/",
            },
            "logo":{ // game logo
                "name":"logo.png", // game logo image name
                "path": "brandedMegaWays/img/" // game logo image absolute path
            },
            "bg_r":{ // background path of right side image  (main game - base game)
                "name":"bg/base-right.jpg", // right background image name (main game - base game)
                "path": "brandedMegaWays/img/" // right background image absolute path (main game - base game)
            },
            "bg_l":{ // background path of left side image (main game - base game)
                "name":"bg/base-left.jpg",  // left background image name (main game - base game)
                "path": "brandedMegaWays/img/"  // left background image absolute path (main game - base game)
            },
            "bg_b": { // game bottom background (main game - base game)
                "name":"bg/base-bottom.jpg",  // game bottom background image file name (main game - base game)
                "path": "brandedMegaWays/img/" // game bottom background image file absolute path (main game - base game)
            },
            "bg_t": { // game top background (main game - base game)
                "name":"bg/base-top.jpg",  // game top background image file name (main game - base game)
                "path": "brandedMegaWays/img/"  // game top background image file absolute path (main game - base game)
            },
            "bg_m": { // game middle background (main game - base game)
                "name":"bg/base-main.jpg", // game middle background image file name (main game - base game)
                "path": "brandedMegaWays/img/" // game middle background image file absolute path (main game - base game)
            },

            "bg_r_FS": { // background path of right side image  (free game)
                "name":"bg/base-right_FS.jpg", // right background image name (free game)
                "path": "brandedMegaWays/img/"  // right background image absolute path (free game)
            },
            "bg_l_FS": { // background path of left side image (free game)
                "name":"bg/base-left_FS.jpg", // left background image name (free game)
                "path": "brandedMegaWays/img/" // left background image absolute path (free game)
            },
            "bg_b_FS": { // game bottom background (free game)
                "name":"bg/base-bottom_FS.jpg", // game bottom background image file name (free game)
                "path": "brandedMegaWays/img/" // game bottom background image file absolute path (free game)
            },
            "bg_t_FS": { // game top background (free game)
                "name":"bg/base-top_FS.jpg", // game top background image file name (free game)
                "path": "brandedMegaWays/img/" // game top background image file absolute path (free game)
            },
            "bg_m_FS": { // game middle background (free game)
                "name":"bg/base-main_FS.jpg", // game middle background image file name (free game)
                "path": "brandedMegaWays/img/" // game middle background image file absolute path (free game)
            },
            "anchorLogo": { // side features image properties
                "name":"side-feature/side-feature-branded.png", // side features image name
                "path": "brandedMegaWays/img/" // side features image absolute path
            },
            "anchorBg": {
                "name":"side-feature/side-feature-static.png",
                "path": "brandedMegaWays/img/",
            },
            "freeRoundsPanel": { // Free Round(Some client have Free Game)
                "name":"bg/base-top-free-rounds.jpg", // Free Round background image file name
                "path": "brandedMegaWays/img/" // Free Round background image file absolute path
            }

        },
        "animAssets": { // animation assets object
            "smbBg_2":{ // animation key name : If you want to play any animation, then use this key
                "name": "anim/tile-06", //
                "path": "brandedMegaWays/img/"
            },
            "smbBg_3":{
                "name": "anim/tile-05",
                "path": "brandedMegaWays/img/"
            },
            "smbBg_4":{
                "name": "anim/tile-04",
                "path": "brandedMegaWays/img/"
            },
            "smbBg_5":{
                "name": "anim/tile-03",
                "path": "brandedMegaWays/img/"
            },
            "smbBg_6":{
                "name": "anim/tile-02",
                "path": "brandedMegaWays/img/"
            },
            "smbBg_7":{
                "name": "anim/tile-01",
                "path": "brandedMegaWays/img/"
            },
            "anchorIn":{
                "name": "side-feature/side-feature",
                "path": "brandedMegaWays/img/"
            }
        },
        "buttonsSpriteSheet":{ // button sprite sheet : All buttons background image of game
            "buyFeature":{
                "json": "brandedMegaWays/img/default/buy-feature-btn.png",
                "sprite": "brandedMegaWays/img/default/buy-feature-btn.png",
                "w": 99,
                "h": 98
            }
        }
    },
    "buttonsSpriteSheet": { // Features button properties
        "container-btn": {
            "sprite": "brandedMegaWays/img/default/generic-game-btn.png",
            "json": "brandedMegaWays/img/default/generic-game-btn.png",
            "w": 185,
            "h": 74
        },
        "feature-Fn-btn": {
            "sprite": "brandedMegaWays/img/default/buyFeature/buy-fs-btn.png",
            "json": "brandedMegaWays/img/default/buyFeature/buy-fs-btn.png",
            "w": 185,
            "h": 74
        },
        "feature-Rn-btn": {
            "sprite": "brandedMegaWays/img/default/buyFeature/buy-reels-btn.png",
            "json": "brandedMegaWays/img/default/buyFeature/buy-reels-btn.png",
            "w": 185,
            "h": 74
        },
        "yesButton": {
            "sprite": "brandedMegaWays/img/default/yes-btn.png",
            "json": "brandedMegaWays/img/default/yes-btn.png",
            "w": 54,
            "h": 52
        },
        "noButton": {
            "sprite": "brandedMegaWays/img/default/no-btn.png",
            "json": "brandedMegaWays/img/default/no-btn.png",
            "w": 54,
            "h": 52
        },
        "check": {
            "sprite": "brandedMegaWays/img/default/radio-btns.png",
            "json": "brandedMegaWays/img/default/radio-btns.png",
            "w": 64,
            "h": 32
        },
        "genericBtn":{
            "sprite": "gui/generic/img/generic-game-btn.png",
            "json": "gui/generic/img/generic-game-btn.png",
            "w": 210,
            "h": 68
        },
        "buyFeature":{
            "json": "brandedMegaWays/img/default/buy-feature-btn.png",
            "sprite": "brandedMegaWays/img/default/buy-feature-btn.png",
            "w": 99,
            "h": 98
        }

    },
    "animations": { // all animation properties
        "anim0": { // animation key name : want to play animation then use this key
            "json": "brandedMegaWays/img/default/anim/symbol-00.json",
            "sprite": "brandedMegaWays/img/default/anim/symbol-00.png"
        },
        "anim1": {
            "json": "brandedMegaWays/img/default/anim/symbol-01.json",
            "sprite": "brandedMegaWays/img/default/anim/symbol-01.png"
        },
        "anim2": {
            "json": "brandedMegaWays/img/default/anim/symbol-02.json",
            "sprite": "brandedMegaWays/img/default/anim/symbol-02.png"
        },
        "anim3": {
            "json": "brandedMegaWays/img/default/anim/symbol-03.json",
            "sprite": "brandedMegaWays/img/default/anim/symbol-03.png"
        },
        "anim4": {
            "json": "brandedMegaWays/img/default/anim/symbol-04.json",
            "sprite": "brandedMegaWays/img/default/anim/symbol-04.png"
        },
        "anim5": {
            "json": "brandedMegaWays/img/default/anim/symbol-05.json",
            "sprite": "brandedMegaWays/img/default/anim/symbol-05.png"
        },
        "anim6": {
            "json": "brandedMegaWays/img/default/anim/symbol-06.json",
            "sprite": "brandedMegaWays/img/default/anim/symbol-06.png"
        },
        "anim7": {
            "json": "brandedMegaWays/img/default/anim/symbol-07.json",
            "sprite": "brandedMegaWays/img/default/anim/symbol-07.png"
        },
        "anim8": {
            "json": "brandedMegaWays/img/default/anim/symbol-08.json",
            "sprite": "brandedMegaWays/img/default/anim/symbol-08.png"
        },
        "anim9": {
            "json": "brandedMegaWays/img/default/anim/symbol-09.json",
            "sprite": "brandedMegaWays/img/default/anim/symbol-09.png"
        },
        "anim10": {
            "json": "brandedMegaWays/img/default/anim/symbol-10.json",
            "sprite": "brandedMegaWays/img/default/anim/symbol-10.png"
        },
        "anim12": {
            "json": "brandedMegaWays/img/default/anim/symbol-11.json",
            "sprite": "brandedMegaWays/img/default/anim/symbol-11.png"
        },
        "part-1": {
            "json": "brandedMegaWays/img/default/anim/bronze-coin.json",
            "sprite": "brandedMegaWays/img/default/anim/bronze-coin.png"
        },
        "part-2": {
            "json": "brandedMegaWays/img/default/anim/silver-coin.json",
            "sprite": "brandedMegaWays/img/default/anim/silver-coin.png"
        },
        "part-3": {
            "json": "brandedMegaWays/img/default/anim/gold-coin.json",
            "sprite": "brandedMegaWays/img/default/anim/gold-coin.png"
        },
        "f-part-1": {
            "json": "brandedMegaWays/img/default/anim/bronze-coin-frwrd.json",
            "sprite": "brandedMegaWays/img/default/anim/bronze-coin-frwrd.png"
        },
        "f-part-2": {
            "json": "brandedMegaWays/img/default/anim/silver-coin-frwrd.json",
            "sprite": "brandedMegaWays/img/default/anim/silver-coin-frwrd.png"
        },
        "f-part-3": {
            "json": "brandedMegaWays/img/default/anim/gold-coin-frwrd.json",
            "sprite": "brandedMegaWays/img/default/anim/gold-coin-frwrd.png"
        },
        "lockSkull":{
            "json": "brandedMegaWays/img/default/anim/fakeAnim.json",
            "sprite": "brandedMegaWays/img/default/anim/fakeAnim.png"
        },
        "lockIn":{
            "json": "brandedMegaWays/img/default/anim/lockFeature/lock-feature.json",
            "sprite": "brandedMegaWays/img/default/anim/lockFeature/lock-feature.png"
        },
        "lockOut":{
            "json": "brandedMegaWays/img/default/anim/fakeAnim.json",
            "sprite": "brandedMegaWays/img/default/anim/fakeAnim.png"
        },
        "candleAnim":{
            "json": "brandedMegaWays/img/default/anim/fakeAnim.json",
            "sprite": "brandedMegaWays/img/default/anim/fakeAnim.png"
        },
        "cannonAnim":{
            "json": "brandedMegaWays/img/default/anim/fakeAnim.json",
            "sprite": "brandedMegaWays/img/default/anim/fakeAnim.png"
        },
        "winMap":{
            "json": "brandedMegaWays/img/default/anim/fakeAnim.json",
            "sprite": "brandedMegaWays/img/default/anim/fakeAnim.png"
        },
        "explosion":{
            "json": "brandedMegaWays/img/default/anim/fakeAnim.json",
            "sprite": "brandedMegaWays/img/default/anim/fakeAnim.png"
        }
    },
    "importantSounds": { // all sound properties
        "spinClick": { // spin button click sound
            "name": "brandedMegaWays/sounds/spinClick.mp3", // spin button click sound absolute path
            "volume": .1 // spin button click sound fadeout volume
        },
        "reelStop": { // reel stop sound
            "name": "brandedMegaWays/sounds/reelStop.mp3", // reel stop sound absolute path
            "volume":.8 // reel stop sound fade volume
        },
        "reelSound": { // reel spinning sound
            "name": "brandedMegaWays/sounds/reelSound.mp3", // reel spinning sound absolute path
            "volume":1 // reel spinning sound  fade volume
        },
        "coins": { // coins sound
            "name": "brandedMegaWays/sounds/coins.mp3", // coins sound absolute path
            "volume": 1 // coins sound fade volume
        },
        "iconPop": { // icon pop sound
            "name": "brandedMegaWays/sounds/tumbling.mp3", // icon pop sound absolute path
            "volume": 1.1 // icon pop sound fade volume
        },
        "winAmountFall": { // Win amount fall sound
            "name": "brandedMegaWays/sounds/winAmountFall.mp3", // Win amount fall sound absolute path
            "volume": .6 // Win amount fall sound fade volume
        }
    },
    "bgImportantSounds":{ // background image sound: ambient sound
        "bgSlot": {
            "name": "brandedMegaWays/sounds/bg_layer1.mp3", // background image sound absolute path
            "volume": .8, // background image sound fade volume
            "marker":true // background image sound repeat
        }

    },
    "sounds": { // sounds load with key and values
        "click": { // click sound of any button
            "name": "brandedMegaWays/sounds/click.mp3", // click sound absolute path
            "volume": .3 // click sound fade volume
        },
        "multiplier": { // win tickup sound is depend on x multiplier
            "name": "brandedMegaWays/sounds/multiplier.mp3", // mutliplier sound absolute path
            "volume": .6 // fade volume of sound
        },
        "multiplier_1": {
            "name": "brandedMegaWays/sounds/multiplier_layer1.mp3",
            "volume": 1
        },
        "multiplier_2": {
            "name": "brandedMegaWays/sounds/multiplier_layer2.mp3",
            "volume": 1
        },
        "multiplier_3": {
            "name": "brandedMegaWays/sounds/multiplier_layer3.mp3",
            "volume": 1
        },
        "lock": {
            "name": "brandedMegaWays/sounds/reelLock.mp3",
            "volume": 1
        },
        "anchor_activate1": {
            "name": "brandedMegaWays/sounds/anchor_activate1.mp3",
            "volume": 1
        },
        "anchor_activate2": {
            "name": "brandedMegaWays/sounds/anchor_activate2.mp3",
            "volume": 1
        },
        "anchor_activate3": {
            "name": "brandedMegaWays/sounds/anchor_activate3.mp3",
            "volume": 1
        },
        "anchor_activate4": {
            "name": "brandedMegaWays/sounds/anchor_activate4.mp3",
            "volume": 1
        },
        "additionalFs": {
            "name": "brandedMegaWays/sounds/anchor_activate4.mp3",
            "volume": 1
        },
        "anchor_deactivate": {
            "name": "brandedMegaWays/sounds/anchor_deactivate.mp3",
            "volume": 1
        },
        "smbWin_0": {
            "name": "brandedMegaWays/sounds/smbWin_0.mp3",
            "multiple":["smbWin_1","smbWin_2","smbWin_3","smbWin_4"],
            "volume": 1
        },
        "smbWin_5": {
            "name": "brandedMegaWays/sounds/smbWin_5.mp3",
            "volume": 1
        },

        "smbWin_6": {
            "name": "brandedMegaWays/sounds/smbWin_6.mp3",
            "volume": 1
        },
        "smbWin_7": {
            "name": "brandedMegaWays/sounds/smbWin_7.mp3",
            "volume": 1
        },
        "smbWin_8": {
            "name": "brandedMegaWays/sounds/smbWin_8.mp3",
            "volume": 1
        },
        "smbWin_9": {
            "name": "brandedMegaWays/sounds/smbWin_9.mp3",
            "volume": 1
        },
        "smbWin_10": {
            "name": "brandedMegaWays/sounds/smbWin_10.mp3",
            "volume": 1
        },
        "smbWin_12": {
            "name": "brandedMegaWays/sounds/smbWin_10.mp3",
            "volume": 1
        },
        "winBg_0": {
            "name": "brandedMegaWays/sounds/centralWin/win1.mp3",
            "volume": 0
        },
        "winBg_1": {
            "name": "brandedMegaWays/sounds/centralWin/win1.mp3",
            "volume":  0.4
        },
        "winBg_2": {
            "name": "brandedMegaWays/sounds/centralWin/win1.mp3",
            "volume":  0.4
        },
        "winBg_3": {
            "name": "brandedMegaWays/sounds/centralWin/win1.mp3",
            "volume":  0.5
        },
        "winBg_4": {
            "name": "brandedMegaWays/sounds/centralWin/win1.mp3",
            "volume":  0.6
        },
        "winBg_5": {
            "name": "brandedMegaWays/sounds/centralWin/win6.mp3",
            "volume":  0.7
        },
        "winBg_6": {
            "name": "brandedMegaWays/sounds/centralWin/bigWin_Full.mp3",
            "volume":  1
        },
        "winBg_7": {
            "name": "brandedMegaWays/sounds/centralWin/superBigWin_Full.mp3",
            "volume":  1
        },
        "winBg_8": {
            "name": "brandedMegaWays/sounds/centralWin/megaBigWin_Full.mp3",
            "volume": 1
        },
        "winBgS_6": {
            "name": "brandedMegaWays/sounds/centralWin/bigWin.mp3",
            "volume": 1
        },
        "winBgS_7": {
            "name": "brandedMegaWays/sounds/centralWin/superBigWin.mp3",
            "volume":  1
        },
        "winBgS_8": {
            "name": "brandedMegaWays/sounds/centralWin/megaBigWin.mp3",
            "volume": 1
        },
        "fsWon": {
            "name": "brandedMegaWays/sounds/introFs.mp3",
            "volume": 1
        },
        "incWin": {
            "name": "brandedMegaWays/sounds/counter.mp3",
            "volume": .6,
            "loop": true
        },
        "winPanel": {
            "name": "brandedMegaWays/sounds/winScreen.mp3",
            "volume": .8
        },
        "tumble_0": {
            "name": "brandedMegaWays/sounds/iconPop.mp3",
            "volume": 1.1,
            "multiple":["tumble_1","tumble_2","tumble_3","tumble_4","tumble_5","tumble_6"]
        },
        "wildx2": {
            "name": "brandedMegaWays/sounds/wildx2_land.mp3",
            "volume": 1
        }
    },
    "bgSounds": { // background sound
        "bgSlot1": {
            "name": "brandedMegaWays/sounds/bg_layer2.mp3",
            "volume": 0,
            "marker":true
        },
        "bgSlot2": {
            "name": "brandedMegaWays/sounds/bg_layer3.mp3",
            "volume": 0,
            "marker":true
        },
        "bgSlot3": {
            "name": "brandedMegaWays/sounds/bg_layer4.mp3",
            "volume": 0,
            "marker":true
        },
        "bgFs": {
            "name": "brandedMegaWays/sounds/bgLevels134.mp3",
            "volume": 1
        }
    }
}
// guiConfig : cash or credits
var guiConfig = {
    "credits": ["cash","credits"]
}

// displayManager : game UI settings
var displayManager = {
    "render":Phaser.AUTO,
    "groups": { // In the game: groups create a view and layers
        "bgContainer": { // background continer, where we can set all background images
            "visible":true,
            "graphAsset": {
            }
        },
        "bg": { // background setting : background image for base game/main game
            "visible":false,
            "graphAsset": {
                "bg": { // background image for right
                    "name": "bg_r", // _r : denote right
                    "x": 1024,
                    "y": 72
                },
                "bg1": { // background image for left
                    "name": "bg_l", // _l :  denote left
                    "x": 0,
                    "y": 72
                }
            }
        },
        "bgFS": { // background setting :  background image for free spin
            "visible":false,
            "graphAsset": {
                "bg": {  // background image for right : _FS -> Free Spin
                    "name": "bg_r_FS", // _r : denote right
                    "x": 1024,
                    "y": 72
                },
                "bg1": { // background image for left  : _FS -> Free Spin
                    "name": "bg_l_FS", // _l :  denote left
                    "x": 0,
                    "y": 72
                }
            }
        },
        "frameFS": { // Free Spin Reel Frame
            "visible":false,
            "graphAsset": {
                "bg4": {
                    "name": "bg_m_FS",  // Free Spin Reel Frame Image Name
                    "x": 256, // left position (X)
                    "y": 72 // top position (Y)
                }
            }
        },
        "frame": { // Base Game / Main Game Reel Frame
            "visible": false,
            "graphAsset": {
                "bg4": {
                    "name": "bg_m",  // Base Game / Main Game Reel Frame Image Name
                    "x": 256, // left position (X)
                    "y": 72 // top position (Y)
                }
            }
        },
        "reels": { // Reel setting
        },
        "wild": { // Wild Symbol Setting
        },
        "winGlow":{ // Wild Symbol Glow
        },
        "mask":{ // Reel Mask
            "visible":false,
            "graphAsset": {
                "bg2": { // Mask properties : x : position of left, y : position of top and height and width is depend on image setting
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
        "buyFeature":{ // Buy Features : setting and configuration of this features
            "buttons": { // Buy Features buttons setting & config
                "buyFeature": {
                    "visible":true,
                    "name": "buyFeature",
                    "x": 1108,
                    "y": 119,
                    "evt": "doBuyFeature",
                    "texts": {
                        "txt": {
                            "x": 0,
                            "y": 4,
                            "font": "11px  YesevaOne,Arial, Helvetica sans-serif",
                            "fill": "#ffffff",
                            "text": "Buy Free Spins",
                            "anchorX": .5
                        }
                    }
                }
            }
        },
        "maskFS":{ // Reel mask in Free Spin : *FS denote Free Spin
            "visible":false,
            "graphAsset": {
                "bg2": {  // masking configuration similir to basegame/ main game
                    "name": "bg_b_FS",
                    "x": 0,
                    "y": 632
                },
                "bg3": {
                    "name": "bg_t_FS",
                    "x": 0,
                    "y": 0
                }
            }
        },
        "freeSpinAccumulator": { // Free Spin Setting
            "visible": false,
            "maxFs": 12,
            "graphAsset": {
                "bg4":{
                    "visible": true,
                    "name": "anchorBg",
                    "x": 1107,
                    "y": 229,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "bg3":{
                    "visible": true,
                    "name": "anchorBg",
                    "x": 1107,
                    "y": 341,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "bg2":{
                    "visible": true,
                    "name": "anchorBg",
                    "x": 1107,
                    "y": 453,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "bg1":{
                    "visible": true,
                    "name": "anchorBg",
                    "x": 1107,
                    "y": 566,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "anchor4_In": {
                    "visible": false,
                    "name": "anchorIn",
                    "x": 1107,
                    "y": 229,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "anchor3_In": {
                    "visible": false,
                    "name": "anchorIn",
                    "x": 1107,
                    "y": 341,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "anchor2_In": {
                    "visible": false,
                    "name": "anchorIn",
                    "x": 1107,
                    "y": 453,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "anchor1_In": {
                    "visible": false,
                    "name": "anchorIn",
                    "x": 1107,
                    "y": 566,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "logo4":{
                    "visible": true,
                    "name": "anchorLogo",
                    "x": 1107,
                    "y": 229,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "logo3":{
                    "visible": true,
                    "name": "anchorLogo",
                    "x": 1107,
                    "y": 341,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "logo2":{
                    "visible": true,
                    "name": "anchorLogo",
                    "x": 1107,
                    "y": 453,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "logo1":{
                    "visible": true,
                    "name": "anchorLogo",
                    "x": 1107,
                    "y": 566,
                    "anchorX":.5,
                    "anchorY":.5
                },
            }
        },
        "freeSpinAccumulatorFs": { // Free Spin Settings
            "visible": false,
            "graphAsset": {
                "bg1":{
                    "visible": true,
                    "name": "anchorBg",
                    "x": 50,
                    "y": 280,
                    "scaleX":.45,
                    "scaleY":.45,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "bg2":{
                    "visible": true,
                    "name": "anchorBg",
                    "x": 101,
                    "y": 280,
                    "scaleX":.45,
                    "scaleY":.45,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "bg3":{
                    "visible": true,
                    "name": "anchorBg",
                    "x": 152,
                    "y": 280,
                    "scaleX":.45,
                    "scaleY":.45,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "bg4":{
                    "visible": true,
                    "name": "anchorBg",
                    "x": 203,
                    "y": 280,
                    "scaleX":.45,
                    "scaleY":.45,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "anchor1_In": {
                    "visible": false,
                    "name": "anchorIn",
                    "x": 50,
                    "y": 280,
                    "scaleX":.45,
                    "scaleY":.45,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "anchor2_In": {
                    "visible": false,
                    "name": "anchorIn",
                    "x": 101,
                    "y": 280,
                    "scaleY":.45,
                    "scaleX":.45,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "anchor3_In": {
                    "visible": false,
                    "name": "anchorIn",
                    "x": 152,
                    "y": 280,
                    "scaleY":.45,
                    "scaleX":.45,
                    "anchorX":.5,
                    "anchorY":.5
                },
                "anchor4_In": {
                    "visible": false,
                    "name": "anchorIn",
                    "x": 203,
                    "y": 280,
                    "scaleY":.45,
                    "scaleX":.45,
                    "anchorX":.5,
                    "anchorY":.5
                }
            },
            "texts":{
                "fsAdditionalT":{
                    "x": 120,
                    "y": 230,
                    "font": "20px YesevaOne,Arial, Helvetica sans-serif",
                    "fill": "#f5cd87",
                    "stroke": "#000000",
                    "stroke_tick": 2,
                    "text": "Additional Free Spins",
                    "align":"center",
                    "anchorX": .5
                },
            }
        },
        "buttonFg":{},
        "stickyWild": {},
        "scatter": {},
        "wins": {},
        "lines": {},
        "logo": {
            "visible":false,
            "graphAsset": {

            }
        },
        "freeRounds": { // Free Round(In some client we call Free Game and Free Spin: In Microgamming : we call free game, promotional games)
            "visible":false,
            "comment_movingLogo":"true when the panel substitute the logo",
            "movingLogo":true,
            "graphAsset": {
                "frPanel":{
                    "name": "freeRoundsPanel",
                    "x": 640,
                    "y": 35,
                    "anchorX":.5,
                    "anchorY":.5
                }
            },
            "_emitters": {
                "emitter": [{ "pos": {"x": 0, "y": 0}, "posVar": {"x": -125, "y": 0}, "speed": 66, "speedVar": 195.6372884671819, "angle": -168, "angleVar": -40, "life": 1, "lifeVar": 16.93294764034753, "radius": 14.205516971534776, "radiusVar": 5, "textureAdditive": true, "startScale": 3.023485367220084, "startScaleVar": 0, "endScale": 0.6224822814864879, "endScaleVar": 0, "startColor": [51, 103.29411764705887, 178, 1], "startColorVar": [0, 0, 51, 0.1], "endColor": [0, 0, 0, 1], "endColorVar": [0, 0, 0, 0], "colorList": [], "gravity": {"x": 87, "y": -82}, "radialAccel": 264.76394582625653, "radialAccelVar": 0, "tangentialAccel": 149.16009355019446, "tangentialAccelVar": -197.65146327799158, "totalParticles": 169, "emissionRate": 463, "xEquation": "", "yEquation": "", "textureEnabled": true, "active": true, "duration": null, "id": "aaa", "aFactor": {"x": -43.1, "y": 0}, "xFactor": {"x": -0.4, "y": 0}, "border": {"top": 500, "left": 500, "bottom": 307, "right": 466.86171111486584}, "zIndex": 0}]
            },
            "texts": {
                "frLabel": {
                    "x": 390,
                    "y": 13,
                    "fill": "#dcffff",
                    "font": "15px Futura ,Arial",
                    "text": "Free Rounds:",
                    "anchorX":  0.5
                },
                "frValue": {
                    "x": 390,
                    "y": 23,
                    "fill": "#ffffff",
                    "font": "25px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                },
                "frTotWonLabel": {
                    "x": 900,
                    "y": 13,
                    "fill": "#dcffff",
                    "font": "15px Futura ,Arial",
                    "text": "Total won:",
                    "anchorX":  0.5
                },
                "frTotWonValue": {
                    "x": 900,
                    "y": 23,
                    "fill": "#ffffff",
                    "font": "25px Futura ,Arial",
                    "text": "",
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
                    "x": 1150,
                    "y": 82,
                    "fill": "#ffffff",
                    "font": "22px YesevaOne,Arial, Helvetica sans-serif",
                    "text": "Free Spins",
                    "anchorX": 0.5
                },
                "fsValue": {
                    "x": 1150,
                    "y": 112,
                    "fill": "#ffffff",
                    "font": "25px Futura ,Arial",
                    "text": "",
                    "anchorX": 0.5
                },
                "fsmultT":{
                    "x": 1150,
                    "y": 191,
                    "font": "22px YesevaOne,Arial, Helvetica sans-serif",
                    "fill": "#ffffff",
                    "text": "Multiplier",
                    "align":"center",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsMultValue":{
                    "x": 1150,
                    "y": 205,
                    "bmpFont": "multiBmpFont",
                    "size": "70",
                    "text": "",
                    "anchorX": .5,
                    "anchorY": .5
                },
                "totWonLabel": {
                    "x": 1150,
                    "y": 272,
                    "fill": "#ffffff",
                    "font": "22px YesevaOne,Arial, Helvetica sans-serif",
                    "text": "Total won",
                    "anchorX":0.5
                },
                "totWonValue": {
                    "x": 1150,
                    "y": 300,
                    "fill": "#ffffff",
                    "font": "25px Futura ,Arial",
                    "text": "",
                    "align":"center",
                    "anchorX": 0.5
                },
                "fsAdditional":{
                    "x": 1150,
                    "y": 110,
                    "bmpFont": "multiBmpFont",
                    "size": "90",
                    "text": "",
                    "anchorX": .5,
                    "anchorY": .5
                }
            }
        },
        "lockReels":{
            "visible":false,
            "graphAsset": {
                "lockIn_0": {
                    "visible":false,
                    "name": "lockIn",
                    "x": 245,
                    "y": 60
                },

                "lockIn_1": {
                    "name": "lockIn",
                    "visible":false,
                    "x": 245+ 128,
                    "y": 60
                },

                "lockIn_2": {
                    "name": "lockIn",
                    "visible":false,
                    "x": 245+ 2*128,
                    "y": 60
                },

                "lockIn_3": {
                    "name": "lockIn",
                    "visible":false,
                    "x": 245+ 3*128,
                    "y": 60
                },

                "lockIn_4": {
                    "name": "lockIn",
                    "visible":false,
                    "x": 245+ 4*128,
                    "y": 60
                },

                "lockIn_5": {
                    "name": "lockIn",
                    "visible":false,
                    "x": 245+ 5*128,
                    "y": 60
                }
            },
            "texts":{
                "fsMultValueBig":{
                    "x": 640,
                    "y": 400,
                    "bmpFont": "multiBmpFont",
                    "size": "300",
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
        "winWays":{
            "visible": false,
            "graphAsset": {
                "winW":{
                    "name":"logo",
                    "x": 0,
                    "y": 0
                }
            },
            "texts":{
                "winWaysNum":{
                    "x": 138,
                    "y": 160,
                    "bmpFont": "bmpFont",
                    "size": "52",
                    "text": "1024",
                    "anchorX": 0.5
                }
            }
        },
        "fsWonPanel": { // Free Spin Won Panel
            "visible": false,
            "fakeButton": true,
            "eventBlock": true,
            "evt": "fireConfirmation",
            "duration": 500,
            "graphAsset": {
                "bgFsWon": {
                    "name": "bgPanel",
                    "x": 640,
                    "y": 310,
                    "anchorX": .5,
                    "anchorY": .5
                },
                "fsHeading": {
                    "name": "freeSpins",
                    "x": 640,
                    "y": 214,
                    "anchorX": .5,
                    "anchorY": .5
                }
            },
            "texts": {
                "fsWLabel": {
                    "x": 640,
                    "y": 270,
                    "fill": "#ffffff",
                    "font": "28px FuturaPT-Book",
                    "text": "You won",
                    "anchorX": .5
                },
                "fsValue1": {
                    "x": 640,
                    "y": 320,
                    "fill": "#ffffff",
                    "font": "28px FuturaPT-Book",
                    "text": "5",
                    "anchorX": .5
                },
                "fsWLabel1": {
                    "x": 640,
                    "y": 370,
                    "fill": "#ffffff",
                    "font": "28px FuturaPT-Book",
                    "text": "Free spins!",
                    "anchorX": .5
                }
            }

        },
        "frWonPanel": { // Free Round (Promotional Free Game)
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
                    "name": "bgPanel",
                    "x": 640,
                    "y": 340,
                    "anchorX": .5,
                    "anchorY": .5,
                    "scaleX":1.2,
                    "scaleY":1.2
                }
            },
            "texts": {
                "frWLabelTitol": {
                    "x": 640,
                    "y": 240,
                    "fill": "#ffffff",
                    "font": "14px FuturaPT-Book",
                    "text":"",
                    "anchorX": .5
                },
                "frWLabel": {
                    "x": 640,
                    "y": 260,
                    "fill": "#ffffff",
                    "font": "18px FuturaPT-Book",
                    "text":"",
                    "align":"center",
                    "anchorX": .5
                },
                "frValue1": {
                    "x": 640,
                    "y": 300,
                    "fill": "#ffffff",
                    "font": "24px FuturaPT-Book",
                    "text": "5",
                    "anchorX": .5
                },
                "frWLabel1": {
                    "x": 640,
                    "y": 330,
                    "fill": "#ffffff",
                    "font": "18px FuturaPT-Book",
                    "text": "",
                    "align":"center",
                    "anchorX": .5
                }
            }
        },
        "centralWin": { // Win Celebration settings
            "visible": false,
            "maxObjNum": 200,
            "minScale": 120,
            "maxScale": 170,
            "graphAsset": {
                "bgmsg": {
                    "name": "bgAlpha",
                    "x": 0,
                    "y": 0,
                    "alpha": .8
                },
                "group":{
                    "name":"centralFuntain"
                },
                "bigGlow": {
                    "name": "winGlow",
                    "x": 640,
                    "y": 332,
                    "yS": -300,
                    "yE": 332,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "candle": {
                    "name": "candle",
                    "x": 680,
                    "y": 322,
                    "xS": 680,
                    "xE": 880,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "candle1": {
                    "name": "candle",
                    "x": 600,
                    "y": 322,
                    "xS": 600,
                    "xE": 400,
                    "scaleX":-1,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "cannon": {
                    "name": "cannonAnim",
                    "x": 640,
                    "y": 465,
                    "xS": 640,
                    "xE": 940,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "cannon1": {
                    "name": "cannonAnim",
                    "x": 440,
                    "y": 465,
                    "xS": 440,
                    "xE": 340,
                    "scaleX":-1,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "candleA": {
                    "name": "candleAnim",
                    "x": 870,
                    "y": 302,
                    "yS": -300,
                    "yE": 332,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "candleA1": {
                    "name": "candleAnim",
                    "x": 410,
                    "y": 302,
                    "yS": -300,
                    "yE": 332,
                    "scaleX":-1,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "bigMap": {
                    "name": "winMap",
                    "x": 640,
                    "y": 332,
                    "yS": -300,
                    "yE": 332,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "bigWin": {
                    "name": "bigWin",
                    "x": 635,
                    "y": 322,
                    "yS": -300,
                    "yE": 332,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "sBigWin": {
                    "name": "superWin",
                    "x": 635,
                    "y": 322,
                    "yS": -300,
                    "yE": 332,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                },
                "mBigWin": {
                    "name": "megaWin",
                    "x": 635,
                    "y": 322,
                    "yS": -300,
                    "yE": 332,
                    "anchorX": .5,
                    "anchorY": .5,
                    "visible": false
                }
            },
            "buttons": {
                "skip": {
                    "name": "bgAlpha",
                    "x": 500,
                    "y": 577,
                    "alpha": 0,
                    "evt": "doOk"
                },
            }
        },
        "centralLineWin": { // Line Win Celebration Settings
            "visible": false,
            "texts": {
                "lineWin": {
                    "x": 640,
                    "y": 410,
                    "bmpFont": "bmpFont",
                    "size": "30",
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
            "tweenShow":true,
            "graphAsset": {
                "bgmsgPw": {
                    "name": "bgPreview",
                    "x": 0,
                    "y": 0
                },
                "bgPreview1": {
                    "name": "bgPreview1",
                    "x": 20,
                    "y": 20,
                    "texts": {
                        "pw1":{
                            "x": 195,
                            "y": 25,
                            "font": "60px YesevaOne,Arial, Helvetica sans-serif",
                            "fill": "#f5cd87",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "text": "Free Spins",
                            "anchorX": 0.5,
                        },
                        "pw2":{
                            "x": 195,
                            "y": 445,
                            "font": "22px YesevaOne,Arial, Helvetica sans-serif",
                            "fill": "#f5cd87",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align":"center",
                            "text": "Unlimited Win Multiplier\rUp to 14 Additional\rFree Spins",
                            "anchorX": 0.5,
                        },
                    }
                },
                "bgPreview2": {
                    "name": "bgPreview2",
                    "x": 435,
                    "y": 20,
                    "texts": {

                        "pw3":{
                            "x": 190,
                            "y": 465,
                            "font": "27px YesevaOne,Arial, Helvetica sans-serif",
                            "fill": "#f5cd87",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align":"center",
                            "text": "Every Win\rTriggers a Tumble",
                            "anchorX": 0.5,
                        }

                    }
                },
                "bgPreview3": {
                    "name": "bgPreview3",
                    "x": 850,
                    "y": 20,
                    "texts": {
                        "pw4":{
                            "x": 200,
                            "y": 80,
                            "font": "25px YesevaOne,Arial, Helvetica sans-serif",
                            "fill": "#f5cd87",
                            "stroke": "#000000",
                            "stroke_tick": 4,
                            "align":"center",
                            "text": "Reels Lock At 7\rDuring Free Spins",
                            "anchorX": 0.5,
                        },
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


        "msgBox": { // Player Message Box Setting
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
                    "name": "bgPanel",
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
                    "font": "22px FuturaPT-Book",
                    "text": "",
                    "anchorX": .5
                },
                "msg2": {
                    "x": 640,
                    "y": 354,
                    "fill": "#ffffff",
                    "font": "22px FuturaPT-Book",
                    "text": "",
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
        "msgBoxFR": { // Player Message Box Setting in Free Round(Promotional Free Game)
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
                    "scaleX":1.3,
                    "scaleY":1.3
                }
            },
            "texts": {
                "msgFR1": {
                    "x": 640,
                    "y": 230,
                    "fill": "#ffffff",
                    "font": "22px FuturaPT-Book",
                    "text": "",
                    "anchorX": .5
                },
                "msgFR2": {
                    "x": 640,
                    "y": 260,
                    "fill": "#ffffff",
                    "font": "20px FuturaPT-Book",
                    "text": "",
                    "anchorX": .5
                }
            },
            "buttons": {
                "yes": {
                    "name": "genericBtn",
                    "x": 500,
                    "y": 580,
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
                    "y": 580,
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
                    "y": 580,
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
        "msgBoxFeature": { // Free Round(Promotional Free Game) Information Dialog Box, like Accept, Cancel and Play Later Button and how many promotional free games are available
            "visible":false,
            "eventBlock":true,
            "selectorY":225,
            "selectorX":650,
            "textCol":"#ffffff",
            "graphAsset": {
                "bg": {
                    "name": "featureBg",
                    "x": 0,
                    "y": 0
                },
                "bgmsg": {
                    "name": "bgAlpha",
                    "x": 0,
                    "y": 0
                },
                "generic": {
                    "name": "featurePanel",
                    "x": 640,
                    "y": 310,
                    "anchorX": .5,
                    "anchorY": .5,
                    "scaleX":1.2,
                    "scaleY":1.2
                }
            },
            "texts": {
                "msgF1": {
                    "x": 640,
                    "y": 111,
                    "fill": "#ffffff",
                    "font": "24px FuturaPT-Book",
                    "text": "",
                    "align":"center",
                    "anchorX": .5
                },
                "msgF2": {
                    "x": 640,
                    "y": 145,
                    "fill": "#ffffff",
                    "font": "20px FuturaPT-Book",
                    "text": "",
                    "anchorX": .5
                },
                "msgF3": {
                    "x": 640,
                    "y": 169,
                    "fill": "#ffffff",
                    "font": "18px FuturaPT-Book",
                    "text": "",
                    "anchorX": .5
                },
                "msgF45": {
                    "x": 640,
                    "y": 198,
                    "fill": "#ffffff",
                    "font": "18px FuturaPT-Book",
                    "text": "",
                    "anchorX": .5
                },
                "msgF4": {
                    "x": 640,
                    "y": 241,
                    "fill": "#ffffff",
                    "font": "18px FuturaPT-Book",
                    "text": "Free spins number",
                    "anchorX": .5
                },
                "msgF5": {
                    "x": 640,
                    "y": 358,
                    "fill": "#ffffff",
                    "font": "18px FuturaPT-Book",
                    "text": "Locked reels number (reels locked at 7 symbols)",
                    "anchorX": .5
                },
                "priceF": {
                    "x": 640,
                    "y": 480,
                    "fill": "#ffffff",
                    "font": "20px FuturaPT-Book",
                    "text": "",
                    "anchorX": .5
                }
            },
            "buttons": { // Free Round (Promotional Free Game Buttons : Yes/No )
                "yes": {
                    "name": "genericBtn",
                    "x": 500,
                    "y": 630,
                    "evt": "doOk",
                    "texts": {
                        "noLabel": {
                            "x": 0,
                            "y": -13,
                            "fill": "#ffffff",
                            "font": "18px FuturaPT-Book",
                            "text": "OK",
                            "anchorX": .5
                        }
                    }
                },
                "no": {
                    "name": "genericBtn",
                    "x": 775,
                    "y": 630,
                    "evt": "doKo",
                    "texts": {
                        "noLabel": {
                            "x": 0,
                            "y": -13,
                            "fill": "#ffffff",
                            "font": "18px FuturaPT-Book",
                            "text": "NO",
                            "anchorX": .5
                        }
                    }
                },
                "ok": {
                    "name": "genericBtn",
                    "x": 640,
                    "anchorX": .5,
                    "y": 630,
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


// ReelConfig : About the reel configurations, like Which UI we have to use
var ReelConfig = {
    "newUI":true, // We have two UI, and its depend on two Library, 1. Phaser.js and 2 PIXI.js
    "licence":true, // This will be show on loading screen. It's show client logo and licence to client
    "slotEngine":"MegaEngine", // Set the slot engine type. Mega Slot game or normal Line/Ways Game
    "engineNumbers":0, // Engine no: depend on service
    "log":true,
    "canSwipe":false, // Swipe functionality and player can skip the information
    "fastPlayEnable":true, // Fast play mode. Like Turbo Mode
    "comment_preview":"enable feature preview screen",
    "preview":true,
    "previewTout":30000, // Splash Screen auto time out setting, 30 seconds, you can increase the time.
    "spinType": "MegaWayTumblingSpin", // Spin type
    "falling":false,
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
    "lineType": "MegaWayTumblingWinnings",
    "lineFrames":31,
    "lineFrames":19,
    "comment_lineWinAmtType":"lines/coinWinning class",
    "lineWinAmtType":"NormalLineWinAmount",
    "numReels": 6,
    "numIcons": 7 ,
    "numIconsOnTop": 1,
    "numIconsOnBottom":1,
    "icons": [25, 25, 25, 25, 25,25,25 ],
    "_spinResult":[[0,1,2,3,4],[5,6,7,8,9],[6,1,2,3,4],[9,1,2,3,4],[2,1,2,3,4]],
    "_spinResult":[[0,0,2,3],[11,5,7,8],[5,6,2,3],[2,9,2,3],[0,2,2,3]],
    "spinWithAlpha": .6,
    "spinConfig":{// spin configuration based on market. In Some market, reel spinning should be more then 3 seconds and 5 seconds
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
            "reelSecondMovementTime":0.32,
            "reelLoopInterval":.18,
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
    "freeSpins":"PirKinMwFreeSpins",
    "_fsIcon": 1,
    "fsSpinDelay":750,
    "minFsSmbs":3,
    "scatterIcon": 10,
    "scatterType": "SubstScatter",
    "_twinReelsFeature":"normal",
    "wildType": "VikingTumblingWildReel",
    "wildNum": [13],
    "wildReelOrigin":1,
    "wildReelAnim":3,
    "wildReelAnimOffset":-67.5,
    "wildShowFirstAnim":true,
    "animDelayAfterWild":2000,
    "wildDelay":0,
    "winTxtClasses": [1, 2, 5, 10, 20, 50, 100, 300, 500, 1000], // Win Celebration setting
    "smb_colors":[0xff33cc,0xcc33ff,0x0066ff,0x00ff99,0xffcc00,0xff33cc,0xcc33ff,0x0066ff,0x00ff99,0xffcc00,0xffcc00],
    "smbMinAnimTime":[.5,.5,.5,.5,.5,.5,.5,1.5,.5,.5],
    "muteDuringWins":true,
    "keepShowingAnimation":true,
    "additionalPreText":"",
    "additionalPostText":"",
    "reel": { // Reel position setting
        "deltaX_0": 254,
        "deltaX": 128,
        "deltaY_0": 632,
        "deltaY": 104
    },
    "icon": { // Symbol Setting
        "x": 0,
        "y": 0,
        "width": 132, // Width of Symbol
        "height": 132 // Height of Symbol
    },
    "winningcombinations": true,
    "ForceFeature":{
        "ch1":{
            "value":"114,152,39,14,23,125",
            "description":"Free Spins"
        },
        "ch2":{
            "value":"65,3,92,56,72,-4",
            "description":"Expanding Reel"
        },
        "ch3":{
            "value":"26,147,40,75,136,704",
            "description":"Sticky wild"
        },
        "ch4":{
            "value":"65,3,92,56,72,125",
            "description":"Expanding wild"
        }

    }
}

// lineConfig : Win Line Configurations
var lineConfig = {
    "win": {
    },
    "line": {
        "noCoinOnEachLine":20, // Celebration coins numbers
    }
}

// paytableAssets : Pay table settings : Our paytable is not loading from local. It's contains loading in two formation. 1. .html file and 2. .json file
var paytableAssets = {

    "pages": [ // Number of pages and paragraph setting

        //Game guide object
        {
            "gameguide": true,
            "title": "Branded MegaWays™ Game Rules",
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
                            "bg": "brandedMegaWays/img/default/symbol-00.png", //symbol image
                            "payout_values": true //Whether symbol has payout values

                        },

                        {

                            "id": "symbol_01",
                            "bg": "brandedMegaWays/img/default/symbol-01.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_02",
                            "bg": "brandedMegaWays/img/default/symbol-02.png",
                            "payout_values": true

                        }


                    ],

                    [

                        {

                            "id": "symbol_03",
                            "bg": "brandedMegaWays/img/default/symbol-03.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_04",
                            "bg": "brandedMegaWays/img/default/symbol-04.png",
                            "payout_values": true

                        }

                    ],

                    [
                        {

                            "id": "symbol_05",
                            "bg": "brandedMegaWays/img/default/symbol-05.png",
                            "payout_values": true

                        },

                        {

                            "id": "symbol_06",
                            "bg": "brandedMegaWays/img/default/symbol-06.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_07",
                            "bg": "brandedMegaWays/img/default/paytable/symbol-07.png",
                            "payout_values": true

                        }

                    ],

                    [

                        {
                            "id": "symbol_08",
                            "bg": "brandedMegaWays/img/default/paytable/symbol-08.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_09",
                            "bg": "brandedMegaWays/img/default/paytable/symbol-09.png",
                            "payout_values": true

                        },

                        {
                            "id": "symbol_10",
                            "bg": "brandedMegaWays/img/default/symbol-10.png",
                            "payout_values": false,
                            "text": [
                                "Wild",
                                "Wild can appear on reel 2,3,4,5,6 during regular and Free Spins",
                                "Wilds substitutes all the icons."
                            ]

                        }

                    ],
                    [

                        {
                            "id": "symbol_12",
                            "bg": "brandedMegaWays/img/default/symbol-11.png",
                            "payout_values": false,
                            "text": [
                                "X2 Wild",
                                "X2 Wild can appear on reel 2,3,4,5,6 during regular spins.",
                                "Up to 3 X2 Wilds can appear on the same spins.",
                                "When multiple x2 Wilds appears the hand multiplier is calculated multiplying them together, ie: 3 X2 wilds symbols on the reel = X8 multiplier."
                            ]
                        }
                    ],
                    [

                        {

                            "id" : "wildDesc",
                            "text": [
                                "X2 Wilds substitutes all the icons."
                            ]

                        }

                    ],
                    [

                        {
                            "id" : "tumble_screenshot",
                            "bg" : "brandedMegaWays/img/default/paytable/winways.jpg",
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
                            "bg" : "brandedMegaWays/img/default/paytable/fs.png",
                            "text": [
                                "Freespins are reached by having multiple successive tumbles (the image shows the counter at 4). A minimum of 4 tumbles is required to trigger 8 Free Spins.",
                                "Each extra successive win after 4 awards 2 extra Free Spins, up to a maximum of 14.",
                                "During the spin, reels with 7 symbols lock at that position for the entire Free Spins round, each locked reels increase the multiplier by 1.",
                                "During Free spins, reels can lock awarding 1 additional multiplier per reel.",
                                "Locked reels occurring on the last Free Spin also award 1 additional Free Spin. (can re-trigger)"
                            ],
                            "size": { //Optional field that sets image height & width in px

                                "height": "257",
                                "width":  "100"

                            }

                        }

                    ],


                    [

                        {

                            "id" : "FSSADDtart",
                            "bg" : "brandedMegaWays/img/default/paytable/fsAdd.png",
                            "text": [
                                "Additional Freespins are reached by having multiple successive tumbles (the image shows the counter at 4). A minimum of 4 tumbles is required to trigger additional 4 Free spins.",
                                "Each extra successive win after 4 awards 1 extra Free Spins, up to a maximum of 14."
                            ],
                            "size": { //Optional field that sets image height & width in px

                                "height": "90",
                                "width":  "240"

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

                    "bg": "brandedMegaWays/img/default/paytable/winways.jpg",
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
