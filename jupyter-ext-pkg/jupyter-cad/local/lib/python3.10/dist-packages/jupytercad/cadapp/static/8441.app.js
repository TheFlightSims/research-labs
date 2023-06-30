"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[8441,2970],{28441:(e,t,a)=>{a.r(t),a.d(t,{default:()=>D,lineColItem:()=>B});var r=a(41508),o=a(50558);const n=new o.Token("@jupyterlab/codeeditor:IEditorServices","A service for the text editor provider\n  for the application. Use this to create new text editors and host them in your\n  UI elements."),i=new o.Token("@jupyterlab/codeeditor:IPositionModel","A service to handle an code editor cursor position.");var s=a(22970),d=a(77352),l=a(42122),c=a(93119),u=a.n(c);class m extends u().Component{constructor(e){super(e),this._handleChange=e=>{this.setState({value:e.currentTarget.value})},this._handleSubmit=e=>{e.preventDefault();const t=parseInt(this._textInput.value,10);return!isNaN(t)&&isFinite(t)&&1<=t&&t<=this.props.maxLine&&this.props.handleSubmit(t),!1},this._handleFocus=()=>{this.setState({hasFocus:!0})},this._handleBlur=()=>{this.setState({hasFocus:!1})},this._textInput=null,this.translator=e.translator||d.nullTranslator,this._trans=this.translator.load("jupyterlab"),this.state={value:"",hasFocus:!1}}componentDidMount(){this._textInput.focus()}render(){return u().createElement("div",{className:"jp-lineFormSearch"},u().createElement("form",{name:"lineColumnForm",onSubmit:this._handleSubmit,noValidate:!0},u().createElement("div",{className:(0,l.classes)("jp-lineFormWrapper","lm-lineForm-wrapper",this.state.hasFocus?"jp-lineFormWrapperFocusWithin":void 0)},u().createElement("input",{type:"text",className:"jp-lineFormInput",onChange:this._handleChange,onFocus:this._handleFocus,onBlur:this._handleBlur,value:this.state.value,ref:e=>{this._textInput=e}}),u().createElement("div",{className:"jp-baseLineForm jp-lineFormButtonContainer"},u().createElement(l.lineFormIcon.react,{className:"jp-baseLineForm jp-lineFormButtonIcon",elementPosition:"center"}),u().createElement("input",{type:"submit",className:"jp-baseLineForm jp-lineFormButton",value:""}))),u().createElement("label",{className:"jp-lineFormCaption"},this._trans.__("Go to line number between 1 and %1",this.props.maxLine))))}}function f(e){const t=(e.translator||d.nullTranslator).load("jupyterlab");return u().createElement(s.Jy,{onClick:e.handleClick,source:t.__("Ln %1, Col %2",e.line,e.column),title:t.__("Go to line number…")})}class h extends l.VDomRenderer{constructor(e){super(new h.Model),this._popup=null,this.addClass("jp-mod-highlighted"),this.translator=e||d.nullTranslator}render(){return null===this.model?null:u().createElement(f,{line:this.model.line,column:this.model.column,translator:this.translator,handleClick:()=>this._handleClick()})}_handleClick(){this._popup&&this._popup.dispose();const e=l.ReactWidget.create(u().createElement(m,{handleSubmit:e=>this._handleSubmit(e),currentLine:this.model.line,maxLine:this.model.editor.lineCount,translator:this.translator}));this._popup=(0,s.U)({body:e,anchor:this,align:"right"})}_handleSubmit(e){this.model.editor.setCursorPosition({line:e-1,column:0}),this._popup.dispose(),this.model.editor.focus()}}!function(e){class t extends l.VDomModel{constructor(){super(...arguments),this._onSelectionChanged=()=>{const e=this._getAllState(),t=this.editor.getCursorPosition();this._line=t.line+1,this._column=t.column+1,this._triggerChange(e,this._getAllState())},this._line=1,this._column=1,this._editor=null}get editor(){return this._editor}set editor(e){var t;const a=this._editor;(null===(t=null==a?void 0:a.model)||void 0===t?void 0:t.selections)&&a.model.selections.changed.disconnect(this._onSelectionChanged);const r=this._getAllState();if(this._editor=e,this._editor){this._editor.model.selections.changed.connect(this._onSelectionChanged);const e=this._editor.getCursorPosition();this._column=e.column+1,this._line=e.line+1}else this._column=1,this._line=1;this._triggerChange(r,this._getAllState())}get line(){return this._line}get column(){return this._column}_getAllState(){return[this._line,this._column]}_triggerChange(e,t){e[0]===t[0]&&e[1]===t[1]||this.stateChanged.emit(void 0)}}e.Model=t}(h||(h={}));var p=a(68466),v=a(19026),g=a(23358),y=a(58267),_=a(27991),b=a.n(_),E=a(75289),$=a.n(E),z=a(17422),w=a(56136);function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},x.apply(this,arguments)}var j={allErrors:!0,multipleOfPrecision:8,strict:!1,verbose:!0},C=/^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/,S=/^data:([a-z]+\/[a-z0-9-+.]+)?;(?:name=(.*);)?base64,(.*)$/,k=["instancePath","keyword","params","schemaPath","parentSchema"];function F(e,t,a,r,o,n,i){var s=t.validationError,d=function(e,t){return void 0===e&&(e=[]),e.map((function(e){var a=e.instancePath,r=e.keyword,o=e.params,n=e.schemaPath,i=e.parentSchema,s=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,k).message,d=void 0===s?"":s,l=a.replace(/\//g,"."),c=(l+" "+d).trim();if("missingProperty"in o){l=l?l+"."+o.missingProperty:o.missingProperty;var u=o.missingProperty,m=(0,y.LI)((0,w.Z)(t,""+l.replace(/^\./,""))).title;if(m)d=d.replace(u,m);else{var f=(0,w.Z)(i,[y.MA,u,"title"]);f&&(d=d.replace(u,f))}c=d}else{var h=(0,y.LI)((0,w.Z)(t,""+l.replace(/^\./,""))).title;if(h)c=("'"+h+"' "+d).trim();else{var p=null==i?void 0:i.title;p&&(c=("'"+p+"' "+d).trim())}}return{name:r,property:l,message:d,params:o,stack:c,schemaPath:n}}))}(t.errors,i);s&&(d=[].concat(d,[{stack:s.message}])),"function"==typeof n&&(d=n(d,i));var l=(0,y.y5)(d);if(s&&(l=x({},l,{$schema:{__errors:[s.message]}})),"function"!=typeof o)return{errors:d,errorSchema:l};var c=(0,y.Tx)(e,r,a,r,!0),u=o(c,(0,y.v$)(c),i),m=(0,y.yv)(u);return(0,y.J0)({errors:d,errorSchema:l},m)}var I=function(){function e(e,t){this.ajv=void 0,this.localizer=void 0;var a=e.additionalMetaSchemas,r=e.customFormats,o=e.ajvOptionsOverrides,n=e.ajvFormatOptions,i=e.AjvClass;this.ajv=function(e,t,a,r,o){void 0===a&&(a={}),void 0===o&&(o=b());var n=new o(x({},j,a));return r?$()(n,r):!1!==r&&$()(n),n.addFormat("data-url",S),n.addFormat("color",C),n.addKeyword(y.jk),n.addKeyword(y.g$),Array.isArray(e)&&n.addMetaSchema(e),(0,z.Z)(t)&&Object.keys(t).forEach((function(e){n.addFormat(e,t[e])})),n}(a,r,o,n,i),this.localizer=t}var t=e.prototype;return t.toErrorList=function(e,t){return void 0===t&&(t=[]),(0,y.mp)(e,t)},t.rawValidation=function(e,t){var a,r,o=void 0;e[y.BO]&&(a=this.ajv.getSchema(e[y.BO]));try{void 0===a&&(a=this.ajv.compile(e)),a(t)}catch(e){o=e}return a&&("function"==typeof this.localizer&&this.localizer(a.errors),r=a.errors||void 0,a.errors=null),{errors:r,validationError:o}},t.validateFormData=function(e,t,a,r,o){return F(this,this.rawValidation(t,e),e,t,a,r,o)},t.isValid=function(e,t,a){var r,o=null!=(r=a[y.BO])?r:y.dW;try{void 0===this.ajv.getSchema(o)&&this.ajv.addSchema(a,o);var n,i=(0,y.RQ)(e);return i[y.BO]&&(n=this.ajv.getSchema(i[y.BO])),void 0===n&&(n=this.ajv.compile(i)),n(t)}catch(e){return console.warn("Error encountered compiling schema:",e),!1}finally{this.ajv.removeSchema(o)}},e}();function P(e,t){return void 0===e&&(e={}),new I(e,t)}var L=P();const T="@jupyterlab/codemirror-extension:plugin",R={id:"@jupyterlab/codemirror-extension:languages",description:"Provides the CodeMirror languages registry.",provides:v.IEditorLanguageRegistry,optional:[d.ITranslator],activate:(e,t)=>{const r=new v.EditorLanguageRegistry;for(const e of v.EditorLanguageRegistry.getDefaultLanguages(t))r.addLanguage(e);return r.addLanguage({name:"ipythongfm",mime:"text/x-ipythongfm",load:async()=>{const[e,t]=await Promise.all([Promise.all([a.e(2318),a.e(7664),a.e(6510),a.e(2553),a.e(8769)]).then(a.bind(a,38769)),a.e(5513).then(a.bind(a,55513))]);return e.markdown({base:e.markdownLanguage,codeLanguages:e=>r.findBest(e),extensions:[(0,v.parseMathIPython)(p.il.define(t.stexMath).parser)]})}}),r}},M={id:"@jupyterlab/codemirror-extension:themes",description:"Provides the CodeMirror theme registry",provides:v.IEditorThemeRegistry,optional:[d.ITranslator],activate:(e,t)=>{const a=new v.EditorThemeRegistry;for(const e of v.EditorThemeRegistry.getDefaultThemes(t))a.addTheme(e);return a}},O={id:"@jupyterlab/codemirror-extension:extensions",description:"Provides the CodeMirror extension factory registry.",provides:v.IEditorExtensionRegistry,requires:[v.IEditorThemeRegistry],optional:[d.ITranslator,g.ISettingRegistry,l.IFormRendererRegistry],activate:(e,t,a,r,n)=>{const i=new v.EditorExtensionRegistry;for(const e of v.EditorExtensionRegistry.getDefaultExtensions({themes:t,translator:a}))i.addExtension(e);if(r){const t=e=>{var t;i.baseConfiguration=null!==(t=e.get("defaultConfig").composite)&&void 0!==t?t:{}};Promise.all([r.load(T),e.restored]).then((([e])=>{t(e),e.changed.connect(t)})),null==n||n.addRenderer(`${T}.defaultConfig`,{fieldRenderer:e=>{const t=u().useMemo((()=>i.settingsSchema),[]),r=e.formContext.settings.id===T?i.baseConfiguration:i.defaultConfiguration,n={};for(const[e,a]of Object.entries(r))void 0!==t[e]&&(n[e]=a);return u().createElement("div",{className:"jp-FormGroup-contentNormal"},u().createElement("h3",{className:"jp-FormGroup-fieldLabel jp-FormGroup-contentItem"},e.schema.title),e.schema.description&&u().createElement("div",{className:"jp-FormGroup-description"},e.schema.description),u().createElement(l.FormComponent,{schema:{title:e.schema.title,description:e.schema.description,type:"object",properties:t,additionalProperties:!1},validator:L,formData:{...n,...e.formData},formContext:{defaultFormData:n},liveValidate:!0,onChange:t=>{var a;const r={};for(const[e,i]of Object.entries(null!==(a=t.formData)&&void 0!==a?a:{})){const t=n[e];void 0!==t&&o.JSONExt.deepEqual(i,t)||(r[e]=i)}e.onChange(r)},tagName:"div",translator:null!=a?a:d.nullTranslator}))}})}return i}},N={id:"@jupyterlab/codemirror-extension:binding",description:"Register the CodeMirror extension factory binding the editor and the shared model.",autoStart:!0,requires:[v.IEditorExtensionRegistry],activate:(e,t)=>{t.addExtension({name:"shared-model-binding",factory:e=>{var t;const a=e.model.sharedModel;return v.EditorExtensionRegistry.createImmutableExtension((0,v.ybinding)({ytext:a.ysource,undoManager:null!==(t=a.undoManager)&&void 0!==t?t:void 0}))}})}},A={id:"@jupyterlab/codemirror-extension:services",description:"Provides the service to instantiate CodeMirror editors.",provides:n,requires:[v.IEditorLanguageRegistry,v.IEditorExtensionRegistry,v.IEditorThemeRegistry],optional:[d.ITranslator],activate:(e,t,a,r)=>({factoryService:new v.CodeMirrorEditorFactory({extensions:a,languages:t,translator:null!=r?r:d.nullTranslator}),mimeTypeService:new v.CodeMirrorMimeTypeService(t)})},B={id:"@jupyterlab/codemirror-extension:line-col-status",description:"Provides the code editor cursor position model.",autoStart:!0,requires:[d.ITranslator],optional:[r.ILabShell,s.WQ],provides:i,activate:(e,t,a,r)=>{const o=new h(t),n=new Set;function i(e,t){Promise.all([...n].map((e=>e(t.newValue)))).then((e=>{var t;o.model.editor=null!==(t=e.filter((e=>null!==e))[0])&&void 0!==t?t:null})).catch((e=>{console.error("Get editors",e)}))}return r&&r.registerStatusItem(B.id,{item:o,align:"right",rank:2,isActive:()=>!!o.model.editor}),a&&a.currentChanged.connect(i),{addEditorProvider:t=>{n.add(t),e.shell.currentWidget&&i(e.shell,{newValue:e.shell.currentWidget,oldValue:null})},update:()=>{i(e.shell,{oldValue:e.shell.currentWidget,newValue:e.shell.currentWidget})}}}},D=[R,M,N,O,A,B]},22970:(e,t,a)=>{a.d(t,{MN:()=>n,WQ:()=>p,ko:()=>u,_3:()=>h,Jy:()=>f,U:()=>l});var r=a(93119),o=a.n(r);function n(e){const{spacing:t,children:a,className:o,...n}=e,i=r.Children.count(a);return r.createElement("div",{className:`jp-StatusBar-GroupItem ${o||""}`,...n},r.Children.map(a,((e,a)=>0===a?r.createElement("div",{style:{marginRight:`${t}px`}},e):a===i-1?r.createElement("div",{style:{marginLeft:`${t}px`}},e):r.createElement("div",{style:{margin:`0px ${t}px`}},e))))}var i,s=a(42122),d=a(23190);function l(e){const t=new c(e);return e.startHidden||t.launch(),t}class c extends d.Widget{constructor(e){super(),this._body=e.body,this._body.addClass("jp-StatusBar-HoverItem"),this._anchor=e.anchor,this._align=e.align,e.hasDynamicSize&&(this._observer=new ResizeObserver((()=>{this.update()}))),(this.layout=new d.PanelLayout).addWidget(e.body),this._body.node.addEventListener("resize",(()=>{this.update()}))}launch(){this._setGeometry(),d.Widget.attach(this,document.body),this.update(),this._anchor.addClass("jp-mod-clicked"),this._anchor.removeClass("jp-mod-highlight")}onUpdateRequest(e){this._setGeometry(),super.onUpdateRequest(e)}onAfterAttach(e){var t;document.addEventListener("click",this,!1),this.node.addEventListener("keydown",this,!1),window.addEventListener("resize",this,!1),null===(t=this._observer)||void 0===t||t.observe(this._body.node)}onBeforeDetach(e){var t;null===(t=this._observer)||void 0===t||t.disconnect(),document.removeEventListener("click",this,!1),this.node.removeEventListener("keydown",this,!1),window.removeEventListener("resize",this,!1)}onResize(){this.update()}dispose(){var e;null===(e=this._observer)||void 0===e||e.disconnect(),super.dispose(),this._anchor.removeClass("jp-mod-clicked"),this._anchor.addClass("jp-mod-highlight")}handleEvent(e){switch(e.type){case"keydown":this._evtKeydown(e);break;case"click":this._evtClick(e);break;case"resize":this.onResize()}}_evtClick(e){!e.target||this._body.node.contains(e.target)||this._anchor.node.contains(e.target)||this.dispose()}_evtKeydown(e){27===e.keyCode&&(e.stopPropagation(),e.preventDefault(),this.dispose())}_setGeometry(){let e=0;const t=this._anchor.node.getBoundingClientRect(),a=this._body.node.getBoundingClientRect();"right"===this._align&&(e=-(a.width-t.width));const r=window.getComputedStyle(this._body.node);s.HoverBox.setGeometry({anchor:t,host:document.body,maxHeight:500,minHeight:20,node:this._body.node,offset:{horizontal:e},privilege:"forceAbove",style:r})}}function u(e){const{width:t,percentage:a,...o}=e;return r.createElement("div",{className:"jp-Statusbar-ProgressBar-progress-bar",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":a},r.createElement(m,{...{percentage:a,...o},contentWidth:t}))}function m(e){return r.createElement("div",{style:{width:`${e.percentage}%`}},r.createElement("p",null,e.content))}function f(e){const{title:t,source:a,className:o,...n}=e;return r.createElement("span",{className:`jp-StatusBar-TextItem ${o}`,title:t,...n},a)}function h(e){return o().createElement("div",{className:"jp-Statusbar-ProgressCircle",role:"progressbar","aria-label":e.label||"Unlabelled progress circle","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.progress},o().createElement("svg",{viewBox:"0 0 250 250"},o().createElement("circle",{cx:"125",cy:"125",r:"104",stroke:"var(--jp-inverse-layout-color3)",strokeWidth:"20",fill:"none"}),o().createElement("path",{transform:"translate(125,125) scale(.9)",d:(e=>{const t=Math.max(3.6*e,.1),a=t*Math.PI/180,r=104*Math.sin(a),o=-104*Math.cos(a);return"M 0 0 v -104 A 104 104 1 "+(t<180?1:0)+" 0 "+r.toFixed(4)+" "+o.toFixed(4)+" z"})(e.progress),fill:"var(--jp-inverse-layout-color3)"})))}a(18246),a(75324),function(e){e.statusItemDefaults={align:"left",rank:0,isActive:()=>!0,activeStateChanged:void 0}}(i||(i={}));const p=new(a(50558).Token)("@jupyterlab/statusbar:IStatusBar","A service for the status bar on the application. Use this if you want to add new status bar items.")},95694:(e,t)=>{function a(e,t){return{validate:e,compare:t}}Object.defineProperty(t,"__esModule",{value:!0}),t.formatNames=t.fastFormats=t.fullFormats=void 0,t.fullFormats={date:a(n,i),time:a(d,l),"date-time":a((function(e){const t=e.split(c);return 2===t.length&&n(t[0])&&d(t[1],!0)}),u),duration:/^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,uri:function(e){return m.test(e)&&f.test(e)},"uri-reference":/^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,"uri-template":/^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,url:/^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,email:/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,hostname:/^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,ipv4:/^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,ipv6:/^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,regex:function(e){if(y.test(e))return!1;try{return new RegExp(e),!0}catch(e){return!1}},uuid:/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,"json-pointer":/^(?:\/(?:[^~/]|~0|~1)*)*$/,"json-pointer-uri-fragment":/^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,"relative-json-pointer":/^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,byte:function(e){return h.lastIndex=0,h.test(e)},int32:{type:"number",validate:function(e){return Number.isInteger(e)&&e<=v&&e>=p}},int64:{type:"number",validate:function(e){return Number.isInteger(e)}},float:{type:"number",validate:g},double:{type:"number",validate:g},password:!0,binary:!0},t.fastFormats={...t.fullFormats,date:a(/^\d\d\d\d-[0-1]\d-[0-3]\d$/,i),time:a(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,l),"date-time":a(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,u),uri:/^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,"uri-reference":/^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,email:/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i},t.formatNames=Object.keys(t.fullFormats);const r=/^(\d\d\d\d)-(\d\d)-(\d\d)$/,o=[0,31,28,31,30,31,30,31,31,30,31,30,31];function n(e){const t=r.exec(e);if(!t)return!1;const a=+t[1],n=+t[2],i=+t[3];return n>=1&&n<=12&&i>=1&&i<=(2===n&&function(e){return e%4==0&&(e%100!=0||e%400==0)}(a)?29:o[n])}function i(e,t){if(e&&t)return e>t?1:e<t?-1:0}const s=/^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i;function d(e,t){const a=s.exec(e);if(!a)return!1;const r=+a[1],o=+a[2],n=+a[3],i=a[5];return(r<=23&&o<=59&&n<=59||23===r&&59===o&&60===n)&&(!t||""!==i)}function l(e,t){if(!e||!t)return;const a=s.exec(e),r=s.exec(t);return a&&r?(e=a[1]+a[2]+a[3]+(a[4]||""))>(t=r[1]+r[2]+r[3]+(r[4]||""))?1:e<t?-1:0:void 0}const c=/t|\s/i;function u(e,t){if(!e||!t)return;const[a,r]=e.split(c),[o,n]=t.split(c),s=i(a,o);return void 0!==s?s||l(r,n):void 0}const m=/\/|:/,f=/^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,h=/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm,p=-(2**31),v=2**31-1;function g(){return!0}const y=/[^\\]\\Z/},75289:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=a(95694),o=a(57951),n=a(15923),i=new n.Name("fullFormats"),s=new n.Name("fastFormats"),d=(e,t={keywords:!0})=>{if(Array.isArray(t))return l(e,t,r.fullFormats,i),e;const[a,n]="fast"===t.mode?[r.fastFormats,s]:[r.fullFormats,i];return l(e,t.formats||r.formatNames,a,n),t.keywords&&o.default(e),e};function l(e,t,a,r){var o,i;null!==(o=(i=e.opts.code).formats)&&void 0!==o||(i.formats=n._`require("ajv-formats/dist/formats").${r}`);for(const r of t)e.addFormat(r,a[r])}d.get=(e,t="full")=>{const a=("fast"===t?r.fastFormats:r.fullFormats)[e];if(!a)throw new Error(`Unknown format "${e}"`);return a},e.exports=t=d,Object.defineProperty(t,"__esModule",{value:!0}),t.default=d},57951:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.formatLimitDefinition=void 0;const r=a(27991),o=a(15923),n=o.operators,i={formatMaximum:{okStr:"<=",ok:n.LTE,fail:n.GT},formatMinimum:{okStr:">=",ok:n.GTE,fail:n.LT},formatExclusiveMaximum:{okStr:"<",ok:n.LT,fail:n.GTE},formatExclusiveMinimum:{okStr:">",ok:n.GT,fail:n.LTE}},s={message:({keyword:e,schemaCode:t})=>o.str`should be ${i[e].okStr} ${t}`,params:({keyword:e,schemaCode:t})=>o._`{comparison: ${i[e].okStr}, limit: ${t}}`};t.formatLimitDefinition={keyword:Object.keys(i),type:"string",schemaType:"string",$data:!0,error:s,code(e){const{gen:t,data:a,schemaCode:n,keyword:s,it:d}=e,{opts:l,self:c}=d;if(!l.validateFormats)return;const u=new r.KeywordCxt(d,c.RULES.all.format.definition,"format");function m(e){return o._`${e}.compare(${a}, ${n}) ${i[s].fail} 0`}u.$data?function(){const a=t.scopeValue("formats",{ref:c.formats,code:l.code.formats}),r=t.const("fmt",o._`${a}[${u.schemaCode}]`);e.fail$data(o.or(o._`typeof ${r} != "object"`,o._`${r} instanceof RegExp`,o._`typeof ${r}.compare != "function"`,m(r)))}():function(){const a=u.schema,r=c.formats[a];if(!r||!0===r)return;if("object"!=typeof r||r instanceof RegExp||"function"!=typeof r.compare)throw new Error(`"${s}": format "${a}" does not define "compare" function`);const n=t.scopeValue("formats",{key:a,ref:r,code:l.code.formats?o._`${l.code.formats}${o.getProperty(a)}`:void 0});e.fail$data(m(n))}()},dependencies:["format"]},t.default=e=>(e.addKeyword(t.formatLimitDefinition),e)}}]);