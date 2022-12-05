/**
 * KiS Framework, Created by Fabry on 09/08/2016.
 */
function FreeSpinsAccumulator(gameRef, gameClass) {
    var game_ = gameRef;
    var gameClass_ = gameClass;
    var multiClass_;
    var multipliers_=[];
    var multiLevel_=-1;

    function initClass_(){
        if (ReelConfig.accumulatorType==null)return;
        if (ReelConfig.accumulatorType == "FS")
            multiClass_ = new FreeSpinsAccumulator(game_, gameClass_);
        addAccumulator_();
        updateAccumulator_(multiLevel_);
    }

    function addAccumulator_(value){
        if (ReelConfig.accumulatorType==null)return;
        multipliers_.push(value);
        for (var a in ReelConfig.multipliers)//todo parameter
            multiClass_.addMultiplier("x" + ReelConfig.multipliers[a]);
    }

    function resetAccumulator_(){
        if (ReelConfig.accumulatorType==null)return;
        if (multiLevel_==winManager_.getConsecutiveWinnings())return;
        multiClass_.resetMultipliers();
        updateMultiplier_(false);
    }

    function updateAccumulator_(anim){
        if (ReelConfig.accumulatorType==null)return;
        if (multiLevel_==winManager_.getConsecutiveWinnings())return;
        multiLevel_=winManager_.getConsecutiveWinnings();
        multiClass_.updateMultiplier(multiLevel_,anim);
    }

    var me ={
        updateAccumulator:updateAccumulator_,
        resetAccumulator:resetAccumulator_
    }
    initClass_();
    return me;

}