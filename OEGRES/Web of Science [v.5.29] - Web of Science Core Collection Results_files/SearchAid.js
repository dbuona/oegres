function redirect_page(a){parent.location=a}function openBrWindow(c,a,b){newWindow=window.open(c,a,b);newWindow.focus()}function show_help(c){var d;var f;var b="Help";var e=parseInt(screen.width*0.85);var a=parseInt(screen.height*0.7);d="height="+a+",width="+e+",top=70,left=60,toolbar=yes, menubar=yes,resizable=yes,scrollbars=yes,status=no";f=window.open(c,b,d);if(window.focus){f.focus()}return false}function defineHiddenInput(h,e,d){var k,j;if(h==0){k=1;j=9999}else{k=j=h}for(i=k;i<=j;++i){var m=document.getElementById("select"+i);if(m!=null){var c=m.options[m.selectedIndex].value;var f=document.getElementById("value(hidInput"+i+")");var b=document.getElementById("value(hidShowIcon"+i+")");var l=document.getElementById(c).value;var o=document.getElementById(c+"_alt").value;var g=document.getElementById("saicon"+i);if(d!=null){var n=isActivateSA(c,d);var a=(n=="")?"0":"1";f.value=n;b.value=a}if(h!=0){if(a=="1"){g.className="NEWSearchAidText";g.innerHTML=l;g.alt=o;g.title=o}else{g.className="NEWSearchAidText_hidden";g.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";g.alt=o;g.title=o}}}else{break}}}function isActivateSA(c,a){var b=dataExchange(a,"name","value",c);return b}function createSAaction(k,b,a,l,j,d,e,g){if(k=="WOS"||k=="UA"){g="saJavaService"}else{if(d=="AU"||d=="GP"||d=="SO"||d=="DE"||d=="CAU"||d=="CW"){g="saJavaService"}}if(!g){g="saService"}var h=b.indexOf("???");var f=b.length;b=b.substring(0,h)+e+b.substring(h+3,f);var c=l+"/OutboundService.do?action=go&mode="+g+"&product="+k+"&saType="+j+"&passback="+b+"&sa_mode="+k+"&RQ="+d+"&SID="+a+"&TS="+getTSlimit();return c}function invokeRemoteSA_gen(a,h,g){if(a==null){return}var f=a.id.substring(h.length,a.id.length);var e=document.getElementById("value(hidInput"+f+")").value;var d=document.getElementById("sa_params").value;var b=d.split("|");var j=dataExchange(b[4],"value","type",e);if(!g&&j=="termList"&&b[0]=="DIIDW"){g=dataExchange(b[4],"value","mode",e)}var c=createSAaction(b[0],b[1],b[2],b[3],j,e,f,g);window.location.href=c}function invokeRemoteSA_ref(k,g,c,b,a,d,m,h){var n=document.getElementById(a);var l=n.value;var j=dataExchange(d,"name","type",l);if(!h&&j=="termList"&&k=="DIIDW"){h=dataExchange(d,"name","mode",l)}var f=isActivateSA(l,d);var e=createSAaction(k,c,b,m,j,f,g,h);window.location.href=e}function invokeRemoteSA_NoDBLimit(k,g,c,b,a,d,m,h){var n=document.getElementById(a);var l=n.value;var j=dataExchange(d,"name","type",l);if(!h&&j=="termList"&&k=="DIIDW"){h=dataExchange(d,"name","mode",l)}var f=isActivateSA(l,d);var e=createSAaction(k,c,b,m,j,f,g,h);window.location.href=e}function invokeRemoteSA_adv(l,f,b,a,n,c,m,h){var e=isActivateSA(n,c);var k=dataExchange(c,"name","type",n);if(!h&&k=="termList"&&l=="DIIDW"){h=dataExchange(c,"name","mode",n)}if(!h){h=dataExchange(c,"name","mode",n)}var j=b.indexOf("--");var g=b.length;b=b.substring(0,j)+n+b.substring(j+2,g);var d=createSAaction(l,b,a,m,k,e,f,h);if(top.frames.length!=0){top.location=d}else{window.location.href=d}}function dataExchange(a,j,d,h){var c=a.split(",");var e="";var k="0";j+="=";d+="=";for(var b=0;b<c.length&&k=="0";b++){if(c[b].indexOf(j+h)>-1){var g=c[b].indexOf(d);var f=c[b].indexOf(";",g);if(f==-1){f=c[b].length;pos3=c[b].indexOf("]");if(pos3>-1){f=pos3}}e=c[b].substring(g+d.length,f);k="1"}}return e}function getTSlimit(){var h;var b="";try{var g=getSearchInputForm();if(g.period==null||g.period[0].checked){h=true}else{h=false}if(h){var d=g.elements.range;var a=d.selectedIndex;b=d.options[a].value}else{var e=g.startYear.selectedIndex;var c=g.endYear.selectedIndex;b=g.startYear[e].value+"-"+g.endYear[c].value}}catch(f){return"ALL"}return b}function set_checkbox(d){var b=document.forms[0];var a;if(d==1){a=true}else{a=false}for(var e=0;e<b.elements.length;e++){if(b.elements[e].type=="checkbox"){b.elements[e].checked=a}}}function reset_checkbox(){var b=document.forms[0];for(var d=0;d<b.elements.length;d++){if(b.elements[d].type=="checkbox"){var a=b.elements[d].value;if((a.substring(0,3))=="0_0"){b.elements[d].checked=false}else{b.elements[d].checked=true}}}}function updateUrlForSA(c){$target=$(c.target);if(!c.target){$target=$(c.srcElement)}if(!$target.is(".saLinkUrlComplete")){var h=$target.parent();var n="1";var f=h.attr("id");if(f){var j="searchAidText";var l=f.indexOf(j);if(l>-1){n=f.substring(l+j.length,f.length)}}var d=$target.attr("href");var k=d.indexOf("TS=");var g=d.substring(k,d.length);var m=g.indexOf("&");var e="TS="+getTSlimit();var b=g.substring(0,m);var a=d.replace(b,e);$target.attr("href",a);$target.addClass("saLinkUrlComplete")}}function checkPlaceholderInForm(a){if(!$.fn.placeholder.input){var b=document.forms[a];$(b).trigger("submit.placeholder");saveForm(a)}};