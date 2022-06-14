var J=Object.defineProperty,K=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var $=(e,t,a)=>t in e?J(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))R.call(t,a)&&$(e,a,t[a]);if(b)for(var a of b(t))T.call(t,a)&&$(e,a,t[a]);return e},f=(e,t)=>K(e,Q(t));var M=(e,t)=>{var a={};for(var o in e)R.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&b)for(var o of b(e))t.indexOf(o)<0&&T.call(e,o)&&(a[o]=e[o]);return a};import{r as X,b as c,j as n,P as w,s as A,R as Y,c as Z,i as ee,k as z,l as E,n as te,h as B,d as D,o as ne,g as U,q as ae,t as oe,v as _,w as le,u as se,C as re,x as ce,B as ie,y as de,z as ue}from"./index.834378fe.js";import{r as pe}from"./logs.b5996bd9.js";import{S as x}from"./Select.04c21c9b.js";function he(e,t){if(e==null)return{};var a=ge(e,t),o,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],!(t.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,o)||(a[o]=e[o]))}return a}function ge(e,t){if(e==null)return{};var a={},o=Object.keys(e),r,s;for(s=0;s<o.length;s++)r=o[s],!(t.indexOf(r)>=0)&&(a[r]=e[r]);return a}var I=X.exports.forwardRef(function(e,t){var a=e.color,o=a===void 0?"currentColor":a,r=e.size,s=r===void 0?24:r,u=he(e,["color","size"]);return c("svg",f(p({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),{children:[n("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),n("polyline",{points:"16 17 21 12 16 7"}),n("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}))});I.propTypes={color:w.string,size:w.oneOfType([w.string,w.number])};I.displayName="LogOut";var fe=I;const{useState:me,useRef:ve,useEffect:ye,useCallback:Ce}=Y;function be(e){return n("input",p({className:A.input},e))}function we(a){var o=a,{value:e}=o,t=M(o,["value"]);const[r,s]=me(e),u=ve(e);ye(()=>{u.current!==e&&s(e),u.current=e},[e]);const g=Ce(k=>s(k.target.value),[s]);return n("input",p({className:A.input,value:r,onChange:g},t))}const ke="_root_1tdl3_1",Se="_section_1tdl3_2",_e="_wrapSwitch_1tdl3_26",xe="_sep_1tdl3_32",Oe="_label_1tdl3_45";var d={root:ke,section:Se,wrapSwitch:_e,sep:xe,label:Oe};const Ie="_fieldset_1ghjp_1",Ne="_input_1ghjp_9",Pe="_cnt_1ghjp_9";var O={fieldset:Ie,input:Ne,cnt:Pe};function Le({OptionComponent:e,optionPropsList:t,selectedIndex:a,onChange:o}){const r=Z("visually-hidden",O.input),s=u=>{o(u.target.value)};return n("fieldset",{className:O.fieldset,children:t.map((u,g)=>c("label",{children:[n("input",{type:"radio",checked:a===g,name:"selection",value:g,"aria-labelledby":"traffic chart type "+g,onChange:s,className:r}),n("div",{className:O.cnt,children:n(e,p({},u))})]},g))})}const{useMemo:je}=B,$e={plugins:{legend:{display:!1}},scales:{x:{display:!1,type:"category"},y:{display:!1,type:"linear"}}},V=[23e3,35e3,46e3,33e3,9e4,68e3,23e3,45e3],Re=[184e3,183e3,196e3,182e3,19e4,186e3,182e3,189e3],Te=V;function Me({id:e}){const t=ee.read(),a=je(()=>({labels:Te,datasets:[f(p(p({},z),E[e].up),{data:V}),f(p(p({},z),E[e].down),{data:Re})]}),[e]),o="chart-"+e;return te(t.Chart,o,a,null,$e),n("div",{style:{width:100,padding:5},children:n("canvas",{id:o})})}const{useEffect:W,useState:ze,useCallback:m,useRef:Ee,useMemo:Ae}=B,Be=[{id:0},{id:1},{id:2},{id:3}],De=[["debug","Debug"],["info","Info"],["warning","Warning"],["error","Error"],["silent","Silent"]],Ue=[{key:"port",label:"HTTP Proxy Port"},{key:"socks-port",label:"SOCKS5 Proxy Port"},{key:"mixed-port",label:"Mixed Port"},{key:"redir-port",label:"Redir Port"}],Ve=[["zh","\u4E2D\u6587"],["en","English"]],We=[["Global","Global"],["Rule","Rule"],["Direct","Direct"]],He=e=>({configs:ne(e),apiConfig:U(e)}),Ge=e=>({selectedChartStyleIndex:de(e),latencyTestUrl:ue(e),apiConfig:U(e)}),qe=D(Ge)(Je);var Ze=D(He)(Fe);function Fe({dispatch:e,configs:t,apiConfig:a}){return W(()=>{e(ae(a))},[e,a]),n(qe,{configs:t})}function Je({dispatch:e,configs:t,selectedChartStyleIndex:a,latencyTestUrl:o,apiConfig:r}){const[s,u]=ze(t),g=Ee(t);W(()=>{g.current!==t&&u(t),g.current=t},[t]);const k=m(()=>{e(oe("apiConfig"))},[e]),v=m((l,i)=>{u(f(p({},s),{[l]:i}))},[s]),H=m(l=>{const i="allow-lan",h=l;v(i,h),e(_(r,{"allow-lan":h}))},[r,e,v]),y=m(({name:l,value:i})=>{switch(l){case"mode":case"log-level":v(l,i),e(_(r,{[l]:i})),l==="log-level"&&pe(f(p({},r),{logLevel:i}));break;case"redir-port":case"socks-port":case"mixed-port":case"port":if(i!==""){const h=parseInt(i,10);if(h<0||h>65535)return}v(l,i);break;default:return}},[r,e,v]),G=m(l=>y(l.target),[y]),{selectChartStyleIndex:q,updateAppConfig:N}=le(),P=m(l=>{const i=l.target,{name:h,value:j}=i;switch(h){case"port":case"socks-port":case"mixed-port":case"redir-port":{const S=parseInt(j,10);if(S<0||S>65535)return;e(_(r,{[h]:S}));break}case"latencyTestUrl":{N(h,j);break}default:throw new Error(`unknown input name ${h}`)}},[r,e,N]),F=Ae(()=>{const l=s.mode;return typeof l=="string"&&l[0].toUpperCase()+l.slice(1)},[s.mode]),{t:C,i18n:L}=se();return c("div",{children:[n(re,{title:C("Config")}),c("div",{className:d.root,children:[Ue.map(l=>s[l.key]!==void 0?c("div",{children:[n("div",{className:d.label,children:l.label}),n(be,{name:l.key,value:s[l.key],onChange:G,onBlur:P})]},l.key):null),c("div",{children:[n("div",{className:d.label,children:"Mode"}),n(x,{options:We,selected:F,onChange:l=>y({name:"mode",value:l.target.value})})]}),c("div",{children:[n("div",{className:d.label,children:"Log Level"}),n(x,{options:De,selected:s["log-level"],onChange:l=>y({name:"log-level",value:l.target.value})})]}),c("div",{children:[n("div",{className:d.label,children:"Allow LAN"}),n("div",{className:d.wrapSwitch,children:n(ce,{name:"allow-lan",checked:s["allow-lan"],onChange:H})})]})]}),n("div",{className:d.sep,children:n("div",{})}),c("div",{className:d.section,children:[c("div",{children:[n("div",{className:d.label,children:C("latency_test_url")}),n(we,{name:"latencyTestUrl",type:"text",value:o,onBlur:P})]}),c("div",{children:[n("div",{className:d.label,children:C("lang")}),n("div",{children:n(x,{options:Ve,selected:L.language,onChange:l=>L.changeLanguage(l.target.value)})})]}),c("div",{children:[n("div",{className:d.label,children:C("chart_style")}),n(Le,{OptionComponent:Me,optionPropsList:Be,selectedIndex:a,onChange:q})]}),c("div",{children:[n("div",{className:d.label,children:"Action"}),n(ie,{start:n(fe,{size:16}),label:"Switch backend",onClick:k})]})]})]})}export{Ze as default};
