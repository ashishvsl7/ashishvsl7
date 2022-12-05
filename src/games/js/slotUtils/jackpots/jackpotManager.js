/**
 * KiS Framework, Created by Fabry on 21/03/2016.
 */
function JackpotManager(gameRef,gameClass){
    var game_ = gameRef;
    var gameClass_ = gameClass;
    var jackpotClass_=[];
    var values_=[];
    var isUpdatable=true;
    var triggerIcon_=6;
    var minNumTriggerIcon_=4;
    var fakeIncTimer=0;//todo removeBodyEvent
    var level= "1";
    var increment=[0.02,0.03,0.08];

    function initClass_(){
        if (ReelConfig.jackpot==null)return;
        initJackpot();
    }

    function addJackpot_(key,key1,value){
        if (ReelConfig.jackpot==null)return;
        values_[key][key1]=Number(value);
        jackpotClass_[key] = new Jackpot(game_, gameClass_,key);
    }

    function initJackpot(){
        //todo
        for (var a in ReelConfig.jackpot){
            values_[a]=[];
            for (var b in ReelConfig.jackpot[a]) {
                addJackpot_(a, b, ReelConfig.jackpot[a][b]);
            }
        }
        updateJackpot_();
    }

    function resetJackpot_(){
        if (ReelConfig.jackpot==null)return;
        for (var a in values_)
            jackpotClass_[a].updateJackpot(values_[a]["testJackpot_"+ Util.formatNumber(balanceManager_.getCoinValue(),2)]);
    }

    function updateJackpot_(){
        if (ReelConfig.jackpot==null || isUpdatable==false)return;
        for (var a in values_)
            jackpotClass_[a].updateJackpot(values_[a]["testJackpot_"+Util.formatNumber(balanceManager_.getCoinValue(),2)])
    }

    function parseJackpot_(){
        //todo
    }

    function fakeupdateackpot_(){
        var index=0;
        //todo remove
        updateble=false;
        values_[level]["testJackpot_" + Util.formatNumber(balanceManager_.getCoinValue(), 2)] += (Util.formatNumber(balanceManager_.getCoinValue(), 2) * increment[parseInt(level)-1]) + .0000000001;
        if (isUpdatable)jackpotClass_[level].incJackpot(values_[level]["testJackpot_" + Util.formatNumber(balanceManager_.getCoinValue(), 2)]);
        fakeIncTimer=setTimeout(fakeRandomUpdate_,200);
    }

    function fakeRandomUpdate_(){
        var index=0;
        clearTimeout(fakeIncTimer);
        if (isUpdatable==true) {
            for (var a in values_) {
                if (Util.getRandomInt(1, 1000) > 280*(index+1)) {
                    values_[a]["testJackpot_" + Util.formatNumber(balanceManager_.getCoinValue(), 2)] += (Util.formatNumber(balanceManager_.getCoinValue(), 2) * increment[index]) + .0000000001;
                    if (isUpdatable)jackpotClass_[a].incJackpot(values_[a]["testJackpot_" + Util.formatNumber(balanceManager_.getCoinValue(), 2)]);
                }
                index++
            }
            index=1;
            for (var a in values_) {
                if (Util.getRandomInt(1, 100000) > (99939 +(index*20))) {
                    wonJackpot_(a,"average joe " + Translate.do("won"), values_[a]["testJackpot_" + Util.formatNumber(balanceManager_.getCoinValue(), 2)]);
                    values_[a]["testJackpot_" + Util.formatNumber(balanceManager_.getCoinValue(), 2)] = 0;
                }
                index++
            }
        }
        fakeIncTimer=setTimeout(fakeRandomUpdate_,Util.getRandomInt(500,1000));
    }

    function wonJackpot_(_level,msg,amt){
        if (_level==null)_level=level;
        var ret=values_[_level]["testJackpot_"+ Util.formatNumber(balanceManager_.getCoinValue(),2)];
        updateble=false;
        jackpotClass_[_level].wonJackpot(Translate.do(msg),(amt==null)?values_[_level]["testJackpot_"+ Util.formatNumber(balanceManager_.getCoinValue(),2)]:amt);
        values_[_level]["testJackpot_"+ Util.formatNumber(balanceManager_.getCoinValue(),2)]=0;
        updateJackpot_();
        updateble=true;
        return ret;
    }

    function parse_(json){

    }

    var me ={
        parse:parse_,
        updateJackpot:updateJackpot_,
        resetJackpot:resetJackpot_,
        fakeupdateackpot:fakeupdateackpot_,
        wonJackpot:wonJackpot_,
        updatable:function(val){
            isUpdatable=val;
        },
        getMinNumTriggerIcon:function(){
            return minNumTriggerIcon_;
        },
        getTriggerIcon:function(){
            return triggerIcon_;
        },
        getJackpotLevel:function (){
            return level;
        },
        setJackpotLevel:function (val){
            level=val+1;
        }

    }
    initClass_();
    return me;

}