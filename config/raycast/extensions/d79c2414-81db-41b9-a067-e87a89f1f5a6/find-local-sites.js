"use strict";var Oe=Object.create;var D=Object.defineProperty;var ke=Object.getOwnPropertyDescriptor;var _e=Object.getOwnPropertyNames;var Ae=Object.getPrototypeOf,Te=Object.prototype.hasOwnProperty;var I=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),De=(t,e)=>{for(var r in e)D(t,r,{get:e[r],enumerable:!0})},N=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of _e(e))!Te.call(t,i)&&i!==r&&D(t,i,{get:()=>e[i],enumerable:!(n=ke(e,i))||n.enumerable});return t};var z=(t,e,r)=>(r=t!=null?Oe(Ae(t)):{},N(e||!t||!t.__esModule?D(r,"default",{value:t,enumerable:!0}):r,t)),Ie=t=>N(D({},"__esModule",{value:!0}),t);var Z=I(w=>{w.parse=w.decode=Ee;w.stringify=w.encode=Q;w.safe=S;w.unsafe=$;var B=typeof process<"u"&&process.platform==="win32"?`\r
`:`
`;function Q(t,e){var r=[],n="";typeof e=="string"?e={section:e,whitespace:!1}:(e=e||{},e.whitespace=e.whitespace===!0);var i=e.whitespace?" = ":"=";return Object.keys(t).forEach(function(o,s,f){var l=t[o];l&&Array.isArray(l)?l.forEach(function(c){n+=S(o+"[]")+i+S(c)+`
`}):l&&typeof l=="object"?r.push(o):n+=S(o)+i+S(l)+B}),e.section&&n.length&&(n="["+S(e.section)+"]"+B+n),r.forEach(function(o,s,f){var l=W(o).join("\\."),c=(e.section?e.section+".":"")+l,a=Q(t[o],{section:c,whitespace:e.whitespace});n.length&&a.length&&(n+=B),n+=a}),n}function W(t){return t.replace(/\1/g,"LITERAL\\1LITERAL").replace(/\\\./g,"").split(/\./).map(function(e){return e.replace(/\1/g,"\\.").replace(/\2LITERAL\\1LITERAL\2/g,"")})}function Ee(t){var e={},r=e,n=null,i=/^\[([^\]]*)\]$|^([^=]+)(=(.*))?$/i,o=t.split(/[\r\n]+/g);return o.forEach(function(s,f,l){if(!(!s||s.match(/^\s*[;#]/))){var c=s.match(i);if(!!c){if(c[1]!==void 0){if(n=$(c[1]),n==="__proto__"){r={};return}r=e[n]=e[n]||{};return}var a=$(c[2]);if(a!=="__proto__"){var p=c[3]?$(c[4]):!0;switch(p){case"true":case"false":case"null":p=JSON.parse(p)}if(a.length>2&&a.slice(-2)==="[]"){if(a=a.substring(0,a.length-2),a==="__proto__")return;r[a]?Array.isArray(r[a])||(r[a]=[r[a]]):r[a]=[]}Array.isArray(r[a])?r[a].push(p):r[a]=p}}}}),Object.keys(e).filter(function(s,f,l){if(!e[s]||typeof e[s]!="object"||Array.isArray(e[s]))return!1;var c=W(s),a=e,p=c.pop(),y=p.replace(/\\\./g,".");return c.forEach(function(C,v,T){C!=="__proto__"&&((!a[C]||typeof a[C]!="object")&&(a[C]={}),a=a[C])}),a===e&&y===p?!1:(a[y]=e[s],!0)}).forEach(function(s,f,l){delete e[s]}),e}function X(t){return t.charAt(0)==='"'&&t.slice(-1)==='"'||t.charAt(0)==="'"&&t.slice(-1)==="'"}function S(t){return typeof t!="string"||t.match(/[=\r\n]/)||t.match(/^\[/)||t.length>1&&X(t)||t!==t.trim()?JSON.stringify(t):t.replace(/;/g,"\\;").replace(/#/g,"\\#")}function $(t,e){if(t=(t||"").trim(),X(t)){t.charAt(0)==="'"&&(t=t.substr(1,t.length-2));try{t=JSON.parse(t)}catch{}}else{for(var r=!1,n="",i=0,o=t.length;i<o;i++){var s=t.charAt(i);if(r)"\\;#".indexOf(s)!==-1?n+=s:n+="\\"+s,r=!1;else{if(";#".indexOf(s)!==-1)break;s==="\\"?r=!0:n+=s}}return r&&(n+="\\"),n.trim()}return t}});var ne=I((st,re)=>{"use strict";var ee=require("fs"),te=require("os"),G=require("path");re.exports=function(t,e){typeof t!="string"&&(e=t,t=null);let r=Object.assign({cwd:process.cwd(),type:t},e),n;if(r.type==="global"?n=G.join(te.homedir(),".gitconfig"):n=G.resolve(r.cwd,".git/config"),!ee.existsSync(n)){if(typeof r.type=="string")return null;n=G.join(te.homedir(),".config/git/config")}return ee.existsSync(n)?n:null}});var ce=I((at,le)=>{"use strict";var _=require("fs"),Le=require("os"),O=require("path"),ie=require("util"),$e=Z(),je=ne(),oe=t=>t?t.replace(/^~/,Le.homedir()):"",h=(t,e)=>(typeof t=="function"&&(e=t,t=null),typeof e!="function"?h.promise(t):h.promise(t).then(r=>e(null,r)).catch(e));h.promise=t=>{let e=h.resolveConfigPath(t),r=ie.promisify(_.readFile),n=ie.promisify(_.stat);return e?n(e).then(()=>r(e,"utf8")).then(i=>(t&&t.include===!0&&(i=ae(i,O.resolve(O.dirname(e)))),se(i,t))):Promise.resolve(null)};h.sync=t=>{let e=h.resolveConfigPath(t);if(e&&_.existsSync(e)){let r=_.readFileSync(e,"utf8");if(t&&t.include===!0){let n=O.resolve(O.dirname(e));r=ae(r,n)}return se(r,t)}return{}};h.resolveConfigPath=t=>{typeof t=="string"&&(t={type:t});let e=Object.assign({cwd:process.cwd()},t),r=e.path?oe(e.path):je(e.type);return r?O.resolve(e.cwd,r):null};h.resolve=t=>h.resolveConfigPath(t);h.expandKeys=t=>{for(let e of Object.keys(t)){let r=/(\S+) "(.*)"/.exec(e);if(!r)continue;let n=r[1];t[n]=t[n]||{},t[n][r[2]]=t[e],delete t[e]}return t};function se(t,e){let r=Object.assign({},e);t=t.replace(/\[(\S+) "(.*)"\]/g,(i,o,s)=>o&&s?`[${o} "${s.split(".").join("\\.")}"]`:i);let n=$e.parse(t);return r.expandKeys===!0?h.expandKeys(n):n}function ae(t,e){let r=t.split(`
`).filter(o=>o.trim()!==""),n=r.length,i=[];for(let o=0;o<n;o++){let s=r[o];if(s.indexOf("[include]")===0){let f=r[o+1].replace(/^\s*path\s*=\s*/,""),l=O.resolve(e,oe(f));i.push(_.readFileSync(l))}else i.push(s)}return i.join(`
`)}le.exports=h});var he=I((lt,de)=>{"use strict";var ue=require("url"),fe={};de.exports=function(e){return fe[e]||(fe[e]=Fe(e))};function Fe(t){if(typeof t!="string"||!t.length||t.indexOf("git@gist")!==-1||t.indexOf("//gist")!==-1)return null;var e=ue.parse(t);if(typeof e.path!="string"||!e.path.length||typeof e.pathname!="string"||!e.pathname.length)return null;!e.host&&/^git@/.test(t)===!0&&(e.host=ue.parse("http://"+t).host),e.path=pe(e.path),e.pathname=pe(e.pathname),e.filepath=null,e.path.indexOf("repos")===0&&(e.path=e.path.slice(6));var r=e.path.split("/").filter(Boolean),n=r[2]==="blob";n&&!Re(r[3])&&(e.branch=r[3],r.length>4&&(e.filepath=r.slice(4).join("/")));var i=t.indexOf("blob");i!==-1&&(e.blob=t.slice(i+5));var o=t.indexOf("tree");if(o!==-1){var s=o+5,f=t.slice(s),l=f.indexOf("/");l!==-1&&(f=f.slice(0,l)),e.branch=f}if(e.owner=Me(r[0]),e.name=Ge(r[1]),r.length>1&&e.owner&&e.name)e.repo=e.owner+"/"+e.name;else{var c=e.href.split(":");if(c.length===2&&e.href.indexOf("//")===-1){e.repo=e.repo||c[c.length-1];var a=e.repo.split("/");e.owner=a[0],e.name=a[1]}else{var p=e.href.match(/\/([^\/]*)$/);e.owner=p?p[1]:null,e.repo=null}if(e.repo&&(!e.owner||!e.name)){var y=e.repo.split("/");y.length===2&&(e.owner=y[0],e.name=y[1])}}return e.branch||(e.branch=r[2]||Be(e.path,e),r.length>3&&(e.filepath=r.slice(3).join("/"))),e.host=e.host||"github.com",e.owner=e.owner||null,e.name=e.name||null,e.repository=e.repo,e}function Re(t){return/^[a-f0-9]{40}$/i.test(t)}function Be(t,e){var r=t.split("#"),n;return r.length>1&&(n=r[r.length-1]),!n&&e.hash&&e.hash.charAt(0)==="#"&&(n=e.hash.slice(1)),n||"master"}function pe(t){return t.charAt(0)==="/"?t.slice(1):t}function Ge(t){return t?t.replace(/^\W+|\.git$/g,""):null}function Me(t){if(!t)return null;var e=t.indexOf(":");return e>-1?t.slice(e+1):t}});var We={};De(We,{default:()=>be});module.exports=Ie(We);var u=require("@raycast/api"),A=require("react");var k=require("@raycast/api");var x=require("@raycast/api");var E=require("@raycast/api");function K(t){return t[0].toUpperCase()+t.substr(1)}function U(t){return new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function L(){return(0,E.getPreferenceValues)()}function q(t){return t.split("_").map(e=>K(e)).join(" ")}function H(t){return t?{azure:{source:"vcs/azure.svg",tintColor:x.Color.Blue},"azure-devops":{source:"vcs/azure.svg",tintColor:x.Color.Blue},bitbucket:{source:"vcs/bitbucket.svg",tintColor:x.Color.Blue},github:{source:"vcs/github.svg",tintColor:x.Color.PrimaryText},github_enterprise:{source:"vcs/github.svg",tintColor:x.Color.PrimaryText},gitlab:{source:"vcs/gitlab.svg"},gitlab_self_hosted:{source:"vcs/gitlab.svg"},unknown:{source:"",tintColor:x.Color.PrimaryText}}[t]:void 0}var Y=require("react/jsx-runtime"),J=({url:t})=>(0,Y.jsx)(k.Action.OpenInBrowser,{icon:"netlify-icon.png",shortcut:{key:"n",modifiers:["cmd"]},title:"Open on Netlify",url:t}),V=({url:t})=>{let e=new URL(t).host,r,n;return/github/.test(e)?(r="github",n="Open on GitHub"):/gitlab/.test(e)?(r="gitlab",n="Open on GitLab"):/bitbucket/.test(e)?(r="bitbucket",n="Open on BitBucket"):/azure/.test(e)?(r="azure",n="Open on Azure DevOps"):n="Open Repository",(0,Y.jsx)(k.Action.OpenInBrowser,{icon:r?H(r):k.Icon.CodeBlock,shortcut:{key:"r",modifiers:["cmd"]},title:n,url:t})};var m=require("@raycast/api"),b=require("react"),j=require("os"),P=z(require("path")),g=z(require("fs")),me=require("util"),ye=require("child_process");var Ce=(0,me.promisify)(ye.exec),Ne=ce(),ze=he(),ge=P.default.join(m.environment.supportPath,"find-sites-on-disk.json"),Ke=4;async function Pe(){let t=P.default.join(m.environment.supportPath,"blank.js");try{g.default.accessSync(t,g.default.constants.R_OK)}catch{g.default.writeFileSync(t,"// used to determine default text editor")}try{return await(0,m.getDefaultApplication)(t)}catch{return null}}function xe(t){try{g.default.accessSync(t,g.default.constants.R_OK)}catch{return{}}let e=g.default.readFileSync(t).toString();return e.length>0?JSON.parse(e):{}}var F=class{constructor(){this.version=1;g.default.mkdirSync(m.environment.supportPath,{recursive:!0}),this.dirs=[];let e=xe(ge);e.version===this.version&&(this.dirs=e.dirs)}save(){let e=JSON.stringify(this,null,2)+`
`;g.default.writeFileSync(ge,e)}setDirs(e){this.dirs=e}clear(){this.dirs=[],this.save()}};function Ue(t){return t.length>0&&t[0]==="~"?P.default.join((0,j.homedir)(),t.slice(1)):t}function ve(t){let e=P.default.normalize(t)+P.default.sep;return(e.indexOf((0,j.homedir)())===0?e.replace((0,j.homedir)()+P.default.sep,`~${P.default.sep}`):e).slice(0,-1)}function qe(t){let e=[],r=Ne.sync({cwd:t,path:".git/config",expandKeys:!0});if(r.remote!=null)for(let n in r.remote){let{url:i}=r.remote[n],o=ze(i);o?.host&&o?.repo&&e.push({name:n,host:o?.host,url:`https://${o?.host}/${o?.repo}`})}return e}function He(t){let e=[],r=[];return t.split(":").map(i=>{if(i=i.trim(),i.length===0)return;let o=Ue(i.trim());try{g.default.accessSync(o,g.default.constants.R_OK),e.push(o)}catch{r.push(i)}}),[e,r]}async function Je(t,e){let r=e.map(n=>{let i=n.replace("/.netlify",""),o=i.split("/").pop()??"unknown",s=qe(i);return{name:o,fullPath:i,lastModified:0,remotes:s,siteId:""}});return await Promise.allSettled(r.map(async n=>{let i=await Ve(n.fullPath);n.lastModified=i,n.siteId=Ye(n.fullPath)})),r}async function Ve(t){let e=`stat -f %m ${t}`,{stdout:r,stderr:n}=await Ce(e);return n?(console.error(`error: ${n}`),0):Number(r)*1e3}function Ye(t){let{siteId:e}=xe(P.default.join(t,".netlify","state.json"));return e||""}async function Qe(t){let e=new F,r=[];return await Promise.allSettled(t.map(async n=>{let i=`find -L ${n} -maxdepth ${Ke} -name .netlify -type d`,{stdout:o,stderr:s}=await Ce(i);if(s)return(0,m.showToast)(m.Toast.Style.Failure,"Find Failed",s),console.error(`error: ${s}`),[];let f=o.split(`
`).filter(l=>l);r=await Je(n,f)})),r.sort((n,i)=>n.lastModified<i.lastModified?1:-1),e.setDirs(r),e.save(),r}function we(t){let[e,r]=(0,b.useState)(),[n,i]=(0,b.useState)(),[o,s]=(0,b.useState)(!0),[f,l]=(0,b.useState)(!1),c=new F,a=!1,p=c.dirs;function y(C,v){return C.filter(T=>T.name.toLocaleLowerCase().includes(v.toLowerCase()))}return(0,b.useEffect)(()=>{async function C(){if(!(a||f)){i(void 0);try{let v=L();if(!v.scanPath){i("Path to scan has not been defined in settings");return}let[T,M]=He(v.scanPath);M.length>0&&i(`Could not find ${M}`);let Se=await Qe(T);if(!a){let R=Se;t&&t?.length>0&&(R=y(R,t)),r({dirs:R}),l(!0)}}catch(v){a||i(v)}finally{a||s(!1)}}}return t&&t.length>0&&(p=y(p,t)),c.dirs.length>0&&r({dirs:p}),f||C(),()=>{a=!0}},[t]),{data:e,error:n,isLoading:o}}var d=require("react/jsx-runtime");function be(){let{scanPath:t}=L(),[e,r]=(0,A.useState)(),[n,i]=(0,A.useState)(null),{data:o,error:s,isLoading:f}=we(e);return(0,A.useEffect)(()=>{async function l(){let c=await Pe();i(c)}l()},[]),s&&(0,u.showToast)(u.Toast.Style.Failure,"",s),(0,d.jsxs)(u.List,{isLoading:f,onSearchTextChange:r,searchBarPlaceholder:"Filter local directories...",children:[o?.dirs?.length===0&&(0,d.jsx)(u.List.EmptyView,{title:`No Netlify directories found in ${t}`,description:"Run `netlify link` from a local repo to link a directory to a site."}),(0,d.jsx)(u.List.Section,{title:`${o?.dirs?.length||0} site${o?.dirs?.length===1?"":"s"} found in local directories`,children:o?.dirs?.map(l=>(0,d.jsx)(u.List.Item,{id:l.fullPath,title:l.name,icon:u.Icon.Folder,subtitle:ve(l.fullPath),accessories:[{text:U(l.lastModified),tooltip:"Last modified"}],actions:(0,d.jsxs)(u.ActionPanel,{children:[(0,d.jsxs)(u.ActionPanel.Section,{children:[n&&(0,d.jsx)(u.Action.Open,{application:n.bundleId,icon:{fileIcon:n.path},target:l.fullPath,title:`Open in ${q(n.name)}`}),(0,d.jsx)(u.Action.ShowInFinder,{path:l.fullPath,shortcut:{modifiers:["cmd"],key:"return"}})]}),(0,d.jsxs)(u.ActionPanel.Section,{children:[l.siteId&&(0,d.jsx)(J,{url:`https://app.netlify.com/site-redirect/${l.siteId}`}),l.remotes.map(c=>(0,d.jsx)(V,{url:c.url},c.url))]}),(0,d.jsx)(u.ActionPanel.Section,{children:(0,d.jsx)(u.Action.CopyToClipboard,{title:"Copy Path to Clipboard",content:l.fullPath,shortcut:{modifiers:["cmd"],key:"."}})})]})},l.fullPath))})]})}0&&(module.exports={});
/*!
 * git-config-path <https://github.com/jonschlinkert/git-config-path>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Licensed under the MIT License.
 */
/*!
 * parse-git-config <https://github.com/jonschlinkert/parse-git-config>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Released under the MIT License.
 */
/*!
 * parse-github-url <https://github.com/jonschlinkert/parse-github-url>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
