"use strict";var n=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var m=Object.prototype.hasOwnProperty;var r=(a,o)=>{for(var i in o)n(a,i,{get:o[i],enumerable:!0})},w=(a,o,i,p)=>{if(o&&typeof o=="object"||typeof o=="function")for(let e of d(o))!m.call(a,e)&&e!==i&&n(a,e,{get:()=>o[e],enumerable:!(p=c(o,e))||p.enumerable});return a};var f=a=>w(n({},"__esModule",{value:!0}),a);var l={};r(l,{default:()=>s});module.exports=f(l);var t=require("@raycast/api");async function s(){await(0,t.open)("https://docs.google.com/spreadsheets/create"),await(0,t.closeMainWindow)(),await(0,t.popToRoot)()}0&&(module.exports={});
