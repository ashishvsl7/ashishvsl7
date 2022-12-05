/**
 * KiS Framework, Created by Fabry on 04/03/2016.
 */
function ButtonStatesManager(gameRef, gameClass) {
    var game_ = gameRef;
    var gameClass_ = gameClass;
    var states = [];
    var allButtons = [];
    var currentState_;
    var msg = false;

    //buttons
    var btnSpin;
    var btnStop;
    var btnBet;
    var btnAp;
    var btnPt;

    //new ui buttons
    var btnMenu;
    var btnSound;

    var clickHandlers;

    var initClass_ = function() {

        //If "NEW_UI" or game ID > x
        if (ReelConfig.newUI) {

            //If mobile
            if (framework.isTouch()) {

                //Setup click handlers
                clickHandlers = {
                    'autospin': {
                        'start': framework.openAp,
                        'spin':  framework.checkAutoPlay,
                        'stop':  framework.checkAutoPlay
                    },
                    'spin': {
                        'spin': gameClass.doSpin,
                        'stop': gameClass.doStop
                    }
                }

            }

            //Desktop
            else {

                //Setup click handlers
                clickHandlers = {

                    'autospin': {
                        'start': framework.checkAutoPlay,
                        'spin':  framework.checkAutoPlay,
                        'stop':  framework.checkAutoPlay
                    },
                    'bet':      gameClass_.betSelector,
                    'paytable': gameClass_.doPt,
                    'spin': {
                        'spin': gameClass.doSpin,
                        'stop': gameClass.doStop
                    }

                }

            }

            new window.ButtonManager(clickHandlers) //add new ui
            btnAp   = newUI.autospin()
            btnBet  = newUI.bet()
            btnPt   = newUI.paytable()
            btnSpin = newUI.spin()
            btnStop = btnSpin

            btnMenu  = newUI.menu()
            btnSound = newUI.sound()

        }

        else if (!ReelConfig.newUI) {
            if (framework.isTouch()) {
                //add taphold to mobile spin button
                btnSpin = new ButtonHtml(game_, me,null, frameworkSettings.buttons.spinButton, gameClass_.doSpin,null,null, false, framework.openAp);
            }

            //TODO: decide on how to load which buttons

            btnAp = new ButtonHtml(game_, me, null, frameworkSettings.buttons.autoButton, gameClass_.doAp,null,null, false, false, 'autospin');
            btnStop = new ButtonHtml(game_, me, null,frameworkSettings.buttons.stopButton, gameClass_.doStop,null,null, false, false, 'spin');
            btnBet = new ButtonHtml(game_, me, null,frameworkSettings.buttons.betControl, gameClass_.betSelector,null,null, false, false, 'bet');
            btnPt = new ButtonHtml(game_, me, null,frameworkSettings.buttons.helpButton, gameClass_.doPt,null,null, false, false, 'paytable');

        }

        if (framework.isTouch()) {

                addState_("NH",[[{btn:btnSpin,state:true}],[{btn:btnAp,state:getEnableByJurisdictionForAP_()}],[{btn:btnBet,state:true}],[{btn:btnPt,state:true}]]);
                //If "NEW_UI" or game ID > x
                if (ReelConfig.newUI && framework.isTouch()) {
                    addState_("APNH", [[{btn:btnAp,state:getEnableByJurisdictionForAP_()}],[{btn:btnBet,state:false}], [{btn:btnPt,state:false}], [{btn:btnSpin,state:false}]]);
                }
                //old ui
                else {
                    addState_("APNH", [[{btn:btnAp,state:getEnableByJurisdictionForAP_()}],[{btn:btnBet,state:true}], [{btn:btnPt,state:true}]]);
                }

                addState_("APSTOPNH", [[{btn:btnAp,state:getEnableByJurisdictionForAP_()}],[{btn:btnBet,state:false}], [{btn:btnPt,state:true}]]);
                addState_("NHFR", [[{btn:btnSpin,state:true}] ,[{btn:btnBet,state:false}], [{btn:btnPt,state:true}]]);
                addState_("APNHFR", [[{btn:btnAp,state:getEnableByJurisdictionForAP_()}],  [{btn:btnBet,state:false}], [{btn:btnPt,state:true}]]);
                addState_("NHFS", [[{btn:btnSpin,state:true}], [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
                addState_("NHFSFS", [[{btn:btnSpin,state:true}], [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
                addState_("APNHFS", [[{btn:btnAp,state:getEnableByJurisdictionForAP_()}], [{btn:btnBet,state:false}], [{btn:btnPt,state:true}]]);
                addState_("SPIN", [[{btn:btnSpin,state:false}],  [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
                addState_("APSPIN", [[{btn:btnAp,state:getEnableByJurisdictionForAP_()}], [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
                addState_("SPINFR", [[{btn:btnSpin,state:false}],  [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
                addState_("APSPINFR",[ [{btn:btnAp,state:getEnableByJurisdictionForAP_()}], [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
                addState_("SPINFS", [[{btn:btnSpin,state:false}], [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
                addState_("APSPINFS", [[{btn:btnAp,state:getEnableByJurisdictionForAP_()}], [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
                addState_("STOP", [[{btn:btnStop,state:true}],  [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
                addState_("APSTOP", [[{btn:btnAp,state:getEnableByJurisdictionForAP_()}], [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
                addState_("STOPFR", [[{btn:btnStop,state:true}],  [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
                addState_("APSTOPFR", [[{btn:btnAp,state:getEnableByJurisdictionForAP_()}], [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
                addState_("STOPFS", [[{btn:btnStop,state:true}],  [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
                addState_("APSTOPFS", [[{btn:btnAp,state:getEnableByJurisdictionForAP_()}],  [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
                addState_("AFTERSPIN", [[{btn:btnSpin,state:false}],  [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
                addState_("APAFTERSPIN", [ [{btn:btnAp,state:getEnableByJurisdictionForAP_()}], [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
                addState_("AFTERSPINWIN", [[{btn:btnSpin,state:false}], [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
                addState_("APAFTERSPINWIN", [[{btn:btnAp,state:getEnableByJurisdictionForAP_()}], [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
                addState_("AFTERSPINFR", [[{btn:btnSpin,state:false}], [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
                addState_("APAFTERSPINFR", [ [{btn:btnAp,state:getEnableByJurisdictionForAP_()}], [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
                addState_("AFTERSPINFS", [[{btn:btnSpin,state:false}], [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
                addState_("APAFTERSPINFS", [ [{btn:btnAp,state:getEnableByJurisdictionForAP_()}], [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
                addState_("NONE",[[{btn:btnSpin,state:false}],[{btn:btnAp,state:false}],[{btn:btnBet,state:false}],[{btn:btnPt,state:false}]]);
                addState_("NONEFS",[[{btn:btnSpin,state:false}],[{btn:btnAp,state:false}],[{btn:btnBet,state:false}],[{btn:btnPt,state:false}]]);
                addState_("NONEFR",[[{btn:btnSpin,state:false}],[{btn:btnAp,state:false}],[{btn:btnBet,state:false}],[{btn:btnPt,state:false}]]);

        }else{

             //normal desktop spin button
            //btnSpin = new ButtonHtml(game_, me,null, frameworkSettings.buttons.spinButton, gameClass_.doSpin,null,null, false, false, 'spin');

            if (!ReelConfig.newUI) {
                btnSpin = new ButtonHtml(game_, me,null, frameworkSettings.buttons.spinButton, gameClass_.doSpin,null,null, false, false, 'spin');
            }

            addState_("NH",[[{btn:btnSpin,state:true}], [{btn:btnAp,state:getEnableByJurisdictionForAP_()}],[{btn:btnBet,state:true}],[{btn:btnPt,state:true}]]);
            addState_("APNH",[[{btn:btnSpin,state:false}], [{btn:btnAp,state:getEnableByJurisdictionForAP_()}],[{btn:btnBet,state:true}],[{btn:btnPt,state:true}]]);
            addState_("NHFR", [[{btn:btnSpin,state:true}], [{btn:btnAp,state:false}], [{btn:btnBet,state:false}], [{btn:btnPt,state:true}]]);
            addState_("APNHFR", [[{btn:btnSpin,state:false}], [{btn:btnAp,state:getEnableByJurisdictionForAP_()}], [{btn:btnBet,state:false}], [{btn:btnPt,state:true}]]);
            addState_("NHFS", [[{btn:btnSpin,state:true}], [{btn:btnAp,state:false}], [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
            addState_("NHFSFS", [[{btn:btnSpin,state:true}], [{btn:btnAp,state:false}], [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
            addState_("APNHFS", [[{btn:btnSpin,state:false}], [{btn:btnAp,state:getEnableByJurisdictionForAP_()}], [{btn:btnBet,state:false}], [{btn:btnPt,state:true}]]);
            addState_("SPIN", [[{btn:btnSpin,state:false}], [{btn:btnAp,state:false}], [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
            addState_("APSPIN", [[{btn:btnSpin,state:false}], [{btn:btnAp,state:getEnableByJurisdictionForAP_()}], [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
            addState_("SPINFR", [[{btn:btnSpin,state:false}], [{btn:btnAp,state:false}], [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
            addState_("APSPINFR", [[{btn:btnSpin,state:false}], [{btn:btnAp,state:getEnableByJurisdictionForAP_()}], [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
            addState_("SPINFS", [[{btn:btnSpin,state:false}], [{btn:btnAp,state:false}], [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
            addState_("APSPINFS", [[{btn:btnSpin,state:false}], [{btn:btnAp,state:getEnableByJurisdictionForAP_()}], [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
            addState_("STOP", [[{btn:btnStop,state:true}], [{btn:btnAp,state:false}], [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
            addState_("APSTOP", [[{btn:btnStop,state:false}], [{btn:btnAp,state:getEnableByJurisdictionForAP_()}], [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
            addState_("STOPFR", [[{btn:btnStop,state:true}], [{btn:btnAp,state:false}], [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
            addState_("APSTOPFR", [[{btn:btnStop,state:false}], [{btn:btnAp,state:getEnableByJurisdictionForAP_()}], [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
            addState_("STOPFS", [[{btn:btnStop,state:true}], [{btn:btnAp,state:false}], [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
            addState_("APSTOPFS", [[{btn:btnStop,state:false}], [{btn:btnAp,state:getEnableByJurisdictionForAP_()}], [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
            addState_("AFTERSPIN", [[{btn:btnSpin,state:false}], [{btn:btnAp,state:false}], [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
            addState_("APAFTERSPIN", [[{btn:btnSpin,state:false}], [{btn:btnAp,state:getEnableByJurisdictionForAP_()}], [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
            addState_("AFTERSPINWIN", [[{btn:btnAp,state:false}], [{btn:btnSpin,state:false}],  [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
            addState_("APAFTERSPINWIN", [[{btn:btnAp,state:false}], [{btn:btnSpin,state:false}],  [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
            addState_("AFTERSPINFR", [[{btn:btnSpin,state:false}], [{btn:btnAp,state:false}], [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
            addState_("APAFTERSPINFR", [[{btn:btnSpin,state:false}], [{btn:btnAp,state:getEnableByJurisdictionForAP_()}], [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
            addState_("AFTERSPINFS", [[{btn:btnSpin,state:false}], [{btn:btnAp,state:false}], [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
            addState_("APAFTERSPINFS", [[{btn:btnSpin,state:false}], [{btn:btnAp,state:getEnableByJurisdictionForAP_()}], [{btn:btnBet,state:false}], [{btn:btnPt,state:false}]]);
            addState_("NONE",[[{btn:btnSpin,state:false}], [{btn:btnAp,state:false}],[{btn:btnBet,state:false}],[{btn:btnPt,state:false}]]);
            addState_("NONEFS",[[{btn:btnSpin,state:false}], [{btn:btnAp,state:false}],[{btn:btnBet,state:false}],[{btn:btnPt,state:false}]]);
            addState_("NONEFR",[[{btn:btnSpin,state:false}], [{btn:btnAp,state:false}],[{btn:btnBet,state:false}],[{btn:btnPt,state:false}]]);
            displayManager_.getGroup("buttonFg").visible=true;
        }
        applyState_("NONE");
        if(me.getButton(frameworkSettings.buttons.autoButton.id)!=undefined)me.getButton(frameworkSettings.buttons.autoButton.id).setText("");

    }

    var getEnableByJurisdictionForAP_=function(){
        return  getCanAutoplay_();
        // if (loginVars.getRegParams().jurisdiction =="se" && gameParams.clientName!="" && gameParams.clientName.indexOf("NYX")>=0  &&  Math.abs(Number(gameParams.site))== 939)return false;  //disabling AP buttons for NYX Svesnka Spil (operator ID 939)
        // return true
    }

    var addState_ = function(name, buttonsState) {

        //If "NEW_UI" or game ID > x
        if (ReelConfig.newUI && framework.isTouch()) {
            window.GAME_STATES.addState(name, buttonsState) //Add new UI state
        }

        states[name] = [];
        states[name].buttons = [];
        //console.log(name)
        //console.log(allButtons)

        for (var a in buttonsState) {

            states[name].buttons[a] = {};
            states[name].buttons[a]._button = buttonsState[a][0].btn;
            states[name].buttons[a]._enable = buttonsState[a][0].state;
            //console.log(states[name])
            //console.log(states[name].buttons[a]._button)
            //console.log(states[name].buttons[a]._enable)
            allButtons[buttonsState[a][0].btn.getName()] = buttonsState[a][0].btn; //store all buttons to disable'em easily
        }
    }

    var disableButtons_ = function(name) {
        enableAll_();
        for (var a in states[name].buttons) {
            states[name].buttons[a]._button.disable();
        }
    }

    var applyStateForce_= function (name){
        currentState_ = name;

        logger("apply button state " + name)
        disableAll_();

        for (var a in states[name].buttons) {
            states[name].buttons[a]._button.showButton();
            states[name].buttons[a]._button.applyState(states[name].buttons[a]._enable);
            //states[name].buttons[a]._button.enable();
        }
    }

    var applyState_ = function(name) {
        if (name=="STOP"){
            if(!getCanQuickPlay_())return;
            //if (loginVars.getRegParams().jurisdiction =="es" || loginVars.getRegParams().jurisdiction =="se" || loginVars.getRegParams().jurisdiction =="uk")return; //no stop allowed on Spain
        }

        if (name === 'NH') {
            window.sendCustomEvent('f1x2gan', {'detail': 'playStopped'}); //GAN event dispatch
            messagesSE.check();
            //gcmCalls_("ANIMATION_END",null,true);

            if (ReelConfig.newUI) {

                var footer = document.getElementById('footer') //Retrieve footer new ui footer node
                footer.style.zIndex = 7;                        //Show footer once game initialized

            }

        }


        currentState_ = name;
        if (freeSpinsManager_.getIsInFs() == true || (gameClass_.getIsRespin!=null && gameClass_.getIsRespin())) {
            name = name + "FS";
        } else if (freeRoundsManager_.getIsInFr() == true) {
            name = name + "FR";
        }

        if (autoPlayManager_.getIsInAutoPlay() && autoPlayManager_.getAutoPlayNum()>1 && gotErrorInAp_==false)    name = "AP"+name ;

        logger("apply button state " + name + " "+getStackTrace().join('\n'));
        //If not "NEW_UI or game ID > x" && mobile
        disableAll_();
        for (var a in states[name].buttons) {
            //If "NEW_UI or game ID > x" && mobile
            if (ReelConfig.newUI && framework.isTouch()) {
                //do nothing
            }
            
            //old ui or new ui desktop
            else {
                states[name].buttons[a]._button.showButton();  
            }

            //console.log('name', states[name].buttons[a]._button.getName(), 'state', states[name].buttons[a]._enable)
            states[name].buttons[a]._button.applyState(states[name].buttons[a]._enable);
            //states[name].buttons[a]._button.enable();
        }
        console.log('name: ', name)
        //If "NEW_UI" or game ID > x
        if (ReelConfig.newUI && name !== 'NONE' && name !== 'NONEFS' && name !== 'NONEFR') {

            //If mobile
            if (framework.isTouch()) {
                window.BUTTON_STATES_MANAGER.applyState(name) //Apply new UI state
            }

            //Desktop

            else {

                //If spinning
                if (name === 'SPIN' || name === 'STOPFS' || name === 'STOPFR') {
                    window.SPIN_STATE.spinning = true
                }

                //If autoplay spinning
                else if (name === 'APSPIN') {
                    window.AUTOSPIN_STATE.spinning = true
                }

                //Not spinning
                else if (name === 'NH' || name === 'NHFS'  || name === 'NHFR') {

                    window.AUTOSPIN_STATE.spinning = false
                    window.SPIN_STATE.spinning     = false
                    window.AUTOSPIN_STATE.onSpin.dispatch(AUTOSPIN_STATE.spinning) //Dispatch onSpin event

                }

                window.SPIN_STATE.onSpin.dispatch(SPIN_STATE.spinning) //Dispatch onSpin event

            }

        }
        if (ReelConfig.newUI) {
            if (getEnableByJurisdictionForAP_()==false ){
                window.newUI.autospin().visible = false;
            }
        }else{
            if (getEnableByJurisdictionForAP_()==false ) {
            //$('.button__background').css('display', 'block');
                $("#autoPlay").find(".button__background").css('display', 'none');
                $("#autoPlay").css('pointer-events', 'none');
            }
        }
    }

    var applyHide_ = function() {
        logger("hide all buttons")
        msg = true;
        for (var name in states) {
            for (var a in states[name].buttons) {
                if (states[name].buttons[a]._button.getName()=="helpButton")continue;
                states[name].buttons[a]._button.applyState(false);
            }
        }
    }

    var applyRestore_= function (){
        msg=false;
        applyState_(currentState_);
    }

    var disableAll_ = function() {
        for (var a in allButtons) {
            if (!ReelConfig.newUI) {
                allButtons[a].disable();
                allButtons[a].hideButton();
            }else{
                for (var aa in window.newUI.buttons) {
                    if(window.newUI.buttons[aa]._id== allButtons[a]._id){
                        window.newUI.buttons[aa].enable=false;
                        break
                    }
                }
            }
        }
    }

    var enableAll_ = function() {
        for (var a in allButtons)
            allButtons[a].enable();
    }

    var getButton_ = function(name_) {

        //If "NEW_UI" or game ID > x
        if (ReelConfig.newUI && framework.isTouch()) {

            var new_ui_ids = {

                'autoButtonSelect': 'autospin',
                'betButtonSelect':  'bet',
                'spinButtonSelect': 'spin'

            };

            try {
                return allButtons[new_ui_ids[name_]];
            } catch (e) {
                logger("error retrieving button " + name_)
            }

        }

        //old ui
        else {

            try {
                return allButtons[name_];
            } catch (e) {
                logger("error retrieving button " + name_)
            }

        }

    }

    var me = {
        addState: addState_,
        disableButtons: disableButtons_,
        applyStateForce:applyStateForce_,
        applyState: applyState_,
        applyHide: applyHide_,
        applyRestore: applyRestore_,
        getCurrentState: function() {
            return currentState_;
        },
        getEnableByJurisdictionForAP: getEnableByJurisdictionForAP_,
        getButton: getButton_,
        gotMsg: function() {
            return msg;
        }
    }
    initClass_();
    return me;
}
