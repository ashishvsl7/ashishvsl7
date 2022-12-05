<%@ page isThreadSafe="false"%>
<%@ page language='java' import="java.util.Hashtable"%>
<%
//response.addHeader("Cache-Control", "private") ;
response.addDateHeader("Expires", -1);
String accountID=request.getParameter("accountID");
Hashtable hash;
uk.co.F1x2Games.Bridge bridge= new  uk.co.F1x2Games.Bridge();
hash= bridge.getAccountDetails(accountID);
uk.co.F1x2Games.VirtualSportsFralis.CurrencyConversions cc = uk.co.F1x2Games.VirtualSportsFralis.CurrencyConversions.getInstance();
String ex_rate = (String)hash.get("exchange_rate");
String currency=(String)hash.get("currency");
double exchangeRate=1;
try{
exchangeRate=Double.parseDouble(ex_rate);
}catch (java.lang.NumberFormatException nfe){
}

java.util.Random rand = new java.util.Random();

int  n = rand.nextInt(10000) + 1;

String [] theValues=cc.getConversionRate(currency, exchangeRate).split(";");
//The parameters below will have to be ammended for each individual client depending on the information returned but we want a value
String returnedString="start=here";
returnedString+="&error_code="+ bridge.getErrorCode();
returnedString+="&error_description="+bridge.getErrorMessage();
returnedString+="&accountID="+hash.get("account_id");
returnedString+="&customerID="+hash.get("customer_id");
returnedString+="&username="+hash.get("username");
returnedString+="&balance="+hash.get("balance");
returnedString+="&iso_code="+hash.get("currency");
returnedString+="&exchange_rate="+hash.get("exchange_rate");
returnedString+="&other1="+hash.get("other1");
returnedString+="&other2="+hash.get("other2");

returnedString+="&minStakeMultiplier="+theValues[0];
returnedString+="&maxStakeMultiplier="+theValues[1];
returnedString+="&maxLiabilityMultiplier="+theValues[2];
//any additional parameters can be added here but all the movies will need to be ammended to accommodate the extra entries
returnedString+="&end=yes";

//ut.Logger("FREEROUNDS","at end of tring making");

try{
if(request.getParameter("version")!=null){

//ut.Logger("FREEROUNDS","param not null");

int ver=Integer.parseInt(request.getParameter("version"));
//ut.Logger("FREEROUNDS","parsed version");

new uk.co.F1x2Games.FreeRounds().login((String)hash.get("customer_id"), (String)hash.get("account_id"), ver,(String)hash.get("exchange_rate"));
//ut.Logger("FREEROUNDS","still not errored");

}else{
	

	//ut.Logger("FREEROUNDS","param is null");
}
}catch(Exception h){}

%>
<%=returnedString%>

