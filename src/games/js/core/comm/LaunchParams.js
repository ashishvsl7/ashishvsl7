/**
 * KiS Framework, Created by Tom on 10/05/2016.
 This is an object that retrieves and stores the login information
 */
function LaunchParams() {

    var gameParams_, regParams_, login_;

    function initClass_() {
        gameParams_ = {
            path: getParameterByName('path'),
            installID: getParameterByName('installID'),
            accountID: getParameterByName('acc_id'),
            site: getParameterByName('site'),
            version: getParameterByName('gameVersion'),
            gameID: getParameterByName('gameID'),
            gameOriginalID: getOriginalGameID('gameID'),
            lang: getParameterByName('language'),
            pathCDN: getParameterByName("pathCDN"),
            lobbyurl: getParameterByName('lobbyUrl'),
            hideHome: getParameterByName('hidehome'),
            gcmEnv: getParameterByName('NYX_GCM_ENV'),
            gcmParams: getParameterByName('NYX_GCM_PARAMS'),
            ukGCLink: getParameterByName('ukGCLink'),
            channel: getParameterByName('channel'),
            fun_real: getParameterByName('playMode'),
            gameName: getParameterByName('gameName'),
            gameType: getParameterByName('gameType'),
            folderName: getParameterByName('folderName'),
            force: getParameterByName('force'),
            seeding:getParameterByName('seeding'),
            singleTexts:getParameterByName('singleTexts'),
            confType: getParameterByName('confType') || 2,
            doLog: getParameterByName('log') || false,
            clientName: getParameterByName('clientName') || false,
            forceMobile: getParameterByName('forceMobile') || false,
            slotEngine: "",
            balanceBeforeSpin: getParameterByName('balanceBeforeSpin') || false,
            luncherCurrency: getParameterByName('currency') || "",
            setChannel:function (str) {setChannel_(str);}
        };

        if (isNaN(gameParams_.confType)) {
            gameParams_.confType = 2;
        }

        if (gameParams_.folderName === "paint") {
            gameParams_.confType = 1;
        }

        console.log("lobbyUrl: " + gameParams_.lobbyurl )
        if(gameParams_.lobbyurl === "null"){
            gameParams_.lobbyurl = window.location.href;
            gameParams_.hideHome=true;
            //reload rather than go to null page
        }

        //to store uk reg parameters
        regParams_ = {
            jurisdiction: getParameterByName('jurisdiction'),
            realitycheck_uk_elapsed: getParameterByName('realitycheck_uk_elapsed'),
            realitycheck_uk_limit: getParameterByName('realitycheck_uk_limit'),
            realitycheck_uk_proceed: getParameterByName('realitycheck_uk_proceed'),
            realitycheck_uk_exit: getParameterByName('realitycheck_uk_exit'),
            realitycheck_uk_history: getParameterByName('realitycheck_uk_history'),
            realitycheck_uk_autospin: getParameterByName('realitycheck_uk_autospin')
        };

        var longLanguages = ["de", "es", "fr", "gr", "it", "jp", "no", "pl", "pt", "ru", "se", "tr"];
        for (var i = 0; i < longLanguages.length; i++) {
            if (gameParams_.lang === longLanguages[i]) {
                $("html").addClass("has--long--text");
                break;
            }
        }

        $('body').attr({
            "data-jurisdiction": regParams_.jurisdiction,
            "data-playMode": gameParams_.fun_real
        });
    }

    function setChannel_(str){
        gameParams_.channel=str;
    }

    function setMobile_(isMobile){

        if (isMobile && gameParams_.site.split("")[0] !== "-") {
            var s ="1";
            if (gameParams_.site!=null && gameParams_.site!="null" && gameParams_.site!="" ){   //avoid problems on test site but need to be tested properly on client staging
                s=gameParams_.site;
            }
            gameParams_.site = "-" +s;
        }

    }

    function doLogin_() {

        login_ = new Login(gameParams_, regParams_);
    }

    function getGameParams_() {
        return gameParams_;
    }

    function getRegParams_() {

        return regParams_;
    }

    function getLoginParams_() {

        return login_.gameInfo;
    }

    function getCurrencySmb_() {

        logger("login: " + login_.getCurrencySmb());

        return login_.getCurrencySmb();
    }

    function getParameterByName(name) { //get param sent to window
        var ret="";

        if (_checkStorage()=='true' && sessionStorage.getItem(name)) {
            ret =sessionStorage.getItem(name);
            if (name==="gameName") {
                ret= ret.replace(/%20/g, " ");
                ret=checkForNumbers(ret.split(""));
            }
            return ret;
        }

        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        ret= results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));

        if (name==="gameName") {
            ret= ret.replace(/%20/g, " ");
            ret=checkForNumbers(ret.split(""));
        }
        return ret;
    }

    function checkForNumbers(questionText){
        var index = 0;
        var ret = "";

        for (var a=1;a<questionText.length;a++)
        {
            if (isNaN(questionText[a]) || questionText[a]==" "){
                ret=ret+questionText[a];
            }
        }
        return questionText[0]+ ret;
    }

    function getOriginalGameID(name){
        var id =getParameterByName(name);

        if (Number(id)>=7500){
            //branded additional IDs over 7500
            id = setCharAt(id,1,"5");
        }else{
            id= setCharAt(id,1,"0");
        }

        return id;
    }

    function setCharAt(str,index,chr) {
        if(index > str.length-1) return str;
        return str.substring(0,index) + chr + str.substring(index+1);
    }


    var params = {
        getGameParams: getGameParams_,
        getRegParams: getRegParams_,
        getLoginParams: getLoginParams_,
        getCurrencySmb: getCurrencySmb_,
        setMobile:setMobile_,
        setChannel:setChannel_,
        doLogin: doLogin_
    };
    initClass_();

    return params;

}
