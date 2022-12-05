function Button(gameRef,gameClass,group,config,_click,_over,_out,_visible){
    var game_=gameRef;
    var gameClass_=gameClass;
    var defGroup_=(group==null)?"buttons":group;
    var clickCB=_click;
    var overCB=_over;
    var outCB=_out;
    var config_=config;
    var initStage_=_visible;
    var mainGroup_;
    var mainTextGroup_;
    var buttonE_;
    var buttonD_;

    var init_ =function() {
        mainGroup_=displayManager_.getGroup(defGroup_);
        mainTextGroup_= displayManager_.getTexts();
        buttonE_=new Phaser.Button(game_,config_.x,config_.y ,config_.name,onClick_,this,1,2,0,0);
        buttonE_.name_=config_.name;
        var rotationSnap = 36;
        if (overCB!=null)buttonE_.onInputOver.add(overCB,this);
        if (outCB!=null)buttonE_.onInputOut.add(outCB,this);
        buttonE_._key=(config_.key!=null)?config_.key:config_.name;
        buttonE_.anchor.set(0.5,0.5);
        mainGroup_.add(buttonE_);
        if (config_.graphAssetD!=null){
            buttonD_ = new  Phaser.Sprite(game_,config_.x,config_.y ,config_.graphAssetD);
            buttonD_.anchor.set(0.5,0.5);
            mainGroup_.add(buttonE_);
        }

        if (config_.text!=null){
            var txt= new Phaser.Text(game_,config_.text.x , config_.text.y, '', {font: config_.text.font, fill: config_.text.fill,boundsAlignH: config_.text.align});
            txt.anchor.set((config_.text.anchorX!=undefined)?config_.text.anchorX:0,(config_.text.anchorY!=undefined)?config_.text.anchorY:0);
            txt._key=(config_.text.key!=null)?config_.text.key:config_.text.name;
            if (config_.text.text!=undefined)txt.setText(Translate.do(config_.text.text));
            buttonE_.addChild(txt);
            mainTextGroup_["txt"+config_.name]=txt;
        }

        if (config_.texts!=null){
            for (var t in config_.texts){
                var txt= new Phaser.Text(game_,config_.texts[t].x , config_.texts[t].y, '', {font: config_.texts[t].font, fill: config_.texts[t].fill,boundsAlignH: config_.texts[t].align});
                txt._key=(config_.texts[t].key!=null)?config_.texts[t].key:config_.texts[t].name;
                txt.anchor.set((config_.texts[t].anchorX!=undefined)?config_.texts[t].anchorX:0,(config_.texts[t].anchorY!=undefined)?config_.texts[t].anchorY:0);
                if (config_.texts[t].text!=undefined)txt.setText(Translate.do(config_.texts[t].text));
                buttonE_.addChild(txt);
                mainTextGroup_[t]=txt;
            }
        }        
        if (initStage_){
            enable_();
        }else{
            disable_();
        }
    }

    var applyState_= function(state){
        buttonE_.enable_=state;
        if (state==false)buttonE_.setFrames(0, 0, 0);   // set disable frame
        if (state==true)buttonE_.setFrames(1,2,0);
        if (config_.graphAssetD!=null && state==false)buttonD_.visible=true;
        if (config_.graphAssetD!=null && state==true)buttonD_.visible=false;
    }

    var enable_= function(){
        buttonE_.enable_=true;
        buttonE_.visible=true;
        if (config_.graphAssetD!=null)buttonD_.visible=false;
    }

    var disable_= function(){
        buttonE_.enable_=false;
        buttonE_.visible=false;
        if (config_.graphAssetD!=null)buttonD_.visible=true;
    }

    var onClick_=function(d){
        if (buttonE_.enable_) {
            buttonE_.frame = 0;
            clickCB(d);
        }
    }

    var me={
        applyState:applyState_,
        enable:enable_,
        disable:disable_,
        isButton:true,
        getButton:function (){
            return buttonE_;
        },
        isEnable:function(){
            return buttonE_.enable_;
        },
        getName:function(){
            return buttonE_.name_;
        }

    };

    init_();
    return me;
}

