/**
 * KiS Framework, Created by Fabry on 22/04/2016.
 */
function TwinReels(gameRef,gameClass){
    var game_=gameRef;
    var gameClass_=gameClass;
    var mainGroup_;
    var twinReels_=[];
    var reelHiLi_=[];

    function initClass_(){
        mainGroup_=displayManager_.getGroup("twinReels");
    }

    function setTwinReels_(tr){
        twinReels_=tr;
    }

    function showTwinReels_(){
        var index=0;
        var offset=0;
        hideTwinReels_();
        for (var i = 0; i < twinReels_.length; i++) {
            offset=0;
            if (twinReels_[i]!=null) {
                var reels = [i, twinReels_[i]];
                if (game_.cache.checkImageKey("twinReels") == true) {
                    for (l = 0; l < reels.length; l++) {
                        reelHiLi_[index] = game_.add.sprite(ReelConfig.reel.deltaX_0 + ( (reels[l]+ offset) * ReelConfig.icon.width ), displayManager.groups.twinReels.y, "twinReels");
                        reelHiLi_[index].animations.add("anim");
                        reelHiLi_[index].animations.play("anim", 12, true, false);//todo parametric loop
                        //winSmb_[i].anim[a].width = ReelConfig.icon.width;
                        reelHiLi_[index].height =displayManager.groups.twinReels.height;
                        //winSmb_[i].simbolReference[a].visible = false;
                        mainGroup_.add(reelHiLi_[index]);
                        index++;
                        offset++;
                    }
                }
            }
        }
    }

    function hideTwinReels_(){
        for (var a in reelHiLi_)
            mainGroup_.remove(reelHiLi_[a]);
        reelHiLi_=[];
    }

    var me={
        setTwinReels:setTwinReels_,
        showTwinReels:showTwinReels_,
        hideTwinReels:hideTwinReels_
    }
    initClass_();
    return me;
}
