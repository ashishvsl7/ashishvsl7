/**
 * KiS Framework, Created by Fabry on  16/12/2016.
 */

function MazeBonus(gameRef, gameClass,config,parent,name) {
    var game_ = gameRef;
    var gameClass_ = gameClass;
    var bonusManager_=parent;
    var config_=config;
    var buttons=[];
    var chestAnim=[];
    var bonusName_=name;
    var lastChestTout_;
    var music_="";
    var chestSounds_=[];
    var emitter_=[];
    var bonusGroup_;
    var pickObj=[];
    var tw=[];
    var picks_=[];
    var obj_=[];
    var specialS_=[];
    var x="x";
    var textTw_=null;



    //"paths" : [[1, 10, 9, 8, 7, 6, 5, 4, 20, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 43, 56, 62, 75, 80, 95, 94, 93, 92, 99, 112, 111, 110, 109, 118],
    // [1, 10, 11, 12, 13, 14, 15, 16, 22, 37, 36, 35, 34, 42, 54, 55, 61, 74, 73, 72, 71, 70, 79, 89, 90, 91, 92, 99, 112, 111, 110, 109, 118],
    // [1, 10, 21, 31, 30, 29, 28, 27, 26, 25, 20, 4, 3, 2, 19, 24, 39, 45, 58, 64, 77, 82, 97, 101, 102, 103, 104, 105, 106, 107, 108, 109, 118],
    // [1, 10, 21, 31, 32, 33, 34, 35, 36, 37, 22, 16, 17, 18, 23, 38, 44, 57, 63, 76, 81, 96, 100, 117, 116, 115, 114, 113, 112, 111, 110, 109, 118],
    // [1, 10, 21, 31, 32, 33, 34, 42, 54, 53, 52, 51, 50, 49, 48, 41, 28, 27, 26, 25, 40, 46, 59, 65, 78, 83, 84, 85, 86, 98, 106, 107, 108, 109, 118]], "stake" : 200}}}

    rotation_=[
        [3,3,2,2,2,2,2,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,2,2,2,3,3,2,2,2,3],
        [1,1,0,0,0,0,0,0,1,1,2,2,2,1,1,0,1,1,2,2,2,2,1,1,0,0,0,1,1,2,2,2,3],
        [1,1,1,1,2,2,2,2,2,2,4,4,2,2,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,0,0,0,0,0,0,4,4,0,0,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3],
        [1,1,1,1,0,0,0,1,1,2,2,2,2,2,2,4,4,2,2,2,3,3,3,3,3,3,0,0,0,1,1,0,0,0,1]
    ];

    var position_=[
        {"index":0,"x":90,"y":1000},
        {"index":1,"x":9,"y":1,"position":[1,1,1,1,1]},

        {"index":2,"x":1,"y":2,"position":[x,x,x,2]},
        {"index":3,"x":2,"y":2,"position":[x,x,x,2]},
        {"index":4,"x":3,"y":2,"position":[2,x,x,0]},
        {"index":5,"x":4,"y":2,"position":[2,x,x]},
        {"index":6,"x":5,"y":2,"position":[2,x,x]},
        {"index":7,"x":6,"y":2,"position":[2,x,x]},
        {"index":8,"x":7,"y":2,"position":[2,x,x]},
        {"index":9,"x":8,"y":2,"position":[2,x,x]},
        {"index":10,"x":9,"y":2,"position":[1,1,1,1,1]},
        {"index":11,"x":10,"y":2,"position":[0,0,0]},
        {"index":12,"x":11,"y":2,"position":[2,0,0]},
        {"index":13,"x":12,"y":2,"position":[2,0,0]},
        {"index":14,"x":13,"y":2,"position":[2,0,0]},
        {"index":15,"x":14,"y":2,"position":[2,0,0]},
        {"index":16,"x":15,"y":2,"position":[2,0,4]},
        {"index":17,"x":16,"y":2,"position":[x,x,0]},
        {"index":18,"x":17,"y":2,"position":[x,x,0]},

        {"index":19,"x":1,"y":3,"position":[x,x,x,3]},
        {"index":20,"x":3,"y":3,"position":[3,x,x,4]},
        {"index":21,"x":9,"y":3,"position":[3,x,1,1,1]},
        {"index":22,"x":15,"y":3,"position":[3,1,4]},
        {"index":23,"x":17,"y":3,"position":[x,x,1]},

        {"index":24,"x":1,"y":4,"position":[x,x,x,3]},
        {"index":25,"x":3,"y":4,"position":[3,2,x,0,2]},
        {"index":26,"x":4,"y":4,"position":[3,2,x,0,2]},
        {"index":27,"x":5,"y":4,"position":[0,2,x,0,2]},
        {"index":28,"x":6,"y":4,"position":[0,4,x,0,4]},
        {"index":29,"x":7,"y":4,"position":[0,x,x,0]},
        {"index":30,"x":8,"y":4,"position":[0,x,x,0]},
        {"index":31,"x":9,"y":4,"position":[0,1,1,1,1]},
        {"index":32,"x":10,"y":4,"position":[0,0,0,x,0]},
        {"index":33,"x":11,"y":4,"position":[0,0,0,x,0]},
        {"index":34,"x":12,"y":4,"position":[0,2,0,x,0]},
        {"index":35,"x":13,"y":4,"position":[0,2,0]},
        {"index":36,"x":14,"y":4,"position":[0,2,0]},
        {"index":37,"x":15,"y":4,"position":[0,1,0]},
        {"index":38,"x":17,"y":4,"position":[x,x,1]},

        {"index":39,"x":1,"y":5,"position":[x,x,x,3]},
        {"index":40,"x":3,"y":5,"position":[x,3,x,x,3]},
        {"index":41,"x":6,"y":5,"position":[0,4,1,x,4]},
        {"index":42,"x":12,"y":5,"position":[x,3,3,x,1]},
        {"index":43,"x":15,"y":5,"position":[1,x,x]},
        {"index":44,"x":17,"y":5,"position":[x,x,1]},

        {"index":45,"x":1,"y":6,"position":[x,x,x,3]},
        {"index":46,"x":3,"y":6,"position":[x,3,x,x,3]},
        {"index":47,"x":5,"y":6,"position":[x,x,x]},
        {"index":48,"x":6,"y":6,"position":[x,2,x,x,2]},
        {"index":49,"x":7,"y":6,"position":[x,2,x,x,2]},
        {"index":50,"x":8,"y":6,"position":[x,2,x,x,2]},
        {"index":51,"x":9,"y":6,"position":[x,2,x,x,2]},
        {"index":52,"x":10,"y":6,"position":[x,2,x,x,2]},
        {"index":53,"x":11,"y":6,"position":[x,2,x,x,2]},
        {"index":54,"x":12,"y":6,"position":[x,3,3,x,1]},
        {"index":55,"x":13,"y":6,"position":[x,0,0]},
        {"index":56,"x":15,"y":6,"position":[1,x,x]},
        {"index":57,"x":17,"y":6,"position":[x,x,1]},

        {"index":58,"x":1,"y":7,"position":[x,x,x,3]},
        {"index":59,"x":3,"y":7,"position":[x,3,x,x,3]},
        {"index":60,"x":5,"y":7,"position":[x,x,x]},
        {"index":61,"x":13,"y":7,"position":[x,1,1]},
        {"index":62,"x":15,"y":7,"position":[1,x,x]},
        {"index":63,"x":17,"y":7,"position":[x,x,1]},

        {"index":64,"x":1,"y":8,"position":[x,x,x,3]},
        {"index":65,"x":3,"y":8,"position":[x,3,x,x,3]},
        {"index":66,"x":5,"y":8,"position":[x,x,x]},
        {"index":67,"x":6,"y":8,"position":[x,x,x]},
        {"index":68,"x":7,"y":8,"position":[x,x,x]},
        {"index":69,"x":8,"y":8,"position":[x,x,x]},
        {"index":70,"x":9,"y":8,"position":[x,2,2]},
        {"index":71,"x":10,"y":8,"position":[x,2,2]},
        {"index":72,"x":11,"y":8,"position":[x,2,2]},
        {"index":73,"x":12,"y":8,"position":[x,2,2]},
        {"index":74,"x":13,"y":8,"position":[x,2,1]},
        {"index":75,"x":15,"y":8,"position":[1,x,x]},
        {"index":76,"x":17,"y":8,"position":[x,x,1]},

        {"index":77,"x":1,"y":9,"position":[x,x,x,3]},
        {"index":78,"x":3,"y":9,"position":[x,3,x,x,3]},
        {"index":79,"x":9,"y":9,"position":[x,2,3]},
        {"index":80,"x":15,"y":9,"position":[1,3,x]},
        {"index":81,"x":17,"y":9,"position":[x,x,1]},

        {"index":82,"x":1,"y":10,"position":[x,x,x,3]},
        {"index":83,"x":3,"y":10,"position":[x,3,x,x,3]},
        {"index":84,"x":4,"y":10,"position":[x,0,x,x,0]},
        {"index":85,"x":5,"y":10,"position":[x,0,x,x,0]},
        {"index":86,"x":6,"y":10,"position":[x,0,x,x,0]},
        {"index":87,"x":7,"y":10,"position":[x,x,x]},
        {"index":88,"x":8,"y":10,"position":[x,x,x]},
        {"index":89,"x":9,"y":10,"position":[x,2,3]},
        {"index":90,"x":10,"y":10,"position":[x,0,0]},
        {"index":91,"x":11,"y":10,"position":[x,0,0]},
        {"index":92,"x":12,"y":10,"position":[2,0,0]},
        {"index":93,"x":13,"y":10,"position":[2,x,x]},
        {"index":94,"x":14,"y":10,"position":[2,x,x]},
        {"index":95,"x":15,"y":10,"position":[1,x,x]},
        {"index":96,"x":17,"y":10,"position":[x,x,1]},

        {"index":97,"x":1,"y":11,"position":[x,x,x,3]},
        {"index":98,"x":6,"y":11,"position":[x,1,x,x,1]},
        {"index":99,"x":12,"y":11,"position":[3,1,1]},
        {"index":100,"x":17,"y":11,"position":[x,x,1]},

        {"index":101,"x":1,"y":12,"position":[x,x,x,3]},
        {"index":102,"x":2,"y":12,"position":[x,x,x,0]},
        {"index":103,"x":3,"y":12,"position":[x,x,x,0]},
        {"index":104,"x":4,"y":12,"position":[x,x,x,0]},
        {"index":105,"x":5,"y":12,"position":[x,x,x,0]},
        {"index":106,"x":6,"y":12,"position":[x,1,x,0,1]},
        {"index":107,"x":7,"y":12,"position":[x,0,x,0,0]},
        {"index":108,"x":8,"y":12,"position":[x,0,x,0,0]},
        {"index":109,"x":9,"y":12,"position":[2,2,x,0,0]},
        {"index":110,"x":10,"y":12,"position":[2,2,2]},
        {"index":111,"x":11,"y":12,"position":[2,2,2]},
        {"index":112,"x":12,"y":12,"position":[3,1,2]},
        {"index":113,"x":13,"y":12,"position":[x,x,2]},
        {"index":114,"x":14,"y":12,"position":[x,x,2]},
        {"index":115,"x":15,"y":12,"position":[x,x,2]},
        {"index":116,"x":16,"y":12,"position":[x,x,2]},
        {"index":117,"x":17,"y":12,"position":[x,x,1]},

        {"index":118,"x":9,"y":13,"position":[3,3,3,1,1]}
    ]

    var w_=41.5;
    var h_=30;
    var paths_=[];
    var prizes_=[];
    var dashes_=[];
    var pathCol=[0xcb42f4,0xcb42f4,0xcb42f4,0xcb42f4,0xcb42f4];
    var xPositions_=[440,540,640,740,840];
    var path;
    var pos=0;
    var interval=.35;
    var ilights=0;
    var ilights1=[];
    var ilights2=[];
    var cherry_;
    var cherryA_;
    var cherryE_;
    var cherryD_;
    var g;
    var c;
    var b=[];
    var over_=true;
    var go;



    var state_={
        "canPick":false,
        "close":false,
        "collect":false,
        "double":false,
        "baseMult":0,
        "totMult":0,
        "totWinCash":0,
        "totWin":0,
        "baseMult":0,
        "stake":0
    };

    function initClass_(){
        var index=0;
        bonusGroup_= displayManager_.getGroup(bonusName_);

        for (var a in config_.buttons) {
            buttons[a] = new Button(game_,gameClass_,bonusName_,config_.buttons[a],chestClick_,null,null,false);
            chestAnim[a]=config_.buttons[a].anim;
        }
        music_=config_.configuration.bgMusic;
        lastChestTout_=config_.configuration.tOutLastChest;
        chestSounds_=config_.configuration.chestSounds;

        for (var a =0;a<5;a++){
            var btn= new Phaser.Button(game, xPositions_[a], 600, "path"+a, doClickFake_);
            btn.anchor.set(.5,.5);
            btn.onInputOver.add(doOver_, btn);
            btn.onInputOut.add(doOut_, btn);
            btn.path=a;
            bonusGroup_.add(btn);
            b.push(btn);
        }
    }

    function initBonus_(resume){
        var resumeFlag=false;
        picks_=[];
        obj_=[];
        state_.close=false;
        state_.collect=false;
        state_.double=false;

        buildBonusLayout_(resume);

        if (music_!=null && music_!="")soundManager_.mixBgSound(music_, 1000, 1000);

        displayManager_.getText("txtMultBonus").setText("");
        displayManager_.getText("txtDumb").visible=true;
        if(displayManager_.getGroup("buttonFg")!=null)displayManager_.getGroup("buttonFg").visible=false;
        enableBonus_();

        for (var a in displayManager.groups[bonusName_].emitters){
            var anim=epsy_.loadSystem(displayManager[bonusName_].emitters[a][0], 500, 500);
            displayManager.groups[bonusName_].emitters[a][0].texture = game.cache.checkImageKey("particle");
            displayManager_.getGroup("freeSpins").add(anim);
            emitter_.push(anim);
        }
    }

    function backText_(){
        textTw_=TweenMax.to(displayManager_.getText("txtDumb").scale,.5,{x:1,y:1,onComplete:backText2_});
    }

    function backText2_(){
        textTw_=TweenMax.to(displayManager_.getText("txtDumb").scale,.5,{x:1.1,y:1.1,onComplete:backText_});
    }

    function buildBonusLayout_(params){
        var sp;
        paths_=params.paths;
        cherryA_= new Phaser.Sprite( game_,265+ (position_[1].x* w_)   , 115+(position_[1].y* h_), "cherryAnim");
        cherryA_.anchor.set(.5,.5);
        cherryA_.animations.add("anim");
        specialS_=[];
        for (var a in position_){
            if (params.grid[Number(a)]==0 || params.grid[Number(a)]==1) {
                sp = new Phaser.Sprite(game_, 265 + (position_[a].x * w_), 155 + (position_[a].y * h_), "dash");
                sp.special=0;
                sp.tint=0xFFFF00;
            }else if (params.grid[Number(a)]>=5){
                sp = new Phaser.Sprite(game_, 265 + (position_[a].x * w_), 155 + (position_[a].y * h_), "specialDash");
                sp.animations.add("anim");
                sp.special=1;
                specialS_[position_[a].index]=sp;
            }
            sp.anchor.set(.5,.5);
            sp.scale.x=1;
            sp.scale.y=1;
            bonusGroup_.add(sp);
            dashes_[position_[a].index]=sp;

        }
        bonusGroup_.add(cherryA_);
    }

    function enableBonus_(){
        bonusGroup_.alpha=0;
        bonusGroup_.visible=true;
        TweenMax.to(bonusGroup_,.5,{alpha:1});
        setTimeout(startBonus_,500);
    }

    function startBonus_(){
        state_.canPick=true;
        messageBox_.showMessage("game",Translate.do("Select one from the 5 paths on the bottom")+"\r"+Translate.do("the lower the number the lower is the risk"),"\r"+ Translate.do("Special symbols can hide high prize or death"), closePanel_);
    }

    function closePanel_(){
        displayManager_.getText("winValue").setText("");
        textTw_=TweenMax.to(displayManager_.getText("txtDumb").scale,.5,{x:1.1,y:1.1,onComplete:backText_});
        bonusManager_.closePanel();
        over_=true;
    }

    function parse_(json){
        if (json.bonus.totalMult!=null)state_.totMult = json.bonus.totalMult;
        if (json.bonus.totalWin!=null){
            state_.totWinCash = Number(json.bonus.totalWin) / 100;
            state_.totWin= state_.totWinCash/balanceManager_.getCoinValue()*lineManager_.getLinesNumber();
        }

        if (json.stake!=null)state_.stake = Number(json.stake)/100;
        if (json.bonus.state.indexOf("play")>=0)state_.canPick = true;
        if (json.bonus.state.indexOf("collect")>=0)state_.collect = true;
        if (json.bonus.state.indexOf("double")>=0)state_.double_ = true;
        if (state_.canPick== false)state_.close=true;

        for (var a in json.bonus.path){
            prizes_[a]=json.bonus.path[a]
        }
        prizes_.shift();
        state_.totMult=0;
        clearTimeout(ilights);
        colorPath_(path);

        for (var a =0;a<5;a++){
            b[a].x= xPositions_[a];
            if(path== (a)) {
                b[a].scale.x = 1;
                b[a].scale.y = 1;
                b[a].alpha = 1;
            }else{
                b[a].scale.x = .6;
                b[a].scale.y = .6;
                b[a].alpha = .6;
            }
        }
        move_();
    }

    function resetBonus_(){
        for (var a in dashes_){
            bonusGroup_.remove(dashes_[a]);
        }

        if (cherryD_)bonusGroup_.remove(cherryD_);
        cherryD_= null;

        if (cherryA_)bonusGroup_.remove(cherryA_);
        cherryA_= null;

        for (var a =0;a<5;a++){
            b[a].x=xPositions_[a];
            b[a].scale.x=1;
            b[a].scale.y=1;
            b[a].alpha=1;
        }
    }

    function doOver_(){
        if (over_==false)return;
        colorPath_(this.path);
    }

    function doOut_(){
        if (over_==false)return;
        clearTimeout(ilights);
    }

    function doClickFake_(){
        if( state_.canPick==false)return;
        displayManager_.getText("txtDumb").visible=false;
        soundManager_.playSound("select");
        state_.canPick=false;
        path=Number(this.path);
        bonusManager_.sendRequest(path+1);
        over_=false;
        clearTimeout(ilights);
        pos=0;
        prizes_=[];
    }

    function move_(txt_){
        if (txt_!=null){
            if (txt_.win==1) {
                displayManager_.getText("txtMultBonus").setText("x"+state_.totMult);
                TweenMax.to(txt_, .3, {alpha: 1, y: txt_.y - 20, onComplete: fade_, onCompleteParams: [txt_]});
                TweenMax.to(txt_.scale, .7, {x: 1.5, y: 1.5, onComplete: destroy_, onCompleteParams: [txt_]});
                if(dashes_[paths_[path][pos]]!=undefined)dashes_[paths_[path][pos]].visible = false;
            }else if (txt_.win>1) {
                txt_.win=1;
                cherryD_= new Phaser.Sprite(game_, cherryA_.x,cherryA_.y, "cherryWin");
                cherryD_.anchor.set(.5,.5);
                cherryD_.animations.add("anim");
                cherryD_.animations.play("anim", 24, false,true,goBackToAnim_, txt_);//todo parametric loop
                cherryD_.scale.x=cherryA_.scale.x;
                cherryD_.scale.y=cherryA_.scale.y;
                cherryD_.angle=cherryA_.angle;
                bonusGroup_.add(cherryD_);
                cherryA_.visible=false;
                return;
            }else{
                txt_.alpha=1;
                txt_.animations.play("anim", 24, false,true,endExplosion_, null);
                txt_.visible=true;
                soundManager_.playSound("die");
                cherryD_= new Phaser.Sprite(game_, cherryA_.x,cherryA_.y, "cherryDeath");
                cherryD_.anchor.set(.5,.5);
                cherryD_.animations.add("anim");
                cherryD_.scale.x=cherryA_.scale.x;
                cherryD_.scale.y=cherryA_.scale.y;
                cherryD_.angle=cherryA_.angle;
                cherryD_.visible=false;
                bonusGroup_.add(cherryD_);
                return;
            }
        }else{
            dashes_[paths_[path][pos]].visible = false;
        }
        if (pos< paths_[path].length){
            if (pos>=0){
                var txt;
                if (prizes_[pos]==1) {
                    soundManager_.playSound("x1");
                    txt = new Phaser.BitmapText(game, 265 + (position_[paths_[path][pos]].x * w_), 155 + (position_[paths_[path][pos]].y * h_), "multiBmpFont", '', 35, "center");
                    txt.anchor.set(.5, .5);
                    txt.alpha = 0;
                    txt.scale.x = .2;
                    txt.scale.y = .2;
                    state_.totMult += Number(prizes_[pos]);
                    txt.win=prizes_[pos];
                    txt.setText("x" + prizes_[pos]);
                }else if(prizes_[pos]>1) {
                    soundManager_.playSound("x1");
                    if (prizes_[pos]<20)
                        soundManager_.playSound("x5");
                    else
                        soundManager_.playSound("xBig");

                    txt = new Phaser.BitmapText(game, 265 + (position_[paths_[path][pos]].x * w_), 155 + (position_[paths_[path][pos]].y * h_), "multiBmpFont", '', 45, "center");
                    txt.anchor.set(.5, .5);
                    txt.alpha = 0;
                    txt.scale.x = .2;
                    txt.scale.y = .2;
                    txt.tint="0xFF2200"
                    state_.totMult += Number(prizes_[pos]);
                    txt.win=prizes_[pos];
                    txt.setText("x" +txt.win);
                }else {
                    soundManager_.playSound("x1");
                    txt= new Phaser.Sprite( game_, 265 + (position_[paths_[path][pos]].x * w_), 155 + (position_[paths_[path][pos]].y * h_), "cherryExplode");
                    txt.anchor.set(.5,.5);
                    txt.scale.x =1;
                    txt.scale.y = 1;
                    txt.alpha = 0;
                    txt.animations.add("anim");
                    txt.win=0;
                }
                bonusGroup_.add(txt);
            }
            cherryA_.animations.play("anim", 20, true, false, null, null);//todo parametric loop
            //console.log(path+ " " + position_[paths_[path][pos]].position[(path)] +" move on " + paths_[path][pos] + " "+position_[paths_[path][pos]].index +" "+position_[paths_[path][pos]].position[(path)]+ " "+position_[paths_[path][pos]].position)
            scaleManager_( rotation_[path][pos],cherryA_);
            TweenMax.to(cherryA_,interval,{x:265+ (position_[paths_[path][pos]].x*w_) ,y:152+(position_[paths_[path][pos]].y*h_),onComplete:move_,onCompleteParams:[txt]})
            pos++;
        }else{
            soundManager_.playSound("end");
            cherryA_.animations.stop();
            cherryD_= new Phaser.Sprite( game_, cherryA_.x,cherryA_.y, "cherryWin");
            cherryD_.anchor.set(.5,.5);
            cherryD_.scale.x=cherryA_.scale.x;
            cherryD_.scale.y=cherryA_.scale.y;
            cherryD_.angle=cherryA_.angle;
            cherryD_.animations.add("anim");
            cherryD_.animations.play("anim", 24, false,false, clearBonus_, null);
            cherryA_.visible=false;
            bonusGroup_.add(cherryD_);
        }
    }

    function scaleManager_(position,obj){
        if (position==0){
            obj.scale.x=1;
            obj.scale.y=1;
            obj.angle=0;
        } else if (position==1){
            obj.scale.x=1;
            obj.scale.y=1;
            obj.angle=90;
        } else if (position==2){
            obj.scale.x=-1;
            obj.scale.y=1;
            obj.angle=0;
        } else if (position==3){
            obj.scale.x=-1;
            obj.scale.y=1;
            obj.angle=270;
        } else if (position==4){
            obj.scale.x=-1;
            obj.scale.y=1;
            obj.angle=90;
        }

    }

    function goBackToAnim_(txt){
        cherryA_.visible=true;
        move_(txt);
    }

    function endExplosion_(){
        cherryA_.animations.stop();
        cherryA_.visible=false;
        cherryD_.visible=true;
        cherryD_.animations.play("anim", 24, false, false, null, null);//todo parametric loop
        setTimeout(gameOver_,1000)
    }

    function gameOver_(){
        go= new Phaser.Sprite( game_, 640,360, "gameOver");
        go.anchor.set(.5,.5);
        bonusGroup_.add(go);
        go.visible=true;
        setTimeout(gameOverFade_,2000)
    }

    function gameOverFade_(){
        TweenMax.to(go,1.5,{alpha:0,y:go.y-20});
        clearBonus_();
    }

    function fade_(t){
        TweenMax.to(t,1.5,{alpha:0,y:t.y-20})
    }

    function destroy_(t){
        t.visible=false;
        bonusGroup_.remove(t);
        t=null;
    }

    function colorPath_(path){
        clearTimeout(ilights);
        for (var a in ilights1)clearTimeout(ilights1[a]);
        //for (var a in ilights2)clearTimeout(ilights2[a]);
        for (var a in specialS_){
            specialS_[a].animations.stop();
            specialS_[a].animations.frame=0;
        }
        colorSeq_(path,pathCol[path]);
    }

    function colorSeq_(i,col){
        ilights1=[];
        ilights2=[];

        for (var a in paths_[i]){
            if(dashes_[paths_[i][a]]!=undefined) {
                ilights1.push(setTimeout(changeColor, 0, dashes_[paths_[i][a]], col));
            }else{

            }
        }

        for (var a in paths_[i]){
            ilights2.push(setTimeout(changeColor,250 ,dashes_[paths_[i][a]],0xFFFF00));
        }
        ilights=setTimeout(colorPath_,500,i);
    }

    function changeColor(obj,col){
        if (obj.special==0) {
            obj.tint = col;
        }else{
            obj.animations.play("anim", 24, false,false,null, null);
        }
    }

    function blink_(){
        for (var a =0;a<5;a++) {
            setTimeout(colorPath_,a*2500,a,pathCol[a]);
        }
    }


    function clearBonus_(chest){
        bonusManager_.closeBonus(bonusName_,state_);
        soundManager_.playSound("winPanel");
        soundManager_.mixBgSound("bgSlot", 1000, 1000);
        for (var a in emitter_) {
            displayManager_.getGroup("freeSpins").remove(emitter_[a]);
            emitter_[a].destroy();
            emitter_[a]=null;
        }
        emitter_=[];
    }

    function hideBonus_(){
        bonusGroup_.visible=false;
        if(displayManager_.getGroup("buttonFg")!=null)displayManager_.getGroup("buttonFg").visible=true;
        if (textTw_!=null)textTw_.kill();
        textTw_=null;
        resetBonus_();
        if (freeRoundsManager_.getIsInFr()==true){
            TweenMax.to(displayManager_.getGroup("freeRounds"), .3, {y: 0, ease: Bounce.easeOut});
        }else {
            TweenMax.to(displayManager_.getGroup("logo"), .3, {y: 0, ease: Bounce.easeOut});
        }
        for (var a in obj_){
            obj_[a].destroy();
        }
    }

    var me={
        initBonus:initBonus_,
        hideBonus:hideBonus_,
        parse:parse_,
        getState:function(){
            return state_;
        }
    }
    initClass_();
    return me;
}