function  TumblingReel(gameRef,gameClass,_num,num2,swap){
    var game_=gameRef;
    var gameClass_=gameClass;
    var swap_=swap;
    var num=_num;
    var smbNum=(num2!=undefined)?num2:-1;
    var img=[];
    var imgArray=[];
    var imgBlurr=[];
    var btn=[];
    var pos=[];
    var startPos;
    var iconN=[];
    var group;
    var mainGroup;
    var outerGroup;

    function Point(x, y){
        this.x = x || 0;
        this.y = y || 0;
    }

    function init (swap){
        mainGroup=displayManager_.getGroup("reels");
        group= game_.add.group();
        outerGroup= game_.add.group();



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
        outerGroup.add(group);
        mainGroup.add(outerGroup);
    }

    function setIcon_(index,icon){
        if (img[index]!=undefined && img[index]!=""){
            group.remove(img[index]);
            img[index].destroy();
            img[index]=null;
        }

        if(img[index]!=null)group.remove(img[index]);
        if(imgBlurr[index]!=null)group.remove(imgBlurr[index]);

        var ic=icon;
        if(gameParams.gameOriginalID!="7024") {
            if (icon == 12 && index == 0) ic = 14;
            if (icon == 12 && index == 1) ic = 15;
            if (icon == 12 && index == 2) ic = 16;
            if (icon == 12 && index == 3) ic = 17;
        }
        img[index]= game_.add.sprite(pos[index].x+ReelConfig.icon.width/2, pos[index].y+ReelConfig.icon.height/2, "icon"+ic);
        img[index].width=ReelConfig.icon.width;
        img[index].height=ReelConfig.icon.height;

        if (game.cache.checkImageKey("bicon"+icon)){
            imgBlurr[index] = game_.add.sprite(pos[index].x + ReelConfig.icon.width / 2, pos[index].y + ReelConfig.icon.height / 2, "bicon" + icon);
            imgBlurr[index].smbNum=icon;
            imgBlurr[index].width=ReelConfig.icon.width;
            imgBlurr[index].height=ReelConfig.icon.height;
            imgBlurr[index].anchor.set(.5,.5);
            imgBlurr[index].visible=false
            group.add(imgBlurr[index]);
        }

        img[index].smbNum=icon;
        img[index].anchor.set(.5,.5);
        group.add(img[index]);

        iconN[index]=icon;
        return img[index];
    }

    function resetIconPos_(){
        for (var j = 0; j < ReelConfig.icons[num]; j++) {
            img[j].y=pos[j].y + ReelConfig.icon.height / 2;
        }
    }

    function moveIcon_(obj,x,y){
        game_.drawImage(obj, x , y, ReelConfig.icon.width, ReelConfig.icon.height);
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
        var dest;
        var attr=attr_;
        //set the symbol in the Bottom position of the reel
        var dest= "upperIcon"+dest_;
        if(img[dest]==undefined)dest=dest_;
        group.remove(img[dest]);
        group.remove(imgBlurr[dest]);
        img[dest].destroy();
        img[dest]=null;
        if (attr == null ) {
            var ic = icon;
            if (gameParams.gameOriginalID != "7024"){
                if (icon == 12 && dest_ == 0) ic = 14;
                if (icon == 12 && dest_ == 1) ic = 15;
                if (icon == 12 && dest_ == 2) ic = 16;
                if (icon == 12 && dest_ == 3) ic = 17;
            }
            img[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + ReelConfig.icon.height / 2, "icon" + ic);
            img[dest].smbNum=icon;
            iconN[dest]=icon;
            if (game.cache.checkImageKey("bicon" + icon)){
                imgBlurr[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + ReelConfig.icon.height / 2, "bicon" + icon);
                imgBlurr[dest].smbNum = icon;
            }else{
                imgBlurr[dest]=null;
            }
            img[dest].width=ReelConfig.icon.width;
            img[dest].height=ReelConfig.icon.height;
        }else if (attr!=null && attr.type == "icon"){
            logger("swap1 "+attr.subst);
            img[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + ReelConfig.icon.height / 2, "icon" + attr.subst);
            img[dest].smbNum=attr.icon;
            iconN[dest]=attr.icon;
            img[dest].width=ReelConfig.icon.width;
            img[dest].height=ReelConfig.icon.height;

        }else if ( attr.type == "anim"){
            img[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + ReelConfig.icon.height / 2, "anim" + icon);
            img[dest].animations.add("anim");
            img[dest].animations.play("anim", 24, attr.loop, attr.killOnComplete, attr.callBack, [attr,group,img[dest]]);//todo parametric loop
            img[dest].smbNum=icon;
            iconN[dest]=icon;
            game_.world.bringToTop( img[dest]);
        }
        img[dest].reel=num;
        img[dest].icon=dest_;
        img[dest].width=ReelConfig.icon.width;
        img[dest].height=ReelConfig.icon.height;
        img[dest].attr=attr;
        img[dest].anchor.set(.5,.5);
        img[dest].visible=true;
        group.add(img[dest]);


        if (imgBlurr[dest]!=null) {
            imgBlurr[dest].reel = num;
            imgBlurr[dest].icon = dest_;
            imgBlurr[dest].width=ReelConfig.icon.width;
            imgBlurr[dest].height=ReelConfig.icon.height;
            imgBlurr[dest].anchor.set(.5, .5);
            imgBlurr[dest].visible = false;
            group.add(imgBlurr[dest]);
        }

        // var txt = new Phaser.Text(game_,0,0,dest, {
        //     font: "Arial 15px",
        //     fill: "#ffffff",
        // });
        // img[dest].addChild(txt);
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
        var dest;
        //set the symbol in the Top position of the reel
        var attr=attr_;
        var reel=(attr_!=null && attr_.reels!=undefined)?attr_.reels.indexOf(num):-1;
        var dest= "lowerIcon"+dest_;
        group.remove(img[dest]);
        group.remove(imgBlurr[dest]);
        if (attr == null || attr.reels==undefined || reel <0) {
            img[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + ReelConfig.icon.height / 2, "icon" + icon);
            img[dest].smbNum=icon;
            if (game.cache.checkImageKey("bicon" + icon)){
                imgBlurr[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + ReelConfig.icon.height / 2, "bicon" + icon);
                imgBlurr[dest].smbNum = icon;
            }else{
                imgBlurr[dest]=null;
            }
            iconN[dest]=icon;
        }else{
            img[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + ReelConfig.icon.height / 2, "icon" + attr.icon[0]);
            img[dest].smbNum= attr.subst;
            if (game.cache.checkImageKey("bicon" + icon)){
                imgBlurr[dest] = game_.add.sprite(pos[dest].x + ReelConfig.icon.width / 2, pos[dest].y + ReelConfig.icon.height / 2, "bicon" + attr.icon[0]);
                imgBlurr[dest].smbNum = attr.subst;
            }else{
                imgBlurr[dest]=null;
            }
            iconN[dest]=attr.subst;
        }
        img[dest].reel=num;
        img[dest].icon=dest_;

        img[dest].width=ReelConfig.icon.width;
        img[dest].height=ReelConfig.icon.height;
        img[dest].anchor.set(.5,.5);
        img[dest].visible=true;
        group.add(img[dest]);

        if (imgBlurr[dest]!=null) {
            imgBlurr[dest].reel = num;
            imgBlurr[dest].icon = dest_;
            imgBlurr[dest].width=ReelConfig.icon.width;
            imgBlurr[dest].height=ReelConfig.icon.height;
            imgBlurr[dest].anchor.set(.5, .5);
            imgBlurr[dest].visible = false;
            group.add(imgBlurr[dest]);
        }

        // var txt = new Phaser.Text(game_,0,0,dest, {
        //     font: "Arial 15px",
        //     fill: "#ffffff",
        // });
        // img[dest].addChild(txt);
    }

    function replaceIcon_(index,icon,attr){
        group.remove(img[index]);
        group.remove(imgBlurr[index]);
        img[index]=null;
        if (attr == null || attr.type == "icon"){
            img[index] = game_.add.sprite(pos[index].x + ReelConfig.icon.width / 2, pos[index].y + ReelConfig.icon.height / 2, "icon" + icon);
            img[index].alpha=1;
        }else if ( attr.type == "fade"){
            img[index] = game_.add.sprite(pos[index].x + ReelConfig.icon.width / 2, pos[index].y + ReelConfig.icon.height / 2, "icon" + icon);
            img[index].alpha=0;
            TweenMax.to(img[index],.4,{alpha:1});
        }else if ( attr.type == "anim"){
            img[index] = game_.add.sprite(pos[index].x + ReelConfig.icon.width / 2, pos[index].y + ReelConfig.icon.height / 2, "anim" +attr.icon[0]);
            img[index].alpha=1;
            img[index].animations.add("anim");
            img[index].animations.play("anim", 24, attr.loop, attr.killOnComplete, attr.callBack, [attr]);//todo parametric loop
        }
        img[index].reel=num;
        img[index].icon=index;
        img[index].smbNum=icon;
        img[index].attr=attr;
        img[index].width=ReelConfig.icon.width;
        img[index].height=ReelConfig.icon.height;
        img[index].anchor.set(.5,.5);
        group.add(img[index]);
        iconN[index]=icon;
        img[index].visible=true;
        return img[index];
    }

    function replaceIcon2_(index_,icon,attr){
        var index= "upperIcon"+index_;
        group.remove(img[index]);
        group.remove(imgBlurr[index]);
        img[index]=null;
        if (attr == null || attr.type == "icon"){
            img[index] = game_.add.sprite(pos[index].x + ReelConfig.icon.width / 2, pos[index].y + ReelConfig.icon.height / 2, "icon" + icon);
            img[index].alpha=1;
        }else if ( attr.type == "fade"){
            img[index] = game_.add.sprite(pos[index].x + ReelConfig.icon.width / 2, pos[index].y + ReelConfig.icon.height / 2, "icon" + icon);
            img[index].alpha=0;
            TweenMax.to(img[index],.4,{alpha:1});
        }else if ( attr.type == "anim"){
            img[index] = game_.add.sprite(pos[index].x + ReelConfig.icon.width / 2, pos[index].y + ReelConfig.icon.height / 2, "anim" +attr.icon[0]);
            img[index].alpha=1;
            img[index].animations.add("anim");
            img[index].animations.play("anim", 24, attr.loop, attr.killOnComplete, attr.callBack, [attr,group,img[index]]);//todo parametric loop
        }
        img[index].reel=num;
        img[index].icon=index;
        img[index].smbNum=icon;
        img[index].attr=attr;
        img[index].width=ReelConfig.icon.width;
        img[index].height=ReelConfig.icon.height;
        img[index].anchor.set(.5,.5);
        group.add(img[index]);
        iconN[index]=icon;
        img[index].visible=true;
        return img[index];
    }
    function getIcon_ (icon){
        return img[icon];
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
        getAllIcons: function(){
            return group;
        },
        getOuterGroup:function(){
            return outerGroup;
        },
        getPos: function(icon){
            var dest="upperIcon"+icon;
            return pos[dest];
        },
        getWholeArrSmb:function (icon){
            return img[icon];
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
        clearGroup:function(){
            group.removeAll();
        }
    }

    init(swap_);
    return me;

};
