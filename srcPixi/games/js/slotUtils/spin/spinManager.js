/**
 * KiS Framework, Created by Fabry on 04/03/2016.
 */
function SpinManager(gameRef,gameClass){
    var game_=gameRef;
    var gameClass_=gameClass;
    var spinClass_;
    var spinSwipe_;
    var swipeReel_;
    var spinResponse_;
    var getResponse_=false;
    var spinned_=false;

    function initClass_(){
        try{
            spinClass_= new window[ReelConfig.spinType](game_,gameClass_);
        }catch(e){
            logger("error looking for bonus class " + ReelConfig.spinType);
        }
    }

    function createReels_(p) {
        spinClass_.createReels(p);
    }

    function stopSpin_(){
        spinClass_.stopSpin();
    }

    function  getReels_(){
        return spinClass_.getReels();
    }

    function parse_(json){
        if (spinned_==false){
            setTimeout(parse_,200,json);
            return;
        }
        console.log("--------------get response-----------------------");
        gcmCalls_("BALANCESPIN",[balanceManager_.getDisplayBalance(),balanceManager_.getCoinValue(),json.win.total]);
        balanceManager_.setBalanceUpdated(false);

        if (gameParams.gameOriginalID=="_7014"){
            var spinR={};
            spinR.reel=[];
            for (var i = 0; i < json.spin.reel.length; i++) {
                spinR.reel[i]= {};
                spinR.reel[i].smb=[];
                var ind=0;
                for (var a = 0; a < json.spin.reel[i].smb.length; a++) {
                    if (json.spin.reel[i].smb[a].special !="remove" ){
                        spinR.reel[i].smb[ind]=json.spin.reel[i].smb[a];
                        spinR.reel[i].smb[ind].id=ind;
                        ind++;
                    }
                }
            }

            json.spin=spinR;
        }else{
            for (var i = 0; i < json.spin.reel.length; i++) {
                for (var a = 0; a < json.spin.reel[i].smb.length; a++) {
                    json.spin.reel[i].smb[a].notShow=false;//used to avoid showing expanding wild reel before they land
                    if (gameParams.gameOriginalID=="7013") {  //curious cabinet
                        if (json.spin.reel[i].smb[a].smb == 6 && json.spin.reel[i].smb[a].prevsmb == null && (json.spin.reel[i].smb[a].special != null && json.spin.reel[i].smb[a].special.split("-").indexOf("origin") < 0)) json.spin.reel[i].smb[a].notShow = true;
                        if (json.spin.reel[i].smb[a].smb == 7 && json.spin.reel[i].smb[a].prevsmb == null && (json.spin.reel[i].smb[a].special != null && json.spin.reel[i].smb[a].special.split("-").indexOf("origin") < 0)) json.spin.reel[i].smb[a].notShow = true;
                        if (json.spin.reel[i].smb[a].smb == 8 && json.spin.reel[i].smb[a].prevsmb == null && (json.spin.reel[i].smb[a].special != null && json.spin.reel[i].smb[a].special.split("-").indexOf("origin") < 0)) json.spin.reel[i].smb[a].notShow = true;
                        if (json.spin.reel[i].smb[a].smb == 10 && json.spin.reel[i].smb[a].prevsmb == null && (json.spin.reel[i].smb[a].special != null && json.spin.reel[i].smb[a].special.indexOf("origin") < 0)) json.spin.reel[i].smb[a].notShow = true;
                    }
                }
            }
        }
        spinResponse_=json;
        getResponse_=true;
        if (gameClass_.getCompulsivePlayer() == false && gameClass_.getIsTumbling()==false) { //prevent reenabling stop om tumbles response
            buttonManager_.applyState("STOP");
        }
        spinClass_.setReels();

    }

    function setSpinType_(type,num){
        spinSwipe_=type;
        swipeReel_=num;
        getResponse_=false;
        spinned_=false;
        if(spinClass_.preSpin!=null)spinClass_.preSpin();

        if (spinSwipe_==true){
            setTimeout(spinClass_.startSpinFromSwipe,0,swipeReel_,false);
        }else{
            if (wildManager_.hasWildReel()==true ){
                var sticky=false;
                for (var i = 0; i < ReelConfig.numReels; i++) {
                    if(wildManager_.getWildReelStickyNum(i)==true){
                        sticky=true;
                    }
                }

                if (sticky==false){
                    setTimeout(startSpin_,ReelConfig.wildReelRollbackSpinDelay);
                }else{
                    startSpin_();
                }
            }else{
                if (gameClass_.hasStickyDelay!=null && gameClass_.hasStickyDelay()==true){
                    setTimeout(startSpin_,0);
                }else {
                    setTimeout(startSpin_,0);
                }
            }
        }
    }

    function startSpin_(){
        spinClass_.startSpin();
        setTimeout(setSpinFlag_,10);
    }

    function setSpinFlag_(){
        spinned_=true;
    }

    function sendSpinRequest_(){
        clientMessageSend("play-start");
        gcmCalls_("ANIMATION_START",null,true);
        gcmCalls_("PAID",0,true);
        console.log("send spin req...")
        var force=[];
        var found=false;
        gotErrorInAp_=false;
        if ($(".debug")!=null && gameParams.force=="Enable"){
            if (ReelConfig.newComm==true) { //new engine
                for (var j = 0; j < ReelConfig.numReels; j++) {
                    force[j]=[];
                    for (var i = 0; i < ReelConfig.numIcons; i++) {
                        force[j].push(document.getElementsByName("d"+j + i)[0].value);
                    }

                    if(gameParams.gameOriginalID=="7033"){
                        force[j].push("r");
                        force[j].push("r");
                    }

                }

            }else{
                for (var j = 0; j < ReelConfig.numIcons; j++) {
                    force[j]=[];
                    for (var i = 0; i < ReelConfig.numReels; i++) {
                        force[j].push(document.getElementsByName("d"+i + j)[0].value);
                    }
                }

            }
            if(document.getElementsByName("sideFeature")!=undefined )force.push(document.getElementsByName("sideFeature")[0].value);//easter slot side feature
            communicationManager_.sendServleForceSpinReq("spin",force);
        }else{
            communicationManager_.sendServletRequest("spin");
        }

        window.sendCustomEvent('f1x2gan', {'detail': 'playStarted'}); //GAN event dispatch
    }

    function sendBfRequest_(args){
        gotErrorInAp_=false;
        clientMessageSend("play-start",args.buyInValue);
        gcmCalls_("ANIMATION_START",null,true);
        gcmCalls_("PAID",0,true);

        communicationManager_.sendServletBfRequest("spin",args);

        window.sendCustomEvent('f1x2gan', {'detail': 'playStarted'}); //GAN event dispatch
    }

    function getSpinParams_(){
        var def={
            "stopEnabled":true,
            "reelSecondMovementTime":0.4,
            "reelLoopInterval":.12,
            "reelPreMovement": 0,
            "reelPreMovementTime": 0,
            "reelBaseInterval": 4,
            "reelStopInterval": 1,
            "reelSpinBounceMeasure": 40,
            "reelSpinBounceTime": .28,
            "reelSpinBounceForce": 1.2,
            "minimumTime":.5
        };

        //5 sec rule for germany delayed until dec. just remove the else and uncomment the de conf
        if (loginVars.getRegParams().jurisdiction=="de" && ReelConfig.spinConfig["de"]==null) {
            var de = {
                "stopEnabled": false,
                "reelInterval": 200,
                "reelSecondMovementTime": 0.5,
                "reelLoopInterval": .52,
                "reelPreMovement": 7,
                "reelPreMovementTime": .25,
                "reelBaseInterval": 1,
                "reelStopInterval": 1,
                "reelSpinBounceMeasure": 40,
                "reelSpinBounceTime": .28,
                "reelSpinBounceForce": 1.2,
            }
            return de;
        }

        // //make swedish nd UK jurisdiction works with spanish settings
        if ( threeSecSpinUsingES_ () && freeSpinsManager_.getIsInFs()==false ){
            if (ReelConfig.spinConfig[ "es"]!=null)return ReelConfig.spinConfig["es"];
            if (ReelConfig.spinConfig["default"]!=null)return ReelConfig.spinConfig["default"];
        }else{
            if (ReelConfig.spinConfig[ loginVars.getRegParams().jurisdiction]!=null)return ReelConfig.spinConfig[ loginVars.getRegParams().jurisdiction];
            if (ReelConfig.spinConfig["default"]!=null)return ReelConfig.spinConfig["default"];
        }

        return def;
    }

    function stopSpinForError_(){
        gotErrorInAp_=true;
        if (gameClass_.setChange)gameClass_.setChange(false);
        if(spinClass_.stopSpinForError!=null)spinClass_.stopSpinForError();
    }

    var me={
        createReels:createReels_,
        stopSpin:stopSpin_,
        getReels:getReels_,
        parse:parse_,
        setSpinType:setSpinType_,
        sendSpinRequest:sendSpinRequest_,
        sendBfRequest:sendBfRequest_,
        getSpinParams:getSpinParams_,
        stopSpinForError:stopSpinForError_,
        getSpinResp:function(){
            return spinResponse_;
        },
        getSpinReelResp:function(){
            if (spinResponse_!=undefined) return spinResponse_.spin;
            return null;
        },
        getFsResp:function(){
            return (spinResponse_!=undefined && spinResponse_.freeSpin!=undefined)?spinResponse_.freeSpin:null;
        },
        getWinResp:function(){
            return spinResponse_.win;
        },
        getAllMap:function(){
            return spinClass_.getAllMap();
        },
        getAnimationMap:function(reel,icon){
            return spinClass_.getAnimationMap(reel,icon);
        },
        setAnimationMap:function(reel,icon,anim){
            spinClass_.setAnimationMap(reel,icon,anim);
        },
        getReelGroup:function(reel){
            return spinClass_.getReels()[reel].getAllIcons();
        },

        getReelOuterGroup:function(reel){
            return spinClass_.getReels()[reel].getOuterGroup();
        },
        gotResponse:function(){
            return getResponse_;
        },
        addTriggerIcon:function (obj) {
            spinClass_.addTriggerIcon(obj);
        },
        getTriggerIcons:function(){
            return spinClass_.getTriggerIcons();
        },
        getReels:function(){
            return spinClass_.getReels();
        },
        getCompulsivePlayer:function () {
            if (spinClass_.getCompulsivePlayer!=null)return spinClass_.getCompulsivePlayer();
            return false;
        },
        tumble:function (reel,index,reels,prevR) {
            if (spinClass_.tumble!=null)spinClass_.tumble(reel,index,reels,prevR);
        },
        tumbleByReel:function (reel,index) {
            if (spinClass_.tumbleByReel!=null)spinClass_.tumbleByReel(reel,index);
        },
        getTileMW:function(reel,index){
            if (spinClass_.getTileMW!=null)return spinClass_.getTileMW(reel,index);
        },
        getFrameMW:function(reel,index){
            if (spinClass_.getFrameMW!=null)return spinClass_.getFrameMW(reel,index);
        },
        getFrameH:function(reel,index){
            if (spinClass_.getFrameH!=null)return spinClass_.getFrameH(reel,index);
        },
        getWormHoleMW:function(reel,index){
            if (spinClass_.getWormHoleMW!=null)return spinClass_.getWormHoleMW(reel,index);
        },
        getSpinned:function(){
            return spinned_;
        },
        gotError:function () {
            if (spin.gotError!=null)return spin.gotError();
            return false;
        },
        getTumbleDone:function(){
            return spinClass_.getTumbleDone();
        },
        restoreIcons:function(obj){
            return spinClass_.restoreIcons(obj);
        },
        pause:function () {
            if (spinClass_.pauseSpin!=undefined)spinClass_.pauseSpin();
        },
        resume:function () {
            if (spinClass_.resumeSpin!=undefined)spinClass_.resumeSpin();
        },
        tumbleDone:function () {
            if (spinClass_.tumbleDone!=undefined)return spinClass_.tumbleDone();
        }
    }
    initClass_();
    return me;
}
