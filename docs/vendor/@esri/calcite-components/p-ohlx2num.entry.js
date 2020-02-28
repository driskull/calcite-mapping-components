import{r as t,h as s,H as i,g as e,c as o}from"./p-dde25702.js";import{g as h,a as r,b as c}from"./p-f4073644.js";import{g as n}from"./p-c526d604.js";import{c as a,b as l,S as d,T as p,E as m,H as u,U as w,D as g}from"./p-fba2df54.js";const D=class{constructor(s){t(this,s),this.active=!1,this.alignment="left",this.theme="light",this.scale="m",this.width="m",this.type="click",this.items=[],this.sorted=!1,this.dropdownId=`calcite-dropdown-${n()}`,this.sortItems=t=>t.sort((t,s)=>t.position-s.position).concat.apply([],this.items.map(t=>t.items))}connectedCallback(){["left","right","center"].includes(this.alignment)||(this.alignment="left"),["light","dark"].includes(this.theme)||(this.theme="light"),["s","m","l"].includes(this.scale)||(this.scale="m"),["s","m","l"].includes(this.width)||(this.width="m"),["hover","click"].includes(this.type)||(this.type="hover")}componentDidLoad(){this.trigger=this.el.querySelector("[slot=dropdown-trigger]"),this.sorted||(this.items=this.sortItems(this.items),this.sorted=!0)}render(){const t=h(this.el),e=this.active.toString();return s(i,{dir:t,active:this.active,id:this.dropdownId},s("slot",{name:"dropdown-trigger","aria-haspopup":"true","aria-expanded":e}),s("div",{class:"calcite-dropdown-wrapper",role:"menu"},s("slot",null)))}openDropdown(t){"dropdown-trigger"===t.target.getAttribute("slot")&&(this.openCalciteDropdown(t),t.preventDefault())}closeCalciteDropdownOnClick(t){this.active&&t.target.offsetParent.id!==this.dropdownId&&this.closeCalciteDropdown()}closeCalciteDropdownOnEvent(){this.closeCalciteDropdown()}keyDownHandler(t){if("dropdown-trigger"===t.target.getAttribute("slot"))if("BUTTON"!==t.target.nodeName&&"CALCITE-BUTTON"!==t.target.nodeName)switch(t.keyCode){case d:case l:this.openCalciteDropdown(t);break;case a:this.closeCalciteDropdown()}else(t.keyCode===a||t.shiftKey&&t.keyCode===p)&&this.closeCalciteDropdown()}mouseoverHandler(t){"hover"===this.type&&this.openCalciteDropdown(t)}mouseoffHandler(){"hover"===this.type&&this.closeCalciteDropdown()}calciteDropdownItemKeyEvent(t){let s=t.detail.item,i="A"!==s.target.nodeName?s.target:s.target.parentNode,e=0===this.itemIndex(i),o=this.itemIndex(i)===this.items.length-1;switch(s.keyCode){case p:o&&!s.shiftKey?this.closeCalciteDropdown():e&&s.shiftKey?this.closeCalciteDropdown():s.shiftKey?this.focusPrevItem(i):this.focusNextItem(i);break;case g:this.focusNextItem(i);break;case w:this.focusPrevItem(i);break;case u:this.focusFirstItem();break;case m:this.focusLastItem()}}calciteDropdownMouseover(t){t.detail.target.focus()}registerCalciteDropdownGroup(t){this.items.push({items:t.detail.items,position:t.detail.position})}closeCalciteDropdown(){this.active=!1,this.trigger.focus()}focusFirstItem(){this.getFocusableElement(this.items[0])}focusLastItem(){this.getFocusableElement(this.items[this.items.length-1])}focusNextItem(t){const s=this.itemIndex(t);this.getFocusableElement(this.items[s+1]||this.items[0])}focusPrevItem(t){const s=this.itemIndex(t);this.getFocusableElement(this.items[s-1]||this.items[this.items.length-1])}itemIndex(t){return this.items.indexOf(t)}getFocusableElement(t){(t&&t.attributes.isLink?t.shadowRoot.querySelector("a"):t).focus()}openCalciteDropdown(t){this.active=!this.active,t.detail||"mouseenter"===t.type||setTimeout(()=>this.focusFirstItem(),50)}get el(){return e(this)}static get style(){return":root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}:host([theme=dark]){--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}:root{--calcite-border-radius:3px}:host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}.hydrated--invisible{visibility:hidden}:host([width=s]){--calcite-dropdown-width:12.5em}:host([width=m]){--calcite-dropdown-width:15em}:host([width=l]){--calcite-dropdown-width:20em}:host{position:relative;display:inline-block}:host([active]) .calcite-dropdown-wrapper{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;max-height:100vh;visibility:visible;pointer-events:auto}:host .calcite-dropdown-wrapper{-webkit-transform:translate3d(0,-1.5rem,0);transform:translate3d(0,-1.5rem,0);-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;visibility:hidden;opacity:0;display:block;position:absolute;left:0;z-index:200;overflow:hidden;max-height:0;width:auto;width:var(--calcite-dropdown-width);background:var(--calcite-ui-foreground);border-radius:var(--calcite-border-radius);-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.16);box-shadow:0 0 16px 0 rgba(0,0,0,.16);pointer-events:none}:host([alignment=right]) .calcite-dropdown-wrapper,:host([dir=rtl]) .calcite-dropdown-wrapper{right:0;left:unset}:host([dir=rtl][alignment=right]) .calcite-dropdown-wrapper{right:unset;left:0}:host([alignment=center]) .calcite-dropdown-wrapper{right:0;left:0;margin-right:auto;margin-left:auto}"}},C=class{constructor(s){t(this,s),this.selectionMode="single",this.items=[],this.dropdownGroupId=`calcite-dropdown-group-${n()}`,this.sortItems=t=>t.sort((t,s)=>t.position-s.position).map(t=>t.item),this.calciteDropdownItemHasChanged=o(this,"calciteDropdownItemHasChanged",7),this.registerCalciteDropdownGroup=o(this,"registerCalciteDropdownGroup",7)}connectedCallback(){["multi","single","none"].includes(this.selectionMode)||(this.selectionMode="single")}componentDidLoad(){this.groupPosition=this.getGroupPosition(),this.items=this.sortItems(this.items),this.registerCalciteDropdownGroup.emit({items:this.items,position:this.groupPosition,groupId:this.dropdownGroupId})}render(){const t=r(this.el),e=c(this.el,"scale","m"),o=this.groupTitle?s("span",{class:"dropdown-title"},this.groupTitle):null;return s(i,{theme:t,scale:e},o,s("slot",null))}registerCalciteDropdownItem(t){this.items.push({item:t.target,position:t.detail.position}),this.requestedDropdownItem=t.detail.requestedDropdownItem}updateActiveItemOnChange(t){this.requestedDropdownGroup=t.detail.requestedDropdownGroup,this.requestedDropdownItem=t.detail.requestedDropdownItem,this.calciteDropdownItemHasChanged.emit({requestedDropdownGroup:this.requestedDropdownGroup,requestedDropdownItem:this.requestedDropdownItem})}getGroupPosition(){return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-dropdown-group"),this.el)}get el(){return e(this)}static get style(){return":root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}:host([theme=dark]){--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}:root{--calcite-border-radius:3px}:host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}.hydrated--invisible{visibility:hidden}:host([scale=s]){--calcite-dropdown-group-padding:0.5rem 0}:host([scale=m]){--calcite-dropdown-group-padding:0.75rem 0}:host([scale=l]){--calcite-dropdown-group-padding:1rem 0}:host .dropdown-title{display:block;margin:0 1rem -1px 1rem;padding:var(--calcite-dropdown-group-padding);border-bottom:1px solid var(--calcite-ui-border-3);color:var(--calcite-ui-text-2);font-weight:600;word-wrap:break-word;cursor:default;font-size:.875rem;line-height:1.5}"}},I=class{constructor(s){t(this,s),this.active=!1,this.dropdownItemId=`calcite-dropdown-item-${n()}`,this.selectionMode=c(this.el,"selection-mode","single"),this.calciteDropdownItemKeyEvent=o(this,"calciteDropdownItemKeyEvent",7),this.calciteDropdownItemMouseover=o(this,"calciteDropdownItemMouseover",7),this.calciteDropdownItemSelected=o(this,"calciteDropdownItemSelected",7),this.closeCalciteDropdown=o(this,"closeCalciteDropdown",7),this.registerCalciteDropdownItem=o(this,"registerCalciteDropdownItem",7)}componentDidLoad(){this.itemPosition=this.getItemPosition(),this.registerCalciteDropdownItem.emit({position:this.itemPosition})}render(){const t=h(this.el),e=r(this.el),o=c(this.el,"scale","m"),n="s"===o||"m"===o?"s":"m",a=s("calcite-icon",{class:"dropdown-item-icon-start",icon:this.iconStart,scale:n}),l=s("calcite-icon",{class:"dropdown-item-icon-end",icon:this.iconEnd,scale:n}),d=this.iconStart&&this.iconEnd?[a,s("slot",null),l]:this.iconStart?[a,s("slot",null)]:this.iconEnd?[s("slot",null),l]:s("slot",null),p=this.href?s("a",{href:this.href,title:this.linkTitle},d):d;return s(i,{theme:e,dir:t,scale:o,tabindex:"0",role:"menuitem","aria-selected":this.active.toString(),isLink:this.href},p)}onClick(){this.emitRequestedItem()}onMouseover(t){this.calciteDropdownItemMouseover.emit(t)}keyDownHandler(t){switch(t.keyCode){case d:case l:this.emitRequestedItem(),t.path&&"A"===t.path[0].nodeName&&t.click();break;case a:this.closeCalciteDropdown.emit();break;case p:case w:case g:case u:case m:this.calciteDropdownItemKeyEvent.emit({item:t})}t.preventDefault()}registerCalciteDropdownGroup(t){this.currentDropdownGroup=t.detail.groupId}updateActiveItemOnChange(t){this.requestedDropdownGroup=t.detail.requestedDropdownGroup,this.requestedDropdownItem=t.detail.requestedDropdownItem,this.determineActiveItem()}determineActiveItem(){switch(this.selectionMode){case"multi":this.dropdownItemId===this.requestedDropdownItem&&(this.active=!this.active);break;case"single":this.dropdownItemId===this.requestedDropdownItem?this.active=!0:this.requestedDropdownGroup===this.currentDropdownGroup&&(this.active=!1);break;case"none":this.active=!1}}emitRequestedItem(){this.calciteDropdownItemSelected.emit({requestedDropdownItem:this.dropdownItemId,requestedDropdownGroup:this.currentDropdownGroup}),this.closeCalciteDropdown.emit()}getItemPosition(){const t=this.el.closest("calcite-dropdown-group");return Array.prototype.indexOf.call(t.querySelectorAll("calcite-dropdown-item"),this.el)}get el(){return e(this)}static get style(){return"\@charset \"UTF-8\";:root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}:host([theme=dark]){--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}:root{--calcite-border-radius:3px}:host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}.hydrated--invisible{visibility:hidden}:host([scale=s]){--calcite-dropdown-item-padding:0.3rem 1rem 0.3rem 2.25rem}:host([scale=m]){--calcite-dropdown-item-padding:0.5rem 1rem 0.5rem 2.25rem}:host([scale=l]){--calcite-dropdown-item-padding:0.75rem 1rem 0.75rem 2.25rem}:host([dir=rtl][scale=s]){--calcite-dropdown-item-padding:0.3rem 2.25rem 0.3rem 1rem}:host([dir=rtl][scale=m]){--calcite-dropdown-item-padding:0.5rem 2.25rem 0.5rem 1rem}:host([dir=rtl][scale=l]){--calcite-dropdown-item-padding:0.75rem 2.25rem 0.75rem 1rem}:host{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;font-size:.875rem;line-height:1.5;color:var(--calcite-ui-text-3);padding:var(--calcite-dropdown-item-padding);cursor:pointer;text-decoration:none;outline:none;position:relative}:host,:host:before{-webkit-transition:.15s ease-in-out;transition:.15s ease-in-out}:host:before{content:\"•\";position:absolute;left:1rem;opacity:0;color:grey}:host(:active),:host(:focus),:host(:hover){background-color:var(--calcite-ui-foreground-hover);color:var(--calcite-ui-text-1);text-decoration:none}:host(:active){background-color:var(--calcite-ui-foreground-press)}:host(:active):before,:host(:focus):before,:host(:hover):before{opacity:1}:host([dir=rtl]):before{left:unset;right:1rem}:host([active]){color:var(--calcite-ui-text-1);font-weight:500}:host([active]):before{opacity:1}:host([active]):before,:host([active]) calcite-icon{color:var(--calcite-ui-blue)}:host([islink]){padding:0}:host([islink]):before{display:none}:host([islink]) a{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;font-size:.875rem;line-height:1.5;color:var(--calcite-ui-text-3);padding:var(--calcite-dropdown-item-padding);cursor:pointer;text-decoration:none;outline:none;position:relative}:host([islink]) a,:host([islink]) a:before{-webkit-transition:.15s ease-in-out;transition:.15s ease-in-out}:host([islink]) a:before{content:\"•\";position:absolute;left:1rem;opacity:0;color:grey}:host([islink]) a:active,:host([islink]) a:focus,:host([islink]) a:hover{background-color:var(--calcite-ui-foreground-hover);text-decoration:none}:host([islink]) a:active:before,:host([islink]) a:focus:before,:host([islink]) a:hover:before{opacity:1}:host([islink]) a:active{background-color:var(--calcite-ui-foreground-press)}:host([islink][active]) a{color:var(--calcite-ui-text-1);font-weight:500}:host([islink][active]) a:before{opacity:1;color:var(--calcite-ui-blue)}:host([islink][dir=rtl]) a{padding:var(--calcite-dropdown-item-padding)}:host([islink][dir=rtl]) a:before{left:unset;right:1rem}:host .dropdown-item-icon-start{margin-right:1rem}:host .dropdown-item-icon-end{margin-left:auto;padding-left:1rem}:host([dir=rtl]) .dropdown-item-icon-start,:host([dir=rtl]) calcite-icon{margin-right:0;margin-left:1rem}:host([dir=rtl]) .dropdown-item-icon-end{margin-right:auto;padding-right:1rem;margin-left:0;padding-left:0}"}};export{D as calcite_dropdown,C as calcite_dropdown_group,I as calcite_dropdown_item};