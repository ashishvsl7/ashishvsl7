/**
 * KiS Framework, Created by Fabry on 15/03/2016.
 */
function WildManager(gameRef,gameClass,_ReelConfig) {
    var game_ = gameRef;
    var gameClass_ = gameClass;
    var wildClass_;
    var triggerIcon_;
    var ReelConfig_=_ReelConfig;

    function initClass_(){
        triggerIcon_=ReelConfig_.wildNum;//todo
        try{
            wildClass_= new window[ReelConfig_.wildType](game_,gameClass_);
        }catch(e){
            console.log("error looking for class " + ReelConfig_.wildType);
        }
    }

    function showWild_(wild){
        if (wildClass_==null)return;
        wildClass_.showWild(wild);
    }

    function clearWild_(wild){
        if (wildClass_==null || wild==null )return;
        wildClass_.clearWild(wild);
    }

    function endAnimHandle_(wild,evt){
        if (wildClass_==null || wild==null )return;

        if (wild!=null){
            evt.addEvent(showWild_,(ReelConfig_.wildDelay!=null)?ReelConfig_.wildDelay:0,wild);
            evt.addEvent(gameClass_.fakeEvent, ReelConfig_.animDelayAfterWild);
        }
    }

    function wildReelWinAnim_(reel,smb){
        if (wildClass_==null)return;
        wildClass_.wildReelWinAnim(reel,smb);
    }

    function resetWilds_(){
        if (wildClass_==null)return;
        if (wildClass_.resetWilds!=null)wildClass_.resetWilds();
    }

    var me = {
        clearWild:clearWild_,
        resetWilds:resetWilds_,
        showWild:showWild_,
        endAnimHandle:endAnimHandle_,
        wildReelWinAnim:wildReelWinAnim_,
        getTriggerIcon:function(){
            return (triggerIcon_!=null)?triggerIcon_:999;
        },
        getWildReel:function(i){
            return (winManager_.getWildSimbs()[i].anim[0]!=null)?true:false;
        },
        getWildReelStickyNum:function(i){
            ret=0;
            if (winManager_.getWildSimbs()[i]!=null &&  winManager_.getWildSimbs()[i].reel !=null &&  winManager_.getWildSimbs()[i].sticky!=null){
                ret=(winManager_.getWildSimbs()[i].sticky!=undefined)?winManager_.getWildSimbs()[i].sticky:0;
            }
            return ret;
        },
        hasWildReel:function(){
            if (ReelConfig_.wildType!="WildReel" && ReelConfig_.wildType!="WildShiftingReel" && ReelConfig_.wildType!="ExpandingStickyWild" && ReelConfig_.wildType!="ExpandingStickyWild") {
                return false;
            }else{
                return wildClass_.hasWildReel();
            }
        },
        resumeWildReel:function(){
            if (wildClass_.resumeWildReel!=null)wildClass_.resumeWildReel();
        },
        isReelWilded:function(num){
            if (wildClass_.isReelWilded!=null)return wildClass_.isReelWilded(num);
            return false;
        },
        isSymbolWilded:function(reel,smb){
            if (wildClass_.isSymbolWilded!=null)return wildClass_.isSymbolWilded(reel,smb);
            return false;
        }

    }

    initClass_();
    return me;
}