/**
 * KiS Framework, Created by Fabry on 17/03/2016.
 */
function ScatterManager(gameRef,gameClass) {
    var game_ = gameRef;
    var gameClass_ = gameClass;
    var scatterClass_=[];
    var scatterJson=[];
    var triggerIcon_;

    function initClass_(){
        triggerIcon_=ReelConfig.scatterIcon;
    }

    function parse_(json){
        scatterJson=[];
        if (json.win.scatter != null) {
            for (var a in json.win.scatter) {
                for (var b in json.win.scatter[a]) {
                    scatterJson[b]={};
                    scatterJson[b].amt = json.win.scatter[a][b].amt;
                    scatterJson[b].num = json.win.scatter[a][b].number;
                    scatterJson[b].mult = json.win.scatter[a][b].multiplier;
                }
            }
        }
    }

    function addScatter_(num){
        try{
            scatterClass_[num]=new window[ReelConfig.scatterType](game_,gameClass_,num);
        }catch(e){
            console.log("error looking for scatter class " + name);
        }

    }

    function showScatter_(num,smb){
        console.log("whaaaat")
        if(scatterClass_[num]==null || scatterJson[num]==null)return;
        scatterClass_[num].showScatter(scatterJson[num],smb);
    }

    function clearScatter_(){
        if(scatterClass_[num]==null)return;
        scatterClass_[num].clearScatter();
    }

    function endAnimHandle_(par1, par2,evt){
        if ( par2>0) {
             for ( var a in scatterJson){
                 if (scatterClass_[a]!=null){
                     if (scatterJson[a].amt>0 || scatterJson[a].mult>0){
                         evt.addEvent(showScatter_,0,a);
                         evt.addEvent(gameClass_.fakeEvent(), 100);
                     }
                 }
             }
            evt.addEvent(gameClass_.fakeEvent(), 3000);
        }
    }

    function showScatterAfterSubst_(par1){
        if ( par1.length>0) {
            for ( var a in par1 ){
                var iconN= par1[a].smbNum;
                add=true;
                var smb = new Phaser.Sprite( game_,par1[a].x , par1[a].y , "anim" +iconN);
                smb.anchor.set(.5, .5);
                smb.animations.add("anim");
                smb.scale.x=1;
                smb.scale.y=1;
                par1[a].visible=false;

                spinManager_.getReelGroup(par1[a].reel).add(smb);
                spinManager_.setAnimationMap(par1[a].reel,par1[a].smb,smb);
                smb.animations.play("anim", 24, false, true, updateIcon_,[par1[a],a]);
                soundManager_.playSound("smbWin_"+iconN);

            }
        }
    }

    function updateIcon_(obj){
        obj[0].visible=true;
        if (obj[1]==0)showScatter_(obj[0].smbNum,obj[0]);
    }

    var me = {
        parse:parse_,
        addScatter:addScatter_,
        clearScatter:clearScatter_,
        showScatter:showScatter_,
        endAnimHandle:endAnimHandle_,
        showScatterAfterSubst:showScatterAfterSubst_,
        getTriggerIcon:function(){
            return (triggerIcon_!=null)?triggerIcon_:999;
        }
    }

    initClass_();
    return me;
}