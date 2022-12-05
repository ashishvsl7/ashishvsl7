/**
 * KiS Framework, Created by Fabry on 11/03/2016.
 */
function MessageBox(gameRef) {
    var game_ = gameRef;
    var isOn = false;
    var mainGroup_;
    var mainGroupSwipe_;
    var mainTextGroup_;
    var mainButtonGroup_ = [];
    var mainButtonSwipeGroup_ = [];
    var msgCB1_;
    var msgCB2_;
    var msgCB3_;
    var arguments_;
    var msgQueue=[];
    var msgYNQueue=[];
    var msgYNAQueue=[];
    var bgButtonSwipe_;
    var dragY_;

    function initClass_() {
        mainGroup_ = displayManager_.getGroup("msgBox");
        mainTextGroup_ = displayManager_.getTexts();
        if (mainGroup_!=undefined)initMsgBox_();
    }

    function showMessageFullScreen_(msg, msg1, cb1, cb2) {
        isOn = true;
        mainButtonSwipeGroup_["ok"].visible = true;
        mainTextGroup_["msg1s"].setText(Translate.do(msg));
        mainTextGroup_["msg2s"].setText(Translate.do(msg1));
        mainGroupSwipe_.visible = true;
        msgCB1_ = cb1;
        msgCB2_ = cb2;
    }

    function showMessage_(owner,msg, msg1, cb, args) {
        for (var a in displayManager.groups.msgBox.buttons)
            //mainButtonGroup_[a].button.setFrame(2);

        if (isOn==false) {
            fillFileds_(owner,1,msg, msg1, cb, null,null, args);
        }else{
            var obj={};
            obj.owner=owner;//todo remove owner support when Tom generic message ready
            obj.msg=msg;
            obj.msg1=msg1;
            obj.cb=cb;
            obj.args=args;
            msgQueue.push(obj);
        }
    }

    function showMessageYN_(owner,msg, msg1, cb1, cb2, args) {
        for (var a in displayManager.groups.msgBox.buttons)
           // mainButtonGroup_[a].button.setFrame(2);

        if (isOn == false) {
            fillFileds_(owner,2,msg, msg1, cb1, cb2, args);
        } else {
            var obj = {};
            obj.owner=owner;//todo remove owner support when Tom generic message ready
            obj.msg = msg;
            obj.msg1 = msg1;
            obj.cb = cb1;
            obj.cb2 = cb2;
            obj.args = args;
            msgYNQueue.push(obj);
        }
    }

    function showMessageYNA_(owner,msg, msg1, cb1, cb2,cb3, args) {
        for (var a in displayManager.groups.msgBox.buttons)
          //  mainButtonGroup_[a].button.setFrame(2);

        if (isOn == false) {
            fillFileds_(owner,3,msg, msg1, cb1, cb2,cb3, args);
        } else {
            var obj = {};
            obj.owner=owner;//todo remove owner support when Tom generic message ready
            obj.msg = msg;
            obj.msg1 = msg1;
            obj.cb = cb1;
            obj.cb2 = cb2;
            obj.cb3 = cb3;
            obj.args = args;
            msgYNAQueue.push(obj);
        }
    }

    function fillFileds_(owner,type,msg, msg1, cb1, cb2,cb3, args){
        isOn = true;
        mainButtonGroup_["ok"].visible = false;
        mainButtonGroup_["yes"].visible = false;
        mainButtonGroup_["no"].visible = false;
        mainButtonGroup_["myAccount"].visible = false;

        if (owner=="game"){
            mainGroup_.game.children[0].visible=true;
            mainGroup_.generic.children[0].visible=false;
        }else{
            mainGroup_.game.children[0].visible=false;
            mainGroup_.generic.children[0].visible=true;
        }
        if (type==1) {
            mainButtonGroup_["ok"].visible = true;

        }else if (type==2) {
            mainButtonGroup_["yes"].visible = true;
            mainButtonGroup_["no"].visible = true;

        }else{
            mainButtonGroup_["yes"].visible = true;
            mainButtonGroup_["no"].visible = true;
            mainButtonGroup_["myAccount"].visible = true;
        }
        mainTextGroup_["msg1"].setText(Translate.do(msg));
        mainTextGroup_["msg2"].setText(Translate.do(msg1));
        mainGroup_.visible = true;
        msgCB1_ = cb1;
        msgCB2_ = cb2;
        msgCB3_ = cb3;
        arguments_=args;
    }

    function doOk_() {
        if (msgCB1_ != null)msgCB1_(arguments_);
        checkQueue();
    }

    function doKo_() {
        if (msgCB2_ != null)msgCB2_(arguments_);
        checkQueue();
    }

    function doMyAccount_(){
        if (msgCB3_ != null)msgCB3_(arguments_);
        checkQueue();
    }

    function doFull_() {
        if (dragY_==undefined || bgButtonSwipe_.y-dragY_<100){
            bgButtonSwipe_.y=0;
            dragY_=0;
            return;
        }
        mainGroupSwipe_.visible = false;
        if (msgCB1_ != null)msgCB1_();
        checkQueue();
    }

    function doNotFull_() {
        mainGroupSwipe_.visible = false;
        if (msgCB2_ != null)msgCB2_();
        checkQueue();
    }


    function checkQueue(){
        if (bgButtonSwipe_!=undefined)bgButtonSwipe_.y=0;

        mainGroup_.visible = false;
        isOn=false;
    }

    function initMsgBox_() {
        for (var a in displayManager.groups.msgBox.buttons) {
            var c = addGroup();

            var buttonE = PixiButton(game_ ,displayManager.groups.msgBox.buttons[a].x, displayManager.groups.msgBox.buttons[a].y, displayManager.groups.msgBox.buttons[a].name,me[displayManager.groups.msgBox.buttons[a].evt],0,1,2 );
            buttonE.setAnchor(.5,.5);
            if(displayManager.groups.msgBox.buttons[a].scaleX!=null)buttonE.scale.x=displayManager.groups.msgBox.buttons[a].scaleX;
            if(displayManager.groups.msgBox.buttons[a].scaleY!=null)buttonE.scale.y=displayManager.groups.msgBox.buttons[a].scaleY;
            mainButtonGroup_[a] = c;
            mainButtonGroup_[a].button=buttonE;
            c.add_Child(buttonE);
            mainGroup_.add_Child(c);
            if (displayManager.groups.msgBox.buttons[a].texts != null) {
                for (var t in displayManager.groups.msgBox.buttons[a].texts) {
                    var txt = spriteManager_.addText ( displayManager.groups.msgBox.buttons[a].x+ displayManager.groups.msgBox.buttons[a].texts[t].x,  displayManager.groups.msgBox.buttons[a].y+ displayManager.groups.msgBox.buttons[a].texts[t].y, Translate.do(displayManager.groups.msgBox.buttons[a].texts[t].text),displayManager.groups.msgBox.buttons[a].texts[t].anchorX,displayManager.groups.msgBox.buttons[a].texts[t].anchorY, {
                        fontFamily: displayManager.groups.msgBox.buttons[a].texts[t].font,
                        fontSize: displayManager.groups.msgBox.buttons[a].texts[t].fontSize,
                        fill: displayManager.groups.msgBox.buttons[a].texts[t].fill,
                        boundsAlignH: displayManager.groups.msgBox.buttons[a].texts[t].align,
                        fontWeight:(displayManager.groups.msgBox.buttons[a].texts[t].weight==null)?'normal':displayManager.groups.msgBox.buttons[a].texts[t].weight
                    });
                    c.add_Child(txt);
                    mainTextGroup_[t] = txt;
                }
            }
        }
        mainGroup_.visible = false;
    }


    var me = {
        showMessage: showMessage_,
        showMessageYN: showMessageYN_,
        showMessageYNA:showMessageYNA_,
        showMessageFullScreen:showMessageFullScreen_,
        doOk: doOk_,
        doKo: doKo_,
        doFull:doFull_,
        doNotFull:doNotFull_,
        doMyAccount:doMyAccount_,
        getIsOnMessage:function(){
            return isOn;
        }
    }

    initClass_();
    return me;
}