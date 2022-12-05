/**
 * KiS Framework, Created by Fabry on 15/03/2016.
 */
function Wild(gameRef,gameClass){
    var game_ = gameRef;
    var gameClass_ = gameClass;
    this.wildReelSmb_={};
    this.mainGroup_;
    var scope=this;

    function initClass_(){
        scope.mainGroup_=displayManager_.getGroup("wild");
    }

    function showWild(){
    }

    function resumeWildReel(){
    }
    initClass_();
    return this;

}