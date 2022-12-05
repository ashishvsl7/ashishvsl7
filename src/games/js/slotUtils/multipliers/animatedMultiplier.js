/**
 * KiS Framework, Created by Fabry on 15/03/2016.
 */
function Multiplier(gameRef,gameClass,multiManager) {
    var game_ = gameRef;
    var gameClass_ = gameClass;
    var multiManager_ = multiManager;
    var normalMulti_= Object.create(new Multiplier(gameRef,gameClass,multiManager));


    return normalMulti_;
}