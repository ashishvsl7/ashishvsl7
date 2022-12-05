/**
 * KiS Framework, Created by Fabry on 08/03/2016.
 */
function BounceWin(gameRef, gameClass, config, txt){
    var gameRef_=gameRef;
    var gameClass_=gameClass;
    var ReelConfig_=config;
    var txt_=txt;
    var dispManager_;
    var winTxt_;
    var startCb_;
    var updateCb_;
    var completeCb_;
    var prevValue;
    var twObject={};
    var winClasses_= (ReelConfig_.winTxtClasses!=null)?ReelConfig_.winTxtClasses:[  1,    2,   5,   10,   20,  50, 200, 500, 1000,9999999999];
    var winDuration_=(ReelConfig_.winTxtDuration!=null)?ReelConfig_.winTxtDuration: [0.3, .5, .6,   1,    1.5, 2,  2.2,   2.3,   2.4  ,2.5 ];
    var winColors_=(ReelConfig_.winTxtColors!=null)?ReelConfig_.winTxtColors:["#ffffff","#ffffff","#ffffff","#ecc041","#ff6600","#ff0000","#9933ff","#3333cc","#00ff00","#0099ff"];
    var winEffect_=(ReelConfig_.winSndEffect!=null)?ReelConfig_.winSndEffect:["","","","1","2","3","4","5","6","7"];
    var accuSnd_=(ReelConfig_.winSndEffect!=null)?ReelConfig_.accuSnd:"incWin";
    var sndEffect_=(ReelConfig_.winSndEffect!=null)?ReelConfig_.winSndEffect:"winEffect";
    var scale_=1;
    var scaleBack_=1;
    var winStage_=-1;
    var totalDuration_=0;
    var tweens=[];
    var bCompleted_=false;
    var additionalPreText_="";
    
    function initClass_ (){
        dispManager_= displayManager_;
        winTxt_= dispManager_.getText(txt_);
        winTxt_.scale.x=1;
        winTxt_.scale.y=1;
        winTxt_.setText("");
    }

    function forceToComplete_(){
        logger(" force animation to complete " )
        for (var a in tweens) {
            if (tweens[a] != null) {
                if(tweens[a]!=null){
                    tweens[a].time(tweens[a].totalDuration());
                    tweens[a].kill();
                    tweens[a]=null;
                }
            }
        }
        winTxt_.scale.x=1;
        winTxt_.scale.y=1;
        bCompleted_=false;
        tweens=[];
    }

    function showShortWin_(value,start,update,complete,additionalText){
        logger(" showShortWin_" )
        bCompleted_=false;
        startCb_=start;
        updateCb_=update;
        completeCb_=complete;
        additionalPreText_=(additionalText!=null)?(Translate.do(additionalText)+" "):"";
        twObject.amt=0;
        winTxt_.amt=value;
        //gcmCalls_("PAID",value);
        if (!gameClass_.getCompulsivePlayer())soundManager_.playSound(accuSnd_);
        totalDuration_=1;
        tweens.push(TweenMax.to(twObject,(gameClass_.getCompulsivePlayer())?0.3:1,{amt:value,onUpdate:updatingValue_,onComplete:scaleComplete2_}));
    }

    function showWin_(value,start,update,complete,startVal,additionalText,scaleFactor,duration,easing){
        bCompleted_=false;
        startCb_=start;
        updateCb_=update;
        completeCb_=complete;
        additionalPreText_=(additionalText!=null)?(Translate.do(additionalText)+" "):"";
        twObject.amt=startVal;
        winTxt_.amt=value;
        soundManager_.playSound(accuSnd_);
        totalDuration_=duration;
        scale_=scaleFactor;
        scaleBack_=scale_*.85;
        if (easing!=undefined){
            tweens.push(TweenMax.to(winTxt_.scale,.5,{x:scale_,y:scale_,onComplete:scaleComplete_,repeat:-1,yoyo:true,ease:[easing].easeOut}));
        }else{
            tweens.push(TweenMax.to(winTxt_.scale,.5,{x:scale_,y:scale_,onComplete:scaleComplete_,repeat:-1,yoyo:true}));
        }

        tweens.push(TweenMax.to(winTxt_,.2,{y:winTxt_.y* 1+(scale_/2)}));
        tweens.push(TweenMax.to(twObject,totalDuration_,{ease:Power1.easeIn, amt:value,onUpdate:updatingValue_,onComplete:onComplete_}));
    }

    function showIstantUpdateWin_(value,additionalText){
        additionalPreText_=(additionalText!=null)?(Translate.do(additionalText)+" "):"";
        winTxt_.setText(ReelConfig.additionalPreText+additionalPreText_ +  balanceManager_.getCurrencySmb()+ "" + Util.formatNumber(value,Util.getNubersOfDecimal())+ReelConfig.additionalPostText);
        scaleBack_=winTxt_.scale.x;
        scale_=winTxt_.scale.x+(winTxt_.scale.x*1.2);
        tweens.push(TweenMax.to(winTxt_.scale,.2,{x:scale_,y:scale_,onComplete:showIstantUpdateWinScale_}));
    }
  
    function showIstantUpdateWinScale_(){
        tweens.push(TweenMax.to(winTxt_.scale,.2,{x:1,y:1}));
    }

    function onComplete_(){
        if(completeCb_!=null)completeCb_();
    }
    
    function scaleComplete2_(){
        soundManager_.stopSound(accuSnd_);
        if (!gameClass_.getCompulsivePlayer() && soundManager_.getSound(sndEffect_+winEffect_[winStage_])!=null)soundManager_.getSound(sndEffect_+winEffect_[winStage_]).play(); //final stage sound
        tweens.push(TweenMax.to(winTxt_.scale,.2,{x:winTxt_.scale.x*scaleBack_,y:winTxt_.scale.y*scaleBack_,onComplete:showIstantUpdateWinScale_}));
        winTxt_.fill=winColors_[0];
        bCompleted_=true;
    }

    function scaleComplete_(){
        soundManager_.stopSound(accuSnd_);
        if (soundManager_.getSound(sndEffect_+winEffect_[winStage_])!=null)soundManager_.getSound(sndEffect_+winEffect_[winStage_]).play(); //final stage sound
        winTxt_.fill=winColors_[0];
        bCompleted_=true;
    }

    function updatingValue_ (){
        var value = Util.formatNumber(twObject.amt,Util.getNubersOfDecimal());
        winTxt_.setText(ReelConfig.additionalPreText+ additionalPreText_ +balanceManager_.getCurrencySmb()+ "" + value+ReelConfig.additionalPostText);
        if (updateCb_)updateCb_(value);
    }

    function changeFilters_(color) {
        winTxt_.stroke = color;
    }

    function getInterruptedWinAnim_(){
        return !bCompleted_;
    }

    var me={
        showWin:showWin_,
        showShortWin:showShortWin_,
        showIstantUpdateWin:showIstantUpdateWin_,
        getTotalDuration:function(){
            return totalDuration_;
        },
        resetWinManager:function(){
            totalDuration_=0;
        },
        clearAll:function(){
            for (var a in tweens)
                if(tweens[a]!=null){
                    tweens[a].kill();
                    tweens[a]=null;
                }
            winTxt_.setText("");
            tweens=[];
        },
        forceToComplete:forceToComplete_,
        changeFilters:changeFilters_,
        getInterruptedWinAnim:getInterruptedWinAnim_,
        winAnimStarted:function(){
            bCompleted_=false;
        }
    }
    initClass_();
    return me;
}
