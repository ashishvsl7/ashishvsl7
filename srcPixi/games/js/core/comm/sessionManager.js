(function() {

    window.addEventListener('unload', exitGame, false);

    function exitGame() {
        window.sendCustomEvent('f1x2gan', { 'detail': 'gameClosing' }); //GAN event dispatch
        // was causing problemss on isoftbet integration    f1x2.clientWrapperInit.send('game-close');

        if (gameInfo) {
            // var page = gameParams.path + "/closeSession.jsp?";
            // var params = "sessionID=" + gameInfo.username + "&gameID=" + gameParams.gameID + "&accountID=" + gameInfo.accountID + "&siteID=" + gameParams.site+ "&customerID=" + gameInfo.customerID;
            // var client = new XMLHttpRequest();
		    // client.open("POST", page+params, false); // third parameter indicates sync xhr
            // client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            // client.send(params);

            var page = gameParams.path + "/closeSession.jsp";    //was gameinfo.path since Feb 2022 when Adam asked to change it for isoftbet
            var params = "sessionID=" + gameInfo.username + "&gameID=" + gameInfo.gameID +"&accountID="+gameInfo.accountID +"&siteID="+gameInfo.site +"&customerID="+gameInfo.customerID;

            // GFI-63 use sendBeacon as Chrome blocks XMLHttpRequest
            if (!navigator.sendBeacon) {
                // beacon not supported fallback to original post
                var client = new XMLHttpRequest();
                client.open("POST", page, false); // third parameter indicates sync xhr
                client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                client.send("beacon=false&" + params);

            } else {
                navigator.sendBeacon(page + "?beacon=true&" + params);// changed for LQ on 18/12/2020 navigator.sendBeacon( page + "?beacon=true", params );
            }

        }
    }

    if (_checkStorage()=='true') {
        if (sessionStorage.getItem("clientName") === "ScomesseItalia") {

            setInterval(function () {
                var url = gameParams.path + "/KeepAlive?sessionID=" + gameInfo.username + "&customerID=" + gameInfo.customerID + "&username=" + gameInfo.username + "&siteID=" + gameParams.site;
                $.post(url, function (data) {
                    logger("KeepAlive");
                });

            }, 30000);
        } else {
            if (sessionStorage.getItem("keepAliveInterval") && sessionStorage.getItem("keepAliveURL")) {
                var keepAliveInterval = sessionStorage.getItem("keepAliveInterval");
                var keepAliveURL = sessionStorage.getItem("keepAliveURL");

                var doPing = keepAliveInterval !== '0' && keepAliveInterval !== null && !isNaN(keepAliveInterval) && keepAliveURL !== null && keepAliveURL !== "null" && keepAliveURL.length > 0;

                if (doPing) {
                    var interval = Number(keepAliveInterval) * 1000; //comes in secs
                    if (interval < 30) {
                        interval = Number(keepAliveInterval) * 60000; //comes in minutes
                    }

                    doKeepAlivePing(interval, keepAliveURL);
                }

            }

        }
    }else{
        var keepAliveInterval = getParameterByName("keepAliveInterval");
        var keepAliveURL = getParameterByName("keepAliveURL");
        var doPing = keepAliveInterval !== '0' && keepAliveInterval !== null && !isNaN(keepAliveInterval) && keepAliveURL !== null && keepAliveURL !== "null" && keepAliveURL.length > 0;
        if (doPing) {
            var interval = Number(keepAliveInterval) * 1000; //comes in secs
            if (interval < 30) {
                interval = Number(keepAliveInterval) * 60000; //comes in minutes
            }
            doKeepAlivePing(interval, keepAliveURL);
        }
    }

    function doKeepAlivePing(interval, page) {

        if (interval > 0 && doPing) {

            window.setTimeout(function() { //set the interval

                $.ajax({
                        type: 'GET',
                        url: page,
                        // cache: true,
                        dataType: "jsonp text xml",
                        // jsonp: false,
                        //jsonpCallback: "callbackName",
                    }).error(function(jqXHR, textStatus, errorThrown) {
                        console.error("keepalive error jqXHR: ", jqXHR);
                        console.error("keepalive error textStatus: ", textStatus);
                        console.error("keepalive error errorThrown: ", errorThrown);
                    })
                    .always(function() {
                        //always keep playing game anyway and wait for next message
                        doKeepAlivePing(interval, page);
                    });

            }, interval);

        }

    }

    function getParameterByName(name) { //get param sent to window
        var ret="";

        if (_checkStorage()=='true' && sessionStorage.getItem(name)) {
            ret =sessionStorage.getItem(name);
            if (name==="gameName") {
                ret= ret.replace(/%20/g, " ");
            }
            return ret;
        }

        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);

        ret= results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));

        if (name==="gameName") {
            ret= ret.replace(/%20/g, " ");
        }
        return ret;
    }


})();
