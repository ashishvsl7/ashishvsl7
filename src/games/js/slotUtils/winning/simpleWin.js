/**
 * KiS Framework, Created by Fabry on 31/03/2016.
 */
function SimpleWin(gameRef, gameClass, config, txt){
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

    var winStage_=-1;
    var totalDuration_=0;
    var tweens=[];
    var bCompleted_=false;
    var additionalPreText_="";

    function initClass_ (){
        dispManager_= displayManager_;
        winTxt_= dispManager_.getText(txt_);
        winTxt_.scale.x=1.5;
        winTxt_.scale.y=1.5;
        winTxt_.setText("");
    }

    function forceToComplete_(){
        logger(" force animation to complete " );
        for (var a in tweens) {
            if (tweens[a] != null) {
                if(tweens[a]!=null){
                    tweens[a].time(tweens[a].totalDuration());
                    tweens[a].kill();
                    tweens[a]=null;
                }
            }
        }
        winTxt_.scale.x=1.5;
        winTxt_.scale.y=1.5;
        bCompleted_=false;
        tweens=[];
    }

    function showShortWin_(value,start,update,complete,additionalText){
        logger(" showShortWin_" )
        bCompleted_=false;
        startCb_=start;
        updateCb_=update;
        completeCb_=complete;
        gameClass_.updateBalance(additionalText);
        additionalPreText_=(additionalText!=null)?(Translate.do(additionalText)+" "):"";
        twObject.amt=0;
        winTxt_.amt=value;
        //gcmCalls_("PAID", winAmtManager_.getWinAmtCash());
        if (!gameClass_.getCompulsivePlayer())soundManager_.playSound(accuSnd_);soundManager_.playSound(accuSnd_);
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
        soundManager_.playSound(accuSnd_);
        totalDuration_=duration;
        scale_=scaleFactor;
        winTxt_.amt=value;
        //gcmCalls_("PAID", winManager_.getWinAmtCash());
        //relax
        //clientMessageSend("value-win",winManager_.getWinAmtCash());

        // winTxt_.scale.x=scale_;
        // winTxt_.scale.y=scale_;
        tweens.push(TweenMax.to(winTxt_.scale,.5,{ease:Bounce.easeOut,x:scale_,y:scale_}));

        if (easing!=undefined){
            tweens.push(TweenMax.to(twObject,totalDuration_,{ease:[easing].easeInOut, amt:value,onUpdate:updatingValue_,onComplete:onComplete_}));
        }else{
            tweens.push(TweenMax.to(twObject,totalDuration_,{ amt:value,onUpdate:updatingValue_,onComplete:onComplete_}));
        }

        return tweens;
    }

    function showIstantUpdateWin_(value,additionalText){
        //gcmCalls_("PAID", winManager_.getWinAmtCash());
        //relax
        //clientMessageSend("value-win",winManager_.getWinAmtCash());

        additionalPreText_=(additionalText!=null)?(Translate.do(additionalText)+" "):"";
        winTxt_.setText(ReelConfig.additionalPreText+additionalPreText_ +  balanceManager_.getCurrencySmb()+ "" + Util.formatNumber(value,Util.getNubersOfDecimal())+ReelConfig.additionalPostText);
        gameClass_.updateBalance(additionalText);
    }

    function onComplete_(){
        if(completeCb_!=null)completeCb_();
        soundManager_.stopSound(accuSnd_);
        if (soundManager_.getSound(sndEffect_+winEffect_[winStage_])!=null)soundManager_.getSound(sndEffect_+winEffect_[winStage_]).play(); //final stage sound
        winTxt_.fill=winColors_[0];
        bCompleted_=true;
    }

    function scaleComplete2_(){
        soundManager_.stopSound(accuSnd_);
        if (!gameClass_.getCompulsivePlayer() && soundManager_.getSound(sndEffect_+winEffect_[winStage_])!=null)soundManager_.getSound(sndEffect_+winEffect_[winStage_]).play(); //final stage sound
        winTxt_.fill=winColors_[0];
        bCompleted_=true;
    }

    function scaleComplete_(){
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