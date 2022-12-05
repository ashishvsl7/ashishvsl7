/**
 * KiS Framework, Created by Fabry on 21/03/2016.
 */
function MultiLevelJackpot(gameRef, gameClass) {
    var game_ = gameRef;
    var gameClass_ = gameClass;
    var jackpotClass_ = Object.create(new Jackpot(gameRef, gameClass));
    var jackpotClassObject_ = jackpotClass_.__proto__;



    return jackpotClass_;
}