/**
 * KiS Framework, Created by Fabry on 21/03/2016.
 */
function Jackpot(gameRef,gameClass,key){
    var game_ = gameRef;
    var gameClass_ = gameClass;
    this.mainGroup_;
    this.winGroup_;
    this.txt;
    this.txtUserW;
    this.txtW;
    var scope=this;
    this.twObject={};
    this.tw;
    this.oldValue=0;

    function initClass_(key){
        scope.mainGroup_=displayManager_.getGroup("jackpot");
        scope.winGroup_=displayManager_.getGroup("jpotWonPanel");
        scope.winGroup_.visible=false;
        scope.txt=displayManager_.getText("jpotValue"+key);
        scope.txtW=displayManager_.getText("jpotWValue");
        scope.txtUserW=displayManager_.getText("jpotWLabel");
    }

    this.incJackpot=function (value){
        if (scope.tw!=null) {
            if (scope.tw!=null)scope.tw.totalTime(scope.tw.totalDuration())
            scope.txt.setText(balanceManager_.getCurrencySmb()+ "" + Util.formatNumber( scope.oldValue,2));
        }
        var inc=(value-scope.oldValue)*3;
        scope.twObject.amt=scope.oldValue;
        scope.tw=TweenMax.to(scope.twObject,inc,{amt:value,onUpdate:updatingValue_,onComplete:completeValue_,onCompleteParams:[value]});
    }

    function updatingValue_(){
        scope.txt.setText(balanceManager_.getCurrencySmb()+ "" +  Util.formatNumber(scope.twObject.amt,2));
    }

    function completeValue_(value){
        scope.oldValue=value;
        scope.txt.setText(balanceManager_.getCurrencySmb()+ "" +  Util.formatNumber(value,2));
    }

    function hideWon(){
        scope.winGroup_.visible=false;
    }

    this.updateJackpot=function (value){
        if (scope.tw!=null)scope.tw.totalTime(scope.tw.totalDuration())
        scope.oldValue=value;
        scope.txt.setText(balanceManager_.getCurrencySmb()+ "" + Util.formatNumber(value,2));
    }

    this.wonJackpot=function(user, value){
        scope.winGroup_.visible=true;
        scope.txtUserW.setText(user);
        scope.txtW.setText(balanceManager_.getCurrencySmb()+ "" +  Util.formatNumber(value,2));
        setTimeout(hideWon,5000);
    }



    initClass_(key);
    return this;

}