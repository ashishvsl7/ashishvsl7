/**
 * KiS Framework, Created by Fabry on 08/03/2016.
 */
function BigWin(gameRef,gameClass_) {
    var gameRef_ = gameRef;
    var gameClass_ = gameClass_;
    var winAmtClass_= Object.create(new BounceWin(gameRef,gameClass));

    return winAmtClass_;
}