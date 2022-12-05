/**
 * KiS Framework, Created by Fabry on 13/04/2016.
 */
function FreeRounds(gameRef,gameClass) {
    var game_ = gameRef;
    var gameClass_ = gameClass;
    var freeRoundsNum_=0;
    var isInFr_=false;
    var frWon_=false;
    var frWonNum_=0;
    var wasOnFr=false;
    var winCash_=0;
    var winFS_=0;
    var win_;
    var prevBet_;
    var frBet_;
    var emitter_=[];

    function initClass_(){
        frBet_=1;
    }

    function addWin_(amt){
        //win_+=amt;
    }

    function parse_(json){
        //json is the blance node
        if (json!=null){
            //inside FR
            if (json.value!=null && json.value>0){
                winCash_=winCash_+json.value;
            }
        }

        win_=winCash_ / balanceManager_.getCoinValue()*lineManager_.getLinesNumber();
    }

    function toggleFreeRounds_ () {
        displayManager_.getText("frValue").setText((freeRoundsNum_));
        if (isInFr_ && freeRoundsNum_>0) {
            //already in
            frWon_=false;
        } else {
            wasOnFr=true;
            frWon_=false;
            isInFr_=true;
            prevBet_=balanceManager_.getCoinValue();
            gameClass_.changeBet(frBet_);

            //first Fr
            //toggle gfx
            displayManager_.getText("frTotWonValue").setText(balanceManager_.getCurrencySmb()  + "" + Util.formatNumber(winCash_,Util.getNubersOfDecimal()) );
            displayManager_.getGroup("freeRounds").alpha=0;
            displayManager_.getGroup("freeRounds").visible=false;

            if (displayManager.groups.freeRounds.movingLogo==true) {
                TweenMax.to(displayManager_.getGroup("logo"), .3, {y: -400, ease: Bounce.easeIn, onComplete: logoOut_});
            }else{
                logoOut_();
            }
            soundManager_.mixBgSound("bgFr", 1000, 1000);
        }
    }

    function logoOut_(){
        for (var a in displayManager.groups.freeRounds.emitters){
            var anim = epsy_.loadSystem(displayManager.groups.freeRounds.emitters[a][0], 500, 500);
            displayManager.groups.freeRounds.emitters[a][0].texture = game.cache.checkImageKey("particle");
            displayManager_.getGroup("freeSpins").add(anim);
            emitter_.push(anim);
        }
        displayManager_.getGroup("freeRounds").visible=true;
        if((communicationManager_.getResumeStatus().status.hand!="freespins" || communicationManager_.getResumeStatus().status.type=="tumble") && communicationManager_.getResumeStatus().status.hand!="bonus"){
            TweenMax.to(displayManager_.getGroup("freeRounds"),.4,{alpha:1,ease:Bounce.easeOut});
            buttonManager_.applyState("NH");
        }

    }

    function updateFreeRoundsNum_ (){

        if ( freeSpinsManager_.getIsInFs()==false && freeSpinsManager_.getFsWon()==false && isInFr_ && freeRoundsNum_>=0 && (gameClass_.getIsRespin==undefined || gameClass_.getIsRespin()==false) ){
            freeRoundsNum_=freeRoundsNum_-1;
            displayManager_.getText("frValue").setText(freeRoundsNum_);
        }
    }

    function updateFreeRoundsTot_ (){
        if ( freeSpinsManager_.getIsInFs()==false && freeSpinsManager_.getFsWon()==false && isInFr_ && freeRoundsNum_>=0 ){
            displayManager_.getText("frTotWonValue").setText(balanceManager_.getCurrencySmb()  + "" + Util.formatNumber( winCash_,Util.getNubersOfDecimal()) );
        }
    }

    function showFrTotWonPanel_(){
        lineManager_.clearLine();
        for (var a in emitter_) {
            displayManager_.getGroup("freeSpins").remove(emitter_[a]);
            emitter_[a].destroy();
            emitter_[a]=null;
        }
        emitter_=[];
        displayManager_.getGroup("frWonPanel").y=-1200;
        displayManager_.getGroup("frWonPanel").visible=true;
        displayManager_.getText("frWLabel").setText(Translate.do("You won"));
        if (displayManager.groups.freeRounds.movingLogo==true) {
            TweenMax.to(displayManager_.getGroup("logo"), .3, {y: 0, ease: Bounce.easeOut});
        }
        TweenMax.to(displayManager_.getGroup("frWonPanel"),.5,{alpha:1,y:0,ease:Bounce.easeOut,onComplete:hideTotPanel_});
    }

    function hideTotPanel_(){
        win_=winCash_;
        TweenMax.to(displayManager_.getGroup("frWonPanel"),.5,{delay:displayManager.groups.frWonPanel.duration ,alpha:0,y:-1200,ease:Linear.easeIn,onStart: freeRoundsManager_.startHidePanel,onStartParams:[win_,winCash_],
        onComplete:completeDidePanel,onCompleteParams:[win_,winCash_] });
    }

    function completeDidePanel(win_,winCash_){
        if ( gameParams.gameOriginalID==7031 || gameParams.gameOriginalID==7029){
            freeRoundsManager_.completeDidePanel(winCash_,winCash_);
        }else{
            freeRoundsManager_.completeDidePanel(win_,winCash_);
        }

        gameClass_.changeBet(prevBet_);
    }
    
    function showFrPanel_(arg){
        frBet_=arg.betlevel;
        displayManager_.getGroup("frWonPanel").y=-1200;
        displayManager_.getGroup("frWonPanel").visible=true;
        displayManager_.getText("frWLabel").setText(Translate.do("Congratulation")  +" "+ Translate.do("you activated"));
        displayManager_.getText("frWLabel1").setText("Free Rounds"+ "\n"+ Translate.do("Your bet amount will be changed to")+ " " +  balanceManager_.geBalanceObj().currency+  Util.formatNumber(frBet_, Util.getNubersOfDecimal())   +"\n"+Translate.do("Good Luck!"));
        displayManager_.getText("frValue1").setText(frWonNum_);
        TweenMax.to(displayManager_.getGroup("frWonPanel"),.5,{alpha:1,y:0,ease:Bounce.easeOut});
    }

    function hideFrPanel_(){
        TweenMax.to(displayManager_.getGroup("frWonPanel"),.5,{alpha:0,y:-1200,ease:Linear.easeIut,onCOmplete:completeHide_});
    }

    function completeHide_(){
        displayManager_.getGroup("frWonPanel").visible=false;
    }

    function getFreeRoundsEval_  () {
        if (isInFr_ || frWon_){
            if (freeRoundsNum_ >0 && frWon_==false) {
                displayManager_.getText("frTotWonValue").setText(balanceManager_.getCurrencySmb()  + "" +  Util.formatNumber(winCash_,Util.getNubersOfDecimal()) );
                return true;
            }else if (frWon_){
                toggleFreeRounds_();
                return true;
            }else if (freeSpinsManager_.getIsInFs()==true || freeSpinsManager_.getFsWon()==true){
                //toggleFreeRounds_();
                return;
            }
        }
        startCloseFr_();
        return true;
    }

    function startCloseFr_(){
        wasOnFr=true;
        frWon_=false;
        isInFr_=true;
        freeRoundsNum_=0;
        setTimeout(buttonManager_.applyHide,20);
        for (var a in emitter_) {
            displayManager_.getGroup("freeSpins").remove(emitter_[a]);
            emitter_[a].destroy();
            emitter_[a]=null;
        }
        displayManager_.getText("frWLabel").setText(Translate.do("Congratulation")+ "\n" +Translate.do("You have won"));
        displayManager_.getText("frValue1").setText(balanceManager_.getCurrencySmb()  + "" + Util.formatNumber(winCash_,Util.getNubersOfDecimal()) );
        var message=Translate.do("Free Rounds has now ended")+ "\n" +Translate.do("Bet amount will now be reset back");
        if (gameParams.clientName.toUpperCase().indexOf("RELAX_PPB")>=0 ) {
            message+="\n" +Translate.do("From this point your account money will be used.");
        }
        displayManager_.getText("frWLabel1").setText(message);
        //displayManager_.getGroup("freeRounds").visible=false;
        TweenMax.to(displayManager_.getGroup("freeRounds"),.5,{alpha:0,ease:Sine.easeOut,onComplete:showFrTotWonPanel_});
        displayManager_.getText("frValue").setText("");
        soundManager_.mixBgSound("bgSlot", 1000, 1000);
    }

    function frExpires_(){
        //messageBox_.showMessage("game","Free Rounds "+Translate.do("expired"),"", expiresFr_);
    }

    function expiresFr_(){
        startCloseFr_();
    }

    var me={
        toggleFreeRounds:toggleFreeRounds_,
        getFreeRoundsEval:getFreeRoundsEval_,
        updateFreeRoundsNum:updateFreeRoundsNum_,
        updateFreeRoundsTot:updateFreeRoundsTot_,
        frExpires:frExpires_,
        addWin:addWin_,
        showFrPanel:showFrPanel_,
        hideFrPanel:hideFrPanel_,
        parse:parse_,
        getFrNumber:function(){
            return freeRoundsNum_;
        },

        getIsInFr:function(){
            return isInFr_;
        },
        setIsInFr:function(state){
            isInFr_=state;
        },
        getFrWon:function(){
            return frWon_;
        },
        frWon:function(obj){
            frWonNum_=obj.rounds;
            freeRoundsNum_=obj.rounds;
            frWon_=true;
            frBet_=obj.betlevel;
            winFS_=0;
            if (obj.totWon!=null && obj.totWon!=undefined){
                winCash_= winCash_+Number(obj.totWon);
            }
        }
        ,updateFrBalance:function (val) {
            winCash_=winCash_-val;
        }
    }
    initClass_();
    return me;
}
