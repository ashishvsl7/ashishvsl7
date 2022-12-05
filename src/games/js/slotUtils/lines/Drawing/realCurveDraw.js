/**
 * KiS Framework, Created by Fabry on 20/01/2017.
 */

function CCurveDraw(gameRef, gameClass) {
    var gameClass_ = gameClass;
    var game_ = gameRef;
    var mainGroup_;

    var coinsIconPoints_=[];
    var tickRatio_ = lineConfig.line.tickBase;
    var lineTweenTime_PointToPoint_ = lineConfig.line.pointToPointSpeed;
    var lineFadeTime_ = 1.2;
    var bezierIconPoints_ = [];
    var oldRandomIconPoints_ = [];
    var myEndAlphaPoint_ = [];
    var myAlphaPoint_ = [];
    var myAlphaLine_ = [];
    var myIncrAlphaPoint_ = [];
    var myStartEndAlphaPoint_ = [];
    var randomIconPoints_ = [];
    var objTwLine_ = {};
    var container_ = null;
    var objTwAmt_;
    var myLineMaxAlpha_;
    var myLineTick_;
    var iTimO_=[];
    var isMobile = false; //todo
    var delay_=0;

    function initClass_() {
        mainGroup_ = displayManager_.getGroup("lines");
        bezierIconPoints_ = [];
        coinsIconPoints_ = [];
        randomIconPoints_ = [];
        oldRandomIconPoints_ = [];
        myEndAlphaPoint_ = [];
        myAlphaPoint_ = [];
        myAlphaLine_ = 0;
        myIncrAlphaPoint_ = [];
        myStartEndAlphaPoint_ = [];
        objTwAmt_ = {};
        myLineMaxAlpha_ = Util.getRandomInt(50, 100) / 100;
        myLineTick_ = lineConfig.line.tickBase;

        for ( var a in iTimO_)
            if (iTimO_[a]!=undefined)clearTimeout(iTimO_[a]);


        createCanvas_();
        addContainer_();


    }

    function showStatic_(smb, line, amt,points,delay) {
        randomIconPoints_=points
        var fsp = new FindSmoothPath(randomIconPoints_, true, 5);
        delay_=(delay!=null)?delay:0
        bezierIconPoints_ = fsp.getArrayOfPoints();
        if (bezierIconPoints_.length > 0) {
            myEndAlphaPoint_ = bezierIconPoints_.length - myStartEndAlphaPoint_ / 100;
            myIncrAlphaPoint_ = myLineMaxAlpha_ / myStartEndAlphaPoint_;
            oldRandomIconPoints_ = new Phaser.Point(bezierIconPoints_[0].x, bezierIconPoints_[0].y);
            //startDrawLine_(line, lineTweenTime_PointToPoint_, amt);

            //container_.clear();
            container_.lineStyle(myLineTick_, lineConfig.line.color, 0.7);
            container_.moveTo(oldRandomIconPoints_.x, oldRandomIconPoints_.y);

            objTwLine_ = {};
            objTwLine_._points = bezierIconPoints_.length - 1;
            objTwLine_.amt = 0;

            //todo handle simbols nummver     var interval = (tweenTime * iconSmb()[0].length * 1000) / (objTwLine_._points); //800 per rendere piÃ¹ veloce i coins
            var interval = (lineTweenTime_PointToPoint_  * 1000) / (objTwLine_._points); //800 per rendere piÃ¹ veloce i coins
            for (var i = 0; i < objTwLine_._points; i++) {
                updateTween_(line, i, objTwLine_._points);
            }
            setTimeout(clearAll_,delay_);
        }
    }

    function clearAllStatic_(){
        container_.clear();
    }

    function clearAll_(){
        container_.clear();
    }

    function startDraw_(smb, line, amt,points) {
        randomIconPoints_=points
        var fsp = new FindSmoothPath(randomIconPoints_, true, 5);
        bezierIconPoints_ = fsp.getArrayOfPoints();
        if (bezierIconPoints_.length > 0) {
            myEndAlphaPoint_ = bezierIconPoints_.length - myStartEndAlphaPoint_ / 100;
            myIncrAlphaPoint_ = myLineMaxAlpha_ / myStartEndAlphaPoint_;
            oldRandomIconPoints_ = new Phaser.Point(bezierIconPoints_[0].x, bezierIconPoints_[0].y);
            startDrawLine_(line, lineTweenTime_PointToPoint_, amt);
        }
    }

    function startDrawLine_(line, tweenTime, amt) {
        container_.clear();
        container_.lineStyle(myLineTick_, lineConfig.line.color, 0.7);
        container_.moveTo(oldRandomIconPoints_.x, oldRandomIconPoints_.y);

        objTwLine_ = {};
        objTwLine_._points = bezierIconPoints_.length - 1;
        objTwLine_.amt = 0;

        //todo handle simbols nummver     var interval = (tweenTime * iconSmb()[0].length * 1000) / (objTwLine_._points); //800 per rendere piÃ¹ veloce i coins
        var interval = (tweenTime  * 1000) / (objTwLine_._points); //800 per rendere piÃ¹ veloce i coins
        for (var i = 0; i < objTwLine_._points; i++) {
            updateTween_(line, i, objTwLine_._points);
        }
    }


    function updateTween_(line, i, pointsL) {
        if (container_ != null) {
            objTwLine_.amt = i;

            //ALPHA AT THE BEGINNING AND AT THE END
            if (objTwLine_.amt >= myEndAlphaPoint_) {
                myAlphaLine_ = myAlphaPoint_;
                myAlphaPoint_ = myAlphaPoint_ - myIncrAlphaPoint_;
            } else if (i > (pointsL - 20)) {
                myAlphaLine_ = myAlphaLine_ - 0.05;
            }
            else {
                if (myAlphaLine_ <= myLineMaxAlpha_)
                    myAlphaLine_ = myAlphaLine_ + 0.05;
                myAlphaPoint_ = myLineMaxAlpha_;
            }

            //BLUR EFFECT
            if (!isMobile) {
                for (var j = 0; j < 5; j++) {
                    container_.lineStyle(myLineTick_,  lineConfig.line.color, myAlphaLine_ - 0.2 * j);
                    drawLineSegment_(container_, oldRandomIconPoints_.x, oldRandomIconPoints_.y + 0.7 * j, bezierIconPoints_[Math.ceil(objTwLine_.amt)].x, bezierIconPoints_[Math.ceil(objTwLine_.amt)].y + 0.7 * j);
                    drawLineSegment_(container_, oldRandomIconPoints_.x, oldRandomIconPoints_.y - 0.7 * j, bezierIconPoints_[Math.ceil(objTwLine_.amt)].x, bezierIconPoints_[Math.ceil(objTwLine_.amt)].y - 0.7 * j);
                }

                container_.lineStyle(myLineTick_,  lineConfig.line.color, myAlphaLine_);
                drawLineSegment_(container_, oldRandomIconPoints_.x, oldRandomIconPoints_.y, bezierIconPoints_[Math.ceil(objTwLine_.amt)].x, bezierIconPoints_[Math.ceil(objTwLine_.amt)].y);

                container_.lineStyle(myLineTick_,  lineConfig.line.color, myAlphaLine_);
                oldRandomIconPoints_ = new Phaser.Point(bezierIconPoints_[Math.ceil(objTwLine_.amt)].x, bezierIconPoints_[Math.ceil(objTwLine_.amt)].y);

            } else {
                container_.lineStyle(myLineTick_,  lineConfig.line.color, myAlphaLine_);
                drawLineSegment_(container_, oldRandomIconPoints_.x, oldRandomIconPoints_.y, bezierIconPoints_[Math.ceil(objTwLine_.amt)].x, bezierIconPoints_[Math.ceil(objTwLine_.amt)].y);
                oldRandomIconPoints_ = new Phaser.Point(bezierIconPoints_[Math.ceil(objTwLine_.amt)].x, bezierIconPoints_[Math.ceil(objTwLine_.amt)].y);
            }
        }
    }

    function drawLineSegment_(container, x1, y1, x2, y2) {
        container.moveTo(x1, y1);
        container.lineTo(x2, y2);
    }


    function createCanvas_() {
        clearAll_();
        objTwLine_ = {};
        container_ = null;
    }

    function addContainer_() {
        container_=new Phaser.Graphics(game_, 0, 0);
        mainGroup_.add(container_);
    }

    function clearAll_() {
        if (container_ != null) {
            mainGroup_.remove(container_);
            container_.clear();
            container_.destroy();
        }
        for ( var a in iTimO_)
            if (iTimO_[a]!=undefined)clearTimeout(iTimO_[a]);

    }

    var me = {
        startDraw: startDraw_,
        clearAll:clearAll_,
        clearAllStatic:clearAllStatic_,
        showStatic:showStatic_
    }

    initClass_();
    return me;    
}
