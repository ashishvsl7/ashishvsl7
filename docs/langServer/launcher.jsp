<%@ page language='java' import="java.util.*,java.lang.*"%>

<!DOCTYPE html>
<html>
<meta charset="utf-8" />

<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="apple-touch-fullscreen" content="yes" />
<meta name="msapplication-tap-highlight" content="no" />
<meta name="touch-event-mode" content="native" />
<meta name="mobile-web-app-capable" content="yes">

<style>

.centered {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -32px;
  margin-left: -32px;

}

body{
  background: #000000;
  font-family: arial;
  color: #eeeeee;
}

.game__message{
  font-family: arial;
  width:100%;
  text-align: center;
  margin-top: 20%;
  opacity: 0;
}

.game__message button{

  padding: 10px 20px 10px 20px;
  font-size: 1.25em;
  cursor: pointer;
  border-radius: 5px;
  background: #eeeeee;
  border-width: 0px;
  outline: none;
}

.fade{

    -webkit-transition: all 0.5s ease;                  
    -moz-transition: all 0.5s ease;                 
    -o-transition: all 0.5s ease;   
    -ms-transition: all 0.5s ease;          
    transition: all 0.5s ease;
}

</style>

<script src="https://code.jquery.com/jquery-2.2.3.min.js" integrity="sha256-a23g1Nt4dtEYOj7bR+vTu7+T8VP13humZFBJNIYoEJo=" crossorigin="anonymous"></script>

<%


String path = request.getParameter("path");

String langCDN = "http://www.1x2gaminglangs.com/";

if (request.getScheme().equals("https")){
  //path= "https://"+request.getServerName()+"/f1x2games/";
  langCDN = "https://www.1x2gaminglangs.com/";
}
String lang=request.getParameter("lang");
String acc_id=request.getParameter("acc_id");
String gameID=request.getParameter("gameID");
String playmode=request.getParameter("playMode");
String site=request.getParameter("site");
String installID=request.getParameter("installID");

String jurisdiction=request.getParameter("jurisdiction");
String realitycheck_uk_elapsed=request.getParameter("realitycheck_uk_elapsed");
String realitycheck_uk_limit=request.getParameter("realitycheck_uk_limit");
String realitycheck_uk_proceed=request.getParameter("realitycheck_uk_proceed");
String realitycheck_uk_exit=request.getParameter("realitycheck_uk_exit");
String realitycheck_uk_history=request.getParameter("realitycheck_uk_history");
String realitycheck_uk_autospin=request.getParameter("realitycheck_uk_autospin");

String lobbyurl = request.getParameter("lobbyurl");//Home button location

String channel = request.getParameter("channel");//desktop or mobile

String force = request.getParameter("force");//force panel
String log = request.getParameter("log");
String confType = request.getParameter("confType");
String clientName = request.getParameter("clientName");
%>

<body>

<img id="loader" class='centered fade' src="img/preloader.gif"/>

<%

boolean foundGame = true;

String gameName = request.getParameter("gameName");
String gameType = request.getParameter("gameType");
String version = request.getParameter("gameVersion");
String folderName = request.getParameter("folderName");


if(foundGame){

%>

<script type="text/javascript">
  
  $( document ).ready(function() {

    if(window.sessionStorage){//use session stroage if supported (99%)

      sessionStorage.setItem("acc_id", "<%=acc_id%>");
      sessionStorage.setItem("language","<%=lang%>");
      sessionStorage.setItem("gameID","<%=gameID%>");
      sessionStorage.setItem("path","<%=path%>");
      sessionStorage.setItem("pathCDN","<%=langCDN%>");
      sessionStorage.setItem("playMode","<%=playmode%>");
      sessionStorage.setItem("gameVersion","<%=version%>");
      sessionStorage.setItem("gameName","<%=gameName%>");
      sessionStorage.setItem("gameType","<%=gameType%>");
      sessionStorage.setItem("installID","<%=installID%>");
      sessionStorage.setItem("site","<%=site%>");
      sessionStorage.setItem("jurisdiction","<%=jurisdiction%>");
      sessionStorage.setItem("realitycheck_uk_elapsed","<%=realitycheck_uk_elapsed%>");
      sessionStorage.setItem("realitycheck_uk_limit","<%=realitycheck_uk_limit%>");
      sessionStorage.setItem("realitycheck_uk_proceed","<%=realitycheck_uk_proceed%>");
      sessionStorage.setItem("realitycheck_uk_exit","<%=realitycheck_uk_exit%>");
      sessionStorage.setItem("realitycheck_uk_history","<%=realitycheck_uk_history%>");
      sessionStorage.setItem("realitycheck_uk_autospin","<%=realitycheck_uk_autospin%>");
      sessionStorage.setItem("folderName","<%=folderName%>");
      sessionStorage.setItem("channel","<%=channel%>");
      sessionStorage.setItem("lobbyUrl","<%=lobbyurl%>");
      sessionStorage.setItem("force","<%=force%>");
      sessionStorage.setItem("log","<%=log%>");
      sessionStorage.setItem("confType","<%=confType%>");
      sessionStorage.setItem("clientName","<%=clientName%>");
    }
    else{
      
      var hiddenInputs = '<input type="hidden" name="acc_id" value="<%=acc_id%>"><input type="hidden" name="language" value="<%=lang%>"><input type="hidden" name="gameID" value="<%=gameID%>"><input type="hidden" name="path" value="<%=path%>"><input type="hidden" name="pathCDN" value="<%=langCDN%>"><input type="hidden" name="playMode" value="<%=playmode%>"><input type="hidden" name="gameVersion" value="<%=version%>"><input type="hidden" name="gameName" value="<%=gameName%>"><input type="hidden" name="gameType" value="<%=gameType%>"><input type="hidden" name="installID" value="<%=installID%>"><input type="hidden" name="site" value="<%=site%>"><input type="hidden" name="jurisdiction" value="<%=jurisdiction%>"><input type="hidden" name="realitycheck_uk_elapsed" value="<%=realitycheck_uk_elapsed%>"><input type="hidden" name="realitycheck_uk_limit" value="<%=realitycheck_uk_limit%>"><input type="hidden" name="realitycheck_uk_proceed" value="<%=realitycheck_uk_proceed%>"><input type="hidden" name="realitycheck_uk_exit" value="<%=realitycheck_uk_exit%>"><input type="hidden" name="realitycheck_uk_history" value="<%=realitycheck_uk_history%>"><input type="hidden" name="realitycheck_uk_autospin" value="<%=realitycheck_uk_autospin%>"><input type="hidden" name="folderName" value="<%=folderName%>"><input type="hidden" name="channel" value="<%=channel%>"><input type="hidden" name="lobbyurl" value="<%=lobbyurl%>"<input type="hidden" name="force" value="<%=force%>"><input type="hidden" name="confType" value="<%=confType%>">';

       $("#gameForm").html(hiddenInputs);
    }

      //setTimeout(function(){ $("#loader").css("opacity", 0); }, 900);

      setTimeout(function(){ $( "#gameForm" ).submit(); }, 1);      

  });

</script>

      <form id="gameForm" action="games/slot/" name="forwarder" method="post">

  
      </form>

<%

}else{
%>

<script type="text/javascript">
  
  $( document ).ready(function() {
      
      setTimeout(function(){ $("#loader").css("opacity", 0); }, 1200);

      setTimeout(function(){ $(".game__message").css("opacity", 1); }, 1500);

      $( ".game__message button" ).click(function() {
         window.location.href="index.html";
      });

  });

</script>

<div class="fade game__message">
  <h1>Error loading game</h1>
  <h4>Game id not recognized or game offline</h4>

  <button>Home</button>

</div>
<%
}

%>

</body>


</html>


