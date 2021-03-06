/*src/js/jquery-1.7.2.min.js*/
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cu(a){if(!cj[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),b.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write((f.support.boxModel?"<!doctype html>":"")+"<html><body>"),cl.close();d=cl.createElement(a),cl.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ck)}cj[a]=e}return cj[a]}function ct(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function cs(){cq=b}function cr(){setTimeout(cs,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bD.test(a)?d(a,e):b_(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&f.type(b)==="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bZ(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bS,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bZ(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bZ(a,c,d,e,"*",g));return l}function bY(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bO),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bB(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?1:0,g=4;if(d>0){if(c!=="border")for(;e<g;e+=2)c||(d-=parseFloat(f.css(a,"padding"+bx[e]))||0),c==="margin"?d+=parseFloat(f.css(a,c+bx[e]))||0:d-=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0;return d+"px"}d=by(a,b);if(d<0||d==null)d=a.style[b];if(bt.test(d))return d;d=parseFloat(d)||0;if(c)for(;e<g;e+=2)d+=parseFloat(f.css(a,"padding"+bx[e]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+bx[e]))||0);return d+"px"}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;b.nodeType===1&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?b.outerHTML=a.outerHTML:c!=="input"||a.type!=="checkbox"&&a.type!=="radio"?c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(f.expando),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c,i[c][d])}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?+d:j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){if(typeof c!="string"||!c)return null;var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h,i){var j,k=d==null,l=0,m=a.length;if(d&&typeof d=="object"){for(l in d)e.access(a,c,l,d[l],1,h,f);g=1}else if(f!==b){j=i===b&&e.isFunction(f),k&&(j?(j=c,c=function(a,b,c){return j.call(e(a),c)}):(c.call(a,f),c=null));if(c)for(;l<m;l++)c(a[l],d,j?f.call(a[l],l,c(a[l],d)):f,i);g=1}return g?a:k?c.call(a):m?c(a[0],d):h},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m,n=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?n(g):h==="function"&&(!a.unique||!p.has(g))&&c.push(g)},o=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,j=!0,m=k||0,k=0,l=c.length;for(;c&&m<l;m++)if(c[m].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}j=!1,c&&(a.once?e===!0?p.disable():c=[]:d&&d.length&&(e=d.shift(),p.fireWith(e[0],e[1])))},p={add:function(){if(c){var a=c.length;n(arguments),j?l=c.length:e&&e!==!0&&(k=a,o(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){j&&f<=l&&(l--,f<=m&&m--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&p.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(j?a.once||d.push([b,c]):(!a.once||!e)&&o(b,c));return this},fire:function(){p.fireWith(this,arguments);return this},fired:function(){return!!i}};return p};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p=c.createElement("div"),q=c.documentElement;p.setAttribute("className","t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=p.getElementsByTagName("*"),e=p.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=p.getElementsByTagName("input")[0],b={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:p.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},f.boxModel=b.boxModel=c.compatMode==="CSS1Compat",i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete p.test}catch(r){b.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",function(){b.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),i.setAttribute("name","t"),p.appendChild(i),j=c.createDocumentFragment(),j.appendChild(p.lastChild),b.checkClone=j.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,j.removeChild(i),j.appendChild(p);if(p.attachEvent)for(n in{submit:1,change:1,focusin:1})m="on"+n,o=m in p,o||(p.setAttribute(m,"return;"),o=typeof p[m]=="function"),b[n+"Bubbles"]=o;j.removeChild(p),j=g=h=p=i=null,f(function(){var d,e,g,h,i,j,l,m,n,q,r,s,t,u=c.getElementsByTagName("body")[0];!u||(m=1,t="padding:0;margin:0;border:",r="position:absolute;top:0;left:0;width:1px;height:1px;",s=t+"0;visibility:hidden;",n="style='"+r+t+"5px solid #000;",q="<div "+n+"display:block;'><div style='"+t+"0;display:block;overflow:hidden;'></div></div>"+"<table "+n+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",d=c.createElement("div"),d.style.cssText=s+"width:0;height:0;position:static;top:0;margin-top:"+m+"px",u.insertBefore(d,u.firstChild),p=c.createElement("div"),d.appendChild(p),p.innerHTML="<table><tr><td style='"+t+"0;display:none'></td><td>t</td></tr></table>",k=p.getElementsByTagName("td"),o=k[0].offsetHeight===0,k[0].style.display="",k[1].style.display="none",b.reliableHiddenOffsets=o&&k[0].offsetHeight===0,a.getComputedStyle&&(p.innerHTML="",l=c.createElement("div"),l.style.width="0",l.style.marginRight="0",p.style.width="2px",p.appendChild(l),b.reliableMarginRight=(parseInt((a.getComputedStyle(l,null)||{marginRight:0}).marginRight,10)||0)===0),typeof p.style.zoom!="undefined"&&(p.innerHTML="",p.style.width=p.style.padding="1px",p.style.border=0,p.style.overflow="hidden",p.style.display="inline",p.style.zoom=1,b.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.style.overflow="visible",p.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=p.offsetWidth!==3),p.style.cssText=r+s,p.innerHTML=q,e=p.firstChild,g=e.firstChild,i=e.nextSibling.firstChild.firstChild,j={doesNotAddBorder:g.offsetTop!==5,doesAddBorderForTableAndCells:i.offsetTop===5},g.style.position="fixed",g.style.top="20px",j.fixedPosition=g.offsetTop===20||g.offsetTop===15,g.style.position=g.style.top="",e.style.overflow="hidden",e.style.position="relative",j.subtractsBorderForOverflowNotVisible=g.offsetTop===-5,j.doesNotIncludeMarginInBodyOffset=u.offsetTop!==m,a.getComputedStyle&&(p.style.marginTop="1%",b.pixelMargin=(a.getComputedStyle(p,null)||{marginTop:0}).marginTop!=="1%"),typeof d.style.zoom!="undefined"&&(d.style.zoom=1),u.removeChild(d),l=p=d=null,f.extend(b,j))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h,i,j=this[0],k=0,m=null;if(a===b){if(this.length){m=f.data(j);if(j.nodeType===1&&!f._data(j,"parsedAttrs")){g=j.attributes;for(i=g.length;k<i;k++)h=g[k].name,h.indexOf("data-")===0&&(h=f.camelCase(h.substring(5)),l(j,h,m[h]));f._data(j,"parsedAttrs",!0)}}return m}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!";return f.access(this,function(c){if(c===b){m=this.triggerHandler("getData"+e,[d[0]]),m===b&&j&&(m=f.data(j,a),m=l(j,a,m));return m===b&&d[1]?this.data(d[0]):m}d[1]=c,this.each(function(){var b=f(this);b.triggerHandler("setData"+e,d),f.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1)},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){var d=2;typeof a!="string"&&(c=a,a="fx",d--);if(arguments.length<d)return f.queue(this[0],a);return c===b?this:this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise(c)}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,f.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,f.prop,a,b,arguments.length>1)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.type]||f.valHooks[g.nodeName.toLowerCase()];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h,i=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;i<g;i++)e=d[i],e&&(c=f.propFix[e]||e,h=u.test(e),h||f.attr(a,e,""),a.removeAttribute(v?e:c),h&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0,coords:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/(?:^|\s)hover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(
a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler,g=p.selector),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:g&&G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=f.event.special[c.type]||{},j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=this;if(!i.preDispatch||i.preDispatch.call(this,c)!==!1){if(e&&(!c.button||c.type!=="click")){n=f(this),n.context=this.ownerDocument||this;for(m=c.target;m!=this;m=m.parentNode||this)if(m.disabled!==!0){p={},r=[],n[0]=m;for(k=0;k<e;k++)s=d[k],t=s.selector,p[t]===b&&(p[t]=s.quick?H(m,s.quick):n.is(t)),p[t]&&r.push(s);r.length&&j.push({elem:m,matches:r})}}d.length>e&&j.push({elem:this,matches:d.slice(e)});for(k=0;k<j.length&&!c.isPropagationStopped();k++){q=j[k],c.currentTarget=q.elem;for(l=0;l<q.matches.length&&!c.isImmediatePropagationStopped();l++){s=q.matches[l];if(h||!c.namespace&&!s.namespace||c.namespace_re&&c.namespace_re.test(s.namespace))c.data=s.data,c.handleObj=s,o=((f.event.special[s.origType]||{}).handle||s.handler).apply(q.elem,g),o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()))}}i.postDispatch&&i.postDispatch.call(this,c);return c.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),d._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9||d===11){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));o.match.globalPOS=p;var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.globalPOS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")[\\s/>]","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){return f.access(this,function(a){return a===b?f.text(this):this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f
.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){return f.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(f.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(g){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,function(a,b){b.src?f.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||f.isXMLDoc(a)||!bc.test("<"+a.nodeName+">")?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g,h,i,j=[];b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);for(var k=0,l;(l=a[k])!=null;k++){typeof l=="number"&&(l+="");if(!l)continue;if(typeof l=="string")if(!_.test(l))l=b.createTextNode(l);else{l=l.replace(Y,"<$1></$2>");var m=(Z.exec(l)||["",""])[1].toLowerCase(),n=bg[m]||bg._default,o=n[0],p=b.createElement("div"),q=bh.childNodes,r;b===c?bh.appendChild(p):U(b).appendChild(p),p.innerHTML=n[1]+l+n[2];while(o--)p=p.lastChild;if(!f.support.tbody){var s=$.test(l),t=m==="table"&&!s?p.firstChild&&p.firstChild.childNodes:n[1]==="<table>"&&!s?p.childNodes:[];for(i=t.length-1;i>=0;--i)f.nodeName(t[i],"tbody")&&!t[i].childNodes.length&&t[i].parentNode.removeChild(t[i])}!f.support.leadingWhitespace&&X.test(l)&&p.insertBefore(b.createTextNode(X.exec(l)[0]),p.firstChild),l=p.childNodes,p&&(p.parentNode.removeChild(p),q.length>0&&(r=q[q.length-1],r&&r.parentNode&&r.parentNode.removeChild(r)))}var u;if(!f.support.appendChecked)if(l[0]&&typeof (u=l.length)=="number")for(i=0;i<u;i++)bn(l[i]);else bn(l);l.nodeType?j.push(l):j=f.merge(j,l)}if(d){g=function(a){return!a.type||be.test(a.type)};for(k=0;j[k];k++){h=j[k];if(e&&f.nodeName(h,"script")&&(!h.type||be.test(h.type)))e.push(h.parentNode?h.parentNode.removeChild(h):h);else{if(h.nodeType===1){var v=f.grep(h.getElementsByTagName("script"),g);j.splice.apply(j,[k+1,0].concat(v))}d.appendChild(h)}}}return j},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bp=/alpha\([^)]*\)/i,bq=/opacity=([^)]*)/,br=/([A-Z]|^ms)/g,bs=/^[\-+]?(?:\d*\.)?\d+$/i,bt=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,bu=/^([\-+])=([\-+.\de]+)/,bv=/^margin/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Top","Right","Bottom","Left"],by,bz,bA;f.fn.css=function(a,c){return f.access(this,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)},a,c,arguments.length>1)},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=by(a,"opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bu.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(by)return by(a,c)},swap:function(a,b,c){var d={},e,f;for(f in b)d[f]=a.style[f],a.style[f]=b[f];e=c.call(a);for(f in b)a.style[f]=d[f];return e}}),f.curCSS=f.css,c.defaultView&&c.defaultView.getComputedStyle&&(bz=function(a,b){var c,d,e,g,h=a.style;b=b.replace(br,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b))),!f.support.pixelMargin&&e&&bv.test(b)&&bt.test(c)&&(g=h.width,h.width=c,c=e.width,h.width=g);return c}),c.documentElement.currentStyle&&(bA=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f==null&&g&&(e=g[b])&&(f=e),bt.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),by=bz||bA,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0?bB(a,b,d):f.swap(a,bw,function(){return bB(a,b,d)})},set:function(a,b){return bs.test(b)?b+"px":b}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bq.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bp,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bp.test(g)?g.replace(bp,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){return f.swap(a,{display:"inline-block"},function(){return b?by(a,"margin-right"):a.style.marginRight})}})}),f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)}),f.each({margin:"",padding:"",border:"Width"},function(a,b){f.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bx[d]+b]=e[d]||e[d-2]||e[0];return f}}});var bC=/%20/g,bD=/\[\]$/,bE=/\r?\n/g,bF=/#.*$/,bG=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bH=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bI=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bJ=/^(?:GET|HEAD)$/,bK=/^\/\//,bL=/\?/,bM=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bN=/^(?:select|textarea)/i,bO=/\s+/,bP=/([?&])_=[^&]*/,bQ=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bR=f.fn.load,bS={},bT={},bU,bV,bW=["*/"]+["*"];try{bU=e.href}catch(bX){bU=c.createElement("a"),bU.href="",bU=bU.href}bV=bQ.exec(bU.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bR)return bR.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bM,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bN.test(this.nodeName)||bH.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bE,"\r\n")}}):{name:b.name,value:c.replace(bE,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b$(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b$(a,b);return a},ajaxSettings:{url:bU,isLocal:bI.test(bV[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bW},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bY(bS),ajaxTransport:bY(bT),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?ca(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cb(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bG.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bF,"").replace(bK,bV[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bO),d.crossDomain==null&&(r=bQ.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bV[1]&&r[2]==bV[2]&&(r[3]||(r[1]==="http:"?80:443))==(bV[3]||(bV[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bZ(bS,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bJ.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bL.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bP,"$1_="+x);d.url=y+(y===d.url?(bL.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bW+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bZ(bT,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bC,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=typeof b.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n);try{m.text=h.responseText}catch(a){}try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(ct("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),(e===""&&f.css(d,"display")==="none"||!f.contains(d.ownerDocument.documentElement,d))&&f._data(d,"olddisplay",cu(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(ct("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(ct("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o,p,q;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]);if((k=f.cssHooks[g])&&"expand"in k){l=k.expand(a[g]),delete a[g];for(i in l)i in a||(a[i]=l[i])}}for(g in a){h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cu(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cm.test(h)?(q=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),q?(f._data(this,"toggle"+i,q==="show"?"hide":"show"),j[q]()):j[h]()):(m=cn.exec(h),n=j.cur(),m?(o=parseFloat(m[2]),p=m[3]||(f.cssNumber[i]?"":"px"),p!=="px"&&(f.style(this,i,(o||1)+p),n=(o||1)/j.cur()*n,f.style(this,i,n+p)),m[1]&&(o=(m[1]==="-="?-1:1)*o+n),j.custom(n,o,p)):j.custom(n,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:ct("show",1),slideUp:ct("hide",1),slideToggle:ct("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+.5}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cq||cr(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){f._data(e.elem,"fxshow"+e.prop)===b&&(e.options.hide?f._data(e.elem,"fxshow"+e.prop,e.start):e.options.show&&f._data(e.elem,"fxshow"+e.prop,e.end))},h()&&f.timers.push(h)&&!co&&(co=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cq||cr(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(cp.concat.apply([],cp),function(a,b){b.indexOf("margin")&&(f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)})}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cv,cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?cv=function(a,b,c,d){try{d=a.getBoundingClientRect()}catch(e){}if(!d||!f.contains(c,a))return d?{top:d.top,left:d.left}:{top:0,left:0};var g=b.body,h=cy(b),i=c.clientTop||g.clientTop||0,j=c.clientLeft||g.clientLeft||0,k=h.pageYOffset||f.support.boxModel&&c.scrollTop||g.scrollTop,l=h.pageXOffset||f.support.boxModel&&c.scrollLeft||g.scrollLeft,m=d.top+k-i,n=d.left+l-j;return{top:m,left:n}}:cv=function(a,b,c){var d,e=a.offsetParent,g=a,h=b.body,i=b.defaultView,j=i?i.getComputedStyle(a,null):a.currentStyle,k=a.offsetTop,l=a.offsetLeft;while((a=a.parentNode)&&a!==h&&a!==c){if(f.support.fixedPosition&&j.position==="fixed")break;d=i?i.getComputedStyle(a,null):a.currentStyle,k-=a.scrollTop,l-=a.scrollLeft,a===e&&(k+=a.offsetTop,l+=a.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(a.nodeName))&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),g=e,e=a.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),j=d}if(j.position==="relative"||j.position==="static")k+=h.offsetTop,l+=h.offsetLeft;f.support.fixedPosition&&j.position==="fixed"&&(k+=Math.max(c.scrollTop,h.scrollTop),l+=Math.max(c.scrollLeft,h.scrollLeft));return{top:k,left:l}},f.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){f.offset.setOffset(this,a,b)});var c=this[0],d=c&&c.ownerDocument;if(!d)return null;if(c===d.body)return f.offset.bodyOffset(c);return cv(c,d,d.documentElement)},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);f.fn[a]=function(e){return f.access(this,function(a,e,g){var h=cy(a);if(g===b)return h?c in h?h[c]:f.support.boxModel&&h.document.documentElement[e]||h.document.body[e]:a[e];h?h.scrollTo(d?f(h).scrollLeft():g,d?g:f(h).scrollTop()):a[e]=g},a,e,arguments.length,null)}}),f.each({Height:"height",Width:"width"},function(a,c){var d="client"+a,e="scroll"+a,g="offset"+a;f.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,c,"padding")):this[c]():null},f.fn["outer"+a]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,c,a?"margin":"border")):this[c]():null},f.fn[c]=function(a){return f.access(this,function(a,c,h){var i,j,k,l;if(f.isWindow(a)){i=a.document,j=i.documentElement[d];return f.support.boxModel&&j||i.body&&i.body[d]||j}if(a.nodeType===9){i=a.documentElement;if(i[d]>=i[e])return i[d];return Math.max(a.body[e],i[e],a.body[g],i[g])}if(h===b){k=f.css(a,c),l=parseFloat(k);return f.isNumeric(l)?l:k}f(a).css(c,h)},c,a,arguments.length,null)}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
/*src/js/jquery.easyui.min.js*/
﻿/**
 * jQuery EasyUI 1.3.1
 * 
 * Licensed under the GPL terms
 * To use it on other terms please contact us
 *
 * Copyright(c) 2009-2012 stworthy [ stworthy@gmail.com ] 
 * 
 */
(function($){
$.parser={auto:true,onComplete:function(_1){
},plugins:["draggable","droppable","resizable","pagination","linkbutton","menu","menubutton","splitbutton","progressbar","tree","combobox","combotree","combogrid","numberbox","validatebox","searchbox","numberspinner","timespinner","calendar","datebox","datetimebox","slider","layout","panel","datagrid","propertygrid","treegrid","tabs","accordion","window","dialog"],parse:function(_2){
var aa=[];
for(var i=0;i<$.parser.plugins.length;i++){
var _3=$.parser.plugins[i];
var r=$(".easyui-"+_3,_2);
if(r.length){
if(r[_3]){
r[_3]();
}else{
aa.push({name:_3,jq:r});
}
}
}
if(aa.length&&window.easyloader){
var _4=[];
for(var i=0;i<aa.length;i++){
_4.push(aa[i].name);
}
easyloader.load(_4,function(){
for(var i=0;i<aa.length;i++){
var _5=aa[i].name;
var jq=aa[i].jq;
jq[_5]();
}
$.parser.onComplete.call($.parser,_2);
});
}else{
$.parser.onComplete.call($.parser,_2);
}
},parseOptions:function(_6,_7){
var t=$(_6);
var _8={};
var s=$.trim(t.attr("data-options"));
if(s){
var _9=s.substring(0,1);
var _a=s.substring(s.length-1,1);
if(_9!="{"){
s="{"+s;
}
if(_a!="}"){
s=s+"}";
}
_8=(new Function("return "+s))();
}
if(_7){
var _b={};
for(var i=0;i<_7.length;i++){
var pp=_7[i];
if(typeof pp=="string"){
if(pp=="width"||pp=="height"||pp=="left"||pp=="top"){
_b[pp]=parseInt(_6.style[pp])||undefined;
}else{
_b[pp]=t.attr(pp);
}
}else{
for(var _c in pp){
var _d=pp[_c];
if(_d=="boolean"){
_b[_c]=t.attr(_c)?(t.attr(_c)=="true"):undefined;
}else{
if(_d=="number"){
_b[_c]=t.attr(_c)=="0"?0:parseFloat(t.attr(_c))||undefined;
}
}
}
}
}
$.extend(_8,_b);
}
return _8;
}};
$(function(){
if(!window.easyloader&&$.parser.auto){
$.parser.parse();
}
});
$.fn._outerWidth=function(_e){
if(_e==undefined){
if(this[0]==window){
return this.width()||document.body.clientWidth;
}
return this.outerWidth()||0;
}
return this.each(function(){
if(!$.support.boxModel&&$.browser.msie){
$(this).width(_e);
}else{
$(this).width(_e-($(this).outerWidth()-$(this).width()));
}
});
};
$.fn._outerHeight=function(_f){
if(_f==undefined){
if(this[0]==window){
return this.height()||document.body.clientHeight;
}
return this.outerHeight()||0;
}
return this.each(function(){
if(!$.support.boxModel&&$.browser.msie){
$(this).height(_f);
}else{
$(this).height(_f-($(this).outerHeight()-$(this).height()));
}
});
};
$.fn._scrollLeft=function(_10){
if(_10==undefined){
return this.scrollLeft();
}else{
return this.each(function(){
$(this).scrollLeft(_10);
});
}
};
$.fn._propAttr=$.fn.prop||$.fn.attr;
$.fn._fit=function(fit){
fit=fit==undefined?true:fit;
var p=this.parent()[0];
var t=this[0];
var _11=p.fcount||0;
if(fit){
if(!t.fitted){
t.fitted=true;
p.fcount=_11+1;
$(p).addClass("panel-noscroll");
if(p.tagName=="BODY"){
$("html").addClass("panel-fit");
}
}
}else{
if(t.fitted){
t.fitted=false;
p.fcount=_11-1;
if(p.fcount==0){
$(p).removeClass("panel-noscroll");
if(p.tagName=="BODY"){
$("html").removeClass("panel-fit");
}
}
}
}
return {width:$(p).width(),height:$(p).height()};
};
})(jQuery);
(function($){
var _12=false;
function _13(e){
var _14=$.data(e.data.target,"draggable");
var _15=_14.options;
var _16=_14.proxy;
var _17=e.data;
var _18=_17.startLeft+e.pageX-_17.startX;
var top=_17.startTop+e.pageY-_17.startY;
if(_16){
if(_16.parent()[0]==document.body){
if(_15.deltaX!=null&&_15.deltaX!=undefined){
_18=e.pageX+_15.deltaX;
}else{
_18=e.pageX-e.data.offsetWidth;
}
if(_15.deltaY!=null&&_15.deltaY!=undefined){
top=e.pageY+_15.deltaY;
}else{
top=e.pageY-e.data.offsetHeight;
}
}else{
if(_15.deltaX!=null&&_15.deltaX!=undefined){
_18+=e.data.offsetWidth+_15.deltaX;
}
if(_15.deltaY!=null&&_15.deltaY!=undefined){
top+=e.data.offsetHeight+_15.deltaY;
}
}
}
if(e.data.parent!=document.body){
_18+=$(e.data.parent).scrollLeft();
top+=$(e.data.parent).scrollTop();
}
if(_15.axis=="h"){
_17.left=_18;
}else{
if(_15.axis=="v"){
_17.top=top;
}else{
_17.left=_18;
_17.top=top;
}
}
};
function _19(e){
var _1a=$.data(e.data.target,"draggable");
var _1b=_1a.options;
var _1c=_1a.proxy;
if(!_1c){
_1c=$(e.data.target);
}
_1c.css({left:e.data.left,top:e.data.top});
$("body").css("cursor",_1b.cursor);
};
function _1d(e){
_12=true;
var _1e=$.data(e.data.target,"draggable");
var _1f=_1e.options;
var _20=$(".droppable").filter(function(){
return e.data.target!=this;
}).filter(function(){
var _21=$.data(this,"droppable").options.accept;
if(_21){
return $(_21).filter(function(){
return this==e.data.target;
}).length>0;
}else{
return true;
}
});
_1e.droppables=_20;
var _22=_1e.proxy;
if(!_22){
if(_1f.proxy){
if(_1f.proxy=="clone"){
_22=$(e.data.target).clone().insertAfter(e.data.target);
}else{
_22=_1f.proxy.call(e.data.target,e.data.target);
}
_1e.proxy=_22;
}else{
_22=$(e.data.target);
}
}
_22.css("position","absolute");
_13(e);
_19(e);
_1f.onStartDrag.call(e.data.target,e);
return false;
};
function _23(e){
var _24=$.data(e.data.target,"draggable");
_13(e);
if(_24.options.onDrag.call(e.data.target,e)!=false){
_19(e);
}
var _25=e.data.target;
_24.droppables.each(function(){
var _26=$(this);
if(_26.droppable("options").disabled){
return;
}
var p2=_26.offset();
if(e.pageX>p2.left&&e.pageX<p2.left+_26.outerWidth()&&e.pageY>p2.top&&e.pageY<p2.top+_26.outerHeight()){
if(!this.entered){
$(this).trigger("_dragenter",[_25]);
this.entered=true;
}
$(this).trigger("_dragover",[_25]);
}else{
if(this.entered){
$(this).trigger("_dragleave",[_25]);
this.entered=false;
}
}
});
return false;
};
function _27(e){
_12=false;
_23(e);
var _28=$.data(e.data.target,"draggable");
var _29=_28.proxy;
var _2a=_28.options;
if(_2a.revert){
if(_2b()==true){
$(e.data.target).css({position:e.data.startPosition,left:e.data.startLeft,top:e.data.startTop});
}else{
if(_29){
var _2c,top;
if(_29.parent()[0]==document.body){
_2c=e.data.startX-e.data.offsetWidth;
top=e.data.startY-e.data.offsetHeight;
}else{
_2c=e.data.startLeft;
top=e.data.startTop;
}
_29.animate({left:_2c,top:top},function(){
_2d();
});
}else{
$(e.data.target).animate({left:e.data.startLeft,top:e.data.startTop},function(){
$(e.data.target).css("position",e.data.startPosition);
});
}
}
}else{
$(e.data.target).css({position:"absolute",left:e.data.left,top:e.data.top});
_2b();
}
_2a.onStopDrag.call(e.data.target,e);
$(document).unbind(".draggable");
setTimeout(function(){
$("body").css("cursor","");
},100);
function _2d(){
if(_29){
_29.remove();
}
_28.proxy=null;
};
function _2b(){
var _2e=false;
_28.droppables.each(function(){
var _2f=$(this);
if(_2f.droppable("options").disabled){
return;
}
var p2=_2f.offset();
if(e.pageX>p2.left&&e.pageX<p2.left+_2f.outerWidth()&&e.pageY>p2.top&&e.pageY<p2.top+_2f.outerHeight()){
if(_2a.revert){
$(e.data.target).css({position:e.data.startPosition,left:e.data.startLeft,top:e.data.startTop});
}
_2d();
$(this).trigger("_drop",[e.data.target]);
_2e=true;
this.entered=false;
return false;
}
});
if(!_2e&&!_2a.revert){
_2d();
}
return _2e;
};
return false;
};
$.fn.draggable=function(_30,_31){
if(typeof _30=="string"){
return $.fn.draggable.methods[_30](this,_31);
}
return this.each(function(){
var _32;
var _33=$.data(this,"draggable");
if(_33){
_33.handle.unbind(".draggable");
_32=$.extend(_33.options,_30);
}else{
_32=$.extend({},$.fn.draggable.defaults,$.fn.draggable.parseOptions(this),_30||{});
}
if(_32.disabled==true){
$(this).css("cursor","");
return;
}
var _34=null;
if(typeof _32.handle=="undefined"||_32.handle==null){
_34=$(this);
}else{
_34=(typeof _32.handle=="string"?$(_32.handle,this):_32.handle);
}
$.data(this,"draggable",{options:_32,handle:_34});
_34.unbind(".draggable").bind("mousemove.draggable",{target:this},function(e){
if(_12){
return;
}
var _35=$.data(e.data.target,"draggable").options;
if(_36(e)){
$(this).css("cursor",_35.cursor);
}else{
$(this).css("cursor","");
}
}).bind("mouseleave.draggable",{target:this},function(e){
$(this).css("cursor","");
}).bind("mousedown.draggable",{target:this},function(e){
if(_36(e)==false){
return;
}
$(this).css("cursor","");
var _37=$(e.data.target).position();
var _38=$(e.data.target).offset();
var _39={startPosition:$(e.data.target).css("position"),startLeft:_37.left,startTop:_37.top,left:_37.left,top:_37.top,startX:e.pageX,startY:e.pageY,offsetWidth:(e.pageX-_38.left),offsetHeight:(e.pageY-_38.top),target:e.data.target,parent:$(e.data.target).parent()[0]};
$.extend(e.data,_39);
var _3a=$.data(e.data.target,"draggable").options;
if(_3a.onBeforeDrag.call(e.data.target,e)==false){
return;
}
$(document).bind("mousedown.draggable",e.data,_1d);
$(document).bind("mousemove.draggable",e.data,_23);
$(document).bind("mouseup.draggable",e.data,_27);
});
function _36(e){
var _3b=$.data(e.data.target,"draggable");
var _3c=_3b.handle;
var _3d=$(_3c).offset();
var _3e=$(_3c).outerWidth();
var _3f=$(_3c).outerHeight();
var t=e.pageY-_3d.top;
var r=_3d.left+_3e-e.pageX;
var b=_3d.top+_3f-e.pageY;
var l=e.pageX-_3d.left;
return Math.min(t,r,b,l)>_3b.options.edge;
};
});
};
$.fn.draggable.methods={options:function(jq){
return $.data(jq[0],"draggable").options;
},proxy:function(jq){
return $.data(jq[0],"draggable").proxy;
},enable:function(jq){
return jq.each(function(){
$(this).draggable({disabled:false});
});
},disable:function(jq){
return jq.each(function(){
$(this).draggable({disabled:true});
});
}};
$.fn.draggable.parseOptions=function(_40){
var t=$(_40);
return $.extend({},$.parser.parseOptions(_40,["cursor","handle","axis",{"revert":"boolean","deltaX":"number","deltaY":"number","edge":"number"}]),{disabled:(t.attr("disabled")?true:undefined)});
};
$.fn.draggable.defaults={proxy:null,revert:false,cursor:"move",deltaX:null,deltaY:null,handle:null,disabled:false,edge:0,axis:null,onBeforeDrag:function(e){
},onStartDrag:function(e){
},onDrag:function(e){
},onStopDrag:function(e){
}};
})(jQuery);
(function($){
function _41(_42){
$(_42).addClass("droppable");
$(_42).bind("_dragenter",function(e,_43){
$.data(_42,"droppable").options.onDragEnter.apply(_42,[e,_43]);
});
$(_42).bind("_dragleave",function(e,_44){
$.data(_42,"droppable").options.onDragLeave.apply(_42,[e,_44]);
});
$(_42).bind("_dragover",function(e,_45){
$.data(_42,"droppable").options.onDragOver.apply(_42,[e,_45]);
});
$(_42).bind("_drop",function(e,_46){
$.data(_42,"droppable").options.onDrop.apply(_42,[e,_46]);
});
};
$.fn.droppable=function(_47,_48){
if(typeof _47=="string"){
return $.fn.droppable.methods[_47](this,_48);
}
_47=_47||{};
return this.each(function(){
var _49=$.data(this,"droppable");
if(_49){
$.extend(_49.options,_47);
}else{
_41(this);
$.data(this,"droppable",{options:$.extend({},$.fn.droppable.defaults,$.fn.droppable.parseOptions(this),_47)});
}
});
};
$.fn.droppable.methods={options:function(jq){
return $.data(jq[0],"droppable").options;
},enable:function(jq){
return jq.each(function(){
$(this).droppable({disabled:false});
});
},disable:function(jq){
return jq.each(function(){
$(this).droppable({disabled:true});
});
}};
$.fn.droppable.parseOptions=function(_4a){
var t=$(_4a);
return $.extend({},$.parser.parseOptions(_4a,["accept"]),{disabled:(t.attr("disabled")?true:undefined)});
};
$.fn.droppable.defaults={accept:null,disabled:false,onDragEnter:function(e,_4b){
},onDragOver:function(e,_4c){
},onDragLeave:function(e,_4d){
},onDrop:function(e,_4e){
}};
})(jQuery);
(function($){
var _4f=false;
$.fn.resizable=function(_50,_51){
if(typeof _50=="string"){
return $.fn.resizable.methods[_50](this,_51);
}
function _52(e){
var _53=e.data;
var _54=$.data(_53.target,"resizable").options;
if(_53.dir.indexOf("e")!=-1){
var _55=_53.startWidth+e.pageX-_53.startX;
_55=Math.min(Math.max(_55,_54.minWidth),_54.maxWidth);
_53.width=_55;
}
if(_53.dir.indexOf("s")!=-1){
var _56=_53.startHeight+e.pageY-_53.startY;
_56=Math.min(Math.max(_56,_54.minHeight),_54.maxHeight);
_53.height=_56;
}
if(_53.dir.indexOf("w")!=-1){
_53.width=_53.startWidth-e.pageX+_53.startX;
if(_53.width>=_54.minWidth&&_53.width<=_54.maxWidth){
_53.left=_53.startLeft+e.pageX-_53.startX;
}
}
if(_53.dir.indexOf("n")!=-1){
_53.height=_53.startHeight-e.pageY+_53.startY;
if(_53.height>=_54.minHeight&&_53.height<=_54.maxHeight){
_53.top=_53.startTop+e.pageY-_53.startY;
}
}
};
function _57(e){
var _58=e.data;
var _59=_58.target;
$(_59).css({left:_58.left,top:_58.top});
$(_59)._outerWidth(_58.width)._outerHeight(_58.height);
};
function _5a(e){
_4f=true;
$.data(e.data.target,"resizable").options.onStartResize.call(e.data.target,e);
return false;
};
function _5b(e){
_52(e);
if($.data(e.data.target,"resizable").options.onResize.call(e.data.target,e)!=false){
_57(e);
}
return false;
};
function _5c(e){
_4f=false;
_52(e,true);
_57(e);
$.data(e.data.target,"resizable").options.onStopResize.call(e.data.target,e);
$(document).unbind(".resizable");
$("body").css("cursor","");
return false;
};
return this.each(function(){
var _5d=null;
var _5e=$.data(this,"resizable");
if(_5e){
$(this).unbind(".resizable");
_5d=$.extend(_5e.options,_50||{});
}else{
_5d=$.extend({},$.fn.resizable.defaults,$.fn.resizable.parseOptions(this),_50||{});
$.data(this,"resizable",{options:_5d});
}
if(_5d.disabled==true){
return;
}
$(this).bind("mousemove.resizable",{target:this},function(e){
if(_4f){
return;
}
var dir=_5f(e);
if(dir==""){
$(e.data.target).css("cursor","");
}else{
$(e.data.target).css("cursor",dir+"-resize");
}
}).bind("mouseleave.resizable",{target:this},function(e){
$(e.data.target).css("cursor","");
}).bind("mousedown.resizable",{target:this},function(e){
var dir=_5f(e);
if(dir==""){
return;
}
function _60(css){
var val=parseInt($(e.data.target).css(css));
if(isNaN(val)){
return 0;
}else{
return val;
}
};
var _61={target:e.data.target,dir:dir,startLeft:_60("left"),startTop:_60("top"),left:_60("left"),top:_60("top"),startX:e.pageX,startY:e.pageY,startWidth:$(e.data.target).outerWidth(),startHeight:$(e.data.target).outerHeight(),width:$(e.data.target).outerWidth(),height:$(e.data.target).outerHeight(),deltaWidth:$(e.data.target).outerWidth()-$(e.data.target).width(),deltaHeight:$(e.data.target).outerHeight()-$(e.data.target).height()};
$(document).bind("mousedown.resizable",_61,_5a);
$(document).bind("mousemove.resizable",_61,_5b);
$(document).bind("mouseup.resizable",_61,_5c);
$("body").css("cursor",dir+"-resize");
});
function _5f(e){
var tt=$(e.data.target);
var dir="";
var _62=tt.offset();
var _63=tt.outerWidth();
var _64=tt.outerHeight();
var _65=_5d.edge;
if(e.pageY>_62.top&&e.pageY<_62.top+_65){
dir+="n";
}else{
if(e.pageY<_62.top+_64&&e.pageY>_62.top+_64-_65){
dir+="s";
}
}
if(e.pageX>_62.left&&e.pageX<_62.left+_65){
dir+="w";
}else{
if(e.pageX<_62.left+_63&&e.pageX>_62.left+_63-_65){
dir+="e";
}
}
var _66=_5d.handles.split(",");
for(var i=0;i<_66.length;i++){
var _67=_66[i].replace(/(^\s*)|(\s*$)/g,"");
if(_67=="all"||_67==dir){
return dir;
}
}
return "";
};
});
};
$.fn.resizable.methods={options:function(jq){
return $.data(jq[0],"resizable").options;
},enable:function(jq){
return jq.each(function(){
$(this).resizable({disabled:false});
});
},disable:function(jq){
return jq.each(function(){
$(this).resizable({disabled:true});
});
}};
$.fn.resizable.parseOptions=function(_68){
var t=$(_68);
return $.extend({},$.parser.parseOptions(_68,["handles",{minWidth:"number",minHeight:"number",maxWidth:"number",maxHeight:"number",edge:"number"}]),{disabled:(t.attr("disabled")?true:undefined)});
};
$.fn.resizable.defaults={disabled:false,handles:"n, e, s, w, ne, se, sw, nw, all",minWidth:10,minHeight:10,maxWidth:10000,maxHeight:10000,edge:5,onStartResize:function(e){
},onResize:function(e){
},onStopResize:function(e){
}};
})(jQuery);
(function($){
function _69(_6a){
var _6b=$.data(_6a,"linkbutton").options;
$(_6a).empty();
$(_6a).addClass("l-btn");
if(_6b.id){
$(_6a).attr("id",_6b.id);
}else{
$(_6a).attr("id","");
}
if(_6b.plain){
$(_6a).addClass("l-btn-plain");
}else{
$(_6a).removeClass("l-btn-plain");
}
if(_6b.text){
$(_6a).html(_6b.text).wrapInner("<span class=\"l-btn-left\">"+"<span class=\"l-btn-text\">"+"</span>"+"</span>");
if(_6b.iconCls){
$(_6a).find(".l-btn-text").addClass(_6b.iconCls).addClass(_6b.iconAlign=="left"?"l-btn-icon-left":"l-btn-icon-right");
}
}else{
$(_6a).html("&nbsp;").wrapInner("<span class=\"l-btn-left\">"+"<span class=\"l-btn-text\">"+"<span class=\"l-btn-empty\"></span>"+"</span>"+"</span>");
if(_6b.iconCls){
$(_6a).find(".l-btn-empty").addClass(_6b.iconCls);
}
}
$(_6a).unbind(".linkbutton").bind("focus.linkbutton",function(){
if(!_6b.disabled){
$(this).find("span.l-btn-text").addClass("l-btn-focus");
}
}).bind("blur.linkbutton",function(){
$(this).find("span.l-btn-text").removeClass("l-btn-focus");
});
_6c(_6a,_6b.disabled);
};
function _6c(_6d,_6e){
var _6f=$.data(_6d,"linkbutton");
if(_6e){
_6f.options.disabled=true;
var _70=$(_6d).attr("href");
if(_70){
_6f.href=_70;
$(_6d).attr("href","javascript:void(0)");
}
if(_6d.onclick){
_6f.onclick=_6d.onclick;
_6d.onclick=null;
}
$(_6d).addClass("l-btn-disabled");
}else{
_6f.options.disabled=false;
if(_6f.href){
$(_6d).attr("href",_6f.href);
}
if(_6f.onclick){
_6d.onclick=_6f.onclick;
}
$(_6d).removeClass("l-btn-disabled");
}
};
$.fn.linkbutton=function(_71,_72){
if(typeof _71=="string"){
return $.fn.linkbutton.methods[_71](this,_72);
}
_71=_71||{};
return this.each(function(){
var _73=$.data(this,"linkbutton");
if(_73){
$.extend(_73.options,_71);
}else{
$.data(this,"linkbutton",{options:$.extend({},$.fn.linkbutton.defaults,$.fn.linkbutton.parseOptions(this),_71)});
$(this).removeAttr("disabled");
}
_69(this);
});
};
$.fn.linkbutton.methods={options:function(jq){
return $.data(jq[0],"linkbutton").options;
},enable:function(jq){
return jq.each(function(){
_6c(this,false);
});
},disable:function(jq){
return jq.each(function(){
_6c(this,true);
});
}};
$.fn.linkbutton.parseOptions=function(_74){
var t=$(_74);
return $.extend({},$.parser.parseOptions(_74,["id","iconCls","iconAlign",{plain:"boolean"}]),{disabled:(t.attr("disabled")?true:undefined),text:$.trim(t.html()),iconCls:(t.attr("icon")||t.attr("iconCls"))});
};
$.fn.linkbutton.defaults={id:null,disabled:false,plain:false,text:"",iconCls:null,iconAlign:"left"};
})(jQuery);
(function($){
function _75(_76){
var _77=$.data(_76,"pagination");
var _78=_77.options;
var bb=_77.bb={};
var _79=$(_76).addClass("pagination").html("<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tr></tr></table>");
var tr=_79.find("tr");
function _7a(_7b){
var btn=_78.nav[_7b];
var a=$("<a href=\"javascript:void(0)\"></a>").appendTo(tr);
a.wrap("<td></td>");
a.linkbutton({iconCls:btn.iconCls,plain:true}).unbind(".pagination").bind("click.pagination",function(){
btn.handler.call(_76);
});
return a;
};
if(_78.showPageList){
var ps=$("<select class=\"pagination-page-list\"></select>");
ps.bind("change",function(){
_78.pageSize=parseInt($(this).val());
_78.onChangePageSize.call(_76,_78.pageSize);
_7d(_76,_78.pageNumber);
});
for(var i=0;i<_78.pageList.length;i++){
$("<option></option>").text(_78.pageList[i]).appendTo(ps);
}
$("<td></td>").append(ps).appendTo(tr);
$("<td><div class=\"pagination-btn-separator\"></div></td>").appendTo(tr);
}
bb.first=_7a("first");
bb.prev=_7a("prev");
$("<td><div class=\"pagination-btn-separator\"></div></td>").appendTo(tr);
$("<span style=\"padding-left:6px;\"></span>").html(_78.beforePageText).appendTo(tr).wrap("<td></td>");
bb.num=$("<input class=\"pagination-num\" type=\"text\" value=\"1\" size=\"2\">").appendTo(tr).wrap("<td></td>");
bb.num.unbind(".pagination").bind("keydown.pagination",function(e){
if(e.keyCode==13){
var _7c=parseInt($(this).val())||1;
_7d(_76,_7c);
return false;
}
});
bb.after=$("<span style=\"padding-right:6px;\"></span>").appendTo(tr).wrap("<td></td>");
$("<td><div class=\"pagination-btn-separator\"></div></td>").appendTo(tr);
bb.next=_7a("next");
bb.last=_7a("last");
if(_78.showRefresh){
$("<td><div class=\"pagination-btn-separator\"></div></td>").appendTo(tr);
bb.refresh=_7a("refresh");
}
if(_78.buttons){
$("<td><div class=\"pagination-btn-separator\"></div></td>").appendTo(tr);
for(var i=0;i<_78.buttons.length;i++){
var btn=_78.buttons[i];
if(btn=="-"){
$("<td><div class=\"pagination-btn-separator\"></div></td>").appendTo(tr);
}else{
var td=$("<td></td>").appendTo(tr);
$("<a href=\"javascript:void(0)\"></a>").appendTo(td).linkbutton($.extend(btn,{plain:true})).bind("click",eval(btn.handler||function(){
}));
}
}
}
$("<div class=\"pagination-info\"></div>").appendTo(_79);
$("<div style=\"clear:both;\"></div>").appendTo(_79);
};
function _7d(_7e,_7f){
var _80=$.data(_7e,"pagination").options;
var _81=Math.ceil(_80.total/_80.pageSize)||1;
_80.pageNumber=_7f;
if(_80.pageNumber<1){
_80.pageNumber=1;
}
if(_80.pageNumber>_81){
_80.pageNumber=_81;
}
_82(_7e,{pageNumber:_80.pageNumber});
_80.onSelectPage.call(_7e,_80.pageNumber,_80.pageSize);
};
function _82(_83,_84){
var _85=$.data(_83,"pagination").options;
var bb=$.data(_83,"pagination").bb;
$.extend(_85,_84||{});
var ps=$(_83).find("select.pagination-page-list");
if(ps.length){
ps.val(_85.pageSize+"");
_85.pageSize=parseInt(ps.val());
}
var _86=Math.ceil(_85.total/_85.pageSize)||1;
bb.num.val(_85.pageNumber);
bb.after.html(_85.afterPageText.replace(/{pages}/,_86));
var _87=_85.displayMsg;
_87=_87.replace(/{from}/,_85.total==0?0:_85.pageSize*(_85.pageNumber-1)+1);
_87=_87.replace(/{to}/,Math.min(_85.pageSize*(_85.pageNumber),_85.total));
_87=_87.replace(/{total}/,_85.total);
$(_83).find("div.pagination-info").html(_87);
bb.first.add(bb.prev).linkbutton({disabled:(_85.pageNumber==1)});
bb.next.add(bb.last).linkbutton({disabled:(_85.pageNumber==_86)});
_88(_83,_85.loading);
};
function _88(_89,_8a){
var _8b=$.data(_89,"pagination").options;
var bb=$.data(_89,"pagination").bb;
_8b.loading=_8a;
if(_8b.showRefresh){
if(_8b.loading){
bb.refresh.linkbutton({iconCls:"pagination-loading"});
}else{
bb.refresh.linkbutton({iconCls:"pagination-load"});
}
}
};
$.fn.pagination=function(_8c,_8d){
if(typeof _8c=="string"){
return $.fn.pagination.methods[_8c](this,_8d);
}
_8c=_8c||{};
return this.each(function(){
var _8e;
var _8f=$.data(this,"pagination");
if(_8f){
_8e=$.extend(_8f.options,_8c);
}else{
_8e=$.extend({},$.fn.pagination.defaults,$.fn.pagination.parseOptions(this),_8c);
$.data(this,"pagination",{options:_8e});
}
_75(this);
_82(this);
});
};
$.fn.pagination.methods={options:function(jq){
return $.data(jq[0],"pagination").options;
},loading:function(jq){
return jq.each(function(){
_88(this,true);
});
},loaded:function(jq){
return jq.each(function(){
_88(this,false);
});
},refresh:function(jq,_90){
return jq.each(function(){
_82(this,_90);
});
},select:function(jq,_91){
return jq.each(function(){
_7d(this,_91);
});
}};
$.fn.pagination.parseOptions=function(_92){
var t=$(_92);
return $.extend({},$.parser.parseOptions(_92,[{total:"number",pageSize:"number",pageNumber:"number"},{loading:"boolean",showPageList:"boolean",showRefresh:"boolean"}]),{pageList:(t.attr("pageList")?eval(t.attr("pageList")):undefined)});
};
$.fn.pagination.defaults={total:1,pageSize:10,pageNumber:1,pageList:[10,20,30,50],loading:false,buttons:null,showPageList:true,showRefresh:true,onSelectPage:function(_93,_94){
},onBeforeRefresh:function(_95,_96){
},onRefresh:function(_97,_98){
},onChangePageSize:function(_99){
},beforePageText:"Page",afterPageText:"of {pages}",displayMsg:"Displaying {from} to {to} of {total} items",nav:{first:{iconCls:"pagination-first",handler:function(){
var _9a=$(this).pagination("options");
if(_9a.pageNumber>1){
$(this).pagination("select",1);
}
}},prev:{iconCls:"pagination-prev",handler:function(){
var _9b=$(this).pagination("options");
if(_9b.pageNumber>1){
$(this).pagination("select",_9b.pageNumber-1);
}
}},next:{iconCls:"pagination-next",handler:function(){
var _9c=$(this).pagination("options");
var _9d=Math.ceil(_9c.total/_9c.pageSize);
if(_9c.pageNumber<_9d){
$(this).pagination("select",_9c.pageNumber+1);
}
}},last:{iconCls:"pagination-last",handler:function(){
var _9e=$(this).pagination("options");
var _9f=Math.ceil(_9e.total/_9e.pageSize);
if(_9e.pageNumber<_9f){
$(this).pagination("select",_9f);
}
}},refresh:{iconCls:"pagination-refresh",handler:function(){
var _a0=$(this).pagination("options");
if(_a0.onBeforeRefresh.call(this,_a0.pageNumber,_a0.pageSize)!=false){
$(this).pagination("select",_a0.pageNumber);
_a0.onRefresh.call(this,_a0.pageNumber,_a0.pageSize);
}
}}}};
})(jQuery);
(function($){
function _a1(_a2){
var _a3=$(_a2);
_a3.addClass("tree");
return _a3;
};
function _a4(_a5){
var _a6=[];
_a7(_a6,$(_a5));
function _a7(aa,_a8){
_a8.children("li").each(function(){
var _a9=$(this);
var _aa=$.extend({},$.parser.parseOptions(this,["id","iconCls","state"]),{checked:(_a9.attr("checked")?true:undefined)});
_aa.text=_a9.children("span").html();
if(!_aa.text){
_aa.text=_a9.html();
}
var _ab=_a9.children("ul");
if(_ab.length){
_aa.children=[];
_a7(_aa.children,_ab);
}
aa.push(_aa);
});
};
return _a6;
};
function _ac(_ad){
var _ae=$.data(_ad,"tree").options;
$(_ad).unbind().bind("mouseover",function(e){
var tt=$(e.target);
var _af=tt.closest("div.tree-node");
if(!_af.length){
return;
}
_af.addClass("tree-node-hover");
if(tt.hasClass("tree-hit")){
if(tt.hasClass("tree-expanded")){
tt.addClass("tree-expanded-hover");
}else{
tt.addClass("tree-collapsed-hover");
}
}
e.stopPropagation();
}).bind("mouseout",function(e){
var tt=$(e.target);
var _b0=tt.closest("div.tree-node");
if(!_b0.length){
return;
}
_b0.removeClass("tree-node-hover");
if(tt.hasClass("tree-hit")){
if(tt.hasClass("tree-expanded")){
tt.removeClass("tree-expanded-hover");
}else{
tt.removeClass("tree-collapsed-hover");
}
}
e.stopPropagation();
}).bind("click",function(e){
var tt=$(e.target);
var _b1=tt.closest("div.tree-node");
if(!_b1.length){
return;
}
if(tt.hasClass("tree-hit")){
_115(_ad,_b1[0]);
return false;
}else{
if(tt.hasClass("tree-checkbox")){
_d5(_ad,_b1[0],!tt.hasClass("tree-checkbox1"));
return false;
}else{
_153(_ad,_b1[0]);
_ae.onClick.call(_ad,_b4(_ad,_b1[0]));
}
}
e.stopPropagation();
}).bind("dblclick",function(e){
var _b2=$(e.target).closest("div.tree-node");
if(!_b2.length){
return;
}
_153(_ad,_b2[0]);
_ae.onDblClick.call(_ad,_b4(_ad,_b2[0]));
e.stopPropagation();
}).bind("contextmenu",function(e){
var _b3=$(e.target).closest("div.tree-node");
if(!_b3.length){
return;
}
_ae.onContextMenu.call(_ad,e,_b4(_ad,_b3[0]));
e.stopPropagation();
});
};
function _b5(_b6){
var _b7=$(_b6).find("div.tree-node");
_b7.draggable("disable");
_b7.css("cursor","pointer");
};
function _b8(_b9){
var _ba=$.data(_b9,"tree");
var _bb=_ba.options;
var _bc=_ba.tree;
_ba.disabledNodes=[];
_bc.find("div.tree-node").draggable({disabled:false,revert:true,cursor:"pointer",proxy:function(_bd){
var p=$("<div class=\"tree-node-proxy tree-dnd-no\"></div>").appendTo("body");
p.html($(_bd).find(".tree-title").html());
p.hide();
return p;
},deltaX:15,deltaY:15,onBeforeDrag:function(e){
if(_bb.onBeforeDrag.call(_b9,_b4(_b9,this))==false){
return false;
}
if($(e.target).hasClass("tree-hit")||$(e.target).hasClass("tree-checkbox")){
return false;
}
if(e.which!=1){
return false;
}
$(this).next("ul").find("div.tree-node").droppable({accept:"no-accept"});
var _be=$(this).find("span.tree-indent");
if(_be.length){
e.data.startLeft+=_be.length*_be.width();
}
},onStartDrag:function(){
$(this).draggable("proxy").css({left:-10000,top:-10000});
_bb.onStartDrag.call(_b9,_b4(_b9,this));
var _bf=_b4(_b9,this);
if(_bf.id==undefined){
_bf.id="easyui_tree_node_id_temp";
_14b(_b9,_bf);
}
_ba.draggingNodeId=_bf.id;
},onDrag:function(e){
var x1=e.pageX,y1=e.pageY,x2=e.data.startX,y2=e.data.startY;
var d=Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
if(d>3){
$(this).draggable("proxy").show();
}
this.pageY=e.pageY;
},onStopDrag:function(){
$(this).next("ul").find("div.tree-node").droppable({accept:"div.tree-node"});
for(var i=0;i<_ba.disabledNodes.length;i++){
$(_ba.disabledNodes[i]).droppable("enable");
}
_ba.disabledNodes=[];
var _c0=_151(_b9,_ba.draggingNodeId);
if(_c0.id=="easyui_tree_node_id_temp"){
_c0.id="";
_14b(_b9,_c0);
}
_bb.onStopDrag.call(_b9,_c0);
}}).droppable({accept:"div.tree-node",onDragEnter:function(e,_c1){
if(_bb.onDragEnter.call(_b9,this,_b4(_b9,_c1))==false){
$(_c1).draggable("proxy").removeClass("tree-dnd-yes").addClass("tree-dnd-no");
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
$(this).droppable("disable");
_ba.disabledNodes.push(this);
}
},onDragOver:function(e,_c2){
if($(this).droppable("options").disabled){
return;
}
var _c3=_c2.pageY;
var top=$(this).offset().top;
var _c4=top+$(this).outerHeight();
$(_c2).draggable("proxy").removeClass("tree-dnd-no").addClass("tree-dnd-yes");
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
if(_c3>top+(_c4-top)/2){
if(_c4-_c3<5){
$(this).addClass("tree-node-bottom");
}else{
$(this).addClass("tree-node-append");
}
}else{
if(_c3-top<5){
$(this).addClass("tree-node-top");
}else{
$(this).addClass("tree-node-append");
}
}
if(_bb.onDragOver.call(_b9,this,_b4(_b9,_c2))==false){
$(_c2).draggable("proxy").removeClass("tree-dnd-yes").addClass("tree-dnd-no");
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
$(this).droppable("disable");
_ba.disabledNodes.push(this);
}
},onDragLeave:function(e,_c5){
$(_c5).draggable("proxy").removeClass("tree-dnd-yes").addClass("tree-dnd-no");
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
_bb.onDragLeave.call(_b9,this,_b4(_b9,_c5));
},onDrop:function(e,_c6){
var _c7=this;
var _c8,_c9;
if($(this).hasClass("tree-node-append")){
_c8=_ca;
}else{
_c8=_cb;
_c9=$(this).hasClass("tree-node-top")?"top":"bottom";
}
_c8(_c6,_c7,_c9);
$(this).removeClass("tree-node-append tree-node-top tree-node-bottom");
}});
function _ca(_cc,_cd){
if(_b4(_b9,_cd).state=="closed"){
_10d(_b9,_cd,function(){
_ce();
});
}else{
_ce();
}
function _ce(){
var _cf=$(_b9).tree("pop",_cc);
$(_b9).tree("append",{parent:_cd,data:[_cf]});
_bb.onDrop.call(_b9,_cd,_cf,"append");
};
};
function _cb(_d0,_d1,_d2){
var _d3={};
if(_d2=="top"){
_d3.before=_d1;
}else{
_d3.after=_d1;
}
var _d4=$(_b9).tree("pop",_d0);
_d3.data=_d4;
$(_b9).tree("insert",_d3);
_bb.onDrop.call(_b9,_d1,_d4,_d2);
};
};
function _d5(_d6,_d7,_d8){
var _d9=$.data(_d6,"tree").options;
if(!_d9.checkbox){
return;
}
var _da=_b4(_d6,_d7);
if(_d9.onBeforeCheck.call(_d6,_da,_d8)==false){
return;
}
var _db=$(_d7);
var ck=_db.find(".tree-checkbox");
ck.removeClass("tree-checkbox0 tree-checkbox1 tree-checkbox2");
if(_d8){
ck.addClass("tree-checkbox1");
}else{
ck.addClass("tree-checkbox0");
}
if(_d9.cascadeCheck){
_dc(_db);
_dd(_db);
}
_d9.onCheck.call(_d6,_da,_d8);
function _dd(_de){
var _df=_de.next().find(".tree-checkbox");
_df.removeClass("tree-checkbox0 tree-checkbox1 tree-checkbox2");
if(_de.find(".tree-checkbox").hasClass("tree-checkbox1")){
_df.addClass("tree-checkbox1");
}else{
_df.addClass("tree-checkbox0");
}
};
function _dc(_e0){
var _e1=_120(_d6,_e0[0]);
if(_e1){
var ck=$(_e1.target).find(".tree-checkbox");
ck.removeClass("tree-checkbox0 tree-checkbox1 tree-checkbox2");
if(_e2(_e0)){
ck.addClass("tree-checkbox1");
}else{
if(_e3(_e0)){
ck.addClass("tree-checkbox0");
}else{
ck.addClass("tree-checkbox2");
}
}
_dc($(_e1.target));
}
function _e2(n){
var ck=n.find(".tree-checkbox");
if(ck.hasClass("tree-checkbox0")||ck.hasClass("tree-checkbox2")){
return false;
}
var b=true;
n.parent().siblings().each(function(){
if(!$(this).children("div.tree-node").children(".tree-checkbox").hasClass("tree-checkbox1")){
b=false;
}
});
return b;
};
function _e3(n){
var ck=n.find(".tree-checkbox");
if(ck.hasClass("tree-checkbox1")||ck.hasClass("tree-checkbox2")){
return false;
}
var b=true;
n.parent().siblings().each(function(){
if(!$(this).children("div.tree-node").children(".tree-checkbox").hasClass("tree-checkbox0")){
b=false;
}
});
return b;
};
};
};
function _e4(_e5,_e6){
var _e7=$.data(_e5,"tree").options;
var _e8=$(_e6);
if(_e9(_e5,_e6)){
var ck=_e8.find(".tree-checkbox");
if(ck.length){
if(ck.hasClass("tree-checkbox1")){
_d5(_e5,_e6,true);
}else{
_d5(_e5,_e6,false);
}
}else{
if(_e7.onlyLeafCheck){
$("<span class=\"tree-checkbox tree-checkbox0\"></span>").insertBefore(_e8.find(".tree-title"));
}
}
}else{
var ck=_e8.find(".tree-checkbox");
if(_e7.onlyLeafCheck){
ck.remove();
}else{
if(ck.hasClass("tree-checkbox1")){
_d5(_e5,_e6,true);
}else{
if(ck.hasClass("tree-checkbox2")){
var _ea=true;
var _eb=true;
var _ec=_ed(_e5,_e6);
for(var i=0;i<_ec.length;i++){
if(_ec[i].checked){
_eb=false;
}else{
_ea=false;
}
}
if(_ea){
_d5(_e5,_e6,true);
}
if(_eb){
_d5(_e5,_e6,false);
}
}
}
}
}
};
function _ee(_ef,ul,_f0,_f1){
var _f2=$.data(_ef,"tree").options;
_f0=_f2.loadFilter.call(_ef,_f0,$(ul).prev("div.tree-node")[0]);
if(!_f1){
$(ul).empty();
}
var _f3=[];
var _f4=$(ul).prev("div.tree-node").find("span.tree-indent, span.tree-hit").length;
_f5(ul,_f0,_f4);
if(_f2.dnd){
_b8(_ef);
}else{
_b5(_ef);
}
for(var i=0;i<_f3.length;i++){
_d5(_ef,_f3[i],true);
}
setTimeout(function(){
_fd(_ef,_ef);
},0);
var _f6=null;
if(_ef!=ul){
var _f7=$(ul).prev();
_f6=_b4(_ef,_f7[0]);
}
_f2.onLoadSuccess.call(_ef,_f6,_f0);
function _f5(ul,_f8,_f9){
for(var i=0;i<_f8.length;i++){
var li=$("<li></li>").appendTo(ul);
var _fa=_f8[i];
if(_fa.state!="open"&&_fa.state!="closed"){
_fa.state="open";
}
var _fb=$("<div class=\"tree-node\"></div>").appendTo(li);
_fb.attr("node-id",_fa.id);
$.data(_fb[0],"tree-node",{id:_fa.id,text:_fa.text,iconCls:_fa.iconCls,attributes:_fa.attributes});
$("<span class=\"tree-title\"></span>").html(_fa.text).appendTo(_fb);
if(_f2.checkbox){
if(_f2.onlyLeafCheck){
if(_fa.state=="open"&&(!_fa.children||!_fa.children.length)){
if(_fa.checked){
$("<span class=\"tree-checkbox tree-checkbox1\"></span>").prependTo(_fb);
}else{
$("<span class=\"tree-checkbox tree-checkbox0\"></span>").prependTo(_fb);
}
}
}else{
if(_fa.checked){
$("<span class=\"tree-checkbox tree-checkbox1\"></span>").prependTo(_fb);
_f3.push(_fb[0]);
}else{
$("<span class=\"tree-checkbox tree-checkbox0\"></span>").prependTo(_fb);
}
}
}
if(_fa.children&&_fa.children.length){
var _fc=$("<ul></ul>").appendTo(li);
if(_fa.state=="open"){
$("<span class=\"tree-icon tree-folder tree-folder-open\"></span>").addClass(_fa.iconCls).prependTo(_fb);
$("<span class=\"tree-hit tree-expanded\"></span>").prependTo(_fb);
}else{
$("<span class=\"tree-icon tree-folder\"></span>").addClass(_fa.iconCls).prependTo(_fb);
$("<span class=\"tree-hit tree-collapsed\"></span>").prependTo(_fb);
_fc.css("display","none");
}
_f5(_fc,_fa.children,_f9+1);
}else{
if(_fa.state=="closed"){
$("<span class=\"tree-icon tree-folder\"></span>").addClass(_fa.iconCls).prependTo(_fb);
$("<span class=\"tree-hit tree-collapsed\"></span>").prependTo(_fb);
}else{
$("<span class=\"tree-icon tree-file\"></span>").addClass(_fa.iconCls).prependTo(_fb);
$("<span class=\"tree-indent\"></span>").prependTo(_fb);
}
}
for(var j=0;j<_f9;j++){
$("<span class=\"tree-indent\"></span>").prependTo(_fb);
}
}
};
};
function _fd(_fe,ul,_ff){
var opts=$.data(_fe,"tree").options;
if(!opts.lines){
return;
}
if(!_ff){
_ff=true;
$(_fe).find("span.tree-indent").removeClass("tree-line tree-join tree-joinbottom");
$(_fe).find("div.tree-node").removeClass("tree-node-last tree-root-first tree-root-one");
var _100=$(_fe).tree("getRoots");
if(_100.length>1){
$(_100[0].target).addClass("tree-root-first");
}else{
$(_100[0].target).addClass("tree-root-one");
}
}
$(ul).children("li").each(function(){
var node=$(this).children("div.tree-node");
var ul=node.next("ul");
if(ul.length){
if($(this).next().length){
_101(node);
}
_fd(_fe,ul,_ff);
}else{
_102(node);
}
});
var _103=$(ul).children("li:last").children("div.tree-node").addClass("tree-node-last");
_103.children("span.tree-join").removeClass("tree-join").addClass("tree-joinbottom");
function _102(node,_104){
var icon=node.find("span.tree-icon");
icon.prev("span.tree-indent").addClass("tree-join");
};
function _101(node){
var _105=node.find("span.tree-indent, span.tree-hit").length;
node.next().find("div.tree-node").each(function(){
$(this).children("span:eq("+(_105-1)+")").addClass("tree-line");
});
};
};
function _106(_107,ul,_108,_109){
var opts=$.data(_107,"tree").options;
_108=_108||{};
var _10a=null;
if(_107!=ul){
var node=$(ul).prev();
_10a=_b4(_107,node[0]);
}
if(opts.onBeforeLoad.call(_107,_10a,_108)==false){
return;
}
var _10b=$(ul).prev().children("span.tree-folder");
_10b.addClass("tree-loading");
var _10c=opts.loader.call(_107,_108,function(data){
_10b.removeClass("tree-loading");
_ee(_107,ul,data);
if(_109){
_109();
}
},function(){
_10b.removeClass("tree-loading");
opts.onLoadError.apply(_107,arguments);
if(_109){
_109();
}
});
if(_10c==false){
_10b.removeClass("tree-loading");
}
};
function _10d(_10e,_10f,_110){
var opts=$.data(_10e,"tree").options;
var hit=$(_10f).children("span.tree-hit");
if(hit.length==0){
return;
}
if(hit.hasClass("tree-expanded")){
return;
}
var node=_b4(_10e,_10f);
if(opts.onBeforeExpand.call(_10e,node)==false){
return;
}
hit.removeClass("tree-collapsed tree-collapsed-hover").addClass("tree-expanded");
hit.next().addClass("tree-folder-open");
var ul=$(_10f).next();
if(ul.length){
if(opts.animate){
ul.slideDown("normal",function(){
opts.onExpand.call(_10e,node);
if(_110){
_110();
}
});
}else{
ul.css("display","block");
opts.onExpand.call(_10e,node);
if(_110){
_110();
}
}
}else{
var _111=$("<ul style=\"display:none\"></ul>").insertAfter(_10f);
_106(_10e,_111[0],{id:node.id},function(){
if(_111.is(":empty")){
_111.remove();
}
if(opts.animate){
_111.slideDown("normal",function(){
opts.onExpand.call(_10e,node);
if(_110){
_110();
}
});
}else{
_111.css("display","block");
opts.onExpand.call(_10e,node);
if(_110){
_110();
}
}
});
}
};
function _112(_113,_114){
var opts=$.data(_113,"tree").options;
var hit=$(_114).children("span.tree-hit");
if(hit.length==0){
return;
}
if(hit.hasClass("tree-collapsed")){
return;
}
var node=_b4(_113,_114);
if(opts.onBeforeCollapse.call(_113,node)==false){
return;
}
hit.removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed");
hit.next().removeClass("tree-folder-open");
var ul=$(_114).next();
if(opts.animate){
ul.slideUp("normal",function(){
opts.onCollapse.call(_113,node);
});
}else{
ul.css("display","none");
opts.onCollapse.call(_113,node);
}
};
function _115(_116,_117){
var hit=$(_117).children("span.tree-hit");
if(hit.length==0){
return;
}
if(hit.hasClass("tree-expanded")){
_112(_116,_117);
}else{
_10d(_116,_117);
}
};
function _118(_119,_11a){
var _11b=_ed(_119,_11a);
if(_11a){
_11b.unshift(_b4(_119,_11a));
}
for(var i=0;i<_11b.length;i++){
_10d(_119,_11b[i].target);
}
};
function _11c(_11d,_11e){
var _11f=[];
var p=_120(_11d,_11e);
while(p){
_11f.unshift(p);
p=_120(_11d,p.target);
}
for(var i=0;i<_11f.length;i++){
_10d(_11d,_11f[i].target);
}
};
function _121(_122,_123){
var _124=_ed(_122,_123);
if(_123){
_124.unshift(_b4(_122,_123));
}
for(var i=0;i<_124.length;i++){
_112(_122,_124[i].target);
}
};
function _125(_126){
var _127=_128(_126);
if(_127.length){
return _127[0];
}else{
return null;
}
};
function _128(_129){
var _12a=[];
$(_129).children("li").each(function(){
var node=$(this).children("div.tree-node");
_12a.push(_b4(_129,node[0]));
});
return _12a;
};
function _ed(_12b,_12c){
var _12d=[];
if(_12c){
_12e($(_12c));
}else{
var _12f=_128(_12b);
for(var i=0;i<_12f.length;i++){
_12d.push(_12f[i]);
_12e($(_12f[i].target));
}
}
function _12e(node){
node.next().find("div.tree-node").each(function(){
_12d.push(_b4(_12b,this));
});
};
return _12d;
};
function _120(_130,_131){
var ul=$(_131).parent().parent();
if(ul[0]==_130){
return null;
}else{
return _b4(_130,ul.prev()[0]);
}
};
function _132(_133,_134){
_134=_134||"checked";
var _135="";
if(_134=="checked"){
_135="span.tree-checkbox1";
}else{
if(_134=="unchecked"){
_135="span.tree-checkbox0";
}else{
if(_134=="indeterminate"){
_135="span.tree-checkbox2";
}
}
}
var _136=[];
$(_133).find(_135).each(function(){
var node=$(this).parent();
_136.push(_b4(_133,node[0]));
});
return _136;
};
function _137(_138){
var node=$(_138).find("div.tree-node-selected");
if(node.length){
return _b4(_138,node[0]);
}else{
return null;
}
};
function _139(_13a,_13b){
var node=$(_13b.parent);
var ul;
if(node.length==0){
ul=$(_13a);
}else{
ul=node.next();
if(ul.length==0){
ul=$("<ul></ul>").insertAfter(node);
}
}
if(_13b.data&&_13b.data.length){
var _13c=node.find("span.tree-icon");
if(_13c.hasClass("tree-file")){
_13c.removeClass("tree-file").addClass("tree-folder tree-folder-open");
var hit=$("<span class=\"tree-hit tree-expanded\"></span>").insertBefore(_13c);
if(hit.prev().length){
hit.prev().remove();
}
}
}
_ee(_13a,ul[0],_13b.data,true);
_e4(_13a,ul.prev());
};
function _13d(_13e,_13f){
var ref=_13f.before||_13f.after;
var _140=_120(_13e,ref);
var li;
if(_140){
_139(_13e,{parent:_140.target,data:[_13f.data]});
li=$(_140.target).next().children("li:last");
}else{
_139(_13e,{parent:null,data:[_13f.data]});
li=$(_13e).children("li:last");
}
if(_13f.before){
li.insertBefore($(ref).parent());
}else{
li.insertAfter($(ref).parent());
}
};
function _141(_142,_143){
var _144=_120(_142,_143);
var node=$(_143);
var li=node.parent();
var ul=li.parent();
li.remove();
if(ul.children("li").length==0){
var node=ul.prev();
node.find(".tree-icon").removeClass("tree-folder").addClass("tree-file");
node.find(".tree-hit").remove();
$("<span class=\"tree-indent\"></span>").prependTo(node);
if(ul[0]!=_142){
ul.remove();
}
}
if(_144){
_e4(_142,_144.target);
}
_fd(_142,_142);
};
function _145(_146,_147){
function _148(aa,ul){
ul.children("li").each(function(){
var node=$(this).children("div.tree-node");
var _149=_b4(_146,node[0]);
var sub=$(this).children("ul");
if(sub.length){
_149.children=[];
_148(_149.children,sub);
}
aa.push(_149);
});
};
if(_147){
var _14a=_b4(_146,_147);
_14a.children=[];
_148(_14a.children,$(_147).next());
return _14a;
}else{
return null;
}
};
function _14b(_14c,_14d){
var node=$(_14d.target);
var _14e=_b4(_14c,_14d.target);
if(_14e.iconCls){
node.find(".tree-icon").removeClass(_14e.iconCls);
}
var data=$.extend({},_14e,_14d);
$.data(_14d.target,"tree-node",data);
node.attr("node-id",data.id);
node.find(".tree-title").html(data.text);
if(data.iconCls){
node.find(".tree-icon").addClass(data.iconCls);
}
if(_14e.checked!=data.checked){
_d5(_14c,_14d.target,data.checked);
}
};
function _b4(_14f,_150){
var node=$.extend({},$.data(_150,"tree-node"),{target:_150,checked:$(_150).find(".tree-checkbox").hasClass("tree-checkbox1")});
if(!_e9(_14f,_150)){
node.state=$(_150).find(".tree-hit").hasClass("tree-expanded")?"open":"closed";
}
return node;
};
function _151(_152,id){
var node=$(_152).find("div.tree-node[node-id="+id+"]");
if(node.length){
return _b4(_152,node[0]);
}else{
return null;
}
};
function _153(_154,_155){
var opts=$.data(_154,"tree").options;
var node=_b4(_154,_155);
if(opts.onBeforeSelect.call(_154,node)==false){
return;
}
$("div.tree-node-selected",_154).removeClass("tree-node-selected");
$(_155).addClass("tree-node-selected");
opts.onSelect.call(_154,node);
};
function _e9(_156,_157){
var node=$(_157);
var hit=node.children("span.tree-hit");
return hit.length==0;
};
function _158(_159,_15a){
var opts=$.data(_159,"tree").options;
var node=_b4(_159,_15a);
if(opts.onBeforeEdit.call(_159,node)==false){
return;
}
$(_15a).css("position","relative");
var nt=$(_15a).find(".tree-title");
var _15b=nt.outerWidth();
nt.empty();
var _15c=$("<input class=\"tree-editor\">").appendTo(nt);
_15c.val(node.text).focus();
_15c.width(_15b+20);
_15c.height(document.compatMode=="CSS1Compat"?(18-(_15c.outerHeight()-_15c.height())):18);
_15c.bind("click",function(e){
return false;
}).bind("mousedown",function(e){
e.stopPropagation();
}).bind("mousemove",function(e){
e.stopPropagation();
}).bind("keydown",function(e){
if(e.keyCode==13){
_15d(_159,_15a);
return false;
}else{
if(e.keyCode==27){
_161(_159,_15a);
return false;
}
}
}).bind("blur",function(e){
e.stopPropagation();
_15d(_159,_15a);
});
};
function _15d(_15e,_15f){
var opts=$.data(_15e,"tree").options;
$(_15f).css("position","");
var _160=$(_15f).find("input.tree-editor");
var val=_160.val();
_160.remove();
var node=_b4(_15e,_15f);
node.text=val;
_14b(_15e,node);
opts.onAfterEdit.call(_15e,node);
};
function _161(_162,_163){
var opts=$.data(_162,"tree").options;
$(_163).css("position","");
$(_163).find("input.tree-editor").remove();
var node=_b4(_162,_163);
_14b(_162,node);
opts.onCancelEdit.call(_162,node);
};
$.fn.tree=function(_164,_165){
if(typeof _164=="string"){
return $.fn.tree.methods[_164](this,_165);
}
var _164=_164||{};
return this.each(function(){
var _166=$.data(this,"tree");
var opts;
if(_166){
opts=$.extend(_166.options,_164);
_166.options=opts;
}else{
opts=$.extend({},$.fn.tree.defaults,$.fn.tree.parseOptions(this),_164);
$.data(this,"tree",{options:opts,tree:_a1(this)});
var data=_a4(this);
if(data.length&&!opts.data){
opts.data=data;
}
}
_ac(this);
if(opts.lines){
$(this).addClass("tree-lines");
}
if(opts.data){
_ee(this,this,opts.data);
}else{
if(opts.dnd){
_b8(this);
}else{
_b5(this);
}
}
_106(this,this);
});
};
$.fn.tree.methods={options:function(jq){
return $.data(jq[0],"tree").options;
},loadData:function(jq,data){
return jq.each(function(){
_ee(this,this,data);
});
},getNode:function(jq,_167){
return _b4(jq[0],_167);
},getData:function(jq,_168){
return _145(jq[0],_168);
},reload:function(jq,_169){
return jq.each(function(){
if(_169){
var node=$(_169);
var hit=node.children("span.tree-hit");
hit.removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed");
node.next().remove();
_10d(this,_169);
}else{
$(this).empty();
_106(this,this);
}
});
},getRoot:function(jq){
return _125(jq[0]);
},getRoots:function(jq){
return _128(jq[0]);
},getParent:function(jq,_16a){
return _120(jq[0],_16a);
},getChildren:function(jq,_16b){
return _ed(jq[0],_16b);
},getChecked:function(jq,_16c){
return _132(jq[0],_16c);
},getSelected:function(jq){
return _137(jq[0]);
},isLeaf:function(jq,_16d){
return _e9(jq[0],_16d);
},find:function(jq,id){
return _151(jq[0],id);
},select:function(jq,_16e){
return jq.each(function(){
_153(this,_16e);
});
},check:function(jq,_16f){
return jq.each(function(){
_d5(this,_16f,true);
});
},uncheck:function(jq,_170){
return jq.each(function(){
_d5(this,_170,false);
});
},collapse:function(jq,_171){
return jq.each(function(){
_112(this,_171);
});
},expand:function(jq,_172){
return jq.each(function(){
_10d(this,_172);
});
},collapseAll:function(jq,_173){
return jq.each(function(){
_121(this,_173);
});
},expandAll:function(jq,_174){
return jq.each(function(){
_118(this,_174);
});
},expandTo:function(jq,_175){
return jq.each(function(){
_11c(this,_175);
});
},toggle:function(jq,_176){
return jq.each(function(){
_115(this,_176);
});
},append:function(jq,_177){
return jq.each(function(){
_139(this,_177);
});
},insert:function(jq,_178){
return jq.each(function(){
_13d(this,_178);
});
},remove:function(jq,_179){
return jq.each(function(){
_141(this,_179);
});
},pop:function(jq,_17a){
var node=jq.tree("getData",_17a);
jq.tree("remove",_17a);
return node;
},update:function(jq,_17b){
return jq.each(function(){
_14b(this,_17b);
});
},enableDnd:function(jq){
return jq.each(function(){
_b8(this);
});
},disableDnd:function(jq){
return jq.each(function(){
_b5(this);
});
},beginEdit:function(jq,_17c){
return jq.each(function(){
_158(this,_17c);
});
},endEdit:function(jq,_17d){
return jq.each(function(){
_15d(this,_17d);
});
},cancelEdit:function(jq,_17e){
return jq.each(function(){
_161(this,_17e);
});
}};
$.fn.tree.parseOptions=function(_17f){
var t=$(_17f);
return $.extend({},$.parser.parseOptions(_17f,["url","method",{checkbox:"boolean",cascadeCheck:"boolean",onlyLeafCheck:"boolean"},{animate:"boolean",lines:"boolean",dnd:"boolean"}]));
};
$.fn.tree.defaults={url:null,method:"post",animate:false,checkbox:false,cascadeCheck:true,onlyLeafCheck:false,lines:false,dnd:false,data:null,loader:function(_180,_181,_182){
var opts=$(this).tree("options");
if(!opts.url){
return false;
}
$.ajax({type:opts.method,url:opts.url,data:_180,dataType:"json",success:function(data){
_181(data);
},error:function(){
_182.apply(this,arguments);
}});
},loadFilter:function(data,_183){
return data;
},onBeforeLoad:function(node,_184){
},onLoadSuccess:function(node,data){
},onLoadError:function(){
},onClick:function(node){
},onDblClick:function(node){
},onBeforeExpand:function(node){
},onExpand:function(node){
},onBeforeCollapse:function(node){
},onCollapse:function(node){
},onBeforeCheck:function(node,_185){
},onCheck:function(node,_186){
},onBeforeSelect:function(node){
},onSelect:function(node){
},onContextMenu:function(e,node){
},onBeforeDrag:function(node){
},onStartDrag:function(node){
},onStopDrag:function(node){
},onDragEnter:function(_187,_188){
},onDragOver:function(_189,_18a){
},onDragLeave:function(_18b,_18c){
},onDrop:function(_18d,_18e,_18f){
},onBeforeEdit:function(node){
},onAfterEdit:function(node){
},onCancelEdit:function(node){
}};
})(jQuery);
(function($){
function init(_190){
$(_190).addClass("progressbar");
$(_190).html("<div class=\"progressbar-text\"></div><div class=\"progressbar-value\">&nbsp;</div>");
return $(_190);
};
function _191(_192,_193){
var opts=$.data(_192,"progressbar").options;
var bar=$.data(_192,"progressbar").bar;
if(_193){
opts.width=_193;
}
bar._outerWidth(opts.width);
bar.find("div.progressbar-text").width(bar.width());
};
$.fn.progressbar=function(_194,_195){
if(typeof _194=="string"){
var _196=$.fn.progressbar.methods[_194];
if(_196){
return _196(this,_195);
}
}
_194=_194||{};
return this.each(function(){
var _197=$.data(this,"progressbar");
if(_197){
$.extend(_197.options,_194);
}else{
_197=$.data(this,"progressbar",{options:$.extend({},$.fn.progressbar.defaults,$.fn.progressbar.parseOptions(this),_194),bar:init(this)});
}
$(this).progressbar("setValue",_197.options.value);
_191(this);
});
};
$.fn.progressbar.methods={options:function(jq){
return $.data(jq[0],"progressbar").options;
},resize:function(jq,_198){
return jq.each(function(){
_191(this,_198);
});
},getValue:function(jq){
return $.data(jq[0],"progressbar").options.value;
},setValue:function(jq,_199){
if(_199<0){
_199=0;
}
if(_199>100){
_199=100;
}
return jq.each(function(){
var opts=$.data(this,"progressbar").options;
var text=opts.text.replace(/{value}/,_199);
var _19a=opts.value;
opts.value=_199;
$(this).find("div.progressbar-value").width(_199+"%");
$(this).find("div.progressbar-text").html(text);
if(_19a!=_199){
opts.onChange.call(this,_199,_19a);
}
});
}};
$.fn.progressbar.parseOptions=function(_19b){
return $.extend({},$.parser.parseOptions(_19b,["width","text",{value:"number"}]));
};
$.fn.progressbar.defaults={width:"auto",value:0,text:"{value}%",onChange:function(_19c,_19d){
}};
})(jQuery);
(function($){
function _19e(node){
node.each(function(){
$(this).remove();
if($.browser.msie){
this.outerHTML="";
}
});
};
function _19f(_1a0,_1a1){
var opts=$.data(_1a0,"panel").options;
var _1a2=$.data(_1a0,"panel").panel;
var _1a3=_1a2.children("div.panel-header");
var _1a4=_1a2.children("div.panel-body");
if(_1a1){
if(_1a1.width){
opts.width=_1a1.width;
}
if(_1a1.height){
opts.height=_1a1.height;
}
if(_1a1.left!=null){
opts.left=_1a1.left;
}
if(_1a1.top!=null){
opts.top=_1a1.top;
}
}
opts.fit?$.extend(opts,_1a2._fit()):_1a2._fit(false);
_1a2.css({left:opts.left,top:opts.top});
if(!isNaN(opts.width)){
_1a2._outerWidth(opts.width);
}else{
_1a2.width("auto");
}
_1a3.add(_1a4)._outerWidth(_1a2.width());
if(!isNaN(opts.height)){
_1a2._outerHeight(opts.height);
_1a4._outerHeight(_1a2.height()-_1a3._outerHeight());
}else{
_1a4.height("auto");
}
_1a2.css("height","");
opts.onResize.apply(_1a0,[opts.width,opts.height]);
_1a2.find(">div.panel-body>div").triggerHandler("_resize");
};
function _1a5(_1a6,_1a7){
var opts=$.data(_1a6,"panel").options;
var _1a8=$.data(_1a6,"panel").panel;
if(_1a7){
if(_1a7.left!=null){
opts.left=_1a7.left;
}
if(_1a7.top!=null){
opts.top=_1a7.top;
}
}
_1a8.css({left:opts.left,top:opts.top});
opts.onMove.apply(_1a6,[opts.left,opts.top]);
};
function _1a9(_1aa){
$(_1aa).addClass("panel-body");
var _1ab=$("<div class=\"panel\"></div>").insertBefore(_1aa);
_1ab[0].appendChild(_1aa);
_1ab.bind("_resize",function(){
var opts=$.data(_1aa,"panel").options;
if(opts.fit==true){
_19f(_1aa);
}
return false;
});
return _1ab;
};
function _1ac(_1ad){
var opts=$.data(_1ad,"panel").options;
var _1ae=$.data(_1ad,"panel").panel;
if(opts.tools&&typeof opts.tools=="string"){
_1ae.find(">div.panel-header>div.panel-tool .panel-tool-a").appendTo(opts.tools);
}
_19e(_1ae.children("div.panel-header"));
if(opts.title&&!opts.noheader){
var _1af=$("<div class=\"panel-header\"><div class=\"panel-title\">"+opts.title+"</div></div>").prependTo(_1ae);
if(opts.iconCls){
_1af.find(".panel-title").addClass("panel-with-icon");
$("<div class=\"panel-icon\"></div>").addClass(opts.iconCls).appendTo(_1af);
}
var tool=$("<div class=\"panel-tool\"></div>").appendTo(_1af);
tool.bind("click",function(e){
e.stopPropagation();
});
if(opts.tools){
if(typeof opts.tools=="string"){
$(opts.tools).children().each(function(){
$(this).addClass($(this).attr("iconCls")).addClass("panel-tool-a").appendTo(tool);
});
}else{
for(var i=0;i<opts.tools.length;i++){
var t=$("<a href=\"javascript:void(0)\"></a>").addClass(opts.tools[i].iconCls).appendTo(tool);
if(opts.tools[i].handler){
t.bind("click",eval(opts.tools[i].handler));
}
}
}
}
if(opts.collapsible){
$("<a class=\"panel-tool-collapse\" href=\"javascript:void(0)\"></a>").appendTo(tool).bind("click",function(){
if(opts.collapsed==true){
_1ca(_1ad,true);
}else{
_1bf(_1ad,true);
}
return false;
});
}
if(opts.minimizable){
$("<a class=\"panel-tool-min\" href=\"javascript:void(0)\"></a>").appendTo(tool).bind("click",function(){
_1d0(_1ad);
return false;
});
}
if(opts.maximizable){
$("<a class=\"panel-tool-max\" href=\"javascript:void(0)\"></a>").appendTo(tool).bind("click",function(){
if(opts.maximized==true){
_1d3(_1ad);
}else{
_1be(_1ad);
}
return false;
});
}
if(opts.closable){
$("<a class=\"panel-tool-close\" href=\"javascript:void(0)\"></a>").appendTo(tool).bind("click",function(){
_1b0(_1ad);
return false;
});
}
_1ae.children("div.panel-body").removeClass("panel-body-noheader");
}else{
_1ae.children("div.panel-body").addClass("panel-body-noheader");
}
};
function _1b1(_1b2){
var _1b3=$.data(_1b2,"panel");
var opts=_1b3.options;
if(opts.content){
_1b4(_1b2);
_1b5(opts.content);
}
if(opts.href&&(!_1b3.isLoaded||!opts.cache)){
_1b3.isLoaded=false;
_1b4(_1b2);
if(opts.loadingMessage){
$(_1b2).html($("<div class=\"panel-loading\"></div>").html(opts.loadingMessage));
}
$.ajax({url:opts.href,cache:false,success:function(data){
_1b5(opts.extractor.call(_1b2,data));
opts.onLoad.apply(_1b2,arguments);
_1b3.isLoaded=true;
}});
}
function _1b5(_1b6){
$(_1b2).html(_1b6);
if($.parser){
$.parser.parse($(_1b2));
}
};
};
function _1b4(_1b7){
var t=$(_1b7);
t.find(".combo-f").each(function(){
$(this).combo("destroy");
});
t.find(".m-btn").each(function(){
$(this).menubutton("destroy");
});
t.find(".s-btn").each(function(){
$(this).splitbutton("destroy");
});
};
function _1b8(_1b9){
$(_1b9).find("div.panel:visible,div.accordion:visible,div.tabs-container:visible,div.layout:visible").each(function(){
$(this).triggerHandler("_resize",[true]);
});
};
function _1ba(_1bb,_1bc){
var opts=$.data(_1bb,"panel").options;
var _1bd=$.data(_1bb,"panel").panel;
if(_1bc!=true){
if(opts.onBeforeOpen.call(_1bb)==false){
return;
}
}
_1bd.show();
opts.closed=false;
opts.minimized=false;
var tool=_1bd.children("div.panel-header").find("a.panel-tool-restore");
if(tool.length){
opts.maximized=true;
}
opts.onOpen.call(_1bb);
if(opts.maximized==true){
opts.maximized=false;
_1be(_1bb);
}
if(opts.collapsed==true){
opts.collapsed=false;
_1bf(_1bb);
}
if(!opts.collapsed){
_1b1(_1bb);
_1b8(_1bb);
}
};
function _1b0(_1c0,_1c1){
var opts=$.data(_1c0,"panel").options;
var _1c2=$.data(_1c0,"panel").panel;
if(_1c1!=true){
if(opts.onBeforeClose.call(_1c0)==false){
return;
}
}
_1c2._fit(false);
_1c2.hide();
opts.closed=true;
opts.onClose.call(_1c0);
};
function _1c3(_1c4,_1c5){
var opts=$.data(_1c4,"panel").options;
var _1c6=$.data(_1c4,"panel").panel;
if(_1c5!=true){
if(opts.onBeforeDestroy.call(_1c4)==false){
return;
}
}
_1b4(_1c4);
_19e(_1c6);
opts.onDestroy.call(_1c4);
};
function _1bf(_1c7,_1c8){
var opts=$.data(_1c7,"panel").options;
var _1c9=$.data(_1c7,"panel").panel;
var body=_1c9.children("div.panel-body");
var tool=_1c9.children("div.panel-header").find("a.panel-tool-collapse");
if(opts.collapsed==true){
return;
}
body.stop(true,true);
if(opts.onBeforeCollapse.call(_1c7)==false){
return;
}
tool.addClass("panel-tool-expand");
if(_1c8==true){
body.slideUp("normal",function(){
opts.collapsed=true;
opts.onCollapse.call(_1c7);
});
}else{
body.hide();
opts.collapsed=true;
opts.onCollapse.call(_1c7);
}
};
function _1ca(_1cb,_1cc){
var opts=$.data(_1cb,"panel").options;
var _1cd=$.data(_1cb,"panel").panel;
var body=_1cd.children("div.panel-body");
var tool=_1cd.children("div.panel-header").find("a.panel-tool-collapse");
if(opts.collapsed==false){
return;
}
body.stop(true,true);
if(opts.onBeforeExpand.call(_1cb)==false){
return;
}
tool.removeClass("panel-tool-expand");
if(_1cc==true){
body.slideDown("normal",function(){
opts.collapsed=false;
opts.onExpand.call(_1cb);
_1b1(_1cb);
_1b8(_1cb);
});
}else{
body.show();
opts.collapsed=false;
opts.onExpand.call(_1cb);
_1b1(_1cb);
_1b8(_1cb);
}
};
function _1be(_1ce){
var opts=$.data(_1ce,"panel").options;
var _1cf=$.data(_1ce,"panel").panel;
var tool=_1cf.children("div.panel-header").find("a.panel-tool-max");
if(opts.maximized==true){
return;
}
tool.addClass("panel-tool-restore");
if(!$.data(_1ce,"panel").original){
$.data(_1ce,"panel").original={width:opts.width,height:opts.height,left:opts.left,top:opts.top,fit:opts.fit};
}
opts.left=0;
opts.top=0;
opts.fit=true;
_19f(_1ce);
opts.minimized=false;
opts.maximized=true;
opts.onMaximize.call(_1ce);
};
function _1d0(_1d1){
var opts=$.data(_1d1,"panel").options;
var _1d2=$.data(_1d1,"panel").panel;
_1d2._fit(false);
_1d2.hide();
opts.minimized=true;
opts.maximized=false;
opts.onMinimize.call(_1d1);
};
function _1d3(_1d4){
var opts=$.data(_1d4,"panel").options;
var _1d5=$.data(_1d4,"panel").panel;
var tool=_1d5.children("div.panel-header").find("a.panel-tool-max");
if(opts.maximized==false){
return;
}
_1d5.show();
tool.removeClass("panel-tool-restore");
$.extend(opts,$.data(_1d4,"panel").original);
_19f(_1d4);
opts.minimized=false;
opts.maximized=false;
$.data(_1d4,"panel").original=null;
opts.onRestore.call(_1d4);
};
function _1d6(_1d7){
var opts=$.data(_1d7,"panel").options;
var _1d8=$.data(_1d7,"panel").panel;
var _1d9=$(_1d7).panel("header");
var body=$(_1d7).panel("body");
_1d8.css(opts.style);
_1d8.addClass(opts.cls);
if(opts.border){
_1d9.removeClass("panel-header-noborder");
body.removeClass("panel-body-noborder");
}else{
_1d9.addClass("panel-header-noborder");
body.addClass("panel-body-noborder");
}
_1d9.addClass(opts.headerCls);
body.addClass(opts.bodyCls);
if(opts.id){
$(_1d7).attr("id",opts.id);
}else{
$(_1d7).attr("id","");
}
};
function _1da(_1db,_1dc){
$.data(_1db,"panel").options.title=_1dc;
$(_1db).panel("header").find("div.panel-title").html(_1dc);
};
var TO=false;
var _1dd=true;
$(window).unbind(".panel").bind("resize.panel",function(){
if(!_1dd){
return;
}
if(TO!==false){
clearTimeout(TO);
}
TO=setTimeout(function(){
_1dd=false;
var _1de=$("body.layout");
if(_1de.length){
_1de.layout("resize");
}else{
$("body").children("div.panel,div.accordion,div.tabs-container,div.layout").triggerHandler("_resize");
}
_1dd=true;
TO=false;
},200);
});
$.fn.panel=function(_1df,_1e0){
if(typeof _1df=="string"){
return $.fn.panel.methods[_1df](this,_1e0);
}
_1df=_1df||{};
return this.each(function(){
var _1e1=$.data(this,"panel");
var opts;
if(_1e1){
opts=$.extend(_1e1.options,_1df);
}else{
opts=$.extend({},$.fn.panel.defaults,$.fn.panel.parseOptions(this),_1df);
$(this).attr("title","");
_1e1=$.data(this,"panel",{options:opts,panel:_1a9(this),isLoaded:false});
}
_1ac(this);
_1d6(this);
if(opts.doSize==true){
_1e1.panel.css("display","block");
_19f(this);
}
if(opts.closed==true||opts.minimized==true){
_1e1.panel.hide();
}else{
_1ba(this);
}
});
};
$.fn.panel.methods={options:function(jq){
return $.data(jq[0],"panel").options;
},panel:function(jq){
return $.data(jq[0],"panel").panel;
},header:function(jq){
return $.data(jq[0],"panel").panel.find(">div.panel-header");
},body:function(jq){
return $.data(jq[0],"panel").panel.find(">div.panel-body");
},setTitle:function(jq,_1e2){
return jq.each(function(){
_1da(this,_1e2);
});
},open:function(jq,_1e3){
return jq.each(function(){
_1ba(this,_1e3);
});
},close:function(jq,_1e4){
return jq.each(function(){
_1b0(this,_1e4);
});
},destroy:function(jq,_1e5){
return jq.each(function(){
_1c3(this,_1e5);
});
},refresh:function(jq,href){
return jq.each(function(){
$.data(this,"panel").isLoaded=false;
if(href){
$.data(this,"panel").options.href=href;
}
_1b1(this);
});
},resize:function(jq,_1e6){
return jq.each(function(){
_19f(this,_1e6);
});
},move:function(jq,_1e7){
return jq.each(function(){
_1a5(this,_1e7);
});
},maximize:function(jq){
return jq.each(function(){
_1be(this);
});
},minimize:function(jq){
return jq.each(function(){
_1d0(this);
});
},restore:function(jq){
return jq.each(function(){
_1d3(this);
});
},collapse:function(jq,_1e8){
return jq.each(function(){
_1bf(this,_1e8);
});
},expand:function(jq,_1e9){
return jq.each(function(){
_1ca(this,_1e9);
});
}};
$.fn.panel.parseOptions=function(_1ea){
var t=$(_1ea);
return $.extend({},$.parser.parseOptions(_1ea,["id","width","height","left","top","title","iconCls","cls","headerCls","bodyCls","tools","href",{cache:"boolean",fit:"boolean",border:"boolean",noheader:"boolean"},{collapsible:"boolean",minimizable:"boolean",maximizable:"boolean"},{closable:"boolean",collapsed:"boolean",minimized:"boolean",maximized:"boolean",closed:"boolean"}]),{loadingMessage:(t.attr("loadingMessage")!=undefined?t.attr("loadingMessage"):undefined)});
};
$.fn.panel.defaults={id:null,title:null,iconCls:null,width:"auto",height:"auto",left:null,top:null,cls:null,headerCls:null,bodyCls:null,style:{},href:null,cache:true,fit:false,border:true,doSize:true,noheader:false,content:null,collapsible:false,minimizable:false,maximizable:false,closable:false,collapsed:false,minimized:false,maximized:false,closed:false,tools:null,href:null,loadingMessage:"Loading...",extractor:function(data){
var _1eb=/<body[^>]*>((.|[\n\r])*)<\/body>/im;
var _1ec=_1eb.exec(data);
if(_1ec){
return _1ec[1];
}else{
return data;
}
},onLoad:function(){
},onBeforeOpen:function(){
},onOpen:function(){
},onBeforeClose:function(){
},onClose:function(){
},onBeforeDestroy:function(){
},onDestroy:function(){
},onResize:function(_1ed,_1ee){
},onMove:function(left,top){
},onMaximize:function(){
},onRestore:function(){
},onMinimize:function(){
},onBeforeCollapse:function(){
},onBeforeExpand:function(){
},onCollapse:function(){
},onExpand:function(){
}};
})(jQuery);
(function($){
function _1ef(_1f0,_1f1){
var opts=$.data(_1f0,"window").options;
if(_1f1){
if(_1f1.width){
opts.width=_1f1.width;
}
if(_1f1.height){
opts.height=_1f1.height;
}
if(_1f1.left!=null){
opts.left=_1f1.left;
}
if(_1f1.top!=null){
opts.top=_1f1.top;
}
}
$(_1f0).panel("resize",opts);
};
function _1f2(_1f3,_1f4){
var _1f5=$.data(_1f3,"window");
if(_1f4){
if(_1f4.left!=null){
_1f5.options.left=_1f4.left;
}
if(_1f4.top!=null){
_1f5.options.top=_1f4.top;
}
}
$(_1f3).panel("move",_1f5.options);
if(_1f5.shadow){
_1f5.shadow.css({left:_1f5.options.left,top:_1f5.options.top});
}
};
function _1f6(_1f7,_1f8){
var _1f9=$.data(_1f7,"window");
var opts=_1f9.options;
var _1fa=opts.width;
if(isNaN(_1fa)){
_1fa=_1f9.window._outerWidth();
}
if(opts.inline){
var _1fb=_1f9.window.parent();
opts.left=(_1fb.width()-_1fa)/2+_1fb.scrollLeft();
}else{
opts.left=($(window)._outerWidth()-_1fa)/2+$(document).scrollLeft();
}
if(_1f8){
_1f2(_1f7);
}
};
function _1fc(_1fd,_1fe){
var _1ff=$.data(_1fd,"window");
var opts=_1ff.options;
var _200=opts.height;
if(isNaN(_200)){
_200=_1ff.window._outerHeight();
}
if(opts.inline){
var _201=_1ff.window.parent();
opts.top=(_201.height()-_200)/2+_201.scrollTop();
}else{
opts.top=($(window)._outerHeight()-_200)/2+$(document).scrollTop();
}
if(_1fe){
_1f2(_1fd);
}
};
function _202(_203){
var _204=$.data(_203,"window");
var win=$(_203).panel($.extend({},_204.options,{border:false,doSize:true,closed:true,cls:"window",headerCls:"window-header",bodyCls:"window-body "+(_204.options.noheader?"window-body-noheader":""),onBeforeDestroy:function(){
if(_204.options.onBeforeDestroy.call(_203)==false){
return false;
}
if(_204.shadow){
_204.shadow.remove();
}
if(_204.mask){
_204.mask.remove();
}
},onClose:function(){
if(_204.shadow){
_204.shadow.hide();
}
if(_204.mask){
_204.mask.hide();
}
_204.options.onClose.call(_203);
},onOpen:function(){
if(_204.mask){
_204.mask.css({display:"block",zIndex:$.fn.window.defaults.zIndex++});
}
if(_204.shadow){
_204.shadow.css({display:"block",zIndex:$.fn.window.defaults.zIndex++,left:_204.options.left,top:_204.options.top,width:_204.window._outerWidth(),height:_204.window._outerHeight()});
}
_204.window.css("z-index",$.fn.window.defaults.zIndex++);
_204.options.onOpen.call(_203);
},onResize:function(_205,_206){
var opts=$(this).panel("options");
$.extend(_204.options,{width:opts.width,height:opts.height,left:opts.left,top:opts.top});
if(_204.shadow){
_204.shadow.css({left:_204.options.left,top:_204.options.top,width:_204.window._outerWidth(),height:_204.window._outerHeight()});
}
_204.options.onResize.call(_203,_205,_206);
},onMinimize:function(){
if(_204.shadow){
_204.shadow.hide();
}
if(_204.mask){
_204.mask.hide();
}
_204.options.onMinimize.call(_203);
},onBeforeCollapse:function(){
if(_204.options.onBeforeCollapse.call(_203)==false){
return false;
}
if(_204.shadow){
_204.shadow.hide();
}
},onExpand:function(){
if(_204.shadow){
_204.shadow.show();
}
_204.options.onExpand.call(_203);
}}));
_204.window=win.panel("panel");
if(_204.mask){
_204.mask.remove();
}
if(_204.options.modal==true){
_204.mask=$("<div class=\"window-mask\"></div>").insertAfter(_204.window);
_204.mask.css({width:(_204.options.inline?_204.mask.parent().width():_207().width),height:(_204.options.inline?_204.mask.parent().height():_207().height),display:"none"});
}
if(_204.shadow){
_204.shadow.remove();
}
if(_204.options.shadow==true){
_204.shadow=$("<div class=\"window-shadow\"></div>").insertAfter(_204.window);
_204.shadow.css({display:"none"});
}
if(_204.options.left==null){
_1f6(_203);
}
if(_204.options.top==null){
_1fc(_203);
}
_1f2(_203);
if(_204.options.closed==false){
win.window("open");
}
};
function _208(_209){
var _20a=$.data(_209,"window");
_20a.window.draggable({handle:">div.panel-header>div.panel-title",disabled:_20a.options.draggable==false,onStartDrag:function(e){
if(_20a.mask){
_20a.mask.css("z-index",$.fn.window.defaults.zIndex++);
}
if(_20a.shadow){
_20a.shadow.css("z-index",$.fn.window.defaults.zIndex++);
}
_20a.window.css("z-index",$.fn.window.defaults.zIndex++);
if(!_20a.proxy){
_20a.proxy=$("<div class=\"window-proxy\"></div>").insertAfter(_20a.window);
}
_20a.proxy.css({display:"none",zIndex:$.fn.window.defaults.zIndex++,left:e.data.left,top:e.data.top});
_20a.proxy._outerWidth(_20a.window._outerWidth());
_20a.proxy._outerHeight(_20a.window._outerHeight());
setTimeout(function(){
if(_20a.proxy){
_20a.proxy.show();
}
},500);
},onDrag:function(e){
_20a.proxy.css({display:"block",left:e.data.left,top:e.data.top});
return false;
},onStopDrag:function(e){
_20a.options.left=e.data.left;
_20a.options.top=e.data.top;
$(_209).window("move");
_20a.proxy.remove();
_20a.proxy=null;
}});
_20a.window.resizable({disabled:_20a.options.resizable==false,onStartResize:function(e){
_20a.pmask=$("<div class=\"window-proxy-mask\"></div>").insertAfter(_20a.window);
_20a.pmask.css({zIndex:$.fn.window.defaults.zIndex++,left:e.data.left,top:e.data.top,width:_20a.window._outerWidth(),height:_20a.window._outerHeight()});
if(!_20a.proxy){
_20a.proxy=$("<div class=\"window-proxy\"></div>").insertAfter(_20a.window);
}
_20a.proxy.css({zIndex:$.fn.window.defaults.zIndex++,left:e.data.left,top:e.data.top});
_20a.proxy._outerWidth(e.data.width);
_20a.proxy._outerHeight(e.data.height);
},onResize:function(e){
_20a.proxy.css({left:e.data.left,top:e.data.top});
_20a.proxy._outerWidth(e.data.width);
_20a.proxy._outerHeight(e.data.height);
return false;
},onStopResize:function(e){
$.extend(_20a.options,{left:e.data.left,top:e.data.top,width:e.data.width,height:e.data.height});
_1ef(_209);
_20a.pmask.remove();
_20a.pmask=null;
_20a.proxy.remove();
_20a.proxy=null;
}});
};
function _207(){
if(document.compatMode=="BackCompat"){
return {width:Math.max(document.body.scrollWidth,document.body.clientWidth),height:Math.max(document.body.scrollHeight,document.body.clientHeight)};
}else{
return {width:Math.max(document.documentElement.scrollWidth,document.documentElement.clientWidth),height:Math.max(document.documentElement.scrollHeight,document.documentElement.clientHeight)};
}
};
$(window).resize(function(){
$("body>div.window-mask").css({width:$(window)._outerWidth(),height:$(window)._outerHeight()});
setTimeout(function(){
$("body>div.window-mask").css({width:_207().width,height:_207().height});
},50);
});
$.fn.window=function(_20b,_20c){
if(typeof _20b=="string"){
var _20d=$.fn.window.methods[_20b];
if(_20d){
return _20d(this,_20c);
}else{
return this.panel(_20b,_20c);
}
}
_20b=_20b||{};
return this.each(function(){
var _20e=$.data(this,"window");
if(_20e){
$.extend(_20e.options,_20b);
}else{
_20e=$.data(this,"window",{options:$.extend({},$.fn.window.defaults,$.fn.window.parseOptions(this),_20b)});
if(!_20e.options.inline){
document.body.appendChild(this);
}
}
_202(this);
_208(this);
});
};
$.fn.window.methods={options:function(jq){
var _20f=jq.panel("options");
var _210=$.data(jq[0],"window").options;
return $.extend(_210,{closed:_20f.closed,collapsed:_20f.collapsed,minimized:_20f.minimized,maximized:_20f.maximized});
},window:function(jq){
return $.data(jq[0],"window").window;
},resize:function(jq,_211){
return jq.each(function(){
_1ef(this,_211);
});
},move:function(jq,_212){
return jq.each(function(){
_1f2(this,_212);
});
},hcenter:function(jq){
return jq.each(function(){
_1f6(this,true);
});
},vcenter:function(jq){
return jq.each(function(){
_1fc(this,true);
});
},center:function(jq){
return jq.each(function(){
_1f6(this);
_1fc(this);
_1f2(this);
});
}};
$.fn.window.parseOptions=function(_213){
return $.extend({},$.fn.panel.parseOptions(_213),$.parser.parseOptions(_213,[{draggable:"boolean",resizable:"boolean",shadow:"boolean",modal:"boolean",inline:"boolean"}]));
};
$.fn.window.defaults=$.extend({},$.fn.panel.defaults,{zIndex:9000,draggable:true,resizable:true,shadow:true,modal:false,inline:false,title:"New Window",collapsible:true,minimizable:true,maximizable:true,closable:true,closed:false});
})(jQuery);
(function($){
function _214(_215){
var cp=document.createElement("div");
while(_215.firstChild){
cp.appendChild(_215.firstChild);
}
_215.appendChild(cp);
var _216=$(cp);
_216.attr("style",$(_215).attr("style"));
$(_215).removeAttr("style").css("overflow","hidden");
_216.panel({border:false,doSize:false,bodyCls:"dialog-content"});
return _216;
};
function _217(_218){
var opts=$.data(_218,"dialog").options;
var _219=$.data(_218,"dialog").contentPanel;
if(opts.toolbar){
if(typeof opts.toolbar=="string"){
$(opts.toolbar).addClass("dialog-toolbar").prependTo(_218);
$(opts.toolbar).show();
}else{
$(_218).find("div.dialog-toolbar").remove();
var _21a=$("<div class=\"dialog-toolbar\"><table cellspacing=\"0\" cellpadding=\"0\"><tr></tr></table></div>").prependTo(_218);
var tr=_21a.find("tr");
for(var i=0;i<opts.toolbar.length;i++){
var btn=opts.toolbar[i];
if(btn=="-"){
$("<td><div class=\"dialog-tool-separator\"></div></td>").appendTo(tr);
}else{
var td=$("<td></td>").appendTo(tr);
var tool=$("<a href=\"javascript:void(0)\"></a>").appendTo(td);
tool[0].onclick=eval(btn.handler||function(){
});
tool.linkbutton($.extend({},btn,{plain:true}));
}
}
}
}else{
$(_218).find("div.dialog-toolbar").remove();
}
if(opts.buttons){
if(typeof opts.buttons=="string"){
$(opts.buttons).addClass("dialog-button").appendTo(_218);
$(opts.buttons).show();
}else{
$(_218).find("div.dialog-button").remove();
var _21b=$("<div class=\"dialog-button\"></div>").appendTo(_218);
for(var i=0;i<opts.buttons.length;i++){
var p=opts.buttons[i];
var _21c=$("<a href=\"javascript:void(0)\"></a>").appendTo(_21b);
if(p.handler){
_21c[0].onclick=p.handler;
}
_21c.linkbutton(p);
}
}
}else{
$(_218).find("div.dialog-button").remove();
}
var _21d=opts.href;
var _21e=opts.content;
opts.href=null;
opts.content=null;
_219.panel({closed:opts.closed,cache:opts.cache,href:_21d,content:_21e,onLoad:function(){
if(opts.height=="auto"){
$(_218).window("resize");
}
opts.onLoad.apply(_218,arguments);
}});
$(_218).window($.extend({},opts,{onOpen:function(){
if(_219.panel("options").closed){
_219.panel("open");
}
if(opts.onOpen){
opts.onOpen.call(_218);
}
},onResize:function(_21f,_220){
var _221=$(_218);
_219.panel("panel").show();
_219.panel("resize",{width:_221.width(),height:(_220=="auto")?"auto":_221.height()-_221.children("div.dialog-toolbar")._outerHeight()-_221.children("div.dialog-button")._outerHeight()});
if(opts.onResize){
opts.onResize.call(_218,_21f,_220);
}
}}));
opts.href=_21d;
opts.content=_21e;
};
function _222(_223,href){
var _224=$.data(_223,"dialog").contentPanel;
_224.panel("refresh",href);
};
$.fn.dialog=function(_225,_226){
if(typeof _225=="string"){
var _227=$.fn.dialog.methods[_225];
if(_227){
return _227(this,_226);
}else{
return this.window(_225,_226);
}
}
_225=_225||{};
return this.each(function(){
var _228=$.data(this,"dialog");
if(_228){
$.extend(_228.options,_225);
}else{
$.data(this,"dialog",{options:$.extend({},$.fn.dialog.defaults,$.fn.dialog.parseOptions(this),_225),contentPanel:_214(this)});
}
_217(this);
});
};
$.fn.dialog.methods={options:function(jq){
var _229=$.data(jq[0],"dialog").options;
var _22a=jq.panel("options");
$.extend(_229,{closed:_22a.closed,collapsed:_22a.collapsed,minimized:_22a.minimized,maximized:_22a.maximized});
var _22b=$.data(jq[0],"dialog").contentPanel;
return _229;
},dialog:function(jq){
return jq.window("window");
},refresh:function(jq,href){
return jq.each(function(){
_222(this,href);
});
}};
$.fn.dialog.parseOptions=function(_22c){
return $.extend({},$.fn.window.parseOptions(_22c),$.parser.parseOptions(_22c,["toolbar","buttons"]));
};
$.fn.dialog.defaults=$.extend({},$.fn.window.defaults,{title:"New Dialog",collapsible:false,minimizable:false,maximizable:false,resizable:false,toolbar:null,buttons:null});
})(jQuery);
(function($){
function show(el,type,_22d,_22e){
var win=$(el).window("window");
if(!win){
return;
}
switch(type){
case null:
win.show();
break;
case "slide":
win.slideDown(_22d);
break;
case "fade":
win.fadeIn(_22d);
break;
case "show":
win.show(_22d);
break;
}
var _22f=null;
if(_22e>0){
_22f=setTimeout(function(){
hide(el,type,_22d);
},_22e);
}
win.hover(function(){
if(_22f){
clearTimeout(_22f);
}
},function(){
if(_22e>0){
_22f=setTimeout(function(){
hide(el,type,_22d);
},_22e);
}
});
};
function hide(el,type,_230){
if(el.locked==true){
return;
}
el.locked=true;
var win=$(el).window("window");
if(!win){
return;
}
switch(type){
case null:
win.hide();
break;
case "slide":
win.slideUp(_230);
break;
case "fade":
win.fadeOut(_230);
break;
case "show":
win.hide(_230);
break;
}
setTimeout(function(){
$(el).window("destroy");
},_230);
};
function _231(_232){
var opts=$.extend({},$.fn.window.defaults,{collapsible:false,minimizable:false,maximizable:false,shadow:false,draggable:false,resizable:false,closed:true,style:{left:"",top:"",right:0,zIndex:$.fn.window.defaults.zIndex++,bottom:-document.body.scrollTop-document.documentElement.scrollTop},onBeforeOpen:function(){
show(this,opts.showType,opts.showSpeed,opts.timeout);
return false;
},onBeforeClose:function(){
hide(this,opts.showType,opts.showSpeed);
return false;
}},{title:"",width:250,height:100,showType:"slide",showSpeed:600,msg:"",timeout:4000},_232);
opts.style.zIndex=$.fn.window.defaults.zIndex++;
var win=$("<div class=\"messager-body\"></div>").html(opts.msg).appendTo("body");
win.window(opts);
win.window("window").css(opts.style);
win.window("open");
return win;
};
function _233(_234,_235,_236){
var win=$("<div class=\"messager-body\"></div>").appendTo("body");
win.append(_235);
if(_236){
var tb=$("<div class=\"messager-button\"></div>").appendTo(win);
for(var _237 in _236){
$("<a></a>").attr("href","javascript:void(0)").text(_237).css("margin-left",10).bind("click",eval(_236[_237])).appendTo(tb).linkbutton();
}
}
win.window({title:_234,noheader:(_234?false:true),width:300,height:"auto",modal:true,collapsible:false,minimizable:false,maximizable:false,resizable:false,onClose:function(){
setTimeout(function(){
win.window("destroy");
},100);
}});
win.window("window").addClass("messager-window");
win.children("div.messager-button").children("a:first").focus();
return win;
};
$.messager={show:function(_238){
return _231(_238);
},alert:function(_239,msg,icon,fn){
var _23a="<div>"+msg+"</div>";
switch(icon){
case "error":
_23a="<div class=\"messager-icon messager-error\"></div>"+_23a;
break;
case "info":
_23a="<div class=\"messager-icon messager-info\"></div>"+_23a;
break;
case "question":
_23a="<div class=\"messager-icon messager-question\"></div>"+_23a;
break;
case "warning":
_23a="<div class=\"messager-icon messager-warning\"></div>"+_23a;
break;
}
_23a+="<div style=\"clear:both;\"/>";
var _23b={};
_23b[$.messager.defaults.ok]=function(){
win.window("close");
if(fn){
fn();
return false;
}
};
var win=_233(_239,_23a,_23b);
return win;
},confirm:function(_23c,msg,fn){
var _23d="<div class=\"messager-icon messager-question\"></div>"+"<div>"+msg+"</div>"+"<div style=\"clear:both;\"/>";
var _23e={};
_23e[$.messager.defaults.ok]=function(){
win.window("close");
if(fn){
fn(true);
return false;
}
};
_23e[$.messager.defaults.cancel]=function(){
win.window("close");
if(fn){
fn(false);
return false;
}
};
var win=_233(_23c,_23d,_23e);
return win;
},prompt:function(_23f,msg,fn){
var _240="<div class=\"messager-icon messager-question\"></div>"+"<div>"+msg+"</div>"+"<br/>"+"<div style=\"clear:both;\"/>"+"<div><input class=\"messager-input\" type=\"text\"/></div>";
var _241={};
_241[$.messager.defaults.ok]=function(){
win.window("close");
if(fn){
fn($(".messager-input",win).val());
return false;
}
};
_241[$.messager.defaults.cancel]=function(){
win.window("close");
if(fn){
fn();
return false;
}
};
var win=_233(_23f,_240,_241);
win.children("input.messager-input").focus();
return win;
},progress:function(_242){
var _243={bar:function(){
return $("body>div.messager-window").find("div.messager-p-bar");
},close:function(){
var win=$("body>div.messager-window>div.messager-body:has(div.messager-progress)");
if(win.length){
win.window("close");
}
}};
if(typeof _242=="string"){
var _244=_243[_242];
return _244();
}
var opts=$.extend({title:"",msg:"",text:undefined,interval:300},_242||{});
var _245="<div class=\"messager-progress\"><div class=\"messager-p-msg\"></div><div class=\"messager-p-bar\"></div></div>";
var win=_233(opts.title,_245,null);
win.find("div.messager-p-msg").html(opts.msg);
var bar=win.find("div.messager-p-bar");
bar.progressbar({text:opts.text});
win.window({closable:false,onClose:function(){
if(this.timer){
clearInterval(this.timer);
}
$(this).window("destroy");
}});
if(opts.interval){
win[0].timer=setInterval(function(){
var v=bar.progressbar("getValue");
v+=10;
if(v>100){
v=0;
}
bar.progressbar("setValue",v);
},opts.interval);
}
return win;
}};
$.messager.defaults={ok:"Ok",cancel:"Cancel"};
})(jQuery);
(function($){
function _246(_247){
var opts=$.data(_247,"accordion").options;
var _248=$.data(_247,"accordion").panels;
var cc=$(_247);
opts.fit?$.extend(opts,cc._fit()):cc._fit(false);
if(opts.width>0){
cc._outerWidth(opts.width);
}
var _249="auto";
if(opts.height>0){
cc._outerHeight(opts.height);
var _24a=_248.length?_248[0].panel("header").css("height","")._outerHeight():"auto";
var _249=cc.height()-(_248.length-1)*_24a;
}
for(var i=0;i<_248.length;i++){
var _24b=_248[i];
var _24c=_24b.panel("header");
_24c._outerHeight(_24a);
_24b.panel("resize",{width:cc.width(),height:_249});
}
};
function _24d(_24e){
var _24f=$.data(_24e,"accordion").panels;
for(var i=0;i<_24f.length;i++){
var _250=_24f[i];
if(_250.panel("options").collapsed==false){
return _250;
}
}
return null;
};
function _251(_252,_253){
var _254=$.data(_252,"accordion").panels;
for(var i=0;i<_254.length;i++){
if(_254[i][0]==$(_253)[0]){
return i;
}
}
return -1;
};
function _255(_256,_257,_258){
var _259=$.data(_256,"accordion").panels;
if(typeof _257=="number"){
if(_257<0||_257>=_259.length){
return null;
}else{
var _25a=_259[_257];
if(_258){
_259.splice(_257,1);
}
return _25a;
}
}
for(var i=0;i<_259.length;i++){
var _25a=_259[i];
if(_25a.panel("options").title==_257){
if(_258){
_259.splice(i,1);
}
return _25a;
}
}
return null;
};
function _25b(_25c){
var opts=$.data(_25c,"accordion").options;
var cc=$(_25c);
if(opts.border){
cc.removeClass("accordion-noborder");
}else{
cc.addClass("accordion-noborder");
}
};
function _25d(_25e){
var cc=$(_25e);
cc.addClass("accordion");
var _25f=[];
cc.children("div").each(function(){
var opts=$.extend({},$.parser.parseOptions(this),{selected:($(this).attr("selected")?true:undefined)});
var pp=$(this);
_25f.push(pp);
_261(_25e,pp,opts);
});
cc.bind("_resize",function(e,_260){
var opts=$.data(_25e,"accordion").options;
if(opts.fit==true||_260){
_246(_25e);
}
return false;
});
return {accordion:cc,panels:_25f};
};
function _261(_262,pp,_263){
pp.panel($.extend({},_263,{collapsible:false,minimizable:false,maximizable:false,closable:false,doSize:false,collapsed:true,headerCls:"accordion-header",bodyCls:"accordion-body",onBeforeExpand:function(){
var curr=_24d(_262);
if(curr){
var _264=$(curr).panel("header");
_264.removeClass("accordion-header-selected");
_264.find(".accordion-collapse").triggerHandler("click");
}
var _264=pp.panel("header");
_264.addClass("accordion-header-selected");
_264.find(".accordion-collapse").removeClass("accordion-expand");
},onExpand:function(){
var opts=$.data(_262,"accordion").options;
opts.onSelect.call(_262,pp.panel("options").title,_251(_262,this));
},onBeforeCollapse:function(){
var _265=pp.panel("header");
_265.removeClass("accordion-header-selected");
_265.find(".accordion-collapse").addClass("accordion-expand");
}}));
var _266=pp.panel("header");
var t=$("<a class=\"accordion-collapse accordion-expand\" href=\"javascript:void(0)\"></a>").appendTo(_266.children("div.panel-tool"));
t.bind("click",function(e){
var _267=$.data(_262,"accordion").options.animate;
_272(_262);
if(pp.panel("options").collapsed){
pp.panel("expand",_267);
}else{
pp.panel("collapse",_267);
}
return false;
});
_266.click(function(){
$(this).find(".accordion-collapse").triggerHandler("click");
return false;
});
};
function _268(_269,_26a){
var _26b=_255(_269,_26a);
if(!_26b){
return;
}
var curr=_24d(_269);
if(curr&&curr[0]==_26b[0]){
return;
}
_26b.panel("header").triggerHandler("click");
};
function _26c(_26d){
var _26e=$.data(_26d,"accordion").panels;
for(var i=0;i<_26e.length;i++){
if(_26e[i].panel("options").selected){
_26f(i);
return;
}
}
if(_26e.length){
_26f(0);
}
function _26f(_270){
var opts=$.data(_26d,"accordion").options;
var _271=opts.animate;
opts.animate=false;
_268(_26d,_270);
opts.animate=_271;
};
};
function _272(_273){
var _274=$.data(_273,"accordion").panels;
for(var i=0;i<_274.length;i++){
_274[i].stop(true,true);
}
};
function add(_275,_276){
var opts=$.data(_275,"accordion").options;
var _277=$.data(_275,"accordion").panels;
if(_276.selected==undefined){
_276.selected=true;
}
_272(_275);
var pp=$("<div></div>").appendTo(_275);
_277.push(pp);
_261(_275,pp,_276);
_246(_275);
opts.onAdd.call(_275,_276.title,_277.length-1);
if(_276.selected){
_268(_275,_277.length-1);
}
};
function _278(_279,_27a){
var opts=$.data(_279,"accordion").options;
var _27b=$.data(_279,"accordion").panels;
_272(_279);
var _27c=_255(_279,_27a);
var _27d=_27c.panel("options").title;
var _27e=_251(_279,_27c);
if(opts.onBeforeRemove.call(_279,_27d,_27e)==false){
return;
}
var _27c=_255(_279,_27a,true);
if(_27c){
_27c.panel("destroy");
if(_27b.length){
_246(_279);
var curr=_24d(_279);
if(!curr){
_268(_279,0);
}
}
}
opts.onRemove.call(_279,_27d,_27e);
};
$.fn.accordion=function(_27f,_280){
if(typeof _27f=="string"){
return $.fn.accordion.methods[_27f](this,_280);
}
_27f=_27f||{};
return this.each(function(){
var _281=$.data(this,"accordion");
var opts;
if(_281){
opts=$.extend(_281.options,_27f);
_281.opts=opts;
}else{
opts=$.extend({},$.fn.accordion.defaults,$.fn.accordion.parseOptions(this),_27f);
var r=_25d(this);
$.data(this,"accordion",{options:opts,accordion:r.accordion,panels:r.panels});
}
_25b(this);
_246(this);
_26c(this);
});
};
$.fn.accordion.methods={options:function(jq){
return $.data(jq[0],"accordion").options;
},panels:function(jq){
return $.data(jq[0],"accordion").panels;
},resize:function(jq){
return jq.each(function(){
_246(this);
});
},getSelected:function(jq){
return _24d(jq[0]);
},getPanel:function(jq,_282){
return _255(jq[0],_282);
},getPanelIndex:function(jq,_283){
return _251(jq[0],_283);
},select:function(jq,_284){
return jq.each(function(){
_268(this,_284);
});
},add:function(jq,_285){
return jq.each(function(){
add(this,_285);
});
},remove:function(jq,_286){
return jq.each(function(){
_278(this,_286);
});
}};
$.fn.accordion.parseOptions=function(_287){
var t=$(_287);
return $.extend({},$.parser.parseOptions(_287,["width","height",{fit:"boolean",border:"boolean",animate:"boolean"}]));
};
$.fn.accordion.defaults={width:"auto",height:"auto",fit:false,border:true,animate:true,onSelect:function(_288,_289){
},onAdd:function(_28a,_28b){
},onBeforeRemove:function(_28c,_28d){
},onRemove:function(_28e,_28f){
}};
})(jQuery);
(function($){
function _290(_291){
var opts=$.data(_291,"tabs").options;
if(opts.tabPosition=="left"||opts.tabPosition=="right"){
return;
}
var _292=$(_291).children("div.tabs-header");
var tool=_292.children("div.tabs-tool");
var _293=_292.children("div.tabs-scroller-left");
var _294=_292.children("div.tabs-scroller-right");
var wrap=_292.children("div.tabs-wrap");
tool._outerHeight(_292.outerHeight()-(opts.plain?2:0));
var _295=0;
$("ul.tabs li",_292).each(function(){
_295+=$(this).outerWidth(true);
});
var _296=_292.width()-tool._outerWidth();
if(_295>_296){
_293.show();
_294.show();
if(opts.toolPosition=="left"){
tool.css({left:_293.outerWidth(),right:""});
wrap.css({marginLeft:_293.outerWidth()+tool._outerWidth(),marginRight:_294._outerWidth(),width:_296-_293.outerWidth()-_294.outerWidth()});
}else{
tool.css({left:"",right:_294.outerWidth()});
wrap.css({marginLeft:_293.outerWidth(),marginRight:_294.outerWidth()+tool._outerWidth(),width:_296-_293.outerWidth()-_294.outerWidth()});
}
}else{
_293.hide();
_294.hide();
if(opts.toolPosition=="left"){
tool.css({left:0,right:""});
wrap.css({marginLeft:tool._outerWidth(),marginRight:0,width:_296});
}else{
tool.css({left:"",right:0});
wrap.css({marginLeft:0,marginRight:tool._outerWidth(),width:_296});
}
}
};
function _297(_298){
var opts=$.data(_298,"tabs").options;
var _299=$(_298).children("div.tabs-header");
if(opts.tools){
if(typeof opts.tools=="string"){
$(opts.tools).addClass("tabs-tool").appendTo(_299);
$(opts.tools).show();
}else{
_299.children("div.tabs-tool").remove();
var _29a=$("<div class=\"tabs-tool\"></div>").appendTo(_299);
for(var i=0;i<opts.tools.length;i++){
var tool=$("<a href=\"javascript:void(0);\"></a>").appendTo(_29a);
tool[0].onclick=eval(opts.tools[i].handler||function(){
});
tool.linkbutton($.extend({},opts.tools[i],{plain:true}));
}
}
}else{
_299.children("div.tabs-tool").remove();
}
};
function _29b(_29c){
var opts=$.data(_29c,"tabs").options;
var cc=$(_29c);
opts.fit?$.extend(opts,cc._fit()):cc._fit(false);
cc.width(opts.width).height(opts.height);
var _29d=$(_29c).children("div.tabs-header");
var _29e=$(_29c).children("div.tabs-panels");
if(opts.tabPosition=="left"||opts.tabPosition=="right"){
_29d._outerWidth(opts.headerWidth);
_29e._outerWidth(cc.width()-opts.headerWidth);
_29d.add(_29e)._outerHeight(opts.height);
var wrap=_29d.find("div.tabs-wrap");
wrap._outerWidth(_29d.width());
_29d.find(".tabs")._outerWidth(wrap.width());
}else{
_29d.css("height","");
_29d.find("div.tabs-wrap").css("width","");
_29d.find(".tabs").css("width","");
_29d._outerWidth(opts.width);
_290(_29c);
var _29f=opts.height;
if(!isNaN(_29f)){
_29e._outerHeight(_29f-_29d.outerHeight());
}else{
_29e.height("auto");
}
var _2a0=opts.width;
if(!isNaN(_2a0)){
_29e._outerWidth(_2a0);
}else{
_29e.width("auto");
}
}
};
function _2a1(_2a2){
var opts=$.data(_2a2,"tabs").options;
var tab=_2a3(_2a2);
if(tab){
var _2a4=$(_2a2).children("div.tabs-panels");
var _2a5=opts.width=="auto"?"auto":_2a4.width();
var _2a6=opts.height=="auto"?"auto":_2a4.height();
tab.panel("resize",{width:_2a5,height:_2a6});
}
};
function _2a7(_2a8){
var tabs=$.data(_2a8,"tabs").tabs;
var cc=$(_2a8);
cc.addClass("tabs-container");
cc.wrapInner("<div class=\"tabs-panels\"/>");
$("<div class=\"tabs-header\">"+"<div class=\"tabs-scroller-left\"></div>"+"<div class=\"tabs-scroller-right\"></div>"+"<div class=\"tabs-wrap\">"+"<ul class=\"tabs\"></ul>"+"</div>"+"</div>").prependTo(_2a8);
cc.children("div.tabs-panels").children("div").each(function(i){
var opts=$.extend({},$.parser.parseOptions(this),{selected:($(this).attr("selected")?true:undefined)});
var pp=$(this);
tabs.push(pp);
_2ae(_2a8,pp,opts);
});
cc.children("div.tabs-header").find(".tabs-scroller-left, .tabs-scroller-right").hover(function(){
$(this).addClass("tabs-scroller-over");
},function(){
$(this).removeClass("tabs-scroller-over");
});
cc.bind("_resize",function(e,_2a9){
var opts=$.data(_2a8,"tabs").options;
if(opts.fit==true||_2a9){
_29b(_2a8);
_2a1(_2a8);
}
return false;
});
};
function _2aa(_2ab){
var opts=$.data(_2ab,"tabs").options;
var _2ac=$(_2ab).children("div.tabs-header");
var _2ad=$(_2ab).children("div.tabs-panels");
_2ac.removeClass("tabs-header-top tabs-header-bottom tabs-header-left tabs-header-right");
_2ad.removeClass("tabs-panels-top tabs-panels-bottom tabs-panels-left tabs-panels-right");
if(opts.tabPosition=="top"){
_2ac.insertBefore(_2ad);
}else{
if(opts.tabPosition=="bottom"){
_2ac.insertAfter(_2ad);
_2ac.addClass("tabs-header-bottom");
_2ad.addClass("tabs-panels-top");
}else{
if(opts.tabPosition=="left"){
_2ac.addClass("tabs-header-left");
_2ad.addClass("tabs-panels-right");
}else{
if(opts.tabPosition=="right"){
_2ac.addClass("tabs-header-right");
_2ad.addClass("tabs-panels-left");
}
}
}
}
if(opts.plain==true){
_2ac.addClass("tabs-header-plain");
}else{
_2ac.removeClass("tabs-header-plain");
}
if(opts.border==true){
_2ac.removeClass("tabs-header-noborder");
_2ad.removeClass("tabs-panels-noborder");
}else{
_2ac.addClass("tabs-header-noborder");
_2ad.addClass("tabs-panels-noborder");
}
$(".tabs-scroller-left",_2ac).unbind(".tabs").bind("click.tabs",function(){
$(_2ab).tabs("scrollBy",-opts.scrollIncrement);
});
$(".tabs-scroller-right",_2ac).unbind(".tabs").bind("click.tabs",function(){
$(_2ab).tabs("scrollBy",opts.scrollIncrement);
});
};
function _2ae(_2af,pp,_2b0){
var _2b1=$.data(_2af,"tabs");
_2b0=_2b0||{};
pp.panel($.extend({},_2b0,{border:false,noheader:true,closed:true,doSize:false,iconCls:(_2b0.icon?_2b0.icon:undefined),onLoad:function(){
if(_2b0.onLoad){
_2b0.onLoad.call(this,arguments);
}
_2b1.options.onLoad.call(_2af,$(this));
}}));
var opts=pp.panel("options");
var tabs=$(_2af).children("div.tabs-header").find("ul.tabs");
opts.tab=$("<li></li>").appendTo(tabs);
opts.tab.append("<a href=\"javascript:void(0)\" class=\"tabs-inner\">"+"<span class=\"tabs-title\"></span>"+"<span class=\"tabs-icon\"></span>"+"</a>");
opts.tab.unbind(".tabs").bind("click.tabs",{p:pp},function(e){
if($(this).hasClass("tabs-disabled")){
return;
}
_2b6(_2af,_2b2(_2af,e.data.p));
}).bind("contextmenu.tabs",{p:pp},function(e){
if($(this).hasClass("tabs-disabled")){
return;
}
_2b1.options.onContextMenu.call(_2af,e,$(this).find("span.tabs-title").html(),_2b2(_2af,e.data.p));
});
$(_2af).tabs("update",{tab:pp,options:opts});
};
function _2b3(_2b4,_2b5){
var opts=$.data(_2b4,"tabs").options;
var tabs=$.data(_2b4,"tabs").tabs;
if(_2b5.selected==undefined){
_2b5.selected=true;
}
var pp=$("<div></div>").appendTo($(_2b4).children("div.tabs-panels"));
tabs.push(pp);
_2ae(_2b4,pp,_2b5);
opts.onAdd.call(_2b4,_2b5.title,tabs.length-1);
_290(_2b4);
if(_2b5.selected){
_2b6(_2b4,tabs.length-1);
}
};
function _2b7(_2b8,_2b9){
var _2ba=$.data(_2b8,"tabs").selectHis;
var pp=_2b9.tab;
var _2bb=pp.panel("options").title;
pp.panel($.extend({},_2b9.options,{iconCls:(_2b9.options.icon?_2b9.options.icon:undefined)}));
var opts=pp.panel("options");
var tab=opts.tab;
var _2bc=tab.find("span.tabs-title");
var _2bd=tab.find("span.tabs-icon");
_2bc.html(opts.title);
_2bd.attr("class","tabs-icon");
tab.find("a.tabs-close").remove();
if(opts.closable){
_2bc.addClass("tabs-closable");
var _2be=$("<a href=\"javascript:void(0)\" class=\"tabs-close\"></a>").appendTo(tab);
_2be.bind("click.tabs",{p:pp},function(e){
if($(this).parent().hasClass("tabs-disabled")){
return;
}
_2c0(_2b8,_2b2(_2b8,e.data.p));
return false;
});
}else{
_2bc.removeClass("tabs-closable");
}
if(opts.iconCls){
_2bc.addClass("tabs-with-icon");
_2bd.addClass(opts.iconCls);
}else{
_2bc.removeClass("tabs-with-icon");
}
if(_2bb!=opts.title){
for(var i=0;i<_2ba.length;i++){
if(_2ba[i]==_2bb){
_2ba[i]=opts.title;
}
}
}
tab.find("span.tabs-p-tool").remove();
if(opts.tools){
var _2bf=$("<span class=\"tabs-p-tool\"></span>").insertAfter(tab.find("a.tabs-inner"));
if(typeof opts.tools=="string"){
$(opts.tools).children().appendTo(_2bf);
}else{
for(var i=0;i<opts.tools.length;i++){
var t=$("<a href=\"javascript:void(0)\"></a>").appendTo(_2bf);
t.addClass(opts.tools[i].iconCls);
if(opts.tools[i].handler){
t.bind("click",{handler:opts.tools[i].handler},function(e){
if($(this).parents("li").hasClass("tabs-disabled")){
return;
}
e.data.handler.call(this);
});
}
}
}
var pr=_2bf.children().length*12;
if(opts.closable){
pr+=8;
}else{
pr-=3;
_2bf.css("right","5px");
}
_2bc.css("padding-right",pr+"px");
}
_290(_2b8);
$.data(_2b8,"tabs").options.onUpdate.call(_2b8,opts.title,_2b2(_2b8,pp));
};
function _2c0(_2c1,_2c2){
var opts=$.data(_2c1,"tabs").options;
var tabs=$.data(_2c1,"tabs").tabs;
var _2c3=$.data(_2c1,"tabs").selectHis;
if(!_2c4(_2c1,_2c2)){
return;
}
var tab=_2c5(_2c1,_2c2);
var _2c6=tab.panel("options").title;
var _2c7=_2b2(_2c1,tab);
if(opts.onBeforeClose.call(_2c1,_2c6,_2c7)==false){
return;
}
var tab=_2c5(_2c1,_2c2,true);
tab.panel("options").tab.remove();
tab.panel("destroy");
opts.onClose.call(_2c1,_2c6,_2c7);
_290(_2c1);
for(var i=0;i<_2c3.length;i++){
if(_2c3[i]==_2c6){
_2c3.splice(i,1);
i--;
}
}
var _2c8=_2c3.pop();
if(_2c8){
_2b6(_2c1,_2c8);
}else{
if(tabs.length){
_2b6(_2c1,0);
}
}
};
function _2c5(_2c9,_2ca,_2cb){
var tabs=$.data(_2c9,"tabs").tabs;
if(typeof _2ca=="number"){
if(_2ca<0||_2ca>=tabs.length){
return null;
}else{
var tab=tabs[_2ca];
if(_2cb){
tabs.splice(_2ca,1);
}
return tab;
}
}
for(var i=0;i<tabs.length;i++){
var tab=tabs[i];
if(tab.panel("options").title==_2ca){
if(_2cb){
tabs.splice(i,1);
}
return tab;
}
}
return null;
};
function _2b2(_2cc,tab){
var tabs=$.data(_2cc,"tabs").tabs;
for(var i=0;i<tabs.length;i++){
if(tabs[i][0]==$(tab)[0]){
return i;
}
}
return -1;
};
function _2a3(_2cd){
var tabs=$.data(_2cd,"tabs").tabs;
for(var i=0;i<tabs.length;i++){
var tab=tabs[i];
if(tab.panel("options").closed==false){
return tab;
}
}
return null;
};
function _2ce(_2cf){
var tabs=$.data(_2cf,"tabs").tabs;
for(var i=0;i<tabs.length;i++){
if(tabs[i].panel("options").selected){
_2b6(_2cf,i);
return;
}
}
if(tabs.length){
_2b6(_2cf,0);
}
};
function _2b6(_2d0,_2d1){
var opts=$.data(_2d0,"tabs").options;
var tabs=$.data(_2d0,"tabs").tabs;
var _2d2=$.data(_2d0,"tabs").selectHis;
if(tabs.length==0){
return;
}
var _2d3=_2c5(_2d0,_2d1);
if(!_2d3){
return;
}
var _2d4=_2a3(_2d0);
if(_2d4){
_2d4.panel("close");
_2d4.panel("options").tab.removeClass("tabs-selected");
}
_2d3.panel("open");
var _2d5=_2d3.panel("options").title;
_2d2.push(_2d5);
var tab=_2d3.panel("options").tab;
tab.addClass("tabs-selected");
var wrap=$(_2d0).find(">div.tabs-header>div.tabs-wrap");
var left=tab.position().left;
var _2d6=left+tab.outerWidth();
if(left<0||_2d6>wrap.width()){
var _2d7=left-(wrap.width()-tab.width())/2;
$(_2d0).tabs("scrollBy",_2d7);
}else{
$(_2d0).tabs("scrollBy",0);
}
_2a1(_2d0);
opts.onSelect.call(_2d0,_2d5,_2b2(_2d0,_2d3));
};
function _2c4(_2d8,_2d9){
return _2c5(_2d8,_2d9)!=null;
};
$.fn.tabs=function(_2da,_2db){
if(typeof _2da=="string"){
return $.fn.tabs.methods[_2da](this,_2db);
}
_2da=_2da||{};
return this.each(function(){
var _2dc=$.data(this,"tabs");
var opts;
if(_2dc){
opts=$.extend(_2dc.options,_2da);
_2dc.options=opts;
}else{
$.data(this,"tabs",{options:$.extend({},$.fn.tabs.defaults,$.fn.tabs.parseOptions(this),_2da),tabs:[],selectHis:[]});
_2a7(this);
}
_297(this);
_2aa(this);
_29b(this);
_2ce(this);
});
};
$.fn.tabs.methods={options:function(jq){
return $.data(jq[0],"tabs").options;
},tabs:function(jq){
return $.data(jq[0],"tabs").tabs;
},resize:function(jq){
return jq.each(function(){
_29b(this);
_2a1(this);
});
},add:function(jq,_2dd){
return jq.each(function(){
_2b3(this,_2dd);
});
},close:function(jq,_2de){
return jq.each(function(){
_2c0(this,_2de);
});
},getTab:function(jq,_2df){
return _2c5(jq[0],_2df);
},getTabIndex:function(jq,tab){
return _2b2(jq[0],tab);
},getSelected:function(jq){
return _2a3(jq[0]);
},select:function(jq,_2e0){
return jq.each(function(){
_2b6(this,_2e0);
});
},exists:function(jq,_2e1){
return _2c4(jq[0],_2e1);
},update:function(jq,_2e2){
return jq.each(function(){
_2b7(this,_2e2);
});
},enableTab:function(jq,_2e3){
return jq.each(function(){
$(this).tabs("getTab",_2e3).panel("options").tab.removeClass("tabs-disabled");
});
},disableTab:function(jq,_2e4){
return jq.each(function(){
$(this).tabs("getTab",_2e4).panel("options").tab.addClass("tabs-disabled");
});
},scrollBy:function(jq,_2e5){
return jq.each(function(){
var opts=$(this).tabs("options");
var wrap=$(this).find(">div.tabs-header>div.tabs-wrap");
var pos=Math.min(wrap._scrollLeft()+_2e5,_2e6());
wrap.animate({scrollLeft:pos},opts.scrollDuration);
function _2e6(){
var w=0;
var ul=wrap.children("ul");
ul.children("li").each(function(){
w+=$(this).outerWidth(true);
});
return w-wrap.width()+(ul.outerWidth()-ul.width());
};
});
}};
$.fn.tabs.parseOptions=function(_2e7){
return $.extend({},$.parser.parseOptions(_2e7,["width","height","tools","toolPosition","tabPosition",{fit:"boolean",border:"boolean",plain:"boolean",headerWidth:"number"}]));
};
$.fn.tabs.defaults={width:"auto",height:"auto",headerWidth:150,plain:false,fit:false,border:true,tools:null,toolPosition:"right",tabPosition:"top",scrollIncrement:100,scrollDuration:400,onLoad:function(_2e8){
},onSelect:function(_2e9,_2ea){
},onBeforeClose:function(_2eb,_2ec){
},onClose:function(_2ed,_2ee){
},onAdd:function(_2ef,_2f0){
},onUpdate:function(_2f1,_2f2){
},onContextMenu:function(e,_2f3,_2f4){
}};
})(jQuery);
(function($){
var _2f5=false;
function _2f6(_2f7){
var opts=$.data(_2f7,"layout").options;
var _2f8=$.data(_2f7,"layout").panels;
var cc=$(_2f7);
opts.fit?cc.css(cc._fit()):cc._fit(false);
var cpos={top:0,left:0,width:cc.width(),height:cc.height()};
function _2f9(pp){
if(pp.length==0){
return;
}
pp.panel("resize",{width:cc.width(),height:pp.panel("options").height,left:0,top:0});
cpos.top+=pp.panel("options").height;
cpos.height-=pp.panel("options").height;
};
if(_2fd(_2f8.expandNorth)){
_2f9(_2f8.expandNorth);
}else{
_2f9(_2f8.north);
}
function _2fa(pp){
if(pp.length==0){
return;
}
pp.panel("resize",{width:cc.width(),height:pp.panel("options").height,left:0,top:cc.height()-pp.panel("options").height});
cpos.height-=pp.panel("options").height;
};
if(_2fd(_2f8.expandSouth)){
_2fa(_2f8.expandSouth);
}else{
_2fa(_2f8.south);
}
function _2fb(pp){
if(pp.length==0){
return;
}
pp.panel("resize",{width:pp.panel("options").width,height:cpos.height,left:cc.width()-pp.panel("options").width,top:cpos.top});
cpos.width-=pp.panel("options").width;
};
if(_2fd(_2f8.expandEast)){
_2fb(_2f8.expandEast);
}else{
_2fb(_2f8.east);
}
function _2fc(pp){
if(pp.length==0){
return;
}
pp.panel("resize",{width:pp.panel("options").width,height:cpos.height,left:0,top:cpos.top});
cpos.left+=pp.panel("options").width;
cpos.width-=pp.panel("options").width;
};
if(_2fd(_2f8.expandWest)){
_2fc(_2f8.expandWest);
}else{
_2fc(_2f8.west);
}
_2f8.center.panel("resize",cpos);
};
function init(_2fe){
var cc=$(_2fe);
if(cc[0].tagName=="BODY"){
$("html").addClass("panel-fit");
}
cc.addClass("layout");
function _2ff(cc){
cc.children("div").each(function(){
var opts=$.parser.parseOptions(this,["region"]);
var r=opts.region;
if(r=="north"||r=="south"||r=="east"||r=="west"||r=="center"){
_301(_2fe,{region:r},this);
}
});
};
cc.children("form").length?_2ff(cc.children("form")):_2ff(cc);
$("<div class=\"layout-split-proxy-h\"></div>").appendTo(cc);
$("<div class=\"layout-split-proxy-v\"></div>").appendTo(cc);
cc.bind("_resize",function(e,_300){
var opts=$.data(_2fe,"layout").options;
if(opts.fit==true||_300){
_2f6(_2fe);
}
return false;
});
};
function _301(_302,_303,el){
_303.region=_303.region||"center";
var _304=$.data(_302,"layout").panels;
var cc=$(_302);
var dir=_303.region;
if(_304[dir].length){
return;
}
var pp=$(el);
if(!pp.length){
pp=$("<div></div>").appendTo(cc);
}
pp.panel($.extend({},{width:(pp.length?parseInt(pp[0].style.width)||pp.outerWidth():"auto"),height:(pp.length?parseInt(pp[0].style.height)||pp.outerHeight():"auto"),split:(pp.attr("split")?pp.attr("split")=="true":undefined),doSize:false,cls:("layout-panel layout-panel-"+dir),bodyCls:"layout-body",onOpen:function(){
var _305={north:"up",south:"down",east:"right",west:"left"};
if(!_305[dir]){
return;
}
var _306="layout-button-"+_305[dir];
var tool=$(this).panel("header").children("div.panel-tool");
if(!tool.children("a."+_306).length){
var t=$("<a href=\"javascript:void(0)\"></a>").addClass(_306).appendTo(tool);
t.bind("click",{dir:dir},function(e){
_312(_302,e.data.dir);
return false;
});
}
}},_303));
_304[dir]=pp;
if(pp.panel("options").split){
var _307=pp.panel("panel");
_307.addClass("layout-split-"+dir);
var _308="";
if(dir=="north"){
_308="s";
}
if(dir=="south"){
_308="n";
}
if(dir=="east"){
_308="w";
}
if(dir=="west"){
_308="e";
}
_307.resizable({handles:_308,onStartResize:function(e){
_2f5=true;
if(dir=="north"||dir=="south"){
var _309=$(">div.layout-split-proxy-v",_302);
}else{
var _309=$(">div.layout-split-proxy-h",_302);
}
var top=0,left=0,_30a=0,_30b=0;
var pos={display:"block"};
if(dir=="north"){
pos.top=parseInt(_307.css("top"))+_307.outerHeight()-_309.height();
pos.left=parseInt(_307.css("left"));
pos.width=_307.outerWidth();
pos.height=_309.height();
}else{
if(dir=="south"){
pos.top=parseInt(_307.css("top"));
pos.left=parseInt(_307.css("left"));
pos.width=_307.outerWidth();
pos.height=_309.height();
}else{
if(dir=="east"){
pos.top=parseInt(_307.css("top"))||0;
pos.left=parseInt(_307.css("left"))||0;
pos.width=_309.width();
pos.height=_307.outerHeight();
}else{
if(dir=="west"){
pos.top=parseInt(_307.css("top"))||0;
pos.left=_307.outerWidth()-_309.width();
pos.width=_309.width();
pos.height=_307.outerHeight();
}
}
}
}
_309.css(pos);
$("<div class=\"layout-mask\"></div>").css({left:0,top:0,width:cc.width(),height:cc.height()}).appendTo(cc);
},onResize:function(e){
if(dir=="north"||dir=="south"){
var _30c=$(">div.layout-split-proxy-v",_302);
_30c.css("top",e.pageY-$(_302).offset().top-_30c.height()/2);
}else{
var _30c=$(">div.layout-split-proxy-h",_302);
_30c.css("left",e.pageX-$(_302).offset().left-_30c.width()/2);
}
return false;
},onStopResize:function(){
$(">div.layout-split-proxy-v",_302).css("display","none");
$(">div.layout-split-proxy-h",_302).css("display","none");
var opts=pp.panel("options");
opts.width=_307.outerWidth();
opts.height=_307.outerHeight();
opts.left=_307.css("left");
opts.top=_307.css("top");
pp.panel("resize");
_2f6(_302);
_2f5=false;
cc.find(">div.layout-mask").remove();
}});
}
};
function _30d(_30e,_30f){
var _310=$.data(_30e,"layout").panels;
if(_310[_30f].length){
_310[_30f].panel("destroy");
_310[_30f]=$();
var _311="expand"+_30f.substring(0,1).toUpperCase()+_30f.substring(1);
if(_310[_311]){
_310[_311].panel("destroy");
_310[_311]=undefined;
}
}
};
function _312(_313,_314,_315){
if(_315==undefined){
_315="normal";
}
var _316=$.data(_313,"layout").panels;
var p=_316[_314];
if(p.panel("options").onBeforeCollapse.call(p)==false){
return;
}
var _317="expand"+_314.substring(0,1).toUpperCase()+_314.substring(1);
if(!_316[_317]){
_316[_317]=_318(_314);
_316[_317].panel("panel").click(function(){
var _319=_31a();
p.panel("expand",false).panel("open").panel("resize",_319.collapse);
p.panel("panel").animate(_319.expand);
return false;
});
}
var _31b=_31a();
if(!_2fd(_316[_317])){
_316.center.panel("resize",_31b.resizeC);
}
p.panel("panel").animate(_31b.collapse,_315,function(){
p.panel("collapse",false).panel("close");
_316[_317].panel("open").panel("resize",_31b.expandP);
});
function _318(dir){
var icon;
if(dir=="east"){
icon="layout-button-left";
}else{
if(dir=="west"){
icon="layout-button-right";
}else{
if(dir=="north"){
icon="layout-button-down";
}else{
if(dir=="south"){
icon="layout-button-up";
}
}
}
}
var p=$("<div></div>").appendTo(_313).panel({cls:"layout-expand",title:"&nbsp;",closed:true,doSize:false,tools:[{iconCls:icon,handler:function(){
_31c(_313,_314);
return false;
}}]});
p.panel("panel").hover(function(){
$(this).addClass("layout-expand-over");
},function(){
$(this).removeClass("layout-expand-over");
});
return p;
};
function _31a(){
var cc=$(_313);
if(_314=="east"){
return {resizeC:{width:_316.center.panel("options").width+_316["east"].panel("options").width-28},expand:{left:cc.width()-_316["east"].panel("options").width},expandP:{top:_316["east"].panel("options").top,left:cc.width()-28,width:28,height:_316["center"].panel("options").height},collapse:{left:cc.width()}};
}else{
if(_314=="west"){
return {resizeC:{width:_316.center.panel("options").width+_316["west"].panel("options").width-28,left:28},expand:{left:0},expandP:{left:0,top:_316["west"].panel("options").top,width:28,height:_316["center"].panel("options").height},collapse:{left:-_316["west"].panel("options").width}};
}else{
if(_314=="north"){
var hh=cc.height()-28;
if(_2fd(_316.expandSouth)){
hh-=_316.expandSouth.panel("options").height;
}else{
if(_2fd(_316.south)){
hh-=_316.south.panel("options").height;
}
}
_316.east.panel("resize",{top:28,height:hh});
_316.west.panel("resize",{top:28,height:hh});
if(_2fd(_316.expandEast)){
_316.expandEast.panel("resize",{top:28,height:hh});
}
if(_2fd(_316.expandWest)){
_316.expandWest.panel("resize",{top:28,height:hh});
}
return {resizeC:{top:28,height:hh},expand:{top:0},expandP:{top:0,left:0,width:cc.width(),height:28},collapse:{top:-_316["north"].panel("options").height}};
}else{
if(_314=="south"){
var hh=cc.height()-28;
if(_2fd(_316.expandNorth)){
hh-=_316.expandNorth.panel("options").height;
}else{
if(_2fd(_316.north)){
hh-=_316.north.panel("options").height;
}
}
_316.east.panel("resize",{height:hh});
_316.west.panel("resize",{height:hh});
if(_2fd(_316.expandEast)){
_316.expandEast.panel("resize",{height:hh});
}
if(_2fd(_316.expandWest)){
_316.expandWest.panel("resize",{height:hh});
}
return {resizeC:{height:hh},expand:{top:cc.height()-_316["south"].panel("options").height},expandP:{top:cc.height()-28,left:0,width:cc.width(),height:28},collapse:{top:cc.height()}};
}
}
}
}
};
};
function _31c(_31d,_31e){
var _31f=$.data(_31d,"layout").panels;
var _320=_321();
var p=_31f[_31e];
if(p.panel("options").onBeforeExpand.call(p)==false){
return;
}
var _322="expand"+_31e.substring(0,1).toUpperCase()+_31e.substring(1);
_31f[_322].panel("close");
p.panel("panel").stop(true,true);
p.panel("expand",false).panel("open").panel("resize",_320.collapse);
p.panel("panel").animate(_320.expand,function(){
_2f6(_31d);
});
function _321(){
var cc=$(_31d);
if(_31e=="east"&&_31f.expandEast){
return {collapse:{left:cc.width()},expand:{left:cc.width()-_31f["east"].panel("options").width}};
}else{
if(_31e=="west"&&_31f.expandWest){
return {collapse:{left:-_31f["west"].panel("options").width},expand:{left:0}};
}else{
if(_31e=="north"&&_31f.expandNorth){
return {collapse:{top:-_31f["north"].panel("options").height},expand:{top:0}};
}else{
if(_31e=="south"&&_31f.expandSouth){
return {collapse:{top:cc.height()},expand:{top:cc.height()-_31f["south"].panel("options").height}};
}
}
}
}
};
};
function _323(_324){
var _325=$.data(_324,"layout").panels;
var cc=$(_324);
if(_325.east.length){
_325.east.panel("panel").bind("mouseover","east",_326);
}
if(_325.west.length){
_325.west.panel("panel").bind("mouseover","west",_326);
}
if(_325.north.length){
_325.north.panel("panel").bind("mouseover","north",_326);
}
if(_325.south.length){
_325.south.panel("panel").bind("mouseover","south",_326);
}
_325.center.panel("panel").bind("mouseover","center",_326);
function _326(e){
if(_2f5==true){
return;
}
if(e.data!="east"&&_2fd(_325.east)&&_2fd(_325.expandEast)){
_312(_324,"east");
}
if(e.data!="west"&&_2fd(_325.west)&&_2fd(_325.expandWest)){
_312(_324,"west");
}
if(e.data!="north"&&_2fd(_325.north)&&_2fd(_325.expandNorth)){
_312(_324,"north");
}
if(e.data!="south"&&_2fd(_325.south)&&_2fd(_325.expandSouth)){
_312(_324,"south");
}
return false;
};
};
function _2fd(pp){
if(!pp){
return false;
}
if(pp.length){
return pp.panel("panel").is(":visible");
}else{
return false;
}
};
function _327(_328){
var _329=$.data(_328,"layout").panels;
if(_329.east.length&&_329.east.panel("options").collapsed){
_312(_328,"east",0);
}
if(_329.west.length&&_329.west.panel("options").collapsed){
_312(_328,"west",0);
}
if(_329.north.length&&_329.north.panel("options").collapsed){
_312(_328,"north",0);
}
if(_329.south.length&&_329.south.panel("options").collapsed){
_312(_328,"south",0);
}
};
$.fn.layout=function(_32a,_32b){
if(typeof _32a=="string"){
return $.fn.layout.methods[_32a](this,_32b);
}
_32a=_32a||{};
return this.each(function(){
var _32c=$.data(this,"layout");
if(_32c){
$.extend(_32c.options,_32a);
}else{
var opts=$.extend({},$.fn.layout.defaults,$.fn.layout.parseOptions(this),_32a);
$.data(this,"layout",{options:opts,panels:{center:$(),north:$(),south:$(),east:$(),west:$()}});
init(this);
_323(this);
}
_2f6(this);
_327(this);
});
};
$.fn.layout.methods={resize:function(jq){
return jq.each(function(){
_2f6(this);
});
},panel:function(jq,_32d){
return $.data(jq[0],"layout").panels[_32d];
},collapse:function(jq,_32e){
return jq.each(function(){
_312(this,_32e);
});
},expand:function(jq,_32f){
return jq.each(function(){
_31c(this,_32f);
});
},add:function(jq,_330){
return jq.each(function(){
_301(this,_330);
_2f6(this);
if($(this).layout("panel",_330.region).panel("options").collapsed){
_312(this,_330.region,0);
}
});
},remove:function(jq,_331){
return jq.each(function(){
_30d(this,_331);
_2f6(this);
});
}};
$.fn.layout.parseOptions=function(_332){
return $.extend({},$.parser.parseOptions(_332,[{fit:"boolean"}]));
};
$.fn.layout.defaults={fit:false};
})(jQuery);
(function($){
function init(_333){
$(_333).appendTo("body");
$(_333).addClass("menu-top");
$(document).unbind(".menu").bind("mousedown.menu",function(e){
var _334=$("body>div.menu:visible");
var m=$(e.target).closest("div.menu",_334);
if(m.length){
return;
}
$("body>div.menu-top:visible").menu("hide");
});
var _335=_336($(_333));
for(var i=0;i<_335.length;i++){
_337(_335[i]);
}
function _336(menu){
var _338=[];
menu.addClass("menu");
if(!menu[0].style.width){
menu[0].autowidth=true;
}
_338.push(menu);
if(!menu.hasClass("menu-content")){
menu.children("div").each(function(){
var _339=$(this).children("div");
if(_339.length){
_339.insertAfter(_333);
this.submenu=_339;
var mm=_336(_339);
_338=_338.concat(mm);
}
});
}
return _338;
};
function _337(menu){
if(!menu.hasClass("menu-content")){
menu.children("div").each(function(){
var item=$(this);
if(item.hasClass("menu-sep")){
item.html("&nbsp;");
}else{
var _33a=$.extend({},$.parser.parseOptions(this,["name","iconCls","href"]),{disabled:(item.attr("disabled")?true:undefined)});
item.attr("name",_33a.name||"").attr("href",_33a.href||"");
var text=item.addClass("menu-item").html();
item.empty().append($("<div class=\"menu-text\"></div>").html(text));
if(_33a.iconCls){
$("<div class=\"menu-icon\"></div>").addClass(_33a.iconCls).appendTo(item);
}
if(_33a.disabled){
_33b(_333,item[0],true);
}
if(item[0].submenu){
$("<div class=\"menu-rightarrow\"></div>").appendTo(item);
}
item._outerHeight(22);
_33c(_333,item);
}
});
}
_33d(_333,menu);
menu.hide();
_33e(_333,menu);
};
};
function _33d(_33f,menu){
var opts=$.data(_33f,"menu").options;
var d=menu.css("display");
menu.css({display:"block",left:-10000});
var _340=menu._outerWidth();
var _341=0;
menu.find("div.menu-text").each(function(){
if(_341<$(this)._outerWidth()){
_341=$(this)._outerWidth();
}
});
_341+=65;
menu._outerWidth(Math.max(_340,_341,opts.minWidth));
menu.css("display",d);
};
function _33e(_342,menu){
var _343=$.data(_342,"menu");
menu.unbind(".menu").bind("mouseenter.menu",function(){
if(_343.timer){
clearTimeout(_343.timer);
_343.timer=null;
}
}).bind("mouseleave.menu",function(){
_343.timer=setTimeout(function(){
_344(_342);
},100);
});
};
function _33c(_345,item){
item.unbind(".menu");
item.bind("click.menu",function(){
if($(this).hasClass("menu-item-disabled")){
return;
}
if(!this.submenu){
_344(_345);
var href=$(this).attr("href");
if(href){
location.href=href;
}
}
var item=$(_345).menu("getItem",this);
$.data(_345,"menu").options.onClick.call(_345,item);
}).bind("mouseenter.menu",function(e){
item.siblings().each(function(){
if(this.submenu){
_348(this.submenu);
}
$(this).removeClass("menu-active");
});
item.addClass("menu-active");
if($(this).hasClass("menu-item-disabled")){
item.addClass("menu-active-disabled");
return;
}
var _346=item[0].submenu;
if(_346){
$(_345).menu("show",{menu:_346,parent:item});
}
}).bind("mouseleave.menu",function(e){
item.removeClass("menu-active menu-active-disabled");
var _347=item[0].submenu;
if(_347){
if(e.pageX>=parseInt(_347.css("left"))){
item.addClass("menu-active");
}else{
_348(_347);
}
}else{
item.removeClass("menu-active");
}
});
};
function _344(_349){
var _34a=$.data(_349,"menu");
if(_34a){
if($(_349).is(":visible")){
_348($(_349));
_34a.options.onHide.call(_349);
}
}
return false;
};
function _34b(_34c,_34d){
var left,top;
var menu=$(_34d.menu||_34c);
if(menu.hasClass("menu-top")){
var opts=$.data(_34c,"menu").options;
left=opts.left;
top=opts.top;
if(_34d.alignTo){
var at=$(_34d.alignTo);
left=at.offset().left;
top=at.offset().top+at._outerHeight();
}
if(_34d.left!=undefined){
left=_34d.left;
}
if(_34d.top!=undefined){
top=_34d.top;
}
if(left+menu.outerWidth()>$(window)._outerWidth()+$(document)._scrollLeft()){
left=$(window)._outerWidth()+$(document).scrollLeft()-menu.outerWidth()-5;
}
if(top+menu.outerHeight()>$(window)._outerHeight()+$(document).scrollTop()){
top-=menu.outerHeight();
}
}else{
var _34e=_34d.parent;
left=_34e.offset().left+_34e.outerWidth()-2;
if(left+menu.outerWidth()+5>$(window)._outerWidth()+$(document).scrollLeft()){
left=_34e.offset().left-menu.outerWidth()+2;
}
var top=_34e.offset().top-3;
if(top+menu.outerHeight()>$(window)._outerHeight()+$(document).scrollTop()){
top=$(window)._outerHeight()+$(document).scrollTop()-menu.outerHeight()-5;
}
}
menu.css({left:left,top:top});
menu.show(0,function(){
if(!menu[0].shadow){
menu[0].shadow=$("<div class=\"menu-shadow\"></div>").insertAfter(menu);
}
menu[0].shadow.css({display:"block",zIndex:$.fn.menu.defaults.zIndex++,left:menu.css("left"),top:menu.css("top"),width:menu.outerWidth(),height:menu.outerHeight()});
menu.css("z-index",$.fn.menu.defaults.zIndex++);
if(menu.hasClass("menu-top")){
$.data(menu[0],"menu").options.onShow.call(menu[0]);
}
});
};
function _348(menu){
if(!menu){
return;
}
_34f(menu);
menu.find("div.menu-item").each(function(){
if(this.submenu){
_348(this.submenu);
}
$(this).removeClass("menu-active");
});
function _34f(m){
m.stop(true,true);
if(m[0].shadow){
m[0].shadow.hide();
}
m.hide();
};
};
function _350(_351,text){
var _352=null;
var tmp=$("<div></div>");
function find(menu){
menu.children("div.menu-item").each(function(){
var item=$(_351).menu("getItem",this);
var s=tmp.empty().html(item.text).text();
if(text==$.trim(s)){
_352=item;
}else{
if(this.submenu&&!_352){
find(this.submenu);
}
}
});
};
find($(_351));
tmp.remove();
return _352;
};
function _33b(_353,_354,_355){
var t=$(_354);
if(_355){
t.addClass("menu-item-disabled");
if(_354.onclick){
_354.onclick1=_354.onclick;
_354.onclick=null;
}
}else{
t.removeClass("menu-item-disabled");
if(_354.onclick1){
_354.onclick=_354.onclick1;
_354.onclick1=null;
}
}
};
function _356(_357,_358){
var menu=$(_357);
if(_358.parent){
if(!_358.parent.submenu){
var _359=$("<div class=\"menu\"></div>").appendTo("body");
_359[0].autowidth=true;
_359.hide();
_358.parent.submenu=_359;
$("<div class=\"menu-rightarrow\"></div>").appendTo(_358.parent);
}
menu=_358.parent.submenu;
}
var item=$("<div class=\"menu-item\"></div>").appendTo(menu);
$("<div class=\"menu-text\"></div>").html(_358.text).appendTo(item);
if(_358.iconCls){
$("<div class=\"menu-icon\"></div>").addClass(_358.iconCls).appendTo(item);
}
if(_358.id){
item.attr("id",_358.id);
}
if(_358.href){
item.attr("href",_358.href);
}
if(_358.name){
item.attr("name",_358.name);
}
if(_358.onclick){
if(typeof _358.onclick=="string"){
item.attr("onclick",_358.onclick);
}else{
item[0].onclick=eval(_358.onclick);
}
}
if(_358.handler){
item[0].onclick=eval(_358.handler);
}
_33c(_357,item);
if(_358.disabled){
_33b(_357,item[0],true);
}
_33e(_357,menu);
_33d(_357,menu);
};
function _35a(_35b,_35c){
function _35d(el){
if(el.submenu){
el.submenu.children("div.menu-item").each(function(){
_35d(this);
});
var _35e=el.submenu[0].shadow;
if(_35e){
_35e.remove();
}
el.submenu.remove();
}
$(el).remove();
};
_35d(_35c);
};
function _35f(_360){
$(_360).children("div.menu-item").each(function(){
_35a(_360,this);
});
if(_360.shadow){
_360.shadow.remove();
}
$(_360).remove();
};
$.fn.menu=function(_361,_362){
if(typeof _361=="string"){
return $.fn.menu.methods[_361](this,_362);
}
_361=_361||{};
return this.each(function(){
var _363=$.data(this,"menu");
if(_363){
$.extend(_363.options,_361);
}else{
_363=$.data(this,"menu",{options:$.extend({},$.fn.menu.defaults,$.fn.menu.parseOptions(this),_361)});
init(this);
}
$(this).css({left:_363.options.left,top:_363.options.top});
});
};
$.fn.menu.methods={options:function(jq){
return $.data(jq[0],"menu").options;
},show:function(jq,pos){
return jq.each(function(){
_34b(this,pos);
});
},hide:function(jq){
return jq.each(function(){
_344(this);
});
},destroy:function(jq){
return jq.each(function(){
_35f(this);
});
},setText:function(jq,_364){
return jq.each(function(){
$(_364.target).children("div.menu-text").html(_364.text);
});
},setIcon:function(jq,_365){
return jq.each(function(){
var item=$(this).menu("getItem",_365.target);
if(item.iconCls){
$(item.target).children("div.menu-icon").removeClass(item.iconCls).addClass(_365.iconCls);
}else{
$("<div class=\"menu-icon\"></div>").addClass(_365.iconCls).appendTo(_365.target);
}
});
},getItem:function(jq,_366){
var t=$(_366);
var item={target:_366,id:t.attr("id"),text:$.trim(t.children("div.menu-text").html()),disabled:t.hasClass("menu-item-disabled"),href:t.attr("href"),name:t.attr("name"),onclick:_366.onclick};
var icon=t.children("div.menu-icon");
if(icon.length){
var cc=[];
var aa=icon.attr("class").split(" ");
for(var i=0;i<aa.length;i++){
if(aa[i]!="menu-icon"){
cc.push(aa[i]);
}
}
item.iconCls=cc.join(" ");
}
return item;
},findItem:function(jq,text){
return _350(jq[0],text);
},appendItem:function(jq,_367){
return jq.each(function(){
_356(this,_367);
});
},removeItem:function(jq,_368){
return jq.each(function(){
_35a(this,_368);
});
},enableItem:function(jq,_369){
return jq.each(function(){
_33b(this,_369,false);
});
},disableItem:function(jq,_36a){
return jq.each(function(){
_33b(this,_36a,true);
});
}};
$.fn.menu.parseOptions=function(_36b){
return $.extend({},$.parser.parseOptions(_36b,["left","top",{minWidth:"number"}]));
};
$.fn.menu.defaults={zIndex:110000,left:0,top:0,minWidth:120,onShow:function(){
},onHide:function(){
},onClick:function(item){
}};
})(jQuery);
(function($){
function init(_36c){
var opts=$.data(_36c,"menubutton").options;
var btn=$(_36c);
btn.removeClass("m-btn-active m-btn-plain-active").addClass("m-btn");
btn.linkbutton($.extend({},opts,{text:opts.text+"<span class=\"m-btn-downarrow\">&nbsp;</span>"}));
if(opts.menu){
$(opts.menu).menu({onShow:function(){
btn.addClass((opts.plain==true)?"m-btn-plain-active":"m-btn-active");
},onHide:function(){
btn.removeClass((opts.plain==true)?"m-btn-plain-active":"m-btn-active");
}});
}
_36d(_36c,opts.disabled);
};
function _36d(_36e,_36f){
var opts=$.data(_36e,"menubutton").options;
opts.disabled=_36f;
var btn=$(_36e);
if(_36f){
btn.linkbutton("disable");
btn.unbind(".menubutton");
}else{
btn.linkbutton("enable");
btn.unbind(".menubutton");
btn.bind("click.menubutton",function(){
_370();
return false;
});
var _371=null;
btn.bind("mouseenter.menubutton",function(){
_371=setTimeout(function(){
_370();
},opts.duration);
return false;
}).bind("mouseleave.menubutton",function(){
if(_371){
clearTimeout(_371);
}
});
}
function _370(){
if(!opts.menu){
return;
}
$("body>div.menu-top").menu("hide");
$(opts.menu).menu("show",{alignTo:btn});
btn.blur();
};
};
$.fn.menubutton=function(_372,_373){
if(typeof _372=="string"){
return $.fn.menubutton.methods[_372](this,_373);
}
_372=_372||{};
return this.each(function(){
var _374=$.data(this,"menubutton");
if(_374){
$.extend(_374.options,_372);
}else{
$.data(this,"menubutton",{options:$.extend({},$.fn.menubutton.defaults,$.fn.menubutton.parseOptions(this),_372)});
$(this).removeAttr("disabled");
}
init(this);
});
};
$.fn.menubutton.methods={options:function(jq){
return $.data(jq[0],"menubutton").options;
},enable:function(jq){
return jq.each(function(){
_36d(this,false);
});
},disable:function(jq){
return jq.each(function(){
_36d(this,true);
});
},destroy:function(jq){
return jq.each(function(){
var opts=$(this).menubutton("options");
if(opts.menu){
$(opts.menu).menu("destroy");
}
$(this).remove();
});
}};
$.fn.menubutton.parseOptions=function(_375){
var t=$(_375);
return $.extend({},$.fn.linkbutton.parseOptions(_375),$.parser.parseOptions(_375,["menu",{plain:"boolean",duration:"number"}]));
};
$.fn.menubutton.defaults=$.extend({},$.fn.linkbutton.defaults,{plain:true,menu:null,duration:100});
})(jQuery);
(function($){
function init(_376){
var opts=$.data(_376,"splitbutton").options;
var btn=$(_376);
btn.removeClass("s-btn-active s-btn-plain-active").addClass("s-btn");
btn.linkbutton($.extend({},opts,{text:opts.text+"<span class=\"s-btn-downarrow\">&nbsp;</span>"}));
if(opts.menu){
$(opts.menu).menu({onShow:function(){
btn.addClass((opts.plain==true)?"s-btn-plain-active":"s-btn-active");
},onHide:function(){
btn.removeClass((opts.plain==true)?"s-btn-plain-active":"s-btn-active");
}});
}
_377(_376,opts.disabled);
};
function _377(_378,_379){
var opts=$.data(_378,"splitbutton").options;
opts.disabled=_379;
var btn=$(_378);
var _37a=btn.find(".s-btn-downarrow");
if(_379){
btn.linkbutton("disable");
_37a.unbind(".splitbutton");
}else{
btn.linkbutton("enable");
_37a.unbind(".splitbutton");
_37a.bind("click.splitbutton",function(){
_37b();
return false;
});
var _37c=null;
_37a.bind("mouseenter.splitbutton",function(){
_37c=setTimeout(function(){
_37b();
},opts.duration);
return false;
}).bind("mouseleave.splitbutton",function(){
if(_37c){
clearTimeout(_37c);
}
});
}
function _37b(){
if(!opts.menu){
return;
}
$("body>div.menu-top").menu("hide");
$(opts.menu).menu("show",{alignTo:btn});
btn.blur();
};
};
$.fn.splitbutton=function(_37d,_37e){
if(typeof _37d=="string"){
return $.fn.splitbutton.methods[_37d](this,_37e);
}
_37d=_37d||{};
return this.each(function(){
var _37f=$.data(this,"splitbutton");
if(_37f){
$.extend(_37f.options,_37d);
}else{
$.data(this,"splitbutton",{options:$.extend({},$.fn.splitbutton.defaults,$.fn.splitbutton.parseOptions(this),_37d)});
$(this).removeAttr("disabled");
}
init(this);
});
};
$.fn.splitbutton.methods={options:function(jq){
return $.data(jq[0],"splitbutton").options;
},enable:function(jq){
return jq.each(function(){
_377(this,false);
});
},disable:function(jq){
return jq.each(function(){
_377(this,true);
});
},destroy:function(jq){
return jq.each(function(){
var opts=$(this).splitbutton("options");
if(opts.menu){
$(opts.menu).menu("destroy");
}
$(this).remove();
});
}};
$.fn.splitbutton.parseOptions=function(_380){
var t=$(_380);
return $.extend({},$.fn.linkbutton.parseOptions(_380),$.parser.parseOptions(_380,["menu",{plain:"boolean",duration:"number"}]));
};
$.fn.splitbutton.defaults=$.extend({},$.fn.linkbutton.defaults,{plain:true,menu:null,duration:100});
})(jQuery);
(function($){
function init(_381){
$(_381).hide();
var span=$("<span class=\"searchbox\"></span>").insertAfter(_381);
var _382=$("<input type=\"text\" class=\"searchbox-text\">").appendTo(span);
$("<span><span class=\"searchbox-button\"></span></span>").appendTo(span);
var name=$(_381).attr("name");
if(name){
_382.attr("name",name);
$(_381).removeAttr("name").attr("searchboxName",name);
}
return span;
};
function _383(_384,_385){
var opts=$.data(_384,"searchbox").options;
var sb=$.data(_384,"searchbox").searchbox;
if(_385){
opts.width=_385;
}
sb.appendTo("body");
if(isNaN(opts.width)){
opts.width=sb._outerWidth();
}
sb._outerWidth(opts.width);
sb.find("input.searchbox-text")._outerWidth(sb.width()-sb.find("a.searchbox-menu")._outerWidth()-sb.find("span.searchbox-button")._outerWidth());
sb.insertAfter(_384);
};
function _386(_387){
var _388=$.data(_387,"searchbox");
var opts=_388.options;
if(opts.menu){
_388.menu=$(opts.menu).menu({onClick:function(item){
_389(item);
}});
var item=_388.menu.children("div.menu-item:first");
_388.menu.children("div.menu-item").each(function(){
var _38a=$.extend({},$.parser.parseOptions(this),{selected:($(this).attr("selected")?true:undefined)});
if(_38a.selected){
item=$(this);
return false;
}
});
item.triggerHandler("click");
}else{
_388.searchbox.find("a.searchbox-menu").remove();
_388.menu=null;
}
function _389(item){
_388.searchbox.find("a.searchbox-menu").remove();
var mb=$("<a class=\"searchbox-menu\" href=\"javascript:void(0)\"></a>").html(item.text);
mb.prependTo(_388.searchbox).menubutton({menu:_388.menu,iconCls:item.iconCls});
_388.searchbox.find("input.searchbox-text").attr("name",$(item.target).attr("name")||item.text);
_383(_387);
};
};
function _38b(_38c){
var _38d=$.data(_38c,"searchbox");
var opts=_38d.options;
var _38e=_38d.searchbox.find("input.searchbox-text");
var _38f=_38d.searchbox.find(".searchbox-button");
_38e.unbind(".searchbox").bind("blur.searchbox",function(e){
opts.value=$(this).val();
if(opts.value==""){
$(this).val(opts.prompt);
$(this).addClass("searchbox-prompt");
}else{
$(this).removeClass("searchbox-prompt");
}
}).bind("focus.searchbox",function(e){
if($(this).val()!=opts.value){
$(this).val(opts.value);
}
$(this).removeClass("searchbox-prompt");
}).bind("keydown.searchbox",function(e){
if(e.keyCode==13){
e.preventDefault();
var name=$.fn.prop?_38e.prop("name"):_38e.attr("name");
opts.value=$(this).val();
opts.searcher.call(_38c,opts.value,name);
return false;
}
});
_38f.unbind(".searchbox").bind("click.searchbox",function(){
var name=$.fn.prop?_38e.prop("name"):_38e.attr("name");
opts.searcher.call(_38c,opts.value,name);
}).bind("mouseenter.searchbox",function(){
$(this).addClass("searchbox-button-hover");
}).bind("mouseleave.searchbox",function(){
$(this).removeClass("searchbox-button-hover");
});
};
function _390(_391){
var _392=$.data(_391,"searchbox");
var opts=_392.options;
var _393=_392.searchbox.find("input.searchbox-text");
if(opts.value==""){
_393.val(opts.prompt);
_393.addClass("searchbox-prompt");
}else{
_393.val(opts.value);
_393.removeClass("searchbox-prompt");
}
};
$.fn.searchbox=function(_394,_395){
if(typeof _394=="string"){
return $.fn.searchbox.methods[_394](this,_395);
}
_394=_394||{};
return this.each(function(){
var _396=$.data(this,"searchbox");
if(_396){
$.extend(_396.options,_394);
}else{
_396=$.data(this,"searchbox",{options:$.extend({},$.fn.searchbox.defaults,$.fn.searchbox.parseOptions(this),_394),searchbox:init(this)});
}
_386(this);
_390(this);
_38b(this);
_383(this);
});
};
$.fn.searchbox.methods={options:function(jq){
return $.data(jq[0],"searchbox").options;
},menu:function(jq){
return $.data(jq[0],"searchbox").menu;
},textbox:function(jq){
return $.data(jq[0],"searchbox").searchbox.find("input.searchbox-text");
},getValue:function(jq){
return $.data(jq[0],"searchbox").options.value;
},setValue:function(jq,_397){
return jq.each(function(){
$(this).searchbox("options").value=_397;
$(this).searchbox("textbox").val(_397);
$(this).searchbox("textbox").blur();
});
},getName:function(jq){
return $.data(jq[0],"searchbox").searchbox.find("input.searchbox-text").attr("name");
},selectName:function(jq,name){
return jq.each(function(){
var menu=$.data(this,"searchbox").menu;
if(menu){
menu.children("div.menu-item[name=\""+name+"\"]").triggerHandler("click");
}
});
},destroy:function(jq){
return jq.each(function(){
var menu=$(this).searchbox("menu");
if(menu){
menu.menu("destroy");
}
$.data(this,"searchbox").searchbox.remove();
$(this).remove();
});
},resize:function(jq,_398){
return jq.each(function(){
_383(this,_398);
});
}};
$.fn.searchbox.parseOptions=function(_399){
var t=$(_399);
return $.extend({},$.parser.parseOptions(_399,["width","prompt","menu"]),{value:t.val(),searcher:(t.attr("searcher")?eval(t.attr("searcher")):undefined)});
};
$.fn.searchbox.defaults={width:"auto",prompt:"",value:"",menu:null,searcher:function(_39a,name){
}};
})(jQuery);
(function($){
function init(_39b){
$(_39b).addClass("validatebox-text");
};
function _39c(_39d){
var _39e=$.data(_39d,"validatebox");
_39e.validating=false;
var tip=_39e.tip;
if(tip){
tip.remove();
}
$(_39d).unbind();
$(_39d).remove();
};
function _39f(_3a0){
var box=$(_3a0);
var _3a1=$.data(_3a0,"validatebox");
box.unbind(".validatebox").bind("focus.validatebox",function(){
_3a1.validating=true;
_3a1.value=undefined;
(function(){
if(_3a1.validating){
if(_3a1.value!=box.val()){
_3a1.value=box.val();
_3ab(_3a0);
}else{
_3a5(_3a0);
}
setTimeout(arguments.callee,200);
}
})();
}).bind("blur.validatebox",function(){
_3a1.validating=false;
_3a2(_3a0);
}).bind("mouseenter.validatebox",function(){
if(box.hasClass("validatebox-invalid")){
_3a3(_3a0);
}
}).bind("mouseleave.validatebox",function(){
if(!_3a1.validating){
_3a2(_3a0);
}
});
};
function _3a3(_3a4){
var msg=$.data(_3a4,"validatebox").message;
var tip=$.data(_3a4,"validatebox").tip;
if(!tip){
tip=$("<div class=\"validatebox-tip\">"+"<span class=\"validatebox-tip-content\">"+"</span>"+"<span class=\"validatebox-tip-pointer\">"+"</span>"+"</div>").appendTo("body");
$.data(_3a4,"validatebox").tip=tip;
}
tip.find(".validatebox-tip-content").html(msg);
_3a5(_3a4);
};
function _3a5(_3a6){
var _3a7=$.data(_3a6,"validatebox");
if(!_3a7){
return;
}
var tip=_3a7.tip;
if(tip){
var box=$(_3a6);
var _3a8=tip.find(".validatebox-tip-pointer");
var _3a9=tip.find(".validatebox-tip-content");
tip.show();
tip.css("top",box.offset().top-(_3a9._outerHeight()-box._outerHeight())/2);
if(_3a7.options.tipPosition=="left"){
tip.css("left",box.offset().left-tip._outerWidth());
tip.addClass("validatebox-tip-left");
}else{
tip.css("left",box.offset().left+box._outerWidth());
tip.removeClass("validatebox-tip-left");
}
_3a8.css("top",(_3a9._outerHeight()-_3a8._outerHeight())/2);
}
};
function _3a2(_3aa){
var tip=$.data(_3aa,"validatebox").tip;
if(tip){
tip.remove();
$.data(_3aa,"validatebox").tip=null;
}
};
function _3ab(_3ac){
var _3ad=$.data(_3ac,"validatebox");
var opts=$.data(_3ac,"validatebox").options;
var tip=$.data(_3ac,"validatebox").tip;
var box=$(_3ac);
var _3ae=box.val();
function _3af(msg){
$.data(_3ac,"validatebox").message=msg;
};
if(opts.required){
if(_3ae==""){
box.addClass("validatebox-invalid");
_3af(opts.missingMessage);
if(_3ad.validating){
_3a3(_3ac);
}
return false;
}
}
if(opts.validType){
var _3b0=/([a-zA-Z_]+)(.*)/.exec(opts.validType);
var rule=opts.rules[_3b0[1]];
if(_3ae&&rule){
var _3b1=eval(_3b0[2]);
if(!rule["validator"](_3ae,_3b1)){
box.addClass("validatebox-invalid");
var _3b2=rule["message"];
if(_3b1){
for(var i=0;i<_3b1.length;i++){
_3b2=_3b2.replace(new RegExp("\\{"+i+"\\}","g"),_3b1[i]);
}
}
_3af(opts.invalidMessage||_3b2);
if(_3ad.validating){
_3a3(_3ac);
}
return false;
}
}
}
box.removeClass("validatebox-invalid");
_3a2(_3ac);
return true;
};
$.fn.validatebox=function(_3b3,_3b4){
if(typeof _3b3=="string"){
return $.fn.validatebox.methods[_3b3](this,_3b4);
}
_3b3=_3b3||{};
return this.each(function(){
var _3b5=$.data(this,"validatebox");
if(_3b5){
$.extend(_3b5.options,_3b3);
}else{
init(this);
$.data(this,"validatebox",{options:$.extend({},$.fn.validatebox.defaults,$.fn.validatebox.parseOptions(this),_3b3)});
}
_39f(this);
});
};
$.fn.validatebox.methods={destroy:function(jq){
return jq.each(function(){
_39c(this);
});
},validate:function(jq){
return jq.each(function(){
_3ab(this);
});
},isValid:function(jq){
return _3ab(jq[0]);
}};
$.fn.validatebox.parseOptions=function(_3b6){
var t=$(_3b6);
return $.extend({},$.parser.parseOptions(_3b6,["validType","missingMessage","invalidMessage","tipPosition"]),{required:(t.attr("required")?true:undefined)});
};
$.fn.validatebox.defaults={required:false,validType:null,missingMessage:"This field is required.",invalidMessage:null,tipPosition:"right",rules:{email:{validator:function(_3b7){
return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(_3b7);
},message:"Please enter a valid email address."},url:{validator:function(_3b8){
return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(_3b8);
},message:"Please enter a valid URL."},length:{validator:function(_3b9,_3ba){
var len=$.trim(_3b9).length;
return len>=_3ba[0]&&len<=_3ba[1];
},message:"Please enter a value between {0} and {1}."},remote:{validator:function(_3bb,_3bc){
var data={};
data[_3bc[1]]=_3bb;
var _3bd=$.ajax({url:_3bc[0],dataType:"json",data:data,async:false,cache:false,type:"post"}).responseText;
return _3bd=="true";
},message:"Please fix this field."}}};
})(jQuery);
(function($){
function _3be(_3bf,_3c0){
_3c0=_3c0||{};
if(_3c0.onSubmit){
if(_3c0.onSubmit.call(_3bf)==false){
return;
}
}
var form=$(_3bf);
if(_3c0.url){
form.attr("action",_3c0.url);
}
var _3c1="easyui_frame_"+(new Date().getTime());
var _3c2=$("<iframe id="+_3c1+" name="+_3c1+"></iframe>").attr("src",window.ActiveXObject?"javascript:false":"about:blank").css({position:"absolute",top:-1000,left:-1000});
var t=form.attr("target"),a=form.attr("action");
form.attr("target",_3c1);
try{
_3c2.appendTo("body");
_3c2.bind("load",cb);
form[0].submit();
}
finally{
form.attr("action",a);
t?form.attr("target",t):form.removeAttr("target");
}
var _3c3=10;
function cb(){
_3c2.unbind();
var body=$("#"+_3c1).contents().find("body");
var data=body.html();
if(data==""){
if(--_3c3){
setTimeout(cb,100);
return;
}
return;
}
var ta=body.find(">textarea");
if(ta.length){
data=ta.val();
}else{
var pre=body.find(">pre");
if(pre.length){
data=pre.html();
}
}
if(_3c0.success){
_3c0.success(data);
}
setTimeout(function(){
_3c2.unbind();
_3c2.remove();
},100);
};
};
function load(_3c4,data){
if(!$.data(_3c4,"form")){
$.data(_3c4,"form",{options:$.extend({},$.fn.form.defaults)});
}
var opts=$.data(_3c4,"form").options;
if(typeof data=="string"){
var _3c5={};
if(opts.onBeforeLoad.call(_3c4,_3c5)==false){
return;
}
$.ajax({url:data,data:_3c5,dataType:"json",success:function(data){
_3c6(data);
},error:function(){
opts.onLoadError.apply(_3c4,arguments);
}});
}else{
_3c6(data);
}
function _3c6(data){
var form=$(_3c4);
for(var name in data){
var val=data[name];
var rr=_3c7(name,val);
if(!rr.length){
var f=form.find("input[numberboxName=\""+name+"\"]");
if(f.length){
f.numberbox("setValue",val);
}else{
$("input[name=\""+name+"\"]",form).val(val);
$("textarea[name=\""+name+"\"]",form).val(val);
$("select[name=\""+name+"\"]",form).val(val);
}
}
_3c8(name,val);
}
opts.onLoadSuccess.call(_3c4,data);
_3cb(_3c4);
};
function _3c7(name,val){
var form=$(_3c4);
var rr=$("input[name=\""+name+"\"][type=radio], input[name=\""+name+"\"][type=checkbox]",form);
$.fn.prop?rr.prop("checked",false):rr.attr("checked",false);
rr.each(function(){
var f=$(this);
if(f.val()==String(val)){
$.fn.prop?f.prop("checked",true):f.attr("checked",true);
}
});
return rr;
};
function _3c8(name,val){
var form=$(_3c4);
var cc=["combobox","combotree","combogrid","datetimebox","datebox","combo"];
var c=form.find("[comboName=\""+name+"\"]");
if(c.length){
for(var i=0;i<cc.length;i++){
var type=cc[i];
if(c.hasClass(type+"-f")){
if(c[type]("options").multiple){
c[type]("setValues",val);
}else{
c[type]("setValue",val);
}
return;
}
}
}
};
};
function _3c9(_3ca){
$("input,select,textarea",_3ca).each(function(){
var t=this.type,tag=this.tagName.toLowerCase();
if(t=="text"||t=="hidden"||t=="password"||tag=="textarea"){
this.value="";
}else{
if(t=="file"){
var file=$(this);
file.after(file.clone().val(""));
file.remove();
}else{
if(t=="checkbox"||t=="radio"){
this.checked=false;
}else{
if(tag=="select"){
this.selectedIndex=-1;
}
}
}
}
});
if($.fn.combo){
$(".combo-f",_3ca).combo("clear");
}
if($.fn.combobox){
$(".combobox-f",_3ca).combobox("clear");
}
if($.fn.combotree){
$(".combotree-f",_3ca).combotree("clear");
}
if($.fn.combogrid){
$(".combogrid-f",_3ca).combogrid("clear");
}
_3cb(_3ca);
};
function _3cc(_3cd){
_3cd.reset();
var t=$(_3cd);
if($.fn.combo){
t.find(".combo-f").combo("reset");
}
if($.fn.combobox){
t.find(".combobox-f").combobox("reset");
}
if($.fn.combotree){
t.find(".combotree-f").combotree("reset");
}
if($.fn.combogrid){
t.find(".combogrid-f").combogrid("reset");
}
if($.fn.spinner){
t.find(".spinner-f").spinner("reset");
}
if($.fn.timespinner){
t.find(".timespinner-f").timespinner("reset");
}
if($.fn.numberbox){
t.find(".numberbox-f").numberbox("reset");
}
if($.fn.numberspinner){
t.find(".numberspinner-f").numberspinner("reset");
}
_3cb(_3cd);
};
function _3ce(_3cf){
var _3d0=$.data(_3cf,"form").options;
var form=$(_3cf);
form.unbind(".form").bind("submit.form",function(){
setTimeout(function(){
_3be(_3cf,_3d0);
},0);
return false;
});
};
function _3cb(_3d1){
if($.fn.validatebox){
var t=$(_3d1);
t.find(".validatebox-text:not(:disabled)").validatebox("validate");
var _3d2=t.find(".validatebox-invalid");
_3d2.filter(":not(:disabled):first").focus();
return _3d2.length==0;
}
return true;
};
$.fn.form=function(_3d3,_3d4){
if(typeof _3d3=="string"){
return $.fn.form.methods[_3d3](this,_3d4);
}
_3d3=_3d3||{};
return this.each(function(){
if(!$.data(this,"form")){
$.data(this,"form",{options:$.extend({},$.fn.form.defaults,_3d3)});
}
_3ce(this);
});
};
$.fn.form.methods={submit:function(jq,_3d5){
return jq.each(function(){
_3be(this,$.extend({},$.fn.form.defaults,_3d5||{}));
});
},load:function(jq,data){
return jq.each(function(){
load(this,data);
});
},clear:function(jq){
return jq.each(function(){
_3c9(this);
});
},reset:function(jq){
return jq.each(function(){
_3cc(this);
});
},validate:function(jq){
return _3cb(jq[0]);
}};
$.fn.form.defaults={url:null,onSubmit:function(){
return $(this).form("validate");
},success:function(data){
},onBeforeLoad:function(_3d6){
},onLoadSuccess:function(data){
},onLoadError:function(){
}};
})(jQuery);
(function($){
function init(_3d7){
$(_3d7).addClass("numberbox-f");
var v=$("<input type=\"hidden\">").insertAfter(_3d7);
var name=$(_3d7).attr("name");
if(name){
v.attr("name",name);
$(_3d7).removeAttr("name").attr("numberboxName",name);
}
return v;
};
function _3d8(_3d9){
var opts=$.data(_3d9,"numberbox").options;
var fn=opts.onChange;
opts.onChange=function(){
};
_3da(_3d9,opts.parser.call(_3d9,opts.value));
opts.onChange=fn;
opts.originalValue=_3db(_3d9);
};
function _3db(_3dc){
return $.data(_3dc,"numberbox").field.val();
};
function _3da(_3dd,_3de){
var _3df=$.data(_3dd,"numberbox");
var opts=_3df.options;
var _3e0=_3db(_3dd);
_3de=opts.parser.call(_3dd,_3de);
opts.value=_3de;
_3df.field.val(_3de);
$(_3dd).val(opts.formatter.call(_3dd,_3de));
if(_3e0!=_3de){
opts.onChange.call(_3dd,_3de,_3e0);
}
};
function _3e1(_3e2){
var opts=$.data(_3e2,"numberbox").options;
$(_3e2).unbind(".numberbox").bind("keypress.numberbox",function(e){
if(e.which==45){
if($(this).val().indexOf("-")==-1){
return true;
}else{
return false;
}
}
if(e.which==46){
if($(this).val().indexOf(".")==-1){
return true;
}else{
return false;
}
}else{
if((e.which>=48&&e.which<=57&&e.ctrlKey==false&&e.shiftKey==false)||e.which==0||e.which==8){
return true;
}else{
if(e.ctrlKey==true&&(e.which==99||e.which==118)){
return true;
}else{
return false;
}
}
}
}).bind("blur.numberbox",function(){
_3da(_3e2,$(this).val());
$(this).val(opts.formatter.call(_3e2,_3db(_3e2)));
}).bind("focus.numberbox",function(){
var vv=_3db(_3e2);
if($(this).val()!=vv){
$(this).val(vv);
}
});
};
function _3e3(_3e4){
if($.fn.validatebox){
var opts=$.data(_3e4,"numberbox").options;
$(_3e4).validatebox(opts);
}
};
function _3e5(_3e6,_3e7){
var opts=$.data(_3e6,"numberbox").options;
if(_3e7){
opts.disabled=true;
$(_3e6).attr("disabled",true);
}else{
opts.disabled=false;
$(_3e6).removeAttr("disabled");
}
};
$.fn.numberbox=function(_3e8,_3e9){
if(typeof _3e8=="string"){
var _3ea=$.fn.numberbox.methods[_3e8];
if(_3ea){
return _3ea(this,_3e9);
}else{
return this.validatebox(_3e8,_3e9);
}
}
_3e8=_3e8||{};
return this.each(function(){
var _3eb=$.data(this,"numberbox");
if(_3eb){
$.extend(_3eb.options,_3e8);
}else{
_3eb=$.data(this,"numberbox",{options:$.extend({},$.fn.numberbox.defaults,$.fn.numberbox.parseOptions(this),_3e8),field:init(this)});
$(this).removeAttr("disabled");
$(this).css({imeMode:"disabled"});
}
_3e5(this,_3eb.options.disabled);
_3e1(this);
_3e3(this);
_3d8(this);
});
};
$.fn.numberbox.methods={options:function(jq){
return $.data(jq[0],"numberbox").options;
},destroy:function(jq){
return jq.each(function(){
$.data(this,"numberbox").field.remove();
$(this).validatebox("destroy");
$(this).remove();
});
},disable:function(jq){
return jq.each(function(){
_3e5(this,true);
});
},enable:function(jq){
return jq.each(function(){
_3e5(this,false);
});
},fix:function(jq){
return jq.each(function(){
_3da(this,$(this).val());
});
},setValue:function(jq,_3ec){
return jq.each(function(){
_3da(this,_3ec);
});
},getValue:function(jq){
return _3db(jq[0]);
},clear:function(jq){
return jq.each(function(){
var _3ed=$.data(this,"numberbox");
_3ed.field.val("");
$(this).val("");
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).numberbox("options");
$(this).numberbox("setValue",opts.originalValue);
});
}};
$.fn.numberbox.parseOptions=function(_3ee){
var t=$(_3ee);
return $.extend({},$.fn.validatebox.parseOptions(_3ee),$.parser.parseOptions(_3ee,["decimalSeparator","groupSeparator","suffix",{min:"number",max:"number",precision:"number"}]),{prefix:(t.attr("prefix")?t.attr("prefix"):undefined),disabled:(t.attr("disabled")?true:undefined),value:(t.val()||undefined)});
};
$.fn.numberbox.defaults=$.extend({},$.fn.validatebox.defaults,{disabled:false,value:"",min:null,max:null,precision:0,decimalSeparator:".",groupSeparator:"",prefix:"",suffix:"",formatter:function(_3ef){
if(!_3ef){
return _3ef;
}
_3ef=_3ef+"";
var opts=$(this).numberbox("options");
var s1=_3ef,s2="";
var dpos=_3ef.indexOf(".");
if(dpos>=0){
s1=_3ef.substring(0,dpos);
s2=_3ef.substring(dpos+1,_3ef.length);
}
if(opts.groupSeparator){
var p=/(\d+)(\d{3})/;
while(p.test(s1)){
s1=s1.replace(p,"$1"+opts.groupSeparator+"$2");
}
}
if(s2){
return opts.prefix+s1+opts.decimalSeparator+s2+opts.suffix;
}else{
return opts.prefix+s1+opts.suffix;
}
},parser:function(s){
s=s+"";
var opts=$(this).numberbox("options");
if(opts.groupSeparator){
s=s.replace(new RegExp("\\"+opts.groupSeparator,"g"),"");
}
if(opts.decimalSeparator){
s=s.replace(new RegExp("\\"+opts.decimalSeparator,"g"),".");
}
if(opts.prefix){
s=s.replace(new RegExp("\\"+$.trim(opts.prefix),"g"),"");
}
if(opts.suffix){
s=s.replace(new RegExp("\\"+$.trim(opts.suffix),"g"),"");
}
s=s.replace(/\s/g,"");
var val=parseFloat(s).toFixed(opts.precision);
if(isNaN(val)){
val="";
}else{
if(typeof (opts.min)=="number"&&val<opts.min){
val=opts.min.toFixed(opts.precision);
}else{
if(typeof (opts.max)=="number"&&val>opts.max){
val=opts.max.toFixed(opts.precision);
}
}
}
return val;
},onChange:function(_3f0,_3f1){
}});
})(jQuery);
(function($){
function _3f2(_3f3){
var opts=$.data(_3f3,"calendar").options;
var t=$(_3f3);
if(opts.fit==true){
var p=t.parent();
opts.width=p.width();
opts.height=p.height();
}
var _3f4=t.find(".calendar-header");
t._outerWidth(opts.width);
t._outerHeight(opts.height);
t.find(".calendar-body")._outerHeight(t.height()-_3f4._outerHeight());
};
function init(_3f5){
$(_3f5).addClass("calendar").wrapInner("<div class=\"calendar-header\">"+"<div class=\"calendar-prevmonth\"></div>"+"<div class=\"calendar-nextmonth\"></div>"+"<div class=\"calendar-prevyear\"></div>"+"<div class=\"calendar-nextyear\"></div>"+"<div class=\"calendar-title\">"+"<span>Aprial 2010</span>"+"</div>"+"</div>"+"<div class=\"calendar-body\">"+"<div class=\"calendar-menu\">"+"<div class=\"calendar-menu-year-inner\">"+"<span class=\"calendar-menu-prev\"></span>"+"<span><input class=\"calendar-menu-year\" type=\"text\"></input></span>"+"<span class=\"calendar-menu-next\"></span>"+"</div>"+"<div class=\"calendar-menu-month-inner\">"+"</div>"+"</div>"+"</div>");
$(_3f5).find(".calendar-title span").hover(function(){
$(this).addClass("calendar-menu-hover");
},function(){
$(this).removeClass("calendar-menu-hover");
}).click(function(){
var menu=$(_3f5).find(".calendar-menu");
if(menu.is(":visible")){
menu.hide();
}else{
_3fc(_3f5);
}
});
$(".calendar-prevmonth,.calendar-nextmonth,.calendar-prevyear,.calendar-nextyear",_3f5).hover(function(){
$(this).addClass("calendar-nav-hover");
},function(){
$(this).removeClass("calendar-nav-hover");
});
$(_3f5).find(".calendar-nextmonth").click(function(){
_3f6(_3f5,1);
});
$(_3f5).find(".calendar-prevmonth").click(function(){
_3f6(_3f5,-1);
});
$(_3f5).find(".calendar-nextyear").click(function(){
_3f9(_3f5,1);
});
$(_3f5).find(".calendar-prevyear").click(function(){
_3f9(_3f5,-1);
});
$(_3f5).bind("_resize",function(){
var opts=$.data(_3f5,"calendar").options;
if(opts.fit==true){
_3f2(_3f5);
}
return false;
});
};
function _3f6(_3f7,_3f8){
var opts=$.data(_3f7,"calendar").options;
opts.month+=_3f8;
if(opts.month>12){
opts.year++;
opts.month=1;
}else{
if(opts.month<1){
opts.year--;
opts.month=12;
}
}
show(_3f7);
var menu=$(_3f7).find(".calendar-menu-month-inner");
menu.find("td.calendar-selected").removeClass("calendar-selected");
menu.find("td:eq("+(opts.month-1)+")").addClass("calendar-selected");
};
function _3f9(_3fa,_3fb){
var opts=$.data(_3fa,"calendar").options;
opts.year+=_3fb;
show(_3fa);
var menu=$(_3fa).find(".calendar-menu-year");
menu.val(opts.year);
};
function _3fc(_3fd){
var opts=$.data(_3fd,"calendar").options;
$(_3fd).find(".calendar-menu").show();
if($(_3fd).find(".calendar-menu-month-inner").is(":empty")){
$(_3fd).find(".calendar-menu-month-inner").empty();
var t=$("<table></table>").appendTo($(_3fd).find(".calendar-menu-month-inner"));
var idx=0;
for(var i=0;i<3;i++){
var tr=$("<tr></tr>").appendTo(t);
for(var j=0;j<4;j++){
$("<td class=\"calendar-menu-month\"></td>").html(opts.months[idx++]).attr("abbr",idx).appendTo(tr);
}
}
$(_3fd).find(".calendar-menu-prev,.calendar-menu-next").hover(function(){
$(this).addClass("calendar-menu-hover");
},function(){
$(this).removeClass("calendar-menu-hover");
});
$(_3fd).find(".calendar-menu-next").click(function(){
var y=$(_3fd).find(".calendar-menu-year");
if(!isNaN(y.val())){
y.val(parseInt(y.val())+1);
}
});
$(_3fd).find(".calendar-menu-prev").click(function(){
var y=$(_3fd).find(".calendar-menu-year");
if(!isNaN(y.val())){
y.val(parseInt(y.val()-1));
}
});
$(_3fd).find(".calendar-menu-year").keypress(function(e){
if(e.keyCode==13){
_3fe();
}
});
$(_3fd).find(".calendar-menu-month").hover(function(){
$(this).addClass("calendar-menu-hover");
},function(){
$(this).removeClass("calendar-menu-hover");
}).click(function(){
var menu=$(_3fd).find(".calendar-menu");
menu.find(".calendar-selected").removeClass("calendar-selected");
$(this).addClass("calendar-selected");
_3fe();
});
}
function _3fe(){
var menu=$(_3fd).find(".calendar-menu");
var year=menu.find(".calendar-menu-year").val();
var _3ff=menu.find(".calendar-selected").attr("abbr");
if(!isNaN(year)){
opts.year=parseInt(year);
opts.month=parseInt(_3ff);
show(_3fd);
}
menu.hide();
};
var body=$(_3fd).find(".calendar-body");
var sele=$(_3fd).find(".calendar-menu");
var _400=sele.find(".calendar-menu-year-inner");
var _401=sele.find(".calendar-menu-month-inner");
_400.find("input").val(opts.year).focus();
_401.find("td.calendar-selected").removeClass("calendar-selected");
_401.find("td:eq("+(opts.month-1)+")").addClass("calendar-selected");
sele._outerWidth(body._outerWidth());
sele._outerHeight(body._outerHeight());
_401._outerHeight(sele.height()-_400._outerHeight());
};
function _402(_403,year,_404){
var opts=$.data(_403,"calendar").options;
var _405=[];
var _406=new Date(year,_404,0).getDate();
for(var i=1;i<=_406;i++){
_405.push([year,_404,i]);
}
var _407=[],week=[];
var _408=0;
while(_405.length>0){
var date=_405.shift();
week.push(date);
var day=new Date(date[0],date[1]-1,date[2]).getDay();
if(_408==day){
day=0;
}else{
if(day==(opts.firstDay==0?7:opts.firstDay)-1){
_407.push(week);
week=[];
}
}
_408=day;
}
if(week.length){
_407.push(week);
}
var _409=_407[0];
if(_409.length<7){
while(_409.length<7){
var _40a=_409[0];
var date=new Date(_40a[0],_40a[1]-1,_40a[2]-1);
_409.unshift([date.getFullYear(),date.getMonth()+1,date.getDate()]);
}
}else{
var _40a=_409[0];
var week=[];
for(var i=1;i<=7;i++){
var date=new Date(_40a[0],_40a[1]-1,_40a[2]-i);
week.unshift([date.getFullYear(),date.getMonth()+1,date.getDate()]);
}
_407.unshift(week);
}
var _40b=_407[_407.length-1];
while(_40b.length<7){
var _40c=_40b[_40b.length-1];
var date=new Date(_40c[0],_40c[1]-1,_40c[2]+1);
_40b.push([date.getFullYear(),date.getMonth()+1,date.getDate()]);
}
if(_407.length<6){
var _40c=_40b[_40b.length-1];
var week=[];
for(var i=1;i<=7;i++){
var date=new Date(_40c[0],_40c[1]-1,_40c[2]+i);
week.push([date.getFullYear(),date.getMonth()+1,date.getDate()]);
}
_407.push(week);
}
return _407;
};
function show(_40d){
var opts=$.data(_40d,"calendar").options;
$(_40d).find(".calendar-title span").html(opts.months[opts.month-1]+" "+opts.year);
var body=$(_40d).find("div.calendar-body");
body.find(">table").remove();
var t=$("<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><thead></thead><tbody></tbody></table>").prependTo(body);
var tr=$("<tr></tr>").appendTo(t.find("thead"));
for(var i=opts.firstDay;i<opts.weeks.length;i++){
tr.append("<th>"+opts.weeks[i]+"</th>");
}
for(var i=0;i<opts.firstDay;i++){
tr.append("<th>"+opts.weeks[i]+"</th>");
}
var _40e=_402(_40d,opts.year,opts.month);
for(var i=0;i<_40e.length;i++){
var week=_40e[i];
var tr=$("<tr></tr>").appendTo(t.find("tbody"));
for(var j=0;j<week.length;j++){
var day=week[j];
$("<td class=\"calendar-day calendar-other-month\"></td>").attr("abbr",day[0]+","+day[1]+","+day[2]).html(day[2]).appendTo(tr);
}
}
t.find("td[abbr^=\""+opts.year+","+opts.month+"\"]").removeClass("calendar-other-month");
var now=new Date();
var _40f=now.getFullYear()+","+(now.getMonth()+1)+","+now.getDate();
t.find("td[abbr=\""+_40f+"\"]").addClass("calendar-today");
if(opts.current){
t.find(".calendar-selected").removeClass("calendar-selected");
var _410=opts.current.getFullYear()+","+(opts.current.getMonth()+1)+","+opts.current.getDate();
t.find("td[abbr=\""+_410+"\"]").addClass("calendar-selected");
}
var _411=6-opts.firstDay;
var _412=_411+1;
if(_411>=7){
_411-=7;
}
if(_412>=7){
_412-=7;
}
t.find("tr").find("td:eq("+_411+")").addClass("calendar-saturday");
t.find("tr").find("td:eq("+_412+")").addClass("calendar-sunday");
t.find("td").hover(function(){
$(this).addClass("calendar-hover");
},function(){
$(this).removeClass("calendar-hover");
}).click(function(){
t.find(".calendar-selected").removeClass("calendar-selected");
$(this).addClass("calendar-selected");
var _413=$(this).attr("abbr").split(",");
opts.current=new Date(_413[0],parseInt(_413[1])-1,_413[2]);
opts.onSelect.call(_40d,opts.current);
});
};
$.fn.calendar=function(_414,_415){
if(typeof _414=="string"){
return $.fn.calendar.methods[_414](this,_415);
}
_414=_414||{};
return this.each(function(){
var _416=$.data(this,"calendar");
if(_416){
$.extend(_416.options,_414);
}else{
_416=$.data(this,"calendar",{options:$.extend({},$.fn.calendar.defaults,$.fn.calendar.parseOptions(this),_414)});
init(this);
}
if(_416.options.border==false){
$(this).addClass("calendar-noborder");
}
_3f2(this);
show(this);
$(this).find("div.calendar-menu").hide();
});
};
$.fn.calendar.methods={options:function(jq){
return $.data(jq[0],"calendar").options;
},resize:function(jq){
return jq.each(function(){
_3f2(this);
});
},moveTo:function(jq,date){
return jq.each(function(){
$(this).calendar({year:date.getFullYear(),month:date.getMonth()+1,current:date});
});
}};
$.fn.calendar.parseOptions=function(_417){
var t=$(_417);
return $.extend({},$.parser.parseOptions(_417,["width","height",{firstDay:"number",fit:"boolean",border:"boolean"}]));
};
$.fn.calendar.defaults={width:180,height:180,fit:false,border:true,firstDay:0,weeks:["S","M","T","W","T","F","S"],months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],year:new Date().getFullYear(),month:new Date().getMonth()+1,current:new Date(),onSelect:function(date){
}};
})(jQuery);
(function($){
function init(_418){
var _419=$("<span class=\"spinner\">"+"<span class=\"spinner-arrow\">"+"<span class=\"spinner-arrow-up\"></span>"+"<span class=\"spinner-arrow-down\"></span>"+"</span>"+"</span>").insertAfter(_418);
$(_418).addClass("spinner-text spinner-f").prependTo(_419);
return _419;
};
function _41a(_41b,_41c){
var opts=$.data(_41b,"spinner").options;
var _41d=$.data(_41b,"spinner").spinner;
if(_41c){
opts.width=_41c;
}
var _41e=$("<div style=\"display:none\"></div>").insertBefore(_41d);
_41d.appendTo("body");
if(isNaN(opts.width)){
opts.width=$(_41b).outerWidth();
}
_41d._outerWidth(opts.width);
$(_41b)._outerWidth(_41d.width()-_41d.find(".spinner-arrow").outerWidth());
_41d.insertAfter(_41e);
_41e.remove();
};
function _41f(_420){
var opts=$.data(_420,"spinner").options;
var _421=$.data(_420,"spinner").spinner;
_421.find(".spinner-arrow-up,.spinner-arrow-down").unbind(".spinner");
if(!opts.disabled){
_421.find(".spinner-arrow-up").bind("mouseenter.spinner",function(){
$(this).addClass("spinner-arrow-hover");
}).bind("mouseleave.spinner",function(){
$(this).removeClass("spinner-arrow-hover");
}).bind("click.spinner",function(){
opts.spin.call(_420,false);
opts.onSpinUp.call(_420);
$(_420).validatebox("validate");
});
_421.find(".spinner-arrow-down").bind("mouseenter.spinner",function(){
$(this).addClass("spinner-arrow-hover");
}).bind("mouseleave.spinner",function(){
$(this).removeClass("spinner-arrow-hover");
}).bind("click.spinner",function(){
opts.spin.call(_420,true);
opts.onSpinDown.call(_420);
$(_420).validatebox("validate");
});
}
};
function _422(_423,_424){
var opts=$.data(_423,"spinner").options;
if(_424){
opts.disabled=true;
$(_423).attr("disabled",true);
}else{
opts.disabled=false;
$(_423).removeAttr("disabled");
}
};
$.fn.spinner=function(_425,_426){
if(typeof _425=="string"){
var _427=$.fn.spinner.methods[_425];
if(_427){
return _427(this,_426);
}else{
return this.validatebox(_425,_426);
}
}
_425=_425||{};
return this.each(function(){
var _428=$.data(this,"spinner");
if(_428){
$.extend(_428.options,_425);
}else{
_428=$.data(this,"spinner",{options:$.extend({},$.fn.spinner.defaults,$.fn.spinner.parseOptions(this),_425),spinner:init(this)});
$(this).removeAttr("disabled");
}
_428.options.originalValue=_428.options.value;
$(this).val(_428.options.value);
$(this).attr("readonly",!_428.options.editable);
_422(this,_428.options.disabled);
_41a(this);
$(this).validatebox(_428.options);
_41f(this);
});
};
$.fn.spinner.methods={options:function(jq){
var opts=$.data(jq[0],"spinner").options;
return $.extend(opts,{value:jq.val()});
},destroy:function(jq){
return jq.each(function(){
var _429=$.data(this,"spinner").spinner;
$(this).validatebox("destroy");
_429.remove();
});
},resize:function(jq,_42a){
return jq.each(function(){
_41a(this,_42a);
});
},enable:function(jq){
return jq.each(function(){
_422(this,false);
_41f(this);
});
},disable:function(jq){
return jq.each(function(){
_422(this,true);
_41f(this);
});
},getValue:function(jq){
return jq.val();
},setValue:function(jq,_42b){
return jq.each(function(){
var opts=$.data(this,"spinner").options;
opts.value=_42b;
$(this).val(_42b);
});
},clear:function(jq){
return jq.each(function(){
var opts=$.data(this,"spinner").options;
opts.value="";
$(this).val("");
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).spinner("options");
$(this).spinner("setValue",opts.originalValue);
});
}};
$.fn.spinner.parseOptions=function(_42c){
var t=$(_42c);
return $.extend({},$.fn.validatebox.parseOptions(_42c),$.parser.parseOptions(_42c,["width","min","max",{increment:"number",editable:"boolean"}]),{value:(t.val()||undefined),disabled:(t.attr("disabled")?true:undefined)});
};
$.fn.spinner.defaults=$.extend({},$.fn.validatebox.defaults,{width:"auto",value:"",min:null,max:null,increment:1,editable:true,disabled:false,spin:function(down){
},onSpinUp:function(){
},onSpinDown:function(){
}});
})(jQuery);
(function($){
function _42d(_42e){
$(_42e).addClass("numberspinner-f");
var opts=$.data(_42e,"numberspinner").options;
$(_42e).spinner(opts).numberbox(opts);
};
function _42f(_430,down){
var opts=$.data(_430,"numberspinner").options;
var v=parseFloat($(_430).numberbox("getValue")||opts.value)||0;
if(down==true){
v-=opts.increment;
}else{
v+=opts.increment;
}
$(_430).numberbox("setValue",v);
};
$.fn.numberspinner=function(_431,_432){
if(typeof _431=="string"){
var _433=$.fn.numberspinner.methods[_431];
if(_433){
return _433(this,_432);
}else{
return this.spinner(_431,_432);
}
}
_431=_431||{};
return this.each(function(){
var _434=$.data(this,"numberspinner");
if(_434){
$.extend(_434.options,_431);
}else{
$.data(this,"numberspinner",{options:$.extend({},$.fn.numberspinner.defaults,$.fn.numberspinner.parseOptions(this),_431)});
}
_42d(this);
});
};
$.fn.numberspinner.methods={options:function(jq){
var opts=$.data(jq[0],"numberspinner").options;
return $.extend(opts,{value:jq.numberbox("getValue"),originalValue:jq.numberbox("options").originalValue});
},setValue:function(jq,_435){
return jq.each(function(){
$(this).numberbox("setValue",_435);
});
},getValue:function(jq){
return jq.numberbox("getValue");
},clear:function(jq){
return jq.each(function(){
$(this).spinner("clear");
$(this).numberbox("clear");
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).numberspinner("options");
$(this).numberspinner("setValue",opts.originalValue);
});
}};
$.fn.numberspinner.parseOptions=function(_436){
return $.extend({},$.fn.spinner.parseOptions(_436),$.fn.numberbox.parseOptions(_436),{});
};
$.fn.numberspinner.defaults=$.extend({},$.fn.spinner.defaults,$.fn.numberbox.defaults,{spin:function(down){
_42f(this,down);
}});
})(jQuery);
(function($){
function _437(_438){
var opts=$.data(_438,"timespinner").options;
$(_438).addClass("timespinner-f");
$(_438).spinner(opts);
$(_438).unbind(".timespinner");
$(_438).bind("click.timespinner",function(){
var _439=0;
if(this.selectionStart!=null){
_439=this.selectionStart;
}else{
if(this.createTextRange){
var _43a=_438.createTextRange();
var s=document.selection.createRange();
s.setEndPoint("StartToStart",_43a);
_439=s.text.length;
}
}
if(_439>=0&&_439<=2){
opts.highlight=0;
}else{
if(_439>=3&&_439<=5){
opts.highlight=1;
}else{
if(_439>=6&&_439<=8){
opts.highlight=2;
}
}
}
_43c(_438);
}).bind("blur.timespinner",function(){
_43b(_438);
});
};
function _43c(_43d){
var opts=$.data(_43d,"timespinner").options;
var _43e=0,end=0;
if(opts.highlight==0){
_43e=0;
end=2;
}else{
if(opts.highlight==1){
_43e=3;
end=5;
}else{
if(opts.highlight==2){
_43e=6;
end=8;
}
}
}
if(_43d.selectionStart!=null){
_43d.setSelectionRange(_43e,end);
}else{
if(_43d.createTextRange){
var _43f=_43d.createTextRange();
_43f.collapse();
_43f.moveEnd("character",end);
_43f.moveStart("character",_43e);
_43f.select();
}
}
$(_43d).focus();
};
function _440(_441,_442){
var opts=$.data(_441,"timespinner").options;
if(!_442){
return null;
}
var vv=_442.split(opts.separator);
for(var i=0;i<vv.length;i++){
if(isNaN(vv[i])){
return null;
}
}
while(vv.length<3){
vv.push(0);
}
return new Date(1900,0,0,vv[0],vv[1],vv[2]);
};
function _43b(_443){
var opts=$.data(_443,"timespinner").options;
var _444=$(_443).val();
var time=_440(_443,_444);
if(!time){
time=_440(_443,opts.value);
}
if(!time){
opts.value="";
$(_443).val("");
return;
}
var _445=_440(_443,opts.min);
var _446=_440(_443,opts.max);
if(_445&&_445>time){
time=_445;
}
if(_446&&_446<time){
time=_446;
}
var tt=[_447(time.getHours()),_447(time.getMinutes())];
if(opts.showSeconds){
tt.push(_447(time.getSeconds()));
}
var val=tt.join(opts.separator);
opts.value=val;
$(_443).val(val);
function _447(_448){
return (_448<10?"0":"")+_448;
};
};
function _449(_44a,down){
var opts=$.data(_44a,"timespinner").options;
var val=$(_44a).val();
if(val==""){
val=[0,0,0].join(opts.separator);
}
var vv=val.split(opts.separator);
for(var i=0;i<vv.length;i++){
vv[i]=parseInt(vv[i],10);
}
if(down==true){
vv[opts.highlight]-=opts.increment;
}else{
vv[opts.highlight]+=opts.increment;
}
$(_44a).val(vv.join(opts.separator));
_43b(_44a);
_43c(_44a);
};
$.fn.timespinner=function(_44b,_44c){
if(typeof _44b=="string"){
var _44d=$.fn.timespinner.methods[_44b];
if(_44d){
return _44d(this,_44c);
}else{
return this.spinner(_44b,_44c);
}
}
_44b=_44b||{};
return this.each(function(){
var _44e=$.data(this,"timespinner");
if(_44e){
$.extend(_44e.options,_44b);
}else{
$.data(this,"timespinner",{options:$.extend({},$.fn.timespinner.defaults,$.fn.timespinner.parseOptions(this),_44b)});
_437(this);
}
});
};
$.fn.timespinner.methods={options:function(jq){
var opts=$.data(jq[0],"timespinner").options;
return $.extend(opts,{value:jq.val(),originalValue:jq.spinner("options").originalValue});
},setValue:function(jq,_44f){
return jq.each(function(){
$(this).val(_44f);
_43b(this);
});
},getHours:function(jq){
var opts=$.data(jq[0],"timespinner").options;
var vv=jq.val().split(opts.separator);
return parseInt(vv[0],10);
},getMinutes:function(jq){
var opts=$.data(jq[0],"timespinner").options;
var vv=jq.val().split(opts.separator);
return parseInt(vv[1],10);
},getSeconds:function(jq){
var opts=$.data(jq[0],"timespinner").options;
var vv=jq.val().split(opts.separator);
return parseInt(vv[2],10)||0;
}};
$.fn.timespinner.parseOptions=function(_450){
return $.extend({},$.fn.spinner.parseOptions(_450),$.parser.parseOptions(_450,["separator",{showSeconds:"boolean",highlight:"number"}]));
};
$.fn.timespinner.defaults=$.extend({},$.fn.spinner.defaults,{separator:":",showSeconds:false,highlight:0,spin:function(down){
_449(this,down);
}});
})(jQuery);
(function($){
var _451=0;
function _452(a,o){
for(var i=0,len=a.length;i<len;i++){
if(a[i]==o){
return i;
}
}
return -1;
};
function _453(a,o,id){
if(typeof o=="string"){
for(var i=0,len=a.length;i<len;i++){
if(a[i][o]==id){
a.splice(i,1);
return;
}
}
}else{
var _454=_452(a,o);
if(_454!=-1){
a.splice(_454,1);
}
}
};
function _455(a,o,r){
for(var i=0,len=a.length;i<len;i++){
if(a[i][o]==r[o]){
return;
}
}
a.push(r);
};
function _456(_457,_458){
var opts=$.data(_457,"datagrid").options;
var _459=$.data(_457,"datagrid").panel;
if(_458){
if(_458.width){
opts.width=_458.width;
}
if(_458.height){
opts.height=_458.height;
}
}
if(opts.fit==true){
var p=_459.panel("panel").parent();
opts.width=p.width();
opts.height=p.height();
}
_459.panel("resize",{width:opts.width,height:opts.height});
};
function _45a(_45b){
var opts=$.data(_45b,"datagrid").options;
var dc=$.data(_45b,"datagrid").dc;
var wrap=$.data(_45b,"datagrid").panel;
var _45c=wrap.width();
var _45d=wrap.height();
var view=dc.view;
var _45e=dc.view1;
var _45f=dc.view2;
var _460=_45e.children("div.datagrid-header");
var _461=_45f.children("div.datagrid-header");
var _462=_460.find("table");
var _463=_461.find("table");
view.width(_45c);
var _464=_460.children("div.datagrid-header-inner").show();
_45e.width(_464.find("table").width());
if(!opts.showHeader){
_464.hide();
}
_45f.width(_45c-_45e._outerWidth());
_45e.children("div.datagrid-header,div.datagrid-body,div.datagrid-footer").width(_45e.width());
_45f.children("div.datagrid-header,div.datagrid-body,div.datagrid-footer").width(_45f.width());
var hh;
_460.css("height","");
_461.css("height","");
_462.css("height","");
_463.css("height","");
hh=Math.max(_462.height(),_463.height());
_462.height(hh);
_463.height(hh);
_460.add(_461)._outerHeight(hh);
if(opts.height!="auto"){
var _465=_45d-_45f.children("div.datagrid-header")._outerHeight()-_45f.children("div.datagrid-footer")._outerHeight()-wrap.children("div.datagrid-toolbar")._outerHeight();
wrap.children("div.datagrid-pager").each(function(){
_465-=$(this)._outerHeight();
});
dc.body1.add(dc.body2).children("table.datagrid-btable-frozen").css({position:"absolute",top:dc.header2._outerHeight()});
var _466=dc.body2.children("table.datagrid-btable-frozen")._outerHeight();
_45e.add(_45f).children("div.datagrid-body").css({marginTop:_466,height:(_465-_466)});
}
view.height(_45f.height());
};
function _467(_468,_469,_46a){
var rows=$.data(_468,"datagrid").data.rows;
var opts=$.data(_468,"datagrid").options;
var dc=$.data(_468,"datagrid").dc;
if(!dc.body1.is(":empty")&&(!opts.nowrap||opts.autoRowHeight||_46a)){
if(_469!=undefined){
var tr1=opts.finder.getTr(_468,_469,"body",1);
var tr2=opts.finder.getTr(_468,_469,"body",2);
_46b(tr1,tr2);
}else{
var tr1=opts.finder.getTr(_468,0,"allbody",1);
var tr2=opts.finder.getTr(_468,0,"allbody",2);
_46b(tr1,tr2);
if(opts.showFooter){
var tr1=opts.finder.getTr(_468,0,"allfooter",1);
var tr2=opts.finder.getTr(_468,0,"allfooter",2);
_46b(tr1,tr2);
}
}
}
_45a(_468);
if(opts.height=="auto"){
var _46c=dc.body1.parent();
var _46d=dc.body2;
var _46e=0;
var _46f=0;
_46d.children().each(function(){
var c=$(this);
if(c.is(":visible")){
_46e+=c._outerHeight();
if(_46f<c._outerWidth()){
_46f=c._outerWidth();
}
}
});
if(_46f>_46d.width()){
_46e+=18;
}
_46c.height(_46e);
_46d.height(_46e);
dc.view.height(dc.view2.height());
}
dc.body2.triggerHandler("scroll");
function _46b(trs1,trs2){
for(var i=0;i<trs2.length;i++){
var tr1=$(trs1[i]);
var tr2=$(trs2[i]);
tr1.css("height","");
tr2.css("height","");
var _470=Math.max(tr1.height(),tr2.height());
tr1.css("height",_470);
tr2.css("height",_470);
}
};
};
function _471(_472,_473){
var _474=$.data(_472,"datagrid");
var opts=_474.options;
var dc=_474.dc;
if(!dc.body2.children("table.datagrid-btable-frozen").length){
dc.body1.add(dc.body2).prepend("<table class=\"datagrid-btable datagrid-btable-frozen\" cellspacing=\"0\" cellpadding=\"0\"></table>");
}
_475(true);
_475(false);
_45a(_472);
function _475(_476){
var _477=_476?1:2;
var tr=opts.finder.getTr(_472,_473,"body",_477);
(_476?dc.body1:dc.body2).children("table.datagrid-btable-frozen").append(tr);
};
};
function _478(_479,_47a){
function _47b(){
var _47c=[];
var _47d=[];
$(_479).children("thead").each(function(){
var opt=$.parser.parseOptions(this,[{frozen:"boolean"}]);
$(this).find("tr").each(function(){
var cols=[];
$(this).find("th").each(function(){
var th=$(this);
var col=$.extend({},$.parser.parseOptions(this,["field","align","order",{sortable:"boolean",checkbox:"boolean",resizable:"boolean"},{rowspan:"number",colspan:"number",width:"number"}]),{title:(th.html()||undefined),hidden:(th.attr("hidden")?true:undefined),formatter:(th.attr("formatter")?eval(th.attr("formatter")):undefined),styler:(th.attr("styler")?eval(th.attr("styler")):undefined)});
if(th.attr("editor")){
var s=$.trim(th.attr("editor"));
if(s.substr(0,1)=="{"){
col.editor=eval("("+s+")");
}else{
col.editor=s;
}
}
cols.push(col);
});
opt.frozen?_47c.push(cols):_47d.push(cols);
});
});
return [_47c,_47d];
};
var _47e=$("<div class=\"datagrid-wrap\">"+"<div class=\"datagrid-view\">"+"<div class=\"datagrid-view1\">"+"<div class=\"datagrid-header\">"+"<div class=\"datagrid-header-inner\"></div>"+"</div>"+"<div class=\"datagrid-body\">"+"<div class=\"datagrid-body-inner\"></div>"+"</div>"+"<div class=\"datagrid-footer\">"+"<div class=\"datagrid-footer-inner\"></div>"+"</div>"+"</div>"+"<div class=\"datagrid-view2\">"+"<div class=\"datagrid-header\">"+"<div class=\"datagrid-header-inner\"></div>"+"</div>"+"<div class=\"datagrid-body\"></div>"+"<div class=\"datagrid-footer\">"+"<div class=\"datagrid-footer-inner\"></div>"+"</div>"+"</div>"+"</div>"+"</div>").insertAfter(_479);
_47e.panel({doSize:false});
_47e.panel("panel").addClass("datagrid").bind("_resize",function(e,_47f){
var opts=$.data(_479,"datagrid").options;
if(opts.fit==true||_47f){
_456(_479);
setTimeout(function(){
if($.data(_479,"datagrid")){
_480(_479);
}
},0);
}
return false;
});
$(_479).hide().appendTo(_47e.children("div.datagrid-view"));
var cc=_47b();
var view=_47e.children("div.datagrid-view");
var _481=view.children("div.datagrid-view1");
var _482=view.children("div.datagrid-view2");
return {panel:_47e,frozenColumns:cc[0],columns:cc[1],dc:{view:view,view1:_481,view2:_482,header1:_481.children("div.datagrid-header").children("div.datagrid-header-inner"),header2:_482.children("div.datagrid-header").children("div.datagrid-header-inner"),body1:_481.children("div.datagrid-body").children("div.datagrid-body-inner"),body2:_482.children("div.datagrid-body"),footer1:_481.children("div.datagrid-footer").children("div.datagrid-footer-inner"),footer2:_482.children("div.datagrid-footer").children("div.datagrid-footer-inner")}};
};
function _483(_484){
var data={total:0,rows:[]};
var _485=_486(_484,true).concat(_486(_484,false));
$(_484).find("tbody tr").each(function(){
data.total++;
var col={};
for(var i=0;i<_485.length;i++){
col[_485[i]]=$("td:eq("+i+")",this).html();
}
data.rows.push(col);
});
return data;
};
function _487(_488){
var _489=$.data(_488,"datagrid");
var opts=_489.options;
var dc=_489.dc;
var _48a=_489.panel;
_48a.panel($.extend({},opts,{id:null,doSize:false,onResize:function(_48b,_48c){
setTimeout(function(){
if($.data(_488,"datagrid")){
_45a(_488);
_4aa(_488);
opts.onResize.call(_48a,_48b,_48c);
}
},0);
},onExpand:function(){
_467(_488);
opts.onExpand.call(_48a);
}}));
_489.rowIdPrefix="datagrid-row-r"+(++_451);
_48d(dc.header1,opts.frozenColumns,true);
_48d(dc.header2,opts.columns,false);
_48e();
dc.header1.add(dc.header2).css("display",opts.showHeader?"block":"none");
dc.footer1.add(dc.footer2).css("display",opts.showFooter?"block":"none");
if(opts.toolbar){
if(typeof opts.toolbar=="string"){
$(opts.toolbar).addClass("datagrid-toolbar").prependTo(_48a);
$(opts.toolbar).show();
}else{
$("div.datagrid-toolbar",_48a).remove();
var tb=$("<div class=\"datagrid-toolbar\"><table cellspacing=\"0\" cellpadding=\"0\"><tr></tr></table></div>").prependTo(_48a);
var tr=tb.find("tr");
for(var i=0;i<opts.toolbar.length;i++){
var btn=opts.toolbar[i];
if(btn=="-"){
$("<td><div class=\"datagrid-btn-separator\"></div></td>").appendTo(tr);
}else{
var td=$("<td></td>").appendTo(tr);
var tool=$("<a href=\"javascript:void(0)\"></a>").appendTo(td);
tool[0].onclick=eval(btn.handler||function(){
});
tool.linkbutton($.extend({},btn,{plain:true}));
}
}
}
}else{
$("div.datagrid-toolbar",_48a).remove();
}
$("div.datagrid-pager",_48a).remove();
if(opts.pagination){
var _48f=$("<div class=\"datagrid-pager\"></div>");
if(opts.pagePosition=="bottom"){
_48f.appendTo(_48a);
}else{
if(opts.pagePosition=="top"){
_48f.addClass("datagrid-pager-top").prependTo(_48a);
}else{
var ptop=$("<div class=\"datagrid-pager datagrid-pager-top\"></div>").prependTo(_48a);
_48f.appendTo(_48a);
_48f=_48f.add(ptop);
}
}
_48f.pagination({total:0,pageNumber:opts.pageNumber,pageSize:opts.pageSize,pageList:opts.pageList,onSelectPage:function(_490,_491){
opts.pageNumber=_490;
opts.pageSize=_491;
_48f.pagination("refresh",{pageNumber:_490,pageSize:_491});
_568(_488);
}});
opts.pageSize=_48f.pagination("options").pageSize;
}
function _48d(_492,_493,_494){
if(!_493){
return;
}
$(_492).show();
$(_492).empty();
var t=$("<table class=\"datagrid-htable\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tbody></tbody></table>").appendTo(_492);
for(var i=0;i<_493.length;i++){
var tr=$("<tr class=\"datagrid-header-row\"></tr>").appendTo($("tbody",t));
var cols=_493[i];
for(var j=0;j<cols.length;j++){
var col=cols[j];
var attr="";
if(col.rowspan){
attr+="rowspan=\""+col.rowspan+"\" ";
}
if(col.colspan){
attr+="colspan=\""+col.colspan+"\" ";
}
var td=$("<td "+attr+"></td>").appendTo(tr);
if(col.checkbox){
td.attr("field",col.field);
$("<div class=\"datagrid-header-check\"></div>").html("<input type=\"checkbox\"/>").appendTo(td);
}else{
if(col.field){
td.attr("field",col.field);
td.append("<div class=\"datagrid-cell\"><span></span><span class=\"datagrid-sort-icon\"></span></div>");
$("span",td).html(col.title);
$("span.datagrid-sort-icon",td).html("&nbsp;");
var cell=td.find("div.datagrid-cell");
if(col.resizable==false){
cell.attr("resizable","false");
}
if(col.width){
cell._outerWidth(col.width);
col.boxWidth=parseInt(cell[0].style.width);
}else{
col.auto=true;
}
if(col.align){
cell.css("text-align",col.align);
}
col.cellClass="datagrid-cell-c"+_451+"-"+col.field.replace(/\./g,"-");
col.cellSelector="div."+col.cellClass;
}else{
$("<div class=\"datagrid-cell-group\"></div>").html(col.title).appendTo(td);
}
}
if(col.hidden){
td.hide();
}
}
}
if(_494&&opts.rownumbers){
var td=$("<td rowspan=\""+opts.frozenColumns.length+"\"><div class=\"datagrid-header-rownumber\"></div></td>");
if($("tr",t).length==0){
td.wrap("<tr class=\"datagrid-header-row\"></tr>").parent().appendTo($("tbody",t));
}else{
td.prependTo($("tr:first",t));
}
}
};
function _48e(){
var ss=["<style type=\"text/css\">"];
var _495=_486(_488,true).concat(_486(_488));
for(var i=0;i<_495.length;i++){
var col=_496(_488,_495[i]);
if(col&&!col.checkbox){
ss.push(col.cellSelector+" {width:"+col.boxWidth+"px;}");
}
}
ss.push("</style>");
$(ss.join("\n")).prependTo(dc.view);
};
};
function _497(_498){
var _499=$.data(_498,"datagrid");
var _49a=_499.panel;
var opts=_499.options;
var dc=_499.dc;
var _49b=dc.header1.add(dc.header2);
_49b.find("input[type=checkbox]").unbind(".datagrid").bind("click.datagrid",function(e){
if(opts.singleSelect&&opts.selectOnCheck){
return false;
}
if($(this).is(":checked")){
_503(_498);
}else{
_509(_498);
}
e.stopPropagation();
});
var _49c=_49b.find("div.datagrid-cell");
_49c.closest("td").unbind(".datagrid").bind("mouseenter.datagrid",function(){
if(_499.resizing){
return;
}
$(this).addClass("datagrid-header-over");
}).bind("mouseleave.datagrid",function(){
$(this).removeClass("datagrid-header-over");
}).bind("contextmenu.datagrid",function(e){
var _49d=$(this).attr("field");
opts.onHeaderContextMenu.call(_498,e,_49d);
});
_49c.unbind(".datagrid").bind("click.datagrid",function(e){
var p1=$(this).offset().left+5;
var p2=$(this).offset().left+$(this)._outerWidth()-5;
if(e.pageX<p2&&e.pageX>p1){
var _49e=$(this).parent().attr("field");
var col=_496(_498,_49e);
if(!col.sortable||_499.resizing){
return;
}
opts.sortName=_49e;
opts.sortOrder=col.order||"asc";
var cls="datagrid-sort-"+opts.sortOrder;
if($(this).hasClass("datagrid-sort-asc")){
cls="datagrid-sort-desc";
opts.sortOrder="desc";
}else{
if($(this).hasClass("datagrid-sort-desc")){
cls="datagrid-sort-asc";
opts.sortOrder="asc";
}
}
_49c.removeClass("datagrid-sort-asc datagrid-sort-desc");
$(this).addClass(cls);
if(opts.remoteSort){
_568(_498);
}else{
var data=$.data(_498,"datagrid").data;
_4d8(_498,data);
}
opts.onSortColumn.call(_498,opts.sortName,opts.sortOrder);
}
}).bind("dblclick.datagrid",function(e){
var p1=$(this).offset().left+5;
var p2=$(this).offset().left+$(this)._outerWidth()-5;
var cond=opts.resizeHandle=="right"?(e.pageX>p2):(opts.resizeHandle=="left"?(e.pageX<p1):(e.pageX<p1||e.pageX>p2));
if(cond){
var _49f=$(this).parent().attr("field");
var col=_496(_498,_49f);
if(col.resizable==false){
return;
}
$(_498).datagrid("autoSizeColumn",_49f);
col.auto=false;
}
});
var _4a0=opts.resizeHandle=="right"?"e":(opts.resizeHandle=="left"?"w":"e,w");
_49c.each(function(){
$(this).resizable({handles:_4a0,disabled:($(this).attr("resizable")?$(this).attr("resizable")=="false":false),minWidth:25,onStartResize:function(e){
_499.resizing=true;
_49b.css("cursor",$("body").css("cursor"));
if(!_499.proxy){
_499.proxy=$("<div class=\"datagrid-resize-proxy\"></div>").appendTo(dc.view);
}
_499.proxy.css({left:e.pageX-$(_49a).offset().left-1,display:"none"});
setTimeout(function(){
if(_499.proxy){
_499.proxy.show();
}
},500);
},onResize:function(e){
_499.proxy.css({left:e.pageX-$(_49a).offset().left-1,display:"block"});
return false;
},onStopResize:function(e){
_49b.css("cursor","");
var _4a1=$(this).parent().attr("field");
var col=_496(_498,_4a1);
col.width=$(this)._outerWidth();
col.boxWidth=parseInt(this.style.width);
col.auto=undefined;
_480(_498,_4a1);
_499.proxy.remove();
_499.proxy=null;
if($(this).parents("div:first.datagrid-header").parent().hasClass("datagrid-view1")){
_45a(_498);
}
_4aa(_498);
opts.onResizeColumn.call(_498,_4a1,col.width);
setTimeout(function(){
_499.resizing=false;
},0);
}});
});
dc.body1.add(dc.body2).unbind().bind("mouseover",function(e){
if(_499.resizing){
return;
}
var tr=$(e.target).closest("tr.datagrid-row");
if(!tr.length){
return;
}
var _4a2=_4a3(tr);
opts.finder.getTr(_498,_4a2).addClass("datagrid-row-over");
e.stopPropagation();
}).bind("mouseout",function(e){
var tr=$(e.target).closest("tr.datagrid-row");
if(!tr.length){
return;
}
var _4a4=_4a3(tr);
opts.finder.getTr(_498,_4a4).removeClass("datagrid-row-over");
e.stopPropagation();
}).bind("click",function(e){
var tt=$(e.target);
var tr=tt.closest("tr.datagrid-row");
if(!tr.length){
return;
}
var _4a5=_4a3(tr);
if(tt.parent().hasClass("datagrid-cell-check")){
if(opts.singleSelect&&opts.selectOnCheck){
if(!opts.checkOnSelect){
_509(_498,true);
}
_4f4(_498,_4a5);
}else{
if(tt.is(":checked")){
_4f4(_498,_4a5);
}else{
_4fd(_498,_4a5);
}
}
}else{
var row=opts.finder.getRow(_498,_4a5);
var td=tt.closest("td[field]",tr);
if(td.length){
var _4a6=td.attr("field");
opts.onClickCell.call(_498,_4a5,_4a6,row[_4a6]);
}
if(opts.singleSelect==true){
_4ed(_498,_4a5);
}else{
if(tr.hasClass("datagrid-row-selected")){
_4f7(_498,_4a5);
}else{
_4ed(_498,_4a5);
}
}
opts.onClickRow.call(_498,_4a5,row);
}
e.stopPropagation();
}).bind("dblclick",function(e){
var tt=$(e.target);
var tr=tt.closest("tr.datagrid-row");
if(!tr.length){
return;
}
var _4a7=_4a3(tr);
var row=opts.finder.getRow(_498,_4a7);
var td=tt.closest("td[field]",tr);
if(td.length){
var _4a8=td.attr("field");
opts.onDblClickCell.call(_498,_4a7,_4a8,row[_4a8]);
}
opts.onDblClickRow.call(_498,_4a7,row);
e.stopPropagation();
}).bind("contextmenu",function(e){
var tr=$(e.target).closest("tr.datagrid-row");
if(!tr.length){
return;
}
var _4a9=_4a3(tr);
var row=opts.finder.getRow(_498,_4a9);
opts.onRowContextMenu.call(_498,e,_4a9,row);
e.stopPropagation();
});
dc.body2.bind("scroll",function(){
dc.view1.children("div.datagrid-body").scrollTop($(this).scrollTop());
dc.view2.children("div.datagrid-header,div.datagrid-footer")._scrollLeft($(this)._scrollLeft());
dc.body2.children("table.datagrid-btable-frozen").css("left",-$(this)._scrollLeft());
});
function _4a3(tr){
if(tr.attr("datagrid-row-index")){
return parseInt(tr.attr("datagrid-row-index"));
}else{
return tr.attr("node-id");
}
};
};
function _4aa(_4ab){
var opts=$.data(_4ab,"datagrid").options;
var dc=$.data(_4ab,"datagrid").dc;
if(!opts.fitColumns){
return;
}
var _4ac=dc.view2.children("div.datagrid-header");
var _4ad=0;
var _4ae;
var _4af=_486(_4ab,false);
for(var i=0;i<_4af.length;i++){
var col=_496(_4ab,_4af[i]);
if(_4b0(col)){
_4ad+=col.width;
_4ae=col;
}
}
var _4b1=_4ac.children("div.datagrid-header-inner").show();
var _4b2=_4ac.width()-_4ac.find("table").width()-opts.scrollbarSize;
var rate=_4b2/_4ad;
if(!opts.showHeader){
_4b1.hide();
}
for(var i=0;i<_4af.length;i++){
var col=_496(_4ab,_4af[i]);
if(_4b0(col)){
var _4b3=Math.floor(col.width*rate);
_4b4(col,_4b3);
_4b2-=_4b3;
}
}
if(_4b2&&_4ae){
_4b4(_4ae,_4b2);
}
_480(_4ab);
function _4b4(col,_4b5){
col.width+=_4b5;
col.boxWidth+=_4b5;
_4ac.find("td[field=\""+col.field+"\"] div.datagrid-cell").width(col.boxWidth);
};
function _4b0(col){
if(!col.hidden&&!col.checkbox&&!col.auto){
return true;
}
};
};
function _4b6(_4b7,_4b8){
var opts=$.data(_4b7,"datagrid").options;
var dc=$.data(_4b7,"datagrid").dc;
if(_4b8){
_456(_4b8);
if(opts.fitColumns){
_45a(_4b7);
_4aa(_4b7);
}
}else{
var _4b9=false;
var _4ba=_486(_4b7,true).concat(_486(_4b7,false));
for(var i=0;i<_4ba.length;i++){
var _4b8=_4ba[i];
var col=_496(_4b7,_4b8);
if(col.auto){
_456(_4b8);
_4b9=true;
}
}
if(_4b9&&opts.fitColumns){
_45a(_4b7);
_4aa(_4b7);
}
}
function _456(_4bb){
var _4bc=dc.view.find("div.datagrid-header td[field=\""+_4bb+"\"] div.datagrid-cell");
_4bc.css("width","");
var col=$(_4b7).datagrid("getColumnOption",_4bb);
col.width=undefined;
col.boxWidth=undefined;
col.auto=true;
$(_4b7).datagrid("fixColumnSize",_4bb);
var _4bd=Math.max(_4bc._outerWidth(),_4be("allbody"),_4be("allfooter"));
_4bc._outerWidth(_4bd);
col.width=_4bd;
col.boxWidth=parseInt(_4bc[0].style.width);
$(_4b7).datagrid("fixColumnSize",_4bb);
opts.onResizeColumn.call(_4b7,_4bb,col.width);
function _4be(type){
var _4bf=0;
opts.finder.getTr(_4b7,0,type).find("td[field=\""+_4bb+"\"] div.datagrid-cell").each(function(){
var w=$(this)._outerWidth();
if(_4bf<w){
_4bf=w;
}
});
return _4bf;
};
};
};
function _480(_4c0,_4c1){
var opts=$.data(_4c0,"datagrid").options;
var dc=$.data(_4c0,"datagrid").dc;
var _4c2=dc.view.find("table.datagrid-btable,table.datagrid-ftable");
_4c2.css("table-layout","fixed");
if(_4c1){
fix(_4c1);
}else{
var ff=_486(_4c0,true).concat(_486(_4c0,false));
for(var i=0;i<ff.length;i++){
fix(ff[i]);
}
}
_4c2.css("table-layout","auto");
_4c3(_4c0);
setTimeout(function(){
_467(_4c0);
_4cb(_4c0);
},0);
function fix(_4c4){
var col=_496(_4c0,_4c4);
if(col.checkbox){
return;
}
var _4c5=dc.view.children("style")[0];
var _4c6=_4c5.styleSheet?_4c5.styleSheet:(_4c5.sheet||document.styleSheets[document.styleSheets.length-1]);
var _4c7=_4c6.cssRules||_4c6.rules;
for(var i=0,len=_4c7.length;i<len;i++){
var rule=_4c7[i];
if(rule.selectorText.toLowerCase()==col.cellSelector.toLowerCase()){
rule.style["width"]=col.boxWidth?col.boxWidth+"px":"auto";
break;
}
}
};
};
function _4c3(_4c8){
var dc=$.data(_4c8,"datagrid").dc;
dc.body1.add(dc.body2).find("td.datagrid-td-merged").each(function(){
var td=$(this);
var _4c9=td.attr("colspan")||1;
var _4ca=_496(_4c8,td.attr("field")).width;
for(var i=1;i<_4c9;i++){
td=td.next();
_4ca+=_496(_4c8,td.attr("field")).width+1;
}
$(this).children("div.datagrid-cell")._outerWidth(_4ca);
});
};
function _4cb(_4cc){
var dc=$.data(_4cc,"datagrid").dc;
dc.view.find("div.datagrid-editable").each(function(){
var cell=$(this);
var _4cd=cell.parent().attr("field");
var col=$(_4cc).datagrid("getColumnOption",_4cd);
cell._outerWidth(col.width);
var ed=$.data(this,"datagrid.editor");
if(ed.actions.resize){
ed.actions.resize(ed.target,cell.width());
}
});
};
function _496(_4ce,_4cf){
function find(_4d0){
if(_4d0){
for(var i=0;i<_4d0.length;i++){
var cc=_4d0[i];
for(var j=0;j<cc.length;j++){
var c=cc[j];
if(c.field==_4cf){
return c;
}
}
}
}
return null;
};
var opts=$.data(_4ce,"datagrid").options;
var col=find(opts.columns);
if(!col){
col=find(opts.frozenColumns);
}
return col;
};
function _486(_4d1,_4d2){
var opts=$.data(_4d1,"datagrid").options;
var _4d3=(_4d2==true)?(opts.frozenColumns||[[]]):opts.columns;
if(_4d3.length==0){
return [];
}
var _4d4=[];
function _4d5(_4d6){
var c=0;
var i=0;
while(true){
if(_4d4[i]==undefined){
if(c==_4d6){
return i;
}
c++;
}
i++;
}
};
function _4d7(r){
var ff=[];
var c=0;
for(var i=0;i<_4d3[r].length;i++){
var col=_4d3[r][i];
if(col.field){
ff.push([c,col.field]);
}
c+=parseInt(col.colspan||"1");
}
for(var i=0;i<ff.length;i++){
ff[i][0]=_4d5(ff[i][0]);
}
for(var i=0;i<ff.length;i++){
var f=ff[i];
_4d4[f[0]]=f[1];
}
};
for(var i=0;i<_4d3.length;i++){
_4d7(i);
}
return _4d4;
};
function _4d8(_4d9,data){
var _4da=$.data(_4d9,"datagrid");
var opts=_4da.options;
var dc=_4da.dc;
data=opts.loadFilter.call(_4d9,data);
data.total=parseInt(data.total);
_4da.data=data;
if(data.footer){
_4da.footer=data.footer;
}
if(!opts.remoteSort){
var opt=_496(_4d9,opts.sortName);
if(opt){
var _4db=opt.sorter||function(a,b){
return (a>b?1:-1);
};
data.rows.sort(function(r1,r2){
return _4db(r1[opts.sortName],r2[opts.sortName])*(opts.sortOrder=="asc"?1:-1);
});
}
}
if(opts.view.onBeforeRender){
opts.view.onBeforeRender.call(opts.view,_4d9,data.rows);
}
opts.view.render.call(opts.view,_4d9,dc.body2,false);
opts.view.render.call(opts.view,_4d9,dc.body1,true);
if(opts.showFooter){
opts.view.renderFooter.call(opts.view,_4d9,dc.footer2,false);
opts.view.renderFooter.call(opts.view,_4d9,dc.footer1,true);
}
if(opts.view.onAfterRender){
opts.view.onAfterRender.call(opts.view,_4d9);
}
dc.view.children("style:gt(0)").remove();
opts.onLoadSuccess.call(_4d9,data);
var _4dc=$(_4d9).datagrid("getPager");
if(_4dc.length){
if(_4dc.pagination("options").total!=data.total){
_4dc.pagination("refresh",{total:data.total});
}
}
_467(_4d9);
dc.body2.triggerHandler("scroll");
_4dd();
$(_4d9).datagrid("autoSizeColumn");
function _4dd(){
if(opts.idField){
for(var i=0;i<data.rows.length;i++){
var row=data.rows[i];
if(_4de(_4da.selectedRows,row)){
_4ed(_4d9,i,true);
}
if(_4de(_4da.checkedRows,row)){
_4f4(_4d9,i,true);
}
}
}
function _4de(a,r){
for(var i=0;i<a.length;i++){
if(a[i][opts.idField]==r[opts.idField]){
a[i]=r;
return true;
}
}
return false;
};
};
};
function _4df(_4e0,row){
var opts=$.data(_4e0,"datagrid").options;
var rows=$.data(_4e0,"datagrid").data.rows;
if(typeof row=="object"){
return _452(rows,row);
}else{
for(var i=0;i<rows.length;i++){
if(rows[i][opts.idField]==row){
return i;
}
}
return -1;
}
};
function _4e1(_4e2){
var _4e3=$.data(_4e2,"datagrid");
var opts=_4e3.options;
var data=_4e3.data;
if(opts.idField){
return _4e3.selectedRows;
}else{
var rows=[];
opts.finder.getTr(_4e2,"","selected",2).each(function(){
var _4e4=parseInt($(this).attr("datagrid-row-index"));
rows.push(data.rows[_4e4]);
});
return rows;
}
};
function _4e5(_4e6){
var _4e7=$.data(_4e6,"datagrid");
var opts=_4e7.options;
if(opts.idField){
return _4e7.checkedRows;
}else{
var rows=[];
_4e7.dc.view.find("div.datagrid-cell-check input:checked").each(function(){
var _4e8=$(this).closest("tr.datagrid-row").attr("datagrid-row-index");
rows.push(opts.finder.getRow(_4e6,_4e8));
});
return rows;
}
};
function _4e9(_4ea,_4eb){
var opts=$.data(_4ea,"datagrid").options;
if(opts.idField){
var _4ec=_4df(_4ea,_4eb);
if(_4ec>=0){
_4ed(_4ea,_4ec);
}
}
};
function _4ed(_4ee,_4ef,_4f0){
var _4f1=$.data(_4ee,"datagrid");
var dc=_4f1.dc;
var opts=_4f1.options;
var _4f2=_4f1.selectedRows;
if(opts.singleSelect){
_4f3(_4ee);
_4f2.splice(0,_4f2.length);
}
if(!_4f0&&opts.checkOnSelect){
_4f4(_4ee,_4ef,true);
}
var row=opts.finder.getRow(_4ee,_4ef);
if(opts.idField){
_455(_4f2,opts.idField,row);
}
opts.onSelect.call(_4ee,_4ef,row);
var tr=opts.finder.getTr(_4ee,_4ef).addClass("datagrid-row-selected");
if(tr.length){
var _4f5=dc.view2.children("div.datagrid-header")._outerHeight();
var _4f6=dc.body2;
var top=tr.position().top-_4f5;
if(top<=0){
_4f6.scrollTop(_4f6.scrollTop()+top);
}else{
if(top+tr._outerHeight()>_4f6.height()-18){
_4f6.scrollTop(_4f6.scrollTop()+top+tr._outerHeight()-_4f6.height()+18);
}
}
}
};
function _4f7(_4f8,_4f9,_4fa){
var _4fb=$.data(_4f8,"datagrid");
var dc=_4fb.dc;
var opts=_4fb.options;
var _4fc=$.data(_4f8,"datagrid").selectedRows;
if(!_4fa&&opts.checkOnSelect){
_4fd(_4f8,_4f9,true);
}
opts.finder.getTr(_4f8,_4f9).removeClass("datagrid-row-selected");
var row=opts.finder.getRow(_4f8,_4f9);
if(opts.idField){
_453(_4fc,opts.idField,row[opts.idField]);
}
opts.onUnselect.call(_4f8,_4f9,row);
};
function _4fe(_4ff,_500){
var _501=$.data(_4ff,"datagrid");
var opts=_501.options;
var rows=_501.data.rows;
var _502=$.data(_4ff,"datagrid").selectedRows;
if(!_500&&opts.checkOnSelect){
_503(_4ff,true);
}
opts.finder.getTr(_4ff,"","allbody").addClass("datagrid-row-selected");
if(opts.idField){
for(var _504=0;_504<rows.length;_504++){
_455(_502,opts.idField,rows[_504]);
}
}
opts.onSelectAll.call(_4ff,rows);
};
function _4f3(_505,_506){
var _507=$.data(_505,"datagrid");
var opts=_507.options;
var rows=_507.data.rows;
var _508=$.data(_505,"datagrid").selectedRows;
if(!_506&&opts.checkOnSelect){
_509(_505,true);
}
opts.finder.getTr(_505,"","selected").removeClass("datagrid-row-selected");
if(opts.idField){
for(var _50a=0;_50a<rows.length;_50a++){
_453(_508,opts.idField,rows[_50a][opts.idField]);
}
}
opts.onUnselectAll.call(_505,rows);
};
function _4f4(_50b,_50c,_50d){
var _50e=$.data(_50b,"datagrid");
var opts=_50e.options;
if(!_50d&&opts.selectOnCheck){
_4ed(_50b,_50c,true);
}
var ck=opts.finder.getTr(_50b,_50c).find("div.datagrid-cell-check input[type=checkbox]");
ck._propAttr("checked",true);
ck=opts.finder.getTr(_50b,"","allbody").find("div.datagrid-cell-check input[type=checkbox]:not(:checked)");
if(!ck.length){
var dc=_50e.dc;
var _50f=dc.header1.add(dc.header2);
_50f.find("input[type=checkbox]")._propAttr("checked",true);
}
var row=opts.finder.getRow(_50b,_50c);
if(opts.idField){
_455(_50e.checkedRows,opts.idField,row);
}
opts.onCheck.call(_50b,_50c,row);
};
function _4fd(_510,_511,_512){
var _513=$.data(_510,"datagrid");
var opts=_513.options;
if(!_512&&opts.selectOnCheck){
_4f7(_510,_511,true);
}
var ck=opts.finder.getTr(_510,_511).find("div.datagrid-cell-check input[type=checkbox]");
ck._propAttr("checked",false);
var dc=_513.dc;
var _514=dc.header1.add(dc.header2);
_514.find("input[type=checkbox]")._propAttr("checked",false);
var row=opts.finder.getRow(_510,_511);
if(opts.idField){
_453(_513.checkedRows,opts.idField,row[opts.idField]);
}
opts.onUncheck.call(_510,_511,row);
};
function _503(_515,_516){
var _517=$.data(_515,"datagrid");
var opts=_517.options;
var rows=_517.data.rows;
if(!_516&&opts.selectOnCheck){
_4fe(_515,true);
}
var dc=_517.dc;
var hck=dc.header1.add(dc.header2).find("input[type=checkbox]");
var bck=opts.finder.getTr(_515,"","allbody").find("div.datagrid-cell-check input[type=checkbox]");
hck.add(bck)._propAttr("checked",true);
if(opts.idField){
for(var i=0;i<rows.length;i++){
_455(_517.checkedRows,opts.idField,rows[i]);
}
}
opts.onCheckAll.call(_515,rows);
};
function _509(_518,_519){
var _51a=$.data(_518,"datagrid");
var opts=_51a.options;
var rows=_51a.data.rows;
if(!_519&&opts.selectOnCheck){
_4f3(_518,true);
}
var dc=_51a.dc;
var hck=dc.header1.add(dc.header2).find("input[type=checkbox]");
var bck=opts.finder.getTr(_518,"","allbody").find("div.datagrid-cell-check input[type=checkbox]");
hck.add(bck)._propAttr("checked",false);
if(opts.idField){
for(var i=0;i<rows.length;i++){
_453(_51a.checkedRows,opts.idField,rows[i][opts.idField]);
}
}
opts.onUncheckAll.call(_518,rows);
};
function _51b(_51c,_51d){
var opts=$.data(_51c,"datagrid").options;
var tr=opts.finder.getTr(_51c,_51d);
var row=opts.finder.getRow(_51c,_51d);
if(tr.hasClass("datagrid-row-editing")){
return;
}
if(opts.onBeforeEdit.call(_51c,_51d,row)==false){
return;
}
tr.addClass("datagrid-row-editing");
_51e(_51c,_51d);
_4cb(_51c);
tr.find("div.datagrid-editable").each(function(){
var _51f=$(this).parent().attr("field");
var ed=$.data(this,"datagrid.editor");
ed.actions.setValue(ed.target,row[_51f]);
});
_520(_51c,_51d);
};
function _521(_522,_523,_524){
var opts=$.data(_522,"datagrid").options;
var _525=$.data(_522,"datagrid").updatedRows;
var _526=$.data(_522,"datagrid").insertedRows;
var tr=opts.finder.getTr(_522,_523);
var row=opts.finder.getRow(_522,_523);
if(!tr.hasClass("datagrid-row-editing")){
return;
}
if(!_524){
if(!_520(_522,_523)){
return;
}
var _527=false;
var _528={};
tr.find("div.datagrid-editable").each(function(){
var _529=$(this).parent().attr("field");
var ed=$.data(this,"datagrid.editor");
var _52a=ed.actions.getValue(ed.target);
if(row[_529]!=_52a){
row[_529]=_52a;
_527=true;
_528[_529]=_52a;
}
});
if(_527){
if(_452(_526,row)==-1){
if(_452(_525,row)==-1){
_525.push(row);
}
}
}
}
tr.removeClass("datagrid-row-editing");
_52b(_522,_523);
$(_522).datagrid("refreshRow",_523);
if(!_524){
opts.onAfterEdit.call(_522,_523,row,_528);
}else{
opts.onCancelEdit.call(_522,_523,row);
}
};
function _52c(_52d,_52e){
var opts=$.data(_52d,"datagrid").options;
var tr=opts.finder.getTr(_52d,_52e);
var _52f=[];
tr.children("td").each(function(){
var cell=$(this).find("div.datagrid-editable");
if(cell.length){
var ed=$.data(cell[0],"datagrid.editor");
_52f.push(ed);
}
});
return _52f;
};
function _530(_531,_532){
var _533=_52c(_531,_532.index);
for(var i=0;i<_533.length;i++){
if(_533[i].field==_532.field){
return _533[i];
}
}
return null;
};
function _51e(_534,_535){
var opts=$.data(_534,"datagrid").options;
var tr=opts.finder.getTr(_534,_535);
tr.children("td").each(function(){
var cell=$(this).find("div.datagrid-cell");
var _536=$(this).attr("field");
var col=_496(_534,_536);
if(col&&col.editor){
var _537,_538;
if(typeof col.editor=="string"){
_537=col.editor;
}else{
_537=col.editor.type;
_538=col.editor.options;
}
var _539=opts.editors[_537];
if(_539){
var _53a=cell.html();
var _53b=cell._outerWidth();
cell.addClass("datagrid-editable");
cell._outerWidth(_53b);
cell.html("<table border=\"0\" cellspacing=\"0\" cellpadding=\"1\"><tr><td></td></tr></table>");
cell.children("table").bind("click dblclick contextmenu",function(e){
e.stopPropagation();
});
$.data(cell[0],"datagrid.editor",{actions:_539,target:_539.init(cell.find("td"),_538),field:_536,type:_537,oldHtml:_53a});
}
}
});
_467(_534,_535,true);
};
function _52b(_53c,_53d){
var opts=$.data(_53c,"datagrid").options;
var tr=opts.finder.getTr(_53c,_53d);
tr.children("td").each(function(){
var cell=$(this).find("div.datagrid-editable");
if(cell.length){
var ed=$.data(cell[0],"datagrid.editor");
if(ed.actions.destroy){
ed.actions.destroy(ed.target);
}
cell.html(ed.oldHtml);
$.removeData(cell[0],"datagrid.editor");
cell.removeClass("datagrid-editable");
cell.css("width","");
}
});
};
function _520(_53e,_53f){
var tr=$.data(_53e,"datagrid").options.finder.getTr(_53e,_53f);
if(!tr.hasClass("datagrid-row-editing")){
return true;
}
var vbox=tr.find(".validatebox-text");
vbox.validatebox("validate");
vbox.trigger("mouseleave");
var _540=tr.find(".validatebox-invalid");
return _540.length==0;
};
function _541(_542,_543){
var _544=$.data(_542,"datagrid").insertedRows;
var _545=$.data(_542,"datagrid").deletedRows;
var _546=$.data(_542,"datagrid").updatedRows;
if(!_543){
var rows=[];
rows=rows.concat(_544);
rows=rows.concat(_545);
rows=rows.concat(_546);
return rows;
}else{
if(_543=="inserted"){
return _544;
}else{
if(_543=="deleted"){
return _545;
}else{
if(_543=="updated"){
return _546;
}
}
}
}
return [];
};
function _547(_548,_549){
var _54a=$.data(_548,"datagrid");
var opts=_54a.options;
var data=_54a.data;
var _54b=_54a.insertedRows;
var _54c=_54a.deletedRows;
$(_548).datagrid("cancelEdit",_549);
var row=data.rows[_549];
if(_452(_54b,row)>=0){
_453(_54b,row);
}else{
_54c.push(row);
}
_453(_54a.selectedRows,opts.idField,data.rows[_549][opts.idField]);
_453(_54a.checkedRows,opts.idField,data.rows[_549][opts.idField]);
opts.view.deleteRow.call(opts.view,_548,_549);
if(opts.height=="auto"){
_467(_548);
}
$(_548).datagrid("getPager").pagination("refresh",{total:data.total});
};
function _54d(_54e,_54f){
var data=$.data(_54e,"datagrid").data;
var view=$.data(_54e,"datagrid").options.view;
var _550=$.data(_54e,"datagrid").insertedRows;
view.insertRow.call(view,_54e,_54f.index,_54f.row);
_550.push(_54f.row);
$(_54e).datagrid("getPager").pagination("refresh",{total:data.total});
};
function _551(_552,row){
var data=$.data(_552,"datagrid").data;
var view=$.data(_552,"datagrid").options.view;
var _553=$.data(_552,"datagrid").insertedRows;
view.insertRow.call(view,_552,null,row);
_553.push(row);
$(_552).datagrid("getPager").pagination("refresh",{total:data.total});
};
function _554(_555){
var _556=$.data(_555,"datagrid");
var data=_556.data;
var rows=data.rows;
var _557=[];
for(var i=0;i<rows.length;i++){
_557.push($.extend({},rows[i]));
}
_556.originalRows=_557;
_556.updatedRows=[];
_556.insertedRows=[];
_556.deletedRows=[];
};
function _558(_559){
var data=$.data(_559,"datagrid").data;
var ok=true;
for(var i=0,len=data.rows.length;i<len;i++){
if(_520(_559,i)){
_521(_559,i,false);
}else{
ok=false;
}
}
if(ok){
_554(_559);
}
};
function _55a(_55b){
var _55c=$.data(_55b,"datagrid");
var opts=_55c.options;
var _55d=_55c.originalRows;
var _55e=_55c.insertedRows;
var _55f=_55c.deletedRows;
var _560=_55c.selectedRows;
var _561=_55c.checkedRows;
var data=_55c.data;
function _562(a){
var ids=[];
for(var i=0;i<a.length;i++){
ids.push(a[i][opts.idField]);
}
return ids;
};
function _563(ids,_564){
for(var i=0;i<ids.length;i++){
var _565=_4df(_55b,ids[i]);
(_564=="s"?_4ed:_4f4)(_55b,_565,true);
}
};
for(var i=0;i<data.rows.length;i++){
_521(_55b,i,true);
}
var _566=_562(_560);
var _567=_562(_561);
_560.splice(0,_560.length);
_561.splice(0,_561.length);
data.total+=_55f.length-_55e.length;
data.rows=_55d;
_4d8(_55b,data);
_563(_566,"s");
_563(_567,"c");
_554(_55b);
};
function _568(_569,_56a){
var opts=$.data(_569,"datagrid").options;
if(_56a){
opts.queryParams=_56a;
}
var _56b=$.extend({},opts.queryParams);
if(opts.pagination){
$.extend(_56b,{page:opts.pageNumber,rows:opts.pageSize});
}
if(opts.sortName){
$.extend(_56b,{sort:opts.sortName,order:opts.sortOrder});
}
if(opts.onBeforeLoad.call(_569,_56b)==false){
return;
}
$(_569).datagrid("loading");
setTimeout(function(){
_56c();
},0);
function _56c(){
var _56d=opts.loader.call(_569,_56b,function(data){
setTimeout(function(){
$(_569).datagrid("loaded");
},0);
_4d8(_569,data);
setTimeout(function(){
_554(_569);
},0);
},function(){
setTimeout(function(){
$(_569).datagrid("loaded");
},0);
opts.onLoadError.apply(_569,arguments);
});
if(_56d==false){
$(_569).datagrid("loaded");
}
};
};
function _56e(_56f,_570){
var opts=$.data(_56f,"datagrid").options;
var rows=$.data(_56f,"datagrid").data.rows;
_570.rowspan=_570.rowspan||1;
_570.colspan=_570.colspan||1;
if(_570.index<0||_570.index>=rows.length){
return;
}
if(_570.rowspan==1&&_570.colspan==1){
return;
}
var _571=rows[_570.index][_570.field];
var tr=opts.finder.getTr(_56f,_570.index);
var td=tr.find("td[field=\""+_570.field+"\"]");
td.attr("rowspan",_570.rowspan).attr("colspan",_570.colspan);
td.addClass("datagrid-td-merged");
for(var i=1;i<_570.colspan;i++){
td=td.next();
td.hide();
rows[_570.index][td.attr("field")]=_571;
}
for(var i=1;i<_570.rowspan;i++){
tr=tr.next();
var td=tr.find("td[field=\""+_570.field+"\"]").hide();
rows[_570.index+i][td.attr("field")]=_571;
for(var j=1;j<_570.colspan;j++){
td=td.next();
td.hide();
rows[_570.index+i][td.attr("field")]=_571;
}
}
_4c3(_56f);
};
$.fn.datagrid=function(_572,_573){
if(typeof _572=="string"){
return $.fn.datagrid.methods[_572](this,_573);
}
_572=_572||{};
return this.each(function(){
var _574=$.data(this,"datagrid");
var opts;
if(_574){
opts=$.extend(_574.options,_572);
_574.options=opts;
}else{
opts=$.extend({},$.extend({},$.fn.datagrid.defaults,{queryParams:{}}),$.fn.datagrid.parseOptions(this),_572);
$(this).css("width","").css("height","");
var _575=_478(this,opts.rownumbers);
if(!opts.columns){
opts.columns=_575.columns;
}
if(!opts.frozenColumns){
opts.frozenColumns=_575.frozenColumns;
}
opts.columns=$.extend(true,[],opts.columns);
opts.frozenColumns=$.extend(true,[],opts.frozenColumns);
opts.view=$.extend({},opts.view);
$.data(this,"datagrid",{options:opts,panel:_575.panel,dc:_575.dc,selectedRows:[],checkedRows:[],data:{total:0,rows:[]},originalRows:[],updatedRows:[],insertedRows:[],deletedRows:[]});
}
_487(this);
var data=_483(this);
if(data.total>0){
_4d8(this,data);
_554(this);
}
_456(this);
_568(this);
_497(this);
});
};
var _576={text:{init:function(_577,_578){
var _579=$("<input type=\"text\" class=\"datagrid-editable-input\">").appendTo(_577);
return _579;
},getValue:function(_57a){
return $(_57a).val();
},setValue:function(_57b,_57c){
$(_57b).val(_57c);
},resize:function(_57d,_57e){
$(_57d)._outerWidth(_57e);
}},textarea:{init:function(_57f,_580){
var _581=$("<textarea class=\"datagrid-editable-input\"></textarea>").appendTo(_57f);
return _581;
},getValue:function(_582){
return $(_582).val();
},setValue:function(_583,_584){
$(_583).val(_584);
},resize:function(_585,_586){
$(_585)._outerWidth(_586);
}},checkbox:{init:function(_587,_588){
var _589=$("<input type=\"checkbox\">").appendTo(_587);
_589.val(_588.on);
_589.attr("offval",_588.off);
return _589;
},getValue:function(_58a){
if($(_58a).is(":checked")){
return $(_58a).val();
}else{
return $(_58a).attr("offval");
}
},setValue:function(_58b,_58c){
var _58d=false;
if($(_58b).val()==_58c){
_58d=true;
}
$(_58b)._propAttr("checked",_58d);
}},numberbox:{init:function(_58e,_58f){
var _590=$("<input type=\"text\" class=\"datagrid-editable-input\">").appendTo(_58e);
_590.numberbox(_58f);
return _590;
},destroy:function(_591){
$(_591).numberbox("destroy");
},getValue:function(_592){
$(_592).blur();
return $(_592).numberbox("getValue");
},setValue:function(_593,_594){
$(_593).numberbox("setValue",_594);
},resize:function(_595,_596){
$(_595)._outerWidth(_596);
}},validatebox:{init:function(_597,_598){
var _599=$("<input type=\"text\" class=\"datagrid-editable-input\">").appendTo(_597);
_599.validatebox(_598);
return _599;
},destroy:function(_59a){
$(_59a).validatebox("destroy");
},getValue:function(_59b){
return $(_59b).val();
},setValue:function(_59c,_59d){
$(_59c).val(_59d);
},resize:function(_59e,_59f){
$(_59e)._outerWidth(_59f);
}},datebox:{init:function(_5a0,_5a1){
var _5a2=$("<input type=\"text\">").appendTo(_5a0);
_5a2.datebox(_5a1);
return _5a2;
},destroy:function(_5a3){
$(_5a3).datebox("destroy");
},getValue:function(_5a4){
return $(_5a4).datebox("getValue");
},setValue:function(_5a5,_5a6){
$(_5a5).datebox("setValue",_5a6);
},resize:function(_5a7,_5a8){
$(_5a7).datebox("resize",_5a8);
}},combobox:{init:function(_5a9,_5aa){
var _5ab=$("<input type=\"text\">").appendTo(_5a9);
_5ab.combobox(_5aa||{});
return _5ab;
},destroy:function(_5ac){
$(_5ac).combobox("destroy");
},getValue:function(_5ad){
return $(_5ad).combobox("getValue");
},setValue:function(_5ae,_5af){
$(_5ae).combobox("setValue",_5af);
},resize:function(_5b0,_5b1){
$(_5b0).combobox("resize",_5b1);
}},combotree:{init:function(_5b2,_5b3){
var _5b4=$("<input type=\"text\">").appendTo(_5b2);
_5b4.combotree(_5b3);
return _5b4;
},destroy:function(_5b5){
$(_5b5).combotree("destroy");
},getValue:function(_5b6){
return $(_5b6).combotree("getValue");
},setValue:function(_5b7,_5b8){
$(_5b7).combotree("setValue",_5b8);
},resize:function(_5b9,_5ba){
$(_5b9).combotree("resize",_5ba);
}}};
$.fn.datagrid.methods={options:function(jq){
var _5bb=$.data(jq[0],"datagrid").options;
var _5bc=$.data(jq[0],"datagrid").panel.panel("options");
var opts=$.extend(_5bb,{width:_5bc.width,height:_5bc.height,closed:_5bc.closed,collapsed:_5bc.collapsed,minimized:_5bc.minimized,maximized:_5bc.maximized});
return opts;
},getPanel:function(jq){
return $.data(jq[0],"datagrid").panel;
},getPager:function(jq){
return $.data(jq[0],"datagrid").panel.children("div.datagrid-pager");
},getColumnFields:function(jq,_5bd){
return _486(jq[0],_5bd);
},getColumnOption:function(jq,_5be){
return _496(jq[0],_5be);
},resize:function(jq,_5bf){
return jq.each(function(){
_456(this,_5bf);
});
},load:function(jq,_5c0){
return jq.each(function(){
var opts=$(this).datagrid("options");
opts.pageNumber=1;
var _5c1=$(this).datagrid("getPager");
_5c1.pagination({pageNumber:1});
_568(this,_5c0);
});
},reload:function(jq,_5c2){
return jq.each(function(){
_568(this,_5c2);
});
},reloadFooter:function(jq,_5c3){
return jq.each(function(){
var opts=$.data(this,"datagrid").options;
var dc=$.data(this,"datagrid").dc;
if(_5c3){
$.data(this,"datagrid").footer=_5c3;
}
if(opts.showFooter){
opts.view.renderFooter.call(opts.view,this,dc.footer2,false);
opts.view.renderFooter.call(opts.view,this,dc.footer1,true);
if(opts.view.onAfterRender){
opts.view.onAfterRender.call(opts.view,this);
}
$(this).datagrid("fixRowHeight");
}
});
},loading:function(jq){
return jq.each(function(){
var opts=$.data(this,"datagrid").options;
$(this).datagrid("getPager").pagination("loading");
if(opts.loadMsg){
var _5c4=$(this).datagrid("getPanel");
$("<div class=\"datagrid-mask\" style=\"display:block\"></div>").appendTo(_5c4);
var msg=$("<div class=\"datagrid-mask-msg\" style=\"display:block;left:50%\"></div>").html(opts.loadMsg).appendTo(_5c4);
msg.css("marginLeft",-msg.outerWidth()/2);
}
});
},loaded:function(jq){
return jq.each(function(){
$(this).datagrid("getPager").pagination("loaded");
var _5c5=$(this).datagrid("getPanel");
_5c5.children("div.datagrid-mask-msg").remove();
_5c5.children("div.datagrid-mask").remove();
});
},fitColumns:function(jq){
return jq.each(function(){
_4aa(this);
});
},fixColumnSize:function(jq,_5c6){
return jq.each(function(){
_480(this,_5c6);
});
},fixRowHeight:function(jq,_5c7){
return jq.each(function(){
_467(this,_5c7);
});
},freezeRow:function(jq,_5c8){
return jq.each(function(){
_471(this,_5c8);
});
},autoSizeColumn:function(jq,_5c9){
return jq.each(function(){
_4b6(this,_5c9);
});
},loadData:function(jq,data){
return jq.each(function(){
_4d8(this,data);
_554(this);
});
},getData:function(jq){
return $.data(jq[0],"datagrid").data;
},getRows:function(jq){
return $.data(jq[0],"datagrid").data.rows;
},getFooterRows:function(jq){
return $.data(jq[0],"datagrid").footer;
},getRowIndex:function(jq,id){
return _4df(jq[0],id);
},getChecked:function(jq){
return _4e5(jq[0]);
},getSelected:function(jq){
var rows=_4e1(jq[0]);
return rows.length>0?rows[0]:null;
},getSelections:function(jq){
return _4e1(jq[0]);
},clearSelections:function(jq){
return jq.each(function(){
var _5ca=$.data(this,"datagrid").selectedRows;
_5ca.splice(0,_5ca.length);
_4f3(this);
});
},clearChecked:function(jq){
return jq.each(function(){
var _5cb=$.data(this,"datagrid").checkedRows;
_5cb.splice(0,_5cb.length);
_509(this);
});
},selectAll:function(jq){
return jq.each(function(){
_4fe(this);
});
},unselectAll:function(jq){
return jq.each(function(){
_4f3(this);
});
},selectRow:function(jq,_5cc){
return jq.each(function(){
_4ed(this,_5cc);
});
},selectRecord:function(jq,id){
return jq.each(function(){
_4e9(this,id);
});
},unselectRow:function(jq,_5cd){
return jq.each(function(){
_4f7(this,_5cd);
});
},checkRow:function(jq,_5ce){
return jq.each(function(){
_4f4(this,_5ce);
});
},uncheckRow:function(jq,_5cf){
return jq.each(function(){
_4fd(this,_5cf);
});
},checkAll:function(jq){
return jq.each(function(){
_503(this);
});
},uncheckAll:function(jq){
return jq.each(function(){
_509(this);
});
},beginEdit:function(jq,_5d0){
return jq.each(function(){
_51b(this,_5d0);
});
},endEdit:function(jq,_5d1){
return jq.each(function(){
_521(this,_5d1,false);
});
},cancelEdit:function(jq,_5d2){
return jq.each(function(){
_521(this,_5d2,true);
});
},getEditors:function(jq,_5d3){
return _52c(jq[0],_5d3);
},getEditor:function(jq,_5d4){
return _530(jq[0],_5d4);
},refreshRow:function(jq,_5d5){
return jq.each(function(){
var opts=$.data(this,"datagrid").options;
opts.view.refreshRow.call(opts.view,this,_5d5);
});
},validateRow:function(jq,_5d6){
return _520(jq[0],_5d6);
},updateRow:function(jq,_5d7){
return jq.each(function(){
var opts=$.data(this,"datagrid").options;
opts.view.updateRow.call(opts.view,this,_5d7.index,_5d7.row);
});
},appendRow:function(jq,row){
return jq.each(function(){
_551(this,row);
});
},insertRow:function(jq,_5d8){
return jq.each(function(){
_54d(this,_5d8);
});
},deleteRow:function(jq,_5d9){
return jq.each(function(){
_547(this,_5d9);
});
},getChanges:function(jq,_5da){
return _541(jq[0],_5da);
},acceptChanges:function(jq){
return jq.each(function(){
_558(this);
});
},rejectChanges:function(jq){
return jq.each(function(){
_55a(this);
});
},mergeCells:function(jq,_5db){
return jq.each(function(){
_56e(this,_5db);
});
},showColumn:function(jq,_5dc){
return jq.each(function(){
var _5dd=$(this).datagrid("getPanel");
_5dd.find("td[field=\""+_5dc+"\"]").show();
$(this).datagrid("getColumnOption",_5dc).hidden=false;
$(this).datagrid("fitColumns");
});
},hideColumn:function(jq,_5de){
return jq.each(function(){
var _5df=$(this).datagrid("getPanel");
_5df.find("td[field=\""+_5de+"\"]").hide();
$(this).datagrid("getColumnOption",_5de).hidden=true;
$(this).datagrid("fitColumns");
});
}};
$.fn.datagrid.parseOptions=function(_5e0){
var t=$(_5e0);
return $.extend({},$.fn.panel.parseOptions(_5e0),$.parser.parseOptions(_5e0,["url","toolbar","idField","sortName","sortOrder","pagePosition","resizeHandle",{fitColumns:"boolean",autoRowHeight:"boolean",striped:"boolean",nowrap:"boolean"},{rownumbers:"boolean",singleSelect:"boolean",checkOnSelect:"boolean",selectOnCheck:"boolean"},{pagination:"boolean",pageSize:"number",pageNumber:"number"},{remoteSort:"boolean",showHeader:"boolean",showFooter:"boolean"},{scrollbarSize:"number"}]),{pageList:(t.attr("pageList")?eval(t.attr("pageList")):undefined),loadMsg:(t.attr("loadMsg")!=undefined?t.attr("loadMsg"):undefined),rowStyler:(t.attr("rowStyler")?eval(t.attr("rowStyler")):undefined)});
};
var _5e1={render:function(_5e2,_5e3,_5e4){
var _5e5=$.data(_5e2,"datagrid");
var opts=_5e5.options;
var rows=_5e5.data.rows;
var _5e6=$(_5e2).datagrid("getColumnFields",_5e4);
if(_5e4){
if(!(opts.rownumbers||(opts.frozenColumns&&opts.frozenColumns.length))){
return;
}
}
var _5e7=["<table class=\"datagrid-btable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>"];
for(var i=0;i<rows.length;i++){
var cls=(i%2&&opts.striped)?"class=\"datagrid-row datagrid-row-alt\"":"class=\"datagrid-row\"";
var _5e8=opts.rowStyler?opts.rowStyler.call(_5e2,i,rows[i]):"";
var _5e9=_5e8?"style=\""+_5e8+"\"":"";
var _5ea=_5e5.rowIdPrefix+"-"+(_5e4?1:2)+"-"+i;
_5e7.push("<tr id=\""+_5ea+"\" datagrid-row-index=\""+i+"\" "+cls+" "+_5e9+">");
_5e7.push(this.renderRow.call(this,_5e2,_5e6,_5e4,i,rows[i]));
_5e7.push("</tr>");
}
_5e7.push("</tbody></table>");
$(_5e3).html(_5e7.join(""));
},renderFooter:function(_5eb,_5ec,_5ed){
var opts=$.data(_5eb,"datagrid").options;
var rows=$.data(_5eb,"datagrid").footer||[];
var _5ee=$(_5eb).datagrid("getColumnFields",_5ed);
var _5ef=["<table class=\"datagrid-ftable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>"];
for(var i=0;i<rows.length;i++){
_5ef.push("<tr class=\"datagrid-row\" datagrid-row-index=\""+i+"\">");
_5ef.push(this.renderRow.call(this,_5eb,_5ee,_5ed,i,rows[i]));
_5ef.push("</tr>");
}
_5ef.push("</tbody></table>");
$(_5ec).html(_5ef.join(""));
},renderRow:function(_5f0,_5f1,_5f2,_5f3,_5f4){
var opts=$.data(_5f0,"datagrid").options;
var cc=[];
if(_5f2&&opts.rownumbers){
var _5f5=_5f3+1;
if(opts.pagination){
_5f5+=(opts.pageNumber-1)*opts.pageSize;
}
cc.push("<td class=\"datagrid-td-rownumber\"><div class=\"datagrid-cell-rownumber\">"+_5f5+"</div></td>");
}
for(var i=0;i<_5f1.length;i++){
var _5f6=_5f1[i];
var col=$(_5f0).datagrid("getColumnOption",_5f6);
if(col){
var _5f7=_5f4[_5f6];
var _5f8=col.styler?(col.styler(_5f7,_5f4,_5f3)||""):"";
var _5f9=col.hidden?"style=\"display:none;"+_5f8+"\"":(_5f8?"style=\""+_5f8+"\"":"");
cc.push("<td field=\""+_5f6+"\" "+_5f9+">");
if(col.checkbox){
var _5f9="";
}else{
var _5f9="";
if(col.align){
_5f9+="text-align:"+col.align+";";
}
if(!opts.nowrap){
_5f9+="white-space:normal;height:auto;";
}else{
if(opts.autoRowHeight){
_5f9+="height:auto;";
}
}
}
cc.push("<div style=\""+_5f9+"\" ");
if(col.checkbox){
cc.push("class=\"datagrid-cell-check ");
}else{
cc.push("class=\"datagrid-cell "+col.cellClass);
}
cc.push("\">");
if(col.checkbox){
cc.push("<input type=\"checkbox\" name=\""+_5f6+"\" value=\""+(_5f7!=undefined?_5f7:"")+"\"/>");
}else{
if(col.formatter){
cc.push(col.formatter(_5f7,_5f4,_5f3));
}else{
cc.push(_5f7);
}
}
cc.push("</div>");
cc.push("</td>");
}
}
return cc.join("");
},refreshRow:function(_5fa,_5fb){
this.updateRow.call(this,_5fa,_5fb,{});
},updateRow:function(_5fc,_5fd,row){
var opts=$.data(_5fc,"datagrid").options;
var rows=$(_5fc).datagrid("getRows");
$.extend(rows[_5fd],row);
var _5fe=opts.rowStyler?opts.rowStyler.call(_5fc,_5fd,rows[_5fd]):"";
function _5ff(_600){
var _601=$(_5fc).datagrid("getColumnFields",_600);
var tr=opts.finder.getTr(_5fc,_5fd,"body",(_600?1:2));
var _602=tr.find("div.datagrid-cell-check input[type=checkbox]").is(":checked");
tr.html(this.renderRow.call(this,_5fc,_601,_600,_5fd,rows[_5fd]));
tr.attr("style",_5fe||"");
if(_602){
tr.find("div.datagrid-cell-check input[type=checkbox]")._propAttr("checked",true);
}
};
_5ff.call(this,true);
_5ff.call(this,false);
$(_5fc).datagrid("fixRowHeight",_5fd);
},insertRow:function(_603,_604,row){
var _605=$.data(_603,"datagrid");
var opts=_605.options;
var dc=_605.dc;
var data=_605.data;
if(_604==undefined||_604==null){
_604=data.rows.length;
}
if(_604>data.rows.length){
_604=data.rows.length;
}
function _606(_607){
var _608=_607?1:2;
for(var i=data.rows.length-1;i>=_604;i--){
var tr=opts.finder.getTr(_603,i,"body",_608);
tr.attr("datagrid-row-index",i+1);
tr.attr("id",_605.rowIdPrefix+"-"+_608+"-"+(i+1));
if(_607&&opts.rownumbers){
var _609=i+2;
if(opts.pagination){
_609+=(opts.pageNumber-1)*opts.pageSize;
}
tr.find("div.datagrid-cell-rownumber").html(_609);
}
}
};
function _60a(_60b){
var _60c=_60b?1:2;
var _60d=$(_603).datagrid("getColumnFields",_60b);
var _60e=_605.rowIdPrefix+"-"+_60c+"-"+_604;
var tr="<tr id=\""+_60e+"\" class=\"datagrid-row\" datagrid-row-index=\""+_604+"\"></tr>";
if(_604>=data.rows.length){
if(data.rows.length){
opts.finder.getTr(_603,"","last",_60c).after(tr);
}else{
var cc=_60b?dc.body1:dc.body2;
cc.html("<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>"+tr+"</tbody></table>");
}
}else{
opts.finder.getTr(_603,_604+1,"body",_60c).before(tr);
}
};
_606.call(this,true);
_606.call(this,false);
_60a.call(this,true);
_60a.call(this,false);
data.total+=1;
data.rows.splice(_604,0,row);
this.refreshRow.call(this,_603,_604);
},deleteRow:function(_60f,_610){
var _611=$.data(_60f,"datagrid");
var opts=_611.options;
var data=_611.data;
function _612(_613){
var _614=_613?1:2;
for(var i=_610+1;i<data.rows.length;i++){
var tr=opts.finder.getTr(_60f,i,"body",_614);
tr.attr("datagrid-row-index",i-1);
tr.attr("id",_611.rowIdPrefix+"-"+_614+"-"+(i-1));
if(_613&&opts.rownumbers){
var _615=i;
if(opts.pagination){
_615+=(opts.pageNumber-1)*opts.pageSize;
}
tr.find("div.datagrid-cell-rownumber").html(_615);
}
}
};
opts.finder.getTr(_60f,_610).remove();
_612.call(this,true);
_612.call(this,false);
data.total-=1;
data.rows.splice(_610,1);
},onBeforeRender:function(_616,rows){
},onAfterRender:function(_617){
var opts=$.data(_617,"datagrid").options;
if(opts.showFooter){
var _618=$(_617).datagrid("getPanel").find("div.datagrid-footer");
_618.find("div.datagrid-cell-rownumber,div.datagrid-cell-check").css("visibility","hidden");
}
}};
$.fn.datagrid.defaults=$.extend({},$.fn.panel.defaults,{frozenColumns:undefined,columns:undefined,fitColumns:false,resizeHandle:"right",autoRowHeight:true,toolbar:null,striped:false,method:"post",nowrap:true,idField:null,url:null,loadMsg:"Processing, please wait ...",rownumbers:false,singleSelect:false,selectOnCheck:true,checkOnSelect:true,pagination:false,pagePosition:"bottom",pageNumber:1,pageSize:10,pageList:[10,20,30,40,50],queryParams:{},sortName:null,sortOrder:"asc",remoteSort:true,showHeader:true,showFooter:false,scrollbarSize:18,rowStyler:function(_619,_61a){
},loader:function(_61b,_61c,_61d){
var opts=$(this).datagrid("options");
if(!opts.url){
return false;
}
$.ajax({type:opts.method,url:opts.url,data:_61b,dataType:"json",success:function(data){
_61c(data);
},error:function(){
_61d.apply(this,arguments);
}});
},loadFilter:function(data){
if(typeof data.length=="number"&&typeof data.splice=="function"){
return {total:data.length,rows:data};
}else{
return data;
}
},editors:_576,finder:{getTr:function(_61e,_61f,type,_620){
type=type||"body";
_620=_620||0;
var _621=$.data(_61e,"datagrid");
var dc=_621.dc;
var opts=_621.options;
if(_620==0){
var tr1=opts.finder.getTr(_61e,_61f,type,1);
var tr2=opts.finder.getTr(_61e,_61f,type,2);
return tr1.add(tr2);
}else{
if(type=="body"){
var tr=$("#"+_621.rowIdPrefix+"-"+_620+"-"+_61f);
if(!tr.length){
tr=(_620==1?dc.body1:dc.body2).find(">table>tbody>tr[datagrid-row-index="+_61f+"]");
}
return tr;
}else{
if(type=="footer"){
return (_620==1?dc.footer1:dc.footer2).find(">table>tbody>tr[datagrid-row-index="+_61f+"]");
}else{
if(type=="selected"){
return (_620==1?dc.body1:dc.body2).find(">table>tbody>tr.datagrid-row-selected");
}else{
if(type=="last"){
return (_620==1?dc.body1:dc.body2).find(">table>tbody>tr[datagrid-row-index]:last");
}else{
if(type=="allbody"){
return (_620==1?dc.body1:dc.body2).find(">table>tbody>tr[datagrid-row-index]");
}else{
if(type=="allfooter"){
return (_620==1?dc.footer1:dc.footer2).find(">table>tbody>tr[datagrid-row-index]");
}
}
}
}
}
}
}
},getRow:function(_622,_623){
return $.data(_622,"datagrid").data.rows[_623];
}},view:_5e1,onBeforeLoad:function(_624){
},onLoadSuccess:function(){
},onLoadError:function(){
},onClickRow:function(_625,_626){
},onDblClickRow:function(_627,_628){
},onClickCell:function(_629,_62a,_62b){
},onDblClickCell:function(_62c,_62d,_62e){
},onSortColumn:function(sort,_62f){
},onResizeColumn:function(_630,_631){
},onSelect:function(_632,_633){
},onUnselect:function(_634,_635){
},onSelectAll:function(rows){
},onUnselectAll:function(rows){
},onCheck:function(_636,_637){
},onUncheck:function(_638,_639){
},onCheckAll:function(rows){
},onUncheckAll:function(rows){
},onBeforeEdit:function(_63a,_63b){
},onAfterEdit:function(_63c,_63d,_63e){
},onCancelEdit:function(_63f,_640){
},onHeaderContextMenu:function(e,_641){
},onRowContextMenu:function(e,_642,_643){
}});
})(jQuery);
(function($){
var _644;
function _645(_646){
var _647=$.data(_646,"propertygrid");
var opts=$.data(_646,"propertygrid").options;
$(_646).datagrid($.extend({},opts,{cls:"propertygrid",view:(opts.showGroup?_648:undefined),onClickRow:function(_649,row){
if(_644!=this){
_64a(_644);
_644=this;
}
if(opts.editIndex!=_649&&row.editor){
var col=$(this).datagrid("getColumnOption","value");
col.editor=row.editor;
_64a(_644);
$(this).datagrid("beginEdit",_649);
$(this).datagrid("getEditors",_649)[0].target.focus();
opts.editIndex=_649;
}
opts.onClickRow.call(_646,_649,row);
},loadFilter:function(data){
_64a(this);
return opts.loadFilter.call(this,data);
},onLoadSuccess:function(data){
$(_646).datagrid("getPanel").find("div.datagrid-group").css("border","");
opts.onLoadSuccess.call(_646,data);
}}));
$(document).unbind(".propertygrid").bind("mousedown.propertygrid",function(e){
var p=$(e.target).closest("div.propertygrid,div.combo-panel");
if(p.length){
return;
}
_64a(_644);
_644=undefined;
});
};
function _64a(_64b){
var t=$(_64b);
if(!t.length){
return;
}
var opts=$.data(_64b,"propertygrid").options;
var _64c=opts.editIndex;
if(_64c==undefined){
return;
}
var ed=t.datagrid("getEditors",_64c)[0];
if(ed){
ed.target.blur();
if(t.datagrid("validateRow",_64c)){
t.datagrid("endEdit",_64c);
}else{
t.datagrid("cancelEdit",_64c);
}
}
opts.editIndex=undefined;
};
$.fn.propertygrid=function(_64d,_64e){
if(typeof _64d=="string"){
var _64f=$.fn.propertygrid.methods[_64d];
if(_64f){
return _64f(this,_64e);
}else{
return this.datagrid(_64d,_64e);
}
}
_64d=_64d||{};
return this.each(function(){
var _650=$.data(this,"propertygrid");
if(_650){
$.extend(_650.options,_64d);
}else{
var opts=$.extend({},$.fn.propertygrid.defaults,$.fn.propertygrid.parseOptions(this),_64d);
opts.frozenColumns=$.extend(true,[],opts.frozenColumns);
opts.columns=$.extend(true,[],opts.columns);
$.data(this,"propertygrid",{options:opts});
}
_645(this);
});
};
$.fn.propertygrid.methods={options:function(jq){
return $.data(jq[0],"propertygrid").options;
}};
$.fn.propertygrid.parseOptions=function(_651){
var t=$(_651);
return $.extend({},$.fn.datagrid.parseOptions(_651),$.parser.parseOptions(_651,[{showGroup:"boolean"}]));
};
var _648=$.extend({},$.fn.datagrid.defaults.view,{render:function(_652,_653,_654){
var _655=$.data(_652,"datagrid");
var opts=_655.options;
var rows=_655.data.rows;
var _656=$(_652).datagrid("getColumnFields",_654);
var _657=[];
var _658=0;
var _659=this.groups;
for(var i=0;i<_659.length;i++){
var _65a=_659[i];
_657.push("<div class=\"datagrid-group\" group-index="+i+" style=\"height:25px;overflow:hidden;border-bottom:1px solid #ccc;\">");
_657.push("<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" style=\"height:100%\"><tbody>");
_657.push("<tr>");
_657.push("<td style=\"border:0;\">");
if(!_654){
_657.push("<span style=\"color:#666;font-weight:bold;\">");
_657.push(opts.groupFormatter.call(_652,_65a.fvalue,_65a.rows));
_657.push("</span>");
}
_657.push("</td>");
_657.push("</tr>");
_657.push("</tbody></table>");
_657.push("</div>");
_657.push("<table class=\"datagrid-btable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>");
for(var j=0;j<_65a.rows.length;j++){
var cls=(_658%2&&opts.striped)?"class=\"datagrid-row datagrid-row-alt\"":"class=\"datagrid-row\"";
var _65b=opts.rowStyler?opts.rowStyler.call(_652,_658,_65a.rows[j]):"";
var _65c=_65b?"style=\""+_65b+"\"":"";
var _65d=_655.rowIdPrefix+"-"+(_654?1:2)+"-"+_658;
_657.push("<tr id=\""+_65d+"\" datagrid-row-index=\""+_658+"\" "+cls+" "+_65c+">");
_657.push(this.renderRow.call(this,_652,_656,_654,_658,_65a.rows[j]));
_657.push("</tr>");
_658++;
}
_657.push("</tbody></table>");
}
$(_653).html(_657.join(""));
},onAfterRender:function(_65e){
var opts=$.data(_65e,"datagrid").options;
var dc=$.data(_65e,"datagrid").dc;
var view=dc.view;
var _65f=dc.view1;
var _660=dc.view2;
$.fn.datagrid.defaults.view.onAfterRender.call(this,_65e);
if(opts.rownumbers||opts.frozenColumns.length){
var _661=_65f.find("div.datagrid-group");
}else{
var _661=_660.find("div.datagrid-group");
}
$("<td style=\"border:0\"><div class=\"datagrid-row-expander datagrid-row-collapse\" style=\"width:25px;height:16px;cursor:pointer\"></div></td>").insertBefore(_661.find("td"));
view.find("div.datagrid-group").each(function(){
var _662=$(this).attr("group-index");
$(this).find("div.datagrid-row-expander").bind("click",{groupIndex:_662},function(e){
if($(this).hasClass("datagrid-row-collapse")){
$(_65e).datagrid("collapseGroup",e.data.groupIndex);
}else{
$(_65e).datagrid("expandGroup",e.data.groupIndex);
}
});
});
},onBeforeRender:function(_663,rows){
var opts=$.data(_663,"datagrid").options;
var _664=[];
for(var i=0;i<rows.length;i++){
var row=rows[i];
var _665=_666(row[opts.groupField]);
if(!_665){
_665={fvalue:row[opts.groupField],rows:[row],startRow:i};
_664.push(_665);
}else{
_665.rows.push(row);
}
}
function _666(_667){
for(var i=0;i<_664.length;i++){
var _668=_664[i];
if(_668.fvalue==_667){
return _668;
}
}
return null;
};
this.groups=_664;
var _669=[];
for(var i=0;i<_664.length;i++){
var _665=_664[i];
for(var j=0;j<_665.rows.length;j++){
_669.push(_665.rows[j]);
}
}
$.data(_663,"datagrid").data.rows=_669;
}});
$.extend($.fn.datagrid.methods,{expandGroup:function(jq,_66a){
return jq.each(function(){
var view=$.data(this,"datagrid").dc.view;
if(_66a!=undefined){
var _66b=view.find("div.datagrid-group[group-index=\""+_66a+"\"]");
}else{
var _66b=view.find("div.datagrid-group");
}
var _66c=_66b.find("div.datagrid-row-expander");
if(_66c.hasClass("datagrid-row-expand")){
_66c.removeClass("datagrid-row-expand").addClass("datagrid-row-collapse");
_66b.next("table").show();
}
$(this).datagrid("fixRowHeight");
});
},collapseGroup:function(jq,_66d){
return jq.each(function(){
var view=$.data(this,"datagrid").dc.view;
if(_66d!=undefined){
var _66e=view.find("div.datagrid-group[group-index=\""+_66d+"\"]");
}else{
var _66e=view.find("div.datagrid-group");
}
var _66f=_66e.find("div.datagrid-row-expander");
if(_66f.hasClass("datagrid-row-collapse")){
_66f.removeClass("datagrid-row-collapse").addClass("datagrid-row-expand");
_66e.next("table").hide();
}
$(this).datagrid("fixRowHeight");
});
}});
$.fn.propertygrid.defaults=$.extend({},$.fn.datagrid.defaults,{singleSelect:true,remoteSort:false,fitColumns:true,loadMsg:"",frozenColumns:[[{field:"f",width:16,resizable:false}]],columns:[[{field:"name",title:"Name",width:100,sortable:true},{field:"value",title:"Value",width:100,resizable:false}]],showGroup:false,groupField:"group",groupFormatter:function(_670,rows){
return _670;
}});
})(jQuery);
(function($){
function _671(a,o){
for(var i=0,len=a.length;i<len;i++){
if(a[i]==o){
return i;
}
}
return -1;
};
function _672(a,o){
var _673=_671(a,o);
if(_673!=-1){
a.splice(_673,1);
}
};
function _674(_675){
var opts=$.data(_675,"treegrid").options;
$(_675).datagrid($.extend({},opts,{url:null,loader:function(){
return false;
},onLoadSuccess:function(){
},onResizeColumn:function(_676,_677){
_68c(_675);
opts.onResizeColumn.call(_675,_676,_677);
},onSortColumn:function(sort,_678){
opts.sortName=sort;
opts.sortOrder=_678;
if(opts.remoteSort){
_68b(_675);
}else{
var data=$(_675).treegrid("getData");
_6a1(_675,0,data);
}
opts.onSortColumn.call(_675,sort,_678);
},onBeforeEdit:function(_679,row){
if(opts.onBeforeEdit.call(_675,row)==false){
return false;
}
},onAfterEdit:function(_67a,row,_67b){
opts.onAfterEdit.call(_675,row,_67b);
},onCancelEdit:function(_67c,row){
opts.onCancelEdit.call(_675,row);
},onSelect:function(_67d){
opts.onSelect.call(_675,find(_675,_67d));
},onUnselect:function(_67e){
opts.onUnselect.call(_675,find(_675,_67e));
},onSelectAll:function(){
opts.onSelectAll.call(_675,$.data(_675,"treegrid").data);
},onUnselectAll:function(){
opts.onUnselectAll.call(_675,$.data(_675,"treegrid").data);
},onCheck:function(_67f){
opts.onCheck.call(_675,find(_675,_67f));
},onUncheck:function(_680){
opts.onUncheck.call(_675,find(_675,_680));
},onCheckAll:function(){
opts.onCheckAll.call(_675,$.data(_675,"treegrid").data);
},onUncheckAll:function(){
opts.onUncheckAll.call(_675,$.data(_675,"treegrid").data);
},onClickRow:function(_681){
opts.onClickRow.call(_675,find(_675,_681));
},onDblClickRow:function(_682){
opts.onDblClickRow.call(_675,find(_675,_682));
},onClickCell:function(_683,_684){
opts.onClickCell.call(_675,_684,find(_675,_683));
},onDblClickCell:function(_685,_686){
opts.onDblClickCell.call(_675,_686,find(_675,_685));
},onRowContextMenu:function(e,_687){
opts.onContextMenu.call(_675,e,find(_675,_687));
}}));
if(opts.pagination){
var _688=$(_675).datagrid("getPager");
_688.pagination({pageNumber:opts.pageNumber,pageSize:opts.pageSize,pageList:opts.pageList,onSelectPage:function(_689,_68a){
opts.pageNumber=_689;
opts.pageSize=_68a;
_68b(_675);
}});
opts.pageSize=_688.pagination("options").pageSize;
}
};
function _68c(_68d,_68e){
var opts=$.data(_68d,"datagrid").options;
var dc=$.data(_68d,"datagrid").dc;
if(!dc.body1.is(":empty")&&(!opts.nowrap||opts.autoRowHeight)){
if(_68e!=undefined){
var _68f=_690(_68d,_68e);
for(var i=0;i<_68f.length;i++){
_691(_68f[i][opts.idField]);
}
}
}
$(_68d).datagrid("fixRowHeight",_68e);
function _691(_692){
var tr1=opts.finder.getTr(_68d,_692,"body",1);
var tr2=opts.finder.getTr(_68d,_692,"body",2);
tr1.css("height","");
tr2.css("height","");
var _693=Math.max(tr1.height(),tr2.height());
tr1.css("height",_693);
tr2.css("height",_693);
};
};
function _694(_695){
var dc=$.data(_695,"datagrid").dc;
var opts=$.data(_695,"treegrid").options;
if(!opts.rownumbers){
return;
}
dc.body1.find("div.datagrid-cell-rownumber").each(function(i){
$(this).html(i+1);
});
};
function _696(_697){
var dc=$.data(_697,"datagrid").dc;
var body=dc.body1.add(dc.body2);
var _698=($.data(body[0],"events")||$._data(body[0],"events")).click[0].handler;
dc.body1.add(dc.body2).bind("mouseover",function(e){
var tt=$(e.target);
var tr=tt.closest("tr.datagrid-row");
if(!tr.length){
return;
}
if(tt.hasClass("tree-hit")){
tt.hasClass("tree-expanded")?tt.addClass("tree-expanded-hover"):tt.addClass("tree-collapsed-hover");
}
e.stopPropagation();
}).bind("mouseout",function(e){
var tt=$(e.target);
var tr=tt.closest("tr.datagrid-row");
if(!tr.length){
return;
}
if(tt.hasClass("tree-hit")){
tt.hasClass("tree-expanded")?tt.removeClass("tree-expanded-hover"):tt.removeClass("tree-collapsed-hover");
}
e.stopPropagation();
}).unbind("click").bind("click",function(e){
var tt=$(e.target);
var tr=tt.closest("tr.datagrid-row");
if(!tr.length){
return;
}
if(tt.hasClass("tree-hit")){
_699(_697,tr.attr("node-id"));
}else{
_698(e);
}
e.stopPropagation();
});
};
function _69a(_69b,_69c){
var opts=$.data(_69b,"treegrid").options;
var tr1=opts.finder.getTr(_69b,_69c,"body",1);
var tr2=opts.finder.getTr(_69b,_69c,"body",2);
var _69d=$(_69b).datagrid("getColumnFields",true).length+(opts.rownumbers?1:0);
var _69e=$(_69b).datagrid("getColumnFields",false).length;
_69f(tr1,_69d);
_69f(tr2,_69e);
function _69f(tr,_6a0){
$("<tr class=\"treegrid-tr-tree\">"+"<td style=\"border:0px\" colspan=\""+_6a0+"\">"+"<div></div>"+"</td>"+"</tr>").insertAfter(tr);
};
};
function _6a1(_6a2,_6a3,data,_6a4){
var opts=$.data(_6a2,"treegrid").options;
var dc=$.data(_6a2,"datagrid").dc;
data=opts.loadFilter.call(_6a2,data,_6a3);
var node=find(_6a2,_6a3);
if(node){
var _6a5=opts.finder.getTr(_6a2,_6a3,"body",1);
var _6a6=opts.finder.getTr(_6a2,_6a3,"body",2);
var cc1=_6a5.next("tr.treegrid-tr-tree").children("td").children("div");
var cc2=_6a6.next("tr.treegrid-tr-tree").children("td").children("div");
}else{
var cc1=dc.body1;
var cc2=dc.body2;
}
if(!_6a4){
$.data(_6a2,"treegrid").data=[];
cc1.empty();
cc2.empty();
}
if(opts.view.onBeforeRender){
opts.view.onBeforeRender.call(opts.view,_6a2,_6a3,data);
}
opts.view.render.call(opts.view,_6a2,cc1,true);
opts.view.render.call(opts.view,_6a2,cc2,false);
if(opts.showFooter){
opts.view.renderFooter.call(opts.view,_6a2,dc.footer1,true);
opts.view.renderFooter.call(opts.view,_6a2,dc.footer2,false);
}
if(opts.view.onAfterRender){
opts.view.onAfterRender.call(opts.view,_6a2);
}
opts.onLoadSuccess.call(_6a2,node,data);
if(!_6a3&&opts.pagination){
var _6a7=$.data(_6a2,"treegrid").total;
var _6a8=$(_6a2).datagrid("getPager");
if(_6a8.pagination("options").total!=_6a7){
_6a8.pagination({total:_6a7});
}
}
_68c(_6a2);
_694(_6a2);
$(_6a2).treegrid("autoSizeColumn");
};
function _68b(_6a9,_6aa,_6ab,_6ac,_6ad){
var opts=$.data(_6a9,"treegrid").options;
var body=$(_6a9).datagrid("getPanel").find("div.datagrid-body");
if(_6ab){
opts.queryParams=_6ab;
}
var _6ae=$.extend({},opts.queryParams);
if(opts.pagination){
$.extend(_6ae,{page:opts.pageNumber,rows:opts.pageSize});
}
if(opts.sortName){
$.extend(_6ae,{sort:opts.sortName,order:opts.sortOrder});
}
var row=find(_6a9,_6aa);
if(opts.onBeforeLoad.call(_6a9,row,_6ae)==false){
return;
}
var _6af=body.find("tr[node-id="+_6aa+"] span.tree-folder");
_6af.addClass("tree-loading");
$(_6a9).treegrid("loading");
var _6b0=opts.loader.call(_6a9,_6ae,function(data){
_6af.removeClass("tree-loading");
$(_6a9).treegrid("loaded");
_6a1(_6a9,_6aa,data,_6ac);
if(_6ad){
_6ad();
}
},function(){
_6af.removeClass("tree-loading");
$(_6a9).treegrid("loaded");
opts.onLoadError.apply(_6a9,arguments);
if(_6ad){
_6ad();
}
});
if(_6b0==false){
_6af.removeClass("tree-loading");
$(_6a9).treegrid("loaded");
}
};
function _6b1(_6b2){
var rows=_6b3(_6b2);
if(rows.length){
return rows[0];
}else{
return null;
}
};
function _6b3(_6b4){
return $.data(_6b4,"treegrid").data;
};
function _6b5(_6b6,_6b7){
var row=find(_6b6,_6b7);
if(row._parentId){
return find(_6b6,row._parentId);
}else{
return null;
}
};
function _690(_6b8,_6b9){
var opts=$.data(_6b8,"treegrid").options;
var body=$(_6b8).datagrid("getPanel").find("div.datagrid-view2 div.datagrid-body");
var _6ba=[];
if(_6b9){
_6bb(_6b9);
}else{
var _6bc=_6b3(_6b8);
for(var i=0;i<_6bc.length;i++){
_6ba.push(_6bc[i]);
_6bb(_6bc[i][opts.idField]);
}
}
function _6bb(_6bd){
var _6be=find(_6b8,_6bd);
if(_6be&&_6be.children){
for(var i=0,len=_6be.children.length;i<len;i++){
var _6bf=_6be.children[i];
_6ba.push(_6bf);
_6bb(_6bf[opts.idField]);
}
}
};
return _6ba;
};
function _6c0(_6c1){
var rows=_6c2(_6c1);
if(rows.length){
return rows[0];
}else{
return null;
}
};
function _6c2(_6c3){
var rows=[];
var _6c4=$(_6c3).datagrid("getPanel");
_6c4.find("div.datagrid-view2 div.datagrid-body tr.datagrid-row-selected").each(function(){
var id=$(this).attr("node-id");
rows.push(find(_6c3,id));
});
return rows;
};
function _6c5(_6c6,_6c7){
if(!_6c7){
return 0;
}
var opts=$.data(_6c6,"treegrid").options;
var view=$(_6c6).datagrid("getPanel").children("div.datagrid-view");
var node=view.find("div.datagrid-body tr[node-id="+_6c7+"]").children("td[field="+opts.treeField+"]");
return node.find("span.tree-indent,span.tree-hit").length;
};
function find(_6c8,_6c9){
var opts=$.data(_6c8,"treegrid").options;
var data=$.data(_6c8,"treegrid").data;
var cc=[data];
while(cc.length){
var c=cc.shift();
for(var i=0;i<c.length;i++){
var node=c[i];
if(node[opts.idField]==_6c9){
return node;
}else{
if(node["children"]){
cc.push(node["children"]);
}
}
}
}
return null;
};
function _6ca(_6cb,_6cc){
var opts=$.data(_6cb,"treegrid").options;
var row=find(_6cb,_6cc);
var tr=opts.finder.getTr(_6cb,_6cc);
var hit=tr.find("span.tree-hit");
if(hit.length==0){
return;
}
if(hit.hasClass("tree-collapsed")){
return;
}
if(opts.onBeforeCollapse.call(_6cb,row)==false){
return;
}
hit.removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed");
hit.next().removeClass("tree-folder-open");
row.state="closed";
tr=tr.next("tr.treegrid-tr-tree");
var cc=tr.children("td").children("div");
if(opts.animate){
cc.slideUp("normal",function(){
$(_6cb).treegrid("autoSizeColumn");
_68c(_6cb,_6cc);
opts.onCollapse.call(_6cb,row);
});
}else{
cc.hide();
$(_6cb).treegrid("autoSizeColumn");
_68c(_6cb,_6cc);
opts.onCollapse.call(_6cb,row);
}
};
function _6cd(_6ce,_6cf){
var opts=$.data(_6ce,"treegrid").options;
var tr=opts.finder.getTr(_6ce,_6cf);
var hit=tr.find("span.tree-hit");
var row=find(_6ce,_6cf);
if(hit.length==0){
return;
}
if(hit.hasClass("tree-expanded")){
return;
}
if(opts.onBeforeExpand.call(_6ce,row)==false){
return;
}
hit.removeClass("tree-collapsed tree-collapsed-hover").addClass("tree-expanded");
hit.next().addClass("tree-folder-open");
var _6d0=tr.next("tr.treegrid-tr-tree");
if(_6d0.length){
var cc=_6d0.children("td").children("div");
_6d1(cc);
}else{
_69a(_6ce,row[opts.idField]);
var _6d0=tr.next("tr.treegrid-tr-tree");
var cc=_6d0.children("td").children("div");
cc.hide();
_68b(_6ce,row[opts.idField],{id:row[opts.idField]},true,function(){
if(cc.is(":empty")){
_6d0.remove();
}else{
_6d1(cc);
}
});
}
function _6d1(cc){
row.state="open";
if(opts.animate){
cc.slideDown("normal",function(){
$(_6ce).treegrid("autoSizeColumn");
_68c(_6ce,_6cf);
opts.onExpand.call(_6ce,row);
});
}else{
cc.show();
$(_6ce).treegrid("autoSizeColumn");
_68c(_6ce,_6cf);
opts.onExpand.call(_6ce,row);
}
};
};
function _699(_6d2,_6d3){
var opts=$.data(_6d2,"treegrid").options;
var tr=opts.finder.getTr(_6d2,_6d3);
var hit=tr.find("span.tree-hit");
if(hit.hasClass("tree-expanded")){
_6ca(_6d2,_6d3);
}else{
_6cd(_6d2,_6d3);
}
};
function _6d4(_6d5,_6d6){
var opts=$.data(_6d5,"treegrid").options;
var _6d7=_690(_6d5,_6d6);
if(_6d6){
_6d7.unshift(find(_6d5,_6d6));
}
for(var i=0;i<_6d7.length;i++){
_6ca(_6d5,_6d7[i][opts.idField]);
}
};
function _6d8(_6d9,_6da){
var opts=$.data(_6d9,"treegrid").options;
var _6db=_690(_6d9,_6da);
if(_6da){
_6db.unshift(find(_6d9,_6da));
}
for(var i=0;i<_6db.length;i++){
_6cd(_6d9,_6db[i][opts.idField]);
}
};
function _6dc(_6dd,_6de){
var opts=$.data(_6dd,"treegrid").options;
var ids=[];
var p=_6b5(_6dd,_6de);
while(p){
var id=p[opts.idField];
ids.unshift(id);
p=_6b5(_6dd,id);
}
for(var i=0;i<ids.length;i++){
_6cd(_6dd,ids[i]);
}
};
function _6df(_6e0,_6e1){
var opts=$.data(_6e0,"treegrid").options;
if(_6e1.parent){
var tr=opts.finder.getTr(_6e0,_6e1.parent);
if(tr.next("tr.treegrid-tr-tree").length==0){
_69a(_6e0,_6e1.parent);
}
var cell=tr.children("td[field="+opts.treeField+"]").children("div.datagrid-cell");
var _6e2=cell.children("span.tree-icon");
if(_6e2.hasClass("tree-file")){
_6e2.removeClass("tree-file").addClass("tree-folder");
var hit=$("<span class=\"tree-hit tree-expanded\"></span>").insertBefore(_6e2);
if(hit.prev().length){
hit.prev().remove();
}
}
}
_6a1(_6e0,_6e1.parent,_6e1.data,true);
};
function _6e3(_6e4,_6e5){
var ref=_6e5.before||_6e5.after;
var opts=$.data(_6e4,"treegrid").options;
var _6e6=_6b5(_6e4,ref);
_6df(_6e4,{parent:(_6e6?_6e6[opts.idField]:null),data:[_6e5.data]});
_6e7(true);
_6e7(false);
_694(_6e4);
function _6e7(_6e8){
var _6e9=_6e8?1:2;
var tr=opts.finder.getTr(_6e4,_6e5.data[opts.idField],"body",_6e9);
var _6ea=tr.closest("table.datagrid-btable");
tr=tr.parent().children();
var dest=opts.finder.getTr(_6e4,ref,"body",_6e9);
if(_6e5.before){
tr.insertBefore(dest);
}else{
var sub=dest.next("tr.treegrid-tr-tree");
tr.insertAfter(sub.length?sub:dest);
}
_6ea.remove();
};
};
function _6eb(_6ec,_6ed){
var opts=$.data(_6ec,"treegrid").options;
var tr=opts.finder.getTr(_6ec,_6ed);
tr.next("tr.treegrid-tr-tree").remove();
tr.remove();
var _6ee=del(_6ed);
if(_6ee){
if(_6ee.children.length==0){
tr=opts.finder.getTr(_6ec,_6ee[opts.idField]);
tr.next("tr.treegrid-tr-tree").remove();
var cell=tr.children("td[field="+opts.treeField+"]").children("div.datagrid-cell");
cell.find(".tree-icon").removeClass("tree-folder").addClass("tree-file");
cell.find(".tree-hit").remove();
$("<span class=\"tree-indent\"></span>").prependTo(cell);
}
}
_694(_6ec);
function del(id){
var cc;
var _6ef=_6b5(_6ec,_6ed);
if(_6ef){
cc=_6ef.children;
}else{
cc=$(_6ec).treegrid("getData");
}
for(var i=0;i<cc.length;i++){
if(cc[i][opts.idField]==id){
cc.splice(i,1);
break;
}
}
return _6ef;
};
};
$.fn.treegrid=function(_6f0,_6f1){
if(typeof _6f0=="string"){
var _6f2=$.fn.treegrid.methods[_6f0];
if(_6f2){
return _6f2(this,_6f1);
}else{
return this.datagrid(_6f0,_6f1);
}
}
_6f0=_6f0||{};
return this.each(function(){
var _6f3=$.data(this,"treegrid");
if(_6f3){
$.extend(_6f3.options,_6f0);
}else{
$.data(this,"treegrid",{options:$.extend({},$.fn.treegrid.defaults,$.fn.treegrid.parseOptions(this),_6f0),data:[]});
}
_674(this);
_68b(this);
_696(this);
});
};
$.fn.treegrid.methods={options:function(jq){
return $.data(jq[0],"treegrid").options;
},resize:function(jq,_6f4){
return jq.each(function(){
$(this).datagrid("resize",_6f4);
});
},fixRowHeight:function(jq,_6f5){
return jq.each(function(){
_68c(this,_6f5);
});
},loadData:function(jq,data){
return jq.each(function(){
_6a1(this,null,data);
});
},reload:function(jq,id){
return jq.each(function(){
if(id){
var node=$(this).treegrid("find",id);
if(node.children){
node.children.splice(0,node.children.length);
}
var body=$(this).datagrid("getPanel").find("div.datagrid-body");
var tr=body.find("tr[node-id="+id+"]");
tr.next("tr.treegrid-tr-tree").remove();
var hit=tr.find("span.tree-hit");
hit.removeClass("tree-expanded tree-expanded-hover").addClass("tree-collapsed");
_6cd(this,id);
}else{
_68b(this,null,{});
}
});
},reloadFooter:function(jq,_6f6){
return jq.each(function(){
var opts=$.data(this,"treegrid").options;
var dc=$.data(this,"datagrid").dc;
if(_6f6){
$.data(this,"treegrid").footer=_6f6;
}
if(opts.showFooter){
opts.view.renderFooter.call(opts.view,this,dc.footer1,true);
opts.view.renderFooter.call(opts.view,this,dc.footer2,false);
if(opts.view.onAfterRender){
opts.view.onAfterRender.call(opts.view,this);
}
$(this).treegrid("fixRowHeight");
}
});
},getData:function(jq){
return $.data(jq[0],"treegrid").data;
},getFooterRows:function(jq){
return $.data(jq[0],"treegrid").footer;
},getRoot:function(jq){
return _6b1(jq[0]);
},getRoots:function(jq){
return _6b3(jq[0]);
},getParent:function(jq,id){
return _6b5(jq[0],id);
},getChildren:function(jq,id){
return _690(jq[0],id);
},getSelected:function(jq){
return _6c0(jq[0]);
},getSelections:function(jq){
return _6c2(jq[0]);
},getLevel:function(jq,id){
return _6c5(jq[0],id);
},find:function(jq,id){
return find(jq[0],id);
},isLeaf:function(jq,id){
var opts=$.data(jq[0],"treegrid").options;
var tr=opts.finder.getTr(jq[0],id);
var hit=tr.find("span.tree-hit");
return hit.length==0;
},select:function(jq,id){
return jq.each(function(){
$(this).datagrid("selectRow",id);
});
},unselect:function(jq,id){
return jq.each(function(){
$(this).datagrid("unselectRow",id);
});
},collapse:function(jq,id){
return jq.each(function(){
_6ca(this,id);
});
},expand:function(jq,id){
return jq.each(function(){
_6cd(this,id);
});
},toggle:function(jq,id){
return jq.each(function(){
_699(this,id);
});
},collapseAll:function(jq,id){
return jq.each(function(){
_6d4(this,id);
});
},expandAll:function(jq,id){
return jq.each(function(){
_6d8(this,id);
});
},expandTo:function(jq,id){
return jq.each(function(){
_6dc(this,id);
});
},append:function(jq,_6f7){
return jq.each(function(){
_6df(this,_6f7);
});
},insert:function(jq,_6f8){
return jq.each(function(){
_6e3(this,_6f8);
});
},remove:function(jq,id){
return jq.each(function(){
_6eb(this,id);
});
},pop:function(jq,id){
var row=jq.treegrid("find",id);
jq.treegrid("remove",id);
return row;
},refresh:function(jq,id){
return jq.each(function(){
var opts=$.data(this,"treegrid").options;
opts.view.refreshRow.call(opts.view,this,id);
});
},update:function(jq,_6f9){
return jq.each(function(){
var opts=$.data(this,"treegrid").options;
opts.view.updateRow.call(opts.view,this,_6f9.id,_6f9.row);
});
},beginEdit:function(jq,id){
return jq.each(function(){
$(this).datagrid("beginEdit",id);
$(this).treegrid("fixRowHeight",id);
});
},endEdit:function(jq,id){
return jq.each(function(){
$(this).datagrid("endEdit",id);
});
},cancelEdit:function(jq,id){
return jq.each(function(){
$(this).datagrid("cancelEdit",id);
});
}};
$.fn.treegrid.parseOptions=function(_6fa){
return $.extend({},$.fn.datagrid.parseOptions(_6fa),$.parser.parseOptions(_6fa,["treeField",{animate:"boolean"}]));
};
var _6fb=$.extend({},$.fn.datagrid.defaults.view,{render:function(_6fc,_6fd,_6fe){
var opts=$.data(_6fc,"treegrid").options;
var _6ff=$(_6fc).datagrid("getColumnFields",_6fe);
var _700=$.data(_6fc,"datagrid").rowIdPrefix;
if(_6fe){
if(!(opts.rownumbers||(opts.frozenColumns&&opts.frozenColumns.length))){
return;
}
}
var view=this;
var _701=_702(_6fe,this.treeLevel,this.treeNodes);
$(_6fd).append(_701.join(""));
function _702(_703,_704,_705){
var _706=["<table class=\"datagrid-btable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>"];
for(var i=0;i<_705.length;i++){
var row=_705[i];
if(row.state!="open"&&row.state!="closed"){
row.state="open";
}
var _707=opts.rowStyler?opts.rowStyler.call(_6fc,row):"";
var _708=_707?"style=\""+_707+"\"":"";
var _709=_700+"-"+(_703?1:2)+"-"+row[opts.idField];
_706.push("<tr id=\""+_709+"\" class=\"datagrid-row\" node-id="+row[opts.idField]+" "+_708+">");
_706=_706.concat(view.renderRow.call(view,_6fc,_6ff,_703,_704,row));
_706.push("</tr>");
if(row.children&&row.children.length){
var tt=_702(_703,_704+1,row.children);
var v=row.state=="closed"?"none":"block";
_706.push("<tr class=\"treegrid-tr-tree\"><td style=\"border:0px\" colspan="+(_6ff.length+(opts.rownumbers?1:0))+"><div style=\"display:"+v+"\">");
_706=_706.concat(tt);
_706.push("</div></td></tr>");
}
}
_706.push("</tbody></table>");
return _706;
};
},renderFooter:function(_70a,_70b,_70c){
var opts=$.data(_70a,"treegrid").options;
var rows=$.data(_70a,"treegrid").footer||[];
var _70d=$(_70a).datagrid("getColumnFields",_70c);
var _70e=["<table class=\"datagrid-ftable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>"];
for(var i=0;i<rows.length;i++){
var row=rows[i];
row[opts.idField]=row[opts.idField]||("foot-row-id"+i);
_70e.push("<tr class=\"datagrid-row\" node-id="+row[opts.idField]+">");
_70e.push(this.renderRow.call(this,_70a,_70d,_70c,0,row));
_70e.push("</tr>");
}
_70e.push("</tbody></table>");
$(_70b).html(_70e.join(""));
},renderRow:function(_70f,_710,_711,_712,row){
var opts=$.data(_70f,"treegrid").options;
var cc=[];
if(_711&&opts.rownumbers){
cc.push("<td class=\"datagrid-td-rownumber\"><div class=\"datagrid-cell-rownumber\">0</div></td>");
}
for(var i=0;i<_710.length;i++){
var _713=_710[i];
var col=$(_70f).datagrid("getColumnOption",_713);
if(col){
var _714=col.styler?(col.styler(row[_713],row)||""):"";
var _715=col.hidden?"style=\"display:none;"+_714+"\"":(_714?"style=\""+_714+"\"":"");
cc.push("<td field=\""+_713+"\" "+_715+">");
if(col.checkbox){
var _715="";
}else{
var _715="";
if(col.align){
_715+="text-align:"+col.align+";";
}
if(!opts.nowrap){
_715+="white-space:normal;height:auto;";
}else{
if(opts.autoRowHeight){
_715+="height:auto;";
}
}
}
cc.push("<div style=\""+_715+"\" ");
if(col.checkbox){
cc.push("class=\"datagrid-cell-check ");
}else{
cc.push("class=\"datagrid-cell "+col.cellClass);
}
cc.push("\">");
if(col.checkbox){
if(row.checked){
cc.push("<input type=\"checkbox\" checked=\"checked\"");
}else{
cc.push("<input type=\"checkbox\"");
}
cc.push(" name=\""+_713+"\" value=\""+(row[_713]!=undefined?row[_713]:"")+"\"/>");
}else{
var val=null;
if(col.formatter){
val=col.formatter(row[_713],row);
}else{
val=row[_713];
}
if(_713==opts.treeField){
for(var j=0;j<_712;j++){
cc.push("<span class=\"tree-indent\"></span>");
}
if(row.state=="closed"){
cc.push("<span class=\"tree-hit tree-collapsed\"></span>");
cc.push("<span class=\"tree-icon tree-folder "+(row.iconCls?row.iconCls:"")+"\"></span>");
}else{
if(row.children&&row.children.length){
cc.push("<span class=\"tree-hit tree-expanded\"></span>");
cc.push("<span class=\"tree-icon tree-folder tree-folder-open "+(row.iconCls?row.iconCls:"")+"\"></span>");
}else{
cc.push("<span class=\"tree-indent\"></span>");
cc.push("<span class=\"tree-icon tree-file "+(row.iconCls?row.iconCls:"")+"\"></span>");
}
}
cc.push("<span class=\"tree-title\">"+val+"</span>");
}else{
cc.push(val);
}
}
cc.push("</div>");
cc.push("</td>");
}
}
return cc.join("");
},refreshRow:function(_716,id){
this.updateRow.call(this,_716,id,{});
},updateRow:function(_717,id,row){
var opts=$.data(_717,"treegrid").options;
var _718=$(_717).treegrid("find",id);
$.extend(_718,row);
var _719=$(_717).treegrid("getLevel",id)-1;
var _71a=opts.rowStyler?opts.rowStyler.call(_717,_718):"";
function _71b(_71c){
var _71d=$(_717).treegrid("getColumnFields",_71c);
var tr=opts.finder.getTr(_717,id,"body",(_71c?1:2));
var _71e=tr.find("div.datagrid-cell-rownumber").html();
var _71f=tr.find("div.datagrid-cell-check input[type=checkbox]").is(":checked");
tr.html(this.renderRow(_717,_71d,_71c,_719,_718));
tr.attr("style",_71a||"");
tr.find("div.datagrid-cell-rownumber").html(_71e);
if(_71f){
tr.find("div.datagrid-cell-check input[type=checkbox]")._propAttr("checked",true);
}
};
_71b.call(this,true);
_71b.call(this,false);
$(_717).treegrid("fixRowHeight",id);
},onBeforeRender:function(_720,_721,data){
if(!data){
return false;
}
var opts=$.data(_720,"treegrid").options;
if(data.length==undefined){
if(data.footer){
$.data(_720,"treegrid").footer=data.footer;
}
if(data.total){
$.data(_720,"treegrid").total=data.total;
}
data=this.transfer(_720,_721,data.rows);
}else{
function _722(_723,_724){
for(var i=0;i<_723.length;i++){
var row=_723[i];
row._parentId=_724;
if(row.children&&row.children.length){
_722(row.children,row[opts.idField]);
}
}
};
_722(data,_721);
}
var node=find(_720,_721);
if(node){
if(node.children){
node.children=node.children.concat(data);
}else{
node.children=data;
}
}else{
$.data(_720,"treegrid").data=$.data(_720,"treegrid").data.concat(data);
}
if(!opts.remoteSort){
this.sort(_720,data);
}
this.treeNodes=data;
this.treeLevel=$(_720).treegrid("getLevel",_721);
},sort:function(_725,data){
var opts=$.data(_725,"treegrid").options;
var opt=$(_725).treegrid("getColumnOption",opts.sortName);
if(opt){
var _726=opt.sorter||function(a,b){
return (a>b?1:-1);
};
_727(data);
}
function _727(rows){
rows.sort(function(r1,r2){
return _726(r1[opts.sortName],r2[opts.sortName])*(opts.sortOrder=="asc"?1:-1);
});
for(var i=0;i<rows.length;i++){
var _728=rows[i].children;
if(_728&&_728.length){
_727(_728);
}
}
};
},transfer:function(_729,_72a,data){
var opts=$.data(_729,"treegrid").options;
var rows=[];
for(var i=0;i<data.length;i++){
rows.push(data[i]);
}
var _72b=[];
for(var i=0;i<rows.length;i++){
var row=rows[i];
if(!_72a){
if(!row._parentId){
_72b.push(row);
_672(rows,row);
i--;
}
}else{
if(row._parentId==_72a){
_72b.push(row);
_672(rows,row);
i--;
}
}
}
var toDo=[];
for(var i=0;i<_72b.length;i++){
toDo.push(_72b[i]);
}
while(toDo.length){
var node=toDo.shift();
for(var i=0;i<rows.length;i++){
var row=rows[i];
if(row._parentId==node[opts.idField]){
if(node.children){
node.children.push(row);
}else{
node.children=[row];
}
toDo.push(row);
_672(rows,row);
i--;
}
}
}
return _72b;
}});
$.fn.treegrid.defaults=$.extend({},$.fn.datagrid.defaults,{treeField:null,animate:false,singleSelect:true,view:_6fb,loader:function(_72c,_72d,_72e){
var opts=$(this).treegrid("options");
if(!opts.url){
return false;
}
$.ajax({type:opts.method,url:opts.url,data:_72c,dataType:"json",success:function(data){
_72d(data);
},error:function(){
_72e.apply(this,arguments);
}});
},loadFilter:function(data,_72f){
return data;
},finder:{getTr:function(_730,id,type,_731){
type=type||"body";
_731=_731||0;
var dc=$.data(_730,"datagrid").dc;
if(_731==0){
var opts=$.data(_730,"treegrid").options;
var tr1=opts.finder.getTr(_730,id,type,1);
var tr2=opts.finder.getTr(_730,id,type,2);
return tr1.add(tr2);
}else{
if(type=="body"){
var tr=$("#"+$.data(_730,"datagrid").rowIdPrefix+"-"+_731+"-"+id);
if(!tr.length){
tr=(_731==1?dc.body1:dc.body2).find("tr[node-id="+id+"]");
}
return tr;
}else{
if(type=="footer"){
return (_731==1?dc.footer1:dc.footer2).find("tr[node-id="+id+"]");
}else{
if(type=="selected"){
return (_731==1?dc.body1:dc.body2).find("tr.datagrid-row-selected");
}else{
if(type=="last"){
return (_731==1?dc.body1:dc.body2).find("tr:last[node-id]");
}else{
if(type=="allbody"){
return (_731==1?dc.body1:dc.body2).find("tr[node-id]");
}else{
if(type=="allfooter"){
return (_731==1?dc.footer1:dc.footer2).find("tr[node-id]");
}
}
}
}
}
}
}
},getRow:function(_732,id){
return $(_732).treegrid("find",id);
}},onBeforeLoad:function(row,_733){
},onLoadSuccess:function(row,data){
},onLoadError:function(){
},onBeforeCollapse:function(row){
},onCollapse:function(row){
},onBeforeExpand:function(row){
},onExpand:function(row){
},onClickRow:function(row){
},onDblClickRow:function(row){
},onClickCell:function(_734,row){
},onDblClickCell:function(_735,row){
},onContextMenu:function(e,row){
},onBeforeEdit:function(row){
},onAfterEdit:function(row,_736){
},onCancelEdit:function(row){
}});
})(jQuery);
(function($){
function _737(_738,_739){
var opts=$.data(_738,"combo").options;
var _73a=$.data(_738,"combo").combo;
var _73b=$.data(_738,"combo").panel;
if(_739){
opts.width=_739;
}
if(isNaN(opts.width)){
var c=$(_738).clone();
c.css("visibility","hidden");
c.appendTo("body");
opts.width=c.outerWidth();
c.remove();
}
_73a.appendTo("body");
var _73c=_73a.find("input.combo-text");
var _73d=_73a.find(".combo-arrow");
var _73e=opts.hasDownArrow?_73d._outerWidth():0;
_73a._outerWidth(opts.width)._outerHeight(opts.height);
_73c._outerWidth(_73a.width()-_73e);
_73c.css({height:_73a.height()+"px",lineHeight:_73a.height()+"px"});
_73d._outerHeight(_73a.height());
_73b.panel("resize",{width:(opts.panelWidth?opts.panelWidth:_73a.outerWidth()),height:opts.panelHeight});
_73a.insertAfter(_738);
};
function _73f(_740){
var opts=$.data(_740,"combo").options;
var _741=$.data(_740,"combo").combo;
if(opts.hasDownArrow){
_741.find(".combo-arrow").show();
}else{
_741.find(".combo-arrow").hide();
}
};
function init(_742){
$(_742).addClass("combo-f").hide();
var span=$("<span class=\"combo\"></span>").insertAfter(_742);
var _743=$("<input type=\"text\" class=\"combo-text\">").appendTo(span);
$("<span><span class=\"combo-arrow\"></span></span>").appendTo(span);
$("<input type=\"hidden\" class=\"combo-value\">").appendTo(span);
var _744=$("<div class=\"combo-panel\"></div>").appendTo("body");
_744.panel({doSize:false,closed:true,cls:"combo-p",style:{position:"absolute",zIndex:10},onOpen:function(){
$(this).panel("resize");
}});
var name=$(_742).attr("name");
if(name){
span.find("input.combo-value").attr("name",name);
$(_742).removeAttr("name").attr("comboName",name);
}
_743.attr("autocomplete","off");
return {combo:span,panel:_744};
};
function _745(_746){
var _747=$.data(_746,"combo").combo.find("input.combo-text");
_747.validatebox("destroy");
$.data(_746,"combo").panel.panel("destroy");
$.data(_746,"combo").combo.remove();
$(_746).remove();
};
function _748(_749){
var _74a=$.data(_749,"combo");
var opts=_74a.options;
var _74b=$.data(_749,"combo").combo;
var _74c=$.data(_749,"combo").panel;
var _74d=_74b.find(".combo-text");
var _74e=_74b.find(".combo-arrow");
$(document).unbind(".combo").bind("mousedown.combo",function(e){
var _74f=$("body>div.combo-p>div.combo-panel");
var p=$(e.target).closest("div.combo-panel",_74f);
if(p.length){
return;
}
_74f.panel("close");
});
_74b.unbind(".combo");
_74c.unbind(".combo");
_74d.unbind(".combo");
_74e.unbind(".combo");
if(!opts.disabled){
_74d.bind("mousedown.combo",function(e){
$("div.combo-panel").not(_74c).panel("close");
e.stopPropagation();
}).bind("keydown.combo",function(e){
switch(e.keyCode){
case 38:
opts.keyHandler.up.call(_749);
break;
case 40:
opts.keyHandler.down.call(_749);
break;
case 13:
e.preventDefault();
opts.keyHandler.enter.call(_749);
return false;
case 9:
case 27:
_756(_749);
break;
default:
if(opts.editable){
if(_74a.timer){
clearTimeout(_74a.timer);
}
_74a.timer=setTimeout(function(){
var q=_74d.val();
if(_74a.previousValue!=q){
_74a.previousValue=q;
$(_749).combo("showPanel");
opts.keyHandler.query.call(_749,_74d.val());
_759(_749,true);
}
},opts.delay);
}
}
});
_74e.bind("click.combo",function(){
if(_74c.is(":visible")){
_756(_749);
}else{
$("div.combo-panel").panel("close");
$(_749).combo("showPanel");
}
_74d.focus();
}).bind("mouseenter.combo",function(){
$(this).addClass("combo-arrow-hover");
}).bind("mouseleave.combo",function(){
$(this).removeClass("combo-arrow-hover");
}).bind("mousedown.combo",function(){
return false;
});
}
};
function _750(_751){
var opts=$.data(_751,"combo").options;
var _752=$.data(_751,"combo").combo;
var _753=$.data(_751,"combo").panel;
if($.fn.window){
_753.panel("panel").css("z-index",$.fn.window.defaults.zIndex++);
}
_753.panel("move",{left:_752.offset().left,top:_754()});
if(_753.panel("options").closed){
_753.panel("open");
opts.onShowPanel.call(_751);
}
(function(){
if(_753.is(":visible")){
_753.panel("move",{left:_755(),top:_754()});
setTimeout(arguments.callee,200);
}
})();
function _755(){
var left=_752.offset().left;
if(left+_753._outerWidth()>$(window)._outerWidth()+$(document).scrollLeft()){
left=$(window)._outerWidth()+$(document).scrollLeft()-_753._outerWidth();
}
if(left<0){
left=0;
}
return left;
};
function _754(){
var top=_752.offset().top+_752._outerHeight();
if(top+_753._outerHeight()>$(window)._outerHeight()+$(document).scrollTop()){
top=_752.offset().top-_753._outerHeight();
}
if(top<$(document).scrollTop()){
top=_752.offset().top+_752._outerHeight();
}
return top;
};
};
function _756(_757){
var opts=$.data(_757,"combo").options;
var _758=$.data(_757,"combo").panel;
_758.panel("close");
opts.onHidePanel.call(_757);
};
function _759(_75a,doit){
var opts=$.data(_75a,"combo").options;
var _75b=$.data(_75a,"combo").combo.find("input.combo-text");
_75b.validatebox(opts);
if(doit){
_75b.validatebox("validate");
}
};
function _75c(_75d,_75e){
var opts=$.data(_75d,"combo").options;
var _75f=$.data(_75d,"combo").combo;
if(_75e){
opts.disabled=true;
$(_75d).attr("disabled",true);
_75f.find(".combo-value").attr("disabled",true);
_75f.find(".combo-text").attr("disabled",true);
}else{
opts.disabled=false;
$(_75d).removeAttr("disabled");
_75f.find(".combo-value").removeAttr("disabled");
_75f.find(".combo-text").removeAttr("disabled");
}
};
function _760(_761){
var opts=$.data(_761,"combo").options;
var _762=$.data(_761,"combo").combo;
if(opts.multiple){
_762.find("input.combo-value").remove();
}else{
_762.find("input.combo-value").val("");
}
_762.find("input.combo-text").val("");
};
function _763(_764){
var _765=$.data(_764,"combo").combo;
return _765.find("input.combo-text").val();
};
function _766(_767,text){
var _768=$.data(_767,"combo").combo;
_768.find("input.combo-text").val(text);
_759(_767,true);
$.data(_767,"combo").previousValue=text;
};
function _769(_76a){
var _76b=[];
var _76c=$.data(_76a,"combo").combo;
_76c.find("input.combo-value").each(function(){
_76b.push($(this).val());
});
return _76b;
};
function _76d(_76e,_76f){
var opts=$.data(_76e,"combo").options;
var _770=_769(_76e);
var _771=$.data(_76e,"combo").combo;
_771.find("input.combo-value").remove();
var name=$(_76e).attr("comboName");
for(var i=0;i<_76f.length;i++){
var _772=$("<input type=\"hidden\" class=\"combo-value\">").appendTo(_771);
if(name){
_772.attr("name",name);
}
_772.val(_76f[i]);
}
var tmp=[];
for(var i=0;i<_770.length;i++){
tmp[i]=_770[i];
}
var aa=[];
for(var i=0;i<_76f.length;i++){
for(var j=0;j<tmp.length;j++){
if(_76f[i]==tmp[j]){
aa.push(_76f[i]);
tmp.splice(j,1);
break;
}
}
}
if(aa.length!=_76f.length||_76f.length!=_770.length){
if(opts.multiple){
opts.onChange.call(_76e,_76f,_770);
}else{
opts.onChange.call(_76e,_76f[0],_770[0]);
}
}
};
function _773(_774){
var _775=_769(_774);
return _775[0];
};
function _776(_777,_778){
_76d(_777,[_778]);
};
function _779(_77a){
var opts=$.data(_77a,"combo").options;
var fn=opts.onChange;
opts.onChange=function(){
};
if(opts.multiple){
if(opts.value){
if(typeof opts.value=="object"){
_76d(_77a,opts.value);
}else{
_776(_77a,opts.value);
}
}else{
_76d(_77a,[]);
}
opts.originalValue=_769(_77a);
}else{
_776(_77a,opts.value);
opts.originalValue=opts.value;
}
opts.onChange=fn;
};
$.fn.combo=function(_77b,_77c){
if(typeof _77b=="string"){
return $.fn.combo.methods[_77b](this,_77c);
}
_77b=_77b||{};
return this.each(function(){
var _77d=$.data(this,"combo");
if(_77d){
$.extend(_77d.options,_77b);
}else{
var r=init(this);
_77d=$.data(this,"combo",{options:$.extend({},$.fn.combo.defaults,$.fn.combo.parseOptions(this),_77b),combo:r.combo,panel:r.panel,previousValue:null});
$(this).removeAttr("disabled");
}
$("input.combo-text",_77d.combo).attr("readonly",!_77d.options.editable);
_73f(this);
_75c(this,_77d.options.disabled);
_737(this);
_748(this);
_759(this);
_779(this);
});
};
$.fn.combo.methods={options:function(jq){
return $.data(jq[0],"combo").options;
},panel:function(jq){
return $.data(jq[0],"combo").panel;
},textbox:function(jq){
return $.data(jq[0],"combo").combo.find("input.combo-text");
},destroy:function(jq){
return jq.each(function(){
_745(this);
});
},resize:function(jq,_77e){
return jq.each(function(){
_737(this,_77e);
});
},showPanel:function(jq){
return jq.each(function(){
_750(this);
});
},hidePanel:function(jq){
return jq.each(function(){
_756(this);
});
},disable:function(jq){
return jq.each(function(){
_75c(this,true);
_748(this);
});
},enable:function(jq){
return jq.each(function(){
_75c(this,false);
_748(this);
});
},validate:function(jq){
return jq.each(function(){
_759(this,true);
});
},isValid:function(jq){
var _77f=$.data(jq[0],"combo").combo.find("input.combo-text");
return _77f.validatebox("isValid");
},clear:function(jq){
return jq.each(function(){
_760(this);
});
},reset:function(jq){
return jq.each(function(){
var opts=$.data(this,"combo").options;
if(opts.multiple){
$(this).combo("setValues",opts.originalValue);
}else{
$(this).combo("setValue",opts.originalValue);
}
});
},getText:function(jq){
return _763(jq[0]);
},setText:function(jq,text){
return jq.each(function(){
_766(this,text);
});
},getValues:function(jq){
return _769(jq[0]);
},setValues:function(jq,_780){
return jq.each(function(){
_76d(this,_780);
});
},getValue:function(jq){
return _773(jq[0]);
},setValue:function(jq,_781){
return jq.each(function(){
_776(this,_781);
});
}};
$.fn.combo.parseOptions=function(_782){
var t=$(_782);
return $.extend({},$.fn.validatebox.parseOptions(_782),$.parser.parseOptions(_782,["width","height","separator",{panelWidth:"number",editable:"boolean",hasDownArrow:"boolean",delay:"number"}]),{panelHeight:(t.attr("panelHeight")=="auto"?"auto":parseInt(t.attr("panelHeight"))||undefined),multiple:(t.attr("multiple")?true:undefined),disabled:(t.attr("disabled")?true:undefined),value:(t.val()||undefined)});
};
$.fn.combo.defaults=$.extend({},$.fn.validatebox.defaults,{width:"auto",height:22,panelWidth:null,panelHeight:200,multiple:false,separator:",",editable:true,disabled:false,hasDownArrow:true,value:"",delay:200,keyHandler:{up:function(){
},down:function(){
},enter:function(){
},query:function(q){
}},onShowPanel:function(){
},onHidePanel:function(){
},onChange:function(_783,_784){
}});
})(jQuery);
(function($){
function _785(_786,_787){
var _788=$(_786).combo("panel");
var item=_788.find("div.combobox-item[value=\""+_787+"\"]");
if(item.length){
if(item.position().top<=0){
var h=_788.scrollTop()+item.position().top;
_788.scrollTop(h);
}else{
if(item.position().top+item.outerHeight()>_788.height()){
var h=_788.scrollTop()+item.position().top+item.outerHeight()-_788.height();
_788.scrollTop(h);
}
}
}
};
function _789(_78a){
var _78b=$(_78a).combo("panel");
var _78c=$(_78a).combo("getValues");
var item=_78b.find("div.combobox-item[value=\""+_78c.pop()+"\"]");
if(item.length){
var prev=item.prev(":visible");
if(prev.length){
item=prev;
}
}else{
item=_78b.find("div.combobox-item:visible:last");
}
var _78d=item.attr("value");
_78e(_78a,_78d);
_785(_78a,_78d);
};
function _78f(_790){
var _791=$(_790).combo("panel");
var _792=$(_790).combo("getValues");
var item=_791.find("div.combobox-item[value=\""+_792.pop()+"\"]");
if(item.length){
var next=item.next(":visible");
if(next.length){
item=next;
}
}else{
item=_791.find("div.combobox-item:visible:first");
}
var _793=item.attr("value");
_78e(_790,_793);
_785(_790,_793);
};
function _78e(_794,_795){
var opts=$.data(_794,"combobox").options;
var data=$.data(_794,"combobox").data;
if(opts.multiple){
var _796=$(_794).combo("getValues");
for(var i=0;i<_796.length;i++){
if(_796[i]==_795){
return;
}
}
_796.push(_795);
_797(_794,_796);
}else{
_797(_794,[_795]);
}
for(var i=0;i<data.length;i++){
if(data[i][opts.valueField]==_795){
opts.onSelect.call(_794,data[i]);
return;
}
}
};
function _798(_799,_79a){
var opts=$.data(_799,"combobox").options;
var data=$.data(_799,"combobox").data;
var _79b=$(_799).combo("getValues");
for(var i=0;i<_79b.length;i++){
if(_79b[i]==_79a){
_79b.splice(i,1);
_797(_799,_79b);
break;
}
}
for(var i=0;i<data.length;i++){
if(data[i][opts.valueField]==_79a){
opts.onUnselect.call(_799,data[i]);
return;
}
}
};
function _797(_79c,_79d,_79e){
var opts=$.data(_79c,"combobox").options;
var data=$.data(_79c,"combobox").data;
var _79f=$(_79c).combo("panel");
_79f.find("div.combobox-item-selected").removeClass("combobox-item-selected");
var vv=[],ss=[];
for(var i=0;i<_79d.length;i++){
var v=_79d[i];
var s=v;
for(var j=0;j<data.length;j++){
if(data[j][opts.valueField]==v){
s=data[j][opts.textField];
break;
}
}
vv.push(v);
ss.push(s);
_79f.find("div.combobox-item[value=\""+v+"\"]").addClass("combobox-item-selected");
}
$(_79c).combo("setValues",vv);
if(!_79e){
$(_79c).combo("setText",ss.join(opts.separator));
}
};
function _7a0(_7a1){
var opts=$.data(_7a1,"combobox").options;
var data=[];
$(">option",_7a1).each(function(){
var item={};
item[opts.valueField]=$(this).attr("value")!=undefined?$(this).attr("value"):$(this).html();
item[opts.textField]=$(this).html();
item["selected"]=$(this).attr("selected");
data.push(item);
});
return data;
};
function _7a2(_7a3,data,_7a4){
var opts=$.data(_7a3,"combobox").options;
var _7a5=$(_7a3).combo("panel");
$.data(_7a3,"combobox").data=data;
var _7a6=$(_7a3).combobox("getValues");
_7a5.empty();
for(var i=0;i<data.length;i++){
var v=data[i][opts.valueField];
var s=data[i][opts.textField];
var item=$("<div class=\"combobox-item\"></div>").appendTo(_7a5);
item.attr("value",v);
if(opts.formatter){
item.html(opts.formatter.call(_7a3,data[i]));
}else{
item.html(s);
}
if(data[i]["selected"]){
(function(){
for(var i=0;i<_7a6.length;i++){
if(v==_7a6[i]){
return;
}
}
_7a6.push(v);
})();
}
}
if(opts.multiple){
_797(_7a3,_7a6,_7a4);
}else{
if(_7a6.length){
_797(_7a3,[_7a6[_7a6.length-1]],_7a4);
}else{
_797(_7a3,[],_7a4);
}
}
opts.onLoadSuccess.call(_7a3,data);
$(".combobox-item",_7a5).hover(function(){
$(this).addClass("combobox-item-hover");
},function(){
$(this).removeClass("combobox-item-hover");
}).click(function(){
var item=$(this);
if(opts.multiple){
if(item.hasClass("combobox-item-selected")){
_798(_7a3,item.attr("value"));
}else{
_78e(_7a3,item.attr("value"));
}
}else{
_78e(_7a3,item.attr("value"));
$(_7a3).combo("hidePanel");
}
});
};
function _7a7(_7a8,url,_7a9,_7aa){
var opts=$.data(_7a8,"combobox").options;
if(url){
opts.url=url;
}
_7a9=_7a9||{};
if(opts.onBeforeLoad.call(_7a8,_7a9)==false){
return;
}
opts.loader.call(_7a8,_7a9,function(data){
_7a2(_7a8,data,_7aa);
},function(){
opts.onLoadError.apply(this,arguments);
});
};
function _7ab(_7ac,q){
var opts=$.data(_7ac,"combobox").options;
if(opts.multiple&&!q){
_797(_7ac,[],true);
}else{
_797(_7ac,[q],true);
}
if(opts.mode=="remote"){
_7a7(_7ac,null,{q:q},true);
}else{
var _7ad=$(_7ac).combo("panel");
_7ad.find("div.combobox-item").hide();
var data=$.data(_7ac,"combobox").data;
for(var i=0;i<data.length;i++){
if(opts.filter.call(_7ac,q,data[i])){
var v=data[i][opts.valueField];
var s=data[i][opts.textField];
var item=_7ad.find("div.combobox-item[value=\""+v+"\"]");
item.show();
if(s==q){
_797(_7ac,[v],true);
item.addClass("combobox-item-selected");
}
}
}
}
};
function _7ae(_7af){
var opts=$.data(_7af,"combobox").options;
$(_7af).addClass("combobox-f");
$(_7af).combo($.extend({},opts,{onShowPanel:function(){
$(_7af).combo("panel").find("div.combobox-item").show();
_785(_7af,$(_7af).combobox("getValue"));
opts.onShowPanel.call(_7af);
}}));
};
$.fn.combobox=function(_7b0,_7b1){
if(typeof _7b0=="string"){
var _7b2=$.fn.combobox.methods[_7b0];
if(_7b2){
return _7b2(this,_7b1);
}else{
return this.combo(_7b0,_7b1);
}
}
_7b0=_7b0||{};
return this.each(function(){
var _7b3=$.data(this,"combobox");
if(_7b3){
$.extend(_7b3.options,_7b0);
_7ae(this);
}else{
_7b3=$.data(this,"combobox",{options:$.extend({},$.fn.combobox.defaults,$.fn.combobox.parseOptions(this),_7b0)});
_7ae(this);
_7a2(this,_7a0(this));
}
if(_7b3.options.data){
_7a2(this,_7b3.options.data);
}
_7a7(this);
});
};
$.fn.combobox.methods={options:function(jq){
var opts=$.data(jq[0],"combobox").options;
opts.originalValue=jq.combo("options").originalValue;
return opts;
},getData:function(jq){
return $.data(jq[0],"combobox").data;
},setValues:function(jq,_7b4){
return jq.each(function(){
_797(this,_7b4);
});
},setValue:function(jq,_7b5){
return jq.each(function(){
_797(this,[_7b5]);
});
},clear:function(jq){
return jq.each(function(){
$(this).combo("clear");
var _7b6=$(this).combo("panel");
_7b6.find("div.combobox-item-selected").removeClass("combobox-item-selected");
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).combobox("options");
if(opts.multiple){
$(this).combobox("setValues",opts.originalValue);
}else{
$(this).combobox("setValue",opts.originalValue);
}
});
},loadData:function(jq,data){
return jq.each(function(){
_7a2(this,data);
});
},reload:function(jq,url){
return jq.each(function(){
_7a7(this,url);
});
},select:function(jq,_7b7){
return jq.each(function(){
_78e(this,_7b7);
});
},unselect:function(jq,_7b8){
return jq.each(function(){
_798(this,_7b8);
});
}};
$.fn.combobox.parseOptions=function(_7b9){
var t=$(_7b9);
return $.extend({},$.fn.combo.parseOptions(_7b9),$.parser.parseOptions(_7b9,["valueField","textField","mode","method","url"]));
};
$.fn.combobox.defaults=$.extend({},$.fn.combo.defaults,{valueField:"value",textField:"text",mode:"local",method:"post",url:null,data:null,keyHandler:{up:function(){
_789(this);
},down:function(){
_78f(this);
},enter:function(){
var _7ba=$(this).combobox("getValues");
$(this).combobox("setValues",_7ba);
$(this).combobox("hidePanel");
},query:function(q){
_7ab(this,q);
}},filter:function(q,row){
var opts=$(this).combobox("options");
return row[opts.textField].indexOf(q)==0;
},formatter:function(row){
var opts=$(this).combobox("options");
return row[opts.textField];
},loader:function(_7bb,_7bc,_7bd){
var opts=$(this).combobox("options");
if(!opts.url){
return false;
}
$.ajax({type:opts.method,url:opts.url,data:_7bb,dataType:"json",success:function(data){
_7bc(data);
},error:function(){
_7bd.apply(this,arguments);
}});
},onBeforeLoad:function(_7be){
},onLoadSuccess:function(){
},onLoadError:function(){
},onSelect:function(_7bf){
},onUnselect:function(_7c0){
}});
})(jQuery);
(function($){
function _7c1(_7c2){
var opts=$.data(_7c2,"combotree").options;
var tree=$.data(_7c2,"combotree").tree;
$(_7c2).addClass("combotree-f");
$(_7c2).combo(opts);
var _7c3=$(_7c2).combo("panel");
if(!tree){
tree=$("<ul></ul>").appendTo(_7c3);
$.data(_7c2,"combotree").tree=tree;
}
tree.tree($.extend({},opts,{checkbox:opts.multiple,onLoadSuccess:function(node,data){
var _7c4=$(_7c2).combotree("getValues");
if(opts.multiple){
var _7c5=tree.tree("getChecked");
for(var i=0;i<_7c5.length;i++){
var id=_7c5[i].id;
(function(){
for(var i=0;i<_7c4.length;i++){
if(id==_7c4[i]){
return;
}
}
_7c4.push(id);
})();
}
}
$(_7c2).combotree("setValues",_7c4);
opts.onLoadSuccess.call(this,node,data);
},onClick:function(node){
_7c7(_7c2);
$(_7c2).combo("hidePanel");
opts.onClick.call(this,node);
},onCheck:function(node,_7c6){
_7c7(_7c2);
opts.onCheck.call(this,node,_7c6);
}}));
};
function _7c7(_7c8){
var opts=$.data(_7c8,"combotree").options;
var tree=$.data(_7c8,"combotree").tree;
var vv=[],ss=[];
if(opts.multiple){
var _7c9=tree.tree("getChecked");
for(var i=0;i<_7c9.length;i++){
vv.push(_7c9[i].id);
ss.push(_7c9[i].text);
}
}else{
var node=tree.tree("getSelected");
if(node){
vv.push(node.id);
ss.push(node.text);
}
}
$(_7c8).combo("setValues",vv).combo("setText",ss.join(opts.separator));
};
function _7ca(_7cb,_7cc){
var opts=$.data(_7cb,"combotree").options;
var tree=$.data(_7cb,"combotree").tree;
tree.find("span.tree-checkbox").addClass("tree-checkbox0").removeClass("tree-checkbox1 tree-checkbox2");
var vv=[],ss=[];
for(var i=0;i<_7cc.length;i++){
var v=_7cc[i];
var s=v;
var node=tree.tree("find",v);
if(node){
s=node.text;
tree.tree("check",node.target);
tree.tree("select",node.target);
}
vv.push(v);
ss.push(s);
}
$(_7cb).combo("setValues",vv).combo("setText",ss.join(opts.separator));
};
$.fn.combotree=function(_7cd,_7ce){
if(typeof _7cd=="string"){
var _7cf=$.fn.combotree.methods[_7cd];
if(_7cf){
return _7cf(this,_7ce);
}else{
return this.combo(_7cd,_7ce);
}
}
_7cd=_7cd||{};
return this.each(function(){
var _7d0=$.data(this,"combotree");
if(_7d0){
$.extend(_7d0.options,_7cd);
}else{
$.data(this,"combotree",{options:$.extend({},$.fn.combotree.defaults,$.fn.combotree.parseOptions(this),_7cd)});
}
_7c1(this);
});
};
$.fn.combotree.methods={options:function(jq){
var opts=$.data(jq[0],"combotree").options;
opts.originalValue=jq.combo("options").originalValue;
return opts;
},tree:function(jq){
return $.data(jq[0],"combotree").tree;
},loadData:function(jq,data){
return jq.each(function(){
var opts=$.data(this,"combotree").options;
opts.data=data;
var tree=$.data(this,"combotree").tree;
tree.tree("loadData",data);
});
},reload:function(jq,url){
return jq.each(function(){
var opts=$.data(this,"combotree").options;
var tree=$.data(this,"combotree").tree;
if(url){
opts.url=url;
}
tree.tree({url:opts.url});
});
},setValues:function(jq,_7d1){
return jq.each(function(){
_7ca(this,_7d1);
});
},setValue:function(jq,_7d2){
return jq.each(function(){
_7ca(this,[_7d2]);
});
},clear:function(jq){
return jq.each(function(){
var tree=$.data(this,"combotree").tree;
tree.find("div.tree-node-selected").removeClass("tree-node-selected");
var cc=tree.tree("getChecked");
for(var i=0;i<cc.length;i++){
tree.tree("uncheck",cc[i].target);
}
$(this).combo("clear");
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).combotree("options");
if(opts.multiple){
$(this).combotree("setValues",opts.originalValue);
}else{
$(this).combotree("setValue",opts.originalValue);
}
});
}};
$.fn.combotree.parseOptions=function(_7d3){
return $.extend({},$.fn.combo.parseOptions(_7d3),$.fn.tree.parseOptions(_7d3));
};
$.fn.combotree.defaults=$.extend({},$.fn.combo.defaults,$.fn.tree.defaults,{editable:false});
})(jQuery);
(function($){
function _7d4(_7d5){
var opts=$.data(_7d5,"combogrid").options;
var grid=$.data(_7d5,"combogrid").grid;
$(_7d5).addClass("combogrid-f");
$(_7d5).combo(opts);
var _7d6=$(_7d5).combo("panel");
if(!grid){
grid=$("<table></table>").appendTo(_7d6);
$.data(_7d5,"combogrid").grid=grid;
}
grid.datagrid($.extend({},opts,{border:false,fit:true,singleSelect:(!opts.multiple),onLoadSuccess:function(data){
var _7d7=$.data(_7d5,"combogrid").remainText;
var _7d8=$(_7d5).combo("getValues");
_7e4(_7d5,_7d8,_7d7);
opts.onLoadSuccess.apply(_7d5,arguments);
},onClickRow:_7d9,onSelect:function(_7da,row){
_7db();
opts.onSelect.call(this,_7da,row);
},onUnselect:function(_7dc,row){
_7db();
opts.onUnselect.call(this,_7dc,row);
},onSelectAll:function(rows){
_7db();
opts.onSelectAll.call(this,rows);
},onUnselectAll:function(rows){
if(opts.multiple){
_7db();
}
opts.onUnselectAll.call(this,rows);
}}));
function _7d9(_7dd,row){
$.data(_7d5,"combogrid").remainText=false;
_7db();
if(!opts.multiple){
$(_7d5).combo("hidePanel");
}
opts.onClickRow.call(this,_7dd,row);
};
function _7db(){
var _7de=$.data(_7d5,"combogrid").remainText;
var rows=grid.datagrid("getSelections");
var vv=[],ss=[];
for(var i=0;i<rows.length;i++){
vv.push(rows[i][opts.idField]);
ss.push(rows[i][opts.textField]);
}
if(!opts.multiple){
$(_7d5).combo("setValues",(vv.length?vv:[""]));
}else{
$(_7d5).combo("setValues",vv);
}
if(!_7de){
$(_7d5).combo("setText",ss.join(opts.separator));
}
};
};
function _7df(_7e0,step){
var opts=$.data(_7e0,"combogrid").options;
var grid=$.data(_7e0,"combogrid").grid;
var _7e1=grid.datagrid("getRows").length;
$.data(_7e0,"combogrid").remainText=false;
var _7e2;
var _7e3=grid.datagrid("getSelections");
if(_7e3.length){
_7e2=grid.datagrid("getRowIndex",_7e3[_7e3.length-1][opts.idField]);
_7e2+=step;
if(_7e2<0){
_7e2=0;
}
if(_7e2>=_7e1){
_7e2=_7e1-1;
}
}else{
if(step>0){
_7e2=0;
}else{
if(step<0){
_7e2=_7e1-1;
}else{
_7e2=-1;
}
}
}
if(_7e2>=0){
grid.datagrid("clearSelections");
grid.datagrid("selectRow",_7e2);
}
};
function _7e4(_7e5,_7e6,_7e7){
var opts=$.data(_7e5,"combogrid").options;
var grid=$.data(_7e5,"combogrid").grid;
var rows=grid.datagrid("getRows");
var ss=[];
for(var i=0;i<_7e6.length;i++){
var _7e8=grid.datagrid("getRowIndex",_7e6[i]);
if(_7e8>=0){
grid.datagrid("selectRow",_7e8);
ss.push(rows[_7e8][opts.textField]);
}else{
ss.push(_7e6[i]);
}
}
if($(_7e5).combo("getValues").join(",")==_7e6.join(",")){
return;
}
$(_7e5).combo("setValues",_7e6);
if(!_7e7){
$(_7e5).combo("setText",ss.join(opts.separator));
}
};
function _7e9(_7ea,q){
var opts=$.data(_7ea,"combogrid").options;
var grid=$.data(_7ea,"combogrid").grid;
$.data(_7ea,"combogrid").remainText=true;
if(opts.multiple&&!q){
_7e4(_7ea,[],true);
}else{
_7e4(_7ea,[q],true);
}
if(opts.mode=="remote"){
grid.datagrid("clearSelections");
grid.datagrid("load",$.extend({},opts.queryParams,{q:q}));
}else{
if(!q){
return;
}
var rows=grid.datagrid("getRows");
for(var i=0;i<rows.length;i++){
if(opts.filter.call(_7ea,q,rows[i])){
grid.datagrid("clearSelections");
grid.datagrid("selectRow",i);
return;
}
}
}
};
$.fn.combogrid=function(_7eb,_7ec){
if(typeof _7eb=="string"){
var _7ed=$.fn.combogrid.methods[_7eb];
if(_7ed){
return _7ed(this,_7ec);
}else{
return $.fn.combo.methods[_7eb](this,_7ec);
}
}
_7eb=_7eb||{};
return this.each(function(){
var _7ee=$.data(this,"combogrid");
if(_7ee){
$.extend(_7ee.options,_7eb);
}else{
_7ee=$.data(this,"combogrid",{options:$.extend({},$.fn.combogrid.defaults,$.fn.combogrid.parseOptions(this),_7eb)});
}
_7d4(this);
});
};
$.fn.combogrid.methods={options:function(jq){
var opts=$.data(jq[0],"combogrid").options;
opts.originalValue=jq.combo("options").originalValue;
return opts;
},grid:function(jq){
return $.data(jq[0],"combogrid").grid;
},setValues:function(jq,_7ef){
return jq.each(function(){
_7e4(this,_7ef);
});
},setValue:function(jq,_7f0){
return jq.each(function(){
_7e4(this,[_7f0]);
});
},clear:function(jq){
return jq.each(function(){
$(this).combogrid("grid").datagrid("clearSelections");
$(this).combo("clear");
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).combogrid("options");
if(opts.multiple){
$(this).combogrid("setValues",opts.originalValue);
}else{
$(this).combogrid("setValue",opts.originalValue);
}
});
}};
$.fn.combogrid.parseOptions=function(_7f1){
var t=$(_7f1);
return $.extend({},$.fn.combo.parseOptions(_7f1),$.fn.datagrid.parseOptions(_7f1),$.parser.parseOptions(_7f1,["idField","textField","mode"]));
};
$.fn.combogrid.defaults=$.extend({},$.fn.combo.defaults,$.fn.datagrid.defaults,{loadMsg:null,idField:null,textField:null,mode:"local",keyHandler:{up:function(){
_7df(this,-1);
},down:function(){
_7df(this,1);
},enter:function(){
_7df(this,0);
$(this).combo("hidePanel");
},query:function(q){
_7e9(this,q);
}},filter:function(q,row){
var opts=$(this).combogrid("options");
return row[opts.textField].indexOf(q)==0;
}});
})(jQuery);
(function($){
function _7f2(_7f3){
var _7f4=$.data(_7f3,"datebox");
var opts=_7f4.options;
$(_7f3).addClass("datebox-f");
$(_7f3).combo($.extend({},opts,{onShowPanel:function(){
_7f4.calendar.calendar("resize");
opts.onShowPanel.call(_7f3);
}}));
$(_7f3).combo("textbox").parent().addClass("datebox");
if(!_7f4.calendar){
_7f5();
}
function _7f5(){
var _7f6=$(_7f3).combo("panel");
_7f4.calendar=$("<div></div>").appendTo(_7f6).wrap("<div class=\"datebox-calendar-inner\"></div>");
_7f4.calendar.calendar({fit:true,border:false,onSelect:function(date){
var _7f7=opts.formatter(date);
_7fb(_7f3,_7f7);
$(_7f3).combo("hidePanel");
opts.onSelect.call(_7f3,date);
}});
_7fb(_7f3,opts.value);
var _7f8=$("<div class=\"datebox-button\"></div>").appendTo(_7f6);
$("<a href=\"javascript:void(0)\" class=\"datebox-current\"></a>").html(opts.currentText).appendTo(_7f8);
$("<a href=\"javascript:void(0)\" class=\"datebox-close\"></a>").html(opts.closeText).appendTo(_7f8);
_7f8.find(".datebox-current,.datebox-close").hover(function(){
$(this).addClass("datebox-button-hover");
},function(){
$(this).removeClass("datebox-button-hover");
});
_7f8.find(".datebox-current").click(function(){
_7f4.calendar.calendar({year:new Date().getFullYear(),month:new Date().getMonth()+1,current:new Date()});
});
_7f8.find(".datebox-close").click(function(){
$(_7f3).combo("hidePanel");
});
};
};
function _7f9(_7fa,q){
_7fb(_7fa,q);
};
function _7fc(_7fd){
var opts=$.data(_7fd,"datebox").options;
var c=$.data(_7fd,"datebox").calendar;
var _7fe=opts.formatter(c.calendar("options").current);
_7fb(_7fd,_7fe);
$(_7fd).combo("hidePanel");
};
function _7fb(_7ff,_800){
var _801=$.data(_7ff,"datebox");
var opts=_801.options;
$(_7ff).combo("setValue",_800).combo("setText",_800);
_801.calendar.calendar("moveTo",opts.parser(_800));
};
$.fn.datebox=function(_802,_803){
if(typeof _802=="string"){
var _804=$.fn.datebox.methods[_802];
if(_804){
return _804(this,_803);
}else{
return this.combo(_802,_803);
}
}
_802=_802||{};
return this.each(function(){
var _805=$.data(this,"datebox");
if(_805){
$.extend(_805.options,_802);
}else{
$.data(this,"datebox",{options:$.extend({},$.fn.datebox.defaults,$.fn.datebox.parseOptions(this),_802)});
}
_7f2(this);
});
};
$.fn.datebox.methods={options:function(jq){
var opts=$.data(jq[0],"datebox").options;
opts.originalValue=jq.combo("options").originalValue;
return opts;
},calendar:function(jq){
return $.data(jq[0],"datebox").calendar;
},setValue:function(jq,_806){
return jq.each(function(){
_7fb(this,_806);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).datebox("options");
$(this).datebox("setValue",opts.originalValue);
});
}};
$.fn.datebox.parseOptions=function(_807){
var t=$(_807);
return $.extend({},$.fn.combo.parseOptions(_807),{});
};
$.fn.datebox.defaults=$.extend({},$.fn.combo.defaults,{panelWidth:180,panelHeight:"auto",keyHandler:{up:function(){
},down:function(){
},enter:function(){
_7fc(this);
},query:function(q){
_7f9(this,q);
}},currentText:"Today",closeText:"Close",okText:"Ok",formatter:function(date){
var y=date.getFullYear();
var m=date.getMonth()+1;
var d=date.getDate();
return m+"/"+d+"/"+y;
},parser:function(s){
var t=Date.parse(s);
if(!isNaN(t)){
return new Date(t);
}else{
return new Date();
}
},onSelect:function(date){
}});
})(jQuery);
(function($){
function _808(_809){
var _80a=$.data(_809,"datetimebox");
var opts=_80a.options;
$(_809).datebox($.extend({},opts,{onShowPanel:function(){
var _80b=$(_809).datetimebox("getValue");
_80e(_809,_80b,true);
opts.onShowPanel.call(_809);
},formatter:$.fn.datebox.defaults.formatter,parser:$.fn.datebox.defaults.parser}));
$(_809).removeClass("datebox-f").addClass("datetimebox-f");
$(_809).datebox("calendar").calendar({onSelect:function(date){
opts.onSelect.call(_809,date);
}});
var _80c=$(_809).datebox("panel");
if(!_80a.spinner){
var p=$("<div style=\"padding:2px\"><input style=\"width:80px\"></div>").insertAfter(_80c.children("div.datebox-calendar-inner"));
_80a.spinner=p.children("input");
var _80d=_80c.children("div.datebox-button");
var ok=$("<a href=\"javascript:void(0)\" class=\"datebox-ok\"></a>").html(opts.okText).appendTo(_80d);
ok.hover(function(){
$(this).addClass("datebox-button-hover");
},function(){
$(this).removeClass("datebox-button-hover");
}).click(function(){
_813(_809);
});
}
_80a.spinner.timespinner({showSeconds:opts.showSeconds,separator:opts.timeSeparator}).unbind(".datetimebox").bind("mousedown.datetimebox",function(e){
e.stopPropagation();
});
_80e(_809,opts.value);
};
function _80f(_810){
var c=$(_810).datetimebox("calendar");
var t=$(_810).datetimebox("spinner");
var date=c.calendar("options").current;
return new Date(date.getFullYear(),date.getMonth(),date.getDate(),t.timespinner("getHours"),t.timespinner("getMinutes"),t.timespinner("getSeconds"));
};
function _811(_812,q){
_80e(_812,q,true);
};
function _813(_814){
var opts=$.data(_814,"datetimebox").options;
var date=_80f(_814);
_80e(_814,opts.formatter.call(_814,date));
$(_814).combo("hidePanel");
};
function _80e(_815,_816,_817){
var opts=$.data(_815,"datetimebox").options;
$(_815).combo("setValue",_816);
if(!_817){
if(_816){
var date=opts.parser.call(_815,_816);
$(_815).combo("setValue",opts.formatter.call(_815,date));
$(_815).combo("setText",opts.formatter.call(_815,date));
}else{
$(_815).combo("setText",_816);
}
}
var date=opts.parser.call(_815,_816);
$(_815).datetimebox("calendar").calendar("moveTo",date);
$(_815).datetimebox("spinner").timespinner("setValue",_818(date));
function _818(date){
function _819(_81a){
return (_81a<10?"0":"")+_81a;
};
var tt=[_819(date.getHours()),_819(date.getMinutes())];
if(opts.showSeconds){
tt.push(_819(date.getSeconds()));
}
return tt.join($(_815).datetimebox("spinner").timespinner("options").separator);
};
};
$.fn.datetimebox=function(_81b,_81c){
if(typeof _81b=="string"){
var _81d=$.fn.datetimebox.methods[_81b];
if(_81d){
return _81d(this,_81c);
}else{
return this.datebox(_81b,_81c);
}
}
_81b=_81b||{};
return this.each(function(){
var _81e=$.data(this,"datetimebox");
if(_81e){
$.extend(_81e.options,_81b);
}else{
$.data(this,"datetimebox",{options:$.extend({},$.fn.datetimebox.defaults,$.fn.datetimebox.parseOptions(this),_81b)});
}
_808(this);
});
};
$.fn.datetimebox.methods={options:function(jq){
var opts=$.data(jq[0],"datetimebox").options;
opts.originalValue=jq.datebox("options").originalValue;
return opts;
},spinner:function(jq){
return $.data(jq[0],"datetimebox").spinner;
},setValue:function(jq,_81f){
return jq.each(function(){
_80e(this,_81f);
});
},reset:function(jq){
return jq.each(function(){
var opts=$(this).datetimebox("options");
$(this).datetimebox("setValue",opts.originalValue);
});
}};
$.fn.datetimebox.parseOptions=function(_820){
var t=$(_820);
return $.extend({},$.fn.datebox.parseOptions(_820),$.parser.parseOptions(_820,["timeSeparator",{showSeconds:"boolean"}]));
};
$.fn.datetimebox.defaults=$.extend({},$.fn.datebox.defaults,{showSeconds:true,timeSeparator:":",keyHandler:{up:function(){
},down:function(){
},enter:function(){
_813(this);
},query:function(q){
_811(this,q);
}},formatter:function(date){
var h=date.getHours();
var M=date.getMinutes();
var s=date.getSeconds();
function _821(_822){
return (_822<10?"0":"")+_822;
};
var _823=$(this).datetimebox("spinner").timespinner("options").separator;
var r=$.fn.datebox.defaults.formatter(date)+" "+_821(h)+_823+_821(M);
if($(this).datetimebox("options").showSeconds){
r+=_823+_821(s);
}
return r;
},parser:function(s){
if($.trim(s)==""){
return new Date();
}
var dt=s.split(" ");
var d=$.fn.datebox.defaults.parser(dt[0]);
if(dt.length<2){
return d;
}
var _824=$(this).datetimebox("spinner").timespinner("options").separator;
var tt=dt[1].split(_824);
var hour=parseInt(tt[0],10)||0;
var _825=parseInt(tt[1],10)||0;
var _826=parseInt(tt[2],10)||0;
return new Date(d.getFullYear(),d.getMonth(),d.getDate(),hour,_825,_826);
}});
})(jQuery);
(function($){
function init(_827){
var _828=$("<div class=\"slider\">"+"<div class=\"slider-inner\">"+"<a href=\"javascript:void(0)\" class=\"slider-handle\"></a>"+"<span class=\"slider-tip\"></span>"+"</div>"+"<div class=\"slider-rule\"></div>"+"<div class=\"slider-rulelabel\"></div>"+"<div style=\"clear:both\"></div>"+"<input type=\"hidden\" class=\"slider-value\">"+"</div>").insertAfter(_827);
var name=$(_827).hide().attr("name");
if(name){
_828.find("input.slider-value").attr("name",name);
$(_827).removeAttr("name").attr("sliderName",name);
}
return _828;
};
function _829(_82a,_82b){
var opts=$.data(_82a,"slider").options;
var _82c=$.data(_82a,"slider").slider;
if(_82b){
if(_82b.width){
opts.width=_82b.width;
}
if(_82b.height){
opts.height=_82b.height;
}
}
if(opts.mode=="h"){
_82c.css("height","");
_82c.children("div").css("height","");
if(!isNaN(opts.width)){
_82c.width(opts.width);
}
}else{
_82c.css("width","");
_82c.children("div").css("width","");
if(!isNaN(opts.height)){
_82c.height(opts.height);
_82c.find("div.slider-rule").height(opts.height);
_82c.find("div.slider-rulelabel").height(opts.height);
_82c.find("div.slider-inner")._outerHeight(opts.height);
}
}
_82d(_82a);
};
function _82e(_82f){
var opts=$.data(_82f,"slider").options;
var _830=$.data(_82f,"slider").slider;
var aa=opts.mode=="h"?opts.rule:opts.rule.slice(0).reverse();
if(opts.reversed){
aa=aa.slice(0).reverse();
}
_831(aa);
function _831(aa){
var rule=_830.find("div.slider-rule");
var _832=_830.find("div.slider-rulelabel");
rule.empty();
_832.empty();
for(var i=0;i<aa.length;i++){
var _833=i*100/(aa.length-1)+"%";
var span=$("<span></span>").appendTo(rule);
span.css((opts.mode=="h"?"left":"top"),_833);
if(aa[i]!="|"){
span=$("<span></span>").appendTo(_832);
span.html(aa[i]);
if(opts.mode=="h"){
span.css({left:_833,marginLeft:-Math.round(span.outerWidth()/2)});
}else{
span.css({top:_833,marginTop:-Math.round(span.outerHeight()/2)});
}
}
}
};
};
function _834(_835){
var opts=$.data(_835,"slider").options;
var _836=$.data(_835,"slider").slider;
_836.removeClass("slider-h slider-v slider-disabled");
_836.addClass(opts.mode=="h"?"slider-h":"slider-v");
_836.addClass(opts.disabled?"slider-disabled":"");
_836.find("a.slider-handle").draggable({axis:opts.mode,cursor:"pointer",disabled:opts.disabled,onDrag:function(e){
var left=e.data.left;
var _837=_836.width();
if(opts.mode!="h"){
left=e.data.top;
_837=_836.height();
}
if(left<0||left>_837){
return false;
}else{
var _838=_847(_835,left);
_839(_838);
return false;
}
},onStartDrag:function(){
opts.onSlideStart.call(_835,opts.value);
},onStopDrag:function(e){
var _83a=_847(_835,(opts.mode=="h"?e.data.left:e.data.top));
_839(_83a);
opts.onSlideEnd.call(_835,opts.value);
}});
function _839(_83b){
var s=Math.abs(_83b%opts.step);
if(s<opts.step/2){
_83b-=s;
}else{
_83b=_83b-s+opts.step;
}
_83c(_835,_83b);
};
};
function _83c(_83d,_83e){
var opts=$.data(_83d,"slider").options;
var _83f=$.data(_83d,"slider").slider;
var _840=opts.value;
if(_83e<opts.min){
_83e=opts.min;
}
if(_83e>opts.max){
_83e=opts.max;
}
opts.value=_83e;
$(_83d).val(_83e);
_83f.find("input.slider-value").val(_83e);
var pos=_841(_83d,_83e);
var tip=_83f.find(".slider-tip");
if(opts.showTip){
tip.show();
tip.html(opts.tipFormatter.call(_83d,opts.value));
}else{
tip.hide();
}
if(opts.mode=="h"){
var _842="left:"+pos+"px;";
_83f.find(".slider-handle").attr("style",_842);
tip.attr("style",_842+"margin-left:"+(-Math.round(tip.outerWidth()/2))+"px");
}else{
var _842="top:"+pos+"px;";
_83f.find(".slider-handle").attr("style",_842);
tip.attr("style",_842+"margin-left:"+(-Math.round(tip.outerWidth()))+"px");
}
if(_840!=_83e){
opts.onChange.call(_83d,_83e,_840);
}
};
function _82d(_843){
var opts=$.data(_843,"slider").options;
var fn=opts.onChange;
opts.onChange=function(){
};
_83c(_843,opts.value);
opts.onChange=fn;
};
function _841(_844,_845){
var opts=$.data(_844,"slider").options;
var _846=$.data(_844,"slider").slider;
if(opts.mode=="h"){
var pos=(_845-opts.min)/(opts.max-opts.min)*_846.width();
if(opts.reversed){
pos=_846.width()-pos;
}
}else{
var pos=_846.height()-(_845-opts.min)/(opts.max-opts.min)*_846.height();
if(opts.reversed){
pos=_846.height()-pos;
}
}
return pos.toFixed(0);
};
function _847(_848,pos){
var opts=$.data(_848,"slider").options;
var _849=$.data(_848,"slider").slider;
if(opts.mode=="h"){
var _84a=opts.min+(opts.max-opts.min)*(pos/_849.width());
}else{
var _84a=opts.min+(opts.max-opts.min)*((_849.height()-pos)/_849.height());
}
return opts.reversed?opts.max-_84a.toFixed(0):_84a.toFixed(0);
};
$.fn.slider=function(_84b,_84c){
if(typeof _84b=="string"){
return $.fn.slider.methods[_84b](this,_84c);
}
_84b=_84b||{};
return this.each(function(){
var _84d=$.data(this,"slider");
if(_84d){
$.extend(_84d.options,_84b);
}else{
_84d=$.data(this,"slider",{options:$.extend({},$.fn.slider.defaults,$.fn.slider.parseOptions(this),_84b),slider:init(this)});
$(this).removeAttr("disabled");
}
_834(this);
_82e(this);
_829(this);
});
};
$.fn.slider.methods={options:function(jq){
return $.data(jq[0],"slider").options;
},destroy:function(jq){
return jq.each(function(){
$.data(this,"slider").slider.remove();
$(this).remove();
});
},resize:function(jq,_84e){
return jq.each(function(){
_829(this,_84e);
});
},getValue:function(jq){
return jq.slider("options").value;
},setValue:function(jq,_84f){
return jq.each(function(){
_83c(this,_84f);
});
},enable:function(jq){
return jq.each(function(){
$.data(this,"slider").options.disabled=false;
_834(this);
});
},disable:function(jq){
return jq.each(function(){
$.data(this,"slider").options.disabled=true;
_834(this);
});
}};
$.fn.slider.parseOptions=function(_850){
var t=$(_850);
return $.extend({},$.parser.parseOptions(_850,["width","height","mode",{reversed:"boolean",showTip:"boolean",min:"number",max:"number",step:"number"}]),{value:(t.val()||undefined),disabled:(t.attr("disabled")?true:undefined),rule:(t.attr("rule")?eval(t.attr("rule")):undefined)});
};
$.fn.slider.defaults={width:"auto",height:"auto",mode:"h",reversed:false,showTip:false,disabled:false,value:0,min:0,max:100,step:1,rule:[],tipFormatter:function(_851){
return _851;
},onChange:function(_852,_853){
},onSlideStart:function(_854){
},onSlideEnd:function(_855){
}};
})(jQuery);


/*src/js/jquery-ui-1.8.17.custom.min.js*/
/*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.core.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){function c(b,c){var e=b.nodeName.toLowerCase();if("area"===e){var f=b.parentNode,g=f.name,h;return!b.href||!g||f.nodeName.toLowerCase()!=="map"?!1:(h=a("img[usemap=#"+g+"]")[0],!!h&&d(h))}return(/input|select|textarea|button|object/.test(e)?!b.disabled:"a"==e?b.href||c:c)&&d(b)}function d(b){return!a(b).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}a.ui=a.ui||{};if(a.ui.version)return;a.extend(a.ui,{version:"1.8.22",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}),a.fn.extend({propAttr:a.fn.prop||a.fn.attr,_focus:a.fn.focus,focus:function(b,c){return typeof b=="number"?this.each(function(){var d=this;setTimeout(function(){a(d).focus(),c&&c.call(d)},b)}):this._focus.apply(this,arguments)},scrollParent:function(){var b;return a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?b=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):b=this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0),/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(c){if(c!==b)return this.css("zIndex",c);if(this.length){var d=a(this[0]),e,f;while(d.length&&d[0]!==document){e=d.css("position");if(e==="absolute"||e==="relative"||e==="fixed"){f=parseInt(d.css("zIndex"),10);if(!isNaN(f)&&f!==0)return f}d=d.parent()}}return 0},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(c,d){function h(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.curCSS(b,"padding"+this,!0))||0,d&&(c-=parseFloat(a.curCSS(b,"border"+this+"Width",!0))||0),f&&(c-=parseFloat(a.curCSS(b,"margin"+this,!0))||0)}),c}var e=d==="Width"?["Left","Right"]:["Top","Bottom"],f=d.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+d]=function(c){return c===b?g["inner"+d].call(this):this.each(function(){a(this).css(f,h(this,c)+"px")})},a.fn["outer"+d]=function(b,c){return typeof b!="number"?g["outer"+d].call(this,b):this.each(function(){a(this).css(f,h(this,b,!0,c)+"px")})}}),a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,d){return!!a.data(b,d[3])},focusable:function(b){return c(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var d=a.attr(b,"tabindex"),e=isNaN(d);return(e||d>=0)&&c(b,!e)}}),a(function(){var b=document.body,c=b.appendChild(c=document.createElement("div"));c.offsetHeight,a.extend(c.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),a.support.minHeight=c.offsetHeight===100,a.support.selectstart="onselectstart"in c,b.removeChild(c).style.display="none"}),a.curCSS||(a.curCSS=a.css),a.extend(a.ui,{plugin:{add:function(b,c,d){var e=a.ui[b].prototype;for(var f in d)e.plugins[f]=e.plugins[f]||[],e.plugins[f].push([c,d[f]])},call:function(a,b,c){var d=a.plugins[b];if(!d||!a.element[0].parentNode)return;for(var e=0;e<d.length;e++)a.options[d[e][0]]&&d[e][1].apply(a.element,c)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(b,c){if(a(b).css("overflow")==="hidden")return!1;var d=c&&c==="left"?"scrollLeft":"scrollTop",e=!1;return b[d]>0?!0:(b[d]=1,e=b[d]>0,b[d]=0,e)},isOverAxis:function(a,b,c){return a>b&&a<b+c},isOver:function(b,c,d,e,f,g){return a.ui.isOverAxis(b,d,f)&&a.ui.isOverAxis(c,e,g)}})})(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.widget.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){if(a.cleanData){var c=a.cleanData;a.cleanData=function(b){for(var d=0,e;(e=b[d])!=null;d++)try{a(e).triggerHandler("remove")}catch(f){}c(b)}}else{var d=a.fn.remove;a.fn.remove=function(b,c){return this.each(function(){return c||(!b||a.filter(b,[this]).length)&&a("*",this).add([this]).each(function(){try{a(this).triggerHandler("remove")}catch(b){}}),d.call(a(this),b,c)})}}a.widget=function(b,c,d){var e=b.split(".")[0],f;b=b.split(".")[1],f=e+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][f]=function(c){return!!a.data(c,b)},a[e]=a[e]||{},a[e][b]=function(a,b){arguments.length&&this._createWidget(a,b)};var g=new c;g.options=a.extend(!0,{},g.options),a[e][b].prototype=a.extend(!0,g,{namespace:e,widgetName:b,widgetEventPrefix:a[e][b].prototype.widgetEventPrefix||b,widgetBaseClass:f},d),a.widget.bridge(b,a[e][b])},a.widget.bridge=function(c,d){a.fn[c]=function(e){var f=typeof e=="string",g=Array.prototype.slice.call(arguments,1),h=this;return e=!f&&g.length?a.extend.apply(null,[!0,e].concat(g)):e,f&&e.charAt(0)==="_"?h:(f?this.each(function(){var d=a.data(this,c),f=d&&a.isFunction(d[e])?d[e].apply(d,g):d;if(f!==d&&f!==b)return h=f,!1}):this.each(function(){var b=a.data(this,c);b?b.option(e||{})._init():a.data(this,c,new d(e,this))}),h)}},a.Widget=function(a,b){arguments.length&&this._createWidget(a,b)},a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(b,c){a.data(c,this.widgetName,this),this.element=a(c),this.options=a.extend(!0,{},this.options,this._getCreateOptions(),b);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()}),this._create(),this._trigger("create"),this._init()},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName),this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+"ui-state-disabled")},widget:function(){return this.element},option:function(c,d){var e=c;if(arguments.length===0)return a.extend({},this.options);if(typeof c=="string"){if(d===b)return this.options[c];e={},e[c]=d}return this._setOptions(e),this},_setOptions:function(b){var c=this;return a.each(b,function(a,b){c._setOption(a,b)}),this},_setOption:function(a,b){return this.options[a]=b,a==="disabled"&&this.widget()[b?"addClass":"removeClass"](this.widgetBaseClass+"-disabled"+" "+"ui-state-disabled").attr("aria-disabled",b),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(b,c,d){var e,f,g=this.options[b];d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent;if(f)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.call(this.element[0],c,d)===!1||c.isDefaultPrevented())}}})(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.position.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.ui=a.ui||{};var c=/left|center|right/,d=/top|center|bottom/,e="center",f={},g=a.fn.position,h=a.fn.offset;a.fn.position=function(b){if(!b||!b.of)return g.apply(this,arguments);b=a.extend({},b);var h=a(b.of),i=h[0],j=(b.collision||"flip").split(" "),k=b.offset?b.offset.split(" "):[0,0],l,m,n;return i.nodeType===9?(l=h.width(),m=h.height(),n={top:0,left:0}):i.setTimeout?(l=h.width(),m=h.height(),n={top:h.scrollTop(),left:h.scrollLeft()}):i.preventDefault?(b.at="left top",l=m=0,n={top:b.of.pageY,left:b.of.pageX}):(l=h.outerWidth(),m=h.outerHeight(),n=h.offset()),a.each(["my","at"],function(){var a=(b[this]||"").split(" ");a.length===1&&(a=c.test(a[0])?a.concat([e]):d.test(a[0])?[e].concat(a):[e,e]),a[0]=c.test(a[0])?a[0]:e,a[1]=d.test(a[1])?a[1]:e,b[this]=a}),j.length===1&&(j[1]=j[0]),k[0]=parseInt(k[0],10)||0,k.length===1&&(k[1]=k[0]),k[1]=parseInt(k[1],10)||0,b.at[0]==="right"?n.left+=l:b.at[0]===e&&(n.left+=l/2),b.at[1]==="bottom"?n.top+=m:b.at[1]===e&&(n.top+=m/2),n.left+=k[0],n.top+=k[1],this.each(function(){var c=a(this),d=c.outerWidth(),g=c.outerHeight(),h=parseInt(a.curCSS(this,"marginLeft",!0))||0,i=parseInt(a.curCSS(this,"marginTop",!0))||0,o=d+h+(parseInt(a.curCSS(this,"marginRight",!0))||0),p=g+i+(parseInt(a.curCSS(this,"marginBottom",!0))||0),q=a.extend({},n),r;b.my[0]==="right"?q.left-=d:b.my[0]===e&&(q.left-=d/2),b.my[1]==="bottom"?q.top-=g:b.my[1]===e&&(q.top-=g/2),f.fractions||(q.left=Math.round(q.left),q.top=Math.round(q.top)),r={left:q.left-h,top:q.top-i},a.each(["left","top"],function(c,e){a.ui.position[j[c]]&&a.ui.position[j[c]][e](q,{targetWidth:l,targetHeight:m,elemWidth:d,elemHeight:g,collisionPosition:r,collisionWidth:o,collisionHeight:p,offset:k,my:b.my,at:b.at})}),a.fn.bgiframe&&c.bgiframe(),c.offset(a.extend(q,{using:b.using}))})},a.ui.position={fit:{left:function(b,c){var d=a(window),e=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft();b.left=e>0?b.left-e:Math.max(b.left-c.collisionPosition.left,b.left)},top:function(b,c){var d=a(window),e=c.collisionPosition.top+c.collisionHeight-d.height()-d.scrollTop();b.top=e>0?b.top-e:Math.max(b.top-c.collisionPosition.top,b.top)}},flip:{left:function(b,c){if(c.at[0]===e)return;var d=a(window),f=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft(),g=c.my[0]==="left"?-c.elemWidth:c.my[0]==="right"?c.elemWidth:0,h=c.at[0]==="left"?c.targetWidth:-c.targetWidth,i=-2*c.offset[0];b.left+=c.collisionPosition.left<0?g+h+i:f>0?g+h+i:0},top:function(b,c){if(c.at[1]===e)return;var d=a(window),f=c.collisionPosition.top+c.collisionHeight-d.height()-d.scrollTop(),g=c.my[1]==="top"?-c.elemHeight:c.my[1]==="bottom"?c.elemHeight:0,h=c.at[1]==="top"?c.targetHeight:-c.targetHeight,i=-2*c.offset[1];b.top+=c.collisionPosition.top<0?g+h+i:f>0?g+h+i:0}}},a.offset.setOffset||(a.offset.setOffset=function(b,c){/static/.test(a.curCSS(b,"position"))&&(b.style.position="relative");var d=a(b),e=d.offset(),f=parseInt(a.curCSS(b,"top",!0),10)||0,g=parseInt(a.curCSS(b,"left",!0),10)||0,h={top:c.top-e.top+f,left:c.left-e.left+g};"using"in c?c.using.call(b,h):d.css(h)},a.fn.offset=function(b){var c=this[0];return!c||!c.ownerDocument?null:b?a.isFunction(b)?this.each(function(c){a(this).offset(b.call(this,c,a(this).offset()))}):this.each(function(){a.offset.setOffset(this,b)}):h.call(this)}),function(){var b=document.getElementsByTagName("body")[0],c=document.createElement("div"),d,e,g,h,i;d=document.createElement(b?"div":"body"),g={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},b&&a.extend(g,{position:"absolute",left:"-1000px",top:"-1000px"});for(var j in g)d.style[j]=g[j];d.appendChild(c),e=b||document.documentElement,e.insertBefore(d,e.firstChild),c.style.cssText="position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;",h=a(c).offset(function(a,b){return b}).offset(),d.innerHTML="",e.removeChild(d),i=h.top+h.left+(b?2e3:0),f.fractions=i>21&&i<22}()})(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.button.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){var c,d,e,f,g="ui-button ui-widget ui-state-default ui-corner-all",h="ui-state-hover ui-state-active ",i="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",j=function(){var b=a(this).find(":ui-button");setTimeout(function(){b.button("refresh")},1)},k=function(b){var c=b.name,d=b.form,e=a([]);return c&&(d?e=a(d).find("[name='"+c+"']"):e=a("[name='"+c+"']",b.ownerDocument).filter(function(){return!this.form})),e};a.widget("ui.button",{options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",j),typeof this.options.disabled!="boolean"?this.options.disabled=!!this.element.propAttr("disabled"):this.element.propAttr("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var b=this,h=this.options,i=this.type==="checkbox"||this.type==="radio",l="ui-state-hover"+(i?"":" ui-state-active"),m="ui-state-focus";h.label===null&&(h.label=this.buttonElement.html()),this.buttonElement.addClass(g).attr("role","button").bind("mouseenter.button",function(){if(h.disabled)return;a(this).addClass("ui-state-hover"),this===c&&a(this).addClass("ui-state-active")}).bind("mouseleave.button",function(){if(h.disabled)return;a(this).removeClass(l)}).bind("click.button",function(a){h.disabled&&(a.preventDefault(),a.stopImmediatePropagation())}),this.element.bind("focus.button",function(){b.buttonElement.addClass(m)}).bind("blur.button",function(){b.buttonElement.removeClass(m)}),i&&(this.element.bind("change.button",function(){if(f)return;b.refresh()}),this.buttonElement.bind("mousedown.button",function(a){if(h.disabled)return;f=!1,d=a.pageX,e=a.pageY}).bind("mouseup.button",function(a){if(h.disabled)return;if(d!==a.pageX||e!==a.pageY)f=!0})),this.type==="checkbox"?this.buttonElement.bind("click.button",function(){if(h.disabled||f)return!1;a(this).toggleClass("ui-state-active"),b.buttonElement.attr("aria-pressed",b.element[0].checked)}):this.type==="radio"?this.buttonElement.bind("click.button",function(){if(h.disabled||f)return!1;a(this).addClass("ui-state-active"),b.buttonElement.attr("aria-pressed","true");var c=b.element[0];k(c).not(c).map(function(){return a(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown.button",function(){if(h.disabled)return!1;a(this).addClass("ui-state-active"),c=this,a(document).one("mouseup",function(){c=null})}).bind("mouseup.button",function(){if(h.disabled)return!1;a(this).removeClass("ui-state-active")}).bind("keydown.button",function(b){if(h.disabled)return!1;(b.keyCode==a.ui.keyCode.SPACE||b.keyCode==a.ui.keyCode.ENTER)&&a(this).addClass("ui-state-active")}).bind("keyup.button",function(){a(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(b){b.keyCode===a.ui.keyCode.SPACE&&a(this).click()})),this._setOption("disabled",h.disabled),this._resetButton()},_determineButtonType:function(){this.element.is(":checkbox")?this.type="checkbox":this.element.is(":radio")?this.type="radio":this.element.is("input")?this.type="input":this.type="button";if(this.type==="checkbox"||this.type==="radio"){var a=this.element.parents().filter(":last"),b="label[for='"+this.element.attr("id")+"']";this.buttonElement=a.find(b),this.buttonElement.length||(a=a.length?a.siblings():this.element.siblings(),this.buttonElement=a.filter(b),this.buttonElement.length||(this.buttonElement=a.find(b))),this.element.addClass("ui-helper-hidden-accessible");var c=this.element.is(":checked");c&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.attr("aria-pressed",c)}else this.buttonElement=this.element},widget:function(){return this.buttonElement},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(g+" "+h+" "+i).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title"),a.Widget.prototype.destroy.call(this)},_setOption:function(b,c){a.Widget.prototype._setOption.apply(this,arguments);if(b==="disabled"){c?this.element.propAttr("disabled",!0):this.element.propAttr("disabled",!1);return}this._resetButton()},refresh:function(){var b=this.element.is(":disabled");b!==this.options.disabled&&this._setOption("disabled",b),this.type==="radio"?k(this.element[0]).each(function(){a(this).is(":checked")?a(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):this.type==="checkbox"&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if(this.type==="input"){this.options.label&&this.element.val(this.options.label);return}var b=this.buttonElement.removeClass(i),c=a("<span></span>",this.element[0].ownerDocument).addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(),d=this.options.icons,e=d.primary&&d.secondary,f=[];d.primary||d.secondary?(this.options.text&&f.push("ui-button-text-icon"+(e?"s":d.primary?"-primary":"-secondary")),d.primary&&b.prepend("<span class='ui-button-icon-primary ui-icon "+d.primary+"'></span>"),d.secondary&&b.append("<span class='ui-button-icon-secondary ui-icon "+d.secondary+"'></span>"),this.options.text||(f.push(e?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||b.attr("title",c))):f.push("ui-button-text-only"),b.addClass(f.join(" "))}}),a.widget("ui.buttonset",{options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(b,c){b==="disabled"&&this.buttons.button("option",b,c),a.Widget.prototype._setOption.apply(this,arguments)},refresh:function(){var b=this.element.css("direction")==="rtl";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(b?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(b?"ui-corner-left":"ui-corner-right").end().end()},destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy"),a.Widget.prototype.destroy.call(this)}})})(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.dialog.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){var c="ui-dialog ui-widget ui-widget-content ui-corner-all ",d={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},e={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},f=a.attrFn||{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0,click:!0};a.widget("ui.dialog",{options:{autoOpen:!0,buttons:{},closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:!1,maxWidth:!1,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",collision:"fit",using:function(b){var c=a(this).css(b).offset().top;c<0&&a(this).css("top",b.top-c)}},resizable:!0,show:null,stack:!0,title:"",width:300,zIndex:1e3},_create:function(){this.originalTitle=this.element.attr("title"),typeof this.originalTitle!="string"&&(this.originalTitle=""),this.options.title=this.options.title||this.originalTitle;var b=this,d=b.options,e=d.title||"&#160;",f=a.ui.dialog.getTitleId(b.element),g=(b.uiDialog=a("<div></div>")).appendTo(document.body).hide().addClass(c+d.dialogClass).css({zIndex:d.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(c){d.closeOnEscape&&!c.isDefaultPrevented()&&c.keyCode&&c.keyCode===a.ui.keyCode.ESCAPE&&(b.close(c),c.preventDefault())}).attr({role:"dialog","aria-labelledby":f}).mousedown(function(a){b.moveToTop(!1,a)}),h=b.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(g),i=(b.uiDialogTitlebar=a("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(g),j=a('<a id="uidialogtitleclose" href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){j.addClass("ui-state-hover")},function(){j.removeClass("ui-state-hover")}).focus(function(){j.addClass("ui-state-focus")}).blur(function(){j.removeClass("ui-state-focus")}).click(function(a){return b.close(a),!1}).appendTo(i),k=(b.uiDialogTitlebarCloseText=a("<span></span>")).addClass("ui-icon ui-icon-closethick").text(d.closeText).appendTo(j),l=a("<span></span>").addClass("ui-dialog-title").attr("id",f).html(e).prependTo(i);a.isFunction(d.beforeclose)&&!a.isFunction(d.beforeClose)&&(d.beforeClose=d.beforeclose),i.find("*").add(i).disableSelection(),d.draggable&&a.fn.draggable&&b._makeDraggable(),d.resizable&&a.fn.resizable&&b._makeResizable(),b._createButtons(d.buttons),b._isOpen=!1,a.fn.bgiframe&&g.bgiframe()},_init:function(){this.options.autoOpen&&this.open()},destroy:function(){var a=this;return a.overlay&&a.overlay.destroy(),a.uiDialog.hide(),a.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"),a.uiDialog.remove(),a.originalTitle&&a.element.attr("title",a.originalTitle),a},widget:function(){return this.uiDialog},close:function(b){var c=this,d,e;if(!1===c._trigger("beforeClose",b))return;return c.overlay&&c.overlay.destroy(),c.uiDialog.unbind("keypress.ui-dialog"),c._isOpen=!1,c.options.hide?c.uiDialog.hide(c.options.hide,function(){c._trigger("close",b)}):(c.uiDialog.hide(),c._trigger("close",b)),a.ui.dialog.overlay.resize(),c.options.modal&&(d=0,a(".ui-dialog").each(function(){this!==c.uiDialog[0]&&(e=a(this).css("z-index"),isNaN(e)||(d=Math.max(d,e)))}),a.ui.dialog.maxZ=d),c},isOpen:function(){return this._isOpen},moveToTop:function(b,c){var d=this,e=d.options,f;return e.modal&&!b||!e.stack&&!e.modal?d._trigger("focus",c):(e.zIndex>a.ui.dialog.maxZ&&(a.ui.dialog.maxZ=e.zIndex),d.overlay&&(a.ui.dialog.maxZ+=1,d.overlay.$el.css("z-index",a.ui.dialog.overlay.maxZ=a.ui.dialog.maxZ)),f={scrollTop:d.element.scrollTop(),scrollLeft:d.element.scrollLeft()},a.ui.dialog.maxZ+=1,d.uiDialog.css("z-index",a.ui.dialog.maxZ),d.element.attr(f),d._trigger("focus",c),d)},open:function(){if(this._isOpen)return;var b=this,c=b.options,d=b.uiDialog;return b.overlay=c.modal?new a.ui.dialog.overlay(b):null,b._size(),b._position(c.position),d.show(c.show),b.moveToTop(!0),c.modal&&d.bind("keydown.ui-dialog",function(b){if(b.keyCode!==a.ui.keyCode.TAB)return;var c=a(":tabbable",this),d=c.filter(":first"),e=c.filter(":last");if(b.target===e[0]&&!b.shiftKey)return d.focus(1),!1;if(b.target===d[0]&&b.shiftKey)return e.focus(1),!1}),a(b.element.find(":tabbable").get().concat(d.find(".ui-dialog-buttonpane :tabbable").get().concat(d.get()))).eq(0).focus(),b._isOpen=!0,b._trigger("open"),b},_createButtons:function(b){var c=this,d=!1,e=a("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),g=a("<div></div>").addClass("ui-dialog-buttonset").appendTo(e);c.uiDialog.find(".ui-dialog-buttonpane").remove(),typeof b=="object"&&b!==null&&a.each(b,function(){return!(d=!0)}),d&&(a.each(b,function(b,d){d=a.isFunction(d)?{click:d,text:b}:d;var e=a('<button type="button"></button>').click(function(){d.click.apply(c.element[0],arguments)}).appendTo(g);a.each(d,function(a,b){if(a==="click")return;a in f?e[a](b):e.attr(a,b)}),a.fn.button&&e.button()}),e.appendTo(c.uiDialog))},_makeDraggable:function(){function f(a){return{position:a.position,offset:a.offset}}var b=this,c=b.options,d=a(document),e;b.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(d,g){e=c.height==="auto"?"auto":a(this).height(),a(this).height(a(this).height()).addClass("ui-dialog-dragging"),b._trigger("dragStart",d,f(g))},drag:function(a,c){b._trigger("drag",a,f(c))},stop:function(g,h){c.position=[h.position.left-d.scrollLeft(),h.position.top-d.scrollTop()],a(this).removeClass("ui-dialog-dragging").height(e),b._trigger("dragStop",g,f(h)),a.ui.dialog.overlay.resize()}})},_makeResizable:function(c){function h(a){return{originalPosition:a.originalPosition,originalSize:a.originalSize,position:a.position,size:a.size}}c=c===b?this.options.resizable:c;var d=this,e=d.options,f=d.uiDialog.css("position"),g=typeof c=="string"?c:"n,e,s,w,se,sw,ne,nw";d.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:d.element,maxWidth:e.maxWidth,maxHeight:e.maxHeight,minWidth:e.minWidth,minHeight:d._minHeight(),handles:g,start:function(b,c){a(this).addClass("ui-dialog-resizing"),d._trigger("resizeStart",b,h(c))},resize:function(a,b){d._trigger("resize",a,h(b))},stop:function(b,c){a(this).removeClass("ui-dialog-resizing"),e.height=a(this).height(),e.width=a(this).width(),d._trigger("resizeStop",b,h(c)),a.ui.dialog.overlay.resize()}}).css("position",f).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var a=this.options;return a.height==="auto"?a.minHeight:Math.min(a.minHeight,a.height)},_position:function(b){var c=[],d=[0,0],e;if(b){if(typeof b=="string"||typeof b=="object"&&"0"in b)c=b.split?b.split(" "):[b[0],b[1]],c.length===1&&(c[1]=c[0]),a.each(["left","top"],function(a,b){+c[a]===c[a]&&(d[a]=c[a],c[a]=b)}),b={my:c.join(" "),at:c.join(" "),offset:d.join(" ")};b=a.extend({},a.ui.dialog.prototype.options.position,b)}else b=a.ui.dialog.prototype.options.position;e=this.uiDialog.is(":visible"),e||this.uiDialog.show(),this.uiDialog.css({top:0,left:0}).position(a.extend({of:window},b)),e||this.uiDialog.hide()},_setOptions:function(b){var c=this,f={},g=!1;a.each(b,function(a,b){c._setOption(a,b),a in d&&(g=!0),a in e&&(f[a]=b)}),g&&this._size(),this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",f)},_setOption:function(b,d){var e=this,f=e.uiDialog;switch(b){case"beforeclose":b="beforeClose";break;case"buttons":e._createButtons(d);break;case"closeText":e.uiDialogTitlebarCloseText.text(""+d);break;case"dialogClass":f.removeClass(e.options.dialogClass).addClass(c+d);break;case"disabled":d?f.addClass("ui-dialog-disabled"):f.removeClass("ui-dialog-disabled");break;case"draggable":var g=f.is(":data(draggable)");g&&!d&&f.draggable("destroy"),!g&&d&&e._makeDraggable();break;case"position":e._position(d);break;case"resizable":var h=f.is(":data(resizable)");h&&!d&&f.resizable("destroy"),h&&typeof d=="string"&&f.resizable("option","handles",d),!h&&d!==!1&&e._makeResizable(d);break;case"title":a(".ui-dialog-title",e.uiDialogTitlebar).html(""+(d||"&#160;"))}a.Widget.prototype._setOption.apply(e,arguments)},_size:function(){var b=this.options,c,d,e=this.uiDialog.is(":visible");this.element.show().css({width:"auto",minHeight:0,height:0}),b.minWidth>b.width&&(b.width=b.minWidth),c=this.uiDialog.css({height:"auto",width:b.width}).height(),d=Math.max(0,b.minHeight-c);if(b.height==="auto")if(a.support.minHeight)this.element.css({minHeight:d,height:"auto"});else{this.uiDialog.show();var f=this.element.css("height","auto").height();e||this.uiDialog.hide(),this.element.height(Math.max(f,d))}else this.element.height(Math.max(b.height-c,0));this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())}}),a.extend(a.ui.dialog,{version:"1.8.22",uuid:0,maxZ:0,getTitleId:function(a){var b=a.attr("id");return b||(this.uuid+=1,b=this.uuid),"ui-dialog-title-"+b},overlay:function(b){this.$el=a.ui.dialog.overlay.create(b)}}),a.extend(a.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:a.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(a){return a+".dialog-overlay"}).join(" "),create:function(b){this.instances.length===0&&(setTimeout(function(){a.ui.dialog.overlay.instances.length&&a(document).bind(a.ui.dialog.overlay.events,function(b){if(a(b.target).zIndex()<a.ui.dialog.overlay.maxZ)return!1})},1),a(document).bind("keydown.dialog-overlay",function(c){b.options.closeOnEscape&&!c.isDefaultPrevented()&&c.keyCode&&c.keyCode===a.ui.keyCode.ESCAPE&&(b.close(c),c.preventDefault())}),a(window).bind("resize.dialog-overlay",a.ui.dialog.overlay.resize));var c=(this.oldInstances.pop()||a("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),height:this.height()});return a.fn.bgiframe&&c.bgiframe(),this.instances.push(c),c},destroy:function(b){var c=a.inArray(b,this.instances);c!=-1&&this.oldInstances.push(this.instances.splice(c,1)[0]),this.instances.length===0&&a([document,window]).unbind(".dialog-overlay"),b.remove();var d=0;a.each(this.instances,function(){d=Math.max(d,this.css("z-index"))}),this.maxZ=d},height:function(){var b,c;return a.browser.msie&&a.browser.version<7?(b=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),c=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight),b<c?a(window).height()+"px":b+"px"):a(document).height()+"px"},width:function(){var b,c;return a.browser.msie?(b=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth),c=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth),b<c?a(window).width()+"px":b+"px"):a(document).width()+"px"},resize:function(){var b=a([]);a.each(a.ui.dialog.overlay.instances,function(){b=b.add(this)}),b.css({width:0,height:0}).css({width:a.ui.dialog.overlay.width(),height:a.ui.dialog.overlay.height()})}}),a.extend(a.ui.dialog.overlay.prototype,{destroy:function(){a.ui.dialog.overlay.destroy(this.$el)}})})(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.tabs.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){function e(){return++c}function f(){return++d}var c=0,d=0;a.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:!1,cookie:null,collapsible:!1,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},_create:function(){this._tabify(!0)},_setOption:function(a,b){if(a=="selected"){if(this.options.collapsible&&b==this.options.selected)return;this.select(b)}else this.options[a]=b,this._tabify()},_tabId:function(a){return a.title&&a.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+e()},_sanitizeSelector:function(a){return a.replace(/:/g,"\\:")},_cookie:function(){var b=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+f());return a.cookie.apply(null,[b].concat(a.makeArray(arguments)))},_ui:function(a,b){return{tab:a,panel:b,index:this.anchors.index(a)}},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var b=a(this);b.html(b.data("label.tabs")).removeData("label.tabs")})},_tabify:function(c){function m(b,c){b.css("display",""),!a.support.opacity&&c.opacity&&b[0].style.removeAttribute("filter")}var d=this,e=this.options,f=/^#.+/;this.list=this.element.find("ol,ul").eq(0),this.lis=a(" > li:has(a[href])",this.list),this.anchors=this.lis.map(function(){return a("a",this)[0]}),this.panels=a([]),this.anchors.each(function(b,c){var g=a(c).attr("href"),h=g.split("#")[0],i;h&&(h===location.toString().split("#")[0]||(i=a("base")[0])&&h===i.href)&&(g=c.hash,c.href=g);if(f.test(g))d.panels=d.panels.add(d.element.find(d._sanitizeSelector(g)));else if(g&&g!=="#"){a.data(c,"href.tabs",g),a.data(c,"load.tabs",g.replace(/#.*$/,""));var j=d._tabId(c);c.href="#"+j;var k=d.element.find("#"+j);k.length||(k=a(e.panelTemplate).attr("id",j).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(d.panels[b-1]||d.list),k.data("destroy.tabs",!0)),d.panels=d.panels.add(k)}else e.disabled.push(b)}),c?(this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all"),this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"),this.lis.addClass("ui-state-default ui-corner-top"),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom"),e.selected===b?(location.hash&&this.anchors.each(function(a,b){if(b.hash==location.hash)return e.selected=a,!1}),typeof e.selected!="number"&&e.cookie&&(e.selected=parseInt(d._cookie(),10)),typeof e.selected!="number"&&this.lis.filter(".ui-tabs-selected").length&&(e.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))),e.selected=e.selected||(this.lis.length?0:-1)):e.selected===null&&(e.selected=-1),e.selected=e.selected>=0&&this.anchors[e.selected]||e.selected<0?e.selected:0,e.disabled=a.unique(e.disabled.concat(a.map(this.lis.filter(".ui-state-disabled"),function(a,b){return d.lis.index(a)}))).sort(),a.inArray(e.selected,e.disabled)!=-1&&e.disabled.splice(a.inArray(e.selected,e.disabled),1),this.panels.addClass("ui-tabs-hide"),this.lis.removeClass("ui-tabs-selected ui-state-active"),e.selected>=0&&this.anchors.length&&(d.element.find(d._sanitizeSelector(d.anchors[e.selected].hash)).removeClass("ui-tabs-hide"),this.lis.eq(e.selected).addClass("ui-tabs-selected ui-state-active"),d.element.queue("tabs",function(){d._trigger("show",null,d._ui(d.anchors[e.selected],d.element.find(d._sanitizeSelector(d.anchors[e.selected].hash))[0]))}),this.load(e.selected)),a(window).bind("unload",function(){d.lis.add(d.anchors).unbind(".tabs"),d.lis=d.anchors=d.panels=null})):e.selected=this.lis.index(this.lis.filter(".ui-tabs-selected")),this.element[e.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible"),e.cookie&&this._cookie(e.selected,e.cookie);for(var g=0,h;h=this.lis[g];g++)a(h)[a.inArray(g,e.disabled)!=-1&&!a(h).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled");e.cache===!1&&this.anchors.removeData("cache.tabs"),this.lis.add(this.anchors).unbind(".tabs");if(e.event!=="mouseover"){var i=function(a,b){b.is(":not(.ui-state-disabled)")&&b.addClass("ui-state-"+a)},j=function(a,b){b.removeClass("ui-state-"+a)};this.lis.bind("mouseover.tabs",function(){i("hover",a(this))}),this.lis.bind("mouseout.tabs",function(){j("hover",a(this))}),this.anchors.bind("focus.tabs",function(){i("focus",a(this).closest("li"))}),this.anchors.bind("blur.tabs",function(){j("focus",a(this).closest("li"))})}var k,l;e.fx&&(a.isArray(e.fx)?(k=e.fx[0],l=e.fx[1]):k=l=e.fx);var n=l?function(b,c){a(b).closest("li").addClass("ui-tabs-selected ui-state-active"),c.hide().removeClass("ui-tabs-hide").animate(l,l.duration||"normal",function(){m(c,l),d._trigger("show",null,d._ui(b,c[0]))})}:function(b,c){a(b).closest("li").addClass("ui-tabs-selected ui-state-active"),c.removeClass("ui-tabs-hide"),d._trigger("show",null,d._ui(b,c[0]))},o=k?function(a,b){b.animate(k,k.duration||"normal",function(){d.lis.removeClass("ui-tabs-selected ui-state-active"),b.addClass("ui-tabs-hide"),m(b,k),d.element.dequeue("tabs")})}:function(a,b,c){d.lis.removeClass("ui-tabs-selected ui-state-active"),b.addClass("ui-tabs-hide"),d.element.dequeue("tabs")};this.anchors.bind(e.event+".tabs",function(){var b=this,c=a(b).closest("li"),f=d.panels.filter(":not(.ui-tabs-hide)"),g=d.element.find(d._sanitizeSelector(b.hash));if(c.hasClass("ui-tabs-selected")&&!e.collapsible||c.hasClass("ui-state-disabled")||c.hasClass("ui-state-processing")||d.panels.filter(":animated").length||d._trigger("select",null,d._ui(this,g[0]))===!1)return this.blur(),!1;e.selected=d.anchors.index(this),d.abort();if(e.collapsible){if(c.hasClass("ui-tabs-selected"))return e.selected=-1,e.cookie&&d._cookie(e.selected,e.cookie),d.element.queue("tabs",function(){o(b,f)}).dequeue("tabs"),this.blur(),!1;if(!f.length)return e.cookie&&d._cookie(e.selected,e.cookie),d.element.queue("tabs",function(){n(b,g)}),d.load(d.anchors.index(this)),this.blur(),!1}e.cookie&&d._cookie(e.selected,e.cookie);if(g.length)f.length&&d.element.queue("tabs",function(){o(b,f)}),d.element.queue("tabs",function(){n(b,g)}),d.load(d.anchors.index(this));else throw"jQuery UI Tabs: Mismatching fragment identifier.";a.browser.msie&&this.blur()}),this.anchors.bind("click.tabs",function(){return!1})},_getIndex:function(a){return typeof a=="string"&&(a=this.anchors.index(this.anchors.filter("[href$='"+a+"']"))),a},destroy:function(){var b=this.options;return this.abort(),this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs"),this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"),this.anchors.each(function(){var b=a.data(this,"href.tabs");b&&(this.href=b);var c=a(this).unbind(".tabs");a.each(["href","load","cache"],function(a,b){c.removeData(b+".tabs")})}),this.lis.unbind(".tabs").add(this.panels).each(function(){a.data(this,"destroy.tabs")?a(this).remove():a(this).removeClass(["ui-state-default","ui-corner-top","ui-tabs-selected","ui-state-active","ui-state-hover","ui-state-focus","ui-state-disabled","ui-tabs-panel","ui-widget-content","ui-corner-bottom","ui-tabs-hide"].join(" "))}),b.cookie&&this._cookie(null,b.cookie),this},add:function(c,d,e){e===b&&(e=this.anchors.length);var f=this,g=this.options,h=a(g.tabTemplate.replace(/#\{href\}/g,c).replace(/#\{label\}/g,d)),i=c.indexOf("#")?this._tabId(a("a",h)[0]):c.replace("#","");h.addClass("ui-state-default ui-corner-top").data("destroy.tabs",!0);var j=f.element.find("#"+i);return j.length||(j=a(g.panelTemplate).attr("id",i).data("destroy.tabs",!0)),j.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide"),e>=this.lis.length?(h.appendTo(this.list),j.appendTo(this.list[0].parentNode)):(h.insertBefore(this.lis[e]),j.insertBefore(this.panels[e])),g.disabled=a.map(g.disabled,function(a,b){return a>=e?++a:a}),this._tabify(),this.anchors.length==1&&(g.selected=0,h.addClass("ui-tabs-selected ui-state-active"),j.removeClass("ui-tabs-hide"),this.element.queue("tabs",function(){f._trigger("show",null,f._ui(f.anchors[0],f.panels[0]))}),this.load(0)),this._trigger("add",null,this._ui(this.anchors[e],this.panels[e])),this},remove:function(b){b=this._getIndex(b);var c=this.options,d=this.lis.eq(b).remove(),e=this.panels.eq(b).remove();return d.hasClass("ui-tabs-selected")&&this.anchors.length>1&&this.select(b+(b+1<this.anchors.length?1:-1)),c.disabled=a.map(a.grep(c.disabled,function(a,c){return a!=b}),function(a,c){return a>=b?--a:a}),this._tabify(),this._trigger("remove",null,this._ui(d.find("a")[0],e[0])),this},enable:function(b){b=this._getIndex(b);var c=this.options;if(a.inArray(b,c.disabled)==-1)return;return this.lis.eq(b).removeClass("ui-state-disabled"),c.disabled=a.grep(c.disabled,function(a,c){return a!=b}),this._trigger("enable",null,this._ui(this.anchors[b],this.panels[b])),this},disable:function(a){a=this._getIndex(a);var b=this,c=this.options;return a!=c.selected&&(this.lis.eq(a).addClass("ui-state-disabled"),c.disabled.push(a),c.disabled.sort(),this._trigger("disable",null,this._ui(this.anchors[a],this.panels[a]))),this},select:function(a){a=this._getIndex(a);if(a==-1)if(this.options.collapsible&&this.options.selected!=-1)a=this.options.selected;else return this;return this.anchors.eq(a).trigger(this.options.event+".tabs"),this},load:function(b){b=this._getIndex(b);var c=this,d=this.options,e=this.anchors.eq(b)[0],f=a.data(e,"load.tabs");this.abort();if(!f||this.element.queue("tabs").length!==0&&a.data(e,"cache.tabs")){this.element.dequeue("tabs");return}this.lis.eq(b).addClass("ui-state-processing");if(d.spinner){var g=a("span",e);g.data("label.tabs",g.html()).html(d.spinner)}return this.xhr=a.ajax(a.extend({},d.ajaxOptions,{url:f,success:function(f,g){c.element.find(c._sanitizeSelector(e.hash)).html(f),c._cleanup(),d.cache&&a.data(e,"cache.tabs",!0),c._trigger("load",null,c._ui(c.anchors[b],c.panels[b]));try{d.ajaxOptions.success(f,g)}catch(h){}},error:function(a,f,g){c._cleanup(),c._trigger("load",null,c._ui(c.anchors[b],c.panels[b]));try{d.ajaxOptions.error(a,f,b,e)}catch(g){}}})),c.element.dequeue("tabs"),this},abort:function(){return this.element.queue([]),this.panels.stop(!1,!0),this.element.queue("tabs",this.element.queue("tabs").splice(-2,2)),this.xhr&&(this.xhr.abort(),delete this.xhr),this._cleanup(),this},url:function(a,b){return this.anchors.eq(a).removeData("cache.tabs").data("load.tabs",b),this},length:function(){return this.anchors.length}}),a.extend(a.ui.tabs,{version:"1.8.22"}),a.extend(a.ui.tabs.prototype,{rotation:null,rotate:function(a,b){var c=this,d=this.options,e=c._rotate||(c._rotate=function(b){clearTimeout(c.rotation),c.rotation=setTimeout(function(){var a=d.selected;c.select(++a<c.anchors.length?a:0)},a),b&&b.stopPropagation()}),f=c._unrotate||(c._unrotate=b?function(a){e()}:function(a){a.clientX&&c.rotate(null)});return a?(this.element.bind("tabsshow",e),this.anchors.bind(d.event+".tabs",f),e()):(clearTimeout(c.rotation),this.element.unbind("tabsshow",e),this.anchors.unbind(d.event+".tabs",f),delete this._rotate,delete this._unrotate),this}})})(jQuery);;/*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.datepicker.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function($,undefined){function Datepicker(){this.debug=!1,this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},$.extend(this._defaults,this.regional[""]),this.dpDiv=bindHover($('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}function bindHover(a){var b="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return a.bind("mouseout",function(a){var c=$(a.target).closest(b);if(!c.length)return;c.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")}).bind("mouseover",function(c){var d=$(c.target).closest(b);if($.datepicker._isDisabledDatepicker(instActive.inline?a.parent()[0]:instActive.input[0])||!d.length)return;d.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),d.addClass("ui-state-hover"),d.hasClass("ui-datepicker-prev")&&d.addClass("ui-datepicker-prev-hover"),d.hasClass("ui-datepicker-next")&&d.addClass("ui-datepicker-next-hover")})}function extendRemove(a,b){$.extend(a,b);for(var c in b)if(b[c]==null||b[c]==undefined)a[c]=b[c];return a}function isArray(a){return a&&($.browser.safari&&typeof a=="object"&&a.length||a.constructor&&a.constructor.toString().match(/\Array\(\)/))}$.extend($.ui,{datepicker:{version:"1.8.22"}});var PROP_NAME="datepicker",dpuuid=(new Date).getTime(),instActive;$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(a){return extendRemove(this._defaults,a||{}),this},_attachDatepicker:function(target,settings){var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}}var nodeName=target.nodeName.toLowerCase(),inline=nodeName=="div"||nodeName=="span";target.id||(this.uuid+=1,target.id="dp"+this.uuid);var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{}),nodeName=="input"?this._connectDatepicker(target,inst):inline&&this._inlineDatepicker(target,inst)},_newInst:function(a,b){var c=a[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");return{id:c,input:a,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:b,dpDiv:b?bindHover($('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')):this.dpDiv}},_connectDatepicker:function(a,b){var c=$(a);b.append=$([]),b.trigger=$([]);if(c.hasClass(this.markerClassName))return;this._attachments(c,b),c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(a,c,d){b.settings[c]=d}).bind("getData.datepicker",function(a,c){return this._get(b,c)}),this._autoSize(b),$.data(a,PROP_NAME,b),b.settings.disabled&&this._disableDatepicker(a)},_attachments:function(a,b){var c=this._get(b,"appendText"),d=this._get(b,"isRTL");b.append&&b.append.remove(),c&&(b.append=$('<span class="'+this._appendClass+'">'+c+"</span>"),a[d?"before":"after"](b.append)),a.unbind("focus",this._showDatepicker),b.trigger&&b.trigger.remove();var e=this._get(b,"showOn");(e=="focus"||e=="both")&&a.focus(this._showDatepicker);if(e=="button"||e=="both"){var f=this._get(b,"buttonText"),g=this._get(b,"buttonImage");b.trigger=$(this._get(b,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:g,alt:f,title:f}):$('<button type="button"></button>').addClass(this._triggerClass).html(g==""?f:$("<img/>").attr({src:g,alt:f,title:f}))),a[d?"before":"after"](b.trigger),b.trigger.click(function(){return $.datepicker._datepickerShowing&&$.datepicker._lastInput==a[0]?$.datepicker._hideDatepicker():$.datepicker._datepickerShowing&&$.datepicker._lastInput!=a[0]?($.datepicker._hideDatepicker(),$.datepicker._showDatepicker(a[0])):$.datepicker._showDatepicker(a[0]),!1})}},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b=new Date(2009,11,20),c=this._get(a,"dateFormat");if(c.match(/[DM]/)){var d=function(a){var b=0,c=0;for(var d=0;d<a.length;d++)a[d].length>b&&(b=a[d].length,c=d);return c};b.setMonth(d(this._get(a,c.match(/MM/)?"monthNames":"monthNamesShort"))),b.setDate(d(this._get(a,c.match(/DD/)?"dayNames":"dayNamesShort"))+20-b.getDay())}a.input.attr("size",this._formatDate(a,b).length)}},_inlineDatepicker:function(a,b){var c=$(a);if(c.hasClass(this.markerClassName))return;c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker",function(a,c,d){b.settings[c]=d}).bind("getData.datepicker",function(a,c){return this._get(b,c)}),$.data(a,PROP_NAME,b),this._setDate(b,this._getDefaultDate(b),!0),this._updateDatepicker(b),this._updateAlternate(b),b.settings.disabled&&this._disableDatepicker(a),b.dpDiv.css("display","block")},_dialogDatepicker:function(a,b,c,d,e){var f=this._dialogInst;if(!f){this.uuid+=1;var g="dp"+this.uuid;this._dialogInput=$('<input type="text" id="'+g+'" style="position: absolute; top: -100px; width: 0px;"/>'),this._dialogInput.keydown(this._doKeyDown),$("body").append(this._dialogInput),f=this._dialogInst=this._newInst(this._dialogInput,!1),f.settings={},$.data(this._dialogInput[0],PROP_NAME,f)}extendRemove(f.settings,d||{}),b=b&&b.constructor==Date?this._formatDate(f,b):b,this._dialogInput.val(b),this._pos=e?e.length?e:[e.pageX,e.pageY]:null;if(!this._pos){var h=document.documentElement.clientWidth,i=document.documentElement.clientHeight,j=document.documentElement.scrollLeft||document.body.scrollLeft,k=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[h/2-100+j,i/2-150+k]}return this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),f.settings.onSelect=c,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),$.blockUI&&$.blockUI(this.dpDiv),$.data(this._dialogInput[0],PROP_NAME,f),this},_destroyDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!b.hasClass(this.markerClassName))return;var d=a.nodeName.toLowerCase();$.removeData(a,PROP_NAME),d=="input"?(c.append.remove(),c.trigger.remove(),b.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):(d=="div"||d=="span")&&b.removeClass(this.markerClassName).empty()},_enableDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!b.hasClass(this.markerClassName))return;var d=a.nodeName.toLowerCase();if(d=="input")a.disabled=!1,c.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""});else if(d=="div"||d=="span"){var e=b.children("."+this._inlineClass);e.children().removeClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")}this._disabledInputs=$.map(this._disabledInputs,function(b){return b==a?null:b})},_disableDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!b.hasClass(this.markerClassName))return;var d=a.nodeName.toLowerCase();if(d=="input")a.disabled=!0,c.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"});else if(d=="div"||d=="span"){var e=b.children("."+this._inlineClass);e.children().addClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled","disabled")}this._disabledInputs=$.map(this._disabledInputs,function(b){return b==a?null:b}),this._disabledInputs[this._disabledInputs.length]=a},_isDisabledDatepicker:function(a){if(!a)return!1;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]==a)return!0;return!1},_getInst:function(a){try{return $.data(a,PROP_NAME)}catch(b){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(a,b,c){var d=this._getInst(a);if(arguments.length==2&&typeof b=="string")return b=="defaults"?$.extend({},$.datepicker._defaults):d?b=="all"?$.extend({},d.settings):this._get(d,b):null;var e=b||{};typeof b=="string"&&(e={},e[b]=c);if(d){this._curInst==d&&this._hideDatepicker();var f=this._getDateDatepicker(a,!0),g=this._getMinMaxDate(d,"min"),h=this._getMinMaxDate(d,"max");extendRemove(d.settings,e),g!==null&&e.dateFormat!==undefined&&e.minDate===undefined&&(d.settings.minDate=this._formatDate(d,g)),h!==null&&e.dateFormat!==undefined&&e.maxDate===undefined&&(d.settings.maxDate=this._formatDate(d,h)),this._attachments($(a),d),this._autoSize(d),this._setDate(d,f),this._updateAlternate(d),this._updateDatepicker(d)}},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){var b=this._getInst(a);b&&this._updateDatepicker(b)},_setDateDatepicker:function(a,b){var c=this._getInst(a);c&&(this._setDate(c,b),this._updateDatepicker(c),this._updateAlternate(c))},_getDateDatepicker:function(a,b){var c=this._getInst(a);return c&&!c.inline&&this._setDateFromField(c,b),c?this._getDate(c):null},_doKeyDown:function(a){var b=$.datepicker._getInst(a.target),c=!0,d=b.dpDiv.is(".ui-datepicker-rtl");b._keyEvent=!0;if($.datepicker._datepickerShowing)switch(a.keyCode){case 9:$.datepicker._hideDatepicker(),c=!1;break;case 13:var e=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",b.dpDiv);e[0]&&$.datepicker._selectDay(a.target,b.selectedMonth,b.selectedYear,e[0]);var f=$.datepicker._get(b,"onSelect");if(f){var g=$.datepicker._formatDate(b);f.apply(b.input?b.input[0]:null,[g,b])}else $.datepicker._hideDatepicker();return!1;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(a.target,a.ctrlKey?-$.datepicker._get(b,"stepBigMonths"):-$.datepicker._get(b,"stepMonths"),"M");break;case 34:$.datepicker._adjustDate(a.target,a.ctrlKey?+$.datepicker._get(b,"stepBigMonths"):+$.datepicker._get(b,"stepMonths"),"M");break;case 35:(a.ctrlKey||a.metaKey)&&$.datepicker._clearDate(a.target),c=a.ctrlKey||a.metaKey;break;case 36:(a.ctrlKey||a.metaKey)&&$.datepicker._gotoToday(a.target),c=a.ctrlKey||a.metaKey;break;case 37:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,d?1:-1,"D"),c=a.ctrlKey||a.metaKey,a.originalEvent.altKey&&$.datepicker._adjustDate(a.target,a.ctrlKey?-$.datepicker._get(b,"stepBigMonths"):-$.datepicker._get(b,"stepMonths"),"M");break;case 38:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,-7,"D"),c=a.ctrlKey||a.metaKey;break;case 39:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,d?-1:1,"D"),c=a.ctrlKey||a.metaKey,a.originalEvent.altKey&&$.datepicker._adjustDate(a.target,a.ctrlKey?+$.datepicker._get(b,"stepBigMonths"):+$.datepicker._get(b,"stepMonths"),"M");break;case 40:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,7,"D"),c=a.ctrlKey||a.metaKey;break;default:c=!1}else a.keyCode==36&&a.ctrlKey?$.datepicker._showDatepicker(this):c=!1;c&&(a.preventDefault(),a.stopPropagation())},_doKeyPress:function(a){var b=$.datepicker._getInst(a.target);if($.datepicker._get(b,"constrainInput")){var c=$.datepicker._possibleChars($.datepicker._get(b,"dateFormat")),d=String.fromCharCode(a.charCode==undefined?a.keyCode:a.charCode);return a.ctrlKey||a.metaKey||d<" "||!c||c.indexOf(d)>-1}},_doKeyUp:function(a){var b=$.datepicker._getInst(a.target);if(b.input.val()!=b.lastVal)try{var c=$.datepicker.parseDate($.datepicker._get(b,"dateFormat"),b.input?b.input.val():null,$.datepicker._getFormatConfig(b));c&&($.datepicker._setDateFromField(b),$.datepicker._updateAlternate(b),$.datepicker._updateDatepicker(b))}catch(d){$.datepicker.log(d)}return!0},_showDatepicker:function(a){a=a.target||a,a.nodeName.toLowerCase()!="input"&&(a=$("input",a.parentNode)[0]);if($.datepicker._isDisabledDatepicker(a)||$.datepicker._lastInput==a)return;var b=$.datepicker._getInst(a);$.datepicker._curInst&&$.datepicker._curInst!=b&&($.datepicker._curInst.dpDiv.stop(!0,!0),b&&$.datepicker._datepickerShowing&&$.datepicker._hideDatepicker($.datepicker._curInst.input[0]));var c=$.datepicker._get(b,"beforeShow"),d=c?c.apply(a,[a,b]):{};if(d===!1)return;extendRemove(b.settings,d),b.lastVal=null,$.datepicker._lastInput=a,$.datepicker._setDateFromField(b),$.datepicker._inDialog&&(a.value=""),$.datepicker._pos||($.datepicker._pos=$.datepicker._findPos(a),$.datepicker._pos[1]+=a.offsetHeight);var e=!1;$(a).parents().each(function(){return e|=$(this).css("position")=="fixed",!e}),e&&($.datepicker._pos[0]-=document.documentElement.scrollLeft,$.datepicker._pos[1]-=document.documentElement.scrollTop);var f={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null,b.dpDiv.empty(),b.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),$.datepicker._updateDatepicker(b),f=$.datepicker._checkOffset(b,f,e),b.dpDiv.css({position:$.datepicker._inDialog&&$.blockUI?"static":e?"fixed":"absolute",display:"none",left:f.left+"px",top:f.top+"px"});if(!b.inline){var g=$.datepicker._get(b,"showAnim"),h=$.datepicker._get(b,"duration"),i=function(){var a=b.dpDiv.find("iframe.ui-datepicker-cover");if(!!a.length){var c=$.datepicker._getBorders(b.dpDiv);a.css({left:-c[0],top:-c[1],width:b.dpDiv.outerWidth(),height:b.dpDiv.outerHeight()})}};b.dpDiv.zIndex($(a).zIndex()+1),$.datepicker._datepickerShowing=!0,$.effects&&$.effects[g]?b.dpDiv.show(g,$.datepicker._get(b,"showOptions"),h,i):b.dpDiv[g||"show"](g?h:null,i),(!g||!h)&&i(),b.input.is(":visible")&&!b.input.is(":disabled")&&b.input.focus(),$.datepicker._curInst=b}},_updateDatepicker:function(a){var b=this;b.maxRows=4;var c=$.datepicker._getBorders(a.dpDiv);instActive=a,a.dpDiv.empty().append(this._generateHTML(a)),this._attachHandlers(a);var d=a.dpDiv.find("iframe.ui-datepicker-cover");!d.length||d.css({left:-c[0],top:-c[1],width:a.dpDiv.outerWidth(),height:a.dpDiv.outerHeight()}),a.dpDiv.find("."+this._dayOverClass+" a").mouseover();var e=this._getNumberOfMonths(a),f=e[1],g=17;a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),f>1&&a.dpDiv.addClass("ui-datepicker-multi-"+f).css("width",g*f+"em"),a.dpDiv[(e[0]!=1||e[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi"),a.dpDiv[(this._get(a,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),a==$.datepicker._curInst&&$.datepicker._datepickerShowing&&a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&a.input[0]!=document.activeElement&&a.input.focus();if(a.yearshtml){var h=a.yearshtml;setTimeout(function(){h===a.yearshtml&&a.yearshtml&&a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml),h=a.yearshtml=null},0)}},_getBorders:function(a){var b=function(a){return{thin:1,medium:2,thick:3}[a]||a};return[parseFloat(b(a.css("border-left-width"))),parseFloat(b(a.css("border-top-width")))]},_checkOffset:function(a,b,c){var d=a.dpDiv.outerWidth(),e=a.dpDiv.outerHeight(),f=a.input?a.input.outerWidth():0,g=a.input?a.input.outerHeight():0,h=document.documentElement.clientWidth+(c?0:$(document).scrollLeft()),i=document.documentElement.clientHeight+(c?0:$(document).scrollTop());return b.left-=this._get(a,"isRTL")?d-f:0,b.left-=c&&b.left==a.input.offset().left?$(document).scrollLeft():0,b.top-=c&&b.top==a.input.offset().top+g?$(document).scrollTop():0,b.left-=Math.min(b.left,b.left+d>h&&h>d?Math.abs(b.left+d-h):0),b.top-=Math.min(b.top,b.top+e>i&&i>e?Math.abs(e+g):0),b},_findPos:function(a){var b=this._getInst(a),c=this._get(b,"isRTL");while(a&&(a.type=="hidden"||a.nodeType!=1||$.expr.filters.hidden(a)))a=a[c?"previousSibling":"nextSibling"];var d=$(a).offset();return[d.left,d.top]},_hideDatepicker:function(a){var b=this._curInst;if(!b||a&&b!=$.data(a,PROP_NAME))return;if(this._datepickerShowing){var c=this._get(b,"showAnim"),d=this._get(b,"duration"),e=function(){$.datepicker._tidyDialog(b)};$.effects&&$.effects[c]?b.dpDiv.hide(c,$.datepicker._get(b,"showOptions"),d,e):b.dpDiv[c=="slideDown"?"slideUp":c=="fadeIn"?"fadeOut":"hide"](c?d:null,e),c||e(),this._datepickerShowing=!1;var f=this._get(b,"onClose");f&&f.apply(b.input?b.input[0]:null,[b.input?b.input.val():"",b]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),$.blockUI&&($.unblockUI(),$("body").append(this.dpDiv))),this._inDialog=!1}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(a){if(!$.datepicker._curInst)return;var b=$(a.target),c=$.datepicker._getInst(b[0]);(b[0].id!=$.datepicker._mainDivId&&b.parents("#"+$.datepicker._mainDivId).length==0&&!b.hasClass($.datepicker.markerClassName)&&!b.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&(!$.datepicker._inDialog||!$.blockUI)||b.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!=c)&&$.datepicker._hideDatepicker()},_adjustDate:function(a,b,c){var d=$(a),e=this._getInst(d[0]);if(this._isDisabledDatepicker(d[0]))return;this._adjustInstDate(e,b+(c=="M"?this._get(e,"showCurrentAtPos"):0),c),this._updateDatepicker(e)},_gotoToday:function(a){var b=$(a),c=this._getInst(b[0]);if(this._get(c,"gotoCurrent")&&c.currentDay)c.selectedDay=c.currentDay,c.drawMonth=c.selectedMonth=c.currentMonth,c.drawYear=c.selectedYear=c.currentYear;else{var d=new Date;c.selectedDay=d.getDate(),c.drawMonth=c.selectedMonth=d.getMonth(),c.drawYear=c.selectedYear=d.getFullYear()}this._notifyChange(c),this._adjustDate(b)},_selectMonthYear:function(a,b,c){var d=$(a),e=this._getInst(d[0]);e["selected"+(c=="M"?"Month":"Year")]=e["draw"+(c=="M"?"Month":"Year")]=parseInt(b.options[b.selectedIndex].value,10),this._notifyChange(e),this._adjustDate(d)},_selectDay:function(a,b,c,d){var e=$(a);if($(d).hasClass(this._unselectableClass)||this._isDisabledDatepicker(e[0]))return;var f=this._getInst(e[0]);f.selectedDay=f.currentDay=$("a",d).html(),f.selectedMonth=f.currentMonth=b,f.selectedYear=f.currentYear=c,this._selectDate(a,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear))},_clearDate:function(a){var b=$(a),c=this._getInst(b[0]);this._selectDate(b,"")},_selectDate:function(a,b){var c=$(a),d=this._getInst(c[0]);b=b!=null?b:this._formatDate(d),d.input&&d.input.val(b),this._updateAlternate(d);var e=this._get(d,"onSelect");e?e.apply(d.input?d.input[0]:null,[b,d]):d.input&&d.input.trigger("change"),d.inline?this._updateDatepicker(d):(this._hideDatepicker(),this._lastInput=d.input[0],typeof d.input[0]!="object"&&d.input.focus(),this._lastInput=null)},_updateAlternate:function(a){var b=this._get(a,"altField");if(b){var c=this._get(a,"altFormat")||this._get(a,"dateFormat"),d=this._getDate(a),e=this.formatDate(c,d,this._getFormatConfig(a));$(b).each(function(){$(this).val(e)})}},noWeekends:function(a){var b=a.getDay();return[b>0&&b<6,""]},iso8601Week:function(a){var b=new Date(a.getTime());b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1},parseDate:function(a,b,c){if(a==null||b==null)throw"Invalid arguments";b=typeof b=="object"?b.toString():b+"";if(b=="")return null;var d=(c?c.shortYearCutoff:null)||this._defaults.shortYearCutoff;d=typeof d!="string"?d:(new Date).getFullYear()%100+parseInt(d,10);var e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,g=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,h=(c?c.monthNames:null)||this._defaults.monthNames,i=-1,j=-1,k=-1,l=-1,m=!1,n=function(b){var c=s+1<a.length&&a.charAt(s+1)==b;return c&&s++,c},o=function(a){var c=n(a),d=a=="@"?14:a=="!"?20:a=="y"&&c?4:a=="o"?3:2,e=new RegExp("^\\d{1,"+d+"}"),f=b.substring(r).match(e);if(!f)throw"Missing number at position "+r;return r+=f[0].length,parseInt(f[0],10)},p=function(a,c,d){var e=$.map(n(a)?d:c,function(a,b){return[[b,a]]}).sort(function(a,b){return-(a[1].length-b[1].length)}),f=-1;$.each(e,function(a,c){var d=c[1];if(b.substr(r,d.length).toLowerCase()==d.toLowerCase())return f=c[0],r+=d.length,!1});if(f!=-1)return f+1;throw"Unknown name at position "+r},q=function(){if(b.charAt(r)!=a.charAt(s))throw"Unexpected literal at position "+r;r++},r=0;for(var s=0;s<a.length;s++)if(m)a.charAt(s)=="'"&&!n("'")?m=!1:q();else switch(a.charAt(s)){case"d":k=o("d");break;case"D":p("D",e,f);break;case"o":l=o("o");break;case"m":j=o("m");break;case"M":j=p("M",g,h);break;case"y":i=o("y");break;case"@":var t=new Date(o("@"));i=t.getFullYear(),j=t.getMonth()+1,k=t.getDate();break;case"!":var t=new Date((o("!")-this._ticksTo1970)/1e4);i=t.getFullYear(),j=t.getMonth()+1,k=t.getDate();break;case"'":n("'")?q():m=!0;break;default:q()}if(r<b.length)throw"Extra/unparsed characters found in date: "+b.substring(r);i==-1?i=(new Date).getFullYear():i<100&&(i+=(new Date).getFullYear()-(new Date).getFullYear()%100+(i<=d?0:-100));if(l>-1){j=1,k=l;do{var u=this._getDaysInMonth(i,j-1);if(k<=u)break;j++,k-=u}while(!0)}var t=this._daylightSavingAdjust(new Date(i,j-1,k));if(t.getFullYear()!=i||t.getMonth()+1!=j||t.getDate()!=k)throw"Invalid date";return t},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1e7,formatDate:function(a,b,c){if(!b)return"";var d=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,e=(c?c.dayNames:null)||this._defaults.dayNames,f=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,g=(c?c.monthNames:null)||this._defaults.monthNames,h=function(b){var c=m+1<a.length&&a.charAt(m+1)==b;return c&&m++,c},i=function(a,b,c){var d=""+b;if(h(a))while(d.length<c)d="0"+d;return d},j=function(a,b,c,d){return h(a)?d[b]:c[b]},k="",l=!1;if(b)for(var m=0;m<a.length;m++)if(l)a.charAt(m)=="'"&&!h("'")?l=!1:k+=a.charAt(m);else switch(a.charAt(m)){case"d":k+=i("d",b.getDate(),2);break;case"D":k+=j("D",b.getDay(),d,e);break;case"o":k+=i("o",Math.round(((new Date(b.getFullYear(),b.getMonth(),b.getDate())).getTime()-(new Date(b.getFullYear(),0,0)).getTime())/864e5),3);break;case"m":k+=i("m",b.getMonth()+1,2);break;case"M":k+=j("M",b.getMonth(),f,g);break;case"y":k+=h("y")?b.getFullYear():(b.getYear()%100<10?"0":"")+b.getYear()%100;break;case"@":k+=b.getTime();break;case"!":k+=b.getTime()*1e4+this._ticksTo1970;break;case"'":h("'")?k+="'":l=!0;break;default:k+=a.charAt(m)}return k},_possibleChars:function(a){var b="",c=!1,d=function(b){var c=e+1<a.length&&a.charAt(e+1)==b;return c&&e++,c};for(var e=0;e<a.length;e++)if(c)a.charAt(e)=="'"&&!d("'")?c=!1:b+=a.charAt(e);else switch(a.charAt(e)){case"d":case"m":case"y":case"@":b+="0123456789";break;case"D":case"M":return null;case"'":d("'")?b+="'":c=!0;break;default:b+=a.charAt(e)}return b},_get:function(a,b){return a.settings[b]!==undefined?a.settings[b]:this._defaults[b]},_setDateFromField:function(a,b){if(a.input.val()==a.lastVal)return;var c=this._get(a,"dateFormat"),d=a.lastVal=a.input?a.input.val():null,e,f;e=f=this._getDefaultDate(a);var g=this._getFormatConfig(a);try{e=this.parseDate(c,d,g)||f}catch(h){this.log(h),d=b?"":d}a.selectedDay=e.getDate(),a.drawMonth=a.selectedMonth=e.getMonth(),a.drawYear=a.selectedYear=e.getFullYear(),a.currentDay=d?e.getDate():0,a.currentMonth=d?e.getMonth():0,a.currentYear=d?e.getFullYear():0,this._adjustInstDate(a)},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(a,b,c){var d=function(a){var b=new Date;return b.setDate(b.getDate()+a),b},e=function(b){try{return $.datepicker.parseDate($.datepicker._get(a,"dateFormat"),b,$.datepicker._getFormatConfig(a))}catch(c){}var d=(b.toLowerCase().match(/^c/)?$.datepicker._getDate(a):null)||new Date,e=d.getFullYear(),f=d.getMonth(),g=d.getDate(),h=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,i=h.exec(b);while(i){switch(i[2]||"d"){case"d":case"D":g+=parseInt(i[1],10);break;case"w":case"W":g+=parseInt(i[1],10)*7;break;case"m":case"M":f+=parseInt(i[1],10),g=Math.min(g,$.datepicker._getDaysInMonth(e,f));break;case"y":case"Y":e+=parseInt(i[1],10),g=Math.min(g,$.datepicker._getDaysInMonth(e,f))}i=h.exec(b)}return new Date(e,f,g)},f=b==null||b===""?c:typeof b=="string"?e(b):typeof b=="number"?isNaN(b)?c:d(b):new Date(b.getTime());return f=f&&f.toString()=="Invalid Date"?c:f,f&&(f.setHours(0),f.setMinutes(0),f.setSeconds(0),f.setMilliseconds(0)),this._daylightSavingAdjust(f)},_daylightSavingAdjust:function(a){return a?(a.setHours(a.getHours()>12?a.getHours()+2:0),a):null},_setDate:function(a,b,c){var d=!b,e=a.selectedMonth,f=a.selectedYear,g=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=a.currentDay=g.getDate(),a.drawMonth=a.selectedMonth=a.currentMonth=g.getMonth(),a.drawYear=a.selectedYear=a.currentYear=g.getFullYear(),(e!=a.selectedMonth||f!=a.selectedYear)&&!c&&this._notifyChange(a),this._adjustInstDate(a),a.input&&a.input.val(d?"":this._formatDate(a))},_getDate:function(a){var b=!a.currentYear||a.input&&a.input.val()==""?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return b},_attachHandlers:function(a){var b=this._get(a,"stepMonths"),c="#"+a.id;a.dpDiv.find("[data-handler]").map(function(){var a={prev:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(c,-b,"M")},next:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(c,+b,"M")},hide:function(){window["DP_jQuery_"+dpuuid].datepicker._hideDatepicker()},today:function(){window["DP_jQuery_"+dpuuid].datepicker._gotoToday(c)},selectDay:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectDay(c,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(c,this,"M"),!1},selectYear:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(c,this,"Y"),!1}};$(this).bind(this.getAttribute("data-event"),a[this.getAttribute("data-handler")])})},_generateHTML:function(a){var b=new Date;b=this._daylightSavingAdjust(new Date(b.getFullYear(),b.getMonth(),b.getDate()));var c=this._get(a,"isRTL"),d=this._get(a,"showButtonPanel"),e=this._get(a,"hideIfNoPrevNext"),f=this._get(a,"navigationAsDateFormat"),g=this._getNumberOfMonths(a),h=this._get(a,"showCurrentAtPos"),i=this._get(a,"stepMonths"),j=g[0]!=1||g[1]!=1,k=this._daylightSavingAdjust(a.currentDay?new Date(a.currentYear,a.currentMonth,a.currentDay):new Date(9999,9,9)),l=this._getMinMaxDate(a,"min"),m=this._getMinMaxDate(a,"max"),n=a.drawMonth-h,o=a.drawYear;n<0&&(n+=12,o--);if(m){var p=this._daylightSavingAdjust(new Date(m.getFullYear(),m.getMonth()-g[0]*g[1]+1,m.getDate()));p=l&&p<l?l:p;while(this._daylightSavingAdjust(new Date(o,n,1))>p)n--,n<0&&(n=11,o--)}a.drawMonth=n,a.drawYear=o;var q=this._get(a,"prevText");q=f?this.formatDate(q,this._daylightSavingAdjust(new Date(o,n-i,1)),this._getFormatConfig(a)):q;var r=this._canAdjustMonth(a,-1,o,n)?'<a id="uidateprev" class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="'+q+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+q+"</span></a>":e?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+q+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+q+"</span></a>",s=this._get(a,"nextText");s=f?this.formatDate(s,this._daylightSavingAdjust(new Date(o,n+i,1)),this._getFormatConfig(a)):s;var t=this._canAdjustMonth(a,1,o,n)?'<a id="uidatenext" class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>":e?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>",u=this._get(a,"currentText"),v=this._get(a,"gotoCurrent")&&a.currentDay?k:b;u=f?this.formatDate(u,v,this._getFormatConfig(a)):u;var w=a.inline?"":'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">'+this._get(a,"closeText")+"</button>",x=d?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(c?w:"")+(this._isInRange(a,v)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">'+u+"</button>":"")+(c?"":w)+"</div>":"",y=parseInt(this._get(a,"firstDay"),10);y=isNaN(y)?0:y;var z=this._get(a,"showWeek"),A=this._get(a,"dayNames"),B=this._get(a,"dayNamesShort"),C=this._get(a,"dayNamesMin"),D=this._get(a,"monthNames"),E=this._get(a,"monthNamesShort"),F=this._get(a,"beforeShowDay"),G=this._get(a,"showOtherMonths"),H=this._get(a,"selectOtherMonths"),I=this._get(a,"calculateWeek")||this.iso8601Week,J=this._getDefaultDate(a),K="";for(var L=0;L<g[0];L++){var M="";this.maxRows=4;for(var N=0;N<g[1];N++){var O=this._daylightSavingAdjust(new Date(o,n,a.selectedDay)),P=" ui-corner-all",Q="";if(j){Q+='<div class="ui-datepicker-group';if(g[1]>1)switch(N){case 0:Q+=" ui-datepicker-group-first",P=" ui-corner-"+(c?"right":"left");break;case g[1]-1:Q+=" ui-datepicker-group-last",P=" ui-corner-"+(c?"left":"right");break;default:Q+=" ui-datepicker-group-middle",P=""}Q+='">'}Q+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+P+'">'+(/all|left/.test(P)&&L==0?c?t:r:"")+(/all|right/.test(P)&&L==0?c?r:t:"")+this._generateMonthYearHeader(a,n,o,l,m,L>0||N>0,D,E)+'</div><table class="ui-datepicker-calendar"><thead>'+"<tr>";var R=z?'<th class="ui-datepicker-week-col">'+this._get(a,"weekHeader")+"</th>":"";for(var S=0;S<7;S++){var T=(S+y)%7;R+="<th"+((S+y+6)%7>=5?' class="ui-datepicker-week-end"':"")+">"+'<span title="'+A[T]+'">'+C[T]+"</span></th>"}Q+=R+"</tr></thead><tbody>";var U=this._getDaysInMonth(o,n);o==a.selectedYear&&n==a.selectedMonth&&(a.selectedDay=Math.min(a.selectedDay,U));var V=(this._getFirstDayOfMonth(o,n)-y+7)%7,W=Math.ceil((V+U)/7),X=j?this.maxRows>W?this.maxRows:W:W;this.maxRows=X;var Y=this._daylightSavingAdjust(new Date(o,n,1-V));for(var Z=0;Z<X;Z++){Q+="<tr>";var _=z?'<td class="ui-datepicker-week-col">'+this._get(a,"calculateWeek")(Y)+"</td>":"";for(var S=0;S<7;S++){var ba=F?F.apply(a.input?a.input[0]:null,[Y]):[!0,""],bb=Y.getMonth()!=n,bc=bb&&!H||!ba[0]||l&&Y<l||m&&Y>m;_+='<td class="'+((S+y+6)%7>=5?" ui-datepicker-week-end":"")+(bb?" ui-datepicker-other-month":"")+(Y.getTime()==O.getTime()&&n==a.selectedMonth&&a._keyEvent||J.getTime()==Y.getTime()&&J.getTime()==O.getTime()?" "+this._dayOverClass:"")+(bc?" "+this._unselectableClass+" ui-state-disabled":"")+(bb&&!G?"":" "+ba[1]+(Y.getTime()==k.getTime()?" "+this._currentClass:"")+(Y.getTime()==b.getTime()?" ui-datepicker-today":""))+'"'+((!bb||G)&&ba[2]?' title="'+ba[2]+'"':"")+(bc?"":' data-handler="selectDay" data-event="click" data-month="'+Y.getMonth()+'" data-year="'+Y.getFullYear()+'"')+">"+(bb&&!G?"&#xa0;":bc?'<span class="ui-state-default">'+Y.getDate()+"</span>":'<a class="ui-state-default'+(Y.getTime()==b.getTime()?" ui-state-highlight":"")+(Y.getTime()==k.getTime()?" ui-state-active":"")+(bb?" ui-priority-secondary":"")+'" href="#">'+Y.getDate()+"</a>")+"</td>",Y.setDate(Y.getDate()+1),Y=this._daylightSavingAdjust(Y)}Q+=_+"</tr>"}n++,n>11&&(n=0,o++),Q+="</tbody></table>"+(j?"</div>"+(g[0]>0&&N==g[1]-1?'<div class="ui-datepicker-row-break"></div>':""):""),M+=Q}K+=M}return K+=x+($.browser.msie&&parseInt($.browser.version,10)<7&&!a.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':""),a._keyEvent=!1,K},_generateMonthYearHeader:function(a,b,c,d,e,f,g,h){var i=this._get(a,"changeMonth"),j=this._get(a,"changeYear"),k=this._get(a,"showMonthAfterYear"),l='<div class="ui-datepicker-title">',m="";if(f||!i)m+='<span class="ui-datepicker-month">'+g[b]+"</span>";else{var n=d&&d.getFullYear()==c,o=e&&e.getFullYear()==c;m+='<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';for(var p=0;p<12;p++)(!n||p>=d.getMonth())&&(!o||p<=e.getMonth())&&(m+='<option value="'+p+'"'+(p==b?' selected="selected"':"")+">"+h[p]+"</option>");m+="</select>"}k||(l+=m+(f||!i||!j?"&#xa0;":""));if(!a.yearshtml){a.yearshtml="";if(f||!j)l+='<span class="ui-datepicker-year">'+c+"</span>";else{var q=this._get(a,"yearRange").split(":"),r=(new Date).getFullYear(),s=function(a){var b=a.match(/c[+-].*/)?c+parseInt(a.substring(1),10):a.match(/[+-].*/)?r+parseInt(a,10):parseInt(a,10);return isNaN(b)?r:b},t=s(q[0]),u=Math.max(t,s(q[1]||""));t=d?Math.max(t,d.getFullYear()):t,u=e?Math.min(u,e.getFullYear()):u,a.yearshtml+='<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';for(;t<=u;t++)a.yearshtml+='<option value="'+t+'"'+(t==c?' selected="selected"':"")+">"+t+"</option>";a.yearshtml+="</select>",l+=a.yearshtml,a.yearshtml=null}}return l+=this._get(a,"yearSuffix"),k&&(l+=(f||!i||!j?"&#xa0;":"")+m),l+="</div>",l},_adjustInstDate:function(a,b,c){var d=a.drawYear+(c=="Y"?b:0),e=a.drawMonth+(c=="M"?b:0),f=Math.min(a.selectedDay,this._getDaysInMonth(d,e))+(c=="D"?b:0),g=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(d,e,f)));a.selectedDay=g.getDate(),a.drawMonth=a.selectedMonth=g.getMonth(),a.drawYear=a.selectedYear=g.getFullYear(),(c=="M"||c=="Y")&&this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max"),e=c&&b<c?c:b;return e=d&&e>d?d:e,e},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");b&&b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){var b=this._get(a,"numberOfMonths");return b==null?[1,1]:typeof b=="number"?[1,b]:b},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return(new Date(a,b,1)).getDay()},_canAdjustMonth:function(a,b,c,d){var e=this._getNumberOfMonths(a),f=this._daylightSavingAdjust(new Date(c,d+(b<0?b:e[0]*e[1]),1));return b<0&&f.setDate(this._getDaysInMonth(f.getFullYear(),f.getMonth())),this._isInRange(a,f)},_isInRange:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max");return(!c||b.getTime()>=c.getTime())&&(!d||b.getTime()<=d.getTime())},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");return b=typeof b!="string"?b:(new Date).getFullYear()%100+parseInt(b,10),{shortYearCutoff:b,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,b,c,d){b||(a.currentDay=a.selectedDay,a.currentMonth=a.selectedMonth,a.currentYear=a.selectedYear);var e=b?typeof b=="object"?b:this._daylightSavingAdjust(new Date(d,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),e,this._getFormatConfig(a))}}),$.fn.datepicker=function(a){if(!this.length)return this;$.datepicker.initialized||($(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv),$.datepicker.initialized=!0);var b=Array.prototype.slice.call(arguments,1);return typeof a!="string"||a!="isDisabled"&&a!="getDate"&&a!="widget"?a=="option"&&arguments.length==2&&typeof arguments[1]=="string"?$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this[0]].concat(b)):this.each(function(){typeof a=="string"?$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this].concat(b)):$.datepicker._attachDatepicker(this,a)}):$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this[0]].concat(b))},$.datepicker=new Datepicker,$.datepicker.initialized=!1,$.datepicker.uuid=(new Date).getTime(),$.datepicker.version="1.8.22",window["DP_jQuery_"+dpuuid]=$})(jQuery);;
/*src/js/jquery.cookie.js*/
/*jshint eqnull:true */
/*!
 * jQuery Cookie Plugin v1.2
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function ($, document, undefined) {

	var pluses = /\+/g;

	function raw(s) {
		return s;
	}

	function decoded(s) {
		return decodeURIComponent(s.replace(pluses, ' '));
	}

	var config = $.cookie = function (key, value, options) {

		// write
		if (value !== undefined) {
			options = $.extend({}, config.defaults, options);

			if (value === null) {
				options.expires = -1;
			}

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = config.json ? JSON.stringify(value) : String(value);

			return (document.cookie = [
				encodeURIComponent(key), '=', config.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// read
		var decode = config.raw ? raw : decoded;
		var cookies = document.cookie.split('; ');
		for (var i = 0, parts; (parts = cookies[i] && cookies[i].split('=')); i++) {
			if (decode(parts.shift()) === key) {
				var cookie = decode(parts.join('='));
				return config.json ? JSON.parse(cookie) : cookie;
			}
		}

		return null;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) !== null) {
			$.cookie(key, null, options);
			return true;
		}
		return false;
	};

})(jQuery, document);

/*src/js/jquery.validate.js*/
/*! jQuery Validation Plugin - v1.10.0 - 9/7/2012
* https://github.com/jzaefferer/jquery-validation
* Copyright (c) 2012 Jörn Zaefferer; Licensed MIT, GPL */

(function($) {

$.extend($.fn, {
  // http://docs.jquery.com/Plugins/Validation/validate
  validate: function( options ) {

    // if nothing is selected, return nothing; can't chain anyway
    if (!this.length) {
      if (options && options.debug && window.console) {
        console.warn( "nothing selected, can't validate, returning nothing" );
      }
      return;
    }

    // check if a validator for this form was already created
    var validator = $.data(this[0], 'validator');
    if ( validator ) {
      return validator;
    }

    // Add novalidate tag if HTML5.
    this.attr('novalidate', 'novalidate');

    validator = new $.validator( options, this[0] );
    $.data(this[0], 'validator', validator);

    if ( validator.settings.onsubmit ) {

      this.validateDelegate( ":submit", "click", function(ev) {
        if ( validator.settings.submitHandler ) {
          validator.submitButton = ev.target;
        }
        // allow suppressing validation by adding a cancel class to the submit button
        if ( $(ev.target).hasClass('cancel') ) {
          validator.cancelSubmit = true;
        }
      });

      // validate the form on submit
      this.submit( function( event ) {
        if ( validator.settings.debug ) {
          // prevent form submit to be able to see console output
          event.preventDefault();
        }
        function handle() {
          var hidden;
          if ( validator.settings.submitHandler ) {
            if (validator.submitButton) {
              // insert a hidden input as a replacement for the missing submit button
              hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val(validator.submitButton.value).appendTo(validator.currentForm);
            }
            validator.settings.submitHandler.call( validator, validator.currentForm, event );
            if (validator.submitButton) {
              // and clean up afterwards; thanks to no-block-scope, hidden can be referenced
              hidden.remove();
            }
            return false;
          }
          return true;
        }

        // prevent submit for invalid forms or custom submit handlers
        if ( validator.cancelSubmit ) {
          validator.cancelSubmit = false;
          return handle();
        }
        if ( validator.form() ) {
          if ( validator.pendingRequest ) {
            validator.formSubmitted = true;
            return false;
          }
          return handle();
        } else {
          validator.focusInvalid();
          return false;
        }
      });
    }

    return validator;
  },
  // http://docs.jquery.com/Plugins/Validation/valid
  valid: function() {
    if ( $(this[0]).is('form')) {
      return this.validate().form();
    } else {
      var valid = true;
      var validator = $(this[0].form).validate();
      this.each(function() {
        valid &= validator.element(this);
      });
      return valid;
    }
  },
  // attributes: space seperated list of attributes to retrieve and remove
  removeAttrs: function(attributes) {
    var result = {},
      $element = this;
    $.each(attributes.split(/\s/), function(index, value) {
      result[value] = $element.attr(value);
      $element.removeAttr(value);
    });
    return result;
  },
  // http://docs.jquery.com/Plugins/Validation/rules
  rules: function(command, argument) {
    var element = this[0];

    if (command) {
      var settings = $.data(element.form, 'validator').settings;
      var staticRules = settings.rules;
      var existingRules = $.validator.staticRules(element);
      switch(command) {
      case "add":
        $.extend(existingRules, $.validator.normalizeRule(argument));
        staticRules[element.name] = existingRules;
        if (argument.messages) {
          settings.messages[element.name] = $.extend( settings.messages[element.name], argument.messages );
        }
        break;
      case "remove":
        if (!argument) {
          delete staticRules[element.name];
          return existingRules;
        }
        var filtered = {};
        $.each(argument.split(/\s/), function(index, method) {
          filtered[method] = existingRules[method];
          delete existingRules[method];
        });
        return filtered;
      }
    }

    var data = $.validator.normalizeRules(
    $.extend(
      {},
      $.validator.metadataRules(element),
      $.validator.classRules(element),
      $.validator.attributeRules(element),
      $.validator.staticRules(element)
    ), element);

    // make sure required is at front
    if (data.required) {
      var param = data.required;
      delete data.required;
      data = $.extend({required: param}, data);
    }

    return data;
  }
});

// Custom selectors
$.extend($.expr[":"], {
  // http://docs.jquery.com/Plugins/Validation/blank
  blank: function(a) {return !$.trim("" + a.value);},
  // http://docs.jquery.com/Plugins/Validation/filled
  filled: function(a) {return !!$.trim("" + a.value);},
  // http://docs.jquery.com/Plugins/Validation/unchecked
  unchecked: function(a) {return !a.checked;}
});

// constructor for validator
$.validator = function( options, form ) {
  this.settings = $.extend( true, {}, $.validator.defaults, options );
  this.currentForm = form;
  this.init();
};

$.validator.format = function(source, params) {
  if ( arguments.length === 1 ) {
    return function() {
      var args = $.makeArray(arguments);
      args.unshift(source);
      return $.validator.format.apply( this, args );
    };
  }
  if ( arguments.length > 2 && params.constructor !== Array  ) {
    params = $.makeArray(arguments).slice(1);
  }
  if ( params.constructor !== Array ) {
    params = [ params ];
  }
  $.each(params, function(i, n) {
    source = source.replace(new RegExp("\\{" + i + "\\}", "g"), n);
  });
  return source;
};

$.extend($.validator, {

  defaults: {
    messages: {},
    groups: {},
    rules: {},
    errorClass: "error",
    validClass: "valid",
    errorElement: "label",
    focusInvalid: true,
    errorContainer: $( [] ),
    errorLabelContainer: $( [] ),
    onsubmit: true,
    ignore: ":hidden",
    ignoreTitle: false,
    onfocusin: function(element, event) {
      this.lastActive = element;

      // hide error label and remove error class on focus if enabled
      if ( this.settings.focusCleanup && !this.blockFocusCleanup ) {
        if ( this.settings.unhighlight ) {
          this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
        }
        this.addWrapper(this.errorsFor(element)).hide();
      }
    },
    onfocusout: function(element, event) {
      if ( !this.checkable(element) && (element.name in this.submitted || !this.optional(element)) ) {
        this.element(element);
      }
    },
    onkeyup: function(element, event) {
      if ( event.which === 9 && this.elementValue(element) === '' ) {
        return;
      } else if ( element.name in this.submitted || element === this.lastActive ) {
        this.element(element);
      }
    },
    onclick: function(element, event) {
      // click on selects, radiobuttons and checkboxes
      if ( element.name in this.submitted ) {
        this.element(element);
      }
      // or option elements, check parent select in that case
      else if (element.parentNode.name in this.submitted) {
        this.element(element.parentNode);
      }
    },
    highlight: function(element, errorClass, validClass) {
      if (element.type === 'radio') {
        this.findByName(element.name).addClass(errorClass).removeClass(validClass);
      } else {
        $(element).addClass(errorClass).removeClass(validClass);
      }
    },
    unhighlight: function(element, errorClass, validClass) {
      if (element.type === 'radio') {
        this.findByName(element.name).removeClass(errorClass).addClass(validClass);
      } else {
        $(element).removeClass(errorClass).addClass(validClass);
      }
    }
  },

  // http://docs.jquery.com/Plugins/Validation/Validator/setDefaults
  setDefaults: function(settings) {
    $.extend( $.validator.defaults, settings );
  },

  messages: {
    required: "This field is required.",
    remote: "Please fix this field.",
    email: "Please enter a valid email address.",
    url: "Please enter a valid URL.",
    date: "Please enter a valid date.",
    dateISO: "Please enter a valid date (ISO).",
    number: "Please enter a valid number.",
    digits: "Please enter only digits.",
    creditcard: "Please enter a valid credit card number.",
    equalTo: "Please enter the same value again.",
    maxlength: $.validator.format("Please enter no more than {0} characters."),
    minlength: $.validator.format("Please enter at least {0} characters."),
    rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
    range: $.validator.format("Please enter a value between {0} and {1}."),
    max: $.validator.format("Please enter a value less than or equal to {0}."),
    min: $.validator.format("Please enter a value greater than or equal to {0}.")
  },

  autoCreateRanges: false,

  prototype: {

    init: function() {
      this.labelContainer = $(this.settings.errorLabelContainer);
      this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
      this.containers = $(this.settings.errorContainer).add( this.settings.errorLabelContainer );
      this.submitted = {};
      this.valueCache = {};
      this.pendingRequest = 0;
      this.pending = {};
      this.invalid = {};
      this.reset();

      var groups = (this.groups = {});
      $.each(this.settings.groups, function(key, value) {
        $.each(value.split(/\s/), function(index, name) {
          groups[name] = key;
        });
      });
      var rules = this.settings.rules;
      $.each(rules, function(key, value) {
        rules[key] = $.validator.normalizeRule(value);
      });

      function delegate(event) {
        var validator = $.data(this[0].form, "validator"),
          eventType = "on" + event.type.replace(/^validate/, "");
        if (validator.settings[eventType]) {
          validator.settings[eventType].call(validator, this[0], event);
        }
      }
      $(this.currentForm)
        .validateDelegate(":text, [type='password'], [type='file'], select, textarea, " +
          "[type='number'], [type='search'] ,[type='tel'], [type='url'], " +
          "[type='email'], [type='datetime'], [type='date'], [type='month'], " +
          "[type='week'], [type='time'], [type='datetime-local'], " +
          "[type='range'], [type='color'] ",
          "focusin focusout keyup", delegate)
        .validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", delegate);

      if (this.settings.invalidHandler) {
        $(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
      }
    },

    // http://docs.jquery.com/Plugins/Validation/Validator/form
    form: function() {
      this.checkForm();
      $.extend(this.submitted, this.errorMap);
      this.invalid = $.extend({}, this.errorMap);
      if (!this.valid()) {
        $(this.currentForm).triggerHandler("invalid-form", [this]);
      }
      this.showErrors();
      return this.valid();
    },

    checkForm: function() {
      this.prepareForm();
      for ( var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++ ) {
        this.check( elements[i] );
      }
      return this.valid();
    },

    // http://docs.jquery.com/Plugins/Validation/Validator/element
    element: function( element ) {
      element = this.validationTargetFor( this.clean( element ) );
      this.lastElement = element;
      this.prepareElement( element );
      this.currentElements = $(element);
      var result = this.check( element ) !== false;
      if (result) {
        delete this.invalid[element.name];
      } else {
        this.invalid[element.name] = true;
      }
      if ( !this.numberOfInvalids() ) {
        // Hide error containers on last error
        this.toHide = this.toHide.add( this.containers );
      }
      this.showErrors();
      return result;
    },

    // http://docs.jquery.com/Plugins/Validation/Validator/showErrors
    showErrors: function(errors) {
      if(errors) {
        // add items to error list and map
        $.extend( this.errorMap, errors );
        this.errorList = [];
        for ( var name in errors ) {
          this.errorList.push({
            message: errors[name],
            element: this.findByName(name)[0]
          });
        }
        // remove items from success list
        this.successList = $.grep( this.successList, function(element) {
          return !(element.name in errors);
        });
      }
      if (this.settings.showErrors) {
        this.settings.showErrors.call( this, this.errorMap, this.errorList );
      } else {
        this.defaultShowErrors();
      }
    },

    // http://docs.jquery.com/Plugins/Validation/Validator/resetForm
    resetForm: function() {
      if ( $.fn.resetForm ) {
        $( this.currentForm ).resetForm();
      }
      this.submitted = {};
      this.lastElement = null;
      this.prepareForm();
      this.hideErrors();
      this.elements().removeClass( this.settings.errorClass ).removeData( "previousValue" );
    },

    numberOfInvalids: function() {
      return this.objectLength(this.invalid);
    },

    objectLength: function( obj ) {
      var count = 0;
      for ( var i in obj ) {
        count++;
      }
      return count;
    },

    hideErrors: function() {
      this.addWrapper( this.toHide ).hide();
    },

    valid: function() {
      return this.size() === 0;
    },

    size: function() {
      return this.errorList.length;
    },

    focusInvalid: function() {
      if( this.settings.focusInvalid ) {
        try {
          $(this.findLastActive() || this.errorList.length && this.errorList[0].element || [])
          .filter(":visible")
          .focus()
          // manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
          .trigger("focusin");
        } catch(e) {
          // ignore IE throwing errors when focusing hidden elements
        }
      }
    },

    findLastActive: function() {
      var lastActive = this.lastActive;
      return lastActive && $.grep(this.errorList, function(n) {
        return n.element.name === lastActive.name;
      }).length === 1 && lastActive;
    },

    elements: function() {
      var validator = this,
        rulesCache = {};

      // select all valid inputs inside the form (no submit or reset buttons)
      return $(this.currentForm)
      .find("input, select, textarea")
      .not(":submit, :reset, :image, [disabled]")
      .not( this.settings.ignore )
      .filter(function() {
        if ( !this.name && validator.settings.debug && window.console ) {
          console.error( "%o has no name assigned", this);
        }

        // select only the first element for each name, and only those with rules specified
        if ( this.name in rulesCache || !validator.objectLength($(this).rules()) ) {
          return false;
        }

        rulesCache[this.name] = true;
        return true;
      });
    },

    clean: function( selector ) {
      return $( selector )[0];
    },

    errors: function() {
      var errorClass = this.settings.errorClass.replace(' ', '.');
      return $( this.settings.errorElement + "." + errorClass, this.errorContext );
    },

    reset: function() {
      this.successList = [];
      this.errorList = [];
      this.errorMap = {};
      this.toShow = $([]);
      this.toHide = $([]);
      this.currentElements = $([]);
    },

    prepareForm: function() {
      this.reset();
      this.toHide = this.errors().add( this.containers );
    },

    prepareElement: function( element ) {
      this.reset();
      this.toHide = this.errorsFor(element);
    },

    elementValue: function( element ) {
      var type = $(element).attr('type'),
        val = $(element).val();

      if ( type === 'radio' || type === 'checkbox' ) {
        return $('input[name="' + $(element).attr('name') + '"]:checked').val();
      }

      if ( typeof val === 'string' ) {
        return val.replace(/\r/g, "");
      }
      return val;
    },

    check: function( element ) {
      element = this.validationTargetFor( this.clean( element ) );

      var rules = $(element).rules();
      var dependencyMismatch = false;
      var val = this.elementValue(element);
      var result;

      for (var method in rules ) {
        var rule = { method: method, parameters: rules[method] };
        try {

          result = $.validator.methods[method].call( this, val, element, rule.parameters );

          // if a method indicates that the field is optional and therefore valid,
          // don't mark it as valid when there are no other rules
          if ( result === "dependency-mismatch" ) {
            dependencyMismatch = true;
            continue;
          }
          dependencyMismatch = false;

          if ( result === "pending" ) {
            this.toHide = this.toHide.not( this.errorsFor(element) );
            return;
          }

          if( !result ) {
            this.formatAndAdd( element, rule );
            return false;
          }
        } catch(e) {
          if ( this.settings.debug && window.console ) {
            console.log("exception occured when checking element " + element.id + ", check the '" + rule.method + "' method", e);
          }
          throw e;
        }
      }
      if (dependencyMismatch) {
        return;
      }
      if ( this.objectLength(rules) ) {
        this.successList.push(element);
      }
      return true;
    },

    // return the custom message for the given element and validation method
    // specified in the element's "messages" metadata
    customMetaMessage: function(element, method) {
      if (!$.metadata) {
        return;
      }
      var meta = this.settings.meta ? $(element).metadata()[this.settings.meta] : $(element).metadata();
      return meta && meta.messages && meta.messages[method];
    },

    // return the custom message for the given element and validation method
    // specified in the element's HTML5 data attribute
    customDataMessage: function(element, method) {
      return $(element).data('msg-' + method.toLowerCase()) || (element.attributes && $(element).attr('data-msg-' + method.toLowerCase()));
    },

    // return the custom message for the given element name and validation method
    customMessage: function( name, method ) {
      var m = this.settings.messages[name];
      return m && (m.constructor === String ? m : m[method]);
    },

    // return the first defined argument, allowing empty strings
    findDefined: function() {
      for(var i = 0; i < arguments.length; i++) {
        if (arguments[i] !== undefined) {
          return arguments[i];
        }
      }
      return undefined;
    },

    defaultMessage: function( element, method) {
      return this.findDefined(
        this.customMessage( element.name, method ),
        this.customDataMessage( element, method ),
        this.customMetaMessage( element, method ),
        // title is never undefined, so handle empty string as undefined
        !this.settings.ignoreTitle && element.title || undefined,
        $.validator.messages[method],
        "<strong>Warning: No message defined for " + element.name + "</strong>"
      );
    },

    formatAndAdd: function( element, rule ) {
      var message = this.defaultMessage( element, rule.method ),
        theregex = /\$?\{(\d+)\}/g;
      if ( typeof message === "function" ) {
        message = message.call(this, rule.parameters, element);
      } else if (theregex.test(message)) {
        message = $.validator.format(message.replace(theregex, '{$1}'), rule.parameters);
      }
      this.errorList.push({
        message: message,
        element: element
      });

      this.errorMap[element.name] = message;
      this.submitted[element.name] = message;
    },

    addWrapper: function(toToggle) {
      if ( this.settings.wrapper ) {
        toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
      }
      return toToggle;
    },

    defaultShowErrors: function() {
      var i, elements;
      for ( i = 0; this.errorList[i]; i++ ) {
        var error = this.errorList[i];
        if ( this.settings.highlight ) {
          this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
        }
        this.showLabel( error.element, error.message );
      }
      if( this.errorList.length ) {
        this.toShow = this.toShow.add( this.containers );
      }
      if (this.settings.success) {
        for ( i = 0; this.successList[i]; i++ ) {
          this.showLabel( this.successList[i] );
        }
      }
      if (this.settings.unhighlight) {
        for ( i = 0, elements = this.validElements(); elements[i]; i++ ) {
          this.settings.unhighlight.call( this, elements[i], this.settings.errorClass, this.settings.validClass );
        }
      }
      this.toHide = this.toHide.not( this.toShow );
      this.hideErrors();
      this.addWrapper( this.toShow ).show();
    },

    validElements: function() {
      return this.currentElements.not(this.invalidElements());
    },

    invalidElements: function() {
      return $(this.errorList).map(function() {
        return this.element;
      });
    },

    showLabel: function(element, message) {
      var label = this.errorsFor( element );
      if ( label.length ) {
        // refresh error/success class
        label.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );

        // check if we have a generated label, replace the message then
        if ( label.attr("generated") ) {
          label.html(message);
        }
      } else {
        // create label
        label = $("<" + this.settings.errorElement + "/>")
          .attr({"for":  this.idOrName(element), generated: true})
          .addClass(this.settings.errorClass)
          .html(message || "");
        if ( this.settings.wrapper ) {
          // make sure the element is visible, even in IE
          // actually showing the wrapped element is handled elsewhere
          label = label.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
        }
        if ( !this.labelContainer.append(label).length ) {
          if ( this.settings.errorPlacement ) {
            this.settings.errorPlacement(label, $(element) );
          } else {
          label.insertAfter(element);
          }
        }
      }
      if ( !message && this.settings.success ) {
        label.text("");
        if ( typeof this.settings.success === "string" ) {
          label.addClass( this.settings.success );
        } else {
          this.settings.success( label, element );
        }
      }
      this.toShow = this.toShow.add(label);
    },

    errorsFor: function(element) {
      var name = this.idOrName(element);
      return this.errors().filter(function() {
        return $(this).attr('for') === name;
      });
    },

    idOrName: function(element) {
      return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
    },

    validationTargetFor: function(element) {
      // if radio/checkbox, validate first element in group instead
      if (this.checkable(element)) {
        element = this.findByName( element.name ).not(this.settings.ignore)[0];
      }
      return element;
    },

    checkable: function( element ) {
      return (/radio|checkbox/i).test(element.type);
    },

    findByName: function( name ) {
      return $(this.currentForm).find('[name="' + name + '"]');
    },

    getLength: function(value, element) {
      switch( element.nodeName.toLowerCase() ) {
      case 'select':
        return $("option:selected", element).length;
      case 'input':
        if( this.checkable( element) ) {
          return this.findByName(element.name).filter(':checked').length;
        }
      }
      return value.length;
    },

    depend: function(param, element) {
      return this.dependTypes[typeof param] ? this.dependTypes[typeof param](param, element) : true;
    },

    dependTypes: {
      "boolean": function(param, element) {
        return param;
      },
      "string": function(param, element) {
        return !!$(param, element.form).length;
      },
      "function": function(param, element) {
        return param(element);
      }
    },

    optional: function(element) {
      var val = this.elementValue(element);
      return !$.validator.methods.required.call(this, val, element) && "dependency-mismatch";
    },

    startRequest: function(element) {
      if (!this.pending[element.name]) {
        this.pendingRequest++;
        this.pending[element.name] = true;
      }
    },

    stopRequest: function(element, valid) {
      this.pendingRequest--;
      // sometimes synchronization fails, make sure pendingRequest is never < 0
      if (this.pendingRequest < 0) {
        this.pendingRequest = 0;
      }
      delete this.pending[element.name];
      if ( valid && this.pendingRequest === 0 && this.formSubmitted && this.form() ) {
        $(this.currentForm).submit();
        this.formSubmitted = false;
      } else if (!valid && this.pendingRequest === 0 && this.formSubmitted) {
        $(this.currentForm).triggerHandler("invalid-form", [this]);
        this.formSubmitted = false;
      }
    },

    previousValue: function(element) {
      return $.data(element, "previousValue") || $.data(element, "previousValue", {
        old: null,
        valid: true,
        message: this.defaultMessage( element, "remote" )
      });
    }

  },

  classRuleSettings: {
    required: {required: true},
    email: {email: true},
    url: {url: true},
    date: {date: true},
    dateISO: {dateISO: true},
    number: {number: true},
    digits: {digits: true},
    creditcard: {creditcard: true}
  },

  addClassRules: function(className, rules) {
    if ( className.constructor === String ) {
      this.classRuleSettings[className] = rules;
    } else {
      $.extend(this.classRuleSettings, className);
    }
  },

  classRules: function(element) {
    var rules = {};
    var classes = $(element).attr('class');
    if ( classes ) {
      $.each(classes.split(' '), function() {
        if (this in $.validator.classRuleSettings) {
          $.extend(rules, $.validator.classRuleSettings[this]);
        }
      });
    }
    return rules;
  },

  attributeRules: function(element) {
    var rules = {};
    var $element = $(element);

    for (var method in $.validator.methods) {
      var value;

      // support for <input required> in both html5 and older browsers
      if (method === 'required') {
        value = $element.get(0).getAttribute(method);
        // Some browsers return an empty string for the required attribute
        // and non-HTML5 browsers might have required="" markup
        if (value === "") {
          value = true;
        }
        // force non-HTML5 browsers to return bool
        value = !!value;
      } else {
        value = $element.attr(method);
      }

      if (value) {
        rules[method] = value;
      } else if ($element[0].getAttribute("type") === method) {
        rules[method] = true;
      }
    }

    // maxlength may be returned as -1, 2147483647 (IE) and 524288 (safari) for text inputs
    if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
      delete rules.maxlength;
    }

    return rules;
  },

  metadataRules: function(element) {
    if (!$.metadata) {
      return {};
    }

    var meta = $.data(element.form, 'validator').settings.meta;
    return meta ?
      $(element).metadata()[meta] :
      $(element).metadata();
  },

  staticRules: function(element) {
    var rules = {};
    var validator = $.data(element.form, 'validator');
    if (validator.settings.rules) {
      rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
    }
    return rules;
  },

  normalizeRules: function(rules, element) {
    // handle dependency check
    $.each(rules, function(prop, val) {
      // ignore rule when param is explicitly false, eg. required:false
      if (val === false) {
        delete rules[prop];
        return;
      }
      if (val.param || val.depends) {
        var keepRule = true;
        switch (typeof val.depends) {
          case "string":
            keepRule = !!$(val.depends, element.form).length;
            break;
          case "function":
            keepRule = val.depends.call(element, element);
            break;
        }
        if (keepRule) {
          rules[prop] = val.param !== undefined ? val.param : true;
        } else {
          delete rules[prop];
        }
      }
    });

    // evaluate parameters
    $.each(rules, function(rule, parameter) {
      rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter;
    });

    // clean number parameters
    $.each(['minlength', 'maxlength', 'min', 'max'], function() {
      if (rules[this]) {
        rules[this] = Number(rules[this]);
      }
    });
    $.each(['rangelength', 'range'], function() {
      if (rules[this]) {
        rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
      }
    });

    if ($.validator.autoCreateRanges) {
      // auto-create ranges
      if (rules.min && rules.max) {
        rules.range = [rules.min, rules.max];
        delete rules.min;
        delete rules.max;
      }
      if (rules.minlength && rules.maxlength) {
        rules.rangelength = [rules.minlength, rules.maxlength];
        delete rules.minlength;
        delete rules.maxlength;
      }
    }

    // To support custom messages in metadata ignore rule methods titled "messages"
    if (rules.messages) {
      delete rules.messages;
    }

    return rules;
  },

  // Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
  normalizeRule: function(data) {
    if( typeof data === "string" ) {
      var transformed = {};
      $.each(data.split(/\s/), function() {
        transformed[this] = true;
      });
      data = transformed;
    }
    return data;
  },

  // http://docs.jquery.com/Plugins/Validation/Validator/addMethod
  addMethod: function(name, method, message) {
    $.validator.methods[name] = method;
    $.validator.messages[name] = message !== undefined ? message : $.validator.messages[name];
    if (method.length < 3) {
      $.validator.addClassRules(name, $.validator.normalizeRule(name));
    }
  },

  methods: {

    // http://docs.jquery.com/Plugins/Validation/Methods/required
    required: function(value, element, param) {
      // check if dependency is met
      if ( !this.depend(param, element) ) {
        return "dependency-mismatch";
      }
      if ( element.nodeName.toLowerCase() === "select" ) {
        // could be an array for select-multiple or a string, both are fine this way
        var val = $(element).val();
        return val && val.length > 0;
      }
      if ( this.checkable(element) ) {
        return this.getLength(value, element) > 0;
      }
      return $.trim(value).length > 0;
    },

    // http://docs.jquery.com/Plugins/Validation/Methods/remote
    remote: function(value, element, param) {
      if ( this.optional(element) ) {
        return "dependency-mismatch";
      }

      var previous = this.previousValue(element);
      if (!this.settings.messages[element.name] ) {
        this.settings.messages[element.name] = {};
      }
      previous.originalMessage = this.settings.messages[element.name].remote;
      this.settings.messages[element.name].remote = previous.message;

      param = typeof param === "string" && {url:param} || param;

      if ( this.pending[element.name] ) {
        return "pending";
      }
      if ( previous.old === value ) {
        return previous.valid;
      }

      previous.old = value;
      var validator = this;
      this.startRequest(element);
      var data = {};
      data[element.name] = value;
      $.ajax($.extend(true, {
        url: param,
        mode: "abort",
        port: "validate" + element.name,
        dataType: "json",
        data: data,
        success: function(response) {
          validator.settings.messages[element.name].remote = previous.originalMessage;
          var valid = response === true || response === "true";
          if ( valid ) {
            var submitted = validator.formSubmitted;
            validator.prepareElement(element);
            validator.formSubmitted = submitted;
            validator.successList.push(element);
            delete validator.invalid[element.name];
            validator.showErrors();
          } else {
            var errors = {};
            var message = response || validator.defaultMessage( element, "remote" );
            errors[element.name] = previous.message = $.isFunction(message) ? message(value) : message;
            validator.invalid[element.name] = true;
            validator.showErrors(errors);
          }
          previous.valid = valid;
          validator.stopRequest(element, valid);
        }
      }, param));
      return "pending";
    },

    // http://docs.jquery.com/Plugins/Validation/Methods/minlength
    minlength: function(value, element, param) {
      var length = $.isArray( value ) ? value.length : this.getLength($.trim(value), element);
      return this.optional(element) || length >= param;
    },

    // http://docs.jquery.com/Plugins/Validation/Methods/maxlength
    maxlength: function(value, element, param) {
      var length = $.isArray( value ) ? value.length : this.getLength($.trim(value), element);
      return this.optional(element) || length <= param;
    },

    // http://docs.jquery.com/Plugins/Validation/Methods/rangelength
    rangelength: function(value, element, param) {
      var length = $.isArray( value ) ? value.length : this.getLength($.trim(value), element);
      return this.optional(element) || ( length >= param[0] && length <= param[1] );
    },

    // http://docs.jquery.com/Plugins/Validation/Methods/min
    min: function( value, element, param ) {
      return this.optional(element) || value >= param;
    },

    // http://docs.jquery.com/Plugins/Validation/Methods/max
    max: function( value, element, param ) {
      return this.optional(element) || value <= param;
    },

    // http://docs.jquery.com/Plugins/Validation/Methods/range
    range: function( value, element, param ) {
      return this.optional(element) || ( value >= param[0] && value <= param[1] );
    },

    // http://docs.jquery.com/Plugins/Validation/Methods/email
    email: function(value, element) {
      // contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
      return this.optional(element) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(value);
    },

    // http://docs.jquery.com/Plugins/Validation/Methods/url
    url: function(value, element) {
      // contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/
      return this.optional(element) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
    },

    // http://docs.jquery.com/Plugins/Validation/Methods/date
    date: function(value, element) {
      return this.optional(element) || !/Invalid|NaN/.test(new Date(value));
    },

    // http://docs.jquery.com/Plugins/Validation/Methods/dateISO
    dateISO: function(value, element) {
      return this.optional(element) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(value);
    },

    // http://docs.jquery.com/Plugins/Validation/Methods/number
    number: function(value, element) {
      return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
    },

    // http://docs.jquery.com/Plugins/Validation/Methods/digits
    digits: function(value, element) {
      return this.optional(element) || /^\d+$/.test(value);
    },

    // http://docs.jquery.com/Plugins/Validation/Methods/creditcard
    // based on http://en.wikipedia.org/wiki/Luhn
    creditcard: function(value, element) {
      if ( this.optional(element) ) {
        return "dependency-mismatch";
      }
      // accept only spaces, digits and dashes
      if (/[^0-9 \-]+/.test(value)) {
        return false;
      }
      var nCheck = 0,
        nDigit = 0,
        bEven = false;

      value = value.replace(/\D/g, "");

      for (var n = value.length - 1; n >= 0; n--) {
        var cDigit = value.charAt(n);
        nDigit = parseInt(cDigit, 10);
        if (bEven) {
          if ((nDigit *= 2) > 9) {
            nDigit -= 9;
          }
        }
        nCheck += nDigit;
        bEven = !bEven;
      }

      return (nCheck % 10) === 0;
    },

    // http://docs.jquery.com/Plugins/Validation/Methods/equalTo
    equalTo: function(value, element, param) {
      // bind to the blur event of the target in order to revalidate whenever the target field is updated
      // TODO find a way to bind the event just once, avoiding the unbind-rebind overhead
      var target = $(param);
      if (this.settings.onfocusout) {
        target.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
          $(element).valid();
        });
      }
      return value === target.val();
    }

  }

});

// deprecated, use $.validator.format instead
$.format = $.validator.format;

}(jQuery));

// ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()
(function($) {
  var pendingRequests = {};
  // Use a prefilter if available (1.5+)
  if ( $.ajaxPrefilter ) {
    $.ajaxPrefilter(function(settings, _, xhr) {
      var port = settings.port;
      if (settings.mode === "abort") {
        if ( pendingRequests[port] ) {
          pendingRequests[port].abort();
        }
        pendingRequests[port] = xhr;
      }
    });
  } else {
    // Proxy ajax
    var ajax = $.ajax;
    $.ajax = function(settings) {
      var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
        port = ( "port" in settings ? settings : $.ajaxSettings ).port;
      if (mode === "abort") {
        if ( pendingRequests[port] ) {
          pendingRequests[port].abort();
        }
        return (pendingRequests[port] = ajax.apply(this, arguments));
      }
      return ajax.apply(this, arguments);
    };
  }
}(jQuery));

// provides cross-browser focusin and focusout events
// IE has native support, in other browsers, use event caputuring (neither bubbles)

// provides delegate(type: String, delegate: Selector, handler: Callback) plugin for easier event delegation
// handler is only called when $(event.target).is(delegate), in the scope of the jquery-object for event.target
(function($) {
  // only implement if not provided by jQuery core (since 1.4)
  // TODO verify if jQuery 1.4's implementation is compatible with older jQuery special-event APIs
  if (!jQuery.event.special.focusin && !jQuery.event.special.focusout && document.addEventListener) {
    $.each({
      focus: 'focusin',
      blur: 'focusout'
    }, function( original, fix ){
      $.event.special[fix] = {
        setup:function() {
          this.addEventListener( original, handler, true );
        },
        teardown:function() {
          this.removeEventListener( original, handler, true );
        },
        handler: function(e) {
          var args = arguments;
          args[0] = $.event.fix(e);
          args[0].type = fix;
          return $.event.handle.apply(this, args);
        }
      };
      function handler(e) {
        e = $.event.fix(e);
        e.type = fix;
        return $.event.handle.call(this, e);
      }
    });
  }
  $.extend($.fn, {
    validateDelegate: function(delegate, type, handler) {
      return this.bind(type, function(event) {
        var target = $(event.target);
        if (target.is(delegate)) {
          return handler.apply(target, arguments);
        }
      });
    }
  });
}(jQuery));

/*src/js/jquery.powertip-1.1.0.min.js*/
/*
 jQuery PowerTip Plugin v1.1.0
 http://stevenbenner.github.com/jquery-powertip/
 Copyright 2012 Steven Benner (http://stevenbenner.com/)
 Released under the MIT license.
 <https://raw.github.com/stevenbenner/jquery-powertip/master/LICENSE.txt>
*/
(function(c){function w(b,c,m){function j(h,d){e();b.data("hasActiveHover")||(h?(d&&b.data("forcedOpen",!0),m.showTip(b)):(a.popOpenImminent=!0,i=setTimeout(function(){i=null;var g=Math.abs(a.previousX-a.currentX),d=Math.abs(a.previousY-a.currentY);g+d<c.intentSensitivity?m.showTip(b):(a.previousX=a.currentX,a.previousY=a.currentY,j())},c.intentPollInterval)))}function e(){i=clearTimeout(i)}var i=null;return{show:j,hide:function(h){e();b.data("hasActiveHover")&&(a.popOpenImminent=!1,b.data("forcedOpen",
!1),h?m.hideTip(b):i=setTimeout(function(){i=null;m.hideTip(b)},c.closeDelay))},cancel:e}}function y(b){function u(g){if(g.data("hasActiveHover"))if(a.isPopOpen)a.isClosing||m(a.activeHover),d.delay(100).queue(function(a){u(g);a()});else{g.trigger("powerTipPreRender");var p=g.data("powertip"),r=g.data("powertiptarget"),s=g.data("powertipjq"),f=r?c("#"+r):[];if(p)d.html(p);else if(s&&0<s.length)d.empty(),s.clone(!0,!0).appendTo(d);else if(f&&0<f.length)d.html(c("#"+r).html());else return;g.trigger("powerTipRender");
j.on("closePowerTip",function(){g.data("displayController").hide(!0)});a.activeHover=g;a.isPopOpen=!0;d.data("followMouse",b.followMouse);d.data("mouseOnToPopup",b.mouseOnToPopup);if(b.followMouse)e();else{var t=d.outerWidth(),k=d.outerHeight(),q,o,l;b.smartPlacement?(p=c.fn.powerTip.smartPlacementLists[b.placement],c.each(p,function(a,b){q=i(g,b,t,k);o=b;var d=q,c=n.scrollLeft(),f=n.scrollTop(),p=n.width(),h=n.height(),e=[];d.y<f&&e.push("top");d.y+k>f+h&&e.push("bottom");d.x<c&&e.push("left");d.x+
t>c+p&&e.push("right");l=e;if(0===l.length)return!1})):(q=i(g,b.placement,t,k),o=b.placement);d.addClass(o);h(q.x,q.y);a.isFixedPopOpen=!0}d.fadeIn(b.fadeInTime,function(){a.desyncTimeout||(a.desyncTimeout=setInterval(x,500));g.trigger("powerTipOpen")})}}function m(g){a.isClosing=!0;g.data("hasActiveHover",!1);g.data("forcedOpen",!1);a.activeHover=null;a.isPopOpen=!1;a.desyncTimeout=clearInterval(a.desyncTimeout);j.off("closePowerTip");d.fadeOut(b.fadeOutTime,function(){a.isClosing=!1;a.isFixedPopOpen=
!1;d.removeClass();h(a.currentX+b.offset,a.currentY+b.offset);g.trigger("powerTipClose")})}function x(){if(a.isPopOpen&&!a.isClosing){var b=!1;!1===a.activeHover.data("hasActiveHover")?b=!0:!o(a.activeHover)&&(!a.activeHover.is(":focus")&&!a.activeHover.data("forcedOpen"))&&(d.data("mouseOnToPopup")?o(d)||(b=!0):b=!0);b&&m(a.activeHover)}}function e(){if(a.isPopOpen&&!a.isFixedPopOpen||a.popOpenImminent&&!a.isFixedPopOpen&&d.data("hasMouseMove")){var g=n.scrollTop(),c=n.width(),i=n.height(),e=d.outerWidth(),
f=d.outerHeight(),j=0,k=0,j=e+a.currentX+b.offset<c?a.currentX+b.offset:c-e,k=f+a.currentY+b.offset<g+i?a.currentY+b.offset:g+i-f;h(j,k)}}function i(a,d,c,i){var f=a.offset(),e=a.outerWidth(),a=a.outerHeight(),k=0,h=0;switch(d){case "n":k=f.left+e/2-c/2;h=f.top-i-b.offset;break;case "e":k=f.left+e+b.offset;h=f.top+a/2-i/2;break;case "s":k=f.left+e/2-c/2;h=f.top+a+b.offset;break;case "w":k=f.left-c-b.offset;h=f.top+a/2-i/2;break;case "nw":k=f.left-c+20;h=f.top-i-b.offset;break;case "ne":k=f.left+e-
20;h=f.top-i-b.offset;break;case "sw":k=f.left-c+20;h=f.top+a+b.offset;break;case "se":k=f.left+e-20,h=f.top+a+b.offset}return{x:Math.round(k),y:Math.round(h)}}function h(a,b){d.css("left",a+"px");d.css("top",b+"px")}var d=c("#"+b.popupId);0===d.length&&(d=c("<div></div>",{id:b.popupId}),0===l.length&&(l=c("body")),l.append(d));if(b.followMouse){if(!d.data("hasMouseMove"))j.on({mousemove:e,scroll:e});d.data("hasMouseMove",!0)}if(b.followMouse||b.mouseOnToPopup)d.on({mouseenter:function(){(d.data("followMouse")||
d.data("mouseOnToPopup"))&&a.activeHover&&a.activeHover.data("displayController").cancel()},mouseleave:function(){d.data("mouseOnToPopup")&&a.activeHover&&a.activeHover.data("displayController").hide()}});return{showTip:function(a){a.data("hasActiveHover",true);d.queue(function(b){u(a);b()})},hideTip:m}}function v(b){a.currentX=b.pageX;a.currentY=b.pageY}function o(b){var c=b.offset();return a.currentX>=c.left&&a.currentX<=c.left+b.outerWidth()&&a.currentY>=c.top&&a.currentY<=c.top+b.outerHeight()}
var j=c(document),n=c(window),l=c("body"),a={isPopOpen:!1,isFixedPopOpen:!1,isClosing:!1,popOpenImminent:!1,activeHover:null,currentX:0,currentY:0,previousX:0,previousY:0,desyncTimeout:null,mouseTrackingActive:!1};c.fn.powerTip=function(b){if(!this.length)return this;var n=c.extend({},c.fn.powerTip.defaults,b),m=new y(n),l=0,e=0;a.mouseTrackingActive||(a.mouseTrackingActive=!0,c(function(){l=j.scrollLeft();e=j.scrollTop()}),j.on({mousemove:v,scroll:function(){var b=j.scrollLeft(),c=j.scrollTop();
b!==l&&(a.currentX+=b-l,l=b);c!==e&&(a.currentY+=c-e,e=c)}}));this.each(function(){var a=c(this),b=a.data("powertip"),d=a.data("powertipjq"),e=a.data("powertiptarget"),j=a.attr("title");if(!b&&!e&&!d&&j){a.data("powertip",j);a.removeAttr("title")}a.data("displayController",new w(a,n,m))});return this.on({mouseenter:function(b){v(b);a.previousX=b.pageX;a.previousY=b.pageY;c(this).data("displayController").show()},mouseleave:function(){c(this).data("displayController").hide()},focus:function(){var a=
c(this);o(a)||a.data("displayController").show(true)},blur:function(){c(this).data("displayController").hide(true)}})};c.fn.powerTip.defaults={fadeInTime:200,fadeOutTime:100,followMouse:!1,popupId:"powerTip",intentSensitivity:7,intentPollInterval:100,closeDelay:100,placement:"n",smartPlacement:!1,offset:10,mouseOnToPopup:!1};c.fn.powerTip.smartPlacementLists={n:["n","ne","nw","s"],e:"e ne se w nw sw n s e".split(" "),s:["s","se","sw","n"],w:"w nw sw e ne se n s w".split(" "),nw:"nw w sw n s se nw".split(" "),
ne:"ne e se n s sw ne".split(" "),sw:"sw w nw s n ne sw".split(" "),se:"se e ne s n nw se".split(" ")};c.powerTip={showTip:function(a){c.powerTip.closeTip();a=a.first();o(a)||a.data("displayController").show(!0,!0)},closeTip:function(){j.triggerHandler("closePowerTip")}}})(jQuery);
/*src/js/jquery.coolfieldset.js*/
(function($) {
	function hideFieldsetContent(obj, options){
		if(options.animation==true)
			obj.find('div').slideUp(options.speed);
		else
			obj.find('div').hide();
		
		obj.removeClass("expanded");
		obj.addClass("collapsed");
	}	
	function showFieldsetContent(obj, options){
		if(options.animation==true)
			obj.find('div').slideDown(options.speed);
		else
			obj.find('div').show();
		
		obj.removeClass("collapsed");
		obj.addClass("expanded");
		$('.iconscontainer').children('div').css('display', 'none');
	}
	
	$.fn.coolfieldset = function(options){
		var setting={collapsed:false, animation:true, speed:'medium'};
		$.extend(setting, options);		
		this.each(function(){
			var fieldset=$(this);
			var legend=fieldset.children('legend');			
			if(setting.collapsed==true){
				legend.toggle(
					function(){
						showFieldsetContent(fieldset, setting);
					},
					function(){
						hideFieldsetContent(fieldset, setting);
					}
				)				
				hideFieldsetContent(fieldset, {animation:false});
			}
			else{
				legend.toggle(
					function(){
						hideFieldsetContent(fieldset, setting);
					},
					function(){
						showFieldsetContent(fieldset, setting);
					}
				)
			}
		});
	}
})(jQuery);
/*src/js/jquery.fileUploader.js*/
/*
*	Class: fileUploader
*	Use: Upload multiple files using jquery
*	Author: John Laniba (http://pixelcone.com)
*	Version: 1.3
*/

(function($) {
	$.fileUploader = {version: '1.3', count: 0};
	$.fn.fileUploader = function(config){
		var model = MODEL.updtfw;
		
		config = $.extend({}, {
			autoUpload: false,
			limit: false,
			buttonUpload: '#px-submit',
			buttonClear: '#px-clear',
			// selectFileLabel: 'Select files',
			selectFileLabel: model.selectfile,
			allowedExtension: 'jpg|jpeg|gif|png',
			timeInterval: [1, 2, 4, 2, 1, 5], //Mock percentage for iframe upload
			percentageInterval: [10, 20, 30, 40, 60, 80],
			
			//Callbacks
			onValidationError: null,	//trigger if file is invalid
			onFileChange: function(){},
			onFileRemove: function(){},
			beforeUpload: function(){}, //trigger after the submit button is click: before upload
			beforeEachUpload: function(){}, //callback before each file has been uploaded ::: returns each Form
			afterUpload: function(){},
			afterEachUpload: function(){} //callback after each file has been uploaded
			
		}, config);
		
		$.fileUploader.count++;
		
		//Multiple instance of a FOrm Container
		var pxUploadForm = 'px-form-' + $.fileUploader.count,
		pxWidget = 'px-widget-' + $.fileUploader.count,
		pxButton = 'px-button-' + $.fileUploader.count,
		wrapper = ' \
			<div id="'+ pxWidget +'" class="px-widget ui-widget"> \
				<div class="ui-helper-clearfix"> \
					<div id="'+ pxUploadForm +'-input" class="px-form-input"></div> \
					<div id="'+ pxButton +'" class="px-buttons"></div> \
				</div> \
				<div id="'+ pxUploadForm +'"></div> \
			</div> \
		',
		pxUploadForm = '#' + pxUploadForm,
		pxUploadFormInput = pxUploadForm + '-input',
		pxButton = '#' + pxButton,
		pxWidget = '#' + pxWidget,
		buttonClearId = null,
	
		itr = 1, //index/itr of file
		isLimit = (config.limit)? true : false,
		limit = parseInt(config.limit),
	
		e = this, //set e as this
		selector = $(this).selector,
		buttonM = pxButton + ' input, '+ pxButton +' button'; //Accept button as input and as button
		isFile = false, //this is use to hide other inputs in a form
		progress = 0, //percentage of the upload,
		totalForm = 0,
		jqxhr = null, //return object from jquery.ajax,
		timeInterval = config.timeInterval,
		percentageInterval = config.percentageInterval,
		pcount = 0, //progress count to set interval,
		progressTime = null,
		stopUpload = false; //Stop all upload
		
		if (window.FormData) {
			var isHtml5 = true;
		} else {
			var isHtml5 = false;
		}
		
		//Wrap all function that is accessable within the plugin
		var px = {
			
			//Initialize and format data
			init: function(){
				px.form = $(e).parents('form');
				
				//prepend wrapper markup
				px.form.before(wrapper);
				
				//Wrap input button
				$(e).wrap('<div class="px-input-button" />');
				px.form.children('.px-input-button').prepend('<span>'+ config.selectFileLabel +'</span>');
				
				//move upload and clear button into id px_button
				px.form.find(config.buttonUpload + ',' + config.buttonClear).appendTo(pxButton);
				
				//Transform file input into ui button
				px.form.find('.px-input-button').button({
					icons: {
               			primary: "ui-icon-circle-plus"
            		}
				});
				$(config.buttonUpload, pxButton).button({
					icons: {
               			primary: "ui-icon-arrowthickstop-1-n"
            		}
				});
				$(config.buttonClear, pxButton).button({
					icons: {
               			primary: "ui-icon-circle-close"
            		}
				});
				
				//clear all form data
				px.clearFormData(px.form);
				
				px.form.hide();
				this.printForm();
				
				//Disable button
				$(buttonM).attr('disabled','disabled');
			},
			
			//Clone, format and append form
			printForm: function(){
				
				var formId = 'pxupload' + itr,
				iframeId = formId + '_frame';
				
				$('<iframe name="'+ iframeId +'"></iframe>').attr({
					id: iframeId,
					src: 'about:blank',
					style: 'display:none'
				}).prependTo(pxUploadFormInput);
				
				px.form.clone().attr({
					id: formId,
					target: iframeId
				}).prependTo(pxUploadFormInput).show();
				
				//Show only the file input
				px.showInputFile( '#'+formId );
				
				//This is not good but i left no choice because live function is not working on IE
				$(selector).change(function() {
					if (isHtml5) {
						html5Change(this);
					} else {
						uploadChange($(this));
					}
				});
			},
			
			//Show only the file input
			showInputFile: function(form) {
				$(pxUploadFormInput).find(form).children().each(function(){
					isFile = $(this).is(':file');
					if (!isFile && $(this).find(':file').length == 0) {
						$(this).hide();
					}
				});
			},
			//Hide file input and show other data
			hideInputFile: function($form) {
				$form.children().each(function(){
					isFile = $(this).is(':file');
					if (isFile || $(this).find(':file').length > 0) {
						$(this).hide();
					} else {
						$(this).show();
					}
				});
			},
			
			//Validate file
			getFileName: function(file) {
				
				if (file.indexOf('/') > -1){
					file = file.substring(file.lastIndexOf('/') + 1);
				} else if (file.indexOf('\\') > -1){
					file = file.substring(file.lastIndexOf('\\') + 1);
				}
				
				return file;
			},
			
			validateFileName: function(filename) {
				var extensions = new RegExp(config.allowedExtension + '$', 'i');
				if (extensions.test(filename)){
					return filename;
				} else {
					return -1;
				}
			},
			
			getFileSize: function(file) {
				var fileSize = 0;
				if (file.size > 1024 * 1024) {
					fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
				} else {
					fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';
				}
				return fileSize;
			},
			
			//clear form data
			clearFormData: function(form) {
				$(form).find(':input').each(function() {
					if (this.type == 'file') {
						$(this).val('');
					}
				});
			}
			
		}
		
		//initialize
		px.init();
		
		/*
		*	Plugin Events/Method
		*/
		
		/*
		* Html5 file change
		*/
		function html5Change($this) {
			$.each( $this.files, function(index, file){
				uploadChange(file);
			});
			
			afterUploadChange();
		}
		
		/*
		*	Html5 Drag and Drop
		*/
		$.event.props.push('dataTransfer');
		$(pxWidget).bind( 'dragenter dragover', false)
		.bind( 'drop', function( e ) {
			e.stopPropagation();
			e.preventDefault();
			
			html5Change(e.dataTransfer);
			
		});
		
		/*
		*	On Change of upload file
		*/
		function uploadChange($this) {
			
			var $form = $(pxUploadFormInput + ' #pxupload'+ itr);
					
			//validate file
			var filename = (isHtml5)? $this.name : px.getFileName( $this.val() );
			var matchfilename = filename;
			if ( px.validateFileName(filename) == -1 ){
				if ($.isFunction(config.onValidationError)) {
					config.onValidationError($this);
				} else {
					alert ('Invalid file!');
				}
				$form.find(':file').val('');
				return false;
			}
			
			//Limit
			if (limit <= 0) {
				//Your message about exceeding limit
				
				return false;
			}
			limit = limit - 1;
			
			//remove disabled attr
			$(buttonM).removeAttr('disabled');
			
			//remove upload text after uploaded
			$('.upload-data', pxUploadForm).each(function() {
				if ( $(this).find('form').length <= 0 ) {
					$(this).remove();
				}
			});
			
			//append size of the file after filename
			if (isHtml5) {
				filename += ' (' + px.getFileSize($this) + ')';
			}
			
			//DIsplay syled markup				
			$(pxUploadForm).append(
				$('<div>').attr({
					'class': 'upload-data pending ui-widget-content ui-corner-all',
					id: 'pxupload'+ itr +'_text'
				})
				.data('formId', 'pxupload'+ itr)
				.append(' \
					<ul class="actions ui-helper-clearfix"> \
						<li title="{0}" class="upload ui-state-default ui-corner-all"> \
							<span class="ui-icon ui-icon-circle-triangle-e"></span> \
						</li> \
						<li title="{1}" class="delete ui-state-default ui-corner-all"> \
							<span class="ui-icon ui-icon-circle-minus"></span> \
						</li> \
					</ul> \
					<span class="filename">'.format(model.upload,model.deletes)+ filename +'</span> \
					<div class="progress ui-helper-clearfix"> \
						<div class="progressBar" id="progressBar_'+ itr +'"></div> \
						<div class="percentage">0%</div> \
					</div> \
					<div class="status">{0}</div> \
				'.format(model.pending))
			);
			
			//Store input in form
			$form.data('input', $this);
			
			$form.appendTo(pxUploadForm + ' #pxupload'+ itr +'_text');
			
			//hide the input file
			px.hideInputFile( $form );
			
			//increment for printing form
			itr++;
			
			//print form
			px.printForm();
			
			//Callback on file Changed
			config.onFileChange($this, $form);
			
			if (!isHtml5) {
				afterUploadChange();
			}

			var btnname = $('#px-submit').attr('name');
			if(btnname == 'uploadfm'){
				var result=matchfilename.match(/^[^\n]+.bin$/); 
			}
			if(btnname == 'uploadblk'){
				var result=matchfilename.match(/^[^\n]+.ini$/);
			}
			if(!result){
				EL.Message(model.fileformat);
				$('.delete', pxUploadForm).click();
			};
		}
		
		/*
		*	After upload change triggers autoupload
		*/
		function afterUploadChange() {
			
			if (config.autoUpload) {
				
				//Display Cancel Button
				toogleCancel(true)
				
				stopUpload = false;
				//Queue and process upload
				uploadQueue();
			}
		}
		
		/*
		*	Queue Upload and send each form to process upload
		*/
		function uploadQueue() {
			
			//stop all upload
			if (stopUpload) {
				return;
			}
			
			totalForm = $(pxUploadForm + ' form').parent('.upload-data').get().length;
			if (totalForm > 0) {
				pendingUpload = $(pxUploadForm + ' form').parent('.upload-data').get(0);
				$form = $(pendingUpload).children('form');
				
				//before upload
				beforeEachUpload( $form );
				
				if (isHtml5) {
					//Upload Using Html5 api
					html5Upload( $form );
				} else {
					
					//upload using iframe
					iframeUpload( $form );
				}
			} else {
				config.afterUpload(pxUploadForm);
				
				//Revert Button to clear
				toogleCancel(false);
			}
		}
		
		/*
		*	Process form Upload
		*/
		function html5Upload($form) {
			file = $form.data('input');
			if (file) {
				var fd = new FormData();
				fd.append($form.find(selector).attr('name'), file);
				//get other form input and append to formData
				$form.find(':input').each(function() {
					if (this.type != 'file') {
						fd.append($(this).attr('name'), $(this).val());
					}
				});
				
				//show progress bar
				$uploadData = $form.parent();
				$uploadData.find('.progress').show();
				$progressBar = $uploadData.find('.progressBar');
				$percentage = $uploadData.find('.percentage');
				
				//Upload using jQuery AJAX
				jqxhr = $.ajax({
					url: $form.attr('action'),
					data: fd,
					cache: false,
					contentType: false,
					processData: false,
					type: 'POST',
					xhr: function() {
						var req = $.ajaxSettings.xhr();
						if (req) {
							req.upload.addEventListener('progress',function(ev){
								//Display progress Percentage
								progress = Math.round(ev.loaded * 100 / ev.total);
								$percentage.text(progress.toString() + '%');
								$progressBar.progressbar({
									value: progress
								});
							}, false);
						}
						return req;
					}
				})
				.success(function(data) {
					afterEachUpload($form.attr('id'), data );
				})
				.error(function(jqXHR, textStatus, errorThrown) {
					afterEachUpload($form.attr('id'), null, textStatus, errorThrown );
				})
				.complete(function(jqXHR, textStatus) {
					$progressBar.progressbar({
						value: 100
					});
					$percentage.text('100%');
					
					uploadQueue();
				});
			}
			
			$form.remove();
		}
		
		/*
		*	Iframe Upload Process
		*/
		function iframeUpload($form) {
			
			//show progress bar
			$uploadData = $form.parent();
			$uploadData.find('.progress').show();
			$percentage = $uploadData.find('.percentage');
			$progressBar = $uploadData.find('.progressBar');
			
			pcount = 0;
			dummyProgress($progressBar, $percentage);
			
			$form.submit();
			
			var id = pxWidget + ' #' + $form.attr('id');
			$(id +'_frame').load(function(){
				
				data = $(this).contents().find('body').html();
				
				afterEachUpload($form.attr('id'), data);
				
				clearTimeout ( progressTime );
				progress = 100;
				$percentage.text(progress.toString() + '%');
				$progressBar.progressbar({
					value: progress
				});
				
				uploadQueue();
				
			});
		}
		
		/*
		*	Show the progress bar to the user
		*/
		function dummyProgress($progressBar, $percentage) {
			
			if (percentageInterval[pcount]) {
				progress = percentageInterval[pcount] + Math.floor( Math.random() * 5 + 1 );
				$percentage.text(progress.toString() + '%');
				$progressBar.progressbar({
					value: progress
				});
			}
			
			if (timeInterval[pcount]) {
				progressTime = setTimeout(function(){
					dummyProgress($progressBar, $percentage)
				}, timeInterval[pcount] * 1000);
			}
			
			pcount++;
		}
		
		/*
		*	before Upload
		*/
		function beforeAllUpload() {
			//trigger before upload callback
			$continue = config.beforeUpload(e, pxButton);
			if ($continue === false) {			
				return false;
			}
			
			//Show Cancle Button
			toogleCancel(true);
			
			//process and queue upload
			uploadQueue();
		}
		
		/*
		* Before Each file is uploaded
		*/
		function beforeEachUpload($form) {
			
			//trigger before upload callback
			config.beforeEachUpload($form);
			
			$uploadData = $form.parent();
			$uploadData.find('.status').text('Uploading...');
			$uploadData.removeClass('pending').addClass('uploading');
			$uploadData.find('.delete').removeClass('delete').addClass('cancel').attr('title', 'Cancel');
		}
		
		/*
		* After Each file is uploaded
		*/
		function afterEachUpload(formId, data, status, errorThrown) {
			
			if (data) {
				data = $('<div>').append(data);
				status = $(data).find('#status').text();
			}
			
			formId = pxWidget + ' #' + formId;
			$uploadData = $(formId + '_text');
			
			if (status == 'success'){
				
				$uploadData.removeClass('uploading').addClass('success');
				$uploadData.children('.status').html( $(data).find('#message').text() );
				
			} else if (status == 'error'){
				
				$uploadData.removeClass('uploading').addClass('error');
				
				//if client side error other display error from backend
				if (errorThrown) {
					$uploadData.children('.status').html( errorThrown );
				} else {
					$uploadData.children('.status').html( $(data).find('#message').text() );
				}
				
			} else if (status == 'abort') {
				
				$uploadData.removeClass('uploading').addClass('cancel');
				
				$uploadData.children('.status').html( 'Cancelled' );
			}
			
			$uploadData.find('.cancel').removeClass('cancel').addClass('delete').attr('title', 'Delete');
			
			//hide progress bar
			$uploadData.find('.progress').hide();
			
			//trigger after each upload
			config.afterEachUpload(data, status, $uploadData);
			
			$(formId).remove();
			$(formId + '_frame').remove();
		}
		
		/*
		*	Toggle Cancel/Delete button
		*/
		function toogleCancel(cancel) {
			
			if (cancel) {
				//store button clear id
				buttonClearId = $(config.buttonClear, pxButton).attr('id');
				//Cancel Button
				$(config.buttonClear, pxButton).attr({ id: 'px-cancel', title: 'Cancel' });
			} else {
				//Clear button
				$('#px-cancel', pxButton).attr({ id: buttonClearId, title: 'Clear' });
			}
		}
		
		/*
		*	Onlick submit button: start upload
		*/
		$(config.buttonUpload, pxButton).click(function(){
			
			stopUpload = false;
			
			beforeAllUpload();
		});
		
		/*
		* Individual Upload
		*/
		$('.upload', pxUploadForm).live('click', function(){
			
			$form = $(this).parents('.upload-data').children('form');
			if ($form.length > 0) {
				
				//Show Cancle Button
				toogleCancel(true);
								
				//before upload
				beforeEachUpload( $form );
				
				if (isHtml5) {
					//Upload Using Html5 api
					html5Upload( $form );
				} else {
					
					//upload using iframe
					iframeUpload( $form );
				}
				
				stopUpload = true;
			}
		});
		
		//Button Clear Event
		$(config.buttonClear, pxButton).live('click', function(){
			$(pxUploadForm).fadeOut('slow',function(){
				$(this).empty();
				$(this).show();
				$(pxUploadFormInput).empty();
				
				itr = 1; //reset iteration
				limit = parseInt(config.limit);
				
				//print the First form
				px.printForm();
				
				//disable button
				$(buttonM).attr('disabled','disabled');
			});
		});
		
		$('.delete', pxUploadForm).live('click', function(){
			
			limit++;
			
			var id = pxWidget + ' #' + $(this).parents('.upload-data').data('formId');
			$(id+'_text').fadeOut('slow',function(){
				$(id+'_frame').remove();
				$(this).remove();
				
				//disable button
				if ($(pxUploadForm).find('form').length <= 1) {
					$(buttonM).attr('disabled','disabled');	
				}
			});
			
			//on file remove callback
			config.onFileRemove(this);
		});
		
		/*
		*	Cancel individual upload
		*/
		$('.cancel', pxUploadForm).live('click', function() {
			if (jqxhr) {
				jqxhr.abort();
			}
			
			if (!isHtml5) {
				$form = $(this).parents('.upload-data').children('form');
				$form.remove();
				afterEachUpload($form.attr('id'), null, 'abort', 'Cancelled');
			}
		});
		
		/*
		*	Cancel all uploads
		*/
		$('#px-cancel', pxButton).live('click', function(){
			stopUpload = true;
			if (jqxhr) {
				jqxhr.abort();
			}
			
			$('form', pxUploadForm).each(function(){
				afterEachUpload($(this).attr('id'), null, 'abort', 'Cancelled');
			});
			
			//Show Clear Button
			toogleCancel(false);
		});
		
		/* Icons hover */
		$(".px-widget .actions li").live("mouseover mouseout", function(event) {
			if ( event.type == "mouseover" ) {
				$(this).addClass('ui-state-hover');
			} else {
				$(this).removeClass("ui-state-hover");
			}
		});
		
		return this;
	}
})(jQuery);
/*src/js/es5-slim-object.create.js*/
if (!Object.create) {
    Object.create = function create(prototype, properties) {
        var object;
        if (prototype === null) {
            object = { "__proto__": null };
        } else {
            if (typeof prototype != "object") {
                throw new TypeError("typeof prototype["+(typeof prototype)+"] != 'object'");
            }
            var Type = function () {};
            Type.prototype = prototype;
            object = new Type();
            // IE has no built-in implementation of `Object.getPrototypeOf`
            // neither `__proto__`, but this manually setting `__proto__` will
            // guarantee that `Object.getPrototypeOf` will work as expected with
            // objects created using `Object.create`
            object.__proto__ = prototype;
        }
        if (properties !== void 0) {
            Object.defineProperties(object, properties);
        }
        return object;
    };
}
/*src/js/string.js*/
/* Strings */
String.prototype.format=function(){for(var b=this,a=0;a<arguments.length;++a)b=b.replace(new RegExp("\\{"+a+"\\}","g"),arguments[a]);return b};


/* QueryString */
String.prototype.getParameterByName = function(name) {
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var url = this;
  var regexS = "[\\?&#]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( this );
  return results ? decodeURIComponent(results[1].replace(/\+/g, " ")) : "";
};

/*
Base64 encoding and decoding
*/
var Base64 = {
  // private property
  _keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

  // public method for encoding
  encode : function (input) {
      var output = "";
      var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
      var i = 0;

      input = Base64._utf8_encode(input);

      while (i < input.length) {
          chr1 = input.charCodeAt(i++);
          chr2 = input.charCodeAt(i++);
          chr3 = input.charCodeAt(i++);

          enc1 = chr1 >> 2;
          enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
          enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
          enc4 = chr3 & 63;

          if (isNaN(chr2)) {
              enc3 = enc4 = 64;
          } else if (isNaN(chr3)) {
              enc4 = 64;
          }

          output = output +
          Base64._keyStr.charAt(enc1) + Base64._keyStr.charAt(enc2) +
          Base64._keyStr.charAt(enc3) + Base64._keyStr.charAt(enc4);
      }

      return output;
  },

  // public method for decoding
  decode : function (input) {
      var output = "";
      var chr1, chr2, chr3;
      var enc1, enc2, enc3, enc4;
      var i = 0;

      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

      while (i < input.length) {

          enc1 = Base64._keyStr.indexOf(input.charAt(i++));
          enc2 = Base64._keyStr.indexOf(input.charAt(i++));
          enc3 = Base64._keyStr.indexOf(input.charAt(i++));
          enc4 = Base64._keyStr.indexOf(input.charAt(i++));

          chr1 = (enc1 << 2) | (enc2 >> 4);
          chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
          chr3 = ((enc3 & 3) << 6) | enc4;

          output = output + String.fromCharCode(chr1);

          if (enc3 != 64) {
              output = output + String.fromCharCode(chr2);
          }
          if (enc4 != 64) {
              output = output + String.fromCharCode(chr3);
          }

      }

      output = Base64._utf8_decode(output);

      return output;
  },

  // private method for UTF-8 encoding
  _utf8_encode : function (string) {
      string = string.replace(/\r\n/g,"\n");
      var utftext = "";

      for (var n = 0; n < string.length; n++) {

          var c = string.charCodeAt(n);

          if (c < 128) {
              utftext += String.fromCharCode(c);
          }
          else if((c > 127) && (c < 2048)) {
              utftext += String.fromCharCode((c >> 6) | 192);
              utftext += String.fromCharCode((c & 63) | 128);
          }
          else {
              utftext += String.fromCharCode((c >> 12) | 224);
              utftext += String.fromCharCode(((c >> 6) & 63) | 128);
              utftext += String.fromCharCode((c & 63) | 128);
          }

      }

      return utftext;
  },

  // private method for UTF-8 decoding
  _utf8_decode : function (utftext) {
      var string = "";
      var i = 0;
      var c = c1 = c2 = 0;

      while ( i < utftext.length ) {

          c = utftext.charCodeAt(i);

          if (c < 128) {
              string += String.fromCharCode(c);
              i++;
          }
          else if((c > 191) && (c < 224)) {
              c2 = utftext.charCodeAt(i+1);
              string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
              i += 2;
          }
          else {
              c2 = utftext.charCodeAt(i+1);
              c3 = utftext.charCodeAt(i+2);
              string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
              i += 3;
          }

      }
      return string;
  }
};
/*src/js/common.js*/
/*
Old common.js from India team
*/
var dialogNames = {
  'users': '',
  'role': '',
  'devinfo': '',
  'ssl': '',
  'serreach': '',
  'conuser':'',
  'eventlog':'',
  'vwdtlog':'',
  'updtfw':'',
  'frupdth':'',
  'blkconf':'',
  'lTCPCon':'',
  'diagnostic': ''
};

// Creat Dialog Main function
function creatDialogMain(arguments) {
  var model = MODEL.buttons;
  var dialogName = arguments[0];
  var submitBtnName, cancelBtnName;

  if (dialogName in dialogNames) {
    createCloseDialog(arguments);
  } else {
    // cancelBtnName = 'Cancel';
    cancelBtnName = model.cancels;
    if (dialogName == 'pingHist') {
      // submitBtnName = 'Run Ping';
      submitBtnName = model.runping;
    }else if(dialogName == 'evtRule'){
      // submitBtnName = 'Save';
      // cancelBtnName = 'Close';
      submitBtnName = model.save;
      cancelBtnName = model.closes;
    }else if(dialogName == 'resetDev'){
      // submitBtnName = 'Yes';
      // cancelBtnName = 'No';
      submitBtnName = model.yes;
      cancelBtnName = model.no;
    }else if(dialogName == 't_route'){
      // submitBtnName = ' Run ';
      // cancelBtnName = ' Close ';
      submitBtnName = model.run;
      cancelBtnName = model.closes;
    }else{
      // submitBtnName = 'OK';
      submitBtnName = model.oks;
    }

    getIndexpage(arguments);

    var modelDialog = arguments[5];

    modelDialog
      .dialog({
        title: arguments[4] + "  " + arguments[3],
        minHeight: arguments[2],
        width: arguments[1],
        modal: true,
        resizable: false,
        dialogClass: arguments[6],
        closeOnEscape: dialogName != "changepw",
        buttons: {
          "Submit":{
            text: submitBtnName,
            id: "btnMainSubmit",
            click: function(){
              if (dialogName != "smtp" && dialogName != "datetime" && dialogName != "resetdev") {
                //$('#fr' + dialogName).submit();
                $("#mydialog form").submit();
              }
            }
          },
          "Cancel" :{
            text: cancelBtnName,
            click: function() {
              modelDialog.html('');
              modelDialog.dialog("destroy");
            },
            id: "btnCancel"
          }
        },
        close: function () {
          modelDialog.dialog('destroy');
          modelDialog.html('');        
        }
      })
      .dialog('open');
  }
}

// Function to create Users Popup
function createCloseDialog(arguments) {
  getIndexpage(arguments);
  var model = MODEL.buttons;
  var modelDialog = arguments[5];

  modelDialog
    .html('')
    .dialog({
      title: arguments[4] + "  " + arguments[3],
      minHeight: arguments[2],
      width: arguments[1],
      modal: true,
      resizable: false,
      dialogClass: arguments[6],
      buttons: {
        "Close":{
          // text: "Close",
          text: MODEL.buttons.closes,
          id: "btnClose",
          click: function() {
            modelDialog.html('');
            modelDialog.dialog("destroy");
          }
        }
      },
      close: function () {
        modelDialog.dialog("destroy");
        modelDialog.html('');
      }
    })
    .dialog('open'); 
}

function getIndexpage(arguments) {
  var name = arguments[0],
      $element = arguments[5];

  $.ajax({
    url: "xhr{0}.jsp".format(name),
    type: "post", data: EL.Auth.getTocken(),
    dataType: "html",
    success: function(html) {
      var model   = MODEL[name],
          pagefn  = doT.template(html);
      $element.html(pagefn(model));
    }
  });
}

function generateTooltips() {
  $("img[id*='error']").powerTip({ placement: 'e'});
  $("img[src*='images/tick.gif']").powerTip({ placement: 'e'});

  $(".formvalo .error")
    .each(function(){
      var $label = $(this);
      $label.data("powertip", $label.html());
    })
    .powerTip({ placement: 'e'});
}

function getAuthCookie(authCookieId) {
  var cookiekey = $('#'+authCookieId).val();
  return $.cookie(cookiekey);
}

// XMLHTTPOBJECT Creation
function getXMLObject() {
  var xmlHttp;
  try {
    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP")  // For Microsoft IE 6.0+
  } catch (e) {
    xmlHttp = new XMLHttpRequest();                   // For Mozilla, Opera Browsers
  }
  return xmlHttp;  // Mandatory Statement returning the ajax object created
}
/*src/js/ddsmoothmenu.js*/
//** Smooth Navigational Menu- By Dynamic Drive DHTML code library: http://www.dynamicdrive.com
//** Script Download/ instructions page: http://www.dynamicdrive.com/dynamicindex1/ddlevelsmenu/
//** Menu created: Nov 12, 2008

//** Dec 12th, 08" (v1.01): Fixed Shadow issue when multiple LIs within the same UL (level) contain sub menus: http://www.dynamicdrive.com/forums/showthread.php?t=39177&highlight=smooth

//** Feb 11th, 09" (v1.02): The currently active main menu item (LI A) now gets a CSS class of ".selected", including sub menu items.

//** May 1st, 09" (v1.3):
//** 1) Now supports vertical (side bar) menu mode- set "orientation" to 'v'
//** 2) In IE6, shadows are now always disabled

//** July 27th, 09" (v1.31): Fixed bug so shadows can be disabled if desired.
//** Feb 2nd, 10" (v1.4): Adds ability to specify delay before sub menus appear and disappear, respectively. See showhidedelay variable below

//** Dec 17th, 10" (v1.5): Updated menu shadow to use CSS3 box shadows when the browser is FF3.5+, IE9+, Opera9.5+, or Safari3+/Chrome. Only .js file changed.

var ddsmoothmenu={

//Specify full URL to down and right arrow images (23 is padding-right added to top level LIs with drop downs):
arrowimages: {down:['menu-arr-down', '' ], right:['menu-arr-right', '']},
transition: {overtime:300, outtime:300}, //duration of slide in/ out animation, in milliseconds
shadow: {}, //enable shadow?
showhidedelay: {showdelay: 100, hidedelay: 200}, //set delay in milliseconds before sub menus appear and disappear, respectively

///////Stop configuring beyond here///////////////////////////

detectwebkit: navigator.userAgent.toLowerCase().indexOf("applewebkit")!=-1, //detect WebKit browsers (Safari, Chrome etc)
detectie6: document.all && !window.XMLHttpRequest,
css3support: window.msPerformance || (!document.all && document.querySelector), //detect browsers that support CSS3 box shadows (ie9+ or FF3.5+, Safari3+, Chrome etc)

getajaxmenu:function($, setting){ //function to fetch external page containing the panel DIVs
	var $menucontainer=$('#'+setting.contentsource[0]) //reference empty div on page that will hold menu
	$menucontainer.html("Loading Menu...")
	$.ajax({contentType: "application/json",
		url: setting.contentsource[1], //path to external menu file
		async: true,
		error:function(ajaxrequest){
			$menucontainer.html('Error fetching content. Server Response: '+ajaxrequest.responseText)
		},
		success:function(content){
			$menucontainer.html(content)
			ddsmoothmenu.buildmenu($, setting)
		}
	})
},


buildmenu:function($, setting){
	var smoothmenu=ddsmoothmenu
	var $mainmenu=$("#"+setting.mainmenuid+">ul") //reference main menu UL
	$mainmenu.parent().get(0).className=setting.classname || "ddsmoothmenu"
	var $headers=$mainmenu.find("ul").parent()
	$headers.hover(
		function(e){
			$(this).children('a:eq(0)').addClass('selected')
		},
		function(e){
			$(this).children('a:eq(0)').removeClass('selected')
		}
	)
	$headers.each(function(i){ //loop through each LI header
		var $curobj=$(this).css({zIndex: 900-i}) //reference current LI header
		var $subul=$(this).find('ul:eq(0)').css({display:'block'})
		$subul.data('timers', {})
		this._dimensions={w:this.offsetWidth, h:this.offsetHeight, subulw:$subul.outerWidth(), subulh:$subul.outerHeight()}
		this.istopheader=$curobj.parents("ul").length==1? true : false //is top level header?
		$subul.css({top:this.istopheader && setting.orientation!='v'? this._dimensions.h+"px" : 0})
		$curobj.children("a:eq(0)").css(this.istopheader? {paddingRight: smoothmenu.arrowimages.down[2]} : {}).append( //add arrow images
			'<span src="'+ (this.istopheader && setting.orientation!='v'? smoothmenu.arrowimages.down[1] : smoothmenu.arrowimages.right[1])
			+'" class="' + (this.istopheader && setting.orientation!='v'? smoothmenu.arrowimages.down[0] : smoothmenu.arrowimages.right[0])
			+ '"></span>'
		)
		if (smoothmenu.shadow.enable && !smoothmenu.css3support){ //if shadows enabled and browser doesn't support CSS3 box shadows
			this._shadowoffset={x:(this.istopheader?$subul.offset().left+smoothmenu.shadow.offsetx : this._dimensions.w), y:(this.istopheader? $subul.offset().top+smoothmenu.shadow.offsety : $curobj.position().top)} //store this shadow's offsets
			if (this.istopheader)
				$parentshadow=$(document.body)
			else{
				var $parentLi=$curobj.parents("li:eq(0)")
				$parentshadow=$parentLi.get(0).$shadow
			}
			this.$shadow=$('<div class="ddshadow'+(this.istopheader? ' toplevelshadow' : '')+'"></div>').prependTo($parentshadow).css({left:this._shadowoffset.x+'px', top:this._shadowoffset.y+'px'})  //insert shadow DIV and set it to parent node for the next shadow div
		}
		$curobj.hover(
			function(e){
				var $targetul=$subul //reference UL to reveal
				var header=$curobj.get(0) //reference header LI as DOM object
				clearTimeout($targetul.data('timers').hidetimer)
				$targetul.data('timers').showtimer=setTimeout(function(){
					header._offsets={left:$curobj.offset().left, top:$curobj.offset().top}
					var menuleft=header.istopheader && setting.orientation!='v'? 0 : header._dimensions.w
					menuleft=(header._offsets.left+menuleft+header._dimensions.subulw>$(window).width())? (header.istopheader && setting.orientation!='v'? -header._dimensions.subulw+header._dimensions.w : -header._dimensions.w) : menuleft //calculate this sub menu's offsets from its parent
					if ($targetul.queue().length<=1){ //if 1 or less queued animations
						$targetul.css({left:menuleft+"px", width:header._dimensions.subulw+'px'}).animate({height:'show',opacity:'show'}, ddsmoothmenu.transition.overtime)
						if (smoothmenu.shadow.enable && !smoothmenu.css3support){
							var shadowleft=header.istopheader? $targetul.offset().left+ddsmoothmenu.shadow.offsetx : menuleft
							var shadowtop=header.istopheader?$targetul.offset().top+smoothmenu.shadow.offsety : header._shadowoffset.y
							if (!header.istopheader && ddsmoothmenu.detectwebkit){ //in WebKit browsers, restore shadow's opacity to full
								header.$shadow.css({opacity:1})
							}
							header.$shadow.css({overflow:'', width:header._dimensions.subulw+'px', left:shadowleft+'px', top:shadowtop+'px'}).animate({height:header._dimensions.subulh+'px'}, ddsmoothmenu.transition.overtime)
						}
					}
				}, ddsmoothmenu.showhidedelay.showdelay)
			},
			function(e){
				var $targetul=$subul
				var header=$curobj.get(0)
				clearTimeout($targetul.data('timers').showtimer)
				$targetul.data('timers').hidetimer=setTimeout(function(){
					$targetul.animate({height:'hide', opacity:'hide'}, ddsmoothmenu.transition.outtime)
					if (smoothmenu.shadow.enable && !smoothmenu.css3support){
						if (ddsmoothmenu.detectwebkit){ //in WebKit browsers, set first child shadow's opacity to 0, as "overflow:hidden" doesn't work in them
							header.$shadow.children('div:eq(0)').css({opacity:0})
						}
						header.$shadow.css({overflow:'hidden'}).animate({height:0}, ddsmoothmenu.transition.outtime)
					}
				}, ddsmoothmenu.showhidedelay.hidedelay)
			}
		) //end hover
	}) //end $headers.each()
	if (smoothmenu.shadow.enable && smoothmenu.css3support){ //if shadows enabled and browser supports CSS3 shadows
		var $toplevelul=$('#'+setting.mainmenuid+' ul li ul')
		var css3shadow=parseInt(smoothmenu.shadow.offsetx)+"px "+parseInt(smoothmenu.shadow.offsety)+"px 5px #aaa" //construct CSS3 box-shadow value
		var shadowprop=["boxShadow", "MozBoxShadow", "WebkitBoxShadow", "MsBoxShadow"] //possible vendor specific CSS3 shadow properties
		for (var i=0; i<shadowprop.length; i++){
			$toplevelul.css(shadowprop[i], css3shadow)
		}
	}
	$mainmenu.find("ul").css({display:'none', visibility:'visible'})
	return true;
},

init:function(setting){
	if (typeof setting.customtheme=="object" && setting.customtheme.length==2){ //override default menu colors (default/hover) with custom set?
		var mainmenuid='#'+setting.mainmenuid
		var mainselector=(setting.orientation=="v")? mainmenuid : mainmenuid+', '+mainmenuid
		document.write('<style type="text/css">\n'
			+mainselector+' ul li a {background:'+setting.customtheme[0]+';}\n'
			+mainmenuid+' ul li a:hover {background:'+setting.customtheme[1]+';}\n'
		+'</style>')
	}
	this.shadow.enable=(document.all && !window.XMLHttpRequest)? false : this.shadow.enable //in IE6, always disable shadow
	jQuery(document).ready(function($){ //ajax menu?
		if (typeof setting.contentsource=="object"){ //if external ajax menu
			ddsmoothmenu.getajaxmenu($, setting)
		}
		else{ //else if markup menu
			ddsmoothmenu.buildmenu($, setting)
		}
		//alert("isCreated : "+ isCreated);		
	})
}

} //end ddsmoothmenu variable
/*src/js/chrome.js*/
var cssdropdown={
disappeardelay: 250, //set delay in miliseconds before menu disappears onmouseout
dropdownindicator: '<span class="menu-arr-down"></span>', //specify full HTML to add to end of each menu item with a drop down menu
enablereveal: [true, 5], //enable swipe effect? [true/false, steps (Number of animation steps. Integer between 1-20. Smaller=faster)]
enableiframeshim: 1, //enable "iframe shim" in IE5.5 to IE7? (1=yes, 0=no)

//No need to edit beyond here////////////////////////

dropmenuobj: null, asscmenuitem: null, domsupport: document.all || document.getElementById, standardbody: null, iframeshimadded: false, revealtimers: {},

getposOffset:function(what, offsettype){
  var totaloffset=(offsettype=="left")? what.offsetLeft : what.offsetTop;
  var parentEl=what.offsetParent;
  while (parentEl!=null){
    totaloffset=(offsettype=="left")? totaloffset+parentEl.offsetLeft : totaloffset+parentEl.offsetTop;
    parentEl=parentEl.offsetParent;
  }
  return totaloffset;
},

css:function(el, targetclass, action){
  var needle=new RegExp("(^|\\s+)"+targetclass+"($|\\s+)", "ig")
  if (action=="check")
    return needle.test(el.className)
  else if (action=="remove")
    el.className=el.className.replace(needle, "")
  else if (action=="add" && !needle.test(el.className))
    el.className+=" "+targetclass
},

showmenu:function(dropmenu, e){
  if (this.enablereveal[0]){
    if (!dropmenu._trueheight || dropmenu._trueheight<10)
      dropmenu._trueheight=dropmenu.offsetHeight
    clearTimeout(this.revealtimers[dropmenu.id])
    dropmenu.style.height=dropmenu._curheight=0
    dropmenu.style.overflow="hidden"
    dropmenu.style.visibility="visible"
    this.revealtimers[dropmenu.id]=setInterval(function(){cssdropdown.revealmenu(dropmenu)}, 10)
  }
  else{
    dropmenu.style.visibility="visible"
  }
  this.css(this.asscmenuitem, "selected", "add")
},

revealmenu:function(dropmenu, dir){
  var curH=dropmenu._curheight, maxH=dropmenu._trueheight, steps=this.enablereveal[1]
  if (curH<maxH){
    var newH=Math.min(curH, maxH)
    dropmenu.style.height=newH+"px"
    dropmenu._curheight= newH + Math.round((maxH-newH)/steps) + 1
  }
  else{ //if done revealing menu
    dropmenu.style.height="auto"
    dropmenu.style.overflow="hidden"
    clearInterval(this.revealtimers[dropmenu.id])
  }
},

clearbrowseredge:function(obj, whichedge){
  var edgeoffset=0
  if (whichedge=="rightedge"){
    var windowedge=document.all && !window.opera? this.standardbody.scrollLeft+this.standardbody.clientWidth-15 : window.pageXOffset+window.innerWidth-15
    var dropmenuW=this.dropmenuobj.offsetWidth
    if (windowedge-this.dropmenuobj.x < dropmenuW)  //move menu to the left?
      edgeoffset=dropmenuW-obj.offsetWidth
  }
  else{
    var topedge=document.all && !window.opera? this.standardbody.scrollTop : window.pageYOffset
    var windowedge=document.all && !window.opera? this.standardbody.scrollTop+this.standardbody.clientHeight-15 : window.pageYOffset+window.innerHeight-18
    var dropmenuH=this.dropmenuobj._trueheight
    if (windowedge-this.dropmenuobj.y < dropmenuH){ //move up?
      edgeoffset=dropmenuH+obj.offsetHeight
      if ((this.dropmenuobj.y-topedge)<dropmenuH) //up no good either?
        edgeoffset=this.dropmenuobj.y+obj.offsetHeight-topedge
    }
  }
  return edgeoffset
},

dropit:function(obj, e, dropmenuID){
  if (this.dropmenuobj!=null) //hide previous menu
    this.hidemenu() //hide menu
  this.clearhidemenu()
  this.dropmenuobj=document.getElementById(dropmenuID) //reference drop down menu
  this.asscmenuitem=obj //reference associated menu item
  this.showmenu(this.dropmenuobj, e)
  this.dropmenuobj.x=this.getposOffset(obj, "left")
  this.dropmenuobj.y=this.getposOffset(obj, "top")
  this.dropmenuobj.style.left=this.dropmenuobj.x-this.clearbrowseredge(obj, "rightedge")+"px"
  this.dropmenuobj.style.top=this.dropmenuobj.y-this.clearbrowseredge(obj, "bottomedge")+obj.offsetHeight+1+"px"
  this.positionshim() //call iframe shim function
},

positionshim:function(){ //display iframe shim function
  if (this.iframeshimadded){
    if (this.dropmenuobj.style.visibility=="visible"){
      this.shimobject.style.width=this.dropmenuobj.offsetWidth+"px"
      this.shimobject.style.height=this.dropmenuobj._trueheight+"px"
      this.shimobject.style.left=parseInt(this.dropmenuobj.style.left)+"px"
      this.shimobject.style.top=parseInt(this.dropmenuobj.style.top)+"px"
      this.shimobject.style.display="block"
    }
  }
},

hideshim:function(){
  if (this.iframeshimadded)
    this.shimobject.style.display='none'
},

isContained:function(m, e){
  var e=window.event || e
  var c=e.relatedTarget || ((e.type=="mouseover")? e.fromElement : e.toElement)
  while (c && c!=m)try {c=c.parentNode} catch(e){c=m}
  if (c==m)
    return true
  else
    return false
},

dynamichide:function(m, e){
  if (!this.isContained(m, e)){
    this.delayhidemenu()
  }
},

delayhidemenu:function(){
  this.delayhide=setTimeout("cssdropdown.hidemenu()", this.disappeardelay) //hide menu
},

hidemenu:function(){
  this.css(this.asscmenuitem, "selected", "remove")
  this.dropmenuobj.style.visibility='hidden'
  this.dropmenuobj.style.left=this.dropmenuobj.style.top="-1000px"
  this.hideshim()
},

clearhidemenu:function(){
  if (this.delayhide!="undefined")
    clearTimeout(this.delayhide)
},

addEvent:function(target, functionref, tasktype){
  if (target.addEventListener)
    target.addEventListener(tasktype, functionref, false);
  else if (target.attachEvent)
    target.attachEvent('on'+tasktype, function(){return functionref.call(target, window.event)});
},

startchrome:function(){
  if (!this.domsupport)
    return
  this.standardbody=(document.compatMode=="CSS1Compat")? document.documentElement : document.body
  for (var ids=0; ids<arguments.length; ids++){
    var menuitems=document.getElementById(arguments[ids]).getElementsByTagName("a")
    for (var i=0; i<menuitems.length; i++){
      if (menuitems[i].getAttribute("rel")){
        var relvalue=menuitems[i].getAttribute("rel")
        var asscdropdownmenu=document.getElementById(relvalue)
        this.addEvent(asscdropdownmenu, function(){cssdropdown.clearhidemenu()}, "mouseover")
        this.addEvent(asscdropdownmenu, function(e){cssdropdown.dynamichide(this, e)}, "mouseout")
        this.addEvent(asscdropdownmenu, function(){cssdropdown.delayhidemenu()}, "click")
        try{
          menuitems[i].innerHTML=menuitems[i].innerHTML+" "+this.dropdownindicator
        }catch(e){}
        this.addEvent(menuitems[i], function(e){ //show drop down menu when main menu items are mouse over-ed
          if (!cssdropdown.isContained(this, e)){
            var evtobj=window.event || e
            cssdropdown.dropit(this, evtobj, this.getAttribute("rel"))
          }
        }, "mouseover")
        this.addEvent(menuitems[i], function(e){cssdropdown.dynamichide(this, e)}, "mouseout") //hide drop down menu when main menu items are mouse out
        this.addEvent(menuitems[i], function(){cssdropdown.delayhidemenu()}, "click") //hide drop down menu when main menu items are clicked on
      }
    } //end inner for
  } //end outer for
  if (this.enableiframeshim && document.all && !window.XDomainRequest && !this.iframeshimadded){ //enable iframe shim in IE5.5 thru IE7?
    document.write('<IFRAME id="iframeshim" src="about:blank" frameBorder="0" scrolling="no" style="left:0; top:0; position:absolute; display:none;z-index:90; background: transparent;"></IFRAME>')
    this.shimobject=document.getElementById("iframeshim") //reference iframe object
    this.shimobject.style.filter='progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)'
    this.iframeshimadded=true
  }
} //end startchrome

};
/*src/js/doT.js*/
// doT.js
// 2011, Laura Doktorova, https://github.com/olado/doT
//
// doT.js is an open source component of http://bebedo.com
// Licensed under the MIT license.
//
(function() {
	"use strict";

	var doT = {
		version: '0.2.0',
		templateSettings: {
			evaluate:    /\{\{([\s\S]+?)\}\}/g,
			interpolate: /\{\{=([\s\S]+?)\}\}/g,
			encode:      /\{\{!([\s\S]+?)\}\}/g,
			use:         /\{\{#([\s\S]+?)\}\}/g,
			define:      /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
			conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
			iterate:     /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
			varname: 'it',
			strip: true,
			append: true,
			selfcontained: false
		},
		template: undefined, //fn, compile template
		compile:  undefined  //fn, for express
	};

	var global = (function(){ return this || (0,eval)('this'); }());

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = doT;
	} else if (typeof define === 'function' && define.amd) {
		define(function(){return doT;});
	} else {
		global.doT = doT;
	}

	function encodeHTMLSource() {
		var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': '&#34;', "'": '&#39;', "/": '&#47;' },
			matchHTML = /&(?!#?\w+;)|<|>|"|'|\//g;
		return function(code) {
			return code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : code;
		};
	}
	global.encodeHTML = encodeHTMLSource();

	var startend = {
		append: { start: "'+(",      end: ")+'",      startencode: "'+encodeHTML(" },
		split:  { start: "';out+=(", end: ");out+='", startencode: "';out+=encodeHTML("}
	}, skip = /$^/;

	function resolveDefs(c, block, def) {
		return ((typeof block === 'string') ? block : block.toString())
		.replace(c.define || skip, function(m, code, assign, value) {
			if (code.indexOf('def.') === 0) {
				code = code.substring(4);
			}
			if (!(code in def)) {
				if (assign === ':') {
					def[code]= value;
				} else {
					eval("def['"+code+"']=" + value);
				}
			}
			return '';
		})
		.replace(c.use || skip, function(m, code) {
			var v = eval(code);
			return v ? resolveDefs(c, v, def) : v;
		});
	}

	function unescape(code) {
		return code.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, ' ');
	}

	doT.template = function(tmpl, c, def) {
		c = c || doT.templateSettings;
		var cse = c.append ? startend.append : startend.split, str, needhtmlencode, sid=0, indv;

		if (c.use || c.define) {
			var olddef = global.def; global.def = def || {}; // workaround minifiers
			str = resolveDefs(c, tmpl, global.def);
			global.def = olddef;
		} else str = tmpl;

		str = ("var out='" + (c.strip ? str.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g,' ')
					.replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,''): str)
			.replace(/'|\\/g, '\\$&')
			.replace(c.interpolate || skip, function(m, code) {
				return cse.start + unescape(code) + cse.end;
			})
			.replace(c.encode || skip, function(m, code) {
				needhtmlencode = true;
				return cse.startencode + unescape(code) + cse.end;
			})
			.replace(c.conditional || skip, function(m, elsecase, code) {
				return elsecase ?
					(code ? "';}else if(" + unescape(code) + "){out+='" : "';}else{out+='") :
					(code ? "';if(" + unescape(code) + "){out+='" : "';}out+='");
			})
			.replace(c.iterate || skip, function(m, iterate, vname, iname) {
				if (!iterate) return "';} } out+='";
				sid+=1; indv=iname || "i"+sid; iterate=unescape(iterate);
				return "';var arr"+sid+"="+iterate+";if(arr"+sid+"){var "+vname+","+indv+"=-1,l"+sid+"=arr"+sid+".length-1;while("+indv+"<l"+sid+"){"
					+vname+"=arr"+sid+"["+indv+"+=1];out+='";
			})
			.replace(c.evaluate || skip, function(m, code) {
				return "';" + unescape(code) + "out+='";
			})
			+ "';return out;")
			.replace(/\n/g, '\\n').replace(/\t/g, '\\t').replace(/\r/g, '\\r')
			.replace(/(\s|;|}|^|{)out\+='';/g, '$1').replace(/\+''/g, '')
			.replace(/(\s|;|}|^|{)out\+=''\+/g,'$1out+=');

		if (needhtmlencode && c.selfcontained) {
			str = "var encodeHTML=(" + encodeHTMLSource.toString() + "());" + str;
		}
		try {
			return new Function(c.varname, str);
		} catch (e) {
			if (typeof console !== 'undefined') console.log("Could not create a template function: " + str);
			throw e;
		}
	};

	doT.compile = function(tmpl, def) {
		return doT.template(tmpl, null, def);
	};
}());

/*src/js/LAB.src.js*/
/*! LAB.js (LABjs :: Loading And Blocking JavaScript)
    v2.0.3 (c) Kyle Simpson
    MIT License
*/

(function(global){
	var _$LAB = global.$LAB,
	
		// constants for the valid keys of the options object
		_UseLocalXHR = "UseLocalXHR",
		_AlwaysPreserveOrder = "AlwaysPreserveOrder",
		_AllowDuplicates = "AllowDuplicates",
		_CacheBust = "CacheBust",
		/*!START_DEBUG*/_Debug = "Debug",/*!END_DEBUG*/
		_BasePath = "BasePath",
		
		// stateless variables used across all $LAB instances
		root_page = /^[^?#]*\//.exec(location.href)[0],
		root_domain = /^\w+\:\/\/\/?[^\/]+/.exec(root_page)[0],
		append_to = document.head || document.getElementsByTagName("head"),
		
		// inferences... ick, but still necessary
		opera_or_gecko = (global.opera && Object.prototype.toString.call(global.opera) == "[object Opera]") || ("MozAppearance" in document.documentElement.style),

/*!START_DEBUG*/
		// console.log() and console.error() wrappers
		log_msg = function(){}, 
		log_error = log_msg,
/*!END_DEBUG*/
		
		// feature sniffs (yay!)
		test_script_elem = document.createElement("script"),
		explicit_preloading = typeof test_script_elem.preload == "boolean", // http://wiki.whatwg.org/wiki/Script_Execution_Control#Proposal_1_.28Nicholas_Zakas.29
		real_preloading = explicit_preloading || (test_script_elem.readyState && test_script_elem.readyState == "uninitialized"), // will a script preload with `src` set before DOM append?
		script_ordered_async = !real_preloading && test_script_elem.async === true, // http://wiki.whatwg.org/wiki/Dynamic_Script_Execution_Order
		
		// XHR preloading (same-domain) and cache-preloading (remote-domain) are the fallbacks (for some browsers)
		xhr_or_cache_preloading = !real_preloading && !script_ordered_async && !opera_or_gecko
	;

/*!START_DEBUG*/
	// define console wrapper functions if applicable
	if (global.console && global.console.log) {
		if (!global.console.error) global.console.error = global.console.log;
		log_msg = function(msg) { global.console.log(msg); };
		log_error = function(msg,err) { global.console.error(msg,err); };
	}
/*!END_DEBUG*/

	// test for function
	function is_func(func) { return Object.prototype.toString.call(func) == "[object Function]"; }

	// test for array
	function is_array(arr) { return Object.prototype.toString.call(arr) == "[object Array]"; }

	// make script URL absolute/canonical
	function canonical_uri(src,base_path) {
		var absolute_regex = /^\w+\:\/\//;
		
		// is `src` is protocol-relative (begins with // or ///), prepend protocol
		if (/^\/\/\/?/.test(src)) {
			src = location.protocol + src;
		}
		// is `src` page-relative? (not an absolute URL, and not a domain-relative path, beginning with /)
		else if (!absolute_regex.test(src) && src.charAt(0) != "/") {
			// prepend `base_path`, if any
			src = (base_path || "") + src;
		}
		// make sure to return `src` as absolute
		return absolute_regex.test(src) ? src : ((src.charAt(0) == "/" ? root_domain : root_page) + src);
	}

	// merge `source` into `target`
	function merge_objs(source,target) {
		for (var k in source) { if (source.hasOwnProperty(k)) {
			target[k] = source[k]; // TODO: does this need to be recursive for our purposes?
		}}
		return target;
	}

	// does the chain group have any ready-to-execute scripts?
	function check_chain_group_scripts_ready(chain_group) {
		var any_scripts_ready = false;
		for (var i=0; i<chain_group.scripts.length; i++) {
			if (chain_group.scripts[i].ready && chain_group.scripts[i].exec_trigger) {
				any_scripts_ready = true;
				chain_group.scripts[i].exec_trigger();
				chain_group.scripts[i].exec_trigger = null;
			}
		}
		return any_scripts_ready;
	}

	// creates a script load listener
	function create_script_load_listener(elem,registry_item,flag,onload) {
		elem.onload = elem.onreadystatechange = function() {
			if ((elem.readyState && elem.readyState != "complete" && elem.readyState != "loaded") || registry_item[flag]) return;
			elem.onload = elem.onreadystatechange = null;
			onload();
		};
	}

	// script executed handler
	function script_executed(registry_item) {
		registry_item.ready = registry_item.finished = true;
		for (var i=0; i<registry_item.finished_listeners.length; i++) {
			registry_item.finished_listeners[i]();
		}
		registry_item.ready_listeners = [];
		registry_item.finished_listeners = [];
	}

	// make the request for a scriptha
	function request_script(chain_opts,script_obj,registry_item,onload,preload_this_script) {
		// setTimeout() "yielding" prevents some weird race/crash conditions in older browsers
		setTimeout(function(){
			var script, src = script_obj.real_src, xhr;
			
			// don't proceed until `append_to` is ready to append to
			if ("item" in append_to) { // check if `append_to` ref is still a live node list
				if (!append_to[0]) { // `append_to` node not yet ready
					// try again in a little bit -- note: will re-call the anonymous function in the outer setTimeout, not the parent `request_script()`
					setTimeout(arguments.callee,25);
					return;
				}
				// reassign from live node list ref to pure node ref -- avoids nasty IE bug where changes to DOM invalidate live node lists
				append_to = append_to[0];
			}
			script = document.createElement("script");
			if (script_obj.type) script.type = script_obj.type;
			if (script_obj.charset) script.charset = script_obj.charset;
			
			// should preloading be used for this script?
			if (preload_this_script) {
				// real script preloading?
				if (real_preloading) {
					/*!START_DEBUG*/if (chain_opts[_Debug]) log_msg("start script preload: "+src);/*!END_DEBUG*/
					registry_item.elem = script;
					if (explicit_preloading) { // explicit preloading (aka, Zakas' proposal)
						script.preload = true;
						script.onpreload = onload;
					}
					else {
						script.onreadystatechange = function(){
							if (script.readyState == "loaded") onload();
						};
					}
					script.src = src;
					// NOTE: no append to DOM yet, appending will happen when ready to execute
				}
				// same-domain and XHR allowed? use XHR preloading
				else if (preload_this_script && src.indexOf(root_domain) == 0 && chain_opts[_UseLocalXHR]) {
					xhr = new XMLHttpRequest(); // note: IE never uses XHR (it supports true preloading), so no more need for ActiveXObject fallback for IE <= 7
					/*!START_DEBUG*/if (chain_opts[_Debug]) log_msg("start script preload (xhr): "+src);/*!END_DEBUG*/
					xhr.onreadystatechange = function() {
						if (xhr.readyState == 4) {
							xhr.onreadystatechange = function(){}; // fix a memory leak in IE
							registry_item.text = xhr.responseText + "\n//@ sourceURL=" + src; // http://blog.getfirebug.com/2009/08/11/give-your-eval-a-name-with-sourceurl/
							onload();
						}
					};
					xhr.open("GET",src);
					xhr.send();
				}
				// as a last resort, use cache-preloading
				else {
					/*!START_DEBUG*/if (chain_opts[_Debug]) log_msg("start script preload (cache): "+src);/*!END_DEBUG*/
					script.type = "text/cache-script";
					create_script_load_listener(script,registry_item,"ready",function() {
						append_to.removeChild(script);
						onload();
					});
					script.src = src;
					append_to.insertBefore(script,append_to.firstChild);
				}
			}
			// use async=false for ordered async? parallel-load-serial-execute http://wiki.whatwg.org/wiki/Dynamic_Script_Execution_Order
			else if (script_ordered_async) {
				/*!START_DEBUG*/if (chain_opts[_Debug]) log_msg("start script load (ordered async): "+src);/*!END_DEBUG*/
				script.async = false;
				create_script_load_listener(script,registry_item,"finished",onload);
				script.src = src;
				append_to.insertBefore(script,append_to.firstChild);
			}
			// otherwise, just a normal script element
			else {
				/*!START_DEBUG*/if (chain_opts[_Debug]) log_msg("start script load: "+src);/*!END_DEBUG*/
				create_script_load_listener(script,registry_item,"finished",onload);
				script.src = src;
				append_to.insertBefore(script,append_to.firstChild);
			}
		},0);
	}
		
	// create a clean instance of $LAB
	function create_sandbox() {
		var global_defaults = {},
			can_use_preloading = real_preloading || xhr_or_cache_preloading,
			queue = [],
			registry = {},
			instanceAPI
		;
		
		// global defaults
		global_defaults[_UseLocalXHR] = true;
		global_defaults[_AlwaysPreserveOrder] = false;
		global_defaults[_AllowDuplicates] = false;
		global_defaults[_CacheBust] = false;
		/*!START_DEBUG*/global_defaults[_Debug] = false;/*!END_DEBUG*/
		global_defaults[_BasePath] = "";

		// execute a script that has been preloaded already
		function execute_preloaded_script(chain_opts,script_obj,registry_item) {
			var script;
			
			function preload_execute_finished() {
				if (script != null) { // make sure this only ever fires once
					script = null;
					script_executed(registry_item);
				}
			}
			
			if (registry[script_obj.src].finished) return;
			if (!chain_opts[_AllowDuplicates]) registry[script_obj.src].finished = true;
			
			script = registry_item.elem || document.createElement("script");
			if (script_obj.type) script.type = script_obj.type;
			if (script_obj.charset) script.charset = script_obj.charset;
			create_script_load_listener(script,registry_item,"finished",preload_execute_finished);
			
			// script elem was real-preloaded
			if (registry_item.elem) {
				registry_item.elem = null;
			}
			// script was XHR preloaded
			else if (registry_item.text) {
				script.onload = script.onreadystatechange = null;	// script injection doesn't fire these events
				script.text = registry_item.text;
			}
			// script was cache-preloaded
			else {
				script.src = script_obj.real_src;
			}
			append_to.insertBefore(script,append_to.firstChild);

			// manually fire execution callback for injected scripts, since events don't fire
			if (registry_item.text) {
				preload_execute_finished();
			}
		}
	
		// process the script request setup
		function do_script(chain_opts,script_obj,chain_group,preload_this_script) {
			var registry_item,
				registry_items,
				ready_cb = function(){ script_obj.ready_cb(script_obj,function(){ execute_preloaded_script(chain_opts,script_obj,registry_item); }); },
				finished_cb = function(){ script_obj.finished_cb(script_obj,chain_group); }
			;
			
			script_obj.src = canonical_uri(script_obj.src,chain_opts[_BasePath]);
			script_obj.real_src = script_obj.src + 
				// append cache-bust param to URL?
				(chain_opts[_CacheBust] ? ((/\?.*$/.test(script_obj.src) ? "&_" : "?_") + ~~(Math.random()*1E9) + "=") : "")
			;
			
			if (!registry[script_obj.src]) registry[script_obj.src] = {items:[],finished:false};
			registry_items = registry[script_obj.src].items;

			// allowing duplicates, or is this the first recorded load of this script?
			if (chain_opts[_AllowDuplicates] || registry_items.length == 0) {
				registry_item = registry_items[registry_items.length] = {
					ready:false,
					finished:false,
					ready_listeners:[ready_cb],
					finished_listeners:[finished_cb]
				};

				request_script(chain_opts,script_obj,registry_item,
					// which callback type to pass?
					(
					 	(preload_this_script) ? // depends on script-preloading
						function(){
							registry_item.ready = true;
							for (var i=0; i<registry_item.ready_listeners.length; i++) {
								registry_item.ready_listeners[i]();
							}
							registry_item.ready_listeners = [];
						} :
						function(){ script_executed(registry_item); }
					),
					// signal if script-preloading should be used or not
					preload_this_script
				);
			}
			else {
				registry_item = registry_items[0];
				if (registry_item.finished) {
					finished_cb();
				}
				else {
					registry_item.finished_listeners.push(finished_cb);
				}
			}
		}

		// creates a closure for each separate chain spawned from this $LAB instance, to keep state cleanly separated between chains
		function create_chain() {
			var chainedAPI,
				chain_opts = merge_objs(global_defaults,{}),
				chain = [],
				exec_cursor = 0,
				scripts_currently_loading = false,
				group
			;
			
			// called when a script has finished preloading
			function chain_script_ready(script_obj,exec_trigger) {
				/*!START_DEBUG*/if (chain_opts[_Debug]) log_msg("script preload finished: "+script_obj.real_src);/*!END_DEBUG*/
				script_obj.ready = true;
				script_obj.exec_trigger = exec_trigger;
				advance_exec_cursor(); // will only check for 'ready' scripts to be executed
			}

			// called when a script has finished executing
			function chain_script_executed(script_obj,chain_group) {
				/*!START_DEBUG*/if (chain_opts[_Debug]) log_msg("script execution finished: "+script_obj.real_src);/*!END_DEBUG*/
				script_obj.ready = script_obj.finished = true;
				script_obj.exec_trigger = null;
				// check if chain group is all finished
				for (var i=0; i<chain_group.scripts.length; i++) {
					if (!chain_group.scripts[i].finished) return;
				}
				// chain_group is all finished if we get this far
				chain_group.finished = true;
				advance_exec_cursor();
			}

			// main driver for executing each part of the chain
			function advance_exec_cursor() {
				while (exec_cursor < chain.length) {
					if (is_func(chain[exec_cursor])) {
						/*!START_DEBUG*/if (chain_opts[_Debug]) log_msg("$LAB.wait() executing: "+chain[exec_cursor]);/*!END_DEBUG*/
						try { chain[exec_cursor++](); } catch (err) {
							/*!START_DEBUG*/if (chain_opts[_Debug]) log_error("$LAB.wait() error caught: ",err);/*!END_DEBUG*/
						}
						continue;
					}
					else if (!chain[exec_cursor].finished) {
						if (check_chain_group_scripts_ready(chain[exec_cursor])) continue;
						break;
					}
					exec_cursor++;
				}
				// we've reached the end of the chain (so far)
				if (exec_cursor == chain.length) {
					scripts_currently_loading = false;
					group = false;
				}
			}
			
			// setup next chain script group
			function init_script_chain_group() {
				if (!group || !group.scripts) {
					chain.push(group = {scripts:[],finished:true});
				}
			}

			// API for $LAB chains
			chainedAPI = {
				// start loading one or more scripts
				script:function(){
					for (var i=0; i<arguments.length; i++) {
						(function(script_obj,script_list){
							var splice_args;
							
							if (!is_array(script_obj)) {
								script_list = [script_obj];
							}
							for (var j=0; j<script_list.length; j++) {
								init_script_chain_group();
								script_obj = script_list[j];
								
								if (is_func(script_obj)) script_obj = script_obj();
								if (!script_obj) continue;
								if (is_array(script_obj)) {
									// set up an array of arguments to pass to splice()
									splice_args = [].slice.call(script_obj); // first include the actual array elements we want to splice in
									splice_args.unshift(j,1); // next, put the `index` and `howMany` parameters onto the beginning of the splice-arguments array
									[].splice.apply(script_list,splice_args); // use the splice-arguments array as arguments for splice()
									j--; // adjust `j` to account for the loop's subsequent `j++`, so that the next loop iteration uses the same `j` index value
									continue;
								}
								if (typeof script_obj == "string") script_obj = {src:script_obj};
								script_obj = merge_objs(script_obj,{
									ready:false,
									ready_cb:chain_script_ready,
									finished:false,
									finished_cb:chain_script_executed
								});
								group.finished = false;
								group.scripts.push(script_obj);
								
								do_script(chain_opts,script_obj,group,(can_use_preloading && scripts_currently_loading));
								scripts_currently_loading = true;
								
								if (chain_opts[_AlwaysPreserveOrder]) chainedAPI.wait();
							}
						})(arguments[i],arguments[i]);
					}
					return chainedAPI;
				},
				// force LABjs to pause in execution at this point in the chain, until the execution thus far finishes, before proceeding
				wait:function(){
					if (arguments.length > 0) {
						for (var i=0; i<arguments.length; i++) {
							chain.push(arguments[i]);
						}
						group = chain[chain.length-1];
					}
					else group = false;
					
					advance_exec_cursor();
					
					return chainedAPI;
				}
			};

			// the first chain link API (includes `setOptions` only this first time)
			return {
				script:chainedAPI.script, 
				wait:chainedAPI.wait, 
				setOptions:function(opts){
					merge_objs(opts,chain_opts);
					return chainedAPI;
				}
			};
		}

		// API for each initial $LAB instance (before chaining starts)
		instanceAPI = {
			// main API functions
			setGlobalDefaults:function(opts){
				merge_objs(opts,global_defaults);
				return instanceAPI;
			},
			setOptions:function(){
				return create_chain().setOptions.apply(null,arguments);
			},
			script:function(){
				return create_chain().script.apply(null,arguments);
			},
			wait:function(){
				return create_chain().wait.apply(null,arguments);
			},

			// built-in queuing for $LAB `script()` and `wait()` calls
			// useful for building up a chain programmatically across various script locations, and simulating
			// execution of the chain
			queueScript:function(){
				queue[queue.length] = {type:"script", args:[].slice.call(arguments)};
				return instanceAPI;
			},
			queueWait:function(){
				queue[queue.length] = {type:"wait", args:[].slice.call(arguments)};
				return instanceAPI;
			},
			runQueue:function(){
				var $L = instanceAPI, len=queue.length, i=len, val;
				for (;--i>=0;) {
					val = queue.shift();
					$L = $L[val.type].apply(null,val.args);
				}
				return $L;
			},

			// rollback `[global].$LAB` to what it was before this file was loaded, the return this current instance of $LAB
			noConflict:function(){
				global.$LAB = _$LAB;
				return instanceAPI;
			},

			// create another clean instance of $LAB
			sandbox:function(){
				return create_sandbox();
			}
		};

		return instanceAPI;
	}

	// create the main instance of $LAB
	global.$LAB = create_sandbox();


	/* The following "hack" was suggested by Andrea Giammarchi and adapted from: http://webreflection.blogspot.com/2009/11/195-chars-to-help-lazy-loading.html
	   NOTE: this hack only operates in FF and then only in versions where document.readyState is not present (FF < 3.6?).
	   
	   The hack essentially "patches" the **page** that LABjs is loaded onto so that it has a proper conforming document.readyState, so that if a script which does 
	   proper and safe dom-ready detection is loaded onto a page, after dom-ready has passed, it will still be able to detect this state, by inspecting the now hacked 
	   document.readyState property. The loaded script in question can then immediately trigger any queued code executions that were waiting for the DOM to be ready. 
	   For instance, jQuery 1.4+ has been patched to take advantage of document.readyState, which is enabled by this hack. But 1.3.2 and before are **not** safe or 
	   fixed by this hack, and should therefore **not** be lazy-loaded by script loader tools such as LABjs.
	*/ 
	(function(addEvent,domLoaded,handler){
		if (document.readyState == null && document[addEvent]){
			document.readyState = "loading";
			document[addEvent](domLoaded,handler = function(){
				document.removeEventListener(domLoaded,handler,false);
				document.readyState = "complete";
			},false);
		}
	})("addEventListener","DOMContentLoaded");

})(this);
/*src/js/setting.js*/
/*
debug infomation
*/
if (typeof console == "undefined") {
  var logArr = window.logArr = [];
  console = window.console = {
    log : function() {
      logArr.push(arguments);
    }
  };
}

(function(window) {

  /*ALARM navigation to where*/
  window.ALARMNAVI = {
    0: "pdus",
    1: "ips",
    2: "cbs",
    3: "outlets",
    4: "extsens"
  };

  window.SENSORALARMURL = {
    1: "xhrsensortempalarm",
    2: "xhrsensorhumalarm",
    3: "xhrsensordooralarm",
    4: "xhrsensordryalarm",
    5: "xhrsensorspotalarm",
    6: "xhrsensorropealarm",
    7: "xhrsensorsmokealarm",
    8: "xhrsensorbeaconalarm"
  };

  //Related to color, will no move the language packaged.
  window.STATUSTYPE = {
    0 : "Off",
    1 : "Upper Critical",
    2 : "Upper Warning",
    3 : "Alarm",
    4 : "Lower Warning",
    5 : "Normal",
    8 : "Lower Critical"
  };

  //PRIVILEGES with order
  window.PRIVILEGES_Arr = [
    0x00000100 ,
    0x00010000 ,
    0x00020000 ,
    0x00000010 ,
    0x00004000 ,
    0x02000000 ,
    0x00000080 ,
    0x00000020 ,
    0x00040000 ,
    0x00000200 ,
    0x00000040 ,
    0x00000400 ,
    0x00000008 ,
    0x00000002 ,
    0x00000004 ,
    0x00080000 ,
    0x00100000 ,
    0x00000800 ,
    0x01000000 ,
    0x00800000 ,
    0x00001000 ,
    0x00200000 ,
    0x00400000 ,
    0x00008000 ,
    0x00002000
  ];
  
  //EnLogic namespace
  var EL = window.EL = window.EL || {};

  EL.debug = 1;

  //MODEL
  window.MODEL = {};

})(window);

/*src/js/configuration.js*/
/*Model*/
(function(window) {

  window.ALARMTYPE = {
    0: "Unit",
    1: "Input Phases",
    2: "Circuit Breaker",
    3: "Outlets",
    4: "External Sensors"
  };

  window.SENSORTYPE = {
    1: "Temperature",
    2: "Humidity (%)",
    3: "Door Contact",
    4: "Dry Contact",
    5: "Spot Fluid",
    6: "Rope Fluid",
    7: "Smoke",
    8: "Beacon"
  };

  window.TEMPUNIT = {
    0: "C",
    1: "F"
  };

  window.FLUID = {
    0: "No-leak",
    1: "Leak"
  };

  window.AISLETYPE = {
    0: "Cold",
    1: "Hot"
  };

  window.POWERSTATUS = {
    0: "Off",
    1: "On",
    2: "Last Known"
  };

  /*
  pdu power control type
  */
  window.PDUCTRLTYPE = {
    0: "Off",
    1: "On",
    2: "Last Known"
  };

  window.POWERCTRLTYPE = {
    0: "Off",
    1: "On",
    2: "Off Delayed",
    3: "On Delayed",
    4: "Reboot Immediate",
    5: "Reboot Delayed"
    //, 6: "Cancel Pending Commands"
  };

  window.UPDATESTATUS = {
    0: "Update failed!",
    2: "You have been logged out due to inactivity.",
    3: "The selected role is currently assigned to users and cannot be deleted.",
    41: "Your old password is not correct!",
    42: "The port is occupied!",
    43: "Your login password is too simple to use as authentication pass phrase!",
    51: "The outlet(s) below cannot be turned on at this time due to an overload restriction.<br/>( Outlet ID: [ {0} ] )"
  };

  window.POWERENERGY = {
    "activepower" : "Active Power (W)",
    "apparentpower" : "Apparent Power (VA)",
    "totalenergymeter" : "Total Energy Meter (kWh)"
  };

  window.OUTLETS = {
    0x00000001: "Outlet 1",
    0x00000002: "Outlet 2",
    0x00000004: "Outlet 3",
    0x00000008: "Outlet 4",
    0x00000010: "Outlet 5",
    0x00000020: "Outlet 6",
    0x00000040: "Outlet 7",
    0x00000080: "Outlet 8",
    0x00000100: "Outlet 9",
    0x00000200: "Outlet 10",
    0x00000400: "Outlet 11",
    0x00000800: "Outlet 12",
    0x00001000: "Outlet 13",
    0x00002000: "Outlet 14",
    0x00004000: "Outlet 15",
    0x00008000: "Outlet 16",
    0x00010000: "Outlet 17",
    0x00020000: "Outlet 18",
    0x00040000: "Outlet 19",
    0x00080000: "Outlet 20",
    0x00100000: "Outlet 21",
    0x00200000: "Outlet 22",
    0x00400000: "Outlet 23",
    0x00800000: "Outlet 24",
    0x01000000: "Outlet 25",
    0x02000000: "Outlet 26",
    0x04000000: "Outlet 27",
    0x08000000: "Outlet 28",
    0x10000000: "Outlet 29",
    0x20000000: "Outlet 30",
    0x40000000: "Outlet 31",
    0x80000000: "Outlet 32"
  };

  /*
  privilege text
  */
  window.PRIVILEGES = {
    /*
    //"ADMIN_PRIV":     "Administrator Privileges",
    0x00000002: "Change Data Logging Settings",
    0x00000004: "Change Date/Time Settings",
    0x00000008: "Change Event Settings",
    0x00000010: "Change External Sensors Configuration",
    0x00000020: "Change Local User Management",
    0x00000040: "Change Network Configuration",
    0x00000080: "Change Own Password",
    0x00000100: "Change PDU Settings",
    0x00000200: "Change SNMP Settings",
    0x00000400: "Change Security Settings",
    0x00000800: "Change USB Settings",
    0x00001000: "Firmware Update",
    0x00002000: "Network Card Reset",
    0x00004000: "Switch Outlet",
    0x00008000: "Operate Configuration File",
    0x00010000: "Change Input Phase Setting",
    0x00020000: "Change Circuit Breaker Setting",
    0x00040000: "Change Network Service",
    0x00080000: "Change SMTP Setting",
    0x00100000: "Change Server Reachability",
    0x00200000: "Disconnect Other User",
    0x00400000: "Run Diagnostics",
    0x00800000: "Clear Data/Event Log",
    0x01000000: "Change LDAP Setting",
    0x02000000: "Change Outlet Setting"
    */
    0x00000100: "Change PDU Settings",
    0x00010000: "Change Input Phase Setting",
    0x00020000: "Change Circuit Breaker Setting",
    0x00000010: "Change External Sensors Configuration",
    0x00004000: "Switch Outlet",
    0x02000000: "Change Outlet Setting",
    0x00000080: "Change Own Password",
    0x00000020: "Change Local User Management",
    0x00040000: "Change Network Service",
    0x00000200: "Change SNMP Settings",
    0x00000040: "Change Network Configuration",
    0x00000400: "Change Security Settings",
    0x00000008: "Change Event Settings",
    0x00000002: "Change Data Logging Settings",
    0x00000004: "Change Date/Time Settings",
    0x00080000: "Change SMTP Setting",
    0x00100000: "Change Server Reachability",
    0x00000800: "Change USB Settings",
    0x01000000: "Change LDAP Setting",
    0x00800000: "Clear Data/Event Log",
    0x00001000: "Firmware Update",
    0x00200000: "Disconnect Other User",
    0x00400000: "Run Diagnostics",
    0x00008000: "Operate Configuration File",
    0x00002000: "Network Card Reset"
  };

  /*
  The value will be different due to different device.
  */
  window.CURRENTMAX = 32;

  window.ALARMUNITTYPE = {
    A: {
      unit: " (A)",
      factor: 1000,
      fixed: 2,
      max: 16,
      min: 0,
      title: "Current"
    },
    V: {
      unit: " (V)",
      factor: 1000,
      fixed: 0,
      max: 260,
      min: 90,
      title: "Voltage"
    },
    VA: {
      unit: " (VA)",
      factor: 1000,
      fixed: 0,
      min: 0,
      max: 49140,
      title: "Apparent Power"
    },
    W: {
      unit: " (W)",
      factor: 1000,
      fixed: 0,
      min: 0,
      max: 49140,
      title: "Active Power"
    },
    Wh: {
      unit: " (Wh)",
      factor: 1000,
      fixed: 2,
      min: 0,
      max: 1000000000,
      title: "Energy"
    },
    C: {
      unit : " (°C)",
      factor: 1,
      fixed: 0,
      min: 0,
      max: 75,
      title: "Temperature"
    },
    F: {
      unit : " (F)",
      factor: 1,
      fixed: 0,
      min: 32,
      max: 167,
      title: "Temperature"
    },
    H: {
      unit : " (%)",
      factor : 1,
      fixed: 0,
      min: 15,
      max: 90,
      title: "Humidity"
    }
  };


  /*
  AJAX status collection
  */
  window.AJAXSTATUS = {
    0: "Server is not responding!"
    , 401: "You have been logged out due to inactivity."
    , 420: "Your session has been administratively terminated."
    , 425: "User is not active or user has already logged in."
    , 426: "Logged user number is up to maximize number(10)."
    , 427: "Too many unsuccessful login attempts: Account locked temporarily."
    , 430: "You do not have the privilege to do this action!"
    , 501: "Internal server error!"
    //, 404: "Page not found!"
  };

  /*
  PING Status
  */
  window.PINGSTATUS = {
    0: "Reachable",
    1: "Unreachable",
    2: "Waiting for Reliable Response",
    3: "Error"
  };

  window.CLIENTTYPE = {
    //0: "TELNET",
    1: "Web GUI",
    2: "TELNET",
    3: "FTP",
    4: "SSH"
  };

  window.EVENTNAME = {
    "CALA" : "Critical alarm",
    "WALA" : "Warning alarm",
    "CBSC" : "Circuit Breaker status changed",
    "OLSC" : "Outlet power control status changed",
    "ESSC" : "External sensor status changed",
    "PDUC" : "PDU configuration file imported/exported",
    "FMUP" : "Firmware update",
    "NCRS" : "Network card reset/start",
    "CSSC" : "Communication status changed",
    "DCSC" : "Daisy Chain status changed",
    "EBLM" : "Enter Bootloader Mode",
    "SPSC" : "Server ping status changed",
    "USRA" : "User activity",
    "PSWC" : "Password/settings changed",
    "ROSC" : "Role status changed",
    "USSC" : "User status changed",
    "LDAP" : "LDAP Error"
  };

  /*
  Lower 16 bits are used for parameter (e.g. users);
  */
  window.EVENTTYPE = {
    //0x00000001 : "Log Event Message",
    0x00010000 : "Send SMTP Message"
    , 0x00020000 : "Send SNMP Trap"
    , 0x00040000 : "Beacon Flash"
  };

  window.EVENTRULE = {
    "Alarm" : {
      "CALA": 458752,
      "WALA": 458752
    },
    "CBSC": 458752,
    "OLSC": 196608,
    "ESSC": 458752,
    "PDUC": 196608,
    "FMUP": 196608,
    "NCRS": 196608,
    "CSSC": 458752,
    "DCSC": 196608,
    "EBLM": 196608,
    "SPSC": 196608,
    "USRA": 196608,
    "User administration": {
      "PSWC": 196608,
      "ROSC": 196608,
      "USSC": 196608 
    },
    "LDAP": 196608
  };

  /*Root of the tree*/
  EL.TreeRoot = {
    "id": "dashboard",
    "text": "Dashboard",
    "iconCls": "icon-desk"
  };

  /*Template of the PDU*/
  EL.TreeMap = {
    ips:{
      id: "ips",
      url: "xhrips.jsp",
      text: "Input Phases",
      icon: "icon-ip"
    },
    cbs:{
      id: "cbs",
      url: "xhrcbs.jsp",
      text: "Circuit Breakers",
      icon: "icon-cb"
    },
    ess:{
      id: "extsens",
      url: "xhrextsens.jsp",
      text: "External Sensors",
      icon: "icon-temp"
    },
    outs:{
      id: "outlets",
      url: "xhroutlets.jsp",
      text: "Outlet Power Management"
      //,icon: "icon-ol"
    }
  };


  // 
  /*--------Models---------*/ 

  /*--main pages--*/ 
  /*login page*/ 
  MODEL.login = {
    title:    "Login",
    username: "Username",
    password: "Password",
    login:    "Login",
    clear:    "Clear"
  };

  /*master page*/
  MODEL.master = {
    useradmin: {
      txt: "User Administration",
      changepw: {
        txt: "Change Password",
        dlg: "Change User Password"
      },
      users: {
        txt: "Users",
        dlg: "Manage Users"
      },    
      roles: {
        txt: "Roles",
        dlg: "Manage Roles"
      }
    },
    deviceadmin: {
      txt: "Device Configuration",
      networkser: {
        txt: "Network Services",
        http: {
          txt: "HTTP",
          dlg: "HTTP Settings"
        },
        snmp: {
          txt: "SNMP",
          dlg: "SNMP Settings"
        },
        ssh: {
          txt: "SSH",
          dlg: "SSH Settings"
        },
        telnet: {
          txt: "TELNET",
          dlg: "TELNET Settings"
        },
        ftp: {
          txt: "FTP",
          dlg: "FTP Settings"
        }
      },
      networkcon: {
        txt: "Network Configuration",
        dlg: "Network Configuration"
      },
      security: {
        txt: "Security",
        loginset: {
          txt: "Login Settings",
          dlg: "Login Settings"
        },
        passwordpol: {
          txt: "Password Policy",
          dlg: "Password Policy"
        },
        forcehttps: {
          txt: "Force HTTPS for Web Access",
          dlg: "Force Https"
        }
      },
      eventrules: {
        txt: "Event Rules",
        dlg: "Event Rule Setting"
      },
      datalog: {
        txt: "Data Log",
        dlg: "Data Logging Settings"
      },
      datetime: {
        txt: "Date/Time",
        dlg: "Configure Date/Time Settings"
      },
      smtpemail: {
        txt: "SMTP Email",
        dlg: "SMTP Server Settings"
      },
      serverreach: {
        txt: "Server Reachability",
        dlg: "Server Reachability"
      },
      usb: {
        txt: "USB",
        dlg: "USB Settings"
      },
      ldap: {
        txt: "LDAP",
        dlg: "LDAP Settings"
      }
    },
    systemadmin: {
      txt: "System Administration",
      vweventlog: {
        txt: "View Event Log",
        dlg: "View Event Log"
      },
      vwdatalog: {
        txt: "View Data Log",
        dlg: "View Data Log"
      },
      firmwaremt: {
        txt: "Firmware Maintenance",
        udfirmware: {
          txt: "Update Firmware",
          dlg: "Firmware update"
        },
        vwfirmwareud: {
          txt: "View Firmware Update History",
          dlg: "Firmware Update History"
        }
      },
      conusers: {
        txt: "Connected Users",
        dlg: "Connected Users"
      },
      diagnostic: {
        txt: "Diagnostics",
        dldiaginfo: {
          txt: "Download Diagnostic information",
          dlg: "Download Diagnostic Information"
        }
      },
      pduconfig: {
        txt: "PDU Configuration file",
        dlg: "Configuration File"
      },
      deviceinfo: {
        txt: "Device Information",
        dlg: "Device Information"
      },
      nwcardreset: {
        txt: "Network Card Reset",
        dlg: "Network Card Reset"
      }
    },
    help: {
      txt: "Help",
      userguide: {
        txt: "User Guide",
        dlg: "User Guide"
      }
    },
    setalarmdl: {
      lowercritical: "Lower Critical",
      lowerwarning: "Lower Warning",
      upperwarning: "Upper Warning",
      uppercritical: "Upper Critical",
      resetthreshold: "Reset Threshold",
      alarmscdelay: "Alarm State Change Delay (samples):",
      alarmsetting: "Alarm Setting",
      enablealarm: "Enable Alarm Setting",
      updatefail: "Update failed",
      lowcriticalinfo: "Low critical + threshold should be less than or equal to low warning!",
      lowwarninfo: "Low warning + 2 times reset threshold should be less than or equal to up warning!",
      upwarninfo: "Up warning + threshold should be less than or equal to up critical!",
      lowcriticalinfo2: "Low critical + 2 times reset threshold should be less than or equal to up warning!",
      lowcriticalinfo3: "Low critical + 2 times reset threshold should be less than or equal to up critical!",
      lowwarninfo2: "Low Warning + 2 times threshold should be less than or equal to up critical!"
    },
    resetdevicedl: {
      txt: "Network Card Reset",
      txt1: "The Network Card will be reset in a few seconds.",
      txt2: "You will be redirected to the login page within",
      txt3: "seconds.",
      txt4: "If redirection does not work, use",
      txt5: "this link",
      txt6: "to the login page."
    },
    language: {
      txt: "Language",
      type: {
        en: "English",
        cn: "Chinese"
      }
    },
    logout: "logout",
    doreallylogout: "Do you really want to logout?",
    tree: "PDU Explorer",
    login: "Logged in as {0}",
    greeting: "Welcome to Enlogic",
    ip:   "<b>IP Adress: </b>{0}",
    time: "<b>Login Time: </b>{0}"
  };

  /*--left pages--*/ 
  /*Dashboard page*/
  MODEL.dashboard = {
    loading: "Loading",
    status: "Status",
    alarms: "Alarms",
    ok: "OK",
    currentrms: "Current, RMS (A)",
    voltagerms: "Voltage, RMS (V)",
    pdupowerenergy: "PDU power energy",
    externalsensor: "External Sensors, Type",
    sensorname: "Sensor Name",
    pduname: "PDU Name",
    location: "Location",
    value: "Value",
    activealarmpdu: "Active Alarms for PDU #",
    close: "Close",
    alarmtype: "Alarm Type",
    count: "Count"
  };

  /*PDU #*/
  MODEL.pdu = {
    pduset: "PDU Setting",
    pduenergy: "PDU Energy",
    pduattribute: "PDU Attribute",
    pduname: "PDU Name",
    pdulocation: "PDU Location",
    pduunitdelay: "PDU Unit Coldstart Delay (0 - 3600 s)",
    outletstate: "Outlet State On PDU Startup",
    resetenergy: "Reset Energy",
    resetolenergy: "Reset Outlet Energy",
    pdumacaddress: "PDU MAC Address",
    rating: "Rating",
    resetenergymeter: "Resettable Energy Meter",
    activepowervalue: "Active Power Value (W)",
    activepowerset: "Active Power Status, Setting",
    reset: "Reset",
    resetsuccess: "Reset Success!",
    surechangeol: "Are you sure you want to make this change for all outlets?",
    reallyresetenergy: "Do you really want to reset the energy?",
    nopermission: "No Permission:"
  };

  /*Input Phases*/
  MODEL.phases = {
    phasecurrentrms: "Phase Current, RMS",
    reading: "Reading ",
    lowercritical: "Lower Critical ",
    lowerwarning: "Lower Warning ",
    upperwarning: "Upper Warning ",
    uppercritical: "Upper Critical ",
    statusset: "Status, Setting",
    phasevoltagerms: "Phase Voltage, RMS",
    phasepower: "Phase Power",
    apparentpower: "Apparent Power (VA)",
    powerfactor: "Power Factor",
    activepower: "Active Power (W)"
  };

  /*Circuit Breaker*/
  MODEL.breakers = {
    circuitid: "Circuit ID",
    statusset: "Status, Setting",
    currentrms: "Current, RMS (A)",
    rating: "Rating (A)",
    remaincapacity: "Remaining Capacity (A)",
    inputphases: "Input Phases",
    connoutlet: "Connected Outlets"
  };

  /*Sensor page*/
  MODEL.sensor = {
    id: "ID",
    typeset: "Type",
    statusset: "Status, Setting",
    value: "Value",
    serialno: "Serial NO.",
    aisle: "Aisle",
    name: "Name",
    description: "Description",
    location: "Location"
  };

  /*Outlet Power Management*/
  MODEL.outletstools = {
    powercontrol: "Power Control",
    execute: "Execute",
    outletid: "Outlet ID",
    outletname: "Outlet Name",
    alarmstatus: "Alarm Status",
    activepower: "Active Power (W)",
    powerstatus: "Power Status",
    noselect: "You didn't select anything!",
    doexecute: "Do you really want to execute this command?",
    // 
    outletset: "Outlet Setting",
    outletattr: "Outlet Attribute",
    stateonstart: "State On Startup",
    ondelay: "On Delay (0 ~ 7200s)",
    offdelay: "Off Delay (0 ~ 7200s)",
    rebootduration: "Reboot Duration (5 ~ 60s)",
    current: "Current (A)",
    voltage: "Voltage (V)",
    activepower: "Active Power (W)",
    peakpower: "Peak Power (W)",
    powerfactor: "Power Factor",
    energymeter: "Resettable Energy Meter"
  }

  // 
  /**--Menu Dialog Pages--*/
  MODEL.changepw = {
    oldpass: "Old Password",
    newpass: "New Password",
    cfmpass: "Confirm Password",
    chgpwfail: "Change Password Failed."
  };

  MODEL.users = {
    noselect: "Please select a row!",
    usernotbedel: "This user cannot be deleted!",
    notdelyourself: "You cannot delete yourself!",
    notdelthisuser: "You cannot delete this user!",
    reallydeluser: "Do you really want to delete the user: {0} ?",
    nopermission: "You do not have permission to modify this user!",
    enteruserexist: "Entered username is already existed!",
    noselectrole: "Please select a role!",
    setting: "Settings",
    snmpv3: "SNMPv3",
    // roles: "Roles",
    preferences: "Preferences",
    // 
    createnewuser: "Create New User",
    edituser: "Edit User:",
    active: "Active",
    roles: "Roles",
    username: "User Name",
    fullname:"Full Name",
    password: "Password",
    cfpassword: "Confirm Password",
    telnumber: "Telephone Number",
    emailaddress: "eMail Address",
    enabled: "Enabled",
    forcepwchntlg: "Force password change on next login",
    // 
    enablesnmpacc: "Enable SNMPv3 Access",
    securitylevel: "Security Level",
    usepwasauthpass: "Use Password as Authentication Pass Phrase",
    authpass: "Authentication Pass Phrase",
    cfauthpass: "Confirm Authentication Pass Phrase",
    useauthaspri: "Use Authentication Pass Phrase as Privacy Pass Phrase",
    pripass: "Privacy Pass Phrase",
    cfpripass: "Confirm Privacy Pass Phrase",
    authalgorithm: "Authentication Algorithm",
    prialgorithm: "Privacy Algorithm",
    // 
    temperatureunit: "Temperature Unit",
    // 
    news: "New",
    edits: "Edit",
    deletes: "Delete"
  };

  MODEL.role = {
    noselect: "Please select a row!",
    rolenotbedel: "This role can not be deleted!",
    reallydelrole: "Do you really want to delete the role: {0} ?",
    settings: "Settings",
    privileges: "Privileges",
    rolename: "Role Name",
    description: "Description",
    roleinfo: "Role Information",
    // 
    privilegesedit: "Privileges Editing",
    selectillustrate: "Select privileges to add to role.<br/>Be aware some privileges may require additional parameters.",
    parameters: "Parameters",
    // 
    clickcancel: "Click Cancel to Close",
    clicksavecancel: "Click here to Save and Close",
    news: "New",
    edits: "Edit",
    deletes: "Delete",
    saves: "Save"
  };

  MODEL.netsvr = {
    change : " After changing the setting, you will need to reset the Network Card to take effect. Do you really want to apply changes now?"
  };

  MODEL.http = {
    httpport: "HTTP Port",
    httpsport: "HTTPS Port"
  };

  MODEL.snmp = {
    general: "General",
    traps: "Traps",
    snmpv12set: "SNMP v1 / v2c Settings",
    snmpv12: "SNMP v1 / v2c",
    enable: "Enable",
    readcs: "Read Community String",
    writecs: "Write Community String",
    snmpv3set: "SNMP v3 Settings",
    snmpv3: "SNMP v3",
    mibiigroup: "MIB-II System Group",
    syscontact: "sysContact",
    sysname: "sysName",
    syslocation: "sysLocation",
    snmptrapset: "SNMP Trap Settings",
    snmptraprule: "System Snmp Trap Event Rule",
    host: "Host",
    port: "Port",
    community: "Community",
    helpinfo: "Please use the Device Configuration > Event Rules Dialog for a more detailed trap setup.",
    downloadmib: "Download MIB"
  }

  MODEL.ssh = {
    sshport: "SSH Port",
    enablessh: "Enable SSH Access"
  }

  MODEL.telnet = {
    telnetport: "Telnet Port",
    enabletelnet: "Enable Telnet Access"
  }

  MODEL.ftp = {
    ftpport: "FTP Port",
    enableftp: "Enable FTP Access"
  }

  MODEL.network = {
    ipprotocol: "IP Protocol",
    ipv4set: "IPv4 Settings",
    ipv4only: "IPv4 Only",
    ipv6only: "IPv6 Only",
    ipv46: "IPv4 & IPv6",
    dnsresolve: "DNS Resolver",
    preference: "Preference",
    ipv4address: "IPv4 Address",
    ipv6address: "IPv6 Address",
    ipautoconfig: "IP Auto Configuration",
    ipaddress: "IP Address",
    netmask: "Net Mask",
    gateway: "Gateway",
    specficdns: "Specific DNS server manually",
    primarydns: "Primary DNS Server",
    secondarydns: "Secondary DNS Server",
    dnssuffix: "DNS Suffix(Optional)"
  }

  MODEL.loginset = {
    userblock: "User Blocking",
    blockuserfail: "Block user on login failure",
    maxnumfailln: "Maximum number of failed logins",
    blocktimeout: "Block timeout",
    loginlimit: "Login Limitations",
    idletimeout: "Idle Timeout Period"
  };

  MODEL.pwpolicy = {
    pwaging: "Password Aging",
    pwaginginterval: "Password Aging Interval",
    strongpw: "Strong Passwords",
    minpwlength: "Minimum Password Length",
    maxpwlength: "Maximum Password Length",
    enforcelower: "Enforce at least one lower case character",
    enforceupper: "Enforce at least one upper case character",
    enforcenumeric: "Enforce at least one numeric case character",
    enforcespecial: "Enforce at least one special character"
  };

  MODEL.forcehttpinfo = {
    confirminfo: "After changing the setting, you will need to reset the Network Card to take effect.<br/> Do you really want to apply changes now?"
  }

  MODEL.evtrule = {
    eventset: "Event Action Setting",
    selectrule: "Selected Rules",
    smtpreceive: "SMTP Receivers",
    eventname: "Event Name",
    action: "Actions"
  };

  MODEL.datalog = {
    loginterval: "Log Interval (1 - 1440 minutes)",
    enablelog: "Enable Data Logging",
    illustrateinfo: "The data log can store up to 2000 records. The maximum time range of stored data is based upon the log interval setting.  For example, for log interval = 600 seconds (10 minutes), the data log will contain up to 13.89 days of data.  Once the data log reaches the maximum size, the oldest entries will be overwritten by the newer entries."
  };

  MODEL.datetime = {
    timezone: "Time Zone",
    usertime: "User Specified Time",
    date: "Date (YYYY-MM-DD)",
    time: "Time (hh:mm:ss)",
    synntpserver: "Synchronize with NTP Server",
    firstip: "First Time Server IP Address",
    secondip: "Second Time Server IP Address",
    checkntp: "Check NTP Servers",
    checkntpinfo: "Please input the right NTP Server!"
  };

  MODEL.smtp = {
    serverset: "Server Settings",
    servername: "Server Name",
    port: "Port",
    sendemail: "Sender Email Address",
    numsend: "Number of Sending Retries",
    intervalsend: "Time Interval Between Sending Retries (in minutes)",
    serverreq: "Server Requires Authentication",
    username: "Username",
    password: "Password",
    smtpset: "Test SMTP Settings",
    recemail: "Recipient Email Addresses",
    testemail: "Send Test Email",
    testsmtp: "Testing SMTP configuration",
    testemailinfo: "Sending test email, please wait ...",
    errorinfo: "Error: SMTP settings  confuguration ! & uptstatus is : ",
    probleminfo: "There was a problem sending the test email.<br/>",
    checkinfo: "Please check your SMTP server configuration<br/>",
    succinfo: "The message was successfully sent. Please check your mailbox.",
    errorname: "<br/>The error message is:<br/>Name or service not known",
    errorconn: "<br/>The error message is:<br/>Connection refused",
    errordns: "<br/>The error message is:<br/>The DNS server could not be resolved!",
    errorsmtp: "Error Occured for onreadystatechange at SMTP serever configuration  Settings:"
  };

  MODEL.serreach = {
    iphostnm: "IP Address/Hostname",
    pingenable: "Ping Enabled",
    status: "Status",
    news: "New",
    edit: "Edit",
    deletes: "Delete",
    refresh: "Refresh",
    addnew: "Add New Server Property",
    reachemax: "Reached maximum server enteries. <br/> User cannot create new Server",
    enableping: "Enable Ping Monitoring for this Server",
    numSuccping: "Number of Successful Pings to Enable Feature",
    numunsuccping: "Number of Consecutive Unsuccessful Pings For Failure",
    waittime: "Wait Time (in seconds) before Resuming Pinging",
    editserver: "Edit Server Property",
    noselect: "Pelease select a row!",
    deleteser: "Do you really want to delete the server '{0}'?"
  };

  MODEL.usb = {
    usb: "USB",
    enableusb: "Enable USB Access"
  };

  MODEL.ldap = {
    ldapset: "LDAP Settings",
    ldapenable: "LDAP Enable",
    typeserver: "Type of LDAP Server",
    iphostnm: "IP Address / Hostname",
    port: "Port",
    sasl: "SASL",
    authnm: "Authentication Name",
    authdomain: "Authentication Domain",
    usebind: "Use Bind Credentials",
    binddn: "Bind DN",
    bindpw: "Bind Password",
    Confirmpw: "Confirm Password",
    dnsearch: "Base DN for Search",
    lgnmattr: "Login Name Attribute",
    userentry: "User Entry Object Class",
    testldapset: "Testing LDAP Settings",
    usernm: "Username",
    password: "Password",
    testconn: "Test Connection",
    conntest: "Connection test",
    conftest: "Configuration test",
    authtest: "Authentication test",
    userrole: "User has roles assigned",
    userknownrole: "User has known roles assigned"
  };

  MODEL.eventlog = {
    reflog: "Refresh Log",
    clearlog: "Clear Log",
    savelog: "Save Log",
    launch: "Launch in New Window",
    clearloginfo: "Do you really want to clear the log?"
  };

  MODEL.vwdtlog = {
    reflog: "Refresh Log",
    clearlog: "Clear Log",
    savelog: "Save Log",
    launch: "Launch in New Window"
  };

  MODEL.updtfw = {
    upload: "Upload",
    selectfile: "Select files",
    deletes: "Delete",
    pending: "Pending...",
    fileformat: "The selected file format is incorrect, please re-select!"
  };

  MODEL.frupdth = {
    timestamp: "Timestamp",
    preversion: "Previous Version",
    updversion: "Update Version",
    status: "Status"
  };

  MODEL.conuser = {
    usernm: "User Name",
    ipaddr: "IP Address",
    clienttype: "Client Type",
    idletime: "Idle Time",
    action: "Action",
    disconn: "Disconnect",
    disconnuser: "Disconnect User",
    dodisconnuser: "Do you really want to disconnect user '{0}'?",
    dodisconnself: "You are attempting to terminate your connection to '{0} ({1})' <br/> Do you really want to disconnect yourself?"
  };

  MODEL.diagnostic = {
    diagconf: "Diagnostic Configuration",
    dldiaginfo: "Download Diagnostic Information"
  };

  MODEL.blkconf = {
    dlconf: "Download Configuration",
    dlconffile: "Download Configuration File",
    Uploadconf: "Upload Configuration",
    upload: "Upload",
    uploadsucc: "Upload successful, updating...",
    applyconf: "Apply Configuration",
    pleasewait: "Please wait...!"
  };

  MODEL.devinfo = {
    pduinfo: "PDU Information",
    outlets: "Outlets",
    circbreak: "Circuit Breakers",
    sku: "SKU",
    serialnum: "Serial Number",
    rating: "Rating",
    functype: "Function Type",
    ipv4addr: "Device IPv4 Address",
    ipv6addr: "Device IPv6 Addresses",
    macaddr: "Device MAC Address",
    fwversion: "Firmware Version",
    webversion: "Web Version",
    pdumib: "PDU-MIB",
    download: "Download",
    label: "Label",
    operatevol: "Operating Voltage",
    ratecurrent: "Rated Current",
    type: "Type",
    protoutlet: "Protected Outlets"
  };

  MODEL.resetdev = {
    doresetcard: "Do you really want to reset the Network Card?"
  };

  // 
  /*--Buttons--*/ 
  MODEL.buttons = {
    cancels: "Cancel",
    oks: "OK",
    closes: "Close",
    yes: "Yes",
    no: "No",
    save: "Save",
    edit: "Edit",
    action: "Action",
    message: "Message",
    info: "Information",
    runping: "Run Ping",
    run: "Run"
  };

  MODEL.master.setalarmdl.alarm = "Alarm";
  MODEL.master.setalarmdl.off = "Off";
  MODEL.master.setalarmdl.on = "On";
  MODEL.master.setalarmdl.disable = "Disable";
  MODEL.master.setalarmdl.enable = "Enable";
  MODEL.master.setalarmdl.normal = "Normal";
  MODEL.role.deldone = "Role deleted successfully";
  MODEL.loginset.min = "min";
  MODEL.loginset.hr = "hr";
  MODEL.loginset.infinite = "Infinite";
  MODEL.pwpolicy.d = "d";
  MODEL.outletstools.powctrl = "Power Control";
  MODEL.outletstools.apply = " Apply ";
  MODEL.outletstools.excuting = " Executing, Click to Cancel ";
  MODEL.datetime.succ = "SUCCEEDED";
  MODEL.datetime.fail = "FAILED";

  window.VALID = {
      ipv4: "Please enter a valid ipv4 address"
    , ipv6: "Please enter a valid ipv6 address"
    , nowhite: "White spaces are not allowed"
    , greater: "Please enter a larger number"
    , customdate: "Please enter valid date"
    , lowchar: "Please enter at least one lower case character."
    , uppchar: "Please enter at least one upper case character."
    , numchar: "Please enter at least one numeric case character."
    , spechar: "Please enter at least one special character."
    , diffval: "Please enter a different value."
  };

  window.FUNCTYPE = {
      0: "Unknow"
    , 1: "PDU Metered"
    , 2: "PDU Metered, Outlet Switched"
    , 3: "Outlet Metered"
    , 4: "Outlet Metered, Outlet Switched"
  };

  window.CBTYPE = {
      0: "None"
    , 1: "1-Pole Circuit Breaker"
    , 2: "2-Pole Circuit Breaker"
  };

  MODEL.login.authfail = "Authentication failed";
  MODEL.dashboard.pduid = "PDU ID";
  MODEL.devinfo.bootver = "Bootloader Version";
  MODEL.devinfo.langver = "OLED Language Version";
  MODEL.login.connfail = "Connection refused";
  MODEL.outletstools.outinuse = "Outlet In Use";

})(window);

/*src/js/utility.js*/
/* Authentication */
(function() {

  EL.Auth = {
    getJSON : function() {
      return {"cookie": parseInt( getAuthCookie("authCookieId") )};
    },
    getTocken : function() {
      return JSON.stringify(EL.Auth.getJSON());
    }
  };

}());

/* Dialog */
(function() {
  var dialog = EL.Dialog = {};

  var $alertDialog, $confirmDialog;

  dialog.create = function() {
    $alertDialog = $("#alertDialog");
    if ($alertDialog.size() < 1) {
      $alertDialog = $('<div title="Alert" id="alertDialog" class="alertdlg"><h3 style=""></h3></div>');
      $alertDialog.appendTo($(document));
    }

    $confirmDialog = $("#confirmDialog");
    if ($confirmDialog.size() < 1) {
      $confirmDialog = $('<div title="Confirm" id="confirmDialog" class="confirmdlg"><h3 style=""></h3></div>');
      $confirmDialog.appendTo($(document));
    }
  };

  dialog.close = EL.Close = function() {
    $("#alertDialog, #confirmDialog").dialog("destroy");
  };
  dialog.message2 = EL.Message2 = function(msg, callback, options) {
    var model = MODEL.buttons;
    dialog.create();
    options = $.extend({icon:"message", title:model.message}, options);

    $("h3", $alertDialog)
      .removeAttr('class')
      .addClass("icon-" + options.icon)
      .html(msg);


    $alertDialog.dialog({
      title: '<h4>' + options.title + '</h4>',
      modal: true,
      resizable: false,
      height: "auto",
      minHeight: 120
      // buttons: {
        // Close: function() {
        //   $(this).dialog("destroy");
        //   callback && callback();
        // }
        // Close: {
        //   text: model.closes,
        //   click: function() {$(this).dialog("destroy");callback && callback();},
        //   id: "btnClose"
        // }
      // }
    });    
    $("div a").attr("id","");
  };

  dialog.alert = EL.Alert = function(msg, callback, options) {
    var model = MODEL.buttons;
    dialog.create();

    options = $.extend( {icon:"alert"}, options );

    $("h3", $alertDialog)
      .removeAttr('class')
      .addClass("icon-" + options.icon)
      .html(msg);

    $alertDialog.dialog({
      dialogClass: options.className,
      // title:  '<h4>Message</h4>',
      title:  '<h4>{0}</h4>'.format(model.message),
      modal: true,
      resizable: false,
      height: "auto",
      minHeight: 120,
      buttons: {
        "Close" :{
            // text: " Cancel ",
            text: model.closes,
            click: function() {$(this).dialog("destroy");callback && callback();},
            id: "btnClose"
        }
        // Close: function() {
        //   $(this).dialog("destroy");
        //   callback && callback();
        // }
      }
    });
  };

  dialog.message = EL.Message = function(msg, callback, options) {
    var model = MODEL.buttons;
    dialog.create();

    // options = $.extend({icon:"message", title:"Message"}, options);
    options = $.extend({icon:"message", title:model.message}, options);

    $("h3", $alertDialog)
      .removeAttr('class')
      .addClass("icon-" + options.icon)
      .html(msg);

    $alertDialog.dialog({
      title: '<h4>' + options.title + '</h4>',
      modal: true,
      resizable: false,
      height: "auto",
      minHeight: 120,
      buttons: {
        // Close: function() {
        //   $(this).dialog("destroy");
        //   callback && callback();
        // }
        Close: {
          text: model.closes,
          click: function() {$(this).dialog("destroy");callback && callback();},
          id: "btnClose"
        }
      }
    });
  };

  dialog.confirm = EL.Confirm = function(msg, callback, cancelCallback, options) {
    var model = MODEL.buttons;
    dialog.create();

    // options = $.extend({icon:"confirm", title:"Information"}, options);
    options = $.extend({icon:"confirm", title:model.info}, options);

    $("h3", $confirmDialog)
      .removeAttr('class')
      .addClass("icon-" + options.icon)
      .html(msg);

    $confirmDialog.dialog({
      title: '<h4>' + options.title + '</h4>',
      modal: true,
      resizable: false,
      height: "auto",
      minHeight: 120,
      buttons: {
        // Yes: function() {
        //   callback();
        //   $(this).dialog("destroy");
        // },
        // No: function() {
        //   cancelCallback && cancelCallback();
        //   $(this).dialog("destroy");
        // }
        "Yes" :{
            // text: " Cancel ",
            text: model.yes,
            click: function() {callback();$(this).dialog("destroy");},
            id: "btnClose"
        },
        "No" :{
            // text: " Cancel ",
            text: model.no,
            click: function() {cancelCallback && cancelCallback();$(this).dialog("destroy");},
            id: "btnClose"
        }
      }
    });
  };

}(document));

/* Update Status */
(function() {

  EL.UpdateStatus = function(data) {

    var statusCode = data["uptstatus"],
        msg = UPDATESTATUS[statusCode],
        callback;

    (statusCode == 2) && (callback = function() {
      window.location = "login.htm";
    });

    msg && EL.Dialog.alert(msg, callback);

    return statusCode == 1;
  };

}());

/* DataGrid Formatter that are reuseable */
(function() {
  EL.Formatter = {
    /* Return true false icons */
    bool : function(value) {
      return value ? '<span class="icon-apply"></span>' : '<span class="icon-cross"></span>';
    }
  };
})();

/*Ajax Error Handler*/
(function($, document) {

  var userAborted = function(xhr) {
    //console.log(xhr.getAllResponseHeaders());
    return !xhr.getAllResponseHeaders();
  };

  var loginAgain = function() {
    window.location = "login.htm"
  };


  EL.AjaxError = function() {
    $(document).ajaxError(function(e, req, settings) {

      if (userAborted(req)) return;

      var msg = AJAXSTATUS[req.status];

      if (req.status == 401) return loginAgain();

      msg && EL.Dialog.alert(msg, loginAgain, {className: "ajaxerrdlg"});

    });

  };

})(jQuery, document);

/*src/js/privileges.js*/
/*
Privileges functionalities
*/
var ArrayRemove = function(arr, val) {
  var idx = -1;

  for (var i = 0, l = arr.length; i < l; i++) {
    if (arr[i] == val) {
      idx = i;
      break;
    }
  }

  if (idx > -1) {
    arr.splice(idx, 1);
  }

  return arr;
};

(function(window, document) {

  var self = EL.Privilege = {
  	username: "",
    rolename: "",
    pdu: "",
    temperature: 0,     //temperature type: C or F
    privilege: 0,
    https: 0,           //force https check
    changepsw: 0,       //change password
  	outlets: 0,         //outlets priviliege
    outletopr: 1,       //outlet power control flag, default is enabled
    outcount: 0         //how many outlet does it has
  };

  /*
  Set Privileges
  */
  self.set = function(obj) {
    //enable all the privilege
    //self.privilege = 0xffffff;
    //Default balue is 0
    obj["privilege"] && (self.privilege = obj["privilege"]);
    obj["outlets"] && (self.outlets = obj["outlets"]);
    obj["name"] && (self.username = obj["name"]);
    obj["role"] && (self.rolename = obj["role"]);
    obj["temperature"] && (self.temperature = obj["temperature"]);
    obj["frpasschk"] && (self.changepsw = obj["frpasschk"]);
    obj["forcehttpschk"] && (self.https = obj["forcehttpschk"]);

    //Default value is not 0
    if (typeof obj["outletopr"] != "undefined") {
      self.outletopr = obj["outletopr"];
      !self.outletopr && self.delPrivilege(0x00004000);
    }
  };

  self.setOutCount = function(count) {
    self.outcount = count;
    //for M/M+ Remove change Outlet settings
    /*
    0x00004000: "Switch Outlet",
    0x02000000: "Change Outlet Setting",
    */
    if (count < 1) {
      self.delPrivilege(0x00004000, 0x02000000)
    }
  };

  self.delPrivilege = function() {
    for (var i = 0, l = arguments.length; i < l; i++) {
      var privilegeid = arguments[i];

      delete PRIVILEGES[privilegeid];
      ArrayRemove(PRIVILEGES_Arr, privilegeid);
    }
  };

  self.hasPrivilege = function(privilegeid) {
  	return self.privilege & privilegeid;
  };

  /*
   If a elemnt has: data-privi
   <a data-privi="0x00020000">Actions</a>
   */
  self.hasPriviElem = function(element) {
    var privi = parseInt($(element).data("privi")),
        hasPrivi = true;

    //doesn't has privi elment? ignore it and return true
    if (privi) {
      var hasPrivi = self.hasPrivilege(privi);
      !hasPrivi && EL.Dialog.alert("You do not have the permission for: <br/>" + PRIVILEGES[privi]);
    }

    return hasPrivi;
  };

  self.hasOutlets = function(outletid) {
  	return self.outlets & outletid;
  };

  /*Current user is super user?*/
  self.isSuperUser = function() {
    var flag = false;

    (self.username == "admin") && (flag = true);
    (self.rolename == "admin") && (flag = true);

    return flag;
  };

  self.isCurrentUser = function(username) {
    return username == self.username;
  };

  /*
  Set status on buttons
  */
  self.setButton = function(btnArr, privilegeid, msg) {
    privilegeid = parseInt(privilegeid);

    var hasPrivilege = self.hasPrivilege(privilegeid);

    $.each(btnArr, function(idx, $btn) {
      if (hasPrivilege) {
        $btn.removeClass("locked");
      } else {
        //remove all event listener
        $btn
          .addClass("locked")
          .attr("disabled", true)
          .removeAttr("onclick")
          .off()
          .attr("title", msg || ("No Permission: " + (PRIVILEGES[privilegeid] || " Permission required!")));
      }
    });

  };

  self.setNotSupport = function(btnArr) {
    self.setButton(btnArr, 0, "Not Supported");
  };

  /*
  Set status on PropertyGrid
  */
  self.setProperty = function(rows, privilegeid) {
    if (!self.hasPrivilege(privilegeid)) {
      for(var i = 0, len = rows.length; i < len; i++) {
        delete(rows[i]["editor"]);
      }
    }
  };


  /*
  Get Privilege Description Text;
  */
  self.getText = function(key) {
    return "<span title='" + PRIVILEGES[key] + "'>"
      + PRIVILEGES[key]
      + "</span>";    
  };


})(window, document);
/*src/js/validator.js*/
/*
Custom validate rules
*/
(function() {

  $.validator.addMethod("ipv4", 
    function(value, element) {                  
    return this.optional(element) || /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/i.test(value);
  }, function() { return VALID.ipv4 });

  $.validator.addMethod("ipv6", 
    function(value, element) {            
      return this.optional(element) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(value);
  }, function() { return VALID.ipv6 });

  $.validator.addMethod("nowhitespaces", 
    function(value, element){
      return this.optional(element) || /^\S+$/i.test(value);
  }, function() { return VALID.nowhite });

  $.validator.addMethod("customDate", 
    function (value, element){
      return this.optional(element) || /^(19|20)\d\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$/i.test(value);
  }, function() { return VALID.customdate });

  //For password
  $.validator.addMethod("lowerChar", function(value, element) {
    return /[a-z]/.test(value);
  }, function() { return VALID.lowchar });

  $.validator.addMethod("upperChar", function(value, element) {
    return /[A-Z]/.test(value);
  }, function() { return VALID.uppchar });

  $.validator.addMethod("numberChar", function(value, element) {
    return /\d/.test(value);
  }, function() { return VALID.numchar });

  $.validator.addMethod("specialChar", function(value, element) {
    return /[^\w]/.test(value);
  }, function() { return VALID.spechar });

  $.validator.addMethod("notEqualTo", function(value, element, params) {
    return value != $(params).val();
  }, function() { return VALID.diffval });

  $.validator.addMethod("greaterThan", function(value, element, params) {
    return Number(value) >= Number($(params).val());
  }, function() { return VALID.greater });

})();
/*src/js/login.js*/
/*
Login
*/
(function() {

  EL.Login = function(model) {

    var $mask = $("#maskingDiv").hide();

    var $loginDialog = $("#login"),
        $loginmsg = $("#loginmsg"),
        $username = $("#username"),
        $password = $("#password"),
        $logform = $("#frlogin");

    $loginDialog.dialog({
      title : '<div class="icon-users">{0}</div>'.format(model.title),
      width: 285, height: "auto",
      modal: true, resizable: false,
      buttons: [
        {
          text: model.login,
          click: function() {
            submitHandler();
          }
        },
        {
          text: model.clear,
          click: function() {
            $("label.error").hide();
            $logform[0].reset();
          }
        }
      ]
    });

    //hide clse button
    $(".ui-dialog-titlebar-close").hide();

    $loginDialog.height("auto");

    function submitHandler(e) {
      if (!$logform.valid()) {
        return false;
      }

      e && e.preventDefault();

      $mask.show();

      var cookie = 0,
          username = $username.val(),
          password = $password.val(),
          tocken = {"cookie": cookie, "username": username, "password": password};

      $loginmsg.html("").hide();
      //update logintime
      localStorage["logintime"] = +new Date();

      $.ajax({
        url: "xhrlogin.jsp", type: "post",
        data: JSON.stringify(tocken),
        dataType: "json",
        success: function(cookie) {

          var authCookieId_Value = parseInt(cookie.cookie);

          if (authCookieId_Value) {
            //$.removeCookie(cookieName, {path:"/"} );
            $.cookie("elid", authCookieId_Value);
            $.cookie("authCookieId", username);
            $.cookie(username, authCookieId_Value);

            location.href = "master.htm";
          }
        },
        error: function(req) {
          $mask.hide();

          var msg = model.authfail;

          req.status && (req.status != 401) && (msg = AJAXSTATUS[req.status]);
          req.status == 0 && (msg = model.connfail);

          $loginmsg
            .html(msg)
            .show();
        }
      });
    }

    $logform
      .submit(submitHandler)
      .validate({
        rules: {
          username: {
            required: true
            //, minlength: 3
          },
          password: {
            required: true
            //, minlength: 8
          }
        }
      });

    //Press Enter to submit the form (fix for IE)
    function onKeyUp(e) {
      if (e.keyCode == 13) submitHandler();
    };
    $username.keyup(onKeyUp);
    $password.keyup(onKeyUp);

    //auto login
    $(document).ready(function() {
      var token = location.hash.getParameterByName("token");
      if (token) {
        //add ? or '#', make it as a querystring.
        var srcToken = '?' + Base64.decode(token)
          , username = srcToken.getParameterByName("username")
          , password = srcToken.getParameterByName("password");

        if (username && password) {
          $username.val(username);
          $password.val(password);
          $logform.submit();
        }
      }
    });

  };

})();
/*src/js/viewlog.js*/
/*
View Log functionalities
*/

(function(window, document) {

  //EnLogic namespace
  var EL = window.EL = window.EL || {};

  EL.ViewDataLog = function(opts) {
    var model = MODEL.eventlog;
    opts = opts || {};

    var dataLog = this,
        $selector = $(opts.selector || ".viewlog"),   //container
        $txtLog = $(".txtLog", $selector),
        url = opts.url || "datalog.txt",
        clearurl = url == "datalog.txt" ? "xhrdatalogclear.jsp" : "xhrevtlogclear.jsp";

    dataLog.init = function() {

      var initHandler = function() {
        dataLog.clearLog();
        dataLog.getLog();

        EL.Privilege.setButton([$("#clearlog")], 0x00800000);
      };

      var clearHandler = function() {
        EL.Dialog.confirm(model.clearloginfo, function() {
          $.ajax({contentType: "application/json",
            url : clearurl,
            type : "post", data : EL.Auth.getTocken(),
            success : function() {
              dataLog.clearLog();
            }
          });
        });
      };

      //bind clear log button
      $(".refreshlog", $selector)
        .off()
        .on("click", initHandler);

      $(".clearlog", $selector)
        .off()
        .on("click", clearHandler);

      $(".savelog", $selector).attr({
        "href": url,
        "target": "_blank"
      });

      initHandler();

      $(document).ready(function() {
        if (window.location.href.indexOf("fullwindow") > 0) {
          $txtLog.height($(window).height() - 20);
        }
      });

    };


    //clear all the data in log grid.
    dataLog.clearLog = function() {
       $txtLog.val("");
    };

    //start to get Log
    dataLog.getLog = function() {
      $.ajax({contentType: "application/json",
        url : url,
        type : "post", data : EL.Auth.getTocken(),
        //type : "GET",
        dataType : "html",
        success : function(data) {
          $txtLog.val(data);
        },
        error : function(res, err) {
          console.log(res, err);
        }
      });
    };


    return dataLog;
  };


})(window, document);
/*src/js/roles.js*/
/*
*roles functionalities
*/
(function($, window, document) {  

  var roles = EL.Roles = function() {
    model = MODEL.role;

    var $roleGrid = $("#rolegrid"),
        //edit role related;
        $editRoleDialog = $("#editrole"),
        $editRoleGrid = $("#editrolegrid"),
        $priviRoleDialog = $("#privirole"),
        $txtRoleName = $("#txtRoleName"),
        $txtDescription = $('#txtDescription'),
        $parametersGrid = $("#gdDivParameters"),
        $privilegesGrid = $("#gdDivPrivileges"),
        $roleform = $("#editrole .formval"),
        $btnNewRole = $("#btnNewRole"),
        $btnEditRole = $("#btnEditRole"),
        $btnDeleteRole = $("#btnDeleteRole"),
        $btnEditPrivileges = $("#btnEditPrivileges"),
        $btnSavePrivileges = $("#btnSavePrivileges"),
        editmode,
        switchoutlet;

    roles.init = function() {
      roles.setRolesList();
      //roles.setBtnStatus();
      roles.bindEvent();
      roles.setValidate();

      //not admin user? disable all the role functions;
      !EL.Privilege.isSuperUser() && EL.Privilege.setButton(
        [$btnNewRole, $btnEditRole, $btnDeleteRole, $btnEditPrivileges, $btnSavePrivileges],
        0
      );
    };

    roles.setValidate = function() {
      $.validator.addMethod("username", function(value, element) {
        return value && /^[A-Za-z_][A-Za-z_0-9]+$/g.test(value);
      }, "The field must start with letter, and consist with numbers, letters and underlines.");

      $roleform.validate({
        rules: {
          txtRoleName: {required: true, minlength: 3, maxlength: 32, username: true},
          txtDescription: {maxlength: 64}
        }
      });
    };

    roles.setRolesList = function() {
      $.ajax({contentType: "application/json",
        url : "xhrrolesgetgrid.jsp",
        type : "post", data : EL.Auth.getTocken(),
        //type : "get",
        dataType : "json",
        success : function(data) {
          roles.setRolesGrid(data);
        },
        error : function(res, err) {
          console.log(res, err);
        }
      });
    };

    roles.setRolesGrid = function(rows) {
      $roleGrid.datagrid({
        columns: [[
          // {field:'rolename', title:'Role Name', sortable:true, width:248},
          {field:'rolename', title:'{0}'.format(model.rolename), sortable:true, width:248},
          // {field:'description', title:'Description', sortable:true, width:249}
          {field:'description', title:'{0}'.format(model.description), sortable:true, width:249}
        ]],
        singleSelect: true,
        height: 306,
        remoteSort: false
      });
      $roleGrid.datagrid("loadData", { rows: EL.User.filterDNA(rows) });
    };

    /*
    * set the button states: Does user have the right to do the operation?
    */
    roles.setBtnStatus = function() {
      $.ajax({contentType: "application/json",
        url : "xhrrolegetpriv.jsp",
        type : "post", data : EL.Auth.getTocken(),
        dataType : "json",
        success : function(data) {
          if (data.privilege) {
            roles.bindEvent();
          }
        },
        error : function(res, err) {
          console.log(res, err);
        }
      });

    };

    /*
    Binding event on button
    */    
    roles.bindEvent = function() {
      //we only need to bind the event once
      var $btns = $(".roles .btn");
      if ($btns.hasClass("disable")) {

        $btns.removeClass("disable");

        $btnNewRole.click(function(e) {
          editmode = false;

          roles.setRolesEditDialog();
          //if create new role, set the first tabl selected.
          $editRoleDialog.tabs("select", 0);
        });

        $btnEditRole.click(function(e) {
          editmode = true;

          var rolename = roles.getSelectRoleName();

          if (rolename) {
            roles.setRolesEditDialog(rolename);
          } else {
            // EL.Dialog.alert('Please select a row!');
            EL.Dialog.alert(model.noselect);
          }
        });

        $btnDeleteRole.click(function(e) {
          var rolename = roles.getSelectRoleName();

          if (rolename) {
            if (rolename == "admin") {
              // EL.Dialog.alert("This role can not be deleted!");
              EL.Dialog.alert(model.rolenotbedel);
            }else {
              // EL.Dialog.confirm("Do you really want to delete the role " + rolename + "?", function() {
                EL.Dialog.confirm(model.reallydelrole.format(rolename), function() {
                roles.delRole(rolename);
              });
            }
          } else {
            // EL.Dialog.alert('Please select a row');
            EL.Dialog.alert(model.noselect)
          }
        });

        roles.setEditRolePrivi(1);

      }
    };

    /*
    Get selected role from user list grid.
    */
    roles.getSelectRoleName = function() {
      var row = $roleGrid.datagrid('getSelected');

      return row ? row["rolename"] : row;
    };

    roles.setEditRolePrivi = function(privi) {
      if (privi) {
        $btnEditPrivileges.click(roles.setRolesPriviDialog);
        $btnSavePrivileges.click(roles.saveRoles);
        roles.setEditRoleBtn();
      } else {
        $btnEditPrivileges.off();
        $btnSavePrivileges.off();
        roles.setEditRoleBtn("admin");
      }
    };

    roles.setEditRoleBtn = function(rolename) {
      /*
      Admin & User role cannot be modified.
      */
      if (rolename == "admin") {
        $btnEditPrivileges.addClass("disableButton");
        $btnSavePrivileges.addClass("disableButton");
      } else {
        $btnEditPrivileges.removeClass("disableButton");
        $btnSavePrivileges.removeClass("disableButton");
      }
    };

    /*
    Setting editing roles
    */
    roles.setRolesEditDialog = function(rolename) {
      var modelbt = MODEL.buttons;

      roles.setEditRoleBtn(rolename);

      //create tabs
      $editRoleDialog.tabs({
        //fix bug, first time opened edit role grid will be empty
        select: function(event, ui) {
          (ui.index == 1) && $editRoleGrid.datagrid();
        }
      });
      //initial dialogs
      $editRoleDialog.dialog({
        // title:  '<img src="images/role_add.png" alt=icon/> Role Information',
        title:  '<div class="icon-roleadd"> {0} </div>'.format(model.roleinfo),
        width: 430,
        autoHeight: true,
        modal: true,
        resizable: false,
        dialogClass: 'sample',
        buttons: {
          "Cancel" :{
            // text: " Cancel ",
            text: modelbt.cancels,
            click: function() {
              $(this).dialog("destroy");
            },
            // title: "Click Cancel to Close",
            title: "{0}".format(model.clickcancel),
            id: "btnCancel"
          }
        },
        close: function() {
          $(this).dialog("destroy");
        }
      });

      //reset form
      $roleform.validate().resetForm();

      //no role name offered means create a new role
      if (!rolename) {
        //filled with empty privileges
        roles.setRolesEditGrid([]);

        $txtRoleName
          .val("")
          .attr("readonly", false)
          .removeClass("disable");
        $txtDescription
          .val("");
          //.attr("readonly", false);

      } else {
        var tocken =  $.extend({rolename: rolename}, EL.Auth.getJSON());

        //filled in privileges
        $.ajax({contentType: "application/json",
          url : "xhreditrolesget.jsp",
          type : "post", data : JSON.stringify(tocken),
          dataType : "json",
          success : function(data) {

            var privileges = data.privileges,
                switchoutlet = data.switchoutlet1 | data.switchoutlet2 << 24;

            $txtRoleName
              .val(data.rolename)
              .attr("readonly", true)
              .addClass("disable");
            $txtDescription
              .val(data.description);
              //.attr("readonly", true);

            var rows = roles.getRoleDataFromBytes(privileges, switchoutlet);

            roles.setRolesEditGrid(rows);
          }
        });
      }
    };

    roles.saveRoles = function(e) {
      if ($(e.target).hasClass("disableButton")) return;

      if (!$roleform.valid()) {
        return;
      }

      var rolesData = $editRoleGrid.datagrid("getRows"),
          privileges = 0, switchoutlet = 0;

      //get privileges and outlets bytes data from arr
      for(var i = 0, len = rolesData.length; i < len; i++ ) {
        var id = rolesData[i].id;

        if (id == 0x00004000) {
          var outlets = roles.getOutletArrFromText(rolesData[i].parameters);
          for(var j in outlets) {
            switchoutlet = switchoutlet | outlets[j];
          }
        }

        privileges = privileges | id;

        //we need not this logic again, because where will no empty switchoutlet option on the rows.
        //if (switchoutlet || id != 0x00004000) { }  
      }

      var tocken =  $.extend(EL.Auth.getJSON(), {
        rolename: $txtRoleName.val(),
        description : $txtDescription.val(),
        privileges : privileges,
        switchoutlet1 : switchoutlet & 16777215,
        switchoutlet2 : switchoutlet >>> 24
      });

      url = editmode ? "xhreditrolesset.jsp" : "xhrnewrolesset.jsp";

      $.ajax({contentType: "application/json",
        url : url,
        type : "post", data : JSON.stringify(tocken),
        dataType : "json",
        success : function(data) {
          switch(data.uptstatus) {
            case 1:
              //EL.Dialog.alert("Update successfully");
              $editRoleDialog.dialog("destroy");
              roles.setRolesList();
              break;
            case 2:
              EL.Dialog.alert("Authentication/Authorization failed.");
              break;
            case 3:
              EL.Dialog.alert("Entered Role is already existed.");
              break;
            default:
              EL.Dialog.alert("Role is not created, update failed.");
              break;
          }
        },
        error : function(res, err) {
          console.log(res, err);
        }
      });

    };

    roles.delRole = function(rolename) {
      var tocken =  $.extend(EL.Auth.getJSON(), { rolename: rolename });

      $.ajax({contentType: "application/json",
        url : "xhrrolesdel.jsp",
        type : "post", data : JSON.stringify(tocken),
        dataType : "json",
        success : function(data) {
          if (EL.UpdateStatus(data)) {
            EL.Message(model.deldone);
            roles.setRolesList();
          }
        },
        error : function(res, err) {
          console.log(res, err);
        }
      });
    };

    /*
    return type: [{ id: "", privileges: "", parameters: "" }, ...]
    */
    roles.getRoleDataFromBytes = function(privileges, switchoutlet) {
      var rows = [];

      //pick up privileges 
      for(var key in PRIVILEGES) {
        if (privileges & key) {
          var row = {
            id : key,
            privileges : EL.Privilege.getText(key),
            parameters : ""
          };

          //has switch outlets
          if (key == 0x00004000) {
            var outletArr = [];

            for(var id in OUTLETS) {
              if (id & switchoutlet) {
                outletArr.push(OUTLETS[id]);
              }
            }

            //using ' ' to the parameters value from PRIVILEGES
            row.parameters = outletArr.join(' , ') + ' ';
          }

          rows.push(row);
        }
      }
      return rows;
    };

    roles.setRolesEditGrid = function(data) {
      $editRoleGrid.datagrid({
        columns:[[
          // {field:'privileges', title:'Privileges', width:226},
          {field:'privileges', title:'{0}'.format(model.privileges), width:226},
          // {field:'parameters', title:'Parameters', width:174, formatter: function(value) {
          {field:'parameters', title:'{0}'.format(model.parameters), width:174, formatter: function(value) {
            return "<span title='" + value + "'>" + value + "</span>"
          }}
        ]],
        singleSelect: true,
        height: 340
      });

      //fix bug the UI will be delayed for some time.
      $editRoleGrid.datagrid("loadData", data);
    };

    roles.setRolesPriviDialog = function(e) {
      var modelbt = MODEL.buttons;
      if ($(e.target).hasClass("disableButton")) return;

      //privilege dialog
      $priviRoleDialog.dialog({
        // title:  '<img src="images/role_key.png" alt="icon"/> Privileges Editing',
        // title:  '<div class="icon-rolekey"> Privileges Editing </div>',
        title:  '<div class="icon-rolekey"> {0} </div>'.format(model.privilegesedit),
        width: 670,
        height: "auto",
        modal: true,
        resizable: false,
        buttons: {
          "OK" :{
            // text: " OK ",
            text: " {0} ".format(modelbt.oks),
            click: function() {
              var privArr = $privilegesGrid.datagrid("getSelections"),
                  paraArr = $parametersGrid.datagrid("getSelections"),
                  privileges = 0,
                  outlets = 0;

              for(var o in paraArr) {
                outlets = outlets | paraArr[o]["parameters"];
              }

              for(var i in privArr) {
                //If the outlets is zero, then skip selected the SwitchOutlet options.
                var privi = privArr[i]["privileges"];
                if (outlets || privi != 0x00004000) {
                  privileges = privileges | privi;
                }
              }

              var rows =  roles.getRoleDataFromBytes(privileges, outlets);

              roles.setRolesEditGrid(rows);

              $(this).dialog("destroy");
            },
            // title: "Click here to close"
            title: "{0}".format(model.clicksavecancel)
          }
        },
        close: function() {
          $(this).dialog("destroy");
        }           
      });

      //grid related
      $privilegesGrid.datagrid({
        columns: [[
          {checkbox:true, align:"center"},
          {field: "privileges", title: model.privileges, width: 270, formatter: function(value) {
            return EL.Privilege.getText(value)
          }}
        ]],
        checkbox: true,
        onSelect: function(rowid, row) {
          var $parametersGridContainer = $parametersGrid.closest(".datagrid");
          if (row["privileges"] == 0x00004000) {
            $parametersGridContainer.show();
            $parametersGrid.datagrid();
          } else {
            $parametersGridContainer.hide();
          }
        },
        onUnselect: function(rowid, row) {
          var $parametersGridContainer = $parametersGrid.closest(".datagrid");
          (row["privileges"] == 0x00004000) && $parametersGridContainer.hide();
        },
        idField: "privileges",
        height: 350
      });

      $parametersGrid.datagrid({
        columns: [[
          {checkbox:true, align:"center"},
          {field: "parameters", title:model.parameters, width: 270, formatter: function(value) {
            return OUTLETS[value]
          }}
        ]],
        idField: "parameters",
        checkbox: true,
        height: 350
      });

      var priviArr = [], paramArr = [];

      for(var key in PRIVILEGES_Arr) {
        priviArr.push({ privileges : PRIVILEGES_Arr[key] });
      }

      var outcount = 0;
      for(var id in OUTLETS) {
        (outcount++ < EL.Privilege.outcount) && paramArr.push({ parameters : id });
      }

      $privilegesGrid.datagrid("loadData", priviArr);
      $parametersGrid.datagrid("loadData", paramArr);

      //set selection
      $privilegesGrid.datagrid("clearSelections");
      $parametersGrid.datagrid("clearSelections");

      var editRows = $editRoleGrid.datagrid('getRows');

      for(var i = 0, len = editRows.length; i < len ; i++) {
        var id = editRows[i].id, 
            param = editRows[i].parameters;

        $privilegesGrid.datagrid("selectRecord", id);
        if (id == 0x00004000 && param) {
          var arr  = roles.getOutletArrFromText(param);
          for(j in arr) {
            $parametersGrid.datagrid("selectRecord", arr[j]);
          }
        }
      }

    };

    /*
    input: Outlet 1 , Outlet 2 , Outlet 3 , Outlet 4 , Outlet 5 , Outlet 6 , Outlet 7 
    output: [ 1, 2, 4, 8 , 16 , 32, 64 ]
    */
    roles.getOutletArrFromText = function(strOutlets) {
      var arr = [];
      for(var id in OUTLETS) {
        //Is the outlet selected, etc: has the "Outlet 1 " in parameters
        if (strOutlets.indexOf(OUTLETS[id] + ' ') > -1) {
          arr.push(id);
        }
      }
      return arr;
    };



    return roles;
  };


})(jQuery, window, document);

/*src/js/master.js*/
/*
master functionalities.
*/
(function(window, document) {

  var master = EL.Master = function(model) {

    var $menus = $(".menu li a"),
        $tree = $("#tree"),
        $tabs = $("#tabs"),
        $loader = $(".center .loader"),
        $logout = $("#aLogout");

    master.init = function() {

      if ($menus.size() && $tree.size() && $tabs.size()) {
        master.oldInit();
        master.setMenu();
        master.setTabs();
        master.setResize();
        master.setEnvir();

        //Global ajax error handler
        EL.AjaxError();

        $(window).trigger("resize");
      }
    };

    /*
    remove dialog divs
    */
    master.removeDialog = function() {
      $("#mydialog").dialog("close");
      $("#mydialog").html('');
      //Sub Dialog, in order to remove the cache of jQuery.dialog
      $("#privirole").remove();
      $("#editrole").remove();
      $("#tabCreateNewUser").remove();
      $("#createNewServer").remove();
    };

    master.mask = function(mask) {
      var $mask = $("#maskingDiv");
      mask ? $mask.show() : $mask.hide();
    };

    /*
    Old functionality from India's team;
    */
    master.oldInit = function() {
      // Creating Menu
      ddsmoothmenu.init({
        mainmenuid: "smoothmenu1", //menu DIV id
        orientation: 'h', //Horizontal or vertical menu: Set to "h" or "v"
        classname: 'ddsmoothmenu', //class added to menu's outer DIV
        //customtheme: ["#1c5a80", "#18374a"],
        contentsource: "markup" //"markup" or ["container_id", "path_to_menu_file"]          
      });
      //help menu
      cssdropdown.startchrome("chromemenu");

      //remove mask
      master.mask(false);
      $("#authCookieId").val($.cookie("authCookieId"));

      //Menu event handler
      $('li:not(:has(>ul))', '.menu').live('click', function () {

        //reset dialog first
        master.removeDialog();

        var ids = $(this).parents('li').attr('id');
        var id = $(this).attr('id');

        if (
          EL.Privilege.hasPriviElem($(this)) &&
          id &&
          id != 'downloadDiagnosticInformation' &&
          id != 'userguide'
          ) {

          var filename = id;
          var mWidth = $(this).attr('width');
          var mHeight = $(this).attr('height');
          var mTitle = $(this).attr('title');
          var imageSource = '<div class="icon-{0}">{1}</div>'.format(id, mTitle);

          master.removeDialog();

          var modelDialog = $('#mydialog');
          var arguments = [];
          arguments[0] = filename;
          arguments[1] = mWidth;
          arguments[2] = mHeight;
          arguments[3] = "";
          arguments[4] = imageSource;
          arguments[5] = modelDialog;
          arguments[6] = $(this).data("dlgclass") || "simple";
          creatDialogMain(arguments);
        }
      });
    };

    master.setMenu = function() {
      $logout.click(function(e) {
        e.preventDefault();

        // EL.Dialog.confirm("Do you really want to logout?", function() {
        EL.Dialog.confirm(model.doreallylogout, function() {

          EL.DashBoard.stop && EL.DashBoard.stop();

          $.ajax({
            url: "xhrlogout.jsp",
            type: "post", data: EL.Auth.getTocken(),
            success: function() {
              window.setTimeout(function() {
                var username = $.cookie("authCookieId");
                $.cookie("authCookieId", null);
                $.cookie(username, null);            
                window.location = "login.htm";
              }, 300);
            }
          });
        });
      });
    };

    /*
    set tree on the left panel
    */
    master.setTree = function() {

      var tree = [ EL.TreeRoot ];

      //click the tree handler
      var clickTree = function(node) {

        var id = node.id,
            attr = node.attributes,
            container = "#tab" + id,
            title = '<span class="icon-' + id + '">' + node.text + '</span>';

        //Existing, select it, or add a new one
        if ($(container).size() < 1) {
          $tabs.tabs("add", container, title);
        } else {
          //Update UI title
          $(".ui-tabs-nav a[href=" + container + "]").html(title);

          //make it selected
          $tabs.tabs('select', container);

          if (id == "dashboard") {
            EL.DashBoard.stop();
          }
        }
        
        //make it selected
        $tabs.tabs('select', container);

        $(container).html('');

        //show the loader
        $loader.show();

        //cache the parameters
        $(container).data("opts", attr);

        $.ajax({
          url: "xhr" + id + ".jsp", contentHeader: "application/json",
          type: "post", data: EL.Auth.getTocken(),
          dataType: "html",
          success: function(html) {
            $(container).append(html);
            $(window).resize();
          }
        });
      };

      var refreshTimer = null;

      var onClickTree = function(node){
        window.clearTimeout(refreshTimer);
        refreshTimer = window.setTimeout(function() {
          clickTree(node);
        }, 500);
      };

      var parseTree = function(data) {
        var i = 0, len = data.length;
        EL.Master.pducount = len;
        for(; i < len; i++) {
          var obj = data[i],
              pdu = {
                "id": "pdus",
                "text": obj.name,
                "children":[],
                attributes: {
                  pduid: i + 1
                }
              };

          obj["ess"] = 1;

          for(var key in EL.TreeMap) {

            var val = parseInt(obj[key]);

            if (i == 0) {
              //Set the pdu name in the Privilge;
              EL.Privilege.pdu = obj.name;
              //reset number of the outlets
              (key == "outs") && EL.Privilege.setOutCount(val);
            }

            if (val) {
              var node = {
                id: EL.TreeMap[key]["id"],
                text: EL.TreeMap[key]["text"],
                iconCls: EL.TreeMap[key]["icon"],
                attributes: { pduid: i + 1 }
              };
              if (key == "outs") {
                node.state = "closed";
                node.children = [];

                var outletload = parseInt(obj.outletload);

                for(var o = 1, oLen = val; o <= oLen; o++) {

                  var icon_outletload = "";
                  outletload
                    && (outletload & (1 << (o - 1)))
                    && (icon_outletload = " icon-ol-load" );

                  node.children.push({
                    //id:"outlet " + o ,
                    id:"outlet",
                    // text: OUTLETS[1 << (o - 1)],
                    text: OUTLETS[(1 << (o - 1)) < 0 ? -(1 << (o - 1)) : (1 << (o - 1))],
                    iconCls:"icon-ol" + icon_outletload,
                    attributes: {
                      pduid: i + 1,
                      outid: o
                    }
                  });
                }
              }
              pdu.children.push(node);
            }
          }
          tree.push(pdu);
        }

        //Create treeview
        $tree.tree({      
          checkbox: false,
          data: tree,
          onClick: onClickTree
        });

        $("#tree div[node-id=dashboard]").click();
      };

      $.ajax({contentType: "application/json",
        url:"xhrpdutree.jsp",
        type:"post", data: EL.Auth.getTocken(),
        dataType:"json",
        success: parseTree,
        error:function() {
          console.log(arguments);
        }
      });
    };

    master.setTabs = function() {
      //create tabs
      $tabs.tabs({
        tabTemplate: "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close'>Remove Tab</span></li>"
      });

      $tabs.on("click", "span.ui-icon-close", function(e) {
        var index = $( "li", $tabs ).index( $( this ).parent() );
        $tabs.tabs( "remove", index );
      });
    };

    master.setResize = function() {
      /*
      Resize the layout
      */
      var resize =  function() {
        var height = $(window).height(),
            offset = 153,
            header = 26,
            scrollbody = 46;

        $(".lay .center").height(height - offset + header);
        $(".lay .center .ui-tabs-panel").height(height - offset + header - scrollbody);
        $(".lay #tree").height(height - offset + 0);
      };

      $(window).resize(resize);
    };

    /*
    Set environments
    */
    master.logintime = new Date();
    master.curtime = new Date();
    master.ip = "127.0.0.1";

    master.setEnvir = function(data) {

      var //$downloadDiagnostics = $("#downloadDiagnostics"),
          $loginuser = $("#loginuser"),
          $ipaddress = $("#logintime"),
          $currenttime = $("#currenttime"),
          formatTime = function(time) {
            var strTime = (time || master.curtime).toString(),
                idxGMT = strTime.indexOf("GMT");

            (idxGMT < 0) && (idxGMT = strTime.indexOf("UTC"));

            return strTime.substr(0, idxGMT);
          };

      var environmentHandler = function(data) {
        //datatime
        master.ip = data.ip;
        master.curtime = new Date(data.curtime);
        master.logintime = new Date(parseInt(localStorage["logintime"]) || +new Date());
        master.pducount  = data.pducount;
        master.pduphase  = data.pduphase;
        master.pdumode   = data.pdumode;

        var updateCurrentTime = function() {
          $currenttime.html(formatTime());
          master.curtime = new Date(1000 + +master.curtime);
        };

        window.setInterval(updateCurrentTime, 1000);

        updateCurrentTime();

        //power tip commited.
        $loginuser
          .html( data.name + " ( " + data.role + " ) " )
          .attr("title", model.login.format(data.role))
          .powerTip({placement: 'n'});

        $ipaddress
          .attr("title", model.ip.format(master.ip))
          .powerTip({placement: 'n'});

        $currenttime
          .attr("title", model.time.format(formatTime(master.logintime)))
          .powerTip({placement: 'nw'});

        //privilege
        EL.Privilege.set(data);

        //force change password
        if (EL.Privilege.changepsw) {
          $("#changepw")
            .data("dlgclass", "forcedlg")
            .click()
            .data("dlgclass", "");
        }

        //set tree
        master.setTree();
        //init force https
        EL.ForceHttps();
        //init set alarm dialog
        EL.SetAlarm().init();
      };

      //update download url
      $.ajax({
        url: "xhrmasterpgget.jsp", contentType: "application/json",
        type: "post", dataType: "json",
        data: EL.Auth.getTocken(),
        success: environmentHandler
      });

    };


    return master;
  };

  /*
  public method, need not initialization
  */
  master.getTabOpts = function($el) {
    var $container = $el.closest(".ui-tabs-panel");

    return $container.data("opts") || {};
  };

  //pdu count
  master.pducount = 0;

})(window, document);
/*src/js/setalarm.js*/
/*
switch checkbox, when cbcheckboxname is checked, 
find the input field with checkboxname reset it
*/
(function($) {

  $.fn.switchCheckBox = function(isChecked) {


    var resetStatus = function($checkbox, diable) {
      var $form = $checkbox.closest("form"),
          name = $checkbox.attr("name").substr(2),
          $input = $('*[name="' + name  + '"]', $form);

      if (diable) {
        $checkbox.attr("checked", "checked");
        $input
          .removeAttr("disabled")
          .removeAttr("readonly")
          .removeClass("disable");
      } else {
        $checkbox.removeAttr("checked");
        $input
          .attr("disabled", true)
          .attr("readonly", "readonly")
          .addClass("disable");
      }
    };

    /*
    checked means enable;
    uncheck mean disable;
    */
    var switchHandler = function(e) {
      var $checkbox = $(this),
          checked = ($checkbox.attr("checked") == "checked");

      resetStatus($checkbox, checked);
    };

    return this.each(function() {
      var $checkbox = $(this);

      if (typeof isChecked != undefined) {
        resetStatus($checkbox, isChecked);
      }

      $checkbox.on("change", switchHandler);
    });
  };

})(jQuery);

(function(window, document) {

  var self = EL.SetAlarm = function() {
    var model   = MODEL.buttons;
    var modelmt = MODEL.master;

    var $settingDialog,
        settingDialogHtml = $("#setalarmdialog").parent().html(),
        validator, min, max;

    self.init = function() {
      //recreate the dialog again;
      $("#setalarmdialog").remove();
      $settingDialog = $(settingDialogHtml);
      $(document.body).append($settingDialog);

      //toggle the disable status on the checkbox.
      $("input.switch").switchCheckBox();
    };

    self.close = function() {
      $settingDialog.dialog("close");
    };

    /*
    alarm setting: public method exposed to external applications
    etc:
    urlPrefix: ajax request to get/set the value;
    params: { pduid:pduid, sensorid:sensorid }
    type: unit fix, etc: A, V, VA, W
    */
    self.setAlarm = function(urlPrefix, params, unit, title) {
      self.init();

      var type = ALARMUNITTYPE[unit] || { title:"" },
          //default sensor is temp
          sensortype = params["sensortype"];

      var $abound  = $("#abound", $settingDialog),
          $aswitch = $("#aswitch", $settingDialog),
          $aenable = $("#aenable", $settingDialog);

      //Unit defined? It needs bound panel;
      if (unit) {
        $abound.show();
        $aswitch.hide();
        $aenable.hide();

      //Unit not defined, depends on the sensor type, sensor type: 1,2 must have unit value, so ignore them;
      } else {
        switch (sensortype) {
          case 3:
          case 4:
            $abound.hide();
            $aswitch.show();
            $aenable.hide();
            break;
          case 5:
          case 6:
          case 7:
          case 8:
            $abound.hide();
            $aswitch.hide();
            $aenable.show();
            break;
        }
      }

      min = params["min"] || type["min"] || 0,
      max = params["max"] || type["max"] || 10000000000;

      delete params.min;
      delete params.max;
      delete params.sensortype;

      var unitTxt = type["unit"] || " ",
          factor = type["factor"] || 1,
          fixed = type["fixed"] || 0;

      title = title || $("#tabs .ui-tabs-selected a").html() + ' ' + type["title"];

      //set alarm validate
      validator = self.setAlarmValidate(unit);

      //add unit
      $(".unit", $settingDialog).html(unitTxt);


      var tocken = $.extend(params, EL.Auth.getJSON());

      /*
      data postback will be like this:
      {
        "cblowcritical": 1,    //1: disable   0: enable
        "lowcritical": 10,
        "cblowwarning": 1,
        "lowwarning": 10,
        "cbupwarning": 0,
        "upwarning": 20,
        "cbupcritical": 0,
        "upcritical": 30,
        "threshold": 8,
        "delay": 10
      }
      */
      var getAlarmHandler = function(data) {
        // var model   = MODEL.buttons;
        // var modelmt = MODEL.master;

        validator.resetForm();

        for(key in data) {
          var val = data[key],
              $input = $('[name="' + key + '"]', $settingDialog);

          if ($input.size()) {
            if ($input.attr("type") == "checkbox") {
              $input.switchCheckBox(!val);
            } else {
              if (key == "delay") {
                $input.val( val );
              } else {
                $input[0].value = (val / factor).toFixed(fixed);
                //$input.val((val / factor).toFixed(fixed));
              }
            }
          }

        }

        $settingDialog.dialog({
          // title:  '<h4>' + title + ' Alarm Setting</h4>',alarmsetting
          title:  '<h4>{0} {1}</h4>'.format(title, modelmt.setalarmdl.alarmsetting),
          width: 430, autoHeight: true,
          modal: true, resizable: false,
          minHeight: 116,
          buttons: {
            "Save" : {
              text: model.save,
              click: function(){setAlarmHandler();},
              id: "btnSave"
            },
            "Cancel" : {
              text: model.cancels,
              click: function(){self.close();},
              id: "btnClose"
            }
          }
        });
      };

      var setAlarmHandler = function(e) {
        if (!$("form", $settingDialog).valid()) {
          return false;
        }

        //clone a new json data
        var saveData = $.extend({}, tocken);

        $("input:visible, select:visible", $settingDialog).each(function() {
          var $input = $(this),
              name = $input.attr("name");
              val = Number($input.val());

          (name != "delay") && (val *= factor);

          if ($input.attr("type") == "checkbox") {
            val = ($input.attr("checked") ? 0 : 1);
          }

          saveData[name] = val;
        });

        $.ajax({contentType: "application/json",
          url: urlPrefix + "set.jsp",
          type: "post", data: JSON.stringify(saveData),
          dataType: "json",
          success: function(status) {
            (status.uptstatus != 1) && EL.Dialog.alert(modelmt.setalarmdl.updatefail);
            self.close();
          },
          error: function() {
            console.log(arguments);
          }
        });

      };

      $.ajax({contentType: "application/json",
        url: urlPrefix + "get.jsp",
        type: "post", data: JSON.stringify(tocken),
        dataType: "json",
        success: getAlarmHandler,
        error: function() {
          console.log(arguments);
        }
      });

    };

    /*
    Set validation on alarm dialog
    */
    self.setAlarmValidate = function(unit) {

      var $lowcritical = $('[name="lowcritical"]', $settingDialog),
          $lowwarning =  $('[name="lowwarning"]', $settingDialog),
          $upwarning = $('[name="upwarning"]', $settingDialog),
          $upcritical = $('[name="upcritical"]', $settingDialog),
          $cblowcritical = $('[name="cblowcritical"]', $settingDialog),
          $cblowwarning =  $('[name="cblowwarning"]', $settingDialog),
          $cbupwarning = $('[name="cbupwarning"]', $settingDialog),
          $cbupcritical = $('[name="cbupcritical"]', $settingDialog),
          $threshold = $('[name="threshold"]', $settingDialog);

      $.validator.addMethod("lowCheck", function(value, element) {
        if ($cblowcritical.attr("checked") && $cblowwarning.attr("checked")
            && (parseFloat($lowcritical.val()) + parseFloat($threshold.val()) > parseFloat($lowwarning.val()))
          ) {
          return false;
        }
        return true;
      }, modelmt.setalarmdl.lowcriticalinfo);

      $.validator.addMethod("lowWarningCheck", function(value, element) {
        if ($cblowwarning.attr("checked")
            && $cbupwarning.attr("checked")
            && (parseFloat($lowwarning.val()) + 2 * parseFloat($threshold.val()) > parseFloat($upwarning.val()))
          ) {
          return false;
        }
        return true;
      }, modelmt.setalarmdl.lowwarninfo);

      $.validator.addMethod("upCheck", function(value, element) {
        if ($cbupwarning.attr("checked") && $cbupcritical.attr("checked")
            && (parseFloat($upwarning.val()) + parseFloat($threshold.val()) > parseFloat($upcritical.val()))
          ) {
          return false;
        }
        return true;
      }, modelmt.setalarmdl.upwarninfo);

      //Low Critical check;
      $.validator.addMethod("criticalUpWarning", function(value, element) {
        if ($cblowcritical.attr("checked") && $cbupwarning.attr("checked")
            && (parseFloat($lowcritical.val()) + 2 * parseFloat($threshold.val()) > parseFloat($upwarning.val()))
          ) {
          return false;
        }
        return true;
      }, modelmt.setalarmdl.lowcriticalinfo2);

      $.validator.addMethod("criticalUpCritical", function(value, element) {
        if ($cblowcritical.attr("checked") && $cbupcritical.attr("checked")
            && (parseFloat($lowcritical.val()) + 2 * parseFloat($threshold.val()) > parseFloat($upcritical.val()))
          ) {
          return false;
        }
        return true;
      }, modelmt.setalarmdl.lowcriticalinfo3);

      //Low Warning Check
      $.validator.addMethod("warningUpCritical", function(value, element) {
        if ($cblowwarning.attr("checked") && $cbupcritical.attr("checked")
            && (parseFloat($lowwarning.val()) + 2 * parseFloat($threshold.val()) > parseFloat($upcritical.val()))
          ) {
          return false;
        }
        return true;
      }, modelmt.setalarmdl.lowwarninfo2);

      var rules = {
          lowcritical: {required:true, min: min, max: max, lowCheck: true, criticalUpWarning: true, criticalUpCritical: true},
          lowwarning: {required:true, min: min, max: max, lowWarningCheck:true, warningUpCritical: true },
          upcritical: {required:true, min: min, max: max },
          upwarning: {required:true, min: min, max: max, upCheck: true},
          threshold: {required:true, min: 0, max: max},
          delay: {required:true, min:0, max:100}
        };

      for (var key in rules) {
        var rule = rules[key];
        unit == 'A'
          ? (rule["number"] = true)
          : (rule["digits"] = true);
      }

      return $("form", $settingDialog).validate({ rules: rules });
    };

    /*Get alarm pure text with style*/
    self.getAlarmTxt = function(status, privi) {
      var priviTxt = privi ? "No Permission: " + PRIVILEGES[privi] || "" : "";

      var statusType = status.toLowerCase().replace(' ', '');

      return '<span href="#" class="alarm '
            + "alarm-" + statusType + '" '
            + 'title="' + priviTxt + '" '
            + '>'
            + modelmt.setalarmdl[statusType]
            + '</span>';
    };

    /*
    Get clickable status html string.
    urlprefix: full url will be like urlprefixget.htm / urlprefixset.htm
    status code, sending params
    */
    self.getAlarmStr = function(urlPrefix, status, params, unit, privi) {
      status = STATUSTYPE[status] || status;
      //type parameter if there is no value pass empty string.
      unit = unit ? ",\"" + unit + "\"" : "";

      privi = privi || 0x00000100;

      if (!EL.Privilege.hasPrivilege(privi)) {
        return self.getAlarmTxt(status, privi);
      }

      var statusType = status.toLowerCase().replace(' ', '');

      return '<a href="#" class="alarm '
            + "alarm-" + statusType
            + '" onclick=\'EL.SetAlarm.setAlarm(' 
            + "\"" + urlPrefix + "\","
            + JSON.stringify(params)
            + unit
            + ')\'>'
            + modelmt.setalarmdl[statusType]
            + '</a>';
    };

    return self;
  };

}(window, document));
/*src/js/editgrid.js*/
(function(window, document) {

  /****************************** Data Grid Begin ************************************/
  var self = EL.EditGrid = function() {

    var $grid, cols, rows, url, saveData, colsType, permission;

    //on save handler
    self.onSave = null;

    self.init = function(_$grid, _cols, _rows, _url, _data, _permission) {
      $grid = _$grid;
      cols = _cols;
      rows = _rows;
      url = _url;
      saveData = _data;
      //does user has the permission to edit?
      permission = _permission;

      self.setGrid();
    };

    self.updateActions = function(index) {
      var rowcount = $grid.datagrid('getRows').length;
      $grid.datagrid("updateRow", {index:index, row:{action:''} });
      /*
      // too slow for IE
      for(var i=0; i<rowcount; i++) {
        $grid.datagrid('updateRow',{
          index:i,
          row:{action:''}
        });
      }
      */
    };

    self.editrow = function(idx) {
      $grid.datagrid('beginEdit', idx);
    };

    /*
    return matched data in row.
    */
    self.getSaveData = function(row) {
      var obj = {};
      for(k in saveData) {
        obj[k] = row[k] || saveData[k];
        
        //custom field fix, that combox
        //To do, add an number attribute on cols
        switch(k) {
          case "aisle":
          case "powstat":
          case "delayon":
          case "delayoff":
          case "rebotdur":
            obj[k] = parseInt(obj[k]);
        }
      }

      return obj;
    };

    self.saverow = function(index) {
      //get old and new value
      var oldRow = $.extend({}, rows[index]);
      $grid.datagrid('endEdit', index);
      var row = rows[index];

      //if on save is not null, do the custom save, passing the reference of the row, and copy of old row.
      if (self.onSave) {
        self.onSave(index, row, oldRow);
        return;
      } 

      //if save failed, roll back the row to old value;
      var failedHandler = function() {
        //roll back the row to the old value
        $.extend(row, oldRow, {editing : false});
        $grid.datagrid('updateRow',{ index: index, row: row});

        EL.Dialog.alert("Save failed!");
      };

      //send the request.
      var data = self.getSaveData(row);
      $.ajax({contentType: "application/json",
        url: url,
        type: "post", data: JSON.stringify(data),
        dataType : "JSON",
        success: function(json) {
          (json.uptstatus != "1") && failedHandler();
        },
        error: function() {
          console.log(arguments);
          failedHandler();
        }
      });

    };

    self.cancelrow = function(index) {
      $grid.datagrid('cancelEdit', index);
    };

    self.setGrid = function() {
      var model = MODEL.buttons;
      cols[0].push(
        // {field:'action',title:'Action', width:100,
        {field:'action',title:'{0}'.format(model.action), width: 160,
          formatter:function(value,row,index) {
            if (permission) {
              if (row.editing) {
                // var s = '<a href="#" onclick="EL.EditGrid.saverow(' + index + ')">Save</a> ';
                // var c = '<a href="#" onclick="EL.EditGrid.cancelrow(' + index + ')">Cancel</a>';
                var s = '<a href="#" onclick="EL.EditGrid.saverow(' + index + ')">{0}</a> '.format(model.save);
                var c = '<a href="#" onclick="EL.EditGrid.cancelrow(' + index + ')">{0}</a>'.format(model.cancels);
                return s + c;
              } else {
                // return '<a href="#" onclick="EL.EditGrid.editrow(' + index  + ')">Edit</a> ';
                return '<a href="#" onclick="EL.EditGrid.editrow(' + index  + ')">{0}</a> '.format(model.edit);
              }
            } else {
              return "No Permission";
            }
          }
        }
      );

      $grid.datagrid({
        columns: cols,
        onBeforeEdit:function(index,row) {
          row.editing = true;
          self.updateActions(index);
        },
        onAfterEdit:function(index,row) {
          row.editing = false;
          self.updateActions(index);
        },
        onCancelEdit:function(index,row) {
          row.editing = false;
          self.updateActions(index);
        }
      });

      $grid.datagrid("loadData", {rows: rows});

    };

    return self;
  };
  /****************************** Data Grid End  ************************************/

  /****************************** Property Grid Begin ************************************/
  //get length of bytes
  var hasChinese = function(strTemp) {
    for (var i = strTemp.length ; i-- ; ) {
      if (strTemp.charCodeAt(i) > 255) {
        return true;
      }
    }
    return false;
  };

  /*
  Valid data field row in propertygrid.
  Only valid it when the row has max & min attributes.
  */
  self.validField = function(row, value) {
    var min = row["min"],
        max = row["max"],
        minlength = row["minlength"],
        maxlength = row["maxlength"];

    if (min || max) {
      value = Number(value);
      if ((!value && value !=0) || value < min || value > max) {
        return false;
      }
    }

    //fields should not have chinese
    if (hasChinese(value)) return false;

    if (maxlength || minlength) {
      if (value.length > maxlength) return false;
      if (value.length < minlength) return false;
    }

    return true;
  };

  /*
  Fix Propertygrid: 
  1) submit on user press Enter
  2) submit on user select a item on drop down item.
  */
  self.bindPropertyGrid = function() {
    $(document).on("keydown", ".propertygrid input", function(e) {
      var $container = $(".propertygrid:visible"),
          $property = $("table.easyui-propertygrid", $container);

      if ($property.size() < 1) return;

      //user press enter submit
      if (e.keyCode == 13) {
        var row = $property.propertygrid("getSelected"),
            idx = $property.propertygrid("getRowIndex", row),
            val = $(e.target).val();

        if (idx > -1) {
          if (!self.validField(row, val)) {
            $property.propertygrid("cancelEdit", idx);
          } else {
            $property.propertygrid("endEdit", idx);
          }
        }
      }
    });

    $(document).on("mouseup", ".combobox-item", function(e) {
      var $container = $(".propertygrid:visible"),
          $property = $("table.easyui-propertygrid", $container);

      if ($property.size() < 1) return;

      var row = $property.propertygrid("getSelected"),
          idx = $property.propertygrid("getRowIndex", row);

      if (idx > -1) {
        window.setTimeout(function() {
          $property.propertygrid("endEdit", idx);
        }, 100);
      }
    });
  };

  //fix it at once.
  self.bindPropertyGrid();
  /****************************** Property Grid End ************************************/


  /*
  DataGrid: clear columns, remove the cols that field is not existing in the return data;
  */
  self.clearCols = function(cols, rows) {
    var newCols = [[]];

    for(var c = 0, cLen = cols[0].length; c < cLen; c++) {
      var field = cols[0][c]["field"];

      if (!field || typeof rows[0][field] != "undefined") {
        newCols[0].push(cols[0][c]);
      }
    }

    return newCols;
  };

  /*
  PropertyGrid: some return back fields that maybe defined in rows, remove these fields;
  */
  self.clearRows = function(rows, row) {
    var newRows = [];
    for(var i = 0, len = rows.length; i < len; i++) {
      var key = rows[i]["key"];
      if (!key || typeof row[key] != "undefined") {
        newRows.push(rows[i]);
      }
    }

    return newRows;
  };

}(window, document));
/*src/js/extsensor.js*/
(function(window, document) {

  var refreshTimer;

  var self = EL.ExtSensor = function() {

    var $editSensorGrid = $("#sensoreditgrid"),
        editGrid = new EL.EditGrid(),
        pduid = 1,
        rows;

    var editSensorHandler = function(arr) {
      var model = MODEL.sensor;
      rows = arr;

      //get enumable aisletype
      var aisleArr = [];
      for(var k in AISLETYPE) {
        aisleArr.push({
          txt: AISLETYPE[k],
          val: parseInt(k)
        });
      }

      //format columns
      var cols = [[
        // {field:"id", title:"ID", width:40, align:"center"},
        {field:"id", title:"{0}".format(model.id), width:40, align:"center"},
        // {field:"type", title:"Type, Setting", width:120, formatter: function(value) {
        {field:"type", title:"{0}".format(model.typeset), width:220, formatter: function(value) {
          return SENSORTYPE[value];
        }},
        // {field:"status", title:"Status, Setting", width:100, formatter: function(value, row) {
        {field:"status", title:"{0}".format(model.statusset), width:180, formatter: function(value, row) {
          var type = row["type"],
              unit;

          (type == 1) && (unit = TEMPUNIT[EL.Privilege.temperature]);
          (type == 2) && (unit = "H");

          return EL.SetAlarm.getAlarmStr(
            SENSORALARMURL[type], value, {pduid: pduid, sensorid: row["id"], sensortype: type}, unit, 0x00000010
          );
        }},
        // {field:"reading", title:"Value", width:80},
        // {field:"serialnumber", title:"Serial NO.", width:140},
        // {field:"aisle", title:"Aisle", width:70,
        {field:"reading", title:"{0}".format(model.value), width:100, formatter: EL.ExtSensor.Value},
        {field:"serialnumber", title:"{0}".format(model.serialno), width:140},
        {field:"aisle", title:"{0}".format(model.aisle), width:70,
          formatter: function(value, row) {
            //var type = row["type"];
            //return (type == 1 || type == 2) ? AISLETYPE[value] : "－";
            return AISLETYPE[value];
          },
          editor:{
            type:'combobox',
            options:{
              valueField: 'val',
              textField: 'txt',
              data: aisleArr,
              required:true
            }
          }
        },
        // {field:"name", title:"Name", width:150, editor:{
        {field:"name", title:"{0}".format(model.name), width:150, editor:{
          type: 'validatebox',
          options:{
            validType: "length[0,16]"
          }
        }},
        // {field:"description", title:"Description", width:160, editor:{
        {field:"description", title:"{0}".format(model.description), width:150, editor:{
          type: 'validatebox',
          options:{
            validType: "length[0,16]"
          }
        }},
        // {field:"location", title:"Location", width:160, editor:{
        {field:"location", title:"{0}".format(model.location), width:150, editor:{
          type: 'validatebox',
          options:{
            validType: "length[0,16]"
          }
        }}
      ]];

      //format save function
      var saveTocken = $.extend(
        { pduid:pduid }, 
        EL.Auth.getJSON(), 
        { id:"", aisle:0, name:"", description:"", location:"" }
      );

      var permission = 0x00000010 & EL.Privilege.privilege;
      editGrid.init($editSensorGrid, cols, rows, "xhrextsensorset.jsp", saveTocken, permission);

      $(".center .loader").hide();
    };

    //Prevent click too fast
    self.init = function() {
      window.clearTimeout(refreshTimer);
      refreshTimer = window.setTimeout(self.start, 500);
    };

    self.start = function() {
      var opts = EL.Master.getTabOpts($editSensorGrid);
      pduid = opts.pduid;

      //toggle the disable status on the checkbox.
      $("input.switch").switchCheckBox();

      var tocken = $.extend({ pduid:pduid }, EL.Auth.getJSON());

      $.ajax({contentType: "application/json",
        url: "xhrextsensorgetgrid.jsp",
        type:"post", data: JSON.stringify(tocken),
        dataType:"json",
        success: editSensorHandler ,
        error:function() {
          console.log(arguments);
        }
      });
    };

    return self;
  };

  self.Value = function(value, row) {

    switch (parseInt(row.type)) {
      //Direct value
      case 1:
        return (value / 10).toFixed(1);
      case 2:
        return value;
      case 3:
      case 4:
      case 7:
      case 8:
        return POWERSTATUS[value > 0 ? 1 : 0];
      case 5:
      case 6:
        return FLUID[value];
    }

    return value;
  };

}(window, document));
/*src/js/circuitbreak.js*/
(function(window) {

  var curID;

  /*
  Circuit break
  */
  var self = EL.CircuitBreak = function() {
    var model = MODEL.breakers;

    var $grid = $("#circuitgrid"),
        pduid = 1,
        rows,
        tocken;

    self.init = function() {
      var opts = EL.Master.getTabOpts($grid);
      
      pduid = opts.pduid;
      tocken = $.extend({ pduid:pduid }, EL.Auth.getJSON());

      window.clearTimeout( curID );
      curID = window.setTimeout( self.getCircuit, 500);
    };

    self.getCircuit = function() {
      var circuitFormat = function(value) {
        return (value / 1000).toFixed(2);
      };

      var getCircuitHandler = function(rows) {
        //add the remaing capacity, cannot use formatter because it doesn't have field;
        for(var i=0, len=rows.length; i<len; i++) {
          var row = rows[i],
              val = circuitFormat(row["rating"]) - circuitFormat(row["rmscurrent"]);
          (val < 0) && (val = 0);
          rows[i]["remaing"] = val.toFixed(2);
        }

        //format columns
        var cols = [[
          // {field:"cb", title:"Circuit ID", width:80, align:"center"},
          // {field:"status", title:"Status, Setting", width:140, align:"center", formatter: function(value, row) {
          //   var params = { pduid: pduid, cb: row["cb"], max: circuitFormat(row["curlimit"]) };
          //   return EL.SetAlarm.getAlarmStr("xhrcbsalarm", value, params, "A", 0x00020000);
          // }},
          // {field:"rmscurrent", title:"Current, RMS (A)", width:110, formatter:circuitFormat},
          // {field:"rating", title:"Rating (A)", width:100, formatter:circuitFormat},
          // {field:"remaing", title:"Remaining Capacity (A)", width:140},
          // {field:"inputphases", title:"Input Phases", width:100},
          // {field:"connectedoutlets", title:"Connected Outlets", width:110}
          {field:"cb", title:model.circuitid, width:140, align:"center"},
          {field:"status", title:model.statusset, width:180, align:"center", formatter: function(value, row) {
            var params = { pduid: pduid, cb: row["cb"], max: circuitFormat(row["curlimit"]) };
            return EL.SetAlarm.getAlarmStr("xhrcbsalarm", value, params, "A", 0x00020000);
          }},
          {field:"rmscurrent", title:model.currentrms, width:120, formatter:circuitFormat},
          {field:"rating", title:model.rating, width:120, formatter:circuitFormat},
          {field:"remaing", title:model.remaincapacity, width:180},
          {field:"inputphases", title:model.inputphases, width:180},
          {field:"connectedoutlets", title:model.connoutlet, width:170}
        ]];

        cols = EL.EditGrid.clearCols(cols, rows);

        $grid.datagrid({ columns: cols });
        $grid.datagrid("loadData", {rows: rows});

        $(".center .loader").hide();

      };

      $.ajax({contentType: "application/json",
        url: "xhrcbsgetgrid.jsp",
        type:"post", data: JSON.stringify(tocken),
        dataType:"json",
        success: getCircuitHandler ,
        error:function() {
          console.log(arguments);
        }
      });
    };

    return self;
  };

}(window));
/*src/js/inputphase.js*/
(function(window) {

  var curID , volID, engID;

  var self = EL.InputPhase = function() {
    var model = MODEL.phases;
    var $ipscurrentgrid = $("#ipscurrentgrid"),
        $ipsvoltagegrid = $("#ipsvoltagegrid"),
        $ipsenergygrid = $("#ipsenergygrid"),
        pduid = 1,
        width = 170,
        interval      = location.href.indexOf("https") > -1 ? 10000 : 1000,
        tocken;

    var phaseFormatter = function(value) {
      return "L" + value;
    };

    self.init = function() {
      var opts = EL.Master.getTabOpts($ipscurrentgrid);
      pduid = opts.pduid;
      tocken = $.extend({ pduid:pduid }, EL.Auth.getJSON());

      //Pre-fill with testing data.
      var data = [], powData = [];
      for (var i = 1 ; i <= EL.Master.pduphase; i++) {
        data.push({
          "phase" : i,
          "reading": 0,
          "status": 5,
          "cblowcritical": 1,
          "cblowwarning": 1,
          "cbupwarning": 1,
          "cbupcritical": 1
        });
        powData.push({
          "phase" : i,
          "appPower" :  0,
          "powFactor" : 0,
          "actPower" :  0
        });
      };
      self.setCurrentGrid(data);
      self.setVoltageGrid(data);
      self.setEnergyGrid(powData);

      $(".center .loader").hide();

      //add timeout for each request;
      window.clearTimeout(curID);
      window.clearTimeout(volID);
      window.clearTimeout(engID);

      curID = window.setTimeout( self.setCurrentGrid,   600);
      volID = window.setTimeout( self.setVoltageGrid,   interval * 1);
      engID = window.setTimeout( self.setEnergyGrid,    interval * 2);
    };


    var decimalPower = function(value) {
      return (value / 1000).toFixed(0);
    };

    //unit format of current
    var decimalFormat = function(value, row) {
      return (value / 1000).toFixed(2);
    };

    var voltageFormat = function(value, row) {
      return (value / 1000).toFixed(0);
    };

    var valtag = ' &nbsp;--';

    self.setCurrentGrid = function(data) {

      //format columns
      var cols = [[
        // {field:"phase", title:"Phase Current, RMS", width:122, align:"center", formatter:phaseFormatter},
        // {field:"reading", title:"Reading (A)", width:118, formatter: decimalFormat},
        // {field:"lowcritical", title:"Lower Critical (A)", width:102, formatter: function(value, row) {
        //     var field = "cblowcritical";
        //     return (typeof row[field] == "undefined" || !row[field]) ? decimalFormat(value) : valtag;
        // }},
        // {field:"lowwarning", title:"Lower Warning (A)", width:110, formatter: function(value, row) {
        //     var field = "cblowwarning";
        //     return (typeof row[field] == "undefined" || !row[field]) ? decimalFormat(value) : valtag;
        // }},
        // {field:"upwarning", title:"Upper Warning (A)", width:110, formatter: function(value, row) {
        //     var field = "cbupwarning";
        //     return (typeof row[field] == "undefined" || !row[field]) ? decimalFormat(value) : valtag;
        // }},
        // {field:"upcritical", title:"Upper Critical (A)", width:100, formatter: function(value, row) {
        //     var field = "cbupcritical";
        //     return (typeof row[field] == "undefined" || !row[field]) ? decimalFormat(value) : valtag;
        // }},
        // {field:"status", title:"Status, Setting", width:120, align:"center", formatter: function(value, row) {
        //   var params = { pduid: pduid, phase: row["phase"], max: decimalFormat(row["curlimit"]) };

        //   return EL.SetAlarm.getAlarmStr("xhripscurrentalarm", value, params , "A", 0x00010000);
        // }}
        {field:"phase", title:model.phasecurrentrms, width:122, align:"center", formatter:phaseFormatter},
        {field:"reading", title:model.reading+"(A)", width:118, formatter: decimalFormat},
        {field:"lowcritical", title:model.lowercritical+"(A)", width:width, formatter: function(value, row) {
            var field = "cblowcritical";
            return (typeof row[field] == "undefined" || !row[field]) ? decimalFormat(value) : valtag;
        }},
        {field:"lowwarning", title:model.lowerwarning+"(A)", width:width, formatter: function(value, row) {
            var field = "cblowwarning";
            return (typeof row[field] == "undefined" || !row[field]) ? decimalFormat(value) : valtag;
        }},
        {field:"upwarning", title:model.upperwarning+"(A)", width:width, formatter: function(value, row) {
            var field = "cbupwarning";
            return (typeof row[field] == "undefined" || !row[field]) ? decimalFormat(value) : valtag;
        }},
        {field:"upcritical", title:model.uppercritical+"(A)", width:width, formatter: function(value, row) {
            var field = "cbupcritical";
            return (typeof row[field] == "undefined" || !row[field]) ? decimalFormat(value) : valtag;
        }},
        {field:"status", title:model.statusset, width:width, align:"center", formatter: function(value, row) {
          var params = { pduid: pduid, phase: row["phase"], max: decimalFormat(row["curlimit"]) };

          return EL.SetAlarm.getAlarmStr("xhripscurrentalarm", value, params , "A", 0x00010000);
        }}
      ]];

      if (data) {
        $ipscurrentgrid.datagrid({ columns: cols });
        $ipscurrentgrid.datagrid("loadData", {rows: data});
        return;
      }

      $.ajax({contentType: "application/json",
        url: "xhripscurrentgetgrid.jsp",
        type:"post", data: JSON.stringify(tocken),
        dataType:"json",
        success: function(rows) {
          $ipscurrentgrid.datagrid({ columns: cols });
          $ipscurrentgrid.datagrid("loadData", {rows: rows});
        } ,
        error:function() {
          console.log(arguments);
        }
      });
    };

    self.setVoltageGrid = function(data) {
      //format columns
      var cols = [[
        // {field:"phase", title:"Phase Voltage, RMS", width:122, align:"center", formatter:phaseFormatter},
        // {field:"reading", title:"Reading (V)", width:118, formatter: voltageFormat},
        // {field:"lowcritical", title:"Lower Critical (V)", width:102, formatter: function(value, row) {
        //     var field = "cblowcritical";
        //     return (typeof row[field] == "undefined" || !row[field]) ? voltageFormat(value) : valtag;
        // }},
        // {field:"lowwarning", title:"Lower Warning (V)", width:110, formatter: function(value, row) {
        //     var field = "cblowwarning";
        //     return (typeof row[field] == "undefined" || !row[field]) ? voltageFormat(value) : valtag;
        // }},
        // {field:"upwarning", title:"Upper Warning (V)", width:110, formatter: function(value, row) {
        //     var field = "cbupwarning";
        //     return (typeof row[field] == "undefined" || !row[field]) ? voltageFormat(value) : valtag;
        // }},
        // {field:"upcritical", title:"Upper Critical (V)", width:100, formatter: function(value, row) {
        //     var field = "cbupcritical";
        //     return (typeof row[field] == "undefined" || !row[field]) ? voltageFormat(value) : valtag;
        // }},
        // {field:"status", title:"Status, Setting", width:120, align:"center", formatter: function(value, row) {
        //   var params = { pduid: pduid, phase: row["phase"], max: voltageFormat(row["vollimit"]) };

        //   return EL.SetAlarm.getAlarmStr("xhripsvoltagealarm", value, params, "V", 0x00010000);
        // }}
        {field:"phase", title:model.phasevoltagerms, width:122, align:"center", formatter:phaseFormatter},
        {field:"reading", title:model.reading+"(V)", width:118, formatter: voltageFormat},
        {field:"lowcritical", title:model.lowercritical+"(V)", width:width, formatter: function(value, row) {
            var field = "cblowcritical";
            return (typeof row[field] == "undefined" || !row[field]) ? voltageFormat(value) : valtag;
        }},
        {field:"lowwarning", title:model.lowerwarning+"(V)", width:width, formatter: function(value, row) {
            var field = "cblowwarning";
            return (typeof row[field] == "undefined" || !row[field]) ? voltageFormat(value) : valtag;
        }},
        {field:"upwarning", title:model.upperwarning+"(V)", width:width, formatter: function(value, row) {
            var field = "cbupwarning";
            return (typeof row[field] == "undefined" || !row[field]) ? voltageFormat(value) : valtag;
        }},
        {field:"upcritical", title:model.uppercritical+"(V)", width:width, formatter: function(value, row) {
            var field = "cbupcritical";
            return (typeof row[field] == "undefined" || !row[field]) ? voltageFormat(value) : valtag;
        }},
        {field:"status", title:model.statusset, width:width, align:"center", formatter: function(value, row) {
          var params = { pduid: pduid, phase: row["phase"], max: voltageFormat(row["vollimit"]) };

          return EL.SetAlarm.getAlarmStr("xhripsvoltagealarm", value, params, "V", 0x00010000);
        }}
      ]];

      if (data) {
        $ipsvoltagegrid.datagrid({ columns: cols });
        $ipsvoltagegrid.datagrid("loadData", {rows: data});
        return;
      }

      $.ajax({contentType: "application/json",
        url: "xhripsvoltagegetgrid.jsp",
        type:"post", data: JSON.stringify(tocken),
        dataType:"json",
        success: function(rows) {
          $ipsvoltagegrid.datagrid({ columns: cols });
          $ipsvoltagegrid.datagrid("loadData", {rows: rows});
        } ,
        error:function() {
          console.log(arguments);
        }
      });
    };

    self.setEnergyGrid = function(data) {
      //format columns
      var cols = [[
        // {field:"phase", title:"Phase Power", width:122, align:"center", formatter:phaseFormatter},
        // {field:"appPower", title:"Apparent Power (VA)", width:118, formatter: decimalPower},
        // {field:"powFactor", title:"Power Factor", width:102, formatter: decimalFormat},
        // {field:"actPower", title:"Active Power (W)", width:110, formatter: decimalPower}
        {field:"phase", title:model.phasepower, width:122, align:"center", formatter:phaseFormatter},
        {field:"appPower", title:model.apparentpower, width:width + 118, formatter: decimalPower},
        {field:"powFactor", title:model.powerfactor, width:width * 2, formatter: decimalFormat},
        {field:"actPower", title:model.activepower, width:width * 2, formatter: decimalPower}
      ]];

      if (data) {
        $ipsenergygrid.datagrid({ columns: cols });
        $ipsenergygrid.datagrid("loadData", {rows: data});
        return;
      }

      $.ajax({contentType: "application/json",
        url: "xhripspowergetgrid.jsp",
        type:"post", data: JSON.stringify(tocken),
        dataType:"json",
        success: function(rows) {
          $ipsenergygrid.datagrid({ columns: cols });
          $ipsenergygrid.datagrid("loadData", {rows: rows});
        } ,
        error:function() {
          console.log(arguments);
        }
      });
    };

    return self;
  };

})(window);

/*src/js/pdu.js*/
/*
PDU functionalities
*/
(function() {

  var refreshTimer;

  var self = EL.PDUS = function() {

    var model = MODEL.pdu;

    var $pduproperty = $("#pduproperty"),
        $container = $(".pdu"),
        pduid = 1,
        tocken;

    //Prevent click too fast
    self.init = function() {
      window.clearTimeout(refreshTimer);
      refreshTimer = window.setTimeout(self.start, 500);
    };

    self.start = function() {
      var opts = EL.Master.getTabOpts($pduproperty);
      pduid = opts.pduid;
      tocken = $.extend({ pduid:pduid }, EL.Auth.getJSON());

      self.setPDUProperty();
    };

    self.setPDUProperty = function() {
      var pduCtrlTypeArr = [];
      for(var k in PDUCTRLTYPE) {
        pduCtrlTypeArr.push({ 
          text: PDUCTRLTYPE[k],
          value: PDUCTRLTYPE[k]
        });
      }

      /*
      1: means will be rewrite by post back datas.
      */
      var saveData = {
        name:     1,
        location: 1,
        delay:    1,
        powctrl:  0,
        resetegy: 0,
        resetout: 0
      };

      var rows = [
          /*Editable */
          // { key:"name", name:"PDU Name",group:"PDU Setting",
          { key:"name", name:model.pduname,group:model.pduset,
            editor: { type:"text", required: true},
            maxlength: 32
          },
          // { key:"location", name:"PDU Location",group:"PDU Setting",
          { key:"location", name:model.pdulocation,group:model.pduset,
            editor: { type:"text", required: true},
            maxlength: 32
          },
          // { key:"delay", name:"PDU Unit Coldstart Delay (0 - 3600 s)", group:"PDU Setting",
          { key:"delay", name:model.pduunitdelay, group:model.pduset,
            editor: { type:"text", required: true},
            min: 0, max: 3600
          },
          // { key:"powctrl", name:"Outlet State On PDU Startup", group:"PDU Setting", editor: {
          { key:"powctrl", name:model.outletstate, group:model.pduset, editor: {
              type:'combobox',
              options:{ 
                data: pduCtrlTypeArr, 
                required:true
              }
            }
          },
          // { key:"resetegy", name:"Reset Energy", group: "PDU Energy"},
          { key:"resetegy", name:model.resetenergy, group:model.pduenergy},
          // { key:"resetout", name:"Reset Outlet Energy", group: "PDU Energy"},
          { key:"resetout", name:model.resetolenergy, group:model.pduenergy},

          /*readonly*/
          // { key:"mac", name:"PDU MAC Address", group:"PDU Attribute"},
          { key:"mac", name:model.pdumacaddress, group:model.pduattribute},
          // { key:"rating", name:"Rating", group:"PDU Attribute"},
          { key:"rating", name:model.rating, group:model.pduattribute},
          /*
          { key:"ratevol", name:"Rating Voltage", group:"PDU Attribute"},
          { key:"ratecur", name:"Rating Current", group:"PDU Attribute"},
          { key:"ratepow", name:"Rating Power", group:"PDU Attribute"},
          { key:"ratecap", name:"Rating Capacity", group:"PDU Attribute"},
          */
          // { key:"resetmeter", name:"Resettable Energy Meter", group:"PDU Attribute"},
          { key:"resetmeter", name:model.resetenergymeter, group:model.pduattribute},
          // { key:"powval", name:"Active Power Value (W)", group:"PDU Attribute"},
          { key:"powval", name:model.activepowervalue, group:model.pduattribute},
          // { key:"powstat", name:"Active Power Status, Setting", group:"PDU Attribute"}
          { key:"powstat", name:model.activepowerset, group:model.pduattribute}
        ];

      EL.Privilege.setProperty(rows, 0x00000100);

      var getHandler = function(obj) {

        rows = EL.EditGrid.clearRows(rows, obj);

        for(var i = 0, len = rows.length; i < len; i++) {
          var row = rows[i],
              key = row.key,
              val = obj[key];

          //reset the value in saveData;          
          (key in saveData) && (saveData[key] = val);

          var resetHandler = function() {
            //make the save value different with cached : saveData, 1 means force update;
            var cmd = 'EL.PDUS.resetEnergy(' + JSON.stringify({ key: key, value: 1, force:1 }) + ')';
            // row.value = '<a onclick=\'' + cmd + '\' href="#"> Reset </a>';
            row.value = '<a onclick=\'' + cmd + '\' href="#"> {0} </a>'.format(model.reset);
            //will send 0
            saveData[key] = 0;
          };

          switch(key) {
            case "powctrl":
              row.value = PDUCTRLTYPE[val];
              break;
            case "powstat":
              var params = {pduid: pduid, max: (obj["actlimit"] / 1000)};
              row.value = EL.SetAlarm.getAlarmStr("xhrpdualarm", val, params, "W");
              break;
            case "resetegy":
              EL.Privilege.hasPrivilege(0x00000100)
                ? resetHandler()
                // : row.value = "No Permission: " + PRIVILEGES[0x00000100];
                : row.value = "{0} ".format(model.nopermission) + PRIVILEGES[0x00000100];
              break;
            case "resetout":
              EL.Privilege.hasPrivilege(0x00000100)
                ? resetHandler()
                // : row.value = "No Permission: " + PRIVILEGES[0x00000100];
                : row.value = "{0} ".format(model.nopermission) + PRIVILEGES[0x00000100];
              break;
            case "powval":
              row.value = (val / 1000).toFixed(0);
              break;
            default:
              row.value = val;
          }
        }

        $pduproperty.propertygrid({
          showGroup: true,
          scrollbarSize: 0,
          onAfterEdit: setHandler
        });
        $pduproperty.propertygrid("loadData", {rows : rows});

        $(".center .loader").hide();

        //for multi-language
        (function() {
          $(".pdu .datagrid-header-row td[field=name] span").eq(0).text(MODEL.sensor.name);
          $(".pdu .datagrid-header-row td[field=value] span").eq(0).text(MODEL.sensor.value);
        }());
      };

      var setHandler = function(idx, row, changes) {
        var key = row.key,
            val = row.value;

        /*
        If it need to valid the number and validate failed, rollback the changes on the UI. 
        */
        if (!EL.EditGrid.validField(row, val)) {
          row.value = saveData[key];
          $pduproperty.propertygrid("updateRow", {index: idx, row: row});
          return;
        }

        (key == "powctrl") && (val = self.getPDUCtrlValue(row.value));
        (key == "delay") && (val = val ? parseInt(val) : 0);

        //it's the same value, ignore it.
        if (!row.force && val == saveData[key]) {
          return;
        }

        /*Send Change Request*/
        var sendRequest = function() {
          saveData[key] = val;
          
          var saveTocken = $.extend({}, tocken, saveData);

          $.ajax({contentType: "application/json",
            url: "xhrpduset.jsp",
            type:"post", data: JSON.stringify(saveTocken),
            dataType:"json",
            success: function(obj) {
              if (EL.UpdateStatus(obj) && changes == "reset") {
                // EL.Dialog.alert("Reset Success!");
                EL.Dialog.alert(model.resetsuccess);
              }

              //rollback the data of force update
              row.force && (saveData[key] = 0);
            },
            error:function() {
              console.log(arguments);
            }
          });
        };

        var rollbackPowControl = function() {
          row.value = PDUCTRLTYPE[saveData[key]];
          $pduproperty.propertygrid("updateRow", {index: idx, row: row});
        };

        if (key == "powctrl") {
          // EL.Dialog.confirm("Are you sure you want to make this change for all outlets?", sendRequest, rollbackPowControl);
          EL.Dialog.confirm(model.surechangeol, sendRequest, rollbackPowControl);
        } else {
          sendRequest();
        }

      };

      /*
      public method
      */
      var resetEnergy = self.resetEnergy = function(row) {
        // EL.Dialog.confirm("Do you really want to reset the energy?", function() {
        EL.Dialog.confirm(model.reallyresetenergy, function() {
          setHandler(0, row, "reset");
        });
      };

      $.ajax({contentType: "application/json",
        url: "xhrpduget.jsp",
        type:"post", data: JSON.stringify(tocken),
        dataType:"json",
        success: getHandler,
        error:function() {
          console.log(arguments);
        }
      });
    };

    return self;
  };

  //public method
  self.getPDUCtrlValue = function(ctrlStr) {
    for(k in PDUCTRLTYPE) {
      if (ctrlStr == PDUCTRLTYPE[k]) {
        return parseInt(k);
      }
    }
    return 0;
  };

})();
/*src/js/outlets.js*/
/*
Outlets functionalities.
*/
(function(window) {

  var refreshTimer;

  //persistent this timer, need to clear it after user reload the page;
  var statusTimer;

  var self = EL.Outlets = function() {
    var model = MODEL.outletstools;

    var $outletsgrid = $("#outletsgrid"),
        $selectPower = $("#powstat"),
        $submitPower = $(".outlets form button"),
        pduid = 1,
        //editGrid = new EL.EditGrid(),
        tocken,
        rows,
        powerStatusArr = [];

    var powerFormat = function(value, row) {
      return (value / 1000).toFixed(0);
    };

    /*
    Set checkbox in outlet grid
    */
    var setOutletsPrivi = function() {
      var $inputs = $(".outlets .datagrid-body input[type=checkbox]");

      $inputs.each(function(idx) {
        var $input = $(this),
            privi = EL.Privilege.outlets & (1 << idx);

        if (privi == 0) {
          $input.attr("disabled", true);
          $input.attr("checked", false);
          $outletsgrid.datagrid("unselectRow", idx);
        }
      });
    };

    var clearPendingStatus = function() {
      self.pending = 0;

      $submitPower.text(model.apply);
      //stop timer
      window.clearInterval(statusTimer);
      //refresh datagrid
      self.getOutletsGrid();
    };

    var setPendingStatus = function() {
      self.pending = 1;
      $submitPower.text(model.excuting);
    };

    //Prevent click too fast
    self.init = function() {
      window.clearTimeout(refreshTimer);
      refreshTimer = window.setTimeout(self.start, 500);
      
      $("#powctrl").html(model.powctrl);
    };

    self.start = function() {
      var opts = EL.Master.getTabOpts($outletsgrid);
      pduid = opts.pduid;
      tocken = $.extend({ pduid:pduid }, EL.Auth.getJSON());

      self.setPowerCtrl();
      //self.getOutletsGrid();
      clearPendingStatus();

      EL.Privilege.outletopr && self.checkStatus();
      // EL.Privilege.setNotSupport([$submitPower]);
    };

    self.setPowerCtrl = function() {
      if (!EL.Privilege.outletopr) {
        return $outletsgrid.removeAttr("toolbar");
      }

      for(k in POWERCTRLTYPE) {
        powerStatusArr.push({
          text: POWERCTRLTYPE[k],
          value: parseInt(k)
        });
      }

      $selectPower.combobox({width: 180});
      $selectPower.combobox("loadData", powerStatusArr);

      $submitPower.click(function(e) {
        var selrows = $outletsgrid.datagrid('getSelections'),
            value = 0,
            len = selrows.length,
            powCtrlVal = parseInt($selectPower.combobox("getValue")) || 0;

        e.preventDefault();

        if (self.pending) {
          $.ajax({contentType: "application/json",
            url: "xhroutpowcancel.jsp",
            type:"post", data: JSON.stringify(tocken),
            dataType:"json",
            success: function(data) {
              if (EL.UpdateStatus(data)) {
                clearPendingStatus();
              }
            }
          });

          return;
        }

        if (len < 1) {
          return EL.Dialog.alert(model.noselect);
        }

        EL.Dialog.confirm(model.doexecute, function() {
          //disable submit button
          $submitPower.attr("disabled", true);

          //get selected outlet value
          for(var i = 0; i < len; i++) {
            var id = selrows[i]["id"] - 1;
            value = (1 << id) | value;
          }

          var outlet1 = value & 16777215,
              outlet2 = value >>> 24;

          //save tocken
          var saveTocken = $.extend(
            EL.Auth.getJSON(), 
            {
              pduid : pduid,
              powstat: powCtrlVal,
              outlet1: outlet1,
              outlet2: outlet2
            }
          );

          var savePowCtrlHandler = function(obj) {
            //enable submit button
            $submitPower.attr("disabled", false);

            var status     = obj["uptstatus"],
                //overload outlet id
                oloutletid = 0, 
                oloutArr   = [];

            if (status == 51) {
              oloutletid = obj["oloutletid"];
            } else if (!EL.UpdateStatus(obj)) {
              return;
            }

            //nagative means pending status;
            var newPowCtrl = 0 - powCtrlVal;
            //0 doesn't have nagative number; 
            (newPowCtrl == 0) && (newPowCtrl = -2); 

            //Update datagrid ui
            for (var i = 0; i < len; i++) {
              var outidx = selrows[i]["id"] - 1;
              //If this outlet is not in overload status
              if (((1 << outidx) & oloutletid) == 0) {
                $outletsgrid.datagrid('updateRow', {
                  index: outidx,
                  row: { powstat: powCtrlVal }
                });

              //Put it in overload outlet arr
              } else {
                oloutArr.push(outidx + 1);
              }
            }

            //Has overload outlet, popup message
            oloutArr.length && EL.Alert(
              UPDATESTATUS[51].format(oloutArr.join(', '))
            );

            //Set pending status.
            setPendingStatus();
            self.checkStatus();
          };

          $.ajax({contentType: "application/json",
            url: "xhroutpowstatset.jsp",
            type:"post", data: JSON.stringify(saveTocken),
            dataType:"json",
            success: savePowCtrlHandler
          });
        });

      });

      EL.Privilege.setButton([$submitPower], 0x00004000);
    };

    self.setOutletsGrid = function(rows) {
      var ctrlTypeArr = [];
      for(var k in PDUCTRLTYPE) {
        ctrlTypeArr.push({
          text: PDUCTRLTYPE[k],
          value: parseInt(k)
        });
      }

      // var cols = [[
      //   {checkbox:true, align:"center"},
      //   {field:"id", title:"Outlet ID", width:150, formatter:function(value) {
      //     //return "Outlet " + value;
      //     return value;
      //   }},
      //   {field:"name", title:"Outlet Name", width:150,
      //     editor:{
      //       type:'text',
      //       required: true
      //     }
      //   },
      //   {field:"status", title:"Alarm Status", width:150, formatter:function(value, row) {
      //     var params = {pduid:pduid, id: row.id, max: powerFormat(row["actlimit"]) };

      //     return EL.SetAlarm.getAlarmStr("xhroutalarm", value, params, "W", 0x02000000);
      //   }},
      //   {field:"actpow", title:"Active Power (W)", width:150, formatter: powerFormat },
      //   {field:"powstat", title:"Power Status", width:150, formatter:function(value, row) {
      //     var icon = "icon-" + ((Math.abs(value) == 0 || Math.abs(value) == 2) ? "off" : "on"),
      //         txt = value > -1 ? POWERCTRLTYPE[value] : "Pending...";

      //     return '<span class="' + icon + '">' + txt + '</span>';
      //   }}
                      
      //           /*    ,{field:"powstat", title:"Power State On Startup", width:240,
      //                   formatter:function(value) {
      //                     return PDUCTRLTYPE[value];
      //                   },
      //                   editor:{
      //                     type:'combobox',
      //                     options:{ data: ctrlTypeArr, required:true }
      //                   }
      //                 }
      //                 ,{field:"name", title:"Outlet Name", width:240,
      //                   editor:{
      //                     type:'text',
      //                     required: true
      //                   }
      //                 }
      //                 ,{field:"current", title:"Current (mA)", width:100},
      //                 {field:"peapow", title:"Peak Power", width:100},
      //                 {field:"powfac", title:"Pow Factory", width:100},
      //                 {field:"delayon", title:"On Delay", width:80, editor:{
      //                   type:'numberbox',
      //                   options:{ required:true, max:7200, min:0 }
      //                 }},
      //                 {field:"delayoff", title:"Off Delay", width:80, editor:{
      //                   type:'numberbox',
      //                   options:{ required:true, max:7200, min:0 }
      //                 }},
      //                 {field:"rebotdur", title:"Reboot Duration", width:120, editor:{
      //                   type:'numberbox',
      //                   options:{ required:true, max:60, min:5 }
      //                 }}   */
                      
      // ]];
      var cols = [[
        {checkbox:true, align:"center"},
        {field:"id", title:model.outletid, width:120, formatter:function(value) {
          //return "Outlet " + value;
          return value;
        }},
        {field:"name", title:model.outletname, width:140,
          editor:{
            type:'text',
            required: true
          }
        },
        {field:"status", title:model.alarmstatus, width:180, formatter:function(value, row) {
          var params = {pduid:pduid, id: row.id, max: powerFormat(row["actlimit"]) };

          return EL.SetAlarm.getAlarmStr("xhroutalarm", value, params, "W", 0x02000000);
        }},
        {field:"actpow", title:model.activepower, width:140, formatter: powerFormat },
        {field:"powstat", title:model.powerstatus, width:180, formatter:function(value, row) {
          var icon = "icon-" + ((Math.abs(value) == 0 || Math.abs(value) == 2) ? "off" : "on"),
              txt = value > -1 ? POWERCTRLTYPE[value] : "Pending...";

          return '<span class="' + icon + '">' + txt + '</span>';
        }}                   
      ]];

      rows && (cols = EL.EditGrid.clearCols(cols, rows));

      $outletsgrid.datagrid({
        //columns: newCols,
        columns: cols,
        onSelect: setOutletsPrivi,
        onSelectAll: setOutletsPrivi
      });
    };

    self.getOutletsGrid = function() {
      $.ajax({contentType: "application/json",
        url: "xhroutgetgrid.jsp",
        type:"post", data: JSON.stringify(tocken),
        dataType:"json",
        success: function(rows) {
          self.setOutletsGrid(rows);

          $outletsgrid.datagrid("loadData", rows);

          //jEasyUI bug: remove the checked status of the header;
          $(".outlets .datagrid-header input").attr("checked", false)

          $(".center .loader").hide();
          setOutletsPrivi();
        },
        error:function() {
          console.log(arguments);
        }
      });
    };

    /*Is in the pending?*/
    self.pending = 1;

    /*
    Check outlet status is in pending?
    */
    self.checkStatus = function() {

      var statusHandler = function() {

        if ($(".outlets:visible").size() < 1) return;

        $.ajax({contentType: "application/json",
          url: "xhroutpowstatus.jsp",
          type:"post", data: JSON.stringify(tocken),
          dataType:"json",
          success: function(data) {
            if (typeof data.pending == "number") {
              self.pending = data.pending;

              if (self.pending) {
                setPendingStatus();
              } else {
                clearPendingStatus();
              }
            }
          }
        });
      };

      statusTimer = window.setInterval(statusHandler, 7000);

      //fire now;
      statusHandler();

    };

    return self;
  };

})(window);

/*src/js/dashboards.js*/
(function(window, document) {

  var refreshTimer;

  var timerID = 0, timerArr = [];

  /*
  Dashboard functionalities
  */
  var self = EL.DashBoard = function() {

    var model = MODEL.dashboard;

    var $container    = $(".dashboard"),
        $pduList      = $(".dashboard .itemlist"),
        $statusGrid   = $("#statusgrid"),
        $currentGrid  = $("#currentgrid"),
        $voltageGrid  = $("#voltagegrid"),
        $energyGrid   = $("#energygrid"),
        $alarmGrid    = $("#alarmgrid"),
        $alarmDialog  = $("#alarmdialog"),
        $sensorGrid   = $("#sensorgrid"),
        firstRun      = 1,
        width         = 158,
        widthFirst    = 158,          //for align datagrids (status/v/a) to pdu list
        //widthPdu      = 180,
        pducount      = EL.Master.pducount;
        //current requet is https request
        interval      = location.href.indexOf("https") > -1 ? 10000 : 1000,
        // title = "Loading";
        title         = model.loading;

    //Need to refresh the dashboard?
    self.visibleAll = function() {
      return $("#mydialog:visible").size() < 1
        &&  $(".dashboard:visible").size() > 0;
    };

    //Need to refresh the datagrid?
    self.visible = function() {
      //There is: 1) no dialog popuped 2) dashboard is visiable, 3) No force change password
      return $(".dashboard:visible").size() > 0;
    };

    //Prevent click too fast
    self.init = function() {
      window.clearTimeout(refreshTimer);
      refreshTimer = window.setTimeout(self.start, 500);
    };

    self.initUI = function() {
      //disable the close button of dashboard;
      $(".ui-tabs-nav li:first-child .ui-icon-close").hide();

      //Create testing row data
      var pduData = []
        , statusData = []
        , powData = []
        , phaseArr = []
        , phaseObj = [];

      for(var i = 0; i < pducount; i++){
        pduData.push({});
        statusData.push("");
        powData.push({
         "activepower":       "",
         "apparentpower":     "",
         "totalenergymeter":  ""
        });
        phaseObj.push("");
      };

      for (i = 0; i < EL.Master.pduphase; i++) {
        phaseArr.push(phaseObj);
      }

      $statusGrid.datagrid({columns:[[
        {title: title, field:"field", width: width}
      ]]}).datagrid("loadData", {rows: [{}]});

      $currentGrid.datagrid({columns:[[
        {title: title, field:"field", width: width}
      ]]}).datagrid("loadData", {rows: [{}]});

      $voltageGrid.datagrid({columns:[[
        {title: title, field:"field", width: width}
      ]]}).datagrid("loadData", {rows: [{}]});

      $energyGrid.datagrid({columns:[[
        {title: title, field:"field", width: width}
      ]]}).datagrid("loadData", {rows: [{}]});

      $alarmGrid.datagrid({columns:[[
        {title: title, field:"field", width: width}
      ]]}).datagrid("loadData", {rows: [{}]});

      $sensorGrid.datagrid({columns:[[
        {title: title, field:"field", width: width}
      ]]}).datagrid("loadData", {rows: [{}]});


      self.getStatusParams(statusData);
      self.getCurrentParams(phaseArr);
      self.getVoltageParams(phaseArr);
      self.getEnergyParams(powData);
    };

    var getWidth = function(idx, len) {
      var width = (($(".dashboard").width() - 160) / pducount | 0) - 4;

      //if (idx == 0)       width -= 8;
      //if (idx == len -1)  width -= 20;
      if (pducount == 1) width = width - widthFirst - 10 + 160;
      return width;
    };

    self.start = function() {
      //stop timer previous opened
      self.stop();

      timerID = window.setInterval(function() {
        self.visibleAll() && self.refresh();
      } , 9 * interval);

      //refresh once
      self.refresh();

      //init UI
      self.initUI();
    };

    /*
    Refresh datagrid
    */
    self.refresh = function() {
      self.getPDUList();

      timerArr = [
        window.setTimeout(self.getStatusParams,  1 * interval),
        window.setTimeout(self.getCurrentParams, 2 * interval),
        window.setTimeout(self.getVoltageParams, 3 * interval),
        window.setTimeout(self.getEnergyParams,  4 * interval),
        window.setTimeout(self.getSensors,       5 * interval)
      ];
    };

    /*
    Before refresh stop all the timer
    */
    self.stop = function() {
      window.clearInterval(timerID);
      for(var i = 0, len = timerArr.length; i<len; i++) {
        window.clearTimeout(timerArr[i]);
      }
    };

    /*
    get PDU list
    */
    self.getPDUList = function() {
      if (!self.visible()) return;

      var createList = function(arr) {
        var i = 0, html = '';

        //Refresh the tree if count of pdu changed;
        pducount && (pducount != arr.length) && EL.Master.setTree();
        pducount = arr.length || 1;
        pducount > 1 
          ? $pduList.addClass("haslist") 
          : $pduList.removeClass("haslist");

        //This will execute at least once, if no pdu return
        do {
          var obj = arr[i],
              key = "",
              val = "";
          for(key in obj) {
            val = obj[key];
          }

          var strItem = '<div class="item">'
            + '<div class="body">'
            + '<h3>PDU #' + (parseInt(i) + 1) + '</h3>'
            + '<p>' + key + '</p>'
            + '<p>' + val + '</p>'
            + '</div>'
            + '</div>';

          html += strItem;
        } while ( ++i < pducount );

        $pduList.html($(html));
        $(".itemlist .item").width( 100 / pducount + "%" );

        //widthPdu = $(".item", $pduList).width() - 4;

        //loading imags
        if (firstRun) {
          $(".center .loader").hide();
          firstRun = 0;
        }
      };

      $.ajax({contentType: "application/json",
        url: "xhrpdulist.jsp",
        type: "post", data: EL.Auth.getTocken(),
        dataType: "json",
        success: createList
      });
    };

    /*
    get cols from [{key: val}, {key: val} ...]
    */
    self.getCols = function(title, arr, decimal) {
      var cols = [{
        field : 'type',
        title : title,
        width : widthFirst
      }], len = 0;

      for(var i in arr) {
        var l = arr[i].length;
        (l  > len) && (len = l );
      }

      for(var i = 0; i < len ; i++) {
        cols.push({
          field: "p" + (i + 1),
          title: "",
          width: getWidth(i, len),
          formatter:function(value) {
            return (value / 1000).toFixed(decimal);
          }
        });
      }

      return cols;
    };

    /*
    get rows from [{key: val}, {key: val} ...]
    */
    self.getRows = function(type, arr) {
      var total = 0, 
          rows = {
            "total": arr.length,
            "rows": []
          }, cols = 0;

      for(var i in arr) {
        var row = { type: type + (parseInt(i) + 1) };
        //for(var j = 0, len = arr[i].length; j < len ; j++) {
        for(var j in arr[i]) {
          row["p" + (parseInt(j) + 1)] = arr[i][j];
        }

        (j + 1 > cols) && (cols = j + 1);

        rows["rows"].push(row);
      }

      return rows;
    };

    /*
    get pdu params
    */
    self.getStatusParams = function(data) {
      if (!self.visible()) return;
      /*
      get pdu status
      */
      var setStatusGrid = function(arr) {
        (arr.length == 0) && arr.push(0);

        //columns
        var cols = [{
          field: "name", 
          title: "PDU",
          width: widthFirst
        }];
        // var row = { name: "Status" };
        var row = { name: model.status };

        for(var i = 0, len = arr.length; i < len; i++) {
          //columns;
          cols.push({
            field: "p" + (i+1),
            title: "PDU #" + (i+1),
            width: getWidth(i, len),
          });

          //rows
          // var alarm = '<a href="javascript:EL.DashBoard.onAlarm('+ (i + 1) +')" class="alarm alarm-warning">' + arr[i] + ' Alarms </a>';
          var alarm = '<a href="javascript:EL.DashBoard.onAlarm('+ (i + 1) +')" class="alarm alarm-warning">' + arr[i] + ' {0} </a>'.format(model.alarms);
          // row["p" + (i+1)] = arr[i] > 0 ? alarm : "OK";
          row["p" + (i+1)] = arr[i] > 0 ? alarm : "{0}".format(model.ok);
        }

        var oldCols = $statusGrid.datagrid("getColumnFields") || [];
        ((len + 1) != oldCols.length) &&  $statusGrid.datagrid({ columns:[cols] , fitColumns:false });

        $statusGrid.datagrid('loadData', {"rows":[ row ]});
      };

      if (data) return setStatusGrid(data);

      $.ajax({contentType: "application/json",
        url: "xhrpdustatusget.jsp",
        type: "post", data: EL.Auth.getTocken(),
        dataType: "json",
        success: setStatusGrid
      });
    };

    self.getCurrentParams = function(data) {
      if (!self.visible()) return;
      /*
      Get pdu current
      */
      var setCurrentGrid = function(arr) {
        var rows = self.getRows("L", arr),
            // cols = self.getCols("Current, RMS (A)", arr, 2);
            cols = self.getCols("{0}".format(model.currentrms), arr, 2);

        var oldCols = $currentGrid.datagrid("getColumnFields") || [];
        (cols.length != oldCols.length) && $currentGrid.datagrid({ columns: [ cols ] , fitColumns:false });
        $currentGrid.datagrid('loadData', rows);
      };

      if (data) return setCurrentGrid(data);

      $.ajax({contentType: "application/json",
        url: "xhrpducurrentget.jsp",
        type: "post", data: EL.Auth.getTocken(),
        dataType: "json",
        success: setCurrentGrid
      });
    };

    self.getVoltageParams = function(data) {
      if (!self.visible()) return;
      /*
      Get pdu voltage
      */
      var setVoltageGrid = function(arr) {
        var rows = self.getRows("L", arr),
            // cols = self.getCols("Voltage, RMS (V)", arr, 0);
            cols = self.getCols("{0}".format(model.voltagerms), arr, 0);

        var oldCols = $voltageGrid.datagrid("getColumnFields") || [];
        (cols.length != oldCols.length) && $voltageGrid.datagrid({ columns: [ cols ], fitColumns:false });

        $voltageGrid.datagrid('loadData', rows);
      };

      if (data) return setVoltageGrid(data);

      $.ajax({contentType: "application/json",
        url: "xhrpduvoltageget.jsp",
        type: "post", data: EL.Auth.getTocken(),
        dataType: "json",
        success: setVoltageGrid
      });
    };

    self.getEnergyParams = function(data) {
      if (!self.visible()) return;
      /*
      Get pdu energy
      */
      var setEnergyGrid = function(data) {
        var colLen = data.length;

        //create rows
        var rows = [
            {name:"activepower"},
            {name:"apparentpower"},
            {name:"totalenergymeter"}
          ];

        for(var i = 0; i < colLen; i++) {
          var colName = "pdu" + (i + 1),
              pduObj = data[i];

          //only 3 rows
          for(var j = 0; j < rows.length; j++) {
            var key = rows[j]["name"];
                val = pduObj[key];

            rows[j][colName] = val;
          }
        }

        //create columns
        var cols = [{
          field: "name",
          // title: "PDU power energy",
          title: "{0}".format(model.pdupowerenergy),
          width: widthFirst, 
          formatter: function(value) {
            return POWERENERGY[value];
          }
        }];
        for(i = 0; i < colLen; i++) {
          cols.push({
            field: "pdu" + (i + 1),
            title: "",
            width: getWidth(i, colLen),
            formatter: function(value, row) {
              value = value >>> 0;
              var decimal = (row.name == "totalenergymeter") ? 1 : 0;
              return (value / 1000).toFixed(decimal);
            }
          });
        }

        var oldCols = $energyGrid.datagrid("getColumnFields") || [];
        (cols.length != oldCols.length) && $energyGrid.datagrid({ columns: [ cols ] , fitColumns:false });

        $energyGrid.datagrid('loadData', {rows : rows});
      };

      if (data) return setEnergyGrid(data);

      $.ajax({contentType: "application/json",
        url: "xhrpduenergyget.jsp",
        type: "post", data: EL.Auth.getTocken(),
        dataType: "json",
        success: setEnergyGrid
      });
    };


    /*
    sensors
    */
    self.onAlarm = function(id) {
      //cannot use this method to trigger click event handler, after refresh, it will popup many times.
      //$container.on("click", "a.alarm", function(e) {      });
      var tocken = $.extend({pduid: id}, EL.Auth.getJSON());

      //then get the data
      $.ajax({contentType: "application/json",
        url: "xhralarmgetpdugrid.jsp",
        type: "post", data: JSON.stringify(tocken),
        dataType: "json",
        success: function(data) {
          alarmHandler(id, data);
        }
      });

      //alarm event handler
      var alarmHandler = function(id, data) {
        //prop up dialog
        $alarmDialog.dialog({
          // title : '<h4 class="icon-bell">Active Alarms for PDU #' + id + '</h4>',
          title : '<h4 class="icon-bell">{0}'.format(model.activealarmpdu) + id + '</h4>',
          resizable: false,
          width: 600,
          height: 300,
          modal: true,
          closeOnEscape: true,
          buttons: {
            // "Close": function() {
            //   $(this).dialog("destroy");
            // }
            "Close": {
              text: model.close,
              click: function(){$(this).dialog("destroy");},
              id: "btnClose"
            }
          }
        });

        $alarmGrid.datagrid({ columns: [[
          // {field:"type", title:"Alarm Type", width:360, formatter:function(value) {
          {field:"type", title:"{0}".format(model.alarmtype), width:360, formatter:function(value) {
            return ALARMTYPE[value]
          }},
          // {field:"count", title:"Count", width:222, formatter: function(value, row) {
          {field:"count", title:"{0}".format(model.count), width:222, formatter: function(value, row) {
            // return value ? '<a href="#" onclick=\'EL.DashBoard.naviTree(' + id + ', "' + ALARMNAVI[row["type"]] + '")\'>' + value + " Alarms</a>" : "OK" ;
            return value ? '<a href="#" onclick=\'EL.DashBoard.naviTree(' + id + ', "' + ALARMNAVI[row["type"]] + '")\'>' + value + " {0}</a>".format(model.alarms) : "OK" ;
          }}
        ]], singleSelect:true });

        $alarmGrid.datagrid('loadData', {rows: data});
      };
    };

    /*

    */
    self.getSensors = function() {
      if (!self.visible()) return;

      var sensorHandler = function(data) {

        //show or hide the container of the grid;
        (data.length < 1) 
          ? $sensorGrid.closest(".gridlist").hide()
          : $sensorGrid.closest(".gridlist").show();

        var oldCols = $sensorGrid.datagrid("getColumnFields") || [];
        (data.length > 0 && oldCols.length < 6) && $sensorGrid.datagrid({columns:[[
          // {field:"type", title:"External Sensors, Type", width: width},
          // {field:"sensorname", title:"Sensor Name", width:width},
          // {field:"pduname", title:"PDU Name", width:width},
          // {field:"location", title:"Location", width:"110"},
          // {field:"value", title:"Value", width:"100"},
          // {field:"status", title:"Status", width:"100"}
          {field:"type", title:"{0}".format(model.externalsensor), width: width, formatter: function(value) {
            return SENSORTYPE[value];
          }},
          {field:"sensorname", title:"{0}".format(model.sensorname), width:width},
          {field:"pduid", title:"{0}".format(model.pduid),      width: width / 2 - 15},
          {field:"pduname", title:"{0}".format(model.pduname),  width: width / 2 + 15},
          {field:"location", title:"{0}".format(model.location), width:"90"},
          {field:"value", title:"{0}".format(model.value), width:"80", formatter: EL.ExtSensor.Value},
          {field:"status", title:"{0}".format(model.status), width:"150", formatter: function(value) {
            return EL.SetAlarm.getAlarmTxt(STATUSTYPE[value]);
          }}
        ]], fitColumns:false });

        $sensorGrid.datagrid("loadData", {rows: data});
      };

      $.ajax({contentType: "application/json",
        url: "xhrextsensorsgetgrid.jsp", type: "post",
        data: EL.Auth.getTocken(),
        dataType: "json",
        success: sensorHandler
      });
    };

    return self;
  };

  /*
  Navigation to tree
  */
  self.naviTree = function(pduid, alarmnavi) {
    $("[node-id=" + alarmnavi + "]", $("#tree>li").eq(pduid)).click();
    $("#alarmdialog").dialog("destroy");
  };

})(window, document);
/*src/js/outlet.js*/
(function() {

  var refreshTimer;

  var self = EL.Outlet = function() {
    var model = MODEL.outletstools;

    var $outletproperty = $("#outletproperty"),
        $container = $(".outlet"),
        pduid = 1,
        id = 1,                       //outlet id
        tocken;

    //Prevent click too fast
    self.init = function() {
      window.clearTimeout(refreshTimer);
      refreshTimer = window.setTimeout(self.start, 500);
    };

    self.start = function() {

      var opts = EL.Master.getTabOpts($outletproperty);
      pduid = opts.pduid;
      id = opts.outid;

      tocken = $.extend({ pduid:pduid, id:id }, EL.Auth.getJSON());

      self.setOutletProperty();
    };

    self.setOutletProperty = function() {

      var powStartArr = [];
      for(var k in POWERSTATUS) {
        powStartArr.push({ 
          text: POWERSTATUS[k],
          value: POWERSTATUS[k]
        });
      }

      // var rows = [
      //   //editable field
      //   {key:"name", name:"Outlet Name", group:"Outlet Setting", editor:{
      //     type:'text',
      //     options:{ required:true }
      //   }, maxlength: 32 },
      //   {key:"powstart", name:"State On Startup", group:"Outlet Setting", editor: {
      //     type:'combobox',
      //     options:{ data: powStartArr, required:true }
      //   }},
      //   {key:"delayon", name:"On Delay (0 ~ 7200s)", group:"Outlet Setting", editor:"text", min:0, max:7200},
      //   {key:"delayoff", name:"Off Delay (0 ~ 7200s)", group:"Outlet Setting", editor:"text", min:0, max:7200},
      //   {key:"rebotdur", name:"Reboot Duration (5 ~ 60s)", group:"Outlet Setting", editor:"text", min:5, max:60},
      //   //readonly field
      //   {key:"id", name:"Outlet ID", group:"Outlet Attribute"},
      //               /*
      //               {key:"status", name:"Status", group:"Outlet Attribute"
      //                 //, formatter:function(value) { return STATUSTYPE[value]; }
      //               },
      //               */
      //   {key:"current", name:"Current (A)", group:"Outlet Attribute"},
      //   {key:"voltage", name:"Voltage (V)", group:"Outlet Attribute"},
      //   {key:"actpow", name:"Active Power (W)", group:"Outlet Attribute"},
      //   {key:"peapow", name:"Peak Power (W)", group:"Outlet Attribute"},
      //   {key:"powfac", name:"Power Factor", group:"Outlet Attribute"},
      //   {key:"resetmeter", name:"Resettable Energy Meter", group: "Outlet Attribute"}
      // ];

      var rows = [
        //editable field
        {key:"name", name:model.outletname, group:model.outletset, editor:{
          type:'text',
          options:{ required:true }
        }, maxlength: 32 },
        {key:"powstart", name:model.stateonstart, group:model.outletset, editor: {
          type:'combobox',
          options:{ data: powStartArr, required:true }
        }},
        {key:"delayon", name:model.ondelay, group:model.outletset, editor:"text", min:0, max:7200},
        {key:"delayoff", name:model.offdelay, group:model.outletset, editor:"text", min:0, max:7200},
        {key:"rebotdur", name:model.rebootduration, group:model.outletset, editor:"text", min:5, max:60},
        //readonly field
        {key:"id", name:model.outletid, group:model.outletattr},
        {key:"current", name:model.current, group:model.outletattr},
        {key:"voltage", name:model.voltage, group:model.outletattr},
        {key:"actpow", name:model.activepower, group:model.outletattr},
        {key:"peapow", name:model.peakpower, group:model.outletattr},
        {key:"powfac", name:model.powerfactor, group:model.outletattr},
        {key:"resetmeter", name:model.energymeter, group:model.outletattr}
      ];

      EL.Privilege.setProperty(rows, 0x02000000);

      /*
      1: means will be rewrite by post back datas.
      */
      var saveData = {
        name: 1,
        delayon: 1,
        delayoff: 1,
        rebotdur: 1,
        powstart: 1
      };

      var saveHandler = function(idx, row, changes) {
        var key = row.key,
            val = row.value;

        /*
        If it need to valid the number and validate failed, rollback the changes on the UI. 
        */
        if (!EL.EditGrid.validField(row, val)) {
          row.value = saveData[key];
          $outletproperty.propertygrid("updateRow", {index: idx, row: row});
          return;
        }

        ("delayon delayoff rebotdur".indexOf(key) > -1) && (val = val ? parseInt(val) : 0);
        (key == "powstart") && (val = EL.PDUS.getPDUCtrlValue(val));

        //it's the same value, ignore it.
        if (val == saveData[key]) {
          return;
        }

        saveData[key] = val;
        
        var saveTocken = $.extend({}, tocken, saveData);

        $.ajax({contentType: "application/json",
          url: "xhroutset.jsp",
          type:"post", data: JSON.stringify(saveTocken),
          dataType:"json",
          success: function(obj) {
            EL.UpdateStatus(obj);
          },
          error:function() {
            console.log(arguments);
          }
        });
      };

      var outletHandler = function(obj) {

        rows = EL.EditGrid.clearRows(rows, obj);

        for(var i = 0, len = rows.length; i < len; i++) {
          var row = rows[i],
              key = row.key,
              val = obj[key];

          //reset the value in saveData;          
          saveData[key] && (saveData[key] = val);

          switch(key) {
            case "id":
              row.value = "Outlet " + val;
              break;
            //32-bit status value
            case "powstart":
              /*
              var tag = val >>> (id - 1) & 0x0001;
              saveData[key] = tag;
              row.value = PDUCTRLTYPE[tag];
              */
              row.value = PDUCTRLTYPE[val];
              break;
            /*              
            case "status":
              row.value = STATUSTYPE[val];
              break;
            */
            case "current":
            case "powfac":
              var tag = (val / 1000).toFixed(2);
              row.value = tag;
              break;
            case "actpow":
            case "peapow":
            case "voltage":
              row.value = (val / 1000).toFixed(0);
              break;
            default:
              row.value = val;
          }
        }

        //outlet in use property
        // rows.push({
        //     key:    "outinuse"
        //   , name:   model.outinuse
        //   , value:  $(".tree-node-selected .icon-ol-load").size() ? MODEL.buttons.yes : MODEL.buttons.no
        //   , group:  model.outletattr
        // });

        $outletproperty.propertygrid({
          showGroup: true,
          scrollbarSize: 0,
          onAfterEdit: saveHandler
        });
        $outletproperty.propertygrid("loadData", {rows : rows});

        $(".center .loader").hide();
      };

      $.ajax({contentType: "application/json",
        url: "xhroutget.jsp",
        type:"post", data: JSON.stringify(tocken),
        dataType:"json",
        success: outletHandler,
        error:function() {
          console.log(arguments);
        }
      });

    };

    return self;

  };

})();
/*src/js/datetime.js*/
/*
Datetime
*/
(function() {

  var dateTime = EL.DateTime = function() {
  
    var model;

    dateTime.init = function() {

      model = MODEL.datetime;

      //Getting data from the server in JSON format
      var $dpDateTime = $("#dpDateTime"),
        $hour = $("#hour"),
        $min = $("#min"),
        $sec = $("#sec"),
        $txtFirstTimeServer = $("#txtFirstTimeServer"),
        $txtSecondTimeServer = $("#txtSecondTimeServer"),
        $rdSynchronizewithNTP = $("#rdSynchronizewithNTP"),
        $serverConfigMessage = $("serverConfigMessage"),
        $chkAutoDaylightSaving = $('#chkAutoDaylightSaving'),
        $btnMainSubmit = $('#btnMainSubmit'),
        $drpTimeZone = $("#drpTimeZone");


      /*Localization for dropdown list*/
      (function() {
        var localeCode = $.cookie("locale");
        var $drpTimeZoneLocale = $("#drpTimeZone_" + localeCode);
        $drpTimeZoneLocale.size() && $drpTimeZone.html($drpTimeZoneLocale.html());
      })();


      $('#divMaskingtemp').remove();
      $('div#datetimeholder').show(); 

      $btnMainSubmit.click(function () {
        if ($('input[name=Timeformat]:checked').val() == 1) {
          $("#frdate").submit();
        } else {
          $("#frdatetime").submit();
        }
      });
      
      var data;
      var cookie;
      var timezone;
      var url= 'xhrdatetimeget.jsp';
      // Creating Date Picker
      $dpDateTime.datepicker({
        showOn: "button",
        buttonImage: "",
        buttonImageOnly: true,
        currentText: 'Now',
        minDate: new Date(1900, 0, 1),
        dateFormat: "yy-mm-dd",
        showButtonPanel: true,
        changeMonth: true,
        changeYear: true
      });

      //click now go to current date of PDU
      $(document).on("click", ".ui-datepicker-current", function(e) {
        $dpDateTime.datepicker( "setDate", EL.Master.logintime );
      });

      $hour.numberspinner({min: 0, max: 23});
      $min.numberspinner({min: 0, max: 59});
      $sec.numberspinner({min: 0, max: 59});

      $('input[name=Timeformat]').change();

      var getTimeOffset = function() {
        var zoneReg = /\([\w: +-]+\)/g,
            zone = $drpTimeZone.find("option:selected").text().match(zoneReg),
            offset = 0;

        if (zone) {
          //(UTC+08:34)
          var timeReg = /[1-9][\d]*/g,
              time = zone[0].match(timeReg);

          if (time) {
            var hour = parseInt(time[0]),
                min = time[1] ? parseInt(time[1]) : 0;

            offset = Math.abs(hour * 60) + min;

            zone[0].indexOf('-') > -1 && (offset = 0 - offset);
            $chkAutoDaylightSaving.is(':checked') && (offset = offset + 60);
          }
        }

        return offset * 60;   //minutes => seconds
      };

      var getUTCTime = function() {
        var utc = new Date(),
            date = $dpDateTime.datepicker("getDate");

        utc
          .setUTCFullYear(date.getUTCFullYear)
          .setUTCMonth(date.getUTCMonth)
          .setUTCDate(date.getUTCDate)
          .setUTCHours($hour.val())
          .setUTCMinutes($min.val())
          .setUTCSeconds($sec.val());
      };

      var getDateHandler = function(data) {
        //$drpTimeZone.val(data.timezone);
        $drpTimeZone[0].value = data.timezone;
        var chkAutoDaylightSaving_value = parseInt(data.chkautotimeadjust);

        if (chkAutoDaylightSaving_value ==  0)
          $chkAutoDaylightSaving.attr('checked', false);
        else if (chkAutoDaylightSaving_value ==  1)
          $chkAutoDaylightSaving.attr('checked', true);
        else
          $chkAutoDaylightSaving.attr('checked', data.chkautotimeadjust);

        var radUserOrNTP = parseInt(data.radiouserorntp);

        if (radUserOrNTP == 1) {
          $('#rdUserSpecifiedTime').attr('checked', true);
          $('#rdUserSpecifiedTime').click();
          $('input[name=Timeformat]').change();
        } else if (radUserOrNTP == 2) {
          $('#rdSynchronizewithNTP').attr('checked', true);
          $('#rdSynchronizewithNTP').click();
          $('input[name=Timeformat]').change();
        }

        var date_value = (data.date).toString();
        var year_value = parseInt(date_value.substring(0, 2))+2000;
        var month_value = date_value.substring(2, 4);
        var datealone_value = date_value.substring(4);
        var buildDate = year_value + "-" + month_value + "-" + datealone_value;

        $dpDateTime.val(buildDate);

        var time_value = (data.time).toString();
        var hour_value = time_value.substring(0, 2);
        var min_value = time_value.substring(2, 4);
        var sec_value = time_value.substring(4);

        //Update to support update time without UI
        try {
          $hour.numberspinner("setValue", hour_value);
          $min.numberspinner("setValue", min_value);
          $sec.numberspinner("setValue", sec_value);
        } catch(e) {
          console.log(e);
        }

        $txtFirstTimeServer.val(data.ipfirsttimeserv);
        $txtSecondTimeServer.val(data.ipesecondtimeserv);

        //Update datetime in Master page; current local time;
        var date = new Date();
        date.setFullYear(year_value, month_value - 1, datealone_value);
        date.setHours(hour_value, min_value, sec_value);
        EL.Master.curtime = date;
      };

      var updateDate = dateTime.updateDate = function() {
        $.ajax({
          url: url,
          type: "post", dataType: "json",
          data: EL.Auth.getTocken(),
          success: getDateHandler,
        });
      };
        
      // Change event for User specified time and Syncronize with NTP Server
      $('input[name=Timeformat]').change(function() {
        if ($('input[name=Timeformat]:checked').val() == 1) {
          $dpDateTime.datepicker("enable");
          $hour.numberspinner("enable");
          $min.numberspinner("enable");
          $sec.numberspinner("enable");
          $txtFirstTimeServer.attr('disabled', true);
          $txtSecondTimeServer.attr('disabled', true);
          $serverConfigMessage.css('display', 'none');
        } else if ($('input[name=Timeformat]:checked').val() == 2) {
          $dpDateTime.datepicker("disable");
          $hour.numberspinner("disable");
          $min.numberspinner("disable");
          $sec.numberspinner("disable");
          $txtFirstTimeServer.attr('disabled', false);
          $txtSecondTimeServer.attr('disabled', false);
          $serverConfigMessage.css('display', 'block');
        }
      });

      //calling the Change Event 
      $('input[name=Timeformat]').change();
      //form validation starts
      $("#datetimeholder").mouseover(function() {
        generateTooltips();
      });

      function dsendprivileges( url, objDateTimeJson ) {
        $.ajax({
          url: url,
          type:"post", data: JSON.stringify(objDateTimeJson),
          dataType: "json",
          success: function(data) {
            if (EL.UpdateStatus(data)) {
              updateDate();
              //wait for 1 seconds to get the UI updated;
              EL.Master.removeDialog();
            }
          }
        });
      }

      var timerValidator = $("#frdate").validate({
        rules: { dpDateTime: { required: true, customDate: true } },
        submitHandler: submitDateTime
      });

      // validate the Ping History Form
      var serverValidator = $("#frdatetime").validate({
        rules: {
          firsttimeserver:  {ipv4: true},
          secondtimeserver: {ipv4: true}
        },
        submitHandler: submitDateTime
      });

      $('input[name=Timeformat]').change(function() {
        if ($('input[name=Timeformat]:checked').val() == 1) {

          serverValidator.resetForm();

          $dpDateTime.datepicker("enable");
          $hour.numberspinner("enable");
          $min.numberspinner("enable");
          $sec.numberspinner("enable");
          $txtFirstTimeServer.attr('disabled', true);
          $txtSecondTimeServer.attr('disabled', true);
          $serverConfigMessage.css('display', 'none');
        }else if ($('input[name=Timeformat]:checked').val() == 2) {
          timerValidator.resetForm();

          $dpDateTime.datepicker("disable");
          $hour.numberspinner("disable");
          $min.numberspinner("disable");
          $sec.numberspinner("disable");
          $txtFirstTimeServer.attr('disabled', false);
          $txtSecondTimeServer.attr('disabled', false);
          $serverConfigMessage.css('display', 'block');
        }
      });

      function submitDateTime() {
        var timezone;
        var ipfirsttimeserv;
        var ipesecondtimeserv;
        var time;
        var url= "xhrdatetimepost.jsp"; 
        var datetimevalue;

        timezone = parseInt($drpTimeZone.val());

        var chkautotimeadjust = $chkAutoDaylightSaving.is(':checked');
        if (chkautotimeadjust) chkautotimeadjust = 1;
        else chkautotimeadjust = 0

        datetimevalue = $dpDateTime.val();
        var newDateArray = datetimevalue.split("-");
        var newYear_value = parseInt(newDateArray[0]) - 2000;
        var newMon_value = newDateArray[1];
        var newDate_value = newDateArray[2];
        datetimevalue = newYear_value + newMon_value + newDate_value;

        var radiouserorntp = parseInt($('input[name=Timeformat]:checked').val());

        if (($hour.val()).length!=0 && ($min.val()).length !=0 && ($sec.val()).length !=0) {
          var newhour_value = $hour.val();
          if (newhour_value.length == 1)
            newhour_value = "0" + newhour_value.toString();
          
          var newMin_value = $min.val();
          if (newMin_value.length == 1)
            newMin_value = "0" + newMin_value.toString();
            
          var newsec_value = $sec.val();
          if (newsec_value.length == 1)
            newsec_value = "0" + newsec_value.toString();

          time = newhour_value + newMin_value + newsec_value;
        } else {
          time = "";
        }

        ipfirsttimeserv   = ($txtFirstTimeServer.val()).length != 0   ? $txtFirstTimeServer.val()   : "0.0.0.0";
        ipesecondtimeserv = ($txtSecondTimeServer.val()).length != 0  ? $txtSecondTimeServer.val()  : "0.0.0.0";

        var objDateTimeJson = $.extend({}, EL.Auth.getJSON(), {
            "offset" : getTimeOffset(),
            "timezone":timezone,
            "chkautotimeadjust":chkautotimeadjust,
            "radiouserorntp" :radiouserorntp,
            "date" : datetimevalue,
            "time": time,
            "ipfirsttimeserv":ipfirsttimeserv,
            "ipesecondtimeserv":ipesecondtimeserv
          });

        dsendprivileges(url, objDateTimeJson);  
      }


      //check NTP Server
      $("#btnChkNTP").click(function() {
        if (!$rdSynchronizewithNTP.is(":checked") || !$("#frdatetime").valid()) {
          return EL.Dialog.alert(model.checkntpinfo);
        }

        var timerServer1 = $txtFirstTimeServer.val(),
            timerServer2 = $txtSecondTimeServer.val();

        var tocken = $.extend({
          "server1": timerServer1,
          "server2": timerServer2
        }, EL.Auth.getJSON());

        $.ajax({
          url: "xhrntpcheckpost.jsp",
          type: "post", data: JSON.stringify(tocken),
          dataType: "json",
          success: function(data) {

            var html = "";

            if (timerServer1) {
              html += "<div class='{0}'>{2} : {1}</div>".format( 
                data.uptstatus1 ? "icon-apply" : "icon-cross",
                data.uptstatus1 ? model.succ : model.fail,
                model.firstip
              );
            }

            if (timerServer2) {
              html += "<div class='{0}'>{2} : {1}</div>".format( 
                data.uptstatus2 ? "icon-apply" : "icon-cross",
                data.uptstatus2 ? model.succ : model.fail,
                model.secondip
              );
            }

            html = '<div style="margin:1em">' + html + '</div>';

            EL.Dialog.message(html, null, {icon: "none"});

          }
        })
      });

      updateDate();

      EL.Privilege.setButton([$("#btnMainSubmit")], 0x00000004);
    };


    return dateTime;

  };

})();

/*src/js/serverreach.js*/
(function(window, document) {

  var serverReach = EL.ServerReach = function() {

    var model = MODEL.serreach;

    var eventName;

    var $gdServerReachability = $('#gdServerReachability'),
        $btnNewServer = $('#btnNewServer'),
        $createNewServer = $('#createNewServer'),
        $btnUpdateServer = $("#btnUpdateServer"),
        $btnEditServer = $('#btnEditServer'),
        $btnDeleteServer = $('#btnDeleteServer'),
        $frAddNewServer = $("#frAddNewServer"),
        $IP_Hostname = $("#IP_Hostname");

    var statusFormatter = function(value, row) {
      return PINGSTATUS[value] || value;
    };

    var refreshGrid = function() {

      $.ajax({
        url: "xhrserverreachgrid.jsp",
        type: "post", data: EL.Auth.getTocken(),
        dataType: "json",
        success: function(rows) {
          $gdServerReachability.datagrid({columns:[[
              // {field:"ipaddress", title:"IP Address/Hostname", width:170, sortable:true },
              //        //{field:"ping", title:"Ping", width: 100, formatter: EL.Formatter.bool},
              // {field:"ping", title:"Ping Enabled", width: 100, formatter: EL.Formatter.bool, sortable:true},
              // {field:"status", title:"Status", width: 210, formatter: statusFormatter, sortable:true}
              {field:"ipaddress", title:model.iphostnm, width:170, sortable:true },
                     //{field:"ping", title:"Ping", width: 100, formatter: EL.Formatter.bool},
              {field:"ping", title:model.pingenable, width: 100, formatter: EL.Formatter.bool, sortable:true},
              {field:"status", title:model.status, width: 210, formatter: statusFormatter, sortable:true}
            ]],
            singleSelect: true,
            height: 268,
            remoteSort: false
          });

          $gdServerReachability.datagrid("loadData", { rows: rows });
        }
      });
    };

    var showEditDialog = function(title) {
      var model = MODEL.buttons;

      $createNewServer.dialog({
        title:  '<span class="icon-serReach">' + title + '</span>',
        width: 510,
        height: "auto",
        modal: true,
        resizable: false,
        buttons:{
          // "   OK   " : function() {
          //   $frAddNewServer.submit();
          // },
          // "  Cancel  " : function() {
          //   $(this).dialog("destroy");
          // }
          "   OK   " : {
            text: model.oks,
            click: function() {$frAddNewServer.submit();},
            id: "btnOk"
          },
          "  Cancel  " : {
            text: model.cancels,
            click: function() {$(this).dialog("destroy");},
            id: "btnClose"
          }
        },
        close: function() {
          $createNewServer.dialog('destroy');
        }
      });

    };

    $btnUpdateServer.click(refreshGrid).click();

    $btnNewServer.click(function() {

      eventName = "new";

      var rows = $gdServerReachability.datagrid("getRows");

      $IP_Hostname.removeAttr("disabled");

      if (rows.length < 8) {
        $('input,select', $createNewServer).val('');

        /*default value*/
        $('#No_Pings').val(15);
        $('#Successful_Ping').val(60);
        $('#Unsuccessful_Ping').val(5);
        $('#UnsuccessfulPing_Failure').val(5);
        $('#Resume_Ping').val(180);

        $frAddNewServer.validate().resetForm();

        showEditDialog(model.addnew);
      } else {
        EL.Dialog.alert(model.reachemax);
      }
    });

    $btnEditServer.click(function() {

      eventName = "edit";

      var row = $gdServerReachability.datagrid("getSelected");

      if (!row) {
        return EL.Dialog.alert(model.noselect);
      }

      var tocken = $.extend({ipaddress: row["ipaddress"]}, EL.Auth.getJSON());

      //$IP_Hostname.attr("disabled", true);

      $.ajax({
        url: "xhreditserverreachget.jsp",
        type: "post", data: JSON.stringify(tocken),
        dataType: "json",
        success: function(data) {
          $IP_Hostname.val(data.iphostname);
          $('#chkEnablePingMonitoring').attr('checked', data.chkenpingmonitoring);
          $('#No_Pings').val(data.noofpingstoenfeature);
          //$('#Successful_Ping').val(data.waittimesuccessfulping);
          //$('#Unsuccessful_Ping').val(data.waittimeunsuccessfulping);
          $('#UnsuccessfulPing_Failure').val(data.unsuccessfulpingfailure);
          $('#Resume_Ping').val(data.resumeping);

          // showEditDialog('Edit Server Property: "{0}"'.format(data.iphostname));
          showEditDialog('{0}: "{1}"'.format(model.editserver,data.iphostname));
        }
      });
    });

    $btnDeleteServer.click(function() {
      var row = $gdServerReachability.datagrid("getSelected");

      if (!row) {
        return EL.Dialog.alert(model.noselect);
      }

      var tocken = $.extend({ipaddress: row["ipaddress"]}, EL.Auth.getJSON());

      // EL.Dialog.confirm("Do you really want to delete the server \"" + row["ipaddress"] + "\"?", function() {
      EL.Dialog.confirm(model.deleteser.format(row["ipaddress"]), function() {
        $.ajax({
          url: "xhrserverreachdel.jsp",
          type: "post", data: JSON.stringify(tocken),
          dataType: "json",
          success: function(data) {
            EL.UpdateStatus(data);
            refreshGrid();
          }
        });
      });
    });

    function dsendSerReach(url, objSerReachJson) {
      $.ajax({
        url: url,
        type: "post", data: JSON.stringify(objSerReachJson),
        dataType: "json",
        success: function(data) {
          if (EL.UpdateStatus(data)) {
            $createNewServer.dialog("destroy");
            refreshGrid();
          }
        }
      });
    }

    // validate the Create New Server form
    $("#frAddNewServer").validate({
      rules: {
        IP_Hostname:  {required:true, maxlength:32},
        No_Pings:     {required:true, number:true, min:1, max:200},
        //Successful_Ping: {required: true,number:true,range: [5, 600]},
        //Unsuccessful_Ping: {required: true,number:true,range: [3, 600]},
        UnsuccessfulPing_Failure: {required: true, number:true, range: [1, 100]},
        Resume_Ping: {required: true, number:true, range: [1, 1200]}
      },
      submitHandler: function(form)
      {  
        var pingStatus = null;
        var status = null;
        var Boolchkenpingmonitoring = $("#chkEnablePingMonitoring").is(':checked');

        var cookie_Value = parseInt(getAuthCookie("authCookieId"));
        var url ;
        var iphostname = $IP_Hostname.val();
        var noofpingstoenfeature = parseInt($("#No_Pings").val());
        //var waittimesuccessfulping = parseInt($("#Successful_Ping").val());
        //var waittimeunsuccessfulping = parseInt($("#Unsuccessful_Ping").val());
        var unsuccessfulpingfailure = parseInt($("#UnsuccessfulPing_Failure").val());
        var resumeping = parseInt($("#Resume_Ping").val());

        if (eventName == 'new') {
          url="xhrnewserverreachpost.jsp";
          var objSerReachJson = { 
            "cookie" : cookie_Value ,
            "iphostname" : iphostname,
            "chkenpingmonitoring" : Boolchkenpingmonitoring,
            "noofpingstoenfeature" : noofpingstoenfeature,
            //"waittimesuccessfulping" : waittimesuccessfulping,
            //"waittimeunsuccessfulping" : waittimeunsuccessfulping,
            "unsuccessfulpingfailure" : unsuccessfulpingfailure,
            "resumeping" : resumeping
          };
        }
        else if (eventName == 'edit') {
          url="xhreditserverreachpost.jsp";
          var currentRowData = $gdServerReachability.datagrid("getSelected");
          var oldipaddress_value = currentRowData.ipaddress;
          var objSerReachJson = {
            "cookie" : cookie_Value ,
            "oldiphostname" : oldipaddress_value, 
            "newiphostname" : iphostname, 
            "chkenpingmonitoring" : Boolchkenpingmonitoring, 
            "noofpingstoenfeature" : noofpingstoenfeature,
            //"waittimesuccessfulping" : waittimesuccessfulping,
            //"waittimeunsuccessfulping" : waittimeunsuccessfulping,
            "unsuccessfulpingfailure" : unsuccessfulpingfailure, 
            "resumeping" : resumeping
          };        
        }
        dsendSerReach( url,objSerReachJson);

      }
    });


    EL.Privilege.setButton([$("#btnNewServer"), $("#btnEditServer"), $("#btnDeleteServer")], 0x00100000);

  };

})(window, document);
/*src/js/ping.js*/
(function() {

  EL.Ping = function() {

    var $gdPingResults = $("#gdPingResults"),
        $txthostname = $('#txthostname');

    $('#txtNoofRequests').numberspinner({min: 1, max: 20});

    //Spinner minimum & Maximum declaration
    $('#divMaskingtemp').remove();
    $('div#PingNwHostHolder').show();

    //form validation starts
    $("#PingNwHostHolder").mouseover(function() {
      generateTooltips();
    });

    $("#pingHistResultsDialog").dialog({
      title : '<div class="dicon"><img src="images/16x16/connect.png" alt=icon></img></div>Ping Results',
      resizable: false,
      width: 560, 
      height: 'auto',
      modal: true,
      autoOpen: false,
      closeOnEscape: false,
      buttons: {
        "Cancel" :{
          text: " Close ",
          click: function() {
            EL.Master.removeDialog();
            $(this).dialog("close");
          }
        }
      }
    });

    //Sending Ping data to the server in JSON Format
    function dsendpingForm(url, changePingJsonObj) {
      $.ajax({
        url: url,
        type:"POST", data: JSON.stringify(changePingJsonObj),
        dataType: "json",
        success: function(data) {

          $("#divPingingHostLoadImage").remove();

          var pingResult = "Pinging " + $txthostname.val() + " with 32 bytes of data: <br/>";

          for(var key in data) {
            var val = parseInt(data[key]);
            if (val > 0) {
              pingResult += "Reply From " + $txthostname.val() + ": bytes=32 time=" + val + " TTL=255 <br/>";
            } else {
              pingResult += "Could not be resolved. </br/>";
            }
          }

          $gdPingResults.html(pingResult);

          $('#pingHistResultsDialog').dialog('open');
        }
      });
    }     

    // validate the Ping History Form
    $("#frpingHist").validate({
      rules: {
        txthostname: {required:true, maxlength:64}
      },
      submitHandler: function(form) { 
        var cookie_Value = getAuthCookie("authCookieId");
        cookie_Value = parseInt(cookie_Value);
        var valhostname, valnoofreqs;
        valhostname = $txthostname.val();
        valnoofreqs = parseInt($('#txtNoofRequests').val());
        var changePingJsonObj = {"cookie" : cookie_Value, "hostname" : valhostname, "noofreqs" : valnoofreqs};
        var url = 'xhrpingpost.jsp';
        $('#btnMainSubmit').parent('div').parent('div').append('<div id="divPingingHostLoadImage" style="float: left; width: 107px; vertical-align:middle; margin-left: 8px;"><img src="images/large-loading.gif" style="width:20px;padding-left:10px;padding-right:10px;float:left;"><label id="lbPingingHost">Pinging Host.. </label></div>');  

        /*
        $txthostname.attr('disabled', true).addClass('disableButton');
        $('#btnMainSubmit').attr('disabled', true).addClass('disableButton');
        $('#txtNoofRequests').spinner('disable').addClass('disableButton');
        $('#lbPingingHost').attr('disabled', true).addClass('disableButton');
        $("#PingNwHostHolder").addClass("opacityElement");
        */

        //waiting for waiting icons
        window.setTimeout(function() {
          dsendpingForm(url, changePingJsonObj);
        }, 1000);
      }
    });

    $("#btnCancel").click(function() {
      $.ajax({url: "xhrpingcancel.jsp"});  
    });    

    EL.Privilege.setButton([$("#btnMainSubmit")], 0x00400000);
  };

}());

/*src/js/user.js*/
/*User*/
(function() {

  EL.User = function() {

    var model = MODEL.users;

    var rolenameval;
    var selected;

    var $gdUser           = $('#gdUser'),
        $gdRoleinUser     = $('#gdRoleinUser'),
        $tabCreateNewUser = $('#tabCreateNewUser'),
        $chkEnableSNMPAccess =  $('#chkEnableSNMPAccess'),
        $chkenable        = $('#chkenable'),
        $drpSecurityLevel = $('#drpSecurityLevel'),
        $btnNewUser       = $('#btnNewUser'),
        $btnEditUser      = $('#btnEditUser'),
        $btnDeleteUser    = $('#btnDeleteUser'),
        $deleteUser       = $('#deleteUserDialog');

    var username      = $('#username');
    var fullname      = $('#fullname');
    var password      = $('#password');
    var cnfpassword   = $('#cnfpassword');
    var telenum       = $('#telenum');
    var email         = $('#email');
    var frpasschk     = $('#frpasschk');

    var $locklayer = $("#roles .locklayer"),
        $txtAuthPassPhrase = $("#txtAuthPassPhrase"),
        $txtConfirmAuthPassPhrase = $('#txtConfirmAuthPassPhrase'),
        $txtPrivacyPassPhrase = $('#txtPrivacyPassPhrase'),
        $txtConfirmPrivacyPassPhrase = $("#txtConfirmPrivacyPassPhrase"),
        $authalgor = $("#authalgor"),
        $privalgor = $("#privalgor");


    var rowindexUser, rowidUser, rowindexRoleinUser, rowidRoleinUser, eventName;
    var validator;
    var user, rolename;

    var xmlhttp = getXMLObject(); 

    var cookie_Value = parseInt(getAuthCookie("authCookieId"));

    var setUserGrid = function(rows) {
      var cols = [[
        // {field:'active', title: 'Active', width:90, align:"center", formatter: EL.Formatter.bool, sortable: true},
        {field:'active', title: '{0}'.format(model.active), width:90, align:"center", formatter: EL.Formatter.bool, sortable: true},
        // {field:'username', title:'User Name', width:125, sortable: true},
        {field:'username', title:'{0}'.format(model.username), width:125, sortable: true},
        // {field:'fullname', title:'Full Name', width:125, sortable: true},
        {field:'fullname', title:'{0}'.format(model.fullname), width:125, sortable: true},
        // {field:'roles', title:'Roles', sortable: true, width:150, sortable: true}
        {field:'roles', title:'{0}'.format(model.roles), sortable: true, width:150, sortable: true}
      ]];

      $gdUser.datagrid({
        columns: cols,
        height: 308,
        singleSelect: true,
        remoteSort: false
      });

      $gdUser.datagrid("loadData", {rows: EL.User.filterDNA(rows)});
    };

    var getUserGrid = function() {
      $.ajax({
        url: "xhrusersgetgrid.jsp",
        type: "post", data: EL.Auth.getTocken(),
        dataType: "json",
        success: setUserGrid
      });
    };

    /*
    Set checkbox in Role grid
    */
    var setRolePrivi = function() {
      var $inputs = $("#roles .datagrid-body input[type=checkbox]"),
          rows = $gdRoleinUser.datagrid("getRows");

      //default user's role cannot be changed;
      (user == "admin" && eventName != "new")
        ? $locklayer.show()
        : $locklayer.hide();

      //it's not default user?
      $inputs.each(function(i) {
        var $input = $(this),
            privi = (rows[i]["rolename"] == rolename) || EL.Privilege.isSuperUser();

        if (!privi) {
          $input.attr("disabled", true);
          $input.attr("checked", false);
          $gdRoleinUser.datagrid("unselectRow", i);
        } else {
          $input.removeAttr("disabled");
        }
      });
    };

    var setUserRole = function(rows) {
      var modelrl = MODEL.role;
      var cols = [[
        {checkbox:true, align:"center"},
        // {field:'rolename', title:'Role Name', width:150 },
        {field:'rolename', title:'{0}'.format(modelrl.rolename), width:150 },
        // {field:'description', title:'Description', width: 340}
        {field:'description', title:'{0}'.format(modelrl.description), width: 340}
      ]];

      $gdRoleinUser.datagrid({
        columns: cols,
        height: 308,
        singleSelect: true,
        onSelectAll: setRolePrivi,
        onSelect: setRolePrivi
      });

      $gdRoleinUser.datagrid("loadData", {rows: EL.User.filterDNA(rows)});
      //disable other roles
      setRolePrivi();
    };

    var getUserRole = function() {
      $.ajax({
        url: "xhrrolesgetgrid.jsp",
        type: "post", data: EL.Auth.getTocken(),
        dataType: "json",
        success: setUserRole
      });
    };

    var openEditUserDialog = function(title) {
      var model = MODEL.buttons;

      validator && validator.resetForm();

      $tabCreateNewUser.dialog({
        // title:  '<img src="images/user_add.png" alt=icon/> ' + title,
        title: '<div class="icon-useradd">{0}</div>'.format(title),
        width: 550,
        height: 'auto',
        modal: true,
        resizable: false,
        dialogClass: 'sample',
        buttons: {
          "Submit":{
            id: "btnEditUserAtDialog",
            // text: "   OK   ",
            text: model.oks,
            click: function() {$('#frCreateNewUser').submit();},
            id: "btnOk"
          },
          "Cancel" :{
            // text: " Cancel ",
            text: model.cancels,
            click: function() {$(this).dialog("destroy");},
            id: "btnCancel"
          }
        },
        close: function() {
          $(this).dialog('destroy');
        }
      });

      $tabCreateNewUser.dialog('open');

      //reset privilege
      privilege();
    };

    // Creating User and RoleinUser Grids.
    getUserGrid();
    getUserRole();

    $tabCreateNewUser.tabs({
      select: function(e, ui) {
        //regresh to display it.
        $gdRoleinUser.datagrid();
      }
    });

    $btnNewUser.click(function() {
      username.removeAttr("disabled");
      $locklayer.hide();

      $("#chkRoleinUserOperator").attr('checked',true);
      eventName = 'new';

      resetRoleFields();

      //update global rolename to the rolename of current user
      rolename = EL.Privilege.rolename;
      setRolePrivi();

      // openEditUserDialog("Create New User");
      openEditUserDialog(model.createnewuser);
      $gdRoleinUser.datagrid("unselectAll");
    });

    $btnEditUser.click(function() {
      var row = $gdUser.datagrid("getSelected");

      resetRoleFields();

      if (!row) {
        // return EL.Dialog.alert("Please select a row!");
        return EL.Dialog.alert(model.noselect);
      }

      user = row["username"];

      if (user == "admin" && EL.Privilege.username != "admin") {
        return EL.Alert(model.nopermission);
      }

      if (!EL.Privilege.isCurrentUser(user)
        && !EL.Privilege.isSuperUser()) {
        return EL.Dialog.alert(model.nopermission);
      }

      (user == "admin" || user == EL.Privilege.username)
        ? $chkenable.attr('disabled', true)
        : $chkenable.attr('disabled', false);

      username.attr("disabled", "disabled");
      eventName = 'edit';

      var objeditUsersJson = $.extend({"username": row["username"]}, EL.Auth.getJSON());

      $.ajax({
        url: "xhredituserget.jsp",
        type:"post", data: JSON.stringify(objeditUsersJson),
        dataType: "json",
        success: function(data) {
          $('#username').val(data.username);
          $('#fullname').val(data.fullname);
          $('#password').val(data.password);
          $('#cnfpassword').val(data.password);
          $('#telenum').val(data.telenum);
          $('#email').val(data.email);

          //$drpSecurityLevel.val(data.drpsecuritylevel);
          $drpSecurityLevel[0].value = data.drpsecuritylevel;
          //$('#authproto').val(data.temperature);
          $('#authproto')[0].value = data.temperature;

          $chkenable.attr('checked', data.chkenable ? true : false);
          $('#frpasschk').attr('checked', data.frpasschk ? true : false);

          rolename = data["rolename"];

          var roles = $gdRoleinUser.datagrid('getData')["rows"];
          for(var i = 0, len = roles.length; i < len; i++) {
            if (roles[i]["rolename"] == rolename) {
              $gdRoleinUser.datagrid("selectRow", i);
              break;
            }
          }

          $chkEnableSNMPAccess
            .attr("checked", data.snmpchk ? true : false)
            .change();

          $drpSecurityLevel.change();

          //These should be done after enalbeSNMP & $drpSecurityLevel changed;
          $('#chkPasswordAuth')
            .attr('checked', data.chkpasswordauth ? true : false)
            .change();
          $('#chkPrivacyAuth')
            .attr('checked', data.chkprivacyauth ? true : false)
            .change();

          $txtAuthPassPhrase.val(data.txtauthpassphrase);
          $txtConfirmAuthPassPhrase.val(data.txtauthpassphrase);
          $txtPrivacyPassPhrase.val(data.txtprivacypassphrase);
          $txtConfirmPrivacyPassPhrase.val(data.txtprivacypassphrase);
          //$authalgor.val(data.authalgor);
          $authalgor[0].value = data.authalgor;
          //$privalgor.val(data.privalgor);
          $privalgor[0].value = data.privalgor;

          // openEditUserDialog("Edit Userz: \"" + data.username + "\"");
          openEditUserDialog(model.edituser +"\"" + user + "\"");
        }
      });
    });

    $btnDeleteUser.click(function() {
      var row = $gdUser.datagrid("getSelected");

      if (!row) {
        // return EL.Alert("Please select a row!");
        return EL.Alert(model.noselect);
      }

      var userName = row["username"],
          userRole = row["roles"];

      if (userName == "admin") {
        // return EL.Alert("This user cannot be deleted!");usernotbedel
        return EL.Alert(model.usernotbedel);
      }

      if (userName == EL.Privilege.username) {
        // return EL.Alert("You cannot delete yourself!");
        return EL.Alert(model.notdelyourself);
      }

      if (EL.Privilege.rolename != "admin") {
        // return EL.Alert("You cannot delete this user");
        return EL.Alert(model.notdelthisuser);
      }

      var objDeleteUserJson = {"cookie": cookie_Value, "username": userName};

      // EL.Confirm("Do you really want to delete the user {0}?".format(userName), function() {
        EL.Confirm(model.reallydeluser.format(userName), function() {
        $.ajax({
          url: "xhrusersdel.jsp",
          type: "post", data: JSON.stringify(objDeleteUserJson),
          dataType: "json",
          success: function(data) {
            //only sucess need to refresh the Grid.
            if (EL.UpdateStatus(data)) {
              getUserGrid();
            }
          }
        });

        $(this).dialog('destroy');
      });

    });

    function resetRolesatManageRoles() {
      $('#gdURole').remove();
      $('#deleteURoleDialog').remove();
      $('#divUEditArguments').remove();
      $('#addUPrivileges').remove();
      $('#tabUCreateNewRole').remove(); 
      $('#btnUNewRole').remove();
      $('#btnUEditRole').remove();
      $('#btnUDeleteRole').remove();
    }

    function resetRolesatEditRoles() {
      $('#gdRURole').remove();
      $('#deleteRURoleDialog').remove();
      $('#divRUEditArguments').remove();
      $('#addRUPrivileges').remove();
      $('#tabRUCreateNewRole').remove();  
    }

    // Change Events
    $chkEnableSNMPAccess.change(function () {
      if ($chkEnableSNMPAccess.attr('checked')) {
        $drpSecurityLevel.attr('disabled', false).removeClass('disableBg');
        $('#chkPasswordAuth').attr('disabled', false).removeClass('disableBg');
        checkPasswordAuthStatus();
        $('#chkPrivacyAuth').attr('disabled', false).removeClass('disableBg');
        checkPrivacyAuthStatus();
        $('#drpAuthProtocol').attr('disabled', false).removeClass('disableBg');
        $('#drpPrivacyProtocol').attr('disabled', false).removeClass('disableBg');
        checkdrpSecurityLevelStatus();
      } else {
        $drpSecurityLevel.attr('disabled',true).addClass('disableBg')
        disableAllinSNMPAccess();         
      }
    });     
      
    $drpSecurityLevel.change(function () {
      checkdrpSecurityLevelStatus();
    });

    // Calling Change Events    
    //$chkEnableSNMPAccess.change();
    //$drpSecurityLevel.change();

    // Misc Functions for Change Events 
    function checkPasswordAuthStatus() {
      if ($('#chkPasswordAuth').attr('checked')) {
        $txtAuthPassPhrase.attr('disabled', true).addClass('disableBg');
        $txtConfirmAuthPassPhrase.attr('disabled', true).addClass('disableBg');
      } else {
        $txtAuthPassPhrase.attr('disabled', false).removeClass('disableBg');
        $txtConfirmAuthPassPhrase.attr('disabled', false).removeClass('disableBg');
      }
    }

    function checkPrivacyAuthStatus() {
      if ($('#chkPrivacyAuth').attr('checked')) {
        $txtPrivacyPassPhrase.attr('disabled', true).addClass('disableBg');
        $txtConfirmPrivacyPassPhrase.attr('disabled', true).addClass('disableBg');
      } else {
        $txtPrivacyPassPhrase.attr('disabled', false).removeClass('disableBg');
        $txtConfirmPrivacyPassPhrase.attr('disabled', false).removeClass('disableBg');
      }
    }
    
    function checkdrpSecurityLevelStatus() {
      if (!$drpSecurityLevel.attr('disabled')) {
        var selectedValue = $drpSecurityLevel.val();
        if (selectedValue == 0) {
          disableAllinSNMPAccess();
        }else if (selectedValue == 1) {
          disableAllinSNMPAccess();
          $('#chkPasswordAuth').attr('disabled', false).removeClass('disableBg');
          $('#drpAuthProtocol').attr('disabled', false).removeClass('disableBg');
          $authalgor.attr("disabled", false);
        }else if (selectedValue == 3) {
          disableAllinSNMPAccess();
          $('#chkPasswordAuth').attr('disabled', false).removeClass('disableBg');
          $('#drpAuthProtocol').attr('disabled', false).removeClass('disableBg');
          $('#chkPrivacyAuth').attr('disabled', false).removeClass('disableBg');
          $('#drpPrivacyProtocol').attr('disabled', false).removeClass('disableBg');
          $authalgor.attr("disabled", false);
          $privalgor.attr("disabled", false);
        }
      }
    }

    function disableAllinSNMPAccess() {
      $('#chkPasswordAuth').attr('checked', true);
      $('#chkPasswordAuth').attr('disabled',true).addClass('disableBg')
      $txtAuthPassPhrase.attr('disabled', true).addClass('disableBg');
      $txtConfirmAuthPassPhrase.attr('disabled', true).addClass('disableBg');
      //$txtAuthPassPhrase.val('');
      //$txtConfirmAuthPassPhrase.val('');
      $('#chkPrivacyAuth').attr('checked', true);
      $('#chkPrivacyAuth').attr('disabled',true).addClass('disableBg')
      $txtPrivacyPassPhrase.attr('disabled', true).addClass('disableBg');
      $txtConfirmPrivacyPassPhrase.attr('disabled', true).addClass('disableBg');
      //$txtPrivacyPassPhrase.val('');
      //$txtConfirmPrivacyPassPhrase.val('');
      $('#drpAuthProtocol').attr('disabled',true).addClass('disableBg');
      $('#drpPrivacyProtocol').attr('disabled',true).addClass('disableBg');

      $authalgor.attr("disabled", true);
      $privalgor.attr("disabled", true);
    }

    //Status Changed
    $('#chkPasswordAuth').change(checkPasswordAuthStatus);
    $('#chkPrivacyAuth').change(checkPrivacyAuthStatus);
    
    //Form validation
    //$tabCreateNewUser.mouseover(generateTooltips);

    //Post New/Edit Users data to the Server
    function dsendUsersForm(url, objUsersJson) {
      $.ajax({
        url: url,
        type: "post", data: JSON.stringify(objUsersJson),
        dataType: "json",
        success: function(data) {
          if (EL.UpdateStatus(data)) {
            getUserGrid();
            $tabCreateNewUser.dialog('destroy');
          }
          // (data.uptstatus == 3) && EL.Dialog.alert("Entered username is already existed.");
          (data.uptstatus == 3) && EL.Dialog.alert(model.enteruserexist);
        }
      });
    }

    // validating the Create New User form
    validator = $("#frCreateNewUser").validate({
      rules:{
        username: {required: true, minlength: 3, maxlength: 31, nowhitespaces: true},
        fullname: {maxlength: 62},
        password: {required: true, minlength: 8, maxlength: 31},
        cnfpassword: {required: true, equalTo:"#password"},
        telenum: {maxlength:64},
        email: {maxlength:64, email:true},
        authpassphrase: {required:true, minlength: 8, maxlength: 31, notEqualTo:"snmpv3"},
        cfmauthpassphrase: {required:true, equalTo:"#txtAuthPassPhrase"},
        privacypassphrase:{required: true,minlength: 8, maxlength: 31},
        cfmprivacypassphrase:{required: true, equalTo: "#txtPrivacyPassPhrase"}
      },
      submitHandler: function(form) {
        var url;

        selected = $tabCreateNewUser.tabs( "option", "selected" );

        var roleRow = $gdRoleinUser.datagrid("getSelected");
        if (!roleRow) {
          // return EL.Dialog.alert("Please select a role!");noselectrole
          return EL.Dialog.alert(model.noselectrole);
        }

        var usernameval = $('#username').val();
        var fullnameval = $('#fullname').val();
        var passwordval = $('#password').val();
        var telenumval  = $('#telenum').val();
        var emailval    = $('#email').val();
        var chkenableval  = $chkenable.is(':checked');
        var frpasschkval  = $('#frpasschk').is(':checked');
        var snmpchkval  = $chkEnableSNMPAccess.is(':checked');
        var drpsecuritylevelval = parseInt($drpSecurityLevel.val());
        var chkpasswordauthval = $('#chkPasswordAuth').is(':checked');
        var txtauthpassphraseval = $txtAuthPassPhrase.val();
        var chkprivacyauthval = $('#chkPrivacyAuth').is(':checked');
        var txtprivacypassphraseval = $txtPrivacyPassPhrase.val();

        rolenameval = roleRow["rolename"];

        var temperatureval = parseInt($('#authproto').val());

        var objUsersJson = {
          "cookie" : cookie_Value,
          "username": usernameval,
          "fullname": fullnameval,
          "password": passwordval,
          "telenum": telenumval,
          "email": emailval,
          "chkenable": chkenableval,
          "frpasschk": frpasschkval,
          "snmpchk": snmpchkval,
          "drpsecuritylevel": drpsecuritylevelval,
          "chkpasswordauth": chkpasswordauthval,
          "txtauthpassphrase": txtauthpassphraseval,
          "chkprivacyauth": chkprivacyauthval,
          "txtprivacypassphrase": txtprivacypassphraseval,
          "authalgor": parseInt($authalgor.val()),
          "privalgor": parseInt($privalgor.val()),
          "rolename": rolenameval,
          "temperature": temperatureval
        };

        if (eventName == 'new') {
          url = 'xhrnewusersset.jsp';
        } else {
          url = 'xhredituserpost.jsp';
        }

        dsendUsersForm(url, objUsersJson);

        //If current user change the setting of himself, update the temperature;
        (usernameval == EL.Privilege.username) && (EL.Privilege.temperature = temperatureval);
      }
    });

    //password policy
    var getPasswordPolicy = function() {
      $.ajax({
        url: "xhrpwpolicyget.jsp",
        type: "post", data: EL.Auth.getTocken(),
        dataType: "json",
        success: function(data) {
          /*{"pwdpolicy":0,"pwdaginginterval":86400,"minpwdlen":8,"maxpwdlen":32,"pswpolicy":11}*/
          var min = data.minpwdlen,
              max = data.maxpwdlen,
              pswpolicy = data.pswpolicy,
              policy = {
                lowerChar : pswpolicy & 1 ? true: false,
                upperChar : pswpolicy & 2 ? true: false,
                numberChar : pswpolicy & 4 ? true: false,
                specialChar : pswpolicy & 8 ? true: false
              };

          if (pswpolicy & 16) {
            password.rules("add", $.extend({
              minlength: min,
              maxlength: max
            }, policy));

            cnfpassword.rules("add", $.extend({
              equalTo:"#password"
            }, policy));
          }

        }
      });
    };

    //delay some time to get the password policy
    window.setTimeout(getPasswordPolicy, 300);

    function resetRoleFields() {
      $tabCreateNewUser.tabs('select', 0);
      username.val('');
      fullname.val('');
      password.val('');
      cnfpassword.val('');
      telenum.val('');
      email.val('');

      frpasschk.attr("checked", false);

      $txtAuthPassPhrase.val('');
      $txtConfirmAuthPassPhrase.val('');
      $txtPrivacyPassPhrase.val('');
      $txtConfirmPrivacyPassPhrase.val('');

      $chkenable
        .attr('checked', false)
        .removeAttr("disabled");

      $chkEnableSNMPAccess
        .attr("checked", false)
        .change();

      $drpSecurityLevel
        .val("0")
        .change();
    }

    var privilege = function() {
      EL.Privilege.setButton([$btnNewUser, $btnEditUser, $btnDeleteUser, $("#btnOk")], 0x00000020);
    };

    privilege();

  };

  //filter rows
  EL.User.filterDNA = function(rows) {
    var newRows = [];
    for (var i = 0, l = rows.length; i < l; i++) {
      var row = rows[i];
      if (
        EL.Master.pdumode != 1 && (row["username"] == "landlord" || row["rolename"] == "Landlord")
      ){

      } else {
        newRows.push(row);
      }
    }
    return newRows;
  };

})();




/*src/js/connectuser.js*/
/*Connect User*/
(function() {

  var self = EL.ConnectUser = function() {
    var model = MODEL.conuser;

    var curruseripaddr, usertype;

    //Disconnect button function in datagrid
    var connectFormat = function (value, rows) {
      return '<a class="btn" onclick="EL.ConnectUser.disconnect(\''
        + rows["ipaddress"]
        + '\' , \''
        + rows["username"]
        + '\' , '
        + rows["clienttype"]
        + ')">'
        // + '&nbsp;&nbsp;Disconnect&nbsp;&nbsp;'
        + '&nbsp;&nbsp;{0}&nbsp;&nbsp;'.format(model.disconn)
        + '</a>';
    };

    var setConnectUser = function(rows) {
      var cols = [[
        // { title: 'User Name', field: 'username', width:100, sortable:true },
        // { title: 'IP Address', field: 'ipaddress', width:110, sortable:true },
        // { title: 'Client Type', field: 'clienttype', width:120, formatter: function(value) {
        //   return CLIENTTYPE[value]
        // }, sortable:true},
        // { title: 'Idle Time', field: 'idletime', width:90 , sortable:true},
        // { title: 'Action', field: 'id', width: 120, align:"center", formatter: connectFormat}
        { title: model.usernm, field: 'username', width:100, sortable:true },
        { title: model.ipaddr, field: 'ipaddress', width:110, sortable:true },
        { title: model.clienttype, field: 'clienttype', width:120, formatter: function(value) {
          return CLIENTTYPE[value]
        }, sortable:true},
        { title: model.idletime, field: 'idletime', width:90 , sortable:true},
        { title: model.action, field: 'id', width: 120, align:"center", formatter: connectFormat}
      ]];

      $("#gdConnectedUser").datagrid({
        columns: cols,
        height: 360,
        singleSelect: true,
        remoteSort: false
      });

      $("#gdConnectedUser").datagrid("loadData", {rows: rows});

      EL.Privilege.setButton([$("#ConnectedUsers a.btn")], 0x00200000);
    };

    self.getConnectUser = function() {
      $.ajax({
        url: "xhrconusersgetgrid.jsp",
        type: "post", data: EL.Auth.getTocken(),
        dataType: "json",
        success: setConnectUser
      });
    };

    self.getConnectUser();
  };

  /*
  disconnect user 
  */
  self.disconnect = function(ipaddress, username, clienttype) {
    var model = MODEL.conuser;
    var tocken = $.extend({"ipaddress" : ipaddress, "username" : username, "clienttype": clienttype}, EL.Auth.getJSON()),
        isSelf = (username == EL.Privilege.username && clienttype == 1);

    // var msg = "Do you really want to disconnect user ‘{0}’?".format(username);
    var msg = model.dodisconnuser.format(username);

    isSelf && ( msg
      // = "You are attempting to terminate your connection to ‘{0} ({1})’ <br/> Do you really want to disconnect yourself?"
      //   .format(EL.Privilege.pdu, location.host)
       = model.dodisconnself.format(EL.Privilege.pdu, location.host)
    );

    EL.Confirm(msg, function() {
      $.ajax({
        url: "xhrconusersdel.jsp",
        type: "post", data: JSON.stringify(tocken),
        dataType: "json",
        success: function(data) {
          EL.UpdateStatus(data);
          isSelf ? (window.location = "login.htm") : self.getConnectUser();
        }
      });
    // }, null , {icon:"alert", title:"Disconnect User"});
  }, null , {icon:"alert", title:model.disconnuser});

  };

})();

/*src/js/deviceinfo.js*/
(function() {

  var self = EL.DeviceInfo = {};

  self.init = function() {
    var model = MODEL.devinfo;
    var gdOutletDevInfo     = $("#gdOutletDevInfo");
    var gdCBDevInfo       = $("#gdCBDevInfo");
    var tabDeviceInformation  = $('#tabDeviceInformation');

    //Getting the Device Information from the server in JSON format
    tabDeviceInformation.tabs({
      //reset datagrid
      select: function() {
        gdOutletDevInfo.datagrid();
        gdCBDevInfo.datagrid();
      }
    });

    //tabs one
    var cookie_Value = getAuthCookie("authCookieId");
    cookie_Value = parseInt(cookie_Value);
    var objDevInfoJson = {"cookie" : cookie_Value};
    var xmlhttp = getXMLObject();
    if (xmlhttp) 
    {
      xmlhttp.onreadystatechange  = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
        {
          var data = xmlhttp.responseText;
          data = JSON.parse(data);
          $("#model").html(data.model);
          $("#serialNum").html(data.serialnumber);
          $("#rating").html(data.rating);
          $("#funcType").html(FUNCTYPE[data.functiontype]);
          $("#devipv4Addrr").html(data.deviceip4addr);
          $("#devipv6Addrr").html(data.deviceip6addr);
          $("#macAddr").html(data.devicemacaddr);
          //$("#boardID").html(data.boardid);
          $("#bootver").html(data.bootver);
          $("#langver").html(data.langver);
          $("#firmvarVer").html(data.firmwareversion);
          $("div a#devInfoDwdLink").attr("href", data.pdumibhref);

          $('div#tabDeviceInformation').show();
        }
      };
      xmlhttp.open("POST", 'xhrdevinfopduinfoget.jsp', true); 
      xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");      
      xmlhttp.send(JSON.stringify(objDevInfoJson));   
    }

    var setDeviceInfoOutlet = function(rows) {
      //wince   node.js  support
      if (rows.length < 1) {
        tabDeviceInformation.tabs( "remove" , 1 );
        return;
      }

      var cols = [[
        // { title: 'Label', field: 'Label', width: 80, align: 'center', sortable:true},
        // { title: 'Operating Voltage', field: 'OperatingVoltage', width:220, align: 'center', sortable:true},
        // { title: 'Rated Current', field: 'RatedCurrent', width: 220, align: 'center', sortable:true}
        { title: model.label, field: 'Label', width: 80, align: 'center', sortable:true},
        { title: model.operatevol, field: 'OperatingVoltage', width:220, align: 'center', sortable:true},
        { title: model.ratecurrent, field: 'RatedCurrent', width: 220, align: 'center', sortable:true}
      ]];

      gdOutletDevInfo.datagrid({
        columns: cols,
        singleSelect: true,
        width: 530,
        height: 375,
        remoteSort: false        
      });
      gdOutletDevInfo.datagrid("loadData", rows);
    };

    var getDeviceInfoOutlet = function() {
      $.ajax({
        url: 'xhrdevinfoolgetgrid.jsp',
        type: "post", data: EL.Auth.getTocken(),
        dataType : "json",
        success: setDeviceInfoOutlet
      });
    };

    var setDeviceInfoCircuitBreak = function(rows) {
      var cols = [[
        // { title: 'Label', field: 'Label', width:75, align: 'center', sortable:true},
        // { title: 'Type', field: 'Type', width:190, sortable:true},
        // { title: 'Rated Current', field: 'RatedCurrent', width:110, align: 'center', sortable:true},
        // { title: 'Protected Outlets', field: 'ProtectedOutlets', width: 140, align: 'center', sortable:true}
        { title: model.label, field: 'Label', width:75, align: 'center', sortable:true},
        { title: model.type, field: 'Type', width:190, sortable:true, formatter: function(value) {
          return CBTYPE[value]
        }},
        { title: model.ratecurrent, field: 'RatedCurrent', width:110, align: 'center', sortable:true},
        { title: model.protoutlet, field: 'ProtectedOutlets', width: 140, align: 'center', sortable:true}
      ]];

      gdCBDevInfo.datagrid({
        columns: cols,
        singleSelect: true,
        width: 530,
        height: 375,
        remoteSort: false
      });
      gdCBDevInfo.datagrid("loadData", rows);
    };

    var getDeviceInfoCircuitBreak = function() {
      $.ajax({
        url: 'xhrdevinfocbgetgrid.jsp',
        type: "post", data: EL.Auth.getTocken(),
        dataType : "json",
        success: setDeviceInfoCircuitBreak
      });
    };

    getDeviceInfoOutlet();
    getDeviceInfoCircuitBreak();

    $("#frdevinfo").validate({
      submitHandler: function(form) {
        gdOutletDevInfo.jqEnGrid('destroy');
        gdCBDevInfo.jqEnGrid('destroy');
       }    
    });
  };

})();
/*src/js/updatehistory.js*/
/*
UpdateHistory functionalities
*/

(function(window, document) {

  var self = EL.UpdateHistory = {
    gdfmupdatehistory: null
  };

  self.init = function() {
    var model = MODEL.frupdth;
    self.gdfmupdatehistory = $("#gdfmupdatehistory");

    var setUpdateHistory = function(rows) {
      var cols = [[
        // { title: 'Timestamp', field: 'timestamp', width:120},
        // { title: 'Previous Version', field: 'previousversion', width:120},
        // { title: 'Update Version', field: 'updateversion', width:120},
        // { title: 'Status', field: 'status', width: 120} 
        { title: model.timestamp, field: 'timestamp', width:120},
        { title: model.preversion, field: 'previousversion', width:120},
        { title: model.updversion, field: 'updateversion', width:120},
        { title: model.status, field: 'status', width: 120} 
      ]];

      self.gdfmupdatehistory.datagrid({
        columns: cols,
        singleSelect: true,
        height: 310
      });
      self.gdfmupdatehistory.datagrid("loadData", rows);
    };

    var getUpdateHistory = function() {
      $.ajax({
        url: "xhrfmwareuphistgetgrid.jsp",
        type: "post", data: EL.Auth.getTocken(),
        dataType: "json",
        success: setUpdateHistory
      });
    };

    getUpdateHistory();

  };

})(window, document);
/*src/js/usb.js*/
(function(window,document) {

  //USB functionality
  var self = EL.USB = {};

  self.init = function() {
    $( "input:submit, input:reset, input:button").button();

    var cookie_Value = getAuthCookie("authCookieId");
    cookie_Value = parseInt(cookie_Value);
    var objUSBJson = {"cookie" : cookie_Value};
    var url =  'xhrusbget.jsp'; //'samplejson.json';//  
    var xmlhttp = getXMLObject();                     
    if (xmlhttp) 
    {
      xmlhttp.onreadystatechange  = function() {
        try
        {
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200)//200 
          {   
            var data = xmlhttp.responseText;
            data = JSON.parse(data);
              var privilege_val = data.privilege;
              var chkUSBAccess = parseInt(data.chkusbaccess);
              if (chkUSBAccess == 0) {
              $("#chkEnableUSB").attr('checked', false);
              }else if (chkUSBAccess == 1) {
              $("#chkEnableUSB").attr('checked', true);
              }
            
             if (privilege_val == 0) {
              $("#btnMainSubmit").attr('disabled',true).addClass('disableButton');
             } else {
              $("#btnMainSubmit").attr('disabled',false).removeClass('disableButton');
             }
          }
        }
        catch(e)
        {
          alert("Error Occured At Auth onreadystatechange : " + e.message);
        }
      };
      xmlhttp.open("POST", url, true); 
      xmlhttp.setRequestHeader("Content-Type", "application/json");      
      xmlhttp.send(JSON.stringify(objUSBJson));   
    }   

    $("#frusb").validate({ 
      submitHandler: function(form) {             
        try
        {
          var cookie_Value = getAuthCookie("authCookieId");
          cookie_Value = parseInt(cookie_Value);      
          var chkusbaccess = $('#chkEnableUSB').is(':checked') == true ? 1 : 0;
          var changeUSBJsonObj = {"cookie" : cookie_Value, "chkusbaccess" : parseInt(chkusbaccess)};
          var xmlhttp = getXMLObject();   
          if (xmlhttp) 
          {                   
             xmlhttp.onreadystatechange  = function() {
             try
             {
              if (xmlhttp.readyState == 4 && xmlhttp.status == 200)//200 
              {    
              var data = JSON.parse(xmlhttp.responseText);   
              var uptStatus  = parseInt(data.uptstatus);
              if (uptStatus == 1) {
                 $('#mydialog').dialog('destroy');
                 $('#mydialog').html('');
                 return false;
              } else if (uptStatus == 2)
              {
                window.location.href = 'login.htm';
              }else {
                $('#mydialog').dialog('destroy');
                  $('#mydialog').html('');
                  $("#errordialog").html("Error in Updating USB settings");
                $("#errordialog").dialog('open');
                  return false;                  
              }
            }
           }
           catch(e)
           {
            $("#errordialog").html("Error occured : " + e.message);
            $("#errordialog").dialog('open');
              return false;
          }
         }
         }
         xmlhttp.open("POST", "xhrusbpost.jsp", true); //"samplejson.json"
         xmlhttp.setRequestHeader("Content-Type", "application/json");               
         xmlhttp.send(JSON.stringify(changeUSBJsonObj));   
      }
      catch(e)
      {
        $("#errordialog").html("Error in Updating USB settings : " + e.message);
        $("#errordialog").dialog('open');
         return false;
      }
      }
    });

    EL.Privilege.setButton([$("#btnMainSubmit")], 0x00000800);
  };

})(window, document);
/*src/js/ssh.js*/
(function(window,document) {

  var self = EL.SSH = {};

  self.init = function() {

    var valSshPort, valChkSshval;

    var cookie_Value = getAuthCookie("authCookieId");
    cookie_Value = parseInt(cookie_Value);
    var objSshJson = {"cookie" : cookie_Value};
    //Getting data from the server in JSON format.
    var url = 'xhrsshget.jsp';
    var xmlhttp = getXMLObject();
    if (xmlhttp) 
    {
      xmlhttp.onreadystatechange  = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          var data = xmlhttp.responseText;
          data = JSON.parse(data);
          var cookie = data.cookie;
          valSshPort = data.sshPort;
          valChkSshval = data.chkSshAcs;
          $("#SSH_PORT").val(valSshPort);
          $("#chkEnableSSH").attr('checked', valChkSshval);
        }
      };
      xmlhttp.open("POST", url, true); 
      xmlhttp.setRequestHeader("Content-Type", "application/json");      
      xmlhttp.send(JSON.stringify(objSshJson));   
    }

    //Send data to the server in JSON format.
    function dsendSshForm(sshPortVal, chkSshVal) {
      var cookie_Value = getAuthCookie("authCookieId");
      var cookie_Value = parseInt(cookie_Value);      
      var cookie = cookie_Value;
      var changeSshJson = {"cookie" : cookie, "sshPort" : parseInt(sshPortVal), "chkSshAcs" : chkSshVal};
      var xmlhttp = getXMLObject();   
      if (xmlhttp) {
        xmlhttp.onreadystatechange  = function() {
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {        
            var data = JSON.parse(xmlhttp.responseText);

            if (EL.UpdateStatus(data)) {
              (sshPortVal != valSshPort) && EL.ResetDevice.reboot(30);

              $('#mydialog').dialog('destroy');
              $('#mydialog').html('');
            }
          }
        }
      }
      xmlhttp.open("POST", "xhrsshpost.jsp", true); 
      xmlhttp.setRequestHeader("Content-Type", "application/json");
      xmlhttp.send(JSON.stringify(changeSshJson));
    }

    //Form Validations start
    $("#SSH_holder").mouseover(function() {
      generateTooltips();
    });

    /////////////////////////// validate the contact form////////////////////////////////////
    $("#frssh").validate({
      rules: {
        SSH_PORT: {required: true, digits:true, min: 1, max: 65535}     
      },
      submitHandler: function(form) { 
        var sshPortVal, chkSshVal;
        sshPortVal = $('#SSH_PORT').val();  
        chkSshVal = $('#chkEnableSSH').is(':checked');
        if (sshPortVal != valSshPort || chkSshVal != valChkSshval) {
          dsendSshForm(sshPortVal, chkSshVal);
        } else {
          $('#mydialog').dialog('destroy');
          $('#mydialog').html('');
          return false;
        }
      }
    });
    ///////////////////////// Validation code end ////////////////////////////////////////

    EL.Privilege.setButton([$("#btnMainSubmit")], "0x00040000");

  };

})(window, document);
/*src/js/resetdevice.js*/
(function() {

  var self = EL.ResetDevice = {};

  self.init = function() {
    $("#btnMainSubmit").click(function() {
      self.reboot(30);
    });

    EL.Privilege.setButton([$("#btnMainSubmit")], 0x00002000);
  };

  self.count = 0;

  self.reboot = function(seconds, url) {
    EL.DashBoard.stop();

    var tocken = $.extend(EL.Auth.getJSON(), {reset: 1});

    $.ajax({
      url: "xhrresetdevset.jsp",
      type: "post", data: JSON.stringify(tocken),
      success: function() {
        $('#mydialog').dialog('destroy');
        EL.ResetDevice.reset(seconds, url);
        return false;
      }
    });
  };

  self.reset = function(seconds, url) {
    EL.DashBoard.stop();

    var model = MODEL.master;
    $("#resetDeviceDialog").dialog({
      // title : '<div class="icon-reload">Network Card Reset</div>',
      title : '<div class="icon-reload">{0}</div>'.format(model.resetdevicedl.txt),
      resizable: false,
      width: 285, 
      minHeight: 142,
      modal: true,
      autoOpen: false,
      closeOnEscape: false,
      close: false
    });
    $("#resetDeviceDialog").dialog('open');

    self.count = seconds;
    self.countdown(url);
  };

  self.countdown = function (url) {
    url = url || "login.htm";

    var setTime = function() {
      $("#aredirect").attr("href", url);
      $("#spSecondsAtResetDev").html(self.count);
    };

    var timerid = window.setInterval(function() {
      if (--self.count < 1) {
        window.clearInterval(timerid);
        window.location = url;
      } else {
        setTime();
      }

    }, 1000);

    setTime();
  };


})();




/*src/js/loginset.js*/
(function(window,document) {

  //USB functionality
  var self = EL.LoginSet = {};

  self.init = function() {

    $( "input:submit, input:reset, input:button").button();

    var chkUserBlocking = $('#chkUserBlocking');

    chkUserBlocking.change(function () {
      if (chkUserBlocking.attr('checked')) {
        $('#txtLoginfailCount').attr('disabled', false).removeClass('disableBg');
        $('#drpBlockTimeout').attr('disabled', false).removeClass('disableBg');
      } else {
        $('#txtLoginfailCount').attr('disabled', true).addClass('disableBg');
        $('#drpBlockTimeout').attr('disabled', true).addClass('disableBg');
      }
    });

    chkUserBlocking.change();

    //Getting the data from the sever in JSON format  
    var cookie_Value = getAuthCookie("authCookieId");
    cookie_Value = parseInt(cookie_Value);
    var objLoginSettJson = {"cookie" : cookie_Value}; 
    var xmlhttp = getXMLObject();
    if (xmlhttp) {
      var url = 'xhrloginsetget.jsp';         
      xmlhttp.onreadystatechange  = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          var data = xmlhttp.responseText;
          data = JSON.parse(data);
          var privilege_val = data.privilege;
          var chkUserBlocking_value = parseInt(data.chkuserblocking);
          var existingchkUserBlocking_value = $("#chkUserBlocking").attr('checked');
          if (existingchkUserBlocking_value == true)
            existingchkUserBlocking_value = 1;
          else
            existingchkUserBlocking_value = 0;
          if (chkUserBlocking_value != existingchkUserBlocking_value) {
            $("#chkUserBlocking").click();
          }

          $('#txtLoginfailCount').val(parseInt(data.maxnumfailedlogins));
          //$('#drpBlockTimeout').val(data.blocktimeout);
          $('#drpBlockTimeout')[0].value = data.blocktimeout;
          //$('#drpIdleTimeout').val(data.idletimeout);
          $('#drpIdleTimeout')[0].value = data.idletimeout;

          if (privilege_val == 0) {
            $("#btnMainSubmit").attr('disabled',true).addClass('disableButton');
          } else {
            $("#btnMainSubmit").attr('disabled',false).removeClass('disableButton');
          }
        }
      };
      xmlhttp.open("POST", url, true); 
      xmlhttp.setRequestHeader("Content-Type", "application/json");      
      xmlhttp.send(JSON.stringify(objLoginSettJson));   
    }

    //Form validation
    $("#loginsetholder").mouseover(function() {
      generateTooltips();
    });

    //Sending data to the server in JSON format
    function dsendLoginSetting(url, changeLoginSettJson) {
      var xmlhttp = getXMLObject();
      if (xmlhttp) {
        xmlhttp.onreadystatechange  = function() {
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
          {        
            var data = JSON.parse(xmlhttp.responseText);
            var uptStatus  = parseInt(data.uptstatus);
            if (uptStatus == 1) {
               $('#mydialog').dialog('destroy');
               $('#mydialog').html('');
               return false;
            } else if (uptStatus == 2)
            {
              //window.location.href = 'login.htm';
              window.location.reload();
            } else {
              $('#mydialog').dialog('destroy');
                $('#mydialog').html('');
              $("#errordialog").html("Error: Updating Values! & uptStatus is : " + uptStatus);
              $("#errordialog").dialog('open');
                return false;
            }
          }
        }
      }
      xmlhttp.open("POST", url, true); 
      xmlhttp.setRequestHeader("Content-Type", "application/json");           
      xmlhttp.send(JSON.stringify(changeLoginSettJson));
    }
    // validate the contact form
    $("#frloginset").validate({
      rules: {
        txtloginfailcount: {required:true, digits: true, max: 10, min: 3 }
      },
      submitHandler: function(form) { 
        var maxnumfailedlogins = parseInt($('#txtLoginfailCount').val());
        if (maxnumfailedlogins.length == 0) {
          maxnumfailedlogins = 0;
        }
        var boolchkUserBlocking = $('#chkUserBlocking').is(':checked');
        var intchkUserBlocking;
        if (boolchkUserBlocking) {
          intchkUserBlocking = 1;
        } else {
          intchkUserBlocking = 0;
        }
        var blocktimeout = parseInt($('#drpBlockTimeout').val());
        var idletimeout = parseInt($('#drpIdleTimeout').val());
        var changeLoginSettJson = {"cookie" : cookie_Value,"chkuserblocking":intchkUserBlocking, "maxnumfailedlogins" : maxnumfailedlogins, "blocktimeout" : blocktimeout, "idletimeout" : idletimeout};
        var url = 'xhrsetloginset.jsp';
        dsendLoginSetting(url, changeLoginSettJson);
      }
    });

    EL.Privilege.setButton([$("#btnMainSubmit")], 0x00000400);
  };

})(window, document);
/*src/js/passwordpolicy.js*/
(function(window,document) {

  //USB functionality
  var self = EL.PasswordPolicy = {};

  self.init = function() {

    $( "input:submit, input:reset").button();
    var errorImage = '<img src="images/cross.gif" alt=""/>';
    //Password Aging checkbox functionality
    var chkPasswordAging = $('#chkPasswordAging');

    chkPasswordAging.change(function () {
      if (chkPasswordAging.attr('checked')) {
        $('#drpPasswordAgingInterval').attr('disabled', false).removeClass('disableBg');
      } else {
        $('#drpPasswordAgingInterval').attr('disabled', true).addClass('disableBg');
      }
    });

    chkPasswordAging.change();

    var chkStrongPasswords = $('#chkStrongPasswords');

    chkStrongPasswords.change(function () {

      if (chkStrongPasswords.attr('checked')) {
        $('#txtMinPasswordLength').attr('disabled', false).removeClass('disableBg');
        $('#txtMaxPasswordLength').attr('disabled', false).removeClass('disableBg');
        $('#chkEnforceOneLowercase').attr('disabled', false).removeClass('disableBg');
        $('#chkEnforceOneUppercase').attr('disabled', false).removeClass('disableBg');
        $('#chkEnforceOneNumericCase').attr('disabled', false).removeClass('disableBg');
        $('#chkEnforceOneSpecialCharacter').attr('disabled', false).removeClass('disableBg');
        $('#txtPasswordHistorySize').attr('disabled', false).removeClass('disableBg');
      } else {
        $('#txtMinPasswordLength').attr('disabled', true).addClass('disableBg');
        $('#txtMaxPasswordLength').attr('disabled', true).addClass('disableBg');
        $('#chkEnforceOneLowercase').attr('disabled', true).addClass('disableBg');
        $('#chkEnforceOneUppercase').attr('disabled', true).addClass('disableBg');
        $('#chkEnforceOneNumericCase').attr('disabled', true).addClass('disableBg');
        $('#chkEnforceOneSpecialCharacter').attr('disabled', true).addClass('disableBg');
        $('#txtPasswordHistorySize').attr('disabled', true).addClass('disableBg');
      }

    });

    chkStrongPasswords.change();

    var cookie_Value = getAuthCookie("authCookieId");
    cookie_Value = parseInt(cookie_Value);
    var xmlhttp = getXMLObject();
    var objPwPolicyJson = {"cookie" : cookie_Value};
    if (xmlhttp) {
      var url = 'xhrpwpolicyget.jsp';         
      xmlhttp.onreadystatechange  = function() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
        {   
          var data = xmlhttp.responseText;
          data = JSON.parse(data);                  

          //$('#drpPasswordAgingInterval').val( Math.abs(data.pwdaginginterval) );
          $('#drpPasswordAgingInterval')[0].value = Math.abs(data.pwdaginginterval);
          $('#txtMinPasswordLength').val(parseInt(data.minpwdlen));
          $('#txtMaxPasswordLength').val(parseInt(data.maxpwdlen));

          $("#chkPasswordAging")
            .attr('checked', data.pwdaginginterval > 0)
            .change();

          $("#chkEnforceOneLowercase").attr('checked', data.pswpolicy & 1 ? true : false);
          $("#chkEnforceOneUppercase").attr('checked', data.pswpolicy & 2 ? true : false);
          $("#chkEnforceOneNumericCase").attr('checked', data.pswpolicy & 4 ? true : false);
          $("#chkEnforceOneSpecialCharacter").attr('checked', data.pswpolicy & 8 ? true : false);
          $("#chkStrongPasswords")
            .attr('checked', data.pswpolicy & 16 ? true : false)
            .change();
        }

      }; 
      xmlhttp.open("POST", url, true); 
      xmlhttp.setRequestHeader("Content-Type", "application/json");      
      xmlhttp.send(JSON.stringify(objPwPolicyJson));   
    }

    //Strong Password  checkbox functionality 
    $("#pwpolicyholder").mouseover(function () {
      generateTooltips();
    });

    function dsendPwdPlcyForm(url, changePwdPlcyJson) {
      var xmlhttp = getXMLObject();
      if (xmlhttp) {                   
        xmlhttp.onreadystatechange  = function() {
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
          {        
            var data = JSON.parse(xmlhttp.responseText);

            if (EL.UpdateStatus(data)) {
              $('#mydialog').dialog('destroy');
              $('#mydialog').html('');
            }
          }
        }
      }
      xmlhttp.open("POST", url, true); 
      xmlhttp.setRequestHeader("Content-Type", "application/json");
      xmlhttp.send(JSON.stringify(changePwdPlcyJson));
    }

    // validate the contact form
    $("#frpwpolicy").validate({
      rules: {
        txtminpasslength: { required: true, digits: true, min:8, max: 32},
        txtmaxpasslength: { required: true, digits: true, min: 16, max: 32, greaterThan: "#txtMinPasswordLength"},
        txtpasshistorysize: { required: true, number: true, max: 12, min: 1 }
      },
      submitHandler: function(form) { 
        var chkPasswordAging, chkStrongPasswords, pswpolicy = 0;

        var pwdaginginterval = parseInt($('#drpPasswordAgingInterval').val());
        var minpwdlen = parseInt($('#txtMinPasswordLength').val());
        if (minpwdlen.length == 0) {
          minpwdlen = 0;
        }
        var maxpwdlen = parseInt($('#txtMaxPasswordLength').val());
        if (maxpwdlen.length == 0) {
          maxpwdlen = 0;
        }

        var boolchkPasswordAging = $("#chkPasswordAging").is(':checked');
        if (!boolchkPasswordAging) {
          pwdaginginterval = 0 - pwdaginginterval;
        }

        pswpolicy = ($("#chkEnforceOneLowercase").is(':checked') ? 1 : 0)
          | ($("#chkEnforceOneUppercase").is(':checked') ? 2 : 0)
          | ($("#chkEnforceOneNumericCase").is(':checked') ? 4 : 0)
          | ($("#chkEnforceOneSpecialCharacter").is(':checked') ? 8 : 0)
          | ($("#chkStrongPasswords").is(':checked') ? 16 : 0);

        var changePwdPlcyJson = {"cookie" : cookie_Value, "pwdaginginterval" : pwdaginginterval, "strongpwd" : chkStrongPasswords,  "minpwdlen" : minpwdlen, "maxpwdlen" : maxpwdlen, "pswpolicy": pswpolicy};
        var url = 'xhrpwpolicyset.jsp'; 
        dsendPwdPlcyForm(url, changePwdPlcyJson);
      }
    });

    chkPasswordAging.change();
    chkStrongPasswords.change();

    EL.Privilege.setButton([$("#btnMainSubmit")], 0x00000400);
  };

})(window, document);
/*src/js/datalogset.js*/
/*User*/
(function() {

  var self = EL.DataLogSet = {}

  self.init = function() {

    var cookie_Value = getAuthCookie("authCookieId");
    cookie_Value = parseInt(cookie_Value);
    var objDataLogJson = { "cookie" : cookie_Value};

    var data;
    var cookie;
    var xmlhttp = getXMLObject();

    var $chkDatalog = $("#chkDatalog"),
        $txtLogInterval = $('#txtLogInterval');

    if (xmlhttp) {
      xmlhttp.onreadystatechange  = function() {

        if (xmlhttp.readyState == 4  && xmlhttp.status == 200) {  
          data = JSON.parse(xmlhttp.responseText);
          cookie = parseInt(data.cookie);

          var loginterval = parseInt(data.loginterval);

          $txtLogInterval.val(loginterval);
          $chkDatalog.attr("checked", data.logenable ? true : false);

          /*
          if (privilege_val == 0) {
            $("#btnMainSubmit").attr('disabled',true).addClass('disableButton');
          } else {
            $("#btnMainSubmit").attr('disabled',false).removeClass('disableButton');
          }
          */
        }

      }
      xmlhttp.open("POST", "xhrdatalogget.jsp", true); 
      xmlhttp.setRequestHeader("Content-Type", "application/json"); 
      xmlhttp.send(JSON.stringify(objDataLogJson));
    }
    
    $( "input:submit, input:reset, input:button").button();
    var errorImage = '<img src="images/cross.gif" alt=""/>';

    function send_DataLogSettings(url ,objDataLogJson) {
      var xmlhttp = getXMLObject();
      if (xmlhttp) {
        xmlhttp.onreadystatechange  = function() {
          if (xmlhttp.readyState == 4  && xmlhttp.status == 200) 
          { 
            data = JSON.parse(xmlhttp.responseText);
            var uptstatus = parseInt(data.uptstatus);
            if (uptstatus == 1) 
              {
              $('#mydialog').dialog('destroy');
              $('#mydialog').html('');  
              return false;
            }
            else if ( uptstatus == 2 )
            {
              window.location.href = 'login.htm';
            } 
            else {
              $("#errordialog").html("Error: Updating Values! & uptstatus is : " + uptstatus);
              $("#errordialog").dialog('open');
              $('#mydialog').dialog('destroy');
              return false;
            }
          }
        }
        xmlhttp.open("POST", url, true); 
        xmlhttp.setRequestHeader("Content-Type", "application/json"); 
        xmlhttp.send(JSON.stringify(objDataLogJson));
      }
    }

    $("#dataLogHolder").mouseover(function() {
      generateTooltips();
    });

    // validate the contact form
    $("#frdataLog").validate({
      rules: {
        txtLogInterval: {required: true,number:true, min: 1, max: 1440},  
      },
      submitHandler: function(form) { 
        url = "xhrdatalogset.jsp";
        var loginterval = parseInt($txtLogInterval.val()),
            logenable = $chkDatalog.is(":checked") ? 1 : 0;

        if (loginterval.length == 0) {
          loginterval = 0;
        }
        var objDataLogJson = {"cookie" : cookie_Value, "loginterval" : loginterval, "logenable": logenable }
        send_DataLogSettings(url,objDataLogJson);
      }
    });


    EL.Privilege.setButton([$("#btnMainSubmit")], 0x00000002);

  };

})();




/*src/js/uploadcfg.js*/
(function(window) {

  var self = EL.UploadCfg = {};

  self.init = function(tag) {
    $('.fileUpload').fileUploader({
      limit: 1,
      allowedExtension: "",
      beforeEachUpload: function() {
        self.forceDialog(true);
      },
      afterEachUpload: function() {
        if ($(".px-widget .error").size() < 1) {
          if (tag == "config") {
            self.applyConfig();
          } else {
            self.applyUpdate();
          }
        }
      }
    });

    /*
    $("#pxupload1").click(function(e) {
      e.preventDefault();
      e.stopPropagation();

      var $file = $("input[type=file]", $(this));
      console.log($file);
      $file.trigger("click");
    });
    */

  };

  //Make the dialog closable?
  self.forceDialog = function(mode) {
    mode
      ? $(".ui-dialog:visible").addClass("forcedlg")
      : $(".ui-dialog:visible").removeClass("forcedlg");
  };

  self.reportProgress = function(url, needTime) {
    var restart = function() {
      self.forceDialog(false);
      EL.ResetDevice.reset(30);
    };

    if (EL.Master.pducount > 1) {
      var $loadingbar = $("#loadingbar");
      $loadingbar.progressbar();

      var easyTime = 0,
          interval = 1000;

      var refresh = function() {
        window.setTimeout(function() {
          easyTime += interval;

          var value = (easyTime / needTime) * 100 | 0;

          $loadingbar.progressbar('setValue', value);

          if (parseInt(value) < 100) {
            refresh();
          } else {
            restart();
          }
        }, interval);
      };

      refresh();
    } else {
      restart();
    }
  };

  self.applyUpdate = function() {
    var mode = MODEL.blkconf;
    $(".upload-data .status").html(
        mode.uploadsucc
      + '<div id="loadingbar"></div>'
    );

    //3 minutes for each.
    self.reportProgress("xhrprogress.jsp", 3 * 60 * 1000 * (EL.Master.pducount - 1));
    //EL.ResetDevice.reset(30);
  };

  self.applyConfig = function() {
    var mode = MODEL.blkconf;
    $(".upload-data .status").html(
        mode.uploadsucc
      + '<input class="btn" id="applyconfig" value=" {0} " />'.format(mode.applyconf)
      + '<div id="loadingbar"></div>'
    );


    $("#applyconfig").click(function() {
      EL.Message2(mode.pleasewait); 
      $.ajax({contentType: "application/json",
        url: "xhrfwconfigapply.jsp",
        type:"post", data: EL.Auth.getTocken(),
        dataType:"json",
        success: function(data) {
          if (EL.UpdateStatus(data)) {
            EL.Close();
            $("#applyconfig").hide();
            //11 seconds for each.
            self.reportProgress("xhrprogress.jsp", 11 * 1000 * (EL.Master.pducount - 1));
            //EL.ResetDevice.reboot(30);
          }
        }
      });
      
    });
  };

})(window);
/*src/js/changepsw.js*/
(function() {

  var self = EL.ChangePsw = function() {
    var $changepsw_result = $("#changepsw_result");

    var submitHandler = function(form) {
      var oldpassword, newPassword;
      oldpassword   = $('#txtOldpassword').val();
      newPassword   = $('#txtPassword').val();
      var isUpdated = updateNewPassword(oldpassword, newPassword);
      return false;
    };

    //Send data to the server in JSON format to Change Password.
    function updateNewPassword(txtOldpassword, newPassword) {
      var model = MODEL.changepw;
    
      var changePasswordJson = $.extend(
        {"oldpassword" : txtOldpassword, "newpassword" : newPassword},
        EL.Auth.getJSON()
      );

      $.ajax({
        url: "xhrchangepwpost.jsp",
        type: "post", data: JSON.stringify(changePasswordJson),
        dataType : "json",
        success: function(data) {
          if (EL.UpdateStatus(data)) {
            $('#mydialog').dialog('destroy');
            $('#mydialog').html('');
          } else {
            $changepsw_result
              // .html('Change Password Failed.')
              .html(model.chgpwfail)
              .show();
          }
        }
      });
    }

    $('#txtOldpassword')
      .focus(function() {
        $changepsw_result.hide();
      })
      .focus();

    var getPasswordPolicy = function() {
      $.ajax({
        url: "xhrpwpolicyget.jsp",
        type: "post", data: EL.Auth.getTocken(),
        dataType: "json",
        success: function(data) {
          /*{"pwdpolicy":0,"pwdaginginterval":86400,"minpwdlen":8,"maxpwdlen":32,"pswpolicy":11}*/
          var min = data.minpwdlen,
              max = data.maxpwdlen,
              pswpolicy = data.pswpolicy,
              policy = {
                lowerChar : pswpolicy & 1 ? true: false,
                upperChar : pswpolicy & 2 ? true: false,
                numberChar : pswpolicy & 4 ? true: false,
                specialChar : pswpolicy & 8 ? true: false
              };

          //strong password dones't enabled?
          if ((pswpolicy & 16) == 0) {
            min = 8;
            max = 32;
            policy = {};
          }

          $("#frchangepw").validate({
            rules: {
              //txtOldpassword: {required: true, minlength: 6, maxlength: 32},
              txtPassword: $.extend({required: true, minlength: min, maxlength: max, notEqualTo:"#txtOldpassword"}, policy),
              txtConfirmPassword: $.extend({required: true, equalTo:"#txtPassword"}, policy)
            },
            submitHandler: submitHandler
          });
        }
      });
    };

    getPasswordPolicy();

    EL.Privilege.setButton([$("#btnMainSubmit")], 0x00000080);
  };

}());
/*src/js/eventrule.js*/

(function(window) {

  EL.EventRule = function() {

    var $tree = $(".evttree"),
        $grid = $(".evtgrid"),
        $save = $("#btnMainSubmit"),
        //user container
        $usercb = $(".usercb"),
        actions,
        users;

    //current operation SMTP node
    var curNode;

    //tree event sub nodes
    var getEvents = function(val) {
      var nodes = [];
      for(var n in EVENTTYPE) {
        if (val & parseInt(n)) {
          nodes.push({
            id     : n,
            text   : EVENTTYPE[n],
            checked: false 
          });
        }
      }
      return nodes;
    };

    //tree structures
    var getNodes = function(rules) {

      var nodes = [];

      for(var key in rules) {

        var name = EVENTNAME[key],
            val = rules[key];

        var node = {
            id : key,
            text : name || key
          };

        if (!name) {
          node.children = getNodes(val);
        } else {
          node.children = getEvents(val);
        }

        nodes.push(node);
      }

      return nodes;
    };

    /*
    Get event rule tree (full tree without select nodes)
    */
    var initCtrls = function() {
      var model = MODEL.evtrule;

      //initial tree
      var trees = getNodes(EVENTRULE);

      $tree.tree({
        checkbox : true
      });

      $tree.tree("loadData", trees);

      //initial datagrid
      var cols = [[
        // { field:"name", title:"Event Name", width:230, formatter: function(value) {
        { field:"name", title:model.eventname, width:230, formatter: function(value) {
          return EVENTNAME[value];
        }},
        // { field:"rule", title:"Actions", width:340, formatter:function(value) {
        { field:"rule", title:model.action, width:340, formatter:function(value) {
          var rule = [];
          for(var item in EVENTTYPE) {
            (parseInt(item) & value) && rule.push(EVENTTYPE[item]);
          }
          return rule.join(', ');
        }}
      ]];

      $grid.datagrid({
        columns: cols,
        singleSelect: true,
        onSelect: selectGridHandler,
        height: 344
      });

      //save button
      $usercb.on("click", "input", function() {
        if (!curNode) return;

        var $selUsers = $(".usercb input"),
            value = 0;

        $selUsers.each(function() {
          var $input = $(this);
          $input.is(":checked") && ( value = value | parseInt($input.val()) );
        });

        $(curNode.target).data({ users: value });
      });

      $save.click(function() {
        var saveTocken = getSaveTocken();

        $.ajax({
          url: "xhrevtruleset.jsp",
          type: "post", data: JSON.stringify( $.extend(saveTocken, EL.Auth.getJSON()) ),
          dataType : "json",
          success: function(data) {
            if (EL.UpdateStatus(data)) {
              $("#mydialog").dialog("close");
              $("#mydialog").html('');
            }
          }
        });
      });
    };

    var selTree = function(data) {

      //select nodes
      for(var key in data) {
        var node = $tree.tree("find", key),
            val = parseInt(data[key]);

        if (node && node.target) {
          var nodes = $tree.tree("getChildren", node.target);

          for(var i = 0, len = nodes.length; i < len ; i++) {
            var nodesub = nodes[i],
                nodeval = parseInt(nodesub.id),
                target = nodesub.target;

            (val & nodeval) && $tree.tree("check", target);

            //if it's send SMTP type keep the lower 16 bits (users)
            (val & 0x00010000) && $(target).data({ users: val & 0xffff });
          }
        }
      }

      //bind select events
      $tree.tree({
        onCheck: checkTreeHandler,
        onSelect: selectTreeHandler
      });
          
    };

    /*
    Get save data tocken from tree;
    */
    var getSaveTocken = function() {

      var saveTocken = {};
      for(var key in window.EVENTNAME) saveTocken[key] = 0;

      var nodes = $tree.tree("getChecked");

      for(var i = 0, len = nodes.length; i < len; i++) {

        var node = nodes[i],
            nodeval = parseInt(node.id);

        //Merge subval to parent value;
        if (nodeval) {

          var target = node.target,
              parent = $tree.tree("getParent", target),
              value = $(target).data("users") || 0;

          //IF it's not SMTP, remove the lower bits of value;
          (nodeval != 0x00010000) && (value = 0);
          //If beacon flash is not connected, ignore the selected beacon node;
          if ((nodeval == 0x00040000) && ((actions & 0x00040000) == 0)) continue;

          saveTocken[parent.id] = saveTocken[parent.id] | nodeval | value;

          //console.log(parent, target, nodeval, value);
        }
      }

      return saveTocken;
    };

    var selectUsers = function(value) {
      var $selUsers = $(".usercb input");

      $selUsers.each(function() {
        var $input = $(this);

        if (value & parseInt($input.val())) {
          $input.attr("checked", true);
        } else {
          $input.removeAttr("checked", true);
        }
      });
    };

    var checkTreeHandler = function(node, selected) {
      //update user infor if necessary
      selectTreeHandler(node);

      //refresh data in datagrid
      var saveTocken = getSaveTocken(),
          rows = [];

      for(var key in saveTocken) {
        var val = saveTocken[key];
        //need to remove the empty rules
        val && rows.push({ name: key, rule: saveTocken[key] });
      }

      $grid.datagrid("loadData", {rows: rows});
    };

    //show or hide users options?
    var selectTreeHandler = function(node) {
      if (node && node.id == 0x00010000 && node.checked) {
        $usercb.show();
        curNode = node;

        //select
        var users = $(node.target).data("users") || 0;
        selectUsers(users);

      } else {
        $usercb.hide();
        curNode = null;
      }
    };

    //Select SMTP nodes, under certain node name
    var selectSMTP = function(row) {
      var node = $tree.tree("find", row["name"]);

      if (node && node.target) {
        var nodes = $tree.tree("getChildren", node.target);

        for(var i = 0, len = nodes.length; i < len ; i++) {
          var nodesub = nodes[i],
              nodeval = parseInt(nodesub.id),
              target = nodesub.target;

          if (nodeval == 0x00010000) {
            $(target).click();
            return;
          }
        }
      }
    };

    //select the row, if contains SMTP message select users;
    var selectGridHandler = function(idx, row) {
      var rule = row["rule"];
      if (rule & 0x00010000) {
        selectSMTP(row);

        $usercb.show();
        //selectUsers( rule & 0xffff );
      } else {
        $usercb.hide();
      }
    };

    //
    var getRules = function() {
      $.ajax({
        url: "xhrevtruleget.jsp",
        type: "post", data: EL.Auth.getTocken(),
        dataType : "json",
        success: function(data) {
          selTree(data);
          checkTreeHandler();
        }
      });
    };

    //Users
    var getUsers = function() {
      $.ajax({
        url: "xhrusersgetgrid.jsp",
        type: "post", data: EL.Auth.getTocken(),
        dataType: "json",
        success: function(data) {
          users = data;
          var $container = $(".evtrule .usercb");

          for(var i = 0, len = users.length; i < len; i++) {
            var row = data[i];

            $container.append(
              '<input type="checkbox" name="user" value="' + (1 << parseInt(row["id"])) + '" /> '
              + row["username"]
              + "&nbsp;"
            );
          }
        }
      });
    };

    //Actions
    var getActions = function() {
      $.ajax({
        url: "xhrevtactionget.jsp",
        type: "post", data: EL.Auth.getTocken(),
        success: function(action) {
          actions = parseInt(action);
          ((actions & 0x00040000) == 0) && $(".evttree  *[node-id=262144] .tree-checkbox").addClass("disabled");

          //After loading the action getRules
          getRules();
        }
      });
    };


    initCtrls();
    window.setTimeout(getActions, 300);
    //window.setTimeout(getRules,   600);
    window.setTimeout(getUsers,   600);

    EL.Privilege.setButton([$("#btnMainSubmit")], 0x00000008);

  };

})(window);
/*src/js/smtp.js*/
(function() {

  EL.SMTP = function() {
    var model = MODEL.smtp;

    var submitButtonID = "btnMainSubmit";

    $('#btnSendTestEmailSMTP').click(function () {
      $('#txtRecipientEmailAddress').attr('disabled', false).removeClass('disableBg');
      submitButtonID = "btnSendTestEmailSMTP";
      $('#frsmtpone').submit(); 
    });
    
    $('#btnMainSubmit').click(function () {
      submitButtonID = "btnMainSubmit";
      $('#txtRecipientEmailAddress').attr('disabled', true).addClass('disableBg');
      $("#frsmtpone").submit();
      $('#txtRecipientEmailAddress').attr('disabled', false).removeClass('disableBg');
    });
    
    function resetFields() {
      $("img[id*='error']").remove();
      $("img[src*='images/tick.gif']").remove();
      var elementsByName = document.getElementsByTagName('input');
      for (var i = 0; i < elementsByName.length; i ++ ) {
        elementsByName[i].style.borderColor = '';
      }
    }
        
    //$( "input:submit, input:reset, input:button").button();

    //server authentication checkbox functionality
    var chkRequiredAuth = $('#chkRequiredAuth');

    chkRequiredAuth.change(function () {
      if (chkRequiredAuth.attr('checked')) {
        $('#txtUserNameSMTP').attr('disabled', false).removeClass('disableBg');
        $('#txtPasswordSMTP').attr('disabled', false).removeClass('disableBg');
      }else
      {
        $('#txtUserNameSMTP').attr('disabled', true).addClass('disableBg');
        $('#txtPasswordSMTP').attr('disabled', true).addClass('disableBg');
      }
    });
    
    chkRequiredAuth.change(); 

    var cookie_Value = getAuthCookie("authCookieId");
    cookie_Value = parseInt(cookie_Value);  
    var xmlhttp = getXMLObject(); 
    var objSmtpJson = { "cookie" : cookie_Value};     
    var privilege_value;
    if (xmlhttp)
    {
      xmlhttp.onreadystatechange = function() {

        if (xmlhttp.readyState == 4  && xmlhttp.status == 200) {
          var data = JSON.parse(xmlhttp.responseText);
          $("#txtServerName").val(data.servername);
          $("#txtPort").val(data.port);
          $("#txtSenderEmailAddress").val(data.senderemail);
          $("#txtNumberofSendingRetries").val(data.nosendingretries);
          $("#txtTimeIntervalforRetries").val(data.timeintervalforretries);
          //$("#chkRequiredAuth").attr('checked' ,data.chkreqauth);
          var chkreqauth_value = parseInt(data.chkreqauth);
          if (chkreqauth_value) {
            $("#chkRequiredAuth").attr("checked", "checked");
            $('#txtUserNameSMTP').attr('disabled', false).removeClass('disableBg');
            $('#txtPasswordSMTP').attr('disabled', false).removeClass('disableBg');
            $("#txtUserNameSMTP").val(data.username);
            $("#txtPasswordSMTP").val(data.password);
          } else {
            $("#chkRequiredAuth").removeAttr("checked");
            $("#txtUserNameSMTP").val('');
            $("#txtPasswordSMTP").val('');  
            $('#txtUserNameSMTP').attr('disabled', true).addClass('disableBg');
            $('#txtPasswordSMTP').attr('disabled', true).addClass('disableBg');
          }
        }

      }
      xmlhttp.open("POST", "xhrsmtpget.jsp" , true); //"samplejson.json"
      xmlhttp.setRequestHeader("Content-Type", "application/json"); 
      xmlhttp.send(JSON.stringify(objSmtpJson));
    } 


    $("#SMTPholder").mouseover(function() {
      //alert('mouserover event alert on SMTP holder');
      generateTooltips();
    });
   // validate the contact form
    $("#frsmtpone").validate({
      rules: {
        txtServerName: {required: true, maxlength:64},
        txtPort: {required: true, number:true,range:[1, 65535]},
        txtSenderEmailAddress: {required: true, email:true}, 
        txtsendingretryscount: {required: true,number:true,range:[0,10]},
        txtTimeIntervalforRetries: {required: true,number:true,range:[1,60]},
        txtUserNameSMTP: {required:true, minlength:1, maxlength:32},
        txtpassword: {required:true, minlength:3, maxlength:32},
        txtrecipientemail: {required: true, email:true}
      },
      submitHandler: function(form) {
        var cookie_Value = getAuthCookie("authCookieId");
        cookie_Value = parseInt(cookie_Value);  
        var url, objSMTPJson;         
        var servername=$("#txtServerName").val();
        var port= parseInt($("#txtPort").val());
        var senderemail=$("#txtSenderEmailAddress").val();
        var nosendingretries= parseInt($("#txtNumberofSendingRetries").val());
        var timeintervalforretries=parseInt($("#txtTimeIntervalforRetries").val());
        var chkreqauth=$("#chkRequiredAuth").is(':checked');
        var username =$("#txtUserNameSMTP").val();
        var pasword=$("#txtPasswordSMTP").val();
        var recipientmailaddress=$("#txtRecipientEmailAddress").val();
        if (chkreqauth) {             
          chkreqauth=1;             
          }
        else{
          chkreqauth=0; 
          username= "";
          pasword= "";
        }
        if (submitButtonID == "btnSendTestEmailSMTP")
        {
          url = "xhrsmtpsendmailpost.jsp";
          objSMTPJson = { "cookie" : cookie_Value ,"servername" : servername, "port" :port, "senderemail" :senderemail,
                  "nosendingretries":nosendingretries, "timeintervalforretries":timeintervalforretries, "chkreqauth" :chkreqauth,
                  "username" :username, "password" : pasword, "recipientmailaddress" : recipientmailaddress};
        }else if (submitButtonID == "btnMainSubmit")
        {
          url = "xhrsetsmtppost.jsp";
          objSMTPJson = { "cookie" : cookie_Value ,"servername" : servername, "port" :port, "senderemail" :senderemail,
                  "nosendingretries":nosendingretries, "timeintervalforretries":timeintervalforretries, "chkreqauth" :chkreqauth,
                  "username" :username, "password" : pasword };             
        }
        dsendSMTP(url, objSMTPJson);
        //return false;
      }
     });
        
    $("#errordialog_send").dialog({
      // title:  '<img src="images/16x16/email.png" alt=icon/>   Testing SMTP configuration',
      title:  '<div class="icon-testemail">  {0}  </div>'.format(model.testsmtp),
      resizable: false,
      width: 300, 
      height: 120,
      modal: true,
      autoOpen: false,
      dialogClass: 'ajaxerrdlg'
    });

    var modelbt = MODEL.buttons;
    $("#errordialog_result").dialog({
      // title:  '<img src="images/16x16/email.png" alt=icon/>   Testing SMTP configuration',
      title:  '<div class="icon-testemail">  {0}  </div>'.format(model.testsmtp),
      resizable: false,
      width: 300, 
      height: 250,
      modal: true,
      autoOpen: false,
      dialogClass: 'sample',
      buttons: {
        "OK" : {
          // text: "OK",
          text: modelbt.oks,
          "id": "btnOkAtErrorDialogResult",
          click: function() {
            $( this ).dialog( "close" );
          }
        }
      },
      open: function(event, ui) {
        $(this).closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
      } 
    });       
    
    function dsendSMTP(url, objSMTPJson)
    {
      submitbtn="";
      var xmlhttp = getXMLObject();
      $('#btnCancelatErrorDialogSend').click(function () {
        xmlhttp.abort();
        $("#errordialog_send").dialog('close');
      });
      if (xmlhttp) 
      {       
        var spnSmtpSend = document.getElementById('spnSmtpSend');
        var spnSmtpResult = document.getElementById('spnSmtpResult');
        if (submitButtonID == "btnSendTestEmailSMTP") {
          // spnSmtpSend.innerHTML = "Sending test email, please wait ..."
          spnSmtpSend.innerHTML = model.testemailinfo;
          $('#errordialog_send').dialog('open');  
        }
        xmlhttp.onreadystatechange  = function() {
          try
          {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200)//0 
            {   
              var data, uptstatus;  
              data = JSON.parse(xmlhttp.responseText);
              uptstatus  = parseInt(data.uptstatus);
              if (submitButtonID != "btnSendTestEmailSMTP") {
                $('#errordialog_send').dialog('close');               
                if (uptstatus == 1)
                {
                  $('#mydialog').dialog('destroy');
                  $('#mydialog').html('');
                  destroySendDialogs();
                }
                else if ( uptstatus == 2 ) {
                  window.location.reload();
                } 
                else {  
                  $("#errordialog").html(model.errorinfo + uptstatus);
                  $("#errordialog").dialog('open');           
                  $('#mydialog').dialog('destroy'); 
                  destroySendDialogs();         
                  return false;
                } 
              }else if (submitButtonID != "btnMainSubmit") {            
                $('#errordialog_send').dialog('close'); 
                if (uptstatus == 0)
                {                                                                   
                  spnSmtpResult.innerHTML = model.probleminfo;
                  spnSmtpResult.innerHTML += model.checkinfo;
                }
                else if (uptstatus == 1)
                {
                  spnSmtpResult.innerHTML = model.succinfo;
                }
                else if (uptstatus == 2)
                {
                  window.location.reload();
                }
                else if (uptstatus == 3) {
                  spnSmtpResult.innerHTML = model.probleminfo;
                  spnSmtpResult.innerHTML += model.checkinfo;
                  spnSmtpResult.innerHTML += model.errorname;
                }
                else if (uptstatus == 4) {
                  spnSmtpResult.innerHTML = model.probleminfo;
                  spnSmtpResult.innerHTML += model.checkinfo;
                  spnSmtpResult.innerHTML += model.errorconn;
                }
                else if (uptstatus == 5) {
                  spnSmtpResult.innerHTML = model.probleminfo;
                  spnSmtpResult.innerHTML += model.checkinfo;
                  spnSmtpResult.innerHTML += model.errordns;
                }
                else
                {                                                                   
                  spnSmtpResult.innerHTML = model.probleminfo;
                  spnSmtpResult.innerHTML += model.checkinfo;
                }
                $('#errordialog_result').dialog('open');
              }
            }
          }
          catch(e)
          {
            alert(model.errorsmtp + e.message);
            return false;
          }
        }         
        xmlhttp.open("POST", url, true);
        xmlhttp.setRequestHeader("Content-Type", "application/json"); 
        xmlhttp.send(JSON.stringify(objSMTPJson));
      }
    }   
    
    function destroySendDialogs() {
      $('#errordialog_send').dialog('destroy');
      $('#errordialog_send').remove();
      $('#errordialog_result').dialog('destroy');
      $('#errordialog_result').remove();  
    }

    EL.Privilege.setButton([$("#btnMainSubmit"), $("#btnSendTestEmailSMTP")], 0x00080000);

  };

}());
/*src/js/ldap.js*/
(function() {

  EL.LDAP = function() {
    var model = MODEL.ldap;
  
    var BITENABLE = 128,
        BITSALE	  = 64,
        BITBIND   = 32,
        BITTYPE   = 1;

    var $ldapenable   = $("#ldapenable"),
        $ldaptype     = $("#ldaptype"),
        $ldaphost     = $("#ldaphost"),
        $ldapport     = $("#ldapport"),
        $ldapbind     = $("#ldapbind"),
        $ldapdn       = $("#ldapdn"),
        $ldapsasl     = $("#ldapsasl"),
        $ldapauth     = $("#ldapauth"),
        $ldapdomain   = $("#ldapdomain"),
        $ldappass     = $("#ldappass"),
        $ldaprepass   = $("#ldaprepass"),
        $ldapbasedn   = $("#ldapbasedn"),
        $ldapnameattr = $("#ldapnameattr"),
        $ldapuser     = $("#ldapuser"),
        $ldapusername = $("#ldapusername"),
        $ldappassword = $("#ldappassword"),
        $btnldaptest  = $("#btnldaptest"),
        $chkldaptest  = $("#chkldaptest"),
        $form         = $("#ldap_holder form");

    var setLDAP = function(data) {
        $ldapenable.attr("checked", data.ldapebst & BITENABLE ? true : false);
        //$ldaptype.val(data.ldapebst & BITTYPE ? 1 : 0);
        $ldaptype[0].value = data.ldapebst & BITTYPE ? '1' : '0';

        $ldaphost.val(data.ldaphost);
        $ldapport.val(data.ldapport);
        $ldapbind.attr("checked", data.ldapebst & BITBIND ? true : false);
        $ldapsasl.attr("checked", data.ldapebst & BITSALE ? true : false);
        $ldapauth.val(data.ldapauth);
        $ldapdomain.val(data.ldapdomain);
        $ldapdn.val(data.ldapdn);
        $ldappass.val(data.ldappass);
        $ldaprepass.val(data.ldappass);
        $ldapbasedn.val(data.ldapbasedn);
        $ldapnameattr.val(data.ldapnameattr);
        $ldapuser.val(data.ldapuser);

        $ldapenable.change();
        $ldaptype.change();
        $ldapsasl.change();
    };

    var sendLDAP = function(istest, cb) {
      var url = istest ? "xhrldaptest.jsp" : "xhrldapset.jsp";

      $chkldaptest
        .attr("checked", istest)
        .change();

      if (!$form.valid()) return;

      var $ldapebst = 
        (($ldapenable.is(":checked") ? 1 : 0) << 7) |
        (($ldapsasl.is(":checked") ? 1 : 0) << 6) |
        (($ldapbind.is(":checked") ? 1 : 0) << 5) |
        ($ldaptype.val());

      var saveToken = {
        ldapebst:     $ldapebst,
        ldaphost:     $ldaphost.val(),
        ldapport:     parseInt($ldapport.val()),
        ldapauth:     $ldapauth.val(),
        ldapdomain:   $ldapdomain.val(),
        ldapdn:       $ldapdn.val(),
        ldappass:     $ldappass.val(),
        ldapbasedn:   $ldapbasedn.val(),
        ldapnameattr: $ldapnameattr.val(),
        ldapuser:     $ldapuser.val()
      };

      istest && $.extend(saveToken, {
        username: $ldapusername.val(),
        password: $ldappassword.val()
      });

      $.ajax({
        url: url,
        type: "post", data: JSON.stringify($.extend(saveToken, EL.Auth.getJSON())),
        dataType: istest ? "html" : "json",
        success: function(data) {
          if (EL.UpdateStatus(data)) {
            EL.Master.removeDialog();
          }

          cb && cb(data);
        }
      });
    };

    var getLDAP = function() {
      $form.validate({
        rules: {
          ldaphost:     {required:true, maxlength:64},
          ldapport:     {required:true, number:true, range: [1, 65535]},
          ldapdn:       {required:true, minlength:1, maxlength:64},
          ldappass:     {required:true, minlength:1, maxlength:32},
          ldapdomain:   {required:true, minlength:3, maxlength:32},
          ldaprepass:   {required:true, equalTo: "#ldappass"},
          ldapbasedn:   {required:true, minlength:1, maxlength:64},
          ldapnameattr: {required:true, minlength:1, maxlength:64},
          ldapuser:     {required:true, minlength:1, maxlength:64},
          ldapusername: {required:true, minlength:3, maxlength:32},
          ldappassword: {required:true, minlength:1, maxlength:32}
        },
        submitHandler: function(){

        }
      });

      $.ajax({
        url: "xhrldapget.jsp",
        type: "post", data: EL.Auth.getTocken(),
        dataType: "json",
        success: setLDAP
      });
    };

    getLDAP();

    //LDAP type changed: if it's AD, checked the "Use Bind Credentials";
    $ldaptype.change(function() {
      if ($ldapenable.is(":checked")){
        if ($ldaptype.val() == "1") {
          $ldapbind.attr("disabled", true);
          $ldapbind.attr("checked", true);
        } else {
          $ldapbind.attr("disabled", false);
        }
        $ldapbind.change();
      }
    });

    /*Enable/disable function*/
    $ldapsasl.change(function() {
      // var flag = !$ldapsasl.is(":checked");
      var flag1 = $ldapenable.is(":checked");
      if(flag1){
        var flag2 = !$ldapsasl.is(":checked");
        $ldapauth.attr("disabled", flag2);
        $ldapdomain.attr("disabled", flag2);
      }
    });

    $ldapbind.change(function() {
      var flag1 = $ldapenable.is(":checked");
      if(flag1){
        var flag2 = !$ldapbind.is(":checked");
        $ldapdn.attr("disabled", flag2);
        //$ldapauth.attr("disabled", flag);
        $ldappass.attr("disabled", flag2);
        $ldaprepass.attr("disabled", flag2);
      }
    });

    $ldapenable.change(function() {
      var flag = $ldapenable.is(":checked");
      // $("#ldap_holder .body input, #ldap_holder .body select").attr("disabled", !flag);
      $("#ldap_holder .body input, #ldap_holder .body select").attr("disabled", !flag);
      if (flag) {
        $ldapbind.change();
        $ldapsasl.change();
      }
    }).change();

    $chkldaptest.change(function() {
      var flag = $chkldaptest.is(":checked");
      $("#ldaptest input").attr("disabled", !flag);
    }).change();

    $("#btnMainSubmit").click(function(){
      sendLDAP(false);
    });

    /*Test LDAP*/
    $btnldaptest.click(function(){
      sendLDAP(true, function(status) {
        status = parseInt(status);

        var html = "";

        // html += "<div class='{0}'>Connection test: {1}</div>".format( 
        //   status > 0 ? "icon-apply" : "icon-cross",
        //   status > 0 ? "SUCCEEDED" : "FAILED"
        // );

        // html += "<div class='{0}'>Configuration test: {1}</div>".format( 
        //   status > 1 ? "icon-apply" : "icon-cross",
        //   status > 1 ? "SUCCEEDED" : "FAILED"
        // );

        // html += "<div class='{0}'>Authentication test: {1}</div>".format( 
        //   status > 2 ? "icon-apply" : "icon-cross",
        //   status > 2 ? "SUCCEEDED" : "FAILED"
        // );

        // html += "<div class='{0}'>User has roles assigned: {1}</div>".format( 
        //   status > 3 ? "icon-apply" : "icon-cross",
        //   status > 3 ? "SUCCEEDED" : "FAILED"
        // );

        // html += "<div class='{0}'>User has known roles assigned: {1}</div>".format( 
        //   status > 4 ? "icon-apply" : "icon-cross",
        //   status > 4 ? "SUCCEEDED" : "FAILED"
        // );
        html += "<div class='{0}'>{1}: {2}</div>".format( 
          status > 0 ? "icon-apply" : "icon-cross",model.conntest,
          status > 0 ? "SUCCEEDED" : "FAILED"
        );

        html += "<div class='{0}'>{1}: {2}</div>".format( 
          status > 1 ? "icon-apply" : "icon-cross",model.conftest,
          status > 1 ? "SUCCEEDED" : "FAILED"
        );

        html += "<div class='{0}'>{1}: {2}</div>".format( 
          status > 2 ? "icon-apply" : "icon-cross",model.authtest,
          status > 2 ? "SUCCEEDED" : "FAILED"
        );

        html += "<div class='{0}'>{1}: {2}</div>".format( 
          status > 3 ? "icon-apply" : "icon-cross",model.userrole,
          status > 3 ? "SUCCEEDED" : "FAILED"
        );

        html += "<div class='{0}'>{1}: {2}</div>".format( 
          status > 4 ? "icon-apply" : "icon-cross",model.userknownrole,
          status > 4 ? "SUCCEEDED" : "FAILED"
        );

        html = '<div style="margin:1em">' + html + '</div>';

        EL.Dialog.message(html, null, {icon: "none"});
      });
    });

    //$("#btnMainSubmit").click(sendLDAP);
    EL.Privilege.setButton([$("#btnMainSubmit")], 0x01000000);

  };

}());

/*src/js/network.js*/
(function() {

  EL.Network = function() {
    // Variables Declaration
    var drpNetworkInterface         = $('#drpNetworkInterface');
    var drpAuthentication           = $('#drpAuthentication');
    var chkForceAPBSSID             = $('#chkForceAPBSSID');
    var tabNetworkConfiguration     = $('#tabNetworkConfiguration');
    var drpIPAutoconfiguration      = $('#drpIPAutoconfiguration');
    var drpIPAutoconfigurationIPv6  = $('#drpIPAutoconfigurationIPv6');

    var drpIPAutoconfigurationVal,
        txtIPAddressIPV4,
        txtNetmaskIPV4,
        txtGatewayIPV4;

    var oldVal = {};

    var $txDNSCHK = $("#txDNSCHK"),
        $txPrimaryDNSServerIPV4 = $("#txPrimaryDNSServerIPV4"),
        $txtSecondaryDNSServerIPV4 = $("#txtSecondaryDNSServerIPV4"),
        $txtDNSSuffixIPv4 = $("#txtDNSSuffixIPv4"),
        $enableDNS = $("#enableDNS"),
        $txtIPAddressIPV4 = $("#txtIPAddressIPV4"),
        $txtNetmaskIPV4 = $("#txtNetmaskIPV4"),
        $txtGatewayIPV4 = $("#txtGatewayIPV4");

    // Change Events for IPV4 Tab
    drpIPAutoconfiguration.change(function () {
      if (drpIPAutoconfiguration.val() == '0') {
        $('#ipv4Static').show();
        //$enableDNS.hide();
        //remvoe the disable
        //$txPrimaryDNSServerIPV4.removeAttr("disabled");
        //$txtSecondaryDNSServerIPV4.removeAttr("disabled");
        //$txtDNSSuffixIPv4.removeAttr("disabled");

        //$txtIPAddressIPV4.rules("add", { required : true });
        //$txtNetmaskIPV4.rules("add", { required : true });
        //$txtGatewayIPV4.rules("add", { required : true });

      }else if (drpIPAutoconfiguration.val() == '1') {
        $('#ipv4Static').hide();
        //$enableDNS.show();
        //reset the disable fields
        //$txDNSCHK.change();

        //$txtIPAddressIPV4.rules( "remove", "required" );
        //$txtNetmaskIPV4.rules( "remove", "required" );
        //$txtGatewayIPV4.rules( "remove", "required" );
      }
    });

    $txDNSCHK.change(function() {
      if ($txDNSCHK.is(":checked")) {
        $txPrimaryDNSServerIPV4.removeAttr("disabled");
        $txtSecondaryDNSServerIPV4.removeAttr("disabled");
        $txtDNSSuffixIPv4.removeAttr("disabled");
      } else {
        $txPrimaryDNSServerIPV4.attr("disabled", true);
        $txtSecondaryDNSServerIPV4.attr("disabled", true);
        $txtDNSSuffixIPv4.attr("disabled", true);
      }
    });

    //Getting the Device Information from the server in JSON format
    $.ajax({
      url: 'xhrnetworkget.jsp',
      type: "post", data: EL.Auth.getTocken(),
      dataType: "json",
      success: function(data) {
        $('#currState').html(data.currentstate);

        oldVal = data;

        drpIPAutoconfigurationVal = data.ipautoconfiguration;
        txtIPAddressIPV4 = data.ipaddress;
        txtNetmaskIPV4 = data.netmask;
        txtGatewayIPV4 = data.gateway;

        $('#txtIPAddressIPV4').val(txtIPAddressIPV4);
        $('#txtNetmaskIPV4').val(txtNetmaskIPV4);
        $('#txtGatewayIPV4').val(txtGatewayIPV4);

        $txDNSCHK
          .attr("checked", data.dnschk ? true : false)
          .change();

        //drpIPAutoconfiguration
        //  .val(drpIPAutoconfigurationVal)
        //  .change();
        drpIPAutoconfiguration[0].value = drpIPAutoconfigurationVal;
        drpIPAutoconfiguration.change();

        $txPrimaryDNSServerIPV4.val(data.dns1);
        $txtSecondaryDNSServerIPV4.val(data.dns2);
        $txtDNSSuffixIPv4.val(data.dnssuffix);

      }
    });

    tabNetworkConfiguration.tabs();

    $("#configurationChangedDialog").dialog({
      // title : '<div class="dicon"><img src="images/16x16/chartorg.gif" alt=icon></img></div> '+' Configuration Changed',
      title: '<div class="icon-network"></div> '+' Configuration Changed',
      resizable: false,
      width: 285, 
      height: 96,
      modal: true,
      autoOpen: false,
      closeOnEscape: false,
      open: function(event, ui) {
        $(this).closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        //$(this).closest('.ui-dialog').find('.ui-dialog-buttonpane').hide();
      },
      close: false
    });

    $('#drpNetworkInterface').attr('disabled', true).addClass('disableBg');
    $('input[name="ipProtocol"]').attr('disabled', true).addClass('disableBg');
    $('input[name="dnsResolver"]').attr('disabled', true).addClass('disableBg');
    $('#drpSpeedAtNetwork').attr('disabled', true).addClass('disableBg');
    $('#drpDuplexAtNetwork').attr('disabled', true).addClass('disableBg');

    drpAuthentication.change(function () {
      if (drpAuthentication.val() == 'noAuthentication') {
        $('#psk').css('display', 'none');
        $('#eap-peap').css('display', 'none');
      }else if (drpAuthentication.val() == 'psk') {
        $('#psk').css('display', 'block');
        $('#eap-peap').css('display', 'none');
      } else {
        $('#psk').css('display', 'none');
        $('#eap-peap').css('display', 'block');
      }
    });

    // Calling Change Events
    $('input[name=ipProtocol]').change();

    drpAuthentication.change();
    // IPv4 Settings tab functionalities 
    chkForceAPBSSID.change(function() {
      if (chkForceAPBSSID.attr('checked')) {  
        $('#txtBSSID').attr('disabled', false).removeClass('disableBg');
      } else {
        $('#txtBSSID').attr('disabled', true).addClass('disableBg');
      }
    });
    drpIPAutoconfiguration.change();

    chkForceAPBSSID.change();
    // IPv6 Settings tab functionalities 
    drpIPAutoconfigurationIPv6.change(function () {
      resetTextBoxBorder();
      if (drpIPAutoconfigurationIPv6.val() == 'static') {
        $('#ipv6Static').css('display', 'block');
        $('#ipv6Automatic').css('display', 'none');
      }else if (drpIPAutoconfigurationIPv6.val() == 'automatic') {
        $('#ipv6Static').css('display', 'none');
        $('#ipv6Automatic').css('display', 'block');
      }
    });
    drpIPAutoconfigurationIPv6.change();

    $("#tabNetworkConfiguration").mouseover(function() {
      generateTooltips();
    });

    var changed = EL.Network.changed = function() {

      /*
      console.log(oldVal);
      console.log(drpIPAutoconfiguration.val() == oldVal.ipautoconfiguration);
      console.log($txtIPAddressIPV4.val() == oldVal.ipaddress);
      console.log($txtNetmaskIPV4.val() == oldVal.netmask);
      console.log(parseInt($txDNSCHK.val()) == oldVal.dnschk);
      console.log($txPrimaryDNSServerIPV4.val() == oldVal.dns1);
      console.log($txtSecondaryDNSServerIPV4.val() == oldVal.dns2);
      console.log($txtDNSSuffixIPv4.val() == oldVal.dnssuffix);
      */


      if (
        parseInt(drpIPAutoconfiguration.val()) == oldVal.ipautoconfiguration &&
        $txtIPAddressIPV4.val() == oldVal.ipaddress &&
        $txtNetmaskIPV4.val() == oldVal.netmask &&
        $txtGatewayIPV4.val() == oldVal.gateway &&
        $txDNSCHK.is(":checked") == (oldVal.dnschk == 1) &&
        $txPrimaryDNSServerIPV4.val() == oldVal.dns1 &&
        $txtSecondaryDNSServerIPV4.val() == oldVal.dns2 &&
        $txtDNSSuffixIPv4.val() == oldVal.dnssuffix
      ) {
        return false
      } else {
        return true 
      }
    };

    //Changed sth that need to restart
    var changedIP = function() {
      return drpIPAutoconfigurationVal != drpIPAutoconfiguration.val() ||
        ( drpIPAutoconfiguration.val() == "0" &&
           ( txtIPAddressIPV4 !=  $txtIPAddressIPV4.val()
             || txtNetmaskIPV4 != $txtNetmaskIPV4.val()
             || txtGatewayIPV4 != $txtGatewayIPV4.val()
           )
        );
    };

    var submitHandler = function() {
      var saveTocken = {
        "ipautoconfiguration": parseInt(drpIPAutoconfiguration.val()),
        "ipaddress": $txtIPAddressIPV4.val(),
        "netmask": $txtNetmaskIPV4.val(),
        "gateway": $txtGatewayIPV4.val(),
        "dnschk": $txDNSCHK.attr("checked") ? 1 : 0,
        "dns1": $txPrimaryDNSServerIPV4.val(),
        "dns2": $txtSecondaryDNSServerIPV4.val(),
        "dnssuffix": $txtDNSSuffixIPv4.val()
      };

      $.ajax({
        url: 'xhrnetworkset.jsp',
        type: "post", data: JSON.stringify($.extend(saveTocken,EL.Auth.getJSON())),
        dataType: "json",
        success: function(data) {
          if (EL.UpdateStatus(data)) {
            changedIP() && EL.ResetDevice.reboot(30);

            EL.Master.removeDialog();
          }
        }
      });
    };


    // validate the contact form
    $("#frnetwork").validate({
      rules: {
        txtIPAddressIPV4: {
          required: {
            depends: function(element) {
              return drpIPAutoconfiguration.val() == "0"
            }
          },
          ipv4: true
        },
        txtNetmaskIPV4:  {ipv4: true},
        txtGatewayIPV4: {ipv4: true},
        txPrimaryDNSServerIPV4: {ipv4: true},
        txSecondaryDNSServerIPV4: {ipv4: true},
        txtDNSSuffixIPv4: {maxlength:32}
      },
      submitHandler: function(form) {
        if (changed()) {
          changedIP()
            ? EL.Dialog.confirm(MODEL.netsvr.change, submitHandler)
            : submitHandler();
        } else {
          EL.Master.removeDialog();
        }
      }
    });


    EL.Privilege.setButton([$("#btnMainSubmit")], 0x00000040);


  };

}());
/*src/js/snmp.js*/

(function() {
  EL.SNMP = function() {

    var tabSNMPSettings = $('#tabSNMPSettings');
    tabSNMPSettings.tabs();

    //$('#txtReadCommunityString').attr('disabled', true).addClass('disableBg');
    //$('#txtWriteCommunityString').attr('disabled', true).addClass('disableBg');

    $("div#tabSNMPSettings").show();


    var $chkEnableSNMPv1andv2 = $('#chkEnableSNMPv1andv2').change(function(e) {
      if ($chkEnableSNMPv1andv2.is(":checked")) {
        $("#txtReadCommunityString").removeAttr("disabled");
        $("#txtWriteCommunityString").removeAttr("disabled");
      } else {
        $("#txtReadCommunityString").attr("disabled", true);
        $("#txtWriteCommunityString").attr("disabled", true);
      }
    });

    var cookie_Value = getAuthCookie("authCookieId");
    var cookie_Value = parseInt(cookie_Value);      
    var objSnmpJson = {"cookie" : cookie_Value};  
    //Getting data from the server in JSON format
    var url = 'xhrsnmpget.jsp';
    var xmlhttp = getXMLObject();           
    if (xmlhttp) {
      xmlhttp.onreadystatechange  = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          var data = xmlhttp.responseText;
          data = JSON.parse(data);
          var cookie = data.cookie;

          var chkSnmpV1V2Acs, chkSnmpV3Acs, chkTrapsAcs;
          chkSnmpV1V2Acs = (data.chkSnmpV1V2Acs);
          chkSnmpV3Acs = (data.chkSnmpV3Acs);
          chkTrapsAcs = (data.chkTrapsAcs);

          if (chkSnmpV1V2Acs == 0) {
            $("#chkEnableSNMPv1andv2").attr('checked', false);
          }else if (chkSnmpV1V2Acs == 1) {
            $("#chkEnableSNMPv1andv2").attr('checked', true);
          }

          $chkEnableSNMPv1andv2.change();

          $("#txtReadCommunityString").val(data.readCommStr); 
          $("#txtWriteCommunityString").val(data.writeCommStr);
          if (chkSnmpV3Acs == 0) {
            $("#chkEnableSNMPv3").attr('checked', false);
          }else if (chkSnmpV3Acs == 1) {
            $("#chkEnableSNMPv3").attr('checked', true);
          }
          $("#txtSysContact").val(data.sysContact); 
          $("#txtSysName").val(data.sysName); 
          $("#txtSysLocation").val(data.sysLocation); 
          if (chkTrapsAcs == 0) {
            $("#chkEnableSysSNMPTrapEvent").attr('checked', false);
          }else if (chkTrapsAcs == 1) {
            $("#chkEnableSysSNMPTrapEvent").attr('checked', true);
          }

          $("#txtHost1").val(data.host1); 
          $("#txtPort1").val(data.port1); 
          $("#txtCommunity1").val(data.community1); 
          $("#txtHost2").val(data.host2); 
          $("#txtPort2").val(data.port2); 
          $("#txtCommunity2").val(data.community2); 
          $("#txtHost3").val(data.host3);
          $("#txtPort3").val(data.port3); 
          $("#txtCommunity3").val(data.community3); 
        }
      };
      xmlhttp.open("POST", url, true); 
      xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");      
      xmlhttp.send(JSON.stringify(objSnmpJson));   
    }


    $("#tabSNMPSettings").mouseover(function() {
      generateTooltips();
    });

    // validate the contact form
    $("#frsnmp").validate({
      rules: {
        txtSysContact:{maxlength:32 },
        txtSysName:{maxlength:32 },
        txtSysLocation:{maxlength:32 },
        txtPort1: {required: true, digits:true, range: [1, 65535]},
        txtPort2: {required: true, digits:true, range: [1, 65535]},
        txtPort3: {required: true, digits:true, range: [1, 65535]},
        txtReadCommunityString:   {required:true, minlength:4, maxlength: 32},
        txtWriteCommunityString:  {required:true, minlength:4, maxlength: 32},
        txtHost1: {maxlength: 32 },
        txtHost2: {maxlength: 32 },
        txtHost3: {maxlength: 32 },
        txtCommunity1: {minlength: 4, maxlength: 32},
        txtCommunity2: {minlength: 4, maxlength: 32},
        txtCommunity3: {minlength: 4, maxlength: 32}
      },
      submitHandler: function(form) { 
        var cookie_Value = getAuthCookie("authCookieId");
        var cookie_Value = parseInt(cookie_Value);      
        var cookie = cookie_Value;
        var intchkSnmpV1V2AcsVal, intchkSnmpV3AcsVal, intchkTrapsAcsVal;
        var chkSnmpV1V2AcsVal = $('#chkEnableSNMPv1andv2').is(':checked');  
        var readCommStrVal =  $("#txtReadCommunityString").val(); 
        var writeCommStrVal = $("#txtWriteCommunityString").val();
        var chkSnmpV3AcsVal = $("#chkEnableSNMPv3").is(':checked');

        if ($("#txtSysContact").val() == null || $("#txtSysContact").val() == '')
            var sysContactVal = ""; 
        else
            var sysContactVal = $("#txtSysContact").val();

        if ($("#txtSysName").val() == null || $("#txtSysName").val() == '')
          var sysNameVal = ""; 
        else
          var sysNameVal = $("#txtSysName").val();

        if ($("#txtSysLocation").val() == null || $("#txtSysLocation").val() == '')
            var sysLocationVal = "";
        else
            var sysLocationVal = $("#txtSysLocation").val();

        var chkTrapsAcsVal = $("#chkEnableSysSNMPTrapEvent").is(':checked');

        if ($("#txtHost1").val() == null || $("#txtHost1").val() == '')
          var host1Val = "";
        else
          var host1Val = $("#txtHost1").val();

        var port1Val = parseInt($("#txtPort1").val());

        if ($("#txtCommunity1").val() == null || $("#txtCommunity1").val() == '')
            var community1Val = "";
        else
            var community1Val = $("#txtCommunity1").val();

        if ($("#txtHost2").val() == null || $("#txtHost2").val() == '')
          var host2Val = "";
        else
          var host2Val = $("#txtHost2").val();

        var port2Val = parseInt($("#txtPort2").val());
        if ($("#txtCommunity2").val() == null || $("#txtCommunity2").val() == '')
            var community2Val = "";
        else
            var community2Val = $("#txtCommunity2").val();

        if ($("#txtHost3").val() == null || $("#txtHost3").val() == '')
            var host3Val = "";
        else
            var host3Val = $("#txtHost3").val();

        var port3Val = parseInt($("#txtPort3").val());
        if ($("#txtCommunity3").val() == null || $("#txtCommunity3").val() == '')
            var community3Val = "";
        else 
            var community3Val = $("#txtCommunity3").val();

        /*
        if ($("#tabSNMPSettings").tabs("option", "selected") != 1) {
          //$("#tabSNMPSettings").tabs({ selected: 1 });
          $("#frsnmp").submit();
          return false;
        }
        */

        var changeSnmpJsonObj = {
          "cookie" : cookie, 
          "chkSnmpV1V2Acs": chkSnmpV1V2AcsVal,
          "readCommStr": readCommStrVal,
          "writeCommStr": writeCommStrVal,
          "chkSnmpV3Acs": chkSnmpV3AcsVal,
          "sysContact": sysContactVal,
          "sysName": sysNameVal,
          "sysLocation": sysLocationVal,
          "chkTrapsAcs": chkTrapsAcsVal,
          "host1": host1Val,
          "port1": port1Val,
          "community1": community1Val,
          "host2": host2Val,
          "port2": port2Val,
          "community2": community2Val,
          "host3": host3Val,
          "port3": port3Val,
          "community3": community3Val  
        };

        //EL.Confirm(MODEL.netsvr.change, function() {
          var xmlhttp = getXMLObject();   
          if (xmlhttp) {
            xmlhttp.onreadystatechange  = function() {
              if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var data = JSON.parse(xmlhttp.responseText);

                if (EL.UpdateStatus(data)) {
                  $('#mydialog').dialog('destroy');
                  $('#mydialog').html('');
                }
              }
            }
          }
          xmlhttp.open("POST", "xhrsnmppost.jsp", true);
          xmlhttp.send(JSON.stringify(changeSnmpJsonObj));
        //});
      }
    });

    EL.Privilege.setButton([$("#btnMainSubmit")], 0x00000200);

  };
})();

/*src/js/http.js*/
(function() {

  var self = EL.Http = function() {

    //$( "input:submit, input:reset, input:button").button();
    var valHttp, valHttps;
    //form validation start
    try
    { 
      var cookie_Value = getAuthCookie("authCookieId");
      cookie_Value = parseInt(cookie_Value);      
      var objHttpJson = {"cookie" : cookie_Value};
      //Getting data from the server in JSON format
      var url = 'xhrhttpget.jsp';
      var xmlhttp = getXMLObject();

      if (xmlhttp) 
      {                   
        xmlhttp.onreadystatechange  = function() {

          if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = xmlhttp.responseText;
            data = JSON.parse(data);
            var cookie = data.cookie;
            var privilege_val = data.privilege;
            valHttp = data.http;
            valHttps = data.https;
            $("#txtHttpPort").val(valHttp); 
            $("#txtHttpsPort").val(valHttps);
          }

        };
        xmlhttp.open("POST", url, true); 
        xmlhttp.setRequestHeader("Content-Type", "application/json");      
        xmlhttp.send(JSON.stringify(objHttpJson));   
      }                                               
      $("#httpHolder").mouseover(function() {
        generateTooltips();
      });
      //Send data to the sever in JSON format
      function dsendHttpForm(valHttp, valHttps) {
        try
        {
          var cookie_Value = getAuthCookie("authCookieId");
          var cookie_Value = parseInt(cookie_Value);      
          var cookie = cookie_Value;
          var changeHttpJsonObj = {"cookie" : cookie, "http" : parseInt(valHttp), "https" : parseInt(valHttps)};
          var xmlhttp = getXMLObject();   
          if (xmlhttp) 
          {                   
            xmlhttp.onreadystatechange  = function() {
              try
              {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
                {                            
                  var data = JSON.parse(xmlhttp.responseText);
                  if (EL.UpdateStatus(data)) {
                    var url  = location.href.replace("master.htm", "login.htm");
                        port = (url.indexOf('https') > -1) ? valHttps : valHttp;

                    EL.ResetDevice.reboot(30, self.getUrl(url, port));

                    $('#mydialog').dialog('destroy');
                    $('#mydialog').html('');
                  }
                }
              }
              catch(e)
              {
                alert("Error Occured for onreadystatechange at Change httpSettings: " + e.message);
                return false;
              }
            }
          }
          xmlhttp.open("POST", "xhrhttppost.jsp", true); 
          xmlhttp.setRequestHeader("Content-Type", "application/json");      
          xmlhttp.send(JSON.stringify(changeHttpJsonObj));   
        }
        catch(e)
        {
          alert("Error at updateHttpSettings : " + e.message);
          return false;
        }
      }
      // validate the contact form
       $("#frhttp").validate({
        rules: {
          txtHttpPort: {required: true, digits:true,min: 1, max: 65535},
          txtHttpsPort:{required: true, digits:true,min: 1, max: 65535, notEqualTo:"#txtHttpPort"}  
        },
        submitHandler: function(form) { 
          var httpVal, httpsVal;
          httpVal = $('#txtHttpPort').val();
          httpsVal = $('#txtHttpsPort').val();
          if (valHttp != httpVal || valHttps != httpsVal) {
            //EL.Confirm(MODEL.netsvr.change, function() {
              dsendHttpForm(httpVal, httpsVal);
            //});
          } else {
            $('#mydialog').dialog('destroy');
            $('#mydialog').html('');
            return false;
          }
        }
      });
    }
    catch (e)
    {
      alert("Validation Error" +e.message);
    }

    EL.Privilege.setButton([$("#btnMainSubmit")], "0x00040000");

  };

  /*
  Get new url from new port:
  https://127.0.0.1:8054/, 8080 => http://127.0.0.1:8080/
  */
  self.getUrl = function(url, port) {
    var idx     = url.indexOf('/', 10),
        prevUrl = url.substr(0, idx);

    prevUrl = prevUrl.indexOf(':') > 0
      ? prevUrl.replace(/:[\d]+/, ':' + port)
      : (prevUrl + ':' + port);

    return prevUrl + url.substr(idx);
  };

}());
/*src/js/telnet.js*/
(function() {

  EL.Telnet = function() {

    var valtelPort, valChktelval;
    try {
      var cookie_Value = getAuthCookie("authCookieId");
      cookie_Value = parseInt(cookie_Value);
      var objTelnetJson = {"cookie" : cookie_Value};
      //Getting data from the server in JSON format
      var url = 'xhrtelnetget.jsp';
      var xmlhttp = getXMLObject();
      if (xmlhttp) {
        xmlhttp.onreadystatechange  = function() {
          try
          {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
            {   
              var data = xmlhttp.responseText;
              data = JSON.parse(data);
              var cookie = data.cookie 
                    var privilege_val = data.privilege;
                valtelPort = data.telnetPort;
                valChktelval = data.chkTelAcs;
                $("#Tel_Port").val(valtelPort);
                $("#chkEnableSSH").attr('checked', valChktelval);
                if (privilege_val == 0) {
                $("#btnMainSubmit").attr('disabled',true).addClass('disableButton');
              } else {
                  $("#btnMainSubmit").attr('disabled',false).removeClass('disableButton');
              }
            }
          }
          catch(e)
          {
            alert("Error Occured At Auth onreadystatechange : " + e.message);
          }
        };
        xmlhttp.open("POST", url, true); 
        xmlhttp.setRequestHeader("Content-Type", "application/json");      
        xmlhttp.send(JSON.stringify(objTelnetJson));   
      }
      //Sending data to the server using JQUERY .post method
      function dsendTelnetForm(telPortVal, chkTelVal) {
        var cookie_Value = getAuthCookie("authCookieId");
        var cookie_Value = parseInt(cookie_Value);
        var cookie = cookie_Value;
        var changeTelnetJsonObj = {"cookie" : cookie, "telnetPort" : parseInt(telPortVal), "chkTelAcs" : chkTelVal};
        var xmlhttp = getXMLObject();   
        if (xmlhttp) 
        {
          xmlhttp.onreadystatechange  = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
              var data = JSON.parse(xmlhttp.responseText);
              if (EL.UpdateStatus(data)) {
                (telPortVal != valtelPort) && EL.ResetDevice.reboot(30);

                $('#mydialog').dialog('destroy');
                $('#mydialog').html('');
              }
            }
          }
        }
        xmlhttp.open("POST", "xhrtelnetpost.jsp", true); 
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify(changeTelnetJsonObj));
      }
      // Form validations start
      $("#Telnet_Holdings").mouseover(function() {
        generateTooltips();
      });

      // validate the contact form
      $("#frtelnet").validate({
        rules: {
          Tel_Port: {required: true, digits: true, min: 1, max: 65535}
        },
        submitHandler: function(form) {
          var telPortVal, chkTelVal;
          telPortVal = $('#Tel_Port').val();
          chkTelVal = $('#chkEnableSSH').is(':checked');
          if (telPortVal != valtelPort || chkTelVal != valChktelval) {
            //EL.Confirm(MODEL.netsvr.change, function() {
              dsendTelnetForm(telPortVal, chkTelVal);
            //});
          } else {
            $('#mydialog').dialog('destroy');
            $('#mydialog').html('');
            return false;
          }
        }
      });

    }catch(e) {
      alert(" Telnet Validation Error: " + e.message);
    }

    EL.Privilege.setButton([$("#btnMainSubmit")], "0x00040000");

  };

}());
/*src/js/ftp.js*/
(function() {

  EL.Ftp = function() {

    $( "input:submit, input:reset, input:button").button();
    var valftpPort, valChkftp;

    //  Form validations start
    var cookie_Value = getAuthCookie("authCookieId");
    cookie_Value = parseInt(cookie_Value);


    (function() {
      var objftpJson = {"cookie" : cookie_Value};

      //Getting data from the server in JSON format
      $.ajax({
        url: "xhrftpget.jsp",
        type: "post", data: JSON.stringify(objftpJson),
        dataType: "json",
        success: function(data) {
          valftpPort = data.ftpport;
          valChkftp = data.chkftpacs;
          $("#chkEnableFTP").attr('checked', valChkftp ? true : false);
          $("#txtFTPPort").val(valftpPort);
        }
      });

    })();


    //Sending data to the server in JSON format
    function dsendftpForm(ftpPortVal, chkftpVal) {

      var changeftpJsonObj = {
        "cookie" : cookie_Value,
        "ftpport" : parseInt(ftpPortVal),
        "chkftpacs" : parseInt(chkftpVal)
      };

      $.ajax({
        url: "xhrftppost.jsp",
        type: "post", data: JSON.stringify(changeftpJsonObj),
        dataType: "json",
        success: function(data) {
          if (EL.UpdateStatus(data)) {
            (ftpPortVal != valftpPort) && EL.ResetDevice.reboot(30);

            $('#mydialog').dialog('destroy');
            $('#mydialog').html('');
          }
        }
      });
    }
    
    $("#FTP_Holdings").mouseover(function() {
      generateTooltips();
    });

    // validate the contact form
    $("#frftp").validate({
      rules: {
        txtFTPPort: {required:true, number:true, min: 1, max:65535}     
      },
      submitHandler: function(form) { 
        var ftpPortVal, chkftpVal;
        ftpPortVal = parseInt($('#txtFTPPort').val());
        if (ftpPortVal.length == 0) {
          ftpPortVal = 0;
        }
        boolchkftpVal = $('#chkEnableFTP').is(':checked');
        if (boolchkftpVal) {
          intchkftpVal = 1;
        } else {
          intchkftpVal = 0;
        }
        if (ftpPortVal != valftpPort || intchkftpVal != valChkftp) {
          //EL.Confirm(MODEL.netsvr.change, function() {
            dsendftpForm(ftpPortVal, intchkftpVal);
          //});
        } else {      
           $('#mydialog').dialog('destroy');
           $('#mydialog').html('');
           return false;
        }         
      }
    });

    EL.Privilege.setButton([$("#btnMainSubmit")], "0x00040000");

  };

}());
/*src/js/forcehttps.js*/
(function() {

  var self = EL.ForceHttps = function() {

    var $httpsBtn = $("#forcehttps"),
        $httpsChk = $("#chkForcehttps"),
        url       = location.href,
        isHttp    = url.indexOf("http:") > -1;

    var getUrl = self.getUrl = function(http, https) {
      var curUrl, port = isHttp ? https : http;

      curUrl = url.replace("master.htm", "login.htm");
      curUrl = isHttp ? curUrl.replace("http:", "https:") : curUrl.replace("https:", "http:");

      curUrl = EL.Http.getUrl(curUrl, port);

      return curUrl;
    };

    self.update = function(){
      $httpsChk.attr("checked", EL.Privilege.https ? true : false);
    };

    //contructor
    (function(){

      //Check permission
      EL.Privilege.setButton([$httpsChk, $httpsBtn], 0x00000400);

      //refresh data
      self.update();

      //rebind again, in order to prevent dialog
      $httpsBtn.click(function(e) {
        var model = MODEL.forcehttpinfo;
        e.stopPropagation();
        e.preventDefault();


        if ($httpsChk.attr("disabled")) return;


        // var msg = 'After changing the setting, you will need to reset the Network Card to take effect.<br/> Do you really want to apply changes now?';
        var msg = model.confirminfo;

        var tocken = $.extend({"forcehttpsvalue": $httpsChk.attr("checked") ? 1 : 0 }, EL.Auth.getJSON());

        EL.Confirm(msg, function() {

          EL.DashBoard.stop();

          //Get http & https port in order to get the new url
          $.ajax({
            url:  "xhrhttpget.jsp",
            type: "post", data: EL.Auth.getTocken(),
            dataType: "json",
            success: function(data) {

              //Switch http & https protocol, according to the data of http/https
              $.ajax({
                url: "xhrforcehttpspost.jsp",
                type: "post", data: JSON.stringify(tocken),
                dataType: "json",
                success: function() {
                  EL.ResetDevice.reboot(30, getUrl(data.http, data.https));
                }
              });
            }
          });

        });
      });

    })();

  };

})();
/*src/js/locale.js*/
/*
Localizaton
*/
(function(window) {

  var self = EL.Locale = {};

  var localeCookie = "locale";

  self.bind = function() {
    var $sellocal = $("#sellocal"),
        local = $.cookie(localeCookie) || "en";

    $sellocal[0].value = local;

    $sellocal.change(function() {
      EL.Master.mask(true);

      $.cookie(localeCookie, $sellocal.val(), {
        path:"/",
        expires: 730
      });

      $.post(
        "xhrlocalepost.jsp"
        , JSON.stringify($.extend(EL.Auth.getJSON(), { locale: $sellocal.val() }))
        , function() {
          location.reload();
        }
      );

    });
  };

  //render the templates
  self.render = function() {
    //It's login page
    var $login = $("#login");
    if ($login.size()) {
      var model = MODEL.login;
      var pagefn = doT.template($login.html());
      $login.html(pagefn(model));

      EL.Login(model);

      document.title = model.title;
    }

    //It's master page
    var $wrapper = $("#wrapper.master");
    if ($wrapper.size()) {
      var model = MODEL.master;
      var pagefn = doT.template($wrapper.html());
      $wrapper.html(pagefn(model));

      EL.Master(model).init();

      self.bind();
    }
  };

  self.init = function() {
    var locale = $.cookie(localeCookie) || "en";

    //load language package: Model
    (locale == "en")
      ? self.render()
      : $LAB.script("locale/{0}.js".format(locale)).wait(self.render);
  };

  self.init();

})(window);
