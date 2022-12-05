/**
 * KiS Framework, Created by Fabry on 28/07/2016.
 */
function Loader(gameRef){
    var game_=gameRef;
    var mainGroup_;
    var loaderGroup_;
    var logoGroup_;
    var compatibilityGroup_;
    var lGroupObjs_=[];
    var lockStartGame_=true;
    var text_=[];
    var snd_;
    var compatibility_=true;
    var failed_=[];
    var loadingPortrait_=false;

    function initClass(){

        if (hasFocus_ == true) {
            //called by phaser create, init phaser parameters and show Iron Dog studio animation.
            //start all the assets loading
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

            mainGroup_ = game_.add.group();
            logoGroup_ = game_.add.group();
            compatibilityGroup_ = game_.add.group();
            loaderGroup_ = game_.add.group();
            loaderGroup_.alpha = 0;
            mainGroup_.add(logoGroup_);
            mainGroup_.add(loaderGroup_);

            console.log("width "+window.innerWidth)


            if (ReelConfig.newUI!=null && ReelConfig.isMobile==true) {
                var ratio= window.innerWidth/800* window.devicePixelRatio;

                if (getOrientation()=="portrait") {
                    mainGroup_.scale.x=ratio;
                    mainGroup_.scale.y=ratio;
                    mainGroup_.x =  -1*(640)*ratio+window.innerWidth* window.devicePixelRatio/2;
                    console.log( window.innerWidth +" rotate " + ratio + " "+ mainGroup_.x)
                } else {
                    mainGroup_.x = 0;
                }
            }

            if (ReelConfig.licence){
                for (var ga in loaderAssets.loaderMc.graphAssetLicence) {
                    var sp = new Phaser.Sprite(game, loaderAssets.loaderMc.graphAssetLicence[ga].x, loaderAssets.loaderMc.graphAssetLicence[ga].y, loaderAssets.loaderMc.graphAssetLicence[ga].name);
                    if (loaderAssets.loaderMc.graphAssetLicence[ga].width != null)sp.width = loaderAssets.loaderMc.graphAssetLicence[ga].width;
                    if (loaderAssets.loaderMc.graphAssetLicence[ga].height != null)sp.height = loaderAssets.loaderMc.graphAssetLicence[ga].height;
                    sp.anchor.set((loaderAssets.loaderMc.graphAssetLicence[ga].anchorX != undefined) ? loaderAssets.loaderMc.graphAssetLicence[ga].anchorX : 0, (loaderAssets.loaderMc.graphAssetLicence[ga].anchorY != undefined) ? loaderAssets.loaderMc.graphAssetLicence[ga].anchorY : 0);
                    sp.anchor.set((loaderAssets.loaderMc.graphAssetLicence[ga].anchorX != undefined) ? loaderAssets.loaderMc.graphAssetLicence[ga].anchorX : 0, (loaderAssets.loaderMc.graphAssetLicence[ga].anchorY != undefined) ? loaderAssets.loaderMc.graphAssetLicence[ga].anchorY : 0);
                    sp.scale.x = loaderAssets.loaderMc.graphAssetLicence[ga].scaleX;
                    sp.scale.y = loaderAssets.loaderMc.graphAssetLicence[ga].scaleY;
                    logoGroup_.add(sp);
                    //lGroupObjs_[loaderAssets.loaderMc.graphAssetLicence[ga].name]=sp;
                }
                if (loaderAssets.loaderMc.textsLicence) {
                    for (var t in loaderAssets.loaderMc.textsLicence) {
                        var txt;
                        if (loaderAssets.loaderMc.textsLicence[t].font != null) {
                            logger(t + " disp loader font " +loaderAssets.loaderMc.textsLicence[t].font );
                            txt = new Phaser.Text(game_, loaderAssets.loaderMc.textsLicence[t].x, loaderAssets.loaderMc.textsLicence[t].y, '', {
                                font: loaderAssets.loaderMc.textsLicence[t].font,
                                fill: loaderAssets.loaderMc.textsLicence[t].fill,
                                align: loaderAssets.loaderMc.textsLicence[t].align,
                                fontWeight: (loaderAssets.loaderMc.textsLicence[t].weight == null) ? 'normal' : loaderAssets.loaderMc.textsLicence[t].weight,
                                fontVariant: (loaderAssets.loaderMc.textsLicence[t].variant == null) ? 'normal' : loaderAssets.loaderMc.textsLicence[t].variant,
                                backgroundColor: loaderAssets.loaderMc.textsLicence[t].backgroundColor
                            });
                        }

                        txt.anchor.set((loaderAssets.loaderMc.textsLicence[t].anchorX != undefined) ? loaderAssets.loaderMc.textsLicence[t].anchorX : 0, (loaderAssets.loaderMc.textsLicence[t].anchorY != undefined) ? loaderAssets.loaderMc.textsLicence[t].anchorY : 0);
                        if (loaderAssets.loaderMc.textsLicence[t].text != undefined)txt.setText(Translate.do(loaderAssets.loaderMc.textsLicence[t].text));
                        if (window.devicePixelRatio != null) txt.resolution = window.devicePixelRatio;

                        logoGroup_.add(txt);
                    }

                }
                mainGroup_.y=mainGroup_.y-80;
            }




            startLoading_();
            TweenMax.to(loaderGroup_, .5, {alpha: 1});
            if (game.cache.checkImageKey("ironDogLogo" )==true) {
                var s = game_.add.sprite(640, 360, "ironDogLogo");
                s.animations.add("anim");
                s.animations.play("anim", 24, false, false, fadeLogo_,s);
                s.scale.x = 1;
                s.scale.y = 1;
            }

            s.anchor.set(.5, .5);
            logoGroup_.add(s);

            var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
            /*if (iOS == false) {
                if (game_.cache.checkSoundKey("loaderSound")) {
                    snd_ = game_.add.sound("loaderSound");
                    snd_.volume = loaderAssets.sounds.loaderSound.volume;
                    snd_.play();
                }
            }*/
            if (loaderAssets.loader.graphAsset != null) {
                for (var ga in loaderAssets.loader.graphAsset) {
                    var sp = new Phaser.Sprite(game, loaderAssets.loader.graphAsset[ga].x, loaderAssets.loader.graphAsset[ga].y, loaderAssets.loader.graphAsset[ga].name);
                    if (loaderAssets.loader.graphAsset[ga].width != null)sp.width = loaderAssets.loader.graphAsset[ga].width;
                    if (loaderAssets.loader.graphAsset[ga].height != null)sp.height = loaderAssets.loader.graphAsset[ga].height;
                    sp.anchor.set((loaderAssets.loader.graphAsset[ga].anchorX != undefined) ? loaderAssets.loader.graphAsset[ga].anchorX : 0, (loaderAssets.loader.graphAsset[ga].anchorY != undefined) ? loaderAssets.loader.graphAsset[ga].anchorY : 0);
                    loaderGroup_.add(sp);
                    lGroupObjs_[loaderAssets.loader.graphAsset[ga].name] = sp;
                }
            }
        }else{
            setTimeout(initClass, 500);
        }
    }

    function fadeLogo_(obj){
        if (game.cache.checkImageKey("staticLoaderLogo" )==true) {
            TweenMax.to(obj,.4,{alpha:0,onComplete:switchLogos_,onCompleteParams:[obj]});
        }else{
            var baseTime=0;
            if (compatibility_==false)baseTime=5;
            enableStartGame1_();
        }
    }

    function switchLogos_(obj){
        obj.visible=false;
        var s = game_.add.sprite(640, 300, "staticLoaderLogo");
        s.scale.x = 1;
        s.scale.y = 1;
        s.alpha=0;
        s.anchor.set(.5, .5);
        logoGroup_.add(s);
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
            game.load.image(a, guiConfig.images[a]);
        }
        //bitmap fonts
        for (a in bitmapFonts) {
            game.load.bitmapFont(a, bitmapFonts[a].sprite, bitmapFonts[a].font);
        }
        //loading sounds
        for (a in gameAssets.importantSounds) {
            game.load.audio(a, gameAssets.importantSounds[a].name);
        }
        //loading bg sounds
        for (a in gameAssets.bgImportantSounds) {
            game.load.audio(a, gameAssets.bgImportantSounds[a].name);
        }

        // //loading bg sounds
        // for (a in gameAssets.bgSounds) {
        //     game.load.audio(a, gameAssets.bgSounds[a].name);
        // }
        //loading videos
        for (a in gameAssets.video) {
            game.load.video(a, gameAssets.video[a]);
        }
        //loading game animations
        for (a in gameAssets.animations) {
            if (gameAssets.animations[a].type!="spine") {
                game.load.atlas(a, gameAssets.animations[a].sprite, gameAssets.animations[a].json);
            }else{
                game.load.spine(a, gameAssets.animations[a].json);
            }
        }
        //loading game graphic assets
        for (a in gameAssets.assets) {
            game.load.image(a, gameAssets.assets[a]);
        }
        //external scripts (such as webfonts or webGL shaders)
        for (a in extScripts) {
            var t=game.add.text(-200, -200, 'webfonts preloader', {
                font: extScripts[a],
                fill: "#ffffff"
            });
            text_.push(t);
        }
        //loading buttons spritesheet
        for (a in gameAssets.buttonsSpriteSheet) {
            game.load.spritesheet(a, gameAssets.buttonsSpriteSheet[a].sprite, gameAssets.buttonsSpriteSheet[a].w, gameAssets.buttonsSpriteSheet[a].h);
        }

        //localised image assets
        for (a in gameAssets.localizedAssets.graphAsset){
            var file;
            if (gameAssets.localizedAssets.graphAsset[a].lang.indexOf(gameParams.lang)>=0){
                file=gameAssets.localizedAssets.graphAsset[a].img +"-lang-"+ gameParams.lang +".png";
            }else{
                file=gameAssets.localizedAssets.graphAsset[a].img +".png";
            }
            game.load.image(a,file);
        }

        //localised animation assets
        for (a in gameAssets.localizedAssets.animAssets){
            var sprite_;
            var json_;
            if (gameAssets.localizedAssets.animAssets[a].lang.indexOf(gameParams.lang)>=0){
                sprite_=gameAssets.localizedAssets.animAssets[a].sprite +"-lang-"+ gameParams.lang +".png";
                json_=gameAssets.localizedAssets.animAssets[a].json +"-lang-"+ gameParams.lang +".json";
            }else{
                sprite_=gameAssets.localizedAssets.animAssets[a].sprite +".png";
                json_=gameAssets.localizedAssets.animAssets[a].json +".json";
            }
            game.load.atlas(a,sprite_,json_);
        }
        if(gameAssets.clientAssets!=null) {
            /*
        "conf": {example o fconfiguration
            "Betfred": {
                "Betfred":"1",
                "NYX":["123","124","125"],
                "theHub":"126",
                "Quickfire_":"127",
            },
            "redQueen": {
             */

            // gameParams.clientName="NYX";
            // gameParams.site="135";

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

            if (gameParams.gameOriginalID==7030) {
                clientName="BGT";
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
            if(frameworkSettings.buttons[a].bg!=null)game.load.image(a +"bg", frameworkSettings.buttons[a].bg);
            if(frameworkSettings.buttons[a].bgDisabled!=null)game.load.image(a +"bgDisabled", frameworkSettings.buttons[a].bgDisabled);
            if(frameworkSettings.buttons[a].m_bgDisabled!=null)game.load.image(a +"m_bgDisabled", frameworkSettings.buttons[a].m_bgDisabled);
            if(frameworkSettings.buttons[a].start!=null)game.load.image(a +"start", frameworkSettings.buttons[a].start);
            if(frameworkSettings.buttons[a].stop!=null)game.load.image(a+"stop" , frameworkSettings.buttons[a].stop);
        }

        if(lGroupObjs_["progressBar"]!=null) {
            lGroupObjs_["progressBar"].animations.add("anim");
            lGroupObjs_["progressBar"].animations.play("anim", 24, false, false);
            lGroupObjs_["progressBar"].animations.stop();
        }
        game.load.onFileComplete.add(fileComplete, this);
        game.load.onLoadComplete.add(loadComplete, this);
        game.load.onFileError.add(fileError,this);
        game.load.enableParallel = 1;
        game.load.start();
    }

    function fileError (fileKey, file) {
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

    function loadFailed_(){
        for (var a in failed_){
            if (failed_[a].type=="image") {
                game.load.image(failed_[a].key, failed_[a].file);
            }else if (failed_[a].type=="textureatlas") {
                game.load.atlas(failed_[a].key,failed_[a].file,failed_[a].json);
            }
        }
        failed_=[];
        game.load.enableParallel = 1;
        game.load.start();

    }

    function fileCompleteEn(progress, cacheKey, success, totalLoaded, totalFiles) {
        lGroupObjs_["progressBar"].animations.frame = Math.floor((progress-1)*.24);
    }

    function loadCompleteEn() {
        setTimeout(finalizeLoading_, 100);
    }

    function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
        lGroupObjs_["progressBar"].animations.frame = Math.floor((progress-1)*.24);
        gcmCalls_("LOAD",progress,true);
        clientMessageSend('load-progress', progress)
    }

    function loadComplete() {
        for (a in text_) {
            text_[a].visible=false;
        }
        if (failed_.length==0) {
            setTimeout(finalizeLoading_, 500);
        }else{
            setTimeout(loadFailed_, 100);
        }
    }


    function reallyFileComplete(progress, cacheKey, success, totalLoaded, totalFiles){
    }

    function reallyLoadComplete(){
        initSounds_();
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

    function finalizeLoading_() {
        epsy_ = game_.plugins.add(Phaser.Plugin.EPSY);
        game.load.onFileComplete.remove(fileComplete, this);
        game.load.onLoadComplete.remove(loadComplete, this);

        //after all the essential assets as been loaded it start loading not essential sounds (spin and reel sounds has already been loaded). This makes the loading process quicker

        //loading sounds
        for (a in gameAssets.sounds) {
            game.load.audio(a, gameAssets.sounds[a].name);
        }
        //loading bg sounds
        for (a in gameAssets.bgSounds) {
            game.load.audio(a, gameAssets.bgSounds[a].name);
        }

        game.load.onFileComplete.add(reallyFileComplete, this);
        game.load.onLoadComplete.add(reallyLoadComplete, this);
        game.load.enableParallel = 1;
        game.load.start();

        initGame_();
        gcmCalls_("GAME_READY",0,true);
        clientMessageSend("load-end");
    }

    function loadPortrait_(Cb){
        loadingPortrait_=true;
        var txt = new Phaser.Text(game_, loaderAssets.loaderMc.textsPortrait.port.x, loaderAssets.loaderMc.textsPortrait.port.y, Translate.do(loaderAssets.loaderMc.textsPortrait.port.text), {
            font: loaderAssets.loaderMc.textsPortrait.port.font,
            fill: loaderAssets.loaderMc.textsPortrait.port.fill,
            align: loaderAssets.loaderMc.textsPortrait.port.align,
            fontWeight: (loaderAssets.loaderMc.textsPortrait.port.weight == null) ? 'normal' : loaderAssets.loaderMc.textsPortrait.port.weight,
            fontVariant: (loaderAssets.loaderMc.textsPortrait.port.variant == null) ? 'normal' : loaderAssets.loaderMc.textsPortrait.port.variant,
            backgroundColor: loaderAssets.loaderMc.textsPortrait.port.backgroundColor
        });

        txt.anchor.set((loaderAssets.loaderMc.textsPortrait.port.anchorX != undefined) ? loaderAssets.loaderMc.textsPortrait.port.anchorX : 0, (loaderAssets.loaderMc.textsPortrait.port.anchorY != undefined) ? loaderAssets.loaderMc.textsPortrait.port.anchorY : 0);
        if (loaderAssets.loaderMc.textsPortrait.port.text != undefined)txt.setText(Translate.do(loaderAssets.loaderMc.textsPortrait.port.text));
        if (window.devicePixelRatio != null) txt.resolution = window.devicePixelRatio;

        logoGroup_.add(txt);

        if(gameClass_.hideGame!=undefined)gameClass_.hideGame(true);
        lGroupObjs_["progressBar"].animations.frame=10;
        lGroupObjs_["progressBar"].visible=true;
        lGroupObjs_["progressBar"].alpha=1;
        loaderGroup_.visible=true;

        loaderGroup_.alpha=1;
        logoGroup_.alpha=1;
        mainGroup_.alpha=1;
        logoGroup_.visible=true;
        mainGroup_.visible=true;
        game_.world.bringToTop(mainGroup_);
        var pA=displayManager_.getPortraitAssets()

        for (var a in pA) {
            if ( Number(gameParams.gameOriginalID) < 7022){
                var ext = (pA[a].portraitAsset.indexOf(".jpg") > 0) ? ".jpg" : ".png";
                game.load.image(pA[a].normalAsset + "Portrait", pA[a].portraitAsset + ext);
            }else{
                if (pA[a].sprite.animations._frameData!=null && pA[a].sprite.animations._frameData._frames.length>1){   //for WW, previously just images could be different on portrait
                    //animation
                    game.load.atlas(pA[a].normalAsset+"Portrait",pA[a].portraitAsset ,pA[a].portraitAsset.replace("png", "json") );
                }else{
                    //image
                    game.load.image(pA[a].normalAsset+"Portrait",pA[a].portraitAsset);
                }
            }
        }

        game.load.onFileComplete.add(portraitFileComplete, this);
        game.load.onLoadComplete.add(portraitLoadComplete, this);
        game.load.enableParallel = 1;
        game.load.start();
    }

    function portraitFileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
        lGroupObjs_["progressBar"].animations.frame = Math.floor((progress-1)*.24);
    }

    function portraitLoadComplete(){
        console.log("2 l")
        gameClass_.loadedPortrait();
        logoGroup_.visible=false;
        mainGroup_.visible=false;
        loaderGroup_.visible=false;
    }

    function switchPortrait_(port){
        var scaleW=window.innerWidth;
        if (ReelConfig.newUI!=null && ReelConfig.isMobile==true) {
            var ratio= window.innerWidth/800* window.devicePixelRatio;

            if (getOrientation()=="portrait") {
                mainGroup_.scale.x=ratio;
                mainGroup_.scale.y=ratio;
                mainGroup_.x =  -1*(640)*ratio+window.innerWidth* window.devicePixelRatio/2;
            } else {
                mainGroup_.x = 0;
            }
        }


    }


    var me={
        hideLoader:hideLoader_,
        loadPortrait:loadPortrait_,
        switchPortrait:switchPortrait_,
        getLoadingGroup:function(){
            return mainGroup_;
        }
    }
    initClass();
    return me;
}
