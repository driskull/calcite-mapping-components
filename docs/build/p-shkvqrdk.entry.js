import{r as t,c as s,h as e,H as i,g as a}from"./p-b2d52e2a.js";import{I as c}from"./p-4d533d6f.js";import{C as h,I as l}from"./p-a138cb96.js";const n=class{constructor(e){t(this,e),this.compact=!1,this.disabled=!1,this.disableDeselect=!1,this.icon=null,this.selected=!1,this.pickListClickHandler=t=>{this.disabled||this.disableDeselect&&this.selected||(this.shiftPressed=t.shiftKey,this.selected=!this.selected)},this.pickListKeyDownHandler=t=>{if(" "===t.key){if(t.preventDefault(),this.disableDeselect&&this.selected)return;this.selected=!this.selected}},this.calciteListItemChange=s(this,"calciteListItemChange",7),this.calciteListItemPropsUpdated=s(this,"calciteListItemPropsUpdated",7),this.calciteListItemValueChange=s(this,"calciteListItemValueChange",7)}metadataWatchHandler(){this.calciteListItemPropsUpdated.emit()}selectedWatchHandler(){this.calciteListItemChange.emit({item:this.el,value:this.value,selected:this.selected,shiftPressed:this.shiftPressed}),this.shiftPressed=!1}textDescriptionWatchHandler(){this.calciteListItemPropsUpdated.emit()}textLabelWatchHandler(){this.calciteListItemPropsUpdated.emit()}valueWatchHandler(t,s){this.calciteListItemValueChange.emit({oldValue:s,newValue:t})}async toggleSelected(t){this.disabled||(this.selected="boolean"==typeof t?t:!this.selected)}renderIcon(){const{compact:t,icon:s,selected:i}=this;return!s||t?null:e("span",{class:h.icon},e("calcite-icon",{scale:"s",icon:s===c.square?i?l.checked:l.unchecked:i?l.selected:l.unselected}))}render(){const t=this.textDescription&&!this.compact?e("span",{class:h.description},this.textDescription):null;return e(i,{role:"menuitemcheckbox","aria-checked":this.selected.toString()},e("label",{class:h.label,onClick:this.pickListClickHandler,onKeyDown:this.pickListKeyDownHandler,tabIndex:0,"aria-label":this.textLabel},this.renderIcon(),e("div",{class:h.textContainer},e("span",{class:h.title},this.textLabel),t)),e("div",{class:h.action},e("slot",{name:"secondary-action"})))}get el(){return a(this)}static get watchers(){return{metadata:["metadataWatchHandler"],selected:["selectedWatchHandler"],textDescription:["textDescriptionWatchHandler"],textLabel:["textLabelWatchHandler"],value:["valueWatchHandler"]}}static get style(){return":host{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);line-height:var(--calcite-app-line-height);background-color:var(--calcite-app-background)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;margin:0 var(--calcite-app-side-spacing-half) var(--calcite-app-cap-spacing-minimum);color:var(--calcite-app-foreground);-webkit-transition:background-color var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);transition:background-color var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);-webkit-animation:calcite-app-fade-in var(--calcite-app-animation-time) var(--calcite-app-easing-function);animation:calcite-app-fade-in var(--calcite-app-animation-time) var(--calcite-app-easing-function)}:host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}:host(:hover),:host(:focus){background-color:var(--calcite-app-background-hover)}:host(:last-child){margin-bottom:0;-webkit-box-shadow:0 1px 0 var(--calcite-app-border) inset;box-shadow:0 1px 0 var(--calcite-app-border) inset}.icon{color:var(--calcite-app-foreground-link);-ms-flex:0 0 0%;flex:0 0 0%;line-height:0;width:var(--calcite-app-icon-size);margin:0 var(--calcite-app-side-spacing-half)}.label{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;padding:var(--calcite-app-cap-spacing-three-quarters) var(--calcite-app-side-spacing-half);-ms-flex-align:center;align-items:center;cursor:pointer}.label:focus{outline-offset:var(--calcite-app-outline-inset)}.text-container{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;overflow:hidden;pointer-events:none;padding:0 var(--calcite-app-side-spacing-half)}.title{font-size:var(--calcite-app-font-size-0);display:-webkit-box;overflow:hidden;white-space:pre-wrap;word-break:break-all;-webkit-line-clamp:2;-webkit-box-orient:vertical}.description{color:var(--calcite-app-foreground-subtle);font-family:var(--calcite-app-font-family-monospace);font-size:var(--calcite-app-font-size--1);margin-top:var(--calcite-app-cap-spacing-quarter);display:-webkit-box;overflow:hidden;white-space:pre-wrap;word-break:break-all;-webkit-line-clamp:2;-webkit-box-orient:vertical}.action{-ms-flex:0 0 0%;flex:0 0 0%;justify-self:flex-end;margin:var(--calcite-app-cap-spacing-quarter) var(--calcite-app-side-spacing-half)}"}};export{n as calcite_pick_list_item};