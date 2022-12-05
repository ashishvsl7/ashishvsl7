<%
String lang=request.getParameter("lang");
String acc_id=request.getParameter("acc_id");
String gameID=request.getParameter("gameID");
String network=request.getParameter("network");
String playmode=request.getParameter("playmode");
String league = request.getParameter("league");
String leagueName = request.getParameter("leagueName");
String force = request.getParameter("force");

%>
<body onload="javascript:document.forms['forwarder'].submit()">
	<%if(gameID.equals("1082")||gameID.equals("1096")||gameID.equals("2026")){%>
<form action="http://81.168.64.203/f1x2games/playGame2.jsp" name="forwarder" method="post">
	<%}else if(gameID.equals("2023")){%>
<form action="playGameKeno.jsp" name="forwarder" method="post">
	<%//}else if(gameID.equals("1037")){%>
	<!--<form action="http://81.168.64.203/f1x2games/playGameCDN.jsp" name="forwarder" method="post">-->
	<%}else{%>
<form action="playGameDemo.jsp" name="forwarder" method="post">
	<%}%>
<input type="hidden" name="acc_id" value="<%=acc_id%>">
<input type="hidden" name="lang" value="<%=lang%>">
<input type="hidden" name="gameID" value="<%=gameID%>">
<input type="hidden" name="network" value="<%=network%>">
<input type="hidden" name="playmode" value="<%=playmode%>">
<input type="hidden" name="league" value="<%=league%>">
<input type="hidden" name="leagueName" value="<%=leagueName%>">
<input type="hidden" name="force" value="<%=force%>">
</form>
