function  Reel(gameRef,gameClass,_num,num2,swap){
    var game_=gameRef;
    var gameClass_=gameClass;
    var swap_=swap;
    var num=_num;
    var smbNum=(num2!=undefined)?num2:-1
    var img=[];
    var imgBlurr=[];
    var btn=[];
    var pos=[];
    var startPos;
    var iconN=[];
    var group;
    var mainGroup;

    function Point(x, y){
        this.x = x || 0;
        this.y = y || 0;
    }

    function init (swap){
        mainGroup=displayManager_.getGroup("reels");
        group= game_.add.group();

        //back end 0 is on top

        //icon on top
        var indexIcon=0;
        var dummyIndex=0;
        for (var j = 0; j <  ReelConfig.numIconsOnTop; j++) {
            img[indexIcon]="";
            imgBlurr[indexIcon]=null;
            btn[indexIcon]=null;
            if (swap!=false) {
                var pos_ = new Point(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * num), ReelConfig.reel.deltaY_0 - (ReelConfig.reel.deltaY * j));
            }else{
                var pos_ = new Point(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * num), ReelConfig.reel.deltaY_0 + (ReelConfig.reel.deltaY * j));
            }
            pos[indexIcon]= new Point(pos_.x,pos_.y);
            startPos=group.y;
            dummyIndex++;
            indexIcon++;
        }

        //upper icons where animations
        var deltaIcon=indexIcon;
        for (var j = 0; j <  ReelConfig.numIcons; j++) {
            var indexActualIcon="upperIcon"+j;
            img[indexActualIcon]="";
            imgBlurr[indexActualIcon]=null;
            btn[indexActualIcon]=null;
            if (swap!=false) {
                var pos_ = new Point(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * num), ReelConfig.reel.deltaY_0 - (ReelConfig.reel.deltaY * (ReelConfig.numIcons-1-j+deltaIcon)));
            }else{
                var pos_ = new Point(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * num), ReelConfig.reel.deltaY_0 + (ReelConfig.reel.deltaY * (ReelConfig.numIcons-1-j+deltaIcon)));
            }
            pos[indexActualIcon]= new Point(pos_.x,pos_.y);
            indexIcon++;
        }


        //dummy icons
        deltaIcon=indexIcon;
        for (var j = 0; j < ReelConfig.icons[num]; j++) {
            img[dummyIndex]="";
            imgBlurr[dummyIndex]=null;
            btn[dummyIndex]=null;
            if (swap!=false) {
                var pos_ = new Point(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * num), ReelConfig.reel.deltaY_0 - (ReelConfig.reel.deltaY * (j+deltaIcon)));
            }else{
                var pos_ = new Point(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * num), ReelConfig.reel.deltaY_0 + (ReelConfig.reel.deltaY * (j+deltaIcon)));
            }
            pos[dummyIndex]= new Point(pos_.x,pos_.y);
            indexIcon++;
            dummyIndex++;
        }

        //lower icons icons
        deltaIcon=indexIcon;
        for (var j = 0; j <  ReelConfig.numIcons; j++) {
            var indexActualIcon="lowerIcon"+j;
            img[indexActualIcon]="";
            imgBlurr[indexActualIcon]=null;
            btn[indexActualIcon]=null;
            if (swap!=false) {
                var pos_ = new Point(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * num), ReelConfig.reel.deltaY_0 - (ReelConfig.reel.deltaY * (ReelConfig.numIcons-1-j+deltaIcon)));
            }else{
                var pos_ = new Point(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * num), ReelConfig.reel.deltaY_0 + (ReelConfig.reel.deltaY * (ReelConfig.numIcons-1-j+deltaIcon)));
            }
            pos[indexActualIcon]= new Point(pos_.x,pos_.y);
            indexIcon++;
        }

        //icon below everything
        deltaIcon=indexIcon;
        for (var j = 0; j <  ReelConfig.numIconsOnBottom; j++) {
            img[dummyIndex]="";
            imgBlurr[dummyIndex]=null;
            btn[dummyIndex]=null;
            if (swap!=false) {
                var pos_ = new Point(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * num), ReelConfig.reel.deltaY_0 - (ReelConfig.reel.deltaY * (j+deltaIcon)));
            }else{
                var pos_ = new Point(ReelConfig.reel.deltaX_0 + (ReelConfig.reel.deltaX * num), ReelConfig.reel.deltaY_0 + (ReelConfig.reel.deltaY * (j+deltaIcon)));
            }
            pos[dummyIndex]= new Point(pos_.x,pos_.y);
            dummyIndex++;
            indexIcon++;
        }
        mainGroup.add(group);
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

        // txt = new Phaser.Text(game_, pos[index].x+ReelConfig.icon.width/2, pos[index].y+ReelConfig.icon.height/2,index, {
        //     font: "Arial 15px",
        //     fill: "#ffffff",
        // });
        // group.add(txt);
    }

    function resetStartPos_  (){
        group.y=startPos;
    }

    function removeSymbol_(dest_){
        var dest;
        dest="lowerIcon"+dest_;
        img[dest].visible=false;
        group.remove(img[dest]);

        dest="upperIcon"+dest_;
        img[dest].visible=false;
        group.remove(img[dest]);
    }

    function swapSmb_  (icon,dest_,attr_){
        var dest= "upperIcon"+dest_;
        var attr=attr_;
        var reel=(attr_!=null && attr_.reels!=undefined)?attr_.reels.indexOf(num):-1;
        //set the symbol in the Bottom position of the reel
        var vis=img[dest_].alpha;
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

    }

    function toggleSpin_(dest,state){
        if (imgBlurr[dest]!=null){
            //toggle spin blurred images on / off
            imgBlurr[dest].visible=state;
            img[dest].visible=!state;
        }
    }

    function newSmb_  (icon,dest_,attr_){
        var dest= "lowerIcon"+dest_;
        //set the symbol in the Top position of the reel
        var attr=attr_;
        var reel=(attr_!=null && attr_.reels!=undefined)?attr_.reels.indexOf(num):-1;
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
        group.remove(imgBlurr[index]);
        img[index]=null;
        if (attr == null || attr.type == "icon"){
            img[index] = game_.add.sprite(pos[index].x + ReelConfig.icon.width / 2, pos[index].y + ReelConfig.icon.height / 2, "icon"+ gameClass_.getFsIcon(icon)  + icon);
            img[index].alpha=1;

            if (game.cache.checkImageKey("bicon" + gameClass_.getFsIcon(icon) + icon)){
                imgBlurr[index] = game_.add.sprite(pos[index].x + ReelConfig.icon.width / 2, pos[index].y + ReelConfig.icon.height / 2, "bicon"+ gameClass_.getFsIcon(icon)  + icon);
                imgBlurr[index].smbNum = icon;
            }else{
                imgBlurr[index]=null;
            }

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


        if (imgBlurr[index]!=null) {
            imgBlurr[index].reel = num;
            imgBlurr[index].icon = index;
            if (num<2 && ReelConfig.simbolsReflection!=undefined && ReelConfig.simbolsReflection.indexOf(icon)>=0){
                imgBlurr[index].scale.x=-1;
            }else{
                imgBlurr[index].scale.x=1;
            }
            imgBlurr[index].scale.y = 1;
            imgBlurr[index].anchor.set(.5, .5);
            imgBlurr[index].visible = false;
            group.add(imgBlurr[index]);
        }



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

        return img[index];
    }

    function removeDummy_(index){
    }



    function click_(dd){
    }

    function getIcon_ (icon){
        return img[icon];
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
            var dest="upperIcon"+icon;
            return pos[dest];
        },
        getRealPosSmb:function (icon){
            var dest="upperIcon"+icon;
            return img[dest];
        },
        getSymbol: function(icon){
            var dest="upperIcon"+icon;
            return img[dest];
        },
        setVisible:function (icon,flag){
            var dest="upperIcon"+icon;
            img[dest].alpha=(flag)?1:0;
        },
        getIconNum:function(icon){
            var dest="upperIcon"+icon;
            return iconN[dest];
        },
        resetSwipeForMsg:function(){
            resetSwipe_=true;
        }
    }

    init(swap_);
    return me;

};
