import{r as t,c as s,h as i,g as e}from"./p-06107f9b.js";import"./p-8bd4e6e9.js";import{T as a,I as h}from"./p-4d533d6f.js";import"./p-30ecf6c3.js";import{s as r,L as c}from"./p-c9de0791.js";const{mutationObserverCallback:l,initialize:n,initializeObserver:p,cleanUpObserver:o,calciteListItemChangeHandler:m,setUpItems:d,deselectSiblingItems:g,selectSiblings:b,handleFilter:I,getItemData:u}=r,L=class{constructor(i){t(this,i),this.compact=!1,this.disabled=!1,this.filterEnabled=!1,this.loading=!1,this.multiple=!1,this.textFilterPlaceholder=a.filterPlaceholder,this.selectedValues=new Map,this.dataForFilter=[],this.lastSelectedItem=null,this.observer=new MutationObserver(l.bind(this)),this.deselectSiblingItems=g.bind(this),this.selectSiblings=b.bind(this),this.handleFilter=I.bind(this),this.getItemData=u.bind(this),this.calciteListChange=s(this,"calciteListChange",7)}connectedCallback(){n.call(this)}componentDidLoad(){p.call(this)}componentDidUnload(){o.call(this)}calciteListItemChangeHandler(t){m.call(this,t)}calciteListItemPropsUpdatedHandler(t){t.stopPropagation(),this.setUpFilter()}setUpItems(){d.call(this,"calcite-pick-list-item")}setUpFilter(){this.filterEnabled&&(this.dataForFilter=this.getItemData())}async getSelectedItems(){return this.selectedValues}getIconType(){let t=h.circle;return this.multiple&&(t=h.square),t}render(){return i(c,{props:this})}get el(){return e(this)}static get style(){return":root{--calcite-app-line-height:1.4;--calcite-app-base-font-size:16px;--calcite-app-font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif;--calcite-app-font-family-monospace:\"Lucida Console\",Monaco,monospace;--calcite-app-font-size-3:1.5rem;--calcite-app-font-size-2:1.125rem;--calcite-app-font-size-1:1rem;--calcite-app-font-size-0:0.875rem;--calcite-app-font-size--1:0.75rem;--calcite-app-font-weight:400;--calcite-app-font-weight-demi:600;font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-base-font-size);line-height:var(--calcite-app-line-height);}.heading{font-weight:var(--calcite-app-font-weight-demi);}h1.heading{font-size:var(--calcite-app-font-size-3);}h2.heading{font-size:var(--calcite-app-font-size-2);}h3.heading{font-size:var(--calcite-app-font-size-1);}h4.heading,h5.heading{font-size:var(--calcite-app-font-size-0);}:root{--calcite-app-side-spacing:1rem;--calcite-app-cap-spacing:1rem;--calcite-app-side-spacing-three-quarters:calc(var(--calcite-app-side-spacing) * 3 / 4);--calcite-app-cap-spacing-three-quarters:calc(var(--calcite-app-cap-spacing) * 3 / 4);--calcite-app-side-spacing-half:calc(var(--calcite-app-side-spacing) / 2);--calcite-app-cap-spacing-half:calc(var(--calcite-app-cap-spacing) / 2);--calcite-app-side-spacing-third:calc(var(--calcite-app-side-spacing) / 3);--calcite-app-cap-spacing-third:calc(var(--calcite-app-cap-spacing) / 3);--calcite-app-side-spacing-quarter:calc(var(--calcite-app-side-spacing) / 4);--calcite-app-cap-spacing-quarter:calc(var(--calcite-app-cap-spacing) / 4);--calcite-app-side-spacing-eighth:calc(var(--calcite-app-side-spacing) / 8);--calcite-app-cap-spacing-eighth:calc(var(--calcite-app-cap-spacing) / 8);--calcite-app-cap-spacing-minimum:1px;--calcite-app-side-spacing-plus-half:calc(var(--calcite-app-side-spacing) * 1.5);--calcite-app-cap-spacing-plus-half:calc(var(--calcite-app-cap-spacing) * 1.5);--calcite-app-side-spacing-double:calc(var(--calcite-app-side-spacing) * 2);--calcite-app-cap-spacing-double:calc(var(--calcite-app-cap-spacing) * 2);--calcite-app-menu-min-width:10rem;--calcite-app-menu-offset:0px;--calcite-app-icon-size:1rem;--calcite-app-border-radius:3px;--calcite-app-header-min-height:calc(var(--calcite-app-cap-spacing) * 3);--calcite-app-footer-min-height:calc(var(--calcite-app-cap-spacing) * 3);--calcite-app-outline-inset:-4px;--calcite-app-shadow-0:0 2px 4px rgba(0,0,0,0.1);--calcite-app-shadow-1:0 0 8px 0 rgba(0,0,0,0.08);--calcite-app-shadow-1-hover:0 0 16px 0 rgba(0,0,0,0.08);--calcite-app-shadow-1--press:0 0 8px 0 rgba(0,0,0,0.16);--calcite-app-shadow-2:0 0 16px 0 rgba(0,0,0,0.16);--calcite-app-shadow-2-hover:0 0 32px 0 rgba(0,0,0,0.16);--calcite-app-shadow-2-press:0 0 16px 0 rgba(0,0,0,0.32);}:root{--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#f3f3f3;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255,255,255,0.8);}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64,64,64,0.8);}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#f3f3f3;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255,255,255,0.8);}:root{--calcite-app-animation-time:250ms;--calcite-app-animation-time-fast:calc(var(--calcite-app-animation-time) / 3);--calcite-app-animation-time-slow:calc(var(--calcite-app-animation-time) * 2);--calcite-app-easing-function:ease-in-out;}\@-webkit-keyframes calcite-app-fade-in{0%{opacity:0;}100%{opacity:1;}}\@keyframes calcite-app-fade-in{0%{opacity:0;}100%{opacity:1;}}\@-webkit-keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0);}100%{opacity:1;-webkit-transform:translate3D(0,0,0);transform:translate3D(0,0,0);}}\@keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0);}100%{opacity:1;-webkit-transform:translate3D(0,0,0);transform:translate3D(0,0,0);}}\@-webkit-keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0);}100%{opacity:1;-webkit-transform:translate3D(0,0,0);transform:translate3D(0,0,0);}}\@keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0);}100%{opacity:1;-webkit-transform:translate3D(0,0,0);transform:translate3D(0,0,0);}}\@-webkit-keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95,0.95,1);transform:scale3D(0.95,0.95,1);}100%{opacity:1;-webkit-transform:scale3D(1,1,1);transform:scale3D(1,1,1);}}\@keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95,0.95,1);transform:scale3D(0.95,0.95,1);}100%{opacity:1;-webkit-transform:scale3D(1,1,1);transform:scale3D(1,1,1);}}:host{background-color:var(--calcite-app-background);-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-size:var(--calcite-app-font-size-0);}:host *{-webkit-box-sizing:border-box;box-sizing:border-box;}:host([hidden]){display:none;}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;color:var(--calcite-app-foreground);fill:var(--calcite-app-foreground);}.heading{padding:0;margin:0;}.header .heading{-ms-flex:1 0 auto;flex:1 0 auto;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half);}:host{-ms-flex-align:stretch;align-items:stretch;background-color:var(--calcite-app-background-clear);display:-ms-flexbox;display:flex;-ms-flex:1 0 auto;flex:1 0 auto;-ms-flex-flow:column;flex-flow:column;padding-bottom:var(--calcite-app-cap-spacing-half);position:relative;}header{background-color:var(--calcite-app-background);display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center;margin-bottom:var(--calcite-app-cap-spacing-half);}header.sticky{position:-webkit-sticky;position:sticky;top:0;z-index:1;}calcite-filter{-webkit-box-shadow:0 1px 0 var(--calcite-app-border);box-shadow:0 1px 0 var(--calcite-app-border);}slot[name=menu-actions]::slotted(calcite-action){padding:0 var(--calcite-app-side-spacing-half);}:host([loading][disabled]){min-height:2rem;}"}};export{L as calcite_pick_list};