/**
 * KiS Framework, Created by Fabry on 02/03/2016.....
 */
function DisplayManager(gameRef) {
    var game_ = gameRef;
    var gameGroups_ = [];
    var videos_=[];
    var gameText_ = [];
    var gameButtons_=[];
    var initialOrder_;
    var addGc_=0;

    function initClass_  () {
        for (var a in displayManager.groups) {
            if (displayManager.groups[a].parent!=null){
                var g=addGroup();
                g.y=displayManager.groups[a].y;
                g.x=displayManager.groups[a].x;
                gameGroups_[a] = getGroup_(displayManager.groups[a].parent).add_Child(g);
            }else {
                gameGroups_[a] =addGroup();
            }
            if (displayManager.groups[a].graphAsset != null) {

                gameGroups_[a].eventBlock=(displayManager.groups[a].eventBlock!=null)?displayManager.groups[a].eventBlock:false;
                for (var ga in displayManager.groups[a].graphAsset) {
                    gameGroups_[a][ga] =addGroup();
                    gameGroups_[a][ga].json=displayManager.groups[a].graphAsset[ga];
                    if (ga!="group") {//group is just a placeholder
                        if (displayManager.groups[a].graphAsset[ga].type!=undefined && displayManager.groups[a].graphAsset[ga].type=="spine") {
                            var sp= spriteManager_.addSpine(displayManager.groups[a].graphAsset[ga].x, displayManager.groups[a].graphAsset[ga].y,  displayManager.groups[a].graphAsset[ga].name, displayManager.groups[a].graphAsset[ga].animation);
                        }else{
                            var sp = spriteManager_.addSprite(displayManager.groups[a].graphAsset[ga].x, displayManager.groups[a].graphAsset[ga].y, displayManager.groups[a].graphAsset[ga].name);
                        }
                        if (displayManager.groups[a].graphAsset[ga].width != null) sp.width = displayManager.groups[a].graphAsset[ga].width;
                        if (displayManager.groups[a].graphAsset[ga].height != null) sp.height = displayManager.groups[a].graphAsset[ga].height;
                        if (displayManager.groups[a].graphAsset[ga].angle != null) sp.angle = displayManager.groups[a].graphAsset[ga].angle;
                        if (displayManager.groups[a].graphAsset[ga].scaleX != null) sp.scale.x = displayManager.groups[a].graphAsset[ga].scaleX;
                        if (displayManager.groups[a].graphAsset[ga].scaleY != null) sp.scale.y = displayManager.groups[a].graphAsset[ga].scaleY;
                        sp.setAnchor((displayManager.groups[a].graphAsset[ga].anchorX != undefined) ? displayManager.groups[a].graphAsset[ga].anchorX : 0, (displayManager.groups[a].graphAsset[ga].anchorY != undefined) ? displayManager.groups[a].graphAsset[ga].anchorY : 0);

                        sp.defX=displayManager.groups[a].graphAsset[ga].x;
                        sp.defY=displayManager.groups[a].graphAsset[ga].y
                        gameGroups_[a].add_Child(gameGroups_[a][ga]);
                        gameGroups_[a][ga].add_Child(sp);
                        gameGroups_[a].visible = (displayManager.groups[a].visible != null) ? displayManager.groups[a].visible : true;
                        if (displayManager.groups[a].graphAsset[ga].visible != null) sp.visible = displayManager.groups[a].graphAsset[ga].visible;
                        if (displayManager.groups[a].graphAsset[ga].alpha != null) sp.alpha = displayManager.groups[a].graphAsset[ga].alpha;

                        if (displayManager.groups[a].graphAsset[ga].texts != undefined){
                            for (var t in displayManager.groups[a].graphAsset[ga].texts ) {
                                var txt = null;
                                if (displayManager.groups[a].graphAsset[ga].texts[t].font != null) {
                                    txt =  spriteManager_.addText(displayManager.groups[a].graphAsset[ga].texts[t].x, displayManager.groups[a].graphAsset[ga].texts[t].y, '',displayManager.groups[a].graphAsset[ga].texts[t].anchorX,displayManager.groups[a].graphAsset[ga].texts[t].anchorY, {
                                        fontFamily: (displayManager.groups[a].graphAsset[ga].texts[t].font!=null)?displayManager.groups[a].graphAsset[ga].texts[t].font:displayManager.groups[a].graphAsset[ga].texts[t].style.fontFamily,
                                        fontSize:(displayManager.groups[a].graphAsset[ga].texts[t].fontSize!=null)?displayManager.groups[a].graphAsset[ga].texts[t].fontSize:displayManager.groups[a].graphAsset[ga].texts[t].style.fontSize,
                                        fill: displayManager.groups[a].graphAsset[ga].texts[t].fill,
                                        align: displayManager.groups[a].graphAsset[ga].texts[t].align,
                                        fontWeight: (displayManager.groups[a].graphAsset[ga].texts[t].weight == null) ? 'normal' : displayManager.groups[a].graphAsset[ga].texts[t].weight,
                                        fontVariant: (displayManager.groups[a].graphAsset[ga].texts[t].variant == null) ? 'normal' : displayManager.groups[a].graphAsset[ga].texts[t].variant,
                                        backgroundColor: displayManager.groups[a].graphAsset[ga].texts[t].backgroundColor
                                    });
                                    if(displayManager.groups[a].graphAsset[ga].texts[t].style!=null){
                                        txt.style=displayManager.groups[a].graphAsset[ga].texts[t].style
                                    }
                                } else if (displayManager.groups[a].graphAsset[ga].texts[t].bmpFont != null) {
                                    logger(t + " disp manager BMP font " + displayManager.groups[a].graphAsset[ga].texts[t].bmpFont);
                                    txt = spriteManager_.addBMPText(displayManager.groups[a].graphAsset[ga].texts[t].x, displayManager.groups[a].graphAsset[ga].texts[t].y, displayManager.groups[a].graphAsset[ga].texts[t].bmpFont, '', displayManager.groups[a].graphAsset[ga].texts[t].size, displayManager.groups[a].graphAsset[ga].texts[t].align);
                                }
                                if (txt != null) {
                                    txt.defX=displayManager.groups[a].graphAsset[ga].texts[t].x;
                                    txt.defY=displayManager.groups[a].graphAsset[ga].texts[t].y;
                                    if (window.devicePixelRatio != null) txt.resolution = window.devicePixelRatio;

                                    txt.setAnchor((displayManager.groups[a].graphAsset[ga].texts[t].anchorX != undefined) ? displayManager.groups[a].graphAsset[ga].texts[t].anchorX : 0, (displayManager.groups[a].graphAsset[ga].texts[t].anchorY != undefined) ? displayManager.groups[a].graphAsset[ga].texts[t].anchorY : 0);
                                    if (displayManager.groups[a].graphAsset[ga].texts[t].text != undefined) txt.setText(Translate.do(displayManager.groups[a].graphAsset[ga].texts[t].text));

                                    if (displayManager.groups[a].graphAsset[ga].texts[t]["shadow"] != undefined && displayManager.groups[a].graphAsset[ga].texts[t]["shadow"] == true) {
                                        var shadowDim = jQuery.isArray(displayManager.groups[a].graphAsset[ga].texts[t]["shadowDim"]) ? displayManager.groups[a].graphAsset[ga].texts[t]["shadowDim"] : [displayManager.groups[a].graphAsset[ga].texts[t]["shadowDim"], displayManager.groups[a].graphAsset[ga].texts[t]["shadowDim"]];
                                        txt.setShadow(shadowDim[0], shadowDim[1], displayManager.groups[a].graphAsset[ga].texts[t]["shadow"]["shadowColor"], displayManager.groups[a].graphAsset[ga].texts[t]["shadowBlur"]);
                                    }

                                    if (displayManager.groups[a].graphAsset[ga].texts[t]["stroke"] != undefined) {
                                        txt.stroke = displayManager.groups[a].graphAsset[ga].texts[t]["stroke"];
                                        txt.strokeThickness = displayManager.groups[a].graphAsset[ga].texts[t]["stroke_tick"];
                                    }

                                    if (displayManager.groups[a].graphAsset[ga].texts[t].visible!=undefined){
                                        txt.visible=displayManager.groups[a].graphAsset[ga].texts[t].visible;
                                    }

                                    var mod=Translate.langModifier(ga,t,displayManager.groups[a].graphAsset[ga].texts[t].text)
                                    if (mod!=null){
                                        if (mod.font!=null)txt.style.fontSize=mod.font;
                                        if (mod.x!=null)txt.x=txt.x +mod.x;
                                        if (mod.y!=null)txt.y=txt.y +mod.y;
                                    }
                                    if (phaserVer_==3){
                                        gameGroups_[a][ga].add_Child(txt);
                                    }else{
                                        sp.addChild(txt);
                                    }
                                    gameText_[t] = txt;
                                }
                            }
                        }
                    }else{
                        gameGroups_[a].add_Child(gameGroups_[a][ga]);
                    }
                }
                if (displayManager.groups[a].fakeButton==true){
                    if (a=="fsWonPanel" || a=="fsWinPanel"){
                        var bgButton = new PixiButton(game_ ,0, 0,"none", doClickButtonStartFS_);
                        bgButton.function_=displayManager.groups[a].evt;
                        bgButton.width =2920;
                        bgButton.height =3080;
                        bgButton.setAnchor(0,0);
                        gameGroups_[a].add_Child(bgButton);
                    }else{
                        // var bgButton = new Phaser_Button(game_,null, 0, 0);
                        // bgButton.width =1920;
                        // bgButton.height =1080;
                        // gameGroups_[a].add_Child(bgButton);
                    }
                }
            }
            if (displayManager.groups[a].animAsset != null) {
                for (var ga in displayManager.groups[a].animAsset) {
                    gameGroups_[a][ga] =addGroup();
                    if (displayManager.groups[a].animAsset[ga].type==undefined || displayManager.groups[a].animAsset[ga].type=="spine"){
                        var sp =spriteManager_.addSpine(displayManager.groups[a].animAsset[ga].x, displayManager.groups[a].animAsset[ga].y, displayManager.groups[a].animAsset[ga].name,null,null,1);
                        if (displayManager.groups[a].animAsset[ga].width != null)sp.width = displayManager.groups[a].animAsset[ga].width;
                        if (displayManager.groups[a].animAsset[ga].height != null)sp.height = displayManager.groups[a].animAsset[ga].height;
                        if (displayManager.groups[a].animAsset[ga].angle != null)sp.angle = displayManager.groups[a].animAsset[ga].angle;
                        if (displayManager.groups[a].animAsset[ga].scaleX != null) sp.scale.x = displayManager.groups[a].animAsset[ga].scaleX;
                        if (displayManager.groups[a].animAsset[ga].scaleY != null) sp.scale.y = displayManager.groups[a].animAsset[ga].scaleY;
                        if (displayManager.groups[a].animAsset[ga].visible != null) sp.visible = displayManager.groups[a].animAsset[ga].visible;
                        sp.setOrigin(displayManager.groups[a].animAsset[ga].anchorX ,displayManager.groups[a].animAsset[ga].anchorY)

                        gameGroups_[a].add_Child(gameGroups_[a][ga]);
                        gameGroups_[a][ga].add_Child(sp);

                        if (displayManager.groups[a].animAsset[ga].autoplay==undefined || displayManager.groups[a].animAsset[ga].autoplay==true && displayManager.groups[a].animAsset[ga].key!=undefined){
                            sp.play(displayManager.groups[a].animAsset[ga].key, true);
                        }

                    }else {
                        var sp = spriteManager_.addSprite(displayManager.groups[a].animAsset[ga].x, displayManager.groups[a].animAsset[ga].y, displayManager.groups[a].animAsset[ga].name);
                        animationManager_.create(sp, displayManager.groups[a].animAsset[ga].name, displayManager.groups[a].animAsset[ga].frames);

                        if (displayManager.groups[a].animAsset[ga].width != null) sp.width = displayManager.groups[a].animAsset[ga].width;
                        if (displayManager.groups[a].animAsset[ga].height != null) sp.height = displayManager.groups[a].animAsset[ga].height;
                        if (displayManager.groups[a].animAsset[ga].angle != null) sp.angle = displayManager.groups[a].animAsset[ga].angle;
                        if (displayManager.groups[a].animAsset[ga].scaleX != null) sp.scale.x = displayManager.groups[a].animAsset[ga].scaleX;
                        if (displayManager.groups[a].animAsset[ga].scaleY != null) sp.scale.y = displayManager.groups[a].animAsset[ga].scaleY;
                        if (displayManager.groups[a].animAsset[ga].visible != null) sp.visible = displayManager.groups[a].animAsset[ga].visible;
                        sp.setAnchor(displayManager.groups[a].animAsset[ga].anchorX, displayManager.groups[a].animAsset[ga].anchorY)

                        gameGroups_[a].add_Child(gameGroups_[a][ga]);
                        gameGroups_[a][ga].add_Child(sp);

                        if (displayManager.groups[a].animAsset[ga].autoplay == undefined || displayManager.groups[a].animAsset[ga].autoplay == true && displayManager.groups[a].animAsset[ga].key != undefined) {
                            sp.play(displayManager.groups[a].animAsset[ga].key, true);
                        }
                    }
                    gameGroups_[a].visible=(displayManager.groups[a].visible!=null)?displayManager.groups[a].visible:true;
                    if (displayManager.groups[a].animAsset[ga].texts != undefined){
                            for (var t in displayManager.groups[a].animAsset[ga].texts ) {
                                var txt = null;
                                if (displayManager.groups[a].animAsset[ga].texts[t].font != null) {
                                    txt =  spriteManager_.addText(displayManager.groups[a].animAsset[ga].texts[t].x, displayManager.groups[a].animAsset[ga].texts[t].y, '',displayManager.groups[a].animAsset[ga].texts[t].anchorX,displayManager.groups[a].animAsset[ga].texts[t].anchorY, {
                                        fontFamily: (displayManager.groups[a].animAsset[ga].texts[t].font!=null)?displayManager.groups[a].animAsset[ga].texts[t].font:displayManager.groups[a].animAsset[ga].texts[t].style.fontFamily,
                                        fontSize:(displayManager.groups[a].animAsset[ga].texts[t].fontSize!=null)?displayManager.groups[a].animAsset[ga].texts[t].fontSize:displayManager.groups[a].animAsset[ga].texts[t].style.fontSize,
                                        fill: displayManager.groups[a].animAsset[ga].texts[t].fill,
                                        align: displayManager.groups[a].animAsset[ga].texts[t].align,
                                        fontWeight: (displayManager.groups[a].animAsset[ga].texts[t].weight == null) ? 'normal' : displayManager.groups[a].animAsset[ga].texts[t].weight,
                                        fontVariant: (displayManager.groups[a].animAsset[ga].texts[t].variant == null) ? 'normal' : displayManager.groups[a].animAsset[ga].texts[t].variant,
                                        backgroundColor: displayManager.groups[a].animAsset[ga].texts[t].backgroundColor
                                    });
                                    if(displayManager.groups[a].animAsset[ga].texts[t].style!=null){
                                        txt.style=displayManager.groups[a].animAsset[ga].texts[t].style
                                    }
                                } else if (displayManager.groups[a].animAsset[ga].texts[t].bmpFont != null) {
                                    logger(t + " disp manager BMP font " + displayManager.groups[a].animAsset[ga].texts[t].bmpFont);
                                    txt = spriteManager_.addBMPText(displayManager.groups[a].animAsset[ga].texts[t].x, displayManager.groups[a].animAsset[ga].texts[t].y, displayManager.groups[a].animAsset[ga].texts[t].bmpFont, '', displayManager.groups[a].animAsset[ga].texts[t].size, displayManager.groups[a].animAsset[ga].texts[t].align);
                                }
                                if (txt != null) {
                                    txt.defX=displayManager.groups[a].animAsset[ga].texts[t].x;
                                    txt.defY=displayManager.groups[a].animAsset[ga].texts[t].y;
                                    if (window.devicePixelRatio != null) txt.resolution = window.devicePixelRatio;

                                    txt.setAnchor((displayManager.groups[a].animAsset[ga].texts[t].anchorX != undefined) ? displayManager.groups[a].animAsset[ga].texts[t].anchorX : 0, (displayManager.groups[a].animAsset[ga].texts[t].anchorY != undefined) ? displayManager.groups[a].animAsset[ga].texts[t].anchorY : 0);
                                    if (displayManager.groups[a].animAsset[ga].texts[t].text != undefined) txt.setText(Translate.do(displayManager.groups[a].animAsset[ga].texts[t].text));

                                    if (displayManager.groups[a].animAsset[ga].texts[t]["shadow"] != undefined && displayManager.groups[a].animAsset[ga].texts[t]["shadow"] == true) {
                                        var shadowDim = jQuery.isArray(displayManager.groups[a].animAsset[ga].texts[t]["shadowDim"]) ? displayManager.groups[a].animAsset[ga].texts[t]["shadowDim"] : [displayManager.groups[a].animAsset[ga].texts[t]["shadowDim"], displayManager.groups[a].animAsset[ga].texts[t]["shadowDim"]];
                                        txt.setShadow(shadowDim[0], shadowDim[1], displayManager.groups[a].animAsset[ga].texts[t]["shadow"]["shadowColor"], displayManager.groups[a].animAsset[ga].texts[t]["shadowBlur"]);
                                    }

                                    if (displayManager.groups[a].animAsset[ga].texts[t]["stroke"] != undefined) {
                                        txt.stroke = displayManager.groups[a].animAsset[ga].texts[t]["stroke"];
                                        txt.strokeThickness = displayManager.groups[a].animAsset[ga].texts[t]["stroke_tick"];
                                    }

                                    if (displayManager.groups[a].animAsset[ga].texts[t].visible!=undefined){
                                        txt.visible=displayManager.groups[a].animAsset[ga].texts[t].visible;
                                    }

                                    var mod=Translate.langModifier(ga,t,displayManager.groups[a].animAsset[ga].texts[t].text)
                                    if (mod!=null){
                                        if (mod.font!=null)txt.style.fontSize=mod.font;
                                        if (mod.x!=null)txt.x=txt.x +mod.x;
                                        if (mod.y!=null)txt.y=txt.y +mod.y;
                                    }
                                    if (phaserVer_==3){
                                        gameGroups_[a][ga].add_Child(txt);
                                    }else{
                                        sp.addChild(txt);
                                    }
                                    gameText_[t] = txt;
                                }
                            }
                        }
                }
            }
            var ua = window.navigator.userAgent;
            if (displayManager.groups[a].videoAsset != null && ua.indexOf('iPhone') == -1) {
                for (var ga in displayManager.groups[a].videoAsset) {
                    gameGroups_[a][ga] =addGroup();
                    // var video =game_.add.video( displayManager.groups[a].videoAsset[ga].name);
                    // var sprite = video.addToWorld(400, 300, 0.5, 0.5);

                    //
                    var sp = new Phaser.Video(game_, displayManager.groups[a].videoAsset[ga].name);

                    var sprite = sp.addToWorld(displayManager.groups[a].videoAsset[ga].x, displayManager.groups[a].videoAsset[ga].y, 0.5, 0.5);
                    if (displayManager.groups[a].videoAsset[ga].width != null)sprite.width = displayManager.groups[a].videoAsset[ga].width;
                    if (displayManager.groups[a].videoAsset[ga].height != null)sprite.height = displayManager.groups[a].videoAsset[ga].height;
                    if (displayManager.groups[a].videoAsset[ga].angle != null)sprite.angle = displayManager.groups[a].videoAsset[ga].angle;
                    gameGroups_[a].add_Child(gameGroups_[a][ga]);
                    gameGroups_[a][ga].add_Child(sprite);
                    videos_[displayManager.groups[a].videoAsset[ga].name]=sp;
                    // gameGroups_[a].visible=(displayManager.groups[a].visible!=null)?displayManager.groups[a].visible:true;
                }
            }
            if (displayManager.groups[a].texts != null) {
                for (var t in displayManager.groups[a].texts) {
                    var txt=null;
                    if ( displayManager.groups[a].texts[t].font!=null) {
                        var offset=0;
                        if(loginVars.getRegParams().jurisdiction=="uk" && gameParams.clientName=="theHub_malta_playtech" && ReelConfig.newUI!=true) {//just old UI, new up to Joe. if playtech on the hu, they need the UK GC logo
                            if (a == "status" && (t == "creditLabel" || t == "creditValue")) {//for playtech integration only to show gambling commission button on the old UI
                                offset = 100;
                                if (addGc_ == 0) {
                                    addGc_ = 1;
                                }
                            }
                            if (addGc_ == 1) {
                                addGc_ = 2;
                                var sp =spriteManager_.addSprite(10, displayManager.groups[a].texts[t].y , "gc");
                                sp.scale.x = 1;
                                sp.scale.y = 1;
                                sp.visible = true;
                                sp.inputEnabled = true;
                                sp.events.onInputDown.add_Child(listener, this);
                                gameGroups_[a].add_Child(sp);
                            }
                        }
                        logger(t + " disp manager font " +displayManager.groups[a].texts[t].font );
                        txt =  spriteManager_.addText(displayManager.groups[a].texts[t].x+offset, displayManager.groups[a].texts[t].y, '' ,displayManager.groups[a].texts[t].anchorX , displayManager.groups[a].texts[t].anchorY, {
                            fontFamily: displayManager.groups[a].texts[t].font,
                            fontSize: displayManager.groups[a].texts[t].fontSize,
                            fill: displayManager.groups[a].texts[t].fill,
                            align: displayManager.groups[a].texts[t].align,
                            fontWeight:(displayManager.groups[a].texts[t].weight==null)?'normal':displayManager.groups[a].texts[t].weight,
                            fontVariant:(displayManager.groups[a].texts[t].variant==null)?'normal':displayManager.groups[a].texts[t].variant,
                            backgroundColor:displayManager.groups[a].texts[t].backgroundColor
                        });

                        if(displayManager.groups[a].texts[t].style!=null){
                            txt.style=displayManager.groups[a].texts[t].style
                        }
                    }else if ( displayManager.groups[a].texts[t].bmpFont!=null) {
                        logger(t + " disp manager BMP font " +displayManager.groups[a].texts[t].bmpFont );
                        txt = spriteManager_.addBMPText(displayManager.groups[a].texts[t].x, displayManager.groups[a].texts[t].y,displayManager.groups[a].texts[t].bmpFont,'' ,displayManager.groups[a].texts[t].size, displayManager.groups[a].texts[t].align );
                    }
                    if (txt!=null) {
                        if (window.devicePixelRatio != null)txt.resolution = window.devicePixelRatio;
                        txt.defX=displayManager.groups[a].texts[t].x;
                        txt.defY=displayManager.groups[a].texts[t].y;
                        txt.setAnchor((displayManager.groups[a].texts[t].anchorX != undefined) ? displayManager.groups[a].texts[t].anchorX : 0, (displayManager.groups[a].texts[t].anchorY != undefined) ? displayManager.groups[a].texts[t].anchorY : 0);
                        if (displayManager.groups[a].texts[t].text != undefined)txt.setText(Translate.do(displayManager.groups[a].texts[t].text));

                        if (displayManager.groups[a].texts[t]["shadow"] != undefined && displayManager.groups[a].texts[t]["shadow"] == true) {
                            var shadowDim = jQuery.isArray(displayManager.groups[a].texts[t]["shadowDim"]) ? displayManager.groups[a].texts[t]["shadowDim"] : [displayManager.groups[a].texts[t]["shadowDim"], displayManager.groups[a].texts[t]["shadowDim"]];
                            txt.setShadow(shadowDim[0], shadowDim[1], displayManager.groups[a].texts[t]["shadow"]["shadowColor"], displayManager.groups[a].texts[t]["shadowBlur"]);
                        }

                        if (displayManager.groups[a].texts[t]["stroke"] != undefined) {
                            txt.stroke = displayManager.groups[a].texts[t]["stroke"];
                            txt.strokeThickness = displayManager.groups[a].texts[t]["stroke_tick"];
                        }

                        if (displayManager.groups[a].texts[t].visible!=undefined){
                            txt.visible=displayManager.groups[a].texts[t].visible;
                        }

                        var mod=Translate.langModifier(a,t,displayManager.groups[a].texts[t].text)
                        if (mod!=null){
                            if (mod.font!=null)txt.style.fontSize=mod.font ;
                            if (mod.x!=null)txt.x=txt.x +mod.x;
                            if (mod.y!=null)txt.y=txt.y +mod.y;
                        }

                        gameGroups_[a].add_Child(txt);
                        gameText_[t] = txt;
                    }
                }
            }
            if (displayManager.groups[a].mainButtons != null) {
                for (var b in displayManager.groups[a].mainButtons) {
                    var buttonE =  new Phaser_Button(game,displayManager.groups[a].mainButtons[b].name, displayManager.groups[a].mainButtons[b].x, displayManager.groups[a].mainButtons[b].y, 1,2,0 ,null,null,doClickButton_);
                    buttonE.function_=displayManager.groups[a].mainButtons[b].evt;
                    gameButtons_[b] = buttonE;
                    gameGroups_[a].add_Child(buttonE);
                    if (displayManager.groups[a].mainButtons[b].texts != null) {
                        for (var t in displayManager.groups[a].mainButtons[b].texts) {
                            var txt =spriteManager_.addText(displayManager.groups[a].mainButtons[b].x+ displayManager.groups[a].mainButtons[b].texts[t].x,displayManager.groups[a].mainButtons[b].y+ displayManager.groups[a].mainButtons[b].texts[t].y, Translate.do(displayManager.groups[a].mainButtons[b].texts[t].text),displayManager.groups[a].mainButtons[b].texts[t].anchorX,displayManager.groups[a].mainButtons[b].texts[t].anchorY, {
                                fontFamily: displayManager.groups[a].mainButtons[b].texts[t].font,
                                fontSize: displayManager.groups[a].mainButtons[b].texts[t].fontSize,
                                fill: displayManager.groups[a].mainButtons[b].texts[t].fill,
                                boundsAlignH: displayManager.groups[a].mainButtons[b].texts[t].align,
                                fontWeight:(displayManager.groups[a].mainButtons[b].texts[t].weight==null)?'normal':displayManager.groups[a].mainButtons[b].texts[t].weight
                            });
                            if (displayManager.groups[a].mainButtons[b].texts[t].text != undefined)txt.setText(Translate.do(displayManager.groups[a].mainButtons[b].texts[t].text));
                            buttonE.add_Child(txt);
                            gameText_[t] = txt;
                        }
                    }

                    if(displayManager.groups[a].mainButtons[b].evtOver){
                        buttonE.functionOver_=displayManager.groups[a].mainButtons[b].evtOver;
                        buttonE.onInputOver.add_Child(over_, this);
                    }
                    if(displayManager.groups[a].mainButtons[b].evtOut){
                        buttonE.functionOut_=displayManager.groups[a].mainButtons[b].evtOut;
                        buttonE.onInputOver.add_Child(out_, this);
                    }
                }
            }
        }
        initialOrder_ = gameGroups_;
    }

    function listener(){
        window.open(gameParams.ukGCLink,"_blank")

        //top.location.href=gameParams.ukGCLink;
    }

    function doClickButtonStartFS_(evt){
        gameClass_.getEventManager()[evt.function_]();
    }

    function doClickButton_(evt){
        gameClass_[evt.function_]();
    }

    function over_(evt){
        gameClass_[evt.functionOver_](evt);
    }

    function out_(evt){
        gameClass_[evt.functionOut_](evt);
    }

    function start_(){

    }

    function getGroup_  (name) {
        return gameGroups_[name];
    }

    function getButton_(name){
        return gameButtons_[name];
    }

    function getText_  (name) {
        return gameText_[name];
    }

    function getTexts_  () {
        return gameText_;
    }

    function timedMessage_  ( msg, tOut, s) {
        framework.updateSmallMessageText(msg);
        setTimeout(resetMsg_, tOut, s);
    }

    function resetMsg_ (s) {
        framework.updateSmallMessageText(s);
    }

    function getEventBlockWindOn_(){
        for (var a in gameGroups_){
            if (gameGroups_[a].eventBlock!=null ) {
                if (gameGroups_[a].eventBlock == true && (gameGroups_[a].visible == true && gameGroups_[a].y>=0)) {
                    return true;
                }
            }
        }
        return false;
    }

    function getVideo_(name){
        return videos_[name];
    }

    var me = {
        getVideo:getVideo_,
        getGroup: getGroup_,
        getText: getText_,
        getTexts: getTexts_,
        timedMessage: timedMessage_,
        getEventBlockWindOn:getEventBlockWindOn_,
        getButton:getButton_
    }

    initClass_();
    return me;

}
