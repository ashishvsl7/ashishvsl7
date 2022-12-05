/**
 * KiS Framework, Created by Fabry on 08/03/2016.
 */
var Translate={
    translationsGame:null,
    translationsGeneral:null,
    tObj:null,
    tLangObj:null,
    parseLang:function(){
        tObj=[];
        tLangObj=[];
        for (var a in this.translationsGeneral){
            for (var key in this.translationsGeneral[a]) {
                tObj[key] = this.translationsGeneral[a][key];
                tLangObj[key]=null;
            }
        }
        for (var a in this.translationsGame){
            var index=0;
            var baseKey="";
            for (var key in this.translationsGame[a]) {
                index++;
                if (baseKey==""){
                    tObj[key] = this.translationsGame[a][key];

                    baseKey=key;
                }
                if (index>1){
                    if (tLangObj[baseKey]==null)tLangObj[baseKey]={};
                    tLangObj[baseKey][key] = this.translationsGame[a][key];
                }
            }
        }
    },
    do:function(msg){
        if (msg==undefined|| tObj==undefined)return"";
        logger("Translate message " + msg)
        var ret=msg;
        if (tObj[msg]!=null){
            ret=tObj[msg];
        }
        return ret;
    },
    langModifier:function(group, text,msg){
        if (msg==undefined|| tLangObj==undefined)return null;
        var ret=null;
        if (tLangObj[msg]!=null && tLangObj[msg][group+"_"+text]!=null){
            ret=tLangObj[msg][group+"_"+text];
        }
        return ret;
    }
}

//sort out update 