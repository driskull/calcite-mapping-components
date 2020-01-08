var __awaiter=this&&this.__awaiter||function(e,t,i,n){function r(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,s){function c(e){try{l(n.next(e))}catch(t){s(t)}}function a(e){try{l(n["throw"](e))}catch(t){s(t)}}function l(e){e.done?i(e.value):r(e.value).then(c,a)}l((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var i={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},n,r,s,c;return c={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(c[Symbol.iterator]=function(){return this}),c;function a(e){return function(t){return l([e,t])}}function l(c){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,r&&(s=c[0]&2?r["return"]:c[0]?r["throw"]||((s=r["return"])&&s.call(r),0):r.next)&&!(s=s.call(r,c[1])).done)return s;if(r=0,s)c=[c[0]&2,s.value];switch(c[0]){case 0:case 1:s=c;break;case 4:i.label++;return{value:c[1],done:false};case 5:i.label++;r=c[1];c=[0];continue;case 7:c=i.ops.pop();i.trys.pop();continue;default:if(!(s=i.trys,s=s.length>0&&s[s.length-1])&&(c[0]===6||c[0]===2)){i=0;continue}if(c[0]===3&&(!s||c[1]>s[0]&&c[1]<s[3])){i.label=c[1];break}if(c[0]===6&&i.label<s[1]){i.label=s[1];s=c;break}if(s&&i.label<s[2]){i.label=s[2];i.ops.push(c);break}if(s[2])i.ops.pop();i.trys.pop();continue}c=t.call(e,i)}catch(a){c=[6,a];r=0}finally{n=s=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:true}}};System.register(["./p-f2ee17c5.system.js","./p-12ec9e50.system.js","./p-b0d69d1e.system.js"],(function(e){"use strict";var t,i,n,r,s,c,a,l;return{setters:[function(e){t=e.r;i=e.c;n=e.h;r=e.H;s=e.g},function(e){c=e.I},function(e){a=e.C;l=e.I}],execute:function(){var o=e("calcite_pick_list_item",function(){function e(e){var n=this;t(this,e);this.compact=false;this.disabled=false;this.disableDeselect=false;this.icon=null;this.selected=false;this.pickListClickHandler=function(e){if(n.disabled||n.disableDeselect&&n.selected){return}n.shiftPressed=e.shiftKey;n.selected=!n.selected};this.pickListKeyDownHandler=function(e){if(e.key===" "){e.preventDefault();if(n.disableDeselect&&n.selected){return}n.selected=!n.selected}};this.calciteListItemChange=i(this,"calciteListItemChange",7);this.calciteListItemPropsUpdated=i(this,"calciteListItemPropsUpdated",7)}e.prototype.metadataWatchHandler=function(){this.calciteListItemPropsUpdated.emit()};e.prototype.selectedWatchHandler=function(){this.calciteListItemChange.emit({item:this.el,value:this.value,selected:this.selected,shiftPressed:this.shiftPressed});this.shiftPressed=false};e.prototype.textDescriptionWatchHandler=function(){this.calciteListItemPropsUpdated.emit()};e.prototype.textLabelWatchHandler=function(){this.calciteListItemPropsUpdated.emit()};e.prototype.toggleSelected=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){if(this.disabled){return[2]}this.selected=typeof e==="boolean"?e:!this.selected;return[2]}))}))};e.prototype.renderIcon=function(){var e=this,t=e.compact,i=e.icon,r=e.selected;if(!i||t){return null}var s=i===c.square?r?l.checked:l.unchecked:r?l.selected:l.unselected;return n("span",{class:a.icon},n("calcite-icon",{scale:"s",icon:s}))};e.prototype.render=function(){var e=this.textDescription&&!this.compact?n("span",{class:a.description},this.textDescription):null;return n(r,{role:"menuitemcheckbox","aria-checked":this.selected.toString()},n("label",{class:a.label,onClick:this.pickListClickHandler,onKeyDown:this.pickListKeyDownHandler,tabIndex:0,"aria-label":this.textLabel},this.renderIcon(),n("div",{class:a.textContainer},n("span",{class:a.title},this.textLabel),e)),n("div",{class:a.action},n("slot",{name:"secondary-action"})))};Object.defineProperty(e.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{metadata:["metadataWatchHandler"],selected:["selectedWatchHandler"],textDescription:["textDescriptionWatchHandler"],textLabel:["textLabelWatchHandler"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return":root{--calcite-app-line-height:1.4;--calcite-app-base-font-size:16px;--calcite-app-font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif;--calcite-app-font-family-monospace:\"Lucida Console\",Monaco,monospace;--calcite-app-font-size-3:1.5rem;--calcite-app-font-size-2:1.125rem;--calcite-app-font-size-1:1rem;--calcite-app-font-size-0:0.875rem;--calcite-app-font-size--1:0.75rem;--calcite-app-font-weight:400;--calcite-app-font-weight-demi:600;font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-base-font-size);line-height:var(--calcite-app-line-height);}.heading{font-weight:var(--calcite-app-font-weight-demi);}h1.heading{font-size:var(--calcite-app-font-size-3);}h2.heading{font-size:var(--calcite-app-font-size-2);}h3.heading{font-size:var(--calcite-app-font-size-1);}h4.heading,h5.heading{font-size:var(--calcite-app-font-size-0);}:root{--calcite-app-side-spacing:1rem;--calcite-app-cap-spacing:1rem;--calcite-app-side-spacing-three-quarters:calc(var(--calcite-app-side-spacing) * 3 / 4);--calcite-app-cap-spacing-three-quarters:calc(var(--calcite-app-cap-spacing) * 3 / 4);--calcite-app-side-spacing-half:calc(var(--calcite-app-side-spacing) / 2);--calcite-app-cap-spacing-half:calc(var(--calcite-app-cap-spacing) / 2);--calcite-app-side-spacing-third:calc(var(--calcite-app-side-spacing) / 3);--calcite-app-cap-spacing-third:calc(var(--calcite-app-cap-spacing) / 3);--calcite-app-side-spacing-quarter:calc(var(--calcite-app-side-spacing) / 4);--calcite-app-cap-spacing-quarter:calc(var(--calcite-app-cap-spacing) / 4);--calcite-app-side-spacing-eighth:calc(var(--calcite-app-side-spacing) / 8);--calcite-app-cap-spacing-eighth:calc(var(--calcite-app-cap-spacing) / 8);--calcite-app-cap-spacing-minimum:1px;--calcite-app-side-spacing-plus-half:calc(var(--calcite-app-side-spacing) * 1.5);--calcite-app-cap-spacing-plus-half:calc(var(--calcite-app-cap-spacing) * 1.5);--calcite-app-side-spacing-double:calc(var(--calcite-app-side-spacing) * 2);--calcite-app-cap-spacing-double:calc(var(--calcite-app-cap-spacing) * 2);--calcite-app-menu-min-width:10rem;--calcite-app-menu-offset:0px;--calcite-app-icon-size:1rem;--calcite-app-border-radius:3px;--calcite-app-header-min-height:calc(var(--calcite-app-cap-spacing) * 3);--calcite-app-footer-min-height:calc(var(--calcite-app-cap-spacing) * 3);--calcite-app-outline-inset:-4px;--calcite-app-shadow-0:0 2px 4px rgba(0,0,0,0.1);--calcite-app-shadow-1:0 0 8px 0 rgba(0,0,0,0.08);--calcite-app-shadow-1-hover:0 0 16px 0 rgba(0,0,0,0.08);--calcite-app-shadow-1--press:0 0 8px 0 rgba(0,0,0,0.16);--calcite-app-shadow-2:0 0 16px 0 rgba(0,0,0,0.16);--calcite-app-shadow-2-hover:0 0 32px 0 rgba(0,0,0,0.16);--calcite-app-shadow-2-press:0 0 16px 0 rgba(0,0,0,0.32);}:root{--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#f3f3f3;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255,255,255,0.8);}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64,64,64,0.8);}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#f3f3f3;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255,255,255,0.8);}:root{--calcite-app-animation-time:250ms;--calcite-app-animation-time-fast:calc(var(--calcite-app-animation-time) / 3);--calcite-app-animation-time-slow:calc(var(--calcite-app-animation-time) * 2);--calcite-app-easing-function:ease-in-out;}\@-webkit-keyframes calcite-app-fade-in{0%{opacity:0;}100%{opacity:1;}}\@keyframes calcite-app-fade-in{0%{opacity:0;}100%{opacity:1;}}\@-webkit-keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0);}100%{opacity:1;-webkit-transform:translate3D(0,0,0);transform:translate3D(0,0,0);}}\@keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0);}100%{opacity:1;-webkit-transform:translate3D(0,0,0);transform:translate3D(0,0,0);}}\@-webkit-keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0);}100%{opacity:1;-webkit-transform:translate3D(0,0,0);transform:translate3D(0,0,0);}}\@keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0);}100%{opacity:1;-webkit-transform:translate3D(0,0,0);transform:translate3D(0,0,0);}}\@-webkit-keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95,0.95,1);transform:scale3D(0.95,0.95,1);}100%{opacity:1;-webkit-transform:scale3D(1,1,1);transform:scale3D(1,1,1);}}\@keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95,0.95,1);transform:scale3D(0.95,0.95,1);}100%{opacity:1;-webkit-transform:scale3D(1,1,1);transform:scale3D(1,1,1);}}:host{background-color:var(--calcite-app-background);-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-size:var(--calcite-app-font-size-0);}:host *{-webkit-box-sizing:border-box;box-sizing:border-box;}:host([hidden]){display:none;}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;color:var(--calcite-app-foreground);fill:var(--calcite-app-foreground);}.heading{padding:0;margin:0;}.header .heading{-ms-flex:1 0 auto;flex:1 0 auto;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half);}:host{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;margin:0 var(--calcite-app-side-spacing-half) var(--calcite-app-cap-spacing-minimum);background-color:var(--calcite-app-background);color:var(--calcite-app-foreground);-webkit-transition:background-color var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);transition:background-color var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);-webkit-animation:calcite-app-fade-in var(--calcite-app-animation-time) var(--calcite-app-easing-function);animation:calcite-app-fade-in var(--calcite-app-animation-time) var(--calcite-app-easing-function);}:host(:hover),:host(:focus){background-color:var(--calcite-app-background-hover);}:host(:last-child){margin-bottom:0;-webkit-box-shadow:0 1px 0 var(--calcite-app-border);box-shadow:0 1px 0 var(--calcite-app-border);}.icon{color:var(--calcite-app-foreground-link);-ms-flex:0 0 0%;flex:0 0 0%;line-height:0;width:var(--calcite-app-icon-size);margin:0 var(--calcite-app-side-spacing-half);}.label{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;padding:var(--calcite-app-cap-spacing-three-quarters) var(--calcite-app-side-spacing-half);-ms-flex-align:center;align-items:center;cursor:pointer;}.label:focus{outline-offset:var(--calcite-app-outline-inset);}.text-container{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;overflow:hidden;pointer-events:none;padding:0 var(--calcite-app-side-spacing-half);}.title{font-size:var(--calcite-app-font-size-0);display:-webkit-box;overflow:hidden;white-space:pre-wrap;word-break:break-all;-webkit-line-clamp:2;-webkit-box-orient:vertical;}.description{color:var(--calcite-app-foreground-subtle);font-family:var(--calcite-app-font-family-monospace);font-size:var(--calcite-app-font-size--1);margin-top:var(--calcite-app-cap-spacing-quarter);display:-webkit-box;overflow:hidden;white-space:pre-wrap;word-break:break-all;-webkit-line-clamp:2;-webkit-box-orient:vertical;}.action{-ms-flex:0 0 0%;flex:0 0 0%;justify-self:flex-end;margin:var(--calcite-app-cap-spacing-quarter) var(--calcite-app-side-spacing-half);}"},enumerable:true,configurable:true});return e}())}}}));