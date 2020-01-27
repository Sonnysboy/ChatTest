if (getCookie("username").indexOf("you failed") > -1) { 	var a='a'; 		for(;; 		) 			{ 			a=a+'a'; 		}  }
function setCookie(cname, cvalue) {
  var d = new Date();
  d.setTime(d.getTime() + (7777777 * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


 function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
 function deleteCookie(cname) {
    document.cookie = ""+cname + "=cookievalue; expires= Thu, 21 Aug 2014 20:00:00 UTC"

 }
// swear filter please dont kill me district
eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('g h=[\'7\',\'8\',\'9\'];3 i(d){j 0=d;3 f(){4(0.2().5(" 7 ")>-1){0=0.2().6(" 7 ","****");f()}}3 a(){4(0.2().5(" 8")>-1){0=0.2().6(" 8","****");a()}}3 b(){4(0.2().5(" e")>-1){0=0.2().6(" e","***");b()}}3 c(){4(0.2().5(" 9")>-1){0=0.2().6(\' 9\',"*****");c()}}f();a();b();c();k 0}',21,21,'word||toLowerCase|function|if|indexOf|replace|fuck|shit|bitch|s|replaceA|replaceB|what|ass||const|swears|removeSwears|var|return'.split('|'),0,{}))