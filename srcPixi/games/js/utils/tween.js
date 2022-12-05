function  Tween(_context,_ReelConfig){
    var context=_context;
    var obj;
    var duration;
    var value=[];
    var stop=[];
    var stp;
    var callBackParam;
    var raf;
    var onFinishCallback;
    var startTime;

    var to_=function(_obj,_duration,_prop,_stop,_onFinishCallback,_par){
        obj=_obj;
        callBackParam=_par;
        stp=_stop;
        duration=_duration;
        for ( a in obj.pos){
            value[a]=obj.pos[a].y;
            stop[a]=value[a]+_stop;
        }
        onFinishCallback=_onFinishCallback;
        startTime= new Date();
        animate();
    }

    var animate=function(){
        var active=true;
         context.clearRect(obj.pos[0].x, 0,ReelConfig.icon.width , 1080);
        for ( a in obj.img) {
            var time=new Date();
            value[a]=value[a]+ (stp / duration / 60);
            obj.pos[a].y=value[a];
            context.drawImage(obj.img[a], obj.pos[a].x , value[a], ReelConfig.icon.width, ReelConfig.icon.height);
            if ( ( stp>0 && value[a]>=stop[a]) || ( stp<0 && value[a]<=stop[a])){
                active=false;
            }
        }

        if (active==false){
            if(onFinishCallback)onFinishCallback(obj,callBackParam);
            cancelAnimationFrame(raf);
        }else{
            raf=requestAnimationFrame(animate);
        }
    }

    var me={
        to:to_
    }

    return me;

};


