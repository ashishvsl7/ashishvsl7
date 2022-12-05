function  PixiMillionMegaWaysTumblingReel(gameRef,gameClass,_num,num2,swap,len,forceSeven,offs){
    var game_=gameRef;
    var gameClass_=gameClass;
    var swap_=swap;
    var num=_num;
    var len_=len;
    var offs_=(offs!=undefined)?offs:0;
    var smbNum=(num2!=undefined)?num2:-1
    var img=[];
    var imgBlurr=[];
    var frames=[];
    var bg=[];


    var btn=[];
    var pos=[];
    var realPos_B_=[];
    var realPos_T_=[];
    pos[7]=[];
    pos[9]=[];
    var startPos;
    var iconN=[];
    var group;
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
    var height_=0;
     var characterList=[5,6,7,8,9];
    var size_=[];
    size_[7]=[];
    size_[9]=[];

    size_[7][0]=0;
    size_[7][1]=0;
    size_[7][2]=321;
    size_[7][3]=214;
    size_[7][4]=161;
    size_[7][5]=129;
    size_[7][6]=107;
    size_[7][7]=92;

    size_[9][0]=0;
    size_[9][1]=0;
    size_[9][2]=413;
    size_[9][3]=275;
    size_[9][4]=207;
    size_[9][5]=165;
    size_[9][6]=138;
    size_[9][7]=118;
    size_[9][8]=103;
    size_[9][9]=92;





    var numIcon_=len_;
    var tempFix=(forceSeven!=undefined && forceSeven==true)?true:false;
    var iConsPerReel_=len_;
    var spinIconsPerReel_=len_;
    var iconSize_=[];
    var shrinkRatio_=.07;

    function Point(x, y){
        this.x = x || 0;
        this.y = y || 0;
    }


    function addGroup(){
        var obj;
        if (phaserVer_==3) {
            obj=game.add.container();
        }else if (phaserVer_==-1){//pixi
            obj = new PIXI.Container();
            game.stage.addChild(obj)
        }else{
            obj=game.add.group();
        }
        obj.add_Child=function (child) {
            if (phaserVer_==2){
                obj.addChild(child);
            }else if (phaserVer_==-1){//pixi
                obj.addChild(child);
            }else{
                obj.add(child);
            }
        }
        return obj;
    }

    function init (swap,len){
        len_=len;
    console.log("reel init--------------------")
        pressDuration_= (displayManager.groups.reelsPt!=null)?displayManager.groups.reelsPt.clickDuration:2000;
        height_=size_[getReelState_(len)][len];
        numIcon_=len;
        mainGroup=displayManager_.getGroup("reels");
         group= addGroup();
        group.x=0;
        group.y=0;
        if (num==3) {
            if (offs!= 0) {
                //fs, central reel has 9 smb
                ReelConfig.icons[3]=ReelConfig.icons[0]+5;
            } else {
                ReelConfig.icons[3]=ReelConfig.icons[0];
            }
        }else{
            ReelConfig.icons[num]=ReelConfig.icons[0];
        }
        for (var j = 0; j < ReelConfig.icons[num]; j++) {
            img[j]="";
            imgBlurr[j]="";
            btn[j]=null;
            if (swap!=false) {
                var pos_ = new PIXI.Point(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * num), ReelConfig.reel.deltaY_0 - (size_[7][len] * j));
            }else{
                var pos_ = new PIXI.Point(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * num), ReelConfig.reel.deltaY_0 + (size_[7][len] * j));
            }
            pos[7][j]= new Point(pos_.x+offs_,pos_.y);

            if (len_>7){
                iconSize_[j]=len;
            }else{
                iconSize_[j]=len;
            }
            startPos=group.y;
            realPos_B_[j]=j;
            realPos_T_[j]=j;

            if (swap!=false) {
                var pos_ = new PIXI.Point(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * num), ReelConfig.reel.deltaY_0 - (size_[9][len] * j));
            }else{
                var pos_ = new PIXI.Point(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * num), ReelConfig.reel.deltaY_0 + (size_[9][len] * j));
            }
            pos[9][j]= new PIXI.Point(pos_.x+offs_,pos_.y);

        }
        if (swap!=false) {
            for (var i=0;i<len;i++){
                realPos_B_[i]= (len-1 -i ) +ReelConfig.numIconsOnBottom;
                realPos_T_[i] = ReelConfig.icons[num] - 1 - ReelConfig.numIconsOnTop - i;
            }
        }

        mainGroup.add_Child(group);
    }

    function removeButton_(){
        if (displayManager.groups.reelsPt==undefined)group.removeChild(button_);
    }

    function restoreButton_(){
        if (button_!=undefined && displayManager.groups.reelsPt==undefined){
            dropEnable=false;
            group.add(button_);
            button_.y=-1*btnH_;
            lastPos_=-1*btnH_;
        }
    }

    function dispose (obj){
        if (obj!=undefined)group.removeChild(obj);
    }

    function setIcon_(index,icon){
        if (img[index]!=undefined && img[index]!=""){
            group.removeChild(img[index]);
            img[index].visible=false;
            img[index]=null;
        }
        var poss=(Number(pos[getReelState_(len_)][index].y)+height_/2);
        var dest=realPos_B_[index];
        var ic=icon;
        dispose(imgBlurr[index]);

        img[index] =  spriteManager_.addSprite( pos[getReelState_(numIcon_)][index].x + ReelConfig.icon.width / 2, poss,["icon"+ icon ,getIconSize( iconSize_[index]-2) ]);
        img[index].anchor.set(.5,.5);
        img[index].smbNum=icon;
        group.add_Child(img[index]);
        iconN[index]=icon;


        imgBlurr[index] =  spriteManager_.addSprite( pos[getReelState_(numIcon_)][index].x + ReelConfig.icon.width / 2,  poss,["bicon"+ icon ,getIconSize(iconSize_[index]-2) ]);
        imgBlurr[index].smbNum=icon;
        imgBlurr[index].scale.x=1;
        imgBlurr[index].scale.y=1;
        imgBlurr[index].anchor.set(.5,.5);
        imgBlurr[index].visible=false;
        group.add_Child(imgBlurr[index]);


        createButton_(index);
        // var txt = new Phaser.Text(game_,0,0,index, {
        //     font: "Arial 15px",
        //     fill: "#ffffff",
        // });
        // img[index].addChild(txt);
        return img[index];
    }

    function resetIconPos_(){
        for (var j = 0; j < ReelConfig.icons[num]; j++) {
            img[j].y=pos[getReelState_(numIcon_)][j].y + height_ / 2;
        }
    }

    function updateReelSize_(numS){
        numIcon_=numS;
        len_=numS;
        height_=size_[getReelState_(numIcon_)][numS];
        pressDuration_= 2000;
        for (var j = 0; j < ReelConfig.icons[num]; j++) {
            iconSize_[j]=numIcon_;
            btn[j]=null;
            if (swap!=false) {
                var pos_ = new PIXI.Point(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * num), ReelConfig.reel.deltaY_0 - (size_[getReelState_(numIcon_)][numS] * j));
            }else{
                var pos_ = new PIXI.Point(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * num), ReelConfig.reel.deltaY_0 + (size_[getReelState_(numIcon_)][numS] * j));
            }
            pos[getReelState_(numIcon_)][j]= new PIXI.Point(pos_.x+offs_,pos_.y);

            realPos_B_[j]=j;
            realPos_T_[j]=j;


            setIcon_(j,img[j].smbNum);

        }
        for (var i=0;i<numIcon_;i++){
            realPos_B_[i]= (numIcon_-1 -i ) +ReelConfig.numIconsOnBottom;
            realPos_T_[i] = ReelConfig.icons[num] - 1 - ReelConfig.numIconsOnTop - i;
        }

        group.y=0;
    }

    function moveIcon_(obj,x,y){
        game_.drawImage(obj, x , y, ReelConfig.icon.width, height_);
    }

    function resetStartPos_  (){
        group.y=startPos;
        if(getReelState_(numIcon_)==9){
            group.y=group.y+92;
        }
        if(framework.isTouch())restoreButton_();
    }

    function removeSymbol_(dest_){
        var dest;
        dest=realPos_B_[dest_];
        img[dest].visible=false;
        group.removeChild(img[dest]);

        dest=realPos_T_[dest_];
        img[dest].visible=false;
        group.removeChild(img[dest]);
    }

    function swapSmb_  (json,dest_,attr_){
        var dest;
        var attr=attr_;
        var icon= (json.prevsmb != undefined) ? json.prevsmb : json.smb;
        //set the symbol in the Bottom position of the reel
        dest=realPos_B_[dest_];
        img[dest].visible=false;
        imgBlurr[dest].visible=false;
        group.removeChild(img[dest]);
        group.removeChild(imgBlurr[dest]);
        if(img[dest]!=null)img[dest].destroy();
        img[dest]=null;
        var poss=(Number(pos[getReelState_(numIcon_)][dest].y)+height_/2);

        img[dest] =  spriteManager_.addSprite(pos[getReelState_(numIcon_)][dest].x + ReelConfig.icon.width / 2, poss,["icon"+ icon ,getIconSize(iconSize_[dest]-2) ]);
        img[dest].anchor.set(.5,.5);
        img[dest].smbNum=icon;
        img[dest].reel=num;
        img[dest].dispIcon=true;
        group.add_Child(img[dest]);
        iconN[dest]=icon;

        imgBlurr[dest] =  spriteManager_.addSprite(pos[getReelState_(numIcon_)][dest].x + ReelConfig.icon.width / 2, poss,["bicon"+ icon ,getIconSize(iconSize_[dest]-2) ]);
        imgBlurr[dest].smbNum=icon;
        imgBlurr[dest].scale.x=1;
        imgBlurr[dest].scale.y=1;
        imgBlurr[dest].anchor.set(.5,.5);
        imgBlurr[dest].visible=false;
        group.add_Child(imgBlurr[dest]);

        return img[dest];

        createButton_(dest);
    }

    function iconAdjustment_(image,icon,frame,index){

    }

    function iconAdjustmentH_(image,icon,frame,index){

        }

    function iconAdjustmentNoFrame_(image,icon,index){

    }

    function toggleSpin_(dest,state){
        if (imgBlurr[dest]!=null){
            //toggle spin blurred images on / off
            imgBlurr[dest].visible=state;
            img[dest].visible=!state;
            if (state== true &&  ( characterList.indexOf(img[dest].smbNum)>=0)){
                var found=false;
                //get the icon size form it's frame (blurred images are on a single size)
                for (var j = 0; j < ReelConfig.icons[num]; j++) {
                    if (frames[j]!=undefined && [j].visible == true ) {
                        found=true;
                        imgBlurr[dest].height = frames[j].height+50;
                        break;
                    }
                    if (found==false){
                        if (bg[j]!=undefined && bg[j].visible == true ) {
                            found=true;
                            imgBlurr[dest].height = bg[j].height+50;
                            break;
                        }
                    }
                }
            }
        }
    }

    function newSmb_  (json,dest_,attr_){

        var icon= (json.prevsmb != undefined) ? json.prevsmb : json.smb;
        var dest;
        //set the symbol in the Top position of the reel
        var attr=attr_;
        var reel=(attr_!=null && attr_.reels!=undefined)?attr_.reels.indexOf(num):-1;
        dest=realPos_T_[dest_];
        if(img[dest].mask!=null)img[dest].mask.destroy();
        img[dest].visible=false;
        group.removeChild(img[dest]);
        group.removeChild(imgBlurr[dest]);

        img[dest]=null;
        var poss=(Number(pos[getReelState_(numIcon_)][dest].y)+height_/2);


        if(bg[dest]!=undefined)group.removeChild(bg[dest]);
        img[dest] =  spriteManager_.addSprite(pos[getReelState_(numIcon_)][dest].x + ReelConfig.icon.width / 2, poss,["icon"+ icon ,getIconSize(iconSize_[dest]-2) ]);
        img[dest].anchor.set(.5,.5);
        img[dest].smbNum=icon;
        img[dest].reel=num;
        img[dest].dispIcon=true;
        group.add_Child(img[dest]);
        iconN[dest]=icon;


        imgBlurr[dest] =  spriteManager_.addSprite(pos[getReelState_(numIcon_)][dest].x + ReelConfig.icon.width / 2,poss,["bicon"+ icon ,getIconSize(iconSize_[dest]-2) ]);
        imgBlurr[dest].smbNum=icon;
        imgBlurr[dest].scale.x=1;
        imgBlurr[dest].scale.y=1;
        imgBlurr[dest].anchor.set(.5,.5);
        imgBlurr[dest].visible=false;
        group.add_Child(imgBlurr[dest]);


    }

    function replaceIcon_(dest_,icon,attr_){
        var dest;
        //set the symbol in the Top position of the reel
        var attr=attr_;
        var reel=(attr_!=null && attr_.reels!=undefined)?attr_.reels.indexOf(num):-1;
        dest=realPos_T_[dest_];
        if(img[dest].mask!=null)img[dest].mask.destroy();
        group.removeChild(img[dest]);
        group.removeChild(imgBlurr[dest]);
        var poss=(Number(pos[getReelState_(numIcon_)][dest].y)+height_/2);

        if(bg[dest]!=undefined)group.removeChild(bg[dest]);
        img[dest] =  spriteManager_.addSprite(pos[getReelState_(numIcon_)][dest].x + ReelConfig.icon.width / 2, poss,["icon"+ icon ,getIconSize(iconSize_[dest]-2) ]);
        img[dest].anchor.set(.5,.5);
        img[dest].smbNum=icon;
        img[dest].reel=num;
        img[dest].dispIcon=undefined;
        group.add_Child(img[dest]);
        iconN[dest]=icon;


        imgBlurr[dest] =  spriteManager_.addSprite(pos[getReelState_(numIcon_)][dest].x + ReelConfig.icon.width / 2, poss,["bicon"+ icon ,iconSize_[dest]-2 ]);
        imgBlurr[dest].smbNum=icon;
        imgBlurr[dest].scale.x=1;
        imgBlurr[dest].scale.y=1;
        imgBlurr[dest].anchor.set(.5,.5);
        imgBlurr[dest].visible=false;
        group.add_Child(imgBlurr[dest]);

        iconN[dest]=icon;
        createButton_(dest);
        return img[dest];
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
            if(btn[index]!=undefined)group.removeChild(btn[index]);
            btn[index]=null;
            btn[index]=  new Phaser.Button(game_ ,pos[getReelState_(numIcon_)][index].x, pos[getReelState_(numIcon_)][index].y,null,click_,this);
            btn[index].scale.x=1;
            btn[index].scale.y=1;
            btn[index].visible=true;
            btn[index].icon=iconN[index];
            btn[index].onInputDown.add(down_, this);
            btn[index].onInputUp.add(up_, this);
            group.add(btn[index]);
        }
    }

    function getReelState_(len){
        return ((((freeSpinsManager_.getIsInFs() && freeSpinsManager_.getFsNumber()>=0)|| len>7) && num==3) || tempFix)?9:7;
    }

    function getIconSize(val){
        if ((freeSpinsManager_.getIsInFs() && forceSeven ) && num==3){
            return val+6;
        }
        return val;
    }

    var me={
        setIcon:setIcon_,
        replaceIcon:replaceIcon_,
        resetStartPos:resetStartPos_,
        removeSymbol:removeSymbol_,
        swapSmb:swapSmb_,
        newSmb:newSmb_,
        getIcon:getIcon_,
        toggleSpin:toggleSpin_,
        resetIconPos:resetIconPos_,
        updateReelSize:updateReelSize_,
        getReelState:getReelState_,
        getAllIcons: function(){
            return group;
        },
        getPos: function(icon){
            return ((freeSpinsManager_.getIsInFs() && num==3) || tempFix)?pos[9][icon]:pos[7][icon];
        },
        getRealPosSmb:function (icon){
            dest=realPos_T_[icon];
            return img[dest];
        },
        getSymbol: function(icon){
            return img[icon];
        },
        getIconNum:function(icon){
            return iconN[icon];
        },
        getIconSize:function(icon){
            return iconSize_[icon];
        },
        getIconHeight:function(icon){
        },
        resetSwipeForMsg:function(){
            resetSwipe_=true;
        },
        getReelLen:function (){
            return reelLen_;
        },
        getArr:function(){
            return img;
        },
        newArray:function (value){
            img=value;
        },
        newArrayPos:function(pos,value){
            img[pos]=value;
        },
        getFrameMW:function(index){
            return frames[index];
        },
        getTileMW:function(index){
            return bg[index];
        },
        removeButton:removeButton_,
        clearGroup:function(){
            while(group.children[0]) {
                group.removeChild(group.children[0]);
            }
        },
        getNum:function(){
            return num;
        },
        getSize:function(){
            return numIcon_;
        },
        setNum:function(val){
            num=val;
        }
    }

    init(swap_,len_);
    return me;

}
