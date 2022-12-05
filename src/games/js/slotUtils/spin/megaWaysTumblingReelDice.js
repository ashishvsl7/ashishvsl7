/**
 * KiS Framework, Created by Fabry on 21/04/2022.
 */
function  MegaWaysTumblingReelDice(gameRef,gameClass,_num,num2,swap,len){
    var game_=gameRef;
    var gameClass_=gameClass;
    var swap_=swap;
    var num=_num;
    var smbNum=(num2!=undefined)?num2:-1
    var img=[];
    var imgBlurr=[];
    var frames=[];
    var bg=[];
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
    size_[3]= 187;
    size_[4]=140;
    size_[5]=112;
    size_[6]=93.3;
    size_[7]=80;
    var numIcon_=len;
    var height_=0;
    var width_=128;
    var characterList=[9,10,11,12];


    function Point(x, y){
        this.x = x || 0;
        this.y = y || 0;
    }

    function init (swap,len){
        if (gameParams.gameOriginalID=="7025"){
            characterList=[8,9,10,11,12,13,15];
        }
        pressDuration_= (displayManager.groups.reelsPt!=null)?displayManager.groups.reelsPt.clickDuration:2000;
        height_=size_[len];
        numIcon_=len;
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
        if (img[index]!=undefined && img[index]!=""){
            img[index].visible=false;

            group.remove(img[index]);
            img[index].destroy();
            img[index]=null;
        }
        var poss=(Number(pos[index].y)+height_/2);
        var dest=realPos_B_[index];
        var ic=icon;
        if(img[index]!=null)group.remove(img[index]);
        if(imgBlurr[index]!=null)group.remove(imgBlurr[index]);
        if(bg[index]!=undefined)group.remove(bg[index]);

        bg[index] = game_.add.sprite(pos[index].x + ReelConfig.icon.width / 2, poss, "smbBg_" + ic +"_"+ numIcon_);
        bg[index].scale.x=1;
        bg[index].scale.y=1;
        bg[index].anchor.set(.5,.5);
        group.add(bg[index]);


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


        img[index].anchor.set(.5,.5);
        group.add(img[index]);
        iconN[index]=icon;



        if(frames[index]!=undefined)group.remove(frames[index]);
        if (characterList.indexOf(icon)>=0){
            if (isBrandedMw()){
                frames[index]= game_.add.sprite(pos[index].x + ReelConfig.icon.width / 2, poss, "smbFrame"+icon +"_" + numIcon_);
            }else{
                frames[index]= game_.add.sprite(pos[index].x + ReelConfig.icon.width / 2, poss, "smbFrame_" + hasDedicatedFrame_(icon)+ numIcon_);
            }
            frames[index].anchor.set(.5,.5);
            group.add(frames[index]);
            iconAdjustment_(img[index],icon,frames[index]);

            frames[index].visible=true;
        }else{
            if (numIcon_==7) {
                img[index].scale.x=.65
                img[index].scale.y=.65
            }else if (numIcon_==6){
                img[index].scale.x=.80
                img[index].scale.y=.80
            }else if (numIcon_==5){
                img[index].scale.x=.95
                img[index].scale.y=.95
            }
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

    function updateReelSize_(numS){
        numIcon_=numS;
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

            realPos_B_[j]=j;
            realPos_T_[j]=j;
            img[j].y=pos[j].y +height_ / 2;
            img[j].visible=false;

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
        //set the symbol in the Bottom position of the reel
        dest=realPos_B_[dest_];
        img[dest].visible=false;
        imgBlurr[dest].visible=false;
        group.remove(img[dest]);
        group.remove(imgBlurr[dest]);
        if(img[dest]!=null)img[dest].destroy();
        img[dest]=null;
        var poss=(Number(pos[dest].y)+height_/2);

        if(bg[dest]!=undefined)group.remove(bg[dest]);

        bg[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, poss, "smbBg_" + icon +"_"+  numIcon_);
        bg[dest].scale.x=1;
        bg[dest].scale.y=1;
        bg[dest].anchor.set(.5,.5);
        group.add(bg[dest]);
        bg[dest].visible=true;



        if (attr == null ) {
            var ic=icon;
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

        group.add(img[dest]);


        if (imgBlurr[dest]!=null) {
            imgBlurr[dest].reel = num;
            imgBlurr[dest].icon = dest_;
            imgBlurr[dest].anchor.set(.5, .5);
            imgBlurr[dest].visible = false;
            group.add(imgBlurr[dest]);
        }

        if(frames[dest]!=undefined)group.remove(frames[dest]);
        if (characterList.indexOf(icon)>=0 ){
            if (isBrandedMw()){
                frames[dest]= game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, poss, "smbFrame"+icon +"_" + numIcon_);
            }else{
                frames[dest]= game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, poss, "smbFrame_" + hasDedicatedFrame_(icon)+ numIcon_);
            }
            frames[dest].anchor.set(.5,.5);
            group.add(frames[dest]);

            iconAdjustment_(img[dest],icon,frames[dest]);
            frames[dest].visible=true;
        }else{
            if (numIcon_==7) {
                img[dest].scale.x=.65
                img[dest].scale.y=.65
            }else if (numIcon_==6){
                img[dest].scale.x=.80
                img[dest].scale.y=.80
            }else if (numIcon_==5){
                img[dest].scale.x=.95
                img[dest].scale.y=.95
            }
        }

        return img[dest];

        createButton_(dest);
    }

    function iconAdjustment_(image,icon,frame){
        if (icon>=9){
            if (numIcon_==7) {
                image.scale.x=.60
                image.scale.y=.60
            }else if (numIcon_==6){
                image.scale.x=.75
                image.scale.y=.75
            }else if (numIcon_==5){
                image.scale.x=.90
                image.scale.y=.90
            }
        }
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

    function newSmb_  (icon,dest_,attr_){
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
        bg[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, poss, "smbBg_" +   icon +"_"+ numIcon_);
        bg[dest].scale.x=1;
        bg[dest].scale.y=1;
        bg[dest].anchor.set(.5,.5);
        group.add(bg[dest]);
        bg[dest].visible=true;


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
        img[dest].dispIcon=true;
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
                frames[dest]= game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, poss, "smbFrame"+icon +"_" + numIcon_);
            }else{
                frames[dest]= game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, poss, "smbFrame_" +hasDedicatedFrame_(icon)+  numIcon_);
            }
            frames[dest].anchor.set(.5,.5);
            group.add(frames[dest]);

            iconAdjustment_(img[dest],icon,frames[dest]);
            frames[dest].visible=true;
        }else{
            if (numIcon_==7) {
                img[dest].scale.x=.65
                img[dest].scale.y=.65
            }else if (numIcon_==6){
                img[dest].scale.x=.80
                img[dest].scale.y=.80
            }else if (numIcon_==5){
                img[dest].scale.x=.95
                img[dest].scale.y=.95
            }
        }


    }

    function replaceIcon_(dest_,icon,attr_){
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
            bg[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, poss, "smbBg_" +  icon +"_"+ numIcon_);
            bg[dest].scale.x=1;
            bg[dest].scale.y=1;
            bg[dest].anchor.set(.5,.5);
            group.add(bg[dest]);
            bg[dest].visible=true;
        }else{
            if (isBrandedMw()|| needIconBg_(icon)){
                bg[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, poss, "smbFrameBg_" + numIcon_);
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
                frames[dest]= game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, poss, "smbFrame"+icon +"_" + numIcon_);
            }else{
                frames[dest]= game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, poss, "smbFrame_" +hasDedicatedFrame_(icon)+  numIcon_);
            }
            frames[dest].anchor.set(.5,.5);
            group.add(frames[dest]);

            iconAdjustment_(img[dest],icon,frames[dest]);
            frames[dest].visible=true;
        }else{
            if (numIcon_==7) {
                img[dest].scale.x=.65
                img[dest].scale.y=.65
            }else if (numIcon_==6){
                img[dest].scale.x=.80
                img[dest].scale.y=.80
            }else if (numIcon_==5){
                img[dest].scale.x=.95
                img[dest].scale.y=.95
            }
        }

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
        group.remove(img[dest]);
        group.remove(imgBlurr[dest]);
        var poss=(Number(pos[dest].y)+height_/2);

        if(bg[dest]!=undefined)group.remove(bg[dest]);
        if (characterList.indexOf(icon)<0){
            bg[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, poss, "smbBg_" + icon +"_"+  numIcon_);
            bg[dest].scale.x=1;
            bg[dest].scale.y=1;
            bg[dest].anchor.set(.5,.5);
            group.add(bg[dest]);
            bg[dest].visible=true;
        }else{
            if (isBrandedMw()|| needIconBg_(icon)){
                bg[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, poss, "smbFrameBg_" + numIcon_);
                bg[dest].scale.x=1;
                bg[dest].scale.y=1;
                bg[dest].anchor.set(.5,.5);
                group.add(bg[dest]);
                bg[dest].visible=true;
            }
        }

        if (attr == null) {
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
                frames[dest]= game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, poss, "smbFrame"+icon +"_" + numIcon_);
            }else{
                frames[dest]= game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, poss, "smbFrame_" +hasDedicatedFrame_(icon)+  numIcon_);
            }
            frames[dest].anchor.set(.5,.5);
            group.add(frames[dest]);

            iconAdjustment_(img[dest],icon,frames[dest]);
            frames[dest].visible=true;
        }else{
            if (numIcon_==7) {
                img[dest].scale.x=.65
                img[dest].scale.y=.65
            }else if (numIcon_==6){
                img[dest].scale.x=.80
                img[dest].scale.y=.80
            }else if (numIcon_==5){
                img[dest].scale.x=.95
                img[dest].scale.y=.95
            }
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

    function hasDedicatedFrame_(icon){
        if (gameParams.gameOriginalID==7025){
            if (icon==13)return "w_";
        }
        return "";
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
        newSmb:newSmb_,
        getIcon:getIcon_,
        toggleSpin:toggleSpin_,
        resetIconPos:resetIconPos_,
        updateReelSize:updateReelSize_,
        getAllIcons: function(){
            return group;
        },
        getPos: function(icon){
            return pos[icon];
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
            group.removeAll();
        }
    }

    init(swap_,len);
    return me;

}
