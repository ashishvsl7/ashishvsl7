/**
 * KiS Framework, Created by Fabry on 15/03/2016.
 */
function BigWinCoinShower(gameRef, gameClass,group) {
    var game_ = gameRef;
    var gameClass_ = gameClass;
    var showerClass_ = Object.create(new CoinShower(gameRef, gameClass,group));
    var showerClassObject_ = showerClass_.__proto__;
    //to access class objects(this) showerClassObject_.mainGroup_


    showerClass_.startNewObject_=function(){
        var top = (getOrientation() == "portrait") ? -200 : 300;
        var originX=960;
        var originXWide=300;
        var spreadX=800;
        var originY=(getOrientation() == "portrait") ?window.screen.height*window.devicePixelRatio:1100;
        var endY=originY/3;

        if (Util.getRandomInt(1,100)>50) {
            var i=Util.getRandomInt(1, 3);
            var ob = new spriteManager_.addSprite(Util.getRandomInt(originX-originXWide,originX+originXWide), originY, "part-" + i);
            animationManager_.create(ob, "part-"+i, 24)
        }else {
            var i=Util.getRandomInt(1, 3);
            var ob =new  spriteManager_.addSprite(Util.getRandomInt(originX-originXWide,originX+originXWide), originY, "f-part-" + i);
            animationManager_.create(ob, "part-"+i, 24)
        }

        ob.anchor.set(.5, .5);
        ob.angle=Util.getRandomInt(1,180);
        ob.alpha = 0.5;
        ob.xVar=Util.getRandomInt(originX-spreadX, originX+spreadX);
        TweenMax.to(ob, .2 + Util.getRandomInt(50, 90) / 100, {
            alpha: 1,
            rotation:Util.getRandomInt(0, 90),
            y: Util.getRandomInt(top, endY),
            x: ob.xVar, onComplete: showerClass_.startFallsDown_,  onCompleteParams: [ob],ease:Sine.easeOut
        });
        ob.play( Util.getRandomInt(10, 15),true);
        ob.scale.x = Util.getRandomInt(180,150)/100;
        ob.scale.y = ob.scale.x;
        showerClassObject_.objThrown_.push(ob);
        showerClassObject_.funtainGroup_.addChild(ob);
        showerClassObject_.funtainGroup_.visible=true;

    }


    return showerClass_;

}
