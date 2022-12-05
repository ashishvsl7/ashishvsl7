/**
 * KiS Framework, Created by Tom on 10/05/2016.
 */
function Login(launchVars, regVars) {

    var currencyManager_ = new CurrencyManager(); //will retrieve the currency synbol from the cdn server
    var gameInfo_ = {};

    function initClass_(launchVars) {

        if (launchVars.fun_real === "real") {

            var paramString = "accountID=" + launchVars.accountID + "&gameID=" + launchVars.gameID + "&siteID=" + launchVars.site + "&installID=" + launchVars.installID;
            var page = launchVars.path + "/getAccountInfo.jsp?" + paramString;

            loginReal(page);
        } else {
            var page1 = launchVars.path + "/getGuestID.jsp";
            loginFun(page1);
        }

    }

    function loginReal(page) {

        $.post(page, {
            func: "getAccountInfo"
        }, function(data) {

            var errorCode = getParam(data, "error_code");

            if (errorCode == "0") {

                gameInfo_.accountID = getParam(data, "accountID");
                gameInfo_.customerID = getParam(data, "customerID");
                gameInfo_.username = getParam(data, "username");
                gameInfo_.currency = getParam(data, "iso_code");
                gameInfo_.exchangeRate = Number(getParam(data, "exchange_rate"));
                gameInfo_.balance = Number(getParam(data, "balance"));
                gameInfo_.playMode = 1;
                gameInfo_.sessionID = getParam(data, "sessionID");

                gameInfo_.minStakeMultiplier = Number(getParam(data, "minStakeMultiplier"));
                gameInfo_.maxStakeMultiplier = Number(getParam(data, "maxStakeMultiplier"));
                gameInfo_.maxLiabilityMultiplier = Number(getParam(data, "maxLiabilityMultiplier"));

                gameInfo_.maxStake *= gameInfo_.maxStakeMultiplier;
                gameInfo_.minStake *= gameInfo_.minStakeMultiplier;
                gameInfo_.maxPayout *= gameInfo_.maxLiabilityMultiplier;

                gameInfo_.freeRoundsAvailable = getParam(data, "freeroundsAvailable") === "true";

                console.log("FREE ROUNDS AVAILABLE: " + gameInfo_.freeRoundsAvailable);

                currencyManager_.getCurrencySymbol(gameInfo_.currency, launchVars.pathCDN);

                if (gameParams.clientName.toUpperCase().indexOf("RELAX")>=0){//relax ovverride jurisdiciton from getaccountinfo
                    if (getParam(data, "jurisdiction")!=""){
                        regVars.jurisdiction=getParam(data, "jurisdiction");
                    }
                }


                gameInfo = gameInfo_;

                if (regVars.jurisdiction.toUpperCase() === "IT" && (gameParams.clientName!="" && gameParams.clientName.indexOf("NYX")<0)) { //do .it stuff NO NYX

                    var aamsSession = getQueryString("AAMS_SESSION", data);
                    var aamsTicket = getQueryString("AAMS_TICKET", data);

                    var aamsLink = getQueryString("AAMS_LINK", data);
                    var respLink = getQueryString("RESPONSIBLE_LINK", data);

                    $(".resp__link").attr("href", respLink);
                    $(".aams__link").attr("href", aamsLink);

                    $("#aams_part_id").html(aamsTicket);
                    $("#aams_sess_id").html(aamsSession);

                    $("#aams_part_id_name").html(getQueryString("AAMS_TICKET_LABEL", data) + ": ");
                    $("#aams_sess_id_name").html(getQueryString("AAMS_SESSION_LABEL", data) + ": ");

                    var showSession = getQueryString("SHOW_AAMS_SESSION", data) === "true";
                    var showTicket = getQueryString("SHOW_AAMS_TICKET", data) === "true";

                    if (!showSession) {
                        $(".aams__ids li").eq(1).hide();
                    }

                    if (!showTicket) {
                        $(".aams__ids li").eq(0).hide();
                    }

                    var showAamsBar = !(getParam(data, 'hideAamsBar') === 'true');

                    if (showAamsBar) {
                        $(".aams__container").css("display", "flex");
                        if (gameParams.clientName!="" && gameParams.clientName.indexOf("NYX")>=0 && Math.abs(Number(gameParams.site))== 431){ //uselss now they chose to remove the bar on NYX but we never know...
                            $(".aams__logos_Sisal").show();
                            $(".aams__logos").hide();
                        }else{
                            $(".aams__logos").show();
                            $(".aams__logos_Sisal").hide();
                        }
                    }

                }

                communicationManager_ = new Communication(game);
                communicationManager_.sendServletRequest("setup");


            } else { //fatal error

                var desc = getParam(data, "error_description");
                if(!f1x2.GcmError(desc,errorCode) && f1x2.clientWrapperInit.use && !f1x2.clientWrapperInit.handler.showInGameErrors) {

                    //Display error message
                    showMessage_(
                        desc,
                        "fatal-error",
                        "Error Loading Account Info");
                }else if(!f1x2.GcmError(desc,errorCode) && f1x2.clientWrapperInit.use ){
                    showMessage_(
                        desc,
                        "fatal-error " + errorCode,
                        "Error Loading Account Info");
                }
            }


        }, "text")

            .fail(function() { //fatal error
                if(!f1x2.GcmError("Error Loading Account Info",-2)) {
                    //Display error message
                    showMessage_(
                        "We were unable to retrieve your account information",
                        "fatal-error",
                        "Error Loading Account Info"
                    );
                }
            });

    }

    function loginFun(page) {
        gameInfo_.accountID = "guest";
        gameInfo_.customerID = "guest";
        gameInfo_.username = "guest";
        gameInfo_.currency = "FUN";
        gameInfo_.exchangeRate = 1;
        gameInfo_.balance = (gameParams.clientName!="" && gameParams.clientName.indexOf("NYX")>=0)?1000:5000; //for LQ canada
        gameInfo_.playMode = -1;

        gameInfo_.minStakeMultiplier = 1;
        gameInfo_.maxStakeMultiplier = 1;
        gameInfo_.maxLiabilityMultiplier = 1;

        gameInfo_.maxStake *= gameInfo_.maxStakeMultiplier;
        gameInfo_.minStake *= gameInfo_.minStakeMultiplier;
        gameInfo_.maxPayout *= gameInfo_.maxLiabilityMultiplier;

        currencyManager_.getCurrencySymbol(gameInfo_.currency, launchVars.pathCDN);

        $.post(page, {
            func: "getFunInfo"
        }, function(data) {

            gameInfo_.accountID = getParam(data, "guestID"); //store the fun info
            gameInfo_.customerID = "guest"+gameInfo_.accountID;
            gameInfo = gameInfo_;

            communicationManager_ = new Communication(game);
            communicationManager_.sendServletRequest("setup");

        }, "text").fail(function() {
                if(!f1x2.GcmError("Error Loading Account Info",-2)) {
                    //Display error message
                    showMessage_("We were unable to retrieve your account information",
                        "fatal-error",
                        "Error Loading Account Info");
                }
            });

    }

    function getQueryString(field, url) {
        var href = url ? url : window.location.href;
        var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
        var string = reg.exec(href);
        return string ? string[1] : null;
    }

    function getParam(url, name) {
        name=name+"=";
        var firstSplit = url.split('&');
        var returnedString = "";

        for (i = 0; i < firstSplit.length; i++) {

            if (firstSplit[i].indexOf(name) != -1) {

                var a = firstSplit[i].split('=');

                logger("a: " + a.length);

                for (var j = 1; j < a.length; j++) { //start at 1 so we disregard before first = but include after

                    returnedString += a[j];
                    if (j < a.length - 1) {
                        returnedString += "=";
                    }
                }

            }

        }

        return returnedString;

    }


    function getCurrencySmb_() {

        logger("currencyManager_: " + currencyManager_ + " sym: " + currencyManager_.getSymbol());

        return currencyManager_.getSymbol();
    }

    function showMessage_(msg1,msg2,msg3){
        clientMessageSend("error",[-500,Translate.do("Error communicating with server")]);
        var message = new MessageScreen(
            msg1,
            msg2,
            msg3, [
                {
                    "action": function () {
                        message.destroy();
                        // client wrapper game-close event
                        f1x2.clientWrapperInit.send("game-close"),
                            // client wrapper should game navigate to the lobby url
                        f1x2.clientWrapperInit.doLobbyURLNavigate && window.location.replace(gameParams.lobbyurl)
                    },
                    label: "Lobby"
                }],
            false,
            true
        );
    }

    //return anything you want to make public here
    var login = {

        gameInfo: gameInfo_,
        getCurrencySmb: getCurrencySmb_

    };

    initClass_(launchVars);

    return login;

}
