var __awaiter=this&&this.__awaiter||function(t,e,o,i){function r(t){return t instanceof o?t:new o((function(e){e(t)}))}return new(o||(o=Promise))((function(o,n){function s(t){try{c(i.next(t))}catch(e){n(e)}}function a(t){try{c(i["throw"](t))}catch(e){n(e)}}function c(t){t.done?o(t.value):r(t.value).then(s,a)}c((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var o={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},i,r,n,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(t){return function(e){return c([t,e])}}function c(s){if(i)throw new TypeError("Generator is already executing.");while(o)try{if(i=1,r&&(n=s[0]&2?r["return"]:s[0]?r["throw"]||((n=r["return"])&&n.call(r),0):r.next)&&!(n=n.call(r,s[1])).done)return n;if(r=0,n)s=[s[0]&2,n.value];switch(s[0]){case 0:case 1:n=s;break;case 4:o.label++;return{value:s[1],done:false};case 5:o.label++;r=s[1];s=[0];continue;case 7:s=o.ops.pop();o.trys.pop();continue;default:if(!(n=o.trys,n=n.length>0&&n[n.length-1])&&(s[0]===6||s[0]===2)){o=0;continue}if(s[0]===3&&(!n||s[1]>n[0]&&s[1]<n[3])){o.label=s[1];break}if(s[0]===6&&o.label<n[1]){o.label=n[1];n=s;break}if(n&&o.label<n[2]){o.label=n[2];o.ops.push(s);break}if(n[2])o.ops.pop();o.trys.pop();continue}s=e.call(t,o)}catch(a){s=[6,a];r=0}finally{i=n=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-ba945cc8.system.js","./p-68434ff0.system.js","./p-6d3b7ecb.system.js","./p-9ded8035.system.js"],(function(t){"use strict";var e,o,i,r,n,s,a,c,l,d,p,u,h,m,f,w;return{setters:[function(t){e=t.r;o=t.h;i=t.H;r=t.g;n=t.c},function(t){s=t.g},function(t){a=t.a;c=t.E;l=t.S;d=t.T;p=t.b;u=t.H;h=t.U;m=t.D},function(t){f=t.f;w=t.a}],execute:function(){var g=":host([hidden]){display:none}:host([width=s]){--calcite-dropdown-width:12.5em}:host([width=m]){--calcite-dropdown-width:15em}:host([width=l]){--calcite-dropdown-width:20em}:host([scale=s]){--calcite-dropdown-group-padding:0.5rem 0;--calcite-dropdown-item-padding:0.3rem 1rem 0.3rem 2.25rem}:host([scale=m]){--calcite-dropdown-group-padding:0.75rem 0;--calcite-dropdown-item-padding:0.5rem 1rem 0.5rem 2.25rem}:host([scale=l]){--calcite-dropdown-group-padding:1rem 0;--calcite-dropdown-item-padding:0.75rem 1rem 0.75rem 2.25rem}:host([dir=rtl][scale=s]){--calcite-dropdown-item-padding:0.3rem 2.25rem 0.3rem 1rem}:host([dir=rtl][scale=m]){--calcite-dropdown-item-padding:0.5rem 2.25rem 0.5rem 1rem}:host([dir=rtl][scale=l]){--calcite-dropdown-item-padding:0.75rem 2.25rem 0.75rem 1rem}:host{position:relative;display:inline-block}:host([active]) .calcite-dropdown-wrapper{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);opacity:1;max-height:90vh;overflow-y:auto;visibility:visible;pointer-events:initial}:host .calcite-dropdown-wrapper{-webkit-transform:translate3d(0, -1.5rem, 0);transform:translate3d(0, -1.5rem, 0);-webkit-transition:all 0.15s ease-in-out, max-height 0.15s;transition:all 0.15s ease-in-out, max-height 0.15s;visibility:hidden;opacity:0;display:block;position:absolute;left:0;z-index:200;overflow:hidden;max-height:0;width:auto;width:var(--calcite-dropdown-width);background:var(--calcite-ui-foreground-1);border-radius:var(--calcite-border-radius);-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);pointer-events:none}:host-context([dir=rtl]) .calcite-dropdown-wrapper{right:0;left:unset}:host([alignment=end]) .calcite-dropdown-wrapper{right:0;left:unset}:host([dir=rtl][alignment=end]) .calcite-dropdown-wrapper{right:unset;left:0}:host([alignment=center]) .calcite-dropdown-wrapper{right:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}:host([alignment=center][dir=rtl]) .calcite-dropdown-wrapper{right:50%;left:0;-webkit-transform:translateX(50%);transform:translateX(50%)}";var v=t("calcite_dropdown",function(){function t(t){var o=this;e(this,t);this.active=false;this.alignment="start";this.scale="m";this.width="m";this.type="click";this.items=[];this.sorted=false;this.sortItems=function(t){return t.sort((function(t,e){return t.position-e.position})).concat.apply([],o.items.map((function(t){return t.items})))}}t.prototype.connectedCallback=function(){var t=["start","center","end"];if(!t.includes(this.alignment))this.alignment="start";var e=["s","m","l"];if(!e.includes(this.scale))this.scale="m";var o=["s","m","l"];if(!o.includes(this.width))this.width="m";var i=["hover","click"];if(!i.includes(this.type))this.type="hover"};t.prototype.componentDidLoad=function(){this.trigger=this.el.querySelector("[slot=dropdown-trigger]");if(!this.sorted){this.items=this.sortItems(this.items);this.sorted=true}};t.prototype.render=function(){return o(i,null,o("slot",{name:"dropdown-trigger","aria-haspopup":"true","aria-expanded":this.active.toString()}),o("div",{class:"calcite-dropdown-wrapper",role:"menu"},o("slot",null)))};t.prototype.openDropdown=function(t){if(t.target.getAttribute("slot")==="dropdown-trigger"){this.openCalciteDropdown();t.preventDefault()}};t.prototype.closeCalciteDropdownOnClick=function(t){if(this.active&&t.target.offsetParent!==this.el)this.closeCalciteDropdown()};t.prototype.closeCalciteDropdownOnEvent=function(){this.closeCalciteDropdown()};t.prototype.keyDownHandler=function(t){if(t.target.getAttribute("slot")==="dropdown-trigger"){if(t.target.nodeName!=="BUTTON"&&t.target.nodeName!=="CALCITE-BUTTON"){switch(t.keyCode){case l:case c:this.openCalciteDropdown();break;case a:this.closeCalciteDropdown();break}}else if(t.keyCode===a||t.shiftKey&&t.keyCode===d){this.closeCalciteDropdown()}}};t.prototype.mouseoverHandler=function(){if(this.type==="hover"){this.openCalciteDropdown()}};t.prototype.mouseoffHandler=function(){if(this.type==="hover"){this.closeCalciteDropdown()}};t.prototype.calciteDropdownItemKeyEvent=function(t){var e=t.detail.item;var o=e.target.nodeName!=="A"?e.target:e.target.parentNode;var i=this.itemIndex(o)===0;var r=this.itemIndex(o)===this.items.length-1;switch(e.keyCode){case d:if(r&&!e.shiftKey)this.closeCalciteDropdown();else if(i&&e.shiftKey)this.closeCalciteDropdown();else if(e.shiftKey)this.focusPrevItem(o);else this.focusNextItem(o);break;case m:this.focusNextItem(o);break;case h:this.focusPrevItem(o);break;case u:this.focusFirstItem();break;case p:this.focusLastItem();break}};t.prototype.calciteDropdownMouseover=function(t){var e=t.detail.target;e.focus()};t.prototype.registerCalciteDropdownGroup=function(t){var e={items:t.detail.items,position:t.detail.position};this.items.push(e)};t.prototype.closeCalciteDropdown=function(){this.active=false;this.trigger.focus()};t.prototype.focusOnFirstActiveOrFirstItem=function(){this.getFocusableElement(this.items.find((function(t){return t.active}))||this.items[0])};t.prototype.focusFirstItem=function(){var t=this.items[0];this.getFocusableElement(t)};t.prototype.focusLastItem=function(){var t=this.items[this.items.length-1];this.getFocusableElement(t)};t.prototype.focusNextItem=function(t){var e=this.itemIndex(t);var o=this.items[e+1]||this.items[0];this.getFocusableElement(o)};t.prototype.focusPrevItem=function(t){var e=this.itemIndex(t);var o=this.items[e-1]||this.items[this.items.length-1];this.getFocusableElement(o)};t.prototype.itemIndex=function(t){return this.items.indexOf(t)};t.prototype.getFocusableElement=function(t){if(!t){return}var e=t.attributes.isLink?t.shadowRoot.querySelector("a"):t;f(e)};t.prototype.openCalciteDropdown=function(){var t=this;this.active=!this.active;var e=50;if(this.active){setTimeout((function(){return t.focusOnFirstActiveOrFirstItem()}),e)}};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});return t}());v.style=g;var y=":host([hidden]){display:none}:host .dropdown-title{display:block;margin:0 1rem -1px 1rem;padding:var(--calcite-dropdown-group-padding);border-bottom:1px solid var(--calcite-ui-border-3);color:var(--calcite-ui-text-2);font-weight:600;word-wrap:break-word;cursor:default;font-size:0.875rem;line-height:1.5}";var b=t("calcite_dropdown_group",function(){function t(t){e(this,t);this.selectionMode="single";this.items=[];this.dropdownGroupId="calcite-dropdown-group-"+s();this.sortItems=function(t){return t.sort((function(t,e){return t.position-e.position})).map((function(t){return t.item}))};this.calciteDropdownItemHasChanged=n(this,"calciteDropdownItemHasChanged",7);this.registerCalciteDropdownGroup=n(this,"registerCalciteDropdownGroup",7)}t.prototype.connectedCallback=function(){var t=["multi","single","none"];if(!t.includes(this.selectionMode))this.selectionMode="single"};t.prototype.componentDidLoad=function(){this.groupPosition=this.getGroupPosition();this.items=this.sortItems(this.items);this.registerCalciteDropdownGroup.emit({items:this.items,position:this.groupPosition,groupId:this.dropdownGroupId})};t.prototype.render=function(){var t=this.groupTitle?o("span",{class:"dropdown-title"},this.groupTitle):null;return o(i,null,t,o("slot",null))};t.prototype.registerCalciteDropdownItem=function(t){var e={item:t.target,position:t.detail.position};this.items.push(e);this.requestedDropdownItem=t.detail.requestedDropdownItem};t.prototype.updateActiveItemOnChange=function(t){this.requestedDropdownGroup=t.detail.requestedDropdownGroup;this.requestedDropdownItem=t.detail.requestedDropdownItem;this.calciteDropdownItemHasChanged.emit({requestedDropdownGroup:this.requestedDropdownGroup,requestedDropdownItem:this.requestedDropdownItem})};t.prototype.getGroupPosition=function(){return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-dropdown-group"),this.el)};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});return t}());b.style=y;var D='@charset "UTF-8";:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;font-size:0.875rem;line-height:1.5;color:var(--calcite-ui-text-3);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;padding:var(--calcite-dropdown-item-padding);cursor:pointer;text-decoration:none;outline:none;position:relative}:host:before{content:"•";position:absolute;left:1rem;opacity:0;color:var(--calcite-ui-border-1);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host([islink]){padding:0}:host([islink]) a{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;font-size:0.875rem;line-height:1.5;color:var(--calcite-ui-text-3);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;padding:var(--calcite-dropdown-item-padding);cursor:pointer;text-decoration:none;outline:none;position:relative}:host([islink]) a:before{content:"•";position:absolute;left:1rem;opacity:0;color:var(--calcite-ui-border-1);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host(:hover),:host(:focus),:host(:active){background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);text-decoration:none}:host(:active){background-color:var(--calcite-ui-foreground-3)}:host(:hover):before,:host(:active):before,:host(:focus):before{opacity:1}:host-context([dir=rtl]):before{left:unset;right:1rem}:host([active]:not([selection-mode=none])){color:var(--calcite-ui-text-1);font-weight:500}:host([active]:not([selection-mode=none])):before{opacity:1;color:var(--calcite-ui-blue-1)}:host([active]:not([selection-mode=none])) calcite-icon{color:var(--calcite-ui-blue-1)}:host([selection-mode=multi]):before,:host([selection-mode=none]):before{display:none}:host([selection-mode=none]:not([islink])),:host([selection-mode=none][isLink]) a{padding-left:1rem}:host([dir=rtl][selection-mode=none]:not([islink])),:host([dir=rtl][selection-mode=none][isLink]) a{padding-right:1rem}:host .dropdown-item-check-icon{position:absolute;left:0.8571428571rem;opacity:0;-webkit-transform:scale(0.9);transform:scale(0.9);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host-context([dir=rtl]) .dropdown-item-check-icon{left:unset;right:0.8571428571rem}:host(:hover) .dropdown-item-check-icon{color:var(--calcite-ui-border-1);opacity:1}:host([active]) .dropdown-item-check-icon{color:var(--calcite-ui-blue-1);opacity:1}:host .dropdown-item-icon-start{margin-right:1rem}:host .dropdown-item-icon-end{margin-left:auto;padding-left:1rem}:host-context([dir=rtl]) calcite-icon{margin-right:0;margin-left:1rem}:host-context([dir=rtl]) .dropdown-item-icon-start{margin-left:1rem;margin-right:0}:host-context([dir=rtl]) .dropdown-item-icon-end{margin-right:auto;padding-right:1rem;margin-left:0;padding-left:0}';var I=t("calcite_dropdown_item",function(){function t(t){e(this,t);this.active=false;this.dropdownItemId="calcite-dropdown-item-"+s();this.selectionMode=w(this.el,"selection-mode","single");this.calciteDropdownItemKeyEvent=n(this,"calciteDropdownItemKeyEvent",7);this.calciteDropdownItemMouseover=n(this,"calciteDropdownItemMouseover",7);this.calciteDropdownItemSelected=n(this,"calciteDropdownItemSelected",7);this.closeCalciteDropdown=n(this,"closeCalciteDropdown",7);this.registerCalciteDropdownItem=n(this,"registerCalciteDropdownItem",7)}t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.el.focus();return[2]}))}))};t.prototype.componentDidLoad=function(){this.itemPosition=this.getItemPosition();this.registerCalciteDropdownItem.emit({position:this.itemPosition})};t.prototype.render=function(){var t=this.getAttributes();var e=w(this.el,"scale","m");var r=e==="s"||e==="m"?"s":"m";var n=o("calcite-icon",{class:"dropdown-item-icon-start",icon:this.iconStart,scale:r});var s=o("calcite-icon",{class:"dropdown-item-icon-end",icon:this.iconEnd,scale:r});var a=this.iconStart&&this.iconEnd?[n,o("slot",null),s]:this.iconStart?[n,o("slot",null)]:this.iconEnd?[o("slot",null),s]:o("slot",null);var c=!this.href?a:o("a",Object.assign({},t),a);return o(i,{tabindex:"0",role:"menuitem","selection-mode":this.selectionMode,"aria-selected":this.active.toString(),isLink:this.href},this.selectionMode==="multi"?o("calcite-icon",{class:"dropdown-item-check-icon",scale:"s",icon:"check"}):null,c)};t.prototype.onClick=function(){this.emitRequestedItem()};t.prototype.onMouseover=function(t){this.calciteDropdownItemMouseover.emit(t)};t.prototype.keyDownHandler=function(t){switch(t.keyCode){case l:case c:this.emitRequestedItem();if(t.path&&t.path[0].nodeName==="A")t.click();break;case a:this.closeCalciteDropdown.emit();break;case d:case h:case m:case u:case p:this.calciteDropdownItemKeyEvent.emit({item:t});break}t.preventDefault()};t.prototype.registerCalciteDropdownGroup=function(t){this.currentDropdownGroup=t.detail.groupId};t.prototype.updateActiveItemOnChange=function(t){this.requestedDropdownGroup=t.detail.requestedDropdownGroup;this.requestedDropdownItem=t.detail.requestedDropdownItem;this.determineActiveItem()};t.prototype.determineActiveItem=function(){switch(this.selectionMode){case"multi":if(this.dropdownItemId===this.requestedDropdownItem)this.active=!this.active;break;case"single":if(this.dropdownItemId===this.requestedDropdownItem)this.active=true;else if(this.requestedDropdownGroup===this.currentDropdownGroup)this.active=false;break;case"none":this.active=false;break}};t.prototype.emitRequestedItem=function(){this.calciteDropdownItemSelected.emit({requestedDropdownItem:this.dropdownItemId,requestedDropdownGroup:this.currentDropdownGroup});this.closeCalciteDropdown.emit()};t.prototype.getAttributes=function(){var t=["icon-start","icon-end","active","hasText","isLink","dir","id","theme"];return Array.from(this.el.attributes).filter((function(e){return e&&!t.includes(e.name)})).reduce((function(t,e){var o;var i=e.name,r=e.value;return Object.assign(Object.assign({},t),(o={},o[i]=r,o))}),{})};t.prototype.getItemPosition=function(){var t=this.el.closest("calcite-dropdown-group");return Array.prototype.indexOf.call(t.querySelectorAll("calcite-dropdown-item"),this.el)};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});return t}());I.style=D}}}));