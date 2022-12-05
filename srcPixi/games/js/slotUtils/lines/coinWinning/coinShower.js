/**
 * KiS Framework, Created by Fabry on 24/03/2022.
 */
function CoinShower(gameRef,gameClass,group){
    var game_ = gameRef;
    var gameClass_ = gameClass;

    //central win funtain
    this.objThrown_=[];
    this.funtainGroup_=group;
    this.funtainGroup_.visible=true;
    this.funtainEventManager_= new EventManager();
    var scope=this;

    this.startFuntain=function (time,numObj,interval){
        scope.funtainEventManager_.clearEvt();
        for (var a = 0; a <= numObj; a++) {
            scope.funtainEventManager_.addEvtForce(this.startNewObject_, interval);
            if (a % 20 == 0) scope.funtainEventManager_.addEvtForce(this.startCoinsSound_, 0);
        }
        scope.funtainEventManager_.triggerEvt();
    }

    this.startCoinsSound_=function (){
        soundManager_.playSound("coins");
    }

    this.startFallsDown_=function(ob){
        //coins falls down in the first tween direction
        if (ob.xVar>960) {
            ob.xVar = Util.getRandomInt(ob.xVar+100, ob.xVar + 50);
        }else if (ob.xVar>640){
            ob.xVar=Util.getRandomInt(ob.xVar+50,ob.xVar+25);
        }else if (ob.xVar>320){
            ob.xVar=Util.getRandomInt(ob.xVar-25,ob.xVar-25);
        }else{
            ob.xVar=Util.getRandomInt(0,ob.xVar-50);
        }
        TweenMax.to(ob,.9 + Util.getRandomInt(20, 40) / 100, {
            y: ob.y+1500,
            rotation:Util.getRandomInt(5, 10),
            x: ob.xVar, onComplete: endFallsDown_,  onCompleteParams: [ob],ease:Sine.easeIn
        });

    }
    function endFallsDown_(ob){
        scope.funtainGroup_.removeChild(ob);
        ob=null;
    }

    this.clearEvt=function(){
        scope.funtainEventManager_.clearEvt();
    }

    return this;

}
