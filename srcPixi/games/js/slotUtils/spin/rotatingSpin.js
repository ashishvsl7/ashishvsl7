/**
 * KiS Framework, Created by Fabry on 04/03/2016.
 */
function RotatingSpin(gameRef,gameClass){
    var gameRef_=gameRef;
    var gameClass_=gameClass_;
    var normalSpin_= Object.create(new Spin(gameRef,gameClass));

    normalSpin_.createReels= function() {
        var index = 0;
        for (var i = 0; i < ReelConfig.numReels; i++) {
            normalSpin_.reel_[i] = new Reel(game_,gameClass,i);
            for (var j = 0; j < ReelConfig.icons[i]; j++) {
                var ind=parseInt(Math.random() * ReelConfig.numIcon)+1;
                normalSpin_.reel_[i].setIcon(j, ind);
            }
        }

        //not needed
        //var mask = game_.add.graphics(0, 0);
        //mask.beginFill(0xffffff);
        //mask.drawRect(ReelConfig.mask.x, ReelConfig.mask.y,ReelConfig.mask.width,ReelConfig.mask.height);
        //gameClass.getDisplayManager().getGroup("reels").mask = mask;
    }



    return normalSpin_;
}