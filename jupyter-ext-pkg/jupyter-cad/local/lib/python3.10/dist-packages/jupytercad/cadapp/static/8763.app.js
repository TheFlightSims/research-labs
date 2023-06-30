"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[8763,9631],{28763:(e,t,n)=>{n.r(t),n.d(t,{ILauncher:()=>s,Launcher:()=>p,LauncherModel:()=>u});const s=new(n(50558).Token)("@jupyterlab/launcher:ILauncher","A service for the application activity launcher.\n  Use this to add your extension activities to the launcher panel.");var a,r=n(45494),c=n(77352),o=n(42122),i=n(18246),l=n(75324),d=n(99969),h=n(23190),m=n(93119);class u extends o.VDomModel{constructor(){super(...arguments),this.itemsList=[]}add(e){const t=a.createItem(e);return this.itemsList.push(t),this.stateChanged.emit(void 0),new l.DisposableDelegate((()=>{i.ArrayExt.removeFirstOf(this.itemsList,t),this.stateChanged.emit(void 0)}))}items(){return this.itemsList[Symbol.iterator]()}}class p extends o.VDomRenderer{constructor(e){super(e.model),this._pending=!1,this._cwd="",this._cwd=e.cwd,this.translator=e.translator||c.nullTranslator,this._trans=this.translator.load("jupyterlab"),this._callback=e.callback,this._commands=e.commands,this.addClass("jp-Launcher")}get cwd(){return this._cwd}set cwd(e){this._cwd=e,this.update()}get pending(){return this._pending}set pending(e){this._pending=e}render(){if(!this.model)return null;const e=[this._trans.__("Notebook"),this._trans.__("Console"),this._trans.__("Other")],t=[this._trans.__("Notebook"),this._trans.__("Console")],n=Object.create(null);for(const e of this.model.items()){const t=e.category||this._trans.__("Other");t in n||(n[t]=[]),n[t].push(e)}for(const e in n)n[e]=n[e].sort(((e,t)=>a.sortCmp(e,t,this._cwd,this._commands)));const s=[];let c;const l=[];for(const t of e)l.push(t);for(const t in n)-1===e.indexOf(t)&&l.push(t);return l.forEach((e=>{if(!n[e])return;const l=n[e][0],d={...l.args,cwd:this.cwd},u=t.indexOf(e)>-1,p=this._commands.iconClass(l.command,d),_=this._commands.icon(l.command,d);e in n&&(c=m.createElement("div",{className:"jp-Launcher-section",key:e},m.createElement("div",{className:"jp-Launcher-sectionHeader"},m.createElement(o.LabIcon.resolveReact,{icon:_,iconClass:(0,o.classes)(p,"jp-Icon-cover"),stylesheet:"launcherSection"}),m.createElement("h2",{className:"jp-Launcher-sectionTitle"},e)),m.createElement("div",{className:"jp-Launcher-cardContainer"},Array.from((0,i.map)(n[e],(e=>function(e,t,n,s,c,i){const l=t.command,d={...t.args,cwd:n.cwd},u=s.caption(l,d),p=s.label(l,d),_=e?p:u||p,g=()=>{!0!==n.pending&&(n.pending=!0,s.execute(l,{...t.args,cwd:n.cwd}).then((e=>{n.pending=!1,e instanceof h.Widget&&i(e)})).catch((e=>{console.error(e),n.pending=!1,(0,r.showErrorMessage)(c._p("Error","Launcher Error"),e)})))},E=s.iconClass(l,d),L=s.icon(l,d);return m.createElement("div",{className:"jp-LauncherCard",title:_,onClick:g,onKeyPress:e=>{"Enter"===e.key&&g()},tabIndex:0,"data-category":t.category||c.__("Other"),key:a.keyProperty.get(t)},m.createElement("div",{className:"jp-LauncherCard-icon"},e?t.kernelIconUrl?m.createElement("img",{src:t.kernelIconUrl,className:"jp-Launcher-kernelIcon"}):m.createElement("div",{className:"jp-LauncherCard-noKernelIcon"},p[0].toUpperCase()):m.createElement(o.LabIcon.resolveReact,{icon:L,iconClass:(0,o.classes)(E,"jp-Icon-cover"),stylesheet:"launcherCard"})),m.createElement("div",{className:"jp-LauncherCard-label",title:_},m.createElement("p",null,p)))}(u,e,this,this._commands,this._trans,this._callback)))))),s.push(c))})),m.createElement("div",{className:"jp-Launcher-body"},m.createElement("div",{className:"jp-Launcher-content"},m.createElement("div",{className:"jp-Launcher-cwd"},m.createElement("h3",null,this.cwd)),s))}}!function(e){let t=0;e.keyProperty=new d.AttachedProperty({name:"key",create:()=>t++}),e.createItem=function(e){return{...e,category:e.category||"",rank:void 0!==e.rank?e.rank:1/0}},e.sortCmp=function(e,t,n,s){const a=e.rank,r=t.rank;if(a!==r&&void 0!==a&&void 0!==r)return a<r?-1:1;const c=s.label(e.command,{...e.args,cwd:n}),o=s.label(t.command,{...t.args,cwd:n});return c.localeCompare(o)}}(a||(a={}))}}]);