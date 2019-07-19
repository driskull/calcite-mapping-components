import{r as s,h as t,H as e,g as i}from"./p-65eb7859.js";import{d as l}from"./p-758a8528.js";function n(){return"undefined"!=typeof Storage}const o={close:"close",content:"content",link:"link"};class a{constructor(t){var e;s(this,t),this.nonDismissible=!1,this.dismissed=null!==((e=`${this.el.tagName.toLowerCase()}-${this.storageId}`)&&n()?localStorage.getItem(e):null)}hideTip(){this.dismissed=!0;const{storageId:s}=this;var t;s&&("dismissed",(t=`${this.el.tagName.toLowerCase()}-${s}`)&&n()&&localStorage.setItem(t,"dismissed"))}render(){return t(e,{hidden:this.dismissed},t("slot",{name:"heading"}),this.nonDismissible?null:t("div",{class:o.close,onClick:()=>this.hideTip()},t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t("path",{d:l}))),t("div",{class:o.content},t("slot",{name:"thumbnail"}),t("div",null,t("slot",null),this.el.querySelector("[slot=link]")?t("p",{class:o.link},t("slot",{name:"link"})):null)))}get el(){return i(this)}static get style(){return":host{--line-height:1.3rem;--base-font-size:$base-font-size;--font-size-2:1.429rem;--font-size-1:1.143rem;--font-size-0:1rem;--font-size--1:0.858rem;--font-weight:400;--font-weight-heading:600;--font-weight-bold:600;font-size:var(--font-size-0);--calcite-app-side-spacing:15px;--calcite-app-cap-spacing:15px;--calcite-app-side-spacing-three-quarters:11px;--calcite-app-cap-spacing-three-quarters:11px;--calcite-app-side-spacing-half:7px;--calcite-app-cap-spacing-half:7px;--calcite-app-side-spacing-third:5px;--calcite-app-cap-spacing-third:5px;--calcite-app-side-spacing-quarter:3px;--calcite-app-cap-spacing-quarter:3px;--calcite-app-side-spacing-eighth:2px;--calcite-app-cap-spacing-eighth:2px;--calcite-app-side-spacing-plus-half:22px;--calcite-app-cap-spacing-plus-half:22px;--calcite-app-side-spacing-double:30px;--calcite-app-cap-spacing-double:30px;--calcite-app-icon-size:16px;--calcite-app-border-radius:3px;--calcite-app-background:#fff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-border:#eaeaea}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#2b2b2b;--calcite-app-foreground-active:#59d6ff;--calcite-app-border:#eaeaea}html{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif;font-size:14px;line-height:1.3rem}:host{position:relative;display:block;padding:24px 12px;background-color:#fff;color:#6e6e6e;-webkit-box-shadow:0 0 5px 0 rgba(0,0,0,.75);box-shadow:0 0 5px 0 rgba(0,0,0,.75)}:host([hidden]){display:none}.close,.title{font-size:24px}.close{position:absolute;top:0;right:0;width:24px;height:24px;margin:24px 12px;cursor:pointer}:host-context([dir=rtl]) .close{right:auto;left:0}.content{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start}.content>:last-child{margin-left:12px;margin-right:auto}:host-context([dir=rtl]) .content>:last-child{margin-right:12px;margin-left:auto}"}}export{a as calcite_tip};