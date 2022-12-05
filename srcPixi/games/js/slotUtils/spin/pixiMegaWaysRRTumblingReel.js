/**
 * KiS Framework, Created by Fabry on 28/02/2022
 */
function  PixiMegaWaysRRTumblingReel(gameRef,gameClass,_num,num2,swap,len){
    var game_=gameRef;
    var gameClass_=gameClass;
    var swap_=swap;
    var num=_num;
    var smbNum=(num2!=undefined)?num2:-1
    var img=[];
    var imgBlurr=[];
    var imgH=[];
    var imgBlurrH=[];
    var frames=[];
    var framesH=[];
    var bg=[];
    var bgH=[];
    var btn=[];
    var pos=[];
    var posH=[];
    var realPos_B_=[];
    var realPos_T_=[];
    var startPos;
    var iconN=[];
    var group;
    var mainGroup;
    var groupH;
    var mainGroupH;
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
    var size_=[];
    size_[0]=0;
    size_[1]=0;
    size_[2]=315;
    size_[3]=210;
    size_[4]=157;
    size_[5]=126;
    size_[6]=105;
    size_[7]=90;
    var iConsPerReel_=len;
    var spinIconsPerReel_=len;
    var height_=0;
    var width_=128;
    var characterList=[13,14,15,16];
    var iconSize_=[];
    var splitted_=false;
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
        pressDuration_= (displayManager.groups.reelsPt!=null)?displayManager.groups.reelsPt.clickDuration:2000;
        height_=size_[len];
        iConsPerReel_=len;
        mainGroupH=displayManager_.getGroup("hReel");
        groupH= addGroup();
        mainGroup=displayManager_.getGroup("reels");
        group= addGroup();

        for (var j = 0; j < ReelConfig.icons[num]; j++) {
            img[j]="";
            imgBlurr[j]="";
            btn[j]=null;
            if (swap!=false) {
                var pos_ =   new  PIXI.Point(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * num), ReelConfig.reel.deltaY_0 - (height_ * j));
            }else{
                var pos_ =  new  PIXI.Point(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * num), ReelConfig.reel.deltaY_0 + (height_ * j));
            }
            pos[j]=  new  PIXI.Point(pos_.x,pos_.y);
            iconSize_[j]=len;
            startPos=group.y;
            realPos_B_[j]=j;
            realPos_T_[j]=j;
        }
        if (swap!=false) {
            for (var i=0;i<len;i++){
                realPos_B_[i]= (len-1 -i ) +ReelConfig.numIconsOnBottom;
                realPos_T_[i] = ReelConfig.icons[num] - 1 - ReelConfig.numIconsOnTop - i;
            }
        }
        if (num==0){//reel 0 handles horizontal spin
            for (var a=0;a<24;a++){
                imgH[a]=null;
                imgBlurrH[a]=null;
                var oFfset=ReelConfig.reel.reelHYOffset;
                var pos_ =  new  PIXI.Point(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * a), 8);
                posH[a]=  new  PIXI.Point(pos_.x,pos_.y+ oFfset);
            }
        }


        mainGroupH.add_Child(groupH);
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

    function setIconH_(index,icon,pos) {
        //index here is reel
        if (imgH[index]!=undefined && img[index]!=""){
            imgH[index].visible=false;
            groupH.removeChild(imgH[index]);
            imgH[index].destroy();
            imgH[index]=null;
        }
        var height_=128+30;
        if(imgH[index]!=null)groupH.removeChild(imgH[index]);
        if(imgBlurrH[index]!=null)groupH.removeChild(imgBlurrH[index]);
        if(bgH[index]!=undefined)groupH.removeChild(bgH[index]);

        imgH[index]= spriteManager_.addSprite(posH[index].x+ReelConfig.icon.width/2, posH[index].y+height_/2, ["icon"+icon,(icon>12)?1:2]);
        imgH[index].smbNum=icon;
        imgH[index].anchor.set(.5,.5);
        imgH[index].displayed=true;
        groupH.add_Child(imgH[index]);

        return imgH[index];

    }

    function dispose (obj){
        if (obj!=undefined)group.removeChild(obj);
    }

    function setIcon_(index,icon){

        if (img[index]!=undefined && img[index]!=""){
            img[index].visible=false;
            setTimeout( dispose,50,img[index]);
        }
        var height_=size_[ iconSize_[index]];
        var poss=(Number(pos[index].y)+height_/2);
        var dest=realPos_B_[index];
        var ic=icon;
        dispose(imgBlurr[index]);

        img[index] =  spriteManager_.addSprite(pos[index].x + ReelConfig.icon.width / 2, poss,["icon"+ icon ,iconSize_[index]-2 ]);
        img[index].anchor.set(.5,.5);
        img[index].smbNum=icon;
        group.add_Child(img[index]);
        iconN[index]=icon;


        imgBlurr[index] =  spriteManager_.addSprite(pos[index].x + ReelConfig.icon.width / 2, pos[index].y + height_ / 2,["bicon"+ icon ,iconSize_[index]-2 ]);
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
            img[j].y=pos[j].y + height_ / 2;
        }
    }

    function updateSizeOnTumbleSetup_(newReel) {
        var height = [];
        var is = [];
        var h=0;
        splitted_ = true;
        var h=newReel[0].size;

        for( var a in newReel){
            if (newReel[a].splitOrigin==-1){
                h  =newReel[a].size;
                break;
            }
        }
        if (h==2) {
            spinIconsPerReel_ = 2;
        }else if (h==3) {
            spinIconsPerReel_ = 3;
        }else{
            spinIconsPerReel_ = newReel.length;
        }

        for (var j = 0; j < ReelConfig.icons[num] - newReel.length ; j++) {
            height.push(size_[h ]);
            is.push(h );
        }
        for (var j = 0; j < newReel.length ; j++) {
            height.push(size_[newReel[j].size ]);
            is.push(newReel[j].size )
        }
        is.push(spinIconsPerReel_ );
        is.reverse();
        height.reverse();

        changeReelSize_(newReel.length, height, is);
    }

    function updateSizeOnTumble_(newReel) {
        var height = [];
        var is = [];
        var h=newReel[0].size;
        splitted_ = true;

        //get new height
        if (spinIconsPerReel_==2){
            h=4;
        }else if ( spinIconsPerReel_==3) {
            h=6;
        }

        for (var j = 0; j < ReelConfig.icons[num] - newReel.length ; j++) {
            height.push(size_[h ]);
            is.push(h );
        }
        for (var j = 0; j < newReel.length ; j++) {
            height.push(size_[newReel[j].size ]);
            is.push(newReel[j].size )
        }
        is.push(spinIconsPerReel_ );
        is.reverse();
        height.reverse();

        changeReelSize_(newReel.length, height, is);
    }

    function resetPositions_() {

        for (var j = 0; j < ReelConfig.icons[num]; j++) {
            realPos_B_[j]=j;
            realPos_T_[j]=j;
        }
        if (swap!=false) {
            for (var i=0;i<iConsPerReel_;i++){
                realPos_B_[i]= (iConsPerReel_-1 -i ) +ReelConfig.numIconsOnBottom;
                realPos_T_[i] = ReelConfig.icons[iConsPerReel_] - 1 - ReelConfig.numIconsOnTop - i;
            }
        }

    }

    function changeReelSize_(len, height,is){
        iConsPerReel_=len;
        pressDuration_= 2000;
        var position=0;
        var tempPos=[];

        iConsPerReel_=len;

        for (var j = 0; j < ReelConfig.icons[num]; j++) {

            //img[j].y=tempPos[j].y +height[j];

            if (swap!=false) {
                var pos_ =  new  PIXI.Point(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * num), ReelConfig.reel.deltaY_0 - position);
            }else{
                var pos_ =  new  PIXI.Point(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * num), ReelConfig.reel.deltaY_0 +position);
            }
            position += height[j];  //first objects takes the right size, then fill to the top with smaller size
            iconSize_[j]=is[j];
            pos[j]=  new  PIXI.Point(pos_.x,pos_.y);
            //startPos=group.y;

        }



    }

    function updateReelSize_(numS){
        iConsPerReel_=numS;
        spinIconsPerReel_=numS;
        height_=size_[numS];
        pressDuration_= 2000;
        for (var j = 0; j < ReelConfig.icons[num]; j++) {
            btn[j]=null;
            if (swap!=false) {
                var pos_ =  new  PIXI.Point(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * num), ReelConfig.reel.deltaY_0 - (height_ * j));
            }else{
                var pos_ =  new  PIXI.Point(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * num), ReelConfig.reel.deltaY_0 + (height_ * j));
            }
            pos[j]=  new  PIXI.Point(pos_.x,pos_.y);
            iconSize_[j]=iConsPerReel_
            realPos_B_[j]=j;
            realPos_T_[j]=j;
            img[j].y=pos[j].y +height_ / 2;
            img[j].visible=false;

            setIcon_(j,img[j].smbNum);

        }
        for (var i=0; i<iConsPerReel_; i++){
            realPos_B_[i]= (iConsPerReel_-1 -i ) +ReelConfig.numIconsOnBottom;
            realPos_T_[i] = ReelConfig.icons[num] - 1 - ReelConfig.numIconsOnTop - i;
        }


        group.y=0;
    }

    function moveIcon_(obj,x,y){
        game_.drawImage(obj, x , y, ReelConfig.icon.width, height_);
    }

    function resetStartPos_  (){
        group.y=startPos;
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
        var split=json.split;
        var splitOrigin=json.splitOrigin;
        var tumble=json.tumble;
        //set the symbol in the Bottom position of the reel
        dest=realPos_B_[dest_];
        img[dest].visible=false;
        imgBlurr[dest].visible=false;
        group.removeChild(img[dest]);
        group.removeChild(imgBlurr[dest]);
        if(img[dest]!=null)img[dest].destroy();
        img[dest]=null;
        var height_=size_[ iconSize_[dest]];
        var poss=(Number(pos[dest].y)+height_/2);

        if(bg[dest]!=undefined)group.removeChild(bg[dest]);
        img[dest] =  spriteManager_.addSprite(pos[dest].x + ReelConfig.icon.width / 2, poss,["icon"+ icon ,iconSize_[dest]-2 ]);
        img[dest].anchor.set(.5,.5);
        img[dest].smbNum=icon;
        img[dest].reel=num;
        img[dest].dispIcon=true;
        group.add_Child(img[dest]);
        iconN[dest]=icon;


        imgBlurr[dest] =  spriteManager_.addSprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + height_ / 2,["bicon"+ icon ,iconSize_[dest]-2 ]);
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
        splitted_=false;
        if (imgBlurr[dest]!=null){
            //toggle spin blurred images on / off
            imgBlurr[dest].visible=state;
            img[dest].visible=!state;
            if (state== true &&  ( characterList.indexOf(img[dest].smbNum)>=0)){
                var found=false;
                //get the icon size form it's frame (blurred images are on a single size)
                for (var j = 0; j < ReelConfig.icons[num]; j++) {

                    if (frames[j]!= undefined && frames[j].visible == true ) {
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
        var split=json.split;
        var splitOrigin=json.splitOrigin;
        var tumble=json.tumble;
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
        var poss=(Number(pos[dest].y)+height_/2);


        if(bg[dest]!=undefined)group.removeChild(bg[dest]);
        img[dest] =  spriteManager_.addSprite(pos[dest].x + ReelConfig.icon.width / 2, poss,["icon"+ icon ,iconSize_[dest]-2 ]);
        img[dest].anchor.set(.5,.5);
        img[dest].smbNum=icon;
        img[dest].reel=num;
        img[dest].dispIcon=true;
        group.add_Child(img[dest]);
        iconN[dest]=icon;


        imgBlurr[dest] =  spriteManager_.addSprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + height_ / 2,["bicon"+ icon ,iconSize_[dest]-2 ]);
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
        var poss=(Number(pos[dest].y)+height_/2);



        if(bg[dest]!=undefined)group.removeChild(bg[dest]);
        img[dest] =  spriteManager_.addSprite(pos[dest].x + ReelConfig.icon.width / 2, poss,["icon"+ icon ,iconSize_[dest]-2 ]);
        img[dest].anchor.set(.5,.5);
        img[dest].smbNum=icon;
        img[dest].reel=num;
        img[dest].dispIcon=undefined;
        group.add_Child(img[dest]);
        iconN[dest]=icon;


        imgBlurr[dest] =  spriteManager_.addSprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + height_ / 2,["bicon"+ icon ,iconSize_[dest]-2 ]);
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

    function replaceIcon2_(dest_,icon,attr_){
        var dest;
        //set the symbol in the Top position of the reel
        var attr=attr_;
        var reel=(attr_!=null && attr_.reels!=undefined)?attr_.reels.indexOf(num):-1;
        dest=realPos_B_[dest_];
        if(img[dest].mask!=null)img[dest].mask.destroy();
        //group.removeChild(img[dest]);
        group.removeChild(imgBlurr[dest]);
        var poss=(Number(pos[dest].y)+height_/2);



        if(bg[dest]!=undefined)group.removeChild(bg[dest]);
        img[dest] =  spriteManager_.addSprite(pos[dest].x + ReelConfig.icon.width / 2, poss,["icon"+ icon ,iconSize_[dest]-2 ]);
        img[dest].anchor.set(.5,.5);
        img[dest].smbNum=icon;
        img[dest].reel=num;
        group.add_Child(img[dest]);
        iconN[dest]=icon;


        imgBlurr[dest] =  spriteManager_.addSprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + height_ / 2,["bicon"+ icon ,iconSize_[dest]-2 ]);
        imgBlurr[dest].smbNum=icon;
        imgBlurr[dest].anchor.set(.5,.5);
        imgBlurr[dest].visible=false;
        group.add_Child(imgBlurr[dest]);

        img[dest].reel=num;
        img[dest].icon=dest_;
        img[dest].size=iconSize_[dest];
        img[dest].dispIcon=undefined;
        img[dest].visible=true;

        iconN[dest]=icon;
        createButton_(dest);
        return img[dest];
    }

    function replaceIconF_(dest_,spine,attr_){

        var dest;
        //set the symbol in the Top position of the reel
        var attr=attr_;
        var reel=(attr_!=null && attr_.reels!=undefined)?attr_.reels.indexOf(num):-1;
        dest=realPos_B_[dest_];
        if(frames[dest]!=undefined)group.removeChild(frames[dest]);
        var poss=(Number(pos[dest].y)+height_/2);

        frames[dest] = spriteManager_.addSpine(pos[dest].x + ReelConfig.icon.width / 2, poss,spine);
        frames[dest].setAnchor(.5, .5);
        frames[dest].scale.x=1;
        frames[dest].scale.y=1;
        group.add_Child(frames[dest]);
        frames[dest].visible = true;

        return frames[dest];
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

    function needIconBg_(icon) {
        if (gameParams.gameOriginalID==7034){
            if (icon==11 || icon ==12)return true;
        }
        return false;
    }

    var me={
        setIcon:setIcon_,
        setIconH:setIconH_,
        replaceIcon:replaceIcon_,
        replaceIcon2:replaceIcon2_,
        replaceIconF:replaceIconF_,
        resetStartPos:resetStartPos_,
        removeSymbol:removeSymbol_,
        swapSmb:swapSmb_,
        newSmb:newSmb_,
        getIcon:getIcon_,
        toggleSpin:toggleSpin_,
        resetIconPos:resetIconPos_,
        updateReelSize:updateReelSize_,
        updateSizeOnTumble:updateSizeOnTumble_,
        updateSizeOnTumbleSetup:updateSizeOnTumbleSetup_,
        resetPositions:resetPositions_,
        getAllIcons: function(){
            return group;
        },
        getPos: function(icon){
            return pos[icon];
        },
        getIconSize:function(icon){
            return iconSize_[icon];
        },
        getIconHeight:function(icon){
            return size_[iconSize_[icon]];
        },
        getRealPosSmb:function (icon){
            dest=realPos_T_[icon];
            return img[dest];
        },
        getSymbol: function(icon){
            return img[icon];
        },
        getSymbolH: function(icon){
            return imgH[icon];
        },
        getIconNum:function(icon){
            return iconN[icon];
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
        getBgArray:function(){
            return bg;
        },
        getFrameArray:function(){
            return frames;
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
        getSize:function () {
            return iConsPerReel_;
        },
        reelBeenSplit:function () {
            return splitted_;
        }
    }

    init(swap_,len);
    return me;

}
