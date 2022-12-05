/**
 * KiS Framework, Created by Fabry on 13/12/2017.
 * just use if some event should stop other successive events like waiting for tumble results...
 */
function  EventManagerCheck(){
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
        eventList = null;
        eventList = [];
        totalDelay_ = 0;
    };

    var addEvt_ = function (name, delay, check,args) {
        //console.log(delay +" add evt "+ name.toString())
        delay=Math.min(delay,60000);//max delay 60 seconds
        var obj = {};
        obj.func = name;
        obj.check = check;//function to check before calling (must return true)
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
        obj.check = null;
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

    var triggerEvt_ = function () {
        try {
            if (evtStart == true)return;
            var evtFound = false;
            var i = 0;
            for (var a in eventList) {
                i++;
                if (eventList[a].complete == false) {
                    eventList[a].complete = true;
                    timer =setTimeout(myCallBack_, eventList[a].delay,eventList[a].func,eventList[a].check, eventList[a].objects,eventList[a].force);
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

    var myCallBack_= function (funct,check,param,force){
        try {
            clearTimeout(timer);
            if ((gameClass_.getMessageOnOff()==false && buttonManager_.gotMsg() == false && displayManager_.getEventBlockWindOn() == false )|| force == true) {
                if (check==null || (check()==true)) {
                    evtStart = false;
                    triggerEvt_();
                    funct(param);
                }else{
                    if (check!=undefined)console.log("waiting event " + check.name)
                    timer = setTimeout(myCallBack_, 200, funct, check,param, false);
                }
            } else {
                timer = setTimeout(myCallBack_, 500, funct, check,param, false);
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
        clearEvt: clearEvt_
    };

    return me;
}