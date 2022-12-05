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
        mainGroupSwipe_ = displayManager_.getGroup("swipeBox");
        mainTextGroup_ = displayManager_.getTexts();
        if (mainGroup_!=undefined)initMsgBox_();
        if (mainGroupSwipe_!=undefined)initMsgQuestion_();
    }

    function showMessageFullScreen_(msg, msg1, cb1, cb2) {
        console.log("show msg " + msg)
        isOn = true;
        mainButtonSwipeGroup_["ok"].visible = true;
        mainTextGroup_["msg1s"].setText(Translate.do(msg));
        mainTextGroup_["msg2s"].setText(Translate.do(msg1));
        mainGroupSwipe_.visible = true;
        msgCB1_ = cb1;
        msgCB2_ = cb2;
    }

    function showMessage_(owner,msg, msg1, cb, args) {
        console.log("show msg1 " + msg)
        for (var a in displayManager.groups.msgBox.buttons)
            mainButtonGroup_[a].frame=2;

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
        console.log("show msg2 " + msg)
        for (var a in displayManager.groups.msgBox.buttons)
            mainButtonGroup_[a].frame=2;

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
        console.log("show msg3 " + msg)
        for (var a in displayManager.groups.msgBox.buttons)
            mainButtonGroup_[a].frame=2;

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
        console.log("fill msg " + msg)
        isOn = true;
        mainButtonGroup_["ok"].visible = false;
        mainButtonGroup_["yes"].visible = false;
        mainButtonGroup_["no"].visible = false;
        mainButtonGroup_["myAccount"].visible = false;

        if (owner=="game"){ //todo remove owner support when Tom generic message ready
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
        framework.showFramework(); //this avoid new interface  to keep UI buttons not visible
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
        if (msgQueue.length>0){//todo remove owner support when Tom generic message ready
            fillFileds_(msgQueue[0].owner,1,msgQueue[0].msg,msgQueue[0].msg1,msgQueue[0].cb,null,msgQueue[0].args);
            msgQueue.shift();
        }else if (msgYNQueue.length>0){
            fillFileds_(msgYNQueue[0].owner,2,msgYNQueue[0].msg,msgYNQueue[0].msg1,msgYNQueue[0].cb,msgYNQueue[0].cb2,msgYNQueue[0].args);
            msgYNQueue.shift();
        }else if (msgYNAQueue.length>0){
            fillFileds_(msgYNAQueue[0].owner,3,msgYNAQueue[0].msg,msgYNAQueue[0].msg1,msgYNAQueue[0].cb,msgYNAQueue[0].cb2,msgYNAQueue[0].cb3,msgYNAQueue[0].args);
            msgYNAQueue.shift();
        }else{
            mainGroup_.visible = false;
            isOn=false;
        }
    }

    function initMsgBox_() {
        var bgButton = new Phaser.Button(game_, 0, 0, null);
        bgButton.width =1280;
        bgButton.height =720;
        mainGroup_.add(bgButton);

        for (var a in displayManager.groups.msgBox.buttons) {
            var buttonE = new Phaser.Button(game_, displayManager.groups.msgBox.buttons[a].x, displayManager.groups.msgBox.buttons[a].y, displayManager.groups.msgBox.buttons[a].name, me[displayManager.groups.msgBox.buttons[a].evt], this, 1,2,0,0);
            mainButtonGroup_[a] = buttonE;
            buttonE.anchor.set(0.5, 0.5);
            mainGroup_.add(buttonE);
            if (displayManager.groups.msgBox.buttons[a].texts != null) {
                for (var t in displayManager.groups.msgBox.buttons[a].texts) {
                    var txt = new Phaser.Text(game_, displayManager.groups.msgBox.buttons[a].texts[t].x, displayManager.groups.msgBox.buttons[a].texts[t].y, '', {
                        font: displayManager.groups.msgBox.buttons[a].texts[t].font,
                        fill: displayManager.groups.msgBox.buttons[a].texts[t].fill,
                        boundsAlignH: displayManager.groups.msgBox.buttons[a].texts[t].align,
                        fontWeight:(displayManager.groups.msgBox.buttons[a].texts[t].weight==null)?'normal':displayManager.groups.msgBox.buttons[a].texts[t].weight
                    });
                    txt.anchor.set((displayManager.groups.msgBox.buttons[a].texts[t].anchorX != undefined) ? displayManager.groups.msgBox.buttons[a].texts[t].anchorX : 0, (displayManager.groups.msgBox.buttons[a].texts[t].anchorY != undefined) ? displayManager.groups.msgBox.buttons[a].texts[t].anchorY : 0);
                    if (displayManager.groups.msgBox.buttons[a].texts[t].text != undefined)txt.setText(Translate.do(displayManager.groups.msgBox.buttons[a].texts[t].text));
                    if (window.devicePixelRatio != null) txt.resolution = window.devicePixelRatio;

                    buttonE.addChild(txt);
                    mainTextGroup_[t] = txt;
                }
            }
        }
        mainGroup_.visible = false;
    }

    function initMsgQuestion_() {
        bgButtonSwipe_ = new Phaser.Button(game_, 0, 0,null);
        bgButtonSwipe_.width = 1280;
        bgButtonSwipe_.height = 720;
        mainGroupSwipe_.addChild(bgButtonSwipe_);

        bgButtonSwipe_.input.enableDrag();
        bgButtonSwipe_.events.onDragStart.add(doStartDrag_);
        bgButtonSwipe_.events.onDragUpdate.add(doFull_);
        bgButtonSwipe_.input.allowHorizontalDrag=false;

        for (var a in displayManager.groups.swipeBox.buttons) {
            var buttonE = new Phaser.Button(game_, displayManager.groups.swipeBox.buttons[a].x, displayManager.groups.swipeBox.buttons[a].y, displayManager.groups.swipeBox.buttons[a].name, me[displayManager.groups.swipeBox.buttons[a].evt], this, 1,2,0,0);
            mainButtonSwipeGroup_[a] = buttonE;
            buttonE.anchor.set(0.5, 0.5);
            mainGroupSwipe_.add(buttonE);
            if (displayManager.groups.swipeBox.buttons[a].texts != null) {
                for (var t in displayManager.groups.swipeBox.buttons[a].texts) {
                    var txt = new Phaser.Text(game_, displayManager.groups.swipeBox.buttons[a].texts[t].x, displayManager.groups.swipeBox.buttons[a].texts[t].y, '', {
                        font: displayManager.groups.swipeBox.buttons[a].texts[t].font,
                        fill: displayManager.groups.swipeBox.buttons[a].texts[t].fill,
                        boundsAlignH: displayManager.groups.swipeBox.buttons[a].texts[t].align,
                        fontWeight:(displayManager.groups.swipeBox.buttons[a].weight==null)?'normal':displayManager.groups.swipeBox.buttons[a].weight
                    });
                    txt.anchor.set((displayManager.groups.swipeBox.buttons[a].texts[t].anchorX != undefined) ? displayManager.groups.swipeBox.buttons[a].texts[t].anchorX : 0, (displayManager.groups.swipeBox.buttons[a].texts[t].anchorY != undefined) ? displayManager.groups.swipeBox.buttons[a].texts[t].anchorY : 0);
                    if (displayManager.groups.swipeBox.buttons[a].texts[t].text != undefined)txt.setText(Translate.do(displayManager.groups.swipeBox.buttons[a].texts[t].text));
                    buttonE.addChild(txt);
                    mainTextGroup_[t] = txt;
                }
            }
        }
    }

    function doStartDrag_(){
        dragY_=bgButtonSwipe_.y;
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