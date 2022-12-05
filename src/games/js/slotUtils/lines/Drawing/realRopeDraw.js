/**
 * KiS Framework, Created by Fabry on 20/01/2017.
 */

function RopeDraw(gameRef, gameClass) {
    var gameClass_ = gameClass;
    var game_ = gameRef;
    var coinsIconPoints_=[];
    var mainGroup_;
    
    var rope_;
    var ct_ = 0;
    var revert_ = false;
    var intervalRope_;
    var inc_ = .70;
    var delay_=0;

    function initClass_() {
        mainGroup_ = displayManager_.getGroup("lines");
        revert_ = false;
        ct_ = 0;
    }

    function startDraw_(smb, line, amt,points,delay) {
        if (rope_ != null && rope_.updateAnimation != null) {
            rope_.updateAnimation = null;
            rope_.destroy();
        }
        delay_=(delay!=null)?delay:0
        coinsIconPoints_ =points;
        var fsp = new FindSmoothPath(coinsIconPoints_, true, 2).getArrayOfPoints();
        rope_ = game_.add.rope(0, 0, 'line_0_00', null, fsp);
        mainGroup_.add(rope_);

        rope_.updateAnimation = function () {
            rope_.loadTexture('line_0_' + Util.formatTwoDigit(parseInt(ct_ % ReelConfig.lineFrames)));
            if (ct_ < ReelConfig.lineFrames && revert_ == false) {
                ct_ += inc_;
            } else {
                setTimeout(clearAll_,delay_);
                //here manage reope restart
                //ropeRestart()
            }
        }
    }

    function showStatic_(smb, line, amt,points,delay){
        if (rope_ != null && rope_.updateAnimation != null) {
            rope_.updateAnimation = null;
            rope_.destroy();
        }
        delay_=(delay!=null)?delay:0
        coinsIconPoints_ =points;
        var fsp = new FindSmoothPath(coinsIconPoints_, true, 2).getArrayOfPoints();
        rope_ = game_.add.rope(0, 0, 'line_0_static', null, fsp);
        mainGroup_.add(rope_);
        setTimeout(clearAllStatic_,delay_)
    }

    function clearAllStatic_() {
        if (rope_ !=null) {
            rope_.updateAnimation = null;
            rope_.destroy();
        }
    }

    function clearAll_() {
        if (rope_ !=null && rope_.updateAnimation!=null){
            clearAllStatic_();
        }
    }

    var me = {
        startDraw: startDraw_,
        clearAll:clearAll_,
        showStatic:showStatic_,
        clearAllStatic:clearAllStatic_
    }

    initClass_();
    return me;
}