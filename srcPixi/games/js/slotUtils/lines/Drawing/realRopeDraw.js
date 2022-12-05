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
    var int_=0;

    function initClass_() {
        mainGroup_ = displayManager_.getGroup("lines");
        revert_ = false;
        ct_ = 0;
    }

    function startDraw_(smb, line, amt,points,delay) {
        if (rope_ != null ) {
            clearInterval(int_)
            removeChild(mainGroup_,rope_);
            rope_=null;
        }
        delay_=(delay!=null)?delay:0
        coinsIconPoints_ =points;
        var fsp = new FindSmoothPath(coinsIconPoints_, true, 2).getArrayOfPoints();

        rope_= new PIXI.SimpleRope(game.loader.resources['lines'].textures[0], fsp);

        //rope_ = game_.add.rope(0, 0, 'line_0_00', null, fsp);
        mainGroup_.add_Child(rope_);
        int_=setInterval(updateAnimation,10)

    };

    function updateAnimation () {

        if (ct_ < ReelConfig.lineFrames && revert_ == false) {
            if (ct_ < 6.5){
                if(parseInt(ct_ % ReelConfig.lineFrames)<6)rope_.texture=game.loader.resources["lines"].textures[parseInt(ct_ % ReelConfig.lineFrames)];
            }else{
               if( parseInt(ct_ -7% ReelConfig.lineFrames)<6)rope_.texture=game.loader.resources["lines2"].textures[parseInt(ct_-7 % (ReelConfig.lineFrames))];
            }

            ct_ += inc_;
        } else {
            setTimeout(clearAll_,1000);
        }
    }

    function showStatic_(smb, line, amt,points,delay){
        if (rope_ !=null ){
            clearInterval(int_)
            removeChild(mainGroup_,rope_);
            rope_=null;
        }
        delay_=(delay!=null)?delay:0
        coinsIconPoints_ =points;
        var fsp = new FindSmoothPath(coinsIconPoints_, true, 2).getArrayOfPoints();
        rope_ = new PIXI.SimpleRope(game.loader.resources['line_0_static'].texture, fsp);
        //rope_ = game_.add.rope(0, 0, 'line_0_static', null, fsp);
        mainGroup_.add_Child(rope_);
        setTimeout(clearAllStatic_,delay_)
    }

    function clearAllStatic_() {
        if (rope_ !=null) {
            clearInterval(int_);
            removeChild(mainGroup_,rope_);
            rope_=null;
        }
    }

    function clearAll_() {
        if (rope_ !=null){
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
