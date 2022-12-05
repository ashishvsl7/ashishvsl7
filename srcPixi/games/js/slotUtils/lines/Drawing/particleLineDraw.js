/**
 * KiS Framework, Created by Fabry on 29/02/2016.
 */
function ParticleLineDraw(gameRef,gameClass) {
    var game_= gameRef;
    var gameClass_=gameClass;
    var lineDraw_= Object.create(new LineDraw(gameRef,gameClass));

    function initClass_ () {
        draw_= new ParticleLineDraw(game_,gameClass_);
    }

    function prepareWinnings_ (winSmb){

    }

    lineDraw_.clearLine_ = function(){

    }

    lineDraw_.showLine_ = function(){

    }

    lineDraw_.drawLine = function (line, amt, txtCoin, txtNum) {

    };

    initClass_();
    return lineDraw_;
}