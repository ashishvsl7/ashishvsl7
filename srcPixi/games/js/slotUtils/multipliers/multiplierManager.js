/**
 * KiS Framework, Created by Fabry on 14/03/2016.
 */
function MultiplierManager(gameRef,gameClass){
    var game_ = gameRef;
    var gameClass_ = gameClass;
    var multiClass_;
    var multipliers_=[];
    var multiLevel_=-1;

    function initClass_(){
        if (ReelConfig.multiplierType==null)return;
        if (ReelConfig.multiplierType == "image")
            multiClass_ = new Multiplier(game_, gameClass_);
        else if (ReelConfig.multiplierType == "sprite")
            multiClass_ = new Multiplier(game_, gameClass_);
        addMultiplier_();
        updateMultiplier_(multiLevel_);
    }

    function addMultiplier_(value){
        if (ReelConfig.multiplierType==null)return;
        multipliers_.push(value);
        for (var a in ReelConfig.multipliers)//todo parameter
            multiClass_.addMultiplier("x" + ReelConfig.multipliers[a]);
    }

    function resetMultipliers_(){
        if (ReelConfig.multiplierType==null)return;
        if (multiLevel_==winManager_.getConsecutiveWinnings())return;
        multiClass_.resetMultipliers();
        updateMultiplier_(false);
    }

    function updateMultiplier_(anim){
        if (ReelConfig.multiplierType==null)return;
        if (multiLevel_==winManager_.getConsecutiveWinnings())return;
        multiLevel_=winManager_.getConsecutiveWinnings();
        multiClass_.updateMultiplier(multiLevel_,anim);
    }

    var me ={
        updateMultiplier:updateMultiplier_,
        resetMultipliers:resetMultipliers_
    }
    initClass_();
    return me;

}