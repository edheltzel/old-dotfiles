"use strict";var En=Object.create;var M=Object.defineProperty;var Tn=Object.getOwnPropertyDescriptor;var In=Object.getOwnPropertyNames;var Cn=Object.getPrototypeOf,Pn=Object.prototype.hasOwnProperty;var c=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Gn=(e,t)=>{for(var r in t)M(e,r,{get:t[r],enumerable:!0})},Ge=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of In(t))!Pn.call(e,o)&&o!==r&&M(e,o,{get:()=>t[o],enumerable:!(n=Tn(t,o))||n.enumerable});return e};var Ae=(e,t,r)=>(r=e!=null?En(Cn(e)):{},Ge(t||!e||!e.__esModule?M(r,"default",{value:e,enumerable:!0}):r,e)),An=e=>Ge(M({},"__esModule",{value:!0}),e);var Be=c((Ao,Ne)=>{Ne.exports=qe;qe.sync=Rn;var Oe=require("fs");function On(e,t){var r=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!r||(r=r.split(";"),r.indexOf("")!==-1))return!0;for(var n=0;n<r.length;n++){var o=r[n].toLowerCase();if(o&&e.substr(-o.length).toLowerCase()===o)return!0}return!1}function Re(e,t,r){return!e.isSymbolicLink()&&!e.isFile()?!1:On(t,r)}function qe(e,t,r){Oe.stat(e,function(n,o){r(n,n?!1:Re(o,e,t))})}function Rn(e,t){return Re(Oe.statSync(e),e,t)}});var Fe=c((Oo,Le)=>{Le.exports=$e;$e.sync=qn;var _e=require("fs");function $e(e,t,r){_e.stat(e,function(n,o){r(n,n?!1:ke(o,t))})}function qn(e,t){return ke(_e.statSync(e),t)}function ke(e,t){return e.isFile()&&Nn(e,t)}function Nn(e,t){var r=e.mode,n=e.uid,o=e.gid,s=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),i=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),a=parseInt("100",8),u=parseInt("010",8),l=parseInt("001",8),f=a|u,h=r&l||r&u&&o===i||r&a&&n===s||r&f&&s===0;return h}});var Me=c((qo,je)=>{var Ro=require("fs"),D;process.platform==="win32"||global.TESTING_WINDOWS?D=Be():D=Fe();je.exports=re;re.sync=Bn;function re(e,t,r){if(typeof t=="function"&&(r=t,t={}),!r){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(n,o){re(e,t||{},function(s,i){s?o(s):n(i)})})}D(e,t||{},function(n,o){n&&(n.code==="EACCES"||t&&t.ignoreErrors)&&(n=null,o=!1),r(n,o)})}function Bn(e,t){try{return D.sync(e,t||{})}catch(r){if(t&&t.ignoreErrors||r.code==="EACCES")return!1;throw r}}});var ze=c((No,We)=>{var I=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",De=require("path"),_n=I?";":":",Ue=Me(),Xe=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),He=(e,t)=>{let r=t.colon||_n,n=e.match(/\//)||I&&e.match(/\\/)?[""]:[...I?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(r)],o=I?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",s=I?o.split(r):[""];return I&&e.indexOf(".")!==-1&&s[0]!==""&&s.unshift(""),{pathEnv:n,pathExt:s,pathExtExe:o}},Ke=(e,t,r)=>{typeof t=="function"&&(r=t,t={}),t||(t={});let{pathEnv:n,pathExt:o,pathExtExe:s}=He(e,t),i=[],a=l=>new Promise((f,h)=>{if(l===n.length)return t.all&&i.length?f(i):h(Xe(e));let m=n[l],y=/^".*"$/.test(m)?m.slice(1,-1):m,g=De.join(y,e),S=!y&&/^\.[\\\/]/.test(e)?e.slice(0,2)+g:g;f(u(S,l,0))}),u=(l,f,h)=>new Promise((m,y)=>{if(h===o.length)return m(a(f+1));let g=o[h];Ue(l+g,{pathExt:s},(S,T)=>{if(!S&&T)if(t.all)i.push(l+g);else return m(l+g);return m(u(l,f,h+1))})});return r?a(0).then(l=>r(null,l),r):a(0)},$n=(e,t)=>{t=t||{};let{pathEnv:r,pathExt:n,pathExtExe:o}=He(e,t),s=[];for(let i=0;i<r.length;i++){let a=r[i],u=/^".*"$/.test(a)?a.slice(1,-1):a,l=De.join(u,e),f=!u&&/^\.[\\\/]/.test(e)?e.slice(0,2)+l:l;for(let h=0;h<n.length;h++){let m=f+n[h];try{if(Ue.sync(m,{pathExt:o}))if(t.all)s.push(m);else return m}catch{}}}if(t.all&&s.length)return s;if(t.nothrow)return null;throw Xe(e)};We.exports=Ke;Ke.sync=$n});var se=c((Bo,oe)=>{"use strict";var Ve=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(n=>n.toUpperCase()==="PATH")||"Path"};oe.exports=Ve;oe.exports.default=Ve});var Je=c((_o,Ze)=>{"use strict";var Ye=require("path"),kn=ze(),Ln=se();function Qe(e,t){let r=e.options.env||process.env,n=process.cwd(),o=e.options.cwd!=null,s=o&&process.chdir!==void 0&&!process.chdir.disabled;if(s)try{process.chdir(e.options.cwd)}catch{}let i;try{i=kn.sync(e.command,{path:r[Ln({env:r})],pathExt:t?Ye.delimiter:void 0})}catch{}finally{s&&process.chdir(n)}return i&&(i=Ye.resolve(o?e.options.cwd:"",i)),i}function Fn(e){return Qe(e)||Qe(e,!0)}Ze.exports=Fn});var et=c(($o,ae)=>{"use strict";var ie=/([()\][%!^"`<>&|;, *?])/g;function jn(e){return e=e.replace(ie,"^$1"),e}function Mn(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(ie,"^$1"),t&&(e=e.replace(ie,"^$1")),e}ae.exports.command=jn;ae.exports.argument=Mn});var nt=c((ko,tt)=>{"use strict";tt.exports=/^#!(.*)/});var ot=c((Lo,rt)=>{"use strict";var Dn=nt();rt.exports=(e="")=>{let t=e.match(Dn);if(!t)return null;let[r,n]=t[0].replace(/#! ?/,"").split(" "),o=r.split("/").pop();return o==="env"?n:n?`${o} ${n}`:o}});var it=c((Fo,st)=>{"use strict";var ce=require("fs"),Un=ot();function Xn(e){let r=Buffer.alloc(150),n;try{n=ce.openSync(e,"r"),ce.readSync(n,r,0,150,0),ce.closeSync(n)}catch{}return Un(r.toString())}st.exports=Xn});var lt=c((jo,ut)=>{"use strict";var Hn=require("path"),at=Je(),ct=et(),Kn=it(),Wn=process.platform==="win32",zn=/\.(?:com|exe)$/i,Vn=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function Yn(e){e.file=at(e);let t=e.file&&Kn(e.file);return t?(e.args.unshift(e.file),e.command=t,at(e)):e.file}function Qn(e){if(!Wn)return e;let t=Yn(e),r=!zn.test(t);if(e.options.forceShell||r){let n=Vn.test(t);e.command=Hn.normalize(e.command),e.command=ct.command(e.command),e.args=e.args.map(s=>ct.argument(s,n));let o=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${o}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function Zn(e,t,r){t&&!Array.isArray(t)&&(r=t,t=null),t=t?t.slice(0):[],r=Object.assign({},r);let n={command:e,args:t,options:r,file:void 0,original:{command:e,args:t}};return r.shell?n:Qn(n)}ut.exports=Zn});var pt=c((Mo,ft)=>{"use strict";var ue=process.platform==="win32";function le(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function Jn(e,t){if(!ue)return;let r=e.emit;e.emit=function(n,o){if(n==="exit"){let s=dt(o,t,"spawn");if(s)return r.call(e,"error",s)}return r.apply(e,arguments)}}function dt(e,t){return ue&&e===1&&!t.file?le(t.original,"spawn"):null}function er(e,t){return ue&&e===1&&!t.file?le(t.original,"spawnSync"):null}ft.exports={hookChildProcess:Jn,verifyENOENT:dt,verifyENOENTSync:er,notFoundError:le}});var yt=c((Do,C)=>{"use strict";var mt=require("child_process"),de=lt(),fe=pt();function ht(e,t,r){let n=de(e,t,r),o=mt.spawn(n.command,n.args,n.options);return fe.hookChildProcess(o,n),o}function tr(e,t,r){let n=de(e,t,r),o=mt.spawnSync(n.command,n.args,n.options);return o.error=o.error||fe.verifyENOENTSync(o.status,n),o}C.exports=ht;C.exports.spawn=ht;C.exports.sync=tr;C.exports._parse=de;C.exports._enoent=fe});var St=c((Uo,gt)=>{"use strict";gt.exports=e=>{let t=typeof e=="string"?`
`:`
`.charCodeAt(),r=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,e.length-1)),e[e.length-1]===r&&(e=e.slice(0,e.length-1)),e}});var wt=c((Xo,B)=>{"use strict";var N=require("path"),xt=se(),bt=e=>{e={cwd:process.cwd(),path:process.env[xt()],execPath:process.execPath,...e};let t,r=N.resolve(e.cwd),n=[];for(;t!==r;)n.push(N.join(r,"node_modules/.bin")),t=r,r=N.resolve(r,"..");let o=N.resolve(e.cwd,e.execPath,"..");return n.push(o),n.concat(e.path).join(N.delimiter)};B.exports=bt;B.exports.default=bt;B.exports.env=e=>{e={env:process.env,...e};let t={...e.env},r=xt({env:t});return e.path=t[r],t[r]=B.exports(e),t}});var Et=c((Ho,pe)=>{"use strict";var vt=(e,t)=>{for(let r of Reflect.ownKeys(t))Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));return e};pe.exports=vt;pe.exports.default=vt});var It=c((Ko,X)=>{"use strict";var nr=Et(),U=new WeakMap,Tt=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let r,n=0,o=e.displayName||e.name||"<anonymous>",s=function(...i){if(U.set(s,++n),n===1)r=e.apply(this,i),e=null;else if(t.throw===!0)throw new Error(`Function \`${o}\` can only be called once`);return r};return nr(s,e),U.set(s,n),s};X.exports=Tt;X.exports.default=Tt;X.exports.callCount=e=>{if(!U.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return U.get(e)}});var Ct=c(H=>{"use strict";Object.defineProperty(H,"__esModule",{value:!0});H.SIGNALS=void 0;var rr=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];H.SIGNALS=rr});var me=c(P=>{"use strict";Object.defineProperty(P,"__esModule",{value:!0});P.SIGRTMAX=P.getRealtimeSignals=void 0;var or=function(){let e=Gt-Pt+1;return Array.from({length:e},sr)};P.getRealtimeSignals=or;var sr=function(e,t){return{name:`SIGRT${t+1}`,number:Pt+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},Pt=34,Gt=64;P.SIGRTMAX=Gt});var At=c(K=>{"use strict";Object.defineProperty(K,"__esModule",{value:!0});K.getSignals=void 0;var ir=require("os"),ar=Ct(),cr=me(),ur=function(){let e=(0,cr.getRealtimeSignals)();return[...ar.SIGNALS,...e].map(lr)};K.getSignals=ur;var lr=function({name:e,number:t,description:r,action:n,forced:o=!1,standard:s}){let{signals:{[e]:i}}=ir.constants,a=i!==void 0;return{name:e,number:a?i:t,description:r,supported:a,action:n,forced:o,standard:s}}});var Rt=c(G=>{"use strict";Object.defineProperty(G,"__esModule",{value:!0});G.signalsByNumber=G.signalsByName=void 0;var dr=require("os"),Ot=At(),fr=me(),pr=function(){return(0,Ot.getSignals)().reduce(mr,{})},mr=function(e,{name:t,number:r,description:n,supported:o,action:s,forced:i,standard:a}){return{...e,[t]:{name:t,number:r,description:n,supported:o,action:s,forced:i,standard:a}}},hr=pr();G.signalsByName=hr;var yr=function(){let e=(0,Ot.getSignals)(),t=fr.SIGRTMAX+1,r=Array.from({length:t},(n,o)=>gr(o,e));return Object.assign({},...r)},gr=function(e,t){let r=Sr(e,t);if(r===void 0)return{};let{name:n,description:o,supported:s,action:i,forced:a,standard:u}=r;return{[e]:{name:n,number:e,description:o,supported:s,action:i,forced:a,standard:u}}},Sr=function(e,t){let r=t.find(({name:n})=>dr.constants.signals[n]===e);return r!==void 0?r:t.find(n=>n.number===e)},xr=yr();G.signalsByNumber=xr});var Nt=c((Qo,qt)=>{"use strict";var{signalsByName:br}=Rt(),wr=({timedOut:e,timeout:t,errorCode:r,signal:n,signalDescription:o,exitCode:s,isCanceled:i})=>e?`timed out after ${t} milliseconds`:i?"was canceled":r!==void 0?`failed with ${r}`:n!==void 0?`was killed with ${n} (${o})`:s!==void 0?`failed with exit code ${s}`:"failed",vr=({stdout:e,stderr:t,all:r,error:n,signal:o,exitCode:s,command:i,escapedCommand:a,timedOut:u,isCanceled:l,killed:f,parsed:{options:{timeout:h}}})=>{s=s===null?void 0:s,o=o===null?void 0:o;let m=o===void 0?void 0:br[o].description,y=n&&n.code,S=`Command ${wr({timedOut:u,timeout:h,errorCode:y,signal:o,signalDescription:m,exitCode:s,isCanceled:l})}: ${i}`,T=Object.prototype.toString.call(n)==="[object Error]",F=T?`${S}
${n.message}`:S,j=[F,t,e].filter(Boolean).join(`
`);return T?(n.originalMessage=n.message,n.message=j):n=new Error(j),n.shortMessage=F,n.command=i,n.escapedCommand=a,n.exitCode=s,n.signal=o,n.signalDescription=m,n.stdout=e,n.stderr=t,r!==void 0&&(n.all=r),"bufferedData"in n&&delete n.bufferedData,n.failed=!0,n.timedOut=Boolean(u),n.isCanceled=l,n.killed=f&&!u,n};qt.exports=vr});var _t=c((Zo,he)=>{"use strict";var W=["stdin","stdout","stderr"],Er=e=>W.some(t=>e[t]!==void 0),Bt=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return W.map(n=>e[n]);if(Er(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${W.map(n=>`\`${n}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let r=Math.max(t.length,W.length);return Array.from({length:r},(n,o)=>t[o])};he.exports=Bt;he.exports.node=e=>{let t=Bt(e);return t==="ipc"?"ipc":t===void 0||typeof t=="string"?[t,t,t,"ipc"]:t.includes("ipc")?t:[...t,"ipc"]}});var $t=c((Jo,z)=>{z.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&z.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&z.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var Mt=c((es,R)=>{var d=global.process,b=function(e){return e&&typeof e=="object"&&typeof e.removeListener=="function"&&typeof e.emit=="function"&&typeof e.reallyExit=="function"&&typeof e.listeners=="function"&&typeof e.kill=="function"&&typeof e.pid=="number"&&typeof e.on=="function"};b(d)?(kt=require("assert"),A=$t(),Lt=/^win/i.test(d.platform),_=require("events"),typeof _!="function"&&(_=_.EventEmitter),d.__signal_exit_emitter__?p=d.__signal_exit_emitter__:(p=d.__signal_exit_emitter__=new _,p.count=0,p.emitted={}),p.infinite||(p.setMaxListeners(1/0),p.infinite=!0),R.exports=function(e,t){if(!b(global.process))return function(){};kt.equal(typeof e,"function","a callback must be provided for exit handler"),O===!1&&ye();var r="exit";t&&t.alwaysLast&&(r="afterexit");var n=function(){p.removeListener(r,e),p.listeners("exit").length===0&&p.listeners("afterexit").length===0&&V()};return p.on(r,e),n},V=function(){!O||!b(global.process)||(O=!1,A.forEach(function(t){try{d.removeListener(t,Y[t])}catch{}}),d.emit=Q,d.reallyExit=ge,p.count-=1)},R.exports.unload=V,w=function(t,r,n){p.emitted[t]||(p.emitted[t]=!0,p.emit(t,r,n))},Y={},A.forEach(function(e){Y[e]=function(){if(!!b(global.process)){var r=d.listeners(e);r.length===p.count&&(V(),w("exit",null,e),w("afterexit",null,e),Lt&&e==="SIGHUP"&&(e="SIGINT"),d.kill(d.pid,e))}}}),R.exports.signals=function(){return A},O=!1,ye=function(){O||!b(global.process)||(O=!0,p.count+=1,A=A.filter(function(t){try{return d.on(t,Y[t]),!0}catch{return!1}}),d.emit=jt,d.reallyExit=Ft)},R.exports.load=ye,ge=d.reallyExit,Ft=function(t){!b(global.process)||(d.exitCode=t||0,w("exit",d.exitCode,null),w("afterexit",d.exitCode,null),ge.call(d,d.exitCode))},Q=d.emit,jt=function(t,r){if(t==="exit"&&b(global.process)){r!==void 0&&(d.exitCode=r);var n=Q.apply(this,arguments);return w("exit",d.exitCode,null),w("afterexit",d.exitCode,null),n}else return Q.apply(this,arguments)}):R.exports=function(){return function(){}};var kt,A,Lt,_,p,V,w,Y,O,ye,ge,Ft,Q,jt});var Ut=c((ts,Dt)=>{"use strict";var Tr=require("os"),Ir=Mt(),Cr=1e3*5,Pr=(e,t="SIGTERM",r={})=>{let n=e(t);return Gr(e,t,r,n),n},Gr=(e,t,r,n)=>{if(!Ar(t,r,n))return;let o=Rr(r),s=setTimeout(()=>{e("SIGKILL")},o);s.unref&&s.unref()},Ar=(e,{forceKillAfterTimeout:t},r)=>Or(e)&&t!==!1&&r,Or=e=>e===Tr.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",Rr=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return Cr;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},qr=(e,t)=>{e.kill()&&(t.isCanceled=!0)},Nr=(e,t,r)=>{e.kill(t),r(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},Br=(e,{timeout:t,killSignal:r="SIGTERM"},n)=>{if(t===0||t===void 0)return n;let o,s=new Promise((a,u)=>{o=setTimeout(()=>{Nr(e,r,u)},t)}),i=n.finally(()=>{clearTimeout(o)});return Promise.race([s,i])},_r=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},$r=async(e,{cleanup:t,detached:r},n)=>{if(!t||r)return n;let o=Ir(()=>{e.kill()});return n.finally(()=>{o()})};Dt.exports={spawnedKill:Pr,spawnedCancel:qr,setupTimeout:Br,validateTimeout:_r,setExitHandler:$r}});var Ht=c((ns,Xt)=>{"use strict";var x=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";x.writable=e=>x(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";x.readable=e=>x(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";x.duplex=e=>x.writable(e)&&x.readable(e);x.transform=e=>x.duplex(e)&&typeof e._transform=="function";Xt.exports=x});var Wt=c((rs,Kt)=>{"use strict";var{PassThrough:kr}=require("stream");Kt.exports=e=>{e={...e};let{array:t}=e,{encoding:r}=e,n=r==="buffer",o=!1;t?o=!(r||n):r=r||"utf8",n&&(r=null);let s=new kr({objectMode:o});r&&s.setEncoding(r);let i=0,a=[];return s.on("data",u=>{a.push(u),o?i=a.length:i+=u.length}),s.getBufferedValue=()=>t?a:n?Buffer.concat(a,i):a.join(""),s.getBufferedLength=()=>i,s}});var zt=c((os,$)=>{"use strict";var{constants:Lr}=require("buffer"),Fr=require("stream"),{promisify:jr}=require("util"),Mr=Wt(),Dr=jr(Fr.pipeline),Z=class extends Error{constructor(){super("maxBuffer exceeded"),this.name="MaxBufferError"}};async function Se(e,t){if(!e)throw new Error("Expected a stream");t={maxBuffer:1/0,...t};let{maxBuffer:r}=t,n=Mr(t);return await new Promise((o,s)=>{let i=a=>{a&&n.getBufferedLength()<=Lr.MAX_LENGTH&&(a.bufferedData=n.getBufferedValue()),s(a)};(async()=>{try{await Dr(e,n),o()}catch(a){i(a)}})(),n.on("data",()=>{n.getBufferedLength()>r&&i(new Z)})}),n.getBufferedValue()}$.exports=Se;$.exports.buffer=(e,t)=>Se(e,{...t,encoding:"buffer"});$.exports.array=(e,t)=>Se(e,{...t,array:!0});$.exports.MaxBufferError=Z});var Yt=c((ss,Vt)=>{"use strict";var{PassThrough:Ur}=require("stream");Vt.exports=function(){var e=[],t=new Ur({objectMode:!0});return t.setMaxListeners(0),t.add=r,t.isEmpty=n,t.on("unpipe",o),Array.prototype.slice.call(arguments).forEach(r),t;function r(s){return Array.isArray(s)?(s.forEach(r),this):(e.push(s),s.once("end",o.bind(null,s)),s.once("error",t.emit.bind(t,"error")),s.pipe(t,{end:!1}),this)}function n(){return e.length==0}function o(s){e=e.filter(function(i){return i!==s}),!e.length&&t.readable&&t.end()}}});var en=c((is,Jt)=>{"use strict";var Zt=Ht(),Qt=zt(),Xr=Yt(),Hr=(e,t)=>{t===void 0||e.stdin===void 0||(Zt(t)?t.pipe(e.stdin):e.stdin.end(t))},Kr=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let r=Xr();return e.stdout&&r.add(e.stdout),e.stderr&&r.add(e.stderr),r},xe=async(e,t)=>{if(!!e){e.destroy();try{return await t}catch(r){return r.bufferedData}}},be=(e,{encoding:t,buffer:r,maxBuffer:n})=>{if(!(!e||!r))return t?Qt(e,{encoding:t,maxBuffer:n}):Qt.buffer(e,{maxBuffer:n})},Wr=async({stdout:e,stderr:t,all:r},{encoding:n,buffer:o,maxBuffer:s},i)=>{let a=be(e,{encoding:n,buffer:o,maxBuffer:s}),u=be(t,{encoding:n,buffer:o,maxBuffer:s}),l=be(r,{encoding:n,buffer:o,maxBuffer:s*2});try{return await Promise.all([i,a,u,l])}catch(f){return Promise.all([{error:f,signal:f.signal,timedOut:f.timedOut},xe(e,a),xe(t,u),xe(r,l)])}},zr=({input:e})=>{if(Zt(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};Jt.exports={handleInput:Hr,makeAllStream:Kr,getSpawnedResult:Wr,validateInputSync:zr}});var nn=c((as,tn)=>{"use strict";var Vr=(async()=>{})().constructor.prototype,Yr=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(Vr,e)]),Qr=(e,t)=>{for(let[r,n]of Yr){let o=typeof t=="function"?(...s)=>Reflect.apply(n.value,t(),s):n.value.bind(t);Reflect.defineProperty(e,r,{...n,value:o})}return e},Zr=e=>new Promise((t,r)=>{e.on("exit",(n,o)=>{t({exitCode:n,signal:o})}),e.on("error",n=>{r(n)}),e.stdin&&e.stdin.on("error",n=>{r(n)})});tn.exports={mergePromise:Qr,getSpawnedPromise:Zr}});var sn=c((cs,on)=>{"use strict";var rn=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],Jr=/^[\w.-]+$/,eo=/"/g,to=e=>typeof e!="string"||Jr.test(e)?e:`"${e.replace(eo,'\\"')}"`,no=(e,t)=>rn(e,t).join(" "),ro=(e,t)=>rn(e,t).map(r=>to(r)).join(" "),oo=/ +/g,so=e=>{let t=[];for(let r of e.trim().split(oo)){let n=t[t.length-1];n&&n.endsWith("\\")?t[t.length-1]=`${n.slice(0,-1)} ${r}`:t.push(r)}return t};on.exports={joinCommand:no,getEscapedCommand:ro,parseCommand:so}});var pn=c((us,q)=>{"use strict";var io=require("path"),we=require("child_process"),ao=yt(),co=St(),uo=wt(),lo=It(),J=Nt(),cn=_t(),{spawnedKill:fo,spawnedCancel:po,setupTimeout:mo,validateTimeout:ho,setExitHandler:yo}=Ut(),{handleInput:go,getSpawnedResult:So,makeAllStream:xo,validateInputSync:bo}=en(),{mergePromise:an,getSpawnedPromise:wo}=nn(),{joinCommand:un,parseCommand:ln,getEscapedCommand:dn}=sn(),vo=1e3*1e3*100,Eo=({env:e,extendEnv:t,preferLocal:r,localDir:n,execPath:o})=>{let s=t?{...process.env,...e}:e;return r?uo.env({env:s,cwd:n,execPath:o}):s},fn=(e,t,r={})=>{let n=ao._parse(e,t,r);return e=n.command,t=n.args,r=n.options,r={maxBuffer:vo,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:r.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0,...r},r.env=Eo(r),r.stdio=cn(r),process.platform==="win32"&&io.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:r,parsed:n}},k=(e,t,r)=>typeof t!="string"&&!Buffer.isBuffer(t)?r===void 0?void 0:"":e.stripFinalNewline?co(t):t,ee=(e,t,r)=>{let n=fn(e,t,r),o=un(e,t),s=dn(e,t);ho(n.options);let i;try{i=we.spawn(n.file,n.args,n.options)}catch(y){let g=new we.ChildProcess,S=Promise.reject(J({error:y,stdout:"",stderr:"",all:"",command:o,escapedCommand:s,parsed:n,timedOut:!1,isCanceled:!1,killed:!1}));return an(g,S)}let a=wo(i),u=mo(i,n.options,a),l=yo(i,n.options,u),f={isCanceled:!1};i.kill=fo.bind(null,i.kill.bind(i)),i.cancel=po.bind(null,i,f);let m=lo(async()=>{let[{error:y,exitCode:g,signal:S,timedOut:T},F,j,vn]=await So(i,n.options,l),Te=k(n.options,F),Ie=k(n.options,j),Ce=k(n.options,vn);if(y||g!==0||S!==null){let Pe=J({error:y,exitCode:g,signal:S,stdout:Te,stderr:Ie,all:Ce,command:o,escapedCommand:s,parsed:n,timedOut:T,isCanceled:f.isCanceled,killed:i.killed});if(!n.options.reject)return Pe;throw Pe}return{command:o,escapedCommand:s,exitCode:0,stdout:Te,stderr:Ie,all:Ce,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return go(i,n.options.input),i.all=xo(i,n.options),an(i,m)};q.exports=ee;q.exports.sync=(e,t,r)=>{let n=fn(e,t,r),o=un(e,t),s=dn(e,t);bo(n.options);let i;try{i=we.spawnSync(n.file,n.args,n.options)}catch(l){throw J({error:l,stdout:"",stderr:"",all:"",command:o,escapedCommand:s,parsed:n,timedOut:!1,isCanceled:!1,killed:!1})}let a=k(n.options,i.stdout,i.error),u=k(n.options,i.stderr,i.error);if(i.error||i.status!==0||i.signal!==null){let l=J({stdout:a,stderr:u,error:i.error,signal:i.signal,exitCode:i.status,command:o,escapedCommand:s,parsed:n,timedOut:i.error&&i.error.code==="ETIMEDOUT",isCanceled:!1,killed:i.signal!==null});if(!n.options.reject)return l;throw l}return{command:o,escapedCommand:s,exitCode:0,stdout:a,stderr:u,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};q.exports.command=(e,t)=>{let[r,...n]=ln(e);return ee(r,n,t)};q.exports.commandSync=(e,t)=>{let[r,...n]=ln(e);return ee.sync(r,n,t)};q.exports.node=(e,t,r={})=>{t&&!Array.isArray(t)&&typeof t=="object"&&(r=t,t=[]);let n=cn.node(r),o=process.execArgv.filter(a=>!a.startsWith("--inspect")),{nodePath:s=process.execPath,nodeOptions:i=o}=r;return ee(s,[...i,e,...Array.isArray(t)?t:[]],{...r,stdin:void 0,stdout:void 0,stderr:void 0,stdio:n,shell:!1})}});var Po={};Gn(Po,{default:()=>Co});module.exports=An(Po);var ne=require("fs/promises"),E=require("@raycast/api");var yn=require("@raycast/api");var mn=Ae(require("node:process"),1),hn=Ae(pn(),1);async function ve(e){if(mn.default.platform!=="darwin")throw new Error("macOS only");let{stdout:t}=await(0,hn.default)("osascript",["-e",e]);return t}var L=(r=>(r.Text="\xABclass utf8\xBB",r.File="\xABclass furl\xBB",r))(L||{});async function Ee(e){let t=L[e];if(!(await te.getClipboardClasses()).includes(e))throw new Error(`Clipboard does not contain type '${t}'`);switch(e){case"\xABclass utf8\xBB":return await yn.Clipboard.readText();case"\xABclass furl\xBB":return await te.getClipboardContentsAsFilePath()}throw new Error(`Unsupported type '${t}' for clipboard read.`)}async function gn(){return new Set(await te.getClipboardClasses())}var te;(r=>{async function e(){let n=await ve("copy ((clipboard info) as string) to stdout"),o=[];for(let s in L){let i=L[s];n.includes(i)&&o.push(i)}return o}r.getClipboardClasses=e;async function t(){let n=await ve("copy (POSIX path of (the clipboard as \xABclass furl\xBB)) to stdout");return n===""?null:n}r.getClipboardContentsAsFilePath=t})(te||={});var v=class extends Error{};function Sn(e){return async function(){try{return await e()}catch(t){if(t instanceof v)return(0,E.showToast)({title:"Error",message:t.message,style:E.Toast.Style.Failure});throw t}}}async function Io(e){try{return await e}catch{return}}async function xn(){let e=await gn();if(e.has("\xABclass furl\xBB")){let t=await Ee("\xABclass furl\xBB"),r=await Io((0,ne.stat)(t));if(r!==void 0){if(!r.isFile())throw new v("Clipboard contains directory.");return await(0,ne.readFile)(t)}}if(e.has("\xABclass utf8\xBB"))return Buffer.from(await Ee("\xABclass utf8\xBB"),"utf8");throw new v("Clipboard contents unsupported.")}async function bn(e,t){await E.Clipboard.copy(e),await(0,E.showToast)({title:t,message:"Copied output to clipboard"})}function wn(e){return e.replaceAll(`
`,"")}var Co=Sn(async()=>{let e=await xn(),t=wn(e.toString("utf8")),r=Buffer.from(t,"base64").toString("utf8");if(Buffer.from(r,"utf8").toString("base64")!==t)throw new v("Clipboard contents not Base64-encoded.");await bn(r,"Decoded from Base64")});0&&(module.exports={});
