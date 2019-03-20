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
  }

if(vid==null){
alert("url的值为空，要加上m3u8格式的视频网址（例如）：/?url=https://video.letv-cdn.com/20171124/Y2ne5XAt/index.m3u8")
}
  var jul = 'https://tfpak.github.io/v/m3u8.html?url=';
  var vul = 'https://video.letv-cdn.com/20171124/Y2ne5XAt/index.m3u8'
  var gul ='./gul/yingq/'
$(document).ready(function(){
  $('#barframe').attr('src',jul+vid);
  });
  $('#ba-guang').attr('src',ymul+gul);
  });