/**
 * KiS Framework, Created by Fabry on 13/04/2016.
 */
function FreeRoundsManager(gameRef,gameClass) {
    var game_ = gameRef;
    var gameClass_ = gameClass;
    var freeRoundsClass_;
    var waiting_=false;//todo remove
    var activationId_;
    var campaignId_;
    var expire_;
    var canReject_;
    var message_;

    var frObject={"activationID" : "bo20171012104617312.246","campaignID" : "1x2_CherryBlast", "endDate":9999999999999,"totalValue" : "120.00","message" : "ggRxKMS6dFI nncqsi3jmx f0s7bFu7GLYrlmM6PE wollopucCb6 DaP2ZRunbb0U  8E MM4n  Dlbnf9eWc7JtOn53RDTCipUYXxUbmQgCN7t5gA f14CBNrs 9fc3m0RV2 QN",
        "status" : {"state" : "OFFERED","numOptions" : "1","canReject" : "1","options" : [{"id" : 1,"betlevel" : 10.00000, "rounds" : 2},{"id" : 2,"betlevel" : 5.00000, "rounds" : 20},{"id" : 3,"betlevel" : 0.40000, "rounds" : 40},{"id" : 4,"betlevel" : 0.20000, "rounds" : 10}]}};

/*
    var frObject={"activationID" : "bo20171012104617312.246","campaignID" : "1x2_CherryBlast","totalValue" : "120.00",
        "status" : {"state" : "INPROGRESS","numOptions" : "1","canReject" : "0","betlevel" : 12.00000, "remaining" : 2,"totalwin" : 12.00000}};
    gameInfo.freeRoundsAvailable=true;
 */
    function initClass_(){

        if (ReelConfig.freeRounds=="normal")
            freeRoundsClass_= new FreeRounds(game_,gameClass_);

        //setInterval(fakeFrGenerator_,1000);

    }

    function fakeFrGenerator_() {
        if (waiting_ == false && buttonManager_.getCurrentState() == "NH" ) {
            if (freeRoundsClass_.getIsInFr() == false) {
                if (typeof frObject === Array) {
                    for (var a in frObject) {
                        if (waiting_ == false && me.handleFr() && frObject[a].status.options != null) {
                            activationId_ = frObject[a].activationID;
                            campaignId_=frObject[a].campaignID;
                            expire_=frObject[a].endDate;
                            frObject[a].status.options.canReject=frObject.status.canReject;
                            message_=frObject[a].message;
                            frWon_(frObject[a].status.options);
                            frObject[a] = null;
                        }
                    }
                } else {
                    if (waiting_ == false && frObject!=null && frObject.status.state.toUpperCase()=="INPROGRESS") {
                        buttonManager_.applyHide();
                        activationId_ = frObject.activationID;
                        campaignId_ = frObject.campaignID;
                        expire_=frObject.endDate;
                        message_=frObject.message;

                        frObject.status.options = [];
                        frObject.status.options[0] = {};
                        frObject.status.options[0].rounds = frObject.status.remaining;
                        frObject.status.options[0].betlevel = frObject.status.betlevel;
                        frObject.status.options[0].totWon = frObject.status.totalwin;
                        frObject.status.options[0].id = activationId_;


                        waiting_ = true;
                        freeRoundMessageReq_.showMessage(frObject.status.remaining + " "+Translate.do("Free Rounds remaining"), Translate.do("with bet") + " " + balanceManager_.geBalanceObj().currency + Util.formatNumber(frObject.status.betlevel, Util.getNubersOfDecimal()), acceptFrResume_, frObject.status.options);
                        frObject = null;
                    } else if (waiting_ == false && me.handleFr() && frObject!=null && frObject.status.options != null) {
                        activationId_ = frObject.activationID;
                        campaignId_=frObject.campaignID;
                        expire_=frObject.endDate;
                        message_=frObject.message;
                        frObject.status.options.canReject=frObject.status.canReject;
                        frWon_(frObject.status.options);
                        frObject = null;
                    }
                }
            }
        }


    }

    function frChecker_() {
/* to fake FS resume
        if (waiting_ == false && frObject.status.state.toUpperCase()=="INPROGRESS" ) {
            buttonManager_.applyHide();
            activationId_ = frObject.activationID;
            campaignId_ = frObject.campaignID;
            expire_ = frObject.endDate;

            frObject.status.options = [];
            frObject.status.options[0] = {};
            frObject.status.options[0].rounds = frObject.status.remaining;
            frObject.status.options[0].betlevel = frObject.status.betlevel;
            frObject.status.options[0].totWon = frObject.status.totalwin;
            frObject.status.options[0].id = activationId_;

            waiting_ = true;
            freeRoundMessageReq_.showMessage(frObject.status.remaining + " " + Translate.do("Free Rounds remaining"), Translate.do("with bet") + " " + balanceManager_.geBalanceObj().currency + Util.formatNumber(frObject.status.betlevel, Util.getNubersOfDecimal()), acceptFrResume_, frObject.status.options);
            frObject = null;
        }
*/
        if (gameInfo.freeRoundsAvailable) {
            if (waiting_==false ) {
                if (freeRoundsClass_.getIsInFr() == false) {
                    communicationManager_.freeRoundsRequest("mode=getInfo").done(function (response) {
                        //handle response and show message here
                        //response is the json you need for free rounds choice
                        frObject = response.response;
                        if (typeof frObject === Array &&  (buttonManager_.getCurrentState() == "NH" || communicationManager_.getResumeStatus().status.hand=="bonus")) {
                            for (var a in frObject) {
                                if (waiting_ == false && me.handleFr() && frObject[a].status.options != null) {
                                    activationId_ = frObject[a].activationID;
                                    campaignId_ = frObject[a].campaignID;
                                    expire_=frObject[a].endDate;
                                    frObject[a].status.options.canReject=frObject.status.canReject;
                                    message_=frObject[a].message;
                                    frWon_(frObject[a].status.options);
                                    frObject[a] = null;
                                }
                            }
                        } else if (frObject.error_code==-1){
                            setTimeout(frChecker_,4000);
                            return;
                        }else{
                            if (waiting_ == false && frObject.status.state.toUpperCase()=="INPROGRESS" ){
                                buttonManager_.applyHide();
                                activationId_=frObject.activationID;
                                campaignId_=frObject.campaignID;
                                expire_=frObject.endDate;
                                message_=frObject.message;

                                frObject.status.options=[];
                                frObject.status.options[0]={};
                                frObject.status.options[0].rounds=frObject.status.remaining;
                                frObject.status.options[0].betlevel=frObject.status.betlevel;
                                frObject.status.options[0].totWon=frObject.status.totalwin;
                                frObject.status.options[0].id=activationId_;

                                waiting_=true;
                                freeRoundMessageReq_.showMessage(frObject.status.remaining+ " " + Translate.do("Free Rounds remaining"), Translate.do("with bet")+ " "+ balanceManager_.geBalanceObj().currency+  Util.formatNumber(frObject.status.betlevel, Util.getNubersOfDecimal()) , acceptFrResume_,frObject.status.options);
                                frObject = null;
                            }else if (waiting_ == false && me.handleFr() && frObject.status.options != null && buttonManager_.getCurrentState() == "NH") {
                                activationId_=frObject.activationID;
                                campaignId_=frObject.campaignID;
                                expire_=frObject.endDate;
                                message_=frObject.message;
                                frObject.status.options.canReject=frObject.status.canReject;
                                frWon_(frObject.status.options);
                                frObject = null;
                            }
                        }
                    });
                }
            }
            //setTimeout(frChecker_,5000);
        }
    }

    function convertDateForIos(date) {
        try{
            var arr = date.split(/[- :]/);
            date = new Date(arr[0], arr[1]-1, arr[2], arr[3], arr[4], arr[5]);
            return date;

        }catch (e){
            return new Date(date);
        }
        return date;
    }
    function frWon_(obj){
        //can handle 1 FR set at the time
        //when a FR message come inside a FR will be ignored
        //This has been done cause Luke told me the admin doesn't allow to create more than 1 FR for the same game.
        if (buttonManager_.getCurrentState()=="NH") {
            if (freeRoundsClass_.getIsInFr()==false) {
                freeRoundsClass_.frWon(obj);
                activeFreeRounds_(obj);
            }
        }else{
            setTimeout(frWon_,500,obj);
        }
    }

    function frExpires_(){
        if (waiting_)return;
        if (buttonManager_.getCurrentState()=="NH") {
            waiting_=true;
            //todo buttonManager_.disableAll();
            freeRoundsClass_.frExpires();
        }else
            setTimeout(frExpires_,500);
    }

    function activeFreeRounds_(obj){
        if (freeRoundsClass_==null)return;
        if(freeRoundsClass_.getFrWon()) {
            if (buttonManager_.getCurrentState()=="NH") {
                waiting_=true;
                //todo buttonManager_.disableAll();
                buttonManager_.applyHide();
                freeRoundMessageReq_.showMessageYN(Translate.do("Free Rounds awarded, please choose your option"), Translate.do("Expiring date") + ":" + expire_, acceptFr_, declineFr_,message_,obj);
            }else
                setTimeout(activeFreeRounds_,500,obj);
        }
    }

    function acceptFr_(arg){
       communicationManager_.freeRoundsRequest("mode=choice&pick=" + arg.id +"&activationID="+activationId_+"&campaignID="+campaignId_).done(function(response) {
            //handle callback
            freeRoundsClass_.frWon(arg);
            freeRoundsClass_.showFrPanel(arg);
            setTimeout(freeRoundsClass_.hideFrPanel,displayManager.groups.frWonPanel.duration*1000 );
            setTimeout(startFr_,(displayManager.groups.frWonPanel.duration*1000) +200,arg);
       });
    }

    function acceptFrResume_(arg){
        freeRoundsClass_.frWon(arg);
        setTimeout(startFr_,2000);
    }

    function startFr_(arg){
        // var d=convertDateForIos(expire_);
        // expire_=d.getTime()-new Date().getTime();
        // setTimeout(frExpires_, Math.min(2147483646,expire_));
        if (freeSpinsManager_.getIsInFs()==false)buttonManager_.applyRestore();
        freeRoundsClass_.toggleFreeRounds();
        waiting_=false;
        arg=null;
        if (gameClass_.frStart!=null)gameClass_.frStart();
    }

    function declineFr_(arg){
        arg.started=2;
        buttonManager_.applyRestore();
        waiting_=false;
    }

    function addWin_(amt){
        win_+=amt;
    }

    function parse_(json){
        freeRoundsClass_.parse(json);
    }

    var wC_=0;
    function startHidePanel_(win,winCash) {
        wC_=winCash;
         balanceManager_.forceBalanceAfterFR(winCash);
        if (balanceManager_.getShowIncredits()==false) {
            lineManager_.completeBonusValue(winCash, Translate.do("Free Rounds Win"));
        }else{
            lineManager_.completeBonusValue(win,  Translate.do("Free Rounds Win"));
        }
    }

    function completeDidePanel_(win){
        lineEvalTOut_=0;
        if (!updateBalanceOnFr_()) {
            //update total FR only if i wasn't updating after each spin (relaxpp)
            gcmCalls_("ANIMATION_END", null, true);
            if (freeSpinsManager_.getIsInFs() == false) clientMessageSend("play-end", wC_);
        }
        freeRoundsClass_.setIsInFr(false);
        autoPlayManager_.toggleFeature(false);

        freeRoundsManager_.resetWaintingFlag();
        displayManager_.getGroup("freeRounds").visible=false;
        if (win>0){
            if (gameParams.gameOriginalID=="7013" || gameParams.gameOriginalID=="7015" || gameParams.gameOriginalID=="7016" || gameParams.gameOriginalID=="7017"  || gameParams.gameOriginalID=="7019" || isBrandedMw() || gameParams.gameOriginalID=="7023"){
                if(balanceManager_.getShowIncredits()==false) {
                    win=  win  *balanceManager_.getCoinValue()/ lineManager_.getLinesNumber();
                }
            }
            var time=lineManager_.showBonusCentralWinGreetings(win);
            lineEvalTOut_=setTimeout(goBackAfterCentralWin_,time);
        }else{
            autoPlayManager_.setCanAp(true);
            buttonManager_.applyRestore();
        }


        if (gameClass_.frStop!=null)gameClass_.frStop();
        //gameClass_.hideFs(lineEvalTOut_);
    }

    function goBackAfterCentralWin_(){
        autoPlayManager_.setCanAp(true);
        lineManager_.clearLine();
        //lineManager_.idle(true);
    }

    var me={
        parse:parse_,
        activeFreeRounds:activeFreeRounds_,
        frWon:frWon_,
        frExpires:frExpires_,
        frChecker:frChecker_,
        startHidePanel:startHidePanel_,
        completeDidePanel:completeDidePanel_,
        resetWaintingFlag:function(){
            waiting_=false;
        },
        getFrWon:function(){
            return freeRoundsClass_.getFrWon();
        },
        getFrNumber:function(){
            return freeRoundsClass_.getFrNumber();
        },
        getIsInFr:function(){
            return freeRoundsClass_.getIsInFr();
        },
        updateFreeRoundsNum:function(){
            if (freeRoundsClass_!=null && freeSpinsManager_.getIsInFs()==false && freeRoundsClass_.getIsInFr()==true)
                freeRoundsClass_.updateFreeRoundsNum();
        },
        updateFreeRoundsTot:function(){
            if (freeRoundsClass_!=null && freeSpinsManager_.getIsInFs()==false && freeRoundsClass_.getIsInFr()==true)
                freeRoundsClass_.updateFreeRoundsTot();
        },
        getFreeRoundsEval:function(){
            return freeRoundsClass_.getFreeRoundsEval();
        },
        addWin:function(amt){
            freeRoundsClass_.addWin(amt);
        },
        handleFr:function(){
            return (freeRoundsClass_==null)?false:true;
        },
        getActivationID:function (){
            return activationId_;
        },
        getCampaignID:function () {
            return campaignId_;
        },
        updateFrBalance:function (val){
            freeRoundsClass_.updateFrBalance(val);
        }
    }
    initClass_();
    return me;
}
