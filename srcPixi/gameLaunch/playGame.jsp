<%@ page language='java' import="java.util.*,java.lang.*,java.sql.*,uk.co.F1x2Games.*,javax.sql.*,javax.naming.*" %>
<%
String swf="genericFramework.swf";
String gameID=request.getParameter("gameID");
if(gameID.equals("72")){
swf = "genericFrameworkCorporate.swf";
}
String gameType="FOOTBALL1x2";
String version="1";
String gameName="";
//ADDED BY TOM 04/07/2013 TO INCLUDE GAMEGROUPS
int gameGroup = 3;

String path = "http://"+request.getServerName()+"/f1x2games/";

String langCDN = "http://www.1x2gaminglangs.com/f1x2games/";

if (request.getScheme().equals("https")){

   path= "https://"+request.getServerName()+"/f1x2games/";
   langCDN = "https://www.1x2gaminglangs.com/f1x2games/";

}

String lobbyurl = request.getParameter("lobbyurl");

String installID = request.getParameter("installID");

//premiumslots params
String confType = request.getParameter("confType");

//these 2 are just for dev enviroment 
String force = request.getParameter("force");
String log = request.getParameter("log");

String jurisdiction=request.getParameter("jurisdiction");
String realitycheck_uk_elapsed=request.getParameter("realitycheck_uk_elapsed");
String realitycheck_uk_limit=request.getParameter("realitycheck_uk_limit");
String realitycheck_uk_proceed=request.getParameter("realitycheck_uk_proceed");
String realitycheck_uk_exit=request.getParameter("realitycheck_uk_exit");
String realitycheck_uk_history=request.getParameter("realitycheck_uk_history");
String realitycheck_uk_autospin=request.getParameter("realitycheck_uk_autospin");

String folderName = "";

String rPath = "http://88.208.218.32/f1x2games/";
String lang=request.getParameter("lang");
String acc_id=request.getParameter("acc_id");
String site=request.getParameter("site");
if(site==null)site="1";
String playmode=request.getParameter("playmode");
if(playmode==null)playmode="fun";
if(!playmode.equals("real"))playmode="fun";
String selectedDivision = request.getParameter("league"); if (selectedDivision==null){selectedDivision = "ITALY1";}
String selectedDivisionName = request.getParameter("leagueName"); if (selectedDivisionName==null){selectedDivisionName = "ITALIA";}
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
gameID = ""+rs.getInt("GAMEID");
folderName = rs.getString("FOLDERNAME");
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
		foundGame=true;
	}

}
gameName=gameName.replace(" ","%20");
if(foundGame){
%>
<script type="text/javascript">

function submitOnly(){
  document.forms['forwarder'].submit();
}

</script>

<%
	
	if(gameType.equals("PREMIUMSLOTS")){

      %>
      <body onLoad="submitOnly()">
      <form action="../ironDog/launcher.jsp" name="forwarder" method="post">
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
      <input type="hidden" name="channel" value="desktop">
      <input type="hidden" name="lobbyurl" value="<%=lobbyurl%>">
      <input type="hidden" name="force" value="<%=force%>">
      <input type="hidden" name="confType" value="<%=confType%>">
      <input type="hidden" name="log" value="<%=log%>">
      </form>

      <%

	}else if (gameType.equals("SLOTS")){
		 %>
		<HTML>
		<HEAD>
		<TITLE> F1X2 GAMES</TITLE>
		<script type="text/javascript" src="<%=rPath+"slots/V"+version+"/"%>swfobject/swfobject.js"></script>
		<script type="text/javascript">
		var flashvars = {};
		flashvars.NVP = "<%=path+"loadGame.jsp?gameID="+gameID+"&lang="+lang+"&acc_id="+acc_id+"&path="+path+"&rPath="+rPath+"&site="+site+"&playmode="+playmode+"&"%>";
		flashvars.path = "<%=path%>";
		flashvars.resourcePath = "<%=rPath%>";
		flashvars.lang = "<%=lang%>";
		flashvars.acc_id = "<%=acc_id%>";
		flashvars.site = "<%=site%>";
		flashvars.gameID = "<%=gameID%>";
		flashvars.loginmethod = "account";
		flashvars.playmode="<%=playmode%>";
		flashvars.version = "<%=version%>";
		flashvars.gameType = "<%=gameType%>";
		flashvars.gameType = "<%=gameGroup%>";
		flashvars.stretch = "true";
		flashvars.gameName = "<%=rs.getString("GAMENAME")%>";
		<%if(Integer.parseInt(version)>=36){%>
		flashvars.logoURL = "<%="slots/logo2015.swf"%>";
		<%}else{%>
		flashvars.logoURL = "<%="slots/logo2015-30.swf"%>";
		<%}%>
		flashvars.langURL = "http://www.1x2gaminglangs.com/f1x2games/slots/";
		var params = {}
		params.allowfullscreen = "true";
		params.wmode = "direct";
		var attributes = {}
		attributes.wmode = "direct";
		swfobject.embedSWF("<%=rPath+"slots/V"+version+"/"%>main.swf", "FLASHMOVIE", "100%", "100%", "11.0.0","slots/V<%=version%>/swfobject/expressInstall.swf", flashvars,params,attributes);
		</script>
		</HEAD>
		<body bgcolor="black" style="bgcolor:black;" marginheight="0" marginwidth="0" leftmargin="0" rightmargin="0" topmargin="0" bottommargin="0" onLoad="focus();">
		<center>
		<div id="FLASHMOVIE">
			This text will be replaced by the control
		</div>
		</center>
		</BODY>
		</HTML>
	<% }
	else{ %>
		<HTML>
		<HEAD>
		<TITLE> F1X2 GAMES : <%=rs.getString("GAMENAME")%> </TITLE>
		<script src="embedFlashMovie.js" language="JavaScript"></script>
		<script>
		function showPage(page){
		window.open(page, "helprules" ,"status=no, location=no,scrolling=yes, scrollbars=yes, width=455,height=450")
		}
		</script>
		</HEAD>
		<body bgcolor="black" marginheight="0" marginwidth="0" leftmargin="0" rightmargin="0" topmargin="0" bottommargin="0" onLoad="focus()">
		<center>
		 <div id="FLASHMOVIE">
		      This text will be replaced by the control
		   </div>
		   <script language="JavaScript">
		     CreateControl( "FLASHMOVIE","<%=acc_id%>","<%=lang%>","<%=path%>","<%=gameID%>","<%=gameType%>","<%=version%>","<%=site%>","<%=playmode%>","<%=gameName%>", "<%=gameGroup%>","<%=selectedDivision%>","<%=selectedDivisionName%>");
		     console.log("gameGroup " + gameGroup );
		   </script>
		</center>
		</BODY>
		</HTML>
<%	}
}else{%>
error - game id not recognised or game offline
<%}
con.close();
%>