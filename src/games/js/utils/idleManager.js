/**
 * KiS Framework, Created by Fabry on 08/07/2016.
 */
function  IdleCycleManager(gameRef, gameClass) {
    var gameClass_ = gameClass;
    var game_ = gameRef;
    var mainGroup_;
    var interval_=0;
    var objs_=[];

    function initClass_(){
        mainGroup_=displayManager_.getGroup("idleObjects");
        //place idle objects into the stage
    }

    function startIdleCycle_(){
        if(mainGroup_==null)return;
        var index=0;
        var x;
        var y;
        var scaleX;
        var scaleY;
        var fps;
        var alpha;
        var clear;
        var sound;

        clearTimeout(interval_);
        mainGroup_.visible=true;
        for (var a in displayManager.groups.idleObjects.objects){
            if (displayManager.groups.idleObjects.objects[a].name==null) {
                //multiple objects
                if (Util.getRandomInt(1, 1000) > (1000 - displayManager.groups.idleObjects.objects[a].prob * 10)) {
                    for (var b in displayManager.groups.idleObjects.objects[a]) {
                        var name = displayManager.groups.idleObjects.objects[a][b].name;
                        if (game_.cache.checkImageKey(name) == true && hasFocus_==true) {
                            x= getParameter_(displayManager.groups.idleObjects.objects[a][b],"x");
                            y= getParameter_(displayManager.groups.idleObjects.objects[a][b],"y");
                            alpha= getParameter_(displayManager.groups.idleObjects.objects[a][b],"alpha",1);
                            scaleX= getParameter_(displayManager.groups.idleObjects.objects[a][b],"scaleX",.6);
                            scaleY= getParameter_(displayManager.groups.idleObjects.objects[a][b],"scaleY",scaleX);
                            fps= getParameter_(displayManager.groups.idleObjects.objects[a][b],"fps",24);
                            clear= getParameter_(displayManager.groups.idleObjects.objects[a][b],"clear",true);
                            sound=getParameter_(displayManager.groups.idleObjects.objects[a][b],"sound","");

                            if (objs_[b]!=null){
                                objs_[b].visible=true;
                                var ob=objs_[a];
                            }else{
                                var ob = game_.add.sprite(x,y, name);
                                ob.anchor.set(.5, .5);
                                ob.animations.add("anim");
                                ob.alpha =alpha;
                                ob.scale.x = scaleX/10;
                                ob.scale.y = scaleY/10;
                                objs_[b]=ob;
                                mainGroup_.add(ob);
                            }
                            ob.animations.play("anim", fps, false, clear, null, null);//todo parametric loop
                            if (sound!="")soundManager_.playSound(sound);
                            index++;
                            if (displayManager.groups.idleObjects.onlyOne!=null && displayManager.groups.idleObjects.onlyOne==true){
                                interval_= setTimeout(startIdleCycle_,Util.getRandomInt(displayManager.groups.idleObjects.frequency[0],displayManager.groups.idleObjects.frequency[1]));
                                return;
                            }
                        }
                    }
                }
            }else {
                //single object
                if (Util.getRandomInt(1, 1000) > (1000 - displayManager.groups.idleObjects.objects[a].prob * 10)) {
                    var name = displayManager.groups.idleObjects.objects[a].name;
                    if (game_.cache.checkImageKey(name) == true && hasFocus_==true) {
                        x= getParameter_(displayManager.groups.idleObjects.objects[a],"x");
                        y= getParameter_(displayManager.groups.idleObjects.objects[a],"y");
                        alpha= getParameter_(displayManager.groups.idleObjects.objects[a],"alpha",1);
                        scaleX= getParameter_(displayManager.groups.idleObjects.objects[a],"scaleX",.6);
                        scaleY= getParameter_(displayManager.groups.idleObjects.objects[a],"scaleY",scaleX);
                        fps= getParameter_(displayManager.groups.idleObjects.objects[a],"fps",24);
                        clear= getParameter_(displayManager.groups.idleObjects.objects[a],"clear",24);
                        sound=getParameter_(displayManager.groups.idleObjects.objects[a],"sound","");


                        if (objs_[a]!=null){
                            objs_[a].visible=true;
                            var ob=objs_[a];
                        }else{
                            var ob = game_.add.sprite(x,y, name);
                            objs_[a]=ob;
                            ob.anchor.set(.5, .5);
                            ob.animations.add("anim");
                            ob.alpha =alpha;
                            ob.scale.x = scaleX/10;
                            ob.scale.y = scaleY/10;
                            mainGroup_.add(ob);
                        }
                        ob.animations.play("anim", fps, false, clear, null, null);//todo parametric loop
                        if (sound!="")soundManager_.playSound(sound);
                        index++;
                        if (displayManager.groups.idleObjects.onlyOne!=null && displayManager.groups.idleObjects.onlyOne==true){
                            interval_= setTimeout(startIdleCycle_,Util.getRandomInt(displayManager.groups.idleObjects.frequency[0],displayManager.groups.idleObjects.frequency[1]));
                            return;
                        }
                    }
                }
            }
        }
        interval_= setTimeout(startIdleCycle_,Util.getRandomInt(displayManager.groups.idleObjects.frequency[0],displayManager.groups.idleObjects.frequency[1]));
    }

    function getParameter_(node,name,def){
        if (node[name]==undefined)return def;
        return (Array.isArray(node[name]))?Util.getRandomInt(node[name][0],node[name][1]):node[name];
    }

    function stopIdleCycle_(){
        clearTimeout(interval_);
    }

    function forceIdleCycle_(obj){
        var x;
        var y;
        var scaleX;
        var scaleY;
        var fps;
        var alpha;
        var clear;
        var sound;

        if(displayManager.groups.idleObjects !=null && displayManager.groups.idleObjects.objects[obj]!=null) {
            var name = displayManager.groups.idleObjects.objects[obj].name;
            if (game_.cache.checkImageKey(name) == true && hasFocus_ == true) {
                x= getParameter_(displayManager.groups.idleObjects.objects[obj],"x");
                y= getParameter_(displayManager.groups.idleObjects.objects[obj],"y");
                alpha= getParameter_(displayManager.groups.idleObjects.objects[obj],"alpha",1);
                scaleX= getParameter_(displayManager.groups.idleObjects.objects[obj],"scaleX",.6);
                scaleY= getParameter_(displayManager.groups.idleObjects.objects[obj],"scaleY",scaleX);
                fps= getParameter_(displayManager.groups.idleObjects.objects[obj],"fps",24);
                clear= getParameter_(displayManager.groups.idleObjects.objects[obj],"clear",24);
                sound=getParameter_(displayManager.groups.idleObjects.objects[obj],"sound","");

                if (objs_[obj]!=null){
                    objs_[obj].visible=true;
                    var ob=objs_[obj];
                }else{
                    var ob = game_.add.sprite(x,y, name);
                    objs_[obj]=ob;
                    ob.anchor.set(.5, .5);
                    ob.animations.add("anim");
                    ob.alpha =alpha;
                    ob.scale.x = scaleX/10;
                    ob.scale.y = scaleY/10;
                    mainGroup_.add(ob);
                }
                ob.animations.play("anim", fps, false, clear, null, null);//todo parametric loop
                if (sound!="")soundManager_.playSound(sound);
                if (getParameter_(displayManager.groups.idleObjects.objects[obj],"evt","")!="" && gameClass_.doBuyFeature!=undefined){
                    ob.inputEnabled=true;
                    ob.events.onInputDown.add(gameClass_.doBuyFeature, this);
                }

            }
        }
    }

    var me={
        startIdleCycle:startIdleCycle_,
        stopIdleCycle:stopIdleCycle_,
        forceIdleCycle:forceIdleCycle_
    };
    initClass_();
    return me;
}