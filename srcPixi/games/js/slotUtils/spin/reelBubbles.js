function  ReelBubbles(gameRef,gameClass,_num,num2,swap){
    var game_=gameRef;
    var gameClass_=gameClass;
    var swap_=swap;
    var num=_num;
    var smbNum=(num2!=undefined)?num2:-1
    var img=[];
    var imgBlurr=[];
    var btn=[];
    var pos=[];
    var realPos_B_=[];
    var realPos_T_=[];
    var startPos;
    var iconN=[];
    var group;
    var groupOver;
    var mainGroup;
    var timeStart_;
    var pressDuration_;
    var iCtrl=0;
    var btnX_=ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * num);
    var btnY_=0;
    var btnW_=ReelConfig.reel.deltaX;
    var btnH_=ReelConfig.reel.deltaY_0-(ReelConfig.reel.deltaY * (ReelConfig.icons[num]-1));
    var button_;
    var lastPos_=-1*btnH_;
    var iCtrl;
    var dropEnable=false;

    function Point(x, y){
        this.x = x || 0;
        this.y = y || 0;
    }

    function init (swap){
        pressDuration_= (displayManager.groups.reelsPt!=null)?displayManager.groups.reelsPt.clickDuration:2000;
        mainGroup=displayManager_.getGroup("reels");
        group= game_.add.group();
        groupOver= game_.add.group();

        for (var j = 0; j < ReelConfig.icons[num]; j++) {
            img[j]="";
            imgBlurr[j]=null;
            btn[j]=null;
            if (swap!=false) {
                var pos_ = new Point(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * num), ReelConfig.reel.deltaY_0 - (ReelConfig.reel.deltaY * j));
            }else{
                var pos_ = new Point(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * num), ReelConfig.reel.deltaY_0 + (ReelConfig.reel.deltaY * j));
            }
            pos[j]= new Point(pos_.x,pos_.y);
            startPos=group.y;
            realPos_B_[j]=j;
            realPos_T_[j]=j;
        }
        if (swap!=false) {
            if (ReelConfig.numIcons==3){
                realPos_B_[0] = 2 + ReelConfig.numIconsOnBottom;
                realPos_B_[1] = 1 + ReelConfig.numIconsOnBottom;
                realPos_B_[2] = 0 + ReelConfig.numIconsOnBottom;

                realPos_T_[0] = ReelConfig.icons[num] - 1 - ReelConfig.numIconsOnTop - 0;
                realPos_T_[1] = ReelConfig.icons[num] - 1 - ReelConfig.numIconsOnTop - 1;
                realPos_T_[2] = ReelConfig.icons[num] - 1 - ReelConfig.numIconsOnTop - 2;
            }else if (ReelConfig.numIcons==4){
                realPos_B_[0] = 3 + ReelConfig.numIconsOnBottom;
                realPos_B_[1] = 2 + ReelConfig.numIconsOnBottom;
                realPos_B_[2] = 1 + ReelConfig.numIconsOnBottom;
                realPos_B_[3] = 0 + ReelConfig.numIconsOnBottom;

                realPos_T_[0] = ReelConfig.icons[num] - 1 - ReelConfig.numIconsOnTop - 0;
                realPos_T_[1] = ReelConfig.icons[num] - 1 - ReelConfig.numIconsOnTop - 1;
                realPos_T_[2] = ReelConfig.icons[num] - 1 - ReelConfig.numIconsOnTop - 2;
                realPos_T_[3] = ReelConfig.icons[num] - 1 - ReelConfig.numIconsOnTop - 3;
            }
        }
        if (ReelConfig.canSwipe==true && framework.isTouch()){
            button_=new Phaser.Button(game_,btnX_,-1*btnH_);
            button_.width=btnW_;
            button_.height=btnH_;
            button_.inputEnabled = true;

            button_.input.enableDrag();
            button_.events.onDragStart.add(reelDown_);
            button_.events.onDragStop.add(reelGo_);
            button_.events.onDragUpdate.add(keepControl_);
            button_.input.allowHorizontalDrag=false;
            group.add(button_);
        }
        group.addChild(groupOver);
        mainGroup.add(group);
    }

    function removeButton_(){
        if (displayManager.groups.reelsPt==undefined)group.remove(button_);
    }

    function restoreButton_(){
        if (button_!=undefined && displayManager.groups.reelsPt==undefined){
            dropEnable=false;
            group.add(button_);
            button_.y=-1*btnH_;
            lastPos_=-1*btnH_;
        }
    }

    function setIcon_(index,icon){
        img[index]= game_.add.sprite(pos[index].x+ReelConfig.icon.width/2, pos[index].y+ReelConfig.icon.height/2 + getIconYanchorOffsett_(icon), "icon" + gameClass_.getFsIcon(icon) +icon);

        if (game.cache.checkImageKey("bicon"+ gameClass_.getFsIcon(icon) +icon)){
            imgBlurr[index] = game_.add.sprite(pos[index].x + ReelConfig.icon.width / 2, pos[index].y + ReelConfig.icon.height / 2 + getIconYanchorOffsett_(icon), "bicon"+ gameClass_.getFsIcon(icon)  + icon);
            imgBlurr[index].smbNum=icon;
            if ( num<2 && ReelConfig.simbolsReflection!=undefined && ReelConfig.simbolsReflection.indexOf(icon)>=0){
                imgBlurr[index].scale.x=-1;
            }else{
                imgBlurr[index].scale.x=1;
            }
            imgBlurr[index].scale.y=1;
            imgBlurr[index].anchor.set(.5,.5);
            imgBlurr[index].visible=false
            group.add(imgBlurr[index]);
        }

        img[index].smbNum=icon;
        if (num<2 && ReelConfig.simbolsReflection!=undefined && ReelConfig.simbolsReflection.indexOf(icon)>=0){
            img[index].scale.x=-1;
        }else{
            img[index].scale.x=1;
        }

        img[index].scale.y=1;
        img[index].anchor.set(.5,.5);
        group.add(img[index]);


        iconN[index]=icon;

        createButton_(index);
        // txt = new Phaser.Text(game_, pos[index].x+ReelConfig.icon.width/2, pos[index].y+ReelConfig.icon.height/2,index, {
        //     font: "Arial 15px",
        //     fill: "#ffffff",
        // });
        // group.add(txt);
    }

    function moveIcon_(obj,x,y){
        game_.drawImage(obj, x , y, ReelConfig.icon.width, ReelConfig.icon.height);
    }

    function resetStartPos_  (){
        group.y=startPos;
        if(framework.isTouch())restoreButton_();
    }

    function removeSymbol_(dest_){
        var dest;
        dest=realPos_B_[dest_];
        img[dest].visible=false;
        group.remove(img[dest]);

        dest=realPos_T_[dest_];
        img[dest].visible=false;
        group.remove(img[dest]);
    }

    function swapSmb_  (icon,dest_,attr_){
        var dest;
        var attr=attr_;
        var reel=(attr_!=null && attr_.reels!=undefined)?attr_.reels.indexOf(num):-1;
        //set the symbol in the Bottom position of the reel
        dest=realPos_B_[dest_];
        var vis=img[realPos_T_[dest_]].alpha;
        group.remove(img[dest]);
        if (imgBlurr[dest]!=null)group.remove(imgBlurr[dest]);

        if (attr == null || attr.reels==undefined) {
            logger("swap "+icon);
            img[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + ReelConfig.icon.height / 2+ getIconYanchorOffsett_(icon), "icon" + gameClass_.getFsIcon(icon) + icon);
            img[dest].smbNum=icon;
            iconN[dest]=icon;
            if (game.cache.checkImageKey("bicon" + gameClass_.getFsIcon(icon) + icon)) {
                imgBlurr[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + ReelConfig.icon.height / 2 + getIconYanchorOffsett_(icon), "icon" + gameClass_.getFsIcon(icon) + icon);
                imgBlurr[dest].smbNum = icon;
            }else{
                imgBlurr[dest]=null;
            }
        }else if (attr!=null && attr.type == "icon" || reel<0){
            logger("swap1 "+attr.subst);
            img[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + ReelConfig.icon.height / 2, "icon" + gameClass_.getFsIcon(attr.subst) + attr.subst);
            img[dest].smbNum=attr.icon;
            iconN[dest]=attr.icon;
        }else if ( attr.type == "anim"){
            var stage=Number(attr_.stage);
            if (attr.anim[stage]=="timer"){
                logger("swap prev "+attr.icon[stage]);
                img[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + ReelConfig.icon.height / 2, "icon" + gameClass_.getFsIcon(attr.icon[stage]) + attr.icon[stage]);
                setTimeout(attr.callBack,attr.delay*1000,[attr,group],img[dest] );
            }else if (attr.anim[stage]=="anim"|| attr.anim[stage] == "boom"|| attr.anim[stage] == "place"){
                logger("swap play bomb "+attr.icon[stage]);
                soundManager_.playSound("fuse");
                img[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + ReelConfig.icon.height / 2, "anim" + gameClass_.getFsIcon(attr.icon[stage]) + attr.icon[stage]);
                img[dest].animations.add("anim");
                img[dest].animations.play("anim", (gameClass_.getCompulsivePlayer())?52:36, attr.loop, attr.killOnComplete, attr.callBack, [attr,group]);//todo parametric loop
            }
            img[dest].smbNum=attr.subst;
            iconN[dest]= attr.subst;
            stage++;
            attr_.stage=stage;
            attr.reel=num;
            attr.smb=dest_;
            attr.realSmb=dest;
        }
        img[dest].reel=num;
        img[dest].icon=dest_;
        img[dest].attr=attr;
        img[dest].screen=true;
        if (num<2 && ReelConfig.simbolsReflection!=undefined && ReelConfig.simbolsReflection.indexOf(icon)>=0){
            img[dest].scale.x=-1;
        }else{
            img[dest].scale.x=1;
        }


        img[dest].anchor.set(.5,.5);
        img[dest].alpha=vis;

        if (imgBlurr[dest]!=null) {
            imgBlurr[dest].reel = num;
            imgBlurr[dest].icon = dest_;
            if (num<2 && ReelConfig.simbolsReflection!=undefined && ReelConfig.simbolsReflection.indexOf(icon)>=0){
                imgBlurr[dest].scale.x=-1;
            }else{
                imgBlurr[dest].scale.x=1;
            }
            imgBlurr[dest].scale.y = 1;
            imgBlurr[dest].anchor.set(.5, .5);
            imgBlurr[dest].visible = false;
            group.add(imgBlurr[dest]);
        }

        group.add(img[dest]);
        return img[dest];

        createButton_(dest);
    }

    function toggleSpin_(dest,state){
        if (imgBlurr[dest]!=null){
            //toggle spin blurred images on / off
            imgBlurr[dest].visible=state;
            img[dest].visible=!state;
        }
    }

    function newSmb_  (icon,dest_,attr_){
        var dest;
        //set the symbol in the Top position of the reel
        var attr=attr_;
        var reel=(attr_!=null && attr_.reels!=undefined)?attr_.reels.indexOf(num):-1;
        dest=realPos_T_[dest_];
        group.remove(img[dest]);
        if (imgBlurr[dest]!=null)group.remove(imgBlurr[dest]);

        if (attr == null || attr.reels==undefined || reel <0) {
            img[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + ReelConfig.icon.height / 2+ getIconYanchorOffsett_(icon), "icon" + gameClass_.getFsIcon(icon) + icon);
            img[dest].smbNum=icon;
            if (game.cache.checkImageKey("bicon" + gameClass_.getFsIcon(icon) + icon)){
                imgBlurr[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + ReelConfig.icon.height / 2+ getIconYanchorOffsett_(icon), "bicon"+ gameClass_.getFsIcon(icon)  + icon);
                imgBlurr[dest].smbNum = icon;
            }else{
                imgBlurr[dest]=null;
            }
            iconN[dest]=icon;
        }else{
            img[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + ReelConfig.icon.height / 2, "icon"+ gameClass_.getFsIcon(attr.icon[0])  + attr.icon[0]);
            img[dest].smbNum= attr.subst;
            if (game.cache.checkImageKey("bicon"+ gameClass_.getFsIcon(attr.icon[0])  + attr.icon[0])){
                imgBlurr[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + ReelConfig.icon.height / 2, "bicon" + gameClass_.getFsIcon(attr.icon[0]) + attr.icon[0]);
                imgBlurr[dest].smbNum = attr.subst;
            }else{
                imgBlurr[dest]=null;
            }
            iconN[dest]=attr.subst;
        }
        img[dest].reel=num;
        img[dest].icon=dest_;

        if (num<2 && ReelConfig.simbolsReflection!=undefined && ReelConfig.simbolsReflection.indexOf(icon)>=0){
            img[dest].scale.x=-1;
        }else{
            img[dest].scale.x=1;
        }
        img[dest].scree=false;
        img[dest].scale.y=1;
        img[dest].anchor.set(.5,.5);
        img[dest].visible=true;
        group.add(img[dest]);

        if (imgBlurr[dest]!=null) {
            imgBlurr[dest].reel = num;
            imgBlurr[dest].icon = dest_;
            if (num<2 && ReelConfig.simbolsReflection!=undefined && ReelConfig.simbolsReflection.indexOf(icon)>=0){
                imgBlurr[dest].scale.x=-1;
            }else{
                imgBlurr[dest].scale.x=1;
            }
            imgBlurr[dest].scale.y = 1;
            imgBlurr[dest].anchor.set(.5, .5);
            imgBlurr[dest].visible = false;
            group.add(imgBlurr[dest]);
        }

        createButton_(dest);
        // txt = new Phaser.Text(game_, pos[dest].x+ReelConfig.icon.width/2, pos[dest].y+ReelConfig.icon.height/2,dest, {
        //     font: "Arial 15px",
        //     fill: "#ffffff",
        // });
        //group.add(txt);
        return img[dest];
    }

    function replaceIcon_(index,icon,attr){
        img[index].visible=false;
        group.remove(img[index]);
        img[index]=null;
        if (attr == null || attr.type == "icon"){
            img[index] = game_.add.sprite(pos[index].x + ReelConfig.icon.width / 2, pos[index].y + ReelConfig.icon.height / 2, "icon"+ gameClass_.getFsIcon(icon)  + icon);
            img[index].alpha=1;
        }else if ( attr.type == "fade"){
            img[index] = game_.add.sprite(pos[index].x + ReelConfig.icon.width / 2, pos[index].y + ReelConfig.icon.height / 2, "icon" + gameClass_.getFsIcon(icon) + icon);
            img[index].alpha=0;
            TweenMax.to(img[index],.4,{alpha:1});
        }else if ( attr.type == "anim"){
            img[index] = game_.add.sprite(pos[index].x + ReelConfig.icon.width / 2, pos[index].y + ReelConfig.icon.height / 2, "anim" + gameClass_.getFsIcon(attr.icon[0]) +attr.icon[0]);
            img[index].alpha=1;
            img[index].animations.add("anim");
            img[index].animations.play("anim", 24, attr.loop, attr.killOnComplete, attr.callBack, [attr]);//todo parametric loop
        }
        img[index].reel=num;
        img[index].icon=index;
        img[index].smbNum=icon;
        img[index].attr=attr;
        if (num<2 && ReelConfig.simbolsReflection!=undefined && ReelConfig.simbolsReflection.indexOf(icon)>=0){
            img[index].scale.x=-1;
        }else{
            img[index].scale.x=1;
        }
        img[index].screen=true;
        img[index].scale.y=1;
        img[index].anchor.set(.5,.5);
        group.add(img[index]);
        iconN[index]=icon;

        createButton_(index);
        return img[index];
    }

    function replaceIcon2_(index,icon,attr){
        img[index].visible=false;
        group.remove(img[index]);
        img[index]=null;
        if (attr == null || attr.type == "icon"){
            img[index] = game_.add.sprite(pos[index].x + ReelConfig.icon.width / 2, pos[index].y + ReelConfig.icon.height / 2, "icon"+ gameClass_.getFsIcon(icon)  + icon);
            img[index].alpha=1;
        }else if ( attr.type == "fade"){
            img[index] = game_.add.sprite(pos[index].x + ReelConfig.icon.width / 2, pos[index].y + ReelConfig.icon.height / 2, "icon" + gameClass_.getFsIcon(icon) + icon);
            img[index].alpha=0;
            TweenMax.to(img[index],.4,{alpha:1});
        }else if ( attr.type == "anim"){
            img[index] = game_.add.sprite(pos[index].x + ReelConfig.icon.width / 2, pos[index].y + ReelConfig.icon.height / 2, attr.icon);
            img[index].alpha=1;
            img[index].animations.add("anim");
            img[index].animations.play("anim", 24, attr.loop, attr.killOnComplete, (attr.callBack!=null)?callback:null, (attr.param!="this")?[attr]:img[index]);//todo parametric loop
        }

        function callback(par){
            attr.callBack(par);
        }

        img[index].reel=num;
        img[index].icon=index;
        img[index].smbNum=icon;
        img[index].attr=attr;
        if (num<2 && ReelConfig.simbolsReflection!=undefined && ReelConfig.simbolsReflection.indexOf(icon)>=0){
            img[index].scale.x=-1;
        }else{
            img[index].scale.x=1;
        }
        img[index].screen=true;
        img[index].scale.y=1;
        img[index].anchor.set(.5,.5);
        group.add(img[index]);
        iconN[index]=icon;

        createButton_(index);
        return img[index];
    }

    function removeDummy_(index){
    }



    function click_(dd){
    }

    function reelDown_(dd) {
        dropEnable=false;
        dd.y=lastPos_;
        if(buttonManager_.getButton(frameworkSettings.buttons.spinButton.id).isEnable()==false)return;
    }

    function keepControl_(dd){
        if (framework.getSettings().getSwipeToSpin()==false)return;
        if (dropEnable==true)return;
        if(gameClass_.getMessageOnOff()==true){
            dd.y=startPos;
            return;
        }
        if(buttonManager_.getButton(frameworkSettings.buttons.spinButton.id).isEnable()==false)return;
        var diff=(lastPos_ -dd.y)/3;
        lastPos_=dd.y;
        group.y=  group.y-(diff);
    }

    function reelGo_(dd) {
        if(gameClass_.getMessageOnOff()==true){
            group.y=startPos;
            return;
        }
        button_.y=-1*btnH_;
        if (Math.abs(group.y-startPos)>15)dropEnable=true;
        if(buttonManager_.getButton(frameworkSettings.buttons.spinButton.id).isEnable()==false||dropEnable==false)return;
        gameClass_.realDoSpin([true,num]);
    }

    function down_(dd){
        if (displayManager_.getGroup("reelsPt").visible==false){
            startCounter_(dd);
        }else{

        }
    }

    function up_(dd){
        stopCounter_(dd);
    }

    function startCounter_(icon){
        timeStart_= new Date().getTime();
        iCtrl=setInterval(pressCtrl,16,icon);
    }

    function stopCounter_(icon){
        clearInterval(iCtrl);
        timeStart_=0;
    }

    function pressCtrl(icon){
        var time=new Date().getTime();
        if (time-timeStart_>=pressDuration_){
            paytableManager_.showReelPt(icon);
            clearInterval(iCtrl);
        }
    }

    function getIcon_ (icon){
        return img[icon];
    }

    function createButton_(index){
        if (displayManager.groups.reelsPt!=undefined) {
            if(btn[index]!=undefined)group.remove(btn[index]);
            btn[index]=null;
            btn[index]=  new Phaser.Button(game_ ,pos[index].x, pos[index].y,null,click_,this);
            btn[index].scale.x=1;
            btn[index].scale.y=1;
            btn[index].visible=true;
            btn[index].icon=iconN[index];
            btn[index].onInputDown.add(down_, this);
            btn[index].onInputUp.add(up_, this);
            group.add(btn[index]);
        }
    }

    function getIconYanchorOffsett_(icon){
        if (ReelConfig.iconsAnchorOffset!=null && ReelConfig.iconsAnchorOffset.indexOf(icon)>=0)return ReelConfig.reel.deltaY/2;
        return 0;
    }

    var me={
        setIcon:setIcon_,
        replaceIcon:replaceIcon_,
        replaceIcon2:replaceIcon2_,
        resetStartPos:resetStartPos_,
        removeSymbol:removeSymbol_,
        swapSmb:swapSmb_,
        newSmb:newSmb_,
        getIcon:getIcon_,
        toggleSpin:toggleSpin_,
        getAllIcons: function(){
            return group;
        },
        getPos: function(icon){
            return pos[icon];
        },
        getRealPosSmb:function (icon){
            var dest=realPos_T_[icon];
            return img[dest];
        },
        getSymbol: function(icon){
            return img[icon];
        },
        setVisible:function (icon,flag){
            var dest=realPos_T_[icon];
            img[icon].alpha=(flag)?1:0;
            img[dest].alpha=(flag)?1:0;
        },
        getIconNum:function(icon){
            return iconN[icon];
        },
        resetSwipeForMsg:function(){
            resetSwipe_=true;
        },
        removeButton:removeButton_
    }

    init(swap_);
    return me;

};