function  MegaWaysSplitTumblingReel(gameRef,gameClass,_num,num2,swap,len){
    var game_=gameRef;
    var gameClass_=gameClass;
    var swap_=swap;
    var num=_num;
    var smbNum=(num2!=undefined)?num2:-1
    var img=[];
    var imgBlurr=[];
    var frames=[];
    var bg=[];
    var wh=[];
    var btn=[];
    var pos=[];
    var realPos_B_=[];
    var realPos_T_=[];
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
    var size_=[];
    size_[0]=0;
    size_[1]=0;
    size_[2]=280;
    size_[3]=187;
    size_[4]=140;
    size_[5]=112;
    size_[6]=93.3;
    size_[7]=80;
    var iConsPerReel_=len;
    var spinIconsPerReel_=len;
    var height_=0;
    var width_=128;
    var characterList=[7,8,9];
    var iconSize_=[];
    var splitted_=false;
    var shrinkRatio_=.035;

    function Point(x, y){
        this.x = x || 0;
        this.y = y || 0;
    }

    function init (swap,len){
        pressDuration_= (displayManager.groups.reelsPt!=null)?displayManager.groups.reelsPt.clickDuration:2000;
        height_=size_[len];
        iConsPerReel_=len;
        mainGroup=displayManager_.getGroup("reels");
        group= game_.add.group();

        for (var j = 0; j < ReelConfig.icons[num]; j++) {
            img[j]="";
            imgBlurr[j]="";
            btn[j]=null;
            if (swap!=false) {
                var pos_ = new Point(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * num), ReelConfig.reel.deltaY_0 - (height_ * j));
            }else{
                var pos_ = new Point(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * num), ReelConfig.reel.deltaY_0 + (height_ * j));
            }
            pos[j]= new Point(pos_.x,pos_.y);
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

        if (ReelConfig.canSwipe==true && framework.isTouch()){
            button_=new Phaser.Button(game_,btnX_,-1*btnH_);
            button_.width=btnW_;
            button_.height=btnH_;
            button_.inputEnabled = true;

            button_.input.enableDrag();
            button_.events.onDragStart.add(reelDown_);
            button_.events.onDragStop.add(reelGo_)
            button_.events.onDragUpdate.add(keepControl_);
            button_.input.allowHorizontalDrag=false;
            group.add(button_);
        }

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
        if (num==0){
            console.log("setIcon "+ index + "  "+ icon)
        }
        if (img[index]!=undefined && img[index]!=""){
            img[index].visible=false;

            group.remove(img[index]);
            img[index].destroy();
            img[index]=null;
        }
        var height_=size_[ iconSize_[index]];
        var poss=(Number(pos[index].y)+height_/2);
        var dest=realPos_B_[index];
        var ic=icon;
        if(img[index]!=null)group.remove(img[index]);
        if(imgBlurr[index]!=null)group.remove(imgBlurr[index]);
        if(bg[index]!=undefined)group.remove(bg[index]);
        if(wh[index]!=undefined)group.remove(wh[index]);


        //place the wormhole behind all icons
        if(wh[index]!=undefined)group.remove(wh[index]);
        wh[index]= game_.add.sprite(pos[index].x + ReelConfig.icon.width / 2, poss, "wormHole" );
        wh[index].height= size_[ iconSize_[index]];
        wh[index].width= ReelConfig.icon.width;
        wh[index].anchor.set(.5,.5);
        group.add(wh[index]);
        wh[index].visible=false;

        if (icon<5){
            bg[index] = game_.add.sprite(pos[index].x + ReelConfig.icon.width / 2, poss, "smbBg_0_"+ iconSize_[index]);
            bg[index].scale.x=1;
            bg[index].scale.y=1;
            bg[index].anchor.set(.5,.5);
            group.add(bg[index]);
            bg[index].visible=true;
        }else if (icon<8){
            bg[index] = game_.add.sprite(pos[index].x + ReelConfig.icon.width / 2, poss, "smbBg_"+ icon );
            bg[index].scale.x=1;
            bg[index].scale.y=1;
            bg[index].anchor.set(.5,.5);
            group.add(bg[index]);
            bg[index].visible=true;
        }else{
            //no bj
        }

        if (game.cache.checkImageKey("icon"+icon+ "_"+ iconSize_[index])){
            ic=ic+ "_"+ iconSize_[index];
        }

        img[index]= game_.add.sprite(pos[index].x+ReelConfig.icon.width/2, pos[index].y+height_/2, "icon"+ic);

        if (game.cache.checkImageKey("bicon"+icon)){
            imgBlurr[index] = game_.add.sprite(pos[index].x + ReelConfig.icon.width / 2, pos[index].y + height_ / 2, "bicon" + icon);
            imgBlurr[index].smbNum=icon;
            imgBlurr[index].scale.x=1;
            imgBlurr[index].scale.y=1;
            imgBlurr[index].anchor.set(.5,.5);
            imgBlurr[index].visible=false;
            group.add(imgBlurr[index]);
        }


        img[index].smbNum=icon;


        if (iconSize_[index]>=3 && icon<8){
            var ratio= 1- iconSize_[dest]*shrinkRatio_;
            img[index].scale.x=Math.min(ratio,1);
            img[index].scale.y=Math.min(ratio,1);
        }else{
            img[index].scale.x=1;
            img[index].scale.y=1;
        }
        img[index].newH=img[index].height;
        img[index].newW=img[index].width;

        img[index].anchor.set(.5,.5);
        group.add(img[index]);
        iconN[index]=icon;



        if(frames[index]!=undefined)group.remove(frames[index]);
        if (game.cache.checkImageKey("smbFrame_" + icon + "_" + iconSize_[dest])) {
            frames[index] = game_.add.sprite(pos[index].x + ReelConfig.icon.width / 2, poss, "smbFrame_" + icon + "_" + iconSize_[index]);
            frames[index].anchor.set(.5, .5);
            group.add(frames[index]);
            iconAdjustment_(img[index], icon, frames[index],dest);
            frames[index].visible = true;
            frames[index].newH=size_[iconSize_[index]];
        }else{
            iconAdjustmentNoFrame_(img[index], icon,dest);
        }



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
                var pos_ = new Point(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * num), ReelConfig.reel.deltaY_0 - position);
            }else{
                var pos_ = new Point(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * num), ReelConfig.reel.deltaY_0 +position);
            }
            position += height[j];  //first objects takes the right size, then fill to the top with smaller size
            iconSize_[j]=is[j];
            pos[j]= new Point(pos_.x,pos_.y);
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
                var pos_ = new Point(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * num), ReelConfig.reel.deltaY_0 - (height_ * j));
            }else{
                var pos_ = new Point(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * num), ReelConfig.reel.deltaY_0 + (height_ * j));
            }
            pos[j]= new Point(pos_.x,pos_.y);
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
        group.remove(img[dest]);

        dest=realPos_T_[dest_];
        img[dest].visible=false;
        group.remove(img[dest]);
    }

    function swapSmb2_  (json,dest_,attr_){
        var dest;
        var attr=attr_;
        var icon= (json.prevsmb != undefined) ? json.prevsmb : json.smb;
        var split=json.split;
        var splitOrigin=json.splitOrigin;
        var tumble=json.tumble;
        //set the symbol in the Bottom position of the reel
        dest=dest_
        img[dest].visible=false;
        imgBlurr[dest].visible=false;
        group.remove(img[dest]);
        group.remove(imgBlurr[dest]);
        if(img[dest]!=null)img[dest].destroy();
        img[dest]=null;
        var height_=size_[ iconSize_[dest]];
        var poss=(Number(pos[dest].y)+height_/2);
        if (num==0){
            console.log(split + " swap "+ icon + "  "+ dest_ + " " + iconSize_[dest] + " " +  size_[ iconSize_[dest]] + " " + poss)
        }

        //place the wormhole behind all icons
        if(wh[dest]!=undefined)group.remove(wh[dest]);
        wh[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, poss, "wormHole" );
        wh[dest].height= size_[ iconSize_[dest]];
        wh[dest].width= ReelConfig.icon.width;
        wh[dest].anchor.set(.5,.5);
        group.add(wh[dest]);
        wh[dest].visible=false;


        if(bg[dest]!=undefined)group.remove(bg[dest]);
        if (icon<5){
            bg[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, poss, "smbBg_0_"+ iconSize_[dest]);
            bg[dest].scale.x=1;
            bg[dest].scale.y=1;
            bg[dest].anchor.set(.5,.5);
            group.add(bg[dest]);
            bg[dest].visible=true;
        }else if (icon<8){
            bg[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, poss, "smbBg_"+ icon );
            bg[dest].scale.x=1;
            bg[dest].scale.y=1;
            bg[dest].anchor.set(.5,.5);
            group.add(bg[dest]);
            bg[dest].visible=true;
        }else{
            //no bj
        }

        bg[dest].newH=size_[iconSize_[dest]];

        if (attr == null ) {
            var ic=icon;
            if (game.cache.checkImageKey("icon"+icon+ "_"+ iconSize_[dest])){
                ic=ic+ "_"+ iconSize_[dest];
            }

            img[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + height_ / 2, "icon" + ic);

            img[dest].smbNum=icon;
            iconN[dest]=icon;
            if (game.cache.checkImageKey("bicon" + icon)){
                imgBlurr[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + height_ / 2, "bicon" + icon);
                imgBlurr[dest].smbNum = icon;
            }else{
                imgBlurr[dest]=null;
            }
        }else if (attr!=null && attr.type == "icon"){
            logger("swap1 "+attr.subst);
            img[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + height_ / 2, "icon" + attr.subst);
            img[dest].smbNum=attr.icon;
            iconN[dest]=attr.icon;
            img[dest].width=ReelConfig.icon.width;
            img[dest].height=height_;
        }else if ( attr.type == "anim"){
            img[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + height_ / 2, "anim" + icon);
            img[dest].animations.add("anim");
            img[dest].animations.play("anim", 24, attr.loop, attr.killOnComplete, attr.callBack, [attr,group]);//todo parametric loop
            img[dest].smbNum=icon;
            iconN[dest]=icon;
        }
        img[dest].reel=num;
        img[dest].icon=dest_;
        img[dest].dispIcon=true;
        img[dest].attr=attr;
        img[dest].anchor.set(.5,.5);
        img[dest].visible=true;
        img[dest].split=split;
        img[dest].splitOrigin=splitOrigin;
        img[dest].tumble=tumble;
        group.add(img[dest]);

        if (iconSize_[dest]>=3 && (icon<8)){
            var ratio= 1- iconSize_[dest]*shrinkRatio_;
            img[dest].scale.x=Math.min(ratio,1);
            img[dest].scale.y=Math.min(ratio,1);
        }
        img[dest].newH=img[dest].height;
        img[dest].newW=img[dest].width;

        if (imgBlurr[dest]!=null) {
            imgBlurr[dest].reel = num;
            imgBlurr[dest].icon = dest_;
            imgBlurr[dest].anchor.set(.5, .5);
            imgBlurr[dest].visible = false;
            group.add(imgBlurr[dest]);
        }


        if(frames[dest]!=undefined)group.remove(frames[dest]);
        if (game.cache.checkImageKey("smbFrame_" + icon + "_" + iconSize_[dest])) {
            frames[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, poss, "smbFrame_" + icon + "_" + iconSize_[dest]);
            frames[dest].anchor.set(.5, .5);
            group.add(frames[dest]);
            iconAdjustment_(img[dest], icon, frames[dest],dest);
            frames[dest].visible = true;
            frames[dest].newH=size_[iconSize_[dest]];

        }else{
            iconAdjustmentNoFrame_(img[dest], icon,dest);
        }

        return img[dest];

        createButton_(dest);
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
        group.remove(img[dest]);
        group.remove(imgBlurr[dest]);
        if(img[dest]!=null)img[dest].destroy();
        img[dest]=null;
        var height_=size_[ iconSize_[dest]];
        var poss=(Number(pos[dest].y)+height_/2);
        if (num==0){
            console.log(split + " swap "+ icon + "  "+ dest_ + " " + iconSize_[dest] + " " +  size_[ iconSize_[dest]] + " " + poss)
        }


        if(bg[dest]!=undefined)group.remove(bg[dest]);
        if (icon<5){
            bg[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, poss, "smbBg_0_"+ iconSize_[dest]);
            bg[dest].scale.x=1;
            bg[dest].scale.y=1;
            bg[dest].anchor.set(.5,.5);
            group.add(bg[dest]);
            bg[dest].visible=true;
        }else if (icon<8){
            bg[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, poss, "smbBg_"+ icon );
            bg[dest].scale.x=1;
            bg[dest].scale.y=1;
            bg[dest].anchor.set(.5,.5);
            group.add(bg[dest]);
            bg[dest].visible=true;
        }else{
            //no bj
        }

        bg[dest].newH=size_[iconSize_[dest]];

        if (attr == null ) {
            var ic=icon;
            if (game.cache.checkImageKey("icon"+icon+ "_"+ iconSize_[dest])){
                ic=ic+ "_"+ iconSize_[dest];
            }

            img[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + height_ / 2, "icon" + ic);

            img[dest].smbNum=icon;
            iconN[dest]=icon;
            if (game.cache.checkImageKey("bicon" + icon)){
                imgBlurr[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + height_ / 2, "bicon" + icon);
                imgBlurr[dest].smbNum = icon;
            }else{
                imgBlurr[dest]=null;
            }
        }else if (attr!=null && attr.type == "icon"){
            logger("swap1 "+attr.subst);
            img[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + height_ / 2, "icon" + attr.subst);
            img[dest].smbNum=attr.icon;
            iconN[dest]=attr.icon;
            img[dest].width=ReelConfig.icon.width;
            img[dest].height=height_;
        }else if ( attr.type == "anim"){
            img[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + height_ / 2, "anim" + icon);
            img[dest].animations.add("anim");
            img[dest].animations.play("anim", 24, attr.loop, attr.killOnComplete, attr.callBack, [attr,group]);//todo parametric loop
            img[dest].smbNum=icon;
            iconN[dest]=icon;
        }
        img[dest].reel=num;
        img[dest].icon=dest_;
        img[dest].dispIcon=true;
        img[dest].attr=attr;
        img[dest].anchor.set(.5,.5);
        img[dest].visible=true;
        img[dest].split=split;
        img[dest].splitOrigin=splitOrigin;
        img[dest].tumble=tumble;
        group.add(img[dest]);


        if (iconSize_[dest]>=3 && (icon<8)){
            var ratio= 1- iconSize_[dest]*shrinkRatio_;
            img[dest].scale.x=Math.min(ratio,1);
            img[dest].scale.y=Math.min(ratio,1);
            img[dest].newH=img[dest].height;
            img[dest].newW=img[dest].width;
        }else if (icon>=8){
            img[dest].newH=size_[iconSize_[dest]];
            img[dest].newW=img[dest].width;
        }

        if (imgBlurr[dest]!=null) {
            imgBlurr[dest].reel = num;
            imgBlurr[dest].icon = dest_;
            imgBlurr[dest].anchor.set(.5, .5);
            imgBlurr[dest].visible = false;
            group.add(imgBlurr[dest]);
        }



        if(frames[dest]!=undefined)group.remove(frames[dest]);
        if (game.cache.checkImageKey("smbFrame_" + icon + "_" + iconSize_[dest])) {
            frames[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, poss, "smbFrame_" + icon + "_" + iconSize_[dest]);
            frames[dest].anchor.set(.5, .5);
            group.add(frames[dest]);
            iconAdjustment_(img[dest], icon, frames[dest],dest);
            img[dest].newH=img[dest].height;
            img[dest].newW=img[dest].width;
            frames[dest].visible = true;
            frames[dest].newH=size_[iconSize_[dest]];
        }else {
            iconAdjustmentNoFrame_(img[dest], icon, dest);
        }

        //place the wormhole behind all icons
        if(wh[dest]!=undefined)group.remove(wh[dest]);
        wh[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, poss, "wormHole" );
        wh[dest].height= size_[ iconSize_[dest]];
        wh[dest].width= ReelConfig.icon.width;
        wh[dest].anchor.set(.5,.5);
        group.add(wh[dest]);
        wh[dest].visible=false;



        return img[dest];

        createButton_(dest);
    }

    function swapSmbS_  (json,dest_,attr_){
        var dest;
        var attr=attr_;
        var icon= (json.prevsmb != undefined) ? json.prevsmb : json.smb;
        var split=json.split;
        var splitOrigin=json.splitOrigin;
        var tumble=json.tumble;
        //set the symbol in the Bottom position of the reel
        dest=dest_;
        img[dest].visible=false;
        imgBlurr[dest].visible=false;
        group.remove(img[dest]);
        group.remove(imgBlurr[dest]);
        if(img[dest]!=null)img[dest].destroy();
        img[dest]=null;
        var height_=size_[ iconSize_[dest]];
        var poss=(Number(pos[dest].y)+height_/2);
        if (num==0){
            console.log(split+" swapS "+ icon + "  "+ dest_ + " " + iconSize_[dest] + " " +  size_[ iconSize_[dest]] + " " + poss)
        }

        if(bg[dest]!=undefined)group.remove(bg[dest]);
        if (icon<5){
            bg[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, poss, "smbBg_0_"+ iconSize_[dest]);
            bg[dest].scale.x=1;
            bg[dest].scale.y=1;
            bg[dest].anchor.set(.5,.5);
            group.add(bg[dest]);
            bg[dest].visible=true;
        }else if (icon<8){
            bg[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, poss, "smbBg_"+ icon );
            bg[dest].scale.x=1;
            bg[dest].scale.y=1;
            bg[dest].anchor.set(.5,.5);
            group.add(bg[dest]);
            bg[dest].visible=true;
        }else{
            //no bj
        }

        bg[dest].newH=size_[iconSize_[dest]];

        if (attr == null ) {
            var ic=icon;
            if (game.cache.checkImageKey("icon"+icon+ "_"+ iconSize_[dest])){
                ic=ic+ "_"+ iconSize_[dest];
            }

            img[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + height_ / 2, "icon" + ic);

            img[dest].smbNum=icon;
            iconN[dest]=icon;
            if (game.cache.checkImageKey("bicon" + icon)){
                imgBlurr[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + height_ / 2, "bicon" + icon);
                imgBlurr[dest].smbNum = icon;
            }else{
                imgBlurr[dest]=null;
            }
        }else if (attr!=null && attr.type == "icon"){
            logger("swap1 "+attr.subst);
            img[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + height_ / 2, "icon" + attr.subst);
            img[dest].smbNum=attr.icon;
            iconN[dest]=attr.icon;
            img[dest].width=ReelConfig.icon.width;
            img[dest].height=height_;
        }else if ( attr.type == "anim"){
            img[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + height_ / 2, "anim" + icon);
            img[dest].animations.add("anim");
            img[dest].animations.play("anim", 24, attr.loop, attr.killOnComplete, attr.callBack, [attr,group]);//todo parametric loop
            img[dest].smbNum=icon;
            iconN[dest]=icon;
        }
        img[dest].reel=num;
        img[dest].icon=dest_;
        img[dest].dispIcon=true;
        img[dest].attr=attr;
        img[dest].anchor.set(.5,.5);
        img[dest].visible=true;
        img[dest].split=split;
        img[dest].splitOrigin=splitOrigin;
        img[dest].tumble=tumble;
        group.add(img[dest]);


        if (iconSize_[dest]>=3 && (icon<8)){
            var ratio= 1- iconSize_[dest]*shrinkRatio_;
            img[dest].scale.x=Math.min(ratio,1);
            img[dest].scale.y=Math.min(ratio,1);
            img[dest].newH=img[dest].height;
            img[dest].newW=img[dest].width;
        }

        if (imgBlurr[dest]!=null) {
            imgBlurr[dest].reel = num;
            imgBlurr[dest].icon = dest_;
            imgBlurr[dest].anchor.set(.5, .5);
            imgBlurr[dest].visible = false;
            group.add(imgBlurr[dest]);
        }

        if(frames[dest]!=undefined)group.remove(frames[dest]);
        if (game.cache.checkImageKey("smbFrame_" + icon + "_" + iconSize_[dest])) {
            frames[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, poss, "smbFrame_" + icon + "_" + iconSize_[dest]);
            frames[dest].anchor.set(.5, .5);
            group.add(frames[dest]);
            iconAdjustment_(img[dest], icon, frames[dest],dest);
            frames[dest].visible = true;
            frames[dest].newH=size_[iconSize_[dest]];
            img[dest].newH=size_[iconSize_[dest]];
            img[dest].newW=100;
        }else {
            iconAdjustmentNoFrame_(img[dest], icon, dest);
        }

        //place the wormhole behind all icons
        if(wh[dest]!=undefined)group.remove(wh[dest]);
        wh[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, poss, "wormHole" );
        wh[dest].height= size_[ iconSize_[dest]];
        wh[dest].width= ReelConfig.icon.width;
        wh[dest].anchor.set(.5,.5);
        group.add(wh[dest]);
        wh[dest].visible=false;



        return img[dest];

        createButton_(dest);
    }

    function iconAdjustment_(image,icon,frame,index){
        var bgCrop=false;
        if (num==0){
            console.log("iconAdjustment_ "+ image + "  "+ icon)
        }
        var offset=0;
        image.cropEnabled = true;

        image.correction=-20;
        if (icon==8){
            if (iconSize_[index]==7){
                var mask_ = new Phaser.Rectangle(0, 70,100, size_[iconSize_[index]]);//ok
                image.height=image.height-20;
            }else if (iconSize_[index]==6){
                var mask_ = new Phaser.Rectangle(0, 65, 100, size_[iconSize_[index]]);//ok
                image.height=image.height-20;
            }else if (iconSize_[index]==5){
                var mask_ = new Phaser.Rectangle(0, 60, 100, size_[iconSize_[index]]);//ok
                image.height=image.height-20;
            }else if (iconSize_[index]==4){
                var mask_ = new Phaser.Rectangle(0, 60, 100, size_[iconSize_[index]]);//ok
                image.height=image.height-20;
            }else if (iconSize_[index]==3){
                var mask_ = new Phaser.Rectangle(0, 50, 100, size_[iconSize_[index]]); //ok
                image.height=image.height-10;
                image.correction=-10;
            }


        }else if (icon==9){

            if (iconSize_[index]==7){
                var mask_ = new Phaser.Rectangle(0, 80, 100, size_[iconSize_[index]]); //ok
                image.height=image.height-20;
            }else if (iconSize_[index]==6){
                var mask_ = new Phaser.Rectangle(0, 73, 100, size_[iconSize_[index]]); //ok
                image.height=image.height-20;
            }else if (iconSize_[index]==5){
                var mask_ = new Phaser.Rectangle(0, 70, 100, size_[iconSize_[index]]); //ok
                image.height=image.height-20;
            }else if (iconSize_[index]==4){
                var mask_ = new Phaser.Rectangle(0, 65, 100, size_[iconSize_[index]]); //ok
                image.height=image.height-20;
            }else if (iconSize_[index]==3){
                var mask_ = new Phaser.Rectangle(0, 40, 100, size_[iconSize_[index]]); //ok
                image.height=image.height-10;
                image.correction=-10;
            }
        }else if (icon==10){

        }else if (icon==11){

        }else if (icon==12) {
            if (iconSize_[index] == 7) {
                var mask_ = new Phaser.Rectangle(0, 100, 100, size_[iconSize_[index]]);//ok
                image.height=image.height-20;
            } else if (iconSize_[index] == 6) {
                var mask_ = new Phaser.Rectangle(0, 90, 100, size_[iconSize_[index]]);//ok
                image.height=image.height-20;
            } else if (iconSize_[index] == 5) {
                var mask_ = new Phaser.Rectangle(0, 80, 100, size_[iconSize_[index]]);//ok
                image.height=image.height-20;
            } else if (iconSize_[index] == 4) {
                var mask_ = new Phaser.Rectangle(0, 70, 100, size_[iconSize_[index]]); //ok
                image.height=image.height-20;
            } else if (iconSize_[index] == 3) {
                var mask_ = new Phaser.Rectangle(0, 40, 100, size_[iconSize_[index]]); //ok
                image.height=image.height-10;
                image.correction=-10;
            }
        }else if (icon==13){
            if (iconSize_[index]==7){
                var mask_ = new Phaser.Rectangle(0, 57, 100, size_[iconSize_[index]]);//ok
                image.height=image.height-20;
            }else if (iconSize_[index]==6){
                var mask_ = new Phaser.Rectangle(0, 50, 100, size_[iconSize_[index]]);//ok
                image.height=image.height-20;
            }else if (iconSize_[index]==5){
                var mask_ = new Phaser.Rectangle(0, 50, 100, size_[iconSize_[index]]);//ok
                image.height=image.height-20;
            }else if (iconSize_[index]==4){
                var mask_ = new Phaser.Rectangle(0, 40, 100, size_[iconSize_[index]]); //ok
                image.height=image.height-20;
            }else if (iconSize_[index]==3) {
                var mask_ = new Phaser.Rectangle(0, 20, 100, size_[iconSize_[index]]); //ok
                image.height=image.height-10;
                image.correction=-10;
            }

        }else if (icon >4 && icon <8){

            if (bg[index]) {
                bgCrop = true;
                bg[index].cropEnabled = true;
                if (iconSize_[index] == 7) {
                    var mask_ = new Phaser.Rectangle(0, 90, 100, size_[iconSize_[index]]);//ok
                    bg[index].height = bg[index].height - 20;
                } else if (iconSize_[index] == 6) {
                    var mask_ = new Phaser.Rectangle(0, 85, 100, size_[iconSize_[index]]);//ok
                    bg[index].height = bg[index].height - 20;
                } else if (iconSize_[index] == 5) {
                    var mask_ = new Phaser.Rectangle(0, 80, 100, size_[iconSize_[index]]);//ok
                    bg[index].height = bg[index].height - 20;
                } else if (iconSize_[index] == 4) {
                    var mask_ = new Phaser.Rectangle(0, 70, 100, size_[iconSize_[index]]); //ok
                    bg[index].height = bg[index].height - 20;
                } else if (iconSize_[index] == 3) {
                    var mask_ = new Phaser.Rectangle(0, 50, 100, size_[iconSize_[index]]); //ok
                    bg[index].height = bg[index].height - 10;
                    image.correction=-10;
                }
            }
        }

        if (bgCrop){
            bg[index].crop(mask_);
            bg[index].updateCrop();
        }else{
            image.crop(mask_);
            image.updateCrop();

        }
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
        if (num==0){
            console.log("newsmb "+ icon + "  "+ dest)
        }
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
        group.remove(img[dest]);
        group.remove(imgBlurr[dest]);

        img[dest]=null;
        var poss=(Number(pos[dest].y)+height_/2);


        if(bg[dest]!=undefined)group.remove(bg[dest]);
        if (icon<5){
            bg[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, poss, "smbBg_0_"+ iconSize_[dest]);
            bg[dest].scale.x=1;
            bg[dest].scale.y=1;
            bg[dest].anchor.set(.5,.5);
            group.add(bg[dest]);
            bg[dest].visible=true;
        }else if (icon<8){
            bg[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, poss, "smbBg_"+ icon );
            bg[dest].scale.x=1;
            bg[dest].scale.y=1;
            bg[dest].anchor.set(.5,.5);
            group.add(bg[dest]);
            bg[dest].visible=true;
        }else{
            //no bj
        }


        if (attr == null || attr.reels==undefined || reel <0) {
            var ic=icon;
            if (game.cache.checkImageKey("icon"+icon+ "_"+ iconSize_[dest])){
                ic=ic+ "_"+ iconSize_[dest];
            }

            img[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + height_ / 2, "icon" + ic);
            img[dest].smbNum=icon;
            if (game.cache.checkImageKey("bicon" + icon)){
                imgBlurr[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + height_ / 2, "bicon" + icon);
                imgBlurr[dest].smbNum = icon;
            }else{
                imgBlurr[dest]=null;
            }
            iconN[dest]=icon;
        }else{
            img[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + height_ / 2, "icon" + attr.icon[0]);
            img[dest].smbNum= attr.subst;
            if (game.cache.checkImageKey("bicon" + icon)){
                imgBlurr[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + height_ / 2, "bicon" + attr.icon[0]);
                imgBlurr[dest].smbNum = attr.subst;
            }else{
                imgBlurr[dest]=null;
            }
            iconN[dest]=attr.subst;
        }
        img[dest].reel=num;
        img[dest].icon=dest_;
        img[dest].dispIcon=true;
        img[dest].scale.x=1;
        img[dest].scale.y=1;
        img[dest].anchor.set(.5,.5);
        img[dest].visible=true;
        img[dest].split=split;
        img[dest].splitOrigin=splitOrigin;
        img[dest].tumble=tumble;
        group.add(img[dest]);

        if (iconSize_[dest]>=3 && (icon<8)){
            var ratio= 1- iconSize_[dest]*shrinkRatio_;
            img[dest].scale.x=Math.min(ratio,1);
            img[dest].scale.y=Math.min(ratio,1);
        }
        img[dest].newH=img[dest].height;
        img[dest].newW=img[dest].width;

        if (imgBlurr[dest]!=null) {
            imgBlurr[dest].reel = num;
            imgBlurr[dest].icon = dest_;
            imgBlurr[dest].scale.x = 1;
            imgBlurr[dest].scale.y = 1;
            imgBlurr[dest].anchor.set(.5, .5);
            imgBlurr[dest].visible = false;
            group.add(imgBlurr[dest]);
        }


        if(frames[dest]!=undefined)group.remove(frames[dest]);
        if (game.cache.checkImageKey("smbFrame_" + icon + "_" + iconSize_[dest])) {
            frames[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, poss, "smbFrame_" + icon + "_" + iconSize_[dest]);
            frames[dest].anchor.set(.5, .5);
            group.add(frames[dest]);
            iconAdjustment_(img[dest], icon, frames[dest],dest);
            frames[dest].visible = true;
            frames[dest].newH=size_[iconSize_[dest]];
        }else{
            iconAdjustmentNoFrame_(img[dest], icon,dest);
        }


    }

    function replaceIcon_(dest_,icon,attr_){
        if (num==0){
            console.log("rep1 "+ dest + "  "+ icon)
        }

        var dest;
        //set the symbol in the Top position of the reel
        var attr=attr_;
        var reel=(attr_!=null && attr_.reels!=undefined)?attr_.reels.indexOf(num):-1;
        dest=realPos_T_[dest_];
        if(img[dest].mask!=null)img[dest].mask.destroy();
        group.remove(img[dest]);
        group.remove(imgBlurr[dest]);
        var poss=(Number(pos[dest].y)+height_/2);

        if(bg[dest]!=undefined)group.remove(bg[dest]);
        if (characterList.indexOf(icon)<0){
            bg[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, poss, "smbBg_" + iconSize_[dest]);
            bg[dest].scale.x=1;
            bg[dest].scale.y=1;
            bg[dest].anchor.set(.5,.5);
            group.add(bg[dest]);
            bg[dest].visible=true;
        }else{
            if (isBrandedMw()|| needIconBg_(icon)){
                bg[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, poss, "smbFrameBg_" + iconSize_[dest]);
                bg[dest].scale.x=1;
                bg[dest].scale.y=1;
                bg[dest].anchor.set(.5,.5);
                group.add(bg[dest]);
                bg[dest].visible=true;
            }
        }

        if (attr == null || attr.reels==undefined || reel <0) {
            img[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + height_ / 2, "icon" + icon);
            img[dest].smbNum=icon;
            if (game.cache.checkImageKey("bicon" + icon)){
                imgBlurr[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + height_ / 2, "bicon" + icon);
                imgBlurr[dest].smbNum = icon;
            }else{
                imgBlurr[dest]=null;
            }
            iconN[dest]=icon;
        }else{
            img[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + height_ / 2, "icon" + attr.icon[0]);
            img[dest].smbNum= attr.subst;
            if (game.cache.checkImageKey("bicon" + icon)){
                imgBlurr[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + height_ / 2, "bicon" + attr.icon[0]);
                imgBlurr[dest].smbNum = attr.subst;
            }else{
                imgBlurr[dest]=null;
            }
            iconN[dest]=attr.subst;
        }
        img[dest].reel=num;
        img[dest].icon=dest_;
        img[dest].dispIcon=undefined;
        img[dest].scale.x=1;
        img[dest].scale.y=1;
        img[dest].anchor.set(.5,.5);
        img[dest].visible=true;
        group.add(img[dest]);

        if (imgBlurr[dest]!=null) {
            imgBlurr[dest].reel = num;
            imgBlurr[dest].icon = dest_;
            imgBlurr[dest].scale.x = 1;
            imgBlurr[dest].scale.y = 1;
            imgBlurr[dest].anchor.set(.5, .5);
            imgBlurr[dest].visible = false;
            group.add(imgBlurr[dest]);
        }


        if(frames[dest]!=undefined)group.remove(frames[dest]);
        if (characterList.indexOf(icon)>=0){
            if (isBrandedMw()){
                frames[dest]= game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, poss, "smbFrame"+icon +"_" + iconSize_[dest]);
            }else{
                frames[dest]= game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, poss, "smbFrame_" +icon + "_"+  iconSize_[dest]);
            }
            frames[dest].anchor.set(.5,.5);
            group.add(frames[dest]);

            iconAdjustment_(img[dest],icon,frames[dest],dest);
            frames[dest].visible=true;
        }

        if (iconSize_[dest]>=3  && characterList.indexOf(icon)<0){
            var ratio= 1- iconSize_[dest]*shrinkRatio_;
            img[dest].scale.x=Math.min(ratio,1);
            img[dest].scale.y=Math.min(ratio,1);
        }

        iconN[dest]=icon;
        createButton_(dest);
        return img[dest];
    }

    function replaceIcon2_(dest_,icon,attr_){
        if (num==0){
            console.log("rep2 "+ dest + "  "+ icon)
        }

        var dest;
        //set the symbol in the Top position of the reel
        var attr=attr_;
        var reel=(attr_!=null && attr_.reels!=undefined)?attr_.reels.indexOf(num):-1;
        dest=realPos_B_[dest_];
        if(img[dest].mask!=null)img[dest].mask.destroy();
        group.remove(img[dest]);
        group.remove(imgBlurr[dest]);
        var poss=(Number(pos[dest].y)+height_/2);

        if(bg[dest]!=undefined)group.remove(bg[dest]);
        if (characterList.indexOf(icon)<0){
            bg[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, poss, "smbBg_" + iconSize_[dest]);
            bg[dest].scale.x=1;
            bg[dest].scale.y=1;
            bg[dest].anchor.set(.5,.5);
            group.add(bg[dest]);
            bg[dest].visible=true;
        }else{
            if (isBrandedMw()|| needIconBg_(icon)){
                bg[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, poss, "smbFrameBg_" + iconSize_[dest]);
                bg[dest].scale.x=1;
                bg[dest].scale.y=1;
                bg[dest].anchor.set(.5,.5);
                group.add(bg[dest]);
                bg[dest].visible=true;
            }
        }

        if (attr == null) {
            var ic=icon;
            if (game.cache.checkImageKey("icon"+icon+ "_"+ iconSize_[dest])){
                ic=ic+ "_"+ iconSize_[dest];
            }

            img[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + height_ / 2, "icon" + ic);
            img[dest].smbNum=icon;
            if (game.cache.checkImageKey("bicon" + icon)){
                imgBlurr[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + height_ / 2, "bicon" + icon);
                imgBlurr[dest].smbNum = icon;
            }else{
                imgBlurr[dest]=null;
            }
            iconN[dest]=icon;
        }else{
            img[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + height_ / 2, "anim" + attr.icon[0]);
            img[dest].smbNum= attr.subst;

            img[dest].animations.add("anim");
            img[dest].animations.play("anim", 24, attr.loop, attr.killOnComplete, (attr.callBack!=null)?callback:null, (attr.param!="this")?[attr]:img[dest]);//todo parametric loop

            if (game.cache.checkImageKey("bicon" + icon)){
                imgBlurr[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + height_ / 2, "bicon" + attr.icon[0]);
                imgBlurr[dest].smbNum = attr.subst;
            }else{
                imgBlurr[dest]=null;
            }
            iconN[dest]=attr.subst;
        }



        function callback(par){

            attr.callBack(par);
        }






        img[dest].reel=num;
        img[dest].icon=dest_;
        img[dest].dispIcon=undefined;
        img[dest].scale.x=1;
        img[dest].scale.y=1;
        img[dest].anchor.set(.5,.5);
        img[dest].visible=true;
        group.add(img[dest]);

        if (imgBlurr[dest]!=null) {
            imgBlurr[dest].reel = num;
            imgBlurr[dest].icon = dest_;
            imgBlurr[dest].scale.x = 1;
            imgBlurr[dest].scale.y = 1;
            imgBlurr[dest].anchor.set(.5, .5);
            imgBlurr[dest].visible = false;
            group.add(imgBlurr[dest]);
        }


        if(frames[dest]!=undefined)group.remove(frames[dest]);
        if (characterList.indexOf(icon)>=0){
            if (isBrandedMw()){
                frames[dest]= game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, poss, "smbFrame"+icon +"_" + iconSize_[dest]);
            }else{
                frames[dest]= game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, poss, "smbFrame_" +icon + "_"+  iconSize_[dest]);
            }
            frames[dest].anchor.set(.5,.5);
            group.add(frames[dest]);

            iconAdjustment_(img[dest],icon,frames[dest],dest);
            frames[dest].visible=true;
        }

        if (iconSize_[dest]>=3  && characterList.indexOf(icon)<0){
            var ratio= 1- iconSize_[dest]*shrinkRatio_;

            img[dest].scale.x=Math.min(ratio,1);
            img[dest].scale.y=Math.min(ratio,1);
        }

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

    function needIconBg_(icon) {
        if (gameParams.gameOriginalID==7025){
            if (icon==11 || icon ==12)return true;
        }
        return false;
    }

    var me={
        setIcon:setIcon_,
        replaceIcon:replaceIcon_,
        replaceIcon2:replaceIcon2_,
        resetStartPos:resetStartPos_,
        removeSymbol:removeSymbol_,
        swapSmb:swapSmb_,
        swapSmb2:swapSmb2_,
        swapSmbS:swapSmbS_,
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
        getWHArray:function(){
            return wh;
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
        getWormHoleMW:function(index){
            return wh[index];
        },
        removeButton:removeButton_,
        clearGroup:function(){
            group.removeAll();
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
