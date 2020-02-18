import{h as t,H as i}from"./p-a6db2cfa.js";import{C as s}from"./p-7f24b979.js";import{C as e}from"./p-4d533d6f.js";import{d as a}from"./p-30ecf6c3.js";const l={mutationObserverCallback(){this.setUpItems(),this.setUpFilter()},initialize(){this.setUpItems(),this.setUpFilter(),this.emitCalciteListChange=a(l.internalCalciteListChangeEvent.bind(this),0)},initializeObserver(){this.observer.observe(this.el,{childList:!0,subtree:!0})},cleanUpObserver(){this.observer.disconnect()},calciteListItemChangeHandler(t){const{selectedValues:i}=this,{item:s,value:e,selected:a,shiftPressed:l}=t.detail;a?(this.multiple||this.deselectSiblingItems(s),this.multiple&&l&&this.selectSiblings(s),i.set(e,s)):(i.delete(e),this.multiple&&l&&this.selectSiblings(s,!0)),this.lastSelectedItem=s,this.emitCalciteListChange()},calciteListItemValueChangeHandler(t){t.stopPropagation();const i=t.detail.oldValue;if(this.selectedValues.has(i)){const s=this.selectedValues.get(i);this.selectedValues.delete(i),this.selectedValues.set(t.detail.newValue,s)}},internalCalciteListChangeEvent(){this.calciteListChange.emit(this.selectedValues)},setUpItems(t){this.items=Array.from(this.el.querySelectorAll(t)),this.items.forEach(t=>{t.icon=this.getIconType(),t.compact=this.compact,this.multiple||(t.disableDeselect=!0),t.selected&&this.selectedValues.set(t.value,t)})},setUpFilter(){this.filterEnabled&&(this.dataForFilter=this.getItemData())},deselectSiblingItems(t){this.items.forEach(i=>{i.value!==t.value&&(i.toggleSelected(!1),this.selectedValues.has(i.value)&&this.selectedValues.delete(i.value))})},selectSiblings(t,i=!1){if(!this.lastSelectedItem)return;const{items:s}=this,e=s.findIndex(t=>t.value===this.lastSelectedItem.value),a=s.findIndex(i=>i.value===t.value);s.slice(Math.min(e,a),Math.max(e,a)).forEach(t=>{t.toggleSelected(!i),i?this.selectedValues.delete(t.value):this.selectedValues.set(t.value,t)})},handleFilter(t){const i=t.detail.map(t=>t.value);this.items.forEach(t=>{const s=t.parentElement.matches("calcite-pick-list-group");if(t.hidden=-1===i.indexOf(t.value),s){const s=t.parentElement.querySelector("[slot=parent-item]");null!==s&&(-1!==i.indexOf(s.value)&&(t.hidden=!1),-1!==i.indexOf(t.value)&&(s.hidden=!1))}})},getItemData(){const t=[];return this.items.forEach(i=>{const s={};s.label=i.textLabel,s.description=i.textDescription,s.metadata=i.metadata,s.value=i.value,t.push(s)}),t}};const h=a=>{var{props:l}=a,h=function(t,i){var s={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&i.indexOf(e)<0&&(s[e]=t[e]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(e=Object.getOwnPropertySymbols(t);a<e.length;a++)i.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(s[e[a]]=t[e[a]])}return s}(a,["props"]);const{disabled:r,loading:n,filterEnabled:c,dataForFilter:o,handleFilter:d,textFilterPlaceholder:b}=l;return t(i,Object.assign({role:"menu","aria-disabled":r.toString(),"aria-busy":n.toString()},h),t("header",{class:{[e.sticky]:!0}},c?t("calcite-filter",{data:o,textPlaceholder:b,"aria-label":b,onCalciteFilterChange:d}):null,t("slot",{name:"menu-actions"})),t("slot",null),((i,e)=>t(s,{loading:i,disabled:e}))(n,r))};export{h as L,l as s};