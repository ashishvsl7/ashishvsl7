/**
 * KiS Framework, Created by Fabry on 23/02/2016.
 */
function  EventManager(){
    var eventList = [];
    var callBack = {}
    var timer;
    var evtStart = false;
    var totalDelay_ = 0;

    var clearEvt_ = function () {
        if (timer!=undefined) {
            clearTimeout(timer);
        }
        timer=[];
        evtStart = false;
        for (var a in eventList) {
            if (eventList[a] != null && eventList[a].timer != null) {
                clearTimeout(eventList[a].timer);
            }
        }
        confirmation_=null;
        eventList = null;
        eventList = [];
        totalDelay_ = 0;
    };

    var addEvt_ = function (name, delay, args) {
        //console.log(delay +" add evt "+ name.toString())
        delay=Math.min(delay,60000);//max delay 60 seconds
        var obj = {};
        obj.func = name;
        totalDelay_ += parseInt(delay);
        obj.delay = delay;
        obj.complete = false;
        obj.timer = null;
        obj.force=false;
        if (args != null) {
            obj.objects = [];
            for (var a in args) {
                obj.objects[a] = args[a];
            }
        } else {
            obj.objects = "";
        }
        eventList.push(obj);
    };

    var addEvtForce_ = function (name, delay, args) {
        delay=Math.min(delay,60000);//max delay 60 seconds
        var obj = {};
        obj.func = name;
        totalDelay_ += parseInt(delay);
        obj.delay = delay;
        obj.complete = false;
        obj.timer = null;
        obj.force=true;
        if (args != null) {
            obj.objects = [];
            for (var a in args) {
                obj.objects[a] = args[a];
            }
        } else {
            obj.objects = "";
        }
        eventList.push(obj);
    };

    var confirmation_=null;

    var addEvtForceConfirmable_ = function (name, delay, args) {
        var obj = {};
        if (!mustConfirmFS_()){
            //just for some regulation
            addEvtForce_(name, delay/100, args);
            return;
        }else{
            obj.confirmation=true;
        }

        var del=0;
        for (var a in eventList) {
            del+= Number(eventList[a].delay);
        }

        confirmation_=null;

        obj.func = name;
        totalDelay_ += parseInt(delay);
        obj.delay = delay;
        obj.complete = false;
        obj.timer = null;
        obj.force=true;
        if (args != null) {
            obj.objects = [];
            for (var a in args) {
                obj.objects[a] = args[a];
            }
        } else {
            obj.objects = "";
        }
        eventList.push(obj);
        confirmation_={};
        confirmation_.func=name;
        confirmation_.arg=args;

        setTimeout(writeMessage_, 2000 + del);
    };

    function writeMessage_(){
        framework.updateSmallMessageText(Translate.do("Click to Start"));
    }

    var fireConfirmation_ = function(){
        if (confirmation_!=null){
            clearTimeout(timer);
            timer =setTimeout(myCallBack_, 100,confirmation_.func, confirmation_.arg,true);
            evtStart = true;
            confirmation_=null;
            framework.updateSmallMessageText("");
        }
    }

    var triggerEvt_ = function () {
        try {
            if (evtStart == true)return;
            var evtFound = false;
            var i = 0;
            for (var a in eventList) {
                i++;
                if (eventList[a].complete == false) {
                    eventList[a].complete = true;
                    timer =setTimeout(myCallBack_, eventList[a].delay,eventList[a].func, eventList[a].objects,eventList[a].force);
                    evtStart = true;
                    evtFound = true;
                    return;
                }
            }
            if (evtFound == false) {
                eventList = null;
                eventList = [];
            }
        } catch (e) {
            console.log("error in timer")
        }
    };

    var myCallBack_= function (funct,param,force){
        try {
            clearTimeout(timer);
            if ((gameClass_.getMessageOnOff()==false && buttonManager_.gotMsg() == false && displayManager_.getEventBlockWindOn() == false && isTabbedAway_==false   )|| force == true) {
                evtStart = false;
                triggerEvt_();
                funct(param);
            } else {
                timer = setTimeout(myCallBack_, 500, funct, param, false);
            }
        }catch(e){
            console.log("Error on eventManager " +e + " "+ funct + " " + param)
        }
    }

    var executeEvt_ = function (name, param) {
        try {
            evtStart = false;
            name(param);
            triggerEvt_();
        } catch (e) {
            console.log("Error on executeEvt_ " +e + " "+ name + " " + param)
        }
    };

    var me = {
        triggerEvt: triggerEvt_,
        executeEvt: executeEvt_,
        addEvent: addEvt_,
        addEvtForce:addEvtForce_,
        clearEvt: clearEvt_,
        addEvtForceConfirmable:addEvtForceConfirmable_,
        fireConfirmation:fireConfirmation_
    };

    return me;
}
