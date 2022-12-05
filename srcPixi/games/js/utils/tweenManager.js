function  TweenManager(){
    var raf;
    var tweenList=[];
    var active=0;
    
    var startAnimate_= function(anim){
        if (active==0){
            for (var t  in tweenList){
                if (tweenList[t]!=null){
                    tweenList[t].callback();
                    tweenList[t]=null;
                }                
            }
            //chiamare callback su tutte tween
            ///if(onFinishCallback)onFinishCallback(obj,callBackParam);
            cancelAnimationFrame(raf);
        }else{
            //chiamare animate su tutte tween
            active =0;
            for (var t  in tweenList){
                if (tweenList[t]!=null){
                    active+=tweenList[t].animate();
                }
            }
            raf=requestAnimationFrame(startAnimate_);
        }
    }
    
    var addTween_ = function(tw){
        tweenList.push(tw);
        if (active==0){
            active=1;
            requestAnimationFrame(startAnimate_);            
        }
    }
    
    var me={
        startAnimate:startAnimate_,
        addTween:addTween_
    }
    return me;
}
