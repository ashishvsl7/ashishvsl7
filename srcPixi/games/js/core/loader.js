/**
 * KiS Framework, Created by Fabry on 28/07/2016.
 */
function Loader(gameRef){
    var game_=gameRef;
    var mainGroup_;
    var loaderGroup_;
    var logoGroup_;
    var mainGroup_;
    var compatibilityGroup_;
    var lGroupObjs_=[];
    var lockStartGame_=true;
    var text_=[];
    var snd_;
    var compatibility_=true;
    var failed_=[];
    var spineAssets_=[];
       var loadingPortrait_=false;

    function initClass(){
        if (hasFocus_ == true) {
	    if (phaserVer_==-1){//pixi
                mainGroup_ =addGroup();
                logoGroup_ = addGroup();
                compatibilityGroup_ = addGroup();
                loaderGroup_ = addGroup();
            }else{
                game.forceSingleUpdate = true;
                game.renderer.renderSession.roundPixels = true;
                game.stage.disableVisibilityChange = true;
                game.scale.refresh();
                game.load.crossOrigin = 'anonymous';
                game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
                game.scale.pageAlignHorizontally = true;
                game.scale.pageAlignVertically = true;
                game.scale.windowConstraints.bottom = "visual";

                mainGroup_ =addGroup();
                logoGroup_ = addGroup();
                compatibilityGroup_ = addGroup();
                loaderGroup_ = addGroup();
            }
            //called by phaser create, init phaser parameters and show Iron Dog studio animation.
            //start all the assets loading


            loaderGroup_.alpha = 0;

            mainGroup_.add_Child(logoGroup_);
            mainGroup_.add_Child(loaderGroup_);

            console.log("width "+window.innerWidth)

            if (ReelConfig.licence){
                for (var ga in loaderAssets.loaderMc.graphAssetLicence) {
                    var sp = new spriteManager_.addSprite(loaderAssets.loaderMc.graphAssetLicence[ga].x, loaderAssets.loaderMc.graphAssetLicence[ga].y, loaderAssets.loaderMc.graphAssetLicence[ga].name,loaderAssets.loaderMc.graphAssetLicence[ga].width,loaderAssets.loaderMc.graphAssetLicence[ga].height,loaderAssets.loaderMc.graphAssetLicence[ga].anchorX ,loaderAssets.loaderMc.graphAssetLicence[ga].anchorY,loaderAssets.loaderMc.graphAssetLicence[ga].scaleX,loaderAssets.loaderMc.graphAssetLicence[ga].scaleY);
                    logoGroup_.add_Child(sp);
                    lGroupObjs_[loaderAssets.loaderMc.graphAssetLicence[ga].name]=sp;
                }
                if (loaderAssets.loaderMc.textsLicence) {
                    for (var t in loaderAssets.loaderMc.textsLicence) {
                        var txt;
                        if (loaderAssets.loaderMc.textsLicence[t].font != null) {
                            logger(t + " disp loader font " +loaderAssets.loaderMc.textsLicence[t].font );
                            txt =spriteManager_.addText(loaderAssets.loaderMc.textsLicence[t].x, loaderAssets.loaderMc.textsLicence[t].y, Translate.do(loaderAssets.loaderMc.textsLicence[t].text),loaderAssets.loaderMc.textsLicence[t].anchorX,loaderAssets.loaderMc.textsLicence[t].anchorY, {
                                fontFamily: loaderAssets.loaderMc.textsLicence[t].font,
                                fontSize: loaderAssets.loaderMc.textsLicence[t].fontSize,
                                fill: loaderAssets.loaderMc.textsLicence[t].fill,
                                boundsAlignH: loaderAssets.loaderMc.textsLicence[t].align,
                                align: loaderAssets.loaderMc.textsLicence[t].align,
                                fontWeight: (loaderAssets.loaderMc.textsLicence[t].weight == null) ? 'normal' : loaderAssets.loaderMc.textsLicence[t].weight,
                                fontVariant: (loaderAssets.loaderMc.textsLicence[t].variant == null) ? 'normal' : loaderAssets.loaderMc.textsLicence[t].variant,
                                backgroundColor: loaderAssets.loaderMc.textsLicence[t].backgroundColor
                            });
                        }

                        if (window.devicePixelRatio != null) txt.resolution = window.devicePixelRatio;

                        logoGroup_.add_Child(txt);
                    }

                }
                mainGroup_.y=mainGroup_.y-80;
            }
            
            var s =  spriteManager_.addSprite(960, 300, "ironDogLogo",null,null,.5,.5,1);
            animationManager_.create(s, "ironDogLogo",24)
            s.play(12,false,fadeLogo_);
            logoGroup_.add_Child(s);
            var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;


            if (loaderAssets.loader.graphAsset != null) {
                for (var ga in loaderAssets.loader.graphAsset) {
                    var sp =spriteManager_.addSprite(loaderAssets.loader.graphAsset[ga].x, loaderAssets.loader.graphAsset[ga].y, loaderAssets.loader.graphAsset[ga].name,loaderAssets.loader.graphAsset[ga].width,loaderAssets.loader.graphAsset[ga].height, loaderAssets.loader.graphAsset[ga].anchorX, loaderAssets.loader.graphAsset[ga].anchorY)
                    loaderGroup_.add_Child(sp);
                    lGroupObjs_[loaderAssets.loader.graphAsset[ga].name] = sp;
                }
            }

            //ripositioning portrait
            adjust_();

            startLoading_();
            TweenMax.to(loaderGroup_, .5, {alpha: 1});
        }else{
            setTimeout(initClass, 500);
        }
    }

    function adjust_(){
        //ripositioning portrait
        if (getOrientation()=="portrait"){
            var scaleH_=window.innerHeight*window.devicePixelRatio;
            var scaleW_= window.innerWidth*window.devicePixelRatio;
            var xRatio_ = window.innerWidth*window.devicePixelRatio/(( ReelConfig.icon.width *  ReelConfig.numReels))*1.5;
            mainGroup_.scale.x=xRatio_;
            mainGroup_.scale.y=xRatio_;
            mainGroup_.x=(scaleW_/2 ) -(960*xRatio_);
            mainGroup_.y=50*xRatio_;
        }else{
            mainGroup_.scale.x=1;
            mainGroup_.scale.y=1;
            mainGroup_.x=0;
        }
    }

    function fadeLogo_(){
        if (spriteManager_.getCache("staticLoaderLogo" )==true) {
            TweenMax.to(obj,.4,{alpha:0,onComplete:switchLogos_,onCompleteParams:[obj]});
        }else{
            var baseTime=0;
            if (compatibility_==false)baseTime=5;
            enableStartGame1_();
        }
    }

    function switchLogos_(obj){
        obj.visible=false;
        var s =  spriteManager_.addSprite(960, 300, "staticLoaderLogo",.5,.5,1,1);
        s.alpha=0;
        logoGroup_.add_Child(s);
        TweenMax.to(s,.4,{alpha:1});
        var baseTime=0;
        if (compatibility_==false)baseTime=5;
        enableStartGame1_();
    }
    function enableStartGame_(){
        //used to show the loader for few msec, in case everyting is in browser cache
        setTimeout(enableStartGame1_,500);
    }

    function enableStartGame1_ (){
        lockStartGame_=false;
    }

    function startLoading_(){
        var clientName="default";

        //loading bottom bar assets
        for (var a in guiConfig.images) {
            loaderManager_.loadImage(a, guiConfig.images[a]);
        }
        //bitmap fonts
        for (a in bitmapFonts) {
            loaderManager_.loadBmpFont(a, bitmapFonts[a].sprite, bitmapFonts[a].font);
        }
        //loading sounds
        for (a in gameAssets.importantSounds) {
            loaderManager_.loadAudio(a, gameAssets.importantSounds[a].name);
        }
        //loading bg sounds
        for (a in gameAssets.bgImportantSounds) {
            loaderManager_.loadAudio(a, gameAssets.bgImportantSounds[a].name);
        }

        //loading sounds
        for (a in gameAssets.sounds) {
            loaderManager_.loadAudio(a, gameAssets.sounds[a].name);
        }
        //loading bg sounds
        for (a in gameAssets.bgSounds) {
            loaderManager_.loadAudio(a, gameAssets.bgSounds[a].name);
        }

        //loading game animations
        for (a in gameAssets.animations) {
            if (gameAssets.animations[a].type!="spine") {
                loaderManager_.loadAtlas(a, gameAssets.animations[a].sprite, gameAssets.animations[a].json);
            }else{
                loaderManager_.loadSpine(a, gameAssets.animations[a].json);

                //spineAssets_[a]=gameAssets.animations[a];

            }
        }
        //loading game graphic assets
        for (a in gameAssets.assets) {
            loaderManager_.loadImage(a, gameAssets.assets[a]);
        }
        //external scripts (such as webfonts or webGL shaders)
        for (a in extScripts) {
            var t=spriteManager_.addText(-200, -200, 'webfonts preloader', 0,0,{
                fontFamily: extScripts[a],
                fonSize:"10px",
                fill: "#ffffff"
            });
            text_.push(t);
            mainGroup_.add_Child(t);
        }
        //loading buttons spritesheet
        for (a in gameAssets.buttonsSpriteSheet) {
            loaderManager_.loadImage(a,gameAssets.buttonsSpriteSheet[a].sprite)
            //game.load.spritesheet(a, gameAssets.buttonsSpriteSheet[a].sprite,{frameWidth: gameAssets.buttonsSpriteSheet[a].w,frameHeight:gameAssets.buttonsSpriteSheet[a].h});
        }

        if (gameAssets.localizedAssets!=undefined) {
            //localised image assets
            for (a in gameAssets.localizedAssets.graphAsset) {
                var file;
                if (gameAssets.localizedAssets.graphAsset[a].lang.indexOf(gameParams.lang) >= 0) {
                    file = gameAssets.localizedAssets.graphAsset[a].img + "-lang-" + gameParams.lang + ".png";
                } else {
                    file = gameAssets.localizedAssets.graphAsset[a].img + ".png";
                }
                loaderManager_.loadImage(a, file);
            }

            //localised animation assets
            for (a in gameAssets.localizedAssets.animAssets) {
                var sprite_;
                var json_;
                if (gameAssets.localizedAssets.animAssets[a].lang.indexOf(gameParams.lang) >= 0) {
                    sprite_ = gameAssets.localizedAssets.animAssets[a].sprite + "-lang-" + gameParams.lang + ".png";
                    json_ = gameAssets.localizedAssets.animAssets[a].json + "-lang-" + gameParams.lang + ".json";
                } else {
                    sprite_ = gameAssets.localizedAssets.animAssets[a].sprite + ".png";
                    json_ = gameAssets.localizedAssets.animAssets[a].json + ".json";
                }
                loaderManager_.loadAtlas(a, sprite_, json_);
            }
        }

       //branded stuff
       if(gameAssets.clientAssets!=null) {
              if (gameAssets.clientAssets.conf==undefined ||(gameAssets.clientAssets.conf[gameParams.gameOriginalID]!=null && gameAssets.clientAssets.conf[gameParams.gameOriginalID][gameParams.clientName]!=undefined)){
                clientName=gameParams.clientName;//
            }else{
                for (var a in gameAssets.clientAssets.conf){
                    if ( gameAssets.clientAssets.conf[gameParams.gameOriginalID]!=undefined) {
                        for (var a in gameAssets.clientAssets.conf[gameParams.gameOriginalID]) {
                            for (var b in gameAssets.clientAssets.conf[gameParams.gameOriginalID][a]) {
                                var cn = (gameParams.pathCDN.indexOf("1x2-cloud") >= 0) ? gameParams.clientName + "/STAGE" : gameParams.clientName;
                                if (cn.indexOf(b) >= 0) {
                                    var siteID = gameParams.site;
                                    siteID = !isNaN(siteID) ? Math.abs(siteID) : siteID[0] === '-' ? siteID.replace('-', '') : siteID;
                                    if (gameAssets.clientAssets.conf[gameParams.gameOriginalID][a][b].indexOf("*")==0 || gameAssets.clientAssets.conf[gameParams.gameOriginalID][a][b].indexOf(siteID.toString()) >= 0) {
                                        clientName = a; //found clientname = siteid
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            //clients  image assets
            for (a in gameAssets.clientAssets.graphAsset) {
                file = gameAssets.clientAssets.graphAsset[a].path+ clientName+ "/"+ gameAssets.clientAssets.graphAsset[a].name;
                game.load.image(a, file);
            }

            //clients animation assets
            for (a in gameAssets.clientAssets.animAssets) {
                var sprite_;
                var json_;

                sprite_ = gameAssets.clientAssets.animAssets[a].path +clientName+ "/"+ gameAssets.clientAssets.animAssets[a].name +".png";
                json_ = gameAssets.clientAssets.animAssets[a].path + clientName+ "/"+ gameAssets.clientAssets.animAssets[a].name+".json";

                game.load.atlas(a, sprite_, json_);
            }
        }

        for (a in frameworkSettings.buttons) {
            if(frameworkSettings.buttons[a].bg!=null && frameworkSettings.buttons[a].bg!="")loaderManager_.loadImage(a +"bg", frameworkSettings.buttons[a].bg);
            if(frameworkSettings.buttons[a].bgDisabled!=null && frameworkSettings.buttons[a].bgDisabled!="")loaderManager_.loadImage(a +"bgDisabled", frameworkSettings.buttons[a].bgDisabled);
            if(frameworkSettings.buttons[a].m_bgDisabled!=null && frameworkSettings.buttons[a].m_bgDisabled!="")loaderManager_.loadImage(a +"m_bgDisabled", frameworkSettings.buttons[a].m_bgDisabled);
            if(frameworkSettings.buttons[a].start!=null && frameworkSettings.buttons[a].start!="")loaderManager_.loadImage(a +"start", frameworkSettings.buttons[a].start);
            if(frameworkSettings.buttons[a].stop!=null && frameworkSettings.buttons[a].stop!="")loaderManager_.loadImage(a+"stop" , frameworkSettings.buttons[a].stop);
        }


        if (phaserVer_==-1){//pixi
            game.loader.load(reallyLoadComplete);
            game.loader.onLoad.add(fileComplete);
        }else{
            game.load.onFileComplete.add(fileComplete2, this);
            game.load.onLoadComplete.add(reallyLoadComplete, this);
            game.load.onFileError.add(fileError,this);
            game.load.enableParallel = 1;
            game.load.start();
        }

    }

    function fileError (fileKey, file) {
        //todo , pixi loader doesn't hande this fallbacks 
        var pos=file.url.indexOf("-lang-");
        if (pos>0){
            var obj={};
            obj.type=file.type;
            obj.key=fileKey;
            obj.file = file.url.replace("-lang-" + file.url.substr(pos + 6, 2), "");
            if (obj.type=="textureatlas") {
                obj.json = file.atlasURL.replace("-lang-" + file.atlasURL.substr(pos + 6, 2), "");
            }
            failed_.push(obj);
        }
    }
    
    function fileComplete(progress,file) {
        if (phaserVer_==-1) {//pixi
            if(game.loader.resources["progressBar"])lGroupObjs_["progressBar"].texture= game.loader.resources["progressBar"].textures[ Math.floor((progress.progress - 1) * .24)]
            if (file != undefined) {
                 var obj = [];
                 obj.key = file.key;
                 obj.url = file.url;
                // //todo p3
                // game.cache.obj.entries.set(file.key, file.url);
            }
        }else {
            lGroupObjs_["progressBar"].anims.frame = Math.floor((progress - 1) * .24);
            if (file != undefined) {
                var obj = [];
                obj.key = file.key;
                obj.url = file.url;
                //todo p3
                game.cache.obj.entries.set(file.key, file.url);
            }
        }
        if (Math.floor(progress.progress )<100){
            gcmCalls_("LOAD", Math.floor(progress.progress )+1,true);
        }

    }

    function fileComplete2(progress, cacheKey, success, totalLoaded, totalFiles) {
        lGroupObjs_["progressBar"].animations.frame = Math.floor((progress-1)*.24);
        gcmCalls_("LOAD", Math.floor(progress.progress ),true);
    }

    function reallyLoadComplete(){
        if (phaserVer_==-1){//pixi
            initSounds_();
            initGame_();
            gcmCalls_("GAME_READY",0,true);
            clientMessageSend("load-end");
        }else {
            game.load.onLoadComplete.remove(reallyLoadComplete, this);
            game.load.onLoadComplete.add(spinLoadComplete, this);
            game.load.start();
        }

    }

    function spinLoadComplete(){
        if (phaserVer_==3) {
            game.load.removeAllListeners();
        }else if (phaserVer_==-1){//pixi

        }else{
            game.load.onLoadComplete.remove(spinLoadComplete, this);
        }
        console.log("complete all")
        initSounds_();


        initGame_();
        gcmCalls_("GAME_READY",0,true);
        clientMessageSend("load-end");
    }

    function hideLoader_(cb) {
        if(loadingPortrait_)return;
        //the loader page will be closed after the setup responce has been received. (setup response is part of the loading process)
        TweenMax.to(loaderGroup_,.3,{alpha:0,onComplete:finalizeHideLoader_,onCompleteParams:[cb]});
        TweenMax.to(logoGroup_,.3,{alpha:0});

    }

    function finalizeHideLoader_(cb){
        if(loadingPortrait_)return;
        //after fading out the loader the callBack funciton initialize all the game framework classes (startAll in launcher.js)
        cb();
        loaderGroup_.visible=false;
        logoGroup_.visible=false
        snd_=null;
    }

    var me={
        hideLoader:hideLoader_,
        adjust:adjust_,
        getLoadingGroup:function(){
            return mainGroup_;
        }
    }
    initClass();
    return me;
}
