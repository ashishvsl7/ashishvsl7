<%
String lang=request.getParameter("lang");
String acc_id=request.getParameter("acc_id");
String gameID=request.getParameter("gameID");
String network=request.getParameter("network");
String playmode=request.getParameter("playmode");
String league = request.getParameter("league");
String leagueName = request.getParameter("leagueName");
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

%>
<body onload="javascript:document.forms['forwarder'].submit()">
	<%if(gameID.equals("1082")||gameID.equals("1096")||gameID.equals("2026")){%>
<form action="http://81.168.64.203/f1x2games/playGame2.jsp" name="forwarder" method="post">
	<%}else if(gameID.equals("2023")){%>
<form action="playGameKeno.jsp" name="forwarder" method="post">
	<%//}else if(gameID.equals("1037")){%>
	<!--<form action="http://81.168.64.203/f1x2games/playGameCDN.jsp" name="forwarder" method="post">-->
	<%}else{%>
<form action="playGame.jsp" name="forwarder" method="post">
	<%}%>
<input type="hidden" name="acc_id" value="<%=acc_id%>">
<input type="hidden" name="lang" value="<%=lang%>">
<input type="hidden" name="gameID" value="<%=gameID%>">
<input type="hidden" name="network" value="<%=network%>">
<input type="hidden" name="playmode" value="<%=playmode%>">
<input type="hidden" name="league" value="<%=league%>">
<input type="hidden" name="leagueName" value="<%=leagueName%>">
<input type="hidden" name="force" value="<%=force%>">
<input type="hidden" name="confType" value="<%=confType%>">
<input type="hidden" name="log" value="<%=log%>">
<input type="hidden" name="jurisdiction" value="<%=jurisdiction%>">
<input type="hidden" name="realitycheck_uk_elapsed" value="<%=realitycheck_uk_elapsed%>">
<input type="hidden" name="realitycheck_uk_limit" value="<%=realitycheck_uk_limit%>">
<input type="hidden" name="realitycheck_uk_proceed" value="<%=realitycheck_uk_proceed%>">
<input type="hidden" name="realitycheck_uk_exit" value="<%=realitycheck_uk_exit%>">
<input type="hidden" name="realitycheck_uk_history" value="<%=realitycheck_uk_history%>">
<input type="hidden" name="realitycheck_uk_autospin" value="<%=realitycheck_uk_autospin%>">
</form>
