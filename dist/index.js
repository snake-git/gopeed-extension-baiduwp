(()=>{"use strict";var t=gopeed;function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function n(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var o="https://pan.baidu.com";const i=function(){function t(e,r,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.surl=e,this.pwd=r,this.headers={"User-Agent":"netdisk",Cookie:"BDUSS=".concat(n,"; ndut_fmt="),Referer:"https://pan.baidu.com/disk/home"}}var e,i;return e=t,(i=[{key:"getShareInfo",value:async function(){var t=await fetch("".concat(o,"/share/wxlist?channel=weixin&version=2.2.2&clienttype=25&web=1"),{method:"POST",headers:this.headers,body:"pwd=".concat(this.pwd,"&shorturl=").concat(this.surl,"&root=1")}),e=await t.json();if(0!=e.errno)throw new Error("获取分享信息失败，errno="+e.errno);return e.data}},{key:"getFileList",value:async function(){var t=[],e=this;return await async function n(o){var i,a=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){c=!0,a=t},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw a}}}}(o);try{for(a.s();!(i=a.n()).done;){var l=i.value;1==l.isdir?await n(await e._doGetList(l.path)):t.push(l)}}catch(t){a.e(t)}finally{a.f()}}(await this._doGetList("")),t}},{key:"getDlink",value:async function(t){var e=await this.getShareInfo(),r=e.uk,n=e.shareid,i=e.seckey,a=await fetch("".concat(o,"/share/tplconfig?fields=sign,timestamp&channel=chunlei&web=1&app_id=250528&clienttype=0&surl=").concat(this.surl),{headers:this.headers}),l=await a.json();if(0!=l.errno)throw new Error("获取签名失败，errno="+l.errno);var c=l.data,s=c.sign,u=c.timestamp,f=await fetch("".concat(o,"/api/sharedownload?app_id=250528&channel=chunlei&clienttype=12&web=1&sign=").concat(s,"&timestamp=").concat(u),{method:"POST",headers:this.headers,body:'encrypt=0&extra={"sekey":"'.concat(i,'"}&fid_list=[').concat(t,"]&primaryid=").concat(n,"&product=share&type=nolimit&uk=").concat(r)}),y=await f.json();if(0!=y.errno)throw new Error("获取下载链接失败，errno="+y.errno);return y.list[0].dlink}},{key:"_doGetList",value:async function(t){for(var e=""===t?1:0,r=1,n=!0,o=[];n;){var i=await this._doGetPageList(t,e,r);o=o.concat(i.list),n=i.has_more,r++}return o}},{key:"_doGetPageList",value:async function(t,e,r){var n=await fetch("https://pan.baidu.com/share/wxlist?channel=weixin&version=2.2.2&clienttype=25&web=1",{method:"POST",headers:this.headers,body:"dir=".concat(t,"&num=1000&order=time&page=").concat(r,"&pwd=").concat(this.pwd,"&root=").concat(e,"&shorturl=").concat(this.surl)}),o=await n.json();if(0!=o.errno)throw new Error("解析文件列表失败，errno="+o.errno);return o.data}}])&&n(e.prototype,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function l(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==a(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===a(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}t.events.onResolve((async function(e){var r=new URL(e.req.url),n=r.pathname.split("/")[2],o=r.search,a="";if(o){var s=o.replace("?","").split("&").filter((function(t){var e,r,n=(e=t.split("="),r=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,l=[],c=!0,s=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(l.push(n.value),l.length!==e);c=!0);}catch(t){s=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return l}}(e,r)||function(t,e){if(t){if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];if("pwd"===o)return i}));s.length>0&&(a=s[0])}if(t.logger.debug("match",n,a),n){var u=new i(n,a,t.settings.bduss),f=await u.getShareInfo(),y=f.title.split("/").pop()+(f.list.length>1?"等":""),p=f.title.split("/").slice(0,-1).join("/")+"/",h=await u.getFileList();e.res={name:y,files:h.map((function(r){var o;return{name:r.server_filename,size:r.size,path:r.path.replace(p,"").split("/").slice(0,-1).join("/"),req:{url:r.dlink,extra:{header:{"User-Agent":"pan.baidu.com"}},labels:(o={},l(o,t.info.identity,"1"),l(o,"rawUrl",e.req.url),l(o,"surl",n),l(o,"pwd",a),l(o,"fid",r.fs_id),o)}}}))}}})),t.events.onStart((async function(e){var r=e.task.meta.req;if(!r.labels.gotDlink||"error"==e.task.status){var n=r.labels.fid,o=r.labels.surl,a=r.labels.pwd,l=new i(o,a,t.settings.bduss),c=await l.getDlink(n);t.logger.info("dlink",c),r.url=c,r.labels.gotDlink="1"}}))})();