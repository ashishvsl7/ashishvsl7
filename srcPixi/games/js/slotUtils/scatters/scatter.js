/**
 * KiS Framework, Created by Fabry on 05/05/2017.
 */
function Scatter(gameRef,gameClass,num) {
    var game_ = gameRef;
    var gameClass_ = gameClass;
    var triggerNum_ = num;
    var mainGroup_;
    var scope = this;

    function initClass_() {
        mainGroup_ = displayManager_.getGroup("scatter");
    }

    function showScatter_(obj, smb) {

        soundManager_.playSound("animScatter_" + triggerNum_);
        var sc=winManager_.getNormalScatterSimbs();
        for (var a in sc) {
            if (game.cache.checkImageKey("anim" + triggerNum_) == true) {
                var s = game_.add.sprite(sc[a].x, sc[a].y, "anim" + triggerNum_);
                s.anchor.set(.5, .5);
                s.smbNum=triggerNum_;
                s.animations.add("anim");
                s.animations.play("anim", 24, false, false, cbEndAnim, sc[a]);//todo parametric loop
                // s.width = ReelConfig.icon.width;
                // scope.scatterSmb_.anim[a].height = ReelConfig.icon.height;
                //mainGroup_.add(s);
                spinManager_.getReelGroup(sc[a].reel).add(s);
                spinManager_.setAnimationMap(sc[a].reel,sc[a].icon,s);
                sc[a].visible = false;
            }
        }
    }

    function clearScatter_() {

    }

    function cbEndAnim(smb) {
       // smb.visible = true;
    }

    function bounce(txt) {
        TweenMax.to(txt.scale, .3, {x: 1.2, y: 1.2, ease: Bounce.easeOut, onComplete: move, onCompleteParams: [txt]});
    }

    function move(txt) {
        TweenMax.to(txt, 1, {alpha: 0, y: txt.y - 200, onComplete: kill, onCompleteParams: [txt]});
    }

    function kill(txt) {
        txt.visible = false;
        txt.destroy();
    }

    var me = {
        showScatter: showScatter_,
        clearScatter: clearScatter_
    }

    initClass_();
    return me;
}