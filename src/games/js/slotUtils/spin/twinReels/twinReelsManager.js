/**
 * KiS Framework, Created by Fabry on 22/04/2016.
 */
function TwinReelsManager(gameRef,gameClass) {
    var game_ = gameRef;
    var gameClass_ = gameClass;
    var tweenReelsClass_;
    var twinReels_=[];
    var twinReelsActive_=false;
    var hasWinning_=false;

    function initClass_(){
        if (ReelConfig.twinReelsFeature=="normal") {
            tweenReelsClass_ = new TwinReels(game_, gameClass_);
            ReelConfig.reelInterval=0;//todo double check
        }
    }

    function parse_(reels){
        //todo remove , fake searching for tween reels
        if(tweenReelsClass_==null)return;
        twinReels_=[];
        for (var i = 0; i < reels.length-1; i++) {
            for (var a =  ReelConfig.icons[i]-1; a >=  ReelConfig.icons[i]-3; a--) {
                if (reels[i].getIconNum(a)==reels[(Number(i)+1)].getIconNum(a)){
                    twinReels_[i]=(Number(i)+1);
                }else{
                    twinReels_[i]=null;
                    break;
                }
            }
        }
        tweenReelsClass_.setTwinReels(twinReels_);
        twinReelsActive_=false;
        for (a in twinReels_){
            if (twinReels_[a]!=null){
                twinReelsActive_=true;
                break;
            }
        }
        return twinReels_;
    }

    function showTwinReels_(){
        if(tweenReelsClass_==null)return;
        if(twinReelsActive_)tweenReelsClass_.showTwinReels();
    }

    function hideTwinReels_(){
        if(tweenReelsClass_==null)return;
        if(twinReelsActive_)tweenReelsClass_.hideTwinReels();
    }

    function showWin_(){
        if(tweenReelsClass_==null)return;
        if(twinReelsActive_ && hasWinning_)tweenReelsClass_.showWin();
    }

    var me = {
        parse:parse_,
        showTwinReels:showTwinReels_,
        hideTwinReels:hideTwinReels_,
        showWin:showWin_
    }

    initClass_();
    return me;
}
