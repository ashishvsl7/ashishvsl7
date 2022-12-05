/**
 * KiS Framework, Created by Fabry on 23/02/2016.
 */
function BottomBar(gameRef,gameClass){
    var game_=gameRef;
    var gameClass_=gameClass;
    var group_;
    var bg_;
    var txtField_=[];
    var betWheelControl_;
    var scrollBG_;
    var degrees_=[];
    var coins_=[];
    var open_=false;
    var cbFunct_;
    var prevRotation_=0;

    function initClass_ (){
        coins_=gameClass_.getBetConfiguration();
        degrees_=gameClass_.getBetConfigurationDeg();

        //bottom bar mobile version
       /* var rotationSnap = 360/coins_.length;
        Draggable.create("#betCtrl", {
            type:"rotation", //instead of "x,y" or "top,left", we can simply do "rotation" to make the object spinnable!
            throwProps:true, //enables kinetic-based flicking (continuation of movement, decelerating after releasing the mouse/finger)
            snap:function(endValue) {
                //this function gets called when the mouse/finger is released and it plots where rotation should normally end and we can alter that value and return a new one instead. This gives us an easy way to apply custom snapping behavior with any logic we want. In this case, just make sure the end value snaps to 90-degree increments but only when the "snap" checkbox is selected.
                return (Math.round(endValue / rotationSnap) * rotationSnap);
            },
            onThrowComplete:function(){
                for (var i=1;i<=coins_.length;i++)
                    $("#v"+i).css("color","");
                prevRotation_=normalAbsoluteAngleDegrees(this.rotation%360);
                var num=Number(degrees_.indexOf(prevRotation_))+1;
                $("#v"+num).css("color","green");
            }
        });*/
        
    }

    function setBetControlInitialBet_(val){
        for (var i=1;i<=coins_.length;i++)
            $("#v"+i).css("color","");

        var idNum=coins_.indexOf(val);
        TweenMax.to( $("#betCtrl"),0,{rotation:normalAbsoluteAngleDegrees(degrees_[idNum])});

    }

    function showBetControl_(func){
        if (open_==false)
            //TweenMax.to($("#bet"),.5,{css:{left:-50},onComplete:completeOpen});
        oepn=true;
        document.getElementById("bet").onclick = null;
        cbFunct_=func;
    }

    function normalAbsoluteAngleDegrees(angle) {
        return (angle %= 360) >= 0 ? angle : (angle + 360);
    }

    function valClick_(){
        for (var i=1;i<=coins_.length;i++)
            $("#v"+i).css("color","");

        var idNum=this.id.substr(1,this.id.length-1)-1;
        //if (prevRotation_!=degrees_[idNum])
            //TweenMax.to( $("#betCtrl"),.5,{rotation:normalAbsoluteAngleDegrees(degrees_[idNum]),onComplete:completeSelection,onCompleteParams:[this.id]})
        //completeSelection(this.id);
    }

    function completeOpen(){
        for (var i=1;i<=coins_.length;i++)
            document.getElementById("v"+i).onclick = valClick_;
    }

    function completeSelection(id){
        $("#"+id).css("color","red");
        setTimeout(callCompleteSelection,500,id);
    }

    function callCompleteSelection (id){
        framework.setBetValue(coins_[id.substr(1,id.length)-1]);
        cbFunct_(coins_[id.substr(1,id.length)-1]);//todo currency
        TweenMax.to($("#bet"),.5,{css:{left:-140}});
        oepn=false;
        //document.getElementById("bet").onclick = openBetCtrl_;
        for (var i=1;i<=coins_.length;i++)
            document.getElementById("v"+i).onclick = null;
    }

    function updateMessage_(msg,tOut,clrMsg){
        if(txtField_["messages"]!=undefined)txtField_["messages"].setText(msg);
        if (tOut>0)setTimeout(updateMessage_,tOut,"",0,clrMsg);//automatically clear the message
    }

    var me={
        bg:bg_,
        txtField:txtField_,
        scrollBG:scrollBG_,
        betWheelControl:betWheelControl_,
        updateMessage:updateMessage_,
        showBetControl:showBetControl_,
        setBetControlInitialBet:setBetControlInitialBet_
    }
    initClass_();
    return me;
}