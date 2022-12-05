/**
 * KiS Framework, Created by Fabry on 04/04/2016.
 */
function BonusManager(gameRef, gameClass) {
    var game_ = gameRef;
    var gameClass_ = gameClass;
    var bonusGroup_=[];
    var panelGroup_;
    var bonusData_=[];
    var bonusButtons_=[];
    var panel_=true;
    var totalWon_;
    var baseMult_;
    var bonusMult_;
    var panelToutIn_;
    var panelToutOut_;
    var panelSound_;
    var bonusTriggered_="";
    var evtManager_;
    var lineEvalTOut_=0;
    var isResume_=false;

    function initClass_(){
        panelGroup_ = displayManager_.getGroup("panelBonus");
        if(displayManager_.getGroup("panelBonus")!=null) {
            if (displayManager.groups.panelBonus != null)panelToutIn_ = displayManager.groups.panelBonus.configuration.durationIn;
            if (displayManager.groups.panelBonus != null)panelToutOut_ = displayManager.groups.panelBonus.configuration.durationOut;
            if (displayManager.groups.panelBonus != null)panelSound_ = displayManager.groups.panelBonus.configuration.sound;
            panelGroup_.visible = false;
        }
        evtManager_ = new EventManager();
    }

    function addBonus_(name){
        if (displayManager_.getGroup(name)!=null) {
            bonusGroup_[name] = displayManager_.getGroup(name);
            bonusGroup_[name].visible = displayManager.groups[name].visible;
            bonusData_[name] = {};
            build_(name);
        }else{
            console.log("error looking for bonus GFX configuration " + name);
        }
    }

    function initBonus_(json){
        var name=json.bonusSetup.bonusType;
        bonusTriggered_=name;
        balanceManager_.setCanUpdate(false);

        //stop autoplay
        autoPlayManager_.toggleFeature(true);
        autoPlayManager_.setCanAp(false);
        //stop lines
        lineManager_.clearLine();

        buttonManager_.applyHide();

        evtManager_.clearEvt();

        if (isResume_==false && (json.bonusSetup.paths!=null || json.bonusSetup.picks ==undefined ||json.bonusSetup.picks.length==0 )){
            //animate reel bonus icons
            evtManager_.addEvtForce(startIconAnim_,0);
            evtManager_.addEvtForce(startBonusIntroMusic_,panelToutIn_);
            if (panel_){
                evtManager_.addEvtForce(openPanel_,0,[Translate.do("Congratulation"),Translate.do("you won")+" "+ displayManager.groups[name].name ,""]);
                // setTimeout(checkFs_,panelToutIn_);
                evtManager_.addEvtForce(openBonus_,panelToutOut_,[name,json.bonusSetup]);
            }else{
                evtManager_.addEvtForce(openBonus_,0,[name,json.bonusSetup]);
            }
        }else {
            evtManager_.addEvtForce(openBonus_,panelToutIn_,[name,json.bonusSetup]);
        }
        evtManager_.triggerEvt();
    }

    function startBonusIntroMusic_(){
        soundManager_.playSound("bonus-intro");
    }

    function checkFs_(){
        if (freeSpinsManager_.getIsInFs()){
            freeSpinsManager_.hideFs();
        }
    }

    function startIconAnim_(){
        gameClass_.playTriggeredSmb();
    }

    function closePanel_(){
        panelGroup_.visible=false;
    }
    
    function openPanel_(par){
        var msg1=par[0];
        var msg2=par[1];
        var msg3=par[2];

        panelGroup_.visible=true;
        panelGroup_.alpha=1;
        if (panelSound_!=null && panelSound_!="")soundManager_.playSound(panelSound_);
        displayManager_.getText("txtChestPanel1").setText(msg1);
        displayManager_.getText("txtChestPanel2").setText(msg2);
        displayManager_.getText("txtChestPanel3").setText(msg3);
        //todo tween
    }

    function openBonus_(par){
        var name= par[0];
        var json=par[1];

        panelGroup_.visible = false;
        bonusData_[name].bonusClass.initBonus(json);
        framework.hideFramework();
    }

    function closeBonus_(name,state){
        totalWon_=baseMult_*bonusMult_;
        if(state.totWinCash!=null){

            winManager_.setWinAmountBonus(Number(state.totWinCash));
        }
        if (state.collect==true && state.double==true){
            //user choice
            messageBox_.showMessageYN(Translate.do("Congratulation, you won"),0, Translate.do("would you like to gamble?"), acceptGamble_, declineGamble_);
        }else if (state.collect==true && state.double==false){
            if (balanceManager_.getShowIncredits()==false) {
                if (Number(state.baseMult) > 1)
                    openPanel_([Translate.do("You've won"), state.baseMult + " x " + state.totMult + " x " + Util.formatNumber(state.stake, Util.getNubersOfDecimal()) + " = ", ""]);
                else
                    openPanel_([Translate.do("You've won"), state.totMult + " x " + Util.formatNumber(state.stake, Util.getNubersOfDecimal()) + " = ", ""]);
            }else{
                if (Number(state.baseMult) > 1)
                    openPanel_([Translate.do("You've won"), state.baseMult + " x " + state.totMult + " x " + Util.formatNumber(Number(state.stake)/ balanceManager_.getCoinValue()*lineManager_.getLinesNumber(), Util.getNubersOfDecimal()) + " = ", ""]);
                else
                    openPanel_([Translate.do("You've won"), state.totMult + " x " + Util.formatNumber(Number(state.stake)/ balanceManager_.getCoinValue()*lineManager_.getLinesNumber(), Util.getNubersOfDecimal()) + " = ", ""]);
            }
            var time=lineManager_.showBonusWin(state.totWin,state.totWinCash)/2;
            setTimeout(declineGamble_,time +panelToutOut_);
        }else if (state.collect==false && state.double==true){
            //can only double (can't happen)
        }
    }

    function acceptGamble_() {
        communicationManager_.sendServletRequest("double");
    }

    function declineGamble_() {
        communicationManager_.sendServletRequest("collect");
    }

    function collectCallBack_(json) {
        //soundManager_.mixBgSound("bgSlot", 1000, 1000);
        if(freeRoundsManager_.getIsInFr()==false)balanceManager_.forceBalanceAfterFS(Number(json.status.collectTotal) / 100);
        //update FR value
        var p={};
        p.value=Number(json.status.collectTotal) / 100;
        freeRoundsManager_.parse(p);


        if (balanceManager_.getShowIncredits()==false) {
            lineManager_.completeBonusValue(Number(json.status.collectTotal) / 100, "Bonus Win");
        }else{
            lineManager_.completeBonusValue((Number(json.status.collectTotal) / 100) / balanceManager_.getCoinValue()*lineManager_.getLinesNumber(), "Bonus Win");
        }
        setTimeout( hideBonus_,1000,json);
    }

    function hideBonus_(json){
        var name = json.name;
        var totalWon=Number(json.status.collectTotal)/100;
        balanceManager_.setCanUpdate(true);
        isResume_=false;
        bonusData_[name].bonusClass.hideBonus();
        panelGroup_.visible=false;
        bonusGroup_[name].visible=false;
        bonusTriggered_="";
        if (json.status !=null ){
            //gameClass_.changeBet(json.status.stake/100);
        }

        framework.showFramework();
        if (totalWon==0){
            buttonManager_.applyRestore();
            gameClass_.evaluateWinnings();
            autoPlayManager_.toggleFeature(false);
            autoPlayManager_.setCanAp(true);
        }else{
            soundManager_.stopSound("incWin");
            var time=lineManager_.showBonusCentralWinGreetings(totalWon / balanceManager_.getCoinValue()*lineManager_.getLinesNumber())/2;
            lineEvalTOut_=setTimeout(goBackAfterCentralWin_,time);
        }
    }

    function goBackAfterCentralWin_(){
        autoPlayManager_.setCanAp(true);
        lineManager_.stopBigWinAnimation();
        buttonManager_.applyRestore();
        gameClass_.evaluateWinnings();
        autoPlayManager_.toggleFeature(false);
        idleCycleManager_.startIdleCycle();
        if (gameClass_.frStop!=null)gameClass_.frStop();
    }

    function sendRequest_(par){
        communicationManager_.sendServletRequest("bonus","&pick=" + par);
    }

    function parse_(json){
        bonusData_[json.name].bonusClass.parse(json);

    }

    function build_(name){
        try{
            bonusData_[name].bonusClass = new window[name](game_,gameClass_,displayManager.groups[name],me,name);
        }catch(e){
            console.log("error looking for bonus class " + name);
        }
    }

    var me={
        initBonus:initBonus_,
        addBonus:addBonus_,
        parse:parse_,
        openBonus:openBonus_,
        closeBonus:closeBonus_,
        getBaseMult:function(){
            return baseMult_;
        },
        getBonuses:function(){
            return bonusData_;
        },
        getMultiplier:function() {
            return bonusMult_;
        },
        sendRequest:sendRequest_,
        collectCallBack:collectCallBack_,
        getTriggeredBonus:function () {
            return bonusTriggered_;
        },
        clearLineEval:function(){
            clearTimeout(lineEvalTOut_);
        },
        openPanel:openPanel_,
        closePanel:closePanel_,
        setResumeFlag:function(val){
            isResume_=val;
        }
    }


    initClass_();
    return me;
}



