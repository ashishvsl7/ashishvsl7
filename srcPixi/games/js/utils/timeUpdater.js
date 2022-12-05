/**
 * KiS Framework, Created by Fabry on 23/02/2016.
 */
function TimeUpdater(gameRef,field){
    var game_=game;
    var field_=field;
    var timer_=1000;
    var pretext_="";

    var initClass_=function (){
        writeHour_();
        setInterval(writeHour_,1000);
    }

    var writeHour_=function(){
        var d= new Date();
        var time=Util.formatTwoDigit(d.getHours(),2) + ":" + Util.formatTwoDigit(d.getMinutes(),2) + ":" + Util.formatTwoDigit(d.getSeconds(),2);


//  game name to check for P3      field_.setText((loginVars.getRegParams().jurisdiction =="es" || loginVars.getRegParams().jurisdiction =="se" || loginVars.getRegParams().jurisdiction =="co")? gameParams.gameName+ " - " + time:time);



        writeBalance_( time,pretext_ + gameParams.gameName);
    }


    function writeBalance_(time,name){
        /*
        Game messages - ‘footer-top-message’
        Balance               - ‘footer-bottom-balance’
        Clock                   - ‘footer-bottom-clock’
         */
        if (ReelConfig.newUI) {
            if (window.innerHeight > window.innerWidth) {
                //portrait
                $("#footer-bottom-clock").html(time).append("&nbsp;&nbsp;&nbsp;");
                $("#footer-middle-name").html(name);

            } else {
                $("#footer-bottom-clock").html(name+ " - " + time);
            }
        }else{
            field_.setText(name+ " - " + time);
        }
    }

    function setPreText_(txt) {
        pretext_=txt+" - ";
    }

    var me={
        writeHour:writeHour_,
        setPreText:setPreText_
    }
    initClass_();
    return me;
}
