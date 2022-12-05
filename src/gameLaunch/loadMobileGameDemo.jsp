<%@ page language='java' import="java.util.*,java.lang.*,java.sql.*,uk.co.F1x2Games.*,javax.sql.*,javax.naming.*" %>
<script type="text/javascript" src="PhoneApp/genericFramework/ua-parser-js-master/src/ua-parser.min.js"></script>

<style>

.centered {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -31px;
  margin-left: -31px;
}
</style>


<img class='centered' src="PhoneApp/images/ajax-loader.gif"/>

<%

String gameID=request.getParameter("gameID");
String gameType="FOOTBALL1x2";
String version="1";
String gameName="";
String folderName = "";
//ADDED BY TOM 04/07/2013 TO INCLUDE GAMEGROUPS
int gameGroup = 3;
String path = "http://"+request.getServerName()+"/f1x2games/";

String langCDN = "http://www.1x2gaminglangs.com/f1x2games/";

if (request.getScheme().equals("https")){

   path= "https://"+request.getServerName()+"/f1x2games/";
   langCDN = "https://www.1x2gaminglangs.com/f1x2games/";

}

String jurisdiction=request.getParameter("jurisdiction");
String realitycheck_uk_elapsed=request.getParameter("realitycheck_uk_elapsed");
String realitycheck_uk_limit=request.getParameter("realitycheck_uk_limit");
String realitycheck_uk_proceed=request.getParameter("realitycheck_uk_proceed");
String realitycheck_uk_exit=request.getParameter("realitycheck_uk_exit");
String realitycheck_uk_history=request.getParameter("realitycheck_uk_history");
String realitycheck_uk_autospin=request.getParameter("realitycheck_uk_autospin");

String desktop_launch = request.getParameter("desktop_launch");

String force = request.getParameter("force");

String provider = request.getParameter("provider");

if(provider == null){
  provider = "1x2";
}

int g_id = Integer.parseInt(gameID);

if(g_id >= 3000 && g_id < 4000){
  provider = "playson";
}

String siteID = request.getParameter("siteID");
String lang=request.getParameter("lang");
String acc_id=request.getParameter("acc_id");
String site=request.getParameter("site");

String lobbyurl = request.getParameter("lobbyurl");

String proLeague = request.getParameter("proLeague");

String installID = request.getParameter("installID");

if(site==null){site=siteID;}

String playmode=request.getParameter("playmode");

if(playmode==null)playmode="none";
/*if(!playmode.equals("real"))playmode="fun";*/
 String playsonName = "";
boolean foundGame=false;

Connection con;
PreparedStatement prep;
ResultSet rs;
Context env = (Context) new InitialContext().lookup("java:comp/env");
DataSource source = (DataSource) env.lookup("jdbc/f1x2Admin");
con = source.getConnection();
prep=con.prepareStatement("select * from GAMES where EXTERNALGAMEID=? AND (STATUS=1 or STATUS=2)");
prep.setString(1,gameID);
rs=prep.executeQuery();
if(rs.next()){
gameType=rs.getString("GAMETYPE");
version=rs.getString("VERSION");
gameName=rs.getString("GAMENAME");
gameGroup = rs.getInt("GAMEGROUP");
folderName = rs.getString("FOLDERNAME");
playsonName = rs.getString("LOGFILE");
//gameID = ""+rs.getInt("GAMEID");
foundGame=true;
}else{
 prep=con.prepareStatement("select * from GAMES where GAMEID=? AND (STATUS=1 or STATUS=2)");
     prep.setString(1,gameID);
     rs=prep.executeQuery();
    if(rs.next()){
		gameType=rs.getString("GAMETYPE");
        version=rs.getString("VERSION");
		gameName=rs.getString("GAMENAME");
		gameGroup = rs.getInt("GAMEGROUP");
    folderName = rs.getString("FOLDERNAME");
    playsonName = rs.getString("LOGFILE");
		foundGame=true;
	}

}


if(foundGame){%>

<script type="text/javascript">

function submitOnly(){
  document.forms['forwarder'].submit();
}
	
	function submitForm(){

  		var uastring = navigator.userAgent; 

    	var result = UAParser(uastring);

    	var model = result.device.model;
    	var type = result.device.type;
    	var vendor = result.device.vendor;

    	if(String(model) === "undefined") model = "N/A";
    	if(String(type) === "undefined") type = "";
    	if(String(vendor) === "undefined") vendor = "";

    	var device = model + " " + type + " " + vendor;
    	var os = result.os.name + " " + result.os.version;
    	var browser= result.browser.name;
      var version= result.browser.version;

    	document.getElementById("device").value = device;
    	document.getElementById("os").value = os;
    	document.getElementById("browser").value = browser;
      document.getElementById("version").value = version;
    	document.forms['forwarder'].submit();

    }


</script>
    
   <% 

    if(gameType.equals("PREMIUMSLOTS")){

      %>
      <body onLoad="submitOnly()">
      <form action="../premiumslots/launcherDemo.jsp" name="forwarder" method="post">
      <input type="hidden" name="acc_id" value="<%=acc_id%>">
      <input type="hidden" name="lang" value="<%=lang%>">
      <input type="hidden" name="gameID" value="<%=gameID%>">
      <input type="hidden" name="path" value="<%=path%>">
      <input type="hidden" name="pathCDN" value="<%=langCDN%>">
      <input type="hidden" name="playMode" value="<%=playmode%>">
      <input type="hidden" name="gameVersion" value="<%=version%>">
      <input type="hidden" name="gameName" value="<%=gameName%>">
      <input type="hidden" name="gameType" value="<%=gameType%>">
      <input type="hidden" name="installID" value="<%=installID%>">
      <input type="hidden" name="site" value="<%=site%>">
      <input type="hidden" name="jurisdiction" value="<%=jurisdiction%>">
      <input type="hidden" name="realitycheck_uk_elapsed" value="<%=realitycheck_uk_elapsed%>">
      <input type="hidden" name="realitycheck_uk_limit" value="<%=realitycheck_uk_limit%>">
      <input type="hidden" name="realitycheck_uk_proceed" value="<%=realitycheck_uk_proceed%>">
      <input type="hidden" name="realitycheck_uk_exit" value="<%=realitycheck_uk_exit%>">
      <input type="hidden" name="realitycheck_uk_history" value="<%=realitycheck_uk_history%>">
      <input type="hidden" name="realitycheck_uk_autospin" value="<%=realitycheck_uk_autospin%>">
      <input type="hidden" name="folderName" value="<%=folderName%>">
      <input type="hidden" name="channel" value="mobile">
      <input type="hidden" name="lobbyurl" value="<%=lobbyurl%>">
      <input type="hidden" name="force" value="<%=force%>">
       </form>

      <%

    }
    else if(gameType.equals("BROADCASTSICBO")){

      %>
      <body onLoad="submitOnly()">
      <form action="ngapps/<%=folderName%>" name="forwarder" method="get">
      <input type="hidden" name="acc_id" value="<%=acc_id%>">
      <input type="hidden" name="lang" value="<%=lang%>">
      <input type="hidden" name="gameID" value="<%=gameID%>">
      <input type="hidden" name="path" value="<%=path%>">
      <input type="hidden" name="pathCDN" value="<%=langCDN%>">
      <input type="hidden" name="playMode" value="<%=playmode%>">
      <input type="hidden" name="gameVersion" value="<%=version%>">
      <input type="hidden" name="gameName" value="<%=gameName%>">
      <input type="hidden" name="gameType" value="<%=gameType%>">
      <input type="hidden" name="installID" value="<%=installID%>">
      <input type="hidden" name="site" value="<%=site%>">
      <input type="hidden" name="jurisdiction" value="<%=jurisdiction%>">
      <input type="hidden" name="realitycheck_uk_elapsed" value="<%=realitycheck_uk_elapsed%>">
      <input type="hidden" name="realitycheck_uk_limit" value="<%=realitycheck_uk_limit%>">
      <input type="hidden" name="realitycheck_uk_proceed" value="<%=realitycheck_uk_proceed%>">
      <input type="hidden" name="realitycheck_uk_exit" value="<%=realitycheck_uk_exit%>">
      <input type="hidden" name="realitycheck_uk_history" value="<%=realitycheck_uk_history%>">
      <input type="hidden" name="realitycheck_uk_autospin" value="<%=realitycheck_uk_autospin%>">
      <input type="hidden" name="folderName" value="<%=folderName%>">
      <input type="hidden" name="channel" value="mobile">
      <input type="hidden" name="lobbyurl" value="<%=lobbyurl%>">
       </form>

      <%

    }
     else if(!provider.equals("playson")) {

    %>
			
		  <body onLoad="submitForm()">
		  <form action="PhoneApp/1x2Mobile.jsp" name="forwarder" method="get">
		  <input type="hidden" name="acc_id" value="<%=acc_id%>">
		  <input type="hidden" name="language" value="<%=lang%>">
      <input type="hidden" name="gameID" value="<%=gameID%>">
		  <input type="hidden" name="path" value="<%=path%>">
		  <input type="hidden" name="playMode" value="<%=playmode%>">
		  <input type="hidden" name="gameVersion" value="<%=version%>">
		  <input type="hidden" name="gameName" value="<%=gameName%>">
		  <input type="hidden" name="gameType" value="<%=gameType%>">
		  <input type="hidden" name="installID" value="<%=installID%>">

      <input type="hidden" name="jurisdiction" value="<%=jurisdiction%>">
      <input type="hidden" name="realitycheck_uk_elapsed" value="<%=realitycheck_uk_elapsed%>">
      <input type="hidden" name="realitycheck_uk_limit" value="<%=realitycheck_uk_limit%>">
      <input type="hidden" name="realitycheck_uk_proceed" value="<%=realitycheck_uk_proceed%>">
      <input type="hidden" name="realitycheck_uk_exit" value="<%=realitycheck_uk_exit%>">
      <input type="hidden" name="realitycheck_uk_history" value="<%=realitycheck_uk_history%>">
      <input type="hidden" name="realitycheck_uk_autospin" value="<%=realitycheck_uk_autospin%>">

      <input type="hidden" name="lobbyurl" value="<%=lobbyurl%>">
		  <input type="hidden" name="site" value="<%=site%>">
		  <input type="hidden" name="device" id="device" value="">
		  <input type="hidden" name="os" id="os" value="">
		  <input type="hidden" name="browser" id="browser" value="">
      <input type="hidden" name="version" id="version" value="">
      <input type="hidden" name="proLeague" id="proLeague" value="<%=proLeague%>">
      <input type="hidden" name="langCDN" id="langCDN" value="<%=langCDN%>">
      <input type="hidden" name="pathCDN" id="langCDN" value="<%=langCDN%>">

      <input type="hidden" name="desktop_launch" value="<%=desktop_launch%>">
     

		  </form>

      <%
      }
      else{

      %>

        
        <script type="text/javascript">
  
        //production: 
        window.location.href="https://h5.ps-gamespace.com/ih/current/index.html?game=<%=playsonName%>&server_id=1x2gaming_prod&key=<%=acc_id%>?<%=acc_id%>?<%=gameID%>?1?1&ping_interval=30&denum=100&exit_url=<%=lobbyurl%>";

        //staging
        //window.location.href="https://h5.ps-gamespace.com/ih/current/index.html?game=<%=playsonName%>&server_id=staging-1x2gaming&key=<%=acc_id%>?<%=acc_id%>?<%=gameID%>?1?1&ping_interval=30&denum=100&exit_url=<%=lobbyurl%>";



       </script>

      <%}%>



	
<%}else{%>
<h1>error - game id not recognised or game offline</h1>
<%}
con.close();
%>





