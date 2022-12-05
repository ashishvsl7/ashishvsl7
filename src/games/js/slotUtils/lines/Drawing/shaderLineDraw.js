/**
 * KiS Framework, Created by Fabry on 29/02/2016.
 */
function ShaderLineDraw (gameRef,gameClass){
    var game_=gameRef;
    var gameClass_=gameClass;
    var imgLine;
    var filter;
    var intT;
    var group;


    function initClass_  () {
        group= game_.add.group();
        imgLine= game_.add.sprite(0, 0);
        imgLine.width=1200;
        imgLine.height=720;
        filter=game_.add.filter("FloatingLines") ;
        filter.line=1;
        group.add(imgLine);
    }

    function prepareWinnings_ (){
    }

    function clearLine_ (){
        filter.line=-1;
        clearInterval(intT);
    }

    function showLine_ (){
        game_.world.swap(group,winManager_.getGroup())
        filter.line=0;
        imgLine.filters=[filter];
        intT= setInterval(filterUpd_,16);
    }

    function drawLine_  (line, amt, txtCoin, txtNum) {

    };

    function filterUpd_(){
        filter.update();
    }

    initClass_();
    var me={
        prepareWinnings:prepareWinnings_,
        clearLine:clearLine_,
        showLine:showLine_,
        drawLine:drawLine_,
        stopEvents:stopEvents_
    }

    return me;
}