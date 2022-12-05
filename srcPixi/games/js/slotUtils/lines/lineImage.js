function  LineImage(gameRef,gameClass,lineType){
    var game_=gameRef;
    var gameClass_= gameClass;
    var imgLine;

    function showLine_ (){
        imgLine.visible=true;
        setTimeout(clearWin_,lineConfig.win.duration);
    }

    function clearWin_ (){
        imgLine.visible=false;
    }

    function initClass_(){
        imgLine= game_.add.sprite(30, 350, "line");
        imgLine.width=1000;
        imgLine.height=10;
        imgLine.visible=false;
    }

    function prepareWinnings_(){

    }

    function setLineType_(type){
        lineType=type;
        initClass_();
    }

    function getLineType_(){
        return lineType_;
    }

    var me={
        clearWin:clearWin_,
        showLine:showLine_,
        prepareWinnings:prepareWinnings_,
        setLineType:setLineType_,
        getLineType:getLineType_
    }
    
    initClass_();
    return me;

}