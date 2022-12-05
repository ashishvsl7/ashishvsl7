/**
 * KiS Framework, Created by Fabry on 14/03/2016.
 */
function Multiplier(gameRef,gameClass,multiManager){
    var game_ = gameRef;
    var gameClass_ = gameClass;
    var multiManager_=multiManager;
    var multi_=[];
    var mainGroup_;

    function initClass_(){
        mainGroup_=displayManager_.getGroup("multipliers");
        resetMultipliers_();
    }

    function addMultiplier_(value){
        if (mainGroup_[value]!=null)
            multi_.push(mainGroup_[value]);
    }

    function resetMultipliers_(){
        for (var a in multi_){//todo parameter
            multi_[a].children[0].tint = 0x999999;
            multi_[a].children[0].alpha = 0.5;
        }
    }

    function updateMultiplier_(num,anim){
        resetMultipliers_();
        if (anim) {
            soundManager_.playSound("mult" + num);
            TweenMax.to(multi_[num].children[0].scale, .3, {
                x: 1.3,
                y: 1.3,
                ease: Sine.easeInOut,
                onComplete: back_,
                onCompleteParams: [num]
            });
        }else {
            multi_[num].children[0].tint = 0xffffff;
            multi_[num].children[0].alpha = 1;
        }
    }

    function back_(num){
        multi_[num].children[0].tint=0xffffff;
        multi_[num].children[0].alpha=1;
        TweenMax.to(multi_[num].children[0].scale,.2 ,{x:.5,y:.5,ease:Sine.easeInOut});
    }

    var me ={
        addMultiplier:addMultiplier_,
        updateMultiplier:updateMultiplier_,
        resetMultipliers:resetMultipliers_
    }
    initClass_();
    return me;

}