     var jul = 'https://tfpak.github.io/v/m3u8.html?url=';
     var vul = 'https://video.letv-cdn.com/20171124/Y2ne5XAt/index.m3u8'
     var ymul ='https://tfpak.github.io/video'
     var gul1 ='/gul/yingq/'
     var gul2 ='/gul/2155-yingq.html'
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}
    var vid = GetQueryString("url");
	var index = vid.indexOf("https://");
	if(index == 0&&document.location.protocol=="http:"){
		document.location.protocol="https:";
	}else
	{

	};
{
  };
