(self.webpackChunk_jupytercad_jupytercad_extension=self.webpackChunk_jupytercad_jupytercad_extension||[]).push([[285],{4285:(e,t,s)=>{"use strict";s.r(t),s.d(t,{ICollaborativeDrive:()=>Re,WebSocketProvider:()=>Ee,YDrive:()=>Ae});var n=s(9993),o=s(4238),r=s(5350),c=s(7930),a=s(4901),i=s(981);const l=()=>new Map,h=(e,t,s)=>{let n=e.get(t);return void 0===n&&e.set(t,n=s()),n},d=()=>new Set,u=String.fromCharCode,f=(String.fromCodePoint,u(65535),/^\s*/g),p=/([A-Z])/g,g=(e,t)=>(e=>e.replace(f,""))(e.replace(p,(e=>`${t}${(e=>e.toLowerCase())(e)}`))),y="undefined"!=typeof TextEncoder?new TextEncoder:null,w=y?e=>y.encode(e):e=>{const t=unescape(encodeURIComponent(e)),s=t.length,n=new Uint8Array(s);for(let e=0;e<s;e++)n[e]=t.codePointAt(e);return n};let m="undefined"==typeof TextDecoder?null:new TextDecoder("utf-8",{fatal:!0,ignoreBOM:!0});m&&1===m.decode(new Uint8Array).length&&(m=null);let b=new class{constructor(){this.map=new Map}setItem(e,t){this.map.set(e,t)}getItem(e){return this.map.get(e)}},v=!0;try{"undefined"!=typeof localStorage&&(b=localStorage,v=!1)}catch(e){}const _=b,C=Array.from,S=(Array.isArray,Object.assign,Object.keys),k=e=>S(e).length,I=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),U=(e,t)=>{if(null==e||null==t)return((e,t)=>e===t)(e,t);if(e.constructor!==t.constructor)return!1;if(e===t)return!0;switch(e.constructor){case ArrayBuffer:e=new Uint8Array(e),t=new Uint8Array(t);case Uint8Array:if(e.byteLength!==t.byteLength)return!1;for(let s=0;s<e.length;s++)if(e[s]!==t[s])return!1;break;case Set:if(e.size!==t.size)return!1;for(const s of e)if(!t.has(s))return!1;break;case Map:if(e.size!==t.size)return!1;for(const s of e.keys())if(!t.has(s)||!U(e.get(s),t.get(s)))return!1;break;case Object:if(k(e)!==k(t))return!1;for(const s in e)if(!I(e,s)||!U(e[s],t[s]))return!1;break;case Array:if(e.length!==t.length)return!1;for(let s=0;s<e.length;s++)if(!U(e[s],t[s]))return!1;break;default:return!1}return!0};var T=s(4406);const L=void 0!==T&&T.release&&/node|io\.js/.test(T.release.name),M="undefined"!=typeof window&&"undefined"!=typeof document&&!L;let E;"undefined"!=typeof navigator&&/Mac/.test(navigator.platform);const A=[],D=e=>(()=>{if(void 0===E)if(L){E=l();const e=T.argv;let t=null;for(let s=0;s<e.length;s++){const n=e[s];"-"===n[0]?(null!==t&&E.set(t,""),t=n):null!==t?(E.set(t,n),t=null):A.push(n)}null!==t&&E.set(t,"")}else"object"==typeof location?(E=l(),(location.search||"?").slice(1).split("&").forEach((e=>{if(0!==e.length){const[t,s]=e.split("=");E.set(`--${g(t,"-")}`,s),E.set(`-${g(t,"-")}`,s)}}))):E=l();return E})().has(e),R=e=>{return void 0===(t=L?T.env[e.toUpperCase()]:_.getItem(e))?null:t;var t};D("--"+"production")||R("production");const $=L&&(N=T.env.FORCE_COLOR,["true","1","2"].includes(N));var N;!D("no-colors")&&(!L||T.stdout.isTTY||$)&&(!L||D("color")||$||null!==R("COLORTERM")||(R("TERM")||"").includes("color"));const O=(e,t,s)=>new Uint8Array(e,t,s),x=M?e=>{let t="";for(let s=0;s<e.byteLength;s++)t+=u(e[s]);return btoa(t)}:e=>Buffer.from(e.buffer,e.byteOffset,e.byteLength).toString("base64"),P=M?e=>{const t=atob(e),s=(n=t.length,new Uint8Array(n));var n;for(let e=0;e<t.length;e++)s[e]=t.charCodeAt(e);return s}:e=>{const t=Buffer.from(e,"base64");return new Uint8Array(t.buffer,t.byteOffset,t.byteLength)},B=new Map,j="undefined"==typeof BroadcastChannel?class{constructor(e){var t;this.room=e,this.onmessage=null,this._onChange=t=>t.key===e&&null!==this.onmessage&&this.onmessage({data:P(t.newValue||"")}),t=this._onChange,v||addEventListener("storage",t)}postMessage(e){_.setItem(this.room,x(new Uint8Array(e)))}close(){var e;e=this._onChange,v||removeEventListener("storage",e)}}:BroadcastChannel,W=e=>h(B,e,(()=>{const t=d(),s=new j(e);return s.onmessage=e=>t.forEach((t=>t(e.data,"broadcastchannel"))),{bc:s,subs:t}})),F=(e,t,s=null)=>{const n=W(e);n.bc.postMessage(t),n.subs.forEach((e=>e(t,s)))},H=Date.now,z=Math.floor,J=(Math.ceil,Math.abs,Math.imul,Math.round,Math.log10,Math.log2,Math.log,Math.sqrt,(e,t)=>e<t?e:t),V=(Number.isNaN,Math.pow),Y=(Math.sign,128),q=127;class G{constructor(){this.cpos=0,this.cbuf=new Uint8Array(100),this.bufs=[]}}const X=()=>new G,Z=e=>{let t=e.cpos;for(let s=0;s<e.bufs.length;s++)t+=e.bufs[s].length;return t},K=e=>{const t=new Uint8Array(Z(e));let s=0;for(let n=0;n<e.bufs.length;n++){const o=e.bufs[n];t.set(o,s),s+=o.length}return t.set(O(e.cbuf.buffer,0,e.cpos),s),t},Q=(e,t)=>{const s=e.cbuf.length;e.cpos===s&&(e.bufs.push(e.cbuf),e.cbuf=new Uint8Array(2*s),e.cpos=0),e.cbuf[e.cpos++]=t},ee=(e,t)=>{for(;t>q;)Q(e,Y|q&t),t=z(t/128);Q(e,q&t)},te=new Uint8Array(3e4),se=te.length/3,ne=y&&y.encodeInto?(e,t)=>{if(t.length<se){const s=y.encodeInto(t,te).written||0;ee(e,s);for(let t=0;t<s;t++)Q(e,te[t])}else oe(e,w(t))}:(e,t)=>{const s=unescape(encodeURIComponent(t)),n=s.length;ee(e,n);for(let t=0;t<n;t++)Q(e,s.codePointAt(t))},oe=(e,t)=>{ee(e,t.byteLength),((e,t)=>{const s=e.cbuf.length,n=e.cpos,o=J(s-n,t.length),r=t.length-o;var c,a;e.cbuf.set(t.subarray(0,o),n),e.cpos+=o,r>0&&(e.bufs.push(e.cbuf),e.cbuf=new Uint8Array((c=2*s)>(a=r)?c:a),e.cbuf.set(t.subarray(o)),e.cpos=r)})(e,t)};new DataView(new ArrayBuffer(4));const re=Number.MAX_SAFE_INTEGER,ce=(Number.MIN_SAFE_INTEGER,Number.isInteger,Number.isNaN,Number.parseInt,e=>new Error(e)),ae=ce("Unexpected end of array"),ie=ce("Integer out of Range");class le{constructor(e){this.arr=e,this.pos=0}}const he=e=>new le(e),de=e=>((e,t)=>{const s=O(e.arr.buffer,e.pos+e.arr.byteOffset,t);return e.pos+=t,s})(e,fe(e)),ue=e=>e.arr[e.pos++],fe=e=>{let t=0,s=1;const n=e.arr.length;for(;e.pos<n;){const n=e.arr[e.pos++];if(t+=(n&q)*s,s*=128,n<Y)return t;if(t>re)throw ie}throw ae},pe=m?e=>m.decode(de(e)):e=>{let t=fe(e);if(0===t)return"";{let s=String.fromCodePoint(ue(e));if(--t<100)for(;t--;)s+=String.fromCodePoint(ue(e));else for(;t>0;){const n=t<1e4?t:1e4,o=e.arr.subarray(e.pos,e.pos+n);e.pos+=n,s+=String.fromCodePoint.apply(null,o),t-=n}return decodeURIComponent(escape(s))}},ge=(e,t)=>{ee(e,0);const s=i.encodeStateVector(t);oe(e,s)},ye=(e,t,s)=>{ee(e,1),oe(e,i.encodeStateAsUpdate(t,s))},we=(e,t,s)=>{try{i.applyUpdate(t,de(e),s)}catch(e){console.error("Caught error while handling a Yjs update",e)}},me=we;class be{constructor(){this._observers=l()}on(e,t){h(this._observers,e,d).add(t)}once(e,t){const s=(...n)=>{this.off(e,s),t(...n)};this.on(e,s)}off(e,t){const s=this._observers.get(e);void 0!==s&&(s.delete(t),0===s.size&&this._observers.delete(e))}emit(e,t){return C((this._observers.get(e)||l()).values()).forEach((e=>e(...t)))}destroy(){this._observers=l()}}class ve extends be{constructor(e){super(),this.doc=e,this.clientID=e.clientID,this.states=new Map,this.meta=new Map,this._checkInterval=setInterval((()=>{const e=H();null!==this.getLocalState()&&15e3<=e-this.meta.get(this.clientID).lastUpdated&&this.setLocalState(this.getLocalState());const t=[];this.meta.forEach(((s,n)=>{n!==this.clientID&&3e4<=e-s.lastUpdated&&this.states.has(n)&&t.push(n)})),t.length>0&&_e(this,t,"timeout")}),z(3e3)),e.on("destroy",(()=>{this.destroy()})),this.setLocalState({})}destroy(){this.emit("destroy",[this]),this.setLocalState(null),super.destroy(),clearInterval(this._checkInterval)}getLocalState(){return this.states.get(this.clientID)||null}setLocalState(e){const t=this.clientID,s=this.meta.get(t),n=void 0===s?0:s.clock+1,o=this.states.get(t);null===e?this.states.delete(t):this.states.set(t,e),this.meta.set(t,{clock:n,lastUpdated:H()});const r=[],c=[],a=[],i=[];null===e?i.push(t):null==o?null!=e&&r.push(t):(c.push(t),U(o,e)||a.push(t)),(r.length>0||a.length>0||i.length>0)&&this.emit("change",[{added:r,updated:a,removed:i},"local"]),this.emit("update",[{added:r,updated:c,removed:i},"local"])}setLocalStateField(e,t){const s=this.getLocalState();null!==s&&this.setLocalState({...s,[e]:t})}getStates(){return this.states}}const _e=(e,t,s)=>{const n=[];for(let s=0;s<t.length;s++){const o=t[s];if(e.states.has(o)){if(e.states.delete(o),o===e.clientID){const t=e.meta.get(o);e.meta.set(o,{clock:t.clock+1,lastUpdated:H()})}n.push(o)}}n.length>0&&(e.emit("change",[{added:[],updated:[],removed:n},s]),e.emit("update",[{added:[],updated:[],removed:n},s]))},Ce=(e,t,s=e.states)=>{const n=t.length,o=X();ee(o,n);for(let r=0;r<n;r++){const n=t[r],c=s.get(n)||null,a=e.meta.get(n).clock;ee(o,n),ee(o,a),ne(o,JSON.stringify(c))}return K(o)};var Se=s(4406);const ke=[];ke[0]=(e,t,s,n,o)=>{ee(e,0);const r=((e,t,s,n)=>{const o=fe(e);switch(o){case 0:((e,t,s)=>{ye(t,s,de(e))})(e,t,s);break;case 1:we(e,s,n);break;case 2:me(e,s,n);break;default:throw new Error("Unknown message type")}return o})(t,e,s.doc,s);n&&1===r&&!s.synced&&(s.synced=!0)},ke[3]=(e,t,s,n,o)=>{ee(e,1),oe(e,Ce(s.awareness,Array.from(s.awareness.getStates().keys())))},ke[1]=(e,t,s,n,o)=>{((e,t,s)=>{const n=he(t),o=H(),r=[],c=[],a=[],i=[],l=fe(n);for(let t=0;t<l;t++){const t=fe(n);let s=fe(n);const l=JSON.parse(pe(n)),h=e.meta.get(t),d=e.states.get(t),u=void 0===h?0:h.clock;(u<s||u===s&&null===l&&e.states.has(t))&&(null===l?t===e.clientID&&null!=e.getLocalState()?s++:e.states.delete(t):e.states.set(t,l),e.meta.set(t,{clock:s,lastUpdated:o}),void 0===h&&null!==l?r.push(t):void 0!==h&&null===l?i.push(t):null!==l&&(U(l,d)||a.push(t),c.push(t)))}(r.length>0||a.length>0||i.length>0)&&e.emit("change",[{added:r,updated:a,removed:i},s]),(r.length>0||c.length>0||i.length>0)&&e.emit("update",[{added:r,updated:c,removed:i},s])})(s.awareness,de(t),s)},ke[2]=(e,t,s,n,o)=>{((e,t,s)=>{0===fe(e)&&s(0,pe(e))})(t,s.doc,((e,t)=>Ie(s,t)))};const Ie=(e,t)=>console.warn(`Permission denied to access ${e.url}.\n${t}`),Ue=(e,t,s)=>{const n=he(t),o=X(),r=fe(n),c=e.messageHandlers[r];return c?c(o,n,e,s,r):console.error("Unable to compute message"),o},Te=e=>{if(e.shouldConnect&&null===e.ws){const t=new e._WS(e.url);t.binaryType="arraybuffer",e.ws=t,e.wsconnecting=!0,e.wsconnected=!1,e.synced=!1,t.onmessage=s=>{e.wsLastMessageReceived=H();const n=Ue(e,new Uint8Array(s.data),!0);Z(n)>1&&t.send(K(n))},t.onerror=t=>{e.emit("connection-error",[t,e])},t.onclose=t=>{e.emit("connection-close",[t,e]),e.ws=null,e.wsconnecting=!1,e.wsconnected?(e.wsconnected=!1,e.synced=!1,_e(e.awareness,Array.from(e.awareness.getStates().keys()).filter((t=>t!==e.doc.clientID)),e),e.emit("status",[{status:"disconnected"}])):e.wsUnsuccessfulReconnects++,setTimeout(Te,J(100*V(2,e.wsUnsuccessfulReconnects),e.maxBackoffTime),e)},t.onopen=()=>{e.wsLastMessageReceived=H(),e.wsconnecting=!1,e.wsconnected=!0,e.wsUnsuccessfulReconnects=0,e.emit("status",[{status:"connected"}]);const s=X();if(ee(s,0),ge(s,e.doc),t.send(K(s)),null!==e.awareness.getLocalState()){const s=X();ee(s,1),oe(s,Ce(e.awareness,[e.doc.clientID])),t.send(K(s))}},e.emit("status",[{status:"connecting"}])}},Le=(e,t)=>{const s=e.ws;e.wsconnected&&s&&s.readyState===s.OPEN&&s.send(t),e.bcconnected&&F(e.bcChannel,t,e)};class Me extends be{constructor(e,t,s,{connect:n=!0,awareness:o=new ve(s),params:r={},WebSocketPolyfill:c=WebSocket,resyncInterval:a=-1,maxBackoffTime:i=2500,disableBc:l=!1}={}){for(super();"/"===e[e.length-1];)e=e.slice(0,e.length-1);const h=(e=>((e,t)=>{const s=[];for(const n in e)s.push(t(e[n],n));return s})(e,((e,t)=>`${encodeURIComponent(t)}=${encodeURIComponent(e)}`)).join("&"))(r);this.maxBackoffTime=i,this.bcChannel=e+"/"+t,this.url=e+"/"+t+(0===h.length?"":"?"+h),this.roomname=t,this.doc=s,this._WS=c,this.awareness=o,this.wsconnected=!1,this.wsconnecting=!1,this.bcconnected=!1,this.disableBc=l,this.wsUnsuccessfulReconnects=0,this.messageHandlers=ke.slice(),this._synced=!1,this.ws=null,this.wsLastMessageReceived=0,this.shouldConnect=n,this._resyncInterval=0,a>0&&(this._resyncInterval=setInterval((()=>{if(this.ws&&this.ws.readyState===WebSocket.OPEN){const e=X();ee(e,0),ge(e,s),this.ws.send(K(e))}}),a)),this._bcSubscriber=(e,t)=>{if(t!==this){const t=Ue(this,new Uint8Array(e),!1);Z(t)>1&&F(this.bcChannel,K(t),this)}},this._updateHandler=(e,t)=>{if(t!==this){const t=X();ee(t,0),((e,t)=>{ee(e,2),oe(e,t)})(t,e),Le(this,K(t))}},this.doc.on("update",this._updateHandler),this._awarenessUpdateHandler=({added:e,updated:t,removed:s},n)=>{const r=e.concat(t).concat(s),c=X();ee(c,1),oe(c,Ce(o,r)),Le(this,K(c))},this._unloadHandler=()=>{_e(this.awareness,[s.clientID],"window unload")},"undefined"!=typeof window?window.addEventListener("unload",this._unloadHandler):void 0!==Se&&Se.on("exit",this._unloadHandler),o.on("update",this._awarenessUpdateHandler),this._checkInterval=setInterval((()=>{this.wsconnected&&3e4<H()-this.wsLastMessageReceived&&this.ws.close()}),3e3),n&&this.connect()}get synced(){return this._synced}set synced(e){this._synced!==e&&(this._synced=e,this.emit("synced",[e]),this.emit("sync",[e]))}destroy(){0!==this._resyncInterval&&clearInterval(this._resyncInterval),clearInterval(this._checkInterval),this.disconnect(),"undefined"!=typeof window?window.removeEventListener("unload",this._unloadHandler):void 0!==Se&&Se.off("exit",this._unloadHandler),this.awareness.off("update",this._awarenessUpdateHandler),this.doc.off("update",this._updateHandler),super.destroy()}connectBc(){if(this.disableBc)return;var e,t;this.bcconnected||(e=this.bcChannel,t=this._bcSubscriber,W(e).subs.add(t),this.bcconnected=!0);const s=X();ee(s,0),ge(s,this.doc),F(this.bcChannel,K(s),this);const n=X();ee(n,0),ye(n,this.doc),F(this.bcChannel,K(n),this);const o=X();ee(o,3),F(this.bcChannel,K(o),this);const r=X();ee(r,1),oe(r,Ce(this.awareness,[this.doc.clientID])),F(this.bcChannel,K(r),this)}disconnectBc(){const e=X();ee(e,1),oe(e,Ce(this.awareness,[this.doc.clientID],new Map)),Le(this,K(e)),this.bcconnected&&(((e,t)=>{const s=W(e);s.subs.delete(t)&&0===s.subs.size&&(s.bc.close(),B.delete(e))})(this.bcChannel,this._bcSubscriber),this.bcconnected=!1)}disconnect(){this.shouldConnect=!1,this.disconnectBc(),null!==this.ws&&this.ws.close()}connect(){this.shouldConnect=!0,this.wsconnected||null!==this.ws||(Te(this),this.connectBc())}}class Ee{constructor(e){this._onConnectionClosed=e=>{1003===e.code&&(console.error("Document provider closed:",e.reason),(0,r.showErrorMessage)(this._trans.__("Document session error"),e.reason,[r.Dialog.okButton()]),this._sharedModel.dispose())},this._onSync=e=>{var t;e&&(this._ready.resolve(),null===(t=this._yWebsocketProvider)||void 0===t||t.off("sync",this._onSync))},this._ready=new c.PromiseDelegate,this._isDisposed=!1,this._path=e.path,this._contentType=e.contentType,this._format=e.format,this._serverUrl=e.url,this._sharedModel=e.model,this._awareness=e.model.awareness,this._yWebsocketProvider=null,this._trans=e.translator;const t=e.user;t.ready.then((()=>{this._onUserChanged(t)})).catch((e=>console.error(e))),t.userChanged.connect(this._onUserChanged,this),this._connect().catch((e=>console.warn(e)))}get isDisposed(){return this._isDisposed}get ready(){return this._ready.promise}dispose(){var e,t,s;this.isDisposed||(this._isDisposed=!0,null===(e=this._yWebsocketProvider)||void 0===e||e.off("connection-close",this._onConnectionClosed),null===(t=this._yWebsocketProvider)||void 0===t||t.off("sync",this._onSync),null===(s=this._yWebsocketProvider)||void 0===s||s.destroy(),a.Signal.clearData(this))}async _connect(){const e=await async function(e,t,s){const r=o.ServerConnection.makeSettings(),c=n.URLExt.join(r.baseUrl,"api/collaboration/session",encodeURIComponent(s)),a={method:"PUT",body:JSON.stringify({format:e,type:t})};let i;try{i=await o.ServerConnection.makeRequest(c,a,r)}catch(e){throw new o.ServerConnection.NetworkError(e)}let l=await i.text();if(l.length>0)try{l=JSON.parse(l)}catch(e){console.log("Not a JSON response body.",i)}if(!i.ok)throw new o.ServerConnection.ResponseError(i,l.message||l);return l}(this._format,this._contentType,this._path);this._yWebsocketProvider=new Me(this._serverUrl,`${e.format}:${e.type}:${e.fileId}`,this._sharedModel.ydoc,{disableBc:!0,params:{sessionId:e.sessionId},awareness:this._awareness}),this._yWebsocketProvider.on("sync",this._onSync),this._yWebsocketProvider.on("connection-close",this._onConnectionClosed)}_onUserChanged(e){this._awareness.setLocalStateField("user",e.identity)}}class Ae extends o.Drive{constructor(e,t){super({name:"RTC"}),this._onCreate=(e,t)=>{if("string"==typeof e.format)try{const s=new Ee({url:n.URLExt.join(this.serverSettings.wsUrl,"api/collaboration/room"),path:e.path,format:e.format,contentType:e.contentType,model:t,user:this._user,translator:this._trans}),o=`${e.format}:${e.contentType}:${e.path}`;this._providers.set(o,s),t.disposed.connect((()=>{const e=this._providers.get(o);e&&(e.dispose(),this._providers.delete(o))}))}catch(t){console.error(`Failed to open websocket connection for ${e.path}.\n:${t}`)}},this._user=e,this._trans=t,this._providers=new Map,this.sharedModelFactory=new De(this._onCreate)}dispose(){this.isDisposed||(this._providers.forEach((e=>e.dispose())),this._providers.clear(),super.dispose())}async get(e,t){if(t&&t.format&&t.type){const s=`${t.format}:${t.type}:${e}`,n=this._providers.get(s);if(n){const s=super.get(e,{...t,content:!1});return await n.ready,s}}return super.get(e,t)}async save(e,t={}){if(t.format&&t.type){const s=`${t.format}:${t.type}:${e}`;if(this._providers.get(s))return this.get(e,{...t,content:!1})}return super.save(e,t)}}class De{constructor(e){this._onCreate=e,this.collaborative=!0,this._documentFactories=new Map}registerDocumentFactory(e,t){if(this._documentFactories.has(e))throw new Error(`The content type ${e} already exists`);this._documentFactories.set(e,t)}createNew(e){if("string"==typeof e.format){if(e.collaborative&&this._documentFactories.has(e.contentType)){const t=this._documentFactories.get(e.contentType)(e);return this._onCreate(e,t),t}}else console.warn(`Only defined format are supported; got ${e.format}.`)}}const Re=new c.Token("@jupyter/collaboration-extension:ICollaborativeDrive")},4406:e=>{var t,s,n=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(s){try{return t.call(null,e,0)}catch(s){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{s="function"==typeof clearTimeout?clearTimeout:r}catch(e){s=r}}();var a,i=[],l=!1,h=-1;function d(){l&&a&&(l=!1,a.length?i=a.concat(i):h=-1,i.length&&u())}function u(){if(!l){var e=c(d);l=!0;for(var t=i.length;t;){for(a=i,i=[];++h<t;)a&&a[h].run();h=-1,t=i.length}a=null,l=!1,function(e){if(s===clearTimeout)return clearTimeout(e);if((s===r||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(e);try{return s(e)}catch(t){try{return s.call(null,e)}catch(t){return s.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var s=1;s<arguments.length;s++)t[s-1]=arguments[s];i.push(new f(e,t)),1!==i.length||l||c(u)},f.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}}}]);