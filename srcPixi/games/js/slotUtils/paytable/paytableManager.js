/**
 * KiS Framework, Created by Fabry on 15/04/2016.
 */
function PaytableManager(gameRef,gameClass) {
    var game_ = gameRef;
    var gameClass_ = gameClass;
    var reelPtGroup_;
    var ptGroup_;
    var ico_=null;
    var ptTxtField_;
    var ptValue_=[];
    var reelPtValueField_=[];
    var reelPtNumField_=[];
    var ptYpos_=0;
    var ptXpos_=0;
    var scrollWindow_;
    var icon_=null;
    var positions_=[];
    var offset_=0;

    function initClass_() {
        reelPtGroup_ = displayManager_.getGroup("reelsPt");
        ptGroup_ = displayManager_.getGroup("paytable");

        for (var i = 1; i <= ReelConfig.numReels; i++) {
            reelPtValueField_[i] = displayManager_.getText("win" + i);
            reelPtNumField_[i] = displayManager_.getText("po" + i);
            positions_[i]=reelPtNumField_[i].y;
        }
        offset_=reelPtNumField_[i-1].height+6;
        reelPtValueField_["desc"] = displayManager_.getText("desc" );
        reelPtNumField_["desc"] = displayManager_.getText("desc" );
        for (var icon = 1; icon <= ReelConfig.numIcon; icon++){
            ptValue_[icon]={};
            ptValue_[icon].type = "";
            ptValue_[icon].desc = "";
            ptValue_[icon].pt=[];
            for (i = 0; i <= ReelConfig.numReels; i++) {
                ptValue_[icon].pt[i] = {};
                ptValue_[icon].pt[i].num = i;
                ptValue_[icon].pt[i].val = Util.getRandomInt(0,5);//todo remove
            }
        }
        createPt_();

    }

    function createPt_(){
    }

    function addElement_(group){
        if (group=="payout"){
            addIcons_();
        }else if (group=="wild"){
            addWild_();
        }else if (group=="fs"){
            addFs_();
        }else if (group=="scatter"){
            addScatter_();
        }else if (group=="chest"){
            addChest_();
        }else if (group=="paylines"){
            addPl_();
        }
    }

    function addIcons_(){
        var iconPerRow=3;//todo read from config
        var cIcon=0;
        ptXpos_=100;

        for (var i=1; i<= ReelConfig.numIcon+1;i++){
            cIcon++;
            var sp = new Phaser.Sprite(game_, ptXpos_, ptYpos_, "icon"+i);
            sp.width = 150
            sp.height = 150;

            ptGroup_.add(sp);
            var txtPos=ptYpos_;
            for (var n = 1; n <= ReelConfig.numReels; n++) {
                txtPos+=20;

                var txtN = new Phaser.Text(game_,ptXpos_ +200, txtPos, ptValue_[i].pt[n].num , {
                    font: "Arial 20px",
                    fill: "#FFFFFF",
                    boundsAlignH: "right"
                });
                var txtV = new Phaser.Text(game_,ptXpos_+250 , txtPos, ptValue_[i].pt[n].val , {
                    font: "Arial 20px",
                    fill: "#FFFFFF",
                    boundsAlignH: "left"
                });
                ptGroup_.add(txtN);
                ptGroup_.add(txtV);
            }
            if (cIcon>=iconPerRow){
                ptXpos_=100;
                cIcon=0;
                ptYpos_+=220;
            }else{
                ptXpos_+=300;
            }

        }
    }

    function addWild_(){
    }

    function addFs_(){
    }

    function addScatter_(){
    }

    function addChest_(){
    }

    function addPl_(){
    }

    function addPtIcon_(icon,pt){
        ptValue_[icon].type="icon";
        ptValue_[icon].desc="";
        for (var i = 0; i <= pt.length; i++) {
            ptValue_[icon].pt[i].num = (pt[i].val>0)?pt[i].num:"";
            ptValue_[icon].pt[i].val = (pt[i].val>0)?pt[i].val:"";
        }
    }

    function addFeature_(icon,pt,desc){
        ptValue_[icon].type="";
        ptValue_[icon].desc=(desc!="")?desc:"";
        for (var i = 0; i <= pt.length; i++) {
            ptValue_[icon].pt[i].num = (pt[i].val>0)?pt[i].num:"";
            ptValue_[icon].pt[i].val = (pt[i].val>0)?pt[i].val:"";
        }
    }

    function showReelPt_(smb){
        icon_=smb;
        ico_= game_.add.sprite(displayManager.groups.reelsPt.xIcon, displayManager.groups.reelsPt.yIcon, "icon"+smb.icon);
        ico_.width=ReelConfig.icon.width;
        ico_.height=ReelConfig.icon.height;
        reelPtGroup_.add(ico_);
        reelPtGroup_.visible=true;
        reelPtGroup_.alpha=0;
        //todo tween
        offset_=reelPtNumField_[1].height-45;

        for (var i = 1; i <= ReelConfig.numReels; i++) {
            reelPtValueField_[i].visible = false;
            reelPtNumField_[i].visible = false;
            reelPtValueField_[i].y= positions_[i];
            reelPtNumField_[i].y= positions_[i];
        }
        reelPtNumField_["desc"].visible = false;
        reelPtValueField_["desc"].visible = false;
        updateValues_();
        TweenMax.to(reelPtGroup_,.2,{alpha:1});
    }

    function hideReelPt_(){
        icon_=null;
        if (ico_==null)return;
        TweenMax.to(reelPtGroup_,.2,{alpha:0,onComplete:destroy_});
    }

    function destroy_(){
        if (ico_==null)return;
        reelPtGroup_.remove(ico_);
        reelPtGroup_.visible=false;
        ico_=null;
    }

    function updateValues_(){

        var numOffset=5;
        if (icon_==null)return;
        if (displayManager.groups.reelsPt.icons[icon_.icon]==undefined) {
            var smbs = framework.getSetup().getSymbolValues(icon_.icon);
            for (var a in smbs) {
                numOffset=numOffset-1;
                reelPtValueField_[a].visible = true;
                reelPtNumField_[a].visible = true;
                reelPtValueField_[a].setText(balanceManager_.geBalanceObj().currency + Util.formatNumber(Number(balanceManager_.getCoinValue()) / lineManager_.getLinesNumber() * Number(smbs[a]), 2) + " / " + Translate.do("Coins:") + smbs[a]);
                reelPtNumField_[a].setText(a);
            }
        }else{
            var smbs = displayManager.groups.reelsPt.icons[icon_.icon];
            for (var a in smbs) {
                reelPtValueField_[a].visible = true;
                reelPtNumField_[a].visible = true;
                reelPtValueField_[a].setText(Translate.do(smbs[a]));
                if(a!="desc"){
                    reelPtNumField_[a].setText(a);
                    numOffset=numOffset-1;
                }
            }
        }

        for (var a in smbs) {
            if (a!="desc") {
                reelPtValueField_[a].y = reelPtValueField_[a].y - (numOffset * offset_);
                reelPtNumField_[a].y = reelPtNumField_[a].y - (numOffset * offset_);
            }
        }

    }

    var me = {
        showReelPt:showReelPt_,
        hideReelPt:hideReelPt_,
        updateValues:updateValues_
    }

    initClass_();
    return me;
}