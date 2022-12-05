/**
 * KiS Framework, Created by Fabry on 26/04/2016.
 */
function Communication(gameRef) {
    var game_ = gameRef;
    var status_;
    var forceDemoID_=-1;
    var forceProgressive_=0;
    var forceUrlReplay_=false;
    var forceUrl_="";
    var forceBuyIn_=false;
    var forceGameIds_=[];
    var requestFailed_=false;
    var serverGIB_="https://1x2nyx-gib.com/f1x2games3//";

    function initClass_() {
        //init websocket communication with server
    }

    function sendNHReq_(obj) {

    }

    function sendBonusReq_(obj) {

    }

    function sendServleForceSpinReq_(mode, args,tumble) {
        try {
            console.log("send force spin");
            if (forceUrlReplay_==true && forceDemoID_>0){
                spin = true;
                setTimeout(processForceReplay_,200);
                return;
            }
            if (forceUrlReplay_==false && forceDemoID_>0){
                spin = true;
                setTimeout(processForceDemo_,200);
                return;
            }
            var page = gameParams.path + gameParams.slotEngine + "?mode=" + mode;

            if (ReelConfig.newComm==true) {
                if (document.getElementsByName("ch1")[0].checked != "") page +=  document.getElementsByName("ch1")[0].value;
                if (args != null ) {
                    if (document.getElementsByName("chForceEnable" )!=undefined && document.getElementsByName("chForceEnable" )[0].checked==true ) {
                        page += "&forceFeatures=1&reelContents=";
                        for (var i=0;i< ReelConfig.numReels;i++){
                            page +=  args[i].toString().replace(/r/g,"-1")+",";
                        }
                    }
                }
                if (document.getElementsByName("ch2")[0].checked) {
                    if (document.getElementsByName("seed")[0].value != "") page += "&seed=" + document.getElementsByName("seed")[0].value;//to test locked reels
                }else{
                    if (document.getElementsByName("seed")[0].value != "") page += "&forceReelHeights=" + document.getElementsByName("seed")[0].value;//to test locked reels
                }

                if (gameParams.gameOriginalID==7029){
                    if (document.getElementsByName("ch1")[0].checked) {
                        page += "&forceHarpID=1";
                        page += "&forceHarpValue=2";
                    }
                    if (document.getElementsByName("ch2")[0].checked) {
                        page += "&forceHarpID=1";
                        page += "&forceHarpValue=4";
                    }
                    if (document.getElementsByName("ch3")[0].checked) {
                        page += "&forceHarpID=1";
                        page += "&forceHarpValue=8";
                    }
                    if (document.getElementsByName("ch4")[0].checked) {
                        page += "&forceHarpID=2";//mult
                        page += "&forceHarpValue=5";
                    }
                    if (document.getElementsByName("ch5")[0].checked) {
                        page += "&forceHarpID=3";//stalk pos
                        page += "&forceHarpValue=2";
                    }
                    if (document.getElementsByName("ch6")[0].checked) {
                        page += "&forceHarpID=4";//respin
                        page += "&forceHarpValue=1";
                        document.getElementsByName("ch6")[0].checked=false;
                    }
                    if (document.getElementsByName("ch7")[0].checked) {
                        page += "&forceHarpID=5";//extra FS
                        page += "&forceHarpValue=2";
                    }
                    if (document.getElementsByName("ch8")[0].checked) {
                        page += "&forceHarpID=7";//Beans
                        page += "&forceHarpValue=1";
                    }
                }

            }else {

                if (args != null ) {
                    if (document.getElementsByName("chForceEnable" )!=undefined && document.getElementsByName("chForceEnable" )[0].checked==true ) {
                        page += "&manual=" + 1;
                        if (args[0] != null) page += "&row1=" + args[0];
                        if (args[1] != null) page += "&row2=" + args[1];
                        if (args[2] != null) page += "&row3=" + args[2];
                        if (args[3] != null) page += "&row4=" + args[3];
                        if (args[4] != null) page += "&row5=" + args[4];
                        if (args[5] != null) page += "&row6=" + args[5];
                        if (args[6] != null) page += "&row7=" + args[6];
                        if (args[args.length - 1] != null) page += "&egg=" + args[args.length - 1]; //side feature symbol
                    }
                }

                if (document.getElementsByName("seed")[0].value != "") page += "&forceReelHeights=" + document.getElementsByName("seed")[0].value;//to test locked reels
                //document.getElementsByName("seed")[0].value="";

                if (document.getElementsByName("ch1")[0].checked) {
                    page += "&forceHarpID=1";
                    page += "&forceHarpValue=2";
                }
                if (document.getElementsByName("ch2")[0].checked) {
                    page += "&forceHarpID=1";
                    page += "&forceHarpValue=4";
                }
                if (document.getElementsByName("ch3")[0].checked) {
                    page += "&forceHarpID=1";
                    page += "&forceHarpValue=8";
                }
                if (document.getElementsByName("ch4")[0].checked) {
                    page += "&forceHarpID=2";//mult
                    page += "&forceHarpValue=5";
                }
                if (document.getElementsByName("ch5")[0].checked) {
                    page += "&forceHarpID=3";//stalk pos
                    page += "&forceHarpValue=2";
                }
                if (document.getElementsByName("ch6")[0].checked) {
                    page += "&forceHarpID=4";//respin
                    page += "&forceHarpValue=1";
                }
                if (document.getElementsByName("ch7")[0].checked) {
                    page += "&forceHarpID=5";//extra FS
                    page += "&forceHarpValue=2";
                }
                if (document.getElementsByName("ch8")[0].checked) {
                    page += "&forceHarpID=7";//Beans
                    page += "&forceHarpValue=1";
                }
            }
            page += "&gameID=" + gameParams.gameID;
            page += "&accountID=" + gameInfo.accountID;
            page += "&customerID=" + gameInfo.customerID;
            page += "&username=" + gameInfo.username;
            page += "&currency=" + gameInfo.currency;
            page += "&site=" + gameParams.site;
            page += "&version=" + gameParams.version;
            page += "&ex_rate=" + gameInfo.exchangeRate;
            page += "&fun_real=" + gameInfo.playMode;
            page += "&conf=" + gameParams.confType;
            page += "&mobile=" + framework.isTouch();
            page += "&jurisdiction=" +loginVars.getRegParams().jurisdiction;
            page += "&gameType=" + "PREMIUMSLOTS";

            if (freeRoundsManager_.getIsInFr() == false) {
                page += "&isPromoRound=0";
                page += "&promoActivationID=0";
                page += "&promoCampaignID=0";
                page += "&promoType=0";
            } else {
                page += "&isPromoRound=1";
                page += "&promoActivationID=" + freeRoundsManager_.getActivationID();
                page += "&promoCampaignID=" + freeRoundsManager_.getCampaignID();
                page += "&promoType=0";
            }
            var bet = 0;
            if (mode === "spin") {
                bet = Number(balanceManager_.getCoinValue()) * 100;
                page += "&lines=" + lineManager_.getRealLinesNumber();
            }

            page += "&stake=" + bet;
            logger("req " + page)
            $.post(page, {
                func: "SlotEngineRequest"
            }, function(data) {

                var errorCode = data.response.errorcode;
                if (errorCode === 0 || errorCode==null){
                    if(ReelConfig.slotEngine=="IntegratedSlots")data.response.type=mode;//Tom doesn't send the type
                    getResponse_(data.response);


                } else { //fatal error

                    var desc = data.response.errordesc;
                    if (!f1x2.GcmError(desc,errorCode) && f1x2.clientWrapperInit.use && !f1x2.clientWrapperInit.handler.showInGameErrors) {
                        showMessage_( desc,"fatal-error","Error Loading Game Setup");
                    }else{
                        gcmErrorHandler_();                        }
                }

            }, "json")

                .fail(function() {
                    if(!f1x2.GcmError("We were unable to retrieve the game setup parameters",-2)){
                        showMessage_( "We were unable to retrieve the game setup parameters","fatal-error","Error Loading Game Setup");
                    }else{
                        gcmErrorHandler_();
                    }
                });
        } catch (E) {
            if(!f1x2.GcmError("Apparently we’re having some trouble, please try again later.",-2)){
                showMessage_( "Apparently we’re having some trouble, please try again later.","fatal-error","Something went wrong!");
            }else{
                gcmErrorHandler_();
            }
        }
    }

    /**
     This function handles free rounds request and returns a promise.
     Params:
     mode :
     - getInfo
     returns all info about available / current free rounds
     - choice
     makes a choice of the type of free rounds to be played (bet level option)
     --pick to signify choice
     - update
     updates the local record of free rounds.
     --win to signify winamount
     **/
    function freeRoundsRequest_(paramString) {

        console.log("doing Free rounds request " + paramString);

        var page = gameParams.path + "freeRounds.jsp?" + paramString;
        page += "&accountID=" + gameInfo.accountID;
        page += "&gameID=" + gameParams.gameID;

        return $.getJSON(page).then(function(response) {
                //update if sucessfull but fail silently
                return response;
            },
            function(responseError) {
                // translate the error
                //throw httpError.status + " : " + httpError.data;
                console.error('failure loading json', responseError);

                return false;
            });
    }

    function uniqueBetValuesRequest_() {
        var page = gameParams.path + "getBetValues.jsp?";
        page += "&siteID=" + gameParams.site;
        page += "&gameID=" + gameParams.gameID;
        page += "&ex_rate=" + gameInfo.exchangeRate;
        page += "&currency=" + gameInfo.currency;
        page += "&jurisdiction=" +loginVars.getRegParams().jurisdiction;

        return $.getJSON(page).then(function(response) {
                //update if sucessfull but fail silently
                return response;
            },
            function(responseError) {
                // translate the error
                //throw httpError.status + " : " + httpError.data;
                console.error('failure loading json', responseError);

                return false;
            });
    }


    function rtpMaxChanceRequest_() {
        //https://1x2-cas.com/CentralAdmin/cas_maxpay_info.jsp?gameID=7019
        var page ="https://lb.1x2-cas.com/CentralAdmin/cas_maxpay_info.jsp?";
        page += "&gameID=" + gameParams.gameID;
        page += "&jurisdiction=" +loginVars.getRegParams().jurisdiction;

        return $.getJSON(page).then(function(response) {
                //update if sucessfull but fail silently
                return response;

            },
            function(responseError) {
                // translate the error
                //throw httpError.status + " : " + httpError.data;
                showMessage_( "Unable to retrieve game information at this time","fatal-error","Something went wrong!");
                return false;
            });
    }

    /*promise to hit get balance from server*/
    function getBalance_() {

        // var page =   "./balTry.jsp"; //just for test locally
        // return $.get(page).then(function(response) {
        //         //update if sucessfull but fail silently
        //         return response;
        //     }
        // );


        var page = gameParams.path + "getBalance.jsp?";
        page += "&siteID=" + gameParams.site;
        page += "&gameID=" + gameParams.gameID;
        page += "&accountID=" + gameInfo.accountID;
        page += "&customerID=" + gameInfo.customerID;
        page += "&username=" + gameInfo.username;

        return $.get(page).then(function(data) {
                if (data.toString().indexOf("&")>=0){  //querystring
                    if (Number(getParam(data, "error_code")) === 0) {
                        return Number(getParam(data, "balance"));
                    }
                }else{//json
                    if (data!=undefined && data.balance!=undefined)return Number(data.balance);
                }
                return false;
            },
            function(responseError) {
                console.error('fa ilure loading json', responseError);
                return false;
            });

    }

    function processForceDemo_(){
        console.log("resp "+ forceProgressive_ + forceDemo["win"+forceDemoID_][forceProgressive_].response);
        if(ReelConfig.slotEngine=="IntegratedSlots")forceDemo["win"+forceDemoID_][forceProgressive_].response.type="spin";//Tom doesn't send the type

        getResponse_(forceDemo["win"+forceDemoID_][forceProgressive_].response);
        forceProgressive_++;
        if(forceDemo["win"+forceDemoID_].length<=forceProgressive_){
            forceProgressive_=0;
            forceDemoID_=-1;
        }
    }

    function processForceReplay_(){
        var page=  forceUrl_+ "="+ forceGameIds_[forceProgressive_];
        var mode="spin";
        forceProgressive_++;
        if(forceGameIds_.length<=forceProgressive_){
            forceProgressive_=0;
            forceDemoID_=-1;
        }

        try {
            $.post(page, {
                func: "SlotEngineRequest"
            }, function(data) {

                var errorCode = data.response.errorcode;


                if (data.response.type!="login"){
                    // resetGameFunction();
                    // return;
                }


                if (errorCode === 0 || errorCode==null){
                    if(ReelConfig.slotEngine=="IntegratedSlots")data.response.type=mode;//Tom doesn't send the type
                    if (forceProgressive_==1 && forceBuyIn_==true)data.response.startBuyIn=true;
                    getResponse_(data.response);

                } else { //fatal error

                    if (spin) {
                        balanceManager_.unBet();
                        balanceManager_.forceBalanceUpdate();
                    }

                    var desc = Translate.do(data.response.errordesc);
                    if(!f1x2.GcmError(desc,errorCode) && f1x2.clientWrapperInit.use && !f1x2.clientWrapperInit.showInGameErrors){
                        if(errorCode<=-700 && errorCode>=-799){
                            //playtech session expiration error range
                            window.f1x2.messageHandlerInit.check( function() {
                                resetGameFunction();
                            }, 'error');
                        }else if (f1x2.clientWrapperInit.use && !f1x2.clientWrapperInit.showInGameErrors){
                            try {
                                var mess=JSON.parse(desc);
                                window.FEIM.showError(mess.errorparameters);
                                resetGameFunction();
                            } catch (e) {
                                MessageScreen.showMessageFromServer(desc, errorCode);
                            }
                        }else{
                            MessageScreen.showMessageFromServer(desc, errorCode);
                        }
                    }else if(!f1x2.GcmError(desc,errorCode) && f1x2.clientWrapperInit.use ){
                        if(gameParams.clientName.toUpperCase().indexOf("RELAX")>=0){
                            desc=Translate.do("Apparently we’re having some trouble, please try again later.");
                        }
                        MessageScreen.showMessageFromServer(desc, errorCode);
                    }else if(!f1x2.GcmError(desc,errorCode)){
                        if(errorCode<=-700 && errorCode>=-799){
                            //playtech session expiration error range
                            window.f1x2.messageHandlerInit.check( function() {
                                resetGameFunction();
                            }, 'error');
                        }else if (f1x2.clientWrapperInit.use && !f1x2.clientWrapperInit.handler.showInGameErrors){
                            try {
                                var mess=JSON.parse(desc);
                                window.FEIM.showError(mess.errorparameters.errorDetails);
                                resetGameFunction();
                            } catch (e) {
                                MessageScreen.showMessageFromServer(desc, errorCode);
                            }
                        }else{
                            MessageScreen.showMessageFromServer(desc, errorCode);
                        }
                    }else{

                        spinManager_.stopSpinForError();
                        if (autoPlayManager_.getIsInAutoPlay()) {
                            autoPlayManager_.toggleAutoPlay();
                            framework.setAutoPlayState(0);
                        }
                        buttonManager_.applyState("NH");
                        if (ReelConfig.newUI && !framework.isTouch()) {
                            if(window.newUI!=undefined && window.newUI.autospin !=undefined)window.newUI.autospin().state = 'START';
                        }
                    }
                }

            }, "json")

                .fail(function() {
                    if(!f1x2.GcmError("Apparently we’re having some trouble, please try again later.",-2)){
                        showMessage_( "Apparently we’re having some trouble, please try again later.","fatal-error","Something went wrong!");
                    }else{
                        gcmErrorHandler_();
                    }
                    //call error
                    //fatal error
                });
        } catch (E) {
            if(!f1x2.GcmError("Apparently we’re having some trouble, please try again later.",-2)){
                showMessage_( "Apparently we’re having some trouble, please try again later.","fatal-error","Something went wrong!");
            }else{
                gcmErrorHandler_();
            }
        }
    }

    function sendServletRequest_(mode, args) {
        var spin = false;
        var local=(gameParams.path.indexOf("http://88.208.244.42/")>=0 )?true:false; //just to debug on 42 avoid using form data
        if (Number(gameParams.gameOriginalID) == 7014) {
            local = true;
        }
        console.log("send spin req "  + gameParams.gameID);
        try {
            if (forceUrlReplay_==true && forceDemoID_>0){
                spin = true;
                setTimeout(processForceReplay_,200);
                return;
            }
            if (forceUrlReplay_==false && forceDemoID_>0){
                spin = true;
                setTimeout(processForceDemo_,200);
                return;
            }

            if (ReelConfig.slotEngine=="IntegratedSlots") {
                gameParams.slotEngine = ReelConfig.slotEngine;
            }else{
                if (Number(gameParams.gameOriginalID) >= 7014) {
                    gameParams.slotEngine = ReelConfig.slotEngine + "0";
                } else {
                    gameParams.slotEngine = ReelConfig.slotEngine + Util.getRandomInt(0, (ReelConfig.engineNumbers != null && gameParams.clientName != false && (gameParams.clientName.indexOf("NYX") >= 0 || gameParams.clientName.indexOf("Quickfire") >= 0)) ? ReelConfig.engineNumbers : 3);   //16 servlets for NYX only
                }
            }
            if (requestFailed_){
                var path= serverGIB_+ gameParams.slotEngine;
            }else{
                var path= gameParams.path + gameParams.slotEngine;
            }

            if (local){
                var page = path+ "?mode=" + mode;
            }else{
                var page =  "mode=" + mode;
            }

            page += "&accountID=" + gameInfo.accountID;
            page += "&customerID=" + gameInfo.customerID;
            page += "&username=" + gameInfo.username;
            page += "&currency=" + gameInfo.currency;
            page += "&site=" + gameParams.site;
            page += "&jurisdiction=" +loginVars.getRegParams().jurisdiction;

            if (gameParams.version!="undefined") {
                page += "&version=" + gameParams.version;
            }
            //new  communication
            page += "&gameID=" + gameParams.gameID;
            page += "&ex_rate=" + gameInfo.exchangeRate;
            page += "&fun_real=" + gameInfo.playMode;
            page += "&conf=" + gameParams.confType;
            page += "&mobile=" + framework.isTouch();
            page += "&gameType=" + "PREMIUMSLOTS";

            if (freeRoundsManager_ == undefined || freeRoundsManager_.getIsInFr() == false) {
                page += "&isPromoRound=0";
                page += "&promoActivationID=0";
                page += "&promoCampaignID=0";
                page += "&promoType=0";
            } else {
                page += "&isPromoRound=1";
                page += "&promoActivationID=" + freeRoundsManager_.getActivationID();
                page += "&promoCampaignID=" + freeRoundsManager_.getCampaignID();
                page += "&promoType=0";
            }


            var bet = 0;
            if (mode === "spin") {
                spin = true;
                bet = Number(balanceManager_.getCoinValue()) * 100;
                page += "&lines=" + lineManager_.getRealLinesNumber();
                var s=((getOrientation()=="portrait")?"1":"0").toString()+ ((soundManager_.getCanPlayBg())?"1":"0").toString()+ ((soundManager_.getCanPlay())?"1":"0").toString();
                page +="&settings=" + s;
            } else if (mode === "bonus" || mode === "choose" || mode === "CHOICE") {
                page += args
            } else if (mode === "replay") {
                page += "&" + args;
            } else {

            }

            page += "&stake=" + bet;
            logger("req " + page);
            var paramData=objectifyParamterString_(page);
            if (local){
                paramData=null
            }else{
                page = path;
            }


            $.post(page,  paramData
                , function(data) {

                    var errorCode = data.response.errorcode;


                    if (data.response.type!="login"){
                        // resetGameFunction();
                        // return;
                    }

                    if (errorCode === 0 || errorCode==null){
                        requestFailed_=false
                        if(ReelConfig.slotEngine=="IntegratedSlots")data.response.type=mode;//Tom doesn't send the type
                        getResponse_(data.response);

                    } else { //fatal error

                        if (mode =="replay" &&  errorCode==-500 && (gameParams.clientName.toUpperCase()=="NYX" && !requestFailed_ )) {
                            requestFailed_=true;
                            sendServletRequest_(mode, args);
                            return;
                        }

                        if (spin) {
                            balanceManager_.unBet();
                            balanceManager_.forceBalanceUpdate();
                        }

                        var desc = Translate.do(data.response.errordesc);
                        if(!f1x2.GcmError(desc,errorCode) && f1x2.clientWrapperInit.use && !f1x2.clientWrapperInit.showInGameErrors) {
                            if (errorCode <= -700 && errorCode >= -799) {
                                //playtech session expiration error range
                                window.f1x2.messageHandlerInit.check(function () {
                                    resetGameFunction();
                                }, 'error');
                            } else if (f1x2.clientWrapperInit.use && !f1x2.clientWrapperInit.showInGameErrors) {
                                try {
                                    var mess = JSON.parse(desc);
                                    window.FEIM.showError(mess.errorparameters);
                                    resetGameFunction();
                                } catch (e) {
                                    MessageScreen.showMessageFromServer(desc, errorCode);
                                }
                            } else {
                                MessageScreen.showMessageFromServer(desc, errorCode);
                            }
                        }else if(!f1x2.GcmError(desc,errorCode) && f1x2.clientWrapperInit.use ) {
                            if (errorCode <= -700 && errorCode >= -799) {
                                //playtech session expiration error range
                                window.f1x2.messageHandlerInit.check(function () {
                                    resetGameFunction();
                                }, 'error');
                            } else{
                                if (gameParams.clientName.toUpperCase().indexOf("RELAX") >= 0) {
                                    desc = Translate.do("Apparently we’re having some trouble, please try again later.");
                                }
                                MessageScreen.showMessageFromServer(desc, errorCode);
                            }
                        }else if(!f1x2.GcmError(desc,errorCode)){
                            if(errorCode<=-700 && errorCode>=-799){
                                //playtech session expiration error range
                                window.f1x2.messageHandlerInit.check( function() {
                                    resetGameFunction();
                                }, 'error');
                            }else if (f1x2.clientWrapperInit.use && !f1x2.clientWrapperInit.handler.showInGameErrors){
                                try {
                                    var mess=JSON.parse(desc);
                                    window.FEIM.showError(mess.errorparameters.errorDetails);
                                    resetGameFunction();
                                } catch (e) {
                                    MessageScreen.showMessageFromServer(desc, errorCode);
                                }
                            }else{
                                MessageScreen.showMessageFromServer(desc, errorCode);
                            }
                        }else{
                            if (autoPlayManager_!=undefined) {

                                spinManager_.stopSpinForError();
                                if (autoPlayManager_.getIsInAutoPlay()) {
                                    autoPlayManager_.toggleAutoPlay();
                                    framework.setAutoPlayState(0);
                                }
                                buttonManager_.applyState("NH");
                            }
                            if (ReelConfig.newUI && !framework.isTouch()) {
                                if(window.newUI!=undefined && window.newUI.autospin !=undefined)window.newUI.autospin().state = 'START';
                            }
                        }
                    }

                }, "json")

                .fail(function() {
                    if(!f1x2.GcmError("Apparently we’re having some trouble, please try again later.",-2)){
                        showMessage_( "Apparently we’re having some trouble, please try again later.","fatal-error","Something went wrong!");
                    }else{
                        gcmErrorHandler_();
                    }
                    //call error
                    //fatal error
                });
        } catch (E) {
            if(!f1x2.GcmError("Apparently we’re having some trouble, please try again later.",-2)){
                showMessage_( "Apparently we’re having some trouble, please try again later.","fatal-error","Something went wrong!");
            }else{
                gcmErrorHandler_();
            }
        }
    }

    function objectifyParamterString_(str){
        var urlParams = new URLSearchParams(str);
        var obj= Object.fromEntries(urlParams);
        return obj;

    }

    function resetGameFunction(){
        spinManager_.stopSpinForError();
        if (autoPlayManager_.getIsInAutoPlay()) {
            autoPlayManager_.toggleAutoPlay();
            framework.setAutoPlayState(0);
        }
        buttonManager_.applyState("NH");
        if (ReelConfig.newUI && !framework.isTouch()) {
            if(window.newUI!=undefined && window.newUI.autospin !=undefined)window.newUI.autospin().state = 'START';
        }
    }

    function sendServletBfRequest_(mode,args) {
        var spin = false;
        console.log("send spin req "  + gameParams.gameID);
        try {
            if (forceUrlReplay_==true && forceDemoID_>0){
                spin = true;
                setTimeout(processForceReplay_,200);
                return;
            }
            if (forceUrlReplay_==false && forceDemoID_>0){
                spin = true;
                setTimeout(processForceDemo_,200);
                return;
            }


            if (ReelConfig.slotEngine=="IntegratedSlots") {
                gameParams.slotEngine = ReelConfig.slotEngine;
            }else {
                if (gameParams.gameOriginalID == "7014" || gameParams.gameOriginalID == "7015" || gameParams.gameOriginalID == "7016" || gameParams.gameOriginalID == "7019"|| isBrandedMw()) {
                    gameParams.slotEngine = ReelConfig.slotEngine + "0";
                } else {
                    gameParams.slotEngine = ReelConfig.slotEngine + Util.getRandomInt(0, (ReelConfig.engineNumbers != null && gameParams.clientName != false && (gameParams.clientName.indexOf("NYX") >= 0 || gameParams.clientName.indexOf("Quickfire") >= 0)) ? ReelConfig.engineNumbers : 3);   //16 servlets for NYX only
                }
            }

            var path= gameParams.path + gameParams.slotEngine;
            var page =  "mode=" + mode;

            page += "&accountID=" + gameInfo.accountID;
            page += "&customerID=" + gameInfo.customerID;
            page += "&username=" + gameInfo.username;
            page += "&currency=" + gameInfo.currency;
            page += "&site=" + gameParams.site;
            page += "&version=" + gameParams.version;
            page += "&ex_rate=" + gameInfo.exchangeRate;
            page += "&fun_real=" + gameInfo.playMode;
            page += "&conf=" + gameParams.confType;
            page += "&mobile=" + framework.isTouch();
            page += "&jurisdiction=" +loginVars.getRegParams().jurisdiction;

            if (freeRoundsManager_ == undefined || freeRoundsManager_.getIsInFr() == false) {
                page += "&isPromoRound=0";
                page += "&promoActivationID=0";
                page += "&promoCampaignID=0";
                page += "&promoType=0";
            } else {
                page += "&isPromoRound=1";
                page += "&promoActivationID=" + freeRoundsManager_.getActivationID();
                page += "&promoCampaignID=" + freeRoundsManager_.getCampaignID();
                page += "&promoType=0";
            }

            var bet = 0;
            if (mode === "spin") {
                if (ReelConfig.slotEngine=="IntegratedSlots") {
                    page += "&gameID=" + gameParams.gameID;
                    page += "&ex_rate=" + gameInfo.exchangeRate;
                    page += "&fun_real=" + gameInfo.playMode;
                    page += "&conf=" + gameParams.confType;
                    page += "&mobile=" + framework.isTouch();
                    page += "&gameType=" + "PREMIUMSLOTS";
                    spin = true;
                    bet = Number(balanceManager_.getCoinValue()) * 100;
                    page += "&lines=" + lineManager_.getRealLinesNumber();
                    page += "&buyIn=true";
                    page += "&buyInValue="+args.buyInValue;
                    if (args.index==undefined){
                        page += "&selection_0="+(args.newIndex );
                    }else{
                        page += "&selection_0="+(args.index-1);
                    }
                    page += "&nSpins="+args.nSpins;
                }else {
                    spin = true;
                    bet = Number(balanceManager_.getCoinValue()) * 100;
                    page += "&lines=" + lineManager_.getRealLinesNumber();
                    page += "&buyin=true";
                    page += "&buyInValue="+args.buyInValue;
                    page += "&nSpins="+args.nSpins;
                    if (args.index!=undefined){
                        page += "&buyID="+args.index;
                    }else{
                        page += "&nLocked="+args.nLocked;
                        page += "&nSpins="+args.nSpins;
                        page += "&buyInValue="+args.buyInValue;
                    }

                }
            }

            page += "&stake=" + bet;
            logger("req " + page);
            var paramData=objectifyParamterString_(page);
            page = path

            $.post(page,  paramData
                , function(data) {
                    var errorCode = data.response.errorcode;

                    if (errorCode === 0 || errorCode==null){
                        data.response.startBuyIn=true;
                        if(ReelConfig.slotEngine=="IntegratedSlots")data.response.type=mode;//Tom doesn't send the type
                        getResponse_(data.response);

                    } else { //fatal error

                        if (spin) {
                            balanceManager_.unBet();
                            balanceManager_.forceBalanceUpdate();
                        }

                       var desc = Translate.do(data.response.errordesc);
                        if(!f1x2.GcmError(desc,errorCode) && f1x2.clientWrapperInit.use && !f1x2.clientWrapperInit.showInGameErrors) {
                            if (errorCode <= -700 && errorCode >= -799) {
                                //playtech session expiration error range
                                window.f1x2.messageHandlerInit.check(function () {
                                    resetGameFunction();
                                }, 'error');
                            } else if (f1x2.clientWrapperInit.use && !f1x2.clientWrapperInit.showInGameErrors) {
                                try {
                                    var mess = JSON.parse(desc);
                                    window.FEIM.showError(mess.errorparameters);
                                    resetGameFunction();
                                } catch (e) {
                                    MessageScreen.showMessageFromServer(desc, errorCode);
                                }
                            } else {
                                MessageScreen.showMessageFromServer(desc, errorCode);
                            }
                        }else if(!f1x2.GcmError(desc,errorCode) && f1x2.clientWrapperInit.use ) {
                            if (errorCode <= -700 && errorCode >= -799) {
                                //playtech session expiration error range
                                window.f1x2.messageHandlerInit.check(function () {
                                    resetGameFunction();
                                }, 'error');
                            } else{
                                if (gameParams.clientName.toUpperCase().indexOf("RELAX") >= 0) {
                                    desc = Translate.do("Apparently we’re having some trouble, please try again later.");
                                }
                                MessageScreen.showMessageFromServer(desc, errorCode);
                            }
                        }else if(!f1x2.GcmError(desc,errorCode)){
                            if(errorCode<=-700 && errorCode>=-799){
                                //playtech session expiration error range
                                window.f1x2.messageHandlerInit.check( function() {
                                    resetGameFunction();
                                }, 'error');
                            }else if (f1x2.clientWrapperInit.use && !f1x2.clientWrapperInit.handler.showInGameErrors){
                                try {
                                    var mess=JSON.parse(desc);
                                    window.FEIM.showError(mess.errorparameters.errorDetails);
                                    resetGameFunction();
                                } catch (e) {
                                    MessageScreen.showMessageFromServer(desc, errorCode);
                                }
                            }else{
                                MessageScreen.showMessageFromServer(desc, errorCode);
                            }
                        }else{
                            if (autoPlayManager_!=undefined) {

                                spinManager_.stopSpinForError();
                                if (autoPlayManager_.getIsInAutoPlay()) {
                                    autoPlayManager_.toggleAutoPlay();
                                    framework.setAutoPlayState(0);
                                }
                                buttonManager_.applyState("NH");
                            }
                            if (ReelConfig.newUI && !framework.isTouch()) {
                                if(window.newUI!=undefined && window.newUI.autospin !=undefined)window.newUI.autospin().state = 'START';
                            }
                        }

                    }

                }, "json")

                .fail(function() {
                    if(!f1x2.GcmError("Apparently we’re having some trouble, please try again later.",-2)){
                        showMessage_( "Apparently we’re having some trouble, please try again later.","fatal-error","Something went wrong!");
                    }else{
                        gcmErrorHandler_();
                    }
                });
        } catch (E) {
            if(!f1x2.GcmError("Apparently we’re having some trouble, please try again later.",-2)){
                showMessage_( "Apparently we’re having some trouble, please try again later.","fatal-error","Something went wrong!");
            }else{
                gcmErrorHandler_();
            }
        }
    }

    function getResponse_(json) {
        state_="";
        if (ReelConfig.newComm==true){
            json= communicationWrapper_(json);
        }else{
            // var len=2;
            // for (var a in  json.status.reels){
            //     json.status.reels[a].smb=[];
            //
            //     for (var b=0; b<=len;b++) {
            //         json.status.reels[a].smb[b]={id: b, smb: 7  , special: "n/a"}
            //     }
            //     len++;
            // }
        }


        if (json.type == "login") {
            //reading slot previous state
            status_ = json;
            framework.doSetup(json);
        }
        earlyResponse_(json);
    }

    function earlyResponse_(json){
        if (spinManager_!=undefined) {
            if (json.type == "replay") {
                framework.doReplay(json);
            }
            if (json.type == "spin") {
                communicationManager_.getResumeStatus().status.state="normal";
                if(framework.isTouch()== true && !hasFocus_){
                    //prevent the game from spin without sound on GCM envinronment, when on mobile they tap on the bar and then they close it it won't give the focus back
                    window.focus();
                    hasFocus_=true;
                    soundManager_.resumeAllFocus();
                }

                // check for messages on place if playing for real
                if ( gameParams.fun_real=="real" && window.f1x2.messageHandlerInit.use() && (json.bet>0 )) {//real and not FS
                    window.f1x2.messageHandlerInit.check( function() {
                        if (json.startBuyIn==true){
                            gameClass_.getBuyInResponse(json);
                        }else{
                            if (document.getElementsByName("lastSeed")[0]!=null)document.getElementsByName("lastSeed")[0].value=json.status.indices;
                            spinManager_.parse(json);
                            freeSpinsManager_.parse(json);
                            scatterManager_.parse(json);
                        }
                    }, 'place');
                }else{
                    if (json.startBuyIn==true){
                        gameClass_.getBuyInResponse(json);
                    }else{
                        if (document.getElementsByName("lastSeed")[0]!=null)document.getElementsByName("lastSeed")[0].value=json.status.indices;
                        spinManager_.parse(json);
                        freeSpinsManager_.parse(json);
                        scatterManager_.parse(json);
                    }
                }

            }

            if (json.type == "bonusSetup") {
                bonusManager_.initBonus(json);
            }

            if (json.type == "doubleSetup") {
                bonusManager_.initBonus(json);
            }

            if (json.type == "bonus") {
                bonusManager_.parse(json);
            }

            if (json.type == "collect") {
                bonusManager_.collectCallBack(json);
            }

            if (json.type == "double") {
                sendServletRequest_("doubleSetup");
            }

            if (json.type == "choose") {
                freeSpinsManager_.parse(json);
                gameClass_.startFS();
            }

            if (json.balance != null)
                balanceManager_.parse(json.balance);
        }else{
            setTimeout(earlyResponse_,200,json);
        }
    }

    function getMessage_(json) {
        generalParse_(json);
        if (json.type == "balance") {
            balanceManager_.parse(json);
        }
        if (json.type == "jackpot") {
            jackpotManager_.parse(json);
        }
        if (json.type == "freeRounds") {
            freeRoundsManager_.parse(json);
        }
        //... others
    }

    //Get balance from server
    function sendBalanceReq_() {

        var paramString = "username=" + gameInfo.username + "&accountID=" + gameParams.accountID + "&gameID=" + gameParams.gameID + "&siteID=" + gameParams.site + "&installID=" + gameParams.installID;
        var page = gameParams.path + "/getAccountInfo.jsp?" + paramString;

        $.post(page, {
            func: "getAccountInfo"
        }, function(data) {

            var errorCode = getParam(data, "error_code");

            if (errorCode == "0") {

                balanceManager_.setBalance(Number(getParam(data, "balance")));

            } else { //fatal error


                var desc = Translate.do(getParam(data, "error_description"));
                if(!f1x2.GcmError(desc,errorCode) && f1x2.clientWrapperInit.use && !f1x2.clientWrapperInit.handler.showInGameErrors){
                    showMessage_( desc,"fatal-error","Error Loading Account Info");
                }else{
                    gcmErrorHandler_();
                }
            }


        }, "text")

            .fail(function() { //fatal error
                if(!f1x2.GcmError("We were unable to retrieve your account information",-2)){
                    showMessage_( "We were unable to retrieve your account information","fatal-error","Error Loading Account Info");
                }else{
                    gcmErrorHandler_();
                }
            });

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

    function communicationWrapper_(json){
        //new communication wrapper, config param. to enable it
        var ret = {};
        var reelObj=ret;
        var tumbler=false;
        ret.status={};
        if (json.startBuyIn!=undefined)ret.startBuyIn=true;

        ret.type="login";
        if (json.config!=undefined) {

            reelObj=ret.status={};
            ret.rtp=" "+json.config.RTP.toString();
            ret.status.hasBuyIn=false;
            //bet values
            if (json.config.betValues!=undefined){
                ret.betValues=json.config.betValues;
            }

            //AP values
            if (json.config.autoPlayValues!=undefined){
                ret.autoPlayValues=json.config.autoPlayValues;
            }

            //Paytable
            if (json.config.paytable!=undefined){
                ret.paytable=json.config.paytable;
            }

            //stake
            if (json.config.defaultBetVal!=undefined){
                ret.status.stake=Number(json.config.defaultBetVal)*100;
            }

            //coins
            if (json.config.coinsPlayed!=undefined){
                ret.status.coinsPlayed=Number(json.config.coinsPlayed);
            }

            //total win
            if (json.config.win!=undefined){
                ret.status.totalWin=json.config.win.total;
            }

            //buy a feature
            if (json.config.disableBuyIn!= undefined && json.config.disableBuyIn!=true){
                ret.status.hasBuyIn=true;
                if (json.config.buyInSetup!=undefined){
                    ret.status.buyInSetup={};
                    ret.status.buyInSetup.options=[];
                    for (var a in json.config.buyInSetup.options[0].price){
                        ret.status.buyInSetup.options[a]={};
                        ret.status.buyInSetup.options[a].rounds=json.config.buyInSetup.options[0].price[a].spins;
                        ret.status.buyInSetup.options[a].price=json.config.buyInSetup.options[0].price[a].stakeScale;
                        ret.status.buyInSetup.options[a].extra="";
                        ret.status.buyInSetup.options[a].options=(json.config.buyInSetup.options[0].price[a].optionString!=undefined)?json.config.buyInSetup.options[0].price[a].optionString:"";
                        ret.status.buyInSetup.options[a].index=(json.config.buyInSetup.options[0].price[a].index!=undefined)?json.config.buyInSetup.options[0].price[a].index:"";
                    }
                }
            }
            //lines
            if (json.config.lines!=undefined) {
                ret.lines = [];
                for (var a = 0; a < json.config.lines.length; a++) {
                    var o = {};
                    o.id = Number(a)+1;
                    o.config = json.config.lines[a];
                    ret.lines.push(o);
                }
            }

/*


            json.results.reels=
                [
                [ {
                    "smbID" : 5,
                    "split" : true,
                    "explode" : true,
                    "size" : 2
                }, {
                    "smbID" : 5,
                    "sticky" : true,
                    "size" : 2
                } ], [ {
                    "smbID" : 5,
                    "split" : true,
                    "explode" : true,
                    "size" : 3
                }, {
                    "smbID" : 5,
                    "sticky" : true,
                    "size" : 3
                }, {
                    "smbID" : 5,
                    "sticky" : true,
                    "size" : 3
                } ], [ {
                    "smbID" : 5,
                    "size" : 4
                }, {
                    "smbID" : 5,
                    "size" : 4
                } , {
                    "smbID" : 5,
                    "size" : 4
                } , {
                    "smbID" : 5,
                    "size" : 4
                } ], [ {
                    "smbID" : 5,
                    "size" : 5
                }, {
                    "smbID" : 5,
                    "size" : 5
                }, {
                    "smbID" : 5,
                    "size" : 5
                }, {
                    "smbID" : 5,
                    "size" : 5
                } ,{
                    "smbID" : 5,
                    "size" : 5
                } ], [ {
                    "smbID" : 5,
                    "size" : 6
                }, {
                    "smbID" : 5,
                    "size" : 6
                }, {
                    "smbID" : 5,
                    "size" : 6
                }, {
                    "smbID" : 5,
                    "size" : 6
                } , {
                    "smbID" : 5,
                    "size" : 6
                } , {
                    "smbID" : 5,
                    "size" : 6
                } ], [ {
                    "smbID" : 5,
                    "size" : 7
                }, {
                    "smbID" : 5,
                    "size" : 7
                }, {
                    "smbID" : 5,
                    "size" : 7
                }, {
                    "smbID" : 5,
                    "size" : 7
                }, {
                    "smbID" : 5,
                    "size" : 7
                }, {
                    "smbID" : 5,
                    "size" : 7
                }, {
                    "smbID" : 5,
                    "size" : 7
                } ]
            ];

 */






        }else{
            ret.type=json.type;
            ret.spin={};
            reelObj=ret.spin;
        }
        //bet
        if (json.bet!=undefined){
            ret.balance={};
            ret.balance.value=0;
            if (json.bet.addBalance!=undefined)ret.balance.value=json.bet.addBalance;
            if (json.bet.balance!=undefined)ret.balance.newBalance=json.bet.balance; //newbalance
            if (json.bet.buyIn!=undefined && json.bet.buyIn==true)ret.buyIn=json.bet.buyInValue;
        }

        //reels
        if (json.results!=undefined && json.type!="replay") {
            //reels
            if (json.results.reels != undefined) {
                reelObj.reels = [];
                reelObj.reel = [];
                for (var a = 0; a < json.results.reels.length; a++) {
                    var o = {};
                    o.id = a;
                    o.smb = [];
                    var baseId=0;
                    if (gameParams.gameOriginalID=="7024" && json.results.reels[a].length==4){
                        var oo = {};
                        oo.id = baseId;
                        oo.smb = 14;
                        oo.special = "remove";
                        o.smb.push(oo);
                        baseId++;
                    }
                    for (var b = 0; b < json.results.reels[a].length; b++) {
                        var oo = {};
                        oo.id = b+baseId;
                        oo.smb = json.results.reels[a][b].smbID;
                        oo.prevsmb = (json.results.reels[a][b].prevSmbID != undefined) ? json.results.reels[a][b].prevSmbID : null;
                        oo.transform = (json.results.reels[a][b].transform != undefined) ? json.results.reels[a][b].transform : null;
                        oo.anim = (json.results.reels[a][b].anim != undefined) ? true : null;
                        oo.trigger = (json.results.reels[a][b].trigger != undefined) ? true : null;
                        oo.animate = (json.results.reels[a][b].animate != undefined) ? json.results.reels[a][b].animate : false;
                        oo.special = (json.results.reels[a][b].special != null) ? json.results.reels[a][b].special : "n/a";
                        oo.special = (json.results.reels[a][b].explode != null) ? "tumble": oo.special ;
                        oo.split = (json.results.reels[a][b].split != null && json.results.reels[a][b].smbID!=11) ? json.results.reels[a][b].split: false ;
                        oo.tumble = (json.results.reels[a][b].tumble != null) ? json.results.reels[a][b].tumble: false ;  //todo remove smb 11 check
                        oo.stick = (json.results.reels[a][b].stick != null) ? json.results.reels[a][b].stick: null ;
                        oo.splitOrigin = (json.results.reels[a][b].splitOrigin != null && (wildManager_==undefined || wildManager_.isReelWilded(a)==false)) ? json.results.reels[a][b].splitOrigin : -1 ; //todo remove wild check
                        oo.size = (json.results.reels[a][b].size != null) ? json.results.reels[a][b].size : -1 ;
                        oo.mult = (json.results.reels[a][b].mult != undefined) ? json.results.reels[a][b].mult : 0;
                        if (json.results.reels[a][b].beanValue!=undefined)oo.beanValue=json.results.reels[a][b].beanValue;
//                        oo.exploding = (json.results.reels[a][b].exploding != null) ? "exploding": null ;
                        if(json.results.reels[a][b].explode ){
                            oo.animate=true;
                            tumbler=true;// means is a tbling machine ??todo see if can be removed
                        }
                        o.smb.push(oo);
                    }
                    if (gameParams.gameOriginalID=="7024" && json.results.reels[a].length<6 ){
                        var oo = {};
                        oo.id = b+baseId;
                        oo.smb = 14;
                        oo.special = "remove";
                        o.smb.push(oo);
                    }
                    reelObj.reels.push(o);
                    reelObj.reel.push(o);
                }
            }
            if (json.horizontalReel!=undefined){
                reelObj.horizontalReel = json.horizontalReel;
            }
        }
        //Status
        if (json.results!=undefined && balanceManager_!=undefined && json.type!="replay"){
            ret.win={};
            //total win
            ret.win.total=json.results.win.total *(balanceManager_.getCoinValue()/ lineManager_.getLinesNumber());
            ret.win.jackpot="0";
            ret.win.bonus="0";

            if (json.results.win.symbolWin!=undefined && ret.type!="login"){ //lines
                ret.win.lineWin= json.results.win.symbolWin.coins *(balanceManager_.getCoinValue()/ lineManager_.getLinesNumber());
                ret.win.lineCoinsWin= json.results.win.symbolWin.coins;
                ret.win.line=[];
                for (var a = 0; a < json.results.win.symbolWin.symbols.length; a++) {
                    var o= {};
                    o.id=Number(json.results.win.symbolWin.symbols[a].lineID)+1;
                    o.amt=json.results.win.symbolWin.symbols[a].amt *(balanceManager_.getCoinValue()/ lineManager_.getLinesNumber());
                    o.wild=[];
                    o.config=[0,0,0,0,0];
                    for (var b=0;b<Number(json.results.win.symbolWin.symbols[a].num);b++){//convert num to array position for old IDS comm
                        o.config[b]=1;
                    }
                    o.config=o.config.join("");
                    ret.win.line.push(o);
                }
            }
            if (json.results.win.scatterWin!=undefined && json.results.win.scatterWin.coins!=undefined && json.results.win.scatterWin.coins>0 && ret.type!="login") { //scatters (book of so far)
                ret.win.scatterWin = json.results.win.scatterWin.coins * (balanceManager_.getCoinValue() / lineManager_.getLinesNumber());
                ret.win.scatter = [];
                for (var a = 0; a < json.results.win.scatterWin.scatters.length; a++) {
                    var o = {};
                    o.id = Number(json.results.win.scatterWin.scatters[a].smbID);
                    o.amt = json.results.win.scatterWin.scatters[a].amt * (balanceManager_.getCoinValue() / lineManager_.getLinesNumber());
                    ret.win.scatter.push(o);
                }


            }else if (json.results.win.scatterWin!=undefined && json.results.win.scatterWin.coins!=undefined && ret.type!="login") { //scatters (book of so far)
                if (gameParams.gameOriginalID=="7029" && json.results.win.scatterWin.scatters.length>0) { // santa's BB
                    ret.win.scatter = [];
                    ret.win.scatter[0] = [];
                    for (var a = 0; a < json.results.win.scatterWin.scatters.length; a++) {
                        var o = {};
                        if (gameParams.gameOriginalID == "7029") {//santa's BB
                            o.number = json.results.win.scatterWin.scatters[a].num;
                            o.amt = 0;
                            o.multiplier = 1;
                            ret.win.scatter[0][json.results.win.scatterWin.scatters[a].smbID] = o;
                        }
                    }
                }else {
                    ret.win.scatter = json.results.win.scatterWin;
                }
            }
            //state
            if (json.state!=undefined && json.state.status!=undefined){

                ret.bonus={};   //default
                ret.bonus.wonBonus=0;
                ret.bonus.baseMult=0;
                ret.bonus.curWin=0;
                ret.state=json.state;
                //choice
                if (json.state.status=="CHOICE"){
                    /*
                                        "freeSpin" : {
                                            "won" : 20,
                                                "totalWin" : 0,
                                                "multiplier" : 1,
                                                "num" : 20
                                        },

                     */
                    //ask TOm to put number of FS here
                    ret.freeSpin={};
                    ret.freeSpin.won=10;
                    ret.freeSpin.multiplier=1;
                    ret.freeSpin.num=10;

                } else if (json.state.status=="FREESPINS_TRIGGER"){
                    ret.freeSpin={};
                    ret.freeSpin.won=json.state.freespinsRemaining;
                    ret.freeSpin.multiplier=json.state.mult;
                    ret.freeSpin.num=json.state.freespinsRemaining;
                    ret.freeSpin.totalWin=json.state.totalWin*(balanceManager_.getCoinValue()/ lineManager_.getLinesNumber());
                    if (tumbler){
                        ret.freeSpin.type=(json.state.status=="FREESPINS_TRIGGER")?"freespins":"tumble";
                    }else{
                        ret.freeSpin.type=(json.state.status=="FREESPINS_TRIGGER")?"freespins":"normal";
                    }
                    ret.freeSpin.object=json.state;
                }else if (json.state.status=="FREESPINS"){
                    ret.freeSpin={};
                    ret.freeSpin.won=(json.state.wonAdditionalSpins>0)?json.state.wonAdditionalSpins:0;
                    ret.freeSpin.multiplier=json.state.mult;
                    ret.freeSpin.num=json.state.freespinsRemaining;
                    ret.freeSpin.totalWin=json.state.totalWin*(balanceManager_.getCoinValue()/ lineManager_.getLinesNumber());
                    ret.freeSpin.object=json.state;
                    ret.freeSpin.type="spin";
                }
                if (tumbler){
                    if(json.results.win.total>0 || (json.results.win.scatterWin.scatters.length>0 && (gameParams.gameOriginalID==7027 || gameParams.gameOriginalID==7127 || gameParams.gameOriginalID==7227 || gameParams.gameOriginalID==7029 )) ){ //astro newts fuel
                        ret.status.type="tumble";
                        ret.freeSpin={};
                        ret.freeSpin.type="tumble";
                        ret.freeSpin.won=(json.state.wonAdditionalSpins>0)?json.state.wonAdditionalSpins:0;
                        ret.freeSpin.multiplier=json.state.mult;
                        ret.freeSpin.num=json.state.freespinsRemaining;
                        ret.freeSpin.totalWin=json.state.totalWin//*(balanceManager_.getCoinValue()/ lineManager_.getLinesNumber());
                        ret.freeSpin.object=json.state;

                    }
                }
                if(json.state!= undefined && gameParams.gameOriginalID==7029 ) { //santa's harp
                    ret.status.harpBonusID = json.state.harpBonusID;
                    ret.status.harpBonusValue = json.state.harpBonusValue;
                    ret.status.numTumbles= json.state.numTumbles;
                }
                if ( json.state!= undefined && json.state.differenceTC!=undefined && json.state.cap!=undefined ){// cap

                    // json.state.cap=json.state.cap;
                    ret.win.lineWin=Number(json.state.cap)*(balanceManager_.getCoinValue()/lineManager_.getLinesNumber())
                    ret.win.lineCoinsWin=Number(json.state.cap);
                    ret.win.total=Number(json.state.cap)*(balanceManager_.getCoinValue()/lineManager_.getLinesNumber());

                    json.state.cap=ret.win.lineWin;
                    ret.state.totalWin= json.state.cap;
                    ret.freeSpin.totalWin=json.state.cap;
                    ret.freeSpin.object.totalWin=json.state.cap;
                }

            }

        }else if (json.results!=undefined  && json.type!="replay"){
            ret.state=json.state;       //state ogjst, done for WW safes
            ret.status.state=json.state.status;
            //stake
            if (json.bet!=undefined && json.bet.stake!=undefined && json.bet.stake>0){ //barbarian went live with default bet not working as when the dfault should have been set this stake was at 0
                ret.status.stake=json.bet.stake*100;
            }

            if(json.type=="setup"){
                if (json.state.tumble!=undefined && json.state.tumble==true){
                    ret.status.type="tumble";
                }else{
                    ret.status.type="NORMAL";
                }
                ret.status.totalWin=json.state.totalWin;
                if (json.state.numTumbles)ret.status.numTumbles=json.state.numTumbles;
                if (json.state.numFuels)ret.status.numFuels=json.state.numFuels;
                // collected: "0"
                // hand: "normal"
                // multiplier: 1
                // numFS: 0
                // numTumbles: 0
                // reels: [{id: 0,…}, {id: 1,…}, {id: 2,…}, {id: 3,…}, {id: 4,…}, {id: 5,…}]
                // slotsID: -1
                // stage: 1
                // stake: 1500
                // totalWin: 0
                // type: "normal"
                // unsettledTotal: 0

            }else{


            }

            //total win
            if (json.config.win!=undefined){
                //ret.status.totalWin=json.config.win.total;
            }
            ret.freeSpin={};
            if (json.state.status=="FREESPINS_TRIGGER"){
                ret.freeSpin={};
                ret.freeSpin.won=json.state.freespinsRemaining;
                ret.freeSpin.multiplier=json.state.mult;
                ret.freeSpin.num=json.state.freespinsRemaining;
                //ret.freeSpin.totalWin=json.state.totalWin*(balanceManager_.getCoinValue()/ lineManager_.getLinesNumber());
            }else if (json.state.status=="FREESPINS"){
                ret.freeSpin={};
                ret.freeSpin.won=(json.state.wonAdditionalSpins>0)?json.state.wonAdditionalSpins:0;
                ret.freeSpin.multiplier=json.state.mult;
                ret.freeSpin.num=json.state.freespinsRemaining;
                if(balanceManager_ !=undefined && lineManager_!=undefined){
                    ret.freeSpin.totalWin=json.state.totalWin*(balanceManager_.getCoinValue()/ lineManager_.getLinesNumber());
                }else{
                    ret.freeSpin.totalWin=json.state.totalWin;
                }
                ret.freeSpin.object=json.state;
            }
        }else if ( json.type=="replay"){
            ret.scatter={};
            ret.total= json.results.total;
            ret.spins=[];
            ret.spins[0]={};
            reelObj=ret.spins[0];
            reelObj.bonus=0;
            reelObj.jackpot=0;
            reelObj.line = {};
            reelObj.scatter = {};
            reelObj.reel = [];
            if (json.state!=undefined && json.state.cap!=undefined){
                    reelObj.cap=Number(json.state.cap)*(balanceManager_.getCoinValue()/lineManager_.getLinesNumber());
            }else{
                reelObj.cap=0;
            }
            for (var a = 0; a < json.results.reels.length; a++) {
                var o = {};
                o.id = a;
                o.smb=[];
                for (var b = 0; b < json.results.reels[a].length ; b++) {
                    var oo = {};
                    oo.id = b;
                    oo.smb=json.results.reels[a][b].smbID;
                    if (json.results.reels[a][b].prevSmbID!=undefined)oo.prevSmbID=json.results.reels[a][b].prevSmbID;
                    o.smb.push(oo);
                }

                //putting top reel symbols on top of normal reels
                if (a>0 && a<5 && json.horizontalReel!=undefined){
                    if (json.horizontalReel[0][a-1]!=undefined ) {
                        var oo = {};
                        oo.id = a-1;
                        oo.smb=json.horizontalReel[0][a - 1].smbID;
                        o.smb.unshift(oo);
                    }
                }

                reelObj.reel.push(o);
            }
            for (var a = 0; a < json.results.win.symbolWin.symbols.length; a++) {
                var o = {};
                var dir=json.results.win.symbolWin.symbols[a].dir;
                o.amt= json.results.win.symbolWin.symbols[a].amt;
                o.count= json.results.win.symbolWin.symbols[a].num;
                o.id= Number(json.results.win.symbolWin.symbols[a].lineID)+1;
                o.smb= Number(json.results.win.symbolWin.symbols[a].lineID)+1;
                o.mult= json.results.win.symbolWin.symbols[a].mult;
                o.multiplier=o.mult;
                o.dir=dir;
                o.smbDir= Number(json.results.win.symbolWin.symbols[a].smbID);
                o.wild= [];
                reelObj.line[Number(json.results.win.symbolWin.symbols[a].lineID)+1]=o;
            }

            if (json.results.win.scatterWin!=undefined && json.results.win.scatterWin.scatters!=undefined) {
                for (var a = 0; a < json.results.win.scatterWin.scatters.length; a++) {
                    var o = {};
                    o.amt = json.results.win.scatterWin.scatters[a].amt;
                    o.type = (json.results.win.scatterWin.scatters[a].bonusWon != undefined) ? json.results.win.scatterWin.scatters[a].bonusWon.toLowerCase() : "scatter";
                    o.win = (json.results.win.scatterWin.scatters[a].amt != undefined) ? json.results.win.scatterWin.scatters[a].amt : 0;
                    o.multiplier = json.results.win.scatterWin.scatters[a].mult;
                    o.numSymbols = json.results.win.scatterWin.scatters[a].num;
                    o.fsAwarded = (json.results.win.scatterWin.scatters[a].bonusWonValue != undefined) ? json.results.win.scatterWin.scatters[a].bonusWonValue : 0;
                    o.reels = [1, 1, 1, 1, 1];
                    o.scatterObj=json.results.win.scatterWin.scatters[a];
                    reelObj.scatter[json.results.win.scatterWin.scatters[a].smbID] = o;
                }
            }
            if (json.state!=undefined){
                reelObj.state=json.state;
            }

            if (json.state!=undefined){
                if(json.state.status== "FREESPINS_TRIGGER"){
                    ret.spins[0].freeSpin={};
                    ret.spins[0].freeSpin.won=json.state.freespinsRemaining;
                    ret.spins[0].freeSpin.multiplier=json.state.mult;
                    ret.spins[0].freeSpin.num=json.state.freespinsRemaining;
                    ret.spins[0].bonus= ret.spins[0].freeSpin;
                }else if (json.state.status== "FREESPINS"){
                    ret.spins[0].freeSpin={};
                    ret.spins[0].freeSpin.multiplier=json.state.mult;
                    if(json.state.wonAdditionalSpins!=undefined && json.state.wonAdditionalSpins>0){
                        ret.spins[0].freeSpin.num=json.state.wonAdditionalSpins;
                        ret.spins[0].freeSpin.multiplier=(json.state.preMult)?json.state.preMult:json.state.mult;
                        ret.spins[0].bonus= ret.spins[0].freeSpin;
                    }else{
                        ret.spins[0].multiplier=(json.state.preMult)?json.state.preMult:json.state.mult;;
                    }
                }
            }
            if(json.state!= undefined && gameParams.gameOriginalID==7029 ) { //santa's harp
                ret.spins[0].harp ={};
                ret.spins[0].harp.harpBonusID = (json.state.harpBonusID>0)?json.state.harpBonusID:undefined;
                ret.spins[0].harp.harpBonusValue = json.state.harpBonusValue;
            }
        }

        console.log (ret)
        return ret;
    }

    function gcmErrorHandler_(){
        if (autoPlayManager_!=undefined) {
            if (autoPlayManager_.getIsInAutoPlay()) {
                autoPlayManager_.toggleAutoPlay();
                framework.setAutoPlayState(0);
            }
            spinManager_.stopSpinForError();
        }
        if (framework!=undefined) {
            if(buttonManager_!=undefined)buttonManager_.applyState("NH");
            if (ReelConfig.newUI && !framework.isTouch()) {
                if(window.newUI!=undefined && window.newUI.autospin !=undefined)window.newUI.autospin().state = 'START';
            }
        }

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

    var me = {
        sendNHReq: sendNHReq_,
        sendBonusReq: sendBonusReq_,
        sendServletRequest: sendServletRequest_,
        sendServletBfRequest:sendServletBfRequest_,
        sendServleForceSpinReq: sendServleForceSpinReq_,
        sendBalanceReq: sendBalanceReq_,
        freeRoundsRequest: freeRoundsRequest_,
        uniqueBetValuesRequest: uniqueBetValuesRequest_,
        rtpMaxChanceRequest:rtpMaxChanceRequest_,
        getBalance: getBalance_,
        getResumeStatus: function() {
            return status_;
        },
        resetResumeStatus: function() {
            return status_.status.type = "";
        },
        startForceDemo:function (id){
            forceDemoID_=id;
            forceProgressive_=0;
            forceUrlReplay_=false;
        },
        startForceReplay:function (id) {
            forceUrl_=  forceDemo["win"+id][0].url; // document.getElementsByName("seed")[0].value;
            forceGameIds_=  forceDemo["win"+id][0].spinsID// document.getElementsByName("lastSeed")[0].value.split(",");
            forceBuyIn_=  (forceDemo["win"+id][0].buy==true)?true:false;
            forceDemoID_=id;
            forceProgressive_=0;
            forceUrlReplay_=true;
        }
    };
    initClass_();

    return me;

}
