(function(){var n=this,aa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ba=function(a,b,c){return a.call.apply(a.bind,arguments)},ca=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,e);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},p=function(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?
ba:ca;return p.apply(null,arguments)};var x=(new Date).getTime();var z=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a},A=function(a,b){return/^true$/.test(a)?!0:/^false$/.test(a)?!1:b},da=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,ea=function(a,b){if(!a)return b;var c=a.match(da);return c?c[0]:b};var fa=z("0.15"),ga=z("0.01"),ha=z("0.001"),ia=z("0.001"),ja=z("0.2"),ka=A("true",!0),la=z(""),ma=z("0.001");var na=A("false",!1),oa=A("true",!1);var pa=function(a,b,c){if(!a)return null;for(var e=0;e<a.length;++e)if((a[e].ad_slot||b)==b&&(a[e].ad_tag_origin||c)==c)return a[e];return null};var B=function(a){B[" "](a);return a};B[" "]=function(){};var C=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{B(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(e){return!1}},D=function(a,b){if(!(1E-4>Math.random())){var c=Math.random();if(c<b){try{var e=new Uint16Array(1);window.crypto.getRandomValues(e);c=e[0]/65536}catch(d){c=Math.random()}return a[Math.floor(c*a.length)]}}return null};var qa=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var e;a!=e;)e=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(d){b=c}}return b};var E=document,G=window,H,ra=null,I=E.getElementsByTagName("script");I&&I.length&&(ra=I[I.length-1]);H=ra;var sa=/&/g,ta=/</g,ua=/>/g,va=/"/g,wa=/'/g,xa=/\x00/g,J={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\"},K={"'":"\\'"};var L=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(null,a[c],c,a)},M=function(a){return!!a&&"function"==typeof a&&!!a.call},ya=function(a,b){if(!(2>arguments.length))for(var c=1,e=arguments.length;c<e;++c)a.push(arguments[c])},za=function(a,b){a.addEventListener?a.addEventListener("load",b,!1):a.attachEvent&&a.attachEvent("onload",b)},Aa=function(a){"google_onload_fired"in a||(a.google_onload_fired=!1,za(a,function(){a.google_onload_fired=!0}))},Ba=function(){var a=
G.google_unique_id;return"number"==typeof a?a:0},Ca=function(a){var b=a.length;if(0==b)return 0;for(var c=305419896,e=0;e<b;e++)c^=(c<<5)+(c>>2)+a.charCodeAt(e)&4294967295;return 0<c?c:4294967296+c};var N=!0,Da={},Ga=function(a,b,c,e){var d=Ea,g,f=N;try{g=b()}catch(k){try{var h=qa(k);b="";k.fileName&&(b=k.fileName);var m=-1;k.lineNumber&&(m=k.lineNumber);f=d(a,h,b,m,c)}catch(l){try{var q=qa(l);a="";l.fileName&&(a=l.fileName);c=-1;l.lineNumber&&(c=l.lineNumber);Ea("pAR",q,a,c,void 0,void 0)}catch(w){Fa({context:"mRE",msg:w.toString()+"\n"+(w.stack||"")},void 0)}}if(!f)throw k;}finally{if(e)try{e()}catch(v){}}return g},Ea=function(a,b,c,e,d,g){var f={};if(d)try{d(f)}catch(k){}f.context=a;f.msg=
b.substring(0,512);c&&(f.file=c);0<e&&(f.line=e.toString());f.url=E.URL.substring(0,512);f.ref=E.referrer.substring(0,512);Ha(f);Fa(f,g);return N},Fa=function(a,b){try{if(Math.random()<(b||.01)){var c="/pagead/gen_204?id=jserror"+Ia(a),e="http"+("http:"==G.location.protocol?"":"s")+"://pagead2.googlesyndication.com"+c,e=e.substring(0,2E3);G.google_image_requests||(G.google_image_requests=[]);var d=G.document.createElement("img");d.src=e;G.google_image_requests.push(d)}}catch(g){}},Ha=function(a){var b=
a||{};L(Da,function(a,e){b[e]=G[a]})},Ja=function(a,b){return function(){var c=arguments;return Ga(a,function(){return b.apply(void 0,c)},void 0,void 0)}},O=function(a,b){return Ja(a,b)},Ia=function(a){var b="";L(a,function(a,e){if(0===a||a)b+="&"+e+"="+("function"==typeof encodeURIComponent?encodeURIComponent(a):escape(a))});return b};N=!na;Da={client:"google_ad_client",format:"google_ad_format",slotname:"google_ad_slot",output:"google_ad_output",ad_type:"google_ad_type",async_oa:"google_async_for_oa_experiment",dimpr:"google_always_use_delayed_impressions_experiment",peri:"google_top_experiment",pse:"google_pstate_expt"};var Ka=!!window.google_async_iframe_id,La=/MSIE [2-7]|PlayStation|Gecko\/20090226|Android 2\.|Opera/i,Ma=/Android/;var P=null,Na=function(){if(!P){for(var a=window,b=a,c=0;a&&a!=a.parent;)if(a=a.parent,c++,C(a))b=a;else break;P=b}return P};var Q=function(a,b,c){c||(c=oa?"https":"http");return[c,"://",a,b].join("")};var Oa=function(){},Ta=function(a,b,c){switch(typeof b){case "string":Pa(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(b instanceof Array){var e=b.length;c.push("[");for(var d="",g=0;g<e;g++)c.push(d),Ta(a,b[g],c),d=",";c.push("]");break}c.push("{");e="";for(d in b)b.hasOwnProperty(d)&&(g=b[d],"function"!=typeof g&&(c.push(e),Pa(d,c),c.push(":"),Ta(a,g,c),
e=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},Ua={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Va=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,Pa=function(a,b){b.push('"');b.push(a.replace(Va,function(a){if(a in Ua)return Ua[a];var b=a.charCodeAt(0),d="\\u";16>b?d+="000":256>b?d+="00":4096>b&&(d+="0");return Ua[a]=d+b.toString(16)}));b.push('"')};var R;a:{var Wa=n.navigator;if(Wa){var Xa=Wa.userAgent;if(Xa){R=Xa;break a}}R=""}var S=function(a){return-1!=R.indexOf(a)};var Ya=S("Opera")||S("OPR"),Za=S("Edge")||S("Trident")||S("MSIE"),$a=S("Gecko")&&!(-1!=R.toLowerCase().indexOf("webkit")&&!S("Edge"))&&!(S("Trident")||S("MSIE"))&&!S("Edge"),ab=-1!=R.toLowerCase().indexOf("webkit")&&!S("Edge"),bb=function(){var a=R;if($a)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Za&&S("Edge"))return/Edge\/([\d\.]+)/.exec(a);if(Za)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ab)return/WebKit\/(\S+)/.exec(a)};
(function(){if(Ya&&n.opera){var a=n.opera.version;return"function"==aa(a)?a():a}var a="",b=bb();b&&(a=b?b[1]:"");return Za&&!S("Edge")&&(b=(b=n.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var T=null,cb=$a||ab||Ya||"function"==typeof n.atob;var U="google_ad_block google_ad_channel google_ad_client google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_modifications google_ad_output google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_unit_key google_ad_unit_key_2 google_ad_width google_adtest google_allow_expandable_ads google_alternate_ad_url google_alternate_color google_analytics_domain_name google_analytics_uacct google_analytics_url_parameters google_available_width google_captcha_token google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_container_id google_content_recommendation_ui_type google_contents google_core_dbp google_country google_cpm google_ctr_threshold google_cust_age google_cust_ch google_cust_criteria google_cust_gender google_cust_id google_cust_interests google_cust_job google_cust_l google_cust_lh google_cust_u_url google_disable_video_autoplay google_ed google_eids google_enable_content_recommendations google_enable_ose google_enable_ose_periscope google_encoding google_floating_ad_position google_font_face google_font_size google_frame_id google_gl google_hints google_image_size google_kw google_kw_type google_lact google_language google_loeid google_max_num_ads google_max_radlink_len google_mtl google_nofo google_num_radlinks google_num_radlinks_per_unit google_only_ads_with_video google_only_pyv_ads google_only_userchoice_ads google_override_format google_page_url google_pgb_reactive google_previous_watch google_previous_searches google_referrer_url google_region google_responsive_formats google_reuse_colors google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_sc_id google_scs google_source_type google_sui google_skip google_tag_for_child_directed_treatment google_tag_info google_tag_origin google_targeting google_tdsma google_tfs google_tl google_ui_features google_video_doc_id google_video_product_type google_video_url_to_fetch google_with_pyv_ads google_yt_pt google_yt_up".split(" "),
db={google_ad_modifications:!0,google_analytics_domain_name:!0,google_analytics_uacct:!0},gb=function(a){var b;try{a:{for(var c=a.document.getElementsByTagName("script"),e=c.length-1;0<=e;e--){var d=c[e];if(!d.google_parsed_script){d.google_parsed_script=!0;var g;b:{var f=d.innerText||d.innerHTML;if(f){var k=f.replace(/^\s+/,"").split(/[\r\n]/,1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/);if(k&&/google_ad_client/.test(k[1])){g=k[1];break b}}g=null}if(g){b=g;break a}}}b=null}}catch(h){return-1}if(!b)return 1;
try{for(var c=/(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm,e={},m;m=c.exec(b);)e[m[1]]=eb(m[2]);fb(e,a)}catch(l){return-2}return null==a.google_ad_client?2:3},hb=function(a){a.google_page_url&&(a.google_page_url=String(a.google_page_url));var b=[];L(a,function(a,e){if(null!=a){var d;try{var g=[];Ta(new Oa,a,g);d=g.join("")}catch(f){}d&&(d=d.replace(/\\|\//,"\\$&"),ya(b,e,"=",d,";"))}});return b.join("")},ib=function(a){for(var b=0,c=U.length;b<c;b++){var e=U[b];db[e]||(a[e]=null)}},eb=function(a){switch(a){case "true":return!0;
case "false":return!1;case "null":return null;case "undefined":break;default:try{var b=a.match(/^(?:'(.*)'|"(.*)")$/);if(b)return b[1]||b[2]||"";if(/^[-+]?\d*(\.\d+)?$/.test(a)){var c=parseFloat(a);return c===c?c:void 0}}catch(e){}}},fb=function(a,b){for(var c=0;c<U.length;c++){var e=U[c];null!=a[e]&&(b[e]=a[e])}};var V=null;var W=function(a){this.j=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},upd:p(this.D,this)});this.A=a.google_iframe_oncopy},jb;var X="var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
/[\x00&<>"']/.test(X)&&(-1!=X.indexOf("&")&&(X=X.replace(sa,"&amp;")),-1!=X.indexOf("<")&&(X=X.replace(ta,"&lt;")),-1!=X.indexOf(">")&&(X=X.replace(ua,"&gt;")),-1!=X.indexOf('"')&&(X=X.replace(va,"&quot;")),-1!=X.indexOf("'")&&(X=X.replace(wa,"&#39;")),-1!=X.indexOf("\x00")&&(X=X.replace(xa,"&#0;")));jb=X;W.prototype.set=function(a,b){this.A.handlers[a]=b;this.j.addEventListener&&this.j.addEventListener("load",p(this.s,this,a),!1)};
W.prototype.s=function(a){a=this.j.document.getElementById(a);try{var b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()}catch(c){}};W.prototype.D=function(a,b){var c=kb("rx",a),e;a:{if(a&&(e=a.match("dt=([^&]+)"))&&2==e.length){e=e[1];break a}e=""}e=(new Date).getTime()-e;c=c.replace(/&dtd=(\d+|M)/,"&dtd="+(1E4>e?e+"":"M"));this.set(b,c);return c};var kb=function(a,b){var c=new RegExp("\\b"+a+"=(\\d+)"),e=c.exec(b);e&&(b=b.replace(c,a+"="+(+e[1]+1||1)));return b};var lb=function(a){if(!a)return"";(a=a.toLowerCase())&&"ca-"!=a.substring(0,3)&&(a="ca-"+a);return a};var mb={"120x90":!0,"160x90":!0,"180x90":!0,"200x90":!0,"468x15":!0,"728x15":!0};var Y,Z=function(a){this.l=[];this.j=a||window;this.i=0;this.k=null;this.q=0},nb=function(a,b){this.t=a;this.F=b};Z.prototype.r=function(a,b){0!=this.i||0!=this.l.length||b&&b!=window?this.n(a,b):(this.i=2,this.p(new nb(a,window)))};Z.prototype.n=function(a,b){this.l.push(new nb(a,b||this.j));ob(this)};Z.prototype.u=function(a){this.i=1;if(a){var b=O("sjr::timeout",p(this.o,this,!0));this.k=this.j.setTimeout(b,a)}};
Z.prototype.o=function(a){a&&++this.q;1==this.i&&(null!=this.k&&(this.j.clearTimeout(this.k),this.k=null),this.i=0);ob(this)};Z.prototype.w=function(){return!(!window||!Array)};Z.prototype.B=function(){return this.q};Z.prototype.nq=Z.prototype.r;Z.prototype.nqa=Z.prototype.n;Z.prototype.al=Z.prototype.u;Z.prototype.rl=Z.prototype.o;Z.prototype.sz=Z.prototype.w;Z.prototype.tc=Z.prototype.B;var ob=function(a){var b=O("sjr::tryrun",p(a.C,a));a.j.setTimeout(b,0)};
Z.prototype.C=function(){if(0==this.i&&this.l.length){var a=this.l.shift();this.i=2;var b=O("sjr::run",p(this.p,this,a));a.F.setTimeout(b,0);ob(this)}};Z.prototype.p=function(a){this.i=0;a.t()};
var pb=function(a){try{return a.sz()}catch(b){return!1}},qb=function(a){return!!a&&("object"==typeof a||"function"==typeof a)&&pb(a)&&M(a.nq)&&M(a.nqa)&&M(a.al)&&M(a.rl)},rb=function(){if(Y&&pb(Y))return Y;var a=Na(),b=a.google_jobrunner;return qb(b)?Y=b:a.google_jobrunner=Y=new Z(a)},sb=function(a,b){rb().nq(a,b)},tb=function(a,b){rb().nqa(a,b)};var ub=Ka?1==Ba():!Ba(),vb=function(){var a=B("script"),b;b=ea("","pagead2.googlesyndication.com");return["<",a,' src="',Q(b,"/pagead/js/r20150421/r20150409/show_ads_impl.js",""),'"></',a,">"].join("")},wb=function(a,b,c,e){return function(){var d=!1;e&&rb().al(3E4);var g=a.document.getElementById(b);g&&!C(g.contentWindow)&&3==
a.google_top_js_status&&(a.google_top_js_status=6);try{if(C(a.document.getElementById(b).contentWindow)){var f=a.document.getElementById(b).contentWindow,k=f.document;k.body&&k.body.firstChild||(k.open(),f.google_async_iframe_close=!0,k.write(c))}else{var h=a.document.getElementById(b).contentWindow,m;g=c;g=String(g);if(g.quote)m=g.quote();else{f=['"'];for(k=0;k<g.length;k++){var l=g.charAt(k),q=l.charCodeAt(0),w=k+1,v;if(!(v=J[l])){var r;if(31<q&&127>q)r=l;else{var u=l;if(u in K)r=K[u];else if(u in
J)r=K[u]=J[u];else{var t=u,y=u.charCodeAt(0);if(31<y&&127>y)t=u;else{if(256>y){if(t="\\x",16>y||256<y)t+="0"}else t="\\u",4096>y&&(t+="0");t+=y.toString(16).toUpperCase()}r=K[u]=t}}v=r}f[w]=v}f.push('"');m=f.join("")}h.location.replace("javascript:"+m)}d=!0}catch(F){h=Na().google_jobrunner,qb(h)&&h.rl()}d&&(d=kb("google_async_rrc",c),(new W(a)).set(b,wb(a,b,d,!1)))}},xb=function(a){var b=["<iframe"];L(a,function(a,e){null!=a&&b.push(" "+e+'="'+a+'"')});b.push("></iframe>");return b.join("")},yb=function(a){var b;
if(b=ub){if(!V)a:{var c=[G.top];b=[];for(var e=0,d;d=c[e++];){b.push(d);try{if(d.frames)for(var g=d.frames.length,f=0;f<g&&1024>c.length;++f)c.push(d.frames[f])}catch(k){}}for(g=0;g<b.length;g++)try{var h=b[g].frames.google_esf;if(h){V=h;break a}}catch(m){}V=null}b=!V}return b?(h={style:"display:none"},h["data-ad-client"]=lb(a),h.id="google_esf",h.name="google_esf",a=Q(ea("","googleads.g.doubleclick.net"),"/pagead/html/r20150421/r20150409/zrt_lookup.html"),
h.src=a,xb(h)):""},Ab=function(a,b,c){var e=b.google_ad_output,d=b.google_ad_format;d||"html"!=e&&null!=e||(d=b.google_ad_width+"x"+b.google_ad_height,c&&(d+="_as"));c=!b.google_ad_slot||zb(b);d=d&&c?d.toLowerCase():"";b.google_ad_format=d;d=[b.google_ad_slot,b.google_ad_format,b.google_ad_type,b.google_ad_width,b.google_ad_height];c=[];for(var e=0,g=H.parentElement;g&&25>e;g=g.parentNode,++e)c.push(9!=g.nodeType&&g.id||"");(c=c.join())&&d.push(c);b.google_ad_unit_key=Ca(d.join(":")).toString();d=
a.google_adk2_experiment=a.google_adk2_experiment||D(["C","E"],ia)||"N";if("E"==d){d=H;c=[];for(e=0;d&&25>e;++e){var g="",g=(g=9!=d.nodeType&&d.id)?"/"+g:"",f;a:{if(d&&d.nodeName&&d.parentElement){f=d.nodeName.toString().toLowerCase();for(var k=d.parentElement.childNodes,h=0,m=0;m<k.length;++m){var l=k[m];if(l.nodeName&&l.nodeName.toString().toLowerCase()==f){if(d==l){f="."+h;break a}++h}}}f=""}c.push((d.nodeName&&d.nodeName.toString().toLowerCase())+g+f);d=d.parentElement}d=c.join()+":";c=[];if(a)try{for(var q=
a.parent,e=0;q&&q!=a&&25>e;++e){for(var w=q.frames,g=0;g<w.length;++g)if(a==w[g]){c.push(g);break}a=q;q=a.parent}}catch(v){}b.google_ad_unit_key_2=Ca(d+c.join()).toString()}else"C"==d&&(b.google_ad_unit_key_2="ctrl")},Bb=Math.floor(1E6*Math.random()),Cb=function(a){var b;try{b={};for(var c=a.data.split("\n"),e=0;e<c.length;e++){var d=c[e].indexOf("=");-1!=d&&(b[c[e].substr(0,d)]=c[e].substr(d+1))}}catch(g){}c=b[3];if(b[1]==Bb&&(window.google_top_js_status=4,a.source==top&&0==c.indexOf(a.origin)&&
(window.google_top_values=b,window.google_top_js_status=5),window.google_top_js_callbacks)){for(a=0;a<window.google_top_js_callbacks.length;a++)window.google_top_js_callbacks[a]();window.google_top_js_callbacks.length=0}},zb=function(a){return a.google_override_format||!mb[a.google_ad_width+"x"+a.google_ad_height]&&"aa"==a.google_loader_used};Ga("sa::main",function(){var a=window,b;var c=a.google_ad_slot;b=a.google_ad_modifications;if(!b||pa(b.ad_whitelist,c,void 0))b=null;else{var e=b.space_collapsing||"none";b=(c=pa(b.ad_blacklist,c))?{m:!0,v:c.space_collapsing||e}:b.remove_ads_by_default?{m:!0,v:e}:null}if(b&&b.m)ib(a);else{Aa(a);if(!window.google_top_experiment&&!window.google_top_js_status)if(b=window,2!==(b.top==b?0:C(b.top)?1:2))window.google_top_js_status=0;else if(top.postMessage){var d;try{d=G.top.frames.google_top_static_frame?
!0:!1}catch(g){d=!1}if(d){if(window.google_top_experiment=D(["jp_c","jp_zl","jp_wfpmr","jp_zlt","jp_wnt"],fa),"jp_c"!==window.google_top_experiment){d=window;d.addEventListener?d.addEventListener("message",Cb,!1):d.attachEvent&&d.attachEvent("onmessage",Cb);window.google_top_js_status=3;d={0:"google_loc_request",1:Bb};b=[];for(var f in d)b.push(f+"="+d[f]);top.postMessage(b.join("\n"),"*")}}else window.google_top_js_status=2}else window.google_top_js_status=1;f=window.google_ad_output;void 0!==window.google_always_use_delayed_impressions_experiment||
f&&"html"!=f||(window.google_always_use_delayed_impressions_experiment=D(["C","E"],ha));(f=!1===window.google_enable_async)||(f=navigator.userAgent,La.test(f)?f=!1:(void 0!==window.google_async_for_oa_experiment||!Ma.test(navigator.userAgent)||La.test(navigator.userAgent)||(window.google_async_for_oa_experiment=D(["E","C"],ga)),f=Ma.test(f)?"E"===window.google_async_for_oa_experiment:!0),f=!f||window.google_container_id||window.google_ad_output&&"html"!=window.google_ad_output);if(f)a.google_loader_used=
"sb",a.google_start_time=x,Ab(a,a),document.write(yb(a.google_ad_client)+vb());else{ub&&(d=a.google_ad_client,f=navigator,ka&&a&&d&&f&&(b=a.document,f=b.createElement("script"),d=lb(d),f.async=!0,f.type="text/javascript",f.src=Q("pagead2.googlesyndication.com","/pub-config/"+d+".js"),d=b.getElementsByTagName("script")[0],d.parentNode.insertBefore(f,d)));a.google_unique_id?++a.google_unique_id:a.google_unique_id=1;d={};null==a.google_ad_client&&("google_pubvars_recovery_experiment"in a?f=a.google_pubvars_recovery_experiment:
(f=D(["C","E"],la),a.google_pubvars_recovery_experiment=f),d.google_pubvars_recovery_experiment=f,"E"==f&&(d.google_pubvars_recovery_progress=gb(a)));fb(a,d);d.google_loader_used="sa";ib(a);f=B("script");b={};e=d.google_ad_height;b.width='"'+d.google_ad_width+'"';b.height='"'+e+'"';b.frameborder='"0"';b.marginwidth='"0"';b.marginheight='"0"';b.vspace='"0"';b.hspace='"0"';b.allowtransparency='"true"';b.scrolling='"no"';b.allowfullscreen='"true"';b.onload='"'+jb+'"';for(var k,e=a.document,c=b.id,h=
0;!c||e.getElementById(c);)c="aswift_"+h++;b.id=c;b.name=c;var h=d.google_ad_width,m=d.google_ad_height,c=["<iframe"];for(k in b)b.hasOwnProperty(k)&&ya(c,k+"="+b[k]);c.push('style="left:0;position:absolute;top:0;"');c.push("></iframe>");k=b.id;h="border:none;height:"+m+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+h+"px;background-color:transparent";e.write(['<ins id="',k+"_expand",'" style="display:inline-table;',h,'"><ins id="',k+"_anchor",'" style="display:block;',h,'">',
c.join(" "),"</ins></ins>"].join(""));k=b.id;b=zb(d)?D(["c","e"],ja):null;Ab(a,d,"e"==b);e=hb(d);c=null;h=D(["C","E"],ma);if("E"==h)a:{try{if(window.JSON&&window.JSON.stringify&&window.encodeURIComponent){var l=encodeURIComponent(JSON.stringify(d)),q;if(cb)q=n.btoa(l);else{for(var h=[],w=m=0;w<l.length;w++){for(var v=l.charCodeAt(w);255<v;)h[m++]=v&255,v>>=8;h[m++]=v}var r=aa(h);if("array"!=r&&("object"!=r||"number"!=typeof h.length))throw Error("encodeByteArray takes an array as a parameter");if(!T)for(T=
{},l=0;65>l;l++)T[l]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(l);l=T;v=[];for(r=0;r<h.length;r+=3){var u=h[r],t=r+1<h.length,y=t?h[r+1]:0,F=r+2<h.length,Qa=F?h[r+2]:0,m=u>>2,w=(u&3)<<4|y>>4,Ra=(y&15)<<2|Qa>>6,Sa=Qa&63;F||(Sa=64,t||(Ra=64));v.push(l[m],l[w],l[Ra],l[Sa])}q=v.join("")}c=q;break a}}catch(Db){}c=""}else"C"==h&&(c="{C}");q=yb(d.google_ad_client);u=(new Date).getTime();t=a.google_top_experiment;if(y=a.google_async_for_oa_experiment)a.google_async_for_oa_experiment=
void 0;F=a.google_always_use_delayed_impressions_experiment;q=["<!doctype html><html><body>",q,"<",f,">",e,"google_show_ads_impl=true;google_unique_id=",a.google_unique_id,';google_async_iframe_id="',k,'";google_start_time=',x,";",c?'google_pub_vars = "'+c+'";':"",t?'google_top_experiment="'+t+'";':"",y?'google_async_for_oa_experiment="'+y+'";':"",F?'google_always_use_delayed_impressions_experiment="'+F+'";':"",b?'google_append_as_for_format_override="'+b+'";':"","google_bpp=",u>x?u-x:1,";google_async_rrc=0;</",
f,">",vb(),"</body></html>"].join("");(a.document.getElementById(k)?sb:tb)(wb(a,k,q,!0))}}});})();
