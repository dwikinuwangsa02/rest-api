
// IP 
window.setTimeout("getip()",1000);
function getip(){
  var xhr=new XMLHttpRequest();
  var url='https://ipwhois.app/json/';
  xhr.onloadend=function(){
  data=JSON.parse(this.responseText);
  document.getElementById("ip").textContent=data.ip
};
xhr.open("GET",url,true);
xhr.send();
}
// ISP
window.setTimeout("getisp()",1000);
function getisp(){
  var xhr=new XMLHttpRequest();
  var url='https://ipwhois.app/json/';
  xhr.onloadend=function(){
  data=JSON.parse(this.responseText);
  document.getElementById("isp").textContent=data.isp
};
xhr.open("GET",url,true);
xhr.send();
}
var status = 'online';
	var current_status = 'online';
	
	function check_internet_connection()
	{
		if(navigator.onLine)
		{
			status = 'online';
		}
		else
		{
			status = 'offline';
		}
	
		if(current_status != status)
		{
			if(status == 'online')
			{
				connected_noti()
			}
			else
			{
				disconnected_noti()
			}
	
			current_status = status;
	
			$('.toast').toast({
				autohide:false
			});
	
			$('.toast').toast('show');
		}
	}
	
	check_internet_connection();
	
	setInterval(function(){
		check_internet_connection();
	}, 1000);