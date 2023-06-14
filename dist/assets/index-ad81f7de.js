(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function ii(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const te={},un=[],Ue=()=>{},au=()=>!1,cu=/^on[^a-z]/,Vr=t=>cu.test(t),oi=t=>t.startsWith("onUpdate:"),he=Object.assign,ai=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},lu=Object.prototype.hasOwnProperty,V=(t,e)=>lu.call(t,e),B=Array.isArray,dn=t=>Wr(t)==="[object Map]",Aa=t=>Wr(t)==="[object Set]",H=t=>typeof t=="function",ue=t=>typeof t=="string",ci=t=>typeof t=="symbol",se=t=>t!==null&&typeof t=="object",ka=t=>se(t)&&H(t.then)&&H(t.catch),Pa=Object.prototype.toString,Wr=t=>Pa.call(t),uu=t=>Wr(t).slice(8,-1),xa=t=>Wr(t)==="[object Object]",li=t=>ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,mr=ii(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Kr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},du=/-(\w)/g,Qe=Kr(t=>t.replace(du,(e,n)=>n?n.toUpperCase():"")),fu=/\B([A-Z])/g,En=Kr(t=>t.replace(fu,"-$1").toLowerCase()),qr=Kr(t=>t.charAt(0).toUpperCase()+t.slice(1)),us=Kr(t=>t?`on${qr(t)}`:""),Vn=(t,e)=>!Object.is(t,e),_r=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Rr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ns=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Yi;const Ms=()=>Yi||(Yi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ui(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ue(r)?mu(r):ui(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(ue(t))return t;if(se(t))return t}}const hu=/;(?![^(]*\))/g,pu=/:([^]+)/,gu=/\/\*[^]*?\*\//g;function mu(t){const e={};return t.replace(gu,"").split(hu).forEach(n=>{if(n){const r=n.split(pu);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function qe(t){let e="";if(ue(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const r=qe(t[n]);r&&(e+=r+" ")}else if(se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const _u="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vu=ii(_u);function Oa(t){return!!t||t===""}const Le=t=>ue(t)?t:t==null?"":B(t)||se(t)&&(t.toString===Pa||!H(t.toString))?JSON.stringify(t,Na,2):String(t),Na=(t,e)=>e&&e.__v_isRef?Na(t,e.value):dn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Aa(e)?{[`Set(${e.size})`]:[...e.values()]}:se(e)&&!B(e)&&!xa(e)?String(e):e;let Me;class bu{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Me,!e&&Me&&(this.index=(Me.scopes||(Me.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Me;try{return Me=this,e()}finally{Me=n}}}on(){Me=this}off(){Me=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function yu(t,e=Me){e&&e.active&&e.effects.push(t)}function wu(){return Me}const di=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ma=t=>(t.w&Pt)>0,Da=t=>(t.n&Pt)>0,Iu=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Pt},Eu=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Ma(s)&&!Da(s)?s.delete(t):e[n++]=s,s.w&=~Pt,s.n&=~Pt}e.length=n}},Ds=new WeakMap;let Nn=0,Pt=1;const Ls=30;let De;const Vt=Symbol(""),$s=Symbol("");class fi{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,yu(this,r)}run(){if(!this.active)return this.fn();let e=De,n=Ct;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=De,De=this,Ct=!0,Pt=1<<++Nn,Nn<=Ls?Iu(this):Xi(this),this.fn()}finally{Nn<=Ls&&Eu(this),Pt=1<<--Nn,De=this.parent,Ct=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){De===this?this.deferStop=!0:this.active&&(Xi(this),this.onStop&&this.onStop(),this.active=!1)}}function Xi(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Ct=!0;const La=[];function Tn(){La.push(Ct),Ct=!1}function Cn(){const t=La.pop();Ct=t===void 0?!0:t}function Ee(t,e,n){if(Ct&&De){let r=Ds.get(t);r||Ds.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=di()),$a(s)}}function $a(t,e){let n=!1;Nn<=Ls?Da(t)||(t.n|=Pt,n=!Ma(t)):n=!t.has(De),n&&(t.add(De),De.deps.push(t))}function ct(t,e,n,r,s,i){const o=Ds.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&B(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":B(t)?li(n)&&a.push(o.get("length")):(a.push(o.get(Vt)),dn(t)&&a.push(o.get($s)));break;case"delete":B(t)||(a.push(o.get(Vt)),dn(t)&&a.push(o.get($s)));break;case"set":dn(t)&&a.push(o.get(Vt));break}if(a.length===1)a[0]&&Us(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Us(di(c))}}function Us(t,e){const n=B(t)?t:[...t];for(const r of n)r.computed&&Qi(r);for(const r of n)r.computed||Qi(r)}function Qi(t,e){(t!==De||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Tu=ii("__proto__,__v_isRef,__isVue"),Ua=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ci)),Cu=hi(),Ru=hi(!1,!0),Su=hi(!0),Zi=Au();function Au(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=W(this);for(let i=0,o=this.length;i<o;i++)Ee(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(W)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Tn();const r=W(this)[e].apply(this,n);return Cn(),r}}),t}function ku(t){const e=W(this);return Ee(e,"has",t),e.hasOwnProperty(t)}function hi(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Wu:za:e?ja:Ha).get(r))return r;const o=B(r);if(!t){if(o&&V(Zi,s))return Reflect.get(Zi,s,i);if(s==="hasOwnProperty")return ku}const a=Reflect.get(r,s,i);return(ci(s)?Ua.has(s):Tu(s))||(t||Ee(r,"get",s),e)?a:oe(a)?o&&li(s)?a:a.value:se(a)?t?Va(a):ft(a):a}}const Pu=Ba(),xu=Ba(!0);function Ba(t=!1){return function(n,r,s,i){let o=n[r];if(_n(o)&&oe(o)&&!oe(s))return!1;if(!t&&(!Sr(s)&&!_n(s)&&(o=W(o),s=W(s)),!B(n)&&oe(o)&&!oe(s)))return o.value=s,!0;const a=B(n)&&li(r)?Number(r)<n.length:V(n,r),c=Reflect.set(n,r,s,i);return n===W(i)&&(a?Vn(s,o)&&ct(n,"set",r,s):ct(n,"add",r,s)),c}}function Ou(t,e){const n=V(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&ct(t,"delete",e,void 0),r}function Nu(t,e){const n=Reflect.has(t,e);return(!ci(e)||!Ua.has(e))&&Ee(t,"has",e),n}function Mu(t){return Ee(t,"iterate",B(t)?"length":Vt),Reflect.ownKeys(t)}const Fa={get:Cu,set:Pu,deleteProperty:Ou,has:Nu,ownKeys:Mu},Du={get:Su,set(t,e){return!0},deleteProperty(t,e){return!0}},Lu=he({},Fa,{get:Ru,set:xu}),pi=t=>t,Gr=t=>Reflect.getPrototypeOf(t);function lr(t,e,n=!1,r=!1){t=t.__v_raw;const s=W(t),i=W(e);n||(e!==i&&Ee(s,"get",e),Ee(s,"get",i));const{has:o}=Gr(s),a=r?pi:n?_i:Wn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function ur(t,e=!1){const n=this.__v_raw,r=W(n),s=W(t);return e||(t!==s&&Ee(r,"has",t),Ee(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function dr(t,e=!1){return t=t.__v_raw,!e&&Ee(W(t),"iterate",Vt),Reflect.get(t,"size",t)}function eo(t){t=W(t);const e=W(this);return Gr(e).has.call(e,t)||(e.add(t),ct(e,"add",t,t)),this}function to(t,e){e=W(e);const n=W(this),{has:r,get:s}=Gr(n);let i=r.call(n,t);i||(t=W(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Vn(e,o)&&ct(n,"set",t,e):ct(n,"add",t,e),this}function no(t){const e=W(this),{has:n,get:r}=Gr(e);let s=n.call(e,t);s||(t=W(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&ct(e,"delete",t,void 0),i}function ro(){const t=W(this),e=t.size!==0,n=t.clear();return e&&ct(t,"clear",void 0,void 0),n}function fr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=W(o),c=e?pi:t?_i:Wn;return!t&&Ee(a,"iterate",Vt),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function hr(t,e,n){return function(...r){const s=this.__v_raw,i=W(s),o=dn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?pi:e?_i:Wn;return!e&&Ee(i,"iterate",c?$s:Vt),{next(){const{value:p,done:h}=l.next();return h?{value:p,done:h}:{value:a?[u(p[0]),u(p[1])]:u(p),done:h}},[Symbol.iterator](){return this}}}}function _t(t){return function(...e){return t==="delete"?!1:this}}function $u(){const t={get(i){return lr(this,i)},get size(){return dr(this)},has:ur,add:eo,set:to,delete:no,clear:ro,forEach:fr(!1,!1)},e={get(i){return lr(this,i,!1,!0)},get size(){return dr(this)},has:ur,add:eo,set:to,delete:no,clear:ro,forEach:fr(!1,!0)},n={get(i){return lr(this,i,!0)},get size(){return dr(this,!0)},has(i){return ur.call(this,i,!0)},add:_t("add"),set:_t("set"),delete:_t("delete"),clear:_t("clear"),forEach:fr(!0,!1)},r={get(i){return lr(this,i,!0,!0)},get size(){return dr(this,!0)},has(i){return ur.call(this,i,!0)},add:_t("add"),set:_t("set"),delete:_t("delete"),clear:_t("clear"),forEach:fr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=hr(i,!1,!1),n[i]=hr(i,!0,!1),e[i]=hr(i,!1,!0),r[i]=hr(i,!0,!0)}),[t,n,e,r]}const[Uu,Bu,Fu,Hu]=$u();function gi(t,e){const n=e?t?Hu:Fu:t?Bu:Uu;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(V(n,s)&&s in r?n:r,s,i)}const ju={get:gi(!1,!1)},zu={get:gi(!1,!0)},Vu={get:gi(!0,!1)},Ha=new WeakMap,ja=new WeakMap,za=new WeakMap,Wu=new WeakMap;function Ku(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qu(t){return t.__v_skip||!Object.isExtensible(t)?0:Ku(uu(t))}function ft(t){return _n(t)?t:mi(t,!1,Fa,ju,Ha)}function Gu(t){return mi(t,!1,Lu,zu,ja)}function Va(t){return mi(t,!0,Du,Vu,za)}function mi(t,e,n,r,s){if(!se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=qu(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function fn(t){return _n(t)?fn(t.__v_raw):!!(t&&t.__v_isReactive)}function _n(t){return!!(t&&t.__v_isReadonly)}function Sr(t){return!!(t&&t.__v_isShallow)}function Wa(t){return fn(t)||_n(t)}function W(t){const e=t&&t.__v_raw;return e?W(e):t}function Ka(t){return Rr(t,"__v_skip",!0),t}const Wn=t=>se(t)?ft(t):t,_i=t=>se(t)?Va(t):t;function qa(t){Ct&&De&&(t=W(t),$a(t.dep||(t.dep=di())))}function Ga(t,e){t=W(t);const n=t.dep;n&&Us(n)}function oe(t){return!!(t&&t.__v_isRef===!0)}function Ju(t){return Ja(t,!1)}function Yu(t){return Ja(t,!0)}function Ja(t,e){return oe(t)?t:new Xu(t,e)}class Xu{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:W(e),this._value=n?e:Wn(e)}get value(){return qa(this),this._value}set value(e){const n=this.__v_isShallow||Sr(e)||_n(e);e=n?e:W(e),Vn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Wn(e),Ga(this))}}function ne(t){return oe(t)?t.value:t}const Qu={get:(t,e,n)=>ne(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return oe(s)&&!oe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Ya(t){return fn(t)?t:new Proxy(t,Qu)}class Zu{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new fi(e,()=>{this._dirty||(this._dirty=!0,Ga(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=W(this);return qa(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ed(t,e,n=!1){let r,s;const i=H(t);return i?(r=t,s=Ue):(r=t.get,s=t.set),new Zu(r,s,i||!s,n)}function Rt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Jr(i,e,n)}return s}function Be(t,e,n,r){if(H(t)){const i=Rt(t,e,n,r);return i&&ka(i)&&i.catch(o=>{Jr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Be(t[i],e,n,r));return s}function Jr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Rt(c,null,10,[t,o,a]);return}}td(t,n,s,r)}function td(t,e,n,r=!0){console.error(t)}let Kn=!1,Bs=!1;const me=[];let Ge=0;const hn=[];let rt=null,$t=0;const Xa=Promise.resolve();let vi=null;function Qa(t){const e=vi||Xa;return t?e.then(this?t.bind(this):t):e}function nd(t){let e=Ge+1,n=me.length;for(;e<n;){const r=e+n>>>1;qn(me[r])<t?e=r+1:n=r}return e}function bi(t){(!me.length||!me.includes(t,Kn&&t.allowRecurse?Ge+1:Ge))&&(t.id==null?me.push(t):me.splice(nd(t.id),0,t),Za())}function Za(){!Kn&&!Bs&&(Bs=!0,vi=Xa.then(tc))}function rd(t){const e=me.indexOf(t);e>Ge&&me.splice(e,1)}function sd(t){B(t)?hn.push(...t):(!rt||!rt.includes(t,t.allowRecurse?$t+1:$t))&&hn.push(t),Za()}function so(t,e=Kn?Ge+1:0){for(;e<me.length;e++){const n=me[e];n&&n.pre&&(me.splice(e,1),e--,n())}}function ec(t){if(hn.length){const e=[...new Set(hn)];if(hn.length=0,rt){rt.push(...e);return}for(rt=e,rt.sort((n,r)=>qn(n)-qn(r)),$t=0;$t<rt.length;$t++)rt[$t]();rt=null,$t=0}}const qn=t=>t.id==null?1/0:t.id,id=(t,e)=>{const n=qn(t)-qn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function tc(t){Bs=!1,Kn=!0,me.sort(id);const e=Ue;try{for(Ge=0;Ge<me.length;Ge++){const n=me[Ge];n&&n.active!==!1&&Rt(n,null,14)}}finally{Ge=0,me.length=0,ec(),Kn=!1,vi=null,(me.length||hn.length)&&tc()}}function od(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||te;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:p,trim:h}=r[u]||te;h&&(s=n.map(m=>ue(m)?m.trim():m)),p&&(s=n.map(Ns))}let a,c=r[a=us(e)]||r[a=us(Qe(e))];!c&&i&&(c=r[a=us(En(e))]),c&&Be(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Be(l,t,6,s)}}function nc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!H(t)){const c=l=>{const u=nc(l,e,!0);u&&(a=!0,he(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(se(t)&&r.set(t,null),null):(B(i)?i.forEach(c=>o[c]=null):he(o,i),se(t)&&r.set(t,o),o)}function Yr(t,e){return!t||!Vr(e)?!1:(e=e.slice(2).replace(/Once$/,""),V(t,e[0].toLowerCase()+e.slice(1))||V(t,En(e))||V(t,e))}let _e=null,Xr=null;function Ar(t){const e=_e;return _e=t,Xr=t&&t.type.__scopeId||null,e}function rc(t){Xr=t}function sc(){Xr=null}function pn(t,e=_e,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&mo(-1);const i=Ar(e);let o;try{o=t(...s)}finally{Ar(i),r._d&&mo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ds(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:p,data:h,setupState:m,ctx:T,inheritAttrs:P}=t;let $,O;const D=Ar(t);try{if(n.shapeFlag&4){const L=s||r;$=Ke(u.call(L,L,p,i,m,h,T)),O=c}else{const L=e;$=Ke(L.length>1?L(i,{attrs:c,slots:a,emit:l}):L(i,null)),O=e.props?c:ad(c)}}catch(L){Bn.length=0,Jr(L,t,1),$=re(xt)}let z=$;if(O&&P!==!1){const L=Object.keys(O),{shapeFlag:ce}=z;L.length&&ce&7&&(o&&L.some(oi)&&(O=cd(O,o)),z=vn(z,O))}return n.dirs&&(z=vn(z),z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&(z.transition=n.transition),$=z,Ar(D),$}const ad=t=>{let e;for(const n in t)(n==="class"||n==="style"||Vr(n))&&((e||(e={}))[n]=t[n]);return e},cd=(t,e)=>{const n={};for(const r in t)(!oi(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ld(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?io(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let p=0;p<u.length;p++){const h=u[p];if(o[h]!==r[h]&&!Yr(l,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?io(r,o,l):!0:!!o;return!1}function io(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Yr(n,i))return!0}return!1}function ud({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const dd=t=>t.__isSuspense;function fd(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):sd(t)}const pr={};function vr(t,e,n){return ic(t,e,n)}function ic(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=te){var a;const c=wu()===((a=pe)==null?void 0:a.scope)?pe:null;let l,u=!1,p=!1;if(oe(t)?(l=()=>t.value,u=Sr(t)):fn(t)?(l=()=>t,r=!0):B(t)?(p=!0,u=t.some(L=>fn(L)||Sr(L)),l=()=>t.map(L=>{if(oe(L))return L.value;if(fn(L))return Ht(L);if(H(L))return Rt(L,c,2)})):H(t)?e?l=()=>Rt(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return h&&h(),Be(t,c,3,[m])}:l=Ue,e&&r){const L=l;l=()=>Ht(L())}let h,m=L=>{h=D.onStop=()=>{Rt(L,c,4)}},T;if(Jn)if(m=Ue,e?n&&Be(e,c,3,[l(),p?[]:void 0,m]):l(),s==="sync"){const L=af();T=L.__watcherHandles||(L.__watcherHandles=[])}else return Ue;let P=p?new Array(t.length).fill(pr):pr;const $=()=>{if(D.active)if(e){const L=D.run();(r||u||(p?L.some((ce,le)=>Vn(ce,P[le])):Vn(L,P)))&&(h&&h(),Be(e,c,3,[L,P===pr?void 0:p&&P[0]===pr?[]:P,m]),P=L)}else D.run()};$.allowRecurse=!!e;let O;s==="sync"?O=$:s==="post"?O=()=>we($,c&&c.suspense):($.pre=!0,c&&($.id=c.uid),O=()=>bi($));const D=new fi(l,O);e?n?$():P=D.run():s==="post"?we(D.run.bind(D),c&&c.suspense):D.run();const z=()=>{D.stop(),c&&c.scope&&ai(c.scope.effects,D)};return T&&T.push(z),z}function hd(t,e,n){const r=this.proxy,s=ue(t)?t.includes(".")?oc(r,t):()=>r[t]:t.bind(r,r);let i;H(e)?i=e:(i=e.handler,n=e);const o=pe;bn(this);const a=ic(s,i.bind(r),n);return o?bn(o):Wt(),a}function oc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Ht(t,e){if(!se(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),oe(t))Ht(t.value,e);else if(B(t))for(let n=0;n<t.length;n++)Ht(t[n],e);else if(Aa(t)||dn(t))t.forEach(n=>{Ht(n,e)});else if(xa(t))for(const n in t)Ht(t[n],e);return t}function Ut(t,e){const n=_e;if(n===null)return t;const r=ns(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=te]=e[i];o&&(H(o)&&(o={mounted:o,updated:o}),o.deep&&Ht(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Mt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Tn(),Be(c,n,8,[t.el,a,t,e]),Cn())}}function ac(t,e){return H(t)?(()=>he({name:t.name},e,{setup:t}))():t}const $n=t=>!!t.type.__asyncLoader,cc=t=>t.type.__isKeepAlive;function pd(t,e){lc(t,"a",e)}function gd(t,e){lc(t,"da",e)}function lc(t,e,n=pe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Qr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)cc(s.parent.vnode)&&md(r,e,n,s),s=s.parent}}function md(t,e,n,r){const s=Qr(e,t,r,!0);uc(()=>{ai(r[e],s)},n)}function Qr(t,e,n=pe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Tn(),bn(n);const a=Be(e,n,t,o);return Wt(),Cn(),a});return r?s.unshift(i):s.push(i),i}}const ht=t=>(e,n=pe)=>(!Jn||t==="sp")&&Qr(t,(...r)=>e(...r),n),_d=ht("bm"),vd=ht("m"),bd=ht("bu"),yd=ht("u"),wd=ht("bum"),uc=ht("um"),Id=ht("sp"),Ed=ht("rtg"),Td=ht("rtc");function Cd(t,e=pe){Qr("ec",t,e)}const dc="components";function Zr(t,e){return Sd(dc,t,!0,e)||t}const Rd=Symbol.for("v-ndc");function Sd(t,e,n=!0,r=!1){const s=_e||pe;if(s){const i=s.type;if(t===dc){const a=rf(i,!1);if(a&&(a===e||a===Qe(e)||a===qr(Qe(e))))return i}const o=oo(s[t]||i[t],e)||oo(s.appContext[t],e);return!o&&r?i:o}}function oo(t,e){return t&&(t[e]||t[Qe(e)]||t[qr(Qe(e))])}function kr(t,e,n,r){let s;const i=n&&n[r];if(B(t)||ue(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(se(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function Ad(t,e,n={},r,s){if(_e.isCE||_e.parent&&$n(_e.parent)&&_e.parent.isCE)return e!=="default"&&(n.name=e),re("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),J();const o=i&&fc(i(n)),a=Ic(fe,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function fc(t){return t.some(e=>Or(e)?!(e.type===xt||e.type===fe&&!fc(e.children)):!0)?t:null}const Fs=t=>t?Tc(t)?ns(t)||t.proxy:Fs(t.parent):null,Un=he(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Fs(t.parent),$root:t=>Fs(t.root),$emit:t=>t.emit,$options:t=>yi(t),$forceUpdate:t=>t.f||(t.f=()=>bi(t.update)),$nextTick:t=>t.n||(t.n=Qa.bind(t.proxy)),$watch:t=>hd.bind(t)}),fs=(t,e)=>t!==te&&!t.__isScriptSetup&&V(t,e),kd={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(fs(r,e))return o[e]=1,r[e];if(s!==te&&V(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&V(l,e))return o[e]=3,i[e];if(n!==te&&V(n,e))return o[e]=4,n[e];Hs&&(o[e]=0)}}const u=Un[e];let p,h;if(u)return e==="$attrs"&&Ee(t,"get",e),u(t);if((p=a.__cssModules)&&(p=p[e]))return p;if(n!==te&&V(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,V(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return fs(s,e)?(s[e]=n,!0):r!==te&&V(r,e)?(r[e]=n,!0):V(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==te&&V(t,o)||fs(e,o)||(a=i[0])&&V(a,o)||V(r,o)||V(Un,o)||V(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:V(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ao(t){return B(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Hs=!0;function Pd(t){const e=yi(t),n=t.proxy,r=t.ctx;Hs=!1,e.beforeCreate&&co(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:p,mounted:h,beforeUpdate:m,updated:T,activated:P,deactivated:$,beforeDestroy:O,beforeUnmount:D,destroyed:z,unmounted:L,render:ce,renderTracked:le,renderTriggered:Te,errorCaptured:Oe,serverPrefetch:He,expose:Se,inheritAttrs:gt,components:Nt,directives:je,filters:kn}=e;if(l&&xd(l,r,null),o)for(const X in o){const K=o[X];H(K)&&(r[X]=K.bind(n))}if(s){const X=s.call(n,n);se(X)&&(t.data=ft(X))}if(Hs=!0,i)for(const X in i){const K=i[X],tt=H(K)?K.bind(n,n):H(K.get)?K.get.bind(n,n):Ue,mt=!H(K)&&H(K.set)?K.set.bind(n):Ue,ze=Ae({get:tt,set:mt});Object.defineProperty(r,X,{enumerable:!0,configurable:!0,get:()=>ze.value,set:ye=>ze.value=ye})}if(a)for(const X in a)hc(a[X],r,n,X);if(c){const X=H(c)?c.call(n):c;Reflect.ownKeys(X).forEach(K=>{br(K,X[K])})}u&&co(u,t,"c");function de(X,K){B(K)?K.forEach(tt=>X(tt.bind(n))):K&&X(K.bind(n))}if(de(_d,p),de(vd,h),de(bd,m),de(yd,T),de(pd,P),de(gd,$),de(Cd,Oe),de(Td,le),de(Ed,Te),de(wd,D),de(uc,L),de(Id,He),B(Se))if(Se.length){const X=t.exposed||(t.exposed={});Se.forEach(K=>{Object.defineProperty(X,K,{get:()=>n[K],set:tt=>n[K]=tt})})}else t.exposed||(t.exposed={});ce&&t.render===Ue&&(t.render=ce),gt!=null&&(t.inheritAttrs=gt),Nt&&(t.components=Nt),je&&(t.directives=je)}function xd(t,e,n=Ue){B(t)&&(t=js(t));for(const r in t){const s=t[r];let i;se(s)?"default"in s?i=at(s.from||r,s.default,!0):i=at(s.from||r):i=at(s),oe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function co(t,e,n){Be(B(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function hc(t,e,n,r){const s=r.includes(".")?oc(n,r):()=>n[r];if(ue(t)){const i=e[t];H(i)&&vr(s,i)}else if(H(t))vr(s,t.bind(n));else if(se(t))if(B(t))t.forEach(i=>hc(i,e,n,r));else{const i=H(t.handler)?t.handler.bind(n):e[t.handler];H(i)&&vr(s,i,t)}}function yi(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Pr(c,l,o,!0)),Pr(c,e,o)),se(e)&&i.set(e,c),c}function Pr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Pr(t,i,n,!0),s&&s.forEach(o=>Pr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Od[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Od={data:lo,props:uo,emits:uo,methods:Mn,computed:Mn,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:Mn,directives:Mn,watch:Md,provide:lo,inject:Nd};function lo(t,e){return e?t?function(){return he(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function Nd(t,e){return Mn(js(t),js(e))}function js(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function be(t,e){return t?[...new Set([].concat(t,e))]:e}function Mn(t,e){return t?he(Object.create(null),t,e):e}function uo(t,e){return t?B(t)&&B(e)?[...new Set([...t,...e])]:he(Object.create(null),ao(t),ao(e??{})):e}function Md(t,e){if(!t)return e;if(!e)return t;const n=he(Object.create(null),t);for(const r in e)n[r]=be(t[r],e[r]);return n}function pc(){return{app:null,config:{isNativeTag:au,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dd=0;function Ld(t,e){return function(r,s=null){H(r)||(r=he({},r)),s!=null&&!se(s)&&(s=null);const i=pc(),o=new Set;let a=!1;const c=i.app={_uid:Dd++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:cf,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&H(l.install)?(o.add(l),l.install(c,...u)):H(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,p){if(!a){const h=re(r,s);return h.appContext=i,u&&e?e(h,l):t(h,l,p),a=!0,c._container=l,l.__vue_app__=c,ns(h.component)||h.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){xr=c;try{return l()}finally{xr=null}}};return c}}let xr=null;function br(t,e){if(pe){let n=pe.provides;const r=pe.parent&&pe.parent.provides;r===n&&(n=pe.provides=Object.create(r)),n[t]=e}}function at(t,e,n=!1){const r=pe||_e;if(r||xr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:xr._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&H(e)?e.call(r&&r.proxy):e}}function $d(t,e,n,r=!1){const s={},i={};Rr(i,ts,1),t.propsDefaults=Object.create(null),gc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Gu(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Ud(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=W(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let p=0;p<u.length;p++){let h=u[p];if(Yr(t.emitsOptions,h))continue;const m=e[h];if(c)if(V(i,h))m!==i[h]&&(i[h]=m,l=!0);else{const T=Qe(h);s[T]=zs(c,a,T,m,t,!1)}else m!==i[h]&&(i[h]=m,l=!0)}}}else{gc(t,e,s,i)&&(l=!0);let u;for(const p in a)(!e||!V(e,p)&&((u=En(p))===p||!V(e,u)))&&(c?n&&(n[p]!==void 0||n[u]!==void 0)&&(s[p]=zs(c,a,p,void 0,t,!0)):delete s[p]);if(i!==a)for(const p in i)(!e||!V(e,p))&&(delete i[p],l=!0)}l&&ct(t,"set","$attrs")}function gc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(mr(c))continue;const l=e[c];let u;s&&V(s,u=Qe(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Yr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=W(n),l=a||te;for(let u=0;u<i.length;u++){const p=i[u];n[p]=zs(s,c,p,l[p],t,!V(l,p))}}return o}function zs(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=V(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&H(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(bn(s),r=l[n]=c.call(null,e),Wt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===En(n))&&(r=!0))}return r}function mc(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!H(t)){const u=p=>{c=!0;const[h,m]=mc(p,e,!0);he(o,h),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return se(t)&&r.set(t,un),un;if(B(i))for(let u=0;u<i.length;u++){const p=Qe(i[u]);fo(p)&&(o[p]=te)}else if(i)for(const u in i){const p=Qe(u);if(fo(p)){const h=i[u],m=o[p]=B(h)||H(h)?{type:h}:he({},h);if(m){const T=go(Boolean,m.type),P=go(String,m.type);m[0]=T>-1,m[1]=P<0||T<P,(T>-1||V(m,"default"))&&a.push(p)}}}const l=[o,a];return se(t)&&r.set(t,l),l}function fo(t){return t[0]!=="$"}function ho(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function po(t,e){return ho(t)===ho(e)}function go(t,e){return B(e)?e.findIndex(n=>po(n,t)):H(e)&&po(e,t)?0:-1}const _c=t=>t[0]==="_"||t==="$stable",wi=t=>B(t)?t.map(Ke):[Ke(t)],Bd=(t,e,n)=>{if(e._n)return e;const r=pn((...s)=>wi(e(...s)),n);return r._c=!1,r},vc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(_c(s))continue;const i=t[s];if(H(i))e[s]=Bd(s,i,r);else if(i!=null){const o=wi(i);e[s]=()=>o}}},bc=(t,e)=>{const n=wi(e);t.slots.default=()=>n},Fd=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=W(e),Rr(e,"_",n)):vc(e,t.slots={})}else t.slots={},e&&bc(t,e);Rr(t.slots,ts,1)},Hd=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=te;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(he(s,e),!n&&a===1&&delete s._):(i=!e.$stable,vc(e,s)),o=e}else e&&(bc(t,e),o={default:1});if(i)for(const a in s)!_c(a)&&!(a in o)&&delete s[a]};function Vs(t,e,n,r,s=!1){if(B(t)){t.forEach((h,m)=>Vs(h,e&&(B(e)?e[m]:e),n,r,s));return}if($n(r)&&!s)return;const i=r.shapeFlag&4?ns(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===te?a.refs={}:a.refs,p=a.setupState;if(l!=null&&l!==c&&(ue(l)?(u[l]=null,V(p,l)&&(p[l]=null)):oe(l)&&(l.value=null)),H(c))Rt(c,a,12,[o,u]);else{const h=ue(c),m=oe(c);if(h||m){const T=()=>{if(t.f){const P=h?V(p,c)?p[c]:u[c]:c.value;s?B(P)&&ai(P,i):B(P)?P.includes(i)||P.push(i):h?(u[c]=[i],V(p,c)&&(p[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else h?(u[c]=o,V(p,c)&&(p[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(T.id=-1,we(T,n)):T()}}}const we=fd;function jd(t){return zd(t)}function zd(t,e){const n=Ms();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:p,nextSibling:h,setScopeId:m=Ue,insertStaticContent:T}=t,P=(d,f,g,_=null,y=null,w=null,S=!1,E=null,C=!!f.dynamicChildren)=>{if(d===f)return;d&&!xn(d,f)&&(_=v(d),ye(d,y,w,!0),d=null),f.patchFlag===-2&&(C=!1,f.dynamicChildren=null);const{type:I,ref:N,shapeFlag:k}=f;switch(I){case es:$(d,f,g,_);break;case xt:O(d,f,g,_);break;case yr:d==null&&D(f,g,_,S);break;case fe:Nt(d,f,g,_,y,w,S,E,C);break;default:k&1?ce(d,f,g,_,y,w,S,E,C):k&6?je(d,f,g,_,y,w,S,E,C):(k&64||k&128)&&I.process(d,f,g,_,y,w,S,E,C,R)}N!=null&&y&&Vs(N,d&&d.ref,w,f||d,!f)},$=(d,f,g,_)=>{if(d==null)r(f.el=a(f.children),g,_);else{const y=f.el=d.el;f.children!==d.children&&l(y,f.children)}},O=(d,f,g,_)=>{d==null?r(f.el=c(f.children||""),g,_):f.el=d.el},D=(d,f,g,_)=>{[d.el,d.anchor]=T(d.children,f,g,_,d.el,d.anchor)},z=({el:d,anchor:f},g,_)=>{let y;for(;d&&d!==f;)y=h(d),r(d,g,_),d=y;r(f,g,_)},L=({el:d,anchor:f})=>{let g;for(;d&&d!==f;)g=h(d),s(d),d=g;s(f)},ce=(d,f,g,_,y,w,S,E,C)=>{S=S||f.type==="svg",d==null?le(f,g,_,y,w,S,E,C):He(d,f,y,w,S,E,C)},le=(d,f,g,_,y,w,S,E)=>{let C,I;const{type:N,props:k,shapeFlag:M,transition:F,dirs:j}=d;if(C=d.el=o(d.type,w,k&&k.is,k),M&8?u(C,d.children):M&16&&Oe(d.children,C,null,_,y,w&&N!=="foreignObject",S,E),j&&Mt(d,null,_,"created"),Te(C,d,d.scopeId,S,_),k){for(const Y in k)Y!=="value"&&!mr(Y)&&i(C,Y,null,k[Y],w,d.children,_,y,ge);"value"in k&&i(C,"value",null,k.value),(I=k.onVnodeBeforeMount)&&We(I,_,d)}j&&Mt(d,null,_,"beforeMount");const ee=(!y||y&&!y.pendingBranch)&&F&&!F.persisted;ee&&F.beforeEnter(C),r(C,f,g),((I=k&&k.onVnodeMounted)||ee||j)&&we(()=>{I&&We(I,_,d),ee&&F.enter(C),j&&Mt(d,null,_,"mounted")},y)},Te=(d,f,g,_,y)=>{if(g&&m(d,g),_)for(let w=0;w<_.length;w++)m(d,_[w]);if(y){let w=y.subTree;if(f===w){const S=y.vnode;Te(d,S,S.scopeId,S.slotScopeIds,y.parent)}}},Oe=(d,f,g,_,y,w,S,E,C=0)=>{for(let I=C;I<d.length;I++){const N=d[I]=E?yt(d[I]):Ke(d[I]);P(null,N,f,g,_,y,w,S,E)}},He=(d,f,g,_,y,w,S)=>{const E=f.el=d.el;let{patchFlag:C,dynamicChildren:I,dirs:N}=f;C|=d.patchFlag&16;const k=d.props||te,M=f.props||te;let F;g&&Dt(g,!1),(F=M.onVnodeBeforeUpdate)&&We(F,g,f,d),N&&Mt(f,d,g,"beforeUpdate"),g&&Dt(g,!0);const j=y&&f.type!=="foreignObject";if(I?Se(d.dynamicChildren,I,E,g,_,j,w):S||K(d,f,E,null,g,_,j,w,!1),C>0){if(C&16)gt(E,f,k,M,g,_,y);else if(C&2&&k.class!==M.class&&i(E,"class",null,M.class,y),C&4&&i(E,"style",k.style,M.style,y),C&8){const ee=f.dynamicProps;for(let Y=0;Y<ee.length;Y++){const ae=ee[Y],Ne=k[ae],on=M[ae];(on!==Ne||ae==="value")&&i(E,ae,Ne,on,y,d.children,g,_,ge)}}C&1&&d.children!==f.children&&u(E,f.children)}else!S&&I==null&&gt(E,f,k,M,g,_,y);((F=M.onVnodeUpdated)||N)&&we(()=>{F&&We(F,g,f,d),N&&Mt(f,d,g,"updated")},_)},Se=(d,f,g,_,y,w,S)=>{for(let E=0;E<f.length;E++){const C=d[E],I=f[E],N=C.el&&(C.type===fe||!xn(C,I)||C.shapeFlag&70)?p(C.el):g;P(C,I,N,null,_,y,w,S,!0)}},gt=(d,f,g,_,y,w,S)=>{if(g!==_){if(g!==te)for(const E in g)!mr(E)&&!(E in _)&&i(d,E,g[E],null,S,f.children,y,w,ge);for(const E in _){if(mr(E))continue;const C=_[E],I=g[E];C!==I&&E!=="value"&&i(d,E,I,C,S,f.children,y,w,ge)}"value"in _&&i(d,"value",g.value,_.value)}},Nt=(d,f,g,_,y,w,S,E,C)=>{const I=f.el=d?d.el:a(""),N=f.anchor=d?d.anchor:a("");let{patchFlag:k,dynamicChildren:M,slotScopeIds:F}=f;F&&(E=E?E.concat(F):F),d==null?(r(I,g,_),r(N,g,_),Oe(f.children,g,N,y,w,S,E,C)):k>0&&k&64&&M&&d.dynamicChildren?(Se(d.dynamicChildren,M,g,y,w,S,E),(f.key!=null||y&&f===y.subTree)&&yc(d,f,!0)):K(d,f,g,N,y,w,S,E,C)},je=(d,f,g,_,y,w,S,E,C)=>{f.slotScopeIds=E,d==null?f.shapeFlag&512?y.ctx.activate(f,g,_,S,C):kn(f,g,_,y,w,S,C):nn(d,f,C)},kn=(d,f,g,_,y,w,S)=>{const E=d.component=Qd(d,_,y);if(cc(d)&&(E.ctx.renderer=R),Zd(E),E.asyncDep){if(y&&y.registerDep(E,de),!d.el){const C=E.subTree=re(xt);O(null,C,f,g)}return}de(E,d,f,g,y,w,S)},nn=(d,f,g)=>{const _=f.component=d.component;if(ld(d,f,g))if(_.asyncDep&&!_.asyncResolved){X(_,f,g);return}else _.next=f,rd(_.update),_.update();else f.el=d.el,_.vnode=f},de=(d,f,g,_,y,w,S)=>{const E=()=>{if(d.isMounted){let{next:N,bu:k,u:M,parent:F,vnode:j}=d,ee=N,Y;Dt(d,!1),N?(N.el=j.el,X(d,N,S)):N=j,k&&_r(k),(Y=N.props&&N.props.onVnodeBeforeUpdate)&&We(Y,F,N,j),Dt(d,!0);const ae=ds(d),Ne=d.subTree;d.subTree=ae,P(Ne,ae,p(Ne.el),v(Ne),d,y,w),N.el=ae.el,ee===null&&ud(d,ae.el),M&&we(M,y),(Y=N.props&&N.props.onVnodeUpdated)&&we(()=>We(Y,F,N,j),y)}else{let N;const{el:k,props:M}=f,{bm:F,m:j,parent:ee}=d,Y=$n(f);if(Dt(d,!1),F&&_r(F),!Y&&(N=M&&M.onVnodeBeforeMount)&&We(N,ee,f),Dt(d,!0),k&&q){const ae=()=>{d.subTree=ds(d),q(k,d.subTree,d,y,null)};Y?f.type.__asyncLoader().then(()=>!d.isUnmounted&&ae()):ae()}else{const ae=d.subTree=ds(d);P(null,ae,g,_,d,y,w),f.el=ae.el}if(j&&we(j,y),!Y&&(N=M&&M.onVnodeMounted)){const ae=f;we(()=>We(N,ee,ae),y)}(f.shapeFlag&256||ee&&$n(ee.vnode)&&ee.vnode.shapeFlag&256)&&d.a&&we(d.a,y),d.isMounted=!0,f=g=_=null}},C=d.effect=new fi(E,()=>bi(I),d.scope),I=d.update=()=>C.run();I.id=d.uid,Dt(d,!0),I()},X=(d,f,g)=>{f.component=d;const _=d.vnode.props;d.vnode=f,d.next=null,Ud(d,f.props,_,g),Hd(d,f.children,g),Tn(),so(),Cn()},K=(d,f,g,_,y,w,S,E,C=!1)=>{const I=d&&d.children,N=d?d.shapeFlag:0,k=f.children,{patchFlag:M,shapeFlag:F}=f;if(M>0){if(M&128){mt(I,k,g,_,y,w,S,E,C);return}else if(M&256){tt(I,k,g,_,y,w,S,E,C);return}}F&8?(N&16&&ge(I,y,w),k!==I&&u(g,k)):N&16?F&16?mt(I,k,g,_,y,w,S,E,C):ge(I,y,w,!0):(N&8&&u(g,""),F&16&&Oe(k,g,_,y,w,S,E,C))},tt=(d,f,g,_,y,w,S,E,C)=>{d=d||un,f=f||un;const I=d.length,N=f.length,k=Math.min(I,N);let M;for(M=0;M<k;M++){const F=f[M]=C?yt(f[M]):Ke(f[M]);P(d[M],F,g,null,y,w,S,E,C)}I>N?ge(d,y,w,!0,!1,k):Oe(f,g,_,y,w,S,E,C,k)},mt=(d,f,g,_,y,w,S,E,C)=>{let I=0;const N=f.length;let k=d.length-1,M=N-1;for(;I<=k&&I<=M;){const F=d[I],j=f[I]=C?yt(f[I]):Ke(f[I]);if(xn(F,j))P(F,j,g,null,y,w,S,E,C);else break;I++}for(;I<=k&&I<=M;){const F=d[k],j=f[M]=C?yt(f[M]):Ke(f[M]);if(xn(F,j))P(F,j,g,null,y,w,S,E,C);else break;k--,M--}if(I>k){if(I<=M){const F=M+1,j=F<N?f[F].el:_;for(;I<=M;)P(null,f[I]=C?yt(f[I]):Ke(f[I]),g,j,y,w,S,E,C),I++}}else if(I>M)for(;I<=k;)ye(d[I],y,w,!0),I++;else{const F=I,j=I,ee=new Map;for(I=j;I<=M;I++){const Ce=f[I]=C?yt(f[I]):Ke(f[I]);Ce.key!=null&&ee.set(Ce.key,I)}let Y,ae=0;const Ne=M-j+1;let on=!1,qi=0;const Pn=new Array(Ne);for(I=0;I<Ne;I++)Pn[I]=0;for(I=F;I<=k;I++){const Ce=d[I];if(ae>=Ne){ye(Ce,y,w,!0);continue}let Ve;if(Ce.key!=null)Ve=ee.get(Ce.key);else for(Y=j;Y<=M;Y++)if(Pn[Y-j]===0&&xn(Ce,f[Y])){Ve=Y;break}Ve===void 0?ye(Ce,y,w,!0):(Pn[Ve-j]=I+1,Ve>=qi?qi=Ve:on=!0,P(Ce,f[Ve],g,null,y,w,S,E,C),ae++)}const Gi=on?Vd(Pn):un;for(Y=Gi.length-1,I=Ne-1;I>=0;I--){const Ce=j+I,Ve=f[Ce],Ji=Ce+1<N?f[Ce+1].el:_;Pn[I]===0?P(null,Ve,g,Ji,y,w,S,E,C):on&&(Y<0||I!==Gi[Y]?ze(Ve,g,Ji,2):Y--)}}},ze=(d,f,g,_,y=null)=>{const{el:w,type:S,transition:E,children:C,shapeFlag:I}=d;if(I&6){ze(d.component.subTree,f,g,_);return}if(I&128){d.suspense.move(f,g,_);return}if(I&64){S.move(d,f,g,R);return}if(S===fe){r(w,f,g);for(let k=0;k<C.length;k++)ze(C[k],f,g,_);r(d.anchor,f,g);return}if(S===yr){z(d,f,g);return}if(_!==2&&I&1&&E)if(_===0)E.beforeEnter(w),r(w,f,g),we(()=>E.enter(w),y);else{const{leave:k,delayLeave:M,afterLeave:F}=E,j=()=>r(w,f,g),ee=()=>{k(w,()=>{j(),F&&F()})};M?M(w,j,ee):ee()}else r(w,f,g)},ye=(d,f,g,_=!1,y=!1)=>{const{type:w,props:S,ref:E,children:C,dynamicChildren:I,shapeFlag:N,patchFlag:k,dirs:M}=d;if(E!=null&&Vs(E,null,g,d,!0),N&256){f.ctx.deactivate(d);return}const F=N&1&&M,j=!$n(d);let ee;if(j&&(ee=S&&S.onVnodeBeforeUnmount)&&We(ee,f,d),N&6)cr(d.component,g,_);else{if(N&128){d.suspense.unmount(g,_);return}F&&Mt(d,null,f,"beforeUnmount"),N&64?d.type.remove(d,f,g,y,R,_):I&&(w!==fe||k>0&&k&64)?ge(I,f,g,!1,!0):(w===fe&&k&384||!y&&N&16)&&ge(C,f,g),_&&rn(d)}(j&&(ee=S&&S.onVnodeUnmounted)||F)&&we(()=>{ee&&We(ee,f,d),F&&Mt(d,null,f,"unmounted")},g)},rn=d=>{const{type:f,el:g,anchor:_,transition:y}=d;if(f===fe){sn(g,_);return}if(f===yr){L(d);return}const w=()=>{s(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(d.shapeFlag&1&&y&&!y.persisted){const{leave:S,delayLeave:E}=y,C=()=>S(g,w);E?E(d.el,w,C):C()}else w()},sn=(d,f)=>{let g;for(;d!==f;)g=h(d),s(d),d=g;s(f)},cr=(d,f,g)=>{const{bum:_,scope:y,update:w,subTree:S,um:E}=d;_&&_r(_),y.stop(),w&&(w.active=!1,ye(S,d,f,g)),E&&we(E,f),we(()=>{d.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},ge=(d,f,g,_=!1,y=!1,w=0)=>{for(let S=w;S<d.length;S++)ye(d[S],f,g,_,y)},v=d=>d.shapeFlag&6?v(d.component.subTree):d.shapeFlag&128?d.suspense.next():h(d.anchor||d.el),A=(d,f,g)=>{d==null?f._vnode&&ye(f._vnode,null,null,!0):P(f._vnode||null,d,f,null,null,null,g),so(),ec(),f._vnode=d},R={p:P,um:ye,m:ze,r:rn,mt:kn,mc:Oe,pc:K,pbc:Se,n:v,o:t};let x,q;return e&&([x,q]=e(R)),{render:A,hydrate:x,createApp:Ld(A,x)}}function Dt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function yc(t,e,n=!1){const r=t.children,s=e.children;if(B(r)&&B(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=yt(s[i]),a.el=o.el),n||yc(o,a)),a.type===es&&(a.el=o.el)}}function Vd(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Wd=t=>t.__isTeleport,fe=Symbol.for("v-fgt"),es=Symbol.for("v-txt"),xt=Symbol.for("v-cmt"),yr=Symbol.for("v-stc"),Bn=[];let $e=null;function J(t=!1){Bn.push($e=t?null:[])}function Kd(){Bn.pop(),$e=Bn[Bn.length-1]||null}let Gn=1;function mo(t){Gn+=t}function wc(t){return t.dynamicChildren=Gn>0?$e||un:null,Kd(),Gn>0&&$e&&$e.push(t),t}function Z(t,e,n,r,s,i){return wc(b(t,e,n,r,s,i,!0))}function Ic(t,e,n,r,s){return wc(re(t,e,n,r,s,!0))}function Or(t){return t?t.__v_isVNode===!0:!1}function xn(t,e){return t.type===e.type&&t.key===e.key}const ts="__vInternal",Ec=({key:t})=>t??null,wr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ue(t)||oe(t)||H(t)?{i:_e,r:t,k:e,f:!!n}:t:null);function b(t,e=null,n=null,r=0,s=null,i=t===fe?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ec(e),ref:e&&wr(e),scopeId:Xr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:_e};return a?(Ii(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ue(n)?8:16),Gn>0&&!o&&$e&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&$e.push(c),c}const re=qd;function qd(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Rd)&&(t=xt),Or(t)){const a=vn(t,e,!0);return n&&Ii(a,n),Gn>0&&!i&&$e&&(a.shapeFlag&6?$e[$e.indexOf(t)]=a:$e.push(a)),a.patchFlag|=-2,a}if(sf(t)&&(t=t.__vccOpts),e){e=Gd(e);let{class:a,style:c}=e;a&&!ue(a)&&(e.class=qe(a)),se(c)&&(Wa(c)&&!B(c)&&(c=he({},c)),e.style=ui(c))}const o=ue(t)?1:dd(t)?128:Wd(t)?64:se(t)?4:H(t)?2:0;return b(t,e,n,r,s,o,i,!0)}function Gd(t){return t?Wa(t)||ts in t?he({},t):t:null}function vn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Jd(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ec(a),ref:e&&e.ref?n&&s?B(s)?s.concat(wr(e)):[s,wr(e)]:wr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==fe?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&vn(t.ssContent),ssFallback:t.ssFallback&&vn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function lt(t=" ",e=0){return re(es,null,t,e)}function Qt(t,e){const n=re(yr,null,t);return n.staticCount=e,n}function Ot(t="",e=!1){return e?(J(),Ic(xt,null,t)):re(xt,null,t)}function Ke(t){return t==null||typeof t=="boolean"?re(xt):B(t)?re(fe,null,t.slice()):typeof t=="object"?yt(t):re(es,null,String(t))}function yt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:vn(t)}function Ii(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ii(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(ts in e)?e._ctx=_e:s===3&&_e&&(_e.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:_e},n=32):(e=String(e),r&64?(n=16,e=[lt(e)]):n=8);t.children=e,t.shapeFlag|=n}function Jd(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=qe([e.class,r.class]));else if(s==="style")e.style=ui([e.style,r.style]);else if(Vr(s)){const i=e[s],o=r[s];o&&i!==o&&!(B(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function We(t,e,n,r=null){Be(t,e,7,[n,r])}const Yd=pc();let Xd=0;function Qd(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Yd,i={uid:Xd++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new bu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mc(r,s),emitsOptions:nc(r,s),emit:null,emitted:null,propsDefaults:te,inheritAttrs:r.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=od.bind(null,i),t.ce&&t.ce(i),i}let pe=null,Ei,an,_o="__VUE_INSTANCE_SETTERS__";(an=Ms()[_o])||(an=Ms()[_o]=[]),an.push(t=>pe=t),Ei=t=>{an.length>1?an.forEach(e=>e(t)):an[0](t)};const bn=t=>{Ei(t),t.scope.on()},Wt=()=>{pe&&pe.scope.off(),Ei(null)};function Tc(t){return t.vnode.shapeFlag&4}let Jn=!1;function Zd(t,e=!1){Jn=e;const{props:n,children:r}=t.vnode,s=Tc(t);$d(t,n,s,e),Fd(t,r);const i=s?ef(t,e):void 0;return Jn=!1,i}function ef(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ka(new Proxy(t.ctx,kd));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?nf(t):null;bn(t),Tn();const i=Rt(r,t,0,[t.props,s]);if(Cn(),Wt(),ka(i)){if(i.then(Wt,Wt),e)return i.then(o=>{vo(t,o,e)}).catch(o=>{Jr(o,t,0)});t.asyncDep=i}else vo(t,i,e)}else Cc(t,e)}function vo(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:se(e)&&(t.setupState=Ya(e)),Cc(t,n)}let bo;function Cc(t,e,n){const r=t.type;if(!t.render){if(!e&&bo&&!r.render){const s=r.template||yi(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=he(he({isCustomElement:i,delimiters:a},o),c);r.render=bo(s,l)}}t.render=r.render||Ue}bn(t),Tn(),Pd(t),Cn(),Wt()}function tf(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ee(t,"get","$attrs"),e[n]}}))}function nf(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return tf(t)},slots:t.slots,emit:t.emit,expose:e}}function ns(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ya(Ka(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Un)return Un[n](t)},has(e,n){return n in e||n in Un}}))}function rf(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function sf(t){return H(t)&&"__vccOpts"in t}const Ae=(t,e)=>ed(t,e,Jn);function Rc(t,e,n){const r=arguments.length;return r===2?se(e)&&!B(e)?Or(e)?re(t,null,[e]):re(t,e):re(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Or(n)&&(n=[n]),re(t,e,n))}const of=Symbol.for("v-scx"),af=()=>at(of),cf="3.3.4",lf="http://www.w3.org/2000/svg",Bt=typeof document<"u"?document:null,yo=Bt&&Bt.createElement("template"),uf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Bt.createElementNS(lf,t):Bt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Bt.createTextNode(t),createComment:t=>Bt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Bt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{yo.innerHTML=r?`<svg>${t}</svg>`:t;const a=yo.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function df(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function ff(t,e,n){const r=t.style,s=ue(n);if(n&&!s){if(e&&!ue(e))for(const i in e)n[i]==null&&Ws(r,i,"");for(const i in n)Ws(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const wo=/\s*!important$/;function Ws(t,e,n){if(B(n))n.forEach(r=>Ws(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=hf(t,e);wo.test(n)?t.setProperty(En(r),n.replace(wo,""),"important"):t[r]=n}}const Io=["Webkit","Moz","ms"],hs={};function hf(t,e){const n=hs[e];if(n)return n;let r=Qe(e);if(r!=="filter"&&r in t)return hs[e]=r;r=qr(r);for(let s=0;s<Io.length;s++){const i=Io[s]+r;if(i in t)return hs[e]=i}return e}const Eo="http://www.w3.org/1999/xlink";function pf(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Eo,e.slice(6,e.length)):t.setAttributeNS(Eo,e,n);else{const i=vu(e);n==null||i&&!Oa(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function gf(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Oa(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function cn(t,e,n,r){t.addEventListener(e,n,r)}function mf(t,e,n,r){t.removeEventListener(e,n,r)}function _f(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=vf(e);if(r){const l=i[e]=wf(r,s);cn(t,a,l,c)}else o&&(mf(t,a,o,c),i[e]=void 0)}}const To=/(?:Once|Passive|Capture)$/;function vf(t){let e;if(To.test(t)){e={};let r;for(;r=t.match(To);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):En(t.slice(2)),e]}let ps=0;const bf=Promise.resolve(),yf=()=>ps||(bf.then(()=>ps=0),ps=Date.now());function wf(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Be(If(r,n.value),e,5,[r])};return n.value=t,n.attached=yf(),n}function If(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Co=/^on[a-z]/,Ef=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?df(t,r,s):e==="style"?ff(t,n,r):Vr(e)?oi(e)||_f(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Tf(t,e,r,s))?gf(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),pf(t,e,r,s))};function Tf(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Co.test(e)&&H(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Co.test(e)&&ue(n)?!1:e in t}const Ro=t=>{const e=t.props["onUpdate:modelValue"]||!1;return B(e)?n=>_r(e,n):e};function Cf(t){t.target.composing=!0}function So(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ft={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Ro(s);const i=r||s.props&&s.props.type==="number";cn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ns(a)),t._assign(a)}),n&&cn(t,"change",()=>{t.value=t.value.trim()}),e||(cn(t,"compositionstart",Cf),cn(t,"compositionend",So),cn(t,"change",So))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Ro(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Ns(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Rf=["ctrl","shift","alt","meta"],Sf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Rf.some(n=>t[`${n}Key`]&&!e.includes(n))},Nr=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=Sf[e[s]];if(i&&i(n,e))return}return t(n,...r)},Af=he({patchProp:Ef},uf);let Ao;function kf(){return Ao||(Ao=jd(Af))}const Pf=(...t)=>{const e=kf().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=xf(r);if(!s)return;const i=e._component;!H(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function xf(t){return ue(t)?document.querySelector(t):t}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ln=typeof window<"u";function Of(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const G=Object.assign;function gs(t,e){const n={};for(const r in e){const s=e[r];n[r]=Fe(s)?s.map(t):t(s)}return n}const Fn=()=>{},Fe=Array.isArray,Nf=/\/$/,Mf=t=>t.replace(Nf,"");function ms(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Uf(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Df(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ko(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Lf(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&yn(e.matched[r],n.matched[s])&&Sc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function yn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Sc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!$f(t[n],e[n]))return!1;return!0}function $f(t,e){return Fe(t)?Po(t,e):Fe(e)?Po(e,t):t===e}function Po(t,e){return Fe(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Uf(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Yn;(function(t){t.pop="pop",t.push="push"})(Yn||(Yn={}));var Hn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Hn||(Hn={}));function Bf(t){if(!t)if(ln){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Mf(t)}const Ff=/^[^#]+#/;function Hf(t,e){return t.replace(Ff,"#")+e}function jf(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const rs=()=>({left:window.pageXOffset,top:window.pageYOffset});function zf(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=jf(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function xo(t,e){return(history.state?history.state.position-e:-1)+t}const Ks=new Map;function Vf(t,e){Ks.set(t,e)}function Wf(t){const e=Ks.get(t);return Ks.delete(t),e}let Kf=()=>location.protocol+"//"+location.host;function Ac(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),ko(c,"")}return ko(n,t)+r+s}function qf(t,e,n,r){let s=[],i=[],o=null;const a=({state:h})=>{const m=Ac(t,location),T=n.value,P=e.value;let $=0;if(h){if(n.value=m,e.value=h,o&&o===T){o=null;return}$=P?h.position-P.position:0}else r(m);s.forEach(O=>{O(n.value,T,{delta:$,type:Yn.pop,direction:$?$>0?Hn.forward:Hn.back:Hn.unknown})})};function c(){o=n.value}function l(h){s.push(h);const m=()=>{const T=s.indexOf(h);T>-1&&s.splice(T,1)};return i.push(m),m}function u(){const{history:h}=window;h.state&&h.replaceState(G({},h.state,{scroll:rs()}),"")}function p(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:p}}function Oo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?rs():null}}function Gf(t){const{history:e,location:n}=window,r={value:Ac(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const p=t.indexOf("#"),h=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:Kf()+t+c;try{e[u?"replaceState":"pushState"](l,"",h),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](h)}}function o(c,l){const u=G({},e.state,Oo(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=G({},s.value,e.state,{forward:c,scroll:rs()});i(u.current,u,!0);const p=G({},Oo(r.value,c,null),{position:u.position+1},l);i(c,p,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Jf(t){t=Bf(t);const e=Gf(t),n=qf(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=G({location:"",base:t,go:r,createHref:Hf.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Yf(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Jf(t)}function Xf(t){return typeof t=="string"||t&&typeof t=="object"}function kc(t){return typeof t=="string"||typeof t=="symbol"}const vt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Pc=Symbol("");var No;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(No||(No={}));function wn(t,e){return G(new Error,{type:t,[Pc]:!0},e)}function nt(t,e){return t instanceof Error&&Pc in t&&(e==null||!!(t.type&e))}const Mo="[^/]+?",Qf={sensitive:!1,strict:!1,start:!0,end:!0},Zf=/[.+*?^${}()[\]/\\]/g;function eh(t,e){const n=G({},Qf,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let p=0;p<l.length;p++){const h=l[p];let m=40+(n.sensitive?.25:0);if(h.type===0)p||(s+="/"),s+=h.value.replace(Zf,"\\$&"),m+=40;else if(h.type===1){const{value:T,repeatable:P,optional:$,regexp:O}=h;i.push({name:T,repeatable:P,optional:$});const D=O||Mo;if(D!==Mo){m+=10;try{new RegExp(`(${D})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${T}" (${D}): `+L.message)}}let z=P?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;p||(z=$&&l.length<2?`(?:/${z})`:"/"+z),$&&(z+="?"),s+=z,m+=20,$&&(m+=-8),P&&(m+=-20),D===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),p={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",T=i[h-1];p[T.name]=m&&T.repeatable?m.split("/"):m}return p}function c(l){let u="",p=!1;for(const h of t){(!p||!u.endsWith("/"))&&(u+="/"),p=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:T,repeatable:P,optional:$}=m,O=T in l?l[T]:"";if(Fe(O)&&!P)throw new Error(`Provided param "${T}" is an array but it is not repeatable (* or + modifiers)`);const D=Fe(O)?O.join("/"):O;if(!D)if($)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):p=!0);else throw new Error(`Missing required param "${T}"`);u+=D}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function th(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function nh(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=th(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Do(r))return 1;if(Do(s))return-1}return s.length-r.length}function Do(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const rh={type:0,value:""},sh=/[a-zA-Z0-9_]/;function ih(t){if(!t)return[[]];if(t==="/")return[[rh]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function p(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&p(),o()):c===":"?(p(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:sh.test(c)?h():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),p(),o(),s}function oh(t,e,n){const r=eh(ih(t.path),n),s=G(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function ah(t,e){const n=[],r=new Map;e=Uo({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,p,h){const m=!h,T=ch(u);T.aliasOf=h&&h.record;const P=Uo(e,u),$=[T];if("alias"in u){const z=typeof u.alias=="string"?[u.alias]:u.alias;for(const L of z)$.push(G({},T,{components:h?h.record.components:T.components,path:L,aliasOf:h?h.record:T}))}let O,D;for(const z of $){const{path:L}=z;if(p&&L[0]!=="/"){const ce=p.record.path,le=ce[ce.length-1]==="/"?"":"/";z.path=p.record.path+(L&&le+L)}if(O=oh(z,p,P),h?h.alias.push(O):(D=D||O,D!==O&&D.alias.push(O),m&&u.name&&!$o(O)&&o(u.name)),T.children){const ce=T.children;for(let le=0;le<ce.length;le++)i(ce[le],O,h&&h.children[le])}h=h||O,(O.record.components&&Object.keys(O.record.components).length||O.record.name||O.record.redirect)&&c(O)}return D?()=>{o(D)}:Fn}function o(u){if(kc(u)){const p=r.get(u);p&&(r.delete(u),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(u);p>-1&&(n.splice(p,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let p=0;for(;p<n.length&&nh(u,n[p])>=0&&(u.record.path!==n[p].record.path||!xc(u,n[p]));)p++;n.splice(p,0,u),u.record.name&&!$o(u)&&r.set(u.record.name,u)}function l(u,p){let h,m={},T,P;if("name"in u&&u.name){if(h=r.get(u.name),!h)throw wn(1,{location:u});P=h.record.name,m=G(Lo(p.params,h.keys.filter(D=>!D.optional).map(D=>D.name)),u.params&&Lo(u.params,h.keys.map(D=>D.name))),T=h.stringify(m)}else if("path"in u)T=u.path,h=n.find(D=>D.re.test(T)),h&&(m=h.parse(T),P=h.record.name);else{if(h=p.name?r.get(p.name):n.find(D=>D.re.test(p.path)),!h)throw wn(1,{location:u,currentLocation:p});P=h.record.name,m=G({},p.params,u.params),T=h.stringify(m)}const $=[];let O=h;for(;O;)$.unshift(O.record),O=O.parent;return{name:P,path:T,params:m,matched:$,meta:uh($)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Lo(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ch(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:lh(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function lh(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function $o(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function uh(t){return t.reduce((e,n)=>G(e,n.meta),{})}function Uo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function xc(t,e){return e.children.some(n=>n===t||xc(t,n))}const Oc=/#/g,dh=/&/g,fh=/\//g,hh=/=/g,ph=/\?/g,Nc=/\+/g,gh=/%5B/g,mh=/%5D/g,Mc=/%5E/g,_h=/%60/g,Dc=/%7B/g,vh=/%7C/g,Lc=/%7D/g,bh=/%20/g;function Ti(t){return encodeURI(""+t).replace(vh,"|").replace(gh,"[").replace(mh,"]")}function yh(t){return Ti(t).replace(Dc,"{").replace(Lc,"}").replace(Mc,"^")}function qs(t){return Ti(t).replace(Nc,"%2B").replace(bh,"+").replace(Oc,"%23").replace(dh,"%26").replace(_h,"`").replace(Dc,"{").replace(Lc,"}").replace(Mc,"^")}function wh(t){return qs(t).replace(hh,"%3D")}function Ih(t){return Ti(t).replace(Oc,"%23").replace(ph,"%3F")}function Eh(t){return t==null?"":Ih(t).replace(fh,"%2F")}function Mr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Th(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Nc," "),o=i.indexOf("="),a=Mr(o<0?i:i.slice(0,o)),c=o<0?null:Mr(i.slice(o+1));if(a in e){let l=e[a];Fe(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Bo(t){let e="";for(let n in t){const r=t[n];if(n=wh(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Fe(r)?r.map(i=>i&&qs(i)):[r&&qs(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Ch(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Fe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Rh=Symbol(""),Fo=Symbol(""),Ci=Symbol(""),$c=Symbol(""),Gs=Symbol("");function On(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function wt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=p=>{p===!1?a(wn(4,{from:n,to:e})):p instanceof Error?a(p):Xf(p)?a(wn(2,{from:e,to:p})):(i&&r.enterCallbacks[s]===i&&typeof p=="function"&&i.push(p),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(p=>a(p))})}function _s(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Sh(a)){const l=(a.__vccOpts||a)[e];l&&s.push(wt(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Of(l)?l.default:l;i.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&wt(h,n,r,i,o)()}))}}return s}function Sh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ho(t){const e=at(Ci),n=at($c),r=Ae(()=>e.resolve(ne(t.to))),s=Ae(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],p=n.matched;if(!u||!p.length)return-1;const h=p.findIndex(yn.bind(null,u));if(h>-1)return h;const m=jo(c[l-2]);return l>1&&jo(u)===m&&p[p.length-1].path!==m?p.findIndex(yn.bind(null,c[l-2])):h}),i=Ae(()=>s.value>-1&&xh(n.params,r.value.params)),o=Ae(()=>s.value>-1&&s.value===n.matched.length-1&&Sc(n.params,r.value.params));function a(c={}){return Ph(c)?e[ne(t.replace)?"replace":"push"](ne(t.to)).catch(Fn):Promise.resolve()}return{route:r,href:Ae(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Ah=ac({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ho,setup(t,{slots:e}){const n=ft(Ho(t)),{options:r}=at(Ci),s=Ae(()=>({[zo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[zo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Rc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),kh=Ah;function Ph(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function xh(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Fe(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function jo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const zo=(t,e,n)=>t??e??n,Oh=ac({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=at(Gs),s=Ae(()=>t.route||r.value),i=at(Fo,0),o=Ae(()=>{let l=ne(i);const{matched:u}=s.value;let p;for(;(p=u[l])&&!p.components;)l++;return l}),a=Ae(()=>s.value.matched[o.value]);br(Fo,Ae(()=>o.value+1)),br(Rh,a),br(Gs,s);const c=Ju();return vr(()=>[c.value,a.value,t.name],([l,u,p],[h,m,T])=>{u&&(u.instances[p]=l,m&&m!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!yn(u,m)||!h)&&(u.enterCallbacks[p]||[]).forEach(P=>P(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,p=a.value,h=p&&p.components[u];if(!h)return Vo(n.default,{Component:h,route:l});const m=p.props[u],T=m?m===!0?l.params:typeof m=="function"?m(l):m:null,$=Rc(h,G({},T,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(p.instances[u]=null)},ref:c}));return Vo(n.default,{Component:$,route:l})||$}}});function Vo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Nh=Oh;function Mh(t){const e=ah(t.routes,t),n=t.parseQuery||Th,r=t.stringifyQuery||Bo,s=t.history,i=On(),o=On(),a=On(),c=Yu(vt);let l=vt;ln&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=gs.bind(null,v=>""+v),p=gs.bind(null,Eh),h=gs.bind(null,Mr);function m(v,A){let R,x;return kc(v)?(R=e.getRecordMatcher(v),x=A):x=v,e.addRoute(x,R)}function T(v){const A=e.getRecordMatcher(v);A&&e.removeRoute(A)}function P(){return e.getRoutes().map(v=>v.record)}function $(v){return!!e.getRecordMatcher(v)}function O(v,A){if(A=G({},A||c.value),typeof v=="string"){const g=ms(n,v,A.path),_=e.resolve({path:g.path},A),y=s.createHref(g.fullPath);return G(g,_,{params:h(_.params),hash:Mr(g.hash),redirectedFrom:void 0,href:y})}let R;if("path"in v)R=G({},v,{path:ms(n,v.path,A.path).path});else{const g=G({},v.params);for(const _ in g)g[_]==null&&delete g[_];R=G({},v,{params:p(g)}),A.params=p(A.params)}const x=e.resolve(R,A),q=v.hash||"";x.params=u(h(x.params));const d=Df(r,G({},v,{hash:yh(q),path:x.path})),f=s.createHref(d);return G({fullPath:d,hash:q,query:r===Bo?Ch(v.query):v.query||{}},x,{redirectedFrom:void 0,href:f})}function D(v){return typeof v=="string"?ms(n,v,c.value.path):G({},v)}function z(v,A){if(l!==v)return wn(8,{from:A,to:v})}function L(v){return Te(v)}function ce(v){return L(G(D(v),{replace:!0}))}function le(v){const A=v.matched[v.matched.length-1];if(A&&A.redirect){const{redirect:R}=A;let x=typeof R=="function"?R(v):R;return typeof x=="string"&&(x=x.includes("?")||x.includes("#")?x=D(x):{path:x},x.params={}),G({query:v.query,hash:v.hash,params:"path"in x?{}:v.params},x)}}function Te(v,A){const R=l=O(v),x=c.value,q=v.state,d=v.force,f=v.replace===!0,g=le(R);if(g)return Te(G(D(g),{state:typeof g=="object"?G({},q,g.state):q,force:d,replace:f}),A||R);const _=R;_.redirectedFrom=A;let y;return!d&&Lf(r,x,R)&&(y=wn(16,{to:_,from:x}),ze(x,x,!0,!1)),(y?Promise.resolve(y):Se(_,x)).catch(w=>nt(w)?nt(w,2)?w:mt(w):K(w,_,x)).then(w=>{if(w){if(nt(w,2))return Te(G({replace:f},D(w.to),{state:typeof w.to=="object"?G({},q,w.to.state):q,force:d}),A||_)}else w=Nt(_,x,!0,f,q);return gt(_,x,w),w})}function Oe(v,A){const R=z(v,A);return R?Promise.reject(R):Promise.resolve()}function He(v){const A=sn.values().next().value;return A&&typeof A.runWithContext=="function"?A.runWithContext(v):v()}function Se(v,A){let R;const[x,q,d]=Dh(v,A);R=_s(x.reverse(),"beforeRouteLeave",v,A);for(const g of x)g.leaveGuards.forEach(_=>{R.push(wt(_,v,A))});const f=Oe.bind(null,v,A);return R.push(f),ge(R).then(()=>{R=[];for(const g of i.list())R.push(wt(g,v,A));return R.push(f),ge(R)}).then(()=>{R=_s(q,"beforeRouteUpdate",v,A);for(const g of q)g.updateGuards.forEach(_=>{R.push(wt(_,v,A))});return R.push(f),ge(R)}).then(()=>{R=[];for(const g of v.matched)if(g.beforeEnter&&!A.matched.includes(g))if(Fe(g.beforeEnter))for(const _ of g.beforeEnter)R.push(wt(_,v,A));else R.push(wt(g.beforeEnter,v,A));return R.push(f),ge(R)}).then(()=>(v.matched.forEach(g=>g.enterCallbacks={}),R=_s(d,"beforeRouteEnter",v,A),R.push(f),ge(R))).then(()=>{R=[];for(const g of o.list())R.push(wt(g,v,A));return R.push(f),ge(R)}).catch(g=>nt(g,8)?g:Promise.reject(g))}function gt(v,A,R){for(const x of a.list())He(()=>x(v,A,R))}function Nt(v,A,R,x,q){const d=z(v,A);if(d)return d;const f=A===vt,g=ln?history.state:{};R&&(x||f?s.replace(v.fullPath,G({scroll:f&&g&&g.scroll},q)):s.push(v.fullPath,q)),c.value=v,ze(v,A,R,f),mt()}let je;function kn(){je||(je=s.listen((v,A,R)=>{if(!cr.listening)return;const x=O(v),q=le(x);if(q){Te(G(q,{replace:!0}),x).catch(Fn);return}l=x;const d=c.value;ln&&Vf(xo(d.fullPath,R.delta),rs()),Se(x,d).catch(f=>nt(f,12)?f:nt(f,2)?(Te(f.to,x).then(g=>{nt(g,20)&&!R.delta&&R.type===Yn.pop&&s.go(-1,!1)}).catch(Fn),Promise.reject()):(R.delta&&s.go(-R.delta,!1),K(f,x,d))).then(f=>{f=f||Nt(x,d,!1),f&&(R.delta&&!nt(f,8)?s.go(-R.delta,!1):R.type===Yn.pop&&nt(f,20)&&s.go(-1,!1)),gt(x,d,f)}).catch(Fn)}))}let nn=On(),de=On(),X;function K(v,A,R){mt(v);const x=de.list();return x.length?x.forEach(q=>q(v,A,R)):console.error(v),Promise.reject(v)}function tt(){return X&&c.value!==vt?Promise.resolve():new Promise((v,A)=>{nn.add([v,A])})}function mt(v){return X||(X=!v,kn(),nn.list().forEach(([A,R])=>v?R(v):A()),nn.reset()),v}function ze(v,A,R,x){const{scrollBehavior:q}=t;if(!ln||!q)return Promise.resolve();const d=!R&&Wf(xo(v.fullPath,0))||(x||!R)&&history.state&&history.state.scroll||null;return Qa().then(()=>q(v,A,d)).then(f=>f&&zf(f)).catch(f=>K(f,v,A))}const ye=v=>s.go(v);let rn;const sn=new Set,cr={currentRoute:c,listening:!0,addRoute:m,removeRoute:T,hasRoute:$,getRoutes:P,resolve:O,options:t,push:L,replace:ce,go:ye,back:()=>ye(-1),forward:()=>ye(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:de.add,isReady:tt,install(v){const A=this;v.component("RouterLink",kh),v.component("RouterView",Nh),v.config.globalProperties.$router=A,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>ne(c)}),ln&&!rn&&c.value===vt&&(rn=!0,L(s.location).catch(q=>{}));const R={};for(const q in vt)R[q]=Ae(()=>c.value[q]);v.provide(Ci,A),v.provide($c,ft(R)),v.provide(Gs,c);const x=v.unmount;sn.add(v),v.unmount=function(){sn.delete(v),sn.size<1&&(l=vt,je&&je(),je=null,c.value=vt,rn=!1,X=!1),x()}}};function ge(v){return v.reduce((A,R)=>A.then(()=>He(R)),Promise.resolve())}return cr}function Dh(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>yn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>yn(l,c))||s.push(c))}return[n,r,s]}var Lh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $h(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Uc={exports:{}};/**
 * @license MIT
 * topbar 2.0.0, 2023-02-04
 * http://buunguyen.github.io/topbar
 * Copyright (c) 2021 Buu Nguyen
 */(function(t){(function(e,n){function r(){s.width=e.innerWidth,s.height=5*u.barThickness;var h=s.getContext("2d");h.shadowBlur=u.shadowBlur,h.shadowColor=u.shadowColor;var m,T=h.createLinearGradient(0,0,s.width,0);for(m in u.barColors)T.addColorStop(m,u.barColors[m]);h.lineWidth=u.barThickness,h.beginPath(),h.moveTo(0,u.barThickness/2),h.lineTo(Math.ceil(i*s.width),u.barThickness/2),h.strokeStyle=T,h.stroke()}var s,i,o,a=null,c=null,l=null,u={autoRun:!0,barThickness:3,barColors:{0:"rgba(26,  188, 156, .9)",".25":"rgba(52,  152, 219, .9)",".50":"rgba(241, 196, 15,  .9)",".75":"rgba(230, 126, 34,  .9)","1.0":"rgba(211, 84,  0,   .9)"},shadowBlur:10,shadowColor:"rgba(0,   0,   0,   .6)",className:null},p={config:function(h){for(var m in h)u.hasOwnProperty(m)&&(u[m]=h[m])},show:function(h){var m,T;o||(h?l=l||setTimeout(()=>p.show(),h):(o=!0,c!==null&&e.cancelAnimationFrame(c),s||((T=(s=n.createElement("canvas")).style).position="fixed",T.top=T.left=T.right=T.margin=T.padding=0,T.zIndex=100001,T.display="none",u.className&&s.classList.add(u.className),n.body.appendChild(s),m="resize",h=r,(T=e).addEventListener?T.addEventListener(m,h,!1):T.attachEvent?T.attachEvent("on"+m,h):T["on"+m]=h),s.style.opacity=1,s.style.display="block",p.progress(0),u.autoRun&&function P(){a=e.requestAnimationFrame(P),p.progress("+"+.05*Math.pow(1-Math.sqrt(i),2))}()))},progress:function(h){return h===void 0||(typeof h=="string"&&(h=(0<=h.indexOf("+")||0<=h.indexOf("-")?i:0)+parseFloat(h)),i=1<h?1:h,r()),i},hide:function(){clearTimeout(l),l=null,o&&(o=!1,a!=null&&(e.cancelAnimationFrame(a),a=null),function h(){return 1<=p.progress("+.1")&&(s.style.opacity-=.05,s.style.opacity<=.05)?(s.style.display="none",void(c=null)):void(c=e.requestAnimationFrame(h))}())}};t.exports=p}).call(Lh,window,document)})(Uc);var Uh=Uc.exports;const Bc=$h(Uh);function Bh(){const t=window.location.href,e={title:"Blazed One",description:"Build a virtual empire with Blazed City. Claim your virtual paradise, today.",icon:"https://blazed.sirv.com/logo/Beaker-Cobalt.png",license:"https://blazedlabs.com/license.txt",humans:"https://blazedlabs.com/humans.txt",twitter:"BlazedLabs",fbAppId:"503698127531557",company:"Blazed Labs LLC"};document.head.innerHTML+=`
        
        <link rel="icon" sizes="192x192" href="${e.icon}?w=192&h=192">
        <link rel="apple-touch-icon" href="${e.icon}?w=180&h=180">
        <link rel="apple-touch-startup-image" href="${e.icon}?w=180&h=180">
        <link rel="license" href="${e.license}">
        <link rel="author" href="${e.humans}">
        <!-- Meta Tags -->
        <meta name="generator" content="blz-fire v2.0">
        <meta name="google" content="nositelinkssearchbox">
        <meta name="robots" content="index,follow">
        <meta name="rating" content="General">
        <meta name="msapplication-config" content="/browserconfig.xml">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="application-name" content="${e.title}">
        <meta name="application-name" content="${e.title}">
        <meta name="apple-mobile-web-app-title" content="${e.title}">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        <meta name="twitter:card" content="summary">
        <meta name="twitter:site" content="@${e.twitter}">
        <meta name="twitter:url" content="${t}">
        <meta name="twitter:title" content="${e.title}">
        <meta name="twitter:description" content="${e.description}">
        <meta name="twitter:image" content="${e.icon}?w=500&h=500">
        <meta name="twitter:image:alt" content="${e.description}">
        <meta property="fb:app_id" content="${e.fbAppId}">
        <meta property="og:url" content="${t}">
        <meta property="og:type" content="website">
        <meta property="og:title" content="${e.title}">
        <meta property="og:image" content="${e.icon}?w=500&h=500">
        <meta property="og:image:alt" content="${e.description}">
        <meta property="og:description" content="${e.description}">
        <meta property="og:site_name" content="${e.title}">
        <meta property="og:locale" content="en_US">
        <meta property="article:author" content="${e.company}">
        <meta itemprop="name" content="${e.title}">
        <meta itemprop="description" content="${e.description}">
        <meta itemprop="image" content="${e.icon}?w=180&h=180">
        `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Fh=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Hc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,p=(i&3)<<4|a>>4;let h=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(h=64)),r.push(n[u],n[p],n[h],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Fc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Fh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||p==null)throw new Hh;const h=i<<2|a>>4;if(r.push(h),l!==64){const m=a<<4&240|l>>2;if(r.push(m),p!==64){const T=l<<6&192|p;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Hh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jh=function(t){const e=Fc(t);return Hc.encodeByteArray(e,!0)},jc=function(t){return jh(t).replace(/\./g,"")},zc=function(t){try{return Hc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh=()=>zh().__FIREBASE_DEFAULTS__,Wh=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Kh=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&zc(t[1]);return e&&JSON.parse(e)},Ri=()=>{try{return Vh()||Wh()||Kh()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},qh=t=>{var e,n;return(n=(e=Ri())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Vc=()=>{var t;return(t=Ri())===null||t===void 0?void 0:t.config},Wc=t=>{var e;return(e=Ri())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ve())}function Kc(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Yh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xh(){const t=ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function qc(){try{return typeof indexedDB=="object"}catch{return!1}}function Gc(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Qh(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh="FirebaseError";class et extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Zh,Object.setPrototypeOf(this,et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zt.prototype.create)}}class Zt{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ep(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new et(s,a,r)}}function ep(t,e){return t.replace(tp,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const tp=/\{\$([^}]+)}/g;function np(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Wo(i)&&Wo(o)){if(!Xn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Wo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Dn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ln(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function rp(t,e){const n=new sp(t,e);return n.subscribe.bind(n)}class sp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ip(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=vs),s.error===void 0&&(s.error=vs),s.complete===void 0&&(s.complete=vs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ip(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function vs(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op=1e3,ap=2,cp=4*60*60*1e3,lp=.5;function Ko(t,e=op,n=ap){const r=e*Math.pow(n,t),s=Math.round(lp*r*(Math.random()-.5)*2);return Math.min(cp,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(t){return t&&t._delegate?t._delegate:t}class Ze{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Gh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fp(e))try{this.getOrInitializeService({instanceIdentifier:Lt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Lt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Lt){return this.instances.has(e)}getOptions(e=Lt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dp(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Lt){return this.component?this.component.multipleInstances?e:Lt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dp(t){return t===Lt?void 0:t}function fp(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new up(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const pp={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},gp=Q.INFO,mp={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},_p=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=mp[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Si{constructor(e){this.name=e,this._logLevel=gp,this._logHandler=_p,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const vp=(t,e)=>e.some(n=>t instanceof n);let qo,Go;function bp(){return qo||(qo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yp(){return Go||(Go=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jc=new WeakMap,Js=new WeakMap,Yc=new WeakMap,bs=new WeakMap,Ai=new WeakMap;function wp(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(St(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Jc.set(n,t)}).catch(()=>{}),Ai.set(e,t),e}function Ip(t){if(Js.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Js.set(t,e)}let Ys={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Js.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Yc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return St(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ep(t){Ys=t(Ys)}function Tp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ys(this),e,...n);return Yc.set(r,e.sort?e.sort():[e]),St(r)}:yp().includes(t)?function(...e){return t.apply(ys(this),e),St(Jc.get(this))}:function(...e){return St(t.apply(ys(this),e))}}function Cp(t){return typeof t=="function"?Tp(t):(t instanceof IDBTransaction&&Ip(t),vp(t,bp())?new Proxy(t,Ys):t)}function St(t){if(t instanceof IDBRequest)return wp(t);if(bs.has(t))return bs.get(t);const e=Cp(t);return e!==t&&(bs.set(t,e),Ai.set(e,t)),e}const ys=t=>Ai.get(t);function Rp(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=St(o);return r&&o.addEventListener("upgradeneeded",c=>{r(St(o.result),c.oldVersion,c.newVersion,St(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Sp=["get","getKey","getAll","getAllKeys","count"],Ap=["put","add","delete","clear"],ws=new Map;function Jo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ws.get(e))return ws.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Ap.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Sp.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return ws.set(e,i),i}Ep(t=>({...t,get:(e,n,r)=>Jo(e,n)||t.get(e,n,r),has:(e,n)=>!!Jo(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Pp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Pp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xs="@firebase/app",Yo="0.9.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=new Si("@firebase/app"),xp="@firebase/app-compat",Op="@firebase/analytics-compat",Np="@firebase/analytics",Mp="@firebase/app-check-compat",Dp="@firebase/app-check",Lp="@firebase/auth",$p="@firebase/auth-compat",Up="@firebase/database",Bp="@firebase/database-compat",Fp="@firebase/functions",Hp="@firebase/functions-compat",jp="@firebase/installations",zp="@firebase/installations-compat",Vp="@firebase/messaging",Wp="@firebase/messaging-compat",Kp="@firebase/performance",qp="@firebase/performance-compat",Gp="@firebase/remote-config",Jp="@firebase/remote-config-compat",Yp="@firebase/storage",Xp="@firebase/storage-compat",Qp="@firebase/firestore",Zp="@firebase/firestore-compat",eg="firebase",tg="9.22.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs="[DEFAULT]",ng={[Xs]:"fire-core",[xp]:"fire-core-compat",[Np]:"fire-analytics",[Op]:"fire-analytics-compat",[Dp]:"fire-app-check",[Mp]:"fire-app-check-compat",[Lp]:"fire-auth",[$p]:"fire-auth-compat",[Up]:"fire-rtdb",[Bp]:"fire-rtdb-compat",[Fp]:"fire-fn",[Hp]:"fire-fn-compat",[jp]:"fire-iid",[zp]:"fire-iid-compat",[Vp]:"fire-fcm",[Wp]:"fire-fcm-compat",[Kp]:"fire-perf",[qp]:"fire-perf-compat",[Gp]:"fire-rc",[Jp]:"fire-rc-compat",[Yp]:"fire-gcs",[Xp]:"fire-gcs-compat",[Qp]:"fire-fst",[Zp]:"fire-fst-compat","fire-js":"fire-js",[eg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new Map,Zs=new Map;function rg(t,e){try{t.container.addComponent(e)}catch(n){qt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ut(t){const e=t.name;if(Zs.has(e))return qt.debug(`There were multiple attempts to register component ${e}.`),!1;Zs.set(e,t);for(const n of Dr.values())rg(n,t);return!0}function Rn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},At=new Zt("app","Firebase",sg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ze("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw At.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=tg;function Xc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qs,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw At.create("bad-app-name",{appName:String(s)});if(n||(n=Vc()),!n)throw At.create("no-options");const i=Dr.get(s);if(i){if(Xn(n,i.options)&&Xn(r,i.config))return i;throw At.create("duplicate-app",{appName:s})}const o=new hp(s);for(const c of Zs.values())o.addComponent(c);const a=new ig(n,r,o);return Dr.set(s,a),a}function Qc(t=Qs){const e=Dr.get(t);if(!e&&t===Qs&&Vc())return Xc();if(!e)throw At.create("no-app",{appName:t});return e}function Je(t,e,n){var r;let s=(r=ng[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qt.warn(a.join(" "));return}ut(new Ze(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og="firebase-heartbeat-database",ag=1,Qn="firebase-heartbeat-store";let Is=null;function Zc(){return Is||(Is=Rp(og,ag,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Qn)}}}).catch(t=>{throw At.create("idb-open",{originalErrorMessage:t.message})})),Is}async function cg(t){try{return await(await Zc()).transaction(Qn).objectStore(Qn).get(el(t))}catch(e){if(e instanceof et)qt.warn(e.message);else{const n=At.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qt.warn(n.message)}}}async function Xo(t,e){try{const r=(await Zc()).transaction(Qn,"readwrite");await r.objectStore(Qn).put(e,el(t)),await r.done}catch(n){if(n instanceof et)qt.warn(n.message);else{const r=At.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qt.warn(r.message)}}}function el(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg=1024,ug=30*24*60*60*1e3;class dg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Qo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=ug}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Qo(),{heartbeatsToSend:n,unsentEntries:r}=fg(this._heartbeatsCache.heartbeats),s=jc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Qo(){return new Date().toISOString().substring(0,10)}function fg(t,e=lg){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Zo(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Zo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qc()?Gc().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await cg(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Xo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Xo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Zo(t){return jc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(t){ut(new Ze("platform-logger",e=>new kp(e),"PRIVATE")),ut(new Ze("heartbeat",e=>new dg(e),"PRIVATE")),Je(Xs,Yo,t),Je(Xs,Yo,"esm2017"),Je("fire-js","")}pg("");function ki(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function tl(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gg=tl,nl=new Zt("auth","Firebase",tl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new Si("@firebase/auth");function mg(t,...e){Lr.logLevel<=Q.WARN&&Lr.warn(`Auth (${nr}): ${t}`,...e)}function Ir(t,...e){Lr.logLevel<=Q.ERROR&&Lr.error(`Auth (${nr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(t,...e){throw Pi(t,...e)}function Ye(t,...e){return Pi(t,...e)}function rl(t,e,n){const r=Object.assign(Object.assign({},gg()),{[e]:n});return new Zt("auth","Firebase",r).create(e,{appName:t.name})}function _g(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ke(t,"argument-error"),rl(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Pi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return nl.create(t,...e)}function U(t,e,...n){if(!t)throw Pi(e,...n)}function it(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ir(e),new Error(e)}function dt(t,e){t||it(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function vg(){return ea()==="http:"||ea()==="https:"}function ea(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vg()||Kc()||"connection"in navigator)?navigator.onLine:!0}function yg(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n){this.shortDelay=e,this.longDelay=n,dt(n>e,"Short delay should be less than long delay!"),this.isMobile=Jh()||Yh()}get(){return bg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(t,e){dt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;it("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;it("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;it("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=new rr(3e4,6e4);function Sn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function en(t,e,n,r,s={}){return il(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=tr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),sl.fetch()(ol(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function il(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},wg),e);try{const s=new Eg(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw gr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw gr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw gr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw gr(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw rl(t,u,l);ke(t,u)}}catch(s){if(s instanceof et)throw s;ke(t,"network-request-failed",{message:String(s)})}}async function sr(t,e,n,r,s={}){const i=await en(t,e,n,r,s);return"mfaPendingCredential"in i&&ke(t,"multi-factor-auth-required",{_serverResponse:i}),i}function ol(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?xi(t.config,s):`${t.config.apiScheme}://${s}`}class Eg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ye(this.auth,"network-request-failed")),Ig.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function gr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ye(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tg(t,e){return en(t,"POST","/v1/accounts:delete",e)}async function Cg(t,e){return en(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Rg(t,e=!1){const n=Pe(t),r=await n.getIdToken(e),s=Oi(r);U(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:jn(Es(s.auth_time)),issuedAtTime:jn(Es(s.iat)),expirationTime:jn(Es(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Es(t){return Number(t)*1e3}function Oi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ir("JWT malformed, contained fewer than 3 sections"),null;try{const s=zc(n);return s?JSON.parse(s):(Ir("Failed to decode base64 JWT payload"),null)}catch(s){return Ir("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Sg(t){const e=Oi(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function In(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof et&&Ag(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Ag({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=jn(this.lastLoginAt),this.creationTime=jn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $r(t){var e;const n=t.auth,r=await t.getIdToken(),s=await In(t,Cg(n,{idToken:r}));U(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Og(i.providerUserInfo):[],a=xg(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new al(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,p)}async function Pg(t){const e=Pe(t);await $r(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xg(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Og(t){return t.map(e=>{var{providerId:n}=e,r=ki(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ng(t,e){const n=await il(t,{},async()=>{const r=tr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=ol(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",sl.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Ng(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Zn;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(U(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(U(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zn,this.toJSON())}_performRefresh(){return it("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ki(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new al(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await In(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Rg(this,e)}reload(){return Pg(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Kt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $r(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await In(this,Tg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,$=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,O=(l=n.createdAt)!==null&&l!==void 0?l:void 0,D=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:z,emailVerified:L,isAnonymous:ce,providerData:le,stsTokenManager:Te}=n;U(z&&Te,e,"internal-error");const Oe=Zn.fromJSON(this.name,Te);U(typeof z=="string",e,"internal-error"),bt(p,e.name),bt(h,e.name),U(typeof L=="boolean",e,"internal-error"),U(typeof ce=="boolean",e,"internal-error"),bt(m,e.name),bt(T,e.name),bt(P,e.name),bt($,e.name),bt(O,e.name),bt(D,e.name);const He=new Kt({uid:z,auth:e,email:h,emailVerified:L,displayName:p,isAnonymous:ce,photoURL:T,phoneNumber:m,tenantId:P,stsTokenManager:Oe,createdAt:O,lastLoginAt:D});return le&&Array.isArray(le)&&(He.providerData=le.map(Se=>Object.assign({},Se))),$&&(He._redirectEventId=$),He}static async _fromIdTokenResponse(e,n,r=!1){const s=new Zn;s.updateFromServerResponse(n);const i=new Kt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await $r(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=new Map;function ot(t){dt(t instanceof Function,"Expected a class definition");let e=ta.get(t);return e?(dt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ta.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}cl.type="NONE";const na=cl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(t,e,n){return`firebase:${t}:${e}:${n}`}class gn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Er(this.userKey,s.apiKey,i),this.fullPersistenceKey=Er("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new gn(ot(na),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||ot(na);const o=Er(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const p=Kt._fromJSON(e,u);l!==i&&(a=p),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new gn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new gn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ll(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hl(e))return"Blackberry";if(pl(e))return"Webos";if(Ni(e))return"Safari";if((e.includes("chrome/")||ul(e))&&!e.includes("edge/"))return"Chrome";if(fl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ll(t=ve()){return/firefox\//i.test(t)}function Ni(t=ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ul(t=ve()){return/crios\//i.test(t)}function dl(t=ve()){return/iemobile/i.test(t)}function fl(t=ve()){return/android/i.test(t)}function hl(t=ve()){return/blackberry/i.test(t)}function pl(t=ve()){return/webos/i.test(t)}function ss(t=ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Mg(t=ve()){var e;return ss(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Dg(){return Xh()&&document.documentMode===10}function gl(t=ve()){return ss(t)||fl(t)||pl(t)||hl(t)||/windows phone/i.test(t)||dl(t)}function Lg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(t,e=[]){let n;switch(t){case"Browser":n=ra(ve());break;case"Worker":n=`${ra(ve())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${nr}/${r}`}async function _l(t,e){return en(t,"GET","/v2/recaptchaConfig",Sn(t,e))}function sa(t){return t!==void 0&&t.enterprise!==void 0}class vl{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function bl(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ye("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",$g().appendChild(r)})}function Ug(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Bg="https://www.google.com/recaptcha/enterprise.js?render=",Fg="recaptcha-enterprise",Hg="NO_RECAPTCHA";class yl{constructor(e){this.type=Fg,this.auth=tn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{_l(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new vl(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;sa(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Hg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&sa(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}bl(Bg+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Ur(t,e,n,r=!1){const s=new yl(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ia(this),this.idTokenSubscription=new ia(this),this.beforeStateQueue=new jg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ot(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await gn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $r(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Pe(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ot(e))})}async initializeRecaptchaConfig(){const e=await _l(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new vl(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new yl(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zt("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ot(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await gn.create(this,[ot(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return U(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ml(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&mg(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function tn(t){return Pe(t)}class ia{constructor(e){this.auth=e,this.observer=null,this.addObserver=rp(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(t,e){const n=Rn(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Xn(i,e??{}))return s;ke(s,"already-initialized")}return n.initialize({options:e})}function Wg(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ot);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Kg(t,e,n){const r=tn(t);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=wl(e),{host:o,port:a}=qg(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Gg()}function wl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function qg(t){const e=wl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:oa(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:oa(o)}}}function oa(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Gg(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return it("not implemented")}_getIdTokenResponse(e){return it("not implemented")}_linkToIdToken(e,n){return it("not implemented")}_getReauthenticationResolver(e){return it("not implemented")}}async function Jg(t,e){return en(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ts(t,e){return sr(t,"POST","/v1/accounts:signInWithPassword",Sn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yg(t,e){return sr(t,"POST","/v1/accounts:signInWithEmailLink",Sn(t,e))}async function Xg(t,e){return sr(t,"POST","/v1/accounts:signInWithEmailLink",Sn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends Mi{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new er(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new er(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Ur(e,r,"signInWithPassword");return Ts(e,s)}else return Ts(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Ur(e,r,"signInWithPassword");return Ts(e,i)}else return Promise.reject(s)});case"emailLink":return Yg(e,{email:this._email,oobCode:this._password});default:ke(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Jg(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Xg(e,{idToken:n,email:this._email,oobCode:this._password});default:ke(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mn(t,e){return sr(t,"POST","/v1/accounts:signInWithIdp",Sn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg="http://localhost";class Gt extends Mi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ke("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ki(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Gt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return mn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,mn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,mn(e,n)}buildRequest(){const e={requestUri:Qg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=tr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function em(t){const e=Dn(Ln(t)).link,n=e?Dn(Ln(e)).deep_link_id:null,r=Dn(Ln(t)).deep_link_id;return(r?Dn(Ln(r)).link:null)||r||n||e||t}class Di{constructor(e){var n,r,s,i,o,a;const c=Dn(Ln(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,p=Zg((s=c.mode)!==null&&s!==void 0?s:null);U(l&&u&&p,"argument-error"),this.apiKey=l,this.operation=p,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=em(e);try{return new Di(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(){this.providerId=An.PROVIDER_ID}static credential(e,n){return er._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Di.parseLink(n);return U(r,"argument-error"),er._fromEmailAndCode(e,r.code,r.tenantId)}}An.PROVIDER_ID="password";An.EMAIL_PASSWORD_SIGN_IN_METHOD="password";An.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends Li{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends ir{constructor(){super("facebook.com")}static credential(e){return Gt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return It.credential(e.oauthAccessToken)}catch{return null}}}It.FACEBOOK_SIGN_IN_METHOD="facebook.com";It.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends ir{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gt._fromParams({providerId:st.PROVIDER_ID,signInMethod:st.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return st.credentialFromTaggedObject(e)}static credentialFromError(e){return st.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return st.credential(n,r)}catch{return null}}}st.GOOGLE_SIGN_IN_METHOD="google.com";st.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends ir{constructor(){super("github.com")}static credential(e){return Gt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch{return null}}}Et.GITHUB_SIGN_IN_METHOD="github.com";Et.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends ir{constructor(){super("twitter.com")}static credential(e,n){return Gt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Tt.credential(n,r)}catch{return null}}}Tt.TWITTER_SIGN_IN_METHOD="twitter.com";Tt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cs(t,e){return sr(t,"POST","/v1/accounts:signUp",Sn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Kt._fromIdTokenResponse(e,r,s),o=aa(r);return new Jt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=aa(r);return new Jt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function aa(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br extends et{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Br.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Br(e,n,r,s)}}function Il(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Br._fromErrorAndOperation(t,i,e,r):i})}async function tm(t,e,n=!1){const r=await In(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Jt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nm(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await In(t,Il(r,s,e,t),n);U(i.idToken,r,"internal-error");const o=Oi(i.idToken);U(o,r,"internal-error");const{sub:a}=o;return U(t.uid===a,r,"user-mismatch"),Jt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ke(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function El(t,e,n=!1){const r="signIn",s=await Il(t,r,e),i=await Jt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function rm(t,e){return El(tn(t),e)}async function sm(t,e,n){var r;const s=tn(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await Ur(s,i,"signUpPassword");o=Cs(s,l)}else o=Cs(s,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Ur(s,i,"signUpPassword");return Cs(s,u)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),c=await Jt._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function im(t,e,n){return rm(Pe(t),An.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function om(t,e){return en(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function am(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Pe(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await In(r,om(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function cm(t,e,n,r){return Pe(t).onIdTokenChanged(e,n,r)}function lm(t,e,n){return Pe(t).beforeAuthStateChanged(e,n)}function um(t,e,n,r){return Pe(t).onAuthStateChanged(e,n,r)}function dm(t){return Pe(t).signOut()}const Fr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fr,"1"),this.storage.removeItem(Fr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(){const t=ve();return Ni(t)||ss(t)}const hm=1e3,pm=10;class Cl extends Tl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=fm()&&Lg(),this.fallbackToPolling=gl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Dg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,pm):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},hm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Cl.type="LOCAL";const gm=Cl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl extends Tl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Rl.type="SESSION";const Sl=Rl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new is(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await mm(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}is.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=$i("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const h=p;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return window}function vm(t){Xe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(){return typeof Xe().WorkerGlobalScope<"u"&&typeof Xe().importScripts=="function"}async function bm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ym(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function wm(){return Al()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl="firebaseLocalStorageDb",Im=1,Hr="firebaseLocalStorage",Pl="fbase_key";class or{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function os(t,e){return t.transaction([Hr],e?"readwrite":"readonly").objectStore(Hr)}function Em(){const t=indexedDB.deleteDatabase(kl);return new or(t).toPromise()}function ti(){const t=indexedDB.open(kl,Im);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Hr,{keyPath:Pl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Hr)?e(r):(r.close(),await Em(),e(await ti()))})})}async function ca(t,e,n){const r=os(t,!0).put({[Pl]:e,value:n});return new or(r).toPromise()}async function Tm(t,e){const n=os(t,!1).get(e),r=await new or(n).toPromise();return r===void 0?null:r.value}function la(t,e){const n=os(t,!0).delete(e);return new or(n).toPromise()}const Cm=800,Rm=3;class xl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ti(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Rm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Al()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=is._getInstance(wm()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await bm(),!this.activeServiceWorker)return;this.sender=new _m(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ym()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ti();return await ca(e,Fr,"1"),await la(e,Fr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ca(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Tm(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>la(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=os(s,!1).getAll();return new or(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Cm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xl.type="LOCAL";const Sm=xl;new rr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(t,e){return e?ot(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui extends Mi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return mn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return mn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Am(t){return El(t.auth,new Ui(t),t.bypassAuthState)}function km(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),nm(n,new Ui(t),t.bypassAuthState)}async function Pm(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),tm(n,new Ui(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Am;case"linkViaPopup":case"linkViaRedirect":return Pm;case"reauthViaPopup":case"reauthViaRedirect":return km;default:ke(this.auth,"internal-error")}}resolve(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm=new rr(2e3,1e4);async function Om(t,e,n){const r=tn(t);_g(t,e,Li);const s=Ol(r,n);return new jt(r,"signInViaPopup",e,s).executeNotNull()}class jt extends Nl{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,jt.currentPopupAction&&jt.currentPopupAction.cancel(),jt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){dt(this.filter.length===1,"Popup operations only handle one event");const e=$i();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ye(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xm.get())};e()}}jt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm="pendingRedirect",Tr=new Map;class Mm extends Nl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Tr.get(this.auth._key());if(!e){try{const r=await Dm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Tr.set(this.auth._key(),e)}return this.bypassAuthState||Tr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Dm(t,e){const n=Um(e),r=$m(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Lm(t,e){Tr.set(t._key(),e)}function $m(t){return ot(t._redirectPersistence)}function Um(t){return Er(Nm,t.config.apiKey,t.name)}async function Bm(t,e,n=!1){const r=tn(t),s=Ol(r,e),o=await new Mm(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm=10*60*1e3;class Hm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jm(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ml(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ye(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Fm&&this.cachedEventUids.clear(),this.cachedEventUids.has(ua(e))}saveEventToCache(e){this.cachedEventUids.add(ua(e)),this.lastProcessedEventTime=Date.now()}}function ua(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ml({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jm(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ml(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zm(t,e={}){return en(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Wm=/^https?/;async function Km(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zm(t);for(const n of e)try{if(qm(n))return}catch{}ke(t,"unauthorized-domain")}function qm(t){const e=ei(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Wm.test(n))return!1;if(Vm.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm=new rr(3e4,6e4);function da(){const t=Xe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Jm(t){return new Promise((e,n)=>{var r,s,i;function o(){da(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{da(),n(Ye(t,"network-request-failed"))},timeout:Gm.get()})}if(!((s=(r=Xe().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Xe().gapi)===null||i===void 0)&&i.load)o();else{const a=Ug("iframefcb");return Xe()[a]=()=>{gapi.load?o():n(Ye(t,"network-request-failed"))},bl(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Cr=null,e})}let Cr=null;function Ym(t){return Cr=Cr||Jm(t),Cr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm=new rr(5e3,15e3),Qm="__/auth/iframe",Zm="emulator/auth/iframe",e_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},t_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function n_(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xi(e,Zm):`https://${t.config.authDomain}/${Qm}`,r={apiKey:e.apiKey,appName:t.name,v:nr},s=t_.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${tr(r).slice(1)}`}async function r_(t){const e=await Ym(t),n=Xe().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:n_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:e_,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ye(t,"network-request-failed"),a=Xe().setTimeout(()=>{i(o)},Xm.get());function c(){Xe().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},i_=500,o_=600,a_="_blank",c_="http://localhost";class fa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function l_(t,e,n,r=i_,s=o_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},s_),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ve().toLowerCase();n&&(a=ul(l)?a_:n),ll(l)&&(e=e||c_,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[m,T])=>`${h}${m}=${T},`,"");if(Mg(l)&&a!=="_self")return u_(e||"",a),new fa(null);const p=window.open(e||"",a,u);U(p,t,"popup-blocked");try{p.focus()}catch{}return new fa(p)}function u_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_="__/auth/handler",f_="emulator/auth/handler",h_=encodeURIComponent("fac");async function ha(t,e,n,r,s,i){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:nr,eventId:s};if(e instanceof Li){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",np(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,p]of Object.entries(i||{}))o[u]=p}if(e instanceof ir){const u=e.getScopes().filter(p=>p!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${h_}=${encodeURIComponent(c)}`:"";return`${p_(t)}?${tr(a).slice(1)}${l}`}function p_({config:t}){return t.emulator?xi(t,f_):`https://${t.authDomain}/${d_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs="webStorageSupport";class g_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sl,this._completeRedirectFn=Bm,this._overrideRedirectResult=Lm}async _openPopup(e,n,r,s){var i;dt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ha(e,n,r,ei(),s);return l_(e,o,$i())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ha(e,n,r,ei(),s);return vm(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(dt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await r_(e),r=new Hm(e);return n.register("authEvent",s=>(U(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Rs,{type:Rs},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Rs];o!==void 0&&n(!!o),ke(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Km(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return gl()||Ni()||ss()}}const m_=g_;var pa="@firebase/auth",ga="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function b_(t){ut(new Ze("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ml(t)},l=new zg(r,s,i,c);return Wg(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ut(new Ze("auth-internal",e=>{const n=tn(e.getProvider("auth").getImmediate());return(r=>new __(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Je(pa,ga,v_(t)),Je(pa,ga,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_=5*60,w_=Wc("authIdTokenMaxAge")||y_;let ma=null;const I_=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>w_)return;const s=n==null?void 0:n.token;ma!==s&&(ma=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function E_(t=Qc()){const e=Rn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Vg(t,{popupRedirectResolver:m_,persistence:[Sm,gm,Sl]}),r=Wc("authTokenSyncURL");if(r){const i=I_(r);lm(n,i,()=>i(n.currentUser)),cm(n,o=>i(o))}const s=qh("auth");return s&&Kg(n,`http://${s}`),n}b_("Browser");var T_="firebase",C_="9.22.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Je(T_,C_,"app");const R_=(t,e)=>e.some(n=>t instanceof n);let _a,va;function S_(){return _a||(_a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function A_(){return va||(va=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dl=new WeakMap,ni=new WeakMap,Ll=new WeakMap,Ss=new WeakMap,Bi=new WeakMap;function k_(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(kt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Dl.set(n,t)}).catch(()=>{}),Bi.set(e,t),e}function P_(t){if(ni.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ni.set(t,e)}let ri={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ni.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ll.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function x_(t){ri=t(ri)}function O_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(As(this),e,...n);return Ll.set(r,e.sort?e.sort():[e]),kt(r)}:A_().includes(t)?function(...e){return t.apply(As(this),e),kt(Dl.get(this))}:function(...e){return kt(t.apply(As(this),e))}}function N_(t){return typeof t=="function"?O_(t):(t instanceof IDBTransaction&&P_(t),R_(t,S_())?new Proxy(t,ri):t)}function kt(t){if(t instanceof IDBRequest)return k_(t);if(Ss.has(t))return Ss.get(t);const e=N_(t);return e!==t&&(Ss.set(t,e),Bi.set(e,t)),e}const As=t=>Bi.get(t);function M_(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=kt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(kt(o.result),c.oldVersion,c.newVersion,kt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const D_=["get","getKey","getAll","getAllKeys","count"],L_=["put","add","delete","clear"],ks=new Map;function ba(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ks.get(e))return ks.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=L_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||D_.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return ks.set(e,i),i}x_(t=>({...t,get:(e,n,r)=>ba(e,n)||t.get(e,n,r),has:(e,n)=>!!ba(e,n)||t.has(e,n)}));const $l="@firebase/installations",Fi="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul=1e4,Bl=`w:${Fi}`,Fl="FIS_v2",$_="https://firebaseinstallations.googleapis.com/v1",U_=60*60*1e3,B_="installations",F_="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Yt=new Zt(B_,F_,H_);function Hl(t){return t instanceof et&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl({projectId:t}){return`${$_}/projects/${t}/installations`}function zl(t){return{token:t.token,requestStatus:2,expiresIn:z_(t.expiresIn),creationTime:Date.now()}}async function Vl(t,e){const r=(await e.json()).error;return Yt.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Wl({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function j_(t,{refreshToken:e}){const n=Wl(t);return n.append("Authorization",V_(e)),n}async function Kl(t){const e=await t();return e.status>=500&&e.status<600?t():e}function z_(t){return Number(t.replace("s","000"))}function V_(t){return`${Fl} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W_({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=jl(t),s=Wl(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:Fl,appId:t.appId,sdkVersion:Bl},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Kl(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:zl(l.authToken)}}else throw await Vl("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_=/^[cdef][\w-]{21}$/,si="";function G_(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=J_(t);return q_.test(n)?n:si}catch{return si}}function J_(t){return K_(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl=new Map;function Jl(t,e){const n=as(t);Yl(n,e),Y_(n,e)}function Yl(t,e){const n=Gl.get(t);if(n)for(const r of n)r(e)}function Y_(t,e){const n=X_();n&&n.postMessage({key:t,fid:e}),Q_()}let zt=null;function X_(){return!zt&&"BroadcastChannel"in self&&(zt=new BroadcastChannel("[Firebase] FID Change"),zt.onmessage=t=>{Yl(t.data.key,t.data.fid)}),zt}function Q_(){Gl.size===0&&zt&&(zt.close(),zt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_="firebase-installations-database",ev=1,Xt="firebase-installations-store";let Ps=null;function Hi(){return Ps||(Ps=M_(Z_,ev,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Xt)}}})),Ps}async function jr(t,e){const n=as(t),s=(await Hi()).transaction(Xt,"readwrite"),i=s.objectStore(Xt),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&Jl(t,e.fid),e}async function Xl(t){const e=as(t),r=(await Hi()).transaction(Xt,"readwrite");await r.objectStore(Xt).delete(e),await r.done}async function cs(t,e){const n=as(t),s=(await Hi()).transaction(Xt,"readwrite"),i=s.objectStore(Xt),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&Jl(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ji(t){let e;const n=await cs(t.appConfig,r=>{const s=tv(r),i=nv(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===si?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function tv(t){const e=t||{fid:G_(),registrationStatus:0};return Ql(e)}function nv(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Yt.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=rv(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:sv(t)}:{installationEntry:e}}async function rv(t,e){try{const n=await W_(t,e);return jr(t.appConfig,n)}catch(n){throw Hl(n)&&n.customData.serverCode===409?await Xl(t.appConfig):await jr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function sv(t){let e=await ya(t.appConfig);for(;e.registrationStatus===1;)await ql(100),e=await ya(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ji(t);return r||n}return e}function ya(t){return cs(t,e=>{if(!e)throw Yt.create("installation-not-found");return Ql(e)})}function Ql(t){return iv(t)?{fid:t.fid,registrationStatus:0}:t}function iv(t){return t.registrationStatus===1&&t.registrationTime+Ul<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ov({appConfig:t,heartbeatServiceProvider:e},n){const r=av(t,n),s=j_(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:Bl,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Kl(()=>fetch(r,a));if(c.ok){const l=await c.json();return zl(l)}else throw await Vl("Generate Auth Token",c)}function av(t,{fid:e}){return`${jl(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zi(t,e=!1){let n;const r=await cs(t.appConfig,i=>{if(!Zl(i))throw Yt.create("not-registered");const o=i.authToken;if(!e&&uv(o))return i;if(o.requestStatus===1)return n=cv(t,e),i;{if(!navigator.onLine)throw Yt.create("app-offline");const a=fv(i);return n=lv(t,a),a}});return n?await n:r.authToken}async function cv(t,e){let n=await wa(t.appConfig);for(;n.authToken.requestStatus===1;)await ql(100),n=await wa(t.appConfig);const r=n.authToken;return r.requestStatus===0?zi(t,e):r}function wa(t){return cs(t,e=>{if(!Zl(e))throw Yt.create("not-registered");const n=e.authToken;return hv(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function lv(t,e){try{const n=await ov(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await jr(t.appConfig,r),n}catch(n){if(Hl(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Xl(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await jr(t.appConfig,r)}throw n}}function Zl(t){return t!==void 0&&t.registrationStatus===2}function uv(t){return t.requestStatus===2&&!dv(t)}function dv(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+U_}function fv(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function hv(t){return t.requestStatus===1&&t.requestTime+Ul<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pv(t){const e=t,{installationEntry:n,registrationPromise:r}=await ji(e);return r?r.catch(console.error):zi(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gv(t,e=!1){const n=t;return await mv(n),(await zi(n,e)).token}async function mv(t){const{registrationPromise:e}=await ji(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _v(t){if(!t||!t.options)throw xs("App Configuration");if(!t.name)throw xs("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw xs(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function xs(t){return Yt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu="installations",vv="installations-internal",bv=t=>{const e=t.getProvider("app").getImmediate(),n=_v(e),r=Rn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},yv=t=>{const e=t.getProvider("app").getImmediate(),n=Rn(e,eu).getImmediate();return{getId:()=>pv(n),getToken:s=>gv(n,s)}};function wv(){ut(new Ze(eu,bv,"PUBLIC")),ut(new Ze(vv,yv,"PRIVATE"))}wv();Je($l,Fi);Je($l,Fi,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="analytics",Iv="firebase_id",Ev="origin",Tv=60*1e3,Cv="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Vi="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie=new Si("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Re=new Zt("analytics","Analytics",Rv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(t){if(!t.startsWith(Vi)){const e=Re.create("invalid-gtag-resource",{gtagURL:t});return Ie.warn(e.message),""}return t}function tu(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Av(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function kv(t,e){const n=Av("firebase-js-sdk-policy",{createScriptURL:Sv}),r=document.createElement("script"),s=`${Vi}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Pv(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function xv(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await tu(n)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(a){Ie.error(a)}t("config",s,i)}async function Ov(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await tu(n);for(const c of o){const l=a.find(p=>p.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Ie.error(i)}}function Nv(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await Ov(t,e,n,a,c)}else if(i==="config"){const[a,c]=o;await xv(t,e,n,r,a,c)}else if(i==="consent"){const[a]=o;t("consent","update",a)}else if(i==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){Ie.error(a)}}return s}function Mv(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=Nv(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function Dv(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Vi)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv=30,$v=1e3;class Uv{constructor(e={},n=$v){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const nu=new Uv;function Bv(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Fv(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:Bv(r)},i=Cv.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Re.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Hv(t,e=nu,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Re.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Re.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Vv;return setTimeout(async()=>{a.abort()},n!==void 0?n:Tv),ru({appId:r,apiKey:s,measurementId:i},o,a,e)}async function ru(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=nu){var i;const{appId:o,measurementId:a}=t;try{await jv(r,e)}catch(c){if(a)return Ie.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await Fv(t);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!zv(l)){if(s.deleteThrottleMetadata(o),a)return Ie.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?Ko(n,s.intervalMillis,Lv):Ko(n,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,p),Ie.debug(`Calling attemptFetch again in ${u} millis`),ru(t,p,r,s)}}function jv(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Re.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function zv(t){if(!(t instanceof et)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Vv{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Wv(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kv(){if(qc())try{await Gc()}catch(t){return Ie.warn(Re.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ie.warn(Re.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function qv(t,e,n,r,s,i,o){var a;const c=Hv(t);c.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&Ie.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Ie.error(m)),e.push(c);const l=Kv().then(m=>{if(m)return r.getId()}),[u,p]=await Promise.all([c,l]);Dv(i)||kv(i,u.measurementId),s("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[Ev]="firebase",h.update=!0,p!=null&&(h[Iv]=p),s("config",u.measurementId,h),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e){this.app=e}_delete(){return delete zn[this.app.options.appId],Promise.resolve()}}let zn={},Ia=[];const Ea={};let Os="dataLayer",Jv="gtag",Ta,su,Ca=!1;function Yv(){const t=[];if(Kc()&&t.push("This is a browser extension environment."),Qh()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Re.create("invalid-analytics-context",{errorInfo:e});Ie.warn(n.message)}}function Xv(t,e,n){Yv();const r=t.options.appId;if(!r)throw Re.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ie.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Re.create("no-api-key");if(zn[r]!=null)throw Re.create("already-exists",{id:r});if(!Ca){Pv(Os);const{wrappedGtag:i,gtagCore:o}=Mv(zn,Ia,Ea,Os,Jv);su=i,Ta=o,Ca=!0}return zn[r]=qv(t,Ia,Ea,e,Ta,Os,n),new Gv(t)}function Qv(t=Qc()){t=Pe(t);const e=Rn(t,zr);return e.isInitialized()?e.getImmediate():Zv(t)}function Zv(t,e={}){const n=Rn(t,zr);if(n.isInitialized()){const s=n.getImmediate();if(Xn(e,n.getOptions()))return s;throw Re.create("already-initialized")}return n.initialize({options:e})}function eb(t,e,n,r){t=Pe(t),Wv(su,zn[t.app.options.appId],e,n,r).catch(s=>Ie.error(s))}const Ra="@firebase/analytics",Sa="0.10.0";function tb(){ut(new Ze(zr,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Xv(r,s,n)},"PUBLIC")),ut(new Ze("analytics-internal",t,"PRIVATE")),Je(Ra,Sa),Je(Ra,Sa,"esm2017");function t(e){try{const n=e.getProvider(zr).getImmediate();return{logEvent:(r,s,i)=>eb(n,r,s,i)}}catch(n){throw Re.create("interop-component-reg-failed",{reason:n})}}}tb();const nb={apiKey:"AIzaSyDJNpSgZqhn1_ipvk54wsU11UIE1BoYIfc",authDomain:"blz-one-9e383.firebaseapp.com",databaseURL:"https://blz-one-9e383-default-rtdb.firebaseio.com",projectId:"blz-one-9e383",storageBucket:"blz-one-9e383.appspot.com",messagingSenderId:"817319905653",appId:"1:817319905653:web:94174c7e723ee8d08bab3c",measurementId:"G-Y5ZW5STMX1"},Wi=Xc(nb),rb=Qv(Wi),sb=E_(Wi),ls=ft({app:Wi,analytics:rb,auth:sb}),ie=ft({loggedIn:!1,name:"Not logged in.",uid:"guest",email:"",profilePic:"",menu:[]});um(ls.auth,t=>{t?(ie.loggedIn=!0,ie.name=t.displayName,ie.uid=t.uid,ie.email=t.email,ie.profilePic=t.photoURL,ie.menu=[{label:"Profile",url:"/#/profile"},{label:"Settings",url:"/#/settings"},{label:"Logout",url:"/#/logout"}]):(ie.loggedIn=!1,ie.menu=[{label:"Login",url:"/#/login"},{label:"Register",url:"/#/register"}])});function ib(t,e){im(ls.auth,t,e).then(n=>{window.location.href="/"}).catch(n=>{})}function iu(){const t=new st;Om(ls.auth,t).then(e=>{window.location.href="/"}).catch(e=>{error.show=!0,error.title=`Error ${e.code}`,error.message.firebase=e.message})}function ob(t,e,n,r){sm(ie,t,e).then(s=>{am(s.user,{displayName:`${n} ${r}`}).then(()=>{window.location.href="/"})})}function ab(){dm(ls.auth)}const pt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},ar=t=>(rc("data-v-4296da81"),t=t(),sc(),t),cb={class:"navbar shadow-lg"},lb=Qt('<div class="flex-1" data-v-4296da81><a title="Blazed One" href="/" class="btn btn-ghost group normal-case text-xl" data-v-4296da81><img class="group-hover:opacity-75" src="https://blazed.sirv.com/logo/BLZ-blue.png?w=45&amp;h=45" data-v-4296da81></a></div><div class="hidden md:flex navbar-end" data-v-4296da81><ul class="menu menu-horizontal px-1" data-v-4296da81><li data-v-4296da81><a href="/" data-v-4296da81> Home </a></li><li tabindex="0" class="dropdown" data-v-4296da81><a target="_blank" href="https://blazed.city/docs/" data-v-4296da81> Docs <i data-v-4296da81><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="currentColor" class="w-3 h-3" data-v-4296da81><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" data-v-4296da81></path></svg></i></a></li></ul></div>',2),ub={class:"hidden md:flex dropdown dropdown-end"},db={tabindex:"0",class:"btn btn-ghost btn-circle avatar mr-3"},fb={key:0,title:"Not logged in.",class:"w-10 rounded-full"},hb=ar(()=>b("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 640 512",fill:"currentColor",class:"w-8 h-8 m-1"},[b("path",{d:"M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM471 143c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"})],-1)),pb=[hb],gb={key:1},mb=["src"],_b={tabindex:"0",class:"p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52 flex mt-36"},vb={class:"select-none btn-disabled bg-transparent"},bb={class:"text-gray-400"},yb=["href"],wb=ar(()=>b("div",{class:"flex md:hidden navbar-end drawer-content"},[b("label",{for:"mobile-menu-drawer",class:"btn btn-circle btn-outline drawer-button"},[b("svg",{id:"burger-menu",xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 448 512",fill:"currentColor",class:"inline-flex w-5 h-5"},[b("path",{d:"M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"})])])],-1)),Ib={class:"block md:hidden drawer"},Eb=ar(()=>b("input",{id:"mobile-menu-drawer",type:"checkbox",class:"drawer-toggle"},null,-1)),Tb={class:"drawer-side"},Cb=ar(()=>b("label",{for:"mobile-menu-drawer",class:"drawer-overlay"},null,-1)),Rb={class:"menu p-4 w-80 h-full bg-base-200 text-base-content"},Sb=ar(()=>b("i",{class:"inline-flex"},[b("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",class:"group-focus:text-white",fill:"conentColor",viewBox:"0 0 384 512"},[b("path",{d:"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"})])],-1)),Ab=Qt('<li class="btn-disabled pt-5 bg-transparent" data-v-4296da81><hr data-v-4296da81></li><li data-v-4296da81><a href="/" data-v-4296da81> Home </a></li><li data-v-4296da81><a target="_blank" href="https://blazed.city/docs/" data-v-4296da81> Docs <i data-v-4296da81><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="currentColor" class="w-3 h-3" data-v-4296da81><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" data-v-4296da81></path></svg></i></a></li><li class="btn-disabled pt-5 bg-transparent" data-v-4296da81><hr data-v-4296da81></li>',4),kb={class:"btn-disabled bg-transparent"},Pb={class:"text-gray-500"},xb=["href"],Ob={__name:"BlzHeader",setup(t){function e(){const n=document.querySelector("#mobile-menu-drawer");n.checked===!0?n.checked=!1:n.checked=!0}return(n,r)=>(J(),Z(fe,null,[b("header",null,[b("nav",cb,[lb,b("div",ub,[b("label",db,[ne(ie).loggedIn===!1?(J(),Z("div",fb,pb)):Ot("",!0),ne(ie).loggedIn===!0?(J(),Z("div",gb,[b("img",{class:"rounded-full avatar",referrerpolicy:"no-referrer",src:ne(ie).profilePic},null,8,mb)])):Ot("",!0)]),b("ul",_b,[b("li",vb,[b("b",bb,Le(ne(ie).name),1)]),(J(!0),Z(fe,null,kr(ne(ie).menu,s=>(J(),Z("li",null,[b("a",{href:s.url,class:"cursor-pointer justify-between"},Le(s.label),9,yb)]))),256))])]),wb])]),b("div",Ib,[Eb,b("div",Tb,[Cb,b("ul",Rb,[b("li",null,[b("a",{onClick:e,class:"cursor-pointer text-gray-800 group"},[Sb,lt(" Close Menu ")])]),Ab,b("li",kb,[b("p",Pb,Le(ne(ie).name),1)]),(J(!0),Z(fe,null,kr(ne(ie).menu,s=>(J(),Z("li",null,[b("a",{href:s.url},Le(s.label),9,xb)]))),256))])])])],64))}},Nb=pt(Ob,[["__scopeId","data-v-4296da81"]]);const Mb={class:"footer footer-center p-10 bg-base-200 text-base-content rounded select-none"},Db=Qt('<div class="grid grid-flow-col gap-4" data-v-0d51b757><a href="/" class="link link-hover" data-v-0d51b757> Home </a><a href="https://blazed.city/" class="link link-hover" data-v-0d51b757> City </a><a href="https://blazed.city/docs" class="link link-hover" data-v-0d51b757> Docs </a><a href="https://blazed.city/government/intro" class="link link-hover" data-v-0d51b757> Government </a></div><div data-v-0d51b757><div class="grid grid-flow-col gap-4" data-v-0d51b757><a href="https://twitter.com/BlazedLabs" target="_blank" class="twitter" data-v-0d51b757><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current" data-v-0d51b757><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" data-v-0d51b757></path></svg></a><a href="https://www.youtube.com/channel/UCUl9Q2Nq-bvju0wm3b-bohA" target="_blank" class="youtube" data-v-0d51b757><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current" data-v-0d51b757><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" data-v-0d51b757></path></svg></a><a href="https://www.facebook.com/blazedlabs" target="_blank" class="facebook" data-v-0d51b757><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current" data-v-0d51b757><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" data-v-0d51b757></path></svg></a></div></div>',2),Lb={class:"text-gray-600"},$b=["datetime"],Ub={__name:"BlzFooter",setup(t){const e=new Date().getFullYear();return(n,r)=>(J(),Z("footer",Mb,[Db,b("div",null,[b("p",Lb,[lt(" Copyright © "),b("time",{datetime:ne(e)},Le(ne(e)),9,$b),lt(" Blazed Labs LLC, Ruff Management Inc. All rights reserved. ")])])]))}},Bb=pt(Ub,[["__scopeId","data-v-0d51b757"]]);const Fb={class:"md:p-10 bg-gray-50"},Hb={__name:"App",setup(t){return(e,n)=>{const r=Zr("router-view");return J(),Z(fe,null,[re(Nb),b("main",Fb,[re(r)]),re(Bb)],64)}}},jb=pt(Hb,[["__scopeId","data-v-053d2761"]]),zb={},Vb={class:"grid grid-cols-3"},Wb=Qt('<div class="card w-96 bg-base-100 shadow-xl"><div class="card-body"><h2 class="card-title">Card title!</h2><p>If a dog chews shoes whose shoes does he choose?</p><div class="card-actions justify-end"><button class="btn btn-primary">Buy Now</button></div></div></div>',1),Kb=[Wb];function qb(t,e){return J(),Z("div",Vb,Kb)}const Gb=pt(zb,[["render",qb]]);const Jb={class:"hero"},Yb={class:"text-3xl text-blue-700 sm:text-5xl"},Xb={class:"mt-4 sm:text-xl/relaxed px-10 md:px-20"},Qb={class:"action-buttons mt-8 flex flex-wrap justify-center gap-4 px-10 md:px-0"},Zb={__name:"Hero",props:["title","description","links"],setup(t){return(e,n)=>(J(),Z("article",Jb,[b("h1",Yb,Le(t.title),1),b("p",Xb,Le(t.description),1),b("div",Qb,[Ad(e.$slots,"default",{},void 0,!0)])]))}},ey=pt(Zb,[["__scopeId","data-v-1ab38283"]]),ty={key:0},ny={key:1,class:"mx-auto max-w-xl text-center px-10 pt-5 pb-5"},ry=b("a",{class:"cursor-pointer btn btn-primary block w-full rounded bg-blue-600 hover:text-blue-700 hover:bg-blue-200 px-12 py-3 text-sm font-medium text-white shadow focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"}," Sign Up ",-1),sy=b("a",{class:"cursor-pointer btn btn-primary text-white block w-full rounded px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 hover:bg-blue-200 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"}," Login ",-1),iy={__name:"Home",setup(t){return(e,n)=>{const r=Zr("router-link");return J(),Z(fe,null,[ne(ie).loggedIn==!0?(J(),Z("div",ty,[re(Gb)])):Ot("",!0),ne(ie).loggedIn==!1?(J(),Z("div",ny,[re(ey,{title:"Join the Nation.",description:"Build a virtual empire with Blazed City. Claim your virtual paradise, today."},{default:pn(()=>[re(r,{to:"/register"},{default:pn(()=>[ry]),_:1}),re(r,{to:"/login"},{default:pn(()=>[sy]),_:1})]),_:1})])):Ot("",!0)],64)}}};const xe=t=>(rc("data-v-970e6496"),t=t(),sc(),t),oy={class:"mx-auto max-w-screen-xl px-5 py-16 sm:px-6 lg:px-8 select-none"},ay={class:"mx-auto max-w-lg"},cy=xe(()=>b("h1",{class:"text-center text-2xl font-bold text-gray-600 sm:text-3xl"}," Login to Blazed ",-1)),ly={class:"text-center pt-5 selection-none"},uy=xe(()=>b("a",{class:"cursor-pointer hover:underline"}," ← Return to Home ",-1)),dy=["onSubmit"],fy=xe(()=>b("p",{class:"text-center text-lg text-gray-500 font-medium pb-5"}," Sign In ",-1)),hy={key:0},py={class:"alert alert-error select-none"},gy={id:"error-output"},my={class:"font-bold text-lg"},_y=xe(()=>b("svg",{xmlns:"http://www.w3.org/2000/svg",class:"stroke-current shrink-0 h-6 w-6 inline-flex",fill:"none",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})],-1)),vy={class:"block"},by={key:0},yy=xe(()=>b("label",{for:"field-email",class:"sr-only"},"Email",-1)),wy={class:"relative"},Iy=xe(()=>b("span",{class:"absolute inset-y-0 end-0 grid place-content-center px-4"},[b("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"})])],-1)),Ey=xe(()=>b("label",{for:"field-password",class:"sr-only"},"Password",-1)),Ty={class:"relative"},Cy=xe(()=>b("span",{class:"absolute inset-y-0 end-0 grid place-content-center px-4"},[b("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})])],-1)),Ry=xe(()=>b("button",{type:"submit",class:"block login w-full btn px-5 py-3 text-sm font-medium text-white"}," Sign in ",-1)),Sy=xe(()=>b("div",{class:"divider pt-5 pb-5"},"OR",-1)),Ay=["onClick"],ky=xe(()=>b("i",{class:"inline-flex"},[b("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 488 512",class:"w-5 h-5 mr-2",fill:"currentColor"},[b("path",{d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"})])],-1)),Py=xe(()=>b("p",{class:"block ext-center text-sm text-gray-800 selection-none pt-5"},[lt(" No account? "),b("a",{class:"hover:underline",href:"/#/register"}," Sign up ")],-1)),xy={__name:"Login",setup(t){let e="",n="";const r=ft({show:!1,title:"",message:{email:!1,password:!1,firebase:!1}});function s(){e.length===0||n.length===0?(r.show=!0,r.title="Error!",e.length===0?r.message.email="Please fill out Email.":r.message.email=!1,n.length===0?r.message.password="Please fill out Password.":r.message.password=!1):(r.message={email:!1,password:!1,firebase:!1},ib(e,n))}function i(){iu()}return(o,a)=>{const c=Zr("router-link");return J(),Z("div",oy,[b("div",ay,[cy,b("p",ly,[re(c,{to:"/"},{default:pn(()=>[uy]),_:1})]),b("form",{action:"#",onSubmit:Nr(s,["prevent"]),class:"login-box mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"},[fy,r.show==!0?(J(),Z("div",hy,[b("div",py,[b("span",gy,[b("h3",my,[_y,lt(" "+Le(r.title),1)]),b("ul",vy,[(J(!0),Z(fe,null,kr(r.message,l=>(J(),Z("li",null,[l!==!1?(J(),Z("span",by," • "+Le(l),1)):Ot("",!0)]))),256))])])])])):Ot("",!0),b("div",null,[yy,b("div",wy,[Ut(b("input",{type:"email","onUpdate:modelValue":a[0]||(a[0]=l=>oe(e)?e.value=l:e=l),id:"field-email",class:qe(["w-full rounded-lg input-bordered p-4 pe-12 text-sm shadow-sm",{"input-error":r.message.email}]),placeholder:"Enter email"},null,2),[[Ft,ne(e)]]),Iy])]),b("div",null,[Ey,b("div",Ty,[Ut(b("input",{type:"password","onUpdate:modelValue":a[1]||(a[1]=l=>oe(n)?n.value=l:n=l),id:"field-password",class:qe(["w-full rounded-lg input-bordered p-4 pe-12 text-sm shadow-sm",{"input-error":r.message.password}]),placeholder:"Enter Password"},null,2),[[Ft,ne(n)]]),Cy])]),Ry,Sy,b("button",{class:"flex w-full btn g-login",onClick:Nr(i,["prevent"])},[ky,lt(" Login with Google ")],8,Ay)],40,dy),Py])])}}},Oy=pt(xy,[["__scopeId","data-v-970e6496"]]),Ny={class:"lg:grid lg:min-h-screen lg:grid-cols-12 select-none"},My=b("aside",{class:"relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6"},[b("img",{alt:"Pattern",src:"https://blazed.sirv.com/logo/CityNight-Beaker.png?w=1300&h=1300",class:"absolute inset-0 h-full w-full object-cover"})],-1),Dy={"aria-label":"Main",class:"flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"},Ly={class:"max-w-xl lg:max-w-3xl"},$y=b("a",{title:"Blazed One",class:"cursor-pointer inline-block text-blue-600 hover:opacity-75",href:"/"},[b("span",{class:"sr-only"},"Home"),b("img",{src:"https://blazed.sirv.com/logo/BLZ-blue.png?w=64&h=64"})],-1),Uy=b("h1",{class:"mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"}," Join Blazed ",-1),By=b("p",{class:"mt-4 leading-relaxed text-gray-500"}," Join the Blazed Nation today by becoming a citizen, its completely free! ",-1),Fy={key:0,id:"error-box"},Hy={class:"alert alert-error select-none"},jy={id:"error-output"},zy={class:"font-bold text-lg"},Vy=b("svg",{xmlns:"http://www.w3.org/2000/svg",class:"stroke-current shrink-0 h-6 w-6 inline-flex",fill:"none",viewBox:"0 0 24 24"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),Wy={class:"block"},Ky={key:0},qy=["onSubmit"],Gy={class:"col-span-6 sm:col-span-3"},Jy=b("label",{for:"field-firstname",class:"block text-sm font-medium text-gray-700"}," First Name ",-1),Yy={class:"col-span-6 sm:col-span-3"},Xy=b("label",{for:"field-lastname",class:"block text-sm font-medium text-gray-700"}," Last Name ",-1),Qy={class:"col-span-6"},Zy=b("label",{for:"field-email",class:"block text-sm font-medium text-gray-700"}," Email ",-1),ew={class:"col-span-6 sm:col-span-3"},tw=b("label",{for:"field-password",class:"block text-sm font-medium text-gray-700"}," Password ",-1),nw={class:"col-span-6 sm:col-span-3"},rw=b("label",{for:"field-password-repeat",class:"block text-sm font-medium text-gray-700"}," Password Confirmation ",-1),sw=Qt('<div class="col-span-6"><p class="text-sm text-gray-500"> By creating an account, you agree to our <a href="https://blazedlabs.com/tos" target="_blank" class="text-gray-700 underline"> Terms and Conditions </a> and <a href="https://blazedlabs.com/privacy" target="_blank" class="text-gray-700 underline"> Privacy Policy </a>. </p></div><div class="col-span-6 sm:flex sm:items-center sm:gap-4"><button class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"> Create an account </button><p class="mt-4 text-sm text-gray-500 sm:mt-0"> Already have an account? <a href="/#/login" class="text-gray-700 underline">Log in</a>. </p></div><div class="col-span-6 divider">OR</div>',3),iw={class:"col-span-6 sm:flex justify"},ow=["onClick"],aw=b("i",{class:"inline-flex"},[b("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 488 512",class:"w-5 h-5 mr-2",fill:"currentColor"},[b("path",{d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"})])],-1),cw={__name:"Register",setup(t){let e="",n="",r="",s="",i="";const o=ft({show:!1,title:"",message:{firstName:!1,lastName:!1,email:!1,password:!1,passwordRepeat:!1,firebase:!1}});function a(){r.length===0||s.length===0||e.length===0||n.length===0||i.length===0?(o.show=!0,o.title="Error, please correct the errors below",r.length===0?o.message.email="Please enter an email.":o.message.email=!1,s.length===0?o.message.password="Please enter a password.":o.message.password=!1,i.length===0?o.message.passwordRepeat="Please enter a password (again).":o.message.passwordRepeat=!1,e.length===0?o.message.firstName="Please enter your first name.":o.message.firstName=!1,n.length===0?o.message.lastName="Please enter your last name.":o.message.lastName=!1):(o.show=!1,o.title="",o.message={firstName:!1,lastName:!1,email:!1,password:!1,passwordRepeat:!1,firebase:!1},ob(r,s,e,n))}function c(){iu()}return(l,u)=>{const p=Zr("router-link");return J(),Z("div",Ny,[My,b("main",Dy,[b("div",Ly,[re(p,{to:"/"},{default:pn(()=>[$y]),_:1}),Uy,By,o.show===!0?(J(),Z("div",Fy,[b("div",Hy,[b("span",jy,[b("h3",zy,[Vy,lt(" "+Le(o.title),1)]),b("ul",Wy,[(J(!0),Z(fe,null,kr(o.message,h=>(J(),Z("li",null,[h!==!1?(J(),Z("span",Ky," • "+Le(h),1)):Ot("",!0)]))),256))])])])])):Ot("",!0),b("form",{onSubmit:Nr(a,["prevent"]),action:"#",id:"signup-form",class:"select-none mt-8 grid grid-cols-6 gap-6"},[b("div",Gy,[Jy,Ut(b("input",{type:"text","onUpdate:modelValue":u[0]||(u[0]=h=>oe(e)?e.value=h:e=h),placeholder:"John",class:qe(["input input-bordered w-full max-w-xs",{"input-error":o.message.firstName}])},null,2),[[Ft,ne(e)]])]),b("div",Yy,[Xy,Ut(b("input",{type:"text","onUpdate:modelValue":u[1]||(u[1]=h=>oe(n)?n.value=h:n=h),placeholder:"Smith",class:qe(["input input-bordered w-full max-w-xs",{"input-error":o.message.lastName}])},null,2),[[Ft,ne(n)]])]),b("div",Qy,[Zy,Ut(b("input",{type:"email","onUpdate:modelValue":u[2]||(u[2]=h=>oe(r)?r.value=h:r=h),placeholder:"name@example.com",class:qe(["input input-bordered w-full",{"input-error":o.message.email}])},null,2),[[Ft,ne(r)]])]),b("div",ew,[tw,Ut(b("input",{type:"password","onUpdate:modelValue":u[3]||(u[3]=h=>oe(s)?s.value=h:s=h),class:qe(["input input-bordered w-full",{"input-error":o.message.password}])},null,2),[[Ft,ne(s)]])]),b("div",nw,[rw,Ut(b("input",{type:"password","onUpdate:modelValue":u[4]||(u[4]=h=>oe(i)?i.value=h:i=h),class:qe(["input input-bordered w-full",{"input-error":o.message.passwordRepeat}])},null,2),[[Ft,ne(i)]])]),sw,b("div",iw,[b("button",{class:"flex w-full btn",onClick:Nr(c,["prevent"])},[aw,lt(" Signup with Google ")],8,ow)])],40,qy)])])])}}},lw={},uw={class:"grid h-screen px-4 place-content-center"},dw=Qt('<div class="text-center"><h1 class="font-black text-gray-200 text-9xl"> 404 </h1><p class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl"> Uh-oh! </p><p class="mt-4 text-gray-500"> We can&#39;t find that page. </p><a href="/" class="btn inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"> Go Back Home </a></div>',1),fw=[dw];function hw(t,e){return J(),Z("div",uw,fw)}const pw=pt(lw,[["render",hw]]),gw={},mw={class:"prose box box-border p-10"},_w=Qt('<h1 class="text-gray-700"> Dashboard </h1><div class="container"><h3> Bank Accounts </h3><div class="overflow-x-auto"><table class="table"><thead><th> Bank Name </th><th> Account Type </th><th> Balance </th></thead><tr><td> Woodrow Financial </td><td> Checking </td><td> B$85,000 </td></tr><tr><td> Woodrow Financial </td><td> Credit Line </td><td> -B$2,000 </td></tr></table></div></div><a href="/dashboard?x=finance" class="btn btn-primary"> View Financial Panel </a><hr><div class="container"><h3> Companies </h3><div><ul><li><a href=""> Woodrow Financial </a></li></ul></div></div><hr><div class="container"><h3> Spaces </h3><div><div class="overflow-x-auto"><table class="table"><thead><tr><th></th><th>Name</th><th>Job</th><th>Favorite Color</th></tr></thead><tbody><tr><th>1</th><td>Cy Ganderton</td><td>Quality Control Specialist</td><td>Blue</td></tr><tr><th>2</th><td>Hart Hagerty</td><td>Desktop Support Technician</td><td>Purple</td></tr><tr><th>3</th><td>Brice Swyre</td><td>Tax Accountant</td><td>Red</td></tr></tbody></table></div></div></div>',7),vw=[_w];function bw(t,e){return J(),Z("article",mw,vw)}const yw=pt(gw,[["render",bw]]),ww={};function Iw(t,e){return J(),Z("p",null," settings ")}const Ew=pt(ww,[["render",Iw]]),Tw=[{path:"/",name:"home",component:iy},{path:"/login",name:"login",component:Oy,beforeEnter:(t,e)=>{if(ie.loggedIn===!0)return!1}},{path:"/register",name:"register",component:cw,beforeEnter:(t,e)=>{if(ie.loggedIn===!0)return!1}},{path:"/profile",name:"profile",component:yw,beforeEnter:(t,e)=>{if(ie.loggedIn===!1)return!1}},{path:"/settings",name:"settings",component:Ew,beforeEnter:(t,e)=>{if(ie.loggedIn===!1)return!1}},{path:"/logout",name:"logout",beforeEnter:(t,e)=>{if(ie.loggedIn===!1)return!1;ab(),window.location.href="/"}},{path:"/:pathMatch(.*)*",name:"NotFound",component:pw}],Ki=Mh({history:Yf(),routes:Tw});Ki.beforeEach((t,e)=>{var n;Bc.show(),(n=document.activeElement)==null||n.blur()});Ki.afterEach((t,e,n)=>{Bc.hide();const r=document.querySelector("#mobile-menu-drawer");r.checked===!0&&(r.checked=!1)});const ou=Pf(jb);ou.use(Ki);ou.mount("#app");Bh();
