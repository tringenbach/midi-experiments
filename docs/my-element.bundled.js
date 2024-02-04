/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,s=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),e=new WeakMap;class n{constructor(t,s,e){if(this._$cssResult$=!0,e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o;const i=this.t;if(s&&void 0===t){const s=void 0!==i&&1===i.length;s&&(t=e.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&e.set(i,t))}return t}toString(){return this.cssText}}const o=(t,...s)=>{const e=1===t.length?t[0]:s.reduce(((s,i,e)=>s+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[e+1]),t[0]);return new n(e,t,i)},r=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let s="";for(const i of t.cssRules)s+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(s)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:h,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:a,getOwnPropertySymbols:u,getPrototypeOf:d}=Object,p=globalThis,f=p.trustedTypes,g=f?f.emptyScript:"",v=p.reactiveElementPolyfillSupport,b=(t,s)=>t,y={toAttribute(t,s){switch(s){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},m=(t,s)=>!h(t,s),w={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:m};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=w){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),e=this.getPropertyDescriptor(t,i,s);void 0!==e&&c(this.prototype,t,e)}}static getPropertyDescriptor(t,s,i){const{get:e,set:n}=l(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t}};return{get(){return e?.call(this)},set(s){const o=e?.call(this);n.call(this,s),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=d(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,s=[...a(t),...u(t)];for(const i of s)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)s.unshift(r(t))}else void 0!==t&&s.push(r(t));return s}static _$Eu(t,s){const i=s.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$E_??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$E_?.delete(t)}_$ES(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,e)=>{if(s)i.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const s of e){const e=document.createElement("style"),n=t.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=s.cssText,i.appendChild(e)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,s,i){this._$AK(t,i)}_$EO(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(s,i.type);this._$Em=t,null==n?this.removeAttribute(e):this.setAttribute(e,n),this._$Em=null}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=e,this[e]=n.fromAttribute(s,t.type),this._$Em=null}}requestUpdate(t,s,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??m)(this[t],s))return;this.C(t,s,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),!0===i.reflect&&this._$Em!==t&&(this._$ET??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t)!0!==i.wrapped||this._$AL.has(s)||void 0===this[s]||this.C(s,this[s],i)}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$E_?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$Ej()}catch(s){throw t=!1,this._$Ej(),s}t&&this._$AE(s)}willUpdate(t){}_$AE(t){this._$E_?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$ET&&=this._$ET.forEach((t=>this._$EO(t,this[t]))),this._$Ej()}updated(t){}firstUpdated(t){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[b("elementProperties")]=new Map,$[b("finalized")]=new Map,v?.({ReactiveElement:$}),(p.reactiveElementVersions??=[]).push("2.0.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const S=globalThis,x=S.trustedTypes,C=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,A="?"+_,E=`<${A}>`,O=document,M=()=>O.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,T="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,j=/>/g,R=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,W=/"/g,B=/^(?:script|style|textarea|title)$/i,D=(t=>(s,...i)=>({_$litType$:t,strings:s,values:i}))(1),H=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),q=new WeakMap,J=O.createTreeWalker(O,129);function Z(t,s){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(s):s}const K=(t,s)=>{const i=t.length-1,e=[];let n,o=2===s?"<svg>":"",r=U;for(let s=0;s<i;s++){const i=t[s];let h,c,l=-1,a=0;for(;a<i.length&&(r.lastIndex=a,c=r.exec(i),null!==c);)a=r.lastIndex,r===U?"!--"===c[1]?r=z:void 0!==c[1]?r=j:void 0!==c[2]?(B.test(c[2])&&(n=RegExp("</"+c[2],"g")),r=R):void 0!==c[3]&&(r=R):r===R?">"===c[0]?(r=n??U,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,h=c[1],r=void 0===c[3]?R:'"'===c[3]?W:I):r===W||r===I?r=R:r===z||r===j?r=U:(r=R,n=void 0);const u=r===R&&t[s+1].startsWith("/>")?" ":"";o+=r===U?i+E:l>=0?(e.push(h),i.slice(0,l)+k+i.slice(l)+_+u):i+_+(-2===l?s:u)}return[Z(t,o+(t[i]||"<?>")+(2===s?"</svg>":"")),e]};class V{constructor({strings:t,_$litType$:s},i){let e;this.parts=[];let n=0,o=0;const r=t.length-1,h=this.parts,[c,l]=K(t,s);if(this.el=V.createElement(c,i),J.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(e=J.nextNode())&&h.length<r;){if(1===e.nodeType){if(e.hasAttributes())for(const t of e.getAttributeNames())if(t.endsWith(k)){const s=l[o++],i=e.getAttribute(t).split(_),r=/([.?@])?(.*)/.exec(s);h.push({type:1,index:n,name:r[2],strings:i,ctor:"."===r[1]?Y:"?"===r[1]?tt:"@"===r[1]?st:X}),e.removeAttribute(t)}else t.startsWith(_)&&(h.push({type:6,index:n}),e.removeAttribute(t));if(B.test(e.tagName)){const t=e.textContent.split(_),s=t.length-1;if(s>0){e.textContent=x?x.emptyScript:"";for(let i=0;i<s;i++)e.append(t[i],M()),J.nextNode(),h.push({type:2,index:++n});e.append(t[s],M())}}}else if(8===e.nodeType)if(e.data===A)h.push({type:2,index:n});else{let t=-1;for(;-1!==(t=e.data.indexOf(_,t+1));)h.push({type:7,index:n}),t+=_.length-1}n++}}static createElement(t,s){const i=O.createElement("template");return i.innerHTML=t,i}}function F(t,s,i=t,e){if(s===H)return s;let n=void 0!==e?i._$Co?.[e]:i._$Cl;const o=P(s)?void 0:s._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(t),n._$AT(t,i,e)),void 0!==e?(i._$Co??=[])[e]=n:i._$Cl=n),void 0!==n&&(s=F(t,n._$AS(t,s.values),n,e)),s}class G{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:s},parts:i}=this._$AD,e=(t?.creationScope??O).importNode(s,!0);J.currentNode=e;let n=J.nextNode(),o=0,r=0,h=i[0];for(;void 0!==h;){if(o===h.index){let s;2===h.type?s=new Q(n,n.nextSibling,this,t):1===h.type?s=new h.ctor(n,h.name,h.strings,this,t):6===h.type&&(s=new it(n,this,t)),this._$AV.push(s),h=i[++r]}o!==h?.index&&(n=J.nextNode(),o++)}return J.currentNode=O,e}p(t){let s=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,s),s+=i.strings.length-2):i._$AI(t[s])),s++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,s,i,e){this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=i,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return void 0!==s&&11===t?.nodeType&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=F(this,t,s),P(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==H&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>N(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==L&&P(this._$AH)?this._$AA.nextSibling.data=t:this.$(O.createTextNode(t)),this._$AH=t}g(t){const{values:s,_$litType$:i}=t,e="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=V.createElement(Z(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===e)this._$AH.p(s);else{const t=new G(e,this),i=t.u(this.options);t.p(s),this.$(i),this._$AH=t}}_$AC(t){let s=q.get(t.strings);return void 0===s&&q.set(t.strings,s=new V(t)),s}T(t){N(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,e=0;for(const n of t)e===s.length?s.push(i=new Q(this.k(M()),this.k(M()),this,this.options)):i=s[e],i._$AI(n),e++;e<s.length&&(this._$AR(i&&i._$AB.nextSibling,e),s.length=e)}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,i,e,n){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=s,this._$AM=e,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=L}_$AI(t,s=this,i,e){const n=this.strings;let o=!1;if(void 0===n)t=F(this,t,s,0),o=!P(t)||t!==this._$AH&&t!==H,o&&(this._$AH=t);else{const e=t;let r,h;for(t=n[0],r=0;r<n.length-1;r++)h=F(this,e[i+r],s,r),h===H&&(h=this._$AH[r]),o||=!P(h)||h!==this._$AH[r],h===L?t=L:t!==L&&(t+=(h??"")+n[r+1]),this._$AH[r]=h}o&&!e&&this.O(t)}O(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Y extends X{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===L?void 0:t}}class tt extends X{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==L)}}class st extends X{constructor(t,s,i,e,n){super(t,s,i,e,n),this.type=5}_$AI(t,s=this){if((t=F(this,t,s,0)??L)===H)return;const i=this._$AH,e=t===L&&i!==L||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==L&&(i===L||e);e&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,s,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){F(this,t)}}const et=S.litHtmlPolyfillSupport;et?.(V,Q),(S.litHtmlVersions??=[]).push("3.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class nt extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,s,i)=>{const e=i?.renderBefore??s;let n=e._$litPart$;if(void 0===n){const t=i?.renderBefore??null;e._$litPart$=n=new Q(s.insertBefore(M(),t),t,void 0,i??{})}return n._$AI(t),n})(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return H}}nt._$litElement$=!0,nt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:nt});const ot=globalThis.litElementPolyfillSupport;ot?.({LitElement:nt}),(globalThis.litElementVersions??=[]).push("4.0.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const rt=t=>(s,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,s)})):customElements.define(t,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ht={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:m},ct=(t=ht,s,i)=>{const{kind:e,metadata:n}=i;let o=globalThis.litPropertyMetadata.get(n);if(void 0===o&&globalThis.litPropertyMetadata.set(n,o=new Map),o.set(i.name,t),"accessor"===e){const{name:e}=i;return{set(i){const n=s.get.call(this);s.set.call(this,i),this.requestUpdate(e,n,t)},init(s){return void 0!==s&&this.C(e,void 0,t),s}}}if("setter"===e){const{name:e}=i;return function(i){const n=this[e];s.call(this,i),this.requestUpdate(e,n,t)}}throw Error("Unsupported decorator location: "+e)};function lt(t){return(s,i)=>"object"==typeof i?ct(t,s,i):((t,s,i)=>{const e=s.hasOwnProperty(i);return s.constructor.createProperty(i,e?{...t,wrapped:!0}:t),e?Object.getOwnPropertyDescriptor(s,i):void 0})(t,s,i)
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}var at=function(t,s,i,e){for(var n,o=arguments.length,r=o<3?s:null===e?e=Object.getOwnPropertyDescriptor(s,i):e,h=t.length-1;h>=0;h--)(n=t[h])&&(r=(o<3?n(r):o>3?n(s,i,r):n(s,i))||r);return o>3&&r&&Object.defineProperty(s,i,r),r};const ut=(t,s)=>t<s?-1:t===s?0:1;const dt=(pt=[0,4,3],[0,1,2,3,4,5,6,7,8,9,10,11].map((t=>new Set(pt.map((s=>s+t))))));var pt;function ft(t){if(t.length<2)return"";const s=t.toSorted(ut);s[0];const i=new Set(s.map((t=>t%12)).toSorted(ut));dt.filter((t=>t.isSubsetOf(i)))}function gt(t,s){for(const[i,e]of t.inputs)console.log("listening on ",i,e),e.onmidimessage=s}let vt=class extends nt{render(){return D`
      <div class="lit-tile" style="width: 10px; height: 10px">
      </div>
      <div class="unlit-tile" style="width: 10px; height: 10px">
      </div>
    `}};vt.styles=o`
    :host {
      display: block;
      width: 300px;
      height: 150px;
      background-color: #84847a;
      background-image: url(lcd-background.png);
      background-repeat: repeat;
    }
    .lit-tile {
      background-image: url(lcd-lit-tile.png);
    }
    .unlit-tile {
      background-image: url(lcd-unlit-tile.png);
    }
  `,vt=at([rt("lcd-screen")],vt);let bt=class extends nt{render(){return D`
      <svg width=${22} height=${22}>
        <circle fill="none" strokeWidth=${1} stroke="black" cx="${11}" cy="${11}" r="${10}" />
      </svg>
    `}};bt.styles=o`
    :host {
      display: inline-flex;
      border: solid 1px red;
      box-sizing: border-box;
    }
  `,bt=at([rt("test-notes")],bt);let yt=class extends nt{constructor(){super(...arguments),this.name="World",this.count=0,this.note=60,this.onMidiMessage=t=>{console.log(t);const s=Array.from(t.data);console.log(s)}}connectedCallback(){super.connectedCallback(),navigator.requestMIDIAccess&&(console.log("Browser supports MIDI!"),navigator.requestMIDIAccess({sysex:!0}).then((t=>{console.log("midi request success!"),this.midiAccess=t,console.log(t),gt(t,this.onMidiMessage),this.output=Array.from(t.outputs.values())[0],window.midiOutput=this.output,t.onstatechange=s=>{console.log(s.port.name,s.port.manufacturer,s.port.state),gt(t,this.onMidiMessage)}})).catch((t=>{console.log("midi request failed!",t)})))}disconnectedCallback(){super.disconnectedCallback()}render(){return D`
      <h1>${this.sayHello(this.name)}!</h1>
      <test-notes></test-notes>
      <lcd-screen></lcd-screen>
      <input type="range" min="0" max="16383" step="1" value="8192" orient="vertical" @input=${this._onPitchBendChange} />
      <input id="note" type="number" min="0" max="127" step="1" value="60" @input=${this._onNoteChange}/>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>

      <input id="programChange" type="number" min="0" max="127" step="1" value="0"/>
      <button @click=${this._onProgramChange} part="button">
        Tone
      </button>
      <slot></slot>
    `}_onPitchBendChange(t){this.pitchBend=Number.parseInt(t.currentTarget.value);const s=[224,127&this.pitchBend,this.pitchBend>>7&127];console.log("sending:",s),this.output.send(s)}_onProgramChange(t){this.tone=Number.parseInt(t.currentTarget.getRootNode().querySelector("#programChange").value);const s=[192,this.tone];console.log("sending:",s),this.output.send(s)}_onNoteChange(t){this.note=Number.parseInt(t.currentTarget.value)}_onClick(){this.count++,this.dispatchEvent(new CustomEvent("count-changed")),this.midiAccess&&function(t,s,i=60){const e=[144,i,75];s?(console.log("sending",e),s.send(e),s.send([128,i,64],window.performance.now()+2e3)):console.warn("could not find ",s)}(this.midiAccess,this.output,this.note)}sayHello(t){return`Hello, ${t}`}};yt.styles=o`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
      box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
      }
  `,at([lt()],yt.prototype,"name",void 0),at([lt({type:Number})],yt.prototype,"count",void 0),yt=at([rt("my-element")],yt);export{vt as LcdScreen,yt as MyElement,bt as TestNotes,ft as notesToChord};